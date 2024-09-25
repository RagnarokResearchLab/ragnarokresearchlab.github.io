---
slug: /file-formats/act
title: ACT
---

This document describes the ACT file format used in the Ragnarok Online client (and Arcturus).

## Contents

ACT files store the animation data for [2D sprites](/rendering/animation-systems#sprite-animations), compiled as a single binary file:

- Animation clips for different states of the rendered object (usually character poses)
- Markers for special "events', such as SFX audio playback and triggering the floating combat text
- Frame timings to control how long the various animation frames should be displayed

For static images, such as items dropped on the floor, the animation data will usually be just a single "idle" pose.

## Features

### Sprite Anchors

Modern versions of the format support anchor points to implement relative positioning of one sprite in respect to another sprite. This technique is used extensively in the game, e.g., to position the head of player characters relative to the body (and for weapons, shield sprites, and headgears). All sprites are attached to the body only; other anchors seem to be ignored.

### Animation Events

Each sprite layer may refer to an element of the event list appended at the end of the ACT file. The system allows configuring arbitrary events that should be triggered when the given animation frame is rendered, but only a few types are actually used.

Here's the list of all known animation events:

- `atk`: Start showing the floating combat text for the hit that triggered the "flinch" animation to play
- Any sound file name (event name ending in `.wav`): Start playing the effect, if any audio channels are available

It's possible other events may exist in [Arcturus](/arcturus) or legacy builds of the RO client, but more research is needed.

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="2.0" label="Version 2.0">

```cpp title="ACT File Format (v2.0)"
struct SpriteLayer {
    int32_t PositionU;
    int32_t PositionV;
    int32_t SpritesheetCellIndex;
    int32_t IsFlippedV;
    uint8_t ColorTintRed;
    uint8_t ColorTintGreen;
    uint8_t ColorTintBlue;
    uint8_t ColorTintAlpha;
    float Scale;
    int32_t RotationDegrees;
    int32_t ImageTypeID;
};

struct AnimationFrame {
    uint8_t UnusedMysteryBytes[32];
    uint32_t SpriteLayerCount;
    struct SpriteLayer SpriteLayers[SpriteLayerCount];
    int32_t AnimationEventID;
};

struct AnimationClip {
    uint32_t AnimationFrameCount;
    struct AnimationFrame AnimationFrames[AnimationFrameCount];
};

struct RagnarokACT {
    char Signature[2];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
};
```

</TabItem>
<TabItem value="2.1" label="Version 2.1">

```cpp title="ACT File Format (v2.1)"
struct SpriteLayer {
    int32_t PositionU;
    int32_t PositionV;
    int32_t SpritesheetCellIndex;
    int32_t IsFlippedV;
    uint8_t ColorTintRed;
    uint8_t ColorTintGreen;
    uint8_t ColorTintBlue;
    uint8_t ColorTintAlpha;
    float Scale;
    int32_t RotationDegrees;
    int32_t ImageTypeID;
};

struct AnimationFrame {
    uint8_t UnusedMysteryBytes[32];
    uint32_t SpriteLayerCount;
    struct SpriteLayer SpriteLayers[SpriteLayerCount];
    int32_t AnimationEventID;
};

struct AnimationClip {
    uint32_t AnimationFrameCount;
    struct AnimationFrame AnimationFrames[AnimationFrameCount];
};

// diff-add-start
struct AnimationEvent{
    char Name[40];
};
// diff-add-end

struct RagnarokACT {
    char Signature[2];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
	// diff-add-start
    int32_t AnimationEventCount;
    struct AnimationEvent AnimationEvents[AnimationEventCount];
	// diff-add-end
};
```

</TabItem>
<TabItem value="2.3" label="Version 2.3">

```cpp title="ACT File Format (v2.3)"
struct SpriteLayer {
    int32_t PositionU;
    int32_t PositionV;
    int32_t SpritesheetCellIndex;
    int32_t IsFlippedV;
    uint8_t ColorTintRed;
    uint8_t ColorTintGreen;
    uint8_t ColorTintBlue;
    uint8_t ColorTintAlpha;
    float Scale;
    int32_t RotationDegrees;
    int32_t ImageTypeID;
};

// diff-add-start
struct SpriteAnchor{
    uint8_t UnusedMysteryBytes[4];
    int32_t PositionU;
    int32_t PositionV;
    int32_t UnknownFlag;
};
// diff-add-end

struct AnimationFrame {
    uint8_t UnusedMysteryBytes[32];
    uint32_t SpriteLayerCount;
    struct SpriteLayer SpriteLayers[SpriteLayerCount];
    int32_t AnimationEventID;
    // diff-add-start
    int32_t SpriteAnchorCount;
    struct SpriteAnchor AnchorPoints[SpriteAnchorCount];
    // diff-add-end
};

struct AnimationClip {
    uint32_t AnimationFrameCount;
    struct AnimationFrame AnimationFrames[AnimationFrameCount];
};

struct AnimationEvent{
    char Name[40];
};

struct RagnarokACT {
    char Signature[2];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
    int32_t AnimationEventCount;
    struct AnimationEvent AnimationEvents[AnimationEventCount];
	// diff-add
    float FrameTimes[AnimationClipCount];
};
```

</TabItem>
<TabItem value="2.4" label="Version 2.4">

```cpp title="ACT File Format (v2.4)"
struct SpriteLayer {
    int32_t PositionU;
    int32_t PositionV;
    int32_t SpritesheetCellIndex;
    int32_t IsFlippedV;
    uint8_t ColorTintRed;
    uint8_t ColorTintGreen;
    uint8_t ColorTintBlue;
    uint8_t ColorTintAlpha;
    // diff-remove
    float Scale;
    // diff-add-start
    float ScaleU;
    float ScaleV;
    // diff-add-end
    int32_t RotationDegrees;
    int32_t ImageTypeID;
};

struct SpriteAnchor{
    uint8_t UnusedMysteryBytes[4];
    int32_t PositionU;
    int32_t PositionV;
    int32_t UnknownFlag;
};

struct AnimationFrame {
    uint8_t UnusedMysteryBytes[32];
    uint32_t SpriteLayerCount;
    struct SpriteLayer SpriteLayers[SpriteLayerCount];
    int32_t AnimationEventID;
    int32_t SpriteAnchorCount;
    struct SpriteAnchor AnchorPoints[SpriteAnchorCount];
};

struct AnimationClip {
    uint32_t AnimationFrameCount;
    struct AnimationFrame AnimationFrames[AnimationFrameCount];
};

struct AnimationEvent{
    char Name[40];
};

struct RagnarokACT {
    char Signature[2];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
    int32_t AnimationEventCount;
    struct AnimationEvent AnimationEvents[AnimationEventCount];
    float FrameTimes[AnimationClipCount];
};
```

</TabItem>
<TabItem value="2.5" label="Version 2.5">

```cpp title="ACT File Format (v2.5)"
struct SpriteLayer {
    int32_t PositionU;
    int32_t PositionV;
    int32_t SpritesheetCellIndex;
    int32_t IsFlippedV;
    uint8_t ColorTintRed;
    uint8_t ColorTintGreen;
    uint8_t ColorTintBlue;
    uint8_t ColorTintAlpha;
    float Scale;
    float ScaleU;
    float ScaleV;
    int32_t RotationDegrees;
    int32_t ImageTypeID;
    // diff-add-start
    int32_t ImageWidth;
    int32_t ImageHeight;
    // diff-add-end
};

struct SpriteAnchor{
    uint8_t UnusedMysteryBytes[4];
    int32_t PositionU;
    int32_t PositionV;
    int32_t UnknownFlag;
};

struct AnimationFrame {
    uint8_t UnusedMysteryBytes[32];
    uint32_t SpriteLayerCount;
    struct SpriteLayer SpriteLayers[SpriteLayerCount];
    int32_t AnimationEventID;
    int32_t SpriteAnchorCount;
    struct SpriteAnchor AnchorPoints[SpriteAnchorCount];
};

struct AnimationClip {
    uint32_t AnimationFrameCount;
    struct AnimationFrame AnimationFrames[AnimationFrameCount];
};

struct AnimationEvent{
    char Name[40];
};

struct RagnarokACT {
    char Signature[2];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
    int32_t AnimationEventCount;
    struct AnimationEvent AnimationEvents[AnimationEventCount];
    float FrameTimes[AnimationClipCount];
};
```

</TabItem>
</Tabs>

### Fields

#### Signature

Uniquely identifies the file format. Must always be `"AC"` (ASCII-encoded, fixed-size string).

#### Version

Signals the presence of optional features. For reasons unknown, the minor and major version bytes are swapped here.

#### FrameTimes

The times are given in the unit of "ticks per displayed frame". Multiply by `24` to get the time in milliseconds ([why?](/rendering/animation-systems/#act-frame-times)).

## References

Multiple open-source ACT decoders exist:

- [GPL-licensed implementation in JavaScript (RoBrowser)](https://github.com/MrAntares/roBrowserLegacy/blob/master/src/Loaders/Action.js)
- [MIT-licensed implementation in Rust (Korangar)](https://github.com/vE5li/korangar/blob/main/src/loaders/action/mod.rs)
- [MPL-licensed implementation in LuaJIT (RagLite SDK)](https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokACT.lua)

This list only includes actively-maintained versions; [various other community projects](/community-projects) may also be of interest.
