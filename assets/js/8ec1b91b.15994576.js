"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},82087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"How To Add OBBject Extensions",sidebar_position:8,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform","extensions","obbject extension","accessor","decorator","how-to","contributing"]},l=void 0,s={unversionedId:"platform/development/how-to/add_obbject_extension",id:"platform/development/how-to/add_obbject_extension",title:"How To Add OBBject Extensions",description:"This page provides information about how to write extensions for the OpenBB OBBject class.",source:"@site/content/platform/development/how-to/add_obbject_extension.md",sourceDirName:"platform/development/how-to",slug:"/platform/development/how-to/add_obbject_extension",permalink:"/platform/development/how-to/add_obbject_extension",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/how-to/add_obbject_extension.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713966587,formattedLastUpdatedAt:"Apr 24, 2024",sidebarPosition:8,frontMatter:{title:"How To Add OBBject Extensions",sidebar_position:8,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform","extensions","obbject extension","accessor","decorator","how-to","contributing"]},sidebar:"tutorialSidebar",previous:{title:"How To Add Toolkit Extensions",permalink:"/platform/development/how-to/add_toolkit_extension"},next:{title:"Expectations For Contributors",permalink:"/platform/development/contributing/"}},p={},c=[{value:"Folder structure",id:"folder-structure",level:3},{value:"Writing the extension",id:"writing-the-extension",level:3},{value:"Entry Point",id:"entry-point",level:3},{value:"Using the extension",id:"using-the-extension",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"How To Add OBBject Extensions - How-To - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"OpenBB provides some basic methods for interacting with common data structures that will be seen in the results attribute of the ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/obbject"},(0,r.kt)("inlineCode",{parentName:"a"},"OBBject")),"\nIf you are working with custom data, or adding new endpoints, it is possible that you will want to have your own methods for interacting with the data, and the OpenBB Platform provides a way to extend the OBBject class."),(0,r.kt)("p",null,"The architecture for extensions was designed to be similar to extensions and accessors for Pandas, and relies on plugins through the Poetry dependency management package."),(0,r.kt)("p",null,"This page will go through the steps for developing a simple extension for the OBBject class."),(0,r.kt)("h3",{id:"folder-structure"},"Folder structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"example\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 openbb_example\n\u2502   \u2514\u2500\u2500 __init__.py\n\u251c\u2500\u2500 poetry.lock\n\u2514\u2500\u2500 pyproject.toml\n")),(0,r.kt)("h3",{id:"writing-the-extension"},"Writing the extension"),(0,r.kt)("p",null,"In this example the extension code all lives inside ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__.py"),"."),(0,r.kt)("p",null,"First we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Extension")," class instance to tell ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-core")," our extension name and any required credentials to be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.user.credentials"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Credentials are required only if authorization is required for data or services used by this extension.\nIt could also be the connection to a database, or any other information that needs to be passed to the extension.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_core.app.model.extension import Extension\n\next = Extension(name="example", credentials=["some_api_key"])\n')),(0,r.kt)("p",null,"Then we define the extension's functionality. The decorator, ",(0,r.kt)("inlineCode",{parentName:"p"},"@ext.obbject_accessor"),", registers an accessor in each ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject")," that is returned when a command is executed. This accessor is just a namespace that will contain the methods defined in the decorated class."),(0,r.kt)("p",null,"For this example, we just add a method to say hi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@ext.obbject_accessor\nclass Example:\n    def __init__(self, obbject):\n        self._obbject = obbject\n\n    def hello(self):\n        api_key = self._obbject._user_settings.credentials.some_api_key.get_secret_value()\n        print(f"Hello, this is my credential: {api_key}!")\n')),(0,r.kt)("h3",{id:"entry-point"},"Entry Point"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file will specify the usual setup and dependency information. Additionally, we need to include the following block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[tool.poetry.plugins."openbb_obbject_extension"]\nexample = "openbb_example:ext"\n')),(0,r.kt)("p",null,"With this in the file, we can install the extension by running ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry install")," from the extension folder."),(0,r.kt)("h3",{id:"using-the-extension"},"Using the extension"),(0,r.kt)("p",null,"Now that the extension is installed and built, we can use it!  Because we are extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject"),", this will be available on any function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'>>> from openbb import obb\n>>> obb.user.credentials.some_api_key = "test"\n>>> obbject = obb.equity.price.historical("AAPL")\n>>> obbject.example.hello()\nHello, this is my credential: test!\n')),(0,r.kt)("p",null,"In this example, we have added obbject.example as the extension and can use the .hello() functionality right from our OBBject."))}m.isMDXComponent=!0}}]);