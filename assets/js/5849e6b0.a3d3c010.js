"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[25757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,p=m["".concat(u,".").concat(d)]||m[d]||g[d]||i;return r?n.createElement(p,l(l({ref:t},c),{},{components:r})):n.createElement(p,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"module demo::lang::turing::l1::ast::Turing"},l=void 0,o={unversionedId:"Library/demo/lang/turing/l1/ast/Turing",id:"Library/demo/lang/turing/l1/ast/Turing",title:"module demo::lang::turing::l1::ast::Turing",description:"Usage",source:"@site/docs/Library/demo/lang/turing/l1/ast/Turing.md",sourceDirName:"Library/demo/lang/turing/l1/ast",slug:"/Library/demo/lang/turing/l1/ast/Turing",permalink:"/docs/Library/demo/lang/turing/l1/ast/Turing",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/turing/l1/ast/Turing.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::turing::l1::ast::Turing"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::turing::l1::ast::Load",permalink:"/docs/Library/demo/lang/turing/l1/ast/Load"},next:{title:"demo::lang::turing::l1::cst",permalink:"/docs/Library/demo/lang/turing/l1/cst/"}},u={},s=[{value:"Usage",id:"usage",level:4},{value:"data Program",id:"demo-lang-turing-l1-ast-Turing-Program",level:2},{value:"data Statement",id:"demo-lang-turing-l1-ast-Turing-Statement",level:2}],c={toc:s};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::lang::turing::l1::ast::Turing;")),(0,a.kt)("h2",{id:"demo-lang-turing-l1-ast-Turing-Program"},"data Program"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Program  \n     = program(list[Statement] statements)\n     ;\n")),(0,a.kt)("h2",{id:"demo-lang-turing-l1-ast-Turing-Statement"},"data Statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Statement  \n     = jumpAlways(int line)\n     | jumpSet(int line)\n     | jumpUnset(int line)\n     | writeSet()\n     | writeUnset()\n     | moveForward()\n     | moveBackward()\n     ;\n")))}g.isMDXComponent=!0}}]);