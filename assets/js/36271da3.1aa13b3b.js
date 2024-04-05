"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(35742);function l(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},42638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),l=r(88828);const a={title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",keywords:["openbb.portfolio.es","Portfolio expected shortfall","PortfolioEngine class","Calculations on portfolio","Portfolio distributions","Portfolio percentiles","openbb.portfolio.load","Portfolio examples","Python portfolio calculations"]},i=void 0,p={unversionedId:"sdk/reference/portfolio/es",id:"sdk/reference/portfolio/es",title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",source:"@site/content/sdk/reference/portfolio/es.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/es",permalink:"/sdk/reference/portfolio/es",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/es.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",keywords:["openbb.portfolio.es","Portfolio expected shortfall","PortfolioEngine class","Calculations on portfolio","Portfolio distributions","Portfolio percentiles","openbb.portfolio.load","Portfolio examples","Python portfolio calculations"]},sidebar:"tutorialSidebar",previous:{title:"dret",permalink:"/sdk/reference/portfolio/dret"},next:{title:"holdp",permalink:"/sdk/reference/portfolio/holdp"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{title:"portfolio.es - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Get portfolio expected shortfall"),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1797"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.es(portfolio_engine: portfolio_engine.PortfolioEngine, use_mean: bool = False, distribution: str = "normal", percentile: float = 99.9)\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,o.kt)("td",{parentName:"tr",align:null},"PortfolioEngine"),(0,o.kt)("td",{parentName:"tr",align:null},"PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"portfolio.load")," to create a PortfolioEngine."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"use_mean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"if one should use the data mean return"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"True")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"distribution"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"choose distribution to use: logistic, laplace, normal"),(0,o.kt)("td",{parentName:"tr",align:null},"normal"),(0,o.kt)("td",{parentName:"tr",align:null},"True")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"percentile"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"es percentile (%)"),(0,o.kt)("td",{parentName:"tr",align:null},"99.9"),(0,o.kt)("td",{parentName:"tr",align:null},"True")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"DataFrame with portfolio expected shortfall")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.es(p)\n')),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);