"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(35742);function a(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},27819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905)),a=n(88828);const i={title:"topoichange",description:"This page provides details on the topoichange command and its usage for tracking the top 15 stocks with the highest OI Change. It can be used to monitor significant changes in open interest of stocks.",keywords:["topoichange","stocks","OI Change","open interest","stock market commands","stock name","stock change"]},s=void 0,c={unversionedId:"bot/reference/discord/options/topoichange",id:"bot/reference/discord/options/topoichange",title:"topoichange",description:"This page provides details on the topoichange command and its usage for tracking the top 15 stocks with the highest OI Change. It can be used to monitor significant changes in open interest of stocks.",source:"@site/content/bot/reference/discord/options/topoichange.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/topoichange",permalink:"/bot/reference/discord/options/topoichange",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/topoichange.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"topoichange",description:"This page provides details on the topoichange command and its usage for tracking the top 15 stocks with the highest OI Change. It can be used to monitor significant changes in open interest of stocks.",keywords:["topoichange","stocks","OI Change","open interest","stock market commands","stock name","stock change"]},sidebar:"tutorialSidebar",previous:{title:"topoi",permalink:"/bot/reference/discord/options/topoi"},next:{title:"topstrikevol",permalink:"/bot/reference/discord/options/topstrikevol"}},p={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{title:"options: topoichange - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"This command allows the user to view the top 15 stocks with the highest OI Change. It will display the stock name, the OI Change by put and call, and previous levels. This gives users a helpful overview of the stocks that have seen the most significant change in open interest."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/op topoichange\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This command has no parameters"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/op topoichange\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);