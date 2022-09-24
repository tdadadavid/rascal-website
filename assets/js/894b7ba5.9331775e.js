"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[23401],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(b,l(l({ref:r},c),{},{components:t})):i.createElement(b,l({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4859:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(87462),n=(t(67294),t(3905));const a={title:"UnitializedVariable"},l=void 0,o={unversionedId:"CompileTimeErrors/UnitializedVariable/index",id:"CompileTimeErrors/UnitializedVariable/index",title:"UnitializedVariable",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UnitializedVariable/index.md",sourceDirName:"CompileTimeErrors/UnitializedVariable",slug:"/CompileTimeErrors/UnitializedVariable/",permalink:"/docs/CompileTimeErrors/UnitializedVariable/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/CompileTimeErrors/UnitializedVariable/index.md",tags:[],version:"current",frontMatter:{title:"UnitializedVariable"},sidebar:"tutorialSidebar",previous:{title:"UninitializedPatternMatch",permalink:"/docs/CompileTimeErrors/UninitializedPatternMatch/"},next:{title:"UnsupportedOperation",permalink:"/docs/CompileTimeErrors/UnsupportedOperation/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Use of a variable that has not been initialized."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Declarations/Variable"},"variable")," has to be initialized before it can be used.\nThis error is generated when an uninitialzed variable is used."),(0,n.kt)("p",null,"Remedy: assign a value to the variable before its use:"),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Using the uninitialized variable ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," gives an error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>x + 5;\nok\n")),(0,n.kt)("p",null,"This can be avoided by first initializing ",(0,n.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>x = 3;\nint: 3\nrascal>x + 5;\nint: 8\n")))}u.isMDXComponent=!0}}]);