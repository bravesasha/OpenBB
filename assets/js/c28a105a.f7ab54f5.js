"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,c=e.mdxType,n=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(r),h=c,f=m["".concat(s,".").concat(h)]||m[h]||p[h]||n;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=r.length,o=new Array(n);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:c,o[1]=i;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(39960),c=r(86010),n=r(67294),o=r(16550);function i(e){let{title:t,url:r,description:i,command:s}=e;const{pathname:d}=(0,o.TH)(),l=d.replace(/\/v\d+/,"");return n.createElement(a.Z,{className:(0,c.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},30993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),c=(r(67294),r(3905)),n=r(62872);const o={},i="charts",s={unversionedId:"bot/reference/discord/charts/index",id:"bot/reference/discord/charts/index",title:"charts",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/charts/index.mdx",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/",permalink:"/bot/reference/discord/charts/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/charts/index.mdx",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"commands manage",permalink:"/bot/reference/discord/autopost/remove"},next:{title:"c15m",permalink:"/bot/reference/discord/charts/c15m"}},d={},l=[],m={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,c.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"charts"},"charts"),(0,c.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,c.kt)(n.Z,{title:"c15m",description:"This command allows the user to retrieve a 15-minute intraday chart for a given ticker. The chart will show the...",url:"/bot/reference/discord/charts/c15m",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"c3m",description:"This command allows users to retrieve a 3-minute intraday chart for the given ticker. This chart will display the...",url:"/bot/reference/discord/charts/c3m",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"c5m",description:"This command allows the user to retrieve an intraday 5 minute chart for a given ticker. This chart will display...",url:"/bot/reference/discord/charts/c5m",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"cc",description:"This command allows the user to retrieve an intraday 5 minute chart for a given ticker, /c5m also has the same...",url:"/bot/reference/discord/charts/cc",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"cd",description:"This command allows the user to retrieve a daily candlestick chart for a particular ticker or coin. The...",url:"/bot/reference/discord/charts/cd",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"chart",description:"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of...",url:"/bot/reference/discord/charts/chart",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"chartfib",description:"This command allows the user to retrieve Fibonacci levels for a given ticker. This data can be used to identify...",url:"/bot/reference/discord/charts/chartfib",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"chartsr",description:"This command allows the user to retrieve Displays Support and Resistance Levels for the ticker provided. It will...",url:"/bot/reference/discord/charts/chartsr",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"cm",description:"This command allows you to view a monthly candlestick chart for a given stock or cryptocurrency. The chart...",url:"/bot/reference/discord/charts/cm",mdxType:"ReferenceCard"}),(0,c.kt)(n.Z,{title:"cw",description:"This command allows the user to retrieve a weekly candlestick chart for the ticker/coin provided. The chart...",url:"/bot/reference/discord/charts/cw",mdxType:"ReferenceCard"})))}h.isMDXComponent=!0}}]);