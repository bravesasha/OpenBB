"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),n=r(86010),i=r(67294),a=r(16550);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:d}=(0,a.TH)(),l=d.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},94696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),i=r(62872);const a={},c="econometrics",s={unversionedId:"terminal/reference/econometrics/index",id:"terminal/reference/econometrics/index",title:"econometrics",description:"<ReferenceCard",source:"@site/content/terminal/reference/econometrics/index.mdx",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/",permalink:"/terminal/reference/econometrics/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/econometrics/index.mdx",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"il",permalink:"/terminal/reference/crypto/tools/il"},next:{title:"add",permalink:"/terminal/reference/econometrics/add"}},d={},l=[],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"econometrics"},"econometrics"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"add",description:"This page provides documentation for the 'add' function in an Econometrics",url:"econometrics/add",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bgod",description:"This page provides the usage, parameters, and examples of the Breusch-Godfrey",url:"econometrics/bgod",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct",url:"econometrics/bpag",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"clean",description:"This documentation page provides in-depth instructions on how to clean",url:"econometrics/clean",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"coint",description:"The Coint page provides users with an explanation and guideline on how",url:"econometrics/coint",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"combine",description:"This page provides comprehensive documentation on the 'combine' function,",url:"econometrics/combine",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"compare",description:"Detailed documentation on the 'compare' function, a python command for",url:"econometrics/compare",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"delete",description:"This documentation page provides a detailed overview of how to use the",url:"econometrics/delete",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"desc",description:"Easily analyze data with the desc command in Python. Generate comprehensive",url:"econometrics/desc",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about",url:"econometrics/dwat",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"export",description:"This documentation page guides you on how to use the 'export' command",url:"econometrics/export",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"granger",description:"This is a documentation page for Granger causality command in econometrics.",url:"econometrics/granger",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"index",description:"This page of the documentation describes how to set a (multi)index for",url:"econometrics/index",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"load",description:"This documentation page covers the function 'load', which is utilized",url:"econometrics/load",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"norm",description:"This page provides guidelines on using the 'norm' function to test whether",url:"econometrics/norm",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"ols",description:"This page explains how to perform an OLS regression on timeseries data",url:"econometrics/ols",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"panel",description:"The documentation page provides a comprehensive guide to performing regression",url:"econometrics/panel",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"plot",description:"This page provides documentation for the 'plot' command used in Python",url:"econometrics/plot",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"remove",description:"Learn how to remove a dataset from a loaded list efficiently using our",url:"econometrics/remove",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rename",description:"The 'rename' page in our documentation explains how to change the name",url:"econometrics/rename",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"root",description:"This page provides detailed info on running unit root tests on a column",url:"econometrics/root",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"show",description:"This documentation page provides a detailed overview of the 'show' function",url:"econometrics/show",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"type",description:"Learn how to show the type of the columns of your dataset or change the",url:"econometrics/type",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);