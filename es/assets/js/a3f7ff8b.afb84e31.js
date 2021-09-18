"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o={title:"Utility Function"},l=void 0,s={unversionedId:"utility-function",id:"utility-function",isDocsHomePage:!1,title:"Utility Function",description:"These are the front-end version of LeetCode questions, but with less emphasis on complicated algorithms and more focused to practical use cases. However, they could also be questions simply being the same LeetCode problem but you are required to answer in JavaScript.",source:"@site/../contents/utility-function.md",sourceDirName:".",slug:"/utility-function",permalink:"/es/utility-function",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/utility-function.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1631983182,formattedLastUpdatedAt:"18/9/2021",frontMatter:{title:"Utility Function"},sidebar:"root",previous:{title:"Preguntas de JavaScript",permalink:"/es/javascript-questions"},next:{title:"Build User Interfaces",permalink:"/es/build-user-interfaces"}},u=[{value:"Basic Examples",id:"basic-examples",children:[]},{value:"Advanced Examples",id:"advanced-examples",children:[]},{value:"Tips",id:"tips",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are the front-end version of LeetCode questions, but with less emphasis on complicated algorithms and more focused to practical use cases. However, they could also be questions simply being the same LeetCode problem but you are required to answer in JavaScript."),(0,a.kt)("p",null,"Almost all existing utilty functions asked exist within JavaScript core or famous third-party libraries like Lodash, with the most famous being ",(0,a.kt)("inlineCode",{parentName:"p"},"debounce")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"throttle"),". However, Lodash's implementation is extremely over-engineered - reusing a lot of abstract functions and supporting weird and obscure use cases for older browsers and you're not expected to produce such level of complexity in an interview."),(0,a.kt)("h2",{id:"basic-examples"},"Basic Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debounce()"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"throttle()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cloneDeep()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groupBy()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chunk()"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," then ",(0,a.kt)("inlineCode",{parentName:"li"},"mapAsync"),"(",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.all"),") then ",(0,a.kt)("inlineCode",{parentName:"li"},"mapWithChunksAsync")),(0,a.kt)("li",{parentName:"ul"},"Convert all keys within an object into snake_case/camelCase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"document.querySelectorAll")," (limited to just tags selectors)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript"},"Observer pattern"))),(0,a.kt)("p",null,"The best way to prepare is to get your hands dirty by implementing them yourself and writing test cases for them. Because you're writing functions, pay attention to the time complexity as well. Don't write a function that runs in O(n",(0,a.kt)("sup",null,"2"),") if it can pretty easily be written in O(n)."),(0,a.kt)("p",null,"Candidates are expected to take just around 10-15 minutes for a basic question. If you can tell that you received a basic question, try to finish within the suggested duration and do not intentionally take the entire interview to do one question. In most cases, you are expected to answer another small coding question."),(0,a.kt)("h2",{id:"advanced-examples"},"Advanced Examples"),(0,a.kt)("p",null,"Advanced questions are usually given to more senior candidates and expect around 25-30 minutes to complete or arrive at a minimally working solution."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write a templating engine that does variables substitution and simple conditionals"),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON.stringify")),(0,a.kt)("li",{parentName:"ul"},"Generate table of contents/outline from a DOM similar to Google Docs")),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always try to write pure functions"),(0,a.kt)("li",{parentName:"ul"},"If you're writing a recursive function, ask whether there's a maximum stack depth limit"),(0,a.kt)("li",{parentName:"ul"},"Some nested data structures can have recursive references to itself. Do clarify that there are no self-references/cycles within the object/ask if you need to handle them (usually the answer is No)")))}p.isMDXComponent=!0},7462:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})}}]);