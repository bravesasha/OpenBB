"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),o=r(86010),i=r(67294),a=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:d}=(0,a.TH)(),l=d.replace(/\/v\d+/,"");return i.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},40536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),i=r(62872);const a={},s="info",c={unversionedId:"bot/reference/discord/info/index",id:"bot/reference/discord/info/index",title:"info",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/info/index.mdx",sourceDirName:"bot/reference/discord/info",slug:"/bot/reference/discord/info/",permalink:"/bot/reference/discord/info/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/info/index.mdx",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"senate",permalink:"/bot/reference/discord/government/senate"},next:{title:"about",permalink:"/bot/reference/discord/info/about"}},d={},l=[],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"info"},"info"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(i.Z,{title:"about",description:"This command will provide users with a comprehensive overview of OpenBB Bot and links to our social media pages.",url:"/bot/reference/discord/info/about",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"serverid",description:"This command allows the user to retrieve the Server ID of discord room. The Server ID is a unique identifier...",url:"/bot/reference/discord/info/serverid",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"stats",description:"This command allows the user to retrieve the current number of servers the bot is in.",url:"/bot/reference/discord/info/stats",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"support",description:"This command allows the user to send a support ticket directly to our team.",url:"/bot/reference/discord/info/support",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);