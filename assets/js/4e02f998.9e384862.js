"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88268],{27580:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(74848),r=i(28453),s=i(94331);const a={title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",keywords:["Accumulation/Distribution Line (AD)","AD Indicator","Close Location Value","CLV","Stock Market Indicator","Python Script","b_use_open","On Balance Volume (OBV)","Volume Times"]},o=void 0,c={id:"terminal/reference/stocks/ta/ad",title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",source:"@site/content/terminal/reference/stocks/ta/ad.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/ad",permalink:"/terminal/reference/stocks/ta/ad",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/ad.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"ad",description:"An in-depth explanation of Accumulation/Distribution Line (AD), its interpretation, and usage. The page also provides a Python script for the indicator and describes its parameters.",keywords:["Accumulation/Distribution Line (AD)","AD Indicator","Close Location Value","CLV","Stock Market Indicator","Python Script","b_use_open","On Balance Volume (OBV)","Volume Times"]},sidebar:"tutorialSidebar",previous:{title:"vis",permalink:"/terminal/reference/stocks/sia/vis"},next:{title:"adosc",permalink:"/terminal/reference/stocks/ta/adosc"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"stocks/ta/ad - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"The Accumulation/Distribution Line is similar to the On Balance Volume (OBV), which sums the volume times +1/-1 based on whether the close is higher than the previous close. The Accumulation/Distribution indicator, however multiplies the volume by the close location value (CLV). The CLV is based on the movement of the issue within a single bar and can be +1, -1 or zero. The Accumulation/Distribution Line is interpreted by looking for a divergence in the direction of the indicator relative to price. If the Accumulation/Distribution Line is trending upward it indicates that the price may follow. Also, if the Accumulation/Distribution Line becomes flat while the price is still rising (or falling) then it signals an impending flattening of the price."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"ad [--open]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"b_use_open"}),(0,n.jsx)(t.td,{children:"uses open value of stock"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154309283-9512c6c0-dda3-4348-9350-105238676479.png",alt:"ad"})}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(5260),r=i(74848);function s(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);