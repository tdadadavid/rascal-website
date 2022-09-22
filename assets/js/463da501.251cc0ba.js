"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96682],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>f});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),c=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=t,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(g,i(i({ref:a},m),{},{components:r})):n.createElement(g,i({ref:a},m))}));function f(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92149:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(83117),t=(r(67294),r(3905));const l={title:"module lang::rascal::grammar::analyze::DefUse"},i=void 0,o={unversionedId:"Library/lang/rascal/grammar/analyze/DefUse",id:"Library/lang/rascal/grammar/analyze/DefUse",title:"module lang::rascal::grammar::analyze::DefUse",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/analyze/DefUse.md",sourceDirName:"Library/lang/rascal/grammar/analyze",slug:"/Library/lang/rascal/grammar/analyze/DefUse",permalink:"/docs/Library/lang/rascal/grammar/analyze/DefUse",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/grammar/analyze/DefUse.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::analyze::DefUse"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::grammar::analyze",permalink:"/docs/Library/lang/rascal/grammar/analyze/"},next:{title:"module lang::rascal::grammar::analyze::Dependency",permalink:"/docs/Library/lang/rascal/grammar/analyze/Dependency"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function definable",id:"lang-rascal-grammar-analyze-DefUse-definable",level:2},{value:"function usedAndDefined",id:"lang-rascal-grammar-analyze-DefUse-usedAndDefined",level:2},{value:"function usedNotDefined",id:"lang-rascal-grammar-analyze-DefUse-usedNotDefined",level:2},{value:"function definedNotUsed",id:"lang-rascal-grammar-analyze-DefUse-definedNotUsed",level:2}],m={toc:c};function d(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::analyze::DefUse;")),(0,t.kt)("h2",{id:"lang-rascal-grammar-analyze-DefUse-definable"},"function definable"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"bool definable(Symbol s)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-analyze-DefUse-usedAndDefined"},"function usedAndDefined"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"tuple[set[Symbol] used, set[Symbol] defined] usedAndDefined(Grammar g)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-analyze-DefUse-usedNotDefined"},"function usedNotDefined"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[Symbol] usedNotDefined(Grammar g)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-analyze-DefUse-definedNotUsed"},"function definedNotUsed"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[Symbol] definedNotUsed(Grammar g)"))))}d.isMDXComponent=!0}}]);