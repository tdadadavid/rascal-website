"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[84273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):v(v({},n),e)),t},o=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),d=r,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return t?a.createElement(m,v(v({ref:n},o),{},{components:t})):a.createElement(m,v({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,v=new Array(l);v[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,v[1]=p;for(var i=2;i<l;i++)v[i]=t[i];return a.createElement.apply(null,v)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>v,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=t(83117),r=(t(67294),t(3905));const l={title:"Eval2"},v=void 0,p={unversionedId:"Recipes/Languages/Func/Eval2/index",id:"Recipes/Languages/Func/Eval2/index",title:"Eval2",description:"Synopsis",source:"@site/docs/Recipes/Languages/Func/Eval2/index.md",sourceDirName:"Recipes/Languages/Func/Eval2",slug:"/Recipes/Languages/Func/Eval2/",permalink:"/docs/Recipes/Languages/Func/Eval2/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Func/Eval2/index.md",tags:[],version:"current",frontMatter:{title:"Eval2"},sidebar:"tutorialSidebar",previous:{title:"Eval1",permalink:"/docs/Recipes/Languages/Func/Eval1/"},next:{title:"Eval3",permalink:"/docs/Recipes/Languages/Func/Eval3/"}},s={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],o={toc:i};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Like Eval1 but with support for sequences and assignments."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Interpreter Eval2 supports the following features of Func: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Eval2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer constant"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arithmetic operators"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comparison operators"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"call"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"let"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sequence")),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"assignment")),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address operator"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dereference operator"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The main additions are local side effects and the sequence operator."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Func::Eval2\n\n// local side effects, returning env\n\nimport demo::lang::Func::AST;\n\nimport List;\n\nalias Env = map[str, int];\nalias PEnv = map[str, Func];\n\nalias Result2 = tuple[Env, int];  // <1>\n\nResult2 eval2(str main, list[int] args, Prog prog) {\n  penv = ( f.name: f | f <- prog.funcs );\n  f = penv[main];\n  env = ( f.formals[i] : args[i] | i <- index(f.formals) ); \n  return eval2(f.body, env, penv);\n}\n\nResult2 eval2(nat(int nat), Env env, PEnv penv) = <env, nat>;\n \nResult2 eval2(var(str name), Env env, PEnv penv) = <env, env[name]>;       \n       \nResult2 eval2(mul(Exp lhs, Exp rhs), Env env, PEnv penv) {  // <2>\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, x * y>;\n} \n      \nResult2 eval2(div(Exp lhs, Exp rhs), Env env, PEnv penv) {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, x / y>;\n} \n      \nResult2 eval2(add(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, x + y>;\n} \n      \nResult2 eval2(sub(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, x - y>;\n} \n      \nResult2 eval2(gt(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, (x > y) ? 1 : 0>;\n} \n      \nResult2 eval2(lt(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, (x < y) ? 1 : 0>;\n} \n      \nResult2 eval2(geq(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, (x >= y) ? 1 : 0>;\n} \n      \nResult2 eval2(leq(Exp lhs, Exp rhs), Env env, PEnv penv)  {\n  <env, x> = eval2(lhs, env, penv);\n  <env, y> = eval2(rhs, env, penv);\n  return <env, (x <= y) ? 1 : 0>;\n} \n  \nResult2 eval2(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)  {\n  <env, c> = eval2(cond, env, penv);\n  return (c != 0) ? eval2(then, env, penv) : eval2(otherwise, env, penv);\n}\n      \nResult2 eval2(call(str name, list[Exp] args), Env env, PEnv penv)  {\n   f = penv[name];\n   for (i <- index(f.formals)) {\n     <env, v> = eval2(args[i], env, penv);\n     env[f.formals[i]] = v;\n   }\n   return eval2(f.body, env, penv);\n}\n         \nResult2 eval2(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)  {\n   for (b <- bindings) {\n     <env, x> = eval2(b.exp, env, penv);\n     env[b.var] = x;\n   }\n   return eval2(exp, env, penv);\n} \n    \nResult2 eval2(assign(var(str name), Exp exp), Env env, PEnv penv)  { // <3>\n  <env, v> = eval2(exp, env, penv);\n  env[name] = v;\n  return <env, v>;\n}\n\nResult2 eval2(seq(Exp lhs, Exp rhs), Env env, PEnv penv)  {  // <4>\n  <env, _> = eval2(lhs, env, penv);\n  return eval2(rhs, env, penv);\n}\n// end::module[]\n\n")),(0,r.kt)("p",null,"<1> The alias ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," is introduced: a pair of an environment and an integer value.\nAll evaluator functions are changed from returning an integer (the result of evaluation) to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," (the result of evaluation ",(0,r.kt)("em",{parentName:"p"},"and")," the local side effects).\n<2> The effect of this change can be seen in all functions. For instance, when evaluating\nmultiplication, the environment produced by the left operand ahs to be passed as\nargument to the right operand of the multiplication. This is needed, to propagate any side effects\ncaused by the left operand to propagate to the right one.\n<3> Assignment is implemented.\n<4>  Sequencing is implemented. Observe that that the value of the left operand is ignored and that\nthe value of the right operand is returned."),(0,r.kt)("p",null,"We apply ",(0,r.kt)("inlineCode",{parentName:"p"},"eval2")," to example ",(0,r.kt)("inlineCode",{parentName:"p"},"F2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"fact(n) = if n <= 1 then \n             n := 1\n          else \n             n := n * fact(n-1)\n          end;\n          n\n")),(0,r.kt)("p",null,"Let's try this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Func::Load;\nok\nrascal>import demo::lang::Func::Eval2;\nok\nrascal>import demo::lang::Func::programs::F2;\nok\nrascal>eval2("fact", [10], load(F2));\ntuple[map[str, int],int]: <("n":3628800),3628800>\n')))}u.isMDXComponent=!0}}]);