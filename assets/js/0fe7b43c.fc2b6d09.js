"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26365],{15593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(74848),r=n(28453),d=n(94331);const i={title:"load",description:"This page provides a guide on how to load a stock ticker for analysis. It explains the parameters for loading data, including options for Indian tickers, intraday stock minutes, and custom file paths. Additionally, users can find information on how to load monthly and weekly data.",keywords:["load","stock ticker","analysis","syf","Indian ticker","exchanges data providers","Yahoo finance","starting date","ending date","intraday stock minutes","pre/after market hours","custom file path","monthly data","weekly data"]},s=void 0,o={id:"terminal/reference/economy/qa/load",title:"load",description:"This page provides a guide on how to load a stock ticker for analysis. It explains the parameters for loading data, including options for Indian tickers, intraday stock minutes, and custom file paths. Additionally, users can find information on how to load monthly and weekly data.",source:"@site/content/terminal/reference/economy/qa/load.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/load",permalink:"/terminal/reference/economy/qa/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/load.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"load",description:"This page provides a guide on how to load a stock ticker for analysis. It explains the parameters for loading data, including options for Indian tickers, intraday stock minutes, and custom file paths. Additionally, users can find information on how to load monthly and weekly data.",keywords:["load","stock ticker","analysis","syf","Indian ticker","exchanges data providers","Yahoo finance","starting date","ending date","intraday stock minutes","pre/after market hours","custom file path","monthly data","weekly data"]},sidebar:"tutorialSidebar",previous:{title:"line",permalink:"/terminal/reference/economy/qa/line"},next:{title:"normality",permalink:"/terminal/reference/economy/qa/normality"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.A,{title:"economy/qa/load - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsxs)(t.p,{children:["Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,a.jsx)(t.a,{href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html",children:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ticker"}),(0,a.jsx)(t.td,{children:"Stock ticker"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start"}),(0,a.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the stock"}),(0,a.jsx)(t.td,{children:"2019-11-21"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end"}),(0,a.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the stock"}),(0,a.jsx)(t.td,{children:"2022-11-25"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"interval"}),(0,a.jsx)(t.td,{children:"Intraday stock minutes"}),(0,a.jsx)(t.td,{children:"1440"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"1, 5, 15, 30, 60"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"prepost"}),(0,a.jsx)(t.td,{children:"Pre/After market hours. Only works for 'yf' source, and intraday data"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"filepath"}),(0,a.jsx)(t.td,{children:"Path to load custom file."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"monthly"}),(0,a.jsx)(t.td,{children:"Load monthly data"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"weekly"}),(0,a.jsx)(t.td,{children:"Load weekly data"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var a=n(5260),r=n(74848);function d(e){let{title:t}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},d=a.createContext(r);function i(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);