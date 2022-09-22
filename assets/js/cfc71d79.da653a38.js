"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Do",keywords:["do","while"]},l=void 0,s={unversionedId:"Rascal/Statements/Do/index",id:"Rascal/Statements/Do/index",title:"Do",description:"Synopsis",source:"@site/docs/Rascal/Statements/Do/index.md",sourceDirName:"Rascal/Statements/Do",slug:"/Rascal/Statements/Do/",permalink:"/docs/Rascal/Statements/Do/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Do/index.md",tags:[],version:"current",frontMatter:{title:"Do",keywords:["do","while"]},sidebar:"tutorialSidebar",previous:{title:"Continue",permalink:"/docs/Rascal/Statements/Continue/"},next:{title:"Fail",permalink:"/docs/Rascal/Statements/Fail/"}},i={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Repeat statements while condition holds."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"do Statement while ( Exp );")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Statement")," is executed repeatedly, as long as the Boolean expression ",(0,a.kt)("em",{parentName:"p"},"Exp")," yields true.\nExpression ",(0,a.kt)("em",{parentName:"p"},"Exp")," is executed from scratch in each repetition and only the first true value (if any) is used."),(0,a.kt)("p",null,"By default, the value of a do statement is the empty list.\nIn general, the value of a do statement consists of all values contributed by ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Append"},"Append")," statements\nthat are executed during the repeated execution of its body Statement."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>int n = 3;\nint: 3\nrascal>do { println("n = <n>"); n -= 1; } while (n > 0);\ndo { println("n = <n>"); n -= 1; } while (n > 0);\nn = 3\nn = 2\nn = 1\nlist[void]: []\n')),(0,a.kt)("p",null,"Now build a list result using the ",(0,a.kt)("inlineCode",{parentName:"p"},"append")," statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>n = 3;\nint: 3\nrascal>do { append n * n; n -= 1; } while (n > 0);\nlist[int]: [9,4,1]\n")))}u.isMDXComponent=!0}}]);