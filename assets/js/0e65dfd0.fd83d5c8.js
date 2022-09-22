"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[43420],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=l,k=m["".concat(o,".").concat(h)]||m[h]||c[h]||r;return t?n.createElement(k,s(s({ref:a},u),{},{components:t})):n.createElement(k,s({ref:a},u))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53103:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(83117),l=(t(67294),t(3905));const r={title:"Boolean",keywords:["true","false"]},s=void 0,i={unversionedId:"Rascal/Expressions/Values/Boolean/index",id:"Rascal/Expressions/Values/Boolean/index",title:"Boolean",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Boolean/index.md",sourceDirName:"Rascal/Expressions/Values/Boolean",slug:"/Rascal/Expressions/Values/Boolean/",permalink:"/docs/Rascal/Expressions/Values/Boolean/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Boolean/index.md",tags:[],version:"current",frontMatter:{title:"Boolean",keywords:["true","false"]},sidebar:"tutorialSidebar",previous:{title:"Values",permalink:"/docs/Rascal/Expressions/Values/"},next:{title:"Boolean All",permalink:"/docs/Rascal/Expressions/Values/Boolean/All/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Boolean values."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bool")),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The Booleans are represented by the type ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," which has two values: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"The Boolean operators (to be more precise: operators with a value of type Boolean as result) have ",(0,l.kt)("em",{parentName:"p"},"short-circuit")," semantics.\nThis means that the operands are evaluated until the outcome of the operator is known."),(0,l.kt)("p",null,"Most operators are self-explanatory except the match (:=) and no match (!:=) operators that are also the main reason to treat Boolean operator expressions separately. Although we describe patterns in full detail in ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Patterns"},"Patterns"),", a preview is useful here. A pattern can"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"match (or not match) any arbitrary value (that we will call the ",(0,l.kt)("em",{parentName:"p"},"subject value"),");")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"during the match variables may be bound to subvalues of the subject value."))),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"match")," operator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"_Pat_ := _Exp_\n")),(0,l.kt)("p",null,"is evaluated as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Exp")," is evaluated, the result is a subject value;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"the subject value is matched against the pattern ",(0,l.kt)("em",{parentName:"p"},"Pat"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"if the match succeeds, any variables in the pattern are bound to subvalues of the subject value and the match expression yields ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"if the match fails, no variables are bound and the match expression yields ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,l.kt)("p",null,"This looks and ",(0,l.kt)("em",{parentName:"p"},"is")," nice and dandy, so why all this fuss about Boolean operators?\nThe catch is that--as we will see in ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Patterns"},"Patterns"),"--a match need not be unique. This means that there may be more than one way of matching the subject value resulting in different variable bindings. "),(0,l.kt)("p",null,"This behaviour is applicable in the context of all Rascal constructs where a pattern match determines the flow of control of the program, in particular:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Boolean expressions: when a pattern match fails that is part of a Boolean expression, further solutions are tried in order to try to make the Boolean expression true.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tests in ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Statements/For"},"For"),", ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Statements/While"},"While"),", ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Statements/Do"},"Do")," statements.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tests in ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Values/Boolean/Any"},"Any")," and ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Values/Boolean/All"},"All")," expressions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tests and ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Comprehensions/Enumerator"},"Enumerator"),"s in comprehensions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pattern matches in cases of a ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Visit"},"Visit"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pattern matches in cases of a ",(0,l.kt)("a",{parentName:"p",href:"../../../../Rascal/Statements/Switch"},"Switch"),"."))),(0,l.kt)("p",null,"The following operators are provided for Boolean:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean"},"Boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/All"},"All")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/And"},"And")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Any"},"Any")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Equivalence"},"Equivalence")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/IfDefinedElse"},"IfDefinedElse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Implication"},"Implication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/IsDefined"},"IsDefined")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Match"},"Match")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Negation"},"Negation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/NoMatch"},"NoMatch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/Boolean/Or"},"Or"))),(0,l.kt)("p",null,"There are also ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/Boolean"},"library functions")," available for Booleans."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Consider the following match of a list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[1, *int L, 2, *int M] := [1,2,3,2,4]\nbool: true\n")),(0,l.kt)("p",null,"By definition ",(0,l.kt)("inlineCode",{parentName:"p"},"list[int] L")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"list[int] M")," match list elements that are part of the enclosing list in which they occur. If they should match a nested list each should be enclosed in list brackets."),(0,l.kt)("p",null,"There are two solutions for the above match:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"L")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," =",(0,l.kt)("inlineCode",{parentName:"p"}," [2, 3, 2, 4]"),"; and")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"L")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"[2,3]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," =",(0,l.kt)("inlineCode",{parentName:"p"}," [4]"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>for ([1, *int L, 2, *int M] := [1,2,3,2,4])\n>>>>>>>  println("L: <L>, M: <M>");\n  println("L: <L>, M: <M>");\nL: [], M: [3,2,4]\nL: [2,3], M: [4]\nlist[void]: []\n')),(0,l.kt)("p",null,"Depending on the context, only the first solution of a match expression is used, respectively all solutions are used.\nIf a match expression occurs in a larger Boolean expression, a subsequent subexpression may yield false and -- depending on the actual operator -- evaluation backtracks to a previously evaluated match operator to try a next solution. Let's illustrate this by extending the above example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"[1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0\n")),(0,l.kt)("p",null,"where we are looking for a solution in which L has a non-empty list as value. Evaluation proceeds as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The left argument of the ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," operator is evaluated: the match expression is evaluated resulting in the bindings ",(0,l.kt)("inlineCode",{parentName:"p"},"L = []")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"M = [2, 3, 2, 4]"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The right argument of the ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," operator is evaluated: ",(0,l.kt)("inlineCode",{parentName:"p"},"size(L) > 0")," yields ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtrack to the left argument of the ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," operator to check for more solutions: indeed there are more solutions resulting in the bindings ",(0,l.kt)("inlineCode",{parentName:"p"},"L = [2,3]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"M = [4]"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Proceed to the right operator of ",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),": this time ",(0,l.kt)("inlineCode",{parentName:"p"},"size(L) > 0")," yields ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The result of evaluating the complete expression is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\nrascal>import List;\nok\n")),(0,l.kt)("p",null,"for prints them all:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for ([1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0)\n>>>>>>>  println("L: <L>, M: <M>");\n  println("L: <L>, M: <M>");\nL: [2,3], M: [4]\nlist[void]: []\n')),(0,l.kt)("p",null,"if prints the first"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if ([1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0)\n>>>>>>>  println("L: <L>, M: <M>");\n  println("L: <L>, M: <M>");\nL: [2,3], M: [4]\nok\n')))}c.isMDXComponent=!0}}]);