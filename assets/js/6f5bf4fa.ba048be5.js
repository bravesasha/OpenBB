"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23023],{88147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(74848),i=r(28453),n=r(94331);const s={title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",keywords:["ueat","ethereum","transaction","time interval","unique addresses","bitquery","sort","average gas price","medium gas price","maximum gas price","raw data","reverse flag"]},d=void 0,c={id:"terminal/reference/crypto/onchain/ueat",title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",source:"@site/content/terminal/reference/crypto/onchain/ueat.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/ueat",permalink:"/terminal/reference/crypto/onchain/ueat",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/ueat.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"ueat",description:"The ueat page provides a means to display the number of unique ethereum addresses which made a transaction in a given time interval. It provides options to limit or sort data and to set time intervals. Statistics such as average, medium, and maximum gas prices are available and data can be displayed in reverse or sorted order.",keywords:["ueat","ethereum","transaction","time interval","unique addresses","bitquery","sort","average gas price","medium gas price","maximum gas price","raw data","reverse flag"]},sidebar:"tutorialSidebar",previous:{title:"tx",permalink:"/terminal/reference/crypto/onchain/tx"},next:{title:"whales",permalink:"/terminal/reference/crypto/onchain/whales"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.A,{title:"crypto/onchain/ueat - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsxs)(t.p,{children:["Display number of unique ethereum addresses which made a transaction in given time interval, [Source: ",(0,a.jsx)(t.a,{href:"https://graphql.bitquery.io/",children:"https://graphql.bitquery.io/"}),"]"]}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"ueat [-l LIMIT] [-s {date,uniqueSenders,transactions,averageGasPrice,mediumGasPrice,maximumGasPrice}] [-i {day,month,week}] [-r]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"limit"}),(0,a.jsx)(t.td,{children:"display N number records. (Maximum available time period is 90 days.Depending on chosen time period, display N records will be recalculated. E.g.For interval: month, and number: 10, period of calculation equals to 300, but because of max days limit: 90, it will only return last 3 months (3 records)."}),(0,a.jsx)(t.td,{children:"10"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"range(1, 90)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"sortby"}),(0,a.jsx)(t.td,{children:"Sort by given column."}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"date, uniqueSenders, transactions, averageGasPrice, mediumGasPrice, maximumGasPrice"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"interval"}),(0,a.jsx)(t.td,{children:"Time interval in which ethereum address made transaction. month, week or day. Maximum time period is 90 days (3 months, 14 weeks)"}),(0,a.jsx)(t.td,{children:"day"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"day, month, week"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"reverse"}),(0,a.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var a=r(5260),i=r(74848);function n(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var a=r(96540);const i={},n=a.createContext(i);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);