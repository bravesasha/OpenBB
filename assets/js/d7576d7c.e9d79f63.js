"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11136],{16573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(74848),n=r(28453),i=r(94331);const s={title:"sortino",description:"This page includes a comprehensive coverage of how to determine the Sortino ratio of a portfolio with reference to a selected benchmark using OpenBB. The page contains the source code and specific examples to better illustrate the process.",keywords:["sortino ratio","portfolio analysis","risk free rate","openbb.portfolio.metric.sortino","portfolio","benchmark"]},l=void 0,c={id:"sdk/reference/portfolio/metric/sortino",title:"sortino",description:"This page includes a comprehensive coverage of how to determine the Sortino ratio of a portfolio with reference to a selected benchmark using OpenBB. The page contains the source code and specific examples to better illustrate the process.",source:"@site/content/sdk/reference/portfolio/metric/sortino.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/sortino",permalink:"/sdk/reference/portfolio/metric/sortino",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/sortino.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"sortino",description:"This page includes a comprehensive coverage of how to determine the Sortino ratio of a portfolio with reference to a selected benchmark using OpenBB. The page contains the source code and specific examples to better illustrate the process.",keywords:["sortino ratio","portfolio analysis","risk free rate","openbb.portfolio.metric.sortino","portfolio","benchmark"]},sidebar:"tutorialSidebar",previous:{title:"skew",permalink:"/sdk/reference/portfolio/metric/skew"},next:{title:"tail",permalink:"/sdk/reference/portfolio/metric/tail"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"portfolio.metric.sortino - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(t.p,{children:"Get sortino ratio for portfolio and benchmark selected"}),"\n",(0,o.jsxs)(t.p,{children:["Source Code: [",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1213",children:"link"}),"]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.sortino(portfolio_engine: portfolio_engine.PortfolioEngine, risk_free_rate: float = 0)\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"portfolio_engine"}),(0,o.jsx)(t.td,{children:"PortfolioEngine"}),(0,o.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"False"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"risk_free_rate"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Risk free rate value"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"pd.DataFrame"}),(0,o.jsx)(t.td,{children:"DataFrame with sortino ratio for portfolio and benchmark for different periods"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.sortino(p)\n'})}),"\n",(0,o.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var o=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(o.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var o=r(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);