var Ah=Object.defineProperty;var wh=(n,e,t)=>e in n?Ah(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fi=(n,e,t)=>(wh(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ea(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Je={},Fi=[],Kt=()=>{},Rh=()=>!1,Ch=/^on[^a-z]/,Ss=n=>Ch.test(n),ta=n=>n.startsWith("onUpdate:"),mt=Object.assign,na=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ph=Object.prototype.hasOwnProperty,je=(n,e)=>Ph.call(n,e),Fe=Array.isArray,fr=n=>ys(n)==="[object Map]",Lh=n=>ys(n)==="[object Set]",ke=n=>typeof n=="function",gt=n=>typeof n=="string",ia=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",kc=n=>at(n)&&ke(n.then)&&ke(n.catch),Uh=Object.prototype.toString,ys=n=>Uh.call(n),Dh=n=>ys(n).slice(8,-1),Ih=n=>ys(n)==="[object Object]",ra=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ls=ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Es=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Nh=/-(\w)/g,ki=Es(n=>n.replace(Nh,(e,t)=>t?t.toUpperCase():"")),Oh=/\B([A-Z])/g,Zi=Es(n=>n.replace(Oh,"-$1").toLowerCase()),Wc=Es(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bs=Es(n=>n?`on${Wc(n)}`:""),ps=(n,e)=>!Object.is(n,e),zs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ms=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Fh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ha;const Ro=()=>Ha||(Ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?Gh(i):sa(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(gt(n))return n;if(at(n))return n}}const Bh=/;(?![^(]*\))/g,zh=/:([^]+)/,Hh=/\/\*[^]*?\*\//g;function Gh(n){const e={};return n.replace(Hh,"").split(Bh).forEach(t=>{if(t){const i=t.split(zh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oa(n){let e="";if(gt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=oa(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kh=ea(Vh);function Xc(n){return!!n||n===""}let kt;class Wh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xh(n,e=kt){e&&e.active&&e.effects.push(n)}function qh(){return kt}const aa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},qc=n=>(n.w&Bn)>0,Yc=n=>(n.n&Bn)>0,Yh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Bn},jh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];qc(r)&&!Yc(r)?r.delete(n):e[t++]=r,r.w&=~Bn,r.n&=~Bn}e.length=t}},Co=new WeakMap;let cr=0,Bn=1;const Po=30;let Xt;const ti=Symbol(""),Lo=Symbol("");class la{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Xh(this,i)}run(){if(!this.active)return this.fn();let e=Xt,t=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,Dn=!0,Bn=1<<++cr,cr<=Po?Yh(this):Ga(this),this.fn()}finally{cr<=Po&&jh(this),Bn=1<<--cr,Xt=this.parent,Dn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Dn=!0;const jc=[];function $i(){jc.push(Dn),Dn=!1}function Ji(){const n=jc.pop();Dn=n===void 0?!0:n}function Ct(n,e,t){if(Dn&&Xt){let i=Co.get(n);i||Co.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=aa()),Kc(r)}}function Kc(n,e){let t=!1;cr<=Po?Yc(n)||(n.n|=Bn,t=!qc(n)):t=!n.has(Xt),t&&(n.add(Xt),Xt.deps.push(n))}function En(n,e,t,i,r,s){const o=Co.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?ra(t)&&a.push(o.get("length")):(a.push(o.get(ti)),fr(n)&&a.push(o.get(Lo)));break;case"delete":Fe(n)||(a.push(o.get(ti)),fr(n)&&a.push(o.get(Lo)));break;case"set":fr(n)&&a.push(o.get(ti));break}if(a.length===1)a[0]&&Uo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Uo(aa(l))}}function Uo(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&Va(i);for(const i of t)i.computed||Va(i)}function Va(n,e){(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Kh=ea("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ia)),Zh=ca(),$h=ca(!1,!0),Jh=ca(!0),ka=Qh();function Qh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)Ct(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){$i();const i=Ze(this)[e].apply(this,t);return Ji(),i}}),n}function ef(n){const e=Ze(this);return Ct(e,"has",n),e.hasOwnProperty(n)}function ca(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?_f:tu:e?eu:Qc).get(i))return i;const o=Fe(i);if(!n){if(o&&je(ka,r))return Reflect.get(ka,r,s);if(r==="hasOwnProperty")return ef}const a=Reflect.get(i,r,s);return(ia(r)?Zc.has(r):Kh(r))||(n||Ct(i,"get",r),e)?a:At(a)?o&&ra(r)?a:a.value:at(a)?n?nu(a):fa(a):a}}const tf=$c(),nf=$c(!0);function $c(n=!1){return function(t,i,r,s){let o=t[i];if(vr(o)&&At(o)&&!At(r))return!1;if(!n&&(!Do(r)&&!vr(r)&&(o=Ze(o),r=Ze(r)),!Fe(t)&&At(o)&&!At(r)))return o.value=r,!0;const a=Fe(t)&&ra(i)?Number(i)<t.length:je(t,i),l=Reflect.set(t,i,r,s);return t===Ze(s)&&(a?ps(r,o)&&En(t,"set",i,r):En(t,"add",i,r)),l}}function rf(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&En(n,"delete",e,void 0),i}function sf(n,e){const t=Reflect.has(n,e);return(!ia(e)||!Zc.has(e))&&Ct(n,"has",e),t}function of(n){return Ct(n,"iterate",Fe(n)?"length":ti),Reflect.ownKeys(n)}const Jc={get:Zh,set:tf,deleteProperty:rf,has:sf,ownKeys:of},af={get:Jh,set(n,e){return!0},deleteProperty(n,e){return!0}},lf=mt({},Jc,{get:$h,set:nf}),ua=n=>n,Ts=n=>Reflect.getPrototypeOf(n);function Ur(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(e!==s&&Ct(r,"get",e),Ct(r,"get",s));const{has:o}=Ts(r),a=i?ua:t?ma:pa;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Dr(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(n!==r&&Ct(i,"has",n),Ct(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ir(n,e=!1){return n=n.__v_raw,!e&&Ct(Ze(n),"iterate",ti),Reflect.get(n,"size",n)}function Wa(n){n=Ze(n);const e=Ze(this);return Ts(e).has.call(e,n)||(e.add(n),En(e,"add",n,n)),this}function Xa(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=Ts(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?ps(e,o)&&En(t,"set",n,e):En(t,"add",n,e),this}function qa(n){const e=Ze(this),{has:t,get:i}=Ts(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&En(e,"delete",n,void 0),s}function Ya(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&En(n,"clear",void 0,void 0),t}function Nr(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?ua:n?ma:pa;return!n&&Ct(a,"iterate",ti),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Or(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=fr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ua:e?ma:pa;return!e&&Ct(s,"iterate",l?Lo:ti),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function bn(n){return function(...e){return n==="delete"?!1:this}}function cf(){const n={get(s){return Ur(this,s)},get size(){return Ir(this)},has:Dr,add:Wa,set:Xa,delete:qa,clear:Ya,forEach:Nr(!1,!1)},e={get(s){return Ur(this,s,!1,!0)},get size(){return Ir(this)},has:Dr,add:Wa,set:Xa,delete:qa,clear:Ya,forEach:Nr(!1,!0)},t={get(s){return Ur(this,s,!0)},get size(){return Ir(this,!0)},has(s){return Dr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Nr(!0,!1)},i={get(s){return Ur(this,s,!0,!0)},get size(){return Ir(this,!0)},has(s){return Dr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Or(s,!1,!1),t[s]=Or(s,!0,!1),e[s]=Or(s,!1,!0),i[s]=Or(s,!0,!0)}),[n,t,e,i]}const[uf,hf,ff,df]=cf();function ha(n,e){const t=e?n?df:ff:n?hf:uf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const pf={get:ha(!1,!1)},mf={get:ha(!1,!0)},gf={get:ha(!0,!1)},Qc=new WeakMap,eu=new WeakMap,tu=new WeakMap,_f=new WeakMap;function vf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xf(n){return n.__v_skip||!Object.isExtensible(n)?0:vf(Dh(n))}function fa(n){return vr(n)?n:da(n,!1,Jc,pf,Qc)}function Mf(n){return da(n,!1,lf,mf,eu)}function nu(n){return da(n,!0,af,gf,tu)}function da(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=xf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Bi(n){return vr(n)?Bi(n.__v_raw):!!(n&&n.__v_isReactive)}function vr(n){return!!(n&&n.__v_isReadonly)}function Do(n){return!!(n&&n.__v_isShallow)}function iu(n){return Bi(n)||vr(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function ru(n){return ms(n,"__v_skip",!0),n}const pa=n=>at(n)?fa(n):n,ma=n=>at(n)?nu(n):n;function Sf(n){Dn&&Xt&&(n=Ze(n),Kc(n.dep||(n.dep=aa())))}function yf(n,e){n=Ze(n);const t=n.dep;t&&Uo(t)}function At(n){return!!(n&&n.__v_isRef===!0)}function Ef(n){return At(n)?n.value:n}const Tf={get:(n,e,t)=>Ef(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function su(n){return Bi(n)?n:new Proxy(n,Tf)}class bf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new la(e,()=>{this._dirty||(this._dirty=!0,yf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return Sf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Af(n,e,t=!1){let i,r;const s=ke(n);return s?(i=n,r=Kt):(i=n.get,r=n.set),new bf(i,r,s||!r,t)}function In(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){bs(s,e,t)}return r}function Zt(n,e,t,i){if(ke(n)){const s=In(n,e,t,i);return s&&kc(s)&&s.catch(o=>{bs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Zt(n[s],e,t,i));return r}function bs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){In(l,null,10,[n,o,a]);return}}wf(n,t,r,i)}function wf(n,e,t,i=!0){console.error(n)}let xr=!1,Io=!1;const xt=[];let tn=0;const zi=[];let _n=null,Jn=0;const ou=Promise.resolve();let ga=null;function Rf(n){const e=ga||ou;return n?e.then(this?n.bind(this):n):e}function Cf(n){let e=tn+1,t=xt.length;for(;e<t;){const i=e+t>>>1;Mr(xt[i])<n?e=i+1:t=i}return e}function _a(n){(!xt.length||!xt.includes(n,xr&&n.allowRecurse?tn+1:tn))&&(n.id==null?xt.push(n):xt.splice(Cf(n.id),0,n),au())}function au(){!xr&&!Io&&(Io=!0,ga=ou.then(cu))}function Pf(n){const e=xt.indexOf(n);e>tn&&xt.splice(e,1)}function Lf(n){Fe(n)?zi.push(...n):(!_n||!_n.includes(n,n.allowRecurse?Jn+1:Jn))&&zi.push(n),au()}function ja(n,e=xr?tn+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function lu(n){if(zi.length){const e=[...new Set(zi)];if(zi.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((t,i)=>Mr(t)-Mr(i)),Jn=0;Jn<_n.length;Jn++)_n[Jn]();_n=null,Jn=0}}const Mr=n=>n.id==null?1/0:n.id,Uf=(n,e)=>{const t=Mr(n)-Mr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function cu(n){Io=!1,xr=!0,xt.sort(Uf);const e=Kt;try{for(tn=0;tn<xt.length;tn++){const t=xt[tn];t&&t.active!==!1&&In(t,null,14)}}finally{tn=0,xt.length=0,lu(),xr=!1,ga=null,(xt.length||zi.length)&&cu()}}function Df(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Je;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Je;f&&(r=t.map(m=>gt(m)?m.trim():m)),h&&(r=t.map(Fh))}let a,l=i[a=Bs(e)]||i[a=Bs(ki(e))];!l&&s&&(l=i[a=Bs(Zi(e))]),l&&Zt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Zt(c,n,6,r)}}function uu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=uu(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):mt(o,s),at(n)&&i.set(n,o),o)}function As(n,e){return!n||!Ss(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,Zi(e))||je(n,e))}let nn=null,hu=null;function gs(n){const e=nn;return nn=n,hu=n&&n.type.__scopeId||null,e}function If(n,e=nn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&rl(-1);const s=gs(e);let o;try{o=n(...r)}finally{gs(s),i._d&&rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Hs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:_,inheritAttrs:v}=n;let p,d;const w=gs(n);try{if(t.shapeFlag&4){const S=r||i;p=Qt(u.call(S,S,h,s,m,f,_)),d=l}else{const S=e;p=Qt(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),d=e.props?l:Nf(l)}}catch(S){pr.length=0,bs(S,n,1),p=Nn(Sr)}let M=p;if(d&&v!==!1){const S=Object.keys(d),{shapeFlag:b}=M;S.length&&b&7&&(o&&S.some(ta)&&(d=Of(d,o)),M=Wi(M,d))}return t.dirs&&(M=Wi(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),p=M,gs(w),p}const Nf=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ss(t))&&((e||(e={}))[t]=n[t]);return e},Of=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ff(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ka(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!As(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ka(i,o,c):!0:!!o;return!1}function Ka(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!As(t,s))return!0}return!1}function Bf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const zf=n=>n.__isSuspense;function Hf(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Lf(n)}const Fr={};function Gs(n,e,t){return fu(n,e,t)}function fu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Je){var a;const l=qh()===((a=Mt)==null?void 0:a.scope)?Mt:null;let c,u=!1,h=!1;if(At(n)?(c=()=>n.value,u=Do(n)):Bi(n)?(c=()=>n,i=!0):Fe(n)?(h=!0,u=n.some(S=>Bi(S)||Do(S)),c=()=>n.map(S=>{if(At(S))return S.value;if(Bi(S))return Di(S);if(ke(S))return In(S,l,2)})):ke(n)?e?c=()=>In(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Zt(n,l,3,[m])}:c=Kt,e&&i){const S=c;c=()=>Di(S())}let f,m=S=>{f=w.onStop=()=>{In(S,l,4)}},_;if(Er)if(m=Kt,e?t&&Zt(e,l,3,[c(),h?[]:void 0,m]):c(),r==="sync"){const S=Od();_=S.__watcherHandles||(S.__watcherHandles=[])}else return Kt;let v=h?new Array(n.length).fill(Fr):Fr;const p=()=>{if(w.active)if(e){const S=w.run();(i||u||(h?S.some((b,U)=>ps(b,v[U])):ps(S,v)))&&(f&&f(),Zt(e,l,3,[S,v===Fr?void 0:h&&v[0]===Fr?[]:v,m]),v=S)}else w.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),d=()=>_a(p));const w=new la(c,d);e?t?p():v=w.run():r==="post"?wt(w.run.bind(w),l&&l.suspense):w.run();const M=()=>{w.stop(),l&&l.scope&&na(l.scope.effects,w)};return _&&_.push(M),M}function Gf(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?du(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=Mt;Xi(this);const a=fu(r,s.bind(i),t);return o?Xi(o):ni(),a}function du(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Di(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))Di(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)Di(n[t],e);else if(Lh(n)||fr(n))n.forEach(t=>{Di(t,e)});else if(Ih(n))for(const t in n)Di(n[t],e);return n}function Wn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($i(),Zt(l,t,8,[n.el,a,n,e]),Ji())}}const cs=n=>!!n.type.__asyncLoader,pu=n=>n.type.__isKeepAlive;function Vf(n,e){mu(n,"a",e)}function kf(n,e){mu(n,"da",e)}function mu(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ws(e,i,t),t){let r=t.parent;for(;r&&r.parent;)pu(r.parent.vnode)&&Wf(i,e,t,r),r=r.parent}}function Wf(n,e,t,i){const r=ws(e,n,i,!0);_u(()=>{na(i[e],r)},t)}function ws(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;$i(),Xi(t);const a=Zt(e,t,n,o);return ni(),Ji(),a});return i?r.unshift(s):r.push(s),s}}const Tn=n=>(e,t=Mt)=>(!Er||n==="sp")&&ws(n,(...i)=>e(...i),t),Xf=Tn("bm"),gu=Tn("m"),qf=Tn("bu"),Yf=Tn("u"),jf=Tn("bum"),_u=Tn("um"),Kf=Tn("sp"),Zf=Tn("rtg"),$f=Tn("rtc");function Jf(n,e=Mt){ws("ec",n,e)}const Qf=Symbol.for("v-ndc"),No=n=>n?Pu(n)?ya(n)||n.proxy:No(n.parent):null,dr=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>No(n.parent),$root:n=>No(n.root),$emit:n=>n.emit,$options:n=>va(n),$forceUpdate:n=>n.f||(n.f=()=>_a(n.update)),$nextTick:n=>n.n||(n.n=Rf.bind(n.proxy)),$watch:n=>Gf.bind(n)}),Vs=(n,e)=>n!==Je&&!n.__isScriptSetup&&je(n,e),ed={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vs(i,e))return o[e]=1,i[e];if(r!==Je&&je(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return o[e]=3,s[e];if(t!==Je&&je(t,e))return o[e]=4,t[e];Oo&&(o[e]=0)}}const u=dr[e];let h,f;if(u)return e==="$attrs"&&Ct(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Je&&je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vs(r,e)?(r[e]=t,!0):i!==Je&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Je&&je(n,o)||Vs(e,o)||(a=s[0])&&je(a,o)||je(i,o)||je(dr,o)||je(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Za(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Oo=!0;function td(n){const e=va(n),t=n.proxy,i=n.ctx;Oo=!1,e.beforeCreate&&$a(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:_,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:w,destroyed:M,unmounted:S,render:b,renderTracked:U,renderTriggered:D,errorCaptured:B,serverPrefetch:E,expose:C,inheritAttrs:Q,components:fe,directives:G,filters:Y}=e;if(c&&nd(c,i,null),o)for(const W in o){const K=o[W];ke(K)&&(i[W]=K.bind(t))}if(r){const W=r.call(t,t);at(W)&&(n.data=fa(W))}if(Oo=!0,s)for(const W in s){const K=s[W],ce=ke(K)?K.bind(t,t):ke(K.get)?K.get.bind(t,t):Kt,ae=!ke(K)&&ke(K.set)?K.set.bind(t):Kt,Me=Id({get:ce,set:ae});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>Me.value,set:z=>Me.value=z})}if(a)for(const W in a)vu(a[W],i,t,W);if(l){const W=ke(l)?l.call(t):l;Reflect.ownKeys(W).forEach(K=>{ld(K,W[K])})}u&&$a(u,n,"c");function se(W,K){Fe(K)?K.forEach(ce=>W(ce.bind(t))):K&&W(K.bind(t))}if(se(Xf,h),se(gu,f),se(qf,m),se(Yf,_),se(Vf,v),se(kf,p),se(Jf,B),se($f,U),se(Zf,D),se(jf,w),se(_u,S),se(Kf,E),Fe(C))if(C.length){const W=n.exposed||(n.exposed={});C.forEach(K=>{Object.defineProperty(W,K,{get:()=>t[K],set:ce=>t[K]=ce})})}else n.exposed||(n.exposed={});b&&n.render===Kt&&(n.render=b),Q!=null&&(n.inheritAttrs=Q),fe&&(n.components=fe),G&&(n.directives=G)}function nd(n,e,t=Kt){Fe(n)&&(n=Fo(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=us(r.from||i,r.default,!0):s=us(r.from||i):s=us(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function $a(n,e,t){Zt(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vu(n,e,t,i){const r=i.includes(".")?du(t,i):()=>t[i];if(gt(n)){const s=e[n];ke(s)&&Gs(r,s)}else if(ke(n))Gs(r,n.bind(t));else if(at(n))if(Fe(n))n.forEach(s=>vu(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&Gs(r,s,n)}}function va(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_s(l,c,o,!0)),_s(l,e,o)),at(e)&&s.set(e,l),l}function _s(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_s(n,s,t,!0),r&&r.forEach(o=>_s(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=id[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const id={data:Ja,props:Qa,emits:Qa,methods:ur,computed:ur,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ur,directives:ur,watch:sd,provide:Ja,inject:rd};function Ja(n,e){return e?n?function(){return mt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function rd(n,e){return ur(Fo(n),Fo(e))}function Fo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Et(n,e){return n?[...new Set([].concat(n,e))]:e}function ur(n,e){return n?mt(Object.create(null),n,e):e}function Qa(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:mt(Object.create(null),Za(n),Za(e??{})):e}function sd(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=Et(n[i],e[i]);return t}function xu(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let od=0;function ad(n,e){return function(i,r=null){ke(i)||(i=mt({},i)),r!=null&&!at(r)&&(r=null);const s=xu(),o=new Set;let a=!1;const l=s.app={_uid:od++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Fd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...u)):ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Nn(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ya(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vs=l;try{return c()}finally{vs=null}}};return l}}let vs=null;function ld(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function us(n,e,t=!1){const i=Mt||nn;if(i||vs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:vs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}function cd(n,e,t,i=!1){const r={},s={};ms(s,Cs,1),n.propsDefaults=Object.create(null),Mu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Mf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ud(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(As(n.emitsOptions,f))continue;const m=e[f];if(l)if(je(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const _=ki(f);r[_]=Bo(l,a,_,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Mu(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!je(e,h)&&((u=Zi(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Bo(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!je(e,h))&&(delete s[h],c=!0)}c&&En(n,"set","$attrs")}function Mu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&je(r,u=ki(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:As(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||Je;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Bo(r,l,h,c[h],n,!je(c,h))}}return o}function Bo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Xi(r),i=c[t]=l.call(null,e),ni())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Zi(t))&&(i=!0))}return i}function Su(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=h=>{l=!0;const[f,m]=Su(h,e,!0);mt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,Fi),Fi;if(Fe(s))for(let u=0;u<s.length;u++){const h=ki(s[u]);el(h)&&(o[h]=Je)}else if(s)for(const u in s){const h=ki(u);if(el(h)){const f=s[u],m=o[h]=Fe(f)||ke(f)?{type:f}:mt({},f);if(m){const _=il(Boolean,m.type),v=il(String,m.type);m[0]=_>-1,m[1]=v<0||_<v,(_>-1||je(m,"default"))&&a.push(h)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function el(n){return n[0]!=="$"}function tl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function nl(n,e){return tl(n)===tl(e)}function il(n,e){return Fe(e)?e.findIndex(t=>nl(t,n)):ke(e)&&nl(e,n)?0:-1}const yu=n=>n[0]==="_"||n==="$stable",xa=n=>Fe(n)?n.map(Qt):[Qt(n)],hd=(n,e,t)=>{if(e._n)return e;const i=If((...r)=>xa(e(...r)),t);return i._c=!1,i},Eu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(yu(r))continue;const s=n[r];if(ke(s))e[r]=hd(r,s,i);else if(s!=null){const o=xa(s);e[r]=()=>o}}},Tu=(n,e)=>{const t=xa(e);n.slots.default=()=>t},fd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),ms(e,"_",t)):Eu(e,n.slots={})}else n.slots={},e&&Tu(n,e);ms(n.slots,Cs,1)},dd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Je;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(mt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Eu(e,r)),o=e}else e&&(Tu(n,e),o={default:1});if(s)for(const a in r)!yu(a)&&!(a in o)&&delete r[a]};function zo(n,e,t,i,r=!1){if(Fe(n)){n.forEach((f,m)=>zo(f,e&&(Fe(e)?e[m]:e),t,i,r));return}if(cs(i)&&!r)return;const s=i.shapeFlag&4?ya(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(gt(c)?(u[c]=null,je(h,c)&&(h[c]=null)):At(c)&&(c.value=null)),ke(l))In(l,a,12,[o,u]);else{const f=gt(l),m=At(l);if(f||m){const _=()=>{if(n.f){const v=f?je(h,l)?h[l]:u[l]:l.value;r?Fe(v)&&na(v,s):Fe(v)?v.includes(s)||v.push(s):f?(u[l]=[s],je(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,je(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,wt(_,t)):_()}}}const wt=Hf;function pd(n){return md(n)}function md(n,e){const t=Ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Kt,insertStaticContent:_}=n,v=(g,A,P,N=null,L=null,q=null,j=!1,V=null,ne=!!A.dynamicChildren)=>{if(g===A)return;g&&!rr(g,A)&&(N=Te(g),z(g,L,q,!0),g=null),A.patchFlag===-2&&(ne=!1,A.dynamicChildren=null);const{type:J,ref:pe,shapeFlag:y}=A;switch(J){case Rs:p(g,A,P,N);break;case Sr:d(g,A,P,N);break;case ks:g==null&&w(A,P,N,j);break;case vn:fe(g,A,P,N,L,q,j,V,ne);break;default:y&1?b(g,A,P,N,L,q,j,V,ne):y&6?G(g,A,P,N,L,q,j,V,ne):(y&64||y&128)&&J.process(g,A,P,N,L,q,j,V,ne,Ce)}pe!=null&&L&&zo(pe,g&&g.ref,q,A||g,!A)},p=(g,A,P,N)=>{if(g==null)i(A.el=a(A.children),P,N);else{const L=A.el=g.el;A.children!==g.children&&c(L,A.children)}},d=(g,A,P,N)=>{g==null?i(A.el=l(A.children||""),P,N):A.el=g.el},w=(g,A,P,N)=>{[g.el,g.anchor]=_(g.children,A,P,N,g.el,g.anchor)},M=({el:g,anchor:A},P,N)=>{let L;for(;g&&g!==A;)L=f(g),i(g,P,N),g=L;i(A,P,N)},S=({el:g,anchor:A})=>{let P;for(;g&&g!==A;)P=f(g),r(g),g=P;r(A)},b=(g,A,P,N,L,q,j,V,ne)=>{j=j||A.type==="svg",g==null?U(A,P,N,L,q,j,V,ne):E(g,A,L,q,j,V,ne)},U=(g,A,P,N,L,q,j,V)=>{let ne,J;const{type:pe,props:y,shapeFlag:x,transition:F,dirs:ee}=g;if(ne=g.el=o(g.type,q,y&&y.is,y),x&8?u(ne,g.children):x&16&&B(g.children,ne,null,N,L,q&&pe!=="foreignObject",j,V),ee&&Wn(g,null,N,"created"),D(ne,g,g.scopeId,j,N),y){for(const R in y)R!=="value"&&!ls(R)&&s(ne,R,null,y[R],q,g.children,N,L,ge);"value"in y&&s(ne,"value",null,y.value),(J=y.onVnodeBeforeMount)&&Jt(J,N,g)}ee&&Wn(g,null,N,"beforeMount");const oe=(!L||L&&!L.pendingBranch)&&F&&!F.persisted;oe&&F.beforeEnter(ne),i(ne,A,P),((J=y&&y.onVnodeMounted)||oe||ee)&&wt(()=>{J&&Jt(J,N,g),oe&&F.enter(ne),ee&&Wn(g,null,N,"mounted")},L)},D=(g,A,P,N,L)=>{if(P&&m(g,P),N)for(let q=0;q<N.length;q++)m(g,N[q]);if(L){let q=L.subTree;if(A===q){const j=L.vnode;D(g,j,j.scopeId,j.slotScopeIds,L.parent)}}},B=(g,A,P,N,L,q,j,V,ne=0)=>{for(let J=ne;J<g.length;J++){const pe=g[J]=V?Pn(g[J]):Qt(g[J]);v(null,pe,A,P,N,L,q,j,V)}},E=(g,A,P,N,L,q,j)=>{const V=A.el=g.el;let{patchFlag:ne,dynamicChildren:J,dirs:pe}=A;ne|=g.patchFlag&16;const y=g.props||Je,x=A.props||Je;let F;P&&Xn(P,!1),(F=x.onVnodeBeforeUpdate)&&Jt(F,P,A,g),pe&&Wn(A,g,P,"beforeUpdate"),P&&Xn(P,!0);const ee=L&&A.type!=="foreignObject";if(J?C(g.dynamicChildren,J,V,P,N,ee,q):j||K(g,A,V,null,P,N,ee,q,!1),ne>0){if(ne&16)Q(V,A,y,x,P,N,L);else if(ne&2&&y.class!==x.class&&s(V,"class",null,x.class,L),ne&4&&s(V,"style",y.style,x.style,L),ne&8){const oe=A.dynamicProps;for(let R=0;R<oe.length;R++){const te=oe[R],le=y[te],X=x[te];(X!==le||te==="value")&&s(V,te,le,X,L,g.children,P,N,ge)}}ne&1&&g.children!==A.children&&u(V,A.children)}else!j&&J==null&&Q(V,A,y,x,P,N,L);((F=x.onVnodeUpdated)||pe)&&wt(()=>{F&&Jt(F,P,A,g),pe&&Wn(A,g,P,"updated")},N)},C=(g,A,P,N,L,q,j)=>{for(let V=0;V<A.length;V++){const ne=g[V],J=A[V],pe=ne.el&&(ne.type===vn||!rr(ne,J)||ne.shapeFlag&70)?h(ne.el):P;v(ne,J,pe,null,N,L,q,j,!0)}},Q=(g,A,P,N,L,q,j)=>{if(P!==N){if(P!==Je)for(const V in P)!ls(V)&&!(V in N)&&s(g,V,P[V],null,j,A.children,L,q,ge);for(const V in N){if(ls(V))continue;const ne=N[V],J=P[V];ne!==J&&V!=="value"&&s(g,V,J,ne,j,A.children,L,q,ge)}"value"in N&&s(g,"value",P.value,N.value)}},fe=(g,A,P,N,L,q,j,V,ne)=>{const J=A.el=g?g.el:a(""),pe=A.anchor=g?g.anchor:a("");let{patchFlag:y,dynamicChildren:x,slotScopeIds:F}=A;F&&(V=V?V.concat(F):F),g==null?(i(J,P,N),i(pe,P,N),B(A.children,P,pe,L,q,j,V,ne)):y>0&&y&64&&x&&g.dynamicChildren?(C(g.dynamicChildren,x,P,L,q,j,V),(A.key!=null||L&&A===L.subTree)&&bu(g,A,!0)):K(g,A,P,pe,L,q,j,V,ne)},G=(g,A,P,N,L,q,j,V,ne)=>{A.slotScopeIds=V,g==null?A.shapeFlag&512?L.ctx.activate(A,P,N,j,ne):Y(A,P,N,L,q,j,ne):$(g,A,ne)},Y=(g,A,P,N,L,q,j)=>{const V=g.component=Rd(g,N,L);if(pu(g)&&(V.ctx.renderer=Ce),Cd(V),V.asyncDep){if(L&&L.registerDep(V,se),!g.el){const ne=V.subTree=Nn(Sr);d(null,ne,A,P)}return}se(V,g,A,P,L,q,j)},$=(g,A,P)=>{const N=A.component=g.component;if(Ff(g,A,P))if(N.asyncDep&&!N.asyncResolved){W(N,A,P);return}else N.next=A,Pf(N.update),N.update();else A.el=g.el,N.vnode=A},se=(g,A,P,N,L,q,j)=>{const V=()=>{if(g.isMounted){let{next:pe,bu:y,u:x,parent:F,vnode:ee}=g,oe=pe,R;Xn(g,!1),pe?(pe.el=ee.el,W(g,pe,j)):pe=ee,y&&zs(y),(R=pe.props&&pe.props.onVnodeBeforeUpdate)&&Jt(R,F,pe,ee),Xn(g,!0);const te=Hs(g),le=g.subTree;g.subTree=te,v(le,te,h(le.el),Te(le),g,L,q),pe.el=te.el,oe===null&&Bf(g,te.el),x&&wt(x,L),(R=pe.props&&pe.props.onVnodeUpdated)&&wt(()=>Jt(R,F,pe,ee),L)}else{let pe;const{el:y,props:x}=A,{bm:F,m:ee,parent:oe}=g,R=cs(A);if(Xn(g,!1),F&&zs(F),!R&&(pe=x&&x.onVnodeBeforeMount)&&Jt(pe,oe,A),Xn(g,!0),y&&Pe){const te=()=>{g.subTree=Hs(g),Pe(y,g.subTree,g,L,null)};R?A.type.__asyncLoader().then(()=>!g.isUnmounted&&te()):te()}else{const te=g.subTree=Hs(g);v(null,te,P,N,g,L,q),A.el=te.el}if(ee&&wt(ee,L),!R&&(pe=x&&x.onVnodeMounted)){const te=A;wt(()=>Jt(pe,oe,te),L)}(A.shapeFlag&256||oe&&cs(oe.vnode)&&oe.vnode.shapeFlag&256)&&g.a&&wt(g.a,L),g.isMounted=!0,A=P=N=null}},ne=g.effect=new la(V,()=>_a(J),g.scope),J=g.update=()=>ne.run();J.id=g.uid,Xn(g,!0),J()},W=(g,A,P)=>{A.component=g;const N=g.vnode.props;g.vnode=A,g.next=null,ud(g,A.props,N,P),dd(g,A.children,P),$i(),ja(),Ji()},K=(g,A,P,N,L,q,j,V,ne=!1)=>{const J=g&&g.children,pe=g?g.shapeFlag:0,y=A.children,{patchFlag:x,shapeFlag:F}=A;if(x>0){if(x&128){ae(J,y,P,N,L,q,j,V,ne);return}else if(x&256){ce(J,y,P,N,L,q,j,V,ne);return}}F&8?(pe&16&&ge(J,L,q),y!==J&&u(P,y)):pe&16?F&16?ae(J,y,P,N,L,q,j,V,ne):ge(J,L,q,!0):(pe&8&&u(P,""),F&16&&B(y,P,N,L,q,j,V,ne))},ce=(g,A,P,N,L,q,j,V,ne)=>{g=g||Fi,A=A||Fi;const J=g.length,pe=A.length,y=Math.min(J,pe);let x;for(x=0;x<y;x++){const F=A[x]=ne?Pn(A[x]):Qt(A[x]);v(g[x],F,P,null,L,q,j,V,ne)}J>pe?ge(g,L,q,!0,!1,y):B(A,P,N,L,q,j,V,ne,y)},ae=(g,A,P,N,L,q,j,V,ne)=>{let J=0;const pe=A.length;let y=g.length-1,x=pe-1;for(;J<=y&&J<=x;){const F=g[J],ee=A[J]=ne?Pn(A[J]):Qt(A[J]);if(rr(F,ee))v(F,ee,P,null,L,q,j,V,ne);else break;J++}for(;J<=y&&J<=x;){const F=g[y],ee=A[x]=ne?Pn(A[x]):Qt(A[x]);if(rr(F,ee))v(F,ee,P,null,L,q,j,V,ne);else break;y--,x--}if(J>y){if(J<=x){const F=x+1,ee=F<pe?A[F].el:N;for(;J<=x;)v(null,A[J]=ne?Pn(A[J]):Qt(A[J]),P,ee,L,q,j,V,ne),J++}}else if(J>x)for(;J<=y;)z(g[J],L,q,!0),J++;else{const F=J,ee=J,oe=new Map;for(J=ee;J<=x;J++){const ve=A[J]=ne?Pn(A[J]):Qt(A[J]);ve.key!=null&&oe.set(ve.key,J)}let R,te=0;const le=x-ee+1;let X=!1,be=0;const we=new Array(le);for(J=0;J<le;J++)we[J]=0;for(J=F;J<=y;J++){const ve=g[J];if(te>=le){z(ve,L,q,!0);continue}let xe;if(ve.key!=null)xe=oe.get(ve.key);else for(R=ee;R<=x;R++)if(we[R-ee]===0&&rr(ve,A[R])){xe=R;break}xe===void 0?z(ve,L,q,!0):(we[xe-ee]=J+1,xe>=be?be=xe:X=!0,v(ve,A[xe],P,null,L,q,j,V,ne),te++)}const Re=X?gd(we):Fi;for(R=Re.length-1,J=le-1;J>=0;J--){const ve=ee+J,xe=A[ve],Le=ve+1<pe?A[ve+1].el:N;we[J]===0?v(null,xe,P,Le,L,q,j,V,ne):X&&(R<0||J!==Re[R]?Me(xe,P,Le,2):R--)}}},Me=(g,A,P,N,L=null)=>{const{el:q,type:j,transition:V,children:ne,shapeFlag:J}=g;if(J&6){Me(g.component.subTree,A,P,N);return}if(J&128){g.suspense.move(A,P,N);return}if(J&64){j.move(g,A,P,Ce);return}if(j===vn){i(q,A,P);for(let y=0;y<ne.length;y++)Me(ne[y],A,P,N);i(g.anchor,A,P);return}if(j===ks){M(g,A,P);return}if(N!==2&&J&1&&V)if(N===0)V.beforeEnter(q),i(q,A,P),wt(()=>V.enter(q),L);else{const{leave:y,delayLeave:x,afterLeave:F}=V,ee=()=>i(q,A,P),oe=()=>{y(q,()=>{ee(),F&&F()})};x?x(q,ee,oe):oe()}else i(q,A,P)},z=(g,A,P,N=!1,L=!1)=>{const{type:q,props:j,ref:V,children:ne,dynamicChildren:J,shapeFlag:pe,patchFlag:y,dirs:x}=g;if(V!=null&&zo(V,null,P,g,!0),pe&256){A.ctx.deactivate(g);return}const F=pe&1&&x,ee=!cs(g);let oe;if(ee&&(oe=j&&j.onVnodeBeforeUnmount)&&Jt(oe,A,g),pe&6)Ee(g.component,P,N);else{if(pe&128){g.suspense.unmount(P,N);return}F&&Wn(g,null,A,"beforeUnmount"),pe&64?g.type.remove(g,A,P,L,Ce,N):J&&(q!==vn||y>0&&y&64)?ge(J,A,P,!1,!0):(q===vn&&y&384||!L&&pe&16)&&ge(ne,A,P),N&&ue(g)}(ee&&(oe=j&&j.onVnodeUnmounted)||F)&&wt(()=>{oe&&Jt(oe,A,g),F&&Wn(g,null,A,"unmounted")},P)},ue=g=>{const{type:A,el:P,anchor:N,transition:L}=g;if(A===vn){he(P,N);return}if(A===ks){S(g);return}const q=()=>{r(P),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(g.shapeFlag&1&&L&&!L.persisted){const{leave:j,delayLeave:V}=L,ne=()=>j(P,q);V?V(g.el,q,ne):ne()}else q()},he=(g,A)=>{let P;for(;g!==A;)P=f(g),r(g),g=P;r(A)},Ee=(g,A,P)=>{const{bum:N,scope:L,update:q,subTree:j,um:V}=g;N&&zs(N),L.stop(),q&&(q.active=!1,z(j,g,A,P)),V&&wt(V,A),wt(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},ge=(g,A,P,N=!1,L=!1,q=0)=>{for(let j=q;j<g.length;j++)z(g[j],A,P,N,L)},Te=g=>g.shapeFlag&6?Te(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),De=(g,A,P)=>{g==null?A._vnode&&z(A._vnode,null,null,!0):v(A._vnode||null,g,A,null,null,null,P),ja(),lu(),A._vnode=g},Ce={p:v,um:z,m:Me,r:ue,mt:Y,mc:B,pc:K,pbc:C,n:Te,o:n};let Xe,Pe;return e&&([Xe,Pe]=e(Ce)),{render:De,hydrate:Xe,createApp:ad(De,Xe)}}function Xn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function bu(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Pn(r[s]),a.el=o.el),t||bu(o,a)),a.type===Rs&&(a.el=o.el)}}function gd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const _d=n=>n.__isTeleport,vn=Symbol.for("v-fgt"),Rs=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),pr=[];let jt=null;function Au(n=!1){pr.push(jt=n?null:[])}function vd(){pr.pop(),jt=pr[pr.length-1]||null}let yr=1;function rl(n){yr+=n}function wu(n){return n.dynamicChildren=yr>0?jt||Fi:null,vd(),yr>0&&jt&&jt.push(n),n}function xd(n,e,t,i,r,s){return wu(Cu(n,e,t,i,r,s,!0))}function Md(n,e,t,i,r){return wu(Nn(n,e,t,i,r,!0))}function Sd(n){return n?n.__v_isVNode===!0:!1}function rr(n,e){return n.type===e.type&&n.key===e.key}const Cs="__vInternal",Ru=({key:n})=>n??null,hs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||At(n)||ke(n)?{i:nn,r:n,k:e,f:!!t}:n:null);function Cu(n,e=null,t=null,i=0,r=null,s=n===vn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ru(e),ref:e&&hs(e),scopeId:hu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return a?(Ma(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),yr>0&&!o&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const Nn=yd;function yd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Qf)&&(n=Sr),Sd(n)){const a=Wi(n,e,!0);return t&&Ma(a,t),yr>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag|=-2,a}if(Dd(n)&&(n=n.__vccOpts),e){e=Ed(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=oa(a)),at(l)&&(iu(l)&&!Fe(l)&&(l=mt({},l)),e.style=sa(l))}const o=gt(n)?1:zf(n)?128:_d(n)?64:at(n)?4:ke(n)?2:0;return Cu(n,e,t,i,r,o,s,!0)}function Ed(n){return n?iu(n)||Cs in n?mt({},n):n:null}function Wi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?bd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Ru(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(hs(e)):[r,hs(e)]:hs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wi(n.ssContent),ssFallback:n.ssFallback&&Wi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Td(n=" ",e=0){return Nn(Rs,null,n,e)}function Qt(n){return n==null||typeof n=="boolean"?Nn(Sr):Fe(n)?Nn(vn,null,n.slice()):typeof n=="object"?Pn(n):Nn(Rs,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wi(n)}function Ma(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ma(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Cs in e)?e._ctx=nn:r===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),i&64?(t=16,e=[Td(e)]):t=8);n.children=e,n.shapeFlag|=t}function bd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=oa([e.class,i.class]));else if(r==="style")e.style=sa([e.style,i.style]);else if(Ss(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Jt(n,e,t,i=null){Zt(n,e,7,[t,i])}const Ad=xu();let wd=0;function Rd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ad,s={uid:wd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Su(i,r),emitsOptions:uu(i,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:i.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Df.bind(null,s),n.ce&&n.ce(s),s}let Mt=null,Sa,di,sl="__VUE_INSTANCE_SETTERS__";(di=Ro()[sl])||(di=Ro()[sl]=[]),di.push(n=>Mt=n),Sa=n=>{di.length>1?di.forEach(e=>e(n)):di[0](n)};const Xi=n=>{Sa(n),n.scope.on()},ni=()=>{Mt&&Mt.scope.off(),Sa(null)};function Pu(n){return n.vnode.shapeFlag&4}let Er=!1;function Cd(n,e=!1){Er=e;const{props:t,children:i}=n.vnode,r=Pu(n);cd(n,t,r,e),fd(n,i);const s=r?Pd(n,e):void 0;return Er=!1,s}function Pd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ru(new Proxy(n.ctx,ed));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Ud(n):null;Xi(n),$i();const s=In(i,n,0,[n.props,r]);if(Ji(),ni(),kc(s)){if(s.then(ni,ni),e)return s.then(o=>{ol(n,o,e)}).catch(o=>{bs(o,n,0)});n.asyncDep=s}else ol(n,s,e)}else Lu(n,e)}function ol(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=su(e)),Lu(n,t)}let al;function Lu(n,e,t){const i=n.type;if(!n.render){if(!e&&al&&!i.render){const r=i.template||va(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=mt(mt({isCustomElement:s,delimiters:a},o),l);i.render=al(r,c)}}n.render=i.render||Kt}Xi(n),$i(),td(n),Ji(),ni()}function Ld(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ct(n,"get","$attrs"),e[t]}}))}function Ud(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ld(n)},slots:n.slots,emit:n.emit,expose:e}}function ya(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(su(ru(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in dr)return dr[t](n)},has(e,t){return t in e||t in dr}}))}function Dd(n){return ke(n)&&"__vccOpts"in n}const Id=(n,e)=>Af(n,e,Er),Nd=Symbol.for("v-scx"),Od=()=>us(Nd),Fd="3.3.4",Bd="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,ll=Qn&&Qn.createElement("template"),zd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Qn.createElementNS(Bd,n):Qn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qn.createTextNode(n),createComment:n=>Qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ll.innerHTML=i?`<svg>${n}</svg>`:n;const a=ll.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Gd(n,e,t){const i=n.style,r=gt(t);if(t&&!r){if(e&&!gt(e))for(const s in e)t[s]==null&&Ho(i,s,"");for(const s in t)Ho(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const cl=/\s*!important$/;function Ho(n,e,t){if(Fe(t))t.forEach(i=>Ho(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vd(n,e);cl.test(t)?n.setProperty(Zi(i),t.replace(cl,""),"important"):n[i]=t}}const ul=["Webkit","Moz","ms"],Ws={};function Vd(n,e){const t=Ws[e];if(t)return t;let i=ki(e);if(i!=="filter"&&i in n)return Ws[e]=i;i=Wc(i);for(let r=0;r<ul.length;r++){const s=ul[r]+i;if(s in n)return Ws[e]=s}return e}const hl="http://www.w3.org/1999/xlink";function kd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(hl,e.slice(6,e.length)):n.setAttributeNS(hl,e,t);else{const s=kh(e);t==null||s&&!Xc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Wd(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Xc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Xd(n,e,t,i){n.addEventListener(e,t,i)}function qd(n,e,t,i){n.removeEventListener(e,t,i)}function Yd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=jd(e);if(i){const c=s[e]=$d(i,r);Xd(n,a,c,l)}else o&&(qd(n,a,o,l),s[e]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function jd(n){let e;if(fl.test(n)){e={};let i;for(;i=n.match(fl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zi(n.slice(2)),e]}let Xs=0;const Kd=Promise.resolve(),Zd=()=>Xs||(Kd.then(()=>Xs=0),Xs=Date.now());function $d(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zt(Jd(i,t.value),e,5,[i])};return t.value=n,t.attached=Zd(),t}function Jd(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const dl=/^on[a-z]/,Qd=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Hd(n,i,r):e==="style"?Gd(n,t,i):Ss(e)?ta(e)||Yd(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ep(n,e,i,r))?Wd(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kd(n,e,i,r))};function ep(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&dl.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||dl.test(e)&&gt(t)?!1:e in n}const tp=mt({patchProp:Qd},zd);let pl;function np(){return pl||(pl=pd(tp))}const ip=(...n)=>{const e=np().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=rp(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function rp(n){return gt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="153",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,ml=1,op=2,Uu=1,ap=2,gn=3,zn=0,Rt=1,xn=2,On=0,Hi=1,gl=2,_l=3,vl=4,lp=5,Ui=100,cp=101,up=102,xl=103,Ml=104,hp=200,fp=201,dp=202,pp=203,Du=204,Iu=205,mp=206,gp=207,_p=208,vp=209,xp=210,Mp=0,Sp=1,yp=2,Go=3,Ep=4,Tp=5,bp=6,Ap=7,Nu=0,wp=1,Rp=2,Sn=0,Cp=1,Pp=2,Lp=3,Up=4,Dp=5,Ou=300,qi=301,Yi=302,Vo=303,ko=304,Ps=306,Wo=1e3,qt=1001,Xo=1002,bt=1003,Sl=1004,qs=1005,Ot=1006,Ip=1007,Tr=1008,Fn=1009,Np=1010,Op=1011,Ta=1012,Fu=1013,Ln=1014,Un=1015,br=1016,Bu=1017,zu=1018,ii=1020,Fp=1021,Yt=1023,Bp=1024,zp=1025,ri=1026,ji=1027,Hp=1028,Hu=1029,Gp=1030,Gu=1031,Vu=1033,Ys=33776,js=33777,Ks=33778,Zs=33779,yl=35840,El=35841,Tl=35842,bl=35843,Vp=36196,Al=37492,wl=37496,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Ul=37812,Dl=37813,Il=37814,Nl=37815,Ol=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,Gl=37821,$s=36492,kp=36283,Vl=36284,kl=36285,Wl=36286,ku=3e3,si=3001,Wp=3200,Xp=3201,Wu=0,qp=1,oi="",ze="srgb",on="srgb-linear",Xu="display-p3",Js=7680,Yp=519,jp=512,Kp=513,Zp=514,$p=515,Jp=516,Qp=517,em=518,tm=519,Xl=35044,ql="300 es",qo=1035,Mn=2e3,xs=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Yo=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function nm(n,e){return(n%e+e)%e}function eo(n,e,t){return(1-t)*n+t*e}function Yl(n){return(n&n-1)===0&&n!==0}function jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=r[0],p=r[3],d=r[6],w=r[1],M=r[4],S=r[7],b=r[2],U=r[5],D=r[8];return s[0]=o*v+a*w+l*b,s[3]=o*p+a*M+l*U,s[6]=o*d+a*S+l*D,s[1]=c*v+u*w+h*b,s[4]=c*p+u*M+h*U,s[7]=c*d+u*S+h*D,s[2]=f*v+m*w+_*b,s[5]=f*p+m*M+_*U,s[8]=f*d+m*S+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Ge;function qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const jl={};function mr(n){n in jl||(jl[n]=!0,console.warn(n))}function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const im=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),rm=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sm(n){return n.convertSRGBToLinear().applyMatrix3(rm)}function om(n){return n.applyMatrix3(im).convertLinearToSRGB()}const am={[on]:n=>n,[ze]:n=>n.convertSRGBToLinear(),[Xu]:sm},lm={[on]:n=>n,[ze]:n=>n.convertLinearToSRGB(),[Xu]:om},zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return on},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=am[e],r=lm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let gi;class Yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Ms("canvas")),gi.width=e.width,gi.height=e.height;const i=gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cm=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(io(r[o].image)):s.push(io(r[o]))}else s=io(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=qt,r=qt,s=Ot,o=Tr,a=Yt,l=Fn,c=It.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Qi(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?ze:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?si:ku}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?ze:oi}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Ou;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(m+1)/2,b=(d+1)/2,U=(u+f)/4,D=(h+v)/4,B=(_+p)/4;return M>S&&M>b?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=U/i,s=D/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=U/r,s=B/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=D/s,r=B/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends hi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===si?ze:oi),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ju(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ku extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*v,w=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const b=Math.sqrt(M),U=Math.atan2(b,d*w);p=Math.sin(p*U)/b,a=Math.sin(a*U)/b}const S=a*w;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+v*S,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new O,Kl=new li;class er{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_i.copy(e.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)un.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else r.boundingBox===null&&r.computeBoundingBox(),_i.copy(r.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),zr.subVectors(this.max,sr),vi.subVectors(e.a,sr),xi.subVectors(e.b,sr),Mi.subVectors(e.c,sr),An.subVectors(xi,vi),wn.subVectors(Mi,xi),qn.subVectors(vi,Mi);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-qn.z,qn.y,An.z,0,-An.x,wn.z,0,-wn.x,qn.z,0,-qn.x,-An.y,An.x,0,-wn.y,wn.x,0,-qn.y,qn.x,0];return!so(t,vi,xi,Mi,zr)||(t=[1,0,0,0,1,0,0,0,1],!so(t,vi,xi,Mi,zr))?!1:(Hr.crossVectors(An,wn),t=[Hr.x,Hr.y,Hr.z],so(t,vi,xi,Mi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new O,new O,new O,new O,new O,new O,new O,new O],un=new O,_i=new er,vi=new O,xi=new O,Mi=new O,An=new O,wn=new O,qn=new O,sr=new O,zr=new O,Hr=new O,Yn=new O;function so(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yn.fromArray(n,s);const a=r.x*Math.abs(Yn.x)+r.y*Math.abs(Yn.y)+r.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=i.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fm=new er,or=new O,oo=new O;class ba{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(oo)),this.expandByPoint(or.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new O,ao=new O,Gr=new O,Rn=new O,lo=new O,Vr=new O,co=new O;class Zu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ao.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=Rn.dot(this.direction),l=-Rn.dot(Gr),c=Rn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ao).addScaledVector(Gr,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,s){lo.subVectors(t,e),Vr.subVectors(i,e),co.crossVectors(lo,Vr);let o=this.direction.dot(co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(Rn,Vr));if(l<0)return null;const c=a*this.direction.dot(lo.cross(Rn));if(c<0||l+c>o)return null;const u=-a*Rn.dot(co);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,pm)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Cn.crossVectors(i,Ut),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Cn.crossVectors(i,Ut)),Cn.normalize(),kr.crossVectors(Ut,Cn),r[0]=Cn.x,r[4]=kr.x,r[8]=Ut.x,r[1]=Cn.y,r[5]=kr.y,r[9]=Ut.y,r[2]=Cn.z,r[6]=kr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],w=i[3],M=i[7],S=i[11],b=i[15],U=r[0],D=r[4],B=r[8],E=r[12],C=r[1],Q=r[5],fe=r[9],G=r[13],Y=r[2],$=r[6],se=r[10],W=r[14],K=r[3],ce=r[7],ae=r[11],Me=r[15];return s[0]=o*U+a*C+l*Y+c*K,s[4]=o*D+a*Q+l*$+c*ce,s[8]=o*B+a*fe+l*se+c*ae,s[12]=o*E+a*G+l*W+c*Me,s[1]=u*U+h*C+f*Y+m*K,s[5]=u*D+h*Q+f*$+m*ce,s[9]=u*B+h*fe+f*se+m*ae,s[13]=u*E+h*G+f*W+m*Me,s[2]=_*U+v*C+p*Y+d*K,s[6]=_*D+v*Q+p*$+d*ce,s[10]=_*B+v*fe+p*se+d*ae,s[14]=_*E+v*G+p*W+d*Me,s[3]=w*U+M*C+S*Y+b*K,s[7]=w*D+M*Q+S*$+b*ce,s[11]=w*B+M*fe+S*se+b*ae,s[15]=w*E+M*G+S*W+b*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],w=h*p*c-v*f*c+v*l*m-a*p*m-h*l*d+a*f*d,M=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,S=u*v*c-_*h*c+_*a*m-o*v*m-u*a*d+o*h*d,b=_*h*l-u*v*l-_*a*f+o*v*f+u*a*p-o*h*p,U=t*w+i*M+r*S+s*b;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=w*D,e[1]=(v*f*s-h*p*s-v*r*m+i*p*m+h*r*d-i*f*d)*D,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*d+i*l*d)*D,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*D,e[4]=M*D,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*d+t*f*d)*D,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*D,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*D,e[8]=S*D,e[9]=(_*h*s-u*v*s-_*i*m+t*v*m+u*i*d-t*h*d)*D,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*d+t*a*d)*D,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*D,e[12]=b*D,e[13]=(u*v*r-_*h*r+_*i*f-t*v*f-u*i*p+t*h*p)*D,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*p-t*a*p)*D,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,v=o*u,p=o*h,d=a*h,w=l*c,M=l*u,S=l*h,b=i.x,U=i.y,D=i.z;return r[0]=(1-(v+d))*b,r[1]=(m+S)*b,r[2]=(_-M)*b,r[3]=0,r[4]=(m-S)*U,r[5]=(1-(f+d))*U,r[6]=(p+w)*U,r[7]=0,r[8]=(_+M)*D,r[9]=(p-w)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,u=1/o,h=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Mn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(a===Mn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xs)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*u;let _,v;if(a===Mn)_=(o+s)*h,v=-2*h;else if(a===xs)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new O,Ht=new ot,dm=new O(0,0,0),pm=new O(1,1,1),Cn=new O,kr=new O,Ut=new O,Zl=new ot,$l=new li;class Ls{constructor(e=0,t=0,i=0,r=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mm=0;const Jl=new O,yi=new li,fn=new ot,Wr=new O,ar=new O,gm=new O,_m=new li,Ql=new O(1,0,0),ec=new O(0,1,0),tc=new O(0,0,1),vm={type:"added"},nc={type:"removed"};class pt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new O,t=new Ls,i=new li,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ge}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ar,Wr,this.up):fn.lookAt(Wr,ar,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(fn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(nc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new O(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new O,dn=new O,uo=new O,pn=new O,Ei=new O,Ti=new O,ic=new O,ho=new O,fo=new O,po=new O;let Xr=!1;class Wt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),dn.subVectors(i,t),uo.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(dn),l=Gt.dot(uo),c=dn.dot(dn),u=dn.dot(uo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,pn),l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),dn.subVectors(e,t),Gt.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Gt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,i),Ti.subVectors(s,i),ho.subVectors(e,i);const l=Ei.dot(ho),c=Ti.dot(ho);if(l<=0&&c<=0)return t.copy(i);fo.subVectors(e,r);const u=Ei.dot(fo),h=Ti.dot(fo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ei,o);po.subVectors(e,s);const m=Ei.dot(po),_=Ti.dot(po);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ti,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return ic.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(ic,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Ei,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xm=0;class Cr extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Hi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Du,this.blendDst=Iu,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},qr={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=nm(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){const i=$u[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return zt.fromWorkingColorSpace(vt.copy(this),e),Math.round(ft(vt.r*255,0,255))*65536+Math.round(ft(vt.g*255,0,255))*256+Math.round(ft(vt.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,s=vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=ze){zt.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(qr);const i=eo(Vt.h,qr.h,t),r=eo(Vt.s,qr.s,t),s=eo(Vt.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ye;Ye.NAMES=$u;class Ju extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new O,Yr=new de;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xl,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qu extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eh extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mm=0;const Nt=new ot,go=new pt,bi=new O,Dt=new er,lr=new er,ht=new O;class Hn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?eh:Qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Dt.min,lr.min),Dt.expandByPoint(ht),ht.addVectors(Dt.max,lr.max),Dt.expandByPoint(ht)):(Dt.expandByPoint(lr.min),Dt.expandByPoint(lr.max))}Dt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(e,c),ht.add(bi)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new O,u[C]=new O;const h=new O,f=new O,m=new O,_=new de,v=new de,p=new de,d=new O,w=new O;function M(C,Q,fe){h.fromArray(r,C*3),f.fromArray(r,Q*3),m.fromArray(r,fe*3),_.fromArray(o,C*2),v.fromArray(o,Q*2),p.fromArray(o,fe*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const G=1/(v.x*p.y-p.x*v.y);isFinite(G)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(G),w.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(G),c[C].add(d),c[Q].add(d),c[fe].add(d),u[C].add(w),u[Q].add(w),u[fe].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,Q=S.length;C<Q;++C){const fe=S[C],G=fe.start,Y=fe.count;for(let $=G,se=G+Y;$<se;$+=3)M(i[$+0],i[$+1],i[$+2])}const b=new O,U=new O,D=new O,B=new O;function E(C){D.fromArray(s,C*3),B.copy(D);const Q=c[C];b.copy(Q),b.sub(D.multiplyScalar(D.dot(Q))).normalize(),U.crossVectors(B,Q);const G=U.dot(u[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=G}for(let C=0,Q=S.length;C<Q;++C){const fe=S[C],G=fe.start,Y=fe.count;for(let $=G,se=G+Y;$<se;$+=3)E(i[$+0]),E(i[$+1]),E(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new ot,jn=new Zu,jr=new ba,sc=new O,Ai=new O,wi=new O,Ri=new O,_o=new O,Kr=new O,Zr=new de,$r=new de,Jr=new de,oc=new O,ac=new O,lc=new O,Qr=new O,es=new O;class rn extends pt{constructor(e=new Hn,t=new Ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(_o.fromBufferAttribute(h,e),o?Kr.addScaledVector(_o,u):Kr.addScaledVector(_o.sub(t),u))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jn.copy(e.ray).recast(e.near),!(jr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(jr,sc)===null||jn.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(rc.copy(s).invert(),jn.copy(e.ray).applyMatrix4(rc),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,b=M;S<b;S+=3){const U=a.getX(S),D=a.getX(S+1),B=a.getX(S+2);r=ts(this,d,e,i,c,u,h,U,D,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);r=ts(this,o,e,i,c,u,h,w,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,b=M;S<b;S+=3){const U=S,D=S+1,B=S+2;r=ts(this,d,e,i,c,u,h,U,D,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=p,M=p+1,S=p+2;r=ts(this,o,e,i,c,u,h,w,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Sm(n,e,t,i,r,s,o,a){let l;if(e.side===Rt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zn,a),l===null)return null;es.copy(a),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,wi),n.getVertexPosition(c,Ri);const u=Sm(n,e,t,i,Ai,wi,Ri,Qr);if(u){r&&(Zr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),u.uv=Wt.getInterpolation(Qr,Ai,wi,Ri,Zr,$r,Jr,new de)),s&&(Zr.fromBufferAttribute(s,a),$r.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),u.uv1=Wt.getInterpolation(Qr,Ai,wi,Ri,Zr,$r,Jr,new de),u.uv2=u.uv1),o&&(oc.fromBufferAttribute(o,a),ac.fromBufferAttribute(o,l),lc.fromBufferAttribute(o,c),u.normal=Wt.getInterpolation(Qr,Ai,wi,Ri,oc,ac,lc,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Wt.getNormal(Ai,wi,Ri,h.normal),u.face=h}return u}class tr extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(h,2));function _(v,p,d,w,M,S,b,U,D,B,E){const C=S/D,Q=b/B,fe=S/2,G=b/2,Y=U/2,$=D+1,se=B+1;let W=0,K=0;const ce=new O;for(let ae=0;ae<se;ae++){const Me=ae*Q-G;for(let z=0;z<$;z++){const ue=z*C-fe;ce[v]=ue*w,ce[p]=Me*M,ce[d]=Y,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[d]=U>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(z/D),h.push(1-ae/B),W+=1}}for(let ae=0;ae<B;ae++)for(let Me=0;Me<D;Me++){const z=f+Me+$*ae,ue=f+Me+$*(ae+1),he=f+(Me+1)+$*(ae+1),Ee=f+(Me+1)+$*ae;l.push(z,ue,Ee),l.push(ue,he,Ee),K+=6}a.addGroup(m,K,E),m+=K,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const r in i)e[r]=i[r]}return e}function ym(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function th(n){return n.getRenderTarget()===null?n.outputColorSpace:on}const Em={clone:Ki,merge:Tt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nh extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class Am extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Ft(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new Ft(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const o=new Ft(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ih extends It{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?ze:oi),this.texture=new ih(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tr(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:On});s.uniforms.tEquirect.value=t;const o=new rn(r,s),a=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Ot),new Am(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const vo=new O,Rm=new O,Cm=new Ge;class Zn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vo.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cm.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new ba,ns=new O;class wa{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],w=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-d).normalize(),i[1].setComponents(l+s,f+c,p+m,S+d).normalize(),i[2].setComponents(l+o,f+u,p+_,S+w).normalize(),i[3].setComponents(l-o,f-u,p-_,S-w).normalize(),i[4].setComponents(l-a,f-h,p-v,S-M).normalize(),t===Mn)i[5].setComponents(l+a,f+h,p+v,S+M).normalize();else if(t===xs)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ra extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const w=d*f-o;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-w,0),v.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const M=w+c*d,S=w+c*(d+1),b=w+1+c*(d+1),U=w+1+c*d;m.push(M,S,U),m.push(S,b,U)}this.setIndex(m),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm="vec3 transformed = vec3( position );",Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ig=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,U_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,I_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,B_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:Lm,alphamap_pars_fragment:Um,alphatest_fragment:Dm,alphatest_pars_fragment:Im,aomap_fragment:Nm,aomap_pars_fragment:Om,begin_vertex:Fm,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:jm,color_vertex:Km,common:Zm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,encodings_fragment:ig,encodings_pars_fragment:rg,envmap_fragment:sg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:lg,envmap_physical_pars_fragment:Mg,envmap_vertex:cg,fog_vertex:ug,fog_pars_vertex:hg,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:xg,lights_toon_fragment:Sg,lights_toon_pars_fragment:yg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Tg,lights_physical_fragment:bg,lights_physical_pars_fragment:Ag,lights_fragment_begin:wg,lights_fragment_maps:Rg,lights_fragment_end:Cg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Dg,map_fragment:Ig,map_pars_fragment:Ng,map_particle_fragment:Og,map_particle_pars_fragment:Fg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:kg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:Yg,normal_vertex:jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Qg,output_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:r_,dithering_pars_fragment:s_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:u_,shadowmask_pars_fragment:h_,skinbase_vertex:f_,skinning_pars_vertex:d_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:__,tonemapping_fragment:v_,tonemapping_pars_fragment:x_,transmission_fragment:M_,transmission_pars_fragment:S_,uv_pars_fragment:y_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:b_,background_vert:A_,background_frag:w_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:P_,cube_frag:L_,depth_vert:U_,depth_frag:D_,distanceRGBA_vert:I_,distanceRGBA_frag:N_,equirect_vert:O_,equirect_frag:F_,linedashed_vert:B_,linedashed_frag:z_,meshbasic_vert:H_,meshbasic_frag:G_,meshlambert_vert:V_,meshlambert_frag:k_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:Y_,meshphong_vert:j_,meshphong_frag:K_,meshphysical_vert:Z_,meshphysical_frag:$_,meshtoon_vert:J_,meshtoon_frag:Q_,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:rv,sprite_frag:sv},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},en={basic:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Tt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Tt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Tt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Tt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Tt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Tt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Tt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Tt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Tt([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Tt([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const is={r:0,b:0,g:0};function ov(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let w=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),w=!0),n.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),w=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),w=!0;break}(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ps)?(u===void 0&&(u=new rn(new tr(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ki(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.colorSpace!==ze,(h!==M||f!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new rn(new Ra(2,2),new ci({name:"BackgroundMaterial",uniforms:Ki(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(is,th(n)),i.buffers.color.setClear(is.r,is.g,is.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function av(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(Y,$,se,W,K){let ce=!1;if(o){const ae=v(W,se,$);c!==ae&&(c=ae,m(c.object)),ce=d(Y,W,se,K),ce&&w(Y,W,se,K)}else{const ae=$.wireframe===!0;(c.geometry!==W.id||c.program!==se.id||c.wireframe!==ae)&&(c.geometry=W.id,c.program=se.id,c.wireframe=ae,ce=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,B(Y,$,se,W),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(Y){return i.isWebGL2?n.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function _(Y){return i.isWebGL2?n.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function v(Y,$,se){const W=se.wireframe===!0;let K=a[Y.id];K===void 0&&(K={},a[Y.id]=K);let ce=K[$.id];ce===void 0&&(ce={},K[$.id]=ce);let ae=ce[W];return ae===void 0&&(ae=p(f()),ce[W]=ae),ae}function p(Y){const $=[],se=[],W=[];for(let K=0;K<r;K++)$[K]=0,se[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:se,attributeDivisors:W,object:Y,attributes:{},index:null}}function d(Y,$,se,W){const K=c.attributes,ce=$.attributes;let ae=0;const Me=se.getAttributes();for(const z in Me)if(Me[z].location>=0){const he=K[z];let Ee=ce[z];if(Ee===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(Ee=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(Ee=Y.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;ae++}return c.attributesNum!==ae||c.index!==W}function w(Y,$,se,W){const K={},ce=$.attributes;let ae=0;const Me=se.getAttributes();for(const z in Me)if(Me[z].location>=0){let he=ce[z];he===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(he=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(he=Y.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),K[z]=Ee,ae++}c.attributes=K,c.attributesNum=ae,c.index=W}function M(){const Y=c.newAttributes;for(let $=0,se=Y.length;$<se;$++)Y[$]=0}function S(Y){b(Y,0)}function b(Y,$){const se=c.newAttributes,W=c.enabledAttributes,K=c.attributeDivisors;se[Y]=1,W[Y]===0&&(n.enableVertexAttribArray(Y),W[Y]=1),K[Y]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,$),K[Y]=$)}function U(){const Y=c.newAttributes,$=c.enabledAttributes;for(let se=0,W=$.length;se<W;se++)$[se]!==Y[se]&&(n.disableVertexAttribArray(se),$[se]=0)}function D(Y,$,se,W,K,ce,ae){ae===!0?n.vertexAttribIPointer(Y,$,se,K,ce):n.vertexAttribPointer(Y,$,se,W,K,ce)}function B(Y,$,se,W){if(i.isWebGL2===!1&&(Y.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const K=W.attributes,ce=se.getAttributes(),ae=$.defaultAttributeValues;for(const Me in ce){const z=ce[Me];if(z.location>=0){let ue=K[Me];if(ue===void 0&&(Me==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),Me==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor)),ue!==void 0){const he=ue.normalized,Ee=ue.itemSize,ge=t.get(ue);if(ge===void 0)continue;const Te=ge.buffer,De=ge.type,Ce=ge.bytesPerElement,Xe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||ue.gpuType===Fu);if(ue.isInterleavedBufferAttribute){const Pe=ue.data,g=Pe.stride,A=ue.offset;if(Pe.isInstancedInterleavedBuffer){for(let P=0;P<z.locationSize;P++)b(z.location+P,Pe.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let P=0;P<z.locationSize;P++)S(z.location+P);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let P=0;P<z.locationSize;P++)D(z.location+P,Ee/z.locationSize,De,he,g*Ce,(A+Ee/z.locationSize*P)*Ce,Xe)}else{if(ue.isInstancedBufferAttribute){for(let Pe=0;Pe<z.locationSize;Pe++)b(z.location+Pe,ue.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<z.locationSize;Pe++)S(z.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Pe=0;Pe<z.locationSize;Pe++)D(z.location+Pe,Ee/z.locationSize,De,he,Ee*Ce,Ee/z.locationSize*Pe*Ce,Xe)}}else if(ae!==void 0){const he=ae[Me];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(z.location,he);break;case 3:n.vertexAttrib3fv(z.location,he);break;case 4:n.vertexAttrib4fv(z.location,he);break;default:n.vertexAttrib1fv(z.location,he)}}}}U()}function E(){fe();for(const Y in a){const $=a[Y];for(const se in $){const W=$[se];for(const K in W)_(W[K].object),delete W[K];delete $[se]}delete a[Y]}}function C(Y){if(a[Y.id]===void 0)return;const $=a[Y.id];for(const se in $){const W=$[se];for(const K in W)_(W[K].object),delete W[K];delete $[se]}delete a[Y.id]}function Q(Y){for(const $ in a){const se=a[$];if(se[Y.id]===void 0)continue;const W=se[Y.id];for(const K in W)_(W[K].object),delete W[K];delete se[Y.id]}}function fe(){G(),u=!0,c!==l&&(c=l,m(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:fe,resetDefaultState:G,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:Q,initAttributes:M,enableAttribute:S,disableUnusedAttributes:U}}function lv(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function cv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,S=o||e.has("OES_texture_float"),b=M&&S,U=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:U}}function uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,M=w*4;let S=d.clippingState||null;l.value=S,S=u(_,f,M,m);for(let b=0;b!==M;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,S=m;M!==v;++M,S+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function hv(n){let e=new WeakMap;function t(o,a){return a===Vo?o.mapping=qi:a===ko&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vo||a===ko)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wm(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sh extends nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,cc=[.125,.215,.35,.446,.526,.582],ei=20,xo=new sh,uc=new Ye;let Mo=null;const $n=(1+Math.sqrt(5))/2,Li=1/$n,hc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,$n,Li),new O(0,$n,-Li),new O(Li,0,$n),new O(-Li,0,$n),new O($n,Li,0),new O(-$n,Li,0)];class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:br,format:Yt,colorSpace:on,depthBuffer:!1},r=dc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(s)),this._blurMaterial=dv(s,e,t)}return r}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,r){const a=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(uc),u.toneMapping=Sn,u.autoClear=!1;const m=new Ju({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new rn(new tr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(uc),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;rs(r,w*M,d>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hc[(r-1)%hc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):ei;p>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const d=[];let w=0;for(let D=0;D<ei;++D){const B=D/v,E=Math.exp(-B*B/2);d.push(E),D===0?w+=E:D<p&&(w+=2*E)}for(let D=0;D<d.length;D++)d[D]=d[D]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[r],b=3*S*(r>M-Ii?r-M+Ii:0),U=4*(this._cubeSize-S);rs(t,b,U,3*S,2*S),l.setRenderTarget(t),l.render(h,xo)}}function fv(n){const e=[],t=[],i=[];let r=n;const s=n-Ii+1+cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ii?l=cc[o-n+Ii-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,w=new Float32Array(v*_*m),M=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let U=0;U<m;U++){const D=U%3*2/3-1,B=U>2?0:-1,E=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];w.set(E,v*_*U),M.set(f,p*_*U);const C=[U,U,U,U,U,U];S.set(C,d*_*U)}const b=new Hn;b.setAttribute("position",new sn(w,v)),b.setAttribute("uv",new sn(M,p)),b.setAttribute("faceIndex",new sn(S,d)),e.push(b),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dc(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dv(n,e,t){const i=new Float32Array(ei),r=new O(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function pc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function mc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vo||l===ko,u=l===qi||l===Yi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new fc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new fc(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gv(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let M=0,S=w.length;M<S;M+=3){const b=w[M+0],U=w[M+1],D=w[M+2];f.push(b,U,U,D,D,b)}}else{const w=_.array;v=_.version;for(let M=0,S=w.length/3-1;M<S;M+=3){const b=M+0,U=M+1,D=M+2;f.push(b,U,U,D,D,b)}}const p=new(qu(f)?eh:Qu)(f,1);p.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _v(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xv(n,e){return n[0]-e[0]}function Mv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let $=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let E=0;M===!0&&(E=1),S===!0&&(E=2),b===!0&&(E=3);let C=u.attributes.position.count*E,Q=1;C>e.maxTextureSize&&(Q=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const fe=new Float32Array(C*Q*4*v),G=new Ku(fe,C,Q,v);G.type=Un,G.needsUpdate=!0;const Y=E*4;for(let se=0;se<v;se++){const W=U[se],K=D[se],ce=B[se],ae=C*Q*4*se;for(let Me=0;Me<W.count;Me++){const z=Me*Y;M===!0&&(o.fromBufferAttribute(W,Me),fe[ae+z+0]=o.x,fe[ae+z+1]=o.y,fe[ae+z+2]=o.z,fe[ae+z+3]=0),S===!0&&(o.fromBufferAttribute(K,Me),fe[ae+z+4]=o.x,fe[ae+z+5]=o.y,fe[ae+z+6]=o.z,fe[ae+z+7]=0),b===!0&&(o.fromBufferAttribute(ce,Me),fe[ae+z+8]=o.x,fe[ae+z+9]=o.y,fe[ae+z+10]=o.z,fe[ae+z+11]=ce.itemSize===4?o.w:1)}}p={count:v,texture:G,size:new de(C,Q)},s.set(u,p),u.addEventListener("dispose",$)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const w=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let S=0;S<_;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<_;S++){const b=v[S];b[0]=S,b[1]=f[S]}v.sort(Mv);for(let S=0;S<8;S++)S<_&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(xv);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const b=a[S],U=b[0],D=b[1];U!==Number.MAX_SAFE_INTEGER&&D?(p&&u.getAttribute("morphTarget"+S)!==p[U]&&u.setAttribute("morphTarget"+S,p[U]),d&&u.getAttribute("morphNormal"+S)!==d[U]&&u.setAttribute("morphNormal"+S,d[U]),r[S]=D,w+=D):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function yv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const oh=new It,ah=new Ku,lh=new hm,ch=new ih,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),Mc=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Us(n,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Mc.set(i),n.uniformMatrix2fv(this.addr,!1,Mc),ct(t,i)}}function Rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;xc.set(i),n.uniformMatrix3fv(this.addr,!1,xc),ct(t,i)}}function Cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;vc.set(i),n.uniformMatrix4fv(this.addr,!1,vc),ct(t,i)}}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function Iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function Bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||oh,r)}function zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lh,r)}function Hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ch,r)}function Gv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ah,r)}function Vv(n){switch(n){case 5126:return Ev;case 35664:return Tv;case 35665:return bv;case 35666:return Av;case 35674:return wv;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Uv;case 35669:case 35673:return Dv;case 5125:return Iv;case 36294:return Nv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}function kv(n,e){n.uniform1fv(this.addr,e)}function Wv(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Xv(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function qv(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Yv(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jv(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kv(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zv(n,e){n.uniform1iv(this.addr,e)}function $v(n,e){n.uniform2iv(this.addr,e)}function Jv(n,e){n.uniform3iv(this.addr,e)}function Qv(n,e){n.uniform4iv(this.addr,e)}function ex(n,e){n.uniform1uiv(this.addr,e)}function tx(n,e){n.uniform2uiv(this.addr,e)}function nx(n,e){n.uniform3uiv(this.addr,e)}function ix(n,e){n.uniform4uiv(this.addr,e)}function rx(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||oh,s[o])}function sx(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lh,s[o])}function ox(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ch,s[o])}function ax(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ah,s[o])}function lx(n){switch(n){case 5126:return kv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return $v;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}class cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Vv(t.type)}}class ux{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=lx(t.type)}}class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Sc(n,e){n.seq.push(e),n.map[e.id]=e}function fx(n,e,t){const i=n.name,r=i.length;for(So.lastIndex=0;;){const s=So.exec(i),o=So.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sc(t,c===void 0?new cx(a,n,e):new ux(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new hx(a),Sc(t,h)),t=h}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let dx=0;function px(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mx(n){switch(n){case on:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+px(n.getShaderSource(e),o)}else return r}function gx(n,e){const t=mx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _x(n,e){let t;switch(e){case Cp:t="Linear";break;case Pp:t="Reinhard";break;case Lp:t="OptimizedCineon";break;case Up:t="ACESFilmic";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function xx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hr(n){return n!==""}function Tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(n){return n.replace(Sx,yx)}function yx(n,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ko(t)}const Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(Ex,Tx)}function Tx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nu:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function Cx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Px(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bx(t),c=Ax(t),u=wx(t),h=Rx(t),f=Cx(t),m=t.isWebGL2?"":vx(t),_=xx(s),v=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),d.length>0&&(d+=`
`)):(p=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),d=[m,wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?He.tonemapping_pars_fragment:"",t.toneMapping!==Sn?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=Ko(o),o=Tc(o,t),o=bc(o,t),a=Ko(a),a=Tc(a,t),a=bc(a,t),o=Ac(o),a=Ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=w+p+o,S=w+d+a,b=yc(r,r.VERTEX_SHADER,M),U=yc(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,b),r.attachShader(v,U),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),C=r.getShaderInfoLog(b).trim(),Q=r.getShaderInfoLog(U).trim();let fe=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,U);else{const Y=Ec(r,b,"vertex"),$=Ec(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+Y+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(C===""||Q==="")&&(G=!1);G&&(this.diagnostics={runnable:fe,programLog:E,vertexShader:{log:C,prefix:p},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(b),r.deleteShader(U);let D;this.getUniforms=function(){return D===void 0&&(D=new fs(r,v)),D};let B;return this.getAttributes=function(){return B===void 0&&(B=Mx(r,v)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=U,this}let Lx=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dx(e),t.set(e,i)),i}}class Dx{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Ix(n,e,t,i,r,s,o){const a=new Aa,l=new Ux,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,C,Q,fe,G){const Y=fe.fog,$=G.geometry,se=E.isMeshStandardMaterial?fe.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||se),K=W&&W.mapping===Ps?W.image.height:null,ce=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Me=ae!==void 0?ae.length:0;let z=0;$.morphAttributes.position!==void 0&&(z=1),$.morphAttributes.normal!==void 0&&(z=2),$.morphAttributes.color!==void 0&&(z=3);let ue,he,Ee,ge;if(ce){const it=en[ce];ue=it.vertexShader,he=it.fragmentShader}else ue=E.vertexShader,he=E.fragmentShader,l.update(E),Ee=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const Te=n.getRenderTarget(),De=G.isInstancedMesh===!0,Ce=!!E.map,Xe=!!E.matcap,Pe=!!W,g=!!E.aoMap,A=!!E.lightMap,P=!!E.bumpMap,N=!!E.normalMap,L=!!E.displacementMap,q=!!E.emissiveMap,j=!!E.metalnessMap,V=!!E.roughnessMap,ne=E.anisotropy>0,J=E.clearcoat>0,pe=E.iridescence>0,y=E.sheen>0,x=E.transmission>0,F=ne&&!!E.anisotropyMap,ee=J&&!!E.clearcoatMap,oe=J&&!!E.clearcoatNormalMap,R=J&&!!E.clearcoatRoughnessMap,te=pe&&!!E.iridescenceMap,le=pe&&!!E.iridescenceThicknessMap,X=y&&!!E.sheenColorMap,be=y&&!!E.sheenRoughnessMap,we=!!E.specularMap,Re=!!E.specularColorMap,ve=!!E.specularIntensityMap,xe=x&&!!E.transmissionMap,Le=x&&!!E.thicknessMap,We=!!E.gradientMap,I=!!E.alphaMap,Se=E.alphaTest>0,Z=!!E.extensions,me=!!$.attributes.uv1,ye=!!$.attributes.uv2,Ke=!!$.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:he,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:De,instancingColor:De&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:on,map:Ce,matcap:Xe,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:K,aoMap:g,lightMap:A,bumpMap:P,normalMap:N,displacementMap:f&&L,emissiveMap:q,normalMapObjectSpace:N&&E.normalMapType===qp,normalMapTangentSpace:N&&E.normalMapType===Wu,metalnessMap:j,roughnessMap:V,anisotropy:ne,anisotropyMap:F,clearcoat:J,clearcoatMap:ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:R,iridescence:pe,iridescenceMap:te,iridescenceThicknessMap:le,sheen:y,sheenColorMap:X,sheenRoughnessMap:be,specularMap:we,specularColorMap:Re,specularIntensityMap:ve,transmission:x,transmissionMap:xe,thicknessMap:Le,gradientMap:We,opaque:E.transparent===!1&&E.blending===Hi,alphaMap:I,alphaTest:Se,combine:E.combine,mapUv:Ce&&v(E.map.channel),aoMapUv:g&&v(E.aoMap.channel),lightMapUv:A&&v(E.lightMap.channel),bumpMapUv:P&&v(E.bumpMap.channel),normalMapUv:N&&v(E.normalMap.channel),displacementMapUv:L&&v(E.displacementMap.channel),emissiveMapUv:q&&v(E.emissiveMap.channel),metalnessMapUv:j&&v(E.metalnessMap.channel),roughnessMapUv:V&&v(E.roughnessMap.channel),anisotropyMapUv:F&&v(E.anisotropyMap.channel),clearcoatMapUv:ee&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:X&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(E.sheenRoughnessMap.channel),specularMapUv:we&&v(E.specularMap.channel),specularColorMapUv:Re&&v(E.specularColorMap.channel),specularIntensityMapUv:ve&&v(E.specularIntensityMap.channel),transmissionMapUv:xe&&v(E.transmissionMap.channel),thicknessMapUv:Le&&v(E.thicknessMap.channel),alphaMapUv:I&&v(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(N||ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:ye,vertexUv3s:Ke,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Ce||I),fog:!!Y,useFog:E.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:E.toneMapped?n.toneMapping:Sn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xn,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Z&&E.extensions.derivatives===!0,extensionFragDepth:Z&&E.extensions.fragDepth===!0,extensionDrawBuffers:Z&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)C.push(Q),C.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(w(C,E),M(C,E),C.push(n.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function w(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function M(E,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),E.push(a.mask)}function S(E){const C=_[E.type];let Q;if(C){const fe=en[C];Q=Em.clone(fe.uniforms)}else Q=E.uniforms;return Q}function b(E,C){let Q;for(let fe=0,G=c.length;fe<G;fe++){const Y=c[fe];if(Y.cacheKey===C){Q=Y,++Q.usedTimes;break}}return Q===void 0&&(Q=new Px(n,C,E,s),c.push(Q)),Q}function U(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function D(E){l.remove(E)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:U,releaseShaderCache:D,programs:c,dispose:B}}function Nx(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,_,v,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function a(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Ox),i.length>1&&i.sort(f||Rc),r.length>1&&r.sort(f||Rc)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Fx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cc,n.set(i,[o])):r>=s.length?(o=new Cc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function zx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hx=0;function Gx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vx(n,e){const t=new Bx,i=zx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new ot,a=new ot;function l(u,h){let f=0,m=0,_=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let v=0,p=0,d=0,w=0,M=0,S=0,b=0,U=0,D=0,B=0;u.sort(Gx);const E=h===!0?Math.PI:1;for(let Q=0,fe=u.length;Q<fe;Q++){const G=u[Q],Y=G.color,$=G.intensity,se=G.distance,W=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=Y.r*$*E,m+=Y.g*$*E,_+=Y.b*$*E;else if(G.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(G.sh.coefficients[K],$);else if(G.isDirectionalLight){const K=t.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*E),G.castShadow){const ce=G.shadow,ae=i.get(G);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.directionalShadow[v]=ae,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=G.shadow.matrix,S++}r.directional[v]=K,v++}else if(G.isSpotLight){const K=t.get(G);K.position.setFromMatrixPosition(G.matrixWorld),K.color.copy(Y).multiplyScalar($*E),K.distance=se,K.coneCos=Math.cos(G.angle),K.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),K.decay=G.decay,r.spot[d]=K;const ce=G.shadow;if(G.map&&(r.spotLightMap[D]=G.map,D++,ce.updateMatrices(G),G.castShadow&&B++),r.spotLightMatrix[d]=ce.matrix,G.castShadow){const ae=i.get(G);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.spotShadow[d]=ae,r.spotShadowMap[d]=W,U++}d++}else if(G.isRectAreaLight){const K=t.get(G);K.color.copy(Y).multiplyScalar($),K.halfWidth.set(G.width*.5,0,0),K.halfHeight.set(0,G.height*.5,0),r.rectArea[w]=K,w++}else if(G.isPointLight){const K=t.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*E),K.distance=G.distance,K.decay=G.decay,G.castShadow){const ce=G.shadow,ae=i.get(G);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,ae.shadowCameraNear=ce.camera.near,ae.shadowCameraFar=ce.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=G.shadow.matrix,b++}r.point[p]=K,p++}else if(G.isHemisphereLight){const K=t.get(G);K.skyColor.copy(G.color).multiplyScalar($*E),K.groundColor.copy(G.groundColor).multiplyScalar($*E),r.hemi[M]=K,M++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==v||C.pointLength!==p||C.spotLength!==d||C.rectAreaLength!==w||C.hemiLength!==M||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==U||C.numSpotMaps!==D)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=w,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=U+D-B,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=B,C.directionalLength=v,C.pointLength=p,C.spotLength=d,C.rectAreaLength=w,C.hemiLength=M,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=U,C.numSpotMaps=D,r.version=Hx++)}function c(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const S=u[w];if(S.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),f++}else if(S.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Pc(n,e){const t=new Vx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kx(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Pc(n,e),t.set(s,[l])):o>=a.length?(l=new Pc(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Wx extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jx(n,e,t){let i=new wa;const r=new de,s=new de,o=new dt,a=new Wx({depthPacking:Xp}),l=new Xx,c={},u=t.maxTextureSize,h={[zn]:Rt,[Rt]:zn,[xn]:xn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:qx,fragmentShader:Yx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let d=this.type;this.render=function(b,U,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const B=n.getRenderTarget(),E=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(On),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const fe=d!==gn&&this.type===gn,G=d===gn&&this.type!==gn;for(let Y=0,$=b.length;Y<$;Y++){const se=b[Y],W=se.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const K=W.getFrameExtents();if(r.multiply(K),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,W.mapSize.y=s.y)),W.map===null||fe===!0||G===!0){const ae=this.type!==gn?{minFilter:bt,magFilter:bt}:{};W.map!==null&&W.map.dispose(),W.map=new ai(r.x,r.y,ae),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ce=W.getViewportCount();for(let ae=0;ae<ce;ae++){const Me=W.getViewport(ae);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),Q.viewport(o),W.updateMatrices(se,ae),i=W.getFrustum(),S(U,D,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&w(W,D),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(B,E,C)};function w(b,U){const D=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(U,null,D,f,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(U,null,D,m,v,null)}function M(b,U,D,B){let E=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)E=C;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=E.uuid,fe=U.uuid;let G=c[Q];G===void 0&&(G={},c[Q]=G);let Y=G[fe];Y===void 0&&(Y=E.clone(),G[fe]=Y),E=Y}if(E.visible=U.visible,E.wireframe=U.wireframe,B===gn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:h[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=n.properties.get(E);Q.light=D}return E}function S(b,U,D,B,E){if(b.visible===!1)return;if(b.layers.test(U.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===gn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const fe=e.update(b),G=b.material;if(Array.isArray(G)){const Y=fe.groups;for(let $=0,se=Y.length;$<se;$++){const W=Y[$],K=G[W.materialIndex];if(K&&K.visible){const ce=M(b,K,B,E);n.renderBufferDirect(D,null,fe,ce,b,W)}}}else if(G.visible){const Y=M(b,G,B,E);n.renderBufferDirect(D,null,fe,Y,b,null)}}const Q=b.children;for(let fe=0,G=Q.length;fe<G;fe++)S(Q[fe],U,D,B,E)}}function Kx(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const Se=new dt;let Z=null;const me=new dt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!I&&(n.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){I=ye},setClear:function(ye,Ke,et,it,Gn){Gn===!0&&(ye*=it,Ke*=it,et*=it),Se.set(ye,Ke,et,it),me.equals(Se)===!1&&(n.clearColor(ye,Ke,et,it),me.copy(Se))},reset:function(){I=!1,Z=null,me.set(-1,0,0,0)}}}function s(){let I=!1,Se=null,Z=null,me=null;return{setTest:function(ye){ye?Te(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ye){Se!==ye&&!I&&(n.depthMask(ye),Se=ye)},setFunc:function(ye){if(Z!==ye){switch(ye){case Mp:n.depthFunc(n.NEVER);break;case Sp:n.depthFunc(n.ALWAYS);break;case yp:n.depthFunc(n.LESS);break;case Go:n.depthFunc(n.LEQUAL);break;case Ep:n.depthFunc(n.EQUAL);break;case Tp:n.depthFunc(n.GEQUAL);break;case bp:n.depthFunc(n.GREATER);break;case Ap:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ye}},setLocked:function(ye){I=ye},setClear:function(ye){me!==ye&&(n.clearDepth(ye),me=ye)},reset:function(){I=!1,Se=null,Z=null,me=null}}}function o(){let I=!1,Se=null,Z=null,me=null,ye=null,Ke=null,et=null,it=null,Gn=null;return{setTest:function(tt){I||(tt?Te(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!I&&(n.stencilMask(tt),Se=tt)},setFunc:function(tt,$t,St){(Z!==tt||me!==$t||ye!==St)&&(n.stencilFunc(tt,$t,St),Z=tt,me=$t,ye=St)},setOp:function(tt,$t,St){(Ke!==tt||et!==$t||it!==St)&&(n.stencilOp(tt,$t,St),Ke=tt,et=$t,it=St)},setLocked:function(tt){I=tt},setClear:function(tt){Gn!==tt&&(n.clearStencil(tt),Gn=tt)},reset:function(){I=!1,Se=null,Z=null,me=null,ye=null,Ke=null,et=null,it=null,Gn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,w=null,M=null,S=null,b=null,U=null,D=null,B=null,E=!1,C=null,Q=null,fe=null,G=null,Y=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,W=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=W>=2);let ce=null,ae={};const Me=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),ue=new dt().fromArray(Me),he=new dt().fromArray(z);function Ee(I,Se,Z,me){const ye=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(I,Ke),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<Z;et++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Se+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Ke}const ge={};ge[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(n.DEPTH_TEST),l.setFunc(Go),L(!1),q(ml),Te(n.CULL_FACE),P(On);function Te(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function De(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Ce(I,Se){return m[I]!==Se?(n.bindFramebuffer(I,Se),m[I]=Se,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Se),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Xe(I,Se){let Z=v,me=!1;if(I)if(Z=_.get(Se),Z===void 0&&(Z=[],_.set(Se,Z)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(Z.length!==ye.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,et=ye.length;Ke<et;Ke++)Z[Ke]=n.COLOR_ATTACHMENT0+Ke;Z.length=ye.length,me=!0}}else Z[0]!==n.COLOR_ATTACHMENT0&&(Z[0]=n.COLOR_ATTACHMENT0,me=!0);else Z[0]!==n.BACK&&(Z[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Pe(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const g={[Ui]:n.FUNC_ADD,[cp]:n.FUNC_SUBTRACT,[up]:n.FUNC_REVERSE_SUBTRACT};if(i)g[xl]=n.MIN,g[Ml]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(g[xl]=I.MIN_EXT,g[Ml]=I.MAX_EXT)}const A={[hp]:n.ZERO,[fp]:n.ONE,[dp]:n.SRC_COLOR,[Du]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[mp]:n.DST_ALPHA,[pp]:n.ONE_MINUS_SRC_COLOR,[Iu]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA};function P(I,Se,Z,me,ye,Ke,et,it){if(I===On){d===!0&&(De(n.BLEND),d=!1);return}if(d===!1&&(Te(n.BLEND),d=!0),I!==lp){if(I!==w||it!==E){if((M!==Ui||U!==Ui)&&(n.blendEquation(n.FUNC_ADD),M=Ui,U=Ui),it)switch(I){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,b=null,D=null,B=null,w=I,E=it}return}ye=ye||Se,Ke=Ke||Z,et=et||me,(Se!==M||ye!==U)&&(n.blendEquationSeparate(g[Se],g[ye]),M=Se,U=ye),(Z!==S||me!==b||Ke!==D||et!==B)&&(n.blendFuncSeparate(A[Z],A[me],A[Ke],A[et]),S=Z,b=me,D=Ke,B=et),w=I,E=!1}function N(I,Se){I.side===xn?De(n.CULL_FACE):Te(n.CULL_FACE);let Z=I.side===Rt;Se&&(Z=!Z),L(Z),I.blending===Hi&&I.transparent===!1?P(On):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const me=I.stencilWrite;c.setTest(me),me&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(I){C!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),C=I)}function q(I){I!==sp?(Te(n.CULL_FACE),I!==Q&&(I===ml?n.cullFace(n.BACK):I===op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),Q=I}function j(I){I!==fe&&(se&&n.lineWidth(I),fe=I)}function V(I,Se,Z){I?(Te(n.POLYGON_OFFSET_FILL),(G!==Se||Y!==Z)&&(n.polygonOffset(Se,Z),G=Se,Y=Z)):De(n.POLYGON_OFFSET_FILL)}function ne(I){I?Te(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function J(I){I===void 0&&(I=n.TEXTURE0+$-1),ce!==I&&(n.activeTexture(I),ce=I)}function pe(I,Se,Z){Z===void 0&&(ce===null?Z=n.TEXTURE0+$-1:Z=ce);let me=ae[Z];me===void 0&&(me={type:void 0,texture:void 0},ae[Z]=me),(me.type!==I||me.texture!==Se)&&(ce!==Z&&(n.activeTexture(Z),ce=Z),n.bindTexture(I,Se||ge[I]),me.type=I,me.texture=Se)}function y(){const I=ae[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function ve(I){he.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function xe(I,Se){let Z=h.get(Se);Z===void 0&&(Z=new WeakMap,h.set(Se,Z));let me=Z.get(I);me===void 0&&(me=n.getUniformBlockIndex(Se,I.name),Z.set(I,me))}function Le(I,Se){const me=h.get(Se).get(I);u.get(Se)!==me&&(n.uniformBlockBinding(Se,me,I.__bindingPointIndex),u.set(Se,me))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ce=null,ae={},m={},_=new WeakMap,v=[],p=null,d=!1,w=null,M=null,S=null,b=null,U=null,D=null,B=null,E=!1,C=null,Q=null,fe=null,G=null,Y=null,ue.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:De,bindFramebuffer:Ce,drawBuffers:Xe,useProgram:Pe,setBlending:P,setMaterial:N,setFlipSided:L,setCullFace:q,setLineWidth:j,setPolygonOffset:V,setScissorTest:ne,activeTexture:J,bindTexture:pe,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:be,texImage3D:we,updateUBOMapping:xe,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:X,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:R,compressedTexSubImage3D:te,scissor:Re,viewport:ve,reset:We}}function Zx(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(y,x){return d?new OffscreenCanvas(y,x):Ms("canvas")}function M(y,x,F,ee){let oe=1;if((y.width>ee||y.height>ee)&&(oe=ee/Math.max(y.width,y.height)),oe<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const R=x?jo:Math.floor,te=R(oe*y.width),le=R(oe*y.height);v===void 0&&(v=w(te,le));const X=F?w(te,le):v;return X.width=te,X.height=le,X.getContext("2d").drawImage(y,0,0,te,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+te+"x"+le+")."),X}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function S(y){return Yl(y.width)&&Yl(y.height)}function b(y){return a?!1:y.wrapS!==qt||y.wrapT!==qt||y.minFilter!==bt&&y.minFilter!==Ot}function U(y,x){return y.generateMipmaps&&x&&y.minFilter!==bt&&y.minFilter!==Ot}function D(y){n.generateMipmap(y)}function B(y,x,F,ee,oe=!1){if(a===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let R=x;return x===n.RED&&(F===n.FLOAT&&(R=n.R32F),F===n.HALF_FLOAT&&(R=n.R16F),F===n.UNSIGNED_BYTE&&(R=n.R8)),x===n.RG&&(F===n.FLOAT&&(R=n.RG32F),F===n.HALF_FLOAT&&(R=n.RG16F),F===n.UNSIGNED_BYTE&&(R=n.RG8)),x===n.RGBA&&(F===n.FLOAT&&(R=n.RGBA32F),F===n.HALF_FLOAT&&(R=n.RGBA16F),F===n.UNSIGNED_BYTE&&(R=ee===ze&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)),(R===n.R16F||R===n.R32F||R===n.RG16F||R===n.RG32F||R===n.RGBA16F||R===n.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function E(y,x,F){return U(y,F)===!0||y.isFramebufferTexture&&y.minFilter!==bt&&y.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){return y===bt||y===Sl||y===qs?n.NEAREST:n.LINEAR}function Q(y){const x=y.target;x.removeEventListener("dispose",Q),G(x),x.isVideoTexture&&_.delete(x)}function fe(y){const x=y.target;x.removeEventListener("dispose",fe),$(x)}function G(y){const x=i.get(y);if(x.__webglInit===void 0)return;const F=y.source,ee=p.get(F);if(ee){const oe=ee[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&Y(y),Object.keys(ee).length===0&&p.delete(F)}i.remove(y)}function Y(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const F=y.source,ee=p.get(F);delete ee[x.__cacheKey],o.memory.textures--}function $(y){const x=y.texture,F=i.get(y),ee=i.get(x);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(F.__webglFramebuffer[oe]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let oe=0;oe<F.__webglColorRenderbuffer.length;oe++)F.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[oe]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let oe=0,R=x.length;oe<R;oe++){const te=i.get(x[oe]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(x[oe])}i.remove(x),i.remove(y)}let se=0;function W(){se=0}function K(){const y=se;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),se+=1,y}function ce(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function ae(y,x){const F=i.get(y);if(y.isVideoTexture&&J(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const ee=y.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(F,y,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function Me(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Ce(F,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function z(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Ce(F,y,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function ue(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Xe(F,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const he={[Wo]:n.REPEAT,[qt]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},Ee={[bt]:n.NEAREST,[Sl]:n.NEAREST_MIPMAP_NEAREST,[qs]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Ip]:n.LINEAR_MIPMAP_NEAREST,[Tr]:n.LINEAR_MIPMAP_LINEAR},ge={[jp]:n.NEVER,[tm]:n.ALWAYS,[Kp]:n.LESS,[$p]:n.LEQUAL,[Zp]:n.EQUAL,[em]:n.GEQUAL,[Jp]:n.GREATER,[Qp]:n.NOTEQUAL};function Te(y,x,F){if(F?(n.texParameteri(y,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,he[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Ee[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Ee[x.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==qt||x.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,C(x.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==bt&&x.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===bt||x.minFilter!==qs&&x.minFilter!==Tr||x.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(y,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function De(y,x){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",Q));const ee=x.source;let oe=p.get(ee);oe===void 0&&(oe={},p.set(ee,oe));const R=ce(x);if(R!==y.__cacheKey){oe[R]===void 0&&(oe[R]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),oe[R].usedTimes++;const te=oe[y.__cacheKey];te!==void 0&&(oe[y.__cacheKey].usedTimes--,te.usedTimes===0&&Y(x)),y.__cacheKey=R,y.__webglTexture=oe[R].texture}return F}function Ce(y,x,F){let ee=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=n.TEXTURE_3D);const oe=De(y,x),R=x.source;t.bindTexture(ee,y.__webglTexture,n.TEXTURE0+F);const te=i.get(R);if(R.version!==te.__version||oe===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const le=b(x)&&S(x.image)===!1;let X=M(x.image,le,!1,u);X=pe(x,X);const be=S(X)||a,we=s.convert(x.format,x.colorSpace);let Re=s.convert(x.type),ve=B(x.internalFormat,we,Re,x.colorSpace);Te(ee,x,be);let xe;const Le=x.mipmaps,We=a&&x.isVideoTexture!==!0,I=te.__version===void 0||oe===!0,Se=E(x,X,be);if(x.isDepthTexture)ve=n.DEPTH_COMPONENT,a?x.type===Un?ve=n.DEPTH_COMPONENT32F:x.type===Ln?ve=n.DEPTH_COMPONENT24:x.type===ii?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:x.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ri&&ve===n.DEPTH_COMPONENT&&x.type!==Ta&&x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ln,Re=s.convert(x.type)),x.format===ji&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,x.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ii,Re=s.convert(x.type))),I&&(We?t.texStorage2D(n.TEXTURE_2D,1,ve,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,ve,X.width,X.height,0,we,Re,null));else if(x.isDataTexture)if(Le.length>0&&be){We&&I&&t.texStorage2D(n.TEXTURE_2D,Se,ve,Le[0].width,Le[0].height);for(let Z=0,me=Le.length;Z<me;Z++)xe=Le[Z],We?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,we,Re,xe.data):t.texImage2D(n.TEXTURE_2D,Z,ve,xe.width,xe.height,0,we,Re,xe.data);x.generateMipmaps=!1}else We?(I&&t.texStorage2D(n.TEXTURE_2D,Se,ve,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,we,Re,X.data)):t.texImage2D(n.TEXTURE_2D,0,ve,X.width,X.height,0,we,Re,X.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ve,Le[0].width,Le[0].height,X.depth);for(let Z=0,me=Le.length;Z<me;Z++)xe=Le[Z],x.format!==Yt?we!==null?We?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,X.depth,we,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ve,xe.width,xe.height,X.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,X.depth,we,Re,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ve,xe.width,xe.height,X.depth,0,we,Re,xe.data)}else{We&&I&&t.texStorage2D(n.TEXTURE_2D,Se,ve,Le[0].width,Le[0].height);for(let Z=0,me=Le.length;Z<me;Z++)xe=Le[Z],x.format!==Yt?we!==null?We?t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,xe.width,xe.height,we,Re,xe.data):t.texImage2D(n.TEXTURE_2D,Z,ve,xe.width,xe.height,0,we,Re,xe.data)}else if(x.isDataArrayTexture)We?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ve,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,we,Re,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,X.width,X.height,X.depth,0,we,Re,X.data);else if(x.isData3DTexture)We?(I&&t.texStorage3D(n.TEXTURE_3D,Se,ve,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,we,Re,X.data)):t.texImage3D(n.TEXTURE_3D,0,ve,X.width,X.height,X.depth,0,we,Re,X.data);else if(x.isFramebufferTexture){if(I)if(We)t.texStorage2D(n.TEXTURE_2D,Se,ve,X.width,X.height);else{let Z=X.width,me=X.height;for(let ye=0;ye<Se;ye++)t.texImage2D(n.TEXTURE_2D,ye,ve,Z,me,0,we,Re,null),Z>>=1,me>>=1}}else if(Le.length>0&&be){We&&I&&t.texStorage2D(n.TEXTURE_2D,Se,ve,Le[0].width,Le[0].height);for(let Z=0,me=Le.length;Z<me;Z++)xe=Le[Z],We?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,we,Re,xe):t.texImage2D(n.TEXTURE_2D,Z,ve,we,Re,xe);x.generateMipmaps=!1}else We?(I&&t.texStorage2D(n.TEXTURE_2D,Se,ve,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Re,X)):t.texImage2D(n.TEXTURE_2D,0,ve,we,Re,X);U(x,be)&&D(ee),te.__version=R.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Xe(y,x,F){if(x.image.length!==6)return;const ee=De(y,x),oe=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const R=i.get(oe);if(oe.version!==R.__version||ee===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,X=[];for(let Z=0;Z<6;Z++)!te&&!le?X[Z]=M(x.image[Z],!1,!0,c):X[Z]=le?x.image[Z].image:x.image[Z],X[Z]=pe(x,X[Z]);const be=X[0],we=S(be)||a,Re=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),xe=B(x.internalFormat,Re,ve,x.colorSpace),Le=a&&x.isVideoTexture!==!0,We=R.__version===void 0||ee===!0;let I=E(x,be,we);Te(n.TEXTURE_CUBE_MAP,x,we);let Se;if(te){Le&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,xe,be.width,be.height);for(let Z=0;Z<6;Z++){Se=X[Z].mipmaps;for(let me=0;me<Se.length;me++){const ye=Se[me];x.format!==Yt?Re!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,ye.width,ye.height,Re,ve,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,xe,ye.width,ye.height,0,Re,ve,ye.data)}}}else{Se=x.mipmaps,Le&&We&&(Se.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,xe,X[0].width,X[0].height));for(let Z=0;Z<6;Z++)if(le){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,X[Z].width,X[Z].height,Re,ve,X[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,X[Z].width,X[Z].height,0,Re,ve,X[Z].data);for(let me=0;me<Se.length;me++){const Ke=Se[me].image[Z].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Ke.width,Ke.height,Re,ve,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,xe,Ke.width,Ke.height,0,Re,ve,Ke.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,ve,X[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xe,Re,ve,X[Z]);for(let me=0;me<Se.length;me++){const ye=Se[me];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Re,ve,ye.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,xe,Re,ve,ye.image[Z])}}}U(x,we)&&D(n.TEXTURE_CUBE_MAP),R.__version=oe.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Pe(y,x,F,ee,oe){const R=s.convert(F.format,F.colorSpace),te=s.convert(F.type),le=B(F.internalFormat,R,te,F.colorSpace);i.get(x).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,le,x.width,x.height,x.depth,0,R,te,null):t.texImage2D(oe,0,le,x.width,x.height,0,R,te,null)),t.bindFramebuffer(n.FRAMEBUFFER,y),ne(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,i.get(F).__webglTexture,0,V(x)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,i.get(F).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(y,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let ee=n.DEPTH_COMPONENT16;if(F||ne(x)){const oe=x.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Un?ee=n.DEPTH_COMPONENT32F:oe.type===Ln&&(ee=n.DEPTH_COMPONENT24));const R=V(x);ne(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,ee,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,R,ee,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const ee=V(x);F&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,x.width,x.height):ne(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const ee=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let oe=0;oe<ee.length;oe++){const R=ee[oe],te=s.convert(R.format,R.colorSpace),le=s.convert(R.type),X=B(R.internalFormat,te,le,R.colorSpace),be=V(x);F&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,X,x.width,x.height):ne(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function A(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const ee=i.get(x.depthTexture).__webglTexture,oe=V(x);if(x.depthTexture.format===ri)ne(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===ji)ne(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function P(y){const x=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");A(x.__webglFramebuffer,y)}else if(F){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=n.createRenderbuffer(),g(x.__webglDepthbuffer[ee],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),g(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(y,x,F){const ee=i.get(y);x!==void 0&&Pe(ee.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),F!==void 0&&P(y)}function L(y){const x=y.texture,F=i.get(y),ee=i.get(x);y.addEventListener("dispose",fe),y.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=x.version,o.memory.textures++);const oe=y.isWebGLCubeRenderTarget===!0,R=y.isWebGLMultipleRenderTargets===!0,te=S(y)||a;if(oe){F.__webglFramebuffer=[];for(let le=0;le<6;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),R)if(r.drawBuffers){const le=y.texture;for(let X=0,be=le.length;X<be;X++){const we=i.get(le[X]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ne(y)===!1){const le=R?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<le.length;X++){const be=le[X];F.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const we=s.convert(be.format,be.colorSpace),Re=s.convert(be.type),ve=B(be.internalFormat,we,Re,be.colorSpace,y.isXRRenderTarget===!0),xe=V(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ve,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,F.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),g(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Te(n.TEXTURE_CUBE_MAP,x,te);for(let le=0;le<6;le++)Pe(F.__webglFramebuffer[le],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le);U(x,te)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(R){const le=y.texture;for(let X=0,be=le.length;X<be;X++){const we=le[X],Re=i.get(we);t.bindTexture(n.TEXTURE_2D,Re.__webglTexture),Te(n.TEXTURE_2D,we,te),Pe(F.__webglFramebuffer,y,we,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D),U(we,te)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?le=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),Te(le,x,te),Pe(F.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,le),U(x,te)&&D(le),t.unbindTexture()}y.depthBuffer&&P(y)}function q(y){const x=S(y)||a,F=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0,oe=F.length;ee<oe;ee++){const R=F[ee];if(U(R,x)){const te=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(R).__webglTexture;t.bindTexture(te,le),D(te),t.unbindTexture()}}}function j(y){if(a&&y.samples>0&&ne(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],F=y.width,ee=y.height;let oe=n.COLOR_BUFFER_BIT;const R=[],te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(y),X=y.isWebGLMultipleRenderTargets===!0;if(X)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<x.length;be++){R.push(n.COLOR_ATTACHMENT0+be),y.depthBuffer&&R.push(te);const we=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(we===!1&&(y.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),X&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]),we===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[te])),X){const Re=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,oe,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const we=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function V(y){return Math.min(h,y.samples)}function ne(y){const x=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(y){const x=o.render.frame;_.get(y)!==x&&(_.set(y,x),y.update())}function pe(y,x){const F=y.colorSpace,ee=y.format,oe=y.type;return y.isCompressedTexture===!0||y.format===qo||F!==on&&F!==oi&&(F===ze?a===!1?e.has("EXT_sRGB")===!0&&ee===Yt?(y.format=qo,y.minFilter=Ot,y.generateMipmaps=!1):x=Yu.sRGBToLinear(x):(ee!==Yt||oe!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.setTexture2D=ae,this.setTexture2DArray=Me,this.setTexture3D=z,this.setTextureCube=ue,this.rebindTextures=N,this.setupRenderTarget=L,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=ne}function $x(n,e,t){const i=t.isWebGL2;function r(s,o=oi){let a;if(s===Fn)return n.UNSIGNED_BYTE;if(s===Bu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===zu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Np)return n.BYTE;if(s===Op)return n.SHORT;if(s===Ta)return n.UNSIGNED_SHORT;if(s===Fu)return n.INT;if(s===Ln)return n.UNSIGNED_INT;if(s===Un)return n.FLOAT;if(s===br)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Fp)return n.ALPHA;if(s===Yt)return n.RGBA;if(s===Bp)return n.LUMINANCE;if(s===zp)return n.LUMINANCE_ALPHA;if(s===ri)return n.DEPTH_COMPONENT;if(s===ji)return n.DEPTH_STENCIL;if(s===qo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hp)return n.RED;if(s===Hu)return n.RED_INTEGER;if(s===Gp)return n.RG;if(s===Gu)return n.RG_INTEGER;if(s===Vu)return n.RGBA_INTEGER;if(s===Ys||s===js||s===Ks||s===Zs)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yl||s===El||s===Tl||s===bl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===El)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Al||s===wl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Al)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rl||s===Cl||s===Pl||s===Ll||s===Ul||s===Dl||s===Il||s===Nl||s===Ol||s===Fl||s===Bl||s===zl||s===Hl||s===Gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ll)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ul)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Il)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ol)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$s)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$s)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===kp||s===Vl||s===kl||s===Wl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$s)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ii?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Jx extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class e0 extends It{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=Ln),i===void 0&&u===ji&&(i=ii),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t0 extends hi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,d=null;const w=[],M=[];let S=null;const b=new Ft;b.layers.enable(1),b.viewport=new dt;const U=new Ft;U.layers.enable(2),U.viewport=new dt;const D=[b,U],B=new Jx;B.layers.enable(1),B.layers.enable(2);let E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(z){S=z},this.getController=function(z){let ue=w[z];return ue===void 0&&(ue=new yo,w[z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(z){let ue=w[z];return ue===void 0&&(ue=new yo,w[z]=ue),ue.getGripSpace()},this.getHand=function(z){let ue=w[z];return ue===void 0&&(ue=new yo,w[z]=ue),ue.getHandSpace()};function Q(z){const ue=M.indexOf(z.inputSource);if(ue===-1)return;const he=w[ue];he!==void 0&&(he.update(z.inputSource,z.frame,c||o),he.dispatchEvent({type:z.type,data:z.inputSource}))}function fe(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",G);for(let z=0;z<w.length;z++){const ue=M[z];ue!==null&&(M[z]=null,w[z].disconnect(ue))}E=null,C=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,Me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),d=new ai(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,he=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?ji:ri,he=v.stencil?ii:Ln);const ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),d=new ai(f.textureWidth,f.textureHeight,{format:Yt,type:Fn,depthTexture:new e0(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(d);Te.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(z){for(let ue=0;ue<z.removed.length;ue++){const he=z.removed[ue],Ee=M.indexOf(he);Ee>=0&&(M[Ee]=null,w[Ee].disconnect(he))}for(let ue=0;ue<z.added.length;ue++){const he=z.added[ue];let Ee=M.indexOf(he);if(Ee===-1){for(let Te=0;Te<w.length;Te++)if(Te>=M.length){M.push(he),Ee=Te;break}else if(M[Te]===null){M[Te]=he,Ee=Te;break}if(Ee===-1)break}const ge=w[Ee];ge&&ge.connect(he)}}const Y=new O,$=new O;function se(z,ue,he){Y.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const Ee=Y.distanceTo($),ge=ue.projectionMatrix.elements,Te=he.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Ce=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],Pe=(ge[9]-1)/ge[5],g=(ge[8]-1)/ge[0],A=(Te[8]+1)/Te[0],P=De*g,N=De*A,L=Ee/(-g+A),q=L*-g;ue.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(q),z.translateZ(L),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const j=De+L,V=Ce+L,ne=P-q,J=N+(Ee-q),pe=Xe*Ce/V*j,y=Pe*Ce/V*j;z.projectionMatrix.makePerspective(ne,J,pe,y,j,V),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function W(z,ue){ue===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ue.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCameraXR=function(z){if(r===null)return z;S&&(z=S),B.near=U.near=b.near=z.near,B.far=U.far=b.far=z.far,(E!==B.near||C!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),E=B.near,C=B.far);const ue=z.parent,he=B.cameras;W(B,ue);for(let Ee=0;Ee<he.length;Ee++)W(he[Ee],ue);return he.length===2?se(B,b,U):B.projectionMatrix.copy(b.projectionMatrix),S&&K(B,ue),B};function K(z,ue){const he=S;ue===null?he.matrix.copy(z.matrixWorld):(he.matrix.copy(ue.matrixWorld),he.matrix.invert(),he.matrix.multiply(z.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0);const Ee=he.children;for(let ge=0,Te=Ee.length;ge<Te;ge++)Ee[ge].updateMatrixWorld(!0);he.projectionMatrix.copy(z.projectionMatrix),he.projectionMatrixInverse.copy(z.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Yo*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let ce=null;function ae(z,ue){if(u=ue.getViewerPose(c||o),_=ue,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Ee=!1;he.length!==B.cameras.length&&(B.cameras.length=0,Ee=!0);for(let ge=0;ge<he.length;ge++){const Te=he[ge];let De=null;if(m!==null)De=m.getViewport(Te);else{const Xe=h.getViewSubImage(f,Te);De=Xe.viewport,ge===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Ce=D[ge];Ce===void 0&&(Ce=new Ft,Ce.layers.enable(ge),Ce.viewport=new dt,D[ge]=Ce),Ce.matrix.fromArray(Te.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Te.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ee===!0&&B.cameras.push(Ce)}}for(let he=0;he<w.length;he++){const Ee=M[he],ge=w[he];Ee!==null&&ge!==void 0&&ge.update(Ee,ue,c||o)}ce&&ce(z,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Me=new rh;Me.setAnimationLoop(ae),this.setAnimationLoop=function(z){ce=z},this.dispose=function(){}}}function n0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,th(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,M,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Rt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Rt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i0(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,M){const S=M.program;i.uniformBlockBinding(w,S)}function c(w,M){let S=r[w.id];S===void 0&&(_(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",p));const b=M.program;i.updateUBOMapping(w,b);const U=e.render.frame;s[w.id]!==U&&(f(w),s[w.id]=U)}function u(w){const M=h();w.__bindingPointIndex=M;const S=n.createBuffer(),b=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=r[w.id],S=w.uniforms,b=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let U=0,D=S.length;U<D;U++){const B=S[U];if(m(B,U,b)===!0){const E=B.__offset,C=Array.isArray(B.value)?B.value:[B.value];let Q=0;for(let fe=0;fe<C.length;fe++){const G=C[fe],Y=v(G);typeof G=="number"?(B.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,E+Q,B.__data)):G.isMatrix3?(B.__data[0]=G.elements[0],B.__data[1]=G.elements[1],B.__data[2]=G.elements[2],B.__data[3]=G.elements[0],B.__data[4]=G.elements[3],B.__data[5]=G.elements[4],B.__data[6]=G.elements[5],B.__data[7]=G.elements[0],B.__data[8]=G.elements[6],B.__data[9]=G.elements[7],B.__data[10]=G.elements[8],B.__data[11]=G.elements[0]):(G.toArray(B.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,B.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,M,S){const b=w.value;if(S[M]===void 0){if(typeof b=="number")S[M]=b;else{const U=Array.isArray(b)?b:[b],D=[];for(let B=0;B<U.length;B++)D.push(U[B].clone());S[M]=D}return!0}else if(typeof b=="number"){if(S[M]!==b)return S[M]=b,!0}else{const U=Array.isArray(S[M])?S[M]:[S[M]],D=Array.isArray(b)?b:[b];for(let B=0;B<U.length;B++){const E=U[B];if(E.equals(D[B])===!1)return E.copy(D[B]),!0}}return!1}function _(w){const M=w.uniforms;let S=0;const b=16;let U=0;for(let D=0,B=M.length;D<B;D++){const E=M[D],C={boundary:0,storage:0},Q=Array.isArray(E.value)?E.value:[E.value];for(let fe=0,G=Q.length;fe<G;fe++){const Y=Q[fe],$=v(Y);C.boundary+=$.boundary,C.storage+=$.storage}if(E.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,D>0){U=S%b;const fe=b-U;U!==0&&fe-C.boundary<0&&(S+=b-U,E.__offset=S)}S+=C.storage}return U=S%b,U>0&&(S+=b-U),w.__size=S,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function r0(){const n=Ms("canvas");return n.style.display="block",n}class uh{constructor(e={}){const{canvas:t=r0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=Sn,this.toneMappingExposure=1;const M=this;let S=!1,b=0,U=0,D=null,B=-1,E=null;const C=new dt,Q=new dt;let fe=null;const G=new Ye(0);let Y=0,$=t.width,se=t.height,W=1,K=null,ce=null;const ae=new dt(0,0,$,se),Me=new dt(0,0,$,se);let z=!1;const ue=new wa;let he=!1,Ee=!1,ge=null;const Te=new ot,De=new de,Ce=new O,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return D===null?W:1}let g=i;function A(T,k){for(let ie=0;ie<T.length;ie++){const H=T[ie],re=t.getContext(H,k);if(re!==null)return re}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",me,!1),g===null){const k=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&k.shift(),g=A(k,T),g===null)throw A(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let P,N,L,q,j,V,ne,J,pe,y,x,F,ee,oe,R,te,le,X,be,we,Re,ve,xe,Le;function We(){P=new mv(g),N=new cv(g,P,e),P.init(N),ve=new $x(g,P,N),L=new Kx(g,P,N),q=new vv(g),j=new Nx,V=new Zx(g,P,L,j,N,ve,q),ne=new hv(M),J=new pv(M),pe=new Pm(g,N),xe=new av(g,P,pe,N),y=new gv(g,pe,q,xe),x=new yv(g,y,pe,q),be=new Sv(g,N,V),te=new uv(j),F=new Ix(M,ne,J,P,N,xe,te),ee=new n0(M,j),oe=new Fx,R=new kx(P,N),X=new ov(M,ne,J,L,x,f,l),le=new jx(M,x,N),Le=new i0(g,q,N,L),we=new lv(g,P,q,N),Re=new _v(g,P,q,N),q.programs=F.programs,M.capabilities=N,M.extensions=P,M.properties=j,M.renderLists=oe,M.shadowMap=le,M.state=L,M.info=q}We();const I=new t0(M,g);this.xr=I,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=P.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=P.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize($,se,!1))},this.getSize=function(T){return T.set($,se)},this.setSize=function(T,k,ie=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,se=k,t.width=Math.floor(T*W),t.height=Math.floor(k*W),ie===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set($*W,se*W).floor()},this.setDrawingBufferSize=function(T,k,ie){$=T,se=k,W=ie,t.width=Math.floor(T*ie),t.height=Math.floor(k*ie),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,k,ie,H){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,k,ie,H),L.viewport(C.copy(ae).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,k,ie,H){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,k,ie,H),L.scissor(Q.copy(Me).multiplyScalar(W).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){L.setScissorTest(z=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(T=!0,k=!0,ie=!0){let H=0;if(T){let re=!1;if(D!==null){const Ae=D.texture.format;re=Ae===Vu||Ae===Gu||Ae===Hu}if(re){const Ae=D.texture.type,Ue=Ae===Fn||Ae===Ln||Ae===Ta||Ae===ii||Ae===Bu||Ae===zu,Ie=X.getClearColor(),Ne=X.getClearAlpha(),Ve=Ie.r,Oe=Ie.g,Be=Ie.b,$e=j.get(D).__webglFramebuffer;Ue?(m[0]=Ve,m[1]=Oe,m[2]=Be,m[3]=Ne,g.clearBufferuiv(g.COLOR,$e,m)):(_[0]=Ve,_[1]=Oe,_[2]=Be,_[3]=Ne,g.clearBufferiv(g.COLOR,$e,_))}else H|=g.COLOR_BUFFER_BIT}k&&(H|=g.DEPTH_BUFFER_BIT),ie&&(H|=g.STENCIL_BUFFER_BIT),g.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",me,!1),oe.dispose(),R.dispose(),j.dispose(),ne.dispose(),J.dispose(),x.dispose(),xe.dispose(),Le.dispose(),F.dispose(),I.dispose(),I.removeEventListener("sessionstart",tt),I.removeEventListener("sessionend",$t),ge&&(ge.dispose(),ge=null),St.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=q.autoReset,k=le.enabled,ie=le.autoUpdate,H=le.needsUpdate,re=le.type;We(),q.autoReset=T,le.enabled=k,le.autoUpdate=ie,le.needsUpdate=H,le.type=re}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ye(T){const k=T.target;k.removeEventListener("dispose",ye),Ke(k)}function Ke(T){et(T),j.remove(T)}function et(T){const k=j.get(T).programs;k!==void 0&&(k.forEach(function(ie){F.releaseProgram(ie)}),T.isShaderMaterial&&F.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,ie,H,re,Ae){k===null&&(k=Xe);const Ue=re.isMesh&&re.matrixWorld.determinant()<0,Ie=yh(T,k,ie,H,re);L.setMaterial(H,Ue);let Ne=ie.index,Ve=1;H.wireframe===!0&&(Ne=y.getWireframeAttribute(ie),Ve=2);const Oe=ie.drawRange,Be=ie.attributes.position;let $e=Oe.start*Ve,nt=(Oe.start+Oe.count)*Ve;Ae!==null&&($e=Math.max($e,Ae.start*Ve),nt=Math.min(nt,(Ae.start+Ae.count)*Ve)),Ne!==null?($e=Math.max($e,0),nt=Math.min(nt,Ne.count)):Be!=null&&($e=Math.max($e,0),nt=Math.min(nt,Be.count));const Bt=nt-$e;if(Bt<0||Bt===1/0)return;xe.setup(re,H,Ie,ie,Ne);let ln,rt=we;if(Ne!==null&&(ln=pe.get(Ne),rt=Re,rt.setIndex(ln)),re.isMesh)H.wireframe===!0?(L.setLineWidth(H.wireframeLinewidth*Pe()),rt.setMode(g.LINES)):rt.setMode(g.TRIANGLES);else if(re.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),L.setLineWidth(qe*Pe()),re.isLineSegments?rt.setMode(g.LINES):re.isLineLoop?rt.setMode(g.LINE_LOOP):rt.setMode(g.LINE_STRIP)}else re.isPoints?rt.setMode(g.POINTS):re.isSprite&&rt.setMode(g.TRIANGLES);if(re.isInstancedMesh)rt.renderInstances($e,Bt,re.count);else if(ie.isInstancedBufferGeometry){const qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Is=Math.min(ie.instanceCount,qe);rt.renderInstances($e,Bt,Is)}else rt.render($e,Bt)},this.compile=function(T,k){function ie(H,re,Ae){H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=Rt,H.needsUpdate=!0,Lr(H,re,Ae),H.side=zn,H.needsUpdate=!0,Lr(H,re,Ae),H.side=xn):Lr(H,re,Ae)}p=R.get(T),p.init(),w.push(p),T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(M.useLegacyLights),T.traverse(function(H){const re=H.material;if(re)if(Array.isArray(re))for(let Ae=0;Ae<re.length;Ae++){const Ue=re[Ae];ie(Ue,T,H)}else ie(re,T,H)}),w.pop(),p=null};let it=null;function Gn(T){it&&it(T)}function tt(){St.stop()}function $t(){St.start()}const St=new rh;St.setAnimationLoop(Gn),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(T){it=T,I.setAnimationLoop(T),T===null?St.stop():St.start()},I.addEventListener("sessionstart",tt),I.addEventListener("sessionend",$t),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(k=I.updateCameraXR(k)),T.isScene===!0&&T.onBeforeRender(M,T,k,D),p=R.get(T,w.length),p.init(),w.push(p),Te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ue.setFromProjectionMatrix(Te),Ee=this.localClippingEnabled,he=te.init(this.clippingPlanes,Ee),v=oe.get(T,d.length),v.init(),d.push(v),Ia(T,k,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(K,ce),he===!0&&te.beginShadows();const ie=p.state.shadowsArray;if(le.render(ie,T,k),he===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,X.render(v,T),p.setupLights(M.useLegacyLights),k.isArrayCamera){const H=k.cameras;for(let re=0,Ae=H.length;re<Ae;re++){const Ue=H[re];Na(v,T,Ue,Ue.viewport)}}else Na(v,T,k);D!==null&&(V.updateMultisampleRenderTarget(D),V.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(M,T,k),xe.resetDefaultState(),B=-1,E=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ia(T,k,ie,H){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){H&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Ue=x.update(T),Ie=T.material;Ie.visible&&v.push(T,Ue,Ie,ie,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==q.render.frame&&(T.skeleton.update(),T.skeleton.frame=q.render.frame);const Ue=x.update(T),Ie=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ce.copy(Ue.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Ne=Ue.groups;for(let Ve=0,Oe=Ne.length;Ve<Oe;Ve++){const Be=Ne[Ve],$e=Ie[Be.materialIndex];$e&&$e.visible&&v.push(T,Ue,$e,ie,Ce.z,Be)}}else Ie.visible&&v.push(T,Ue,Ie,ie,Ce.z,null)}}const Ae=T.children;for(let Ue=0,Ie=Ae.length;Ue<Ie;Ue++)Ia(Ae[Ue],k,ie,H)}function Na(T,k,ie,H){const re=T.opaque,Ae=T.transmissive,Ue=T.transparent;p.setupLightsView(ie),he===!0&&te.setGlobalState(M.clippingPlanes,ie),Ae.length>0&&Sh(re,Ae,k,ie),H&&L.viewport(C.copy(H)),re.length>0&&Pr(re,k,ie),Ae.length>0&&Pr(Ae,k,ie),Ue.length>0&&Pr(Ue,k,ie),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Sh(T,k,ie,H){const re=N.isWebGL2;ge===null&&(ge=new ai(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?br:Fn,minFilter:Tr,samples:re&&a===!0?4:0})),M.getDrawingBufferSize(De),re?ge.setSize(De.x,De.y):ge.setSize(jo(De.x),jo(De.y));const Ae=M.getRenderTarget();M.setRenderTarget(ge),M.getClearColor(G),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear();const Ue=M.toneMapping;M.toneMapping=Sn,Pr(T,ie,H),V.updateMultisampleRenderTarget(ge),V.updateRenderTargetMipmap(ge);let Ie=!1;for(let Ne=0,Ve=k.length;Ne<Ve;Ne++){const Oe=k[Ne],Be=Oe.object,$e=Oe.geometry,nt=Oe.material,Bt=Oe.group;if(nt.side===xn&&Be.layers.test(H.layers)){const ln=nt.side;nt.side=Rt,nt.needsUpdate=!0,Oa(Be,ie,H,$e,nt,Bt),nt.side=ln,nt.needsUpdate=!0,Ie=!0}}Ie===!0&&(V.updateMultisampleRenderTarget(ge),V.updateRenderTargetMipmap(ge)),M.setRenderTarget(Ae),M.setClearColor(G,Y),M.toneMapping=Ue}function Pr(T,k,ie){const H=k.isScene===!0?k.overrideMaterial:null;for(let re=0,Ae=T.length;re<Ae;re++){const Ue=T[re],Ie=Ue.object,Ne=Ue.geometry,Ve=H===null?Ue.material:H,Oe=Ue.group;Ie.layers.test(ie.layers)&&Oa(Ie,k,ie,Ne,Ve,Oe)}}function Oa(T,k,ie,H,re,Ae){T.onBeforeRender(M,k,ie,H,re,Ae),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(M,k,ie,H,T,Ae),re.transparent===!0&&re.side===xn&&re.forceSinglePass===!1?(re.side=Rt,re.needsUpdate=!0,M.renderBufferDirect(ie,k,H,re,T,Ae),re.side=zn,re.needsUpdate=!0,M.renderBufferDirect(ie,k,H,re,T,Ae),re.side=xn):M.renderBufferDirect(ie,k,H,re,T,Ae),T.onAfterRender(M,k,ie,H,re,Ae)}function Lr(T,k,ie){k.isScene!==!0&&(k=Xe);const H=j.get(T),re=p.state.lights,Ae=p.state.shadowsArray,Ue=re.state.version,Ie=F.getParameters(T,re.state,Ae,k,ie),Ne=F.getProgramCacheKey(Ie);let Ve=H.programs;H.environment=T.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(T.isMeshStandardMaterial?J:ne).get(T.envMap||H.environment),Ve===void 0&&(T.addEventListener("dispose",ye),Ve=new Map,H.programs=Ve);let Oe=Ve.get(Ne);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===Ue)return Fa(T,Ie),Oe}else Ie.uniforms=F.getUniforms(T),T.onBuild(ie,Ie,M),T.onBeforeCompile(Ie,M),Oe=F.acquireProgram(Ie,Ne),Ve.set(Ne,Oe),H.uniforms=Ie.uniforms;const Be=H.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=te.uniform),Fa(T,Ie),H.needsLights=Th(T),H.lightsStateVersion=Ue,H.needsLights&&(Be.ambientLightColor.value=re.state.ambient,Be.lightProbe.value=re.state.probe,Be.directionalLights.value=re.state.directional,Be.directionalLightShadows.value=re.state.directionalShadow,Be.spotLights.value=re.state.spot,Be.spotLightShadows.value=re.state.spotShadow,Be.rectAreaLights.value=re.state.rectArea,Be.ltc_1.value=re.state.rectAreaLTC1,Be.ltc_2.value=re.state.rectAreaLTC2,Be.pointLights.value=re.state.point,Be.pointLightShadows.value=re.state.pointShadow,Be.hemisphereLights.value=re.state.hemi,Be.directionalShadowMap.value=re.state.directionalShadowMap,Be.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Be.spotShadowMap.value=re.state.spotShadowMap,Be.spotLightMatrix.value=re.state.spotLightMatrix,Be.spotLightMap.value=re.state.spotLightMap,Be.pointShadowMap.value=re.state.pointShadowMap,Be.pointShadowMatrix.value=re.state.pointShadowMatrix);const $e=Oe.getUniforms(),nt=fs.seqWithValue($e.seq,Be);return H.currentProgram=Oe,H.uniformsList=nt,Oe}function Fa(T,k){const ie=j.get(T);ie.outputColorSpace=k.outputColorSpace,ie.instancing=k.instancing,ie.skinning=k.skinning,ie.morphTargets=k.morphTargets,ie.morphNormals=k.morphNormals,ie.morphColors=k.morphColors,ie.morphTargetsCount=k.morphTargetsCount,ie.numClippingPlanes=k.numClippingPlanes,ie.numIntersection=k.numClipIntersection,ie.vertexAlphas=k.vertexAlphas,ie.vertexTangents=k.vertexTangents,ie.toneMapping=k.toneMapping}function yh(T,k,ie,H,re){k.isScene!==!0&&(k=Xe),V.resetTextureUnits();const Ae=k.fog,Ue=H.isMeshStandardMaterial?k.environment:null,Ie=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:on,Ne=(H.isMeshStandardMaterial?J:ne).get(H.envMap||Ue),Ve=H.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Oe=!!ie.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!ie.morphAttributes.position,$e=!!ie.morphAttributes.normal,nt=!!ie.morphAttributes.color,Bt=H.toneMapped?M.toneMapping:Sn,ln=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,rt=ln!==void 0?ln.length:0,qe=j.get(H),Is=p.state.lights;if(he===!0&&(Ee===!0||T!==E)){const Pt=T===E&&H.id===B;te.setState(H,T,Pt)}let ut=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Is.state.version||qe.outputColorSpace!==Ie||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ne||H.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==te.numPlanes||qe.numIntersection!==te.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Oe||qe.morphTargets!==Be||qe.morphNormals!==$e||qe.morphColors!==nt||qe.toneMapping!==Bt||N.isWebGL2===!0&&qe.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,qe.__version=H.version);let Vn=qe.currentProgram;ut===!0&&(Vn=Lr(H,k,re));let Ba=!1,ir=!1,Ns=!1;const yt=Vn.getUniforms(),kn=qe.uniforms;if(L.useProgram(Vn.program)&&(Ba=!0,ir=!0,Ns=!0),H.id!==B&&(B=H.id,ir=!0),Ba||E!==T){if(yt.setValue(g,"projectionMatrix",T.projectionMatrix),N.logarithmicDepthBuffer&&yt.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),E!==T&&(E=T,ir=!0,Ns=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Pt=yt.map.cameraPosition;Pt!==void 0&&Pt.setValue(g,Ce.setFromMatrixPosition(T.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||re.isSkinnedMesh)&&yt.setValue(g,"viewMatrix",T.matrixWorldInverse)}if(re.isSkinnedMesh){yt.setOptional(g,re,"bindMatrix"),yt.setOptional(g,re,"bindMatrixInverse");const Pt=re.skeleton;Pt&&(N.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),yt.setValue(g,"boneTexture",Pt.boneTexture,V),yt.setValue(g,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Os=ie.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0&&N.isWebGL2===!0)&&be.update(re,ie,Vn),(ir||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,yt.setValue(g,"receiveShadow",re.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(kn.envMap.value=Ne,kn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ir&&(yt.setValue(g,"toneMappingExposure",M.toneMappingExposure),qe.needsLights&&Eh(kn,Ns),Ae&&H.fog===!0&&ee.refreshFogUniforms(kn,Ae),ee.refreshMaterialUniforms(kn,H,W,se,ge),fs.upload(g,qe.uniformsList,kn,V)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fs.upload(g,qe.uniformsList,kn,V),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(g,"center",re.center),yt.setValue(g,"modelViewMatrix",re.modelViewMatrix),yt.setValue(g,"normalMatrix",re.normalMatrix),yt.setValue(g,"modelMatrix",re.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let Fs=0,bh=Pt.length;Fs<bh;Fs++)if(N.isWebGL2){const za=Pt[Fs];Le.update(za,Vn),Le.bind(za,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Eh(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Th(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,k,ie){j.get(T.texture).__webglTexture=k,j.get(T.depthTexture).__webglTexture=ie;const H=j.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=ie===void 0,H.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const ie=j.get(T);ie.__webglFramebuffer=k,ie.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,ie=0){D=T,b=k,U=ie;let H=!0,re=null,Ae=!1,Ue=!1;if(T){const Ne=j.get(T);Ne.__useDefaultFramebuffer!==void 0?(L.bindFramebuffer(g.FRAMEBUFFER,null),H=!1):Ne.__webglFramebuffer===void 0?V.setupRenderTarget(T):Ne.__hasExternalTextures&&V.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const Oe=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(re=Oe[k],Ae=!0):N.isWebGL2&&T.samples>0&&V.useMultisampledRTT(T)===!1?re=j.get(T).__webglMultisampledFramebuffer:re=Oe,C.copy(T.viewport),Q.copy(T.scissor),fe=T.scissorTest}else C.copy(ae).multiplyScalar(W).floor(),Q.copy(Me).multiplyScalar(W).floor(),fe=z;if(L.bindFramebuffer(g.FRAMEBUFFER,re)&&N.drawBuffers&&H&&L.drawBuffers(T,re),L.viewport(C),L.scissor(Q),L.setScissorTest(fe),Ae){const Ne=j.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,ie)}else if(Ue){const Ne=j.get(T.texture),Ve=k||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ne.__webglTexture,ie||0,Ve)}B=-1},this.readRenderTargetPixels=function(T,k,ie,H,re,Ae,Ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){L.bindFramebuffer(g.FRAMEBUFFER,Ie);try{const Ne=T.texture,Ve=Ne.format,Oe=Ne.type;if(Ve!==Yt&&ve.convert(Ve)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===br&&(P.has("EXT_color_buffer_half_float")||N.isWebGL2&&P.has("EXT_color_buffer_float"));if(Oe!==Fn&&ve.convert(Oe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Un&&(N.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-H&&ie>=0&&ie<=T.height-re&&g.readPixels(k,ie,H,re,ve.convert(Ve),ve.convert(Oe),Ae)}finally{const Ne=D!==null?j.get(D).__webglFramebuffer:null;L.bindFramebuffer(g.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,k,ie=0){const H=Math.pow(2,-ie),re=Math.floor(k.image.width*H),Ae=Math.floor(k.image.height*H);V.setTexture2D(k,0),g.copyTexSubImage2D(g.TEXTURE_2D,ie,0,0,T.x,T.y,re,Ae),L.unbindTexture()},this.copyTextureToTexture=function(T,k,ie,H=0){const re=k.image.width,Ae=k.image.height,Ue=ve.convert(ie.format),Ie=ve.convert(ie.type);V.setTexture2D(ie,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,ie.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,ie.unpackAlignment),k.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,T.x,T.y,re,Ae,Ue,Ie,k.image.data):k.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ue,k.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,H,T.x,T.y,Ue,Ie,k.image),H===0&&ie.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),L.unbindTexture()},this.copyTextureToTexture3D=function(T,k,ie,H,re=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=T.max.x-T.min.x+1,Ue=T.max.y-T.min.y+1,Ie=T.max.z-T.min.z+1,Ne=ve.convert(H.format),Ve=ve.convert(H.type);let Oe;if(H.isData3DTexture)V.setTexture3D(H,0),Oe=g.TEXTURE_3D;else if(H.isDataArrayTexture)V.setTexture2DArray(H,0),Oe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const Be=g.getParameter(g.UNPACK_ROW_LENGTH),$e=g.getParameter(g.UNPACK_IMAGE_HEIGHT),nt=g.getParameter(g.UNPACK_SKIP_PIXELS),Bt=g.getParameter(g.UNPACK_SKIP_ROWS),ln=g.getParameter(g.UNPACK_SKIP_IMAGES),rt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,rt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,rt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,T.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,T.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,T.min.z),ie.isDataTexture||ie.isData3DTexture?g.texSubImage3D(Oe,re,k.x,k.y,k.z,Ae,Ue,Ie,Ne,Ve,rt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Oe,re,k.x,k.y,k.z,Ae,Ue,Ie,Ne,rt.data)):g.texSubImage3D(Oe,re,k.x,k.y,k.z,Ae,Ue,Ie,Ne,Ve,rt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(g.UNPACK_SKIP_PIXELS,nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Bt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ln),re===0&&H.generateMipmaps&&g.generateMipmap(Oe),L.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?V.setTextureCube(T,0):T.isData3DTexture?V.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?V.setTexture2DArray(T,0):V.setTexture2D(T,0),L.unbindTexture()},this.resetState=function(){b=0,U=0,D=null,L.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?si:ku}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?ze:on}}class s0 extends uh{}s0.prototype.isWebGL1Renderer=!0;class o0 extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],s=[],o=[],a=new O,l=new ot;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ft(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(ft(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pa extends an{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class a0 extends Pa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function La(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ss=new O,Eo=new La,To=new La,bo=new La;class l0 extends an{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ss.subVectors(r[0],r[1]).add(r[0]),c=ss);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Eo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,p),To.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,p),bo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),To.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Eo.calc(l),To.calc(l),bo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function c0(n,e){const t=1-n;return t*t*e}function u0(n,e){return 2*(1-n)*n*e}function h0(n,e){return n*n*e}function gr(n,e,t,i){return c0(n,e)+u0(n,t)+h0(n,i)}function f0(n,e){const t=1-n;return t*t*t*e}function d0(n,e){const t=1-n;return 3*t*t*n*e}function p0(n,e){return 3*(1-n)*n*n*e}function m0(n,e){return n*n*n*e}function _r(n,e,t,i,r){return f0(n,e)+d0(n,t)+p0(n,i)+m0(n,r)}class hh extends an{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_r(e,r.x,s.x,o.x,a.x),_r(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g0 extends an{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_r(e,r.x,s.x,o.x,a.x),_r(e,r.y,s.y,o.y,a.y),_r(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ua extends an{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends an{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends an{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(gr(e,r.x,s.x,o.x),gr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends an{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(gr(e,r.x,s.x,o.x),gr(e,r.y,s.y,o.y),gr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dh extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Lc(a,l.x,c.x,u.x,h.x),Lc(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var ph=Object.freeze({__proto__:null,ArcCurve:a0,CatmullRomCurve3:l0,CubicBezierCurve:hh,CubicBezierCurve3:g0,EllipseCurve:Pa,LineCurve:Ua,LineCurve3:_0,QuadraticBezierCurve:fh,QuadraticBezierCurve3:v0,SplineCurve:dh});class x0 extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ua(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ph[r.type]().fromJSON(r))}return this}}class Zo extends x0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ua(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new fh(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new hh(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new dh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Pa(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ds extends Zo{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Zo().fromJSON(r))}return this}}const M0={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=mh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(i&&(s=b0(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Ar(s,o,t,a,l,m,0),o}};function mh(n,e,t,i,r){let s,o;if(r===O0(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Uc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Uc(s,n[s],n[s+1],o);return o&&Ds(o,o.next)&&(Rr(o),o=o.next),o}function ui(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ds(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ar(n,e,t,i,r,s,o){if(!n)return;!o&&s&&P0(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?y0(n,i,r,s):S0(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Rr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=E0(ui(n),e,t),Ar(n,e,t,i,r,s,2)):o===2&&T0(n,e,t,i,r,s):Ar(ui(n),e,t,i,r,s,1);break}}}function S0(n){const e=n.prev,t=n,i=n.next;if(Qe(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&Oi(r,a,s,l,o,c,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function y0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Qe(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=$o(m,_,e,t,i),w=$o(v,p,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=d&&S&&S.z<=w;){if(M.x>=m&&M.x<=v&&M.y>=_&&M.y<=p&&M!==r&&M!==o&&Oi(a,u,l,h,c,f,M.x,M.y)&&Qe(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=m&&S.x<=v&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&Oi(a,u,l,h,c,f,S.x,S.y)&&Qe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=d;){if(M.x>=m&&M.x<=v&&M.y>=_&&M.y<=p&&M!==r&&M!==o&&Oi(a,u,l,h,c,f,M.x,M.y)&&Qe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=w;){if(S.x>=m&&S.x<=v&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&Oi(a,u,l,h,c,f,S.x,S.y)&&Qe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function E0(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Ds(r,s)&&gh(r,i,i.next,s)&&wr(r,s)&&wr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Rr(i),Rr(i.next),i=n=s),i=i.next}while(i!==n);return ui(i)}function T0(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D0(o,a)){let l=_h(o,a);o=ui(o,o.next),l=ui(l,l.next),Ar(o,e,t,i,r,s,0),Ar(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function b0(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=mh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(U0(c));for(r.sort(A0),s=0;s<r.length;s++)t=w0(r[s],t);return t}function A0(n,e){return n.x-e.x}function w0(n,e){const t=R0(n,e);if(!t)return e;const i=_h(t,n);return ui(i,i.next),ui(t,t.next)}function R0(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Oi(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),wr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&C0(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function C0(n,e){return Qe(n.prev,n,e.prev)<0&&Qe(e.next,n,n.next)<0}function P0(n,e,t,i){let r=n;do r.z===0&&(r.z=$o(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,L0(r)}function L0(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function $o(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function U0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Oi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function D0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!I0(n,e)&&(wr(n,e)&&wr(e,n)&&N0(n,e)&&(Qe(n.prev,n,e.prev)||Qe(n,e.prev,e))||Ds(n,e)&&Qe(n.prev,n,n.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ds(n,e){return n.x===e.x&&n.y===e.y}function gh(n,e,t,i){const r=as(Qe(n,e,t)),s=as(Qe(n,e,i)),o=as(Qe(t,i,n)),a=as(Qe(t,i,e));return!!(r!==s&&o!==a||r===0&&os(n,t,e)||s===0&&os(n,i,e)||o===0&&os(t,n,i)||a===0&&os(t,e,i))}function os(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function as(n){return n>0?1:n<0?-1:0}function I0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wr(n,e){return Qe(n.prev,n,n.next)<0?Qe(n,e,n.next)>=0&&Qe(n,n.prev,e)>=0:Qe(n,e,n.prev)<0||Qe(n,n.next,e)<0}function N0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _h(n,e){const t=new Jo(n.i,n.x,n.y),i=new Jo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Uc(n,e,t,i){const r=new Jo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Vi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Dc(e),Ic(i,e);let o=e.length;t.forEach(Dc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ic(i,t[l]);const a=M0.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Dc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ic(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Da extends Hn{constructor(e=new ds([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yn(r,3)),this.setAttribute("uv",new yn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:F0;let M,S=!1,b,U,D,B;d&&(M=d.getSpacedPoints(u),S=!0,f=!1,b=d.computeFrenetFrames(u,!1),U=new O,D=new O,B=new O),f||(p=0,m=0,_=0,v=0);const E=a.extractPoints(c);let C=E.shape;const Q=E.holes;if(!Vi.isClockWise(C)){C=C.reverse();for(let g=0,A=Q.length;g<A;g++){const P=Q[g];Vi.isClockWise(P)&&(Q[g]=P.reverse())}}const G=Vi.triangulateShape(C,Q),Y=C;for(let g=0,A=Q.length;g<A;g++){const P=Q[g];C=C.concat(P)}function $(g,A,P){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),g.clone().addScaledVector(A,P)}const se=C.length,W=G.length;function K(g,A,P){let N,L,q;const j=g.x-A.x,V=g.y-A.y,ne=P.x-g.x,J=P.y-g.y,pe=j*j+V*V,y=j*J-V*ne;if(Math.abs(y)>Number.EPSILON){const x=Math.sqrt(pe),F=Math.sqrt(ne*ne+J*J),ee=A.x-V/x,oe=A.y+j/x,R=P.x-J/F,te=P.y+ne/F,le=((R-ee)*J-(te-oe)*ne)/(j*J-V*ne);N=ee+j*le-g.x,L=oe+V*le-g.y;const X=N*N+L*L;if(X<=2)return new de(N,L);q=Math.sqrt(X/2)}else{let x=!1;j>Number.EPSILON?ne>Number.EPSILON&&(x=!0):j<-Number.EPSILON?ne<-Number.EPSILON&&(x=!0):Math.sign(V)===Math.sign(J)&&(x=!0),x?(N=-V,L=j,q=Math.sqrt(pe)):(N=j,L=V,q=Math.sqrt(pe/2))}return new de(N/q,L/q)}const ce=[];for(let g=0,A=Y.length,P=A-1,N=g+1;g<A;g++,P++,N++)P===A&&(P=0),N===A&&(N=0),ce[g]=K(Y[g],Y[P],Y[N]);const ae=[];let Me,z=ce.concat();for(let g=0,A=Q.length;g<A;g++){const P=Q[g];Me=[];for(let N=0,L=P.length,q=L-1,j=N+1;N<L;N++,q++,j++)q===L&&(q=0),j===L&&(j=0),Me[N]=K(P[N],P[q],P[j]);ae.push(Me),z=z.concat(Me)}for(let g=0;g<p;g++){const A=g/p,P=m*Math.cos(A*Math.PI/2),N=_*Math.sin(A*Math.PI/2)+v;for(let L=0,q=Y.length;L<q;L++){const j=$(Y[L],ce[L],N);Te(j.x,j.y,-P)}for(let L=0,q=Q.length;L<q;L++){const j=Q[L];Me=ae[L];for(let V=0,ne=j.length;V<ne;V++){const J=$(j[V],Me[V],N);Te(J.x,J.y,-P)}}}const ue=_+v;for(let g=0;g<se;g++){const A=f?$(C[g],z[g],ue):C[g];S?(D.copy(b.normals[0]).multiplyScalar(A.x),U.copy(b.binormals[0]).multiplyScalar(A.y),B.copy(M[0]).add(D).add(U),Te(B.x,B.y,B.z)):Te(A.x,A.y,0)}for(let g=1;g<=u;g++)for(let A=0;A<se;A++){const P=f?$(C[A],z[A],ue):C[A];S?(D.copy(b.normals[g]).multiplyScalar(P.x),U.copy(b.binormals[g]).multiplyScalar(P.y),B.copy(M[g]).add(D).add(U),Te(B.x,B.y,B.z)):Te(P.x,P.y,h/u*g)}for(let g=p-1;g>=0;g--){const A=g/p,P=m*Math.cos(A*Math.PI/2),N=_*Math.sin(A*Math.PI/2)+v;for(let L=0,q=Y.length;L<q;L++){const j=$(Y[L],ce[L],N);Te(j.x,j.y,h+P)}for(let L=0,q=Q.length;L<q;L++){const j=Q[L];Me=ae[L];for(let V=0,ne=j.length;V<ne;V++){const J=$(j[V],Me[V],N);S?Te(J.x,J.y+M[u-1].y,M[u-1].x+P):Te(J.x,J.y,h+P)}}}he(),Ee();function he(){const g=r.length/3;if(f){let A=0,P=se*A;for(let N=0;N<W;N++){const L=G[N];De(L[2]+P,L[1]+P,L[0]+P)}A=u+p*2,P=se*A;for(let N=0;N<W;N++){const L=G[N];De(L[0]+P,L[1]+P,L[2]+P)}}else{for(let A=0;A<W;A++){const P=G[A];De(P[2],P[1],P[0])}for(let A=0;A<W;A++){const P=G[A];De(P[0]+se*u,P[1]+se*u,P[2]+se*u)}}i.addGroup(g,r.length/3-g,0)}function Ee(){const g=r.length/3;let A=0;ge(Y,A),A+=Y.length;for(let P=0,N=Q.length;P<N;P++){const L=Q[P];ge(L,A),A+=L.length}i.addGroup(g,r.length/3-g,1)}function ge(g,A){let P=g.length;for(;--P>=0;){const N=P;let L=P-1;L<0&&(L=g.length-1);for(let q=0,j=u+p*2;q<j;q++){const V=se*q,ne=se*(q+1),J=A+N+V,pe=A+L+V,y=A+L+ne,x=A+N+ne;Ce(J,pe,y,x)}}}function Te(g,A,P){l.push(g),l.push(A),l.push(P)}function De(g,A,P){Xe(g),Xe(A),Xe(P);const N=r.length/3,L=w.generateTopUV(i,r,N-3,N-2,N-1);Pe(L[0]),Pe(L[1]),Pe(L[2])}function Ce(g,A,P,N){Xe(g),Xe(A),Xe(N),Xe(A),Xe(P),Xe(N);const L=r.length/3,q=w.generateSideWallUV(i,r,L-6,L-3,L-2,L-1);Pe(q[0]),Pe(q[1]),Pe(q[3]),Pe(q[1]),Pe(q[2]),Pe(q[3])}function Xe(g){r.push(l[g*3+0]),r.push(l[g*3+1]),r.push(l[g*3+2])}function Pe(g){s.push(g.x),s.push(g.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return B0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ph[r.type]().fromJSON(r)),new Da(i,e.options)}}const F0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],_=e[r*3+2],v=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-_),new de(v,1-d)]:[new de(a,1-l),new de(u,1-h),new de(m,1-_),new de(p,1-d)]}};function B0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vh extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z0 extends vh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class H0{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const G0=new H0;class xh{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mn={};class V0 extends Error{constructor(e,t){super(e),this.response=t}}class k0 extends xh{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Nc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:i,onError:r});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){w();function w(){h.read().then(({done:M,value:S})=>{if(M)d.close();else{v+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let U=0,D=u.length;U<D;U++){const B=u[U];B.onProgress&&B.onProgress(b)}d.enqueue(S),w()}})}}});return new Response(p)}else throw new V0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Nc.add(e,c);const u=mn[e];delete mn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete mn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mh extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class W0 extends Mh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ao=new ot,Oc=new O,Fc=new O;class X0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q0 extends X0{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends Mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class j0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bc(){return(typeof performance>"u"?Date:performance).now()}class K0{constructor(e,t,i=0,r=1/0){this.ray=new Zu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Qo(e,this,i,t),i.sort(zc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Qo(e[r],this,i,t);return i.sort(zc),i}}function zc(n,e){return n.distance-e.distance}function Qo(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Qo(r[s],e,t,!0)}}class Hc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Z0{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Zo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const w=[];for(let M=0,S=d.length;M<S;M++){const b=d[M],U=new ds;U.curves=b.curves,w.push(U)}return w}function i(d,w){const M=w.length;let S=!1;for(let b=M-1,U=0;U<M;b=U++){let D=w[b],B=w[U],E=B.x-D.x,C=B.y-D.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(D=w[U],E=-E,B=w[b],C=-C),d.y<D.y||d.y>B.y)continue;if(d.y===D.y){if(d.x===D.x)return!0}else{const Q=C*(d.x-D.x)-E*(d.y-D.y);if(Q===0)return!0;if(Q<0)continue;S=!S}}else{if(d.y!==D.y)continue;if(B.x<=d.x&&d.x<=D.x||D.x<=d.x&&d.x<=B.x)return!0}}return S}const r=Vi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ds,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let m=[],_=0,v;f[_]=void 0,m[_]=[];for(let d=0,w=s.length;d<w;d++)a=s[d],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new ds,p:v},f[_].s.curves=a.curves,u&&_++,m[_]=[]):m[_].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,w=0;for(let M=0,S=f.length;M<S;M++)h[M]=[];for(let M=0,S=f.length;M<S;M++){const b=m[M];for(let U=0;U<b.length;U++){const D=b[U];let B=!0;for(let E=0;E<f.length;E++)i(D.p,f[E].p)&&(M!==E&&w++,B?(B=!1,h[E].push(D)):d=!0);B&&h[M].push(D)}}w>0&&d===!1&&(m=h)}let p;for(let d=0,w=f.length;d<w;d++){l=f[d].s,c.push(l),p=m[d];for(let M=0,S=p.length;M<S;M++)l.holes.push(p[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);const $0=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Gc={type:"change"},wo={type:"start"},Vc={type:"end"};class J0 extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",ne),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gc),i.update(),s=r.NONE},this.update=function(){const R=new O,te=new li().setFromUnitVectors(e.up,new O(0,1,0)),le=te.clone().invert(),X=new O,be=new li,we=new O,Re=2*Math.PI;return function(){const xe=i.object.position;R.copy(xe).sub(i.target),R.applyQuaternion(te),a.setFromVector3(R),i.autoRotate&&s===r.NONE&&E(D()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=i.minAzimuthAngle,We=i.maxAzimuthAngle;return isFinite(Le)&&isFinite(We)&&(Le<-Math.PI?Le+=Re:Le>Math.PI&&(Le-=Re),We<-Math.PI?We+=Re:We>Math.PI&&(We-=Re),Le<=We?a.theta=Math.max(Le,Math.min(We,a.theta)):a.theta=a.theta>(Le+We)/2?Math.max(Le,a.theta):Math.min(We,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),R.setFromSpherical(a),R.applyQuaternion(le),xe.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||X.distanceToSquared(i.object.position)>o||8*(1-be.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>0?(i.dispatchEvent(Gc),X.copy(i.object.position),be.copy(i.object.quaternion),we.copy(i.target),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",y),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",L),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hc,l=new Hc;let c=1;const u=new O;let h=!1;const f=new de,m=new de,_=new de,v=new de,p=new de,d=new de,w=new de,M=new de,S=new de,b=[],U={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function B(){return Math.pow(.95,i.zoomSpeed)}function E(R){l.theta-=R}function C(R){l.phi-=R}const Q=function(){const R=new O;return function(le,X){R.setFromMatrixColumn(X,0),R.multiplyScalar(-le),u.add(R)}}(),fe=function(){const R=new O;return function(le,X){i.screenSpacePanning===!0?R.setFromMatrixColumn(X,1):(R.setFromMatrixColumn(X,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(le),u.add(R)}}(),G=function(){const R=new O;return function(le,X){const be=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;R.copy(we).sub(i.target);let Re=R.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*le*Re/be.clientHeight,i.object.matrix),fe(2*X*Re/be.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(le*(i.object.right-i.object.left)/i.object.zoom/be.clientWidth,i.object.matrix),fe(X*(i.object.top-i.object.bottom)/i.object.zoom/be.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(R){i.object.isPerspectiveCamera?c/=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*R)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera?c*=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/R)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(R){f.set(R.clientX,R.clientY)}function W(R){w.set(R.clientX,R.clientY)}function K(R){v.set(R.clientX,R.clientY)}function ce(R){m.set(R.clientX,R.clientY),_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;E(2*Math.PI*_.x/te.clientHeight),C(2*Math.PI*_.y/te.clientHeight),f.copy(m),i.update()}function ae(R){M.set(R.clientX,R.clientY),S.subVectors(M,w),S.y>0?Y(B()):S.y<0&&$(B()),w.copy(M),i.update()}function Me(R){p.set(R.clientX,R.clientY),d.subVectors(p,v).multiplyScalar(i.panSpeed),G(d.x,d.y),v.copy(p),i.update()}function z(R){R.deltaY<0?$(B()):R.deltaY>0&&Y(B()),i.update()}function ue(R){let te=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),te=!0;break}te&&(R.preventDefault(),i.update())}function he(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),te=.5*(b[0].pageY+b[1].pageY);f.set(R,te)}}function Ee(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),te=.5*(b[0].pageY+b[1].pageY);v.set(R,te)}}function ge(){const R=b[0].pageX-b[1].pageX,te=b[0].pageY-b[1].pageY,le=Math.sqrt(R*R+te*te);w.set(0,le)}function Te(){i.enableZoom&&ge(),i.enablePan&&Ee()}function De(){i.enableZoom&&ge(),i.enableRotate&&he()}function Ce(R){if(b.length==1)m.set(R.pageX,R.pageY);else{const le=oe(R),X=.5*(R.pageX+le.x),be=.5*(R.pageY+le.y);m.set(X,be)}_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;E(2*Math.PI*_.x/te.clientHeight),C(2*Math.PI*_.y/te.clientHeight),f.copy(m)}function Xe(R){if(b.length===1)p.set(R.pageX,R.pageY);else{const te=oe(R),le=.5*(R.pageX+te.x),X=.5*(R.pageY+te.y);p.set(le,X)}d.subVectors(p,v).multiplyScalar(i.panSpeed),G(d.x,d.y),v.copy(p)}function Pe(R){const te=oe(R),le=R.pageX-te.x,X=R.pageY-te.y,be=Math.sqrt(le*le+X*X);M.set(0,be),S.set(0,Math.pow(M.y/w.y,i.zoomSpeed)),Y(S.y),w.copy(M)}function g(R){i.enableZoom&&Pe(R),i.enablePan&&Xe(R)}function A(R){i.enableZoom&&Pe(R),i.enableRotate&&Ce(R)}function P(R){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",N),i.domElement.addEventListener("pointerup",L)),x(R),R.pointerType==="touch"?J(R):q(R))}function N(R){i.enabled!==!1&&(R.pointerType==="touch"?pe(R):j(R))}function L(R){F(R),b.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",L)),i.dispatchEvent(Vc),s=r.NONE}function q(R){let te;switch(R.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case pi.DOLLY:if(i.enableZoom===!1)return;W(R),s=r.DOLLY;break;case pi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;K(R),s=r.PAN}else{if(i.enableRotate===!1)return;se(R),s=r.ROTATE}break;case pi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;se(R),s=r.ROTATE}else{if(i.enablePan===!1)return;K(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wo)}function j(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ce(R);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(R);break;case r.PAN:if(i.enablePan===!1)return;Me(R);break}}function V(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(wo),z(R),i.dispatchEvent(Vc))}function ne(R){i.enabled===!1||i.enablePan===!1||ue(R)}function J(R){switch(ee(R),b.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;he(),s=r.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;Ee(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(),s=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wo)}function pe(R){switch(ee(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ce(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Xe(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;g(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(R),i.update();break;default:s=r.NONE}}function y(R){i.enabled!==!1&&R.preventDefault()}function x(R){b.push(R)}function F(R){delete U[R.pointerId];for(let te=0;te<b.length;te++)if(b[te].pointerId==R.pointerId){b.splice(te,1);return}}function ee(R){let te=U[R.pointerId];te===void 0&&(te=new de,U[R.pointerId]=te),te.set(R.pageX,R.pageY)}function oe(R){const te=R.pointerId===b[0].pointerId?b[1]:b[0];return U[te.pointerId]}i.domElement.addEventListener("contextmenu",y),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}class Q0 extends Da{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class eM extends xh{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new k0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new tM(e)}}class tM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=nM(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function nM(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=iM(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function iM(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new Z0;let a,l,c,u,h,f,m,_;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,d=v.length;p<d;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+i,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+i,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+i,h=v[p++]*e+t,f=v[p++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+i,h=v[p++]*e+t,f=v[p++]*e+i,m=v[p++]*e+t,_=v[p++]*e+i,o.bezierCurveTo(h,f,m,_,c,u);break}}return{offsetX:s.ha*e,path:o}}const rM={id:"scene-container"},sM={__name:"Box",setup(n){class e{constructor(i){fi(this,"cubeConfig",{gap:.2,cubeLength:4,size:{x:4,y:5,z:6}});fi(this,"animateConfig",{translateDistance:10,rotateAngle:Math.PI/3});fi(this,"lastActiveCube");fi(this,"cubePosMap",new Map);fi(this,"cubeList",[]);this.raycaster=new K0,this.hoverMouse=new de(-1/0,-1/0),this.clickMouse=new de(-1/0,-1/0),this.BoxGroup=new Ni,this.clock=new j0}init(){this.getContainer(),this.initScene(),this.initCamera(),this.initLight(),this.initMesh(),this.dataLayout(),this.initGroup(),this.initRender(),this.createControls(),this.registerMouseEvent()}getContainer(){this.container=document.querySelector("#scene-container")}initScene(){this.scene=new o0,this.scene.background=new Ye("white")}initCamera(){const r=this.container.clientWidth/this.container.clientHeight,s=.1,o=1e3;this.camera=new Ft(35,r,s,o),this.camera.position.set(0,0,50)}initLight(){this.light=new Y0("white",4),this.light.position.set(10,10,10),this.partLight=new W0("white","darkslategrey",1),this.scene.add(this.light,this.partLight)}initMesh(){const{gap:i,size:r,cubeLength:s}=this.cubeConfig,{rotateAngle:o,translateDistance:a}=this.animateConfig;for(let l=0;l<r.x*r.y*r.z;l++){const c=l%r.x,u=Math.floor(l%(r.x*r.y)/r.x),h=Math.floor(l/r.x/r.y),{rowIndex:f,columIndex:m,areaIndex:_}=this.formatCoordinate(c,u,h),v=f*(i+s),p=m*(i+s),d=_*(i+s),w=new z0({color:"blue",transparent:!0,opacity:.6}),M=new tr(s,s,s),S=new rn(M,w),b=new Ni;b.add(S),b.position.set(v,p,d),this.cubePosMap.set(S,h),this.cubePosMap.set(`${c},${u},${h}`,{cubeGroup:b,maxPosY:b.position.y+a,minPosY:b.position.y,maxTextAngle:-Math.PI/2+o,minTextAngle:-Math.PI/2}),this.cubeList.push(b),this.BoxGroup.add(b)}}formatCoordinate(i,r,s){const{size:o}=this.cubeConfig;return{rowIndex:o.x-i-1,columIndex:s,areaIndex:o.y-r-1}}dataLayout(){const i=[{x:"1街道",y:"1指标",z:"合格",pos:"0,0,0"},{x:"1街道",y:"2指标",z:"合格",pos:"0,1,0"},{x:"1街道",y:"3指标",z:"合格",pos:"0,2,0"},{x:"1街道",y:"4指标",z:"合格",pos:"0,3,0"},{x:"1街道",y:"5指标",z:"合格",pos:"0,4,0"},{x:"2街道",y:"1指标",z:"合格",pos:"1,0,0"},{x:"2街道",y:"1指标",z:"合格",pos:"1,0,1"}];if(!this.isDataValid(i))return;const r={size:.5,height:.01,curveSegments:12,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:1};new eM().load("/fonts/YouSheBiaoTiHei_Regular.json",o=>{i.forEach(a=>{this.createTextMesh(a,{font:o,...r}).forEach(c=>{var f;const{textMesh:u,area:h}=c;this.adjustMeshPosition(u,h,a.pos),(f=this.cubePosMap.get(a.pos))==null||f.cubeGroup.add(c.textMesh)})})})}isDataValid(i){const r={};for(let s=0;s<i.length;s++){const[o,a,l]=i[s].pos.split(",");if(!o||!a||!l)return alert(`第${s}项坐标数据格式有误`),!1;const c=`x${o}${l}`,u=`y${a}${l}`;if(r[c]!==void 0&&r[c]!==i[s].x)return alert(`${r[c]} ${i[s].x} x轴数据需要一致`),!1;if(r[c]=i[s].x,r[u]!==void 0&&r[u]!==i[s].y)return alert(`${r[u]} ${i[s].y} y轴数据需要一致`),!1;r[u]=i[s].y}return!0}initGroup(){const{gap:i,size:r,cubeLength:s}=this.cubeConfig;this.BoxGroup.position.set(0,-((s+i)*r.z-i)/2,-10),this.BoxGroup.rotation.y=-Math.PI/4,this.scene.add(this.BoxGroup)}initRender(){const i={antialias:!0};this.renderer=new uh(i),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.append(this.renderer.domElement),this.renderer.render(this.scene,this.camera)}createControls(){this.controls=new J0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}startAnimate(){this.animateFlug||(this.animateFlug=window.requestAnimationFrame(this.draw.bind(this)))}endAnimate(){window.cancelAnimationFrame(this.animateFlug),this.animateFlug=null}draw(){const i=()=>{this.raycaster.setFromCamera(this.hoverMouse,this.camera);const o=this.raycaster.intersectObjects(this.scene.children);this.lastActiveCube&&(this.lastActiveCube.material.color.set("blue"),this.lastActiveCube=null);for(let a=0;a<o.length;a++)if(o[a].object.geometry.type==="BoxGeometry"){o[a].object.material.color.set("green"),this.lastActiveCube=o[a].object;break}},r=()=>{var c;this.raycaster.setFromCamera(this.clickMouse,this.camera);const o=this.raycaster.intersectObjects(this.scene.children);let a;for(let u=0;u<o.length;u++)if(o[u].object.geometry.type==="BoxGeometry"){a=o[u].object;break}a==null||a.material.color.set("red");const l=this.cubePosMap.get(a)??1/0;for(let u of this.cubePosMap){const[h,f]=u;if(typeof h=="string"){const[m,_,v]=h.split(","),p=f.maxPosY-f.minPosY,d=f.maxTextAngle-f.minTextAngle,w=(c=f.cubeGroup)==null?void 0:c.children.filter(this.isZtextMesh)[0];Number(v)>l?f.maxPosY>f.cubeGroup.position.y&&(f.cubeGroup.position.y=Math.min(f.maxPosY,f.cubeGroup.position.y+p*s)):f.minPosY<f.cubeGroup.position.y&&(f.cubeGroup.position.y=Math.max(f.minPosY,f.cubeGroup.position.y-p*s)),Number(v)===l?w&&(w.rotation.x=Math.min(f.maxTextAngle,w.rotation.x+d*s)):w&&(w.rotation.x=Math.max(f.minTextAngle,w.rotation.x-d*s))}}},s=this.clock.getDelta();this.controls.update(),i(),r(),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.draw.bind(this))}registerMouseEvent(){document.addEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1),document.addEventListener("click",this.onDocumentClick.bind(this),!1)}removeMouseEvent(){document.removeEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1),document.addEventListener("click",this.onDocumentClick.bind(this),!1)}onDocumentMouseMove(i){this.hoverMouse.x=i.clientX/window.innerWidth*2-1,this.hoverMouse.y=-(i.clientY/window.innerHeight)*2+1}onDocumentClick(i){this.clickMouse.x=i.clientX/window.innerWidth*2-1,this.clickMouse.y=-(i.clientY/window.innerHeight)*2+1}createTextMesh(i,r){const{x:s,y:o,z:a,pos:l}=i;return[s,o,a].map((c,u)=>{var _,v,p;(_=l.split(","))==null||_[u];const h=new Q0(c,r),f=new vh({color:"skyblue"});return(((v=l.split(","))==null?void 0:v[0])!=="0"&&u===1||((p=l.split(","))==null?void 0:p[1])!=="0"&&u===0)&&(f.transparent=!0,f.opacity=0),{textMesh:new rn(h,f),area:["x","y","z"][u]}})}isZtextMesh(i){return i.geometry.type==="TextGeometry"&&i.rotation.x!==0}adjustMeshPosition(i,r,s){const{gap:o,cubeLength:a}=this.cubeConfig;s.split(",");const l=this.getMeshSize(i);l.x>a||(r==="x"?(i.position.x=-l.x/2,i.position.y=-l.y/2,i.position.z=(a-l.z)/2):r==="y"?(i.position.x=(a-l.z)/2,i.position.y=-l.y/2,i.position.z=l.x/2,i.rotation.y=Math.PI/2):r==="z"&&(i.position.x=-l.x/2,i.position.y=(a-l.z)/2,i.position.z=l.y/2,i.rotation.x=-Math.PI/2))}getMeshSize(i){const r=new er;var s=new O;return r.setFromObject(i),r.getSize(s)}}return gu(()=>{const t=new e;t.init(),t.startAnimate()}),(t,i)=>(Au(),xd("div",rM))}},oM=$0(sM,[["__scopeId","data-v-f8145185"]]),aM={__name:"App",setup(n){return(e,t)=>(Au(),Md(oM))}};ip(aM).mount("#app");
