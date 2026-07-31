var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointSpring' )
  var i623 = data
  i622.spring = i623[0]
  i622.damper = i623[1]
  i622.targetPosition = i623[2]
  return i622
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointMotor' )
  var i625 = data
  i624.m_TargetVelocity = i625[0]
  i624.m_Force = i625[1]
  i624.m_FreeSpin = i625[2]
  return i624
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointLimits' )
  var i627 = data
  i626.m_Min = i627[0]
  i626.m_Max = i627[1]
  i626.m_Bounciness = i627[2]
  i626.m_BounceMinVelocity = i627[3]
  i626.m_ContactDistance = i627[4]
  i626.minBounce = i627[5]
  i626.maxBounce = i627[6]
  return i626
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointDrive' )
  var i629 = data
  i628.m_PositionSpring = i629[0]
  i628.m_PositionDamper = i629[1]
  i628.m_MaximumForce = i629[2]
  i628.m_UseAcceleration = i629[3]
  return i628
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i631 = data
  i630.m_Spring = i631[0]
  i630.m_Damper = i631[1]
  return i630
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i633 = data
  i632.m_Limit = i633[0]
  i632.m_Bounciness = i633[1]
  i632.m_ContactDistance = i633[2]
  return i632
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i635 = data
  i634.m_ExtremumSlip = i635[0]
  i634.m_ExtremumValue = i635[1]
  i634.m_AsymptoteSlip = i635[2]
  i634.m_AsymptoteValue = i635[3]
  i634.m_Stiffness = i635[4]
  return i634
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i637 = data
  i636.m_LowerAngle = i637[0]
  i636.m_UpperAngle = i637[1]
  return i636
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i639 = data
  i638.m_MotorSpeed = i639[0]
  i638.m_MaximumMotorTorque = i639[1]
  return i638
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i641 = data
  i640.m_DampingRatio = i641[0]
  i640.m_Frequency = i641[1]
  i640.m_Angle = i641[2]
  return i640
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i643 = data
  i642.m_LowerTranslation = i643[0]
  i642.m_UpperTranslation = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i644 = root || new pc.UnityMaterial()
  var i645 = data
  i644.name = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'shader')
  i644.renderQueue = i645[3]
  i644.enableInstancing = !!i645[4]
  var i647 = i645[5]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i647[i + 0]) );
  }
  i644.floatParameters = i646
  var i649 = i645[6]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i649[i + 0]) );
  }
  i644.colorParameters = i648
  var i651 = i645[7]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i651[i + 0]) );
  }
  i644.vectorParameters = i650
  var i653 = i645[8]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i653[i + 0]) );
  }
  i644.textureParameters = i652
  var i655 = i645[9]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i655[i + 0]) );
  }
  i644.materialFlags = i654
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i659 = data
  i658.name = i659[0]
  i658.value = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i663 = data
  i662.name = i663[0]
  i662.value = new pc.Color(i663[1], i663[2], i663[3], i663[4])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i667 = data
  i666.name = i667[0]
  i666.value = new pc.Vec4( i667[1], i667[2], i667[3], i667[4] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'value')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i675 = data
  i674.name = i675[0]
  i674.enabled = !!i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i677 = data
  i676.name = i677[0]
  i676.width = i677[1]
  i676.height = i677[2]
  i676.mipmapCount = i677[3]
  i676.anisoLevel = i677[4]
  i676.filterMode = i677[5]
  i676.hdr = !!i677[6]
  i676.format = i677[7]
  i676.wrapMode = i677[8]
  i676.alphaIsTransparency = !!i677[9]
  i676.alphaSource = i677[10]
  i676.graphicsFormat = i677[11]
  i676.sRGBTexture = !!i677[12]
  i676.desiredColorSpace = i677[13]
  i676.wrapU = i677[14]
  i676.wrapV = i677[15]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i679 = data
  i678.name = i679[0]
  i678.halfPrecision = !!i679[1]
  i678.useSimplification = !!i679[2]
  i678.useUInt32IndexFormat = !!i679[3]
  i678.vertexCount = i679[4]
  i678.aabb = i679[5]
  var i681 = i679[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( !!i681[i + 0] );
  }
  i678.streams = i680
  i678.vertices = i679[7]
  var i683 = i679[8]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i683[i + 0]) );
  }
  i678.subMeshes = i682
  var i685 = i679[9]
  var i684 = []
  for(var i = 0; i < i685.length; i += 16) {
    i684.push( new pc.Mat4().setData(i685[i + 0], i685[i + 1], i685[i + 2], i685[i + 3],  i685[i + 4], i685[i + 5], i685[i + 6], i685[i + 7],  i685[i + 8], i685[i + 9], i685[i + 10], i685[i + 11],  i685[i + 12], i685[i + 13], i685[i + 14], i685[i + 15]) );
  }
  i678.bindposes = i684
  var i687 = i679[10]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i687[i + 0]) );
  }
  i678.blendShapes = i686
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i693 = data
  i692.triangles = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i699 = data
  i698.name = i699[0]
  var i701 = i699[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i701[i + 0]) );
  }
  i698.frames = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i703 = data
  i702.name = i703[0]
  i702.index = i703[1]
  i702.startup = !!i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i705 = data
  i704.aspect = i705[0]
  i704.orthographic = !!i705[1]
  i704.orthographicSize = i705[2]
  i704.backgroundColor = new pc.Color(i705[3], i705[4], i705[5], i705[6])
  i704.nearClipPlane = i705[7]
  i704.farClipPlane = i705[8]
  i704.fieldOfView = i705[9]
  i704.depth = i705[10]
  i704.clearFlags = i705[11]
  i704.cullingMask = i705[12]
  i704.rect = i705[13]
  request.r(i705[14], i705[15], 0, i704, 'targetTexture')
  i704.usePhysicalProperties = !!i705[16]
  i704.focalLength = i705[17]
  i704.sensorSize = new pc.Vec2( i705[18], i705[19] )
  i704.lensShift = new pc.Vec2( i705[20], i705[21] )
  i704.gateFit = i705[22]
  i704.commandBufferCount = i705[23]
  i704.cameraType = i705[24]
  i704.enabled = !!i705[25]
  return i704
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i706 = root || request.c( 'CameraFollow2D' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'target')
  i706.smoothSpeed = i707[2]
  i706.offset = new pc.Vec3( i707[3], i707[4], i707[5] )
  i706.followY = !!i707[6]
  return i706
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i708 = root || request.c( 'AutoCameraFit' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'tallScreenObject')
  i708.tallScreenRatioThreshold = i709[2]
  i708.tallScreenYOffset = i709[3]
  request.r(i709[4], i709[5], 0, i708, 'canvasBtn')
  request.r(i709[6], i709[7], 0, i708, 'targetArea')
  i708.paddingLandscape = i709[8]
  i708.paddingPortrait = i709[9]
  i708.extraPaddingSmallScreen = i709[10]
  i708.smallScreenThreshold = i709[11]
  i708.autoUpdateOnResize = !!i709[12]
  i708.adjustInEditMode = !!i709[13]
  return i708
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i710 = root || request.c( 'MoveBetweenPoints' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'pointA')
  request.r(i711[2], i711[3], 0, i710, 'pointB')
  i710.duration = i711[4]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i713 = data
  i712.color = new pc.Color(i713[0], i713[1], i713[2], i713[3])
  request.r(i713[4], i713[5], 0, i712, 'sprite')
  i712.flipX = !!i713[6]
  i712.flipY = !!i713[7]
  i712.drawMode = i713[8]
  i712.size = new pc.Vec2( i713[9], i713[10] )
  i712.tileMode = i713[11]
  i712.adaptiveModeThreshold = i713[12]
  i712.maskInteraction = i713[13]
  i712.spriteSortPoint = i713[14]
  i712.enabled = !!i713[15]
  request.r(i713[16], i713[17], 0, i712, 'sharedMaterial')
  var i715 = i713[18]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.sharedMaterials = i714
  i712.receiveShadows = !!i713[19]
  i712.shadowCastingMode = i713[20]
  i712.sortingLayerID = i713[21]
  i712.sortingOrder = i713[22]
  i712.lightmapIndex = i713[23]
  i712.lightmapSceneIndex = i713[24]
  i712.lightmapScaleOffset = new pc.Vec4( i713[25], i713[26], i713[27], i713[28] )
  i712.lightProbeUsage = i713[29]
  i712.reflectionProbeUsage = i713[30]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i719 = data
  i718.name = i719[0]
  i718.tagId = i719[1]
  i718.enabled = !!i719[2]
  i718.isStatic = !!i719[3]
  i718.layer = i719[4]
  return i718
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i720 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'anchorPoint')
  request.r(i721[2], i721[3], 0, i720, 'targetCamera')
  i720.viewportYRatio = i721[4]
  i720.alignOnStart = !!i721[5]
  i720.alignOnEnable = !!i721[6]
  i720.realignOnScreenSizeChanged = !!i721[7]
  i720.drawGizmos = !!i721[8]
  i720.targetLineColor = new pc.Color(i721[9], i721[10], i721[11], i721[12])
  i720.anchorColor = new pc.Color(i721[13], i721[14], i721[15], i721[16])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i723 = data
  i722.center = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.size = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.enabled = !!i723[6]
  i722.isTrigger = !!i723[7]
  request.r(i723[8], i723[9], 0, i722, 'material')
  return i722
}

