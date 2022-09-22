"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[2841],{3905:(e,o,r)=>{r.d(o,{Zo:()=>c,kt:()=>p});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function l(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?l(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function d(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=t.createContext({}),i=function(e){var o=t.useContext(m),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},c=function(e){var o=i(e.components);return t.createElement(m.Provider,{value:o},e.children)},s={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(r),p=n,C=u["".concat(m,".").concat(p)]||u[p]||s[p]||l;return r?t.createElement(C,a(a({ref:o},c),{},{components:r})):t.createElement(C,a({ref:o},c))}));function p(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var d={};for(var m in o)hasOwnProperty.call(o,m)&&(d[m]=o[m]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var i=2;i<l;i++)a[i]=r[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37283:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>m,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var t=r(83117),n=(r(67294),r(3905));const l={title:"module demo::common::ColoredTrees"},a=void 0,d={unversionedId:"Library/demo/common/ColoredTrees",id:"Library/demo/common/ColoredTrees",title:"module demo::common::ColoredTrees",description:"Usage",source:"@site/docs/Library/demo/common/ColoredTrees.md",sourceDirName:"Library/demo/common",slug:"/Library/demo/common/ColoredTrees",permalink:"/docs/Library/demo/common/ColoredTrees",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/common/ColoredTrees.md",tags:[],version:"current",frontMatter:{title:"module demo::common::ColoredTrees"},sidebar:"tutorialSidebar",previous:{title:"module demo::common::Calls",permalink:"/docs/Library/demo/common/Calls"},next:{title:"module demo::common::CountConstructors",permalink:"/docs/Library/demo/common/CountConstructors"}},m={},i=[{value:"Usage",id:"usage",level:4},{value:"data ColoredTree",id:"demo-common-ColoredTrees-ColoredTree",level:2},{value:"function cntRed",id:"demo-common-ColoredTrees-cntRed",level:2},{value:"function tstCntRed",id:"demo-common-ColoredTrees-tstCntRed",level:2},{value:"function addLeaves",id:"demo-common-ColoredTrees-addLeaves",level:2},{value:"function tstAddLeaves",id:"demo-common-ColoredTrees-tstAddLeaves",level:2},{value:"data ColoredTree",id:"demo-common-ColoredTrees-ColoredTree",level:2},{value:"function makeGreen",id:"demo-common-ColoredTrees-makeGreen",level:2},{value:"function tstMakeGreen",id:"demo-common-ColoredTrees-tstMakeGreen",level:2}],c={toc:i};function s(e){let{components:o,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::common::ColoredTrees;")),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-ColoredTree"},"data ColoredTree"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data ColoredTree  \n     = leaf(int N)\n     | red(ColoredTree left, ColoredTree right)\n     | black(ColoredTree left, ColoredTree right)\n     ;\n")),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-cntRed"},"function cntRed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int cntRed(ColoredTree t)"))),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-tstCntRed"},"function tstCntRed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstCntRed()"))),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-addLeaves"},"function addLeaves"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int addLeaves(ColoredTree t)"))),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-tstAddLeaves"},"function tstAddLeaves"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstAddLeaves()"))),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-ColoredTree"},"data ColoredTree"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data ColoredTree  \n     = green(ColoredTree left, ColoredTree right)\n     ;\n")),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-makeGreen"},"function makeGreen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ColoredTree makeGreen(ColoredTree t)"))),(0,n.kt)("h2",{id:"demo-common-ColoredTrees-tstMakeGreen"},"function tstMakeGreen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstMakeGreen()"))))}s.isMDXComponent=!0}}]);