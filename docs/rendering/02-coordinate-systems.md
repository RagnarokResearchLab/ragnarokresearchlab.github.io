---
sidebar_position: 2
slug: /rendering/coordinate-systems
title: Coordinate Systems
---

This document describes the coordinate systems used by the Ragnarok Online client.

## List of Coordinate Systems

There are multiple different coordinate systems to account for when it comes to rendering the world:

|        Name         | Dimension |           Used by           |                       Origin                        |
| :-----------------: | :-------: | :-------------------------: | :-------------------------------------------------: |
|  World Coordinates  |    3D     |    Renderer (Direct3D?)     |        Zero vector (the actual world origin)        |
| Map Coordinates[^1] |    2D     | `/where` command, GAT files | The map's southwest corner (_not_ the world origin) |
|   GND Coordinates   |    2D     |          GND files          |   Southwest corner of the map (isomorphic to GAT)   |
|   RSM Coordinates   |    3D     |     RSM and RSM2 files      | Origin of the model editor's coordinate system[^2]  |
|   GR2 Coordinates   |    3D     |          GR2 files          | Origin of the model editor's coordinate system[^2]  |

[^1] Alternatively, you could call them "GAT Coordinates" because that's effectively what they are.

[^2] Whatever software the artists used works with a different local origin, which needs to be transformed to world space.

## World Coordinates

The baseline used to define what "world units" actually mean. All dimensions in a rendering engine can be expressed in world units since that is - by definition - the elementary unit of measurement. Using world units has the purpose of allowing you to configure how large objects are in relation to each other, as sizes have no actual meaning if there's no frame of reference.

RO's coordinate system is implicit in its various file formats, most of which make reference to it in some form or another:

- GAT tiles are not of unit size (as you might expect), but actually 5 world units large
- GND surfaces consist of a two-by-two square of GAT tiles, making them 10 world units large (width and height)
- This proportionality is configurable (see [GND: Geometry Scale Factor](/file-formats/gnd#geometry-scale-factor)), but in practice it's extremely unlikely to ever change
- When importing [RSM](/file-formats/rsm) or [GR2](/file-formats/gr2) models, their local (model space) coordinates need to be transformed into world space
- Sprites and textures seemingly map to GAT tiles at a ratio of 32 pixels per GAT tile (see `data/textures/grid.tga`)

One other oddity is the fact that, in all of these cases, the Y-axis ("height") is negative and the world appears "upside down".

## Map Coordinates

The coordinates displayed ingame via `/where` slash command refer to the relative position of units on a 2D grid. This grid is centered at the world origin `(0, 0, 0)`, so that the map's bottom left corner lies in a quadrant to the southwest of the origin.

## GND Coordinates

These are isomorphic to map (GAT) coordinates, since each ground surface is two tiles large. They aren't really useful unless thinking about water planes: Water (but not lava) is usually tiled with 128px square textures that map directly to the ground.

## RSM Coordinates

The coordinate system used by RSM models appears to be markedly different, with the Z and Y axes being swapped.

## GR2 Coordinates

GR2 coordinates seem to be similar (or possibly identical) to RSM coordinates, with different scaling.
