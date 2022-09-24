"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[35065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||r;return a?i.createElement(y,o(o({ref:t},p),{},{components:a})):i.createElement(y,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={title:"Disambiguation"},o=void 0,s={unversionedId:"Rascal/Declarations/SyntaxDefinition/Disambiguation/index",id:"Rascal/Declarations/SyntaxDefinition/Disambiguation/index",title:"Disambiguation",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition/Disambiguation",slug:"/Rascal/Declarations/SyntaxDefinition/Disambiguation/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md",tags:[],version:"current",frontMatter:{title:"Disambiguation"},sidebar:"tutorialSidebar",previous:{title:"Ambiguity Diagnosis",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDiagnosis/"},next:{title:"Associativity Declaration",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Disambiguation is the definition of filters on the parse trees that ",(0,n.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s define.\nThere are several ways of defining ",(0,n.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation")," in Rascal."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"There are generally three ways of removing ambiguity from parse forests that are produced by parsers generated from ",(0,n.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first way is to add disambiguation declarations to the ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),". You can choose from:\n",(0,n.kt)("strong",{parentName:"li"},"  ",(0,n.kt)("a",{parentName:"strong",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority"},"Priorities"),"s, which can be used to define the relative priority in expression languages\n"),"  ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity"},"./Associativity"),"s, which can be used to define relative associativity between operators of\nexpression languages\n",(0,n.kt)("strong",{parentName:"li"},"  ",(0,n.kt)("a",{parentName:"strong",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Follow"},"Follow")," constraints, which can be used to implement longest match using lookahead\n"),"  ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede"},"Precede")," constraints, which can be used to implement first match using look behind\n**  ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Reserve"},"Reserve")," constraintss, which allow you to remove a finite sets of strings from a ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"\nto implement keyword reservation"),(0,n.kt)("li",{parentName:"ul"},"The second way is to add ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/Action"},"Action"),"s that will be triggered just after parsing and allow you to trim a parse forest\nusing any information necessary."),(0,n.kt)("li",{parentName:"ul"},"The third way is use the ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Statements/Visit"},"Visit")," statement on a parse tree and implement your own filter post-parsing time,\nor any other kind of program that processes ",(0,n.kt)("a",{parentName:"li",href:"../../../../Rascal/Declarations/SyntaxDefinition/ParseTrees"},"Parse Trees"),".")))}f.isMDXComponent=!0}}]);