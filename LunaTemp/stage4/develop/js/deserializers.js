var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointSpring' )
  var i1699 = data
  i1698.spring = i1699[0]
  i1698.damper = i1699[1]
  i1698.targetPosition = i1699[2]
  return i1698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.JointMotor' )
  var i1701 = data
  i1700.m_TargetVelocity = i1701[0]
  i1700.m_Force = i1701[1]
  i1700.m_FreeSpin = i1701[2]
  return i1700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.JointLimits' )
  var i1703 = data
  i1702.m_Min = i1703[0]
  i1702.m_Max = i1703[1]
  i1702.m_Bounciness = i1703[2]
  i1702.m_BounceMinVelocity = i1703[3]
  i1702.m_ContactDistance = i1703[4]
  i1702.minBounce = i1703[5]
  i1702.maxBounce = i1703[6]
  return i1702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.JointDrive' )
  var i1705 = data
  i1704.m_PositionSpring = i1705[0]
  i1704.m_PositionDamper = i1705[1]
  i1704.m_MaximumForce = i1705[2]
  i1704.m_UseAcceleration = i1705[3]
  return i1704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1707 = data
  i1706.m_Spring = i1707[0]
  i1706.m_Damper = i1707[1]
  return i1706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1709 = data
  i1708.m_Limit = i1709[0]
  i1708.m_Bounciness = i1709[1]
  i1708.m_ContactDistance = i1709[2]
  return i1708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1711 = data
  i1710.m_ExtremumSlip = i1711[0]
  i1710.m_ExtremumValue = i1711[1]
  i1710.m_AsymptoteSlip = i1711[2]
  i1710.m_AsymptoteValue = i1711[3]
  i1710.m_Stiffness = i1711[4]
  return i1710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1713 = data
  i1712.m_LowerAngle = i1713[0]
  i1712.m_UpperAngle = i1713[1]
  return i1712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1715 = data
  i1714.m_MotorSpeed = i1715[0]
  i1714.m_MaximumMotorTorque = i1715[1]
  return i1714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1717 = data
  i1716.m_DampingRatio = i1717[0]
  i1716.m_Frequency = i1717[1]
  i1716.m_Angle = i1717[2]
  return i1716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1719 = data
  i1718.m_LowerTranslation = i1719[0]
  i1718.m_UpperTranslation = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1720 = root || new pc.UnityMaterial()
  var i1721 = data
  i1720.name = i1721[0]
  request.r(i1721[1], i1721[2], 0, i1720, 'shader')
  i1720.renderQueue = i1721[3]
  i1720.enableInstancing = !!i1721[4]
  var i1723 = i1721[5]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1723[i + 0]) );
  }
  i1720.floatParameters = i1722
  var i1725 = i1721[6]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1725[i + 0]) );
  }
  i1720.colorParameters = i1724
  var i1727 = i1721[7]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1727[i + 0]) );
  }
  i1720.vectorParameters = i1726
  var i1729 = i1721[8]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1729[i + 0]) );
  }
  i1720.textureParameters = i1728
  var i1731 = i1721[9]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1731[i + 0]) );
  }
  i1720.materialFlags = i1730
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1735 = data
  i1734.name = i1735[0]
  i1734.value = i1735[1]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.value = new pc.Color(i1739[1], i1739[2], i1739[3], i1739[4])
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1743 = data
  i1742.name = i1743[0]
  i1742.value = new pc.Vec4( i1743[1], i1743[2], i1743[3], i1743[4] )
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1747 = data
  i1746.name = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'value')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1751 = data
  i1750.name = i1751[0]
  i1750.enabled = !!i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1753 = data
  i1752.name = i1753[0]
  i1752.width = i1753[1]
  i1752.height = i1753[2]
  i1752.mipmapCount = i1753[3]
  i1752.anisoLevel = i1753[4]
  i1752.filterMode = i1753[5]
  i1752.hdr = !!i1753[6]
  i1752.format = i1753[7]
  i1752.wrapMode = i1753[8]
  i1752.alphaIsTransparency = !!i1753[9]
  i1752.alphaSource = i1753[10]
  i1752.graphicsFormat = i1753[11]
  i1752.sRGBTexture = !!i1753[12]
  i1752.desiredColorSpace = i1753[13]
  i1752.wrapU = i1753[14]
  i1752.wrapV = i1753[15]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1755 = data
  i1754.name = i1755[0]
  i1754.halfPrecision = !!i1755[1]
  i1754.useSimplification = !!i1755[2]
  i1754.useUInt32IndexFormat = !!i1755[3]
  i1754.vertexCount = i1755[4]
  i1754.aabb = i1755[5]
  var i1757 = i1755[6]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( !!i1757[i + 0] );
  }
  i1754.streams = i1756
  i1754.vertices = i1755[7]
  var i1759 = i1755[8]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1759[i + 0]) );
  }
  i1754.subMeshes = i1758
  var i1761 = i1755[9]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 16) {
    i1760.push( new pc.Mat4().setData(i1761[i + 0], i1761[i + 1], i1761[i + 2], i1761[i + 3],  i1761[i + 4], i1761[i + 5], i1761[i + 6], i1761[i + 7],  i1761[i + 8], i1761[i + 9], i1761[i + 10], i1761[i + 11],  i1761[i + 12], i1761[i + 13], i1761[i + 14], i1761[i + 15]) );
  }
  i1754.bindposes = i1760
  var i1763 = i1755[10]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1763[i + 0]) );
  }
  i1754.blendShapes = i1762
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1769 = data
  i1768.triangles = i1769[0]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1775 = data
  i1774.name = i1775[0]
  var i1777 = i1775[1]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1777[i + 0]) );
  }
  i1774.frames = i1776
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.index = i1779[1]
  i1778.startup = !!i1779[2]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1781 = data
  i1780.aspect = i1781[0]
  i1780.orthographic = !!i1781[1]
  i1780.orthographicSize = i1781[2]
  i1780.backgroundColor = new pc.Color(i1781[3], i1781[4], i1781[5], i1781[6])
  i1780.nearClipPlane = i1781[7]
  i1780.farClipPlane = i1781[8]
  i1780.fieldOfView = i1781[9]
  i1780.depth = i1781[10]
  i1780.clearFlags = i1781[11]
  i1780.cullingMask = i1781[12]
  i1780.rect = i1781[13]
  request.r(i1781[14], i1781[15], 0, i1780, 'targetTexture')
  i1780.usePhysicalProperties = !!i1781[16]
  i1780.focalLength = i1781[17]
  i1780.sensorSize = new pc.Vec2( i1781[18], i1781[19] )
  i1780.lensShift = new pc.Vec2( i1781[20], i1781[21] )
  i1780.gateFit = i1781[22]
  i1780.commandBufferCount = i1781[23]
  i1780.cameraType = i1781[24]
  i1780.enabled = !!i1781[25]
  return i1780
}

