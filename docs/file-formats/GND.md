---
slug: /file-formats/gnd
title: GND Format Specification
---

This document describes the GND file format used in the Ragnarok Online client.

## Contents

GND files contain the following information:

- The entirety of a map's surface geometry (i.e., the ground/static terrain)
- A list of diffuse textures and texture coordinates for mapping them to the terrain
- Vertex colors and precomputed lightmap textures to add lights and shadows
- In later versions they can also include the configuration of the water surfaces, which were previously stored in RSW files

The file contents effectively represent the basic terrain for a given map, without 3D models, sprites, or other decoration.

## Layout

### Arcturus & iRO Alpha

Unversioned GND files were already used in [Arcturus](/arcturus). They also appear in the iRO alpha client, alongside more recent versions.

|       Field       |  Offset  | Length |  Type   |                           Description                           |
| :---------------: | :------: | :----: | :-----: | :-------------------------------------------------------------: |
|  `TextureCount`   |    0     |   4    |  `int`  |                 Number of diffuse texture paths                 |
|      `Width`      |    4     |   4    |  `int`  |                     Width of the cube grid                      |
|     `Height`      |    8     |   4    |  `int`  |                     Height of the cube grid                     |
|  `TexturePaths`   |    12    |   80   | `array` | `TextureCount` entries; all paths are null-terminated C strings |
| `GroundMeshCubes` | variable |   28   | `array` |                   `Width` \* `Height` entries                   |

#### Cube Grid

Compared to later versions of the format, the indirection from cubes to textured surfaces doesn't yet exist:

|         Field          | Offset | Length |  Type   |                          Description                          |
| :--------------------: | :----: | :----: | :-----: | :-----------------------------------------------------------: |
| `UpwardsFacingTexture` |   0    |   4    |  `int`  |       Texture ID of the upwards-facing `GROUND` surface       |
| `NorthernWallTexture`  |   4    |   4    |  `int`  |      Texture ID of the northwards-facing `WALL` surface       |
|  `EasternWallTexture`  |   8    |   4    |  `int`  |       Texture ID of the eastwards-facing `WALL` surface       |
|   `BottomLeftHeight`   |   12   |   4    | `float` |      Altitude of the bottom left corner (in world units)      |
|  `BottomRightHeight`   |   16   |   4    | `float` |     Altitude of the bottom right corner (in world units)      |
|    `TopLeftHeight`     |   20   |   4    | `float` |       Altitude of the top left corner (in world units)        |
|    `TopRightHeight`    |   24   |   4    | `float` |       Altitude of the top right corner (in world units)       |
|     `VertexColor`      |   28   |   4    |  `int`  | ARGB vertex color (stored as BGRA) for the bottom left vertex |
|          TBD           |   32   |   4    |  `int`  |   Purpose unknown, but its value seems to always be `1` (?)   |
|  `TextureCoordinates`  |   36   |   32   | `float` | Diffuse texture UVs (uses the same format as later versions)  |

