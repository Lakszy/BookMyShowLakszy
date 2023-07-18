(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function ta(){this.H=!1;this.l=null;this.h=void 0;this.g=1;this.A=this.u=0;this.aa=this.i=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.P=function(a){this.h=a};
function va(a,b){a.i={Wb:b,hc:!0};a.g=a.u||a.A}
ta.prototype.return=function(a){this.i={return:a};this.g=this.A};
function w(a,b,c){a.g=c;return{value:b}}
ta.prototype.D=function(a){this.g=a};
function wa(a,b,c){a.u=b;void 0!=c&&(a.A=c)}
function xa(a){a.u=0;var b=a.i.Wb;a.i=null;return b}
function ya(a){var b=a.aa.splice(0)[0];(b=a.i=a.i||b)?b.hc?a.g=a.u||a.A:void 0!=b.D&&a.A<b.D?(a.g=b.D,a.i=null):a.g=a.A:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.l;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ea(a)}a.g.l=null;d.call(a.g,f);return Ea(a)}
function Ea(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.hc)throw b.Wb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ua(a.g);a.g.l?b=Da(a,a.g.l.next,b,a.g.P):(a.g.P(b),b=Ea(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Da(a,a.g.l["throw"],b,a.g.P):(va(a.g,b),b=Ea(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ha(new Ga(new za(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.u()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.u=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ac),reject:g(this.u)}};
b.prototype.Ac=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Dc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.zc(g):this.A(g)}};
b.prototype.zc=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.Ec(h,g):this.A(g)};
b.prototype.u=function(g){this.P(2,g)};
b.prototype.A=function(g){this.P(1,g)};
b.prototype.P=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Cc();this.aa()};
b.prototype.Cc=function(){var g=this;e(function(){if(g.kb()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.kb=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.aa=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.Dc=function(g){var h=this.l();g.qb(h.resolve,h.reject)};
b.prototype.Ec=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(x){try{l(r(x))}catch(y){m(y)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.qb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).qb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(x){return function(y){r[x]=y;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).qb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Rd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;function Cb(a){this.g=a}
Cb.prototype.toString=function(){return this.g.toString()};
var Db={},Eb=new Cb("about:invalid#zClosurez",Db);var Fb,Lb=B("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Fb=null!=Mb?Mb:!1;function Nb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=A.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Fb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function D(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Fb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:D("Trident")||D("MSIE")}
function Tb(){return Rb()?Qb("Chromium"):(D("Chrome")||D("CriOS"))&&!(Rb()?0:D("Edge"))||D("Silk")}
;function Ub(a){this.g=a}
Ub.prototype.toString=function(){return this.g.toString()};function Vb(a){Bb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;")));return a}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a){var b=a.match(Wb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function $b(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)$b(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ac(a){var b=[],c;for(c in a)$b(c,a[c],b);return b.join("&")}
var bc=/#|$/;function cc(a,b){var c=a.search(bc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function dc(a){A.setTimeout(function(){throw a;},0)}
;function ec(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
;function fc(a){fc[" "](a);return a}
fc[" "]=function(){};var gc=Rb()?!1:D("Opera"),hc=Sb(),ic=D("Edge"),jc=D("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),oc=-1!=Nb().toLowerCase().indexOf("webkit")&&!D("Edge");function pc(){var a=A.document;return a?a.documentMode:void 0}
var qc;a:{var rc="",sc=function(){var a=Nb();if(jc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ic)return/Edge\/([\d\.]+)/.exec(a);if(hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sc&&(rc=sc?sc[1]:"");if(hc){var tc=pc();if(null!=tc&&tc>parseFloat(rc)){qc=String(tc);break a}}qc=rc}var uc=qc,vc;if(A.document&&hc){var wc=pc();vc=wc?wc:parseInt(uc,10)||void 0}else vc=void 0;var xc=vc;var yc=ec()||D("iPod"),zc=D("iPad");!D("Android")||Tb();Tb();var Ac=D("Safari")&&!(Tb()||(Rb()?0:D("Coast"))||(Rb()?0:D("Opera"))||(Rb()?0:D("Edge"))||(Rb()?Qb("Microsoft Edge"):D("Edg/"))||(Rb()?Qb("Opera"):D("OPR"))||D("Firefox")||D("FxiOS")||D("Silk")||D("Android"))&&!(ec()||D("iPad")||D("iPod"));var Bc={},Cc=null;
function Dc(a,b){Ma(a);void 0===b&&(b=0);if(!Cc){Cc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Bc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Cc[h]&&(Cc[h]=g)}}}b=Bc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ec="undefined"!==typeof Uint8Array,Fc=!hc&&"function"===typeof btoa;function Gc(a){return Array.prototype.slice.call(a)}
;var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ia(Object.values({Fd:1,Ed:2,Dd:4,Hd:8,Gd:16,zd:32,Id:64,Bd:128,Ad:256,Cd:512})));var Ic=Hc?function(a,b){a[Hc]|=b}:function(a,b){void 0!==a.fa?a.fa|=b:Object.defineProperties(a,{fa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Jc(a){var b=F(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Gc(a)),Kc(a,b|1))}
var Lc=Hc?function(a,b){a[Hc]&=~b}:function(a,b){void 0!==a.fa&&(a.fa&=~b)},F=Hc?function(a){return a[Hc]|0}:function(a){return a.fa|0},G=Hc?function(a){return a[Hc]}:function(a){return a.fa},Kc=Hc?function(a,b){a[Hc]=b}:function(a,b){void 0!==a.fa?a.fa=b:Object.defineProperties(a,{fa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Nc(a,b){Object.isFrozen(a)&&(a=Gc(a));Kc(a,b);return a}
function Oc(a){Ic(a,1);return a}
function Pc(a,b){Kc(b,(a|0)&-51)}
function Qc(a,b){Kc(b,(a|18)&-41)}
function Rc(a){a=a>>10&1023;return 0===a?536870912:a}
;var Sc={};function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc,Wc=[];Kc(Wc,23);Vc=Object.freeze(Wc);function Xc(a){if(a&2)throw Error();}
;function Yc(a){return a.displayName||a.name||"unknown type name"}
function Zc(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+La(a)+": "+a);return!!a}
function $c(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function dd(a){return null==a||"string"===typeof a?a:void 0}
function ed(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Yc(b)+" but got "+(a&&Yc(a.constructor)));return a}
function fd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jb===Sc)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Kc(a,e);return new b(a)}}
;function gd(a,b){a=a.o;return hd(a,G(a),b)}
function hd(a,b,c,d){if(-1===c)return null;if(c>=Rc(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+((b>>8&1)-1);if(b<e)return a[b]}}
function H(a,b,c){var d=a.o,e=G(d);Xc(e);id(d,e,b,c);return a}
function id(a,b,c,d,e){Tc(d);var f=Rc(b);if(c>=f||e){e=b;if(b&128)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>8&1)-1)]={};e|=128}f[c]=d;e&=-513;e!==b&&Kc(a,e)}else a[c+((b>>8&1)-1)]=d,b&128&&(d=a[a.length-1],c in d&&delete d[c]),b&512&&Kc(a,b&-513)}
function jd(a,b,c,d,e){var f=b&2,g=hd(a,b,c,e);Array.isArray(g)||(g=Vc);var h=F(g);h&1||Oc(g);if(f)h&2||Ic(g,18),d&1||Object.freeze(g);else{f=!(d&2);var k=h&2;d&1||!k?f&&h&16&&!k&&Lc(g,16):(g=Oc(Gc(g)),id(a,b,c,g,e))}return g}
function kd(a,b,c,d){a=a.o;var e=G(a);Xc(e);(c=ld(a,e,c))&&c!==b&&null!=d&&id(a,e,c);id(a,e,b,d)}
function md(a,b,c){a=a.o;return ld(a,G(a),b)===c?c:-1}
function ld(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=hd(a,b,f)&&(0!==d&&id(a,b,d),d=f)}return d}
function nd(a,b,c){var d=void 0===d?!1:d;var e=a.o;var f=G(e),g=hd(e,f,c,d);b=fd(g,b,f);b!==g&&null!=b&&id(e,f,c,b,d);e=b;if(null==e)return e;a=a.o;f=G(a);if(!(f&2)){g=e;b=g.o;var h=G(b);h&2&&(b=od(g,b,h,!1),b.g=g,Ic(b.o,512),g=b);g!==e&&(e=g,id(a,f,c,e,d))}return e}
function I(a,b,c,d){null!=d?ed(d,b):d=void 0;return H(a,c,d)}
function pd(a,b,c,d,e){null!=e?ed(e,b):e=void 0;kd(a,c,d,e)}
function qd(a,b,c,d){a=a.o;var e=G(a);Xc(e);var f=!!(e&2),g=jd(a,e,b,1);if(g!==Vc&&F(g)&4){if(!f){f=Object.isFrozen(g);var h=F(g);var k=h&-19;f&&(g=Gc(g),h=0,id(a,e,b,g));h!==k&&Kc(g,k)}b=g}else{f=g;h=!!(e&2);k=!!(F(f)&2);g=f;!h&&k&&(f=Gc(f));h=e|(k?2:0);k=k||void 0;for(var l=0,m=0;l<f.length;l++){var n=fd(f[l],c,h);void 0!==n&&(k=k||G(n.o)&2,f[m++]=n)}m<l&&(f.length=m);k=!k;h=F(f);l=h|5;k=k?l|8:l&-9;h!=k&&(f=Nc(f,k));g!==f&&id(a,e,b,f);b=f}c=null!=d?ed(d,c):new c;b.push(c);F(c.o)&2&&Lc(b,8);e&512&&
Kc(a,e&-513)}
function J(a,b,c){return H(a,b,$c(c))}
function rd(a,b){var c=void 0===c?"":c;a=dd(gd(a,b));return null!=a?a:c}
function sd(a,b){b=md(a,td,b);return dd(gd(a,b))}
;var ud;function vd(a,b){F(b);ud=b;a=new a(b);ud=void 0;return a}
function K(a,b,c){null==a&&(a=ud);ud=void 0;if(null==a){var d=48;c?(a=[c],d|=256):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=F(a);if(d&32)return a;d|=32;if(c&&(d|=256,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Tc(g)){d|=128;b=(d>>8&1)-1;e=f-b;1024<=e&&(wd(c,b,g),e=1023);d=d&-1047553|(e&1023)<<10;break a}}b&&(g=(d>>8&1)-1,b=Math.max(b,e-g),1024<b&&(wd(c,g,{}),d|=128,b=1023),d=d&-1047553|(b&1023)<<10)}}Kc(a,d);return a}
function wd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function xd(a,b){return yd(b)}
function yd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Ec&&null!=a&&a instanceof Uint8Array){if(Fc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Dc(a);return a}}return a}
;function zd(a,b,c){a=Gc(a);var d=a.length,e=b&128?a[d-1]:void 0;d+=e?-1:0;for(b=b&256?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ad(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:Bd(a,b,c,void 0!==d,e,f);else if(Tc(a)){var g={},h;for(h in a)g[h]=Ad(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Bd(a,b,c,d,e,f){var g=d||c?F(a):0;d=d?!!(g&16):void 0;a=Gc(a);for(var h=0;h<a.length;h++)a[h]=Ad(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Cd(a){return a.Jb===Sc?a.toJSON():yd(a)}
;function Dd(a,b,c){c=void 0===c?Qc:c;if(null!=a){if(Ec&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kc(a,d|18),a;a=Bd(a,Dd,d&4?Qc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Jb===Sc&&(b=a.o,c=G(b),a=c&2?a:od(a,b,c,!0));return a}}
function od(a,b,c,d){var e=d||c&2?Qc:Pc,f=!!(c&16);b=zd(b,c,function(g){return Dd(g,f,e)});
Ic(b,16|(d?2:0));return vd(a.constructor,b)}
;function L(a,b,c){this.o=K(a,b,c)}
L.prototype.toJSON=function(){if(Uc)var a=Ed(this,this.o,!1);else a=Bd(this.o,Cd,void 0,void 0,!1,!1),a=Ed(this,a,!0);return a};
function Fd(a){Uc=!0;try{return JSON.stringify(a.toJSON(),xd)}finally{Uc=!1}}
L.prototype.clone=function(){var a=this.o;return od(this,a,G(a),!1)};
L.prototype.Jb=Sc;L.prototype.toString=function(){return Ed(this,this.o,!1).toString()};
function Ed(a,b,c){var d=a.constructor.la,e=G(c?a.o:b),f=Rc(e);e=!1;if(d){if(!c){b=Gc(b);var g;if(b.length&&Tc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=G(a.o);a=Rc(f);f=(f>>8&1)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Vc:Oc([]):c&&m!==Vc&&Jc(m)}else h||(m=void 0,g.length&&Tc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Vc:Oc([]):c&&m!==Vc&&Jc(m)}d=b.length;if(!d)return b;var n;
if(Tc(h=b[d-1])){a:{var r=h;g={};c=!1;for(var p in r)a=r[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){r=g;break a}r=null}}r!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!n&&!y)return b;var E;e?E=b:E=Array.prototype.slice.call(b,0,d);b=E;e&&(b.length=d);r&&b.push(r);return b}
;var Gd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function Hd(a,b){this.width=a;this.height=b}
q=Hd.prototype;q.clone=function(){return new Hd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Id(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Jd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Kd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ld(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Md[c])c=Md[c];else{c=String(c);if(!Md[c]){var f=/function\s+([^\(]+)/m.exec(c);Md[c]=f?f[1]:"[Anonymous]"}c=Md[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ld(a,b){b||(b={});b[Nd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Nd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ld(a,b));return c}
function Nd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Md={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Od;try{new URL("s://g"),Od=!0}catch(a){Od=!1}var Pd=Od;function Qd(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Cb)b instanceof Cb&&b.constructor===Cb?b=b.g:(La(b),b="type_error:SafeUrl");else{b:if(Pd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Rd(a){this.Zc=a}
function Sd(a){return new Rd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Td=[Sd("data"),Sd("http"),Sd("https"),Sd("mailto"),Sd("ftp"),new Rd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ud(a,b){b=void 0===b?Td:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Rd&&d.Zc(a))return new Cb(a,Db)}}
function Vd(a){var b=void 0===b?Td:b;return Ud(a,b)||Eb}
;function Wd(a){var b=Xd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Yd(){var a=[];Wd(function(b){a.push(b)});
return a}
var Xd={od:"allow-forms",pd:"allow-modals",qd:"allow-orientation-lock",rd:"allow-pointer-lock",sd:"allow-popups",td:"allow-popups-to-escape-sandbox",ud:"allow-presentation",vd:"allow-same-origin",wd:"allow-scripts",xd:"allow-top-navigation",yd:"allow-top-navigation-by-user-activation"},Zd=bb(function(){return Yd()});
function $d(){var a=ae(),b={};db(Zd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ae(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var be=(new Date).getTime();function ce(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var de="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(de);function ee(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],y=e[2],E=e[3],P=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var U=E^x&(y^E);var R=1518500249}else U=x^y^E,R=1859775393;else 60>p?(U=x&y|E&(x|y),R=2400959708):(U=x^y^E,R=3395469782);U=((n<<5|n>>>27)&4294967295)+U+P+R+r[p]&4294967295;P=E;E=y;y=(x<<30|x>>>2)&4294967295;x=n;n=U}e[0]=e[0]+n&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+P&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,y=n.length;x<y;++x)p.push(n.charCodeAt(x));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var x=24;0<=x;x-=8)n[r++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Kc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function fe(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,ge(ce(d),a,c||null)].join(" "):null}
function ge(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),he(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=he(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function he(a){var b=ee();b.update(a);return b.Kc().toLowerCase()}
;var ie={};function je(a){this.g=a||{cookie:""}}
q=je.prototype;q.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Gb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Yd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Gb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Gb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ke=new je("undefined"==typeof document?null:document);function le(a){return!!ie.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function me(a,b,c,d){(a=A[a])||"undefined"===typeof document||(a=(new je(document)).get(b));return a?fe(a,c,d):null}
function ne(a){var b=void 0===b?!1:b;var c=ce(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;le(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new je(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");le(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
A.__SAPISID:A.__APISID,e||"undefined"===typeof document||(e=new je(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?fe(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&le(b)&&((b=me("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=me("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var oe="undefined"!==typeof TextEncoder?new TextEncoder:null,pe=oe?function(a){return oe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ue(){this.i=this.i;this.u=this.u}
ue.prototype.i=!1;ue.prototype.dispose=function(){this.i||(this.i=!0,this.Ea())};
ue.prototype.Ea=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function ve(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
ve.prototype.stopPropagation=function(){this.i=!0};
ve.prototype.preventDefault=function(){this.defaultPrevented=!0};var we=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
A.addEventListener("test",c,b);A.removeEventListener("test",c,b)}catch(d){}return a}();function xe(a,b){ve.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(xe,ve);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(jc){a:{try{fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&xe.ma.preventDefault.call(this)};
xe.prototype.stopPropagation=function(){xe.ma.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.ma.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ub=e;this.key=++Ae;this.hb=this.pb=!1}
function Ce(a){a.hb=!0;a.listener=null;a.proxy=null;a.src=null;a.ub=null}
;function De(a){this.src=a;this.listeners={};this.g=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.pb=!1)):(b=new Be(b,this.src,f,!!d,e),b.pb=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.hb&&f.listener==b&&f.capture==!!c&&f.ub==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.Ga(b,c,Na(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)we||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.g.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.g.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.hb){var b=a.src;if(b&&b[ze])Fe(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.g&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.hb)a=!0;else{b=new xe(b,this);var c=a.listener,d=a.ub||a.src;a.pb&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){ue.call(this);this.g=new De(this);this.kb=this;this.P=null}
Va(Ue,ue);Ue.prototype[ze]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.P;if(c){var d=[];for(var e=1;c;c=c.P)d.push(c),++e}a=a.kb;c=b.type||b;"string"===typeof b?b=new ve(b,a):b instanceof ve?b.target=b.target||a:(e=b,b=new ve(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=We(g,c,!0,b)&&e}b.i||(g=b.g=a,e=We(g,c,!0,b)&&e,b.i||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.Ea=function(){Ue.ma.Ea.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.g--}}this.P=null};
Ue.prototype.Ga=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.hb&&g.capture==c){var h=g.listener,k=g.ub||g.src;g.pb&&Fe(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a){Ue.call(this);var b=this;this.aa=this.l=0;this.ga=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
Na:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.A=function(){return z(function(e){return w(e,Ye(b),0)})};
window.addEventListener("offline",this.A);window.addEventListener("online",this.A);this.aa||Ze(this)}
v(Xe,Ue);function $e(){var a=af;Xe.g||(Xe.g=new Xe(a));return Xe.g}
Xe.prototype.dispose=function(){window.removeEventListener("offline",this.A);window.removeEventListener("online",this.A);this.ga.Na(this.aa);delete Xe.g};
Xe.prototype.ba=function(){return this.h};
function Ze(a){a.aa=a.ga.oa(function(){var b;return z(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.D(3):w(c,Ye(a),3):w(c,Ye(a),3);Ze(a);c.g=0})},3E4)}
function Ye(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.ga.oa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.aa=[h.i];h.u=0;h.A=0;a.H=void 0;a.l&&(a.ga.Na(a.l),a.l=0);g!==a.h&&(a.h=g,a.h?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.D(3)}})})}
;function bf(){this.data_=[];this.g=-1}
bf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
bf.prototype.get=function(a){return!!this.data_[a]};
function cf(a){-1===a.g&&(a.g=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function df(a){this.o=K(a)}
v(df,L);function ef(a){this.o=K(a)}
v(ef,L);function ff(a,b){return J(a,2,b)}
function gf(a,b){return J(a,3,b)}
function hf(a,b){return J(a,4,b)}
function jf(a,b){return J(a,5,b)}
function kf(a,b){return J(a,9,b)}
function lf(a,b){var c=a.o,d=G(c);Xc(d);if(null!=b){for(var e=!!b.length,f=0;f<b.length;f++){var g=b[f];ed(g,df);e=e&&!(F(g.o)&2)}f=F(b);g=f|1;g=(e?g|8:g&-9)|4;g!=f&&(b=Nc(b,g))}null==b&&(b=void 0);id(c,d,10,b);return a}
function mf(a,b){return H(a,11,null==b?b:Zc(b))}
function nf(a,b){return J(a,1,b)}
function of(a,b){return H(a,7,null==b?b:Zc(b))}
ef.la=[10,6];var pf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function qf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function rf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function sf(){var a=window;if(!rf(a))return null;var b=qf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(pf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function tf(a){var b;return mf(lf(jf(ff(nf(hf(of(kf(gf(new ef,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new df;d=J(d,1,c.brand);return J(d,2,c.version)}))||[]),a.wow64||!1)}
function uf(){var a,b;return null!=(b=null==(a=sf())?void 0:a.then(function(c){return tf(c)}))?b:null}
;function vf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
vf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function wf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var xf;function yf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Id();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Tb;c.Tb=null;e()}};
return function(e){d.next={Tb:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function zf(){this.h=this.g=null}
zf.prototype.add=function(a,b){var c=Af.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
zf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Af=new vf(function(){return new Bf},function(a){return a.reset()});
function Bf(){this.next=this.scope=this.g=null}
Bf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Bf.prototype.reset=function(){this.next=this.scope=this.g=null};var Cf,Df=!1,Ef=new zf;function Ff(a,b){Cf||Gf();Df||(Cf(),Df=!0);Ef.add(a,b)}
function Gf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Cf=function(){a.then(Hf)}}else Cf=function(){var b=Hf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&(Rb()||!D("Edge"))&&A.Window.prototype.setImmediate==A.setImmediate?(xf||(xf=yf()),xf(b)):A.setImmediate(b)}}
function Hf(){for(var a;a=Ef.remove();){try{a.g.call(a.scope)}catch(b){dc(b)}wf(Af,a)}Df=!1}
;function If(a,b){this.g=a[A.Symbol.iterator]();this.h=b}
If.prototype[Symbol.iterator]=function(){return this};
If.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Jf(a,b){return new If(a,b)}
;function Kf(){this.blockSize=-1}
;function Lf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.u=[];this.A=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Va(Lf,Kf);Lf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Mf(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Lf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.h;d<b;){if(0==f)for(;d<=c;)Mf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}this.h=f;this.l+=b}};
Lf.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Mf(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Nf(){}
Nf.prototype.next=function(){return Of};
var Of={done:!0,value:void 0};function Pf(a){return{value:a,done:!1}}
Nf.prototype.ha=function(){return this};function Qf(a){if(a instanceof Rf||a instanceof Sf||a instanceof Tf)return a;if("function"==typeof a.next)return new Rf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Rf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ha)return new Rf(function(){return a.ha()});
throw Error("Not an iterator or iterable.");}
function Rf(a){this.h=a}
Rf.prototype.ha=function(){return new Sf(this.h())};
Rf.prototype[Symbol.iterator]=function(){return new Tf(this.h())};
Rf.prototype.g=function(){return new Tf(this.h())};
function Sf(a){this.h=a}
v(Sf,Nf);Sf.prototype.next=function(){return this.h.next()};
Sf.prototype[Symbol.iterator]=function(){return new Tf(this.h)};
Sf.prototype.g=function(){return new Tf(this.h)};
function Tf(a){Rf.call(this,function(){return a});
this.i=a}
v(Tf,Rf);Tf.prototype.next=function(){return this.i.next()};function Uf(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Uf)for(c=Vf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Vf(a){Wf(a);return a.g.concat()}
q=Uf.prototype;q.has=function(a){return Xf(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Yf;Wf(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Yf(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Xf(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Wf(this),!0):!1};
function Wf(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Xf(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Xf(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return Xf(this.h,a)?this.h[a]:b};
q.set=function(a,b){Xf(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Vf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Uf(this)};
q.keys=function(){return Qf(this.ha(!0)).g()};
q.values=function(){return Qf(this.ha(!1)).g()};
q.entries=function(){var a=this;return Jf(this.keys(),function(b){return[b,a.get(b)]})};
q.ha=function(a){Wf(this);var b=0,c=this.i,d=this,e=new Nf;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Of;var f=d.g[b++];return Pf(a?f:d.h[f])};
return e};
function Xf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Zf=A.JSON.stringify;function $f(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ag(a){this.g=0;this.H=void 0;this.l=this.h=this.i=null;this.u=this.A=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
cg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var dg=new vf(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.i=a;d.h=b;d.context=c;return d}
ag.prototype.then=function(a,b,c){return fg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;ag.prototype.cancel=function(a){if(0==this.g){var b=new gg(a);Ff(function(){hg(this,b)},this)}};
function hg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?hg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ig(c),jg(c,e,3,b)))}a.i=null}else bg(a,3,b)}
function kg(a,b){a.h||2!=a.g&&3!=a.g||lg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function fg(a,b,c,d){var e=eg(null,null,null);e.g=new ag(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof gg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;kg(a,e);return e.g}
ag.prototype.aa=function(a){this.g=0;bg(this,2,a)};
ag.prototype.kb=function(a){this.g=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.aa,f=a.kb;if(d instanceof ag){kg(d,eg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){mg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,lg(a),3!=b||c instanceof gg||ng(a,c))}}
function mg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function lg(a){a.A||(a.A=!0,Ff(a.P,a))}
function ig(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
ag.prototype.P=function(){for(var a;a=ig(this);)jg(this,a,this.g,this.H);this.A=!1};
function jg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.u;a=a.i)a.u=!1;if(b.g)b.g.i=null,og(b,c,d);else try{b.l?b.i.call(b.context):og(b,c,d)}catch(e){pg.call(null,e)}wf(dg,b)}
function og(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ng(a,b){a.u=!0;Ff(function(){a.u&&pg.call(null,b)})}
var pg=dc;function gg(a){Xa.call(this,a)}
Va(gg,Xa);gg.prototype.name="cancel";function M(a){ue.call(this);this.H=1;this.l=[];this.A=0;this.g=[];this.h={};this.P=!!a}
Va(M,ue);q=M.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.H;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.H=e+3;d.push(e);return e};
function qg(a,b,c){var d=rg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.jb(a)}}
q.jb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.A?(this.l.push(a),this.g[a+1]=function(){}):(c&&fb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.Wa=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.P)for(e=0;e<c.length;e++){var g=c[e];sg(this.g[g+1],this.g[g+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.A--,0<this.l.length&&0==this.A)for(;c=this.l.pop();)this.jb(c)}}return 0!=e}return!1};
function sg(a,b,c){Ff(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.jb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.Ea=function(){M.ma.Ea.call(this);this.clear();this.l.length=0};function tg(a){this.g=a}
tg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Zf(b))};
tg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
tg.prototype.remove=function(a){this.g.remove(a)};function ug(a){this.g=a}
Va(ug,tg);function vg(a){this.data=a}
function wg(a){return void 0===a||a instanceof vg?a:new vg(a)}
ug.prototype.set=function(a,b){ug.ma.set.call(this,a,wg(b))};
ug.prototype.h=function(a){a=ug.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ug.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function xg(a){this.g=a}
Va(xg,ug);xg.prototype.set=function(a,b,c){if(b=wg(b)){if(c){if(c<Date.now()){xg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}xg.ma.set.call(this,a,b)};
xg.prototype.h=function(a){var b=xg.ma.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())xg.prototype.remove.call(this,a);else return b}};function yg(){}
;function zg(){}
Va(zg,yg);zg.prototype[Symbol.iterator]=function(){return Qf(this.ha(!0)).g()};
zg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ag(a){this.g=a}
Va(Ag,zg);q=Ag.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ha=function(a){var b=0,c=this.g,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c.key(b++);if(a)return Pf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function Bg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Bg,Ag);function Cg(a,b){this.h=a;this.g=null;var c;if(c=hc)c=!(9<=Number(xc));if(c){Dg||(Dg=new Uf);this.g=Dg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Dg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Cg,zg);var Eg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Dg=null;function Fg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Eg[b]})}
q=Cg.prototype;q.set=function(a,b){this.g.setAttribute(Fg(a),b);Gg(this)};
q.get=function(a){a=this.g.getAttribute(Fg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(Fg(a));Gg(this)};
q.ha=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c[b++];if(a)return Pf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Gg(this)};
function Gg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Hg(a,b){this.h=a;this.g=b+"::"}
Va(Hg,zg);Hg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Hg.prototype.get=function(a){return this.h.get(this.g+a)};
Hg.prototype.remove=function(a){this.h.remove(this.g+a)};
Hg.prototype.ha=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Nf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Pf(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Ig="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Nb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Jg={Ma:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Kg={Ma:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){return[].concat.apply([],a)}};
O.hd=function(){Ig?(O.La=Uint8Array,O.na=Uint16Array,O.Bc=Int32Array,O.assign(O,Jg)):(O.La=Array,O.na=Array,O.Bc=Array,O.assign(O,Kg))};
O.hd();var Lg=!0;try{new Uint8Array(1)}catch(a){Lg=!1}
function Mg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.La(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Ng={};Ng=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Og={},Pg,Qg=[],Rg=0;256>Rg;Rg++){Pg=Rg;for(var nh=0;8>nh;nh++)Pg=Pg&1?3988292384^Pg>>>1:Pg>>>1;Qg[Rg]=Pg}Og=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Qg[(a^b[d])&255];return a^-1};var oh={};oh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ph(a){for(var b=a.length;0<=--b;)a[b]=0}
var qh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],rh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],sh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],th=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],uh=Array(576);ph(uh);var vh=Array(60);ph(vh);var wh=Array(512);ph(wh);var xh=Array(256);ph(xh);var yh=Array(29);ph(yh);var zh=Array(30);ph(zh);function Ah(a,b,c,d,e){this.uc=a;this.Oc=b;this.Nc=c;this.Lc=d;this.dd=e;this.ac=a&&a.length}
var Bh,Ch,Dh;function Eh(a,b){this.Vb=a;this.Ta=0;this.Aa=b}
function Fh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function Gh(a,b,c){a.N>16-c?(a.U|=b<<a.N&65535,Fh(a,a.U),a.U=b>>16-a.N,a.N+=c-16):(a.U|=b<<a.N&65535,a.N+=c)}
function Hh(a,b,c){Gh(a,c[2*b],c[2*b+1])}
function Ih(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Jh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ih(d[e]++,e))}
function Kh(a){var b;for(b=0;286>b;b++)a.W[2*b]=0;for(b=0;30>b;b++)a.Fa[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.W[512]=1;a.ta=a.Xa=0;a.ca=a.matches=0}
function Lh(a){8<a.N?Fh(a,a.U):0<a.N&&(a.K[a.pending++]=a.U);a.U=0;a.N=0}
function Mh(a,b,c){Lh(a);Fh(a,c);Fh(a,~c);O.Ma(a.K,a.window,b,c,a.pending);a.pending+=c}
function Nh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Oh(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.sa;){e<a.sa&&Nh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Nh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Ph(a,b,c){var d=0;if(0!==a.ca){do{var e=a.K[a.ab+2*d]<<8|a.K[a.ab+2*d+1];var f=a.K[a.Fb+d];d++;if(0===e)Hh(a,f,b);else{var g=xh[f];Hh(a,g+256+1,b);var h=qh[g];0!==h&&(f-=yh[g],Gh(a,f,h));e--;g=256>e?wh[e]:wh[256+(e>>>7)];Hh(a,g,c);h=rh[g];0!==h&&(e-=zh[g],Gh(a,e,h))}}while(d<a.ca)}Hh(a,256,b)}
function Qh(a,b){var c=b.Vb,d=b.Aa.uc,e=b.Aa.ac,f=b.Aa.Lc,g,h=-1;a.sa=0;a.Qa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.sa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.sa;){var k=a.L[++a.sa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.ta--;e&&(a.Xa-=d[2*k+1])}b.Ta=h;for(g=a.sa>>1;1<=g;g--)Oh(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.sa--],Oh(a,c,1),d=a.L[1],a.L[--a.Qa]=g,a.L[--a.Qa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Oh(a,c,1);while(2<=a.sa);a.L[--a.Qa]=
a.L[1];g=b.Vb;k=b.Ta;d=b.Aa.uc;e=b.Aa.ac;f=b.Aa.Oc;var l=b.Aa.Nc,m=b.Aa.dd,n,r=0;for(n=0;15>=n;n++)a.pa[n]=0;g[2*a.L[a.Qa]+1]=0;for(b=a.Qa+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.pa[n]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.ta+=y*(n+x);e&&(a.Xa+=y*(d[2*p+1]+x))}}if(0!==r){do{for(n=m-1;0===a.pa[n];)n--;a.pa[n]--;a.pa[n+1]+=2;a.pa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.pa[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.ta+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Jh(c,h,a.pa)}
function Rh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Sh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Hh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(Hh(a,l,a.R),g--),Hh(a,16,a.R),Gh(a,g-3,2)):10>=g?(Hh(a,17,a.R),Gh(a,g-3,3)):(Hh(a,18,a.R),Gh(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Th(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.W[2*c])return 0;if(0!==a.W[18]||0!==a.W[20]||0!==a.W[26])return 1;for(c=32;256>c;c++)if(0!==a.W[2*c])return 1;return 0}
var Uh=!1;function Vh(a,b,c){a.K[a.ab+2*a.ca]=b>>>8&255;a.K[a.ab+2*a.ca+1]=b&255;a.K[a.Fb+a.ca]=c&255;a.ca++;0===b?a.W[2*c]++:(a.matches++,b--,a.W[2*(xh[c]+256+1)]++,a.Fa[2*(256>b?wh[b]:wh[256+(b>>>7)])]++);return a.ca===a.eb-1}
;function Wh(a,b){a.msg=oh[b];return b}
function Xh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Yh(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(O.Ma(a.fb,b.K,b.gb,c,a.Ua),a.Ua+=c,b.gb+=c,a.Ob+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.gb=0))}
function Q(a,b){var c=0<=a.Y?a.Y:-1,d=a.j-a.Y,e=0;if(0<a.level){2===a.B.Cb&&(a.B.Cb=Th(a));Qh(a,a.wb);Qh(a,a.sb);Rh(a,a.W,a.wb.Ta);Rh(a,a.Fa,a.sb.Ta);Qh(a,a.Rb);for(e=18;3<=e&&0===a.R[2*th[e]+1];e--);a.ta+=3*(e+1)+14;var f=a.ta+3+7>>>3;var g=a.Xa+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Gh(a,b?1:0,3),Mh(a,c,d);else if(4===a.strategy||g===f)Gh(a,2+(b?1:0),3),Ph(a,uh,vh);else{Gh(a,4+(b?1:0),3);c=a.wb.Ta+1;d=a.sb.Ta+1;e+=1;Gh(a,c-257,5);Gh(a,d-1,5);Gh(a,e-4,4);for(f=0;f<e;f++)Gh(a,a.R[2*th[f]+
1],3);Sh(a,a.W,c-1);Sh(a,a.Fa,d-1);Ph(a,a.W,a.Fa)}Kh(a);b&&Lh(a);a.Y=a.j;Yh(a.B)}
function S(a,b){a.K[a.pending++]=b}
function Zh(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function $h(a,b){var c=a.ic,d=a.j,e=a.Z,f=a.kc,g=a.j>a.S-262?a.j-(a.S-262):0,h=a.window,k=a.Ba,l=a.ka,m=a.j+258,n=h[d+e-1],r=h[d+e];a.Z>=a.Zb&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Sa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function ai(a){var b=a.S,c;do{var d=a.xc-a.m-a.j;if(a.j>=b+(b-262)){O.Ma(a.window,a.window,b,b,0);a.Sa-=b;a.j-=b;a.Y-=b;var e=c=a.vb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.ka[--e],a.ka[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.T)break;e=a.B;c=a.window;f=a.j+a.m;var g=e.T;g>d&&(g=d);0===g?c=0:(e.T-=g,O.Ma(c,e.input,e.Ja,g,f),1===e.state.wrap?e.v=Ng(e.v,c,g,f):2===e.state.wrap&&(e.v=Og(e.v,c,g,f)),e.Ja+=g,e.Ka+=g,c=g);a.m+=c;if(3<=a.m+a.X)for(d=a.j-a.X,a.C=a.window[d],a.C=
(a.C<<a.ra^a.window[d+1])&a.qa;a.X&&!(a.C=(a.C<<a.ra^a.window[d+3-1])&a.qa,a.ka[d&a.Ba]=a.head[a.C],a.head[a.C]=d,d++,a.X--,3>a.m+a.X););}while(262>a.m&&0!==a.B.T)}
function bi(a,b){for(var c;;){if(262>a.m){ai(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.C=(a.C<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.C],a.head[a.C]=a.j);0!==c&&a.j-c<=a.S-262&&(a.G=$h(a,c));if(3<=a.G)if(c=Vh(a,a.j-a.Sa,a.G-3),a.m-=a.G,a.G<=a.Hb&&3<=a.m){a.G--;do a.j++,a.C=(a.C<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.C],a.head[a.C]=a.j;while(0!==--a.G);a.j++}else a.j+=a.G,a.G=0,a.C=a.window[a.j],a.C=(a.C<<a.ra^a.window[a.j+1])&a.qa;else c=Vh(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.X=2>a.j?a.j:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ca&&(Q(a,!1),0===a.B.F)?1:2}
function ci(a,b){for(var c,d;;){if(262>a.m){ai(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.C=(a.C<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.C],a.head[a.C]=a.j);a.Z=a.G;a.nc=a.Sa;a.G=2;0!==c&&a.Z<a.Hb&&a.j-c<=a.S-262&&(a.G=$h(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.j-a.Sa)&&(a.G=2));if(3<=a.Z&&a.G<=a.Z){d=a.j+a.m-3;c=Vh(a,a.j-1-a.nc,a.Z-3);a.m-=a.Z-1;a.Z-=2;do++a.j<=d&&(a.C=(a.C<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.C],a.head[a.C]=a.j);while(0!==
--a.Z);a.Ha=0;a.G=2;a.j++;if(c&&(Q(a,!1),0===a.B.F))return 1}else if(a.Ha){if((c=Vh(a,0,a.window[a.j-1]))&&Q(a,!1),a.j++,a.m--,0===a.B.F)return 1}else a.Ha=1,a.j++,a.m--}a.Ha&&(Vh(a,0,a.window[a.j-1]),a.Ha=0);a.X=2>a.j?a.j:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ca&&(Q(a,!1),0===a.B.F)?1:2}
function di(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){ai(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=Vh(a,1,a.G-3),a.m-=a.G,a.j+=a.G,a.G=0):(c=Vh(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(Q(a,!1),0===a.B.F))return 1}a.X=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ca&&
(Q(a,!1),0===a.B.F)?1:2}
function ei(a,b){for(var c;;){if(0===a.m&&(ai(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=Vh(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.X=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ca&&(Q(a,!1),0===a.B.F)?1:2}
function fi(a,b,c,d,e){this.Rc=a;this.cd=b;this.fd=c;this.bd=d;this.Pc=e}
var gi;gi=[new fi(0,0,0,0,function(a,b){var c=65535;for(c>a.da-5&&(c=a.da-5);;){if(1>=a.m){ai(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Y+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,Q(a,!1),0===a.B.F)return 1;if(a.j-a.Y>=a.S-262&&(Q(a,!1),0===a.B.F))return 1}a.X=0;if(4===b)return Q(a,!0),0===a.B.F?3:4;a.j>a.Y&&Q(a,!1);return 1}),
new fi(4,4,8,4,bi),new fi(4,5,16,8,bi),new fi(4,6,32,32,bi),new fi(4,4,16,16,ci),new fi(8,16,32,32,ci),new fi(8,16,128,128,ci),new fi(8,32,128,256,ci),new fi(32,128,258,1024,ci),new fi(32,258,258,4096,ci)];
function hi(){this.B=null;this.status=0;this.K=null;this.wrap=this.pending=this.gb=this.da=0;this.s=null;this.ea=0;this.method=8;this.Ra=-1;this.Ba=this.Pb=this.S=0;this.window=null;this.xc=0;this.head=this.ka=null;this.kc=this.Zb=this.strategy=this.level=this.Hb=this.ic=this.Z=this.m=this.Sa=this.j=this.Ha=this.nc=this.G=this.Y=this.ra=this.qa=this.Db=this.vb=this.C=0;this.W=new O.na(1146);this.Fa=new O.na(122);this.R=new O.na(78);Xh(this.W);Xh(this.Fa);Xh(this.R);this.Rb=this.sb=this.wb=null;this.pa=
new O.na(16);this.L=new O.na(573);Xh(this.L);this.Qa=this.sa=0;this.depth=new O.na(573);Xh(this.depth);this.N=this.U=this.X=this.matches=this.Xa=this.ta=this.ab=this.ca=this.eb=this.Fb=0}
function ii(a,b){if(!a||!a.state||5<b||0>b)return a?Wh(a,-2):-2;var c=a.state;if(!a.fb||!a.input&&0!==a.T||666===c.status&&4!==b)return Wh(a,0===a.F?-5:-2);c.B=a;var d=c.Ra;c.Ra=b;if(42===c.status)if(2===c.wrap)a.v=0,S(c,31),S(c,139),S(c,8),c.s?(S(c,(c.s.text?1:0)+(c.s.ya?2:0)+(c.s.xa?4:0)+(c.s.name?8:0)+(c.s.comment?16:0)),S(c,c.s.time&255),S(c,c.s.time>>8&255),S(c,c.s.time>>16&255),S(c,c.s.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.s.Xd&255),c.s.xa&&c.s.xa.length&&(S(c,
c.s.xa.length&255),S(c,c.s.xa.length>>8&255)),c.s.ya&&(a.v=Og(a.v,c.K,c.pending,0)),c.ea=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.Pb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Zh(c,e+(31-e%31));0!==c.j&&(Zh(c,a.v>>>16),Zh(c,a.v&65535));a.v=1}if(69===c.status)if(c.s.xa){for(e=c.pending;c.ea<(c.s.xa.length&65535)&&(c.pending!==c.da||(c.s.ya&&c.pending>
e&&(a.v=Og(a.v,c.K,c.pending-e,e)),Yh(a),e=c.pending,c.pending!==c.da));)S(c,c.s.xa[c.ea]&255),c.ea++;c.s.ya&&c.pending>e&&(a.v=Og(a.v,c.K,c.pending-e,e));c.ea===c.s.xa.length&&(c.ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.s.name){e=c.pending;do{if(c.pending===c.da&&(c.s.ya&&c.pending>e&&(a.v=Og(a.v,c.K,c.pending-e,e)),Yh(a),e=c.pending,c.pending===c.da)){var f=1;break}f=c.ea<c.s.name.length?c.s.name.charCodeAt(c.ea++)&255:0;S(c,f)}while(0!==f);c.s.ya&&c.pending>e&&(a.v=Og(a.v,c.K,c.pending-
e,e));0===f&&(c.ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.s.comment){e=c.pending;do{if(c.pending===c.da&&(c.s.ya&&c.pending>e&&(a.v=Og(a.v,c.K,c.pending-e,e)),Yh(a),e=c.pending,c.pending===c.da)){f=1;break}f=c.ea<c.s.comment.length?c.s.comment.charCodeAt(c.ea++)&255:0;S(c,f)}while(0!==f);c.s.ya&&c.pending>e&&(a.v=Og(a.v,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.s.ya?(c.pending+2>c.da&&Yh(a),c.pending+2<=c.da&&(S(c,a.v&255),S(c,a.v>>8&255),a.v=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Yh(a),0===a.F)return c.Ra=-1,0}else if(0===a.T&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Wh(a,-5);if(666===c.status&&0!==a.T)return Wh(a,-5);if(0!==a.T||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?ei(c,b):3===c.strategy?di(c,b):gi[c.level].Pc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ra=-1),0;if(2===d&&(1===b?(Gh(c,2,3),Hh(c,256,uh),16===c.N?(Fh(c,c.U),c.U=0,c.N=0):8<=c.N&&(c.K[c.pending++]=c.U&255,c.U>>=8,c.N-=
8)):5!==b&&(Gh(c,0,3),Mh(c,0,0),3===b&&(Xh(c.head),0===c.m&&(c.j=0,c.Y=0,c.X=0))),Yh(a),0===a.F))return c.Ra=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.v&255),S(c,a.v>>8&255),S(c,a.v>>16&255),S(c,a.v>>24&255),S(c,a.Ka&255),S(c,a.Ka>>8&255),S(c,a.Ka>>16&255),S(c,a.Ka>>24&255)):(Zh(c,a.v>>>16),Zh(c,a.v&65535));Yh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ji={};ji=function(){this.input=null;this.Ka=this.T=this.Ja=0;this.fb=null;this.Ob=this.F=this.Ua=0;this.msg="";this.state=null;this.Cb=2;this.v=0};var ki=Object.prototype.toString;
function li(a){if(!(this instanceof li))return new li(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,Ca:15,ed:8,strategy:0,wc:""},a||{});a.raw&&0<a.Ca?a.Ca=-a.Ca:a.Sc&&0<a.Ca&&16>a.Ca&&(a.Ca+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new ji;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Ca,f=a.ed,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Wh(b,-2);else{8===e&&(e=9);var k=new hi;
b.state=k;k.B=b;k.wrap=h;k.s=null;k.Pb=e;k.S=1<<k.Pb;k.Ba=k.S-1;k.Db=f+7;k.vb=1<<k.Db;k.qa=k.vb-1;k.ra=~~((k.Db+3-1)/3);k.window=new O.La(2*k.S);k.head=new O.na(k.vb);k.ka=new O.na(k.S);k.eb=1<<f+6;k.da=4*k.eb;k.K=new O.La(k.da);k.ab=1*k.eb;k.Fb=3*k.eb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ka=b.Ob=0;b.Cb=2;c=b.state;c.pending=0;c.gb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.v=2===c.wrap?0:1;c.Ra=0;if(!Uh){d=Array(16);for(f=g=0;28>f;f++)for(yh[f]=g,e=0;e<1<<qh[f];e++)xh[g++]=
f;xh[g-1]=f;for(f=g=0;16>f;f++)for(zh[f]=g,e=0;e<1<<rh[f];e++)wh[g++]=f;for(g>>=7;30>f;f++)for(zh[f]=g<<7,e=0;e<1<<rh[f]-7;e++)wh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)uh[2*e+1]=8,e++,d[8]++;for(;255>=e;)uh[2*e+1]=9,e++,d[9]++;for(;279>=e;)uh[2*e+1]=7,e++,d[7]++;for(;287>=e;)uh[2*e+1]=8,e++,d[8]++;Jh(uh,287,d);for(e=0;30>e;e++)vh[2*e+1]=5,vh[2*e]=Ih(e,5);Bh=new Ah(uh,qh,257,286,15);Ch=new Ah(vh,rh,0,30,15);Dh=new Ah([],sh,0,19,7);Uh=!0}c.wb=new Eh(c.W,Bh);c.sb=new Eh(c.Fa,Ch);c.Rb=new Eh(c.R,
Dh);c.U=0;c.N=0;Kh(c);c=0}else c=Wh(b,-2);0===c&&(b=b.state,b.xc=2*b.S,Xh(b.head),b.Hb=gi[b.level].cd,b.Zb=gi[b.level].Rc,b.kc=gi[b.level].fd,b.ic=gi[b.level].bd,b.j=0,b.Y=0,b.m=0,b.X=0,b.G=b.Z=2,b.Ha=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(oh[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.s=a.header);if(a.bb){var l;"string"===typeof a.bb?l=Mg(a.bb):"[object ArrayBuffer]"===ki.call(a.bb)?l=new Uint8Array(a.bb):l=a.bb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.v=Ng(a.v,f,g,0));l.wrap=0;g>=l.S&&(0===b&&(Xh(l.head),l.j=0,l.Y=0,l.X=0),c=new O.La(l.S),O.Ma(c,f,g-l.S,l.S,0),f=c,g=l.S);c=a.T;d=a.Ja;e=a.input;a.T=g;a.Ja=0;a.input=f;for(ai(l);3<=l.m;){f=l.j;g=l.m-2;do l.C=(l.C<<l.ra^l.window[f+3-1])&l.qa,l.ka[f&l.Ba]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.j=f;l.m=2;ai(l)}l.j+=l.m;l.Y=l.j;l.X=l.m;l.m=0;l.G=l.Z=2;l.Ha=0;a.Ja=d;a.input=e;a.T=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(oh[b]);this.Od=!0}}
li.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Mg(a):"[object ArrayBuffer]"===ki.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ja=0;c.T=c.input.length;do{0===c.F&&(c.fb=new O.La(d),c.Ua=0,c.F=d);a=ii(c,e);if(1!==a&&0!==a)return mi(this,a),this.ended=!0,!1;if(0===c.F||0===c.T&&(4===e||2===e))if("string"===this.options.wc){var f=O.Nb(c.fb,c.Ua);b=f;f=f.length;if(65537>f&&(b.subarray&&Lg||!b.subarray))b=
String.fromCharCode.apply(null,O.Nb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Nb(c.fb,c.Ua),this.chunks.push(b)}while((0<c.T||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Wh(c,-2):(c.state=null,a=113===d?Wh(c,-3):0)):a=-2,mi(this,a),this.ended=!0,0===a;2===e&&(mi(this,0),c.F=0);return!0};
function mi(a,b){0===b&&(a.result="string"===a.options.wc?a.chunks.join(""):O.Xb(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
;function ni(a){this.name=a}
;var oi=new ni("rawColdConfigGroup");var pi=new ni("rawHotConfigGroup");function qi(a){this.o=K(a)}
v(qi,L);function ri(a){this.o=K(a)}
v(ri,L);function si(a){this.o=K(a)}
v(si,L);si.la=[2];function ti(a){this.o=K(a)}
v(ti,L);ti.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=gd(this,36);b=null==b?b:b;return null!=b?b:a};
ti.prototype.setHomeGroupInfo=function(a){return I(this,si,81,a)};
ti.la=[9,66,24,32,86,100,101];function ui(a){this.o=K(a)}
v(ui,L);ui.prototype.getKey=function(){return rd(this,1)};
ui.prototype.ia=function(){return rd(this,md(this,vi,2))};
var vi=[2,3,4,5,6];function wi(a){this.o=K(a)}
v(wi,L);wi.la=[15,26,28];function xi(a){this.o=K(a)}
v(xi,L);xi.la=[5];function yi(a){this.o=K(a)}
v(yi,L);function zi(a){this.o=K(a)}
v(zi,L);zi.prototype.setSafetyMode=function(a){return H(this,5,a)};
zi.la=[12];function Ai(a){this.o=K(a)}
v(Ai,L);Ai.la=[12];var Bi={Nd:"WEB_DISPLAY_MODE_UNKNOWN",Jd:"WEB_DISPLAY_MODE_BROWSER",Ld:"WEB_DISPLAY_MODE_MINIMAL_UI",Md:"WEB_DISPLAY_MODE_STANDALONE",Kd:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ci(a){this.o=K(a)}
v(Ci,L);Ci.prototype.getKey=function(){return rd(this,1)};
Ci.prototype.ia=function(){return rd(this,2)};function Di(a){this.o=K(a)}
v(Di,L);Di.la=[4,5];function Ei(a){this.o=K(a)}
v(Ei,L);function Fi(a){this.o=K(a)}
v(Fi,L);var Gi=[2,3,4,5];function Hi(a){this.o=K(a)}
v(Hi,L);function Ii(a){this.o=K(a)}
v(Ii,L);function Ji(a){this.o=K(a)}
v(Ji,L);function Ki(a){this.o=K(a)}
v(Ki,L);Ki.la=[10,17];function Li(a){this.o=K(a)}
v(Li,L);function Mi(a){this.o=K(a)}
v(Mi,L);function Ni(a){this.o=K(a)}
v(Ni,L);function Oi(a){this.o=K(a,481)}
v(Oi,L);
var Pi=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480];function Qi(a){this.o=K(a)}
v(Qi,L);function Ri(a){this.o=K(a)}
v(Ri,L);Ri.prototype.getPlaylistId=function(){return sd(this,2)};
var td=[1,2];function Si(a){this.o=K(a)}
v(Si,L);Si.la=[3];var Ti=A.window,Ui,Vi,Wi=(null==Ti?void 0:null==(Ui=Ti.yt)?void 0:Ui.config_)||(null==Ti?void 0:null==(Vi=Ti.ytcfg)?void 0:Vi.data_)||{};C("yt.config_",Wi);function Xi(){var a=arguments;1<a.length?Wi[a[0]]=a[1]:1===a.length&&Object.assign(Wi,a[0])}
function T(a,b){return a in Wi?Wi[a]:b}
function Yi(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Zi(){var a=Wi.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var $i=[];function aj(a){$i.forEach(function(b){return b(a)})}
function bj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){cj(b)}}:a}
function cj(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Xi("ERRORS",b));aj(a)}
function dj(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Xi("ERRORS",f))}
;function V(a){a=ej(a);return"string"===typeof a&&"false"===a?!1:!!a}
function fj(a,b){a=ej(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ej(a){var b=T("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:T("EXPERIMENT_FLAGS",{})[a]}
function gj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var hj=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++hj});var ij={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function jj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ij||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
jj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
jj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
jj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var kj=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",kj);
function lj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function mj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?nj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var nj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function oj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=lj(a,b,c,d);if(!e){e=++kj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new jj(h);if(!Jd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new jj(h);
h.currentTarget=a;return c.call(a,h)};
g=bj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),nj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function pj(a,b){"function"===typeof a&&(a=bj(a));return window.setTimeout(a,b)}
function qj(a){"function"===typeof a&&(a=bj(a));return window.setInterval(a,250)}
;var rj=/^[\w.]*$/,sj={q:!0,search_query:!0};function tj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=uj(f[0]||""),h=uj(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(tj);k.args=[{key:l,value:f[1],query:a,method:vj==m?"unchanged":m}];sj.hasOwnProperty(l)||dj(k)}}return c}
var vj=String(tj);function wj(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function xj(a){"?"==a.charAt(0)&&(a=a.substr(1));return tj(a,"&")}
function yj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=xj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=ac(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function zj(a){if(!b)var b=window.location.href;var c=a.match(Wb)[1]||null,d=Yb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Yb(b)==d&&(Number(b.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;return a}
function uj(a){return a&&a.match(rj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Aj(a){var b=Bj;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=be;e.flash="0";a:{try{var f=b.g.top.location.href}catch(da){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Gd:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;var k;e.u_h=null==(k=Gd.screen)?void 0:k.height;var l;e.u_w=null==(l=Gd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Gd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Gd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Gd.screen)?void 0:r.colorDepth}catch(da){}h=b.g;try{var p=h.screenX;var x=h.screenY}catch(da){}try{var y=h.outerWidth;var E=h.outerHeight}catch(da){}try{var P=h.innerWidth;var U=h.innerHeight}catch(da){}try{var R=h.screenLeft;var Ba=h.screenTop}catch(da){}try{P=h.innerWidth,U=h.innerHeight}catch(da){}try{var Mc=h.screen.availWidth;var Oa=h.screen.availTop}catch(da){}p=[R,Ba,p,x,Mc,Oa,y,E,P,U];x=b.g.top;try{var Ca=(x||window).document,ea=
"CSS1Compat"==Ca.compatMode?Ca.documentElement:Ca.body;var ma=(new Hd(ea.clientWidth,ea.clientHeight)).round()}catch(da){ma=new Hd(-12245933,-12245933)}Ca=ma;ma={};var na=void 0===na?A:na;ea=new bf;"SVGElement"in na&&"createElementNS"in na.document&&ea.set(0);x=$d();x["allow-top-navigation-by-user-activation"]&&ea.set(1);x["allow-popups-to-escape-sandbox"]&&ea.set(2);na.crypto&&na.crypto.subtle&&ea.set(3);"TextDecoder"in na&&"TextEncoder"in na&&ea.set(4);na=cf(ea);ma.bc=na;ma.bih=Ca.height;ma.biw=
Ca.width;ma.brdim=p.join();b=b.h;b=(ma.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ma.wgl=!!Gd.WebGLRenderingContext,ma);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Bj=new function(){var a=window.document;this.g=window;this.h=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return wj(Aj(a))});Date.now();var Cj="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Dj(){if(!Cj)return null;var a=Cj();return"open"in a?a:null}
;var Ej={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Fj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(de)),Gj=!1;
function Hj(a,b){b=void 0===b?{}:b;var c=zj(a),d=V("web_ajax_ignore_global_headers_if_set"),e;for(e in Ej){var f=T(Ej[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&Yb(a)||d&&void 0!==b[e]||(!V("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}V("move_vss_away_from_login_info_cookie")&&c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Yb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Yb(a)||(b["X-YouTube-Ad-Signals"]=wj(Aj()));return b}
function Ij(a){var b=window.location.search,c=Yb(a);V("debug_handle_relative_url_for_query_forward_killswitch")||!c&&zj(a)&&(c=document.location.hostname);var d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=xj(b),f={};db(Fj,function(g){e[g]&&(f[g]=e[g])});
return yj(a,f||{},!1)}
function Jj(a,b){var c=b.format||"JSON";a=Kj(a,b);var d=Lj(a,b),e=!1,f=Mj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Nj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=pj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}return f}
function Kj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=yj(a,b||{},!0);return a}
function Lj(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=T("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(V("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=xj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ac(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Gj&&a&&"POST"!=b.method&&(Gj=!0,cj(Error("AJAX request with postData should use POST")));return e}
function Nj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,dj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Oj(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Pj(g)})}d&&Qj(e);
return e}
function Qj(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===qb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Ub(d)}else Qj(a[b])}}
function Oj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pj(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rj(a,b){b.method="POST";b.postParams||(b.postParams={});return Jj(a,b)}
function Mj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&bj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Dj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;V("debug_forward_web_query_parameters")&&(a=Ij(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Hj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Sj=[{Ib:function(a){return"Cannot read property '"+a.key+"'"},
xb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ib:function(a){return"Cannot call '"+a.key+"'"},
xb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ib:function(a){return a.key+" is not defined"},
xb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Uj={za:[],wa:[{Ic:Tj,weight:500}]};function Tj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vj(){this.wa=[];this.za=[]}
var Wj;function Xj(){if(!Wj){var a=Wj=new Vj;a.za.length=0;a.wa.length=0;Uj.za&&a.za.push.apply(a.za,Uj.za);Uj.wa&&a.wa.push.apply(a.wa,Uj.wa)}return Wj}
;var Yj=new M;function Zj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ak(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ak(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ak(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ak(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function bk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ck(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Zj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?ck(e+".ve",f,g,h):0;d+=g;d+=ck(e,a[e],b,c);if(500<d)break}}else c[b]=dk(a),d+=c[b].length;else c[b]=dk(a),d+=c[b].length;return d}
function ck(a,b,c,d){c+="."+a;a=dk(b);d[c]=a;return c.length+a.length}
function dk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ek(){}
;function fk(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var gk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},ik={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},jk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function kk(){var a=A.navigator;return a?a.connection:void 0}
;function lk(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(lk,Error);function mk(){try{return nk(),!0}catch(a){return!1}}
function nk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new lk("Datasync ID not set","unknown");}
;function ok(){}
function pk(a,b){return qk(a,0,b)}
ok.prototype.oa=function(a,b){return qk(a,1,b)};function rk(){ok.apply(this,arguments)}
v(rk,ok);function sk(){rk.g||(rk.g=new rk);return rk.g}
function qk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):pj(a,c||0)}
rk.prototype.Na=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
rk.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
var af=sk();function tk(a){var b=new Bg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Hg(b,a):b:null)||(a=new Cg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new xg(a):null;this.h=document.domain||window.location.hostname}
tk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Zf(b))}catch(f){return}else e=escape(b);b=this.h;ke.set(""+a,e,{Gb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
tk.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ke.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tk.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ke.remove(""+a,"/",void 0===b?"youtube.com":b)};var uk=function(){var a;return function(){a||(a=new tk("ytidb"));return a}}();
function vk(){var a;return null==(a=uk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var wk=[],xk=!1;function yk(a){xk||(wk.push({type:"ERROR",payload:a}),10<wk.length&&wk.shift())}
function zk(a,b){xk||(wk.push({type:"EVENT",eventType:a,payload:b}),10<wk.length&&wk.shift())}
;function Ak(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Bk(a){return a.substr(0,a.indexOf(":"))||a}
;var Ck=yc||zc;var Dk={},Ek=(Dk.AUTH_INVALID="No user identifier specified.",Dk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Dk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Dk.MISSING_INDEX="Index not created.",Dk.MISSING_OBJECT_STORES="Object stores not created.",Dk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Dk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Dk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Dk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Dk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Dk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Dk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Dk),Fk={},Gk=(Fk.AUTH_INVALID="ERROR",Fk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fk.EXPLICIT_ABORT="IGNORED",Fk.IDB_NOT_SUPPORTED="ERROR",Fk.MISSING_INDEX=
"WARNING",Fk.MISSING_OBJECT_STORES="ERROR",Fk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Fk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Fk.QUOTA_EXCEEDED="WARNING",Fk.QUOTA_MAYBE_EXCEEDED="WARNING",Fk.UNKNOWN_ABORT="WARNING",Fk.INCOMPATIBLE_DB_VERSION="WARNING",Fk),Hk={},Ik=(Hk.AUTH_INVALID=!1,Hk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Hk.EXPLICIT_ABORT=!1,Hk.IDB_NOT_SUPPORTED=!1,Hk.MISSING_INDEX=!1,Hk.MISSING_OBJECT_STORES=!1,Hk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Hk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Hk.QUOTA_EXCEEDED=!1,Hk.QUOTA_MAYBE_EXCEEDED=!0,Hk.UNKNOWN_ABORT=!0,Hk.INCOMPATIBLE_DB_VERSION=!1,Hk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ek[a]:c;d=void 0===d?Gk[a]:d;e=void 0===e?Ik[a]:e;lk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
v(X,lk);function Jk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ek.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Jk.prototype)}
v(Jk,X);function Kk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Kk.prototype)}
v(Kk,Error);var Lk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Mk(a,b,c,d){b=Bk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Ac&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Kk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Lk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Wd:e.name})];e.level="WARNING";return e}
function Nk(a,b,c){var d=vk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ok(a){if(!a)throw Error();throw a;}
function Pk(a){return a}
function Qk(a){this.g=a}
function Rk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Rk.resolve=function(a){return new Rk(new Qk(function(b,c){a instanceof Rk?a.then(b,c):b(a)}))};
Rk.reject=function(a){return new Rk(new Qk(function(b,c){c(a)}))};
Rk.prototype.then=function(a,b){var c=this,d=null!=a?a:Pk,e=null!=b?b:Ok;return new Rk(new Qk(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Sk(c,c,d,f,g)}),c.h.push(function(){Tk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Sk(c,c,d,f,g):"REJECTED"===c.state.status&&Tk(c,c,e,f,g)}))};
function Uk(a,b){a.then(void 0,b)}
function Sk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Rk?Vk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Rk?Vk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Rk?Vk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xk(a){return new Promise(function(b,c){Wk(a,b,c)})}
function Yk(a){return new Rk(new Qk(function(b,c){Wk(a,b,c)}))}
;function Zk(a,b){return new Rk(new Qk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var $k=window,Y=$k.ytcsi&&$k.ytcsi.now?$k.ytcsi.now:$k.performance&&$k.performance.timing&&$k.performance.now&&$k.performance.timing.navigationStart?function(){return $k.performance.timing.navigationStart+$k.performance.now()}:function(){return(new Date).getTime()};function al(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
q=al.prototype;q.add=function(a,b,c){return bl(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return bl(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function cl(a,b,c){a=a.g.createObjectStore(b,c);return new dl(a)}
q.delete=function(a,b){return bl(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return bl(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function el(a,b,c){return bl(a,[b],{mode:"readwrite",V:!0},function(d){d=d.objectStore(b);return Yk(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function bl(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,x,y;return z(function(E){switch(E.g){case 1:var P={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){E.D(4);break}g++;k=Math.round(Y());wa(E,5);l=a.g.transaction(b,e.mode);P=new fl(l);P=gl(P,d);return w(E,P,7);case 7:return m=E.h,n=Math.round(Y()),hl(a,k,n,g,void 0,b.join(),e),E.return(m);case 5:r=xa(E);p=Math.round(Y());x=Mk(r,a.g.name,b.join(),a.g.version);
if((y=x instanceof X&&!x.g)||g>=f)hl(a,k,p,g,x,b.join(),e),h=x;E.D(2);break;case 4:return E.return(Promise.reject(h))}})}
function hl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&zk("QUOTA_EXCEEDED",{dbName:Bk(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),zk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),il(a,!1,d,f,b,g.tag),yk(e)):il(a,!0,d,f,b,g.tag)}
function il(a,b,c,d,e,f){zk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function dl(a){this.g=a}
q=dl.prototype;q.add=function(a,b){return Yk(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Yk(this.g.clear()).then(function(){})};
function jl(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function kl(a,b){return ll(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?kl(this,a):Yk(this.g.delete(a))};
q.get=function(a){return Yk(this.g.get(a))};
q.index=function(a){try{return new ml(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Kk(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function ll(a,b,c){a=a.g.openCursor(b.query,b.direction);return nl(a).then(function(d){return Zk(d,c)})}
function fl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function gl(a,b){var c=new Promise(function(d,e){try{Uk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
fl.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
fl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new dl(a),this.i.set(a,b));return b};
function ml(a){this.g=a}
q=ml.prototype;q.delete=function(a){return ol(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Yk(this.g.get(a))};
q.getKey=function(a){return Yk(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function ol(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return nl(a).then(function(d){return Zk(d,c)})}
function pl(a,b){this.request=a;this.cursor=b}
function nl(a){return Yk(a).then(function(b){return b?new pl(a,b):null})}
q=pl.prototype;q.advance=function(a){this.cursor.advance(a);return nl(this.request)};
q.continue=function(a){this.cursor.continue(a);return nl(this.request)};
q.delete=function(){return Yk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ia=function(){return this.cursor.value};
q.update=function(a){return Yk(this.cursor.update(a))};function ql(a,b,c){return new Promise(function(d,e){function f(){r||(r=new al(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Gc,k=c.Hc,l=c.jd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&zk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Bk(a)});var x=f(),y=new fl(g.transaction);m&&
m(x,function(E){return p.oldVersion<E&&p.newVersion>=E},y);
y.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){zk("IDB_UNEXPECTEDLY_CLOSED",{dbName:Bk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function rl(a,b,c){c=void 0===c?{}:c;return ql(a,b,c)}
function sl(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Gc)&&c.addEventListener("blocked",function(){e()}),w(g,Xk(c),4);
if(2!=g.g)g.g=0,g.u=0;else throw f=xa(g),Mk(f,a,"",-1);})}
;function em(a,b){this.name=a;this.options=b;this.i=!0;this.u=this.l=0}
em.prototype.h=function(a,b,c){c=void 0===c?{}:c;return rl(a,b,c)};
em.prototype.delete=function(a){a=void 0===a?{}:a;return sl(this.name,a)};
function fm(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function gm(a,b){if(!b)throw Nk("openWithToken",Bk(a.name));return hm(a)}
function hm(a){function b(){var f,g,h,k,l,m,n,r,p,x;return z(function(y){switch(y.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(y,2),w(y,a.h(a.name,a.options.version,d),4);case 4:h=y.h;for(var E=a.options,P=[],U=u(Object.keys(E.Va)),R=U.next();!R.done;R=U.next()){R=R.value;var Ba=E.Va[R],Mc=void 0===Ba.gd?Number.MAX_VALUE:Ba.gd;!(h.g.version>=Ba.Za)||h.g.version>=Mc||h.g.objectStoreNames.contains(R)||P.push(R)}k=P;if(0===k.length){y.D(5);break}l=Object.keys(a.options.Va);m=h.objectStoreNames();
if(a.u<fj("ytidb_reopen_db_retries",0))return a.u++,h.close(),yk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),y.return(b());if(!(a.l<fj("ytidb_remake_db_retries",1))){y.D(6);break}a.l++;return w(y,a.delete(),7);case 7:return yk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),y.return(b());case 6:throw new Jk(m,l);case 5:return y.return(h);case 2:n=xa(y);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){y.D(8);break}return w(y,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=y.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,fm(a,p);return y.return(r);case 8:throw c(),n instanceof Error&&!V("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Mk(n,a.name,"",null!=(x=a.options.version)?x:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw fm(a);if(a.g)return a.g;var d={Hc:function(f){f.close()},
closed:c,jd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var im=new em("YtIdbMeta",{Va:{databases:{Za:1}},upgrade:function(a,b){b(1)&&cl(a,"databases",{keyPath:"actualName"})}});
function jm(a,b){var c;return z(function(d){if(1==d.g)return w(d,gm(im,b),2);c=d.h;return d.return(bl(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Yk(f.g.put(a,void 0)).then(function(){})})}))})}
function km(a,b){var c;return z(function(d){if(1==d.g)return a?w(d,gm(im,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function lm(a,b){var c,d;return z(function(e){return 1==e.g?(c=[],w(e,gm(im,b),2)):3!=e.g?(d=e.h,w(e,bl(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return ll(f.objectStore("databases"),{},function(g){a(g.ia())&&c.push(g.ia());return g.continue()})}),3)):e.return(c)})}
function mm(a){return lm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var nm,om=new function(){}(new function(){});
function pm(){var a,b,c,d;return z(function(e){switch(e.g){case 1:a=vk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ck)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,jm(d,om),4);case 4:return w(e,km("yt-idb-test-do-not-use",om),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function qm(){if(void 0!==nm)return nm;xk=!0;return nm=pm().then(function(a){xk=!1;var b;if(null!=(b=uk())&&b.g){var c;b={hasSucceededOnce:(null==(c=vk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=uk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function rm(){return B("ytglobal.idbToken_")||void 0}
function sm(){var a=rm();return a?Promise.resolve(a):qm().then(function(b){(b=b?om:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new $f;function tm(a){if(!mk())throw a=new X("AUTH_INVALID",{dbName:a}),yk(a),a;var b=nk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function um(a,b,c,d){var e,f,g,h,k,l;return z(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,sm(),2);case 2:g=m.h;if(!g)throw h=Nk("openDbImpl",a,b),V("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),yk(h),h;Ak(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:tm(a);wa(m,3);return w(m,jm(k,g),5);case 5:return w(m,rl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),w(m,km(k.actualName,g),9);case 9:m.g=
8;m.u=0;break;case 7:xa(m);case 8:throw l;}})}
function vm(a,b,c){c=void 0===c?{}:c;return um(a,b,!1,c)}
function wm(a,b,c){c=void 0===c?{}:c;return um(a,b,!0,c)}
function xm(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.g)return w(e,sm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Ak(a);d=tm(a);return w(e,sl(d.actualName,b),3)}return w(e,km(d.actualName,c),0)})}
function ym(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.g?w(e,sl(d.actualName,b),2):w(e,km(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function zm(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.g)return w(d,sm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Ak("LogsDatabaseV2");return w(d,mm(b),3)}c=d.h;return w(d,ym(c,a,b),0)})}
function Am(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.g)return w(d,sm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Ak(a);return w(d,sl(a,b),3)}return w(d,km(a,c),0)})}
;function Bm(a,b){em.call(this,a,b);this.options=b;Ak(a)}
v(Bm,em);function Cm(a,b){var c;return function(){c||(c=new Bm(a,b));return c}}
Bm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Bb?wm:vm)(a,b,Object.assign({},c))};
Bm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Bb?Am:xm)(this.name,a)};
function Dm(a,b){return Cm(a,b)}
;var Em={},Fm=Dm("ytGcfConfig",{Va:(Em.coldConfigStore={Za:1},Em.hotConfigStore={Za:1},Em),Bb:!1,upgrade:function(a,b){b(1)&&(jl(cl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),jl(cl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Gm(a){return gm(Fm(),a)}
function Hm(a,b,c){var d,e,f;return z(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},w(g,Gm(c),2);case 2:return e=g.h,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,el(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Im(a,b,c,d){var e,f,g;return z(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},w(h,Gm(d),2);case 2:return f=h.h,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,el(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Jm(a){var b,c;return z(function(d){return 1==d.g?w(d,Gm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,bl(b,["coldConfigStore"],{mode:"readwrite",V:!0},function(e){return ol(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
function Km(a){var b,c;return z(function(d){return 1==d.g?w(d,Gm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,bl(b,["hotConfigStore"],{mode:"readwrite",V:!0},function(e){return ol(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
;function Lm(){ue.apply(this,arguments);this.g=[]}
v(Lm,ue);Lm.prototype.Ea=function(){this.g.length=0;ue.prototype.Ea.call(this)};function Mm(){this.g=0;this.h=new Lm}
function Nm(a,b,c){var d,e,f;return z(function(g){switch(g.g){case 1:if(!V("update_log_event_config")){g.D(0);break}c&&(a.i=c,C("yt.gcf.config.hotConfigGroup",a.i||null));a.hotHashData=b;C("yt.gcf.config.hotHashData",a.hotHashData||null);d=rm();if(!d){g.D(3);break}if(c){g.D(4);break}return w(g,Km(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return w(g,Hm(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.h.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Om(a,b,c){var d,e,f,g;return z(function(h){if(1==h.g){if(!V("update_log_event_config"))return h.D(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=rm())?c?h.D(4):w(h,Jm(d),5):h.D(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return w(h,Im(c,b,g,d),0)})}
;function Pm(){return"INNERTUBE_API_KEY"in Wi&&"INNERTUBE_API_VERSION"in Wi}
function Qm(){return{Tc:T("INNERTUBE_API_KEY"),Uc:T("INNERTUBE_API_VERSION"),Eb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vc:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),dc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),fc:T("INNERTUBE_CONTEXT_HL"),ec:T("INNERTUBE_CONTEXT_GL"),Wc:T("INNERTUBE_HOST_OVERRIDE")||"",Yc:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xc:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Rm(a){var b={client:{hl:a.fc,gl:a.ec,clientName:a.cc,clientVersion:a.dc,configInfo:a.Eb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=gj();0<c.length&&(b.request={internalExperimentFlags:c});Sm(a,void 0,b);Tm(void 0,b);Um(void 0,b);Vm(a,void 0,b);Wm(void 0,b);V("start_sending_config_hash")&&Xm(void 0,b);T("DELEGATED_SESSION_ID")&&
!V("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!V("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(xj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===
g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ym(a){var b=new Ai,c=new ti;J(c,1,a.fc);J(c,2,a.ec);H(c,16,a.Vc);J(c,17,a.dc);if(a.Eb){var d=a.Eb,e=new qi;d.coldConfigData&&J(e,1,d.coldConfigData);d.appInstallData&&J(e,6,d.appInstallData);d.coldHashData&&J(e,3,d.coldHashData);d.hotHashData&&J(e,5,d.hotHashData);I(c,qi,62,e)}if((d=A.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);H(c,65,d)}d=T("EXPERIMENTS_TOKEN","");""!==d&&J(c,
54,d);d=gj();if(0<d.length){e=new wi;for(var f=0;f<d.length;f++){var g=new ui;J(g,1,d[f].key);kd(g,2,vi,$c(d[f].value));qd(e,15,ui,g)}I(b,wi,5,e)}Sm(a,c);Tm(b);Um(c);Vm(a,c);Wm(c);V("start_sending_config_hash")&&Xm(c);T("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(a=new zi,J(a,3,T("DELEGATED_SESSION_ID")));!V("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=nd(b,zi,3)||new zi,a=J(d,18,a),I(b,zi,3,a));a=u(Object.entries(xj(T("DEVICE",
""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?J(c,12,e):"cmodel"===d?J(c,13,e):"cbr"===d?J(c,87,e):"cbrver"===d?J(c,88,e):"cos"===d?J(c,18,e):"cosver"===d?J(c,19,e):"cplatform"===d&&H(c,42,e);I(b,ti,1,c);return b}
function Sm(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=nd(b,ri,96)||new ri;var d=fk();d=Object.keys(Bi).indexOf(d);d=-1===d?null:d;null!==d&&H(c,3,d);I(b,ri,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=fk())}
function Tm(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=nd(a,xi,7)||new xi,J(b,4,c),I(a,xi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Um(a,b){var c;if(V("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Vm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=nd(b,qi,62))?d:new qi;J(c,6,a.appInstallData);I(b,qi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Wm(a,b){a:{var c=kk();if(c){var d=gk[c.type||"unknown"]||"CONN_UNKNOWN";c=gk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?H(a,61,hk[d]):b&&(b.client.connectionType=d));V("web_log_effective_connection_type")&&(d=kk(),d=null!=d&&d.effectiveType?jk.hasOwnProperty(d.effectiveType)?jk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?H(a,94,ik[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Zm(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Qd||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+B("gapi.auth.getToken")().Pd;else{ek.g||(ek.g=new ek);a={};if(c=ne([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),V("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Wi||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Wi&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));V("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Xm(a,b){if(!Mm.g){var c=new Mm;Mm.g=c}c=Mm.g;var d=Y()-c.g;if(0!==c.g&&d<fj("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.g=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=nd(a,qi,62))?g:new qi;J(b,1,c);J(b,3,d);J(b,5,e);I(a,qi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var $m=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.jb;M.prototype.publish=M.prototype.Wa;M.prototype.clear=M.prototype.clear;C("ytPubsub2Pubsub2Instance",$m);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function an(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={be:a,ae:b},(b=B("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var bn=fj("max_body_size_to_compress",5E5),cn=fj("min_body_size_to_compress",500),dn=!0,en=0,fn=0,gn=fj("compression_performance_threshold_lr",250),hn=fj("slow_compressions_before_abandon_count",4);
function jn(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(dn)try{try{var g=(new Blob(b.split(""))).size}catch(r){dj(r),g=null}if(null==g||!(g>bn||g<cn)){var h=pe(b);var k=k||{};k.Sc=!0;var l=new li(k);l.push(h,!0);if(l.err)throw l.msg||oh[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;fn++;V("disable_compression_due_to_performance_degredation")&&n-e>=gn&&(en++,V("abandon_compression_after_N_slow_zips")?fn===fj("compression_disable_point")&&en>hn&&(dn=!1):dn=!1);V("gel_compression_csi_killswitch")||
!V("log_gel_compression_latency")&&!V("log_gel_compression_latency_lr")||an("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){dj(r),d(a,c)}else d(a,c)}
;function kn(a){a=Object.assign({},a);delete a.Authorization;var b=ne();if(b){var c=new Lf;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Dc(c.digest(),3)}return a}
;var ln;function mn(){ln||(ln=new tk("yt.innertube"));return ln}
function nn(a,b,c,d){if(d)return null;d=mn().get("nextId",!0)||1;var e=mn().get("requests",!0)||{};e[d]={method:a,request:b,authState:kn(c),requestTime:Math.round(Y())};mn().set("nextId",d+1,86400,!0);mn().set("requests",e,86400,!0);return d}
function on(a){var b=mn().get("requests",!0)||{};delete b[a];mn().set("requests",b,86400,!0)}
function pn(a){var b=mn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=kn(Zm(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),qn(a,d.method,e,{}));delete b[c]}}mn().set("requests",b,86400,!0)}}
;function rn(a){this.ob=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Pa=function(){};
this.now=Date.now;this.cb=!1;var b;this.vc=null!=(b=a.vc)?b:100;var c;this.sc=null!=(c=a.sc)?c:1;var d;this.pc=null!=(d=a.pc)?d:2592E6;var e;this.oc=null!=(e=a.oc)?e:12E4;var f;this.qc=null!=(f=a.qc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.tb=!!a.tb;var h;this.rb=null!=(h=a.rb)?h:.1;var k;this.yb=null!=(k=a.yb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Pa&&(this.Pa=a.Pa);a.cb&&(this.cb=a.cb);a.ob&&(this.ob=a.ob);this.J=a.J;this.ga=a.ga;this.M=a.M;this.O=a.O;this.va=a.va;this.Lb=
a.Lb;this.Kb=a.Kb;sn(this)&&(!this.J||this.J("networkless_logging"))&&tn(this)}
function tn(a){sn(a)&&!a.cb&&(a.g=!0,a.tb&&Math.random()<=a.rb&&a.M.Jc(a.I),un(a),a.O.ba()&&a.ib(),a.O.Ga(a.Lb,a.ib.bind(a)),a.O.Ga(a.Kb,a.Sb.bind(a)))}
q=rn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(sn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.M.set(d,this.I).then(function(e){d.id=e;c.O.ba()&&vn(c,d)}).catch(function(e){vn(c,d);
wn(c,e)})}else this.va(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(sn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.O.ba()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.g)return w(k,d.M.set(e,d.I).catch(function(l){wn(d,l)}),2);
f(g,h);k.g=0})}}this.va(a,b,e.skipRetry)}else this.M.set(e,this.I).catch(function(g){d.va(a,b,e.skipRetry);
wn(d,g)})}else this.va(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(sn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.M.Oa(d.id,c.I):e=!0;c.O.Ia&&c.J&&c.J("vss_network_hint")&&c.O.Ia(!0);f(g,h)};
this.va(d.url,d.options);this.M.set(d,this.I).then(function(g){d.id=g;e&&c.M.Oa(d.id,c.I)}).catch(function(g){wn(c,g)})}else this.va(a,b)};
q.ib=function(){var a=this;if(!sn(this))throw Nk("throttleSend");this.h||(this.h=this.ga.oa(function(){var b;return z(function(c){if(1==c.g)return w(c,a.M.Yb("NEW",a.I),2);if(3!=c.g)return b=c.h,b?w(c,vn(a,b),3):(a.Sb(),c.return());a.h&&(a.h=0,a.ib());c.g=0})},this.vc))};
q.Sb=function(){this.ga.Na(this.h);this.h=0};
function vn(a,b){var c,d;return z(function(e){switch(e.g){case 1:if(!sn(a))throw c=Nk("immediateSend"),c;if(void 0===b.id){e.D(2);break}return w(e,a.M.ad(b.id,a.I),3);case 3:(d=e.h)||a.Pa(Error("The request cannot be found in the database."));case 2:if(xn(a,b,a.pc)){e.D(4);break}a.Pa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return w(e,a.M.Oa(b.id,a.I),5);case 5:return e.return();case 4:b.skipRetry||(b=yn(a,b));if(!b){e.D(0);break}if(!b.skipRetry||
void 0===b.id){e.D(8);break}return w(e,a.M.Oa(b.id,a.I),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.g=0}})}
function yn(a,b){if(!sn(a))throw Nk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return z(function(m){switch(m.g){case 1:g=zn(f);(h=An(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yb)){m.D(2);break}if(!a.O.Ab){m.D(3);break}return w(m,a.O.Ab(),3);case 3:if(a.O.ba()){m.D(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);
break}return w(m,a.M.Mb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.sc?w(m,a.M.Mb(b.id,a.I,!0,h?!1:void 0),12):w(m,a.M.Oa(b.id,a.I),8);case 12:a.ga.oa(function(){a.O.ba()&&a.ib()},a.qc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):w(h,a.M.Oa(b.id,a.I),2);a.O.Ia&&a.J&&a.J("vss_network_hint")&&a.O.Ia(!0);d(e,f);h.g=0})};
return b}
function xn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function un(a){if(!sn(a))throw Nk("retryQueuedRequests");a.M.Yb("QUEUED",a.I).then(function(b){b&&!xn(a,b,a.oc)?a.ga.oa(function(){return z(function(c){if(1==c.g)return void 0===b.id?c.D(2):w(c,a.M.Mb(b.id,a.I),2);un(a);c.g=0})}):a.O.ba()&&a.ib()})}
function wn(a,b){a.yc&&!a.O.ba()?a.yc(b):a.handleError(b)}
function sn(a){return!!a.I||a.ob}
function zn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function An(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Bn;
function Cn(){if(Bn)return Bn();var a={};Bn=Dm("LogsDatabaseV2",{Va:(a.LogsRequestsStore={Za:2},a),Bb:!1,upgrade:function(b,c,d){c(2)&&cl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),jl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Bn()}
;function Dn(a){return gm(Cn(),a)}
function En(a,b){var c,d,e,f;return z(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,Dn(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,el(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Fn(c);return g.return(f)})}
function Gn(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,Dn(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,bl(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(m){return ol(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ia()&&(k=n.ia(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Fn(c);return l.return(k)})}
function Hn(a,b){var c;return z(function(d){if(1==d.g)return w(d,Dn(b),2);c=d.h;return d.return(bl(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Yk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function In(a,b,c,d){c=void 0===c?!0:c;var e;return z(function(f){if(1==f.g)return w(f,Dn(b),2);e=f.h;return f.return(bl(e,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Yk(h.g.put(k,void 0)).then(function(){return k})):Rk.resolve(void 0)})}))})}
function Jn(a,b){var c;return z(function(d){if(1==d.g)return w(d,Dn(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Kn(a){var b,c;return z(function(d){if(1==d.g)return w(d,Dn(a),2);b=d.h;c=Y()-2592E6;return w(d,bl(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return ll(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ln(){z(function(a){return w(a,zm(),0)})}
function Fn(a){V("nwl_csi_killswitch")||an("networkless_performance",a,{sampleRate:1})}
;var Mn={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480};var Nn={},On=Dm("ServiceWorkerLogsDatabase",{Va:(Nn.SWHealthLog={Za:1},Nn),Bb:!0,upgrade:function(a,b){b(1)&&jl(cl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Pn(a){return gm(On(),a)}
function Qn(a){var b,c;z(function(d){if(1==d.g)return w(d,Pn(a),2);b=d.h;c=Y()-2592E6;return w(d,bl(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return ll(e.objectStore("SWHealthLog"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rn(a){var b;return z(function(c){if(1==c.g)return w(c,Pn(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var Sn={},Tn=0;function Un(a){var b=new Image,c=""+Tn++;Sn[c]=b;b.onload=b.onerror=function(){delete Sn[c]};
b.src=a}
;function Vn(){this.g=new Map;this.h=!1}
function Wn(){if(!Vn.g){var a=B("yt.networkRequestMonitor.instance")||new Vn;C("yt.networkRequestMonitor.instance",a);Vn.g=a}return Vn.g}
Vn.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Vn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Vn.prototype.removeParams=function(a){return a.split("?")[0]};
Vn.prototype.removeParams=Vn.prototype.removeParams;Vn.prototype.isEndpointCFR=Vn.prototype.isEndpointCFR;Vn.prototype.requestComplete=Vn.prototype.requestComplete;Vn.getInstance=Wn;var Xn;function Yn(){Xn||(Xn=new tk("yt.offline"));return Xn}
function Zn(a){if(V("offline_error_handling")){var b=Yn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yn().set("errors",b,2592E3,!0)}}
;function Z(){Ue.call(this);var a=this;this.l=!1;this.h=$e();this.h.Ga("networkstatus-online",function(){if(a.l&&V("offline_error_handling")){var b=Yn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new lk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;cj(d)}Yn().set("errors",{},2592E3,!0)}}})}
v(Z,Ue);function $n(){if(!Z.g){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
q=Z.prototype;q.ba=function(){return this.h.ba()};
q.Ia=function(a){this.h.h=a};
q.Qc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Mc=function(){this.l=!0};
q.Ga=function(a,b){return this.h.Ga(a,b)};
q.Ab=function(a){a=Ye(this.h,a);a.then(function(b){V("use_cfr_monitor")&&Wn().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ab;Z.prototype.listen=Z.prototype.Ga;Z.prototype.enableErrorFlushing=Z.prototype.Mc;Z.prototype.getWindowStatus=Z.prototype.Qc;Z.prototype.networkStatusHint=Z.prototype.Ia;Z.prototype.isNetworkAvailable=Z.prototype.ba;Z.getInstance=$n;function ao(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.h=this.H=0;this.l=$n();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.zb?(this.zb=a.zb,c("networkstatus-online",function(){bo(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bo(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ve(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ve(b,"publicytnetworkstatus-offline")})))}
v(ao,Ue);ao.prototype.ba=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
ao.prototype.Ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
ao.prototype.Ab=function(a){var b=this,c;return z(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return V("skip_network_check_if_cfr")&&Wn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ba())})):c?d.return(c(a)):d.return(!0)})};
function bo(a,b){a.zb?a.h?(af.Na(a.H),a.H=af.oa(function(){a.A!==b&&(Ve(a,b),a.A=b,a.h=Y())},a.zb-(Y()-a.h))):(Ve(a,b),a.A=b,a.h=Y()):Ve(a,b)}
;var co;function eo(){var a=rn.call;co||(co=new ao({Ud:!0,Td:!0}));a.call(rn,this,{M:{Jc:Kn,Oa:Jn,Yb:Gn,ad:Hn,Mb:In,set:En},O:co,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;dj(new lk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else cj(b)},
Pa:dj,va:fo,now:Y,yc:Zn,ga:sk(),Lb:"publicytnetworkstatus-online",Kb:"publicytnetworkstatus-offline",tb:!0,rb:.1,yb:fj("potential_esf_error_limit",10),J:V,cb:!(mk()&&"www.youtube-nocookie.com"!==Yb(document.location.toString()))});this.i=new $f;V("networkless_immediately_drop_all_requests")&&Ln();Am("LogsDatabaseV2")}
v(eo,rn);function go(){var a=B("yt.networklessRequestController.instance");a||(a=new eo,C("yt.networklessRequestController.instance",a),V("networkless_logging")&&sm().then(function(b){a.I=b;tn(a);a.i.resolve();a.tb&&Math.random()<=a.rb&&a.I&&Qn(a.I);V("networkless_immediately_drop_sw_health_store")&&ho(a)}));
return a}
eo.prototype.writeThenSend=function(a,b){b||(b={});mk()||(this.g=!1);rn.prototype.writeThenSend.call(this,a,b)};
eo.prototype.sendThenWrite=function(a,b,c){b||(b={});mk()||(this.g=!1);rn.prototype.sendThenWrite.call(this,a,b,c)};
eo.prototype.sendAndWrite=function(a,b){b||(b={});mk()||(this.g=!1);rn.prototype.sendAndWrite.call(this,a,b)};
eo.prototype.awaitInitialization=function(){return this.i.promise};
function ho(a){var b;z(function(c){if(!a.I)throw b=Nk("clearSWHealthLogsDb"),b;return c.return(Rn(a.I).catch(function(d){a.handleError(d)}))})}
function fo(a,b,c){b=V("web_fp_via_jspb")?Object.assign({},b):b;V("use_cfr_monitor")&&io(a,b);if(V("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)Mj(a,void 0,"POST",e);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Mj(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new $a({url:a});if(h.i&&h.h||h.l){var k=Xb(a.match(Wb)[5]||null);var l=!(!k||!k.endsWith("/aclk")||"1"!==cc(a,"ri"));break b}}catch(n){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(n){}m=!1}c=m?!0:!1}else c=!1;c||Un(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),jn(a,b.postBody,b,Jj)):jn(a,JSON.stringify(b.postParams),b,Rj):
Jj(a,b)}
function io(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Wn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Wn().requestComplete(a,!0);d(e,f)}}
;var jo=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};C("ytNetworklessLoggingInitializationOptions",jo);function ko(a){var b=this;this.config_=null;a?this.config_=a:Pm()&&(this.config_=Qm());pk(function(){pn(b)},5E3)}
ko.prototype.isReady=function(){!this.config_&&Pm()&&(this.config_=Qm());return!!this.config_};
function qn(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||V("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=nn(b,c,l,k)),y)){var E=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(R,Ba){on(y);E(R,Ba)};
c.onFetchSuccess=function(R,Ba){on(y);P(R,Ba)}}try{if(x&&d.retry&&!d.jc.bypassNetworkless)g.method="POST",d.jc.writeThenSend?go().writeThenSend(p,g):go().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));jn(p,U,g,Jj)}else jn(p,JSON.stringify(g.postParams),g,Rj);else V("web_all_payloads_via_jspb")?Jj(p,g):Rj(p,g)}catch(R){if("InvalidAccessError"==R.name)y&&(on(y),y=0),dj(Error("An extension is blocking network request."));else throw R;}y&&pk(function(){pn(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&dj(new lk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new lk("innertube xhrclient not ready",b,c,d);cj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wc)&&(h=f);var k=a.config_.Yc||!1,l=Zm(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Uc+"/"+b,n={alt:"json"},r=a.config_.Xc&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Tc);var p=yj(""+h+m,n||{},!0);B("ytNetworklessLoggingInitializationOptions")&&
jo.isNwlInitialized?qm().then(function(x){e(x)}):e(!1)}
;function lo(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var mo=A.ytPubsubPubsubInstance||new M,no=A.ytPubsubPubsubSubscribedKeys||{},oo=A.ytPubsubPubsubTopicToKeys||{},po=A.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.jb;M.prototype.publish=M.prototype.Wa;M.prototype.clear=M.prototype.clear;C("ytPubsubPubsubInstance",mo);C("ytPubsubPubsubTopicToKeys",oo);C("ytPubsubPubsubIsSynchronous",po);C("ytPubsubPubsubSubscribedKeys",no);var qo=Symbol("injectionDeps");function ro(){this.key=Mm}
function so(){this.h=new Map;this.g=new Map}
so.prototype.resolve=function(a){return a instanceof ro?to(this,a.key,[],!0):to(this,a,[])};
function to(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.md)var e=d.md;else if(d.ld)e=d[qo]?uo(a,d[qo],c):[],e=d.ld.apply(d,ia(e));else if(d.kd){e=d.kd;var f=e[qo]?uo(a,e[qo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Zd||a.g.set(b,e);return e}
function uo(a,b,c){return b?b.map(function(d){return d instanceof ro?to(a,d.key,c,!0):to(a,d,c)}):[]}
;var vo;function wo(){vo||(vo=new so);return vo}
;function xo(){this.store={};this.g={}}
xo.prototype.storePayload=function(a,b){a=yo(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
xo.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=zo(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
xo.prototype.extractMatchingEntries=function(a){a=zo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
xo.prototype.getSequenceCount=function(a){a=zo(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function zo(a,b){var c=yo(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&yo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ao(b.auth,g[0])){var h=b.isJspb;Ao(void 0===h?"undefined":h?"true":"false",g[1])&&Ao(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Ao(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Ao(a,b){return void 0===a||"undefined"===a?!0:a===b}
xo.prototype.getSequenceCount=xo.prototype.getSequenceCount;xo.prototype.extractMatchingEntries=xo.prototype.extractMatchingEntries;xo.prototype.smartExtractMatchingEntries=xo.prototype.smartExtractMatchingEntries;xo.prototype.storePayload=xo.prototype.storePayload;function yo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Bo=fj("initial_gel_batch_timeout",2E3),Co=fj("gel_queue_timeout_max_ms",6E4),Do=Math.pow(2,16)-1,Eo=void 0;function Fo(){this.i=this.g=this.h=0}
var Go=new Fo,Ho=new Fo,Io=new Fo,Jo=new Fo,Ko,Lo=!0,Mo=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Mo);var No=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",No);var Oo={};function Po(){var a=B("yt.logging.ims");a||(a=new xo,C("yt.logging.ims",a));return a}
function Qo(a,b){if("log_event"===a.endpoint){Ro(a);var c=So(a);a:{var d=Object.keys(a.payload);d=u(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,Mn[e]){d=e;break a}d=void 0}d=To(d||"");400===d?Uo(a,b):(Oo[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Po().storePayload(d,a.payload),Vo(b,c,!1,d))}}
function Wo(a,b,c){if("log_event"===b.endpoint){Ro(void 0,b);var d=So(b,!0),e=To(a);400===e?Xo(a,b,c):(Oo[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Po().storePayload(a,b.payload.toJSON()),Vo(c,d,!0,a))}}
function Vo(a,b,c,d){function e(){Yo({writeThenSend:!0},V("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;a&&(Eo=new a);a=fj("tvhtml5_logging_max_batch_ads_fork")||fj("web_logging_max_batch")||100;var f=Y(),g=Zo(c,d.tier),h=g.i,k=0;d&&(k=Po().getSequenceCount(d));1E3<=k&&V("web_logging_max_batch_hard_limit")?e():k>=a?Ko||(Ko=$o(function(){e();Ko=void 0},0)):10<=f-h&&(ap(c,d.tier),g.i=f)}
function Uo(a,b){if("log_event"===a.endpoint){Ro(a);var c=So(a),d=new Map;d.set(c,[a.payload]);b&&(Eo=new b);return new ag(function(e,f){Eo&&Eo.isReady()?bp(d,Eo,e,f,{bypassNetworkless:!0},!0):e()})}}
function Xo(a,b,c){if("log_event"===b.endpoint){Ro(void 0,b);a=So(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(Eo=new c);return new ag(function(e){Eo&&Eo.isReady()?cp(d,Eo,e,{bypassNetworkless:!0},!0):e()})}}
function So(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ri;c.videoId?kd(d,1,td,$c(c.videoId)):c.playlistId&&kd(d,2,td,$c(c.playlistId));No[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Mo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Yo(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(e,f){var g=Zo(c,d);dp(g.h);dp(g.g);g.g=0;Eo&&Eo.isReady()?void 0===d&&V("enable_web_tiered_gel")?ep(e,f,a,b,c,300):ep(e,f,a,b,c,d):(ap(c,d),e())})}
function ep(a,b,c,d,e,f){var g=Eo;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map,k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=V("enable_web_tiered_gel")?Po().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Po().extractMatchingEntries(m),h.set(d,b),cp(h,g,a,c)):(h=V("enable_web_tiered_gel")?Po().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Po().extractMatchingEntries(m),k.set(d,h),bp(k,g,a,b,c));else if(e){b=u(Object.keys(Oo));
for(d=b.next();!d.done;d=b.next())k=d.value,f=V("enable_web_tiered_gel")?Po().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Po().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&h.set(k,f),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete Oo[k];cp(h,g,a,c)}else{h=u(Object.keys(Oo));for(d=h.next();!d.done;d=h.next())l=d.value,m=V("enable_web_tiered_gel")?Po().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},{isJspb:!1,
cttAuthInfo:l}],sizeLimit:1E3}):Po().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<m.length&&k.set(l,m),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete Oo[l];bp(k,g,a,b,c)}}
function ap(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Zo(a,b),d=c===Jo||c===Io?5E3:Co;V("web_gel_timeout_cap")&&!c.g&&(d=$o(function(){Yo({writeThenSend:!0},void 0,a,b)},d),c.g=d);
dp(c.h);d=T("LOGGING_BATCH_TIMEOUT",fj("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&Lo&&(d=Bo);d=$o(function(){Yo({writeThenSend:!0},void 0,a,b)},d);
c.h=d}
function bp(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size;a=u(a);for(var k=a.next(),l={};!k.done;l={lb:l.lb,Da:l.Da,Ya:l.Ya,nb:l.nb,mb:l.mb},k=a.next()){var m=u(k.value);k=m.next().value;m=m.next().value;l.Da=nb({context:Rm(b.config_||Qm())});if(!Ma(m)&&!V("throw_err_when_logevent_malformed_killswitch")){d();break}l.Da.events=m;(m=Mo[k])&&fp(l.Da,k,m);delete Mo[k];l.Ya="visitorOnlyApprovedKey"===k;gp(l.Da,g,l.Ya);hp(e);l.nb=function(n){V("update_log_event_config")&&af.oa(function(){return z(function(r){return w(r,
ip(n),0)})});
h--;h||c()};
l.lb=0;l.mb=function(n){return function(){n.lb++;if(e.bypassNetworkless&&1===n.lb)try{qn(b,"log_event",n.Da,jp({writeThenSend:!0},n.Ya,n.nb,n.mb,f)),Lo=!1}catch(r){cj(r),d()}h--;h||c()}}(l);
try{qn(b,"log_event",l.Da,jp(e,l.Ya,l.nb,l.mb,f)),Lo=!1}catch(n){cj(n),d()}}}
function cp(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Si;var n=Ym(b.config_||Qm());I(k,Ai,1,n);m=m?kp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())qd(k,3,Oi,n.value);(m=No[l])&&lp(k,l,m);delete No[l];l="visitorOnlyApprovedKey"===l;mp(k,f,l);hp(d);m={startTime:Y(),ticks:{},infos:{}};k=Fd(k);m.ticks.geljspc=Y();V("log_jspb_serialize_latency")&&an("gel_jspb_serialize",
m,{sampleRate:.1});l=jp(d,l,function(r){V("update_log_event_config")&&af.oa(function(){return z(function(p){return w(p,ip(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;qn(b,"log_event","",l);Lo=!1}}
function hp(a){V("always_send_and_write")&&(a.writeThenSend=!1)}
function jp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,jc:a,dangerousLogToVisitorSession:b,Sd:!!e,headers:{},postBodyFormat:"",postBody:"",compress:V("compress_gel")||V("compress_gel_lr")};np()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function gp(a,b,c){np()||(a.requestTimeMs=String(b));V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=op(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mp(a,b,c){np()||H(a,2,b);if(!c&&(b=T("EVENT_ID"))){c=op();var d=new Qi;J(d,1,b);H(d,2,c);I(a,Qi,5,d)}}
function op(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Do/2));a++;a>Do&&(a=1);Xi("BATCH_CLIENT_COUNTER",a);return a}
function fp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lp(a,b,c){if(sd(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,Ri,4,c);a=nd(a,Ai,1)||new Ai;c=nd(a,zi,3)||new zi;var e=new yi;J(e,2,b);H(e,1,d);qd(c,12,yi,e);I(a,zi,3,c)}
function kp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Oi(a[c]))}catch(d){cj(new lk("Transport failed to deserialize "+String(a[c])))}return b}
function Ro(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}C("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function np(){return V("use_request_time_ms_header")||V("lr_use_request_time_ms_header")}
function $o(a,b){return V("transport_use_scheduler")?pk(a,b):pj(a,b)}
function dp(a){V("transport_use_scheduler")?af.Na(a):window.clearTimeout(a)}
function ip(a){var b,c,d,e,f,g,h,k,l,m;return z(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[pi.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[oi.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=wo().resolve(new ro))?g?e?w(n,Nm(m,g,e),2):w(n,Nm(m,g),2):n.D(2):n.return()}return l?h?w(n,Om(m,l,h),0):w(n,Om(m,l),0):n.D(0)})}
function Zo(a,b){b=void 0===b?200:b;return a?300===b?Jo:Ho:300===b?Io:Go}
function To(a){if(V("enable_web_tiered_gel")){a=Mn[a||""];var b,c;if(null==wo().resolve(new ro))var d=void 0;else{var e=null!=(d=B("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return pp(b[c].tier);return 200}}
function pp(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var qp=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",qp);
function rp(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=lo();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};V("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:sp(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete qp[d.sequenceGroup]);(d.sendIsolatedPayload?Uo:Qo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function tp(a){Yo(void 0,void 0,void 0===a?!1:a)}
function sp(a){qp[a]=a in qp?qp[a]+1:0;return qp[a]}
;var up=[];function vp(a,b,c){c=void 0===c?{}:c;var d=ko;T("ytLoggingEventsDefaultDisabled",!1)&&ko===ko&&(d=null);V("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=lo(),c.timestamp=Y()),up.push({lc:a,payload:b,options:c})):rp(a,b,d,c)}
;var wp=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",wp);function xp(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:ko;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());H(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Ni;if(c.lact)H(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)H(e,1,-1);else{var f=lo();H(e,1,isFinite(f)?f:-1)}if(V("log_sequence_info_on_gel_web")&&c.sequenceGroup){f=c.sequenceGroup;var g=sp(f),h=new Mi;H(h,2,g);J(h,1,f);I(e,Mi,3,h);c.endOfSequence&&delete wp[c.sequenceGroup]}I(b,
Ni,33,e);(c.sendIsolatedPayload?Xo:Wo)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var yp=new Set,zp=0,Ap=0,Bp=0,Cp=[],Dp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ep(a){try{yp.add(a.message)}catch(b){}zp++}
function Fp(){for(var a=u(Dp),b=a.next();!b.done;b=a.next()){var c=Nb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Gp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Yi())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Jj(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Hp(){var a;return z(function(b){return(a=uf())?b.return(a.then(function(c){c=Fd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Dc(d,3)})):b.return(Promise.resolve(null))})}
;var Ip={};function Jp(a){return Ip[a]||(Ip[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Kp={},Lp=[],rg=new M,Mp={};function Np(){for(var a=u(Lp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Op(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Jp(b)]:a.getAttribute("data-"+b):null;return c}
function Pp(a){rg.Wa.apply(rg,arguments)}
;function Qp(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Rp(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Sp(a,b,c){Tp||(Tp={},Up=new Set,oj(window,"message",function(d){a:if(Up.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Tp[e.id];f&&d.origin===f.Fc&&(d=f.nd,d.H=!0,d.H&&(db(d.A,d.sendMessage,d),d.A.length=0),d.Qb(e))}}));
a=String(Rp(a,"host"));Tp[c]={nd:b,Fc:a};Up.add(a)}
var Tp=null,Up=null;var Vp=window;
function Wp(a,b,c){this.u=this.g=this.h=null;this.i=0;this.H=!1;this.A=[];this.l=null;this.aa={};if(!a)throw Error("YouTube player element ID required.");this.id=Pa(this);this.P=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Zb(a.src):"https://www.youtube.com"),this.h=new Qp(b),c||(b=Xp(this,a),this.u=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Pa(this.g)),Kp[this.g.id]=this,window.postMessage){this.l=
new M;Yp(this);b=Rp(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Mp)Mp.hasOwnProperty(e)&&Zp(this,e)}}
q=Wp.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.Qb=function(a){$p(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);aq(this,a);return this};
function Zp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.P===b[0]&&aq(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Kp[this.g.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.u){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.u,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Tp&&(Tp[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&mj(c);this.u=this.g=null};
q.Ub=function(){return{}};
function bq(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.A.push(b)}
function $p(a,b,c){a.l.i||(c={target:a,data:c},a.l.Wa(b,c),Pp(a.P+"."+b,c))}
function Xp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Rp(a.h,"title"));(b=Rp(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Rp(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.Ub();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=cc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Rp(a.h,"host")+("/embed/"+Rp(a.h,"videoId"))+"?"+ac(g);Vp.yt_embedsEnableUaChProbe?Hp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ud(l.href).toString();Qd(c,Vd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Vp.yt_embedsEnableIframeSrcWithIntent?(Qd(c,Vd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.mc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Yp(a){Sp(a.h,a,a.id);a.i=qj(a.mc.bind(a));oj(a.g,"load",function(){window.clearInterval(a.i);a.i=qj(a.mc.bind(a))})}
function aq(a,b){a.aa[b]||(a.aa[b]=!0,bq(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Zb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(kc){if(kc.name&&"SyntaxError"===kc.name){if(!(kc.message&&0<kc.message.indexOf("target origin ''"))){var e=void 0,f=kc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(V("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=zp)){var m=void 0,n=void 0,r=f,p=e,x=Kd(r),y=x.message||"Unknown Error",
E=x.name||"UnknownError",P=x.stack||r.h||"Not available";if(P.startsWith(E+": "+y)){var U=P.split("\n");U.shift();P=U.join("\n")}var R=x.lineNumber||"Not available",Ba=x.fileName||"Not available",Mc=P,Oa=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var Ca=0;Ca<r.args.length&&!(Oa=bk(r.args[Ca],"params."+Ca,p,Oa),500<=Oa);Ca++);else if(r.hasOwnProperty("params")&&r.params){var ea=r.params;if("object"===typeof r.params)for(n in ea){if(ea[n]){var ma="params."+n,na=dk(ea[n]);p[ma]=na;Oa+=
ma.length+na.length;if(500<Oa)break}}else p.params=dk(ea)}if(Cp.length)for(var da=0;da<Cp.length&&!(Oa=bk(Cp[da],"params.context."+da,p,Oa),500<=Oa);da++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:y,name:E,lineNumber:R,fileName:Ba,stack:Mc,params:p,sampleWeight:1},tl=Number(r.columnNumber);isNaN(tl)||(W.lineNumber=W.lineNumber+":"+tl);if("IGNORED"===r.level)m=0;else a:{for(var ul=Xj(),vl=u(ul.za),Sg=vl.next();!Sg.done;Sg=vl.next()){var wl=
Sg.value;if(W.message&&W.message.match(wl.Vd)){m=wl.weight;break a}}for(var xl=u(ul.wa),Tg=xl.next();!Tg.done;Tg=xl.next()){var yl=Tg.value;if(yl.Ic(W)){m=yl.weight;break a}}m=1}W.sampleWeight=m;for(var zl=u(Sj),Ug=zl.next();!Ug.done;Ug=zl.next()){var Vg=Ug.value;if(Vg.xb[W.name])for(var Al=u(Vg.xb[W.name]),Wg=Al.next();!Wg.done;Wg=Al.next()){var Bl=Wg.value,qe=W.message.match(Bl.regexp);if(qe){W.params["params.error.original"]=qe[0];for(var Xg=Bl.groups,Cl={},lc=0;lc<Xg.length;lc++)Cl[Xg[lc]]=qe[lc+
1],W.params["params.error."+Xg[lc]]=qe[lc+1];W.message=Vg.Ib(Cl);break}}}W.params||(W.params={});var Dl=Xj();W.params["params.errorServiceSignature"]="msg="+Dl.za.length+"&cb="+Dl.wa.length;W.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(W.params["params.fconst"]="true");var ad=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(ad);
if(0!==ad.sampleWeight&&!yp.has(ad.message))if(h&&V("web_enable_error_204")){var El=ad;Gp(void 0===g?"ERROR":g,El);Ep(El)}else{var Yg=void 0,Zg=void 0,Fl=void 0,Gl=void 0,$g=void 0,N=ad,Gb=g;Gb=void 0===Gb?"ERROR":Gb;if("ERROR"===Gb){Yj.Wa("handleError",N);if(V("record_app_crashed_web")&&0===Bp&&1===N.sampleWeight)if(Bp++,V("errors_via_jspb")){var hq=new Li;$g=H(hq,1,1);if(!V("report_client_error_with_app_crash_ks")){var iq=new Ki,jq=new Ji,kq=new Ii,lq=new Hi;var mq=J(lq,1,N.message);var nq=I(kq,
Hi,3,mq);Gl=I(jq,Ii,5,nq);Fl=I(iq,Ji,9,Gl);I($g,Ki,4,Fl)}var Hl=V("jspb_sparse_encoded_pivot")?new Oi([{}]):new Oi;pd(Hl,Li,20,Pi,$g);xp("appCrashed",Hl)}else{var Il={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};V("report_client_error_with_app_crash_ks")||(Il.systemHealth={crashData:{clientError:{logMessage:{message:N.message}}}});vp("appCrashed",Il)}Ap++}else"WARNING"===Gb&&Yj.Wa("handleWarning",N);if(V("kevlar_gel_error_routing"))a:{var bd=Gb;if(V("errors_via_jspb")){if(Fp())Zg=void 0;else{var mc=new Ei;
J(mc,1,N.stack);N.fileName&&J(mc,4,N.fileName);var Ya=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];if(0!==Ya.length)if(1===Ya.length&&!isNaN(Number(Ya[0]))){var oq=mc,Jl=Number(Ya[0]);La(Jl);H(oq,2,Jl)}else if(2===Ya.length&&!isNaN(Number(Ya[0]))&&!isNaN(Number(Ya[1]))){var pq=mc,Kl=Number(Ya[0]);La(Kl);H(pq,2,Kl);var qq=mc,Ll=Number(Ya[1]);La(Ll);H(qq,3,Ll)}var Hb=new Hi;J(Hb,1,N.message);J(Hb,3,N.name);var rq=Hb,Ml=N.sampleWeight;La(Ml);H(rq,6,Ml);"ERROR"===bd?H(Hb,2,2):"WARNING"===
bd?H(Hb,2,1):H(Hb,2,0);var ah=new Fi;H(ah,1,Zc(!0));pd(ah,Ei,3,Gi,mc);var Ib=new Di;J(Ib,3,window.location.href);for(var Nl=T("FEXP_EXPERIMENTS",[]),bh=0;bh<Nl.length;bh++){var sq=Nl[bh],ch=Ib.o,re=G(ch);Xc(re);jd(ch,re,5,2,!1).push(sq);re&512&&Kc(ch,re&-513)}var dh=Yi();if(!Zi()&&dh)for(var Ol=u(Object.keys(dh)),Jb=Ol.next();!Jb.done;Jb=Ol.next()){var Pl=Jb.value,eh=new Ci;J(eh,1,Pl);J(eh,2,String(dh[Pl]));qd(Ib,4,Ci,eh)}var fh=N.params;if(fh){var Ql=u(Object.keys(fh));for(Jb=Ql.next();!Jb.done;Jb=
Ql.next()){var Rl=Jb.value,gh=new Ci;J(gh,1,"client."+Rl);J(gh,2,String(fh[Rl]));qd(Ib,4,Ci,gh)}}var Sl=T("SERVER_NAME"),Tl=T("SERVER_VERSION");if(Sl&&Tl){var hh=new Ci;J(hh,1,"server.name");J(hh,2,Sl);qd(Ib,4,Ci,hh);var ih=new Ci;J(ih,1,"server.version");J(ih,2,Tl);qd(Ib,4,Ci,ih)}var se=new Ii;I(se,Di,1,Ib);I(se,Fi,2,ah);I(se,Hi,3,Hb);Zg=se}var Ul=Zg;if(!Ul)break a;var Vl=V("jspb_sparse_encoded_pivot")?new Oi([{}]):new Oi;pd(Vl,Ii,163,Pi,Ul);xp("clientError",Vl)}else{var Fa=void 0;Fa=void 0===Fa?
{}:Fa;if(Fp())Yg=void 0;else{var cd={stackTrace:N.stack};N.fileName&&(cd.filename=N.fileName);var Za=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==Za.length&&(1!==Za.length||isNaN(Number(Za[0]))?2!==Za.length||isNaN(Number(Za[0]))||isNaN(Number(Za[1]))||(cd.lineNumber=Number(Za[0]),cd.columnNumber=Number(Za[1])):cd.lineNumber=Number(Za[0]));var jh={level:"ERROR_LEVEL_UNKNOWN",message:N.message,errorClassName:N.name,sampleWeight:N.sampleWeight};"ERROR"===bd?jh.level="ERROR_LEVEL_ERROR":
"WARNING"===bd&&(jh.level="ERROR_LEVEL_WARNNING");var tq={isObfuscated:!0,browserStackInfo:cd};Fa.pageUrl=window.location.href;Fa.kvPairs=[];T("FEXP_EXPERIMENTS")&&(Fa.experimentIds=T("FEXP_EXPERIMENTS"));var kh=Yi();if(!Zi()&&kh)for(var Wl=u(Object.keys(kh)),Kb=Wl.next();!Kb.done;Kb=Wl.next()){var Xl=Kb.value;Fa.kvPairs.push({key:Xl,value:String(kh[Xl])})}var lh=N.params;if(lh){var Yl=u(Object.keys(lh));for(Kb=Yl.next();!Kb.done;Kb=Yl.next()){var Zl=Kb.value;Fa.kvPairs.push({key:"client."+Zl,value:String(lh[Zl])})}}var $l=
T("SERVER_NAME"),am=T("SERVER_VERSION");$l&&am&&(Fa.kvPairs.push({key:"server.name",value:$l}),Fa.kvPairs.push({key:"server.version",value:am}));Yg={errorMetadata:Fa,stackTrace:tq,logMessage:jh}}var bm=Yg;if(!bm)break a;vp("clientError",bm)}if("ERROR"===bd||V("errors_flush_gel_always_killswitch"))b:{if(V("web_fp_via_jspb")){var te=!0;te=void 0===te?!1:te;var cm=up;up=[];if(cm)for(var dm=u(cm),mh=dm.next();!mh.done;mh=dm.next()){var nc=mh.value;te?rp(nc.lc,nc.payload,ko,nc.options):vp(nc.lc,nc.payload,
nc.options)}tp(!0);if(!V("web_fp_via_jspb_and_json"))break b}tp()}}V("suppress_error_204_logging")||Gp(Gb,N);Ep(N)}}}}}else throw kc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function cq(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function dq(a){return 0===a.search("get")||0===a.search("is")}
;function eq(a,b){Wp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ja={};this.playerInfo={};this.videoTitle=""}
v(eq,Wp);q=eq.prototype;q.Ub=function(){var a=Rp(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Rp(this.h,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Qb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.ja[c]=a[c]);break;case "infoDelivery":fq(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ja={},gq(this,a.apiInterface),fq(this,a));break;default:$p(this,b,a)}};
function fq(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Rp(a.h,"title"))))}}
function gq(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:cq(c)?this[c]=function(){this.playerInfo={};
this.ja={};bq(this,c,arguments);return this}:dq(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){bq(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Rp(this.h,"host")+("/embed/"+Rp(this.h,"videoId")),b=Number(Rp(this.h,"width")),c=Number(Rp(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Vb(a);d=Vb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ja.namespaces?a?this.ja[a]?this.ja[a].options||[]:[]:this.ja.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ja.namespaces&&a&&b&&this.ja[a])return this.ja[a][b]};
function uq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Op(a,"videoid");b&&(b={videoId:b,width:Op(a,"width"),height:Op(a,"height")},new eq(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Kp[a]});
C("YT.scan",Np);C("YT.subscribe",function(a,b,c){rg.subscribe(a,b,c);Mp[a]=!0;for(var d in Kp)Kp.hasOwnProperty(d)&&Zp(Kp[d],a)});
C("YT.unsubscribe",function(a,b,c){qg(a,b,c)});
C("YT.Player",eq);Wp.prototype.destroy=Wp.prototype.destroy;Wp.prototype.setSize=Wp.prototype.setSize;Wp.prototype.getIframe=Wp.prototype.getIframe;Wp.prototype.addEventListener=Wp.prototype.addEventListener;eq.prototype.getVideoEmbedCode=eq.prototype.getVideoEmbedCode;eq.prototype.getOptions=eq.prototype.getOptions;eq.prototype.getOption=eq.prototype.getOption;
Lp.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);db(gb(a,b),uq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Np();var vq=A.onYTReady;vq&&vq();var wq=A.onYouTubeIframeAPIReady;wq&&wq();var xq=A.onYouTubePlayerAPIReady;xq&&xq();}).call(this);
