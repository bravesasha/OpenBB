"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52934],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(86010),o=t(67294),l=t(16550),s=t(48334);function c(e){let{title:r,url:t,description:c,command:i}=e;const{pathname:d}=(0,l.TH)(),u=d.replace(/\/v\d+/,""),p=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":u.startsWith("/excel"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&o.createElement(s.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},95296:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const l={},s="Regulators",c={unversionedId:"platform/reference/regulators/index",id:"platform/reference/regulators/index",title:"Regulators",description:"Menus",source:"@site/content/platform/reference/regulators/index.mdx",sourceDirName:"platform/reference/regulators",slug:"/platform/reference/regulators/",permalink:"/platform/reference/regulators/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/regulators/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/platform/reference/equity/search"},next:{title:"Cftc",permalink:"/platform/reference/regulators/cftc/"}},i={},d=[{value:"Menus",id:"menus",level:3}],u={toc:d},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"regulators"},"Regulators"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Cftc",description:"cot_search, cot",url:"/platform/reference/regulators/cftc",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sec",description:"symbol_map, sic_search, cik_map, institutions_search, schema_files, rss_litigation",url:"/platform/reference/regulators/sec",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);