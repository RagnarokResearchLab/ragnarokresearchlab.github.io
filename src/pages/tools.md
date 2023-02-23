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

If you'd like to add support for another language, contributions are more than welcome!

### Your Advantages

Compared to building your own encoder/decoder toolkit, you'll get the following for free:

* The tools are always kept in sync with the latest research, as published on this website
* All the "boring" project management is also handled in the context of this project (issues, docs, ...)
* Of course, the library is continually tested to ensure it supports all known format versions

If you build your own tools, e.g., for a language that isn't yet supported, and contribute them here:

* You can make use of the existing test cases and fixtures for automated testing
* Other developers will see your work and might be able to help you find mistakes or missing edge cases
* Collaboration is fun (and usually more productive)!

You can also just use the code as inspiration (but please consider contributing back if you find an issue).

### GitHub Repository

The code is located here: [https://github.com/RagnarokResearchLab/rofflib](https://github.com/RagnarokResearchLab/rofflib)