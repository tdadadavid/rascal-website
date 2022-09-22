"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={title:"UnexpectedKeywordArgumentType"},i=void 0,l={unversionedId:"CompileTimeErrors/UnexpectedKeywordArgumentType/index",id:"CompileTimeErrors/UnexpectedKeywordArgumentType/index",title:"UnexpectedKeywordArgumentType",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UnexpectedKeywordArgumentType/index.md",sourceDirName:"CompileTimeErrors/UnexpectedKeywordArgumentType",slug:"/CompileTimeErrors/UnexpectedKeywordArgumentType/",permalink:"/docs/CompileTimeErrors/UnexpectedKeywordArgumentType/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/CompileTimeErrors/UnexpectedKeywordArgumentType/index.md",tags:[],version:"current",frontMatter:{title:"UnexpectedKeywordArgumentType"},sidebar:"tutorialSidebar",previous:{title:"UndeclaredVariable",permalink:"/docs/CompileTimeErrors/UndeclaredVariable/"},next:{title:"UnexpectedType",permalink:"/docs/CompileTimeErrors/UnexpectedType/"}},p={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The actual value of a keyword argument is not compatible with its declared type."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Functions may be declared to have keyword parameters. Each keyword parameters has a type, a name and a default value.\nThis error is generated when the declared type and the actual type of the keyword parameter are not compatible."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the type of the keyword parameter in the call."),(0,a.kt)("li",{parentName:"ul"},"Change the type of the keyword parameter in the function declaration.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Declare ",(0,a.kt)("inlineCode",{parentName:"p"},"incr")," function with keyword parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"delta")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int incr(int x, int delta = 1) = n + delta;\nint (int, int delta = ...): function(|prompt:///|(0,43,<1,0>,<1,43>))\n")),(0,a.kt)("p",null,"Erroneous use of ",(0,a.kt)("inlineCode",{parentName:"p"},"delta")," with a string value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>incr(3, delta="more");\n|prompt:///|(0,21,<1,0>,<1,21>): Expected int, but got str\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|\nok\n')))}d.isMDXComponent=!0}}]);