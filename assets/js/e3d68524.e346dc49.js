"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<n;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var r=a(83117),l=(a(67294),a(3905));const n={},s=void 0,i={unversionedId:"Library/lang/rascal/tutor/examples/Test/index",id:"Library/lang/rascal/tutor/examples/Test/index",title:"index",description:"Synopsis {/Lang/rascal/tutor/examples/Test}",source:"@site/docs/Library/lang/rascal/tutor/examples/Test/index.md",sourceDirName:"Library/lang/rascal/tutor/examples/Test",slug:"/Library/lang/rascal/tutor/examples/Test/",permalink:"/docs/Library/lang/rascal/tutor/examples/Test/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tutor/examples/Test/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tutor::examples",permalink:"/docs/Library/lang/rascal/tutor/examples/"},next:{title:"index",permalink:"/docs/Library/lang/rascal/tutor/examples/Test/CallAnalysis/"}},p={},o=[{value:"Synopsis {/Lang/rascal/tutor/examples/Test}",id:"synopsis-langrascaltutorexamplestest",level:2},{value:"Description {/Lang/rascal/tutor/examples/Test}",id:"description-langrascaltutorexamplestest",level:2},{value:"Examples  {/Lang/rascal/tutor/examples/Test}",id:"examples--langrascaltutorexamplestest",level:2},{value:"Benefits {/Lang/rascal/tutor/examples/Test}",id:"benefits-langrascaltutorexamplestest",level:2},{value:"Pitfalls {/Lang/rascal/tutor/examples/Test}",id:"pitfalls-langrascaltutorexamplestest",level:2}],c={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis-langrascaltutorexamplestest"},"Synopsis {/Lang/rascal/tutor/examples/Test}"),(0,l.kt)("p",null,"This is a test synopsis."),(0,l.kt)("h2",{id:"description-langrascaltutorexamplestest"},"Description {/Lang/rascal/tutor/examples/Test}"),(0,l.kt)("p",null,"See examples below!!!"),(0,l.kt)("h2",{id:"examples--langrascaltutorexamplestest"},"Examples  {/Lang/rascal/tutor/examples/Test}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Content; \nok\nrascal>html("this is some \\<strong\\>HTML\\</strong\\> output")\n<div class="rascal-html-output">\n  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9120/"></iframe>\n</div>\nrascal>file(|https://www.rascal-mpl.org/assets/ico/favicon.png|)\n<div class="rascal-html-output">\n  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9120/"></iframe>\n</div>\nrascal>1 + 1 == 2\nbool: true\nrascal>int count = 1;\nint: 1\nrascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })\n<div class="rascal-html-output">\n  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9121/"></iframe>\n</div>\nrascal>count;\nint: 1\nrascal>count = 66;\nint: 66\nrascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })\n<div class="rascal-html-output">\n  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9121/"></iframe>\n</div>\nrascal>count;\nint: 66\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"emphasis"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"bold"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http:///rascal-mpl.org"},"Rascal Web site"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../../Library/lang/rascal/tutor/examples/Test/CallAnalysis"},"./call analysis")," ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Table:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Module"),(0,l.kt)("th",{parentName:"tr",align:null},"LOC"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"20")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$A$ \\| $B$")),(0,l.kt)("td",{parentName:"tr",align:null},"alternative")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\|\\|")),(0,l.kt)("td",{parentName:"tr",align:null},"or")))),(0,l.kt)("p",null,"Horizontal rule:"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"in code: italics"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/rascal/tutor/examples/Test/"},"Test"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/rascal/tutor/examples/Test/CallAnalysis/"},"CallAnalysis"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/rascal/tutor/examples/Test/If/"},"If"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/rascal/tutor/examples/Test/Libraries/"},"Libraries"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/rascal/tutor/examples/Test/Questions/"},"Questions")))),(0,l.kt)("h2",{id:"benefits-langrascaltutorexamplestest"},"Benefits {/Lang/rascal/tutor/examples/Test}"),(0,l.kt)("h2",{id:"pitfalls-langrascaltutorexamplestest"},"Pitfalls {/Lang/rascal/tutor/examples/Test}"))}m.isMDXComponent=!0}}]);