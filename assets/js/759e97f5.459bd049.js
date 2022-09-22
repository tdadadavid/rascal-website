"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[16699],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>d});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),p=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,N=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return a?t.createElement(N,i(i({ref:r},u),{},{components:a})):t.createElement(N,i({ref:r},u))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14439:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=a(83117),n=(a(67294),a(3905));const s={title:"Number",keywords:["int","real","num"]},i=void 0,l={unversionedId:"Rascal/Expressions/Values/Number/index",id:"Rascal/Expressions/Values/Number/index",title:"Number",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Number/index.md",sourceDirName:"Rascal/Expressions/Values/Number",slug:"/Rascal/Expressions/Values/Number/",permalink:"/docs/Rascal/Expressions/Values/Number/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Number/index.md",tags:[],version:"current",frontMatter:{title:"Number",keywords:["int","real","num"]},sidebar:"tutorialSidebar",previous:{title:"Node Subscription",permalink:"/docs/Rascal/Expressions/Values/Node/Subscription/"},next:{title:"Number Addition",permalink:"/docs/Rascal/Expressions/Values/Number/Addition/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4}],u={toc:p};function c(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Numeric values."),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"real"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"num")),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Numbers include integers (values of type ",(0,n.kt)("inlineCode",{parentName:"p"},"int"),") and reals (values of type ",(0,n.kt)("inlineCode",{parentName:"p"},"real"),").\nIf both operands have the same type (",(0,n.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"real"),") then the operator is the corresponding operator on integers or reals. Otherwise, integer arguments are first converted to real and the real operator is applied."),(0,n.kt)("p",null,"The following operations are provided on numbers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number"},"Number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Addition"},"Addition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Conditional"},"Conditional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Division"},"Division")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Equal"},"Equal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/GreaterThan"},"GreaterThan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/GreaterThanOrEqual"},"GreaterThanOrEqual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/LessThan"},"LessThan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/LessThanOrEqual"},"LessThanOrEqual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Multiplication"},"Multiplication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Negation"},"Negation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/NotEqual"},"NotEqual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Remainder"},"Remainder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Number/Subtraction"},"Subtraction"))))}c.isMDXComponent=!0}}]);