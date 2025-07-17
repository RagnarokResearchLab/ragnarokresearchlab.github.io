---
slug: /file-formats/rsm-wip
title: RSM
---

This document describes the RSM file format used in the Ragnarok Online client (and Arcturus).

## Contents

RSM files store 3D models as a transformation hierarchy consisting of one or multiple transformation nodes:

- The primary contents are geometry and transformations for the various [meshes](https://en.wikipedia.org/wiki/Polygon_mesh) that make up the model
- Also included is animation data in the form of [keyframes](https://docs.blender.org/manual/en/latest/animation/keyframes/introduction.html), which can be interpolated at runtime by the client
- There's some debate about the exact layout of older versions, but the fields in question appear to be unused

The format has undergone major changes at some point after the [Renewal update](https://irowiki.org/wiki/Renewal), so two rather different versions exist.

## Features

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="1.4" label="Version 1.4">

```cpp title="RSM File Format (v1.4)"
struct NullTerminatedString{
    char Buffer[40];
};

struct Vector3D{
    float x;
    float y;
    float z;
};

struct Matrix4D {

};

struct Mesh{
    struct NullTerminatedString NodeName;
    struct NullTerminatedString ParentNodeName;
    int32_t TextureIndicesCount;
    int32_t DiffuseTextureIndices[TextureIndicesCount];
};

struct RagnarokRSM {
    char Signature[3];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    int32_t VersionDependentAnimationLength;
    int32_t ShadingModeID;
    uint8_t ModelOpacity;
    char UnusedZeroBytes[16];
    int32_t TextureCount;
    struct NullTerminatedString DiffuseTexturePaths[TextureCount];
    struct NullTerminatedString RootNodeName;
    int32_t MeshCount;
    struct Mesh Meshes[MeshCount];
};
```

</TabItem>
<TabItem value="1.5" label="Version 1.5">

```cpp title="RSM File Format (v1.5)"
struct NullTerminatedString{
    char Buffer[40];
};

struct Mesh{
    struct NullTerminatedString NodeName;
    struct NullTerminatedString ParentNodeName;
    int32_t TextureIndicesCount;
    int32_t DiffuseTextureIndices[TextureIndicesCount];
};

struct RagnarokRSM {
    char Signature[3];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    int32_t VersionDependentAnimationLength;
    int32_t ShadingModeID;
    uint8_t ModelOpacity;
    char UnusedZeroBytes[16];
    int32_t TextureCount;
    struct NullTerminatedString DiffuseTexturePaths[TextureCount];
    struct NullTerminatedString RootNodeName;
    int32_t MeshCount;
    struct Mesh Meshes[MeshCount];
};
```

</TabItem>
<TabItem value="2.2" label="Version 2.2">

```cpp title="RSM File Format (v2.2)"
// diff-remove-start
struct NullTerminatedString{
    char Buffer[40];
};
// diff-remove-end
// diff-add-start
struct CountedString{
    int32_t Size;
    char Buffer[Size];
};
// diff-add-end

struct Mesh{
    // diff-remove-start
    struct NullTerminatedString NodeName;
    struct NullTerminatedString ParentNodeName;
    // diff-remove-end
    // diff-add-start
    struct CountedString NodeName;
    struct CountedString ParentNodeName;
    // diff-add-end
    int32_t TextureIndicesCount;
    int32_t DiffuseTextureIndices[TextureIndicesCount];
};

struct RagnarokRSM {
    char Signature[3];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    int32_t VersionDependentAnimationLength;
    int32_t ShadingModeID;
    uint8_t ModelOpacity;
    // diff-remove
    char UnusedZeroBytes[16];
    // diff-add
    float AnimationSpeedFPS;
    int32_t TextureCount;
    // diff-remove-start
    struct NullTerminatedString DiffuseTexturePaths[TextureCount];
    struct NullTerminatedString RootNodeName;
    // diff-remove-end
    // diff-add-start
    struct CountedString DiffuseTexturePaths[TextureCount];
    int32_t RootNodeCount;
    struct CountedString RootNodeNames[RootNodeCount];
    // diff-add-end
    int32_t MeshCount;
    struct Mesh Meshes[MeshCount];
};
```

</TabItem>
<TabItem value="2.3" label="Version 2.3">

```cpp title="RSM File Format (v2.3)"
struct CountedString{
    int32_t Size;
    char Buffer[Size];
};

struct Mesh{
    struct CountedString NodeName;
    struct CountedString ParentNodeName;
    // diff-remove-start
    int32_t TextureIndicesCount;
    int32_t DiffuseTextureIndices[TextureIndicesCount];
    // diff-remove-end
    // diff-add-start
    int32_t TextureCount;
    struct NullTerminatedString DiffuseTexturePaths[TextureCount];
    // diff-add-end
};

struct RagnarokRSM {
    char Signature[3];
    uint8_t VersionMajor;
    uint8_t VersionMinor;
    int32_t VersionDependentAnimationLength;
    int32_t ShadingModeID;
    uint8_t ModelOpacity;
    float AnimationSpeedFPS;
    // diff-remove-start
    int32_t TextureCount;
    struct NullTerminatedString DiffuseTexturePaths[TextureCount];
    // diff-remove-end
    int32_t RootNodeCount;
    struct CountedString RootNodeNames[RootNodeCount];
    int32_t MeshCount;
    struct Mesh Meshes[MeshCount];
};
```

</TabItem>
</Tabs>

## References

Multiple open-source RSM decoders exist:

- [GPL-licensed implementation in JavaScript (RoBrowser)](https://github.com/MrAntares/roBrowserLegacy/blob/master/src/Loaders/Model.js)
- [MIT-licensed implementation in Rust (Korangar)](https://github.com/vE5li/korangar/blob/main/src/loaders/model/mod.rs)
- [MPL-licensed implementation in LuaJIT (RagLite SDK)](https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokRSM.lua)

This list only includes actively-maintained versions; [various other community projects](/community-projects) may also be of interest.