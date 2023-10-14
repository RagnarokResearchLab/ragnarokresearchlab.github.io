"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2,slug:"/game-mechanics/world-state-updates",title:"World State Updates"},s=void 0,l={unversionedId:"game-mechanics/world-state-updates",id:"game-mechanics/world-state-updates",title:"World State Updates",description:"This document describes how Ragnarok Online's zone servers update the simulation of the game world.",source:"@site/docs/game-mechanics/02-world-state-updates.md",sourceDirName:"game-mechanics",slug:"/game-mechanics/world-state-updates",permalink:"/game-mechanics/world-state-updates",draft:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/game-mechanics/02-world-state-updates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/game-mechanics/world-state-updates",title:"World State Updates"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/game-mechanics"},next:{title:"Movement and Pathfinding",permalink:"/game-mechanics/movement"}},o={},p=[{value:"Server Tick Rate",id:"server-tick-rate",level:2},{value:"Performance Degradation",id:"performance-degradation",level:2},{value:"Timer Granularity",id:"timer-granularity",level:2},{value:"Simulation Steps",id:"simulation-steps",level:2},{value:"Message Handling",id:"message-handling",level:3},{value:"Mapwide Events",id:"mapwide-events",level:3},{value:"Scheduled Events",id:"scheduled-events",level:4},{value:"Real-Time Events",id:"real-time-events",level:4},{value:"NPC Script Handlers",id:"npc-script-handlers",level:3},{value:"Game Actors",id:"game-actors",level:3},{value:"Cross-Server Communication",id:"cross-server-communication",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how Ragnarok Online's zone servers update the simulation of the game world."),(0,r.kt)("h2",{id:"server-tick-rate"},"Server Tick Rate"),(0,r.kt)("p",null,"According to a third party (who sadly failed to provide a verifiable source), the game world is updated every 20 ms:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[It uses]"," a different server refresh speed (aegis is faster)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Official servers] are not really coded in a very efficient way, you need a really really strong server just to get it to run at all. ","[They]"," run through everything in a 20ms interval ... on ","*","Athena emulators we changed this to a 100ms interval (and often even slower for certain things), so it needs 5+ times less CPU power. Unfortunately that also makes implementation of certain things like firewall behavior impossible to replicate to 100%.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://www.ragnaroktravels.com/emulators"},"Ragnarok Travels website"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Independent research indicates that the above claims are likely to be true. Here's the findings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HerculesWS/Hercules"},"Hercules"),", AI updates take at least 100 ms (see ",(0,r.kt)("inlineCode",{parentName:"li"},"MIN_MOBTHINKTIME")," in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HerculesWS/Hercules/search?q=MIN_MOBTHINKTIME"},"source code"),")"),(0,r.kt)("li",{parentName:"ul"},"Similarly, elemental follower updates take at least 100 ms (see ",(0,r.kt)("inlineCode",{parentName:"li"},"MIN_ELETHINKTIME")," in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HerculesWS/Hercules/search?q=MIN_ELETHINKTIME"},"source code"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://irowiki.org/classic/Fire_Wall"},"irowiki"),' mentions that "Firewall hits at a very high rate of attack: approximately 40 to 50 times per second"')),(0,r.kt)("p",null,"A tick rate of 20 ms would result in ","[at most]"," 50 updates per second, which is required for computing hits as rapidly as described on the irowiki page. Considering all of the above, it seems probable that 20 ms is indeed the value used internally."),(0,r.kt)("h2",{id:"performance-degradation"},"Performance Degradation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section contains unsubstantiated claims and/or speculation. It may or may not be completely wrong.")),(0,r.kt)("p",null,"There are ",(0,r.kt)("em",{parentName:"p"},"presumably")," no special countermeasures taken when world updates take too long. This is purely based on personal experience, as performance degrades heavily in high-stress situations like War of Emperium. The server appears to simply update the simulation as fast as is physically possible, even if that isn't sufficient to guarantee a fluid gameplay experience."),(0,r.kt)("h2",{id:"timer-granularity"},"Timer Granularity"),(0,r.kt)("p",null,"On Windows, timers rely on a coarse-grained systemwide clock signal that seems to tick once every 15 or so milliseconds:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The system clock "ticks" at a constant rate. If dwMilliseconds is less than the resolution of the system clock, the thread may sleep for less than the specified length of time. If dwMilliseconds is greater than one tick but less than two, the wait can be anywhere between one and two ticks, and so on.')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://learn.microsoft.com/en-us/windows/win32/api/synchapi/nf-synchapi-sleep#remarks"},"Windows API documentation")," (should apply equally to all relevant, time-based WIN32 APIs)")),(0,r.kt)("p",null,'This means that world state updates could easily be delayed when the clock signal was "missed", in difficult-to-predict patterns:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Last world update took 0.00 ms          Next update in 20.00 ms\nLast world update took 44.36 ms         Next update in 0.00 ms\nLast world update took 16.02 ms         Next update in 3.98 ms\nLast world update took 31.00 ms         Next update in 0.00 ms\nLast world update took 16.01 ms         Next update in 3.99 ms\n")),(0,r.kt)("p",null,'The above simulates an "empty" server tick with an update frequency of 50 updates per second, so delays are purely accidental.'),(0,r.kt)("p",null,"Now, what you would ",(0,r.kt)("em",{parentName:"p"},"actually")," expect to happen is illustrated by running the same experiment on Linux (1ms system clock):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Last world update took 0.00 ms          Next update in 20.00 ms\nLast world update took 20.77 ms         Next update in 0.00 ms\nLast world update took 1.19 ms          Next update in 18.81 ms\nLast world update took 19.19 ms         Next update in 0.81 ms\nLast world update took 1.19 ms          Next update in 18.81 ms\n")),(0,r.kt)("p",null,"How much these delays affect gameplay in practice is hard to tell, but it's interesting nonetheless."),(0,r.kt)("h2",{id:"simulation-steps"},"Simulation Steps"),(0,r.kt)("p",null,"Whenever the simulation is updated, a number of different processing steps must be executed. The exact requirements depend on the server configuration and version of the game. Here's a minimal example that includes all core gameplay systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Handle incoming and outgoing messages"),(0,r.kt)("li",{parentName:"ul"},"Update all currently loaded maps and instances"),(0,r.kt)("li",{parentName:"ul"},"Update NPC script handlers that are currently executing"),(0,r.kt)("li",{parentName:"ul"},"Update all entities that exist in the world"),(0,r.kt)("li",{parentName:"ul"},"Handle communication with other servers and the database layer")),(0,r.kt)("h3",{id:"message-handling"},"Message Handling"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!")),(0,r.kt)("h3",{id:"mapwide-events"},"Mapwide Events"),(0,r.kt)("h4",{id:"scheduled-events"},"Scheduled Events"),(0,r.kt)("p",null,"Certain game events happen at fixed times. The update loop must take into account all of the following map events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"War of Emperium state transitions"),(0,r.kt)("li",{parentName:"ul"},"Economy updates for occupied WoE castles"),(0,r.kt)("li",{parentName:"ul"},'Regeneration of "opened" Treasure Boxes'),(0,r.kt)("li",{parentName:"ul"},"Time-based events tied to instances, PVP, or battleground maps (if there are any)")),(0,r.kt)("p",null,"Any zone server has to check its internal clock regularly and initiate a mapwide change at the scheduled time."),(0,r.kt)("h4",{id:"real-time-events"},"Real-Time Events"),(0,r.kt)("p",null,"Whenever the simulation advances, certain mapwide events take place immediately:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Regeneration of monsters that were previously considered "dead"')),(0,r.kt)("p",null,"Keeping up with the lifetime of creatures is one of the main tasks of the zone server, so this will be run at least once per frame."),(0,r.kt)("h3",{id:"npc-script-handlers"},"NPC Script Handlers"),(0,r.kt)("p",null,"In this phase, the server steps through precompiled NPC scripts and executes them one by one. Here's a general approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Skip over script handlers that require player input or are in some other waiting condition"),(0,r.kt)("li",{parentName:"ul"},"For all other NPCs: Advance the compiled NPC script handler function by some number of steps"),(0,r.kt)("li",{parentName:"ul"},"Recycle script handlers that have run to completion or were cancelled")),(0,r.kt)("p",null,"Afterwards, the server will have to process any game events that were created by the above script handlers."),(0,r.kt)("h3",{id:"game-actors"},"Game Actors"),(0,r.kt)("p",null,"All the other entities that live entirely on the server similarly have to be updated during the main loop:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monsters"),(0,r.kt)("li",{parentName:"ul"},"Items"),(0,r.kt)("li",{parentName:"ul"},"Skills"),(0,r.kt)("li",{parentName:"ul"},"Players")),(0,r.kt)("p",null,"During this stage, all queued game events would be resolved; combat proceeds, items drop, skills are cast or removed, etc."),(0,r.kt)("h3",{id:"cross-server-communication"},"Cross-Server Communication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!")))}d.isMDXComponent=!0}}]);