---
slug: /file-formats/imf
title: IMF
---

This document describes the IMF file format used in the Ragnarok Online client.

## Contents

IMF files store layers that determine the drawing order for the game's sprites, compiled as a single binary file:

- These can be combined with [SPR](/file-formats/spr) and [ACT](/file-formats/act) to render 2D objects in the world or as part of the user interface
- Sprites drawn using the IMF data are known to glitch, which can (for example) be observed in the character screen
- They seem to be somewhat redundant and of limited usefulness, but more research is needed on the format

Information on these files is relatively scarce, but interestingly enough they don't appear to be used in [Arcturus](/arcturus) at all.

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="1.01" label="Version 1.01">

```cpp title="IMF File Format (v1.01)"
struct AnimationFrameLayer {
    int32_t Index;
    int32_t OriginU;
    int32_t OriginV;
};

struct SpriteDrawLayer {
    int32_t AnimationFrameCount;
    struct AnimationFrameLayer FrameLayers[AnimationFrameCount];
};

struct RagnarokIMF {
    float Version;
    int32_t Checksum;
    int32_t DrawLayerCount;
    struct SpriteDrawLayer DrawLayers[DrawLayerCount];
};
```

</TabItem>
</Tabs>

### Fields

#### Version

Only one version is known to appear in modern builds of the RO client. It is approximated by the value `1.0099999904632569`.

#### DrawLayers

Presumably, layers are used similarly to the [z-index CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index), but it's unclear how sprite drawing works exactly.

## References

Multiple open-source IMF decoders exist:

- [GPL-licensed implementation in C++ (Dolori)](https://gitlab.com/Dolori/Dolori/-/blob/master/src/Files/ImfRes.cpp)
- [MPL-licensed implementation in LuaJIT (RagLite SDK)](https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokIMF.lua)

There don't appear to be any other implementations, which is likely due to the limited usefulness of the format.
