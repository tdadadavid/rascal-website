"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[44646],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(83117),r=(a(67294),a(3905));const l={title:"module lang::rascal::tests::extends1::TYPE"},s=void 0,o={unversionedId:"Library/lang/rascal/tests/extends1/TYPE",id:"Library/lang/rascal/tests/extends1/TYPE",title:"module lang::rascal::tests::extends1::TYPE",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/extends1/TYPE.md",sourceDirName:"Library/lang/rascal/tests/extends1",slug:"/Library/lang/rascal/tests/extends1/TYPE",permalink:"/docs/Library/lang/rascal/tests/extends1/TYPE",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/extends1/TYPE.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::extends1::TYPE"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::extends1::PARSETREE",permalink:"/docs/Library/lang/rascal/tests/extends1/PARSETREE"},next:{title:"module lang::rascal::tests::extends1::UseExtendBase",permalink:"/docs/Library/lang/rascal/tests/extends1/UseExtendBase"}},c={},i=[{value:"Usage",id:"usage",level:4},{value:"data SYM",id:"lang-rascal-tests-extends1-TYPE-SYM",level:2},{value:"function comparable",id:"lang-rascal-tests-extends1-TYPE-comparable",level:2},{value:"function subtype",id:"lang-rascal-tests-extends1-TYPE-subtype",level:2},{value:"function TPcomparable1",id:"lang-rascal-tests-extends1-TYPE-TPcomparable1",level:2},{value:"function TPcomparable2",id:"lang-rascal-tests-extends1-TYPE-TPcomparable2",level:2},{value:"function TPsubtype1",id:"lang-rascal-tests-extends1-TYPE-TPsubtype1",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::extends1::TYPE;")),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-SYM"},"data SYM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data SYM  \n     = A()\n     | B()\n     | Z()\n     ;\n")),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-comparable"},"function comparable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool comparable(SYM s, SYM t)"))),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-subtype"},"function subtype"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool subtype(A(), B())")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default bool subtype(SYM s, SYM t)"))),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-TPcomparable1"},"function TPcomparable1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool TPcomparable1()"))),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-TPcomparable2"},"function TPcomparable2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool TPcomparable2()"))),(0,r.kt)("h2",{id:"lang-rascal-tests-extends1-TYPE-TPsubtype1"},"function TPsubtype1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool TPsubtype1()"))))}p.isMDXComponent=!0}}]);