"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[79335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Regular Expression Pattern",keywords:["/","\\","[","]","^","-",".","|","?","*","+","{","}","$"]},i=void 0,o={unversionedId:"Rascal/Patterns/Regular/index",id:"Rascal/Patterns/Regular/index",title:"Regular Expression Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Regular/index.md",sourceDirName:"Rascal/Patterns/Regular",slug:"/Rascal/Patterns/Regular/",permalink:"/docs/Rascal/Patterns/Regular/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Patterns/Regular/index.md",tags:[],version:"current",frontMatter:{title:"Regular Expression Pattern",keywords:["/","\\\\","[","]","^","-",".","|","?","*","+","{","}","$"]},sidebar:"tutorialSidebar",previous:{title:"Node pattern",permalink:"/docs/Rascal/Patterns/Node/"},next:{title:"Set Pattern",permalink:"/docs/Rascal/Patterns/Set/"}},p={},d=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Regular expression patterns."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Regular expressions are used to match a string value and to decompose it in parts and also to compose new strings. Regular expression patterns bind variables of type ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," when the match succeeds, otherwise they do not bind anything.\nThey can occur in cases of visit and switch statements,\non the left-hand side of the match operator (",(0,r.kt)("inlineCode",{parentName:"p"},":=")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"!:="),") and as declarator in enumerators."),(0,r.kt)("p",null,"We use a regular expression language that slightly extends/modifies the Java Regex language:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Regular expression are delimited by ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," optionally followed by modifiers (see below).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We allow ",(0,r.kt)("em",{parentName:"p"},"variable introductions"),", syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"<Name:Regex>"),", which introduce a variable of type ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," named ",(0,r.kt)("em",{parentName:"p"},"Name"),".\nA variable introduction corresponds to a group in a Java regexp. Each variable that is introduced should be unique, but may be referenced more than once later in the regular expression.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Regular expressions may also contain ",(0,r.kt)("em",{parentName:"p"},"references to variables"),", syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"<Name>"),",\nthe string value of variable ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," is used at the position of the variable reference.\nThis can be used to define so-called ",(0,r.kt)("em",{parentName:"p"},"non-linear")," patterns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java regular expressions allow optional groups, which may introduce null bindings. Since uninitialized variables are not allowed in Rascal, we limit the kinds of expressions one can write here by not allowing nesting of variable introductions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We allow variable references in a regular expression of the form: ",(0,r.kt)("inlineCode",{parentName:"p"},"<Name>")," which inserts the string value of ",(0,r.kt)("em",{parentName:"p"},"Name")," in the pattern. $Name$ should have been introduced in the regular expression itself or in the context in which the regular expression occurs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Perl matching options ",(0,r.kt)("em",{parentName:"p"},"follow")," the regular expression, but Java uses the notation ",(0,r.kt)("inlineCode",{parentName:"p"},"(?Option)"),"\nat the ",(0,r.kt)("em",{parentName:"p"},"beginning")," of the regular expression to set matching options. We support both styles.\nThe following modifiers are supported:"))),(0,r.kt)("p",null,"** ",(0,r.kt)("em",{parentName:"p"},"multi-line matching"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"(?m)")," at the start of the regular expression or the modifier ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," at the end of the regular expression. The anchors ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," usually only match at the beginning and end of the subject string.\nWhen this option is set they also match any begin or end of line that is embedded in the subject string. Examples:"),(0,r.kt)("p",null,"** ",(0,r.kt)("em",{parentName:"p"},"case-insensitive matching"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"(?i)")," or modifier ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),". Match characters irrespective of their case."),(0,r.kt)("p",null,"** ",(0,r.kt)("em",{parentName:"p"},"single-line mode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"(?s)")," or modifier ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},".")," expression does usually not match line terminators. When single-line mode is set, it will match any character including line terminators."),(0,r.kt)("p",null,"** ",(0,r.kt)("em",{parentName:"p"},"unix lines"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"(?d)")," or modifier ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),". Usually newlines (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"), carriage return (",(0,r.kt)("inlineCode",{parentName:"p"},"\\r"),") and new line carriage return (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n\\r"),") sequences are all considered line terminators. When this option is set, only newline is considered to be a line terminator."),(0,r.kt)("p",null,"For convenience, we summarize the most frequently used constructs in regular expressions in the following table."),(0,r.kt)("p",null,".Frequently used elements of Regular Expression Syntax"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"The single character ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," as long as it is not a punctuation character with a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"special meaning in the regular expression syntax"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\p")),(0,r.kt)("td",{parentName:"tr",align:null},"The punctuation character ",(0,r.kt)("inlineCode",{parentName:"td"},"p"),", this includes ",(0,r.kt)("inlineCode",{parentName:"td"},"!"),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"#"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"&"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"("),", ",(0,r.kt)("inlineCode",{parentName:"td"},")"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"+"),", ",(0,r.kt)("inlineCode",{parentName:"td"},","),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"."),", ",(0,r.kt)("inlineCode",{parentName:"td"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"td"},":"),", ",(0,r.kt)("inlineCode",{parentName:"td"},";"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"="),", ",(0,r.kt)("inlineCode",{parentName:"td"},">"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"?"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"@"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"["),", ",(0,r.kt)("inlineCode",{parentName:"td"},"\\"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"]"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"^"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"_"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"{"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"}"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"~"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\\\")),(0,r.kt)("td",{parentName:"tr",align:null},"The backslash character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\n")),(0,r.kt)("td",{parentName:"tr",align:null},"Newline character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",{parentName:"tr",align:null},"Tab character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[...]")),(0,r.kt)("td",{parentName:"tr",align:null},"One of the characters between the brackets (also known as ",(0,r.kt)("em",{parentName:"td"},"character class"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character ranges and set operations on character classes may be used."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[^...]")),(0,r.kt)("td",{parentName:"tr",align:null},"Any one character not between the brackets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[a-z0-9]")),(0,r.kt)("td",{parentName:"tr",align:null},"Character range: character between ",(0,r.kt)("inlineCode",{parentName:"td"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"z")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"9"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".")),(0,r.kt)("td",{parentName:"tr",align:null},"Any character except a line terminator. If single-line mode is set (using ",(0,r.kt)("inlineCode",{parentName:"td"},"(?s)")," or modifier ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),"), then it matches any character including line terminators.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\d")),(0,r.kt)("td",{parentName:"tr",align:null},"Digit: ",(0,r.kt)("inlineCode",{parentName:"td"},"[0-9]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\D")),(0,r.kt)("td",{parentName:"tr",align:null},"Non-digit:",(0,r.kt)("inlineCode",{parentName:"td"}," [^0-9]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\s")),(0,r.kt)("td",{parentName:"tr",align:null},"Whitespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\S")),(0,r.kt)("td",{parentName:"tr",align:null},"Anything but whitespace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\w")),(0,r.kt)("td",{parentName:"tr",align:null},"A word: ",(0,r.kt)("inlineCode",{parentName:"td"},"[a-zA-Z0-9_]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\W")),(0,r.kt)("td",{parentName:"tr",align:null},"A non-word:",(0,r.kt)("inlineCode",{parentName:"td"}," [^\\w]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xy")),(0,r.kt)("td",{parentName:"tr",align:null},"Match ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," followed by ",(0,r.kt)("inlineCode",{parentName:"td"},"y"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`x"),(0,r.kt)("td",{parentName:"tr",align:null},"y`")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x?")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional occurrence of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x*")),(0,r.kt)("td",{parentName:"tr",align:null},"Zero or more occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x+")),(0,r.kt)("td",{parentName:"tr",align:null},"One or more occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x{n}")),(0,r.kt)("td",{parentName:"tr",align:null},"Exactly ",(0,r.kt)("inlineCode",{parentName:"td"},"n")," occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x{n,}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")," or more occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x{n,m}")),(0,r.kt)("td",{parentName:"tr",align:null},"At least ",(0,r.kt)("inlineCode",{parentName:"td"},"n"),", at most ",(0,r.kt)("inlineCode",{parentName:"td"},"m")," occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"^")),(0,r.kt)("td",{parentName:"tr",align:null},"The beginning of the subject string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$")),(0,r.kt)("td",{parentName:"tr",align:null},"The end of the input string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\b")),(0,r.kt)("td",{parentName:"tr",align:null},"Word boundary: position between a word and a non-word character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\B")),(0,r.kt)("td",{parentName:"tr",align:null},"Non-word boundary: position that is a not a word boundary")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are some examples of regular expression patterns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/\\brascal\\b/i\n")),(0,r.kt)("p",null,"does a case-insensitive match (",(0,r.kt)("inlineCode",{parentName:"p"},"i"),") of the word ",(0,r.kt)("inlineCode",{parentName:"p"},"rascal")," between word boundaries (",(0,r.kt)("inlineCode",{parentName:"p"},"\\b"),"). And"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/^.*?<word:\\w+><rest:.*$>/m\n")),(0,r.kt)("p",null,"does a multi-line match (",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"), matches the first consecutive word characters (",(0,r.kt)("inlineCode",{parentName:"p"},"\\w"),") and assigns them to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"word"),". The remainder of the string is assigned to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"rest"),". "),(0,r.kt)("p",null,"A variable reference used to make a non-linear pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"matches strings like ",(0,r.kt)("inlineCode",{parentName:"p"},"abc---abc")," that consist of two identical sequences of letters separated\nby three dashes. Variables that are referenced in a regular expression may also come from\nthe context in which the regular expression occurs. For instance,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/<x><n>/\n")),(0,r.kt)("p",null,"will use the current values of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," as regular expression. For values ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc"'),", respectively, ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," this would be equivalent to the regular expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/abc3/\n")),(0,r.kt)("p",null,"Observe that context variables may be of arbitrary type and that their value is first converted to\na string before it is inserted in the regular expression. This can be used in many ways.\nFor instance, regular expressions may contain restrictions on the number of repetitions\nof an element: ",(0,r.kt)("inlineCode",{parentName:"p"},"/a{3}/")," will match exactly three letters a. Also minimum and maximum\nnumber of occurrences can be defined.\nHere is how the repetition count can be inserted by a variable reference\n(where ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is assumed to have an integer value):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/a{<n>}/\n")),(0,r.kt)("p",null,"Taking this example one step further, we can even write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/<x:a{<n>}>/\n")),(0,r.kt)("p",null,"in other words, we introduce variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and its defining regular expression contains a\nreference to a context variable."),(0,r.kt)("p",null,"Multi-line matching:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>/XX$/ := "lineoneXX\\nlinetwo";\nbool: false\nrascal>/XX$/m := "lineoneXX\\nlinetwo";\nbool: true\nrascal>/(?m)XX$/ := "lineoneXX\\nlinetwo";\nbool: true\n')),(0,r.kt)("p",null,"Case-insensitive matching:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>/XX/ := "some xx";\nbool: false\nrascal>/XX/i := "some xx";\nbool: true\nrascal>/(?i)XX/ := "some xx";\nbool: true\n')),(0,r.kt)("p",null,"Single-line mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>/a.c/ := "abc";\nbool: true\nrascal>/a.c/ := "a\\nc";\nbool: false\nrascal>/a.c/s := "a\\nc";\nbool: true\nrascal>/(?s)a.c/ := "a\\nc";\nbool: true\n')),(0,r.kt)("p",null,"Here are examples, how to escape punctuation characters in regular expressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>/a\\/b/ := "a/b";\nbool: true\nrascal>/a\\+b/ := "a+b";\nbool: true\n')))}m.isMDXComponent=!0}}]);