The format used to store texture coordinates seems to be identical to [the one used in GND 1.7 and later](#texture-coordinates).

### Version 1.5

Certain maps in the iRO alpha client use GND 1.5. These are much closer to the version used in the modern RO client.

The format is identical to GND 1.7, except that the lightmap format is stored globally instead of on a per-slice basis:

- `PixelFormat`, `Width`, and `Height` appear directly after the `LightmapSliceCount` fields in the main structure
- Each individual `LightmapSlices` entry only carries the pixel data (as defined by the above format)
- For more details, see [https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt](https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt)

### Version 1.6

[Some unverified information is available for this version](https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt), but there aren't any known files that actually use it.

### Version 1.7

This is the original version used for most maps in the modern RO client:

|        Field         |  Offset  | Length |   Type   |                         Description                          |
| :------------------: | :------: | :----: | :------: | :----------------------------------------------------------: |
|       `Header`       |    0     |   4    | `string` |       `"GRGN"` as an ASCII-encoded, fixed-size string        |
|    `MajorVersion`    |    4     |   1    |  `byte`  |                    Versioning information                    |
|    `MinorVersion`    |    5     |   1    |  `byte`  |                    Versioning information                    |
|       `Width`        |    6     |   4    |  `int`   |                    Width of the cube grid                    |
|       `Height`       |    10    |   4    |  `int`   |                   Height of the cube grid                    |
|       `Scale`        |    14    |   4    | `float`  |             Geometry scale factor (always `10`)              |
|    `TextureCount`    |    16    |   4    |  `int`   |               Number of diffuse texture paths                |
| `TexturePathLength`  |    20    |   4    |  `int`   |  Length of each texture path string, in bytes (always `80`)  |
|    `TexturePaths`    |   24+    |   80   | `string` |      Null-terminated (discard garbage bytes at the end)      |
| `LightmapSliceCount` | variable |   4    |  `int`   |  Number of lightmap (and ambient occlusion) texture slices   |
|   `LightmapSlices`   | variable |  268   | `struct` | Ambient occlusion and lightmap texture bitmaps (alternating) |
|    `SurfaceCount`    | variable |   4    |  `int`   |            Number of textured surface blueprints             |
| `SurfaceDefinitions` | variable |   56   | `array`  |   Shared texturing information (copy to each cube vertex)    |
|  `GroundMeshCubes`   | variable |   28   | `array`  |                 `Width` \* `Height` entries                  |

#### Lightmap Slices

The lightmap and ambient occlusion textures are split into small bitmaps:

|       Field       | Offset | Length |  Type   |                          Description and notes                          |
| :---------------: | :----: | :----: | :-----: | :---------------------------------------------------------------------: |
|   `PixelFormat`   |   4    |   4    |  `int`  | Encoding of the lightmap and ambient occlusion pixels (usually `1`[^1]) |
|      `Width`      |   8    |   4    |  `int`  |                Width of each texture bitmap (always `8`)                |
|     `Height`      |   12   |   4    |  `int`  |               Height of teach texture bitmap (always `8`)               |
| `ShadowmapPixels` |   16   |   64   | `array` |  `Width * Height` ambient occlusion texture pixels (intensity values)   |
| `LightmapPixels`  |   16   |  192   | `array` |      `Width * Height` lightmap texture pixels (specularity values)      |

[^1] _This value appears to be ignored; the actual pixel format should always be 8-bit RGBA (stored as ARGB)._

#### Textured Surfaces

These can be used to construct the terrain geometry (vertex data):

|        Field         | Offset | Length |   Type   |                          Description and notes                           |
| :------------------: | :----: | :----: | :------: | :----------------------------------------------------------------------: |
| `TextureCoordinates` |   0    |   32   | `array`  |         Diffuse texture UVs (array of `float` values, see below)         |
|      `Texture`       |   32   |   2    | `short`  |  ID of the diffuse texture to apply to this surface (`-1` means "none")  |
|   `LightmapSlice`    |   36   |   2    | `ushort` | ID of the lightmap (and ambient occlusion) slice to apply to the surface |
|    `VertexColor`     |   40   |   16   | `array`  |  BGRA-ordered color (`byte` values) of the surface's bottom left vertex  |

#### Texture Coordinates

Texture coordinates are stored in the following order:

1. `bottomLeftU`
2. `bottomRightU`
3. `topLeftU`
4. `topRightU`
5. `bottomLeftV`
6. `bottomRightV`
7. `topLeftV`
8. `topRightV`

The direction is always relative to the cube that the surface belongs to, i.e., `bottomLeft` is south-west and `topRight` is north-east.

#### Cube Grid

|         Field          | Offset | Length |  Type   |                     Description                      |
| :--------------------: | :----: | :----: | :-----: | :--------------------------------------------------: |
|   `BottomLeftHeight`   |   0    |   4    | `float` | Altitude of the bottom left corner (in world units)  |
|  `BottomRightHeight`   |   4    |   4    | `float` | Altitude of the bottom right corner (in world units) |
|    `TopLeftHeight`     |   8    |   4    | `float` |   Altitude of the top left corner (in world units)   |
|    `TopRightHeight`    |   12   |   4    | `float` |  Altitude of the top right corner (in world units)   |
| `UpwardsFacingSurface` |   16   |   4    |  `int`  |              Upwards-facing surface ID               |
| `NorthernWallSurface`  |   20   |   4    |  `int`  |       Surface ID of the northwards-facing wall       |
|  `EasternWallSurface`  |   24   |   4    |  `int`  |       Surface ID of the eastwards-facing wall        |

### Version 1.8

The water plane configuration that was previously part of the [RSW](/file-formats/rsw) file has been moved to the GND file instead.

All the information stored in version 1.7 is still present (and unchanged), plus the water plane configuration (appended).

#### Water Plane Configuration

In theory, this GND version supports multiple water planes. But in practice, all maps that use it only feature a single one.

|          Field           | Offset | Length |  Type   |                           Description                           |
| :----------------------: | :----: | :----: | :-----: | :-------------------------------------------------------------: |
|       `WaterLevel`       |   0    |   4    | `float` | Height of the default water plane (there's always at least one) |
|       `WaterType`        |   4    |   4    |  `int`  |      Texture ID that's applied to the water plane (tiled)       |
|       `WaveHeight`       |   8    |   4    | `float` |         Amplitude of the water plane's animation curve          |
|       `WaveSpeed`        |   12   |   4    | `float` |           Phase of the water plane's animation curve            |
|       `WavePitch`        |   16   |   4    | `float` |       Surface curvature in degrees (origin of the curve)        |
| `TextureCyclingInterval` |   20   |   4    |  `int`  |   After how many frames the next texture should be swapped in   |

This is the basic water configuration, as present in both RSW (pre-2.6) and the next GND version.

The configuration for the other planes follows after the above, and is (in this version) always of the following form:

1. `NumWaterPlanesU` (`int` value): How many water planes there are in the horizontal dimension (always `1`)
2. `NumWaterPlanesV` (`int` value): How many water planes there are in the vertical dimension (always `1`)
3. A `float` defining the `WaterLevel` (altitude) of this plane. It's always identical to the water level above, since there's only one.

If there were multiple values here, it would likely be the `WateLlevel` of each plane (assuming the presence of `u * v` planes), but since that doesn't happen (and there's already a new GND version available) it seems unlikely that this would ever be used.

### Version 1.9

All the information stored in version 1.7, plus the water plane configuration (appended). The latter consists of the same information as is present in 1.8, but the format for defining multiple water planes has changed (and they are in fact used in some of the episode 19 maps I've seen, such as `icecastle.gnd`):

1. `NumWaterPlanesU` (`int` value): How many water planes there are in the horizontal dimension (NOT always `1`)
2. `NumWaterPlanesV` (`int` value): How many water planes there are in the vertical dimension (NOT always `1`)
3. The same structure as defined for the original water plane (see table above), repeated `u * v` times

I'm not quite sure what the original configuration is still used for, but I'm guessing it would serve as a fallback in case the numbers `(u, v)` are both zero (i.e., there aren't any water planes defined in this section). More research is needed.

## References

- [Rendering/Ground Mesh](/rendering/ground-mesh) details the interpretation of the ground mesh's geometry (and related features)