Deserializers["ClickToStore"] = function (request, data, root) {
  var i724 = root || request.c( 'ClickToStore' )
  var i725 = data
  return i724
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i726 = root || request.c( 'Ply_SoundManager' )
  var i727 = data
  i726.fxAudio = request.d('FxAudio', i727[0], i726.fxAudio)
  request.r(i727[1], i727[2], 0, i726, 'bgm1')
  return i726
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i728 = root || request.c( 'FxAudio' )
  var i729 = data
  i728.Angry = request.d('SoundData', i729[0], i728.Angry)
  i728.Cry = request.d('SoundData', i729[1], i728.Cry)
  i728.Hehe = request.d('SoundData', i729[2], i728.Hehe)
  i728.Huh = request.d('SoundData', i729[3], i728.Huh)
  i728.RoarTiger = request.d('SoundData', i729[4], i728.RoarTiger)
  i728.Siuu = request.d('SoundData', i729[5], i728.Siuu)
  i728.True = request.d('SoundData', i729[6], i728.True)
  i728.False = request.d('SoundData', i729[7], i728.False)
  return i728
}

Deserializers["SoundData"] = function (request, data, root) {
  var i730 = root || request.c( 'SoundData' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'clip')
  i730.repeatCount = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'clip')
  request.r(i733[2], i733[3], 0, i732, 'outputAudioMixerGroup')
  i732.playOnAwake = !!i733[4]
  i732.loop = !!i733[5]
  i732.time = i733[6]
  i732.volume = i733[7]
  i732.pitch = i733[8]
  i732.enabled = !!i733[9]
  return i732
}

Deserializers["ItemSequenceManager"] = function (request, data, root) {
  var i734 = root || request.c( 'ItemSequenceManager' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableItem')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734.itemList = i736
  request.r(i735[1], i735[2], 0, i734, 'spawnPoint')
  request.r(i735[3], i735[4], 0, i734, 'targetPoint')
  i734.moveDuration = i735[5]
  i734.moveEase = i735[6]
  i734.delayBetweenItems = i735[7]
  var i739 = i735[8]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterDropZone')))
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 1, i738, '')
  }
  i734.characterList = i738
  i734.isWin = !!i735[9]
  request.r(i735[10], i735[11], 0, i734, 'winObject')
  i734.winFxType = i735[12]
  request.r(i735[13], i735[14], 0, i734, 'loseObject')
  i734.loseFxType = i735[15]
  i734.resultTextDelay = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'gameplayObject')
  request.r(i735[19], i735[20], 0, i734, 'endcardObject')
  request.r(i735[21], i735[22], 0, i734, 'objectToHideOnFirstDrag')
  i734.endcardDelay = i735[23]
  i734.isFailedMode = !!i735[24]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i745 = data
  i744.pivot = new pc.Vec2( i745[0], i745[1] )
  i744.anchorMin = new pc.Vec2( i745[2], i745[3] )
  i744.anchorMax = new pc.Vec2( i745[4], i745[5] )
  i744.sizeDelta = new pc.Vec2( i745[6], i745[7] )
  i744.anchoredPosition3D = new pc.Vec3( i745[8], i745[9], i745[10] )
  i744.rotation = new pc.Quat(i745[11], i745[12], i745[13], i745[14])
  i744.scale = new pc.Vec3( i745[15], i745[16], i745[17] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i747 = data
  i746.planeDistance = i747[0]
  i746.referencePixelsPerUnit = i747[1]
  i746.isFallbackOverlay = !!i747[2]
  i746.renderMode = i747[3]
  i746.renderOrder = i747[4]
  i746.sortingLayerName = i747[5]
  i746.sortingOrder = i747[6]
  i746.scaleFactor = i747[7]
  request.r(i747[8], i747[9], 0, i746, 'worldCamera')
  i746.overrideSorting = !!i747[10]
  i746.pixelPerfect = !!i747[11]
  i746.targetDisplay = i747[12]
  i746.overridePixelPerfect = !!i747[13]
  i746.enabled = !!i747[14]
  return i746
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i749 = data
  i748.m_UiScaleMode = i749[0]
  i748.m_ReferencePixelsPerUnit = i749[1]
  i748.m_ScaleFactor = i749[2]
  i748.m_ReferenceResolution = new pc.Vec2( i749[3], i749[4] )
  i748.m_ScreenMatchMode = i749[5]
  i748.m_MatchWidthOrHeight = i749[6]
  i748.m_PhysicalUnit = i749[7]
  i748.m_FallbackScreenDPI = i749[8]
  i748.m_DefaultSpriteDPI = i749[9]
  i748.m_DynamicPixelsPerUnit = i749[10]
  i748.m_PresetInfoIsWorld = !!i749[11]
  return i748
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i751 = data
  i750.m_IgnoreReversedGraphics = !!i751[0]
  i750.m_BlockingObjects = i751[1]
  i750.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i751[2] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i753 = data
  i752.cullTransparentMesh = !!i753[0]
  return i752
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i755 = data
  i754.m_hasFontAssetChanged = !!i755[0]
  request.r(i755[1], i755[2], 0, i754, 'm_baseMaterial')
  i754.m_maskOffset = new pc.Vec4( i755[3], i755[4], i755[5], i755[6] )
  i754.m_text = i755[7]
  i754.m_isRightToLeft = !!i755[8]
  request.r(i755[9], i755[10], 0, i754, 'm_fontAsset')
  request.r(i755[11], i755[12], 0, i754, 'm_sharedMaterial')
  var i757 = i755[13]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.m_fontSharedMaterials = i756
  request.r(i755[14], i755[15], 0, i754, 'm_fontMaterial')
  var i759 = i755[16]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i754.m_fontMaterials = i758
  i754.m_fontColor32 = UnityEngine.Color32.ConstructColor(i755[17], i755[18], i755[19], i755[20])
  i754.m_fontColor = new pc.Color(i755[21], i755[22], i755[23], i755[24])
  i754.m_enableVertexGradient = !!i755[25]
  i754.m_colorMode = i755[26]
  i754.m_fontColorGradient = request.d('TMPro.VertexGradient', i755[27], i754.m_fontColorGradient)
  request.r(i755[28], i755[29], 0, i754, 'm_fontColorGradientPreset')
  request.r(i755[30], i755[31], 0, i754, 'm_spriteAsset')
  i754.m_tintAllSprites = !!i755[32]
  request.r(i755[33], i755[34], 0, i754, 'm_StyleSheet')
  i754.m_TextStyleHashCode = i755[35]
  i754.m_overrideHtmlColors = !!i755[36]
  i754.m_faceColor = UnityEngine.Color32.ConstructColor(i755[37], i755[38], i755[39], i755[40])
  i754.m_fontSize = i755[41]
  i754.m_fontSizeBase = i755[42]
  i754.m_fontWeight = i755[43]
  i754.m_enableAutoSizing = !!i755[44]
  i754.m_fontSizeMin = i755[45]
  i754.m_fontSizeMax = i755[46]
  i754.m_fontStyle = i755[47]
  i754.m_HorizontalAlignment = i755[48]
  i754.m_VerticalAlignment = i755[49]
  i754.m_textAlignment = i755[50]
  i754.m_characterSpacing = i755[51]
  i754.m_wordSpacing = i755[52]
  i754.m_lineSpacing = i755[53]
  i754.m_lineSpacingMax = i755[54]
  i754.m_paragraphSpacing = i755[55]
  i754.m_charWidthMaxAdj = i755[56]
  i754.m_TextWrappingMode = i755[57]
  i754.m_wordWrappingRatios = i755[58]
  i754.m_overflowMode = i755[59]
  request.r(i755[60], i755[61], 0, i754, 'm_linkedTextComponent')
  request.r(i755[62], i755[63], 0, i754, 'parentLinkedComponent')
  i754.m_enableKerning = !!i755[64]
  var i761 = i755[65]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(i761[i + 0]);
  }
  i754.m_ActiveFontFeatures = i760
  i754.m_enableExtraPadding = !!i755[66]
  i754.checkPaddingRequired = !!i755[67]
  i754.m_isRichText = !!i755[68]
  i754.m_parseCtrlCharacters = !!i755[69]
  i754.m_isOrthographic = !!i755[70]
  i754.m_isCullingEnabled = !!i755[71]
  i754.m_horizontalMapping = i755[72]
  i754.m_verticalMapping = i755[73]
  i754.m_uvLineOffset = i755[74]
  i754.m_geometrySortingOrder = i755[75]
  i754.m_IsTextObjectScaleStatic = !!i755[76]
  i754.m_VertexBufferAutoSizeReduction = !!i755[77]
  i754.m_useMaxVisibleDescender = !!i755[78]
  i754.m_pageToDisplay = i755[79]
  i754.m_margin = new pc.Vec4( i755[80], i755[81], i755[82], i755[83] )
  i754.m_isUsingLegacyAnimationComponent = !!i755[84]
  i754.m_isVolumetricText = !!i755[85]
  request.r(i755[86], i755[87], 0, i754, 'm_Material')
  i754.m_EmojiFallbackSupport = !!i755[88]
  i754.m_Maskable = !!i755[89]
  i754.m_Color = new pc.Color(i755[90], i755[91], i755[92], i755[93])
  i754.m_RaycastTarget = !!i755[94]
  i754.m_RaycastPadding = new pc.Vec4( i755[95], i755[96], i755[97], i755[98] )
  return i754
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.VertexGradient' )
  var i763 = data
  i762.topLeft = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.topRight = new pc.Color(i763[4], i763[5], i763[6], i763[7])
  i762.bottomLeft = new pc.Color(i763[8], i763[9], i763[10], i763[11])
  i762.bottomRight = new pc.Color(i763[12], i763[13], i763[14], i763[15])
  return i762
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Image' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Sprite')
  i766.m_Type = i767[2]
  i766.m_PreserveAspect = !!i767[3]
  i766.m_FillCenter = !!i767[4]
  i766.m_FillMethod = i767[5]
  i766.m_FillAmount = i767[6]
  i766.m_FillClockwise = !!i767[7]
  i766.m_FillOrigin = i767[8]
  i766.m_UseSpriteMesh = !!i767[9]
  i766.m_PixelsPerUnitMultiplier = i767[10]
  request.r(i767[11], i767[12], 0, i766, 'm_Material')
  i766.m_Maskable = !!i767[13]
  i766.m_Color = new pc.Color(i767[14], i767[15], i767[16], i767[17])
  i766.m_RaycastTarget = !!i767[18]
  i766.m_RaycastPadding = new pc.Vec4( i767[19], i767[20], i767[21], i767[22] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'animatorController')
  request.r(i769[2], i769[3], 0, i768, 'avatar')
  i768.updateMode = i769[4]
  i768.hasTransformHierarchy = !!i769[5]
  i768.applyRootMotion = !!i769[6]
  var i771 = i769[7]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.humanBones = i770
  i768.enabled = !!i769[8]
  return i768
}

