(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(e,n,t){"use strict";var r,a,i=t(127),o=RegExp.prototype.exec,l=String.prototype.replace,c=o,u=(r=/a/,a=/b*/g,o.call(r,"a"),o.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),s=void 0!==/()??/.exec("")[1];(u||s)&&(c=function(e){var n,t,r,a,c=this;return s&&(t=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),u&&(n=c.lastIndex),r=o.call(c,e),u&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),s&&r&&r.length>1&&l.call(r[0],t,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)}),r}),e.exports=c},115:function(e,n,t){"use strict";var r=t(124)(!0);e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},116:function(e,n,t){"use strict";var r=t(125),a=RegExp.prototype.exec;e.exports=function(e,n){var t=e.exec;if("function"==typeof t){var i=t.call(e,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,n)}},117:function(e,n,t){"use strict";t(126);var r=t(27),a=t(18),i=t(12),o=t(36),l=t(14),c=t(114),u=l("species"),s=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2===t.length&&"a"===t[0]&&"b"===t[1]}();e.exports=function(e,n,t){var p=l(e),m=!i(function(){var n={};return n[p]=function(){return 7},7!=""[e](n)}),g=m?!i(function(){var n=!1,t=/a/;return t.exec=function(){return n=!0,null},"split"===e&&(t.constructor={},t.constructor[u]=function(){return t}),t[p](""),!n}):void 0;if(!m||!g||"replace"===e&&!s||"split"===e&&!f){var h=/./[p],v=t(o,p,""[e],function(e,n,t,r,a){return n.exec===c?m&&!a?{done:!0,value:h.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),d=v[0],b=v[1];r(String.prototype,e,d),a(RegExp.prototype,p,2==n?function(e,n){return b.call(e,this,n)}:function(e){return b.call(e,this)})}}},118:function(e,n,t){var r=t(16).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||t(17)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},119:function(e,n,t){"use strict";var r=t(9),a=t(120)(1);r(r.P+r.F*!t(76)([].map,!0),"Array",{map:function(e){return a(this,e,arguments[1])}})},120:function(e,n,t){var r=t(53),a=t(50),i=t(37),o=t(75),l=t(121);e.exports=function(e,n){var t=1==e,c=2==e,u=3==e,s=4==e,f=6==e,p=5==e||f,m=n||l;return function(n,l,g){for(var h,v,d=i(n),b=a(d),x=r(l,g,3),y=o(b.length),E=0,k=t?m(n,y):c?m(n,0):void 0;y>E;E++)if((p||E in b)&&(v=x(h=b[E],E,d),e))if(t)k[E]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return E;case 2:k.push(h)}else if(s)return!1;return f?-1:u||s?s:k}}},121:function(e,n,t){var r=t(122);e.exports=function(e,n){return new(r(e))(n)}},122:function(e,n,t){var r=t(15),a=t(78),i=t(14)("species");e.exports=function(e){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},123:function(e,n,t){"use strict";var r=t(23),a=t(37),i=t(75),o=t(52),l=t(115),c=t(116),u=Math.max,s=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g;t(117)("replace",2,function(e,n,t,g){return[function(r,a){var i=e(this),o=null==r?void 0:r[n];return void 0!==o?o.call(r,i,a):t.call(String(i),r,a)},function(e,n){var a=g(t,e,this,n);if(a.done)return a.value;var f=r(e),p=String(this),m="function"==typeof n;m||(n=String(n));var v=f.global;if(v){var d=f.unicode;f.lastIndex=0}for(var b=[];;){var x=c(f,p);if(null===x)break;if(b.push(x),!v)break;""===String(x[0])&&(f.lastIndex=l(p,i(f.lastIndex),d))}for(var y,E="",k=0,S=0;S<b.length;S++){x=b[S];for(var w=String(x[0]),I=u(s(o(x.index),p.length),0),L=[],R=1;R<x.length;R++)L.push(void 0===(y=x[R])?y:String(y));var _=x.groups;if(m){var P=[w].concat(L,I,p);void 0!==_&&P.push(_);var j=String(n.apply(void 0,P))}else j=h(w,p,I,L,_,n);I>=k&&(E+=p.slice(k,I)+j,k=I+w.length)}return E+p.slice(k)}];function h(e,n,r,i,o,l){var c=r+e.length,u=i.length,s=m;return void 0!==o&&(o=a(o),s=p),t.call(l,s,function(t,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":l=o[a.slice(1,-1)];break;default:var s=+a;if(0===s)return a;if(s>u){var p=f(s/10);return 0===p?a:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):a}l=i[s-1]}return void 0===l?"":l})}})},124:function(e,n,t){var r=t(52),a=t(36);e.exports=function(e){return function(n,t){var i,o,l=String(a(n)),c=r(t),u=l.length;return c<0||c>=u?e?"":void 0:(i=l.charCodeAt(c))<55296||i>56319||c+1===u||(o=l.charCodeAt(c+1))<56320||o>57343?e?l.charAt(c):i:e?l.slice(c,c+2):o-56320+(i-55296<<10)+65536}}},125:function(e,n,t){var r=t(51),a=t(14)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var n,t,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),a))?t:i?r(n):"Object"==(o=r(n))&&"function"==typeof n.callee?"Arguments":o}},126:function(e,n,t){"use strict";var r=t(114);t(9)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},127:function(e,n,t){"use strict";var r=t(23);e.exports=function(){var e=r(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},128:function(e,n,t){"use strict";t(129)("trim",function(e){return function(){return e(this,3)}})},129:function(e,n,t){var r=t(9),a=t(36),i=t(12),o=t(130),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),s=function(e,n,t){var a={},l=i(function(){return!!o[e]()||"​"!="​"[e]()}),c=a[e]=l?n(f):o[e];t&&(a[t]=c),r(r.P+r.F*l,"String",a)},f=s.trim=function(e,n){return e=String(a(e)),1&n&&(e=e.replace(c,"")),2&n&&(e=e.replace(u,"")),e};e.exports=s},130:function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},131:function(e,n,t){"use strict";var r=t(9),a=t(132);r(r.P+r.F*!t(76)([].reduce,!0),"Array",{reduce:function(e){return a(this,e,arguments.length,arguments[1],!1)}})},132:function(e,n,t){var r=t(49),a=t(37),i=t(50),o=t(75);e.exports=function(e,n,t,l,c){r(n);var u=a(e),s=i(u),f=o(u.length),p=c?f-1:0,m=c?-1:1;if(t<2)for(;;){if(p in s){l=s[p],p+=m;break}if(p+=m,c?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:f>p;p+=m)p in s&&(l=n(l,s[p],p,u));return l}},133:function(e,n,t){"use strict";var r=t(134),a=t(23),i=t(135),o=t(115),l=t(75),c=t(116),u=t(114),s=Math.min,f=[].push,p=!!function(){try{return new RegExp("x","y")}catch(e){}}();t(117)("split",2,function(e,n,t,m){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(this);if(void 0===e&&0===n)return[];if(!r(e))return t.call(a,e,n);for(var i,o,l,c=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=void 0===n?4294967295:n>>>0,g=new RegExp(e.source,s+"g");(i=u.call(g,a))&&!((o=g.lastIndex)>p&&(c.push(a.slice(p,i.index)),i.length>1&&i.index<a.length&&f.apply(c,i.slice(1)),l=i[0].length,p=o,c.length>=m));)g.lastIndex===i.index&&g.lastIndex++;return p===a.length?!l&&g.test("")||c.push(""):c.push(a.slice(p)),c.length>m?c.slice(0,m):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,r){var a=e(this),i=null==t?void 0:t[n];return void 0!==i?i.call(t,a,r):g.call(String(a),t,r)},function(e,n){var r=m(g,e,this,n,g!==t);if(r.done)return r.value;var u=a(e),f=String(this),h=i(u,RegExp),v=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),b=new h(p?u:"^(?:"+u.source+")",d),x=void 0===n?4294967295:n>>>0;if(0===x)return[];if(0===f.length)return null===c(b,f)?[f]:[];for(var y=0,E=0,k=[];E<f.length;){b.lastIndex=p?E:0;var S,w=c(b,p?f:f.slice(E));if(null===w||(S=s(l(b.lastIndex+(p?0:E)),f.length))===y)E=o(f,E,v);else{if(k.push(f.slice(y,E)),k.length===x)return k;for(var I=1;I<=w.length-1;I++)if(k.push(w[I]),k.length===x)return k;E=y=S}}return k.push(f.slice(y)),k}]})},134:function(e,n,t){var r=t(15),a=t(51),i=t(14)("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[i])?!!n:"RegExp"==a(e))}},135:function(e,n,t){var r=t(23),a=t(49),i=t(14)("species");e.exports=function(e,n){var t,o=r(e).constructor;return void 0===o||null==(t=r(o)[i])?n:a(t)}},136:function(e,n,t){"use strict";t(123),t(128),t(131),t(133);var r=t(0),a=t.n(r),i=t(48),o=/\[(.+)\]\((https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&\/\/=]*)\)/gi,l=/^\*\s/,c=a.a.memo(function(e){var n=e.children.split(/\n/g),t=null;return n.reduce(function(e,r,c){if(0===(r=r.trim()).length)return e;var u=l.test(r);u&&(r=r.replace(l,""));var s=function(e){for(var n=[],t=e.split(o),r=0;r<t.length;r+=3){var l=t[r],c=t[r+1],u=t[r+2];l&&n.push(l),c&&u&&n.push(a.a.createElement(i.a,{key:r,to:u},c))}return n}(r);return u?(t||(t=[]),t.push(a.a.createElement("li",{key:t.length},s)),c+1!==n.length&&l.test(n[c+1])||(e.push(a.a.createElement("ul",{key:c},t)),t=null)):e.push(a.a.createElement("p",{key:c},s)),e},[])});t.d(n,"a",function(){return c})},141:function(e,n,t){e.exports={list:"_1bfbbfw62V274ljJzTeTJ_",item:"_3cF1CSkvAku44JBAgvJJF3"}},142:function(e,n,t){"use strict";t(77);var r=t(0),a=t.n(r),i=t(141),o=t.n(i);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=a.a.memo(function(e){return a.a.createElement("ul",l({},e,{className:o.a.list}))}),u=a.a.memo(function(e){return a.a.createElement("li",l({},e,{className:o.a.item}))});t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u})},161:function(e,n,t){e.exports=t.p+"public/img/en.7daf4fd0a1f6634bcf40721cc4e3b6b7.png"},162:function(e,n,t){e.exports=t.p+"public/img/pt.74f6bf4d0fa146077a49b3a62b038670.png"},163:function(e,n,t){e.exports={extraSkills:"_1Eu1iWtQfBLNDIPp_eRLLF",extraSkillsButton:"_2KU9nij6c6WH-gisM79UyI",extraSkillsButtonIconHide:"aNdpM6XRfjeWzUzqs_ZeJ",extraSkillsContent:"_3ptdYfz8T_vr6DLk9vcMst",extraSkillsContentHide:"_1RzKaarGwBbSRKjyzQPE7z",language:"_1cdUnLr11B3pQaJSoXxsPg",languageFlag:"_3VHR_kyWk69xRQ2ciJhsCX",languageLevel:"_7_3H7b8jk3OKtAy48BZrt",socialNetworkLink:"_3H47qf-hiaYami6mn9oK4u",socialNetworkLinkIcon:"TOGUh4bFpsNlKVxYIGsMU"}},173:function(e,n,t){"use strict";t.r(n);t(55),t(56),t(29),t(57),t(58),t(118),t(119),t(81);var r=t(5),a=t.n(r),i=t(0),o=t.n(i),l=t(8),c=t(161),u=t.n(c),s=t(162),f={summary:"\n        I'm passionate for Web development, mainly in terms of Front-end development. I'm always ready to learn and improve my skills. I like working with open-minded, fun, diversified, and dynamic teams with fresh ideas that push the boundaries.\n        I have a good knowledge of JavaScript which allows me to code up from scratch a fully responsive and mobile first site in plain HTML5, CSS3, React and NodeJS (for example).\n    ",languages:[{name:"Portuguese",code:"pt",flag:t.n(s).a,level:"Native"},{name:"English",code:"en",flag:u.a,level:"Proficient"}],skills:[{name:"HTML 5",icon:"html5"},{name:"CSS3",icon:"css3"},{name:"SASS",icon:"sass"},{name:"JavaScript",icon:"js"},{name:"React",icon:"react"},{name:"Redux"},{name:"Jasmine"},{name:"Jest"},{name:"Webpack"},{name:"Node.js",icon:"node-js"},{name:"jQuery"},{name:"Angular",icon:"angular"},{name:"PHP",icon:"php"},{name:"Laravel"},{name:"CakePHP"},{name:"MySQL"},{name:"XML"},{name:"JSON"},{name:"Twitter Bootstrap"},{name:"Gulp",icon:"gulp"},{name:"Java",icon:"java"},{name:"Photoshop"},{name:"REST"},{name:"Web Development"},{name:"XML Schema"},{name:"XPath"},{name:"XQuery"},{name:"XSLT"},{name:"PostgreSQL"},{name:"Microsoft SQL Server"},{name:"Mac OS X",icon:"apple"},{name:"Windows",icon:"windows"},{name:"Linux",icon:"linux"},{name:"UML"},{name:"LaTeX"},{name:"Design Patterns"},{name:"OOP"},{name:"Software Engineering"},{name:"User Interface Design"}],pages:[{name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/bensampaio"},{name:"Github",icon:"github-square",url:"https://github.com/bensampaio"},{name:"Google+",icon:"google-plus-square",url:"https://plus.google.com/u/0/+BrunoSampaio88"},{name:"Facebook",icon:"facebook-square",url:"https://www.facebook.com/bens.sampaio"}],interests:["Traveling","Cooking","Cinema","Literature","Bouldering","Lindyhop","Yoga","Board Games","Video Games"]},p=t(48),m=t(142),g=t(28),h=t(136),v=t(163),d=t.n(v);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function n(e){var t,r,a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(t=!(a=E(n).call(this,e))||"object"!==b(a)&&"function"!=typeof a?S(r):a).state={showExtraSkills:!1},t.toggleExtraSkills=t.toggleExtraSkills.bind(S(S(t))),t}var t,r,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,i["PureComponent"]),t=n,(r=[{key:"toggleExtraSkills",value:function(){this.setState(function(e){return{showExtraSkills:!e.showExtraSkills}})}},{key:"render",value:function(){var e=this.state.showExtraSkills;return o.a.createElement(g.a,null,o.a.createElement("h2",null,"Summary"),o.a.createElement(h.a,null,f.summary),o.a.createElement("h2",null,"Skills"),o.a.createElement(m.a,null,f.skills.slice(0,15).map(function(e,n){var t=e.icon,r=e.name;return o.a.createElement(m.b,{key:n},o.a.createElement("strong",null,t&&o.a.createElement(l.a,{"aria-hidden":!0,icon:["fab",t]})," ",r))}),o.a.createElement(m.b,null,o.a.createElement("div",{className:d.a.extraSkills},o.a.createElement("div",{className:a()(d.a.extraSkillsContent,x({},d.a.extraSkillsContentHide,!e))},o.a.createElement(m.a,null,f.skills.slice(15).map(function(e,n){var t=e.icon,r=e.name;return o.a.createElement(m.b,{key:n},t&&o.a.createElement(l.a,{"aria-hidden":!0,icon:["fab",t]})," ",r)}))),o.a.createElement("button",{className:d.a.extraSkillsButton,title:"Expand / Collapse",onClick:this.toggleExtraSkills},o.a.createElement(l.a,{"aria-hidden":!0,className:a()(x({},d.a.extraSkillsButtonIconHide,e)),icon:"chevron-down"}),o.a.createElement(l.a,{"aria-hidden":!0,className:a()(x({},d.a.extraSkillsButtonIconHide,!e)),icon:"chevron-up"}))))),o.a.createElement("h2",null,"Languages"),o.a.createElement(m.a,null,f.languages.map(function(e,n){return o.a.createElement(m.b,{key:n},o.a.createElement("div",{className:d.a.language},o.a.createElement("img",{alt:"","aria-hidden":!0,className:d.a.languageFlag,src:e.flag}),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("strong",null,e.name)),o.a.createElement("div",{className:d.a.languageLevel},e.level))))})),o.a.createElement("h2",null,"Social"),o.a.createElement(m.a,null,f.pages.map(function(e,n){var t=e.icon,r=e.name,a=e.url;return o.a.createElement(m.b,{key:n},o.a.createElement(p.a,{className:d.a.socialNetworkLink,to:a},o.a.createElement(l.a,{"aria-hidden":!0,className:d.a.socialNetworkLinkIcon,icon:["fab",t]}),o.a.createElement("span",null,r)))})),o.a.createElement("h2",null,"Interests"),o.a.createElement(m.a,null,f.interests.map(function(e,n){return o.a.createElement(m.b,{key:n},e)})))}}])&&y(t.prototype,r),c&&y(t,c),n}();t.d(n,"default",function(){return w})}}]);