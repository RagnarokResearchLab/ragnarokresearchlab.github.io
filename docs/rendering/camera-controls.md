---
sidebar_position: 30
slug: /rendering/camera-controls
title: Camera Controls
---

This document describes the camera controller used by the Ragnarok Online client.

## Orbital Camera

The game uses a flexible but fairly standard camera system, known under many different names, to create a third-person POV:

- The distance from the camera target is given as a radius (in world units)
- Players can adjust the camera on two angles, horizontally and vertically
- In RO, only half of the horizontal range can be explored (for technical and probably stylistic reasons)

[Here's](https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#arc-rotate-camera) and example explaining how it works; this is not engine-specific but rather a general method of rendering a 3D scene.

## Perspective Projection

The camera settings control how exactly the scene is projected on the viewport window, giving the game its unique look:

- The vertical field of view was claimed to be 15 degrees [by curiosity], which is a bit of a... curiosity (hah)
- The near plane is located at a distance of 10 (2 if normalized) world units - the size of one GND surface
- ... and the far plane seems to be at a distance of 1500 (300 if normalized) world units, just outside the fog sphere

It's important to point out the unusually narrow [field of view](https://en.wikipedia.org/wiki/Field_of_view) as it directly impacts how fog effects color the scene.

## Fixed Viewpoints

Certain maps lock in the camera settings, limiting the player's ability to adjust them (without hacking the client, that is).

### Data Tables

There are two data files (CSV tables) that control the fixed viewpoint camera on a per-map basis.

- `data/indoorRswTable.txt`: Features a list of maps for which camera adjustments should be disabled
- `data/viewpointtable.txt`: Compliments the above with fixed viewpoints for a selection of maps

The format of the files is quite simple:

- If a map's [RSW](/file-formats/rsw) file is listed in the `indoorRswTable`, orbital rotations will be disabled completely for the map
- The `viewpointtable` defines what camera angles to allow for the given map (no entry means "use default values")
- Entries in the viewpoint table are separated by hashtags (`#`) and arbitrary amounts of whitespace characters

### Viewpoint Table Layout

Viewpoint presets are defined by the following fields:

| Index |     Field      |   Type   |                                                     Interpretation                                                     |
| :---: | :------------: | :------: | :--------------------------------------------------------------------------------------------------------------------: |
|   0   |    `mapID`     | `string` |                                The name of the map's RSW resource file (with extension)                                |
|   1   |    `range`     |  `int`   |                    Minimum radial distance from the camera to the player character (in world units)                    |
|   2   |    `scope`     |  `int`   |                 Maximum radial distance adjustment that is allowed on top of `range` (in world units)                  |
|   3   |   `range_IN`   |  `int`   |                    Initial radial distance from the camera to the player character (in world units)                    |
|   4   | `rotationFrom` |  `int`   |         Minimum longitude of the camera's [azimuth](https://en.wikipedia.org/wiki/Azimuth) angle (in degrees)          |
|   5   |  `rotationTo`  |  `int`   |         Maximum longitude of the camera's [azimuth](https://en.wikipedia.org/wiki/Azimuth) angle (in degrees)          |
|   6   | `rotation_IN`  |  `int`   |         Initial longitude of the camera's [azimuth](https://en.wikipedia.org/wiki/Azimuth) angle (in degrees)          |
|   7   | `altitudeFrom` |  `int`   | Minimum latitude of the camera's [polar](https://en.wikipedia.org/wiki/Spherical_coordinate_system) angle (in degrees) |
|   8   |  `altitudeTo`  |  `int`   | Maximum latitude of the camera's [polar](https://en.wikipedia.org/wiki/Spherical_coordinate_system) angle (in degrees) |
|   9   | `altitude_IN`  |  `int`   | Initial latitude of the camera's [polar](https://en.wikipedia.org/wiki/Spherical_coordinate_system) angle (in degrees) |

Here's an example entry for the viewpoint table:

```txt
ex_map02.rsw#	250#	250#	500#		0#		90#		45#		-40#		-65#		-65#
```

If this map was to be loaded, the camera's range of movement would be limited such that:

- It starts zoomed out at the maximum radial distance of 500 (100 if normalized) world units
- You can't zoom further in than 250 (50 if normalized) world units from the player character
- You can't zoom further out than the maximum distance (500, or 100 if normalized)
- You _can_ zoom in and out freely between the two thresholds by scrolling the mouse wheel
- The horizontal (azimuth) angle can be adjusted freely from 0 to 90 degrees
- The vertical (polar) angle can be adjusted from _positive_ 40 to 65 degrees (remember that [the game world is upside down](/rendering/coordinate-systems#world-coordinates))

Upon loading the map, the client places the camera so that it orbits the player at `(45, 65)` in spherical coordinates.
