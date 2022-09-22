"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[66798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(d,r(r({ref:t},y),{},{components:n})):a.createElement(d,r({ref:t},y))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(83117),i=(n(67294),n(3905));const l={title:"module analysis::m3::TypeSymbol"},r=void 0,o={unversionedId:"Library/analysis/m3/TypeSymbol",id:"Library/analysis/m3/TypeSymbol",title:"module analysis::m3::TypeSymbol",description:"Usage",source:"@site/docs/Library/analysis/m3/TypeSymbol.md",sourceDirName:"Library/analysis/m3",slug:"/Library/analysis/m3/TypeSymbol",permalink:"/docs/Library/analysis/m3/TypeSymbol",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/m3/TypeSymbol.md",tags:[],version:"current",frontMatter:{title:"module analysis::m3::TypeSymbol"},sidebar:"tutorialSidebar",previous:{title:"module analysis::m3::Registry",permalink:"/docs/Library/analysis/m3/Registry"},next:{title:"analysis::statistics",permalink:"/docs/Library/analysis/statistics/"}},s={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"data TypeSymbol",id:"analysis-m3-TypeSymbol-TypeSymbol",level:2},{value:"function subtype",id:"analysis-m3-TypeSymbol-subtype",level:2},{value:"function lub",id:"analysis-m3-TypeSymbol-lub",level:2}],y={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::m3::TypeSymbol;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"a symbolic representation for types that occur in programming languages."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"M3 provides a general mechanism to associate types, symbolically, with source code artifacts or even run-time artifacts."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeSymbol")," type is a general concept which needs to be extended for specific programming languages. One language will\nclass and interface definitions which coincide with types, another may have higher order function types etc."),(0,i.kt)("p",null,"As a basic principle, the symbols for declared types always link to their definition in the source code using a ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Location"},"Location"),",\nwhile other implicit types do not have such a link (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),")."),(0,i.kt)("p",null,"We cater for languages to have a subtype relation to be defined, and a least upper bound computation. "),(0,i.kt)("p",null,"You will find an interesting examples in ","[lang::java::m3::TypeSymbol]","."),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"symbolic types can be analyzed and manipulated symbolically, i.e. to instatiate parametrized types."),(0,i.kt)("li",{parentName:"ul"},"symbolic types can be used directly as constraint variables.")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you import extensions to this M3 model for two different languages, ambiguity and other confusion may arise\nbecause the subtype and lub functions of the two languages will merge.")),(0,i.kt)("h2",{id:"analysis-m3-TypeSymbol-TypeSymbol"},"data TypeSymbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data TypeSymbol  \n     = \\any()\n     ;\n")),(0,i.kt)("h2",{id:"analysis-m3-TypeSymbol-subtype"},"function subtype"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool subtype(\\any(), \\any())"))),(0,i.kt)("h2",{id:"analysis-m3-TypeSymbol-lub"},"function lub"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeSymbol lub(\\any(), \\any())"))))}c.isMDXComponent=!0}}]);