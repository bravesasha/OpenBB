"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29620],{8800:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=o(74848),r=o(28453),i=o(94331);const l={title:"countries",description:"This documentation page provides detailed information about the use of the 'openbb.portfolio.alloc.countries' function from OpenBB Finance, which compares portfolio country allocation with a benchmark.",keywords:["OpenBB Finance","portfolio country allocation","portfolio management","financial modelling","function documentation"]},s=void 0,a={id:"sdk/reference/portfolio/alloc/countries",title:"countries",description:"This documentation page provides detailed information about the use of the 'openbb.portfolio.alloc.countries' function from OpenBB Finance, which compares portfolio country allocation with a benchmark.",source:"@site/content/sdk/reference/portfolio/alloc/countries.md",sourceDirName:"sdk/reference/portfolio/alloc",slug:"/sdk/reference/portfolio/alloc/countries",permalink:"/sdk/reference/portfolio/alloc/countries",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/alloc/countries.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"countries",description:"This documentation page provides detailed information about the use of the 'openbb.portfolio.alloc.countries' function from OpenBB Finance, which compares portfolio country allocation with a benchmark.",keywords:["OpenBB Finance","portfolio country allocation","portfolio management","financial modelling","function documentation"]},sidebar:"tutorialSidebar",previous:{title:"assets",permalink:"/sdk/reference/portfolio/alloc/assets"},next:{title:"regions",permalink:"/sdk/reference/portfolio/alloc/regions"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.alloc.countries - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Display portfolio country allocation compared to the benchmark"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L858",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.alloc.countries(portfolio_engine: portfolio_engine.PortfolioEngine, limit: int = 10, tables: bool = False, recalculate: bool = False)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tables"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to include separate allocation tables"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The amount of assets you wish to show, by default this is set to 10"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"recalculate"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to force recalculate allocation if already exists"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]]"}),(0,n.jsxs)(t.td,{children:["DataFrame with combined allocation plus individual allocation if tables is ",(0,n.jsx)(t.code,{children:"True"}),"."]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.alloc.countries(p)\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var n=o(5260),r=o(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>s});var n=o(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);