Deserializers["CameraFollow2D"] = function (request, data, root) {
  var i1782 = root || request.c( 'CameraFollow2D' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'target')
  i1782.smoothSpeed = i1783[2]
  i1782.offset = new pc.Vec3( i1783[3], i1783[4], i1783[5] )
  i1782.followY = !!i1783[6]
  return i1782
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i1784 = root || request.c( 'AutoCameraFit' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'tallScreenObject')
  i1784.tallScreenRatioThreshold = i1785[2]
  i1784.tallScreenYOffset = i1785[3]
  request.r(i1785[4], i1785[5], 0, i1784, 'canvasBtn')
  request.r(i1785[6], i1785[7], 0, i1784, 'targetArea')
  i1784.paddingLandscape = i1785[8]
  i1784.paddingPortrait = i1785[9]
  i1784.extraPaddingSmallScreen = i1785[10]
  i1784.smallScreenThreshold = i1785[11]
  i1784.autoUpdateOnResize = !!i1785[12]
  i1784.adjustInEditMode = !!i1785[13]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1787 = data
  i1786.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1787[0], i1786.main)
  i1786.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1787[1], i1786.colorBySpeed)
  i1786.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1787[2], i1786.colorOverLifetime)
  i1786.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1787[3], i1786.emission)
  i1786.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1787[4], i1786.rotationBySpeed)
  i1786.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1787[5], i1786.rotationOverLifetime)
  i1786.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1787[6], i1786.shape)
  i1786.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1787[7], i1786.sizeBySpeed)
  i1786.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1787[8], i1786.sizeOverLifetime)
  i1786.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1787[9], i1786.textureSheetAnimation)
  i1786.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1787[10], i1786.velocityOverLifetime)
  i1786.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1787[11], i1786.noise)
  i1786.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1787[12], i1786.inheritVelocity)
  i1786.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1787[13], i1786.forceOverLifetime)
  i1786.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1787[14], i1786.limitVelocityOverLifetime)
  i1786.useAutoRandomSeed = !!i1787[15]
  i1786.randomSeed = i1787[16]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemMain()
  var i1789 = data
  i1788.duration = i1789[0]
  i1788.loop = !!i1789[1]
  i1788.prewarm = !!i1789[2]
  i1788.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[3], i1788.startDelay)
  i1788.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[4], i1788.startLifetime)
  i1788.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[5], i1788.startSpeed)
  i1788.startSize3D = !!i1789[6]
  i1788.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[7], i1788.startSizeX)
  i1788.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[8], i1788.startSizeY)
  i1788.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[9], i1788.startSizeZ)
  i1788.startRotation3D = !!i1789[10]
  i1788.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[11], i1788.startRotationX)
  i1788.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[12], i1788.startRotationY)
  i1788.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[13], i1788.startRotationZ)
  i1788.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1789[14], i1788.startColor)
  i1788.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[15], i1788.gravityModifier)
  i1788.simulationSpace = i1789[16]
  request.r(i1789[17], i1789[18], 0, i1788, 'customSimulationSpace')
  i1788.simulationSpeed = i1789[19]
  i1788.useUnscaledTime = !!i1789[20]
  i1788.scalingMode = i1789[21]
  i1788.playOnAwake = !!i1789[22]
  i1788.maxParticles = i1789[23]
  i1788.emitterVelocityMode = i1789[24]
  i1788.stopAction = i1789[25]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1790 = root || new pc.MinMaxCurve()
  var i1791 = data
  i1790.mode = i1791[0]
  i1790.curveMin = new pc.AnimationCurve( { keys_flow: i1791[1] } )
  i1790.curveMax = new pc.AnimationCurve( { keys_flow: i1791[2] } )
  i1790.curveMultiplier = i1791[3]
  i1790.constantMin = i1791[4]
  i1790.constantMax = i1791[5]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1792 = root || new pc.MinMaxGradient()
  var i1793 = data
  i1792.mode = i1793[0]
  i1792.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1793[1], i1792.gradientMin)
  i1792.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1793[2], i1792.gradientMax)
  i1792.colorMin = new pc.Color(i1793[3], i1793[4], i1793[5], i1793[6])
  i1792.colorMax = new pc.Color(i1793[7], i1793[8], i1793[9], i1793[10])
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1795 = data
  i1794.mode = i1795[0]
  var i1797 = i1795[1]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1797[i + 0]) );
  }
  i1794.colorKeys = i1796
  var i1799 = i1795[2]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1799[i + 0]) );
  }
  i1794.alphaKeys = i1798
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemColorBySpeed()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1801[1], i1800.color)
  i1800.range = new pc.Vec2( i1801[2], i1801[3] )
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1805 = data
  i1804.color = new pc.Color(i1805[0], i1805[1], i1805[2], i1805[3])
  i1804.time = i1805[4]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1809 = data
  i1808.alpha = i1809[0]
  i1808.time = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemColorOverLifetime()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1811[1], i1810.color)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemEmitter()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[1], i1812.rateOverTime)
  i1812.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[2], i1812.rateOverDistance)
  var i1815 = i1813[3]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1815[i + 0]) );
  }
  i1812.bursts = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemBurst()
  var i1819 = data
  i1818.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[0], i1818.count)
  i1818.cycleCount = i1819[1]
  i1818.minCount = i1819[2]
  i1818.maxCount = i1819[3]
  i1818.repeatInterval = i1819[4]
  i1818.time = i1819[5]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1820 = root || new pc.ParticleSystemRotationBySpeed()
  var i1821 = data
  i1820.enabled = !!i1821[0]
  i1820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[1], i1820.x)
  i1820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[2], i1820.y)
  i1820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[3], i1820.z)
  i1820.separateAxes = !!i1821[4]
  i1820.range = new pc.Vec2( i1821[5], i1821[6] )
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[1], i1822.x)
  i1822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[2], i1822.y)
  i1822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[3], i1822.z)
  i1822.separateAxes = !!i1823[4]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemShape()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.shapeType = i1825[1]
  i1824.randomDirectionAmount = i1825[2]
  i1824.sphericalDirectionAmount = i1825[3]
  i1824.randomPositionAmount = i1825[4]
  i1824.alignToDirection = !!i1825[5]
  i1824.radius = i1825[6]
  i1824.radiusMode = i1825[7]
  i1824.radiusSpread = i1825[8]
  i1824.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[9], i1824.radiusSpeed)
  i1824.radiusThickness = i1825[10]
  i1824.angle = i1825[11]
  i1824.length = i1825[12]
  i1824.boxThickness = new pc.Vec3( i1825[13], i1825[14], i1825[15] )
  i1824.meshShapeType = i1825[16]
  request.r(i1825[17], i1825[18], 0, i1824, 'mesh')
  request.r(i1825[19], i1825[20], 0, i1824, 'meshRenderer')
  request.r(i1825[21], i1825[22], 0, i1824, 'skinnedMeshRenderer')
  i1824.useMeshMaterialIndex = !!i1825[23]
  i1824.meshMaterialIndex = i1825[24]
  i1824.useMeshColors = !!i1825[25]
  i1824.normalOffset = i1825[26]
  i1824.arc = i1825[27]
  i1824.arcMode = i1825[28]
  i1824.arcSpread = i1825[29]
  i1824.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[30], i1824.arcSpeed)
  i1824.donutRadius = i1825[31]
  i1824.position = new pc.Vec3( i1825[32], i1825[33], i1825[34] )
  i1824.rotation = new pc.Vec3( i1825[35], i1825[36], i1825[37] )
  i1824.scale = new pc.Vec3( i1825[38], i1825[39], i1825[40] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1826 = root || new pc.ParticleSystemSizeBySpeed()
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[1], i1826.x)
  i1826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[2], i1826.y)
  i1826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[3], i1826.z)
  i1826.separateAxes = !!i1827[4]
  i1826.range = new pc.Vec2( i1827[5], i1827[6] )
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1828 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1829 = data
  i1828.enabled = !!i1829[0]
  i1828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[1], i1828.x)
  i1828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[2], i1828.y)
  i1828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1829[3], i1828.z)
  i1828.separateAxes = !!i1829[4]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1830 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1831 = data
  i1830.enabled = !!i1831[0]
  i1830.mode = i1831[1]
  i1830.animation = i1831[2]
  i1830.numTilesX = i1831[3]
  i1830.numTilesY = i1831[4]
  i1830.useRandomRow = !!i1831[5]
  i1830.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1831[6], i1830.frameOverTime)
  i1830.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1831[7], i1830.startFrame)
  i1830.cycleCount = i1831[8]
  i1830.rowIndex = i1831[9]
  i1830.flipU = i1831[10]
  i1830.flipV = i1831[11]
  i1830.spriteCount = i1831[12]
  var i1833 = i1831[13]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 2) {
  request.r(i1833[i + 0], i1833[i + 1], 2, i1832, '')
  }
  i1830.sprites = i1832
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1836 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[1], i1836.x)
  i1836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[2], i1836.y)
  i1836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[3], i1836.z)
  i1836.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[4], i1836.radial)
  i1836.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[5], i1836.speedModifier)
  i1836.space = i1837[6]
  i1836.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[7], i1836.orbitalX)
  i1836.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[8], i1836.orbitalY)
  i1836.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[9], i1836.orbitalZ)
  i1836.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[10], i1836.orbitalOffsetX)
  i1836.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[11], i1836.orbitalOffsetY)
  i1836.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[12], i1836.orbitalOffsetZ)
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1838 = root || new pc.ParticleSystemNoise()
  var i1839 = data
  i1838.enabled = !!i1839[0]
  i1838.separateAxes = !!i1839[1]
  i1838.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[2], i1838.strengthX)
  i1838.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[3], i1838.strengthY)
  i1838.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[4], i1838.strengthZ)
  i1838.frequency = i1839[5]
  i1838.damping = !!i1839[6]
  i1838.octaveCount = i1839[7]
  i1838.octaveMultiplier = i1839[8]
  i1838.octaveScale = i1839[9]
  i1838.quality = i1839[10]
  i1838.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[11], i1838.scrollSpeed)
  i1838.scrollSpeedMultiplier = i1839[12]
  i1838.remapEnabled = !!i1839[13]
  i1838.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[14], i1838.remapX)
  i1838.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[15], i1838.remapY)
  i1838.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[16], i1838.remapZ)
  i1838.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[17], i1838.positionAmount)
  i1838.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[18], i1838.rotationAmount)
  i1838.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[19], i1838.sizeAmount)
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1840 = root || new pc.ParticleSystemInheritVelocity()
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.mode = i1841[1]
  i1840.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[2], i1840.curve)
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1842 = root || new pc.ParticleSystemForceOverLifetime()
  var i1843 = data
  i1842.enabled = !!i1843[0]
  i1842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[1], i1842.x)
  i1842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[2], i1842.y)
  i1842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[3], i1842.z)
  i1842.space = i1843[4]
  i1842.randomized = !!i1843[5]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1844 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1845 = data
  i1844.enabled = !!i1845[0]
  i1844.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1845[1], i1844.limit)
  i1844.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1845[2], i1844.limitX)
  i1844.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1845[3], i1844.limitY)
  i1844.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1845[4], i1844.limitZ)
  i1844.dampen = i1845[5]
  i1844.separateAxes = !!i1845[6]
  i1844.space = i1845[7]
  i1844.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1845[8], i1844.drag)
  i1844.multiplyDragByParticleSize = !!i1845[9]
  i1844.multiplyDragByParticleVelocity = !!i1845[10]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'mesh')
  i1846.meshCount = i1847[2]
  i1846.activeVertexStreamsCount = i1847[3]
  i1846.alignment = i1847[4]
  i1846.renderMode = i1847[5]
  i1846.sortMode = i1847[6]
  i1846.lengthScale = i1847[7]
  i1846.velocityScale = i1847[8]
  i1846.cameraVelocityScale = i1847[9]
  i1846.normalDirection = i1847[10]
  i1846.sortingFudge = i1847[11]
  i1846.minParticleSize = i1847[12]
  i1846.maxParticleSize = i1847[13]
  i1846.pivot = new pc.Vec3( i1847[14], i1847[15], i1847[16] )
  request.r(i1847[17], i1847[18], 0, i1846, 'trailMaterial')
  i1846.applyActiveColorSpace = !!i1847[19]
  i1846.enabled = !!i1847[20]
  request.r(i1847[21], i1847[22], 0, i1846, 'sharedMaterial')
  var i1849 = i1847[23]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 2, i1848, '')
  }
  i1846.sharedMaterials = i1848
  i1846.receiveShadows = !!i1847[24]
  i1846.shadowCastingMode = i1847[25]
  i1846.sortingLayerID = i1847[26]
  i1846.sortingOrder = i1847[27]
  i1846.lightmapIndex = i1847[28]
  i1846.lightmapSceneIndex = i1847[29]
  i1846.lightmapScaleOffset = new pc.Vec4( i1847[30], i1847[31], i1847[32], i1847[33] )
  i1846.lightProbeUsage = i1847[34]
  i1846.reflectionProbeUsage = i1847[35]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.tagId = i1853[1]
  i1852.enabled = !!i1853[2]
  i1852.isStatic = !!i1853[3]
  i1852.layer = i1853[4]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1855 = data
  i1854.color = new pc.Color(i1855[0], i1855[1], i1855[2], i1855[3])
  request.r(i1855[4], i1855[5], 0, i1854, 'sprite')
  i1854.flipX = !!i1855[6]
  i1854.flipY = !!i1855[7]
  i1854.drawMode = i1855[8]
  i1854.size = new pc.Vec2( i1855[9], i1855[10] )
  i1854.tileMode = i1855[11]
  i1854.adaptiveModeThreshold = i1855[12]
  i1854.maskInteraction = i1855[13]
  i1854.spriteSortPoint = i1855[14]
  i1854.enabled = !!i1855[15]
  request.r(i1855[16], i1855[17], 0, i1854, 'sharedMaterial')
  var i1857 = i1855[18]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 2, i1856, '')
  }
  i1854.sharedMaterials = i1856
  i1854.receiveShadows = !!i1855[19]
  i1854.shadowCastingMode = i1855[20]
  i1854.sortingLayerID = i1855[21]
  i1854.sortingOrder = i1855[22]
  i1854.lightmapIndex = i1855[23]
  i1854.lightmapSceneIndex = i1855[24]
  i1854.lightmapScaleOffset = new pc.Vec4( i1855[25], i1855[26], i1855[27], i1855[28] )
  i1854.lightProbeUsage = i1855[29]
  i1854.reflectionProbeUsage = i1855[30]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'animatorController')
  request.r(i1859[2], i1859[3], 0, i1858, 'avatar')
  i1858.updateMode = i1859[4]
  i1858.hasTransformHierarchy = !!i1859[5]
  i1858.applyRootMotion = !!i1859[6]
  var i1861 = i1859[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.humanBones = i1860
  i1858.enabled = !!i1859[8]
  return i1858
}

