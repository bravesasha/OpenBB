"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||c;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),c=t(67294),o=t(16550),i=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return c.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&c.createElement(i.Z,{className:"ml-auto mr-4"})),l?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},70167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),c=t(26515);const o={},i="Currency",l={unversionedId:"platform/reference/currency/index",id:"platform/reference/currency/index",title:"Currency",description:"Menus",source:"@site/content/platform/reference/currency/index.mdx",sourceDirName:"platform/reference/currency",slug:"/platform/reference/currency/",permalink:"/platform/reference/currency/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/currency/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"symbol_map",permalink:"/platform/reference/regulators/sec/symbol_map"},next:{title:"Price",permalink:"/platform/reference/currency/price/"}},s={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"currency"},"Currency"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(c.Z,{title:"Price",description:"historical",url:"/platform/reference/currency/price",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(c.Z,{title:"snapshots",description:"Snapshots of currency exchange rates from an indirect or direct perspective of a base currency",url:"/platform/reference/currency/snapshots",mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"search",description:"Currency Search",url:"/platform/reference/currency/search",mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"reference rates",description:"Current, official, currency reference rates",url:"/platform/reference/currency/reference_rates",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);