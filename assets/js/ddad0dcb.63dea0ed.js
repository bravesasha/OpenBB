"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90575],{24319:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>x,toc:()=>h});var n=l(74848),s=l(28453),i=l(94331);const r={title:"Government",description:"The page provides comprehensive information about the Government module that offers programmatic access to OpenBB Terminal functions. It includes details about commands available, how to use them with Python, and examples. It serves as a vital resource for those interested in examining US government data related to publicly traded companies.",keywords:["Government module","programmatic access","fundamental and macroeconomic research","US data","commands","ticker-specific","non-specific","openbb.stocks.gov","Contracts Awarded to a Company","Reported Trades in a Company's Stock","US Congress and Senate","Quarterly Total Amount Paid to a Company by the Government","Latest Invoices Paid by the US Treasury Department","Recorded Lobbying Efforts by a Company","Ranking Companies by Total Amount Rewarded","Top Buyers in Office","Corporate Lobbyist Activity","Top Sellers in Office"]},d=void 0,x={id:"sdk/data-available/stocks/government",title:"Government",description:"The page provides comprehensive information about the Government module that offers programmatic access to OpenBB Terminal functions. It includes details about commands available, how to use them with Python, and examples. It serves as a vital resource for those interested in examining US government data related to publicly traded companies.",source:"@site/content/sdk/data-available/stocks/government.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/government",permalink:"/sdk/data-available/stocks/government",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/government.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,frontMatter:{title:"Government",description:"The page provides comprehensive information about the Government module that offers programmatic access to OpenBB Terminal functions. It includes details about commands available, how to use them with Python, and examples. It serves as a vital resource for those interested in examining US government data related to publicly traded companies.",keywords:["Government module","programmatic access","fundamental and macroeconomic research","US data","commands","ticker-specific","non-specific","openbb.stocks.gov","Contracts Awarded to a Company","Reported Trades in a Company's Stock","US Congress and Senate","Quarterly Total Amount Paid to a Company by the Government","Latest Invoices Paid by the US Treasury Department","Recorded Lobbying Efforts by a Company","Ranking Companies by Total Amount Rewarded","Top Buyers in Office","Corporate Lobbyist Activity","Top Sellers in Office"]},sidebar:"tutorialSidebar",previous:{title:"Fundamental Analysis",permalink:"/sdk/data-available/stocks/fundamental-analysis"},next:{title:"Insiders",permalink:"/sdk/data-available/stocks/insiders"}},c={},h=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Toplobbying",id:"toplobbying",level:3},{value:"Contracts",id:"contracts",level:3},{value:"Histcont",id:"histcont",level:3},{value:"Lobbying",id:"lobbying",level:3},{value:"Lastcontracts",id:"lastcontracts",level:3}];function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"Government - Stocks - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,n.jsxs)(e.p,{children:["The Government module provides programmatic access to the same functions from the ",(0,n.jsx)(e.a,{href:"/terminal/menus/stocks/gov",children:"OpenBB Terminal"}),". They provide an excellent supplement to fundamental and macroeconomic research. Please note that this module will only return data from the USA."]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,n.jsxs)(e.p,{children:["Below is a list of all the commands and a brief description. There are two types of function: ticker-specific, and non-specific. Many of these tables also have a companion ",(0,n.jsx)(e.code,{children:"_chart"})," function."]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.contracts"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Ticker"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Contracts Awarded to a Company"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.gtrades"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Ticker"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Reported Trades in a Company's Stock by Members of the US Congress and Senate"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.histcont"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Ticker"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"The Quarterly Total Amount Paid to a Company by the Government"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.lastcontracts"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"The Latest Invoices Paid by the US Treasury Department"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.lasttrades"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"The Latest Reported Trades Made by Members of the US Congress and Senate"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.lobbying"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Ticker"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Recorded Lobbying Efforts by a Company"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.qtrcontracts"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Ranking Companies by Total Amount Rewarded"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.topbuys"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"The Top Buyers in Office"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.toplobbying"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Corporate Lobbyist Activity and the Specific Issues"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.stocks.gov.topsells"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"All"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"The Top Sellers in Office"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"Alternatively, Python's built-in help will display the contents of the module, or specific function."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"help(openbb.stocks.gov)\n"})}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,n.jsx)(e.p,{children:"The examples below will assume that this block is included at the top of the file:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,n.jsx)(e.h3,{id:"toplobbying",children:"Toplobbying"}),"\n",(0,n.jsx)(e.p,{children:"This command shows who is spending money in Washington and what their intentions are."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.stocks.gov.toplobbying()\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Client"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Amount"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Issue"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Specific_Issue"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"495"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DKNG"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DRAFTKINGS INC."}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"20000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Taxation/Internal Revenue Code"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Tax characterization of daily fantasy sports."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"496"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ELVT"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ELEVATE CREDIT SERVICE, LLC"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"90000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Banking"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Monitored issues concerning online lending proposals."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"497"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"HGV"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"HILTON GRAND VACATIONS"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"20000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Financial Institutions/Investments/Securities"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL DISCUSSIONS RELATED TO DEBT SERVICING"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"498"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"SO"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"SOUTHERN CALIFORNIA TRIBAL CHAIRMEN'S ASSOCIATION"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"40000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Indian/Native American Affairs"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Fee to trust issues. Issues surrounding federal programs for Indian tribes."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"499"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ONCS"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ONCOSEC MEDICAL INCORPORATED"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"contracts",children:"Contracts"}),"\n",(0,n.jsx)(e.p,{children:"Get a list of contracts awarded to a company and the agency authorizing it."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.stocks.gov.contracts('AMT')\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Agency"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Amount"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-16"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"RENTAL TOWER SITE"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF JUSTICE (DOJ)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ANTENNA LEASE SITE 43  AMERICAN TOWER"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF HOMELAND SECURITY (DHS)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"13699.9"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"IGF::OT::IGF"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF JUSTICE (DOJ)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"5100"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"LEASE OF RADIO REPEATER SITE"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF THE TREASURY (TREAS)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"9787.84"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"IGF::OT::IGF::-RECUR SERVICE FOR ANTENNA SITE  J ACCOUNT   LEASE AT:  MARIETTA, GA (BLACKWELL SITE)"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF JUSTICE (DOJ)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"5"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"FUNDING FOR FY 2018 THROUGH FY 2019 ANTENNA SITE AGREEMENTS"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DEPARTMENT OF STATE (DOS)"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"30000"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"histcont",children:"Histcont"}),"\n",(0,n.jsx)(e.p,{children:"Get the historic (from 2008) quarterly sum paid to a company by the US Treasury department."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.stocks.gov.histcont('AMT')\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"}}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Qtr"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Year"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Amount"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2021"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"127282"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2021"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"564310"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2021"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"564645"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"52"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2008"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"110021"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"53"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2008"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"240877"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"54"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2008"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"907099"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"55"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2008"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"320620"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"lobbying",children:"Lobbying"}),"\n",(0,n.jsx)(e.p,{children:"Find the records of a company's lobbying efforts."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.stocks.gov.lobbying('AMT')\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Client"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Amount"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Issue"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Specific_Issue"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-01"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"AMT"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"AMERICAN TOWER CORPORATION"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"440000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Trade (domestic/foreign)"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Issues pertaining to global trade, global development, AID and the World Bank including trade policy with India - no specific legislation."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Communications/Broadcasting/Radio/TV"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Telecommunication infrastructure issues including those related to the Federal Communications Commission - no specific legislation. Issues related to NTIA - including implementation of broadband funding programs in the Infrastructure Investment and Jobs Act, HR 3684. Issues related to 5G and wireless communications deployment - no specific legislation. Issues related to the definition of eligible project costs - no specific legislation. Issues pertaining to broadband deployment, including relevant provisions in the Infrastructure Investment and Jobs Act, HR 3684 and related legislation."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Telecommunications"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Issues pertaining to telecommunications tower real estate - no specific legislation. Issues related to global telecommunications policy - no specific legislation."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Taxation/Internal Revenue Code"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Issues related to international and domestic tax provisions as applied to real estate investment trusts and Public Law 115-97 (Tax Cuts and Jobs Act), including H.R. 5376, the Inflation Reduction Act of 2022."})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"lastcontracts",children:"Lastcontracts"}),"\n",(0,n.jsx)(e.p,{children:"Find out who is selling ink, toner cartridges, or other seemingly mundane items, to the Federal government."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.stocks.gov.lastcontracts()\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"}}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Amount"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Agency"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DNOW"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"81.3"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CASE, FILING, TRANSFER: ITEM NAME CASE, FILING,"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL SERVICES ADMINISTRATION (GSA)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"TRANSFER INSIDE WIDTH 8.250 INCHES INSIDE LENGTH"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"5.500 INCHES INSIDE DEPTH 10.75 INCHES CARD WIDTH"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"8.000 INCHES CARD LENGTH 5.000 INCHES CARD"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CAPACITY 1,200 UNIT TYPE BOX UNIT DESIGN NON-"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"}}),(0,n.jsx)(e.td,{style:{textAlign:"right"}}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"COLLAPSIBL"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DNOW"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"855.6"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CARTRIDGE,TONER"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL SERVICES ADMINISTRATION (GSA)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DNOW"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"169.84"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"TONER,HP 508X HY, LJ,YL"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL SERVICES ADMINISTRATION (GSA)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DNOW"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"519.5"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"CARTRIDGE,INK"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL SERVICES ADMINISTRATION (GSA)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-02 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DNOW"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1778.1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"OEM HP HY TONER, YELLOW, YLD 23K"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GENERAL SERVICES ADMINISTRATION (GSA)"})]})]})]})]})}function a(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(o,{...t})}):o(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>i});l(96540);var n=l(5260),s=l(74848);function i(t){let{title:e}=t;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>r,x:()=>d});var n=l(96540);const s={},i=n.createContext(s);function r(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);