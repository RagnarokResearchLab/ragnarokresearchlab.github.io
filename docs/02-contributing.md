---
sidebar_position: 2
slug: /contributing
title: Contributing
---

On this page, you'll find all the information you need to make a successful contribution to this project.

## Proposing Changes via GitHub

Simple edits can be submitted directly through GitHub's web interface. Click on the `Edit this page` link displayed at the bottom of every documentation page, then follow the instructions to create a Pull Request with your changes. You can preview the updated contents by switching modes in their editor, though it won't show you how the final result will look on the website.

## Making Changes Locally

For more complex edits, it can be advantageous to run the documentation locally to make sure the result is as expected. This process requires familiarizing yourself with additional tools. You must also follow some guidelines regarding what contents can be published. Lastly, you may want to learn about technical writing to ensure the quality of the documentation remains high.

The rest of this page lists all relevant information, so that you can hopefully find your way around.

## Technical Requirements

In order to make a more involved contribution, especially to the documentation website itself, you'll want a few things.

### Git

You'll need a [Git](https://git-scm.com/) client, like [Git for Windows](https://git-scm.com/download/win). The easiest way to get started is probably using [GitHub Desktop](https://desktop.github.com/).

### GitHub Account

In order to submit changes, you must have a [GitHub account](https://github.com/signup). If you've never contributed to open source projects, you may want to follow [GitHub's Getting Started guide](https://docs.github.com/en/get-started) as well as their [guide on how to use Pull Requests](https://docs.github.com/en/pull-requests). Don't worry if you get something wrong, learning by doing is the best way; when in doubt, someone will be happy to help you in the [Discord](https://discord.gg/7RFdMNrySy).

### Markdown

The documentation is written in [Markdown](https://en.wikipedia.org/wiki/Markdown). If you've never used it, [this guide](https://www.markdownguide.org/) should help you get started quickly.

### React Components

Technically, you also can add more complex behavior using [React](https://reactjs.org/) components and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). But you probably won't need to.

### Docusaurus

The [Docusaurus](https://docusaurus.io/) framework creates the documentation website from markdown (and JavaScript) files inside the repository. For the most part, this can be ignored since the output format doesn't change if you only edit the contents. Should you want to make more sweeping changes that affect the layout of the website itself, you'll likely have to learn a bit more about it first.

### NodeJS and the Node Package Manager

While not required to change the documentation, you may want to download [NodeJS](https://nodejs.org) and the included `npm` tool. Once you've them installed, you can run any of the preconfigured [NPM script commands](#npm-scripts) in the project root to perform a variety of development tasks. If you're only interested in the contents and writing, you don't need to worry about this at all.

## Content Guidelines

Unfortunately, some restrictions need to be applied to the content of this website to ensure it's maximally useful and long-lived.

### Accuracy and Sourcing

Adding information that might be wrong, but seems like it has a decent chance of being true, is **NOT** a problem. In many cases, it will simply be too difficult (or even impossible) to ascertain the veracity of information due to lack of reliable sources.

However, in these cases a disclaimer should be added in the form of [Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions). This is how one would look:

:::caution

This section contains unverified information and/or speculation. It may or may not be completely wrong.

:::

Beyond this, sources can be added in _italics_ below [block quotes](https://commonmark.org/help/tutorial/05-blockquotes.html). Here's an example for how this might look:

> This is a piece of information that originates with a third-party, printed verbatim [or with minor, cosmetic adjustments].

_Source: Completely made up, but you should include the actual source here. Don't forget to include the link if one is available._

The purpose of adding these notes is to make it easy to spot sections that could benefit from some more research.

### Placeholders

While having empty sections in the documentation can be frustrating for the reader, there are situations where adding a placeholder is acceptable. Whenever you're aware of an important topic that should be covered, but currently isn't - for example because no one knows the details - you can add a placeholder notice via [Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions). Here's an example:

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

Please also [open an issue](https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/issues/new) if there isn't one, to create a reminder and aggregate information about the topic to be documented.

### Legal Requirements

In order to ensure that the documentation doesn't overstep the legal boundaries imposed by the [Digital Millennium Copyright Act](https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act) and [EU legislation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM:mi0016), you must be mindful of what is submitted for publishing. The [WINE Clean Room Guidelines](https://wiki.winehq.org/Clean_Room_Guidelines) should provide a decent starting point, but please do employ common sense. Obviously infringing contents will not be accepted.

## Development

You may be confused when you first take a look at the repository's codebase. Thankfully, you only need to know a few things.

### Organization of the Repository

Here's an overview of the most important folders you'll find in this repository:

- `.github/`: Contains GitHub Actions workflows that run automatically when you submit a Pull Request
- `docs/`: Contains the documentation pages, one category per folder and one markdown file per page
- `src/components/`: [React components](https://reactjs.org/docs/components-and-props.html) that can be embedded anywhere on the website, [even in markdown pages](https://docusaurus.io/docs/next/markdown-features/react)
- `src/css/`: A set of [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) files defining the visual theme of the documentation website
- `src/pages/`: Dynamic pages that require more than just markdown and aren't part of the documentation itself
- `static/img/`: Images that are not specific to any one documentation page, such as the website's logo
- `static/fonts/`: All fonts that are references in the website's CSS, alongside their respective licenses

There's also files like the docusaurus configuration and [NPM](https://www.npmjs.com/) package definition, but you probably don't need to change them.

### NPM Scripts

You can work with the website on your local computer by typing any of the following preconfigured script commands:

- `npm start`: Start a local development web server and open the website in your browser (this may take a while)
- `npm run format-check`: Check all contents to make sure they follow the formatting rules (does not alter the files)
- `npm run autoformat`: Run the formatter on all files to apply formatting rules (_does_ alter the files on disk!)
- `npm run linter`: Run static analysis to check for style violations (only applies to code files, not documentation pages)

In addition to the above, all default [Docusaurus commands](https://docusaurus.io/docs/cli) should work, but you probably won't ever need them.

## Writing

Writing excellent technical documentation is far easier said than done, so here's some pointers to make it more manageable.

### Documentation Categories

For the most part, the contents of the documentation can be found in the top-level `docs` folder. Each section consists of a folder with a "table of contents" page, the `index`, and individual markdown pages for each article. The `_category_.json` file is a special Docusaurus construct that allows setting the title and location (i.e., where the category should be displayed in the sidebar).

### Documentation Types

A useful model for separating documentation into is described [here](https://documentation.divio.com/). The system works by sorting articles into one of four categories, which makes it easier to write targeted documentation that answers all the relevant questions. This project loosely follows the system, by dedicating each page to (mostly) a single type of documentation. This isn't a strict requirement _currently_.

### Recommended Style Guide

Adherence to a specific style guide isn't currently mandatory, though it's recommended to follow [Google's Developer Documentation Style Guide](https://developers.google.com/style). Adoption of a consistent style is already planned for the future, though it's currently a lower priority than simply completing the documentation of all important topics and researching the many missing details.

### Technical Writing Resources

If you want to learn more about technical writing, here's a few links that can help you improve:

- [Google's Technical Writing Course](https://developers.google.com/tech-writing) should be your first stop, as it covers the basics of writing about a technical subject
- [Google's State of DevOps Report (2021)](https://services.google.com/fh/files/misc/state-of-devops-2021.pdf) includes a short section about software documentation on pages 21 to 23
- The [Good Docs Project](https://thegooddocsproject.dev/) offers some useful resources, such as an [Information Architecture Guide](https://thegooddocsproject.dev/ia-guide/)

Remember: It's better to write something than nothing and then iterate on it later. All contributions are welcome!
