const dd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};dd();function Ei(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=Ei(pd);function kc(e){return!!e||e===""}function Ue(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Re(s)?vd(s):Ue(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Re(e))return e;if(ze(e))return e}}const md=/;(?![^(]*\))/g,gd=/:(.+)/;function vd(e){const t={};return e.split(md).forEach(n=>{if(n){const s=n.split(gd);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Te(e){let t="";if(Re(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const s=Te(e[n]);s&&(t+=s+" ")}else if(ze(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function je(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=Te(t)),n&&(e.style=Ue(n)),e}const gn=e=>Re(e)?e:e==null?"":Q(e)||ze(e)&&(e.toString===$c||!oe(e.toString))?JSON.stringify(e,Ec,2):String(e),Ec=(e,t)=>t&&t.__v_isRef?Ec(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Sc(t)?{[`Set(${t.size})`]:[...t.values()]}:ze(t)&&!Q(t)&&!Oc(t)?String(t):t,$e={},Gn=[],It=()=>{},_d=()=>!1,yd=/^on[^a-z]/,jr=e=>yd.test(e),Si=e=>e.startsWith("onUpdate:"),it=Object.assign,Pi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bd=Object.prototype.hasOwnProperty,pe=(e,t)=>bd.call(e,t),Q=Array.isArray,Qn=e=>Vr(e)==="[object Map]",Sc=e=>Vr(e)==="[object Set]",oe=e=>typeof e=="function",Re=e=>typeof e=="string",$i=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",Pc=e=>ze(e)&&oe(e.then)&&oe(e.catch),$c=Object.prototype.toString,Vr=e=>$c.call(e),xd=e=>Vr(e).slice(8,-1),Oc=e=>Vr(e)==="[object Object]",Oi=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_r=Ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wd=/-(\w)/g,Yt=Hr(e=>e.replace(wd,(t,n)=>n?n.toUpperCase():"")),kd=/\B([A-Z])/g,Dn=Hr(e=>e.replace(kd,"-$1").toLowerCase()),Yr=Hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),lo=Hr(e=>e?`on${Yr(e)}`:""),zs=(e,t)=>!Object.is(e,t),es=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Pr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ro=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bl;const Ed=()=>bl||(bl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ht;class Mc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ht&&(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ht;try{return ht=this,t()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Sd(e){return new Mc(e)}function Pd(e,t=ht){t&&t.active&&t.effects.push(e)}function $d(){return ht}function Od(e){ht&&ht.cleanups.push(e)}const Mi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Cc=e=>(e.w&vn)>0,Ac=e=>(e.n&vn)>0,Md=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vn},Cd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Cc(r)&&!Ac(r)?r.delete(e):t[n++]=r,r.w&=~vn,r.n&=~vn}t.length=n}},Lo=new WeakMap;let Es=0,vn=1;const No=30;let Ct;const In=Symbol(""),Fo=Symbol("");class Ci{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pd(this,s)}run(){if(!this.active)return this.fn();let t=Ct,n=un;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ct,Ct=this,un=!0,vn=1<<++Es,Es<=No?Md(this):xl(this),this.fn()}finally{Es<=No&&Cd(this),vn=1<<--Es,Ct=this.parent,un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(xl(this),this.onStop&&this.onStop(),this.active=!1)}}function xl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let un=!0;const Ic=[];function cs(){Ic.push(un),un=!1}function us(){const e=Ic.pop();un=e===void 0?!0:e}function xt(e,t,n){if(un&&Ct){let s=Lo.get(e);s||Lo.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Mi()),Tc(r)}}function Tc(e,t){let n=!1;Es<=No?Ac(e)||(e.n|=vn,n=!Cc(e)):n=!e.has(Ct),n&&(e.add(Ct),Ct.deps.push(e))}function Zt(e,t,n,s,r,o){const i=Lo.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&Q(e))i.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(i.get(n)),t){case"add":Q(e)?Oi(n)&&l.push(i.get("length")):(l.push(i.get(In)),Qn(e)&&l.push(i.get(Fo)));break;case"delete":Q(e)||(l.push(i.get(In)),Qn(e)&&l.push(i.get(Fo)));break;case"set":Qn(e)&&l.push(i.get(In));break}if(l.length===1)l[0]&&Do(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Do(Mi(a))}}function Do(e,t){const n=Q(e)?e:[...e];for(const s of n)s.computed&&wl(s);for(const s of n)s.computed||wl(s)}function wl(e,t){(e!==Ct||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ad=Ei("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($i)),Id=Ai(),Td=Ai(!1,!0),Rd=Ai(!0),kl=Ld();function Ld(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ye(this);for(let o=0,i=this.length;o<i;o++)xt(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cs();const s=ye(this)[t].apply(this,n);return us(),s}}),e}function Ai(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Jd:Bc:t?Dc:Fc).get(s))return s;const i=Q(s);if(!e&&i&&pe(kl,r))return Reflect.get(kl,r,o);const l=Reflect.get(s,r,o);return($i(r)?Rc.has(r):Ad(r))||(e||xt(s,"get",r),t)?l:xe(l)?i&&Oi(r)?l:l.value:ze(l)?e?Zn(l):Ae(l):l}}const Nd=Lc(),Fd=Lc(!0);function Lc(e=!1){return function(n,s,r,o){let i=n[s];if(js(i)&&xe(i)&&!xe(r))return!1;if(!e&&!js(r)&&(Bo(r)||(r=ye(r),i=ye(i)),!Q(n)&&xe(i)&&!xe(r)))return i.value=r,!0;const l=Q(n)&&Oi(s)?Number(s)<n.length:pe(n,s),a=Reflect.set(n,s,r,o);return n===ye(o)&&(l?zs(r,i)&&Zt(n,"set",s,r):Zt(n,"add",s,r)),a}}function Dd(e,t){const n=pe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Zt(e,"delete",t,void 0),s}function Bd(e,t){const n=Reflect.has(e,t);return(!$i(t)||!Rc.has(t))&&xt(e,"has",t),n}function zd(e){return xt(e,"iterate",Q(e)?"length":In),Reflect.ownKeys(e)}const Nc={get:Id,set:Nd,deleteProperty:Dd,has:Bd,ownKeys:zd},jd={get:Rd,set(e,t){return!0},deleteProperty(e,t){return!0}},Vd=it({},Nc,{get:Td,set:Fd}),Ii=e=>e,Wr=e=>Reflect.getPrototypeOf(e);function ar(e,t,n=!1,s=!1){e=e.__v_raw;const r=ye(e),o=ye(t);n||(t!==o&&xt(r,"get",t),xt(r,"get",o));const{has:i}=Wr(r),l=s?Ii:n?Li:Vs;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function cr(e,t=!1){const n=this.__v_raw,s=ye(n),r=ye(e);return t||(e!==r&&xt(s,"has",e),xt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ur(e,t=!1){return e=e.__v_raw,!t&&xt(ye(e),"iterate",In),Reflect.get(e,"size",e)}function El(e){e=ye(e);const t=ye(this);return Wr(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Sl(e,t){t=ye(t);const n=ye(this),{has:s,get:r}=Wr(n);let o=s.call(n,e);o||(e=ye(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?zs(t,i)&&Zt(n,"set",e,t):Zt(n,"add",e,t),this}function Pl(e){const t=ye(this),{has:n,get:s}=Wr(t);let r=n.call(t,e);r||(e=ye(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&Zt(t,"delete",e,void 0),o}function $l(){const e=ye(this),t=e.size!==0,n=e.clear();return t&&Zt(e,"clear",void 0,void 0),n}function fr(e,t){return function(s,r){const o=this,i=o.__v_raw,l=ye(i),a=t?Ii:e?Li:Vs;return!e&&xt(l,"iterate",In),i.forEach((c,u)=>s.call(r,a(c),a(u),o))}}function dr(e,t,n){return function(...s){const r=this.__v_raw,o=ye(r),i=Qn(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=r[e](...s),u=n?Ii:t?Li:Vs;return!t&&xt(o,"iterate",a?Fo:In),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function sn(e){return function(...t){return e==="delete"?!1:this}}function Hd(){const e={get(o){return ar(this,o)},get size(){return ur(this)},has:cr,add:El,set:Sl,delete:Pl,clear:$l,forEach:fr(!1,!1)},t={get(o){return ar(this,o,!1,!0)},get size(){return ur(this)},has:cr,add:El,set:Sl,delete:Pl,clear:$l,forEach:fr(!1,!0)},n={get(o){return ar(this,o,!0)},get size(){return ur(this,!0)},has(o){return cr.call(this,o,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fr(!0,!1)},s={get(o){return ar(this,o,!0,!0)},get size(){return ur(this,!0)},has(o){return cr.call(this,o,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=dr(o,!1,!1),n[o]=dr(o,!0,!1),t[o]=dr(o,!1,!0),s[o]=dr(o,!0,!0)}),[e,n,t,s]}const[Yd,Wd,Kd,Ud]=Hd();function Ti(e,t){const n=t?e?Ud:Kd:e?Wd:Yd;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,o)}const qd={get:Ti(!1,!1)},Xd={get:Ti(!1,!0)},Zd={get:Ti(!0,!1)},Fc=new WeakMap,Dc=new WeakMap,Bc=new WeakMap,Jd=new WeakMap;function Gd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qd(e){return e.__v_skip||!Object.isExtensible(e)?0:Gd(xd(e))}function Ae(e){return js(e)?e:Ri(e,!1,Nc,qd,Fc)}function ep(e){return Ri(e,!1,Vd,Xd,Dc)}function Zn(e){return Ri(e,!0,jd,Zd,Bc)}function Ri(e,t,n,s,r){if(!ze(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Qd(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function ts(e){return js(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function js(e){return!!(e&&e.__v_isReadonly)}function Bo(e){return!!(e&&e.__v_isShallow)}function zc(e){return ts(e)||js(e)}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function Kr(e){return Pr(e,"__v_skip",!0),e}const Vs=e=>ze(e)?Ae(e):e,Li=e=>ze(e)?Zn(e):e;function Ni(e){un&&Ct&&(e=ye(e),Tc(e.dep||(e.dep=Mi())))}function Fi(e,t){e=ye(e),e.dep&&Do(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function B(e){return jc(e,!1)}function Lt(e){return jc(e,!0)}function jc(e,t){return xe(e)?e:new tp(e,t)}class tp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ye(t),this._value=n?t:Vs(t)}get value(){return Ni(this),this._value}set value(t){t=this.__v_isShallow?t:ye(t),zs(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Vs(t),Fi(this))}}function _(e){return xe(e)?e.value:e}const np={get:(e,t,n)=>_(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Vc(e){return ts(e)?e:new Proxy(e,np)}class sp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Ni(this),()=>Fi(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function rp(e){return new sp(e)}function op(e){const t=Q(e)?new Array(e.length):{};for(const n in e)t[n]=lp(e,n);return t}class ip{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function lp(e,t,n){const s=e[t];return xe(s)?s:new ip(e,t,n)}class ap{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ci(t,()=>{this._dirty||(this._dirty=!0,Fi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=ye(this);return Ni(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cp(e,t,n=!1){let s,r;const o=oe(e);return o?(s=e,r=It):(s=e.get,r=e.set),new ap(s,r,o||!r,n)}function fn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){Ur(o,t,n)}return r}function Tt(e,t,n,s){if(oe(e)){const o=fn(e,t,n,s);return o&&Pc(o)&&o.catch(i=>{Ur(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Tt(e[o],t,n,s));return r}function Ur(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,i,l)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){fn(a,null,10,[e,i,l]);return}}up(e,n,r,s)}function up(e,t,n,s=!0){console.error(e)}let $r=!1,zo=!1;const vt=[];let qt=0;const $s=[];let Ss=null,Kn=0;const Os=[];let on=null,Un=0;const Hc=Promise.resolve();let Di=null,jo=null;function Ke(e){const t=Di||Hc;return e?t.then(this?e.bind(this):e):t}function fp(e){let t=qt+1,n=vt.length;for(;t<n;){const s=t+n>>>1;Hs(vt[s])<e?t=s+1:n=s}return t}function Yc(e){(!vt.length||!vt.includes(e,$r&&e.allowRecurse?qt+1:qt))&&e!==jo&&(e.id==null?vt.push(e):vt.splice(fp(e.id),0,e),Wc())}function Wc(){!$r&&!zo&&(zo=!0,Di=Hc.then(qc))}function dp(e){const t=vt.indexOf(e);t>qt&&vt.splice(t,1)}function Kc(e,t,n,s){Q(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Wc()}function pp(e){Kc(e,Ss,$s,Kn)}function hp(e){Kc(e,on,Os,Un)}function qr(e,t=null){if($s.length){for(jo=t,Ss=[...new Set($s)],$s.length=0,Kn=0;Kn<Ss.length;Kn++)Ss[Kn]();Ss=null,Kn=0,jo=null,qr(e,t)}}function Uc(e){if(qr(),Os.length){const t=[...new Set(Os)];if(Os.length=0,on){on.push(...t);return}for(on=t,on.sort((n,s)=>Hs(n)-Hs(s)),Un=0;Un<on.length;Un++)on[Un]();on=null,Un=0}}const Hs=e=>e.id==null?1/0:e.id;function qc(e){zo=!1,$r=!0,qr(e),vt.sort((n,s)=>Hs(n)-Hs(s));const t=It;try{for(qt=0;qt<vt.length;qt++){const n=vt[qt];n&&n.active!==!1&&fn(n,null,14)}}finally{qt=0,vt.length=0,Uc(),$r=!1,Di=null,(vt.length||$s.length||Os.length)&&qc(e)}}function mp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||$e;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=s[u]||$e;f&&(r=n.map(p=>p.trim())),d&&(r=n.map(Ro))}let l,a=s[l=lo(t)]||s[l=lo(Yt(t))];!a&&o&&(a=s[l=lo(Dn(t))]),a&&Tt(a,e,6,r);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tt(c,e,6,r)}}function Xc(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!oe(e)){const a=c=>{const u=Xc(c,t,!0);u&&(l=!0,it(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(s.set(e,null),null):(Q(o)?o.forEach(a=>i[a]=null):it(i,o),s.set(e,i),i)}function Xr(e,t){return!e||!jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,Dn(t))||pe(e,t))}let Xe=null,Zr=null;function Or(e){const t=Xe;return Xe=e,Zr=e&&e.type.__scopeId||null,t}function Qe(e){Zr=e}function et(){Zr=null}function ve(e,t=Xe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Dl(-1);const o=Or(t),i=e(...r);return Or(o),s._d&&Dl(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function ao(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:h,inheritAttrs:y}=e;let b,S;const w=Or(e);try{if(n.shapeFlag&4){const P=r||s;b=zt(u.call(P,P,d,o,p,f,h)),S=a}else{const P=t;b=zt(P.length>1?P(o,{attrs:a,slots:l,emit:c}):P(o,null)),S=t.props?a:gp(a)}}catch(P){Cs.length=0,Ur(P,e,1),b=K(_n)}let k=b;if(S&&y!==!1){const P=Object.keys(S),{shapeFlag:R}=k;P.length&&R&7&&(i&&P.some(Si)&&(S=vp(S,i)),k=Fn(k,S))}return n.dirs&&(k=Fn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,Or(w),b}const gp=e=>{let t;for(const n in e)(n==="class"||n==="style"||jr(n))&&((t||(t={}))[n]=e[n]);return t},vp=(e,t)=>{const n={};for(const s in e)(!Si(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _p(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ol(s,i,c):!!i;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(i[f]!==s[f]&&!Xr(c,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Ol(s,i,c):!0:!!i;return!1}function Ol(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!Xr(n,o))return!0}return!1}function yp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zc=e=>e.__isSuspense;function bp(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):hp(e)}function gt(e,t){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[e]=t}}function W(e,t,n=!1){const s=He||Xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&oe(t)?t.call(s.proxy):t}}function tr(e,t){return Bi(e,null,t)}const Ml={};function le(e,t,n){return Bi(e,t,n)}function Bi(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=$e){const l=He;let a,c=!1,u=!1;if(xe(e)?(a=()=>e.value,c=Bo(e)):ts(e)?(a=()=>e,s=!0):Q(e)?(u=!0,c=e.some(S=>ts(S)||Bo(S)),a=()=>e.map(S=>{if(xe(S))return S.value;if(ts(S))return On(S);if(oe(S))return fn(S,l,2)})):oe(e)?t?a=()=>fn(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return d&&d(),Tt(e,l,3,[f])}:a=It,t&&s){const S=a;a=()=>On(S())}let d,f=S=>{d=b.onStop=()=>{fn(S,l,4)}};if(Ks)return f=It,t?n&&Tt(t,l,3,[a(),u?[]:void 0,f]):a(),It;let p=u?[]:Ml;const h=()=>{if(!!b.active)if(t){const S=b.run();(s||c||(u?S.some((w,k)=>zs(w,p[k])):zs(S,p)))&&(d&&d(),Tt(t,l,3,[S,p===Ml?void 0:p,f]),p=S)}else b.run()};h.allowRecurse=!!t;let y;r==="sync"?y=h:r==="post"?y=()=>We(h,l&&l.suspense):y=()=>pp(h);const b=new Ci(a,y);return t?n?h():p=b.run():r==="post"?We(b.run.bind(b),l&&l.suspense):b.run(),()=>{b.stop(),l&&l.scope&&Pi(l.scope.effects,b)}}function xp(e,t,n){const s=this.proxy,r=Re(e)?e.includes(".")?Jc(s,e):()=>s[e]:e.bind(s,s);let o;oe(t)?o=t:(o=t.handler,n=t);const i=He;os(this);const l=Bi(r,o.bind(s),n);return i?os(i):Tn(),l}function Jc(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function On(e,t){if(!ze(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))On(e.value,t);else if(Q(e))for(let n=0;n<e.length;n++)On(e[n],t);else if(Sc(e)||Qn(e))e.forEach(n=>{On(n,t)});else if(Oc(e))for(const n in e)On(e[n],t);return e}function Gc(e,t){e.shapeFlag&6&&e.component?Gc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e){return oe(e)?{setup:e,name:e.name}:e}const ns=e=>!!e.type.__asyncLoader,Qc=e=>e.type.__isKeepAlive,wp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Bn(),s=n.ctx;if(!s.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const r=new Map,o=new Set;let i=null;const l=n.suspense,{renderer:{p:a,m:c,um:u,o:{createElement:d}}}=s,f=d("div");s.activate=(w,k,P,R,C)=>{const j=w.component;c(w,k,P,0,l),a(j.vnode,w,k,P,j,l,R,w.slotScopeIds,C),We(()=>{j.isDeactivated=!1,j.a&&es(j.a);const se=w.props&&w.props.onVnodeMounted;se&&kt(se,j.parent,w)},l)},s.deactivate=w=>{const k=w.component;c(w,f,null,1,l),We(()=>{k.da&&es(k.da);const P=w.props&&w.props.onVnodeUnmounted;P&&kt(P,k.parent,w),k.isDeactivated=!0},l)};function p(w){co(w),u(w,n,l,!0)}function h(w){r.forEach((k,P)=>{const R=Xo(k.type);R&&(!w||!w(R))&&y(P)})}function y(w){const k=r.get(w);!i||k.type!==i.type?p(k):i&&co(i),r.delete(w),o.delete(w)}le(()=>[e.include,e.exclude],([w,k])=>{w&&h(P=>Ps(w,P)),k&&h(P=>!Ps(k,P))},{flush:"post",deep:!0});let b=null;const S=()=>{b!=null&&r.set(b,uo(n.subTree))};return fs(S),su(S),Gr(()=>{r.forEach(w=>{const{subTree:k,suspense:P}=n,R=uo(k);if(w.type===R.type){co(R);const C=R.component.da;C&&We(C,P);return}p(w)})}),()=>{if(b=null,!t.default)return null;const w=t.default(),k=w[0];if(w.length>1)return i=null,w;if(!Nn(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return i=null,k;let P=uo(k);const R=P.type,C=Xo(ns(P)?P.type.__asyncResolved||{}:R),{include:j,exclude:se,max:ae}=e;if(j&&(!C||!Ps(j,C))||se&&C&&Ps(se,C))return i=P,k;const fe=P.key==null?R:P.key,he=r.get(fe);return P.el&&(P=Fn(P),k.shapeFlag&128&&(k.ssContent=P)),b=fe,he?(P.el=he.el,P.component=he.component,P.transition&&Gc(P,P.transition),P.shapeFlag|=512,o.delete(fe),o.add(fe)):(o.add(fe),ae&&o.size>parseInt(ae,10)&&y(o.values().next().value)),P.shapeFlag|=256,i=P,Zc(k.type)?k:P}}},eu=wp;function Ps(e,t){return Q(e)?e.some(n=>Ps(n,t)):Re(e)?e.split(",").includes(t):e.test?e.test(t):!1}function kp(e,t){tu(e,"a",t)}function Ep(e,t){tu(e,"da",t)}function tu(e,t,n=He){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Jr(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Qc(r.parent.vnode)&&Sp(s,t,n,r),r=r.parent}}function Sp(e,t,n,s){const r=Jr(t,e,s,!0);Qr(()=>{Pi(s[t],r)},n)}function co(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function uo(e){return e.shapeFlag&128?e.ssContent:e}function Jr(e,t,n=He,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;cs(),os(n);const l=Tt(t,n,e,i);return Tn(),us(),l});return s?r.unshift(o):r.push(o),o}}const Qt=e=>(t,n=He)=>(!Ks||e==="sp")&&Jr(e,t,n),nu=Qt("bm"),fs=Qt("m"),Pp=Qt("bu"),su=Qt("u"),Gr=Qt("bum"),Qr=Qt("um"),$p=Qt("sp"),Op=Qt("rtg"),Mp=Qt("rtc");function Cp(e,t=He){Jr("ec",e,t)}function Ze(e,t){const n=Xe;if(n===null)return e;const s=to(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=$e]=t[o];oe(i)&&(i={mounted:i,updated:i}),i.deep&&On(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return e}function yn(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(cs(),Tt(a,n,8,[e.el,l,e,t]),us())}}const ru="components",Ap="directives";function Vo(e,t){return ou(ru,e,!0,t)||e}const Ip=Symbol();function St(e){return ou(Ap,e)}function ou(e,t,n=!0,s=!1){const r=Xe||He;if(r){const o=r.type;if(e===ru){const l=Xo(o,!1);if(l&&(l===t||l===Yt(t)||l===Yr(Yt(t))))return o}const i=Cl(r[e]||o[e],t)||Cl(r.appContext[e],t);return!i&&s?o:i}}function Cl(e,t){return e&&(e[t]||e[Yt(t)]||e[Yr(Yt(t))])}function nr(e,t,n,s){let r;const o=n&&n[s];if(Q(e)||Re(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(ze(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];r[l]=t(e[c],c,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function Jt(e,t,n={},s,r){if(Xe.isCE||Xe.parent&&ns(Xe.parent)&&Xe.parent.isCE)return K("slot",t==="default"?null:{name:t},s&&s());let o=e[t];o&&o._c&&(o._d=!1),E();const i=o&&iu(o(n)),l=G(we,{key:n.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function iu(e){return e.some(t=>Nn(t)?!(t.type===_n||t.type===we&&!iu(t.children)):!0)?e:null}const Ho=e=>e?vu(e)?to(e)||e.proxy:Ho(e.parent):null,Mr=it(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ho(e.parent),$root:e=>Ho(e.root),$emit:e=>e.emit,$options:e=>au(e),$forceUpdate:e=>e.f||(e.f=()=>Yc(e.update)),$nextTick:e=>e.n||(e.n=Ke.bind(e.proxy)),$watch:e=>xp.bind(e)}),Tp={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(s!==$e&&pe(s,t))return i[t]=1,s[t];if(r!==$e&&pe(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&pe(c,t))return i[t]=3,o[t];if(n!==$e&&pe(n,t))return i[t]=4,n[t];Yo&&(i[t]=0)}}const u=Mr[t];let d,f;if(u)return t==="$attrs"&&xt(e,"get",t),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==$e&&pe(n,t))return i[t]=4,n[t];if(f=a.config.globalProperties,pe(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return r!==$e&&pe(r,t)?(r[t]=n,!0):s!==$e&&pe(s,t)?(s[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==$e&&pe(e,i)||t!==$e&&pe(t,i)||(l=o[0])&&pe(l,i)||pe(s,i)||pe(Mr,i)||pe(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Yo=!0;function Rp(e){const t=au(e),n=e.proxy,s=e.ctx;Yo=!1,t.beforeCreate&&Al(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:h,activated:y,deactivated:b,beforeDestroy:S,beforeUnmount:w,destroyed:k,unmounted:P,render:R,renderTracked:C,renderTriggered:j,errorCaptured:se,serverPrefetch:ae,expose:fe,inheritAttrs:he,components:Ce,directives:Ne,filters:qe}=t;if(c&&Lp(c,s,null,e.appContext.config.unwrapInjectedRef),i)for(const te in i){const X=i[te];oe(X)&&(s[te]=X.bind(n))}if(r){const te=r.call(n,n);ze(te)&&(e.data=Ae(te))}if(Yo=!0,o)for(const te in o){const X=o[te],de=oe(X)?X.bind(n,n):oe(X.get)?X.get.bind(n,n):It,Dt=!oe(X)&&oe(X.set)?X.set.bind(n):It,tt=$({get:de,set:Dt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>tt.value,set:wt=>tt.value=wt})}if(l)for(const te in l)lu(l[te],s,n,te);if(a){const te=oe(a)?a.call(n):a;Reflect.ownKeys(te).forEach(X=>{gt(X,te[X])})}u&&Al(u,e,"c");function Z(te,X){Q(X)?X.forEach(de=>te(de.bind(n))):X&&te(X.bind(n))}if(Z(nu,d),Z(fs,f),Z(Pp,p),Z(su,h),Z(kp,y),Z(Ep,b),Z(Cp,se),Z(Mp,C),Z(Op,j),Z(Gr,w),Z(Qr,P),Z($p,ae),Q(fe))if(fe.length){const te=e.exposed||(e.exposed={});fe.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:de=>n[X]=de})})}else e.exposed||(e.exposed={});R&&e.render===It&&(e.render=R),he!=null&&(e.inheritAttrs=he),Ce&&(e.components=Ce),Ne&&(e.directives=Ne)}function Lp(e,t,n=It,s=!1){Q(e)&&(e=Wo(e));for(const r in e){const o=e[r];let i;ze(o)?"default"in o?i=W(o.from||r,o.default,!0):i=W(o.from||r):i=W(o),xe(i)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function Al(e,t,n){Tt(Q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function lu(e,t,n,s){const r=s.includes(".")?Jc(n,s):()=>n[s];if(Re(e)){const o=t[e];oe(o)&&le(r,o)}else if(oe(e))le(r,e.bind(n));else if(ze(e))if(Q(e))e.forEach(o=>lu(o,t,n,s));else{const o=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(o)&&le(r,o,e)}}function au(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(c=>Cr(a,c,i,!0)),Cr(a,t,i)),o.set(t,a),a}function Cr(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Cr(e,o,n,!0),r&&r.forEach(i=>Cr(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Np[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Np={data:Il,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:kn,directives:kn,watch:Dp,provide:Il,inject:Fp};function Il(e,t){return t?e?function(){return it(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Fp(e,t){return kn(Wo(e),Wo(t))}function Wo(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?it(it(Object.create(null),e),t):t}function Dp(e,t){if(!e)return t;if(!t)return e;const n=it(Object.create(null),e);for(const s in t)n[s]=nt(e[s],t[s]);return n}function Bp(e,t,n,s=!1){const r={},o={};Pr(o,eo,1),e.propsDefaults=Object.create(null),cu(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:ep(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function zp(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=ye(r),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Xr(e.emitsOptions,f))continue;const p=t[f];if(a)if(pe(o,f))p!==o[f]&&(o[f]=p,c=!0);else{const h=Yt(f);r[h]=Ko(a,l,h,p,e,!1)}else p!==o[f]&&(o[f]=p,c=!0)}}}else{cu(e,t,r,o)&&(c=!0);let u;for(const d in l)(!t||!pe(t,d)&&((u=Dn(d))===d||!pe(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ko(a,l,d,void 0,e,!0)):delete r[d]);if(o!==l)for(const d in o)(!t||!pe(t,d)&&!0)&&(delete o[d],c=!0)}c&&Zt(e,"set","$attrs")}function cu(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(_r(a))continue;const c=t[a];let u;r&&pe(r,u=Yt(a))?!o||!o.includes(u)?n[u]=c:(l||(l={}))[u]=c:Xr(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(o){const a=ye(n),c=l||$e;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Ko(r,a,d,c[d],e,!pe(c,d))}}return i}function Ko(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=pe(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&oe(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(os(r),s=c[n]=a.call(null,t),Tn())}else s=a}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}function uu(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!oe(e)){const u=d=>{a=!0;const[f,p]=uu(d,t,!0);it(i,f),p&&l.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!a)return s.set(e,Gn),Gn;if(Q(o))for(let u=0;u<o.length;u++){const d=Yt(o[u]);Tl(d)&&(i[d]=$e)}else if(o)for(const u in o){const d=Yt(u);if(Tl(d)){const f=o[u],p=i[d]=Q(f)||oe(f)?{type:f}:f;if(p){const h=Nl(Boolean,p.type),y=Nl(String,p.type);p[0]=h>-1,p[1]=y<0||h<y,(h>-1||pe(p,"default"))&&l.push(d)}}}const c=[i,l];return s.set(e,c),c}function Tl(e){return e[0]!=="$"}function Rl(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ll(e,t){return Rl(e)===Rl(t)}function Nl(e,t){return Q(t)?t.findIndex(n=>Ll(n,e)):oe(t)&&Ll(t,e)?0:-1}const fu=e=>e[0]==="_"||e==="$stable",zi=e=>Q(e)?e.map(zt):[zt(e)],jp=(e,t,n)=>{if(t._n)return t;const s=ve((...r)=>zi(t(...r)),n);return s._c=!1,s},du=(e,t,n)=>{const s=e._ctx;for(const r in e){if(fu(r))continue;const o=e[r];if(oe(o))t[r]=jp(r,o,s);else if(o!=null){const i=zi(o);t[r]=()=>i}}},pu=(e,t)=>{const n=zi(t);e.slots.default=()=>n},Vp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ye(t),Pr(t,"_",n)):du(t,e.slots={})}else e.slots={},t&&pu(e,t);Pr(e.slots,eo,1)},Hp=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=$e;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(it(r,t),!n&&l===1&&delete r._):(o=!t.$stable,du(t,r)),i=t}else t&&(pu(e,t),i={default:1});if(o)for(const l in r)!fu(l)&&!(l in i)&&delete r[l]};function hu(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function Wp(e,t){return function(s,r=null){oe(s)||(s=Object.assign({},s)),r!=null&&!ze(r)&&(r=null);const o=hu(),i=new Set;let l=!1;const a=o.app={_uid:Yp++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:ch,get config(){return o.config},set config(c){},use(c,...u){return i.has(c)||(c&&oe(c.install)?(i.add(c),c.install(a,...u)):oe(c)&&(i.add(c),c(a,...u))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,u){return u?(o.components[c]=u,a):o.components[c]},directive(c,u){return u?(o.directives[c]=u,a):o.directives[c]},mount(c,u,d){if(!l){const f=K(s,r);return f.appContext=o,u&&t?t(f,c):e(f,c,d),l=!0,a._container=c,c.__vue_app__=a,to(f.component)||f.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,u){return o.provides[c]=u,a}};return a}}function Uo(e,t,n,s,r=!1){if(Q(e)){e.forEach((f,p)=>Uo(f,t&&(Q(t)?t[p]:t),n,s,r));return}if(ns(s)&&!r)return;const o=s.shapeFlag&4?to(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:a}=e,c=t&&t.r,u=l.refs===$e?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(Re(c)?(u[c]=null,pe(d,c)&&(d[c]=null)):xe(c)&&(c.value=null)),oe(a))fn(a,l,12,[i,u]);else{const f=Re(a),p=xe(a);if(f||p){const h=()=>{if(e.f){const y=f?u[a]:a.value;r?Q(y)&&Pi(y,o):Q(y)?y.includes(o)||y.push(o):f?(u[a]=[o],pe(d,a)&&(d[a]=u[a])):(a.value=[o],e.k&&(u[e.k]=a.value))}else f?(u[a]=i,pe(d,a)&&(d[a]=i)):p&&(a.value=i,e.k&&(u[e.k]=i))};i?(h.id=-1,We(h,n)):h()}}}const We=bp;function Kp(e){return Up(e)}function Up(e,t){const n=Ed();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=It,cloneNode:h,insertStaticContent:y}=e,b=(m,v,x,A=null,M=null,N=null,z=!1,L=null,D=!!v.dynamicChildren)=>{if(m===v)return;m&&!gs(m,v)&&(A=H(m),lt(m,M,N,!0),m=null),v.patchFlag===-2&&(D=!1,v.dynamicChildren=null);const{type:I,ref:U,shapeFlag:Y}=v;switch(I){case Vi:S(m,v,x,A);break;case _n:w(m,v,x,A);break;case fo:m==null&&k(v,x,A,z);break;case we:Ne(m,v,x,A,M,N,z,L,D);break;default:Y&1?C(m,v,x,A,M,N,z,L,D):Y&6?qe(m,v,x,A,M,N,z,L,D):(Y&64||Y&128)&&I.process(m,v,x,A,M,N,z,L,D,Oe)}U!=null&&M&&Uo(U,m&&m.ref,N,v||m,!v)},S=(m,v,x,A)=>{if(m==null)s(v.el=l(v.children),x,A);else{const M=v.el=m.el;v.children!==m.children&&c(M,v.children)}},w=(m,v,x,A)=>{m==null?s(v.el=a(v.children||""),x,A):v.el=m.el},k=(m,v,x,A)=>{[m.el,m.anchor]=y(m.children,v,x,A,m.el,m.anchor)},P=({el:m,anchor:v},x,A)=>{let M;for(;m&&m!==v;)M=f(m),s(m,x,A),m=M;s(v,x,A)},R=({el:m,anchor:v})=>{let x;for(;m&&m!==v;)x=f(m),r(m),m=x;r(v)},C=(m,v,x,A,M,N,z,L,D)=>{z=z||v.type==="svg",m==null?j(v,x,A,M,N,z,L,D):fe(m,v,M,N,z,L,D)},j=(m,v,x,A,M,N,z,L)=>{let D,I;const{type:U,props:Y,shapeFlag:q,transition:ne,patchFlag:me,dirs:Ee}=m;if(m.el&&h!==void 0&&me===-1)D=m.el=h(m.el);else{if(D=m.el=i(m.type,N,Y&&Y.is,Y),q&8?u(D,m.children):q&16&&ae(m.children,D,null,A,M,N&&U!=="foreignObject",z,L),Ee&&yn(m,null,A,"created"),Y){for(const Me in Y)Me!=="value"&&!_r(Me)&&o(D,Me,null,Y[Me],N,m.children,A,M,T);"value"in Y&&o(D,"value",null,Y.value),(I=Y.onVnodeBeforeMount)&&kt(I,A,m)}se(D,m,m.scopeId,z,A)}Ee&&yn(m,null,A,"beforeMount");const Se=(!M||M&&!M.pendingBranch)&&ne&&!ne.persisted;Se&&ne.beforeEnter(D),s(D,v,x),((I=Y&&Y.onVnodeMounted)||Se||Ee)&&We(()=>{I&&kt(I,A,m),Se&&ne.enter(D),Ee&&yn(m,null,A,"mounted")},M)},se=(m,v,x,A,M)=>{if(x&&p(m,x),A)for(let N=0;N<A.length;N++)p(m,A[N]);if(M){let N=M.subTree;if(v===N){const z=M.vnode;se(m,z,z.scopeId,z.slotScopeIds,M.parent)}}},ae=(m,v,x,A,M,N,z,L,D=0)=>{for(let I=D;I<m.length;I++){const U=m[I]=L?ln(m[I]):zt(m[I]);b(null,U,v,x,A,M,N,z,L)}},fe=(m,v,x,A,M,N,z)=>{const L=v.el=m.el;let{patchFlag:D,dynamicChildren:I,dirs:U}=v;D|=m.patchFlag&16;const Y=m.props||$e,q=v.props||$e;let ne;x&&bn(x,!1),(ne=q.onVnodeBeforeUpdate)&&kt(ne,x,v,m),U&&yn(v,m,x,"beforeUpdate"),x&&bn(x,!0);const me=M&&v.type!=="foreignObject";if(I?he(m.dynamicChildren,I,L,x,A,me,N):z||de(m,v,L,null,x,A,me,N,!1),D>0){if(D&16)Ce(L,v,Y,q,x,A,M);else if(D&2&&Y.class!==q.class&&o(L,"class",null,q.class,M),D&4&&o(L,"style",Y.style,q.style,M),D&8){const Ee=v.dynamicProps;for(let Se=0;Se<Ee.length;Se++){const Me=Ee[Se],$t=Y[Me],Vn=q[Me];(Vn!==$t||Me==="value")&&o(L,Me,$t,Vn,M,m.children,x,A,T)}}D&1&&m.children!==v.children&&u(L,v.children)}else!z&&I==null&&Ce(L,v,Y,q,x,A,M);((ne=q.onVnodeUpdated)||U)&&We(()=>{ne&&kt(ne,x,v,m),U&&yn(v,m,x,"updated")},A)},he=(m,v,x,A,M,N,z)=>{for(let L=0;L<v.length;L++){const D=m[L],I=v[L],U=D.el&&(D.type===we||!gs(D,I)||D.shapeFlag&70)?d(D.el):x;b(D,I,U,null,A,M,N,z,!0)}},Ce=(m,v,x,A,M,N,z)=>{if(x!==A){for(const L in A){if(_r(L))continue;const D=A[L],I=x[L];D!==I&&L!=="value"&&o(m,L,I,D,z,v.children,M,N,T)}if(x!==$e)for(const L in x)!_r(L)&&!(L in A)&&o(m,L,x[L],null,z,v.children,M,N,T);"value"in A&&o(m,"value",x.value,A.value)}},Ne=(m,v,x,A,M,N,z,L,D)=>{const I=v.el=m?m.el:l(""),U=v.anchor=m?m.anchor:l("");let{patchFlag:Y,dynamicChildren:q,slotScopeIds:ne}=v;ne&&(L=L?L.concat(ne):ne),m==null?(s(I,x,A),s(U,x,A),ae(v.children,x,U,M,N,z,L,D)):Y>0&&Y&64&&q&&m.dynamicChildren?(he(m.dynamicChildren,q,x,M,N,z,L),(v.key!=null||M&&v===M.subTree)&&ji(m,v,!0)):de(m,v,x,U,M,N,z,L,D)},qe=(m,v,x,A,M,N,z,L,D)=>{v.slotScopeIds=L,m==null?v.shapeFlag&512?M.ctx.activate(v,x,A,z,D):ke(v,x,A,M,N,z,D):Z(m,v,D)},ke=(m,v,x,A,M,N,z)=>{const L=m.component=sh(m,A,M);if(Qc(m)&&(L.ctx.renderer=Oe),rh(L),L.asyncDep){if(M&&M.registerDep(L,te),!m.el){const D=L.subTree=K(_n);w(null,D,v,x)}return}te(L,m,v,x,M,N,z)},Z=(m,v,x)=>{const A=v.component=m.component;if(_p(m,v,x))if(A.asyncDep&&!A.asyncResolved){X(A,v,x);return}else A.next=v,dp(A.update),A.update();else v.el=m.el,A.vnode=v},te=(m,v,x,A,M,N,z)=>{const L=()=>{if(m.isMounted){let{next:U,bu:Y,u:q,parent:ne,vnode:me}=m,Ee=U,Se;bn(m,!1),U?(U.el=me.el,X(m,U,z)):U=me,Y&&es(Y),(Se=U.props&&U.props.onVnodeBeforeUpdate)&&kt(Se,ne,U,me),bn(m,!0);const Me=ao(m),$t=m.subTree;m.subTree=Me,b($t,Me,d($t.el),H($t),m,M,N),U.el=Me.el,Ee===null&&yp(m,Me.el),q&&We(q,M),(Se=U.props&&U.props.onVnodeUpdated)&&We(()=>kt(Se,ne,U,me),M)}else{let U;const{el:Y,props:q}=v,{bm:ne,m:me,parent:Ee}=m,Se=ns(v);if(bn(m,!1),ne&&es(ne),!Se&&(U=q&&q.onVnodeBeforeMount)&&kt(U,Ee,v),bn(m,!0),Y&&ie){const Me=()=>{m.subTree=ao(m),ie(Y,m.subTree,m,M,null)};Se?v.type.__asyncLoader().then(()=>!m.isUnmounted&&Me()):Me()}else{const Me=m.subTree=ao(m);b(null,Me,x,A,m,M,N),v.el=Me.el}if(me&&We(me,M),!Se&&(U=q&&q.onVnodeMounted)){const Me=v;We(()=>kt(U,Ee,Me),M)}(v.shapeFlag&256||Ee&&ns(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&m.a&&We(m.a,M),m.isMounted=!0,v=x=A=null}},D=m.effect=new Ci(L,()=>Yc(I),m.scope),I=m.update=()=>D.run();I.id=m.uid,bn(m,!0),I()},X=(m,v,x)=>{v.component=m;const A=m.vnode.props;m.vnode=v,m.next=null,zp(m,v.props,A,x),Hp(m,v.children,x),cs(),qr(void 0,m.update),us()},de=(m,v,x,A,M,N,z,L,D=!1)=>{const I=m&&m.children,U=m?m.shapeFlag:0,Y=v.children,{patchFlag:q,shapeFlag:ne}=v;if(q>0){if(q&128){tt(I,Y,x,A,M,N,z,L,D);return}else if(q&256){Dt(I,Y,x,A,M,N,z,L,D);return}}ne&8?(U&16&&T(I,M,N),Y!==I&&u(x,Y)):U&16?ne&16?tt(I,Y,x,A,M,N,z,L,D):T(I,M,N,!0):(U&8&&u(x,""),ne&16&&ae(Y,x,A,M,N,z,L,D))},Dt=(m,v,x,A,M,N,z,L,D)=>{m=m||Gn,v=v||Gn;const I=m.length,U=v.length,Y=Math.min(I,U);let q;for(q=0;q<Y;q++){const ne=v[q]=D?ln(v[q]):zt(v[q]);b(m[q],ne,x,null,M,N,z,L,D)}I>U?T(m,M,N,!0,!1,Y):ae(v,x,A,M,N,z,L,D,Y)},tt=(m,v,x,A,M,N,z,L,D)=>{let I=0;const U=v.length;let Y=m.length-1,q=U-1;for(;I<=Y&&I<=q;){const ne=m[I],me=v[I]=D?ln(v[I]):zt(v[I]);if(gs(ne,me))b(ne,me,x,null,M,N,z,L,D);else break;I++}for(;I<=Y&&I<=q;){const ne=m[Y],me=v[q]=D?ln(v[q]):zt(v[q]);if(gs(ne,me))b(ne,me,x,null,M,N,z,L,D);else break;Y--,q--}if(I>Y){if(I<=q){const ne=q+1,me=ne<U?v[ne].el:A;for(;I<=q;)b(null,v[I]=D?ln(v[I]):zt(v[I]),x,me,M,N,z,L,D),I++}}else if(I>q)for(;I<=Y;)lt(m[I],M,N,!0),I++;else{const ne=I,me=I,Ee=new Map;for(I=me;I<=q;I++){const ft=v[I]=D?ln(v[I]):zt(v[I]);ft.key!=null&&Ee.set(ft.key,I)}let Se,Me=0;const $t=q-me+1;let Vn=!1,vl=0;const ms=new Array($t);for(I=0;I<$t;I++)ms[I]=0;for(I=ne;I<=Y;I++){const ft=m[I];if(Me>=$t){lt(ft,M,N,!0);continue}let Bt;if(ft.key!=null)Bt=Ee.get(ft.key);else for(Se=me;Se<=q;Se++)if(ms[Se-me]===0&&gs(ft,v[Se])){Bt=Se;break}Bt===void 0?lt(ft,M,N,!0):(ms[Bt-me]=I+1,Bt>=vl?vl=Bt:Vn=!0,b(ft,v[Bt],x,null,M,N,z,L,D),Me++)}const _l=Vn?qp(ms):Gn;for(Se=_l.length-1,I=$t-1;I>=0;I--){const ft=me+I,Bt=v[ft],yl=ft+1<U?v[ft+1].el:A;ms[I]===0?b(null,Bt,x,yl,M,N,z,L,D):Vn&&(Se<0||I!==_l[Se]?wt(Bt,x,yl,2):Se--)}}},wt=(m,v,x,A,M=null)=>{const{el:N,type:z,transition:L,children:D,shapeFlag:I}=m;if(I&6){wt(m.component.subTree,v,x,A);return}if(I&128){m.suspense.move(v,x,A);return}if(I&64){z.move(m,v,x,Oe);return}if(z===we){s(N,v,x);for(let Y=0;Y<D.length;Y++)wt(D[Y],v,x,A);s(m.anchor,v,x);return}if(z===fo){P(m,v,x);return}if(A!==2&&I&1&&L)if(A===0)L.beforeEnter(N),s(N,v,x),We(()=>L.enter(N),M);else{const{leave:Y,delayLeave:q,afterLeave:ne}=L,me=()=>s(N,v,x),Ee=()=>{Y(N,()=>{me(),ne&&ne()})};q?q(N,me,Ee):Ee()}else s(N,v,x)},lt=(m,v,x,A=!1,M=!1)=>{const{type:N,props:z,ref:L,children:D,dynamicChildren:I,shapeFlag:U,patchFlag:Y,dirs:q}=m;if(L!=null&&Uo(L,null,x,m,!0),U&256){v.ctx.deactivate(m);return}const ne=U&1&&q,me=!ns(m);let Ee;if(me&&(Ee=z&&z.onVnodeBeforeUnmount)&&kt(Ee,v,m),U&6)V(m.component,x,A);else{if(U&128){m.suspense.unmount(x,A);return}ne&&yn(m,null,v,"beforeUnmount"),U&64?m.type.remove(m,v,x,M,Oe,A):I&&(N!==we||Y>0&&Y&64)?T(I,v,x,!1,!0):(N===we&&Y&384||!M&&U&16)&&T(D,v,x),A&&nn(m)}(me&&(Ee=z&&z.onVnodeUnmounted)||ne)&&We(()=>{Ee&&kt(Ee,v,m),ne&&yn(m,null,v,"unmounted")},x)},nn=m=>{const{type:v,el:x,anchor:A,transition:M}=m;if(v===we){O(x,A);return}if(v===fo){R(m);return}const N=()=>{r(x),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:z,delayLeave:L}=M,D=()=>z(x,N);L?L(m.el,N,D):D()}else N()},O=(m,v)=>{let x;for(;m!==v;)x=f(m),r(m),m=x;r(v)},V=(m,v,x)=>{const{bum:A,scope:M,update:N,subTree:z,um:L}=m;A&&es(A),M.stop(),N&&(N.active=!1,lt(z,m,v,x)),L&&We(L,v),We(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},T=(m,v,x,A=!1,M=!1,N=0)=>{for(let z=N;z<m.length;z++)lt(m[z],v,x,A,M)},H=m=>m.shapeFlag&6?H(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),ge=(m,v,x)=>{m==null?v._vnode&&lt(v._vnode,null,null,!0):b(v._vnode||null,m,v,null,null,null,x),Uc(),v._vnode=m},Oe={p:b,um:lt,m:wt,r:nn,mt:ke,mc:ae,pc:de,pbc:he,n:H,o:e};let ce,ie;return t&&([ce,ie]=t(Oe)),{render:ge,hydrate:ce,createApp:Wp(ge,ce)}}function bn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ji(e,t,n=!1){const s=e.children,r=t.children;if(Q(s)&&Q(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=ln(r[o]),l.el=i.el),n||ji(i,l))}}function qp(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<c?o=l+1:i=l;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Xp=e=>e.__isTeleport,Ms=e=>e&&(e.disabled||e.disabled===""),Fl=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,qo=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},Zp={__isTeleport:!0,process(e,t,n,s,r,o,i,l,a,c){const{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:h,createText:y,createComment:b}}=c,S=Ms(t.props);let{shapeFlag:w,children:k,dynamicChildren:P}=t;if(e==null){const R=t.el=y(""),C=t.anchor=y("");p(R,n,s),p(C,n,s);const j=t.target=qo(t.props,h),se=t.targetAnchor=y("");j&&(p(se,j),i=i||Fl(j));const ae=(fe,he)=>{w&16&&u(k,fe,he,r,o,i,l,a)};S?ae(n,C):j&&ae(j,se)}else{t.el=e.el;const R=t.anchor=e.anchor,C=t.target=e.target,j=t.targetAnchor=e.targetAnchor,se=Ms(e.props),ae=se?n:C,fe=se?R:j;if(i=i||Fl(C),P?(f(e.dynamicChildren,P,ae,r,o,i,l),ji(e,t,!0)):a||d(e,t,ae,fe,r,o,i,l,!1),S)se||pr(t,n,R,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const he=t.target=qo(t.props,h);he&&pr(t,he,null,c,0)}else se&&pr(t,C,j,c,1)}},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:a,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&o(u),(i||!Ms(f))&&(o(c),l&16))for(let p=0;p<a.length;p++){const h=a[p];r(h,t,n,!0,!!h.dynamicChildren)}},move:pr,hydrate:Jp};function pr(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:c,props:u}=e,d=o===2;if(d&&s(i,t,n),(!d||Ms(u))&&a&16)for(let f=0;f<c.length;f++)r(c[f],t,n,2);d&&s(l,t,n)}function Jp(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:a}},c){const u=t.target=qo(t.props,a);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Ms(t.props))t.anchor=c(i(e),t,l(e),n,s,r,o),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&i(t.targetAnchor);break}c(d,t,u,n,s,r,o)}}return t.anchor&&i(t.anchor)}const Gp=Zp,we=Symbol(void 0),Vi=Symbol(void 0),_n=Symbol(void 0),fo=Symbol(void 0),Cs=[];let At=null;function E(e=!1){Cs.push(At=e?null:[])}function Qp(){Cs.pop(),At=Cs[Cs.length-1]||null}let Ys=1;function Dl(e){Ys+=e}function mu(e){return e.dynamicChildren=Ys>0?At||Gn:null,Qp(),Ys>0&&At&&At.push(e),e}function F(e,t,n,s,r,o){return mu(g(e,t,n,s,r,o,!0))}function G(e,t,n,s,r){return mu(K(e,t,n,s,r,!0))}function Nn(e){return e?e.__v_isVNode===!0:!1}function gs(e,t){return e.type===t.type&&e.key===t.key}const eo="__vInternal",gu=({key:e})=>e!=null?e:null,yr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Re(e)||xe(e)||oe(e)?{i:Xe,r:e,k:t,f:!!n}:e:null;function g(e,t=null,n=null,s=0,r=null,o=e===we?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gu(t),ref:t&&yr(t),scopeId:Zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Hi(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=Re(n)?8:16),Ys>0&&!i&&At&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&At.push(a),a}const K=eh;function eh(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Ip)&&(e=_n),Nn(e)){const l=Fn(e,t,!0);return n&&Hi(l,n),Ys>0&&!o&&At&&(l.shapeFlag&6?At[At.indexOf(e)]=l:At.push(l)),l.patchFlag|=-2,l}if(ah(e)&&(e=e.__vccOpts),t){t=Le(t);let{class:l,style:a}=t;l&&!Re(l)&&(t.class=Te(l)),ze(a)&&(zc(a)&&!Q(a)&&(a=it({},a)),t.style=Ue(a))}const i=Re(e)?1:Zc(e)?128:Xp(e)?64:ze(e)?4:oe(e)?2:0;return g(e,t,n,s,r,i,o,!0)}function Le(e){return e?zc(e)||eo in e?it({},e):e:null}function Fn(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?Ws(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gu(l),ref:t&&t.ref?n&&r?Q(r)?r.concat(yr(t)):[r,yr(t)]:yr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor}}function Ie(e=" ",t=0){return K(Vi,null,e,t)}function J(e="",t=!1){return t?(E(),G(_n,null,e)):K(_n,null,e)}function zt(e){return e==null||typeof e=="boolean"?K(_n):Q(e)?K(we,null,e.slice()):typeof e=="object"?ln(e):K(Vi,null,String(e))}function ln(e){return e.el===null||e.memo?e:Fn(e)}function Hi(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Hi(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(eo in t)?t._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),s&64?(n=16,t=[Ie(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ws(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Te([t.class,s.class]));else if(r==="style")t.style=Ue([t.style,s.style]);else if(jr(r)){const o=t[r],i=s[r];i&&o!==i&&!(Q(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function kt(e,t,n,s=null){Tt(e,t,7,[n,s])}const th=hu();let nh=0;function sh(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||th,o={uid:nh++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uu(s,r),emitsOptions:Xc(s,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=mp.bind(null,o),e.ce&&e.ce(o),o}let He=null;const Bn=()=>He||Xe,os=e=>{He=e,e.scope.on()},Tn=()=>{He&&He.scope.off(),He=null};function vu(e){return e.vnode.shapeFlag&4}let Ks=!1;function rh(e,t=!1){Ks=t;const{props:n,children:s}=e.vnode,r=vu(e);Bp(e,n,r,t),Vp(e,s);const o=r?oh(e,t):void 0;return Ks=!1,o}function oh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Kr(new Proxy(e.ctx,Tp));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?lh(e):null;os(e),cs();const o=fn(s,e,0,[e.props,r]);if(us(),Tn(),Pc(o)){if(o.then(Tn,Tn),t)return o.then(i=>{Bl(e,i,t)}).catch(i=>{Ur(i,e,0)});e.asyncDep=o}else Bl(e,o,t)}else _u(e,t)}function Bl(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ze(t)&&(e.setupState=Vc(t)),_u(e,n)}let zl;function _u(e,t,n){const s=e.type;if(!e.render){if(!t&&zl&&!s.render){const r=s.template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=it(it({isCustomElement:o,delimiters:l},i),a);s.render=zl(r,c)}}e.render=s.render||It}os(e),cs(),Rp(e),us(),Tn()}function ih(e){return new Proxy(e.attrs,{get(t,n){return xt(e,"get","$attrs"),t[n]}})}function lh(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=ih(e))},slots:e.slots,emit:e.emit,expose:t}}function to(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vc(Kr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mr)return Mr[n](e)}}))}function Xo(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function ah(e){return oe(e)&&"__vccOpts"in e}const $=(e,t)=>cp(e,t,Ks);function _t(e,t,n){const s=arguments.length;return s===2?ze(t)&&!Q(t)?Nn(t)?K(e,null,[t]):K(e,t):K(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Nn(n)&&(n=[n]),K(e,t,n))}const ch="3.2.37",uh="http://www.w3.org/2000/svg",Sn=typeof document!="undefined"?document:null,jl=Sn&&Sn.createElement("template"),fh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Sn.createElementNS(uh,e):Sn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{jl.innerHTML=s?`<svg>${e}</svg>`:e;const l=jl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function dh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ph(e,t,n){const s=e.style,r=Re(n);if(n&&!r){for(const o in n)Zo(s,o,n[o]);if(t&&!Re(t))for(const o in t)n[o]==null&&Zo(s,o,"")}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Vl=/\s*!important$/;function Zo(e,t,n){if(Q(n))n.forEach(s=>Zo(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=hh(e,t);Vl.test(n)?e.setProperty(Dn(s),n.replace(Vl,""),"important"):e[s]=n}}const Hl=["Webkit","Moz","ms"],po={};function hh(e,t){const n=po[t];if(n)return n;let s=Yt(t);if(s!=="filter"&&s in e)return po[t]=s;s=Yr(s);for(let r=0;r<Hl.length;r++){const o=Hl[r]+s;if(o in e)return po[t]=o}return t}const Yl="http://www.w3.org/1999/xlink";function mh(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Yl,t.slice(6,t.length)):e.setAttributeNS(Yl,t,n);else{const o=hd(t);n==null||o&&!kc(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function gh(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=kc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[yu,vh]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Jo=0;const _h=Promise.resolve(),yh=()=>{Jo=0},bh=()=>Jo||(_h.then(yh),Jo=yu());function qn(e,t,n,s){e.addEventListener(t,n,s)}function xh(e,t,n,s){e.removeEventListener(t,n,s)}function wh(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=kh(t);if(s){const c=o[t]=Eh(s,r);qn(e,l,c,a)}else i&&(xh(e,l,i,a),o[t]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function kh(e){let t;if(Wl.test(e)){t={};let n;for(;n=e.match(Wl);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Dn(e.slice(2)),t]}function Eh(e,t){const n=s=>{const r=s.timeStamp||yu();(vh||r>=n.attached-1)&&Tt(Sh(s,n.value),t,5,[s])};return n.value=e,n.attached=bh(),n}function Sh(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Kl=/^on[a-z]/,Ph=(e,t,n,s,r=!1,o,i,l,a)=>{t==="class"?dh(e,s,r):t==="style"?ph(e,n,s):jr(t)?Si(t)||wh(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$h(e,t,s,r))?gh(e,t,s,o,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),mh(e,t,s,r))};function $h(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Kl.test(t)&&oe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Kl.test(t)&&Re(n)?!1:t in e}const Ul=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>es(t,n):t};function Oh(e){e.target.composing=!0}function ql(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mh={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Ul(r);const o=s||r.props&&r.props.type==="number";qn(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=Ro(l)),e._assign(l)}),n&&qn(e,"change",()=>{e.value=e.value.trim()}),t||(qn(e,"compositionstart",Oh),qn(e,"compositionend",ql),qn(e,"change",ql))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=Ul(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Ro(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Ch={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xl=(e,t)=>n=>{if(!("key"in n))return;const s=Dn(n.key);if(t.some(r=>r===s||Ch[r]===s))return e(n)},bu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),vs(e,!0),s.enter(e)):s.leave(e,()=>{vs(e,!1)}):vs(e,t))},beforeUnmount(e,{value:t}){vs(e,t)}};function vs(e,t){e.style.display=t?e._vod:"none"}const Ah=it({patchProp:Ph},fh);let Zl;function Ih(){return Zl||(Zl=Kp(Ah))}const Th=(...e)=>{const t=Ih().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Rh(s);if(!r)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Rh(e){return Re(e)?document.querySelector(e):e}var Lh=Object.defineProperty,Jl=Object.getOwnPropertySymbols,Nh=Object.prototype.hasOwnProperty,Fh=Object.prototype.propertyIsEnumerable,Gl=(e,t,n)=>t in e?Lh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dh=(e,t)=>{for(var n in t||(t={}))Nh.call(t,n)&&Gl(e,n,t[n]);if(Jl)for(var n of Jl(t))Fh.call(t,n)&&Gl(e,n,t[n]);return e},xu="usehead",Ql="head:count",ho="data-head-attrs",wu="data-meta-body",Bh=(e,t,n)=>{const s=n.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)s.setAttribute(wu,"true");else{let o=t[r];if(r==="key"||o===!1)continue;r==="children"?s.textContent=o:s.setAttribute(r,o)}return s};function ea(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var zh=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},jh=()=>{const e=W(xu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Vh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Hh=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(_(t)),Yh=e=>{const t=[],n=Object.keys(e);for(const s of n)if(e[s]!=null)switch(s){case"title":t.push({tag:s,props:{children:e[s]}});break;case"titleTemplate":break;case"base":t.push({tag:s,props:Dh({key:"default"},e[s])});break;default:if(Vh.includes(s)){const r=e[s];Array.isArray(r)?r.forEach(o=>{t.push({tag:s,props:o})}):r&&t.push({tag:s,props:r})}break}return t},ta=(e,t)=>{const n=e.getAttribute(ho);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const s=[];for(const r in t){const o=t[r];o!=null&&(o===!1?e.removeAttribute(r):e.setAttribute(r,o),s.push(r))}s.length?e.setAttribute(ho,s.join(",")):e.removeAttribute(ho)},Wh=(e=window.document,t,n)=>{var s,r;const o=e.head,i=e.body;let l=o.querySelector(`meta[name="${Ql}"]`),a=i.querySelectorAll(`[${wu}]`);const c=l?Number(l.getAttribute("content")):0,u=[],d=[];if(a)for(let p=0;p<a.length;p++)a[p]&&((s=a[p].tagName)==null?void 0:s.toLowerCase())===t&&d.push(a[p]);if(l)for(let p=0,h=l.previousElementSibling;p<c;p++,h=(h==null?void 0:h.previousElementSibling)||null)((r=h==null?void 0:h.tagName)==null?void 0:r.toLowerCase())===t&&u.push(h);else l=e.createElement("meta"),l.setAttribute("name",Ql),l.setAttribute("content","0"),o.append(l);let f=n.map(p=>{var h;return{element:Bh(p.tag,p.props,e),body:(h=p.props.body)!=null?h:!1}});f=f.filter(p=>{for(let h=0;h<u.length;h++){const y=u[h];if(ea(y,p.element))return u.splice(h,1),!1}for(let h=0;h<d.length;h++){const y=d[h];if(ea(y,p.element))return d.splice(h,1),!1}return!0}),d.forEach(p=>{var h;return(h=p.parentNode)==null?void 0:h.removeChild(p)}),u.forEach(p=>{var h;return(h=p.parentNode)==null?void 0:h.removeChild(p)}),f.forEach(p=>{p.body===!0?i.insertAdjacentElement("beforeend",p.element):o.insertBefore(p.element,l)}),l.setAttribute("content",""+(c-u.length+f.filter(p=>!p.body).length))},Kh=e=>{let t=[],n=new Set;e&&t.push(Lt(e));const s={install(r){r.config.globalProperties.$head=s,r.provide(xu,s)},get headTags(){const r=[],o=t.map(i=>_(i).titleTemplate).reverse().find(i=>i!=null);return t.forEach(i=>{Yh(_(i)).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const c=zh(a.props);if(c){let u=-1;for(let d=0;d<r.length;d++){const f=r[d],p=f.props[c.name],h=a.props[c.name];if(f.tag===a.tag&&p===h){u=d;break}}u!==-1&&r.splice(u,1)}}o&&a.tag==="title"&&(a.props.children=Hh(o,a.props.children)),r.push(a)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(o=>o!==r)},updateDOM(r=window.document){let o,i={},l={};const a={};for(const u of s.headTags){if(u.tag==="title"){o=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(i,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(l,u.props);continue}a[u.tag]=a[u.tag]||[],a[u.tag].push(u)}o!==void 0&&(r.title=o),ta(r.documentElement,i),ta(r.body,l);const c=new Set([...Object.keys(a),...n]);for(const u of c)Wh(r,u,a[u]||[]);n.clear(),Object.keys(a).forEach(u=>n.add(u))}};return s},Uh=typeof window!="undefined",qh=e=>{const t=jh(),n=B(e);t.addHeadObjs(n),Uh&&(tr(()=>{t.updateDOM()}),Gr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const As=Symbol("v-click-clicks"),Pn=Symbol("v-click-clicks-elements"),Go=Symbol("v-click-clicks-order-map"),Is=Symbol("v-click-clicks-disabled"),ku=Symbol("slidev-slide-scale"),ee=Symbol("slidev-slidev-context"),Xh=Symbol("slidev-route"),Zh=Symbol("slidev-slide-context"),En="slidev-vclick-target",mo="slidev-vclick-hidden",Jh="slidev-vclick-fade",go="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",hr="slidev-vclick-prior";function Gh(e){return e=e||[],Array.isArray(e)?e:[e]}function Qo(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Qh(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function em(e){return e!=null}function tm(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(em))}var Mn={theme:"seriph",title:"\u804C\u7EA7\u8003\u6838\u6C47\u62A5",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"};const _e=Mn;var xc;const dn=(xc=_e.aspectRatio)!=null?xc:16/9;var wc;const Rn=(wc=_e.canvasWidth)!=null?wc:980,Eu=Math.round(Rn/dn),Su=$(()=>tm(_e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Pt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const zn=Ae({page:0,clicks:0});let nm=[],sm=[];Pt(zn,"$syncUp",!0);Pt(zn,"$syncDown",!0);Pt(zn,"$paused",!1);Pt(zn,"$onSet",e=>nm.push(e));Pt(zn,"$onPatch",e=>sm.push(e));Pt(zn,"$patch",async()=>!1);function Pu(e,t,n=!1){const s=[];let r=!1,o=!1,i,l;const a=Ae(t);function c(p){s.push(p)}function u(p,h){clearTimeout(i),r=!0,a[p]=h,i=setTimeout(()=>r=!1,0)}function d(p){r||(clearTimeout(l),o=!0,Object.entries(p).forEach(([h,y])=>{a[h]=y}),l=setTimeout(()=>o=!1,0))}function f(p){let h;n?n&&window.addEventListener("storage",b=>{b&&b.key===p&&b.newValue&&d(JSON.parse(b.newValue))}):(h=new BroadcastChannel(p),h.addEventListener("message",b=>d(b.data)));function y(){!n&&h&&!o?h.postMessage(ye(a)):n&&!o&&window.localStorage.setItem(p,JSON.stringify(a)),r||s.forEach(b=>b(a))}if(le(a,y,{deep:!0}),n){const b=window.localStorage.getItem(p);b&&d(JSON.parse(b))}}return{init:f,onPatch:c,patch:u,state:a}}const{init:rm,onPatch:om,patch:na,state:vo}=Pu(zn,{page:1,clicks:0}),jn=Ae({});let im=[],lm=[];Pt(jn,"$syncUp",!0);Pt(jn,"$syncDown",!0);Pt(jn,"$paused",!1);Pt(jn,"$onSet",e=>im.push(e));Pt(jn,"$onPatch",e=>lm.push(e));Pt(jn,"$patch",async()=>!1);const{init:am,onPatch:cm,patch:$u,state:Ar}=Pu(jn,{},!1),um="modulepreload",sa={},fm="/",ds=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${fm}${s}`,s in sa)return;sa[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":um,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function ct(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function dm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var ra;const ut=typeof window!="undefined",pm=e=>typeof e!="undefined",hm=Object.prototype.toString,mm=e=>typeof e=="number",Ou=e=>typeof e=="string",Ir=e=>hm.call(e)==="[object Object]",ei=()=>+Date.now(),pn=()=>{};ut&&((ra=window==null?void 0:window.navigator)==null?void 0:ra.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function gm(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const Mu=e=>e();function vm(e=Mu){const t=B(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...o)=>{t.value&&e(...o)}}}function _m(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+r}function Gt(e){return $d()?(Od(e),!0):!1}function Fe(...e){return $(()=>e.every(t=>_(t)))}function pt(e){return $(()=>!_(e))}function ym(e){if(!xe(e))return Ae(e);const t=new Proxy({},{get(n,s,r){return _(Reflect.get(e.value,s,r))},set(n,s,r){return xe(e.value[s])&&!xe(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ae(t)}var bm=Object.defineProperty,xm=Object.defineProperties,wm=Object.getOwnPropertyDescriptors,oa=Object.getOwnPropertySymbols,km=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,ia=(e,t,n)=>t in e?bm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sm=(e,t)=>{for(var n in t||(t={}))km.call(t,n)&&ia(e,n,t[n]);if(oa)for(var n of oa(t))Em.call(t,n)&&ia(e,n,t[n]);return e},Pm=(e,t)=>xm(e,wm(t));function $m(e){if(!xe(e))return op(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=rp(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=Pm(Sm({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function Om(e,t=!0){Bn()?nu(e):t?e():Ke(e)}function Mm(e,t=!0){Bn()?fs(e):t?e():Ke(e)}function Yi(e){Bn()&&Qr(e)}function Cm(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let o=null;const i=B(!1);function l(){o&&(clearInterval(o),o=null)}function a(){i.value=!1,l()}function c(){_(t)<=0||(i.value=!0,r&&e(),l(),o=setInterval(e,_(t)))}if(s&&ut&&c(),xe(t)){const u=le(t,()=>{i.value&&ut&&c()});Gt(u)}return Gt(a),{isActive:i,pause:a,resume:c}}function Am(e,t,n={}){const{immediate:s=!0}=n,r=B(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function l(){r.value=!1,i()}function a(...c){i(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...c)},_(t))}return s&&(r.value=!0,ut&&a()),Gt(l),{isPending:r,start:a,stop:l}}function Cu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=xe(e),o=B(e);function i(l){return arguments.length?(o.value=l,o.value):(o.value=o.value===_(n)?_(s):_(n),o.value)}return r?i:[o,i]}var la=Object.getOwnPropertySymbols,Im=Object.prototype.hasOwnProperty,Tm=Object.prototype.propertyIsEnumerable,Rm=(e,t)=>{var n={};for(var s in e)Im.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&la)for(var s of la(e))t.indexOf(s)<0&&Tm.call(e,s)&&(n[s]=e[s]);return n};function Lm(e,t,n={}){const s=n,{eventFilter:r=Mu}=s,o=Rm(s,["eventFilter"]);return le(e,gm(r,t),o)}function Nm(e,t,n){const s=le(e,(...r)=>(Ke(()=>s()),t(...r)),n)}var Fm=Object.defineProperty,Dm=Object.defineProperties,Bm=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,Au=Object.prototype.hasOwnProperty,Iu=Object.prototype.propertyIsEnumerable,aa=(e,t,n)=>t in e?Fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zm=(e,t)=>{for(var n in t||(t={}))Au.call(t,n)&&aa(e,n,t[n]);if(Tr)for(var n of Tr(t))Iu.call(t,n)&&aa(e,n,t[n]);return e},jm=(e,t)=>Dm(e,Bm(t)),Vm=(e,t)=>{var n={};for(var s in e)Au.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Tr)for(var s of Tr(e))t.indexOf(s)<0&&Iu.call(e,s)&&(n[s]=e[s]);return n};function Hm(e,t,n={}){const s=n,{eventFilter:r}=s,o=Vm(s,["eventFilter"]),{eventFilter:i,pause:l,resume:a,isActive:c}=vm(r);return{stop:Lm(e,t,jm(zm({},o),{eventFilter:i})),pause:l,resume:a,isActive:c}}function rt(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ge=ut?window:void 0,Ym=ut?window.document:void 0,Wm=ut?window.navigator:void 0;function be(...e){let t,n,s,r;if(Ou(e[0])?([n,s,r]=e,t=Ge):[t,n,s,r]=e,!t)return pn;let o=pn;const i=le(()=>rt(t),a=>{o(),a&&(a.addEventListener(n,s,r),o=()=>{a.removeEventListener(n,s,r),o=pn})},{immediate:!0,flush:"post"}),l=()=>{i(),o()};return Gt(l),l}function Km(e,t,n={}){const{window:s=Ge,ignore:r,capture:o=!0,detectIframe:i=!1}=n;if(!s)return;const l=B(!0);let a;const c=f=>{s.clearTimeout(a);const p=rt(e),h=f.composedPath();!p||p===f.target||h.includes(p)||!l.value||r&&r.length>0&&r.some(y=>{const b=rt(y);return b&&(f.target===b||h.includes(b))})||t(f)},u=[be(s,"click",c,{passive:!0,capture:o}),be(s,"pointerdown",f=>{const p=rt(e);l.value=!!p&&!f.composedPath().includes(p)},{passive:!0}),be(s,"pointerup",f=>{if(f.button===0){const p=f.composedPath();f.composedPath=()=>p,a=s.setTimeout(()=>c(f),50)}},{passive:!0}),i&&be(s,"blur",f=>{var p;const h=rt(e);((p=document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(h!=null&&h.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>u.forEach(f=>f())}const Um=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function qm(e,t,n={}){const{target:s=Ge,eventName:r="keydown",passive:o=!1}=n,i=Um(e);return be(s,r,a=>{i(a)&&t(a)},o)}function Xm(e={}){const{window:t=Ge}=e,n=B(0);return t&&(be(t,"blur",()=>n.value+=1,!0),be(t,"focus",()=>n.value+=1,!0)),$(()=>(n.value,t==null?void 0:t.document.activeElement))}function br(e,t={}){const{window:n=Ge}=t,s=Boolean(n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=B(!1),i=()=>{!s||(r||(r=n.matchMedia(e)),o.value=r.matches)};return Om(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),Gt(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),o}const Zm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Jm=Object.defineProperty,ca=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Qm=Object.prototype.propertyIsEnumerable,ua=(e,t,n)=>t in e?Jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eg=(e,t)=>{for(var n in t||(t={}))Gm.call(t,n)&&ua(e,n,t[n]);if(ca)for(var n of ca(t))Qm.call(t,n)&&ua(e,n,t[n]);return e};function tg(e,t={}){function n(l,a){let c=e[l];return a!=null&&(c=_m(c,a)),typeof c=="number"&&(c=`${c}px`),c}const{window:s=Ge}=t;function r(l){return s?s.matchMedia(l).matches:!1}const o=l=>br(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,a)=>(Object.defineProperty(l,a,{get:()=>o(a),enumerable:!0,configurable:!0}),l),{});return eg({greater:o,smaller(l){return br(`(max-width: ${n(l,-.1)})`,t)},between(l,a){return br(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isInBetween(l,a){return r(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`)}},i)}function ng(e={}){const{navigator:t=Wm,read:n=!1,source:s,copiedDuring:r=1500}=e,o=["copy","cut"],i=Boolean(t&&"clipboard"in t),l=B(""),a=B(!1),c=Am(()=>a.value=!1,r);function u(){t.clipboard.readText().then(f=>{l.value=f})}if(i&&n)for(const f of o)be(f,u);async function d(f=_(s)){i&&f!=null&&(await t.clipboard.writeText(f),l.value=f,a.value=!0,c.start())}return{isSupported:i,text:l,copied:a,copy:d}}const ti=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ni="__vueuse_ssr_handlers__";ti[ni]=ti[ni]||{};const sg=ti[ni];function rg(e,t){return sg[e]||t}function og(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const ig={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ft(e,t,n,s={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:a=!0,shallow:c,window:u=Ge,eventFilter:d,onError:f=C=>{console.error(C)}}=s,p=(c?Lt:B)(t);if(!n)try{n=rg("getDefaultStorage",()=>{var C;return(C=Ge)==null?void 0:C.localStorage})()}catch(C){f(C)}if(!n)return p;const h=_(t),y=og(h),b=(r=s.serializer)!=null?r:ig[y],{pause:S,resume:w}=Hm(p,()=>k(p.value),{flush:o,deep:i,eventFilter:d});return u&&l&&be(u,"storage",R),R(),p;function k(C){try{C==null?n.removeItem(e):n.setItem(e,b.write(C))}catch(j){f(j)}}function P(C){if(!(C&&C.key!==e)){S();try{const j=C?C.newValue:n.getItem(e);return j==null?(a&&h!==null&&n.setItem(e,b.write(h)),h):typeof j!="string"?j:b.read(j)}catch(j){f(j)}finally{w()}}}function R(C){C&&C.key!==e||(p.value=P(C))}}function lg(e){return br("(prefers-color-scheme: dark)",e)}var ag=Object.defineProperty,cg=Object.defineProperties,ug=Object.getOwnPropertyDescriptors,fa=Object.getOwnPropertySymbols,fg=Object.prototype.hasOwnProperty,dg=Object.prototype.propertyIsEnumerable,da=(e,t,n)=>t in e?ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pg=(e,t)=>{for(var n in t||(t={}))fg.call(t,n)&&da(e,n,t[n]);if(fa)for(var n of fa(t))dg.call(t,n)&&da(e,n,t[n]);return e},hg=(e,t)=>cg(e,ug(t));function I5(e,t={}){var n,s;const r=(n=t.draggingElement)!=null?n:Ge,o=B((s=t.initialValue)!=null?s:{x:0,y:0}),i=B(),l=f=>t.pointerTypes?t.pointerTypes.includes(f.pointerType):!0,a=f=>{_(t.preventDefault)&&f.preventDefault(),_(t.stopPropagation)&&f.stopPropagation()},c=f=>{var p;if(!l(f)||_(t.exact)&&f.target!==_(e))return;const h=_(e).getBoundingClientRect(),y={x:f.pageX-h.left,y:f.pageY-h.top};((p=t.onStart)==null?void 0:p.call(t,y,f))!==!1&&(i.value=y,a(f))},u=f=>{var p;!l(f)||!i.value||(o.value={x:f.pageX-i.value.x,y:f.pageY-i.value.y},(p=t.onMove)==null||p.call(t,o.value,f),a(f))},d=f=>{var p;!l(f)||!i.value||(i.value=void 0,(p=t.onEnd)==null||p.call(t,o.value,f),a(f))};return ut&&(be(e,"pointerdown",c,!0),be(r,"pointermove",u,!0),be(r,"pointerup",d,!0)),hg(pg({},$m(o)),{position:o,isDragging:$(()=>!!i.value),style:$(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var pa=Object.getOwnPropertySymbols,mg=Object.prototype.hasOwnProperty,gg=Object.prototype.propertyIsEnumerable,vg=(e,t)=>{var n={};for(var s in e)mg.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&pa)for(var s of pa(e))t.indexOf(s)<0&&gg.call(e,s)&&(n[s]=e[s]);return n};function _g(e,t,n={}){const s=n,{window:r=Ge}=s,o=vg(s,["window"]);let i;const l=r&&"ResizeObserver"in r,a=()=>{i&&(i.disconnect(),i=void 0)},c=le(()=>rt(e),d=>{a(),l&&r&&d&&(i=new ResizeObserver(t),i.observe(d,o))},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return Gt(u),{isSupported:l,stop:u}}function Tu(e,t={}){const{immediate:n=!0,window:s=Ge}=t,r=B(!1);let o=null;function i(){!r.value||!s||(e(),o=s.requestAnimationFrame(i))}function l(){!r.value&&s&&(r.value=!0,i())}function a(){r.value=!1,o!=null&&s&&(s.cancelAnimationFrame(o),o=null)}return n&&l(),Gt(a),{isActive:r,pause:a,resume:l}}function yg(e,t={width:0,height:0},n={}){const s=B(t.width),r=B(t.height);return _g(e,([o])=>{s.value=o.contentRect.width,r.value=o.contentRect.height},n),le(()=>rt(e),o=>{s.value=o?t.width:0,r.value=o?t.height:0}),{width:s,height:r}}const ha=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function bg(e,t={}){const{document:n=Ym,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=B(!1);let i=!1,l=ha[0];if(!n)i=!1;else for(const y of ha)if(y[1]in n){l=y,i=!0;break}const[a,c,u,,d]=l;async function f(){!i||(n!=null&&n[u]&&await n[c](),o.value=!1)}async function p(){if(!i)return;await f();const y=rt(r);y&&(await y[a](),o.value=!0)}async function h(){o.value?await f():await p()}return n&&be(n,d,()=>{o.value=!!(n!=null&&n[u])},!1),s&&Gt(f),{isSupported:i,isFullscreen:o,enter:p,exit:f,toggle:h}}function xg(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:o=.1,window:i=Ge}=n,l=i&&"IntersectionObserver"in i;let a=pn;const c=l?le(()=>({el:rt(e),root:rt(s)}),({el:d,root:f})=>{if(a(),!d)return;const p=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:o});p.observe(d),a=()=>{p.disconnect(),a=pn}},{immediate:!0,flush:"post"}):pn,u=()=>{a(),c()};return Gt(u),{isSupported:l,stop:u}}const wg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function kg(e={}){const{reactive:t=!1,target:n=Ge,aliasMap:s=wg,passive:r=!0,onEventFired:o=pn}=e,i=Ae(new Set),l={toJSON(){return{}},current:i},a=t?Ae(l):l,c=new Set,u=new Set;function d(y,b){y in a&&(t?a[y]=b:a[y].value=b)}function f(){for(const y of u)d(y,!1)}function p(y,b){var S,w;const k=(S=y.key)==null?void 0:S.toLowerCase(),P=(w=y.code)==null?void 0:w.toLowerCase(),R=[P,k].filter(Boolean);P&&(b?i.add(y.code):i.delete(y.code));for(const C of R)u.add(C),d(C,b);k==="meta"&&!b?(c.forEach(C=>{i.delete(C),d(C,!1)}),c.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&b&&[...i,...R].forEach(C=>c.add(C))}n&&(be(n,"keydown",y=>(p(y,!0),o(y)),{passive:r}),be(n,"keyup",y=>(p(y,!1),o(y)),{passive:r}),be("blur",f,{passive:!0}),be("focus",f,{passive:!0}));const h=new Proxy(a,{get(y,b,S){if(typeof b!="string")return Reflect.get(y,b,S);if(b=b.toLowerCase(),b in s&&(b=s[b]),!(b in a))if(/[+_-]/.test(b)){const k=b.split(/[+_-]/g).map(P=>P.trim());a[b]=$(()=>k.every(P=>_(h[P])))}else a[b]=B(!1);const w=Reflect.get(y,b,S);return t?_(w):w}});return h}function T5(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:o=Ge,eventFilter:i}=e,l=B(r.x),a=B(r.y),c=B(null),u=y=>{t==="page"?(l.value=y.pageX,a.value=y.pageY):t==="client"&&(l.value=y.clientX,a.value=y.clientY),c.value="mouse"},d=()=>{l.value=r.x,a.value=r.y},f=y=>{if(y.touches.length>0){const b=y.touches[0];t==="page"?(l.value=b.pageX,a.value=b.pageY):t==="client"&&(l.value=b.clientX,a.value=b.clientY),c.value="touch"}},p=y=>i===void 0?u(y):i(()=>u(y),{}),h=y=>i===void 0?f(y):i(()=>f(y),{});return o&&(be(o,"mousemove",p,{passive:!0}),be(o,"dragover",p,{passive:!0}),n&&(be(o,"touchstart",h,{passive:!0}),be(o,"touchmove",h,{passive:!0}),s&&be(o,"touchend",d,{passive:!0}))),{x:l,y:a,sourceType:c}}var Xt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xt||(Xt={}));function Eg(e,t={}){const n=B(e),{threshold:s=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:i}=t,l=Ae({x:0,y:0}),a=(C,j)=>{l.x=C,l.y=j},c=Ae({x:0,y:0}),u=(C,j)=>{c.x=C,c.y=j},d=$(()=>l.x-c.x),f=$(()=>l.y-c.y),{max:p,abs:h}=Math,y=$(()=>p(h(d.value),h(f.value))>=s),b=B(!1),S=B(!1),w=$(()=>y.value?h(d.value)>h(f.value)?d.value>0?Xt.LEFT:Xt.RIGHT:f.value>0?Xt.UP:Xt.DOWN:Xt.NONE),k=C=>t.pointerTypes?t.pointerTypes.includes(C.pointerType):!0,P=[be(e,"pointerdown",C=>{var j,se;if(!k(C))return;S.value=!0,(se=(j=n.value)==null?void 0:j.style)==null||se.setProperty("touch-action","none");const ae=C.target;ae==null||ae.setPointerCapture(C.pointerId);const{clientX:fe,clientY:he}=C;a(fe,he),u(fe,he),i==null||i(C)}),be(e,"pointermove",C=>{if(!k(C)||!S.value)return;const{clientX:j,clientY:se}=C;u(j,se),!b.value&&y.value&&(b.value=!0),b.value&&(r==null||r(C))}),be(e,"pointerup",C=>{var j,se;!k(C)||(b.value&&(o==null||o(C,w.value)),S.value=!1,b.value=!1,(se=(j=n.value)==null?void 0:j.style)==null||se.setProperty("touch-action","initial"))})],R=()=>P.forEach(C=>C());return{isSwiping:Zn(b),direction:Zn(w),posStart:Zn(l),posEnd:Zn(c),distanceX:d,distanceY:f,stop:R}}var Sg=Object.defineProperty,ma=Object.getOwnPropertySymbols,Pg=Object.prototype.hasOwnProperty,$g=Object.prototype.propertyIsEnumerable,ga=(e,t,n)=>t in e?Sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Og=(e,t)=>{for(var n in t||(t={}))Pg.call(t,n)&&ga(e,n,t[n]);if(ma)for(var n of ma(t))$g.call(t,n)&&ga(e,n,t[n]);return e};function R5(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame"}=e,o=B(ei()+n),i=()=>o.value=ei()+n,l=r==="requestAnimationFrame"?Tu(i,{immediate:s}):Cm(i,r,{immediate:s});return t?Og({timestamp:o},l):o}function Vt(e,t,n,s={}){var r,o,i;const{passive:l=!1,eventName:a,deep:c=!1,defaultValue:u}=s,d=Bn(),f=n||(d==null?void 0:d.emit)||((r=d==null?void 0:d.$emit)==null?void 0:r.bind(d))||((i=(o=d==null?void 0:d.proxy)==null?void 0:o.$emit)==null?void 0:i.bind(d==null?void 0:d.proxy));let p=a;t||(t="modelValue"),p=a||p||`update:${t.toString()}`;const h=()=>pm(e[t])?e[t]:u;if(l){const y=B(h());return le(()=>e[t],b=>y.value=b),le(y,b=>{(b!==e[t]||c)&&f(p,b)},{deep:c}),y}else return $({get(){return h()},set(y){f(p,y)}})}function L5({window:e=Ge}={}){if(!e)return B(!1);const t=B(e.document.hasFocus());return be(e,"blur",()=>{t.value=!1}),be(e,"focus",()=>{t.value=!0}),t}function Mg(e={}){const{window:t=Ge,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0}=e,o=B(n),i=B(s),l=()=>{t&&(o.value=t.innerWidth,i.value=t.innerHeight)};return l(),Mm(l),be("resize",l,{passive:!0}),r&&be("orientationchange",l,{passive:!0}),{width:o,height:i}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xn=typeof window!="undefined";function Cg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function _o(e,t){const n={};for(const s in t){const r=t[s];n[s]=Nt(r)?r.map(e):e(r)}return n}const Ts=()=>{},Nt=Array.isArray,Ag=/\/$/,Ig=e=>e.replace(Ag,"");function yo(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=t.slice(0,a),o=t.slice(a+1,l>-1?l:t.length),r=e(o)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Ng(s!=null?s:t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function Tg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function va(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rg(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&is(t.matched[s],n.matched[r])&&Ru(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ru(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Lg(e[n],t[n]))return!1;return!0}function Lg(e,t){return Nt(e)?_a(e,t):Nt(t)?_a(t,e):e===t}function _a(e,t){return Nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Ng(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var Rs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rs||(Rs={}));function Fg(e){if(!e)if(Xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ig(e)}const Dg=/^[^#]+#/;function Bg(e,t){return e.replace(Dg,"#")+t}function zg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const no=()=>({left:window.pageXOffset,top:window.pageYOffset});function jg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=zg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ya(e,t){return(history.state?history.state.position-t:-1)+e}const si=new Map;function Vg(e,t){si.set(e,t)}function Hg(e){const t=si.get(e);return si.delete(e),t}let Yg=()=>location.protocol+"//"+location.host;function Lu(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let l=r.includes(e.slice(o))?e.slice(o).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),va(a,"")}return va(n,e)+s+r}function Wg(e,t,n,s){let r=[],o=[],i=null;const l=({state:f})=>{const p=Lu(e,location),h=n.value,y=t.value;let b=0;if(f){if(n.value=p,t.value=f,i&&i===h){i=null;return}b=y?f.position-y.position:0}else s(p);r.forEach(S=>{S(n.value,h,{delta:b,type:Us.pop,direction:b?b>0?Rs.forward:Rs.back:Rs.unknown})})};function a(){i=n.value}function c(f){r.push(f);const p=()=>{const h=r.indexOf(f);h>-1&&r.splice(h,1)};return o.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(Pe({},f.state,{scroll:no()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:d}}function ba(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?no():null}}function Kg(e){const{history:t,location:n}=window,s={value:Lu(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Yg()+e+a;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function i(a,c){const u=Pe({},t.state,ba(r.value.back,a,r.value.forward,!0),c,{position:r.value.position});o(a,u,!0),s.value=a}function l(a,c){const u=Pe({},r.value,t.state,{forward:a,scroll:no()});o(u.current,u,!0);const d=Pe({},ba(s.value,a,null),{position:u.position+1},c);o(a,d,!1),s.value=a}return{location:s,state:r,push:l,replace:i}}function Ug(e){e=Fg(e);const t=Kg(e),n=Wg(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Pe({location:"",base:e,go:s,createHref:Bg.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function qg(e){return typeof e=="string"||e&&typeof e=="object"}function Nu(e){return typeof e=="string"||typeof e=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fu=Symbol("");var xa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xa||(xa={}));function ls(e,t){return Pe(new Error,{type:e,[Fu]:!0},t)}function Wt(e,t){return e instanceof Error&&Fu in e&&(t==null||!!(e.type&t))}const wa="[^/]+?",Xg={sensitive:!1,strict:!1,start:!0,end:!0},Zg=/[.+*?^${}()[\]/\\]/g;function Jg(e,t){const n=Pe({},Xg,t),s=[];let r=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Zg,"\\$&"),p+=40;else if(f.type===1){const{value:h,repeatable:y,optional:b,regexp:S}=f;o.push({name:h,repeatable:y,optional:b});const w=S||wa;if(w!==wa){p+=10;try{new RegExp(`(${w})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${h}" (${w}): `+P.message)}}let k=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(k=b&&c.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),r+=k,p+=20,b&&(p+=-8),y&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(c){const u=c.match(i),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",h=o[f-1];d[h.name]=p&&h.repeatable?p.split("/"):p}return d}function a(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:h,repeatable:y,optional:b}=p,S=h in c?c[h]:"";if(Nt(S)&&!y)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const w=Nt(S)?S.join("/"):S;if(!w)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);u+=w}}return u||"/"}return{re:i,score:s,keys:o,parse:l,stringify:a}}function Gg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Qg(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=Gg(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(ka(s))return 1;if(ka(r))return-1}return r.length-s.length}function ka(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ev={type:0,value:""},tv=/[a-zA-Z0-9_]/;function nv(e){if(!e)return[[]];if(e==="/")return[[ev]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,a,c="",u="";function d(){!c||(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),i()):a===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:tv.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),i(),r}function sv(e,t,n){const s=Jg(nv(e.path),n),r=Pe(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function rv(e,t){const n=[],s=new Map;t=Sa({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function o(u,d,f){const p=!f,h=iv(u);h.aliasOf=f&&f.record;const y=Sa(t,u),b=[h];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of k)b.push(Pe({},h,{components:f?f.record.components:h.components,path:P,aliasOf:f?f.record:h}))}let S,w;for(const k of b){const{path:P}=k;if(d&&P[0]!=="/"){const R=d.record.path,C=R[R.length-1]==="/"?"":"/";k.path=d.record.path+(P&&C+P)}if(S=sv(k,d,y),f?f.alias.push(S):(w=w||S,w!==S&&w.alias.push(S),p&&u.name&&!Ea(S)&&i(u.name)),h.children){const R=h.children;for(let C=0;C<R.length;C++)o(R[C],S,f&&f.children[C])}f=f||S,a(S)}return w?()=>{i(w)}:Ts}function i(u){if(Nu(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function l(){return n}function a(u){let d=0;for(;d<n.length&&Qg(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Du(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ea(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},h,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ls(1,{location:u});y=f.record.name,p=Pe(ov(d.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),h=f.stringify(p)}else if("path"in u)h=u.path,f=n.find(w=>w.re.test(h)),f&&(p=f.parse(h),y=f.record.name);else{if(f=d.name?s.get(d.name):n.find(w=>w.re.test(d.path)),!f)throw ls(1,{location:u,currentLocation:d});y=f.record.name,p=Pe({},d.params,u.params),h=f.stringify(p)}const b=[];let S=f;for(;S;)b.unshift(S.record),S=S.parent;return{name:y,path:h,params:p,matched:b,meta:av(b)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function ov(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function iv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:lv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function lv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ea(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function av(e){return e.reduce((t,n)=>Pe(t,n.meta),{})}function Sa(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Du(e,t){return t.children.some(n=>n===e||Du(e,n))}const Bu=/#/g,cv=/&/g,uv=/\//g,fv=/=/g,dv=/\?/g,zu=/\+/g,pv=/%5B/g,hv=/%5D/g,ju=/%5E/g,mv=/%60/g,Vu=/%7B/g,gv=/%7C/g,Hu=/%7D/g,vv=/%20/g;function Wi(e){return encodeURI(""+e).replace(gv,"|").replace(pv,"[").replace(hv,"]")}function _v(e){return Wi(e).replace(Vu,"{").replace(Hu,"}").replace(ju,"^")}function ri(e){return Wi(e).replace(zu,"%2B").replace(vv,"+").replace(Bu,"%23").replace(cv,"%26").replace(mv,"`").replace(Vu,"{").replace(Hu,"}").replace(ju,"^")}function yv(e){return ri(e).replace(fv,"%3D")}function bv(e){return Wi(e).replace(Bu,"%23").replace(dv,"%3F")}function xv(e){return e==null?"":bv(e).replace(uv,"%2F")}function Rr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function wv(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(zu," "),i=o.indexOf("="),l=Rr(i<0?o:o.slice(0,i)),a=i<0?null:Rr(o.slice(i+1));if(l in t){let c=t[l];Nt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function Pa(e){let t="";for(let n in e){const s=e[n];if(n=yv(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Nt(s)?s.map(o=>o&&ri(o)):[s&&ri(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function kv(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Ev=Symbol(""),$a=Symbol(""),Ki=Symbol(""),Yu=Symbol(""),oi=Symbol("");function ys(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function an(e,t,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const a=d=>{d===!1?l(ls(4,{from:n,to:t})):d instanceof Error?l(d):qg(d)?l(ls(2,{from:t,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),i())},c=e.call(s&&s.instances[r],t,n,a);let u=Promise.resolve(c);e.length<3&&(u=u.then(a)),u.catch(d=>l(d))})}function bo(e,t,n,s){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Sv(l)){const c=(l.__vccOpts||l)[t];c&&r.push(an(c,n,s,o,i))}else{let a=l();r.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const u=Cg(c)?c.default:c;o.components[i]=u;const f=(u.__vccOpts||u)[t];return f&&an(f,n,s,o,i)()}))}}return r}function Sv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oa(e){const t=W(Ki),n=W(Yu),s=$(()=>t.resolve(_(e.to))),r=$(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(is.bind(null,u));if(f>-1)return f;const p=Ma(a[c-2]);return c>1&&Ma(u)===p&&d[d.length-1].path!==p?d.findIndex(is.bind(null,a[c-2])):f}),o=$(()=>r.value>-1&&Mv(n.params,s.value.params)),i=$(()=>r.value>-1&&r.value===n.matched.length-1&&Ru(n.params,s.value.params));function l(a={}){return Ov(a)?t[_(e.replace)?"replace":"push"](_(e.to)).catch(Ts):Promise.resolve()}return{route:s,href:$(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}const Pv=ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oa,setup(e,{slots:t}){const n=Ae(Oa(e)),{options:s}=W(Ki),r=$(()=>({[Ca(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ca(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:_t("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),$v=Pv;function Ov(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Mv(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Nt(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function Ma(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ca=(e,t,n)=>e!=null?e:t!=null?t:n,Cv=ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=W(oi),r=$(()=>e.route||s.value),o=W($a,0),i=$(()=>{let c=_(o);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=$(()=>r.value.matched[i.value]);gt($a,$(()=>i.value+1)),gt(Ev,l),gt(oi,r);const a=B();return le(()=>[a.value,l.value,e.name],([c,u,d],[f,p,h])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!is(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=e.name,d=l.value,f=d&&d.components[u];if(!f)return Aa(n.default,{Component:f,route:c});const p=d.props[u],h=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=_t(f,Pe({},h,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return Aa(n.default,{Component:b,route:c})||b}}});function Aa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Av=Cv;function Iv(e){const t=rv(e.routes,e),n=e.parseQuery||wv,s=e.stringifyQuery||Pa,r=e.history,o=ys(),i=ys(),l=ys(),a=Lt(rn);let c=rn;Xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_o.bind(null,O=>""+O),d=_o.bind(null,xv),f=_o.bind(null,Rr);function p(O,V){let T,H;return Nu(O)?(T=t.getRecordMatcher(O),H=V):H=O,t.addRoute(H,T)}function h(O){const V=t.getRecordMatcher(O);V&&t.removeRoute(V)}function y(){return t.getRoutes().map(O=>O.record)}function b(O){return!!t.getRecordMatcher(O)}function S(O,V){if(V=Pe({},V||a.value),typeof O=="string"){const ie=yo(n,O,V.path),m=t.resolve({path:ie.path},V),v=r.createHref(ie.fullPath);return Pe(ie,m,{params:f(m.params),hash:Rr(ie.hash),redirectedFrom:void 0,href:v})}let T;if("path"in O)T=Pe({},O,{path:yo(n,O.path,V.path).path});else{const ie=Pe({},O.params);for(const m in ie)ie[m]==null&&delete ie[m];T=Pe({},O,{params:d(O.params)}),V.params=d(V.params)}const H=t.resolve(T,V),ge=O.hash||"";H.params=u(f(H.params));const Oe=Tg(s,Pe({},O,{hash:_v(ge),path:H.path})),ce=r.createHref(Oe);return Pe({fullPath:Oe,hash:ge,query:s===Pa?kv(O.query):O.query||{}},H,{redirectedFrom:void 0,href:ce})}function w(O){return typeof O=="string"?yo(n,O,a.value.path):Pe({},O)}function k(O,V){if(c!==O)return ls(8,{from:V,to:O})}function P(O){return j(O)}function R(O){return P(Pe(w(O),{replace:!0}))}function C(O){const V=O.matched[O.matched.length-1];if(V&&V.redirect){const{redirect:T}=V;let H=typeof T=="function"?T(O):T;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=w(H):{path:H},H.params={}),Pe({query:O.query,hash:O.hash,params:"path"in H?{}:O.params},H)}}function j(O,V){const T=c=S(O),H=a.value,ge=O.state,Oe=O.force,ce=O.replace===!0,ie=C(T);if(ie)return j(Pe(w(ie),{state:ge,force:Oe,replace:ce}),V||T);const m=T;m.redirectedFrom=V;let v;return!Oe&&Rg(s,H,T)&&(v=ls(16,{to:m,from:H}),Dt(H,H,!0,!1)),(v?Promise.resolve(v):ae(m,H)).catch(x=>Wt(x)?Wt(x,2)?x:de(x):te(x,m,H)).then(x=>{if(x){if(Wt(x,2))return j(Pe({replace:ce},w(x.to),{state:ge,force:Oe}),V||m)}else x=he(m,H,!0,ce,ge);return fe(m,H,x),x})}function se(O,V){const T=k(O,V);return T?Promise.reject(T):Promise.resolve()}function ae(O,V){let T;const[H,ge,Oe]=Tv(O,V);T=bo(H.reverse(),"beforeRouteLeave",O,V);for(const ie of H)ie.leaveGuards.forEach(m=>{T.push(an(m,O,V))});const ce=se.bind(null,O,V);return T.push(ce),Hn(T).then(()=>{T=[];for(const ie of o.list())T.push(an(ie,O,V));return T.push(ce),Hn(T)}).then(()=>{T=bo(ge,"beforeRouteUpdate",O,V);for(const ie of ge)ie.updateGuards.forEach(m=>{T.push(an(m,O,V))});return T.push(ce),Hn(T)}).then(()=>{T=[];for(const ie of O.matched)if(ie.beforeEnter&&!V.matched.includes(ie))if(Nt(ie.beforeEnter))for(const m of ie.beforeEnter)T.push(an(m,O,V));else T.push(an(ie.beforeEnter,O,V));return T.push(ce),Hn(T)}).then(()=>(O.matched.forEach(ie=>ie.enterCallbacks={}),T=bo(Oe,"beforeRouteEnter",O,V),T.push(ce),Hn(T))).then(()=>{T=[];for(const ie of i.list())T.push(an(ie,O,V));return T.push(ce),Hn(T)}).catch(ie=>Wt(ie,8)?ie:Promise.reject(ie))}function fe(O,V,T){for(const H of l.list())H(O,V,T)}function he(O,V,T,H,ge){const Oe=k(O,V);if(Oe)return Oe;const ce=V===rn,ie=Xn?history.state:{};T&&(H||ce?r.replace(O.fullPath,Pe({scroll:ce&&ie&&ie.scroll},ge)):r.push(O.fullPath,ge)),a.value=O,Dt(O,V,T,ce),de()}let Ce;function Ne(){Ce||(Ce=r.listen((O,V,T)=>{if(!nn.listening)return;const H=S(O),ge=C(H);if(ge){j(Pe(ge,{replace:!0}),H).catch(Ts);return}c=H;const Oe=a.value;Xn&&Vg(ya(Oe.fullPath,T.delta),no()),ae(H,Oe).catch(ce=>Wt(ce,12)?ce:Wt(ce,2)?(j(ce.to,H).then(ie=>{Wt(ie,20)&&!T.delta&&T.type===Us.pop&&r.go(-1,!1)}).catch(Ts),Promise.reject()):(T.delta&&r.go(-T.delta,!1),te(ce,H,Oe))).then(ce=>{ce=ce||he(H,Oe,!1),ce&&(T.delta&&!Wt(ce,8)?r.go(-T.delta,!1):T.type===Us.pop&&Wt(ce,20)&&r.go(-1,!1)),fe(H,Oe,ce)}).catch(Ts)}))}let qe=ys(),ke=ys(),Z;function te(O,V,T){de(O);const H=ke.list();return H.length?H.forEach(ge=>ge(O,V,T)):console.error(O),Promise.reject(O)}function X(){return Z&&a.value!==rn?Promise.resolve():new Promise((O,V)=>{qe.add([O,V])})}function de(O){return Z||(Z=!O,Ne(),qe.list().forEach(([V,T])=>O?T(O):V()),qe.reset()),O}function Dt(O,V,T,H){const{scrollBehavior:ge}=e;if(!Xn||!ge)return Promise.resolve();const Oe=!T&&Hg(ya(O.fullPath,0))||(H||!T)&&history.state&&history.state.scroll||null;return Ke().then(()=>ge(O,V,Oe)).then(ce=>ce&&jg(ce)).catch(ce=>te(ce,O,V))}const tt=O=>r.go(O);let wt;const lt=new Set,nn={currentRoute:a,listening:!0,addRoute:p,removeRoute:h,hasRoute:b,getRoutes:y,resolve:S,options:e,push:P,replace:R,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:ke.add,isReady:X,install(O){const V=this;O.component("RouterLink",$v),O.component("RouterView",Av),O.config.globalProperties.$router=V,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>_(a)}),Xn&&!wt&&a.value===rn&&(wt=!0,P(r.location).catch(ge=>{}));const T={};for(const ge in rn)T[ge]=$(()=>a.value[ge]);O.provide(Ki,V),O.provide(Yu,Ae(T)),O.provide(oi,a);const H=O.unmount;lt.add(O),O.unmount=function(){lt.delete(O),lt.size<1&&(c=rn,Ce&&Ce(),Ce=null,a.value=rn,wt=!1,Z=!1),H()}}};return nn}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Tv(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(c=>is(c,l))?s.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(c=>is(c,a))||r.push(a))}return[n,s,r]}const xo=B(!1),Ls=B(!1),Jn=B(!1),Rv=B(!0),ii=tg({xs:460,...Zm}),Ln=Mg(),Wu=kg(),Lv=$(()=>Ln.height.value-Ln.width.value/dn>180),Ku=bg(ut?document.body:null),ss=Xm(),Nv=$(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ss.value)==null?void 0:e.tagName)||"")||((t=ss.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Fv=$(()=>{var e;return["BUTTON","A"].includes(((e=ss.value)==null?void 0:e.tagName)||"")});Ft("slidev-camera","default");Ft("slidev-mic","default");const xr=Ft("slidev-scale",0),st=Ft("slidev-show-overview",!1),wo=Ft("slidev-presenter-cursor",!0),Ia=Ft("slidev-show-editor",!1);Ft("slidev-editor-width",ut?window.innerWidth*.4:100);const Uu=Cu(st);function Ta(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function Dv(e){return[-e[0],-e[1]]}function Mt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Et(e,t){return[e[0]-t[0],e[1]-t[1]]}function Ot(e,t){return[e[0]*t,e[1]*t]}function Bv(e,t){return[e[0]/t,e[1]/t]}function bs(e){return[e[1],-e[0]]}function zv(e,t){return e[0]*t[0]+e[1]*t[1]}function jv(e,t){return e[0]===t[0]&&e[1]===t[1]}function Vv(e){return Math.hypot(e[0],e[1])}function Hv(e){return e[0]*e[0]+e[1]*e[1]}function Ra(e,t){return Hv(Et(e,t))}function qu(e){return Bv(e,Vv(e))}function Yv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function xs(e,t,n){let s=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],i=e[1]-t[1],l=o*r-i*s,a=o*s+i*r;return[l+t[0],a+t[1]]}function li(e,t,n){return Mt(e,Ot(Et(t,e),n))}function La(e,t,n){return Mt(e,Ot(t,n))}var{min:Yn,PI:Wv}=Math,Na=.275,ws=Wv+1e-4;function Kv(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:o=!0,easing:i=Z=>Z,start:l={},end:a={},last:c=!1}=t,{cap:u=!0,easing:d=Z=>Z*(2-Z)}=l,{cap:f=!0,easing:p=Z=>--Z*Z*Z+1}=a;if(e.length===0||n<=0)return[];let h=e[e.length-1].runningLength,y=l.taper===!1?0:l.taper===!0?Math.max(n,h):l.taper,b=a.taper===!1?0:a.taper===!0?Math.max(n,h):a.taper,S=Math.pow(n*s,2),w=[],k=[],P=e.slice(0,10).reduce((Z,te)=>{let X=te.pressure;if(o){let de=Yn(1,te.distance/n),Dt=Yn(1,1-de);X=Yn(1,Z+(Dt-Z)*(de*Na))}return(Z+X)/2},e[0].pressure),R=Ta(n,r,e[e.length-1].pressure,i),C,j=e[0].vector,se=e[0].point,ae=se,fe=se,he=ae;for(let Z=0;Z<e.length;Z++){let{pressure:te}=e[Z],{point:X,vector:de,distance:Dt,runningLength:tt}=e[Z];if(Z<e.length-1&&h-tt<3)continue;if(r){if(o){let T=Yn(1,Dt/n),H=Yn(1,1-T);te=Yn(1,P+(H-P)*(T*Na))}R=Ta(n,r,te,i)}else R=n/2;C===void 0&&(C=R);let wt=tt<y?d(tt/y):1,lt=h-tt<b?p((h-tt)/b):1;if(R=Math.max(.01,R*Math.min(wt,lt)),Z===e.length-1){let T=Ot(bs(de),R);w.push(Et(X,T)),k.push(Mt(X,T));continue}let nn=e[Z+1].vector,O=zv(de,nn);if(O<0){let T=Ot(bs(j),R);for(let H=1/13,ge=0;ge<=1;ge+=H)fe=xs(Et(X,T),X,ws*ge),w.push(fe),he=xs(Mt(X,T),X,ws*-ge),k.push(he);se=fe,ae=he;continue}let V=Ot(bs(li(nn,de,O)),R);fe=Et(X,V),(Z<=1||Ra(se,fe)>S)&&(w.push(fe),se=fe),he=Mt(X,V),(Z<=1||Ra(ae,he)>S)&&(k.push(he),ae=he),P=te,j=de}let Ce=e[0].point.slice(0,2),Ne=e.length>1?e[e.length-1].point.slice(0,2):Mt(e[0].point,[1,1]),qe=[],ke=[];if(e.length===1){if(!(y||b)||c){let Z=La(Ce,qu(bs(Et(Ce,Ne))),-(C||R)),te=[];for(let X=1/13,de=X;de<=1;de+=X)te.push(xs(Z,Ce,ws*2*de));return te}}else{if(!(y||b&&e.length===1))if(u)for(let te=1/13,X=te;X<=1;X+=te){let de=xs(k[0],Ce,ws*X);qe.push(de)}else{let te=Et(w[0],k[0]),X=Ot(te,.5),de=Ot(te,.51);qe.push(Et(Ce,X),Et(Ce,de),Mt(Ce,de),Mt(Ce,X))}let Z=bs(Dv(e[e.length-1].vector));if(b||y&&e.length===1)ke.push(Ne);else if(f){let te=La(Ne,Z,R);for(let X=1/29,de=X;de<1;de+=X)ke.push(xs(te,Ne,ws*3*de))}else ke.push(Mt(Ne,Ot(Z,R)),Mt(Ne,Ot(Z,R*.99)),Et(Ne,Ot(Z,R*.99)),Et(Ne,Ot(Z,R)))}return w.concat(ke,k.reverse(),qe)}function Uv(e,t={}){var n;let{streamline:s=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:p,y:h,pressure:y=.5})=>[p,h,y]);if(l.length===2){let p=l[1];l=l.slice(0,-1);for(let h=1;h<5;h++)l.push(li(l[0],p,h/4))}l.length===1&&(l=[...l,[...Mt(l[0],[1,1]),...l[0].slice(2)]]);let a=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,u=0,d=a[0],f=l.length-1;for(let p=1;p<l.length;p++){let h=o&&p===f?l[p].slice(0,2):li(d.point,l[p],i);if(jv(d.point,h))continue;let y=Yv(h,d.point);if(u+=y,p<f&&!c){if(u<r)continue;c=!0}d={point:h,pressure:l[p][2]>=0?l[p][2]:.5,vector:qu(Et(d.point,h)),distance:y,runningLength:u},a.push(d)}return a[0].vector=((n=a[1])==null?void 0:n.vector)||[0,0],a}function qv(e,t={}){return Kv(Uv(e,t),t)}var Xv=qv,Zv=Object.defineProperty,Fa=Object.getOwnPropertySymbols,Jv=Object.prototype.hasOwnProperty,Gv=Object.prototype.propertyIsEnumerable,Da=(e,t,n)=>t in e?Zv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ai=(e,t)=>{for(var n in t||(t={}))Jv.call(t,n)&&Da(e,n,t[n]);if(Fa)for(var n of Fa(t))Gv.call(t,n)&&Da(e,n,t[n]);return e},Qv=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Lr(e,t){return e-t}function e0(e){return e<0?-1:1}function Nr(e){return[Math.abs(e),e0(e)]}function Xu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var t0=2,Ut=t0,ps=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const s=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const i=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:i.x*r,y:i.y*r,pressure:e.pressure}}}createElement(e,t){var n;const s=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?ai(ai({},this.brush),t):this.brush;return s.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),s.setAttribute("stroke",r.color),s.setAttribute("stroke-width",r.size.toString()),s.setAttribute("stroke-linecap","round"),r.dasharray&&s.setAttribute("stroke-dasharray",r.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Ut))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},n0=class extends ps{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Xv(e,ai({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((s,[r,o],i,l)=>{const[a,c]=l[(i+1)%l.length];return s.push(r,o,(r+a)/2,(o+c)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},s0=class extends ps{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Nr(e.x-this.start.x),[s,r]=Nr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(Lr),[l,a]=[this.start.y,this.start.y+s*r].sort(Lr);this.attr("cx",(o+i)/2),this.attr("cy",(l+a)/2),this.attr("rx",(i-o)/2),this.attr("ry",(a-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Zu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var r0=class extends ps{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Xu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Zu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=s/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},o0=class extends ps{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Nr(e.x-this.start.x),[s,r]=Nr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(Lr),[l,a]=[this.start.y,this.start.y+s*r].sort(Lr);this.attr("x",o),this.attr("y",l),this.attr("width",i-o),this.attr("height",a-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function i0(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function l0(e,t,n){let s=t.x,r=t.y,o=n.x-s,i=n.y-r;if(o!==0||i!==0){const l=((e.x-s)*o+(e.y-r)*i)/(o*o+i*i);l>1?(s=n.x,r=n.y):l>0&&(s+=o*l,r+=i*l)}return o=e.x-s,i=e.y-r,o*o+i*i}function a0(e,t){let n=e[0];const s=[n];let r;for(let o=1,i=e.length;o<i;o++)r=e[o],i0(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function ci(e,t,n,s,r){let o=s,i=0;for(let l=t+1;l<n;l++){const a=l0(e[l],e[t],e[n]);a>o&&(i=l,o=a)}o>s&&(i-t>1&&ci(e,t,i,s,r),r.push(e[i]),n-i>1&&ci(e,i,n,s,r))}function c0(e,t){const n=e.length-1,s=[e[0]];return ci(e,0,n,t,s),s.push(e[n]),s}function Ba(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:a0(e,s),e=c0(e,s),e}var u0=class extends ps{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Xu();const t=Zu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ba(this.points,1,!0),this.count=0),this.attr("d",ja(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",ja(Ba(this.points,1,!0))),!e.getTotalLength()))}};function f0(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function za(e,t,n,s){const r=t||e,o=n||e,i=.2,l=f0(r,o),a=l.angle+(s?Math.PI:0),c=l.length*i,u=e.x+Math.cos(a)*c,d=e.y+Math.sin(a)*c;return{x:u,y:d}}function d0(e,t,n){const s=za(n[t-1],n[t-2],e),r=za(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(Ut)},${s.y.toFixed(Ut)} ${r.x.toFixed(Ut)},${r.y.toFixed(Ut)} ${e.x.toFixed(Ut)},${e.y.toFixed(Ut)}`}function ja(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(Ut)},${n.y.toFixed(Ut)}`:`${t} ${d0(n,s,r)}`,"")}var p0=class extends ps{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const i=o.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const a=o.getPointAtLength(i*l/this.pathSubFactor),c=o.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:a.x,x2:c.x,y1:a.y,y2:c.y,segment:l,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,o=t.x2,i=e.y1,l=e.y2,a=t.y1,c=t.y2,u=(n-s)*(a-c)-(i-l)*(r-o),d=(n*l-i*s)*(r-o)-(n-s)*(r*c-a*o),f=(n*l-i*s)*(a-c)-(i-l)*(r*c-a*o),p=(h,y,b)=>h>=y&&h<=b?!0:h>=b&&h<=y;if(u===0)return!1;{const h={x:d/u,y:f/u};return p(h.x,n,s)&&p(h.y,i,l)&&p(h.x,r,o)&&p(h.y,a,c)}}};function h0(e){return{draw:new u0(e),stylus:new n0(e),line:new r0(e),rectangle:new o0(e),ellipse:new s0(e),eraseLine:new p0(e)}}var m0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Qv(),this._models=h0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function g0(e){return new m0(e)}const ui=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ht=Ft("slidev-drawing-enabled",!1),N5=Ft("slidev-drawing-pinned",!1),v0=B(!1),_0=B(!1),y0=B(!1),qs=B(!1),Cn=ym(Ft("slidev-drawing-brush",{color:ui[0],size:4,mode:"stylus"})),Va=B("stylus"),Ju=$(()=>_e.drawings.syncAll||jt.value);let Xs=!1;const ks=$({get(){return Va.value},set(e){Va.value=e,e==="arrow"?(Cn.mode="line",Cn.arrowEnd=!0):(Cn.mode=e,Cn.arrowEnd=!1)}}),b0=Ae({brush:Cn,acceptsInputTypes:$(()=>Ht.value?void 0:["pen"]),coordinateTransform:!1}),ot=Kr(g0(b0));function x0(){ot.clear(),Ju.value&&$u(Be.value,"")}function Gu(){var e;_0.value=ot.canRedo(),v0.value=ot.canUndo(),y0.value=!!((e=ot.el)!=null&&e.children.length)}function w0(e){Xs=!0;const t=Ar[e||Be.value];t!=null?ot.load(t):ot.clear(),Xs=!1}ot.on("changed",()=>{if(Gu(),!Xs){const e=ot.dump(),t=Be.value;(Ar[t]||"")!==e&&Ju.value&&$u(t,ot.dump())}});cm(e=>{Xs=!0,e[Be.value]!=null&&ot.load(e[Be.value]||""),Xs=!1,Gu()});Ke(()=>{le(Be,()=>{!ot.mounted||w0()},{immediate:!0})});ot.on("start",()=>qs.value=!0);ot.on("end",()=>qs.value=!1);window.addEventListener("keydown",e=>{if(!Ht.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ot.redo():ot.undo():e.code==="Escape"?Ht.value=!1:e.code==="KeyL"&&t?ks.value="line":e.code==="KeyA"&&t?ks.value="arrow":e.code==="KeyS"&&t?ks.value="stylus":e.code==="KeyR"&&t?ks.value="rectangle":e.code==="KeyE"&&t?ks.value="ellipse":e.code==="KeyC"&&t?x0():e.code.startsWith("Digit")&&t&&+e.code[5]<=ui.length?Cn.color=ui[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const Ha=lg(),ko=Ft("slidev-color-schema","auto"),fi=$(()=>_e.colorSchema!=="auto"),Ui=$({get(){return fi.value?_e.colorSchema==="dark":ko.value==="auto"?Ha.value:ko.value==="dark"},set(e){fi.value||(ko.value=e===Ha.value?"auto":e?"dark":"light")}}),Qu=Cu(Ui);ut&&le(Ui,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function k0(){return[]}const wr=B(1),kr=$(()=>De.length-1),yt=B(0),qi=B(0);function E0(){yt.value>wr.value&&(yt.value-=1)}function S0(){yt.value<kr.value&&(yt.value+=1)}function P0(){if(yt.value>wr.value){let e=yt.value-qi.value;e<wr.value&&(e=wr.value),yt.value=e}}function $0(){if(yt.value<kr.value){let e=yt.value+qi.value;e>kr.value&&(e=kr.value),yt.value=e}}const ef=Fe(pt(Nv),pt(Fv),Rv);function O0(e,t,n=!1){typeof e=="string"&&(e=Wu[e]);const s=Fe(e,ef);let r=0,o;const i=()=>{if(clearTimeout(o),!s.value){r=0;return}n&&(o=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return le(s,i,{flush:"sync"})}function M0(e,t){return qm(e,n=>{!ef.value||n.repeat||t()})}function C0(){const e=k0(),{escape:t,space:n,shift:s,left:r,right:o,up:i,down:l,enter:a,d:c,g:u,o:d}=Wu;new Map([{key:Fe(n,pt(s)),fn:hn,autoRepeat:!0},{key:Fe(n,s),fn:mn,autoRepeat:!0},{key:Fe(o,pt(s),pt(st)),fn:hn,autoRepeat:!0},{key:Fe(r,pt(s),pt(st)),fn:mn,autoRepeat:!0},{key:"pageDown",fn:hn,autoRepeat:!0},{key:"pageUp",fn:mn,autoRepeat:!0},{key:Fe(i,pt(st)),fn:()=>Gs(!1),autoRepeat:!0},{key:Fe(l,pt(st)),fn:Js,autoRepeat:!0},{key:Fe(r,s),fn:()=>Gs(!1),autoRepeat:!0},{key:Fe(o,s),fn:Js,autoRepeat:!0},{key:Fe(c,pt(Ht)),fn:Qu},{key:Fe(d,pt(Ht)),fn:Uu},{key:Fe(t,pt(Ht)),fn:()=>st.value=!1},{key:Fe(u,pt(Ht)),fn:()=>Jn.value=!Jn.value},{key:Fe(r,st),fn:E0},{key:Fe(o,st),fn:S0},{key:Fe(i,st),fn:P0},{key:Fe(l,st),fn:$0},{key:Fe(a,st),fn:()=>{as(yt.value),st.value=!1}},...e].map(p=>[p.key,p])).forEach(p=>{p.fn&&O0(p.key,p.fn,p.autoRepeat)}),M0("f",()=>Ku.toggle())}const A0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I0=g("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),T0=[I0];function R0(e,t){return E(),F("svg",A0,T0)}var L0={name:"carbon-close",render:R0};function Xi(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const tf=ue({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;W(ee);const n=B(),s=yg(n),r=$(()=>t.width?t.width:s.width.value),o=$(()=>t.width?t.width/dn:s.height.value);t.width&&tr(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const i=$(()=>r.value/o.value),l=$(()=>t.scale?t.scale:i.value<dn?r.value/Rn:o.value*dn/Rn),a=$(()=>({height:`${Eu}px`,width:`${Rn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),c=$(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return gt(ku,l),(u,d)=>(E(),F("div",{id:"slide-container",ref_key:"root",ref:n,class:Te(_(c))},[g("div",{id:"slide-content",style:Ue(_(a))},[Jt(u.$slots,"default")],4),Jt(u.$slots,"controls")],2))}});var Zi=ue({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Vt(e,"clicks",t),s=Vt(e,"clicksElements",t),r=Vt(e,"clicksDisabled",t),o=Vt(e,"clicksOrderMap",t);s.value.length=0,gt(Xh,e.route),gt(Zh,e.context),gt(As,n),gt(Is,r),gt(Pn,s),gt(Go,o)},render(){var e,t;return this.$props.is?_t(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const N0=["innerHTML"],nf=ue({__name:"DrawingPreview",props:{page:null},setup(e){return W(ee),(t,n)=>_(Ar)[e.page]?(E(),F("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:_(Ar)[e.page]},null,8,N0)):J("v-if",!0)}});var F0=Object.freeze(Object.defineProperty({__proto__:null,default:nf},Symbol.toStringTag,{value:"Module"}));const D0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},B0=["onClick"],z0=ue({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;W(ee);const s=Vt(n,"modelValue",t);function r(){s.value=!1}function o(p){as(p),r()}function i(p){return p===yt.value}const l=ii.smaller("xs"),a=ii.smaller("sm"),c=4*16*2,u=2*16,d=$(()=>l.value?Ln.width.value-c:a.value?(Ln.width.value-c-u)/2:300),f=$(()=>Math.floor((Ln.width.value-c)/(d.value+u)));return tr(()=>{yt.value=Be.value,qi.value=f.value}),(p,h)=>{const y=L0;return E(),F(we,null,[Ze(g("div",D0,[g("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ue(`grid-template-columns: repeat(auto-fit,minmax(${_(d)}px,1fr))`)},[(E(!0),F(we,null,nr(_(De).slice(0,-1),(b,S)=>(E(),F("div",{key:b.path,class:"relative"},[g("div",{class:Te(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(S+1)}]),onClick:w=>o(+b.path)},[(E(),G(tf,{key:b.path,width:_(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:ve(()=>[K(_(Zi),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Te(_(Xi)(b)),route:b,context:"overview"},null,8,["is","class","route"]),K(nf,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,B0),g("div",{class:"absolute top-0 opacity-50",style:Ue(`left: ${_(d)+5}px`)},gn(S+1),5)]))),128))],4)],512),[[bu,_(s)]]),_(s)?(E(),F("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[K(y)])):J("v-if",!0)],64)}}});var j0="/assets/logo.b72bde5d.png";const V0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},H0=ue({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;W(ee);const s=Vt(n,"modelValue",t);function r(){s.value=!1}return(o,i)=>(E(),G(eu,null,[_(s)?(E(),F("div",V0,[g("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>r())}),g("div",{class:Te(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Jt(o.$slots,"default")],2)])):J("v-if",!0)],1024))}});const Y0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},W0=["innerHTML"],K0=g("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[g("div",{class:"flex gap-1 children:my-auto"},[g("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),g("img",{class:"w-5 h-5",src:j0,alt:"Slidev"}),g("div",{style:{color:"#2082A6"}},[g("b",null,"Sli"),Ie("dev ")])])],-1),U0=ue({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;W(ee);const s=Vt(n,"modelValue",t),r=$(()=>typeof _e.info=="string");return(o,i)=>(E(),G(H0,{modelValue:_(s),"onUpdate:modelValue":i[0]||(i[0]=l=>xe(s)?s.value=l:null),class:"px-6 py-4"},{default:ve(()=>[g("div",Y0,[_(r)?(E(),F("div",{key:0,class:"mb-4",innerHTML:_(_e).info},null,8,W0)):J("v-if",!0),K0])]),_:1},8,["modelValue"]))}}),q0=["disabled","onKeydown"],X0=ue({__name:"Goto",setup(e){W(ee);const t=B(),n=B(""),s=$(()=>{if(n.value.startsWith("/"))return!!De.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=wf.value}});function r(){s.value&&(n.value.startsWith("/")?as(n.value.substring(1)):as(+n.value)),o()}function o(){Jn.value=!1}return le(Jn,async i=>{var l,a;i?(await Ke(),n.value="",(l=t.value)==null||l.focus()):(a=t.value)==null||a.blur()}),le(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,l)=>(E(),F("div",{id:"slidev-goto-dialog",class:Te(["fixed right-5 bg-main transform transition-all",_(Jn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ze(g("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),type:"text",disabled:!_(Jn),class:Te(["outline-none bg-transparent",{"text-red-400":!_(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Xl(r,["enter"]),Xl(o,["escape"])],onBlur:o},null,42,q0),[[Mh,n.value]])],2))}}),Z0=ue({__name:"Controls",setup(e){W(ee);const t=Lt(),n=Lt();return(s,r)=>(E(),F(we,null,[K(z0,{modelValue:_(st),"onUpdate:modelValue":r[0]||(r[0]=o=>xe(st)?st.value=o:null)},null,8,["modelValue"]),K(X0),_(t)?(E(),G(_(t),{key:0})):J("v-if",!0),_(n)?(E(),G(_(n),{key:1,modelValue:_(xo),"onUpdate:modelValue":r[1]||(r[1]=o=>xe(xo)?xo.value=o:null)},null,8,["modelValue"])):J("v-if",!0),_(_e).info?(E(),G(U0,{key:2,modelValue:_(Ls),"onUpdate:modelValue":r[2]||(r[2]=o=>xe(Ls)?Ls.value=o:null)},null,8,["modelValue"])):J("v-if",!0)],64))}}),J0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G0=g("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Q0=[G0];function e1(e,t){return E(),F("svg",J0,Q0)}var t1={name:"carbon-settings-adjust",render:e1};const n1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s1=g("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),r1=g("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),o1=[s1,r1];function i1(e,t){return E(),F("svg",n1,o1)}var l1={name:"carbon-information",render:i1};const a1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c1=g("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),u1=[c1];function f1(e,t){return E(),F("svg",a1,u1)}var d1={name:"carbon-download",render:f1};const p1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h1=g("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),m1=g("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),g1=[h1,m1];function v1(e,t){return E(),F("svg",p1,g1)}var _1={name:"carbon-user-speaker",render:v1};const y1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b1=g("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),x1=g("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),w1=[b1,x1];function k1(e,t){return E(),F("svg",y1,w1)}var E1={name:"carbon-presentation-file",render:k1};const S1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P1=g("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),$1=[P1];function O1(e,t){return E(),F("svg",S1,$1)}var M1={name:"carbon-pen",render:O1};const C1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A1=g("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),I1=g("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),T1=[A1,I1];function R1(e,t){return E(),F("svg",C1,T1)}var L1={name:"ph-cursor-duotone",render:R1};const N1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},F1=g("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),D1=[F1];function B1(e,t){return E(),F("svg",N1,D1)}var sf={name:"ph-cursor-fill",render:B1};const z1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j1=g("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),V1=[j1];function H1(e,t){return E(),F("svg",z1,V1)}var Y1={name:"carbon-sun",render:H1};const W1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K1=g("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),U1=[K1];function q1(e,t){return E(),F("svg",W1,U1)}var X1={name:"carbon-moon",render:q1};const Z1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J1=g("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),G1=[J1];function Q1(e,t){return E(),F("svg",Z1,G1)}var e_={name:"carbon-apps",render:Q1};const t_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n_=g("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),s_=[n_];function r_(e,t){return E(),F("svg",t_,s_)}var o_={name:"carbon-arrow-right",render:r_};const i_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=g("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),a_=[l_];function c_(e,t){return E(),F("svg",i_,a_)}var u_={name:"carbon-arrow-left",render:c_};const f_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d_=g("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),p_=[d_];function h_(e,t){return E(),F("svg",f_,p_)}var m_={name:"carbon-maximize",render:h_};const g_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v_=g("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),__=[v_];function y_(e,t){return E(),F("svg",g_,__)}var b_={name:"carbon-minimize",render:y_};const x_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w_=g("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),k_=[w_];function E_(e,t){return E(),F("svg",x_,k_)}var S_={name:"carbon-checkmark",render:E_};var Ve=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const P_={class:"select-list"},$_={class:"title"},O_={class:"items"},M_=["onClick"],C_=ue({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;W(ee);const s=Vt(n,"modelValue",t,{passive:!0});return(r,o)=>{const i=S_;return E(),F("div",P_,[g("div",$_,gn(e.title),1),g("div",O_,[(E(!0),F(we,null,nr(e.items,l=>(E(),F("div",{key:l.value,class:Te(["item",{active:_(s)===l.value}]),onClick:()=>{var a;s.value=l.value,(a=l.onClick)==null||a.call(l)}},[K(i,{class:Te(["text-green-500",{"opacity-0":_(s)!==l.value}])},null,8,["class"]),Ie(" "+gn(l.display||l.value),1)],10,M_))),128))])])}}});var A_=Ve(C_,[["__scopeId","data-v-427604ef"]]);const I_={class:"text-sm"},T_=ue({__name:"Settings",setup(e){W(ee);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(E(),F("div",I_,[K(A_,{modelValue:_(xr),"onUpdate:modelValue":s[0]||(s[0]=r=>xe(xr)?xr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),R_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},L_=ue({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;W(ee);const s=Vt(n,"modelValue",t,{passive:!0}),r=B();return Km(r,()=>{s.value=!1}),(o,i)=>(E(),F("div",{ref_key:"el",ref:r,class:"flex relative"},[g("button",{class:Te({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>s.value=!_(s))},[Jt(o.$slots,"button",{class:Te({disabled:e.disabled})})],2),(E(),G(eu,null,[_(s)?(E(),F("div",R_,[Jt(o.$slots,"menu")])):J("v-if",!0)],1024))],512))}}),N_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},mr={__name:"VerticalDivider",setup(e){return W(ee),(t,n)=>(E(),F("div",N_))}};var F_={render(){return[]}};const D_={class:"icon-btn"},B_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},z_={class:"my-auto"},j_={class:"opacity-50"},V_=ue({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;W(ee);const n=ii.smaller("md"),{isFullscreen:s,toggle:r}=Ku,o=$(()=>pi.value?`?password=${pi.value}`:""),i=$(()=>`/presenter/${Be.value}${o.value}`),l=$(()=>`/${Be.value}${o.value}`),a=B(),c=()=>{a.value&&ss.value&&a.value.contains(ss.value)&&ss.value.blur()},u=$(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Lt(),f=Lt();return ds(()=>import("./DrawingControls.c709840e.js"),[]).then(p=>f.value=p.default),(p,h)=>{const y=b_,b=m_,S=u_,w=o_,k=e_,P=X1,R=Y1,C=sf,j=L1,se=M1,ae=E1,fe=Vo("RouterLink"),he=_1,Ce=d1,Ne=l1,qe=t1;return E(),F("nav",{ref_key:"root",ref:a,class:"flex flex-col"},[g("div",{class:Te(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",_(u)]),onMouseleave:c},[_(Kt)?J("v-if",!0):(E(),F("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...ke)=>_(r)&&_(r)(...ke))},[_(s)?(E(),G(y,{key:0})):(E(),G(b,{key:1}))])),g("button",{class:Te(["icon-btn",{disabled:!_(f2)}]),onClick:h[1]||(h[1]=(...ke)=>_(mn)&&_(mn)(...ke))},[K(S)],2),g("button",{class:Te(["icon-btn",{disabled:!_(u2)}]),title:"Next",onClick:h[2]||(h[2]=(...ke)=>_(hn)&&_(hn)(...ke))},[K(w)],2),_(Kt)?J("v-if",!0):(E(),F("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=ke=>_(Uu)())},[K(k)])),_(fi)?J("v-if",!0):(E(),F("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=ke=>_(Qu)())},[_(Ui)?(E(),G(P,{key:0})):(E(),G(R,{key:1}))])),K(mr),_(Kt)?J("v-if",!0):(E(),F(we,{key:3},[!_(jt)&&!_(n)&&_(d)?(E(),F(we,{key:0},[K(_(d)),K(mr)],64)):J("v-if",!0),_(jt)?(E(),F("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=ke=>wo.value=!_(wo))},[_(wo)?(E(),G(C,{key:0})):(E(),G(j,{key:1,class:"opacity-50"}))])):J("v-if",!0)],64)),!_(_e).drawings.presenterOnly&&!_(Kt)?(E(),F(we,{key:4},[g("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=ke=>Ht.value=!_(Ht))},[K(se),_(Ht)?(E(),F("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ue({background:_(Cn).color})},null,4)):J("v-if",!0)]),K(mr)],64)):J("v-if",!0),_(Kt)?J("v-if",!0):(E(),F(we,{key:5},[_(jt)?(E(),G(fe,{key:0,to:_(l),class:"icon-btn",title:"Play Mode"},{default:ve(()=>[K(ae)]),_:1},8,["to"])):J("v-if",!0),_(l2)?(E(),G(fe,{key:1,to:_(i),class:"icon-btn",title:"Presenter Mode"},{default:ve(()=>[K(he)]),_:1},8,["to"])):J("v-if",!0),J("v-if",!0)],64)),(E(),F(we,{key:6},[_(_e).download?(E(),F("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...ke)=>_(hi)&&_(hi)(...ke))},[K(Ce)])):J("v-if",!0)],64)),!_(jt)&&_(_e).info&&!_(Kt)?(E(),F("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=ke=>Ls.value=!_(Ls))},[K(Ne)])):J("v-if",!0),!_(jt)&&!_(Kt)?(E(),G(L_,{key:8},{button:ve(()=>[g("button",D_,[K(qe)])]),menu:ve(()=>[K(T_)]),_:1})):J("v-if",!0),_(Kt)?J("v-if",!0):(E(),G(mr,{key:9})),g("div",B_,[g("div",z_,[Ie(gn(_(Be))+" ",1),g("span",j_,"/ "+gn(_(wf)),1)])]),K(_(F_))],34)],512)}}});var rf={render(){return[]}},of={render(){return[]}};const H_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Y_=ue({__name:"PresenterMouse",setup(e){return W(ee),(t,n)=>{const s=sf;return _(vo).cursor?(E(),F("div",H_,[K(s,{class:"absolute",style:Ue({left:`${_(vo).cursor.x}%`,top:`${_(vo).cursor.y}%`})},null,8,["style"])])):J("v-if",!0)}}}),W_=ue({__name:"SlidesShow",props:{context:null},setup(e){W(ee),le(mt,()=>{var n,s;((n=mt.value)==null?void 0:n.meta)&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),((s=Eo.value)==null?void 0:s.meta)&&Eo.value.meta.preload!==!1&&(Eo.value.meta.__preloaded=!0)},{immediate:!0});const t=Lt();return ds(()=>import("./DrawingLayer.e40ebf7d.js"),[]).then(n=>t.value=n.default),(n,s)=>(E(),F(we,null,[J(" Global Bottom "),K(_(of)),J(" Slides "),(E(!0),F(we,null,nr(_(De),r=>{var o,i;return E(),F(we,{key:r.path},[((o=r.meta)==null?void 0:o.__preloaded)||r===_(mt)?Ze((E(),G(_(Zi),{key:0,is:r==null?void 0:r.component,clicks:r===_(mt)?_(Rt):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Te(_(Xi)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[bu,r===_(mt)]]):J("v-if",!0)],64)}),128)),J(" Global Top "),K(_(rf)),_(t)?(E(),G(_(t),{key:0})):J("v-if",!0),_(jt)?J("v-if",!0):(E(),G(Y_,{key:1}))],64))}}),K_=ue({__name:"Play",setup(e){W(ee),C0();const t=B();function n(o){var i;Ia.value||((i=o.target)==null?void 0:i.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?hn():mn())}h2(t);const s=$(()=>Lv.value||Ia.value);Lt();const r=Lt();return ds(()=>import("./DrawingControls.c709840e.js"),[]).then(o=>r.value=o.default),(o,i)=>(E(),F(we,null,[g("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ue(_(Su))},[K(tf,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:_(nl)?_(Ln).width.value:void 0,scale:_(xr),onPointerdown:n},{default:ve(()=>[K(W_,{context:"slide"})]),controls:ve(()=>[g("div",{class:Te(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[_(s)?"opacity-100 right-0":"opacity-0 p-2",_(qs)?"pointer-events-none":""]])},[K(V_,{class:"m-auto",persist:_(s)},null,8,["persist"])],2),!_(_e).drawings.presenterOnly&&!_(Kt)&&_(r)?(E(),G(_(r),{key:0,class:"ml-0"})):J("v-if",!0)]),_:1},8,["style","width","scale"]),J("v-if",!0)],4),K(Z0)],64))}});function lf(e){const t=$(()=>e.value.path),n=$(()=>De.length-1),s=$(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=$(()=>ro(s.value)),o=$(()=>De.find(f=>f.path===`${s.value}`)),i=$(()=>{var f,p,h;return(h=(p=(f=o.value)==null?void 0:f.meta)==null?void 0:p.slide)==null?void 0:h.id}),l=$(()=>{var f,p;return(p=(f=o.value)==null?void 0:f.meta)==null?void 0:p.layout}),a=$(()=>De.find(f=>f.path===`${Math.min(De.length,s.value+1)}`)),c=$(()=>De.filter(f=>{var p,h;return(h=(p=f.meta)==null?void 0:p.slide)==null?void 0:h.title}).reduce((f,p)=>(sl(f,p),f),[])),u=$(()=>rl(c.value,o.value)),d=$(()=>ol(u.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:o,currentSlideId:i,currentLayout:l,nextRoute:a,rawTree:c,treeWithActiveStatuses:u,tree:d}}function af(e,t,n){const s=B(0);Ke(()=>{bt.afterEach(async()=>{await Ke(),s.value+=1})});const r=$(()=>{var a,c;return s.value,((c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.__clicksElements)||[]}),o=$(()=>{var a,c,u;return+((u=(c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.clicks)!=null?u:r.value.length)}),i=$(()=>n.value<De.length-1||e.value<o.value),l=$(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:i,hasPrev:l}}const U_=["id"],Ya=ue({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Vt(n,"clicksElements",t),r=$(()=>({height:`${Eu}px`,width:`${Rn}px`})),o=Lt();ds(()=>Promise.resolve().then(function(){return F0}),void 0).then(c=>o.value=c.default);const i=$(()=>n.clicks),l=af(i,n.nav.currentRoute,n.nav.currentPage),a=$(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return gt(ee,Ae({nav:{...n.nav,...l},configs:_e,themeConfigs:$(()=>_e.themeConfig)})),(c,u)=>{var d;return E(),F("div",{id:_(a),class:"slide-container",style:Ue(_(r))},[K(_(of)),K(_(Zi),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":_(s),"onUpdate:clicks-elements":u[0]||(u[0]=f=>xe(s)?s.value=f:null),clicks:_(i),"clicks-disabled":!1,class:Te(_(Xi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),_(o)?(E(),G(_(o),{key:0,page:+e.route.path},null,8,["page"])):J("v-if",!0),K(_(rf))],12,U_)}}}),q_=ue({__name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;W(ee);const n=Ae(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=$(()=>t.route),r=lf(s);return(i,l)=>(E(),F(we,null,[K(Ya,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=a=>xe(n)?n.value=a:null),clicks:0,nav:_(r),route:_(s)},null,8,["clicks-elements","nav","route"]),_(Ns)?J("v-if",!0):(E(!0),F(we,{key:0},nr(n.length,a=>(E(),G(Ya,{key:a,clicks:a,nav:_(r),route:_(s)},null,8,["clicks","nav","route"]))),128))],64))}});const X_={id:"print-content"},Z_=ue({__name:"PrintContainer",props:{width:null},setup(e){const t=e;W(ee);const n=$(()=>t.width),s=$(()=>t.width/dn),r=$(()=>n.value/s.value),o=$(()=>r.value<dn?n.value/Rn:s.value*dn/Rn),i=De.slice(0,-1),l=$(()=>({"select-none":!_e.selectable,"slidev-code-line-numbers":_e.lineNumbers}));return gt(ku,o),(a,c)=>(E(),F("div",{id:"print-container",class:Te(_(l))},[g("div",X_,[(E(!0),F(we,null,nr(_(i),u=>(E(),G(q_,{key:u.path,route:u},null,8,["route"]))),128))]),Jt(a.$slots,"controls")],2))}});const J_=ue({__name:"Print",setup(e){W(ee);const t=Mn.canvasWidth,n=Math.round(t/Mn.aspectRatio)+1;function s(r,{slots:o}){if(o.default)return _t("style",o.default())}return tr(()=>{nl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,o)=>(E(),F(we,null,[K(s,null,{default:ve(()=>[Ie(" @page { size: "+gn(_(t))+"px "+gn(n)+"px; margin: 0px; } ",1)]),_:1}),g("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ue(_(Su))},[K(Z_,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:_(Ln).width.value},null,8,["style","width"])],4)],64))}});const G_={class:"slidev-layout end"},Q_={__name:"end",setup(e){return W(ee),(t,n)=>(E(),F("div",G_," END "))}};var ey=Ve(Q_,[["__scopeId","data-v-024c70b4"]]);function Wa(e){return e.startsWith("/")?"/"+e.slice(1):e}function ty(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Wa(e)})`:`url("${Wa(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const ny={class:"my-auto w-full"},sy=ue({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;W(ee);const n=$(()=>ty(t.background,!0));return(s,r)=>(E(),F("div",{class:"slidev-layout cover text-center",style:Ue(_(n))},[g("div",ny,[Jt(s.$slots,"default")])],4))}}),ry=g("h1",null,"\u804C\u7EA7\u8003\u6838\u6C47\u62A5",-1),oy=g("h4",null,"\u8FF0\u804C\u4EBA\uFF1A\u9648\u9E3F\u5EB7",-1),iy=g("div",{class:"pt-12"},[g("span",null," \u57CE\u5E02\u5927\u8111 \u7814\u53D1\u4E00\u7EC4 2022.8.8 ")],-1),ly={__name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"};return W(ee),(n,s)=>(E(),G(sy,je(Le(t)),{default:ve(()=>[ry,oy,iy]),_:1},16))}},ay={class:"slidev-layout default"},Ye={__name:"default",setup(e){return W(ee),(t,n)=>(E(),F("div",ay,[Jt(t.$slots,"default")]))}};const cf=e=>(Qe("data-v-3e068267"),e=e(),et(),e),cy=cf(()=>g("div",{class:"logo",id:"logo2"},null,-1)),uy=cf(()=>g("div",{class:"logo-title"},"\u6570\u636E\u6982\u51B5",-1)),fy=ue({__name:"2",setup(e){const t={preload:!1};W(ee);function n(){s(),l<f?(a+=u/i,d+=c/i,l+=d/i):(l-=d/i,d=-.5*d),Math.abs(d)<.1&&l>f-1&&window.clearInterval(p)}function s(){!o||(o.style.left=a+"px",o.style.top=l+"px")}function r(){o=document.getElementById("logo2"),p=window.setInterval(n,1e3/(i*5))}let o=document.getElementById("logo2");const i=60;let l=0,a=-80,c=9.8,u=20,d=0,f=250,p;return(h,y)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[g("div",{class:"mask",onClick:r}),cy,uy]),_:1},16))}});var dy=Ve(fy,[["__scopeId","data-v-3e068267"]]),py="/assets/outdate.fbffb17e.png";const Ji=e=>(Qe("data-v-f1a5d2ee"),e=e(),et(),e),hy=Ji(()=>g("h1",null,"\u5DE5\u4F5C\u6570\u636E\u4E00\u89C8",-1)),my=Ji(()=>g("p",null,[Ie("2021.7.1 - 2022.7.1 "),g("br")],-1)),gy=Ji(()=>g("ul",null,[g("li",null,[Ie("\u{1F4DD} "),g("strong",null,"\u6848\u5377\u6570"),Ie(" - 138\u4E2A\u5B8C\u6210\u6848\u5377")]),g("li",null,[Ie("\u{1F4E4} "),g("strong",null,"\u8D85\u671F\u7387"),Ie(" - 11\u4E2A\u8D85\u671F\u6848\u5377\uFF0C\u8D85\u671F\u73877.9%")]),g("li",null,[Ie("\u{1F6E0} "),g("strong",null,"bug\u6570"),Ie(" - \u65E0bug\u6848\u5377\uFF0Cbug\u73870")]),g("li",null,[Ie("\u{1F939} "),g("strong",null,"\u597D\u8BC4\u7387"),Ie(" - \u597D\u8BC4\u657068\uFF0C\u4E2D\u5DEE\u8BC40")])],-1)),vy={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 outdate",src:py},_y={__name:"3",setup(e){const t={};return W(ee),(n,s)=>{const r=St("click"),o=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[hy,my,gy,g("p",null,[Ze(g("img",vy,null,512),[[r],[o]])])]),_:1},16)}}};var yy=Ve(_y,[["__scopeId","data-v-f1a5d2ee"]]);const uf=e=>(Qe("data-v-c6297fc6"),e=e(),et(),e),by=uf(()=>g("div",{class:"logo",id:"logo2"},null,-1)),xy=uf(()=>g("div",{class:"logo-title"},"\u5DE5\u4F5C\u6982\u51B5",-1)),wy=ue({__name:"4",setup(e){const t={preload:!1};W(ee);function n(){s(),l<f?(a+=u/i,d+=c/i,l+=d/i):(l-=d/i,d=-.5*d),Math.abs(d)<.1&&l>f-1&&window.clearInterval(p)}function s(){!o||(o.style.left=a+"px",o.style.top=l+"px")}function r(){o=document.getElementById("logo2"),p=window.setInterval(n,1e3/(i*5))}let o=document.getElementById("logo2");const i=60;let l=0,a=-80,c=9.8,u=20,d=0,f=250,p;return(h,y)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[g("div",{class:"mask",onClick:r}),by,xy]),_:1},16))}});var ky=Ve(wy,[["__scopeId","data-v-c6297fc6"]]);const Ey=g("h1",null,"\u5DE5\u4F5C\u6982\u51B5",-1),Sy=g("table",null,[g("thead",null,[g("tr",null,[g("th"),g("th")])]),g("tbody",null,[g("tr",null,[g("td",null,"\u57CE\u8FD0\u5927\u5C4F"),g("td",null,"\u53C2\u4E0E\u652F\u6301\u804A\u57CE\uFF0C\u5F20\u5E97\uFF0C\u6D4E\u5357\uFF0C\u5BBF\u5DDE\uFF0C\u798F\u5C71\u7B4920\u6765\u4E2A\u9879\u76EE\u3002\u719F\u6089\u57CE\u8FD0\u9879\u76EE\u524D\u7AEF\u6D4B\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B")]),g("tr",null,[g("td",null,"\u609F\u7A7A\u5C01\u95ED\u5F00\u53D1"),g("td",null,"\u5B8C\u6210\u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762\u5C01\u88C5\uFF0C\u609F\u7A7A\u7EC4\u4EF6\u4E8C\u6B21\u5F00\u53D1\u903B\u8F91")]),g("tr",null,[g("td",null,"\u609F\u7A7A\u652F\u6301"),g("td",null,"\u652F\u6301\u6C82\u6E90\uFF0C\u5510\u5C71\uFF0C\u9752\u6D66\uFF0C\u4EA6\u5E84\uFF0C\u4FE1\u5DDE\uFF0C\u576A\u5C71\u7B49\u591A\u4E2A\u9879\u76EE\uFF0C\u719F\u6089\u638C\u63E1\u609F\u7A7A\u5E38\u7528\u914D\u7F6E\u548Chook\u7F16\u5199")]),g("tr",null,[g("td",null,"\u609F\u7A7A\u7EC4\u4EF6\u5F00\u53D1"),g("td",null,"\u5B8C\u62101\u4E2A\u609F\u7A7A\u6807\u51C6\u7EC4\u4EF6\uFF0C4\u4E2A\u5B9A\u5236\u5F00\u53D1\u7EC4\u4EF6\uFF0C2\u4E2A\u4E8C\u6B21\u5F00\u53D1\u7EC4\u4EF6")])])],-1),Py={__name:"5",setup(e){const t={};return W(ee),(n,s)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[Ey,Sy]),_:1},16))}};const ff=e=>(Qe("data-v-c6febfb4"),e=e(),et(),e),$y=ff(()=>g("div",{class:"animate-cy"},"\u57CE\u8FD0\u5927\u5C4F",-1)),Oy=ff(()=>g("ul",{class:"content"},[g("li",{class:"item"},[g("a",{href:"https://p97ydvk8sr.feishu.cn/drive/folder/fldcnKHYGmKyzIV6pYAMbRHsepg?from=space_persnoal_filelist",target:"_blank"},"\u7EC4\u4EF6\u5F00\u53D1")]),g("li",{class:"item"},[g("a",{href:"#"},"\u9879\u76EE\u903B\u8F91")]),g("li",{class:"item"},[g("a",{href:"#"},"\u4E13\u9879\u529F\u80FD")]),g("li",{class:"item"},[g("a",{href:"#"},"\u6307\u4EE4\u5C01\u88C5")]),g("li",{class:"item"},[g("a",{href:"https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist",target:"_blank"},"\u6027\u80FD\u4F18\u5316")]),g("li",{class:"item"},[g("a",{href:"https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist",target:"_blank"},"\u6253\u5305\u6784\u5EFA")]),g("li",{class:"item"},[g("a",{href:"#"},"\u4EE3\u7801\u5BA1\u6838")])],-1)),My={__name:"6",setup(e){const t={};return W(ee),(n,s)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[$y,Oy]),_:1},16))}};var Cy=Ve(My,[["__scopeId","data-v-c6febfb4"]]),Ay="/assets/page5_4.2da04bb3.png",Iy="/assets/page5_1.61b59076.png",Ty="/assets/page5_5.0dcdc452.png",Ry="/assets/page5_2.bc6ee551.png",Ly="/assets/page5_3.9bef9962.png",Ny="/assets/page5_6.ad07262e.png";const en=e=>(Qe("data-v-5d2432f1"),e=e(),et(),e),Fy=en(()=>g("h1",null,"\u7EC4\u4EF6\u5F00\u53D1",-1)),Dy=en(()=>g("p",null,"\u5305\u62EC\u65E5\u5E38\u9875\u9762\uFF0C\u5F39\u7A97\u548C\u5176\u4ED6\u7279\u6B8A\u9700\u6C42\u6240\u5F00\u53D1\u7684\u6570\u636E\u5C55\u793A\u7EC4\u4EF6",-1)),By=en(()=>g("div",null,[g("img",{src:Ay})],-1)),zy=en(()=>g("div",null,[g("img",{src:Iy})],-1)),jy=en(()=>g("div",null,[g("img",{src:Ty})],-1)),Vy=en(()=>g("div",null,[g("img",{src:Ry})],-1)),Hy=en(()=>g("div",null,[g("img",{src:Ly})],-1)),Yy=en(()=>g("div",null,[g("img",{src:Ny})],-1)),Wy=en(()=>g("div",{id:"tips",class:"tips"},null,-1)),Ky={__name:"7",setup(e){const t={};return W(ee),(n,s)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[Fy,Dy,By,zy,jy,Vy,Hy,Yy,Wy]),_:1},16))}};var Uy=Ve(Ky,[["__scopeId","data-v-5d2432f1"]]),qy="/assets/page8_1.1e940dd2.png";const Xy=e=>(Qe("data-v-7c26d767"),e=e(),et(),e),Zy=Xy(()=>g("h1",null,"\u9879\u76EE\u903B\u8F91",-1)),Jy={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 logic",src:qy},Gy={__name:"8",setup(e){const t={};return W(ee),(n,s)=>{const r=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[Zy,g("p",null,[Ze(g("img",Jy,null,512),[[r]])])]),_:1},16)}}};var Qy=Ve(Gy,[["__scopeId","data-v-7c26d767"]]);const sr=e=>(Qe("data-v-2f3d1273"),e=e(),et(),e),eb=sr(()=>g("h1",null,"\u6027\u80FD\u4F18\u5316",-1)),tb={class:"methods"},nb={key:0},sb={key:1},rb={key:2},ob={key:3,href:"https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist"},ib=sr(()=>g("p",null,"\u9875\u9762\u52A0\u8F7D\u6162\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01",-1)),lb=sr(()=>g("p",null,"\u7528\u7740\u7528\u7740\u5C31\u5D29\u4E86\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01",-1)),ab=sr(()=>g("p",null,"\u6570\u636E\u51FA\u4E0D\u6765\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01",-1)),cb=sr(()=>g("p",null,"XX\u529F\u80FD\u597D\u5361\u554A\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01",-1)),ub=[ib,lb,ab,cb],fb={key:0,class:"bg bg4"},db={key:1,class:"bg bg3"},pb={key:2,class:"bg bg2"},hb={key:3,class:"bg bg1"},mb={__name:"9",setup(e){const t={preload:!1},n=W(ee);return(s,r)=>{const o=St("click");return E(),G(Ye,je(Le(t)),{default:ve(()=>[eb,g("div",tb,[_(n).nav.clicks>=1?(E(),F("p",nb,"\u4E1A\u52A1\u6D41\u7A0B\u4F18\u5316")):J("v-if",!0),_(n).nav.clicks>=2?(E(),F("p",sb,"\u9879\u76EE\u67B6\u6784\u4F18\u5316")):J("v-if",!0),_(n).nav.clicks>=3?(E(),F("p",rb,"\u903B\u8F91\u5B9E\u73B0\u4F18\u5316")):J("v-if",!0),_(n).nav.clicks>=3?(E(),F("a",ob,"\u67E5\u770Bdemo")):J("v-if",!0)]),g("div",{class:Te(["tips",{opacity1:_(n).nav.clicks===1,opacity2:_(n).nav.clicks===2,opacity3:_(n).nav.clicks===3}])},ub,2),!_(n).nav.clicks&&_(n).nav.currentPage===9?(E(),F("div",fb)):J("v-if",!0),_(n).nav.clicks<2&&_(n).nav.currentPage===9?Ze((E(),F("div",db,null,512)),[[o]]):J("v-if",!0),_(n).nav.clicks<3&&_(n).nav.currentPage===9?Ze((E(),F("div",pb,null,512)),[[o]]):J("v-if",!0),_(n).nav.clicks<4&&_(n).nav.currentPage===9?Ze((E(),F("div",hb,null,512)),[[o]]):J("v-if",!0),Ze(g("div",null,null,512),[[o]])]),_:1},16)}}};var gb=Ve(mb,[["__scopeId","data-v-2f3d1273"]]);const vb={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_b=g("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),yb=[_b];function bb(e,t){return E(),F("svg",vb,yb)}var xb={name:"ph-clipboard",render:bb};const wb={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},kb=g("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Eb=[kb];function Sb(e,t){return E(),F("svg",wb,Eb)}var Pb={name:"ph-check-circle",render:Sb};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function df(e){return typeof e=="undefined"||e===null}function $b(e){return typeof e=="object"&&e!==null}function Ob(e){return Array.isArray(e)?e:df(e)?[]:[e]}function Mb(e,t){var n,s,r,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)r=o[n],e[r]=t[r];return e}function Cb(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function Ab(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ib=df,Tb=$b,Rb=Ob,Lb=Cb,Nb=Ab,Fb=Mb,Gi={isNothing:Ib,isObject:Tb,toArray:Rb,repeat:Lb,isNegativeZero:Nb,extend:Fb};function pf(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Zs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=pf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Zs.prototype=Object.create(Error.prototype);Zs.prototype.constructor=Zs;Zs.prototype.toString=function(t){return this.name+": "+pf(this,t)};var $n=Zs,Db=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Bb=["scalar","sequence","mapping"];function zb(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function jb(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Db.indexOf(n)===-1)throw new $n('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=zb(t.styleAliases||null),Bb.indexOf(this.kind)===-1)throw new $n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Je=jb;function Ka(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(o,i){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(r=i)}),n[r]=s}),n}function Vb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function di(e){return this.extend(e)}di.prototype.extend=function(t){var n=[],s=[];if(t instanceof Je)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new $n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Je))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new $n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new $n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof Je))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(di.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Ka(r,"implicit"),r.compiledExplicit=Ka(r,"explicit"),r.compiledTypeMap=Vb(r.compiledImplicit,r.compiledExplicit),r};var Hb=di,Yb=new Je("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Wb=new Je("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Kb=new Je("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Ub=new Hb({explicit:[Yb,Wb,Kb]});function qb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Xb(){return null}function Zb(e){return e===null}var Jb=new Je("tag:yaml.org,2002:null",{kind:"scalar",resolve:qb,construct:Xb,predicate:Zb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Gb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Qb(e){return e==="true"||e==="True"||e==="TRUE"}function ex(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var tx=new Je("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Gb,construct:Qb,predicate:ex,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function nx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function sx(e){return 48<=e&&e<=55}function rx(e){return 48<=e&&e<=57}function ox(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!nx(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!sx(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!rx(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function ix(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function lx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Gi.isNegativeZero(e)}var ax=new Je("tag:yaml.org,2002:int",{kind:"scalar",resolve:ox,construct:ix,predicate:lx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),cx=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ux(e){return!(e===null||!cx.test(e)||e[e.length-1]==="_")}function fx(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var dx=/^[-+]?[0-9]+e/;function px(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Gi.isNegativeZero(e))return"-0.0";return n=e.toString(10),dx.test(n)?n.replace("e",".e"):n}function hx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Gi.isNegativeZero(e))}var mx=new Je("tag:yaml.org,2002:float",{kind:"scalar",resolve:ux,construct:fx,predicate:hx,represent:px,defaultStyle:"lowercase"}),gx=Ub.extend({implicit:[Jb,tx,ax,mx]}),vx=gx,hf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function _x(e){return e===null?!1:hf.exec(e)!==null||mf.exec(e)!==null}function yx(e){var t,n,s,r,o,i,l,a=0,c=null,u,d,f;if(t=hf.exec(e),t===null&&(t=mf.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(o=+t[4],i=+t[5],l=+t[6],t[7]){for(a=t[7].slice(0,3);a.length<3;)a+="0";a=+a}return t[9]&&(u=+t[10],d=+(t[11]||0),c=(u*60+d)*6e4,t[9]==="-"&&(c=-c)),f=new Date(Date.UTC(n,s,r,o,i,l,a)),c&&f.setTime(f.getTime()-c),f}function bx(e){return e.toISOString()}var xx=new Je("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:_x,construct:yx,instanceOf:Date,represent:bx});function wx(e){return e==="<<"||e===null}var kx=new Je("tag:yaml.org,2002:merge",{kind:"scalar",resolve:wx}),Qi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ex(e){if(e===null)return!1;var t,n,s=0,r=e.length,o=Qi;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function Sx(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,o=Qi,i=0,l=[];for(t=0;t<r;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|o.indexOf(s.charAt(t));return n=r%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function Px(e){var t="",n=0,s,r,o=e.length,i=Qi;for(s=0;s<o;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=o%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function $x(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Ox=new Je("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ex,construct:Sx,predicate:$x,represent:Px}),Mx=Object.prototype.hasOwnProperty,Cx=Object.prototype.toString;function Ax(e){if(e===null)return!0;var t=[],n,s,r,o,i,l=e;for(n=0,s=l.length;n<s;n+=1){if(r=l[n],i=!1,Cx.call(r)!=="[object Object]")return!1;for(o in r)if(Mx.call(r,o))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function Ix(e){return e!==null?e:[]}var Tx=new Je("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Ax,construct:Ix}),Rx=Object.prototype.toString;function Lx(e){if(e===null)return!0;var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],Rx.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;o[t]=[r[0],s[r[0]]]}return!0}function Nx(e){if(e===null)return[];var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),o[t]=[r[0],s[r[0]]];return o}var Fx=new Je("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Lx,construct:Nx}),Dx=Object.prototype.hasOwnProperty;function Bx(e){if(e===null)return!0;var t,n=e;for(t in n)if(Dx.call(n,t)&&n[t]!==null)return!1;return!0}function zx(e){return e!==null?e:{}}var jx=new Je("tag:yaml.org,2002:set",{kind:"mapping",resolve:Bx,construct:zx});vx.extend({implicit:[xx,kx],explicit:[Ox,Tx,Fx,jx]});function Ua(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Vx=new Array(256),Hx=new Array(256);for(var Wn=0;Wn<256;Wn++)Vx[Wn]=Ua(Wn)?1:0,Hx[Wn]=Ua(Wn);function Yx(e){return Array.from(new Set(e))}function qa(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function Wx(e,t){if(!t||t==="all"||t==="*")return qa(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,o]=s.split("-",2);n.push(...qa(+r,o?+o+1:e+1))}return Yx(n).filter(s=>s<=e).sort((s,r)=>s-r)}const Kx=["title"],Ux=ue({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;W(ee);const n=W(As),s=W(Pn),r=W(Is);function o(d=5){const f=[],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=p.length;for(let y=0;y<d;y++)f.push(p.charAt(Math.floor(Math.random()*h)));return f.join("")}const i=B(),l=Bn();fs(()=>{const d=t.at==null?s==null?void 0:s.value.length:t.at,f=$(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),t.ranges.length-1)),p=$(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=o(),y=Qh(t.ranges.length-1).map(b=>h+b);s!=null&&s.value&&(s.value.push(...y),Qr(()=>y.forEach(b=>Qo(s.value,b)),l))}tr(()=>{if(!i.value)return;const y=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const b of y){const S=Array.from(b.querySelectorAll(".line")),w=Wx(S.length,p.value);if(S.forEach((k,P)=>{const R=w.includes(P+1);k.classList.toggle(En,!0),k.classList.toggle("highlighted",R),k.classList.toggle("dishonored",!R)}),t.maxHeight){const k=b.querySelector(".line.highlighted");k&&k.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:a,copy:c}=ng();function u(){var f,p;const d=(p=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:p.textContent;d&&c(d)}return(d,f)=>{const p=Pb,h=xb;return E(),F("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Ue({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Jt(d.$slots,"default"),_(_e).codeCopy?(E(),F("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:_(a)?"Copied":"Copy",onClick:f[0]||(f[0]=y=>u())},[_(a)?(E(),G(p,{key:0,class:"p-2 w-8 h-8"})):(E(),G(h,{key:1,class:"p-2 w-8 h-8"}))],8,Kx)):J("v-if",!0)],4)}}});const el=e=>(Qe("data-v-2095704a"),e=e(),et(),e),qx=el(()=>g("h1",null,"\u6307\u4EE4\u5C01\u88C5",-1)),Xx=el(()=>g("p",null,"\u7B80\u5316\u5DE5\u4F5C\u4E2D\u7684\u8017\u65F6\u5185\u5BB9\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387",-1)),Zx=el(()=>g("pre",{class:"shiki-container"},[g("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[g("code",null,[g("span",{class:"line"},[g("span",{style:{color:"#C98A7D"}},'"build-without-dll"'),g("span",{style:{color:"#DBD7CA"}},": "),g("span",{style:{color:"#C98A7D"}},'"npm i && cross-env WITHOUT_DLL=true node config/start build"'),g("span",{style:{color:"#858585"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#C98A7D"}},'"add"'),g("span",{style:{color:"#DBD7CA"}},": "),g("span",{style:{color:"#C98A7D"}},'"node config/add"'),g("span",{style:{color:"#858585"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#C98A7D"}},'"git:push"'),g("span",{style:{color:"#DBD7CA"}},": "),g("span",{style:{color:"#C98A7D"}},'"node config/push"'),g("span",{style:{color:"#858585"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#C98A7D"}},'"compress"'),g("span",{style:{color:"#DBD7CA"}},": "),g("span",{style:{color:"#C98A7D"}},'"node config/compress"'),g("span",{style:{color:"#858585"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#C98A7D"}},'"copy"'),g("span",{style:{color:"#DBD7CA"}},": "),g("span",{style:{color:"#C98A7D"}},'"node config/copy"')])])]),g("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[g("code",null,[g("span",{class:"line"},[g("span",{style:{color:"#B56959"}},'"build-without-dll"'),g("span",{style:{color:"#393A34"}},": "),g("span",{style:{color:"#B56959"}},'"npm i && cross-env WITHOUT_DLL=true node config/start build"'),g("span",{style:{color:"#8E8F8B"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#B56959"}},'"add"'),g("span",{style:{color:"#393A34"}},": "),g("span",{style:{color:"#B56959"}},'"node config/add"'),g("span",{style:{color:"#8E8F8B"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#B56959"}},'"git:push"'),g("span",{style:{color:"#393A34"}},": "),g("span",{style:{color:"#B56959"}},'"node config/push"'),g("span",{style:{color:"#8E8F8B"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#B56959"}},'"compress"'),g("span",{style:{color:"#393A34"}},": "),g("span",{style:{color:"#B56959"}},'"node config/compress"'),g("span",{style:{color:"#8E8F8B"}},",")]),Ie(`
`),g("span",{class:"line"},[g("span",{style:{color:"#B56959"}},'"copy"'),g("span",{style:{color:"#393A34"}},": "),g("span",{style:{color:"#B56959"}},'"node config/copy"')])])])],-1)),Jx={class:"methods"},Gx={key:0},Qx={key:1},ew={key:2},tw={key:3},nw={key:4},sw={__name:"10",setup(e){const t={},n=W(ee);return(s,r)=>{const o=Ux;return E(),G(Ye,je(Le(t)),{default:ve(()=>[qx,Xx,K(o,Ws({},{ranges:["all","1","2","3","4","5"]}),{default:ve(()=>[Zx]),_:1},16),J(' <arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> '),g("div",Jx,[_(n).nav.clicks===1?(E(),F("p",Gx,"\u9879\u76EE\u8131\u79BBdll\u6253\u5305\u65B9\u6848")):J("v-if",!0),_(n).nav.clicks===2?(E(),F("p",Qx,"\u4E00\u952E\u65B0\u589E\u4E13\u9898")):J("v-if",!0),_(n).nav.clicks===3?(E(),F("p",ew,"\u63D0\u4EA4\u65F6\u81EA\u52A8\u538B\u7F29\u56FE\u7247\uFF0C\u8131\u79BB\u624B\u52A8\u538B\u7F29\u7684\u82E6\u607C")):J("v-if",!0),_(n).nav.clicks===4?(E(),F("p",tw,"\u4E00\u952E\u538B\u7F29\u6574\u4E2A\u9879\u76EE\u7684\u56FE\u7247")):J("v-if",!0),_(n).nav.clicks===5?(E(),F("p",nw,"\u538B\u7F29\u56FE\u7247\u7684\u4E00\u952E\u66FF\u6362\uFF08\u7528\u4E8E\u5168\u5C40\u56FE\u7247\u68C0\u6D4B\uFF09")):J("v-if",!0)])]),_:1},16)}}};var rw=Ve(sw,[["__scopeId","data-v-2095704a"]]),ow=ue({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var o,i;const e=St("click"),t=St("after"),n=(l,a,c)=>Ze(l,[[a,this.at!=null?+this.at+c:null,"",{hide:this.hide,fade:this.fade}]]);let s=(i=(o=this.$slots).default)==null?void 0:i.call(o);if(!s)return;s=Gh(s);const r=l=>l.map((a,c)=>Nn(a)?n(_t(a),c%this.every===0?e:t,Math.floor(c/this.every)):a);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?_t(s[0],{},[r(s[0].children)]):r(s)}}),gf=ue({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return K(ow,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}});const tl=e=>(Qe("data-v-fbffe39a"),e=e(),et(),e),iw=tl(()=>g("h1",null,"\u6253\u5305\u6784\u5EFA",-1)),lw={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 package"},aw=tl(()=>g("div",null,[g("a",{href:"https://p97ydvk8sr.feishu.cn/docs/doccnv6yJOC4zRsPNZ3c3e5i5Fe"},"\u76F8\u5173\u6587\u6863")],-1)),cw=tl(()=>g("div",null,[g("a",{href:"https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist"},"\u77E5\u8BC6\u8BB0\u5F55")],-1)),uw={__name:"11",setup(e){const t={};return W(ee),(n,s)=>{const r=gf,o=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[iw,Ze(g("div",lw,null,512),[[o]]),K(r,null,{default:ve(()=>[aw,cw]),_:1})]),_:1},16)}}};var fw=Ve(uw,[["__scopeId","data-v-fbffe39a"]]),dw="/assets/page7_2.9e8a893a.png",pw="/assets/page7_3.4d7ca26b.png";const so=e=>(Qe("data-v-1a1d9b60"),e=e(),et(),e),hw=so(()=>g("h1",null,"\u4EE3\u7801\u5BA1\u6838",-1)),mw={class:"page7"},gw=so(()=>g("canvas",{id:"canvas",width:"405",height:"420"},null,-1)),vw=[gw],_w=so(()=>g("img",{src:dw},null,-1)),yw=so(()=>g("img",{src:pw},null,-1)),bw=[_w,yw],xw=ue({__name:"12",setup(e){const t={preload:!1};W(ee);function n(r,o,i){this.width=o||500,this.height=i||500,this.eyes=0,this.leftEyeX=163,this.leftEyeY=187,this.rightEyeX=273,this.rightEyeY=187,this.eRange=5,this.eMoveNum=0,this.isDizzy=0,this.switch=0,this.can=r||document.getElementById("canvas")}n.prototype.drawMouth=function(){var r=this.can.getContext("2d");r.beginPath(),r.arc(204,235,16,Math.PI,2*Math.PI,!0),r.arc(238,235,16,Math.PI,2*Math.PI,!0),r.lineWidth=10,r.strokeStyle="rgb(69,69,69)",r.lineCap="round",r.lineJoin="round",r.stroke(),r.restore(),r.closePath()},n.prototype.drawBg=function(){var r=this.can.getContext("2d"),o=new Image;o.src="/assets/page7_1.webp",r.drawImage(o,-45,-25)},n.prototype.openEyes=function(r,o,i,l){var a=this.can.getContext("2d");a.save(),a.beginPath(),a.arc(163,185,20,0,2*Math.PI,!0),a.moveTo(293,185),a.arc(273,185,20,0,2*Math.PI,!0),a.lineWidth=5,a.strokeStyle="rgb(69,69,69)",a.stroke(),a.closePath(),a.beginPath(),a.moveTo(r,o),a.arc(r,o,5,0,2*Math.PI,!0),a.moveTo(i,l),a.arc(i,l,5,0,2*Math.PI,!0),a.fillStyle="rgb(69,69,69)",a.fill(),a.closePath(),a.restore()},n.prototype.dizzy=function(){var r=this.can.getContext("2d");r.save(),r.beginPath(),r.arc(168,222,5,.5*Math.PI,1.5*Math.PI,!0),r.moveTo(168,237),r.arc(168,227,10,.5*Math.PI,1.5*Math.PI,!1),r.moveTo(168,237),r.arc(168,221,16,.5*Math.PI,1.5*Math.PI,!0),r.arc(168,229,24,1.5*Math.PI,.5*Math.PI,!0),r.moveTo(278,227),r.arc(278,222,5,.5*Math.PI,1.5*Math.PI,!0),r.moveTo(278,237),r.arc(278,227,10,.5*Math.PI,1.5*Math.PI,!1),r.moveTo(278,237),r.arc(278,221,16,.5*Math.PI,1.5*Math.PI,!0),r.arc(278,229,24,1.5*Math.PI,.5*Math.PI,!0),r.lineWidth=2,r.strokeStyle="rgb(69,69,69)",r.stroke(),r.closePath(),r.restore()},n.prototype.moveEyes=function(r,o){var i,l,a,c;if(r>102&&r<360&&o>182&&o<344){var u=Math.sqrt(this.eRange*this.eRange/((r-this.leftEyeX)*(r-this.leftEyeX)+(o-this.leftEyeY)*(o-this.leftEyeY))),d=Math.sqrt(this.eRange*this.eRange/((r-this.rightEyeX)*(r-this.rightEyeX)+(o-this.rightEyeY)*(o-this.rightEyeY))),f=Math.abs(r-this.leftEyeX)*u,p=Math.abs(o-this.leftEyeY)*u,h=Math.abs(r-this.rightEyeX)*d,y=Math.abs(o-this.rightEyeY)*d;f=f*(r>this.leftEyeX?1:-1),p=p*(o>this.leftEyeY?1:-1),h=h*(r>this.rightEyeX?1:-1),y=y*(o>this.rightEyeY?1:-1),i=this.leftEyeX+f,l=this.leftEyeY+p,a=this.rightEyeX+h,c=this.rightEyeY+y}else i=this.leftEyeX,l=this.leftEyeY,a=this.rightEyeX,c=this.rightEyeY;this.clearRect(),this.drawBg(),this.drawMouth(),this.eMoveNum==0&&(console.log(this.eMoveNum),this.t=window.setTimeout(function(){console.log(n.eMoveNum),n.eMoveNum>60?(n.isDizzy=1,window.clearTimeout(n.t)):(n.eMoveNum=0,window.clearTimeout(n.t))},1e3)),this.eMoveNum++,this.isDizzy==1?this.dizzy():this.openEyes(i,l,a,c)},n.prototype.clearRect=function(){var r=this.can.getContext("2d");r.clearRect(0,0,this.width,this.height)};function s(){document.getElementById("canvas").addEventListener("mousemove",function(i){var i=i||window.event;r.moveEyes(i.offsetX,i.offsetY)}),document.getElementById("canvas").addEventListener("touchmove",function(i){var i=i||window.event,l=i.originalEvent.targetTouches[0];r.moveEyes(l.pageX,l.pageY)});var r=new n(document.getElementById("canvas"),500,500);r.drawBg(),r.drawMouth(),r.openEyes()}return(r,o)=>{const i=St("click");return E(),G(Ye,je(Le(t)),{default:ve(()=>[hw,g("div",mw,[g("div",{class:"canvas",title:"hehe",onClick:s},vw),Ze((E(),F("div",null,bw)),[[i]])])]),_:1},16)}}});var ww=Ve(xw,[["__scopeId","data-v-1a1d9b60"]]);const vf=e=>(Qe("data-v-1eb349ee"),e=e(),et(),e),kw=vf(()=>g("h1",null,"\u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762",-1)),Ew={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 package"},Sw=vf(()=>g("div",null,[g("a",{href:"https://alidocs.dingtalk.com/i/team/9JOGOyJpv42LoX4Q/docs/9JOGOlvqJVPqJz4Q# \u300C\u609F\u7A7A\u4EA7\u54C1\u4E8C\u6B21\u5F00\u53D1\u6587\u6863\u300D"},"\u76F8\u5173\u6587\u6863")],-1)),Pw={__name:"13",setup(e){const t={};return W(ee),(n,s)=>{const r=gf,o=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[kw,Ze(g("div",Ew,null,512),[[o]]),K(r,null,{default:ve(()=>[Sw]),_:1})]),_:1},16)}}};var $w=Ve(Pw,[["__scopeId","data-v-1eb349ee"]]);const _f=e=>(Qe("data-v-3838078b"),e=e(),et(),e),Ow=_f(()=>g("h1",null,"\u609F\u7A7A\u652F\u6301",-1)),Mw=_f(()=>g("ul",{class:"content"},[g("li",{class:"item"},[g("a",{href:"#"},"\u914D\u7F6E\u652F\u6491")]),g("li",{class:"item"},[g("a",{href:"#"},"hook\u7F16\u5199")]),g("li",{class:"item"},[g("a",{href:"#"},"\u7EC4\u4EF6\u5F00\u53D1")])],-1)),Cw={__name:"14",setup(e){const t={};return W(ee),(n,s)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[Ow,Mw]),_:1},16))}};var Aw=Ve(Cw,[["__scopeId","data-v-3838078b"]]);const yf=e=>(Qe("data-v-25970dde"),e=e(),et(),e),Iw={class:"hook"},Tw=yf(()=>g("div",{class:"row"},[g("p",null,"\u4E0D\u4F7F\u7528hook"),g("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6B63\u65B9\u5F62"),g("div",{class:"display"})],-1)),Rw={class:"row"},Lw=yf(()=>g("p",null,"\u4F7F\u7528hook",-1)),Nw=ue({__name:"Hook",props:{count:{default:0}},setup(e){const t=e;W(ee),B(t.count);const n=B("\u6211\u662F\u4E00\u4E2A\u6B63\u65B9\u5F62"),s=B({});let r=B();function o(l){const a=r.value.innerHTML;s.value=i(a)}function i(l){var a,c,u;return{color:(a=l.match(/颜色(\w+|#[\w\d]+)/))==null?void 0:a[1],width:(c=l.match(/宽([\w\d]+)/))==null?void 0:c[1],height:(u=l.match(/高([\w\d]+)/))==null?void 0:u[1]}}return(l,a)=>(E(),F("div",Iw,[Tw,g("div",Rw,[Lw,g("p",{class:"content",contenteditable:"true",onInput:o,ref_key:"hookContent",ref:r},gn(n.value),545),g("div",{style:Ue(s.value),class:"display"},null,4)])]))}});var Fw=Ve(Nw,[["__scopeId","data-v-25970dde"]]);const Dw=g("h1",null,"\u4F7F\u7528hook",-1),Bw={__name:"15",setup(e){const t={};return W(ee),(n,s)=>{const r=Fw;return E(),G(Ye,je(Le(t)),{default:ve(()=>[Dw,K(r)]),_:1},16)}}};const zw=e=>(Qe("data-v-0f0ed3b6"),e=e(),et(),e),jw=zw(()=>g("h1",null,"\u5236\u5B9A\u56E2\u961Fhook\u5F00\u53D1\u65B9\u6848",-1)),Vw={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 bg-16"},Hw={__name:"16",setup(e){const t={};return W(ee),(n,s)=>{const r=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[jw,Ze(g("div",Vw,null,512),[[r]])]),_:1},16)}}};var Yw=Ve(Hw,[["__scopeId","data-v-0f0ed3b6"]]);const bf=e=>(Qe("data-v-35927c74"),e=e(),et(),e),Ww=bf(()=>g("div",{class:"logo",id:"logo2"},null,-1)),Kw=bf(()=>g("div",{class:"logo-title"},"\u53CD\u601D\u4E0E\u5C55\u671B",-1)),Uw=ue({__name:"17",setup(e){const t={preload:!1};W(ee);function n(){s(),l<f?(a+=u/i,d+=c/i,l+=d/i):(l-=d/i,d=-.5*d),Math.abs(d)<.1&&l>f-1&&window.clearInterval(p)}function s(){!o||(o.style.left=a+"px",o.style.top=l+"px")}function r(){o=document.getElementById("logo2"),p=window.setInterval(n,1e3/(i*5))}let o=document.getElementById("logo2");const i=60;let l=0,a=-80,c=9.8,u=20,d=0,f=250,p;return(h,y)=>(E(),G(Ye,je(Le(t)),{default:ve(()=>[g("div",{class:"mask",onClick:r}),Ww,Kw]),_:1},16))}});var qw=Ve(Uw,[["__scopeId","data-v-35927c74"]]);const Xw=e=>(Qe("data-v-122a1138"),e=e(),et(),e),Zw=Xw(()=>g("h1",null,"\u6280\u672F\u6808\u5B66\u4E60",-1)),Jw={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 bg-17"},Gw={__name:"18",setup(e){const t={};return W(ee),(n,s)=>{const r=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[Zw,Ze(g("div",Jw,null,512),[[r]])]),_:1},16)}}};var Qw=Ve(Gw,[["__scopeId","data-v-122a1138"]]);const e2={initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},class:"absolute w-150 bg-20"},t2={__name:"19",setup(e){const t={class:"px-20"};return W(ee),(n,s)=>{const r=St("motion");return E(),G(Ye,je(Le(t)),{default:ve(()=>[Ze(g("div",e2,null,512),[[r]])]),_:1},16)}}};var n2=Ve(t2,[["__scopeId","data-v-4360600e"]]),s2=[{path:"1",name:"page-1",component:ly,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"\u804C\u7EA7\u8003\u6838\u6C47\u62A5",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

# \u804C\u7EA7\u8003\u6838\u6C47\u62A5 

#### \u8FF0\u804C\u4EBA\uFF1A\u9648\u9E3F\u5EB7

<div class="pt-12">
  <span >
    \u57CE\u5E02\u5927\u8111 \u7814\u53D1\u4E00\u7EC4 2022.8.8
  </span>
</div>
`,title:"\u804C\u7EA7\u8003\u6838\u6C47\u62A5",level:1,content:`# \u804C\u7EA7\u8003\u6838\u6C47\u62A5 

#### \u8FF0\u804C\u4EBA\uFF1A\u9648\u9E3F\u5EB7

<div class="pt-12">
  <span >
    \u57CE\u5E02\u5927\u8111 \u7814\u53D1\u4E00\u7EC4 2022.8.8
  </span>
</div>`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"\u804C\u7EA7\u8003\u6838\u6C47\u62A5"},index:0,start:0,end:35,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:dy,meta:{preload:!1,slide:{raw:`---
preload: false
---

<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u6570\u636E\u6982\u51B5</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
  // const observer = new MutationObserver(callback);

  // observer.observe(targetNode, config);
<\/script>
`,content:`<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u6570\u636E\u6982\u51B5</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
  // const observer = new MutationObserver(callback);

  // observer.observe(targetNode, config);
<\/script>`,frontmatter:{preload:!1},index:1,start:35,end:132,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:yy,meta:{slide:{raw:`
# \u5DE5\u4F5C\u6570\u636E\u4E00\u89C8
2021.7.1 - 2022.7.1
<br/>

- \u{1F4DD} **\u6848\u5377\u6570** - 138\u4E2A\u5B8C\u6210\u6848\u5377
- \u{1F4E4} **\u8D85\u671F\u7387** - 11\u4E2A\u8D85\u671F\u6848\u5377\uFF0C\u8D85\u671F\u73877.9%
- \u{1F6E0} **bug\u6570** - \u65E0bug\u6848\u5377\uFF0Cbug\u73870
- \u{1F939} **\u597D\u8BC4\u7387** - \u597D\u8BC4\u657068\uFF0C\u4E2D\u5DEE\u8BC40

<img
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 outdate"
  src="/images/outdate.png"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-page-2 .outdate {
  transition: all 1s ease-in;
}
</style>
`,title:"\u5DE5\u4F5C\u6570\u636E\u4E00\u89C8",level:1,content:`# \u5DE5\u4F5C\u6570\u636E\u4E00\u89C8
2021.7.1 - 2022.7.1
<br/>

- \u{1F4DD} **\u6848\u5377\u6570** - 138\u4E2A\u5B8C\u6210\u6848\u5377
- \u{1F4E4} **\u8D85\u671F\u7387** - 11\u4E2A\u8D85\u671F\u6848\u5377\uFF0C\u8D85\u671F\u73877.9%
- \u{1F6E0} **bug\u6570** - \u65E0bug\u6848\u5377\uFF0Cbug\u73870
- \u{1F939} **\u597D\u8BC4\u7387** - \u597D\u8BC4\u657068\uFF0C\u4E2D\u5DEE\u8BC40

<img
  v-click
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 outdate"
  src="/images/outdate.png"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-page-2 .outdate {
  transition: all 1s ease-in;
}
</style>`,frontmatter:{},index:2,start:133,end:167,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:ky,meta:{preload:!1,slide:{raw:`---
preload: false
---

<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u5DE5\u4F5C\u6982\u51B5</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
<\/script>
`,content:`<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u5DE5\u4F5C\u6982\u51B5</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
<\/script>`,frontmatter:{preload:!1},index:3,start:167,end:261,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Py,meta:{slide:{raw:`
# \u5DE5\u4F5C\u6982\u51B5

|     |     |
| --- | --- |
| \u57CE\u8FD0\u5927\u5C4F | \u53C2\u4E0E\u652F\u6301\u804A\u57CE\uFF0C\u5F20\u5E97\uFF0C\u6D4E\u5357\uFF0C\u5BBF\u5DDE\uFF0C\u798F\u5C71\u7B4920\u6765\u4E2A\u9879\u76EE\u3002\u719F\u6089\u57CE\u8FD0\u9879\u76EE\u524D\u7AEF\u6D4B\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B |
| \u609F\u7A7A\u5C01\u95ED\u5F00\u53D1 | \u5B8C\u6210\u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762\u5C01\u88C5\uFF0C\u609F\u7A7A\u7EC4\u4EF6\u4E8C\u6B21\u5F00\u53D1\u903B\u8F91 |
| \u609F\u7A7A\u652F\u6301 | \u652F\u6301\u6C82\u6E90\uFF0C\u5510\u5C71\uFF0C\u9752\u6D66\uFF0C\u4EA6\u5E84\uFF0C\u4FE1\u5DDE\uFF0C\u576A\u5C71\u7B49\u591A\u4E2A\u9879\u76EE\uFF0C\u719F\u6089\u638C\u63E1\u609F\u7A7A\u5E38\u7528\u914D\u7F6E\u548Chook\u7F16\u5199 |
| \u609F\u7A7A\u7EC4\u4EF6\u5F00\u53D1 | \u5B8C\u62101\u4E2A\u609F\u7A7A\u6807\u51C6\u7EC4\u4EF6\uFF0C4\u4E2A\u5B9A\u5236\u5F00\u53D1\u7EC4\u4EF6\uFF0C2\u4E2A\u4E8C\u6B21\u5F00\u53D1\u7EC4\u4EF6 |
`,title:"\u5DE5\u4F5C\u6982\u51B5",level:1,content:`# \u5DE5\u4F5C\u6982\u51B5

|     |     |
| --- | --- |
| \u57CE\u8FD0\u5927\u5C4F | \u53C2\u4E0E\u652F\u6301\u804A\u57CE\uFF0C\u5F20\u5E97\uFF0C\u6D4E\u5357\uFF0C\u5BBF\u5DDE\uFF0C\u798F\u5C71\u7B4920\u6765\u4E2A\u9879\u76EE\u3002\u719F\u6089\u57CE\u8FD0\u9879\u76EE\u524D\u7AEF\u6D4B\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B |
| \u609F\u7A7A\u5C01\u95ED\u5F00\u53D1 | \u5B8C\u6210\u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762\u5C01\u88C5\uFF0C\u609F\u7A7A\u7EC4\u4EF6\u4E8C\u6B21\u5F00\u53D1\u903B\u8F91 |
| \u609F\u7A7A\u652F\u6301 | \u652F\u6301\u6C82\u6E90\uFF0C\u5510\u5C71\uFF0C\u9752\u6D66\uFF0C\u4EA6\u5E84\uFF0C\u4FE1\u5DDE\uFF0C\u576A\u5C71\u7B49\u591A\u4E2A\u9879\u76EE\uFF0C\u719F\u6089\u638C\u63E1\u609F\u7A7A\u5E38\u7528\u914D\u7F6E\u548Chook\u7F16\u5199 |
| \u609F\u7A7A\u7EC4\u4EF6\u5F00\u53D1 | \u5B8C\u62101\u4E2A\u609F\u7A7A\u6807\u51C6\u7EC4\u4EF6\uFF0C4\u4E2A\u5B9A\u5236\u5F00\u53D1\u7EC4\u4EF6\uFF0C2\u4E2A\u4E8C\u6B21\u5F00\u53D1\u7EC4\u4EF6 |`,frontmatter:{},index:4,start:262,end:272,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Cy,meta:{slide:{raw:`
<div class="animate-cy">\u57CE\u8FD0\u5927\u5C4F</div>
<ul class="content">
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnKHYGmKyzIV6pYAMbRHsepg?from=space_persnoal_filelist" target="_blank">\u7EC4\u4EF6\u5F00\u53D1</a></li>
  <li class="item"><a href="#">\u9879\u76EE\u903B\u8F91</a></li>
  <li class="item"><a href="#">\u4E13\u9879\u529F\u80FD</a></li>
  <li class="item"><a href="#">\u6307\u4EE4\u5C01\u88C5</a></li>
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist" target="_blank">\u6027\u80FD\u4F18\u5316</a></li>
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist" target="_blank">\u6253\u5305\u6784\u5EFA</a></li>
  <li class="item"><a href="#">\u4EE3\u7801\u5BA1\u6838</a></li>
</ul>

<style>
.slidev-page-4 {
  position: relative;
}
.animate-cy {
  position: relative;
  animation: page4-cy 1s ease-in;
  animation-fill-mode: forwards;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  margin: auto;
  list-style: none;
  .item {
    position: relative;
    height: 80px;
    width: 80px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    list-style-type: none;
    opacity: 0;
    animation: page4-item 1s ease-in;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      animation-delay: 1.1s;
    }
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(3) {
      animation-delay: 1.3s;
    }
    &:nth-child(4) {
      animation-delay: 1.4s;
    }
    &:nth-child(5) {
      animation-delay: 1.5s;
    }
    &:nth-child(6) {
      animation-delay: 1.6s;
    }
    &:nth-child(7) {
      animation-delay: 1.7s;
    }
    a {
      text-decoration: none;
      border: none
    }
  }
}
@keyframes page4-cy {
  0% {
    top: 100px;
  }
  100% {
    top: 0px;
    color: #2B90B6;
    font-size: 25px;
    font-weight: 700;
  }
}
@keyframes page4-item {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>
`,content:`<div class="animate-cy">\u57CE\u8FD0\u5927\u5C4F</div>
<ul class="content">
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnKHYGmKyzIV6pYAMbRHsepg?from=space_persnoal_filelist" target="_blank">\u7EC4\u4EF6\u5F00\u53D1</a></li>
  <li class="item"><a href="#">\u9879\u76EE\u903B\u8F91</a></li>
  <li class="item"><a href="#">\u4E13\u9879\u529F\u80FD</a></li>
  <li class="item"><a href="#">\u6307\u4EE4\u5C01\u88C5</a></li>
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist" target="_blank">\u6027\u80FD\u4F18\u5316</a></li>
  <li class="item"><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist" target="_blank">\u6253\u5305\u6784\u5EFA</a></li>
  <li class="item"><a href="#">\u4EE3\u7801\u5BA1\u6838</a></li>
</ul>

<style>
.slidev-page-4 {
  position: relative;
}
.animate-cy {
  position: relative;
  animation: page4-cy 1s ease-in;
  animation-fill-mode: forwards;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  margin: auto;
  list-style: none;
  .item {
    position: relative;
    height: 80px;
    width: 80px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    list-style-type: none;
    opacity: 0;
    animation: page4-item 1s ease-in;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      animation-delay: 1.1s;
    }
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(3) {
      animation-delay: 1.3s;
    }
    &:nth-child(4) {
      animation-delay: 1.4s;
    }
    &:nth-child(5) {
      animation-delay: 1.5s;
    }
    &:nth-child(6) {
      animation-delay: 1.6s;
    }
    &:nth-child(7) {
      animation-delay: 1.7s;
    }
    a {
      text-decoration: none;
      border: none
    }
  }
}
@keyframes page4-cy {
  0% {
    top: 100px;
  }
  100% {
    top: 0px;
    color: #2B90B6;
    font-size: 25px;
    font-weight: 700;
  }
}
@keyframes page4-item {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>`,frontmatter:{},index:5,start:273,end:368,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Uy,meta:{slide:{raw:`
# \u7EC4\u4EF6\u5F00\u53D1
\u5305\u62EC\u65E5\u5E38\u9875\u9762\uFF0C\u5F39\u7A97\u548C\u5176\u4ED6\u7279\u6B8A\u9700\u6C42\u6240\u5F00\u53D1\u7684\u6570\u636E\u5C55\u793A\u7EC4\u4EF6

<div><img src="/images/page5_4.png"></div>
<div><img src="/images/page5_1.png"></div>
<div><img src="/images/page5_5.png"></div>
<div><img src="/images/page5_2.png"></div>
<div><img src="/images/page5_3.png"></div>
<div><img src="/images/page5_6.png"></div>

<div id="tips" class="tips"></div>

<style>
  .slidev-page-7 {
    div {
      display: inline-block;
      width: 400px;
      height: 120px;
      margin: 0 20px 10px 0;
      img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        position: absolute;
        top: 10px;
        left: 50%;
        display: none;
        transform: translateX(-50%);
      }
      &:hover {
        &::after {
          display: block;
        }
      }
      &:nth-child(3) {
        &::after {
          content: "\u6570\u636E\u6A21\u7CCA,\u95EE\u53F7\u94FA\u8DEF\u274C"
        }
      }
      &:nth-child(4) {
        &::after {
          content: "props\u5B9A\u4E49\u7C7B\u578B,\u6E05\u6670\u660E\u4E86\u2714"
        }
      }
      &:nth-child(5) {
        &::after {
          content: "\u903B\u8F91\u5197\u957F,if\u6765\u6297\u274C"
        }
      }
      &:nth-child(6) {
        &::after {
          content: "\u5584\u7528event,\u62BD\u79BB\u4E1A\u52A1\u903B\u8F91\u2714"
        }
      }
      &:nth-child(7) {
        &::after {
          content: "\u91CD\u590D\u58F0\u660E\uFF0C\u4F7F\u7528\u4E0D\u4FBF\u274C"
        }
      }
      &:nth-child(8) {
        &::after {
          content: "\u62BD\u79BB\u6210\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u4E00\u76EE\u4E86\u7136\u2714"
        }
      }
    }
  }
  img {
  }
</style>
`,title:"\u7EC4\u4EF6\u5F00\u53D1",level:1,content:`# \u7EC4\u4EF6\u5F00\u53D1
\u5305\u62EC\u65E5\u5E38\u9875\u9762\uFF0C\u5F39\u7A97\u548C\u5176\u4ED6\u7279\u6B8A\u9700\u6C42\u6240\u5F00\u53D1\u7684\u6570\u636E\u5C55\u793A\u7EC4\u4EF6

<div><img src="/images/page5_4.png"></div>
<div><img src="/images/page5_1.png"></div>
<div><img src="/images/page5_5.png"></div>
<div><img src="/images/page5_2.png"></div>
<div><img src="/images/page5_3.png"></div>
<div><img src="/images/page5_6.png"></div>

<div id="tips" class="tips"></div>

<style>
  .slidev-page-7 {
    div {
      display: inline-block;
      width: 400px;
      height: 120px;
      margin: 0 20px 10px 0;
      img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        position: absolute;
        top: 10px;
        left: 50%;
        display: none;
        transform: translateX(-50%);
      }
      &:hover {
        &::after {
          display: block;
        }
      }
      &:nth-child(3) {
        &::after {
          content: "\u6570\u636E\u6A21\u7CCA,\u95EE\u53F7\u94FA\u8DEF\u274C"
        }
      }
      &:nth-child(4) {
        &::after {
          content: "props\u5B9A\u4E49\u7C7B\u578B,\u6E05\u6670\u660E\u4E86\u2714"
        }
      }
      &:nth-child(5) {
        &::after {
          content: "\u903B\u8F91\u5197\u957F,if\u6765\u6297\u274C"
        }
      }
      &:nth-child(6) {
        &::after {
          content: "\u5584\u7528event,\u62BD\u79BB\u4E1A\u52A1\u903B\u8F91\u2714"
        }
      }
      &:nth-child(7) {
        &::after {
          content: "\u91CD\u590D\u58F0\u660E\uFF0C\u4F7F\u7528\u4E0D\u4FBF\u274C"
        }
      }
      &:nth-child(8) {
        &::after {
          content: "\u62BD\u79BB\u6210\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u4E00\u76EE\u4E86\u7136\u2714"
        }
      }
    }
  }
  img {
  }
</style>`,frontmatter:{},index:6,start:369,end:442,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Qy,meta:{slide:{raw:`
# \u9879\u76EE\u903B\u8F91

<img
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 logic"
  src="/images/page8_1.png"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.logic {
  width: 900px;
  height: 400px;
  margin-top: 30px;
}
</style>
`,title:"\u9879\u76EE\u903B\u8F91",level:1,content:`# \u9879\u76EE\u903B\u8F91

<img
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 logic"
  src="/images/page8_1.png"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.logic {
  width: 900px;
  height: 400px;
  margin-top: 30px;
}
</style>`,frontmatter:{},index:7,start:443,end:471,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:gb,meta:{preload:!1,slide:{raw:`---
preload: false
---

# \u6027\u80FD\u4F18\u5316

<div class="methods">
  <p v-if="$slidev.nav.clicks >= 1">\u4E1A\u52A1\u6D41\u7A0B\u4F18\u5316</p>
  <p v-if="$slidev.nav.clicks >= 2">\u9879\u76EE\u67B6\u6784\u4F18\u5316</p>
  <p v-if="$slidev.nav.clicks >= 3">\u903B\u8F91\u5B9E\u73B0\u4F18\u5316</p>
  <a v-if="$slidev.nav.clicks >= 3" href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist">\u67E5\u770Bdemo</a>
</div>

<div class="tips" 
  :class="{ opacity1: $slidev.nav.clicks === 1, opacity2: $slidev.nav.clicks === 2, opacity3: $slidev.nav.clicks === 3, }"
>
    <p>\u9875\u9762\u52A0\u8F7D\u6162\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>\u7528\u7740\u7528\u7740\u5C31\u5D29\u4E86\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>\u6570\u636E\u51FA\u4E0D\u6765\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>XX\u529F\u80FD\u597D\u5361\u554A\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
</div>

<div class="bg bg4"
  v-if="!$slidev.nav.clicks && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg3" v-click
  v-if="$slidev.nav.clicks < 2 && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg2" v-click
  v-if="$slidev.nav.clicks < 3 && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg1" v-click
  v-if="$slidev.nav.clicks < 4 && $slidev.nav.currentPage === 9"
></div>
<div v-click></div>

<style>
  .slidev-page-9 {
    .tips {
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 500px;
      height: 500px;
      z-index: 1;
      &.opacity1 {
        opacity: 0.6;
      }
      &.opacity2 {
        opacity: 0.3;
      }
      &.opacity3 {
        opacity: 0;
      }
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100px;
      height: 100px;
      background-image: url("/images/page6_1.jpg");
      transition: all 500ms ease;
      &::after {
        content: "egova";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
      &.bg1 {
        background-position: -53px 210px;
        transform: scale(2);
        &.slidev-vclick-prior {
          transform: scale(1);
        }
      }
      &.bg2 {
        background-position: -53px 100px;
        transform: scale(4);
        &.slidev-vclick-prior {
          transform: scale(2);
        }
      }
      &.bg3 {
        background-position: -145px 210px;
        transform: scale(5);
        &.slidev-vclick-prior {
          transform: scale(4);
        }
      }
      &.bg4 {
        background-position: -145px 100px;
        transform: scale(5);
        &.slidev-vclick-prior {
          transform: scale(5);
        }
      }
    }
  }
</style>
`,title:"\u6027\u80FD\u4F18\u5316",level:1,content:`# \u6027\u80FD\u4F18\u5316

<div class="methods">
  <p v-if="$slidev.nav.clicks >= 1">\u4E1A\u52A1\u6D41\u7A0B\u4F18\u5316</p>
  <p v-if="$slidev.nav.clicks >= 2">\u9879\u76EE\u67B6\u6784\u4F18\u5316</p>
  <p v-if="$slidev.nav.clicks >= 3">\u903B\u8F91\u5B9E\u73B0\u4F18\u5316</p>
  <a v-if="$slidev.nav.clicks >= 3" href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcnPRRVhA0HL0iKWyxKaEQTIc?from=space_persnoal_filelist">\u67E5\u770Bdemo</a>
</div>

<div class="tips" 
  :class="{ opacity1: $slidev.nav.clicks === 1, opacity2: $slidev.nav.clicks === 2, opacity3: $slidev.nav.clicks === 3, }"
>
    <p>\u9875\u9762\u52A0\u8F7D\u6162\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>\u7528\u7740\u7528\u7740\u5C31\u5D29\u4E86\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>\u6570\u636E\u51FA\u4E0D\u6765\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
    <p>XX\u529F\u80FD\u597D\u5361\u554A\uFF0C\u7528\u6237\u4E0D\u6EE1\u610F\u5566\uFF01</p>
</div>

<div class="bg bg4"
  v-if="!$slidev.nav.clicks && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg3" v-click
  v-if="$slidev.nav.clicks < 2 && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg2" v-click
  v-if="$slidev.nav.clicks < 3 && $slidev.nav.currentPage === 9"
></div>
<div class="bg bg1" v-click
  v-if="$slidev.nav.clicks < 4 && $slidev.nav.currentPage === 9"
></div>
<div v-click></div>

<style>
  .slidev-page-9 {
    .tips {
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 500px;
      height: 500px;
      z-index: 1;
      &.opacity1 {
        opacity: 0.6;
      }
      &.opacity2 {
        opacity: 0.3;
      }
      &.opacity3 {
        opacity: 0;
      }
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100px;
      height: 100px;
      background-image: url("/images/page6_1.jpg");
      transition: all 500ms ease;
      &::after {
        content: "egova";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
      &.bg1 {
        background-position: -53px 210px;
        transform: scale(2);
        &.slidev-vclick-prior {
          transform: scale(1);
        }
      }
      &.bg2 {
        background-position: -53px 100px;
        transform: scale(4);
        &.slidev-vclick-prior {
          transform: scale(2);
        }
      }
      &.bg3 {
        background-position: -145px 210px;
        transform: scale(5);
        &.slidev-vclick-prior {
          transform: scale(4);
        }
      }
      &.bg4 {
        background-position: -145px 100px;
        transform: scale(5);
        &.slidev-vclick-prior {
          transform: scale(5);
        }
      }
    }
  }
</style>`,frontmatter:{preload:!1},index:8,start:471,end:584,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:rw,meta:{slide:{raw:`
# \u6307\u4EE4\u5C01\u88C5

\u7B80\u5316\u5DE5\u4F5C\u4E2D\u7684\u8017\u65F6\u5185\u5BB9\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387

\`\`\`ts {all|1|2|3|4|5}
"build-without-dll": "npm i && cross-env WITHOUT_DLL=true node config/start build",
"add": "node config/add",
"git:push": "node config/push",
"compress": "node config/compress",
"copy": "node config/copy"
\`\`\`
<!-- <arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> -->

<div class="methods">
  <p v-if="$slidev.nav.clicks === 1">\u9879\u76EE\u8131\u79BBdll\u6253\u5305\u65B9\u6848</p>
  <p v-if="$slidev.nav.clicks === 2">\u4E00\u952E\u65B0\u589E\u4E13\u9898</p>
  <p v-if="$slidev.nav.clicks === 3">\u63D0\u4EA4\u65F6\u81EA\u52A8\u538B\u7F29\u56FE\u7247\uFF0C\u8131\u79BB\u624B\u52A8\u538B\u7F29\u7684\u82E6\u607C</p>
  <p v-if="$slidev.nav.clicks === 4">\u4E00\u952E\u538B\u7F29\u6574\u4E2A\u9879\u76EE\u7684\u56FE\u7247</p>
  <p v-if="$slidev.nav.clicks === 5">\u538B\u7F29\u56FE\u7247\u7684\u4E00\u952E\u66FF\u6362\uFF08\u7528\u4E8E\u5168\u5C40\u56FE\u7247\u68C0\u6D4B\uFF09</p>
</div>

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>
`,title:"\u6307\u4EE4\u5C01\u88C5",level:1,content:`# \u6307\u4EE4\u5C01\u88C5

\u7B80\u5316\u5DE5\u4F5C\u4E2D\u7684\u8017\u65F6\u5185\u5BB9\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387

\`\`\`ts {all|1|2|3|4|5}
"build-without-dll": "npm i && cross-env WITHOUT_DLL=true node config/start build",
"add": "node config/add",
"git:push": "node config/push",
"compress": "node config/compress",
"copy": "node config/copy"
\`\`\`
<!-- <arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> -->

<div class="methods">
  <p v-if="$slidev.nav.clicks === 1">\u9879\u76EE\u8131\u79BBdll\u6253\u5305\u65B9\u6848</p>
  <p v-if="$slidev.nav.clicks === 2">\u4E00\u952E\u65B0\u589E\u4E13\u9898</p>
  <p v-if="$slidev.nav.clicks === 3">\u63D0\u4EA4\u65F6\u81EA\u52A8\u538B\u7F29\u56FE\u7247\uFF0C\u8131\u79BB\u624B\u52A8\u538B\u7F29\u7684\u82E6\u607C</p>
  <p v-if="$slidev.nav.clicks === 4">\u4E00\u952E\u538B\u7F29\u6574\u4E2A\u9879\u76EE\u7684\u56FE\u7247</p>
  <p v-if="$slidev.nav.clicks === 5">\u538B\u7F29\u56FE\u7247\u7684\u4E00\u952E\u66FF\u6362\uFF08\u7528\u4E8E\u5168\u5C40\u56FE\u7247\u68C0\u6D4B\uFF09</p>
</div>

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>`,frontmatter:{},index:9,start:585,end:619,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:fw,meta:{slide:{raw:`
# \u6253\u5305\u6784\u5EFA

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 package"
></div>
<v-click>
<div><a href="https://p97ydvk8sr.feishu.cn/docs/doccnv6yJOC4zRsPNZ3c3e5i5Fe">\u76F8\u5173\u6587\u6863</a></div>
<div><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist">\u77E5\u8BC6\u8BB0\u5F55</a></div>
</v-click>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.package {
  width: 750px;
  height: 400px;
  margin: 30px 0 0 100px;
  background-image: url("/images/page9_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
`,title:"\u6253\u5305\u6784\u5EFA",level:1,content:`# \u6253\u5305\u6784\u5EFA

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 package"
></div>
<v-click>
<div><a href="https://p97ydvk8sr.feishu.cn/docs/doccnv6yJOC4zRsPNZ3c3e5i5Fe">\u76F8\u5173\u6587\u6863</a></div>
<div><a href="https://p97ydvk8sr.feishu.cn/drive/folder/fldcn1hK86MFpqpEvWWCWRRkaLb?from=space_persnoal_filelist">\u77E5\u8BC6\u8BB0\u5F55</a></div>
</v-click>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.package {
  width: 750px;
  height: 400px;
  margin: 30px 0 0 100px;
  background-image: url("/images/page9_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>`,frontmatter:{},index:10,start:620,end:654,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:ww,meta:{preload:!1,slide:{raw:`---
preload: false
---

# \u4EE3\u7801\u5BA1\u6838

<div class="page7">
  <div class="canvas" title="hehe" @click="startAnimate">
        <canvas id="canvas" width="405" height="420"></canvas>
  </div>

  <div v-click>
    <img src="/images/page7_2.png">
    <img src="/images/page7_3.png">
  </div>
</div>

<style>
  .page7 {
    display: flex;
    justify-content: space-between;
    img {
      height: 200px;
      margin-bottom: 10px;
    }
  }
</style>

<script setup lang="ts">
function canvas(can,width,height){
	this.width=width||500; //canvas\u957F
	this.height=height||500; //canvas\u5BBD
	this.eyes=0;//\u662F\u5426\u7741\u773C
	//\u5DE6\u53F3\u773C\u7684\u521D\u59CB \uFF08\u65E0\u6CD5\u88AB\u6539\u53D8\uFF09
	this.leftEyeX=163;
	this.leftEyeY=187;
	this.rightEyeX=273;
	this.rightEyeY=187;
	//\u773C\u775B\u7684\u79FB\u52A8\u8303\u56F4
	this.eRange=5;
	//\u773C\u795E\u7684\u79FB\u52A8\u6B21\u6570
	this.eMoveNum=0;
	//\u662F\u5426\u7729\u6655
	this.isDizzy=0;
	//\u662F\u5426\u5F00\u673A
	this.switch=0;
	//\u9875\u9762\u4E2D \u7684canvas\u5143\u7D20
	this.can=can||document.getElementById("canvas");
}
//\u7ED8\u5236\u7535\u89C6\u7684\u5916\u58F3
canvas.prototype.drawMouth=function(){
	var context=this.can.getContext("2d");
	//\u5634\u5DF4
	context.beginPath();
	context.arc(204,235,16,Math.PI,2*Math.PI,true);
	context.arc(238,235,16,Math.PI,2*Math.PI,true);
	context.lineWidth=10;
	context.strokeStyle="rgb(69,69,69)";
	context.lineCap="round";
	context.lineJoin="round";
	context.stroke();
	context.restore();
	context.closePath();
}
// \u80CC\u666F\u56FE\u7247
canvas.prototype.drawBg = function() {
  var context=this.can.getContext("2d");
  var bgImg = new Image();
  bgImg.src = "/assets/page7_1.webp";
  context.drawImage(bgImg, -45, -25);
}

//\u7535\u89C6\u7741\u773C
canvas.prototype.openEyes=function(lex,ley,rex,rey){
	//\u7741\u773C
	var context=this.can.getContext("2d");
	context.save();
	context.beginPath();
	context.arc(163,185,20,0,2*Math.PI,true);
	context.moveTo(293,185);
	context.arc(273,185,20,0,2*Math.PI,true);
	context.lineWidth=5;
	context.strokeStyle="rgb(69,69,69)";
	context.stroke();
	context.closePath();
	context.beginPath();
	context.moveTo(lex,ley);
	context.arc(lex,ley,5,0,2*Math.PI,true);
	context.moveTo(rex,rey);
	context.arc(rex,rey,5,0,2*Math.PI,true);
	context.fillStyle="rgb(69,69,69)";
	context.fill();
	context.closePath();
	context.restore();
}

//\u7535\u89C6\u7729\u6655
canvas.prototype.dizzy=function(){
	var context=this.can.getContext("2d");
	context.save();
	context.beginPath();
	//\u5DE6\u773C
	context.arc(168,222,5,0.5*Math.PI,1.5*Math.PI,true);
	context.moveTo(168,237);
	context.arc(168,227,10,0.5*Math.PI,1.5*Math.PI,false);
	context.moveTo(168,237);
	context.arc(168,221,16,0.5*Math.PI,1.5*Math.PI,true);
	//context.moveTo(168,237);
	context.arc(168,229,24,1.5*Math.PI,0.5*Math.PI,true);
	//\u6709\u773C
	context.moveTo(278,227);
	context.arc(278,222,5,0.5*Math.PI,1.5*Math.PI,true);
	context.moveTo(278,237);
	context.arc(278,227,10,0.5*Math.PI,1.5*Math.PI,false);
	context.moveTo(278,237);
	context.arc(278,221,16,0.5*Math.PI,1.5*Math.PI,true);
	context.arc(278,229,24,1.5*Math.PI,0.5*Math.PI,true);
	
	context.lineWidth=2;
	context.strokeStyle="rgb(69,69,69)";
	context.stroke();
	context.closePath();
	context.restore();
}


//\u773C\u775B\u7684\u79FB\u52A8
canvas.prototype.moveEyes=function(x,y){ //\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u9F20\u6807\u7684\u4F4D\u7F6E
	var lex;
	var ley;
	var rex;
	var rey;
	if(x > 102 && x < 360 && y > 182 && y < 344){
		//\u83B7\u5F97\u9F20\u6807\u7684\u79FB\u52A8\u8DDD\u79BB
		var precentL=Math.sqrt(this.eRange*this.eRange/((x-this.leftEyeX)*(x-this.leftEyeX)+(y-this.leftEyeY)*(y-this.leftEyeY)));
		var precentR=Math.sqrt(this.eRange*this.eRange/((x-this.rightEyeX)*(x-this.rightEyeX)+(y-this.rightEyeY)*(y-this.rightEyeY)));
		var lx=Math.abs(x-this.leftEyeX)*precentL;
		var ly=Math.abs(y-this.leftEyeY)*precentL;
		var rx=Math.abs(x-this.rightEyeX)*precentR;
		var ry=Math.abs(y-this.rightEyeY)*precentR;
		//\u83B7\u5F97\u79FB\u52A8\u7684\u65B9\u5411
		lx=lx*(x>this.leftEyeX?1:-1);
		ly=ly*(y>this.leftEyeY?1:-1);
		rx=rx*(x>this.rightEyeX?1:-1);
		ry=ry*(y>this.rightEyeY?1:-1);
		//\u83B7\u5F97\u773C\u775B\u7ECF\u8FC7\u4E00\u6B21\u79FB\u52A8\u540E\u6700\u7EC8\u7684\u8DDD\u79BB
		lex=this.leftEyeX+lx;
		ley=this.leftEyeY+ly;
		rex=this.rightEyeX+rx;
		rey=this.rightEyeY+ry;
	}
	else{
		lex=this.leftEyeX;
		ley=this.leftEyeY;
		rex=this.rightEyeX;
		rey=this.rightEyeY;
	}
	//\u91CD\u7ED8
  this.clearRect();
  this.drawBg();
  this.drawMouth();
	//\u662F\u5426\u7729\u6655
	if(this.eMoveNum==0){
		console.log(this.eMoveNum);
		this.t=window.setTimeout(function(){
			console.log(canvas.eMoveNum);
			if(canvas.eMoveNum>60){
				canvas.isDizzy=1;
				window.clearTimeout(canvas.t);
			}
			else{
				//console.log(canvas.eMoveNum);
				canvas.eMoveNum=0;
				window.clearTimeout(canvas.t);
			}
		},1000)
	}
	this.eMoveNum++;
	if(this.isDizzy==1){this.dizzy();}
	else{this.openEyes(lex,ley,rex,rey);}
}
//\u6E05\u5C4F
canvas.prototype.clearRect=function(){
	var context=this.can.getContext("2d");
	context.clearRect(0,0,this.width,this.height);
}

function startAnimate() {
  //\u773C\u775B\u7684\u79FB\u52A8\u4E8B\u4EF6
  document.getElementById("canvas").addEventListener("mousemove", function(e){
    var e=e || window.event;
    git.moveEyes(e.offsetX,e.offsetY);
  });
  document.getElementById("canvas").addEventListener("touchmove", function(e){
    var e=e||window.event;
    var touch=e.originalEvent.targetTouches[0];		
    git.moveEyes(touch.pageX,touch.pageY);
  });
  var git = new canvas(document.getElementById("canvas"),500,500);
  git.drawBg();
  git.drawMouth();
  git.openEyes();
}
<\/script>
`,title:"\u4EE3\u7801\u5BA1\u6838",level:1,content:`# \u4EE3\u7801\u5BA1\u6838

<div class="page7">
  <div class="canvas" title="hehe" @click="startAnimate">
        <canvas id="canvas" width="405" height="420"></canvas>
  </div>

  <div v-click>
    <img src="/images/page7_2.png">
    <img src="/images/page7_3.png">
  </div>
</div>

<style>
  .page7 {
    display: flex;
    justify-content: space-between;
    img {
      height: 200px;
      margin-bottom: 10px;
    }
  }
</style>

<script setup lang="ts">
function canvas(can,width,height){
	this.width=width||500; //canvas\u957F
	this.height=height||500; //canvas\u5BBD
	this.eyes=0;//\u662F\u5426\u7741\u773C
	//\u5DE6\u53F3\u773C\u7684\u521D\u59CB \uFF08\u65E0\u6CD5\u88AB\u6539\u53D8\uFF09
	this.leftEyeX=163;
	this.leftEyeY=187;
	this.rightEyeX=273;
	this.rightEyeY=187;
	//\u773C\u775B\u7684\u79FB\u52A8\u8303\u56F4
	this.eRange=5;
	//\u773C\u795E\u7684\u79FB\u52A8\u6B21\u6570
	this.eMoveNum=0;
	//\u662F\u5426\u7729\u6655
	this.isDizzy=0;
	//\u662F\u5426\u5F00\u673A
	this.switch=0;
	//\u9875\u9762\u4E2D \u7684canvas\u5143\u7D20
	this.can=can||document.getElementById("canvas");
}
//\u7ED8\u5236\u7535\u89C6\u7684\u5916\u58F3
canvas.prototype.drawMouth=function(){
	var context=this.can.getContext("2d");
	//\u5634\u5DF4
	context.beginPath();
	context.arc(204,235,16,Math.PI,2*Math.PI,true);
	context.arc(238,235,16,Math.PI,2*Math.PI,true);
	context.lineWidth=10;
	context.strokeStyle="rgb(69,69,69)";
	context.lineCap="round";
	context.lineJoin="round";
	context.stroke();
	context.restore();
	context.closePath();
}
// \u80CC\u666F\u56FE\u7247
canvas.prototype.drawBg = function() {
  var context=this.can.getContext("2d");
  var bgImg = new Image();
  bgImg.src = "/assets/page7_1.webp";
  context.drawImage(bgImg, -45, -25);
}

//\u7535\u89C6\u7741\u773C
canvas.prototype.openEyes=function(lex,ley,rex,rey){
	//\u7741\u773C
	var context=this.can.getContext("2d");
	context.save();
	context.beginPath();
	context.arc(163,185,20,0,2*Math.PI,true);
	context.moveTo(293,185);
	context.arc(273,185,20,0,2*Math.PI,true);
	context.lineWidth=5;
	context.strokeStyle="rgb(69,69,69)";
	context.stroke();
	context.closePath();
	context.beginPath();
	context.moveTo(lex,ley);
	context.arc(lex,ley,5,0,2*Math.PI,true);
	context.moveTo(rex,rey);
	context.arc(rex,rey,5,0,2*Math.PI,true);
	context.fillStyle="rgb(69,69,69)";
	context.fill();
	context.closePath();
	context.restore();
}

//\u7535\u89C6\u7729\u6655
canvas.prototype.dizzy=function(){
	var context=this.can.getContext("2d");
	context.save();
	context.beginPath();
	//\u5DE6\u773C
	context.arc(168,222,5,0.5*Math.PI,1.5*Math.PI,true);
	context.moveTo(168,237);
	context.arc(168,227,10,0.5*Math.PI,1.5*Math.PI,false);
	context.moveTo(168,237);
	context.arc(168,221,16,0.5*Math.PI,1.5*Math.PI,true);
	//context.moveTo(168,237);
	context.arc(168,229,24,1.5*Math.PI,0.5*Math.PI,true);
	//\u6709\u773C
	context.moveTo(278,227);
	context.arc(278,222,5,0.5*Math.PI,1.5*Math.PI,true);
	context.moveTo(278,237);
	context.arc(278,227,10,0.5*Math.PI,1.5*Math.PI,false);
	context.moveTo(278,237);
	context.arc(278,221,16,0.5*Math.PI,1.5*Math.PI,true);
	context.arc(278,229,24,1.5*Math.PI,0.5*Math.PI,true);
	
	context.lineWidth=2;
	context.strokeStyle="rgb(69,69,69)";
	context.stroke();
	context.closePath();
	context.restore();
}


//\u773C\u775B\u7684\u79FB\u52A8
canvas.prototype.moveEyes=function(x,y){ //\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u9F20\u6807\u7684\u4F4D\u7F6E
	var lex;
	var ley;
	var rex;
	var rey;
	if(x > 102 && x < 360 && y > 182 && y < 344){
		//\u83B7\u5F97\u9F20\u6807\u7684\u79FB\u52A8\u8DDD\u79BB
		var precentL=Math.sqrt(this.eRange*this.eRange/((x-this.leftEyeX)*(x-this.leftEyeX)+(y-this.leftEyeY)*(y-this.leftEyeY)));
		var precentR=Math.sqrt(this.eRange*this.eRange/((x-this.rightEyeX)*(x-this.rightEyeX)+(y-this.rightEyeY)*(y-this.rightEyeY)));
		var lx=Math.abs(x-this.leftEyeX)*precentL;
		var ly=Math.abs(y-this.leftEyeY)*precentL;
		var rx=Math.abs(x-this.rightEyeX)*precentR;
		var ry=Math.abs(y-this.rightEyeY)*precentR;
		//\u83B7\u5F97\u79FB\u52A8\u7684\u65B9\u5411
		lx=lx*(x>this.leftEyeX?1:-1);
		ly=ly*(y>this.leftEyeY?1:-1);
		rx=rx*(x>this.rightEyeX?1:-1);
		ry=ry*(y>this.rightEyeY?1:-1);
		//\u83B7\u5F97\u773C\u775B\u7ECF\u8FC7\u4E00\u6B21\u79FB\u52A8\u540E\u6700\u7EC8\u7684\u8DDD\u79BB
		lex=this.leftEyeX+lx;
		ley=this.leftEyeY+ly;
		rex=this.rightEyeX+rx;
		rey=this.rightEyeY+ry;
	}
	else{
		lex=this.leftEyeX;
		ley=this.leftEyeY;
		rex=this.rightEyeX;
		rey=this.rightEyeY;
	}
	//\u91CD\u7ED8
  this.clearRect();
  this.drawBg();
  this.drawMouth();
	//\u662F\u5426\u7729\u6655
	if(this.eMoveNum==0){
		console.log(this.eMoveNum);
		this.t=window.setTimeout(function(){
			console.log(canvas.eMoveNum);
			if(canvas.eMoveNum>60){
				canvas.isDizzy=1;
				window.clearTimeout(canvas.t);
			}
			else{
				//console.log(canvas.eMoveNum);
				canvas.eMoveNum=0;
				window.clearTimeout(canvas.t);
			}
		},1000)
	}
	this.eMoveNum++;
	if(this.isDizzy==1){this.dizzy();}
	else{this.openEyes(lex,ley,rex,rey);}
}
//\u6E05\u5C4F
canvas.prototype.clearRect=function(){
	var context=this.can.getContext("2d");
	context.clearRect(0,0,this.width,this.height);
}

function startAnimate() {
  //\u773C\u775B\u7684\u79FB\u52A8\u4E8B\u4EF6
  document.getElementById("canvas").addEventListener("mousemove", function(e){
    var e=e || window.event;
    git.moveEyes(e.offsetX,e.offsetY);
  });
  document.getElementById("canvas").addEventListener("touchmove", function(e){
    var e=e||window.event;
    var touch=e.originalEvent.targetTouches[0];		
    git.moveEyes(touch.pageX,touch.pageY);
  });
  var git = new canvas(document.getElementById("canvas"),500,500);
  git.drawBg();
  git.drawMouth();
  git.openEyes();
}
<\/script>`,frontmatter:{preload:!1},index:11,start:654,end:859,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:$w,meta:{slide:{raw:`
# \u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 package"
></div>
<v-click>
<div><a href="https://alidocs.dingtalk.com/i/team/9JOGOyJpv42LoX4Q/docs/9JOGOlvqJVPqJz4Q# \u300C\u609F\u7A7A\u4EA7\u54C1\u4E8C\u6B21\u5F00\u53D1\u6587\u6863\u300D">\u76F8\u5173\u6587\u6863</a></div>
</v-click>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.package {
  width: 750px;
  height: 400px;
  margin: 30px 0 0 100px;
  background-image: url("/images/page11_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
`,title:"\u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762",level:1,content:`# \u609F\u7A7A\u9879\u76EE\u5D4C\u5165\u57CE\u8FD0\u754C\u9762

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 package"
></div>
<v-click>
<div><a href="https://alidocs.dingtalk.com/i/team/9JOGOyJpv42LoX4Q/docs/9JOGOlvqJVPqJz4Q# \u300C\u609F\u7A7A\u4EA7\u54C1\u4E8C\u6B21\u5F00\u53D1\u6587\u6863\u300D">\u76F8\u5173\u6587\u6863</a></div>
</v-click>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.package {
  width: 750px;
  height: 400px;
  margin: 30px 0 0 100px;
  background-image: url("/images/page11_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>`,frontmatter:{},index:12,start:860,end:893,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Aw,meta:{slide:{raw:`
# \u609F\u7A7A\u652F\u6301

<ul class="content">
  <li class="item"><a href="#">\u914D\u7F6E\u652F\u6491</a></li>
  <li class="item"><a href="#">hook\u7F16\u5199</a></li>
  <li class="item"><a href="#">\u7EC4\u4EF6\u5F00\u53D1</a></li>
</ul>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-page-9 {
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  margin: auto;
  list-style: none;
  .item {
    position: relative;
    height: 80px;
    width: 80px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    list-style-type: none;
    opacity: 0;
    animation: page9-item 1s ease-in;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    a {
      text-decoration: none;
      border: none
    }
  }
}
@keyframes page9-item {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>
`,title:"\u609F\u7A7A\u652F\u6301",level:1,content:`# \u609F\u7A7A\u652F\u6301

<ul class="content">
  <li class="item"><a href="#">\u914D\u7F6E\u652F\u6491</a></li>
  <li class="item"><a href="#">hook\u7F16\u5199</a></li>
  <li class="item"><a href="#">\u7EC4\u4EF6\u5F00\u53D1</a></li>
</ul>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-page-9 {
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  margin: auto;
  list-style: none;
  .item {
    position: relative;
    height: 80px;
    width: 80px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    list-style-type: none;
    opacity: 0;
    animation: page9-item 1s ease-in;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    a {
      text-decoration: none;
      border: none
    }
  }
}
@keyframes page9-item {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>`,frontmatter:{},index:13,start:894,end:967,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Bw,meta:{slide:{raw:`
# \u4F7F\u7528hook

<Hook />
`,title:"\u4F7F\u7528hook",level:1,content:`# \u4F7F\u7528hook

<Hook />`,frontmatter:{},index:14,start:968,end:973,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Yw,meta:{slide:{raw:`
# \u5236\u5B9A\u56E2\u961Fhook\u5F00\u53D1\u65B9\u6848

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-16"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-16 {
  width: 900px;
  height: 400px;
  margin-top: 30px;
  background-image: url("/images/page16_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
`,title:"\u5236\u5B9A\u56E2\u961Fhook\u5F00\u53D1\u65B9\u6848",level:1,content:`# \u5236\u5B9A\u56E2\u961Fhook\u5F00\u53D1\u65B9\u6848

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-16"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-16 {
  width: 900px;
  height: 400px;
  margin-top: 30px;
  background-image: url("/images/page16_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>`,frontmatter:{},index:15,start:974,end:1004,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:qw,meta:{preload:!1,slide:{raw:`---
preload: false
---

<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u53CD\u601D\u4E0E\u5C55\u671B</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
  // const observer = new MutationObserver(callback);

  // observer.observe(targetNode, config);
<\/script>
`,content:`<div class="mask" @click="startMove"></div>
<div class="logo" id="logo2"></div>
<div class="logo-title">\u53CD\u601D\u4E0E\u5C55\u671B</div>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    left: -80px;
    border-radius: 50%;
    border: red 4px solid;
    background-image: url("/images/logo.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 3px 7px;
  }
  .logo-title {
    position: absolute;
    top: 270px;
    left: 460px;
    font-size: 24px;
    font-weight: 700;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    opacity: 0;
    animation: logo-title 2s ease-in;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  @keyframes logo-title {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script setup lang="ts">
  function move() {
    draw();
    if(top < lowLevel) {
      left += leftSpeed / fps;
      bottomSpeed += g / fps;
      top += bottomSpeed / fps;
    } else {
      top -= bottomSpeed / fps;
      bottomSpeed = -0.5 * bottomSpeed;
    }

    if(Math.abs(bottomSpeed) < 0.1 && top > lowLevel - 1) {
      window.clearInterval(flug);
    }
  }
  function draw() {
    if(!logo) { return; }
    logo.style.left = left + "px";
    logo.style.top = top + "px";
  }
  function startMove() {
    logo = document.getElementById("logo2");
    // window.requestAnimationFrame(move);
    flug = window.setInterval(move, 1000 / (fps * 5));
  }
  let logo = document.getElementById("logo2");
  const fps = 60;
  let top = 0;
  let left = -80;
  let g = 9.8;
  let leftSpeed = 20;
  let bottomSpeed = 0;
  let lowLevel = 250;
  let flug;
  // const observer = new MutationObserver(callback);

  // observer.observe(targetNode, config);
<\/script>`,frontmatter:{preload:!1},index:16,start:1004,end:1101,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Qw,meta:{slide:{raw:`
# \u6280\u672F\u6808\u5B66\u4E60

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-17"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-17 {
  width: 900px;
  height: 400px;
  margin-top: 30px;
  background-image: url("/images/page17_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
`,title:"\u6280\u672F\u6808\u5B66\u4E60",level:1,content:`# \u6280\u672F\u6808\u5B66\u4E60

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-17"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-17 {
  width: 900px;
  height: 400px;
  margin-top: 30px;
  background-image: url("/images/page17_1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>`,frontmatter:{},index:17,start:1102,end:1132,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:n2,meta:{class:"px-20",slide:{raw:`---
class: px-20
---

<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-20"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-20 {
  width: 500px;
  height: 400px;
  margin: 30px 0 0 200px;
  background-image: url("/images/page20_1.png");
  background-size: 500px 400px;
  background-repeat: no-repeat;
}
</style>

`,content:`<div
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  class="absolute w-150 bg-20"
/>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.bg-20 {
  width: 500px;
  height: 400px;
  margin: 30px 0 0 200px;
  background-image: url("/images/page20_1.png");
  background-size: 500px 400px;
  background-repeat: no-repeat;
}
</style>`,frontmatter:{class:"px-20"},index:18,start:1132,end:1164,notesHTML:"",filepath:"D:\\ppt\\ppt1\\slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",component:ey,meta:{layout:"end"}}];const De=s2,r2=[{name:"play",path:"/",component:K_,children:[...De]},{name:"print",path:"/print",component:J_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ds(()=>import("./Presenter.05f83b22.js"),["assets/Presenter.05f83b22.js","assets/Presenter.648d23ed.css","assets/DrawingControls.c709840e.js"]),beforeEnter:e=>{if(!Mn.remote||Mn.remote===e.query.password)return!0;if(Mn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Mn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],bt=Iv({history:Ug("/"),routes:r2});function o2(e,t,{mode:n="replace"}={}){return $({get(){const s=bt.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ke(()=>{bt[_(n)]({query:{...bt.currentRoute.value.query,[e]:s}})})}})}const xf=B(0);Ke(()=>{bt.afterEach(async()=>{await Ke(),xf.value+=1})});const tn=$(()=>bt.currentRoute.value),nl=$(()=>tn.value.query.print!==void 0),i2=$(()=>tn.value.query.print==="clicks"),Kt=$(()=>tn.value.query.embedded!==void 0),jt=$(()=>tn.value.path.startsWith("/presenter")),Ns=$(()=>nl.value&&!i2.value),pi=$(()=>tn.value.query.password),l2=$(()=>!jt.value&&(!_e.remote||pi.value===_e.remote)),Xa=o2("clicks","0"),wf=$(()=>De.length-1),a2=$(()=>tn.value.path),Be=$(()=>parseInt(a2.value.split(/\//g).slice(-1)[0])||1);$(()=>ro(Be.value));const mt=$(()=>De.find(e=>e.path===`${Be.value}`));$(()=>{var e,t,n;return(n=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});$(()=>{var e,t;return(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Eo=$(()=>De.find(e=>e.path===`${Math.min(De.length,Be.value+1)}`)),c2=$(()=>{var e,t;return xf.value,((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Rt=$({get(){if(Ns.value)return 99999;let e=+(Xa.value||0);return isNaN(e)&&(e=0),e},set(e){Xa.value=e.toString()}}),Fr=$(()=>{var e,t,n;return+((n=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:c2.value.length)}),u2=$(()=>Be.value<De.length-1||Rt.value<Fr.value),f2=$(()=>Be.value>1||Rt.value>0),d2=$(()=>De.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(sl(e,t),e),[])),p2=$(()=>rl(d2.value,mt.value));$(()=>ol(p2.value));function hn(){Fr.value<=Rt.value?Js():Rt.value+=1}async function mn(){Rt.value<=0?await Gs():Rt.value-=1}function ro(e){return jt.value?`/presenter/${e}`:`/${e}`}function Js(){const e=Math.min(De.length,Be.value+1);return as(e)}async function Gs(e=!0){const t=Math.max(1,Be.value-1);await as(t),e&&Fr.value&&bt.replace({query:{...tn.value.query,clicks:Fr.value}})}function as(e,t){return bt.push({path:ro(e),query:{...tn.value.query,clicks:t}})}function h2(e){const t=B(0),{direction:n,distanceX:s,distanceY:r}=Eg(e,{onSwipeStart(o){o.pointerType==="touch"&&(qs.value||(t.value=ei()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||qs.value)return;const i=Math.abs(s.value),l=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===Xt.LEFT?hn():mn():(l/window.innerHeight>.4||l>200)&&(n.value===Xt.DOWN?Gs():Js())}})}async function hi(){const{saveAs:e}=await ds(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(Ou(_e.download)?_e.download:_e.exportFilename?`${_e.exportFilename}.pdf`:"/slidev-exported.pdf",`${_e.title}.pdf`)}async function m2(e){var t,n;if(e==null){const s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sl(e,t,n=1){var r,o,i,l,a;const s=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;s&&s>n&&e.length>0?sl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(a=(l=t.meta)==null?void 0:l.slide)==null?void 0:a.title})}function rl(e,t,n=!1,s){return e.map(r=>{const o={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return o.children.length>0&&(o.children=rl(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function ol(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ol(n.children,t+1)}))}function g2(){const e=_e.titleTemplate.replace("%s",_e.title||"Slidev");qh({title:e}),rm(`${e} - shared`),am(`${e} - drawings`);function t(){jt.value&&(na("page",+Be.value),na("clicks",Rt.value))}bt.afterEach(t),le(Rt,t),om(n=>{(+n.page!=+Be.value||Rt.value!==n.clicks)&&bt.replace({path:ro(n.page),query:{...bt.currentRoute.value.query,clicks:n.clicks||0}})})}const v2=ue({__name:"App",setup(e){return W(ee),g2(),(t,n)=>{const s=Vo("RouterView"),r=Vo("StarportCarrier");return E(),F(we,null,[K(s),K(r)],64)}}});function So(e){return e!==null&&typeof e=="object"}function mi(e,t,n=".",s){if(!So(t))return mi(e,{},n,s);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const i=e[o];i!=null&&(s&&s(r,o,i,n)||(Array.isArray(i)&&Array.isArray(r[o])?r[o]=i.concat(r[o]):So(i)&&So(r[o])?r[o]=mi(i,r[o],(n?`${n}.`:"")+o.toString(),s):r[o]=i))}return r}function _2(e){return(...t)=>t.reduce((n,s)=>mi(n,s,"",e),{})}const y2=_2(),kf=1/60*1e3,b2=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Ef=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(b2()),kf);function x2(e){let t=[],n=[],s=0,r=!1,o=!1;const i=new WeakSet,l={schedule:(a,c=!1,u=!1)=>{const d=u&&r,f=d?t:n;return c&&i.add(a),f.indexOf(a)===-1&&(f.push(a),d&&r&&(s=t.length)),a},cancel:a=>{const c=n.indexOf(a);c!==-1&&n.splice(c,1),i.delete(a)},process:a=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let c=0;c<s;c++){const u=t[c];u(a),i.has(u)&&(l.schedule(u),e())}r=!1,o&&(o=!1,l.process(a))}};return l}const w2=40;let gi=!0,Qs=!1,vi=!1;const rs={delta:0,timestamp:0},rr=["read","update","preRender","render","postRender"],oo=rr.reduce((e,t)=>(e[t]=x2(()=>Qs=!0),e),{}),_i=rr.reduce((e,t)=>{const n=oo[t];return e[t]=(s,r=!1,o=!1)=>(Qs||S2(),n.schedule(s,r,o)),e},{}),k2=rr.reduce((e,t)=>(e[t]=oo[t].cancel,e),{});rr.reduce((e,t)=>(e[t]=()=>oo[t].process(rs),e),{});const E2=e=>oo[e].process(rs),Sf=e=>{Qs=!1,rs.delta=gi?kf:Math.max(Math.min(e-rs.timestamp,w2),1),rs.timestamp=e,vi=!0,rr.forEach(E2),vi=!1,Qs&&(gi=!1,Ef(Sf))},S2=()=>{Qs=!0,gi=!0,vi||Ef(Sf)},Pf=()=>rs;function $f(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var P2=function(){},Za=function(){};const yi=(e,t,n)=>Math.min(Math.max(n,e),t),Po=.001,$2=.01,Ja=10,O2=.05,M2=1;function C2({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,o;P2(e<=Ja*1e3);let i=1-t;i=yi(O2,M2,i),e=yi($2,Ja,e/1e3),i<1?(r=c=>{const u=c*i,d=u*e,f=u-n,p=bi(c,i),h=Math.exp(-d);return Po-f/p*h},o=c=>{const d=c*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(c,2)*e,h=Math.exp(-d),y=bi(Math.pow(c,2),i);return(-r(c)+Po>0?-1:1)*((f-p)*h)/y}):(r=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-Po+u*d},o=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const l=5/e,a=I2(r,o,l);if(e=e*1e3,isNaN(a))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(a,2)*s;return{stiffness:c,damping:i*2*Math.sqrt(s*c),duration:e}}}const A2=12;function I2(e,t,n){let s=n;for(let r=1;r<A2;r++)s=s-e(s)/t(s);return s}function bi(e,t){return e*Math.sqrt(1-t*t)}const T2=["duration","bounce"],R2=["stiffness","damping","mass"];function Ga(e,t){return t.some(n=>e[n]!==void 0)}function L2(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Ga(e,R2)&&Ga(e,T2)){const n=C2(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function il(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,o=$f(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:l,damping:a,mass:c,velocity:u,duration:d,isResolvedFromDuration:f}=L2(o),p=Qa,h=Qa;function y(){const b=u?-(u/1e3):0,S=n-t,w=a/(2*Math.sqrt(l*c)),k=Math.sqrt(l/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),w<1){const P=bi(k,w);p=R=>{const C=Math.exp(-w*k*R);return n-C*((b+w*k*S)/P*Math.sin(P*R)+S*Math.cos(P*R))},h=R=>{const C=Math.exp(-w*k*R);return w*k*C*(Math.sin(P*R)*(b+w*k*S)/P+S*Math.cos(P*R))-C*(Math.cos(P*R)*(b+w*k*S)-P*S*Math.sin(P*R))}}else if(w===1)p=P=>n-Math.exp(-k*P)*(S+(b+k*S)*P);else{const P=k*Math.sqrt(w*w-1);p=R=>{const C=Math.exp(-w*k*R),j=Math.min(P*R,300);return n-C*((b+w*k*S)*Math.sinh(j)+P*S*Math.cosh(j))/P}}}return y(),{next:b=>{const S=p(b);if(f)i.done=b>=d;else{const w=h(b)*1e3,k=Math.abs(w)<=s,P=Math.abs(n-S)<=r;i.done=k&&P}return i.value=i.done?n:S,i},flipTarget:()=>{u=-u,[t,n]=[n,t],y()}}}il.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Qa=e=>0,Of=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},ll=(e,t,n)=>-n*e+n*t+e,Mf=(e,t)=>n=>Math.max(Math.min(n,t),e),Fs=e=>e%1?Number(e.toFixed(5)):e,er=/(-)?([\d]*\.?[\d])+/g,xi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,N2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function or(e){return typeof e=="string"}const ir={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ds=Object.assign(Object.assign({},ir),{transform:Mf(0,1)}),gr=Object.assign(Object.assign({},ir),{default:1}),al=e=>({test:t=>or(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),xn=al("deg"),Bs=al("%"),re=al("px"),ec=Object.assign(Object.assign({},Bs),{parse:e=>Bs.parse(e)/100,transform:e=>Bs.transform(e*100)}),cl=(e,t)=>n=>Boolean(or(n)&&N2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Cf=(e,t,n)=>s=>{if(!or(s))return s;const[r,o,i,l]=s.match(er);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(i),alpha:l!==void 0?parseFloat(l):1}},An={test:cl("hsl","hue"),parse:Cf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Bs.transform(Fs(t))+", "+Bs.transform(Fs(n))+", "+Fs(Ds.transform(s))+")"},F2=Mf(0,255),$o=Object.assign(Object.assign({},ir),{transform:e=>Math.round(F2(e))}),cn={test:cl("rgb","red"),parse:Cf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+$o.transform(e)+", "+$o.transform(t)+", "+$o.transform(n)+", "+Fs(Ds.transform(s))+")"};function D2(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const wi={test:cl("#"),parse:D2,transform:cn.transform},at={test:e=>cn.test(e)||wi.test(e)||An.test(e),parse:e=>cn.test(e)?cn.parse(e):An.test(e)?An.parse(e):wi.parse(e),transform:e=>or(e)?e:e.hasOwnProperty("red")?cn.transform(e):An.transform(e)},Af="${c}",If="${n}";function B2(e){var t,n,s,r;return isNaN(e)&&or(e)&&((n=(t=e.match(er))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(xi))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function Tf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(xi);s&&(n=s.length,e=e.replace(xi,Af),t.push(...s.map(at.parse)));const r=e.match(er);return r&&(e=e.replace(er,If),t.push(...r.map(ir.parse))),{values:t,numColors:n,tokenised:e}}function Rf(e){return Tf(e).values}function Lf(e){const{values:t,numColors:n,tokenised:s}=Tf(e),r=t.length;return o=>{let i=s;for(let l=0;l<r;l++)i=i.replace(l<n?Af:If,l<n?at.transform(o[l]):Fs(o[l]));return i}}const z2=e=>typeof e=="number"?0:e;function j2(e){const t=Rf(e);return Lf(e)(t.map(z2))}const lr={test:B2,parse:Rf,createTransformer:Lf,getAnimatableNone:j2},V2=new Set(["brightness","contrast","saturate","opacity"]);function H2(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(er)||[];if(!s)return e;const r=n.replace(s,"");let o=V2.has(t)?1:0;return s!==n&&(o*=100),t+"("+o+r+")"}const Y2=/([a-z-]*)\(.*?\)/g,ki=Object.assign(Object.assign({},lr),{getAnimatableNone:e=>{const t=e.match(Y2);return t?t.map(H2).join(" "):e}});function Oo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function tc({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,o=0,i=0;if(!t)r=o=i=n;else{const l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;r=Oo(a,l,e+1/3),o=Oo(a,l,e),i=Oo(a,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(i*255),alpha:s}}const W2=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},K2=[wi,cn,An],nc=e=>K2.find(t=>t.test(e)),Nf=(e,t)=>{let n=nc(e),s=nc(t),r=n.parse(e),o=s.parse(t);n===An&&(r=tc(r),n=cn),s===An&&(o=tc(o),s=cn);const i=Object.assign({},r);return l=>{for(const a in i)a!=="alpha"&&(i[a]=W2(r[a],o[a],l));return i.alpha=ll(r.alpha,o.alpha,l),n.transform(i)}},U2=e=>typeof e=="number",q2=(e,t)=>n=>t(e(n)),Ff=(...e)=>e.reduce(q2);function Df(e,t){return U2(e)?n=>ll(e,t,n):at.test(e)?Nf(e,t):zf(e,t)}const Bf=(e,t)=>{const n=[...e],s=n.length,r=e.map((o,i)=>Df(o,t[i]));return o=>{for(let i=0;i<s;i++)n[i]=r[i](o);return n}},X2=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=Df(e[r],t[r]));return r=>{for(const o in s)n[o]=s[o](r);return n}};function sc(e){const t=lr.parse(e),n=t.length;let s=0,r=0,o=0;for(let i=0;i<n;i++)s||typeof t[i]=="number"?s++:t[i].hue!==void 0?o++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:o}}const zf=(e,t)=>{const n=lr.createTransformer(t),s=sc(e),r=sc(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Ff(Bf(s.parsed,r.parsed),n):i=>`${i>0?t:e}`},Z2=(e,t)=>n=>ll(e,t,n);function J2(e){if(typeof e=="number")return Z2;if(typeof e=="string")return at.test(e)?Nf:zf;if(Array.isArray(e))return Bf;if(typeof e=="object")return X2}function G2(e,t,n){const s=[],r=n||J2(e[0]),o=e.length-1;for(let i=0;i<o;i++){let l=r(e[i],e[i+1]);if(t){const a=Array.isArray(t)?t[i]:t;l=Ff(a,l)}s.push(l)}return s}function Q2([e,t],[n]){return s=>n(Of(e,t,s))}function ek(e,t){const n=e.length,s=n-1;return r=>{let o=0,i=!1;if(r<=e[0]?i=!0:r>=e[s]&&(o=s-1,i=!0),!i){let a=1;for(;a<n&&!(e[a]>r||a===s);a++);o=a-1}const l=Of(e[o],e[o+1],r);return t[o](l)}}function jf(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const o=e.length;Za(o===t.length),Za(!s||!Array.isArray(s)||s.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=G2(t,s,r),l=o===2?Q2(e,i):ek(e,i);return n?a=>l(yi(e[0],e[o-1],a)):l}const io=e=>t=>1-e(1-t),ul=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tk=e=>t=>Math.pow(t,e),Vf=e=>t=>t*t*((e+1)*t-e),nk=e=>{const t=Vf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Hf=1.525,sk=4/11,rk=8/11,ok=9/10,Yf=e=>e,fl=tk(2),ik=io(fl),Wf=ul(fl),Kf=e=>1-Math.sin(Math.acos(e)),Uf=io(Kf),lk=ul(Uf),dl=Vf(Hf),ak=io(dl),ck=ul(dl),uk=nk(Hf),fk=4356/361,dk=35442/1805,pk=16061/1805,Dr=e=>{if(e===1||e===0)return e;const t=e*e;return e<sk?7.5625*t:e<rk?9.075*t-9.9*e+3.4:e<ok?fk*t-dk*e+pk:10.8*e*e-20.52*e+10.72},hk=io(Dr),mk=e=>e<.5?.5*(1-Dr(1-e*2)):.5*Dr(e*2-1)+.5;function gk(e,t){return e.map(()=>t||Wf).splice(0,e.length-1)}function vk(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function _k(e,t){return e.map(n=>n*t)}function Er({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const o={done:!1,value:e},i=Array.isArray(t)?t:[e,t],l=_k(s&&s.length===i.length?s:vk(i),r);function a(){return jf(l,i,{ease:Array.isArray(n)?n:gk(i,n)})}let c=a();return{next:u=>(o.value=c(u),o.done=u>=r,o),flipTarget:()=>{i.reverse(),c=a()}}}function yk({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:o}){const i={done:!1,value:t};let l=n*e;const a=t+l,c=o===void 0?a:o(a);return c!==a&&(l=c-t),{next:u=>{const d=-l*Math.exp(-u/s);return i.done=!(d>r||d<-r),i.value=i.done?c:c+d,i},flipTarget:()=>{}}}const rc={keyframes:Er,spring:il,decay:yk};function bk(e){if(Array.isArray(e.to))return Er;if(rc[e.type])return rc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Er:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?il:Er}function qf(e,t,n=0){return e-t-n}function xk(e,t,n=0,s=!0){return s?qf(t+-e,t,n):t-(e-t)+n}function wk(e,t,n,s){return s?e>=t+n:e<=-n}const kk=e=>{const t=({delta:n})=>e(n);return{start:()=>_i.update(t,!0),stop:()=>k2.update(t)}};function Xf(e){var t,n,{from:s,autoplay:r=!0,driver:o=kk,elapsed:i=0,repeat:l=0,repeatType:a="loop",repeatDelay:c=0,onPlay:u,onStop:d,onComplete:f,onRepeat:p,onUpdate:h}=e,y=$f(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=y,S,w=0,k=y.duration,P,R=!1,C=!0,j;const se=bk(y);!((n=(t=se).needsInterpolation)===null||n===void 0)&&n.call(t,s,b)&&(j=jf([0,100],[s,b],{clamp:!1}),s=0,b=100);const ae=se(Object.assign(Object.assign({},y),{from:s,to:b}));function fe(){w++,a==="reverse"?(C=w%2===0,i=xk(i,k,c,C)):(i=qf(i,k,c),a==="mirror"&&ae.flipTarget()),R=!1,p&&p()}function he(){S.stop(),f&&f()}function Ce(qe){if(C||(qe=-qe),i+=qe,!R){const ke=ae.next(Math.max(0,i));P=ke.value,j&&(P=j(P)),R=C?ke.done:i<=0}h==null||h(P),R&&(w===0&&(k!=null||(k=i)),w<l?wk(i,k,c,C)&&fe():he())}function Ne(){u==null||u(),S=o(Ce),S.start()}return r&&Ne(),{stop:()=>{d==null||d(),S.stop()}}}function Zf(e,t){return t?e*(1e3/t):0}function Ek({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:o=750,bounceStiffness:i=500,bounceDamping:l=10,restDelta:a=1,modifyTarget:c,driver:u,onUpdate:d,onComplete:f,onStop:p}){let h;function y(k){return n!==void 0&&k<n||s!==void 0&&k>s}function b(k){return n===void 0?s:s===void 0||Math.abs(n-k)<Math.abs(s-k)?n:s}function S(k){h==null||h.stop(),h=Xf(Object.assign(Object.assign({},k),{driver:u,onUpdate:P=>{var R;d==null||d(P),(R=k.onUpdate)===null||R===void 0||R.call(k,P)},onComplete:f,onStop:p}))}function w(k){S(Object.assign({type:"spring",stiffness:i,damping:l,restDelta:a},k))}if(y(e))w({from:e,velocity:t,to:b(e)});else{let k=r*t+e;typeof c!="undefined"&&(k=c(k));const P=b(k),R=P===n?-1:1;let C,j;const se=ae=>{C=j,j=ae,t=Zf(ae-C,Pf().delta),(R===1&&ae>P||R===-1&&ae<P)&&w({from:ae,to:P,velocity:t})};S({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:a,modifyTarget:c,onUpdate:y(k)?se:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Jf=(e,t)=>1-3*t+3*e,Gf=(e,t)=>3*t-6*e,Qf=e=>3*e,Br=(e,t,n)=>((Jf(t,n)*e+Gf(t,n))*e+Qf(t))*e,ed=(e,t,n)=>3*Jf(t,n)*e*e+2*Gf(t,n)*e+Qf(t),Sk=1e-7,Pk=10;function $k(e,t,n,s,r){let o,i,l=0;do i=t+(n-t)/2,o=Br(i,s,r)-e,o>0?n=i:t=i;while(Math.abs(o)>Sk&&++l<Pk);return i}const Ok=8,Mk=.001;function Ck(e,t,n,s){for(let r=0;r<Ok;++r){const o=ed(t,n,s);if(o===0)return t;t-=(Br(t,n,s)-e)/o}return t}const Sr=11,vr=1/(Sr-1);function Ak(e,t,n,s){if(e===t&&n===s)return Yf;const r=new Float32Array(Sr);for(let i=0;i<Sr;++i)r[i]=Br(i*vr,e,n);function o(i){let l=0,a=1;const c=Sr-1;for(;a!==c&&r[a]<=i;++a)l+=vr;--a;const u=(i-r[a])/(r[a+1]-r[a]),d=l+u*vr,f=ed(d,e,n);return f>=Mk?Ck(i,d,e,n):f===0?d:$k(i,l,l+vr,e,n)}return i=>i===0||i===1?i:Br(o(i),t,s)}const Mo={};class Ik{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}const oc=e=>!isNaN(parseFloat(e));class Tk{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Ik,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=Pf();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),_i.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>_i.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=oc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=oc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Zf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Rk(e){return new Tk(e)}const{isArray:Lk}=Array;function Nk(){const e=B({}),t=s=>{const r=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),dm(e.value,o))};s?Lk(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,o)=>{if(e.value[s])return e.value[s];const i=Rk(r);return i.onChange(l=>{ct(o,s,l)}),ct(e.value,s,i),i};return Yi(t),{motionValues:e,get:n,stop:t}}const Fk=e=>Array.isArray(e),wn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Co=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),Dk=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ao=()=>({type:"keyframes",ease:"linear",duration:300}),Bk=e=>({type:"keyframes",duration:800,values:e}),ic={default:Dk,x:wn,y:wn,z:wn,rotate:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scaleX:Co,scaleY:Co,scale:Co,backgroundColor:Ao,color:Ao,opacity:Ao},td=(e,t)=>{let n;return Fk(t)?n=Bk:n=ic[e]||ic.default,{to:t,...n(t)}},lc={...ir,transform:Math.round},nd={color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:xn,rotateX:xn,rotateY:xn,rotateZ:xn,scale:gr,scaleX:gr,scaleY:gr,scaleZ:gr,skew:xn,skewX:xn,skewY:xn,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Ds,originX:ec,originY:ec,originZ:re,zIndex:lc,filter:ki,WebkitFilter:ki,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:lc},pl=e=>nd[e],sd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function zk(e,t){let n=pl(e);return n!==ki&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const jk={linear:Yf,easeIn:fl,easeInOut:Wf,easeOut:ik,circIn:Kf,circInOut:lk,circOut:Uf,backIn:dl,backInOut:ck,backOut:ak,anticipate:uk,bounceIn:hk,bounceInOut:mk,bounceOut:Dr},ac=e=>{if(Array.isArray(e)){const[t,n,s,r]=e;return Ak(t,n,s,r)}else if(typeof e=="string")return jk[e];return e},Vk=e=>Array.isArray(e)&&typeof e[0]!="number",cc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&lr.test(t)&&!t.startsWith("url("));function Hk(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Yk({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=Vk(e)?e.map(ac):ac(e)),n&&(r.elapsed=-n),r}function Wk(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Hk(t),Kk(e)||(e={...e,...td(n,t.to)}),{...t,...Yk(e)}}function Kk({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...o}){return!!Object.keys(o).length}function Uk(e,t){return e[t]||e.default||e}function qk(e,t,n,s,r){const o=Uk(s,e);let i=o.from===null||o.from===void 0?t.get():o.from;const l=cc(e,n);i==="none"&&l&&typeof n=="string"&&(i=zk(e,n));const a=cc(e,i);function c(d){const f={from:i,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:p=>t.set(p)};return o.type==="inertia"||o.type==="decay"?Ek({...f,...o}):Xf({...Wk(o,f,e),onUpdate:p=>{f.onUpdate(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),d&&d()}})}function u(d){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!a||!l||o.type===!1?u:c}function Xk(){const{motionValues:e,stop:t,get:n}=Nk();return{motionValues:e,stop:t,push:(r,o,i,l={},a)=>{const c=i[r],u=n(r,c,i);if(l&&l.immediate){u.set(o);return}const d=qk(r,u,o,l,a);u.start(d)}}}function Zk(e,t={},{motionValues:n,push:s,stop:r}=Xk()){const o=_(t),i=B(!1),l=le(n,f=>{i.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0}),a=f=>{if(!o||!o[f])throw new Error(`The variant ${f} does not exist.`);return o[f]},c=f=>(typeof f=="string"&&(f=a(f)),Promise.all(Object.entries(f).map(([p,h])=>{if(p!=="transition")return new Promise(y=>{s(p,h,e,f.transition||td(p,f[p]),y)})}).filter(Boolean)));return{isAnimating:i,apply:c,set:f=>{const p=Ir(f)?f:a(f);Object.entries(p).forEach(([h,y])=>{h!=="transition"&&s(h,y,e,{immediate:!0})})},stopTransitions:()=>{l(),r()},leave:async f=>{let p;if(o&&(o.leave&&(p=o.leave),!o.leave&&o.initial&&(p=o.initial)),!p){f();return}await c(p),f()}}}const hl=typeof window!="undefined",Jk=()=>hl&&window.onpointerdown===null,Gk=()=>hl&&window.ontouchstart===null,Qk=()=>hl&&window.onmousedown===null;function eE({target:e,state:t,variants:n,apply:s}){const r=_(n),o=[],i=(...h)=>{const y=be.apply(null,h);return o.push(y),y},l=B(!1),a=B(!1),c=B(!1),u=$(()=>{let h=[];return r&&(r.hovered&&(h=[...h,...Object.keys(r.hovered)]),r.tapped&&(h=[...h,...Object.keys(r.tapped)]),r.focused&&(h=[...h,...Object.keys(r.focused)])),h}),d=$(()=>{const h={};Object.assign(h,t.value),l.value&&r.hovered&&Object.assign(h,r.hovered),a.value&&r.tapped&&Object.assign(h,r.tapped),c.value&&r.focused&&Object.assign(h,r.focused);for(const y in h)u.value.includes(y)||delete h[y];return h});r.hovered&&(i(e,"mouseenter",()=>{l.value=!0}),i(e,"mouseleave",()=>{l.value=!1,a.value=!1}),i(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(Qk()&&(i(e,"mousedown",()=>{a.value=!0}),i(e,"mouseup",()=>{a.value=!1})),Jk()&&(i(e,"pointerdown",()=>{a.value=!0}),i(e,"pointerup",()=>{a.value=!1})),Gk()&&(i(e,"touchstart",()=>{a.value=!0}),i(e,"touchend",()=>{a.value=!1}))),r.focused&&(i(e,"focus",()=>{c.value=!0}),i(e,"blur",()=>{c.value=!1}));const f=le(d,s);return{stop:()=>{o.forEach(h=>h()),f()}}}function tE({set:e,target:t,variants:n,variant:s}){const r=_(n);return{stop:le(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function nE({state:e,apply:t}){return{stop:le(e,s=>{s&&t(s)},{immediate:!0})}}function sE({target:e,variants:t,variant:n}){const s=_(t);let r=pn;if(s&&(s.visible||s.visibleOnce)){const{stop:o}=xg(e,([{isIntersecting:i}])=>{s.visible?i?n.value="visible":n.value="initial":s.visibleOnce&&(i?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=o}return{stop:r}}function rE(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=B([]);if(t.lifeCycleHooks){const{stop:r}=tE(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=nE(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=sE(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=eE(e);n.value.push(r)}const s=()=>n.value.forEach(r=>r());return Yi(s),{stop:s}}function rd(e={}){const t=Ae({...e}),n=B({});return le(t,()=>{const s={};for(const[r,o]of Object.entries(t)){const i=pl(r),l=sd(o,i);s[r]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}const oE=["","X","Y","Z"],iE=["perspective","translate","scale","rotate","skew"],od=["transformPerspective","x","y","z"];iE.forEach(e=>{oE.forEach(t=>{const n=e+t;od.push(n)})});const lE=new Set(od);function ml(e){return lE.has(e)}const aE=new Set(["originX","originY","originZ"]);function id(e){return aE.has(e)}function cE(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{ml(s)||id(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function uE(e,t){let n,s;const{state:r,style:o}=rd(),i=le(()=>rt(e),c=>{if(!!c){s=c;for(const u of Object.keys(nd))c.style[u]===null||c.style[u]===""||ml(u)||id(u)||ct(r,u,c.style[u]);n&&Object.entries(n).forEach(([u,d])=>ct(c.style,u,d)),t&&t(r)}},{immediate:!0}),l=le(o,c=>{if(!s){n=c;return}for(const u in c)ct(s.style,u,c[u])},{immediate:!0});return{style:r,stop:()=>{s=void 0,n=void 0,i(),l()}}}const fE={x:"translateX",y:"translateY",z:"translateZ"};function ld(e={},t=!0){const n=Ae({...e}),s=B("");return le(n,r=>{let o="",i=!1;t&&(r.x||r.y||r.z)&&(o+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(re.transform).join(",")}) `,i=!0);for(const[l,a]of Object.entries(r)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const c=pl(l),u=sd(a,c);o+=`${fE[l]||l}(${u}) `}t&&!i&&(o+="translateZ(0px) "),s.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function dE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[o,i]=r.split("("),a=i.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=a.length===1?a[0]:a;return{...s,[o]:c}},{})}function pE(e,t){Object.entries(dE(t)).forEach(([n,s])=>{s=parseFloat(s);const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(o=>{ct(e,o,0)});return}s.forEach((o,i)=>{ct(e,r[i],o)});return}if(n==="translateX"){ct(e,"x",s);return}if(n==="translateY"){ct(e,"y",s);return}if(n==="translateZ"){ct(e,"z",s);return}ct(e,n,s)})}function hE(e,t){let n,s;const{state:r,transform:o}=ld(),i=le(()=>rt(e),c=>{!c||(s=c,c.style.transform&&pE(r,c.style.transform),n&&(c.style.transform=n),t&&t(r))},{immediate:!0}),l=le(o,c=>{if(!s){n=c;return}s.style.transform=c},{immediate:!0});return{transform:r,stop:()=>{n=void 0,s=void 0,i(),l()}}}function mE(e,t){const n=Ae({}),s=d=>{Object.entries(d).forEach(([f,p])=>{ct(n,f,p)})},{style:r,stop:o}=uE(e,s),{transform:i,stop:l}=hE(e,s),a=le(n,d=>{Object.entries(d).forEach(([f,p])=>{const h=ml(f)?i:r;h[f]&&h[f]===p||ct(h,f,p)})},{immediate:!0,deep:!0}),c=le(()=>rt(e),d=>{!d||t&&s(t)},{immediate:!0});return{motionProperties:n,style:r,transform:i,stop:()=>{o(),l(),a(),c()}}}function gE(e={}){const t=_(e),n=B();return{state:$(()=>{if(!!n.value)return t[n.value]}),variant:n}}function vE(e,t={},n){const{motionProperties:s,stop:r}=mE(e),{variant:o,state:i}=gE(t),l=Zk(s,t),a={target:e,variant:o,variants:t,state:i,motionProperties:s,...l,stop:(u=!1)=>{}},{stop:c}=rE(a,n);return a.stop=(u=!1)=>{const d=()=>{a.stopTransitions(),r(),c()};if(!u&&t.value&&t.value.leave){const f=le(a.isAnimating,p=>{p||(f(),d())})}else d()},Yi(()=>a.stop()),Nm(()=>rt(e),u=>{!u||u!=null&&u.motionInstance&&(a.stop(),Object.assign(a,u.motionInstance))}),a}const _E=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],yE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ir(n.variants)&&(t.value={...t.value,...n.variants}),_E.forEach(s=>{if(s==="delay"){if(n&&n[s]&&mm(n[s])){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:r}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:r}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:r}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&Ir(n[s])&&(t.value[s]=n[s])}))},Io=e=>{const t=(s,r,o)=>{const i=r.value&&typeof r.value=="string"?r.value:o.key;i&&Mo[i]&&Mo[i].stop();const l=B(e||{});typeof r.value=="object"&&(l.value=r.value),yE(o,l);const a=vE(s,l);s.motionInstance=a,i&&ct(Mo,i,a)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(s,r){const{initial:o}=s.value||r&&r.props||{},i=y2((e==null?void 0:e.initial)||{},o||{});if(!i||Object.keys(i).length===0)return;const{transform:l,style:a}=cE(i),{transform:c}=ld(l),{style:u}=rd(a);return c.value&&(u.value.transform=c.value),{style:u.value}}}},bE={initial:{opacity:0},enter:{opacity:1}},xE={initial:{opacity:0},visible:{opacity:1}},wE={initial:{opacity:0},visibleOnce:{opacity:1}},kE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},EE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},SE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},PE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},$E={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ME={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},CE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},AE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},IE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},TE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},RE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},LE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},NE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},FE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},DE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},BE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},zE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},jE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},VE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},HE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},YE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},WE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},KE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},UE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},qE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},XE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},uc={__proto__:null,fade:bE,fadeVisible:xE,fadeVisibleOnce:wE,pop:kE,popVisible:EE,popVisibleOnce:SE,rollBottom:LE,rollLeft:PE,rollRight:ME,rollTop:IE,rollVisibleBottom:NE,rollVisibleLeft:$E,rollVisibleRight:CE,rollVisibleTop:TE,rollVisibleOnceBottom:FE,rollVisibleOnceLeft:OE,rollVisibleOnceRight:AE,rollVisibleOnceTop:RE,slideBottom:UE,slideLeft:DE,slideRight:jE,slideTop:YE,slideVisibleBottom:qE,slideVisibleLeft:BE,slideVisibleRight:VE,slideVisibleTop:WE,slideVisibleOnceBottom:XE,slideVisibleOnceLeft:zE,slideVisibleOnceRight:HE,slideVisibleOnceTop:KE};function ZE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const JE={install(e,t){if(e.directive("motion",Io()),!t||t&&!t.excludePresets)for(const n in uc){const s=uc[n];e.directive(`motion-${ZE(n)}`,Io(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Io(s))}}},gl="vue-starport-injection",ad="vue-starport-options",GE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},cd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var QE=Object.defineProperty,zr=Object.getOwnPropertySymbols,ud=Object.prototype.hasOwnProperty,fd=Object.prototype.propertyIsEnumerable,fc=(e,t,n)=>t in e?QE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,e5=(e,t)=>{for(var n in t||(t={}))ud.call(t,n)&&fc(e,n,t[n]);if(zr)for(var n of zr(t))fd.call(t,n)&&fc(e,n,t[n]);return e},dc=(e,t)=>{var n={};for(var s in e)ud.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&zr)for(var s of zr(e))t.indexOf(s)<0&&fd.call(e,s)&&(n[s]=e[s]);return n};const t5=ue({name:"StarportProxy",props:e5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},cd),setup(e,t){const n=W(gl),s=$(()=>n.getInstance(e.port,e.component)),r=B(),o=s.value.generateId(),i=B(!1);return s.value.isVisible||(s.value.land(),i.value=!0),fs(async()=>{s.value.el||(s.value.el=r.value,await Ke(),i.value=!0,s.value.rect.update())}),Gr(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,i.value=!1,!s.value.options.keepAlive&&(await Ke(),await Ke(),!s.value.el&&n.dispose(s.value.port))}),le(()=>e,async()=>{s.value.props&&await Ke();const l=e,{props:a}=l,c=dc(l,["props"]);s.value.props=a||{},s.value.setLocalOptions(c)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:a,mountedProps:c}=l,u=dc(l,["initialProps","mountedProps"]),d=Ws(u,(i.value?c:a)||{});return _t("div",Ws(d,{id:o,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?_t(t.slots.default):void 0)}}});var n5=Object.defineProperty,s5=Object.defineProperties,r5=Object.getOwnPropertyDescriptors,pc=Object.getOwnPropertySymbols,o5=Object.prototype.hasOwnProperty,i5=Object.prototype.propertyIsEnumerable,hc=(e,t,n)=>t in e?n5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l5=(e,t)=>{for(var n in t||(t={}))o5.call(t,n)&&hc(e,n,t[n]);if(pc)for(var n of pc(t))i5.call(t,n)&&hc(e,n,t[n]);return e},a5=(e,t)=>s5(e,r5(t));const c5=ue({name:"Starport",inheritAttrs:!0,props:cd,setup(e,t){const n=B(!1);return fs(()=>{n.value=!0}),()=>{var i,l;const s=(l=(i=t.slots).default)==null?void 0:l.call(i);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let o=r.type;return(!Ir(o)||Nn(o))&&(o={render(){return s}}),_t(t5,a5(l5({},e),{key:e.port,component:Kr(o),props:r.props}))}}});function u5(e){const t=Ae({height:0,width:0,left:0,top:0,update:s,listen:o,pause:i,margin:"0px",padding:"0px"}),n=ut?document.documentElement||document.body:void 0;function s(){if(!ut)return;const l=rt(e);if(!l)return;const{height:a,width:c,left:u,top:d}=l.getBoundingClientRect(),f=window.getComputedStyle(l),p=f.margin,h=f.padding;Object.assign(t,{height:a,width:c,left:u,top:n.scrollTop+d,margin:p,padding:h})}const r=Tu(s,{immediate:!1});function o(){!ut||(s(),r.resume())}function i(){r.pause()}return t}let f5=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const mc=f5("abcdefghijklmnopqrstuvwxyz",5);function gc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function d5(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var p5=Object.defineProperty,vc=Object.getOwnPropertySymbols,h5=Object.prototype.hasOwnProperty,m5=Object.prototype.propertyIsEnumerable,_c=(e,t,n)=>t in e?p5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,To=(e,t)=>{for(var n in t||(t={}))h5.call(t,n)&&_c(e,n,t[n]);if(vc)for(var n of vc(t))m5.call(t,n)&&_c(e,n,t[n]);return e};function g5(e,t,n={}){const s=d5(t),r=gc(s)||mc(),o=B(),i=B(null),l=B(!1),a=B(!1),c=Sd(!0),u=B({}),d=$(()=>To(To(To({},GE),n),u.value)),f=B(0);let p;c.run(()=>{p=u5(o),le(o,async S=>{S&&(a.value=!0),await Ke(),o.value||(a.value=!1)})});const h=gc(e);function y(){return`starport-${r}-${h}-${mc()}`}const b=y();return Ae({el:o,id:b,port:e,props:i,rect:p,scope:c,isLanded:l,isVisible:a,options:d,liftOffTime:f,component:t,componentName:s,componentId:r,generateId:y,setLocalOptions(S={}){u.value=JSON.parse(JSON.stringify(S))},elRef(){return o},liftOff(){!l.value||(l.value=!1,f.value=Date.now(),p.listen())},land(){l.value||(l.value=!0,p.pause())}})}function v5(e){const t=Ae(new Map);function n(r,o){let i=t.get(r);return i||(i=g5(r,o,e),t.set(r,i)),i.component=o,i}function s(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var _5=Object.defineProperty,y5=Object.defineProperties,b5=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,x5=Object.prototype.hasOwnProperty,w5=Object.prototype.propertyIsEnumerable,bc=(e,t,n)=>t in e?_5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k5=(e,t)=>{for(var n in t||(t={}))x5.call(t,n)&&bc(e,n,t[n]);if(yc)for(var n of yc(t))w5.call(t,n)&&bc(e,n,t[n]);return e},E5=(e,t)=>y5(e,b5(t));const S5=ue({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=W(gl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=$(()=>t.getInstance(e.port,e.component)),s=$(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=$(()=>{const i=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-i),a=n.value.rect,c={position:"absolute",left:0,top:0,width:`${a.width}px`,height:`${a.height}px`,margin:a.margin,padding:a.padding,transform:`translate3d(${a.left}px,${a.top}px,0px)`};return!n.value.isVisible||!n.value.el?E5(k5({},c),{zIndex:-1,display:"none"}):(n.value.isLanded?c.display="none":Object.assign(c,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),c)}),o={};return()=>{const i=!!(n.value.isLanded&&n.value.el);return _t("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},_t(Gp,{to:i?`#${s.value}`:"body",disabled:!i},_t(n.value.component,Ws(o,n.value.props))))}}}),P5=ue({name:"StarportCarrier",setup(e,{slots:t}){const n=v5(W(ad,{}));return Bn().appContext.app.provide(gl,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:i}])=>_t(S5,{key:o,port:o,component:i}))]}}});function $5(e={}){return{install(t){t.provide(ad,e),t.component("Starport",c5),t.component("StarportCarrier",P5)}}}function O5(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(JE),e.app.use($5({keepAlive:!0}))}function dt(e,t,n){var s,r;return(r=((s=e.instance)==null?void 0:s.$).provides[t])!=null?r:n}function M5(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var u,d,f,p;if(Ns.value||((u=dt(n,Is))==null?void 0:u.value))return;const s=dt(n,Pn),r=dt(n,As),o=dt(n,Go),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,a=((d=s==null?void 0:s.value)==null?void 0:d.length)||0,c=l?Jh:mo;if(s&&!((f=s==null?void 0:s.value)!=null&&f.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((p=o==null?void 0:o.value.get(n.value))!=null&&p.includes(t))){const h=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(h))}t==null||t.classList.toggle(En,!0),r&&le(r,()=>{var S;const h=(S=r==null?void 0:r.value)!=null?S:0,y=n.value!=null?h>=n.value:h>a;t.classList.contains(go)||t.classList.toggle(c,!y),i!==!1&&i!==void 0&&t.classList.toggle(c,y),t.classList.toggle(_s,!1);const b=o==null?void 0:o.value.get(h);b==null||b.forEach((w,k)=>{w.classList.toggle(hr,!1),k===b.length-1?w.classList.toggle(_s,!0):w.classList.toggle(hr,!0)}),t.classList.contains(_s)||t.classList.toggle(hr,y)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(En,!1);const s=dt(n,Pn);s!=null&&s.value&&Qo(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,a;if(Ns.value||((l=dt(n,Is))==null?void 0:l.value))return;const s=dt(n,Pn),r=dt(n,As),o=dt(n,Go),i=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),o!=null&&o.value.has(n.value)?(a=o==null?void 0:o.value.get(n.value))==null||a.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(En,!0),r&&le(r,()=>{var u,d,f;const c=((u=r.value)!=null?u:0)>=((f=(d=n.value)!=null?d:i)!=null?f:0);t.classList.contains(go)||t.classList.toggle(mo,!c),t.classList.toggle(_s,!1),t.classList.contains(_s)||t.classList.toggle(hr,c)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(En,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,l,a;if(Ns.value||((i=dt(n,Is))==null?void 0:i.value))return;const s=dt(n,Pn),r=dt(n,As),o=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((a=s==null?void 0:s.value)!=null&&a.includes(t))&&s.value.push(t),t==null||t.classList.toggle(En,!0),r&&le(r,()=>{var d;const c=(d=r==null?void 0:r.value)!=null?d:0,u=n.value!=null?c>=n.value:c>o;t.classList.toggle(mo,u),t.classList.toggle(go,u)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(En,!1);const s=dt(n,Pn);s!=null&&s.value&&Qo(s.value,t)}})}}}function C5(e,t){const n=lf(e),s=af(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:hi,next:hn,nextSlide:Js,openInEditor:m2,prev:mn,prevSlide:Gs},configs:_e,themeConfigs:$(()=>_e.themeConfig)}}function A5(){return{install(e){const t=C5(tn,Rt);e.provide(ee,Ae(t))}}}const hs=Th(v2);hs.use(bt);hs.use(Kh());hs.use(M5());hs.use(A5());O5({app:hs,router:bt});hs.mount("#app");export{ks as $,tf as A,J as B,xe as C,st as D,z0 as E,we as F,Rt as G,Fr as H,u2 as I,Eo as J,vo as K,qs as L,wo as M,Su as N,W_ as O,Xi as P,V_ as Q,Be as R,Zi as S,wf as T,X0 as U,Qe as V,et as W,Ft as X,I5 as Y,Jt as Z,Ve as _,g as a,mr as a0,nr as a1,ui as a2,v0 as a3,_0 as a4,y0 as a5,x0 as a6,Ze as a7,bu as a8,N5 as a9,Ht as aa,ot as ab,M1 as ac,Cn as ad,ku as ae,w0 as af,Gr as ag,$ as b,F as c,ue as d,ee as e,mt as f,G as g,_ as h,W as i,C0 as j,h2 as k,_e as l,qh as m,Te as n,E as o,fs as p,Ae as q,B as r,T5 as s,gn as t,R5 as u,L5 as v,le as w,K as x,Ue as y,ve as z};
