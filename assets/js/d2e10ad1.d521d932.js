"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[57827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(83117),a=(r(67294),r(3905));const o={title:"module demo::lang::Exp::Abstract::Syntax"},l=void 0,c={unversionedId:"Library/demo/lang/Exp/Abstract/Syntax",id:"Library/demo/lang/Exp/Abstract/Syntax",title:"module demo::lang::Exp::Abstract::Syntax",description:"Usage",source:"@site/docs/Library/demo/lang/Exp/Abstract/Syntax.md",sourceDirName:"Library/demo/lang/Exp/Abstract",slug:"/Library/demo/lang/Exp/Abstract/Syntax",permalink:"/docs/Library/demo/lang/Exp/Abstract/Syntax",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Exp/Abstract/Syntax.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Exp::Abstract::Syntax"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Exp::Abstract::Eval",permalink:"/docs/Library/demo/lang/Exp/Abstract/Eval"},next:{title:"module demo::lang::Exp::Abstract::Test",permalink:"/docs/Library/demo/lang/Exp/Abstract/Test"}},p={},i=[{value:"Usage",id:"usage",level:4},{value:"data Exp",id:"demo-lang-Exp-Abstract-Syntax-Exp",level:2}],s={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::lang::Exp::Abstract::Syntax;")),(0,a.kt)("h2",{id:"demo-lang-Exp-Abstract-Syntax-Exp"},"data Exp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Exp  \n     = con(int n)\n     | mul(Exp e1, Exp e2)\n     | add(Exp e1, Exp e2)\n     ;\n")))}u.isMDXComponent=!0}}]);