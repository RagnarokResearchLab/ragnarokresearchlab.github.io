---
slug: /tools
---

# RO Developer Toolkit

This page lists various libraries and developer-oriented software that you may be interested in.

## RO File Formats Library

A multilanguage set of libraries for handling the decoding (and encoding) of RO-specific file formats.

### Background and Goals

Working with the file formats used by the RO client has traditionally been inconvenient. With limited available documentation, developers often resorted to copying whatever other implementations they could find, and hoping for the best. This lead to a lot of headaches, and ultimately wasted effort - so why not think further?

Things would be much easier if there was a (set of) "standard" libraries for handling the most common tasks.

Since such a tool fits perfectly within this project (and I had already written the code anyway), `rofflib` was born.

### Supported Languages

Currently, only a few languages are supported:

* JavaScript (using TypedArrays, which work in both NodeJS and the browser)
* C++ (also includes a C API)
* LuaJIT (FFI only)

If you'd like to add support for another language, you're more than welcome to contribute!

### Your Advantages

Compared to building your own encoder/decoder toolkit, you'll get the following:

* The tools are kept in sync with the latest research, as published here
* Project management is also handled in the context of this project
* Of course, the library is tested to ensure it supports all known format versions

If you build your own tools, e.g. for a language that isn't yet supported, and contribute them here:

* Other developers will see your work and might be more likely to improve on it
* You can use the same test cases/fixtures (possibly with adaptation) for automated testing
* You'll get more eyes on them that can help you find mistakes or missing edge cases

### GitHub Repository

The code is located here: [https://github.com/RagnarokResearchLab/rofflib](https://github.com/RagnarokResearchLab/rofflib)