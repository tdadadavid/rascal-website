"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[26317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"A DSL in 36 lines of code",authors:["tvdstorm"]},o=void 0,s={permalink:"/blog/2013/07/29/dsl-in-36-lines-of-code",editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/blog/blog/2013-07-29-dsl-in-36-lines-of-code.md",source:"@site/blog/2013-07-29-dsl-in-36-lines-of-code.md",title:"A DSL in 36 lines of code",description:"One of the goals of Rascal is to allow the definition of Domain-Specific Languages.",date:"2013-07-29T00:00:00.000Z",formattedDate:"July 29, 2013",tags:[],readingTime:3.37,hasTruncateMarker:!1,authors:[{name:"Tijs van der Storm",title:"Senior researcher @ CWI-SWAT, professor @ RUG, Rascal Core Team",url:"https://homepages.cwi.nl/~storm/",imageURL:"https://www.uva.nl/binaries/_ht_1610011694919/extralarge/content/gallery/personen/s/t/tijs-van-der-storm_low_res.jpg",key:"tvdstorm"}],frontMatter:{title:"A DSL in 36 lines of code",authors:["tvdstorm"]},prevItem:{title:"The Language Interaction Design of Concrete Syntax",permalink:"/blog/2013/08/02/the-language-interaction-design-of-concrete-syntax"},nextItem:{title:"From functions to term rewriting and back in Rascal",permalink:"/blog/2013/05/15/from-functions-to-term-rewriting-and-back"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the goals of Rascal is to allow the definition of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"Domain-Specific Languages"),".\nIn this small post we give a flavor of how you can use Rascal to define the syntax of a DSL, a simple semantic check and how to compile the DSL to Java."),(0,i.kt)("p",null,"The following example shows how to define a simple DSL for state machines. It includes a parser, a check for unreachable states and a compiler to Java code. "),(0,i.kt)("p",null,"The grammar of the DSL is defined using Rascal's grammar formalism which is fully integrated in the language.\nShown below is the syntax definition of a simple state machine language, inspired by  Martin Fowler's example language for ",(0,i.kt)("a",{parentName:"p",href:"http://www.informit.com/articles/article.aspx?p=1592379"},"gothic security"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},'module Syntax\n\nextend lang::std::Layout;\nextend lang::std::Id;\n\nstart syntax Machine = machine: State+ states;\nsyntax State = @Foldable state: "state" Id name Trans* out;\nsyntax Trans = trans: Id event ":" Id to;\n')),(0,i.kt)("p",null,"A state machine consists of a number of named state declarations, where each state contains transitions to other states (identified by name) when a certain event happens.\nThe grammar reuses identifier syntax and whitespace convention from the standard library.\nEach non-terminal defines a ",(0,i.kt)("em",{parentName:"p"},"type"),". Parse trees are typed values like any other value in Rascal.\nAs a result, you can write functions that process such trees.\nAn example would be a semantic check on state machines, such as finding all unreachable states: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"module Analyze\n\nimport Syntax;\n\nset[Id] unreachable(Machine m) {\n  r = { <q1,q2> | (State)`state <Id q1> <Trans* ts>` <- m.states, \n                  (Trans)`<Id _>: <Id q2>` <- ts }+;\n  qs = [ q.name | q &- m.states ];\n  return { q | q <- qs, q notin r[qs[0]] };\n}\n")),(0,i.kt)("p",null,"To check for unreachable states, we first create a binary relation between states using a comprehension.\nThis comprehension uses ",(0,i.kt)("em",{parentName:"p"},"concrete syntax")," matching to find a state's transitions.\nThe pattern between backticks is written in the object language, which in this case is the statemachine language defined in the grammar above (Note the embedded syntax highlighting!).\nThe variables ",(0,i.kt)("inlineCode",{parentName:"p"},"q1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," in between ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">")," are bound for each state that is found in the machine ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),".\nA similar pattern is used to find the target state ",(0,i.kt)("inlineCode",{parentName:"p"},"q2")," is found in each transition in ",(0,i.kt)("inlineCode",{parentName:"p"},"ts"),".\nThe post-fix ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," then computes the transitive closure of the relation. "),(0,i.kt)("p",null,"The relation ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," is based on the transitions in a state machine.\nThis means that it does not include declared (final) states which have no outgoing transitions.\nWe collect the names of all defined states in ",(0,i.kt)("inlineCode",{parentName:"p"},"qs")," , again using a comprehension. "),(0,i.kt)("p",null,"The initial state is (conventionally) defined to be the state that is declared first.\nAn unreachable state is then defined as a state that is not in the right image of the initial state in the transitive closure of the transition relation.\nThis is exactly what is described by the last comprehension!\nThe notation ",(0,i.kt)("inlineCode",{parentName:"p"},"r[x]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," is a relation  is short hand for ",(0,i.kt)("inlineCode",{parentName:"p"},"{ y | <x, y> <- r }"),"."),(0,i.kt)("p",null,"There are various ways of compiling a DSL to target code in Rascal. The simplest is using string templates and generate code in a general purpose language. The following snippet shows the generation of a Java while loop to execute a state machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"module Compile\n\nimport Syntax;\n\nstr compile(Machine m) =\n  \"while (true) {\n  '  event = input.next();\n  '  switch (current) { \n  '    <for (q <- m.states) {>\n  '    case \\\"<q.name>\\\":\n  '      <for (t <- q.out) {>\n  '      if (event.equals(\\\"<t.event>\\\"))\n  '        current = \\\"<t.to>\\\";\n  '      <}>\n  '      break;\n  '    <}>\n  '  }\n  '}\"; \n")),(0,i.kt)("p",null,"String templates allow arbitrary Rascal values and control-flow constructs to be interpolated in string literals. Note how this code does not use concrete matching, but instead uses the labels defined in the grammar (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"states"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"out"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),")."),(0,i.kt)("p",null,"And that's it! A complete DSL in 36 lines of code. Of course, the parser and the ",(0,i.kt)("inlineCode",{parentName:"p"},"unreachable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," functions can be connected to the IDE. This provides custom syntax highlighting, error-marking and automatic building in state machine editors."))}m.isMDXComponent=!0}}]);