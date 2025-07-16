---
slug: /file-formats/rsm
title: RSM
---

This document describes the RSM file format used in the Ragnarok Online client (and Arcturus).

## Contents

RSM files represent models that are scattered across the world, like buildings and trees.

They contain:

- Animation length or animation frames per second
- Shade type
- Alpha
- Textures
- Meshes
- Animations

From version 2.0 the extension of the files changed from `rsm` to `rsm2`.

## Features

### Animations

Models can have their positon, scale, rotation and texture UVs animated. The duration
is defined on the model and can differ from the length defined on the animation track.

The animation duration prior to version 2.2 was defined as 1000 frames per second, from 2.2
onwards there is a new member that defines how many frames there are in a second.

| Version       | Model-level position | Mesh-level position | Mesh-level rotation | Mesh-level scale | Mesh-level texture uv |
| ------------- | :------------------: | :-----------------: | :-----------------: | :--------------: | :-------------------: |
| Version 1.1\* |                      |                     |                     |                  |
| Version 1.2\* |                      |                     |                     |                  |
| Version 1.3\* |                      |                     |                     |                  |
| Version 1.4   |          ✅          |                     |         ✅          |                  |
| Version 1.5   |          ✅          |                     |         ✅          |                  |
| Version 2.2   |                      |         ✅          |         ✅          |        ✅        |
| Version 2.3   |                      |         ✅          |         ✅          |        ✅        |          ✅           |

**\* No data**

### Shading

A model can use one of 3 shading types:

- Unlit
- Flat
- Smooth

#### Unlit

Meshes of an unlit model do not take any lighting.

#### Flat

With flat shading, the normal vectors are calculated per mesh.

#### Smooth

A smooth model take advantage of smoothing groups to calculate the normal vectors, where
each vertex can be influenced by multiple faces.

### Transparency

Initially models had an alpha member, but it is said to be unused, but models can still have
transparency by the use of TGA textures.

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="1.1" label="Version 1.1" default>

:::info
No Data for this version
:::

</TabItem>
<TabItem value="1.2" label="Version 1.2" default>

:::info
No Data for this version
:::

</TabItem>
<TabItem value="1.3" label="Version 1.3" default>

:::info
No Data for this version
:::

</TabItem>
<TabItem value="1.4" label="Version 1.4" default>

```cpp title="RSM File Format (v1.4)"
struct RagnarokRSM {
    char signature[4];
    uint8_t version_major;
    uint8_t version_minor;
    int32_t animation_length;
    int32_t shade_type;
    uint8_t alpha;
    uint8_t padding[16];
    uint32_t texture_count;
    // List of length `texture_count` of strings of length 40
    char** textures;
    char root_mesh[40];
    uint32_t mesh_count;
    Mesh meshes[mesh_count];
    uint32_t position_key_frame_count;
    PositionKeyFrame position_key_frames[position_key_frame_count];
    uint32_t volume_box_count;
    VolumeBox volume_boxes[volume_box_count];
};

struct Mesh {
    char name[40];
    char parent_name[40];
    uint32_t texture_count;
    // Indexes into RagnarokRSM::textures
    int32_t textures[texture_count];
    Mat3 transformation_matrix;
    Vec3 offset;
    Vec3 position;
    float rotation_angle;
    Vec3 rotation_axis;
    Vec3 scale;
    uint32_t vertex_count
    Vec3 vertices[vertex_count];
    uint32_t uv_count;
    TextureUV uvs[uv_count];
    uint32_t face_count;
    Face faces[face_count];
    uint32_t rotation_key_frame_count;
    RotationKeyFrame rotation_key_frames[rotation_key_frame_count];
};

struct Face {
    // Index into Mesh::vertices
    uint16_t vertices[3];
    // Index into Mesh::uvs
    uint16_t uvs[3];
    // Index into Mesh::textures
    uint16_t texture_id;
    uint8_t padding[2];
    bool two_sided;
    uint8_t padding2[3];
    int32_t smoothing_group;
};

struct VolumeBox {
    Vec3 size;
    Vec3 position;
    Vec3 rotation;
    int32_t flags;
};

struct TextureUV {
    Vec4<uint8_t> color;
    Vec2 uv;
};

struct PositionKeyFrame {
    int32_t frame;
    Vec3 position;
    float data; // Unknown purpose
}

struct RotationKeyFrame {
    int32_t frame;
    Vec4 quaternion;
}
```

