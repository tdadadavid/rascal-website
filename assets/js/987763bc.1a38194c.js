"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[47733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(83117),i=(t(67294),t(3905));const o={title:"No Such Field"},a=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/NoSuchField/index",id:"RunTimeErrors/RuntimeExceptions/NoSuchField/index",title:"No Such Field",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/NoSuchField",slug:"/RunTimeErrors/RuntimeExceptions/NoSuchField/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/index.md",tags:[],version:"current",frontMatter:{title:"No Such Field"},sidebar:"tutorialSidebar",previous:{title:"No Such Annotation",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/"},next:{title:"No Such Key",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchKey/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Field of an abstract data type value cannot be found at runtime."),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data RuntimeException = NoSuchField(str name);")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchField")," is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Selecting a field from an abstract datatype depends on the actual constructor\nbeing used at run time. This exception is thrown when a non-existent field is accessed."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Consider this highly simplified view on persons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data Person = man(str name, bool beard) | woman(str name, bool necklace);\nok\nrascal>jane = woman("jane", false);\nPerson: woman("jane",false)\n')),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"beard")," is evidently only applicable to a ",(0,i.kt)("inlineCode",{parentName:"p"},"man"),' but not to a woman\n(didn\'t we say "simplified", above):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>jane.beard;\n|prompt:///|(0,4,<1,0>,<1,4>): NoSuchField("beard")\nok\n')))}u.isMDXComponent=!0}}]);