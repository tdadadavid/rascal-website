"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[78029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),c=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),y=n,d=m["".concat(o,".").concat(y)]||m[y]||p[y]||s;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(83117),n=(r(67294),r(3905));const s={title:"module analysis::m3::Registry"},a=void 0,l={unversionedId:"Library/analysis/m3/Registry",id:"Library/analysis/m3/Registry",title:"module analysis::m3::Registry",description:"Usage",source:"@site/docs/Library/analysis/m3/Registry.md",sourceDirName:"Library/analysis/m3",slug:"/Library/analysis/m3/Registry",permalink:"/docs/Library/analysis/m3/Registry",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/m3/Registry.md",tags:[],version:"current",frontMatter:{title:"module analysis::m3::Registry"},sidebar:"tutorialSidebar",previous:{title:"module analysis::m3::FlowGraph",permalink:"/docs/Library/analysis/m3/FlowGraph"},next:{title:"module analysis::m3::TypeSymbol",permalink:"/docs/Library/analysis/m3/TypeSymbol"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function registerProject",id:"analysis-m3-Registry-registerProject",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"function unregisterProject",id:"analysis-m3-Registry-unregisterProject",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Benefits",id:"benefits-1",level:4},{value:"Pitfalls",id:"pitfalls-1",level:4},{value:"function unregisterProjectSchemes",id:"analysis-m3-Registry-unregisterProjectSchemes",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Benefits",id:"benefits-2",level:4},{value:"Pitfalls",id:"pitfalls-2",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import analysis::m3::Registry;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"in memory database for ","[analysis/m3/Core]"," models for resolving hyperlinks"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The functions in this file are used to register m3 models in a global in-memory database. When a source location is clicked this database is used used to resolve logical source locations, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"|java+class:///java/lang/Object|")," to physical source locations such as ",(0,n.kt)("inlineCode",{parentName:"p"},"|file:///usr/lib/blabla.java|"),"."),(0,n.kt)("h2",{id:"analysis-m3-Registry-registerProject"},"function registerProject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void registerProject(loc project, M3 model)"))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"Register an M3 model for a certain project name."),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"The effect of registering a project is that the m3 URI resolver knows how to find the physical source location\nfor qualified names."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Registry#analysis::m3::Registry-registerProject"},"register project")," will be called usually as a side-effect of a function that extracts a model for\na specific language.  "),(0,n.kt)("h4",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this enables qualified names as ",(0,n.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Location"},"Location"),"s to be hyperlinks in the IDE")),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the registry is a global store that will retain links to M3 models even when they are not in use anymore. The\nprogrammer should take care to call ",(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/m3/Registry#analysis::m3::Registry-unregisterProject"},"unregister project")," to prevent memory leakage.")),(0,n.kt)("h2",{id:"analysis-m3-Registry-unregisterProject"},"function unregisterProject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void unregisterProject(loc project, M3 model)"))),(0,n.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,n.kt)("p",null,"unregister an M3 model for a certain project name."),(0,n.kt)("h4",{id:"description-2"},"Description"),(0,n.kt)("p",null,"The effect of unregistering a project is that all references will be\nremoved from the registry, clearing memory."),(0,n.kt)("h4",{id:"benefits-1"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this cleans up the memory used by the registry")),(0,n.kt)("h4",{id:"pitfalls-1"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if a different model is used for unregistering than for registering,\nthere could be a memory leak of remaining schemes and their respective locations.")),(0,n.kt)("h2",{id:"analysis-m3-Registry-unregisterProjectSchemes"},"function unregisterProjectSchemes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void unregisterProjectSchemes(loc project, set[str] schemes)"))),(0,n.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,n.kt)("p",null,"unregister an M3 model for a set of given schemes"),(0,n.kt)("h4",{id:"description-3"},"Description"),(0,n.kt)("p",null,"The effect of unregistering a project is that all references will be\nremoved from the registry, clearing memory."),(0,n.kt)("h4",{id:"benefits-2"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This cleans up the memory used by the registry, and by giving all possible\nschemes for a certain language the chance is high there are not dangling\nentries afterwards.")),(0,n.kt)("h4",{id:"pitfalls-2"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If more schemes were registered than are unregistered here, there is a\nmemory leak.")))}p.isMDXComponent=!0}}]);