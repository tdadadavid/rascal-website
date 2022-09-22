"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Set Comprehension",keywords:["{","|","}"]},l=void 0,o={unversionedId:"Rascal/Expressions/Values/Set/Comprehension/index",id:"Rascal/Expressions/Values/Set/Comprehension/index",title:"Set Comprehension",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Set/Comprehension/index.md",sourceDirName:"Rascal/Expressions/Values/Set/Comprehension",slug:"/Rascal/Expressions/Values/Set/Comprehension/",permalink:"/docs/Rascal/Expressions/Values/Set/Comprehension/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Set/Comprehension/index.md",tags:[],version:"current",frontMatter:{title:"Set Comprehension",keywords:["{","|","}"]},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs/Rascal/Expressions/Values/Set/"},next:{title:"Set Difference",permalink:"/docs/Rascal/Expressions/Values/Set/Difference/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A set comprehension generates a set value."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... | Gen<sub>1</sub>, Gen<sub>2</sub>, ... }")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},"..."),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... \\| Gen<sub>1</sub>, Gen<sub>2</sub>, ... }")),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"T<sub>1</sub>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"T<sub>2</sub>")),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[ lub( T<sub>1</sub>, T<sub>2</sub>, ... ) ]")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A set comprehension consists of a number of contributing expressions ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1"),", ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2"),", ... and a number of\ngenerators ",(0,a.kt)("em",{parentName:"p"},"Gen"),(0,a.kt)("sub",null,"1"),", ",(0,a.kt)("em",{parentName:"p"},"Gen"),(0,a.kt)("sub",null,"2"),", ",(0,a.kt)("em",{parentName:"p"},"Gen"),(0,a.kt)("sub",null,"3"),", ... that are evaluated as described in ",(0,a.kt)("a",{parentName:"p",href:"../../../../../Rascal/Expressions/Comprehensions"},"Comprehensions"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{ N * N | int N <- [0 .. 10]};\nset[int]: {16,64,1,9,81,4,0,49,36,25}\nrascal>{ N * N | int N <- [0 .. 10], N % 3 == 0};\nset[int]: {9,81,0,36}\n")))}c.isMDXComponent=!0}}]);