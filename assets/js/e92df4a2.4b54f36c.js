"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[48936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Set Union",keywords:["+"]},i=void 0,o={unversionedId:"Rascal/Expressions/Values/Set/Union/index",id:"Rascal/Expressions/Values/Set/Union/index",title:"Set Union",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Set/Union/index.md",sourceDirName:"Rascal/Expressions/Values/Set/Union",slug:"/Rascal/Expressions/Values/Set/Union/",permalink:"/docs/Rascal/Expressions/Values/Set/Union/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Set/Union/index.md",tags:[],version:"current",frontMatter:{title:"Set Union",keywords:["+"]},sidebar:"tutorialSidebar",previous:{title:"Set SuperSet",permalink:"/docs/Rascal/Expressions/Values/Set/SuperSet/"},next:{title:"Set in",permalink:"/docs/Rascal/Expressions/Values/Set/in/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Union of two set values."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> + Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[T<sub>1</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[T<sub>2</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[lub(T<sub>1</sub>,T<sub>2</sub>)]"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator computes set union if both operands are sets. If one of the operands is not a set, it acts as ",(0,a.kt)("a",{parentName:"p",href:"../../../../../Rascal/Expressions/Values/Set/Insert"},"Insert")," instead."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{1, 2, 3} + {4, 5, 6};\nset[int]: {5,1,3,2,4,6}\nrascal>{1,2,3} + {2,3,4};\nset[int]: {1,3,2,4}\nrascal>{1, 2, 3} + {3};\nset[int]: {1,3,2}\nrascal>{2} + { 2, 3, 4};\nset[int]: {3,2,4}\n")))}u.isMDXComponent=!0}}]);