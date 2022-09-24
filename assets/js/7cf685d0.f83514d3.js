"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[80823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"module lang::json::IO"},i=void 0,s={unversionedId:"Library/lang/json/IO",id:"Library/lang/json/IO",title:"module lang::json::IO",description:"Usage",source:"@site/docs/Library/lang/json/IO.md",sourceDirName:"Library/lang/json",slug:"/Library/lang/json/IO",permalink:"/docs/Library/lang/json/IO",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/json/IO.md",tags:[],version:"current",frontMatter:{title:"module lang::json::IO"},sidebar:"tutorialSidebar",previous:{title:"lang::json",permalink:"/docs/Library/lang/json/"},next:{title:"lang::json::ast",permalink:"/docs/Library/lang/json/ast/"}},l={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"function toJSON",id:"lang-json-IO-toJSON",level:2},{value:"function fromJSON",id:"lang-json-IO-fromJSON",level:2},{value:"function readJSON",id:"lang-json-IO-readJSON",level:2},{value:"function parseJSON",id:"lang-json-IO-parseJSON",level:2},{value:"function writeJSON",id:"lang-json-IO-writeJSON",level:2},{value:"function asJSON",id:"lang-json-IO-asJSON",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::json::IO;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"(De)serialization of JSON values."),(0,a.kt)("h2",{id:"lang-json-IO-toJSON"},"function toJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str toJSON(value v)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str toJSON(value v, bool compact)"))),(0,a.kt)("h2",{id:"lang-json-IO-fromJSON"},"function fromJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T fromJSON(type[&T] typ, str src)"))),(0,a.kt)("h2",{id:"lang-json-IO-readJSON"},"function readJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T readJSON(type[&T] expected, loc src, bool implicitConstructors = true, bool implicitNodes = true, str dateTimeFormat = \"yyyy-MM-dd\\'T\\'HH:mm:ssZZZZZ\", bool lenient=false)"))),(0,a.kt)("p",null,"reads JSON values from a stream\nIn general the translation behaves as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objects translate to map","[str,value]"," by default, unless a node is expected (properties are then translated to keyword fields)"),(0,a.kt)("li",{parentName:"ul"},"Arrays translate to lists by default, or to a set if that is expected or a tuple if that is expected. Arrays may also be interpreted as constructors or nodes (see below)"),(0,a.kt)("li",{parentName:"ul"},"Booleans translate to bools"),(0,a.kt)("li",{parentName:"ul"},"If the expected type provided is a datetime then an int instant is mapped and if a string is found then the dateTimeFormat parameter will be used to configure the parsing of a date-time string"),(0,a.kt)("li",{parentName:"ul"},"If the expected type provided is an ADT then this reader will map Json objects in a particular way, as configured by the implicitNodes and implicitConstructor\nparameters."),(0,a.kt)("li",{parentName:"ul"},"If num, int, real or rat are expected both strings and number values are mapped"),(0,a.kt)("li",{parentName:"ul"},"If loc is expected than strings which look like URI are parsed (containing :/) or a file:/// URI is build, or if an object is found each separate field of\na location object is read from the respective properties: { scheme : str, authority: str?, path: str?, fragment: str?, query: str?, offset: int, length: int, begin: ","[bl, bc]",", end: ","[el, ec]","}")),(0,a.kt)("p",null,'In "implicitConstructor" mode the name of a property will be used as the name of the nested constructor. So this expects data definitions to line up constructor\nnames with field names: ',(0,a.kt)("inlineCode",{parentName:"p"},"data MyType = myConstructor(MyType2 myConstructor2); data MyType2 = myConstructor2(int i)"),"\n^",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"___"))))))),"^"),(0,a.kt)("p",null,"This would then map the Json input ",(0,a.kt)("inlineCode",{parentName:"p"},'"myConstructor" : { myConstructor2 : { "i" : 1 } }')," to the Rascal value ",(0,a.kt)("inlineCode",{parentName:"p"},"myConstructor(myConstructor2(1))")),(0,a.kt)("p",null,"In this mode field names for keyword parameters map to keyword parameters and field names to positional parameters map to positional parameters (which do not have\nto be printed in order in the Json input file).                                                             "),(0,a.kt)("p",null,"In explicit constructor mode (",(0,a.kt)("inlineCode",{parentName:"p"},"implicitConstructor==false"),") the following array-based encoding is expected for constructor trees, by example:\n",(0,a.kt)("inlineCode",{parentName:"p"},'[ "myConstructor", [ ["myConstructor2", [ 1 ] ] ] ]')," and when there are keyword parameters we allow a third field of the array which is an object mapping\nJson properties to Rascal keyword fields.  "),(0,a.kt)("p",null,"A similar distinction is made for values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),", configured using the ",(0,a.kt)("inlineCode",{parentName:"p"},"implicitNode")," parameter.                                                                                                                    "),(0,a.kt)("h2",{id:"lang-json-IO-parseJSON"},"function parseJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T parseJSON(type[&T] expected, str src, bool implicitConstructors = true, bool implicitNodes = true, str dateTimeFormat = \"yyyy-MM-dd\\'T\\'HH:mm:ssZZZZZ\", bool lenient=false)"))),(0,a.kt)("p",null,"parses JSON values from a string\nIn general the translation behaves as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objects translate to map","[str,value]"," by default, unless a node is expected (properties are then translated to keyword fields)"),(0,a.kt)("li",{parentName:"ul"},"Arrays translate to lists by default, or to a set if that is expected or a tuple if that is expected. Arrays may also be interpreted as constructors or nodes (see below)"),(0,a.kt)("li",{parentName:"ul"},"Booleans translate to bools"),(0,a.kt)("li",{parentName:"ul"},"If the expected type provided is a datetime then an int instant is mapped and if a string is found then the dateTimeFormat parameter will be used to configure the parsing of a date-time string"),(0,a.kt)("li",{parentName:"ul"},"If the expected type provided is an ADT then this reader will map Json objects in a particular way, as configured by the implicitNodes and implicitConstructor\nparameters."),(0,a.kt)("li",{parentName:"ul"},"If num, int, real or rat are expected both strings and number values are mapped"),(0,a.kt)("li",{parentName:"ul"},"If loc is expected than strings which look like URI are parsed (containing :/) or a file:/// URI is build, or if an object is found each separate field of\na location object is read from the respective properties: { scheme : str, authority: str?, path: str?, fragment: str?, query: str?, offset: int, length: int, begin: ","[bl, bc]",", end: ","[el, ec]","}")),(0,a.kt)("p",null,'In "implicitConstructor" mode the name of a property will be used as the name of the nested constructor. So this expects data definitions to line up constructor\nnames with field names: ',(0,a.kt)("inlineCode",{parentName:"p"},"data MyType = myConstructor(MyType2 myConstructor2); data MyType2 = myConstructor2(int i)"),"\n^",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"___"))))))),"^"),(0,a.kt)("p",null,"This would then map the Json input ",(0,a.kt)("inlineCode",{parentName:"p"},'"myConstructor" : { myConstructor2 : { "i" : 1 } }')," to the Rascal value ",(0,a.kt)("inlineCode",{parentName:"p"},"myConstructor(myConstructor2(1))")),(0,a.kt)("p",null,"In this mode field names for keyword parameters map to keyword parameters and field names to positional parameters map to positional parameters (which do not have\nto be printed in order in the Json input file).                                                             "),(0,a.kt)("p",null,"In explicit constructor mode (",(0,a.kt)("inlineCode",{parentName:"p"},"implicitConstructor==false"),") the following array-based encoding is expected for constructor trees, by example:\n",(0,a.kt)("inlineCode",{parentName:"p"},'[ "myConstructor", [ ["myConstructor2", [ 1 ] ] ] ]')," and when there are keyword parameters we allow a third field of the array which is an object mapping\nJson properties to Rascal keyword fields.  "),(0,a.kt)("p",null,"A similar distinction is made for values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),", configured using the ",(0,a.kt)("inlineCode",{parentName:"p"},"implicitNode")," parameter.                                                                                                                    "),(0,a.kt)("h2",{id:"lang-json-IO-writeJSON"},"function writeJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void writeJSON(loc target, value val, bool implicitConstructors=true, bool implicitNodes=true, bool unpackedLocations=false, str dateTimeFormat=\"yyyy-MM-dd\\'T\\'HH:mm:ssZZZZZ\", bool dateTimeAsInt=false, int indent=0)"))),(0,a.kt)("h2",{id:"lang-json-IO-asJSON"},"function asJSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str asJSON(value val, bool implicitConstructors=true, bool implicitNodes=true, bool unpackedLocations=false, str dateTimeFormat=\"yyyy-MM-dd\\'T\\'HH:mm:ssZZZZZ\", bool dateTimeAsInt=false, int indent = 0)"))))}c.isMDXComponent=!0}}]);