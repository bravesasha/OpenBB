"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30802],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>T});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),d=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},S="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),S=d(a),p=n,T=S["".concat(s,".").concat(p)]||S[p]||u[p]||o;return a?t.createElement(T,l(l({ref:r},c),{},{components:a})):t.createElement(T,l({ref:r},c))}));function T(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[S]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88828:(e,r,a)=>{a.d(r,{Z:()=>o});var t=a(67294),n=a(35742);function o(e){let{title:r}=e;return t.createElement(n.Z,null,t.createElement("title",null,r))}},88210:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(87462),n=(a(67294),a(3905)),o=a(88828);const l={title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",keywords:["benchmark","portfolio","SPDR S&P 500 ETF Trust (SPY)","iShares Core S&P 500 ETF (IVV)","Vanguard Total Stock Market ETF (VTI)","Vanguard S&P 500 ETF (VOO)","Invesco QQQ Trust (QQQ)","full_shares","shares","choices","parameters","Vanguard FTSE Developed Markets ETF (VEA)"]},i=void 0,s={unversionedId:"terminal/reference/portfolio/bench",id:"terminal/reference/portfolio/bench",title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",source:"@site/content/terminal/reference/portfolio/bench.md",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/bench",permalink:"/terminal/reference/portfolio/bench",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/bench.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",keywords:["benchmark","portfolio","SPDR S&P 500 ETF Trust (SPY)","iShares Core S&P 500 ETF (IVV)","Vanguard Total Stock Market ETF (VTI)","Vanguard S&P 500 ETF (VOO)","Invesco QQQ Trust (QQQ)","full_shares","shares","choices","parameters","Vanguard FTSE Developed Markets ETF (VEA)"]},sidebar:"tutorialSidebar",previous:{title:"attrib",permalink:"/terminal/reference/portfolio/attrib"},next:{title:"balances",permalink:"/terminal/reference/portfolio/brokers/ally/balances"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],S={toc:c},u="wrapper";function p(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,t.Z)({},S,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"portfolio/bench - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Load in a benchmark from a selected list or set your own based on the ticker."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"bench -b BENCHMARK [BENCHMARK ...] [-s]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"Set the benchmark for the portfolio. By default, this is SPDR S&P 500 ETF Trust (SPY)."),(0,n.kt)("td",{parentName:"tr",align:null},"SPY"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"SPDR S&P 500 ETF Trust (SPY), iShares Core S&P 500 ETF (IVV), Vanguard Total Stock Market ETF (VTI), Vanguard S&P 500 ETF (VOO), Invesco QQQ Trust (QQQ), Vanguard Value ETF (VTV), Vanguard FTSE Developed Markets ETF (VEA), iShares Core MSCI EAFE ETF (IEFA), iShares Core U.S. Aggregate Bond ETF (AGG), Vanguard Total Bond Market ETF (BND), Vanguard FTSE Emerging Markets ETF (VWO), Vanguard Growth ETF (VUG), iShares Core MSCI Emerging Markets ETF (IEMG), iShares Core S&P Small-Cap ETF (IJR), SPDR Gold Shares (GLD), iShares Russell 1000 Growth ETF (IWF), iShares Core S&P Mid-Cap ETF (IJH), Vanguard Dividend Appreciation ETF (VIG), iShares Russell 2000 ETF (IWM), iShares Russell 1000 Value ETF (IWD), Vanguard Mid-Cap ETF (VO), iShares MSCI EAFE ETF (EFA), Vanguard Total International Stock ETF (VXUS), Vanguard Information Technology ETF (VGT), Vanguard High Dividend Yield Index ETF (VYM), Vanguard Total International Bond ETF (BNDX), Vanguard Real Estate ETF (VNQ), Vanguard Small Cap ETF (VB), Technology Select Sector SPDR Fund (XLK), iShares Core S&P Total U.S. Stock Market ETF (ITOT), Vanguard Intermediate-Term Corporate Bond ETF (VCIT), Vanguard Short-Term Corporate Bond ETF (VCSH), Energy Select Sector SPDR Fund (XLE), Health Care Select Sector SPDR Fund (XLV), Vanguard Short-Term Bond ETF (BSV), Financial Select Sector SPDR Fund (XLF), Schwab US Dividend Equity ETF (SCHD), Invesco S&P 500\xae Equal Weight ETF (RSP), iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), iShares S&P 500 Growth ETF (IVW), Vanguard FTSE All-World ex-US Index Fund (VEU), iShares TIPS Bond ETF (TIP), iShares Gold Trust (IAU), Schwab U.S. Large-Cap ETF (SCHX), iShares Core MSCI Total International Stock ETF (IXUS), iShares Russell Midcap ETF (IWR), iShares Russell 1000 ETF (IWB), SPDR Dow Jones Industrial Average ETF Trust (DIA), iShares MSCI Emerging Markets ETF (EEM), iShares MSCI USA Min Vol Factor ETF (USMV), Schwab International Equity ETF (SCHF), iShares S&P 500 Value ETF (IVE), iShares National Muni Bond ETF (MUB), Vanguard Large Cap ETF (VV), Vanguard Small Cap Value ETF (VBR), iShares ESG Aware MSCI USA ETF (ESGU), Vanguard Total World Stock ETF (VT), iShares Core Dividend Growth ETF (DGRO), iShares 1-3 Year Treasury Bond ETF (SHY), iShares Select Dividend ETF (DVY), iShares MSCI USA Quality Factor ETF (QUAL), Schwab U.S. Broad Market ETF (SCHB), iShares MBS ETF (MBB), SPDR S&P Dividend ETF (SDY), iShares 1-5 Year Investment Grade Corporate Bond ETF (IGSB), Vanguard Short-Term Inflation-Protected Securities ETF (VTIP), JPMorgan Ultra-Short Income ETF (JPST), iShares 20+ Year Treasury Bond ETF (TLT), iShares MSCI ACWI ETF (ACWI), SPDR S&P Midcap 400 ETF Trust (MDY), iShares Core Total USD Bond Market ETF (IUSB), iShares Short Treasury Bond ETF (SHV), Vanguard FTSE Europe ETF (VGK), Consumer Discretionary Select Sector SPDR Fund (XLY), SPDR Bloomberg 1-3 Month T-Bill ETF (BIL), iShares U.S. Treasury Bond ETF (GOVT), Vanguard Health Care ETF (VHT), Vanguard Mid-Cap Value ETF (VOE), Consumer Staples Select Sector SPDR Fund (XLP), Schwab U.S. TIPS ETF (SCHP), iShares 7-10 Year Treasury Bond ETF (IEF), iShares Preferred & Income Securities ETF (PFF), Utilities Select Sector SPDR Fund (XLU), Vanguard Tax-Exempt Bond ETF (VTEB), iShares MSCI EAFE Value ETF (EFV), Schwab U.S. Large-Cap Growth ETF (SCHG), iShares J.P. Morgan USD Emerging Markets Bond ETF (EMB), Dimensional U.S. Core Equity 2 ETF (DFAC), Schwab U.S. Small-Cap ETF (SCHA), VanEck Gold Miners ETF (GDX), Vanguard Mortgage-Backed Securities ETF (VMBS), ProShares UltraPro QQQ (TQQQ), Vanguard Short-Term Treasury ETF (VGSH), iShares iBoxx $ High Yield Corporate Bond ETF (HYG), Industrial Select Sector SPDR Fund (XLI), iShares Russell Mid-Cap Value ETF (IWS), Vanguard Extended Market ETF (VXF), SPDR Portfolio S&P 500 ETF (SPLG), SPDR Portfolio S&P 500 Value ETF (SPYV), iShares Russell 2000 Value ETF (IWN)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"full_shares"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to only make a trade with the benchmark when a full share can be bought (no partial shares)."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 May 10, 09:53 (\ud83e\udd8b) /portfolio/ $ bench Vanguard FTSE Developed Markets ETF (VEA)\n\nBenchmark: Vanguard Developed Markets Index Fund (VEA)\n\n2022 May 10, 09:53 (\ud83e\udd8b) /portfolio/ $\n")),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);