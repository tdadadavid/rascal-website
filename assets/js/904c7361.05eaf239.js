"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[90954],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=t(83117),a=(t(67294),t(3905));const r={title:"Derivative"},o=void 0,p={unversionedId:"Recipes/Common/Derivative/index",id:"Recipes/Common/Derivative/index",title:"Derivative",description:"Synopsis",source:"@site/docs/Recipes/Common/Derivative/index.md",sourceDirName:"Recipes/Common/Derivative",slug:"/Recipes/Common/Derivative/",permalink:"/docs/Recipes/Common/Derivative/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Common/Derivative/index.md",tags:[],version:"current",frontMatter:{title:"Derivative"},sidebar:"tutorialSidebar",previous:{title:"Count Constructors",permalink:"/docs/Recipes/Common/CountConstructors/"},next:{title:"String Template",permalink:"/docs/Recipes/Common/StringTemplate/"}},l={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Symbolic differentiation."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Computing the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Differentiation_(mathematics)%5Bderivative%5D"},"http://en.wikipedia.org/wiki/Differentiation_(mathematics)[derivative]")," of an expression with respect to some variable is a classical calculus problem. Loosely speaking, a derivative can be thought of as how much one quantity is changing in response to changes in some other quantity; for example, the derivative of the position of a moving object with respect to time is the object's instantaneous velocity."),(0,a.kt)("p",null,"We present here rules for determining the derivative ",(0,a.kt)("inlineCode",{parentName:"p"},"dE/dX")," of simple expressions ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," for a given variable ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),". Recall that for number ",(0,a.kt)("inlineCode",{parentName:"p"},"N"),", variables ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Y"),", and expressions ",(0,a.kt)("inlineCode",{parentName:"p"},"E1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"E2")," the following rules apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dN / dX = 0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dX / dX = 1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dX / dY = 0"),", when ",(0,a.kt)("inlineCode",{parentName:"li"},"X != Y"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d(E1 + E2) /dX = dE1 / dX + d E2 /dX"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d(E1 * E2) / dX =  (d E1 / dX  * E2) + (E1 * d E2 /dX)"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is our solution followed by a list of explanations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::common::Derivative\n\n\n\ndata Exp = con(int n) // <1>\n         | var(str name)\n         | mul(Exp e1, Exp e2)\n         | add(Exp e1, Exp e2)\n         ;\n         \npublic Exp E = add(mul(con(3), var("y")), mul(con(5), var("x"))); // <2>\n\nExp dd(con(n), var(V))              = con(0); // <3>\nExp dd(var(V1), var(V2))            = con((V1 == V2) ? 1 : 0);\nExp dd(add(Exp e1, Exp e2), var(V)) = add(dd(e1, var(V)), dd(e2, var(V)));\nExp dd(mul(Exp e1, Exp e2), var(V)) = add(mul(dd(e1, var(V)), e2), mul(e1, dd(e2, var(V))));\n \nExp simp(add(con(n), con(m))) = con(n + m); // <4>\nExp simp(mul(con(n), con(m))) = con(n * m);\n\nExp simp(mul(con(1), Exp e))  = e;\nExp simp(mul(Exp e, con(1)))  = e;\nExp simp(mul(con(0), Exp e))  = con(0);\nExp simp(mul(Exp e, con(0)))  = con(0);\n\nExp simp(add(con(0), Exp e))  = e;\nExp simp(add(Exp e, con(0)))  = e;\n\ndefault Exp simp(Exp e)       = e; // <5>\n\nExp simplify(Exp e){ // <6>\n  return bottom-up visit(e){\n           case Exp e1 => simp(e1)\n         }\n}\ntest bool tstSimplity2() = simplify(dd(E, var("x"))) == con(5);\n\n')),(0,a.kt)("p",null,"<1> Define a data type ",(0,a.kt)("inlineCode",{parentName:"p"},"Exp")," to represent expressions.\n<2> Introduce an example expression ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," for later use.\n<3> Define the actual differentiation function ",(0,a.kt)("inlineCode",{parentName:"p"},"dd"),". Observe that this definition depends on the use of patterns in function declarations, see ","[Rascal:Function]",".\n<4> Define simplification rules.\n<5> A default rule is give for the case that no simplification applies.\n<6> Define the actual simplication function ",(0,a.kt)("inlineCode",{parentName:"p"},"simplify")," that performs a bottom up traversal of the expression, application simplification\nrules on the up."),(0,a.kt)("p",null,"Let's differentiate the example expression ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::common::Derivative;\nok\nrascal>dd(E, var("x"));\nExp: add(\n  add(\n    mul(\n      con(0),\n      var("y")),\n    mul(\n      con(3),\n      con(0))),\n  add(\n    mul(\n      con(0),\n      var("x")),\n    mul(\n      con(5),\n      con(1))))\n')),(0,a.kt)("p",null,"As you can see, we managed to compute a derivative, but the result is far more complex than we would like.\nThis is where simplification comes in. First try a simple case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>simplify(mul(var("x"), add(con(3), con(5))));\nExp: mul(\n  var("x"),\n  con(8))\n')),(0,a.kt)("p",null,"Now apply simplification to the result of differentiation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>simplify(dd(E, var("x")));\nExp: con(5)\n')))}m.isMDXComponent=!0}}]);