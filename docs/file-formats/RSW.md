---
slug: /file-formats/rsw
title: RSW
---

This document describes the RSW file format used in the Ragnarok Online client.

## Contents

RSW files contain the following information:

- References to other files required to render the map (mainly [GAT](/file-formats/gat) and [GND](/file-formats/gnd); the others are only used in [Arcturus](/arcturus))
- The configuration of scene-wide light sources, as well as decorative game objects that should be placed in the scene
- In earlier versions they also include a definition of the water plane, which is later stored in the referenced GND file instead
- A scene graph-like representation of the object hierarchy (tree of bounding boxes), used for intersection queries

RSW is essentially the "scene definition" format used by the game.

## Layout

Newer RSW files may include a third version segment, resulting in a `Major.Minor.BuildNumber` versioning scheme.

### Version 1.9

An older version that's virtually identical to 2.1, but there's no `QuadTree` and audio sources don't have a `CycleInterval`.

### Version 2.1

This is the original version used for most maps in the original RO client:

|        Field         |  Offset  |  Length  |      Type       |                           Description                            |
| :------------------: | :------: | :------: | :-------------: | :--------------------------------------------------------------: |
|     `Signature`      |    0     |    4     |    `string`     |         `"GRSW"` as an ASCII-encoded, fixed-size string          |
|    `MajorVersion`    |    4     |    1     |     `uint8`     |                      Versioning information                      |
|    `MinorVersion`    |    5     |    1     |     `uint8`     |                      Versioning information                      |
| `WaterConfiguration` |    6     |    24    |  `WaterPlane`   |    Configuration of the map's primary water plane (only one)     |
| `LightingParameters` |    30    |    36    |  `LightParams`  | Configuration of the map's global (fixed-function) light sources |
|   `MapBoundaries`    |    66    |    16    |  `BoundingBox`  |          A bounding box containing the entire scene (?)          |
| `SceneObjectsCount`  |    82    |    4     |      `int`      |   The number of `(ObjectTypeID, SceneObject)` pairs to be read   |
|    `SceneObjects`    |    86    | variable |     `array`     |        Scene objects of varying types (see tables below)         |
|      `QuadTree`      | variable |   64k    | `QuadTreeRange` |    Scene graph data structure, for culling invisible objects     |

Scene objects are effectively a `union` type structure, the contents of which depend on the object type (first `struct` member).

#### Water Plane Configuration

