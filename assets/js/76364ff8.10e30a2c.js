"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[31824],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>d});var n=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var m=n.createContext({}),c=function(e){var t=n.useContext(m),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(l),d=i,g=u["".concat(m,".").concat(d)]||u[d]||s[d]||o;return l?n.createElement(g,r(r({ref:t},p),{},{components:l})):n.createElement(g,r({ref:t},p))}));function d(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=l.length,r=new Array(o);r[0]=u;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var c=2;c<o;c++)r[c]=l[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},72229:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=l(87462),i=(l(67294),l(3905));const o={title:"module demo::lang::Pico::Compile"},r=void 0,a={unversionedId:"Library/demo/lang/Pico/Compile",id:"Library/demo/lang/Pico/Compile",title:"module demo::lang::Pico::Compile",description:"Usage",source:"@site/docs/Library/demo/lang/Pico/Compile.md",sourceDirName:"Library/demo/lang/Pico",slug:"/Library/demo/lang/Pico/Compile",permalink:"/docs/Library/demo/lang/Pico/Compile",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Pico/Compile.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Pico::Compile"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Pico::Assembly",permalink:"/docs/Library/demo/lang/Pico/Assembly"},next:{title:"module demo::lang::Pico::ControlFlow",permalink:"/docs/Library/demo/lang/Pico/ControlFlow"}},m={},c=[{value:"Usage",id:"usage",level:4},{value:"alias Instrs",id:"demo-lang-Pico-Compile-Instrs",level:2},{value:"function compileExp",id:"demo-lang-Pico-Compile-compileExp",level:2},{value:"function nextLabel",id:"demo-lang-Pico-Compile-nextLabel",level:2},{value:"function compileStat",id:"demo-lang-Pico-Compile-compileStat",level:2},{value:"function compileStats",id:"demo-lang-Pico-Compile-compileStats",level:2},{value:"function compileDecls",id:"demo-lang-Pico-Compile-compileDecls",level:2},{value:"function compileProgram",id:"demo-lang-Pico-Compile-compileProgram",level:2}],p={toc:c};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import demo::lang::Pico::Compile;")),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-Instrs"},"alias Instrs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[Instr]"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-compileExp"},"function compileExp"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(natCon(int N))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(strCon(str S))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(id(PicoId Id))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(add(EXP E1, EXP E2))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(sub(EXP E1, EXP E2))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(conc(EXP E1, EXP E2))"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-nextLabel"},"function nextLabel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str nextLabel()"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-compileStat"},"function compileStat"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(asgStat(PicoId Id, EXP Exp))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(ifElseStat(EXP Exp, // <5>                               list[STATEMENT] Stats1,                               list[STATEMENT] Stats2))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(whileStat(EXP Exp,                               list[STATEMENT] Stats1))"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-compileStats"},"function compileStats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileStats(list[STATEMENT] Stats1)"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-compileDecls"},"function compileDecls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileDecls(list[DECL] Decls)"))),(0,i.kt)("h2",{id:"demo-lang-Pico-Compile-compileProgram"},"function compileProgram"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileProgram(PROGRAM P)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instrs compileProgram(str txt)"))))}s.isMDXComponent=!0}}]);