Deserializers["MoveBetweenPoints"] = function (request, data, root) {
  var i1864 = root || request.c( 'MoveBetweenPoints' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'pointA')
  request.r(i1865[2], i1865[3], 0, i1864, 'pointB')
  i1864.duration = i1865[4]
  return i1864
}

Deserializers["PlayerCardUIManager"] = function (request, data, root) {
  var i1866 = root || request.c( 'PlayerCardUIManager' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'cardPanel')
  var i1869 = i1867[2]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.extraObjectsToActivate = i1868
  i1866.waitTime = i1867[3]
  var i1871 = i1867[4]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1866.objectsToTurnOnAfterWait = i1870
  var i1873 = i1867[5]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 2, i1872, '')
  }
  i1866.objectsToTurnOffAfterWait = i1872
  request.r(i1867[6], i1867[7], 0, i1866, 'playerNameText')
  request.r(i1867[8], i1867[9], 0, i1866, 'playerImage')
  return i1866
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1876 = root || request.c( 'Ply_SoundManager' )
  var i1877 = data
  i1876.fxAudio = request.d('FxAudio', i1877[0], i1876.fxAudio)
  request.r(i1877[1], i1877[2], 0, i1876, 'bgm1')
  return i1876
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i1878 = root || request.c( 'FxAudio' )
  var i1879 = data
  i1878.ClickBox = request.d('SoundData', i1879[0], i1878.ClickBox)
  i1878.Happy = request.d('SoundData', i1879[1], i1878.Happy)
  i1878.Wrong = request.d('SoundData', i1879[2], i1878.Wrong)
  i1878.Spray = request.d('SoundData', i1879[3], i1878.Spray)
  i1878.Brush = request.d('SoundData', i1879[4], i1878.Brush)
  i1878.Keo = request.d('SoundData', i1879[5], i1878.Keo)
  i1878.Confetti = request.d('SoundData', i1879[6], i1878.Confetti)
  i1878.Lose2 = request.d('SoundData', i1879[7], i1878.Lose2)
  return i1878
}

