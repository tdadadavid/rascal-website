"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[88344],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),o=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,c=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=o(n),g=l,h=d["".concat(i,".").concat(g)]||d[g]||p[g]||c;return n?a.createElement(h,r(r({ref:e},u),{},{components:n})):a.createElement(h,r({ref:e},u))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=n.length,r=new Array(c);r[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,r[1]=s;for(var o=2;o<c;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37712:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const c={title:"module lang::rascal::tests::concrete::Matching"},r=void 0,s={unversionedId:"Library/lang/rascal/tests/concrete/Matching",id:"Library/lang/rascal/tests/concrete/Matching",title:"module lang::rascal::tests::concrete::Matching",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/concrete/Matching.md",sourceDirName:"Library/lang/rascal/tests/concrete",slug:"/Library/lang/rascal/tests/concrete/Matching",permalink:"/docs/Library/lang/rascal/tests/concrete/Matching",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/concrete/Matching.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::concrete::Matching"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::concrete::Locations",permalink:"/docs/Library/lang/rascal/tests/concrete/Locations"},next:{title:"module lang::rascal::tests::concrete::OtherSyntax",permalink:"/docs/Library/lang/rascal/tests/concrete/OtherSyntax"}},i={},o=[{value:"Usage",id:"usage",level:4},{value:"function f",id:"lang-rascal-tests-concrete-Matching-f",level:2},{value:"function plusToStar",id:"lang-rascal-tests-concrete-Matching-plusToStar",level:2},{value:"function plusToStarIndirect",id:"lang-rascal-tests-concrete-Matching-plusToStarIndirect",level:2},{value:"function testIs",id:"lang-rascal-tests-concrete-Matching-testIs",level:2},{value:"function testAs",id:"lang-rascal-tests-concrete-Matching-testAs",level:2},{value:"function testMatchC",id:"lang-rascal-tests-concrete-Matching-testMatchC",level:2},{value:"function testFieldSelectC",id:"lang-rascal-tests-concrete-Matching-testFieldSelectC",level:2},{value:"function testFieldSelectC2",id:"lang-rascal-tests-concrete-Matching-testFieldSelectC2",level:2},{value:"function testConcreteListC1",id:"lang-rascal-tests-concrete-Matching-testConcreteListC1",level:2},{value:"function testConcreteListC2",id:"lang-rascal-tests-concrete-Matching-testConcreteListC2",level:2},{value:"function testConcreteListD1",id:"lang-rascal-tests-concrete-Matching-testConcreteListD1",level:2},{value:"function testConcreteListD2",id:"lang-rascal-tests-concrete-Matching-testConcreteListD2",level:2},{value:"function dispatch",id:"lang-rascal-tests-concrete-Matching-dispatch",level:2},{value:"function dispatchTest",id:"lang-rascal-tests-concrete-Matching-dispatchTest",level:2}],u={toc:o};function p(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::concrete::Matching;")),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-f"},"function f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'int f({A ","}* l)'))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-plusToStar"},"function plusToStar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool plusToStar()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-plusToStarIndirect"},"function plusToStarIndirect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool plusToStarIndirect()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testIs"},"function testIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testIs()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testAs"},"function testAs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testAs()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testMatchC"},"function testMatchC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testMatchC()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testFieldSelectC"},"function testFieldSelectC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testFieldSelectC()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testFieldSelectC2"},"function testFieldSelectC2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testFieldSelectC2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testConcreteListC1"},"function testConcreteListC1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testConcreteListC1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testConcreteListC2"},"function testConcreteListC2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testConcreteListC2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testConcreteListD1"},"function testConcreteListD1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testConcreteListD1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-testConcreteListD2"},"function testConcreteListD2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool testConcreteListD2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-dispatch"},"function dispatch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool dispatch(e(D _))")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool dispatch(d())"))),(0,l.kt)("h2",{id:"lang-rascal-tests-concrete-Matching-dispatchTest"},"function dispatchTest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool dispatchTest()"))))}p.isMDXComponent=!0}}]);