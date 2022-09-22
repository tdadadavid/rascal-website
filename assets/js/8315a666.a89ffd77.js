"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[27418],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(y,s(s({ref:e},c),{},{components:r})):n.createElement(y,s({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14568:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const l={title:"module lang::smtlib2::theory::ints::Ast"},s=void 0,i={unversionedId:"Library/lang/smtlib2/theory/ints/Ast",id:"Library/lang/smtlib2/theory/ints/Ast",title:"module lang::smtlib2::theory::ints::Ast",description:"Usage",source:"@site/docs/Library/lang/smtlib2/theory/ints/Ast.md",sourceDirName:"Library/lang/smtlib2/theory/ints",slug:"/Library/lang/smtlib2/theory/ints/Ast",permalink:"/docs/Library/lang/smtlib2/theory/ints/Ast",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/smtlib2/theory/ints/Ast.md",tags:[],version:"current",frontMatter:{title:"module lang::smtlib2::theory::ints::Ast"},sidebar:"tutorialSidebar",previous:{title:"lang::smtlib2::theory::ints",permalink:"/docs/Library/lang/smtlib2/theory/ints/"},next:{title:"lang::std",permalink:"/docs/Library/lang/std/"}},o={},p=[{value:"Usage",id:"usage",level:4},{value:"data Sort",id:"lang-smtlib2-theory-ints-Ast-Sort",level:2},{value:"data Expr",id:"lang-smtlib2-theory-ints-Ast-Expr",level:2},{value:"data Literal",id:"lang-smtlib2-theory-ints-Ast-Literal",level:2}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::smtlib2::theory::ints::Ast;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Synopsis: AST for the SMTLIBv2 Ints theory\n")),(0,a.kt)("h2",{id:"lang-smtlib2-theory-ints-Ast-Sort"},"data Sort"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Sort  \n     = \\int()\n     ;\n")),(0,a.kt)("h2",{id:"lang-smtlib2-theory-ints-Ast-Expr"},"data Expr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Expr  \n     = neg(Expr val)\n     | sub(Expr lhs, Expr rhs)\n     | add(Expr lhs, Expr rhs)\n     | mul(Expr lhs, Expr rhs)\n     | div(Expr lhs, Expr rhs)\n     | \\mod(Expr lhs, Expr rhs)\n     | abs(Expr val)\n     | lte(Expr lhs, Expr rhs)\n     | lt (Expr lhs, Expr rhs)\n     | gte(Expr lhs, Expr rhs)\n     | gt (Expr lhs, Expr rhs)\n     ;\n")),(0,a.kt)("h2",{id:"lang-smtlib2-theory-ints-Ast-Literal"},"data Literal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Literal  \n     = intVal(int i)\n     ;\n")))}u.isMDXComponent=!0}}]);