Deserializers["SoundData"] = function (request, data, root) {
  var i1880 = root || request.c( 'SoundData' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'clip')
  i1880.repeatCount = i1881[2]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'clip')
  request.r(i1883[2], i1883[3], 0, i1882, 'outputAudioMixerGroup')
  i1882.playOnAwake = !!i1883[4]
  i1882.loop = !!i1883[5]
  i1882.time = i1883[6]
  i1882.volume = i1883[7]
  i1882.pitch = i1883[8]
  i1882.enabled = !!i1883[9]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1885 = data
  i1884.pivot = new pc.Vec2( i1885[0], i1885[1] )
  i1884.anchorMin = new pc.Vec2( i1885[2], i1885[3] )
  i1884.anchorMax = new pc.Vec2( i1885[4], i1885[5] )
  i1884.sizeDelta = new pc.Vec2( i1885[6], i1885[7] )
  i1884.anchoredPosition3D = new pc.Vec3( i1885[8], i1885[9], i1885[10] )
  i1884.rotation = new pc.Quat(i1885[11], i1885[12], i1885[13], i1885[14])
  i1884.scale = new pc.Vec3( i1885[15], i1885[16], i1885[17] )
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1887 = data
  i1886.planeDistance = i1887[0]
  i1886.referencePixelsPerUnit = i1887[1]
  i1886.isFallbackOverlay = !!i1887[2]
  i1886.renderMode = i1887[3]
  i1886.renderOrder = i1887[4]
  i1886.sortingLayerName = i1887[5]
  i1886.sortingOrder = i1887[6]
  i1886.scaleFactor = i1887[7]
  request.r(i1887[8], i1887[9], 0, i1886, 'worldCamera')
  i1886.overrideSorting = !!i1887[10]
  i1886.pixelPerfect = !!i1887[11]
  i1886.targetDisplay = i1887[12]
  i1886.overridePixelPerfect = !!i1887[13]
  i1886.enabled = !!i1887[14]
  return i1886
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1889 = data
  i1888.m_UiScaleMode = i1889[0]
  i1888.m_ReferencePixelsPerUnit = i1889[1]
  i1888.m_ScaleFactor = i1889[2]
  i1888.m_ReferenceResolution = new pc.Vec2( i1889[3], i1889[4] )
  i1888.m_ScreenMatchMode = i1889[5]
  i1888.m_MatchWidthOrHeight = i1889[6]
  i1888.m_PhysicalUnit = i1889[7]
  i1888.m_FallbackScreenDPI = i1889[8]
  i1888.m_DefaultSpriteDPI = i1889[9]
  i1888.m_DynamicPixelsPerUnit = i1889[10]
  i1888.m_PresetInfoIsWorld = !!i1889[11]
  return i1888
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1891 = data
  i1890.m_IgnoreReversedGraphics = !!i1891[0]
  i1890.m_BlockingObjects = i1891[1]
  i1890.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1891[2] )
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1893 = data
  i1892.cullTransparentMesh = !!i1893[0]
  return i1892
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.UI.Image' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'm_Sprite')
  i1894.m_Type = i1895[2]
  i1894.m_PreserveAspect = !!i1895[3]
  i1894.m_FillCenter = !!i1895[4]
  i1894.m_FillMethod = i1895[5]
  i1894.m_FillAmount = i1895[6]
  i1894.m_FillClockwise = !!i1895[7]
  i1894.m_FillOrigin = i1895[8]
  i1894.m_UseSpriteMesh = !!i1895[9]
  i1894.m_PixelsPerUnitMultiplier = i1895[10]
  request.r(i1895[11], i1895[12], 0, i1894, 'm_Material')
  i1894.m_Maskable = !!i1895[13]
  i1894.m_Color = new pc.Color(i1895[14], i1895[15], i1895[16], i1895[17])
  i1894.m_RaycastTarget = !!i1895[18]
  i1894.m_RaycastPadding = new pc.Vec4( i1895[19], i1895[20], i1895[21], i1895[22] )
  return i1894
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.UI.Button' )
  var i1897 = data
  i1896.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1897[0], i1896.m_OnClick)
  i1896.m_Navigation = request.d('UnityEngine.UI.Navigation', i1897[1], i1896.m_Navigation)
  i1896.m_Transition = i1897[2]
  i1896.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1897[3], i1896.m_Colors)
  i1896.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1897[4], i1896.m_SpriteState)
  i1896.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1897[5], i1896.m_AnimationTriggers)
  i1896.m_Interactable = !!i1897[6]
  request.r(i1897[7], i1897[8], 0, i1896, 'm_TargetGraphic')
  return i1896
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1899 = data
  i1898.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1899[0], i1898.m_PersistentCalls)
  return i1898
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1901 = data
  var i1903 = i1901[0]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('UnityEngine.Events.PersistentCall', i1903[i + 0]));
  }
  i1900.m_Calls = i1902
  return i1900
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'm_Target')
  i1906.m_TargetAssemblyTypeName = i1907[2]
  i1906.m_MethodName = i1907[3]
  i1906.m_Mode = i1907[4]
  i1906.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1907[5], i1906.m_Arguments)
  i1906.m_CallState = i1907[6]
  return i1906
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'm_ObjectArgument')
  i1908.m_ObjectArgumentAssemblyTypeName = i1909[2]
  i1908.m_IntArgument = i1909[3]
  i1908.m_FloatArgument = i1909[4]
  i1908.m_StringArgument = i1909[5]
  i1908.m_BoolArgument = !!i1909[6]
  return i1908
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1911 = data
  i1910.m_Mode = i1911[0]
  i1910.m_WrapAround = !!i1911[1]
  request.r(i1911[2], i1911[3], 0, i1910, 'm_SelectOnUp')
  request.r(i1911[4], i1911[5], 0, i1910, 'm_SelectOnDown')
  request.r(i1911[6], i1911[7], 0, i1910, 'm_SelectOnLeft')
  request.r(i1911[8], i1911[9], 0, i1910, 'm_SelectOnRight')
  return i1910
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1913 = data
  i1912.m_NormalColor = new pc.Color(i1913[0], i1913[1], i1913[2], i1913[3])
  i1912.m_HighlightedColor = new pc.Color(i1913[4], i1913[5], i1913[6], i1913[7])
  i1912.m_PressedColor = new pc.Color(i1913[8], i1913[9], i1913[10], i1913[11])
  i1912.m_SelectedColor = new pc.Color(i1913[12], i1913[13], i1913[14], i1913[15])
  i1912.m_DisabledColor = new pc.Color(i1913[16], i1913[17], i1913[18], i1913[19])
  i1912.m_ColorMultiplier = i1913[20]
  i1912.m_FadeDuration = i1913[21]
  return i1912
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'm_HighlightedSprite')
  request.r(i1915[2], i1915[3], 0, i1914, 'm_PressedSprite')
  request.r(i1915[4], i1915[5], 0, i1914, 'm_SelectedSprite')
  request.r(i1915[6], i1915[7], 0, i1914, 'm_DisabledSprite')
  return i1914
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1917 = data
  i1916.m_NormalTrigger = i1917[0]
  i1916.m_HighlightedTrigger = i1917[1]
  i1916.m_PressedTrigger = i1917[2]
  i1916.m_SelectedTrigger = i1917[3]
  i1916.m_DisabledTrigger = i1917[4]
  return i1916
}

Deserializers["HairCutController"] = function (request, data, root) {
  var i1918 = root || request.c( 'HairCutController' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'scissors')
  request.r(i1919[2], i1919[3], 0, i1918, 'scissorsAnimator')
  request.r(i1919[4], i1919[5], 0, i1918, 'targetAnimatorToDisable')
  request.r(i1919[6], i1919[7], 0, i1918, 'linePointA')
  request.r(i1919[8], i1919[9], 0, i1918, 'linePointB')
  i1918.scissorMoveDuration = i1919[10]
  var i1921 = i1919[11]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1918.allMasks = i1920
  request.r(i1919[12], i1919[13], 0, i1918, 'fallingHairParent')
  var i1923 = i1919[14]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 2, i1922, '')
  }
  i1918.fallingHairRenderers = i1922
  request.r(i1919[15], i1919[16], 0, i1918, 'scissorsCollider')
  var i1925 = i1919[17]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('TargetColliderData', i1925[i + 0]) );
  }
  i1918.targetColliders = i1924
  request.r(i1919[18], i1919[19], 0, i1918, 'targetCollider')
  request.r(i1919[20], i1919[21], 0, i1918, 'winObjectToEnable')
  var i1927 = i1919[22]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 2) {
  request.r(i1927[i + 0], i1927[i + 1], 2, i1926, '')
  }
  i1918.winObjectsToEnable = i1926
  request.r(i1919[23], i1919[24], 0, i1918, 'winObjectToDisable')
  var i1929 = i1919[25]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1918.winObjectsToDisable = i1928
  request.r(i1919[26], i1919[27], 0, i1918, 'lossSpriteRenderer')
  request.r(i1919[28], i1919[29], 0, i1918, 'lossObjectToEnable')
  var i1931 = i1919[30]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1918.lossObjectsToEnable = i1930
  request.r(i1919[31], i1919[32], 0, i1918, 'lossObjectToDisable')
  var i1933 = i1919[33]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 2) {
  request.r(i1933[i + 0], i1933[i + 1], 2, i1932, '')
  }
  i1918.lossObjectsToDisable = i1932
  i1918.endDelay = i1919[34]
  var i1935 = i1919[35]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 2) {
  request.r(i1935[i + 0], i1935[i + 1], 2, i1934, '')
  }
  i1918.afterEndDisableObjects = i1934
  var i1937 = i1919[36]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 2, i1936, '')
  }
  i1918.afterEndEnableObjects = i1936
  request.r(i1919[37], i1919[38], 0, i1918, 'tutObject')
  request.r(i1919[39], i1919[40], 0, i1918, 'animatorToEnableOnFirstTap')
  i1918.firstTapTriggerName = i1919[41]
  request.r(i1919[42], i1919[43], 0, i1918, 'objectToDisableOnComplete')
  var i1939 = i1919[44]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 2) {
  request.r(i1939[i + 0], i1939[i + 1], 2, i1938, '')
  }
  i1918.objectsToDisableOnComplete = i1938
  i1918.fallDistance = i1919[45]
  i1918.fallDuration = i1919[46]
  i1918.fadeDuration = i1919[47]
  return i1918
}

