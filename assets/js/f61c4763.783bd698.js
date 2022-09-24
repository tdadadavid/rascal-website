"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[46576],{3905:(e,i,t)=>{t.d(i,{Zo:()=>o,kt:()=>d});var s=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,s,a=function(e,i){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),p=function(e){var i=s.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},o=function(e){var i=p(e.components);return s.createElement(c.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return s.createElement(s.Fragment,{},i)}},m=s.forwardRef((function(e,i){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return t?s.createElement(k,l(l({ref:i},o),{},{components:t})):s.createElement(k,l({ref:i},o))}));function d(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=m;var r={};for(var c in i)hasOwnProperty.call(i,c)&&(r[c]=i[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<n;p++)l[p]=t[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4754:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var s=t(87462),a=(t(67294),t(3905));const n={title:"module analysis::statistics::Descriptive"},l=void 0,r={unversionedId:"Library/analysis/statistics/Descriptive",id:"Library/analysis/statistics/Descriptive",title:"module analysis::statistics::Descriptive",description:"Usage",source:"@site/docs/Library/analysis/statistics/Descriptive.md",sourceDirName:"Library/analysis/statistics",slug:"/Library/analysis/statistics/Descriptive",permalink:"/docs/Library/analysis/statistics/Descriptive",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/statistics/Descriptive.md",tags:[],version:"current",frontMatter:{title:"module analysis::statistics::Descriptive"},sidebar:"tutorialSidebar",previous:{title:"module analysis::statistics::Correlation",permalink:"/docs/Library/analysis/statistics/Correlation"},next:{title:"module analysis::statistics::Frequency",permalink:"/docs/Library/analysis/statistics/Frequency"}},c={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"function geometricMean",id:"analysis-statistics-Descriptive-geometricMean",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"function kurtosis",id:"analysis-statistics-Descriptive-kurtosis",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function kurtosisExcess",id:"analysis-statistics-Descriptive-kurtosisExcess",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"function max",id:"analysis-statistics-Descriptive-max",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"function mean",id:"analysis-statistics-Descriptive-mean",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-4",level:4},{value:"function median",id:"analysis-statistics-Descriptive-median",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Description",id:"description-5",level:4},{value:"Examples",id:"examples-1",level:4},{value:"function middle",id:"analysis-statistics-Descriptive-middle",level:2},{value:"function min",id:"analysis-statistics-Descriptive-min",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"function percentile",id:"analysis-statistics-Descriptive-percentile",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"Description",id:"description-6",level:4},{value:"function variance",id:"analysis-statistics-Descriptive-variance",level:2},{value:"Synopsis",id:"synopsis-9",level:4},{value:"Description",id:"description-7",level:4},{value:"function skewness",id:"analysis-statistics-Descriptive-skewness",level:2},{value:"Synopsis",id:"synopsis-10",level:4},{value:"Description",id:"description-8",level:4},{value:"function standardDeviation",id:"analysis-statistics-Descriptive-standardDeviation",level:2},{value:"Synopsis",id:"synopsis-11",level:4},{value:"Description",id:"description-9",level:4},{value:"function sum",id:"analysis-statistics-Descriptive-sum",level:2},{value:"Synopsis",id:"synopsis-12",level:4},{value:"function sumsq",id:"analysis-statistics-Descriptive-sumsq",level:2},{value:"Synopsis",id:"synopsis-13",level:4},{value:"function centralMoment",id:"analysis-statistics-Descriptive-centralMoment",level:2},{value:"function moment",id:"analysis-statistics-Descriptive-moment",level:2}],o={toc:p};function u(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},o,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import analysis::statistics::Descriptive;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Descriptive Statistics."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Provides the following univariate (single variable) statistics functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-centralMoment"},"centralMoment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-geometricMean"},"geometricMean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-kurtosis"},"kurtosis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-kurtosisExcess"},"kurtosisExcess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-max"},"max")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-mean"},"mean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-median"},"median")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-middle"},"middle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-min"},"min")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-moment"},"moment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-percentile"},"percentile")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-skewness"},"skewness")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-standardDeviation"},"standardDeviation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-sum"},"sum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-sumsq"},"sumsq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-variance"},"variance"))),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Descriptive;\nok\nrascal>D = [67, 88, 55, 92.5, 102, 51];\nlist[num]: [67,88,55,92.5,102,51]\nrascal>mn = min(D);\nnum: 51\nrascal>mx = max(D);\nnum: 102\nrascal>range = mx - mn;\nnum: 51\nrascal>midrange =  mn + range/2;\nnum: 76.5\nrascal>sum(D);\nnum: 455.5\nrascal>mean(D);\nreal: 75.91666667\nrascal>geometricMean(D);\nreal: 73.3734107237\nrascal>standardDeviation(D);\nreal: 21.1622698845\nrascal>variance(D);\nnum: 447.841666666666666666666666666\nrascal>percentile(D,25);\nnum: 55\nrascal>percentile(D,50);\nnum: 67\nrascal>percentile(D,75);\nnum: 92.5\n")),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-geometricMean"},"function geometricMean"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real geometricMean([num hd, *num tl])"))),(0,a.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,a.kt)("p",null,"Geometric mean of data values."),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Geometric_mean%5Bgeometric"},"http://en.wikipedia.org/wiki/Geometric_mean[geometric")," mean] of the given data values."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-kurtosis"},"function kurtosis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real kurtosis(list[num] values:[_, *_])"))),(0,a.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,a.kt)("p",null,"Kurtosis of data values."),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Kurtosis%5Bkurtosis%5D"},"http://en.wikipedia.org/wiki/Kurtosis[kurtosis]"),' of the given data values.\nKurtosis is a measure of the "peakedness" of a distribution.'),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-kurtosisExcess"},"function kurtosisExcess"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real kurtosisExcess(list[num] values)"))),(0,a.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,a.kt)("p",null,"Kurtosis excess of data values."),(0,a.kt)("h4",{id:"description-3"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Kurtosis%5Bkurtosis"},"http://en.wikipedia.org/wiki/Kurtosis[kurtosis"),' excess] of the given data values.\nKurtosis excess is a measure of the "peakedness" of a distribution corrected such that a normal distribution will be 0.'),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-max"},"function max"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(&T <: num) max([(&T <: num) h, *(&T <: num) t])"))),(0,a.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,a.kt)("p",null,"Largest data value."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-mean"},"function mean"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real mean(list[num] nums:[_, *_])"))),(0,a.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,a.kt)("p",null,"Arithmetic mean of data values."),(0,a.kt)("h4",{id:"description-4"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Arithmetic_mean%5Barithmetic"},"http://en.wikipedia.org/wiki/Arithmetic_mean[arithmetic")," mean] of the data values."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-median"},"function median"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default real median(list[num] nums:[_, *_])"))),(0,a.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,a.kt)("p",null,"Median of data values."),(0,a.kt)("h4",{id:"description-5"},"Description"),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Median%5Bmedian%5D"},"http://en.wikipedia.org/wiki/Median[median]")," of the available values.\nThis is the same as the 50th ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Descriptive#analysis::statistics::Descriptive-percentile"},"percentile"),"."),(0,a.kt)("h4",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Descriptive;\nok\nrascal>median([1,2,5,7,8]);\nreal: 5.\nrascal>median([1,2,2,6,7,8]);\nreal: 4.\n")),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-middle"},"function middle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list[&T] middle(list[&T] nums)"))),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-min"},"function min"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(&T <: num) min([(&T <: num) h, *(&T <: num) t])"))),(0,a.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,a.kt)("p",null,"Smallest data value."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-percentile"},"function percentile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T <: num percentile(list[&T <: num] nums, num p)"))),(0,a.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,a.kt)("p",null,"Percentile of data values."),(0,a.kt)("h4",{id:"description-6"},"Description"),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"th ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Percentile%5Bpercentile%5D"},"http://en.wikipedia.org/wiki/Percentile[percentile]")," of the data values.\n0 < ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," <= 100 should hold."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-variance"},"function variance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"num variance([num hd, *num tl])"))),(0,a.kt)("h4",{id:"synopsis-9"},"Synopsis"),(0,a.kt)("p",null,"Variance of data values."),(0,a.kt)("h4",{id:"description-7"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Variance%5Bvariance%5D"},"http://en.wikipedia.org/wiki/Variance[variance]")," of the data values.\nIt measures how far a set of numbers is spread out."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-skewness"},"function skewness"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real skewness(list[num] values:[_, *_])"))),(0,a.kt)("h4",{id:"synopsis-10"},"Synopsis"),(0,a.kt)("p",null,"Skewness of data values."),(0,a.kt)("h4",{id:"description-8"},"Description"),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Skewness%5Bskewness%5D"},"http://en.wikipedia.org/wiki/Skewness[skewness]")," of the available values. Skewness is a measure of the asymmetry of a given distribution."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-standardDeviation"},"function standardDeviation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real standardDeviation(list[num] values)"))),(0,a.kt)("h4",{id:"synopsis-11"},"Synopsis"),(0,a.kt)("p",null,"Standard deviation of data values."),(0,a.kt)("h4",{id:"description-9"},"Description"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Standard_deviation%5Bstandard"},"http://en.wikipedia.org/wiki/Standard_deviation[standard")," deviation]\nof the data values. It shows how much variation exists from the average (mean, or expected value). "),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-sum"},"function sum"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(&T <:num) sum([(&T <: num) hd, *(&T <: num) tl])"))),(0,a.kt)("h4",{id:"synopsis-12"},"Synopsis"),(0,a.kt)("p",null,"Sum of data values."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-sumsq"},"function sumsq"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(&T <:num) sumsq(list[&T <:num] values)"))),(0,a.kt)("h4",{id:"synopsis-13"},"Synopsis"),(0,a.kt)("p",null,"Sum of the squares of data values."),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-centralMoment"},"function centralMoment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real centralMoment(list[num] nums:[_, *_], int order = 1)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Calculate the k-th central moment\n")),(0,a.kt)("h2",{id:"analysis-statistics-Descriptive-moment"},"function moment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"real moment(list[num] nums:[_, *_], int order = 1)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Calculate the k-th moment\n")))}u.isMDXComponent=!0}}]);