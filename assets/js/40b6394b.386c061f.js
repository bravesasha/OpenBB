"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=o(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},35717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const l={title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",keywords:["curve documentation","curve usage","futures curve","financial parameter","financial trading","YahooFinance"]},u=void 0,c={unversionedId:"terminal/reference/futures/curve",id:"terminal/reference/futures/curve",title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",source:"@site/content/terminal/reference/futures/curve.md",sourceDirName:"terminal/reference/futures",slug:"/terminal/reference/futures/curve",permalink:"/terminal/reference/futures/curve",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/futures/curve.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",keywords:["curve documentation","curve usage","futures curve","financial parameter","financial trading","YahooFinance"]},sidebar:"tutorialSidebar",previous:{title:"futures",permalink:"/terminal/reference/futures/"},next:{title:"historical",permalink:"/terminal/reference/futures/historical"}},o={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"futures /curve - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display futures curve. ","[Source: YahooFinance]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"curve -t TICKER\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Future curve to be selected"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"YI, ALI, BLK, AW, BZ, BZT, CB, CSC, GEO, ZW, ZWT, DC, GDK, HG0, HGT, ZC, ZCT, CLT, DY, QC, QM, XAE, QO, GC, SGU, QG, QH, QU, QI, GF, GFT, GCT, KE, KET, HE, HET, LE, LET, HG, MHG, MGC, SIL, MCL, YG, XK, XC, XW, GNF, ZO, PRK, RBT, ZR, GD, SIT, ZS, ZM, ZMT, ZL, ZLT, SBT, ZN, N1U, TWE, ZT, F1U, RX, GE, GLB, ZF, 10Y, 2YY, 30Y, 5YY, SR1, ZFT, ZQ, Z3N, SR3, ZB, UB, BTM, BTC, ETH, MBT, MET, 6A, 6L, 6B, PJY, PSF, 6C, E7, J7, 6E, EAD, RP, ECD, RY, ENK, ESK, RF, SIR, 6J, KRW, 6M, M6A, MCD, MSF, M6E, M6B, MIR, M6C, M6J, 6N, NKD, NIY, NOK, 6R, 6Z, SEK, 6S, SJY, TPY, YMT, NQT, EST, XAF, RS1, RSG, RSV, RTY, M2K, ESG, EMT, EMD, MNQ, MES, ES, FNG, MMW, CHH, MFS, ASN, LFM, MML, MME, MIN, USS, MWL, MWS, VLQ, SDA, SED, PL, PA, BUS, AUP, GLI, DX, FT5, MMM, MMN, MLE, YM, XAI, XAB, XAK, XAP, XAR, XAU, XAV, XAY, XAZ, BIO, NQ, NQQ, UFV, CC, KC, CT, SF, SB, OJ, NG, RB, CL, TRM")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/196562734-b3fe1c41-c103-4527-a081-5cf7dae62cce.png",alt:"Figure_1dd"})),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);