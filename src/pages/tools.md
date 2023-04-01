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
