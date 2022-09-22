"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const o={title:"Concept",details:["Name","Synopsis","Syntax","Types","Function","Details","Description","Examples","Benefits","Pitfalls"]},i=void 0,p={unversionedId:"Tutor/Concept/index",id:"Tutor/Concept/index",title:"Concept",description:".Synopsis",source:"@site/docs/Tutor/Concept/index.md",sourceDirName:"Tutor/Concept",slug:"/Tutor/Concept/",permalink:"/docs/Tutor/Concept/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Concept/index.md",tags:[],version:"current",frontMatter:{title:"Concept",details:["Name","Synopsis","Syntax","Types","Function","Details","Description","Examples","Benefits","Pitfalls"]},sidebar:"tutorialSidebar",previous:{title:"Authoring",permalink:"/docs/Tutor/Authoring/"},next:{title:"Benefits",permalink:"/docs/Tutor/Concept/Benefits/"}},l={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".Synopsis\nA ",(0,a.kt)("em",{parentName:"p"},"concept")," is the basic building block of a course."),(0,a.kt)("p",null,".Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## _ConceptName_ {/Concept}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Synopsis\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Syntax\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Types\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Function\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Description\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Examples\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Benefits\n_MarkedText_\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".Pitfalls\n_MarkedText_\n")),(0,a.kt)("p",null,"The first two sections (Name and Synopsis) are mandatory, the others are optional.\nIt is recommended to give examples."),(0,a.kt)("p",null,".Types"),(0,a.kt)("p",null,".Function"),(0,a.kt)("p",null,".Description\nA concept describes a separate entity (idea, artefact, function, rule) that is relevant in the scope of the course in which it appears.\nIt consists of 11 named sections that are described separately.\nEach section starts with a keyword that should appear at the begin of a line.\nThe first two sections (Name and Synopsis) are mandatory,"),(0,a.kt)("p",null,"Here is a brief summary of the sections of a concept:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Name"},"Name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Synopsis"},"Synopsis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Syntax"},"./Syntax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Types"},"Types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Function"},"./Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Details"},"Details")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Description"},"Description")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Benefits"},"Benefits")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept/Pitfalls"},"Pitfalls"))),(0,a.kt)("p",null,".Examples"),(0,a.kt)("p",null,".Benefits"),(0,a.kt)("p",null,".Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that all section names start with a period, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},".Examples"),"."),(0,a.kt)("li",{parentName:"ul"},"No space is allowed before the section name.")))}u.isMDXComponent=!0}}]);