"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[15833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={title:"ListRelation FieldSelection",keywords:["."]},l=void 0,s={unversionedId:"Rascal/Expressions/Values/ListRelation/FieldSelection/index",id:"Rascal/Expressions/Values/ListRelation/FieldSelection/index",title:"ListRelation FieldSelection",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/FieldSelection/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation/FieldSelection",slug:"/Rascal/Expressions/Values/ListRelation/FieldSelection/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/FieldSelection/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/ListRelation/FieldSelection/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation FieldSelection",keywords:["."]},sidebar:"tutorialSidebar",previous:{title:"ListRelation Composition",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Composition/"},next:{title:"ListRelation Join",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Join/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Select a field (column) from a list relation value."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp . Name")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp . Name"))))),(0,r.kt)("p",null,"|\n| ",(0,r.kt)("inlineCode",{parentName:"p"},"lrel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"list[T~i~]"),"     |"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Exp")," should evaluate to a list relation that has an ",(0,r.kt)("em",{parentName:"p"},"i"),"-th field label ",(0,r.kt)("em",{parentName:"p"},"L"),"~i~ that is identical to ",(0,r.kt)("em",{parentName:"p"},"Name"),".\nReturn a list with all values of that field.\n",(0,r.kt)("em",{parentName:"p"},"Name")," stands for itself and is not evaluated."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>lrel[str street, int nm] R = [<"abc", 1>, <"abc", 2>, <"def", 4>, <"def", 5>];\nlrel[str street,int nm]: [\n  <"abc",1>,\n  <"abc",2>,\n  <"def",4>,\n  <"def",5>\n]\nrascal>R.street;\nlist[str]: ["abc","abc","def","def"]\n')))}u.isMDXComponent=!0}}]);