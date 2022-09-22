"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[91512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const l={title:"Help Command"},o=void 0,i={unversionedId:"RascalShell/Commands/Help/index",id:"RascalShell/Commands/Help/index",title:"Help Command",description:"Synopsis",source:"@site/docs/RascalShell/Commands/Help/index.md",sourceDirName:"RascalShell/Commands/Help",slug:"/RascalShell/Commands/Help/",permalink:"/docs/RascalShell/Commands/Help/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RascalShell/Commands/Help/index.md",tags:[],version:"current",frontMatter:{title:"Help Command"},sidebar:"tutorialSidebar",previous:{title:"Edit Command",permalink:"/docs/RascalShell/Commands/Edit/"},next:{title:"Quit Command",permalink:"/docs/RascalShell/Commands/Quit/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Get a reminder of the shell commands."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":help"),"  ")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>:help\n:help\nWelcome to the Rascal command shell.\n\nShell commands:\n:help                      Prints this message\n:quit or EOF               Quits the shell\n:set <option> <expression> Sets an option\ne.g. profiling    true/false\n     tracing      true/false\n     errors       true/false\n:edit <modulename>         Opens an editor for that module\n:test                      Runs all unit tests currently loaded\n\nExample rascal statements and declarations:\n1 + 1;                     Expressions simply print their output and (static) type\nint a;                     Declarations allocate a name in the current scope\na = 1;                     Assignments store a value in a (optionally previously declared) variable\nint a = 1;                 Declaration with initialization\nimport IO;                 Importing a module makes its public members available\nprintln("Hello World")     Function calling\n\nPlease read the manual for further information\nok\n')))}m.isMDXComponent=!0}}]);