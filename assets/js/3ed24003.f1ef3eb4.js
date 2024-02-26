"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),S=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=S(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=S(n),m=a,N=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(N,o(o({ref:t},s),{},{components:n})):r.createElement(N,o({ref:t},s))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var S=2;S<l;S++)o[S]=n[S];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},57288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"exchange",description:"Documentation page for exchanging market information, including usage, parameters and selectable choices.",keywords:["Exchange","Market Information","Parameters","Docusaurus page","Documentation"]},c=void 0,i={unversionedId:"terminal/reference/stocks/th/exchange",id:"terminal/reference/stocks/th/exchange",title:"exchange",description:"Documentation page for exchanging market information, including usage, parameters and selectable choices.",source:"@site/content/terminal/reference/stocks/th/exchange.md",sourceDirName:"terminal/reference/stocks/th",slug:"/terminal/reference/stocks/th/exchange",permalink:"/terminal/reference/stocks/th/exchange",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/th/exchange.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"exchange",description:"Documentation page for exchanging market information, including usage, parameters and selectable choices.",keywords:["Exchange","Market Information","Parameters","Docusaurus page","Documentation"]},sidebar:"tutorialSidebar",previous:{title:"closed",permalink:"/terminal/reference/stocks/th/closed"},next:{title:"holidays",permalink:"/terminal/reference/stocks/th/holidays"}},S={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /th/exchange - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Select the exchange you want see open hours for"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"exchange [-n {AMEX,AMS,AQ,AQS,ARCA,AS,ASE,ASX,AT,ATH,AX,BA,BD,BK,BO,BR,BRU,BSE,BUD,BUE,CA,CAI,CCS,CM,CN,CNQ,CO,CPH,CR,CSE,DE,DOH,DU,DUS,EBS,ENX,F,F,FKA,FRA,GER,HA,HAM,HAN,HE,HEL,HKEX,HKG,HM,IC,ICE,IL,IOB,IR,IS,ISE,IST,JK,JKT,JNB,JO,JPX,KLS,KLSE,KOE,KRX,KRX,KSC,L,LIS,LIT,LS,LSE,MC,MCE,MCX,ME,MEX,MI,MIL,MU,MUN,MX,NAS,NAS,NASDQ,NASGM,NASGS,NCM,NE,NEO,NGM,NMS,NS,NSI,NX,NYQ,NYS,NYS,NYSE,NZ,NZE,OL,OSL,OTC,PA,PAR,PCX,PNK,PR,PRA,QA,RG,RIS,S,SA,SAO,SAP,SAT,SAU,SES,SET,SG,SGO,SHH,SHZ,SHZE,SI,SN,SR,SS,ST,ST,STO,STU,SW,T,TA,TAL,TI,TL,TLO,TLV,TO,TOR,TW,TWO,TWO,TWSE,V,VAN,VI,VIE,VS}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"-n  --name"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange short name"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"AMEX, AMS, AQ, AQS, ARCA, AS, ASE, ASX, AT, ATH, AX, BA, BD, BK, BO, BR, BRU, BSE, BUD, BUE, CA, CAI, CCS, CM, CN, CNQ, CO, CPH, CR, CSE, DE, DOH, DU, DUS, EBS, ENX, F, F, FKA, FRA, GER, HA, HAM, HAN, HE, HEL, HKEX, HKG, HM, IC, ICE, IL, IOB, IR, IS, ISE, IST, JK, JKT, JNB, JO, JPX, KLS, KLSE, KOE, KRX, KRX, KSC, L, LIS, LIT, LS, LSE, MC, MCE, MCX, ME, MEX, MI, MIL, MU, MUN, MX, NAS, NAS, NASDQ, NASGM, NASGS, NCM, NE, NEO, NGM, NMS, NS, NSI, NX, NYQ, NYS, NYS, NYSE, NZ, NZE, OL, OSL, OTC, PA, PAR, PCX, PNK, PR, PRA, QA, RG, RIS, S, SA, SAO, SAP, SAT, SAU, SES, SET, SG, SGO, SHH, SHZ, SHZE, SI, SN, SR, SS, ST, ST, STO, STU, SW, T, TA, TAL, TI, TL, TLO, TLV, TO, TOR, TW, TWO, TWO, TWSE, V, VAN, VI, VIE, VS")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);