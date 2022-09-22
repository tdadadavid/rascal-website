"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[63764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(a),f=n,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||l;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=a(83117),n=(a(67294),a(3905));const l={title:"module lang::rascal::format::Escape"},s=void 0,c={unversionedId:"Library/lang/rascal/format/Escape",id:"Library/lang/rascal/format/Escape",title:"module lang::rascal::format::Escape",description:"Usage",source:"@site/docs/Library/lang/rascal/format/Escape.md",sourceDirName:"Library/lang/rascal/format",slug:"/Library/lang/rascal/format/Escape",permalink:"/docs/Library/lang/rascal/format/Escape",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/format/Escape.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::format::Escape"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::format",permalink:"/docs/Library/lang/rascal/format/"},next:{title:"module lang::rascal::format::Grammar",permalink:"/docs/Library/lang/rascal/format/Grammar"}},o={},i=[{value:"Usage",id:"usage",level:4},{value:"function makeCharClassChar",id:"lang-rascal-format-Escape-makeCharClassChar",level:2},{value:"function makeStringChar",id:"lang-rascal-format-Escape-makeStringChar",level:2},{value:"function testA",id:"lang-rascal-format-Escape-testA",level:2},{value:"function testNl",id:"lang-rascal-format-Escape-testNl",level:2},{value:"function testQuote",id:"lang-rascal-format-Escape-testQuote",level:2},{value:"function testEOF",id:"lang-rascal-format-Escape-testEOF",level:2},{value:"function testHex",id:"lang-rascal-format-Escape-testHex",level:2},{value:"function escape",id:"lang-rascal-format-Escape-escape",level:2},{value:"function quote",id:"lang-rascal-format-Escape-quote",level:2},{value:"function ciquote",id:"lang-rascal-format-Escape-ciquote",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::format::Escape;")),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-makeCharClassChar"},"function makeCharClassChar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str makeCharClassChar(int ch)"))),(0,n.kt)("p",null,"  Creates a Rascal-character-classes escaped string character from a given\ndecimal index into the UTF8 table. "),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-makeStringChar"},"function makeStringChar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str makeStringChar(int ch)"))),(0,n.kt)("p",null,"  Creates a Rascal escaped string character from a given decimal index into the UTF8 table."),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-testA"},"function testA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool testA()"))),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-testNl"},"function testNl"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool testNl()"))),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-testQuote"},"function testQuote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool testQuote()"))),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-testEOF"},"function testEOF"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool testEOF()"))),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-testHex"},"function testHex"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool testHex()"))),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-escape"},"function escape"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str escape(str s)"))),(0,n.kt)("p",null,"  Escapes the characters of the given string using the Rascal escaping conventions."),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-quote"},"function quote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str quote(str s)"))),(0,n.kt)("p",null,'  Escapes the characters of the given string using the Rascal escaping conventions.\nand surround by " quotes.'),(0,n.kt)("h2",{id:"lang-rascal-format-Escape-ciquote"},"function ciquote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str ciquote(str s)"))),(0,n.kt)("p",null,"  Escapes the characters of the given string using the Rascal escaping conventions.\nand surround by ' quotes."))}p.isMDXComponent=!0}}]);