This structure is exactly the same as in [GND 1.8](/file-formats/gnd#water-plane-configuration). Only one water plane is supported in this version, however.

#### Lighting Parameters

These define the settings that should be applied to the global light sources, which exist in every scene:

|      Field       | Offset | Length |   Type   |                           Description                            |
| :--------------: | :----: | :----: | :------: | :--------------------------------------------------------------: |
|   `Longitude`    |   0    |   4    | `uint32` | Spherical longitude of the directional light source (in degrees) |
|    `Latitude`    |   4    |   4    | `uint32` | Spherical latitude of the directional light source (in degrees)  |
|   `DiffuseRed`   |   8    |   4    | `float`  |      Diffuse red component of the directional light source       |
|  `DiffuseGreen`  |   12   |   4    | `float`  |     Diffuse green component of the directional light source      |
|  `DiffuseBlue`   |   16   |   4    | `float`  |      Diffuse blue component of the directional light source      |
|   `AmbientRed`   |   20   |   4    | `float`  |        Diffuse red component of the ambient light source         |
|  `AmbientGreen`  |   24   |   4    | `float`  |       Diffuse green component of the ambient light source        |
|  `AmbientBlue`   |   28   |   4    | `float`  |        Diffuse blue component of the ambient light source        |
| `ShadowmapAlpha` |   32   |   4    | `float`  |   Opacity of the shadowmap (for baking GND lightmap textures)    |

#### Bounding Box

This was claimed to define the outside bounds of the visible game world, though the data doesn't really make sense:

|  Field   | Offset | Length |   Type   |                Description                |
| :------: | :----: | :----: | :------: | :---------------------------------------: |
|  `Top`   |   0    |   4    | `uint32` | Purpose unknown; appears to be unused (?) |
| `Bottom` |   4    |   4    | `uint32` | Purpose unknown; appears to be unused (?) |
|  `Left`  |   8    |   4    | `uint32` | Purpose unknown; appears to be unused (?) |
| `Right`  |   12   |   4    | `uint32` | Purpose unknown; appears to be unused (?) |

More research is needed to determine the meaning of this structure. Might be for internal tools, or used in Arcturus?

#### Scene Objects

There are multiple types of decorative scene objects, which are differentiated by a type identifier (first value):

|     Field      | Offset |  Length  |   Type   |                    Description                     |
| :------------: | :----: | :------: | :------: | :------------------------------------------------: |
| `ObjectTypeID` |   0    |    4     |  `int`   | One of the supported scene object type identifiers |
| `SceneObject`  |   4    | variable | `struct` |         Layout depends on the object type          |

The following object types may be used:

```cpp
enum {
	SCENE_OBJECT_TYPE_ANIMATED_PROP = 1,
	SCENE_OBJECT_TYPE_DYNAMIC_LIGHT_SOURCE = 2,
	SCENE_OBJECT_TYPE_SPATIAL_AUDIO_SOURCE = 3,
	SCENE_OBJECT_TYPE_PARTICLE_EFFECT_EMITTER = 4,
}
```

##### 3D Models (Animated Props)

Instances of a given [RSM](/file-formats/rsm) model can be placed in the scene and configured according to these parameters:

|       Field       | Offset | Length |   Type   |                           Description                            |
| :---------------: | :----: | :----: | :------: | :--------------------------------------------------------------: |
|      `Name`       |   0    |   40   | `string` |                   Name of this model instance                    |
| `AnimationTypeID` |   40   |   4    | `int32`  |      Defines the looping behavior of the model's animation       |
| `AnimationSpeed`  |   44   |   4    | `float`  |              Animation speed modifier (percentage)               |
| `CollisionFlags`  |   48   |   4    | `int32`  | Zero means the object is "solid" (affected by collision checks?) |
|    `ModelFile`    |   52   |   80   | `string` |               Name of the RSM file to instantiate                |
|    `NodeName`     |  132   |   80   | `string` |             Name of the RSM root node to render (?)              |
|    `PositionX`    |  212   |   4    | `float`  |   X coordinate of the instance's world position (translation)    |
|    `PositionY`    |  216   |   4    | `float`  |   Y coordinate of the instance's world position (translation)    |
|    `PositionZ`    |  220   |   4    | `float`  |   Z coordinate of the instance's world position (translation)    |
|    `RotationX`    |  224   |   4    | `float`  |             X rotation applied to the model instance             |
|    `RotationY`    |  228   |   4    | `float`  |             Y rotation applied to the model instance             |
|    `RotationZ`    |  232   |   4    | `float`  |             Z rotation applied to the model instance             |
|     `ScaleX`      |  236   |   4    | `float`  |           X scale factor applied to the model instance           |
|     `ScaleY`      |  240   |   4    | `float`  |           Y scale factor applied to the model instance           |
|     `ScaleZ`      |  244   |   4    | `float`  |           Z scale factor applied to the model instance           |

The known values for `AnimationTypeID` are:

```cpp
enum AnimationTypeID {
	ANIMATION_TYPE_NONE = 0,
	ANIMATION_TYPE_LOOPING = 2,
}
```

Only those types have been observed in the game files, though other modes might be supported.

##### Dynamic Light Sources

Dynamic lights aren't actually rendered by the client, as their output is baked into the [lightmaps](/file-formats/gnd##lightmap-slices) stored in the map's GND file:

|     Field      | Offset | Length |   Type   |                      Description                      |
| :------------: | :----: | :----: | :------: | :---------------------------------------------------: |
|     `Name`     |   0    |   80   | `string` |  Null-terminated (discard garbage bytes at the end)   |
|  `PositionX`   |   80   |   4    | `float`  |      X coordinate of the light's world position       |
|  `PositionY`   |   84   |   4    | `float`  |      Y coordinate of the light's world position       |
|  `PositionZ`   |   88   |   4    | `float`  |      Z coordinate of the light's world position       |
|  `DiffuseRed`  |   92   |   4    | `float`  |      Red component of the light's diffuse color       |
| `DiffuseGreen` |   96   |   4    | `float`  |     Green component of the light's diffuse color      |
| `DiffuseBlue`  |  100   |   4    | `float`  |      Blue component of the light's diffuse color      |
|    `Range`     |  104   |   4    | `float`  | Light intensity (falloff range), given in world units |

##### Spatialized 3D Audio Sources

Ambient sound effects (like frogs or flowing water) are emitted by these invisible game objects:

|      Field      | Offset | Length |   Type   |                              Description                               |
| :-------------: | :----: | :----: | :------: | :--------------------------------------------------------------------: |
|     `Name`      |   0    |   80   | `string` |           Null-terminated (discard garbage bytes at the end)           |
|   `SoundFile`   |   80   |   80   | `string` |           Null-terminated (discard garbage bytes at the end)           |
|   `PositionX`   |  160   |   4    | `float`  |              X coordinate of the emitter's world position              |
|   `PositionY`   |  164   |   4    | `float`  |              Y coordinate of the emitter's world position              |
|   `PositionZ`   |  168   |   4    | `float`  |              Z coordinate of the emitter's world position              |
|  `VolumeGain`   |  172   |   4    | `float`  |     Playback volume, given as a percentage in the range of 0 to 1      |
|     `Width`     |  176   |   4    |  `uint`  |     The width of the area that emits sound (used for attenuation?)     |
|    `Height`     |  180   |   4    |  `uint`  |    The height of the area that emits sound (used for attenuation?)     |
|     `Range`     |  184   |   4    | `float`  |     Attenuation range (how far sound can be heard), in world units     |
| `CycleInterval` |  188   |   4    | `float`  | Duration of the individual (looping) playback cycles, given in seconds |

When `CycleInterval` is not present (i.e., in older RSW versions), it defaults to a duration of 4 seconds.

##### Particle Effect Emitters

Particle effects such as bats, smoke, or clouds, can be configured from a number of preset effects:

|       Field        | Offset | Length |   Type   |                                                                  Description                                                                  |
| :----------------: | :----: | :----: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|       `Name`       |   0    |   80   | `string` |                                              Null-terminated (discard garbage bytes at the end)                                               |
|    `PositionX`     |   80   |   4    | `float`  |                                                 X coordinate of the emitter's world position                                                  |
|    `PositionY`     |   84   |   4    | `float`  |                                                 Y coordinate of the emitter's world position                                                  |
|    `PositionZ`     |   88   |   4    | `float`  |                                                 Z coordinate of the emitter's world position                                                  |
|  `PresetEffectID`  |   92   |   4    |  `uint`  | Determines which preconfigured effect should be used (see [this list](https://github.com/HerculesWS/Hercules/blob/stable/doc/effect_list.md)) |
|  `EmissionDelay`   |   96   |   4    | `float`  |                                        How fast new particles may spawn (in frames; 60 means 1 second)                                        |
| `LaunchParameterA` |  100   |   4    | `float`  |                                      Configures the preset effect (meaning depends on `PresetEffectID`)                                       |
| `LaunchParameterB` |  104   |   4    | `float`  |                                      Configures the preset effect (meaning depends on `PresetEffectID`)                                       |
| `LaunchParameterC` |  108   |   4    | `float`  |                                      Configures the preset effect (meaning depends on `PresetEffectID`)                                       |
| `LaunchParameterD` |  112   |   4    | `float`  |                                      Configures the preset effect (meaning depends on `PresetEffectID`)                                       |

How launch parameters are used needs to be determined on a per-effect basis. Each emitter will process them differently.

#### Quad Tree

The layout for this data structure corresponds to a fixed-size quad tree with 5 levels, each consisting of four sub-ranges:

|         Field         | Offset | Length |      Type       |                          Description                          |
| :-------------------: | :----: | :----: | :-------------: | :-----------------------------------------------------------: |
| `BottomLeftQuadrant`  |   0    |   48   | `QuadTreeRange` | Volume for the area south-west of the previous level's center |
| `BottomRightQuadrant` |   48   |   48   | `QuadTreeRange` | Volume for the area south-east of the previous level's center |
|   `TopLeftQuadrant`   |   96   |   48   | `QuadTreeRange` | Volume for the area north-west of the previous level's center |
|  `TopRightQuadrant`   |  144   |   48   | `QuadTreeRange` | Volume for the area north-east of the previous level's center |

Quadrants always exist for each of the upper levels of the hiararchy, but are `NULL` if it's a leaf node (sub-tree at level 5).

##### Quad Tree Range

Each range defines an axis-aligned bounding box that can be used to store all visible elements in this part of the scene:

|    Field    | Offset | Length |  Type   |                        Description                        |
| :---------: | :----: | :----: | :-----: | :-------------------------------------------------------: |
|  `BottomX`  |   0    |   4    | `float` |     X coordinate of the corner at the lowest altitude     |
|  `BottomY`  |   4    |   4    | `float` |     Y coordinate of the corner at the lowest altitude     |
|  `BottomZ`  |   8    |   4    | `float` |     Z coordinate of the corner at the lowest altitude     |
|   `TopX`    |   12   |   4    | `float` |    X coordinate of the corner at the highest altitude     |
|   `TopY`    |   16   |   4    | `float` |    Y coordinate of the corner at the highest altitude     |
|   `TopZ`    |   20   |   4    | `float` |    Z coordinate of the corner at the highest altitude     |
| `DiameterX` |   24   |   4    | `float` | Width of the bounding box (when interpreted as a cuboid)  |
| `DiameterY` |   28   |   4    | `float` | Height of the bounding box (when interpreted as a cuboid) |
| `DiameterZ` |   32   |   4    | `float` | Depth of the bounding box (when interpreted as a cuboid)  |
|  `CenterX`  |   36   |   4    | `float` | X coordinate of the point in the exact center of the box  |
|  `CenterY`  |   40   |   4    | `float` | Y coordinate of the point in the exact center of the box  |
|  `CenterZ`  |   44   |   4    | `float` | Z coordinate of the point in the exact center of the box  |

### Version 2.2

Changes the file header slightly, adding a `BuildNumber` (in this version, a `uint8` value) after `MinorVersion`.

### Version 2.3

No superficial changes to the layout have been observed. More research is needed.

### Version 2.4

No superficial changes to the layout have been observed. More research is needed.

### Version 2.5

The `BuildNumber` is now a `uint32` value. An additional `uint8`, tentatively called `UnknownRenderFlag`, appears immediately afterward.

### Version 2.6

The water plan setup was moved to the GND file. While the `BuildNumber` is 161 or lower, no other changes have been observed.

### Version 2.6.162

In files using a `BuildNumber` of 162 or higher, the layout for animated props (RSM models) changes slightly:

An unknown byte (seemingly a `uint8` value, possibly a boolean flag) has been added after the `CollisionFlags` field.
