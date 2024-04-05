"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||n;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),a=r(86010),n=r(67294),s=r(16550);function i(e){let{title:t,url:r,description:i,command:l}=e;const{pathname:c}=(0,s.TH)(),d=c.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},14175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(87462),a=(r(67294),r(3905)),n=r(62872);const s={},i="short_data",l={unversionedId:"bot/reference/telegram/short_data/index",id:"bot/reference/telegram/short_data/index",title:"short_data",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/short_data/index.mdx",sourceDirName:"bot/reference/telegram/short_data",slug:"/bot/reference/telegram/short_data/",permalink:"/bot/reference/telegram/short_data/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/short_data/index.mdx",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"screener",permalink:"/bot/reference/telegram/screeners/screener"},next:{title:"borrowed",permalink:"/bot/reference/telegram/short_data/borrowed"}},c={},d=[],m={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"short_data"},"short_data"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(n.Z,{title:"borrowed",description:"This command allows the user to view the history of borrowed shares available and fees associated with the stock...",url:"/bot/reference/telegram/short_data/borrowed",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"hsi",description:"This command retrieves the top high short interest stocks over a 20% ratio. This information can let an investor...",url:"/bot/reference/telegram/short_data/hsi",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"shortrate",description:"This command allows the user to retrieve the Display Short Shares spot borrow rate from Interactive Brokers for...",url:"/bot/reference/telegram/short_data/shortrate",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"shortvol",description:"This command allows the user to retrieve a graph of the 30 day history of the short volume versus the total...",url:"/bot/reference/telegram/short_data/shortvol",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"topshortvol",description:"This command allows the user to retrieve the Top 15 Short Interest Stocks per Finra. It's typically measured as a...",url:"/bot/reference/telegram/short_data/topshortvol",mdxType:"ReferenceCard"})))}h.isMDXComponent=!0}}]);