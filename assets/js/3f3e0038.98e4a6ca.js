"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[35250],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49134:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={title:"Real",keywords:["real"]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/Real/index",id:"Rascal/Expressions/Values/Real/index",title:"Real",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Real/index.md",sourceDirName:"Rascal/Expressions/Values/Real",slug:"/Rascal/Expressions/Values/Real/",permalink:"/docs/Rascal/Expressions/Values/Real/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Real/index.md",tags:[],version:"current",frontMatter:{title:"Real",keywords:["real"]},sidebar:"tutorialSidebar",previous:{title:"Range",permalink:"/docs/Rascal/Expressions/Values/Range/"},next:{title:"ReifiedTypes",permalink:"/docs/Rascal/Expressions/Values/ReifiedTypes/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Real values."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"real")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The real values are represented by the type ",(0,a.kt)("inlineCode",{parentName:"p"},"real")," and are written as usual in most programming languages.\nThey can have ",(0,a.kt)("em",{parentName:"p"},"arbitrary size and precision"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Values/Number"},"Number")," for all operations on integers, reals and numbers."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.5"),(0,a.kt)("li",{parentName:"ul"},"3.14e-123")))}u.isMDXComponent=!0}}]);