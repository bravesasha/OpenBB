"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<n;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(35742);function n(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},41467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const l={title:"topsum",description:"The Topsum page provides comprehensive information on the topsum command, which retrieves a summary of total block and dark pool data. The command sums all darkpool prints and displays a table of the largest by symbol, together with a comparative graph, without requiring any parameters.",keywords:["topsum command","retrieve total block","dark pool data summary","sums darkpool prints","graph for comparison","no parameters"]},p=void 0,s={unversionedId:"bot/reference/telegram/darkpool/topsum",id:"bot/reference/telegram/darkpool/topsum",title:"topsum",description:"The Topsum page provides comprehensive information on the topsum command, which retrieves a summary of total block and dark pool data. The command sums all darkpool prints and displays a table of the largest by symbol, together with a comparative graph, without requiring any parameters.",source:"@site/content/bot/reference/telegram/darkpool/topsum.md",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/topsum",permalink:"/bot/reference/telegram/darkpool/topsum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/topsum.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"topsum",description:"The Topsum page provides comprehensive information on the topsum command, which retrieves a summary of total block and dark pool data. The command sums all darkpool prints and displays a table of the largest by symbol, together with a comparative graph, without requiring any parameters.",keywords:["topsum command","retrieve total block","dark pool data summary","sums darkpool prints","graph for comparison","no parameters"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/bot/reference/telegram/darkpool/summary"},next:{title:"discovery",permalink:"/bot/reference/telegram/discovery/"}},i={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"darkpool: topsum - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve total block and dark pool data summary. It sums all darkpool prints and gives a table of the largest by symbol as well as a graph for comparison."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/topsum\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/topsum\n")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);