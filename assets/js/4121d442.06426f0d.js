"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},84359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",keywords:["blockchain","active blockchain addresses","tracking blockchain","change command","exchange platform","blockchain data tracking","data fetching","data commands","coinex","bittrex","binance","poloniex","blockchain analytics","glassnode source","command parameters","bitfinex","kraken","okex","bithumb","coinbase","luno"]},l=void 0,c={unversionedId:"terminal/reference/crypto/dd/change",id:"terminal/reference/crypto/dd/change",title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",source:"@site/content/terminal/reference/crypto/dd/change.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/change",permalink:"/terminal/reference/crypto/dd/change",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/change.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",keywords:["blockchain","active blockchain addresses","tracking blockchain","change command","exchange platform","blockchain data tracking","data fetching","data commands","coinex","bittrex","binance","poloniex","blockchain analytics","glassnode source","command parameters","bitfinex","kraken","okex","bithumb","coinbase","luno"]},sidebar:"tutorialSidebar",previous:{title:"bc",permalink:"/terminal/reference/crypto/dd/bc"},next:{title:"dev",permalink:"/terminal/reference/crypto/dd/dev"}},d={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"crypto /dd/change - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Display active blockchain addresses over time ","[Source: https://glassnode.org]"," Note that free api keys only allow fetching data with a 1y lag"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"change [-e {aggregated,binance,bittrex,coinex,gate.io,gemini,huobi,kucoin,poloniex,bibox,bigone,bitfinex,hitbtc,kraken,okex,bithumb,zb.com,cobinhood,bitmex,bitstamp,coinbase,coincheck,luno}] [-s SINCE] [-u UNTIL]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange to check change. Default: aggregated"),(0,r.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"aggregated, binance, bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --since"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 2 years ago"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-02-26"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"until"),(0,r.kt)("td",{parentName:"tr",align:null},"-u  --until"),(0,r.kt)("td",{parentName:"tr",align:null},"Final date. Default: 1 year ago"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-02-24"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154060004-c5367c72-d25b-48da-a316-35d8d6e5208e.png",alt:"change"})),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);