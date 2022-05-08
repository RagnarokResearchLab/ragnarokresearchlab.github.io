---
sidebar_position: 1
slug: /file-formats
title: Overview
---

In this category, you will find a description of the custom file formats that are used in the Ragnarok Online client.

## Target Audience

Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected.

## Objectives

After studying this documentation, you should know the answers to the following questions:

- What types of files exist in the Ragnarok Online client?
- What information do they contain and how is it structured?
- How can the file contents be decoded from their binary format into a raw ("in-memory") representation?

Needless to say, **all information is provided for educational purposes only.**

## Limitations

This section doesn't cover the rather complex topic of rendering the game world. To learn how the decoded information from within the game's resource files can be transformed into a visual representation, matching what players expect when they think about "the game", see [Rendering](/rendering/). For information about the relationship between RO and [Arcturus](https://steam-games.org/game/47632/arcturus-the-curse-and-loss-of-divinity/), browse [this category](/arcturus/).

## Prerequisites

You might want to read up on some of the fundamentals of binary encodings, computer graphics, and game development to make best use of this resource. Here's some external links that might help you get started if you aren't already familiar:

- [The Wikipedia page on binary files](https://en.wikipedia.org/wiki/Binary_file) describes the basics of working with non-textual file formats
- Similarly, their [article on Endianness](https://en.wikipedia.org/wiki/Endianness) explains how numbers may be represented in different ways
- [Here](https://betterexplained.com/articles/understanding-big-and-little-endian-byte-order/)'s two more explanations [of the same topic](https://betterexplained.com/articles/understanding-big-and-little-endian-byte-order/), with better examples and more background information
- Finally, another [introduction to binary file formats](https://betterexplained.com/articles/a-little-diddy-about-binary-file-formats/) from the above website (for good measure)

You absolutely should have a solid grasp of binary types if you wish to learn about the relatively complex formats that RO uses.

## Units and Data Types

This specification follows the following conventions:

- All offsets and field lengths are given in bytes, unless otherwise denoted
- All numbers are assumed to be stored in "reversed" byte order (little-endian)
- Boolean values are interpreted as `FALSE` if zero, and `TRUE` otherwise

Here's a list of the atomic data types that you may encounter in the layout tables:

|   Type    |   Size   |                                                  Description                                                  |
| :-------: | :------: | :-----------------------------------------------------------------------------------------------------------: |
| `boolean` |    1     |              A single byte that is exclusively used to store a boolean flag (`FALSE` or `TRUE`)               |
|  `byte`   |    1     |                 8-bit unsigned integer that is used to encode numbers rather than characters                  |
| `ushort`  |    2     |                                            16-bit unsigned integer                                            |
|  `short`  |    2     |        16-bit signed integer (in [Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement))        |
|  `float`  |    4     | A 32-bit single-precision floating point number, in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) format |
|   `int`   |    4     |        32-bit signed integer (in [Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement))        |
|  `uint`   |    4     |                                            32-bit unsigned integer                                            |
|  `char`   |    1     |                             An ASCII-encoded fixed-size character of unit length                              |
| `string`  | variable |             Fixed-size, null-terminated, or counted string (as noted in the field's description)              |
| `struct`  | variable |        Binary structure of arbitrary size, with a unique layout (will generally be listed separately)         |
|  `array`  | variable |           Fixed-size array of structures or values; the exact size depends and may only be implicit           |

Please note that in many cases the exact type is unknown and can only be guessed, based on examples found "in the wild".
