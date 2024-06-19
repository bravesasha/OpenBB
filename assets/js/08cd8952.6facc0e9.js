"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57122],{33262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var o=r(74848),n=r(28453),i=r(94331),a=r(69396);const s={title:"Report",sidebar_position:3,description:"Learn how to create a report out of a dashboard in OpenBB Terminal Pro. Discover the power of static reports in PDF or PNG format with additional insights and how to export it.",keywords:["Report creation","Export dashboard as report","Export report as PDF","Export report as PNG","Insights on report","Report from dashboard"]},d=void 0,p={id:"pro/dashboards/report",title:"Report",description:"Learn how to create a report out of a dashboard in OpenBB Terminal Pro. Discover the power of static reports in PDF or PNG format with additional insights and how to export it.",source:"@site/content/pro/dashboards/report.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/report",permalink:"/pro/dashboards/report",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/report.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718799515e3,sidebarPosition:3,frontMatter:{title:"Report",sidebar_position:3,description:"Learn how to create a report out of a dashboard in OpenBB Terminal Pro. Discover the power of static reports in PDF or PNG format with additional insights and how to export it.",keywords:["Report creation","Export dashboard as report","Export report as PDF","Export report as PNG","Insights on report","Report from dashboard"]},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/pro/dashboards/templates"},next:{title:"Folders",permalink:"/pro/dashboards/folders"}},c={},l=[];function h(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"Report | OpenBB Terminal Pro Docs"}),"\n","\n",(0,o.jsx)(a.A,{youtubeLink:"https://www.youtube.com/embed/vPp0gglCYg0?si=ZC6WgowxnF-Rk2BX",videoLegend:"Short introduction to report"}),"\n",(0,o.jsx)(t.p,{children:"A report can be created out of a dashboard so that you have a static report of the interactive dashboard. This report can be a PDF or PNG format. This can be very powerful to record a moment in time, particularly when adding the text widget with additional insights from a user."}),"\n",(0,o.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"Report export",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1d1de065-469d-4f8d-b847-6ffc82cadf19"}),"\n",(0,o.jsx)(t.p,{children:"You can export a dashboard as a report through the bottom right plus icon on the working area or through the dashboard's settings on the sidebar."}),"\n",(0,o.jsx)("img",{className:"pro-border-gradient",width:"488",alt:"dash settings",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0cacf0bd-296b-45fa-954b-2d013f9f1694"}),"\n",(0,o.jsx)("img",{className:"pro-border-gradient",width:"488",alt:"export report",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/89460341-a907-4800-8a41-b9e909efebd4"})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var o=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(o.A,{children:(0,n.jsx)("title",{children:t})})}},69396:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(96540),n=r(23174),i=r(74848);function a(e){let{youtubeLink:t,videoLegend:r="Tutorial video"}=e;const[a,s]=(0,o.useState)(!0);return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,i.jsx)("p",{children:r}),(0,i.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,i.jsx)(n.Toggle,{isOn:a,handleChange:()=>s(!a)})})]}),a&&(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,r)=>{e.exports=r(49793)},49793:(e,t,r)=>{var o,n=(o=r(96540))&&"object"==typeof o&&"default"in o?o.default:o;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return n.createElement("label",{"data-testid":"Toggle-label",className:"switch"},n.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),n.createElement("span",{className:"slider round"}))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(96540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);