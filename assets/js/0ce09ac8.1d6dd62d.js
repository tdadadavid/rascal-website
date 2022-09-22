"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return a?l.createElement(d,o(o({ref:t},c),{},{components:a})):l.createElement(d,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=a(83117),n=(a(67294),a(3905));const i={title:"module lang::java::flow::JavaToObjectFlow"},o=void 0,r={unversionedId:"Library/lang/java/flow/JavaToObjectFlow",id:"Library/lang/java/flow/JavaToObjectFlow",title:"module lang::java::flow::JavaToObjectFlow",description:"Usage",source:"@site/docs/Library/lang/java/flow/JavaToObjectFlow.md",sourceDirName:"Library/lang/java/flow",slug:"/Library/lang/java/flow/JavaToObjectFlow",permalink:"/docs/Library/lang/java/flow/JavaToObjectFlow",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/java/flow/JavaToObjectFlow.md",tags:[],version:"current",frontMatter:{title:"module lang::java::flow::JavaToObjectFlow"},sidebar:"tutorialSidebar",previous:{title:"lang::java::flow",permalink:"/docs/Library/lang/java/flow/"},next:{title:"lang::java::m3",permalink:"/docs/Library/lang/java/m3/"}},s={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function createOFG",id:"lang-java-flow-JavaToObjectFlow-createOFG",level:2},{value:"function correctInsertArg",id:"lang-java-flow-JavaToObjectFlow-correctInsertArg",level:2},{value:"function isContainerInsert",id:"lang-java-flow-JavaToObjectFlow-isContainerInsert",level:2},{value:"function isContainerExtract",id:"lang-java-flow-JavaToObjectFlow-isContainerExtract",level:2},{value:"function fixCollections",id:"lang-java-flow-JavaToObjectFlow-fixCollections",level:2},{value:"function ignoreType",id:"lang-java-flow-JavaToObjectFlow-ignoreType",level:2},{value:"function getDeclarations",id:"lang-java-flow-JavaToObjectFlow-getDeclarations",level:2},{value:"function lhsDecl",id:"lang-java-flow-JavaToObjectFlow-lhsDecl",level:2},{value:"function getStatements",id:"lang-java-flow-JavaToObjectFlow-getStatements",level:2},{value:"function translate",id:"lang-java-flow-JavaToObjectFlow-translate",level:2},{value:"function newObject",id:"lang-java-flow-JavaToObjectFlow-newObject",level:2},{value:"function translate",id:"lang-java-flow-JavaToObjectFlow-translate",level:2},{value:"function simpleExpression",id:"lang-java-flow-JavaToObjectFlow-simpleExpression",level:2},{value:"function removeNesting",id:"lang-java-flow-JavaToObjectFlow-removeNesting",level:2},{value:"function unnestExpressions",id:"lang-java-flow-JavaToObjectFlow-unnestExpressions",level:2},{value:"function translate",id:"lang-java-flow-JavaToObjectFlow-translate",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::java::flow::JavaToObjectFlow;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"mapping all of Java to the object flow language"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"More information can be found in ",(0,n.kt)("a",{parentName:"p",href:"/docs/Library/analysis/flow/ObjectFlow"},"ObjectFlow"),"."),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-createOFG"},"function createOFG"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FlowProgram createOFG(set[Declaration] asts)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-correctInsertArg"},"function correctInsertArg"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expression correctInsertArg(Expression _/*receiver*/, str name, list[Expression] args)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-isContainerInsert"},"function isContainerInsert"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isContainerInsert(Expression recv, str name)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-isContainerExtract"},"function isContainerExtract"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isContainerExtract(Expression recv, str name)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-fixCollections"},"function fixCollections"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Declaration] fixCollections(list[Declaration] ast)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-ignoreType"},"function ignoreType"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(arrayType(t))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(upperbound(t))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(lowerbound(t))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(parameterizedType(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(Type::qualifiedType(t,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(simpleType(t))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(unionType(tt))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default bool ignoreType(Type t)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(Expression::simpleName(n))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(Expression::qualifiedName(Expression q, n))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default bool ignoreType(Expression e)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::interface(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\enum(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\typeParameter(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\wildcard(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\capture(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::intersection(tt))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::union(tt))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\class(t,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\object())")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool ignoreType(TypeSymbol::\\array(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default bool ignoreType(TypeSymbol t)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-getDeclarations"},"function getDeclarations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowDecl] getDeclarations(set[Declaration] asts)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-lhsDecl"},"function lhsDecl"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(arrayAccess(e,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(f:fieldAccess(_,_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(f:fieldAccess(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(v:variable(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(s:simpleName(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc lhsDecl(q:qualifiedName(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default loc lhsDecl(Expression e)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-getStatements"},"function getStatements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] getStatements(set[Declaration] asts)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-translate"},"function translate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, c:cast(_, e))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, conditional(con, t, e))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, f:fieldAccess(_,_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, f:fieldAccess(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, s:simpleName(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, a:assignment(l,_,r))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, m:methodCall(s, n, a))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, m:methodCall(_, r, n, a))"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-newObject"},"function newObject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expression newObject(Type t, list[Expression] args, Expression original)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-translate"},"function translate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Expression _, Type t, list[Expression] a))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, Expression ob:newObject(_, Type t, list[Expression] a, Declaration _))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Type t, list[Expression] a, Declaration _))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Type t, a))"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-simpleExpression"},"function simpleExpression"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(fieldAccess(_,_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(fieldAccess(_,_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(qualifiedName(_,e))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(this())")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(this(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool simpleExpression(simpleName(_))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default bool simpleExpression(Expression e)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-removeNesting"},"function removeNesting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expression removeNesting(cast(_, e))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expression removeNesting(arrayAccess(e, _))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expression removeNesting(\\bracket(e))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default Expression removeNesting(Expression e)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-unnestExpressions"},"function unnestExpressions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tuple[list[loc], set[FlowStm]] unnestExpressions(loc prefix, int uniqNum, list[Expression] exprs)"))),(0,n.kt)("h2",{id:"lang-java-flow-JavaToObjectFlow-translate"},"function translate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default set[FlowStm] translate(loc base, loc target, Expression e)"))))}m.isMDXComponent=!0}}]);