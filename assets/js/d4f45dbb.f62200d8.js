"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,o]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},3437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(88828),o=n(20630);const s={title:"Getting Started",sidebar_position:0,description:"Get started with OpenBB Terminal Pro, your comprehensive tool for investment research. Understand the layout and powerful features that can enhance your research capabilities.",keywords:["investment research","sidebar","main menu","charting","news","data connectors","dashboards","working area","widgets","investment decisions"]},l=void 0,d={unversionedId:"pro/getting-started/index",id:"pro/getting-started/index",title:"Getting Started",description:"Get started with OpenBB Terminal Pro, your comprehensive tool for investment research. Understand the layout and powerful features that can enhance your research capabilities.",source:"@site/content/pro/getting-started/index.md",sourceDirName:"pro/getting-started",slug:"/pro/getting-started/",permalink:"/pro/getting-started/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/getting-started/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1711990771,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:0,frontMatter:{title:"Getting Started",sidebar_position:0,description:"Get started with OpenBB Terminal Pro, your comprehensive tool for investment research. Understand the layout and powerful features that can enhance your research capabilities.",keywords:["investment research","sidebar","main menu","charting","news","data connectors","dashboards","working area","widgets","investment decisions"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pro/"},next:{title:"Free trial",permalink:"/pro/getting-started/free-trial"}},c={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Getting Started | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Welcome to the OpenBB Terminal Pro, your comprehensive tool for investment research."),(0,a.kt)("p",null,"Let's get you started by understanding the layout of the Terminal Pro."),(0,a.kt)("img",{className:"pro-border-gradient",width:"800",alt:"mainstruct",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/3846be6d-8110-424a-a87a-67bd96c561f7"}),(0,a.kt)("p",null,"The interface is divided into two main areas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sidebar"),": Here, you'll find your main menu and your dashboards."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Main Menu"),": This is your command center, housing the Home, Charting, News, and Data Connectors sections. Each section serves a unique purpose, designed to enhance your research capabilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dashboards"),": This is where all your dashboards (and folders) are organized. To understand more about how dashboards can streamline your workflow, visit ",(0,a.kt)("a",{parentName:"li",href:"/pro/dashboards"},"this page"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Working Area"),": This is your research canvas. It's where you'll interact with widgets that provide valuable insights to inform your investment decisions through dashboards, or where you'll access one of the views available from the main menu."))),(0,a.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/BVfjZInFc60?si=ez46auhSLWz9PH1C",videoLegend:"Short introduction to structure",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"The main menu is your gateway to the powerful features of the OpenBB Terminal Pro. It comprises four key sections:"),(0,a.kt)("img",{className:"pro-border-gradient",width:"800",alt:"Main Menu",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/2b3df52f-83a8-442e-8021-85caa795b68f"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Homepage"),": This is your OpenBB homepage, where you'll find the latest updates and insights from the OpenBB team. This includes announcements, roadmap, events and others.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"News"),": Stay informed with the latest financial news articles, curated and presented for easy consumption.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Charting"),": A versatile tool that allows you to visualize and analyze data across various domains - equities, macroeconomics, or cryptocurrencies. Use it for technical analysis or overlay financials for equities to gain deeper insights.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Data Connectors"),": This feature empowers you to integrate your own data into Terminal Pro. Leverage this alongside the vast financial data accessible from Terminal Pro to make informed decisions."))),(0,a.kt)("p",null,"Now that you're familiar with the layout, let's dive into the powerful features of OpenBB Terminal Pro."))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);