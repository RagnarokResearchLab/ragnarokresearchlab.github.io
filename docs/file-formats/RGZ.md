---
slug: /file-formats/RGZ
title: RGZ
---

This document describes the RGZ file format used in the Ragnarok Online client.

## Contents

RGZ files are [gzip-compressed](https://en.wikipedia.org/wiki/Gzip) patch files used to update [GRF](/file-formats/grf) archives.

## Layout

Each RGZ archive contains an array of file and directory entries that should be applied to the GRF:

|      Field       |  Offset  |  Length  |   Type   |                                                           Description                                                           |
| :--------------: | :------: | :------: | :------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|   `EntryType`    |    0     |    1     |  `char`  |                           Directory entry (`'d'`), end-of-file symbol (`'e'`), or file entry (`'f'`)                            |
| `FileNameLength` |    1     |    1     | `uint8`  |                                         Length of the file name (`string`) that follows                                         |
|    `FileName`    |    2     | variable | `string` | Null-terminated, but at most `FileNameLength` bytes (with encoding: [CP949](https://en.wikipedia.org/wiki/Unified_Hangul_Code)) |
|    `FileSize`    | variable | variable | `uint32` |                              File entries only: Length of the file contents (`blob`) that follows                               |
|  `FileContents`  | variable | variable |  `blob`  |                                    Only present for file entries; otherwise skip this field                                     |

This structure is repeated until the EOF entry `'e'` with name `"end"` is encountered, which must always be the final entry.

## See also

- [Description of the RGZ format](https://github.com/rathena/rathena/wiki/RGZ) (rAthena Wiki)
