"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,v=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(v,i(i({ref:t},m),{},{components:r})):n.createElement(v,i({ref:t},m))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},34099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"markets",description:"This documentation page is about the '/markets' command which allows the user to retrieve a quick summary of current market conditions, including prices of the largest ETFs, and movements of stocks relative to the SMA 200/50.",keywords:["/markets command","market conditions overview","largest ETFs prices","stocks movements","SMA 200/50","Advancers / Decliners"]},s=void 0,c={unversionedId:"bot/reference/telegram/overview/markets",id:"bot/reference/telegram/overview/markets",title:"markets",description:"This documentation page is about the '/markets' command which allows the user to retrieve a quick summary of current market conditions, including prices of the largest ETFs, and movements of stocks relative to the SMA 200/50.",source:"@site/content/bot/reference/telegram/overview/markets.md",sourceDirName:"bot/reference/telegram/overview",slug:"/bot/reference/telegram/overview/markets",permalink:"/bot/reference/telegram/overview/markets",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/overview/markets.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"markets",description:"This documentation page is about the '/markets' command which allows the user to retrieve a quick summary of current market conditions, including prices of the largest ETFs, and movements of stocks relative to the SMA 200/50.",keywords:["/markets command","market conditions overview","largest ETFs prices","stocks movements","SMA 200/50","Advancers / Decliners"]},sidebar:"tutorialSidebar",previous:{title:"heatmap",permalink:"/bot/reference/telegram/overview/heatmap"},next:{title:"watchlist",permalink:"/bot/reference/telegram/overview/watchlist"}},l={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"overview: markets - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve a markets overview which provides a quick summary of current market conditions. The overview includes prices of the largest ETFs, with the amount of stocks current above and below the SMA 200/50 and Advancers / Decliners."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/markets\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/markets\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);