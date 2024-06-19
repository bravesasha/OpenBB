"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93093],{49754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=t(74848),r=t(28453),s=t(94331);const a={title:"macd",description:"Describes the Moving Average Convergence Divergence (MACD), a metric used to indicate trend changes and potential buy/sell signals in markets. The page includes usage, parameters, and a visual example.",keywords:["MACD","Moving Average Convergence Divergence","Exponential Moving Averages","Signal line","trend changes","overbought conditions","oversold conditions","Divergence","buy signal","sell signal"]},c=void 0,l={id:"terminal/reference/etf/ta/macd",title:"macd",description:"Describes the Moving Average Convergence Divergence (MACD), a metric used to indicate trend changes and potential buy/sell signals in markets. The page includes usage, parameters, and a visual example.",source:"@site/content/terminal/reference/etf/ta/macd.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/macd",permalink:"/terminal/reference/etf/ta/macd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/macd.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"macd",description:"Describes the Moving Average Convergence Divergence (MACD), a metric used to indicate trend changes and potential buy/sell signals in markets. The page includes usage, parameters, and a visual example.",keywords:["MACD","Moving Average Convergence Divergence","Exponential Moving Averages","Signal line","trend changes","overbought conditions","oversold conditions","Divergence","buy signal","sell signal"]},sidebar:"tutorialSidebar",previous:{title:"kc",permalink:"/terminal/reference/etf/ta/kc"},next:{title:"obv",permalink:"/terminal/reference/etf/ta/obv"}},d={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"etf/ta/macd - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(n.p,{children:"The Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The Signal line is an Exponential Moving Average of the MACD. The MACD signals trend changes and indicates the start of new trend direction. High values indicate overbought conditions, low values indicate oversold conditions. Divergence with the price indicates an end to the current trend, especially if the MACD is at extreme high or low values. When the MACD line crosses above the signal line a buy signal is generated. When the MACD crosses below the signal line a sell signal is generated. To confirm the signal, the MACD should be above zero for a buy, and below zero for a sell."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"macd [--fast N_FAST] [--slow N_SLOW] [--signal N_SIGNAL]\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Choices"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"n_fast"}),(0,i.jsx)(n.td,{children:"The short period."}),(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"True"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"n_slow"}),(0,i.jsx)(n.td,{children:"The long period."}),(0,i.jsx)(n.td,{children:"26"}),(0,i.jsx)(n.td,{children:"True"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"n_signal"}),(0,i.jsx)(n.td,{children:"The signal period."}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"True"}),(0,i.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/154311220-d18eb93e-76b3-4abb-b9c6-86484f462c55.png",alt:"macd"})}),"\n",(0,i.jsx)(n.hr,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(5260),r=t(74848);function s(e){let{title:n}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);