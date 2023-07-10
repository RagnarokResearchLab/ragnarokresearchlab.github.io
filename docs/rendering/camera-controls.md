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

## Orbital Rotations

The origin of the spherical coordinates appears to be "looking into the screen" (alongside the positive Z axis). That is to say, rotating the camera by `(0, 0)` in spherical coordinates would place it at `(0, 0, -1)` in world coordinates. Camera rotations work similarly to directional lighting - as far as I can tell - although sunrays originate from `(0, 1, 0)` (in a non-inverted system) [^1].

As for rotating alongside the axes, a few observations can be made:

- Increasing the latitude (polar angle) rotates the camera clockwise around the X axis **in RO's world coordinates** (!)
- Due to the inverted Y axis, these angles are always negative - positive values would move the camera "under the ground"
- In a normalized coordinate system, north-south rotations must be inverted to move _counterclockwise_ ("up" and not "down")
- Adding to the longitude (azimuth angle) rotates the camera clockwise around the Y axis, which works fine if normalized
- Horizontal rotations appear to roughly add/remove one degree per pixel (possibly normalized for screen size?)
- Vertical rotations appear to add/remove exactly five degrees per scroll event to the vertical rotation angle

"Clockwise" here means "clockwise if looking at the origin" (from the camera's point of view), parallel to the respective axis.

For a specific example, you can take a look at how the viewpoint controls the camera in Nameless Island (`abbey01`):

- The azimuth angle can be adjusted from 0 to 70 degrees; it's easy to confirm that the camera will only move to the "left"
- Polar angles range from -50 to -70 (meaning, 50 to 70 if normalized), although the rotation is actually more restricted (?)
- There's probably some special rules for fixed-viewpoint maps since the range is more limited than expected (4 vs. 5 steps)
- Checking other maps we can see that the rule of "five degrees per step" holds, at least while the angle is below 65 degree

More research is needed as to why and how exactly the range is clamped in special cases (fixed viewpoint, high vertical angles).

While it's not possible to "see" that the world is upside down, negative polar angles in the table imply that it probably is [^2].

[^1]: Derived by applying the same rotations with directional light angles stored in the [RSW](/file-formats/rsw) file and visually checking the result
[^2]: Considering that terrain altitudes and water levels are also inverted in the game files, this seems like a safe bet.

## Zoom Levels

The exact range of allowed zoom levels depends on the client version. There are two versions that I've seen:

- In a 2004 client, the maximum zoom level was (roughly) 7 steps - and a final 8th one that barely moves the camera
- In a 20212 Renewal client, the maximum zoom level was (roughly) 24 steps - and again a more limited 25th one
- In both cases, the step size appears to be uneven as the last step was noticeably "smaller"

After testing different settings, I arrived at the following approximate results:

- The step size is ~5 normalized world units per zoom level (possibly a little below that due to the "extra" bump?)
- A minimal distance of 40 to 50 normalized world units (200 to 250) looks right - I opted for 45, which seemed close enough
- As a max distance, something like (normalized) 80 for a classic feel and maybe 150 or so for Renewal might work (unsure)

The exact values depend on the mimum level plus step size, but here's the levels at a step size of five normalized world units:

| Zoom Level | Distance | Normalized |
| :--------: | :------: | :--------: |
|     0      |   225    |     45     |
|     1      |   250    |     50     |
|     2      |   275    |     55     |
|     3      |   300    |     60     |
|     4      |   325    |     65     |
|     5      |   350    |     70     |
|     6      |   375    |     75     |
|     7      |   400    |     80     |

This can be extrapolated up to the maximum distance of about 800 - 825, but the step size should still be the same.
