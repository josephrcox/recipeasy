var js=Object.defineProperty;var si=e=>{throw TypeError(e)};var Rs=(e,t,r)=>t in e?js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Xe=(e,t,r)=>Rs(e,typeof t!="symbol"?t+"":t,r),yn=(e,t,r)=>t.has(e)||si("Cannot "+r);var v=(e,t,r)=>(yn(e,t,"read from private field"),r?r.call(e):t.get(e)),F=(e,t,r)=>t.has(e)?si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),H=(e,t,r,n)=>(yn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),ee=(e,t,r)=>(yn(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Ls=!1;var Un=Array.isArray,Ds=Array.prototype.indexOf,_r=Array.prototype.includes,hn=Array.from,Fs=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Ii=Object.getOwnPropertyDescriptors,Vs=Object.prototype,Us=Array.prototype,Hn=Object.getPrototypeOf,oi=Object.isExtensible;function zr(e){return typeof e=="function"}const Hs=()=>{};function qs(e){return e()}function In(e){for(var t=0;t<e.length;t++)e[t]()}function Ai(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Bs(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const he=2,gr=4,Hr=8,qn=1<<24,Vt=16,it=32,rr=64,An=128,He=512,ue=1024,be=2048,gt=4096,$e=8192,qe=16384,or=32768,ai=1<<25,nr=65536,li=1<<17,Ws=1<<18,Er=1<<19,xi=1<<20,_t=1<<25,ir=65536,xn=1<<21,Bn=1<<22,Rt=1<<23,Tt=Symbol("$state"),Pi=Symbol("legacy props"),Ys=Symbol(""),kt=new class extends Error{constructor(){super(...arguments);Xe(this,"name","StaleReactionError");Xe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Ti;const Ci=!!((Ti=globalThis.document)!=null&&Ti.contentType)&&globalThis.document.contentType.includes("xml");function Gs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ks(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Js(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Qs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function eo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function to(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ro(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function no(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function io(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const so=1,oo=2,Oi=4,ao=8,lo=16,uo=1,fo=2,$i=4,co=8,vo=16,ho=1,po=2,ve=Symbol(),Mi="http://www.w3.org/1999/xhtml",_o="http://www.w3.org/2000/svg",go="@attach";function bo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function mo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ji(e){return e===this.v}function ko(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ri(e){return!ko(e,this.v)}let qr=!1,yo=!1;function wo(){qr=!0}let de=null;function br(e){de=e}function st(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:U,l:qr&&!t?{s:null,u:null,$:[]}:null}}function ot(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)as(n)}return t.i=!0,de=t.p,{}}function Br(){return!qr||de!==null&&de.l===null}let Wt=[];function Li(){var e=Wt;Wt=[],In(e)}function Nt(e){if(Wt.length===0&&!Cr){var t=Wt;queueMicrotask(()=>{t===Wt&&Li()})}Wt.push(e)}function Eo(){for(;Wt.length>0;)Li()}function Di(e){var t=U;if(t===null)return L.f|=Rt,e;if(!(t.f&or)&&!(t.f&gr))throw e;Mt(e,t)}function Mt(e,t){for(;t!==null;){if(t.f&An){if(!(t.f&or))throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const So=-7169;function se(e,t){e.f=e.f&So|t}function Wn(e){e.f&He||e.deps===null?se(e,ue):se(e,gt)}function Fi(e){if(e!==null)for(const t of e)!(t.f&he)||!(t.f&ir)||(t.f^=ir,Fi(t.deps))}function Vi(e,t,r){e.f&be?t.add(e):e.f&gt&&r.add(e),Fi(e.deps),se(e,ue)}let Qr=!1;function To(e){var t=Qr;try{return Qr=!1,[e(),Qr]}finally{Qr=t}}const Ct=new Set;let $=null,pe=null,Pn=null,Cr=!1,wn=!1,cr=null,tn=null;var ui=0;let No=1;var vr,dr,yt,ct,Lr,xe,Kt,wt,vt,hr,Jt,oe,rn,Ui,nn,Cn,On,Hi;const cn=class cn{constructor(){F(this,oe);Xe(this,"id",No++);Xe(this,"current",new Map);Xe(this,"previous",new Map);F(this,vr,new Set);F(this,dr,new Set);F(this,yt,new Map);F(this,ct,new Map);F(this,Lr,null);F(this,xe,[]);F(this,Kt,new Set);F(this,wt,new Set);F(this,vt,new Map);Xe(this,"is_fork",!1);F(this,hr,!1);F(this,Jt,new Set)}skip_effect(t){v(this,vt).has(t)||v(this,vt).set(t,{d:[],m:[]})}unskip_effect(t){var r=v(this,vt).get(t);if(r){v(this,vt).delete(t);for(var n of r.d)se(n,be),this.schedule(n);for(n of r.m)se(n,gt),this.schedule(n)}}capture(t,r,n=!1){r!==ve&&!this.previous.has(t)&&this.previous.set(t,r),t.f&Rt||(this.current.set(t,[t.v,n]),pe==null||pe.set(t,t.v))}activate(){$=this}deactivate(){$=null,pe=null}flush(){try{wn=!0,$=this,ee(this,oe,nn).call(this)}finally{ui=0,Pn=null,cr=null,tn=null,wn=!1,$=null,pe=null,Lt.clear()}}discard(){for(const t of v(this,dr))t(this);v(this,dr).clear(),Ct.delete(this)}increment(t,r){let n=v(this,yt).get(r)??0;if(v(this,yt).set(r,n+1),t){let i=v(this,ct).get(r)??0;v(this,ct).set(r,i+1)}}decrement(t,r,n){let i=v(this,yt).get(r)??0;if(i===1?v(this,yt).delete(r):v(this,yt).set(r,i-1),t){let s=v(this,ct).get(r)??0;s===1?v(this,ct).delete(r):v(this,ct).set(r,s-1)}v(this,hr)||n||(H(this,hr,!0),Nt(()=>{H(this,hr,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)v(this,Kt).add(n);for(const n of r)v(this,wt).add(n);t.clear(),r.clear()}oncommit(t){v(this,vr).add(t)}ondiscard(t){v(this,dr).add(t)}settled(){return(v(this,Lr)??H(this,Lr,Ai())).promise}static ensure(){if($===null){const t=$=new cn;wn||(Ct.add($),Cr||Nt(()=>{$===t&&t.flush()}))}return $}apply(){{pe=null;return}}schedule(t){var i;if(Pn=t,(i=t.b)!=null&&i.is_pending&&t.f&(gr|Hr|qn)&&!(t.f&or)){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(cr!==null&&r===U&&(L===null||!(L.f&he)))return;if(n&(rr|it)){if(!(n&ue))return;r.f^=ue}}v(this,xe).push(r)}};vr=new WeakMap,dr=new WeakMap,yt=new WeakMap,ct=new WeakMap,Lr=new WeakMap,xe=new WeakMap,Kt=new WeakMap,wt=new WeakMap,vt=new WeakMap,hr=new WeakMap,Jt=new WeakMap,oe=new WeakSet,rn=function(){return this.is_fork||v(this,ct).size>0},Ui=function(){for(const n of v(this,Jt))for(const i of v(n,ct).keys()){for(var t=!1,r=i;r.parent!==null;){if(v(this,vt).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},nn=function(){var a,u;if(ui++>1e3&&(Ct.delete(this),Io()),!ee(this,oe,rn).call(this)){for(const f of v(this,Kt))v(this,wt).delete(f),se(f,be),this.schedule(f);for(const f of v(this,wt))se(f,gt),this.schedule(f)}const t=v(this,xe);H(this,xe,[]),this.apply();var r=cr=[],n=[],i=tn=[];for(const f of t)try{ee(this,oe,Cn).call(this,f,r,n)}catch(c){throw Yi(f),c}if($=null,i.length>0){var s=cn.ensure();for(const f of i)s.schedule(f)}if(cr=null,tn=null,ee(this,oe,rn).call(this)||ee(this,oe,Ui).call(this)){ee(this,oe,On).call(this,n),ee(this,oe,On).call(this,r);for(const[f,c]of v(this,vt))Wi(f,c)}else{v(this,yt).size===0&&Ct.delete(this),v(this,Kt).clear(),v(this,wt).clear();for(const f of v(this,vr))f(this);v(this,vr).clear(),fi(n),fi(r),(a=v(this,Lr))==null||a.resolve()}var o=$;if(v(this,xe).length>0){const f=o??(o=this);v(f,xe).push(...v(this,xe).filter(c=>!v(f,xe).includes(c)))}o!==null&&(Ct.add(o),ee(u=o,oe,nn).call(u)),Ct.has(this)||ee(this,oe,Hi).call(this)},Cn=function(t,r,n){t.f^=ue;for(var i=t.first;i!==null;){var s=i.f,o=(s&(it|rr))!==0,a=o&&(s&ue)!==0,u=a||(s&$e)!==0||v(this,vt).has(i);if(!u&&i.fn!==null){o?i.f^=ue:s&gr?r.push(i):Gr(i)&&(s&Vt&&v(this,wt).add(i),yr(i));var f=i.first;if(f!==null){i=f;continue}}for(;i!==null;){var c=i.next;if(c!==null){i=c;break}i=i.parent}}},On=function(t){for(var r=0;r<t.length;r+=1)Vi(t[r],v(this,Kt),v(this,wt))},Hi=function(){var f,c,_;for(const d of Ct){var t=d.id<this.id,r=[];for(const[k,[p,y]]of this.current){if(d.current.has(k)){var n=d.current.get(k)[0];if(t&&p!==n)d.current.set(k,[p,y]);else continue}r.push(k)}var i=[...d.current.keys()].filter(k=>!this.current.has(k));if(i.length===0)t&&d.discard();else if(r.length>0){d.activate();var s=new Set,o=new Map;for(var a of r)qi(a,i,s,o);if(v(d,xe).length>0){d.apply();for(var u of v(d,xe))ee(f=d,oe,Cn).call(f,u,[],[]);H(d,xe,[])}d.deactivate()}}for(const d of Ct)v(d,Jt).has(this)&&(v(d,Jt).delete(this),v(d,Jt).size===0&&!ee(c=d,oe,rn).call(c)&&(d.activate(),ee(_=d,oe,nn).call(_)))};let sr=cn;function zo(e){var t=Cr;Cr=!0;try{for(var r;;){if(Eo(),$===null)return r;$.flush()}}finally{Cr=t}}function Io(){try{Qs()}catch(e){Mt(e,Pn)}}let Ze=null;function fi(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if(!(n.f&(qe|$e))&&Gr(n)&&(Ze=new Set,yr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&cs(n),(Ze==null?void 0:Ze.size)>0)){Lt.clear();for(const i of Ze){if(i.f&(qe|$e))continue;const s=[i];let o=i.parent;for(;o!==null;)Ze.has(o)&&(Ze.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const u=s[a];u.f&(qe|$e)||yr(u)}}Ze.clear()}}Ze=null}}function qi(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&he?qi(i,t,r,n):s&(Bn|Vt)&&!(s&be)&&Bi(i,t,n)&&(se(i,be),Yn(i))}}function Bi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(_r.call(t,i))return!0;if(i.f&he&&Bi(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Yn(e){$.schedule(e)}function Wi(e,t){if(!(e.f&it&&e.f&ue)){e.f&be?t.d.push(e):e.f&gt&&t.m.push(e),se(e,ue);for(var r=e.first;r!==null;)Wi(r,t),r=r.next}}function Yi(e){se(e,ue);for(var t=e.first;t!==null;)Yi(t),t=t.next}function Ao(e){let t=0,r=Dt(0),n;return()=>{Jn()&&(l(r),ls(()=>(t===0&&(n=wr(()=>e(()=>Or(r)))),t+=1,()=>{Nt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Or(r))})})))}}var xo=nr|Er;function Po(e,t,r,n){new Co(e,t,r,n)}var Ve,Vn,dt,Xt,Ee,ht,Pe,Qe,Et,Zt,$t,pr,Dr,Fr,St,vn,fe,Oo,$o,Mo,$n,sn,on,Mn;class Co{constructor(t,r,n,i){F(this,fe);Xe(this,"parent");Xe(this,"is_pending",!1);Xe(this,"transform_error");F(this,Ve);F(this,Vn,null);F(this,dt);F(this,Xt);F(this,Ee);F(this,ht,null);F(this,Pe,null);F(this,Qe,null);F(this,Et,null);F(this,Zt,0);F(this,$t,0);F(this,pr,!1);F(this,Dr,new Set);F(this,Fr,new Set);F(this,St,null);F(this,vn,Ao(()=>(H(this,St,Dt(v(this,Zt))),()=>{H(this,St,null)})));var s;H(this,Ve,t),H(this,dt,r),H(this,Xt,o=>{var a=U;a.b=this,a.f|=An,n(o)}),this.parent=U.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),H(this,Ee,gn(()=>{ee(this,fe,$n).call(this)},xo))}defer_effect(t){Vi(t,v(this,Dr),v(this,Fr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!v(this,dt).pending}update_pending_count(t,r){ee(this,fe,Mn).call(this,t,r),H(this,Zt,v(this,Zt)+t),!(!v(this,St)||v(this,pr))&&(H(this,pr,!0),Nt(()=>{H(this,pr,!1),v(this,St)&&mr(v(this,St),v(this,Zt))}))}get_effect_pending(){return v(this,vn).call(this),l(v(this,St))}error(t){var r=v(this,dt).onerror;let n=v(this,dt).failed;if(!r&&!n)throw t;v(this,ht)&&(_e(v(this,ht)),H(this,ht,null)),v(this,Pe)&&(_e(v(this,Pe)),H(this,Pe,null)),v(this,Qe)&&(_e(v(this,Qe)),H(this,Qe,null));var i=!1,s=!1;const o=()=>{if(i){mo();return}i=!0,s&&io(),v(this,Qe)!==null&&er(v(this,Qe),()=>{H(this,Qe,null)}),ee(this,fe,on).call(this,()=>{ee(this,fe,$n).call(this)})},a=u=>{try{s=!0,r==null||r(u,o),s=!1}catch(f){Mt(f,v(this,Ee)&&v(this,Ee).parent)}n&&H(this,Qe,ee(this,fe,on).call(this,()=>{try{return Te(()=>{var f=U;f.b=this,f.f|=An,n(v(this,Ve),()=>u,()=>o)})}catch(f){return Mt(f,v(this,Ee).parent),null}}))};Nt(()=>{var u;try{u=this.transform_error(t)}catch(f){Mt(f,v(this,Ee)&&v(this,Ee).parent);return}u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(a,f=>Mt(f,v(this,Ee)&&v(this,Ee).parent)):a(u)})}}Ve=new WeakMap,Vn=new WeakMap,dt=new WeakMap,Xt=new WeakMap,Ee=new WeakMap,ht=new WeakMap,Pe=new WeakMap,Qe=new WeakMap,Et=new WeakMap,Zt=new WeakMap,$t=new WeakMap,pr=new WeakMap,Dr=new WeakMap,Fr=new WeakMap,St=new WeakMap,vn=new WeakMap,fe=new WeakSet,Oo=function(){try{H(this,ht,Te(()=>v(this,Xt).call(this,v(this,Ve))))}catch(t){this.error(t)}},$o=function(t){const r=v(this,dt).failed;r&&H(this,Qe,Te(()=>{r(v(this,Ve),()=>t,()=>()=>{})}))},Mo=function(){const t=v(this,dt).pending;t&&(this.is_pending=!0,H(this,Pe,Te(()=>t(v(this,Ve)))),Nt(()=>{var r=H(this,Et,document.createDocumentFragment()),n=zt();r.append(n),H(this,ht,ee(this,fe,on).call(this,()=>Te(()=>v(this,Xt).call(this,n)))),v(this,$t)===0&&(v(this,Ve).before(r),H(this,Et,null),er(v(this,Pe),()=>{H(this,Pe,null)}),ee(this,fe,sn).call(this,$))}))},$n=function(){try{if(this.is_pending=this.has_pending_snippet(),H(this,$t,0),H(this,Zt,0),H(this,ht,Te(()=>{v(this,Xt).call(this,v(this,Ve))})),v(this,$t)>0){var t=H(this,Et,document.createDocumentFragment());ti(v(this,ht),t);const r=v(this,dt).pending;H(this,Pe,Te(()=>r(v(this,Ve))))}else ee(this,fe,sn).call(this,$)}catch(r){this.error(r)}},sn=function(t){this.is_pending=!1,t.transfer_effects(v(this,Dr),v(this,Fr))},on=function(t){var r=U,n=L,i=de;Ye(v(this,Ee)),We(v(this,Ee)),br(v(this,Ee).ctx);try{return sr.ensure(),t()}catch(s){return Di(s),null}finally{Ye(r),We(n),br(i)}},Mn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&ee(n=this.parent,fe,Mn).call(n,t,r);return}H(this,$t,v(this,$t)+t),v(this,$t)===0&&(ee(this,fe,sn).call(this,r),v(this,Pe)&&er(v(this,Pe),()=>{H(this,Pe,null)}),v(this,Et)&&(v(this,Ve).before(v(this,Et)),H(this,Et,null)))};function Gi(e,t,r,n){const i=Br()?Wr:Gn;var s=e.filter(d=>!d.settled);if(r.length===0&&s.length===0){n(t.map(i));return}var o=U,a=jo(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function f(d){a();try{n(d)}catch(k){o.f&qe||Mt(k,o)}ln()}if(r.length===0){u.then(()=>f(t.map(i)));return}var c=Ki();function _(){Promise.all(r.map(d=>Ro(d))).then(d=>f([...t.map(i),...d])).catch(d=>Mt(d,o)).finally(()=>c())}u?u.then(()=>{a(),_(),ln()}):_()}function jo(){var e=U,t=L,r=de,n=$;return function(s=!0){Ye(e),We(t),br(r),s&&!(e.f&qe)&&(n==null||n.activate(),n==null||n.apply())}}function ln(e=!0){Ye(null),We(null),br(null),e&&($==null||$.deactivate())}function Ki(){var e=U,t=e.b,r=$,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(i=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,i)}}function Wr(e){var t=he|be,r=L!==null&&L.f&he?L:null;return U!==null&&(U.f|=Er),{ctx:de,deps:null,effects:null,equals:ji,f:t,fn:e,reactions:null,rv:0,v:ve,wv:0,parent:r??U,ac:null}}function Ro(e,t,r){let n=U;n===null&&Gs();var i=void 0,s=Dt(ve),o=!L,a=new Map;return Jo(()=>{var k;var u=U,f=Ai();i=f.promise;try{Promise.resolve(e()).then(f.resolve,f.reject).finally(ln)}catch(p){f.reject(p),ln()}var c=$;if(o){if(u.f&or)var _=Ki();if(n.b.is_rendered())(k=a.get(c))==null||k.reject(kt),a.delete(c);else{for(const p of a.values())p.reject(kt);a.clear()}a.set(c,f)}const d=(p,y=void 0)=>{if(_){var h=y===kt;_(h)}if(!(y===kt||u.f&qe)){if(c.activate(),y)s.f|=Rt,mr(s,y);else{s.f&Rt&&(s.f^=Rt),mr(s,p);for(const[g,P]of a){if(a.delete(g),g===c)break;P.reject(kt)}}c.deactivate()}};f.promise.then(d,p=>d(null,p||"unknown"))}),Xn(()=>{for(const u of a.values())u.reject(kt)}),new Promise(u=>{function f(c){function _(){c===i?u(s):f(i)}c.then(_,_)}f(i)})}function Oe(e){const t=Wr(e);return hs(t),t}function Gn(e){const t=Wr(e);return t.equals=Ri,t}function Lo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)_e(t[r])}}function Do(e){for(var t=e.parent;t!==null;){if(!(t.f&he))return t.f&qe?null:t;t=t.parent}return null}function Kn(e){var t,r=U;Ye(Do(e));try{e.f&=~ir,Lo(e),t=bs(e)}finally{Ye(r)}return t}function Ji(e){var t=e.v,r=Kn(e);if(!e.equals(r)&&(e.wv=_s(),(!($!=null&&$.is_fork)||e.deps===null)&&(e.v=r,$==null||$.capture(e,t,!0),e.deps===null))){se(e,ue);return}Ft||(pe!==null?(Jn()||$!=null&&$.is_fork)&&pe.set(e,r):Wn(e))}function Fo(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(kt),n.teardown=Hs,n.ac=null,Mr(n,0),Qn(n))}function Xi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&yr(t)}let jn=new Set;const Lt=new Map;let Zi=!1;function Dt(e,t){var r={f:0,v:e,reactions:null,equals:ji,rv:0,wv:0};return r}function V(e,t){const r=Dt(e);return hs(r),r}function Vo(e,t=!1,r=!0){var i;const n=Dt(e);return t||(n.equals=Ri),qr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function E(e,t,r=!1){L!==null&&(!rt||L.f&li)&&Br()&&L.f&(he|Vt|Bn|li)&&(Be===null||!_r.call(Be,e))&&no();let n=r?Ue(t):t;return mr(e,n,tn)}function mr(e,t,r=null){if(!e.equals(t)){var n=e.v;Ft?Lt.set(e,t):Lt.set(e,n),e.v=t;var i=sr.ensure();if(i.capture(e,n),e.f&he){const s=e;e.f&be&&Kn(s),pe===null&&Wn(s)}e.wv=_s(),Qi(e,be,r),Br()&&U!==null&&U.f&ue&&!(U.f&(it|rr))&&(Fe===null?Qo([e]):Fe.push(e)),!i.is_fork&&jn.size>0&&!Zi&&Uo()}return t}function Uo(){Zi=!1;for(const e of jn)e.f&ue&&se(e,gt),Gr(e)&&yr(e);jn.clear()}function ci(e,t=1){var r=l(e),n=t===1?r++:r--;return E(e,r),n}function Or(e){E(e,e.v+1)}function Qi(e,t,r){var n=e.reactions;if(n!==null)for(var i=Br(),s=n.length,o=0;o<s;o++){var a=n[o],u=a.f;if(!(!i&&a===U)){var f=(u&be)===0;if(f&&se(a,t),u&he){var c=a;pe==null||pe.delete(c),u&ir||(u&He&&(a.f|=ir),Qi(c,gt,r))}else if(f){var _=a;u&Vt&&Ze!==null&&Ze.add(_),r!==null?r.push(_):Yn(_)}}}}function Ue(e){if(typeof e!="object"||e===null||Tt in e)return e;const t=Hn(e);if(t!==Vs&&t!==Us)return e;var r=new Map,n=Un(e),i=V(0),s=tr,o=a=>{if(tr===s)return a();var u=L,f=tr;We(null),_i(s);var c=a();return We(u),_i(f),c};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(a,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&to();var c=r.get(u);return c===void 0?o(()=>{var _=V(f.value);return r.set(u,_),_}):E(c,f.value,!0),!0},deleteProperty(a,u){var f=r.get(u);if(f===void 0){if(u in a){const c=o(()=>V(ve));r.set(u,c),Or(i)}}else E(f,ve),Or(i);return!0},get(a,u,f){var k;if(u===Tt)return e;var c=r.get(u),_=u in a;if(c===void 0&&(!_||(k=jt(a,u))!=null&&k.writable)&&(c=o(()=>{var p=Ue(_?a[u]:ve),y=V(p);return y}),r.set(u,c)),c!==void 0){var d=l(c);return d===ve?void 0:d}return Reflect.get(a,u,f)},getOwnPropertyDescriptor(a,u){var f=Reflect.getOwnPropertyDescriptor(a,u);if(f&&"value"in f){var c=r.get(u);c&&(f.value=l(c))}else if(f===void 0){var _=r.get(u),d=_==null?void 0:_.v;if(_!==void 0&&d!==ve)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(a,u){var d;if(u===Tt)return!0;var f=r.get(u),c=f!==void 0&&f.v!==ve||Reflect.has(a,u);if(f!==void 0||U!==null&&(!c||(d=jt(a,u))!=null&&d.writable)){f===void 0&&(f=o(()=>{var k=c?Ue(a[u]):ve,p=V(k);return p}),r.set(u,f));var _=l(f);if(_===ve)return!1}return c},set(a,u,f,c){var C;var _=r.get(u),d=u in a;if(n&&u==="length")for(var k=f;k<_.v;k+=1){var p=r.get(k+"");p!==void 0?E(p,ve):k in a&&(p=o(()=>V(ve)),r.set(k+"",p))}if(_===void 0)(!d||(C=jt(a,u))!=null&&C.writable)&&(_=o(()=>V(void 0)),E(_,Ue(f)),r.set(u,_));else{d=_.v!==ve;var y=o(()=>Ue(f));E(_,y)}var h=Reflect.getOwnPropertyDescriptor(a,u);if(h!=null&&h.set&&h.set.call(c,f),!d){if(n&&typeof u=="string"){var g=r.get("length"),P=Number(u);Number.isInteger(P)&&P>=g.v&&E(g,P+1)}Or(i)}return!0},ownKeys(a){l(i);var u=Reflect.ownKeys(a).filter(_=>{var d=r.get(_);return d===void 0||d.v!==ve});for(var[f,c]of r)c.v!==ve&&!(f in a)&&u.push(f);return u},setPrototypeOf(){ro()}})}function vi(e){try{if(e!==null&&typeof e=="object"&&Tt in e)return e[Tt]}catch{}return e}function Ho(e,t){return Object.is(vi(e),vi(t))}var di,es,ts,rs;function qo(){if(di===void 0){di=window,es=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ts=jt(t,"firstChild").get,rs=jt(t,"nextSibling").get,oi(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),oi(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function kr(e){return ts.call(e)}function Yr(e){return rs.call(e)}function b(e,t){return kr(e)}function te(e,t=!1){{var r=kr(e);return r instanceof Comment&&r.data===""?Yr(r):r}}function w(e,t=1,r=!1){let n=e;for(;t--;)n=Yr(n);return n}function Bo(e){e.textContent=""}function ns(){return!1}function is(e,t,r){return document.createElementNS(t??Mi,e,void 0)}function pn(e,t){if(t){const r=document.body;e.autofocus=!0,Nt(()=>{document.activeElement===r&&e.focus()})}}let hi=!1;function Wo(){hi||(hi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function _n(e){var t=L,r=U;We(null),Ye(null);try{return e()}finally{We(t),Ye(r)}}function ss(e,t,r,n=r){e.addEventListener(t,()=>_n(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Wo()}function os(e){U===null&&(L===null&&Zs(),Xs()),Ft&&Js()}function Yo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function at(e,t){var r=U;r!==null&&r.f&$e&&(e|=$e);var n={ctx:de,deps:null,nodes:null,f:e|be|He,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},i=n;if(e&gr)cr!==null?cr.push(n):sr.ensure().schedule(n);else if(t!==null){try{yr(n)}catch(o){throw _e(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&Er)&&(i=i.first,e&Vt&&e&nr&&i!==null&&(i.f|=nr))}if(i!==null&&(i.parent=r,r!==null&&Yo(i,r),L!==null&&L.f&he&&!(e&rr))){var s=L;(s.effects??(s.effects=[])).push(i)}return n}function Jn(){return L!==null&&!rt}function Xn(e){const t=at(Hr,null);return se(t,ue),t.teardown=e,t}function un(e){os();var t=U.f,r=!L&&(t&it)!==0&&(t&or)===0;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return as(e)}function as(e){return at(gr|xi,e)}function Go(e){return os(),at(Hr|xi,e)}function Ko(e){sr.ensure();const t=at(rr|Er,e);return(r={})=>new Promise(n=>{r.outro?er(t,()=>{_e(t),n(void 0)}):(_e(t),n(void 0))})}function Zn(e){return at(gr,e)}function Jo(e){return at(Bn|Er,e)}function ls(e,t=0){return at(Hr|t,e)}function R(e,t=[],r=[],n=[]){Gi(n,t,r,i=>{at(Hr,()=>e(...i.map(l)))})}function gn(e,t=0){var r=at(Vt|t,e);return r}function us(e,t=0){var r=at(qn|t,e);return r}function Te(e){return at(it|Er,e)}function fs(e){var t=e.teardown;if(t!==null){const r=Ft,n=L;pi(!0),We(null);try{t.call(null)}finally{pi(r),We(n)}}}function Qn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&_n(()=>{i.abort(kt)});var n=r.next;r.f&rr?r.parent=null:_e(r,t),r=n}}function Xo(e){for(var t=e.first;t!==null;){var r=t.next;t.f&it||_e(t),t=r}}function _e(e,t=!0){var r=!1;(t||e.f&Ws)&&e.nodes!==null&&e.nodes.end!==null&&(Zo(e.nodes.start,e.nodes.end),r=!0),se(e,ai),Qn(e,t&&!r),Mr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();fs(e),e.f^=ai,e.f|=qe;var i=e.parent;i!==null&&i.first!==null&&cs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Zo(e,t){for(;e!==null;){var r=e===t?null:Yr(e);e.remove(),e=r}}function cs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function er(e,t,r=!0){var n=[];vs(e,n,!0);var i=()=>{r&&_e(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function vs(e,t,r){if(!(e.f&$e)){e.f^=$e;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next,o=(i.f&nr)!==0||(i.f&it)!==0&&(e.f&Vt)!==0;vs(i,t,o?r:!1),i=s}}}function ei(e){ds(e,!0)}function ds(e,t){if(e.f&$e){e.f^=$e,e.f&ue||(se(e,be),sr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&nr)!==0||(r.f&it)!==0;ds(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function ti(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Yr(r);t.append(r),r=i}}let an=!1,Ft=!1;function pi(e){Ft=e}let L=null,rt=!1;function We(e){L=e}let U=null;function Ye(e){U=e}let Be=null;function hs(e){L!==null&&(Be===null?Be=[e]:Be.push(e))}let Se=null,Ae=0,Fe=null;function Qo(e){Fe=e}let ps=1,Yt=0,tr=Yt;function _i(e){tr=e}function _s(){return++ps}function Gr(e){var t=e.f;if(t&be)return!0;if(t&he&&(e.f&=~ir),t&gt){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Gr(s)&&Ji(s),s.wv>e.wv)return!0}t&He&&pe===null&&se(e,ue)}return!1}function gs(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Be!==null&&_r.call(Be,e)))for(var i=0;i<n.length;i++){var s=n[i];s.f&he?gs(s,t,!1):t===s&&(r?se(s,be):s.f&ue&&se(s,gt),Yn(s))}}function bs(e){var y;var t=Se,r=Ae,n=Fe,i=L,s=Be,o=de,a=rt,u=tr,f=e.f;Se=null,Ae=0,Fe=null,L=f&(it|rr)?null:e,Be=null,br(e.ctx),rt=!1,tr=++Yt,e.ac!==null&&(_n(()=>{e.ac.abort(kt)}),e.ac=null);try{e.f|=xn;var c=e.fn,_=c();e.f|=or;var d=e.deps,k=$==null?void 0:$.is_fork;if(Se!==null){var p;if(k||Mr(e,Ae),d!==null&&Ae>0)for(d.length=Ae+Se.length,p=0;p<Se.length;p++)d[Ae+p]=Se[p];else e.deps=d=Se;if(Jn()&&e.f&He)for(p=Ae;p<d.length;p++)((y=d[p]).reactions??(y.reactions=[])).push(e)}else!k&&d!==null&&Ae<d.length&&(Mr(e,Ae),d.length=Ae);if(Br()&&Fe!==null&&!rt&&d!==null&&!(e.f&(he|gt|be)))for(p=0;p<Fe.length;p++)gs(Fe[p],e);if(i!==null&&i!==e){if(Yt++,i.deps!==null)for(let h=0;h<r;h+=1)i.deps[h].rv=Yt;if(t!==null)for(const h of t)h.rv=Yt;Fe!==null&&(n===null?n=Fe:n.push(...Fe))}return e.f&Rt&&(e.f^=Rt),_}catch(h){return Di(h)}finally{e.f^=xn,Se=t,Ae=r,Fe=n,L=i,Be=s,br(o),rt=a,tr=u}}function ea(e,t){let r=t.reactions;if(r!==null){var n=Ds.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&t.f&he&&(Se===null||!_r.call(Se,t))){var s=t;s.f&He&&(s.f^=He,s.f&=~ir),Wn(s),Fo(s),Mr(s,0)}}function Mr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)ea(e,r[n])}function yr(e){var t=e.f;if(!(t&qe)){se(e,ue);var r=U,n=an;U=e,an=!0;try{t&(Vt|qn)?Xo(e):Qn(e),fs(e);var i=bs(e);e.teardown=typeof i=="function"?i:null,e.wv=ps;var s;Ls&&yo&&e.f&be&&e.deps}finally{an=n,U=r}}}async function ta(){await Promise.resolve(),zo()}function l(e){var t=e.f,r=(t&he)!==0;if(L!==null&&!rt){var n=U!==null&&(U.f&qe)!==0;if(!n&&(Be===null||!_r.call(Be,e))){var i=L.deps;if(L.f&xn)e.rv<Yt&&(e.rv=Yt,Se===null&&i!==null&&i[Ae]===e?Ae++:Se===null?Se=[e]:Se.push(e));else{(L.deps??(L.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[L]:_r.call(s,L)||s.push(L)}}}if(Ft&&Lt.has(e))return Lt.get(e);if(r){var o=e;if(Ft){var a=o.v;return(!(o.f&ue)&&o.reactions!==null||ks(o))&&(a=Kn(o)),Lt.set(o,a),a}var u=(o.f&He)===0&&!rt&&L!==null&&(an||(L.f&He)!==0),f=(o.f&or)===0;Gr(o)&&(u&&(o.f|=He),Ji(o)),u&&!f&&(Xi(o),ms(o))}if(pe!=null&&pe.has(e))return pe.get(e);if(e.f&Rt)throw e.v;return e.v}function ms(e){if(e.f|=He,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&he&&!(t.f&He)&&(Xi(t),ms(t))}function ks(e){if(e.v===ve)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Lt.has(t)||t.f&he&&ks(t))return!0;return!1}function wr(e){var t=rt;try{return rt=!0,e()}finally{rt=t}}function Bt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Tt in e)Rn(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Tt in r&&Rn(r)}}}function Rn(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Rn(e[n],t)}catch{}const r=Hn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ii(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function ra(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const na=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ia(e){return na.includes(e)}const sa={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oa(e){return e=e.toLowerCase(),sa[e]??e}const aa=["touchstart","touchmove"];function la(e){return aa.includes(e)}const Gt=Symbol("events"),ys=new Set,Ln=new Set;function ua(e,t,r,n={}){function i(s){if(n.capture||Dn.call(t,s),!s.cancelBubble)return _n(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Nt(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function G(e,t,r){(t[Gt]??(t[Gt]={}))[e]=r}function Ut(e){for(var t=0;t<e.length;t++)ys.add(e[t]);for(var r of Ln)r(e)}let gi=null;function Dn(e){var h,g;var t=this,r=t.ownerDocument,n=e.type,i=((h=e.composedPath)==null?void 0:h.call(e))||[],s=i[0]||e.target;gi=e;var o=0,a=gi===e&&e[Gt];if(a){var u=i.indexOf(a);if(u!==-1&&(t===document||t===window)){e[Gt]=t;return}var f=i.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(s=i[o]||e.target,s!==t){Fs(e,"currentTarget",{configurable:!0,get(){return s||r}});var c=L,_=U;We(null),Ye(null);try{for(var d,k=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var y=(g=s[Gt])==null?void 0:g[n];y!=null&&(!s.disabled||e.target===s)&&y.call(s,e)}catch(P){d?k.push(P):d=P}if(e.cancelBubble||p===t||p===null)break;s=p}if(d){for(let P of k)queueMicrotask(()=>{throw P});throw d}}finally{e[Gt]=t,delete e.currentTarget,We(c),Ye(_)}}}var Ni;const En=((Ni=globalThis==null?void 0:globalThis.window)==null?void 0:Ni.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fa(e){return(En==null?void 0:En.createHTML(e))??e}function ws(e){var t=is("template");return t.innerHTML=fa(e.replaceAll("<!>","<!---->")),t.content}function jr(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var r=(t&ho)!==0,n=(t&po)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=ws(s?e:"<!>"+e),r||(i=kr(i)));var o=n||es?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=kr(o),u=o.lastChild;jr(a,u)}else jr(o,o);return o}}function ca(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=ws(i),a=kr(o);s=kr(a)}var u=s.cloneNode(!0);return jr(u,u),u}}function va(e,t){return ca(e,t,"svg")}function ke(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),jr(t,r),e}function S(e,t){e!==null&&e.before(t)}function W(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function da(e,t){return ha(e,t)}const en=new Map;function ha(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:o=!0,transformError:a}){qo();var u=void 0,f=Ko(()=>{var c=r??t.appendChild(zt());Po(c,{pending:()=>{}},k=>{st({});var p=de;s&&(p.c=s),i&&(n.$$events=i),u=e(k,n)||{},ot()},a);var _=new Set,d=k=>{for(var p=0;p<k.length;p++){var y=k[p];if(!_.has(y)){_.add(y);var h=la(y);for(const C of[t,document]){var g=en.get(C);g===void 0&&(g=new Map,en.set(C,g));var P=g.get(y);P===void 0?(C.addEventListener(y,Dn,{passive:h}),g.set(y,1)):g.set(y,P+1)}}}};return d(hn(ys)),Ln.add(d),()=>{var h;for(var k of _)for(const g of[t,document]){var p=en.get(g),y=p.get(k);--y==0?(g.removeEventListener(k,Dn),p.delete(k),p.size===0&&en.delete(g)):p.set(k,y)}Ln.delete(d),c!==r&&((h=c.parentNode)==null||h.removeChild(c))}});return pa.set(u,f),u}let pa=new WeakMap;var et,pt,Ce,Qt,Vr,Ur,dn;class Es{constructor(t,r=!0){Xe(this,"anchor");F(this,et,new Map);F(this,pt,new Map);F(this,Ce,new Map);F(this,Qt,new Set);F(this,Vr,!0);F(this,Ur,t=>{if(v(this,et).has(t)){var r=v(this,et).get(t),n=v(this,pt).get(r);if(n)ei(n),v(this,Qt).delete(r);else{var i=v(this,Ce).get(r);i&&(v(this,pt).set(r,i.effect),v(this,Ce).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of v(this,et)){if(v(this,et).delete(s),s===t)break;const a=v(this,Ce).get(o);a&&(_e(a.effect),v(this,Ce).delete(o))}for(const[s,o]of v(this,pt)){if(s===r||v(this,Qt).has(s))continue;const a=()=>{if(Array.from(v(this,et).values()).includes(s)){var f=document.createDocumentFragment();ti(o,f),f.append(zt()),v(this,Ce).set(s,{effect:o,fragment:f})}else _e(o);v(this,Qt).delete(s),v(this,pt).delete(s)};v(this,Vr)||!n?(v(this,Qt).add(s),er(o,a,!1)):a()}}});F(this,dn,t=>{v(this,et).delete(t);const r=Array.from(v(this,et).values());for(const[n,i]of v(this,Ce))r.includes(n)||(_e(i.effect),v(this,Ce).delete(n))});this.anchor=t,H(this,Vr,r)}ensure(t,r){var n=$,i=ns();if(r&&!v(this,pt).has(t)&&!v(this,Ce).has(t))if(i){var s=document.createDocumentFragment(),o=zt();s.append(o),v(this,Ce).set(t,{effect:Te(()=>r(o)),fragment:s})}else v(this,pt).set(t,Te(()=>r(this.anchor)));if(v(this,et).set(n,t),i){for(const[a,u]of v(this,pt))a===t?n.unskip_effect(u):n.skip_effect(u);for(const[a,u]of v(this,Ce))a===t?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(v(this,Ur)),n.ondiscard(v(this,dn))}else v(this,Ur).call(this,n)}}et=new WeakMap,pt=new WeakMap,Ce=new WeakMap,Qt=new WeakMap,Vr=new WeakMap,Ur=new WeakMap,dn=new WeakMap;function Y(e,t,r=!1){var n=new Es(e),i=r?nr:0;function s(o,a){n.ensure(o,a)}gn(()=>{var o=!1;t((a,u=0)=>{o=!0,s(u,a)}),o||s(-1,null)},i)}function Me(e,t){return t}function _a(e,t,r){for(var n=[],i=t.length,s,o=t.length,a=0;a<i;a++){let _=t[a];er(_,()=>{if(s){if(s.pending.delete(_),s.done.add(_),s.pending.size===0){var d=e.outrogroups;Fn(e,hn(s.done)),d.delete(s),d.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var u=n.length===0&&r!==null;if(u){var f=r,c=f.parentNode;Bo(c),c.append(f),e.items.clear()}Fn(e,t,!u)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Fn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const a of o)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=_t;const o=document.createDocumentFragment();ti(s,o)}else _e(t[i],r)}}var bi;function je(e,t,r,n,i,s=null){var o=e,a=new Map,u=(t&Oi)!==0;if(u){var f=e;o=f.appendChild(zt())}var c=null,_=Gn(()=>{var C=r();return Un(C)?C:C==null?[]:hn(C)}),d,k=new Map,p=!0;function y(C){P.effect.f&qe||(P.pending.delete(C),P.fallback=c,ga(P,d,o,t,n),c!==null&&(d.length===0?c.f&_t?(c.f^=_t,Pr(c,null,o)):ei(c):er(c,()=>{c=null})))}function h(C){P.pending.delete(C)}var g=gn(()=>{d=l(_);for(var C=d.length,m=new Set,N=$,M=ns(),z=0;z<C;z+=1){var x=d[z],A=n(x,z),T=p?null:a.get(A);T?(T.v&&mr(T.v,x),T.i&&mr(T.i,z),M&&N.unskip_effect(T.e)):(T=ba(a,p?o:bi??(bi=zt()),x,A,z,i,t,r),p||(T.e.f|=_t),a.set(A,T)),m.add(A)}if(C===0&&s&&!c&&(p?c=Te(()=>s(o)):(c=Te(()=>s(bi??(bi=zt()))),c.f|=_t)),C>m.size&&Ks(),!p)if(k.set(N,m),M){for(const[B,J]of a)m.has(B)||N.skip_effect(J.e);N.oncommit(y),N.ondiscard(h)}else y(N);l(_)}),P={effect:g,items:a,pending:k,outrogroups:null,fallback:c};p=!1}function Ir(e){for(;e!==null&&!(e.f&it);)e=e.next;return e}function ga(e,t,r,n,i){var T,B,J,re,X,ze,ne,ye,At;var s=(n&ao)!==0,o=t.length,a=e.items,u=Ir(e.effect.first),f,c=null,_,d=[],k=[],p,y,h,g;if(s)for(g=0;g<o;g+=1)p=t[g],y=i(p,g),h=a.get(y).e,h.f&_t||((B=(T=h.nodes)==null?void 0:T.a)==null||B.measure(),(_??(_=new Set)).add(h));for(g=0;g<o;g+=1){if(p=t[g],y=i(p,g),h=a.get(y).e,e.outrogroups!==null)for(const ae of e.outrogroups)ae.pending.delete(h),ae.done.delete(h);if(h.f&$e&&(ei(h),s&&((re=(J=h.nodes)==null?void 0:J.a)==null||re.unfix(),(_??(_=new Set)).delete(h))),h.f&_t)if(h.f^=_t,h===u)Pr(h,null,r);else{var P=c?c.next:u;h===e.effect.last&&(e.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Ot(e,c,h),Ot(e,h,P),Pr(h,P,r),c=h,d=[],k=[],u=Ir(c.next);continue}if(h!==u){if(f!==void 0&&f.has(h)){if(d.length<k.length){var C=k[0],m;c=C.prev;var N=d[0],M=d[d.length-1];for(m=0;m<d.length;m+=1)Pr(d[m],C,r);for(m=0;m<k.length;m+=1)f.delete(k[m]);Ot(e,N.prev,M.next),Ot(e,c,N),Ot(e,M,C),u=C,c=M,g-=1,d=[],k=[]}else f.delete(h),Pr(h,u,r),Ot(e,h.prev,h.next),Ot(e,h,c===null?e.effect.first:c.next),Ot(e,c,h),c=h;continue}for(d=[],k=[];u!==null&&u!==h;)(f??(f=new Set)).add(u),k.push(u),u=Ir(u.next);if(u===null)continue}h.f&_t||d.push(h),c=h,u=Ir(h.next)}if(e.outrogroups!==null){for(const ae of e.outrogroups)ae.pending.size===0&&(Fn(e,hn(ae.done)),(X=e.outrogroups)==null||X.delete(ae));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||f!==void 0){var z=[];if(f!==void 0)for(h of f)h.f&$e||z.push(h);for(;u!==null;)!(u.f&$e)&&u!==e.fallback&&z.push(u),u=Ir(u.next);var x=z.length;if(x>0){var A=n&Oi&&o===0?r:null;if(s){for(g=0;g<x;g+=1)(ne=(ze=z[g].nodes)==null?void 0:ze.a)==null||ne.measure();for(g=0;g<x;g+=1)(At=(ye=z[g].nodes)==null?void 0:ye.a)==null||At.fix()}_a(e,z,A)}}s&&Nt(()=>{var ae,xt;if(_!==void 0)for(h of _)(xt=(ae=h.nodes)==null?void 0:ae.a)==null||xt.apply()})}function ba(e,t,r,n,i,s,o,a){var u=o&so?o&lo?Dt(r):Vo(r,!1,!1):null,f=o&oo?Dt(i):null;return{v:u,i:f,e:Te(()=>(s(t,u??r,f??i,a),()=>{e.delete(n)}))}}function Pr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&_t)?t.nodes.start:r;n!==null;){var o=Yr(n);if(s.before(n),n===i)return;n=o}}function Ot(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Re(e,t,r,n,i){var a;var s=(a=t.$$slots)==null?void 0:a[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function ma(e,t,r,n,i,s){var o=null,a=e,u=new Es(a,!1);gn(()=>{const f=t()||null;var c=_o;if(f===null){u.ensure(null,null);return}return u.ensure(f,_=>{if(f){if(o=is(f,c),jr(o,o),n){var d=o.appendChild(zt());n(o,d)}U.nodes.end=o,_.before(o)}}),()=>{}},nr),Xn(()=>{})}function ka(e,t){var r=void 0,n;us(()=>{r!==(r=t())&&(n&&(_e(n),n=null),r&&(n=Te(()=>{Zn(()=>r(e))})))})}function Ss(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ss(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ya(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ss(e))&&(n&&(n+=" "),n+=t);return n}function wa(e){return typeof e=="object"?ya(e):e??""}const mi=[...` 	
\r\f \v\uFEFF`];function Ea(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||mi.includes(n[o-1]))&&(a===n.length||mi.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function ki(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function Sn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Sa(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,u=[];n&&u.push(...Object.keys(n).map(Sn)),i&&u.push(...Object.keys(i).map(Sn));var f=0,c=-1;const y=e.length;for(var _=0;_<y;_++){var d=e[_];if(a?d==="/"&&e[_-1]==="*"&&(a=!1):s?s===d&&(s=!1):d==="/"&&e[_+1]==="*"?a=!0:d==='"'||d==="'"?s=d:d==="("?o++:d===")"&&o--,!a&&s===!1&&o===0){if(d===":"&&c===-1)c=_;else if(d===";"||_===y-1){if(c!==-1){var k=Sn(e.substring(f,c).trim());if(!u.includes(k)){d!==";"&&_++;var p=e.substring(f,_).trim();r+=" "+p+";"}}f=_+1,c=-1}}}}return n&&(r+=ki(n)),i&&(r+=ki(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function It(e,t,r,n,i,s){var o=e.__className;if(o!==r||o===void 0){var a=Ea(r,n,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e.__className=r}else if(s&&i!==s)for(var u in s){var f=!!s[u];(i==null||f!==!!i[u])&&e.classList.toggle(u,f)}return s}function Tn(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Ta(e,t,r,n){var i=e.__style;if(i!==t){var s=Sa(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Tn(e,r==null?void 0:r[0],n[0]),Tn(e,r==null?void 0:r[1],n[1],"important")):Tn(e,r,n));return n}function Rr(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Un(t))return bo();for(var n of e.options)n.selected=t.includes($r(n));return}for(n of e.options){var i=$r(n);if(Ho(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ri(e){var t=new MutationObserver(()=>{Rr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xn(()=>{t.disconnect()})}function Na(e,t,r=t){var n=new WeakSet,i=!0;ss(e,"change",s=>{var o=s?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),$r);else{var u=e.querySelector(o)??e.querySelector("option:not([disabled])");a=u&&$r(u)}r(a),e.__value=a,$!==null&&n.add($)}),Zn(()=>{var s=t();if(e===document.activeElement){var o=$;if(n.has(o))return}if(Rr(e,s,i),i&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=$r(a),r(s))}e.__value=s,i=!1}),ri(e)}function $r(e){return"__value"in e?e.__value:e.value}const Ar=Symbol("class"),xr=Symbol("style"),Ts=Symbol("is custom element"),Ns=Symbol("is html"),za=Ci?"option":"OPTION",Ia=Ci?"select":"SELECT";function Aa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function nt(e,t,r,n){var i=zs(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ys]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Is(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function xa(e,t,r,n,i=!1,s=!1){var o=zs(e),a=o[Ts],u=!o[Ns],f=t||{},c=e.nodeName===za;for(var _ in t)_ in r||(r[_]=null);r.class?r.class=wa(r.class):r[Ar]&&(r.class=null),r[xr]&&(r.style??(r.style=null));var d=Is(e);for(const m in r){let N=r[m];if(c&&m==="value"&&N==null){e.value=e.__value="",f[m]=N;continue}if(m==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,k,N,n,t==null?void 0:t[Ar],r[Ar]),f[m]=N,f[Ar]=r[Ar];continue}if(m==="style"){Ta(e,N,t==null?void 0:t[xr],r[xr]),f[m]=N,f[xr]=r[xr];continue}var p=f[m];if(!(N===p&&!(N===void 0&&e.hasAttribute(m)))){f[m]=N;var y=m[0]+m[1];if(y!=="$$")if(y==="on"){const M={},z="$$"+m;let x=m.slice(2);var h=ia(x);if(ra(x)&&(x=x.slice(0,-7),M.capture=!0),!h&&p){if(N!=null)continue;e.removeEventListener(x,f[z],M),f[z]=null}if(h)G(x,e,N),Ut([x]);else if(N!=null){let A=function(T){f[m].call(this,T)};var C=A;f[z]=ua(x,e,A,M)}}else if(m==="style")nt(e,m,N);else if(m==="autofocus")pn(e,!!N);else if(!a&&(m==="__value"||m==="value"&&N!=null))e.value=e.__value=N;else if(m==="selected"&&c)Aa(e,N);else{var g=m;u||(g=oa(g));var P=g==="defaultValue"||g==="defaultChecked";if(N==null&&!a&&!P)if(o[m]=null,g==="value"||g==="checked"){let M=e;const z=t===void 0;if(g==="value"){let x=M.defaultValue;M.removeAttribute(g),M.defaultValue=x,M.value=M.__value=z?x:null}else{let x=M.defaultChecked;M.removeAttribute(g),M.defaultChecked=x,M.checked=z?x:!1}}else e.removeAttribute(m);else P||d.includes(g)&&(a||typeof N!="string")?(e[g]=N,g in o&&(o[g]=ve)):typeof N!="function"&&nt(e,g,N)}}}return f}function yi(e,t,r=[],n=[],i=[],s,o=!1,a=!1){Gi(i,r,n,u=>{var f=void 0,c={},_=e.nodeName===Ia,d=!1;if(us(()=>{var p=t(...u.map(l)),y=xa(e,f,p,s,o,a);d&&_&&"value"in p&&Rr(e,p.value);for(let g of Object.getOwnPropertySymbols(c))p[g]||_e(c[g]);for(let g of Object.getOwnPropertySymbols(p)){var h=p[g];g.description===go&&(!f||h!==f[g])&&(c[g]&&_e(c[g]),c[g]=Te(()=>ka(e,()=>h))),y[g]=h}f=y}),_){var k=e;Zn(()=>{Rr(k,f.value,!0),ri(k)})}d=!0})}function zs(e){return e.__attributes??(e.__attributes={[Ts]:e.nodeName.includes("-"),[Ns]:e.namespaceURI===Mi})}var wi=new Map;function Is(e){var t=e.getAttribute("is")||e.nodeName,r=wi.get(t);if(r)return r;wi.set(t,r=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=Ii(i);for(var o in n)n[o].set&&r.push(o);i=Hn(i)}return r}function ni(e,t,r=t){var n=new WeakSet;ss(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=Nn(e)?zn(s):s,r(s),$!==null&&n.add($),await ta(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,u=e.value.length;if(e.value=s??"",a!==null){var f=e.value.length;o===a&&a===u&&f>u?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=o,e.selectionEnd=Math.min(a,f))}}}),wr(t)==null&&e.value&&(r(Nn(e)?zn(e.value):e.value),$!==null&&n.add($)),ls(()=>{var i=t();if(e===document.activeElement){var s=$;if(n.has(s))return}Nn(e)&&i===zn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Nn(e){var t=e.type;return t==="number"||t==="range"}function zn(e){return e===""?null:+e}function Pa(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>Bt(t.s);if(e){let i=0,s={};const o=Wr(()=>{let a=!1;const u=t.s;for(const f in u)u[f]!==s[f]&&(s[f]=u[f],a=!0);return a&&i++,i});n=()=>l(o)}r.b.length&&Go(()=>{Ei(t,n),In(r.b)}),un(()=>{const i=wr(()=>r.m.map(qs));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&un(()=>{Ei(t,n),In(r.a)})}function Ei(e,t){if(e.l.s)for(const r of e.l.s)l(r);t()}const Ca={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{Ye(e.parent_effect),e.special[t]=tt({get[t](){return e.props[t]}},t,$i)}finally{Ye(n)}}return e.special[t](r),ci(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ci(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:Dt(0),parent_effect:U},Ca)}const Oa={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];zr(i)&&(i=i());const s=jt(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=jt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Tt||t===Pi)return!1;for(let r of e.props)if(zr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(zr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function Ge(...e){return new Proxy({props:e},Oa)}function tt(e,t,r,n){var C;var i=!qr||(r&fo)!==0,s=(r&co)!==0,o=(r&vo)!==0,a=n,u=!0,f=()=>(u&&(u=!1,a=o?wr(n):n),a);let c;if(s){var _=Tt in e||Pi in e;c=((C=jt(e,t))==null?void 0:C.set)??(_&&t in e?m=>e[t]=m:void 0)}var d,k=!1;s?[d,k]=To(()=>e[t]):d=e[t],d===void 0&&n!==void 0&&(d=f(),c&&(i&&eo(),c(d)));var p;if(i?p=()=>{var m=e[t];return m===void 0?f():(u=!0,m)}:p=()=>{var m=e[t];return m!==void 0&&(a=void 0),m===void 0?a:m},i&&!(r&$i))return p;if(c){var y=e.$$legacy;return function(m,N){return arguments.length>0?((!i||!N||y||k)&&c(N?p():m),m):p()}}var h=!1,g=(r&uo?Wr:Gn)(()=>(h=!1,p()));s&&l(g);var P=U;return function(m,N){if(arguments.length>0){const M=N?l(g):i&&s?Ue(m):m;return E(g,M),h=!0,a!==void 0&&(a=M),m}return Ft&&h||P.f&qe?g.v:l(g)}}const $a="5";var zi;typeof window<"u"&&((zi=window.__svelte??(window.__svelte={})).v??(zi.v=new Set)).add($a);var Ma=I('<p class="err svelte-o2dhro"> </p>'),ja=I('<div class="screen svelte-o2dhro"><div class="hero svelte-o2dhro"><div class="logo svelte-o2dhro">🍳</div> <h1 class="svelte-o2dhro">Recipeasy</h1> <p class="svelte-o2dhro">Save recipes from TikTok videos into your personal cookbooks</p></div> <div class="card svelte-o2dhro"><h2 class="svelte-o2dhro">Welcome back</h2> <p class="sub svelte-o2dhro">Enter your user ID to continue</p> <div class="field svelte-o2dhro"><input class="input" type="text" placeholder="Your user ID" autocomplete="off" autocapitalize="none"/></div> <!> <button class="btn-primary"> </button></div></div>');function Ra(e,t){st(t,!0);let r=V(""),n=V(null),i=V(!1);async function s(){if(l(r).trim()){E(i,!0),E(n,null);try{const p=await fetch("/api/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l(r).trim()})}),y=await p.json();if(!p.ok)throw new Error(y.error);t.onLogin(y.userId)}catch(p){E(n,p.message,!0)}finally{E(i,!1)}}}var o=ja(),a=w(b(o),2),u=w(b(a),4),f=b(u);pn(f,!0);var c=w(u,2);{var _=p=>{var y=Ma(),h=b(y);R(()=>W(h,l(n))),S(p,y)};Y(c,p=>{l(n)&&p(_)})}var d=w(c,2),k=b(d);R(p=>{f.disabled=l(i),d.disabled=p,W(k,l(i)?"Signing in…":"Sign in")},[()=>l(i)||!l(r).trim()]),G("keydown",f,p=>p.key==="Enter"&&s()),ni(f,()=>l(r),p=>E(r,p)),G("click",d,s),S(e,o),ot()}Ut(["keydown","click"]);wo();/**
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
 */const La={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Da=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const Si=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Fa=va("<svg><!><!></svg>");function Ke(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]),n=Ne(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);st(t,!1);let i=tt(t,"name",8,void 0),s=tt(t,"color",8,"currentColor"),o=tt(t,"size",8,24),a=tt(t,"strokeWidth",8,2),u=tt(t,"absoluteStrokeWidth",8,!1),f=tt(t,"iconNode",24,()=>[]);Pa();var c=Fa();yi(c,(k,p,y)=>({...La,...k,...n,width:o(),height:o(),stroke:s(),"stroke-width":p,class:y}),[()=>Da(n)?void 0:{"aria-hidden":"true"},()=>(Bt(u()),Bt(a()),Bt(o()),wr(()=>u()?Number(a())*24/Number(o()):a())),()=>(Bt(Si),Bt(i()),Bt(r),wr(()=>Si("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var _=b(c);je(_,1,f,Me,(k,p)=>{var y=Oe(()=>Bs(l(p),2));let h=()=>l(y)[0],g=()=>l(y)[1];var P=ke(),C=te(P);ma(C,h,!0,(m,N)=>{yi(m,()=>({...g()}))}),S(k,P)});var d=w(_);Re(d,t,"default",{}),S(e,c),ot()}function fn(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];Ke(e,Ge({name:"arrow-left"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Va(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Ke(e,Ge({name:"book-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ua(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];Ke(e,Ge({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ha(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];Ke(e,Ge({name:"clock"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function qa(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];Ke(e,Ge({name:"copy"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ba(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ke(e,Ge({name:"external-link"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Wa(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];Ke(e,Ge({name:"flame"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ya(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Ke(e,Ge({name:"house"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ga(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];Ke(e,Ge({name:"link"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ka(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Ke(e,Ge({name:"log-out"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function ii(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ke(e,Ge({name:"plus"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}function Ja(e,t){const r=Ne(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Ke(e,Ge({name:"users"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=ke(),a=te(o);Re(a,t,"default",{}),S(i,o)},$$slots:{default:!0}}))}var Xa=I('<nav class="bottom-nav svelte-6pm7l3"><button><!> <span class="svelte-6pm7l3">Cookbooks</span></button> <button class="nav-fab svelte-6pm7l3"><!></button> <button><!> <span class="svelte-6pm7l3">Add Recipe</span></button></nav>');function bn(e,t){st(t,!0);const r=Oe(()=>t.route.page==="cookbooks");var n=Xa(),i=b(n);let s;var o=b(i);{let d=Oe(()=>l(r)?2.5:1.8);Ya(o,{size:22,get strokeWidth(){return l(d)}})}var a=w(i,2),u=b(a);ii(u,{size:26,strokeWidth:2.5});var f=w(a,2);let c;var _=b(f);{let d=Oe(()=>t.route.page==="analyze"?2.5:1.8);Va(_,{size:22,get strokeWidth(){return l(d)}})}R(()=>{s=It(i,1,"nav-item svelte-6pm7l3",null,s,{active:l(r)}),c=It(f,1,"nav-item svelte-6pm7l3",null,c,{active:t.route.page==="analyze"})}),G("click",i,()=>t.onNavigate("cookbooks")),G("click",a,()=>t.onNavigate("analyze")),G("click",f,()=>t.onNavigate("analyze")),S(e,n),ot()}Ut(["click"]);var Za=I('<div class="create-box svelte-fzpb15"><input class="input" type="text" placeholder="Cookbook name…"/> <div class="create-actions svelte-fzpb15"><button class="btn-ghost svelte-fzpb15">Cancel</button> <button class="btn-primary" style="width:auto;padding:13px 24px"> </button></div></div>'),Qa=I('<button class="new-cookbook-btn svelte-fzpb15"><!> New Cookbook</button>'),el=I('<div class="skeleton-card svelte-fzpb15"><div class="skeleton-img shimmer svelte-fzpb15"></div> <div class="skeleton-info svelte-fzpb15"><div class="skeleton-line shimmer svelte-fzpb15" style="width:70%"></div> <div class="skeleton-line shimmer svelte-fzpb15" style="width:40%;margin-top:6px"></div></div></div>'),tl=I('<div class="grid svelte-fzpb15"></div>'),rl=I('<div class="empty svelte-fzpb15"><div class="empty-icon svelte-fzpb15">📖</div> <h2 class="svelte-fzpb15">No cookbooks yet</h2> <p class="svelte-fzpb15">Create a cookbook to start saving TikTok recipes</p></div>'),nl=I('<img class="svelte-fzpb15"/>'),il=I('<div class="card-img-placeholder svelte-fzpb15">🍽️</div>'),sl=I('<button class="card-delete svelte-fzpb15">✕</button>'),ol=I('<div class="card svelte-fzpb15" role="button" tabindex="0"><div class="card-img svelte-fzpb15"><!> <div class="card-gradient svelte-fzpb15"></div> <!></div> <div class="card-info svelte-fzpb15"><span class="card-name svelte-fzpb15"> </span> <span class="card-count svelte-fzpb15"> </span></div></div>'),al=I('<div class="grid svelte-fzpb15"></div>'),ll=I('<div class="page-with-nav"><div class="header svelte-fzpb15"><div><p class="greeting svelte-fzpb15">Hello 👋</p> <h1 class="svelte-fzpb15">My Cookbooks</h1></div> <button class="icon-btn" title="Sign out"><!></button></div> <!> <!></div> <!>',1);function ul(e,t){st(t,!0);let r=V(null),n=V(""),i=V(!1),s=V(!1);async function o(){const z=await fetch("/api/cookbooks",{credentials:"include"});E(r,await z.json(),!0)}async function a(){if(l(n).trim()){E(i,!0);try{const x=await(await fetch("/api/cookbooks",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l(n).trim()})})).json();E(r,[...l(r),x],!0),E(n,""),E(s,!1)}finally{E(i,!1)}}}async function u(z){confirm("Delete this cookbook and all its recipes?")&&(await fetch(`/api/cookbooks/${z}`,{method:"DELETE",credentials:"include"}),E(r,l(r).filter(x=>x.id!==z),!0))}async function f(){await fetch("/api/logout",{method:"POST",credentials:"include"}),t.onLogout()}o();var c=ll(),_=te(c),d=b(_),k=w(b(d),2),p=b(k);Ka(p,{size:18});var y=w(d,2);{var h=z=>{var x=Za(),A=b(x);pn(A,!0);var T=w(A,2),B=b(T),J=w(B,2),re=b(J);R(X=>{J.disabled=X,W(re,l(i)?"…":"Create")},[()=>l(i)||!l(n).trim()]),G("keydown",A,X=>X.key==="Enter"&&a()),ni(A,()=>l(n),X=>E(n,X)),G("click",B,()=>{E(s,!1),E(n,"")}),G("click",J,a),S(z,x)},g=z=>{var x=Qa(),A=b(x);ii(A,{size:18}),G("click",x,()=>E(s,!0)),S(z,x)};Y(y,z=>{l(s)?z(h):z(g,-1)})}var P=w(y,2);{var C=z=>{var x=tl();je(x,20,()=>[1,2,3,4],Me,(A,T)=>{var B=el();S(A,B)}),S(z,x)},m=z=>{var x=rl();S(z,x)},N=z=>{var x=al();je(x,21,()=>l(r),Me,(A,T)=>{var B=ol(),J=b(B),re=b(J);{var X=ce=>{var Ie=nl();R(()=>{nt(Ie,"src",l(T).cover_url),nt(Ie,"alt",l(T).name)}),S(ce,Ie)},ze=ce=>{var Ie=il();S(ce,Ie)};Y(re,ce=>{l(T).cover_url?ce(X):ce(ze,-1)})}var ne=w(re,4);{var ye=ce=>{var Ie=sl();G("click",Ie,ar=>{ar.stopPropagation(),u(l(T).id)}),S(ce,Ie)};Y(ne,ce=>{l(T).is_default||ce(ye)})}var At=w(J,2),ae=b(At),xt=b(ae),Ht=w(ae,2),Sr=b(Ht);R(()=>{W(xt,l(T).name),W(Sr,`${l(T).recipe_count??""} recipe${l(T).recipe_count!==1?"s":""}`)}),G("click",B,()=>t.onNavigate("cookbook",{cookbookId:l(T).id})),G("keydown",B,ce=>ce.key==="Enter"&&t.onNavigate("cookbook",{cookbookId:l(T).id})),S(A,B)}),S(z,x)};Y(P,z=>{l(r)===null?z(C):l(r).length===0?z(m,1):z(N,-1)})}var M=w(_,2);bn(M,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),G("click",k,f),S(e,c),ot()}Ut(["click","keydown"]);var fl=I('<div class="skeleton-card svelte-1fn8ljf"><div class="skeleton-img shimmer svelte-1fn8ljf"></div></div>'),cl=I('<div class="grid svelte-1fn8ljf"></div>'),vl=I('<div class="empty svelte-1fn8ljf"><div class="empty-icon svelte-1fn8ljf">🎬</div> <h2 class="svelte-1fn8ljf">No recipes yet</h2> <p class="svelte-1fn8ljf">Paste a TikTok cooking video link to add your first recipe</p> <button class="btn-primary" style="margin-top:24px">+ Add first recipe</button></div>'),dl=I('<img class="svelte-1fn8ljf"/>'),hl=I('<div class="card-placeholder svelte-1fn8ljf">🍴</div>'),pl=I('<div class="card svelte-1fn8ljf" role="button" tabindex="0"><div class="card-img svelte-1fn8ljf"><!> <div class="card-gradient svelte-1fn8ljf"></div> <div class="card-title-overlay svelte-1fn8ljf"> </div> <button class="card-delete svelte-1fn8ljf">✕</button></div></div>'),_l=I('<div class="grid svelte-1fn8ljf"></div>'),gl=I('<div class="page-with-nav"><div class="top-bar svelte-1fn8ljf"><button class="icon-btn"><!></button> <h1> </h1> <button class="icon-btn accent-btn svelte-1fn8ljf"><!></button></div> <!></div> <!>',1);function bl(e,t){st(t,!0);let r=V(null),n=V(null);async function i(){const[m,N]=await Promise.all([fetch("/api/cookbooks",{credentials:"include"}),fetch(`/api/cookbooks/${t.cookbookId}/recipes`,{credentials:"include"})]),M=await m.json();E(r,M.find(z=>z.id===t.cookbookId),!0),E(n,await N.json(),!0)}async function s(m){confirm("Remove this recipe?")&&(await fetch(`/api/recipes/${m}`,{method:"DELETE",credentials:"include"}),E(n,l(n).filter(N=>N.id!==m),!0))}i();var o=gl(),a=te(o),u=b(a),f=b(u),c=b(f);fn(c,{size:20});var _=w(f,2),d=b(_),k=w(_,2),p=b(k);ii(p,{size:20});var y=w(u,2);{var h=m=>{var N=cl();je(N,20,()=>[1,2,3,4],Me,(M,z)=>{var x=fl();S(M,x)}),S(m,N)},g=m=>{var N=vl(),M=w(b(N),6);G("click",M,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),S(m,N)},P=m=>{var N=_l();je(N,21,()=>l(n),Me,(M,z)=>{var x=pl(),A=b(x),T=b(A);{var B=ne=>{var ye=dl();R(()=>{nt(ye,"src",l(z).thumbnail_url),nt(ye,"alt",l(z).title)}),S(ne,ye)},J=ne=>{var ye=hl();S(ne,ye)};Y(T,ne=>{l(z).thumbnail_url?ne(B):ne(J,-1)})}var re=w(T,4),X=b(re),ze=w(re,2);R(()=>W(X,l(z).title)),G("click",x,()=>t.onNavigate("recipe",{recipeId:l(z).id,cookbookId:t.cookbookId})),G("keydown",x,ne=>ne.key==="Enter"&&t.onNavigate("recipe",{recipeId:l(z).id,cookbookId:t.cookbookId})),G("click",ze,ne=>{ne.stopPropagation(),s(l(z).id)}),S(M,x)}),S(m,N)};Y(y,m=>{l(n)===null?m(h):l(n).length===0?m(g,1):m(P,-1)})}var C=w(a,2);bn(C,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),R(()=>{var m;return W(d,((m=l(r))==null?void 0:m.name)??"")}),G("click",f,()=>t.onNavigate("cookbooks")),G("click",k,()=>t.onNavigate("analyze",{cookbookId:t.cookbookId})),S(e,o),ot()}Ut(["click","keydown"]);var ml=I("<span> </span>"),kl=I('<div class="group-label svelte-1cbd1dz"><!> </div>'),yl=I("<li> </li>"),wl=I("<!> <ul></ul>",1),El=I('<div class="ingredients svelte-1cbd1dz"></div>');function As(e,t){st(t,!0);let r=tt(t,"checked",19,()=>new Set),n=tt(t,"onToggle",3,()=>{});const i=Oe(()=>t.recipe.ingredientGroups??(t.recipe.ingredients?[{group:null,emoji:null,items:t.recipe.ingredients}]:[]));function s(a){return[a.amount,a.unit,a.item].filter(Boolean).join(" ")}var o=El();je(o,21,()=>l(i),Me,(a,u,f)=>{var c=wl(),_=te(c);{var d=y=>{var h=kl(),g=b(h);{var P=m=>{var N=ml(),M=b(N);R(()=>W(M,l(u).emoji)),S(m,N)};Y(g,m=>{l(u).emoji&&m(P)})}var C=w(g);R(()=>W(C,` ${l(u).group??""}`)),S(y,h)};Y(_,y=>{l(u).group&&y(d)})}var k=w(_,2);let p;je(k,21,()=>l(u).items,Me,(y,h,g)=>{const P=Oe(()=>`${f}-${g}`);var C=yl();let m;var N=b(C);R((M,z)=>{m=It(C,1,"svelte-1cbd1dz",null,m,M),W(N,z)},[()=>({checked:r().has(l(P))}),()=>s(l(h))]),G("click",C,()=>n()(l(P))),S(y,C)}),R(()=>p=It(k,1,"svelte-1cbd1dz",null,p,{indented:!!l(u).group})),S(a,c)}),S(e,o),ot()}Ut(["click"]);var Sl=I('<div class="toast svelte-1w29e1y"> </div>');function xs(e,t){st(t,!0);let r=tt(t,"message",3,""),n=tt(t,"show",15,!1);un(()=>{if(n()){const a=setTimeout(()=>{n(!1)},2500);return()=>clearTimeout(a)}});var i=ke(),s=te(i);{var o=a=>{var u=Sl(),f=b(u);R(()=>W(f,r())),S(a,u)};Y(s,a=>{n()&&a(o)})}S(e,i),ot()}var Tl=I('<div class="top-bar"><button class="icon-btn"><!></button></div> <div class="error-banner"> </div>',1),Nl=I('<div class="loading svelte-t09i08"><div class="spinner svelte-t09i08"></div></div>'),zl=I('<img class="hero-img svelte-t09i08"/>'),Il=I('<div class="hero-placeholder svelte-t09i08">🍳</div>'),Al=I('<p class="description svelte-t09i08"> </p>'),xl=I('<span class="pill"><!> </span>'),Pl=I('<span class="pill"><!> </span>'),Cl=I('<span class="pill"><!> </span>'),Ol=I('<a class="source-link svelte-t09i08" target="_blank" rel="noopener"><!> View original TikTok</a>'),$l=I("<option> </option>"),Ml=I('<span class="move-ok svelte-t09i08">Moved ✓</span>'),jl=I('<div class="move-row svelte-t09i08"><span class="move-label svelte-t09i08">📁</span> <select class="move-select svelte-t09i08"></select> <!></div>'),Rl=I('<li><div class="step-num svelte-t09i08"></div> <p class="svelte-t09i08"> </p></li>'),Ll=I('<li class="svelte-t09i08"> </li>'),Dl=I('<div class="divider svelte-t09i08"></div> <section class="svelte-t09i08"><h2 class="section-title svelte-t09i08">Tips</h2> <ul class="tips svelte-t09i08"></ul></section>',1),Fl=I('<div class="hero svelte-t09i08"><!> <div class="hero-gradient svelte-t09i08"></div> <button class="back-btn icon-btn svelte-t09i08"><!></button></div> <div class="content svelte-t09i08"><h1 class="svelte-t09i08"> </h1> <!> <div class="pills svelte-t09i08"><!> <!> <!></div> <!> <!> <div class="divider svelte-t09i08"></div> <section class="svelte-t09i08"><div class="section-header svelte-t09i08"><h2 class="section-title svelte-t09i08">Ingredients</h2> <button class="copy-btn svelte-t09i08"><!> Copy all</button></div> <!></section> <div class="divider svelte-t09i08"></div> <section class="svelte-t09i08"><h2 class="section-title svelte-t09i08">Instructions</h2> <ol class="steps svelte-t09i08"></ol></section> <!></div>',1),Vl=I('<div class="page-with-nav"><!></div> <!> <!>',1);function Ul(e,t){st(t,!0);let r=V(null),n=V(null),i=V(Ue([])),s=V(Ue(t.cookbookId)),o=V(!1),a=V(!1),u=V(!1),f=V(Ue(new Set)),c=V(Ue(new Set));async function _(A,T){await fetch(`/api/recipes/${t.recipeId}/checked`,{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:[...A],steps:[...T]})})}function d(A){const T=new Set(l(f));T.has(A)?T.delete(A):T.add(A),E(f,T,!0),_(T,l(c))}function k(A){const T=new Set(l(c));T.has(A)?T.delete(A):T.add(A),E(c,T,!0),_(l(f),T)}function p(A){const T=A.ingredientGroups??(A.ingredients?[{group:null,items:A.ingredients}]:[]),B=[];for(const J of T){J.group&&B.push(`${J.emoji?J.emoji+" ":""}${J.group}`);for(const re of J.items){const X=[re.amount,re.unit,re.item].filter(Boolean).join(" ");B.push(J.group?`  ${X}`:X)}}navigator.clipboard.writeText(B.join(`
`)),E(u,!0)}async function y(){var A,T;try{const[B,J]=await Promise.all([fetch(`/api/recipes/${t.recipeId}`,{credentials:"include"}),fetch("/api/cookbooks",{credentials:"include"})]);if(!B.ok)throw new Error("Recipe not found");E(r,await B.json(),!0),E(i,await J.json(),!0),E(s,l(r).cookbook_id,!0),E(f,new Set(((A=l(r).checked_json)==null?void 0:A.ingredients)??[]),!0),E(c,new Set(((T=l(r).checked_json)==null?void 0:T.steps)??[]),!0)}catch(B){E(n,B.message,!0)}}async function h(A){if(!(A===l(s)||l(o))){E(o,!0),E(a,!1);try{if(!(await fetch(`/api/recipes/${t.recipeId}/move`,{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({cookbookId:A})})).ok)throw new Error("Move failed");E(s,A,!0),E(a,!0),setTimeout(()=>{E(a,!1)},2e3)}catch{}E(o,!1)}}y();var g=Vl(),P=te(g),C=b(P);{var m=A=>{var T=Tl(),B=te(T),J=b(B),re=b(J);fn(re,{size:20});var X=w(B,2),ze=b(X);R(()=>W(ze,l(n))),G("click",J,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),S(A,T)},N=A=>{var T=Nl();S(A,T)},M=A=>{const T=Oe(()=>l(r).recipe_json);var B=Fl(),J=te(B),re=b(J);{var X=j=>{var D=zl();R(()=>{nt(D,"src",l(r).thumbnail_url),nt(D,"alt",l(T).title)}),S(j,D)},ze=j=>{var D=Il();S(j,D)};Y(re,j=>{l(r).thumbnail_url?j(X):j(ze,-1)})}var ne=w(re,4),ye=b(ne);fn(ye,{size:20});var At=w(J,2),ae=b(At),xt=b(ae),Ht=w(ae,2);{var Sr=j=>{var D=Al(),K=b(D);R(()=>W(K,l(T).description)),S(j,D)};Y(Ht,j=>{l(T).description&&j(Sr)})}var ce=w(Ht,2),Ie=b(ce);{var ar=j=>{var D=xl(),K=b(D);Ja(K,{size:13});var le=w(K);R(()=>W(le,` ${l(T).servings??""}`)),S(j,D)};Y(Ie,j=>{l(T).servings&&j(ar)})}var Kr=w(Ie,2);{var mn=j=>{var D=Pl(),K=b(D);Ha(K,{size:13});var le=w(K);R(()=>W(le,` Prep ${l(T).prepTime??""}`)),S(j,D)};Y(Kr,j=>{l(T).prepTime&&j(mn)})}var kn=w(Kr,2);{var Jr=j=>{var D=Cl(),K=b(D);Wa(K,{size:13});var le=w(K);R(()=>W(le,` Cook ${l(T).cookTime??""}`)),S(j,D)};Y(kn,j=>{l(T).cookTime&&j(Jr)})}var Xr=w(ce,2);{var O=j=>{var D=Ol(),K=b(D);Ba(K,{size:13}),R(()=>nt(D,"href",l(r).source_url)),S(j,D)};Y(Xr,j=>{l(r).source_url&&j(O)})}var q=w(Xr,2);{var ie=j=>{var D=jl(),K=w(b(D),2);je(K,21,()=>l(i),Me,(me,De)=>{var mt=$l(),Tr=b(mt),qt={};R(()=>{W(Tr,l(De).name),qt!==(qt=l(De).id)&&(mt.value=(mt.__value=l(De).id)??"")}),S(me,mt)});var le;ri(K);var ge=w(K,2);{var Je=me=>{var De=Ml();S(me,De)};Y(ge,me=>{l(a)&&me(Je)})}R(()=>{K.disabled=l(o),le!==(le=l(s))&&(K.value=(K.__value=l(s))??"",Rr(K,l(s)))}),G("change",K,me=>h(parseInt(me.target.value))),S(j,D)};Y(q,j=>{l(i).length>1&&j(ie)})}var Le=w(q,4),lt=b(Le),ut=w(b(lt),2),ft=b(ut);qa(ft,{size:14});var Pt=w(lt,2);As(Pt,{get recipe(){return l(T)},get checked(){return l(f)},onToggle:d});var bt=w(Le,4),lr=w(b(bt),2);je(lr,21,()=>l(T).instructions,Me,(j,D,K)=>{var le=Rl();let ge;var Je=b(le);Je.textContent=K+1;var me=w(Je,2),De=b(me);R((mt,Tr)=>{ge=It(le,1,"step svelte-t09i08",null,ge,mt),W(De,Tr)},[()=>({checked:l(c).has(K)}),()=>l(D).replace(/^Step \d+:\s*/i,"")]),G("click",le,()=>k(K)),S(j,le)});var ur=w(bt,2);{var fr=j=>{var D=Dl(),K=w(te(D),2),le=w(b(K),2);je(le,21,()=>l(T).tips,Me,(ge,Je)=>{var me=Ll(),De=b(me);R(()=>W(De,`💡 ${l(Je)??""}`)),S(ge,me)}),S(j,D)};Y(ur,j=>{var D;(D=l(T).tips)!=null&&D.length&&j(fr)})}R(()=>W(xt,l(T).title)),G("click",ne,()=>t.onNavigate("cookbook",{cookbookId:t.cookbookId})),G("click",ut,()=>p(l(T))),S(A,B)};Y(C,A=>{l(n)?A(m):l(r)?A(M,-1):A(N,1)})}var z=w(P,2);xs(z,{message:"Ingredients copied! 📋",get show(){return l(u)},set show(A){E(u,A,!0)}});var x=w(z,2);bn(x,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),S(e,g),ot()}Ut(["click","change"]);var Hl=I('<p class="hint svelte-shp5yz">Please enter a valid TikTok URL</p>'),ql=I('<div class="step-spinner svelte-shp5yz"></div>'),Bl=I("<div><div><!></div> <span> </span> <!></div>"),Wl=I('<div class="progress-card svelte-shp5yz"></div>'),Yl=I('<div class="error-banner"> </div>'),Gl=I('<div class="duplicate-card svelte-shp5yz"><p>⚠️ Already saved as <strong> </strong> in <em> </em></p> <button class="btn-primary" style="margin-top:12px">View saved recipe</button></div>'),Kl=I('<img class="result-thumb svelte-shp5yz"/>'),Jl=I('<p class="result-desc svelte-shp5yz"> </p>'),Xl=I('<span class="pill"> </span>'),Zl=I('<span class="pill"> </span>'),Ql=I('<span class="pill"> </span>'),eu=I('<li class="svelte-shp5yz"><div class="step-num-sm svelte-shp5yz"></div> <p class="svelte-shp5yz"> </p></li>'),tu=I("<option> </option>"),ru=I('<div class="result-card svelte-shp5yz"><!> <div class="result-content svelte-shp5yz"><h2 class="svelte-shp5yz"> </h2> <!> <div class="pills" style="margin:10px 0"><!> <!> <!></div> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Ingredients</h3> <!> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <h3 style="margin-bottom:10px;font-size:0.92rem">Instructions</h3> <ol class="result-steps svelte-shp5yz"></ol> <div class="divider svelte-shp5yz" style="margin:14px 0"></div> <div class="cookbook-row svelte-shp5yz"><span class="cookbook-label svelte-shp5yz">📁 Save to</span> <select class="cookbook-select svelte-shp5yz"></select></div> <div class="result-actions svelte-shp5yz"><button class="btn-primary save-btn svelte-shp5yz"> </button> <button class="btn-ghost">Discard</button></div></div></div>'),nu=I('<div class="page-with-nav"><div class="top-bar svelte-shp5yz"><button class="icon-btn"><!></button> <h1>Add Recipe</h1></div> <div class="body svelte-shp5yz"><div class="input-card svelte-shp5yz"><div class="input-label svelte-shp5yz"><!> TikTok URL</div> <div class="input-row"><input type="url" inputmode="url" placeholder="https://www.tiktok.com/…"/></div> <!> <button class="btn-primary"> </button></div> <!> <!> <!> <!></div></div> <!> <!>',1);function iu(e,t){st(t,!0);let r=V(""),n=V(null),i=V(null),s=V(null),o=V(!1),a=V(null),u=V(!1),f=V(Ue([])),c=V(null);const _=["downloading","extracting","analyzing"],d={downloading:"Downloading video",extracting:"Extracting frames",analyzing:"Analyzing with Claude"};async function k(){try{const O=await fetch("/api/cookbooks",{credentials:"include"});E(f,await O.json(),!0);const q=l(f).find(ie=>ie.is_default);q&&E(c,q.id,!0)}catch{}}k();function p(O){try{const{hostname:q}=new URL(O.trim());return["tiktok.com","www.tiktok.com","vm.tiktok.com","m.tiktok.com"].includes(q)}catch{return!1}}const y=Oe(()=>p(l(r))),h=Oe(()=>l(n)&&l(n)!=="done"&&l(n)!=="duplicate"&&l(n)!=="error");function g(){if(!l(y))return;E(n,"downloading"),E(i,null),E(s,null),E(a,null);const O=new EventSource(`/api/analyze?url=${encodeURIComponent(l(r))}`);O.onmessage=q=>{const ie=JSON.parse(q.data);ie.step==="done"?(E(i,ie,!0),E(n,"done"),O.close()):ie.step==="duplicate"?(E(s,ie,!0),E(n,"duplicate"),O.close()):ie.step==="error"?(E(a,ie.error,!0),E(n,"error"),O.close()):E(n,ie.step,!0)},O.onerror=()=>{E(a,"Connection lost. Please try again."),E(n,"error"),O.close()}}async function P(){if(!(!l(i)||!l(c))){E(o,!0);try{const O=await fetch(`/api/cookbooks/${l(c)}/recipes`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:l(i).recipe.title,sourceUrl:l(i).meta.sourceUrl,thumbnailUrl:l(i).meta.thumbnail,recipeJson:l(i).recipe})});if(!O.ok)throw new Error("Failed to save");const q=await O.json();E(u,!0),setTimeout(()=>t.onNavigate("recipe",{recipeId:q.id,cookbookId:l(c)}),1200)}catch(O){E(a,O.message,!0),E(o,!1)}}}function C(){E(i,null),E(a,null),E(n,null),E(r,""),E(s,null)}var m=nu(),N=te(m),M=b(N),z=b(M),x=b(z);fn(x,{size:20});var A=w(M,2),T=b(A),B=b(T),J=b(B);Ga(J,{size:14});var re=w(B,2),X=b(re);let ze;pn(X,!0);var ne=w(re,2);{var ye=O=>{var q=Hl();S(O,q)},At=Oe(()=>l(r).trim()&&!l(y));Y(ne,O=>{l(At)&&O(ye)})}var ae=w(ne,2),xt=b(ae),Ht=w(T,2);{var Sr=O=>{var q=Wl();je(q,21,()=>_,Me,(ie,Le)=>{const lt=Oe(()=>_.indexOf(l(n))>_.indexOf(l(Le))),ut=Oe(()=>l(n)===l(Le));var ft=Bl();let Pt;var bt=b(ft);let lr;var ur=b(bt);{var fr=ge=>{Ua(ge,{size:16})};Y(ur,ge=>{l(lt)&&ge(fr)})}var j=w(bt,2),D=b(j),K=w(j,2);{var le=ge=>{var Je=ql();S(ge,Je)};Y(K,ge=>{l(ut)&&ge(le)})}R(()=>{Pt=It(ft,1,"step-row svelte-shp5yz",null,Pt,{done:l(lt),active:l(ut)}),lr=It(bt,1,"step-dot svelte-shp5yz",null,lr,{done:l(lt),active:l(ut)}),W(D,d[l(Le)])}),S(ie,ft)}),S(O,q)};Y(Ht,O=>{l(h)&&O(Sr)})}var ce=w(Ht,2);{var Ie=O=>{var q=Yl(),ie=b(q);R(()=>W(ie,l(a))),S(O,q)};Y(ce,O=>{l(a)&&O(Ie)})}var ar=w(ce,2);{var Kr=O=>{var q=Gl(),ie=b(q),Le=w(b(ie)),lt=b(Le),ut=w(Le,2),ft=b(ut),Pt=w(ie,2);R(()=>{W(lt,l(s).title),W(ft,l(s).cookbookName)}),G("click",Pt,()=>t.onNavigate("recipe",{recipeId:l(s).recipeId,cookbookId:l(s).cookbookId})),S(O,q)};Y(ar,O=>{l(s)&&O(Kr)})}var mn=w(ar,2);{var kn=O=>{const q=Oe(()=>l(i).recipe);var ie=ru(),Le=b(ie);{var lt=Z=>{var Q=Kl();R(()=>{nt(Q,"src",l(i).meta.thumbnail),nt(Q,"alt",l(q).title)}),S(Z,Q)};Y(Le,Z=>{var Q;(Q=l(i).meta)!=null&&Q.thumbnail&&Z(lt)})}var ut=w(Le,2),ft=b(ut),Pt=b(ft),bt=w(ft,2);{var lr=Z=>{var Q=Jl(),we=b(Q);R(()=>W(we,l(q).description)),S(Z,Q)};Y(bt,Z=>{l(q).description&&Z(lr)})}var ur=w(bt,2),fr=b(ur);{var j=Z=>{var Q=Xl(),we=b(Q);R(()=>W(we,`🍽 ${l(q).servings??""}`)),S(Z,Q)};Y(fr,Z=>{l(q).servings&&Z(j)})}var D=w(fr,2);{var K=Z=>{var Q=Zl(),we=b(Q);R(()=>W(we,`⏱ ${l(q).prepTime??""}`)),S(Z,Q)};Y(D,Z=>{l(q).prepTime&&Z(K)})}var le=w(D,2);{var ge=Z=>{var Q=Ql(),we=b(Q);R(()=>W(we,`🔥 ${l(q).cookTime??""}`)),S(Z,Q)};Y(le,Z=>{l(q).cookTime&&Z(ge)})}var Je=w(ur,6);As(Je,{get recipe(){return l(q)}});var me=w(Je,6);je(me,21,()=>l(q).instructions,Me,(Z,Q,we)=>{var Zr=eu(),Nr=b(Zr);Nr.textContent=we+1;var Os=w(Nr,2),$s=b(Os);R(Ms=>W($s,Ms),[()=>l(Q).replace(/^Step \d+:\s*/i,"")]),S(Z,Zr)});var De=w(me,4),mt=w(b(De),2);je(mt,21,()=>l(f),Me,(Z,Q)=>{var we=tu(),Zr=b(we),Nr={};R(()=>{W(Zr,l(Q).name),Nr!==(Nr=l(Q).id)&&(we.value=(we.__value=l(Q).id)??"")}),S(Z,we)});var Tr=w(De,2),qt=b(Tr),Ps=b(qt),Cs=w(qt,2);R(()=>{W(Pt,l(q).title),qt.disabled=l(o)||!l(c),W(Ps,l(o)?"Saving…":"✓ Save Recipe")}),Na(mt,()=>l(c),Z=>E(c,Z)),G("click",qt,P),G("click",Cs,C),S(O,ie)};Y(mn,O=>{l(i)&&O(kn)})}var Jr=w(N,2);xs(Jr,{message:"Recipe saved! 🎉",get show(){return l(u)},set show(O){E(u,O,!0)}});var Xr=w(Jr,2);bn(Xr,{get route(){return t.route},get onNavigate(){return t.onNavigate}}),R(O=>{ze=It(X,1,"input",null,ze,O),X.disabled=l(h),ae.disabled=l(h)||!l(y),W(xt,l(h)?"Analyzing…":"Analyze Video")},[()=>({invalid:l(r).trim()&&!l(y)})]),G("click",z,()=>t.onNavigate("cookbooks")),G("keydown",X,O=>O.key==="Enter"&&g()),ni(X,()=>l(r),O=>E(r,O)),G("click",ae,g),S(e,m),ot()}Ut(["click","keydown"]);function su(e,t){st(t,!0);let r=V(void 0);function n(){const h=new URLSearchParams(window.location.search);return{page:h.get("page")||"cookbooks",cookbookId:h.get("cookbookId")?parseInt(h.get("cookbookId")):null,recipeId:h.get("recipeId")?parseInt(h.get("recipeId")):null}}let i=V(Ue(n()));function s(h,g={}){if(h==="cookbooks")history.pushState({},"","/");else{const P=new URLSearchParams({page:h,...o(g)});history.pushState({},"",`?${P}`)}E(i,n(),!0)}function o(h){return Object.fromEntries(Object.entries(h).filter(([,g])=>g!=null))}un(()=>{function h(){E(i,n(),!0)}return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)});async function a(){const g=await(await fetch("/api/me",{credentials:"include"})).json();E(r,g.userId||null,!0)}a();var u=ke(),f=te(u);{var c=h=>{},_=h=>{Ra(h,{onLogin:g=>{E(r,g,!0),s("cookbooks")}})},d=h=>{ul(h,{get userId(){return l(r)},get route(){return l(i)},onNavigate:s,onLogout:()=>{E(r,null)}})},k=h=>{bl(h,{get cookbookId(){return l(i).cookbookId},get route(){return l(i)},onNavigate:s})},p=h=>{Ul(h,{get recipeId(){return l(i).recipeId},get cookbookId(){return l(i).cookbookId},get route(){return l(i)},onNavigate:s})},y=h=>{iu(h,{get route(){return l(i)},onNavigate:s})};Y(f,h=>{l(r)===void 0?h(c):l(r)?l(i).page==="cookbooks"?h(d,2):l(i).page==="cookbook"?h(k,3):l(i).page==="recipe"?h(p,4):l(i).page==="analyze"&&h(y,5):h(_,1)})}S(e,u),ot()}da(su,{target:document.getElementById("app")});
