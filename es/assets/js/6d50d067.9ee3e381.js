"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={title:"Front End System Design",sidebar_label:"System Design"},s=void 0,l={unversionedId:"front-end-system-design",id:"front-end-system-design",isDocsHomePage:!1,title:"Front End System Design",description:'"System" here typically refers to front end systems, which are different from the typical distributed system design questions for Software Engineering interviews. This format of question is quite similar to the "Build a user interface" format and there\'s a significant amount of overlap between that and this - you will likely need to do some design in that and also do some coding here to illustrate your ideas/app state format.',source:"@site/../contents/front-end-system-design.md",sourceDirName:".",slug:"/front-end-system-design",permalink:"/es/front-end-system-design",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/front-end-system-design.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1631983182,formattedLastUpdatedAt:"18/9/2021",frontMatter:{title:"Front End System Design",sidebar_label:"System Design"},sidebar:"root",previous:{title:"Algorithms",permalink:"/es/algorithms"},next:{title:"Behavorial Round",permalink:"/es/behavioral"}},c=[{value:"Basic Examples",id:"basic-examples",children:[]},{value:"Advanced Examples",id:"advanced-examples",children:[]},{value:"Helpful Articles",id:"helpful-articles",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'"System" here typically refers to front end systems, which are different from the typical distributed system design questions for Software Engineering interviews. This format of question is quite similar to the "Build a user interface" format and there\'s a significant amount of overlap between that and this - you will likely need to do some design in that and also do some coding here to illustrate your ideas/app state format.'),(0,i.kt)("p",null,'The difference between this section and the "Build a user interface" format is that the questions here are usually larger. If the session is only half an hour, candidates are expected to talk about the design tradeoffs, possible implementations, instead of coding it out. Because this format of questions involve multiple components and knowledge across the web stack, candidates usually do not have to go very deep into the lower-level details and can keep the discussion at a higher level.'),(0,i.kt)("p",null,'Many of the topics mentioned in the "Build a user interface" format are also relevant for front end system design - API design, scalability, performance, user experience, i18n, accessibility, security. Candidates should take the initiative and bring these topics up and lead the discussion with the interviewer. The more advanced topics such as performance, accessibility and i18n are what differentiates senior candidates from the more junior ones.'),(0,i.kt)("p",null,"If you possess a laptop and are asked to code them out, you usually can use a JavaScript framework/library and in that case you are recommended to use tools that help you scaffold a fresh app where you can start coding immediately (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vue-cli"),"). You don't want to be spending time during the interview doing unnecessary plumbing that doesn't give your interviewers additional useful signals."),(0,i.kt)("h2",{id:"basic-examples"},"Basic Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tic-tac-toe Game"),(0,i.kt)("li",{parentName:"ul"},"Whack-a-mole Game"),(0,i.kt)("li",{parentName:"ul"},"Sortable Data Table (with extensions for filtering)")),(0,i.kt)("h2",{id:"advanced-examples"},"Advanced Examples"),(0,i.kt)("p",null,"If you have to implement these, usually you are given more than half an hour"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WYSIWYG Editor"),(0,i.kt)("li",{parentName:"ul"},"Tetris Game"),(0,i.kt)("li",{parentName:"ul"},"Snake Game")),(0,i.kt)("h2",{id:"helpful-articles"},"Helpful Articles"),(0,i.kt)("p",null,"Many companies blog about their technical challenges in the front end domain and these are great content to learn more about designing front end systems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/google-design/google-photos-45b714dfbed1"},"Building the Google Photos Web UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3"},"Twitter Lite and High Performance React Progressive Web Apps at Scale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9"},"A Netflix Web Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"},"A Tinder Progressive Web App Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},"A Pinterest Progressive Web App Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299"},"A React And Preact Progressive Web App Performance Case Study: Treebo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.fb.com/2020/05/08/web/facebook-redesign/"},"Rebuilding our tech stack for the new Facebook.com"))))}u.isMDXComponent=!0},7462:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);