"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30979],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"v2.4.0",version:"2.4.0",date:new Date("2023-02-14T00:00:00.000Z"),description:"v2.4.0",sidebar_position:104},o=void 0,l={unversionedId:"terminal/changelog/version2_4_0",id:"terminal/changelog/version2_4_0",title:"v2.4.0",description:"v2.4.0",source:"@site/content/terminal/changelog/version2_4_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_4_0",permalink:"/terminal/changelog/version2_4_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version2_4_0.mdx",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:104,frontMatter:{title:"v2.4.0",version:"2.4.0",date:"2023-02-14T00:00:00.000Z",description:"v2.4.0",sidebar_position:104},sidebar:"tutorialSidebar",previous:{title:"v2.4.1",permalink:"/terminal/changelog/version2_4_1"},next:{title:"v2.3.1",permalink:"/terminal/changelog/version2_3_1"}},s={},m=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-new"},"What's new"),(0,r.kt)("p",null,"We have quite a few things added in the last few weeks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New realestate menu under alternative for looking at UK housing data"),(0,r.kt)("li",{parentName:"ul"},"Mutual fund menu (funds) restored with a new source"),(0,r.kt)("li",{parentName:"ul"},"The dd stock submenu has been improved and merged into the stocks/fa menu"),(0,r.kt)("li",{parentName:"ul"},"Intrinio has been added as a source for stocks and stock options"),(0,r.kt)("li",{parentName:"ul"},"New algolia search engine on the docs"),(0,r.kt)("li",{parentName:"ul"},"Dependencies have been updated and resolved"),(0,r.kt)("li",{parentName:"ul"},"General enhancements and bug fixes")),(0,r.kt)("h2",{id:"whats-changed"},"What's changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Report rendering can't handle save path for users that have a period (.) in username (#4235) @tys203831"),(0,r.kt)("li",{parentName:"ul"},"Fixes bad yFinance candles with auto_adjust=True (#4231) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/Splashscreen Staying up on Windows installer (#4232) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Block logout command if no auth enabled (#4233) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Set guest by default and put authentication behind environment variable (#4197) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Fix generate_portfolio SDK usage example (#4216) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Changed poetry v for docker build (#4229) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Feature/general improvements (#4213) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Sunset some dependencies (#4215) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Fix wrongly formatted values on ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/fa/cash")," (#4211) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Return a dataframe from stocks search, removed export to file system (#3923) (#4193) @joey-walker"),(0,r.kt)("li",{parentName:"ul"},"Adds algolia to docs (#4208) @jose-donato"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/sdk-trailmaps ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio.po")," deprecated functions, fix ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks.disc.filings"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks.fa.sec_fmp")," (#4210) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Adding intrinio and cleaning up options a bit more (#4127) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Update PR Template and Contributing guidelines (#4194) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"[FEAT]"," Nightly Build slack Notifications (#4188) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Feature/some cleaning (#4170) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Updating poetry to v1.3.2 and dependencies (#4076) @aia"),(0,r.kt)("li",{parentName:"ul"},"Cleanse functionality from relying on ",(0,r.kt)("inlineCode",{parentName:"li"},"yfinance")," (#4176) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Feature/dependency grooming (#4166) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Restores numeric values (#4183) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Fix some account bugs (#4190) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Add merge group to allow for merge queue (#4191) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"[FEAT]"," Additional metrics for evaluating forecasting (RMSE+ MSE) (#4178) @martinb-bb"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/banner spaced (#4189) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Point register to dev (#4184) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Tests : mocking yfinance tzcache (#4187) @Chavithra"),(0,r.kt)("li",{parentName:"ul"},"Terminal authentication + keys/settings/routines (#4015) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Routine remote storage (#4143) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"[Snyk]"," Upgrade tailwindcss-radix from 2.6.2 to 2.7.0 (#4177) @snyk-bot"),(0,r.kt)("li",{parentName:"ul"},"Fixing smaller issues and moving a few things around (#4155) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Adjust timezone for AV when interval < 1d (#4158) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Update the documentation so the importance of API keys is more clear (#4172) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Remove legacy macro endpoints with no country parameter (#4173) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Fix crypto/disc/top sort (#4167) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Showing ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio")," portfolios after optimizing in ",(0,r.kt)("inlineCode",{parentName:"li"},"po")," now works, cash comment removed from ",(0,r.kt)("inlineCode",{parentName:"li"},"portfolio")," docs and Parameter file info added (#4149) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Fix portfolio optimization Ticker.info bug (#4145) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Remove duplicate ",(0,r.kt)("inlineCode",{parentName:"li"},"ruff")," selection of ",(0,r.kt)("inlineCode",{parentName:"li"},"pycodestyle")," warnings (",(0,r.kt)("inlineCode",{parentName:"li"},"W"),") (#4156) @andyhuynh3"),(0,r.kt)("li",{parentName:"ul"},"[Snyk]"," Upgrade @radix-ui/react-popover from 1.0.2 to 1.0.3 (#4165) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Removed Pyupgrade From CI (#4160) @colin99d"),(0,r.kt)("li",{parentName:"ul"},"Removing timezone on export xlsx (#4163) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Retire legacy Jupyter Lab extensions (#4146) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Refractor ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/fa")," by incorporating ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/dd")," and making the menu less reliant on Yahoo Finance (#4055) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Fix portfolio/summary command (issue #3960) (#3964) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Fix load a benchmark that isn't in the list of limited choices + yf.Ticker().info bugs (#4079) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"[Snyk]"," Upgrade tailwindcss-radix from 2.6.1 to 2.6.2 (#4148) @snyk-bot"),(0,r.kt)("li",{parentName:"ul"},"Fix portfolio engine assigning close values to the wrong tickers (#4147) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Fix integration test debug mode flag (#4133) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Feature/add isort linter (#4114) @colin99d"),(0,r.kt)("li",{parentName:"ul"},"[Snyk]"," Fix for 2 vulnerabilities (#4129) @snyk-bot"),(0,r.kt)("li",{parentName:"ul"},"Change integration tests environment variables + add option (#4126) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"economy/macro --transform")," (#4125) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Feature/mstarpy (#4068) @Mael-J"),(0,r.kt)("li",{parentName:"ul"},"Adding CMD Flags to Docs Generation (#4123) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"New functionality for UK Sold house price data (#3969) @kulbinderdio"),(0,r.kt)("li",{parentName:"ul"},"Automate Publishing to Pypi (#4115) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Update labels and release drafter (#4116) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Improve website readme (#4099) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Merge release into develop (#4109) @jmaslek")))}d.isMDXComponent=!0}}]);