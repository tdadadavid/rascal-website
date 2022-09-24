"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[2043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={authors:["jvinju","pklint"],title:"Rascal 0.17.x release notes"},s=void 0,i={permalink:"/release-notes/2020/03/09/rascal-0-17-x-release-notes",source:"@site/release-notes/2020-03-09-rascal-0-17-x-release-notes.md",title:"Rascal 0.17.x release notes",description:"In this post we report on the Rascal release 0.17.x, which includes all changes since the 0.16.x releases.",date:"2020-03-09T00:00:00.000Z",formattedDate:"March 9, 2020",tags:[],readingTime:1.585,hasTruncateMarker:!0,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"},{name:"Paul Klint",title:"Research Fellow @ CWI, Rascal Godfather",url:"https://www.cwi.nl/people/paul-klint",imageURL:"https://www.adviescollegeicttoetsing.nl/binaries/medium/content/gallery/adviescollegeicttoetsing/content-afbeeldingen/leden-adviescollege-ict-toetsing/paul-klint-213-x-300-px.jpg",key:"pklint"}],frontMatter:{authors:["jvinju","pklint"],title:"Rascal 0.17.x release notes"},prevItem:{title:"Rascal 0.23.x release notes",permalink:"/release-notes/2022/04/20/rascal-0-23-x-release-notes"},nextItem:{title:"Rascal 0.9.x release notes",permalink:"/release-notes/2017/12/12/rascal-0-9-x-release-notes"}},o={authorsImageUrls:[void 0,void 0]},c=[{value:"Release 0.17.0 - March 16th, 2020",id:"release-0170---march-16th-2020",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this post we report on the Rascal release 0.17.x, which includes all changes since the 0.16.x releases. "),(0,n.kt)("h2",{id:"release-0170---march-16th-2020"},"Release 0.17.0 - March 16th, 2020"),(0,n.kt)("p",null,"The 0.15.x releases served as daily pre-releases for 0.17.0, while 0.16.x was a stable release which included all patches since 0.10.0. The releases between 0.10.0 and 0.16.0 have mainly been concerned with bootstrapping and minor bugfixes."),(0,n.kt)("p",null,"The current release 0.17.x is a step towards bootstrapping the Rascal compiler and making the new static checker (type checker) available. "),(0,n.kt)("p",null,"The static checker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"checks all features of Rascal"),(0,n.kt)("li",{parentName:"ul"},"is written in Rascal using the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/usethesource/typepal"},"TypePal framework")),(0,n.kt)("li",{parentName:"ul"},'is activated on "project clean" and "file save"'),(0,n.kt)("li",{parentName:"ul"},"runs for now in the Rascal interpreter and may be slow on bigger projects (this is transitional, so bear with us)"),(0,n.kt)("li",{parentName:"ul"},'enables editor features such as hover-help and jump-to-definition in Eclipse, based on the state of the file after the last "save"'),(0,n.kt)("li",{parentName:"ul"},"using the Eclipse Preferences: Eclipse > Preferences > Rascal > Enable Rascal Compiler, type checking can be turned on or off")),(0,n.kt)("p",null,"Also in this release significant steps have been made towards Rascal project deployment:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In RASCAL.MF, Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Required-Libraries: |lib://myDependency|")," to declare projects you depend on"),(0,n.kt)("li",{parentName:"ul"},"Declare a project using ",(0,n.kt)("inlineCode",{parentName:"li"},"Project-Name: projectName")," in RASCAL.MF"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"|lib://name|")," scheme always resolves to the root of a jar or target folder for a project with that name"),(0,n.kt)("li",{parentName:"ul"},"Eclipse, maven and Junit use the above information to configure interpreter and compiler search paths correctly"),(0,n.kt)("li",{parentName:"ul"},"The starting point is the JVM classpath: every RASCAL.MF file found on this path leads to a loadable library"),(0,n.kt)("li",{parentName:"ul"},"IDEs such as Eclipse dynamically resolve ",(0,n.kt)("inlineCode",{parentName:"li"},"lib://")," references to respective project's target folders if so required")),(0,n.kt)("p",null,"Other notable changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"all static errors and warnings in the standard library have been resolved"),(0,n.kt)("li",{parentName:"ul"},"general code cleanup"),(0,n.kt)("li",{parentName:"ul"},"resolved many issues (thanks all for reporting!)"),(0,n.kt)("li",{parentName:"ul"},"various performance improvements")))}u.isMDXComponent=!0}}]);