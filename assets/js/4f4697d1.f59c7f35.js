"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[4959],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Navigating the WordPress Plugin Landscape",authors:["mhills"]},l=void 0,c={permalink:"/blog/2016/05/16/navigating-the-wordpress-plugin-landscape",editUrl:"https://github.com/usethesource/rascal-website/tree/main/packages/create-docusaurus/templates/shared/blog/2016-05-16-navigating-the-wordpress-plugin-landscape.md",source:"@site/blog/2016-05-16-navigating-the-wordpress-plugin-landscape.md",title:"Navigating the WordPress Plugin Landscape",description:"Helping PHP developers using Rascal-based code analysis.",date:"2016-05-16T00:00:00.000Z",formattedDate:"May 16, 2016",tags:[],readingTime:.9,truncated:!1,authors:[{name:"Mark Hills",title:"Associate Professor @ East Caroline University, Rascal Contributor",url:"http://www.cs.ecu.edu/hillsma/",imageURL:"https://s.gravatar.com/avatar/cf27b8d5ab19b451087c19f5493d32a9?s=270%27",key:"mhills"}],frontMatter:{title:"Navigating the WordPress Plugin Landscape",authors:["mhills"]},prevItem:{title:"What is ValLang?",permalink:"/blog/2017/03/01/what-is-vallang"},nextItem:{title:"Performance Modeling of Maximal Sharing - Experience Report",permalink:"/blog/2016/03/12/performance-modeling-of-maximal-sharing"}},p={authorsImageUrls:[void 0]},u=[],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Helping PHP developers using Rascal-based code analysis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@inproceedings{hillsicpc2016,\n  author = "Mark Hills",\n  title = "Navigating the WordPress Plugin Landscape",\n  fulltext = "http://www.cs.ecu.edu/hillsma/publications/icpc-plugins-2016.pdf",\n  booktitle = "Proceedings of the 2015 {IEEE} 23rd International Conference on Program\n               Comprehension"\n  year = 2016,\n  location = Austin,\n  month = may,\n}\n')),(0,i.kt)("p",null,"WordPress includes a plugin mechanism that allows user-provided code to be executed in response to specific system events and input/output requests. The large number of extension points provided by WordPress makes it challenging for new plugin developers to understand which extension points they should use, while the thousands of existing plugins make it hard to find existing extension point handler implementations for use as examples when creating a new plugin. In this paper, we present a lightweight analysis, supplemented with information mined from source comments and the webpages hosted by WordPress for each plugin, that guides developers to the right extension points and to existing implementations of handlers for these extension points. We also present empirical information about how plugins are used in practice, providing guidance to both tool and prospective plugin developers."))}g.isMDXComponent=!0}}]);