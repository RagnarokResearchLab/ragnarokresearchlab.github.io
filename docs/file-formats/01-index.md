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
|  `blob`   | variable |               Opaque binary structure of arbitrary size (processed using third-party libraries)               |
|  `array`  | variable |           Fixed-size array of structures or values; the exact size depends and may only be implicit           |

Please note that in many cases the exact type is unknown and can only be guessed, based on examples found "in the wild".

## Ragnarok File Formats

Gravity created a number of custom file formats for [Arcturus](/arcturus), which they later adapted for the RO client.
This documentation differentiates between them only as far as is necessary to understand their many unused (and oftentimes strange) features.

### Asset Containers

Bundling many small files in a [BLOB](https://en.wikipedia.org/wiki/Object_storage) "archive" can help minimize the disk footprint and speed up loading times:

- [GRF](/file-formats/GRF): Most of the game assets are stored in this large storage container, potentially compressed and/or encrypted
- [RGZ](/file-formats/RGZ): The RO client includes a "Patch Client" that downloads most updates in this compressed storage format
- [GPF](/file-formats/GPF): Another extension used the the game's updater, which however seems to just be an alias for GRF files
- [PAK](/file-formats/PAK): Arcturus and early RO clients use a different format, the origins of which aren't quite clear to me at this time

Although modern SSDs have different performance characteristics than mechanical HDDs, the game continues to rely on asset containers as a virtual file system. Most frequently-accessed files must therefore be extracted in-memory or on disk.

### Raster Images

A combination of standard and custom-made image formats see use in the RO client:

- [BMP](https://en.wikipedia.org/wiki/BMP_file_format): Most of the sprites and textures mapped to 3D geometry exists as raw bitmap
- PAL: They're lookup tables that store [palette](<https://en.wikipedia.org/wiki/Palette_(computing)>) colors for the indexed-color image formats
- [TGA](https://en.wikipedia.org/wiki/Truevision_TGA): Truecolor images with transparency exist for many effects and some monster sprites
- [JPG](https://en.wikipedia.org/wiki/JPEG): These appear to be fairly rare, but in a few instances JPEG textures were assigned
- [EBM](/file-formats/ebm): Guild emblems are also bitmaps, but the RO client compresses them first

Other formats may include image data as well, but it's usually combined with other metadata.

### Map Definitions

- Map files: RSW, GND, GAT

### 2D Sprites

- 2D sprites and effects: SPR, ACT, , IMF, , STR, EZV (, , )

### 3D Models

TODO: RSM, RSM2, GR2, Arcturus (RMA?)

- 3D models: RSM, RSM2, GR2 (see RAD website)

### Multimedia

Although both games contain various multimedia formats, they will not be fully specified here:

- [WAV](https://en.wikipedia.org/wiki/WAV): Sound effects and music-like jingles/songs utilize the waveform audio format
- [MP3](https://en.wikipedia.org/wiki/MP3): All of the background music ("BGM") tracks use this standard audio format
- [BIK](/file-formats): Video textures in [Bink](https://www.radgametools.com/bnkmain.htm) format; introduced recently and so far extremely niche
- [ADP](/file-formats/adp): Arcturus stores its music tracks in [ADPCM](https://en.wikipedia.org/wiki/Adaptive_differential_pulse-code_modulation) format, with a fairly arcane codec


### Miscellaneous

Anything that doesn't fit the above criteria - most of these aren't particularly relevant:

- Scripts: Lua and LUB (see Lua website)

```sh
      1 bak
      1 bat
      1 egg
      1 fds
      1 flc
      1 mp3
      1 pptx
      1 rsx
      1 scp
      1 zip
      2 ase
      2 scc
      2 tmp
      3 bson
      3 log
      4 gif
      4 psd
      4 sfk
      4 xml
      5 bik
     16 lua
     21 gr2
     23 fna
     64 db
     91 ezv
    114 txt
    305 imf
    392 jpg
    449 png
    453 lub
    987 gnd
    988 gat
    988 rsw
   1733 rsm2
   2716 str
   3103 wav
   3676 pal
   7048 rsm
   7565 tga
  39505 spr
  46583 bmp
  54845 act
```

See https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/issues/92#issuecomment-1858732921

Most of this is probably garbage - double-check just to be safe?

Also check Arcturus? (Maybe later...)

---

TODO old README, maybe separate page
