"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},78361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Tests",sidebar_position:6,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},s=void 0,l={unversionedId:"platform/development/tests",id:"platform/development/tests",title:"Tests",description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",source:"@site/content/platform/development/tests.md",sourceDirName:"platform/development",slug:"/platform/development/tests",permalink:"/platform/development/tests",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/tests.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1712323447,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:6,frontMatter:{title:"Tests",sidebar_position:6,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/platform/development/contributing/github"},next:{title:"Dependency Management",permalink:"/platform/development/dependency_management"}},p={},u=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"Import time",id:"import-time",level:2},{value:"Known caveats",id:"known-caveats",level:2}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Tests - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"We are strong believers in the Quality Assurance (QA) process and we want to make sure that all the extensions that are added to the OpenBB Platform are of high quality. To ensure this, we have a set of QA tools that you can use to test your work."),(0,r.kt)("p",null,"Primarily, we have tools that semi-automate the creation of unit and integration tests."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The QA tools are still in development and we are constantly improving them.")),(0,r.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," comes equipped with a ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," method that will ensure it is implemented correctly, that it is returning the expected data, that all types are correct, and that the data is valid."),(0,r.kt)("p",null,"To create unit tests for your Fetchers, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/providers/tests/utils/unit_tests_generator.py\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run this file from the root of the repository, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," folder must exist, in order to generate the tests.")),(0,r.kt)("p",null,"The automatic unit test generation will add unit tests for all the fetchers available in a given provider."),(0,r.kt)("p",null,"To record the unit tests, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pytest <path_to_the_unit_test_file> --record=all\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sometimes manual intervention is needed. For example, adjusting out-of-top level imports or adding specific arguments for a given fetcher.")),(0,r.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,r.kt)("p",null,"The integration tests are a bit more complex than the unit tests, as we want to test both the Python interface and the API interface. For this, we have two scripts that will help you generate the integration tests."),(0,r.kt)("p",null,"To generate the integration tests for the Python interface, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/extensions/tests/utils/integration_tests_generator.py\n")),(0,r.kt)("p",null,"To generate the integration tests for the API interface, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/extensions/tests/utils/integration_tests_api_generator.py\n")),(0,r.kt)("p",null,"When testing the API interface, you'll need to run the OpenBB Platform locally before running the tests. To do so, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n")),(0,r.kt)("p",null,"These automated tests are a great way to reduce the amount of code you need to write, but they are not a replacement for manual testing and might require tweaking. That's why we have unit tests that test the generated integration tests to ensure they cover all providers and parameters."),(0,r.kt)("p",null,"To run the tests we can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests only:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pytest openbb_platform -m "not integration"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integration tests only:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pytest openbb_platform -m integration\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both integration and unit tests:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pytest openbb_platform\n")),(0,r.kt)("h2",{id:"import-time"},"Import time"),(0,r.kt)("p",null,"We aim to have a short import time for the package. To measure that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"tuna"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/tuna/"},"https://pypi.org/project/tuna/"))),(0,r.kt)("p",null,"To visualize the import time breakdown by module and find potential bottlenecks, run the\nfollowing commands from ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb_platform")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install tuna\npython -X importtime openbb/__init__.py 2> import.log\ntuna import.log\n")),(0,r.kt)("h2",{id:"known-caveats"},"Known caveats"),(0,r.kt)("p",null,"When using the OpenBB QA Framework it is important to be aware of the following caveats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The tests are semi-automated and might require manual intervention. For example, adjusting out-of-top level imports or changing specific arguments for a given payload.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The integration tests are more complex and if your newly added provider integration is already covered by the\nintegration tests from previous commands or providers, you will need to manually inject the payload for the new\nprovider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the integration test parametrized payload, the first item is always the set of standard parameters. Every\nconsecutive item is a set of parameters for a specific provider with the standard parameters included.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The integration tests require you to be explicit, by using all of the standard parameters and provider-specific\nparameters in the payload. If you want to exclude a parameter, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," as its value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The integration tests require you to be explicit by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," parameter in provider-specific\npayloads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When recording unit tests, you might run into issues with the cache that is tied to your specific provider and present\non your local machine. You will know that this is the case if your tests pass locally, but fail on the CI. To fix this,\nyou can delete the cache file from your local machine and re-record the tests."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"> Note that the cache is likely located here:\n> Windows: `C:\\Users\\user\\AppData\\Local\\`\n> Linux: `/home/user/.cache/`\n> Mac: `/Users/user/Library/Caches`\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some providers (we are aware only of YFinance so far) do an additional request when used from the US region. As our CI\nis running from the US region, this might cause the tests to fail. A workaround for this is to use a VPN to record the\ntests from a different region."))))}d.isMDXComponent=!0}}]);