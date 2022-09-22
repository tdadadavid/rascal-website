"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[98704],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(83117),i=(t(67294),t(3905));const a={title:"Visualize"},o=void 0,s={unversionedId:"Recipes/Languages/Pico/Visualize/index",id:"Recipes/Languages/Pico/Visualize/index",title:"Visualize",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/Visualize/index.md",sourceDirName:"Recipes/Languages/Pico/Visualize",slug:"/Recipes/Languages/Pico/Visualize/",permalink:"/docs/Recipes/Languages/Pico/Visualize/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Pico/Visualize/index.md",tags:[],version:"current",frontMatter:{title:"Visualize"},sidebar:"tutorialSidebar",previous:{title:"UseDef",permalink:"/docs/Recipes/Languages/Pico/UseDef/"},next:{title:"Metrics",permalink:"/docs/Recipes/Metrics/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Visualize Pico Control Flow Graphs."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'There is a "TODO" in the documentation source:\nmsg\n(((TODO:WARNING: The visualization library is being reimplemented and reorganized; the information provided here maybe inaccurate or even incorrect.)))')),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"")),(0,i.kt)("p",null,"<1> We want to include the text of expressions in the relevant Figure nodes, this is achieved by ",(0,i.kt)("inlineCode",{parentName:"p"},"make"),".\n<2> An editor property is attached to each Figure node: clicking on the node opens an editor for the corresponding file.\n<3> ",(0,i.kt)("inlineCode",{parentName:"p"},"visNode")," implements the visualization per CFG node.\n<4> Since Figure nodes in a visual graph need an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property, we define here a scheme to associate unique identifiers to each Figure node.\n<5> The complete visualization of a CFG is implemented by ",(0,i.kt)("inlineCode",{parentName:"p"},"visCFG"),": it gets the CFG graph as arguments and then"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*  creates all Figure edges,\n*  creates all Figure nodes,\n*  returns a Figure graph.\n")),(0,i.kt)("p",null,"Let's now apply this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-figure,width=,height=,file=cfg1.png"},'                import demo::lang::Pico::ControlFlow;\nimport demo::lang::Pico::Visualize;\nCFG = cflowProgram("begin declare n : natural, s : string; n := 10; s := \\"a\\"; while n do s := s + \\"a\\"; n := n - 1 od end");\nrender(visCFG(CFG.graph));\n')),(0,i.kt)("p",null,"The resulting visualization looks like this: "),(0,i.kt)("p",null,"![null][cfg1.png]","(/assets/Recipes/Languages/Pico/Visualize/cfg1.png)"))}u.isMDXComponent=!0}}]);