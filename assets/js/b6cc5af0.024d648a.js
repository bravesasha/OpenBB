"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},14597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const o={title:"mktcap",description:"The mktcap page describes the usage and parameters of the market cap estimate over time. The source for this data is Yahoo Finance. A Python line command is used to fetch and display this information.",keywords:["mktcap","market cap estimate","Yahoo Finance","python commands","financial data","parameters","starting date","data visualisation"]},c=void 0,l={unversionedId:"terminal/reference/stocks/fa/mktcap",id:"terminal/reference/stocks/fa/mktcap",title:"mktcap",description:"The mktcap page describes the usage and parameters of the market cap estimate over time. The source for this data is Yahoo Finance. A Python line command is used to fetch and display this information.",source:"@site/content/terminal/reference/stocks/fa/mktcap.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/mktcap",permalink:"/terminal/reference/stocks/fa/mktcap",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/mktcap.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"mktcap",description:"The mktcap page describes the usage and parameters of the market cap estimate over time. The source for this data is Yahoo Finance. A Python line command is used to fetch and display this information.",keywords:["mktcap","market cap estimate","Yahoo Finance","python commands","financial data","parameters","starting date","data visualisation"]},sidebar:"tutorialSidebar",previous:{title:"mgmt",permalink:"/terminal/reference/stocks/fa/mgmt"},next:{title:"overview",permalink:"/terminal/reference/stocks/fa/overview"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"stocks/fa/mktcap - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Market Cap estimate over time. ","[Source: Yahoo Finance]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"mktcap [-s START]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the market cap display"),(0,n.kt)("td",{parentName:"tr",align:null},"2019-11-23"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/156903038-46f46af1-68ca-435b-aed7-842da041864a.png",alt:"gnus_mktcap"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);