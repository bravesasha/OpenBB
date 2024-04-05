"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},7651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const s={title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",keywords:["OpenBB Bot","active stocks","stock trading","stock trends","/pop 1hr command","trading platforms","trading strategies","trade updates"]},i=void 0,p={unversionedId:"bot/reference/discord/pop/1hr",id:"bot/reference/discord/pop/1hr",title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",source:"@site/content/bot/reference/discord/pop/1hr.md",sourceDirName:"bot/reference/discord/pop",slug:"/bot/reference/discord/pop/1hr",permalink:"/bot/reference/discord/pop/1hr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/pop/1hr.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",keywords:["OpenBB Bot","active stocks","stock trading","stock trends","/pop 1hr command","trading platforms","trading strategies","trade updates"]},sidebar:"tutorialSidebar",previous:{title:"1d",permalink:"/bot/reference/discord/pop/1d"},next:{title:"screeners",permalink:"/bot/reference/discord/screeners/"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"pop: 1hr - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command retrieves the top 15 stocks that have been traded in the past hour on the OpenBB Bot across all our platforms. It provides the user with an up-to-date overview of the stocks that have been the most active over the past hour, allowing the user to quickly identify trends and potentially capitalize on them."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/pop 1hr\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/pop 1hr\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);