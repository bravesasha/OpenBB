"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"v3.2.3",version:"3.2.2",date:new Date("2023-10-02T00:00:00.000Z"),description:"v3.2.3",sidebar_position:94},i=void 0,l={unversionedId:"terminal/changelog/version3_2_3",id:"terminal/changelog/version3_2_3",title:"v3.2.3",description:"v3.2.3",source:"@site/content/terminal/changelog/version3_2_3.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_3",permalink:"/terminal/changelog/version3_2_3",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_3.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",sidebarPosition:94,frontMatter:{title:"v3.2.3",version:"3.2.2",date:"2023-10-02T00:00:00.000Z",description:"v3.2.3",sidebar_position:94},sidebar:"tutorialSidebar",previous:{title:"v3.2.4",permalink:"/terminal/changelog/version3_2_4"},next:{title:"v3.2.2",permalink:"/terminal/changelog/version3_2_2"}},s={},c=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thank you for your patience!  We have been working hard on the release of the openbb platform, which will be v4.  You can check out the progress on our open PRs or the open branches."),(0,a.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,a.kt)("p",null,"@Light-JH, @MarkBenjamin and @ferreiratiago"),(0,a.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have fixed some issues related to the pip installation, which required pinning certain libraries."),(0,a.kt)("li",{parentName:"ul"},"General bug fixes")),(0,a.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hotfix/fix-pylint-errors: Fixes a couple of pylint errors (#5506) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Update finvizfinance (#5500) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"hotfix/forecast-make-intraday-work: An attempt to make intraday data work with forecast functions (#5486) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Pin financedatabase (#5495) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Fix bug that doesn't allow to iterate through tickers with a dot (#5489) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"refactor: reviewpad configuration (#5493) @ferreiratiago"),(0,a.kt)("li",{parentName:"ul"},"hotfix/delete-options-screener-intro: Removes deprecated function from Intros documentation. (#5474) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Hotfix stock screener (#5440) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Print message if yahoo finance load fails (#5450) @Light-JH"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/pywry 0.6.1 (#5446) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/weird logs (#5439) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"Improve readme header (#5432) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Release/3.2.2 (#5391) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Feature/sdk usage basics webpage tidy (#5388) @MarkBenjamin")),(0,a.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,a.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,a.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}m.isMDXComponent=!0}}]);