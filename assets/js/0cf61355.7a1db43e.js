"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[54241],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),c=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(f,l(l({ref:e},u),{},{components:r})):n.createElement(f,l({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2509:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const s={title:"module lang::rascal::tests::imports::C2"},l=void 0,i={unversionedId:"Library/lang/rascal/tests/imports/C2",id:"Library/lang/rascal/tests/imports/C2",title:"module lang::rascal::tests::imports::C2",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/imports/C2.md",sourceDirName:"Library/lang/rascal/tests/imports",slug:"/Library/lang/rascal/tests/imports/C2",permalink:"/docs/Library/lang/rascal/tests/imports/C2",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/imports/C2.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::imports::C2"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::imports::C1",permalink:"/docs/Library/lang/rascal/tests/imports/C1"},next:{title:"module lang::rascal::tests::imports::CyclicImports1",permalink:"/docs/Library/lang/rascal/tests/imports/CyclicImports1"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"data D",id:"lang-rascal-tests-imports-C2-D",level:2},{value:"alias C2Alias",id:"lang-rascal-tests-imports-C2-C2Alias",level:2},{value:"function isDstr",id:"lang-rascal-tests-imports-C2-isDstr",level:2},{value:"function C2func",id:"lang-rascal-tests-imports-C2-C2func",level:2},{value:"function C2function",id:"lang-rascal-tests-imports-C2-C2function",level:2},{value:"function C2testFunction",id:"lang-rascal-tests-imports-C2-C2testFunction",level:2}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::imports::C2;")),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-D"},"data D"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data D  \n     = d(str s)\n     ;\n")),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-C2Alias"},"alias C2Alias"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-isDstr"},"function isDstr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool isDstr(d(str _))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default bool isDstr(D _)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-C2func"},"function C2func"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C2Alias C2func(C1Alias i)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-C2function"},"function C2function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int C2function()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C2-C2testFunction"},"function C2testFunction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int C2testFunction(int () f = C1function)"))))}p.isMDXComponent=!0}}]);