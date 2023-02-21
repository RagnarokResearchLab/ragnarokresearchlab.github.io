"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[757],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:1,slug:"/rendering",title:"Overview"},s=void 0,c={unversionedId:"rendering/index",id:"rendering/index",title:"Overview",description:"In this category, you will find out how the visual representation of Ragnarok Online's game world is created by its client.",source:"@site/docs/rendering/01-index.md",sourceDirName:"rendering",slug:"/rendering",permalink:"/rendering",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/rendering/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/rendering",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/file-formats"},next:{title:"Overview",permalink:"/game-mechanics"}},p={},u=[{value:"Target Audience",id:"target-audience",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Prerequisites",id:"prerequisites",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this category, you will find out how the visual representation of Ragnarok Online's game world is created by its client."),(0,a.kt)("h2",{id:"target-audience"},"Target Audience"),(0,a.kt)("p",null,"Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected."),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,"After studying this documentation, you should know ",(0,a.kt)("em",{parentName:"p"},"in principle")," how a decently accurate representation of the game world can be rendered. The purpose of the many different file formats should become clearer, as well as how they complement each other. Topics that might not be directly related to 3D rendering will also be covered, if they're relevant to gameplay or visuals."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"This specification is concerned with a high-level description of the rendering concepts only. Depending on the graphics technologies used, lower-level implementation details may vary and/or be impossible to faithfully replicate. Be warned: Computer graphics and 3D rendering is a complex domain, so you should expect there to be errors and inaccuracies in here."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Here's a (non-exhaustive) list of topics that you might want to know about in detail:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Vector_space"},"Vector spaces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnopengl.com/Getting-started/Coordinate-Systems"},"Coordinate systems")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Linear_map"},"Transformations between vector spaces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Isomorphism"},"Isomorphic vector spaces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Polygon_mesh"},"Polygon meshes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lightmap"},"Lightmapping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Posterization"},"Posterization"))),(0,a.kt)("p",null,"These aren't necessarily the best explanations, so you'll have to do more research when knowledge about a topic is needed."))}m.isMDXComponent=!0}}]);