"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[55336],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16566:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(83117),a=(n(67294),n(3905));const s={title:"Parse"},o=void 0,i={unversionedId:"Recipes/Languages/Func/Parse/index",id:"Recipes/Languages/Func/Parse/index",title:"Parse",description:"Synopsis",source:"@site/docs/Recipes/Languages/Func/Parse/index.md",sourceDirName:"Recipes/Languages/Func/Parse",slug:"/Recipes/Languages/Func/Parse/",permalink:"/docs/Recipes/Languages/Func/Parse/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Func/Parse/index.md",tags:[],version:"current",frontMatter:{title:"Parse"},sidebar:"tutorialSidebar",previous:{title:"Load AST",permalink:"/docs/Recipes/Languages/Func/LoadAST/"},next:{title:"Lisra",permalink:"/docs/Recipes/Languages/Lisra/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Parse a Func program from a string or a file."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Parsing uses the syntax rules for a given start non-terminnal to parse a string and turn it into a parse tree.\nThe work horse is the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/ParseTree#ParseTree-parse"},"parse")," function that is available in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/ParseTree"},"ParseTree")," library."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is how to parse Func programs from a string or file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Func::Parse\n\nimport demo::lang::Func::Func;\nimport ParseTree;\n\nProg parse(loc l) = parse(#Prog, l);\nProg parse(str s) = parse(#Prog, s);\n// end::module[]\n\n")),(0,a.kt)("p",null,"Let's try this on example ",(0,a.kt)("inlineCode",{parentName:"p"},"F0.func"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"fact(n) = if n <= 1 then\n             1 \n          else \n             n * fact(n-1)\n          end\n")),(0,a.kt)("p",null,"First, we try the version with a string argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::lang::Func::Parse;\nok\nrascal>import demo::lang::Func::programs::F0;\nok\nrascal>parse(F0);\nProg: (Prog) `fact(n) = if n <= 1 then\n             1 \n          else \n             n * fact(n-1)\n          end`\n")),(0,a.kt)("p",null,"This must be defined as success: we get the original program and its parse tree back.\nNext, we try the same from a file. We use the scheme ",(0,a.kt)("inlineCode",{parentName:"p"},"std")," that refers to files that reside in the Rascal library.\nSee ","[$Rascal:Expressions/Values/Location]"," for further details on other schemes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>parse(|std:///demo/lang/Func/programs/F0.func|);\nProg: (Prog) `fact(n) = if n <= 1 then\n             1 \n          else \n             n * fact(n-1)\n          end`\n")))}u.isMDXComponent=!0}}]);