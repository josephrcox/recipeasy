var $s=Object.defineProperty;var ii=e=>{throw TypeError(e)};var js=(e,t,r)=>t in e?$s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Be=(e,t,r)=>js(e,typeof t!="symbol"?t+"":t,r),gn=(e,t,r)=>t.has(e)||ii("Cannot "+r);var d=(e,t,r)=>(gn(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),V=(e,t,r,n)=>(gn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),J=(e,t,r)=>(gn(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Rs=!1;var Ln=Array.isArray,Ls=Array.prototype.indexOf,lr=Array.prototype.includes,ln=Array.from,Ds=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Ni=Object.getOwnPropertyDescriptors,Fs=Object.prototype,Vs=Array.prototype,Dn=Object.getPrototypeOf,si=Object.isExtensible;function gr(e){return typeof e=="function"}const Us=()=>{};function qs(e){return e()}function Sn(e){for(var t=0;t<e.length;t++)e[t]()}function Ai(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Hs(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const fe=2,ur=4,Cr=8,Fn=1<<24,Ct=16,Xe=32,Yt=64,Tn=128,De=512,se=1024,ge=2048,ft=4096,xe=8192,Fe=16384,Xt=32768,oi=1<<25,Gt=65536,ai=1<<17,Bs=1<<18,pr=1<<19,Ii=1<<20,lt=1<<25,Kt=65536,zn=1<<21,Vn=1<<22,It=1<<23,kt=Symbol("$state"),Pi=Symbol("legacy props"),Ws=Symbol(""),ht=new class extends Error{constructor(){super(...arguments);Be(this,"name","StaleReactionError");Be(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Si;const xi=!!((Si=globalThis.document)!=null&&Si.contentType)&&globalThis.document.contentType.includes("xml");function Ys(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Gs(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ks(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Js(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Zs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function eo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function to(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ro(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function no(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const io=1,so=2,Oi=4,oo=8,ao=16,lo=1,uo=2,Ci=4,fo=8,co=16,vo=1,ho=2,le=Symbol(),Mi="http://www.w3.org/1999/xhtml",po="http://www.w3.org/2000/svg",_o="@attach";function go(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function bo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function $i(e){return e===this.v}function mo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ji(e){return!mo(e,this.v)}let Mr=!1,ko=!1;function yo(){Mr=!0}let ue=null;function fr(e){ue=e}function Ze(e,t=!1,r){ue={p:ue,i:!1,c:null,e:null,s:e,x:null,r:D,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function Qe(e){var t=ue,r=t.e;if(r!==null){t.e=null;for(var n of r)os(n)}return t.i=!0,ue=t.p,{}}function $r(){return!Mr||ue!==null&&ue.l===null}let jt=[];function Ri(){var e=jt;jt=[],Sn(e)}function yt(e){if(jt.length===0&&!wr){var t=jt;queueMicrotask(()=>{t===jt&&Ri()})}jt.push(e)}function wo(){for(;jt.length>0;)Ri()}function Li(e){var t=D;if(t===null)return R.f|=It,e;if(!(t.f&Xt)&&!(t.f&ur))throw e;Nt(e,t)}function Nt(e,t){for(;t!==null;){if(t.f&Tn){if(!(t.f&Xt))throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Eo=-7169;function re(e,t){e.f=e.f&Eo|t}function Un(e){e.f&De||e.deps===null?re(e,se):re(e,ft)}function Di(e){if(e!==null)for(const t of e)!(t.f&fe)||!(t.f&Kt)||(t.f^=Kt,Di(t.deps))}function Fi(e,t,r){e.f&ge?t.add(e):e.f&ft&&r.add(e),Di(e.deps),re(e,se)}let Yr=!1;function So(e){var t=Yr;try{return Yr=!1,[e(),Yr]}finally{Yr=t}}const St=new Set;let M=null,de=null,Nn=null,wr=!1,bn=!1,nr=null,Kr=null;var li=0;let To=1;var ir,sr,_t,nt,Ar,Ae,Dt,gt,it,or,Ft,ne,Jr,Vi,Xr,An,In,Ui;const sn=class sn{constructor(){L(this,ne);Be(this,"id",To++);Be(this,"current",new Map);Be(this,"previous",new Map);L(this,ir,new Set);L(this,sr,new Set);L(this,_t,new Map);L(this,nt,new Map);L(this,Ar,null);L(this,Ae,[]);L(this,Dt,new Set);L(this,gt,new Set);L(this,it,new Map);Be(this,"is_fork",!1);L(this,or,!1);L(this,Ft,new Set)}skip_effect(t){d(this,it).has(t)||d(this,it).set(t,{d:[],m:[]})}unskip_effect(t){var r=d(this,it).get(t);if(r){d(this,it).delete(t);for(var n of r.d)re(n,ge),this.schedule(n);for(n of r.m)re(n,ft),this.schedule(n)}}capture(t,r,n=!1){r!==le&&!this.previous.has(t)&&this.previous.set(t,r),t.f&It||(this.current.set(t,[t.v,n]),de==null||de.set(t,t.v))}activate(){M=this}deactivate(){M=null,de=null}flush(){try{bn=!0,M=this,J(this,ne,Xr).call(this)}finally{li=0,Nn=null,nr=null,Kr=null,bn=!1,M=null,de=null,Pt.clear()}}discard(){for(const t of d(this,sr))t(this);d(this,sr).clear(),St.delete(this)}increment(t,r){let n=d(this,_t).get(r)??0;if(d(this,_t).set(r,n+1),t){let i=d(this,nt).get(r)??0;d(this,nt).set(r,i+1)}}decrement(t,r,n){let i=d(this,_t).get(r)??0;if(i===1?d(this,_t).delete(r):d(this,_t).set(r,i-1),t){let s=d(this,nt).get(r)??0;s===1?d(this,nt).delete(r):d(this,nt).set(r,s-1)}d(this,or)||n||(V(this,or,!0),yt(()=>{V(this,or,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)d(this,Dt).add(n);for(const n of r)d(this,gt).add(n);t.clear(),r.clear()}oncommit(t){d(this,ir).add(t)}ondiscard(t){d(this,sr).add(t)}settled(){return(d(this,Ar)??V(this,Ar,Ai())).promise}static ensure(){if(M===null){const t=M=new sn;bn||(St.add(M),wr||yt(()=>{M===t&&t.flush()}))}return M}apply(){{de=null;return}}schedule(t){var i;if(Nn=t,(i=t.b)!=null&&i.is_pending&&t.f&(ur|Cr|Fn)&&!(t.f&Xt)){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(nr!==null&&r===D&&(R===null||!(R.f&fe)))return;if(n&(Yt|Xe)){if(!(n&se))return;r.f^=se}}d(this,Ae).push(r)}};ir=new WeakMap,sr=new WeakMap,_t=new WeakMap,nt=new WeakMap,Ar=new WeakMap,Ae=new WeakMap,Dt=new WeakMap,gt=new WeakMap,it=new WeakMap,or=new WeakMap,Ft=new WeakMap,ne=new WeakSet,Jr=function(){return this.is_fork||d(this,nt).size>0},Vi=function(){for(const n of d(this,Ft))for(const i of d(n,nt).keys()){for(var t=!1,r=i;r.parent!==null;){if(d(this,it).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},Xr=function(){var a,f;if(li++>1e3&&(St.delete(this),No()),!J(this,ne,Jr).call(this)){for(const u of d(this,Dt))d(this,gt).delete(u),re(u,ge),this.schedule(u);for(const u of d(this,gt))re(u,ft),this.schedule(u)}const t=d(this,Ae);V(this,Ae,[]),this.apply();var r=nr=[],n=[],i=Kr=[];for(const u of t)try{J(this,ne,An).call(this,u,r,n)}catch(c){throw Wi(u),c}if(M=null,i.length>0){var s=sn.ensure();for(const u of i)s.schedule(u)}if(nr=null,Kr=null,J(this,ne,Jr).call(this)||J(this,ne,Vi).call(this)){J(this,ne,In).call(this,n),J(this,ne,In).call(this,r);for(const[u,c]of d(this,it))Bi(u,c)}else{d(this,_t).size===0&&St.delete(this),d(this,Dt).clear(),d(this,gt).clear();for(const u of d(this,ir))u(this);d(this,ir).clear(),ui(n),ui(r),(a=d(this,Ar))==null||a.resolve()}var o=M;if(d(this,Ae).length>0){const u=o??(o=this);d(u,Ae).push(...d(this,Ae).filter(c=>!d(u,Ae).includes(c)))}o!==null&&(St.add(o),J(f=o,ne,Xr).call(f)),St.has(this)||J(this,ne,Ui).call(this)},An=function(t,r,n){t.f^=se;for(var i=t.first;i!==null;){var s=i.f,o=(s&(Xe|Yt))!==0,a=o&&(s&se)!==0,f=a||(s&xe)!==0||d(this,it).has(i);if(!f&&i.fn!==null){o?i.f^=se:s&ur?r.push(i):Lr(i)&&(s&Ct&&d(this,gt).add(i),dr(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var c=i.next;if(c!==null){i=c;break}i=i.parent}}},In=function(t){for(var r=0;r<t.length;r+=1)Fi(t[r],d(this,Dt),d(this,gt))},Ui=function(){var u,c,_;for(const v of St){var t=v.id<this.id,r=[];for(const[k,[p,w]]of this.current){if(v.current.has(k)){var n=v.current.get(k)[0];if(t&&p!==n)v.current.set(k,[p,w]);else continue}r.push(k)}var i=[...v.current.keys()].filter(k=>!this.current.has(k));if(i.length===0)t&&v.discard();else if(r.length>0){v.activate();var s=new Set,o=new Map;for(var a of r)qi(a,i,s,o);if(d(v,Ae).length>0){v.apply();for(var f of d(v,Ae))J(u=v,ne,An).call(u,f,[],[]);V(v,Ae,[])}v.deactivate()}}for(const v of St)d(v,Ft).has(this)&&(d(v,Ft).delete(this),d(v,Ft).size===0&&!J(c=v,ne,Jr).call(c)&&(v.activate(),J(_=v,ne,Xr).call(_)))};let Jt=sn;function zo(e){var t=wr;wr=!0;try{for(var r;;){if(wo(),M===null)return r;M.flush()}}finally{wr=t}}function No(){try{Zs()}catch(e){Nt(e,Nn)}}let We=null;function ui(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if(!(n.f&(Fe|xe))&&Lr(n)&&(We=new Set,dr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&fs(n),(We==null?void 0:We.size)>0)){Pt.clear();for(const i of We){if(i.f&(Fe|xe))continue;const s=[i];let o=i.parent;for(;o!==null;)We.has(o)&&(We.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const f=s[a];f.f&(Fe|xe)||dr(f)}}We.clear()}}We=null}}function qi(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&fe?qi(i,t,r,n):s&(Vn|Ct)&&!(s&ge)&&Hi(i,t,n)&&(re(i,ge),qn(i))}}function Hi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(lr.call(t,i))return!0;if(i.f&fe&&Hi(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function qn(e){M.schedule(e)}function Bi(e,t){if(!(e.f&Xe&&e.f&se)){e.f&ge?t.d.push(e):e.f&ft&&t.m.push(e),re(e,se);for(var r=e.first;r!==null;)Bi(r,t),r=r.next}}function Wi(e){re(e,se);for(var t=e.first;t!==null;)Wi(t),t=t.next}function Ao(e){let t=0,r=xt(0),n;return()=>{Wn()&&(l(r),as(()=>(t===0&&(n=hr(()=>e(()=>Er(r)))),t+=1,()=>{yt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Er(r))})})))}}var Io=Gt|pr;function Po(e,t,r,n){new xo(e,t,r,n)}var Re,Rn,st,Vt,we,ot,Ie,Ye,bt,Ut,zt,ar,Ir,Pr,mt,on,oe,Oo,Co,Mo,Pn,Zr,Qr,xn;class xo{constructor(t,r,n,i){L(this,oe);Be(this,"parent");Be(this,"is_pending",!1);Be(this,"transform_error");L(this,Re);L(this,Rn,null);L(this,st);L(this,Vt);L(this,we);L(this,ot,null);L(this,Ie,null);L(this,Ye,null);L(this,bt,null);L(this,Ut,0);L(this,zt,0);L(this,ar,!1);L(this,Ir,new Set);L(this,Pr,new Set);L(this,mt,null);L(this,on,Ao(()=>(V(this,mt,xt(d(this,Ut))),()=>{V(this,mt,null)})));var s;V(this,Re,t),V(this,st,r),V(this,Vt,o=>{var a=D;a.b=this,a.f|=Tn,n(o)}),this.parent=D.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),V(this,we,cn(()=>{J(this,oe,Pn).call(this)},Io))}defer_effect(t){Fi(t,d(this,Ir),d(this,Pr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!d(this,st).pending}update_pending_count(t,r){J(this,oe,xn).call(this,t,r),V(this,Ut,d(this,Ut)+t),!(!d(this,mt)||d(this,ar))&&(V(this,ar,!0),yt(()=>{V(this,ar,!1),d(this,mt)&&cr(d(this,mt),d(this,Ut))}))}get_effect_pending(){return d(this,on).call(this),l(d(this,mt))}error(t){var r=d(this,st).onerror;let n=d(this,st).failed;if(!r&&!n)throw t;d(this,ot)&&(he(d(this,ot)),V(this,ot,null)),d(this,Ie)&&(he(d(this,Ie)),V(this,Ie,null)),d(this,Ye)&&(he(d(this,Ye)),V(this,Ye,null));var i=!1,s=!1;const o=()=>{if(i){bo();return}i=!0,s&&no(),d(this,Ye)!==null&&Ht(d(this,Ye),()=>{V(this,Ye,null)}),J(this,oe,Qr).call(this,()=>{J(this,oe,Pn).call(this)})},a=f=>{try{s=!0,r==null||r(f,o),s=!1}catch(u){Nt(u,d(this,we)&&d(this,we).parent)}n&&V(this,Ye,J(this,oe,Qr).call(this,()=>{try{return Se(()=>{var u=D;u.b=this,u.f|=Tn,n(d(this,Re),()=>f,()=>o)})}catch(u){return Nt(u,d(this,we).parent),null}}))};yt(()=>{var f;try{f=this.transform_error(t)}catch(u){Nt(u,d(this,we)&&d(this,we).parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(a,u=>Nt(u,d(this,we)&&d(this,we).parent)):a(f)})}}Re=new WeakMap,Rn=new WeakMap,st=new WeakMap,Vt=new WeakMap,we=new WeakMap,ot=new WeakMap,Ie=new WeakMap,Ye=new WeakMap,bt=new WeakMap,Ut=new WeakMap,zt=new WeakMap,ar=new WeakMap,Ir=new WeakMap,Pr=new WeakMap,mt=new WeakMap,on=new WeakMap,oe=new WeakSet,Oo=function(){try{V(this,ot,Se(()=>d(this,Vt).call(this,d(this,Re))))}catch(t){this.error(t)}},Co=function(t){const r=d(this,st).failed;r&&V(this,Ye,Se(()=>{r(d(this,Re),()=>t,()=>()=>{})}))},Mo=function(){const t=d(this,st).pending;t&&(this.is_pending=!0,V(this,Ie,Se(()=>t(d(this,Re)))),yt(()=>{var r=V(this,bt,document.createDocumentFragment()),n=wt();r.append(n),V(this,ot,J(this,oe,Qr).call(this,()=>Se(()=>d(this,Vt).call(this,n)))),d(this,zt)===0&&(d(this,Re).before(r),V(this,bt,null),Ht(d(this,Ie),()=>{V(this,Ie,null)}),J(this,oe,Zr).call(this,M))}))},Pn=function(){try{if(this.is_pending=this.has_pending_snippet(),V(this,zt,0),V(this,Ut,0),V(this,ot,Se(()=>{d(this,Vt).call(this,d(this,Re))})),d(this,zt)>0){var t=V(this,bt,document.createDocumentFragment());Xn(d(this,ot),t);const r=d(this,st).pending;V(this,Ie,Se(()=>r(d(this,Re))))}else J(this,oe,Zr).call(this,M)}catch(r){this.error(r)}},Zr=function(t){this.is_pending=!1,t.transfer_effects(d(this,Ir),d(this,Pr))},Qr=function(t){var r=D,n=R,i=ue;qe(d(this,we)),Ue(d(this,we)),fr(d(this,we).ctx);try{return Jt.ensure(),t()}catch(s){return Li(s),null}finally{qe(r),Ue(n),fr(i)}},xn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&J(n=this.parent,oe,xn).call(n,t,r);return}V(this,zt,d(this,zt)+t),d(this,zt)===0&&(J(this,oe,Zr).call(this,r),d(this,Ie)&&Ht(d(this,Ie),()=>{V(this,Ie,null)}),d(this,bt)&&(d(this,Re).before(d(this,bt)),V(this,bt,null)))};function Yi(e,t,r,n){const i=$r()?jr:Hn;var s=e.filter(v=>!v.settled);if(r.length===0&&s.length===0){n(t.map(i));return}var o=D,a=$o(),f=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(v=>v.promise)):null;function u(v){a();try{n(v)}catch(k){o.f&Fe||Nt(k,o)}tn()}if(r.length===0){f.then(()=>u(t.map(i)));return}var c=Gi();function _(){Promise.all(r.map(v=>jo(v))).then(v=>u([...t.map(i),...v])).catch(v=>Nt(v,o)).finally(()=>c())}f?f.then(()=>{a(),_(),tn()}):_()}function $o(){var e=D,t=R,r=ue,n=M;return function(s=!0){qe(e),Ue(t),fr(r),s&&!(e.f&Fe)&&(n==null||n.activate(),n==null||n.apply())}}function tn(e=!0){qe(null),Ue(null),fr(null),e&&(M==null||M.deactivate())}function Gi(){var e=D,t=e.b,r=M,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(i=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,i)}}function jr(e){var t=fe|ge,r=R!==null&&R.f&fe?R:null;return D!==null&&(D.f|=pr),{ctx:ue,deps:null,effects:null,equals:$i,f:t,fn:e,reactions:null,rv:0,v:le,wv:0,parent:r??D,ac:null}}function jo(e,t,r){let n=D;n===null&&Ys();var i=void 0,s=xt(le),o=!R,a=new Map;return Ko(()=>{var k;var f=D,u=Ai();i=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(tn)}catch(p){u.reject(p),tn()}var c=M;if(o){if(f.f&Xt)var _=Gi();if(n.b.is_rendered())(k=a.get(c))==null||k.reject(ht),a.delete(c);else{for(const p of a.values())p.reject(ht);a.clear()}a.set(c,u)}const v=(p,w=void 0)=>{if(_){var g=w===ht;_(g)}if(!(w===ht||f.f&Fe)){if(c.activate(),w)s.f|=It,cr(s,w);else{s.f&It&&(s.f^=It),cr(s,p);for(const[h,S]of a){if(a.delete(h),h===c)break;S.reject(ht)}}c.deactivate()}};u.promise.then(v,p=>v(null,p||"unknown"))}),Yn(()=>{for(const f of a.values())f.reject(ht)}),new Promise(f=>{function u(c){function _(){c===i?f(s):u(i)}c.then(_,_)}u(i)})}function Le(e){const t=jr(e);return ds(t),t}function Hn(e){const t=jr(e);return t.equals=ji,t}function Ro(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)he(t[r])}}function Lo(e){for(var t=e.parent;t!==null;){if(!(t.f&fe))return t.f&Fe?null:t;t=t.parent}return null}function Bn(e){var t,r=D;qe(Lo(e));try{e.f&=~Kt,Ro(e),t=gs(e)}finally{qe(r)}return t}function Ki(e){var t=e.v,r=Bn(e);if(!e.equals(r)&&(e.wv=ps(),(!(M!=null&&M.is_fork)||e.deps===null)&&(e.v=r,M==null||M.capture(e,t,!0),e.deps===null))){re(e,se);return}Ot||(de!==null?(Wn()||M!=null&&M.is_fork)&&de.set(e,r):Un(e))}function Do(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(ht),n.teardown=Us,n.ac=null,Tr(n,0),Kn(n))}function Ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&dr(t)}let On=new Set;const Pt=new Map;let Xi=!1;function xt(e,t){var r={f:0,v:e,reactions:null,equals:$i,rv:0,wv:0};return r}function q(e,t){const r=xt(e);return ds(r),r}function Fo(e,t=!1,r=!0){var i;const n=xt(e);return t||(n.equals=ji),Mr&&r&&ue!==null&&ue.l!==null&&((i=ue.l).s??(i.s=[])).push(n),n}function T(e,t,r=!1){R!==null&&(!Ke||R.f&ai)&&$r()&&R.f&(fe|Ct|Vn|ai)&&(Ve===null||!lr.call(Ve,e))&&ro();let n=r?ut(t):t;return cr(e,n,Kr)}function cr(e,t,r=null){if(!e.equals(t)){var n=e.v;Ot?Pt.set(e,t):Pt.set(e,n),e.v=t;var i=Jt.ensure();if(i.capture(e,n),e.f&fe){const s=e;e.f&ge&&Bn(s),de===null&&Un(s)}e.wv=ps(),Zi(e,ge,r),$r()&&D!==null&&D.f&se&&!(D.f&(Xe|Yt))&&(je===null?Zo([e]):je.push(e)),!i.is_fork&&On.size>0&&!Xi&&Vo()}return t}function Vo(){Xi=!1;for(const e of On)e.f&se&&re(e,ft),Lr(e)&&dr(e);On.clear()}function fi(e,t=1){var r=l(e),n=t===1?r++:r--;return T(e,r),n}function Er(e){T(e,e.v+1)}function Zi(e,t,r){var n=e.reactions;if(n!==null)for(var i=$r(),s=n.length,o=0;o<s;o++){var a=n[o],f=a.f;if(!(!i&&a===D)){var u=(f&ge)===0;if(u&&re(a,t),f&fe){var c=a;de==null||de.delete(c),f&Kt||(f&De&&(a.f|=Kt),Zi(c,ft,r))}else if(u){var _=a;f&Ct&&We!==null&&We.add(_),r!==null?r.push(_):qn(_)}}}}function ut(e){if(typeof e!="object"||e===null||kt in e)return e;const t=Dn(e);if(t!==Fs&&t!==Vs)return e;var r=new Map,n=Ln(e),i=q(0),s=Bt,o=a=>{if(Bt===s)return a();var f=R,u=Bt;Ue(null),pi(s);var c=a();return Ue(f),pi(u),c};return n&&r.set("length",q(e.length)),new Proxy(e,{defineProperty(a,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&eo();var c=r.get(f);return c===void 0?o(()=>{var _=q(u.value);return r.set(f,_),_}):T(c,u.value,!0),!0},deleteProperty(a,f){var u=r.get(f);if(u===void 0){if(f in a){const c=o(()=>q(le));r.set(f,c),Er(i)}}else T(u,le),Er(i);return!0},get(a,f,u){var k;if(f===kt)return e;var c=r.get(f),_=f in a;if(c===void 0&&(!_||(k=At(a,f))!=null&&k.writable)&&(c=o(()=>{var p=ut(_?a[f]:le),w=q(p);return w}),r.set(f,c)),c!==void 0){var v=l(c);return v===le?void 0:v}return Reflect.get(a,f,u)},getOwnPropertyDescriptor(a,f){var u=Reflect.getOwnPropertyDescriptor(a,f);if(u&&"value"in u){var c=r.get(f);c&&(u.value=l(c))}else if(u===void 0){var _=r.get(f),v=_==null?void 0:_.v;if(_!==void 0&&v!==le)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(a,f){var v;if(f===kt)return!0;var u=r.get(f),c=u!==void 0&&u.v!==le||Reflect.has(a,f);if(u!==void 0||D!==null&&(!c||(v=At(a,f))!=null&&v.writable)){u===void 0&&(u=o(()=>{var k=c?ut(a[f]):le,p=q(k);return p}),r.set(f,u));var _=l(u);if(_===le)return!1}return c},set(a,f,u,c){var O;var _=r.get(f),v=f in a;if(n&&f==="length")for(var k=u;k<_.v;k+=1){var p=r.get(k+"");p!==void 0?T(p,le):k in a&&(p=o(()=>q(le)),r.set(k+"",p))}if(_===void 0)(!v||(O=At(a,f))!=null&&O.writable)&&(_=o(()=>q(void 0)),T(_,ut(u)),r.set(f,_));else{v=_.v!==le;var w=o(()=>ut(u));T(_,w)}var g=Reflect.getOwnPropertyDescriptor(a,f);if(g!=null&&g.set&&g.set.call(c,u),!v){if(n&&typeof f=="string"){var h=r.get("length"),S=Number(f);Number.isInteger(S)&&S>=h.v&&T(h,S+1)}Er(i)}return!0},ownKeys(a){l(i);var f=Reflect.ownKeys(a).filter(_=>{var v=r.get(_);return v===void 0||v.v!==le});for(var[u,c]of r)c.v!==le&&!(u in a)&&f.push(u);return f},setPrototypeOf(){to()}})}function ci(e){try{if(e!==null&&typeof e=="object"&&kt in e)return e[kt]}catch{}return e}function Uo(e,t){return Object.is(ci(e),ci(t))}var vi,Qi,es,ts;function qo(){if(vi===void 0){vi=window,Qi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;es=At(t,"firstChild").get,ts=At(t,"nextSibling").get,si(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),si(r)&&(r.__t=void 0)}}function wt(e=""){return document.createTextNode(e)}function vr(e){return es.call(e)}function Rr(e){return ts.call(e)}function b(e,t){return vr(e)}function Z(e,t=!1){{var r=vr(e);return r instanceof Comment&&r.data===""?Rr(r):r}}function E(e,t=1,r=!1){let n=e;for(;t--;)n=Rr(n);return n}function Ho(e){e.textContent=""}function rs(){return!1}function ns(e,t,r){return document.createElementNS(t??Mi,e,void 0)}function un(e,t){if(t){const r=document.body;e.autofocus=!0,yt(()=>{document.activeElement===r&&e.focus()})}}let di=!1;function Bo(){di||(di=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function fn(e){var t=R,r=D;Ue(null),qe(null);try{return e()}finally{Ue(t),qe(r)}}function is(e,t,r,n=r){e.addEventListener(t,()=>fn(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Bo()}function ss(e){D===null&&(R===null&&Xs(),Js()),Ot&&Ks()}function Wo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function et(e,t){var r=D;r!==null&&r.f&xe&&(e|=xe);var n={ctx:ue,deps:null,nodes:null,f:e|ge|De,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},i=n;if(e&ur)nr!==null?nr.push(n):Jt.ensure().schedule(n);else if(t!==null){try{dr(n)}catch(o){throw he(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&pr)&&(i=i.first,e&Ct&&e&Gt&&i!==null&&(i.f|=Gt))}if(i!==null&&(i.parent=r,r!==null&&Wo(i,r),R!==null&&R.f&fe&&!(e&Yt))){var s=R;(s.effects??(s.effects=[])).push(i)}return n}function Wn(){return R!==null&&!Ke}function Yn(e){const t=et(Cr,null);return re(t,se),t.teardown=e,t}function rn(e){ss();var t=D.f,r=!R&&(t&Xe)!==0&&(t&Xt)===0;if(r){var n=ue;(n.e??(n.e=[])).push(e)}else return os(e)}function os(e){return et(ur|Ii,e)}function Yo(e){return ss(),et(Cr|Ii,e)}function Go(e){Jt.ensure();const t=et(Yt|pr,e);return(r={})=>new Promise(n=>{r.outro?Ht(t,()=>{he(t),n(void 0)}):(he(t),n(void 0))})}function Gn(e){return et(ur,e)}function Ko(e){return et(Vn|pr,e)}function as(e,t=0){return et(Cr|t,e)}function j(e,t=[],r=[],n=[]){Yi(n,t,r,i=>{et(Cr,()=>e(...i.map(l)))})}function cn(e,t=0){var r=et(Ct|t,e);return r}function ls(e,t=0){var r=et(Fn|t,e);return r}function Se(e){return et(Xe|pr,e)}function us(e){var t=e.teardown;if(t!==null){const r=Ot,n=R;hi(!0),Ue(null);try{t.call(null)}finally{hi(r),Ue(n)}}}function Kn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&fn(()=>{i.abort(ht)});var n=r.next;r.f&Yt?r.parent=null:he(r,t),r=n}}function Jo(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Xe||he(t),t=r}}function he(e,t=!0){var r=!1;(t||e.f&Bs)&&e.nodes!==null&&e.nodes.end!==null&&(Xo(e.nodes.start,e.nodes.end),r=!0),re(e,oi),Kn(e,t&&!r),Tr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();us(e),e.f^=oi,e.f|=Fe;var i=e.parent;i!==null&&i.first!==null&&fs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Xo(e,t){for(;e!==null;){var r=e===t?null:Rr(e);e.remove(),e=r}}function fs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ht(e,t,r=!0){var n=[];cs(e,n,!0);var i=()=>{r&&he(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function cs(e,t,r){if(!(e.f&xe)){e.f^=xe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next,o=(i.f&Gt)!==0||(i.f&Xe)!==0&&(e.f&Ct)!==0;cs(i,t,o?r:!1),i=s}}}function Jn(e){vs(e,!0)}function vs(e,t){if(e.f&xe){e.f^=xe,e.f&se||(re(e,ge),Jt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Gt)!==0||(r.f&Xe)!==0;vs(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function Xn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Rr(r);t.append(r),r=i}}let en=!1,Ot=!1;function hi(e){Ot=e}let R=null,Ke=!1;function Ue(e){R=e}let D=null;function qe(e){D=e}let Ve=null;function ds(e){R!==null&&(Ve===null?Ve=[e]:Ve.push(e))}let Ee=null,Ne=0,je=null;function Zo(e){je=e}let hs=1,Rt=0,Bt=Rt;function pi(e){Bt=e}function ps(){return++hs}function Lr(e){var t=e.f;if(t&ge)return!0;if(t&fe&&(e.f&=~Kt),t&ft){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Lr(s)&&Ki(s),s.wv>e.wv)return!0}t&De&&de===null&&re(e,se)}return!1}function _s(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Ve!==null&&lr.call(Ve,e)))for(var i=0;i<n.length;i++){var s=n[i];s.f&fe?_s(s,t,!1):t===s&&(r?re(s,ge):s.f&se&&re(s,ft),qn(s))}}function gs(e){var w;var t=Ee,r=Ne,n=je,i=R,s=Ve,o=ue,a=Ke,f=Bt,u=e.f;Ee=null,Ne=0,je=null,R=u&(Xe|Yt)?null:e,Ve=null,fr(e.ctx),Ke=!1,Bt=++Rt,e.ac!==null&&(fn(()=>{e.ac.abort(ht)}),e.ac=null);try{e.f|=zn;var c=e.fn,_=c();e.f|=Xt;var v=e.deps,k=M==null?void 0:M.is_fork;if(Ee!==null){var p;if(k||Tr(e,Ne),v!==null&&Ne>0)for(v.length=Ne+Ee.length,p=0;p<Ee.length;p++)v[Ne+p]=Ee[p];else e.deps=v=Ee;if(Wn()&&e.f&De)for(p=Ne;p<v.length;p++)((w=v[p]).reactions??(w.reactions=[])).push(e)}else!k&&v!==null&&Ne<v.length&&(Tr(e,Ne),v.length=Ne);if($r()&&je!==null&&!Ke&&v!==null&&!(e.f&(fe|ft|ge)))for(p=0;p<je.length;p++)_s(je[p],e);if(i!==null&&i!==e){if(Rt++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=Rt;if(t!==null)for(const g of t)g.rv=Rt;je!==null&&(n===null?n=je:n.push(...je))}return e.f&It&&(e.f^=It),_}catch(g){return Li(g)}finally{e.f^=zn,Ee=t,Ne=r,je=n,R=i,Ve=s,fr(o),Ke=a,Bt=f}}function Qo(e,t){let r=t.reactions;if(r!==null){var n=Ls.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&t.f&fe&&(Ee===null||!lr.call(Ee,t))){var s=t;s.f&De&&(s.f^=De,s.f&=~Kt),Un(s),Do(s),Tr(s,0)}}function Tr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Qo(e,r[n])}function dr(e){var t=e.f;if(!(t&Fe)){re(e,se);var r=D,n=en;D=e,en=!0;try{t&(Ct|Fn)?Jo(e):Kn(e),us(e);var i=gs(e);e.teardown=typeof i=="function"?i:null,e.wv=hs;var s;Rs&&ko&&e.f&ge&&e.deps}finally{en=n,D=r}}}async function ea(){await Promise.resolve(),zo()}function l(e){var t=e.f,r=(t&fe)!==0;if(R!==null&&!Ke){var n=D!==null&&(D.f&Fe)!==0;if(!n&&(Ve===null||!lr.call(Ve,e))){var i=R.deps;if(R.f&zn)e.rv<Rt&&(e.rv=Rt,Ee===null&&i!==null&&i[Ne]===e?Ne++:Ee===null?Ee=[e]:Ee.push(e));else{(R.deps??(R.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[R]:lr.call(s,R)||s.push(R)}}}if(Ot&&Pt.has(e))return Pt.get(e);if(r){var o=e;if(Ot){var a=o.v;return(!(o.f&se)&&o.reactions!==null||ms(o))&&(a=Bn(o)),Pt.set(o,a),a}var f=(o.f&De)===0&&!Ke&&R!==null&&(en||(R.f&De)!==0),u=(o.f&Xt)===0;Lr(o)&&(f&&(o.f|=De),Ki(o)),f&&!u&&(Ji(o),bs(o))}if(de!=null&&de.has(e))return de.get(e);if(e.f&It)throw e.v;return e.v}function bs(e){if(e.f|=De,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&fe&&!(t.f&De)&&(Ji(t),bs(t))}function ms(e){if(e.v===le)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Pt.has(t)||t.f&fe&&ms(t))return!0;return!1}function hr(e){var t=Ke;try{return Ke=!0,e()}finally{Ke=t}}function $t(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(kt in e)Cn(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&kt in r&&Cn(r)}}}function Cn(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Cn(e[n],t)}catch{}const r=Dn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ni(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function ta(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ra=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function na(e){return ra.includes(e)}const ia={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function sa(e){return e=e.toLowerCase(),ia[e]??e}const oa=["touchstart","touchmove"];function aa(e){return oa.includes(e)}const Lt=Symbol("events"),ks=new Set,Mn=new Set;function la(e,t,r,n={}){function i(s){if(n.capture||$n.call(t,s),!s.cancelBubble)return fn(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yt(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function W(e,t,r){(t[Lt]??(t[Lt]={}))[e]=r}function Zt(e){for(var t=0;t<e.length;t++)ks.add(e[t]);for(var r of Mn)r(e)}let _i=null;function $n(e){var g,h;var t=this,r=t.ownerDocument,n=e.type,i=((g=e.composedPath)==null?void 0:g.call(e))||[],s=i[0]||e.target;_i=e;var o=0,a=_i===e&&e[Lt];if(a){var f=i.indexOf(a);if(f!==-1&&(t===document||t===window)){e[Lt]=t;return}var u=i.indexOf(t);if(u===-1)return;f<=u&&(o=f)}if(s=i[o]||e.target,s!==t){Ds(e,"currentTarget",{configurable:!0,get(){return s||r}});var c=R,_=D;Ue(null),qe(null);try{for(var v,k=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var w=(h=s[Lt])==null?void 0:h[n];w!=null&&(!s.disabled||e.target===s)&&w.call(s,e)}catch(S){v?k.push(S):v=S}if(e.cancelBubble||p===t||p===null)break;s=p}if(v){for(let S of k)queueMicrotask(()=>{throw S});throw v}}finally{e[Lt]=t,delete e.currentTarget,Ue(c),qe(_)}}}var Ti;const mn=((Ti=globalThis==null?void 0:globalThis.window)==null?void 0:Ti.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ua(e){return(mn==null?void 0:mn.createHTML(e))??e}function ys(e){var t=ns("template");return t.innerHTML=ua(e.replaceAll("<!>","<!---->")),t.content}function zr(e,t){var r=D;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var r=(t&vo)!==0,n=(t&ho)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=ys(s?e:"<!>"+e),r||(i=vr(i)));var o=n||Qi?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=vr(o),f=o.lastChild;zr(a,f)}else zr(o,o);return o}}function fa(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=ys(i),a=vr(o);s=vr(a)}var f=s.cloneNode(!0);return zr(f,f),f}}function ca(e,t){return fa(e,t,"svg")}function Te(){var e=document.createDocumentFragment(),t=document.createComment(""),r=wt();return e.append(t,r),zr(t,r),e}function y(e,t){e!==null&&e.before(t)}function H(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function va(e,t){return da(e,t)}const Gr=new Map;function da(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:o=!0,transformError:a}){qo();var f=void 0,u=Go(()=>{var c=r??t.appendChild(wt());Po(c,{pending:()=>{}},k=>{Ze({});var p=ue;s&&(p.c=s),i&&(n.$$events=i),f=e(k,n)||{},Qe()},a);var _=new Set,v=k=>{for(var p=0;p<k.length;p++){var w=k[p];if(!_.has(w)){_.add(w);var g=aa(w);for(const O of[t,document]){var h=Gr.get(O);h===void 0&&(h=new Map,Gr.set(O,h));var S=h.get(w);S===void 0?(O.addEventListener(w,$n,{passive:g}),h.set(w,1)):h.set(w,S+1)}}}};return v(ln(ks)),Mn.add(v),()=>{var g;for(var k of _)for(const h of[t,document]){var p=Gr.get(h),w=p.get(k);--w==0?(h.removeEventListener(k,$n),p.delete(k),p.size===0&&Gr.delete(h)):p.set(k,w)}Mn.delete(v),c!==r&&((g=c.parentNode)==null||g.removeChild(c))}});return ha.set(f,u),f}let ha=new WeakMap;var Ge,at,Pe,qt,xr,Or,an;class ws{constructor(t,r=!0){Be(this,"anchor");L(this,Ge,new Map);L(this,at,new Map);L(this,Pe,new Map);L(this,qt,new Set);L(this,xr,!0);L(this,Or,t=>{if(d(this,Ge).has(t)){var r=d(this,Ge).get(t),n=d(this,at).get(r);if(n)Jn(n),d(this,qt).delete(r);else{var i=d(this,Pe).get(r);i&&(d(this,at).set(r,i.effect),d(this,Pe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of d(this,Ge)){if(d(this,Ge).delete(s),s===t)break;const a=d(this,Pe).get(o);a&&(he(a.effect),d(this,Pe).delete(o))}for(const[s,o]of d(this,at)){if(s===r||d(this,qt).has(s))continue;const a=()=>{if(Array.from(d(this,Ge).values()).includes(s)){var u=document.createDocumentFragment();Xn(o,u),u.append(wt()),d(this,Pe).set(s,{effect:o,fragment:u})}else he(o);d(this,qt).delete(s),d(this,at).delete(s)};d(this,xr)||!n?(d(this,qt).add(s),Ht(o,a,!1)):a()}}});L(this,an,t=>{d(this,Ge).delete(t);const r=Array.from(d(this,Ge).values());for(const[n,i]of d(this,Pe))r.includes(n)||(he(i.effect),d(this,Pe).delete(n))});this.anchor=t,V(this,xr,r)}ensure(t,r){var n=M,i=rs();if(r&&!d(this,at).has(t)&&!d(this,Pe).has(t))if(i){var s=document.createDocumentFragment(),o=wt();s.append(o),d(this,Pe).set(t,{effect:Se(()=>r(o)),fragment:s})}else d(this,at).set(t,Se(()=>r(this.anchor)));if(d(this,Ge).set(n,t),i){for(const[a,f]of d(this,at))a===t?n.unskip_effect(f):n.skip_effect(f);for(const[a,f]of d(this,Pe))a===t?n.unskip_effect(f.effect):n.skip_effect(f.effect);n.oncommit(d(this,Or)),n.ondiscard(d(this,an))}else d(this,Or).call(this,n)}}Ge=new WeakMap,at=new WeakMap,Pe=new WeakMap,qt=new WeakMap,xr=new WeakMap,Or=new WeakMap,an=new WeakMap;function B(e,t,r=!1){var n=new ws(e),i=r?Gt:0;function s(o,a){n.ensure(o,a)}cn(()=>{var o=!1;t((a,f=0)=>{o=!0,s(f,a)}),o||s(-1,null)},i)}function Oe(e,t){return t}function pa(e,t,r){for(var n=[],i=t.length,s,o=t.length,a=0;a<i;a++){let _=t[a];Ht(_,()=>{if(s){if(s.pending.delete(_),s.done.add(_),s.pending.size===0){var v=e.outrogroups;jn(e,ln(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var f=n.length===0&&r!==null;if(f){var u=r,c=u.parentNode;Ho(c),c.append(u),e.items.clear()}jn(e,t,!f)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function jn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const a of o)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=lt;const o=document.createDocumentFragment();Xn(s,o)}else he(t[i],r)}}var gi;function Ce(e,t,r,n,i,s=null){var o=e,a=new Map,f=(t&Oi)!==0;if(f){var u=e;o=u.appendChild(wt())}var c=null,_=Hn(()=>{var O=r();return Ln(O)?O:O==null?[]:ln(O)}),v,k=new Map,p=!0;function w(O){S.effect.f&Fe||(S.pending.delete(O),S.fallback=c,_a(S,v,o,t,n),c!==null&&(v.length===0?c.f&lt?(c.f^=lt,yr(c,null,o)):Jn(c):Ht(c,()=>{c=null})))}function g(O){S.pending.delete(O)}var h=cn(()=>{v=l(_);for(var O=v.length,m=new Set,A=M,$=rs(),N=0;N<O;N+=1){var P=v[N],Y=n(P,N),F=p?null:a.get(Y);F?(F.v&&cr(F.v,P),F.i&&cr(F.i,N),$&&A.unskip_effect(F.e)):(F=ga(a,p?o:gi??(gi=wt()),P,Y,N,i,t,r),p||(F.e.f|=lt),a.set(Y,F)),m.add(Y)}if(O===0&&s&&!c&&(p?c=Se(()=>s(o)):(c=Se(()=>s(gi??(gi=wt()))),c.f|=lt)),O>m.size&&Gs(),!p)if(k.set(A,m),$){for(const[X,ce]of a)m.has(X)||A.skip_effect(ce.e);A.oncommit(w),A.ondiscard(g)}else w(A);l(_)}),S={effect:h,items:a,pending:k,outrogroups:null,fallback:c};p=!1}function br(e){for(;e!==null&&!(e.f&Xe);)e=e.next;return e}function _a(e,t,r,n,i){var F,X,ce,pe,te,$e,Q,be,ct;var s=(n&oo)!==0,o=t.length,a=e.items,f=br(e.effect.first),u,c=null,_,v=[],k=[],p,w,g,h;if(s)for(h=0;h<o;h+=1)p=t[h],w=i(p,h),g=a.get(w).e,g.f&lt||((X=(F=g.nodes)==null?void 0:F.a)==null||X.measure(),(_??(_=new Set)).add(g));for(h=0;h<o;h+=1){if(p=t[h],w=i(p,h),g=a.get(w).e,e.outrogroups!==null)for(const ae of e.outrogroups)ae.pending.delete(g),ae.done.delete(g);if(g.f&xe&&(Jn(g),s&&((pe=(ce=g.nodes)==null?void 0:ce.a)==null||pe.unfix(),(_??(_=new Set)).delete(g))),g.f&lt)if(g.f^=lt,g===f)yr(g,null,r);else{var S=c?c.next:f;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Tt(e,c,g),Tt(e,g,S),yr(g,S,r),c=g,v=[],k=[],f=br(c.next);continue}if(g!==f){if(u!==void 0&&u.has(g)){if(v.length<k.length){var O=k[0],m;c=O.prev;var A=v[0],$=v[v.length-1];for(m=0;m<v.length;m+=1)yr(v[m],O,r);for(m=0;m<k.length;m+=1)u.delete(k[m]);Tt(e,A.prev,$.next),Tt(e,c,A),Tt(e,$,O),f=O,c=$,h-=1,v=[],k=[]}else u.delete(g),yr(g,f,r),Tt(e,g.prev,g.next),Tt(e,g,c===null?e.effect.first:c.next),Tt(e,c,g),c=g;continue}for(v=[],k=[];f!==null&&f!==g;)(u??(u=new Set)).add(f),k.push(f),f=br(f.next);if(f===null)continue}g.f&lt||v.push(g),c=g,f=br(g.next)}if(e.outrogroups!==null){for(const ae of e.outrogroups)ae.pending.size===0&&(jn(e,ln(ae.done)),(te=e.outrogroups)==null||te.delete(ae));e.outrogroups.size===0&&(e.outrogroups=null)}if(f!==null||u!==void 0){var N=[];if(u!==void 0)for(g of u)g.f&xe||N.push(g);for(;f!==null;)!(f.f&xe)&&f!==e.fallback&&N.push(f),f=br(f.next);var P=N.length;if(P>0){var Y=n&Oi&&o===0?r:null;if(s){for(h=0;h<P;h+=1)(Q=($e=N[h].nodes)==null?void 0:$e.a)==null||Q.measure();for(h=0;h<P;h+=1)(ct=(be=N[h].nodes)==null?void 0:be.a)==null||ct.fix()}pa(e,N,Y)}}s&&yt(()=>{var ae,Et;if(_!==void 0)for(g of _)(Et=(ae=g.nodes)==null?void 0:ae.a)==null||Et.apply()})}function ga(e,t,r,n,i,s,o,a){var f=o&io?o&ao?xt(r):Fo(r,!1,!1):null,u=o&so?xt(i):null;return{v:f,i:u,e:Se(()=>(s(t,f??r,u??i,a),()=>{e.delete(n)}))}}function yr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&lt)?t.nodes.start:r;n!==null;){var o=Rr(n);if(s.before(n),n===i)return;n=o}}function Tt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function He(e,t,r,n,i){var a;var s=(a=t.$$slots)==null?void 0:a[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function ba(e,t,r,n,i,s){var o=null,a=e,f=new ws(a,!1);cn(()=>{const u=t()||null;var c=po;if(u===null){f.ensure(null,null);return}return f.ensure(u,_=>{if(u){if(o=ns(u,c),zr(o,o),n){var v=o.appendChild(wt());n(o,v)}D.nodes.end=o,_.before(o)}}),()=>{}},Gt),Yn(()=>{})}function ma(e,t){var r=void 0,n;ls(()=>{r!==(r=t())&&(n&&(he(n),n=null),r&&(n=Se(()=>{Gn(()=>r(e))})))})}function Es(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Es(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ka(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Es(e))&&(n&&(n+=" "),n+=t);return n}function ya(e){return typeof e=="object"?ka(e):e??""}const bi=[...` 	
\r\f \v\uFEFF`];function wa(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||bi.includes(n[o-1]))&&(a===n.length||bi.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function mi(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function kn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ea(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,f=[];n&&f.push(...Object.keys(n).map(kn)),i&&f.push(...Object.keys(i).map(kn));var u=0,c=-1;const w=e.length;for(var _=0;_<w;_++){var v=e[_];if(a?v==="/"&&e[_-1]==="*"&&(a=!1):s?s===v&&(s=!1):v==="/"&&e[_+1]==="*"?a=!0:v==='"'||v==="'"?s=v:v==="("?o++:v===")"&&o--,!a&&s===!1&&o===0){if(v===":"&&c===-1)c=_;else if(v===";"||_===w-1){if(c!==-1){var k=kn(e.substring(u,c).trim());if(!f.includes(k)){v!==";"&&_++;var p=e.substring(u,_).trim();r+=" "+p+";"}}u=_+1,c=-1}}}}return n&&(r+=mi(n)),i&&(r+=mi(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Wt(e,t,r,n,i,s){var o=e.__className;if(o!==r||o===void 0){var a=wa(r,n,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e.__className=r}else if(s&&i!==s)for(var f in s){var u=!!s[f];(i==null||u!==!!i[f])&&e.classList.toggle(f,u)}return s}function yn(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Sa(e,t,r,n){var i=e.__style;if(i!==t){var s=Ea(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(yn(e,r==null?void 0:r[0],n[0]),yn(e,r==null?void 0:r[1],n[1],"important")):yn(e,r,n));return n}function Nr(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Ln(t))return go();for(var n of e.options)n.selected=t.includes(Sr(n));return}for(n of e.options){var i=Sr(n);if(Uo(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Zn(e){var t=new MutationObserver(()=>{Nr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Yn(()=>{t.disconnect()})}function Ta(e,t,r=t){var n=new WeakSet,i=!0;is(e,"change",s=>{var o=s?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),Sr);else{var f=e.querySelector(o)??e.querySelector("option:not([disabled])");a=f&&Sr(f)}r(a),e.__value=a,M!==null&&n.add(M)}),Gn(()=>{var s=t();if(e===document.activeElement){var o=M;if(n.has(o))return}if(Nr(e,s,i),i&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=Sr(a),r(s))}e.__value=s,i=!1}),Zn(e)}function Sr(e){return"__value"in e?e.__value:e.value}const mr=Symbol("class"),kr=Symbol("style"),Ss=Symbol("is custom element"),Ts=Symbol("is html"),za=xi?"option":"OPTION",Na=xi?"select":"SELECT";function Aa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Je(e,t,r,n){var i=zs(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ws]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ns(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ia(e,t,r,n,i=!1,s=!1){var o=zs(e),a=o[Ss],f=!o[Ts],u=t||{},c=e.nodeName===za;for(var _ in t)_ in r||(r[_]=null);r.class?r.class=ya(r.class):r[mr]&&(r.class=null),r[kr]&&(r.style??(r.style=null));var v=Ns(e);for(const m in r){let A=r[m];if(c&&m==="value"&&A==null){e.value=e.__value="",u[m]=A;continue}if(m==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";Wt(e,k,A,n,t==null?void 0:t[mr],r[mr]),u[m]=A,u[mr]=r[mr];continue}if(m==="style"){Sa(e,A,t==null?void 0:t[kr],r[kr]),u[m]=A,u[kr]=r[kr];continue}var p=u[m];if(!(A===p&&!(A===void 0&&e.hasAttribute(m)))){u[m]=A;var w=m[0]+m[1];if(w!=="$$")if(w==="on"){const $={},N="$$"+m;let P=m.slice(2);var g=na(P);if(ta(P)&&(P=P.slice(0,-7),$.capture=!0),!g&&p){if(A!=null)continue;e.removeEventListener(P,u[N],$),u[N]=null}if(g)W(P,e,A),Zt([P]);else if(A!=null){let Y=function(F){u[m].call(this,F)};var O=Y;u[N]=la(P,e,Y,$)}}else if(m==="style")Je(e,m,A);else if(m==="autofocus")un(e,!!A);else if(!a&&(m==="__value"||m==="value"&&A!=null))e.value=e.__value=A;else if(m==="selected"&&c)Aa(e,A);else{var h=m;f||(h=sa(h));var S=h==="defaultValue"||h==="defaultChecked";if(A==null&&!a&&!S)if(o[m]=null,h==="value"||h==="checked"){let $=e;const N=t===void 0;if(h==="value"){let P=$.defaultValue;$.removeAttribute(h),$.defaultValue=P,$.value=$.__value=N?P:null}else{let P=$.defaultChecked;$.removeAttribute(h),$.defaultChecked=P,$.checked=N?P:!1}}else e.removeAttribute(m);else S||v.includes(h)&&(a||typeof A!="string")?(e[h]=A,h in o&&(o[h]=le)):typeof A!="function"&&Je(e,h,A)}}}return u}function ki(e,t,r=[],n=[],i=[],s,o=!1,a=!1){Yi(i,r,n,f=>{var u=void 0,c={},_=e.nodeName===Na,v=!1;if(ls(()=>{var p=t(...f.map(l)),w=Ia(e,u,p,s,o,a);v&&_&&"value"in p&&Nr(e,p.value);for(let h of Object.getOwnPropertySymbols(c))p[h]||he(c[h]);for(let h of Object.getOwnPropertySymbols(p)){var g=p[h];h.description===_o&&(!u||g!==u[h])&&(c[h]&&he(c[h]),c[h]=Se(()=>ma(e,()=>g))),w[h]=g}u=w}),_){var k=e;Gn(()=>{Nr(k,u.value,!0),Zn(k)})}v=!0})}function zs(e){return e.__attributes??(e.__attributes={[Ss]:e.nodeName.includes("-"),[Ts]:e.namespaceURI===Mi})}var yi=new Map;function Ns(e){var t=e.getAttribute("is")||e.nodeName,r=yi.get(t);if(r)return r;yi.set(t,r=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=Ni(i);for(var o in n)n[o].set&&r.push(o);i=Dn(i)}return r}function Qn(e,t,r=t){var n=new WeakSet;is(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=wn(e)?En(s):s,r(s),M!==null&&n.add(M),await ea(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,f=e.value.length;if(e.value=s??"",a!==null){var u=e.value.length;o===a&&a===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=o,e.selectionEnd=Math.min(a,u))}}}),hr(t)==null&&e.value&&(r(wn(e)?En(e.value):e.value),M!==null&&n.add(M)),as(()=>{var i=t();if(e===document.activeElement){var s=M;if(n.has(s))return}wn(e)&&i===En(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function wn(e){var t=e.type;return t==="number"||t==="range"}function En(e){return e===""?null:+e}function Pa(e=!1){const t=ue,r=t.l.u;if(!r)return;let n=()=>$t(t.s);if(e){let i=0,s={};const o=jr(()=>{let a=!1;const f=t.s;for(const u in f)f[u]!==s[u]&&(s[u]=f[u],a=!0);return a&&i++,i});n=()=>l(o)}r.b.length&&Yo(()=>{wi(t,n),Sn(r.b)}),rn(()=>{const i=hr(()=>r.m.map(qs));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&rn(()=>{wi(t,n),Sn(r.a)})}function wi(e,t){if(e.l.s)for(const r of e.l.s)l(r);t()}const xa={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=D;try{qe(e.parent_effect),e.special[t]=pt({get[t](){return e.props[t]}},t,Ci)}finally{qe(n)}}return e.special[t](r),fi(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),fi(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Me(e,t){return new Proxy({props:e,exclude:t,special:{},version:xt(0),parent_effect:D},xa)}const Oa={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];gr(i)&&(i=i());const s=At(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=At(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===kt||t===Pi)return!1;for(let r of e.props)if(gr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(gr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function tt(...e){return new Proxy({props:e},Oa)}function pt(e,t,r,n){var O;var i=!Mr||(r&uo)!==0,s=(r&fo)!==0,o=(r&co)!==0,a=n,f=!0,u=()=>(f&&(f=!1,a=o?hr(n):n),a);let c;if(s){var _=kt in e||Pi in e;c=((O=At(e,t))==null?void 0:O.set)??(_&&t in e?m=>e[t]=m:void 0)}var v,k=!1;s?[v,k]=So(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=u(),c&&(i&&Qs(),c(v)));var p;if(i?p=()=>{var m=e[t];return m===void 0?u():(f=!0,m)}:p=()=>{var m=e[t];return m!==void 0&&(a=void 0),m===void 0?a:m},i&&!(r&Ci))return p;if(c){var w=e.$$legacy;return function(m,A){return arguments.length>0?((!i||!A||w||k)&&c(A?p():m),m):p()}}var g=!1,h=(r&lo?jr:Hn)(()=>(g=!1,p()));s&&l(h);var S=D;return function(m,A){if(arguments.length>0){const $=A?l(h):i&&s?ut(m):m;return T(h,$),g=!0,a!==void 0&&(a=$),m}return Ot&&g||S.f&Fe?h.v:l(h)}}const Ca="5";var zi;typeof window<"u"&&((zi=window.__svelte??(window.__svelte={})).v??(zi.v=new Set)).add(Ca);var Ma=I('<p class="err svelte-o2dhro"> </p>'),$a=I('<div class="screen svelte-o2dhro"><div class="hero svelte-o2dhro"><div class="logo svelte-o2dhro">🍳</div> <h1 class="svelte-o2dhro">Recipeasy</h1> <p class="svelte-o2dhro">Save recipes from TikTok videos into your personal cookbooks</p></div> <div class="card svelte-o2dhro"><h2 class="svelte-o2dhro">Welcome back</h2> <p class="sub svelte-o2dhro">Enter your user ID to continue</p> <div class="field svelte-o2dhro"><input class="input" type="text" placeholder="Your user ID" autocomplete="off" autocapitalize="none"/></div> <!> <button class="btn-primary"> </button></div></div>');function ja(e,t){Ze(t,!0);let r=q(""),n=q(null),i=q(!1);async function s(){if(l(r).trim()){T(i,!0),T(n,null);try{const p=await fetch("/api/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l(r).trim()})}),w=await p.json();if(!p.ok)throw new Error(w.error);t.onLogin(w.userId)}catch(p){T(n,p.message,!0)}finally{T(i,!1)}}}var o=$a(),a=E(b(o),2),f=E(b(a),4),u=b(f);un(u,!0);var c=E(f,2);{var _=p=>{var w=Ma(),g=b(w);j(()=>H(g,l(n))),y(p,w)};B(c,p=>{l(n)&&p(_)})}var v=E(c,2),k=b(v);j(p=>{u.disabled=l(i),v.disabled=p,H(k,l(i)?"Signing in…":"Sign in")},[()=>l(i)||!l(r).trim()]),W("keydown",u,p=>p.key==="Enter"&&s()),Qn(u,()=>l(r),p=>T(r,p)),W("click",v,s),y(e,o),Qe()}Zt(["keydown","click"]);yo();/**
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
 */const Ra={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Ei=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Da=ca("<svg><!><!></svg>");function rt(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]),n=Me(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ze(t,!1);let i=pt(t,"name",8,void 0),s=pt(t,"color",8,"currentColor"),o=pt(t,"size",8,24),a=pt(t,"strokeWidth",8,2),f=pt(t,"absoluteStrokeWidth",8,!1),u=pt(t,"iconNode",24,()=>[]);Pa();var c=Da();ki(c,(k,p,w)=>({...Ra,...k,...n,width:o(),height:o(),stroke:s(),"stroke-width":p,class:w}),[()=>La(n)?void 0:{"aria-hidden":"true"},()=>($t(f()),$t(a()),$t(o()),hr(()=>f()?Number(a())*24/Number(o()):a())),()=>($t(Ei),$t(i()),$t(r),hr(()=>Ei("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var _=b(c);Ce(_,1,u,Oe,(k,p)=>{var w=Le(()=>Hs(l(p),2));let g=()=>l(w)[0],h=()=>l(w)[1];var S=Te(),O=Z(S);ba(O,g,!0,(m,A)=>{ki(m,()=>({...h()}))}),y(k,S)});var v=E(_);He(v,t,"default",{}),y(e,c),Qe()}function nn(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];rt(e,tt({name:"arrow-left"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Fa(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];rt(e,tt({name:"book-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Va(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];rt(e,tt({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Ua(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];rt(e,tt({name:"clock"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function qa(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];rt(e,tt({name:"external-link"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Ha(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];rt(e,tt({name:"flame"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Ba(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];rt(e,tt({name:"house"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Wa(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];rt(e,tt({name:"link"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Ya(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];rt(e,tt({name:"log-out"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function ei(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];rt(e,tt({name:"plus"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}function Ga(e,t){const r=Me(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];rt(e,tt({name:"users"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Te(),a=Z(o);He(a,t,"default",{}),y(i,o)},$$slots:{default:!0}}))}var Ka=I('<nav class="bottom-nav svelte-6pm7l3"><button><!> <span class="svelte-6pm7l3">Cookbooks</span></button> <button class="nav-fab svelte-6pm7l3"><!></button> <button><!> <span class="svelte-6pm7l3">Add Recipe</span></button></nav>');function vn(e,t){Ze(t,!0);const r=Le(()=>t.route.page==="cookbooks");var n=Ka(),i=b(n);let s;var o=b(i);{let v=Le(()=>l(r)?2.5:1.8);Ba(o,{size:22,get strokeWidth(){return l(v)}})}var a=E(i,2),f=b(a);ei(f,{size:26,strokeWidth:2.5});var u=E(a,2);let c;var _=b(u);{let v=Le(()=>t.route.page==="analyze"?2.5:1.8);Fa(_,{size:22,get strokeWidth(){return l(v)}})}j(()=>{s=Wt(i,1,"nav-item svelte-6pm7l3",null,s,{active:l(r)}),c=Wt(u,1,"nav-item svelte-6pm7l3",null,c,{active:t.route.page==="analyze"})}),W("click",i,()=>t.onNavigate("cookbooks")),W("click",a,()=>t.onNavigate("analyze")),W("click",u,()=>t.onNavigate("analyze")),y(e,n),Qe()}Zt(["click"]);var Ja=I('<div class="create-box svelte-fzpb15"><input class="input" type="text" placeholder="Cookbook name…"/> <div class="create-actions svelte-fzpb15"><button class="btn-ghost svelte-fzpb15">Cancel</button> <button class="btn-primary" style="width:auto;padding:13px 24px"> </button></div></div>'),Xa=I('<button class="new-cookbook-btn svelte-fzpb15"><!> New Cookbook</button>'),Za=I('<div class="skeleton-card svelte-fzpb15"><div class="skeleton-img shimmer svelte-fzpb15"></div> <div class="skeleton-info svelte-fzpb15"><div class="skeleton-line shimmer svelte-fzpb15" style="width:70%"></div> <div class="skeleton-line shimmer svelte-fzpb15" style="width:40%;margin-top:6px"></div></div></div>'),Qa=I('<div class="grid svelte-fzpb15"></div>'),el=I('<div class="empty svelte-fzpb15"><div class="empty-icon svelte-fzpb15">📖</div> <h2 class="svelte-fzpb15">No cookbooks yet</h2> <p class="svelte-fzpb15">Create a cookbook to start saving TikTok recipes</p></div>'),tl=I('<img class="svelte-fzpb15"/>'),rl=I('<div class="card-img-placeholder svelte-fzpb15">🍽️</div>'),nl=I('<button class="card-delete svelte-fzpb15">✕</button>'),il=I('<div class="card svelte-fzpb15" role="button" tabindex="0"><div class="card-img svelte-fzpb15"><!> <div class="card-gradient svelte-fzpb15"></div> <!></div> <div class="card-info svelte-fzpb15"><span class="card-name svelte-fzpb15"> </span> <span class="card-count svelte-fzpb15"> </span></div></div>'),sl=I('<div class="grid svelte-fzpb15"></div>'),ol=I('<div class="page-with-nav"><div class="header svelte-fzpb15"><div><p class="greeting svelte-fzpb15">Hello 👋</p> <h1 class="svelte-fzpb15">My Cookbooks</h1></div> <button class="icon-btn" title="Sign out"><!></button></div> <!> <!></div> <!>',1);function al(e,t){Ze(t,!0);let r=q(null),n=q(""),i=q(!1),s=q(!1);async function o(){const[N]=await Promise.all([fetch("/api/cookbooks",{credentials:"include"}),new Promise(P=>setTimeout(P,400))]);T(r,await N.json(),!0)}async function a(){if(l(n).trim()){T(i,!0);try{const P=await(await fetch("/api/cookbooks",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l(n).trim()})})).json();T(r,[...l(r),P],!0),T(n,""),T(s,!1)}finally{T(i,!1)}}}async function f(N){confirm("Delete this cookbook and all its recipes?")&&(await fetch(`/api/cookbooks/${N}`,{method:"DELETE",credentials:"include"}),T(r,l(r).filter(P=>P.id!==N),!0))}async function u(){await fetch("/api/logout",{method:"POST",credentials:"include"}),t.onLogout()}o();var c=ol(),_=Z(c),v=b(_),k=E(b(v),2),p=b(k);Ya(p,{size:18});var w=E(v,2);{var g=N=>{var P=Ja(),Y=b(P);un(Y,!0);var F=E(Y,2),X=b(F),ce=E(X,2),pe=b(ce);j(te=>{ce.disabled=te,H(pe,l(i)?"…":"Create")},[()=>l(i)||!l(n).trim()]),W("keydown",Y,te=>te.key==="Enter"&&a()),Qn(Y,()=>l(n),te=>T(n,te)),W("click",X,()=>{T(s,!1),T(n,"")}),W("click",ce,a),y(N,P)},h=N=>{var P=Xa(),Y=b(P);ei(Y,{size:18}),W("click",P,()=>T(s,!0)),y(N,P)};B(w,N=>{l(s)?N(g):N(h,-1)})}var S=E(w,2);{var O=N=>{var P=Qa();Ce(P,20,()=>[1,2,3,4],Oe,(Y,F)=>{var X=Za();y(Y,X)}),y(N,P)},m=N=>{var P=el();y(N,P)},A=N=>{var P=sl();Ce(P,21,()=>l(r),Oe,(Y,F)=>{var X=il(),ce=b(X),pe=b(ce);{var te=ve=>{var ze=tl();j(()=>{Je(ze,"src",l(F).cover_url),Je(ze,"alt",l(F).name)}),y(ve,ze)},$e=ve=>{var ze=rl();y(ve,ze)};B(pe,ve=>{l(F).cover_url?ve(te):ve($e,-1)})}var Q=E(pe,4);{var be=ve=>{var ze=nl();W("click",ze,tr=>{tr.stopPropagation(),f(l(F).id)}),y(ve,ze)};B(Q,ve=>{l(F).is_default||ve(be)})}var ct=E(ce,2),ae=b(ct),Et=b(ae),Qt=E(ae,2),er=b(Qt);j(()=>{H(Et,l(F).name),H(er,`${l(F).recipe_count??""} recipe${l(F).recipe_count!==1?"s":""}`)}),W("click",X,()=>t.onNavigate("cookbook",{cookbookId:l(F).id})),W("keydown",X,ve=>ve.key==="Enter"&&t.onNavigate("cookbook",{cookbookId:l(F).id})),y(Y,X)}),y(N,P)};B(S,N=>{l(r)===null?N(O):l(r).length===0?N(m,1):N(A,-1)})}var $=E(_,2);vn($,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),W("click",k,u),y(e,c),Qe()}Zt(["click","keydown"]);var ll=I('<div class="skeleton-card svelte-1fn8ljf"><div class="skeleton-img shimmer svelte-1fn8ljf"></div></div>'),ul=I('<div class="grid svelte-1fn8ljf"></div>'),fl=I('<div class="empty svelte-1fn8ljf"><div class="empty-icon svelte-1fn8ljf">🎬</div> <h2 class="svelte-1fn8ljf">No recipes yet</h2> <p class="svelte-1fn8ljf">Paste a TikTok cooking video link to add your first recipe</p> <button class="btn-primary" style="margin-top:24px">+ Add first recipe</button></div>'),cl=I('<img class="svelte-1fn8ljf"/>'),vl=I('<div class="card-placeholder svelte-1fn8ljf">🍴</div>'),dl=I('<div class="card svelte-1fn8ljf" role="button" tabindex="0"><div class="card-img svelte-1fn8ljf"><!> <div class="card-gradient svelte-1fn8ljf"></div> <div class="card-title-overlay svelte-1fn8ljf"> </div> <button class="card-delete svelte-1fn8ljf">✕</button></div></div>'),hl=I('<div class="grid svelte-1fn8ljf"></div>'),pl=I('<div class="page-with-nav"><div class="top-bar svelte-1fn8ljf"><button class="icon-btn"><!></button> <h1> </h1> <button class="icon-btn accent-btn svelte-1fn8ljf"><!></button></div> <!></div> <!>',1);function _l(e,t){Ze(t,!0);let r=q(null),n=q(null);async function i(){const[m,A]=await Promise.all([fetch("/api/cookbooks",{credentials:"include"}),fetch(`/api/cookbooks/${t.cookbookId}/recipes`,{credentials:"include"}),new Promise(N=>setTimeout(N,400))]),$=await m.json();T(r,$.find(N=>N.id===t.cookbookId),!0),T(n,await A.json(),!0)}async function s(m){confirm("Remove this recipe?")&&(await fetch(`/api/recipes/${m}`,{method:"DELETE",credentials:"include"}),T(n,l(n).filter(A=>A.id!==m),!0))}i();var o=pl(),a=Z(o),f=b(a),u=b(f),c=b(u);nn(c,{size:20});var _=E(u,2),v=b(_),k=E(_,2),p=b(k);ei(p,{size:20});var w=E(f,2);{var g=m=>{var A=ul();Ce(A,20,()=>[1,2,3,4],Oe,($,N)=>{var P=ll();y($,P)}),y(m,A)},h=m=>{var A=fl(),$=E(b(A),6);W("click",$,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),y(m,A)},S=m=>{var A=hl();Ce(A,21,()=>l(n),Oe,($,N)=>{var P=dl(),Y=b(P),F=b(Y);{var X=Q=>{var be=cl();j(()=>{Je(be,"src",l(N).thumbnail_url),Je(be,"alt",l(N).title)}),y(Q,be)},ce=Q=>{var be=vl();y(Q,be)};B(F,Q=>{l(N).thumbnail_url?Q(X):Q(ce,-1)})}var pe=E(F,4),te=b(pe),$e=E(pe,2);j(()=>H(te,l(N).title)),W("click",P,()=>t.onNavigate("recipe",{recipeId:l(N).id,cookbookId:t.cookbookId})),W("keydown",P,Q=>Q.key==="Enter"&&t.onNavigate("recipe",{recipeId:l(N).id,cookbookId:t.cookbookId})),W("click",$e,Q=>{Q.stopPropagation(),s(l(N).id)}),y($,P)}),y(m,A)};B(w,m=>{l(n)===null?m(g):l(n).length===0?m(h,1):m(S,-1)})}var O=E(a,2);vn(O,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),j(()=>{var m;return H(v,((m=l(r))==null?void 0:m.name)??"")}),W("click",u,()=>t.onNavigate("cookbooks")),W("click",k,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),y(e,o),Qe()}Zt(["click","keydown"]);var gl=I("<span> </span>"),bl=I('<div class="group-label svelte-1cbd1dz"><!> </div>'),ml=I('<li class="svelte-1cbd1dz"> </li>'),kl=I("<!> <ul></ul>",1),yl=I('<div class="ingredients svelte-1cbd1dz"></div>');function As(e,t){Ze(t,!0);const r=Le(()=>t.recipe.ingredientGroups??(t.recipe.ingredients?[{group:null,emoji:null,items:t.recipe.ingredients}]:[]));function n(s){return[s.amount,s.unit,s.item].filter(Boolean).join(" ")}var i=yl();Ce(i,21,()=>l(r),Oe,(s,o)=>{var a=kl(),f=Z(a);{var u=v=>{var k=bl(),p=b(k);{var w=h=>{var S=gl(),O=b(S);j(()=>H(O,l(o).emoji)),y(h,S)};B(p,h=>{l(o).emoji&&h(w)})}var g=E(p);j(()=>H(g,` ${l(o).group??""}`)),y(v,k)};B(f,v=>{l(o).group&&v(u)})}var c=E(f,2);let _;Ce(c,21,()=>l(o).items,Oe,(v,k)=>{var p=ml(),w=b(p);j(g=>H(w,g),[()=>n(l(k))]),y(v,p)}),j(()=>_=Wt(c,1,"svelte-1cbd1dz",null,_,{indented:!!l(o).group})),y(s,a)}),y(e,i),Qe()}var wl=I('<div class="top-bar"><button class="icon-btn"><!></button></div> <div class="error-banner"> </div>',1),El=I('<div class="loading svelte-t09i08"><div class="spinner svelte-t09i08"></div></div>'),Sl=I('<img class="hero-img svelte-t09i08"/>'),Tl=I('<div class="hero-placeholder svelte-t09i08">🍳</div>'),zl=I('<p class="description svelte-t09i08"> </p>'),Nl=I('<span class="pill"><!> </span>'),Al=I('<span class="pill"><!> </span>'),Il=I('<span class="pill"><!> </span>'),Pl=I('<a class="source-link svelte-t09i08" target="_blank" rel="noopener"><!> View original TikTok</a>'),xl=I("<option> </option>"),Ol=I('<span class="move-ok svelte-t09i08">Moved ✓</span>'),Cl=I('<div class="move-row svelte-t09i08"><span class="move-label svelte-t09i08">📁</span> <select class="move-select svelte-t09i08"></select> <!></div>'),Ml=I('<li class="step svelte-t09i08"><div class="step-num svelte-t09i08"></div> <p class="svelte-t09i08"> </p></li>'),$l=I('<li class="svelte-t09i08"> </li>'),jl=I('<div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Tips</h2> <ul class="tips svelte-t09i08"></ul></section>',1),Rl=I('<div class="hero svelte-t09i08"><!> <div class="hero-gradient svelte-t09i08"></div> <button class="back-btn icon-btn svelte-t09i08"><!></button></div> <div class="content svelte-t09i08"><h1 class="svelte-t09i08"> </h1> <!> <div class="pills svelte-t09i08"><!> <!> <!></div> <!> <!> <div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Ingredients</h2> <!></section> <div class="divider svelte-t09i08"></div> <section><h2 class="section-title svelte-t09i08">Instructions</h2> <ol class="steps svelte-t09i08"></ol></section> <!></div>',1),Ll=I('<div class="page-with-nav"><!></div> <!>',1);function Dl(e,t){Ze(t,!0);let r=q(null),n=q(null),i=q(ut([])),s=q(ut(t.cookbookId)),o=q(!1),a=q(!1);async function f(){try{const[h,S]=await Promise.all([fetch(`/api/recipes/${t.recipeId}`,{credentials:"include"}),fetch("/api/cookbooks",{credentials:"include"})]);if(!h.ok)throw new Error("Recipe not found");T(r,await h.json(),!0),T(i,await S.json(),!0),T(s,l(r).cookbook_id,!0)}catch(h){T(n,h.message,!0)}}async function u(h){if(!(h===l(s)||l(o))){T(o,!0),T(a,!1);try{if(!(await fetch(`/api/recipes/${t.recipeId}/move`,{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({cookbookId:h})})).ok)throw new Error("Move failed");T(s,h,!0),T(a,!0),setTimeout(()=>{T(a,!1)},2e3)}catch{}T(o,!1)}}f();var c=Ll(),_=Z(c),v=b(_);{var k=h=>{var S=wl(),O=Z(S),m=b(O),A=b(m);nn(A,{size:20});var $=E(O,2),N=b($);j(()=>H(N,l(n))),W("click",m,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),y(h,S)},p=h=>{var S=El();y(h,S)},w=h=>{const S=Le(()=>l(r).recipe_json);var O=Rl(),m=Z(O),A=b(m);{var $=z=>{var x=Sl();j(()=>{Je(x,"src",l(r).thumbnail_url),Je(x,"alt",l(S).title)}),y(z,x)},N=z=>{var x=Tl();y(z,x)};B(A,z=>{l(r).thumbnail_url?z($):z(N,-1)})}var P=E(A,4),Y=b(P);nn(Y,{size:20});var F=E(m,2),X=b(F),ce=b(X),pe=E(X,2);{var te=z=>{var x=zl(),U=b(x);j(()=>H(U,l(S).description)),y(z,x)};B(pe,z=>{l(S).description&&z(te)})}var $e=E(pe,2),Q=b($e);{var be=z=>{var x=Nl(),U=b(x);Ga(U,{size:13});var ee=E(U);j(()=>H(ee,` ${l(S).servings??""}`)),y(z,x)};B(Q,z=>{l(S).servings&&z(be)})}var ct=E(Q,2);{var ae=z=>{var x=Al(),U=b(x);Ua(U,{size:13});var ee=E(U);j(()=>H(ee,` Prep ${l(S).prepTime??""}`)),y(z,x)};B(ct,z=>{l(S).prepTime&&z(ae)})}var Et=E(ct,2);{var Qt=z=>{var x=Il(),U=b(x);Ha(U,{size:13});var ee=E(U);j(()=>H(ee,` Cook ${l(S).cookTime??""}`)),y(z,x)};B(Et,z=>{l(S).cookTime&&z(Qt)})}var er=E($e,2);{var ve=z=>{var x=Pl(),U=b(x);qa(U,{size:13}),j(()=>Je(x,"href",l(r).source_url)),y(z,x)};B(er,z=>{l(r).source_url&&z(ve)})}var ze=E(er,2);{var tr=z=>{var x=Cl(),U=E(b(x),2);Ce(U,21,()=>l(i),Oe,(ie,_e)=>{var vt=xl(),rr=b(vt),Mt={};j(()=>{H(rr,l(_e).name),Mt!==(Mt=l(_e).id)&&(vt.value=(vt.__value=l(_e).id)??"")}),y(ie,vt)});var ee;Zn(U);var me=E(U,2);{var ke=ie=>{var _e=Ol();y(ie,_e)};B(me,ie=>{l(a)&&ie(ke)})}j(()=>{U.disabled=l(o),ee!==(ee=l(s))&&(U.value=(U.__value=l(s))??"",Nr(U,l(s)))}),W("change",U,ie=>u(parseInt(ie.target.value))),y(z,x)};B(ze,z=>{l(i).length>1&&z(tr)})}var Dr=E(ze,4),dn=E(b(Dr),2);As(dn,{get recipe(){return l(S)}});var Fr=E(Dr,4),Vr=E(b(Fr),2);Ce(Vr,21,()=>l(S).instructions,Oe,(z,x,U)=>{var ee=Ml(),me=b(ee);me.textContent=U+1;var ke=E(me,2),ie=b(ke);j(_e=>H(ie,_e),[()=>l(x).replace(/^Step \d+:\s*/i,"")]),y(z,ee)});var hn=E(Fr,2);{var C=z=>{var x=jl(),U=E(Z(x),2),ee=E(b(U),2);Ce(ee,21,()=>l(S).tips,Oe,(me,ke)=>{var ie=$l(),_e=b(ie);j(()=>H(_e,`💡 ${l(ke)??""}`)),y(me,ie)}),y(z,x)};B(hn,z=>{var x;(x=l(S).tips)!=null&&x.length&&z(C)})}j(()=>H(ce,l(S).title)),W("click",P,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),y(h,O)};B(v,h=>{l(n)?h(k):l(r)?h(w,-1):h(p,1)})}var g=E(_,2);vn(g,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),y(e,c),Qe()}Zt(["click","change"]);var Fl=I('<div class="toast svelte-1w29e1y"> </div>');function Vl(e,t){Ze(t,!0);let r=pt(t,"message",3,""),n=pt(t,"show",15,!1);rn(()=>{if(n()){const a=setTimeout(()=>{n(!1)},2500);return()=>clearTimeout(a)}});var i=Te(),s=Z(i);{var o=a=>{var f=Fl(),u=b(f);j(()=>H(u,r())),y(a,f)};B(s,a=>{n()&&a(o)})}y(e,i),Qe()}var Ul=I('<p class="hint svelte-shp5yz">Please enter a valid TikTok URL</p>'),ql=I('<div class="step-spinner svelte-shp5yz"></div>'),Hl=I("<div><div><!></div> <span> </span> <!></div>"),Bl=I('<div class="progress-card svelte-shp5yz"></div>'),Wl=I('<div class="error-banner"> </div>'),Yl=I('<div class="duplicate-card svelte-shp5yz"><p>⚠️ Already saved as <strong> </strong> in <em> </em></p> <button class="btn-primary" style="margin-top:12px">View saved recipe</button></div>'),Gl=I('<img class="result-thumb svelte-shp5yz"/>'),Kl=I('<p class="result-desc svelte-shp5yz"> </p>'),Jl=I('<span class="pill"> </span>'),Xl=I('<span class="pill"> </span>'),Zl=I('<span class="pill"> </span>'),Ql=I('<li class="svelte-shp5yz"><div class="step-num-sm svelte-shp5yz"></div> <p class="svelte-shp5yz"> </p></li>'),eu=I("<option> </option>"),tu=I('<div class="result-card svelte-shp5yz"><!> <div class="result-content svelte-shp5yz"><h2 class="svelte-shp5yz"> </h2> <!> <div class="pills" style="margin:10px 0"><!> <!> <!></div> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Ingredients</h3> <!> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Instructions</h3> <ol class="result-steps svelte-shp5yz"></ol> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <div class="cookbook-row svelte-shp5yz"><span class="cookbook-label svelte-shp5yz">📁 Save to</span> <select class="cookbook-select svelte-shp5yz"></select></div> <div class="result-actions svelte-shp5yz"><button class="btn-primary save-btn svelte-shp5yz"> </button> <button class="btn-ghost">Discard</button></div></div></div>'),ru=I('<div class="page-with-nav"><div class="top-bar svelte-shp5yz"><button class="icon-btn"><!></button> <h1>Add Recipe</h1></div> <div class="body svelte-shp5yz"><div class="input-card svelte-shp5yz"><div class="input-label svelte-shp5yz"><!> TikTok URL</div> <div class="input-row"><input type="url" inputmode="url" placeholder="https://www.tiktok.com/…"/></div> <!> <button class="btn-primary"> </button></div> <!> <!> <!> <!></div></div> <!> <!>',1);function nu(e,t){Ze(t,!0);let r=q(""),n=q(null),i=q(null),s=q(null),o=q(!1),a=q(null),f=q(!1),u=q(ut([])),c=q(null);const _=["downloading","extracting","analyzing"],v={downloading:"Downloading video",extracting:"Extracting frames",analyzing:"Analyzing with Claude"};async function k(){try{const C=await fetch("/api/cookbooks",{credentials:"include"});T(u,await C.json(),!0);const z=l(u).find(x=>x.is_default);z&&T(c,z.id,!0)}catch{}}k();function p(C){try{const{hostname:z}=new URL(C.trim());return["tiktok.com","www.tiktok.com","vm.tiktok.com","m.tiktok.com"].includes(z)}catch{return!1}}const w=Le(()=>p(l(r))),g=Le(()=>l(n)&&l(n)!=="done"&&l(n)!=="duplicate"&&l(n)!=="error");function h(){if(!l(w))return;T(n,"downloading"),T(i,null),T(s,null),T(a,null);const C=new EventSource(`/api/analyze?url=${encodeURIComponent(l(r))}`);C.onmessage=z=>{const x=JSON.parse(z.data);x.step==="done"?(T(i,x,!0),T(n,"done"),C.close()):x.step==="duplicate"?(T(s,x,!0),T(n,"duplicate"),C.close()):x.step==="error"?(T(a,x.error,!0),T(n,"error"),C.close()):T(n,x.step,!0)},C.onerror=()=>{T(a,"Connection lost. Please try again."),T(n,"error"),C.close()}}async function S(){if(!(!l(i)||!l(c))){T(o,!0);try{const C=await fetch(`/api/cookbooks/${l(c)}/recipes`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:l(i).recipe.title,sourceUrl:l(i).meta.sourceUrl,thumbnailUrl:l(i).meta.thumbnail,recipeJson:l(i).recipe})});if(!C.ok)throw new Error("Failed to save");const z=await C.json();T(f,!0),setTimeout(()=>t.onNavigate("recipe",{recipeId:z.id,cookbookId:l(c)}),1200)}catch(C){T(a,C.message,!0),T(o,!1)}}}function O(){T(i,null),T(a,null),T(n,null),T(r,""),T(s,null)}var m=ru(),A=Z(m),$=b(A),N=b($),P=b(N);nn(P,{size:20});var Y=E($,2),F=b(Y),X=b(F),ce=b(X);Wa(ce,{size:14});var pe=E(X,2),te=b(pe);let $e;un(te,!0);var Q=E(pe,2);{var be=C=>{var z=Ul();y(C,z)},ct=Le(()=>l(r).trim()&&!l(w));B(Q,C=>{l(ct)&&C(be)})}var ae=E(Q,2),Et=b(ae),Qt=E(F,2);{var er=C=>{var z=Bl();Ce(z,21,()=>_,Oe,(x,U)=>{const ee=Le(()=>_.indexOf(l(n))>_.indexOf(l(U))),me=Le(()=>l(n)===l(U));var ke=Hl();let ie;var _e=b(ke);let vt;var rr=b(_e);{var Mt=dt=>{Va(dt,{size:16})};B(rr,dt=>{l(ee)&&dt(Mt)})}var Ur=E(_e,2),qr=b(Ur),pn=E(Ur,2);{var _n=dt=>{var Hr=ql();y(dt,Hr)};B(pn,dt=>{l(me)&&dt(_n)})}j(()=>{ie=Wt(ke,1,"step-row svelte-shp5yz",null,ie,{done:l(ee),active:l(me)}),vt=Wt(_e,1,"step-dot svelte-shp5yz",null,vt,{done:l(ee),active:l(me)}),H(qr,v[l(U)])}),y(x,ke)}),y(C,z)};B(Qt,C=>{l(g)&&C(er)})}var ve=E(Qt,2);{var ze=C=>{var z=Wl(),x=b(z);j(()=>H(x,l(a))),y(C,z)};B(ve,C=>{l(a)&&C(ze)})}var tr=E(ve,2);{var Dr=C=>{var z=Yl(),x=b(z),U=E(b(x)),ee=b(U),me=E(U,2),ke=b(me),ie=E(x,2);j(()=>{H(ee,l(s).title),H(ke,l(s).cookbookName)}),W("click",ie,()=>t.onNavigate("recipe",{recipeId:l(s).recipeId,cookbookId:l(s).cookbookId})),y(C,z)};B(tr,C=>{l(s)&&C(Dr)})}var dn=E(tr,2);{var Fr=C=>{const z=Le(()=>l(i).recipe);var x=tu(),U=b(x);{var ee=G=>{var K=Gl();j(()=>{Je(K,"src",l(i).meta.thumbnail),Je(K,"alt",l(z).title)}),y(G,K)};B(U,G=>{var K;(K=l(i).meta)!=null&&K.thumbnail&&G(ee)})}var me=E(U,2),ke=b(me),ie=b(ke),_e=E(ke,2);{var vt=G=>{var K=Kl(),ye=b(K);j(()=>H(ye,l(z).description)),y(G,K)};B(_e,G=>{l(z).description&&G(vt)})}var rr=E(_e,2),Mt=b(rr);{var Ur=G=>{var K=Jl(),ye=b(K);j(()=>H(ye,`🍽 ${l(z).servings??""}`)),y(G,K)};B(Mt,G=>{l(z).servings&&G(Ur)})}var qr=E(Mt,2);{var pn=G=>{var K=Xl(),ye=b(K);j(()=>H(ye,`⏱ ${l(z).prepTime??""}`)),y(G,K)};B(qr,G=>{l(z).prepTime&&G(pn)})}var _n=E(qr,2);{var dt=G=>{var K=Zl(),ye=b(K);j(()=>H(ye,`🔥 ${l(z).cookTime??""}`)),y(G,K)};B(_n,G=>{l(z).cookTime&&G(dt)})}var Hr=E(rr,6);As(Hr,{get recipe(){return l(z)}});var ti=E(Hr,6);Ce(ti,21,()=>l(z).instructions,Oe,(G,K,ye)=>{var Wr=Ql(),_r=b(Wr);_r.textContent=ye+1;var Os=E(_r,2),Cs=b(Os);j(Ms=>H(Cs,Ms),[()=>l(K).replace(/^Step \d+:\s*/i,"")]),y(G,Wr)});var ri=E(ti,4),ni=E(b(ri),2);Ce(ni,21,()=>l(u),Oe,(G,K)=>{var ye=eu(),Wr=b(ye),_r={};j(()=>{H(Wr,l(K).name),_r!==(_r=l(K).id)&&(ye.value=(ye.__value=l(K).id)??"")}),y(G,ye)});var Is=E(ri,2),Br=b(Is),Ps=b(Br),xs=E(Br,2);j(()=>{H(ie,l(z).title),Br.disabled=l(o)||!l(c),H(Ps,l(o)?"Saving…":"✓ Save Recipe")}),Ta(ni,()=>l(c),G=>T(c,G)),W("click",Br,S),W("click",xs,O),y(C,x)};B(dn,C=>{l(i)&&C(Fr)})}var Vr=E(A,2);Vl(Vr,{message:"Recipe saved! 🎉",get show(){return l(f)},set show(C){T(f,C,!0)}});var hn=E(Vr,2);vn(hn,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),j(C=>{$e=Wt(te,1,"input",null,$e,C),te.disabled=l(g),ae.disabled=l(g)||!l(w),H(Et,l(g)?"Analyzing…":"Analyze Video")},[()=>({invalid:l(r).trim()&&!l(w)})]),W("click",N,()=>t.onNavigate("cookbooks")),W("keydown",te,C=>C.key==="Enter"&&h()),Qn(te,()=>l(r),C=>T(r,C)),W("click",ae,h),y(e,m),Qe()}Zt(["click","keydown"]);var iu=I('<div class="splash svelte-1n46o8q"><div class="splash-logo svelte-1n46o8q">🍳</div></div>');function su(e,t){Ze(t,!0);let r=q(null),n=q(!1);function i(){const h=new URLSearchParams(window.location.search);return{page:h.get("page")||"cookbooks",cookbookId:h.get("cookbookId")?parseInt(h.get("cookbookId")):null,recipeId:h.get("recipeId")?parseInt(h.get("recipeId")):null}}let s=q(ut(i()));function o(h,S={}){if(h==="cookbooks")history.pushState({},"","/");else{const O=new URLSearchParams({page:h,...a(S)});history.pushState({},"",`?${O}`)}T(s,i(),!0)}function a(h){return Object.fromEntries(Object.entries(h).filter(([,S])=>S!=null))}rn(()=>{function h(){T(s,i(),!0)}return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)});async function f(){const[h]=await Promise.all([fetch("/api/me",{credentials:"include"}),new Promise(O=>setTimeout(O,500))]),S=await h.json();T(r,S.userId||null,!0),T(n,!0)}f();var u=Te(),c=Z(u);{var _=h=>{var S=iu();y(h,S)},v=h=>{ja(h,{onLogin:S=>{T(r,S,!0),o("cookbooks")}})},k=h=>{al(h,{get userId(){return l(r)},get route(){return l(s)},onNavigate:o,onLogout:()=>{T(r,null)}})},p=h=>{_l(h,{get cookbookId(){return l(s).cookbookId},get route(){return l(s)},onNavigate:o})},w=h=>{Dl(h,{get recipeId(){return l(s).recipeId},get cookbookId(){return l(s).cookbookId},get route(){return l(s)},onNavigate:o})},g=h=>{nu(h,{get route(){return l(s)},onNavigate:o})};B(c,h=>{l(n)?l(r)?l(s).page==="cookbooks"?h(k,2):l(s).page==="cookbook"?h(p,3):l(s).page==="recipe"?h(w,4):l(s).page==="analyze"&&h(g,5):h(v,1):h(_)})}y(e,u),Qe()}va(su,{target:document.getElementById("app")});
