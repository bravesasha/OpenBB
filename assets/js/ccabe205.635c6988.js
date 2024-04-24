"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16435],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,u=m["".concat(s,".").concat(d)]||m[d]||k[d]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(35742);function o(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},64065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const l={title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",keywords:["target variable","stock analysis","daily stock","tsla stock","pick","stock parameter selection","stock market","stock data manipulation","market data","financial data analysis","time series data"]},i=void 0,s={unversionedId:"terminal/reference/stocks/qa/pick",id:"terminal/reference/stocks/qa/pick",title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",source:"@site/content/terminal/reference/stocks/qa/pick.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/pick",permalink:"/terminal/reference/stocks/qa/pick",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/pick.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",keywords:["target variable","stock analysis","daily stock","tsla stock","pick","stock parameter selection","stock market","stock data manipulation","market data","financial data analysis","time series data"]},sidebar:"tutorialSidebar",previous:{title:"om",permalink:"/terminal/reference/stocks/qa/om"},next:{title:"qqplot",permalink:"/terminal/reference/stocks/qa/qqplot"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},k="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"stocks/qa/pick - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Change target variable"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pick [-t {open,high,low,close,adjclose,volume,date_id,oc_high,oc_low,returns,logret,logprice}]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"Select variable to analyze"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"open, high, low, close, adjclose, volume, date_id, oc_high, oc_low, returns, logret, logprice")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:12\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ pick adjclose\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);