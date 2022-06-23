"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[2043],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,f=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1204:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],s={authors:["jvinju","pklint"],title:"Rascal 0.17.x release notes"},o=void 0,c={permalink:"/release-notes/2020/03/09/rascal-0-17-x-release-notes",source:"@site/release-notes/2020-03-09-rascal-0-17-x-release-notes.md",title:"Rascal 0.17.x release notes",description:"In this post we report on the Rascal release 0.17.x, which includes all changes since the 0.16.x releases.",date:"2020-03-09T00:00:00.000Z",formattedDate:"March 9, 2020",tags:[],readingTime:1.585,truncated:!0,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"},{name:"Paul Klint",title:"Research Fellow @ CWI, Rascal Godfather",url:"https://www.cwi.nl/people/paul-klint",imageURL:"https://www.adviescollegeicttoetsing.nl/binaries/medium/content/gallery/adviescollegeicttoetsing/content-afbeeldingen/leden-adviescollege-ict-toetsing/paul-klint-213-x-300-px.jpg",key:"pklint"}],frontMatter:{authors:["jvinju","pklint"],title:"Rascal 0.17.x release notes"},prevItem:{title:"Rascal 0.23.x release notes",permalink:"/release-notes/2022/04/20/rascal-0-23-x-release-notes"},nextItem:{title:"Rascal 0.9.x release notes",permalink:"/release-notes/2017/12/12/rascal-0-9-x-release-notes"}},p={authorsImageUrls:[void 0,void 0]},u=[{value:"Release 0.17.0 - March 16th, 2020",id:"release-0170---march-16th-2020",level:2}],h={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this post we report on the Rascal release 0.17.x, which includes all changes since the 0.16.x releases. "),(0,l.kt)("h2",{id:"release-0170---march-16th-2020"},"Release 0.17.0 - March 16th, 2020"),(0,l.kt)("p",null,"The 0.15.x releases served as daily pre-releases for 0.17.0, while 0.16.x was a stable release which included all patches since 0.10.0. The releases between 0.10.0 and 0.16.0 have mainly been concerned with bootstrapping and minor bugfixes."),(0,l.kt)("p",null,"The current release 0.17.x is a step towards bootstrapping the Rascal compiler and making the new static checker (type checker) available. "),(0,l.kt)("p",null,"The static checker:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"checks all features of Rascal"),(0,l.kt)("li",{parentName:"ul"},"is written in Rascal using the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/usethesource/typepal"},"TypePal framework")),(0,l.kt)("li",{parentName:"ul"},'is activated on "project clean" and "file save"'),(0,l.kt)("li",{parentName:"ul"},"runs for now in the Rascal interpreter and may be slow on bigger projects (this is transitional, so bear with us)"),(0,l.kt)("li",{parentName:"ul"},'enables editor features such as hover-help and jump-to-definition in Eclipse, based on the state of the file after the last "save"'),(0,l.kt)("li",{parentName:"ul"},"using the Eclipse Preferences: Eclipse > Preferences > Rascal > Enable Rascal Compiler, type checking can be turned on or off")),(0,l.kt)("p",null,"Also in this release significant steps have been made towards Rascal project deployment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In RASCAL.MF, Use ",(0,l.kt)("inlineCode",{parentName:"li"},"Required-Libraries: |lib://myDependency|")," to declare projects you depend on"),(0,l.kt)("li",{parentName:"ul"},"Declare a project using ",(0,l.kt)("inlineCode",{parentName:"li"},"Project-Name: projectName")," in RASCAL.MF"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"|lib://name|")," scheme always resolves to the root of a jar or target folder for a project with that name"),(0,l.kt)("li",{parentName:"ul"},"Eclipse, maven and Junit use the above information to configure interpreter and compiler search paths correctly"),(0,l.kt)("li",{parentName:"ul"},"The starting point is the JVM classpath: every RASCAL.MF file found on this path leads to a loadable library"),(0,l.kt)("li",{parentName:"ul"},"IDEs such as Eclipse dynamically resolve ",(0,l.kt)("inlineCode",{parentName:"li"},"lib://")," references to respective project's target folders if so required")),(0,l.kt)("p",null,"Other notable changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"all static errors and warnings in the standard library have been resolved"),(0,l.kt)("li",{parentName:"ul"},"general code cleanup"),(0,l.kt)("li",{parentName:"ul"},"resolved many issues (thanks all for reporting!)"),(0,l.kt)("li",{parentName:"ul"},"various performance improvements")))}m.isMDXComponent=!0}}]);