"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Value"},l=void 0,o={unversionedId:"Tutor/Markup/QuestionMarkup/Value/index",id:"Tutor/Markup/QuestionMarkup/Value/index",title:"Value",description:"Synopsis",source:"@site/docs/Tutor/Markup/QuestionMarkup/Value/index.md",sourceDirName:"Tutor/Markup/QuestionMarkup/Value",slug:"/Tutor/Markup/QuestionMarkup/Value/",permalink:"/docs/Tutor/Markup/QuestionMarkup/Value/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Markup/QuestionMarkup/Value/index.md",tags:[],version:"current",frontMatter:{title:"Value"},sidebar:"tutorialSidebar",previous:{title:"TypeDescriptor",permalink:"/docs/Tutor/Markup/QuestionMarkup/TypeDescriptor/"},next:{title:"Source Code Markup",permalink:"/docs/Tutor/Markup/SourceCodeMarkup/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2},{value:"Question 4",id:"question-4",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Question about the value of a Rascal expression or program."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QValue OptName: TypeDescriptor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QValue OptName: QSteps Test Listing"))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A value question presents a Rascal expression and poses a question about its value."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"OptName")," is an optional name of the question (enclosed between ",(0,r.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"]"),").\nIf ",(0,r.kt)("em",{parentName:"p"},"OptName")," is missing, the question gets a unique number as name."),(0,r.kt)("p",null,"The desired type of the expression is given by a ",(0,r.kt)("a",{parentName:"p",href:"../../../../Tutor/Markup/QuestionMarkup/TypeDescriptor"},"type descriptor"),"."),(0,r.kt)("p",null,"The first form presents the value generated for the ",(0,r.kt)("em",{parentName:"p"},"TypeDescriptor")," and asks about its value."),(0,r.kt)("p",null,"The second form allows more preparatory steps and also allows adding a listing to the question.\nThe following steps are defined:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prep: Cmd"),": execute ",(0,r.kt)("em",{parentName:"li"},"Cmd")," as preparatory step. Mostly used to import necessary libraries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make: Var = TypeDescriptor"),": create a new variable and use ",(0,r.kt)("em",{parentName:"li"},"TypeDescriptor")," to generate its value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr: Var = Exp"),": evaluate the Rascal expression ",(0,r.kt)("em",{parentName:"li"},"Exp")," and assign its value to the new variable ",(0,r.kt)("em",{parentName:"li"},"Var"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list: Lines"),": lines that will be displayed as a listing. The listing may contain a placeholder in the form of ",(0,r.kt)("inlineCode",{parentName:"li"},"<?>")," and\nends where a new step begins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test: Exp<sub>1</sub> == Exp<sub>2</sub>"),": the equality is evaluated as Rascal expression. The outcome determines the success or failure to answer this question."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hint: Text"),": a hint that will be shown when the user enters a wrong answer.")),(0,r.kt)("p",null,"The following restrictions apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each step starts at the beginning of a new line."),(0,r.kt)("li",{parentName:"ul"},"Every ",(0,r.kt)("em",{parentName:"li"},"Exp")," or ",(0,r.kt)("em",{parentName:"li"},"Cmd")," or listing may contain one or more variable references of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," Var ",(0,r.kt)("inlineCode",{parentName:"li"},">"),"."),(0,r.kt)("li",{parentName:"ul"},"Each variable reference ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," Var ",(0,r.kt)("inlineCode",{parentName:"li"},">")," is first replaced by the value of ",(0,r.kt)("em",{parentName:"li"},"Var"),".\n",(0,r.kt)("em",{parentName:"li"},"Var")," should have received a value in a preceeding ",(0,r.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"expr")," step."),(0,r.kt)("li",{parentName:"ul"},"The listing, and the expressions in the test may contain at most one placeholder ",(0,r.kt)("inlineCode",{parentName:"li"},"<?>"),".")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"See the effect of the following value questions in the Questions section below."),(0,r.kt)("h2",{id:"question-1"},"Question 1"),(0,r.kt)("p",null,"The following question can be paraphrased as: ",(0,r.kt)("em",{parentName:"p"},"I give you a union of two sets of integers, what is its value?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"QValue: <A:set[int]> + <B:same[A]>\n")),(0,r.kt)("h2",{id:"question-2"},"Question 2"),(0,r.kt)("p",null,"The following question can be paraphrased as: ",(0,r.kt)("em",{parentName:"p"},"What is the size of a given list of integers?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"QValue:\nprep: import List;\ntest: size(<A:list[int]>) == <?>\n")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," module is imported as a preparatory step."),(0,r.kt)("h2",{id:"question-3"},"Question 3"),(0,r.kt)("p",null,"The following question can be paraphrased as:\n",(0,r.kt)("em",{parentName:"p"},"I give you a union of integers or strings and an unknown set and the result of the union; what is the value of the unknown set?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"QValue:\nmake: A = set[arb[int,str]]\nmake: B = same[A]\nexpr: C = <A> + <B>\nhint: <B>\ntest: <A> + <?> == <C>\n")),(0,r.kt)("p",null,"Observe that we generate values for ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," and compute the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),".\nThe value of ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," is the answer we are looking for, and we replace it by ",(0,r.kt)("inlineCode",{parentName:"p"},"<?>")," in the posed test.\nWhen the student gives a wrong answer, we show the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," as hint."),(0,r.kt)("h3",{id:"question-4"},"Question 4"),(0,r.kt)("p",null,"The following question can be paraphrased as:\n",(0,r.kt)("em",{parentName:"p"},'Fill in the hole in the definition of funcion find to ensure that it returns all strings that contain "o".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'QValue:\ndesc: Return the strings that contain "o".\nlist:\ntext = ["andra", "moi", "ennepe", "Mousa", "polutropon"];\npublic list[str] find(list[str] text){\n  return\n    for(s <- text)\n      if(/o/ := s)\n        <?>;\n}\ntest: find(text) == ["moi", "Mousa", "polutropon"];\n')))}m.isMDXComponent=!0}}]);