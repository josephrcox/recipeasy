var Ro=Object.defineProperty;var ni=e=>{throw TypeError(e)};var jo=(e,t,r)=>t in e?Ro(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var He=(e,t,r)=>jo(e,typeof t!="symbol"?t+"":t,r),_n=(e,t,r)=>t.has(e)||ni("Cannot "+r);var d=(e,t,r)=>(_n(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?ni("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),F=(e,t,r,n)=>(_n(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),J=(e,t,r)=>(_n(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Lo=!1;var jn=Array.isArray,Do=Array.prototype.indexOf,ar=Array.prototype.includes,ln=Array.from,Fo=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Ni=Object.getOwnPropertyDescriptors,Vo=Object.prototype,Uo=Array.prototype,Ln=Object.getPrototypeOf,ii=Object.isExtensible;function _r(e){return typeof e=="function"}const Ho=()=>{};function qo(e){return e()}function En(e){for(var t=0;t<e.length;t++)e[t]()}function zi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Bo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ue=2,lr=4,Or=8,Dn=1<<24,Ct=16,Xe=32,Yt=64,Sn=128,je=512,ie=1024,ge=2048,ft=4096,Pe=8192,Le=16384,Xt=32768,oi=1<<25,Gt=65536,si=1<<17,Wo=1<<18,hr=1<<19,Ai=1<<20,ut=1<<25,Kt=65536,Tn=1<<21,Fn=1<<22,It=1<<23,mt=Symbol("$state"),Ii=Symbol("legacy props"),Yo=Symbol(""),dt=new class extends Error{constructor(){super(...arguments);He(this,"name","StaleReactionError");He(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Ei;const xi=!!((Ei=globalThis.document)!=null&&Ei.contentType)&&globalThis.document.contentType.includes("xml");function Go(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ko(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Jo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Qo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function es(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ts(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function rs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ns(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function is(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const os=1,ss=2,Pi=4,as=8,ls=16,us=1,fs=2,Oi=4,cs=8,vs=16,ds=1,hs=2,ae=Symbol(),Ci="http://www.w3.org/1999/xhtml",ps="http://www.w3.org/2000/svg",_s="@attach";function gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function bs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Mi(e){return e===this.v}function ms(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function $i(e){return!ms(e,this.v)}let Cr=!1,ys=!1;function ks(){Cr=!0}let le=null;function ur(e){le=e}function Ze(e,t=!1,r){le={p:le,i:!1,c:null,e:null,s:e,x:null,r:D,l:Cr&&!t?{s:null,u:null,$:[]}:null}}function Qe(e){var t=le,r=t.e;if(r!==null){t.e=null;for(var n of r)so(n)}return t.i=!0,le=t.p,{}}function Mr(){return!Cr||le!==null&&le.l===null}let Rt=[];function Ri(){var e=Rt;Rt=[],En(e)}function yt(e){if(Rt.length===0&&!kr){var t=Rt;queueMicrotask(()=>{t===Rt&&Ri()})}Rt.push(e)}function ws(){for(;Rt.length>0;)Ri()}function ji(e){var t=D;if(t===null)return j.f|=It,e;if(!(t.f&Xt)&&!(t.f&lr))throw e;zt(e,t)}function zt(e,t){for(;t!==null;){if(t.f&Sn){if(!(t.f&Xt))throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Es=-7169;function ee(e,t){e.f=e.f&Es|t}function Vn(e){e.f&je||e.deps===null?ee(e,ie):ee(e,ft)}function Li(e){if(e!==null)for(const t of e)!(t.f&ue)||!(t.f&Kt)||(t.f^=Kt,Li(t.deps))}function Di(e,t,r){e.f&ge?t.add(e):e.f&ft&&r.add(e),Li(e.deps),ee(e,ie)}let Yr=!1;function Ss(e){var t=Yr;try{return Yr=!1,[e(),Yr]}finally{Yr=t}}const St=new Set;let M=null,ve=null,Nn=null,kr=!1,gn=!1,rr=null,Kr=null;var ai=0;let Ts=1;var nr,ir,pt,it,zr,Ae,Dt,_t,ot,or,Ft,te,Jr,Fi,Xr,zn,An,Vi;const on=class on{constructor(){L(this,te);He(this,"id",Ts++);He(this,"current",new Map);He(this,"previous",new Map);L(this,nr,new Set);L(this,ir,new Set);L(this,pt,new Map);L(this,it,new Map);L(this,zr,null);L(this,Ae,[]);L(this,Dt,new Set);L(this,_t,new Set);L(this,ot,new Map);He(this,"is_fork",!1);L(this,or,!1);L(this,Ft,new Set)}skip_effect(t){d(this,ot).has(t)||d(this,ot).set(t,{d:[],m:[]})}unskip_effect(t){var r=d(this,ot).get(t);if(r){d(this,ot).delete(t);for(var n of r.d)ee(n,ge),this.schedule(n);for(n of r.m)ee(n,ft),this.schedule(n)}}capture(t,r,n=!1){r!==ae&&!this.previous.has(t)&&this.previous.set(t,r),t.f&It||(this.current.set(t,[t.v,n]),ve==null||ve.set(t,t.v))}activate(){M=this}deactivate(){M=null,ve=null}flush(){try{gn=!0,M=this,J(this,te,Xr).call(this)}finally{ai=0,Nn=null,rr=null,Kr=null,gn=!1,M=null,ve=null,xt.clear()}}discard(){for(const t of d(this,ir))t(this);d(this,ir).clear(),St.delete(this)}increment(t,r){let n=d(this,pt).get(r)??0;if(d(this,pt).set(r,n+1),t){let i=d(this,it).get(r)??0;d(this,it).set(r,i+1)}}decrement(t,r,n){let i=d(this,pt).get(r)??0;if(i===1?d(this,pt).delete(r):d(this,pt).set(r,i-1),t){let o=d(this,it).get(r)??0;o===1?d(this,it).delete(r):d(this,it).set(r,o-1)}d(this,or)||n||(F(this,or,!0),yt(()=>{F(this,or,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)d(this,Dt).add(n);for(const n of r)d(this,_t).add(n);t.clear(),r.clear()}oncommit(t){d(this,nr).add(t)}ondiscard(t){d(this,ir).add(t)}settled(){return(d(this,zr)??F(this,zr,zi())).promise}static ensure(){if(M===null){const t=M=new on;gn||(St.add(M),kr||yt(()=>{M===t&&t.flush()}))}return M}apply(){{ve=null;return}}schedule(t){var i;if(Nn=t,(i=t.b)!=null&&i.is_pending&&t.f&(lr|Or|Dn)&&!(t.f&Xt)){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(rr!==null&&r===D&&(j===null||!(j.f&ue)))return;if(n&(Yt|Xe)){if(!(n&ie))return;r.f^=ie}}d(this,Ae).push(r)}};nr=new WeakMap,ir=new WeakMap,pt=new WeakMap,it=new WeakMap,zr=new WeakMap,Ae=new WeakMap,Dt=new WeakMap,_t=new WeakMap,ot=new WeakMap,or=new WeakMap,Ft=new WeakMap,te=new WeakSet,Jr=function(){return this.is_fork||d(this,it).size>0},Fi=function(){for(const n of d(this,Ft))for(const i of d(n,it).keys()){for(var t=!1,r=i;r.parent!==null;){if(d(this,ot).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},Xr=function(){var a,u;if(ai++>1e3&&(St.delete(this),zs()),!J(this,te,Jr).call(this)){for(const f of d(this,Dt))d(this,_t).delete(f),ee(f,ge),this.schedule(f);for(const f of d(this,_t))ee(f,ft),this.schedule(f)}const t=d(this,Ae);F(this,Ae,[]),this.apply();var r=rr=[],n=[],i=Kr=[];for(const f of t)try{J(this,te,zn).call(this,f,r,n)}catch(c){throw Bi(f),c}if(M=null,i.length>0){var o=on.ensure();for(const f of i)o.schedule(f)}if(rr=null,Kr=null,J(this,te,Jr).call(this)||J(this,te,Fi).call(this)){J(this,te,An).call(this,n),J(this,te,An).call(this,r);for(const[f,c]of d(this,ot))qi(f,c)}else{d(this,pt).size===0&&St.delete(this),d(this,Dt).clear(),d(this,_t).clear();for(const f of d(this,nr))f(this);d(this,nr).clear(),li(n),li(r),(a=d(this,zr))==null||a.resolve()}var s=M;if(d(this,Ae).length>0){const f=s??(s=this);d(f,Ae).push(...d(this,Ae).filter(c=>!d(f,Ae).includes(c)))}s!==null&&(St.add(s),J(u=s,te,Xr).call(u)),St.has(this)||J(this,te,Vi).call(this)},zn=function(t,r,n){t.f^=ie;for(var i=t.first;i!==null;){var o=i.f,s=(o&(Xe|Yt))!==0,a=s&&(o&ie)!==0,u=a||(o&Pe)!==0||d(this,ot).has(i);if(!u&&i.fn!==null){s?i.f^=ie:o&lr?r.push(i):jr(i)&&(o&Ct&&d(this,_t).add(i),vr(i));var f=i.first;if(f!==null){i=f;continue}}for(;i!==null;){var c=i.next;if(c!==null){i=c;break}i=i.parent}}},An=function(t){for(var r=0;r<t.length;r+=1)Di(t[r],d(this,Dt),d(this,_t))},Vi=function(){var f,c,g;for(const v of St){var t=v.id<this.id,r=[];for(const[y,[h,b]]of this.current){if(v.current.has(y)){var n=v.current.get(y)[0];if(t&&h!==n)v.current.set(y,[h,b]);else continue}r.push(y)}var i=[...v.current.keys()].filter(y=>!this.current.has(y));if(i.length===0)t&&v.discard();else if(r.length>0){v.activate();var o=new Set,s=new Map;for(var a of r)Ui(a,i,o,s);if(d(v,Ae).length>0){v.apply();for(var u of d(v,Ae))J(f=v,te,zn).call(f,u,[],[]);F(v,Ae,[])}v.deactivate()}}for(const v of St)d(v,Ft).has(this)&&(d(v,Ft).delete(this),d(v,Ft).size===0&&!J(c=v,te,Jr).call(c)&&(v.activate(),J(g=v,te,Xr).call(g)))};let Jt=on;function Ns(e){var t=kr;kr=!0;try{for(var r;;){if(ws(),M===null)return r;M.flush()}}finally{kr=t}}function zs(){try{Qo()}catch(e){zt(e,Nn)}}let qe=null;function li(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if(!(n.f&(Le|Pe))&&jr(n)&&(qe=new Set,vr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&fo(n),(qe==null?void 0:qe.size)>0)){xt.clear();for(const i of qe){if(i.f&(Le|Pe))continue;const o=[i];let s=i.parent;for(;s!==null;)qe.has(s)&&(qe.delete(s),o.push(s)),s=s.parent;for(let a=o.length-1;a>=0;a--){const u=o[a];u.f&(Le|Pe)||vr(u)}}qe.clear()}}qe=null}}function Ui(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const o=i.f;o&ue?Ui(i,t,r,n):o&(Fn|Ct)&&!(o&ge)&&Hi(i,t,n)&&(ee(i,ge),Un(i))}}function Hi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(ar.call(t,i))return!0;if(i.f&ue&&Hi(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Un(e){M.schedule(e)}function qi(e,t){if(!(e.f&Xe&&e.f&ie)){e.f&ge?t.d.push(e):e.f&ft&&t.m.push(e),ee(e,ie);for(var r=e.first;r!==null;)qi(r,t),r=r.next}}function Bi(e){ee(e,ie);for(var t=e.first;t!==null;)Bi(t),t=t.next}function As(e){let t=0,r=Pt(0),n;return()=>{Bn()&&(l(r),ao(()=>(t===0&&(n=dr(()=>e(()=>wr(r)))),t+=1,()=>{yt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,wr(r))})})))}}var Is=Gt|hr;function xs(e,t,r,n){new Ps(e,t,r,n)}var Me,Rn,st,Vt,ke,at,Ie,Be,gt,Ut,Nt,sr,Ar,Ir,bt,sn,oe,Os,Cs,Ms,In,Zr,Qr,xn;class Ps{constructor(t,r,n,i){L(this,oe);He(this,"parent");He(this,"is_pending",!1);He(this,"transform_error");L(this,Me);L(this,Rn,null);L(this,st);L(this,Vt);L(this,ke);L(this,at,null);L(this,Ie,null);L(this,Be,null);L(this,gt,null);L(this,Ut,0);L(this,Nt,0);L(this,sr,!1);L(this,Ar,new Set);L(this,Ir,new Set);L(this,bt,null);L(this,sn,As(()=>(F(this,bt,Pt(d(this,Ut))),()=>{F(this,bt,null)})));var o;F(this,Me,t),F(this,st,r),F(this,Vt,s=>{var a=D;a.b=this,a.f|=Sn,n(s)}),this.parent=D.b,this.transform_error=i??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),F(this,ke,fn(()=>{J(this,oe,In).call(this)},Is))}defer_effect(t){Di(t,d(this,Ar),d(this,Ir))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!d(this,st).pending}update_pending_count(t,r){J(this,oe,xn).call(this,t,r),F(this,Ut,d(this,Ut)+t),!(!d(this,bt)||d(this,sr))&&(F(this,sr,!0),yt(()=>{F(this,sr,!1),d(this,bt)&&fr(d(this,bt),d(this,Ut))}))}get_effect_pending(){return d(this,sn).call(this),l(d(this,bt))}error(t){var r=d(this,st).onerror;let n=d(this,st).failed;if(!r&&!n)throw t;d(this,at)&&(de(d(this,at)),F(this,at,null)),d(this,Ie)&&(de(d(this,Ie)),F(this,Ie,null)),d(this,Be)&&(de(d(this,Be)),F(this,Be,null));var i=!1,o=!1;const s=()=>{if(i){bs();return}i=!0,o&&is(),d(this,Be)!==null&&qt(d(this,Be),()=>{F(this,Be,null)}),J(this,oe,Qr).call(this,()=>{J(this,oe,In).call(this)})},a=u=>{try{o=!0,r==null||r(u,s),o=!1}catch(f){zt(f,d(this,ke)&&d(this,ke).parent)}n&&F(this,Be,J(this,oe,Qr).call(this,()=>{try{return Ee(()=>{var f=D;f.b=this,f.f|=Sn,n(d(this,Me),()=>u,()=>s)})}catch(f){return zt(f,d(this,ke).parent),null}}))};yt(()=>{var u;try{u=this.transform_error(t)}catch(f){zt(f,d(this,ke)&&d(this,ke).parent);return}u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(a,f=>zt(f,d(this,ke)&&d(this,ke).parent)):a(u)})}}Me=new WeakMap,Rn=new WeakMap,st=new WeakMap,Vt=new WeakMap,ke=new WeakMap,at=new WeakMap,Ie=new WeakMap,Be=new WeakMap,gt=new WeakMap,Ut=new WeakMap,Nt=new WeakMap,sr=new WeakMap,Ar=new WeakMap,Ir=new WeakMap,bt=new WeakMap,sn=new WeakMap,oe=new WeakSet,Os=function(){try{F(this,at,Ee(()=>d(this,Vt).call(this,d(this,Me))))}catch(t){this.error(t)}},Cs=function(t){const r=d(this,st).failed;r&&F(this,Be,Ee(()=>{r(d(this,Me),()=>t,()=>()=>{})}))},Ms=function(){const t=d(this,st).pending;t&&(this.is_pending=!0,F(this,Ie,Ee(()=>t(d(this,Me)))),yt(()=>{var r=F(this,gt,document.createDocumentFragment()),n=kt();r.append(n),F(this,at,J(this,oe,Qr).call(this,()=>Ee(()=>d(this,Vt).call(this,n)))),d(this,Nt)===0&&(d(this,Me).before(r),F(this,gt,null),qt(d(this,Ie),()=>{F(this,Ie,null)}),J(this,oe,Zr).call(this,M))}))},In=function(){try{if(this.is_pending=this.has_pending_snippet(),F(this,Nt,0),F(this,Ut,0),F(this,at,Ee(()=>{d(this,Vt).call(this,d(this,Me))})),d(this,Nt)>0){var t=F(this,gt,document.createDocumentFragment());Jn(d(this,at),t);const r=d(this,st).pending;F(this,Ie,Ee(()=>r(d(this,Me))))}else J(this,oe,Zr).call(this,M)}catch(r){this.error(r)}},Zr=function(t){this.is_pending=!1,t.transfer_effects(d(this,Ar),d(this,Ir))},Qr=function(t){var r=D,n=j,i=le;Ve(d(this,ke)),Fe(d(this,ke)),ur(d(this,ke).ctx);try{return Jt.ensure(),t()}catch(o){return ji(o),null}finally{Ve(r),Fe(n),ur(i)}},xn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&J(n=this.parent,oe,xn).call(n,t,r);return}F(this,Nt,d(this,Nt)+t),d(this,Nt)===0&&(J(this,oe,Zr).call(this,r),d(this,Ie)&&qt(d(this,Ie),()=>{F(this,Ie,null)}),d(this,gt)&&(d(this,Me).before(d(this,gt)),F(this,gt,null)))};function Wi(e,t,r,n){const i=Mr()?$r:Hn;var o=e.filter(v=>!v.settled);if(r.length===0&&o.length===0){n(t.map(i));return}var s=D,a=$s(),u=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(v=>v.promise)):null;function f(v){a();try{n(v)}catch(y){s.f&Le||zt(y,s)}tn()}if(r.length===0){u.then(()=>f(t.map(i)));return}var c=Yi();function g(){Promise.all(r.map(v=>Rs(v))).then(v=>f([...t.map(i),...v])).catch(v=>zt(v,s)).finally(()=>c())}u?u.then(()=>{a(),g(),tn()}):g()}function $s(){var e=D,t=j,r=le,n=M;return function(o=!0){Ve(e),Fe(t),ur(r),o&&!(e.f&Le)&&(n==null||n.activate(),n==null||n.apply())}}function tn(e=!0){Ve(null),Fe(null),ur(null),e&&(M==null||M.deactivate())}function Yi(){var e=D,t=e.b,r=M,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(i=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,i)}}function $r(e){var t=ue|ge,r=j!==null&&j.f&ue?j:null;return D!==null&&(D.f|=hr),{ctx:le,deps:null,effects:null,equals:Mi,f:t,fn:e,reactions:null,rv:0,v:ae,wv:0,parent:r??D,ac:null}}function Rs(e,t,r){let n=D;n===null&&Go();var i=void 0,o=Pt(ae),s=!j,a=new Map;return Ks(()=>{var y;var u=D,f=zi();i=f.promise;try{Promise.resolve(e()).then(f.resolve,f.reject).finally(tn)}catch(h){f.reject(h),tn()}var c=M;if(s){if(u.f&Xt)var g=Yi();if(n.b.is_rendered())(y=a.get(c))==null||y.reject(dt),a.delete(c);else{for(const h of a.values())h.reject(dt);a.clear()}a.set(c,f)}const v=(h,b=void 0)=>{if(g){var p=b===dt;g(p)}if(!(b===dt||u.f&Le)){if(c.activate(),b)o.f|=It,fr(o,b);else{o.f&It&&(o.f^=It),fr(o,h);for(const[_,N]of a){if(a.delete(_),_===c)break;N.reject(dt)}}c.deactivate()}};f.promise.then(v,h=>v(null,h||"unknown"))}),Wn(()=>{for(const u of a.values())u.reject(dt)}),new Promise(u=>{function f(c){function g(){c===i?u(o):f(i)}c.then(g,g)}f(i)})}function $e(e){const t=$r(e);return ho(t),t}function Hn(e){const t=$r(e);return t.equals=$i,t}function js(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)de(t[r])}}function Ls(e){for(var t=e.parent;t!==null;){if(!(t.f&ue))return t.f&Le?null:t;t=t.parent}return null}function qn(e){var t,r=D;Ve(Ls(e));try{e.f&=~Kt,js(e),t=bo(e)}finally{Ve(r)}return t}function Gi(e){var t=e.v,r=qn(e);if(!e.equals(r)&&(e.wv=_o(),(!(M!=null&&M.is_fork)||e.deps===null)&&(e.v=r,M==null||M.capture(e,t,!0),e.deps===null))){ee(e,ie);return}Ot||(ve!==null?(Bn()||M!=null&&M.is_fork)&&ve.set(e,r):Vn(e))}function Ds(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(dt),n.teardown=Ho,n.ac=null,Sr(n,0),Gn(n))}function Ki(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&vr(t)}let Pn=new Set;const xt=new Map;let Ji=!1;function Pt(e,t){var r={f:0,v:e,reactions:null,equals:Mi,rv:0,wv:0};return r}function U(e,t){const r=Pt(e);return ho(r),r}function Fs(e,t=!1,r=!0){var i;const n=Pt(e);return t||(n.equals=$i),Cr&&r&&le!==null&&le.l!==null&&((i=le.l).s??(i.s=[])).push(n),n}function S(e,t,r=!1){j!==null&&(!Ye||j.f&si)&&Mr()&&j.f&(ue|Ct|Fn|si)&&(De===null||!ar.call(De,e))&&ns();let n=r?Re(t):t;return fr(e,n,Kr)}function fr(e,t,r=null){if(!e.equals(t)){var n=e.v;Ot?xt.set(e,t):xt.set(e,n),e.v=t;var i=Jt.ensure();if(i.capture(e,n),e.f&ue){const o=e;e.f&ge&&qn(o),ve===null&&Vn(o)}e.wv=_o(),Xi(e,ge,r),Mr()&&D!==null&&D.f&ie&&!(D.f&(Xe|Yt))&&(Ce===null?Zs([e]):Ce.push(e)),!i.is_fork&&Pn.size>0&&!Ji&&Vs()}return t}function Vs(){Ji=!1;for(const e of Pn)e.f&ie&&ee(e,ft),jr(e)&&vr(e);Pn.clear()}function ui(e,t=1){var r=l(e),n=t===1?r++:r--;return S(e,r),n}function wr(e){S(e,e.v+1)}function Xi(e,t,r){var n=e.reactions;if(n!==null)for(var i=Mr(),o=n.length,s=0;s<o;s++){var a=n[s],u=a.f;if(!(!i&&a===D)){var f=(u&ge)===0;if(f&&ee(a,t),u&ue){var c=a;ve==null||ve.delete(c),u&Kt||(u&je&&(a.f|=Kt),Xi(c,ft,r))}else if(f){var g=a;u&Ct&&qe!==null&&qe.add(g),r!==null?r.push(g):Un(g)}}}}function Re(e){if(typeof e!="object"||e===null||mt in e)return e;const t=Ln(e);if(t!==Vo&&t!==Uo)return e;var r=new Map,n=jn(e),i=U(0),o=Bt,s=a=>{if(Bt===o)return a();var u=j,f=Bt;Fe(null),hi(o);var c=a();return Fe(u),hi(f),c};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(a,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ts();var c=r.get(u);return c===void 0?s(()=>{var g=U(f.value);return r.set(u,g),g}):S(c,f.value,!0),!0},deleteProperty(a,u){var f=r.get(u);if(f===void 0){if(u in a){const c=s(()=>U(ae));r.set(u,c),wr(i)}}else S(f,ae),wr(i);return!0},get(a,u,f){var y;if(u===mt)return e;var c=r.get(u),g=u in a;if(c===void 0&&(!g||(y=At(a,u))!=null&&y.writable)&&(c=s(()=>{var h=Re(g?a[u]:ae),b=U(h);return b}),r.set(u,c)),c!==void 0){var v=l(c);return v===ae?void 0:v}return Reflect.get(a,u,f)},getOwnPropertyDescriptor(a,u){var f=Reflect.getOwnPropertyDescriptor(a,u);if(f&&"value"in f){var c=r.get(u);c&&(f.value=l(c))}else if(f===void 0){var g=r.get(u),v=g==null?void 0:g.v;if(g!==void 0&&v!==ae)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(a,u){var v;if(u===mt)return!0;var f=r.get(u),c=f!==void 0&&f.v!==ae||Reflect.has(a,u);if(f!==void 0||D!==null&&(!c||(v=At(a,u))!=null&&v.writable)){f===void 0&&(f=s(()=>{var y=c?Re(a[u]):ae,h=U(y);return h}),r.set(u,f));var g=l(f);if(g===ae)return!1}return c},set(a,u,f,c){var A;var g=r.get(u),v=u in a;if(n&&u==="length")for(var y=f;y<g.v;y+=1){var h=r.get(y+"");h!==void 0?S(h,ae):y in a&&(h=s(()=>U(ae)),r.set(y+"",h))}if(g===void 0)(!v||(A=At(a,u))!=null&&A.writable)&&(g=s(()=>U(void 0)),S(g,Re(f)),r.set(u,g));else{v=g.v!==ae;var b=s(()=>Re(f));S(g,b)}var p=Reflect.getOwnPropertyDescriptor(a,u);if(p!=null&&p.set&&p.set.call(c,f),!v){if(n&&typeof u=="string"){var _=r.get("length"),N=Number(u);Number.isInteger(N)&&N>=_.v&&S(_,N+1)}wr(i)}return!0},ownKeys(a){l(i);var u=Reflect.ownKeys(a).filter(g=>{var v=r.get(g);return v===void 0||v.v!==ae});for(var[f,c]of r)c.v!==ae&&!(f in a)&&u.push(f);return u},setPrototypeOf(){rs()}})}function fi(e){try{if(e!==null&&typeof e=="object"&&mt in e)return e[mt]}catch{}return e}function Us(e,t){return Object.is(fi(e),fi(t))}var ci,Zi,Qi,eo;function Hs(){if(ci===void 0){ci=window,Zi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Qi=At(t,"firstChild").get,eo=At(t,"nextSibling").get,ii(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ii(r)&&(r.__t=void 0)}}function kt(e=""){return document.createTextNode(e)}function cr(e){return Qi.call(e)}function Rr(e){return eo.call(e)}function m(e,t){return cr(e)}function X(e,t=!1){{var r=cr(e);return r instanceof Comment&&r.data===""?Rr(r):r}}function w(e,t=1,r=!1){let n=e;for(;t--;)n=Rr(n);return n}function qs(e){e.textContent=""}function to(){return!1}function ro(e,t,r){return document.createElementNS(t??Ci,e,void 0)}function no(e,t){if(t){const r=document.body;e.autofocus=!0,yt(()=>{document.activeElement===r&&e.focus()})}}let vi=!1;function Bs(){vi||(vi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function un(e){var t=j,r=D;Fe(null),Ve(null);try{return e()}finally{Fe(t),Ve(r)}}function io(e,t,r,n=r){e.addEventListener(t,()=>un(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Bs()}function oo(e){D===null&&(j===null&&Zo(),Xo()),Ot&&Jo()}function Ws(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function et(e,t){var r=D;r!==null&&r.f&Pe&&(e|=Pe);var n={ctx:le,deps:null,nodes:null,f:e|ge|je,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},i=n;if(e&lr)rr!==null?rr.push(n):Jt.ensure().schedule(n);else if(t!==null){try{vr(n)}catch(s){throw de(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&hr)&&(i=i.first,e&Ct&&e&Gt&&i!==null&&(i.f|=Gt))}if(i!==null&&(i.parent=r,r!==null&&Ws(i,r),j!==null&&j.f&ue&&!(e&Yt))){var o=j;(o.effects??(o.effects=[])).push(i)}return n}function Bn(){return j!==null&&!Ye}function Wn(e){const t=et(Or,null);return ee(t,ie),t.teardown=e,t}function rn(e){oo();var t=D.f,r=!j&&(t&Xe)!==0&&(t&Xt)===0;if(r){var n=le;(n.e??(n.e=[])).push(e)}else return so(e)}function so(e){return et(lr|Ai,e)}function Ys(e){return oo(),et(Or|Ai,e)}function Gs(e){Jt.ensure();const t=et(Yt|hr,e);return(r={})=>new Promise(n=>{r.outro?qt(t,()=>{de(t),n(void 0)}):(de(t),n(void 0))})}function Yn(e){return et(lr,e)}function Ks(e){return et(Fn|hr,e)}function ao(e,t=0){return et(Or|t,e)}function R(e,t=[],r=[],n=[]){Wi(n,t,r,i=>{et(Or,()=>e(...i.map(l)))})}function fn(e,t=0){var r=et(Ct|t,e);return r}function lo(e,t=0){var r=et(Dn|t,e);return r}function Ee(e){return et(Xe|hr,e)}function uo(e){var t=e.teardown;if(t!==null){const r=Ot,n=j;di(!0),Fe(null);try{t.call(null)}finally{di(r),Fe(n)}}}function Gn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&un(()=>{i.abort(dt)});var n=r.next;r.f&Yt?r.parent=null:de(r,t),r=n}}function Js(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Xe||de(t),t=r}}function de(e,t=!0){var r=!1;(t||e.f&Wo)&&e.nodes!==null&&e.nodes.end!==null&&(Xs(e.nodes.start,e.nodes.end),r=!0),ee(e,oi),Gn(e,t&&!r),Sr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)o.stop();uo(e),e.f^=oi,e.f|=Le;var i=e.parent;i!==null&&i.first!==null&&fo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Xs(e,t){for(;e!==null;){var r=e===t?null:Rr(e);e.remove(),e=r}}function fo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function qt(e,t,r=!0){var n=[];co(e,n,!0);var i=()=>{r&&de(e),t&&t()},o=n.length;if(o>0){var s=()=>--o||i();for(var a of n)a.out(s)}else i()}function co(e,t,r){if(!(e.f&Pe)){e.f^=Pe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var o=i.next,s=(i.f&Gt)!==0||(i.f&Xe)!==0&&(e.f&Ct)!==0;co(i,t,s?r:!1),i=o}}}function Kn(e){vo(e,!0)}function vo(e,t){if(e.f&Pe){e.f^=Pe,e.f&ie||(ee(e,ge),Jt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Gt)!==0||(r.f&Xe)!==0;vo(r,i?t:!1),r=n}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function Jn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Rr(r);t.append(r),r=i}}let en=!1,Ot=!1;function di(e){Ot=e}let j=null,Ye=!1;function Fe(e){j=e}let D=null;function Ve(e){D=e}let De=null;function ho(e){j!==null&&(De===null?De=[e]:De.push(e))}let we=null,ze=0,Ce=null;function Zs(e){Ce=e}let po=1,jt=0,Bt=jt;function hi(e){Bt=e}function _o(){return++po}function jr(e){var t=e.f;if(t&ge)return!0;if(t&ue&&(e.f&=~Kt),t&ft){for(var r=e.deps,n=r.length,i=0;i<n;i++){var o=r[i];if(jr(o)&&Gi(o),o.wv>e.wv)return!0}t&je&&ve===null&&ee(e,ie)}return!1}function go(e,t,r=!0){var n=e.reactions;if(n!==null&&!(De!==null&&ar.call(De,e)))for(var i=0;i<n.length;i++){var o=n[i];o.f&ue?go(o,t,!1):t===o&&(r?ee(o,ge):o.f&ie&&ee(o,ft),Un(o))}}function bo(e){var b;var t=we,r=ze,n=Ce,i=j,o=De,s=le,a=Ye,u=Bt,f=e.f;we=null,ze=0,Ce=null,j=f&(Xe|Yt)?null:e,De=null,ur(e.ctx),Ye=!1,Bt=++jt,e.ac!==null&&(un(()=>{e.ac.abort(dt)}),e.ac=null);try{e.f|=Tn;var c=e.fn,g=c();e.f|=Xt;var v=e.deps,y=M==null?void 0:M.is_fork;if(we!==null){var h;if(y||Sr(e,ze),v!==null&&ze>0)for(v.length=ze+we.length,h=0;h<we.length;h++)v[ze+h]=we[h];else e.deps=v=we;if(Bn()&&e.f&je)for(h=ze;h<v.length;h++)((b=v[h]).reactions??(b.reactions=[])).push(e)}else!y&&v!==null&&ze<v.length&&(Sr(e,ze),v.length=ze);if(Mr()&&Ce!==null&&!Ye&&v!==null&&!(e.f&(ue|ft|ge)))for(h=0;h<Ce.length;h++)go(Ce[h],e);if(i!==null&&i!==e){if(jt++,i.deps!==null)for(let p=0;p<r;p+=1)i.deps[p].rv=jt;if(t!==null)for(const p of t)p.rv=jt;Ce!==null&&(n===null?n=Ce:n.push(...Ce))}return e.f&It&&(e.f^=It),g}catch(p){return ji(p)}finally{e.f^=Tn,we=t,ze=r,Ce=n,j=i,De=o,ur(s),Ye=a,Bt=u}}function Qs(e,t){let r=t.reactions;if(r!==null){var n=Do.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&t.f&ue&&(we===null||!ar.call(we,t))){var o=t;o.f&je&&(o.f^=je,o.f&=~Kt),Vn(o),Ds(o),Sr(o,0)}}function Sr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Qs(e,r[n])}function vr(e){var t=e.f;if(!(t&Le)){ee(e,ie);var r=D,n=en;D=e,en=!0;try{t&(Ct|Dn)?Js(e):Gn(e),uo(e);var i=bo(e);e.teardown=typeof i=="function"?i:null,e.wv=po;var o;Lo&&ys&&e.f&ge&&e.deps}finally{en=n,D=r}}}async function ea(){await Promise.resolve(),Ns()}function l(e){var t=e.f,r=(t&ue)!==0;if(j!==null&&!Ye){var n=D!==null&&(D.f&Le)!==0;if(!n&&(De===null||!ar.call(De,e))){var i=j.deps;if(j.f&Tn)e.rv<jt&&(e.rv=jt,we===null&&i!==null&&i[ze]===e?ze++:we===null?we=[e]:we.push(e));else{(j.deps??(j.deps=[])).push(e);var o=e.reactions;o===null?e.reactions=[j]:ar.call(o,j)||o.push(j)}}}if(Ot&&xt.has(e))return xt.get(e);if(r){var s=e;if(Ot){var a=s.v;return(!(s.f&ie)&&s.reactions!==null||yo(s))&&(a=qn(s)),xt.set(s,a),a}var u=(s.f&je)===0&&!Ye&&j!==null&&(en||(j.f&je)!==0),f=(s.f&Xt)===0;jr(s)&&(u&&(s.f|=je),Gi(s)),u&&!f&&(Ki(s),mo(s))}if(ve!=null&&ve.has(e))return ve.get(e);if(e.f&It)throw e.v;return e.v}function mo(e){if(e.f|=je,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&ue&&!(t.f&je)&&(Ki(t),mo(t))}function yo(e){if(e.v===ae)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(xt.has(t)||t.f&ue&&yo(t))return!0;return!1}function dr(e){var t=Ye;try{return Ye=!0,e()}finally{Ye=t}}function $t(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(mt in e)On(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&mt in r&&On(r)}}}function On(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{On(e[n],t)}catch{}const r=Ln(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ni(r);for(let i in n){const o=n[i].get;if(o)try{o.call(e)}catch{}}}}}function ta(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ra=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function na(e){return ra.includes(e)}const ia={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oa(e){return e=e.toLowerCase(),ia[e]??e}const sa=["touchstart","touchmove"];function aa(e){return sa.includes(e)}const Lt=Symbol("events"),ko=new Set,Cn=new Set;function la(e,t,r,n={}){function i(o){if(n.capture||Mn.call(t,o),!o.cancelBubble)return un(()=>r==null?void 0:r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yt(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Y(e,t,r){(t[Lt]??(t[Lt]={}))[e]=r}function Zt(e){for(var t=0;t<e.length;t++)ko.add(e[t]);for(var r of Cn)r(e)}let pi=null;function Mn(e){var p,_;var t=this,r=t.ownerDocument,n=e.type,i=((p=e.composedPath)==null?void 0:p.call(e))||[],o=i[0]||e.target;pi=e;var s=0,a=pi===e&&e[Lt];if(a){var u=i.indexOf(a);if(u!==-1&&(t===document||t===window)){e[Lt]=t;return}var f=i.indexOf(t);if(f===-1)return;u<=f&&(s=u)}if(o=i[s]||e.target,o!==t){Fo(e,"currentTarget",{configurable:!0,get(){return o||r}});var c=j,g=D;Fe(null),Ve(null);try{for(var v,y=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var b=(_=o[Lt])==null?void 0:_[n];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(N){v?y.push(N):v=N}if(e.cancelBubble||h===t||h===null)break;o=h}if(v){for(let N of y)queueMicrotask(()=>{throw N});throw v}}finally{e[Lt]=t,delete e.currentTarget,Fe(c),Ve(g)}}}var Si;const bn=((Si=globalThis==null?void 0:globalThis.window)==null?void 0:Si.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ua(e){return(bn==null?void 0:bn.createHTML(e))??e}function wo(e){var t=ro("template");return t.innerHTML=ua(e.replaceAll("<!>","<!---->")),t.content}function Tr(e,t){var r=D;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var r=(t&ds)!==0,n=(t&hs)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=wo(o?e:"<!>"+e),r||(i=cr(i)));var s=n||Zi?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=cr(s),u=s.lastChild;Tr(a,u)}else Tr(s,s);return s}}function fa(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var s=wo(i),a=cr(s);o=cr(a)}var u=o.cloneNode(!0);return Tr(u,u),u}}function ca(e,t){return fa(e,t,"svg")}function Se(){var e=document.createDocumentFragment(),t=document.createComment(""),r=kt();return e.append(t,r),Tr(t,r),e}function E(e,t){e!==null&&e.before(t)}function H(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function va(e,t){return da(e,t)}const Gr=new Map;function da(e,{target:t,anchor:r,props:n={},events:i,context:o,intro:s=!0,transformError:a}){Hs();var u=void 0,f=Gs(()=>{var c=r??t.appendChild(kt());xs(c,{pending:()=>{}},y=>{Ze({});var h=le;o&&(h.c=o),i&&(n.$$events=i),u=e(y,n)||{},Qe()},a);var g=new Set,v=y=>{for(var h=0;h<y.length;h++){var b=y[h];if(!g.has(b)){g.add(b);var p=aa(b);for(const A of[t,document]){var _=Gr.get(A);_===void 0&&(_=new Map,Gr.set(A,_));var N=_.get(b);N===void 0?(A.addEventListener(b,Mn,{passive:p}),_.set(b,1)):_.set(b,N+1)}}}};return v(ln(ko)),Cn.add(v),()=>{var p;for(var y of g)for(const _ of[t,document]){var h=Gr.get(_),b=h.get(y);--b==0?(_.removeEventListener(y,Mn),h.delete(y),h.size===0&&Gr.delete(_)):h.set(y,b)}Cn.delete(v),c!==r&&((p=c.parentNode)==null||p.removeChild(c))}});return ha.set(u,f),u}let ha=new WeakMap;var We,lt,xe,Ht,xr,Pr,an;class Eo{constructor(t,r=!0){He(this,"anchor");L(this,We,new Map);L(this,lt,new Map);L(this,xe,new Map);L(this,Ht,new Set);L(this,xr,!0);L(this,Pr,t=>{if(d(this,We).has(t)){var r=d(this,We).get(t),n=d(this,lt).get(r);if(n)Kn(n),d(this,Ht).delete(r);else{var i=d(this,xe).get(r);i&&(d(this,lt).set(r,i.effect),d(this,xe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[o,s]of d(this,We)){if(d(this,We).delete(o),o===t)break;const a=d(this,xe).get(s);a&&(de(a.effect),d(this,xe).delete(s))}for(const[o,s]of d(this,lt)){if(o===r||d(this,Ht).has(o))continue;const a=()=>{if(Array.from(d(this,We).values()).includes(o)){var f=document.createDocumentFragment();Jn(s,f),f.append(kt()),d(this,xe).set(o,{effect:s,fragment:f})}else de(s);d(this,Ht).delete(o),d(this,lt).delete(o)};d(this,xr)||!n?(d(this,Ht).add(o),qt(s,a,!1)):a()}}});L(this,an,t=>{d(this,We).delete(t);const r=Array.from(d(this,We).values());for(const[n,i]of d(this,xe))r.includes(n)||(de(i.effect),d(this,xe).delete(n))});this.anchor=t,F(this,xr,r)}ensure(t,r){var n=M,i=to();if(r&&!d(this,lt).has(t)&&!d(this,xe).has(t))if(i){var o=document.createDocumentFragment(),s=kt();o.append(s),d(this,xe).set(t,{effect:Ee(()=>r(s)),fragment:o})}else d(this,lt).set(t,Ee(()=>r(this.anchor)));if(d(this,We).set(n,t),i){for(const[a,u]of d(this,lt))a===t?n.unskip_effect(u):n.skip_effect(u);for(const[a,u]of d(this,xe))a===t?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(d(this,Pr)),n.ondiscard(d(this,an))}else d(this,Pr).call(this,n)}}We=new WeakMap,lt=new WeakMap,xe=new WeakMap,Ht=new WeakMap,xr=new WeakMap,Pr=new WeakMap,an=new WeakMap;function q(e,t,r=!1){var n=new Eo(e),i=r?Gt:0;function o(s,a){n.ensure(s,a)}fn(()=>{var s=!1;t((a,u=0)=>{s=!0,o(u,a)}),s||o(-1,null)},i)}function Ge(e,t){return t}function pa(e,t,r){for(var n=[],i=t.length,o,s=t.length,a=0;a<i;a++){let g=t[a];qt(g,()=>{if(o){if(o.pending.delete(g),o.done.add(g),o.pending.size===0){var v=e.outrogroups;$n(e,ln(o.done)),v.delete(o),v.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&r!==null;if(u){var f=r,c=f.parentNode;qs(c),c.append(f),e.items.clear()}$n(e,t,!u)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function $n(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const a of s)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var o=t[i];if(n!=null&&n.has(o)){o.f|=ut;const s=document.createDocumentFragment();Jn(o,s)}else de(t[i],r)}}var _i;function Ke(e,t,r,n,i,o=null){var s=e,a=new Map,u=(t&Pi)!==0;if(u){var f=e;s=f.appendChild(kt())}var c=null,g=Hn(()=>{var A=r();return jn(A)?A:A==null?[]:ln(A)}),v,y=new Map,h=!0;function b(A){N.effect.f&Le||(N.pending.delete(A),N.fallback=c,_a(N,v,s,t,n),c!==null&&(v.length===0?c.f&ut?(c.f^=ut,yr(c,null,s)):Kn(c):qt(c,()=>{c=null})))}function p(A){N.pending.delete(A)}var _=fn(()=>{v=l(g);for(var A=v.length,k=new Set,x=M,z=to(),O=0;O<A;O+=1){var $=v[O],B=n($,O),W=h?null:a.get(B);W?(W.v&&fr(W.v,$),W.i&&fr(W.i,O),z&&x.unskip_effect(W.e)):(W=ga(a,h?s:_i??(_i=kt()),$,B,O,i,t,r),h||(W.e.f|=ut),a.set(B,W)),k.add(B)}if(A===0&&o&&!c&&(h?c=Ee(()=>o(s)):(c=Ee(()=>o(_i??(_i=kt()))),c.f|=ut)),A>k.size&&Ko(),!h)if(y.set(x,k),z){for(const[re,he]of a)k.has(re)||x.skip_effect(he.e);x.oncommit(b),x.ondiscard(p)}else b(x);l(g)}),N={effect:_,items:a,pending:y,outrogroups:null,fallback:c};h=!1}function gr(e){for(;e!==null&&!(e.f&Xe);)e=e.next;return e}function _a(e,t,r,n,i){var W,re,he,se,Te,Z,pe,wt,nt;var o=(n&as)!==0,s=t.length,a=e.items,u=gr(e.effect.first),f,c=null,g,v=[],y=[],h,b,p,_;if(o)for(_=0;_<s;_+=1)h=t[_],b=i(h,_),p=a.get(b).e,p.f&ut||((re=(W=p.nodes)==null?void 0:W.a)==null||re.measure(),(g??(g=new Set)).add(p));for(_=0;_<s;_+=1){if(h=t[_],b=i(h,_),p=a.get(b).e,e.outrogroups!==null)for(const fe of e.outrogroups)fe.pending.delete(p),fe.done.delete(p);if(p.f&Pe&&(Kn(p),o&&((se=(he=p.nodes)==null?void 0:he.a)==null||se.unfix(),(g??(g=new Set)).delete(p))),p.f&ut)if(p.f^=ut,p===u)yr(p,null,r);else{var N=c?c.next:u;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Tt(e,c,p),Tt(e,p,N),yr(p,N,r),c=p,v=[],y=[],u=gr(c.next);continue}if(p!==u){if(f!==void 0&&f.has(p)){if(v.length<y.length){var A=y[0],k;c=A.prev;var x=v[0],z=v[v.length-1];for(k=0;k<v.length;k+=1)yr(v[k],A,r);for(k=0;k<y.length;k+=1)f.delete(y[k]);Tt(e,x.prev,z.next),Tt(e,c,x),Tt(e,z,A),u=A,c=z,_-=1,v=[],y=[]}else f.delete(p),yr(p,u,r),Tt(e,p.prev,p.next),Tt(e,p,c===null?e.effect.first:c.next),Tt(e,c,p),c=p;continue}for(v=[],y=[];u!==null&&u!==p;)(f??(f=new Set)).add(u),y.push(u),u=gr(u.next);if(u===null)continue}p.f&ut||v.push(p),c=p,u=gr(p.next)}if(e.outrogroups!==null){for(const fe of e.outrogroups)fe.pending.size===0&&($n(e,ln(fe.done)),(Te=e.outrogroups)==null||Te.delete(fe));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||f!==void 0){var O=[];if(f!==void 0)for(p of f)p.f&Pe||O.push(p);for(;u!==null;)!(u.f&Pe)&&u!==e.fallback&&O.push(u),u=gr(u.next);var $=O.length;if($>0){var B=n&Pi&&s===0?r:null;if(o){for(_=0;_<$;_+=1)(pe=(Z=O[_].nodes)==null?void 0:Z.a)==null||pe.measure();for(_=0;_<$;_+=1)(nt=(wt=O[_].nodes)==null?void 0:wt.a)==null||nt.fix()}pa(e,O,B)}}o&&yt(()=>{var fe,Et;if(g!==void 0)for(p of g)(Et=(fe=p.nodes)==null?void 0:fe.a)==null||Et.apply()})}function ga(e,t,r,n,i,o,s,a){var u=s&os?s&ls?Pt(r):Fs(r,!1,!1):null,f=s&ss?Pt(i):null;return{v:u,i:f,e:Ee(()=>(o(t,u??r,f??i,a),()=>{e.delete(n)}))}}function yr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,o=t&&!(t.f&ut)?t.nodes.start:r;n!==null;){var s=Rr(n);if(o.before(n),n===i)return;n=s}}function Tt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Ue(e,t,r,n,i){var a;var o=(a=t.$$slots)==null?void 0:a[r],s=!1;o===!0&&(o=t.children,s=!0),o===void 0||o(e,s?()=>n:n)}function ba(e,t,r,n,i,o){var s=null,a=e,u=new Eo(a,!1);fn(()=>{const f=t()||null;var c=ps;if(f===null){u.ensure(null,null);return}return u.ensure(f,g=>{if(f){if(s=ro(f,c),Tr(s,s),n){var v=s.appendChild(kt());n(s,v)}D.nodes.end=s,g.before(s)}}),()=>{}},Gt),Wn(()=>{})}function ma(e,t){var r=void 0,n;lo(()=>{r!==(r=t())&&(n&&(de(n),n=null),r&&(n=Ee(()=>{Yn(()=>r(e))})))})}function So(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=So(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ya(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=So(e))&&(n&&(n+=" "),n+=t);return n}function ka(e){return typeof e=="object"?ya(e):e??""}const gi=[...` 	
\r\f \v\uFEFF`];function wa(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var o=i.length,s=0;(s=n.indexOf(i,s))>=0;){var a=s+o;(s===0||gi.includes(n[s-1]))&&(a===n.length||gi.includes(n[a]))?n=(s===0?"":n.substring(0,s))+n.substring(a+1):s=a}}return n===""?null:n}function bi(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var o=e[i];o!=null&&o!==""&&(n+=" "+i+": "+o+r)}return n}function mn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ea(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,s=0,a=!1,u=[];n&&u.push(...Object.keys(n).map(mn)),i&&u.push(...Object.keys(i).map(mn));var f=0,c=-1;const b=e.length;for(var g=0;g<b;g++){var v=e[g];if(a?v==="/"&&e[g-1]==="*"&&(a=!1):o?o===v&&(o=!1):v==="/"&&e[g+1]==="*"?a=!0:v==='"'||v==="'"?o=v:v==="("?s++:v===")"&&s--,!a&&o===!1&&s===0){if(v===":"&&c===-1)c=g;else if(v===";"||g===b-1){if(c!==-1){var y=mn(e.substring(f,c).trim());if(!u.includes(y)){v!==";"&&g++;var h=e.substring(f,g).trim();r+=" "+h+";"}}f=g+1,c=-1}}}}return n&&(r+=bi(n)),i&&(r+=bi(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Wt(e,t,r,n,i,o){var s=e.__className;if(s!==r||s===void 0){var a=wa(r,n,o);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e.__className=r}else if(o&&i!==o)for(var u in o){var f=!!o[u];(i==null||f!==!!i[u])&&e.classList.toggle(u,f)}return o}function yn(e,t={},r,n){for(var i in r){var o=r[i];t[i]!==o&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,n))}}function Sa(e,t,r,n){var i=e.__style;if(i!==t){var o=Ea(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(yn(e,r==null?void 0:r[0],n[0]),yn(e,r==null?void 0:r[1],n[1],"important")):yn(e,r,n));return n}function Nr(e,t,r=!1){if(e.multiple){if(t==null)return;if(!jn(t))return gs();for(var n of e.options)n.selected=t.includes(Er(n));return}for(n of e.options){var i=Er(n);if(Us(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Xn(e){var t=new MutationObserver(()=>{Nr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wn(()=>{t.disconnect()})}function Ta(e,t,r=t){var n=new WeakSet,i=!0;io(e,"change",o=>{var s=o?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(s),Er);else{var u=e.querySelector(s)??e.querySelector("option:not([disabled])");a=u&&Er(u)}r(a),e.__value=a,M!==null&&n.add(M)}),Yn(()=>{var o=t();if(e===document.activeElement){var s=M;if(n.has(s))return}if(Nr(e,o,i),i&&o===void 0){var a=e.querySelector(":checked");a!==null&&(o=Er(a),r(o))}e.__value=o,i=!1}),Xn(e)}function Er(e){return"__value"in e?e.__value:e.value}const br=Symbol("class"),mr=Symbol("style"),To=Symbol("is custom element"),No=Symbol("is html"),Na=xi?"option":"OPTION",za=xi?"select":"SELECT";function Aa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Je(e,t,r,n){var i=zo(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ao(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ia(e,t,r,n,i=!1,o=!1){var s=zo(e),a=s[To],u=!s[No],f=t||{},c=e.nodeName===Na;for(var g in t)g in r||(r[g]=null);r.class?r.class=ka(r.class):r[br]&&(r.class=null),r[mr]&&(r.style??(r.style=null));var v=Ao(e);for(const k in r){let x=r[k];if(c&&k==="value"&&x==null){e.value=e.__value="",f[k]=x;continue}if(k==="class"){var y=e.namespaceURI==="http://www.w3.org/1999/xhtml";Wt(e,y,x,n,t==null?void 0:t[br],r[br]),f[k]=x,f[br]=r[br];continue}if(k==="style"){Sa(e,x,t==null?void 0:t[mr],r[mr]),f[k]=x,f[mr]=r[mr];continue}var h=f[k];if(!(x===h&&!(x===void 0&&e.hasAttribute(k)))){f[k]=x;var b=k[0]+k[1];if(b!=="$$")if(b==="on"){const z={},O="$$"+k;let $=k.slice(2);var p=na($);if(ta($)&&($=$.slice(0,-7),z.capture=!0),!p&&h){if(x!=null)continue;e.removeEventListener($,f[O],z),f[O]=null}if(p)Y($,e,x),Zt([$]);else if(x!=null){let B=function(W){f[k].call(this,W)};var A=B;f[O]=la($,e,B,z)}}else if(k==="style")Je(e,k,x);else if(k==="autofocus")no(e,!!x);else if(!a&&(k==="__value"||k==="value"&&x!=null))e.value=e.__value=x;else if(k==="selected"&&c)Aa(e,x);else{var _=k;u||(_=oa(_));var N=_==="defaultValue"||_==="defaultChecked";if(x==null&&!a&&!N)if(s[k]=null,_==="value"||_==="checked"){let z=e;const O=t===void 0;if(_==="value"){let $=z.defaultValue;z.removeAttribute(_),z.defaultValue=$,z.value=z.__value=O?$:null}else{let $=z.defaultChecked;z.removeAttribute(_),z.defaultChecked=$,z.checked=O?$:!1}}else e.removeAttribute(k);else N||v.includes(_)&&(a||typeof x!="string")?(e[_]=x,_ in s&&(s[_]=ae)):typeof x!="function"&&Je(e,_,x)}}}return f}function mi(e,t,r=[],n=[],i=[],o,s=!1,a=!1){Wi(i,r,n,u=>{var f=void 0,c={},g=e.nodeName===za,v=!1;if(lo(()=>{var h=t(...u.map(l)),b=Ia(e,f,h,o,s,a);v&&g&&"value"in h&&Nr(e,h.value);for(let _ of Object.getOwnPropertySymbols(c))h[_]||de(c[_]);for(let _ of Object.getOwnPropertySymbols(h)){var p=h[_];_.description===_s&&(!f||p!==f[_])&&(c[_]&&de(c[_]),c[_]=Ee(()=>ma(e,()=>p))),b[_]=p}f=b}),g){var y=e;Yn(()=>{Nr(y,f.value,!0),Xn(y)})}v=!0})}function zo(e){return e.__attributes??(e.__attributes={[To]:e.nodeName.includes("-"),[No]:e.namespaceURI===Ci})}var yi=new Map;function Ao(e){var t=e.getAttribute("is")||e.nodeName,r=yi.get(t);if(r)return r;yi.set(t,r=[]);for(var n,i=e,o=Element.prototype;o!==i;){n=Ni(i);for(var s in n)n[s].set&&r.push(s);i=Ln(i)}return r}function Zn(e,t,r=t){var n=new WeakSet;io(e,"input",async i=>{var o=i?e.defaultValue:e.value;if(o=kn(e)?wn(o):o,r(o),M!==null&&n.add(M),await ea(),o!==(o=t())){var s=e.selectionStart,a=e.selectionEnd,u=e.value.length;if(e.value=o??"",a!==null){var f=e.value.length;s===a&&a===u&&f>u?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=s,e.selectionEnd=Math.min(a,f))}}}),dr(t)==null&&e.value&&(r(kn(e)?wn(e.value):e.value),M!==null&&n.add(M)),ao(()=>{var i=t();if(e===document.activeElement){var o=M;if(n.has(o))return}kn(e)&&i===wn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function kn(e){var t=e.type;return t==="number"||t==="range"}function wn(e){return e===""?null:+e}function xa(e=!1){const t=le,r=t.l.u;if(!r)return;let n=()=>$t(t.s);if(e){let i=0,o={};const s=$r(()=>{let a=!1;const u=t.s;for(const f in u)u[f]!==o[f]&&(o[f]=u[f],a=!0);return a&&i++,i});n=()=>l(s)}r.b.length&&Ys(()=>{ki(t,n),En(r.b)}),rn(()=>{const i=dr(()=>r.m.map(qo));return()=>{for(const o of i)typeof o=="function"&&o()}}),r.a.length&&rn(()=>{ki(t,n),En(r.a)})}function ki(e,t){if(e.l.s)for(const r of e.l.s)l(r);t()}const Pa={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=D;try{Ve(e.parent_effect),e.special[t]=ht({get[t](){return e.props[t]}},t,Oi)}finally{Ve(n)}}return e.special[t](r),ui(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ui(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:Pt(0),parent_effect:D},Pa)}const Oa={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(_r(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];_r(i)&&(i=i());const o=At(i,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(_r(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=At(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===mt||t===Ii)return!1;for(let r of e.props)if(_r(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(_r(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function tt(...e){return new Proxy({props:e},Oa)}function ht(e,t,r,n){var A;var i=!Cr||(r&fs)!==0,o=(r&cs)!==0,s=(r&vs)!==0,a=n,u=!0,f=()=>(u&&(u=!1,a=s?dr(n):n),a);let c;if(o){var g=mt in e||Ii in e;c=((A=At(e,t))==null?void 0:A.set)??(g&&t in e?k=>e[t]=k:void 0)}var v,y=!1;o?[v,y]=Ss(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=f(),c&&(i&&es(),c(v)));var h;if(i?h=()=>{var k=e[t];return k===void 0?f():(u=!0,k)}:h=()=>{var k=e[t];return k!==void 0&&(a=void 0),k===void 0?a:k},i&&!(r&Oi))return h;if(c){var b=e.$$legacy;return function(k,x){return arguments.length>0?((!i||!x||b||y)&&c(x?h():k),k):h()}}var p=!1,_=(r&us?$r:Hn)(()=>(p=!1,h()));o&&l(_);var N=D;return function(k,x){if(arguments.length>0){const z=x?l(_):i&&o?Re(k):k;return S(_,z),p=!0,a!==void 0&&(a=z),k}return Ot&&p||N.f&Le?_.v:l(_)}}const Ca="5";var Ti;typeof window<"u"&&((Ti=window.__svelte??(window.__svelte={})).v??(Ti.v=new Set)).add(Ca);var Ma=I('<p class="err svelte-o2dhro"> </p>'),$a=I('<div class="screen svelte-o2dhro"><div class="hero svelte-o2dhro"><div class="logo svelte-o2dhro">🍳</div> <h1 class="svelte-o2dhro">Recipeasy</h1> <p class="svelte-o2dhro">Save recipes from TikTok videos into your personal cookbooks</p></div> <div class="card svelte-o2dhro"><h2 class="svelte-o2dhro">Welcome back</h2> <p class="sub svelte-o2dhro">Enter your user ID to continue</p> <div class="field svelte-o2dhro"><input class="input" type="text" placeholder="Your user ID" autocomplete="off" autocapitalize="none"/></div> <!> <button class="btn-primary"> </button></div></div>');function Ra(e,t){Ze(t,!0);let r=U(""),n=U(null),i=U(!1);async function o(){if(l(r).trim()){S(i,!0),S(n,null);try{const h=await fetch("/api/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l(r).trim()})}),b=await h.json();if(!h.ok)throw new Error(b.error);t.onLogin(b.userId)}catch(h){S(n,h.message,!0)}finally{S(i,!1)}}}var s=$a(),a=w(m(s),2),u=w(m(a),4),f=m(u),c=w(u,2);{var g=h=>{var b=Ma(),p=m(b);R(()=>H(p,l(n))),E(h,b)};q(c,h=>{l(n)&&h(g)})}var v=w(c,2),y=m(v);R(h=>{f.disabled=l(i),v.disabled=h,H(y,l(i)?"Signing in…":"Sign in")},[()=>l(i)||!l(r).trim()]),Y("keydown",f,h=>h.key==="Enter"&&o()),Zn(f,()=>l(r),h=>S(r,h)),Y("click",v,o),E(e,s),Qe()}Zt(["keydown","click"]);ks();/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ja={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const La=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const wi=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Da=ca("<svg><!><!></svg>");function rt(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]),n=Oe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ze(t,!1);let i=ht(t,"name",8,void 0),o=ht(t,"color",8,"currentColor"),s=ht(t,"size",8,24),a=ht(t,"strokeWidth",8,2),u=ht(t,"absoluteStrokeWidth",8,!1),f=ht(t,"iconNode",24,()=>[]);xa();var c=Da();mi(c,(y,h,b)=>({...ja,...y,...n,width:s(),height:s(),stroke:o(),"stroke-width":h,class:b}),[()=>La(n)?void 0:{"aria-hidden":"true"},()=>($t(u()),$t(a()),$t(s()),dr(()=>u()?Number(a())*24/Number(s()):a())),()=>($t(wi),$t(i()),$t(r),dr(()=>wi("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var g=m(c);Ke(g,1,f,Ge,(y,h)=>{var b=$e(()=>Bo(l(h),2));let p=()=>l(b)[0],_=()=>l(b)[1];var N=Se(),A=X(N);ba(A,p,!0,(k,x)=>{mi(k,()=>({..._()}))}),E(y,N)});var v=w(g);Ue(v,t,"default",{}),E(e,c),Qe()}function nn(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];rt(e,tt({name:"arrow-left"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Fa(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];rt(e,tt({name:"book-open"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Va(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];rt(e,tt({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ua(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];rt(e,tt({name:"clock"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ha(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];rt(e,tt({name:"external-link"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function qa(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];rt(e,tt({name:"flame"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ba(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];rt(e,tt({name:"house"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Wa(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];rt(e,tt({name:"link"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ya(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];rt(e,tt({name:"log-out"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Qn(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];rt(e,tt({name:"plus"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ga(e,t){const r=Oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];rt(e,tt({name:"users"},()=>r,{get iconNode(){return n},children:(i,o)=>{var s=Se(),a=X(s);Ue(a,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}var Ka=I('<nav class="bottom-nav svelte-6pm7l3"><button><!> <span class="svelte-6pm7l3">Cookbooks</span></button> <button class="nav-fab svelte-6pm7l3"><!></button> <button><!> <span class="svelte-6pm7l3">Add Recipe</span></button></nav>');function cn(e,t){Ze(t,!0);const r=$e(()=>t.route.page==="cookbooks");var n=Ka(),i=m(n);let o;var s=m(i);{let v=$e(()=>l(r)?2.5:1.8);Ba(s,{size:22,get strokeWidth(){return l(v)}})}var a=w(i,2),u=m(a);Qn(u,{size:26,strokeWidth:2.5});var f=w(a,2);let c;var g=m(f);{let v=$e(()=>t.route.page==="analyze"?2.5:1.8);Fa(g,{size:22,get strokeWidth(){return l(v)}})}R(()=>{o=Wt(i,1,"nav-item svelte-6pm7l3",null,o,{active:l(r)}),c=Wt(f,1,"nav-item svelte-6pm7l3",null,c,{active:t.route.page==="analyze"})}),Y("click",i,()=>t.onNavigate("cookbooks")),Y("click",a,()=>t.onNavigate("analyze")),Y("click",f,()=>t.onNavigate("analyze")),E(e,n),Qe()}Zt(["click"]);var Ja=I('<div class="create-box svelte-fzpb15"><input class="input" type="text" placeholder="Cookbook name…"/> <div class="create-actions svelte-fzpb15"><button class="btn-ghost svelte-fzpb15">Cancel</button> <button class="btn-primary" style="width:auto;padding:13px 24px"> </button></div></div>'),Xa=I('<button class="new-cookbook-btn svelte-fzpb15"><!> New Cookbook</button>'),Za=I('<div class="empty svelte-fzpb15"><div class="empty-icon svelte-fzpb15">📖</div> <h2 class="svelte-fzpb15">No cookbooks yet</h2> <p class="svelte-fzpb15">Create a cookbook to start saving TikTok recipes</p></div>'),Qa=I('<img class="svelte-fzpb15"/>'),el=I('<div class="card-img-placeholder svelte-fzpb15">🍽️</div>'),tl=I('<button class="card-delete svelte-fzpb15">✕</button>'),rl=I('<div class="card svelte-fzpb15" role="button" tabindex="0"><div class="card-img svelte-fzpb15"><!> <div class="card-gradient svelte-fzpb15"></div> <!></div> <div class="card-info svelte-fzpb15"><span class="card-name svelte-fzpb15"> </span> <span class="card-count svelte-fzpb15"> </span></div></div>'),nl=I('<div class="grid svelte-fzpb15"></div>'),il=I('<div class="page-with-nav"><div class="header svelte-fzpb15"><div><p class="greeting svelte-fzpb15">Hello 👋</p> <h1 class="svelte-fzpb15">My Cookbooks</h1></div> <button class="icon-btn" title="Sign out"><!></button></div> <!> <!></div> <!>',1);function ol(e,t){Ze(t,!0);let r=U(Re([])),n=U(""),i=U(!1),o=U(!1);async function s(){const z=await fetch("/api/cookbooks",{credentials:"include"});S(r,await z.json(),!0)}async function a(){if(l(n).trim()){S(i,!0);try{const O=await(await fetch("/api/cookbooks",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l(n).trim()})})).json();S(r,[O,...l(r)],!0),S(n,""),S(o,!1)}finally{S(i,!1)}}}async function u(z){confirm("Delete this cookbook and all its recipes?")&&(await fetch(`/api/cookbooks/${z}`,{method:"DELETE",credentials:"include"}),S(r,l(r).filter(O=>O.id!==z),!0))}async function f(){await fetch("/api/logout",{method:"POST",credentials:"include"}),t.onLogout()}s();var c=il(),g=X(c),v=m(g),y=w(m(v),2),h=m(y);Ya(h,{size:18});var b=w(v,2);{var p=z=>{var O=Ja(),$=m(O);no($,!0);var B=w($,2),W=m(B),re=w(W,2),he=m(re);R(se=>{re.disabled=se,H(he,l(i)?"…":"Create")},[()=>l(i)||!l(n).trim()]),Y("keydown",$,se=>se.key==="Enter"&&a()),Zn($,()=>l(n),se=>S(n,se)),Y("click",W,()=>{S(o,!1),S(n,"")}),Y("click",re,a),E(z,O)},_=z=>{var O=Xa(),$=m(O);Qn($,{size:18}),Y("click",O,()=>S(o,!0)),E(z,O)};q(b,z=>{l(o)?z(p):z(_,-1)})}var N=w(b,2);{var A=z=>{var O=Za();E(z,O)},k=z=>{var O=nl();Ke(O,21,()=>l(r),Ge,($,B)=>{var W=rl(),re=m(W),he=m(re);{var se=ce=>{var Ne=Qa();R(()=>{Je(Ne,"src",l(B).cover_url),Je(Ne,"alt",l(B).name)}),E(ce,Ne)},Te=ce=>{var Ne=el();E(ce,Ne)};q(he,ce=>{l(B).cover_url?ce(se):ce(Te,-1)})}var Z=w(he,4);{var pe=ce=>{var Ne=tl();Y("click",Ne,er=>{er.stopPropagation(),u(l(B).id)}),E(ce,Ne)};q(Z,ce=>{l(B).is_default||ce(pe)})}var wt=w(re,2),nt=m(wt),fe=m(nt),Et=w(nt,2),Qt=m(Et);R(()=>{H(fe,l(B).name),H(Qt,`${l(B).recipe_count??""} recipe${l(B).recipe_count!==1?"s":""}`)}),Y("click",W,()=>t.onNavigate("cookbook",{cookbookId:l(B).id})),Y("keydown",W,ce=>ce.key==="Enter"&&t.onNavigate("cookbook",{cookbookId:l(B).id})),E($,W)}),E(z,O)};q(N,z=>{l(r).length===0?z(A):z(k,-1)})}var x=w(g,2);cn(x,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),Y("click",y,f),E(e,c),Qe()}Zt(["click","keydown"]);var sl=I('<div class="empty svelte-1fn8ljf"><div class="empty-icon svelte-1fn8ljf">🎬</div> <h2 class="svelte-1fn8ljf">No recipes yet</h2> <p class="svelte-1fn8ljf">Paste a TikTok cooking video link to add your first recipe</p> <button class="btn-primary" style="margin-top:24px">+ Add first recipe</button></div>'),al=I('<img class="svelte-1fn8ljf"/>'),ll=I('<div class="card-placeholder svelte-1fn8ljf">🍴</div>'),ul=I('<div class="card svelte-1fn8ljf" role="button" tabindex="0"><div class="card-img svelte-1fn8ljf"><!> <div class="card-gradient svelte-1fn8ljf"></div> <div class="card-title-overlay svelte-1fn8ljf"> </div> <button class="card-delete svelte-1fn8ljf">✕</button></div></div>'),fl=I('<div class="grid svelte-1fn8ljf"></div>'),cl=I('<div class="page-with-nav"><div class="top-bar svelte-1fn8ljf"><button class="icon-btn"><!></button> <h1> </h1> <button class="icon-btn accent-btn svelte-1fn8ljf"><!></button></div> <!></div> <!>',1);function vl(e,t){Ze(t,!0);let r=U(null),n=U(Re([]));async function i(){const[A,k]=await Promise.all([fetch("/api/cookbooks",{credentials:"include"}),fetch(`/api/cookbooks/${t.cookbookId}/recipes`,{credentials:"include"})]),x=await A.json();S(r,x.find(z=>z.id===t.cookbookId),!0),S(n,await k.json(),!0)}async function o(A){confirm("Remove this recipe?")&&(await fetch(`/api/recipes/${A}`,{method:"DELETE",credentials:"include"}),S(n,l(n).filter(k=>k.id!==A),!0))}i();var s=cl(),a=X(s),u=m(a),f=m(u),c=m(f);nn(c,{size:20});var g=w(f,2),v=m(g),y=w(g,2),h=m(y);Qn(h,{size:20});var b=w(u,2);{var p=A=>{var k=sl(),x=w(m(k),6);Y("click",x,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),E(A,k)},_=A=>{var k=fl();Ke(k,21,()=>l(n),Ge,(x,z)=>{var O=ul(),$=m(O),B=m($);{var W=Z=>{var pe=al();R(()=>{Je(pe,"src",l(z).thumbnail_url),Je(pe,"alt",l(z).title)}),E(Z,pe)},re=Z=>{var pe=ll();E(Z,pe)};q(B,Z=>{l(z).thumbnail_url?Z(W):Z(re,-1)})}var he=w(B,4),se=m(he),Te=w(he,2);R(()=>H(se,l(z).title)),Y("click",O,()=>t.onNavigate("recipe",{recipeId:l(z).id,cookbookId:t.cookbookId})),Y("keydown",O,Z=>Z.key==="Enter"&&t.onNavigate("recipe",{recipeId:l(z).id,cookbookId:t.cookbookId})),Y("click",Te,Z=>{Z.stopPropagation(),o(l(z).id)}),E(x,O)}),E(A,k)};q(b,A=>{l(n).length===0?A(p):A(_,-1)})}var N=w(a,2);cn(N,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),R(()=>{var A;return H(v,((A=l(r))==null?void 0:A.name)??"")}),Y("click",f,()=>t.onNavigate("cookbooks")),Y("click",y,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),E(e,s),Qe()}Zt(["click","keydown"]);var dl=I("<span> </span>"),hl=I('<div class="group-label svelte-1cbd1dz"><!> </div>'),pl=I('<li class="svelte-1cbd1dz"> </li>'),_l=I("<!> <ul></ul>",1),gl=I('<div class="ingredients svelte-1cbd1dz"></div>');function Io(e,t){Ze(t,!0);const r=$e(()=>t.recipe.ingredientGroups??(t.recipe.ingredients?[{group:null,emoji:null,items:t.recipe.ingredients}]:[]));function n(o){return[o.amount,o.unit,o.item].filter(Boolean).join(" ")}var i=gl();Ke(i,21,()=>l(r),Ge,(o,s)=>{var a=_l(),u=X(a);{var f=v=>{var y=hl(),h=m(y);{var b=_=>{var N=dl(),A=m(N);R(()=>H(A,l(s).emoji)),E(_,N)};q(h,_=>{l(s).emoji&&_(b)})}var p=w(h);R(()=>H(p,` ${l(s).group??""}`)),E(v,y)};q(u,v=>{l(s).group&&v(f)})}var c=w(u,2);let g;Ke(c,21,()=>l(s).items,Ge,(v,y)=>{var h=pl(),b=m(h);R(p=>H(b,p),[()=>n(l(y))]),E(v,h)}),R(()=>g=Wt(c,1,"svelte-1cbd1dz",null,g,{indented:!!l(s).group})),E(o,a)}),E(e,i),Qe()}var bl=I('<div class="top-bar"><button class="icon-btn"><!></button></div> <div class="error-banner"> </div>',1),ml=I('<div class="loading svelte-t09i08"><div class="spinner svelte-t09i08"></div></div>'),yl=I('<img class="hero-img svelte-t09i08"/>'),kl=I('<div class="hero-placeholder svelte-t09i08">🍳</div>'),wl=I('<p class="description svelte-t09i08"> </p>'),El=I('<span class="pill"><!> </span>'),Sl=I('<span class="pill"><!> </span>'),Tl=I('<span class="pill"><!> </span>'),Nl=I('<a class="source-link svelte-t09i08" target="_blank" rel="noopener"><!> View original TikTok</a>'),zl=I("<option> </option>"),Al=I('<span class="move-ok svelte-t09i08">Moved ✓</span>'),Il=I('<div class="move-row svelte-t09i08"><span class="move-label svelte-t09i08">📁</span> <select class="move-select svelte-t09i08"></select> <!></div>'),xl=I('<li class="step svelte-t09i08"><div class="step-num svelte-t09i08"></div> <p class="svelte-t09i08"> </p></li>'),Pl=I('<li class="svelte-t09i08"> </li>'),Ol=I('<div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Tips</h2> <ul class="tips svelte-t09i08"></ul></section>',1),Cl=I('<div class="hero svelte-t09i08"><!> <div class="hero-gradient svelte-t09i08"></div> <button class="back-btn icon-btn svelte-t09i08"><!></button></div> <div class="content svelte-t09i08"><h1 class="svelte-t09i08"> </h1> <!> <div class="pills svelte-t09i08"><!> <!> <!></div> <!> <!> <div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Ingredients</h2> <!></section> <div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Instructions</h2> <ol class="steps svelte-t09i08"></ol></section> <!></div>',1),Ml=I('<div class="page-with-nav"><!></div> <!>',1);function $l(e,t){Ze(t,!0);let r=U(null),n=U(null),i=U(Re([])),o=U(Re(t.cookbookId)),s=U(!1),a=U(!1);async function u(){try{const[_,N]=await Promise.all([fetch(`/api/recipes/${t.recipeId}`,{credentials:"include"}),fetch("/api/cookbooks",{credentials:"include"})]);if(!_.ok)throw new Error("Recipe not found");S(r,await _.json(),!0),S(i,await N.json(),!0),S(o,l(r).cookbook_id,!0)}catch(_){S(n,_.message,!0)}}async function f(_){if(!(_===l(o)||l(s))){S(s,!0),S(a,!1);try{if(!(await fetch(`/api/recipes/${t.recipeId}/move`,{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({cookbookId:_})})).ok)throw new Error("Move failed");S(o,_,!0),S(a,!0),setTimeout(()=>{S(a,!1)},2e3)}catch{}S(s,!1)}}u();var c=Ml(),g=X(c),v=m(g);{var y=_=>{var N=bl(),A=X(N),k=m(A),x=m(k);nn(x,{size:20});var z=w(A,2),O=m(z);R(()=>H(O,l(n))),Y("click",k,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),E(_,N)},h=_=>{var N=ml();E(_,N)},b=_=>{const N=$e(()=>l(r).recipe_json);var A=Cl(),k=X(A),x=m(k);{var z=T=>{var P=yl();R(()=>{Je(P,"src",l(r).thumbnail_url),Je(P,"alt",l(N).title)}),E(T,P)},O=T=>{var P=kl();E(T,P)};q(x,T=>{l(r).thumbnail_url?T(z):T(O,-1)})}var $=w(x,4),B=m($);nn(B,{size:20});var W=w(k,2),re=m(W),he=m(re),se=w(re,2);{var Te=T=>{var P=wl(),V=m(P);R(()=>H(V,l(N).description)),E(T,P)};q(se,T=>{l(N).description&&T(Te)})}var Z=w(se,2),pe=m(Z);{var wt=T=>{var P=El(),V=m(P);Ga(V,{size:13});var Q=w(V);R(()=>H(Q,` ${l(N).servings??""}`)),E(T,P)};q(pe,T=>{l(N).servings&&T(wt)})}var nt=w(pe,2);{var fe=T=>{var P=Sl(),V=m(P);Ua(V,{size:13});var Q=w(V);R(()=>H(Q,` Prep ${l(N).prepTime??""}`)),E(T,P)};q(nt,T=>{l(N).prepTime&&T(fe)})}var Et=w(nt,2);{var Qt=T=>{var P=Tl(),V=m(P);qa(V,{size:13});var Q=w(V);R(()=>H(Q,` Cook ${l(N).cookTime??""}`)),E(T,P)};q(Et,T=>{l(N).cookTime&&T(Qt)})}var ce=w(Z,2);{var Ne=T=>{var P=Nl(),V=m(P);Ha(V,{size:13}),R(()=>Je(P,"href",l(r).source_url)),E(T,P)};q(ce,T=>{l(r).source_url&&T(Ne)})}var er=w(ce,2);{var Lr=T=>{var P=Il(),V=w(m(P),2);Ke(V,21,()=>l(i),Ge,(ne,_e)=>{var ct=zl(),tr=m(ct),Mt={};R(()=>{H(tr,l(_e).name),Mt!==(Mt=l(_e).id)&&(ct.value=(ct.__value=l(_e).id)??"")}),E(ne,ct)});var Q;Xn(V);var be=w(V,2);{var me=ne=>{var _e=Al();E(ne,_e)};q(be,ne=>{l(a)&&ne(me)})}R(()=>{V.disabled=l(s),Q!==(Q=l(o))&&(V.value=(V.__value=l(o))??"",Nr(V,l(o)))}),Y("change",V,ne=>f(parseInt(ne.target.value))),E(T,P)};q(er,T=>{l(i).length>1&&T(Lr)})}var Dr=w(er,4),vn=w(m(Dr),2);Io(vn,{get recipe(){return l(N)}});var Fr=w(Dr,4),Vr=w(m(Fr),2);Ke(Vr,21,()=>l(N).instructions,Ge,(T,P,V)=>{var Q=xl(),be=m(Q);be.textContent=V+1;var me=w(be,2),ne=m(me);R(_e=>H(ne,_e),[()=>l(P).replace(/^Step \d+:\s*/i,"")]),E(T,Q)});var dn=w(Fr,2);{var C=T=>{var P=Ol(),V=w(X(P),2),Q=w(m(V),2);Ke(Q,21,()=>l(N).tips,Ge,(be,me)=>{var ne=Pl(),_e=m(ne);R(()=>H(_e,`💡 ${l(me)??""}`)),E(be,ne)}),E(T,P)};q(dn,T=>{var P;(P=l(N).tips)!=null&&P.length&&T(C)})}R(()=>H(he,l(N).title)),Y("click",$,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),E(_,A)};q(v,_=>{l(n)?_(y):l(r)?_(b,-1):_(h,1)})}var p=w(g,2);cn(p,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),E(e,c),Qe()}Zt(["click","change"]);var Rl=I('<div class="toast svelte-1w29e1y"> </div>');function jl(e,t){Ze(t,!0);let r=ht(t,"message",3,""),n=ht(t,"show",15,!1);rn(()=>{if(n()){const a=setTimeout(()=>{n(!1)},2500);return()=>clearTimeout(a)}});var i=Se(),o=X(i);{var s=a=>{var u=Rl(),f=m(u);R(()=>H(f,r())),E(a,u)};q(o,a=>{n()&&a(s)})}E(e,i),Qe()}var Ll=I('<p class="hint svelte-shp5yz">Please enter a valid TikTok URL</p>'),Dl=I('<div class="step-spinner svelte-shp5yz"></div>'),Fl=I("<div><div><!></div> <span> </span> <!></div>"),Vl=I('<div class="progress-card svelte-shp5yz"></div>'),Ul=I('<div class="error-banner"> </div>'),Hl=I('<div class="duplicate-card svelte-shp5yz"><p>⚠️ Already saved as <strong> </strong> in <em> </em></p> <button class="btn-primary" style="margin-top:12px">View saved recipe</button></div>'),ql=I('<img class="result-thumb svelte-shp5yz"/>'),Bl=I('<p class="result-desc svelte-shp5yz"> </p>'),Wl=I('<span class="pill"> </span>'),Yl=I('<span class="pill"> </span>'),Gl=I('<span class="pill"> </span>'),Kl=I('<li class="svelte-shp5yz"><div class="step-num-sm svelte-shp5yz"></div> <p class="svelte-shp5yz"> </p></li>'),Jl=I("<option> </option>"),Xl=I('<div class="result-card svelte-shp5yz"><!> <div class="result-content svelte-shp5yz"><h2 class="svelte-shp5yz"> </h2> <!> <div class="pills" style="margin:10px 0"><!> <!> <!></div> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Ingredients</h3> <!> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Instructions</h3> <ol class="result-steps svelte-shp5yz"></ol> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <div class="cookbook-row svelte-shp5yz"><span class="cookbook-label svelte-shp5yz">📁 Save to</span> <select class="cookbook-select svelte-shp5yz"></select></div> <div class="result-actions svelte-shp5yz"><button class="btn-primary save-btn svelte-shp5yz"> </button> <button class="btn-ghost">Discard</button></div></div></div>'),Zl=I('<div class="page-with-nav"><div class="top-bar svelte-shp5yz"><button class="icon-btn"><!></button> <h1>Add Recipe</h1></div> <div class="body svelte-shp5yz"><div class="input-card svelte-shp5yz"><div class="input-label svelte-shp5yz"><!> TikTok URL</div> <div class="input-row"><input type="url" inputmode="url" placeholder="https://www.tiktok.com/…"/></div> <!> <button class="btn-primary"> </button></div> <!> <!> <!> <!></div></div> <!> <!>',1);function Ql(e,t){Ze(t,!0);let r=U(""),n=U(null),i=U(null),o=U(null),s=U(!1),a=U(null),u=U(!1),f=U(Re([])),c=U(null);const g=["downloading","extracting","analyzing"],v={downloading:"Downloading video",extracting:"Extracting frames",analyzing:"Analyzing with Claude"};async function y(){try{const C=await fetch("/api/cookbooks",{credentials:"include"});S(f,await C.json(),!0);const T=l(f).find(P=>P.is_default);T&&S(c,T.id,!0)}catch{}}y();function h(C){try{const{hostname:T}=new URL(C.trim());return["tiktok.com","www.tiktok.com","vm.tiktok.com","m.tiktok.com"].includes(T)}catch{return!1}}const b=$e(()=>h(l(r))),p=$e(()=>l(n)&&l(n)!=="done"&&l(n)!=="duplicate"&&l(n)!=="error");function _(){if(!l(b))return;S(n,"downloading"),S(i,null),S(o,null),S(a,null);const C=new EventSource(`/api/analyze?url=${encodeURIComponent(l(r))}`);C.onmessage=T=>{const P=JSON.parse(T.data);P.step==="done"?(S(i,P,!0),S(n,"done"),C.close()):P.step==="duplicate"?(S(o,P,!0),S(n,"duplicate"),C.close()):P.step==="error"?(S(a,P.error,!0),S(n,"error"),C.close()):S(n,P.step,!0)},C.onerror=()=>{S(a,"Connection lost. Please try again."),S(n,"error"),C.close()}}async function N(){if(!(!l(i)||!l(c))){S(s,!0);try{const C=await fetch(`/api/cookbooks/${l(c)}/recipes`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:l(i).recipe.title,sourceUrl:l(i).meta.sourceUrl,thumbnailUrl:l(i).meta.thumbnail,recipeJson:l(i).recipe})});if(!C.ok)throw new Error("Failed to save");const T=await C.json();S(u,!0),setTimeout(()=>t.onNavigate("recipe",{recipeId:T.id,cookbookId:l(c)}),1200)}catch(C){S(a,C.message,!0),S(s,!1)}}}function A(){S(i,null),S(a,null),S(n,null),S(r,""),S(o,null)}var k=Zl(),x=X(k),z=m(x),O=m(z),$=m(O);nn($,{size:20});var B=w(z,2),W=m(B),re=m(W),he=m(re);Wa(he,{size:14});var se=w(re,2),Te=m(se);let Z;var pe=w(se,2);{var wt=C=>{var T=Ll();E(C,T)},nt=$e(()=>l(r).trim()&&!l(b));q(pe,C=>{l(nt)&&C(wt)})}var fe=w(pe,2),Et=m(fe),Qt=w(W,2);{var ce=C=>{var T=Vl();Ke(T,21,()=>g,Ge,(P,V)=>{const Q=$e(()=>g.indexOf(l(n))>g.indexOf(l(V))),be=$e(()=>l(n)===l(V));var me=Fl();let ne;var _e=m(me);let ct;var tr=m(_e);{var Mt=vt=>{Va(vt,{size:16})};q(tr,vt=>{l(Q)&&vt(Mt)})}var Ur=w(_e,2),Hr=m(Ur),hn=w(Ur,2);{var pn=vt=>{var qr=Dl();E(vt,qr)};q(hn,vt=>{l(be)&&vt(pn)})}R(()=>{ne=Wt(me,1,"step-row svelte-shp5yz",null,ne,{done:l(Q),active:l(be)}),ct=Wt(_e,1,"step-dot svelte-shp5yz",null,ct,{done:l(Q),active:l(be)}),H(Hr,v[l(V)])}),E(P,me)}),E(C,T)};q(Qt,C=>{l(p)&&C(ce)})}var Ne=w(Qt,2);{var er=C=>{var T=Ul(),P=m(T);R(()=>H(P,l(a))),E(C,T)};q(Ne,C=>{l(a)&&C(er)})}var Lr=w(Ne,2);{var Dr=C=>{var T=Hl(),P=m(T),V=w(m(P)),Q=m(V),be=w(V,2),me=m(be),ne=w(P,2);R(()=>{H(Q,l(o).title),H(me,l(o).cookbookName)}),Y("click",ne,()=>t.onNavigate("recipe",{recipeId:l(o).recipeId,cookbookId:l(o).cookbookId})),E(C,T)};q(Lr,C=>{l(o)&&C(Dr)})}var vn=w(Lr,2);{var Fr=C=>{const T=$e(()=>l(i).recipe);var P=Xl(),V=m(P);{var Q=G=>{var K=ql();R(()=>{Je(K,"src",l(i).meta.thumbnail),Je(K,"alt",l(T).title)}),E(G,K)};q(V,G=>{var K;(K=l(i).meta)!=null&&K.thumbnail&&G(Q)})}var be=w(V,2),me=m(be),ne=m(me),_e=w(me,2);{var ct=G=>{var K=Bl(),ye=m(K);R(()=>H(ye,l(T).description)),E(G,K)};q(_e,G=>{l(T).description&&G(ct)})}var tr=w(_e,2),Mt=m(tr);{var Ur=G=>{var K=Wl(),ye=m(K);R(()=>H(ye,`🍽 ${l(T).servings??""}`)),E(G,K)};q(Mt,G=>{l(T).servings&&G(Ur)})}var Hr=w(Mt,2);{var hn=G=>{var K=Yl(),ye=m(K);R(()=>H(ye,`⏱ ${l(T).prepTime??""}`)),E(G,K)};q(Hr,G=>{l(T).prepTime&&G(hn)})}var pn=w(Hr,2);{var vt=G=>{var K=Gl(),ye=m(K);R(()=>H(ye,`🔥 ${l(T).cookTime??""}`)),E(G,K)};q(pn,G=>{l(T).cookTime&&G(vt)})}var qr=w(tr,6);Io(qr,{get recipe(){return l(T)}});var ei=w(qr,6);Ke(ei,21,()=>l(T).instructions,Ge,(G,K,ye)=>{var Wr=Kl(),pr=m(Wr);pr.textContent=ye+1;var Co=w(pr,2),Mo=m(Co);R($o=>H(Mo,$o),[()=>l(K).replace(/^Step \d+:\s*/i,"")]),E(G,Wr)});var ti=w(ei,4),ri=w(m(ti),2);Ke(ri,21,()=>l(f),Ge,(G,K)=>{var ye=Jl(),Wr=m(ye),pr={};R(()=>{H(Wr,l(K).name),pr!==(pr=l(K).id)&&(ye.value=(ye.__value=l(K).id)??"")}),E(G,ye)});var xo=w(ti,2),Br=m(xo),Po=m(Br),Oo=w(Br,2);R(()=>{H(ne,l(T).title),Br.disabled=l(s)||!l(c),H(Po,l(s)?"Saving…":"✓ Save Recipe")}),Ta(ri,()=>l(c),G=>S(c,G)),Y("click",Br,N),Y("click",Oo,A),E(C,P)};q(vn,C=>{l(i)&&C(Fr)})}var Vr=w(x,2);jl(Vr,{message:"Recipe saved! 🎉",get show(){return l(u)},set show(C){S(u,C,!0)}});var dn=w(Vr,2);cn(dn,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),R(C=>{Z=Wt(Te,1,"input",null,Z,C),Te.disabled=l(p),fe.disabled=l(p)||!l(b),H(Et,l(p)?"Analyzing…":"Analyze Video")},[()=>({invalid:l(r).trim()&&!l(b)})]),Y("click",O,()=>t.onNavigate("cookbooks")),Y("keydown",Te,C=>C.key==="Enter"&&_()),Zn(Te,()=>l(r),C=>S(r,C)),Y("click",fe,_),E(e,k),Qe()}Zt(["click","keydown"]);function eu(e,t){Ze(t,!0);let r=U(null);function n(){const b=new URLSearchParams(window.location.search);return{page:b.get("page")||"cookbooks",cookbookId:b.get("cookbookId")?parseInt(b.get("cookbookId")):null,recipeId:b.get("recipeId")?parseInt(b.get("recipeId")):null}}let i=U(Re(n()));function o(b,p={}){if(b==="cookbooks")history.pushState({},"","/");else{const _=new URLSearchParams({page:b,...s(p)});history.pushState({},"",`?${_}`)}S(i,n(),!0)}function s(b){return Object.fromEntries(Object.entries(b).filter(([,p])=>p!=null))}rn(()=>{function b(){S(i,n(),!0)}return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)});async function a(){const p=await(await fetch("/api/me",{credentials:"include"})).json();S(r,p.userId||null,!0)}a();var u=Se(),f=X(u);{var c=b=>{Ra(b,{onLogin:p=>{S(r,p,!0),o("cookbooks")}})},g=b=>{ol(b,{get userId(){return l(r)},get route(){return l(i)},onNavigate:o,onLogout:()=>{S(r,null)}})},v=b=>{vl(b,{get cookbookId(){return l(i).cookbookId},get route(){return l(i)},onNavigate:o})},y=b=>{$l(b,{get recipeId(){return l(i).recipeId},get cookbookId(){return l(i).cookbookId},get route(){return l(i)},onNavigate:o})},h=b=>{Ql(b,{get route(){return l(i)},onNavigate:o})};q(f,b=>{l(r)?l(i).page==="cookbooks"?b(g,1):l(i).page==="cookbook"?b(v,2):l(i).page==="recipe"?b(y,3):l(i).page==="analyze"&&b(h,4):b(c)})}E(e,u),Qe()}va(eu,{target:document.getElementById("app")});
