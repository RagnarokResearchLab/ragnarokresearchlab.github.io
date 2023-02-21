---
sidebar_position: 1
slug: /rendering
title: Overview
---

In this category, you will find out how the visual representation of Ragnarok Online's game world is created by its client.

## Target Audience

Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected.

## Objectives

After studying this documentation, you should know _in principle_ how a decently accurate representation of the game world can be rendered. The purpose of the many different file formats should become clearer, as well as how they complement each other. Topics that might not be directly related to 3D rendering will also be covered, if they're relevant to gameplay or visuals.

## Limitations

This specification is concerned with a high-level description of the rendering concepts only. Depending on the graphics technologies used, lower-level implementation details may vary and/or be impossible to faithfully replicate. Be warned: Computer graphics and 3D rendering is a complex domain, so you should expect there to be errors and inaccuracies in here.

## Prerequisites

Here's a (non-exhaustive) list of topics that you might want to know about in detail:

- [Vector spaces](https://en.wikipedia.org/wiki/Vector_space)
- [Coordinate systems](https://learnopengl.com/Getting-started/Coordinate-Systems)
- [Transformations between vector spaces](https://en.wikipedia.org/wiki/Linear_map)
- [Isomorphic vector spaces](https://en.wikipedia.org/wiki/Isomorphism)
- [Polygon meshes](https://en.wikipedia.org/wiki/Polygon_mesh)
- [Lightmapping](https://en.wikipedia.org/wiki/Lightmap)
- [Posterization](https://en.wikipedia.org/wiki/Posterization)

These aren't necessarily the best explanations, so you'll have to do more research when knowledge about a topic is needed.
