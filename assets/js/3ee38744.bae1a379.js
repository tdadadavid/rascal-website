"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[35942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"DateTime Equal",keywords:["=="]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/DateTime/Equal/index",id:"Rascal/Expressions/Values/DateTime/Equal/index",title:"DateTime Equal",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/DateTime/Equal/index.md",sourceDirName:"Rascal/Expressions/Values/DateTime/Equal",slug:"/Rascal/Expressions/Values/DateTime/Equal/",permalink:"/docs/Rascal/Expressions/Values/DateTime/Equal/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/DateTime/Equal/index.md",tags:[],version:"current",frontMatter:{title:"DateTime Equal",keywords:["=="]},sidebar:"tutorialSidebar",previous:{title:"DateTime",permalink:"/docs/Rascal/Expressions/Values/DateTime/"},next:{title:"DateTime Field Selection",permalink:"/docs/Rascal/Expressions/Values/DateTime/FieldSelection/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Equality on datetime values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> == Exp<sub>2</sub>")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> == Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Yields ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if both arguments are identical ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," values and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>$2010-07-15$ == $2010-07-15$;\nbool: true\nrascal>$2010-07-15$ == $2010-07-14$;\nbool: false\n")))}c.isMDXComponent=!0}}]);