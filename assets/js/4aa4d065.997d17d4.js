"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34906],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(a),s=n,f=k["".concat(p,".").concat(s)]||k[s]||g[s]||l;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81282:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"Portfolio",sidebar_position:0,description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",keywords:["portfolio module","performance benchmarking","risk metrics","maximum drawdown","portfolio loading","OpenBB SDK","portfolio transactions"]},i=void 0,o={unversionedId:"sdk/data-available/portfolio/index",id:"sdk/data-available/portfolio/index",title:"Portfolio",description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",source:"@site/content/sdk/data-available/portfolio/index.md",sourceDirName:"sdk/data-available/portfolio",slug:"/sdk/data-available/portfolio/",permalink:"/sdk/data-available/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/portfolio/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",sidebarPosition:0,frontMatter:{title:"Portfolio",sidebar_position:0,description:"Docusaurus page focuses on the usage of the OpenBB Terminal Portfolio module, detailing its features and examples of use like portfolio performance benchmarking, risk metrics calculation or maximum drawdown calculation.",keywords:["portfolio module","performance benchmarking","risk metrics","maximum drawdown","portfolio loading","OpenBB SDK","portfolio transactions"]},sidebar:"tutorialSidebar",previous:{title:"Discovery",permalink:"/sdk/data-available/crypto/discovery"},next:{title:"Portfolio Optimization",permalink:"/sdk/data-available/portfolio/po"}},p={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Portfolio Files",id:"portfolio-files",level:3},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Load",id:"load",level:3},{value:"The Portfolio Object",id:"the-portfolio-object",level:3},{value:"Show",id:"show",level:3},{value:"Perf",id:"perf",level:3},{value:"Summary",id:"summary",level:3},{value:"MaxDD",id:"maxdd",level:3},{value:"RSharpe",id:"rsharpe",level:3},{value:"RVol",id:"rvol",level:3},{value:"DRet",id:"dret",level:3}],d={toc:m},k="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/terminal/reference/portfolio/load"},"Portfolio menu"),", from the OpenBB Terminal, is wrapped into a Python SDK layer, enabling users to programmatically work with the data in a flexible environment, fully customizable for the needs of any user. This guide will introduce the functions within the main Portfolio module, and walk through examples demonstrating how to work with a portfolio file and object."),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"Below is a brief description of each function within the Portfolio module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.alloc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Allocation Metrics Compared to the Benchmark")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.bench"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Select a Benchmark for the Portfolio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.distr"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Distribution of Daily Returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.dret"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Daily Returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.es"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Expected Shortfall")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.holdp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Holdings of Assets as a %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.holdv"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Holdings of Assets as an Absolute Value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.load"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Load a Portfolio File")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.maxdd"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Maximum Drawdown")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.metric"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Risk and Portfolio Metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.mret"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Monthly Returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.om"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Omega Ratio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.perf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Portfolio Performance vs Benchmark")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.po"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Portfolio Optimization Sub Menu")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.rbeta"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rolling Beta of Portfolio and Benchmark Returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.rsharpe"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rolling Sharpe Ratio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.rsort"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rolling Sortino Ratio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.rvol"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rolling Volatility")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.show"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Portfolio Transactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.summary"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Summary of Portfolio and Benchmark Returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.var"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Portfolio VaR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.portfolio.yret"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Yearly Returns")))),(0,n.kt)("p",null,"Alternatively, the contents of the Porfolio module is printed with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.portfolio)\n")),(0,n.kt)("p",null,"Many of the functions in this module will also have a companion command, ",(0,n.kt)("inlineCode",{parentName:"p"},"_chart"),"."),(0,n.kt)("h3",{id:"portfolio-files"},"Portfolio Files"),(0,n.kt)("p",null,"Portfolio files are spreadsheets (xlsx or csv files) containing historical trades which add up to represent a net balance in the Portfolio Engine. Users should keep their collection of holdings files in the OpenBBUserData folder, ",(0,n.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/portfolio/holdings"),"."),(0,n.kt)("admonition",{title:"If you wish to load in your own Excel holdings file, please follow the following steps:",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Download the Excel file that can be used as a template ",(0,n.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/03wjjf1lfkqjmtn/holdings_example.xlsx?dl=0"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},"Move the file inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"portfolio/holdings")," folder within the ",(0,n.kt)("a",{parentName:"li",href:"/terminal/usage/advanceddata"},"OpenBBUserData")," folder and, optionally, adjust the name to your liking."),(0,n.kt)("li",{parentName:"ol"},"Open the Excel file and remove, edit or add to the values as you desire (e.g. your own orders). This is the default template that is also loaded in with ",(0,n.kt)("inlineCode",{parentName:"li"},"load --example"),"."),(0,n.kt)("li",{parentName:"ol"},"Open up the OpenBB Terminal, go to ",(0,n.kt)("inlineCode",{parentName:"li"},"portfolio")," and type ",(0,n.kt)("inlineCode",{parentName:"li"},"load --file"),". Your Excel file should then be one of the options."))),(0,n.kt)("p",null,"Note that the Excel sheet requires the following columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date")," - The date the trade occurred"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," - The name of the security"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type")," - The type of the security. Use Cash/Stock/Crypto/ETF as appropriate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Price")," - The price the security was added or removed at, on a per-unit\nbasis"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quantity")," - How much of the security in question was added or removed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Side")," - Whether you bought or sold. Use Buy/Deposit/1 to add to the\nportfolio or Sell/Withdrawal/0 to remove from the portfolio a search criteria,\ncountry, sector or industry.")),(0,n.kt)("p",null,"The table below illustrates the required column titles:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Side"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Quantity"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Fees"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Investment"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Currency"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sector"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Industry"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Region"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"K.TO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.93"),(0,n.kt)("td",{parentName:"tr",align:"right"},"190"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1526.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CAD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Basic Materials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gold"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canada"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015-01-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ETF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SPY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"178.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"998.368"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015-01-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRYPTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BTC-USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011-01-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMZN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"922"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internet Retail"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011-01-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1174"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Technology"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Electronics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011-01-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.04"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2804"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Technology"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Software-Infrastructure"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011-01-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.76"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"176"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Auto Manufacturers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011-01-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOG"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1501"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Communication Services"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internet Content & Information"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")))),(0,n.kt)("p",null,"The template Excel file also has additional columns but these are ",(0,n.kt)("em",{parentName:"p"},"optional"),". The OpenBB SDK can figure out by itself what industry, sector, country and region belongs to the loaded in Equity. So the field can be left blank if your holdings do not include this information."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples in this guide will assume that the import statements below are included at the top of the Python script or Jupyter Notebook."),(0,n.kt)("h3",{id:"import-statements"},"Import Statements"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n# %matplotlib inline (uncomment if using a Jupyter Notebook or an Interactive Window)\n")),(0,n.kt)("h3",{id:"load"},"Load"),(0,n.kt)("p",null,"Taking the downloaded ",(0,n.kt)("inlineCode",{parentName:"p"},"holdings_example.xlsx")," file from the previous section, let's load it into the Portfolio Engine. There are a few parameters available for this function, and an object is returned."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.portfolio.load)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'    Get PortfolioEngine object\n\n    Parameters\n    ----------\n    transactions_file_path : str\n        Path to transactions file\n    benchmark_symbol : str\n        Benchmark ticker to download data\n    full_shares : bool\n        Whether to mimic the portfolio trades exactly (partial shares) or round down the\n        quantity to the nearest number\n    risk_free_rate : float\n        Risk free rate in float format\n\n    Returns\n    -------\n    PortfolioEngine\n        PortfolioEngine class instance, this will hold transactions and perform calculations\n\n    Examples\n    --------\n    >>> from openbb_terminal.sdk import openbb\n    >>> p = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\n')),(0,n.kt)("p",null,"The syntax should resemble something like the sample below; don't forget to modify the path to match the local path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"P = openbb.portfolio.load(\n  transactions_file_path = '/Users/path_to/OpenBBUserData/portfolio/holdings/holdings_example.xlsx',\n  benchmark_symbol = 'VTI',\n  full_shares = False,\n  risk_free_rate = 3.0\n)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Preprocessing transactions: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 14/14 [00:01<00:00,  8.82it/s]\n        Loading price data: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 3/3 [00:01<00:00,  2.64it/s]\n       Calculating returns: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:00<00:00, 14.52it/s]\n         Loading benchmark: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 4/4 [00:04<00:00,  1.21s/it]\n")),(0,n.kt)("h3",{id:"the-portfolio-object"},"The Portfolio Object"),(0,n.kt)("p",null,"A Portfolio Object is assigned to the variable, ",(0,n.kt)("inlineCode",{parentName:"p"},"P"),". The created object, or parts of it, are used as inputs to the other functions in this module. It can also be interacted with directly, for example, to change the benchmark ticker. ",(0,n.kt)("inlineCode",{parentName:"p"},"SPY")," is a holding in the example portfolio, so let's stick with ",(0,n.kt)("inlineCode",{parentName:"p"},"VTI")," as the performance benchmark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"P.set_benchmark(symbol = 'SPY')\n\n Loading benchmark:  50%|\u2588\u2588\u2588\u2588\u2588     | 2/4 [00:00<00:00,  5.69it/s]\n\nprint(P.benchmark_ticker)\n\nSPY\n")),(0,n.kt)("p",null,"Populating a list of tickers from the Portfolio Object is accomplished by assigning a variable to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"tickers = P.tickers_list\nprint(tickers)\n\n['SPY', 'TSLA', 'K.TO', 'AAPL', 'AMZN', 'MSFT', 'BTC-USD', 'GOOG']\n")),(0,n.kt)("h3",{id:"show"},"Show"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.show")," is for displaying the transactions from the loaded portfolio file. Scroll back up to view the output of this function again."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.show(P)\n")),(0,n.kt)("h3",{id:"perf"},"Perf"),(0,n.kt)("p",null,"Performance against the benchmark is summarized in a table with, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.perf"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"print(openbb.portfolio.perf(P))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Portfolio"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Difference"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Investment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11102.07"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11102.07"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"114027.38"),(0,n.kt)("td",{parentName:"tr",align:"left"},"36203.96"),(0,n.kt)("td",{parentName:"tr",align:"left"},"77823.43")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total % Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"927.08%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"226.10%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"700.98%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Abs Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"102925.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"25101.89"),(0,n.kt)("td",{parentName:"tr",align:"left"},"77823.43")))),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.summary")," prints a table of risk metrics, comparing the portfolio against the benchmark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"print(openbb.portfolio.summary(P))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Portfolio"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Difference"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Volatility"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.65%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.99%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.66%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Skew"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-0.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-0.61"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.29")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Kurtosis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8.80"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16.87"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-8.079")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum Drawdown"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-59.05%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-35.00%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-24.05%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sharpe ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.05"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.039"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.011")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sortino ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.06"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.04"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.021")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2 Score"),(0,n.kt)("td",{parentName:"tr",align:"left"},"41.36%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"41.36%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.00%")))),(0,n.kt)("h3",{id:"maxdd"},"MaxDD"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.maxdd")," calculates the maximum drawdown as price and % value; it returns a Tuple."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"holdings,dd = openbb.portfolio.maxdd(P)\ndd = pd.DataFrame(dd)\ndd.rename(columns = {'Total': 'Portfolio % Drawdown'}, inplace = True)\nholdings = pd.DataFrame(holdings)\nholdings.rename(columns = {'Total': 'Portfolio Value'}, inplace = True)\ndd = dd.join(holdings)\ndd.index = dd.index.strftime(date_format='%Y-%m-%d')\nprint(dd.tail(5))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio % Drawdown"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.58"),(0,n.kt)("td",{parentName:"tr",align:"right"},"109442")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"111257")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"114017")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"114027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"113302")))),(0,n.kt)("p",null,"MaxDD also has a ",(0,n.kt)("inlineCode",{parentName:"p"},"_chart")," command, and is called with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.maxdd_chart(P)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/204072456-f6b8e038-08ef-4ac5-9920-14a9c1e4197f.png",alt:"openbb.portfolio.maxdd_chart",title:"openbb.portfolio.maxdd_chart"})),(0,n.kt)("h3",{id:"rsharpe"},"RSharpe"),(0,n.kt)("p",null,"Calculate a rolling sharpe ratio over a specified window."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"rs = openbb.portfolio.rsharpe(P, window = '3m')\nrs.rename(columns = {'portfolio': 'Portfolio Sharpe', 'benchmark': 'Benchmark Sharpe'}, inplace = True)\nrs.index = rs.index.strftime(date_format='%Y-%m-%d')\nprint(rs.tail(5))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio Sharpe"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Benchmark Sharpe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.05")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.07")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.08")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.11")))),(0,n.kt)("h3",{id:"rvol"},"RVol"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.rvol")," has the same input parameters as ",(0,n.kt)("inlineCode",{parentName:"p"},"rsharpe"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"rv = openbb.portfolio.rvol(P, window = '3m')\nrv.rename(columns={'portfolio': 'Portfolio Volatility', 'benchmark': 'Benchmark Volatility'}, inplace = True)\nrv.index = rv.index.strftime(date_format='%Y-%m-%d')\n\nprint(rv.tail(5))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio Volatility"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Benchmark Volatility"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021727"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.014490")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021715"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.014439")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021596"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.014256")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-26"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021591"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.014256")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021592"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.014256")))),(0,n.kt)("h3",{id:"dret"},"DRet"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio.dret")," returns a DataFrame with daily returns of the portfolio and benchmark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"returns = openbb.portfolio.dret(P)\nreturns.rename(columns = {'portfolio': 'Portfolio % Returns', 'benchmark': 'Benchmark % Returns'}, inplace = True)\nreturns.index = returns.index.rename('Date')\n\nprint(returns.tail(5))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio % Returns"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Benchmark % Returns"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00")))),(0,n.kt)("p",null,"Read the ",(0,n.kt)("a",{parentName:"p",href:"/sdk/data-available/portfolio/po"},"Portfolio Optimization Intro")," to learn about the optimization features, and the parameters preset template."))}g.isMDXComponent=!0}}]);