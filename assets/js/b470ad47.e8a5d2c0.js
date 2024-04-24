"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},86273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",keywords:["dcf","discounted cash flow","financial statements prediction","linear regression","Fama French","CAPM","cash flow analysis","present value","company value","stock analysis","financial tool"]},i=void 0,s={unversionedId:"terminal/reference/stocks/fa/dcf",id:"terminal/reference/stocks/fa/dcf",title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",source:"@site/content/terminal/reference/stocks/fa/dcf.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/dcf",permalink:"/terminal/reference/stocks/fa/dcf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/dcf.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"dcf",description:"Discover the dcf command, a powerful and flexible tool that allows users to predict and analyze the value of a company based on future cash flows and the present value. This tool allows for customizable parameters, includes linear regression estimates, discount factors, and multiple prediction models.",keywords:["dcf","discounted cash flow","financial statements prediction","linear regression","Fama French","CAPM","cash flow analysis","present value","company value","stock analysis","financial tool"]},sidebar:"tutorialSidebar",previous:{title:"data",permalink:"/terminal/reference/stocks/fa/data"},next:{title:"dcfc",permalink:"/terminal/reference/stocks/fa/dcfc"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"stocks/fa/dcf - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"A discounted cash flow statement looks to analyze the value of a company. To do this we need to predict the future cash flows and then determine how much those cash flows are worth to us today. We predict the future expected cash flows by predicting what the financial statements will look like in the future, and then using this to determine the cash the company will have in the future. This cash is paid to share holders. We use linear regression to predict the future financial statements. Once we have our predicted financial statements we need to determine how much the cash flows are worth today. This is done with a discount factor. Our DCF allows users to choose between Fama French and CAPM for the factor. This allows us to calculate the present value of the future cash flows. The present value of all of these cash payments is the companies' value. Dividing this value by the number of shares outstanding allows us to calculate the value of each share in a company."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dcf [-a] [--no-ratios] [--no-filter] [-p PREDICTION] [-s SIMILAR] [-g]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a tie-out for financial statement information pulled from online."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ratios"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes ratios from DCF."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ratios"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow similar companies of any market cap to be shown."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prediction"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of years to predict before using terminal value."),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"similar"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of similar companies to generate ratios for."),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to replace a linear regression estimate with a growth estimate."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154241001-42be82e5-f001-4fd1-bcf4-cd55c7cef358.png",alt:"dcf financials"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154241130-f52c580e-710d-4cac-a8f3-f9bfece7865a.png",alt:"dcf free cash flows"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154241408-5476f0ea-4789-4691-a063-6b43c382fce6.png",alt:"dcf explanations"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154241575-f931c05a-c765-4abd-9cc1-0a0795aeaec3.png",alt:"dcf ratios"})),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);