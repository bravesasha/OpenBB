"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},68354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const l={title:"all_binance_trading_pairs",description:"This page provides the function to get all available trading pairs on Binance in DataFrame format with columns including symbol, baseAsset, and quoteAsset. This function does not require any parameters.",keywords:["Binance","Trading pairs","baseAsset","quoteAsset","Crypto Trading"]},o=void 0,s={unversionedId:"sdk/reference/crypto/dd/all_binance_trading_pairs",id:"sdk/reference/crypto/dd/all_binance_trading_pairs",title:"all_binance_trading_pairs",description:"This page provides the function to get all available trading pairs on Binance in DataFrame format with columns including symbol, baseAsset, and quoteAsset. This function does not require any parameters.",source:"@site/content/sdk/reference/crypto/dd/all_binance_trading_pairs.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/all_binance_trading_pairs",permalink:"/sdk/reference/crypto/dd/all_binance_trading_pairs",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/dd/all_binance_trading_pairs.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"all_binance_trading_pairs",description:"This page provides the function to get all available trading pairs on Binance in DataFrame format with columns including symbol, baseAsset, and quoteAsset. This function does not require any parameters.",keywords:["Binance","Trading pairs","baseAsset","quoteAsset","Crypto Trading"]},sidebar:"tutorialSidebar",previous:{title:"active",permalink:"/sdk/reference/crypto/dd/active"},next:{title:"balance",permalink:"/sdk/reference/crypto/dd/balance"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"crypto.dd.all_binance_trading_pairs - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Returns all available pairs on Binance in DataFrame format. DataFrame has 3 columns symbol, baseAsset, quoteAsset"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L58"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"openbb.crypto.dd.all_binance_trading_pairs()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"All available pairs on Binance",(0,a.kt)("br",null),"Columns: symbol, baseAsset, quoteAsset")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);