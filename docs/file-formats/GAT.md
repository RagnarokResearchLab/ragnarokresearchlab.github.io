---
slug: /file-formats/gat
title: GAT
---

This document describes the GAT file format used in the Ragnarok Online client.

## Contents

GAT files contain the following information:

- Altitude data, encoded as height vectors, for each tile of a map
- Terrain type flags to identify the terrain on a given tile

The file contents can be interpreted as a 2-dimensional navigation map, similar to [3D navigation meshes](https://en.wikipedia.org/wiki/Navigation_mesh) in concept.

## Layout

### Version 1.2

The vast majority of maps in the RO client use this version, including those found in alpha clients (and even [Arcturus](/arcturus))[^1].

|     Field      | Offset | Length |   Type   |                          Description                          |
| :------------: | :----: | :----: | :------: | :-----------------------------------------------------------: |
|    `Header`    |   0    |   4    | `string` |        `"GRAT"` as an ASCII-encoded, fixed-size string        |
| `MajorVersion` |   4    |   1    |  `byte`  |                    Versioning information                     |
| `MinorVersion` |   5    |   1    |  `byte`  |                    Versioning information                     |
|    `Width`     |   6    |   4    |  `int`   |        The horizontal size of the map, given in tiles         |
|    `Height`    |   10   |   4    |  `int`   |         The vertical size of the map, given in tiles          |
|    `Tiles`     |  14+   |   20   | `array`  | Contains the navigation properties for `Width * Height` tiles |

[^1]: Technically, old versions have a zero-byte prefix shifting the layout. It's still GAT 1.2 otherwise.

#### Tile Properties

Each entry in the `Tiles` array represents a surface block ("tile") of the given map's terrain, and is structured as follows:

|        Field        | Offset | Length |  Type   |                                Description                                |
| :-----------------: | :----: | :----: | :-----: | :-----------------------------------------------------------------------: |
| `SouthWestAltitude` |   0    |   4    | `float` | Altitude at the bottom left corner, i.e., at (0, 0) relative coordinates  |
| `SouthEastAltitude` |   4    |   4    | `float` | Altitude at the bottom right corner, i.e., at (1, 0) relative coordinates |
| `NorthWestAltitude` |   8    |   4    | `float` |   Altitude at the top left corner, i.e., at (0, 1) relative coordinates   |
| `NorthEastAltitude` |   12   |   4    | `float` |  Altitude at the top right corner, i.e., at (1, 1) relative coordinates   |
|    `TerrainType`    |   16   |   4    | `uint`  |                  Identifier for the tile's terrain type                   |

#### Terrain Types

:::info

More research is needed. If you know anything about the topic, please help fill in the blanks!

:::

The following terrain types are known to have practical applications:

| Value | Walkable |             Interpretation             |
| :---: | :------: | :------------------------------------: |
|   0   |   YES    |       Regular (walkable) terrain       |
|   1   |    NO    |    Obstructed (impassable) terrain     |
|   5   |    NO    | Impassable snipeable terrain ("cliff") |

There are [several other terrain types](https://openkore.com/wiki/Field_file_format), but it's unclear whether they affect clientside collision checks at all.

### Version 1.3

:::info

More research is needed. If you know anything about the topic, please help fill in the blanks!

:::

This version adds a twist to the `TerrainType` values: A special flag marks water tiles, though the layout itself hasn't changed. Effectively, two flags are seemingly embedded in the existing terrain type field. Consider the following example:

- A water tile might use a `TerrainType` of `1` (obstructed), which in GAT 1.2 would be encoded as `0x01000000` (LE `int`, value is `1`)
- In GAT 1.3, the same`TerrainType` property would however be encoded as `0x01000080` (LE `int`, value is now `-2147483647`)
- The `IsWaterTile` flag can then be extracted by masking the `TerrainType`, leaving only the `0x08` component (binary: `0000 1000`)

What exactly should be done with that information is unclear, but all water tiles in GAT 1.3 files have been assigned such a flag.

## References

- [Rendering/Coordinate Systems](/rendering/coordinate-systems) describes the GAT-based coordinate system ("map coordinates")
