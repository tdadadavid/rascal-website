"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,P=m["".concat(i,".").concat(p)]||m[p]||u[p]||l;return a?r.createElement(P,o(o({ref:t},d),{},{components:a})):r.createElement(P,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"module demo::lang::Pico::Abstract"},o=void 0,c={unversionedId:"Library/demo/lang/Pico/Abstract",id:"Library/demo/lang/Pico/Abstract",title:"module demo::lang::Pico::Abstract",description:"Usage",source:"@site/docs/Library/demo/lang/Pico/Abstract.md",sourceDirName:"Library/demo/lang/Pico",slug:"/Library/demo/lang/Pico/Abstract",permalink:"/docs/Library/demo/lang/Pico/Abstract",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Pico/Abstract.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Pico::Abstract"},sidebar:"tutorialSidebar",previous:{title:"demo::lang::Pico",permalink:"/docs/Library/demo/lang/Pico/"},next:{title:"module demo::lang::Pico::Assembly",permalink:"/docs/Library/demo/lang/Pico/Assembly"}},i={},s=[{value:"Usage",id:"usage",level:4},{value:"data TYPE",id:"demo-lang-Pico-Abstract-TYPE",level:2},{value:"alias PicoId",id:"demo-lang-Pico-Abstract-PicoId",level:2},{value:"data PROGRAM",id:"demo-lang-Pico-Abstract-PROGRAM",level:2},{value:"data DECL",id:"demo-lang-Pico-Abstract-DECL",level:2},{value:"data EXP",id:"demo-lang-Pico-Abstract-EXP",level:2},{value:"data STATEMENT",id:"demo-lang-Pico-Abstract-STATEMENT",level:2},{value:"alias Occurrence",id:"demo-lang-Pico-Abstract-Occurrence",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::lang::Pico::Abstract;")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-TYPE"},"data TYPE"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data TYPE  \n     = natural()\n     | string()\n     ;\n")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-PicoId"},"alias PicoId"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"))),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-PROGRAM"},"data PROGRAM"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data PROGRAM  \n     = program(list[DECL] decls, list[STATEMENT] stats)\n     ;\n")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-DECL"},"data DECL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data DECL  \n     = decl(PicoId name, TYPE tp)\n     ;\n")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-EXP"},"data EXP"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data EXP  \n     = id(PicoId name)\n     | natCon(int iVal)\n     | strCon(str sVal)\n     | add(EXP left, EXP right)\n     | sub(EXP left, EXP right)\n     | conc(EXP left, EXP right)\n     ;\n")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-STATEMENT"},"data STATEMENT"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data STATEMENT  \n     = asgStat(PicoId name, EXP exp)\n     | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)\n     | whileStat(EXP exp, list[STATEMENT] body)\n     ;\n")),(0,n.kt)("h2",{id:"demo-lang-Pico-Abstract-Occurrence"},"alias Occurrence"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tuple[loc location, PicoId name, STATEMENT stat]"))))}u.isMDXComponent=!0}}]);