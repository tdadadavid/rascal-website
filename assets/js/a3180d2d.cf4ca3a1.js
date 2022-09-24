"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[80773],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return t?r.createElement(y,s(s({ref:a},p),{},{components:t})):r.createElement(y,s({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20804:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const n={title:"module analysis::statistics::Correlation"},s=void 0,o={unversionedId:"Library/analysis/statistics/Correlation",id:"Library/analysis/statistics/Correlation",title:"module analysis::statistics::Correlation",description:"Usage",source:"@site/docs/Library/analysis/statistics/Correlation.md",sourceDirName:"Library/analysis/statistics",slug:"/Library/analysis/statistics/Correlation",permalink:"/docs/Library/analysis/statistics/Correlation",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/statistics/Correlation.md",tags:[],version:"current",frontMatter:{title:"module analysis::statistics::Correlation"},sidebar:"tutorialSidebar",previous:{title:"analysis::statistics",permalink:"/docs/Library/analysis/statistics/"},next:{title:"module analysis::statistics::Descriptive",permalink:"/docs/Library/analysis/statistics/Descriptive"}},l={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function PearsonsCorrelation",id:"analysis-statistics-Correlation-PearsonsCorrelation",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"function PearsonsCorrelationStandardErrors",id:"analysis-statistics-Correlation-PearsonsCorrelationStandardErrors",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function PearsonsCorrelationPValues",id:"analysis-statistics-Correlation-PearsonsCorrelationPValues",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function SpearmansCorrelation",id:"analysis-statistics-Correlation-SpearmansCorrelation",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-2",level:4},{value:"Pitfalls",id:"pitfalls-1",level:4},{value:"function covariance",id:"analysis-statistics-Correlation-covariance",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-3",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::statistics::Correlation;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Correlation between data values."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Compute the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Correlation%5Bcorrelation%5D"},"http://en.wikipedia.org/wiki/Correlation[correlation]")," between pairs of data values.\nCorrelation measures the statistical relationship between two sets of data."),(0,i.kt)("p",null,"The following functions are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"PearsonsCorrelation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelationPValues"},"PearsonsCorrelationPValues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelationStandardErrors"},"PearsonsCorrelationStandardErrors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-SpearmansCorrelation"},"SpearmansCorrelation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-covariance"},"covariance"))),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelation"},"function PearsonsCorrelation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num PearsonsCorrelation(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,i.kt)("p",null,"Pearson product-moment correlation coefficient."),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Compute the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient%5BPearson"},"http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient[Pearson")," product-moment correlation coefficient].\nIt is a measure of the strength of the linear dependence between two variables."),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-SpearmansCorrelation"},"spearmans correlation")," when there is a ",(0,i.kt)("em",{parentName:"p"},"monotonous dependence")," between the two variables."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelationStandardErrors"},"function PearsonsCorrelationStandardErrors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[real] PearsonsCorrelationStandardErrors(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,i.kt)("p",null,"Standard errors associated with Pearson correlation. "),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelationPValues"},"function PearsonsCorrelationPValues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[real] PearsonsCorrelationPValues(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,i.kt)("p",null,"P-values (significance) associated with Pearson correlation."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-SpearmansCorrelation"},"function SpearmansCorrelation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num SpearmansCorrelation(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,i.kt)("p",null,"Spearman's rank correlation coefficient."),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Compute ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Spearman's_rank_correlation_coefficient%5BSpearman's"},"http://en.wikipedia.org/wiki/Spearman's_rank_correlation_coefficient[Spearman's")," rank correlation coefficient].\nThe correlation between the data values is computed by first performing a rank transformation\non the data values using a natural ranking and then computing ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"pearsons correlation"),"."),(0,i.kt)("h4",{id:"pitfalls-1"},"Pitfalls"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"pearsons correlation")," when there is a ",(0,i.kt)("em",{parentName:"p"},"linear dependence")," between the variables."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-covariance"},"function covariance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num covariance(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,i.kt)("p",null,"Covariance of data values."),(0,i.kt)("h4",{id:"description-3"},"Description"),(0,i.kt)("p",null,"Computes the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Covariance%5Bcovariance%5D"},"http://en.wikipedia.org/wiki/Covariance[covariance]")," between the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," values."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Correlation;\nok\nrascal>covariance([<1,12>,<3,12>,<3,11>,<5,7>]);\nnum: -2.5\n")))}u.isMDXComponent=!0}}]);