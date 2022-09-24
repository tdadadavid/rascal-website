"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[37970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Extraction"},s=void 0,o={unversionedId:"WhyRascal/SolutionStrategies/Extraction/index",id:"WhyRascal/SolutionStrategies/Extraction/index",title:"Extraction",description:"Synopsis",source:"@site/docs/WhyRascal/SolutionStrategies/Extraction/index.md",sourceDirName:"WhyRascal/SolutionStrategies/Extraction",slug:"/WhyRascal/SolutionStrategies/Extraction/",permalink:"/docs/WhyRascal/SolutionStrategies/Extraction/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/WhyRascal/SolutionStrategies/Extraction/index.md",tags:[],version:"current",frontMatter:{title:"Extraction"},sidebar:"tutorialSidebar",previous:{title:"Analysis",permalink:"/docs/WhyRascal/SolutionStrategies/Analysis/"},next:{title:"Synthesis",permalink:"/docs/WhyRascal/SolutionStrategies/Synthesis/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Strategies to extract facts from software systems."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extraction workflow",src:a(31403).Z,width:"714",height:"1008"})),(0,n.kt)("p",null,"How can we extract facts from the ",(0,n.kt)("em",{parentName:"p"},"System under Investigation")," (SUI) that we are interested in?\nThe extraction workflow is shown in the figure above and consists of the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First and foremost we have to determine which facts we need. This sounds trivial, but it is not. The problem is that we have to anticipate which facts will be needed in the next---not yet defined---analysis phase. A common approach is to use look-ahead and to sketch the queries that are likely to be used in the analysis phase and to determine which facts are needed for them. Start with extracting these facts and refine the extraction phase when the analysis phase is completely defined.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If relevant facts are already available (and they are reliable!) then we are done. This may happen when you are working on a system that has already been analyzed by others.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Otherwise you need the source code of the SUI. This requires:"),(0,n.kt)("p",{parentName:"li"},"**  Checking that all sources are available (and can be compiled by the host system on which they are usually compiled and executed). Due to missing or unreliable configuration management on the original system this may be a labour-intensive step that requires many iterations."),(0,n.kt)("p",{parentName:"li"},"**  Determining in which languages the sources are written. In larger systems it is common that three or more different languages are being used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If there are reliable third-party extraction tools available for this language mix, then we only have to apply them and we are done. Here again, validation is needed that the extracted facts are as expected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The extraction may require syntax analysis. This is the case when more structural properties of the source code are needed such as the flow-of-control, nesting of declarations, and the like. There two approaches here:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use a third-party parser, convert the source code to parse trees and do the further processing of these parse trees in Rascal. The advantage is that the parser can be re-used, the disadvantage is that data conversion is needed to adapt the generated parse tree to Rascal. Validate that the parser indeed accepts the language the SUI is written in, since you will not be the first who has been bitten by the language dialect monster when it turns out that the SUI uses a local variant that slightly deviates from a mainstream language.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use an existing syntax definition of the source language or write your own definition. Be aware, however, that writing a grammar for a non-trivial language is a major undertaking and may require weeks to month of work.\nWhatever approach you choose, validate that the resulting grammar is compliant with the original grammar of the source language.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The extraction phase may only require lexical analysis. This happens when more superficial, textual, facts have to be extracted like procedure calls, counts of certain statements and the like. Use Rascal's full regular expression facilities to do the lexical analysis."))),(0,n.kt)("p",null,"It may happen that the facts extracted from the source code are ",(0,n.kt)("em",{parentName:"p"},"wrong"),". Typical error classes are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extracted facts are ",(0,n.kt)("em",{parentName:"p"},"wrong"),": the extracted facts incorrectly state that procedure P calls procedure Q but this is contradicted by a source code inspection. This may happen when the fact extractor uses a conservative approximation when precise information is not statically available. In the language C, when procedure P performs an indirect call via a pointer variable, the approximation may be that P calls all procedures in the procedures.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extracted facts are ",(0,n.kt)("em",{parentName:"p"},"incomplete"),": the inheritance between certain classes in Java code is missing."))),(0,n.kt)("p",null,"The strategy to validate extracted facts differ per case but here are three strategies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Post process the extracted facts (using Rascal, of course) to obtain trivial facts about the source code such as total lines of source code and number of procedures, classes, interfaces and the like. Next validate these trivial facts with tools like wc (word and line count), grep (regular expression matching) and others.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do a manual fact extraction on a small subset of the code and compare this with the automatically extracted facts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use another tool on the same source and compare results whenever possible. A typical example is a comparison of a call relation extracted with different tools."))),(0,n.kt)("p",null,"The Rascal features that are most frequently used for extraction are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Regular expression patterns to extract textual facts from source code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Syntax definitions and concrete patterns to match syntactic structures in source code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pattern matching (used in many Rascal statements).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visits to traverse syntax trees and to locally extract information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The repertoire of built-in datatypes (like lists, maps, sets and relations) to represent the extracted facts."))))}h.isMDXComponent=!0},31403:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/define-extraction-05557091ab296ece0b761172a7016639.png"}}]);