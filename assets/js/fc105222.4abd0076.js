"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[13213],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>p});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return t?n.createElement(g,o(o({ref:r},f),{},{components:t})):n.createElement(g,o({ref:r},f))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69855:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=t(83117),i=(t(67294),t(3905));const l={title:"module lang::sdf2::filters::DirectThenCountPreferAvoid"},o=void 0,a={unversionedId:"Library/lang/sdf2/filters/DirectThenCountPreferAvoid",id:"Library/lang/sdf2/filters/DirectThenCountPreferAvoid",title:"module lang::sdf2::filters::DirectThenCountPreferAvoid",description:"Usage",source:"@site/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid.md",sourceDirName:"Library/lang/sdf2/filters",slug:"/Library/lang/sdf2/filters/DirectThenCountPreferAvoid",permalink:"/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid.md",tags:[],version:"current",frontMatter:{title:"module lang::sdf2::filters::DirectThenCountPreferAvoid"},sidebar:"tutorialSidebar",previous:{title:"module lang::sdf2::filters::DetectCycles",permalink:"/docs/Library/lang/sdf2/filters/DetectCycles"},next:{title:"module lang::sdf2::filters::FilterCycles",permalink:"/docs/Library/lang/sdf2/filters/FilterCycles"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function directThenCountPreferAvoidFilter",id:"lang-sdf2-filters-DirectThenCountPreferAvoid-directThenCountPreferAvoidFilter",level:2},{value:"function getTags",id:"lang-sdf2-filters-DirectThenCountPreferAvoid-getTags",level:2}],f={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::sdf2::filters::DirectThenCountPreferAvoid;")),(0,i.kt)("h2",{id:"lang-sdf2-filters-DirectThenCountPreferAvoid-directThenCountPreferAvoidFilter"},"function directThenCountPreferAvoidFilter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&T <:Tree directThenCountPreferAvoidFilter(amb(set[&T <:Tree] alternatives))"))),(0,i.kt)("p",null,"Import his module if you want prefer/avoid filtering with counting enabled for your grammar. Use @prefer and @avoid to\nlabel alternatives."),(0,i.kt)("h2",{id:"lang-sdf2-filters-DirectThenCountPreferAvoid-getTags"},"function getTags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[list[value]] getTags(list[Tree] ts)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[value] getTags(Tree t)"))))}u.isMDXComponent=!0}}]);