Deserializers["TargetColliderData"] = function (request, data, root) {
  var i1946 = root || request.c( 'TargetColliderData' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'collider')
  request.r(i1947[2], i1947[3], 0, i1946, 'resultSprite')
  i1946.isWin = !!i1947[4]
  return i1946
}

Deserializers["HideOnFirstClick"] = function (request, data, root) {
  var i1948 = root || request.c( 'HideOnFirstClick' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'objectToHide')
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1951 = data
  i1950.usedByComposite = !!i1951[0]
  i1950.autoTiling = !!i1951[1]
  i1950.size = new pc.Vec2( i1951[2], i1951[3] )
  i1950.edgeRadius = i1951[4]
  i1950.enabled = !!i1951[5]
  i1950.isTrigger = !!i1951[6]
  i1950.usedByEffector = !!i1951[7]
  i1950.density = i1951[8]
  i1950.offset = new pc.Vec2( i1951[9], i1951[10] )
  request.r(i1951[11], i1951[12], 0, i1950, 'material')
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1953 = data
  i1952.frontSortingLayerID = i1953[0]
  i1952.frontSortingOrder = i1953[1]
  i1952.backSortingLayerID = i1953[2]
  i1952.backSortingOrder = i1953[3]
  i1952.alphaCutoff = i1953[4]
  request.r(i1953[5], i1953[6], 0, i1952, 'sprite')
  i1952.tileMode = i1953[7]
  i1952.isCustomRangeActive = !!i1953[8]
  i1952.spriteSortPoint = i1953[9]
  i1952.enabled = !!i1953[10]
  request.r(i1953[11], i1953[12], 0, i1952, 'sharedMaterial')
  var i1955 = i1953[13]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 2, i1954, '')
  }
  i1952.sharedMaterials = i1954
  i1952.receiveShadows = !!i1953[14]
  i1952.shadowCastingMode = i1953[15]
  i1952.sortingLayerID = i1953[16]
  i1952.sortingOrder = i1953[17]
  i1952.lightmapIndex = i1953[18]
  i1952.lightmapSceneIndex = i1953[19]
  i1952.lightmapScaleOffset = new pc.Vec4( i1953[20], i1953[21], i1953[22], i1953[23] )
  i1952.lightProbeUsage = i1953[24]
  i1952.reflectionProbeUsage = i1953[25]
  return i1952
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_FirstSelected')
  i1956.m_sendNavigationEvents = !!i1957[2]
  i1956.m_DragThreshold = i1957[3]
  return i1956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1959 = data
  i1958.m_HorizontalAxis = i1959[0]
  i1958.m_VerticalAxis = i1959[1]
  i1958.m_SubmitButton = i1959[2]
  i1958.m_CancelButton = i1959[3]
  i1958.m_InputActionsPerSecond = i1959[4]
  i1958.m_RepeatDelay = i1959[5]
  i1958.m_ForceModuleActive = !!i1959[6]
  i1958.m_SendPointerHoverToParent = !!i1959[7]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1961 = data
  i1960.ambientIntensity = i1961[0]
  i1960.reflectionIntensity = i1961[1]
  i1960.ambientMode = i1961[2]
  i1960.ambientLight = new pc.Color(i1961[3], i1961[4], i1961[5], i1961[6])
  i1960.ambientSkyColor = new pc.Color(i1961[7], i1961[8], i1961[9], i1961[10])
  i1960.ambientGroundColor = new pc.Color(i1961[11], i1961[12], i1961[13], i1961[14])
  i1960.ambientEquatorColor = new pc.Color(i1961[15], i1961[16], i1961[17], i1961[18])
  i1960.fogColor = new pc.Color(i1961[19], i1961[20], i1961[21], i1961[22])
  i1960.fogEndDistance = i1961[23]
  i1960.fogStartDistance = i1961[24]
  i1960.fogDensity = i1961[25]
  i1960.fog = !!i1961[26]
  request.r(i1961[27], i1961[28], 0, i1960, 'skybox')
  i1960.fogMode = i1961[29]
  var i1963 = i1961[30]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1963[i + 0]) );
  }
  i1960.lightmaps = i1962
  i1960.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1961[31], i1960.lightProbes)
  i1960.lightmapsMode = i1961[32]
  i1960.mixedBakeMode = i1961[33]
  i1960.environmentLightingMode = i1961[34]
  i1960.ambientProbe = new pc.SphericalHarmonicsL2(i1961[35])
  i1960.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1961[36])
  i1960.useReferenceAmbientProbe = !!i1961[37]
  request.r(i1961[38], i1961[39], 0, i1960, 'customReflection')
  request.r(i1961[40], i1961[41], 0, i1960, 'defaultReflection')
  i1960.defaultReflectionMode = i1961[42]
  i1960.defaultReflectionResolution = i1961[43]
  i1960.sunLightObjectId = i1961[44]
  i1960.pixelLightCount = i1961[45]
  i1960.defaultReflectionHDR = !!i1961[46]
  i1960.hasLightDataAsset = !!i1961[47]
  i1960.hasManualGenerate = !!i1961[48]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'lightmapColor')
  request.r(i1967[2], i1967[3], 0, i1966, 'lightmapDirection')
  request.r(i1967[4], i1967[5], 0, i1966, 'shadowMask')
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1968 = root || new UnityEngine.LightProbes()
  var i1969 = data
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1977 = data
  var i1979 = i1977[0]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1979[i + 0]));
  }
  i1976.ShaderCompilationErrors = i1978
  i1976.name = i1977[1]
  i1976.guid = i1977[2]
  var i1981 = i1977[3]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( i1981[i + 0] );
  }
  i1976.shaderDefinedKeywords = i1980
  var i1983 = i1977[4]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1983[i + 0]) );
  }
  i1976.passes = i1982
  var i1985 = i1977[5]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1985[i + 0]) );
  }
  i1976.usePasses = i1984
  var i1987 = i1977[6]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1987[i + 0]) );
  }
  i1976.defaultParameterValues = i1986
  request.r(i1977[7], i1977[8], 0, i1976, 'unityFallbackShader')
  i1976.readDepth = !!i1977[9]
  i1976.hasDepthOnlyPass = !!i1977[10]
  i1976.isCreatedByShaderGraph = !!i1977[11]
  i1976.disableBatching = !!i1977[12]
  i1976.compiled = !!i1977[13]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1991 = data
  i1990.shaderName = i1991[0]
  i1990.errorMessage = i1991[1]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1996 = root || new pc.UnityShaderPass()
  var i1997 = data
  i1996.id = i1997[0]
  i1996.subShaderIndex = i1997[1]
  i1996.name = i1997[2]
  i1996.passType = i1997[3]
  i1996.grabPassTextureName = i1997[4]
  i1996.usePass = !!i1997[5]
  i1996.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[6], i1996.zTest)
  i1996.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[7], i1996.zWrite)
  i1996.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[8], i1996.culling)
  i1996.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[9], i1996.blending)
  i1996.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[10], i1996.alphaBlending)
  i1996.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[11], i1996.colorWriteMask)
  i1996.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[12], i1996.offsetUnits)
  i1996.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[13], i1996.offsetFactor)
  i1996.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[14], i1996.stencilRef)
  i1996.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[15], i1996.stencilReadMask)
  i1996.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[16], i1996.stencilWriteMask)
  i1996.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[17], i1996.stencilOp)
  i1996.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[18], i1996.stencilOpFront)
  i1996.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[19], i1996.stencilOpBack)
  var i1999 = i1997[20]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1999[i + 0]) );
  }
  i1996.tags = i1998
  var i2001 = i1997[21]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( i2001[i + 0] );
  }
  i1996.passDefinedKeywords = i2000
  var i2003 = i1997[22]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2003[i + 0]) );
  }
  i1996.passDefinedKeywordGroups = i2002
  var i2005 = i1997[23]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2005[i + 0]) );
  }
  i1996.variants = i2004
  var i2007 = i1997[24]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2007[i + 0]) );
  }
  i1996.excludedVariants = i2006
  i1996.hasDepthReader = !!i1997[25]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2009 = data
  i2008.val = i2009[0]
  i2008.name = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2011 = data
  i2010.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[0], i2010.src)
  i2010.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[1], i2010.dst)
  i2010.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[2], i2010.op)
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2013 = data
  i2012.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[0], i2012.pass)
  i2012.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[1], i2012.fail)
  i2012.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[2], i2012.zFail)
  i2012.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[3], i2012.comp)
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.value = i2017[1]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( i2023[i + 0] );
  }
  i2020.keywords = i2022
  i2020.hasDiscard = !!i2021[1]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2027 = data
  i2026.passId = i2027[0]
  i2026.subShaderIndex = i2027[1]
  var i2029 = i2027[2]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( i2029[i + 0] );
  }
  i2026.keywords = i2028
  i2026.vertexProgram = i2027[3]
  i2026.fragmentProgram = i2027[4]
  i2026.exportedForWebGl2 = !!i2027[5]
  i2026.readDepth = !!i2027[6]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'shader')
  i2032.pass = i2033[2]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2037 = data
  i2036.name = i2037[0]
  i2036.type = i2037[1]
  i2036.value = new pc.Vec4( i2037[2], i2037[3], i2037[4], i2037[5] )
  i2036.textureValue = i2037[6]
  i2036.shaderPropertyFlag = i2037[7]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2039 = data
  i2038.name = i2039[0]
  request.r(i2039[1], i2039[2], 0, i2038, 'texture')
  i2038.aabb = i2039[3]
  i2038.vertices = i2039[4]
  i2038.triangles = i2039[5]
  i2038.textureRect = UnityEngine.Rect.MinMaxRect(i2039[6], i2039[7], i2039[8], i2039[9])
  i2038.packedRect = UnityEngine.Rect.MinMaxRect(i2039[10], i2039[11], i2039[12], i2039[13])
  i2038.border = new pc.Vec4( i2039[14], i2039[15], i2039[16], i2039[17] )
  i2038.transparency = i2039[18]
  i2038.bounds = i2039[19]
  i2038.pixelsPerUnit = i2039[20]
  i2038.textureWidth = i2039[21]
  i2038.textureHeight = i2039[22]
  i2038.nativeSize = new pc.Vec2( i2039[23], i2039[24] )
  i2038.pivot = new pc.Vec2( i2039[25], i2039[26] )
  i2038.textureRectOffset = new pc.Vec2( i2039[27], i2039[28] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2041 = data
  i2040.name = i2041[0]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.wrapMode = i2043[1]
  i2042.isLooping = !!i2043[2]
  i2042.length = i2043[3]
  var i2045 = i2043[4]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2045[i + 0]) );
  }
  i2042.curves = i2044
  var i2047 = i2043[5]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2047[i + 0]) );
  }
  i2042.events = i2046
  i2042.halfPrecision = !!i2043[6]
  i2042._frameRate = i2043[7]
  i2042.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2043[8], i2042.localBounds)
  i2042.hasMuscleCurves = !!i2043[9]
  var i2049 = i2043[10]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( i2049[i + 0] );
  }
  i2042.clipMuscleConstant = i2048
  i2042.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2043[11], i2042.clipBindingConstant)
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2053 = data
  i2052.path = i2053[0]
  i2052.hash = i2053[1]
  i2052.componentType = i2053[2]
  i2052.property = i2053[3]
  i2052.keys = i2053[4]
  var i2055 = i2053[5]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2055[i + 0]) );
  }
  i2052.objectReferenceKeys = i2054
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2059 = data
  i2058.time = i2059[0]
  request.r(i2059[1], i2059[2], 0, i2058, 'value')
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2063 = data
  i2062.functionName = i2063[0]
  i2062.floatParameter = i2063[1]
  i2062.intParameter = i2063[2]
  i2062.stringParameter = i2063[3]
  request.r(i2063[4], i2063[5], 0, i2062, 'objectReferenceParameter')
  i2062.time = i2063[6]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2065 = data
  i2064.center = new pc.Vec3( i2065[0], i2065[1], i2065[2] )
  i2064.extends = new pc.Vec3( i2065[3], i2065[4], i2065[5] )
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2069 = data
  var i2071 = i2069[0]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( i2071[i + 0] );
  }
  i2068.genericBindings = i2070
  var i2073 = i2069[1]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( i2073[i + 0] );
  }
  i2068.pptrCurveMapping = i2072
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2075 = data
  i2074.name = i2075[0]
  var i2077 = i2075[1]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2077[i + 0]) );
  }
  i2074.layers = i2076
  var i2079 = i2075[2]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2079[i + 0]) );
  }
  i2074.parameters = i2078
  i2074.animationClips = i2075[3]
  i2074.avatarUnsupported = i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.defaultWeight = i2083[1]
  i2082.blendingMode = i2083[2]
  i2082.avatarMask = i2083[3]
  i2082.syncedLayerIndex = i2083[4]
  i2082.syncedLayerAffectsTiming = !!i2083[5]
  i2082.syncedLayers = i2083[6]
  i2082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2083[7], i2082.stateMachine)
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2085 = data
  i2084.id = i2085[0]
  i2084.name = i2085[1]
  i2084.path = i2085[2]
  var i2087 = i2085[3]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2087[i + 0]) );
  }
  i2084.states = i2086
  var i2089 = i2085[4]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2089[i + 0]) );
  }
  i2084.machines = i2088
  var i2091 = i2085[5]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2091[i + 0]) );
  }
  i2084.entryStateTransitions = i2090
  var i2093 = i2085[6]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2093[i + 0]) );
  }
  i2084.exitStateTransitions = i2092
  var i2095 = i2085[7]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2095[i + 0]) );
  }
  i2084.anyStateTransitions = i2094
  i2084.defaultStateId = i2085[8]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2099 = data
  i2098.id = i2099[0]
  i2098.name = i2099[1]
  i2098.cycleOffset = i2099[2]
  i2098.cycleOffsetParameter = i2099[3]
  i2098.cycleOffsetParameterActive = !!i2099[4]
  i2098.mirror = !!i2099[5]
  i2098.mirrorParameter = i2099[6]
  i2098.mirrorParameterActive = !!i2099[7]
  i2098.motionId = i2099[8]
  i2098.nameHash = i2099[9]
  i2098.fullPathHash = i2099[10]
  i2098.speed = i2099[11]
  i2098.speedParameter = i2099[12]
  i2098.speedParameterActive = !!i2099[13]
  i2098.tag = i2099[14]
  i2098.tagHash = i2099[15]
  i2098.writeDefaultValues = !!i2099[16]
  var i2101 = i2099[17]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.behaviours = i2100
  var i2103 = i2099[18]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2103[i + 0]) );
  }
  i2098.transitions = i2102
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2109 = data
  i2108.fullPath = i2109[0]
  i2108.canTransitionToSelf = !!i2109[1]
  i2108.duration = i2109[2]
  i2108.exitTime = i2109[3]
  i2108.hasExitTime = !!i2109[4]
  i2108.hasFixedDuration = !!i2109[5]
  i2108.interruptionSource = i2109[6]
  i2108.offset = i2109[7]
  i2108.orderedInterruption = !!i2109[8]
  i2108.destinationStateId = i2109[9]
  i2108.isExit = !!i2109[10]
  i2108.mute = !!i2109[11]
  i2108.solo = !!i2109[12]
  var i2111 = i2109[13]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2111[i + 0]) );
  }
  i2108.conditions = i2110
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2117 = data
  i2116.destinationStateId = i2117[0]
  i2116.isExit = !!i2117[1]
  i2116.mute = !!i2117[2]
  i2116.solo = !!i2117[3]
  var i2119 = i2117[4]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2119[i + 0]) );
  }
  i2116.conditions = i2118
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2123 = data
  i2122.defaultBool = !!i2123[0]
  i2122.defaultFloat = i2123[1]
  i2122.defaultInt = i2123[2]
  i2122.name = i2123[3]
  i2122.nameHash = i2123[4]
  i2122.type = i2123[5]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2127 = data
  i2126.mode = i2127[0]
  i2126.parameter = i2127[1]
  i2126.threshold = i2127[2]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.bytes64 = i2129[1]
  i2128.data = i2129[2]
  return i2128
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2131 = data
  i2130.useSafeMode = !!i2131[0]
  i2130.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2131[1], i2130.safeModeOptions)
  i2130.timeScale = i2131[2]
  i2130.unscaledTimeScale = i2131[3]
  i2130.useSmoothDeltaTime = !!i2131[4]
  i2130.maxSmoothUnscaledTime = i2131[5]
  i2130.rewindCallbackMode = i2131[6]
  i2130.showUnityEditorReport = !!i2131[7]
  i2130.logBehaviour = i2131[8]
  i2130.drawGizmos = !!i2131[9]
  i2130.defaultRecyclable = !!i2131[10]
  i2130.defaultAutoPlay = i2131[11]
  i2130.defaultUpdateType = i2131[12]
  i2130.defaultTimeScaleIndependent = !!i2131[13]
  i2130.defaultEaseType = i2131[14]
  i2130.defaultEaseOvershootOrAmplitude = i2131[15]
  i2130.defaultEasePeriod = i2131[16]
  i2130.defaultAutoKill = !!i2131[17]
  i2130.defaultLoopType = i2131[18]
  i2130.debugMode = !!i2131[19]
  i2130.debugStoreTargetId = !!i2131[20]
  i2130.showPreviewPanel = !!i2131[21]
  i2130.storeSettingsLocation = i2131[22]
  i2130.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2131[23], i2130.modules)
  i2130.createASMDEF = !!i2131[24]
  i2130.showPlayingTweens = !!i2131[25]
  i2130.showPausedTweens = !!i2131[26]
  return i2130
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2132 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2133 = data
  i2132.logBehaviour = i2133[0]
  i2132.nestedTweenFailureBehaviour = i2133[1]
  return i2132
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2135 = data
  i2134.showPanel = !!i2135[0]
  i2134.audioEnabled = !!i2135[1]
  i2134.physicsEnabled = !!i2135[2]
  i2134.physics2DEnabled = !!i2135[3]
  i2134.spriteEnabled = !!i2135[4]
  i2134.uiEnabled = !!i2135[5]
  i2134.uiToolkitEnabled = !!i2135[6]
  i2134.textMeshProEnabled = !!i2135[7]
  i2134.tk2DEnabled = !!i2135[8]
  i2134.deAudioEnabled = !!i2135[9]
  i2134.deUnityExtendedEnabled = !!i2135[10]
  i2134.epoOutlineEnabled = !!i2135[11]
  return i2134
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2136 = root || request.c( 'TMPro.TMP_Settings' )
  var i2137 = data
  i2136.assetVersion = i2137[0]
  i2136.m_TextWrappingMode = i2137[1]
  i2136.m_enableKerning = !!i2137[2]
  var i2139 = i2137[3]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(i2139[i + 0]);
  }
  i2136.m_ActiveFontFeatures = i2138
  i2136.m_enableExtraPadding = !!i2137[4]
  i2136.m_enableTintAllSprites = !!i2137[5]
  i2136.m_enableParseEscapeCharacters = !!i2137[6]
  i2136.m_EnableRaycastTarget = !!i2137[7]
  i2136.m_GetFontFeaturesAtRuntime = !!i2137[8]
  i2136.m_missingGlyphCharacter = i2137[9]
  i2136.m_ClearDynamicDataOnBuild = !!i2137[10]
  i2136.m_warningsDisabled = !!i2137[11]
  request.r(i2137[12], i2137[13], 0, i2136, 'm_defaultFontAsset')
  i2136.m_defaultFontAssetPath = i2137[14]
  i2136.m_defaultFontSize = i2137[15]
  i2136.m_defaultAutoSizeMinRatio = i2137[16]
  i2136.m_defaultAutoSizeMaxRatio = i2137[17]
  i2136.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2137[18], i2137[19] )
  i2136.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2137[20], i2137[21] )
  i2136.m_autoSizeTextContainer = !!i2137[22]
  i2136.m_IsTextObjectScaleStatic = !!i2137[23]
  var i2141 = i2137[24]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 1, i2140, '')
  }
  i2136.m_fallbackFontAssets = i2140
  i2136.m_matchMaterialPreset = !!i2137[25]
  i2136.m_HideSubTextObjects = !!i2137[26]
  request.r(i2137[27], i2137[28], 0, i2136, 'm_defaultSpriteAsset')
  i2136.m_defaultSpriteAssetPath = i2137[29]
  i2136.m_enableEmojiSupport = !!i2137[30]
  i2136.m_MissingCharacterSpriteUnicode = i2137[31]
  var i2143 = i2137[32]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 1, i2142, '')
  }
  i2136.m_EmojiFallbackTextAssets = i2142
  i2136.m_defaultColorGradientPresetsPath = i2137[33]
  request.r(i2137[34], i2137[35], 0, i2136, 'm_defaultStyleSheet')
  i2136.m_StyleSheetsResourcePath = i2137[36]
  request.r(i2137[37], i2137[38], 0, i2136, 'm_leadingCharacters')
  request.r(i2137[39], i2137[40], 0, i2136, 'm_followingCharacters')
  i2136.m_UseModernHangulLineBreakingRules = !!i2137[41]
  return i2136
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2150 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'spriteSheet')
  var i2153 = i2151[2]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.add(request.d('TMPro.TMP_Sprite', i2153[i + 0]));
  }
  i2150.spriteInfoList = i2152
  var i2155 = i2151[3]
  var i2154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2155.length; i += 2) {
  request.r(i2155[i + 0], i2155[i + 1], 1, i2154, '')
  }
  i2150.fallbackSpriteAssets = i2154
  var i2157 = i2151[4]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('TMPro.TMP_SpriteCharacter', i2157[i + 0]));
  }
  i2150.m_SpriteCharacterTable = i2156
  var i2159 = i2151[5]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.add(request.d('TMPro.TMP_SpriteGlyph', i2159[i + 0]));
  }
  i2150.m_GlyphTable = i2158
  i2150.m_Version = i2151[6]
  i2150.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2151[7], i2150.m_FaceInfo)
  request.r(i2151[8], i2151[9], 0, i2150, 'm_Material')
  return i2150
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2162 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.hashCode = i2163[1]
  i2162.unicode = i2163[2]
  i2162.pivot = new pc.Vec2( i2163[3], i2163[4] )
  request.r(i2163[5], i2163[6], 0, i2162, 'sprite')
  i2162.id = i2163[7]
  i2162.x = i2163[8]
  i2162.y = i2163[9]
  i2162.width = i2163[10]
  i2162.height = i2163[11]
  i2162.xOffset = i2163[12]
  i2162.yOffset = i2163[13]
  i2162.xAdvance = i2163[14]
  i2162.scale = i2163[15]
  return i2162
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2169 = data
  i2168.m_Name = i2169[0]
  i2168.m_ElementType = i2169[1]
  i2168.m_Unicode = i2169[2]
  i2168.m_GlyphIndex = i2169[3]
  i2168.m_Scale = i2169[4]
  return i2168
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2172 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'sprite')
  i2172.m_Index = i2173[2]
  i2172.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2173[3], i2172.m_Metrics)
  i2172.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2173[4], i2172.m_GlyphRect)
  i2172.m_Scale = i2173[5]
  i2172.m_AtlasIndex = i2173[6]
  i2172.m_ClassDefinitionType = i2173[7]
  return i2172
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2175 = data
  i2174.m_Width = i2175[0]
  i2174.m_Height = i2175[1]
  i2174.m_HorizontalBearingX = i2175[2]
  i2174.m_HorizontalBearingY = i2175[3]
  i2174.m_HorizontalAdvance = i2175[4]
  return i2174
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2177 = data
  i2176.m_X = i2177[0]
  i2176.m_Y = i2177[1]
  i2176.m_Width = i2177[2]
  i2176.m_Height = i2177[3]
  return i2176
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2179 = data
  i2178.m_FaceIndex = i2179[0]
  i2178.m_FamilyName = i2179[1]
  i2178.m_StyleName = i2179[2]
  i2178.m_PointSize = i2179[3]
  i2178.m_Scale = i2179[4]
  i2178.m_UnitsPerEM = i2179[5]
  i2178.m_LineHeight = i2179[6]
  i2178.m_AscentLine = i2179[7]
  i2178.m_CapLine = i2179[8]
  i2178.m_MeanLine = i2179[9]
  i2178.m_Baseline = i2179[10]
  i2178.m_DescentLine = i2179[11]
  i2178.m_SuperscriptOffset = i2179[12]
  i2178.m_SuperscriptSize = i2179[13]
  i2178.m_SubscriptOffset = i2179[14]
  i2178.m_SubscriptSize = i2179[15]
  i2178.m_UnderlineOffset = i2179[16]
  i2178.m_UnderlineThickness = i2179[17]
  i2178.m_StrikethroughOffset = i2179[18]
  i2178.m_StrikethroughThickness = i2179[19]
  i2178.m_TabWidth = i2179[20]
  return i2178
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2180 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('TMPro.TMP_Style', i2183[i + 0]));
  }
  i2180.m_StyleList = i2182
  return i2180
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2186 = root || request.c( 'TMPro.TMP_Style' )
  var i2187 = data
  i2186.m_Name = i2187[0]
  i2186.m_HashCode = i2187[1]
  i2186.m_OpeningDefinition = i2187[2]
  i2186.m_ClosingDefinition = i2187[3]
  i2186.m_OpeningTagArray = i2187[4]
  i2186.m_ClosingTagArray = i2187[5]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2191[i + 0]) );
  }
  i2188.files = i2190
  i2188.componentToPrefabIds = i2189[1]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2195 = data
  i2194.path = i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'unityObject')
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2197 = data
  var i2199 = i2197[0]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2199[i + 0]) );
  }
  i2196.scriptsExecutionOrder = i2198
  var i2201 = i2197[1]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2201[i + 0]) );
  }
  i2196.sortingLayers = i2200
  var i2203 = i2197[2]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2203[i + 0]) );
  }
  i2196.cullingLayers = i2202
  i2196.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2197[3], i2196.timeSettings)
  i2196.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2197[4], i2196.physicsSettings)
  i2196.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2197[5], i2196.physics2DSettings)
  i2196.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2197[6], i2196.qualitySettings)
  i2196.enableRealtimeShadows = !!i2197[7]
  i2196.enableAutoInstancing = !!i2197[8]
  i2196.enableStaticBatching = !!i2197[9]
  i2196.enableDynamicBatching = !!i2197[10]
  i2196.lightmapEncodingQuality = i2197[11]
  i2196.desiredColorSpace = i2197[12]
  var i2205 = i2197[13]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( i2205[i + 0] );
  }
  i2196.allTags = i2204
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.value = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2213 = data
  i2212.id = i2213[0]
  i2212.name = i2213[1]
  i2212.value = i2213[2]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2217 = data
  i2216.id = i2217[0]
  i2216.name = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2219 = data
  i2218.fixedDeltaTime = i2219[0]
  i2218.maximumDeltaTime = i2219[1]
  i2218.timeScale = i2219[2]
  i2218.maximumParticleTimestep = i2219[3]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2221 = data
  i2220.gravity = new pc.Vec3( i2221[0], i2221[1], i2221[2] )
  i2220.defaultSolverIterations = i2221[3]
  i2220.bounceThreshold = i2221[4]
  i2220.autoSyncTransforms = !!i2221[5]
  i2220.autoSimulation = !!i2221[6]
  var i2223 = i2221[7]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2223[i + 0]) );
  }
  i2220.collisionMatrix = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.layerId = i2227[1]
  i2226.otherLayerId = i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'material')
  i2228.gravity = new pc.Vec2( i2229[2], i2229[3] )
  i2228.positionIterations = i2229[4]
  i2228.velocityIterations = i2229[5]
  i2228.velocityThreshold = i2229[6]
  i2228.maxLinearCorrection = i2229[7]
  i2228.maxAngularCorrection = i2229[8]
  i2228.maxTranslationSpeed = i2229[9]
  i2228.maxRotationSpeed = i2229[10]
  i2228.baumgarteScale = i2229[11]
  i2228.baumgarteTOIScale = i2229[12]
  i2228.timeToSleep = i2229[13]
  i2228.linearSleepTolerance = i2229[14]
  i2228.angularSleepTolerance = i2229[15]
  i2228.defaultContactOffset = i2229[16]
  i2228.autoSimulation = !!i2229[17]
  i2228.queriesHitTriggers = !!i2229[18]
  i2228.queriesStartInColliders = !!i2229[19]
  i2228.callbacksOnDisable = !!i2229[20]
  i2228.reuseCollisionCallbacks = !!i2229[21]
  i2228.autoSyncTransforms = !!i2229[22]
  var i2231 = i2229[23]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2231[i + 0]) );
  }
  i2228.collisionMatrix = i2230
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.layerId = i2235[1]
  i2234.otherLayerId = i2235[2]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2237 = data
  var i2239 = i2237[0]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2239[i + 0]) );
  }
  i2236.qualityLevels = i2238
  var i2241 = i2237[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( i2241[i + 0] );
  }
  i2236.names = i2240
  i2236.shadows = i2237[2]
  i2236.anisotropicFiltering = i2237[3]
  i2236.antiAliasing = i2237[4]
  i2236.lodBias = i2237[5]
  i2236.shadowCascades = i2237[6]
  i2236.shadowDistance = i2237[7]
  i2236.shadowmaskMode = i2237[8]
  i2236.shadowProjection = i2237[9]
  i2236.shadowResolution = i2237[10]
  i2236.softParticles = !!i2237[11]
  i2236.softVegetation = !!i2237[12]
  i2236.activeColorSpace = i2237[13]
  i2236.desiredColorSpace = i2237[14]
  i2236.masterTextureLimit = i2237[15]
  i2236.maxQueuedFrames = i2237[16]
  i2236.particleRaycastBudget = i2237[17]
  i2236.pixelLightCount = i2237[18]
  i2236.realtimeReflectionProbes = !!i2237[19]
  i2236.shadowCascade2Split = i2237[20]
  i2236.shadowCascade4Split = new pc.Vec3( i2237[21], i2237[22], i2237[23] )
  i2236.streamingMipmapsActive = !!i2237[24]
  i2236.vSyncCount = i2237[25]
  i2236.asyncUploadBufferSize = i2237[26]
  i2236.asyncUploadTimeSlice = i2237[27]
  i2236.billboardsFaceCameraPosition = !!i2237[28]
  i2236.shadowNearPlaneOffset = i2237[29]
  i2236.streamingMipmapsMemoryBudget = i2237[30]
  i2236.maximumLODLevel = i2237[31]
  i2236.streamingMipmapsAddAllCameras = !!i2237[32]
  i2236.streamingMipmapsMaxLevelReduction = i2237[33]
  i2236.streamingMipmapsRenderersPerFrame = i2237[34]
  i2236.resolutionScalingFixedDPIFactor = i2237[35]
  i2236.streamingMipmapsMaxFileIORequests = i2237[36]
  i2236.currentQualityLevel = i2237[37]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2247 = data
  i2246.weight = i2247[0]
  i2246.vertices = i2247[1]
  i2246.normals = i2247[2]
  i2246.tangents = i2247[3]
  return i2246
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[75],"76":[77],"78":[77],"23":[22],"6":[2],"79":[60],"80":[32],"81":[12],"82":[2],"83":[84],"85":[34],"86":[23],"87":[22],"88":[75,22],"89":[22,27],"90":[22],"91":[27,22],"92":[75],"93":[27,22],"94":[22],"95":[96],"97":[96],"98":[96],"99":[22],"100":[22],"26":[23],"28":[27,22],"101":[22],"25":[23],"102":[22],"103":[22],"104":[22],"105":[22],"106":[22],"107":[22],"108":[22],"109":[22],"110":[22],"111":[27,22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[34],"119":[34],"35":[34],"120":[34],"121":[2],"122":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow2D","AutoCameraFit","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MoveBetweenPoints","PlayerCardUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HairCutController","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","HideOnFirstClick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BatStrikeController","SlotTrigger","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer";

Deserializers.lunaInitializationTime = "07/15/2026 03:53:54";

Deserializers.lunaDaysRunning = "75.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V15";

Deserializers.lunaAppID = "33920";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4461";

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

Deserializers.buildID = "8637919d-7583-439a-83c8-db01a7471c27";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

