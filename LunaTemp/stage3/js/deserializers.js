var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSpring' )
  var i1627 = data
  i1626.spring = i1627[0]
  i1626.damper = i1627[1]
  i1626.targetPosition = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointMotor' )
  var i1629 = data
  i1628.m_TargetVelocity = i1629[0]
  i1628.m_Force = i1629[1]
  i1628.m_FreeSpin = i1629[2]
  return i1628
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.JointLimits' )
  var i1631 = data
  i1630.m_Min = i1631[0]
  i1630.m_Max = i1631[1]
  i1630.m_Bounciness = i1631[2]
  i1630.m_BounceMinVelocity = i1631[3]
  i1630.m_ContactDistance = i1631[4]
  i1630.minBounce = i1631[5]
  i1630.maxBounce = i1631[6]
  return i1630
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointDrive' )
  var i1633 = data
  i1632.m_PositionSpring = i1633[0]
  i1632.m_PositionDamper = i1633[1]
  i1632.m_MaximumForce = i1633[2]
  i1632.m_UseAcceleration = i1633[3]
  return i1632
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1635 = data
  i1634.m_Spring = i1635[0]
  i1634.m_Damper = i1635[1]
  return i1634
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1637 = data
  i1636.m_Limit = i1637[0]
  i1636.m_Bounciness = i1637[1]
  i1636.m_ContactDistance = i1637[2]
  return i1636
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1639 = data
  i1638.m_ExtremumSlip = i1639[0]
  i1638.m_ExtremumValue = i1639[1]
  i1638.m_AsymptoteSlip = i1639[2]
  i1638.m_AsymptoteValue = i1639[3]
  i1638.m_Stiffness = i1639[4]
  return i1638
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1641 = data
  i1640.m_LowerAngle = i1641[0]
  i1640.m_UpperAngle = i1641[1]
  return i1640
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1643 = data
  i1642.m_MotorSpeed = i1643[0]
  i1642.m_MaximumMotorTorque = i1643[1]
  return i1642
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1645 = data
  i1644.m_DampingRatio = i1645[0]
  i1644.m_Frequency = i1645[1]
  i1644.m_Angle = i1645[2]
  return i1644
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1647 = data
  i1646.m_LowerTranslation = i1647[0]
  i1646.m_UpperTranslation = i1647[1]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1648 = root || new pc.UnityMaterial()
  var i1649 = data
  i1648.name = i1649[0]
  request.r(i1649[1], i1649[2], 0, i1648, 'shader')
  i1648.renderQueue = i1649[3]
  i1648.enableInstancing = !!i1649[4]
  var i1651 = i1649[5]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1651[i + 0]) );
  }
  i1648.floatParameters = i1650
  var i1653 = i1649[6]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1653[i + 0]) );
  }
  i1648.colorParameters = i1652
  var i1655 = i1649[7]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1655[i + 0]) );
  }
  i1648.vectorParameters = i1654
  var i1657 = i1649[8]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1657[i + 0]) );
  }
  i1648.textureParameters = i1656
  var i1659 = i1649[9]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1659[i + 0]) );
  }
  i1648.materialFlags = i1658
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.value = i1663[1]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.value = new pc.Color(i1667[1], i1667[2], i1667[3], i1667[4])
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.value = new pc.Vec4( i1671[1], i1671[2], i1671[3], i1671[4] )
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1675 = data
  i1674.name = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'value')
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.enabled = !!i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.width = i1681[1]
  i1680.height = i1681[2]
  i1680.mipmapCount = i1681[3]
  i1680.anisoLevel = i1681[4]
  i1680.filterMode = i1681[5]
  i1680.hdr = !!i1681[6]
  i1680.format = i1681[7]
  i1680.wrapMode = i1681[8]
  i1680.alphaIsTransparency = !!i1681[9]
  i1680.alphaSource = i1681[10]
  i1680.graphicsFormat = i1681[11]
  i1680.sRGBTexture = !!i1681[12]
  i1680.desiredColorSpace = i1681[13]
  i1680.wrapU = i1681[14]
  i1680.wrapV = i1681[15]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.halfPrecision = !!i1683[1]
  i1682.useSimplification = !!i1683[2]
  i1682.useUInt32IndexFormat = !!i1683[3]
  i1682.vertexCount = i1683[4]
  i1682.aabb = i1683[5]
  var i1685 = i1683[6]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( !!i1685[i + 0] );
  }
  i1682.streams = i1684
  i1682.vertices = i1683[7]
  var i1687 = i1683[8]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1687[i + 0]) );
  }
  i1682.subMeshes = i1686
  var i1689 = i1683[9]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 16) {
    i1688.push( new pc.Mat4().setData(i1689[i + 0], i1689[i + 1], i1689[i + 2], i1689[i + 3],  i1689[i + 4], i1689[i + 5], i1689[i + 6], i1689[i + 7],  i1689[i + 8], i1689[i + 9], i1689[i + 10], i1689[i + 11],  i1689[i + 12], i1689[i + 13], i1689[i + 14], i1689[i + 15]) );
  }
  i1682.bindposes = i1688
  var i1691 = i1683[10]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1691[i + 0]) );
  }
  i1682.blendShapes = i1690
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1697 = data
  i1696.triangles = i1697[0]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1703 = data
  i1702.name = i1703[0]
  var i1705 = i1703[1]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1705[i + 0]) );
  }
  i1702.frames = i1704
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.index = i1707[1]
  i1706.startup = !!i1707[2]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1709 = data
  i1708.aspect = i1709[0]
  i1708.orthographic = !!i1709[1]
  i1708.orthographicSize = i1709[2]
  i1708.backgroundColor = new pc.Color(i1709[3], i1709[4], i1709[5], i1709[6])
  i1708.nearClipPlane = i1709[7]
  i1708.farClipPlane = i1709[8]
  i1708.fieldOfView = i1709[9]
  i1708.depth = i1709[10]
  i1708.clearFlags = i1709[11]
  i1708.cullingMask = i1709[12]
  i1708.rect = i1709[13]
  request.r(i1709[14], i1709[15], 0, i1708, 'targetTexture')
  i1708.usePhysicalProperties = !!i1709[16]
  i1708.focalLength = i1709[17]
  i1708.sensorSize = new pc.Vec2( i1709[18], i1709[19] )
  i1708.lensShift = new pc.Vec2( i1709[20], i1709[21] )
  i1708.gateFit = i1709[22]
  i1708.commandBufferCount = i1709[23]
  i1708.cameraType = i1709[24]
  i1708.enabled = !!i1709[25]
  return i1708
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1710 = root || request.c( 'CameraFollow2D' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'target')
  i1710.smoothSpeed = i1711[2]
  i1710.offset = new pc.Vec3( i1711[3], i1711[4], i1711[5] )
  i1710.followY = !!i1711[6]
  return i1710
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i1712 = root || request.c( 'AutoCameraFit' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'tallScreenObject')
  i1712.tallScreenRatioThreshold = i1713[2]
  i1712.tallScreenYOffset = i1713[3]
  request.r(i1713[4], i1713[5], 0, i1712, 'canvasBtn')
  request.r(i1713[6], i1713[7], 0, i1712, 'targetArea')
  i1712.paddingLandscape = i1713[8]
  i1712.paddingPortrait = i1713[9]
  i1712.extraPaddingSmallScreen = i1713[10]
  i1712.smallScreenThreshold = i1713[11]
  i1712.autoUpdateOnResize = !!i1713[12]
  i1712.adjustInEditMode = !!i1713[13]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1715 = data
  i1714.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1715[0], i1714.main)
  i1714.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1715[1], i1714.colorBySpeed)
  i1714.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1715[2], i1714.colorOverLifetime)
  i1714.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1715[3], i1714.emission)
  i1714.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1715[4], i1714.rotationBySpeed)
  i1714.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1715[5], i1714.rotationOverLifetime)
  i1714.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1715[6], i1714.shape)
  i1714.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1715[7], i1714.sizeBySpeed)
  i1714.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1715[8], i1714.sizeOverLifetime)
  i1714.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1715[9], i1714.textureSheetAnimation)
  i1714.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1715[10], i1714.velocityOverLifetime)
  i1714.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1715[11], i1714.noise)
  i1714.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1715[12], i1714.inheritVelocity)
  i1714.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1715[13], i1714.forceOverLifetime)
  i1714.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1715[14], i1714.limitVelocityOverLifetime)
  i1714.useAutoRandomSeed = !!i1715[15]
  i1714.randomSeed = i1715[16]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemMain()
  var i1717 = data
  i1716.duration = i1717[0]
  i1716.loop = !!i1717[1]
  i1716.prewarm = !!i1717[2]
  i1716.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[3], i1716.startDelay)
  i1716.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[4], i1716.startLifetime)
  i1716.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[5], i1716.startSpeed)
  i1716.startSize3D = !!i1717[6]
  i1716.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[7], i1716.startSizeX)
  i1716.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[8], i1716.startSizeY)
  i1716.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[9], i1716.startSizeZ)
  i1716.startRotation3D = !!i1717[10]
  i1716.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[11], i1716.startRotationX)
  i1716.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[12], i1716.startRotationY)
  i1716.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[13], i1716.startRotationZ)
  i1716.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1717[14], i1716.startColor)
  i1716.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[15], i1716.gravityModifier)
  i1716.simulationSpace = i1717[16]
  request.r(i1717[17], i1717[18], 0, i1716, 'customSimulationSpace')
  i1716.simulationSpeed = i1717[19]
  i1716.useUnscaledTime = !!i1717[20]
  i1716.scalingMode = i1717[21]
  i1716.playOnAwake = !!i1717[22]
  i1716.maxParticles = i1717[23]
  i1716.emitterVelocityMode = i1717[24]
  i1716.stopAction = i1717[25]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1718 = root || new pc.MinMaxCurve()
  var i1719 = data
  i1718.mode = i1719[0]
  i1718.curveMin = new pc.AnimationCurve( { keys_flow: i1719[1] } )
  i1718.curveMax = new pc.AnimationCurve( { keys_flow: i1719[2] } )
  i1718.curveMultiplier = i1719[3]
  i1718.constantMin = i1719[4]
  i1718.constantMax = i1719[5]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1720 = root || new pc.MinMaxGradient()
  var i1721 = data
  i1720.mode = i1721[0]
  i1720.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1721[1], i1720.gradientMin)
  i1720.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1721[2], i1720.gradientMax)
  i1720.colorMin = new pc.Color(i1721[3], i1721[4], i1721[5], i1721[6])
  i1720.colorMax = new pc.Color(i1721[7], i1721[8], i1721[9], i1721[10])
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1723 = data
  i1722.mode = i1723[0]
  var i1725 = i1723[1]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1725[i + 0]) );
  }
  i1722.colorKeys = i1724
  var i1727 = i1723[2]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1727[i + 0]) );
  }
  i1722.alphaKeys = i1726
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1728 = root || new pc.ParticleSystemColorBySpeed()
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1729[1], i1728.color)
  i1728.range = new pc.Vec2( i1729[2], i1729[3] )
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1733 = data
  i1732.color = new pc.Color(i1733[0], i1733[1], i1733[2], i1733[3])
  i1732.time = i1733[4]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1737 = data
  i1736.alpha = i1737[0]
  i1736.time = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemColorOverLifetime()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1739[1], i1738.color)
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemEmitter()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[1], i1740.rateOverTime)
  i1740.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[2], i1740.rateOverDistance)
  var i1743 = i1741[3]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1743[i + 0]) );
  }
  i1740.bursts = i1742
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1746 = root || new pc.ParticleSystemBurst()
  var i1747 = data
  i1746.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[0], i1746.count)
  i1746.cycleCount = i1747[1]
  i1746.minCount = i1747[2]
  i1746.maxCount = i1747[3]
  i1746.repeatInterval = i1747[4]
  i1746.time = i1747[5]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1748 = root || new pc.ParticleSystemRotationBySpeed()
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[1], i1748.x)
  i1748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[2], i1748.y)
  i1748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[3], i1748.z)
  i1748.separateAxes = !!i1749[4]
  i1748.range = new pc.Vec2( i1749[5], i1749[6] )
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[1], i1750.x)
  i1750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[2], i1750.y)
  i1750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[3], i1750.z)
  i1750.separateAxes = !!i1751[4]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemShape()
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.shapeType = i1753[1]
  i1752.randomDirectionAmount = i1753[2]
  i1752.sphericalDirectionAmount = i1753[3]
  i1752.randomPositionAmount = i1753[4]
  i1752.alignToDirection = !!i1753[5]
  i1752.radius = i1753[6]
  i1752.radiusMode = i1753[7]
  i1752.radiusSpread = i1753[8]
  i1752.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[9], i1752.radiusSpeed)
  i1752.radiusThickness = i1753[10]
  i1752.angle = i1753[11]
  i1752.length = i1753[12]
  i1752.boxThickness = new pc.Vec3( i1753[13], i1753[14], i1753[15] )
  i1752.meshShapeType = i1753[16]
  request.r(i1753[17], i1753[18], 0, i1752, 'mesh')
  request.r(i1753[19], i1753[20], 0, i1752, 'meshRenderer')
  request.r(i1753[21], i1753[22], 0, i1752, 'skinnedMeshRenderer')
  i1752.useMeshMaterialIndex = !!i1753[23]
  i1752.meshMaterialIndex = i1753[24]
  i1752.useMeshColors = !!i1753[25]
  i1752.normalOffset = i1753[26]
  i1752.arc = i1753[27]
  i1752.arcMode = i1753[28]
  i1752.arcSpread = i1753[29]
  i1752.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[30], i1752.arcSpeed)
  i1752.donutRadius = i1753[31]
  i1752.position = new pc.Vec3( i1753[32], i1753[33], i1753[34] )
  i1752.rotation = new pc.Vec3( i1753[35], i1753[36], i1753[37] )
  i1752.scale = new pc.Vec3( i1753[38], i1753[39], i1753[40] )
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1754 = root || new pc.ParticleSystemSizeBySpeed()
  var i1755 = data
  i1754.enabled = !!i1755[0]
  i1754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[1], i1754.x)
  i1754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[2], i1754.y)
  i1754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[3], i1754.z)
  i1754.separateAxes = !!i1755[4]
  i1754.range = new pc.Vec2( i1755[5], i1755[6] )
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1756 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1757 = data
  i1756.enabled = !!i1757[0]
  i1756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[1], i1756.x)
  i1756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[2], i1756.y)
  i1756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[3], i1756.z)
  i1756.separateAxes = !!i1757[4]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.mode = i1759[1]
  i1758.animation = i1759[2]
  i1758.numTilesX = i1759[3]
  i1758.numTilesY = i1759[4]
  i1758.useRandomRow = !!i1759[5]
  i1758.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[6], i1758.frameOverTime)
  i1758.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[7], i1758.startFrame)
  i1758.cycleCount = i1759[8]
  i1758.rowIndex = i1759[9]
  i1758.flipU = i1759[10]
  i1758.flipV = i1759[11]
  i1758.spriteCount = i1759[12]
  var i1761 = i1759[13]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 2, i1760, '')
  }
  i1758.sprites = i1760
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[1], i1764.x)
  i1764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[2], i1764.y)
  i1764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[3], i1764.z)
  i1764.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[4], i1764.radial)
  i1764.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[5], i1764.speedModifier)
  i1764.space = i1765[6]
  i1764.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[7], i1764.orbitalX)
  i1764.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[8], i1764.orbitalY)
  i1764.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[9], i1764.orbitalZ)
  i1764.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[10], i1764.orbitalOffsetX)
  i1764.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[11], i1764.orbitalOffsetY)
  i1764.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[12], i1764.orbitalOffsetZ)
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1766 = root || new pc.ParticleSystemNoise()
  var i1767 = data
  i1766.enabled = !!i1767[0]
  i1766.separateAxes = !!i1767[1]
  i1766.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[2], i1766.strengthX)
  i1766.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[3], i1766.strengthY)
  i1766.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[4], i1766.strengthZ)
  i1766.frequency = i1767[5]
  i1766.damping = !!i1767[6]
  i1766.octaveCount = i1767[7]
  i1766.octaveMultiplier = i1767[8]
  i1766.octaveScale = i1767[9]
  i1766.quality = i1767[10]
  i1766.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[11], i1766.scrollSpeed)
  i1766.scrollSpeedMultiplier = i1767[12]
  i1766.remapEnabled = !!i1767[13]
  i1766.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[14], i1766.remapX)
  i1766.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[15], i1766.remapY)
  i1766.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[16], i1766.remapZ)
  i1766.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[17], i1766.positionAmount)
  i1766.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[18], i1766.rotationAmount)
  i1766.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[19], i1766.sizeAmount)
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemInheritVelocity()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.mode = i1769[1]
  i1768.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[2], i1768.curve)
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemForceOverLifetime()
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[1], i1770.x)
  i1770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[2], i1770.y)
  i1770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[3], i1770.z)
  i1770.space = i1771[4]
  i1770.randomized = !!i1771[5]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1772 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1773 = data
  i1772.enabled = !!i1773[0]
  i1772.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[1], i1772.limit)
  i1772.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[2], i1772.limitX)
  i1772.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[3], i1772.limitY)
  i1772.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[4], i1772.limitZ)
  i1772.dampen = i1773[5]
  i1772.separateAxes = !!i1773[6]
  i1772.space = i1773[7]
  i1772.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1773[8], i1772.drag)
  i1772.multiplyDragByParticleSize = !!i1773[9]
  i1772.multiplyDragByParticleVelocity = !!i1773[10]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'mesh')
  i1774.meshCount = i1775[2]
  i1774.activeVertexStreamsCount = i1775[3]
  i1774.alignment = i1775[4]
  i1774.renderMode = i1775[5]
  i1774.sortMode = i1775[6]
  i1774.lengthScale = i1775[7]
  i1774.velocityScale = i1775[8]
  i1774.cameraVelocityScale = i1775[9]
  i1774.normalDirection = i1775[10]
  i1774.sortingFudge = i1775[11]
  i1774.minParticleSize = i1775[12]
  i1774.maxParticleSize = i1775[13]
  i1774.pivot = new pc.Vec3( i1775[14], i1775[15], i1775[16] )
  request.r(i1775[17], i1775[18], 0, i1774, 'trailMaterial')
  i1774.applyActiveColorSpace = !!i1775[19]
  i1774.enabled = !!i1775[20]
  request.r(i1775[21], i1775[22], 0, i1774, 'sharedMaterial')
  var i1777 = i1775[23]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1774.sharedMaterials = i1776
  i1774.receiveShadows = !!i1775[24]
  i1774.shadowCastingMode = i1775[25]
  i1774.sortingLayerID = i1775[26]
  i1774.sortingOrder = i1775[27]
  i1774.lightmapIndex = i1775[28]
  i1774.lightmapSceneIndex = i1775[29]
  i1774.lightmapScaleOffset = new pc.Vec4( i1775[30], i1775[31], i1775[32], i1775[33] )
  i1774.lightProbeUsage = i1775[34]
  i1774.reflectionProbeUsage = i1775[35]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.tagId = i1781[1]
  i1780.enabled = !!i1781[2]
  i1780.isStatic = !!i1781[3]
  i1780.layer = i1781[4]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1783 = data
  i1782.color = new pc.Color(i1783[0], i1783[1], i1783[2], i1783[3])
  request.r(i1783[4], i1783[5], 0, i1782, 'sprite')
  i1782.flipX = !!i1783[6]
  i1782.flipY = !!i1783[7]
  i1782.drawMode = i1783[8]
  i1782.size = new pc.Vec2( i1783[9], i1783[10] )
  i1782.tileMode = i1783[11]
  i1782.adaptiveModeThreshold = i1783[12]
  i1782.maskInteraction = i1783[13]
  i1782.spriteSortPoint = i1783[14]
  i1782.enabled = !!i1783[15]
  request.r(i1783[16], i1783[17], 0, i1782, 'sharedMaterial')
  var i1785 = i1783[18]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 2, i1784, '')
  }
  i1782.sharedMaterials = i1784
  i1782.receiveShadows = !!i1783[19]
  i1782.shadowCastingMode = i1783[20]
  i1782.sortingLayerID = i1783[21]
  i1782.sortingOrder = i1783[22]
  i1782.lightmapIndex = i1783[23]
  i1782.lightmapSceneIndex = i1783[24]
  i1782.lightmapScaleOffset = new pc.Vec4( i1783[25], i1783[26], i1783[27], i1783[28] )
  i1782.lightProbeUsage = i1783[29]
  i1782.reflectionProbeUsage = i1783[30]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'animatorController')
  request.r(i1787[2], i1787[3], 0, i1786, 'avatar')
  i1786.updateMode = i1787[4]
  i1786.hasTransformHierarchy = !!i1787[5]
  i1786.applyRootMotion = !!i1787[6]
  var i1789 = i1787[7]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 2, i1788, '')
  }
  i1786.humanBones = i1788
  i1786.enabled = !!i1787[8]
  return i1786
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i1792 = root || request.c( 'MoveBetweenPoints' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'pointA')
  request.r(i1793[2], i1793[3], 0, i1792, 'pointB')
  i1792.duration = i1793[4]
  return i1792
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i1794 = root || request.c( 'PlayerCardUIManager' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'cardPanel')
  var i1797 = i1795[2]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.extraObjectsToActivate = i1796
  i1794.waitTime = i1795[3]
  var i1799 = i1795[4]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 2) {
  request.r(i1799[i + 0], i1799[i + 1], 2, i1798, '')
  }
  i1794.objectsToTurnOnAfterWait = i1798
  var i1801 = i1795[5]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 2, i1800, '')
  }
  i1794.objectsToTurnOffAfterWait = i1800
  request.r(i1795[6], i1795[7], 0, i1794, 'playerNameText')
  request.r(i1795[8], i1795[9], 0, i1794, 'playerImage')
  return i1794
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1804 = root || request.c( 'Ply_SoundManager' )
  var i1805 = data
  i1804.fxAudio = request.d('FxAudio', i1805[0], i1804.fxAudio)
  request.r(i1805[1], i1805[2], 0, i1804, 'bgm1')
  return i1804
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i1806 = root || request.c( 'FxAudio' )
  var i1807 = data
  i1806.ClickBox = request.d('SoundData', i1807[0], i1806.ClickBox)
  i1806.Happy = request.d('SoundData', i1807[1], i1806.Happy)
  i1806.Wrong = request.d('SoundData', i1807[2], i1806.Wrong)
  i1806.Spray = request.d('SoundData', i1807[3], i1806.Spray)
  i1806.Brush = request.d('SoundData', i1807[4], i1806.Brush)
  i1806.Keo = request.d('SoundData', i1807[5], i1806.Keo)
  return i1806
}

