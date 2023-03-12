---
sidebar_position: 2
slug: /game-mechanics/world-state-updates
title: World State Updates
---

This document describes how Ragnarok Online's zone servers update the simulation of the game world.

## Server Tick Rate

According to a third party (who sadly failed to provide a verifiable source), the game world is updated every 20 ms:

> [It uses] a different server refresh speed (aegis is faster)

> Official servers] are not really coded in a very efficient way, you need a really really strong server just to get it to run at all. [They] run through everything in a 20ms interval ... on \*Athena emulators we changed this to a 100ms interval (and often even slower for certain things), so it needs 5+ times less CPU power. Unfortunately that also makes implementation of certain things like firewall behavior impossible to replicate to 100%.

_Source: [Ragnarok Travels website](https://www.ragnaroktravels.com/emulators)_

---

Independent research indicates that the above claims are likely to be true. Here's the findings:

- In [Hercules](https://github.com/HerculesWS/Hercules), AI updates take at least 100 ms (see `MIN_MOBTHINKTIME` in the [source code](https://github.com/HerculesWS/Hercules/search?q=MIN_MOBTHINKTIME))
- Similarly, elemental follower updates take at least 100 ms (see `MIN_ELETHINKTIME` in the [source code](https://github.com/HerculesWS/Hercules/search?q=MIN_ELETHINKTIME))
- [irowiki](https://irowiki.org/classic/Fire_Wall) mentions that "Firewall hits at a very high rate of attack: approximately 40 to 50 times per second"

A tick rate of 20 ms would result in [at most] 50 updates per second, which is required for computing hits as rapidly as described on the irowiki page. Considering all of the above, it seems probable that 20 ms is indeed the value used internally.

## Performance Degradation

:::caution

This section contains unsubstantiated claims and/or speculation. It may or may not be completely wrong.

:::

There are _presumably_ no special countermeasures taken when world updates take too long. This is purely based on personal experience, as performance degrades heavily in high-stress situations like War of Emperium. The server appears to simply update the simulation as fast as is physically possible, even if that isn't sufficient to guarantee a fluid gameplay experience.

## Timer Granularity

On Windows, timers rely on a coarse-grained systemwide clock signal that seems to tick once every 15 or so milliseconds:

> The system clock "ticks" at a constant rate. If dwMilliseconds is less than the resolution of the system clock, the thread may sleep for less than the specified length of time. If dwMilliseconds is greater than one tick but less than two, the wait can be anywhere between one and two ticks, and so on.

_Source: [Windows API documentation](https://learn.microsoft.com/en-us/windows/win32/api/synchapi/nf-synchapi-sleep#remarks) (should apply equally to all relevant, time-based WIN32 APIs)_

This means that world state updates could easily be delayed when the clock signal was "missed", in difficult-to-predict patterns:

```sh
Last world update took 0.00 ms          Next update in 20.00 ms
Last world update took 44.36 ms         Next update in 0.00 ms
Last world update took 16.02 ms         Next update in 3.98 ms
Last world update took 31.00 ms         Next update in 0.00 ms
Last world update took 16.01 ms         Next update in 3.99 ms
```

The above simulates an "empty" server tick with an update frequency of 50 updates per second, so delays are purely accidental.

Now, what you would _actually_ expect to happen is illustrated by running the same experiment on Linux (1ms system clock):

```sh
Last world update took 0.00 ms          Next update in 20.00 ms
Last world update took 20.77 ms         Next update in 0.00 ms
Last world update took 1.19 ms          Next update in 18.81 ms
Last world update took 19.19 ms         Next update in 0.81 ms
Last world update took 1.19 ms          Next update in 18.81 ms
```

How much these delays affect gameplay in practice is hard to tell, but it's interesting nonetheless.

## Simulation Steps

Whenever the simulation is updated, a number of different processing steps must be executed. The exact requirements depend on the server configuration and version of the game. Here's a minimal example that includes all core gameplay systems:

- Handle incoming and outgoing messages
- Update all currently loaded maps and instances
- Update NPC script handlers that are currently executing
- Update all entities that exist in the world
- Handle communication with other servers and the database layer

### Message Handling

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

### Mapwide Events

#### Scheduled Events

Certain game events happen at fixed times. The update loop must take into account all of the following map events:

- War of Emperium state transitions
- Economy updates for occupied WoE castles
- Regeneration of "opened" Treasure Boxes
- Time-based events tied to instances, PVP, or battleground maps (if there are any)

Any zone server has to check its internal clock regularly and initiate a mapwide change at the scheduled time.

#### Real-Time Events

Whenever the simulation advances, certain mapwide events take place immediately:

- Regeneration of monsters that were previously considered "dead"

Keeping up with the lifetime of creatures is one of the main tasks of the zone server, so this will be run at least once per frame.

### NPC Script Handlers

In this phase, the server steps through precompiled NPC scripts and executes them one by one. Here's a general approach:

- Skip over script handlers that require player input or are in some other waiting condition
- For all other NPCs: Advance the compiled NPC script handler function by some number of steps
- Recycle script handlers that have run to completion or were cancelled

Afterwards, the server will have to process any game events that were created by the above script handlers.

### Game Actors

All the other entities that live entirely on the server similarly have to be updated during the main loop:

- Monsters
- Items
- Skills
- Players

During this stage, all queued game events would be resolved; combat proceeds, items drop, skills are cast or removed, etc.

### Cross-Server Communication

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::
