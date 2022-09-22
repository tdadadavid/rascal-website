"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[1249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const l={title:"Keyboard Shortcuts"},o=void 0,i={unversionedId:"RascalShell/Keyboard/index",id:"RascalShell/Keyboard/index",title:"Keyboard Shortcuts",description:"Synopsis",source:"@site/docs/RascalShell/Keyboard/index.md",sourceDirName:"RascalShell/Keyboard",slug:"/RascalShell/Keyboard/",permalink:"/docs/RascalShell/Keyboard/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RascalShell/Keyboard/index.md",tags:[],version:"current",frontMatter:{title:"Keyboard Shortcuts"},sidebar:"tutorialSidebar",previous:{title:"Command History",permalink:"/docs/RascalShell/History/"},next:{title:"Read Eval Print Loop (REPL)",permalink:"/docs/RascalShell/REPL/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Keybord shortcuts."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"When handling console input, RascalShell supports a subset of the shortcuts provided by\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GNU_Readline%5BGNU"},"https://en.wikipedia.org/wiki/GNU_Readline[GNU")," Readline]"),(0,a.kt)("p",null,"Some convenient shortcuts are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Ctrl+a")),(0,a.kt)("th",{parentName:"tr",align:null},"Move cursor to begin of line."))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl+d")),(0,a.kt)("td",{parentName:"tr",align:null},"EOF marker, closes the current RascalShell (equivalent to the")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command (",(0,a.kt)("inlineCode",{parentName:"td"},"quit"),")."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl+e")),(0,a.kt)("td",{parentName:"tr",align:null},"Move cursor to end of line.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl+k")),(0,a.kt)("td",{parentName:"tr",align:null},"Kill remainder of line after cursor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Ctrl+l")),(0,a.kt)("td",{parentName:"tr",align:null},"Clear screen.")))))}d.isMDXComponent=!0}}]);