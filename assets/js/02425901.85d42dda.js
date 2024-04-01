"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,f=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),p=r(67392),m=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=s(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,p]=f({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,m.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),k=(()=>{const e=u??d;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,l]),tabValues:l}}var k=r(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:p,tabValues:m}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),{pathname:c}=(0,i.TH)(),f=e=>{const t=e.currentTarget,r=d.indexOf(t),a=m[r].value;a!==u&&(s(t),p(a))},g=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},m.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,o?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&c.startsWith("/terminal")})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(h,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},82326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),o=r(31792),i=r(85162);const u={title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",keywords:["equity","compare","groups"]},p=void 0,m={unversionedId:"platform/reference/equity/compare/groups",id:"platform/reference/equity/compare/groups",title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",source:"@site/content/platform/reference/equity/compare/groups.md",sourceDirName:"platform/reference/equity/compare",slug:"/platform/reference/equity/compare/groups",permalink:"/platform/reference/equity/compare/groups",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/compare/groups.md",tags:[],version:"current",frontMatter:{title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",keywords:["equity","compare","groups"]},sidebar:"tutorialSidebar",previous:{title:"Compare",permalink:"/platform/reference/equity/compare/"},next:{title:"peers",permalink:"/platform/reference/equity/compare/peers"}},d={},s=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:s},f="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"equity/compare/groups - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get company data grouped by sector, industry or country and display either performance or valuation metrics."),(0,n.kt)("p",null,"Valuation metrics include price to earnings, price to book, price to sales ratios and price to cash flow.\nPerformance metrics include the stock price change for different time periods."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.equity.compare.groups(provider='finviz')\n# Group by sector and analyze valuation.\nobb.equity.compare.groups(group='sector', metric='valuation', provider='finviz')\n# Group by industry and analyze performance.\nobb.equity.compare.groups(group='industry', metric='performance', provider='finviz')\n# Group by country and analyze valuation.\nobb.equity.compare.groups(group='country', metric='valuation', provider='finviz')\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The group to compare - i.e., 'sector', 'industry', 'country'. Choices vary by provider."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of metrics to compare - i.e, 'valuation', 'performance'. Choices vary by provider."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['finviz']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'finviz' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"finviz"),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(i.Z,{value:"finviz",label:"finviz",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The group to compare - i.e., 'sector', 'industry', 'country'. Choices vary by provider."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of metrics to compare - i.e, 'valuation', 'performance'. Choices vary by provider."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['finviz']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'finviz' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"finviz"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[CompareGroups]\n        Serializable results.\n\n    provider : Optional[Literal['finviz']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name or label of the group."))))),(0,n.kt)(i.Z,{value:"finviz",label:"finviz",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name or label of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of stocks in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The market cap of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_1D"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last day, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_1W"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last week, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_1M"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last month, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_3M"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last quarter, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_6M"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last half year, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_1Y"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the last year, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_YTD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The performance in the year to date, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The dividend yield of the group, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pe"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The P/E ratio of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"forward_pe"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The forward P/E ratio of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"peg"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The PEG ratio of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eps_growth_past_5_years"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The EPS growth of the group for the past 5 years, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eps_growth_next_5_years"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The estimated EPS growth of the groupo for the next 5 years, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sales_growth_past_5_years"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The sales growth of the group for the past 5 years, as a normalized percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"float_short"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The percent of the float shorted for the group, as a normalized value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analyst_recommendation"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The trading volume.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume_average"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The 3-month average volume of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume_relative"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The relative volume compared to the 3-month average volume.")))))))}g.isMDXComponent=!0}}]);