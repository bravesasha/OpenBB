"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},64051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const l={title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",keywords:["eval function","custom data column","pandas.eval","mathematical expressions","datasets","case sensitive","query","DGS2","DGS5"]},i=void 0,s={unversionedId:"terminal/reference/economy/eval",id:"terminal/reference/economy/eval",title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",source:"@site/content/terminal/reference/economy/eval.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/eval",permalink:"/terminal/reference/economy/eval",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/eval.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",keywords:["eval function","custom data column","pandas.eval","mathematical expressions","datasets","case sensitive","query","DGS2","DGS5"]},sidebar:"tutorialSidebar",previous:{title:"edebt",permalink:"/terminal/reference/economy/edebt"},next:{title:"events",permalink:"/terminal/reference/economy/events"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"economy /eval - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval() function. Example. If I have loaded ",(0,r.kt)("inlineCode",{parentName:"p"},"fred DGS2,DGS5")," and I want to create a new column that is the difference between these two, I can create a new column by doing ",(0,r.kt)("inlineCode",{parentName:"p"},"eval spread = DGS2 - DGS5"),". Notice that the command is case sensitive, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"DGS2")," is not the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"dgs2"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"eval [-q QUERY [QUERY ...]]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"Query to evaluate on loaded datasets"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);