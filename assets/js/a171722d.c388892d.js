"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[781],{3905:(t,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>c});var l=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e){if(null==t)return{};var i,l,r=function(t,e){if(null==t)return{};var i,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var u=l.createContext({}),o=function(t){var e=l.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},p=function(t){var e=o(t.components);return l.createElement(u.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var i=t.components,r=t.mdxType,n=t.originalType,u=t.parentName,p=h(t,["components","mdxType","originalType","parentName"]),s=o(i),c=r,m=s["".concat(u,".").concat(c)]||s[c]||g[c]||n;return i?l.createElement(m,a(a({ref:e},p),{},{components:i})):l.createElement(m,a({ref:e},p))}));function c(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=i.length,a=new Array(n);a[0]=s;var h={};for(var u in e)hasOwnProperty.call(e,u)&&(h[u]=e[u]);h.originalType=t,h.mdxType="string"==typeof t?t:r,a[1]=h;for(var o=2;o<n;o++)a[o]=i[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,i)}s.displayName="MDXCreateElement"},40431:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>h,toc:()=>o});var l=i(83117),r=(i(67294),i(3905));const n={title:"module util::Highlight"},a=void 0,h={unversionedId:"Library/util/Highlight",id:"Library/util/Highlight",title:"module util::Highlight",description:"Usage",source:"@site/docs/Library/util/Highlight.md",sourceDirName:"Library/util",slug:"/Library/util/Highlight",permalink:"/docs/Library/util/Highlight",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/util/Highlight.md",tags:[],version:"current",frontMatter:{title:"module util::Highlight"},sidebar:"tutorialSidebar",previous:{title:"module util::FileSystem",permalink:"/docs/Library/util/FileSystem"},next:{title:"module util::IDEServices",permalink:"/docs/Library/util/IDEServices"}},u={},o=[{value:"Usage",id:"usage",level:4},{value:"function highlight2html",id:"util-Highlight-highlight2html",level:2},{value:"function isKeyword",id:"util-Highlight-isKeyword",level:2},{value:"function highlight2htmlRec",id:"util-Highlight-highlight2htmlRec",level:2},{value:"function span",id:"util-Highlight-span",level:2},{value:"function wrapLink",id:"util-Highlight-wrapLink",level:2},{value:"function highlight2latex",id:"util-Highlight-highlight2latex",level:2},{value:"function catCmd",id:"util-Highlight-catCmd",level:2}],p={toc:o};function g(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import util::Highlight;")),(0,r.kt)("h2",{id:"util-Highlight-highlight2html"},"function highlight2html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2html(Tree t)"))),(0,r.kt)("h2",{id:"util-Highlight-isKeyword"},"function isKeyword"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool isKeyword(str s)"))),(0,r.kt)("h2",{id:"util-Highlight-highlight2htmlRec"},"function highlight2htmlRec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2htmlRec(t:appl(prod(lit(str l), _, _), _))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2htmlRec(t:appl(prod(cilit(str l), _, _), _))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str highlight2htmlRec(t:appl(prod(_, _, {*_, \\tag("category"(str cat))}), list[Tree] as))')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2htmlRec(appl(prod(_, _, set[Attr] attrs), list[Tree] as))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2htmlRec(appl(regular(_), list[Tree] as))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2htmlRec(amb({k, *_}))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default str highlight2htmlRec(Tree t)"))),(0,r.kt)("h2",{id:"util-Highlight-span"},"function span"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str span(str class, str src)"))),(0,r.kt)("h2",{id:"util-Highlight-wrapLink"},"function wrapLink"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default str wrapLink(str text, Tree _)"))),(0,r.kt)("h2",{id:"util-Highlight-highlight2latex"},"function highlight2latex"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2latex(appl(prod(lit(str l), _, _), _))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2latex(appl(prod(cilit(str l), _, _), _))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str highlight2latex(appl(prod(_, _, {*_, \\tag("category"(str cat))}), list[Tree] as))')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2latex(appl(prod(_, _, set[Attr] attrs), list[Tree] as))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2latex(appl(regular(_), list[Tree] as))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str highlight2latex(amb({k, *_}))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default str highlight2latex(Tree t)"))),(0,r.kt)("h2",{id:"util-Highlight-catCmd"},"function catCmd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str catCmd(str class, str src)"))))}g.isMDXComponent=!0}}]);