"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[80424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const i={title:"Image"},l=void 0,o={unversionedId:"Tutor/Markup/InlineMarkup/Image/index",id:"Tutor/Markup/InlineMarkup/Image/index",title:"Image",description:"Synopsis",source:"@site/docs/Tutor/Markup/InlineMarkup/Image/index.md",sourceDirName:"Tutor/Markup/InlineMarkup/Image",slug:"/Tutor/Markup/InlineMarkup/Image/",permalink:"/docs/Tutor/Markup/InlineMarkup/Image/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Markup/InlineMarkup/Image/index.md",tags:[],version:"current",frontMatter:{title:"Image"},sidebar:"tutorialSidebar",previous:{title:"ExternalURL",permalink:"/docs/Tutor/Markup/InlineMarkup/ExternalURL/"},next:{title:"Italic",permalink:"/docs/Tutor/Markup/InlineMarkup/Italic/"}},p={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Include an image."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'There is a "TODO" in the documentation source:\nmsg\n(((TODO-image syntax has changed)))')),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Describes an image to be included:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"File")," is the name of the image file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"AlternateName")," is the alternate name of the image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Width")," is the required width (in pixels) of the image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Height")," is the rewuired height of the image in pixels."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"link")," is present, it turns the image in a link to the given ",(0,a.kt)("em",{parentName:"li"},"URI"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'There is a "TODO" in the documentation source:\nmsg\n(((TODO:For further styling of images, see ',(0,a.kt)("a",{parentName:"p",href:"http://asciidoctor.org/docs/user-manual/#images."},"http://asciidoctor.org/docs/user-manual/#images."),")))")),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![][dandelion.jpg](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)\n")),(0,a.kt)("p",null,"will produce:"),(0,a.kt)("p",null,"![null][dandelion.jpg]","(/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)"),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![][dandelion.jpg](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)\n")),(0,a.kt)("p",null,"![null][dandelion.jpg]","(/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)"),(0,a.kt)("p",null,"produces a reduced image floating at the right."),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("p",null,"And, finally,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![][dandelion.jpg](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)\n")),(0,a.kt)("p",null,"produces a clickable image that links back to the source of the image."),(0,a.kt)("p",null,"![null][dandelion.jpg]","(/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)"),(0,a.kt)("p",null,"Try it!"))}c.isMDXComponent=!0}}]);