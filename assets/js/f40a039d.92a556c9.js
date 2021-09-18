"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[508],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o={title:"HTML Questions"},s=void 0,l={unversionedId:"html-questions",id:"html-questions",isDocsHomePage:!1,title:"HTML Questions",description:"Answers to Front-end Job Interview Questions - HTML Questions. Pull requests for suggestions and corrections are welcome!",source:"@site/../contents/html-questions.md",sourceDirName:".",slug:"/html-questions",permalink:"/html-questions",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/html-questions.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1631975886,formattedLastUpdatedAt:"9/18/2021",frontMatter:{title:"HTML Questions"},sidebar:"root",previous:{title:"Overview",permalink:"/pop-quiz"},next:{title:"CSS Questions",permalink:"/css-questions"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[{value:"What does a DOCTYPE do?",id:"what-does-a-doctype-do",children:[]},{value:"How do you serve a page with content in multiple languages?",id:"how-do-you-serve-a-page-with-content-in-multiple-languages",children:[]},{value:"What kind of things must you be wary of when designing or developing for multilingual sites?",id:"what-kind-of-things-must-you-be-wary-of-when-designing-or-developing-for-multilingual-sites",children:[]},{value:"What are <code>data-</code> attributes good for?",id:"what-are-data--attributes-good-for",children:[]},{value:"Consider HTML5 as an open web platform. What are the building blocks of HTML5?",id:"consider-html5-as-an-open-web-platform-what-are-the-building-blocks-of-html5",children:[]},{value:"Describe the difference between a <code>cookie</code>, <code>sessionStorage</code> and <code>localStorage</code>.",id:"describe-the-difference-between-a-cookie-sessionstorage-and-localstorage",children:[]},{value:"Describe the difference between <code>&lt;script&gt;</code>, <code>&lt;script async&gt;</code> and <code>&lt;script defer&gt;</code>.",id:"describe-the-difference-between-script-script-async-and-script-defer",children:[]},{value:"Why is it generally a good idea to position CSS <code>&lt;link&gt;</code>s between <code>&lt;head&gt;&lt;/head&gt;</code> and JS <code>&lt;script&gt;</code>s just before <code>&lt;/body&gt;</code>? Do you know any exceptions?",id:"why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions",children:[]},{value:"What is progressive rendering?",id:"what-is-progressive-rendering",children:[]},{value:"Why you would use a <code>srcset</code> attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",id:"why-you-would-use-a-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-uses-when-evaluating-the-content-of-this-attribute",children:[]},{value:"Have you used different HTML templating languages before?",id:"have-you-used-different-html-templating-languages-before",children:[]},{value:"Other Answers",id:"other-answers",children:[]}]}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Answers to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/html-questions.md"},"Front-end Job Interview Questions - HTML Questions"),". Pull requests for suggestions and corrections are welcome!"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-does-a-doctype-do"},"What does a doctype do?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-do-you-serve-a-page-with-content-in-multiple-languages"},"How do you serve a page with content in multiple languages?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-kind-of-things-must-you-be-wary-of-when-designing-or-developing-for-multilingual-sites"},"What kind of things must you be wary of when designing or developing for multilingual sites?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-are-data--attributes-good-for"},"What are ",(0,r.kt)("inlineCode",{parentName:"a"},"data-")," attributes good for?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consider-html5-as-an-open-web-platform-what-are-the-building-blocks-of-html5"},"Consider HTML5 as an open web platform. What are the building blocks of HTML5?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage"},"Describe the difference between a ",(0,r.kt)("inlineCode",{parentName:"a"},"cookie"),", ",(0,r.kt)("inlineCode",{parentName:"a"},"sessionStorage")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"localStorage"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#describe-the-difference-between-script-script-async-and-script-defer"},"Describe the difference between ",(0,r.kt)("inlineCode",{parentName:"a"},"<script>"),", ",(0,r.kt)("inlineCode",{parentName:"a"},"<script async>")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"<script defer>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions"},"Why is it generally a good idea to position CSS ",(0,r.kt)("inlineCode",{parentName:"a"},"<link>"),"s between ",(0,r.kt)("inlineCode",{parentName:"a"},"<head></head>")," and JS ",(0,r.kt)("inlineCode",{parentName:"a"},"<script>"),"s just before ",(0,r.kt)("inlineCode",{parentName:"a"},"</body>"),"? Do you know any exceptions?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-progressive-rendering"},"What is progressive rendering?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#why-you-would-use-a-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-uses-when-evaluating-the-content-of-this-attribute"},"Why you would use a ",(0,r.kt)("inlineCode",{parentName:"a"},"srcset")," attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#have-you-used-different-html-templating-languages-before"},"Have you used different HTML templating languages before?"))),(0,r.kt)("h3",{id:"what-does-a-doctype-do"},"What does a DOCTYPE do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DOCTYPE")," is an abbreviation for ",(0,r.kt)("strong",{parentName:"p"},"Document Type"),". A DOCTYPE is always associated to a ",(0,r.kt)("strong",{parentName:"p"},"DTD")," - for ",(0,r.kt)("strong",{parentName:"p"},"Document Type Definition"),"."),(0,r.kt)("p",null,"A DTD defines how documents of a certain type should be structured (i.e. a ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," can contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"span")," but not a ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"), whereas a DOCTYPE declares what DTD a document ",(0,r.kt)("em",{parentName:"p"},"supposedly")," respects (i.e. this document respects the HTML DTD)."),(0,r.kt)("p",null,"For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger the ",(0,r.kt)("strong",{parentName:"p"},"no-quirks mode")," matching this DOCTYPE for reading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the ",(0,r.kt)("strong",{parentName:"p"},"quirks mode"),"."),(0,r.kt)("p",null,"The DOCTYPE declaration for the HTML5 standards is ",(0,r.kt)("inlineCode",{parentName:"p"},"<!DOCTYPE html>"),"."),(0,r.kt)("h6",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/syntax.html#the-doctype"},"https://html.spec.whatwg.org/multipage/syntax.html#the-doctype")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/xhtml.html"},"https://html.spec.whatwg.org/multipage/xhtml.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://quirks.spec.whatwg.org/"},"https://quirks.spec.whatwg.org/"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"how-do-you-serve-a-page-with-content-in-multiple-languages"},"How do you serve a page with content in multiple languages?"),(0,r.kt)("p",null,"I will assume that it is asking about the most common case, which is how to serve a page with content available in multiple languages, but the content within the page should be displayed only in one consistent language."),(0,r.kt)("p",null,"When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"lang")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<html>")," tag, such as ",(0,r.kt)("inlineCode",{parentName:"p"},'<html lang="en">...</html>'),"."),(0,r.kt)("p",null,"Of course this is useless for letting a search engine know that the same content is available in different languages, and so you must also make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hreflang")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),". Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},'<link rel="alternate" hreflang="de" href="http://de.example.com/page.html" />')),(0,r.kt)("p",null,"In the back end, the HTML markup will contain ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n")," placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework."),(0,r.kt)("h6",{id:"references-1"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/International/getting-started/language"},"https://www.w3.org/International/getting-started/language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/webmasters/answer/189077"},"https://support.google.com/webmasters/answer/189077"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"what-kind-of-things-must-you-be-wary-of-when-designing-or-developing-for-multilingual-sites"},"What kind of things must you be wary of when designing or developing for multilingual sites?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"lang")," attribute in your HTML."),(0,r.kt)("li",{parentName:"ul"},"Directing users to their native language - Allow a user to change his country/language easily without hassle."),(0,r.kt)("li",{parentName:"ul"},"Text in raster-based images (e.g. png, gif, jpg, etc.), is not a scalable approach - Placing text in an image is still a popular way to get good-looking, non-system fonts to display on any computer. However, to translate image text, each string of text will need to have a separate image created for each language. Anything more than a handful of replacements like this can quickly get out of control."),(0,r.kt)("li",{parentName:"ul"},"Restrictive words/sentence length - Some content can be longer when written in another language. Be wary of layout or overflow issues in the design. It's best to avoid designing where the amount of text would make or break a design. Character counts come into play with things like headlines, labels, and buttons. They are less of an issue with free-flowing text such as body text or comments."),(0,r.kt)("li",{parentName:"ul"},"Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures. The design should use color appropriately."),(0,r.kt)("li",{parentName:"ul"},'Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.'),(0,r.kt)("li",{parentName:"ul"},"Do not concatenate translated strings - Do not do anything like ",(0,r.kt)("inlineCode",{parentName:"li"},'"The date today is " + date'),". It will break in languages with different word order. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively: ",(0,r.kt)("inlineCode",{parentName:"li"},"I will travel on {% date %}")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"{% date %} \u6211\u4f1a\u51fa\u53d1"),". Note that the position of the variable is different due to grammar rules of the language."),(0,r.kt)("li",{parentName:"ul"},"Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese, text is read up-to-down, right-to-left."),(0,r.kt)("li",{parentName:"ul"},"Useful-to-have - include the locale in the path (e.g en_US, zh_CN, etc).")),(0,r.kt)("h6",{id:"references-2"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for-multilingual-sites"},"https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for-multilingual-sites"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"what-are-data--attributes-good-for"},"What are ",(0,r.kt)("inlineCode",{parentName:"h3"},"data-")," attributes good for?"),(0,r.kt)("p",null,"Before JavaScript frameworks became popular, front end developers used ",(0,r.kt)("inlineCode",{parentName:"p"},"data-")," attributes to store extra data within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. It is intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements."),(0,r.kt)("p",null,"These days, using ",(0,r.kt)("inlineCode",{parentName:"p"},"data-")," attributes is generally not encouraged. One reason is that users can modify the data attribute easily by using inspect element in the browser. The data model is better stored within JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework."),(0,r.kt)("p",null,"However, one perfectly valid use of data attributes, is to add a hook for ",(0,r.kt)("em",{parentName:"p"},"end to end")," testing frameworks such as Selenium and Capybara without having to create a meaningless classes or ID attributes. The element needs a way to be found by a particular Selenium spec and something like ",(0,r.kt)("inlineCode",{parentName:"p"},"data-selector='the-thing'")," is a valid way to do so without convoluting the semantic markup otherwise."),(0,r.kt)("h6",{id:"references-3"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://html5doctor.com/html5-custom-data-attributes/"},"http://html5doctor.com/html5-custom-data-attributes/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes"},"https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"consider-html5-as-an-open-web-platform-what-are-the-building-blocks-of-html5"},"Consider HTML5 as an open web platform. What are the building blocks of HTML5?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Semantics - Allowing you to describe more precisely what your content is."),(0,r.kt)("li",{parentName:"ul"},"Connectivity - Allowing you to communicate with the server in new and innovative ways."),(0,r.kt)("li",{parentName:"ul"},"Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently."),(0,r.kt)("li",{parentName:"ul"},"Multimedia - Making video and audio first-class citizens in the Open Web."),(0,r.kt)("li",{parentName:"ul"},"2D/3D graphics and effects - Allowing a much more diverse range of presentation options."),(0,r.kt)("li",{parentName:"ul"},"Performance and integration - Providing greater speed optimization and better usage of computer hardware."),(0,r.kt)("li",{parentName:"ul"},"Device access - Allowing for the usage of various input and output devices."),(0,r.kt)("li",{parentName:"ul"},"Styling - Letting authors write more sophisticated themes.")),(0,r.kt)("h6",{id:"references-4"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"describe-the-difference-between-a-cookie-sessionstorage-and-localstorage"},"Describe the difference between a ",(0,r.kt)("inlineCode",{parentName:"h3"},"cookie"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"sessionStorage")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"localStorage"),"."),(0,r.kt)("p",null,"All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only able to store values as strings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"cookie")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"localStorage")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"sessionStorage")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Initiator"),(0,r.kt)("td",{parentName:"tr",align:null},"Client or server. Server can use ",(0,r.kt)("inlineCode",{parentName:"td"},"Set-Cookie")," header"),(0,r.kt)("td",{parentName:"tr",align:null},"Client"),(0,r.kt)("td",{parentName:"tr",align:null},"Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expiry"),(0,r.kt)("td",{parentName:"tr",align:null},"Manually set"),(0,r.kt)("td",{parentName:"tr",align:null},"Forever"),(0,r.kt)("td",{parentName:"tr",align:null},"On tab close")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Persistent across browser sessions"),(0,r.kt)("td",{parentName:"tr",align:null},"Depends on whether expiration is set"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sent to server with every HTTP request"),(0,r.kt)("td",{parentName:"tr",align:null},"Cookies are automatically being sent via ",(0,r.kt)("inlineCode",{parentName:"td"},"Cookie")," header"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Capacity (per domain)"),(0,r.kt)("td",{parentName:"tr",align:null},"4kb"),(0,r.kt)("td",{parentName:"tr",align:null},"5MB"),(0,r.kt)("td",{parentName:"tr",align:null},"5MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accessibility"),(0,r.kt)("td",{parentName:"tr",align:null},"Any window"),(0,r.kt)("td",{parentName:"tr",align:null},"Any window"),(0,r.kt)("td",{parentName:"tr",align:null},"Same tab")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any ",(0,r.kt)("inlineCode",{parentName:"em"},"cookie"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"localStorage"),", or ",(0,r.kt)("inlineCode",{parentName:"em"},"sessionStorage")," stored. It's important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions).")),(0,r.kt)("h6",{id:"references-5"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://tutorial.techaltum.com/local-and-session-storage.html"},"http://tutorial.techaltum.com/local-and-session-storage.html"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"describe-the-difference-between-script-script-async-and-script-defer"},"Describe the difference between ",(0,r.kt)("inlineCode",{parentName:"h3"},"<script>"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"<script async>")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"<script defer>"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<script>")," - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<script async>")," - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use ",(0,r.kt)("inlineCode",{parentName:"li"},"async")," when the script is independent of any other scripts on the page, for example, analytics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<script defer>")," - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun\xadtered in the document. If a script relies on a fully-parsed DOM, the ",(0,r.kt)("inlineCode",{parentName:"li"},"defer")," attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal ",(0,r.kt)("inlineCode",{parentName:"li"},"<script>")," at the end of ",(0,r.kt)("inlineCode",{parentName:"li"},"<body>"),". A deferred script must not contain ",(0,r.kt)("inlineCode",{parentName:"li"},"document.write"),".")),(0,r.kt)("p",null,"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"defer")," attrib\xadutes are ignored for scripts that have no ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," attribute."),(0,r.kt)("h6",{id:"references-6"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html"},"http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/10808109/script-tag-async-defer"},"https://stackoverflow.com/questions/10808109/script-tag-async-defer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bitsofco.de/async-vs-defer/"},"https://bitsofco.de/async-vs-defer/"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions"},"Why is it generally a good idea to position CSS ",(0,r.kt)("inlineCode",{parentName:"h3"},"<link>"),"s between ",(0,r.kt)("inlineCode",{parentName:"h3"},"<head></head>")," and JS ",(0,r.kt)("inlineCode",{parentName:"h3"},"<script>"),"s just before ",(0,r.kt)("inlineCode",{parentName:"h3"},"</body>"),"? Do you know any exceptions?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Placing ",(0,r.kt)("inlineCode",{parentName:"strong"},"<link>"),"s in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"<head>"))),(0,r.kt)("p",null,"Putting ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>"),"s in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),' is part of proper specification in building an optimized website. When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing. This progressive rendering is a category optimization sites are measured in their performance scores. Putting stylesheets near the bottom of the document is what prohibits progressive rendering in many browsers. Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is then stuck viewing a blank white page. Other times there can be flashes of unstyled content (FOUC), which show a webpage with no styling applied.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Placing ",(0,r.kt)("inlineCode",{parentName:"strong"},"<script>"),"s just before ",(0,r.kt)("inlineCode",{parentName:"strong"},"</body>"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tags block HTML parsing while they are being downloaded and executed which can slow down your page. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first."),(0,r.kt)("p",null,"An exception for positioning of ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>"),"s at the bottom is when your script contains ",(0,r.kt)("inlineCode",{parentName:"p"},"document.write()"),", but these days it's not a good practice to use ",(0,r.kt)("inlineCode",{parentName:"p"},"document.write()"),". Also, placing ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>"),"s at the bottom means that the browser cannot start downloading the scripts until the entire document is parsed. This ensures your code that needs to manipulate DOM elements will not throw an error and halt the entire script. If you need to put ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defer")," attribute, which will achieve the same effect of downloading and running the script only after the HTML is parsed."),(0,r.kt)("p",null,"Keep in mind that putting scripts just before the closing ",(0,r.kt)("inlineCode",{parentName:"p"},"</body>")," tag will create the illusion that the page loads faster on an empty cache (since the scripts won't block downloading the rest of the document). However, if you have some code you want to run during page load, it will only start executing after the entire page has loaded. If you put those scripts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," tag, they would start executing before - so on a primed cache the page would actually appear to load faster."),(0,r.kt)("h6",{id:"references-7"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.yahoo.com/performance/rules.html#css_top"},"https://developer.yahoo.com/performance/rules.html#css_top")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.techrepublic.com/blog/web-designer/how-to-prevent-flash-of-unstyled-content-on-your-websites/"},"https://www.techrepublic.com/blog/web-designer/how-to-prevent-flash-of-unstyled-content-on-your-websites/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/"},"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"what-is-progressive-rendering"},"What is progressive rendering?"),(0,r.kt)("p",null,"Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible."),(0,r.kt)("p",null,"It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!"),(0,r.kt)("p",null,"Examples of such techniques:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image."),(0,r.kt)("li",{parentName:"ul"},"Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the ",(0,r.kt)("inlineCode",{parentName:"li"},"DOMContentLoaded"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"load")," event to load in other resources and content."),(0,r.kt)("li",{parentName:"ul"},"Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found ",(0,r.kt)("a",{parentName:"li",href:"http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/"},"here"),".")),(0,r.kt)("h6",{id:"references-8"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33651166/what-is-progressive-rendering"},"https://stackoverflow.com/questions/33651166/what-is-progressive-rendering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/"},"http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"why-you-would-use-a-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-uses-when-evaluating-the-content-of-this-attribute"},"Why you would use a ",(0,r.kt)("inlineCode",{parentName:"h3"},"srcset")," attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute."),(0,r.kt)("p",null,"You would use the ",(0,r.kt)("inlineCode",{parentName:"p"},"srcset")," attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference). For example: ",(0,r.kt)("inlineCode",{parentName:"p"},'<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt="">')," tells the browser to display the small, medium or large ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg")," graphic depending on the client's resolution. The first value is the image name and the second is the width of the image in pixels. For a device width of 320px, the following calculations are made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"500 / 320 = 1.5625"),(0,r.kt)("li",{parentName:"ul"},"1000 / 320 = 3.125"),(0,r.kt)("li",{parentName:"ul"},"2000 / 320 = 6.25")),(0,r.kt)("p",null,"If the client's resolution is 1x, 1.5625 is the closest, and ",(0,r.kt)("inlineCode",{parentName:"p"},"500w")," corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"small.jpg")," will be selected by the browser."),(0,r.kt)("p",null,"If the resolution is retina (2x), the browser will use the closest resolution above the minimum. Meaning it will not choose the 500w (1.5625) because it is greater than 1 and the image might look bad. The browser would then choose the image with a resulting ratio closer to 2 which is 1000w (3.125)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"srcset"),"s solve the problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do \u2014 and also optionally that you want to serve different resolution images to high density/low-density screens."),(0,r.kt)("h6",{id:"references-9"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"},"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/"},"https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"have-you-used-different-html-templating-languages-before"},"Have you used different HTML templating languages before?"),(0,r.kt)("p",null,"Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, and EJS just to name a few. In my opinion, they are more or less the same and provide similar functionality of escaping content and helpful filters for manipulating the data to be displayed. Most templating engines will also allow you to inject your own filters in the event you need custom processing before display."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"[\u2191] Back to top")),(0,r.kt)("h3",{id:"other-answers"},"Other Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neal.codes/blog/front-end-interview-questions-html/"},"https://neal.codes/blog/front-end-interview-questions-html/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/"},"http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/"))))}h.isMDXComponent=!0},7462:function(e,t,n){function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return a}})}}]);