"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[92975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Action"},o=void 0,c={unversionedId:"Rascal/Declarations/SyntaxDefinition/Action/index",id:"Rascal/Declarations/SyntaxDefinition/Action/index",title:"Action",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/Action/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition/Action",slug:"/Rascal/Declarations/SyntaxDefinition/Action/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Action/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/SyntaxDefinition/Action/index.md",tags:[],version:"current",frontMatter:{title:"Action"},sidebar:"tutorialSidebar",previous:{title:"Syntax Definition",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/"},next:{title:"Ambiguity Detection",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/"}},s={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Actions are functions that are called when parse trees are constructed (right after parsing)."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A so-called ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Action"},"Action")," is a normal rascal ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/Function"},"Function")," that overloads a ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"syntax definition"),".\nA ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),", very similar to ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type")," definitions, defines a constructor for a parse tree node.\nThis constructor is the default function, and when it is overloaded by a non-default function this overloaded function will be tried first.\nYou can overload any labeled ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition")," using the name of an alternative."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"syntax A = a: B  C;\n\npublic A a(B b, C c) {\n  return f(b, c);\n}\n")),(0,r.kt)("p",null,"In this example ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Action"},"Action")," function the a is replaced by whatever A the ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," function returns. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Action"},"Action"),"s are executed every time a parse tree is constructed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Right after parsing."),(0,r.kt)("li",{parentName:"ul"},"On the way back from a visit statement."),(0,r.kt)("li",{parentName:"ul"},"When a ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/ConcreteSyntax"},"./Concrete Syntax")," expression is executed."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/ParseTrees"},"Parse Trees"),' are constructed "manually".')),(0,r.kt)("p",null,"They can be used as a ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation")," method, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," statement, as in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'syntax E = id: Id i;\nset[Id] types = {};\n\npublic E id(Id i) {\n  if (i in types) \n    filter; // remove this parse tree and all its parents up to the first amb node\n  else \n    fail; // just build the parse tree "E = id: Id i", by defaulting to the constructor\n} \n')))}u.isMDXComponent=!0}}]);