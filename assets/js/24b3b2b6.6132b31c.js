"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67028],{3905:(t,l,_)=>{_.d(l,{Zo:()=>s,kt:()=>i});var o=_(67294);function n(t,l,_){return l in t?Object.defineProperty(t,l,{value:_,enumerable:!0,configurable:!0,writable:!0}):t[l]=_,t}function e(t,l){var _=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),_.push.apply(_,o)}return _}function r(t){for(var l=1;l<arguments.length;l++){var _=null!=arguments[l]?arguments[l]:{};l%2?e(Object(_),!0).forEach((function(l){n(t,l,_[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(_)):e(Object(_)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(_,l))}))}return t}function a(t,l){if(null==t)return{};var _,o,n=function(t,l){if(null==t)return{};var _,o,n={},e=Object.keys(t);for(o=0;o<e.length;o++)_=e[o],l.indexOf(_)>=0||(n[_]=t[_]);return n}(t,l);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);for(o=0;o<e.length;o++)_=e[o],l.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(t,_)&&(n[_]=t[_])}return n}var p=o.createContext({}),c=function(t){var l=o.useContext(p),_=l;return t&&(_="function"==typeof t?t(l):r(r({},l),t)),_},s=function(t){var l=c(t.components);return o.createElement(p.Provider,{value:l},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var l=t.children;return o.createElement(o.Fragment,{},l)}},h=o.forwardRef((function(t,l){var _=t.components,n=t.mdxType,e=t.originalType,p=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),u=c(_),h=n,i=u["".concat(p,".").concat(h)]||u[h]||g[h]||e;return _?o.createElement(i,r(r({ref:l},s),{},{components:_})):o.createElement(i,r({ref:l},s))}));function i(t,l){var _=arguments,n=l&&l.mdxType;if("string"==typeof t||n){var e=_.length,r=new Array(e);r[0]=h;var a={};for(var p in l)hasOwnProperty.call(l,p)&&(a[p]=l[p]);a.originalType=t,a[u]="string"==typeof t?t:n,r[1]=a;for(var c=2;c<e;c++)r[c]=_[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,_)}h.displayName="MDXCreateElement"},88828:(t,l,_)=>{_.d(l,{Z:()=>e});var o=_(67294),n=_(35742);function e(t){let{title:l}=t;return o.createElement(n.Z,null,o.createElement("title",null,l))}},62958:(t,l,_)=>{_.r(l),_.d(l,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=_(87462),n=(_(67294),_(3905)),e=_(88828);const r={title:"pick",description:"Learn how to use the 'pick' function to plot option hedge diagrams. Discover parameters like amount investment and what options to pick.",keywords:["Option hedge diagrams","Investment","Long call","Long put","Short call","Short put","Seed investment"]},a=void 0,p={unversionedId:"terminal/reference/stocks/options/hedge/pick",id:"terminal/reference/stocks/options/hedge/pick",title:"pick",description:"Learn how to use the 'pick' function to plot option hedge diagrams. Discover parameters like amount investment and what options to pick.",source:"@site/content/terminal/reference/stocks/options/hedge/pick.md",sourceDirName:"terminal/reference/stocks/options/hedge",slug:"/terminal/reference/stocks/options/hedge/pick",permalink:"/terminal/reference/stocks/options/hedge/pick",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/hedge/pick.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"pick",description:"Learn how to use the 'pick' function to plot option hedge diagrams. Discover parameters like amount investment and what options to pick.",keywords:["Option hedge diagrams","Investment","Long call","Long put","Short call","Short put","Seed investment"]},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/terminal/reference/stocks/options/hedge/list"},next:{title:"plot",permalink:"/terminal/reference/stocks/options/hedge/plot"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:s},g="wrapper";function h(t){let{components:l,..._}=t;return(0,n.kt)(g,(0,o.Z)({},u,_,{components:l,mdxType:"MDXLayout"}),(0,n.kt)(e.Z,{title:"stocks/hedge/pick /options - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This function plots option hedge diagrams"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pick -p {70_long_call,70_long_put,70_short_call,70_short_put,75_long_call,75_long_put,75_short_call,75_short_put,80_long_call,80_long_put,80_short_call,80_short_put,85_long_call,85_long_put,85_short_call,85_short_put,90_long_call,90_long_put,90_short_call,90_short_put,95_long_call,95_long_put,95_short_call,95_short_put,100_long_call,100_long_put,100_short_call,100_short_put,105_long_call,105_long_put,105_short_call,105_short_put,110_long_call,110_long_put,110_short_call,110_short_put,115_long_call,115_long_put,115_short_call,115_short_put,120_long_call,120_long_put,120_short_call,120_short_put,125_long_call,125_long_put,125_short_call,125_short_put,130_long_call,130_long_put,130_short_call,130_short_put,135_long_call,135_long_put,135_short_call,135_short_put,140_long_call,140_long_put,140_short_call,140_short_put,145_long_call,145_long_put,145_short_call,145_short_put,150_long_call,150_long_put,150_short_call,150_short_put,155_long_call,155_long_put,155_short_call,155_short_put,160_long_call,160_long_put,160_short_call,160_short_put,165_long_call,165_long_put,165_short_call,165_short_put,170_long_call,170_long_put,170_short_call,170_short_put,175_long_call,175_long_put,175_short_call,175_short_put,180_long_call,180_long_put,180_short_call,180_short_put,185_long_call,185_long_put,185_short_call,185_short_put,190_long_call,190_long_put,190_short_call,190_short_put,195_long_call,195_long_put,195_short_call,195_short_put,200_long_call,200_long_put,200_short_call,200_short_put,205_long_call,205_long_put,205_short_call,205_short_put,210_long_call,210_long_put,210_short_call,210_short_put,215_long_call,215_long_put,215_short_call,215_short_put,220_long_call,220_long_put,220_short_call,220_short_put,225_long_call,225_long_put,225_short_call,225_short_put,230_long_call,230_long_put,230_short_call,230_short_put,235_long_call,235_long_put,235_short_call,235_short_put,240_long_call,240_long_put,240_short_call,240_short_put,245_long_call,245_long_put,245_short_call,245_short_put} [-a AMOUNT]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pick"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose what you would like to pick"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"70_long_call, 70_long_put, 70_short_call, 70_short_put, 75_long_call, 75_long_put, 75_short_call, 75_short_put, 80_long_call, 80_long_put, 80_short_call, 80_short_put, 85_long_call, 85_long_put, 85_short_call, 85_short_put, 90_long_call, 90_long_put, 90_short_call, 90_short_put, 95_long_call, 95_long_put, 95_short_call, 95_short_put, 100_long_call, 100_long_put, 100_short_call, 100_short_put, 105_long_call, 105_long_put, 105_short_call, 105_short_put, 110_long_call, 110_long_put, 110_short_call, 110_short_put, 115_long_call, 115_long_put, 115_short_call, 115_short_put, 120_long_call, 120_long_put, 120_short_call, 120_short_put, 125_long_call, 125_long_put, 125_short_call, 125_short_put, 130_long_call, 130_long_put, 130_short_call, 130_short_put, 135_long_call, 135_long_put, 135_short_call, 135_short_put, 140_long_call, 140_long_put, 140_short_call, 140_short_put, 145_long_call, 145_long_put, 145_short_call, 145_short_put, 150_long_call, 150_long_put, 150_short_call, 150_short_put, 155_long_call, 155_long_put, 155_short_call, 155_short_put, 160_long_call, 160_long_put, 160_short_call, 160_short_put, 165_long_call, 165_long_put, 165_short_call, 165_short_put, 170_long_call, 170_long_put, 170_short_call, 170_short_put, 175_long_call, 175_long_put, 175_short_call, 175_short_put, 180_long_call, 180_long_put, 180_short_call, 180_short_put, 185_long_call, 185_long_put, 185_short_call, 185_short_put, 190_long_call, 190_long_put, 190_short_call, 190_short_put, 195_long_call, 195_long_put, 195_short_call, 195_short_put, 200_long_call, 200_long_put, 200_short_call, 200_short_put, 205_long_call, 205_long_put, 205_short_call, 205_short_put, 210_long_call, 210_long_put, 210_short_call, 210_short_put, 215_long_call, 215_long_put, 215_short_call, 215_short_put, 220_long_call, 220_long_put, 220_short_call, 220_short_put, 225_long_call, 225_long_put, 225_short_call, 225_short_put, 230_long_call, 230_long_put, 230_short_call, 230_short_put, 235_long_call, 235_long_put, 235_short_call, 235_short_put, 240_long_call, 240_long_put, 240_short_call, 240_short_put, 245_long_call, 245_long_put, 245_short_call, 245_short_put")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose the amount invested"),(0,n.kt)("td",{parentName:"tr",align:null},"1000"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}h.isMDXComponent=!0}}]);