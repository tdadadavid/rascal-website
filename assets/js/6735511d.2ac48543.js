"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[54],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),o=["components"],i={authors:["jvinju"],title:"Rascal 0.7.x release notes"},s=void 0,u={permalink:"/release-notes/2014/10/27/rascal-0-7-x-release-notes",source:"@site/release-notes/2014-10-27-rascal-0-7-x-release-notes.md",title:"Rascal 0.7.x release notes",description:"In this post we report on the Rascal release 0.7.0. We expect a number of patch releases as well, which we report on by updating this post (at its end) when necessary. The Rascal release includes the following main components:",date:"2014-10-27T00:00:00.000Z",formattedDate:"October 27, 2014",tags:[],readingTime:2.03,truncated:!1,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"}],frontMatter:{authors:["jvinju"],title:"Rascal 0.7.x release notes"},prevItem:{title:"Rascal 0.9.x release notes",permalink:"/release-notes/2017/12/12/rascal-0-9-x-release-notes"}},c={authorsImageUrls:[void 0]},p=[{value:"M3",id:"m3",level:3},{value:"Keyword parameters",id:"keyword-parameters",level:3},{value:"Looking forward to the 0.8.x, 0.9.x and 1.0 releases",id:"looking-forward-to-the-08x-09x-and-10-releases",level:3},{value:"Patch releases",id:"patch-releases",level:3}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this post we report on the Rascal release 0.7.0. We expect a number of patch releases as well, which we report on by updating this post (at its end) when necessary. The Rascal release includes the following main components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parser and interpreter: parsing and running Rascal programs"),(0,l.kt)("li",{parentName:"ul"},"Parser generator: generating parsers for programming languages and domain specific languages"),(0,l.kt)("li",{parentName:"ul"},"Eclipse plugin: an IDE for Rascal"),(0,l.kt)("li",{parentName:"ul"},"Eclipse plugin generator for DSLs: an IDE generator based on Rascal programs"),(0,l.kt)("li",{parentName:"ul"},"Rascal commandline shell: to run Rascal independently from Eclipse"),(0,l.kt)("li",{parentName:"ul"},"Standard library: utilities for programming in Rascal, including several (stable) programming language front-ends and general analysis facilities.")),(0,l.kt)("p",null,"Compared to 0.6.x the 0.7 release is mainly a bug fix release, with a number of extensions to the libraries and one new language feature. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The new language feature is keyword parameters for both functions and data constructors. "),(0,l.kt)("li",{parentName:"ul"},"In terms of library funcionality the big new things is ",(0,l.kt)("em",{parentName:"li"},"M3"),", a common intermediate format for facts about source code. This includes a standard set of relations (containment, def/use, etc.) and a preferred way of modeling abstract syntax trees.")),(0,l.kt)("h3",{id:"m3"},"M3"),(0,l.kt)("h3",{id:"keyword-parameters"},"Keyword parameters"),(0,l.kt)("h3",{id:"looking-forward-to-the-08x-09x-and-10-releases"},"Looking forward to the 0.8.x, 0.9.x and 1.0 releases"),(0,l.kt)("p",null,"The 0.8 release is planned with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Re-implemented general top-down parsing algorithm with on-demand lexing"),(0,l.kt)("li",{parentName:"ul"},"Fast regular expressions and better language integrated pattern matching"),(0,l.kt)("li",{parentName:"ul"},"Concrete syntax features completed and streamlined due to new parser integration"),(0,l.kt)("li",{parentName:"ul"},"Standard library component for communicating with SMT solvers easily")),(0,l.kt)("p",null,"The 0.9 release is planned with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keyword parameters replacing annotations completely"),(0,l.kt)("li",{parentName:"ul"},"New Figure library based on javascript")),(0,l.kt)("p",null,"The 1.0 release is a big bang release which includes the following new components which have been developed over the last two years:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Rascal type checker"),(0,l.kt)("li",{parentName:"ul"},"Rascal compiler to RVM"),(0,l.kt)("li",{parentName:"ul"},"RVM interpreter")),(0,l.kt)("p",null,"In 1.0 the old Rascal interpreter will still be included, but from here on its usage will be deprecated. We will be working to switch the IDE support to using the new infra-structure for a while and when this is finished the interpreter will not be released any longer. Note that this does not mean that we will not have a REPL for Rascal anymore. We will always have a REPL."),(0,l.kt)("h3",{id:"patch-releases"},"Patch releases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Patch 0.7.1. includes an update to the documentation on M3"),(0,l.kt)("li",{parentName:"ul"},"Patch 0.7.2. bug fixes"),(0,l.kt)("li",{parentName:"ul"},"Patch 0.7.3. bug fixes and memory optimizations (more than 50%)")))}d.isMDXComponent=!0}}]);