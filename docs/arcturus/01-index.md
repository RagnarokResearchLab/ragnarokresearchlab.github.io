---
sidebar_position: 1
slug: /arcturus
title: Overview
---

In this category, you will find all about the connection between Ragnarok Online and [Arcturus: The Curse and Loss of Divinity](https://steam-games.org/game/47632/arcturus-the-curse-and-loss-of-divinity/).

## Target Audience

Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected.

## Objectives

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

## Limitations

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

## Prerequisites

:::info

This section is a placeholder. If you know anything about the topic, please help fill it with content!

:::

## File Formats

The following file types have been found in the Japanese DVD release of Arcturus:

```txt title=arcturus-jp-extensions.txt
act
atk
bmp
coonmt01
dat
db
flc
fnt
gat
gnd
htm
ico
ini
itm
jp
kr
lnk
mag
mariaspr
mon
pix
rma
rsa
rsm
rsp
rsw
rsx
scr
skl
spr
tga
tmp
txt
wav
zip
```

This list can be generated with regular Unix shell commands (or [MSYS2](https://www.msys2.org/) on Windows):

```sh title=find-unique-file-types.sh
find . -type f -exec basename {} \; | sed 's/.*\.//' | sort | uniq > extensions.txt
```

Note: `mariaspr` is obviously intended to mean `maria.spr` (leftover SPR 1.1 sprite). `coonmt01` is a duplicate 8-bit `BMP` file (meh).