</TabItem>
<TabItem value="1.5" label="Version 1.5" default>

```cpp title="RSM File Format (v1.5)"
struct RagnarokRSM {
    char signature[4];
    uint8_t version_major;
    uint8_t version_minor;
    int32_t animation_length;
    int32_t shade_type;
    uint8_t alpha;
    uint8_t padding[16];
    uint32_t texture_count;
    // List of length `texture_count` of strings of length 40
    char** textures;
    char root_mesh[40];
    uint32_t mesh_count;
    Mesh meshes[mesh_count];
    uint32_t position_key_frame_count;
    PositionKeyFrame position_key_frames[position_key_frame_count];
    uint32_t volume_box_count;
    VolumeBox volume_boxes[volume_box_count];
    // diff-add
    uint8_t padding2[4];
};

struct Mesh {
    char name[40];
    char parent_name[40];
    uint32_t texture_count;
    // Indexes into RagnarokRSM::textures
    int32_t textures[texture_count];
    Mat3 transformation_matrix;
    Vec3 offset;
    Vec3 position;
    float rotation_angle;
    Vec3 rotation_axis;
    Vec3 scale;
    uint32_t vertex_count
    Vec3 vertices[vertex_count];
    uint32_t uv_count;
    TextureUV uvs[uv_count];
    uint32_t face_count;
    Face faces[face_count];
    uint32_t rotation_key_frame_count;
    RotationKeyFrame rotation_key_frames[rotation_key_frame_count];
};

struct Face {
    // Index into Mesh::vertices
    uint16_t vertices[3];
    // Index into Mesh::uvs
    uint16_t uvs[3];
    // Index into Mesh::textures
    uint16_t texture_id;
    uint8_t padding[2];
    bool two_sided;
    uint8_t padding2[3];
    int32_t smoothing_group;
};

struct VolumeBox {
    Vec3 size;
    Vec3 position;
    Vec3 rotation;
    int32_t flags;
};

struct TextureUV {
    Vec4<uint8_t> color;
    Vec2 uv;
};

struct PositionKeyFrame {
    int32_t frame;
    Vec3 position;
    float data; // Unknown purpose
}

struct RotationKeyFrame {
    int32_t frame;
    Vec4 quaternion;
}
```

</TabItem>
<TabItem value="2.2" label="Version 2.2" default>

```cpp title="RSM File Format (v2.2)"
struct RagnarokRSM {
    char signature[4];
    uint8_t version_major;
    uint8_t version_minor;
    int32_t animation_length;
    int32_t shade_type;
    uint8_t alpha;
    // diff-add
    float frames_per_second;
    // diff-remove
    uint8_t padding[16];
    uint32_t texture_count;
    // diff-add-start
    // List of length `texture_count` of length-prefixed strings
    char** textures;
    uint32_t root_mesh_count;
    // List of length `root_mesh_count` of length-prefixed strings
    char** root_mesh;
    // diff-add-end
    uint32_t mesh_count;
    Mesh meshes[mesh_count];
    // diff-remove-start
    uint32_t position_key_frame_count;
    PositionKeyFrame position_key_frames[position_key_frame_count];
    // diff-remove-end
    uint32_t volume_box_count;
    VolumeBox volume_boxes[volume_box_count];
    // diff-remove
    uint8_t padding2[4];
};

struct Mesh {
    // diff-add-start
    // Length-prefixed string
    char* name;
    // Length-prefixed string
    char* parent_name;
    // diff-add-end
    uint32_t texture_count;
    // Indexes into RagnarokRSM::textures
    int32_t textures[texture_count];
    Mat3 transformation_matrix;
    // diff-remove
    Vec3 offset;
    Vec3 position;
    // diff-remove-start
    float rotation_angle;
    Vec3 rotation_axis;
    Vec3 scale;
    // diff-remove-end
    uint32_t vertex_count
    Vec3 vertices[vertex_count];
    uint32_t uv_count;
    TextureUV uvs[uv_count];
    uint32_t face_count;
    Face faces[face_count];
    // diff-add-start
    uint32_t scale_key_frame_count;
    ScaleKeyFrame scale_key_frames[scale_key_frame_count];
    // diff-add-end
    uint32_t rotation_key_frame_count;
    RotationKeyFrame rotation_key_frames[rotation_key_frame_count];
    // diff-add-start
    uint32_t position_key_frame_count;
    PositionKeyFrame position_key_frames[position_key_frame_count];
    // diff-add-end
};

struct Face {
    // Index into Mesh::vertices
    uint16_t vertices[3];
    // Index into Mesh::vertices
    uint16_t vertices[3];
    // Index into RagnarokRSM::textures
    uint16_t texture_id;
    uint8_t padding[2];
    bool two_sided;
    uint8_t padding2[3];
    int32_t smoothing_group;
};

struct VolumeBox {
    Vec3 size;
    Vec3 position;
    Vec3 rotation;
    int32_t flags;
};

struct TextureUV {
    Vec4<uint8_t> color;
    Vec2 uv;
};

struct PositionKeyFrame {
    int32_t frame;
    Vec3 position;
    float data; // Unknown purpose
}

struct RotationKeyFrame {
    int32_t frame;
    Vec4 quaternion;
}

// diff-add-start
struct ScaleKeyFrame {
    int32_t frame;
    Vec3 scale;
    float data; // Unknown purpose
}
// diff-start-end
```

