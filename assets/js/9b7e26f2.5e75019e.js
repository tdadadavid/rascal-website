"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const s={title:"IsDefined",keywords:["?"]},i=void 0,l={unversionedId:"Rascal/Statements/Assignment/IsDefined/index",id:"Rascal/Statements/Assignment/IsDefined/index",title:"IsDefined",description:"Synopsis",source:"@site/docs/Rascal/Statements/Assignment/IsDefined/index.md",sourceDirName:"Rascal/Statements/Assignment/IsDefined",slug:"/Rascal/Statements/Assignment/IsDefined/",permalink:"/docs/Rascal/Statements/Assignment/IsDefined/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Assignment/IsDefined/index.md",tags:[],version:"current",frontMatter:{title:"IsDefined",keywords:["?"]},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/docs/Rascal/Statements/Assignment/Field/"},next:{title:"Multiple",permalink:"/docs/Rascal/Statements/Assignment/Multiple/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Assign but replace if value is not defined."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"First the value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"1")," is determined and if that is defined it is assigned to ",(0,r.kt)("em",{parentName:"p"},"Assignable"),".\nOtherwise, the value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"2")," is assigned to ",(0,r.kt)("em",{parentName:"p"},"Assignable"),"."),(0,r.kt)("p",null,"Values which can be undefined are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Map"},"Map"),"s where the key is ",(0,r.kt)("em",{parentName:"li"},"not")," set"),(0,r.kt)("li",{parentName:"ul"},"values of ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/Annotation"},"Annotation")," which are not present."),(0,r.kt)("li",{parentName:"ul"},"values of ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/Function"},"Function"),"'s keyword parameters which have not been provided, but are set to default."),(0,r.kt)("li",{parentName:"ul"},"values of ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Constructor"},"Constructor"),"'s keyword parameters which have not been provided, but are computed by defaults.")),(0,r.kt)("p",null,"No other values can be used in an undefined state, so the ? operator does not make sense on undefined or uninitialized variables for example."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>M = ("Andy": 1, "Brian" : 2);\nmap[str, int]: ("Andy":1,"Brian":2)\n')),(0,r.kt)("p",null,"Using an ",(0,r.kt)("inlineCode",{parentName:"p"},"isDefined")," assignable can we increment a non-existing entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>M["SomebodyElse"] ? 0 += 1;\nmap[str, int]: ("Andy":1,"Brian":2,"SomebodyElse":1)\nrascal>M["SomebodyElse"];\nint: 1\n')),(0,r.kt)("p",null,"And if we increment an existing entry the ? has no effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>M["Andy"] ? 0 += 1;\nmap[str, int]: ("Andy":2,"Brian":2,"SomebodyElse":1)\nrascal>M["Andy"]\nint: 2\n')),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"short notation that inline initialization of map values, keyword fields or annotations without having to write a lot of boilerplate if-then-else statements.")))}u.isMDXComponent=!0}}]);