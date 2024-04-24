"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=o.createContext({}),p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,u=c["".concat(d,".").concat(m)]||c[m]||f[m]||n;return r?o.createElement(u,a(a({ref:t},s),{},{components:r})):o.createElement(u,a({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(39960),i=r(86010),n=r(67294),a=r(16550);function l(e){let{title:t,url:r,description:l,command:d}=e;const{pathname:p}=(0,a.TH)(),s=p.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk")||s.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),l?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},l):null)}},86892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=r(87462),i=(r(67294),r(3905)),n=r(62872);const a={},l="portfolio",d={unversionedId:"terminal/reference/portfolio/index",id:"terminal/reference/portfolio/index",title:"portfolio",description:"<ReferenceCard",source:"@site/content/terminal/reference/portfolio/index.mdx",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/",permalink:"/terminal/reference/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"alloc",permalink:"/terminal/reference/portfolio/alloc"}},p={},s=[],c={toc:s},f="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"portfolio"},"portfolio"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"Brokers",description:"balances, history, holdings, movers, quote, account, deposits, history, orders, cancel, companynews, create, hold, lastnews, login, logout, lookup, paexport, pending, topnews, update, history, holdings",url:"portfolio/brokers",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Po",description:"blacklitterman, dividend, ef, equal, file, herc, hrp, load, maxdecorr, maxdiv, maxret, maxsharpe, maxutil, minrisk, mktcap, nco, plot, property, relriskparity, riskparity, rpf, show, arg, load, save, set",url:"portfolio/po",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Portfolio_analysis",description:"group, load, view",url:"portfolio/portfolio_analysis",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"alloc",description:"The page serves as a documentation for 'alloc' - a python function that",url:"portfolio/alloc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"attrib",description:"The page provides detailed information on how to use the 'attrib' command",url:"portfolio/attrib",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks",url:"portfolio/bench",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"distr",description:"This page provides information on how to compute the distribution of",url:"portfolio/distr",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"dret",description:"The dret page is about getting daily returns for specific periods. Users",url:"portfolio/dret",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"es",description:"This documentation page provides guidance on how to use the Expected",url:"portfolio/es",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"holdp",description:"A guide on how to use the holdp function to display holdings of assets",url:"portfolio/holdp",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"holdv",description:"The page provides detailed information on the usage, the required and",url:"portfolio/holdv",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"load",description:"The 'load' function allows users to load their portfolio transactions",url:"portfolio/load",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"maxdd",description:"This page provides a detailed guideline on how to use 'maxdd' command",url:"portfolio/maxdd",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"metric",description:"This page provides detailed instructions on how to display a chosen metric",url:"portfolio/metric",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"mret",description:"This page is about the mret tool that helps to calculate monthly returns.",url:"portfolio/mret",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"om",description:"A documentation page providing information about the om function that",url:"portfolio/om",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"perf",description:"The 'perf' function displays the performance metrics of both individual",url:"portfolio/perf",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"rbeta",description:"This page provides a detailed guide on the use of the 'rbeta' function",url:"portfolio/rbeta",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"rsharpe",description:"The page provides comprehensive instructions on how to use the 'rsharpe'",url:"portfolio/rsharpe",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"rvol",description:"Rvol page shows the rolling volatility portfolio versus benchmark. It",url:"portfolio/rvol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"show",description:"This documentation page describes the 'show' command, which presents",url:"portfolio/show",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"summary",description:"The page provides a detailed guide on how to display a summary of portfolio",url:"portfolio/summary",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"var",description:"Learn how to calculate the Value at Risk (VaR) of your portfolio using",url:"portfolio/var",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"yret",description:"This page provides a guide on how to use the command 'yret' for determining",url:"portfolio/yret",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);