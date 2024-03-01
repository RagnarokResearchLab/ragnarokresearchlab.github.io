---
sidebar_position: 400
slug: /rendering/water-surfaces
title: Water Surfaces
---

This document describes how water planes are rendered by the Ragnarok Online client.

## Overview

### Water Types

Lava: Requires special handling, ambient contribution

The rest: Regular alpha blending, no ambient contribution

Examples:

0. Amatsu (`amatsu`)
1. `ein_fild09`
2. `comodo`
3. `iz_dun01`
4. `mag_dun01`
5. `tur_dun03`
6. `mag_dun03`
7. `spl_in01`
8. `bra_fild01`
9. `lasa_dun02`
10. `icecastle`

### Transparency

Link to scene lighting/alpha blending stage

### Waveform Animations

TBD: Link to Animation systems (clock generator)?

No animations:

### Culling

Only in camera FOV, can find glitches when it fails (zoom out, will have missing geometry at the edge of the screen) - due to naive culling implementation
