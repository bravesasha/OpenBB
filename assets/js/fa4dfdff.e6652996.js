"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},79270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",keywords:["quote","company information","market cap","open price","close price","price-to-equity ratio","Financial Modeling Prep","Shares outstanding","Day high","Day low","Earnings announcement","Eps","Exchange","Name","Open","Pe","Previous close","Price","Price avg200","Price avg50","Symbol","Timestamp","Volume","Year high","Year low"]},c=void 0,l={unversionedId:"terminal/reference/stocks/fa/quote",id:"terminal/reference/stocks/fa/quote",title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",source:"@site/content/terminal/reference/stocks/fa/quote.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/quote",permalink:"/terminal/reference/stocks/fa/quote",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/quote.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",keywords:["quote","company information","market cap","open price","close price","price-to-equity ratio","Financial Modeling Prep","Shares outstanding","Day high","Day low","Earnings announcement","Eps","Exchange","Name","Open","Pe","Previous close","Price","Price avg200","Price avg50","Symbol","Timestamp","Volume","Year high","Year low"]},sidebar:"tutorialSidebar",previous:{title:"profile",permalink:"/terminal/reference/stocks/fa/profile"},next:{title:"ratios",permalink:"/terminal/reference/stocks/fa/ratios"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks/fa/quote - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints actual information about the company which is, among other things, the day high, market cap, open and close price and price-to-equity ratio. The following fields are expected: Avg volume, Change, Changes percentage, Day high, Day low, Earnings announcement, Eps, Exchange, Market cap, Name, Open, Pe, Previous close, Price, Price avg200, Price avg50, Shares outstanding, Symbol, Timestamp, Volume, Year high, and Year low. ","[Source: Financial Modeling Prep]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"quote\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);