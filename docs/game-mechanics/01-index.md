---
sidebar_position: 1
slug: /game-mechanics
title: Overview
---

In this category, you will find a description of the serverside behaviors that enable the gameplay of Ragnarok Online.

## Target Audience

Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected.

## Objectives

After studying this documentation, you should understand how the game works "behind the scenes". All descriptions aim to be sufficiently exact and rich in technical detail, so that you may gain a deeper appreciation for the design and implementation of the underlying software systems. At the very least, it should be an interesting read to anyone who's curious about Ragnarok Online's technological foundations. Needless to say, **all information is provided for educational purposes only.**

## Limitations

For practical reasons, only the original ("classic") version of Ragnarok Online will be covered on these pages. The game functions rather differently after the infamous "Renewal" update, which is the only version of the game still being offered by its creators. Keeping up with the constant flow of changes that are still being made to live servers is too laborious and difficult.

## Prerequisites

You may want to read up on some of the fundamentals of client-server-programming, networking, and game development to make best use of this resource. Here's a list of suggestions for topics that should give you a decent understanding to begin with:

- [Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html) describes a typical approach for implementing gameplay
- [Game Server Ticks](https://en.wikipedia.org/wiki/Game_server#Tickrate) details how game servers update a persistent world in tiny, incremental steps
- [Berkeley Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) and [Socket Programming](https://www.cs.dartmouth.edu/~campbell/cs50/socketprogramming.html) are used to realize the communication between client and server
- [Transmission Control Protocol (TCP)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) is a mechanism that allows streaming data through network sockets
- [Finite State Machines](https://en.wikipedia.org/wiki/Finite-state_machine) are a theoretical concept used to model simple AI behaviors

You don't need to be an expert in all of those areas. Just keep these topics in mind and read up on them as needed.
