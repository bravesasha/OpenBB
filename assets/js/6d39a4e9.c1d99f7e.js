"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34069],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(67294),o=t(35742);function a(e){let{title:n}=e;return r.createElement(o.Z,null,r.createElement("title",null,n))}},51721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(87462),o=(t(67294),t(3905)),a=t(88828);const i={title:"glbonds",description:"The glbonds command page provides information about the retrieval of an overview of global bonds which includes details such as type of bond, rate of return, yield, and yield change. This command is fundamental in making informed decisions about investing in global bonds.",keywords:["glbonds command","global bonds","rate of return","yield","yield change","investing in global bonds"]},l=void 0,d={unversionedId:"bot/reference/discord/economy/glbonds",id:"bot/reference/discord/economy/glbonds",title:"glbonds",description:"The glbonds command page provides information about the retrieval of an overview of global bonds which includes details such as type of bond, rate of return, yield, and yield change. This command is fundamental in making informed decisions about investing in global bonds.",source:"@site/content/bot/reference/discord/economy/glbonds.md",sourceDirName:"bot/reference/discord/economy",slug:"/bot/reference/discord/economy/glbonds",permalink:"/bot/reference/discord/economy/glbonds",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/economy/glbonds.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"glbonds",description:"The glbonds command page provides information about the retrieval of an overview of global bonds which includes details such as type of bond, rate of return, yield, and yield change. This command is fundamental in making informed decisions about investing in global bonds.",keywords:["glbonds command","global bonds","rate of return","yield","yield change","investing in global bonds"]},sidebar:"tutorialSidebar",previous:{title:"fedrates",permalink:"/bot/reference/discord/economy/fedrates"},next:{title:"indices",permalink:"/bot/reference/discord/economy/indices"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"economy: glbonds - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve an overview of global bonds. It includes information about the type of bond, the rate of return, yield, and yield change. The data is presented in an easy to read format and can be used to inform decisions about investing in global bonds."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/econ glbonds\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/econ glbonds\n")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);