Deserializers["CharacterDropZone"] = function (request, data, root) {
  var i774 = root || request.c( 'CharacterDropZone' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'characterData')
  i774.hasReceivedItem = !!i775[2]
  i774.isCorrectItemReceived = !!i775[3]
  return i774
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i776 = root || request.c( 'DraggableItem' )
  var i777 = data
  i776.itemID = i777[0]
  i776.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i777[1] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i779 = data
  i778.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i779[0], i778.main)
  i778.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i779[1], i778.colorBySpeed)
  i778.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i779[2], i778.colorOverLifetime)
  i778.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i779[3], i778.emission)
  i778.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i779[4], i778.rotationBySpeed)
  i778.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i779[5], i778.rotationOverLifetime)
  i778.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i779[6], i778.shape)
  i778.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i779[7], i778.sizeBySpeed)
  i778.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i779[8], i778.sizeOverLifetime)
  i778.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i779[9], i778.textureSheetAnimation)
  i778.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i779[10], i778.velocityOverLifetime)
  i778.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i779[11], i778.noise)
  i778.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i779[12], i778.inheritVelocity)
  i778.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i779[13], i778.forceOverLifetime)
  i778.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i779[14], i778.limitVelocityOverLifetime)
  i778.useAutoRandomSeed = !!i779[15]
  i778.randomSeed = i779[16]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemMain()
  var i781 = data
  i780.duration = i781[0]
  i780.loop = !!i781[1]
  i780.prewarm = !!i781[2]
  i780.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.startDelay)
  i780.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.startLifetime)
  i780.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[5], i780.startSpeed)
  i780.startSize3D = !!i781[6]
  i780.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[7], i780.startSizeX)
  i780.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[8], i780.startSizeY)
  i780.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[9], i780.startSizeZ)
  i780.startRotation3D = !!i781[10]
  i780.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[11], i780.startRotationX)
  i780.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[12], i780.startRotationY)
  i780.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[13], i780.startRotationZ)
  i780.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[14], i780.startColor)
  i780.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[15], i780.gravityModifier)
  i780.simulationSpace = i781[16]
  request.r(i781[17], i781[18], 0, i780, 'customSimulationSpace')
  i780.simulationSpeed = i781[19]
  i780.useUnscaledTime = !!i781[20]
  i780.scalingMode = i781[21]
  i780.playOnAwake = !!i781[22]
  i780.maxParticles = i781[23]
  i780.emitterVelocityMode = i781[24]
  i780.stopAction = i781[25]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i782 = root || new pc.MinMaxCurve()
  var i783 = data
  i782.mode = i783[0]
  i782.curveMin = new pc.AnimationCurve( { keys_flow: i783[1] } )
  i782.curveMax = new pc.AnimationCurve( { keys_flow: i783[2] } )
  i782.curveMultiplier = i783[3]
  i782.constantMin = i783[4]
  i782.constantMax = i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i784 = root || new pc.MinMaxGradient()
  var i785 = data
  i784.mode = i785[0]
  i784.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i785[1], i784.gradientMin)
  i784.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i785[2], i784.gradientMax)
  i784.colorMin = new pc.Color(i785[3], i785[4], i785[5], i785[6])
  i784.colorMax = new pc.Color(i785[7], i785[8], i785[9], i785[10])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i787 = data
  i786.mode = i787[0]
  var i789 = i787[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i789[i + 0]) );
  }
  i786.colorKeys = i788
  var i791 = i787[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i791[i + 0]) );
  }
  i786.alphaKeys = i790
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemColorBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[1], i792.color)
  i792.range = new pc.Vec2( i793[2], i793[3] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i797 = data
  i796.color = new pc.Color(i797[0], i797[1], i797[2], i797[3])
  i796.time = i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i801 = data
  i800.alpha = i801[0]
  i800.time = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemColorOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i803[1], i802.color)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemEmitter()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.rateOverTime)
  i804.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.rateOverDistance)
  var i807 = i805[3]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i807[i + 0]) );
  }
  i804.bursts = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemBurst()
  var i811 = data
  i810.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[0], i810.count)
  i810.cycleCount = i811[1]
  i810.minCount = i811[2]
  i810.maxCount = i811[3]
  i810.repeatInterval = i811[4]
  i810.time = i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemRotationBySpeed()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  i812.range = new pc.Vec2( i813[5], i813[6] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemRotationOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.separateAxes = !!i815[4]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemShape()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.shapeType = i817[1]
  i816.randomDirectionAmount = i817[2]
  i816.sphericalDirectionAmount = i817[3]
  i816.randomPositionAmount = i817[4]
  i816.alignToDirection = !!i817[5]
  i816.radius = i817[6]
  i816.radiusMode = i817[7]
  i816.radiusSpread = i817[8]
  i816.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[9], i816.radiusSpeed)
  i816.radiusThickness = i817[10]
  i816.angle = i817[11]
  i816.length = i817[12]
  i816.boxThickness = new pc.Vec3( i817[13], i817[14], i817[15] )
  i816.meshShapeType = i817[16]
  request.r(i817[17], i817[18], 0, i816, 'mesh')
  request.r(i817[19], i817[20], 0, i816, 'meshRenderer')
  request.r(i817[21], i817[22], 0, i816, 'skinnedMeshRenderer')
  i816.useMeshMaterialIndex = !!i817[23]
  i816.meshMaterialIndex = i817[24]
  i816.useMeshColors = !!i817[25]
  i816.normalOffset = i817[26]
  i816.arc = i817[27]
  i816.arcMode = i817[28]
  i816.arcSpread = i817[29]
  i816.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[30], i816.arcSpeed)
  i816.donutRadius = i817[31]
  i816.position = new pc.Vec3( i817[32], i817[33], i817[34] )
  i816.rotation = new pc.Vec3( i817[35], i817[36], i817[37] )
  i816.scale = new pc.Vec3( i817[38], i817[39], i817[40] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemSizeBySpeed()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  i818.range = new pc.Vec2( i819[5], i819[6] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemSizeOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.mode = i823[1]
  i822.animation = i823[2]
  i822.numTilesX = i823[3]
  i822.numTilesY = i823[4]
  i822.useRandomRow = !!i823[5]
  i822.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[6], i822.frameOverTime)
  i822.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[7], i822.startFrame)
  i822.cycleCount = i823[8]
  i822.rowIndex = i823[9]
  i822.flipU = i823[10]
  i822.flipV = i823[11]
  i822.spriteCount = i823[12]
  var i825 = i823[13]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sprites = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.radial)
  i828.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[5], i828.speedModifier)
  i828.space = i829[6]
  i828.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[7], i828.orbitalX)
  i828.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[8], i828.orbitalY)
  i828.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[9], i828.orbitalZ)
  i828.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[10], i828.orbitalOffsetX)
  i828.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[11], i828.orbitalOffsetY)
  i828.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[12], i828.orbitalOffsetZ)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemNoise()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.separateAxes = !!i831[1]
  i830.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.strengthX)
  i830.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.strengthY)
  i830.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[4], i830.strengthZ)
  i830.frequency = i831[5]
  i830.damping = !!i831[6]
  i830.octaveCount = i831[7]
  i830.octaveMultiplier = i831[8]
  i830.octaveScale = i831[9]
  i830.quality = i831[10]
  i830.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[11], i830.scrollSpeed)
  i830.scrollSpeedMultiplier = i831[12]
  i830.remapEnabled = !!i831[13]
  i830.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[14], i830.remapX)
  i830.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[15], i830.remapY)
  i830.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[16], i830.remapZ)
  i830.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[17], i830.positionAmount)
  i830.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[18], i830.rotationAmount)
  i830.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[19], i830.sizeAmount)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemInheritVelocity()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.mode = i833[1]
  i832.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.curve)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemForceOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.space = i835[4]
  i834.randomized = !!i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.limit)
  i836.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.limitX)
  i836.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.limitY)
  i836.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.limitZ)
  i836.dampen = i837[5]
  i836.separateAxes = !!i837[6]
  i836.space = i837[7]
  i836.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[8], i836.drag)
  i836.multiplyDragByParticleSize = !!i837[9]
  i836.multiplyDragByParticleVelocity = !!i837[10]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'mesh')
  i838.meshCount = i839[2]
  i838.activeVertexStreamsCount = i839[3]
  i838.alignment = i839[4]
  i838.renderMode = i839[5]
  i838.sortMode = i839[6]
  i838.lengthScale = i839[7]
  i838.velocityScale = i839[8]
  i838.cameraVelocityScale = i839[9]
  i838.normalDirection = i839[10]
  i838.sortingFudge = i839[11]
  i838.minParticleSize = i839[12]
  i838.maxParticleSize = i839[13]
  i838.pivot = new pc.Vec3( i839[14], i839[15], i839[16] )
  request.r(i839[17], i839[18], 0, i838, 'trailMaterial')
  i838.applyActiveColorSpace = !!i839[19]
  i838.enabled = !!i839[20]
  request.r(i839[21], i839[22], 0, i838, 'sharedMaterial')
  var i841 = i839[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[24]
  i838.shadowCastingMode = i839[25]
  i838.sortingLayerID = i839[26]
  i838.sortingOrder = i839[27]
  i838.lightmapIndex = i839[28]
  i838.lightmapSceneIndex = i839[29]
  i838.lightmapScaleOffset = new pc.Vec4( i839[30], i839[31], i839[32], i839[33] )
  i838.lightProbeUsage = i839[34]
  i838.reflectionProbeUsage = i839[35]
  return i838
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_FirstSelected')
  i842.m_sendNavigationEvents = !!i843[2]
  i842.m_DragThreshold = i843[3]
  return i842
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i845 = data
  i844.m_HorizontalAxis = i845[0]
  i844.m_VerticalAxis = i845[1]
  i844.m_SubmitButton = i845[2]
  i844.m_CancelButton = i845[3]
  i844.m_InputActionsPerSecond = i845[4]
  i844.m_RepeatDelay = i845[5]
  i844.m_ForceModuleActive = !!i845[6]
  i844.m_SendPointerHoverToParent = !!i845[7]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i847 = data
  i846.ambientIntensity = i847[0]
  i846.reflectionIntensity = i847[1]
  i846.ambientMode = i847[2]
  i846.ambientLight = new pc.Color(i847[3], i847[4], i847[5], i847[6])
  i846.ambientSkyColor = new pc.Color(i847[7], i847[8], i847[9], i847[10])
  i846.ambientGroundColor = new pc.Color(i847[11], i847[12], i847[13], i847[14])
  i846.ambientEquatorColor = new pc.Color(i847[15], i847[16], i847[17], i847[18])
  i846.fogColor = new pc.Color(i847[19], i847[20], i847[21], i847[22])
  i846.fogEndDistance = i847[23]
  i846.fogStartDistance = i847[24]
  i846.fogDensity = i847[25]
  i846.fog = !!i847[26]
  request.r(i847[27], i847[28], 0, i846, 'skybox')
  i846.fogMode = i847[29]
  var i849 = i847[30]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i849[i + 0]) );
  }
  i846.lightmaps = i848
  i846.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i847[31], i846.lightProbes)
  i846.lightmapsMode = i847[32]
  i846.mixedBakeMode = i847[33]
  i846.environmentLightingMode = i847[34]
  i846.ambientProbe = new pc.SphericalHarmonicsL2(i847[35])
  i846.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i847[36])
  i846.useReferenceAmbientProbe = !!i847[37]
  request.r(i847[38], i847[39], 0, i846, 'customReflection')
  request.r(i847[40], i847[41], 0, i846, 'defaultReflection')
  i846.defaultReflectionMode = i847[42]
  i846.defaultReflectionResolution = i847[43]
  i846.sunLightObjectId = i847[44]
  i846.pixelLightCount = i847[45]
  i846.defaultReflectionHDR = !!i847[46]
  i846.hasLightDataAsset = !!i847[47]
  i846.hasManualGenerate = !!i847[48]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'lightmapColor')
  request.r(i853[2], i853[3], 0, i852, 'lightmapDirection')
  request.r(i853[4], i853[5], 0, i852, 'shadowMask')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i854 = root || new UnityEngine.LightProbes()
  var i855 = data
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i863 = data
  var i865 = i863[0]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i865[i + 0]));
  }
  i862.ShaderCompilationErrors = i864
  i862.name = i863[1]
  i862.guid = i863[2]
  var i867 = i863[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i862.shaderDefinedKeywords = i866
  var i869 = i863[4]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i869[i + 0]) );
  }
  i862.passes = i868
  var i871 = i863[5]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i871[i + 0]) );
  }
  i862.usePasses = i870
  var i873 = i863[6]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i873[i + 0]) );
  }
  i862.defaultParameterValues = i872
  request.r(i863[7], i863[8], 0, i862, 'unityFallbackShader')
  i862.readDepth = !!i863[9]
  i862.hasDepthOnlyPass = !!i863[10]
  i862.isCreatedByShaderGraph = !!i863[11]
  i862.disableBatching = !!i863[12]
  i862.compiled = !!i863[13]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i877 = data
  i876.shaderName = i877[0]
  i876.errorMessage = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i882 = root || new pc.UnityShaderPass()
  var i883 = data
  i882.id = i883[0]
  i882.subShaderIndex = i883[1]
  i882.name = i883[2]
  i882.passType = i883[3]
  i882.grabPassTextureName = i883[4]
  i882.usePass = !!i883[5]
  i882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[6], i882.zTest)
  i882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[7], i882.zWrite)
  i882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[8], i882.culling)
  i882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[9], i882.blending)
  i882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[10], i882.alphaBlending)
  i882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[11], i882.colorWriteMask)
  i882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[12], i882.offsetUnits)
  i882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[13], i882.offsetFactor)
  i882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[14], i882.stencilRef)
  i882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[15], i882.stencilReadMask)
  i882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[16], i882.stencilWriteMask)
  i882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[17], i882.stencilOp)
  i882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[18], i882.stencilOpFront)
  i882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[19], i882.stencilOpBack)
  var i885 = i883[20]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i885[i + 0]) );
  }
  i882.tags = i884
  var i887 = i883[21]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.passDefinedKeywords = i886
  var i889 = i883[22]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i889[i + 0]) );
  }
  i882.passDefinedKeywordGroups = i888
  var i891 = i883[23]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i891[i + 0]) );
  }
  i882.variants = i890
  var i893 = i883[24]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i893[i + 0]) );
  }
  i882.excludedVariants = i892
  i882.hasDepthReader = !!i883[25]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i895 = data
  i894.val = i895[0]
  i894.name = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i897 = data
  i896.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[0], i896.src)
  i896.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[1], i896.dst)
  i896.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[2], i896.op)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i899 = data
  i898.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[0], i898.pass)
  i898.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[1], i898.fail)
  i898.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[2], i898.zFail)
  i898.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[3], i898.comp)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.keywords = i908
  i906.hasDiscard = !!i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i913 = data
  i912.passId = i913[0]
  i912.subShaderIndex = i913[1]
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.vertexProgram = i913[3]
  i912.fragmentProgram = i913[4]
  i912.exportedForWebGl2 = !!i913[5]
  i912.readDepth = !!i913[6]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'shader')
  i918.pass = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i923 = data
  i922.name = i923[0]
  i922.type = i923[1]
  i922.value = new pc.Vec4( i923[2], i923[3], i923[4], i923[5] )
  i922.textureValue = i923[6]
  i922.shaderPropertyFlag = i923[7]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i925 = data
  i924.name = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'texture')
  i924.aabb = i925[3]
  i924.vertices = i925[4]
  i924.triangles = i925[5]
  i924.textureRect = UnityEngine.Rect.MinMaxRect(i925[6], i925[7], i925[8], i925[9])
  i924.packedRect = UnityEngine.Rect.MinMaxRect(i925[10], i925[11], i925[12], i925[13])
  i924.border = new pc.Vec4( i925[14], i925[15], i925[16], i925[17] )
  i924.transparency = i925[18]
  i924.bounds = i925[19]
  i924.pixelsPerUnit = i925[20]
  i924.textureWidth = i925[21]
  i924.textureHeight = i925[22]
  i924.nativeSize = new pc.Vec2( i925[23], i925[24] )
  i924.pivot = new pc.Vec2( i925[25], i925[26] )
  i924.textureRectOffset = new pc.Vec2( i925[27], i925[28] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i927 = data
  i926.name = i927[0]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i929 = data
  i928.name = i929[0]
  i928.wrapMode = i929[1]
  i928.isLooping = !!i929[2]
  i928.length = i929[3]
  var i931 = i929[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i931[i + 0]) );
  }
  i928.curves = i930
  var i933 = i929[5]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i933[i + 0]) );
  }
  i928.events = i932
  i928.halfPrecision = !!i929[6]
  i928._frameRate = i929[7]
  i928.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i929[8], i928.localBounds)
  i928.hasMuscleCurves = !!i929[9]
  var i935 = i929[10]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i928.clipMuscleConstant = i934
  i928.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i929[11], i928.clipBindingConstant)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i939 = data
  i938.path = i939[0]
  i938.hash = i939[1]
  i938.componentType = i939[2]
  i938.property = i939[3]
  i938.keys = i939[4]
  var i941 = i939[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i941[i + 0]) );
  }
  i938.objectReferenceKeys = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i945 = data
  i944.time = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'value')
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i949 = data
  i948.functionName = i949[0]
  i948.floatParameter = i949[1]
  i948.intParameter = i949[2]
  i948.stringParameter = i949[3]
  request.r(i949[4], i949[5], 0, i948, 'objectReferenceParameter')
  i948.time = i949[6]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i951 = data
  i950.center = new pc.Vec3( i951[0], i951[1], i951[2] )
  i950.extends = new pc.Vec3( i951[3], i951[4], i951[5] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i954.genericBindings = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.pptrCurveMapping = i958
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i961 = data
  i960.name = i961[0]
  i960.ascent = i961[1]
  i960.originalLineHeight = i961[2]
  i960.fontSize = i961[3]
  var i963 = i961[4]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i963[i + 0]) );
  }
  i960.characterInfo = i962
  request.r(i961[5], i961[6], 0, i960, 'texture')
  i960.originalFontSize = i961[7]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i967 = data
  i966.index = i967[0]
  i966.advance = i967[1]
  i966.bearing = i967[2]
  i966.glyphWidth = i967[3]
  i966.glyphHeight = i967[4]
  i966.minX = i967[5]
  i966.maxX = i967[6]
  i966.minY = i967[7]
  i966.maxY = i967[8]
  i966.uvBottomLeftX = i967[9]
  i966.uvBottomLeftY = i967[10]
  i966.uvBottomRightX = i967[11]
  i966.uvBottomRightY = i967[12]
  i966.uvTopLeftX = i967[13]
  i966.uvTopLeftY = i967[14]
  i966.uvTopRightX = i967[15]
  i966.uvTopRightY = i967[16]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i969 = data
  i968.name = i969[0]
  var i971 = i969[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i971[i + 0]) );
  }
  i968.layers = i970
  var i973 = i969[2]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i973[i + 0]) );
  }
  i968.parameters = i972
  i968.animationClips = i969[3]
  i968.avatarUnsupported = i969[4]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i977 = data
  i976.name = i977[0]
  i976.defaultWeight = i977[1]
  i976.blendingMode = i977[2]
  i976.avatarMask = i977[3]
  i976.syncedLayerIndex = i977[4]
  i976.syncedLayerAffectsTiming = !!i977[5]
  i976.syncedLayers = i977[6]
  i976.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i977[7], i976.stateMachine)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i979 = data
  i978.id = i979[0]
  i978.name = i979[1]
  i978.path = i979[2]
  var i981 = i979[3]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i981[i + 0]) );
  }
  i978.states = i980
  var i983 = i979[4]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i983[i + 0]) );
  }
  i978.machines = i982
  var i985 = i979[5]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i985[i + 0]) );
  }
  i978.entryStateTransitions = i984
  var i987 = i979[6]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i987[i + 0]) );
  }
  i978.exitStateTransitions = i986
  var i989 = i979[7]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i989[i + 0]) );
  }
  i978.anyStateTransitions = i988
  i978.defaultStateId = i979[8]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i993 = data
  i992.id = i993[0]
  i992.name = i993[1]
  i992.cycleOffset = i993[2]
  i992.cycleOffsetParameter = i993[3]
  i992.cycleOffsetParameterActive = !!i993[4]
  i992.mirror = !!i993[5]
  i992.mirrorParameter = i993[6]
  i992.mirrorParameterActive = !!i993[7]
  i992.motionId = i993[8]
  i992.nameHash = i993[9]
  i992.fullPathHash = i993[10]
  i992.speed = i993[11]
  i992.speedParameter = i993[12]
  i992.speedParameterActive = !!i993[13]
  i992.tag = i993[14]
  i992.tagHash = i993[15]
  i992.writeDefaultValues = !!i993[16]
  var i995 = i993[17]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.behaviours = i994
  var i997 = i993[18]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i997[i + 0]) );
  }
  i992.transitions = i996
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1003 = data
  i1002.fullPath = i1003[0]
  i1002.canTransitionToSelf = !!i1003[1]
  i1002.duration = i1003[2]
  i1002.exitTime = i1003[3]
  i1002.hasExitTime = !!i1003[4]
  i1002.hasFixedDuration = !!i1003[5]
  i1002.interruptionSource = i1003[6]
  i1002.offset = i1003[7]
  i1002.orderedInterruption = !!i1003[8]
  i1002.destinationStateId = i1003[9]
  i1002.isExit = !!i1003[10]
  i1002.mute = !!i1003[11]
  i1002.solo = !!i1003[12]
  var i1005 = i1003[13]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1005[i + 0]) );
  }
  i1002.conditions = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1011 = data
  i1010.destinationStateId = i1011[0]
  i1010.isExit = !!i1011[1]
  i1010.mute = !!i1011[2]
  i1010.solo = !!i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1013[i + 0]) );
  }
  i1010.conditions = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1017 = data
  i1016.defaultBool = !!i1017[0]
  i1016.defaultFloat = i1017[1]
  i1016.defaultInt = i1017[2]
  i1016.name = i1017[3]
  i1016.nameHash = i1017[4]
  i1016.type = i1017[5]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.bytes64 = i1019[1]
  i1018.data = i1019[2]
  return i1018
}

