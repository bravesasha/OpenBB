"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2395],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,f=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(f,i(i({ref:e},d),{},{components:n})):a.createElement(f,i({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(35742);function l(t){let{title:e}=t;return a.createElement(r.Z,null,a.createElement("title",null,e))}},88644:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",keywords:["portfolio optimization","minrisk function","risk minimization","portfolio weights","instructions","parameters","returns","examples","sharpe ratio","return volatility","financial portfolio"]},o=void 0,u={unversionedId:"sdk/reference/portfolio/po/minrisk",id:"sdk/reference/portfolio/po/minrisk",title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",source:"@site/content/sdk/reference/portfolio/po/minrisk.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/minrisk",permalink:"/sdk/reference/portfolio/po/minrisk",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/minrisk.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",keywords:["portfolio optimization","minrisk function","risk minimization","portfolio weights","instructions","parameters","returns","examples","sharpe ratio","return volatility","financial portfolio"]},sidebar:"tutorialSidebar",previous:{title:"maxutil",permalink:"/sdk/reference/portfolio/po/maxutil"},next:{title:"mktcap",permalink:"/sdk/reference/portfolio/po/mktcap"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"portfolio.po.minrisk - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Optimize minimum risk weights"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L402"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.po.minrisk(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of symbols, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval to get data, by default '3y'"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'If not using interval, start date string (YYYY-MM-DD), by default ""'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True use log returns, else arithmetic returns, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum percentage of NaNs allowed in the data, by default 0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher than threshold, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values, by default 'time'",(0,r.kt)("br",null),"For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objective"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Objective function of the optimization model, by default 'Sharpe'",(0,r.kt)("br",null),"Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MinRisk': Minimize the selected risk measure.",(0,r.kt)("br",null),"- 'Utility': Maximize the risk averse utility function.",(0,r.kt)("br",null),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,r.kt)("br",null),"- 'MaxRet': Maximize the expected return of the portfolio."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio, by default 'MV'",(0,r.kt)("br",null),"Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MV': Standard Deviation.",(0,r.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,r.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,r.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,r.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,r.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,r.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,r.kt)("br",null),"- 'WR': Worst Realization.",(0,r.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_aversion"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk aversion factor of the 'Utility' objective function, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_return"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on minimum level of portfolio's return, by default -1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_risk"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on maximum level of portfolio's risk, by default -1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the expected returns, by default 'hist'",(0,r.kt)("br",null),"Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix, by default 'hist'",(0,r.kt)("br",null),"Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"a-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods, by default 0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple","[pd.DataFrame, Dict]"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple with weights and performance dictionary")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.minrisk(symbols=["AAPL", "MSFT", "AMZN"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(        value\n     AAPL  0.25044\n     MSFT  0.49509\n     AMZN  0.25447,\n     {'Return': 0.2248615963428331,\n      'Volatility': 0.32736590080425004,\n      'Sharpe ratio': 0.6868815468880802})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.minrisk(portfolio_engine=p)\n')),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);