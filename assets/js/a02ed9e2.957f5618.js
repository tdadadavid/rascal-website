"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[32807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,v=m["".concat(u,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"module demo::lang::Exp::Concrete::NoLayout::Eval"},l=void 0,i={unversionedId:"Library/demo/lang/Exp/Concrete/NoLayout/Eval",id:"Library/demo/lang/Exp/Concrete/NoLayout/Eval",title:"module demo::lang::Exp::Concrete::NoLayout::Eval",description:"Usage",source:"@site/docs/Library/demo/lang/Exp/Concrete/NoLayout/Eval.md",sourceDirName:"Library/demo/lang/Exp/Concrete/NoLayout",slug:"/Library/demo/lang/Exp/Concrete/NoLayout/Eval",permalink:"/docs/Library/demo/lang/Exp/Concrete/NoLayout/Eval",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Exp/Concrete/NoLayout/Eval.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Exp::Concrete::NoLayout::Eval"},sidebar:"tutorialSidebar",previous:{title:"demo::lang::Exp::Concrete::NoLayout",permalink:"/docs/Library/demo/lang/Exp/Concrete/NoLayout/"},next:{title:"module demo::lang::Exp::Concrete::NoLayout::Syntax",permalink:"/docs/Library/demo/lang/Exp/Concrete/NoLayout/Syntax"}},u={},c=[{value:"Usage",id:"usage",level:4},{value:"function eval",id:"demo-lang-Exp-Concrete-NoLayout-Eval-eval",level:2},{value:"function tstEval1",id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval1",level:2},{value:"function tstEval2",id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval2",level:2},{value:"function tstEval3",id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval3",level:2},{value:"function tstEval4",id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval4",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import demo::lang::Exp::Concrete::NoLayout::Eval;")),(0,o.kt)("h2",{id:"demo-lang-Exp-Concrete-NoLayout-Eval-eval"},"function eval"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int eval(str txt)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int eval((Exp)`<IntegerLiteral l>`)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int eval((Exp)`<Exp e1>*<Exp e2>`)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int eval((Exp)`<Exp e1>+<Exp e2>`)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int eval((Exp)`(<Exp e>)`)"))),(0,o.kt)("h2",{id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval1"},"function tstEval1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test bool tstEval1()"))),(0,o.kt)("h2",{id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval2"},"function tstEval2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test bool tstEval2()"))),(0,o.kt)("h2",{id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval3"},"function tstEval3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test bool tstEval3()"))),(0,o.kt)("h2",{id:"demo-lang-Exp-Concrete-NoLayout-Eval-tstEval4"},"function tstEval4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test bool tstEval4()"))))}s.isMDXComponent=!0}}]);