"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),s=n(35742);function a(e){let{title:t}=e;return r.createElement(s.Z,null,r.createElement("title",null,t))}},76654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),s=(n(67294),n(3905)),a=n(88828);const i={title:"snews",description:"snews - Display stock price and headlines sentiment using VADER model. No parameters. Source: Finnhub.",keywords:["snews","stock price","headlines sentiment","VADER model","Finnhub"]},o=void 0,c={unversionedId:"terminal/reference/stocks/ba/snews",id:"terminal/reference/stocks/ba/snews",title:"snews",description:"snews - Display stock price and headlines sentiment using VADER model. No parameters. Source: Finnhub.",source:"@site/content/terminal/reference/stocks/ba/snews.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/snews",permalink:"/terminal/reference/stocks/ba/snews",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/snews.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"snews",description:"snews - Display stock price and headlines sentiment using VADER model. No parameters. Source: Finnhub.",keywords:["snews","stock price","headlines sentiment","VADER model","Finnhub"]},sidebar:"tutorialSidebar",previous:{title:"sentiment",permalink:"/terminal/reference/stocks/ba/sentiment"},next:{title:"spac",permalink:"/terminal/reference/stocks/ba/spac"}},l={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{title:"stocks/ba/snews - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,s.kt)("p",null,"Display stock price and headlines sentiment using VADER model over time. ","[Source: Finnhub]"),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"snews\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"This command has no parameters"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/156584514-33c2cd52-4763-43cd-8a53-4118b8615450.png",alt:"snews"})),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);