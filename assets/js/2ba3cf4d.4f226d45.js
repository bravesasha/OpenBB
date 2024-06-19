"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9300],{55521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(74848),d=n(28453),i=n(94331);const a={title:"index",description:"This page provides detailed information on how to obtain indices data and visualize it. The useful parameters and their respective descriptions are provided to ensure efficient data manipulation. Actual examples that illustrate the usage of the commands are included for better understanding.",keywords:["Indices data","Data plot","Yahoo Finance","FinanceDatabase","Data intervals","Start date","End date","Data column","Data query","Compounded returns"]},s=void 0,c={id:"terminal/reference/economy/index_cmd",title:"index",description:"This page provides detailed information on how to obtain indices data and visualize it. The useful parameters and their respective descriptions are provided to ensure efficient data manipulation. Actual examples that illustrate the usage of the commands are included for better understanding.",source:"@site/content/terminal/reference/economy/index_cmd.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/index_cmd",permalink:"/terminal/reference/economy/index_cmd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/index_cmd.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"index",description:"This page provides detailed information on how to obtain indices data and visualize it. The useful parameters and their respective descriptions are provided to ensure efficient data manipulation. Actual examples that illustrate the usage of the commands are included for better understanding.",keywords:["Indices data","Data plot","Yahoo Finance","FinanceDatabase","Data intervals","Start date","End date","Data column","Data query","Compounded returns"]},sidebar:"tutorialSidebar",previous:{title:"futures",permalink:"/terminal/reference/economy/futures"},next:{title:"macro",permalink:"/terminal/reference/economy/macro"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"economy /index - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Obtain any set of indices and plot them together. With the -si argument the major indices are shown. By using the arguments (for example 'nasdaq' and 'sp500') you can collect data and plot the graphs together. [Source: Yahoo finance / FinanceDatabase]"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"index [-i INDICES] [--show] [--interval {1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo}] [-s START_DATE] [-e END_DATE] [-c COLUMN] [-q QUERY] [-r]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indices"}),(0,r.jsx)(t.td,{children:"One or multiple indices"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"show_indices"}),(0,r.jsx)(t.td,{children:"Show the major indices, their arguments and ticker"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"The preferred interval data is shown at. This can be 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo or 3mo"}),(0,r.jsx)(t.td,{children:"1d"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31)"}),(0,r.jsx)(t.td,{children:"2000-01-01"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"The end date of the data (format: YEAR-MONTH-DAY, i.e. 2021-06-20)"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:"The column you wish to load in, by default this is the Adjusted Close column"}),(0,r.jsx)(t.td,{children:"Adj Close"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"Search for indices with given keyword"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"returns"}),(0,r.jsx)(t.td,{children:"Flag to show compounded returns over interval."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Mar 15, 07:29 (\ud83e\udd8b) /economy/ $ index nasdaq,dowjones\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158573612-f2e4b04c-b833-4899-9817-62e40b9fe1d2.png",alt:"index nasdaq dowjones"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158573676-9871c58e-3ffd-44d5-888a-c1d76ec98251.png",alt:"index vix"})}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),d=n(74848);function i(e){let{title:t}=e;return(0,d.jsx)(r.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const d={},i=r.createContext(d);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);