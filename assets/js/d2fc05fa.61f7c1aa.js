"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,d=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const l={title:"module lang::rascal::tests::concrete::Parsing"},i=void 0,s={unversionedId:"Library/lang/rascal/tests/concrete/Parsing",id:"Library/lang/rascal/tests/concrete/Parsing",title:"module lang::rascal::tests::concrete::Parsing",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/concrete/Parsing.md",sourceDirName:"Library/lang/rascal/tests/concrete",slug:"/Library/lang/rascal/tests/concrete/Parsing",permalink:"/docs/Library/lang/rascal/tests/concrete/Parsing",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/concrete/Parsing.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::concrete::Parsing"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::concrete::ParameterizedNonTerminals",permalink:"/docs/Library/lang/rascal/tests/concrete/ParameterizedNonTerminals"},next:{title:"module lang::rascal::tests::concrete::Patterns1",permalink:"/docs/Library/lang/rascal/tests/concrete/Patterns1"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function strExpr",id:"lang-rascal-tests-concrete-Parsing-strExpr",level:2},{value:"function allowAmb",id:"lang-rascal-tests-concrete-Parsing-allowAmb",level:2},{value:"function disallowAmb",id:"lang-rascal-tests-concrete-Parsing-disallowAmb",level:2},{value:"function disallowAmb2",id:"lang-rascal-tests-concrete-Parsing-disallowAmb2",level:2},{value:"function locExpr",id:"lang-rascal-tests-concrete-Parsing-locExpr",level:2},{value:"function parsingWithADynamicGrammar",id:"lang-rascal-tests-concrete-Parsing-parsingWithADynamicGrammar",level:2},{value:"function parsingWithAGrammarFromADifferentModule",id:"lang-rascal-tests-concrete-Parsing-parsingWithAGrammarFromADifferentModule",level:2},{value:"function parsingWithAParameterGrammar",id:"lang-rascal-tests-concrete-Parsing-parsingWithAParameterGrammar",level:2},{value:"function parsingWithARemoteParameterGrammar",id:"lang-rascal-tests-concrete-Parsing-parsingWithARemoteParameterGrammar",level:2},{value:"function parsingWithAManualGrammar",id:"lang-rascal-tests-concrete-Parsing-parsingWithAManualGrammar",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::concrete::Parsing;")),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-strExpr"},"function strExpr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool strExpr()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-allowAmb"},"function allowAmb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool allowAmb()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-disallowAmb"},"function disallowAmb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool disallowAmb()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-disallowAmb2"},"function disallowAmb2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool disallowAmb2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-locExpr"},"function locExpr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool locExpr()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-parsingWithADynamicGrammar"},"function parsingWithADynamicGrammar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parsingWithADynamicGrammar()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-parsingWithAGrammarFromADifferentModule"},"function parsingWithAGrammarFromADifferentModule"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parsingWithAGrammarFromADifferentModule()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-parsingWithAParameterGrammar"},"function parsingWithAParameterGrammar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parsingWithAParameterGrammar()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-parsingWithARemoteParameterGrammar"},"function parsingWithARemoteParameterGrammar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parsingWithARemoteParameterGrammar()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-concrete-Parsing-parsingWithAManualGrammar"},"function parsingWithAManualGrammar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parsingWithAManualGrammar()"))))}u.isMDXComponent=!0}}]);