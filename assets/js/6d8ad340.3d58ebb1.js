"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(a),y=r,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=a(83117),r=(a(67294),a(3905));const s={title:"module lang::rascal::tests::basic::DynamicDispatch"},i=void 0,c={unversionedId:"Library/lang/rascal/tests/basic/DynamicDispatch",id:"Library/lang/rascal/tests/basic/DynamicDispatch",title:"module lang::rascal::tests::basic::DynamicDispatch",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/DynamicDispatch.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/DynamicDispatch",permalink:"/docs/Library/lang/rascal/tests/basic/DynamicDispatch",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/basic/DynamicDispatch.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::DynamicDispatch"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::Booleans",permalink:"/docs/Library/lang/rascal/tests/basic/Booleans"},next:{title:"module lang::rascal::tests::basic::Equality",permalink:"/docs/Library/lang/rascal/tests/basic/Equality"}},l={},o=[{value:"Usage",id:"usage",level:4},{value:"data D",id:"lang-rascal-tests-basic-DynamicDispatch-D",level:2},{value:"function foo",id:"lang-rascal-tests-basic-DynamicDispatch-foo",level:2},{value:"function dispatchOnRuntimeType",id:"lang-rascal-tests-basic-DynamicDispatch-dispatchOnRuntimeType",level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::DynamicDispatch;")),(0,r.kt)("h2",{id:"lang-rascal-tests-basic-DynamicDispatch-D"},"data D"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data D  \n     = d()\n     ;\n")),(0,r.kt)("h2",{id:"lang-rascal-tests-basic-DynamicDispatch-foo"},"function foo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool foo(d())")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default bool foo(value n)"))),(0,r.kt)("h2",{id:"lang-rascal-tests-basic-DynamicDispatch-dispatchOnRuntimeType"},"function dispatchOnRuntimeType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool dispatchOnRuntimeType()"))))}u.isMDXComponent=!0}}]);