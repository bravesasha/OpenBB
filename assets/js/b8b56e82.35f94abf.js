"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91111],{44992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453),a=n(94331);const s={title:"rsi",description:"Detailed documentation on how to use the Relative Strength Index (RSI), a key trading indicator. The page includes information on parameters such as n_length, n_scalar, and n_drift, as well as how to interpret the RSI.",keywords:["RSI","Relative Strength Index","price movements","overbought/oversold indicator","price divergence","n_length","n_scalar","n_drift","technical analysis","trading indicator"]},d=void 0,o={id:"terminal/reference/forex/ta/rsi",title:"rsi",description:"Detailed documentation on how to use the Relative Strength Index (RSI), a key trading indicator. The page includes information on parameters such as n_length, n_scalar, and n_drift, as well as how to interpret the RSI.",source:"@site/content/terminal/reference/forex/ta/rsi.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/rsi",permalink:"/terminal/reference/forex/ta/rsi",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/rsi.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"rsi",description:"Detailed documentation on how to use the Relative Strength Index (RSI), a key trading indicator. The page includes information on parameters such as n_length, n_scalar, and n_drift, as well as how to interpret the RSI.",keywords:["RSI","Relative Strength Index","price movements","overbought/oversold indicator","price divergence","n_length","n_scalar","n_drift","technical analysis","trading indicator"]},sidebar:"tutorialSidebar",previous:{title:"obv",permalink:"/terminal/reference/forex/ta/obv"},next:{title:"sma",permalink:"/terminal/reference/forex/ta/sma"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"forex/ta/rsi - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"The Relative Strength Index (RSI) calculates a ratio of the recent upward price movements to the absolute price movement. The RSI ranges from 0 to 100. The RSI is interpreted as an overbought/oversold indicator when the value is over 70/below 30. You can also look for divergence with price. If the price is making new highs/lows, and the RSI is not, it indicates a reversal."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"rsi [-l N_LENGTH] [-s N_SCALAR] [-d N_DRIFT]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_length"}),(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"14"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_scalar"}),(0,r.jsx)(t.td,{children:"scalar"}),(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_drift"}),(0,r.jsx)(t.td,{children:"drift"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311651-99e67e12-1677-43a9-92d9-5998d99fd0db.png",alt:"rsi"})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),i=n(74848);function a(e){let{title:t}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);