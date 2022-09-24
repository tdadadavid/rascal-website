"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[87330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={title:"Analysis"},i=void 0,o={unversionedId:"WhyRascal/SolutionStrategies/Analysis/index",id:"WhyRascal/SolutionStrategies/Analysis/index",title:"Analysis",description:"Synopsis",source:"@site/docs/WhyRascal/SolutionStrategies/Analysis/index.md",sourceDirName:"WhyRascal/SolutionStrategies/Analysis",slug:"/WhyRascal/SolutionStrategies/Analysis/",permalink:"/docs/WhyRascal/SolutionStrategies/Analysis/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/WhyRascal/SolutionStrategies/Analysis/index.md",tags:[],version:"current",frontMatter:{title:"Analysis"},sidebar:"tutorialSidebar",previous:{title:"Solution Strategies",permalink:"/docs/WhyRascal/SolutionStrategies/"},next:{title:"Extraction",permalink:"/docs/WhyRascal/SolutionStrategies/Extraction/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Strategies to analyze software systems."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The analysis workflow is shown in the figure below and consists of two steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine the results that are needed for the synthesis phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Write the Rascal code to perform the analysis. This may amount to:"),(0,r.kt)("p",{parentName:"li"},"**  Reordering extracted facts to make them more suitable for the synthesis phase."),(0,r.kt)("p",{parentName:"li"},"**  Enriching extracted facts. Examples are computing transitive closures of extracted facts\n(e.g., A may call B in one or more calls), or performing data reduction by abstracting aways details\n(i.e., reducing a program to a finite automaton)."),(0,r.kt)("p",{parentName:"li"},"**  Combining enriched, extracted, facts to create new facts."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Analysis,Workflow",src:a(91231).Z,width:"714",height:"361"})),(0,r.kt)("p",null,"As before, validate, validate and validate the results of analysis. Essentially the same approach can be used as for validating the facts. Manual checking of answers on random samples of the SUI may be mandatory. It also happens frequently that answers inspire new queries that lead to new answers, and so on."),(0,r.kt)("p",null,"The Rascal features that are frequently used for analysis are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List, set and map comprehensions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The built-in operators and library functions, in particular for lists, maps, sets and relations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pattern matching (used in many Rascal statements).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visits and switches to further process extracted facts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The solve statement for constraint solving.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rewrite rules to simplify results and to enforce constraints."))))}u.isMDXComponent=!0},91231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/define-analysis-e475ec1a02621a48c955412b801ef4f8.png"}}]);