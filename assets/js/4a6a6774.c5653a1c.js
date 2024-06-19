"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[977],{17483:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=i(74848),o=i(28453),s=i(94331);const n={title:"vsurf",description:"This page provides a guide on how to use the 'vsurf' command to retrieve an options volatility surface for a ticker symbol, displaying the relationship between stock price and the implied volatility of options.",keywords:["vsurf command","options volatility surface","ticker symbol","implied volatilities","stock price","stock options"]},l=void 0,a={id:"bot/reference/telegram/options/vsurf",title:"vsurf",description:"This page provides a guide on how to use the 'vsurf' command to retrieve an options volatility surface for a ticker symbol, displaying the relationship between stock price and the implied volatility of options.",source:"@site/content/bot/reference/telegram/options/vsurf.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/vsurf",permalink:"/bot/reference/telegram/options/vsurf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/vsurf.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"vsurf",description:"This page provides a guide on how to use the 'vsurf' command to retrieve an options volatility surface for a ticker symbol, displaying the relationship between stock price and the implied volatility of options.",keywords:["vsurf command","options volatility surface","ticker symbol","implied volatilities","stock price","stock options"]},sidebar:"tutorialSidebar",previous:{title:"vol",permalink:"/bot/reference/telegram/options/vol"},next:{title:"overview",permalink:"/bot/reference/telegram/overview/"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"options: vsurf - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,r.jsx)(t.p,{children:"This command allows the user to retrieve an options volatility surface for the ticker symbol. Specifically, it will provide a surface based on implied volatilities calculated from options prices, indicating the relationship between the stock price and the implied volatility of options on the stock."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/vsurf ticker z\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"Stock Ticker"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"z"}),(0,r.jsx)(t.td,{children:"iv: Volatility oi: Open Interest lp: Last Price"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"iv, oi, lp"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/vsurf AMD iv\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/vsurf AMD oi\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var r=i(5260),o=i(74848);function s(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var r=i(96540);const o={},s=r.createContext(o);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);