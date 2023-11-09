---
slug: /file-formats/pal
title: PAL
---

This document describes the PAL file format used in the Ragnarok Online client.

## Contents

PAL files are alternative [color palettes](<https://en.wikipedia.org/wiki/Palette_(computing)>) used to tint sprites. To be specific:

- An array of 256 8-bit RGBA color values is appended at the end of any (modern) [SPR](/file-formats/spr) sprite - the "default palette"
- All standalone PAL files found in the game client are using exactly the same format, which makes it easy to recolor sprites
- The client can swap any one of them in to replace the default palette, with certain palettes matching specific sprites

All the same limitations apply to the default and alternative palettes - that is to say, transparency isn't supported.

## Alpha Channel

Transparency is determined for each color according to its RGBA values, after loading the palette:

- The color stored at palette index 0 is considered the transparent background color - usually red, green, or magenta
- Colors that are "close" to the transparency color might also be rendered transparent (warning: unverified claim)
- If a palette contains alpha values, they appear to be ignored in favor of the actual transparency color

The exact behavior requires some verification still, but a possible approach was described [here](https://github.com/rdw-archive/RagnarokFileFormats/blob/master/PAL.MD) (might be incorrect, though).

## Layout

See the `ColorPalette` field in the [SPR layout table](/file-formats/spr#layout). Any SPR file above version `1.1` includes a default palette (i.e., all of them do).
