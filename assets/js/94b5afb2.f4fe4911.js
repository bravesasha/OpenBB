"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77658],{23164:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(74848),n=i(28453),a=i(94331);const r={title:"decompose",description:"This product documentation page discusses the decompose function in time series analysis. It explains additive and multiplicative time series and provides specific usage examples and parameter details.",keywords:["Decompose function","Additive time series","Multiplicative time series","Time series analysis","Stocks","Parameter details","Usage examples"]},c=void 0,o={id:"terminal/reference/economy/qa/decompose",title:"decompose",description:"This product documentation page discusses the decompose function in time series analysis. It explains additive and multiplicative time series and provides specific usage examples and parameter details.",source:"@site/content/terminal/reference/economy/qa/decompose.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/decompose",permalink:"/terminal/reference/economy/qa/decompose",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/decompose.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"decompose",description:"This product documentation page discusses the decompose function in time series analysis. It explains additive and multiplicative time series and provides specific usage examples and parameter details.",keywords:["Decompose function","Additive time series","Multiplicative time series","Time series analysis","Stocks","Parameter details","Usage examples"]},sidebar:"tutorialSidebar",previous:{title:"cusum",permalink:"/terminal/reference/economy/qa/cusum"},next:{title:"hist",permalink:"/terminal/reference/economy/qa/hist"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"economy/qa/decompose - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Decompose time series as: - Additive Time Series = Level + CyclicTrend + Residual + Seasonality - Multiplicative Time Series = Level * CyclicTrend * Residual * Seasonality"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"decompose [-m]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"multiplicative"}),(0,s.jsx)(t.td,{children:"decompose using multiplicative model instead of additive"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:06 (\ud83e\udd8b) /stocks/qa/ $ decompose\n\nTime-Series Level is 2660.84\nStrength of Trend: 0.0000\nStrength of Seasonality: 0.0032\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154306626-1c5ad11e-a2e9-4107-9aec-5cf18da5358e.png",alt:"decompose"})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var s=i(5260),n=i(74848);function a(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var s=i(96540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);