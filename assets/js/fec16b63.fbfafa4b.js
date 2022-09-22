"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[45126],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||s;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(83117),a=(t(67294),t(3905));const s={title:"Comprehensions",keywords:["[","]","{","}","(",")","|","<-"]},o=void 0,i={unversionedId:"Rascal/Expressions/Comprehensions/index",id:"Rascal/Expressions/Comprehensions/index",title:"Comprehensions",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Comprehensions/index.md",sourceDirName:"Rascal/Expressions/Comprehensions",slug:"/Rascal/Expressions/Comprehensions/",permalink:"/docs/Rascal/Expressions/Comprehensions/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Comprehensions/index.md",tags:[],version:"current",frontMatter:{title:"Comprehensions",keywords:["[","]","{","}","(",")","|","<-"]},sidebar:"tutorialSidebar",previous:{title:"Call",permalink:"/docs/Rascal/Expressions/Call/"},next:{title:"Enumerator",permalink:"/docs/Rascal/Expressions/Comprehensions/Enumerator/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Comprehensions provide a concise notation to conditionally generate new values."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Comprehensions are defined for the following types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),", see ",(0,a.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/List/Comprehension"},"Comprehension"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set"),", see ",(0,a.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Set/Comprehension"},"Comprehension"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"map"),", see ",(0,a.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Map/Comprehension"},"Comprehension"),".")),(0,a.kt)("p",null,"The syntax varies slightly for each type, but comprehensions have the following common elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("em",{parentName:"p"},"generator")," can come in two flavours:\n",(0,a.kt)("strong",{parentName:"p"},"  an ",(0,a.kt)("em",{parentName:"strong"},"enumerator")," that generates all the values in some subject value.\n"),"  a ",(0,a.kt)("em",{parentName:"p"},"filter")," that performs an arbitrary test on previously generated values.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One or more ",(0,a.kt)("em",{parentName:"p"},"contributing expressions")," that are added to the list, set or map that is being constructed."))),(0,a.kt)("p",null,"The contributing expressions are evaluated for all possible values of the enumerators that are not\nexcluded by a test. When a filter fails, execution continues with the preceding enumerator (if any)."),(0,a.kt)("p",null,"Each enumerator may introduce new variables that can be used in subsequent generators as well as in the contributing expressions.\nA generator can use the variables introduced by preceding generators. "),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"A list comprehension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[ 3 * X | int X <- [1 .. 10] ];\nlist[int]: [3,6,9,12,15,18,21,24,27]\n")),(0,a.kt)("p",null,"A list comprehension with a filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[ 3 * X | int X <- [1 .. 10], X > 5];\nlist[int]: [18,21,24,27]\n")),(0,a.kt)("p",null,"A list comprehension with multiple contributing expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[X, X * X | int X <- [1, 2, 3, 4, 5], X >= 3];\nlist[int]: [3,9,4,16,5,25]\n")),(0,a.kt)("p",null,"A set comprehension with a filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{X | int X <- {1, 2, 3, 4, 5}, X >= 3};\nset[int]: {5,3,4}\n")),(0,a.kt)("p",null,"A set comprehension that constructs a relation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{<X, Y> | int X <- {1, 2, 3}, int Y <- {2, 3, 4}, X >= Y};\nrel[int,int]: {\n  <2,2>,\n  <3,3>,\n  <3,2>\n}\nrascal>{<Y, X> | <int X, int Y> <- {<1,10>, <2,20>}};\nrel[int,int]: {\n  <10,1>,\n  <20,2>\n}\n")),(0,a.kt)("p",null,"Introduce a map of ",(0,a.kt)("inlineCode",{parentName:"p"},"fruits")," and use a map comprehension to filter fruits with an associated value larger than 10:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);\nmap[str, int]: ("banana":0,"pear":1,"orange":35,"berry":25,"apple":3)\nrascal>(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);\nmap[str, int]: ("orange":35,"berry":25)\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/List/Comprehension"},"Comprehension"),", ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Set/Comprehension"},"Comprehension"),", or ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Map/Comprehension"},"Comprehension")," for more examples."))}u.isMDXComponent=!0}}]);