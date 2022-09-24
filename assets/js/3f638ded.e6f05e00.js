"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[54594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?s.createElement(y,i(i({ref:t},u),{},{components:n})):s.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(87462),a=(n(67294),n(3905));const o={title:"module Content"},i=void 0,r={unversionedId:"Library/Content",id:"Library/Content",title:"module Content",description:"Usage",source:"@site/docs/Library/Content.md",sourceDirName:"Library",slug:"/Library/Content",permalink:"/docs/Library/Content",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/Content.md",tags:[],version:"current",frontMatter:{title:"module Content"},sidebar:"tutorialSidebar",previous:{title:"module Boolean",permalink:"/docs/Library/Boolean"},next:{title:"module DateTime",permalink:"/docs/Library/DateTime"}},l={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"function html",id:"Content-html",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function file",id:"Content-file",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function text",id:"Content-text",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"alias Body",id:"Content-Body",level:2},{value:"data Request",id:"Content-Request",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"data Response",id:"Content-Response",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-1",level:4},{value:"function response",id:"Content-response",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"function plain",id:"Content-plain",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"function response",id:"Content-response",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"data Status",id:"Content-Status",level:2},{value:"Synopsis",id:"synopsis-9",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Content;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Content provides access to the content server of the Rascal terminal for viewing interactive HTML output."),(0,a.kt)("h2",{id:"Content-html"},"function html"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Content html(str html)"))),(0,a.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,a.kt)("p",null,"Directly serve a static html page"),(0,a.kt)("h2",{id:"Content-file"},"function file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Content file(loc src)"))),(0,a.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,a.kt)("p",null,"Directly serve the contents of a file"),(0,a.kt)("h2",{id:"Content-text"},"function text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Content text(str text)"))),(0,a.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,a.kt)("p",null,"Directly serve the contents of a string as plain text"),(0,a.kt)("h2",{id:"Content-Body"},"alias Body"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value (type[value] expected)"))),(0,a.kt)("h2",{id:"Content-Request"},"data Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Request (map[str, str] headers = (), map[str, str] parameters = (), map[str,str] uploads = ()) \n     = get (str path)\n     | put (str path, Body content)\n     | post(str path, Body content)\n     | delete(str path)\n     | head(str path)\n     ;\n")),(0,a.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,a.kt)("p",null,"Request values represent what a browser is asking for, most importantly the URL path."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A request value also contains the full HTTP headers, the URL parameters as a ",(0,a.kt)("inlineCode",{parentName:"p"},"map[str,str]"),"\nand possibly uploaded content, also coded as a map","[str,str]",". From the constructor type,\n",(0,a.kt)("inlineCode",{parentName:"p"},"put")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," you can see what kind of HTTP request it was. "),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that ",(0,a.kt)("inlineCode",{parentName:"li"},"put")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"post")," have not been implemented yet in the REPL server. ")),(0,a.kt)("h2",{id:"Content-Response"},"data Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Response  \n     = response(Status status, str mimeType, map[str,str] header, str content)\n     | fileResponse(loc file, str mimeType, map[str,str] header)\n     | jsonResponse(Status status, map[str,str] header, value val, bool implicitConstructors = true,  bool implicitNodes = true, str dateTimeFormat = \"yyyy-MM-dd\\'T\\'HH:mm:ss\\'Z\\'\")\n     ;\n")),(0,a.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,a.kt)("p",null,"A response encodes what is send back from the server to the browser client."),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"The three kinds of responses, encode either content that is already a ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),",\nsome file which is streamed directly from its source location or a jsonResponse\nwhich involves a handy, automatic, encoding of Rascal values into json values."),(0,a.kt)("h2",{id:"Content-response"},"function response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response response(str content)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response response(Status status, str explanation)"))),(0,a.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,a.kt)("p",null,"Utility to quickly render a string as HTML content"),(0,a.kt)("h2",{id:"Content-plain"},"function plain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response plain(str text)"))),(0,a.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,a.kt)("p",null,"Utility to quickly make a plaintext response."),(0,a.kt)("h2",{id:"Content-response"},"function response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response response(loc f)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default  Response response(value val, map[str,str] header = ())"))),(0,a.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,a.kt)("p",null,"Utility to serve a file from any source location."),(0,a.kt)("h2",{id:"Content-Status"},"data Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Status  \n     = ok()\n     | created()\n     | accepted()\n     | noContent()\n     | partialContent()\n     | redirect()\n     | notModified()\n     | badRequest()\n     | unauthorized()\n     | forbidden()\n     | notFound()\n     | rangeNotSatisfiable()\n     | internalError()\n     ;\n")),(0,a.kt)("h4",{id:"synopsis-9"},"Synopsis"),(0,a.kt)("p",null,"Encoding of HTTP status"))}d.isMDXComponent=!0}}]);