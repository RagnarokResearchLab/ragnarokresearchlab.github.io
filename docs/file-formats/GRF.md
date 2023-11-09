---
slug: /file-formats/grf
title: GRF
---

This document describes the GRF file format used in the Ragnarok Online client.

## Contents

GRF files are virtual file system containers not unlike ZIP archives. The main features are:

- By streaming game assets more efficiently they may help reduce loading times
- Optional support for multiple data compression and encryption schemes
- Compressing files greatly reduces the amount of storage space on disk

The GRF format is closely related to PAK files used in Arcturus, which are an earlier implementation of the same concept.

## Layout

### Arcturus (PAK)

The PAK file format used in Arcturus is nearly identical to early versions of the GRF format.

|     Field      |  Offset  |  Length  |       Type        |                            Description                             |
| :------------: | :------: | :------: | :---------------: | :----------------------------------------------------------------: |
| `StorageBytes` |    0     | variable |      `blob`       |       The compressed file records (contents of the archive)        |
| `FileRecords`  | variable | variable |      `array`      |   A list of file records describing the compressed byte storage    |
|    `Footer`    | variable |    4     | `ArchiveMetadata` | "Header" containing the location and size of the file records list |

Due to the large size, this structure shouldn't be read into memory. It's listed purely for illustration purposes.

#### Archive Metadata

The metadata required for reading file records, located at the end of the file (at offset `EOF - sizeof(ArchiveMetadata)`).

|     Field     | Offset | Length |  Type  |                           Description                            |
| :-----------: | :----: | :----: | :----: | :--------------------------------------------------------------: |
| `StartOffset` |   0    |   4    | `uint` | Relative offset (from the start of the file) of the first record |
| `NumRecords`  |   4    |   4    | `uint` |            How many records there are in this archive            |
| `VersionTag`  |   8    |   1    | `byte` |                  Always `0x12` (decimal: `18`)                   |

#### File Records

Each record describes where in the archive a given file can be found, and what options to pass to the decompressor.

|       Field        | Offset |  Length  |   Type   |                           Description                            |
| :----------------: | :----: | :------: | :------: | :--------------------------------------------------------------: |
|  `PathStringSize`  |   0    |    1     |  `byte`  |  Size of the entry's path name (excluding the null terminator)   |
|       `Type`       |   0    |    1     |  `byte`  | `1` for "file" and `2` for "directory" (?) - needs more research |
|      `Offset`      |   0    |    4     |  `int`   |         Relative offset (from the start of the archive)          |
|  `CompressedSize`  |   0    |    4     |  `int`   |         Size of the compressed buffer area for this file         |
| `DecompressedSize` |   0    |    4     |  `int`   |         Size of the entry after decompressing the buffer         |
|     `FilePath`     |   0    | variable | `string` |      Null-terminated C string of size `PathStringSize + 1`       |

### Version 1.2

This version has been used in at least the fRO client.

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

More research is needed on this topic.

### Version 1.3

This version has been used in at least the 2003 iRO Beta client.

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

More research is needed on this topic.

### Version 2.0

This is the GRF version used in the latest kRO client, as well as regional clients dating back to at least 2004.

|        Field         | Offset | Length |   Type   |                              Description                              |
| :------------------: | :----: | :----: | :------: | :-------------------------------------------------------------------: |
|     `Signature`      |   0    |   15   | `string` | Always `"Master of Magic"` (fixed-size, _without_ a null-terminator)  |
|   `EncryptionKey`    |   15   |   15   | `string` | Array of `byte` values; all zeroes if encryption isn't used (default) |
|  `FileTableOffset`   |   30   |   4    |  `uint`  |  Where the file table is stored (relative to the start of the file)   |
|   `ScramblingSeed`   |   34   |   4    |  `uint`  |      Seemingly used for obfuscating the contents of the archive       |
| `ScrambledFileCount` |   38   |   4    |  `uint`  |   Subtract `ScramblingSeed` and `7` to compute the real `FileCount`   |
|      `Version`       |   42   |   4    |  `uint`  |      Encodes the version in major.minor format (two bytes each)       |

#### File Table

This is the manifest of the archive, stored at an arbitrary position in the file (defined by `FileTableOffset`).

|           Field           | Offset |  Length  |  Type  |                       Description                        |
| :-----------------------: | :----: | :------: | :----: | :------------------------------------------------------: |
|     `CompressedSize`      |   0    |    4     | `uint` | Compressed size of the file table (list of file entries) |
|    `DecompressedSize`     |   4    |    4     | `uint` |      Size of the file table after decompressing it       |
| `CompressedRecordHeaders` |   8    | variable | `blob` |  Compressed buffer (use zlib's `inflate` to decompress)  |

These parameters all have to be passed to the decompressor in order to unpack the list of file records.

#### File Entries

After unpacking the `CompressedRecordHeaders` buffer, you'll get a list of these file records ("headers").

|       Field        | Offset | Length |  Type  |                           Description                            |
| :----------------: | :----: | :----: | :----: | :--------------------------------------------------------------: |
|  `CompressedSize`  |   0    |   4    | `uint` |   How large the compressed file contents are (zlib parameter)    |
| `ByteAlignedSize`  |   4    |   4    | `uint` | How many bytes to actually read (padded to next 8-byte boundary) |
| `DecompressedSize` |   8    |   4    | `uint` |    Size of the actual file contents (another zlib parameter)     |
|       `Type`       |   12   |   1    | `byte` |   Whether the file is stored raw, compressed, or encrypted (?)   |
|      `Offset`      |   13   |   4    | `uint` |  Where in the archive the compressed file contents can be found  |

You can pass the compressed/aligned buffer to zlib's `inflate` to unpack a given file.

## References

- [An older description of the GRF 2.0 format (written by Tiera)](https://rathena.org/board/topic/57175-description-of-the-grf-file-format/)
- [Example code for the EUC-KR path conversion](/tools/#euc-kr-path-conversion) (using JavaScript/NodeJS)
