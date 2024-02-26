"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),o=r(86010),a=r(67294),i=r(16550),s=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:u}=(0,i.TH)(),d=u.replace(/\/v\d+/,""),m=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&a.createElement(s.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},47803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(26515),i=r(88828);const s={title:"Routines"},l=void 0,c={unversionedId:"terminal/usage/routines/index",id:"terminal/usage/routines/index",title:"Routines",description:"<NewReferenceCard",source:"@site/content/terminal/usage/routines/index.mdx",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/",permalink:"/terminal/usage/routines/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/index.mdx",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"Routines"},sidebar:"tutorialSidebar",previous:{title:"Export data",permalink:"/terminal/usage/outputs/export-data"},next:{title:"The Pipeline of Commands",permalink:"/terminal/usage/routines/pipeline-of-commands"}},u={},d=[],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"The Pipeline of Commands",description:"Pipeline multiple commands together for a faster workflow",url:"routines/pipeline-of-commands",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"Introduction to Routines",description:"Create repeatable workflows with OpenBB routines that you can share with colleagues",url:"routines/introduction-to-routines",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"Overlay Financial Data",description:"Learn how to overlay multiple financial datasets into the same chart",url:"routines/overlay-financial-data",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"Routine Macro Recorder",description:"Leverage the macro recorder to quickly build your favourite workflow routines",url:"routines/routine-macro-recorder",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"Routines for Power Users",description:"Become an OpenBB Terminal power user by understanding routines inputs, setting variables, creating loops and more",url:"routines/routines-for-power-users",mdxType:"NewReferenceCard"}),(0,o.kt)(a.Z,{title:"Community Routines",description:"Learn from other investors by diving into their OpenBB routines",url:"routines/community-routines",mdxType:"NewReferenceCard"})))}f.isMDXComponent=!0}}]);