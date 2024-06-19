"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97355],{20521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453),o=t(94331);const s={title:"var",description:"This documentation page describes the portfolio variance function in OpenBB finance. It provides information on parameters, return values and usage examples of the function.",keywords:["OpenBB finance","Portfolio variance","Python finance library","Python code examples","Financial data analysis","Financial risk assessment"]},a=void 0,l={id:"sdk/reference/portfolio/var",title:"var",description:"This documentation page describes the portfolio variance function in OpenBB finance. It provides information on parameters, return values and usage examples of the function.",source:"@site/content/sdk/reference/portfolio/var.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/var",permalink:"/sdk/reference/portfolio/var",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/var.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"var",description:"This documentation page describes the portfolio variance function in OpenBB finance. It provides information on parameters, return values and usage examples of the function.",keywords:["OpenBB finance","Portfolio variance","Python finance library","Python code examples","Financial data analysis","Financial risk assessment"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/sdk/reference/portfolio/summary"},next:{title:"yret",permalink:"/sdk/reference/portfolio/yret"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"portfolio.var - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get portfolio VaR"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1751",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.portfolio.var(portfolio_engine: portfolio_engine.PortfolioEngine, use_mean: bool = False, adjusted_var: bool = False, student_t: bool = False, percentile: float = 99.9)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"portfolio_engine"}),(0,r.jsx)(n.td,{children:"PortfolioEngine"}),(0,r.jsxs)(n.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(n.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"use_mean"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"if one should use the data mean return"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"adjusted_var"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"if one should have VaR adjusted for skew and kurtosis (Cornish-Fisher-Expansion)"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"student_t"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"If one should use the student-t distribution"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"percentile"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"var percentile (%)"}),(0,r.jsx)(n.td,{children:"99.9"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"DataFrame with portfolio VaR"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.var(p)\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(5260),i=t(74848);function o(e){let{title:n}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);