"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},9271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const o={title:"Validators",sidebar_position:2,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},l=void 0,s={unversionedId:"platform/development/contributing/validators",id:"platform/development/contributing/validators",title:"Validators",description:"This guide provides detailed instructions on how and where validators should be used.",source:"@site/content/platform/development/contributing/validators.md",sourceDirName:"platform/development/contributing",slug:"/platform/development/contributing/validators",permalink:"/platform/development/contributing/validators",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributing/validators.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",sidebarPosition:2,frontMatter:{title:"Validators",sidebar_position:2,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},sidebar:"tutorialSidebar",previous:{title:"HTTP Requests",permalink:"/platform/development/contributing/http_requests"},next:{title:"Function Examples",permalink:"/platform/development/contributing/function_examples"}},d={},p=[{value:"Why Use Validators?",id:"why-use-validators",level:2},{value:"Examples",id:"examples",level:2},{value:"Parsing Dates",id:"parsing-dates",level:3},{value:"Normalize Percent Values",id:"normalize-percent-values",level:3},{value:"Dynamic Default Date",id:"dynamic-default-date",level:3},{value:"Replace 0s With None",id:"replace-0s-with-none",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Validators - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Both QueryParams and Data models can benefit from the tactical use of Pydantic validators.\nThis page will outline some of the key scenarios where they are deployed.\nOverall, they assist with enforcing Fast API compliance for both inputs and outputs,\nand they work in the final stage of transformation immediately before output."),(0,r.kt)("h2",{id:"why-use-validators"},"Why Use Validators?"),(0,r.kt)("p",null,"Some situations where they are used include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transform, conform, or otherwise alter the entered query parameter or returned data value."),(0,r.kt)("li",{parentName:"ul"},"A query parameter or data field is a date."),(0,r.kt)("li",{parentName:"ul"},"A query parameter requires a dynamic default state."),(0,r.kt)("li",{parentName:"ul"},"Normalizing percent values."),(0,r.kt)("li",{parentName:"ul"},"Cleaning NaN values.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The items to import from the Pydantic library are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pydantic import field_validator, model_validator\n")),(0,r.kt)("h3",{id:"parsing-dates"},"Parsing Dates"),(0,r.kt)("p",null,"Providers will format dates in a number of ways. OpenBB uses YYYY-MM-DD as the standard convention, for both inputs and outputs.\nOutputs are a ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," object or JSON serlialized string. Validators are used to parse the date from the specific format.\nThis example is used within a provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    @field_validator("last_trade_timestamp", mode="before", check_fields=False)\n    @classmethod\n    def parse_timestamp(cls, v):\n        """Parse a Unix timestamp."""\n        return datetime.fromtimestamp(v)\n')),(0,r.kt)("h3",{id:"normalize-percent-values"},"Normalize Percent Values"),(0,r.kt)("p",null,"At the provider level, we want to standardize the way values representing a percent are returned.\nIt is our intention to ensure those values are ready-to-consume by formulas without conversion.\nThis example would be used within a provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    @field_validator("change_percent", mode="before", check_fields=False)\n    @classmethod\n    def normalize_percent(cls, v):\n        """Normalize the percent."""\n        return v / 100 if v else None\n')),(0,r.kt)("h3",{id:"dynamic-default-date"},"Dynamic Default Date"),(0,r.kt)("p",null,"It might be desirable to have a default date parameter that is not static. To allow this, we must set the default parameter value as ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"model_validator"),". This example is for the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryParams"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    @model_validator(mode="before")\n    @classmethod\n    def validate_dates(cls, values) -> dict:\n        """Validate the query parameters."""\n        if values.get("start_date") is None:\n            values["start_date"] = (datetime.now() - timedelta(days=90)).date()\n        if values.get("end_date") is None:\n            values["end_date"] = datetime.now().date()\n        return values\n')),(0,r.kt)("h3",{id:"replace-0s-with-none"},"Replace 0s With None"),(0,r.kt)("p",null,"Sometimes values are returned as a ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," when they should really be a ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".\nThis example looks at the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," model, but could easily be adapted to use on individual fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    @model_validator(mode="before")\n    @classmethod\n    def replace_zero(cls, values):\n        """Check for zero values and replace with None."""\n        return (\n            {k: None if v == 0 else v for k, v in values.items()}\n            if isinstance(values, dict)\n            else values\n        )\n')))}c.isMDXComponent=!0}}]);