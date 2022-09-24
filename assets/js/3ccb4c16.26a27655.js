"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"No Main Function"},a=void 0,c={unversionedId:"RunTimeErrors/RuntimeExceptions/NoMainFunction/index",id:"RunTimeErrors/RuntimeExceptions/NoMainFunction/index",title:"No Main Function",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/NoMainFunction/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/NoMainFunction",slug:"/RunTimeErrors/RuntimeExceptions/NoMainFunction/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoMainFunction/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/NoMainFunction/index.md",tags:[],version:"current",frontMatter:{title:"No Main Function"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/RunTimeErrors/RuntimeExceptions/Java/"},next:{title:"No Parent",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoParent/"}},s={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4}],p={toc:u};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Rascal program does not provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data RuntimeException = NoMainFunction(str message);")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,i.kt)("inlineCode",{parentName:"p"},"NoMainFunction")," is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Thrown when executing a Rascal program that does not declare a main function."))}l.isMDXComponent=!0}}]);