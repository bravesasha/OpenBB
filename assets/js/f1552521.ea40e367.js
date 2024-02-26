"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(35742);function l(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),l=n(88828);const r={title:"Toolkits",sidebar_position:1,description:"This page describes the toolkit extensios  available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},o=void 0,p={unversionedId:"platform/extensions/toolkit_extensions",id:"platform/extensions/toolkit_extensions",title:"Toolkits",description:"This page describes the toolkit extensios  available for the OpenBB Platform.",source:"@site/content/platform/extensions/toolkit_extensions.md",sourceDirName:"platform/extensions",slug:"/platform/extensions/toolkit_extensions",permalink:"/platform/extensions/toolkit_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/toolkit_extensions.md",tags:[],version:"current",lastUpdatedBy:"Michael Struwig",lastUpdatedAt:1708952582,formattedLastUpdatedAt:"Feb 26, 2024",sidebarPosition:1,frontMatter:{title:"Toolkits",sidebar_position:1,description:"This page describes the toolkit extensios  available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},sidebar:"tutorialSidebar",previous:{title:"Data Extensions",permalink:"/platform/extensions/data_extensions"},next:{title:"Overview",permalink:"/platform/usage/"}},s={},c=[{value:"Charting",id:"charting",level:2},{value:"Installation",id:"installation",level:3},{value:"PyWry dependency in Linux",id:"pywry-dependency-in-linux",level:3},{value:"Devtools",id:"devtools",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Econometrics",id:"econometrics",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Quantitative",id:"quantitative",level:2},{value:"Installation",id:"installation-3",level:3},{value:"Technical",id:"technical",level:2},{value:"Installation",id:"installation-4",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"Toolkits - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"OpenBB Toolkit Extensions expand the Platform with functions for manipulating data and preparing it for display. The Core Platform installation does not install any toolkit extensions. The table below is the current list of toolkit extensions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Extension Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Installation Command"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Core/Community"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Router Path"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-charting"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rest API charting service and Plotly library."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-charting"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-devtools"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Aggregates dependencies that facilitate a nice development experience for OpenBB."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-devtools"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-econometrics"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Econometrics models for the Python interface only."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-econometrics"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.econometrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-quantitative"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Functions for performing quantitative analysis."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-quantitative"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.quantitative")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-technical"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Functions for performing technical analysis."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-technical"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.technical")))),(0,i.kt)("p",null,"The sections below outline any specific installation considerations for the extension."),(0,i.kt)("h2",{id:"charting"},"Charting"),(0,i.kt)("p",null,"The OpenBB Charting Extension supplies charting infrastructure and services to the OpenBB Platform. Figure objects are served via REST API or Python Client.  It utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/pywry"},"PyWry")," for handling the display of interactive charts and tables in a separate window, with a Plotly library. The extension framework allows developers to easily insert other Python charting libraries into the router pipeline."),(0,i.kt)("p",null,"Functions with charting enabled return figures to a field (",(0,i.kt)("inlineCode",{parentName:"p"},"chart"),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBBject")," response object. They are displayed with the class method, ",(0,i.kt)("inlineCode",{parentName:"p"},"show()"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Additional Python libraries are installed with this extension: ",(0,i.kt)("inlineCode",{parentName:"p"},"aiohttp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nbformat"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pandas-ta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plotly"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pywry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reportlab"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scipy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"statsmodels"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"svglib"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-charting")," is in fact an ",(0,i.kt)("a",{parentName:"p",href:"/website/content/platform/development/developer-guidelines/obbject_extensions.md"},(0,i.kt)("inlineCode",{parentName:"a"},"OBBject")," extension")," which means you'll have the functionality it exposes on every command result.")),(0,i.kt)("p",null,"The following packages are dependencies of the ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-charting")," extension:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"plotly"),(0,i.kt)("li",{parentName:"ul"},"statsmodels"),(0,i.kt)("li",{parentName:"ul"},"reportlab"),(0,i.kt)("li",{parentName:"ul"},"pywry"),(0,i.kt)("li",{parentName:"ul"},"svglib"),(0,i.kt)("li",{parentName:"ul"},"nbformat"),(0,i.kt)("li",{parentName:"ul"},"pandas-ta")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the extension, run the following command in this folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-charting\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Find the latest version on ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/openbb-charting/"},"PyPI"),".")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/charting"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization.  This process can also be triggered manually with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\nopenbb.build()\n")),(0,i.kt)("p",null,"The Python interpreter may require a restart."),(0,i.kt)("h3",{id:"pywry-dependency-in-linux"},"PyWry dependency in Linux"),(0,i.kt)("p",null,"When using Linux distributions, the PyWry dependency requires certain dependencies to be installed first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Debian-based / Ubuntu / Mint:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install libwebkit2gtk-4.0-dev"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arch Linux / Manjaro:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo pacman -S webkit2gtk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fedora:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo dnf install gtk3-devel webkit2gtk3-devel")))),(0,i.kt)("p",null,"If Rust (Cargo) is required, install it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh\n")),(0,i.kt)("h2",{id:"devtools"},"Devtools"),(0,i.kt)("p",null,"This extension aggregates the dependencies that facilitate a nice development experience\nfor OpenBB. It does not contain any code itself, but rather pulls in the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bandit"),(0,i.kt)("li",{parentName:"ul"},"black"),(0,i.kt)("li",{parentName:"ul"},"ipykernel"),(0,i.kt)("li",{parentName:"ul"},"mypy"),(0,i.kt)("li",{parentName:"ul"},"poetry"),(0,i.kt)("li",{parentName:"ul"},"pre-commit"),(0,i.kt)("li",{parentName:"ul"},"pydocstyle"),(0,i.kt)("li",{parentName:"ul"},"pylint"),(0,i.kt)("li",{parentName:"ul"},"pytest"),(0,i.kt)("li",{parentName:"ul"},"pytest-cov"),(0,i.kt)("li",{parentName:"ul"},"ruff"),(0,i.kt)("li",{parentName:"ul"},"tox"),(0,i.kt)("li",{parentName:"ul"},"types-python-dateutil"),(0,i.kt)("li",{parentName:"ul"},"types-toml")),(0,i.kt)("h3",{id:"installation-1"},"Installation"),(0,i.kt)("p",null,"The extension is included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_install.py")," script."),(0,i.kt)("p",null,"Standalone installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-devtools\n")),(0,i.kt)("h2",{id:"econometrics"},"Econometrics"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-econometrics")," extension installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.econometrics"),") and additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels"),(0,i.kt)("li",{parentName:"ul"},"arch"),(0,i.kt)("li",{parentName:"ul"},"linearmodels")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Statsmodels requires a C compiler be present on the system. Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://cython.readthedocs.io/en/latest/src/quickstart/install.html"},"here")," for system-specific methods."),(0,i.kt)("p",{parentName:"admonition"},"This extension is not accessible via REST API because ",(0,i.kt)("inlineCode",{parentName:"p"},"statsmodels")," is not serializable.")),(0,i.kt)("h3",{id:"installation-2"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-econometrics\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/econometrics"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."),(0,i.kt)("h2",{id:"quantitative"},"Quantitative"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-quantitative")," extension installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.quantitative"),") and a few additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pandas-ta"),(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels")),(0,i.kt)("h3",{id:"installation-3"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-quantitative\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/quantitative"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."),(0,i.kt)("h2",{id:"technical"},"Technical"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-technical")," extension is for performing technical analysis on time series data. It installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.technical"),") and some additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pandas-ta"),(0,i.kt)("li",{parentName:"ul"},"scikit-learn"),(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels")),(0,i.kt)("h3",{id:"installation-4"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-technical\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/technical"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."))}u.isMDXComponent=!0}}]);