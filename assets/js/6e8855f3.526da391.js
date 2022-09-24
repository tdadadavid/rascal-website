"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53952],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=a.createContext({}),m=function(e){var r=a.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=m(e.components);return a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=m(n),u=t,d=y["".concat(o,".").concat(u)]||y[u]||p[u]||l;return n?a.createElement(d,i(i({ref:r},c),{},{components:n})):a.createElement(d,i({ref:r},c))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15568:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(87462),t=(n(67294),n(3905));const l={title:"module analysis::grammars::Dependency"},i=void 0,s={unversionedId:"Library/analysis/grammars/Dependency",id:"Library/analysis/grammars/Dependency",title:"module analysis::grammars::Dependency",description:"Usage",source:"@site/docs/Library/analysis/grammars/Dependency.md",sourceDirName:"Library/analysis/grammars",slug:"/Library/analysis/grammars/Dependency",permalink:"/docs/Library/analysis/grammars/Dependency",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/grammars/Dependency.md",tags:[],version:"current",frontMatter:{title:"module analysis::grammars::Dependency"},sidebar:"tutorialSidebar",previous:{title:"module analysis::grammars::DefUse",permalink:"/docs/Library/analysis/grammars/DefUse"},next:{title:"module analysis::grammars::LOC",permalink:"/docs/Library/analysis/grammars/LOC"}},o={},m=[{value:"Usage",id:"usage",level:4},{value:"function symbolDependencies",id:"analysis-grammars-Dependency-symbolDependencies",level:2},{value:"function delabel",id:"analysis-grammars-Dependency-delabel",level:2}],c={toc:m};function p(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import analysis::grammars::Dependency;")),(0,t.kt)("h2",{id:"analysis-grammars-Dependency-symbolDependencies"},"function symbolDependencies"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Graph[Symbol] symbolDependencies(Grammar g)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Graph[Symbol] symbolDependencies(GrammarDefinition d)"))),(0,t.kt)("p",null,"  Compute the symbol dependency graph. This graph does not report intermediate nodes\nfor regular expressions."),(0,t.kt)("h2",{id:"analysis-grammars-Dependency-delabel"},"function delabel"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol delabel(label(_, Symbol t))")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"default Symbol delabel(Symbol x)"))))}p.isMDXComponent=!0}}]);