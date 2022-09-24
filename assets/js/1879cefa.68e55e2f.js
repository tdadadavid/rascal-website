"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93392],{3905:(a,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var t=n(67294);function l(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,l=function(a,e){if(null==a)return{};var n,t,l={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(l[n]=a[n]);return l}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(l[n]=a[n])}return l}var d=t.createContext({}),u=function(a){var e=t.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=u(a.components);return t.createElement(d.Provider,{value:e},a.children)},y={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},o=t.forwardRef((function(a,e){var n=a.components,l=a.mdxType,i=a.originalType,d=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),o=u(n),h=l,k=o["".concat(d,".").concat(h)]||o[h]||y[h]||i;return n?t.createElement(k,r(r({ref:e},c),{},{components:n})):t.createElement(k,r({ref:e},c))}));function h(a,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var i=n.length,r=new Array(i);r[0]=o;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=a,s.mdxType="string"==typeof a?a:l,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},71467:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(87462),l=(n(67294),n(3905));const i={title:"module analysis::text::search::StandardAnalyzers"},r=void 0,s={unversionedId:"Library/analysis/text/search/StandardAnalyzers",id:"Library/analysis/text/search/StandardAnalyzers",title:"module analysis::text::search::StandardAnalyzers",description:"Usage",source:"@site/docs/Library/analysis/text/search/StandardAnalyzers.md",sourceDirName:"Library/analysis/text/search",slug:"/Library/analysis/text/search/StandardAnalyzers",permalink:"/docs/Library/analysis/text/search/StandardAnalyzers",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/text/search/StandardAnalyzers.md",tags:[],version:"current",frontMatter:{title:"module analysis::text::search::StandardAnalyzers"},sidebar:"tutorialSidebar",previous:{title:"module analysis::text::search::LuceneTest",permalink:"/docs/Library/analysis/text/search/LuceneTest"},next:{title:"analysis::text::stemming",permalink:"/docs/Library/analysis/text/stemming/"}},d={},u=[{value:"Usage",id:"usage",level:4},{value:"function arabic",id:"analysis-text-search-StandardAnalyzers-arabic",level:2},{value:"function armenian",id:"analysis-text-search-StandardAnalyzers-armenian",level:2},{value:"function basque",id:"analysis-text-search-StandardAnalyzers-basque",level:2},{value:"function bengali",id:"analysis-text-search-StandardAnalyzers-bengali",level:2},{value:"function brazilian",id:"analysis-text-search-StandardAnalyzers-brazilian",level:2},{value:"function bulgarian",id:"analysis-text-search-StandardAnalyzers-bulgarian",level:2},{value:"function catalan",id:"analysis-text-search-StandardAnalyzers-catalan",level:2},{value:"function czech",id:"analysis-text-search-StandardAnalyzers-czech",level:2},{value:"function danish",id:"analysis-text-search-StandardAnalyzers-danish",level:2},{value:"function dutch",id:"analysis-text-search-StandardAnalyzers-dutch",level:2},{value:"function english",id:"analysis-text-search-StandardAnalyzers-english",level:2},{value:"function finnish",id:"analysis-text-search-StandardAnalyzers-finnish",level:2},{value:"function galician",id:"analysis-text-search-StandardAnalyzers-galician",level:2},{value:"function german",id:"analysis-text-search-StandardAnalyzers-german",level:2},{value:"function greek",id:"analysis-text-search-StandardAnalyzers-greek",level:2},{value:"function hindi",id:"analysis-text-search-StandardAnalyzers-hindi",level:2},{value:"function hungarian",id:"analysis-text-search-StandardAnalyzers-hungarian",level:2},{value:"function indonesian",id:"analysis-text-search-StandardAnalyzers-indonesian",level:2},{value:"function irish",id:"analysis-text-search-StandardAnalyzers-irish",level:2},{value:"function italian",id:"analysis-text-search-StandardAnalyzers-italian",level:2},{value:"function latvian",id:"analysis-text-search-StandardAnalyzers-latvian",level:2},{value:"function lithuanian",id:"analysis-text-search-StandardAnalyzers-lithuanian",level:2},{value:"function norwegian",id:"analysis-text-search-StandardAnalyzers-norwegian",level:2},{value:"function persian",id:"analysis-text-search-StandardAnalyzers-persian",level:2},{value:"function portugese",id:"analysis-text-search-StandardAnalyzers-portugese",level:2},{value:"function romanian",id:"analysis-text-search-StandardAnalyzers-romanian",level:2},{value:"function russian",id:"analysis-text-search-StandardAnalyzers-russian",level:2},{value:"function sorani",id:"analysis-text-search-StandardAnalyzers-sorani",level:2},{value:"function spanish",id:"analysis-text-search-StandardAnalyzers-spanish",level:2},{value:"function swedish",id:"analysis-text-search-StandardAnalyzers-swedish",level:2},{value:"function thai",id:"analysis-text-search-StandardAnalyzers-thai",level:2},{value:"function turkish",id:"analysis-text-search-StandardAnalyzers-turkish",level:2},{value:"function cjkAnalyzer",id:"analysis-text-search-StandardAnalyzers-cjkAnalyzer",level:2},{value:"function stopAnalyzer",id:"analysis-text-search-StandardAnalyzers-stopAnalyzer",level:2},{value:"function keywordAnalyzer",id:"analysis-text-search-StandardAnalyzers-keywordAnalyzer",level:2},{value:"function unicodeWhitespaceAnalyzer",id:"analysis-text-search-StandardAnalyzers-unicodeWhitespaceAnalyzer",level:2},{value:"function emailAnalyzer",id:"analysis-text-search-StandardAnalyzers-emailAnalyzer",level:2}],c={toc:u};function y(a){let{components:e,...n}=a;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import analysis::text::search::StandardAnalyzers;")),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-arabic"},"function arabic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer arabic()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-armenian"},"function armenian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer armenian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-basque"},"function basque"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer basque()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-bengali"},"function bengali"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer bengali()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-brazilian"},"function brazilian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer brazilian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-bulgarian"},"function bulgarian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer bulgarian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-catalan"},"function catalan"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer catalan()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-czech"},"function czech"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer czech()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-danish"},"function danish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer danish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-dutch"},"function dutch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer dutch()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-english"},"function english"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer english()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-finnish"},"function finnish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer finnish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-galician"},"function galician"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer galician()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-german"},"function german"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer german()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-greek"},"function greek"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer greek()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-hindi"},"function hindi"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer hindi()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-hungarian"},"function hungarian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer hungarian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-indonesian"},"function indonesian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer indonesian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-irish"},"function irish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer irish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-italian"},"function italian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer italian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-latvian"},"function latvian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer latvian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-lithuanian"},"function lithuanian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer lithuanian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-norwegian"},"function norwegian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer norwegian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-persian"},"function persian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer persian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-portugese"},"function portugese"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer portugese()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-romanian"},"function romanian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer romanian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-russian"},"function russian"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer russian()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-sorani"},"function sorani"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer sorani()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-spanish"},"function spanish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer spanish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-swedish"},"function swedish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer swedish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-thai"},"function thai"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer thai()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-turkish"},"function turkish"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer turkish()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-cjkAnalyzer"},"function cjkAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer cjkAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-stopAnalyzer"},"function stopAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer stopAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-keywordAnalyzer"},"function keywordAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer keywordAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-unicodeWhitespaceAnalyzer"},"function unicodeWhitespaceAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer unicodeWhitespaceAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-StandardAnalyzers-emailAnalyzer"},"function emailAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer emailAnalyzer()"))))}y.isMDXComponent=!0}}]);