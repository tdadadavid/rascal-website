"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[40879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),c=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,d=s["".concat(m,".").concat(f)]||s[f]||p[f]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={title:"module demo::common::Lift"},a=void 0,l={unversionedId:"Library/demo/common/Lift",id:"Library/demo/common/Lift",title:"module demo::common::Lift",description:"Usage",source:"@site/docs/Library/demo/common/Lift.md",sourceDirName:"Library/demo/common",slug:"/Library/demo/common/Lift",permalink:"/docs/Library/demo/common/Lift",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/common/Lift.md",tags:[],version:"current",frontMatter:{title:"module demo::common::Lift"},sidebar:"tutorialSidebar",previous:{title:"module demo::common::Derivative",permalink:"/docs/Library/demo/common/Derivative"},next:{title:"module demo::common::LiftTest",permalink:"/docs/Library/demo/common/LiftTest"}},m={},c=[{value:"Usage",id:"usage",level:4},{value:"alias proc",id:"demo-common-Lift-proc",level:2},{value:"alias comp",id:"demo-common-Lift-comp",level:2},{value:"function lift",id:"demo-common-Lift-lift",level:2},{value:"function tstLift",id:"demo-common-Lift-tstLift",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::common::Lift;")),(0,n.kt)("h2",{id:"demo-common-Lift-proc"},"alias proc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"))),(0,n.kt)("h2",{id:"demo-common-Lift-comp"},"alias comp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"))),(0,n.kt)("h2",{id:"demo-common-Lift-lift"},"function lift"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[comp,comp] lift(rel[proc,proc] aCalls, rel[proc,comp] aPartOf)"))),(0,n.kt)("h2",{id:"demo-common-Lift-tstLift"},"function tstLift"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstLift()"))))}p.isMDXComponent=!0}}]);