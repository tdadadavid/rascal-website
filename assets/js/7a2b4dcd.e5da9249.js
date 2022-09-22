"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[61068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const l={title:"Relation TransitiveClosure",keywords:["+"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/Relation/TransitiveClosure/index",id:"Rascal/Expressions/Values/Relation/TransitiveClosure/index",title:"Relation TransitiveClosure",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Relation/TransitiveClosure/index.md",sourceDirName:"Rascal/Expressions/Values/Relation/TransitiveClosure",slug:"/Rascal/Expressions/Values/Relation/TransitiveClosure/",permalink:"/docs/Rascal/Expressions/Values/Relation/TransitiveClosure/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Relation/TransitiveClosure/index.md",tags:[],version:"current",frontMatter:{title:"Relation TransitiveClosure",keywords:["+"]},sidebar:"tutorialSidebar",previous:{title:"Relation Subscription",permalink:"/docs/Rascal/Expressions/Values/Relation/Subscription/"},next:{title:"Set",permalink:"/docs/Rascal/Expressions/Values/Set/"}},o={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Transitive closure on binary relation values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp +")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp +")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rel[T<sub>1</sub>, T<sub>2</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rel[T<sub>1</sub>, T<sub>2</sub>]"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Returns the transitive closure of a binary relation.\nTransitive closure is defined by repeated composition of a relation.\nIf we define for a given relation R:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R<sub>1</sub> = R")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R<sub>2</sub> = R o R")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R<sub>3</sub> = R o R<sub>2</sub>")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"..."))),(0,a.kt)("p",null,"then the transitive closure R+ can be defined as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R+ = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ..."))),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{<1,2>, <2,3>, <3,4>}+;\nrel[int,int]: {\n  <3,4>,\n  <1,3>,\n  <1,2>,\n  <1,4>,\n  <2,3>,\n  <2,4>\n}\n")),(0,a.kt)("p",null,"We can also simply (but not necessarily efficiently) define transitive closure ourselves:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>rel[int,int] tclosure(rel[int,int] R) {\n>>>>>>>   tc = R;\n>>>>>>>   while(true){\n>>>>>>>      tc1 = tc;\n>>>>>>>      tc += tc o R;\n>>>>>>>      if(tc1 == tc)\n>>>>>>>         return tc;\n>>>>>>>   }\n>>>>>>>}\nrel[int,int] (rel[int,int]): function(|prompt:///|(0,149,<1,0>,<9,1>))\nrascal>tclosure({<1,2>, <2,3>, <3,4>});\nrel[int,int]: {\n  <3,4>,\n  <1,3>,\n  <1,2>,\n  <1,4>,\n  <2,3>,\n  <2,4>\n}\n")))}c.isMDXComponent=!0}}]);