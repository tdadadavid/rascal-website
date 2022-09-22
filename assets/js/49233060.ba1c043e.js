"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[86197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,b=m["".concat(i,".").concat(y)]||m[y]||p[y]||r;return n?s.createElement(b,l(l({ref:t},u),{},{components:n})):s.createElement(b,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(83117),a=(n(67294),n(3905));const r={title:"module lang::rascal::syntax::tests::KnownIssues"},l=void 0,o={unversionedId:"Library/lang/rascal/syntax/tests/KnownIssues",id:"Library/lang/rascal/syntax/tests/KnownIssues",title:"module lang::rascal::\\syntax::tests::KnownIssues",description:"Usage",source:"@site/docs/Library/lang/rascal/syntax/tests/KnownIssues.md",sourceDirName:"Library/lang/rascal/syntax/tests",slug:"/Library/lang/rascal/syntax/tests/KnownIssues",permalink:"/docs/Library/lang/rascal/syntax/tests/KnownIssues",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/syntax/tests/KnownIssues.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::\\syntax::tests::KnownIssues"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::\\syntax::tests::ImplodeTests",permalink:"/docs/Library/lang/rascal/syntax/tests/ImplodeTests"},next:{title:"module lang::rascal::\\syntax::tests::ParsingRegressionTests",permalink:"/docs/Library/lang/rascal/syntax/tests/ParsingRegressionTests"}},i={},c=[{value:"Usage",id:"usage",level:4},{value:"function isAmb",id:"lang-rascal-syntax-tests-KnownIssues-isAmb",level:2},{value:"function literalAmb",id:"lang-rascal-syntax-tests-KnownIssues-literalAmb",level:2},{value:"function basicAmb",id:"lang-rascal-syntax-tests-KnownIssues-basicAmb",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::\\syntax::tests::KnownIssues;")),(0,a.kt)("p",null,"This module documents known issues in Rascal that still need solving.\nPerhaps they are hard to solve, but one day the inversion of these tests will\nend up in SolvedIssues"),(0,a.kt)("h2",{id:"lang-rascal-\\syntax-tests-KnownIssues-isAmb"},"function isAmb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool isAmb(Tree t)"))),(0,a.kt)("h2",{id:"lang-rascal-\\syntax-tests-KnownIssues-literalAmb"},"function literalAmb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool literalAmb()"))),(0,a.kt)("h2",{id:"lang-rascal-\\syntax-tests-KnownIssues-basicAmb"},"function basicAmb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool basicAmb()"))))}p.isMDXComponent=!0}}]);