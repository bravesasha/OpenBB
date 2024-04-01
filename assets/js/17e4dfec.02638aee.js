"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,g=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Current - v2.0.0",version:"2.0.0",date:new Date("2022-10-26T00:00:00.000Z"),description:"v2.0.0",sidebar_position:0},i=void 0,l={unversionedId:"bot/changelog/version2_0_0",id:"bot/changelog/version2_0_0",title:"Current - v2.0.0",description:"v2.0.0",source:"@site/content/bot/changelog/version2_0_0.mdx",sourceDirName:"bot/changelog",slug:"/bot/changelog/version2_0_0",permalink:"/bot/changelog/version2_0_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/changelog/version2_0_0.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:0,frontMatter:{title:"Current - v2.0.0",version:"2.0.0",date:"2022-10-26T00:00:00.000Z",description:"v2.0.0",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/bot/changelog/"},next:{title:"v1.0.8",permalink:"/bot/changelog/version1_0_8"}},s={},c=[{value:"Added",id:"added",level:2},{value:"Telegram Support",id:"telegram-support",level:3},{value:"Billboard Messages",id:"billboard-messages",level:3},{value:"Changed",id:"changed",level:2},{value:"Pricing",id:"pricing",level:3},{value:"Fixed",id:"fixed",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("h3",{id:"telegram-support"},"Telegram Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenBB Bot is now available on telegram - you can add it ",(0,o.kt)("a",{href:"https://openbb.co/bot-telegram",rel:"noopener noreferrer",target:"_blank",className:"_hyper-link"},"here"))),(0,o.kt)("h3",{id:"billboard-messages"},"Billboard Messages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With a premium server account you can now edit the billboard messages users see in your server. You can edit this on the ",(0,o.kt)("a",{parentName:"li",href:"https://my.openbb.co"},"my.openbb.co")," dash.")),(0,o.kt)("p",null,"Commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/autopost add - Added Auto Posting to bot! (Finally :D ) You can now schedule autoposts for your server with a free server plan or premium plan")),(0,o.kt)("h2",{id:"changed"},"Changed"),(0,o.kt)("h3",{id:"pricing"},"Pricing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can read more about the pricing change ",(0,o.kt)("a",{href:"https://openbb.co/blog/openbb-bot-price-change",rel:"noopener noreferrer",target:"_blank",className:"_hyper-link"},"here")," - TLDR - It's cheaper now :)")),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("p",null,"No Changes"))}d.isMDXComponent=!0}}]);