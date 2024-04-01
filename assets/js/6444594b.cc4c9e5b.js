"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(39960),n=r(86010),o=r(67294),i=r(16550),s=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:d}=(0,i.TH)(),u=d.replace(/\/v\d+/,""),m=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return o.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":u.startsWith("/excel"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&o.createElement(s.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},39301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(26515);const i={},s="Stats",l={unversionedId:"platform/reference/quantitative/stats/index",id:"platform/reference/quantitative/stats/index",title:"Stats",description:"Commands",source:"@site/content/platform/reference/quantitative/stats/index.mdx",sourceDirName:"platform/reference/quantitative/stats",slug:"/platform/reference/quantitative/stats/",permalink:"/platform/reference/quantitative/stats/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/stats/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quantitative",permalink:"/platform/reference/quantitative/"},next:{title:"kurtosis",permalink:"/platform/reference/quantitative/stats/kurtosis"}},c={},d=[{value:"Commands",id:"commands",level:3}],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stats"},"Stats"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"quantile",description:"Calculate the quantile of a target column at a specified quantile percentage",url:"/platform/reference/quantitative/stats/quantile",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"stdev",description:"Calculate the rolling standard deviation of a target column",url:"/platform/reference/quantitative/stats/stdev",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"mean",description:"Calculate the mean (average) of a target column",url:"/platform/reference/quantitative/stats/mean",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"variance",description:"Calculate the variance of a target column",url:"/platform/reference/quantitative/stats/variance",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"kurtosis",description:"Calculate the rolling kurtosis of a target column",url:"/platform/reference/quantitative/stats/kurtosis",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"skew",description:"Get the skew of the data set",url:"/platform/reference/quantitative/stats/skew",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);