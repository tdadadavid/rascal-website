"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[16423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(83117),r=(n(67294),n(3905));const l={title:"module lang::smtlib2::command::Ast"},o=void 0,s={unversionedId:"Library/lang/smtlib2/command/Ast",id:"Library/lang/smtlib2/command/Ast",title:"module lang::smtlib2::command::Ast",description:"Usage",source:"@site/docs/Library/lang/smtlib2/command/Ast.md",sourceDirName:"Library/lang/smtlib2/command",slug:"/Library/lang/smtlib2/command/Ast",permalink:"/docs/Library/lang/smtlib2/command/Ast",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/smtlib2/command/Ast.md",tags:[],version:"current",frontMatter:{title:"module lang::smtlib2::command::Ast"},sidebar:"tutorialSidebar",previous:{title:"lang::smtlib2::command",permalink:"/docs/Library/lang/smtlib2/command/"},next:{title:"lang::smtlib2::command::response",permalink:"/docs/Library/lang/smtlib2/command/response/"}},i={},m=[{value:"Usage",id:"usage",level:4},{value:"data Script",id:"lang-smtlib2-command-Ast-Script",level:2},{value:"data Command",id:"lang-smtlib2-command-Ast-Command",level:2},{value:"data SortedVar",id:"lang-smtlib2-command-Ast-SortedVar",level:2},{value:"data Sort",id:"lang-smtlib2-command-Ast-Sort",level:2},{value:"data Expr",id:"lang-smtlib2-command-Ast-Expr",level:2},{value:"data Option",id:"lang-smtlib2-command-Ast-Option",level:2},{value:"data Logic",id:"lang-smtlib2-command-Ast-Logic",level:2},{value:"data Info",id:"lang-smtlib2-command-Ast-Info",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::smtlib2::command::Ast;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Synopsis: The SMTLIBv2 Command AST. This is the basic AST needed to construct SMTLIBv2 constraint problems. Sorts, Expressions and Literals are implemented in the different theories\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Script"},"data Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Script  \n     = script(list[Command] commands)\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Command"},"data Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Command  \n     = setLogic(Logic logic)\n     | setOption(Option option)\n     | setInfo(Info info)\n     | declareSort(str name, int arity)\n     | defineSort(str name, list[str] sorts, list[Sort] types)\n     | declareFunction(str name, list[Sort] params, Sort returnType)\n     | defineFunction(str name, list[SortedVar] sParams, Sort returnType, Expr body)\n     | \\assert(Expr expr)\n     | checkSatisfiable()\n     | getValue(list[Expr] exprs)\n     | getUnsatCore()\n     | push(int nr)\n     | pop(int nr)\n     | exit()\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-SortedVar"},"data SortedVar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data SortedVar  \n     = sortedVar(str name, Sort sort)\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Sort"},"data Sort"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Sort  \n     = custom(str name)\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Expr"},"data Expr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Expr  \n     = var(str name)\n     | lit(Literal lit)\n     | named(Expr labeledExpr, str label)\n     | customFunctionCall(str name, list[Expr] params)\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Option"},"data Option"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Option  \n     = printSuccess(bool val)\n     | regularOutputChannel(str channel)\n     | diagnosticOutputChannel(str channel)\n     | expandDefinitions(bool val)\n     | interactiveMode(bool val)\n     | produceProofs(bool val)\n     | produceUnsatCores(bool val)\n     | produceModels(bool val)\n     | produceAssignments(bool val)\n     | randomSeed(int seed)\n     | verbosity(int level)\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Logic"},"data Logic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Logic  \n     = logic()\n     ;\n")),(0,r.kt)("h2",{id:"lang-smtlib2-command-Ast-Info"},"data Info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Info  \n     = info()\n     ;\n")))}d.isMDXComponent=!0}}]);