"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={slug:"/file-formats/ebm",title:"EBM Format Specification"},o=void 0,l={unversionedId:"file-formats/EBM",id:"file-formats/EBM",title:"EBM Format Specification",description:"This document describes the EBM file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/EBM.md",sourceDirName:"file-formats",slug:"/file-formats/ebm",permalink:"/file-formats/ebm",draft:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/EBM.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/ebm",title:"EBM Format Specification"},sidebar:"tutorialSidebar",previous:{title:"ACT (Placeholder)",permalink:"/file-formats/act"},next:{title:"EZV (Placeholder)",permalink:"/file-formats/ezv"}},c={},s=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2}],p={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the EBM file format used in the Ragnarok Online client."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("p",null,"EBM files contain compressed image data and are used exclusively to represent guild emblems."),(0,i.kt)("h2",{id:"layout"},"Layout"),(0,i.kt)("p",null,"The binary layout is irrelevant in practice: They're ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bitmap_file_format"},"Bitmap (BMP)")," files compressed with the standard zlib ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deflate"},"DEFLATE")," algorithm."),(0,i.kt)("p",null,"If you're interested in learning how to programmatically process guild emblems, see ",(0,i.kt)("a",{parentName:"p",href:"/tools/#ebm-export-with-zlib"},"Tools/ebm-export-with-zlib"),"."))}u.isMDXComponent=!0}}]);