"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93731],{3905:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>d});var r=e(67294);function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function n(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function c(a,t){if(null==a)return{};var e,r,l=function(a,t){if(null==a)return{};var e,r,l={},n=Object.keys(a);for(r=0;r<n.length;r++)e=n[r],t.indexOf(e)>=0||(l[e]=a[e]);return l}(a,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(r=0;r<n.length;r++)e=n[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(l[e]=a[e])}return l}var m=r.createContext({}),i=function(a){var t=r.useContext(m),e=t;return a&&(e="function"==typeof a?a(t):s(s({},t),a)),e},o=function(a){var t=i(a.components);return r.createElement(m.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(a,t){var e=a.components,l=a.mdxType,n=a.originalType,m=a.parentName,o=c(a,["components","mdxType","originalType","parentName"]),g=i(e),d=l,p=g["".concat(m,".").concat(d)]||g[d]||u[d]||n;return e?r.createElement(p,s(s({ref:t},o),{},{components:e})):r.createElement(p,s({ref:t},o))}));function d(a,t){var e=arguments,l=t&&t.mdxType;if("string"==typeof a||l){var n=e.length,s=new Array(n);s[0]=g;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=a,c.mdxType="string"==typeof a?a:l,s[1]=c;for(var i=2;i<n;i++)s[i]=e[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},90207:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var r=e(83117),l=(e(67294),e(3905));const n={title:"module lang::rascal::grammar::tests::RascalGrammar"},s=void 0,c={unversionedId:"Library/lang/rascal/grammar/tests/RascalGrammar",id:"Library/lang/rascal/grammar/tests/RascalGrammar",title:"module lang::rascal::grammar::tests::RascalGrammar",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/tests/RascalGrammar.md",sourceDirName:"Library/lang/rascal/grammar/tests",slug:"/Library/lang/rascal/grammar/tests/RascalGrammar",permalink:"/docs/Library/lang/rascal/grammar/tests/RascalGrammar",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/grammar/tests/RascalGrammar.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::tests::RascalGrammar"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::tests::PicoGrammar",permalink:"/docs/Library/lang/rascal/grammar/tests/PicoGrammar"},next:{title:"module lang::rascal::grammar::tests::TestGrammars",permalink:"/docs/Library/lang/rascal/grammar/tests/TestGrammars"}},m={},i=[{value:"Usage",id:"usage",level:4},{value:"function generateRascalParser",id:"lang-rascal-grammar-tests-RascalGrammar-generateRascalParser",level:2},{value:"function generateAndWriteRascalParser",id:"lang-rascal-grammar-tests-RascalGrammar-generateAndWriteRascalParser",level:2},{value:"function generateAndTimeRascalParser",id:"lang-rascal-grammar-tests-RascalGrammar-generateAndTimeRascalParser",level:2},{value:"function main",id:"lang-rascal-grammar-tests-RascalGrammar-main",level:2},{value:"function tstgenerateRascalParser",id:"lang-rascal-grammar-tests-RascalGrammar-tstgenerateRascalParser",level:2},{value:"function cntChoice1",id:"lang-rascal-grammar-tests-RascalGrammar-cntChoice1",level:2},{value:"function cntChoice2",id:"lang-rascal-grammar-tests-RascalGrammar-cntChoice2",level:2},{value:"function cntLex1",id:"lang-rascal-grammar-tests-RascalGrammar-cntLex1",level:2},{value:"function cntLex2",id:"lang-rascal-grammar-tests-RascalGrammar-cntLex2",level:2},{value:"function cntEmpty1",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmpty1",level:2},{value:"function cntEmpty2",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmpty2",level:2},{value:"function cntSort1",id:"lang-rascal-grammar-tests-RascalGrammar-cntSort1",level:2},{value:"function cntSort2",id:"lang-rascal-grammar-tests-RascalGrammar-cntSort2",level:2},{value:"function cntLit1",id:"lang-rascal-grammar-tests-RascalGrammar-cntLit1",level:2},{value:"function cntLit2",id:"lang-rascal-grammar-tests-RascalGrammar-cntLit2",level:2},{value:"function cntLabel1",id:"lang-rascal-grammar-tests-RascalGrammar-cntLabel1",level:2},{value:"function cntLabel2",id:"lang-rascal-grammar-tests-RascalGrammar-cntLabel2",level:2},{value:"function cntCharClass1",id:"lang-rascal-grammar-tests-RascalGrammar-cntCharClass1",level:2},{value:"function cntCharClass2",id:"lang-rascal-grammar-tests-RascalGrammar-cntCharClass2",level:2},{value:"function cntProd1",id:"lang-rascal-grammar-tests-RascalGrammar-cntProd1",level:2},{value:"function cntProd2",id:"lang-rascal-grammar-tests-RascalGrammar-cntProd2",level:2},{value:"function cntEmptyList1",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptyList1",level:2},{value:"function cntEmptyList2",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptyList2",level:2},{value:"function cntList1",id:"lang-rascal-grammar-tests-RascalGrammar-cntList1",level:2},{value:"function cntList2",id:"lang-rascal-grammar-tests-RascalGrammar-cntList2",level:2},{value:"function cntEmptySet1",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptySet1",level:2},{value:"function cntEmptySet2",id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptySet2",level:2},{value:"function cntSet1",id:"lang-rascal-grammar-tests-RascalGrammar-cntSet1",level:2},{value:"function cntSet2",id:"lang-rascal-grammar-tests-RascalGrammar-cntSet2",level:2},{value:"function cntStr1",id:"lang-rascal-grammar-tests-RascalGrammar-cntStr1",level:2},{value:"function cntStr2",id:"lang-rascal-grammar-tests-RascalGrammar-cntStr2",level:2},{value:"function cntInt1",id:"lang-rascal-grammar-tests-RascalGrammar-cntInt1",level:2},{value:"function cntInt2",id:"lang-rascal-grammar-tests-RascalGrammar-cntInt2",level:2},{value:"function cntIter1",id:"lang-rascal-grammar-tests-RascalGrammar-cntIter1",level:2},{value:"function cntIter2",id:"lang-rascal-grammar-tests-RascalGrammar-cntIter2",level:2},{value:"function cntIterStar1",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStar1",level:2},{value:"function cntIterStar2",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStar2",level:2},{value:"function cntIterSeps1",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterSeps1",level:2},{value:"function cntIterSeps2",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterSeps2",level:2},{value:"function cntIterStarSeps1",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStarSeps1",level:2},{value:"function cntIterStarSeps2",id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStarSeps2",level:2},{value:"function cntConditional1",id:"lang-rascal-grammar-tests-RascalGrammar-cntConditional1",level:2},{value:"function cntConditional2",id:"lang-rascal-grammar-tests-RascalGrammar-cntConditional2",level:2},{value:"function cntRange1",id:"lang-rascal-grammar-tests-RascalGrammar-cntRange1",level:2},{value:"function cntRange2",id:"lang-rascal-grammar-tests-RascalGrammar-cntRange2",level:2},{value:"function cntPriority1",id:"lang-rascal-grammar-tests-RascalGrammar-cntPriority1",level:2},{value:"function cntPriority2",id:"lang-rascal-grammar-tests-RascalGrammar-cntPriority2",level:2}],o={toc:i};function u(a){let{components:t,...e}=a;return(0,l.kt)("wrapper",(0,r.Z)({},o,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::tests::RascalGrammar;")),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-generateRascalParser"},"function generateRascalParser"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str generateRascalParser()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-generateAndWriteRascalParser"},"function generateAndWriteRascalParser"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void generateAndWriteRascalParser()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-generateAndTimeRascalParser"},"function generateAndTimeRascalParser"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int generateAndTimeRascalParser()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-main"},"function main"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value main()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-tstgenerateRascalParser"},"function tstgenerateRascalParser"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstgenerateRascalParser()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntChoice1"},"function cntChoice1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntChoice1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntChoice2"},"function cntChoice2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntChoice2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLex1"},"function cntLex1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLex1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLex2"},"function cntLex2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLex2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmpty1"},"function cntEmpty1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmpty1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmpty2"},"function cntEmpty2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmpty2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntSort1"},"function cntSort1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntSort1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntSort2"},"function cntSort2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntSort2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLit1"},"function cntLit1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLit1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLit2"},"function cntLit2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLit2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLabel1"},"function cntLabel1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLabel1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntLabel2"},"function cntLabel2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntLabel2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntCharClass1"},"function cntCharClass1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntCharClass1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntCharClass2"},"function cntCharClass2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntCharClass2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntProd1"},"function cntProd1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntProd1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntProd2"},"function cntProd2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntProd2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptyList1"},"function cntEmptyList1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmptyList1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptyList2"},"function cntEmptyList2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmptyList2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntList1"},"function cntList1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntList1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntList2"},"function cntList2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntList2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptySet1"},"function cntEmptySet1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmptySet1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntEmptySet2"},"function cntEmptySet2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntEmptySet2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntSet1"},"function cntSet1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntSet1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntSet2"},"function cntSet2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntSet2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntStr1"},"function cntStr1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntStr1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntStr2"},"function cntStr2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntStr2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntInt1"},"function cntInt1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntInt1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntInt2"},"function cntInt2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntInt2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIter1"},"function cntIter1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIter1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIter2"},"function cntIter2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIter2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStar1"},"function cntIterStar1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterStar1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStar2"},"function cntIterStar2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterStar2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterSeps1"},"function cntIterSeps1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterSeps1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterSeps2"},"function cntIterSeps2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterSeps2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStarSeps1"},"function cntIterStarSeps1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterStarSeps1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntIterStarSeps2"},"function cntIterStarSeps2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntIterStarSeps2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntConditional1"},"function cntConditional1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntConditional1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntConditional2"},"function cntConditional2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntConditional2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntRange1"},"function cntRange1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntRange1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntRange2"},"function cntRange2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntRange2()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntPriority1"},"function cntPriority1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntPriority1()"))),(0,l.kt)("h2",{id:"lang-rascal-grammar-tests-RascalGrammar-cntPriority2"},"function cntPriority2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool cntPriority2()"))))}u.isMDXComponent=!0}}]);