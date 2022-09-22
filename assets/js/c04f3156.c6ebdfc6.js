"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[10992],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),u=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=u(n.components);return o.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),m=u(t),d=r,C=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?o.createElement(C,a(a({ref:e},c),{},{components:t})):o.createElement(C,a({ref:e},c))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2878:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(83117),r=(t(67294),t(3905));const i={title:"Word Count"},a=void 0,l={unversionedId:"Recipes/Common/WordCount/index",id:"Recipes/Common/WordCount/index",title:"Word Count",description:"Synopsis",source:"@site/docs/Recipes/Common/WordCount/index.md",sourceDirName:"Recipes/Common/WordCount",slug:"/Recipes/Common/WordCount/",permalink:"/docs/Recipes/Common/WordCount/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Common/WordCount/index.md",tags:[],version:"current",frontMatter:{title:"Word Count"},sidebar:"tutorialSidebar",previous:{title:"String Template",permalink:"/docs/Recipes/Common/StringTemplate/"},next:{title:"CountInLine1",permalink:"/docs/Recipes/Common/WordCount/CountInLine1/"}},s={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],c={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Counting words in strings."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The purpose of WordCount is to count the number of ",(0,r.kt)("em",{parentName:"p"},"words")," in a list of lines (strings).\nA word is here defined as one or more letters (lowercase or uppercase), digits and the underscore character (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),")."),(0,r.kt)("p",null,"We split the problem in two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Count the words in a single line. We explore three ways to do this in an imperative (",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Common/WordCount/CountInLine1"},"count in line1"),"], ",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Common/WordCount/CountInLine2"},"count in line2"),")\nand a functional style (",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Common/WordCount/CountInLine3"},"count in line3"),")."),(0,r.kt)("li",{parentName:"ul"},"Next we apply the single line counter to all the lines.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wordCount")," is a function with two arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list of lines."),(0,r.kt)("li",{parentName:"ul"},"A function that returns the number of words in a line.")),(0,r.kt)("p",null,"The main task of ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCount")," is to loop over all lines and to add the word counts per line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'\n//START\n// tag::module[]\nmodule demo::common::WordCount::WordCount\n\nimport demo::common::WordCount::CountInLine1;\nimport demo::common::WordCount::CountInLine2;\nimport demo::common::WordCount::CountInLine3;\nimport demo::common::WordCount::Jabberwocky;\n\nimport String;\n\nint wordCount(list[str] input, int (str s) countInLine)\n{\n  count = 0;\n  for(str line <- input){ // <1>\n     count += countInLine(line); // <2>\n  }\n  return count;\n}\ntest bool tstWordCount2() = wordCount(Jabberwocky, countInLine1) == wordCount(Jabberwocky, countInLine3);\n\ntest bool tstWordCount3() = wordCount(Jabberwocky, countInLine2) == wordCount(Jabberwocky, countInLine3);\n\ntest bool tstWordCount4(str txt) {\n    lines = split(txt, "\\n");\n    return wordCount(lines, countInLine1) == wordCount(lines, countInLine2);\n}    \n    \ntest bool tstWordCount5(str txt) {\n    lines = split(txt, "\\n"); \n    return wordCount(lines, countInLine1) == wordCount(lines, countInLine3); \n}\n\n    \ntest bool tstWordCount6(str txt) {\n    lines = split(txt, "\\n");  \n    return wordCount(lines, countInLine2) == wordCount(lines, countInLine3);\n}\n\n')),(0,r.kt)("p",null,"<1> An ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Comprehensions/Enumerator"},"enumerator")," is used to generated all the lines in the list of lines.\n<2> The argument function ",(0,r.kt)("inlineCode",{parentName:"p"},"countInLine")," is applied to count the number of words in each line."),(0,r.kt)("p",null,"Let's now do some experiments using the ",(0,r.kt)("a",{parentName:"p",href:"../../../Recipes/Common/WordCount/Jabberwocky"},"Jabberwocky")," poem by Lewis Carrol as input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::common::WordCount::WordCount;\nok\nrascal>import demo::common::WordCount::CountInLine1;\nok\nrascal>import demo::common::WordCount::CountInLine2;\nok\nrascal>import demo::common::WordCount::CountInLine3;\nok\nrascal>import demo::common::WordCount::Jabberwocky;\nok\nrascal>wordCount(Jabberwocky, countInLine1);\nint: 216\nrascal>wordCount(Jabberwocky, countInLine2);\nint: 216\nrascal>wordCount(Jabberwocky, countInLine3);\nint: 216\n")),(0,r.kt)("p",null,"It is satisfactory that the three ways of counting words all yield the same result."),(0,r.kt)("p",null,"If you are into one-liners, we can include everything you learned from this example\nin the following alternative ",(0,r.kt)("inlineCode",{parentName:"p"},"wordCount2")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int wordCount2(list[str] lines) = (0 | it + (0 | it + 1 | /\\w+/ := line) | str line <- lines);\nint (list[str]): function(|prompt:///|(0,94,<1,0>,<1,94>))\nrascal>wordCount2(Jabberwocky);\nint: 216\n")),(0,r.kt)("p",null,"The function body contains two nested ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Reducer"},"reducers"),".\nThe inner reducer counts the number of words in a line, the outer reducer accumulates all line word counts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")))}p.isMDXComponent=!0}}]);