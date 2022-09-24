"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[37837],{3905:(n,a,e)=>{e.d(a,{Zo:()=>L,kt:()=>p});var r=e(67294);function i(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function t(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?t(Object(e),!0).forEach((function(a){i(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function o(n,a){if(null==n)return{};var e,r,i=function(n,a){if(null==n)return{};var e,r,i={},t=Object.keys(n);for(r=0;r<t.length;r++)e=t[r],a.indexOf(e)>=0||(i[e]=n[e]);return i}(n,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(r=0;r<t.length;r++)e=t[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var m=r.createContext({}),s=function(n){var a=r.useContext(m),e=a;return n&&(e="function"==typeof n?n(a):l(l({},a),n)),e},L=function(n){var a=s(n.components);return r.createElement(m.Provider,{value:a},n.children)},g={inlineCode:"code",wrapper:function(n){var a=n.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(n,a){var e=n.components,i=n.mdxType,t=n.originalType,m=n.parentName,L=o(n,["components","mdxType","originalType","parentName"]),u=s(e),p=i,c=u["".concat(m,".").concat(p)]||u[p]||g[p]||t;return e?r.createElement(c,l(l({ref:a},L),{},{components:e})):r.createElement(c,l({ref:a},L))}));function p(n,a){var e=arguments,i=a&&a.mdxType;if("string"==typeof n||i){var t=e.length,l=new Array(t);l[0]=u;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=n,o.mdxType="string"==typeof n?n:i,l[1]=o;for(var s=2;s<t;s++)l[s]=e[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},52051:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>s});var r=e(87462),i=(e(67294),e(3905));const t={title:"module analysis::linearprogramming::LLLinearProgramming"},l=void 0,o={unversionedId:"Library/analysis/linearprogramming/LLLinearProgramming",id:"Library/analysis/linearprogramming/LLLinearProgramming",title:"module analysis::linearprogramming::LLLinearProgramming",description:"Usage",source:"@site/docs/Library/analysis/linearprogramming/LLLinearProgramming.md",sourceDirName:"Library/analysis/linearprogramming",slug:"/Library/analysis/linearprogramming/LLLinearProgramming",permalink:"/docs/Library/analysis/linearprogramming/LLLinearProgramming",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/linearprogramming/LLLinearProgramming.md",tags:[],version:"current",frontMatter:{title:"module analysis::linearprogramming::LLLinearProgramming"},sidebar:"tutorialSidebar",previous:{title:"module analysis::linearprogramming::LinearProgramming",permalink:"/docs/Library/analysis/linearprogramming/"},next:{title:"analysis::linearprogramming",permalink:"/docs/Library/analysis/linearprogramming/"}},m={},s=[{value:"Usage",id:"usage",level:4},{value:"alias LLCoefficients",id:"analysis-linearprogramming-LLLinearProgramming-LLCoefficients",level:2},{value:"data LLObjectiveFun",id:"analysis-linearprogramming-LLLinearProgramming-LLObjectiveFun",level:2},{value:"data ConstraintType",id:"analysis-linearprogramming-LLLinearProgramming-ConstraintType",level:2},{value:"data LLConstraint",id:"analysis-linearprogramming-LLLinearProgramming-LLConstraint",level:2},{value:"alias LLConstraints",id:"analysis-linearprogramming-LLLinearProgramming-LLConstraints",level:2},{value:"alias LLVariableVals",id:"analysis-linearprogramming-LLLinearProgramming-LLVariableVals",level:2},{value:"data LLSolution",id:"analysis-linearprogramming-LLLinearProgramming-LLSolution",level:2},{value:"function llRunObjFul",id:"analysis-linearprogramming-LLLinearProgramming-llRunObjFul",level:2},{value:"function padToSize",id:"analysis-linearprogramming-LLLinearProgramming-padToSize",level:2},{value:"function normalize",id:"analysis-linearprogramming-LLLinearProgramming-normalize",level:2},{value:"function llOptimize",id:"analysis-linearprogramming-LLLinearProgramming-llOptimize",level:2}],L={toc:s};function g(n){let{components:a,...e}=n;return(0,i.kt)("wrapper",(0,r.Z)({},L,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::linearprogramming::LLLinearProgramming;")),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLCoefficients"},"alias LLCoefficients"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[num]"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLObjectiveFun"},"data LLObjectiveFun"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data LLObjectiveFun  \n     = llObjFun(LLCoefficients coefficients, num const)\n     ;\n")),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-ConstraintType"},"data ConstraintType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data ConstraintType  \n     = leq()\n     | eq()\n     | geq()\n     ;\n")),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLConstraint"},"data LLConstraint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data LLConstraint  \n     = llConstraint(LLCoefficients coefficients,\n                ConstraintType ctype, num const)\n     ;\n")),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLConstraints"},"alias LLConstraints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[LLConstraint]"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLVariableVals"},"alias LLVariableVals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[num]"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-LLSolution"},"data LLSolution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data LLSolution  \n     = llSolution(LLVariableVals varVals, num funVal)\n     ;\n")),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-llRunObjFul"},"function llRunObjFul"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num llRunObjFul(LLObjectiveFun f, LLVariableVals vals)"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-padToSize"},"function padToSize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[num] padToSize(list[num] l, int s)"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-normalize"},"function normalize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuple[LLConstraints constraints, LLObjectiveFun f] normalize(LLConstraints constraints, LLObjectiveFun f)"))),(0,i.kt)("h2",{id:"analysis-linearprogramming-LLLinearProgramming-llOptimize"},"function llOptimize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[LLSolution]  llOptimize(bool minimize, bool nonZero,  \t\t   LLConstraints constraints, LLObjectiveFun f)"))))}g.isMDXComponent=!0}}]);