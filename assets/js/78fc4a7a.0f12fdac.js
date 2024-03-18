"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1266],{3428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),s=r(1470),i=r(9365);const l={slug:"/file-formats/imf",title:"IMF"},o=void 0,u={id:"file-formats/IMF",title:"IMF",description:"This document describes the IMF file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/IMF.md",sourceDirName:"file-formats",slug:"/file-formats/imf",permalink:"/file-formats/imf",draft:!1,unlisted:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/IMF.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/imf",title:"IMF"},sidebar:"tutorialSidebar",previous:{title:"GRF",permalink:"/file-formats/grf"},next:{title:"LUB (Placeholder)",permalink:"/file-formats/lub"}},c={},d=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2},{value:"Versions",id:"versions",level:3},{value:"Fields",id:"fields",level:3},{value:"Version",id:"version",level:4},{value:"DrawLayers",id:"drawlayers",level:4},{value:"References",id:"references",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This document describes the IMF file format used in the Ragnarok Online client."}),"\n",(0,n.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,n.jsx)(t.p,{children:"IMF files store layers that determine the drawing order for the game's sprites, compiled as a single binary file:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["These can be combined with ",(0,n.jsx)(t.a,{href:"/file-formats/spr",children:"SPR"})," and ",(0,n.jsx)(t.a,{href:"/file-formats/act",children:"ACT"})," to render 2D objects in the world or as part of the user interface"]}),"\n",(0,n.jsx)(t.li,{children:"Sprites drawn using the IMF data are known to glitch, which can (for example) be observed in the character screen"}),"\n",(0,n.jsx)(t.li,{children:"They seem to be somewhat redundant and of limited usefulness, but more research is needed on the format"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Information on these files is relatively scarce, but interestingly enough they don't appear to be used in ",(0,n.jsx)(t.a,{href:"/arcturus",children:"Arcturus"})," at all."]}),"\n",(0,n.jsx)(t.h2,{id:"layout",children:"Layout"}),"\n",(0,n.jsx)(t.h3,{id:"versions",children:"Versions"}),"\n","\n","\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(i.A,{value:"1.01",label:"Version 1.01",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",metastring:'title="IMF File Format (v1.01)"',children:"struct AnimationFrameLayer {\n    int32_t Index;\n    int32_t OriginU;\n    int32_t OriginV;\n};\n\nstruct SpriteDrawLayer {\n    int32_t AnimationFrameCount;\n    struct AnimationFrameLayer FrameLayers[AnimationFrameCount];\n};\n\nstruct RagnarokIMF {\n    float Version;\n    int32_t Checksum;\n    int32_t DrawLayerCount;\n    struct SpriteDrawLayer DrawLayers[DrawLayerCount];\n};\n"})})})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(t.h4,{id:"version",children:"Version"}),"\n",(0,n.jsxs)(t.p,{children:["Only one version is known to appear in modern builds of the RO client. It is approximated by the value ",(0,n.jsx)(t.code,{children:"1.0099999904632569"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"drawlayers",children:"DrawLayers"}),"\n",(0,n.jsxs)(t.p,{children:["Presumably, layers are used similarly to the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",children:"z-index CSS property"}),", but it's unclear how sprite drawing works exactly."]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsx)(t.p,{children:"Multiple open-source IMF decoders exist:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://gitlab.com/Dolori/Dolori/-/blob/master/src/Files/ImfRes.cpp",children:"GPL-licensed implementation in C++ (Dolori)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokIMF.lua",children:"MPL-licensed implementation in LuaJIT (RagLite SDK)"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There don't appear to be any other implementations, which is likely due to the limited usefulness of the format."})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(4164),s=r(3104),i=r(6347),l=r(205),o=r(7485),u=r(1682),c=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??p;return f({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(6540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);