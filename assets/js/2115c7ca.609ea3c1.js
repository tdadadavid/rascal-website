"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[786],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>p});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),c=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},m=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,f=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return r?t.createElement(f,l(l({ref:a},m),{},{components:r})):t.createElement(f,l({ref:a},m))}));function p(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91428:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(83117),n=(r(67294),r(3905));const i={title:"module lang::rascal::grammar::definition::Literals"},l=void 0,s={unversionedId:"Library/lang/rascal/grammar/definition/Literals",id:"Library/lang/rascal/grammar/definition/Literals",title:"module lang::rascal::grammar::definition::Literals",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/definition/Literals.md",sourceDirName:"Library/lang/rascal/grammar/definition",slug:"/Library/lang/rascal/grammar/definition/Literals",permalink:"/docs/Library/lang/rascal/grammar/definition/Literals",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/grammar/definition/Literals.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::definition::Literals"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::definition::Layout",permalink:"/docs/Library/lang/rascal/grammar/definition/Layout"},next:{title:"module lang::rascal::grammar::definition::Modules",permalink:"/docs/Library/lang/rascal/grammar/definition/Modules"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function literals",id:"lang-rascal-grammar-definition-Literals-literals",level:2},{value:"function literal",id:"lang-rascal-grammar-definition-Literals-literal",level:2},{value:"function ciliteral",id:"lang-rascal-grammar-definition-Literals-ciliteral",level:2},{value:"function str2syms",id:"lang-rascal-grammar-definition-Literals-str2syms",level:2},{value:"function cistr2syms",id:"lang-rascal-grammar-definition-Literals-cistr2syms",level:2},{value:"function unescapeLiteral",id:"lang-rascal-grammar-definition-Literals-unescapeLiteral",level:2},{value:"function character",id:"lang-rascal-grammar-definition-Literals-character",level:2},{value:"function unescapeLiteral",id:"lang-rascal-grammar-definition-Literals-unescapeLiteral",level:2}],m={toc:c};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::definition::Literals;")),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-literals"},"function literals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grammar literals(Grammar g)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-literal"},"function literal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Production literal(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-ciliteral"},"function ciliteral"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Production ciliteral(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-str2syms"},"function str2syms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Symbol] str2syms(str x)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-cistr2syms"},"function cistr2syms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Symbol] cistr2syms(str x)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-unescapeLiteral"},"function unescapeLiteral"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str unescapeLiteral(CaseInsensitiveStringConstant s)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str unescapeLiteral(StringConstant s)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-character"},"function character"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str character(StringCharacter c)"))),(0,n.kt)("h2",{id:"lang-rascal-grammar-definition-Literals-unescapeLiteral"},"function unescapeLiteral"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str unescapeLiteral(str s)"))))}u.isMDXComponent=!0}}]);