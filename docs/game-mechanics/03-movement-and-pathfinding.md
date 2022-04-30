---
sidebar_position: 3
slug: /game-mechanics/movement
title: Movement and Pathfinding
---

This document describes how Ragnarok Online's zone servers implement the movement of ingame actors.

## Movement Speed

All actors have a movement speed value that determines how fast they move around the game world.

### Unit of Measurement

:::caution

This section contains unverified information and/or speculation. It may or may not be completely wrong.

:::

Movement speeds are given in the unit of "milliseconds taken to move to the next adjacent tile" (i.e., a distance of one world unit). This should be interpreted as "delay after moving to the next ground tile", since movement happens instantaneously:

> On aegis you move to the target cell instantly, then animate the movement where [on] emulators you animate first and arrive second

_Source: Kokotewa (no direct link available)_

### Examples

|   Creature   | Movement Speed (ms) | Perceived Speed                           |
| :----------: | :-----------------: | :---------------------------------------- |
|  Red Plant   |        2000         | Immobile[^1] (extremely slow if glitched) |
|     Pupa     |        1000         | Immobile[^1] (very slow if glitched)      |
|    Zombie    |         400         | Moves slowly                              |
|    Osiris    |         100         | Very fast                                 |
| Treasure Box |          0          | Cannot move at all                        |

[^1] Immobile creatures can still technically move (at their configured speed), but this is almost certainly a bug.

### Statistics

:::caution

This section needs a review. The information may be outdated, incomplete, or factually incorrect.

:::

Most creatures appear to use speed values between 150 and 400 ms. Immobile creatures always seem to use 1000 or 2000 ms.

## Pathfinding

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

## Hit Stun

When damaged, actors usually [^2] cannot move for a brief period of time, effectively "stunning" them when they suffer a "hit". Afterwards, movement commences on the precomputed path unless their position has been altered via knockback effects.

[^2] Certain auras, like Endure, can make them immune to this mechanic.
