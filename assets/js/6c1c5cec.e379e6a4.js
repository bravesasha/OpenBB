"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},66449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",keywords:["OpenBB.Finance Terminal","Reddit ticker analysis","Python function","Behavioral analysis","Popular tickers","Subreddits","Post analysis","DataFrames"]},o=void 0,s={unversionedId:"sdk/reference/stocks/ba/popular",id:"sdk/reference/stocks/ba/popular",title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",source:"@site/content/sdk/reference/stocks/ba/popular.md",sourceDirName:"sdk/reference/stocks/ba",slug:"/sdk/reference/stocks/ba/popular",permalink:"/sdk/reference/stocks/ba/popular",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/ba/popular.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",keywords:["OpenBB.Finance Terminal","Reddit ticker analysis","Python function","Behavioral analysis","Popular tickers","Subreddits","Post analysis","DataFrames"]},sidebar:"tutorialSidebar",previous:{title:"messages",permalink:"/sdk/reference/stocks/ba/messages"},next:{title:"queries",permalink:"/sdk/reference/stocks/ba/queries"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks.ba.popular - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get popular tickers from list of subreddits ","[Source: reddit]","."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L145"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ba.popular(limit: int = 10, post_limit: int = 50, subreddits: str = "")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of top tickers to get"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"How many posts to analyze in each subreddit"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subreddits"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"String of comma separated subreddits."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame of top tickers from supplied subreddits")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);