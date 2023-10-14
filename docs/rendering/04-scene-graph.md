---
sidebar_position: 40
slug: /rendering/scene-graph
title: Scene Graph
---

This document describes how a scene graph can be reconstructed from the RSW files used by the Ragnarok Online client.

## High-Level Overview

## Bounding Boxes

AABB vs OBB (not Old Blue Box...)

## Quad Tree Ranges

## Storage Space

Formulas:

- `BytesPerNode = sizeof(float) * 12 = 48`
- `NumContainedObjects = 4^RecursionLevel`
- `TotalRequiredSpace = RecursionLevel`

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

Node = quad tree range (recursive)

TBD mathjax?

| Level | Nodes | Floats | Bytes |   Size   | Total Bytes | Total Size |
| :---: | :---: | :----: | :---: | :------: | :---------: | :--------: |
|   0   |   1   |   12   |  48   | 0.05 KB  |     48      |  0.05 KB   |
|   1   |   4   |   48   |  192  | 0.19 KB  |     240     |  0.23 KB   |
|   2   |  16   |  192   |  768  | 0.75 KB  |    1008     |  0.98 KB   |
|   3   |  64   |  768   | 3072  | 3.00 KB  |    4080     |  3.98 KB   |
|   4   |  256  |  3072  | 12288 | 12.00 KB |    16368    |  15.98 KB  |
|   5   | 1024  | 12288  | 49152 | 48.00 KB |    65520    |  63.98 KB  |

Link to ODS sheet? Meh

As you can see, an entire tree will always take up the final 65520 bytes of a map's RSW file.

## Culling (Intersection with Leaf Nodes)

Collision check, only if object is tagged as solid?

## Related to GND bounds (TBD)

## BlockType / solidity flag (RSM/RSW)

## other actors (TBD)

sprites etc? meh
