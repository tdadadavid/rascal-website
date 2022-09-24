"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||p;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<p;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={title:"Map StrictSubMap",keywords:["<"]},l=void 0,s={unversionedId:"Rascal/Expressions/Values/Map/StrictSubMap/index",id:"Rascal/Expressions/Values/Map/StrictSubMap/index",title:"Map StrictSubMap",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Map/StrictSubMap/index.md",sourceDirName:"Rascal/Expressions/Values/Map/StrictSubMap",slug:"/Rascal/Expressions/Values/Map/StrictSubMap/",permalink:"/docs/Rascal/Expressions/Values/Map/StrictSubMap/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Map/StrictSubMap/index.md",tags:[],version:"current",frontMatter:{title:"Map StrictSubMap",keywords:["<"]},sidebar:"tutorialSidebar",previous:{title:"Map NotEqual",permalink:"/docs/Rascal/Expressions/Values/Map/NotEqual/"},next:{title:"Map StrictSuperMap",permalink:"/docs/Rascal/Expressions/Values/Map/StrictSuperMap/"}},i={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Strict submap operator on map values."),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> < Exp<sub>2</sub>")),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> < Exp<sub>2</sub>")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"map[TK<sub>1</sub>,TV<sub>2</sub>]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"map[TK<sub>2</sub>, TV<sub>2</sub>]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Yields ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if all key/value pairs in the map value of ",(0,n.kt)("em",{parentName:"p"},"Exp"),(0,n.kt)("sub",null,"1")," occur in the map value ",(0,n.kt)("em",{parentName:"p"},"Exp"),(0,n.kt)("sub",null,"2"),"\nand the values of ",(0,n.kt)("em",{parentName:"p"},"Exp"),(0,n.kt)("sub",null,"1")," and ",(0,n.kt)("em",{parentName:"p"},"EXp"),(0,n.kt)("sub",null,"2")," are not equal, and ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>("apple": 1, "pear": 2) < ("pear": 2, "apple": 1, "banana" : 3);\nbool: true\nrascal>("apple": 1, "pear": 2) < ("apple": 1, "banana" : 3);\nbool: false\n')))}c.isMDXComponent=!0}}]);