"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[16608],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var v=l.createContext({}),p=function(e){var n=l.useContext(v),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(v.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,v=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=a,d=m["".concat(v,".").concat(c)]||m[c]||s[c]||r;return t?l.createElement(d,i(i({ref:n},u),{},{components:t})):l.createElement(d,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var v in n)hasOwnProperty.call(n,v)&&(o[v]=n[v]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(87462),a=(t(67294),t(3905));const r={title:"module demo::lang::Func::Eval2"},i=void 0,o={unversionedId:"Library/demo/lang/Func/Eval2",id:"Library/demo/lang/Func/Eval2",title:"module demo::lang::Func::Eval2",description:"Usage",source:"@site/docs/Library/demo/lang/Func/Eval2.md",sourceDirName:"Library/demo/lang/Func",slug:"/Library/demo/lang/Func/Eval2",permalink:"/docs/Library/demo/lang/Func/Eval2",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Func/Eval2.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Func::Eval2"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Func::Eval1",permalink:"/docs/Library/demo/lang/Func/Eval1"},next:{title:"module demo::lang::Func::Eval3",permalink:"/docs/Library/demo/lang/Func/Eval3"}},v={},p=[{value:"Usage",id:"usage",level:4},{value:"alias Env",id:"demo-lang-Func-Eval2-Env",level:2},{value:"alias PEnv",id:"demo-lang-Func-Eval2-PEnv",level:2},{value:"alias Result2",id:"demo-lang-Func-Eval2-Result2",level:2},{value:"function eval2",id:"demo-lang-Func-Eval2-eval2",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::lang::Func::Eval2;")),(0,a.kt)("h2",{id:"demo-lang-Func-Eval2-Env"},"alias Env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"map[str, int]"))),(0,a.kt)("h2",{id:"demo-lang-Func-Eval2-PEnv"},"alias PEnv"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"map[str, Func]"))),(0,a.kt)("h2",{id:"demo-lang-Func-Eval2-Result2"},"alias Result2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[Env, int]"))),(0,a.kt)("h2",{id:"demo-lang-Func-Eval2-eval2"},"function eval2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(str main, list[int] args, Prog prog)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(nat(int nat), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(var(str name), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(mul(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(div(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(add(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(sub(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(gt(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(lt(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(geq(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(leq(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(call(str name, list[Exp] args), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(assign(var(str name), Exp exp), Env env, PEnv penv)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Result2 eval2(seq(Exp lhs, Exp rhs), Env env, PEnv penv)"))))}s.isMDXComponent=!0}}]);