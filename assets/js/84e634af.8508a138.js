"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[49125],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>d});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},s=Object.keys(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var c=n.createContext({}),r=function(t){var a=n.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},u=function(t){var a=r(t.components);return n.createElement(c.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,s=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=r(e),d=l,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return e?n.createElement(k,o(o({ref:a},u),{},{components:e})):n.createElement(k,o({ref:a},u))}));function d(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var s=e.length,o=new Array(s);o[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var r=2;r<s;r++)o[r]=e[r];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},14830:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var n=e(87462),l=(e(67294),e(3905));const s={title:"module lang::rascal::tests::basic::Booleans"},o=void 0,i={unversionedId:"Library/lang/rascal/tests/basic/Booleans",id:"Library/lang/rascal/tests/basic/Booleans",title:"module lang::rascal::tests::basic::Booleans",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Booleans.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Booleans",permalink:"/docs/Library/lang/rascal/tests/basic/Booleans",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/basic/Booleans.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Booleans"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::basic",permalink:"/docs/Library/lang/rascal/tests/basic/"},next:{title:"module lang::rascal::tests::basic::DynamicDispatch",permalink:"/docs/Library/lang/rascal/tests/basic/DynamicDispatch"}},c={},r=[{value:"Usage",id:"usage",level:4},{value:"function sanity",id:"lang-rascal-tests-basic-Booleans-sanity",level:2},{value:"function or",id:"lang-rascal-tests-basic-Booleans-or",level:2},{value:"function and",id:"lang-rascal-tests-basic-Booleans-and",level:2},{value:"function not1",id:"lang-rascal-tests-basic-Booleans-not1",level:2},{value:"function not2",id:"lang-rascal-tests-basic-Booleans-not2",level:2},{value:"function equiv",id:"lang-rascal-tests-basic-Booleans-equiv",level:2},{value:"function impl",id:"lang-rascal-tests-basic-Booleans-impl",level:2},{value:"function assignAnd",id:"lang-rascal-tests-basic-Booleans-assignAnd",level:2},{value:"function assignOr",id:"lang-rascal-tests-basic-Booleans-assignOr",level:2},{value:"function tstArbBool",id:"lang-rascal-tests-basic-Booleans-tstArbBool",level:2},{value:"function fromString1",id:"lang-rascal-tests-basic-Booleans-fromString1",level:2},{value:"function fromString2",id:"lang-rascal-tests-basic-Booleans-fromString2",level:2},{value:"function tstToInt",id:"lang-rascal-tests-basic-Booleans-tstToInt",level:2},{value:"function tstToReal",id:"lang-rascal-tests-basic-Booleans-tstToReal",level:2},{value:"function tstToString",id:"lang-rascal-tests-basic-Booleans-tstToString",level:2},{value:"function shortCircuiting",id:"lang-rascal-tests-basic-Booleans-shortCircuiting",level:2},{value:"function matchAnonymous",id:"lang-rascal-tests-basic-Booleans-matchAnonymous",level:2},{value:"function matchAnonymousReturn",id:"lang-rascal-tests-basic-Booleans-matchAnonymousReturn",level:2},{value:"function matchTypedAnonymous",id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymous",level:2},{value:"function matchTypedAnonymousReturn",id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousReturn",level:2},{value:"function matchVar",id:"lang-rascal-tests-basic-Booleans-matchVar",level:2},{value:"function matchVarReturn",id:"lang-rascal-tests-basic-Booleans-matchVarReturn",level:2},{value:"function matchTypedVar",id:"lang-rascal-tests-basic-Booleans-matchTypedVar",level:2},{value:"function matchTypedVarReturn",id:"lang-rascal-tests-basic-Booleans-matchTypedVarReturn",level:2},{value:"function matchAnonymousListVar1",id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar1",level:2},{value:"function matchAnonymousListVar1Return",id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar1Return",level:2},{value:"function matchAnonymousListVar2",id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar2",level:2},{value:"function matchAnonymousListVar2Return",id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar2Return",level:2},{value:"function matchTypedAnonymousListVar",id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousListVar",level:2},{value:"function matchTypedAnonymousListVarReturn",id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousListVarReturn",level:2},{value:"function matchListVar1",id:"lang-rascal-tests-basic-Booleans-matchListVar1",level:2},{value:"function matchListVar1Return",id:"lang-rascal-tests-basic-Booleans-matchListVar1Return",level:2},{value:"function matchListVar2",id:"lang-rascal-tests-basic-Booleans-matchListVar2",level:2},{value:"function matchListVar2Return",id:"lang-rascal-tests-basic-Booleans-matchListVar2Return",level:2},{value:"function matchTypedListVar",id:"lang-rascal-tests-basic-Booleans-matchTypedListVar",level:2},{value:"function matchTypedListVarReturn",id:"lang-rascal-tests-basic-Booleans-matchTypedListVarReturn",level:2},{value:"function matchTypedVarAndTrue",id:"lang-rascal-tests-basic-Booleans-matchTypedVarAndTrue",level:2},{value:"function matchTypedVarAndFalse",id:"lang-rascal-tests-basic-Booleans-matchTypedVarAndFalse",level:2},{value:"function matchTypedListVarAnd",id:"lang-rascal-tests-basic-Booleans-matchTypedListVarAnd",level:2},{value:"function matchTypedListVarAndFalse",id:"lang-rascal-tests-basic-Booleans-matchTypedListVarAndFalse",level:2},{value:"function compositeAnd",id:"lang-rascal-tests-basic-Booleans-compositeAnd",level:2},{value:"function compositeAndFalse",id:"lang-rascal-tests-basic-Booleans-compositeAndFalse",level:2},{value:"function compositeAndCnt",id:"lang-rascal-tests-basic-Booleans-compositeAndCnt",level:2},{value:"function compositeAndCommaCnt",id:"lang-rascal-tests-basic-Booleans-compositeAndCommaCnt",level:2},{value:"function compositeAndBTLast",id:"lang-rascal-tests-basic-Booleans-compositeAndBTLast",level:2},{value:"function compositeAndCntBTLast",id:"lang-rascal-tests-basic-Booleans-compositeAndCntBTLast",level:2},{value:"function compositeAndBothBT",id:"lang-rascal-tests-basic-Booleans-compositeAndBothBT",level:2},{value:"function compositeAndBothBTCnt",id:"lang-rascal-tests-basic-Booleans-compositeAndBothBTCnt",level:2},{value:"function compositeOrCntBTLast",id:"lang-rascal-tests-basic-Booleans-compositeOrCntBTLast",level:2},{value:"function compositeOrCntBTFirst",id:"lang-rascal-tests-basic-Booleans-compositeOrCntBTFirst",level:2},{value:"function compositeAndOrCnt",id:"lang-rascal-tests-basic-Booleans-compositeAndOrCnt",level:2},{value:"function compositeImplTrue",id:"lang-rascal-tests-basic-Booleans-compositeImplTrue",level:2},{value:"function compositeImplFalse",id:"lang-rascal-tests-basic-Booleans-compositeImplFalse",level:2},{value:"function compositeImplBTLast1",id:"lang-rascal-tests-basic-Booleans-compositeImplBTLast1",level:2},{value:"function compositeImplBTLast2",id:"lang-rascal-tests-basic-Booleans-compositeImplBTLast2",level:2},{value:"function compositeImplVarBothBT",id:"lang-rascal-tests-basic-Booleans-compositeImplVarBothBT",level:2},{value:"function compositeImplCnt",id:"lang-rascal-tests-basic-Booleans-compositeImplCnt",level:2},{value:"function compositeImplCntBTLast1",id:"lang-rascal-tests-basic-Booleans-compositeImplCntBTLast1",level:2},{value:"function compositeImplCntBTLast2",id:"lang-rascal-tests-basic-Booleans-compositeImplCntBTLast2",level:2},{value:"function compositeImplReturnBothBT",id:"lang-rascal-tests-basic-Booleans-compositeImplReturnBothBT",level:2},{value:"function compositeImplBothBTCnt",id:"lang-rascal-tests-basic-Booleans-compositeImplBothBTCnt",level:2},{value:"function compositeEquivTrue",id:"lang-rascal-tests-basic-Booleans-compositeEquivTrue",level:2},{value:"function compositeEquivFalse",id:"lang-rascal-tests-basic-Booleans-compositeEquivFalse",level:2},{value:"function compositeEquivBTLast1",id:"lang-rascal-tests-basic-Booleans-compositeEquivBTLast1",level:2},{value:"function compositeEquivBTLast2",id:"lang-rascal-tests-basic-Booleans-compositeEquivBTLast2",level:2},{value:"function compositeEquivVarBothBT",id:"lang-rascal-tests-basic-Booleans-compositeEquivVarBothBT",level:2},{value:"function compositeEquivCnt",id:"lang-rascal-tests-basic-Booleans-compositeEquivCnt",level:2},{value:"function compositeEquivCntBTLast1",id:"lang-rascal-tests-basic-Booleans-compositeEquivCntBTLast1",level:2},{value:"function compositeEquivCntBTLast2",id:"lang-rascal-tests-basic-Booleans-compositeEquivCntBTLast2",level:2},{value:"function compositeEquivReturnBothBT",id:"lang-rascal-tests-basic-Booleans-compositeEquivReturnBothBT",level:2},{value:"function compositeEquivBothBTCnt",id:"lang-rascal-tests-basic-Booleans-compositeEquivBothBTCnt",level:2},{value:"data AnotherAndData",id:"lang-rascal-tests-basic-Booleans-AnotherAndData",level:2},{value:"function anotherAnd",id:"lang-rascal-tests-basic-Booleans-anotherAnd",level:2},{value:"function nestedOr",id:"lang-rascal-tests-basic-Booleans-nestedOr",level:2}],u={toc:r};function m(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Booleans;")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-sanity"},"function sanity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sanity()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-or"},"function or"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool or(bool b)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-and"},"function and"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool and(bool b)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-not1"},"function not1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool not1(bool b)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-not2"},"function not2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool not2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-equiv"},"function equiv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equiv(bool b1, bool b2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-impl"},"function impl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool impl(bool b1, bool b2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-assignAnd"},"function assignAnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignAnd(bool b1, bool b2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-assignOr"},"function assignOr"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignOr(bool b1, bool b2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-tstArbBool"},"function tstArbBool"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstArbBool()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-fromString1"},"function fromString1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool fromString1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-fromString2"},"function fromString2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool fromString2(str s)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-tstToInt"},"function tstToInt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstToInt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-tstToReal"},"function tstToReal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstToReal()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-tstToString"},"function tstToString"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstToString()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-shortCircuiting"},"function shortCircuiting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool shortCircuiting()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymous"},"function matchAnonymous"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymous()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymousReturn"},"function matchAnonymousReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymousReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymous"},"function matchTypedAnonymous"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedAnonymous()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousReturn"},"function matchTypedAnonymousReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedAnonymousReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchVar"},"function matchVar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchVar()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchVarReturn"},"function matchVarReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchVarReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedVar"},"function matchTypedVar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedVar()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedVarReturn"},"function matchTypedVarReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedVarReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar1"},"function matchAnonymousListVar1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymousListVar1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar1Return"},"function matchAnonymousListVar1Return"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymousListVar1Return()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar2"},"function matchAnonymousListVar2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymousListVar2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchAnonymousListVar2Return"},"function matchAnonymousListVar2Return"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchAnonymousListVar2Return()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousListVar"},"function matchTypedAnonymousListVar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedAnonymousListVar()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedAnonymousListVarReturn"},"function matchTypedAnonymousListVarReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedAnonymousListVarReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchListVar1"},"function matchListVar1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchListVar1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchListVar1Return"},"function matchListVar1Return"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchListVar1Return()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchListVar2"},"function matchListVar2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchListVar2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchListVar2Return"},"function matchListVar2Return"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchListVar2Return()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedListVar"},"function matchTypedListVar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedListVar()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedListVarReturn"},"function matchTypedListVarReturn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedListVarReturn()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedVarAndTrue"},"function matchTypedVarAndTrue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedVarAndTrue()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedVarAndFalse"},"function matchTypedVarAndFalse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedVarAndFalse()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedListVarAnd"},"function matchTypedListVarAnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedListVarAnd()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-matchTypedListVarAndFalse"},"function matchTypedListVarAndFalse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool matchTypedListVarAndFalse()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAnd"},"function compositeAnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAnd()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndFalse"},"function compositeAndFalse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndFalse()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndCnt"},"function compositeAndCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndCommaCnt"},"function compositeAndCommaCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndCommaCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndBTLast"},"function compositeAndBTLast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndBTLast()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndCntBTLast"},"function compositeAndCntBTLast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndCntBTLast()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndBothBT"},"function compositeAndBothBT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndBothBT()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndBothBTCnt"},"function compositeAndBothBTCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndBothBTCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeOrCntBTLast"},"function compositeOrCntBTLast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeOrCntBTLast()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeOrCntBTFirst"},"function compositeOrCntBTFirst"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeOrCntBTFirst()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeAndOrCnt"},"function compositeAndOrCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeAndOrCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplTrue"},"function compositeImplTrue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplTrue()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplFalse"},"function compositeImplFalse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplFalse()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplBTLast1"},"function compositeImplBTLast1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplBTLast1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplBTLast2"},"function compositeImplBTLast2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplBTLast2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplVarBothBT"},"function compositeImplVarBothBT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplVarBothBT()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplCnt"},"function compositeImplCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplCntBTLast1"},"function compositeImplCntBTLast1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplCntBTLast1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplCntBTLast2"},"function compositeImplCntBTLast2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplCntBTLast2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplReturnBothBT"},"function compositeImplReturnBothBT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplReturnBothBT()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeImplBothBTCnt"},"function compositeImplBothBTCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeImplBothBTCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivTrue"},"function compositeEquivTrue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivTrue()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivFalse"},"function compositeEquivFalse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivFalse()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivBTLast1"},"function compositeEquivBTLast1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivBTLast1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivBTLast2"},"function compositeEquivBTLast2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivBTLast2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivVarBothBT"},"function compositeEquivVarBothBT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivVarBothBT()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivCnt"},"function compositeEquivCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivCntBTLast1"},"function compositeEquivCntBTLast1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivCntBTLast1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivCntBTLast2"},"function compositeEquivCntBTLast2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivCntBTLast2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivReturnBothBT"},"function compositeEquivReturnBothBT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivReturnBothBT()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-compositeEquivBothBTCnt"},"function compositeEquivBothBTCnt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool compositeEquivBothBTCnt()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-AnotherAndData"},"data AnotherAndData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data AnotherAndData  \n     = a()\n     ;\n")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-anotherAnd"},"function anotherAnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool anotherAnd()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Booleans-nestedOr"},"function nestedOr"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool nestedOr()"))))}m.isMDXComponent=!0}}]);