</TabItem>
<TabItem value="2.3" label="Version 2.3" default>

```cpp title="RSM File Format (v2.3)"
struct RagnarokRSM {
    char signature[4];
    uint8_t version_major;
    uint8_t version_minor;
    int32_t animation_length;
    int32_t shade_type;
    uint8_t alpha;
    float frames_per_second;
    // diff-remove-start
    uint32_t texture_count;
    // List of length `texture_count` of length-prefixed strings
    char** textures;
    // diff-remove-end
    uint32_t root_mesh_count;
    // List of length `root_mesh_count` of length-prefixed strings
    char** root_mesh;
    uint32_t mesh_count;
    Mesh meshes[mesh_count];
    uint32_t volume_box_count;
    VolumeBox volume_boxes[volume_box_count];
};

struct Mesh {
    // Length-prefixed string
    char* name;
    // Length-prefixed string
    char* parent_name;
    uint32_t texture_count;
    // diff-add-start
    // List of length `texture_count` of length-prefixed strings
    char** textures;
    // diff-add-end
    Mat3 transformation_matrix;
    Vec3 position;
    uint32_t vertex_count
    Vec3 vertices[vertex_count];
    uint32_t uv_count;
    TextureUV uvs[uv_count];
    uint32_t face_count;
    Face faces[face_count];
    uint32_t scale_key_frame_count;
    ScaleKeyFrame scale_key_frames[scale_key_frame_count];
    uint32_t rotation_key_frame_count;
    RotationKeyFrame rotation_key_frames[rotation_key_frame_count];
    uint32_t position_key_frame_count;
    PositionKeyFrame position_key_frames[position_key_frame_count];
    // diff-add-start
    uint32_t texture_animation_count;
    TextureAnimation texture_animations[texture_animation_count];
    // diff-add-end
};

struct Face {
    // Index into Mesh::vertices
    uint16_t vertices[3];
    // Index into Mesh::uvs
    uint16_t uvs[3];
    // Index into Mesh::textures
    uint16_t texture_id;
    uint8_t padding[2];
    bool two_sided;
    uint8_t padding2[3];
    int32_t smoothing_group;
};

struct VolumeBox {
    Vec3 size;
    Vec3 position;
    Vec3 rotation;
    int32_t flags;
};

struct TextureUV {
    Vec4<uint8_t> color;
    Vec2 uv;
};

struct PositionKeyFrame {
    int32_t frame;
    Vec3 position;
    float data; // Unknown purpose
}

struct RotationKeyFrame {
    int32_t frame;
    Vec4 quaternion;
}

struct ScaleKeyFrame {
    int32_t frame;
    Vec3 scale;
    float data; // Unknown purpose
}

// diff-add-start
struct TextureAnimation {
    int32_t texture_id;
    int32_t animation_count;
    Animation animations[animation_count];
}

struct Animation {
    int32_t animation_type;
    int32_t animation_frame_count;
    AnimationFrame animation_frames[animation_frame_count];
}

struct AnimationFrame {
    int32_t frame;
    float offset;
}
// diff-add-end
```

</TabItem>
</Tabs>
