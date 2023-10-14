"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6608],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},340:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:2,slug:"/contributing",title:"Contributing"},r=void 0,l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"On this page, you'll find all the information you need to make a successful contribution to this project.",source:"@site/docs/02-contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/02-contributing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/contributing",title:"Contributing"},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/about"},next:{title:"Overview",permalink:"/file-formats"}},s={},u=[{value:"Proposing Changes via GitHub",id:"proposing-changes-via-github",level:2},{value:"Making Changes Locally",id:"making-changes-locally",level:2},{value:"Technical Requirements",id:"technical-requirements",level:2},{value:"Git",id:"git",level:3},{value:"GitHub Account",id:"github-account",level:3},{value:"Markdown",id:"markdown",level:3},{value:"React Components",id:"react-components",level:3},{value:"Docusaurus",id:"docusaurus",level:3},{value:"NodeJS and the Node Package Manager",id:"nodejs-and-the-node-package-manager",level:3},{value:"Content Guidelines",id:"content-guidelines",level:2},{value:"Accuracy and Sourcing",id:"accuracy-and-sourcing",level:3},{value:"Placeholders",id:"placeholders",level:3},{value:"Legal Requirements",id:"legal-requirements",level:3},{value:"Development",id:"development",level:2},{value:"Organization of the Repository",id:"organization-of-the-repository",level:3},{value:"NPM Scripts",id:"npm-scripts",level:3},{value:"Writing",id:"writing",level:2},{value:"Documentation Categories",id:"documentation-categories",level:3},{value:"Documentation Types",id:"documentation-types",level:3},{value:"Recommended Style Guide",id:"recommended-style-guide",level:3},{value:"Technical Writing Resources",id:"technical-writing-resources",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this page, you'll find all the information you need to make a successful contribution to this project."),(0,a.kt)("h2",{id:"proposing-changes-via-github"},"Proposing Changes via GitHub"),(0,a.kt)("p",null,"Simple edits can be submitted directly through GitHub's web interface. Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit this page")," link displayed at the bottom of every documentation page, then follow the instructions to create a Pull Request with your changes. You can preview the updated contents by switching modes in their editor, though it won't show you how the final result will look on the website."),(0,a.kt)("h2",{id:"making-changes-locally"},"Making Changes Locally"),(0,a.kt)("p",null,"For more complex edits, it can be advantageous to run the documentation locally to make sure the result is as expected. This process requires familiarizing yourself with additional tools. You must also follow some guidelines regarding what contents can be published. Lastly, you may want to learn about technical writing to ensure the quality of the documentation remains high."),(0,a.kt)("p",null,"The rest of this page lists all relevant information, so that you can hopefully find your way around."),(0,a.kt)("h2",{id:"technical-requirements"},"Technical Requirements"),(0,a.kt)("p",null,"In order to make a more involved contribution, especially to the documentation website itself, you'll want a few things."),(0,a.kt)("h3",{id:"git"},"Git"),(0,a.kt)("p",null,"You'll need a ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," client, like ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"Git for Windows"),". The easiest way to get started is probably using ",(0,a.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),"."),(0,a.kt)("h3",{id:"github-account"},"GitHub Account"),(0,a.kt)("p",null,"In order to submit changes, you must have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/signup"},"GitHub account"),". If you've never contributed to open source projects, you may want to follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started"},"GitHub's Getting Started guide")," as well as their ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests"},"guide on how to use Pull Requests"),". Don't worry if you get something wrong, learning by doing is the best way; when in doubt, someone will be happy to help you in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/7RFdMNrySy"},"Discord"),"."),(0,a.kt)("h3",{id:"markdown"},"Markdown"),(0,a.kt)("p",null,"The documentation is written in ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown"),". If you've never used it, ",(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"this guide")," should help you get started quickly."),(0,a.kt)("h3",{id:"react-components"},"React Components"),(0,a.kt)("p",null,"Technically, you also can add more complex behavior using ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," components and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"JavaScript"),". But you probably won't need to."),(0,a.kt)("h3",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," framework creates a documentation website from markdown (and JavaScript) files inside the repository. For the most part, this can be ignored since the output format doesn't change if you only edit the contents. Should you want to make more sweeping changes that affect the layout of the website itself, you'll likely have to learn a bit more about it first."),(0,a.kt)("h3",{id:"nodejs-and-the-node-package-manager"},"NodeJS and the Node Package Manager"),(0,a.kt)("p",null,"While not required to change the documentation, you may want to download ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS")," and the included ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," tool. Once you have them installed, you can run any of the preconfigured ",(0,a.kt)("a",{parentName:"p",href:"#npm-scripts"},"NPM script commands")," in the project root to perform a variety of development tasks. If you're only interested in the contents and writing, you don't need to worry about this at all."),(0,a.kt)("h2",{id:"content-guidelines"},"Content Guidelines"),(0,a.kt)("p",null,"Unfortunately, some restrictions need to be applied to the content of this website to ensure it's maximally useful and long-lived."),(0,a.kt)("h3",{id:"accuracy-and-sourcing"},"Accuracy and Sourcing"),(0,a.kt)("p",null,"Adding information that might be wrong, but seems like it has a decent chance of being true, is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," a problem. In many cases, it will simply be too difficult (or even impossible) to ascertain the veracity of information due to lack of reliable sources."),(0,a.kt)("p",null,"However, in these cases a disclaimer should be added in the form of ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Docusaurus admonitions"),". This is how one would look:"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section contains unverified information and/or speculation. It may or may not be completely wrong.")),(0,a.kt)("p",null,"Beyond this, sources can be added in ",(0,a.kt)("em",{parentName:"p"},"italics")," below ",(0,a.kt)("a",{parentName:"p",href:"https://commonmark.org/help/tutorial/05-blockquotes.html"},"block quotes"),". Here's an example for how this might look:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a piece of information that originates with a third-party, printed verbatim ","[or with minor, cosmetic adjustments]",".")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Source: Completely made up, but you should include the actual source here. Don't forget to include the link if one is available.")),(0,a.kt)("p",null,"The purpose of adding these notes is to make it easy to spot sections that could benefit from some more research."),(0,a.kt)("h3",{id:"placeholders"},"Placeholders"),(0,a.kt)("p",null,"While having empty sections in the documentation can be frustrating for the reader, there are situations where adding a placeholder is acceptable. Whenever you're aware of an important topic that should be covered, but currently isn't - for example because no one knows the details - you can add a placeholder notice via ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Docusaurus admonitions"),". Here's an example:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!")),(0,a.kt)("p",null,"Please also ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/issues/new"},"open an issue")," if there isn't one, to create a reminder and aggregate information about the topic to be documented."),(0,a.kt)("h3",{id:"legal-requirements"},"Legal Requirements"),(0,a.kt)("p",null,"In order to ensure that the documentation doesn't overstep the legal boundaries imposed by the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act"},"Digital Millennium Copyright Act")," and ",(0,a.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM:mi0016"},"EU legislation"),", you must be mindful of what is submitted for publishing. The ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.winehq.org/Clean_Room_Guidelines"},"WINE Clean Room Guidelines")," should provide a decent starting point, but please do employ common sense. Obviously infringing contents will not be accepted."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"You may be confused when you first take a look at the repository's codebase. Thankfully, you only need to know a few things."),(0,a.kt)("h3",{id:"organization-of-the-repository"},"Organization of the Repository"),(0,a.kt)("p",null,"Here's an overview of the most important folders you'll find in this repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".github/"),": Contains GitHub Actions workflows that run automatically when you submit a Pull Request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs/"),": Contains the documentation pages, one category per folder and one markdown file per page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/components/"),": ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"React components")," that can be embedded anywhere on the website, ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/next/markdown-features/react"},"even in markdown pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/css/"),": A set of ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"Cascading Style Sheets")," files defining the visual theme of the documentation website"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/"),": Dynamic pages that require more than just markdown and aren't part of the documentation itself"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static/img/"),": Images that are not specific to any one documentation page, such as the website's logo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static/fonts/"),": All fonts that are references in the website's CSS, alongside their respective licenses")),(0,a.kt)("p",null,"There's also files like the docusaurus configuration and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," package definition, but you probably don't need to change them."),(0,a.kt)("h3",{id:"npm-scripts"},"NPM Scripts"),(0,a.kt)("p",null,"You can work with the website on your local computer by typing any of the following preconfigured script commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm start"),": Start a local development web server and open the website in your browser (this may take a while)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run format-check"),": Check all contents to make sure they follow the formatting rules (does not alter the files)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run autoformat"),": Run the formatter on all files to apply formatting rules (",(0,a.kt)("em",{parentName:"li"},"does")," alter the files on disk!)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run linter"),": Run static analysis to check for style violations (only applies to code files, not documentation pages)")),(0,a.kt)("p",null,"In addition to the above, all default ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/cli"},"Docusaurus commands")," should work, but you probably won't ever need them."),(0,a.kt)("h2",{id:"writing"},"Writing"),(0,a.kt)("p",null,"Writing excellent technical documentation is far easier said than done, so here's some pointers to make it more manageable."),(0,a.kt)("h3",{id:"documentation-categories"},"Documentation Categories"),(0,a.kt)("p",null,"For the most part, the contents of the documentation can be found in the top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"docs"),' folder. Each section consists of a folder with a "table of contents" page, the ',(0,a.kt)("inlineCode",{parentName:"p"},"index"),", and individual markdown pages for each article. The ",(0,a.kt)("inlineCode",{parentName:"p"},"_category_.json")," file is a special Docusaurus construct that allows setting the title and location (i.e., where the category should be displayed in the sidebar)."),(0,a.kt)("h3",{id:"documentation-types"},"Documentation Types"),(0,a.kt)("p",null,"A useful model for separating documentation into is described ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.divio.com/"},"here"),". The system works by sorting articles into one of four categories, which makes it easier to write targeted documentation that answers all the relevant questions. This project loosely follows the system, by dedicating each page to (mostly) a single type of documentation. This isn't a strict requirement ",(0,a.kt)("em",{parentName:"p"},"currently"),"."),(0,a.kt)("h3",{id:"recommended-style-guide"},"Recommended Style Guide"),(0,a.kt)("p",null,"Adherence to a specific style guide isn't currently mandatory, though it's recommended to follow ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/style"},"Google's Developer Documentation Style Guide"),". Adoption of a consistent style is already planned for the future, though it's currently a lower priority than simply completing the documentation of all important topics and researching the many missing details."),(0,a.kt)("h3",{id:"technical-writing-resources"},"Technical Writing Resources"),(0,a.kt)("p",null,"If you want to learn more about technical writing, here's a few links that can help you improve:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/tech-writing"},"Google's Technical Writing Course")," should be your first stop, as it covers the basics of writing about a technical subject"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://services.google.com/fh/files/misc/state-of-devops-2021.pdf"},"Google's State of DevOps Report (2021)")," includes a short section about software documentation on pages 21 to 23"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://thegooddocsproject.dev/"},"Good Docs Project")," offers some useful resources, such as an ",(0,a.kt)("a",{parentName:"li",href:"https://thegooddocsproject.dev/ia-guide/"},"Information Architecture Guide"))),(0,a.kt)("p",null,"Remember: It's better to write something than nothing and then iterate on it later. All contributions are welcome!"))}d.isMDXComponent=!0}}]);