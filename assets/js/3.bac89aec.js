(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(t,e,n){var r=n(210),o=n(13);t.exports=function(t){return r(o(t))}},200:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},201:function(t,e,n){var r=n(20)("keys"),o=n(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},205:function(t,e,n){var r=n(18)("unscopables"),o=Array.prototype;null==o[r]&&n(14)(o,r,{}),t.exports=function(t){o[r][t]=!0}},206:function(t,e,n){var r=n(207),o=n(200);t.exports=Object.keys||function(t){return r(t,o)}},207:function(t,e,n){var r=n(158),o=n(198),s=n(208)(!1),i=n(201)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,c=[];for(n in a)n!=i&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~s(c,n)||c.push(n));return c}},208:function(t,e,n){var r=n(198),o=n(160),s=n(211);t.exports=function(t){return function(e,n,i){var a,u=r(e),c=o(u.length),l=s(i,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},210:function(t,e,n){var r=n(161);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},211:function(t,e,n){var r=n(15),o=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):s(t,e)}},215:function(t,e,n){var r=n(231),o=n(164),s=n(198),i=n(163),a=n(158),u=n(167),c=Object.getOwnPropertyDescriptor;e.f=n(10)?c:function(t,e){if(t=s(t),e=i(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},221:function(t,e,n){var r=n(9),o=n(222),s=n(200),i=n(201)("IE_PROTO"),a=function(){},u=function(){var t,e=n(168)("iframe"),r=s.length;for(e.style.display="none",n(223).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[s[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[i]=t):n=u(),void 0===e?n:o(n,e)}},222:function(t,e,n){var r=n(159),o=n(9),s=n(206);t.exports=n(10)?Object.defineProperties:function(t,e){o(t);for(var n,i=s(e),a=i.length,u=0;a>u;)r.f(t,n=i[u++],e[n]);return t}},223:function(t,e,n){var r=n(3).document;t.exports=r&&r.documentElement},225:function(t,e,n){var r=n(157),o=n(13),s=n(11),i=n(226),a="["+i+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var o={},a=s((function(){return!!i[t]()||"​"!="​"[t]()})),u=o[t]=a?e(p):i[t];n&&(o[n]=u),r(r.P+r.F*a,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},226:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},229:function(t,e,n){var r=n(12),o=n(230).set;t.exports=function(t,e,n){var s,i=e.constructor;return i!==n&&"function"==typeof i&&(s=i.prototype)!==n.prototype&&r(s)&&o&&o(t,s),t}},230:function(t,e,n){var r=n(12),o=n(9),s=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(165)(Function.call,n(215).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:s}},231:function(t,e){e.f={}.propertyIsEnumerable},232:function(t,e,n){var r=n(207),o=n(200).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},252:function(t,e,n){},277:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"What is the full form of HTTP?","responses":[{"text":"Hyper text transfer package"},{"text":"Hyper text transfer protocol","correct":true},{"text":"Hyphenation text test program"},{"text":"None of the above"}]},{"text":"HTML document start and end with which tag pairs?","responses":[{"text":"HTML","correct":true},{"text":"WEB"},{"text":"HEAD"},{"text":"BODY"}]},{"text":"Which tag is used to create body text in HTML?","responses":[{"text":"HEAD"},{"text":"BODY","correct":true},{"text":"TITLE"},{"text":"TEXT"}]},{"text":"Outlook Express is _________","responses":[{"text":"E-Mail Client","correct":true},{"text":"Browser"},{"text":"Search Engine"},{"text":"None of the above"}]},{"text":"What is a search engine?","responses":[{"text":"A hardware component "},{"text":"A machinery engine that search data"},{"text":"A web site that searches anything","correct":true},{"text":"A program that searches engines"}]},{"text":"What does the .com domain represents?","responses":[{"text":"Network"},{"text":"Education"},{"text":"Commercial","correct":true},{"text":"None of the above"}]},{"text":"In Satellite based communication, VSAT stands for? ","responses":[{"text":" Very Small Aperture Terminal","correct":true},{"text":"Varying Size Aperture Terminal "},{"text":"Very Small Analog Terminal"},{"text":"None of the above"}]},{"text":"What is the full form of TCP/IP? ","responses":[{"text":"Telephone call protocol / international protocol"},{"text":"Transmission control protocol / internet protocol","correct":true},{"text":"Transport control protocol / internet protocol "},{"text":"None of the above"}]},{"text":"What is the full form of HTML?","responses":[{"text":"Hyper text marking language"},{"text":"Hyphenation text markup language "},{"text":"Hyper text markup language","correct":true},{"text":"Hyphenation test marking language"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},278:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"Who is the Batman","responses":[{"text":"Laughing Bat"},{"text":"Bruce Wayne","correct":true},{"text":"Dick Grayson"},{"text":"None of the above"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},359:function(t,e,n){var r=n(157);r(r.P,"Array",{fill:n(360)}),n(205)("fill")},360:function(t,e,n){"use strict";var r=n(162),o=n(211),s=n(160);t.exports=function(t){for(var e=r(this),n=s(e.length),i=arguments.length,a=o(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,c=void 0===u?n:o(u,n);c>a;)e[a++]=t;return e}},361:function(t,e,n){"use strict";var r=n(3),o=n(158),s=n(161),i=n(229),a=n(163),u=n(11),c=n(232).f,l=n(215).f,p=n(159).f,f=n(225).trim,x=r.Number,h=x,v=x.prototype,d="Number"==s(n(221)(v)),_="trim"in String.prototype,g=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,s=(e=_?e.trim():f(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,u=e.slice(2),c=0,l=u.length;c<l;c++)if((i=u.charCodeAt(c))<48||i>o)return NaN;return parseInt(u,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(d?u((function(){v.valueOf.call(n)})):"Number"!=s(n))?i(new h(g(e)),n,x):g(e)};for(var q,m=n(10)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;m.length>y;y++)o(h,q=m[y])&&!o(x,q)&&p(x,q,l(h,q));x.prototype=v,v.constructor=x,n(19)(r,"Number",x)}},362:function(t,e,n){"use strict";var r=n(252);n.n(r).a},368:function(t,e,n){"use strict";n.r(e);n(359),n(361);var r=n(277),o=n(278),s={name:"Quiz",props:{quizNum:Number},data:function(){var t;switch(this.quizNum){case 1:t=r;break;case 2:t=o;break;default:t=r}return{quiz:t,questionIndex:0,userResponses:Array(t.questions.length).fill(null),isActive:!1}},filters:{charIndex:function(t){return String.fromCharCode(97+t)}},methods:{restart:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)},selectOption:function(t){this.$set(this.userResponses,this.questionIndex,t)},next:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++},prev:function(){this.quiz.questions.length>0&&this.questionIndex--},score:function(){for(var t=0,e=0;e<this.userResponses.length;e++)void 0!==this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}}},i=(n(362),n(4)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"questionContainer"},[n("header",[n("div",{staticClass:"shell"},[n("div",{staticClass:"bar",style:{width:t.questionIndex/t.quiz.questions.length*100+"%"}},[n("span",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"%")])])])]),t._v(" "),n("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex]&&t.quiz.questions[t.questionIndex].text))]),t._v(" "),t.quiz.questions[t.questionIndex]?n("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,r){return n("div",{key:r,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==r},on:{click:function(e){return t.selectOption(r)}}},[t._v("\n            "+t._s(t._f("charIndex")(r))+". "+t._s(e.text||"Mpthasdng")+"\n          ")])})),0):t._e(),t._v(" "),n("footer",{staticClass:"questionFooter"},[n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("\n                    Back\n                  ")]),t._v(" "),n("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t._v(" "),t.questionIndex>=t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),t._v(" "),n("h2",{staticClass:"title"},[t._v("\n      You did "+t._s(t.score()/t.quiz.questions.length>.7?"an amazing":t.score()/t.quiz.questions.length<.4?"a poor":"a good")+" job!\n    ")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n      Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n    ")]),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),n("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)}),[],!1,null,"2871fdf4",null);e.default=a.exports}}]);