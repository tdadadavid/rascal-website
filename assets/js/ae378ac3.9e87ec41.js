"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[49801],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),u=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return i.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?i.createElement(f,a(a({ref:r},c),{},{components:t})):i.createElement(f,a({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83122:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=t(87462),n=(t(67294),t(3905));const l={title:"module util::SemVer"},a=void 0,o={unversionedId:"Library/util/SemVer",id:"Library/util/SemVer",title:"module util::SemVer",description:"Usage",source:"@site/docs/Library/util/SemVer.md",sourceDirName:"Library/util",slug:"/Library/util/SemVer",permalink:"/docs/Library/util/SemVer",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/util/SemVer.md",tags:[],version:"current",frontMatter:{title:"module util::SemVer"},sidebar:"tutorialSidebar",previous:{title:"module util::Reflective",permalink:"/docs/Library/util/Reflective"},next:{title:"module util::ShellExec",permalink:"/docs/Library/util/ShellExec"}},s={},u=[{value:"Usage",id:"usage",level:4},{value:"function satisfiesVersion",id:"util-SemVer-satisfiesVersion",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function lessVersion",id:"util-SemVer-lessVersion",level:2},{value:"function lessEqualVersion",id:"util-SemVer-lessEqualVersion",level:2},{value:"function greaterVersion",id:"util-SemVer-greaterVersion",level:2},{value:"function greaterEqualVersion",id:"util-SemVer-greaterEqualVersion",level:2},{value:"function equalVersion",id:"util-SemVer-equalVersion",level:2},{value:"function getRascalVersion",id:"util-SemVer-getRascalVersion",level:2},{value:"function getRascalRuntimeVersion",id:"util-SemVer-getRascalRuntimeVersion",level:2},{value:"function getRascalCompilerVersion",id:"util-SemVer-getRascalCompilerVersion",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import util::SemVer;")),(0,n.kt)("h2",{id:"util-SemVer-satisfiesVersion"},"function satisfiesVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool satisfiesVersion(str version, str rangeSet)"))),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Semantic Versioning"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Check that a given version string satisfies a range-set as defined by:\n(See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/npm/node-semver"},"https://github.com/npm/node-semver"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"range-set  ::= range ( logical-or range ) *\nlogical-or ::= ( ' ' ) * '||' ( ' ' ) *\nrange      ::= hyphen | simple ( ' ' simple ) * | ''\nhyphen     ::= partial ' - ' partial\nsimple     ::= primitive | partial | tilde | caret\nprimitive  ::= ( '<' | '>' | '>=' | '<=' | '=' | ) partial\npartial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?\nxr         ::= 'x' | 'X' | '*' | nr\nnr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *\ntilde      ::= '~' partial\ncaret      ::= '^' partial\nqualifier  ::= ( '-' pre )? ( '+' build )?\npre        ::= parts\nbuild      ::= parts\nparts      ::= part ( '.' part ) *\npart       ::= nr | [-0-9A-Za-z]+\n")),(0,n.kt)("h2",{id:"util-SemVer-lessVersion"},"function lessVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool lessVersion(str version1, str version2)"))),(0,n.kt)("h2",{id:"util-SemVer-lessEqualVersion"},"function lessEqualVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool lessEqualVersion(str version1, str version2)"))),(0,n.kt)("h2",{id:"util-SemVer-greaterVersion"},"function greaterVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool greaterVersion(str version1, str version2)"))),(0,n.kt)("h2",{id:"util-SemVer-greaterEqualVersion"},"function greaterEqualVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool greaterEqualVersion(str version1, str version2)"))),(0,n.kt)("h2",{id:"util-SemVer-equalVersion"},"function equalVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool equalVersion(str version1, str version2)"))),(0,n.kt)("h2",{id:"util-SemVer-getRascalVersion"},"function getRascalVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getRascalVersion()"))),(0,n.kt)("h2",{id:"util-SemVer-getRascalRuntimeVersion"},"function getRascalRuntimeVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getRascalRuntimeVersion()"))),(0,n.kt)("h2",{id:"util-SemVer-getRascalCompilerVersion"},"function getRascalCompilerVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getRascalCompilerVersion()"))))}p.isMDXComponent=!0}}]);