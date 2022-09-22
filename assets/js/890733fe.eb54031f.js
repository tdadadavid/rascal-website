"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[52094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={title:"Fail",keywords:["fail"]},l=void 0,s={unversionedId:"Rascal/Statements/Fail/index",id:"Rascal/Statements/Fail/index",title:"Fail",description:"Synopsis",source:"@site/docs/Rascal/Statements/Fail/index.md",sourceDirName:"Rascal/Statements/Fail",slug:"/Rascal/Statements/Fail/",permalink:"/docs/Rascal/Statements/Fail/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Fail/index.md",tags:[],version:"current",frontMatter:{title:"Fail",keywords:["fail"]},sidebar:"tutorialSidebar",previous:{title:"Do",permalink:"/docs/Rascal/Statements/Do/"},next:{title:"For",permalink:"/docs/Rascal/Statements/For/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Let the current alternative of a pattern match fail."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fail;")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," statement is only allowed in statements that are controlled by the outcome of a pattern match:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Patterns"},"Patterns")," in a ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Visit/PatternWithAction"},"Pattern with Action")," in ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/Switch"},"Switch")," or ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/Visit"},"Visit")," statement controls the statements in the action part."),(0,r.kt)("li",{parentName:"ul"},"The test (expression) of a ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/While"},"While")," or ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/Do"},"Do")," statement controls the statements in the body part."),(0,r.kt)("li",{parentName:"ul"},"The test (expressions) of a ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/For"},"For")," statement control the statements in the body part."),(0,r.kt)("li",{parentName:"ul"},"The formal parameter declaration of a ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/Function"},"Function"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," statement is associated with the innermost pattern match by which it is controlled."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," is executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the associated pattern has more alternatives, the next alternative is explored,"),(0,r.kt)("li",{parentName:"ul"},"otherwise the pattern as a whole fails.\n",(0,r.kt)("strong",{parentName:"li"}," In the case of switch or visit this means that the next case will be tried.\n")," For while, do and for, this implies that any bindings caused by the pattern are undone and that the next\nalternative in the test is tried; otherwise the loop is terminated.\n** For a function call it means that the next function declaration (or the default one) is tried.")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is an example taken from ",(0,r.kt)("a",{parentName:"p",href:"../../../Recipes/Basic/Bubble"},"Bubble"),".\nIt uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," for the case that no unsorted element can be found in the list of numbers.\nAs a result, the whole case fails and the default case is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\nrascal>public list[int] sort(list[int] numbers){\n>>>>>>>  switch(numbers){\n>>>>>>>    case [*int nums1, int p, int q, *int nums2]:\n>>>>>>>       if(p > q){\n>>>>>>>          return sort(nums1 + [q, p] + nums2);\n>>>>>>>       } else {\n>>>>>>>           fail;\n>>>>>>>       }\n>>>>>>>     default: return numbers;\n>>>>>>>   }\n>>>>>>>}\nlist[int] (list[int]): function(|prompt:///|(0,252,<1,0>,<11,1>))\nrascal>sort([10, 1, 5, 3]);\nlist[int]: [1,3,5,10]\n")))}m.isMDXComponent=!0}}]);