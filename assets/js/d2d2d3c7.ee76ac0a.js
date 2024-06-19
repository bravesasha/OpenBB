"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78830],{8307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(74848),n=t(28453),o=t(94331);const i={title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",keywords:["performance data","filter presets","stock analysis","top performers","overbought stocks","oversold stocks","stock sorting","stock scanning","stock volatility","stock volume"]},a=void 0,d={id:"terminal/reference/stocks/screener/performance",title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",source:"@site/content/terminal/reference/stocks/screener/performance.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/performance",permalink:"/terminal/reference/stocks/screener/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/performance.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",keywords:["performance data","filter presets","stock analysis","top performers","overbought stocks","oversold stocks","stock sorting","stock scanning","stock volatility","stock volume"]},sidebar:"tutorialSidebar",previous:{title:"ownership",permalink:"/terminal/reference/stocks/screener/ownership"},next:{title:"set",permalink:"/terminal/reference/stocks/screener/set"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:"stocks/screener/performance - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(r.p,{children:"Prints performance data of the companies that meet the pre-set filtering."}),"\n",(0,s.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"performance [-p Desired preset.] [-l LIMIT] [-r] [-s SORTBY]\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"}),(0,s.jsx)(r.th,{children:"Choices"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"preset"}),(0,s.jsx)(r.td,{children:"Filter presets"}),(0,s.jsx)(r.td,{children:"top_gainers"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"template, oversold_under_5dol, potential_reversals, top_performers_all, death_cross, unusual_volume, news_scanner, cheap_bottom_dividend, cheap_dividend, top_performers_healthcare, bull_runs_over_10pct, value_stocks, golden_cross, growth_stocks, channel_up_and_low_debt_and_sma_50and200, buffett_like, continued_momentum_scan, analyst_strong_buy, under_15dol_stocks, 5pct_above_low, cheap_oversold, weak_support_and_top_performers, undervalue, oversold_under_3dol, top_performers_tech, rosenwald_gtfo, recent_growth_and_support, heavy_inst_ins, modified_neff, simplistic_momentum_scanner_under_7dol, golden_cross_penny, break_out_stocks, high_vol_and_low_debt, stocks_strong_support_levels, sexy_year, short_squeeze_scan, oversold, rosenwald, modified_dreman, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"Limit of stocks to print"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"reverse"}),(0,s.jsx)(r.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sort"}),(0,s.jsx)(r.td,{children:"Sort elements of the table."}),(0,s.jsx)(r.td,{children:"Ticker"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"ticker, perfweek, perfmonth, perfquart, perfhalf, perfyear, perfytd, volatilityw, volatilitym, recom, avgvolume, relvolume, price, change, volume"})]})]})]}),"\n",(0,s.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var s=t(5260),n=t(74848);function o(e){let{title:r}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(96540);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);