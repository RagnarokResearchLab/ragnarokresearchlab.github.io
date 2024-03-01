"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8301],{8687:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=s(4848),i=s(8453);const a={sidebar_position:2,slug:"/game-mechanics/world-state-updates",title:"World State Updates"},r=void 0,l={id:"game-mechanics/world-state-updates",title:"World State Updates",description:"This document describes how Ragnarok Online's zone servers update the simulation of the game world.",source:"@site/docs/game-mechanics/02-world-state-updates.md",sourceDirName:"game-mechanics",slug:"/game-mechanics/world-state-updates",permalink:"/game-mechanics/world-state-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/game-mechanics/02-world-state-updates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/game-mechanics/world-state-updates",title:"World State Updates"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/game-mechanics"},next:{title:"Movement and Pathfinding",permalink:"/game-mechanics/movement"}},o={},d=[{value:"Server Tick Rate",id:"server-tick-rate",level:2},{value:"Performance Degradation",id:"performance-degradation",level:2},{value:"Timer Granularity",id:"timer-granularity",level:2},{value:"Simulation Steps",id:"simulation-steps",level:2},{value:"Message Handling",id:"message-handling",level:3},{value:"Mapwide Events",id:"mapwide-events",level:3},{value:"Scheduled Events",id:"scheduled-events",level:4},{value:"Real-Time Events",id:"real-time-events",level:4},{value:"NPC Script Handlers",id:"npc-script-handlers",level:3},{value:"Game Actors",id:"game-actors",level:3},{value:"Cross-Server Communication",id:"cross-server-communication",level:3}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This document describes how Ragnarok Online's zone servers update the simulation of the game world."}),"\n",(0,n.jsx)(t.h2,{id:"server-tick-rate",children:"Server Tick Rate"}),"\n",(0,n.jsx)(t.p,{children:"According to a third party (who sadly failed to provide a verifiable source), the game world is updated every 20 ms:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"[It uses] a different server refresh speed (aegis is faster)"}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Official servers] are not really coded in a very efficient way, you need a really really strong server just to get it to run at all. [They] run through everything in a 20ms interval ... on *Athena emulators we changed this to a 100ms interval (and often even slower for certain things), so it needs 5+ times less CPU power. Unfortunately that also makes implementation of certain things like firewall behavior impossible to replicate to 100%."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.ragnaroktravels.com/emulators",children:"Ragnarok Travels website"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Independent research indicates that the above claims are likely to be true. Here's the findings:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.a,{href:"https://github.com/HerculesWS/Hercules",children:"Hercules"}),", AI updates take at least 100 ms (see ",(0,n.jsx)(t.code,{children:"MIN_MOBTHINKTIME"})," in the ",(0,n.jsx)(t.a,{href:"https://github.com/HerculesWS/Hercules/search?q=MIN_MOBTHINKTIME",children:"source code"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Similarly, elemental follower updates take at least 100 ms (see ",(0,n.jsx)(t.code,{children:"MIN_ELETHINKTIME"})," in the ",(0,n.jsx)(t.a,{href:"https://github.com/HerculesWS/Hercules/search?q=MIN_ELETHINKTIME",children:"source code"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://irowiki.org/classic/Fire_Wall",children:"irowiki"}),' mentions that "Firewall hits at a very high rate of attack: approximately 40 to 50 times per second"']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A tick rate of 20 ms would result in [at most] 50 updates per second, which is required for computing hits as rapidly as described on the irowiki page. Considering all of the above, it seems probable that 20 ms is indeed the value used internally."}),"\n",(0,n.jsx)(t.h2,{id:"performance-degradation",children:"Performance Degradation"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This section contains unsubstantiated claims and/or speculation. It may or may not be completely wrong."})}),"\n",(0,n.jsxs)(t.p,{children:["There are ",(0,n.jsx)(t.em,{children:"presumably"})," no special countermeasures taken when world updates take too long. This is purely based on personal experience, as performance degrades heavily in high-stress situations like War of Emperium. The server appears to simply update the simulation as fast as is physically possible, even if that isn't sufficient to guarantee a fluid gameplay experience."]}),"\n",(0,n.jsx)(t.h2,{id:"timer-granularity",children:"Timer Granularity"}),"\n",(0,n.jsx)(t.p,{children:"On Windows, timers rely on a coarse-grained systemwide clock signal that seems to tick once every 15 or so milliseconds:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'The system clock "ticks" at a constant rate. If dwMilliseconds is less than the resolution of the system clock, the thread may sleep for less than the specified length of time. If dwMilliseconds is greater than one tick but less than two, the wait can be anywhere between one and two ticks, and so on.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/api/synchapi/nf-synchapi-sleep#remarks",children:"Windows API documentation"})," (should apply equally to all relevant, time-based WIN32 APIs)"]})}),"\n",(0,n.jsx)(t.p,{children:'This means that world state updates could easily be delayed when the clock signal was "missed", in difficult-to-predict patterns:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"Last world update took 0.00 ms          Next update in 20.00 ms\nLast world update took 44.36 ms         Next update in 0.00 ms\nLast world update took 16.02 ms         Next update in 3.98 ms\nLast world update took 31.00 ms         Next update in 0.00 ms\nLast world update took 16.01 ms         Next update in 3.99 ms\n"})}),"\n",(0,n.jsx)(t.p,{children:'The above simulates an "empty" server tick with an update frequency of 50 updates per second, so delays are purely accidental.'}),"\n",(0,n.jsxs)(t.p,{children:["Now, what you would ",(0,n.jsx)(t.em,{children:"actually"})," expect to happen is illustrated by running the same experiment on Linux (1ms system clock):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"Last world update took 0.00 ms          Next update in 20.00 ms\nLast world update took 20.77 ms         Next update in 0.00 ms\nLast world update took 1.19 ms          Next update in 18.81 ms\nLast world update took 19.19 ms         Next update in 0.81 ms\nLast world update took 1.19 ms          Next update in 18.81 ms\n"})}),"\n",(0,n.jsx)(t.p,{children:"How much these delays affect gameplay in practice is hard to tell, but it's interesting nonetheless."}),"\n",(0,n.jsx)(t.h2,{id:"simulation-steps",children:"Simulation Steps"}),"\n",(0,n.jsx)(t.p,{children:"Whenever the simulation is updated, a number of different processing steps must be executed. The exact requirements depend on the server configuration and version of the game. Here's a minimal example that includes all core gameplay systems:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Handle incoming and outgoing messages"}),"\n",(0,n.jsx)(t.li,{children:"Update all currently loaded maps and instances"}),"\n",(0,n.jsx)(t.li,{children:"Update NPC script handlers that are currently executing"}),"\n",(0,n.jsx)(t.li,{children:"Update all entities that exist in the world"}),"\n",(0,n.jsx)(t.li,{children:"Handle communication with other servers and the database layer"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"message-handling",children:"Message Handling"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This section is a placeholder. If you know anything about the topic, please help fill it with content!"})}),"\n",(0,n.jsx)(t.h3,{id:"mapwide-events",children:"Mapwide Events"}),"\n",(0,n.jsx)(t.h4,{id:"scheduled-events",children:"Scheduled Events"}),"\n",(0,n.jsx)(t.p,{children:"Certain game events happen at fixed times. The update loop must take into account all of the following map events:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"War of Emperium state transitions"}),"\n",(0,n.jsx)(t.li,{children:"Economy updates for occupied WoE castles"}),"\n",(0,n.jsx)(t.li,{children:'Regeneration of "opened" Treasure Boxes'}),"\n",(0,n.jsx)(t.li,{children:"Time-based events tied to instances, PVP, or battleground maps (if there are any)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Any zone server has to check its internal clock regularly and initiate a mapwide change at the scheduled time."}),"\n",(0,n.jsx)(t.h4,{id:"real-time-events",children:"Real-Time Events"}),"\n",(0,n.jsx)(t.p,{children:"Whenever the simulation advances, certain mapwide events take place immediately:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Regeneration of monsters that were previously considered "dead"'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Keeping up with the lifetime of creatures is one of the main tasks of the zone server, so this will be run at least once per frame."}),"\n",(0,n.jsx)(t.h3,{id:"npc-script-handlers",children:"NPC Script Handlers"}),"\n",(0,n.jsx)(t.p,{children:"In this phase, the server steps through precompiled NPC scripts and executes them one by one. Here's a general approach:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Skip over script handlers that require player input or are in some other waiting condition"}),"\n",(0,n.jsx)(t.li,{children:"For all other NPCs: Advance the compiled NPC script handler function by some number of steps"}),"\n",(0,n.jsx)(t.li,{children:"Recycle script handlers that have run to completion or were cancelled"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Afterwards, the server will have to process any game events that were created by the above script handlers."}),"\n",(0,n.jsx)(t.h3,{id:"game-actors",children:"Game Actors"}),"\n",(0,n.jsx)(t.p,{children:"All the other entities that live entirely on the server similarly have to be updated during the main loop:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Monsters"}),"\n",(0,n.jsx)(t.li,{children:"Items"}),"\n",(0,n.jsx)(t.li,{children:"Skills"}),"\n",(0,n.jsx)(t.li,{children:"Players"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"During this stage, all queued game events would be resolved; combat proceeds, items drop, skills are cast or removed, etc."}),"\n",(0,n.jsx)(t.h3,{id:"cross-server-communication",children:"Cross-Server Communication"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This section is a placeholder. If you know anything about the topic, please help fill it with content!"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);