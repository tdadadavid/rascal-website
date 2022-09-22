"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[40786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(83117),n=(a(67294),a(3905));const l={title:"Labelled Pattern",keywords:[":"]},o=void 0,s={unversionedId:"Rascal/Patterns/Labelled/index",id:"Rascal/Patterns/Labelled/index",title:"Labelled Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Labelled/index.md",sourceDirName:"Rascal/Patterns/Labelled",slug:"/Rascal/Patterns/Labelled/",permalink:"/docs/Rascal/Patterns/Labelled/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Patterns/Labelled/index.md",tags:[],version:"current",frontMatter:{title:"Labelled Pattern",keywords:[":"]},sidebar:"tutorialSidebar",previous:{title:"Descendant Pattern",permalink:"/docs/Rascal/Patterns/Descendant/"},next:{title:"List Pattern",permalink:"/docs/Rascal/Patterns/List/"}},c={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:i};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Labelled abstract pattern."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A labelled pattern matches the same values as ",(0,n.kt)("em",{parentName:"p"},"Pat"),", but has as side-effect that the matched value is assigned to ",(0,n.kt)("em",{parentName:"p"},"Var"),"."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>data ColoredTree = leaf(int N)\n>>>>>>>                 | red(ColoredTree left, ColoredTree right) \n>>>>>>>                 | black(ColoredTree left, ColoredTree right);\nok\nrascal>T = red(red(black(leaf(1), leaf(2)), black(leaf(3), leaf(4))), black(leaf(5), leaf(4)));\nColoredTree: red(\n  red(\n    black(\n      leaf(1),\n      leaf(2)),\n    black(\n      leaf(3),\n      leaf(4))),\n  black(\n    leaf(5),\n    leaf(4)))\nrascal>for(/M:black(_,leaf(4)) := T)\n>>>>>>>    println("Match <M>");\n    println("Match <M>");\nMatch black(leaf(3),leaf(4))\nMatch black(leaf(5),leaf(4))\nlist[void]: []\n')),(0,n.kt)("p",null,"We use an ",(0,n.kt)("em",{parentName:"p"},"anonymous variable")," ",(0,n.kt)("inlineCode",{parentName:"p"},"_")," at a position where we don't care about the actual value that is matched."))}d.isMDXComponent=!0}}]);