"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[67176],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(i),m=a,y=f["".concat(l,".").concat(m)]||f[m]||p[m]||r;return i?n.createElement(y,o(o({ref:t},u),{},{components:i})):n.createElement(y,o({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},24481:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(83117),a=(i(67294),i(3905));const r={title:"Ambiguity Detection"},o=void 0,s={unversionedId:"Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/index",id:"Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/index",title:"Ambiguity Detection",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition/AmbiguityDetection",slug:"/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/index.md",tags:[],version:"current",frontMatter:{title:"Ambiguity Detection"},sidebar:"tutorialSidebar",previous:{title:"Action",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Action/"},next:{title:"Ambiguity Diagnosis",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDiagnosis/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Ambiguity detection helps to find ambiguities in syntax definitions."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"AmbiDexter is a tool that analyzes ",(0,a.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s, including their ",(0,a.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation"),"s, to try and determine which ambiguities it contains.\nStatic detection of ambiguity is not decidable, nevertheless AmbiDexter does a fine job at finding them. "),(0,a.kt)("h4",{id:"benefits"},"Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AmbiDexter can find ambiguity for you before testing the parser, after which you can use ","[AmbiguityDiagnosis]"," to explain it. ")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AmbiDexter is now a separate command-line tool which still needs integration"),(0,a.kt)("li",{parentName:"ul"},"AmbiDexter is not a silver bullet. It has a time-limit to stop after having searcher only so much of a language. After the time limit has expired, your ","[SyntaxDefinition]"," may still be ambiguous.")))}p.isMDXComponent=!0}}]);