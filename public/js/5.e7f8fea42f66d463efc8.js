(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(e,n,t){"use strict";var r,a,i=t(117),l=t(179),c=RegExp.prototype.exec,o=String.prototype.replace,u=c,s=(r=/a/,a=/b*/g,c.call(r,"a"),c.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),f=l.UNSUPPORTED_Y||l.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(s||m||f)&&(u=function(e){var n,t,r,a,l=this,u=f&&l.sticky,p=i.call(l),d=l.source,g=0,h=e;return u&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),h=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,g++),t=new RegExp("^(?:"+d+")",p)),m&&(t=new RegExp("^"+d+"$(?!\\s)",p)),s&&(n=l.lastIndex),r=c.call(u?t:l,h),u?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=l.lastIndex,l.lastIndex+=r[0].length):l.lastIndex=0:s&&r&&(l.lastIndex=l.global?r.index+r[0].length:n),m&&r&&r.length>1&&o.call(r[0],t,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=u},170:function(e,n,t){"use strict";var r=t(7),a=t(169);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},171:function(e,n,t){"use strict";t(170);var r=t(22),a=t(6),i=t(2),l=t(169),c=t(21),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),m=!!/./[f]&&""===/./[f]("a","$0"),p=!a((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,f){var d=i(e),g=!a((function(){var n={};return n[d]=function(){return 7},7!=""[e](n)})),h=g&&!a((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[o]=function(){return t},t.flags="",t[d]=/./[d]),t.exec=function(){return n=!0,null},t[d](""),!n}));if(!g||!h||"replace"===e&&(!u||!s||m)||"split"===e&&!p){var v=/./[d],E=t(d,""[e],(function(e,n,t,r,a){return n.exec===l?g&&!a?{done:!0,value:v.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),b=E[0],x=E[1];r(String.prototype,e,b),r(RegExp.prototype,d,2==n?function(e,n){return x.call(e,this,n)}:function(e){return x.call(e,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},172:function(e,n,t){"use strict";var r=t(118).charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},173:function(e,n,t){var r=t(29),a=t(169);e.exports=function(e,n){var t=e.exec;if("function"==typeof t){var i=t.call(e,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,n)}},174:function(e,n){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},175:function(e,n,t){"use strict";var r=t(7),a=t(116).map,i=t(74),l=t(72),c=i("map"),o=l("map");r({target:"Array",proto:!0,forced:!c||!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(177),t(170),t(180),t(181),t(183);var r=t(0),a=t.n(r),i=t(71),l=/\[(.+)\]\((https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&//=]*)\)/gi,c=/^\*\s/,o=Object(r.memo)((function(e){var n=e.children.split(/\n/g),t=null;return n.reduce((function(e,r,o){if(0===(r=r.trim()).length)return e;var u=c.test(r);u&&(r=r.replace(c,""));var s=function(e){for(var n=[],t=e.split(l),r=0;r<t.length;r+=3){var c=t[r],o=t[r+1],u=t[r+2];c&&n.push(c),o&&u&&n.push(a.a.createElement(i.a,{key:r,to:u},o))}return n}(r);return u?(t||(t=[]),t.push(a.a.createElement("li",{key:t.length},s)),o+1!==n.length&&c.test(n[o+1])||(e.push(a.a.createElement("ul",{key:o},t)),t=null)):e.push(a.a.createElement("p",{key:o},s)),e}),[])}))},177:function(e,n,t){"use strict";var r=t(7),a=t(178).left,i=t(119),l=t(72),c=i("reduce"),o=l("reduce",{1:0});r({target:"Array",proto:!0,forced:!c||!o},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},178:function(e,n,t){var r=t(30),a=t(20),i=t(48),l=t(28),c=function(e){return function(n,t,c,o){r(t);var u=a(n),s=i(u),f=l(u.length),m=e?f-1:0,p=e?-1:1;if(c<2)for(;;){if(m in s){o=s[m],m+=p;break}if(m+=p,e?m<0:f<=m)throw TypeError("Reduce of empty array with no initial value")}for(;e?m>=0:f>m;m+=p)m in s&&(o=t(o,s[m],m,u));return o}};e.exports={left:c(!1),right:c(!0)}},179:function(e,n,t){"use strict";var r=t(6);function a(e,n){return RegExp(e,n)}n.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},180:function(e,n,t){"use strict";var r=t(171),a=t(9),i=t(20),l=t(28),c=t(49),o=t(39),u=t(172),s=t(173),f=Math.max,m=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,n,t,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,E=h?"$":"$0";return[function(t,r){var a=o(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,a,r):n.call(String(a),t,r)},function(e,r){if(!h&&v||"string"==typeof r&&-1===r.indexOf(E)){var i=t(n,e,this,r);if(i.done)return i.value}var o=a(e),p=String(this),d="function"==typeof r;d||(r=String(r));var g=o.global;if(g){var x=o.unicode;o.lastIndex=0}for(var y=[];;){var S=s(o,p);if(null===S)break;if(y.push(S),!g)break;""===String(S[0])&&(o.lastIndex=u(p,l(o.lastIndex),x))}for(var k,w="",R=0,I=0;I<y.length;I++){S=y[I];for(var _=String(S[0]),P=f(m(c(S.index),p.length),0),A=[],N=1;N<S.length;N++)A.push(void 0===(k=S[N])?k:String(k));var T=S.groups;if(d){var O=[_].concat(A,P,p);void 0!==T&&O.push(T);var j=String(r.apply(void 0,O))}else j=b(_,p,P,A,T,r);P>=R&&(w+=p.slice(R,P)+j,R=P+_.length)}return w+p.slice(R)}];function b(e,t,r,a,l,c){var o=r+e.length,u=a.length,s=g;return void 0!==l&&(l=i(l),s=d),n.call(c,s,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(o);case"<":c=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>u){var f=p(s/10);return 0===f?n:f<=u?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):n}c=a[s-1]}return void 0===c?"":c}))}}))},181:function(e,n,t){"use strict";var r=t(171),a=t(182),i=t(9),l=t(39),c=t(120),o=t(172),u=t(28),s=t(173),f=t(169),m=t(6),p=[].push,d=Math.min,g=!m((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(l(this)),i=void 0===t?4294967295:t>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return n.call(r,e,i);for(var c,o,u,s=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,g=new RegExp(e.source,m+"g");(c=f.call(g,r))&&!((o=g.lastIndex)>d&&(s.push(r.slice(d,c.index)),c.length>1&&c.index<r.length&&p.apply(s,c.slice(1)),u=c[0].length,d=o,s.length>=i));)g.lastIndex===c.index&&g.lastIndex++;return d===r.length?!u&&g.test("")||s.push(""):s.push(r.slice(d)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var a=l(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,t):r.call(String(a),n,t)},function(e,a){var l=t(r,e,this,a,r!==n);if(l.done)return l.value;var f=i(e),m=String(this),p=c(f,RegExp),h=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),E=new p(g?f:"^(?:"+f.source+")",v),b=void 0===a?4294967295:a>>>0;if(0===b)return[];if(0===m.length)return null===s(E,m)?[m]:[];for(var x=0,y=0,S=[];y<m.length;){E.lastIndex=g?y:0;var k,w=s(E,g?m:m.slice(y));if(null===w||(k=d(u(E.lastIndex+(g?0:y)),m.length))===x)y=o(m,y,h);else{if(S.push(m.slice(x,y)),S.length===b)return S;for(var R=1;R<=w.length-1;R++)if(S.push(w[R]),S.length===b)return S;y=x=k}}return S.push(m.slice(x)),S}]}),!g)},182:function(e,n,t){var r=t(8),a=t(29),i=t(2)("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[i])?!!n:"RegExp"==a(e))}},183:function(e,n,t){"use strict";var r=t(7),a=t(184).trim;r({target:"String",proto:!0,forced:t(185)("trim")},{trim:function(){return a(this)}})},184:function(e,n,t){var r=t(39),a="["+t(174)+"]",i=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),c=function(e){return function(n){var t=String(r(n));return 1&e&&(t=t.replace(i,"")),2&e&&(t=t.replace(l,"")),t}};e.exports={start:c(1),end:c(2),trim:c(3)}},185:function(e,n,t){var r=t(6),a=t(174);e.exports=function(e){return r((function(){return!!a[e]()||"​᠎"!="​᠎"[e]()||a[e].name!==e}))}},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));t(115);var r=t(0),a=t.n(r),i="_1bfbbfw62V274ljJzTeTJ_",l="_3cF1CSkvAku44JBAgvJJF3";function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=Object(r.memo)((function(e){return a.a.createElement("ul",c({},e,{className:i}))})),u=Object(r.memo)((function(e){return a.a.createElement("li",c({},e,{className:l}))}))},194:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return _}));t(50),t(75),t(76),t(122),t(123),t(51),t(175),t(124),t(73),t(114),t(77),t(52),t(78),t(79),t(80);var r=t(14),a=t.n(r),i=t(0),l=t.n(i),c=t(16),o=t.p+"public/img/en.afcc67e203faffcf33267fb131cbe741.png",u={summary:"\n        I'm passionate for Web development, mainly in terms of Front-end development. I'm always ready to learn and improve my skills. I like working with open-minded, fun, diversified, and dynamic teams with fresh ideas that push the boundaries.\n        I have a good knowledge of JavaScript which allows me to code up from scratch a fully responsive and mobile first site in plain HTML5, CSS3, React and NodeJS (for example).\n    ",languages:[{name:"Portuguese",code:"pt",flag:t.p+"public/img/pt.bbc19ffad09547c1f0918dca428dca08.png",level:"Native"},{name:"English",code:"en",flag:o,level:"Proficient"}],skills:[{name:"HTML 5",icon:"html5"},{name:"CSS3",icon:"css3"},{name:"SASS",icon:"sass"},{name:"JavaScript",icon:"js"},{name:"React",icon:"react"},{name:"Redux"},{name:"Jasmine"},{name:"Jest"},{name:"Webpack"},{name:"Node.js",icon:"node-js"},{name:"jQuery"},{name:"Angular",icon:"angular"},{name:"PHP",icon:"php"},{name:"Laravel"},{name:"CakePHP"},{name:"MySQL"},{name:"XML"},{name:"JSON"},{name:"Twitter Bootstrap"},{name:"Gulp",icon:"gulp"},{name:"Java",icon:"java"},{name:"Photoshop"},{name:"REST"},{name:"Web Development"},{name:"XML Schema"},{name:"XPath"},{name:"XQuery"},{name:"XSLT"},{name:"PostgreSQL"},{name:"Microsoft SQL Server"},{name:"Mac OS X",icon:"apple"},{name:"Windows",icon:"windows"},{name:"Linux",icon:"linux"},{name:"UML"},{name:"LaTeX"},{name:"Design Patterns"},{name:"OOP"},{name:"Software Engineering"},{name:"User Interface Design"}],pages:[{name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/bensampaio"},{name:"Github",icon:"github-square",url:"https://github.com/bensampaio"},{name:"Google+",icon:"google-plus-square",url:"https://plus.google.com/u/0/+BrunoSampaio88"},{name:"Facebook",icon:"facebook-square",url:"https://www.facebook.com/bens.sampaio"}],interests:["Traveling","Cooking","Cinema","Literature","Bouldering","Lindyhop","Yoga","Board Games","Video Games"]},s=t(71),f=t(186),m=t(40),p=t(176),d="_1Eu1iWtQfBLNDIPp_eRLLF",g="_2KU9nij6c6WH-gisM79UyI",h="aNdpM6XRfjeWzUzqs_ZeJ",v="_3ptdYfz8T_vr6DLk9vcMst",E="_1RzKaarGwBbSRKjyzQPE7z",b="_1cdUnLr11B3pQaJSoXxsPg",x="_3VHR_kyWk69xRQ2ciJhsCX",y="_7_3H7b8jk3OKtAy48BZrt",S="_3H47qf-hiaYami6mn9oK4u",k="TOGUh4bFpsNlKVxYIGsMU";function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var _=Object(i.memo)((function(){var e=R(Object(i.useState)(!1),2),n=e[0],t=e[1],r=Object(i.useCallback)((function(){t(!n)}),[n]);return l.a.createElement(m.a,null,l.a.createElement("h2",null,"Summary"),l.a.createElement(p.a,null,u.summary),l.a.createElement("h2",null,"Skills"),l.a.createElement(f.a,null,u.skills.slice(0,15).map((function(e,n){var t=e.icon,r=e.name;return l.a.createElement(f.b,{key:n},l.a.createElement("strong",null,t&&l.a.createElement(c.a,{"aria-hidden":!0,icon:["fab",t]})," ",r))})),l.a.createElement(f.b,null,l.a.createElement("div",{className:d},l.a.createElement("div",{className:a()(v,w({},E,!n))},l.a.createElement(f.a,null,u.skills.slice(15).map((function(e,n){var t=e.icon,r=e.name;return l.a.createElement(f.b,{key:n},t&&l.a.createElement(c.a,{"aria-hidden":!0,icon:["fab",t]})," ",r)})))),l.a.createElement("button",{className:g,title:"Expand / Collapse",onClick:r},l.a.createElement(c.a,{"aria-hidden":!0,className:a()(w({},h,n)),icon:"chevron-down"}),l.a.createElement(c.a,{"aria-hidden":!0,className:a()(w({},h,!n)),icon:"chevron-up"}))))),l.a.createElement("h2",null,"Languages"),l.a.createElement(f.a,null,u.languages.map((function(e,n){return l.a.createElement(f.b,{key:n},l.a.createElement("div",{className:b},l.a.createElement("img",{alt:"","aria-hidden":!0,className:x,src:e.flag}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("strong",null,e.name)),l.a.createElement("div",{className:y},e.level))))}))),l.a.createElement("h2",null,"Social"),l.a.createElement(f.a,null,u.pages.map((function(e,n){var t=e.icon,r=e.name,a=e.url;return l.a.createElement(f.b,{key:n},l.a.createElement(s.a,{className:S,to:a},l.a.createElement(c.a,{"aria-hidden":!0,className:k,icon:["fab",t]}),l.a.createElement("span",null,r)))}))),l.a.createElement("h2",null,"Interests"),l.a.createElement(f.a,null,u.interests.map((function(e,n){return l.a.createElement(f.b,{key:n},e)}))))}))}}]);