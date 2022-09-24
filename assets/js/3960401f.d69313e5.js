"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[63324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Location AddSegment",keywords:["+"]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/Location/AddSegment/index",id:"Rascal/Expressions/Values/Location/AddSegment/index",title:"Location AddSegment",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Location/AddSegment/index.md",sourceDirName:"Rascal/Expressions/Values/Location/AddSegment",slug:"/Rascal/Expressions/Values/Location/AddSegment/",permalink:"/docs/Rascal/Expressions/Values/Location/AddSegment/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Location/AddSegment/index.md",tags:[],version:"current",frontMatter:{title:"Location AddSegment",keywords:["+"]},sidebar:"tutorialSidebar",previous:{title:"Location",permalink:"/docs/Rascal/Expressions/Values/Location/"},next:{title:"Location Equal",permalink:"/docs/Rascal/Expressions/Values/Location/Equal/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Locations can be concatenated with strings to add segments to the path component"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Loc + Str")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Loc")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Str")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Loc + Str")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loc"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Adds a segment to the path component of a location.\nThis concatenation introduces a path separator (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),") automatically."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>|tmp:///myDir| + "myFile";\nloc: |tmp:///myDir/myFile|\n')),(0,r.kt)("p",null,"To get the original back, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>(|tmp:///myDir| + "myFile").parent\nloc: |tmp:///myDir|\n')))}d.isMDXComponent=!0}}]);