Deserializers["CharacterItemData"] = function (request, data, root) {
  var i1020 = root || request.c( 'CharacterItemData' )
  var i1021 = data
  i1020.characterName = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'normalSprite')
  i1020.characterSound = i1021[3]
  i1020.correctItemID = i1021[4]
  var i1023 = i1021[5]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMapping')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('ItemSpriteMapping', i1023[i + 0]));
  }
  i1020.itemInteractions = i1022
  return i1020
}

Deserializers["ItemSpriteMapping"] = function (request, data, root) {
  var i1026 = root || request.c( 'ItemSpriteMapping' )
  var i1027 = data
  i1026.itemID = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'spriteWithItem')
  i1026.fxType = i1027[3]
  return i1026
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1029 = data
  i1028.normalStyle = i1029[0]
  i1028.normalSpacingOffset = i1029[1]
  i1028.boldStyle = i1029[2]
  i1028.boldSpacing = i1029[3]
  i1028.italicStyle = i1029[4]
  i1028.tabSize = i1029[5]
  request.r(i1029[6], i1029[7], 0, i1028, 'atlas')
  i1028.m_SourceFontFileGUID = i1029[8]
  i1028.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1029[9], i1028.m_CreationSettings)
  request.r(i1029[10], i1029[11], 0, i1028, 'm_SourceFontFile')
  i1028.m_SourceFontFilePath = i1029[12]
  i1028.m_AtlasPopulationMode = i1029[13]
  i1028.InternalDynamicOS = !!i1029[14]
  var i1031 = i1029[15]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('UnityEngine.TextCore.Glyph', i1031[i + 0]));
  }
  i1028.m_GlyphTable = i1030
  var i1033 = i1029[16]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_Character', i1033[i + 0]));
  }
  i1028.m_CharacterTable = i1032
  var i1035 = i1029[17]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1028.m_AtlasTextures = i1034
  i1028.m_AtlasTextureIndex = i1029[18]
  i1028.m_IsMultiAtlasTexturesEnabled = !!i1029[19]
  i1028.m_GetFontFeatures = !!i1029[20]
  i1028.m_ClearDynamicDataOnBuild = !!i1029[21]
  i1028.m_AtlasWidth = i1029[22]
  i1028.m_AtlasHeight = i1029[23]
  i1028.m_AtlasPadding = i1029[24]
  i1028.m_AtlasRenderMode = i1029[25]
  var i1037 = i1029[26]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('UnityEngine.TextCore.GlyphRect', i1037[i + 0]));
  }
  i1028.m_UsedGlyphRects = i1036
  var i1039 = i1029[27]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('UnityEngine.TextCore.GlyphRect', i1039[i + 0]));
  }
  i1028.m_FreeGlyphRects = i1038
  i1028.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1029[28], i1028.m_FontFeatureTable)
  i1028.m_ShouldReimportFontFeatures = !!i1029[29]
  var i1041 = i1029[30]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1028.m_FallbackFontAssetTable = i1040
  var i1043 = i1029[31]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('TMPro.TMP_FontWeightPair', i1043[i + 0]) );
  }
  i1028.m_FontWeightTable = i1042
  var i1045 = i1029[32]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('TMPro.TMP_FontWeightPair', i1045[i + 0]) );
  }
  i1028.fontWeights = i1044
  i1028.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1029[33], i1028.m_fontInfo)
  var i1047 = i1029[34]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Glyph', i1047[i + 0]));
  }
  i1028.m_glyphInfoList = i1046
  i1028.m_KerningTable = request.d('TMPro.KerningTable', i1029[35], i1028.m_KerningTable)
  var i1049 = i1029[36]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1028.fallbackFontAssets = i1048
  i1028.m_Version = i1029[37]
  i1028.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1029[38], i1028.m_FaceInfo)
  request.r(i1029[39], i1029[40], 0, i1028, 'm_Material')
  return i1028
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1051 = data
  i1050.sourceFontFileName = i1051[0]
  i1050.sourceFontFileGUID = i1051[1]
  i1050.faceIndex = i1051[2]
  i1050.pointSizeSamplingMode = i1051[3]
  i1050.pointSize = i1051[4]
  i1050.padding = i1051[5]
  i1050.paddingMode = i1051[6]
  i1050.packingMode = i1051[7]
  i1050.atlasWidth = i1051[8]
  i1050.atlasHeight = i1051[9]
  i1050.characterSetSelectionMode = i1051[10]
  i1050.characterSequence = i1051[11]
  i1050.referencedFontAssetGUID = i1051[12]
  i1050.referencedTextAssetGUID = i1051[13]
  i1050.fontStyle = i1051[14]
  i1050.fontStyleModifier = i1051[15]
  i1050.renderMode = i1051[16]
  i1050.includeFontFeatures = !!i1051[17]
  return i1050
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1055 = data
  i1054.m_Index = i1055[0]
  i1054.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1055[1], i1054.m_Metrics)
  i1054.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1055[2], i1054.m_GlyphRect)
  i1054.m_Scale = i1055[3]
  i1054.m_AtlasIndex = i1055[4]
  i1054.m_ClassDefinitionType = i1055[5]
  return i1054
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_Character' )
  var i1059 = data
  i1058.m_ElementType = i1059[0]
  i1058.m_Unicode = i1059[1]
  i1058.m_GlyphIndex = i1059[2]
  i1058.m_Scale = i1059[3]
  return i1058
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1065 = data
  i1064.m_X = i1065[0]
  i1064.m_Y = i1065[1]
  i1064.m_Width = i1065[2]
  i1064.m_Height = i1065[3]
  return i1064
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.MultipleSubstitutionRecord', i1069[i + 0]));
  }
  i1066.m_MultipleSubstitutionRecords = i1068
  var i1071 = i1067[1]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.LigatureSubstitutionRecord', i1071[i + 0]));
  }
  i1066.m_LigatureSubstitutionRecords = i1070
  var i1073 = i1067[2]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1073[i + 0]));
  }
  i1066.m_GlyphPairAdjustmentRecords = i1072
  var i1075 = i1067[3]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1075[i + 0]));
  }
  i1066.m_MarkToBaseAdjustmentRecords = i1074
  var i1077 = i1067[4]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1077[i + 0]));
  }
  i1066.m_MarkToMarkAdjustmentRecords = i1076
  return i1066
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1081 = data
  i1080.m_TargetGlyphID = i1081[0]
  i1080.m_SubstituteGlyphIDs = i1081[1]
  return i1080
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1085 = data
  i1084.m_ComponentGlyphIDs = i1085[0]
  i1084.m_LigatureGlyphID = i1085[1]
  return i1084
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1089 = data
  i1088.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1089[0], i1088.m_FirstAdjustmentRecord)
  i1088.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1089[1], i1088.m_SecondAdjustmentRecord)
  i1088.m_FeatureLookupFlags = i1089[2]
  return i1088
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1091 = data
  i1090.m_GlyphIndex = i1091[0]
  i1090.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1091[1], i1090.m_GlyphValueRecord)
  return i1090
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1093 = data
  i1092.m_XPlacement = i1093[0]
  i1092.m_YPlacement = i1093[1]
  i1092.m_XAdvance = i1093[2]
  i1092.m_YAdvance = i1093[3]
  return i1092
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1097 = data
  i1096.m_BaseGlyphID = i1097[0]
  i1096.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1097[1], i1096.m_BaseGlyphAnchorPoint)
  i1096.m_MarkGlyphID = i1097[2]
  i1096.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1097[3], i1096.m_MarkPositionAdjustment)
  return i1096
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1101 = data
  i1100.m_BaseMarkGlyphID = i1101[0]
  i1100.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1101[1], i1100.m_BaseMarkGlyphAnchorPoint)
  i1100.m_CombiningMarkGlyphID = i1101[2]
  i1100.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1101[3], i1100.m_CombiningMarkPositionAdjustment)
  return i1100
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'regularTypeface')
  request.r(i1107[2], i1107[3], 0, i1106, 'italicTypeface')
  return i1106
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1109 = data
  i1108.Name = i1109[0]
  i1108.PointSize = i1109[1]
  i1108.Scale = i1109[2]
  i1108.CharacterCount = i1109[3]
  i1108.LineHeight = i1109[4]
  i1108.Baseline = i1109[5]
  i1108.Ascender = i1109[6]
  i1108.CapHeight = i1109[7]
  i1108.Descender = i1109[8]
  i1108.CenterLine = i1109[9]
  i1108.SuperscriptOffset = i1109[10]
  i1108.SubscriptOffset = i1109[11]
  i1108.SubSize = i1109[12]
  i1108.Underline = i1109[13]
  i1108.UnderlineThickness = i1109[14]
  i1108.strikethrough = i1109[15]
  i1108.strikethroughThickness = i1109[16]
  i1108.TabWidth = i1109[17]
  i1108.Padding = i1109[18]
  i1108.AtlasWidth = i1109[19]
  i1108.AtlasHeight = i1109[20]
  return i1108
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1113 = data
  i1112.id = i1113[0]
  i1112.x = i1113[1]
  i1112.y = i1113[2]
  i1112.width = i1113[3]
  i1112.height = i1113[4]
  i1112.xOffset = i1113[5]
  i1112.yOffset = i1113[6]
  i1112.xAdvance = i1113[7]
  i1112.scale = i1113[8]
  return i1112
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.KerningTable' )
  var i1115 = data
  var i1117 = i1115[0]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.KerningPair', i1117[i + 0]));
  }
  i1114.kerningPairs = i1116
  return i1114
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.KerningPair' )
  var i1121 = data
  i1120.xOffset = i1121[0]
  i1120.m_FirstGlyph = i1121[1]
  i1120.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1121[2], i1120.m_FirstGlyphAdjustments)
  i1120.m_SecondGlyph = i1121[3]
  i1120.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1121[4], i1120.m_SecondGlyphAdjustments)
  i1120.m_IgnoreSpacingAdjustments = !!i1121[5]
  return i1120
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1123 = data
  i1122.m_FaceIndex = i1123[0]
  i1122.m_FamilyName = i1123[1]
  i1122.m_StyleName = i1123[2]
  i1122.m_PointSize = i1123[3]
  i1122.m_Scale = i1123[4]
  i1122.m_UnitsPerEM = i1123[5]
  i1122.m_LineHeight = i1123[6]
  i1122.m_AscentLine = i1123[7]
  i1122.m_CapLine = i1123[8]
  i1122.m_MeanLine = i1123[9]
  i1122.m_Baseline = i1123[10]
  i1122.m_DescentLine = i1123[11]
  i1122.m_SuperscriptOffset = i1123[12]
  i1122.m_SuperscriptSize = i1123[13]
  i1122.m_SubscriptOffset = i1123[14]
  i1122.m_SubscriptSize = i1123[15]
  i1122.m_UnderlineOffset = i1123[16]
  i1122.m_UnderlineThickness = i1123[17]
  i1122.m_StrikethroughOffset = i1123[18]
  i1122.m_StrikethroughThickness = i1123[19]
  i1122.m_TabWidth = i1123[20]
  return i1122
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1124 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1125 = data
  i1124.useSafeMode = !!i1125[0]
  i1124.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1125[1], i1124.safeModeOptions)
  i1124.timeScale = i1125[2]
  i1124.unscaledTimeScale = i1125[3]
  i1124.useSmoothDeltaTime = !!i1125[4]
  i1124.maxSmoothUnscaledTime = i1125[5]
  i1124.rewindCallbackMode = i1125[6]
  i1124.showUnityEditorReport = !!i1125[7]
  i1124.logBehaviour = i1125[8]
  i1124.drawGizmos = !!i1125[9]
  i1124.defaultRecyclable = !!i1125[10]
  i1124.defaultAutoPlay = i1125[11]
  i1124.defaultUpdateType = i1125[12]
  i1124.defaultTimeScaleIndependent = !!i1125[13]
  i1124.defaultEaseType = i1125[14]
  i1124.defaultEaseOvershootOrAmplitude = i1125[15]
  i1124.defaultEasePeriod = i1125[16]
  i1124.defaultAutoKill = !!i1125[17]
  i1124.defaultLoopType = i1125[18]
  i1124.debugMode = !!i1125[19]
  i1124.debugStoreTargetId = !!i1125[20]
  i1124.showPreviewPanel = !!i1125[21]
  i1124.storeSettingsLocation = i1125[22]
  i1124.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1125[23], i1124.modules)
  i1124.createASMDEF = !!i1125[24]
  i1124.showPlayingTweens = !!i1125[25]
  i1124.showPausedTweens = !!i1125[26]
  return i1124
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1126 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1127 = data
  i1126.logBehaviour = i1127[0]
  i1126.nestedTweenFailureBehaviour = i1127[1]
  return i1126
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1128 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1129 = data
  i1128.showPanel = !!i1129[0]
  i1128.audioEnabled = !!i1129[1]
  i1128.physicsEnabled = !!i1129[2]
  i1128.physics2DEnabled = !!i1129[3]
  i1128.spriteEnabled = !!i1129[4]
  i1128.uiEnabled = !!i1129[5]
  i1128.uiToolkitEnabled = !!i1129[6]
  i1128.textMeshProEnabled = !!i1129[7]
  i1128.tk2DEnabled = !!i1129[8]
  i1128.deAudioEnabled = !!i1129[9]
  i1128.deUnityExtendedEnabled = !!i1129[10]
  i1128.epoOutlineEnabled = !!i1129[11]
  return i1128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Settings' )
  var i1131 = data
  i1130.assetVersion = i1131[0]
  i1130.m_TextWrappingMode = i1131[1]
  i1130.m_enableKerning = !!i1131[2]
  var i1133 = i1131[3]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(i1133[i + 0]);
  }
  i1130.m_ActiveFontFeatures = i1132
  i1130.m_enableExtraPadding = !!i1131[4]
  i1130.m_enableTintAllSprites = !!i1131[5]
  i1130.m_enableParseEscapeCharacters = !!i1131[6]
  i1130.m_EnableRaycastTarget = !!i1131[7]
  i1130.m_GetFontFeaturesAtRuntime = !!i1131[8]
  i1130.m_missingGlyphCharacter = i1131[9]
  i1130.m_ClearDynamicDataOnBuild = !!i1131[10]
  i1130.m_warningsDisabled = !!i1131[11]
  request.r(i1131[12], i1131[13], 0, i1130, 'm_defaultFontAsset')
  i1130.m_defaultFontAssetPath = i1131[14]
  i1130.m_defaultFontSize = i1131[15]
  i1130.m_defaultAutoSizeMinRatio = i1131[16]
  i1130.m_defaultAutoSizeMaxRatio = i1131[17]
  i1130.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1131[18], i1131[19] )
  i1130.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1131[20], i1131[21] )
  i1130.m_autoSizeTextContainer = !!i1131[22]
  i1130.m_IsTextObjectScaleStatic = !!i1131[23]
  var i1135 = i1131[24]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1130.m_fallbackFontAssets = i1134
  i1130.m_matchMaterialPreset = !!i1131[25]
  i1130.m_HideSubTextObjects = !!i1131[26]
  request.r(i1131[27], i1131[28], 0, i1130, 'm_defaultSpriteAsset')
  i1130.m_defaultSpriteAssetPath = i1131[29]
  i1130.m_enableEmojiSupport = !!i1131[30]
  i1130.m_MissingCharacterSpriteUnicode = i1131[31]
  var i1137 = i1131[32]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1130.m_EmojiFallbackTextAssets = i1136
  i1130.m_defaultColorGradientPresetsPath = i1131[33]
  request.r(i1131[34], i1131[35], 0, i1130, 'm_defaultStyleSheet')
  i1130.m_StyleSheetsResourcePath = i1131[36]
  request.r(i1131[37], i1131[38], 0, i1130, 'm_leadingCharacters')
  request.r(i1131[39], i1131[40], 0, i1130, 'm_followingCharacters')
  i1130.m_UseModernHangulLineBreakingRules = !!i1131[41]
  return i1130
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'spriteSheet')
  var i1143 = i1141[2]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('TMPro.TMP_Sprite', i1143[i + 0]));
  }
  i1140.spriteInfoList = i1142
  var i1145 = i1141[3]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 1, i1144, '')
  }
  i1140.fallbackSpriteAssets = i1144
  var i1147 = i1141[4]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_SpriteCharacter', i1147[i + 0]));
  }
  i1140.m_SpriteCharacterTable = i1146
  var i1149 = i1141[5]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_SpriteGlyph', i1149[i + 0]));
  }
  i1140.m_GlyphTable = i1148
  i1140.m_Version = i1141[6]
  i1140.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1141[7], i1140.m_FaceInfo)
  request.r(i1141[8], i1141[9], 0, i1140, 'm_Material')
  return i1140
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.hashCode = i1153[1]
  i1152.unicode = i1153[2]
  i1152.pivot = new pc.Vec2( i1153[3], i1153[4] )
  request.r(i1153[5], i1153[6], 0, i1152, 'sprite')
  i1152.id = i1153[7]
  i1152.x = i1153[8]
  i1152.y = i1153[9]
  i1152.width = i1153[10]
  i1152.height = i1153[11]
  i1152.xOffset = i1153[12]
  i1152.yOffset = i1153[13]
  i1152.xAdvance = i1153[14]
  i1152.scale = i1153[15]
  return i1152
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1159 = data
  i1158.m_Name = i1159[0]
  i1158.m_ElementType = i1159[1]
  i1158.m_Unicode = i1159[2]
  i1158.m_GlyphIndex = i1159[3]
  i1158.m_Scale = i1159[4]
  return i1158
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'sprite')
  i1162.m_Index = i1163[2]
  i1162.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1163[3], i1162.m_Metrics)
  i1162.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1163[4], i1162.m_GlyphRect)
  i1162.m_Scale = i1163[5]
  i1162.m_AtlasIndex = i1163[6]
  i1162.m_ClassDefinitionType = i1163[7]
  return i1162
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1165 = data
  i1164.m_Width = i1165[0]
  i1164.m_Height = i1165[1]
  i1164.m_HorizontalBearingX = i1165[2]
  i1164.m_HorizontalBearingY = i1165[3]
  i1164.m_HorizontalAdvance = i1165[4]
  return i1164
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_Style', i1169[i + 0]));
  }
  i1166.m_StyleList = i1168
  return i1166
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_Style' )
  var i1173 = data
  i1172.m_Name = i1173[0]
  i1172.m_HashCode = i1173[1]
  i1172.m_OpeningDefinition = i1173[2]
  i1172.m_ClosingDefinition = i1173[3]
  i1172.m_OpeningTagArray = i1173[4]
  i1172.m_ClosingTagArray = i1173[5]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1177[i + 0]) );
  }
  i1174.files = i1176
  i1174.componentToPrefabIds = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1181 = data
  i1180.path = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'unityObject')
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1185[i + 0]) );
  }
  i1182.scriptsExecutionOrder = i1184
  var i1187 = i1183[1]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1187[i + 0]) );
  }
  i1182.sortingLayers = i1186
  var i1189 = i1183[2]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1189[i + 0]) );
  }
  i1182.cullingLayers = i1188
  i1182.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1183[3], i1182.timeSettings)
  i1182.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1183[4], i1182.physicsSettings)
  i1182.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1183[5], i1182.physics2DSettings)
  i1182.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1183[6], i1182.qualitySettings)
  i1182.enableRealtimeShadows = !!i1183[7]
  i1182.enableAutoInstancing = !!i1183[8]
  i1182.enableStaticBatching = !!i1183[9]
  i1182.enableDynamicBatching = !!i1183[10]
  i1182.lightmapEncodingQuality = i1183[11]
  i1182.desiredColorSpace = i1183[12]
  var i1191 = i1183[13]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( i1191[i + 0] );
  }
  i1182.allTags = i1190
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.value = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.name = i1199[1]
  i1198.value = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1203 = data
  i1202.id = i1203[0]
  i1202.name = i1203[1]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1205 = data
  i1204.fixedDeltaTime = i1205[0]
  i1204.maximumDeltaTime = i1205[1]
  i1204.timeScale = i1205[2]
  i1204.maximumParticleTimestep = i1205[3]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1207 = data
  i1206.gravity = new pc.Vec3( i1207[0], i1207[1], i1207[2] )
  i1206.defaultSolverIterations = i1207[3]
  i1206.bounceThreshold = i1207[4]
  i1206.autoSyncTransforms = !!i1207[5]
  i1206.autoSimulation = !!i1207[6]
  var i1209 = i1207[7]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1209[i + 0]) );
  }
  i1206.collisionMatrix = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1213 = data
  i1212.enabled = !!i1213[0]
  i1212.layerId = i1213[1]
  i1212.otherLayerId = i1213[2]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'material')
  i1214.gravity = new pc.Vec2( i1215[2], i1215[3] )
  i1214.positionIterations = i1215[4]
  i1214.velocityIterations = i1215[5]
  i1214.velocityThreshold = i1215[6]
  i1214.maxLinearCorrection = i1215[7]
  i1214.maxAngularCorrection = i1215[8]
  i1214.maxTranslationSpeed = i1215[9]
  i1214.maxRotationSpeed = i1215[10]
  i1214.baumgarteScale = i1215[11]
  i1214.baumgarteTOIScale = i1215[12]
  i1214.timeToSleep = i1215[13]
  i1214.linearSleepTolerance = i1215[14]
  i1214.angularSleepTolerance = i1215[15]
  i1214.defaultContactOffset = i1215[16]
  i1214.autoSimulation = !!i1215[17]
  i1214.queriesHitTriggers = !!i1215[18]
  i1214.queriesStartInColliders = !!i1215[19]
  i1214.callbacksOnDisable = !!i1215[20]
  i1214.reuseCollisionCallbacks = !!i1215[21]
  i1214.autoSyncTransforms = !!i1215[22]
  var i1217 = i1215[23]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1217[i + 0]) );
  }
  i1214.collisionMatrix = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1221 = data
  i1220.enabled = !!i1221[0]
  i1220.layerId = i1221[1]
  i1220.otherLayerId = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1225[i + 0]) );
  }
  i1222.qualityLevels = i1224
  var i1227 = i1223[1]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1222.names = i1226
  i1222.shadows = i1223[2]
  i1222.anisotropicFiltering = i1223[3]
  i1222.antiAliasing = i1223[4]
  i1222.lodBias = i1223[5]
  i1222.shadowCascades = i1223[6]
  i1222.shadowDistance = i1223[7]
  i1222.shadowmaskMode = i1223[8]
  i1222.shadowProjection = i1223[9]
  i1222.shadowResolution = i1223[10]
  i1222.softParticles = !!i1223[11]
  i1222.softVegetation = !!i1223[12]
  i1222.activeColorSpace = i1223[13]
  i1222.desiredColorSpace = i1223[14]
  i1222.masterTextureLimit = i1223[15]
  i1222.maxQueuedFrames = i1223[16]
  i1222.particleRaycastBudget = i1223[17]
  i1222.pixelLightCount = i1223[18]
  i1222.realtimeReflectionProbes = !!i1223[19]
  i1222.shadowCascade2Split = i1223[20]
  i1222.shadowCascade4Split = new pc.Vec3( i1223[21], i1223[22], i1223[23] )
  i1222.streamingMipmapsActive = !!i1223[24]
  i1222.vSyncCount = i1223[25]
  i1222.asyncUploadBufferSize = i1223[26]
  i1222.asyncUploadTimeSlice = i1223[27]
  i1222.billboardsFaceCameraPosition = !!i1223[28]
  i1222.shadowNearPlaneOffset = i1223[29]
  i1222.streamingMipmapsMemoryBudget = i1223[30]
  i1222.maximumLODLevel = i1223[31]
  i1222.streamingMipmapsAddAllCameras = !!i1223[32]
  i1222.streamingMipmapsMaxLevelReduction = i1223[33]
  i1222.streamingMipmapsRenderersPerFrame = i1223[34]
  i1222.resolutionScalingFixedDPIFactor = i1223[35]
  i1222.streamingMipmapsMaxFileIORequests = i1223[36]
  i1222.currentQualityLevel = i1223[37]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1233 = data
  i1232.weight = i1233[0]
  i1232.vertices = i1233[1]
  i1232.normals = i1233[2]
  i1232.tangents = i1233[3]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1237 = data
  i1236.mode = i1237[0]
  i1236.parameter = i1237[1]
  i1236.threshold = i1237[2]
  return i1236
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1239 = data
  i1238.m_XCoordinate = i1239[0]
  i1238.m_YCoordinate = i1239[1]
  return i1238
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1241 = data
  i1240.m_XPositionAdjustment = i1241[0]
  i1240.m_YPositionAdjustment = i1241[1]
  return i1240
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1243 = data
  i1242.xPlacement = i1243[0]
  i1242.yPlacement = i1243[1]
  i1242.xAdvance = i1243[2]
  i1242.yAdvance = i1243[3]
  return i1242
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

Deserializers.buildID = "cf1989ac-9645-4e58-9f60-4749d14141a1";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

