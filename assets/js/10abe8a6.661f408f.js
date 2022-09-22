"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[32295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Assert",keywords:["assert"]},l=void 0,i={unversionedId:"Rascal/Statements/Assert/index",id:"Rascal/Statements/Assert/index",title:"Assert",description:"Synopsis",source:"@site/docs/Rascal/Statements/Assert/index.md",sourceDirName:"Rascal/Statements/Assert",slug:"/Rascal/Statements/Assert/",permalink:"/docs/Rascal/Statements/Assert/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Assert/index.md",tags:[],version:"current",frontMatter:{title:"Assert",keywords:["assert"]},sidebar:"tutorialSidebar",previous:{title:"Append",permalink:"/docs/Rascal/Statements/Append/"},next:{title:"Assignment",permalink:"/docs/Rascal/Statements/Assignment/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"An executable assertion."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert Exp<sub>1</sub>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert Exp<sub>1</sub> : Exp<sub>2</sub>"))),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"str"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"An assert statement may occur everywhere where a declaration is allowed. It has two forms:"),(0,a.kt)("p",null,"An assert statement consists of a Boolean expression ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1")," and an optional string expression ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2"),"\nthat serves as a identifying message for this assertion. "),(0,a.kt)("p",null,"When ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1")," evaluates to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionFailed")," exception is thrown."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>assert 1==2 : "is never true";\nok\nrascal>int div(int x, int y) {\n>>>>>>>  assert y != 0 : "y must be non-zero";\n>>>>>>>  return x / y;\n>>>>>>>}\nint (int, int): function(|prompt:///|(0,81,<1,0>,<4,1>))\nrascal>div(4,0);\n|prompt:///|(42,20,<2,18>,<2,38>): AssertionFailed("y must be non-zero")\n    at div(|prompt:///|(0,81,<1,0>,<4,1>))\n    at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))\nok\n')))}u.isMDXComponent=!0}}]);