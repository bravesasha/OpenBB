"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},27050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const i={title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",keywords:["Heatmap Command","Daily Heat Maps","Stock Market Performance","Market Filter","Sector Filter"]},l=void 0,p={unversionedId:"bot/reference/telegram/overview/heatmap",id:"bot/reference/telegram/overview/heatmap",title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",source:"@site/content/bot/reference/telegram/overview/heatmap.md",sourceDirName:"bot/reference/telegram/overview",slug:"/bot/reference/telegram/overview/heatmap",permalink:"/bot/reference/telegram/overview/heatmap",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/overview/heatmap.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",keywords:["Heatmap Command","Daily Heat Maps","Stock Market Performance","Market Filter","Sector Filter"]},sidebar:"tutorialSidebar",previous:{title:"heatchart",permalink:"/bot/reference/telegram/overview/heatchart"},next:{title:"markets",permalink:"/bot/reference/telegram/overview/markets"}},m={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"overview: heatmap - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the user a quick overview of current stock market performance."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/heatmap market [sector]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market"),(0,n.kt)("td",{parentName:"tr",align:null},"Market to filter by. ",(0,n.kt)("inlineCode",{parentName:"td"},"sp500"),': "S&P 500", ',(0,n.kt)("inlineCode",{parentName:"td"},"nasdaq100"),': "NASDAQ 100", ',(0,n.kt)("inlineCode",{parentName:"td"},"iwm2000"),': "Russell 2000", ',(0,n.kt)("inlineCode",{parentName:"td"},"iwb1000"),': "Russell 1000", ',(0,n.kt)("inlineCode",{parentName:"td"},"dow30"),': "Dow Jones 30", ',(0,n.kt)("inlineCode",{parentName:"td"},"crypto"),': "Crypto"'),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"sp500, nasdaq100, iwm2000, iwb1000, dow30, crypto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector to filter by. If not specified, all sectors are returned. ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),': "Basic Materials" ',(0,n.kt)("inlineCode",{parentName:"td"},"2"),': "Conglomerates" ',(0,n.kt)("inlineCode",{parentName:"td"},"3"),': "Consumer Goods" ',(0,n.kt)("inlineCode",{parentName:"td"},"4"),': "Financial" ',(0,n.kt)("inlineCode",{parentName:"td"},"5"),': "Healthcare" ',(0,n.kt)("inlineCode",{parentName:"td"},"6"),': "Industrial Goods" ',(0,n.kt)("inlineCode",{parentName:"td"},"7"),': "Services" ',(0,n.kt)("inlineCode",{parentName:"td"},"8"),': "Technology" ',(0,n.kt)("inlineCode",{parentName:"td"},"9"),': "Utilities"'),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"0, 1, 2, 3, 4, 5, 6, 7, 8, 9")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/heatmap sp500\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/heatmap sp500 services\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);