Deserializers["SoundData"] = function (request, data, root) {
  var i1808 = root || request.c( 'SoundData' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'clip')
  i1808.repeatCount = i1809[2]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'clip')
  request.r(i1811[2], i1811[3], 0, i1810, 'outputAudioMixerGroup')
  i1810.playOnAwake = !!i1811[4]
  i1810.loop = !!i1811[5]
  i1810.time = i1811[6]
  i1810.volume = i1811[7]
  i1810.pitch = i1811[8]
  i1810.enabled = !!i1811[9]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1813 = data
  i1812.pivot = new pc.Vec2( i1813[0], i1813[1] )
  i1812.anchorMin = new pc.Vec2( i1813[2], i1813[3] )
  i1812.anchorMax = new pc.Vec2( i1813[4], i1813[5] )
  i1812.sizeDelta = new pc.Vec2( i1813[6], i1813[7] )
  i1812.anchoredPosition3D = new pc.Vec3( i1813[8], i1813[9], i1813[10] )
  i1812.rotation = new pc.Quat(i1813[11], i1813[12], i1813[13], i1813[14])
  i1812.scale = new pc.Vec3( i1813[15], i1813[16], i1813[17] )
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1815 = data
  i1814.planeDistance = i1815[0]
  i1814.referencePixelsPerUnit = i1815[1]
  i1814.isFallbackOverlay = !!i1815[2]
  i1814.renderMode = i1815[3]
  i1814.renderOrder = i1815[4]
  i1814.sortingLayerName = i1815[5]
  i1814.sortingOrder = i1815[6]
  i1814.scaleFactor = i1815[7]
  request.r(i1815[8], i1815[9], 0, i1814, 'worldCamera')
  i1814.overrideSorting = !!i1815[10]
  i1814.pixelPerfect = !!i1815[11]
  i1814.targetDisplay = i1815[12]
  i1814.overridePixelPerfect = !!i1815[13]
  i1814.enabled = !!i1815[14]
  return i1814
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1817 = data
  i1816.m_UiScaleMode = i1817[0]
  i1816.m_ReferencePixelsPerUnit = i1817[1]
  i1816.m_ScaleFactor = i1817[2]
  i1816.m_ReferenceResolution = new pc.Vec2( i1817[3], i1817[4] )
  i1816.m_ScreenMatchMode = i1817[5]
  i1816.m_MatchWidthOrHeight = i1817[6]
  i1816.m_PhysicalUnit = i1817[7]
  i1816.m_FallbackScreenDPI = i1817[8]
  i1816.m_DefaultSpriteDPI = i1817[9]
  i1816.m_DynamicPixelsPerUnit = i1817[10]
  i1816.m_PresetInfoIsWorld = !!i1817[11]
  return i1816
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1819 = data
  i1818.m_IgnoreReversedGraphics = !!i1819[0]
  i1818.m_BlockingObjects = i1819[1]
  i1818.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1819[2] )
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1821 = data
  i1820.cullTransparentMesh = !!i1821[0]
  return i1820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.UI.Image' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'm_Sprite')
  i1822.m_Type = i1823[2]
  i1822.m_PreserveAspect = !!i1823[3]
  i1822.m_FillCenter = !!i1823[4]
  i1822.m_FillMethod = i1823[5]
  i1822.m_FillAmount = i1823[6]
  i1822.m_FillClockwise = !!i1823[7]
  i1822.m_FillOrigin = i1823[8]
  i1822.m_UseSpriteMesh = !!i1823[9]
  i1822.m_PixelsPerUnitMultiplier = i1823[10]
  request.r(i1823[11], i1823[12], 0, i1822, 'm_Material')
  i1822.m_Maskable = !!i1823[13]
  i1822.m_Color = new pc.Color(i1823[14], i1823[15], i1823[16], i1823[17])
  i1822.m_RaycastTarget = !!i1823[18]
  i1822.m_RaycastPadding = new pc.Vec4( i1823[19], i1823[20], i1823[21], i1823[22] )
  return i1822
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.UI.Button' )
  var i1825 = data
  i1824.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1825[0], i1824.m_OnClick)
  i1824.m_Navigation = request.d('UnityEngine.UI.Navigation', i1825[1], i1824.m_Navigation)
  i1824.m_Transition = i1825[2]
  i1824.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1825[3], i1824.m_Colors)
  i1824.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1825[4], i1824.m_SpriteState)
  i1824.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1825[5], i1824.m_AnimationTriggers)
  i1824.m_Interactable = !!i1825[6]
  request.r(i1825[7], i1825[8], 0, i1824, 'm_TargetGraphic')
  return i1824
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1827 = data
  i1826.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1827[0], i1826.m_PersistentCalls)
  return i1826
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(request.d('UnityEngine.Events.PersistentCall', i1831[i + 0]));
  }
  i1828.m_Calls = i1830
  return i1828
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'm_Target')
  i1834.m_TargetAssemblyTypeName = i1835[2]
  i1834.m_MethodName = i1835[3]
  i1834.m_Mode = i1835[4]
  i1834.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1835[5], i1834.m_Arguments)
  i1834.m_CallState = i1835[6]
  return i1834
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1837 = data
  request.r(i1837[0], i1837[1], 0, i1836, 'm_ObjectArgument')
  i1836.m_ObjectArgumentAssemblyTypeName = i1837[2]
  i1836.m_IntArgument = i1837[3]
  i1836.m_FloatArgument = i1837[4]
  i1836.m_StringArgument = i1837[5]
  i1836.m_BoolArgument = !!i1837[6]
  return i1836
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1839 = data
  i1838.m_Mode = i1839[0]
  i1838.m_WrapAround = !!i1839[1]
  request.r(i1839[2], i1839[3], 0, i1838, 'm_SelectOnUp')
  request.r(i1839[4], i1839[5], 0, i1838, 'm_SelectOnDown')
  request.r(i1839[6], i1839[7], 0, i1838, 'm_SelectOnLeft')
  request.r(i1839[8], i1839[9], 0, i1838, 'm_SelectOnRight')
  return i1838
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1841 = data
  i1840.m_NormalColor = new pc.Color(i1841[0], i1841[1], i1841[2], i1841[3])
  i1840.m_HighlightedColor = new pc.Color(i1841[4], i1841[5], i1841[6], i1841[7])
  i1840.m_PressedColor = new pc.Color(i1841[8], i1841[9], i1841[10], i1841[11])
  i1840.m_SelectedColor = new pc.Color(i1841[12], i1841[13], i1841[14], i1841[15])
  i1840.m_DisabledColor = new pc.Color(i1841[16], i1841[17], i1841[18], i1841[19])
  i1840.m_ColorMultiplier = i1841[20]
  i1840.m_FadeDuration = i1841[21]
  return i1840
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'm_HighlightedSprite')
  request.r(i1843[2], i1843[3], 0, i1842, 'm_PressedSprite')
  request.r(i1843[4], i1843[5], 0, i1842, 'm_SelectedSprite')
  request.r(i1843[6], i1843[7], 0, i1842, 'm_DisabledSprite')
  return i1842
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1845 = data
  i1844.m_NormalTrigger = i1845[0]
  i1844.m_HighlightedTrigger = i1845[1]
  i1844.m_PressedTrigger = i1845[2]
  i1844.m_SelectedTrigger = i1845[3]
  i1844.m_DisabledTrigger = i1845[4]
  return i1844
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i1846 = root || request.c( 'HairCutController' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'scissors')
  request.r(i1847[2], i1847[3], 0, i1846, 'scissorsAnimator')
  request.r(i1847[4], i1847[5], 0, i1846, 'targetAnimatorToDisable')
  request.r(i1847[6], i1847[7], 0, i1846, 'linePointA')
  request.r(i1847[8], i1847[9], 0, i1846, 'linePointB')
  i1846.scissorMoveDuration = i1847[10]
  var i1849 = i1847[11]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 2, i1848, '')
  }
  i1846.allMasks = i1848
  request.r(i1847[12], i1847[13], 0, i1846, 'fallingHairParent')
  var i1851 = i1847[14]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1846.fallingHairRenderers = i1850
  request.r(i1847[15], i1847[16], 0, i1846, 'scissorsCollider')
  request.r(i1847[17], i1847[18], 0, i1846, 'targetCollider')
  request.r(i1847[19], i1847[20], 0, i1846, 'winObjectToEnable')
  var i1853 = i1847[21]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 2) {
  request.r(i1853[i + 0], i1853[i + 1], 2, i1852, '')
  }
  i1846.winObjectsToEnable = i1852
  request.r(i1847[22], i1847[23], 0, i1846, 'winObjectToDisable')
  var i1855 = i1847[24]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 2) {
  request.r(i1855[i + 0], i1855[i + 1], 2, i1854, '')
  }
  i1846.winObjectsToDisable = i1854
  request.r(i1847[25], i1847[26], 0, i1846, 'lossSpriteRenderer')
  request.r(i1847[27], i1847[28], 0, i1846, 'lossSprite')
  request.r(i1847[29], i1847[30], 0, i1846, 'lossObjectToEnable')
  var i1857 = i1847[31]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 2, i1856, '')
  }
  i1846.lossObjectsToEnable = i1856
  i1846.endDelay = i1847[32]
  i1846.immediateEndGameOnLoss = !!i1847[33]
  var i1859 = i1847[34]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 2) {
  request.r(i1859[i + 0], i1859[i + 1], 2, i1858, '')
  }
  i1846.afterEndDisableObjects = i1858
  var i1861 = i1847[35]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1846.afterEndEnableObjects = i1860
  request.r(i1847[36], i1847[37], 0, i1846, 'tutObject')
  request.r(i1847[38], i1847[39], 0, i1846, 'animatorToEnableOnFirstTap')
  i1846.firstTapTriggerName = i1847[40]
  request.r(i1847[41], i1847[42], 0, i1846, 'objectToDisableOnComplete')
  var i1863 = i1847[43]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 2, i1862, '')
  }
  i1846.objectsToDisableOnComplete = i1862
  i1846.fallDistance = i1847[44]
  i1846.fallDuration = i1847[45]
  i1846.fadeDuration = i1847[46]
  return i1846
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i1868 = root || request.c( 'HideOnFirstClick' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'objectToHide')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1871 = data
  i1870.frontSortingLayerID = i1871[0]
  i1870.frontSortingOrder = i1871[1]
  i1870.backSortingLayerID = i1871[2]
  i1870.backSortingOrder = i1871[3]
  i1870.alphaCutoff = i1871[4]
  request.r(i1871[5], i1871[6], 0, i1870, 'sprite')
  i1870.tileMode = i1871[7]
  i1870.isCustomRangeActive = !!i1871[8]
  i1870.spriteSortPoint = i1871[9]
  i1870.enabled = !!i1871[10]
  request.r(i1871[11], i1871[12], 0, i1870, 'sharedMaterial')
  var i1873 = i1871[13]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 2, i1872, '')
  }
  i1870.sharedMaterials = i1872
  i1870.receiveShadows = !!i1871[14]
  i1870.shadowCastingMode = i1871[15]
  i1870.sortingLayerID = i1871[16]
  i1870.sortingOrder = i1871[17]
  i1870.lightmapIndex = i1871[18]
  i1870.lightmapSceneIndex = i1871[19]
  i1870.lightmapScaleOffset = new pc.Vec4( i1871[20], i1871[21], i1871[22], i1871[23] )
  i1870.lightProbeUsage = i1871[24]
  i1870.reflectionProbeUsage = i1871[25]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1875 = data
  i1874.usedByComposite = !!i1875[0]
  i1874.autoTiling = !!i1875[1]
  i1874.size = new pc.Vec2( i1875[2], i1875[3] )
  i1874.edgeRadius = i1875[4]
  i1874.enabled = !!i1875[5]
  i1874.isTrigger = !!i1875[6]
  i1874.usedByEffector = !!i1875[7]
  i1874.density = i1875[8]
  i1874.offset = new pc.Vec2( i1875[9], i1875[10] )
  request.r(i1875[11], i1875[12], 0, i1874, 'material')
  return i1874
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_FirstSelected')
  i1876.m_sendNavigationEvents = !!i1877[2]
  i1876.m_DragThreshold = i1877[3]
  return i1876
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1879 = data
  i1878.m_HorizontalAxis = i1879[0]
  i1878.m_VerticalAxis = i1879[1]
  i1878.m_SubmitButton = i1879[2]
  i1878.m_CancelButton = i1879[3]
  i1878.m_InputActionsPerSecond = i1879[4]
  i1878.m_RepeatDelay = i1879[5]
  i1878.m_ForceModuleActive = !!i1879[6]
  i1878.m_SendPointerHoverToParent = !!i1879[7]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1881 = data
  i1880.ambientIntensity = i1881[0]
  i1880.reflectionIntensity = i1881[1]
  i1880.ambientMode = i1881[2]
  i1880.ambientLight = new pc.Color(i1881[3], i1881[4], i1881[5], i1881[6])
  i1880.ambientSkyColor = new pc.Color(i1881[7], i1881[8], i1881[9], i1881[10])
  i1880.ambientGroundColor = new pc.Color(i1881[11], i1881[12], i1881[13], i1881[14])
  i1880.ambientEquatorColor = new pc.Color(i1881[15], i1881[16], i1881[17], i1881[18])
  i1880.fogColor = new pc.Color(i1881[19], i1881[20], i1881[21], i1881[22])
  i1880.fogEndDistance = i1881[23]
  i1880.fogStartDistance = i1881[24]
  i1880.fogDensity = i1881[25]
  i1880.fog = !!i1881[26]
  request.r(i1881[27], i1881[28], 0, i1880, 'skybox')
  i1880.fogMode = i1881[29]
  var i1883 = i1881[30]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1883[i + 0]) );
  }
  i1880.lightmaps = i1882
  i1880.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1881[31], i1880.lightProbes)
  i1880.lightmapsMode = i1881[32]
  i1880.mixedBakeMode = i1881[33]
  i1880.environmentLightingMode = i1881[34]
  i1880.ambientProbe = new pc.SphericalHarmonicsL2(i1881[35])
  i1880.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1881[36])
  i1880.useReferenceAmbientProbe = !!i1881[37]
  request.r(i1881[38], i1881[39], 0, i1880, 'customReflection')
  request.r(i1881[40], i1881[41], 0, i1880, 'defaultReflection')
  i1880.defaultReflectionMode = i1881[42]
  i1880.defaultReflectionResolution = i1881[43]
  i1880.sunLightObjectId = i1881[44]
  i1880.pixelLightCount = i1881[45]
  i1880.defaultReflectionHDR = !!i1881[46]
  i1880.hasLightDataAsset = !!i1881[47]
  i1880.hasManualGenerate = !!i1881[48]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'lightmapColor')
  request.r(i1887[2], i1887[3], 0, i1886, 'lightmapDirection')
  request.r(i1887[4], i1887[5], 0, i1886, 'shadowMask')
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1888 = root || new UnityEngine.LightProbes()
  var i1889 = data
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1897 = data
  var i1899 = i1897[0]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1899[i + 0]));
  }
  i1896.ShaderCompilationErrors = i1898
  i1896.name = i1897[1]
  i1896.guid = i1897[2]
  var i1901 = i1897[3]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( i1901[i + 0] );
  }
  i1896.shaderDefinedKeywords = i1900
  var i1903 = i1897[4]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1903[i + 0]) );
  }
  i1896.passes = i1902
  var i1905 = i1897[5]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1905[i + 0]) );
  }
  i1896.usePasses = i1904
  var i1907 = i1897[6]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1907[i + 0]) );
  }
  i1896.defaultParameterValues = i1906
  request.r(i1897[7], i1897[8], 0, i1896, 'unityFallbackShader')
  i1896.readDepth = !!i1897[9]
  i1896.hasDepthOnlyPass = !!i1897[10]
  i1896.isCreatedByShaderGraph = !!i1897[11]
  i1896.disableBatching = !!i1897[12]
  i1896.compiled = !!i1897[13]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1911 = data
  i1910.shaderName = i1911[0]
  i1910.errorMessage = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1916 = root || new pc.UnityShaderPass()
  var i1917 = data
  i1916.id = i1917[0]
  i1916.subShaderIndex = i1917[1]
  i1916.name = i1917[2]
  i1916.passType = i1917[3]
  i1916.grabPassTextureName = i1917[4]
  i1916.usePass = !!i1917[5]
  i1916.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[6], i1916.zTest)
  i1916.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[7], i1916.zWrite)
  i1916.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[8], i1916.culling)
  i1916.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1917[9], i1916.blending)
  i1916.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1917[10], i1916.alphaBlending)
  i1916.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[11], i1916.colorWriteMask)
  i1916.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[12], i1916.offsetUnits)
  i1916.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[13], i1916.offsetFactor)
  i1916.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[14], i1916.stencilRef)
  i1916.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[15], i1916.stencilReadMask)
  i1916.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[16], i1916.stencilWriteMask)
  i1916.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1917[17], i1916.stencilOp)
  i1916.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1917[18], i1916.stencilOpFront)
  i1916.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1917[19], i1916.stencilOpBack)
  var i1919 = i1917[20]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1919[i + 0]) );
  }
  i1916.tags = i1918
  var i1921 = i1917[21]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( i1921[i + 0] );
  }
  i1916.passDefinedKeywords = i1920
  var i1923 = i1917[22]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1923[i + 0]) );
  }
  i1916.passDefinedKeywordGroups = i1922
  var i1925 = i1917[23]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1925[i + 0]) );
  }
  i1916.variants = i1924
  var i1927 = i1917[24]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1927[i + 0]) );
  }
  i1916.excludedVariants = i1926
  i1916.hasDepthReader = !!i1917[25]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1929 = data
  i1928.val = i1929[0]
  i1928.name = i1929[1]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1931 = data
  i1930.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[0], i1930.src)
  i1930.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[1], i1930.dst)
  i1930.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[2], i1930.op)
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1933 = data
  i1932.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1933[0], i1932.pass)
  i1932.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1933[1], i1932.fail)
  i1932.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1933[2], i1932.zFail)
  i1932.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1933[3], i1932.comp)
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.value = i1937[1]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( i1943[i + 0] );
  }
  i1940.keywords = i1942
  i1940.hasDiscard = !!i1941[1]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1947 = data
  i1946.passId = i1947[0]
  i1946.subShaderIndex = i1947[1]
  var i1949 = i1947[2]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1946.keywords = i1948
  i1946.vertexProgram = i1947[3]
  i1946.fragmentProgram = i1947[4]
  i1946.exportedForWebGl2 = !!i1947[5]
  i1946.readDepth = !!i1947[6]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'shader')
  i1952.pass = i1953[2]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1957 = data
  i1956.name = i1957[0]
  i1956.type = i1957[1]
  i1956.value = new pc.Vec4( i1957[2], i1957[3], i1957[4], i1957[5] )
  i1956.textureValue = i1957[6]
  i1956.shaderPropertyFlag = i1957[7]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1959 = data
  i1958.name = i1959[0]
  request.r(i1959[1], i1959[2], 0, i1958, 'texture')
  i1958.aabb = i1959[3]
  i1958.vertices = i1959[4]
  i1958.triangles = i1959[5]
  i1958.textureRect = UnityEngine.Rect.MinMaxRect(i1959[6], i1959[7], i1959[8], i1959[9])
  i1958.packedRect = UnityEngine.Rect.MinMaxRect(i1959[10], i1959[11], i1959[12], i1959[13])
  i1958.border = new pc.Vec4( i1959[14], i1959[15], i1959[16], i1959[17] )
  i1958.transparency = i1959[18]
  i1958.bounds = i1959[19]
  i1958.pixelsPerUnit = i1959[20]
  i1958.textureWidth = i1959[21]
  i1958.textureHeight = i1959[22]
  i1958.nativeSize = new pc.Vec2( i1959[23], i1959[24] )
  i1958.pivot = new pc.Vec2( i1959[25], i1959[26] )
  i1958.textureRectOffset = new pc.Vec2( i1959[27], i1959[28] )
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1961 = data
  i1960.name = i1961[0]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.wrapMode = i1963[1]
  i1962.isLooping = !!i1963[2]
  i1962.length = i1963[3]
  var i1965 = i1963[4]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1965[i + 0]) );
  }
  i1962.curves = i1964
  var i1967 = i1963[5]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1967[i + 0]) );
  }
  i1962.events = i1966
  i1962.halfPrecision = !!i1963[6]
  i1962._frameRate = i1963[7]
  i1962.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1963[8], i1962.localBounds)
  i1962.hasMuscleCurves = !!i1963[9]
  var i1969 = i1963[10]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( i1969[i + 0] );
  }
  i1962.clipMuscleConstant = i1968
  i1962.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1963[11], i1962.clipBindingConstant)
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1973 = data
  i1972.path = i1973[0]
  i1972.hash = i1973[1]
  i1972.componentType = i1973[2]
  i1972.property = i1973[3]
  i1972.keys = i1973[4]
  var i1975 = i1973[5]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1975[i + 0]) );
  }
  i1972.objectReferenceKeys = i1974
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1979 = data
  i1978.time = i1979[0]
  request.r(i1979[1], i1979[2], 0, i1978, 'value')
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1983 = data
  i1982.functionName = i1983[0]
  i1982.floatParameter = i1983[1]
  i1982.intParameter = i1983[2]
  i1982.stringParameter = i1983[3]
  request.r(i1983[4], i1983[5], 0, i1982, 'objectReferenceParameter')
  i1982.time = i1983[6]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1985 = data
  i1984.center = new pc.Vec3( i1985[0], i1985[1], i1985[2] )
  i1984.extends = new pc.Vec3( i1985[3], i1985[4], i1985[5] )
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1989 = data
  var i1991 = i1989[0]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( i1991[i + 0] );
  }
  i1988.genericBindings = i1990
  var i1993 = i1989[1]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1988.pptrCurveMapping = i1992
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1995 = data
  i1994.name = i1995[0]
  var i1997 = i1995[1]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1997[i + 0]) );
  }
  i1994.layers = i1996
  var i1999 = i1995[2]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1999[i + 0]) );
  }
  i1994.parameters = i1998
  i1994.animationClips = i1995[3]
  i1994.avatarUnsupported = i1995[4]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.defaultWeight = i2003[1]
  i2002.blendingMode = i2003[2]
  i2002.avatarMask = i2003[3]
  i2002.syncedLayerIndex = i2003[4]
  i2002.syncedLayerAffectsTiming = !!i2003[5]
  i2002.syncedLayers = i2003[6]
  i2002.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2003[7], i2002.stateMachine)
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2005 = data
  i2004.id = i2005[0]
  i2004.name = i2005[1]
  i2004.path = i2005[2]
  var i2007 = i2005[3]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2007[i + 0]) );
  }
  i2004.states = i2006
  var i2009 = i2005[4]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2009[i + 0]) );
  }
  i2004.machines = i2008
  var i2011 = i2005[5]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2011[i + 0]) );
  }
  i2004.entryStateTransitions = i2010
  var i2013 = i2005[6]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2013[i + 0]) );
  }
  i2004.exitStateTransitions = i2012
  var i2015 = i2005[7]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2015[i + 0]) );
  }
  i2004.anyStateTransitions = i2014
  i2004.defaultStateId = i2005[8]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2019 = data
  i2018.id = i2019[0]
  i2018.name = i2019[1]
  i2018.cycleOffset = i2019[2]
  i2018.cycleOffsetParameter = i2019[3]
  i2018.cycleOffsetParameterActive = !!i2019[4]
  i2018.mirror = !!i2019[5]
  i2018.mirrorParameter = i2019[6]
  i2018.mirrorParameterActive = !!i2019[7]
  i2018.motionId = i2019[8]
  i2018.nameHash = i2019[9]
  i2018.fullPathHash = i2019[10]
  i2018.speed = i2019[11]
  i2018.speedParameter = i2019[12]
  i2018.speedParameterActive = !!i2019[13]
  i2018.tag = i2019[14]
  i2018.tagHash = i2019[15]
  i2018.writeDefaultValues = !!i2019[16]
  var i2021 = i2019[17]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 2, i2020, '')
  }
  i2018.behaviours = i2020
  var i2023 = i2019[18]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2023[i + 0]) );
  }
  i2018.transitions = i2022
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2029 = data
  i2028.fullPath = i2029[0]
  i2028.canTransitionToSelf = !!i2029[1]
  i2028.duration = i2029[2]
  i2028.exitTime = i2029[3]
  i2028.hasExitTime = !!i2029[4]
  i2028.hasFixedDuration = !!i2029[5]
  i2028.interruptionSource = i2029[6]
  i2028.offset = i2029[7]
  i2028.orderedInterruption = !!i2029[8]
  i2028.destinationStateId = i2029[9]
  i2028.isExit = !!i2029[10]
  i2028.mute = !!i2029[11]
  i2028.solo = !!i2029[12]
  var i2031 = i2029[13]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2031[i + 0]) );
  }
  i2028.conditions = i2030
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2037 = data
  i2036.destinationStateId = i2037[0]
  i2036.isExit = !!i2037[1]
  i2036.mute = !!i2037[2]
  i2036.solo = !!i2037[3]
  var i2039 = i2037[4]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2039[i + 0]) );
  }
  i2036.conditions = i2038
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2043 = data
  i2042.defaultBool = !!i2043[0]
  i2042.defaultFloat = i2043[1]
  i2042.defaultInt = i2043[2]
  i2042.name = i2043[3]
  i2042.nameHash = i2043[4]
  i2042.type = i2043[5]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2047 = data
  i2046.mode = i2047[0]
  i2046.parameter = i2047[1]
  i2046.threshold = i2047[2]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.bytes64 = i2049[1]
  i2048.data = i2049[2]
  return i2048
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2050 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2051 = data
  i2050.useSafeMode = !!i2051[0]
  i2050.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2051[1], i2050.safeModeOptions)
  i2050.timeScale = i2051[2]
  i2050.unscaledTimeScale = i2051[3]
  i2050.useSmoothDeltaTime = !!i2051[4]
  i2050.maxSmoothUnscaledTime = i2051[5]
  i2050.rewindCallbackMode = i2051[6]
  i2050.showUnityEditorReport = !!i2051[7]
  i2050.logBehaviour = i2051[8]
  i2050.drawGizmos = !!i2051[9]
  i2050.defaultRecyclable = !!i2051[10]
  i2050.defaultAutoPlay = i2051[11]
  i2050.defaultUpdateType = i2051[12]
  i2050.defaultTimeScaleIndependent = !!i2051[13]
  i2050.defaultEaseType = i2051[14]
  i2050.defaultEaseOvershootOrAmplitude = i2051[15]
  i2050.defaultEasePeriod = i2051[16]
  i2050.defaultAutoKill = !!i2051[17]
  i2050.defaultLoopType = i2051[18]
  i2050.debugMode = !!i2051[19]
  i2050.debugStoreTargetId = !!i2051[20]
  i2050.showPreviewPanel = !!i2051[21]
  i2050.storeSettingsLocation = i2051[22]
  i2050.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2051[23], i2050.modules)
  i2050.createASMDEF = !!i2051[24]
  i2050.showPlayingTweens = !!i2051[25]
  i2050.showPausedTweens = !!i2051[26]
  return i2050
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2052 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2053 = data
  i2052.logBehaviour = i2053[0]
  i2052.nestedTweenFailureBehaviour = i2053[1]
  return i2052
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2054 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2055 = data
  i2054.showPanel = !!i2055[0]
  i2054.audioEnabled = !!i2055[1]
  i2054.physicsEnabled = !!i2055[2]
  i2054.physics2DEnabled = !!i2055[3]
  i2054.spriteEnabled = !!i2055[4]
  i2054.uiEnabled = !!i2055[5]
  i2054.uiToolkitEnabled = !!i2055[6]
  i2054.textMeshProEnabled = !!i2055[7]
  i2054.tk2DEnabled = !!i2055[8]
  i2054.deAudioEnabled = !!i2055[9]
  i2054.deUnityExtendedEnabled = !!i2055[10]
  i2054.epoOutlineEnabled = !!i2055[11]
  return i2054
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2056 = root || request.c( 'TMPro.TMP_Settings' )
  var i2057 = data
  i2056.assetVersion = i2057[0]
  i2056.m_TextWrappingMode = i2057[1]
  i2056.m_enableKerning = !!i2057[2]
  var i2059 = i2057[3]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.add(i2059[i + 0]);
  }
  i2056.m_ActiveFontFeatures = i2058
  i2056.m_enableExtraPadding = !!i2057[4]
  i2056.m_enableTintAllSprites = !!i2057[5]
  i2056.m_enableParseEscapeCharacters = !!i2057[6]
  i2056.m_EnableRaycastTarget = !!i2057[7]
  i2056.m_GetFontFeaturesAtRuntime = !!i2057[8]
  i2056.m_missingGlyphCharacter = i2057[9]
  i2056.m_ClearDynamicDataOnBuild = !!i2057[10]
  i2056.m_warningsDisabled = !!i2057[11]
  request.r(i2057[12], i2057[13], 0, i2056, 'm_defaultFontAsset')
  i2056.m_defaultFontAssetPath = i2057[14]
  i2056.m_defaultFontSize = i2057[15]
  i2056.m_defaultAutoSizeMinRatio = i2057[16]
  i2056.m_defaultAutoSizeMaxRatio = i2057[17]
  i2056.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2057[18], i2057[19] )
  i2056.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2057[20], i2057[21] )
  i2056.m_autoSizeTextContainer = !!i2057[22]
  i2056.m_IsTextObjectScaleStatic = !!i2057[23]
  var i2061 = i2057[24]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 1, i2060, '')
  }
  i2056.m_fallbackFontAssets = i2060
  i2056.m_matchMaterialPreset = !!i2057[25]
  i2056.m_HideSubTextObjects = !!i2057[26]
  request.r(i2057[27], i2057[28], 0, i2056, 'm_defaultSpriteAsset')
  i2056.m_defaultSpriteAssetPath = i2057[29]
  i2056.m_enableEmojiSupport = !!i2057[30]
  i2056.m_MissingCharacterSpriteUnicode = i2057[31]
  var i2063 = i2057[32]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 1, i2062, '')
  }
  i2056.m_EmojiFallbackTextAssets = i2062
  i2056.m_defaultColorGradientPresetsPath = i2057[33]
  request.r(i2057[34], i2057[35], 0, i2056, 'm_defaultStyleSheet')
  i2056.m_StyleSheetsResourcePath = i2057[36]
  request.r(i2057[37], i2057[38], 0, i2056, 'm_leadingCharacters')
  request.r(i2057[39], i2057[40], 0, i2056, 'm_followingCharacters')
  i2056.m_UseModernHangulLineBreakingRules = !!i2057[41]
  return i2056
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'spriteSheet')
  var i2073 = i2071[2]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('TMPro.TMP_Sprite', i2073[i + 0]));
  }
  i2070.spriteInfoList = i2072
  var i2075 = i2071[3]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 1, i2074, '')
  }
  i2070.fallbackSpriteAssets = i2074
  var i2077 = i2071[4]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('TMPro.TMP_SpriteCharacter', i2077[i + 0]));
  }
  i2070.m_SpriteCharacterTable = i2076
  var i2079 = i2071[5]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('TMPro.TMP_SpriteGlyph', i2079[i + 0]));
  }
  i2070.m_GlyphTable = i2078
  i2070.m_Version = i2071[6]
  i2070.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2071[7], i2070.m_FaceInfo)
  request.r(i2071[8], i2071[9], 0, i2070, 'm_Material')
  return i2070
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.hashCode = i2083[1]
  i2082.unicode = i2083[2]
  i2082.pivot = new pc.Vec2( i2083[3], i2083[4] )
  request.r(i2083[5], i2083[6], 0, i2082, 'sprite')
  i2082.id = i2083[7]
  i2082.x = i2083[8]
  i2082.y = i2083[9]
  i2082.width = i2083[10]
  i2082.height = i2083[11]
  i2082.xOffset = i2083[12]
  i2082.yOffset = i2083[13]
  i2082.xAdvance = i2083[14]
  i2082.scale = i2083[15]
  return i2082
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2088 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2089 = data
  i2088.m_Name = i2089[0]
  i2088.m_ElementType = i2089[1]
  i2088.m_Unicode = i2089[2]
  i2088.m_GlyphIndex = i2089[3]
  i2088.m_Scale = i2089[4]
  return i2088
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'sprite')
  i2092.m_Index = i2093[2]
  i2092.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2093[3], i2092.m_Metrics)
  i2092.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2093[4], i2092.m_GlyphRect)
  i2092.m_Scale = i2093[5]
  i2092.m_AtlasIndex = i2093[6]
  i2092.m_ClassDefinitionType = i2093[7]
  return i2092
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2095 = data
  i2094.m_Width = i2095[0]
  i2094.m_Height = i2095[1]
  i2094.m_HorizontalBearingX = i2095[2]
  i2094.m_HorizontalBearingY = i2095[3]
  i2094.m_HorizontalAdvance = i2095[4]
  return i2094
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2097 = data
  i2096.m_X = i2097[0]
  i2096.m_Y = i2097[1]
  i2096.m_Width = i2097[2]
  i2096.m_Height = i2097[3]
  return i2096
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2099 = data
  i2098.m_FaceIndex = i2099[0]
  i2098.m_FamilyName = i2099[1]
  i2098.m_StyleName = i2099[2]
  i2098.m_PointSize = i2099[3]
  i2098.m_Scale = i2099[4]
  i2098.m_UnitsPerEM = i2099[5]
  i2098.m_LineHeight = i2099[6]
  i2098.m_AscentLine = i2099[7]
  i2098.m_CapLine = i2099[8]
  i2098.m_MeanLine = i2099[9]
  i2098.m_Baseline = i2099[10]
  i2098.m_DescentLine = i2099[11]
  i2098.m_SuperscriptOffset = i2099[12]
  i2098.m_SuperscriptSize = i2099[13]
  i2098.m_SubscriptOffset = i2099[14]
  i2098.m_SubscriptSize = i2099[15]
  i2098.m_UnderlineOffset = i2099[16]
  i2098.m_UnderlineThickness = i2099[17]
  i2098.m_StrikethroughOffset = i2099[18]
  i2098.m_StrikethroughThickness = i2099[19]
  i2098.m_TabWidth = i2099[20]
  return i2098
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2100 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.add(request.d('TMPro.TMP_Style', i2103[i + 0]));
  }
  i2100.m_StyleList = i2102
  return i2100
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2106 = root || request.c( 'TMPro.TMP_Style' )
  var i2107 = data
  i2106.m_Name = i2107[0]
  i2106.m_HashCode = i2107[1]
  i2106.m_OpeningDefinition = i2107[2]
  i2106.m_ClosingDefinition = i2107[3]
  i2106.m_OpeningTagArray = i2107[4]
  i2106.m_ClosingTagArray = i2107[5]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2109 = data
  var i2111 = i2109[0]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2111[i + 0]) );
  }
  i2108.files = i2110
  i2108.componentToPrefabIds = i2109[1]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2115 = data
  i2114.path = i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'unityObject')
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2117 = data
  var i2119 = i2117[0]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2119[i + 0]) );
  }
  i2116.scriptsExecutionOrder = i2118
  var i2121 = i2117[1]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2121[i + 0]) );
  }
  i2116.sortingLayers = i2120
  var i2123 = i2117[2]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2123[i + 0]) );
  }
  i2116.cullingLayers = i2122
  i2116.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2117[3], i2116.timeSettings)
  i2116.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2117[4], i2116.physicsSettings)
  i2116.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2117[5], i2116.physics2DSettings)
  i2116.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2117[6], i2116.qualitySettings)
  i2116.enableRealtimeShadows = !!i2117[7]
  i2116.enableAutoInstancing = !!i2117[8]
  i2116.enableStaticBatching = !!i2117[9]
  i2116.enableDynamicBatching = !!i2117[10]
  i2116.lightmapEncodingQuality = i2117[11]
  i2116.desiredColorSpace = i2117[12]
  var i2125 = i2117[13]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2116.allTags = i2124
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.value = i2129[1]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2133 = data
  i2132.id = i2133[0]
  i2132.name = i2133[1]
  i2132.value = i2133[2]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2137 = data
  i2136.id = i2137[0]
  i2136.name = i2137[1]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2139 = data
  i2138.fixedDeltaTime = i2139[0]
  i2138.maximumDeltaTime = i2139[1]
  i2138.timeScale = i2139[2]
  i2138.maximumParticleTimestep = i2139[3]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2141 = data
  i2140.gravity = new pc.Vec3( i2141[0], i2141[1], i2141[2] )
  i2140.defaultSolverIterations = i2141[3]
  i2140.bounceThreshold = i2141[4]
  i2140.autoSyncTransforms = !!i2141[5]
  i2140.autoSimulation = !!i2141[6]
  var i2143 = i2141[7]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2143[i + 0]) );
  }
  i2140.collisionMatrix = i2142
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2147 = data
  i2146.enabled = !!i2147[0]
  i2146.layerId = i2147[1]
  i2146.otherLayerId = i2147[2]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'material')
  i2148.gravity = new pc.Vec2( i2149[2], i2149[3] )
  i2148.positionIterations = i2149[4]
  i2148.velocityIterations = i2149[5]
  i2148.velocityThreshold = i2149[6]
  i2148.maxLinearCorrection = i2149[7]
  i2148.maxAngularCorrection = i2149[8]
  i2148.maxTranslationSpeed = i2149[9]
  i2148.maxRotationSpeed = i2149[10]
  i2148.baumgarteScale = i2149[11]
  i2148.baumgarteTOIScale = i2149[12]
  i2148.timeToSleep = i2149[13]
  i2148.linearSleepTolerance = i2149[14]
  i2148.angularSleepTolerance = i2149[15]
  i2148.defaultContactOffset = i2149[16]
  i2148.autoSimulation = !!i2149[17]
  i2148.queriesHitTriggers = !!i2149[18]
  i2148.queriesStartInColliders = !!i2149[19]
  i2148.callbacksOnDisable = !!i2149[20]
  i2148.reuseCollisionCallbacks = !!i2149[21]
  i2148.autoSyncTransforms = !!i2149[22]
  var i2151 = i2149[23]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2151[i + 0]) );
  }
  i2148.collisionMatrix = i2150
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2155 = data
  i2154.enabled = !!i2155[0]
  i2154.layerId = i2155[1]
  i2154.otherLayerId = i2155[2]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2157 = data
  var i2159 = i2157[0]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2159[i + 0]) );
  }
  i2156.qualityLevels = i2158
  var i2161 = i2157[1]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( i2161[i + 0] );
  }
  i2156.names = i2160
  i2156.shadows = i2157[2]
  i2156.anisotropicFiltering = i2157[3]
  i2156.antiAliasing = i2157[4]
  i2156.lodBias = i2157[5]
  i2156.shadowCascades = i2157[6]
  i2156.shadowDistance = i2157[7]
  i2156.shadowmaskMode = i2157[8]
  i2156.shadowProjection = i2157[9]
  i2156.shadowResolution = i2157[10]
  i2156.softParticles = !!i2157[11]
  i2156.softVegetation = !!i2157[12]
  i2156.activeColorSpace = i2157[13]
  i2156.desiredColorSpace = i2157[14]
  i2156.masterTextureLimit = i2157[15]
  i2156.maxQueuedFrames = i2157[16]
  i2156.particleRaycastBudget = i2157[17]
  i2156.pixelLightCount = i2157[18]
  i2156.realtimeReflectionProbes = !!i2157[19]
  i2156.shadowCascade2Split = i2157[20]
  i2156.shadowCascade4Split = new pc.Vec3( i2157[21], i2157[22], i2157[23] )
  i2156.streamingMipmapsActive = !!i2157[24]
  i2156.vSyncCount = i2157[25]
  i2156.asyncUploadBufferSize = i2157[26]
  i2156.asyncUploadTimeSlice = i2157[27]
  i2156.billboardsFaceCameraPosition = !!i2157[28]
  i2156.shadowNearPlaneOffset = i2157[29]
  i2156.streamingMipmapsMemoryBudget = i2157[30]
  i2156.maximumLODLevel = i2157[31]
  i2156.streamingMipmapsAddAllCameras = !!i2157[32]
  i2156.streamingMipmapsMaxLevelReduction = i2157[33]
  i2156.streamingMipmapsRenderersPerFrame = i2157[34]
  i2156.resolutionScalingFixedDPIFactor = i2157[35]
  i2156.streamingMipmapsMaxFileIORequests = i2157[36]
  i2156.currentQualityLevel = i2157[37]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2167 = data
  i2166.weight = i2167[0]
  i2166.vertices = i2167[1]
  i2166.normals = i2167[2]
  i2166.tangents = i2167[3]
  return i2166
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "23.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V16";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1800";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4464";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

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

Deserializers.buildID = "f3802e41-0df7-412d-a110-89ac70184051";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

