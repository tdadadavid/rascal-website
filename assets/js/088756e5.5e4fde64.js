"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38487],{3905:(e,n,l)=>{l.d(n,{Zo:()=>v,kt:()=>d});var a=l(67294);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function m(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var u=a.createContext({}),o=function(e){var n=a.useContext(u),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},v=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,v=m(e,["components","mdxType","originalType","parentName"]),s=o(l),d=t,c=s["".concat(u,".").concat(d)]||s[d]||p[d]||i;return l?a.createElement(c,r(r({ref:n},v),{},{components:l})):a.createElement(c,r({ref:n},v))}));function d(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=l.length,r=new Array(i);r[0]=s;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m.mdxType="string"==typeof e?e:t,r[1]=m;for(var o=2;o<i;o++)r[o]=l[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},72216:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var a=l(83117),t=(l(67294),l(3905));const i={title:"module demo::lang::Func::Eval3"},r=void 0,m={unversionedId:"Library/demo/lang/Func/Eval3",id:"Library/demo/lang/Func/Eval3",title:"module demo::lang::Func::Eval3",description:"Usage",source:"@site/docs/Library/demo/lang/Func/Eval3.md",sourceDirName:"Library/demo/lang/Func",slug:"/Library/demo/lang/Func/Eval3",permalink:"/docs/Library/demo/lang/Func/Eval3",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Func/Eval3.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Func::Eval3"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Func::Eval2",permalink:"/docs/Library/demo/lang/Func/Eval2"},next:{title:"module demo::lang::Func::Load",permalink:"/docs/Library/demo/lang/Func/Load"}},u={},o=[{value:"Usage",id:"usage",level:4},{value:"alias Env",id:"demo-lang-Func-Eval3-Env",level:2},{value:"alias PEnv",id:"demo-lang-Func-Eval3-PEnv",level:2},{value:"alias Result3",id:"demo-lang-Func-Eval3-Result3",level:2},{value:"alias Address",id:"demo-lang-Func-Eval3-Address",level:2},{value:"alias Mem",id:"demo-lang-Func-Eval3-Mem",level:2},{value:"function push",id:"demo-lang-Func-Eval3-push",level:2},{value:"function alloc",id:"demo-lang-Func-Eval3-alloc",level:2},{value:"function pop",id:"demo-lang-Func-Eval3-pop",level:2},{value:"function eval3",id:"demo-lang-Func-Eval3-eval3",level:2},{value:"function bind",id:"demo-lang-Func-Eval3-bind",level:2},{value:"function eval3",id:"demo-lang-Func-Eval3-eval3",level:2}],v={toc:o};function p(e){let{components:n,...l}=e;return(0,t.kt)("wrapper",(0,a.Z)({},v,l,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import demo::lang::Func::Eval3;")),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-Env"},"alias Env"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"map[str, Address]"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-PEnv"},"alias PEnv"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"map[str, Func]"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-Result3"},"alias Result3"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"tuple[Mem, int]"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-Address"},"alias Address"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"int"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-Mem"},"alias Mem"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"list[int]"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-push"},"function push"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Address push(Mem mem)"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-alloc"},"function alloc"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"tuple[Mem, Address] alloc(Mem mem, int v)"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-pop"},"function pop"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Mem pop(Mem mem, Address scope)"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-eval3"},"function eval3"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(str main, list[int] args, Prog prog)"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-bind"},"function bind"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"tuple[Mem, Env] bind(list[str] fs, list[int] args, Mem mem)"))),(0,t.kt)("h2",{id:"demo-lang-Func-Eval3-eval3"},"function eval3"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(nat(int nat), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(var(str name), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(mul(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(div(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(add(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(sub(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(gt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(lt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(geq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(leq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(call(str name, list[Exp] args), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(address(str var), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(deref(Exp exp), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(let(list[Binding] bindings, Exp exp), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(seq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(assign(var(str name), Exp e), Env env, PEnv penv, Mem mem)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Result3 eval3(assign(deref(Exp lvalue), Exp e), Env env, PEnv penv, Mem mem)"))))}p.isMDXComponent=!0}}]);