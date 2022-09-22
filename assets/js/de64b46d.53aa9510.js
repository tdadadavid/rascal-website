"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[74225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>x});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=i(n),x=a,y=d["".concat(p,".").concat(x)]||d[x]||u[x]||s;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<s;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(83117),a=(n(67294),n(3905));const s={title:"Abstract Syntax"},c=void 0,o={unversionedId:"Recipes/Languages/Func/AbstractSyntax/index",id:"Recipes/Languages/Func/AbstractSyntax/index",title:"Abstract Syntax",description:"Synopsis",source:"@site/docs/Recipes/Languages/Func/AbstractSyntax/index.md",sourceDirName:"Recipes/Languages/Func/AbstractSyntax",slug:"/Recipes/Languages/Func/AbstractSyntax/",permalink:"/docs/Recipes/Languages/Func/AbstractSyntax/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Func/AbstractSyntax/index.md",tags:[],version:"current",frontMatter:{title:"Abstract Syntax"},sidebar:"tutorialSidebar",previous:{title:"Func",permalink:"/docs/Recipes/Languages/Func/"},next:{title:"Concrete Syntax",permalink:"/docs/Recipes/Languages/Func/ConcreteSyntax/"}},p={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],l={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The abstract syntax for Func."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is the abstract syntax for Func:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Func::AST\n\n\n\ndata Prog = prog(list[Func] funcs);\ndata Func = func(str name, list[str] formals, Exp body);\n\ndata Exp = let(list[Binding] bindings, Exp exp)\n         | cond(Exp cond, Exp then, Exp otherwise)\n         | var(str name)\n         | nat(int nat)\n         | call(str name, list[Exp] args)\n\n         | address(str var)\n         | deref(Exp exp)\n         \n         | mul(Exp lhs, Exp rhs)\n         | div(Exp lhs, Exp rhs)\n         | add(Exp lhs, Exp rhs)\n         | sub(Exp lhs, Exp rhs)\n         | gt(Exp lhs, Exp rhs)\n         | lt(Exp lhs, Exp rhs)\n         | geq(Exp lhs, Exp rhs)\n         | leq(Exp lhs, Exp rhs)\n         \n         | seq(Exp lhs, Exp rhs)\n         | assign(Exp lhs, Exp rhs);\n\ndata Binding = binding(str var, Exp exp);\n// end::module[]\n\n")),(0,a.kt)("p",null,"Observe that the abstract syntax follows the structure of the ",(0,a.kt)("a",{parentName:"p",href:"../../../../Recipes/Languages/Func/ConcreteSyntax"},"ConcreteSyntax")," but\nomits details such as operator priorities, parentheses, and the like."))}u.isMDXComponent=!0}}]);