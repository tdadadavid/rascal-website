"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[18779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"Pretty"},o=void 0,i={unversionedId:"Recipes/Languages/Lisra/Pretty/index",id:"Recipes/Languages/Lisra/Pretty/index",title:"Pretty",description:"Synopsis",source:"@site/docs/Recipes/Languages/Lisra/Pretty/index.md",sourceDirName:"Recipes/Languages/Lisra/Pretty",slug:"/Recipes/Languages/Lisra/Pretty/",permalink:"/docs/Recipes/Languages/Lisra/Pretty/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Lisra/Pretty/index.md",tags:[],version:"current",frontMatter:{title:"Pretty"},sidebar:"tutorialSidebar",previous:{title:"Parse",permalink:"/docs/Recipes/Languages/Lisra/Parse/"},next:{title:"Runtime",permalink:"/docs/Recipes/Languages/Lisra/Runtime/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A Lisp pretty printer."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The purpose of a pretty printer is to convert an internal structure to text.\nWe define here the simplest possible solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Lisra::Pretty\n\nimport demo::lang::Lisra::Runtime;\n\nstr pretty(Integer(n))  = "<n>";\nstr pretty(Atom(name))  = name;\nstr pretty(List(list[Lval] elms)) = "( <for(Lval e <- elms){><pretty(e)> <}>)";\nstr pretty(Closure(fn)) = "Closure(<fn>)";\ntest bool pretty2() = pretty(Atom("abc")) == "abc";\ntest bool pretty3() = pretty(List([])) == "( )";\ntest bool pretty4() = pretty(List([Integer(123)])) == "( 123 )";\ntest bool pretty5() = pretty(List([Integer(123), Atom("abc")])) == "( 123 abc )";\n\n')),(0,a.kt)("p",null,"Compare the definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"pretty")," with that of ",(0,a.kt)("inlineCode",{parentName:"p"},"parse"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"Lval parse(str txt);\nstr pretty(Lval x);\n")),(0,a.kt)("p",null,"For a well-designed pair of ",(0,a.kt)("inlineCode",{parentName:"p"},"parse"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"pretty")," functions, the latter is the inverse of the former.\nIn other words, for every ",(0,a.kt)("inlineCode",{parentName:"p"},"L")," the following should hold:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"parse(pretty(L)) == L\n")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Lisra::Runtime;\nok\nrascal>import demo::lang::Lisra::Pretty;\nok\nrascal>pretty(Integer(42));\nstr: "42"\nrascal>pretty(Atom("x"));\nstr: "x"\nrascal>L = List([Atom("+"), Integer(5), Integer(7)]);\nLval: List([\n    Atom("+"),\n    Integer(5),\n    Integer(7)\n  ])\nrascal>pretty(L);\nstr: "( + 5 7 )"\n')),(0,a.kt)("p",null,"Now let's explore whether ",(0,a.kt)("inlineCode",{parentName:"p"},"pretty")," is indeed the inverse of ",(0,a.kt)("inlineCode",{parentName:"p"},"parse"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::lang::Lisra::Parse;\nok\nrascal>parse(pretty(L)) == L;\nbool: true\n")))}u.isMDXComponent=!0}}]);