"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(35742);function s(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},5454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),s=r(88828);const i={title:"trendingst",description:"The docusaurus page explains how to use the 'trendingst' command to retrieve the top 15 trending stocks from StockTwits. It covers details on how the command works, its usage, and provides examples.",keywords:["trending stocks","stocktwits","most discussed stocks","popular stocks","stock market trends","/disc trendingst"]},a=void 0,c={unversionedId:"bot/reference/discord/discovery/trendingst",id:"bot/reference/discord/discovery/trendingst",title:"trendingst",description:"The docusaurus page explains how to use the 'trendingst' command to retrieve the top 15 trending stocks from StockTwits. It covers details on how the command works, its usage, and provides examples.",source:"@site/content/bot/reference/discord/discovery/trendingst.md",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/trendingst",permalink:"/bot/reference/discord/discovery/trendingst",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/trendingst.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{title:"trendingst",description:"The docusaurus page explains how to use the 'trendingst' command to retrieve the top 15 trending stocks from StockTwits. It covers details on how the command works, its usage, and provides examples.",keywords:["trending stocks","stocktwits","most discussed stocks","popular stocks","stock market trends","/disc trendingst"]},sidebar:"tutorialSidebar",previous:{title:"splits",permalink:"/bot/reference/discord/discovery/splits"},next:{title:"wsb",permalink:"/bot/reference/discord/discovery/wsb"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{title:"discovery: trendingst - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the top 15 trending stocks from StockTwits according to the most recent discussions. The stocks are displayed in order of most trending, as determined by the most discussed stocks in the StockTwits community. This command is an efficient way to stay up to date on the most popular stocks in the market."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/disc trendingst\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/disc trendingst\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);