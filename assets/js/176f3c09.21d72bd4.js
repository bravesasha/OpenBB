"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(d,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},96410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(88828),i=n(20630);const s={title:"Folders",sidebar_position:4,description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",keywords:["Folder creation","Dashboard creation","Investment research","Dashboard organization","Dashboard settings","Move dashboard to folder"]},d=void 0,l={unversionedId:"pro/dashboards/folders",id:"pro/dashboards/folders",title:"Folders",description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",source:"@site/content/pro/dashboards/folders.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/folders",permalink:"/pro/dashboards/folders",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/folders.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",sidebarPosition:4,frontMatter:{title:"Folders",sidebar_position:4,description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",keywords:["Folder creation","Dashboard creation","Investment research","Dashboard organization","Dashboard settings","Move dashboard to folder"]},sidebar:"tutorialSidebar",previous:{title:"Report",permalink:"/pro/dashboards/report"},next:{title:"Advanced Search",permalink:"/pro/advanced-search"}},c={},p=[],h={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Folders | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/sFvzgQULDos?si=fS1wm6YEQAb07vwe",videoLegend:"Short introduction to folders",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"On the sidebar, users have a plus icon where they are able to create a new dashboard or folder."),(0,a.kt)("img",{className:"pro-border-gradient",width:"2181",alt:"add dash",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c8a88574-7ec4-4abd-8662-9e1f6cf376bc"}),(0,a.kt)("p",null,"This allows the creation of a new dashboard to perform investment research, or creating a folder to organize multiple dashboards."),(0,a.kt)("p",null,"Below is an example of a folder that contains multiple dashboards."),(0,a.kt)("img",{className:"pro-border-gradient",width:"247",alt:"folder",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0c928803-7ef3-4b63-8313-5f5fec767197"}),(0,a.kt)("p",null,'A dashboard can be moved into a folder through the dashboard settings with the "Move to", or by dragging the dashboard into the folder.'))}f.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);