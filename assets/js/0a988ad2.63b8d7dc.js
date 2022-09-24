"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[85292],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>y});var t=a(67294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),y=l,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||n;return a?t.createElement(d,o(o({ref:r},p),{},{components:a})):t.createElement(d,o({ref:r},p))}));function y(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50533:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=a(87462),l=(a(67294),a(3905));const n={title:"module analysis::m3::FlowGraph"},o=void 0,i={unversionedId:"Library/analysis/m3/FlowGraph",id:"Library/analysis/m3/FlowGraph",title:"module analysis::m3::FlowGraph",description:"Usage",source:"@site/docs/Library/analysis/m3/FlowGraph.md",sourceDirName:"Library/analysis/m3",slug:"/Library/analysis/m3/FlowGraph",permalink:"/docs/Library/analysis/m3/FlowGraph",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/m3/FlowGraph.md",tags:[],version:"current",frontMatter:{title:"module analysis::m3::FlowGraph"},sidebar:"tutorialSidebar",previous:{title:"module analysis::m3::Core",permalink:"/docs/Library/analysis/m3/Core"},next:{title:"module analysis::m3::Registry",permalink:"/docs/Library/analysis/m3/Registry"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"data M3",id:"analysis-m3-FlowGraph-M3",level:2},{value:"alias BasicBlocks",id:"analysis-m3-FlowGraph-BasicBlocks",level:2},{value:"alias FlowGraph",id:"analysis-m3-FlowGraph-FlowGraph",level:2},{value:"data EdgeProperty",id:"analysis-m3-FlowGraph-EdgeProperty",level:2}],p={toc:c};function u(e){let{components:r,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import analysis::m3::FlowGraph;")),(0,l.kt)("h2",{id:"analysis-m3-FlowGraph-M3"},"data M3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data M3 (\n    rel[loc decl, BasicBlocks blocks] basicBlocks = {},\n    rel[loc decl, FlowGraph graph] dataFlow = {},\n    rel[loc decl, FlowGraph graph] controlFlow = {}\n)\n")),(0,l.kt)("h2",{id:"analysis-m3-FlowGraph-BasicBlocks"},"alias BasicBlocks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[loc whole, list[loc] parts]"))),(0,l.kt)("h2",{id:"analysis-m3-FlowGraph-FlowGraph"},"alias FlowGraph"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[loc from, set[EdgeProperty] properties, loc to]"))),(0,l.kt)("h2",{id:"analysis-m3-FlowGraph-EdgeProperty"},"data EdgeProperty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data EdgeProperty  \n     = trueCondition()\n     | falseCondition()\n     ;\n")))}u.isMDXComponent=!0}}]);