"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72503],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(35742);function o(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},76333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const s={title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},i=void 0,l={unversionedId:"terminal/faqs/data_sources",id:"terminal/faqs/data_sources",title:"Data and Sources",description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",source:"@site/content/terminal/faqs/data_sources.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/data_sources",permalink:"/terminal/faqs/data_sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/data_sources.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",sidebarPosition:4,frontMatter:{title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},sidebar:"tutorialSidebar",previous:{title:"General Operation",permalink:"/terminal/faqs/general_operation"},next:{title:"Bugs, Support, and Feedback",permalink:"/terminal/faqs/bugs_support_feedback"}},u={},c=[{value:"Data and Sources",id:"data-and-sources",level:2}],d={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Data and Sources - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("h2",{id:"data-and-sources"},"Data and Sources"),(0,n.kt)("p",null,"Please note that OpenBB does not provide any data, it is an aggregator which provides users access to data from a variety of sources. OpenBB does not maintain or have any control over the raw data supplied. If there is a specific problem with the output from a data provider, please consider contacting them first."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Is there a list of all data providers?"),(0,n.kt)("p",null,"The complete list is found ",(0,n.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"here"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I find and load a ticker symbol from India, or any other country?"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/stocks/introduction#search"},(0,n.kt)("inlineCode",{parentName:"a"},"/stocks/search"))," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"search --country canada --industrygroup banks\n")),(0,n.kt)("p",null,"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"load ricoauto.ns\n")),(0,n.kt)("p",null,"The precise naming convention will differ by source, reference each source's own documentation for specific details.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Data from today is missing."),(0,n.kt)("p",null,"By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,n.kt)("inlineCode",{parentName:"p"},"interval")," argument is present."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"load SPY -i 60\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can I stream live prices and news feeds?"),(0,n.kt)("p",null,"The OpenBB Terminal is not currently capable of streaming live feeds through websocket connections.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,'"Pair BTC/USDT not found in binance"'),(0,n.kt)("p",null,"US-based users are currently unable to access the Binance API. Please try loading the pair from a different source, for example:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"load btc --source CCXT --exchange kraken"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How can I request functionality for a specific data source?"),(0,n.kt)("p",null,"Please ",(0,n.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"request a feature")," by submitting a new request.")))}f.isMDXComponent=!0}}]);