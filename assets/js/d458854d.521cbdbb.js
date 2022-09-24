"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"No Layout"},i=void 0,s={unversionedId:"Recipes/Languages/Exp/Concrete/NoLayout/index",id:"Recipes/Languages/Exp/Concrete/NoLayout/index",title:"No Layout",description:"Synopsis",source:"@site/docs/Recipes/Languages/Exp/Concrete/NoLayout/index.md",sourceDirName:"Recipes/Languages/Exp/Concrete/NoLayout",slug:"/Recipes/Languages/Exp/Concrete/NoLayout/",permalink:"/docs/Recipes/Languages/Exp/Concrete/NoLayout/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Exp/Concrete/NoLayout/index.md",tags:[],version:"current",frontMatter:{title:"No Layout"},sidebar:"tutorialSidebar",previous:{title:"Concrete",permalink:"/docs/Recipes/Languages/Exp/Concrete/"},next:{title:"With Layout",permalink:"/docs/Recipes/Languages/Exp/Concrete/WithLayout/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"A version of Exp based on concrete syntax."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"We describe howto write a grammar for Exp and how to use it to implement an evaluator."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is the grammar for Exp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Exp::Concrete::NoLayout::Syntax\n    \nlexical IntegerLiteral = [0-9]+; // <1>\n\nstart syntax Exp        // <2>\n  = IntegerLiteral      // <3>\n  | bracket "(" Exp ")" // <4>\n  > left Exp "*" Exp    // <5>\n  > left Exp "+" Exp    // <6>\n  ;\n\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("p",null,"<1> Defines a lexical syntax rule for IntegerLiterals; they consist of one or more digits.\n<2> Defines the alternatives for Exp. The keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," means that this is a start symbol of the grammar.\n<3> Defines alternative #1: an ",(0,r.kt)("inlineCode",{parentName:"p"},"IntegerLiteral"),".\n<4> Defines alternative #2: parentheses. The ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," says that this alternative has the same priority as the previous one.\nThe keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"bracket")," marks this as an alternative that defines parentheses.\n<5> Defines alternative #3: multiplication. The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," says that the previous rule has a higher priority than the current one.\nThe keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," marks this as a left-associative rule.\n<6> Defines alternative #4: addition. The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," says again that the previous rule has a higher priority than the current one.\nThe keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," marks this as a left-associative rule."),(0,r.kt)("p",null,"Now that the grammar is in place we want to use it to build an evaluator. Here is how:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Exp::Concrete::NoLayout::Eval\nimport demo::lang::Exp::Concrete::NoLayout::Syntax;\n\nimport String;\nimport ParseTree;\n\nint eval(str txt) = eval(parse(#Exp, txt)); // <2>\n\nint eval((Exp)`<IntegerLiteral l>`) = toInt("<l>");       // <3>\nint eval((Exp)`<Exp e1>*<Exp e2>`) = eval(e1) * eval(e2); // <4>\nint eval((Exp)`<Exp e1>+<Exp e2>`) = eval(e1) + eval(e2); // <5>\nint eval((Exp)`(<Exp e>)`) = eval(e);\ntest bool tstEval2() = eval("7*3") == 21;\ntest bool tstEval3() = eval("7+3") == 10;\ntest bool tstEval4() = eval("3+4*5") == 23;\n\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("p",null,"<1> We import ","[Rascal:ParseTree]"," because we will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," function below.\n<2> The main function ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," that evaluates an expression as string to an integer. It proceeds in two steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*  `parse(#Exp, txt)` parses the given `txt` according to non-terminal `Exp` as defined by the grammar.\n    The result is a parse tree.\n*  This parse tree is given to another eval function that will reduce the tree to an integer.\n")),(0,r.kt)("p",null,"<3> Converts an IntegerLiteral to an integer. Let's dissect this further:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'*  The `Exp` preceding the concrete pattern, unambiguously defines the type of the pattern.\n    This is good practice to avoid ambiguities.\n*  `<IntegerLiteral l>` matches an IntegerLiteral and binds it (a parse tree fragment) to variable `l`.\n*  In the function body, `toInt("<l>")`, the parse tree fragment is inserted in a string -- effectively unparsing it --\n    and that string is converted to an integer.\n')),(0,r.kt)("p",null,"<4> Handle the multiplication case.\n<5> Handle the addition case.\n<6> Handles the case of parentheses."),(0,r.kt)("p",null,"What remains, is to check that ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," works as expected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::lang::Exp::Concrete::NoLayout::Syntax;\nok\nrascal>import ParseTree;\nok\n")),(0,r.kt)("p",null,"Just checking that ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," returns a sort of parse tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>parse(#Exp, "2+3");\nExp: (Exp) `2+3`\n')),(0,r.kt)("p",null,"You will see such parse trees only once, unless you are a researcher in parsing ;-)\nHere is a demonstration of ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Exp::Concrete::NoLayout::Eval;\nok\nrascal>eval("2+3");\nint: 5\nrascal>eval("2+3*4");\nint: 14\nrascal>eval("(2+3)*4");\nint: 20\n')))}u.isMDXComponent=!0}}]);