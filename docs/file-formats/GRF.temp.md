## Supported Features

The most interesting features of this format are the various compression and encryption algorithms used:

| Version |  Compression   | Encryption | TBD |                         Description                         |
| :-----: | :------------: | :--------: | :-: | :---------------------------------------------------------: |
|   PAK   |  RLE variant   |    ---     | --- | Primitive format, DIY compression (PITA) - the rest is easy |
|  Alpha  |      TBD       |    TBD     | TBD |            Should be mostly the same as PAK (?)             |
|   1.2   |      TBD       |    TBD     | TBD |                             TBD                             |
|   1.3   |      TBD       |    TBD     | TBD |                             TBD                             |
|   2.0   | INFLATE (zlib) |    TBD     | TBD |    zlib INFLATE compression, DES/MixCrypt "homebrew" (?)    |

### Alpha (GRF)

This is a slight modification of the PAK format used in Arcturus, with only a few minor changes:

- The file names are encoded (**TBD: How?**)
- Paths use Windows BACKSLASH characters as path separators (?)
- The "header" (footer) looks slightly differently (\*_TBD: Confirm/research_)

This version was used in the iRO alpha client. For details see [this implementation](https://github.com/exectails/GrfUnpack) (more research is needed).

---

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

---

> The files turned out to be compressed with a variant of the LZ-compression algorithm

_Source: [GrfExtractor](http://qluster.net/software/grfextractor/)_

> Najara's reply is a bit off the mark. The alpha and beta clients didn't use the format known as GRF today. Instead they used a modified version of an archive format from one of Gravity's older games. This format has a different structure and also uses a different compression algorithm, so it can't be extracted by tools aimed at the current format. GrfExtractor by Wdb is one of the few public tools which can handle the old format.

Source: https://rathena.org/board/topic/89383-download-link-for-adatagrf-and-for-ragnarok-beta-client/

Misc sources (TBD):

- https://github.com/rathena/rathena/wiki/GRF-Encryption
- https://github.com/zhad3/zgrf
- ***

Compression schemes:

Arcturus PAK (and early GRF) = Homebrew RLE?

Later: zlib inflate (2.0)

> The algorithm appears to be a simple variant of a compression algorithm known as Run-Length Encoding (RLE). However, it is not an exact implementation of RLE, as RLE usually works by compressing runs of identical bytes or symbols, whereas this algorithm compresses runs of previously-occurred bytes.

> To explain how the algorithm works, I'll provide a brief overview of the steps:

> The compressed data is read in chunks of 8 bits each, where each bit in the chunk is used to determine whether the next byte in the uncompressed data is a single byte or a sequence of previously-occurring bytes.

> If the current bit in the chunk is 1, the next two bytes in the compressed data are read. These two bytes are then used to determine the length and offset of a sequence of previously-occurring bytes in the uncompressed data. The length is determined by the first nibble (4 bits) of the second byte plus 2, and the offset is determined by the second nibble of the second byte plus the first byte, treated as a 16-bit integer. The sequence of bytes is then copied from the position specified by the offset to the current position in the uncompressed data.

> If the current bit in the chunk is 0, the next byte in the compressed data is simply copied to the current position in the uncompressed data.

> The process repeats for each bit in the compressed data until all of the compressed data has been read and decompressed.

> The resulting output is a decompressed version of the original data.

> While this algorithm is not an exact implementation of RLE, it shares some similarities with RLE in that it compresses runs of previously-occurring bytes. However, it is a much simpler algorithm than most common compression/decompression algorithms, such as gzip or LZ77/LZ78, and as a result, may not achieve as high a compression ratio as those algorithms.

> Why would you want to add +2 to the nibble?

> The reason for adding +2 to the nibble is to adjust for the fact that the length value stored in the nibble is a 4-bit integer, which can represent values from 0 to 15. Since a sequence of 0 bytes would not actually require any bytes to be copied, and a sequence of 1 byte would only require 1 byte to be copied, the minimum sequence length that needs to be encoded is 2. Therefore, by adding 2 to the length value stored in the nibble, the algorithm ensures that the minimum length encoded is 2, and that the maximum length encoded is 17 (since the maximum value a nibble can represent is 15).

> For example, if the nibble value is 0, this would correspond to a length of 2 (0+2=2). If the nibble value is 1, this would correspond to a length of 3 (1+2=3), and so on up to a nibble value of 13, which would correspond to a length of 15 (13+2=15). If the nibble value is 14 or 15, this would correspond to a length of 16 or 17, respectively, which is the maximum length that can be encoded using this scheme.

---

> The input to the algorithm is a compressed data stream, which is a sequence of bytes that represents the compressed data. The compressed data stream consists of a series of blocks, where each block represents a chunk of uncompressed data. Each block starts with a byte that represents a bit mask, which is used to determine whether the next 8 bytes in the block are compressed or uncompressed. If the i-th bit of the mask is set to 1, then the i-th byte in the block is compressed; otherwise, it is uncompressed.

> If a byte is uncompressed, it is simply copied to the output buffer. If it is compressed, the next 2 bytes are read as a 16-bit integer, where the first 4 bits represent the length of the copy operation (i.e., how many bytes to copy from the previously uncompressed data), and the remaining 12 bits represent the offset of the copy operation (i.e., where to start copying from). The length of the copy operation can range from 2 to 18 bytes, and the offset can range from 1 to 4096 bytes.

> The compressed data is then decompressed by copying bytes from the previously uncompressed data buffer to the output buffer. Once all blocks have been processed, the output buffer contains the decompressed data.

---

> The algorithm is a custom, simple compression scheme that works on the principle of copying previously seen sequences of bytes within the uncompressed data. It operates on a byte-by-byte basis, using a control byte (mask) to determine how subsequent bytes should be processed.

High-level description of the algorithm:

```txt
    A control byte (mask) is read from the input.

    For each bit in the mask (from least significant to most significant), do:
    a. If the bit is 1, read the next two bytes, which provide offset and length information.
		Copy a sequence of bytes from the output buffer back onto itself using this information.
    b. If the bit is 0, copy the next byte from the input to the output buffer.
    Repeat steps 1-2 until the entire input has been processed.
```

> This technique is somewhat reminiscent of LZ77 or LZ78, which leverage previously seen data for compression, but it is implemented in a more basic and less efficient way.
