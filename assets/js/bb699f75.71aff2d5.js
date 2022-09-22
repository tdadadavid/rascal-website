"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[34870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Continue",keywords:["continue"]},i=void 0,s={unversionedId:"Rascal/Statements/Continue/index",id:"Rascal/Statements/Continue/index",title:"Continue",description:"Synopsis",source:"@site/docs/Rascal/Statements/Continue/index.md",sourceDirName:"Rascal/Statements/Continue",slug:"/Rascal/Statements/Continue/",permalink:"/docs/Rascal/Statements/Continue/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Continue/index.md",tags:[],version:"current",frontMatter:{title:"Continue",keywords:["continue"]},sidebar:"tutorialSidebar",previous:{title:"Break",permalink:"/docs/Rascal/Statements/Break/"},next:{title:"Do",permalink:"/docs/Rascal/Statements/Do/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Continue with the next iteration of while, do or for loop."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A continue statement is only allowed inside the body of a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/While"},"While"),", ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Do"},"Do")," or ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/For"},"For")," statement\nand is associated with the innermost loop statement in which it is contained.\nIts effect is to end the execution of the block for the current iteration of the loop\nand to continue with the next iteration of the loop."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Break"},"Break")," and ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Fail"},"Fail"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is an example using continue to avoid printing numbers that are divisible by 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>for(int i <- [1 .. 10]){\n>>>>>>>    if(i % 3 == 0)\n>>>>>>>       continue;\n>>>>>>>    println("i = <i>");\n>>>>>>>}\n}\ni = 1\ni = 2\ni = 4\ni = 5\ni = 7\ni = 8\nlist[void]: []\n')))}u.isMDXComponent=!0}}]);