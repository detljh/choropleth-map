!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){e(1),t.exports=e(3)},function(t,n,e){"use strict";var r,i=e(2);((r=i)&&r.__esModule?r:{default:r}).default.selectAll("svg").append("svg").attr("width",960).attr("height",600)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(7);n.default={select:r.select,selectAll:r.selectAll}},function(t,n,e){var r=e(4),i=e(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},u=(r(i,o),i.locals?i.locals:{});t.exports=u},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),u=[];function c(t){for(var n=-1,e=0;e<u.length;e++)if(u[e].identifier===t){n=e;break}return n}function a(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],a=n.base?o[0]+n.base:o[0],s=e[a]||0,l="".concat(a," ").concat(s);e[a]=s+1;var f=c(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(u[f].references++,u[f].updater(h)):u.push({identifier:l,updater:m(h,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(n)}return n}var l,f=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function h(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,i);else{var o=document.createTextNode(i),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(o,u[n]):t.appendChild(o)}}function p(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,v=0;function m(t,n){var e,r,i;if(n.singleton){var o=v++;e=d||(d=s(n)),r=h.bind(null,e,o,!1),i=h.bind(null,e,o,!0)}else e=s(n),r=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=a(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=c(e[r]);u[i].references--}for(var o=a(t,n),s=0;s<e.length;s++){var l=c(e[s]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}e=o}}}},function(t,n,e){(n=e(6)(!0)).push([t.i,"svg {\r\n    background-color: pink;\r\n}","",{version:3,sources:["index.css"],names:[],mappings:"AAAA;IACI,sBAAsB;AAC1B",file:"index.css",sourcesContent:["svg {\r\n    background-color: pink;\r\n}"]}]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(u=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var u,c,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);r&&i[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n,e){"use strict";e.r(n);var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},o=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t};function u(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}}function c(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var a=function(t){var n=o(t);return(n.local?c:u)(n)};function s(){}var l=function(t){return null==t?s:function(){return this.querySelector(t)}};function f(){return[]}var h=function(t){return null==t?f:function(){return this.querySelectorAll(t)}},p=function(t){return function(){return this.matches(t)}},d=function(t){return new Array(t.length)};function v(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}v.prototype={constructor:v,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function m(t,n,e,r,i,o){for(var u,c=0,a=n.length,s=o.length;c<s;++c)(u=n[c])?(u.__data__=o[c],r[c]=u):e[c]=new v(t,o[c]);for(;c<a;++c)(u=n[c])&&(i[c]=u)}function _(t,n,e,r,i,o,u){var c,a,s,l={},f=n.length,h=o.length,p=new Array(f);for(c=0;c<f;++c)(a=n[c])&&(p[c]=s="$"+u.call(a,a.__data__,c,n),s in l?i[c]=a:l[s]=a);for(c=0;c<h;++c)(a=l[s="$"+u.call(t,o[c],c,o)])?(r[c]=a,a.__data__=o[c],l[s]=null):e[c]=new v(t,o[c]);for(c=0;c<f;++c)(a=n[c])&&l[p[c]]===a&&(i[c]=a)}function y(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function g(t){return function(){this.removeAttribute(t)}}function w(t){return function(){this.removeAttributeNS(t.space,t.local)}}function b(t,n){return function(){this.setAttribute(t,n)}}function A(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function x(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function S(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var E=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function C(t){return function(){this.style.removeProperty(t)}}function N(t,n,e){return function(){this.style.setProperty(t,n,e)}}function M(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function j(t,n){return t.style.getPropertyValue(n)||E(t).getComputedStyle(t,null).getPropertyValue(n)}function T(t){return function(){delete this[t]}}function O(t,n){return function(){this[t]=n}}function P(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function L(t){return t.trim().split(/^|\s+/)}function B(t){return t.classList||new R(t)}function R(t){this._node=t,this._names=L(t.getAttribute("class")||"")}function I(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function q(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function D(t){return function(){I(this,t)}}function U(t){return function(){q(this,t)}}function k(t,n){return function(){(n.apply(this,arguments)?I:q)(this,t)}}R.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function V(){this.textContent=""}function H(t){return function(){this.textContent=t}}function z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function G(){this.innerHTML=""}function X(t){return function(){this.innerHTML=t}}function F(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function J(){this.nextSibling&&this.parentNode.appendChild(this)}function Y(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function $(){return null}function K(){var t=this.parentNode;t&&t.removeChild(this)}function Q(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function W(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}var Z={},tt=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(Z={mouseenter:"mouseover",mouseleave:"mouseout"}));function nt(t,n,e){return t=et(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function et(t,n,e){return function(r){var i=tt;tt=r;try{t.call(this,this.__data__,n,e)}finally{tt=i}}}function rt(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function it(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function ot(t,n,e){var r=Z.hasOwnProperty(t.type)?nt:et;return function(i,o,u){var c,a=this.__on,s=r(n,o,u);if(a)for(var l=0,f=a.length;l<f;++l)if((c=a[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=s,c.capture=e),void(c.value=n);this.addEventListener(t.type,s,e),c={type:t.type,name:t.name,value:n,listener:s,capture:e},a?a.push(c):this.__on=[c]}}function ut(t,n,e,r){var i=tt;t.sourceEvent=tt,tt=t;try{return n.apply(e,r)}finally{tt=i}}function ct(t,n,e){var r=E(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function at(t,n){return function(){return ct(this,t,n)}}function st(t,n){return function(){return ct(this,t,n.apply(this,arguments))}}var lt=[null];function ft(t,n){this._groups=t,this._parents=n}function ht(){return new ft([[document.documentElement]],lt)}ft.prototype=ht.prototype={constructor:ft,select:function(t){"function"!=typeof t&&(t=l(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,c=n[i],a=c.length,s=r[i]=new Array(a),f=0;f<a;++f)(o=c[f])&&(u=t.call(o,o.__data__,f,c))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new ft(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=h(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,c=n[o],a=c.length,s=0;s<a;++s)(u=c[s])&&(r.push(t.call(u,u.__data__,s,c)),i.push(u));return new ft(r,i)},filter:function(t){"function"!=typeof t&&(t=p(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,a=r[i]=[],s=0;s<c;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&a.push(o);return new ft(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),l=-1,this.each((function(t){d[++l]=t})),d;var e,r=n?_:m,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,c=new Array(u),a=new Array(u),s=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],p=h.length,d=t.call(f,f&&f.__data__,l,i),v=d.length,y=a[l]=new Array(v),g=c[l]=new Array(v);r(f,h,y,g,s[l]=new Array(p),d,n);for(var w,b,A=0,x=0;A<v;++A)if(w=y[A]){for(A>=x&&(x=A+1);!(b=g[x])&&++x<v;);w._next=b||null}}return(c=new ft(c,i))._enter=a,c._exit=s,c},enter:function(){return new ft(this._enter||this._groups.map(d),this._parents)},exit:function(){return new ft(this._exit||this._groups.map(d),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),c=0;c<o;++c)for(var a,s=n[c],l=e[c],f=s.length,h=u[c]=new Array(f),p=0;p<f;++p)(a=s[p]||l[p])&&(h[p]=a);for(;c<r;++c)u[c]=n[c];return new ft(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=y);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,c=e[o],a=c.length,s=i[o]=new Array(a),l=0;l<a;++l)(u=c[l])&&(s[l]=u);s.sort(n)}return new ft(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,c=o.length;u<c;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=o(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?w:g:"function"==typeof n?e.local?S:x:e.local?A:b)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?C:"function"==typeof n?M:N)(t,n,null==e?"":e)):j(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?T:"function"==typeof n?P:O)(t,n)):this.node()[t]},classed:function(t,n){var e=L(t+"");if(arguments.length<2){for(var r=B(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?k:n?D:U)(e,n))},text:function(t){return arguments.length?this.each(null==t?V:("function"==typeof t?z:H)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?G:("function"==typeof t?F:X)(t)):this.node().innerHTML},raise:function(){return this.each(J)},lower:function(){return this.each(Y)},append:function(t){var n="function"==typeof t?t:a(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:a(t),r=null==n?$:"function"==typeof n?n:l(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(K)},clone:function(t){return this.select(t?W:Q)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=rt(t+""),u=o.length;if(!(arguments.length<2)){for(c=n?ot:it,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var a,s=0,l=c.length;s<l;++s)for(r=0,a=c[s];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?st:at)(t,n))}};var pt=ht,dt=function(t){return"string"==typeof t?new ft([[document.querySelector(t)]],[document.documentElement]):new ft([[t]],lt)},vt=function(t){return dt(a(t).call(document.documentElement))},mt=0;function _t(){return new yt}function yt(){this._="@"+(++mt).toString(36)}yt.prototype=_t.prototype={constructor:yt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var gt=function(){for(var t,n=tt;t=n.sourceEvent;)n=t;return n},wt=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},bt=function(t){var n=gt();return n.changedTouches&&(n=n.changedTouches[0]),wt(t,n)},At=function(t){return"string"==typeof t?new ft([document.querySelectorAll(t)],[document.documentElement]):new ft([null==t?[]:t],lt)},xt=function(t,n,e){arguments.length<3&&(e=n,n=gt().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return wt(t,r);return null},St=function(t,n){null==n&&(n=gt().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=wt(t,n[e]);return i};e.d(n,"create",(function(){return vt})),e.d(n,"creator",(function(){return a})),e.d(n,"local",(function(){return _t})),e.d(n,"matcher",(function(){return p})),e.d(n,"mouse",(function(){return bt})),e.d(n,"namespace",(function(){return o})),e.d(n,"namespaces",(function(){return i})),e.d(n,"clientPoint",(function(){return wt})),e.d(n,"select",(function(){return dt})),e.d(n,"selectAll",(function(){return At})),e.d(n,"selection",(function(){return pt})),e.d(n,"selector",(function(){return l})),e.d(n,"selectorAll",(function(){return h})),e.d(n,"style",(function(){return j})),e.d(n,"touch",(function(){return xt})),e.d(n,"touches",(function(){return St})),e.d(n,"window",(function(){return E})),e.d(n,"event",(function(){return tt})),e.d(n,"customEvent",(function(){return ut}))}]);