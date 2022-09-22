"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[57031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const l={title:"Tuple Pattern",keywords:["<",">"]},o=void 0,s={unversionedId:"Rascal/Patterns/Tuple/index",id:"Rascal/Patterns/Tuple/index",title:"Tuple Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Tuple/index.md",sourceDirName:"Rascal/Patterns/Tuple",slug:"/Rascal/Patterns/Tuple/",permalink:"/docs/Rascal/Patterns/Tuple/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Patterns/Tuple/index.md",tags:[],version:"current",frontMatter:{title:"Tuple Pattern",keywords:["<",">"]},sidebar:"tutorialSidebar",previous:{title:"Set Pattern",permalink:"/docs/Rascal/Patterns/Set/"},next:{title:"Type Constrained Pattern",permalink:"/docs/Rascal/Patterns/TypeConstrained/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Tuple in abstract pattern."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A tuple pattern matches a tuple value, provided that ",(0,a.kt)("em",{parentName:"p"},"Pat"),(0,a.kt)("sub",null,"1"),", ",(0,a.kt)("em",{parentName:"p"},"Pat"),(0,a.kt)("sub",null,"2"),", ..., ",(0,a.kt)("em",{parentName:"p"},"Pat"),"~n~  match the elements of that tuple in order."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>if(<A, B, C> := <13, false, "abc">)\n>>>>>>>   println("A = <A>, B = <B>, C = <C>");\n   println("A = <A>, B = <B>, C = <C>");\nA = 13, B = false, C = abc\nok\n')))}u.isMDXComponent=!0}}]);