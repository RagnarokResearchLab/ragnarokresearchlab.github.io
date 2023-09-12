---
slug: /tools
---

# Developer Tools

This page contains miscellaneous utilities that may be of interest, but don't warrant a dedicated repository.

## EUC-KR Path Conversion

File names have traditionally been stored as [EUC-KR](https://en.wikipedia.org/wiki/Extended_Unix_Code) encoded Windows paths inside the [GRF](/file-formats/grf) archive.

If you want to convert them to a more practical Unicode format, you can use the following snippet:

```js title=decode-korean-file-names.js
import iconv from "iconv-lite";
const { decode: iconv_decode } = iconv;

// Converts the input string from EUC-KR to UTF-8 using iconv-lite
function decodeUnicodeFilePath(input) {
  const decoded = iconv_decode(Buffer.from(input, "binary"), "EUC-KR");

  // Replace Windows path separators with UNIX style separators (optional)
  const output = decoded.replace(/\\/g, "/");

  // Transparently deal with inconsistent capitalization (for Linux/Mac OS)
  return output.toLowerCase();
}

export { decodeUnicodeFilePath };
```

This also standardizes path separators (`\` becomes `/`). Running the code requires [NodeJS](https://nodejs.org/en) with [iconv-lite](https://www.npmjs.com/package/iconv-lite).

Example:

- `data\model\¿ÜºÎ¼ÒÇ°\Æ®·¦01.rsm` will be converted to `data/model/외부소품/트랩01.rsm`

You can then paste into [Google Translate](https://translate.google.com/?sl=auto&tl=en&text=data%2Fmodel%2F%EC%99%B8%EB%B6%80%EC%86%8C%ED%92%88%2F%ED%8A%B8%EB%9E%A901.rsm&op=translate) to receive an English file name, or use their API to translate in bulk.

## RagLite Developer Toolkit

The latest iteration of my toolkit is now freely available on GitHub: [RagnarokResearchLab/RagLite](https://github.com/RagnarokResearchLab/RagLite)

While I won't be releasing all of my old tooling, which I expect to become fully obsolete over time, this version is kept continuously in sync with the documentation published on these pages. Here's what it generally aims to do:

- Make it easy to analyze RO-specific binary file formats in their many different versions, convert them, etc.
- Visualize 2D sprites and 3D geometry in a "realistic" (close-enough approximation) ingame environment
- Validate hypotheses and verify claims by reimplementing the features in question, where it makes sense

Please note that this is explicitly **NOT** a full game client or server implementation. If you want that, there are [many other projects](/community-projects) aiming to accomplish this lofty goal. My focus is on research, and the tool reflects that.
