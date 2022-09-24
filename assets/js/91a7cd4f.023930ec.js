"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[77590],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10996:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const l={title:"UndeclaredFunction"},i=void 0,o={unversionedId:"CompileTimeErrors/UndeclaredFunction/index",id:"CompileTimeErrors/UndeclaredFunction/index",title:"UndeclaredFunction",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UndeclaredFunction/index.md",sourceDirName:"CompileTimeErrors/UndeclaredFunction",slug:"/CompileTimeErrors/UndeclaredFunction/",permalink:"/docs/CompileTimeErrors/UndeclaredFunction/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/CompileTimeErrors/UndeclaredFunction/index.md",tags:[],version:"current",frontMatter:{title:"UndeclaredFunction"},sidebar:"tutorialSidebar",previous:{title:"UndeclaredField",permalink:"/docs/CompileTimeErrors/UndeclaredField/"},next:{title:"UndeclaredJavaMethod",permalink:"/docs/CompileTimeErrors/UndeclaredJavaMethod/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:s};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A function is called that has not been declared."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"All functions, constructors and variables have to be declared before they can be used.\nThis error is generated when this rule is violated."),(0,a.kt)("p",null,"Remedies for functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare the function."),(0,a.kt)("li",{parentName:"ul"},"Declare the function as constructor of an (existing or new) ","[Rascal:AlgebraicDataType]","."),(0,a.kt)("li",{parentName:"ul"},"Import a module that declares the function (Did you import all necessary library modules?)")),(0,a.kt)("p",null,"Remedies for variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare the variable.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Calling the undeclared function ",(0,a.kt)("inlineCode",{parentName:"p"},"triple")," gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>triple(5)\nok\n")),(0,a.kt)("p",null,"We can remedy this by declaring the function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int triple(int n) = 3 * n;\nint (int): function(|prompt:///|(0,26,<1,0>,<1,26>))\nrascal>triple(5)\nint: 15\n")),(0,a.kt)("p",null,"Calling the library function ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," gives an error if the proper library (in this case: ",(0,a.kt)("inlineCode",{parentName:"p"},"List"),") is not imported"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>size([20, 1, 77]);\nok\n")),(0,a.kt)("p",null,"The solution is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import List;\nok\nrascal>size([20, 1, 77]);\nint: 3\n")),(0,a.kt)("p",null,"Another solution is to import the complete Rascal library at once:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import Prelude;\nok\nrascal>size([20, 1, 77]);\nint: 3\n")),(0,a.kt)("p",null,"Using an undeclared variable gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>n + 1;\nok\n")),(0,a.kt)("p",null,"A variable is introduced by just assigning to it (with or without its expected type):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>n = 3;\nint: 3\nrascal>n + 1;\nint: 4\n")),(0,a.kt)("p",null,"Or equivalenty (with an expected type):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int n = 3;\nint: 3\nrascal>n + 1;\nint: 4\n")))}u.isMDXComponent=!0}}]);