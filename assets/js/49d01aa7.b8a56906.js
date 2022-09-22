"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[49288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(83117),l=(n(67294),n(3905));const r={title:"Relation Subscription",keywords:["[","]"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/Relation/Subscription/index",id:"Rascal/Expressions/Values/Relation/Subscription/index",title:"Relation Subscription",description:"Syntax",source:"@site/docs/Rascal/Expressions/Values/Relation/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/Relation/Subscription",slug:"/Rascal/Expressions/Values/Relation/Subscription/",permalink:"/docs/Rascal/Expressions/Values/Relation/Subscription/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Relation/Subscription/index.md",tags:[],version:"current",frontMatter:{title:"Relation Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Relation ReflexiveTransitiveClosure",permalink:"/docs/Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/"},next:{title:"Relation TransitiveClosure",permalink:"/docs/Rascal/Expressions/Values/Relation/TransitiveClosure/"}},u={},o=[{value:"Syntax",id:"syntax",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Single Value Variant 1",id:"single-value-variant-1",level:5},{value:"Set of Values Variant",id:"set-of-values-variant",level:5},{value:"Description",id:"description",level:4},{value:"Single Value Variant",id:"single-value-variant",level:5},{value:"Set of Values Variant",id:"set-of-values-variant-1",level:5},{value:"Examples",id:"examples",level:4}],p={toc:o};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>0</sub> [Exp<sub>1</sub>, Exp<sub>2</sub>, ..., Exp~n~]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>0</sub> [Exp<sub>1</sub>]"))),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Indexing of a relation via tuple values."),(0,l.kt)("h5",{id:"single-value-variant-1"},"Single Value Variant 1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_Exp<sub>0</sub>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Exp<sub>1</sub>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Exp<sub>2</sub>")),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Exp0_ [ Exp<sub>1</sub>, Exp<sub>2</sub>, ... ]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel[T<sub>1</sub>, T<sub>2</sub>, ... T~m~]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel[T~n~, _T~n+1~_, ... T~m~]"))))),(0,l.kt)("h5",{id:"set-of-values-variant"},"Set of Values Variant"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub> [ Exp<sub>1</sub> ]")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel[T<sub>1</sub>, T<sub>2</sub>, ... T~m~]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set[T<sub>1</sub>]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel[T<sub>2</sub>, T<sub>2</sub>, ... T~m~]"))))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"Relation resulting from subscription of a relation ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"0"),"."),(0,l.kt)("h5",{id:"single-value-variant"},"Single Value Variant"),(0,l.kt)("p",null,"Subscription with the index values of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"1"),", ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2"),", ....\nThe result is a relation with all tuples that have these index values as first elements\nwith the index values removed from the tuple.\nIf the resulting tuple has only a single element, a set is returned instead of a relation.\nA wildcard ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," as index value matches all possible values at that index position."),(0,l.kt)("h5",{id:"set-of-values-variant-1"},"Set of Values Variant"),(0,l.kt)("p",null,"Subscription with a set of the index values of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"1"),".\nThe result is a relation with all tuples that have these index values as first element\nwith the index values removed from the tuple. "),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>R = {<1,10>, <2,20>, <1,11>, <3,30>, <2,21>};\nrel[int,int]: {\n  <3,30>,\n  <1,10>,\n  <1,11>,\n  <2,20>,\n  <2,21>\n}\nrascal>R[1];\nset[int]: {10,11}\nrascal>R[{1}];\nset[int]: {10,11}\nrascal>R[{1, 2}];\nset[int]: {10,20,11,21}\nrascal>RR = {<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,\n>>>>>>>              <3,30,300>};\nrel[int,int,int]: {\n  <1,10,100>,\n  <3,30,300>,\n  <1,11,101>,\n  <2,20,200>,\n  <2,22,202>\n}\nrascal>RR[1];\nrel[int,int]: {\n  <10,100>,\n  <11,101>\n}\nrascal>RR[1,_];\nset[int]: {100,101}\n")),(0,l.kt)("p",null,"Introduce a relation with economic data and assign it to ",(0,l.kt)("inlineCode",{parentName:"p"},"GDP"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>rel[str country, int year, int amount] GDP =\n>>>>>>>{<"US", 2008, 14264600>, <"EU", 2008, 18394115>,\n>>>>>>> <"Japan", 2008, 4923761>, <"US", 2007, 13811200>, \n>>>>>>> <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>};\nrel[str country,int year,int amount]: {\n  <"EU",2007,13811200>,\n  <"US",2007,13811200>,\n  <"Japan",2007,4376705>,\n  <"US",2008,14264600>,\n  <"Japan",2008,4923761>,\n  <"EU",2008,18394115>\n}\n')),(0,l.kt)("p",null,"and then retrieve the information for the index ",(0,l.kt)("inlineCode",{parentName:"p"},'"Japan"'),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>GDP["Japan"];\nrel[int,int]: {\n  <2007,4376705>,\n  <2008,4923761>\n}\n')),(0,l.kt)("p",null,"or rather for the indices ",(0,l.kt)("inlineCode",{parentName:"p"},'"Japan"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2008"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>GDP["Japan", 2008];\nset[int]: {4923761}\n')))}d.isMDXComponent=!0}}]);