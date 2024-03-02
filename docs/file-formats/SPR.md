---
slug: /file-formats/spr
title: SPR
---

This document describes the SPR file format used in the Ragnarok Online client (and Arcturus).

## Contents

SPR files contain the following information:

- Sprites, icons, and other graphics rendered by the game (either inside the world or as part of the UI)
- Indexed-color bitmaps and their respective color palettes, here called the "BMP segment"
- Truecolor images with transparency values for each pixel, here called the "TGA segment"

The file contents can be interpreted as a [spritesheet](https://en.wikipedia.org/wiki/Texture_atlas) and combined with [ACT files](/file-formats/act) to implement animated sprites.

## Features

### Bitmap Color Palette

Instead of encoding the RGBA pixels directly, the BMP segment of the file uses a [color palette](<https://en.wikipedia.org/wiki/Palette_(computing)>) with up to 256 colors:

- In the image data, each byte corresponds to an entry in this lookup table
- Entry 0 is always the (transparent) background color, regardless of its alpha value
- Even if present, alpha values are otherwise not supported and should be ignored

The palette included in the SPR file is the default palette. It's possible to load in [PAL](/file-formats/pal) files to recolor a given sprite.

### Run-Length Encoding

Because most sprites include a significant number of (transparent) background pixels, later versions of the format employ a primitive compression scheme to reduce the number of identical palette indices that have to be stored in the BMP segment.

The method is chiefly known as [RLE](https://en.wikipedia.org/wiki/Run-length_encoding) because it works by encoding runs (here: of zero bytes, which refer to the palette index 0 - the transparent background color) into a two-byte shorthand: First, a zero-byte that indicates the start of a run, and then the number of encoded zero bytes. Decompression simply requires inserting the same number of zeroes into the output stream.

If that sounds confusing, here's some examples:

- If the image contained five background pixels, you'll see `00 05`, which stands for "emit zero, five times"
- The bytes `"ABC"` (`65 66 67`) are "decompressed" to the same sequence as there's no encoded run present
- A single zero byte must be encoded as `00 01` ("emit zero, one time") - meaning that `00 00` is not allowed

This feature isn't used for the truecolor (TGA) segments as pixels are stored in ABGR format, in which repetition is less common.

### Transparency

Alpha values in the BMP palette should be completely ignored. RGBA colors are stored raw and not premultiplied.

The color with palette index 0 can be considered the "background color". It must be cleared manually on load.

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="1.1" label="Version 1.1" default>

```cpp title="SPR File Format (v1.1)"
struct BitmapSprite {
    uint16_t ImageWidth;
    uint16_t ImageHeight;
    uint8_t PaletteIndices[ImageWidth * ImageHeight];
};

struct PaletteColor {
    uint8_t Red;
    uint8_t Green;
    uint8_t Blue;
    uint8_t Alpha;
};

struct RagnarokSPR {
    char Signature[2];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    uint16_t BitmapImageCount;
    struct BitmapSprite BitmapSprites[BitmapImageCount];
    struct PaletteColor BitmapColors[256];
};
```

</TabItem>
<TabItem value="2.0" label="Version 2.0">

```cpp title="SPR File Format (v2.0)"
struct BitmapSprite {
    uint16_t ImageWidth;
    uint16_t ImageHeight;
    uint8_t PaletteIndices[ImageWidth * ImageHeight];
};

// diff-add-start
struct TrueColorPixel {
    uint8_t Alpha;
    uint8_t Blue;
    uint8_t Green;
    uint8_t Red;
};

struct TrueColorSprite {
    uint16_t ImageWidth;
    uint16_t ImageHeight;
    struct TrueColorPixel PixelBuffer[ImageWidth * ImageHeight];
};
// diff-add-end

struct PaletteColor {
    uint8_t Red;
    uint8_t Green;
    uint8_t Blue;
    uint8_t Alpha;
};

struct RagnarokSPR {
    char Signature[2];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    uint16_t BitmapImageCount;
    // diff-add
    uint16_t TrueColorImageCount;
    struct BitmapSprite BitmapSprites[BitmapImageCount];
    // diff-add
    struct TrueColorSprite TrueColorSprites[TrueColorImageCount];
    struct PaletteColor BitmapColors[256];
};
```

</TabItem>
<TabItem value="2.1" label="Version 2.1">

```cpp title="SPR File Format (v2.1)"
// diff-remove
struct BitmapSprite {
// diff-add
struct CompressedBitmapSprite {
    uint16_t ImageWidth;
    uint16_t ImageHeight;
    // diff-remove
    uint8_t PaletteIndices[ImageWidth * ImageHeight];
    // diff-add-start
    uint16_t CompressedBufferSize;
    uint8_t CompressedPaletteIndices[CompressedBufferSize];
    // diff-add-end
};

struct TrueColorPixel {
    uint8_t Alpha;
    uint8_t Blue;
    uint8_t Green;
    uint8_t Red;
};

struct TrueColorSprite {
    uint16_t ImageWidth;
    uint16_t ImageHeight;
    struct TrueColorPixel PixelBuffer[ImageWidth * ImageHeight];
};

struct PaletteColor {
    uint8_t Red;
    uint8_t Green;
    uint8_t Blue;
    uint8_t Alpha;
};

struct RagnarokSPR {
    char Signature[2];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    uint16_t BitmapImageCount;
    uint16_t TrueColorImageCount;
    // diff-remove
    struct BitmapSprite BitmapSprites[BitmapImageCount];
    // diff-add
    struct CompressedBitmapSprite CompressedBitmapSprites[BitmapImageCount];
    struct TrueColorSprite TrueColorSprites[TrueColorImageCount];
    struct PaletteColor BitmapColors[256];
};
```

</TabItem>
</Tabs>

### Fields

#### Signature

Uniquely identifies the file format. Must always be `"SP"` (ASCII-encoded, fixed-size string).

#### Version

Signals the presence of optional features. Version `1.1` is used only in [Arcturus](/arcturus), but not in any known build of the RO client.

#### BitmapSprites

Indexed-color sprite images (BMP segment). All pixels are stored as palette indices that need to be resolved on load.

A size of `(-1, -1)` indicates an invalid image, which consists of a single blank pixel that can safely be discarded.

#### BitmapColors

The BMP color palette, consisting of RGBA pixels. Alpha can be discarded. Equivalent to the file contents of a [PAL](/file-formats/pal) file.

#### TrueColorSprites

True color sprite images (TGA segment). Pixels are stored raw in order ABGR and they do make use of the alpha channel.

#### CompressedBitmapSprites

Indexed-color sprite images (BMP segment). All pixels are stored as palette indices that need to be resolved on load.

Background pixels are [RLE](#run-length-encoding)-compressed, so all pixels referring to palette index zero must be decompressed first.

## References

Multiple open-source SPR decoders exist:

- [GPL-licensed implementation in JavaScript (RoBrowser)](https://github.com/MrAntares/roBrowserLegacy/blob/master/src/Loaders/Sprite.js)
- [MIT-licensed implementation in Rust (Korangar)](https://github.com/vE5li/korangar/blob/main/src/loaders/sprite/mod.rs)
- [MPL-licensed implementation in LuaJIT (RagLite SDK)](https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokSPR.lua)

This list only includes actively-maintained versions; [various other community projects](/community-projects) may also be of interest.
