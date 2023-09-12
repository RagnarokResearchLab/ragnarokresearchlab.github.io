---
slug: /file-formats/gr2
title: GR2 Format Specification
---

This document describes the GR2 file format used in the Ragnarok Online client.

## Contents

GR2 files are binary data stores created by the proprietary [Granny3D](http://www.radgametools.com/granny.html) SDK. They contain the following:

- 3D mesh geometry and textures for the WoE guardians, emperium, treasure box, and guild flag
- Skeletons and pose animations for the above models (in separate files, one per model and pose)
- Some leftover (unfinished) data for a potential 3D Novice-class player character

Although the format is widely used in the games industry, only the specific version used in RO is referenced here.

## Layout

The layout is quite complex and has been described elsewhere:

- A great description is found at the [OpenGR2 wiki](https://github.com/arves100/opengr2/wiki/File-Format-documentation), which contains many details worth reading
- The [previous version](https://github.com/rdw-archive/RagnarokFileFormats/blob/master/GR2.MD) of this documentation is still available (warning: may contain inaccuracies and errors)
- Alternate implementations exist on GitHub, several of which are listed in the above document

As of 2023, there appears to be no third-party implementation that doesn't rely on the `granny2.dll` in at least some way.

## Oodle Compression

This is just a quick correction to the original article, which mentions the use of Huffman tables.

According to [this blog comment by Fabian Giesen](https://fgiesen.wordpress.com/2022/04/04/entropy-decoding-in-oodle-data-huffman-decoding-on-the-jaguar/#comment-23605) (of RAD), Oodle-0 is actually
using a standard [Lempel-Ziv-77](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) compressor combined with a (presumably adaptive) [arithmetic encoder](https://en.wikipedia.org/wiki/Arithmetic_coding). Indeed it appears that the compressed GR2 sections are fed into the AE decoder and then the LZ decompressor, though the specifics of how the AE works aren't exactly clear to me.
