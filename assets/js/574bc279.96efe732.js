"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={title:"Tuple GreaterThan",keywords:[">"]},s=void 0,i={unversionedId:"Rascal/Expressions/Values/Tuple/GreaterThan/index",id:"Rascal/Expressions/Values/Tuple/GreaterThan/index",title:"Tuple GreaterThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/GreaterThan/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple/GreaterThan",slug:"/Rascal/Expressions/Values/Tuple/GreaterThan/",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThan/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Tuple/GreaterThan/index.md",tags:[],version:"current",frontMatter:{title:"Tuple GreaterThan",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"Tuple FieldSelection",permalink:"/docs/Rascal/Expressions/Values/Tuple/FieldSelection/"},next:{title:"Tuple GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Greater than operator on tuple values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> > Exp<sub>2</sub>")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> > Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tuple[ T<sub>11</sub>, T<sub>12</sub>, ... ]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tuple[ T<sub>21</sub>, T<sub>22</sub>, ... ]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Yields ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"both tuples are not equal, and"),(0,a.kt)("li",{parentName:"ul"},"the left-most element in the tuple value of ",(0,a.kt)("em",{parentName:"li"},"Exp",(0,a.kt)("sub",null,"1"))," that differs from the corresponding element in the tuple\nvalue of ",(0,a.kt)("em",{parentName:"li"},"Exp"),(0,a.kt)("sub",null,"2")," is greater than that element in ",(0,a.kt)("em",{parentName:"li"},"Exp"),(0,a.kt)("sub",null,"2"),".")),(0,a.kt)("p",null,"Otherwise the result if ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal><1, "def", true> > <1, "abc", true>;\nbool: true\n')))}c.isMDXComponent=!0}}]);