---
sidebar_position: 6
slug: /community-projects
title: Community Projects
---

This page lists all of the known Ragnarok Online-related community projects that may be of interest to researchers.

A more comprehensive list of public repositories can be found here: [Community Projects (Mirror)](https://github.com/RagnarokResearchLab/CommunityProjects)

## Third-Party Clients

There have been countless attempts at creating a custom open-source Ragnarok Online client. In chronological order:

|                               Name                                |       Language       |                                              First Public Release                                              |                                                                                                                               Notes                                                                                                                               |
| :---------------------------------------------------------------: | :------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                      Shinryo's Custom Client                      |     C++ (Ogre3D)     |                                                      ---                                                       |                                                                            Announced [here](https://rathena.org/board/topic/57955-custom-ragnarok-online-client/), but never released                                                                             |
|                       curiosity's "Sakexe"                        |         C++          |                                                      ---                                                       |                                                                             Announced [here](https://rathena.org/board/topic/104827-wip-native-ragnarok-client/), but never released                                                                              |
|  [OpenRagnarok](https://github.com/open-ragnarok/open-ragnarok)   |       C (SDL)        | [Jul 11, 2008](https://github.com/open-ragnarok/open-ragnarok/commit/2b0e4407f782b7af13958f09530ff3da058d52f1) |
| [Fimbulwinter Client](https://github.com/greenboxal/fimbulclient) |     C++ (OpenGL)     |  [Sept 29, 2012](https://github.com/greenboxal/fimbulclient/commit/b7f76e20edd50772973f72e57e719fc9cd8ad2df)   |                                                                                           Announced [here](https://rathena.org/board/topic/74415-fimbulwinter-client/)                                                                                            |
|       [RagnarokJS](https://github.com/GodLesZ/rangarok-js)        | JavaScript (Browser) |     [Aug 21, 2013](https://github.com/GodLesZ/rangarok-js/commit/f6c9c71165615d1531ef19080924ed244b41979b)     |                                                                                         Announced [here](https://rathena.org/board/topic/74394-also-ragnarok-in-browser)                                                                                          |
|        [roBrowser](https://github.com/vthibault/roBrowser)        | JavaScript (Browser) |     [Oct 22, 2013](https://github.com/vthibault/roBrowser/commit/22e7d8f87cfb22775f2c51b6a1fe8946903eb58a)     | Announced [here](https://rathena.org/board/topic/53323-robrowser-ragnar%C3%B6k-online-in-browser/); continues [here](https://github.com/MrAntares/roBrowserLegacy) (see [this post](https://rathena.org/board/topic/130469-robrowser-continued-join-the-effort/)) |
|            [Dolori](https://gitlab.com/Dolori/Dolori)             |     C++ (OpenGL)     |       [Aug 15, 2017](https://gitlab.com/Dolori/Dolori/-/commit/2a722ebd8e2e219a631b0630a3e8af4b47ba288f)       |                                                                                                                                                                                                                                                                   |
|            [Aesir](https://github.com/Temtaime/aesir)             |          D           |       [Dec 20, 2017](https://github.com/Temtaime/aesir/commit/10c9478c4a726dd941b8bd231e735787ff638b53)        |                                                                                           Announced [here](https://rathena.org/board/topic/111484-make-ro-great-again/)                                                                                           |
|        [UnityRO](https://github.com/guilhermelhr/unityro)         |      C# (Unity)      |    [Apr 24, 2018](https://github.com/guilhermelhr/unityro/commit/377b5f14f8a62ba7e4ba64bf2a7e5f348e1a62ed)     |                                                                                              Continues [here](https://github.com/def-not-a-game-studio/unityro-core)                                                                                              |
|           [Rustarok](https://github.com/bbodi/rustarok)           |    Rust (OpenGL)     |       [May 29, 2019](https://github.com/bbodi/rustarok/commits/0d15baa8a27731e7f7559fb3f64e150ce459ff9e)       |                                                                                                               Not actually a RO client, but related                                                                                                               |
|   [RagnarokRebuild](https://github.com/Doddler/RagnarokRebuild)   |      C# (Unity)      |   [Mar 2, 2020](https://github.com/Doddler/RagnarokRebuild/commit/1a651db7946c56aee2bb9de3788ba3b03c2c4573)    |                                                                      Announced on [Twitter](https://twitter.com/RoDoddler/); continues [here](https://github.com/Doddler/RagnarokRebuildTcp)                                                                      |
|      [Midgarts Client](https://github.com/drgomesp/midgarts)      |          Go          |      [Nov 4, 2020](https://github.com/drgomesp/midgarts/commit/3a5fa65cf5425af2e03871aeb200fac69e0a61a2)       |        Announced [here](https://old.reddit.com/r/RagnarokOnline/comments/m9yf9p/im_working_on_an_alternative_opensource_ro_client/) and [here](https://old.reddit.com/r/RagnarokOnline/comments/my9dml/midgarts_an_alternative_ro_client_current_project/)        |
|           [Korangar](https://github.com/vE5li/korangar)           |    Rust (Vulkan)     |        [Aug 5, 2021](https://github.com/vE5li/korangar/commit/3a6f41662db375f47c08ef2ac2b6739200934d1f)        |                                                                                                                                                                                                                                                                   |

There may be other client implementations that I've forgotten, that were lost to time, or simply never made public.

## Server Emulators

Various server emulation efforts have resulted in many different forks and variations competing, with few survivors:

|                                 Name                                 |  Language  |                                           First Public Release                                            |                           Notes                           |
| :------------------------------------------------------------------: | :--------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------: |
|          [Hercules](https://github.com/HerculesWS/Hercules)          |   C/C++    |                                                    TBD                                                    |   One of the two active mainstream emulators as of 2023   |
|            [rAthena](https://github.com/rathena/rathena)             |    C++     |                                                    TBD                                                    |   One of the two active mainstream emulators as of 2023   |
| [RagnarokRebuild/Tcp](https://github.com/Doddler/RagnarokRebuildTcp) | C# (Unity) | [Mar 2, 2020](https://github.com/Doddler/RagnarokRebuild/commit/f625724e63c81134eecbd4fded8ee1397c4bdd05) | Only works with the corresponding, Unity-based client (?) |
|            [rust-ro](https://github.com/nmeylan/rust-ro/)            |    Rust    |    [Aug 22, 2021](https://github.com/nmeylan/rust-ro/commit/178b4df392d1d92946d49f9f0961aafd26b42ce9)     |      New and experimental emulator (status unclear?)      |

I'm not very familiar with the ancient history of server emulators. Feel free to suggest relevant projects that are worth adding!

## Editing Tools

There are a large number of obsoleted and abandoned tools. This list contains a few of the more prominent ones:

|                                       Name                                       | Language | First Public Release |                              Notes                              |
| :------------------------------------------------------------------------------: | :------: | :------------------: | :-------------------------------------------------------------: |
|                    [GndEdit](https://dotalux.com/ro/GNDedit/)                    |    ?     |         TBD          |                   Source code unavailable (?)                   |
|                   [BrowEdit](https://github.com/Borf/browedit)                   |   C++    |         TBD          | Development continues [here](https://github.com/Borf/BrowEdit3) |
|        [GRF Editor](https://rathena.org/board/topic/77080-grf-grf-editor)        |    C#    |         TBD          |                   Source code unavailable (?)                   |
|       [ACT Editor](https://rathena.org/board/files/file/3304-act-editor/)        |    C#    |         TBD          |                   Source code unavailable (?)                   |
| [STR Editor](https://rathena.org/board/topic/130296-a-more-friendly-str-editor/) |    C#    |         TBD          |                   Source code unavailable (?)                   |

There's lots of obscure tools that can be found all over the internet. If you know any that are noteworthy, please add them here!

## Documentation

Comparatively few documentation efforts seem to have been undertaken by the RO community:

- [ximosoft's RO Laboratory](https://web.archive.org/web/20100120162820/http://rolaboratory.ximosoft.com/): An early attempt at providing technical information, which directly inspired this project
- RFF/RGM: The precursors to this project, consisting of separate repositories for [file formats](https://github.com/rdw-archive/RagnarokFileFormats) and [game mechanics](https://github.com/rdw-archive/RagnarokGameMechanics)

The above projects are mostly of historical interest at this point, since this website covers all the info that they provide.
