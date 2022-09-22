"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[31839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),f=n,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||s;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(83117),n=(a(67294),a(3905));const s={title:"Expressions"},o=void 0,l={unversionedId:"Rascal/Expressions/index",id:"Rascal/Expressions/index",title:"Expressions",description:"Synopsis",source:"@site/docs/Rascal/Expressions/index.md",sourceDirName:"Rascal/Expressions",slug:"/Rascal/Expressions/",permalink:"/docs/Rascal/Expressions/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/index.md",tags:[],version:"current",frontMatter:{title:"Expressions"},sidebar:"tutorialSidebar",previous:{title:"Variable Declaration",permalink:"/docs/Rascal/Declarations/Variable/"},next:{title:"Call",permalink:"/docs/Rascal/Expressions/Call/"}},p={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"The expressions available in Rascal."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The expression is the basic unit of evaluation and may consist of the ingredients shown in the figure."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An elementary ",(0,n.kt)("em",{parentName:"p"},"literal value"),", e.g. constants of the types ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Boolean"},"Boolean"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Integer"},"Integer"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Real"},"Real"),",\n",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Number"},"Number"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/String"},"String"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Location"},"Location")," or ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/DateTime"},"DateTime"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("em",{parentName:"p"},"structured value")," for ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/List"},"List"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Set"},"Set"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Map"},"Map"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Tuple"},"Tuple")," or ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Relation"},"Relation"),".\nThe elements are first evaluated before the structured value is built.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("em",{parentName:"p"},"variable")," that evaluates to its current value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A call to a function or constructor:"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"  A ",(0,n.kt)("em",{parentName:"strong"},"function call"),". First the arguments are evaluated and the corresponding function is called.\nThe value returned by the function is used as value of the function call. See ",(0,n.kt)("a",{parentName:"strong",href:"../../Rascal/Expressions/Call"},"Call"),".\n"),"  A ",(0,n.kt)("em",{parentName:"p"},"constructor"),". First the arguments are evaluated and then a data value is constructed for the\ncorresponding type. This data value is used as value of the constructor.\nConstructors are functions that can be used in all contexts where functions can be used. See ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Constructor"},"Constructor"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An operator expression. The operator is applied to the arguments; the evaluation order of the arguments depends\non the operator. The result returned by the operator is used as value of the operator expression.  See ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Operators"},"Operators"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Comprehensions"},"./Comprehensions"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Visit"},"Visit")," expression.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Boolean/Any"},"Any")," expression.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Boolean/All"},"All")," expression.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Some statements like ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Statements/If"},"./If"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Statements/For"},"For"),", ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Statements/While"},"While")," and ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Statements/Do"},"Do")," can also be used in expressions, see ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/StatementAsExpression"},"Statement as Expression"),"."))))}u.isMDXComponent=!0}}]);