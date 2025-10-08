const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TailwindPluginTypographyDemo-CHptThGD.js","assets/TailwindPluginTypographyDemo-WiajYEHw.css","assets/TailwindHomePageCardDemo-B32KRnRx.js","assets/Kodak_Tmax400_007-BMp-GGxZ.js","assets/vue-DnJv9Gge.js","assets/TailwindMemberCardDemo-DjxMhmFi.js","assets/TailwindArticleCardDemo-CEhv8Bq9.js","assets/TailwindMessageBoardDemo-C5IQ7mOS.js","assets/TailwindDoubleSidedMultipleCardsDemo-8wqXbUF_.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=e=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return n},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function u(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var d={},f=[],p=()=>{},m=()=>!1,h=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),g=e=>e.startsWith(`onUpdate:`),_=Object.assign,v=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,b=(e,t)=>y.call(e,t),x=Array.isArray,S=e=>k(e)===`[object Map]`,C=e=>k(e)===`[object Set]`,w=e=>typeof e==`function`,T=e=>typeof e==`string`,E=e=>typeof e==`symbol`,D=e=>typeof e==`object`&&!!e,ee=e=>(D(e)||w(e))&&w(e.then)&&w(e.catch),O=Object.prototype.toString,k=e=>O.call(e),te=e=>k(e).slice(8,-1),A=e=>k(e)===`[object Object]`,j=e=>T(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,M=u(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),N=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,P=N(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,ie=N(e=>e.replace(re,`-$1`).toLowerCase()),ae=N(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=N(e=>e?`on${ae(e)}`:``),F=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ce=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},le=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ue=e=>{let t=T(e)?Number(e):NaN;return isNaN(t)?e:t},de,fe=()=>de||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function pe(e){if(x(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=T(r)?_e(r):pe(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(T(e)||D(e))return e}var me=/;(?![^(]*\))/g,he=/:([^]+)/,ge=/\/\*[^]*?\*\//g;function _e(e){let t={};return e.replace(ge,``).split(me).forEach(e=>{if(e){let n=e.split(he);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ve(e){let t=``;if(T(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){let r=ve(e[n]);r&&(t+=r+` `)}else if(D(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ye=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,be=u(ye);ye+``;function xe(e){return!!e||e===``}var Se=e=>!!(e&&e.__v_isRef===!0),Ce=e=>T(e)?e:e==null?``:x(e)||D(e)&&(e.toString===O||!w(e.toString))?Se(e)?Ce(e.value):JSON.stringify(e,we,2):String(e),we=(e,t)=>Se(t)?we(e,t.value):S(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Te(t,r)+` =>`]=n,e),{})}:C(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Te(e))}:E(t)?Te(t):D(t)&&!x(t)&&!A(t)?String(t):t,Te=(e,t=``)=>E(e)?`Symbol(${e.description??t})`:e,Ee,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ee;try{return Ee=this,e()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return Ee}var I,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ke(this),Le(this);let e=I,t=L;I=this,L=!0;try{return this.fn()}finally{Re(this),I=e,L=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,Ke(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qe)||(e.globalVersion=qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=I,r=L;I=e,L=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||F(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{I=n,L=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var L=!0,Ue=[];function We(){Ue.push(L),L=!1}function Ge(){let e=Ue.pop();L=e===void 0?!0:e}function Ke(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=I;I=void 0;try{t()}finally{I=e}}}var qe=0,Je=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ye=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!I||!L||I===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==I)t=this.activeLink=new Je(I,this),I.deps?(t.prevDep=I.depsTail,I.depsTail.nextDep=t,I.depsTail=t):I.deps=I.depsTail=t,Xe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=I.depsTail,t.nextDep=void 0,I.depsTail.nextDep=t,I.depsTail=t,I.deps===t&&(I.deps=e)}return t}trigger(e){this.version++,qe++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Xe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Xe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ze=new WeakMap,Qe=Symbol(``),$e=Symbol(``),et=Symbol(``);function R(e,t,n){if(L&&I){let t=Ze.get(e);t||Ze.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ye),r.map=t,r.key=n),r.track()}}function tt(e,t,n,r,i,a){let o=Ze.get(e);if(!o){qe++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=x(e),a=i&&j(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===et||!E(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(et)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Qe)),S(e)&&s(o.get($e)));break;case`delete`:i||(s(o.get(Qe)),S(e)&&s(o.get($e)));break;case`set`:S(e)&&s(o.get(Qe));break}}Ie()}function nt(e){let t=z(e);return t===e?t:(R(t,`iterate`,et),Vt(e)?t:t.map(B))}function rt(e){return R(e=z(e),`iterate`,et),e}var it={__proto__:null,[Symbol.iterator](){return at(this,Symbol.iterator,B)},concat(...e){return nt(this).concat(...e.map(e=>x(e)?nt(e):e))},entries(){return at(this,`entries`,e=>(e[1]=B(e[1]),e))},every(e,t){return st(this,`every`,e,t,void 0,arguments)},filter(e,t){return st(this,`filter`,e,t,e=>e.map(B),arguments)},find(e,t){return st(this,`find`,e,t,B,arguments)},findIndex(e,t){return st(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return st(this,`findLast`,e,t,B,arguments)},findLastIndex(e,t){return st(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return st(this,`forEach`,e,t,void 0,arguments)},includes(...e){return lt(this,`includes`,e)},indexOf(...e){return lt(this,`indexOf`,e)},join(e){return nt(this).join(e)},lastIndexOf(...e){return lt(this,`lastIndexOf`,e)},map(e,t){return st(this,`map`,e,t,void 0,arguments)},pop(){return ut(this,`pop`)},push(...e){return ut(this,`push`,e)},reduce(e,...t){return ct(this,`reduce`,e,t)},reduceRight(e,...t){return ct(this,`reduceRight`,e,t)},shift(){return ut(this,`shift`)},some(e,t){return st(this,`some`,e,t,void 0,arguments)},splice(...e){return ut(this,`splice`,e)},toReversed(){return nt(this).toReversed()},toSorted(e){return nt(this).toSorted(e)},toSpliced(...e){return nt(this).toSpliced(...e)},unshift(...e){return ut(this,`unshift`,e)},values(){return at(this,`values`,B)}};function at(e,t,n){let r=rt(e),i=r[t]();return r!==e&&!Vt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ot=Array.prototype;function st(e,t,n,r,i,a){let o=rt(e),s=o!==e&&!Vt(e),c=o[t];if(c!==ot[t]){let t=c.apply(e,a);return s?B(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,B(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ct(e,t,n,r){let i=rt(e),a=n;return i!==e&&(Vt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,B(r),i,e)}),i[t](a,...r)}function lt(e,t,n){let r=z(e);R(r,`iterate`,et);let i=r[t](...n);return(i===-1||i===!1)&&Ht(n[0])?(n[0]=z(n[0]),r[t](...n)):i}function ut(e,t,n=[]){We(),Fe();let r=z(e)[t].apply(e,n);return Ie(),Ge(),r}var dt=u(`__proto__,__v_isRef,__isVue`),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(E));function pt(e){E(e)||(e=String(e));let t=z(this);return R(t,`has`,e),t.hasOwnProperty(e)}var mt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Mt:jt:i?At:kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=x(e);if(!r){let e;if(a&&(e=it[t]))return e;if(t===`hasOwnProperty`)return pt}let o=Reflect.get(e,t,V(e)?e:n);if((E(t)?ft.has(t):dt(t))||(r||R(e,`get`,t),i))return o;if(V(o)){let e=a&&j(t)?o:o.value;return r&&D(e)?Lt(e):e}return D(o)?r?Lt(o):Ft(o):o}},ht=class extends mt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){let t=Bt(i);if(!Vt(n)&&!Bt(n)&&(i=z(i),n=z(n)),!x(e)&&V(i)&&!V(n))return t||(i.value=n),!0}let a=x(e)&&j(t)?Number(t)<e.length:b(e,t),o=Reflect.set(e,t,n,V(e)?e:r);return e===z(r)&&(a?F(n,i)&&tt(e,`set`,t,n,i):tt(e,`add`,t,n)),o}deleteProperty(e,t){let n=b(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&tt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!E(t)||!ft.has(t))&&R(e,`has`,t),n}ownKeys(e){return R(e,`iterate`,x(e)?`length`:Qe),Reflect.ownKeys(e)}},gt=class extends mt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},_t=new ht,vt=new gt,yt=new ht(!0),bt=e=>e,xt=e=>Reflect.getPrototypeOf(e);function St(e,t,n){return function(...r){let i=this.__v_raw,a=z(i),o=S(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?bt:t?Wt:B;return!t&&R(a,`iterate`,c?$e:Qe),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ct(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function wt(e,t){let n={get(n){let r=this.__v_raw,i=z(r),a=z(n);e||(F(n,a)&&R(i,`get`,n),R(i,`get`,a));let{has:o}=xt(i),s=t?bt:e?Wt:B;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&R(z(t),`iterate`,Qe),t.size},has(t){let n=this.__v_raw,r=z(n),i=z(t);return e||(F(t,i)&&R(r,`has`,t),R(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=z(a),s=t?bt:e?Wt:B;return!e&&R(o,`iterate`,Qe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return _(n,e?{add:Ct(`add`),set:Ct(`set`),delete:Ct(`delete`),clear:Ct(`clear`)}:{add(e){!t&&!Vt(e)&&!Bt(e)&&(e=z(e));let n=z(this);return xt(n).has.call(n,e)||(n.add(e),tt(n,`add`,e,e)),this},set(e,n){!t&&!Vt(n)&&!Bt(n)&&(n=z(n));let r=z(this),{has:i,get:a}=xt(r),o=i.call(r,e);o||=(e=z(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?F(n,s)&&tt(r,`set`,e,n,s):tt(r,`add`,e,n),this},delete(e){let t=z(this),{has:n,get:r}=xt(t),i=n.call(t,e);i||=(e=z(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&tt(t,`delete`,e,void 0,a),o},clear(){let e=z(this),t=e.size!==0,n=e.clear();return t&&tt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=St(r,e,t)}),n}function Tt(e,t){let n=wt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap;function Nt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Pt(e){return e.__v_skip||!Object.isExtensible(e)?0:Nt(te(e))}function Ft(e){return Bt(e)?e:Rt(e,!1,_t,Et,kt)}function It(e){return Rt(e,!1,yt,Dt,At)}function Lt(e){return Rt(e,!0,vt,Ot,jt)}function Rt(e,t,n,r,i){if(!D(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Pt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Vt(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function z(e){let t=e&&e.__v_raw;return t?z(t):e}function Ut(e){return!b(e,`__v_skip`)&&Object.isExtensible(e)&&ce(e,`__v_skip`,!0),e}var B=e=>D(e)?Ft(e):e,Wt=e=>D(e)?Lt(e):e;function V(e){return e?e.__v_isRef===!0:!1}function Gt(e){return Kt(e,!1)}function Kt(e,t){return V(e)?e:new qt(e,t)}var qt=class{constructor(e,t){this.dep=new Ye,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:z(e),this._value=t?e:B(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Vt(e)||Bt(e);e=n?e:z(e),F(e,t)&&(this._rawValue=e,this._value=n?e:B(e),this.dep.trigger())}};function Jt(e){return V(e)?e.value:e}var Yt={get:(e,t,n)=>t===`__v_raw`?e:Jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return V(i)&&!V(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return zt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ye(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&I!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Qt(e,t,n=!1){let r,i;return w(e)?r=e:(r=e.get,i=e.set),new Zt(r,i,n)}var $t={},en=new WeakMap,tn=void 0;function nn(e,t=!1,n=tn){if(n){let t=en.get(n);t||en.set(n,t=[]),t.push(e)}}function rn(e,t,n=d){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Vt(e)||i===!1||i===0?an(e,1):an(e),u,f,m,h,g=!1,_=!1;if(V(e)?(f=()=>e.value,g=Vt(e)):zt(e)?(f=()=>l(e),g=!0):x(e)?(_=!0,g=e.some(e=>zt(e)||Vt(e)),f=()=>e.map(e=>{if(V(e))return e.value;if(zt(e))return l(e);if(w(e))return c?c(e,2):e()})):f=w(e)?t?c?()=>c(e,2):e:()=>{if(m){We();try{m()}finally{Ge()}}let t=tn;tn=u;try{return c?c(e,3,[h]):e(h)}finally{tn=t}}:p,t&&i){let e=f,t=i===!0?1/0:i;f=()=>an(e(),t)}let y=Oe(),b=()=>{u.stop(),y&&y.active&&v(y.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),b()}}let S=_?Array(e.length).fill($t):$t,C=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||g||(_?e.some((e,t)=>F(e,S[t])):F(e,S))){m&&m();let n=tn;tn=u;try{let n=[e,S===$t?void 0:_&&S[0]===$t?[]:S,h];S=e,c?c(t,3,n):t(...n)}finally{tn=n}}}else u.run()};return s&&s(C),u=new Ae(f),u.scheduler=o?()=>o(C,!1):C,h=e=>nn(e,!1,u),m=u.onStop=()=>{let e=en.get(u);if(e){if(c)c(e,4);else for(let t of e)t();en.delete(u)}},t?r?C(!0):S=u.run():o?o(C.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function an(e,t=1/0,n){if(t<=0||!D(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,V(e))an(e.value,t,n);else if(x(e))for(let r=0;r<e.length;r++)an(e[r],t,n);else if(C(e)||S(e))e.forEach(e=>{an(e,t,n)});else if(A(e)){for(let r in e)an(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&an(e[r],t,n)}return e}function on(e,t,n,r){try{return r?e(...r):e()}catch(e){cn(e,t,n)}}function sn(e,t,n,r){if(w(e)){let i=on(e,t,n,r);return i&&ee(i)&&i.catch(e=>{cn(e,t,n)}),i}if(x(e)){let i=[];for(let a=0;a<e.length;a++)i.push(sn(e[a],t,n,r));return i}}function cn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||d;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){We(),on(a,null,10,[e,i,o]),Ge();return}}ln(e,n,i,r,o)}function ln(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var un=[],dn=-1,fn=[],pn=null,mn=0,hn=Promise.resolve(),gn=null;function _n(e){let t=gn||hn;return e?t.then(this?e.bind(this):e):t}function vn(e){let t=dn+1,n=un.length;for(;t<n;){let r=t+n>>>1,i=un[r],a=wn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function yn(e){if(!(e.flags&1)){let t=wn(e),n=un[un.length-1];!n||!(e.flags&2)&&t>=wn(n)?un.push(e):un.splice(vn(t),0,e),e.flags|=1,bn()}}function bn(){gn||=hn.then(Tn)}function xn(e){x(e)?fn.push(...e):pn&&e.id===-1?pn.splice(mn+1,0,e):e.flags&1||(fn.push(e),e.flags|=1),bn()}function Sn(e,t,n=dn+1){for(;n<un.length;n++){let t=un[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;un.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Cn(e){if(fn.length){let e=[...new Set(fn)].sort((e,t)=>wn(e)-wn(t));if(fn.length=0,pn){pn.push(...e);return}for(pn=e,mn=0;mn<pn.length;mn++){let e=pn[mn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}pn=null,mn=0}}var wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tn(e){try{for(dn=0;dn<un.length;dn++){let e=un[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),on(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<un.length;dn++){let e=un[dn];e&&(e.flags&=-2)}dn=-1,un.length=0,Cn(e),gn=null,(un.length||fn.length)&&Tn(e)}}var En=null,Dn=null;function On(e){let t=En;return En=e,Dn=e&&e.type.__scopeId||null,t}function kn(e,t=En,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&fa(-1);let i=On(t),a;try{a=e(...n)}finally{On(i),r._d&&fa(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function An(e,t){if(En===null)return e;let n=qa(En),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=d]=t[e];i&&(w(i)&&(i={mounted:i,updated:i}),i.deep&&an(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function jn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(We(),sn(c,n,8,[e.el,s,e,t]),Ge())}}var Mn=Symbol(`_vte`),Nn=e=>e.__isTeleport,Pn=e=>e&&(e.disabled||e.disabled===``),Fn=e=>e&&(e.defer||e.defer===``),In=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Ln=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Rn=(e,t)=>{let n=e&&e.to;return T(n)?t?t(n):null:n},zn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=Pn(t.props),{shapeFlag:v,children:y,dynamicChildren:b}=t;if(e==null){let e=t.el=h(``),l=t.anchor=h(``);p(e,n,r),p(l,n,r);let d=(e,t)=>{v&16&&u(y,e,t,i,a,o,s,c)},f=()=>{let e=t.target=Rn(t.props,m),n=Wn(e,t,h,p);e&&(o!==`svg`&&In(e)?o=`svg`:o!==`mathml`&&Ln(e)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(e),_||(d(e,n),Un(t,!1)))};_&&(d(n,l),Un(t,!0)),Fn(t.props)?(t.el.__isMounted=!1,Ai(()=>{f(),delete t.el.__isMounted},a)):f()}else{if(Fn(t.props)&&e.el.__isMounted===!1){Ai(()=>{zn.process(e,t,n,r,i,a,o,s,c,l)},a);return}t.el=e.el,t.targetStart=e.targetStart;let u=t.anchor=e.anchor,p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Pn(e.props),v=g?n:p,y=g?u:h;if(o===`svg`||In(p)?o=`svg`:(o===`mathml`||Ln(p))&&(o=`mathml`),b?(f(e.dynamicChildren,b,v,i,a,o,s),Ii(e,t,!0)):c||d(e,t,v,y,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Bn(t,n,u,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Rn(t.props,m);e&&Bn(t,e,null,l,0)}else g&&Bn(t,p,h,l,1);Un(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e;if(d&&(i(l),i(u)),a&&i(c),o&16){let e=a||!Pn(f);for(let i=0;i<s.length;i++){let a=s[i];r(a,t,n,e,!!a.dynamicChildren)}}},move:Bn,hydrate:Vn};function Bn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Pn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Vn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,t,c,l){t.anchor=d(o(e),t,s(e),n,r,i,a),t.targetStart=c,t.targetAnchor=l}let p=t.target=Rn(t.props,c),m=Pn(t.props);if(p){let s=p._lpa||p.firstChild;if(t.shapeFlag&16)if(m)f(e,t,s,s&&o(s));else{t.anchor=o(e);let c=s;for(;c;){if(c&&c.nodeType===8){if(c.data===`teleport start anchor`)t.targetStart=c;else if(c.data===`teleport anchor`){t.targetAnchor=c,p._lpa=t.targetAnchor&&o(t.targetAnchor);break}}c=o(c)}t.targetAnchor||Wn(p,t,u,l),d(s&&o(s),t,p,n,r,i,a)}Un(t,m)}else m&&t.shapeFlag&16&&f(e,t,e,o(e));return t.anchor&&o(t.anchor)}var Hn=zn;function Un(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Wn(e,t,n,r){let i=t.targetStart=n(``),a=t.targetAnchor=n(``);return i[Mn]=a,e&&(r(i,e),r(a,e)),a}var Gn=Symbol(`_leaveCb`),Kn=Symbol(`_enterCb`);function qn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wr(()=>{e.isMounted=!0}),Dr(()=>{e.isUnmounting=!0}),e}var Jn=[Function,Array],Yn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jn,onEnter:Jn,onAfterEnter:Jn,onEnterCancelled:Jn,onBeforeLeave:Jn,onLeave:Jn,onAfterLeave:Jn,onLeaveCancelled:Jn,onBeforeAppear:Jn,onAppear:Jn,onAfterAppear:Jn,onAppearCancelled:Jn},Xn=e=>{let t=e.subTree;return t.component?Xn(t.component):t},Zn={name:`BaseTransition`,props:Yn,setup(e,{slots:t}){let n=Ma(),r=qn();return()=>{let i=t.default&&ar(t.default(),!0);if(!i||!i.length)return;let a=Qn(i),o=z(e),{mode:s}=o;if(r.isLeaving)return nr(a);let c=rr(a);if(!c)return nr(a);let l=tr(c,o,r,n,e=>l=e);c.type!==oa&&ir(c,l);let u=n.subTree&&rr(n.subTree);if(u&&u.type!==oa&&!ga(u,c)&&Xn(n).type!==oa){let e=tr(u,o,r,n);if(ir(u,e),s===`out-in`&&c.type!==oa)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},nr(a);s===`in-out`&&c.type!==oa?e.delayLeave=(e,t,n)=>{let i=er(r,u);i[String(u.key)]=u,e[Gn]=()=>{t(),e[Gn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Qn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==oa){t=n;break}}return t}var $n=Zn;function er(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function tr(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),S=er(n,e),C=(e,t)=>{e&&sn(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),x(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=g||c;else return;t[Gn]&&t[Gn](!0);let i=S[b];i&&ga(e,i)&&i.el[Gn]&&i.el[Gn](),C(r,[t])},enter(e){let t=l,r=u,i=d;if(!n.isMounted)if(a)t=_||l,r=v||u,i=y||d;else return;let o=!1,s=e[Kn]=t=>{o||(o=!0,C(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e[Kn]=void 0)};t?w(t,[e,s]):s()},leave(t,r){let i=String(e.key);if(t[Kn]&&t[Kn](!0),n.isUnmounting)return r();C(f,[t]);let a=!1,o=t[Gn]=n=>{a||(a=!0,r(),C(n?h:m,[t]),t[Gn]=void 0,S[i]===e&&delete S[i])};S[i]=e,p?w(p,[t,o]):o()},clone(e){let a=tr(e,t,n,r,i);return i&&i(a),a}};return T}function nr(e){if(gr(e))return e=xa(e),e.children=null,e}function rr(e){if(!gr(e))return Nn(e.type)&&e.children?Qn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&w(n.default))return n.default()}}function ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ar(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===H?(o.patchFlag&128&&i++,r=r.concat(ar(o.children,t,s))):(t||o.type!==oa)&&r.push(s==null?o:xa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function or(e,t){return w(e)?(()=>_({name:e.name},t,{setup:e}))():e}function sr(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}var cr=new WeakMap;function lr(e,t,n,r,i=!1){if(x(e)){e.forEach((e,a)=>lr(e,t&&(x(t)?t[a]:t),n,r,i));return}if(pr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&lr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?qa(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===d?s.refs={}:s.refs,f=s.setupState,p=z(f),h=f===d?m:e=>b(p,e),g=e=>!0;if(l!=null&&l!==c){if(ur(t),T(l))u[l]=null,h(l)&&(f[l]=null);else if(V(l)){g(l)&&(l.value=null);let e=t;e.k&&(u[e.k]=null)}}if(w(c))on(c,s,12,[o,u]);else{let t=T(c),r=V(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:u[c]:g(c)||!e.k?c.value:u[e.k];if(i)x(n)&&v(n,a);else if(x(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],h(c)&&(f[c]=u[c]);else{let t=[a];g(c)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,h(c)&&(f[c]=o)):r&&(g(c)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),cr.delete(e)};t.id=-1,cr.set(e,t),Ai(t,n)}else ur(e),s()}}}function ur(e){let t=cr.get(e);t&&(t.flags|=8,cr.delete(e))}var dr=e=>e.nodeType===8;fe().requestIdleCallback,fe().cancelIdleCallback;function fr(e,t){if(dr(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(dr(r))if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++;r=r.nextSibling}}else t(e)}var pr=e=>!!e.type.__asyncLoader;function mr(e){w(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return or({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=!1;(t.bu||=[]).push(()=>r=!0);let i=()=>{r||n()},o=a?()=>{let n=a(i,t=>fr(e,t));n&&(t.bum||=[]).push(n)}:i;u?o():p().then(()=>!t.isUnmounted&&o())},get __asyncResolved(){return u},setup(){let e=J;if(sr(e),u)return()=>hr(u,e);let t=t=>{l=null,cn(t,e,13,!r)};if(s&&e.suspense||Ra)return p().then(t=>()=>hr(t,e)).catch(e=>(t(e),()=>r?K(r,{error:e}):null));let a=Gt(!1),c=Gt(),d=Gt(!!i);return i&&setTimeout(()=>{d.value=!1},i),o!=null&&setTimeout(()=>{if(!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o),p().then(()=>{a.value=!0,e.parent&&gr(e.parent.vnode)&&e.parent.update()}).catch(e=>{t(e),c.value=e}),()=>{if(a.value&&u)return hr(u,e);if(c.value&&r)return K(r,{error:c.value});if(n&&!d.value)return K(n)}}})}function hr(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=K(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var gr=e=>e.type.__isKeepAlive;function _r(e,t){yr(e,`a`,t)}function vr(e,t){yr(e,`da`,t)}function yr(e,t,n=J){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(xr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)gr(e.parent.vnode)&&br(r,t,n,e),e=e.parent}}function br(e,t,n,r){let i=xr(t,e,r,!0);Or(()=>{v(r[t],i)},n)}function xr(e,t,n=J,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{We();let i=Fa(n),a=sn(t,n,e,r);return i(),Ge(),a};return r?i.unshift(a):i.push(a),a}}var Sr=e=>(t,n=J)=>{(!Ra||e===`sp`)&&xr(e,(...e)=>t(...e),n)},Cr=Sr(`bm`),wr=Sr(`m`),Tr=Sr(`bu`),Er=Sr(`u`),Dr=Sr(`bum`),Or=Sr(`um`),kr=Sr(`sp`),Ar=Sr(`rtg`),jr=Sr(`rtc`);function Mr(e,t=J){xr(`ec`,e,t)}var Nr=`components`;function Pr(e,t){return Lr(Nr,e,!0,t)||e}var Fr=Symbol.for(`v-ndc`);function Ir(e){return T(e)?Lr(Nr,e,!1)||e:e||Fr}function Lr(e,t,n=!0,r=!1){let i=En||J;if(i){let n=i.type;if(e===Nr){let e=Ja(n,!1);if(e&&(e===t||e===P(t)||e===ae(P(t))))return n}let a=Rr(i[e]||n[e],t)||Rr(i.appContext[e],t);return!a&&r?n:a}}function Rr(e,t){return e&&(e[t]||e[P(t)]||e[ae(P(t))])}function zr(e,t,n,r){let i,a=n&&n[r],o=x(e);if(o||T(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!Vt(e),s=Bt(e),e=rt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Wt(B(e[n])):B(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(D(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Br=e=>e?La(e)?qa(e):Br(e.parent):null,Vr=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xr(e),$forceUpdate:e=>e.f||=()=>{yn(e.update)},$nextTick:e=>e.n||=_n.bind(e.proxy),$watch:e=>Wi.bind(e)}),Hr=(e,t)=>e!==d&&!e.__isScriptSetup&&b(e,t),Ur={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e,l;if(t[0]!==`$`){let s=o[t];if(s!==void 0)switch(s){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Hr(r,t))return o[t]=1,r[t];else if(i!==d&&b(i,t))return o[t]=2,i[t];else if((l=e.propsOptions[0])&&b(l,t))return o[t]=3,a[t];else if(n!==d&&b(n,t))return o[t]=4,n[t];else Gr&&(o[t]=0)}let u=Vr[t],f,p;if(u)return t===`$attrs`&&R(e.attrs,`get`,``),u(e);if((f=s.__cssModules)&&(f=f[t]))return f;if(n!==d&&b(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,b(p,t))return p[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Hr(i,t)?(i[t]=n,!0):r!==d&&b(r,t)?(r[t]=n,!0):b(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a,type:o}},s){let c,l;return!!(n[s]||e!==d&&s[0]!==`$`&&b(e,s)||Hr(t,s)||(c=a[0])&&b(c,s)||b(r,s)||b(Vr,s)||b(i.config.globalProperties,s)||(l=o.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get==null?b(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Wr(e){return x(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Gr=!0;function Kr(e){let t=Xr(e),n=e.proxy,r=e.ctx;Gr=!1,t.beforeCreate&&Jr(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:S,render:C,renderTracked:T,renderTriggered:E,errorCaptured:ee,serverPrefetch:O,expose:k,inheritAttrs:te,components:A,directives:j,filters:M}=t;if(l&&qr(l,r,null),o)for(let e in o){let t=o[e];w(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);D(t)&&(e.data=Ft(t))}if(Gr=!0,a)for(let e in a){let t=a[e],i=w(t)?t.bind(n,n):w(t.get)?t.get.bind(n,n):p,o=!w(t)&&w(t.set)?t.set.bind(n):p,s=Xa({get:i,set:o});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e})}if(s)for(let e in s)Yr(s[e],r,n,e);if(c){let e=w(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{ui(t,e[t])})}u&&Jr(u,e,`c`);function N(e,t){x(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(N(Cr,d),N(wr,f),N(Tr,m),N(Er,h),N(_r,g),N(vr,_),N(Mr,ee),N(jr,T),N(Ar,E),N(Dr,y),N(Or,S),N(kr,O),x(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};C&&e.render===p&&(e.render=C),te!=null&&(e.inheritAttrs=te),A&&(e.components=A),j&&(e.directives=j),O&&sr(e)}function qr(e,t,n=p){for(let n in x(e)&&(e=ti(e)),e){let r=e[n],i;i=D(r)?`default`in r?di(r.from||n,r.default,!0):di(r.from||n):di(r),V(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Jr(e,t,n){sn(x(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yr(e,t,n,r){let i=r.includes(`.`)?Gi(n,r):()=>n[r];if(T(e)){let n=t[e];w(n)&&Hi(i,n)}else if(w(e))Hi(i,e.bind(n));else if(D(e))if(x(e))e.forEach(e=>Yr(e,t,n,r));else{let r=w(e.handler)?e.handler.bind(n):t[e.handler];w(r)&&Hi(i,r,e)}}function Xr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Zr(c,e,o,!0)),Zr(c,t,o)),D(t)&&a.set(t,c),c}function Zr(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&Zr(e,a,n,!0),i&&i.forEach(t=>Zr(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=Qr[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}var Qr={data:$r,props:ii,emits:ii,methods:ri,computed:ri,beforeCreate:ni,created:ni,beforeMount:ni,mounted:ni,beforeUpdate:ni,updated:ni,beforeDestroy:ni,beforeUnmount:ni,destroyed:ni,unmounted:ni,activated:ni,deactivated:ni,errorCaptured:ni,serverPrefetch:ni,components:ri,directives:ri,watch:ai,provide:$r,inject:ei};function $r(e,t){return t?e?function(){return _(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function ei(e,t){return ri(ti(e),ti(t))}function ti(e){if(x(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ni(e,t){return e?[...new Set([].concat(e,t))]:t}function ri(e,t){return e?_(Object.create(null),e,t):t}function ii(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:_(Object.create(null),Wr(e),Wr(t??{})):t}function ai(e,t){if(!e)return t;if(!t)return e;let n=_(Object.create(null),e);for(let r in t)n[r]=ni(e[r],t[r]);return n}function oi(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var si=0;function ci(e,t){return function(n,r=null){w(n)||(n=_({},n)),r!=null&&!D(r)&&(r=null);let i=oi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:si++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Qa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&w(e.install)?(a.add(e),e.install(c,...t)):w(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||K(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,qa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(sn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=li;li=c;try{return e()}finally{li=t}}};return c}}var li=null;function ui(e,t){if(J){let n=J.provides,r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function di(e,t,n=!1){let r=Ma();if(r||li){let i=li?li._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&w(t)?t.call(r&&r.proxy):t}}var fi={},pi=()=>Object.create(fi),mi=e=>Object.getPrototypeOf(e)===fi;function hi(e,t,n,r=!1){let i={},a=pi();for(let n in e.propsDefaults=Object.create(null),_i(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:It(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function gi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=z(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Xi(e.emitsOptions,o))continue;let u=t[o];if(c)if(b(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=P(o);i[t]=vi(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{_i(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!b(t,a)&&((r=ie(a))===a||!b(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=vi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!b(t,e))&&(delete a[e],l=!0)}l&&tt(e.attrs,`set`,``)}function _i(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(M(c))continue;let l=t[c],u;i&&b(i,u=P(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Xi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=z(n),r=s||d;for(let o=0;o<a.length;o++){let s=a[o];n[s]=vi(i,t,s,r[s],e,!b(r,s))}}return o}function vi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=b(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&w(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Fa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ie(n))&&(r=!0))}return r}var yi=new WeakMap;function bi(e,t,n=!1){let r=n?yi:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!w(e)){let r=e=>{c=!0;let[n,r]=bi(e,t,!0);_(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return D(e)&&r.set(e,f),f;if(x(a))for(let e=0;e<a.length;e++){let t=P(a[e]);xi(t)&&(o[t]=d)}else if(a)for(let e in a){let t=P(e);if(xi(t)){let n=a[e],r=o[t]=x(n)||w(n)?{type:n}:_({},n),i=r.type,c=!1,l=!0;if(x(i))for(let e=0;e<i.length;++e){let t=i[e],n=w(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=w(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||b(r,`default`))&&s.push(t)}}let l=[o,s];return D(e)&&r.set(e,l),l}function xi(e){return e[0]!==`$`&&!M(e)}var Si=e=>e===`_`||e===`_ctx`||e===`$stable`,Ci=e=>x(e)?e.map(wa):[wa(e)],wi=(e,t,n)=>{if(t._n)return t;let r=kn((...e)=>Ci(t(...e)),n);return r._c=!1,r},Ti=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Si(n))continue;let i=e[n];if(w(i))t[n]=wi(n,i,r);else if(i!=null){let e=Ci(i);t[n]=()=>e}}},Ei=(e,t)=>{let n=Ci(t);e.slots.default=()=>n},Di=(e,t,n)=>{for(let r in t)(n||!Si(r))&&(e[r]=t[r])},Oi=(e,t,n)=>{let r=e.slots=pi();if(e.vnode.shapeFlag&32){let e=t._;e?(Di(r,t,n),n&&ce(r,`_`,e,!0)):Ti(t,r)}else t&&Ei(e,t)},ki=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=d;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Di(i,t,n):(a=!t.$stable,Ti(t,i)),o=t}else t&&(Ei(e,t),o={default:1});if(a)for(let e in i)!Si(e)&&o[e]==null&&delete i[e]},Ai=ia;function ji(e){return Mi(e)}function Mi(e,t){let n=fe();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=p,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ga(e,t)&&(r=pe(e),F(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case aa:y(e,t,n,r);break;case oa:b(e,t,n,r);break;case sa:e??x(t,n,r,o);break;case H:te(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?A(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ge)}u!=null&&i?lr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&lr(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null?T(t,n,r,i,a,o,s,c):ee(e,t,i,a,o,s,c)},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Ni(e,c),l,d),_&&jn(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!M(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&Oa(p,i,e)}_&&jn(e,null,i,`beforeMount`);let v=Fi(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&Ai(()=>{p&&Oa(p,i,e),v&&g.enter(f),_&&jn(e,null,i,`mounted`)},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ra(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ta(e[l]):wa(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:f,dirs:p}=t;l|=e.patchFlag&16;let m=e.props||d,h=t.props||d,g;if(n&&Pi(n,!1),(g=h.onVnodeBeforeUpdate)&&Oa(g,n,t,e),p&&jn(t,e,n,`beforeUpdate`),n&&Pi(n,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&u(c,``),f?O(e.dynamicChildren,f,c,n,r,Ni(t,i),o):s||re(e,t,c,null,n,r,Ni(t,i),o,!1),l>0){if(l&16)k(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&f==null&&k(c,m,h,n,i);((g=h.onVnodeUpdated)||p)&&Ai(()=>{g&&Oa(g,n,t,e),p&&jn(t,e,n,`updated`)},r)},O=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===H||!ga(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},k=(e,t,n,r,i)=>{if(t!==n){if(t!==d)for(let o in t)!M(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(M(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},te=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren?(O(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ii(e,t,!0)):re(e,t,n,f,a,o,c,l,u)},A=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,a,o,c):N(e,t,c)},j=(e,t,n,r,i,a,o)=>{let s=e.component=ja(e,r,i);if(gr(e)&&(s.ctx.renderer=ge),za(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ne,o),!e.el){let r=s.subTree=K(oa);b(null,r,t,n),e.placeholder=r.el}}else ne(s,e,t,n,i,a,o)},N=(e,t,n)=>{let r=t.component=e.component;if(ea(e,t,n))if(r.asyncDep&&!r.asyncResolved){P(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ne=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Ri(e);if(n){t&&(t.el=l.el,P(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Pi(e,!1),t?(t.el=l.el,P(e,t,o)):t=l,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Oa(d,c,t,l),Pi(e,!0);let f=Zi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),pe(p),e,i,a),t.el=f.el,u===null&&na(e,f.el),r&&Ai(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Ai(()=>Oa(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=pr(t);if(Pi(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Oa(o,d,t),Pi(e,!0),s&&ve){let t=()=>{e.subTree=Zi(e),ve(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=Zi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ai(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ai(()=>Oa(o,d,e),i)}(t.shapeFlag&256||d&&pr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ai(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>yn(u),Pi(e,!0),l()},P=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,gi(e,t.props,r,n),ki(e,t.children,n),We(),Sn(e),Ge()},re=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){ae(l,f,n,r,i,a,o,s,c);return}else if(p&256){ie(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&de(l,i,a),f!==l&&u(n,f)):d&16?m&16?ae(l,f,n,r,i,a,o,s,c):de(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},ie=(e,t,n,r,i,a,o,s,c)=>{e||=f,t||=f;let l=e.length,u=t.length,d=Math.min(l,u),p;for(p=0;p<d;p++){let r=t[p]=c?Ta(t[p]):wa(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?de(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},ae=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,p=u-1;for(;l<=d&&l<=p;){let r=e[l],u=t[l]=c?Ta(t[l]):wa(t[l]);if(ga(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=p;){let r=e[d],l=t[p]=c?Ta(t[p]):wa(t[p]);if(ga(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,p--}if(l>d){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?Ta(t[l]):wa(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=d;)F(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?Ta(t[l]):wa(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=d;l++){let r=e[l];if(y>=b){F(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ga(r,t[_])){u=_;break}u===void 0?F(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?Li(C):f;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||f.placeholder:r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?oe(d,n,p,2):_--)}}},oe=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){oe(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,ge);return}if(c===H){r(s,t,n);for(let e=0;e<u.length;e++)oe(u[e],t,n,a);r(e.anchor,t,n);return}if(c===sa){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),Ai(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[Gn](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},F=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(We(),lr(s,null,n,e,!0),Ge()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!pr(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&Oa(g,t,e),u&6)ue(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&jn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ge,r):l&&!l.hasOnce&&(a!==H||d>0&&d&64)?de(l,t,n,!1,!0):(a===H&&d&384||!i&&u&16)&&de(c,t,n),r&&ce(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&Ai(()=>{g&&Oa(g,t,e),m&&jn(e,null,t,`unmounted`)},n)},ce=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===H){le(n,r);return}if(t===sa){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},le=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},ue=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;zi(c),zi(l),r&&se(r),i.stop(),a&&(a.flags|=8,F(o,e,t,n)),s&&Ai(s,t),Ai(()=>{e.isUnmounted=!0},t)},de=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)F(e[o],t,n,r,i)},pe=e=>{if(e.shapeFlag&6)return pe(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Mn];return n?h(n):t},me=!1,he=(e,t,n)=>{e==null?t._vnode&&F(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,me||=(me=!0,Sn(),Cn(),!1)},ge={p:v,um:F,m:oe,r:ce,mt:j,mc:D,pc:re,pbc:O,n:pe,o:e},_e,ve;return t&&([_e,ve]=t(ge)),{render:he,hydrate:_e,createApp:ci(he,_e)}}function Ni({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Pi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ii(e,t,n=!1){let r=e.children,i=t.children;if(x(r)&&x(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ta(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ii(t,a)),a.type===aa&&a.patchFlag!==-1&&(a.el=t.el),a.type===oa&&!a.el&&(a.el=t.el)}}function Li(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ri(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ri(t)}function zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}var Bi=Symbol.for(`v-scx`),Vi=()=>di(Bi);function Hi(e,t,n){return Ui(e,t,n)}function Ui(e,t,n=d){let{immediate:r,deep:i,flush:a,once:o}=n,s=_({},n),c=t&&r||!t&&a!==`post`,l;if(Ra){if(a===`sync`){let e=Vi();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=p,e.resume=p,e.pause=p,e}}let u=J;s.call=(e,t,n)=>sn(e,u,t,n);let f=!1;a===`post`?s.scheduler=e=>{Ai(e,u&&u.suspense)}:a!==`sync`&&(f=!0,s.scheduler=(e,t)=>{t?e():yn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let m=rn(e,t,s);return Ra&&(l?l.push(m):c&&m()),m}function Wi(e,t,n){let r=this.proxy,i=T(e)?e.includes(`.`)?Gi(r,e):()=>r[e]:e.bind(r,r),a;w(t)?a=t:(a=t.handler,n=t);let o=Fa(this),s=Ui(i,a.bind(r),n);return o(),s}function Gi(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Ki=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${P(t)}Modifiers`]||e[`${ie(t)}Modifiers`];function qi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||d,i=n,a=t.startsWith(`update:`),o=a&&Ki(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>T(e)?e.trim():e)),o.number&&(i=n.map(le)));let s,c=r[s=oe(t)]||r[s=oe(P(t))];!c&&a&&(c=r[s=oe(ie(t))]),c&&sn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,sn(l,e,6,i)}}var Ji=new WeakMap;function Yi(e,t,n=!1){let r=n?Ji:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!w(e)){let r=e=>{let n=Yi(e,t,!0);n&&(s=!0,_(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(D(e)&&r.set(e,null),null):(x(a)?a.forEach(e=>o[e]=null):_(o,a),D(e)&&r.set(e,o),o)}function Xi(e,t){return!e||!h(t)?!1:(t=t.slice(2).replace(/Once$/,``),b(e,t[0].toLowerCase()+t.slice(1))||b(e,ie(t))||b(e,t))}function Zi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=wa(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=wa(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:Qi(s)}}catch(t){ca.length=0,cn(t,e,1),v=K(oa)}let b=v;if(y&&h!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(g)&&(y=$i(y,a)),b=xa(b,y,!1,!0))}return n.dirs&&(b=xa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&ir(b,n.transition),v=b,On(_),v}var Qi=e=>{let t;for(let n in e)(n===`class`||n===`style`||h(n))&&((t||={})[n]=e[n]);return t},$i=(e,t)=>{let n={};for(let r in e)(!g(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ea(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ta(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Xi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ta(r,o,l):!0:!!o;return!1}function ta(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Xi(n,a))return!0}return!1}function na({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var ra=e=>e.__isSuspense;function ia(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):xn(e)}var H=Symbol.for(`v-fgt`),aa=Symbol.for(`v-txt`),oa=Symbol.for(`v-cmt`),sa=Symbol.for(`v-stc`),ca=[],la=null;function U(e=!1){ca.push(la=e?null:[])}function ua(){ca.pop(),la=ca[ca.length-1]||null}var da=1;function fa(e,t=!1){da+=e,e<0&&la&&t&&(la.hasOnce=!0)}function pa(e){return e.dynamicChildren=da>0?la||f:null,ua(),da>0&&la&&la.push(e),e}function W(e,t,n,r,i,a){return pa(G(e,t,n,r,i,a,!0))}function ma(e,t,n,r,i){return pa(K(e,t,n,r,i,!0))}function ha(e){return e?e.__v_isVNode===!0:!1}function ga(e,t){return e.type===t.type&&e.key===t.key}var _a=({key:e})=>e??null,va=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:T(e)||V(e)||w(e)?{i:En,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===H?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_a(t),ref:t&&va(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:En};return s?(Ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=T(n)?8:16),da>0&&!o&&la&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&la.push(c),c}var K=ya;function ya(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Fr)&&(e=oa),ha(e)){let r=xa(e,t,!0);return n&&Ea(r,n),da>0&&!a&&la&&(r.shapeFlag&6?la[la.indexOf(e)]=r:la.push(r)),r.patchFlag=-2,r}if(Ya(e)&&(e=e.__vccOpts),t){t=ba(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=ve(e)),D(n)&&(Ht(n)&&!x(n)&&(n=_({},n)),t.style=pe(n))}let o=T(e)?1:ra(e)?128:Nn(e)?64:D(e)?4:w(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function ba(e){return e?Ht(e)||mi(e)?_({},e):e:null}function xa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Da(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&_a(l),ref:t&&t.ref?n&&a?x(a)?a.concat(va(t)):[a,va(t)]:va(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==H?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xa(e.ssContent),ssFallback:e.ssFallback&&xa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ir(u,c.clone(u)),u}function Sa(e=` `,t=0){return K(aa,null,e,t)}function Ca(e,t){let n=K(sa,null,e);return n.staticCount=t,n}function q(e=``,t=!1){return t?(U(),ma(oa,null,e)):K(oa,null,e)}function wa(e){return e==null||typeof e==`boolean`?K(oa):x(e)?K(H,null,e.slice()):ha(e)?Ta(e):K(aa,null,String(e))}function Ta(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xa(e)}function Ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!mi(t)?t._ctx=En:r===3&&En&&(En.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else w(t)?(t={default:t,_ctx:En},n=32):(t=String(t),r&64?(n=16,t=[Sa(t)]):n=8);e.children=t,e.shapeFlag|=n}function Da(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ve([t.class,r.class]));else if(e===`style`)t.style=pe([t.style,r.style]);else if(h(e)){let n=t[e],i=r[e];i&&n!==i&&!(x(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function Oa(e,t,n,r=null){sn(e,t,7,[n,r])}var ka=oi(),Aa=0;function ja(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||ka,a={uid:Aa++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bi(r,i),emitsOptions:Yi(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=qi.bind(null,a),e.ce&&e.ce(a),a}var J=null,Ma=()=>J||En,Na,Pa;{let e=fe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Na=t(`__VUE_INSTANCE_SETTERS__`,e=>J=e),Pa=t(`__VUE_SSR_SETTERS__`,e=>Ra=e)}var Fa=e=>{let t=J;return Na(e),e.scope.on(),()=>{e.scope.off(),Na(t)}},Ia=()=>{J&&J.scope.off(),Na(null)};function La(e){return e.vnode.shapeFlag&4}var Ra=!1;function za(e,t=!1,n=!1){t&&Pa(t);let{props:r,children:i}=e.vnode,a=La(e);hi(e,r,a,t),Oi(e,i,n||t);let o=a?Ba(e,t):void 0;return t&&Pa(!1),o}function Ba(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ur);let{setup:r}=n;if(r){We();let n=e.setupContext=r.length>1?Ka(e):null,i=Fa(e),a=on(r,e,0,[e.props,n]),o=ee(a);if(Ge(),i(),(o||e.sp)&&!pr(e)&&sr(e),o){if(a.then(Ia,Ia),t)return a.then(n=>{Va(e,n,t)}).catch(t=>{cn(t,e,0)});e.asyncDep=a}else Va(e,a,t)}else Wa(e,t)}function Va(e,t,n){w(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:D(t)&&(e.setupState=Xt(t)),Wa(e,n)}var Ha,Ua;function Wa(e,t,n){let r=e.type;if(!e.render){if(!t&&Ha&&!r.render){let t=r.template||Xr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r,s=_(_({isCustomElement:n,delimiters:a},i),o);r.render=Ha(t,s)}}e.render=r.render||p,Ua&&Ua(e)}{let t=Fa(e);We();try{Kr(e)}finally{Ge(),t()}}}var Ga={get(e,t){return R(e,`get`,``),e[t]}};function Ka(e){return{attrs:new Proxy(e.attrs,Ga),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function qa(e){return e.exposed?e.exposeProxy||=new Proxy(Xt(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vr)return Vr[n](e)},has(e,t){return t in e||t in Vr}}):e.proxy}function Ja(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function Ya(e){return w(e)&&`__vccOpts`in e}var Xa=(e,t)=>Qt(e,t,Ra);function Za(e,t,n){try{fa(-1);let r=arguments.length;return r===2?D(t)&&!x(t)?ha(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ha(n)&&(n=[n]),K(e,t,n))}finally{fa(1)}}var Qa=`3.5.22`,$a=void 0,eo=typeof window<`u`&&window.trustedTypes;if(eo)try{$a=eo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var to=$a?e=>$a.createHTML(e):e=>e,no=`http://www.w3.org/2000/svg`,ro=`http://www.w3.org/1998/Math/MathML`,io=typeof document<`u`?document:null,ao=io&&io.createElement(`template`),oo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?io.createElementNS(no,e):t===`mathml`?io.createElementNS(ro,e):n?io.createElement(e,{is:n}):io.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>io.createTextNode(e),createComment:e=>io.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>io.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ao.innerHTML=to(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ao.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},so=`transition`,co=`animation`,lo=Symbol(`_vtc`),uo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fo=_({},Yn,uo),po=(e=>(e.displayName=`Transition`,e.props=fo,e))((e,{slots:t})=>Za($n,go(e),t)),mo=(e,t=[])=>{x(e)?e.forEach(e=>e(...t)):e&&e(...t)},ho=e=>e?x(e)?e.some(e=>e.length>1):e.length>1:!1;function go(e){let t={};for(let n in e)n in uo||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=_o(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,E=(e,t,n,r)=>{e._enterCancelled=r,bo(e,t?u:s),bo(e,t?l:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,bo(e,d),bo(e,p),bo(e,f),t&&t()},ee=e=>(t,n)=>{let i=e?w:y,o=()=>E(t,e,n);mo(i,[t,o]),xo(()=>{bo(t,e?c:a),yo(t,e?u:s),ho(i)||Co(t,r,h,o)})};return _(t,{onBeforeEnter(e){mo(v,[e]),yo(e,a),yo(e,o)},onBeforeAppear(e){mo(C,[e]),yo(e,c),yo(e,l)},onEnter:ee(!1),onAppear:ee(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);yo(e,d),e._enterCancelled?(yo(e,f),Do(e)):(Do(e),yo(e,f)),xo(()=>{e._isLeaving&&(bo(e,d),yo(e,p),ho(x)||Co(e,r,g,n))}),mo(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),mo(b,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),mo(T,[e])},onLeaveCancelled(e){D(e),mo(S,[e])}})}function _o(e){if(e==null)return null;if(D(e))return[vo(e.enter),vo(e.leave)];{let t=vo(e);return[t,t]}}function vo(e){return ue(e)}function yo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[lo]||(e[lo]=new Set)).add(t)}function bo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[lo];n&&(n.delete(t),n.size||(e[lo]=void 0))}function xo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var So=0;function Co(e,t,n,r){let i=e._endId=++So,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=wo(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function wo(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${so}Delay`),a=r(`${so}Duration`),o=To(i,a),s=r(`${co}Delay`),c=r(`${co}Duration`),l=To(s,c),u=null,d=0,f=0;t===so?o>0&&(u=so,d=o,f=a.length):t===co?l>0&&(u=co,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?so:co:null,f=u?u===so?a.length:c.length:0);let p=u===so&&/\b(?:transform|all)(?:,|$)/.test(r(`${so}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function To(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Eo(t)+Eo(e[n])))}function Eo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Do(e){return(e?e.ownerDocument:document).body.offsetHeight}function Oo(e,t,n){let r=e[lo];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ko=Symbol(`_vod`),Ao=Symbol(`_vsh`),jo=Symbol(``),Mo=/(?:^|;)\s*display\s*:/;function No(e,t,n){let r=e.style,i=T(n),a=!1;if(n&&!i){if(t)if(T(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Fo(r,t,``)}else for(let e in t)n[e]??Fo(r,e,``);for(let e in n)e===`display`&&(a=!0),Fo(r,e,n[e])}else if(i){if(t!==n){let e=r[jo];e&&(n+=`;`+e),r.cssText=n,a=Mo.test(n)}}else t&&e.removeAttribute(`style`);ko in e&&(e[ko]=a?r.display:``,e[Ao]&&(r.display=`none`))}var Po=/\s*!important$/;function Fo(e,t,n){if(x(n))n.forEach(n=>Fo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ro(e,t);Po.test(n)?e.setProperty(ie(r),n.replace(Po,``),`important`):e[r]=n}}var Io=[`Webkit`,`Moz`,`ms`],Lo={};function Ro(e,t){let n=Lo[t];if(n)return n;let r=P(t);if(r!==`filter`&&r in e)return Lo[t]=r;r=ae(r);for(let n=0;n<Io.length;n++){let i=Io[n]+r;if(i in e)return Lo[t]=i}return t}var zo=`http://www.w3.org/1999/xlink`;function Bo(e,t,n,r,i,a=be(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(zo,t.slice(6,t.length)):e.setAttributeNS(zo,t,n):n==null||a&&!xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:E(n)?String(n):n)}function Vo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?to(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ho(e,t,n,r){e.addEventListener(t,n,r)}function Uo(e,t,n,r){e.removeEventListener(t,n,r)}var Wo=Symbol(`_vei`);function Go(e,t,n,r,i=null){let a=e[Wo]||(e[Wo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=qo(t);if(r){let o=a[t]=Zo(r,i);Ho(e,n,o,s)}else o&&(Uo(e,n,o,s),a[t]=void 0)}}var Ko=/(?:Once|Passive|Capture)$/;function qo(e){let t;if(Ko.test(e)){t={};let n;for(;n=e.match(Ko);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):ie(e.slice(2)),t]}var Jo=0,Yo=Promise.resolve(),Xo=()=>Jo||=(Yo.then(()=>Jo=0),Date.now());function Zo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;sn(Qo(e,n.value),t,5,[e])};return n.value=e,n.attached=Xo(),n}function Qo(e,t){if(x(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var $o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,es=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Oo(e,r,o):t===`style`?No(e,n,r):h(t)?g(t)||Go(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):ts(e,t,r,o))?(Vo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Bo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!T(r))?Vo(e,P(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Bo(e,t,r,o))};function ts(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&$o(t)&&w(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return $o(t)&&T(n)?!1:t in e}var ns=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return x(t)?e=>se(t,e):t};function rs(e){e.target.composing=!0}function os(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ss=Symbol(`_assign`),cs={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ss]=ns(i);let a=r||i.props&&i.props.type===`number`;Ho(e,t?`change`:`input`,t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),a&&(r=le(r)),e[ss](r)}),n&&Ho(e,`change`,()=>{e.value=e.value.trim()}),t||(Ho(e,`compositionstart`,rs),Ho(e,`compositionend`,os),Ho(e,`change`,os))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ss]=ns(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?le(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},ls=[`ctrl`,`shift`,`alt`,`meta`],us={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>ls.some(n=>e[`${n}Key`]&&!t.includes(n))},ds=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=us[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},fs=_({patchProp:es},oo),ps;function ms(){return ps||=ji(fs)}var hs=((...e)=>{let t=ms().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=_s(e);if(!r)return;let i=t._component;!w(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,gs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function gs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function _s(e){return T(e)?document.querySelector(e):e}var vs=s({default:()=>ys}),ys=`/tailwind-practice-note/assets/IMG_2073-BiRn8wYf.jpg`,bs={href:`https://quanting56.github.io/Antinant-vue/`,class:`flex items-center gap-2 no-underline`},xs=[`src`],Ss=[`aria-expanded`],Cs={__name:`NavBar`,setup(e){let t=Gt(!1),n=Gt(null),r=Gt(window.innerWidth>992),i=()=>{r.value=window.innerWidth>992,r.value===!0&&(t.value=!1)},a=Gt([].map((e,t)=>{let n={...e,id:`nav-item-${t}`};return n.children&&(n.open=!1),n})),o=()=>{a.value.forEach(e=>{e.children&&(e.open=!1)}),t.value=!1},s=e=>{let t=n.value;t&&(t.contains(e.target)||o())};return wr(()=>{window.addEventListener(`resize`,i),document.addEventListener(`click`,s),i()}),Or(()=>{window.removeEventListener(`resize`,i),document.removeEventListener(`click`,s)}),(e,r)=>(U(),W(`nav`,{ref_key:`navRef`,ref:n,role:`navigation`,"aria-label":`主選單`,class:`flex flex-wrap items-center bg-[#333333] sticky top-0 z-[999] opacity-90 px-3 py-2 gap-3`},[G(`a`,bs,[G(`img`,{src:Jt(ys),class:`w-[30px] h-[30px] rounded-full`,alt:`品牌`},null,8,xs),r[1]||=G(`span`,{class:`text-gray-200 text-xl hover:text-white`},` 阿蛤ㄉ窩`,-1)]),G(`button`,{type:`button`,onClick:r[0]||=e=>t.value=!t.value,"aria-expanded":t.value,"aria-label":`切換選單`,class:`bg-transparent border-none p-1.5 cursor-pointer focus:outline-2 focus:outline-gray-400 block ml-auto md:hidden md:ml-0`},[G(`span`,{class:ve([`block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out`,t.value?`translate-y-2 rotate-45`:``])},null,2),G(`span`,{class:ve([`block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out my-[5px]`,t.value?`opacity-0 transform scale-x-0`:``])},null,2),G(`span`,{class:ve([`block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out`,t.value?`-translate-y-2 -rotate-45`:``])},null,2)],8,Ss)],512))}},ws=`modulepreload`,Ts=function(e){return`/tailwind-practice-note/`+e},Es={};const Ds=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ts(t,n),t in Es)return;Es[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ws,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Os=[{id:`tailwindStartNote`,title:`開始使用`,description:`本段以 <u>Tailwind CSS v4</u> + <u>Vite</u> 作舉例，每個版本的 Tailwind CSS 在不同環境部署略有不同。`,descriptionComponent:null,lists:[{listTitle:`終端機的部分`,listSubtitle:null,listComponent:null,listCode:{terminalCode:`# 新建資料夾專案
mkdir tailwind-project-name
cd tailwind-project-name

# 初始化Vite專案 (選Vue + JavaScript/TypeScript依需求)
npm create vite@latest
# 選 Vue, 再選 JavaScript 或 TypeScript

# 安裝Tailwind v4 + Vite版本
npm install tailwindcss @tailwindcss/vite`,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]},{listTitle:`JavaScript 的部分`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`vite.config.js`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:`import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";  // 增加這一行

export default defineConfig({
  plugins: [
    tailwindcss()  // 增加這一行
  ],
  base: "/tailwind-practice-note/"
});`,vueCode:null}},{detailTitle:`tailwind.config.js`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:`// Tailwind v4 不需要手動設定 tailwind.config.js
// 此 .js 檔僅是讓 VS code 認得此專案為 Tailwind 專案
// 進而提供 Tailwind className 的自動補全功能`,vueCode:null}}]},{listTitle:`CSS 的部分`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`src/style.css`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:`/* 若有要@import字型之類的內容，要寫在"@import "tailwindcss";"之前 */
/* @import url("https://..."); */

@import "tailwindcss";  /* 加入這一行以啟用Tailwind */
@custom-variant dark (&:where(.dark, .dark *));  /* 要啟用Tailwind v4 dark樣式的class模式需增加這一行，否則會是media模式（依瀏覽器決定是否啟用dark樣式） */

/* 視情況決定要不要加入官方套件 */
@plugin "@tailwindcss/typography";  /* 文章排版用，提供".prose"相關樣式 */
@plugin "@tailwindcss/forms";  /* 提供表單元素基本外觀（如input、select、checkbox） */


/* Tailwind的三層結構，可於此處擴充自訂樣式 */
/* base層，用來覆蓋或補充全域基礎樣式 */
@layer base {
  body {
    @apply bg-[#ffffafa] p-0 m-0;
    font-family: Arial, Helvetica, sans-serif;
  }
}

/* 元件層，通常拿來放自訂元件 */
@layer components {
  .testapply {  
    @apply mt-5 text-5xl text-indigo-700 bg-amber-600;
  }
}

/* 工具層，通常放自訂的細部樣式，用來補充Tailwind沒有提供的工具 */
@layer utilities {
  .text-noonsun {
    color: rgb(255, 255, 251);
}`,jsCode:null,vueCode:null}}]},{listTitle:`Vue SFC 的部分`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`若在 Vue SFC 的 <code>&lt;style&gt;</code> 裡面需要用到 Tailwind class`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template> ... </template>
<script setup><\/script>

<style scoped>
/* 若在Vue SFC的<style>裡面需要用到Tailwind class */
/* 需先在裡面加上這行 */
@reference "tailwindcss";


/* 例如使用到Vue的<transition>動畫（此處以fade為例） */
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-[0.12s] ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}


/* 例如使用"::v-deep()"穿透影響子元件樣式 */
::v-deep(table) {
  @apply border border-solid border-gray-500 border-collapse
}
::v-deep(th),
::v-deep(td) {
  @apply border border-solid border-gray-500 p-1
}
</style>`}}]}]},{id:`tailwindOfficialPluginNote`,title:`官方套件`,description:`這裡以 Typography 和 Forms 做舉例。`,descriptionComponent:null,lists:[{listTitle:`Typography 排版套件`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`<code>&lt;div class="prose"&gt; ... &lt;/div&gt;</code></small>`,detailSubtitle:`樣式僅供參考，實際使用可能略有不同。下方灰框表示 <code>.prose</code> 作用範圍。`,detailContent:null,detailComponent:mr(()=>Ds(()=>import(`./TailwindPluginTypographyDemo-CHptThGD.js`),__vite__mapDeps([0,1]))),detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <!-- .prose-wrapper目的在給灰框顯示此SFC作用範圍（其為自訂樣式） */ -->
  <div class="prose-wrapper">
    <article class="prose">
      <h1>Tailwind Typography 範例</h1>
      <p>
        這是一段示範文字，Typography plugin 會自動幫你設定行高、字體大小、段落間距。
      </p>
      <h2>子標題</h2>
      <ul>
        <li>清單項目一</li>
        <li>清單項目二</li>
        <li>清單項目三</li>
      </ul>
      <pre><code>
        &lt;!-- 實際上 code 區域底色會再淺一點 --&gt;
        &lt;script&gt;
          const add(a, b) {
            return a + b;
          };
  
          console.log(add(2 + 3));
        &lt;/script&gt;
      </code></pre>
      <blockquote>
        這是一段引用文字，看起來會有縮排與斜體樣式。
      </blockquote>
    </article>
  </div>
</template>

<script setup><\/script>

<style scoped>
@reference "tailwindcss";

/* .prose-wrapper為自訂樣式，目的在給灰框顯示此SFC作用範圍 */
.prose-wrapper {
  @apply border border-gray-300;
}
</style>`}},{detailTitle:`<code>&lt;div class="not-prose"&gt; ... &lt;/div&gt;</code></small>`,detailSubtitle:`<code>.not-prose</code> 是 Typography 官方提供的 className，會讓其內元素不受 <code>.prose</code> 預設樣式影響。`,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:`<div class="prose">
  <p>這是正常的 Markdown 內容。</p>
  <p>這裡會套用 Typography 官方提供的樣式。</p>

  <div class="not-prose">
    <YourCardComponent />
    <p>這裡不受 Typography 套件樣式影響。</p>
  </div>
</div>
`,cssCode:null,jsCode:null,vueCode:null}}]},{listTitle:`Forms 表單樣式套件`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`一些基本表單元素`,detailSubtitle:`這個套件不像 Typography，不需額外用在 <code>class</code> 中加上特定 className，只要該專案有使用此套件，即會全域套用。`,detailContent:null,detailComponent:mr(()=>Ds(()=>import(`./TailwindPluginBasicFormDemo-DKgSmnhh.js`),[])),detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <form>
    <div class="ml-5 sm:w-96">
      <label class="block mb-3">
        <input type="text" class="w-full rounded-md" placeholder="請輸入姓名" />
      </label>

      <label class="block mb-3">
        <input type="checkbox" />
        <span class="pl-2">複選題</span>
      </label>

      <label class="block mb-3">
        <input type="radio" />
        <span class="pl-2">單選題</span>
      </label>

      <label class="block mb-3">
        <input type="date" class="w-full rounded-md" />
      </label>

      <label class="block mb-3">
        <input type="email" class="w-full rounded-md" placeholder="name@email.com" />
      </label>

      <label class="block mb-3">
        <select class="w-full rounded-md">
          <option value="">-- 請選擇 --</option>
          <option value="1">-- 項目一 --</option>
          <option value="2">-- 項目二 --</option>
        </select>
      </label>

      <label class="block">
        <textarea cols="30" rows="10" class="w-full rounded-md" placeholder="在想些什麼..."></textarea>
      </label>
    </div>
  </form>
</template>

<script setup><\/script>

<style scoped></style>`}},{detailTitle:`登入頁面`,detailSubtitle:null,detailContent:null,detailComponent:mr(()=>Ds(()=>import(`./TailwindPluginLoginPageDemo-Dt6YjkR-.js`),[])),detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <form class="space-y-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email" 
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        id="password"
        type="password"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500" />
        <span class="ml-2">Remember me</span>
      </label>
    </div>
  
    <button
      type="submit" 
      class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      登入
    </button>
  </form>
</template>

<script setup><\/script>

<style scoped></style>`}}]}]},{id:`tailwindDarkModeNote`,title:`Dark Mode`,description:`Tailwind v4 啟用 Dark Mode 有一些步驟要做，接著就可以用 <code>dark:</code> 的 className 來開發深色模式了！`,descriptionComponent:null,lists:[{listTitle:`環境設定`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`src/style.css`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:`@import "tailwindcss";

/* 啟用Tailwind v4的dark模式（class模式） */
@custom-variant dark (&:where(.dark, .dark *));

/* 若未加入上行，Tailwind會預設使用media模式，依瀏覽器（或系統主題）自動切換 */


@plugin " ... ";

@layer base { ... }
@layer components { ... }
@layer utilities { ... }`,jsCode:null,vueCode:null}},{detailTitle:`tailwind.config.js`,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:`// Tailwind v4 不需要由 tailwind.config.js 設定 darkMode 是 "media" 還是 "class"
// 當 src/style.css 中有 "@custom-variant dark dark (&:where(.dark, .dark *));" 就會是 class 模式
// 反之，則會是 media 模式（依瀏覽器決定是否開啟 dark 樣式）`,vueCode:null}},{detailTitle:`<code>class</code> 模式`,detailSubtitle:null,detailContent:`當父元素（通常會用 JavaScript 直接變更在 <code>&lt;html&gt;</code> 的 className 上，直接全域變更）<code>class="dark"</code> 時，子元素就會採用 dark 樣式。`,detailComponent:null,detailCode:{terminalCode:null,htmlCode:`<!-- 子元件會使用 dark 樣式 -->
<div class="dark">
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    ...
  </div>
</div>


<!-- 子元件不會使用 dark 樣式 -->
<div>
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    ...
  </div>
</div>`,cssCode:null,jsCode:null,vueCode:null}},{detailTitle:`<code>media</code> 模式`,detailSubtitle:null,detailContent:`是否啟用 dark 樣式，依瀏覽器設定的外觀模式決定，不需額外添加 <code>class="dark"</code>。`,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}},{detailTitle:`目標 .html`,detailSubtitle:null,detailContent:`Tailwind 不會自動生成 dark 模式的配色，開發者需要自己用 className 指定 dark 模式下的樣式。`,detailComponent:null,detailCode:{terminalCode:null,htmlCode:`<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  ...
</div>`,cssCode:null,jsCode:null,vueCode:null}}]},{listTitle:`一個例子`,listSubtitle:null,listComponent:mr(()=>Ds(()=>import(`./TailwindDarkModeDemo-CJPa3Um3.js`),[])),listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <article class="mx-auto px-8 py-3 my-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
    <h1 class="text-6xl block text-center mt-5 tracking-wider font-bold text-gray-900 dark:text-yellow-500">
      Dark Mode Test
    </h1>

    <div class="flex justify-center mt-5">
      <button
        @click="setLightMode"
        class="
          px-4 py-2 rounded-full bg-white border-gray-400 border-2 cursor-pointer
          hover:bg-gray-100 active:ring-2 active:ring-offset-1 active:ring-yellow-500
        "
      >
        日間模式
        <font-awesome-icon icon="sun" class="text-yellow-500" />
      </button>
      
      <button
        @click="setDarkMode"
        class="
          px-4 py-2 rounded-full bg-gray-700 border-gray-400 border-2 text-white cursor-pointer
          hover:bg-gray-800 active:ring-2 active:ring-offset-1 active:ring-yellow-500
        "
      >
        夜間模式
        <font-awesome-icon icon="moon" class="text-yellow-500" />
      </button>
    </div>

    <p class="mt-5 leading-relaxed dark:text-yellow-500">兄石還手再，陽占由細婆夕米卜母秋停？世知抓請片南央信魚看哭具着牠屋朋斗珠唱朵。來真目中音房員布兩蝴澡天或送象收借品語從，拉雲地這！隻寸下。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">師遠人浪反平知走英空請光，朋會告品校右尾共那冒收冒陽百筆幫明想林！告怕請安現們人春工細三升哪。戊遠圓有就就晚又包月筆青來；坐着哪，久念者找白吃怕主浪知。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">路物得是乾刀胡背雄抄玩停哪丟乾米千。乾坡飯假比申今念，別葉遠浪房蝴孝音几什，止斥升寫夕貓加幸：園步師毛童讀村根法飛但娘八哭戶。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">乙由合內央士是音錯工美頭乍節。節寺京火由友字刃娘請言耍星吹實子坡吧魚昔。月蝸原反久功亮行，和們河！方叫房光夏送玉。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">到個原她裏杯午從年紅五水往想位言平至苗人。冬林幼父能員說波但入文至沒抄步兌聲笑羊！師亮甲，愛香原早第美水丁學固向洋寫色。采看母告夏休幫麻都喝主跑院東干爬飯。羊鳥男視者祖千物時禾禾和工五她草夕才。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">科春交活干會大竹蝴者清！爸物彩至聽你相兒片結字幾杯幫洋呀干邊，京卜示呢外住采息同他千弟：松珠壯嗎共園比。來快半晚因黃怪幸中止前植兄飛幸美十千母旦送。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">足汗包呀已服。或裏百中許光出六米信院害姊辛它止子，做抓草亭員好聲自光面是乞幾。風目姊實南回口神後可天化害別學青民良怕！不重陽。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">課雨英收第來放九他今草問放勿目不久心邊，美他那圓第間往視院向寸別尾玩安昔，往王斥助；假四發能祖第草。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">秋登右昌菜害哭爪哭家汗丁，哪夏多巾友欠犬鳥左有日自「汁兒半內語扒欠辛」聲朵找苗能良即亭知北經呢字一造過入；九波每久里裝八用寸好息一燈叫扒彩次知寸到：的夏裏昌。巾室結都。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">古乞跳麻大合小和抄兒呢只做走主知住去牠工。青松買花來帽胡抱比犬色行浪良民。但爪重物背牙加片！扒皮貝石足星圓都家。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">夕蛋司明飯日園怕視升尺衣蛋比多示和平，西大住樹長美天干友候時言圓欠跳土古反教歡，服青很乍爸友共在草聽：百着但旦首昔吧少昔身來帽目隻食；實故到房由話，詞交枝別。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">生葉真浪弟兄鳥住耳時：忍每鴨追耳新出子而媽乍葉好後次候，節蝴朵嗎朋文干風游科讀做跳澡找女魚兒園向！娘嗎男實弓像水手月苦就話歌：公叫字您有別拉什。來斗字士們封帽，吹毛清乾犬「的火發少晚」。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">錯還前還假丟直浪條遠真喜圓兒？過母呀衣請汁呀內入來羊拍胡進蝴樹古音尾在。共雄定種飛她登還您；父山道黑說未自找穴古身力意們，嗎民牛少，買哪事干彩荷常清發加兒麼雪候對：戊送歌，內因活穿。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">尺胡良動喜青竹笑士反申我每成出和片具和訴。十年從天清頭王枝直到朱南錯，連九力流得裏爸實那世人重。</p>
  </article>
</template>

<script setup>
const setLightMode = () => {
  document.documentElement.classList.remove("dark");
};

const setDarkMode = () => {
  document.documentElement.classList.add("dark");
};
<\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]}]},{id:`tailwindCardNote`,title:`響應式卡片`,description:`包含「放在首頁的卡片」、「成員式卡片」、「文章預覽式卡片」。`,descriptionComponent:null,lists:[{listTitle:`放在首頁的卡片`,listSubtitle:null,listComponent:mr(()=>Ds(()=>import(`./TailwindHomePageCardDemo-B32KRnRx.js`),__vite__mapDeps([2,3,4]))),listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="w-full p-4">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="(card, index) in cards"
        :key="index"
        class="bg-white shadow-lg rounded-3xl overflow-hidden hover:bg-yellow-100 hover:-translate-y-3 duration-300"
      >
        <div class="overflow-hidden">
          <img
            class="hover:scale-125 duration-300"
            :src="card.img" alt="測試卡片圖片1"
          />
        </div>
        <div class="p-4">
          <h2 class="text-purple-500 text-2xl mb-3 tracking-wide">{{ card.title }}</h2>
          <p class="text-gray-500 leading-5 mb-3">{{ card.content }}</p>
          <button
            type="button"
            class="block ml-auto bg-purple-600 text-white text-xl py-2 px-8 rounded-full cursor-pointer hover:bg-purple-800 duration-300"
          >
            click
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../../../../assets/*", { eager: true, as: "url"});

const cards = [
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  },
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  },
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  }
];
<\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]},{listTitle:`成員式卡片`,listSubtitle:null,listComponent:mr(()=>Ds(()=>import(`./TailwindMemberCardDemo-DjxMhmFi.js`),__vite__mapDeps([5,3]))),listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2
              sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
  >
    <img
      src="../../../../assets/Kodak_Tmax400_007.jpg"
      alt="成員照片"
      class="block mx-auto h-24 w-24 rounded-full"
    />
    <div class="text-center space-y-2">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">First Card</p>
        <p class="text-gray-500">First content</p>
      </div>
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 cursor-pointer
                     hover:text-white hover:bg-purple-600 hover:border-transparent
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        click
      </button>
    </div>
  </div>
</template>

<script setup><\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]},{listTitle:`文章預覽式卡片`,listSubtitle:null,listComponent:mr(()=>Ds(()=>import(`./TailwindArticleCardDemo-CEhv8Bq9.js`),__vite__mapDeps([6,3]))),listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 md:h-full w-full md:w-48 object-cover"
          src="../../../../assets/Kodak_Tmax400_007.jpg"
          alt="文章照片"
        />
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          這是標題
        </div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black no-underline hover:underline">這是副標題</a>
        <p class="mt-2 text-gray-500">
          到今天也沒啊啊啊，好看放個。天好時候閱讀的文像然我⋯老師報名大腿，就跟的太太筆記還之類的，想哭拿到真是在他這種，最喜歡的主題購看了四可以：少了方安心了一遇舒服手機。之後我我努力都好好天都⋯大哥的背試看。意是了這些身上一個比較好直接，帽不完反我就很難這種的，來以為有在喜歡超級。上次時的好吃或者，什麼覺得也，很正果就好還，謝大家確定⋯什麼心情不到底有關係是想要家都，停根本是是我覺們家請大家。我覺都沒有，是比當天較子真時候有，太可怕設定年的加上搶文章喜歡你⋯地方給他們，點然後就好，但其會雖然不。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup><\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]}]},{id:`tailwindBulletinBoardNote`,title:`佈告欄`,description:null,descriptionComponent:null,lists:[{listTitle:`留言板`,listSubtitle:`全螢幕的留言板範本（因為此處 Dome 區域寬度不足而無法以全螢幕完全呈現）。`,listComponent:mr(()=>Ds(()=>import(`./TailwindMessageBoardDemo-C5IQ7mOS.js`),__vite__mapDeps([7,3]))),listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="w-full min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="w-[800px]">
      <h1 class="block text-3xl font-bold py-8">寫一個留言版型</h1>
      <div class="w-full flex justify-center items-center">
        <img
          class="w-14 h-14 mr-4 rounded-full"
          src="../../../../assets/Kodak_Tmax400_007.jpg" alt="圖片"
        />
        <input
          class="w-[600px] p-4 rounded-md mr-3"
          type="text" placeholder="請留言"
        />
        <button class="px-10 py-4 bg-blue-500 rounded-md text-white hover:bg-blue-300 duration-300 cursor-pointer">
          發佈
        </button>
      </div>
    </div>
  </div>
</template>

<script setup><\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]}]},{id:`tailwindLoginPageNote`,title:`登入頁面`,description:null,descriptionComponent:null,lists:[{listTitle:`全螢幕登入頁面`,listSubtitle:`全螢幕的登入頁面範本（因為此處 Dome 區域寬度不足而無法以全螢幕完全呈現）。`,listComponent:mr(()=>Ds(()=>import(`./TailwindFullScreenLoginPageDemo-BKFA7a6B.js`),[])),listCode:{terminalCode:null,htmlCode:`<!-- 純html近似寫法 -->
<div class="relative">
  <div
    id="loginModal"
    class="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center bg-gray-900/70 opacity-0 pointer-events-none"
  >
    <div class="w-[90%] sm:w-[50%] lg:w-[30%] p-4 bg-white rounded-md shadow-md duration-300">
      <h2 class="text-center text-purple-600 font-bold mb-10 text-3xl">登入您的帳號</h2>
      <p class="mb-2">電子信箱</p>
      <input
        type="email"
        class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
      />
      <p class="mt-4 mb-2">密碼</p>
      <input
        type="password"
        class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
      />
      <a
        href="javascript:void(0)"
        class="block mt-2 text-blue-400"
      >
        忘記密碼
      </a>
      <div class="flex gap-3.5">
        <button
          id="closeLoginBtn"
          class="w-full bg-purple-500 hover:bg-purple-700 active:bg-purple-800 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
        >
          取消
        </button>
        <button
          class="w-full bg-purple-600 hover:bg-purple-800 active:bg-purple-900 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
        >
          登入
        </button>
      </div>
    </div>
  </div>
</div>
<div class="w-full min-h-screen bg-gray-200 flex items-center justify-center">
  <div class="w-[800px] flex flex-col items-center">
    <h1 class="block text-3xl font-bold py-8">點按 登入 跳出登入介面</h1>
    <button
      id="openLoginBtn"
      class="px-10 py-4 bg-blue-500 rounded-md text-white hover:bg-blue-300 active:bg-blue-400 duration-300 cursor-pointer"
    >
      登入
    </button>
  </div>
</div>

<script>
  const openLoginBtn = document.getElementById("openLoginBtn");
  const closeLoginBtn = document.getElementById("closeLoginBtn");
  const loginModal = document.getElementById("loginModal");

  openLoginBtn.addEventListener("click", () => {
    loginModal.classList.remove("opacity-0", "pointer-events-none")
  });

  closeLoginBtn.addEventListener("click", () => {
    loginModal.classList.add("opacity-0", "pointer-events-none")
  });
<\/script>`,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="w-full min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="w-[800px] flex flex-col items-center">
      <h1 class="block text-3xl font-bold py-8">點按 登入 跳出登入介面</h1>
      <button
        @click="openModal"
        class="px-10 py-4 bg-blue-500 rounded-md text-white hover:bg-blue-300 active:bg-blue-400 duration-300 cursor-pointer active:ring-2 ring-blue-400 ring-offset-2"
      >
        登入
      </button>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="showModal"
      @click.self="closeModal"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900/70 z-[9999]"
    >
      <div class="w-[90%] sm:w-[50%] lg:w-[30%] p-4 bg-white rounded-md shadow-md duration-300">
        <button
          @click="closeModal"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-200 active:text-gray-700 text-5xl font-bold leading-none cursor-pointer"
        >
          &times;
        </button>

        <h2 class="text-center text-purple-600 font-bold mb-10 text-3xl">
          登入您的帳號
        </h2>

        <p class="mb-2">電子信箱</p>
        <input
          v-model="email"
          type="email"
          class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
        />

        <p class="mt-4 mb-2">密碼</p>
        <input
          v-model="password"
          type="password"
          class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
        />

        <a
          href="javascript:void(0)"
          class="block mt-2 text-blue-400"
        >
          忘記密碼
        </a>

        <div class="flex gap-3.5">
          <button
            @click="closeModal"
            class="w-full bg-purple-500 hover:bg-purple-700 active:bg-purple-800 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
          >
            取消
          </button>

          <button
            @click="login"
            class="w-full bg-purple-600 hover:bg-purple-800 active:bg-purple-900 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { Teleport, ref, onMounted, onBeforeUnmount } from "vue";

const showModal = ref(false);
const email = ref("");
const password = ref("");

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const login = () => {
  alert(\`登入中...\\nEmail: \${email.value}\\nPassword: \${password.value}\`)
  closeModal();
};


// 監聽Esc鍵
const handleKeydown = (e) => {
  if (e.key === "Escape" && showModal.value) {
    closeModal();
  };
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
<\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null}}]}]},{id:`tailwindSomeInterestingNote`,title:`一些酷元件`,description:null,descriptionComponent:null,lists:[{listTitle:`翻轉卡片`,listSubtitle:null,listComponent:null,listCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:null},listDetails:[{detailTitle:`一張翻轉卡片`,detailSubtitle:null,detailContent:null,detailComponent:mr(()=>Ds(()=>import(`./TailwindDoubleSidedSingleCardDemo-CemM4aO-.js`),[])),detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="perspective-normal">
    <div class="h-[240px] w-[160px] relative transform transform-3d active:rotate-y-180 duration-300 mx-auto">
      <div class="h-full w-full absolute rounded-2xl shadow-xl backface-hidden cursor-pointer bg-[url('src/assets/Kodak_Tmax400_007.jpg')] bg-center bg-cover">
        <p class="text-white mt-1 ml-1">正面</p>
      </div>
      <div class="h-full w-full absolute rounded-2xl shadow-xl backface-hidden rotate-y-180 bg-[url('src/assets/IMG_2073.jpg')] bg-center bg-cover">
        <p class="text-white mt-1 ml-1">背面</p>
      </div>
    </div>
  </div>
</template>

<script setup><\/script>

<style scoped></style>`}},{detailTitle:`多張翻轉卡片`,detailSubtitle:null,detailContent:null,detailComponent:mr(()=>Ds(()=>import(`./TailwindDoubleSidedMultipleCardsDemo-8wqXbUF_.js`),__vite__mapDeps([8,3,4]))),detailCode:{terminalCode:null,htmlCode:null,cssCode:null,jsCode:null,vueCode:`<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
    <div
      v-for="(card, index) in cards"
      :key="index"
      @mousedown="flipped[index] = true"
      @mouseup="flipped[index] = false"
      @mouseleave="flipped[index] = false"
      @touchstart="flipped[index] = true"
      @touchend="flipped[index] = false"
      class="h-[240px] w-[160px] perspective-normal cursor-pointer mx-auto"
    >
      <div
        class="relative h-full w-full duration-500 transform-3d"
        :class="{ 'rotate-y-180': flipped[index] }"
      >
        <!-- 正面 -->
        <div
          class="absolute h-full w-full rounded-2xl shadow-xl backface-hidden bg-center bg-cover"
          :style="\`background-image: url(\${card.frontImage})\`"
        >
          <p class="text-white mt-1 ml-1">正面</p>
        </div>
        
        <!-- 背面 -->
        <div
          class="absolute h-full w-full rounded-2xl shadow-xl backface-hidden bg-center bg-cover rotate-y-180"
          :style="\`background-image: url(\${card.backImage})\`"
        >
          <p class="text-white mt-1 ml-1">背面</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../../../../../assets/*", { eager: true, as: "url"});

const cards = [
  {
    id: "001",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "002",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: new URL("../../../../../assets/IMG_2073.jpg", import.meta.url).href
  },
  {
    id: "003",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "004",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "005",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  }
];

const flipped = ref(cards.map(() => false));
<\/script>

<style scoped></style>`}}]}]}];var ks=l(o(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var S=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function C(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=S.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],e[0]===`(`&&n++)}return i}).map(e=>`(${e})`).join(t)}var w=/\b\B/,T=`[a-zA-Z]\\w*`,E=`[a-zA-Z_]\\w*`,D=`\\b\\d+(\\.\\d+)?`,ee=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,O=`\\b(0b[01]+)`,k=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,te=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},A={begin:`\\\\[\\s\\S]`,relevance:0},j={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[A]},M={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[A]},N={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ne=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},P=ne(`//`,`$`),re=ne(`/\\*`,`\\*/`),ie=ne(`#`,`$`),ae={scope:`number`,begin:D,relevance:0},oe={scope:`number`,begin:ee,relevance:0},F={scope:`number`,begin:O,relevance:0},se={scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[A,{begin:/\[/,end:/\]/,relevance:0,contains:[A]}]},ce={scope:`title`,begin:T,relevance:0},le={scope:`title`,begin:E,relevance:0},ue={begin:`\\.\\s*`+E,relevance:0},de=Object.freeze({__proto__:null,APOS_STRING_MODE:j,BACKSLASH_ESCAPE:A,BINARY_NUMBER_MODE:F,BINARY_NUMBER_RE:O,COMMENT:ne,C_BLOCK_COMMENT_MODE:re,C_LINE_COMMENT_MODE:P,C_NUMBER_MODE:oe,C_NUMBER_RE:ee,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:T,MATCH_NOTHING_RE:w,METHOD_GUARD:ue,NUMBER_MODE:ae,NUMBER_RE:D,PHRASAL_WORDS_MODE:N,QUOTE_STRING_MODE:M,REGEXP_MODE:se,RE_STARTERS_RE:k,SHEBANG:te,TITLE_MODE:ce,UNDERSCORE_IDENT_RE:E,UNDERSCORE_TITLE_MODE:le});function fe(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function pe(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function me(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=fe,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function he(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function ge(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function _e(e,t){e.relevance===void 0&&(e.relevance=1)}var ve=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},ye=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],be=`keyword`;function xe(e,t,n=be){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,xe(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,Se(n[0],n[1])]})}}function Se(e,t){return t?Number(t):Ce(e)?0:1}function Ce(e){return ye.includes(e.toLowerCase())}var we={},Te=e=>{console.error(e)},Ee=(e,...t)=>{console.log(`WARN: ${e}`,...t)},De=(e,t)=>{we[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),we[`${e}/${t}`]=!0)},Oe=Error();function I(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function ke(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Te(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),Oe;if(typeof e.beginScope!=`object`||e.beginScope===null)throw Te(`beginScope must be object`),Oe;I(e,e.begin,{key:`beginScope`}),e.begin=C(e.begin,{joinWith:``})}}function Ae(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Te(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),Oe;if(typeof e.endScope!=`object`||e.endScope===null)throw Te(`endScope must be object`),Oe;I(e,e.end,{key:`endScope`}),e.end=C(e.end,{joinWith:``})}}function je(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Me(e){je(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),ke(e),Ae(e)}function Ne(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=t(C(e,{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[pe,ge,Me,ve].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[me,he,_e].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=xe(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return Fe(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function Pe(e){return e?e.endsWithParent||Pe(e.starts):!1}function Fe(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Pe(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Ie=`11.11.1`,Le=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},Re=i,ze=a,Be=Symbol(`nomatch`),Ve=7,He=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=j(n[1]);return t||(Ee(s.replace(`{}`,n[1])),Ee(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||j(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(De(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),De(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};ie(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,ie(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!k.keywords){A.addText(M);return}let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(M),n=``;for(;t;){n+=M.substring(e,t.index);let r=D.case_insensitive?t[0].toLowerCase():t[0],i=u(k,r);if(i){let[e,a]=i;if(A.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Ve&&(N+=a),e.startsWith(`_`))n+=t[0];else{let n=D.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(M)}n+=M.substring(e),A.addText(n)}function f(){if(M===``)return;let e=null;if(typeof k.subLanguage==`string`){if(!t[k.subLanguage]){A.addText(M);return}e=v(k.subLanguage,M,!0,te[k.subLanguage]),te[k.subLanguage]=e._top}else e=S(M,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(N+=e.relevance),A.__addSublanguage(e._emitter,e.language)}function p(){k.subLanguage==null?d():f(),M=``}function m(e,t){e!==``&&(A.startScope(t),A.addText(e),A.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=D.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(M=i,d(),M=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&A.openNode(D.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(M,D.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),M=``):e.beginScope._multi&&(h(e.beginScope,t),M=``)),k=Object.create(e,{parent:{value:k}}),k}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return k.matcher.regexIndex===0?(M+=e[0],1):(re=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?M+=t:(n.excludeBegin&&(M+=t),p(),!n.returnBegin&&!n.excludeBegin&&(M=t)),g(n,e),n.returnBegin?0:t.length}function C(e){let t=e[0],r=n.substring(e.index),i=_(k,e,r);if(!i)return Be;let a=k;k.endScope&&k.endScope._wrap?(p(),m(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(p(),h(k.endScope,e)):a.skip?M+=t:(a.returnEnd||a.excludeEnd||(M+=t),p(),a.excludeEnd&&(M=t));do k.scope&&A.closeNode(),!k.skip&&!k.subLanguage&&(N+=k.relevance),k=k.parent;while(k!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function w(){let e=[];for(let t=k;t!==D;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>A.openNode(e))}let T={};function E(t,r){let a=r&&r[0];if(M+=t,a==null)return p(),0;if(T.type===`begin`&&r.type===`end`&&T.index===r.index&&a===``){if(M+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=T.rule,t}return 1}if(T=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(k.scope||`<unnamed>`)+`"`);throw e.mode=k,e}else if(r.type===`end`){let e=C(r);if(e!==Be)return e}if(r.type===`illegal`&&a===``)return M+=`
`,1;if(P>1e5&&P>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return M+=a,a.length}let D=j(e);if(!D)throw Te(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let ee=Ne(D),O=``,k=a||ee,te={},A=new l.__emitter(l);w();let M=``,N=0,ne=0,P=0,re=!1;try{if(D.__emitTokens)D.__emitTokens(n,A);else{for(k.matcher.considerAll();;){P++,re?re=!1:k.matcher.considerAll(),k.matcher.lastIndex=ne;let e=k.matcher.exec(n);if(!e)break;let t=n.substring(ne,e.index),r=E(t,e);ne=e.index+r}E(n.substring(ne))}return A.finalize(),O=A.toHTML(),{language:e,value:O,relevance:N,illegal:!1,_emitter:A,_top:k}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:Re(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:ne,context:n.slice(ne-100,ne+100),mode:t.mode,resultSoFar:O},_emitter:A};if(o)return{language:e,value:Re(n),illegal:!1,relevance:0,errorRaised:t,_emitter:A,_top:k};throw t}}function b(e){let t={value:Re(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function S(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(j).filter(N).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(j(e.language).supersetOf===t.language)return 1;if(j(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function C(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function w(e){let t=null,n=d(e);if(u(n))return;if(ie(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new Le(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):S(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,C(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),ie(`after:highlightElement`,{el:e,result:i,text:r})}function T(e){l=ze(l,e)}let E=()=>{O(),De(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function D(){O(),De(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let ee=!1;function O(){function e(){O()}if(document.readyState===`loading`){ee||window.addEventListener(`DOMContentLoaded`,e,!1),ee=!0;return}document.querySelectorAll(l.cssSelector).forEach(w)}function k(n,r){let i=null;try{i=r(e)}catch(e){if(Te(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)Te(e);else throw e;i=c}i.name||=n,t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&M(i.aliases,{languageName:n})}function te(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function A(){return Object.keys(t)}function j(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function M(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function N(e){let t=j(e);return t&&!t.disableAutodetect}function ne(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function P(e){ne(e),a.push(e)}function re(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function ie(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ae(e){return De(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),De(`10.7.0`,`Please use highlightElement now.`),w(e)}for(let t in Object.assign(e,{highlight:p,highlightAuto:S,highlightAll:O,highlightElement:w,highlightBlock:ae,configure:T,initHighlighting:E,initHighlightingOnLoad:D,registerLanguage:k,unregisterLanguage:te,listLanguages:A,getLanguage:j,registerAliases:M,autoDetection:N,inherit:ze,addPlugin:P,removePlugin:re}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Ie,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h},de)typeof de[t]==`object`&&n(de[t]);return Object.assign(e,de),e},L=He({});L.newInstance=()=>He({}),t.exports=L,L.HighlightJS=L,L.default=L}))()).default;function As(e){let t=e.regex,n={},r={begin:/\$\{/,end:/\}/,contains:[`self`,{begin:/:-/,contains:[n]}]};Object.assign(n,{className:`variable`,variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,`(?![\\w\\d])(?![$])`)},r]});let i={className:`subst`,begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},a=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:`comment`}}),o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:`string`})]}},s={className:`string`,begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,i]};i.contains.push(s);let c={match:/\\"/},l={className:`string`,begin:/'/,end:/'/},u={match:/\\'/},d={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:`number`},e.NUMBER_MODE,n]},f=e.SHEBANG({binary:`(${[`fish`,`bash`,`zsh`,`sh`,`csh`,`ksh`,`tcsh`,`dash`,`scsh`].join(`|`)})`,relevance:10}),p={className:`function`,begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},m=[`if`,`then`,`else`,`elif`,`fi`,`time`,`for`,`while`,`until`,`in`,`do`,`done`,`case`,`esac`,`coproc`,`function`,`select`],h=[`true`,`false`],g={match:/(\/[a-z._-]+)+/},_=[`break`,`cd`,`continue`,`eval`,`exec`,`exit`,`export`,`getopts`,`hash`,`pwd`,`readonly`,`return`,`shift`,`test`,`times`,`trap`,`umask`,`unset`],v=[`alias`,`bind`,`builtin`,`caller`,`command`,`declare`,`echo`,`enable`,`help`,`let`,`local`,`logout`,`mapfile`,`printf`,`read`,`readarray`,`source`,`sudo`,`type`,`typeset`,`ulimit`,`unalias`],y=`autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp`.split(`.`),b=`chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes`.split(`.`);return{name:`Bash`,aliases:[`sh`,`zsh`],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:m,literal:h,built_in:[..._,...v,`set`,`shopt`,...y,...b]},contains:[f,e.SHEBANG(),p,d,a,o,g,s,c,l,u,n]}}function js(e){let t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,i={className:`symbol`,begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{className:`keyword`,begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(a,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:`string`}),c=e.inherit(e.QUOTE_STRING_MODE,{className:`string`}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:`attr`,begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:`string`,endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:`HTML, XML`,aliases:[`html`,`xhtml`,`rss`,`atom`,`xjb`,`xsd`,`xsl`,`plist`,`wsf`,`svg`],case_insensitive:!0,unicodeRegex:!0,contains:[{className:`meta`,begin:/<![a-z]/,end:/>/,relevance:10,contains:[a,c,s,o,{begin:/\[/,end:/\]/,contains:[{className:`meta`,begin:/<![a-z]/,end:/>/,contains:[a,o,c,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:`meta`,end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:`tag`,begin:/<style(?=\s|>)/,end:/>/,keywords:{name:`style`},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:[`css`,`xml`]}},{className:`tag`,begin:/<script(?=\s|>)/,end:/>/,keywords:{name:`script`},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:[`javascript`,`handlebars`,`xml`]}},{className:`tag`,begin:/<>|<\/>/},{className:`tag`,begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:`name`,begin:n,relevance:0,starts:l}]},{className:`tag`,begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:`name`,begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var Ms=e=>({IMPORTANT:{scope:`meta`,begin:`!important`},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:`number`,begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:`built_in`,begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:`selector-attr`,begin:/\[/,end:/\]/,illegal:`$`,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:`number`,begin:e.NUMBER_RE+`(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,relevance:0},CSS_VARIABLE:{className:`attr`,begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ns=`a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video`.split(`.`),Ps=`defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath`.split(`.`),Fs=[...Ns,...Ps],Is=`any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height`.split(`.`).sort().reverse(),Ls=`active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where`.split(`.`).sort().reverse(),Rs=[`after`,`backdrop`,`before`,`cue`,`cue-region`,`first-letter`,`first-line`,`grammar-error`,`marker`,`part`,`placeholder`,`selection`,`slotted`,`spelling-error`].sort().reverse(),zs=`accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom`.split(`.`).sort().reverse();function Bs(e){let t=e.regex,n=Ms(e),r={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},i=/@-?\w[\w]*(-\w+)*/,a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:`CSS`,case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:`from to`},classNameAliases:{keyframePosition:`selector-tag`},contains:[n.BLOCK_COMMENT,r,n.CSS_NUMBER_MODE,{className:`selector-id`,begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:`selector-class`,begin:`\\.[a-zA-Z-][a-zA-Z0-9_-]*`,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:`selector-pseudo`,variants:[{begin:`:(`+Ls.join(`|`)+`)`},{begin:`:(:)?(`+Rs.join(`|`)+`)`}]},n.CSS_VARIABLE,{className:`attribute`,begin:`\\b(`+zs.join(`|`)+`)\\b`},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:`url data-uri`},contains:[...a,{className:`string`,begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:`[{;]`,relevance:0,illegal:/:/,contains:[{className:`keyword`,begin:i},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:`and or not only`,attribute:Is.join(` `)},contains:[{begin:/[a-z-]+(?=:)/,className:`attribute`},...a,n.CSS_NUMBER_MODE]}]},{className:`selector-tag`,begin:`\\b(`+Fs.join(`|`)+`)\\b`}]}}var Vs=`[A-Za-z$_][0-9A-Za-z$_]*`,Hs=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),Us=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],Ws=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),Gs=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Ks=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],qs=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`global`],Js=[].concat(Ks,Ws,Gs);function Ys(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=Vs,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:Vs,keyword:Hs,literal:Us,built_in:Js,"variable.language":qs},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},C={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...Ws,...Gs]}},w={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},T={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},E={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function D(e){return t.concat(`(?!`,e.join(`|`),`)`)}let ee={match:t.concat(/\b/,D([...Ks,`super`,`import`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},O={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},k={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},te=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,A={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(te)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),w,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,C,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},A,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:te,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},T,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},O,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},ee,E,S,k,{match:/\$[(.]/}]}}var Xs=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Zs={class:`max-w-7xl`},Qs={class:`flex flex-col gap-5 mb-8 lg:flex-row`},$s={class:`flex-none lg:min-w-[200px] lg:mb-4`},ec={class:`list-none p-0 m-0 flex flex-wrap gap-2 lg:flex-col lg:gap-0`},tc=[`onClick`],nc={class:`text-2xl mt-0 mb-2`},rc=[`innerHTML`],ic={key:1},ac={key:2},oc=[`innerHTML`],sc=[`innerHTML`],cc={key:1,class:`p-4 mb-2 not-prose font-sans`},lc={key:2,class:`code`},uc={key:0},dc={class:`language-bash`},fc={key:1},pc={class:`html`},mc={key:2},hc={class:`language-css`},gc={key:3},_c={class:`javascript`},vc={class:`html`},yc={key:3},bc=[`innerHTML`],xc=[`innerHTML`],Sc=[`innerHTML`],Cc={key:2,class:`p-4 mb-2 not-prose font-sans`},wc={key:3,class:`code`},Tc={key:0},Ec={class:`language-bash`},Dc={key:1},Oc={class:`html`},kc={key:2},Ac={class:`language-css`},jc={key:3},Mc={class:`javascript`},Nc={class:`html`},Pc=Xs({__name:`TailwindNoteView`,setup(e){let t=Os,n=Gt(t[6].id),r=Xa(()=>t.find(e=>e.id===n.value)||t[0]);ks.registerLanguage(`bash`,As),ks.registerLanguage(`html`,js),ks.registerLanguage(`css`,Bs),ks.registerLanguage(`javascript`,Ys),wr(()=>{_n(()=>ks.highlightAll())});function i(){_n(()=>{document.querySelectorAll(`pre code`).forEach(e=>{delete e.dataset.highlighted}),ks.highlightAll()})}return(e,a)=>(U(),W(`div`,Zs,[G(`div`,Qs,[G(`nav`,$s,[G(`ul`,ec,[(U(!0),W(H,null,zr(Jt(t),e=>(U(),W(`li`,{key:e.id,class:ve([`p-2.5 cursor-pointer rounded-sm mb-0 px-3 py-2 border border-solid border-[#cccccc] transition-colors lg:border-0 lg:mb-1`,e.id===n.value?`bg-[#ffc107] text-gray-700`:`hover:bg-gray-200`]),onClick:t=>n.value=e.id},Ce(e.title),11,tc))),128))])]),K(po,{name:`fade`,mode:`out-in`,onAfterEnter:i},{default:kn(()=>[r.value?(U(),W(`section`,{key:r.value.id,class:`prose prose-custom w-full`},[G(`h3`,nc,Ce(r.value.title),1),a[2]||=G(`hr`,{class:`mb-3`},null,-1),r.value.description?(U(),W(`div`,{key:0,innerHTML:r.value.description,class:`mb-9`},null,8,rc)):q(``,!0),r.value.descriptionComponent?(U(),W(`div`,ic,[(U(),ma(Ir(r.value.descriptionComponent)))])):q(``,!0),r.value.lists.length&&r.value.lists[0].listTitle?(U(),W(`ul`,ac,[(U(!0),W(H,null,zr(r.value.lists,e=>(U(),W(`li`,{key:e.listTitle,class:`mb-15`},[G(`h4`,{class:`text-[22px]`,innerHTML:e.listTitle},null,8,oc),e.listSubtitle?(U(),W(`div`,{key:0,innerHTML:e.listSubtitle,class:`mb-7`},null,8,sc)):q(``,!0),e.listComponent?(U(),W(`div`,cc,[(U(),ma(Ir(e.listComponent)))])):q(``,!0),e.listCode.terminalCode||e.listCode.htmlCode||e.listCode.cssCode||e.listCode.jsCode||e.listCode.vueCode?(U(),W(`div`,lc,[e.listCode.terminalCode?(U(),W(`pre`,uc,[G(`code`,dc,Ce(e.listCode.terminalCode),1)])):q(``,!0),e.listCode.htmlCode?(U(),W(`pre`,fc,[G(`code`,pc,Ce(e.listCode.htmlCode),1)])):q(``,!0),e.listCode.cssCode?(U(),W(`pre`,mc,[G(`code`,hc,Ce(e.listCode.cssCode),1)])):q(``,!0),e.listCode.jsCode?(U(),W(`pre`,gc,[G(`code`,_c,Ce(e.listCode.jsCode),1)])):q(``,!0),e.listCode.vueCode?(U(),W(H,{key:4},[a[0]||=Sa(` Vue 3 SFC（使用Composition API）這樣寫： `,-1),G(`pre`,null,[G(`code`,vc,Ce(e.listCode.vueCode),1)])],64)):q(``,!0)])):q(``,!0),e.listDetails.length&&e.listDetails[0].detailTitle?(U(),W(`ol`,yc,[(U(!0),W(H,null,zr(e.listDetails,e=>(U(),W(`li`,{key:e.detailTitle,class:`mb-7`},[G(`h5`,{innerHTML:e.detailTitle,class:`font-medium`},null,8,bc),e.detailSubtitle?(U(),W(`div`,{key:0,innerHTML:e.detailSubtitle,class:`before:content-['-'] before:mr-1 text-gray-800/75 text-xs italic mb-2 [&_code]:not-italic`},null,8,xc)):q(``,!0),e.detailContent?(U(),W(`div`,{key:1,innerHTML:e.detailContent,class:`mt-4`},null,8,Sc)):q(``,!0),e.detailComponent?(U(),W(`div`,Cc,[(U(),ma(Ir(e.detailComponent)))])):q(``,!0),e.detailCode.terminalCode||e.detailCode.htmlCode||e.detailCode.cssCode||e.detailCode.jsCode||e.detailCode.vueCode?(U(),W(`div`,wc,[e.detailCode.terminalCode?(U(),W(`pre`,Tc,[G(`code`,Ec,Ce(e.detailCode.terminalCode),1)])):q(``,!0),e.detailCode.htmlCode?(U(),W(`pre`,Dc,[G(`code`,Oc,Ce(e.detailCode.htmlCode),1)])):q(``,!0),e.detailCode.cssCode?(U(),W(`pre`,kc,[G(`code`,Ac,Ce(e.detailCode.cssCode),1)])):q(``,!0),e.detailCode.jsCode?(U(),W(`pre`,jc,[G(`code`,Mc,Ce(e.detailCode.jsCode),1)])):q(``,!0),e.detailCode.vueCode?(U(),W(H,{key:4},[a[1]||=Sa(` Vue 3 SFC（使用Composition API）這樣寫： `,-1),G(`pre`,null,[G(`code`,Nc,Ce(e.detailCode.vueCode),1)])],64)):q(``,!0)])):q(``,!0)]))),128))])):q(``,!0)]))),128))])):q(``,!0)])):q(``,!0)]),_:1})])]))}},[[`__scopeId`,`data-v-4e9a6d5e`]]),Fc={class:`p-5 font-serif max-w-[1440px] mx-auto`},Ic={__name:`App`,setup(e){return(e,t)=>(U(),W(H,null,[K(Cs),G(`div`,Fc,[K(Pc)])],64))}};
/*!
* Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2025 Fonticons, Inc.
*/
function Lc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Rc(e){if(Array.isArray(e))return e}function zc(e){if(Array.isArray(e))return Lc(e)}function Bc(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Vc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Qc(r.key),r)}}function Hc(e,t,n){return t&&Vc(e.prototype,t),n&&Vc(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function Uc(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=el(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function Y(e,t,n){return(t=Qc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wc(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Gc(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Kc(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qc(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Jc(Object(n),!0).forEach(function(t){Y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yc(e,t){return Rc(e)||Gc(e,t)||el(e,t)||Kc()}function Xc(e){return zc(e)||Wc(e)||el(e)||qc()}function Zc(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Qc(e){var t=Zc(e,`string`);return typeof t==`symbol`?t:t+``}function $c(e){"@babel/helpers - typeof";return $c=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$c(e)}function el(e,t){if(e){if(typeof e==`string`)return Lc(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lc(e,t):void 0}}var tl=function(){},nl={},rl={},il=null,al={mark:tl,measure:tl};try{typeof window<`u`&&(nl=window),typeof document<`u`&&(rl=document),typeof MutationObserver<`u`&&(il=MutationObserver),typeof performance<`u`&&(al=performance)}catch{}var ol=(nl.navigator||{}).userAgent,sl=ol===void 0?``:ol,cl=nl,Z=rl,ll=il,ul=al;cl.document;var dl=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener==`function`&&typeof Z.createElement==`function`,fl=~sl.indexOf(`MSIE`)||~sl.indexOf(`Trident/`),pl,ml=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hl=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,gl={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},_l={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},vl=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Q=`classic`,yl=`duotone`,bl=`sharp`,xl=`sharp-duotone`,Sl=`chisel`,Cl=`etch`,wl=`jelly`,Tl=`jelly-duo`,El=`jelly-fill`,Dl=`notdog`,Ol=`notdog-duo`,kl=`slab`,Al=`slab-press`,jl=`thumbprint`,Ml=`utility`,Nl=`utility-duo`,Pl=`utility-fill`,Fl=`whiteboard`,Il=`Classic`,Ll=`Duotone`,Rl=`Sharp`,zl=`Sharp Duotone`,Bl=`Chisel`,Vl=`Etch`,Hl=`Jelly`,Ul=`Jelly Duo`,Wl=`Jelly Fill`,Gl=`Notdog`,Kl=`Notdog Duo`,ql=`Slab`,Jl=`Slab Press`,Yl=`Thumbprint`,Xl=`Utility`,Zl=`Utility Duo`,Ql=`Utility Fill`,$l=`Whiteboard`,eu=[Q,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl];pl={},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(pl,Q,Il),yl,Ll),bl,Rl),xl,zl),Sl,Bl),Cl,Vl),wl,Hl),Tl,Ul),El,Wl),Dl,Gl),Y(Y(Y(Y(Y(Y(Y(Y(pl,Ol,Kl),kl,ql),Al,Jl),jl,Yl),Ml,Xl),Nl,Zl),Pl,Ql),Fl,$l);var tu={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},nu={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ru=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),iu={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},au=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ou={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},su=[`kit`];Y(Y({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var cu={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},lu={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},uu={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},du={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},fu,pu={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},mu=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];fu={},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(fu,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),`notdog`,`Notdog`),Y(Y(Y(Y(Y(Y(Y(Y(fu,`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),Y(Y({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var hu={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},gu={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},_u={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},vu=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(mu,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),yu=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],bu=[1,2,3,4,5,6,7,8,9,10],xu=bu.concat([11,12,13,14,15,16,17,18,19,20]),Su=[].concat(Xc(Object.keys(gu)),yu,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,pu.GROUP,pu.SWAP_OPACITY,pu.PRIMARY,pu.SECONDARY],bu.map(function(e){return`${e}x`}),xu.map(function(e){return`w-${e}`})),Cu={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},wu=`___FONT_AWESOME___`,Tu=16,Eu=`fa`,Du=`svg-inline--fa`,Ou=`data-fa-i2svg`,ku=`data-fa-pseudo-element`,Au=`data-fa-pseudo-element-pending`,ju=`data-prefix`,Mu=`data-icon`,Nu=`fontawesome-i2svg`,Pu=`async`,Fu=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Iu=[`::before`,`::after`,`:before`,`:after`],Lu=function(){try{return!0}catch{return!1}}();function Ru(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Q]}})}var zu=X({},gl);zu[Q]=X(X(X(X({},{"fa-duotone":`duotone`}),gl[Q]),ou.kit),ou[`kit-duotone`]);var Bu=Ru(zu),Vu=X({},iu);Vu[Q]=X(X(X(X({},{duotone:`fad`}),Vu[Q]),du.kit),du[`kit-duotone`]);var Hu=Ru(Vu),Uu=X({},_u);Uu[Q]=X(X({},Uu[Q]),uu.kit);var Wu=Ru(Uu),Gu=X({},hu);Gu[Q]=X(X({},Gu[Q]),cu.kit),Ru(Gu);var Ku=ml,qu=`fa-layers-text`,Ju=hl,Yu=X({},tu);Ru(Yu);var Xu=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Zu=_l,Qu=[].concat(Xc(su),Xc(Su)),$u=cl.FontAwesomeConfig||{};function ed(e){var t=Z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function td(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}Z&&typeof Z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Yc(e,2),n=t[0],r=t[1],i=td(ed(n));i!=null&&($u[r]=i)});var nd={styleDefault:`solid`,familyDefault:Q,cssPrefix:Eu,replacementClass:Du,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$u.familyPrefix&&($u.cssPrefix=$u.familyPrefix);var rd=X(X({},nd),$u);rd.autoReplaceSvg||(rd.observeMutations=!1);var $={};Object.keys(nd).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(t){rd[e]=t,id.forEach(function(e){return e($)})},get:function(){return rd[e]}})}),Object.defineProperty($,`familyPrefix`,{enumerable:!0,set:function(e){rd.cssPrefix=e,id.forEach(function(e){return e($)})},get:function(){return rd.cssPrefix}}),cl.FontAwesomeConfig=$;var id=[];function ad(e){return id.push(e),function(){id.splice(id.indexOf(e),1)}}var od=Tu,sd={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cd(e){if(!(!e||!dl)){var t=Z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return Z.head.insertBefore(t,r),e}}var ld=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function ud(){for(var e=12,t=``;e-- >0;)t+=ld[Math.random()*62|0];return t}function dd(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fd(e){return e.classList?dd(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function pd(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function md(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${pd(e[n])}" `},``).trim()}function hd(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function gd(e){return e.size!==sd.size||e.x!==sd.x||e.y!==sd.y||e.rotate!==sd.rotate||e.flipX||e.flipY}function _d(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:`translate(${n/2} 256)`},a=`translate(${t.x*32}, ${t.y*32}) `,o=`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `,s=`rotate(${t.rotate} 0 0)`,c={transform:`${a} ${o} ${s}`},l={transform:`translate(${r/2*-1} -256)`};return{outer:i,inner:c,path:l}}function vd(e){var t=e.transform,n=e.width,r=n===void 0?Tu:n,i=e.height,a=i===void 0?Tu:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&fl?c+=`translate(${t.x/od-r/2}em, ${t.y/od-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/od}em), calc(-50% + ${t.y/od}em)) `:c+=`translate(${t.x/od}em, ${t.y/od}em) `,c+=`scale(${t.size/od*(t.flipX?-1:1)}, ${t.size/od*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var yd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function bd(){var e=Eu,t=Du,n=$.cssPrefix,r=$.replacementClass,i=yd;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var xd=!1;function Sd(){$.autoAddCss&&!xd&&(cd(bd()),xd=!0)}var Cd={mixout:function(){return{dom:{css:bd,insertCss:Sd}}},hooks:function(){return{beforeDOMElementCreation:function(){Sd()},beforeI2svg:function(){Sd()}}}},wd=cl||{};wd[wu]||(wd[wu]={}),wd[wu].styles||(wd[wu].styles={}),wd[wu].hooks||(wd[wu].hooks={}),wd[wu].shims||(wd[wu].shims=[]);var Td=wd[wu],Ed=[],Dd=function(){Z.removeEventListener(`DOMContentLoaded`,Dd),Od=1,Ed.map(function(e){return e()})},Od=!1;dl&&(Od=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Od||Z.addEventListener(`DOMContentLoaded`,Dd));function kd(e){dl&&(Od?setTimeout(e,0):Ed.push(e))}function Ad(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?pd(e):`<${t} ${md(r)}>${a.map(Ad).join(``)}</${t}>`}function jd(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Md=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Nd=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Md(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Pd(e){return Xc(e).length===1?e.codePointAt(0).toString(16):null}function Fd(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Id(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Fd(t);typeof Td.hooks.addPack==`function`&&!r?Td.hooks.addPack(e,Fd(t)):Td.styles[e]=X(X({},Td.styles[e]||{}),i),e===`fas`&&Id(`fa`,t)}var Ld=Td.styles,Rd=Td.shims,zd=Object.keys(Wu),Bd=zd.reduce(function(e,t){return e[t]=Object.keys(Wu[t]),e},{}),Vd=null,Hd={},Ud={},Wd={},Gd={},Kd={};function qd(e){return~Qu.indexOf(e)}function Jd(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!qd(i)?i:null}var Yd=function(){var e=function(e){return Nd(Ld,function(t,n,r){return t[r]=Nd(n,e,{}),t},{})};Hd=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Ud=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Kd=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Ld||$.autoFetchSvg,n=Nd(Rd,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Wd=n.names,Gd=n.unicodes,Vd=af($.styleDefault,{family:$.familyDefault})};ad(function(e){Vd=af(e.styleDefault,{family:$.familyDefault})}),Yd();function Xd(e,t){return(Hd[e]||{})[t]}function Zd(e,t){return(Ud[e]||{})[t]}function Qd(e,t){return(Kd[e]||{})[t]}function $d(e){return Wd[e]||{prefix:null,iconName:null}}function ef(e){var t=Gd[e],n=Xd(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function tf(){return Vd}var nf=function(){return{prefix:null,iconName:null,rest:[]}};function rf(e){var t=Q,n=zd.reduce(function(e,t){return e[t]=`${$.cssPrefix}-${t}`,e},{});return eu.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Bd[r].includes(e)}))&&(t=r)}),t}function af(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Q:t,r=Bu[n][e];if(n===yl&&!e)return`fad`;var i=Hu[n][e]||Hu[n][r],a=e in Td.styles?e:null;return i||a||null}function sf(e){var t=[],n=null;return e.forEach(function(e){var r=Jd($.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function cf(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var lf=vu.concat(au);function uf(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=cf(e.filter(function(e){return lf.includes(e)})),a=cf(e.filter(function(e){return!lf.includes(e)})),o=i.filter(function(e){return r=e,!vl.includes(e)}),s=Yc(o,1)[0],c=s===void 0?null:s,l=rf(i),u=X(X({},sf(a)),{},{prefix:af(c,{family:l})});return X(X(X({},u),mf({values:e,family:l,styles:Ld,config:$,canonical:u,givenPrefix:r})),df(n,r,u))}function df(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?$d(i):{},o=Qd(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Ld.far&&Ld.fas&&!$.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ff=eu.filter(function(e){return e!==Q||e!==yl}),pf=Object.keys(_u).filter(function(e){return e!==Q}).map(function(e){return Object.keys(_u[e])}).flat();function mf(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===yl,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ff.includes(n)&&(Object.keys(s).find(function(e){return pf.includes(e)})||l.autoFetchSvg)&&(r.prefix=ru.get(n).defaultShortPrefixId,r.iconName=Qd(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=tf()||`fas`),r}var hf=function(){function e(){Bc(this,e),this.definitions={}}return Hc(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=X(X({},e.definitions[n]||{}),t[n]),Id(n,t[n]);var r=Wu[Q][n];r&&Id(r,t[n]),Yd()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),gf=[],_f={},vf={},yf=Object.keys(vf);function bf(e,t){var n=t.mixoutsTo;return gf=e,_f={},Object.keys(vf).forEach(function(e){yf.indexOf(e)===-1&&delete vf[e]}),gf.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),$c(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){_f[e]||(_f[e]=[]),_f[e].push(r[e])})}e.provides&&e.provides(vf)}),n}function xf(e,t){var n=[...arguments].slice(2);return(_f[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Sf(e){var t=[...arguments].slice(1);(_f[e]||[]).forEach(function(e){e.apply(null,t)})}function Cf(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vf[e]?vf[e].apply(null,t):void 0}function wf(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||tf();if(t)return t=Qd(n,t)||t,jd(Tf.definitions,n,t)||jd(Td.styles,n,t)}var Tf=new hf,Ef={noAuto:function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Sf(`noAuto`)},config:$,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dl?(Sf(`beforeI2svg`,e),Cf(`pseudoElements2svg`,e),Cf(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,kd(function(){Df({autoReplaceSvgRoot:t}),Sf(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if($c(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qd(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=af(e[0]);return{prefix:n,iconName:Qd(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${$.cssPrefix}-`)>-1||e.match(Ku))){var r=uf(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||tf(),iconName:Qd(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=tf();return{prefix:i,iconName:Qd(i,e)||e}}}},library:Tf,findIconDefinition:wf,toHtml:Ad},Df=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?Z:e;(Object.keys(Td.styles).length>0||$.autoFetchSvg)&&dl&&$.autoReplaceSvg&&Ef.dom.i2svg({node:t})};function Of(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return Ad(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(dl){var t=Z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function kf(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gd(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};i.style=hd(X(X({},a),{},{"transform-origin":`${l.x+o.x/16}em ${l.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Af(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${$.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:X(X({},i),{},{id:o}),children:r}]}]}function jf(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Mf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[$.replacementClass,a?`${$.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:X(X({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!jf(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Ou]=``);var _=X(X({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:X({},l.styles)}),v=r.found&&n.found?Cf(`generateAbstractMask`,_)||{children:[],attributes:{}}:Cf(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Af(_):kf(_)}function Nf(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=X(X({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Ou]=``);var l=X({},a.styles);gd(i)&&(l.transform=vd({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=hd(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Pf(e){var t=e.content,n=e.extra,r=X(X({},n.attributes),{},{class:n.classes.join(` `)}),i=hd(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Ff=Td.styles;function If(e){var t=e[0],n=e[1],r=e.slice(4),i=Yc(r,1)[0],a=null;return a=Array.isArray(i)?{tag:`g`,attributes:{class:`${$.cssPrefix}-${Zu.GROUP}`},children:[{tag:`path`,attributes:{class:`${$.cssPrefix}-${Zu.SECONDARY}`,fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:`${$.cssPrefix}-${Zu.PRIMARY}`,fill:`currentColor`,d:i[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:t,height:n,icon:a}}var Lf={found:!1,width:512,height:512};function Rf(e,t){!Lu&&!$.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function zf(e,t){var n=t;return t===`fa`&&$.styleDefault!==null&&(t=tf()),new Promise(function(r,i){if(n===`fa`){var a=$d(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ff[t]&&Ff[t][e]){var o=Ff[t][e];return r(If(o))}Rf(e,t),r(X(X({},Lf),{},{icon:$.showMissingIcons&&e&&Cf(`missingIconAbstract`)||{}}))})}var Bf=function(){},Vf=$.measurePerformance&&ul&&ul.mark&&ul.measure?ul:{mark:Bf,measure:Bf},Hf=`FA "7.1.0"`,Uf=function(e){return Vf.mark(`${Hf} ${e} begins`),function(){return Wf(e)}},Wf=function(e){Vf.mark(`${Hf} ${e} ends`),Vf.measure(`${Hf} ${e}`,`${Hf} ${e} begins`,`${Hf} ${e} ends`)},Gf={begin:Uf,end:Wf},Kf=function(){};function qf(e){return typeof(e.getAttribute?e.getAttribute(Ou):null)==`string`}function Jf(e){var t=e.getAttribute?e.getAttribute(ju):null,n=e.getAttribute?e.getAttribute(Mu):null;return t&&n}function Yf(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function Xf(){return $.autoReplaceSvg===!0?tp.replace:tp[$.autoReplaceSvg]||tp.replace}function Zf(e){return Z.createElementNS(`http://www.w3.org/2000/svg`,e)}function Qf(e){return Z.createElement(e)}function $f(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Zf:Qf:t;if(typeof e==`string`)return Z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild($f(e,{ceFn:n}))}),r}function ep(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var tp={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore($f(e),t)}),t.getAttribute(Ou)===null&&$.keepOriginalSource){var n=Z.createComment(ep(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~fd(t).indexOf($.replacementClass))return tp.replace(e);var r=RegExp(`${$.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===$.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Ad(e)}).join(`
`);t.setAttribute(Ou,``),t.innerHTML=a}};function np(e){e()}function rp(e,t){var n=typeof t==`function`?t:Kf;if(e.length===0)n();else{var r=np;$.mutateApproach===Pu&&(r=cl.requestAnimationFrame||np),r(function(){var t=Xf(),r=Gf.begin(`mutate`);e.map(t),r(),n()})}}var ip=!1;function ap(){ip=!0}function op(){ip=!1}var sp=null;function cp(e){if(ll&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Kf:t,r=e.nodeCallback,i=r===void 0?Kf:r,a=e.pseudoElementsCallback,o=a===void 0?Kf:a,s=e.observeMutationsRoot,c=s===void 0?Z:s;sp=new ll(function(e){if(!ip){var t=tf();dd(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!qf(e.addedNodes[0])&&($.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&$.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&qf(e.target)&&~Xu.indexOf(e.attributeName))if(e.attributeName===`class`&&Jf(e.target)){var r=uf(fd(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(ju,a||t),s&&e.target.setAttribute(Mu,s)}else Yf(e.target)&&i(e.target)})}}),dl&&sp.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lp(){sp&&sp.disconnect()}function up(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function dp(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=uf(fd(e));return i.prefix||=tf(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Zd(i.prefix,e.innerText)||Xd(i.prefix,Pd(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function fp(e){return dd(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function pp(){return{iconName:null,prefix:null,transform:sd,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dp(e),r=n.iconName,i=n.prefix,a=n.rest,o=fp(e),s=xf(`parseNodeAttributes`,{},e),c=t.styleParser?up(e):[];return X({iconName:r,prefix:i,transform:sd,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},s)}var hp=Td.styles;function gp(e){var t=$.autoReplaceSvg===`nest`?mp(e,{styleParser:!1}):mp(e);return~t.extra.classes.indexOf(qu)?Cf(`generateLayersText`,e,t):Cf(`generateSvgReplacementMutation`,e,t)}function _p(){return[].concat(Xc(au),Xc(vu))}function vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dl)return Promise.resolve();var n=Z.documentElement.classList,r=function(e){return n.add(`${Nu}-${e}`)},i=function(e){return n.remove(`${Nu}-${e}`)},a=$.autoFetchSvg?_p():vl.concat(Object.keys(hp));a.includes(`fa`)||a.push(`fa`);var o=[`.${qu}:not([${Ou}])`].concat(a.map(function(e){return`.${e}:not([${Ou}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=dd(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Gf.begin(`onTree`),l=s.reduce(function(e,t){try{var n=gp(t);n&&e.push(n)}catch(e){Lu||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){rp(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function yp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gp(e).then(function(e){e&&rp([e],t)})}function bp(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wf(t||{}),i=n.mask;return i&&=(i||{}).icon?i:wf(i||{}),e(r,X(X({},n),{},{mask:i}))}}var xp=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?sd:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Of(X({type:`icon`},e),function(){return Sf(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Mf({icons:{main:If(v),mask:s?If(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:X(X({},sd),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Sp={mixout:function(){return{icon:bp(xp)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=vp,e.nodeCallback=yp,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?Z:t,r=e.callback;return vp(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([zf(n,r),o.iconName?zf(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Yc(o,2),u=l[0],d=l[1];t([e,Mf({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=hd(a);o.length>0&&(n.style=o);var s;return gd(i)&&(s=Cf(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Cp={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Of({type:`layer`},function(){Sf(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${$.cssPrefix}-layers`].concat(Xc(r)).join(` `)},children:n}]})}}}},wp={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Of({type:`counter`,content:e},function(){return Sf(`beforeDOMElementCreation`,{content:e,params:t}),Pf({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${$.cssPrefix}-layers-counter`].concat(Xc(a))}})})}}}},Tp={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?sd:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Of({type:`text`,content:e},function(){return Sf(`beforeDOMElementCreation`,{content:e,params:t}),Nf({content:e,transform:X(X({},sd),r),extra:{attributes:s,styles:l,classes:[`${$.cssPrefix}-layers-text`].concat(Xc(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(fl){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Nf({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ep=RegExp(`"`,`ug`),Dp=[1105920,1112319],Op=X(X(X(X({},{FontAwesome:{normal:`fas`,400:`fas`}}),nu),Cu),lu),kp=Object.keys(Op).reduce(function(e,t){return e[t.toLowerCase()]=Op[t],e},{}),Ap=Object.keys(kp).reduce(function(e,t){var n=kp[t];return e[t]=n[900]||Xc(Object.entries(n))[0][1],e},{});function jp(e){var t=e.replace(Ep,``);return Pd(Xc(t)[0]||``)}function Mp(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ep,``),r=n.codePointAt(0),i=r>=Dp[0]&&r<=Dp[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Np(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(kp[n]||{})[i]||Ap[n]}function Pp(e,t){var n=`${Au}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=dd(e.children).filter(function(e){return e.getAttribute(ku)===t})[0],o=cl.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ju),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Np(s,l),p=jp(d),m=c[0].startsWith(`FontAwesome`),h=Mp(o),g=Xd(f,p),_=g;if(m){var v=ef(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(ju)!==f||a.getAttribute(Mu)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=pp(),b=y.extra;b.attributes[ku]=t,zf(g,f).then(function(i){var a=Mf(X(X({},y),{},{icons:{main:i,mask:nf()},prefix:f,iconName:_,extra:b,watchable:!0})),o=Z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Ad(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Fp(e){return Promise.all([Pp(e,`::before`),Pp(e,`::after`)])}function Ip(e){return e.parentNode!==document.head&&!~Fu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ku)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Lp=function(e){return!!e&&Iu.some(function(t){return e.includes(t)})},Rp=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Uc(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Lp(a)){var o=Iu.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function zp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(dl){var n;if(t)n=e;else if($.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Uc(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Uc(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Rp(l.selectorText),d=Uc(u),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){$.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=dd(n).filter(Ip).map(Fp),i=Gf.begin(`searchPseudoElements`);ap(),Promise.all(r).then(function(){i(),op(),e()}).catch(function(){i(),op(),t()})})}}var Bp={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=zp,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?Z:t;$.searchPseudoElements&&zp(n)}}},Vp=!1,Hp={mixout:function(){return{dom:{unwatch:function(){ap(),Vp=!0}}}},hooks:function(){return{bootstrap:function(){cp(xf(`mutationObserverCallbacks`,{}))},noAuto:function(){lp()},watch:function(e){var t=e.observeMutationsRoot;Vp?op():cp(xf(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Up=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Wp={mixout:function(){return{parse:{transform:function(e){return Up(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Up(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={transform:`translate(${r/2} 256)`},o=`translate(${n.x*32}, ${n.y*32}) `,s=`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `,c=`rotate(${n.rotate} 0 0)`,l={transform:`${o} ${s} ${c}`},u={transform:`translate(${i/2*-1} -256)`},d={outer:a,inner:l,path:u};return{tag:`g`,attributes:X({},d.outer),children:[{tag:`g`,attributes:X({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:X(X({},t.icon.attributes),d.path)}]}]}}}},Gp={x:0,y:0,width:`100%`,height:`100%`};function Kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function qp(e){return e.tag===`g`?e.children:[e]}bf([Cd,Sp,Cp,wp,Tp,Bp,Hp,Wp,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?uf(n.split(` `).map(function(e){return e.trim()})):nf();return r.prefix||=tf(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=_d({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:X(X({},Gp),{},{fill:`white`})},p=c.children?{children:c.children.map(Kp)}:{},m={tag:`g`,attributes:X({},d.inner),children:[Kp(X({tag:c.tag,attributes:X(X({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:X({},d.outer),children:[m]},g=`mask-${a||ud()}`,_=`clip-${a||ud()}`,v={tag:`mask`,attributes:X(X({},Gp),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:qp(u)},v]};return t.push(y,{tag:`rect`,attributes:X({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Gp)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;cl.matchMedia&&(t=cl.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:X(X({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=X(X({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:X(X({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:X(X({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:X(X({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:X(X({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:X(X({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:X(X({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:X(X({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Ef}),Ef.noAuto,Ef.config;var Jp=Ef.library;Ef.dom;var Yp=Ef.parse;Ef.findIconDefinition,Ef.toHtml;var Xp=Ef.icon;Ef.layer,Ef.text,Ef.counter;function Zp(e,t,n){return(t=rm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qp(Object(n),!0).forEach(function(t){Zp(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function em(e,t){if(e==null)return{};var n,r,i=tm(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function tm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function nm(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function rm(e){var t=nm(e,`string`);return typeof t==`symbol`?t:t+``}function im(e){"@babel/helpers - typeof";return im=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},im(e)}function am(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Zp({},e,t):{}}function om(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Zp(Zp(Zp(Zp(Zp(Zp(Zp(Zp(Zp(Zp(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Zp(Zp(Zp(Zp(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var sm=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},cm={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(sm)})(cm);var lm=cm.exports,um=[`class`,`style`];function dm(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=lm.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function fm(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=(e.children||[]).map(function(e){return pm(e)}),i=Object.keys(e.attributes||{}).reduce(function(t,n){var r=e.attributes[n];switch(n){case`class`:t.class=fm(r);break;case`style`:t.style=dm(r);break;default:t.attrs[n]=r}return t},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=em(n,um);return Za(e.tag,$p($p($p({},t),{},{class:i.class,style:$p($p({},i.style),o)},i.attrs),s),r)}var mm=!1;try{mm=!0}catch{}function hm(){if(!mm&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function gm(e){if(e&&im(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Yp.icon)return Yp.icon(e);if(e===null)return null;if(im(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var _m=or({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=Xa(function(){return gm(e.icon)}),i=Xa(function(){return am(`classes`,om(e))}),a=Xa(function(){return am(`transform`,typeof e.transform==`string`?Yp.transform(e.transform):e.transform)}),o=Xa(function(){return am(`mask`,gm(e.mask))}),s=Xa(function(){var t=$p($p($p($p({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Xp(r.value,t)});Hi(s,function(e){if(!e)return hm(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0});var c=Xa(function(){return s.value?pm(s.value.abstract[0],{},n):null});return function(){return c.value}}});Boolean,String,Number,String,Object,Boolean,String,Jp.add({prefix:`fas`,iconName:`sun`,icon:[576,512,[9728],`f185`,`M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z`]},{prefix:`fas`,iconName:`moon`,icon:[512,512,[127769,9214],`f186`,`M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z`]});var vm=hs(Ic);vm.component(`font-awesome-icon`,_m),vm.mount(`#app`);export{Ce as C,pe as S,zr as _,H as a,Gt as b,ma as c,Ca as d,Sa as f,U as g,wr as h,ds as i,q as l,Dr as m,vs as n,Hn as o,K as p,cs as r,G as s,Xs as t,W as u,Pr as v,s as w,ve as x,An as y};