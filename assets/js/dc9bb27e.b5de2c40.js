"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[1927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Return",keywords:["return"]},o=void 0,l={unversionedId:"Rascal/Statements/Return/index",id:"Rascal/Statements/Return/index",title:"Return",description:"Synopsis",source:"@site/docs/Rascal/Statements/Return/index.md",sourceDirName:"Rascal/Statements/Return",slug:"/Rascal/Statements/Return/",permalink:"/docs/Rascal/Statements/Return/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Return/index.md",tags:[],version:"current",frontMatter:{title:"Return",keywords:["return"]},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/docs/Rascal/Statements/Insert/"},next:{title:"Solve",permalink:"/docs/Rascal/Statements/Solve/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Return a value as result of a ","[Function]","."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"return;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"return Exp"))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A return statement comes in two variants: without and with an expression,\nboth variants end the execution of the current function.\nThe first variant applies to functions with ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," as return type.\nThe second variants applies to non-void functions and returns the value of ",(0,a.kt)("em",{parentName:"p"},"Exp")," as result of the function invocation.\nThe following rules apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The static type of ",(0,a.kt)("em",{parentName:"p"},"Exp")," should be compatible with the declared return type of the function in\nwhich the return statement occurs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In each function with a return type that is not void, every possible execution path through the body of\nthe function should end in a return statement."))),(0,a.kt)("p",null,"In each function with a return type that is void, a return statement is implicitly assumed at the end of each execution path through the function body."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int twice(int n) { return 2 * n; }\nint (int): function(|prompt:///|(0,34,<1,0>,<1,34>))\nrascal>twice(5);\nint: 10\n")),(0,a.kt)("p",null,"Functions that only return a value can be abbreviated (and the return is implicit):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int twiceb(int n) = 2 * n;\nint (int): function(|prompt:///|(0,26,<1,0>,<1,26>))\nrascal>twiceb(5);\nint: 10\n")))}p.isMDXComponent=!0}}]);