"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},27063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"sectors",description:"The page contains information about the 'sectors' command that retrieves a summary of all prints by % of MarketCap by Sector over the last x days. The details include the command usage, parameters required and examples to follow. ",keywords:["sectors command","MarketCap by sector","darkpool activity","sector market cap","accumulation","days parameter","sector parameter"]},i=void 0,s={unversionedId:"bot/reference/telegram/darkpool/sectors",id:"bot/reference/telegram/darkpool/sectors",title:"sectors",description:"The page contains information about the 'sectors' command that retrieves a summary of all prints by % of MarketCap by Sector over the last x days. The details include the command usage, parameters required and examples to follow. ",source:"@site/content/bot/reference/telegram/darkpool/sectors.md",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/sectors",permalink:"/bot/reference/telegram/darkpool/sectors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/sectors.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"sectors",description:"The page contains information about the 'sectors' command that retrieves a summary of all prints by % of MarketCap by Sector over the last x days. The details include the command usage, parameters required and examples to follow. ",keywords:["sectors command","MarketCap by sector","darkpool activity","sector market cap","accumulation","days parameter","sector parameter"]},sidebar:"tutorialSidebar",previous:{title:"levels",permalink:"/bot/reference/telegram/darkpool/levels"},next:{title:"summary",permalink:"/bot/reference/telegram/darkpool/summary"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"darkpool: sectors - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve a summary of all prints by % of MarketCap by Sector over the last x days. The user will be able to view the sector's market cap divided by total darkpool activity to see possible accumulation."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sectors days sector\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector to filter by: ",(0,n.kt)("inlineCode",{parentName:"td"},"bm"),": (Basic Materials), ",(0,n.kt)("inlineCode",{parentName:"td"},"e"),": (Energy), ",(0,n.kt)("inlineCode",{parentName:"td"},"cs"),": (Communication Services), ",(0,n.kt)("inlineCode",{parentName:"td"},"cc"),": (Consumer Cyclical), ",(0,n.kt)("inlineCode",{parentName:"td"},"cd"),": (Consumer Defensive), ",(0,n.kt)("inlineCode",{parentName:"td"},"f"),": (Financial), ",(0,n.kt)("inlineCode",{parentName:"td"},"h"),": (Healthcare), ",(0,n.kt)("inlineCode",{parentName:"td"},"i"),": (Industrials), ",(0,n.kt)("inlineCode",{parentName:"td"},"re"),": (Real Estate), ",(0,n.kt)("inlineCode",{parentName:"td"},"t"),": (Technology), ",(0,n.kt)("inlineCode",{parentName:"td"},"u"),": (Utilities)"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/sectors 5 bm\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);