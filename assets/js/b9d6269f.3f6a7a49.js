"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96335],{7684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),a=n(28453),r=n(94331);const s={title:"sma",description:"This page provides information on Simple Moving Average (SMA), a tool for trend identification and data filtering. It details SMA's usage and parameters like n_length and n_offset.",keywords:["Simple Moving Average","sma","Moving Average","trend identification","data filtering","n_length","n_offset"]},o=void 0,d={id:"terminal/reference/etf/ta/sma",title:"sma",description:"This page provides information on Simple Moving Average (SMA), a tool for trend identification and data filtering. It details SMA's usage and parameters like n_length and n_offset.",source:"@site/content/terminal/reference/etf/ta/sma.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/sma",permalink:"/terminal/reference/etf/ta/sma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/sma.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"sma",description:"This page provides information on Simple Moving Average (SMA), a tool for trend identification and data filtering. It details SMA's usage and parameters like n_length and n_offset.",keywords:["Simple Moving Average","sma","Moving Average","trend identification","data filtering","n_length","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"rsi",permalink:"/terminal/reference/etf/ta/rsi"},next:{title:"stoch",permalink:"/terminal/reference/etf/ta/stoch"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"etf/ta/sma - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple Moving Average is literally the simplest form of a moving average. Each output value is the average of the previous n values. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. This makes it less responsive to recent changes in the data, which can be useful for filtering out those changes."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"sma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_length"}),(0,i.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,i.jsx)(t.td,{children:"20, 50"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_offset"}),(0,i.jsx)(t.td,{children:"offset"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311791-5b130d08-55bd-406b-a68e-914a733c5191.png",alt:"sma"})}),"\n",(0,i.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),a=n(74848);function r(e){let{title:t}=e;return(0,a.jsx)(i.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);