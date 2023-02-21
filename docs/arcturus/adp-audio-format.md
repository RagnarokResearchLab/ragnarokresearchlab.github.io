---
sidebar_position: 1
slug: /arcturus/adp-audio
title: ADP Audio Format
---

This format appears only in Arcturus (for music files), but not in RO.

## Background

[Sonnori](https://www.mobygames.com/company/sonnori-co-ltd) worked with Gravity to create Arcturus. It seems they created the audio format?

## Format Details

I don't know the first thing about audio, but here's some random Google results (don't ask me what it means):

> They're basically IMA APC ADPCM

Source: [https://www.romhacking.net/forum/index.php?topic=23958.200](https://www.romhacking.net/forum/index.php?topic=23958.200)

> Looks like some VOX/OKI variation.
> You can make it somewhat playable with a TXTP file + vgmstream:

```txth
.adp.txth:

<small>codec = OKI16
sample_rate = @0x04
channels = @0x08
start_offset = @0x00
num_samples = @0x0c / channels
</small>
```

TXTH format: [https://github.com/vgmstream/vgmstream/blob/master/doc/TXTH.md](https://github.com/vgmstream/vgmstream/blob/master/doc/TXTH.md)

How to play back/decode:

> ffmpeg with -acodec adpcm_ima_apc - works perfectly.

> Latest ffmpeg won't help you with that format. Only earlier.

Source: [https://www.hcs64.com/mboard/forum.php?showthread=61864](https://www.hcs64.com/mboard/forum.php?showthread=61864)

https://www.romhacking.net/forum/index.php?topic=23958.200

## Tools

Possibly useful:

* [https://github.com/dbry/adpcm-xq](https://github.com/dbry/adpcm-xq)
* [https://github.com/vgmstream/vgmstream](https://github.com/vgmstream/vgmstream)
