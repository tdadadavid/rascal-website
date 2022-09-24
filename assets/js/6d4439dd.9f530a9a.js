"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[3736],{3905:(e,a,i)=>{i.d(a,{Zo:()=>m,kt:()=>d});var t=i(67294);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,t,n=function(e,a){if(null==e)return{};var i,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=t.createContext({}),o=function(e){var a=t.useContext(u),i=a;return e&&(i="function"==typeof e?e(a):s(s({},a),e)),i},m=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var i=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),y=o(i),d=n,c=y["".concat(u,".").concat(d)]||y[d]||g[d]||r;return i?t.createElement(c,s(s({ref:a},m),{},{components:i})):t.createElement(c,s({ref:a},m))}));function d(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=y;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<r;o++)s[o]=i[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}y.displayName="MDXCreateElement"},15459:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(87462),n=(i(67294),i(3905));const r={title:"module analysis::grammars::Ambiguity"},s=void 0,l={unversionedId:"Library/analysis/grammars/Ambiguity",id:"Library/analysis/grammars/Ambiguity",title:"module analysis::grammars::Ambiguity",description:"Usage",source:"@site/docs/Library/analysis/grammars/Ambiguity.md",sourceDirName:"Library/analysis/grammars",slug:"/Library/analysis/grammars/Ambiguity",permalink:"/docs/Library/analysis/grammars/Ambiguity",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/grammars/Ambiguity.md",tags:[],version:"current",frontMatter:{title:"module analysis::grammars::Ambiguity"},sidebar:"tutorialSidebar",previous:{title:"analysis::grammars",permalink:"/docs/Library/analysis/grammars/"},next:{title:"module analysis::grammars::Brackets",permalink:"/docs/Library/analysis/grammars/Brackets"}},u={},o=[{value:"Usage",id:"usage",level:4},{value:"function diagnose",id:"analysis-grammars-Ambiguity-diagnose",level:2},{value:"function findCauses",id:"analysis-grammars-Ambiguity-findCauses",level:2},{value:"function verticalCauses",id:"analysis-grammars-Ambiguity-verticalCauses",level:2},{value:"function exceptAdvise",id:"analysis-grammars-Ambiguity-exceptAdvise",level:2},{value:"function deeperCauses",id:"analysis-grammars-Ambiguity-deeperCauses",level:2},{value:"function yield",id:"analysis-grammars-Ambiguity-yield",level:2},{value:"function reorderingCauses",id:"analysis-grammars-Ambiguity-reorderingCauses",level:2},{value:"function priorityCauses",id:"analysis-grammars-Ambiguity-priorityCauses",level:2},{value:"function danglingCauses",id:"analysis-grammars-Ambiguity-danglingCauses",level:2},{value:"function danglingFollowSolutions",id:"analysis-grammars-Ambiguity-danglingFollowSolutions",level:2},{value:"function danglingOffsideSolutions",id:"analysis-grammars-Ambiguity-danglingOffsideSolutions",level:2},{value:"function associativityCauses",id:"analysis-grammars-Ambiguity-associativityCauses",level:2}],m={toc:o};function g(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import analysis::grammars::Ambiguity;")),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-diagnose"},"function diagnose"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] diagnose(Tree t)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] diagnose(str amb)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-findCauses"},"function findCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] findCauses(Tree a)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] findCauses(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-verticalCauses"},"function verticalCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] verticalCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-exceptAdvise"},"function exceptAdvise"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] exceptAdvise(Tree x, set[Production] _, set[Production] pY)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-deeperCauses"},"function deeperCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] deeperCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-yield"},"function yield"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[int] yield(Tree x)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-reorderingCauses"},"function reorderingCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] reorderingCauses(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-priorityCauses"},"function priorityCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] priorityCauses(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-danglingCauses"},"function danglingCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] danglingCauses(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-danglingFollowSolutions"},"function danglingFollowSolutions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] danglingFollowSolutions(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-danglingOffsideSolutions"},"function danglingOffsideSolutions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] danglingOffsideSolutions(Tree x, Tree y)"))),(0,n.kt)("h2",{id:"analysis-grammars-Ambiguity-associativityCauses"},"function associativityCauses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] associativityCauses(Tree x, Tree y)"))))}g.isMDXComponent=!0}}]);