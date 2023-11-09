---
slug: /file-formats/ebm
title: EBM
---

This document describes the EBM file format used in the Ragnarok Online client.

## Contents

EBM files contain compressed image data and are used exclusively to represent guild emblems.

## Layout

The binary layout is irrelevant in practice: They're [Bitmap (BMP)](https://en.wikipedia.org/wiki/Bitmap_file_format) files compressed with the standard zlib [DEFLATE](https://en.wikipedia.org/wiki/Deflate) algorithm.

If you're interested in learning how to programmatically process guild emblems, see [Tools/ebm-export-with-zlib](/tools/#ebm-export-with-zlib).
