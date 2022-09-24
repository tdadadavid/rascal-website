"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[8975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(t),d=o,h=b["".concat(l,".").concat(d)]||b[d]||m[d]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"Jabberwocky"},i=void 0,s={unversionedId:"Recipes/Common/WordCount/Jabberwocky/index",id:"Recipes/Common/WordCount/Jabberwocky/index",title:"Jabberwocky",description:"Synopsis",source:"@site/docs/Recipes/Common/WordCount/Jabberwocky/index.md",sourceDirName:"Recipes/Common/WordCount/Jabberwocky",slug:"/Recipes/Common/WordCount/Jabberwocky/",permalink:"/docs/Recipes/Common/WordCount/Jabberwocky/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Common/WordCount/Jabberwocky/index.md",tags:[],version:"current",frontMatter:{title:"Jabberwocky"},sidebar:"tutorialSidebar",previous:{title:"CountInLine3",permalink:"/docs/Recipes/Common/WordCount/CountInLine3/"},next:{title:"Word Replacement",permalink:"/docs/Recipes/Common/WordReplacement/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Lewis Carroll's well-known poem."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'\nmodule demo::common::WordCount::Jabberwocky\n\n\n\npublic list[str] Jabberwocky = [\n    "Jabberwocky by Lewis Carroll",\n    "",\n    "\\\'Twas brillig, and the slithy toves",\n    "Did gyre and gimble in the wabe;",\n    "All mimsy were the borogoves,",\n    "And the mome raths outgrabe.",\n    "",\n    "\\"Beware the Jabberwock, my son!",\n    "The jaws that bite, the claws that catch!",\n    "Beware the Jubjub bird, and shun",\n    "The frumious Bandersnatch!\\"",\n    "",\n    "\\\'Twas brillig, and the slithy toves",\n    "Did gyre and gimble in the wabe;",\n    "All mimsy were the borogoves,",\n    "And the mome raths outgrabe.",\n    "",\n    "\\"Beware the Jabberwock, my son!",\n    "The jaws that bite, the claws that catch!",\n    "Beware the Jubjub bird, and shun",\n    "The frumious Bandersnatch!\\"",\n    "",\n    "He took his vorpal sword in hand:",\n    "Long time the manxome foe he sought.",\n    "So rested he by the Tumtum tree,",\n    "And stood awhile in thought.",\n    "",\n    "And as in uffish thought he stood,",\n    "The Jabberwock, with eyes of flame,",\n    "Came whiffling through the tulgey wood",\n    "And burbled as it came!",\n    "",\n    "One, two! One, two! and through and through",\n    "The vorpal blade went snicker-snack!",\n    "He left it dead, and with its head",\n    "He went galumphing back.",\n    "",\n    "\\"And hast thou slain the Jabberwock?",\n    "Come to my arms, my beamish boy!",\n    "O frabjous day! Callooh! Callay!",\n    "He chortled in his joy.",\n    "",\n    "\\\'Twas brillig, and the slithy toves",\n    "Did gyre and gimble in the wabe;",\n    "All mimsy were the borogoves,",\n    "And the mome raths outgrabe."\n];\n\n')))}m.isMDXComponent=!0}}]);