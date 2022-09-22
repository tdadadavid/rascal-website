"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[11140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={title:"Tuple"},i=void 0,l={unversionedId:"Rascalopedia/Tuple/index",id:"Rascalopedia/Tuple/index",title:"Tuple",description:"Synopsis",source:"@site/docs/Rascalopedia/Tuple/index.md",sourceDirName:"Rascalopedia/Tuple",slug:"/Rascalopedia/Tuple/",permalink:"/docs/Rascalopedia/Tuple/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascalopedia/Tuple/index.md",tags:[],version:"current",frontMatter:{title:"Tuple"},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/Rascalopedia/Testing/"},next:{title:"Typechecker",permalink:"/docs/Rascalopedia/Typechecker/"}},p={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"An ordered, fixed length, sequence of values of possibly different type."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A tuple is an ordered fixed length sequence of values of possibly different type."),(0,a.kt)("p",null,"In Rascal a tuple is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"<")," V",(0,a.kt)("sub",null,"1"),", ..., V~n~ ",(0,a.kt)("inlineCode",{parentName:"p"},">")," and a tuple type has the form ",(0,a.kt)("inlineCode",{parentName:"p"},"type[T<sub>1</sub>, ..., T~n~]"),",\n",(0,a.kt)("em",{parentName:"p"},"T"),"~i~ represents the type of element ",(0,a.kt)("em",{parentName:"p"},"i"),". Tuple have two major applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As tuples in a ",(0,a.kt)("a",{parentName:"li",href:"../../Rascalopedia/Relation"},"Relation"),"."),(0,a.kt)("li",{parentName:"ul"},"For ad-hoc packaging of values, for instance, to return multiple-values from a function.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Tuple"},"Tuple Values")," for the operations on tuples."))}u.isMDXComponent=!0}}]);