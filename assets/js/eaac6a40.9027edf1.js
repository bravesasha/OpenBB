"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),a=r(86010),o=r(67294),i=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,i.TH)(),d=l.replace(/\/v\d+/,"");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},59631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(62872);const i={},s="general",c={unversionedId:"bot/reference/discord/general/index",id:"bot/reference/discord/general/index",title:"general",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/general/index.mdx",sourceDirName:"bot/reference/discord/general",slug:"/bot/reference/discord/general/",permalink:"/bot/reference/discord/general/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/general/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"urban",permalink:"/bot/reference/discord/fun/urban"},next:{title:"futures",permalink:"/bot/reference/discord/general/futures"}},l={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general"},"general"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"futures",description:"This command allows the user to retrieve futures prices on the stock market.",url:"/bot/reference/discord/general/futures",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"heatchart",description:"This command allows the user to retrieve a Daily Market Heat Chart (15 minute delayed). The heat chart shows a...",url:"/bot/reference/discord/general/heatchart",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"heatmap",description:"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the...",url:"/bot/reference/discord/general/heatmap",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"markets",description:"This command allows the user to retrieve a markets overview which provides a quick summary of current market...",url:"/bot/reference/discord/general/markets",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"news",description:"This command allows the user to retrieve the latest news for a given ticker.",url:"/bot/reference/discord/general/news",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"quote",description:"This command allows the user to retrieve display quote stats for a stock - including the 52 week high/low, market...",url:"/bot/reference/discord/general/quote",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ta",description:"This command allows the user to retrieve a technical analysis summary for a given stock ticker. The summary...",url:"/bot/reference/discord/general/ta",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"watchlist",description:"This command allows the user to retrieve an overview of their watchlist, which includes the current price,...",url:"/bot/reference/discord/general/watchlist",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);