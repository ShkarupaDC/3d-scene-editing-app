(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ut={};function Hc(r){ut.context=r}const Wc=(r,e)=>r===e,tn=Symbol("solid-proxy"),so=Symbol("solid-track"),Xc=Symbol("solid-dev-component"),Hr={equals:Wc};let Il=Wl;const wn=1,Wr=2,Nl={owned:null,cleanups:null,context:null,owner:null};var qe=null;let Kn=null,Ve=null,yt=null,yn=null,Qr=0;function Ur(r,e){const t=Ve,n=qe,i=r.length===0,s=i?Nl:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=i?r:()=>r(()=>Xt(()=>es(s)));qe=s,Ve=null;try{return In(o,!0)}finally{Ve=t,qe=n}}function Ft(r,e){e=e?Object.assign({},Hr,e):Hr;const t={value:r,observers:null,observerSlots:null,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.value)),Hl(t,i));return[Vl.bind(t),n]}function qc(r,e,t){const n=Jr(r,e,!0,wn);Oi(n)}function Jt(r,e,t){const n=Jr(r,e,!1,wn);Oi(n)}function Fl(r,e,t){Il=Kc;const n=Jr(r,e,!1,wn);n.user=!0,yn?yn.push(n):Oi(n)}function Me(r,e,t){t=t?Object.assign({},Hr,t):Hr;const n=Jr(r,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,Oi(n),Vl.bind(n)}function rn(r){return In(r,!1)}function Xt(r){if(Ve===null)return r();const e=Ve;Ve=null;try{return r()}finally{Ve=e}}function Ol(r,e,t){const n=Array.isArray(r);let i,s=t&&t.defer;return o=>{let a;if(n){a=Array(r.length);for(let l=0;l<r.length;l++)a[l]=r[l]()}else a=r();if(s){s=!1;return}const c=Xt(()=>e(a,i,o));return i=a,c}}function zl(r){Fl(()=>Xt(r))}function yo(r){return qe===null||(qe.cleanups===null?qe.cleanups=[r]:qe.cleanups.push(r)),r}function Ul(){return Ve}function kl(){return qe}function Bl(r,e){const t=qe,n=Ve;qe=r,Ve=null;try{return In(e,!0)}catch(i){bo(i)}finally{qe=t,Ve=n}}function jc(r){const e=Ve,t=qe;return Promise.resolve().then(()=>{Ve=e,qe=t;let n;return In(r,!1),Ve=qe=null,n?n.done:void 0})}function Mo(r,e){const t=Symbol("context");return{id:t,Provider:Jc(t),defaultValue:r}}function Gl(r){let e;return(e=ql(qe,r.id))!==void 0?e:r.defaultValue}function $c(r){const e=Me(r),t=Me(()=>oo(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function Vl(){const r=Kn;if(this.sources&&(this.state||r))if(this.state===wn||r)Oi(this);else{const e=yt;yt=null,In(()=>qr(this),!1),yt=e}if(Ve){const e=this.observers?this.observers.length:0;Ve.sources?(Ve.sources.push(this),Ve.sourceSlots.push(e)):(Ve.sources=[this],Ve.sourceSlots=[e]),this.observers?(this.observers.push(Ve),this.observerSlots.push(Ve.sources.length-1)):(this.observers=[Ve],this.observerSlots=[Ve.sources.length-1])}return this.value}function Hl(r,e,t){let n=r.value;return(!r.comparator||!r.comparator(n,e))&&(r.value=e,r.observers&&r.observers.length&&In(()=>{for(let i=0;i<r.observers.length;i+=1){const s=r.observers[i],o=Kn&&Kn.running;o&&Kn.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?yt.push(s):yn.push(s),s.observers&&Xl(s)),o||(s.state=wn)}if(yt.length>1e6)throw yt=[],new Error},!1)),e}function Oi(r){if(!r.fn)return;es(r);const e=qe,t=Ve,n=Qr;Ve=qe=r,Yc(r,r.value,n),Ve=t,qe=e}function Yc(r,e,t){let n;try{n=r.fn(e)}catch(i){return r.pure&&(r.state=wn,r.owned&&r.owned.forEach(es),r.owned=null),r.updatedAt=t+1,bo(i)}(!r.updatedAt||r.updatedAt<=t)&&(r.updatedAt!=null&&"observers"in r?Hl(r,n):r.value=n,r.updatedAt=t)}function Jr(r,e,t,n=wn,i){const s={fn:r,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:qe,context:null,pure:t};return qe===null||qe!==Nl&&(qe.owned?qe.owned.push(s):qe.owned=[s]),s}function Xr(r){const e=Kn;if(r.state===0||e)return;if(r.state===Wr||e)return qr(r);if(r.suspense&&Xt(r.suspense.inFallback))return r.suspense.effects.push(r);const t=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<Qr);)(r.state||e)&&t.push(r);for(let n=t.length-1;n>=0;n--)if(r=t[n],r.state===wn||e)Oi(r);else if(r.state===Wr||e){const i=yt;yt=null,In(()=>qr(r,t[0]),!1),yt=i}}function In(r,e){if(yt)return r();let t=!1;e||(yt=[]),yn?t=!0:yn=[],Qr++;try{const n=r();return Zc(t),n}catch(n){t||(yn=null),yt=null,bo(n)}}function Zc(r){if(yt&&(Wl(yt),yt=null),r)return;const e=yn;yn=null,e.length&&In(()=>Il(e),!1)}function Wl(r){for(let e=0;e<r.length;e++)Xr(r[e])}function Kc(r){let e,t=0;for(e=0;e<r.length;e++){const n=r[e];n.user?r[t++]=n:Xr(n)}for(ut.context&&Hc(),e=0;e<t;e++)Xr(r[e])}function qr(r,e){const t=Kn;r.state=0;for(let n=0;n<r.sources.length;n+=1){const i=r.sources[n];i.sources&&(i.state===wn||t?i!==e&&(!i.updatedAt||i.updatedAt<Qr)&&Xr(i):(i.state===Wr||t)&&qr(i,e))}}function Xl(r){const e=Kn;for(let t=0;t<r.observers.length;t+=1){const n=r.observers[t];(!n.state||e)&&(n.state=Wr,n.pure?yt.push(n):yn.push(n),n.observers&&Xl(n))}}function es(r){let e;if(r.sources)for(;r.sources.length;){const t=r.sources.pop(),n=r.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();n<i.length&&(s.sourceSlots[o]=n,i[n]=s,t.observerSlots[n]=o)}}if(r.owned){for(e=0;e<r.owned.length;e++)es(r.owned[e]);r.owned=null}if(r.cleanups){for(e=0;e<r.cleanups.length;e++)r.cleanups[e]();r.cleanups=null}r.state=0,r.context=null}function Qc(r){return r instanceof Error||typeof r=="string"?r:new Error("Unknown error")}function bo(r){throw r=Qc(r),r}function ql(r,e){return r?r.context&&r.context[e]!==void 0?r.context[e]:ql(r.owner,e):void 0}function oo(r){if(typeof r=="function"&&!r.length)return oo(r());if(Array.isArray(r)){const e=[];for(let t=0;t<r.length;t++){const n=oo(r[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return r}function Jc(r,e){return function(n){let i;return Jt(()=>i=Xt(()=>(qe.context={[r]:n.value},$c(()=>n.children))),void 0),i}}const eu=Symbol("fallback");function ko(r){for(let e=0;e<r.length;e++)r[e]()}function tu(r,e,t={}){let n=[],i=[],s=[],o=0,a=e.length>1?[]:null;return yo(()=>ko(s)),()=>{let c=r()||[],l,u;return c[so],Xt(()=>{let d=c.length,m,y,p,f,x,g,_,v,b;if(d===0)o!==0&&(ko(s),s=[],n=[],i=[],o=0,a&&(a=[])),t.fallback&&(n=[eu],i[0]=Ur(T=>(s[0]=T,t.fallback())),o=1);else if(o===0){for(i=new Array(d),u=0;u<d;u++)n[u]=c[u],i[u]=Ur(h);o=d}else{for(p=new Array(d),f=new Array(d),a&&(x=new Array(d)),g=0,_=Math.min(o,d);g<_&&n[g]===c[g];g++);for(_=o-1,v=d-1;_>=g&&v>=g&&n[_]===c[v];_--,v--)p[v]=i[_],f[v]=s[_],a&&(x[v]=a[_]);for(m=new Map,y=new Array(v+1),u=v;u>=g;u--)b=c[u],l=m.get(b),y[u]=l===void 0?-1:l,m.set(b,u);for(l=g;l<=_;l++)b=n[l],u=m.get(b),u!==void 0&&u!==-1?(p[u]=i[l],f[u]=s[l],a&&(x[u]=a[l]),u=y[u],m.set(b,u)):s[l]();for(u=g;u<d;u++)u in p?(i[u]=p[u],s[u]=f[u],a&&(a[u]=x[u],a[u](u))):i[u]=Ur(h);i=i.slice(0,o=d),n=c.slice(0)}return i});function h(d){if(s[u]=d,a){const[m,y]=Ft(u);return a[u]=y,e(c[u],m)}return e(c[u])}}}function J(r,e){return Xt(()=>r(e||{}))}function cr(){return!0}const ao={get(r,e,t){return e===tn?t:r.get(e)},has(r,e){return e===tn?!0:r.has(e)},set:cr,deleteProperty:cr,getOwnPropertyDescriptor(r,e){return{configurable:!0,enumerable:!0,get(){return r.get(e)},set:cr,deleteProperty:cr}},ownKeys(r){return r.keys()}};function gs(r){return(r=typeof r=="function"?r():r)?r:{}}function en(...r){let e=!1;for(let n=0;n<r.length;n++){const i=r[n];e=e||!!i&&tn in i,r[n]=typeof i=="function"?(e=!0,Me(i)):i}if(e)return new Proxy({get(n){for(let i=r.length-1;i>=0;i--){const s=gs(r[i])[n];if(s!==void 0)return s}},has(n){for(let i=r.length-1;i>=0;i--)if(n in gs(r[i]))return!0;return!1},keys(){const n=[];for(let i=0;i<r.length;i++)n.push(...Object.keys(gs(r[i])));return[...new Set(n)]}},ao);const t={};for(let n=r.length-1;n>=0;n--)if(r[n]){const i=Object.getOwnPropertyDescriptors(r[n]);for(const s in i)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=r.length-1;o>=0;o--){const a=(r[o]||{})[s];if(a!==void 0)return a}}})}return t}function ts(r,...e){const t=new Set(e.flat());if(tn in r){const i=e.map(s=>new Proxy({get(o){return s.includes(o)?r[o]:void 0},has(o){return s.includes(o)&&o in r},keys(){return s.filter(o=>o in r)}},ao));return i.push(new Proxy({get(s){return t.has(s)?void 0:r[s]},has(s){return t.has(s)?!1:s in r},keys(){return Object.keys(r).filter(s=>!t.has(s))}},ao)),i}const n=Object.getOwnPropertyDescriptors(r);return e.push(Object.keys(n).filter(i=>!t.has(i))),e.map(i=>{const s={};for(let o=0;o<i.length;o++){const a=i[o];a in r&&Object.defineProperty(s,a,n[a]?n[a]:{get(){return r[a]},set(){return!0},enumerable:!0})}return s})}function nu(r){const e="fallback"in r&&{fallback:()=>r.fallback};return Me(tu(()=>r.each,r.children,e||void 0))}function So(r){let e=!1;const t=r.keyed,n=Me(()=>r.when,void 0,{equals:(i,s)=>e?i===s:!i==!s});return Me(()=>{const i=n();if(i){const s=r.children,o=typeof s=="function"&&s.length>0;return e=t||o,o?Xt(()=>s(i)):s}return r.fallback},void 0,void 0)}const iu=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ru=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...iu]),su=new Set(["innerHTML","textContent","innerText","children"]),ou=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Bo=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),au=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),lu=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),cu={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function uu(r,e,t){let n=t.length,i=e.length,s=n,o=0,a=0,c=e[i-1].nextSibling,l=null;for(;o<i||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===o){const u=s<n?a?t[a-1].nextSibling:t[s-a]:c;for(;a<s;)r.insertBefore(t[a++],u)}else if(s===a)for(;o<i;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[i-1]){const u=e[--i].nextSibling;r.insertBefore(t[a++],e[o++].nextSibling),r.insertBefore(t[--s],u),e[i]=t[s]}else{if(!l){l=new Map;let h=a;for(;h<s;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<s){let h=o,d=1,m;for(;++h<i&&h<s&&!((m=l.get(e[h]))==null||m!==u+d);)d++;if(d>u-a){const y=e[o];for(;a<u;)r.insertBefore(t[a++],y)}else r.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Go="_$DX_DELEGATE";function hu(r,e,t,n={}){let i;return Ur(s=>{i=s,e===document?r():Qe(e,r(),e.firstChild?null:void 0,t)},n.owner),()=>{i(),e.textContent=""}}function qt(r,e,t){const n=document.createElement("template");if(n.innerHTML=r,e&&n.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${n.innerHTML}

${r}. Is your HTML properly formed?`;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function wo(r,e=window.document){const t=e[Go]||(e[Go]=new Set);for(let n=0,i=r.length;n<i;n++){const s=r[n];t.has(s)||(t.add(s),e.addEventListener(s,yu))}}function Sn(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)}function du(r,e,t,n){n==null?r.removeAttributeNS(e,t):r.setAttributeNS(e,t,n)}function fu(r,e){e==null?r.removeAttribute("class"):r.className=e}function pu(r,e,t,n){if(n)Array.isArray(t)?(r[`$$${e}`]=t[0],r[`$$${e}Data`]=t[1]):r[`$$${e}`]=t;else if(Array.isArray(t)){const i=t[0];r.addEventListener(e,t[0]=s=>i.call(r,t[1],s))}else r.addEventListener(e,t)}function mu(r,e,t={}){const n=Object.keys(e||{}),i=Object.keys(t);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||e[a]||(Vo(r,a,!1),delete t[a])}for(s=0,o=n.length;s<o;s++){const a=n[s],c=!!e[a];!a||a==="undefined"||t[a]===c||!c||(Vo(r,a,!0),t[a]=c)}return t}function gu(r,e,t){if(!e)return t?Sn(r,"style"):e;const n=r.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let i,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)i=e[s],i!==t[s]&&(n.setProperty(s,i),t[s]=i);return t}function Eo(r,e={},t,n){const i={};return n||Jt(()=>i.children=Ci(r,e.children,i.children)),Jt(()=>e.ref&&e.ref(r)),Jt(()=>_u(r,e,t,!0,i,!0)),i}function Qe(r,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Ci(r,e,n,t);Jt(i=>Ci(r,e(),i,t),n)}function _u(r,e,t,n,i={},s=!1){e||(e={});for(const o in i)if(!(o in e)){if(o==="children")continue;i[o]=Ho(r,o,null,i[o],t,s)}for(const o in e){if(o==="children"){n||Ci(r,e.children);continue}const a=e[o];i[o]=Ho(r,o,a,i[o],t,s)}}function xu(r){let e,t;if(!ut.context||!(e=ut.registry.get(t=Mu()))){if(ut.context&&console.warn("Unable to find DOM nodes for hydration key:",t),!r)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+t);return r.cloneNode(!0)}return ut.completed&&ut.completed.add(e),ut.registry.delete(t),e}function vu(r){return r.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Vo(r,e,t){const n=e.trim().split(/\s+/);for(let i=0,s=n.length;i<s;i++)r.classList.toggle(n[i],t)}function Ho(r,e,t,n,i,s){let o,a,c;if(e==="style")return gu(r,t,n);if(e==="classList")return mu(r,t,n);if(t===n)return n;if(e==="ref")s||t(r);else if(e.slice(0,3)==="on:"){const l=e.slice(3);n&&r.removeEventListener(l,n),t&&r.addEventListener(l,t)}else if(e.slice(0,10)==="oncapture:"){const l=e.slice(10);n&&r.removeEventListener(l,n,!0),t&&r.addEventListener(l,t,!0)}else if(e.slice(0,2)==="on"){const l=e.slice(2).toLowerCase(),u=au.has(l);if(!u&&n){const h=Array.isArray(n)?n[0]:n;r.removeEventListener(l,h)}(u||t)&&(pu(r,l,t,u),u&&wo([l]))}else if((c=su.has(e))||!i&&(Bo[e]||(a=ru.has(e)))||(o=r.nodeName.includes("-")))e==="class"||e==="className"?fu(r,t):o&&!a&&!c?r[vu(e)]=t:r[Bo[e]||e]=t;else{const l=i&&e.indexOf(":")>-1&&cu[e.split(":")[0]];l?du(r,l,e,t):Sn(r,ou[e]||e,t)}return t}function yu(r){const e=`$$${r.type}`;let t=r.composedPath&&r.composedPath()[0]||r.target;for(r.target!==t&&Object.defineProperty(r,"target",{configurable:!0,value:t}),Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return t||document}}),ut.registry&&!ut.done&&(ut.done=_$HY.done=!0);t;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n.call(t,i,r):n.call(t,r),r.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ci(r,e,t,n,i){for(ut.context&&!t&&(t=[...r.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(r=o&&t[0]&&t[0].parentNode||r,s==="string"||s==="number"){if(ut.context)return t;if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=oi(r,t,n,a)}else t!==""&&typeof t=="string"?t=r.firstChild.data=e:t=r.textContent=e}else if(e==null||s==="boolean"){if(ut.context)return t;t=oi(r,t,n)}else{if(s==="function")return Jt(()=>{let a=e();for(;typeof a=="function";)a=a();t=Ci(r,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],c=t&&Array.isArray(t);if(lo(a,e,t,i))return Jt(()=>t=Ci(r,a,t,n,!0)),()=>t;if(ut.context){if(!a.length)return t;for(let l=0;l<a.length;l++)if(a[l].parentNode)return t=a}if(a.length===0){if(t=oi(r,t,n),o)return t}else c?t.length===0?Wo(r,a,n):uu(r,t,a):(t&&oi(r),Wo(r,a));t=a}else if(e instanceof Node){if(ut.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=oi(r,t,n,e);oi(r,t,null,e)}else t==null||t===""||!r.firstChild?r.appendChild(e):r.replaceChild(e,r.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function lo(r,e,t,n){let i=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],c=t&&t[s];if(a instanceof Node)r.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))i=lo(r,a,c)||i;else if(typeof a=="function")if(n){for(;typeof a=="function";)a=a();i=lo(r,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||i}else r.push(a),i=!0;else{const l=String(a);l==="<!>"?c&&c.nodeType===8&&r.push(c):c&&c.nodeType===3&&c.data===l?r.push(c):r.push(document.createTextNode(l))}}return i}function Wo(r,e,t=null){for(let n=0,i=e.length;n<i;n++)r.insertBefore(e[n],t)}function oi(r,e,t,n){if(t===void 0)return r.textContent="";const i=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const c=a.parentNode===r;!s&&!o?c?r.replaceChild(i,a):r.insertBefore(i,t):c&&a.remove()}else s=!0}}else r.insertBefore(i,t);return[i]}function Mu(){const r=ut.context;return`${r.id}${r.count++}`}const bu=!1,Su="http://www.w3.org/2000/svg";function wu(r,e=!1){return e?document.createElementNS(Su,r):document.createElement(r)}function Eu(r){const[e,t]=ts(r,["component"]),n=Me(()=>e.component);return Me(()=>{const i=n();switch(typeof i){case"function":return Object.assign(i,{[Xc]:!0}),Xt(()=>i(t));case"string":const s=lu.has(i),o=ut.context?xu():wu(i,s);return Eo(o,t,s),o}})}function jl(r,e,t){return r.addEventListener(e,t),()=>r.removeEventListener(e,t)}function Tu([r,e],t,n){return[t?()=>t(r()):r,n?i=>e(n(i)):e]}function Au(r){try{return document.querySelector(r)}catch{return null}}function $l(r,e){const t=Au(`#${r}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function Yl(r,e,t,n){let i=!1;const s=a=>typeof a=="string"?{value:a}:a,o=Tu(Ft(s(r()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!i&&e(a),a));return t&&yo(t((a=r())=>{i=!0,o[1](s(a)),i=!1})),{signal:o,utils:n}}function Cu(r){if(r){if(Array.isArray(r))return{signal:r}}else return{signal:Ft({value:""})};return r}function Pu(){return Yl(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:r,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",r):window.history.pushState(n,"",r),$l(window.location.hash.slice(1),t)},r=>jl(window,"popstate",()=>r()),{go:r=>window.history.go(r)})}function Lu(){return Yl(()=>window.location.hash.slice(1),({value:r,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"","#"+r):window.location.hash=r;const i=r.indexOf("#"),s=i>=0?r.slice(i+1):"";$l(s,t)},r=>jl(window,"hashchange",()=>r()),{go:r=>window.history.go(r),renderPath:r=>`#${r}`,parsePath:r=>{const e=r.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}})}function Du(){let r=new Set;function e(i){return r.add(i),()=>r.delete(i)}let t=!1;function n(i,s){if(t)return!(t=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of r)a.listener({...o,from:a.location,retry:c=>{c&&(t=!0),a.navigate(i,s)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const Ru=/^(?:[a-z0-9]+:)?\/\//i,Iu=/^\/+|\/+$/g;function _s(r,e=!1){const t=r.replace(Iu,"");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function xs(r,e,t){if(Ru.test(e))return;const n=_s(r),i=t&&_s(t);let s="";return!i||e.startsWith("/")?s=n:i.toLowerCase().indexOf(n.toLowerCase())!==0?s=n+i:s=i,(s||"/")+_s(e,!s)}function Nu(r){const e={};return r.searchParams.forEach((t,n)=>{e[n]=t}),e}function Fu(r){const e=new Map,t=kl();return new Proxy({},{get(n,i){return e.has(i)||Bl(t,()=>e.set(i,Me(()=>r()[i]))),e.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(r())}})}const Ou=100,zu=Mo(),Uu=Mo();let Xo;function ku(r,e){const t=new URL("http://sar"),n=Me(c=>{const l=r();try{return new URL(l,t)}catch{return console.error(`Invalid path ${l}`),c}},t,{equals:(c,l)=>c.href===l.href}),i=Me(()=>n().pathname),s=Me(()=>n().search,!0),o=Me(()=>n().hash),a=Me(()=>"");return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return a()},query:Fu(Ol(s,()=>Nu(n())))}}function Bu(r,e="",t,n){const{signal:[i,s],utils:o={}}=Cu(r),a=o.parsePath||(S=>S),c=o.renderPath||(S=>S),l=o.beforeLeave||Du(),u=xs("",e),h=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!i().value&&s({value:u,replace:!0,scroll:!1});const[d,m]=Ft(!1),y=async S=>{m(!0);try{await jc(S)}finally{m(!1)}},[p,f]=Ft(i().value),[x,g]=Ft(i().state),_=ku(p,x),v=[],b={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(S){return xs(u,S)}};if(t)try{Xo=b,b.data=t({data:void 0,params:{},location:_,navigate:L(b)})}finally{Xo=void 0}function T(S,P,U){Xt(()=>{if(typeof P=="number"){P&&(o.go?l.confirm(P,U)&&o.go(P):console.warn("Router integration does not support relative routing"));return}const{replace:F,resolve:R,scroll:A,state:O}={replace:!1,resolve:!0,scroll:!0,...U},j=R?S.resolvePath(P):xs("",P);if(j===void 0)throw new Error(`Path '${P}' is not a routable path`);if(v.length>=Ou)throw new Error("Too many redirects");const Y=p();if((j!==Y||O!==x())&&!bu){if(l.confirm(j,U)){const q=v.push({value:Y,replace:F,scroll:A,state:x()});y(()=>{f(j),g(O)}).then(()=>{v.length===q&&M({value:j,state:O})})}}})}function L(S){return S=S||Gl(Uu)||b,(P,U)=>T(S,P,U)}function M(S){const P=v[0];P&&((S.value!==P.value||S.state!==P.state)&&s({...S,replace:P.replace,scroll:P.scroll}),v.length=0)}Jt(()=>{const{value:S,state:P}=i();Xt(()=>{S!==p()&&y(()=>{f(S),g(P)})})});{let S=function(P){if(P.defaultPrevented||P.button!==0||P.metaKey||P.altKey||P.ctrlKey||P.shiftKey)return;const U=P.composedPath().find(Y=>Y instanceof Node&&Y.nodeName.toUpperCase()==="A");if(!U||!U.hasAttribute("link"))return;const F=U.href;if(U.target||!F&&!U.hasAttribute("state"))return;const R=(U.getAttribute("rel")||"").split(/\s+/);if(U.hasAttribute("download")||R&&R.includes("external"))return;const A=new URL(F);if(A.origin!==window.location.origin||u&&A.pathname&&!A.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const O=a(A.pathname+A.search+A.hash),j=U.getAttribute("state");P.preventDefault(),T(b,O,{resolve:!1,replace:U.hasAttribute("replace"),scroll:!U.hasAttribute("noscroll"),state:j&&JSON.parse(j)})};wo(["click"]),document.addEventListener("click",S),yo(()=>document.removeEventListener("click",S))}return{base:b,out:h,location:_,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:L,beforeLeave:l}}const Gu=r=>{const{source:e,url:t,base:n,data:i,out:s}=r,o=e||Pu(),a=Bu(o,n,i);return J(zu.Provider,{value:a,get children(){return r.children}})};let Vu={data:""},Hu=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Vu,Wu=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Xu=/\/\*[^]*?\*\/|  +/g,qo=/\n+/g,qn=(r,e)=>{let t="",n="",i="";for(let s in r){let o=r[s];s[0]=="@"?s[1]=="i"?t=s+" "+o+";":n+=s[1]=="f"?qn(o,s):s+"{"+qn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?n+=qn(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=qn.p?qn.p(s,o):s+":"+o+";")}return t+(e&&i?e+"{"+i+"}":i)+n},hn={},Zl=r=>{if(typeof r=="object"){let e="";for(let t in r)e+=t+Zl(r[t]);return e}return r},qu=(r,e,t,n,i)=>{let s=Zl(r),o=hn[s]||(hn[s]=(c=>{let l=0,u=11;for(;l<c.length;)u=101*u+c.charCodeAt(l++)>>>0;return"go"+u})(s));if(!hn[o]){let c=s!==r?r:(l=>{let u,h,d=[{}];for(;u=Wu.exec(l.replace(Xu,""));)u[4]?d.shift():u[3]?(h=u[3].replace(qo," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][u[1]]=u[2].replace(qo," ").trim();return d[0]})(r);hn[o]=qn(i?{["@keyframes "+o]:c}:c,t?"":"."+o)}let a=t&&hn.g?hn.g:null;return t&&(hn.g=hn[o]),((c,l,u,h)=>{h?l.data=l.data.replace(h,c):l.data.indexOf(c)===-1&&(l.data=u?c+l.data:l.data+c)})(hn[o],e,n,a),o},ju=(r,e,t)=>r.reduce((n,i,s)=>{let o=e[s];if(o&&o.call){let a=o(t),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":qn(a,""):a===!1?"":a}return n+i+(o??"")},"");function jr(r){let e=this||{},t=r.call?r(e.p):r;return qu(t.unshift?t.raw?ju(t,[].slice.call(arguments,1),e.p):t.reduce((n,i)=>Object.assign(n,i&&i.call?i(e.p):i),{}):t,Hu(e.target),e.g,e.o,e.k)}jr.bind({g:1});jr.bind({k:1});const $u=Mo();function Kl(r){let e=this||{};return(...t)=>{const n=i=>{const s=Gl($u),o=en(i,{theme:s}),a=en(o,{get class(){const m=o.class,y="class"in o&&/^go[0-9]+/.test(m);let p=jr.apply({target:e.target,o:y,p:o,g:e.g},t);return[m,p].filter(Boolean).join(" ")}}),[c,l]=ts(a,["as","theme"]),u=l,h=c.as||r;let d;return typeof h=="function"?d=h(u):e.g==1?(d=document.createElement(h),Eo(d,u)):d=Eu(en({component:h},u)),d};return n.class=i=>Xt(()=>jr.apply({target:e.target,p:i,g:e.g},t)),n}}const We=new Proxy(Kl,{get(r,e){return r(e)}});function Yu(){const r=Kl.call({g:1},"div").apply(null,arguments);return function(t){return r(t),null}}const $r=Symbol("store-raw"),ir=Symbol("store-node"),Zu=Symbol("store-name");function Ql(r,e){let t=r[tn];if(!t&&(Object.defineProperty(r,tn,{value:t=new Proxy(r,Ju)}),!Array.isArray(r))){const n=Object.keys(r),i=Object.getOwnPropertyDescriptors(r);for(let s=0,o=n.length;s<o;s++){const a=n[s];i[a].get&&Object.defineProperty(r,a,{enumerable:i[a].enumerable,get:i[a].get.bind(t)})}}return t}function Pi(r){let e;return r!=null&&typeof r=="object"&&(r[tn]||!(e=Object.getPrototypeOf(r))||e===Object.prototype||Array.isArray(r))}function Li(r,e=new Set){let t,n,i,s;if(t=r!=null&&r[$r])return t;if(!Pi(r)||e.has(r))return r;if(Array.isArray(r)){Object.isFrozen(r)?r=r.slice(0):e.add(r);for(let o=0,a=r.length;o<a;o++)i=r[o],(n=Li(i,e))!==i&&(r[o]=n)}else{Object.isFrozen(r)?r=Object.assign({},r):e.add(r);const o=Object.keys(r),a=Object.getOwnPropertyDescriptors(r);for(let c=0,l=o.length;c<l;c++)s=o[c],!a[s].get&&(i=r[s],(n=Li(i,e))!==i&&(r[s]=n))}return r}function To(r){let e=r[ir];return e||Object.defineProperty(r,ir,{value:e={}}),e}function co(r,e,t){return r[e]||(r[e]=ec(t))}function Ku(r,e){const t=Reflect.getOwnPropertyDescriptor(r,e);return!t||t.get||!t.configurable||e===tn||e===ir||e===Zu||(delete t.value,delete t.writable,t.get=()=>r[tn][e]),t}function Jl(r){if(Ul()){const e=To(r);(e._||(e._=ec()))()}}function Qu(r){return Jl(r),Reflect.ownKeys(r)}function ec(r){const[e,t]=Ft(r,{equals:!1,internal:!0});return e.$=t,e}const Ju={get(r,e,t){if(e===$r)return r;if(e===tn)return t;if(e===so)return Jl(r),t;const n=To(r),i=n.hasOwnProperty(e);let s=i?n[e]():r[e];if(e===ir||e==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(r,e);Ul()&&(typeof s!="function"||r.hasOwnProperty(e))&&!(o&&o.get)&&(s=co(n,e,s)())}return Pi(s)?Ql(s):s},has(r,e){return e===$r||e===tn||e===so||e===ir||e==="__proto__"?!0:(this.get(r,e,r),e in r)},set(){return!0},deleteProperty(){return!0},ownKeys:Qu,getOwnPropertyDescriptor:Ku};function Di(r,e,t,n=!1){if(!n&&r[e]===t)return;const i=r[e],s=r.length;t===void 0?delete r[e]:r[e]=t;let o=To(r),a;(a=co(o,e,i))&&a.$(()=>t),Array.isArray(r)&&r.length!==s&&(a=co(o,"length",s))&&a.$(r.length),(a=o._)&&a.$()}function tc(r,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const i=t[n];Di(r,i,e[i])}}function eh(r,e){if(typeof e=="function"&&(e=e(r)),e=Li(e),Array.isArray(e)){if(r===e)return;let t=0,n=e.length;for(;t<n;t++){const i=e[t];r[t]!==i&&Di(r,t,i)}Di(r,"length",n)}else tc(r,e)}function Qi(r,e,t=[]){let n,i=r;if(e.length>1){n=e.shift();const o=typeof n,a=Array.isArray(r);if(Array.isArray(n)){for(let c=0;c<n.length;c++)Qi(r,[n[c]].concat(e),t);return}else if(a&&o==="function"){for(let c=0;c<r.length;c++)n(r[c],c)&&Qi(r,[c].concat(e),t);return}else if(a&&o==="object"){const{from:c=0,to:l=r.length-1,by:u=1}=n;for(let h=c;h<=l;h+=u)Qi(r,[h].concat(e),t);return}else if(e.length>1){Qi(r[n],e,[n].concat(t));return}i=r[n],t=[n].concat(t)}let s=e[0];typeof s=="function"&&(s=s(i,t),s===i)||n===void 0&&s==null||(s=Li(s),n===void 0||Pi(i)&&Pi(s)&&!Array.isArray(s)?tc(i,s):Di(r,n,s))}function Ao(...[r,e]){const t=Li(r||{}),n=Array.isArray(t),i=Ql(t);function s(...o){rn(()=>{n&&o.length===1?eh(t,o[0]):Qi(t,o)})}return[i,s]}const Yr=new WeakMap,nc={get(r,e){if(e===$r)return r;const t=r[e];let n;return Pi(t)?Yr.get(t)||(Yr.set(t,n=new Proxy(t,nc)),n):t},set(r,e,t){return Di(r,e,Li(t)),!0},deleteProperty(r,e){return Di(r,e,void 0,!0),!0}};function Zt(r){return e=>{if(Pi(e)){let t;(t=Yr.get(e))||Yr.set(e,t=new Proxy(e,nc)),r(t)}return e}}var th=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,s;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!r(i[1],t.get(i[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[i]))return!1;for(i=n;i--!==0;){var o=s[i];if(!r(e[o],t[o]))return!1}return!0}return e!==e&&t!==t};const ns="@@AbstractControlInterface_solidjs";function ic(r){return typeof r=="object"&&r?.[ns]===!0}const Co="@@AbstractControlContainerInterface_solidjs";function En(r){return ic(r)&&r[Co]}function vt(r,e){return th(r,e)}function is(r,e){return Object.defineProperties(r,Object.getOwnPropertyDescriptors(e))}function nh(r){const e=kl();if(!e)throw new Error("No solidjs owner in current context");return()=>Bl(e,r)}const Un="CONTROL_DEFAULT_SOURCE";function Po(){const[r,e]=Ft(null);return[t=>r()||t,()=>e(!1)]}function ih(r){return!r||Array.isArray(r)&&r.length===0?null:Array.isArray(r)?e=>r.reduce((t,n)=>{const i=n(e);return i?{...t,...i}:t},null):r}let rh=0;function rc(r,e,t={}){let n,i,s,o,a,c;return[{id:t.id||Symbol(`AbstractControl-${rh++}`),data:{...t.data},self:{get isValid(){return this.errors===null&&!this.isPending},isDisabled:!1,isTouched:!1,isDirty:!1,isReadonly:!1,isSubmitted:!1,isRequired:!1,get isPending(){return s?.()??e(!1)},get errors(){return o?.()??e(null)},errorsStore:new Map,pendingStore:new Set,validatorStore:new Map},get isDisabled(){return this.self.isDisabled},get isTouched(){return this.self.isTouched},get isDirty(){return this.self.isDirty},get isReadonly(){return this.self.isReadonly},get isSubmitted(){return this.self.isSubmitted},get isRequired(){return this.self.isRequired},get errors(){return this.self.errors},get isPending(){return this.self.isPending},get isValid(){return this.self.isValid},get status(){return a?.()??e("VALID")},get validator(){return c?.()??e(null)},markDisabled(h){vt(this.self.isDisabled,h)||i("self","isDisabled",h)},markReadonly(h){vt(this.self.isReadonly,h)||i("self","isReadonly",h)},markRequired(h){vt(this.self.isRequired,h)||i("self","isRequired",h)},markDirty(h){vt(this.self.isDirty,h)||i("self","isDirty",h)},markTouched(h){vt(this.self.isTouched,h)||i("self","isTouched",h)},markSubmitted(h){vt(this.self.isSubmitted,h)||i("self","isSubmitted",h)},markPending(h,d){let m;if(typeof h=="boolean"){const y=d?.source||Un;if(this.self.pendingStore.has(y)===h)return;m=new Set(this.self.pendingStore),h?m.add(y):m.delete(y)}else{if(this.self.pendingStore===h)return;m=new Set(h)}vt(this.self.pendingStore,m)||i(Zt(y=>{y.self.pendingStore=m}))},setErrors(h,d){const m=d?.source||Un,y=this.self.errorsStore;let p;h instanceof Map?p=h:h===null||Object.keys(h).length===0?(p=new Map(y),p.delete(m)):p=new Map(y).set(m,h),!vt(this.self.errorsStore,p)&&i(Zt(f=>{f.self.errorsStore=p}))},patchErrors(h,d){const m=this.self.errorsStore;if(h instanceof Map)i(Zt(y=>{y.self.errorsStore=new Map([...m,...h])}));else{if(Object.keys(h).length===0)return;const y=d?.source||Un;let p=h,f=m.get(y);if(f){f={...f};for(const[g,_]of Object.entries(p))_===null?delete f[g]:f[g]=_;p=f}else{const g=Object.entries(p).filter(([,_])=>_!==null);if(g.length===0)return;p=Object.fromEntries(g)}const x=new Map(m);if(Object.keys(p).length===0?x.delete(y):x.set(y,p),vt(this.self.errorsStore,x))return;i(Zt(g=>{g.self.errorsStore=x}))}},setValidators(h,d){const m=d?.source||Un;let y;if(h instanceof Map)y=new Map(h);else{y=new Map(this.self.validatorStore);const p=ih(h);p?y.set(m,p):y.delete(m)}vt(this.self.validatorStore,y)||i(Zt(p=>{p.self.validatorStore=y}))},setData(h,d){vt(this.data[h],d)||i(Zt(m=>{m.data[h]=d}))}},()=>{[n,i]=r(),s=Me(()=>n.self.pendingStore.size>0),o=Me(()=>n.self.errorsStore.size===0?null:Array.from(n.self.errorsStore.values()).reduce((h,d)=>({...h,...d}),{})),a=Me(()=>n.isDisabled?"DISABLED":n.isPending?"PENDING":n.isValid?"VALID":"INVALID"),c=Me(()=>{if(n.self.validatorStore.size===0)return null;const h=Array.from(n.self.validatorStore.values());return d=>{const m=h.reduce((y,p)=>({...y,...p(d)}),{});return Object.keys(m).length===0?null:m}}),qc(Ol(()=>n.validator?.(n.rawValue)??null,h=>{if(n.self.errorsStore.get(Un)===h)return;const d=new Map(n.self.errorsStore);h?d.set(Un,h):d.delete(Un),!vt(n.self.errorsStore,d)&&i(Zt(m=>{m.self.errorsStore=d}))}))}]}const sh="@@FormControlInterface_solidjs";function Ot(r,e={}){let t,n;const[i,s]=Po(),[o,a]=rc(()=>[t,n],i,e),c=is(o,{[ns]:!0,[sh]:!0,rawValue:r,get value(){return this.rawValue},setValue(l){vt(this.value,l)||n(Zt(u=>{u.rawValue=l}))}});return[t,n]=Ao(c),a(),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}function sc(r,e,t={}){let n,i;const[s,o]=rc(()=>[n,i],e,t);let a,c,l,u,h,d,m,y,p,f,x,g,_,v,b,T,L,M,S;return[is(s,{get size(){return a?.()??e(0)},get isDisabled(){return this.self.isDisabled||this.children.areDisabled},get isTouched(){return this.self.isTouched||this.child.isTouched},get isDirty(){return this.self.isDirty||this.child.isDirty},get isReadonly(){return this.self.isReadonly||this.children.areReadonly},get isSubmitted(){return this.self.isSubmitted||this.children.areSubmitted},get isRequired(){return this.self.isRequired||this.child.isRequired},get isPending(){return this.self.isPending||this.child.isPending},get errors(){return M?.()??e(null)},get isValid(){return this.self.isValid&&this.children.areValid},child:{get isValid(){return c?.()??e(!0)},get isDisabled(){return l?.()??e(!1)},get isReadonly(){return u?.()??e(!1)},get isRequired(){return h?.()??e(!1)},get isPending(){return d?.()??e(!1)},get isTouched(){return m?.()??e(!1)},get isDirty(){return y?.()??e(!1)},get isSubmitted(){return p?.()??e(!1)}},children:{get areValid(){return f?.()??e(!0)},get areDisabled(){return x?.()??e(!1)},get areReadonly(){return g?.()??e(!1)},get areRequired(){return _?.()??e(!1)},get arePending(){return v?.()??e(!1)},get areTouched(){return b?.()??e(!1)},get areDirty(){return T?.()??e(!1)},get areSubmitted(){return L?.()??e(!1)},get errors(){return S?.()??e(null)},markDirty(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markDirty(F),!(!R?.deep||!En(A))&&A.children.markDirty(F,R)})})},markDisabled(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markDisabled(F),!(!R?.deep||!En(A))&&A.children.markDisabled(F,R)})})},markPending(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markPending(F,R),!(!R?.deep||!En(A))&&A.children.markPending(F,R)})})},markReadonly(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markReadonly(F),!(!R?.deep||!En(A))&&A.children.markReadonly(F,R)})})},markRequired(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markRequired(F),!(!R?.deep||!En(A))&&A.children.markRequired(F,R)})})},markSubmitted(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markSubmitted(F),!(!R?.deep||!En(A))&&A.children.markSubmitted(F,R)})})},markTouched(F,R){rn(()=>{Object.values(n.controls).forEach(A=>{A.markTouched(F),!(!R?.deep||!En(A))&&A.children.markTouched(F,R)})})}},setControls(F){vt(n.controls,F)||i(Zt(R=>{R.controls=F}))},removeControl(F){if(!ic(F)){n.setControl(F,null);return}const R=F;for(const[A,O]of Object.entries(n.controls))if(O===R){n.setControl(A,null);return}},setValue(F){const R=Object.entries(F);if(R.length!==n.size)throw new Error("setValue error: you must provide a value for each control.");rn(()=>{for(const[A,O]of R){const j=n.controls[A];if(!j)throw new Error(`Invalid setValue value key "${A}".`);j.setValue(O)}})},patchValue(F){rn(()=>{for(const[R,A]of Object.entries(F)){const O=n.controls[R];if(!O)throw new Error(`Invalid patchValue value key "${R}".`);En(O)?O.patchValue(A):O.setValue(A)}})}}),()=>{[n,i]=r(),o();const F=Me(()=>Object.values(n.controls)),R=Me(()=>F().filter(A=>!A.isDisabled));a=Me(()=>F().length),c=Me(()=>R().some(A=>A.isValid)),l=Me(()=>F().some(A=>A.isDisabled)),u=Me(()=>R().some(A=>A.isReadonly)),h=Me(()=>R().some(A=>A.isRequired)),d=Me(()=>R().some(A=>A.isPending)),m=Me(()=>R().some(A=>A.isTouched)),y=Me(()=>R().some(A=>A.isDirty)),p=Me(()=>R().some(A=>A.isSubmitted)),f=Me(()=>R().every(A=>A.isValid)),x=Me(()=>{const A=F();return A.length===0?!1:A.every(O=>O.isDisabled)}),g=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isReadonly)}),_=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isRequired)}),v=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isPending)}),b=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isTouched)}),T=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isDirty)}),L=Me(()=>{const A=R();return A.length===0?!1:A.every(O=>O.isSubmitted)}),M=Me(()=>!n.self.errors&&!n.children.errors?null:{...n.children.errors,...n.self.errors}),S=Me(()=>R().reduce((O,j)=>O===null&&j.errors===null?null:{...O,...j.errors},null))}]}const oh="@@FormGroupInterface_solidjs";function ah(r={},e={}){let t,n;const[i,s]=Po(),[o,a]=sc(()=>[t,n],i,e);let c,l;const u=is(o,{[ns]:!0,[Co]:!0,[oh]:!0,controls:r,get rawValue(){return c?.()??i({})},get value(){return l?.()??i({})},setControl(m,y){(y===null?!t.controls[m]:vt(t.controls[m],y))||n(Zt(p=>{y===null?delete p.controls[m]:p.controls[m]=y}))}});[t,n]=Ao(u),a();const h=Me(()=>Object.entries(t.controls)),d=Me(()=>h().filter(([,m])=>!m.isDisabled));return c=Me(()=>Object.fromEntries(h().map(([m,y])=>[m,y.rawValue]))),l=Me(()=>Object.fromEntries(d().map(([m,y])=>[m,y.value]))),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}const lh="@@FormArrayInterface_solidjs";function ch(r=[],e={}){let t,n;const[i,s]=Po(),[o,a]=sc(()=>[t,n],i,e);let c,l;const u=is(o,{[ns]:!0,[Co]:!0,[lh]:!0,controls:r,get rawValue(){return c?.()??i({})},get value(){return l?.()??i({})},setControl(d,m){(m===null?!t.controls[d]:vt(t.controls[d],m))||n(Zt(y=>{m===null?y.controls.splice(d,1):y.controls[d]=m}))},push(d){this.setControl(this.controls.length,d)}});[t,n]=Ao(u),a();const h=Me(()=>t.controls.filter(d=>!d.isDisabled));return c=Me(()=>t.controls.map(d=>d.rawValue)),l=Me(()=>h().map(d=>d.value)),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}const uh=""+new URL("copy-ico-d69906cc.svg",import.meta.url).href,hh=r=>(r=en({control:Ot("")},r),J(dh,{get children(){return J(So,{get when(){return!r.control.isValid},get children(){return r.control.errors.message}})}})),dh=We("div")`
  color: var(--thirdColor);
  font-size: 14px;
  min-height: 40px;
`,fh=qt("<input>",1),ph=qt("<label></label>",2),rs=r=>{r=en({control:Ot(""),showError:!0},r);const[e,t]=ts(r,["control","placeholder","showError","onInput"]),n=()=>e.control,i=()=>e.placeholder,s=o=>n().setValue(o.target.value);return[(()=>{const o=fh.cloneNode(!0);return Eo(o,en(t,{placeholder:" ",get title(){return i()},get value(){return r.value??n().value},get onInput(){return r.onInput??s},get disabled(){return n().isDisabled},get readonly(){return n().isReadonly}}),!1,!1),o})(),(()=>{const o=ph.cloneNode(!0);return Qe(o,i),Jt(()=>Sn(o,"for",r.id)),o})(),J(So,{get when(){return r.showError},get children(){return J(hh,{get control(){return n()}})}})]},mh=qt("<img>",1),Qn=r=>J(gh,{get value(){return!!r.control.value},class:"input-wrapper",get children(){return[J(rs,en({type:"text"},r)),(()=>{const e=mh.cloneNode(!0);return e.$$click=()=>navigator.clipboard.writeText(r.control.value),Sn(e,"src",uh),Jt(()=>Sn(e,"visibility",r.control.value)),e})()]}}),gh=We("div")`
  input {
    border-width: 2px 0 2px 2px;
    padding-left: ${r=>r.value?"40px":"8px"};
    &:focus ~ label,
    &:not(:placeholder-shown) + label {
      transform: translate(-4px, -14px);
      padding: 0 1px;
      font-size: 12px;
      background-color: white;
    }
  }
  label {
    padding-top: 2px;
    font-size: 18px;
    transition: 0.25s all;
    pointer-events: none;
    position: absolute;
    top: 5px;
    left: 10px;
  }
  img {
    cursor: pointer;
    visibility: ${r=>r.value?"visible":"hidden"};
    position: absolute;
    width: 20px;
    top: 10px;
    left: 10px;
  }
`;wo(["click"]);const Mn=r=>{const[e,t]=ts(r,["placeholder"]);return J(_h,en(t,{get children(){return e.placeholder}}))},_h=We("button")`
  display: block;
  border: 2px solid var(--mainColor);
  transition: background-color 0.25s;
  &:hover:not(:disabled) {
    background-color: var(--mainColor);
    color: white;
  }
`,xh=qt("<h3></h3>",2),Wt=r=>J(vh,{get sidebar(){return r.sidebar},get children(){const e=xh.cloneNode(!0);return Qe(e,()=>r.text),e}}),vh=We("header")`
  display: block;
  text-align: start;
  height: ${r=>r.sidebar?"22px":"32px"};
  font-size: ${r=>r.sidebar?"14px":"18px"};
  border-bottom: 1px solid var(--secondaryColor);
  margin: ${r=>r.sidebar?"0 0 16px":"64px 0 32px"};
  h3 {
    margin: 0;
  }
`,Zr=r=>J(yh,{get children(){return J(rs,en({type:"radio"},r))}}),yh=We("div")`
  width: 100%;
  input {
    appearance: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 2px solid #333;
    position: relative;
    top: 4px;
    padding: 2px;
    transition: all 0.1s;
  }
  input:checked {
    border-width: 6px;
  }
  input,
  label {
    cursor: pointer;
  }
  label {
    padding-left: 8px;
  }
`,ss=r=>J(Mh,{get children(){return r.children}}),Mh=We("div")`
  display: grid;
  grid-template-rows: 714px auto;
  fieldset {
    margin-bottom: 32px;
  }
`,zi="http://192.168.0.101:8080/api",bh=r=>{if(typeof r=="string")return r;if(typeof r=="object"){const e=r.loc.join("."),t=r?.ctx?JSON.stringify(r.ctx):"missing";return`Location: ${e} Error type: ${r.type}. Message: ${r.msg}. Context: ${t}`}return JSON.stringify(r)},Ui=async r=>{if(r.ok)return;const e=async()=>`Unknown error. Status: ${r.status}, ${r.statusText}. Message: ${await r.text()}`;let t,n;try{t=await r.json()}catch{throw new Error(await e())}if(!t?.detail)throw new Error(await e());const i=t.detail;throw Array.isArray(i)?n=i.map(bh).join(`
`):typeof i=="string"?n=i:n=JSON.stringify(i),new Error(n)},Sh=async(r,e)=>{const t={data_url:e,email:r,dataset_type:"blender"},n=await fetch(`${zi}/experiment/train`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await Ui(n),await n.json()},wh=async r=>{const e=await fetch(`${zi}/experiment/${r}/rendering`);await Ui(e);const t=await e.blob();return URL.createObjectURL(t)},Eh=async(r,e,t,n)=>{const i={email:r,base_experiment_id:e,aabb:t,inner_region:n},s=await fetch(`${zi}/experiment/edit/aabb`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});return await Ui(s),await s.json()},Th=async(r,e,t,n,i)=>{const s=new FormData;s.set("email",r),s.set("base_experiment_id",e);for(const a of t)s.append("image_masks",a);s.set("cameras",JSON.stringify({cameras:n})),s.set("inner_region",i);const o=await fetch(`${zi}/experiment/edit/image-masks`,{method:"POST",body:s});return await Ui(o),await o.json()},Ah=async(r,e,t,n)=>{const i={email:r,scenes:e,image_size:t,camera:n},s=await fetch(`${zi}/experiment/render`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});return await Ui(s),await s.json()};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="149",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,jo=1,Ph=2,oc=1,Lh=2,Ji=3,Rn=0,zt=1,vn=2,Dn=0,Ti=1,$o=2,Yo=3,Zo=4,Dh=5,Si=100,Rh=101,Ih=102,Ko=103,Qo=104,Nh=200,Fh=201,Oh=202,zh=203,ac=204,lc=205,Uh=206,kh=207,Bh=208,Gh=209,Vh=210,Hh=0,Wh=1,Xh=2,uo=3,qh=4,jh=5,$h=6,Yh=7,cc=0,Zh=1,Kh=2,bn=0,Qh=1,Jh=2,ed=3,td=4,nd=5,uc=300,Ri=301,Ii=302,ho=303,fo=304,os=306,po=1e3,Kt=1001,mo=1002,Et=1003,Jo=1004,vs=1005,Vt=1006,id=1007,rr=1008,ti=1009,rd=1010,sd=1011,hc=1012,od=1013,Yn=1014,Zn=1015,sr=1016,ad=1017,ld=1018,Ai=1020,cd=1021,Qt=1023,ud=1024,hd=1025,Jn=1026,Ni=1027,dd=1028,fd=1029,pd=1030,md=1031,gd=1033,ys=33776,Ms=33777,bs=33778,Ss=33779,ea=35840,ta=35841,na=35842,ia=35843,_d=36196,ra=37492,sa=37496,oa=37808,aa=37809,la=37810,ca=37811,ua=37812,ha=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,va=37821,ws=36492,xd=36283,ya=36284,Ma=36285,ba=36286,ni=3e3,Xe=3001,vd=3200,yd=3201,dc=0,Md=1,sn="srgb",or="srgb-linear",Es=7680,bd=519,Sa=35044,wa="300 es",go=1035;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,Ea=180/Math.PI;function ar(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function Ts(r,e,t){return(1-t)*r+t*e}function Ta(r){return(r&r-1)===0&&r!==0}function _o(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ur(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],y=n[8],p=i[0],f=i[3],x=i[6],g=i[1],_=i[4],v=i[7],b=i[2],T=i[5],L=i[8];return s[0]=o*p+a*g+c*b,s[3]=o*f+a*_+c*T,s[6]=o*x+a*v+c*L,s[1]=l*p+u*g+h*b,s[4]=l*f+u*_+h*T,s[7]=l*x+u*v+h*L,s[2]=d*p+m*g+y*b,s[5]=d*f+m*_+y*T,s[8]=d*x+m*v+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,y=t*h+n*d+i*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/y;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Nt;function fc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Cs={[sn]:{[or]:ei},[or]:{[sn]:Br}},St={legacyMode:!0,get workingColorSpace(){return or},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Cs[e]&&Cs[e][t]!==void 0){const n=Cs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},jt={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ps(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function dr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Sd(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,St.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,St.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,St.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,St.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=sn){const n=pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return St.fromWorkingColorSpace(dr(this,it),e),Ct(it.r*255,0,255)<<16^Ct(it.g*255,0,255)<<8^Ct(it.b*255,0,255)<<0}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(dr(this,it),t);const n=it.r,i=it.g,s=it.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(dr(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=sn){return St.fromWorkingColorSpace(dr(this,it),e),e!==sn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(hr);const n=Ts(jt.h,hr.h,t),i=Ts(jt.s,hr.s,t),s=Ts(jt.l,hr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=pc;let ci;class mc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=Kr("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gc{constructor(e=null){this.isSource=!0,this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ls(i[o].image)):s.push(Ls(i[o]))}else s=Ls(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ls(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Ut extends si{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Kt,i=Kt,s=Vt,o=rr,a=Qt,c=ti,l=Ut.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ar(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=uc;Ut.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],y=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(y-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(y+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,v=(m+1)/2,b=(x+1)/2,T=(u+d)/4,L=(h+p)/4,M=(y+f)/4;return _>v&&_>b?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=L/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=L/s,i=M/s),this.set(n,i,s,t),this}let g=Math.sqrt((f-y)*(f-y)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(f-y)/g,this.y=(h-p)/g,this.z=(d-u)/g,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ed extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],y=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=y,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==y){let f=1-a;const x=c*d+l*m+u*y+h*p,g=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const b=Math.sqrt(_),T=Math.atan2(b,x*g);f=Math.sin(f*T)/b,a=Math.sin(a*T)/b}const v=a*g;if(c=c*f+d*v,l=l*f+m*v,u=u*f+y*v,h=h*f+p*v,f===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+u*h+c*m-l*d,e[t+1]=c*y+u*d+l*h-a*m,e[t+2]=l*y+u*m+a*d-c*h,e[t+3]=u*y-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),m=c(i/2),y=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*y,this._y=l*m*h-d*u*y,this._z=l*u*y+d*m*h,this._w=l*u*h-d*m*y;break;case"YXZ":this._x=d*u*h+l*m*y,this._y=l*m*h-d*u*y,this._z=l*u*y-d*m*h,this._w=l*u*h+d*m*y;break;case"ZXY":this._x=d*u*h-l*m*y,this._y=l*m*h+d*u*y,this._z=l*u*y+d*m*h,this._w=l*u*h-d*m*y;break;case"ZYX":this._x=d*u*h-l*m*y,this._y=l*m*h+d*u*y,this._z=l*u*y-d*m*h,this._w=l*u*h+d*m*y;break;case"YZX":this._x=d*u*h+l*m*y,this._y=l*m*h+d*u*y,this._z=l*u*y-d*m*h,this._w=l*u*h-d*m*y;break;case"XZY":this._x=d*u*h-l*m*y,this._y=l*m*h-d*u*y,this._z=l*u*y+d*m*h,this._w=l*u*h+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new I,Aa=new ht;class ki{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox),Rs.applyMatrix4(e.matrixWorld),this.union(Rs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),fr.subVectors(this.max,Hi),ui.subVectors(e.a,Hi),hi.subVectors(e.b,Hi),di.subVectors(e.c,Hi),Tn.subVectors(hi,ui),An.subVectors(di,hi),Bn.subVectors(ui,di);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Bn.z,Bn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Bn.z,0,-Bn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Bn.y,Bn.x,0];return!Is(t,ui,hi,di,fr)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,ui,hi,di,fr))?!1:(pr.crossVectors(Tn,An),t=[pr.x,pr.y,pr.z],Is(t,ui,hi,di,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,Rs=new ki,ui=new I,hi=new I,di=new I,Tn=new I,An=new I,Bn=new I,Hi=new I,fr=new I,pr=new I,Gn=new I;function Is(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gn.fromArray(r,s);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Td=new ki,Wi=new I,Ns=new I;class as{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Ns)),this.expandByPoint(Wi.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new I,Fs=new I,mr=new I,Cn=new I,Os=new I,gr=new I,zs=new I;class Do{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.direction).multiplyScalar(t).add(this.origin),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fs.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=Cn.dot(this.direction),c=-Cn.dot(mr),l=Cn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,y;if(u>0)if(h=o*c-a,d=o*a-c,y=s*u,h>=0)if(d>=-y)if(d<=y){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=y?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(mr).multiplyScalar(d).add(Fs),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,s){Os.subVectors(t,e),gr.subVectors(n,e),zs.crossVectors(Os,gr);let o=this.direction.dot(zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const c=a*this.direction.dot(gr.crossVectors(Cn,gr));if(c<0)return null;const l=a*this.direction.dot(Os.cross(Cn));if(l<0||c+l>o)return null;const u=-a*Cn.dot(zs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,h,d,m,y,p,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=y,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,y=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+y*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=y+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,y=l*u,p=l*h;t[0]=d+p*a,t[4]=y*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,y=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,y=a*u,p=a*h;t[0]=c*u,t[4]=y*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-y,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,y=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=y*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+y,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,y=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-y,t[2]=y*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Pn.crossVectors(n,Rt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Pn.crossVectors(n,Rt)),Pn.normalize(),_r.crossVectors(Rt,Pn),i[0]=Pn.x,i[4]=_r.x,i[8]=Rt.x,i[1]=Pn.y,i[5]=_r.y,i[9]=Rt.y,i[2]=Pn.z,i[6]=_r.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],y=n[2],p=n[6],f=n[10],x=n[14],g=n[3],_=n[7],v=n[11],b=n[15],T=i[0],L=i[4],M=i[8],S=i[12],P=i[1],U=i[5],F=i[9],R=i[13],A=i[2],O=i[6],j=i[10],Y=i[14],q=i[3],Z=i[7],K=i[11],fe=i[15];return s[0]=o*T+a*P+c*A+l*q,s[4]=o*L+a*U+c*O+l*Z,s[8]=o*M+a*F+c*j+l*K,s[12]=o*S+a*R+c*Y+l*fe,s[1]=u*T+h*P+d*A+m*q,s[5]=u*L+h*U+d*O+m*Z,s[9]=u*M+h*F+d*j+m*K,s[13]=u*S+h*R+d*Y+m*fe,s[2]=y*T+p*P+f*A+x*q,s[6]=y*L+p*U+f*O+x*Z,s[10]=y*M+p*F+f*j+x*K,s[14]=y*S+p*R+f*Y+x*fe,s[3]=g*T+_*P+v*A+b*q,s[7]=g*L+_*U+v*O+b*Z,s[11]=g*M+_*F+v*j+b*K,s[15]=g*S+_*R+v*Y+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],y=e[3],p=e[7],f=e[11],x=e[15];return y*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+f*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+x*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],y=e[12],p=e[13],f=e[14],x=e[15],g=h*f*l-p*d*l+p*c*m-a*f*m-h*c*x+a*d*x,_=y*d*l-u*f*l-y*c*m+o*f*m+u*c*x-o*d*x,v=u*p*l-y*h*l+y*a*m-o*p*m-u*a*x+o*h*x,b=y*h*c-u*p*c-y*a*d+o*p*d+u*a*f-o*h*f,T=t*g+n*_+i*v+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=g*L,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*x-n*d*x)*L,e[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*x+n*c*x)*L,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*m-n*c*m)*L,e[4]=_*L,e[5]=(u*f*s-y*d*s+y*i*m-t*f*m-u*i*x+t*d*x)*L,e[6]=(y*c*s-o*f*s-y*i*l+t*f*l+o*i*x-t*c*x)*L,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*m+t*c*m)*L,e[8]=v*L,e[9]=(y*h*s-u*p*s-y*n*m+t*p*m+u*n*x-t*h*x)*L,e[10]=(o*p*s-y*a*s+y*n*l-t*p*l-o*n*x+t*a*x)*L,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*L,e[12]=b*L,e[13]=(u*p*i-y*h*i+y*n*d-t*p*d-u*n*f+t*h*f)*L,e[14]=(y*a*i-o*p*i-y*n*c+t*p*c+o*n*f-t*a*f)*L,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,y=s*h,p=o*u,f=o*h,x=a*h,g=c*l,_=c*u,v=c*h,b=n.x,T=n.y,L=n.z;return i[0]=(1-(p+x))*b,i[1]=(m+v)*b,i[2]=(y-_)*b,i[3]=0,i[4]=(m-v)*T,i[5]=(1-(d+x))*T,i[6]=(f+g)*T,i[7]=0,i[8]=(y+_)*L,i[9]=(f-g)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fi.set(i[0],i[1],i[2]).length();const o=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const l=1/s,u=1/o,h=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),h=(t+e)*c,d=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new I,$t=new Ye,Ad=new I(0,0,0),Cd=new I(1,1,1),Pn=new I,_r=new I,Rt=new I,Ca=new Ye,Pa=new ht;class lr{constructor(e=0,t=0,n=0,i=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const La=new I,pi=new ht,pn=new Ye,xr=new I,Xi=new I,Ld=new I,Dd=new ht,Da=new I(1,0,0),Ra=new I(0,1,0),Ia=new I(0,0,1),Rd={type:"added"},Na={type:"removed"};class ft extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new lr,n=new ht,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Nt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Xi,xr,this.up):pn.lookAt(xr,Xi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(pn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Na)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Na)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new I,mn=new I,Us=new I,gn=new I,mi=new I,gi=new I,Fa=new I,ks=new I,Bs=new I,Gs=new I;class an{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yt.subVectors(i,t),mn.subVectors(n,t),Us.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(mn),c=Yt.dot(Us),l=mn.dot(mn),u=mn.dot(Us),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,y=(o*u-a*c)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,gn),c.set(0,0),c.addScaledVector(s,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return an.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;mi.subVectors(i,n),gi.subVectors(s,n),ks.subVectors(e,n);const c=mi.dot(ks),l=gi.dot(ks);if(c<=0&&l<=0)return t.copy(n);Bs.subVectors(e,i);const u=mi.dot(Bs),h=gi.dot(Bs);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(mi,o);Gs.subVectors(e,s);const m=mi.dot(Gs),y=gi.dot(Gs);if(y>=0&&m<=y)return t.copy(s);const p=m*l-c*y;if(p<=0&&l>=0&&y<=0)return a=l/(l-y),t.copy(n).addScaledVector(gi,a);const f=u*y-m*h;if(f<=0&&h-u>=0&&m-y>=0)return Fa.subVectors(s,i),a=(h-u)/(h-u+(m-y)),t.copy(i).addScaledVector(Fa,a);const x=1/(f+p+d);return o=p*x,a=d*x,t.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Id=0;class Bi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ti,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ls extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new I,vr=new Te;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xc extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Oe extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nd=0;const Gt=new Ye,Vs=new ft,_i=new I,It=new ki,qi=new ki,ct=new I;class pt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?vc:xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(It.min,qi.min),It.expandByPoint(ct),ct.addVectors(It.max,qi.max),It.expandByPoint(ct)):(It.expandByPoint(qi.min),It.expandByPoint(qi.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ct.fromBufferAttribute(a,l),c&&(_i.fromBufferAttribute(e,l),ct.add(_i)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new I,u[P]=new I;const h=new I,d=new I,m=new I,y=new Te,p=new Te,f=new Te,x=new I,g=new I;function _(P,U,F){h.fromArray(i,P*3),d.fromArray(i,U*3),m.fromArray(i,F*3),y.fromArray(o,P*2),p.fromArray(o,U*2),f.fromArray(o,F*2),d.sub(h),m.sub(h),p.sub(y),f.sub(y);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(x.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(R),g.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(R),l[P].add(x),l[U].add(x),l[F].add(x),u[P].add(g),u[U].add(g),u[F].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let P=0,U=v.length;P<U;++P){const F=v[P],R=F.start,A=F.count;for(let O=R,j=R+A;O<j;O+=3)_(n[O+0],n[O+1],n[O+2])}const b=new I,T=new I,L=new I,M=new I;function S(P){L.fromArray(s,P*3),M.copy(L);const U=l[P];b.copy(U),b.sub(L.multiplyScalar(L.dot(U))).normalize(),T.crossVectors(M,U);const R=T.dot(u[P])<0?-1:1;c[P*4]=b.x,c[P*4+1]=b.y,c[P*4+2]=b.z,c[P*4+3]=R}for(let P=0,U=v.length;P<U;++P){const F=v[P],R=F.start,A=F.count;for(let O=R,j=R+A;O<j;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,y=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)d[y++]=l[m++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new Ye,xi=new Do,Hs=new as,ji=new I,$i=new I,Yi=new I,Ws=new I,yr=new I,Mr=new Te,br=new Te,Sr=new Te,Xs=new I,wr=new I;class ce extends ft{constructor(e=new pt,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ws.fromBufferAttribute(h,e),o?yr.addScaledVector(Ws,u):yr.addScaledVector(Ws.sub(t),u))}t.add(yr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),e.ray.intersectsSphere(Hs)===!1)||(Oa.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Oa),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,y=h.length;m<y;m++){const p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),g=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,v=g;_<v;_+=3){const b=a.getX(_),T=a.getX(_+1),L=a.getX(_+2);o=Er(this,f,e,xi,l,u,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,f=y;p<f;p+=3){const x=a.getX(p),g=a.getX(p+1),_=a.getX(p+2);o=Er(this,i,e,xi,l,u,x,g,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,y=h.length;m<y;m++){const p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),g=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,v=g;_<v;_+=3){const b=_,T=_+1,L=_+2;o=Er(this,f,e,xi,l,u,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=m,f=y;p<f;p+=3){const x=p,g=p+1,_=p+2;o=Er(this,i,e,xi,l,u,x,g,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Fd(r,e,t,n,i,s,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Rn,a),c===null)return null;wr.copy(a),wr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:r}}function Er(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,ji),r.getVertexPosition(a,$i),r.getVertexPosition(c,Yi);const l=Fd(r,e,t,n,ji,$i,Yi,Xs);if(l){i&&(Mr.fromBufferAttribute(i,o),br.fromBufferAttribute(i,a),Sr.fromBufferAttribute(i,c),l.uv=an.getUV(Xs,ji,$i,Yi,Mr,br,Sr,new Te)),s&&(Mr.fromBufferAttribute(s,o),br.fromBufferAttribute(s,a),Sr.fromBufferAttribute(s,c),l.uv2=an.getUV(Xs,ji,$i,Yi,Mr,br,Sr,new Te));const u={a:o,b:a,c,normal:new I,materialIndex:0};an.getNormal(ji,$i,Yi,u.normal),l.face=u}return l}class Ke extends pt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,i,o,2),y("x","z","y",1,-1,e,n,-t,i,o,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function y(p,f,x,g,_,v,b,T,L,M,S){const P=v/L,U=b/M,F=v/2,R=b/2,A=T/2,O=L+1,j=M+1;let Y=0,q=0;const Z=new I;for(let K=0;K<j;K++){const fe=K*U-R;for(let G=0;G<O;G++){const Q=G*P-F;Z[p]=Q*g,Z[f]=fe*_,Z[x]=A,l.push(Z.x,Z.y,Z.z),Z[p]=0,Z[f]=0,Z[x]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(G/L),h.push(1-K/M),Y+=1}}for(let K=0;K<M;K++)for(let fe=0;fe<L;fe++){const G=d+fe+O*K,Q=d+fe+O*(K+1),ie=d+(fe+1)+O*(K+1),se=d+(fe+1)+O*K;c.push(G,Q,se),c.push(Q,ie,se),q+=6}a.addGroup(m,q,S),m+=q,d+=Y}}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(r){const e={};for(let t=0;t<r.length;t++){const n=Fi(r[t]);for(const i in n)e[i]=n[i]}return e}function Od(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yc(r){return r.getRenderTarget()===null&&r.outputEncoding===Xe?sn:or}const zd={clone:Fi,merge:wt};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,yi=1;class Bd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ht(vi,yi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ht(vi,yi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ht(vi,yi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ht(vi,yi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ht(vi,yi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ht(vi,yi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class bc extends Ut{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gd extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ke(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Dn});s.uniforms.tEquirect.value=t;const o=new ce(i,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=Vt),new Bd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const qs=new I,Vd=new I,Hd=new Nt;class Hn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qs.subVectors(n,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),i=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new as,Tr=new I;class Sc{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],y=n[10],p=n[11],f=n[12],x=n[13],g=n[14],_=n[15];return t[0].setComponents(a-i,h-c,p-d,_-f).normalize(),t[1].setComponents(a+i,h+c,p+d,_+f).normalize(),t[2].setComponents(a+s,h+l,p+m,_+x).normalize(),t[3].setComponents(a-s,h-l,p-m,_-x).normalize(),t[4].setComponents(a-o,h-u,p-y,_-g).normalize(),t[5].setComponents(a+o,h+u,p+y,_+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tr.x=i.normal.x>0?e.max.x:e.min.x,Tr.y=i.normal.y>0?e.max.y:e.min.y,Tr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(h instanceof Int16Array)y=5122;else if(h instanceof Uint32Array)y=5125;else if(h instanceof Int32Array)y=5124;else if(h instanceof Int8Array)y=5120;else if(h instanceof Uint8Array)y=5121;else if(h instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class cs extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,m=[],y=[],p=[],f=[];for(let x=0;x<u;x++){const g=x*d-o;for(let _=0;_<l;_++){const v=_*h-s;y.push(v,-g,0),p.push(0,0,1),f.push(_/a),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let g=0;g<a;g++){const _=g+l*x,v=g+l*(x+1),b=g+1+l*(x+1),T=g+1+l*x;m.push(_,v,T),m.push(v,b,T)}this.setIndex(m),this.setAttribute("position",new Oe(y,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd="vec3 transformed = vec3( position );",Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
}`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,Ff=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gf=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,Vf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,op=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Op=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,fm=`#define PHONG
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
#include <uv2_pars_fragment>
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
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:jd,alphatest_pars_fragment:$d,aomap_fragment:Yd,aomap_pars_fragment:Zd,begin_vertex:Kd,beginnormal_vertex:Qd,bsdfs:Jd,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,encodings_fragment:xf,encodings_pars_fragment:vf,envmap_fragment:yf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:bf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Ff,envmap_vertex:wf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:If,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:zf,lights_phong_fragment:Uf,lights_phong_pars_fragment:kf,lights_physical_fragment:Bf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Hf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:$f,map_fragment:Yf,map_pars_fragment:Zf,map_particle_fragment:Kf,map_particle_pars_fragment:Qf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:rp,normal_fragment_begin:sp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,output_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:xp,dithering_fragment:vp,dithering_pars_fragment:yp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:wp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Rp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Np,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:zp,uv_pars_vertex:Up,uv_vertex:kp,uv2_pars_fragment:Bp,uv2_pars_vertex:Gp,uv2_vertex:Vp,worldpos_vertex:Hp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:jp,cube_vert:$p,cube_frag:Yp,depth_vert:Zp,depth_frag:Kp,distanceRGBA_vert:Qp,distanceRGBA_frag:Jp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:rm,meshbasic_frag:sm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:um,meshnormal_frag:hm,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:xm,points_frag:vm,shadow_vert:ym,shadow_frag:Mm,sprite_vert:bm,sprite_frag:Sm},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},on={basic:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:wt([re.points,re.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:wt([re.common,re.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:wt([re.sprite,re.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:wt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:wt([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};on.physical={uniforms:wt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Ar={r:0,b:0,g:0};function wm(r,e,t,n,i,s,o){const a=new He(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function y(f,x){let g=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const v=r.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?p(a,c):_&&_.isColor&&(p(_,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===os)?(u===void 0&&(u=new ce(new Ke(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Fi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==Xe,(h!==_||d!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ce(new cs(2,2),new ri({name:"BackgroundMaterial",uniforms:Fi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_.encoding!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,x){f.getRGB(Ar,yc(r)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(f,x=1){a.set(f),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:y}}function Em(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(A,O,j,Y,q){let Z=!1;if(o){const K=p(Y,j,O);l!==K&&(l=K,m(l.object)),Z=x(A,Y,j,q),Z&&g(A,Y,j,q)}else{const K=O.wireframe===!0;(l.geometry!==Y.id||l.program!==j.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=j.id,l.wireframe=K,Z=!0)}q!==null&&t.update(q,34963),(Z||u)&&(u=!1,M(A,O,j,Y),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(A){return n.isWebGL2?r.bindVertexArray(A):s.bindVertexArrayOES(A)}function y(A){return n.isWebGL2?r.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function p(A,O,j){const Y=j.wireframe===!0;let q=a[A.id];q===void 0&&(q={},a[A.id]=q);let Z=q[O.id];Z===void 0&&(Z={},q[O.id]=Z);let K=Z[Y];return K===void 0&&(K=f(d()),Z[Y]=K),K}function f(A){const O=[],j=[],Y=[];for(let q=0;q<i;q++)O[q]=0,j[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:Y,object:A,attributes:{},index:null}}function x(A,O,j,Y){const q=l.attributes,Z=O.attributes;let K=0;const fe=j.getAttributes();for(const G in fe)if(fe[G].location>=0){const ie=q[G];let se=Z[G];if(se===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function g(A,O,j,Y){const q={},Z=O.attributes;let K=0;const fe=j.getAttributes();for(const G in fe)if(fe[G].location>=0){let ie=Z[G];ie===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),q[G]=se,K++}l.attributes=q,l.attributesNum=K,l.index=Y}function _(){const A=l.newAttributes;for(let O=0,j=A.length;O<j;O++)A[O]=0}function v(A){b(A,0)}function b(A,O){const j=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;j[A]=1,Y[A]===0&&(r.enableVertexAttribArray(A),Y[A]=1),q[A]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),q[A]=O)}function T(){const A=l.newAttributes,O=l.enabledAttributes;for(let j=0,Y=O.length;j<Y;j++)O[j]!==A[j]&&(r.disableVertexAttribArray(j),O[j]=0)}function L(A,O,j,Y,q,Z){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(A,O,j,q,Z):r.vertexAttribPointer(A,O,j,Y,q,Z)}function M(A,O,j,Y){if(n.isWebGL2===!1&&(A.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=Y.attributes,Z=j.getAttributes(),K=O.defaultAttributeValues;for(const fe in Z){const G=Z[fe];if(G.location>=0){let Q=q[fe];if(Q===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const ie=Q.normalized,se=Q.itemSize,V=t.get(Q);if(V===void 0)continue;const Se=V.buffer,_e=V.type,me=V.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ue=Q.data,ke=ue.stride,Ee=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)b(G.location+ye,ue.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<G.locationSize;ye++)v(G.location+ye);r.bindBuffer(34962,Se);for(let ye=0;ye<G.locationSize;ye++)L(G.location+ye,se/G.locationSize,_e,ie,ke*me,(Ee+se/G.locationSize*ye)*me)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)b(G.location+ue,Q.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<G.locationSize;ue++)v(G.location+ue);r.bindBuffer(34962,Se);for(let ue=0;ue<G.locationSize;ue++)L(G.location+ue,se/G.locationSize,_e,ie,se*me,se/G.locationSize*ue*me)}}else if(K!==void 0){const ie=K[fe];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(G.location,ie);break;case 3:r.vertexAttrib3fv(G.location,ie);break;case 4:r.vertexAttrib4fv(G.location,ie);break;default:r.vertexAttrib1fv(G.location,ie)}}}}T()}function S(){F();for(const A in a){const O=a[A];for(const j in O){const Y=O[j];for(const q in Y)y(Y[q].object),delete Y[q];delete O[j]}delete a[A]}}function P(A){if(a[A.id]===void 0)return;const O=a[A.id];for(const j in O){const Y=O[j];for(const q in Y)y(Y[q].object),delete Y[q];delete O[j]}delete a[A.id]}function U(A){for(const O in a){const j=a[O];if(j[A.id]===void 0)continue;const Y=j[A.id];for(const q in Y)y(Y[q].object),delete Y[q];delete j[A.id]}}function F(){R(),u=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:v,disableUnusedAttributes:T}}function Tm(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Am(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),y=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),g=r.getParameter(36349),_=d>0,v=o||e.has("OES_texture_float"),b=_&&v,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:T}}function Cm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Hn,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const y=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,x=r.get(h);if(!i||y===null||y.length===0||s&&!f)s?u(null):l();else{const g=s?0:n,_=g*4;let v=x.clippingState||null;c.value=v,v=u(y,d,_,m);for(let b=0;b!==_;++b)v[b]=t[b];x.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,y){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,y!==!0||f===null){const x=m+p*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<x)&&(f=new Float32Array(x));for(let _=0,v=m;_!==p;++_,v+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(f,v),f[v+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Pm(r){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=Ri:a===fo&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ho||a===fo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gd(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lm extends Mc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,za=[.125,.215,.35,.446,.526,.582],jn=20,js=new Lm,Ua=new He;let $s=null;const Wn=(1+Math.sqrt(5))/2,bi=1/Wn,ka=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Wn,bi),new I(0,Wn,-bi),new I(bi,0,Wn),new I(-bi,0,Wn),new I(Wn,bi,0),new I(-Wn,bi,0)];class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$s=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:sr,format:Qt,encoding:ni,depthBuffer:!1},i=Ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(s)),this._blurMaterial=Rm(s,e,t)}return i}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ua),u.toneMapping=bn,u.autoClear=!1;const m=new ls({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),y=new ce(new Ke,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Ua),p=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):g===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;Cr(i,g*_,x>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ka[(i-1)%ka.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ce(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),p=s/y,f=isFinite(s)?1+Math.floor(u*p):jn;f>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);const x=[];let g=0;for(let L=0;L<jn;++L){const M=L/p,S=Math.exp(-M*M/2);x.push(S),L===0?g+=S:L<f&&(g+=2*S)}for(let L=0;L<x.length;L++)x[L]=x[L]/g;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;const v=this._sizeLods[i],b=3*v*(i>_-wi?i-_+wi:0),T=4*(this._cubeSize-v);Cr(t,b,T,3*v,2*v),c.setRenderTarget(t),c.render(h,js)}}function Dm(r){const e=[],t=[],n=[];let i=r;const s=r-wi+1+za.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-wi?c=za[o-r+wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,y=6,p=3,f=2,x=1,g=new Float32Array(p*y*m),_=new Float32Array(f*y*m),v=new Float32Array(x*y*m);for(let T=0;T<m;T++){const L=T%3*2/3-1,M=T>2?0:-1,S=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];g.set(S,p*y*T),_.set(d,f*y*T);const P=[T,T,T,T,T,T];v.set(P,x*y*T)}const b=new pt;b.setAttribute("position",new ln(g,p)),b.setAttribute("uv",new ln(_,f)),b.setAttribute("faceIndex",new ln(v,x)),e.push(b),i>wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ga(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rm(r,e,t){const n=new Float32Array(jn),i=new I(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Va(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ha(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function Im(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ho||c===fo,u=c===Ri||c===Ii;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ba(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ba(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fm(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const y in d)e.update(d[y],34962);const m=h.morphAttributes;for(const y in m){const p=m[y];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,y=h.attributes.position;let p=0;if(m!==null){const g=m.array;p=m.version;for(let _=0,v=g.length;_<v;_+=3){const b=g[_+0],T=g[_+1],L=g[_+2];d.push(b,T,T,L,L,b)}}else{const g=y.array;p=y.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const b=_+0,T=_+1,L=_+2;d.push(b,T,T,L,L,b)}}const f=new(fc(d)?vc:xc)(d,1);f.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Om(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function h(d,m,y){if(y===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,y),t.update(m,s,y)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function zm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Um(r,e){return r[0]-e[0]}function km(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=y!==void 0?y.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let O=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),b===!0&&(S=3);let P=u.attributes.position.count*S,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*U*4*p),R=new _c(F,P,U,p);R.type=Zn,R.needsUpdate=!0;const A=S*4;for(let j=0;j<p;j++){const Y=T[j],q=L[j],Z=M[j],K=P*U*4*j;for(let fe=0;fe<Y.count;fe++){const G=fe*A;_===!0&&(o.fromBufferAttribute(Y,fe),F[K+G+0]=o.x,F[K+G+1]=o.y,F[K+G+2]=o.z,F[K+G+3]=0),v===!0&&(o.fromBufferAttribute(q,fe),F[K+G+4]=o.x,F[K+G+5]=o.y,F[K+G+6]=o.z,F[K+G+7]=0),b===!0&&(o.fromBufferAttribute(Z,fe),F[K+G+8]=o.x,F[K+G+9]=o.y,F[K+G+10]=o.z,F[K+G+11]=Z.itemSize===4?o.w:1)}}f={count:p,texture:R,size:new Te(P,U)},s.set(u,f),u.addEventListener("dispose",O)}let x=0;for(let _=0;_<m.length;_++)x+=m[_];const g=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const y=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==y){p=[];for(let v=0;v<y;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<y;v++){const b=p[v];b[0]=v,b[1]=m[v]}p.sort(km);for(let v=0;v<8;v++)v<y&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Um);const f=u.morphAttributes.position,x=u.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const b=a[v],T=b[0],L=b[1];T!==Number.MAX_SAFE_INTEGER&&L?(f&&u.getAttribute("morphTarget"+v)!==f[T]&&u.setAttribute("morphTarget"+v,f[T]),x&&u.getAttribute("morphNormal"+v)!==x[T]&&u.setAttribute("morphNormal"+v,x[T]),i[v]=L,g+=L):(f&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),x&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const _=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Gm(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ec=new Ut,Tc=new _c,Ac=new Ed,Cc=new bc,Wa=[],Xa=[],qa=new Float32Array(16),ja=new Float32Array(9),$a=new Float32Array(4);function Gi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wa[i];if(s===void 0&&(s=new Float32Array(i),Wa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function st(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function us(r,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2fv(this.addr,e),st(t,e)}}function Wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;r.uniform3fv(this.addr,e),st(t,e)}}function Xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4fv(this.addr,e),st(t,e)}}function qm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;$a.set(n),r.uniformMatrix2fv(this.addr,!1,$a),st(t,n)}}function jm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;ja.set(n),r.uniformMatrix3fv(this.addr,!1,ja),st(t,n)}}function $m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;qa.set(n),r.uniformMatrix4fv(this.addr,!1,qa),st(t,n)}}function Ym(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2iv(this.addr,e),st(t,e)}}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3iv(this.addr,e),st(t,e)}}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4iv(this.addr,e),st(t,e)}}function Jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2uiv(this.addr,e),st(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3uiv(this.addr,e),st(t,e)}}function ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4uiv(this.addr,e),st(t,e)}}function ig(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ec,i)}function rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ac,i)}function sg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cc,i)}function og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tc,i)}function ag(r){switch(r){case 5126:return Vm;case 35664:return Hm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return jm;case 35676:return $m;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return Jm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(r,e){r.uniform1fv(this.addr,e)}function cg(r,e){const t=Gi(e,this.size,2);r.uniform2fv(this.addr,t)}function ug(r,e){const t=Gi(e,this.size,3);r.uniform3fv(this.addr,t)}function hg(r,e){const t=Gi(e,this.size,4);r.uniform4fv(this.addr,t)}function dg(r,e){const t=Gi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fg(r,e){const t=Gi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pg(r,e){const t=Gi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mg(r,e){r.uniform1iv(this.addr,e)}function gg(r,e){r.uniform2iv(this.addr,e)}function _g(r,e){r.uniform3iv(this.addr,e)}function xg(r,e){r.uniform4iv(this.addr,e)}function vg(r,e){r.uniform1uiv(this.addr,e)}function yg(r,e){r.uniform2uiv(this.addr,e)}function Mg(r,e){r.uniform3uiv(this.addr,e)}function bg(r,e){r.uniform4uiv(this.addr,e)}function Sg(r,e,t){const n=this.cache,i=e.length,s=us(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ec,s[o])}function wg(r,e,t){const n=this.cache,i=e.length,s=us(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ac,s[o])}function Eg(r,e,t){const n=this.cache,i=e.length,s=us(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cc,s[o])}function Tg(r,e,t){const n=this.cache,i=e.length,s=us(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tc,s[o])}function Ag(r){switch(r){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return yg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ag(t.type)}}class Pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ag(t.type)}}class Lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function Ya(r,e){r.seq.push(e),r.map[e.id]=e}function Dg(r,e,t){const n=r.name,i=n.length;for(Ys.lastIndex=0;;){const s=Ys.exec(n),o=Ys.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ya(t,l===void 0?new Cg(a,r,e):new Pg(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Lg(a),Ya(t,h)),t=h}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Dg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Za(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Rg=0;function Ig(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ng(r){switch(r){case ni:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ka(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ig(r.getShaderSource(e),o)}else return i}function Fg(r,e){const t=Ng(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Og(r,e){let t;switch(e){case Qh:t="Linear";break;case Jh:t="Reinhard";break;case ed:t="OptimizedCineon";break;case td:t="ACESFilmic";break;case nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function Ug(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function er(r){return r!==""}function Qa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ja(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(r){return r.replace(Bg,Gg)}function Gg(r,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xo(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(r){return r.replace(Vg,Hg)}function Hg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Xg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ri:case Ii:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zh:e="ENVMAP_BLENDING_MIX";break;case Kh:e="ENVMAP_BLENDING_ADD";break}return e}function $g(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Wg(t),l=Xg(t),u=qg(t),h=jg(t),d=$g(t),m=t.isWebGL2?"":zg(t),y=Ug(s),p=i.createProgram();let f,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[y].filter(er).join(`
`),f.length>0&&(f+=`
`),x=[m,y].filter(er).join(`
`),x.length>0&&(x+=`
`)):(f=[tl(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),x=[m,tl(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==bn?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Fg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=xo(o),o=Qa(o,t),o=Ja(o,t),a=xo(a),a=Qa(a,t),a=Ja(a,t),o=el(o),a=el(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=g+f+o,v=g+x+a,b=Za(i,35633,_),T=Za(i,35632,v);if(i.attachShader(p,b),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(T).trim();let F=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){F=!1;const A=Ka(i,b,"vertex"),O=Ka(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+A+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||U==="")&&(R=!1);R&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:P,prefix:f},fragmentShader:{log:U,prefix:x}})}i.deleteShader(b),i.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Gr(i,p)),L};let M;return this.getAttributes=function(){return M===void 0&&(M=kg(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let Zg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qg(e),t.set(e,n)),n}}class Qg{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}}function Jg(r,e,t,n,i,s,o){const a=new Ro,c=new Kg,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,S,P,U,F){const R=U.fog,A=F.geometry,O=M.isMeshStandardMaterial?U.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),Y=j&&j.mapping===os?j.image.height:null,q=y[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,K=Z!==void 0?Z.length:0;let fe=0;A.morphAttributes.position!==void 0&&(fe=1),A.morphAttributes.normal!==void 0&&(fe=2),A.morphAttributes.color!==void 0&&(fe=3);let G,Q,ie,se;if(q){const ke=on[q];G=ke.vertexShader,Q=ke.fragmentShader}else G=M.vertexShader,Q=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),se=c.getFragmentShaderID(M);const V=r.getRenderTarget(),Se=M.alphaTest>0,_e=M.clearcoat>0,me=M.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:M.type,vertexShader:G,fragmentShader:Q,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?r.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:ni,map:!!M.map,matcap:!!M.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Md,tangentSpaceNormalMap:M.normalMapType===dc,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Xe,clearcoat:_e,clearcoatMap:_e&&!!M.clearcoatMap,clearcoatRoughnessMap:_e&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!M.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!M.iridescenceMap,iridescenceThicknessMap:me&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ti,alphaMap:!!M.alphaMap,alphaTest:Se,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!A.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:bn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===zt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(S,M),g(S,M),S.push(r.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.combine),M.push(S.vertexUvs),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),M.push(a.mask)}function _(M){const S=y[M.type];let P;if(S){const U=on[S];P=zd.clone(U.uniforms)}else P=M.uniforms;return P}function v(M,S){let P;for(let U=0,F=l.length;U<F;U++){const R=l[U];if(R.cacheKey===S){P=R,++P.usedTimes;break}}return P===void 0&&(P=new Yg(r,S,M,s),l.push(P)),P}function b(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:L}}function e0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function t0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function il(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,y,p,f){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:y,renderOrder:h.renderOrder,z:p,group:f},r[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=p,x.group=f),e++,x}function a(h,d,m,y,p,f){const x=o(h,d,m,y,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,d,m,y,p,f){const x=o(h,d,m,y,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,d){t.length>1&&t.sort(h||t0),n.length>1&&n.sort(d||nl),i.length>1&&i.sort(d||nl)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function n0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new il,r.set(n,[o])):i>=s.length?(o=new il,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function i0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function r0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let s0=0;function o0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function a0(r,e){const t=new i0,n=r0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Ye,a=new Ye;function c(u,h){let d=0,m=0,y=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,x=0,g=0,_=0,v=0,b=0,T=0,L=0,M=0;u.sort(o0);const S=h!==!0?Math.PI:1;for(let U=0,F=u.length;U<F;U++){const R=u[U],A=R.color,O=R.intensity,j=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=A.r*O*S,m+=A.g*O*S,y+=A.b*O*S;else if(R.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],O);else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=q,p++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(A).multiplyScalar(O*S),q.distance=j,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[x]=q;const Z=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){const K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=Y,T++}x++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(A).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=q,g++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=R.shadow.matrix,b++}i.point[f]=q,f++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(O*S),q.groundColor.copy(R.groundColor).multiplyScalar(O*S),i.hemi[_]=q,_++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=y;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==_||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==T||P.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,P.directionalLength=p,P.pointLength=f,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=_,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=T,P.numSpotMaps=L,i.version=s0++)}function l(u,h){let d=0,m=0,y=0,p=0,f=0;const x=h.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const v=u[g];if(v.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),d++}else if(v.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),y++}else if(v.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),a.identity(),o.copy(v.matrixWorld),o.premultiply(x),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),m++}else if(v.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(x),f++}}}return{setup:c,setupView:l,state:i}}function rl(r,e){const t=new a0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function l0(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new rl(r,e),t.set(s,[c])):o>=a.length?(c=new rl(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class c0 extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u0 extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d0=`uniform sampler2D shadow_pass;
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
}`;function f0(r,e,t){let n=new Sc;const i=new Te,s=new Te,o=new dt,a=new c0({depthPacking:yd}),c=new u0,l={},u=t.maxTextureSize,h={[Rn]:zt,[zt]:Rn,[vn]:vn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:h0,fragmentShader:d0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new pt;y.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ce(y,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc,this.render=function(v,b,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const L=r.getRenderTarget(),M=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Dn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,F=v.length;U<F;U++){const R=v[U],A=R.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;i.copy(A.mapSize);const O=A.getFrameExtents();if(i.multiply(O),s.copy(A.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,A.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,A.mapSize.y=s.y)),A.map===null){const Y=this.type!==Ji?{minFilter:Et,magFilter:Et}:{};A.map=new ii(i.x,i.y,Y),A.map.texture.name=R.name+".shadowMap",A.camera.updateProjectionMatrix()}r.setRenderTarget(A.map),r.clear();const j=A.getViewportCount();for(let Y=0;Y<j;Y++){const q=A.getViewport(Y);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),P.viewport(o),A.updateMatrices(R,Y),n=A.getFrustum(),_(b,T,A.camera,R,this.type)}A.isPointLightShadow!==!0&&this.type===Ji&&x(A,T),A.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,M,S)};function x(v,b){const T=e.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(b,null,T,d,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(b,null,T,m,p,null)}function g(v,b,T,L,M,S){let P=null;const U=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0)P=U;else if(P=T.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=P.uuid,R=b.uuid;let A=l[F];A===void 0&&(A={},l[F]=A);let O=A[R];O===void 0&&(O=P.clone(),A[R]=O),P=O}return P.visible=b.visible,P.wireframe=b.wireframe,S===Ji?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=L,P.farDistance=M),P}function _(v,b,T,L,M){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===Ji)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const U=e.update(v),F=v.material;if(Array.isArray(F)){const R=U.groups;for(let A=0,O=R.length;A<O;A++){const j=R[A],Y=F[j.materialIndex];if(Y&&Y.visible){const q=g(v,Y,L,T.near,T.far,M);r.renderBufferDirect(T,null,U,q,v,j)}}}else if(F.visible){const R=g(v,F,L,T.near,T.far,M);r.renderBufferDirect(T,null,U,R,v,null)}}const P=v.children;for(let U=0,F=P.length;U<F;U++)_(P[U],b,T,L,M)}}function p0(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const W=new dt;let ee=null;const he=new dt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){N=xe},setClear:function(xe,Ue,at,gt,Nn){Nn===!0&&(xe*=gt,Ue*=gt,at*=gt),W.set(xe,Ue,at,gt),he.equals(W)===!1&&(r.clearColor(xe,Ue,at,gt),he.copy(W))},reset:function(){N=!1,ee=null,he.set(-1,0,0,0)}}}function s(){let N=!1,W=null,ee=null,he=null;return{setTest:function(xe){xe?Se(2929):_e(2929)},setMask:function(xe){W!==xe&&!N&&(r.depthMask(xe),W=xe)},setFunc:function(xe){if(ee!==xe){switch(xe){case Hh:r.depthFunc(512);break;case Wh:r.depthFunc(519);break;case Xh:r.depthFunc(513);break;case uo:r.depthFunc(515);break;case qh:r.depthFunc(514);break;case jh:r.depthFunc(518);break;case $h:r.depthFunc(516);break;case Yh:r.depthFunc(517);break;default:r.depthFunc(515)}ee=xe}},setLocked:function(xe){N=xe},setClear:function(xe){he!==xe&&(r.clearDepth(xe),he=xe)},reset:function(){N=!1,W=null,ee=null,he=null}}}function o(){let N=!1,W=null,ee=null,he=null,xe=null,Ue=null,at=null,gt=null,Nn=null;return{setTest:function(je){N||(je?Se(2960):_e(2960))},setMask:function(je){W!==je&&!N&&(r.stencilMask(je),W=je)},setFunc:function(je,cn,Bt){(ee!==je||he!==cn||xe!==Bt)&&(r.stencilFunc(je,cn,Bt),ee=je,he=cn,xe=Bt)},setOp:function(je,cn,Bt){(Ue!==je||at!==cn||gt!==Bt)&&(r.stencilOp(je,cn,Bt),Ue=je,at=cn,gt=Bt)},setLocked:function(je){N=je},setClear:function(je){Nn!==je&&(r.clearStencil(je),Nn=je)},reset:function(){N=!1,W=null,ee=null,he=null,xe=null,Ue=null,at=null,gt=null,Nn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},y=new WeakMap,p=[],f=null,x=!1,g=null,_=null,v=null,b=null,T=null,L=null,M=null,S=!1,P=null,U=null,F=null,R=null,A=null;const O=r.getParameter(35661);let j=!1,Y=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=Y>=2);let Z=null,K={};const fe=r.getParameter(3088),G=r.getParameter(2978),Q=new dt().fromArray(fe),ie=new dt().fromArray(G);function se(N,W,ee){const he=new Uint8Array(4),xe=r.createTexture();r.bindTexture(N,xe),r.texParameteri(N,10241,9728),r.texParameteri(N,10240,9728);for(let Ue=0;Ue<ee;Ue++)r.texImage2D(W+Ue,0,6408,1,1,0,6408,5121,he);return xe}const V={};V[3553]=se(3553,3553,1),V[34067]=se(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(2929),c.setFunc(uo),Je(!1),Mt(jo),Se(2884),ot(Dn);function Se(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function _e(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function me(N,W){return m[N]!==W?(r.bindFramebuffer(N,W),m[N]=W,n&&(N===36009&&(m[36160]=W),N===36160&&(m[36009]=W)),!0):!1}function ue(N,W){let ee=p,he=!1;if(N)if(ee=y.get(W),ee===void 0&&(ee=[],y.set(W,ee)),N.isWebGLMultipleRenderTargets){const xe=N.texture;if(ee.length!==xe.length||ee[0]!==36064){for(let Ue=0,at=xe.length;Ue<at;Ue++)ee[Ue]=36064+Ue;ee.length=xe.length,he=!0}}else ee[0]!==36064&&(ee[0]=36064,he=!0);else ee[0]!==1029&&(ee[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ke(N){return f!==N?(r.useProgram(N),f=N,!0):!1}const Ee={[Si]:32774,[Rh]:32778,[Ih]:32779};if(n)Ee[Ko]=32775,Ee[Qo]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ee[Ko]=N.MIN_EXT,Ee[Qo]=N.MAX_EXT)}const ye={[Nh]:0,[Fh]:1,[Oh]:768,[ac]:770,[Vh]:776,[Bh]:774,[Uh]:772,[zh]:769,[lc]:771,[Gh]:775,[kh]:773};function ot(N,W,ee,he,xe,Ue,at,gt){if(N===Dn){x===!0&&(_e(3042),x=!1);return}if(x===!1&&(Se(3042),x=!0),N!==Dh){if(N!==g||gt!==S){if((_!==Si||T!==Si)&&(r.blendEquation(32774),_=Si,T=Si),gt)switch(N){case Ti:r.blendFuncSeparate(1,771,1,771);break;case $o:r.blendFunc(1,1);break;case Yo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ti:r.blendFuncSeparate(770,771,1,771);break;case $o:r.blendFunc(770,1);break;case Yo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,b=null,L=null,M=null,g=N,S=gt}return}xe=xe||W,Ue=Ue||ee,at=at||he,(W!==_||xe!==T)&&(r.blendEquationSeparate(Ee[W],Ee[xe]),_=W,T=xe),(ee!==v||he!==b||Ue!==L||at!==M)&&(r.blendFuncSeparate(ye[ee],ye[he],ye[Ue],ye[at]),v=ee,b=he,L=Ue,M=at),g=N,S=!1}function mt(N,W){N.side===vn?_e(2884):Se(2884);let ee=N.side===zt;W&&(ee=!ee),Je(ee),N.blending===Ti&&N.transparent===!1?ot(Dn):ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const he=N.stencilWrite;l.setTest(he),he&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(32926):_e(32926)}function Je(N){P!==N&&(N?r.frontFace(2304):r.frontFace(2305),P=N)}function Mt(N){N!==Ch?(Se(2884),N!==U&&(N===jo?r.cullFace(1029):N===Ph?r.cullFace(1028):r.cullFace(1032))):_e(2884),U=N}function Ze(N){N!==F&&(j&&r.lineWidth(N),F=N)}function ze(N,W,ee){N?(Se(32823),(R!==W||A!==ee)&&(r.polygonOffset(W,ee),R=W,A=ee)):_e(32823)}function kt(N){N?Se(3089):_e(3089)}function Tt(N){N===void 0&&(N=33984+O-1),Z!==N&&(r.activeTexture(N),Z=N)}function C(N,W,ee){ee===void 0&&(Z===null?ee=33984+O-1:ee=Z);let he=K[ee];he===void 0&&(he={type:void 0,texture:void 0},K[ee]=he),(he.type!==N||he.texture!==W)&&(Z!==ee&&(r.activeTexture(ee),Z=ee),r.bindTexture(N,W||V[N]),he.type=N,he.texture=W)}function w(){const N=K[Z];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Q.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function pe(N){ie.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Le(N,W){let ee=h.get(W);ee===void 0&&(ee=new WeakMap,h.set(W,ee));let he=ee.get(N);he===void 0&&(he=r.getUniformBlockIndex(W,N.name),ee.set(N,he))}function De(N,W){const he=h.get(W).get(N);u.get(W)!==he&&(r.uniformBlockBinding(W,he,N.__bindingPointIndex),u.set(W,he))}function Be(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Z=null,K={},m={},y=new WeakMap,p=[],f=null,x=!1,g=null,_=null,v=null,b=null,T=null,L=null,M=null,S=!1,P=null,U=null,F=null,R=null,A=null,Q.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Se,disable:_e,bindFramebuffer:me,drawBuffers:ue,useProgram:ke,setBlending:ot,setMaterial:mt,setFlipSided:Je,setCullFace:Mt,setLineWidth:Ze,setPolygonOffset:ze,setScissorTest:kt,activeTexture:Tt,bindTexture:C,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:de,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:z,texStorage3D:le,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:be,compressedTexSubImage3D:D,scissor:ge,viewport:pe,reset:Be}}function m0(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return x?new OffscreenCanvas(C,w):Kr("canvas")}function _(C,w,H,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=w?_o:Math.floor,be=oe(ne*C.width),D=oe(ne*C.height);p===void 0&&(p=g(be,D));const z=H?g(be,D):p;return z.width=be,z.height=D,z.getContext("2d").drawImage(C,0,0,be,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+D+")."),z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Ta(C.width)&&Ta(C.height)}function b(C){return a?!1:C.wrapS!==Kt||C.wrapT!==Kt||C.minFilter!==Et&&C.minFilter!==Vt}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==Et&&C.minFilter!==Vt}function L(C){r.generateMipmap(C)}function M(C,w,H,te,ne=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=w;return w===6403&&(H===5126&&(oe=33326),H===5131&&(oe=33325),H===5121&&(oe=33321)),w===33319&&(H===5126&&(oe=33328),H===5131&&(oe=33327),H===5121&&(oe=33323)),w===6408&&(H===5126&&(oe=34836),H===5131&&(oe=34842),H===5121&&(oe=te===Xe&&ne===!1?35907:32856),H===32819&&(oe=32854),H===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(C,w,H){return T(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Et&&C.minFilter!==Vt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){return C===Et||C===Jo||C===vs?9728:9729}function U(C){const w=C.target;w.removeEventListener("dispose",U),R(w),w.isVideoTexture&&y.delete(w)}function F(C){const w=C.target;w.removeEventListener("dispose",F),O(w)}function R(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,te=f.get(H);if(te){const ne=te[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(C),Object.keys(te).length===0&&f.delete(H)}n.remove(C)}function A(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const H=C.source,te=f.get(H);delete te[w.__cacheKey],o.memory.textures--}function O(C){const w=C.texture,H=n.get(C),te=n.get(w);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,oe=w.length;ne<oe;ne++){const be=n.get(w[ne]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(C)}let j=0;function Y(){j=0}function q(){const C=j;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),j+=1,C}function Z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function K(C,w){const H=n.get(C);if(C.isVideoTexture&&kt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(H,C,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function fe(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_e(H,C,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function G(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_e(H,C,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function Q(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){me(H,C,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}const ie={[po]:10497,[Kt]:33071,[mo]:33648},se={[Et]:9728,[Jo]:9984,[vs]:9986,[Vt]:9729,[id]:9985,[rr]:9987};function V(C,w,H){if(H?(r.texParameteri(C,10242,ie[w.wrapS]),r.texParameteri(C,10243,ie[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ie[w.wrapR]),r.texParameteri(C,10240,se[w.magFilter]),r.texParameteri(C,10241,se[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==Kt||w.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,P(w.magFilter)),r.texParameteri(C,10241,P(w.minFilter)),w.minFilter!==Et&&w.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Et||w.minFilter!==vs&&w.minFilter!==rr||w.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Se(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",U));const te=w.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const oe=Z(w);if(oe!==C.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[oe].usedTimes++;const be=ne[C.__cacheKey];be!==void 0&&(ne[C.__cacheKey].usedTimes--,be.usedTimes===0&&A(w)),C.__cacheKey=oe,C.__webglTexture=ne[oe].texture}return H}function _e(C,w,H){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ne=Se(C,w),oe=w.source;t.bindTexture(te,C.__webglTexture,33984+H);const be=n.get(oe);if(oe.version!==be.__version||ne===!0){t.activeTexture(33984+H),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const D=b(w)&&v(w.image)===!1;let z=_(w.image,D,!1,u);z=Tt(w,z);const le=v(z)||a,de=s.convert(w.format,w.encoding);let ae=s.convert(w.type),ge=M(w.internalFormat,de,ae,w.encoding,w.isVideoTexture);V(te,w,le);let pe;const Le=w.mipmaps,De=a&&w.isVideoTexture!==!0,Be=be.__version===void 0||ne===!0,N=S(w,z,le);if(w.isDepthTexture)ge=6402,a?w.type===Zn?ge=36012:w.type===Yn?ge=33190:w.type===Ai?ge=35056:ge=33189:w.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Jn&&ge===6402&&w.type!==hc&&w.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yn,ae=s.convert(w.type)),w.format===Ni&&ge===6402&&(ge=34041,w.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ai,ae=s.convert(w.type))),Be&&(De?t.texStorage2D(3553,1,ge,z.width,z.height):t.texImage2D(3553,0,ge,z.width,z.height,0,de,ae,null));else if(w.isDataTexture)if(Le.length>0&&le){De&&Be&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,ee=Le.length;W<ee;W++)pe=Le[W],De?t.texSubImage2D(3553,W,0,0,pe.width,pe.height,de,ae,pe.data):t.texImage2D(3553,W,ge,pe.width,pe.height,0,de,ae,pe.data);w.generateMipmaps=!1}else De?(Be&&t.texStorage2D(3553,N,ge,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,de,ae,z.data)):t.texImage2D(3553,0,ge,z.width,z.height,0,de,ae,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&Be&&t.texStorage3D(35866,N,ge,Le[0].width,Le[0].height,z.depth);for(let W=0,ee=Le.length;W<ee;W++)pe=Le[W],w.format!==Qt?de!==null?De?t.compressedTexSubImage3D(35866,W,0,0,0,pe.width,pe.height,z.depth,de,pe.data,0,0):t.compressedTexImage3D(35866,W,ge,pe.width,pe.height,z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,W,0,0,0,pe.width,pe.height,z.depth,de,ae,pe.data):t.texImage3D(35866,W,ge,pe.width,pe.height,z.depth,0,de,ae,pe.data)}else{De&&Be&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,ee=Le.length;W<ee;W++)pe=Le[W],w.format!==Qt?de!==null?De?t.compressedTexSubImage2D(3553,W,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(3553,W,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,W,0,0,pe.width,pe.height,de,ae,pe.data):t.texImage2D(3553,W,ge,pe.width,pe.height,0,de,ae,pe.data)}else if(w.isDataArrayTexture)De?(Be&&t.texStorage3D(35866,N,ge,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,de,ae,z.data)):t.texImage3D(35866,0,ge,z.width,z.height,z.depth,0,de,ae,z.data);else if(w.isData3DTexture)De?(Be&&t.texStorage3D(32879,N,ge,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,de,ae,z.data)):t.texImage3D(32879,0,ge,z.width,z.height,z.depth,0,de,ae,z.data);else if(w.isFramebufferTexture){if(Be)if(De)t.texStorage2D(3553,N,ge,z.width,z.height);else{let W=z.width,ee=z.height;for(let he=0;he<N;he++)t.texImage2D(3553,he,ge,W,ee,0,de,ae,null),W>>=1,ee>>=1}}else if(Le.length>0&&le){De&&Be&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,ee=Le.length;W<ee;W++)pe=Le[W],De?t.texSubImage2D(3553,W,0,0,de,ae,pe):t.texImage2D(3553,W,ge,de,ae,pe);w.generateMipmaps=!1}else De?(Be&&t.texStorage2D(3553,N,ge,z.width,z.height),t.texSubImage2D(3553,0,0,0,de,ae,z)):t.texImage2D(3553,0,ge,de,ae,z);T(w,le)&&L(te),be.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function me(C,w,H){if(w.image.length!==6)return;const te=Se(C,w),ne=w.source;t.bindTexture(34067,C.__webglTexture,33984+H);const oe=n.get(ne);if(ne.version!==oe.__version||te===!0){t.activeTexture(33984+H),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,z=[];for(let W=0;W<6;W++)!be&&!D?z[W]=_(w.image[W],!1,!0,l):z[W]=D?w.image[W].image:w.image[W],z[W]=Tt(w,z[W]);const le=z[0],de=v(le)||a,ae=s.convert(w.format,w.encoding),ge=s.convert(w.type),pe=M(w.internalFormat,ae,ge,w.encoding),Le=a&&w.isVideoTexture!==!0,De=oe.__version===void 0||te===!0;let Be=S(w,le,de);V(34067,w,de);let N;if(be){Le&&De&&t.texStorage2D(34067,Be,pe,le.width,le.height);for(let W=0;W<6;W++){N=z[W].mipmaps;for(let ee=0;ee<N.length;ee++){const he=N[ee];w.format!==Qt?ae!==null?Le?t.compressedTexSubImage2D(34069+W,ee,0,0,he.width,he.height,ae,he.data):t.compressedTexImage2D(34069+W,ee,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+W,ee,0,0,he.width,he.height,ae,ge,he.data):t.texImage2D(34069+W,ee,pe,he.width,he.height,0,ae,ge,he.data)}}}else{N=w.mipmaps,Le&&De&&(N.length>0&&Be++,t.texStorage2D(34067,Be,pe,z[0].width,z[0].height));for(let W=0;W<6;W++)if(D){Le?t.texSubImage2D(34069+W,0,0,0,z[W].width,z[W].height,ae,ge,z[W].data):t.texImage2D(34069+W,0,pe,z[W].width,z[W].height,0,ae,ge,z[W].data);for(let ee=0;ee<N.length;ee++){const xe=N[ee].image[W].image;Le?t.texSubImage2D(34069+W,ee+1,0,0,xe.width,xe.height,ae,ge,xe.data):t.texImage2D(34069+W,ee+1,pe,xe.width,xe.height,0,ae,ge,xe.data)}}else{Le?t.texSubImage2D(34069+W,0,0,0,ae,ge,z[W]):t.texImage2D(34069+W,0,pe,ae,ge,z[W]);for(let ee=0;ee<N.length;ee++){const he=N[ee];Le?t.texSubImage2D(34069+W,ee+1,0,0,ae,ge,he.image[W]):t.texImage2D(34069+W,ee+1,pe,ae,ge,he.image[W])}}}T(w,de)&&L(34067),oe.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ue(C,w,H,te,ne){const oe=s.convert(H.format,H.encoding),be=s.convert(H.type),D=M(H.internalFormat,oe,be,H.encoding);n.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,D,w.width,w.height,w.depth,0,oe,be,null):t.texImage2D(ne,0,D,w.width,w.height,0,oe,be,null)),t.bindFramebuffer(36160,C),ze(w)?d.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(H).__webglTexture,0,Ze(w)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,te,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,w,H){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(H||ze(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zn?te=36012:ne.type===Yn&&(te=33190));const oe=Ze(w);ze(w)?d.renderbufferStorageMultisampleEXT(36161,oe,te,w.width,w.height):r.renderbufferStorageMultisample(36161,oe,te,w.width,w.height)}else r.renderbufferStorage(36161,te,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const te=Ze(w);H&&ze(w)===!1?r.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):ze(w)?d.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<te.length;ne++){const oe=te[ne],be=s.convert(oe.format,oe.encoding),D=s.convert(oe.type),z=M(oe.internalFormat,be,D,oe.encoding),le=Ze(w);H&&ze(w)===!1?r.renderbufferStorageMultisample(36161,le,z,w.width,w.height):ze(w)?d.renderbufferStorageMultisampleEXT(36161,le,z,w.width,w.height):r.renderbufferStorage(36161,z,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,ne=Ze(w);if(w.depthTexture.format===Jn)ze(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):r.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===Ni)ze(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ye(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=r.createRenderbuffer(),ke(w.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ke(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function ot(C,w,H){const te=n.get(C);w!==void 0&&ue(te.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&ye(C)}function mt(C){const w=C.texture,H=n.get(C),te=n.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=w.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,be=v(C)||a;if(ne){H.__webglFramebuffer=[];for(let D=0;D<6;D++)H.__webglFramebuffer[D]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){const D=C.texture;for(let z=0,le=D.length;z<le;z++){const de=n.get(D[z]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ze(C)===!1){const D=oe?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let z=0;z<D.length;z++){const le=D[z];H.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[z]);const de=s.convert(le.format,le.encoding),ae=s.convert(le.type),ge=M(le.internalFormat,de,ae,le.encoding,C.isXRRenderTarget===!0),pe=Ze(C);r.renderbufferStorageMultisample(36161,pe,ge,C.width,C.height),r.framebufferRenderbuffer(36160,36064+z,36161,H.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),V(34067,w,be);for(let D=0;D<6;D++)ue(H.__webglFramebuffer[D],C,w,36064,34069+D);T(w,be)&&L(34067),t.unbindTexture()}else if(oe){const D=C.texture;for(let z=0,le=D.length;z<le;z++){const de=D[z],ae=n.get(de);t.bindTexture(3553,ae.__webglTexture),V(3553,de,be),ue(H.__webglFramebuffer,C,de,36064+z,3553),T(de,be)&&L(3553)}t.unbindTexture()}else{let D=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?D=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,te.__webglTexture),V(D,w,be),ue(H.__webglFramebuffer,C,w,36064,D),T(w,be)&&L(D),t.unbindTexture()}C.depthBuffer&&ye(C)}function Je(C){const w=v(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=H.length;te<ne;te++){const oe=H[te];if(T(oe,w)){const be=C.isWebGLCubeRenderTarget?34067:3553,D=n.get(oe).__webglTexture;t.bindTexture(be,D),L(be),t.unbindTexture()}}}function Mt(C){if(a&&C.samples>0&&ze(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,te=C.height;let ne=16384;const oe=[],be=C.stencilBuffer?33306:36096,D=n.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<w.length;le++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let le=0;le<w.length;le++){oe.push(36064+le),C.depthBuffer&&oe.push(be);const de=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[le]),de===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),z){const ae=n.get(w[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ae,0)}r.blitFramebuffer(0,0,H,te,0,0,H,te,ne,9728),m&&r.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<w.length;le++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,D.__webglColorRenderbuffer[le]);const de=n.get(w[le]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,de,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function Ze(C){return Math.min(h,C.samples)}function ze(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function kt(C){const w=o.render.frame;y.get(C)!==w&&(y.set(C,w),C.update())}function Tt(C,w){const H=C.encoding,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===go||H!==ni&&(H===Xe?a===!1?e.has("EXT_sRGB")===!0&&te===Qt?(C.format=go,C.minFilter=Vt,C.generateMipmaps=!1):w=mc.sRGBToLinear(w):(te!==Qt||ne!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=ot,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ze}function g0(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ti)return 5121;if(s===ad)return 32819;if(s===ld)return 32820;if(s===rd)return 5120;if(s===sd)return 5122;if(s===hc)return 5123;if(s===od)return 5124;if(s===Yn)return 5125;if(s===Zn)return 5126;if(s===sr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return 6406;if(s===Qt)return 6408;if(s===ud)return 6409;if(s===hd)return 6410;if(s===Jn)return 6402;if(s===Ni)return 34041;if(s===go)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dd)return 6403;if(s===fd)return 36244;if(s===pd)return 33319;if(s===md)return 33320;if(s===gd)return 36249;if(s===ys||s===Ms||s===bs||s===Ss)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ss)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ea||s===ta||s===na||s===ia)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ra||s===sa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ra)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oa||s===aa||s===la||s===ca||s===ua||s===ha||s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa||s===va)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===oa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===aa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===la)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ca)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ua)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ha)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===da)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ma)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ga)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_a)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===va)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ws)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ws)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===xd||s===ya||s===Ma||s===ba)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ws)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ya)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ba)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class _0 extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),x=this._getHandJoint(l,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,y=.005;l.inputState.pinching&&d>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class v0 extends Ut{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jn&&(n=Yn),n===void 0&&u===Ni&&(n=Ai),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1}}class y0 extends si{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,y=null;const p=t.getContextAttributes();let f=null,x=null;const g=[],_=[],v=new Set,b=new Map,T=new Ht;T.layers.enable(1),T.viewport=new dt;const L=new Ht;L.layers.enable(2),L.viewport=new dt;const M=[T,L],S=new _0;S.layers.enable(1),S.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=g[G];return Q===void 0&&(Q=new Zs,g[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=g[G];return Q===void 0&&(Q=new Zs,g[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=g[G];return Q===void 0&&(Q=new Zs,g[G]=Q),Q.getHandSpace()};function F(G){const Q=_.indexOf(G.inputSource);if(Q===-1)return;const ie=g[Q];ie!==void 0&&ie.dispatchEvent({type:G.type,data:G.inputSource})}function R(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",A);for(let G=0;G<g.length;G++){const Q=_[G];Q!==null&&(_[G]=null,g[G].disconnect(Q))}P=null,U=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,x=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",R),i.addEventListener("inputsourceschange",A),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),x=new ii(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:ti,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ie=null,se=null;p.depth&&(se=p.stencil?35056:33190,Q=p.stencil?Ni:Jn,ie=p.stencil?Ai:Yn);const V={colorFormat:32856,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(V),i.updateRenderState({layers:[d]}),x=new ii(d.textureWidth,d.textureHeight,{format:Qt,type:ti,depthTexture:new v0(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(G){for(let Q=0;Q<G.removed.length;Q++){const ie=G.removed[Q],se=_.indexOf(ie);se>=0&&(_[se]=null,g[se].disconnect(ie))}for(let Q=0;Q<G.added.length;Q++){const ie=G.added[Q];let se=_.indexOf(ie);if(se===-1){for(let Se=0;Se<g.length;Se++)if(Se>=_.length){_.push(ie),se=Se;break}else if(_[Se]===null){_[Se]=ie,se=Se;break}if(se===-1)break}const V=g[se];V&&V.connect(ie)}}const O=new I,j=new I;function Y(G,Q,ie){O.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ie.matrixWorld);const se=O.distanceTo(j),V=Q.projectionMatrix.elements,Se=ie.projectionMatrix.elements,_e=V[14]/(V[10]-1),me=V[14]/(V[10]+1),ue=(V[9]+1)/V[5],ke=(V[9]-1)/V[5],Ee=(V[8]-1)/V[0],ye=(Se[8]+1)/Se[0],ot=_e*Ee,mt=_e*ye,Je=se/(-Ee+ye),Mt=Je*-Ee;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Mt),G.translateZ(Je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ze=_e+Je,ze=me+Je,kt=ot-Mt,Tt=mt+(se-Mt),C=ue*me/ze*Ze,w=ke*me/ze*Ze;G.projectionMatrix.makePerspective(kt,Tt,C,w,Ze,ze)}function q(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;S.near=L.near=T.near=G.near,S.far=L.far=T.far=G.far,(P!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,U=S.far);const Q=G.parent,ie=S.cameras;q(S,Q);for(let V=0;V<ie.length;V++)q(ie[V],Q);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),G.matrix.copy(S.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const se=G.children;for(let V=0,Se=se.length;V<Se;V++)se[V].updateMatrixWorld(!0);ie.length===2?Y(S,T,L):S.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return v};let Z=null;function K(G,Q){if(u=Q.getViewerPose(l||o),y=Q,u!==null){const ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let se=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let V=0;V<ie.length;V++){const Se=ie[V];let _e=null;if(m!==null)_e=m.getViewport(Se);else{const ue=h.getViewSubImage(d,Se);_e=ue.viewport,V===0&&(e.setRenderTargetTextures(x,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(x))}let me=M[V];me===void 0&&(me=new Ht,me.layers.enable(V),me.viewport=new dt,M[V]=me),me.matrix.fromArray(Se.transform.matrix),me.projectionMatrix.fromArray(Se.projectionMatrix),me.viewport.set(_e.x,_e.y,_e.width,_e.height),V===0&&S.matrix.copy(me.matrix),se===!0&&S.cameras.push(me)}}for(let ie=0;ie<g.length;ie++){const se=_[ie],V=g[ie];se!==null&&V!==void 0&&V.update(se,Q,l||o)}if(Z&&Z(G,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ie=null;for(const se of v)Q.detectedPlanes.has(se)||(ie===null&&(ie=[]),ie.push(se));if(ie!==null)for(const se of ie)v.delete(se),b.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of Q.detectedPlanes)if(!v.has(se))v.add(se),b.set(se,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const V=b.get(se);se.lastChangedTime>V&&(b.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}y=null}const fe=new wc;fe.setAnimationLoop(K),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function M0(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,yc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,g,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,_)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),y(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,x,g):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===zt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===zt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let g;f.map?g=f.map:f.specularMap?g=f.specularMap:f.displacementMap?g=f.displacementMap:f.normalMap?g=f.normalMap:f.bumpMap?g=f.bumpMap:f.roughnessMap?g=f.roughnessMap:f.metalnessMap?g=f.metalnessMap:f.alphaMap?g=f.alphaMap:f.emissiveMap?g=f.emissiveMap:f.clearcoatMap?g=f.clearcoatMap:f.clearcoatNormalMap?g=f.clearcoatNormalMap:f.clearcoatRoughnessMap?g=f.clearcoatRoughnessMap:f.iridescenceMap?g=f.iridescenceMap:f.iridescenceThicknessMap?g=f.iridescenceThicknessMap:f.specularIntensityMap?g=f.specularIntensityMap:f.specularColorMap?g=f.specularColorMap:f.transmissionMap?g=f.transmissionMap:f.thicknessMap?g=f.thicknessMap:f.sheenColorMap?g=f.sheenColorMap:f.sheenRoughnessMap&&(g=f.sheenRoughnessMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,x,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=g*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===zt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function b0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(g,_){const v=_.program;n.uniformBlockBinding(g,v)}function l(g,_){let v=i[g.id];v===void 0&&(y(g),v=u(g),i[g.id]=v,g.addEventListener("dispose",f));const b=_.program;n.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function u(g){const _=h();g.__bindingPointIndex=_;const v=r.createBuffer(),b=g.__size,T=g.usage;return r.bindBuffer(35345,v),r.bufferData(35345,b,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,v),v}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=i[g.id],v=g.uniforms,b=g.__cache;r.bindBuffer(35345,_);for(let T=0,L=v.length;T<L;T++){const M=v[T];if(m(M,T,b)===!0){const S=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let F=0;F<P.length;F++){const R=P[F],A=p(R);typeof R=="number"?(M.__data[0]=R,r.bufferSubData(35345,S+U,M.__data)):R.isMatrix3?(M.__data[0]=R.elements[0],M.__data[1]=R.elements[1],M.__data[2]=R.elements[2],M.__data[3]=R.elements[0],M.__data[4]=R.elements[3],M.__data[5]=R.elements[4],M.__data[6]=R.elements[5],M.__data[7]=R.elements[0],M.__data[8]=R.elements[6],M.__data[9]=R.elements[7],M.__data[10]=R.elements[8],M.__data[11]=R.elements[0]):(R.toArray(M.__data,U),U+=A.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,M.__data)}}r.bindBuffer(35345,null)}function m(g,_,v){const b=g.value;if(v[_]===void 0){if(typeof b=="number")v[_]=b;else{const T=Array.isArray(b)?b:[b],L=[];for(let M=0;M<T.length;M++)L.push(T[M].clone());v[_]=L}return!0}else if(typeof b=="number"){if(v[_]!==b)return v[_]=b,!0}else{const T=Array.isArray(v[_])?v[_]:[v[_]],L=Array.isArray(b)?b:[b];for(let M=0;M<T.length;M++){const S=T[M];if(S.equals(L[M])===!1)return S.copy(L[M]),!0}}return!1}function y(g){const _=g.uniforms;let v=0;const b=16;let T=0;for(let L=0,M=_.length;L<M;L++){const S=_[L],P={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let F=0,R=U.length;F<R;F++){const A=U[F],O=p(A);P.boundary+=O.boundary,P.storage+=O.storage}if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,L>0){T=v%b;const F=b-T;T!==0&&F-P.boundary<0&&(v+=b-T,S.__offset=v)}v+=P.storage}return T=v%b,T>0&&(v+=b-T),g.__size=v,g.__cache={},this}function p(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const g in i)r.deleteBuffer(i[g]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function S0(){const r=Kr("canvas");return r.style.display="block",r}function Pc(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:S0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ni,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const p=this;let f=!1,x=0,g=0,_=null,v=-1,b=null;const T=new dt,L=new dt;let M=null,S=e.width,P=e.height,U=1,F=null,R=null;const A=new dt(0,0,S,P),O=new dt(0,0,S,P);let j=!1;const Y=new Sc;let q=!1,Z=!1,K=null;const fe=new Ye,G=new Te,Q=new I,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return _===null?U:1}let V=t;function Se(E,B){for(let X=0;X<E.length;X++){const k=E[X],$=e.getContext(k,B);if($!==null)return $}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lo}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),V=Se(B,E),V===null)throw Se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,me,ue,ke,Ee,ye,ot,mt,Je,Mt,Ze,ze,kt,Tt,C,w,H,te,ne,oe,be,D,z,le;function de(){_e=new Nm(V),me=new Am(V,_e,r),_e.init(me),D=new g0(V,_e,me),ue=new p0(V,_e,me),ke=new zm,Ee=new e0,ye=new m0(V,_e,ue,Ee,me,D,ke),ot=new Pm(p),mt=new Im(p),Je=new Wd(V,me),z=new Em(V,_e,Je,me),Mt=new Fm(V,Je,ke,z),Ze=new Gm(V,Mt,Je,ke),ne=new Bm(V,me,ye),w=new Cm(Ee),ze=new Jg(p,ot,mt,_e,me,z,w),kt=new M0(p,Ee),Tt=new n0,C=new l0(_e,me),te=new wm(p,ot,mt,ue,Ze,u,o),H=new f0(p,Ze,me),le=new b0(V,ke,me,ue),oe=new Tm(V,_e,ke,me),be=new Om(V,_e,ke,me),ke.programs=ze.programs,p.capabilities=me,p.extensions=_e,p.properties=Ee,p.renderLists=Tt,p.shadowMap=H,p.state=ue,p.info=ke}de();const ae=new y0(p,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(S,P,!1))},this.getSize=function(E){return E.set(S,P)},this.setSize=function(E,B,X){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,P=B,e.width=Math.floor(E*U),e.height=Math.floor(B*U),X!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(S*U,P*U).floor()},this.setDrawingBufferSize=function(E,B,X){S=E,P=B,U=X,e.width=Math.floor(E*X),e.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(A)},this.setViewport=function(E,B,X,k){E.isVector4?A.set(E.x,E.y,E.z,E.w):A.set(E,B,X,k),ue.viewport(T.copy(A).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,B,X,k){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,B,X,k),ue.scissor(L.copy(O).multiplyScalar(U).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){ue.setScissorTest(j=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){R=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,B=!0,X=!0){let k=0;E&&(k|=16384),B&&(k|=256),X&&(k|=1024),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),Tt.dispose(),C.dispose(),Ee.dispose(),ot.dispose(),mt.dispose(),Ze.dispose(),z.dispose(),le.dispose(),ze.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",he),ae.removeEventListener("sessionend",xe),K&&(K.dispose(),K=null),Ue.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=ke.autoReset,B=H.enabled,X=H.autoUpdate,k=H.needsUpdate,$=H.type;de(),ke.autoReset=E,H.enabled=B,H.autoUpdate=X,H.needsUpdate=k,H.type=$}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const B=E.target;B.removeEventListener("dispose",De),Be(B)}function Be(E){N(E),Ee.remove(E)}function N(E){const B=Ee.get(E).programs;B!==void 0&&(B.forEach(function(X){ze.releaseProgram(X)}),E.isShaderMaterial&&ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,k,$,ve){B===null&&(B=ie);const we=$.isMesh&&$.matrixWorld.determinant()<0,Ce=kc(E,B,X,k,$);ue.setMaterial(k,we);let Pe=X.index,Fe=1;k.wireframe===!0&&(Pe=Mt.getWireframeAttribute(X),Fe=2);const Re=X.drawRange,Ie=X.attributes.position;let et=Re.start*Fe,Pt=(Re.start+Re.count)*Fe;ve!==null&&(et=Math.max(et,ve.start*Fe),Pt=Math.min(Pt,(ve.start+ve.count)*Fe)),Pe!==null?(et=Math.max(et,0),Pt=Math.min(Pt,Pe.count)):Ie!=null&&(et=Math.max(et,0),Pt=Math.min(Pt,Ie.count));const un=Pt-et;if(un<0||un===1/0)return;z.setup($,k,Ce,X,Pe);let Fn,tt=oe;if(Pe!==null&&(Fn=Je.get(Pe),tt=be,tt.setIndex(Fn)),$.isMesh)k.wireframe===!0?(ue.setLineWidth(k.wireframeLinewidth*se()),tt.setMode(1)):tt.setMode(4);else if($.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),ue.setLineWidth(Ne*se()),$.isLineSegments?tt.setMode(1):$.isLineLoop?tt.setMode(2):tt.setMode(3)}else $.isPoints?tt.setMode(0):$.isSprite&&tt.setMode(4);if($.isInstancedMesh)tt.renderInstances(et,un,$.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ds=Math.min(X.instanceCount,Ne);tt.renderInstances(et,un,ds)}else tt.render(et,un)},this.compile=function(E,B){function X(k,$,ve){k.transparent===!0&&k.side===vn&&k.forceSinglePass===!1?(k.side=zt,k.needsUpdate=!0,Bt(k,$,ve),k.side=Rn,k.needsUpdate=!0,Bt(k,$,ve),k.side=vn):Bt(k,$,ve)}d=C.get(E),d.init(),y.push(d),E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let ve=0;ve<$.length;ve++){const we=$[ve];X(we,E,k)}else X($,E,k)}),y.pop(),d=null};let W=null;function ee(E){W&&W(E)}function he(){Ue.stop()}function xe(){Ue.start()}const Ue=new wc;Ue.setAnimationLoop(ee),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){W=E,ae.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},ae.addEventListener("sessionstart",he),ae.addEventListener("sessionend",xe),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,B,_),d=C.get(E,y.length),d.init(),y.push(d),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(fe),Z=this.localClippingEnabled,q=w.init(this.clippingPlanes,Z),h=Tt.get(E,m.length),h.init(),m.push(h),at(E,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(F,R),q===!0&&w.beginShadows();const X=d.state.shadowsArray;if(H.render(X,E,B),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,E),d.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const k=B.cameras;for(let $=0,ve=k.length;$<ve;$++){const we=k[$];gt(h,E,we,we.viewport)}}else gt(h,E,B);_!==null&&(ye.updateMultisampleRenderTarget(_),ye.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,B),z.resetDefaultState(),v=-1,b=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function at(E,B,X,k){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){k&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const we=Ze.update(E),Ce=E.material;Ce.visible&&h.push(E,we,Ce,X,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=ke.render.frame),!E.frustumCulled||Y.intersectsObject(E))){k&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const we=Ze.update(E),Ce=E.material;if(Array.isArray(Ce)){const Pe=we.groups;for(let Fe=0,Re=Pe.length;Fe<Re;Fe++){const Ie=Pe[Fe],et=Ce[Ie.materialIndex];et&&et.visible&&h.push(E,we,et,X,Q.z,Ie)}}else Ce.visible&&h.push(E,we,Ce,X,Q.z,null)}}const ve=E.children;for(let we=0,Ce=ve.length;we<Ce;we++)at(ve[we],B,X,k)}function gt(E,B,X,k){const $=E.opaque,ve=E.transmissive,we=E.transparent;d.setupLightsView(X),q===!0&&w.setGlobalState(p.clippingPlanes,X),ve.length>0&&Nn($,B,X),k&&ue.viewport(T.copy(k)),$.length>0&&je($,B,X),ve.length>0&&je(ve,B,X),we.length>0&&je(we,B,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Nn(E,B,X){const k=me.isWebGL2;K===null&&(K=new ii(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?sr:ti,minFilter:rr,samples:k&&s===!0?4:0})),p.getDrawingBufferSize(G),k?K.setSize(G.x,G.y):K.setSize(_o(G.x),_o(G.y));const $=p.getRenderTarget();p.setRenderTarget(K),p.clear();const ve=p.toneMapping;p.toneMapping=bn,je(E,B,X),p.toneMapping=ve,ye.updateMultisampleRenderTarget(K),ye.updateRenderTargetMipmap(K),p.setRenderTarget($)}function je(E,B,X){const k=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ve=E.length;$<ve;$++){const we=E[$],Ce=we.object,Pe=we.geometry,Fe=k===null?we.material:k,Re=we.group;Ce.layers.test(X.layers)&&cn(Ce,B,X,Pe,Fe,Re)}}function cn(E,B,X,k,$,ve){E.onBeforeRender(p,B,X,k,$,ve),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,B,X,k,E,ve),$.transparent===!0&&$.side===vn&&$.forceSinglePass===!1?($.side=zt,$.needsUpdate=!0,p.renderBufferDirect(X,B,k,$,E,ve),$.side=Rn,$.needsUpdate=!0,p.renderBufferDirect(X,B,k,$,E,ve),$.side=vn):p.renderBufferDirect(X,B,k,$,E,ve),E.onAfterRender(p,B,X,k,$,ve)}function Bt(E,B,X){B.isScene!==!0&&(B=ie);const k=Ee.get(E),$=d.state.lights,ve=d.state.shadowsArray,we=$.state.version,Ce=ze.getParameters(E,$.state,ve,B,X),Pe=ze.getProgramCacheKey(Ce);let Fe=k.programs;k.environment=E.isMeshStandardMaterial?B.environment:null,k.fog=B.fog,k.envMap=(E.isMeshStandardMaterial?mt:ot).get(E.envMap||k.environment),Fe===void 0&&(E.addEventListener("dispose",De),Fe=new Map,k.programs=Fe);let Re=Fe.get(Pe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===we)return Oo(E,Ce),Re}else Ce.uniforms=ze.getUniforms(E),E.onBuild(X,Ce,p),E.onBeforeCompile(Ce,p),Re=ze.acquireProgram(Ce,Pe),Fe.set(Pe,Re),k.uniforms=Ce.uniforms;const Ie=k.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=w.uniform),Oo(E,Ce),k.needsLights=Gc(E),k.lightsStateVersion=we,k.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const et=Re.getUniforms(),Pt=Gr.seqWithValue(et.seq,Ie);return k.currentProgram=Re,k.uniformsList=Pt,Re}function Oo(E,B){const X=Ee.get(E);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function kc(E,B,X,k,$){B.isScene!==!0&&(B=ie),ye.resetTextureUnits();const ve=B.fog,we=k.isMeshStandardMaterial?B.environment:null,Ce=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ni,Pe=(k.isMeshStandardMaterial?mt:ot).get(k.envMap||we),Fe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!k.normalMap&&!!X.attributes.tangent,Ie=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color,un=k.toneMapped?p.toneMapping:bn,Fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=Fn!==void 0?Fn.length:0,Ne=Ee.get(k),ds=d.state.lights;if(q===!0&&(Z===!0||E!==b)){const Lt=E===b&&k.id===v;w.setState(k,E,Lt)}let lt=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ds.state.version||Ne.outputEncoding!==Ce||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Pe||k.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==et||Ne.morphColors!==Pt||Ne.toneMapping!==un||me.isWebGL2===!0&&Ne.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,Ne.__version=k.version);let On=Ne.currentProgram;lt===!0&&(On=Bt(k,B,$));let zo=!1,Vi=!1,fs=!1;const bt=On.getUniforms(),zn=Ne.uniforms;if(ue.useProgram(On.program)&&(zo=!0,Vi=!0,fs=!0),k.id!==v&&(v=k.id,Vi=!0),zo||b!==E){if(bt.setValue(V,"projectionMatrix",E.projectionMatrix),me.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Vi=!0,fs=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Lt=bt.map.cameraPosition;Lt!==void 0&&Lt.setValue(V,Q.setFromMatrixPosition(E.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&bt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){bt.setOptional(V,$,"bindMatrix"),bt.setOptional(V,$,"bindMatrixInverse");const Lt=$.skeleton;Lt&&(me.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),bt.setValue(V,"boneTexture",Lt.boneTexture,ye),bt.setValue(V,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ps=X.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0&&me.isWebGL2===!0)&&ne.update($,X,k,On),(Vi||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,bt.setValue(V,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(zn.envMap.value=Pe,zn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Vi&&(bt.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&Bc(zn,fs),ve&&k.fog===!0&&kt.refreshFogUniforms(zn,ve),kt.refreshMaterialUniforms(zn,k,U,P,K),Gr.upload(V,Ne.uniformsList,zn,ye)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gr.upload(V,Ne.uniformsList,zn,ye),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(V,"center",$.center),bt.setValue(V,"modelViewMatrix",$.modelViewMatrix),bt.setValue(V,"normalMatrix",$.normalMatrix),bt.setValue(V,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Lt=k.uniformsGroups;for(let ms=0,Vc=Lt.length;ms<Vc;ms++)if(me.isWebGL2){const Uo=Lt[ms];le.update(Uo,On),le.bind(Uo,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Bc(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Gc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,B,X){Ee.get(E.texture).__webglTexture=B,Ee.get(E.depthTexture).__webglTexture=X;const k=Ee.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const X=Ee.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,X=0){_=E,x=B,g=X;let k=!0,$=null,ve=!1,we=!1;if(E){const Pe=Ee.get(E);Pe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),k=!1):Pe.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Pe.__hasExternalTextures&&ye.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const Re=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Re[B],ve=!0):me.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?$=Ee.get(E).__webglMultisampledFramebuffer:$=Re,T.copy(E.viewport),L.copy(E.scissor),M=E.scissorTest}else T.copy(A).multiplyScalar(U).floor(),L.copy(O).multiplyScalar(U).floor(),M=j;if(ue.bindFramebuffer(36160,$)&&me.drawBuffers&&k&&ue.drawBuffers(E,$),ue.viewport(T),ue.scissor(L),ue.setScissorTest(M),ve){const Pe=Ee.get(E.texture);V.framebufferTexture2D(36160,36064,34069+B,Pe.__webglTexture,X)}else if(we){const Pe=Ee.get(E.texture),Fe=B||0;V.framebufferTextureLayer(36160,36064,Pe.__webglTexture,X||0,Fe)}v=-1},this.readRenderTargetPixels=function(E,B,X,k,$,ve,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ue.bindFramebuffer(36160,Ce);try{const Pe=E.texture,Fe=Pe.format,Re=Pe.type;if(Fe!==Qt&&D.convert(Fe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===sr&&(_e.has("EXT_color_buffer_half_float")||me.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==ti&&D.convert(Re)!==V.getParameter(35738)&&!(Re===Zn&&(me.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-k&&X>=0&&X<=E.height-$&&V.readPixels(B,X,k,$,D.convert(Fe),D.convert(Re),ve)}finally{const Pe=_!==null?Ee.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,B,X=0){const k=Math.pow(2,-X),$=Math.floor(B.image.width*k),ve=Math.floor(B.image.height*k);ye.setTexture2D(B,0),V.copyTexSubImage2D(3553,X,0,0,E.x,E.y,$,ve),ue.unbindTexture()},this.copyTextureToTexture=function(E,B,X,k=0){const $=B.image.width,ve=B.image.height,we=D.convert(X.format),Ce=D.convert(X.type);ye.setTexture2D(X,0),V.pixelStorei(37440,X.flipY),V.pixelStorei(37441,X.premultiplyAlpha),V.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,k,E.x,E.y,$,ve,we,Ce,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,k,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):V.texSubImage2D(3553,k,E.x,E.y,we,Ce,B.image),k===0&&X.generateMipmaps&&V.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X,k,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Pe=D.convert(k.format),Fe=D.convert(k.type);let Re;if(k.isData3DTexture)ye.setTexture3D(k,0),Re=32879;else if(k.isDataArrayTexture)ye.setTexture2DArray(k,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment);const Ie=V.getParameter(3314),et=V.getParameter(32878),Pt=V.getParameter(3316),un=V.getParameter(3315),Fn=V.getParameter(32877),tt=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(3314,tt.width),V.pixelStorei(32878,tt.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Re,$,B.x,B.y,B.z,ve,we,Ce,Pe,Fe,tt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Re,$,B.x,B.y,B.z,ve,we,Ce,Pe,tt.data)):V.texSubImage3D(Re,$,B.x,B.y,B.z,ve,we,Ce,Pe,Fe,tt),V.pixelStorei(3314,Ie),V.pixelStorei(32878,et),V.pixelStorei(3316,Pt),V.pixelStorei(3315,un),V.pixelStorei(32877,Fn),$===0&&k.generateMipmaps&&V.generateMipmap(Re),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){x=0,g=0,_=null,ue.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class w0 extends Pc{}w0.prototype.isWebGL1Renderer=!0;class E0 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class hs extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new I,ol=new I,al=new Ye,Ks=new Do,Lr=new as;class xn extends ft{constructor(e=new pt,t=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sl.fromBufferAttribute(t,i-1),ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sl.distanceTo(ol);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=s,e.ray.intersectsSphere(Lr)===!1)return;al.copy(i).invert(),Ks.copy(e.ray).applyMatrix4(al);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,d=new I,m=this.isLineSegments?2:1,y=n.index,f=n.attributes.position;if(y!==null){const x=Math.max(0,o.start),g=Math.min(y.count,o.start+o.count);for(let _=x,v=g-1;_<v;_+=m){const b=y.getX(_),T=y.getX(_+1);if(l.fromBufferAttribute(f,b),u.fromBufferAttribute(f,T),Ks.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=x,v=g-1;_<v;_+=m){if(l.fromBufferAttribute(f,_),u.fromBufferAttribute(f,_+1),Ks.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ll=new I,cl=new I;class Lc extends xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ll.distanceTo(cl);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xt extends pt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],m=[];let y=0;const p=[],f=n/2;let x=0;g(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(m,2));function g(){const v=new I,b=new I;let T=0;const L=(t-e)/n;for(let M=0;M<=s;M++){const S=[],P=M/s,U=P*(t-e)+e;for(let F=0;F<=i;F++){const R=F/i,A=R*c+a,O=Math.sin(A),j=Math.cos(A);b.x=U*O,b.y=-P*n+f,b.z=U*j,h.push(b.x,b.y,b.z),v.set(O,L,j).normalize(),d.push(v.x,v.y,v.z),m.push(R,1-P),S.push(y++)}p.push(S)}for(let M=0;M<i;M++)for(let S=0;S<s;S++){const P=p[S][M],U=p[S+1][M],F=p[S+1][M+1],R=p[S][M+1];u.push(P,U,R),u.push(U,F,R),T+=6}l.addGroup(x,T,0),x+=T}function _(v){const b=y,T=new Te,L=new I;let M=0;const S=v===!0?e:t,P=v===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,f*P,0),d.push(0,P,0),m.push(.5,.5),y++;const U=y;for(let F=0;F<=i;F++){const A=F/i*c+a,O=Math.cos(A),j=Math.sin(A);L.x=S*j,L.y=f*P,L.z=S*O,h.push(L.x,L.y,L.z),d.push(0,P,0),T.x=O*.5+.5,T.y=j*.5*P+.5,m.push(T.x,T.y),y++}for(let F=0;F<i;F++){const R=b+F,A=U+F;v===!0?u.push(A,A+1,R):u.push(A+1,A,R),M+=3}l.addGroup(x,M,v===!0?1:2),x+=M}}static fromJSON(e){return new xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class No extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new I,v=new I,b=new I;for(let T=0;T<t.length;T+=3)m(t[T+0],_),m(t[T+1],v),m(t[T+2],b),c(_,v,b,g)}function c(g,_,v,b){const T=b+1,L=[];for(let M=0;M<=T;M++){L[M]=[];const S=g.clone().lerp(v,M/T),P=_.clone().lerp(v,M/T),U=T-M;for(let F=0;F<=U;F++)F===0&&M===T?L[M][F]=S:L[M][F]=S.clone().lerp(P,F/U)}for(let M=0;M<T;M++)for(let S=0;S<2*(T-M)-1;S++){const P=Math.floor(S/2);S%2===0?(d(L[M][P+1]),d(L[M+1][P]),d(L[M][P])):(d(L[M][P+1]),d(L[M+1][P+1]),d(L[M+1][P]))}}function l(g){const _=new I;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(g),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function u(){const g=new I;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const v=f(g)/2/Math.PI+.5,b=x(g)/Math.PI+.5;o.push(v,1-b)}y(),h()}function h(){for(let g=0;g<o.length;g+=6){const _=o[g+0],v=o[g+2],b=o[g+4],T=Math.max(_,v,b),L=Math.min(_,v,b);T>.9&&L<.1&&(_<.2&&(o[g+0]+=1),v<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function m(g,_){const v=g*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function y(){const g=new I,_=new I,v=new I,b=new I,T=new Te,L=new Te,M=new Te;for(let S=0,P=0;S<s.length;S+=9,P+=6){g.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),T.set(o[P+0],o[P+1]),L.set(o[P+2],o[P+3]),M.set(o[P+4],o[P+5]),b.copy(g).add(_).add(v).divideScalar(3);const U=f(b);p(T,P+0,g,U),p(L,P+2,_,U),p(M,P+4,v,U)}}function p(g,_,v,b){b<0&&g.x===1&&(o[_]=g.x-1),v.x===0&&v.z===0&&(o[_]=b/2/Math.PI+.5)}function f(g){return Math.atan2(g.z,-g.x)}function x(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}static fromJSON(e){return new No(e.vertices,e.indices,e.radius,e.details)}}const Dr=new I,Rr=new I,Qs=new I,Ir=new an;class T0 extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(kr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},m=[];for(let y=0;y<c;y+=3){o?(l[0]=o.getX(y),l[1]=o.getX(y+1),l[2]=o.getX(y+2)):(l[0]=y,l[1]=y+1,l[2]=y+2);const{a:p,b:f,c:x}=Ir;if(p.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Ir.getNormal(Qs),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const _=(g+1)%3,v=h[g],b=h[_],T=Ir[u[g]],L=Ir[u[_]],M=`${v}_${b}`,S=`${b}_${v}`;S in d&&d[S]?(Qs.dot(d[S].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(L.x,L.y,L.z)),d[S]=null):M in d||(d[M]={index0:l[g],index1:l[_],normal:Qs.clone()})}}for(const y in d)if(d[y]){const{index0:p,index1:f}=d[y];Dr.fromBufferAttribute(a,p),Rr.fromBufferAttribute(a,f),m.push(Dr.x,Dr.y,Dr.z),m.push(Rr.x,Rr.y,Rr.z)}this.setAttribute("position",new Oe(m,3))}}}class Ei extends No{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ei(e.radius,e.detail)}}class Fo extends pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,m=[],y=[],p=[],f=[];for(let x=0;x<=n;x++){const g=[],_=x/n;let v=0;x==0&&o==0?v=.5/t:x==n&&c==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(i+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+T*s)*Math.sin(o+_*a),y.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(T+v,1-_),g.push(l++)}u.push(g)}for(let x=0;x<n;x++)for(let g=0;g<t;g++){const _=u[x][g+1],v=u[x][g],b=u[x+1][g],T=u[x+1][g+1];(x!==0||o>0)&&m.push(_,v,T),(x!==n-1||c<Math.PI)&&m.push(v,b,T)}this.setIndex(m),this.setAttribute("position",new Oe(y,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $n extends pt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let m=0;m<=n;m++)for(let y=0;y<=i;y++){const p=y/i*s,f=m/n*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(p),h.y=(e+t*Math.cos(f))*Math.sin(p),h.z=t*Math.sin(f),a.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(y/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let y=1;y<=i;y++){const p=(i+1)*m+y-1,f=(i+1)*(m-1)+y-1,x=(i+1)*(m-1)+y,g=(i+1)*m+y;o.push(p,f,g),o.push(f,x,g)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}static fromJSON(e){return new $n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class A0 extends Bi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const ul={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class C0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],y=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}}const P0=new C0;class Dc{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const _n={};class L0 extends Error{constructor(e,t){super(e),this.response=t}}class D0 extends Dc{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ul.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:i});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=_n[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,y=m!==0;let p=0;const f=new ReadableStream({start(x){g();function g(){h.read().then(({done:_,value:v})=>{if(_)x.close();else{p+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:y,loaded:p,total:m});for(let T=0,L=u.length;T<L;T++){const M=u[T];M.onProgress&&M.onProgress(b)}x.enqueue(v),g()}})}}});return new Response(f)}else throw new L0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(y=>m.decode(y))}}}).then(l=>{ul.add(e,l);const u=_n[e];delete _n[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=_n[e];if(u===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Rc{constructor(e,t,n=0,i=1/0){this.ray=new Do(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return vo(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)vo(e[i],this,n,t);return n.sort(hl),n}}function hl(r,e){return r.distance-e.distance}function vo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)vo(i[s],e,t,!0)}}class dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class R0 extends Lc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new pt;i.setAttribute("position",new Oe(t,3)),i.setAttribute("color",new Oe(n,3));const s=new hs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new He,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const Nr=new He;class I0 extends Dc{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,i){const s=this,o=new D0(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(f){const x=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let g="",_=0;const v=x.exec(f);v!==null&&(g=v[1],_=new Blob([v[0]]).size);const b={comments:[],elements:[],headerLength:_,objInfo:""},T=g.split(/\r\n|\r|\n/);let L;function M(S,P){const U={type:S[0]};return U.type==="list"?(U.name=S[3],U.countType=S[1],U.itemType=S[2]):U.name=S[1],U.name in P&&(U.name=P[U.name]),U}for(let S=0;S<T.length;S++){let P=T[S];if(P=P.trim(),P==="")continue;const U=P.split(/\s+/),F=U.shift();switch(P=U.join(" "),F){case"format":b.format=U[0],b.version=U[1];break;case"comment":b.comments.push(P);break;case"element":L!==void 0&&b.elements.push(L),L={},L.name=U[0],L.count=parseInt(U[1]),L.properties=[];break;case"property":L.properties.push(M(U,p.propertyNameMapping));break;case"obj_info":b.objInfo=P;break;default:console.log("unhandled",F,U)}}return L!==void 0&&b.elements.push(L),b}function n(f,x){switch(x){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(f);case"float":case"double":case"float32":case"float64":return parseFloat(f)}}function i(f,x){const g=x.split(/\s+/),_={};for(let v=0;v<f.length;v++)if(f[v].type==="list"){const b=[],T=n(g.shift(),f[v].countType);for(let L=0;L<T;L++)b.push(n(g.shift(),f[v].itemType));_[f[v].name]=b}else _[f[v].name]=n(g.shift(),f[v].type);return _}function s(){const f={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};for(const x of Object.keys(p.customPropertyMapping))f[x]=[];return f}function o(f){const x=f.map(_=>_.name);function g(_){for(let v=0,b=_.length;v<b;v++){const T=_[v];if(x.includes(T))return T}return null}return{attrX:g(["x","px","posx"])||"x",attrY:g(["y","py","posy"])||"y",attrZ:g(["z","pz","posz"])||"z",attrNX:g(["nx","normalx"]),attrNY:g(["ny","normaly"]),attrNZ:g(["nz","normalz"]),attrS:g(["s","u","texture_u","tx"]),attrT:g(["t","v","texture_v","ty"]),attrR:g(["red","diffuse_red","r","diffuse_r"]),attrG:g(["green","diffuse_green","g","diffuse_g"]),attrB:g(["blue","diffuse_blue","b","diffuse_b"])}}function a(f,x){const g=s();let _;const v=/end_header\s([\s\S]*)$/;let b="";(_=v.exec(f))!==null&&(b=_[1]);const T=b.split(/\r\n|\r|\n/);let L=0,M=0,S=x.elements[L],P=o(S.properties);for(let U=0;U<T.length;U++){let F=T[U];if(F=F.trim(),F==="")continue;M>=S.count&&(L++,M=0,S=x.elements[L],P=o(S.properties));const R=i(S.properties,F);l(g,S.name,R,P),M++}return c(g)}function c(f){let x=new pt;f.indices.length>0&&x.setIndex(f.indices),x.setAttribute("position",new Oe(f.vertices,3)),f.normals.length>0&&x.setAttribute("normal",new Oe(f.normals,3)),f.uvs.length>0&&x.setAttribute("uv",new Oe(f.uvs,2)),f.colors.length>0&&x.setAttribute("color",new Oe(f.colors,3)),f.faceVertexUvs.length>0&&(x=x.toNonIndexed(),x.setAttribute("uv",new Oe(f.faceVertexUvs,2)));for(const g of Object.keys(p.customPropertyMapping))f[g].length>0&&x.setAttribute(g,new Oe(f[g],p.customPropertyMapping[g].length));return x.computeBoundingSphere(),x}function l(f,x,g,_){if(x==="vertex"){f.vertices.push(g[_.attrX],g[_.attrY],g[_.attrZ]),_.attrNX!==null&&_.attrNY!==null&&_.attrNZ!==null&&f.normals.push(g[_.attrNX],g[_.attrNY],g[_.attrNZ]),_.attrS!==null&&_.attrT!==null&&f.uvs.push(g[_.attrS],g[_.attrT]),_.attrR!==null&&_.attrG!==null&&_.attrB!==null&&(Nr.setRGB(g[_.attrR]/255,g[_.attrG]/255,g[_.attrB]/255).convertSRGBToLinear(),f.colors.push(Nr.r,Nr.g,Nr.b));for(const v of Object.keys(p.customPropertyMapping))for(const b of p.customPropertyMapping[v])f[v].push(g[b])}else if(x==="face"){const v=g.vertex_indices||g.vertex_index,b=g.texcoord;v.length===3?(f.indices.push(v[0],v[1],v[2]),b&&b.length===6&&(f.faceVertexUvs.push(b[0],b[1]),f.faceVertexUvs.push(b[2],b[3]),f.faceVertexUvs.push(b[4],b[5]))):v.length===4&&(f.indices.push(v[0],v[1],v[3]),f.indices.push(v[1],v[2],v[3]))}}function u(f,x){const g={};let _=0;for(let v=0;v<x.length;v++){const b=x[v],T=b.valueReader;if(b.type==="list"){const L=[],M=b.countReader.read(f+_);_+=b.countReader.size;for(let S=0;S<M;S++)L.push(T.read(f+_)),_+=T.size;g[b.name]=L}else g[b.name]=T.read(f+_),_+=T.size}return[g,_]}function h(f,x,g){function _(v,b,T){switch(b){case"int8":case"char":return{read:L=>v.getInt8(L),size:1};case"uint8":case"uchar":return{read:L=>v.getUint8(L),size:1};case"int16":case"short":return{read:L=>v.getInt16(L,T),size:2};case"uint16":case"ushort":return{read:L=>v.getUint16(L,T),size:2};case"int32":case"int":return{read:L=>v.getInt32(L,T),size:4};case"uint32":case"uint":return{read:L=>v.getUint32(L,T),size:4};case"float32":case"float":return{read:L=>v.getFloat32(L,T),size:4};case"float64":case"double":return{read:L=>v.getFloat64(L,T),size:8}}}for(let v=0,b=f.length;v<b;v++){const T=f[v];T.type==="list"?(T.countReader=_(x,T.countType,g),T.valueReader=_(x,T.itemType,g)):T.valueReader=_(x,T.type,g)}}function d(f,x){const g=s(),_=x.format==="binary_little_endian",v=new DataView(f,x.headerLength);let b,T=0;for(let L=0;L<x.elements.length;L++){const M=x.elements[L],S=M.properties,P=o(S);h(S,v,_);for(let U=0;U<M.count;U++){b=u(T,S),T+=b[1];const F=b[0];l(g,M.name,F,P)}}return c(g)}function m(f){let x=0,g=!0,_="";const v=[];do{const b=String.fromCharCode(f[x++]);b!==`
`&&b!=="\r"?_+=b:(_==="end_header"&&(g=!1),_!==""&&(v.push(_),_=""))}while(g&&x<f.length);return v.join("\r")+"\r"}let y;const p=this;if(e instanceof ArrayBuffer){const f=new Uint8Array(e),x=m(f),g=t(x);if(g.format==="ascii"){const _=new TextDecoder().decode(f);y=a(_,g)}else y=d(e,g)}else y=a(e,t(e));return y}}const Vn=new Rc,At=new I,Ln=new I,$e=new ht,fl={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Js={type:"change"},pl={type:"mouseDown"},ml={type:"mouseUp",mode:null},gl={type:"objectChange"};class Ic extends ft{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new k0;this._gizmo=n,this.add(n);const i=new B0;this._plane=i,this.add(i);const s=this;function o(g,_){let v=_;Object.defineProperty(s,g,{get:function(){return v!==void 0?v:_},set:function(b){v!==b&&(v=b,i[g]=b,n[g]=b,s.dispatchEvent({type:g+"-changed",value:b}),s.dispatchEvent(Js))}}),s[g]=_,i[g]=_,n[g]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,c=new I,l=new ht,u=new ht,h=new I,d=new ht,m=new I,y=new I,p=new I,f=0,x=new I;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",m),o("pointEnd",y),o("rotationAxis",p),o("rotationAngle",f),o("eye",x),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new ht,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new ht,this._scaleStart=new I,this._getPointer=N0.bind(this),this._onPointerDown=O0.bind(this),this._onPointerHover=F0.bind(this),this._onPointerMove=z0.bind(this),this._onPointerUp=U0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Vn.setFromCamera(e,this.camera);const t=eo(this._gizmo.picker[this.mode],Vn);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Vn.setFromCamera(e,this.camera);const t=eo(this._plane,Vn,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,pl.mode=this.mode,this.dispatchEvent(pl)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;Vn.setFromCamera(e,this.camera);const o=eo(this._plane,Vn,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion($e.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(At.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(At.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ln.set(a,a,a)}else At.copy(this.pointStart),Ln.copy(this.pointEnd),At.applyQuaternion(this._worldQuaternionInv),Ln.applyQuaternion(this._worldQuaternionInv),Ln.divide(At),t.search("X")===-1&&(Ln.x=1),t.search("Y")===-1&&(Ln.y=1),t.search("Z")===-1&&(Ln.z=1);i.scale.copy(this._scaleStart).multiply(Ln),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(At.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(At.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(fl[t]),At.copy(fl[t]),s==="local"&&At.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(At.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply($e.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy($e.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Js),this.dispatchEvent(gl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(ml.mode=this.mode,this.dispatchEvent(ml)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Js),this.dispatchEvent(gl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Vn}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function N0(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function F0(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function O0(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function z0(r){this.enabled&&this.pointerMove(this._getPointer(r))}function U0(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function eo(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Fr=new lr,Ge=new I(0,1,0),_l=new I(0,0,0),xl=new Ye,Or=new ht,Vr=new ht,nn=new I,vl=new Ye,tr=new I(1,0,0),Xn=new I(0,1,0),nr=new I(0,0,1),zr=new I,Zi=new I,Ki=new I;class k0 extends ft{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ls({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new hs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const y=e.clone();y.color.setHex(7895160);const p=new xt(0,.04,.1,12);p.translate(0,.05,0);const f=new Ke(.08,.08,.08);f.translate(0,.04,0);const x=new pt;x.setAttribute("position",new Oe([0,0,0,1,0,0],3));const g=new xt(.0075,.0075,.5,3);g.translate(0,.25,0);function _(O,j){const Y=new $n(O,.0075,3,64,j*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function v(){const O=new pt;return O.setAttribute("position",new Oe([0,0,0,1,1,1],3)),O}const b={X:[[new ce(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new ce(p,s),[-.5,0,0],[0,0,Math.PI/2]],[new ce(g,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ce(p,o),[0,.5,0]],[new ce(p,o),[0,-.5,0],[Math.PI,0,0]],[new ce(g,o)]],Z:[[new ce(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ce(p,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ce(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new ce(new Ei(.1,0),h.clone()),[0,0,0]]],XY:[[new ce(new Ke(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new ce(new Ke(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Ke(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new ce(new xt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new xt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new xt(.2,0,.6,4),n),[0,.3,0]],[new ce(new xt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new xt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new xt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Ei(.2,0),n)]],XY:[[new ce(new Ke(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new Ke(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Ke(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new ce(new Ei(.01,2),i),null,null,null,"helper"]],END:[[new ce(new Ei(.01,2),i),null,null,null,"helper"]],DELTA:[[new xn(v(),i),null,null,null,"helper"]],X:[[new xn(x,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new xn(x,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new xn(x,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},M={XYZE:[[new ce(_(.5,1),y),null,[0,Math.PI/2,0]]],X:[[new ce(_(.5,.5),s)]],Y:[[new ce(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ce(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ce(_(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new xn(x,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},P={XYZE:[[new ce(new Fo(.25,10,8),n)]],X:[[new ce(new $n(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ce(new $n(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ce(new $n(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ce(new $n(.75,.1,2,24),n)]]},U={X:[[new ce(f,s),[.5,0,0],[0,0,-Math.PI/2]],[new ce(g,s),[0,0,0],[0,0,-Math.PI/2]],[new ce(f,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ce(f,o),[0,.5,0]],[new ce(g,o)],[new ce(f,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ce(f,a),[0,0,.5],[Math.PI/2,0,0]],[new ce(g,a),[0,0,0],[Math.PI/2,0,0]],[new ce(f,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ce(new Ke(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ce(new Ke(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Ke(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Ke(.1,.1,.1),h.clone())]]},F={X:[[new ce(new xt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new xt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new xt(.2,0,.6,4),n),[0,.3,0]],[new ce(new xt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new xt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new xt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ce(new Ke(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new Ke(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Ke(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Ke(.2,.2,.2),n),[0,0,0]]]},R={X:[[new xn(x,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new xn(x,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new xn(x,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function A(O){const j=new ft;for(const Y in O)for(let q=O[Y].length;q--;){const Z=O[Y][q][0].clone(),K=O[Y][q][1],fe=O[Y][q][2],G=O[Y][q][3],Q=O[Y][q][4];Z.name=Y,Z.tag=Q,K&&Z.position.set(K[0],K[1],K[2]),fe&&Z.rotation.set(fe[0],fe[1],fe[2]),G&&Z.scale.set(G[0],G[1],G[2]),Z.updateMatrix();const ie=Z.geometry.clone();ie.applyMatrix4(Z.matrix),Z.geometry=ie,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),j.add(Z)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=A(b)),this.add(this.gizmo.rotate=A(M)),this.add(this.gizmo.scale=A(U)),this.add(this.picker.translate=A(T)),this.add(this.picker.rotate=A(P)),this.add(this.picker.scale=A(F)),this.add(this.helper.translate=A(L)),this.add(this.helper.rotate=A(S)),this.add(this.helper.scale=A(R)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Vr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&($e.setFromEuler(Fr.set(0,0,0)),o.quaternion.copy(n).multiply($e),Math.abs(Ge.copy(tr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&($e.setFromEuler(Fr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply($e),Math.abs(Ge.copy(Xn).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&($e.setFromEuler(Fr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply($e),Math.abs(Ge.copy(nr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&($e.setFromEuler(Fr.set(0,Math.PI/2,0)),Ge.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(xl.lookAt(_l,Ge,Xn)),o.quaternion.multiply($e),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),At.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),At.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(At),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ge.copy(tr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ge.copy(Xn).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ge.copy(nr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ge.copy(nr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ge.copy(tr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ge.copy(Xn).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Or.copy(n),Ge.copy(this.eye).applyQuaternion($e.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(xl.lookAt(this.eye,_l,Xn)),o.name==="X"&&($e.setFromAxisAngle(tr,Math.atan2(-Ge.y,Ge.z)),$e.multiplyQuaternions(Or,$e),o.quaternion.copy($e)),o.name==="Y"&&($e.setFromAxisAngle(Xn,Math.atan2(Ge.x,Ge.z)),$e.multiplyQuaternions(Or,$e),o.quaternion.copy($e)),o.name==="Z"&&($e.setFromAxisAngle(nr,Math.atan2(Ge.y,Ge.x)),$e.multiplyQuaternions(Or,$e),o.quaternion.copy($e))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class B0 extends ce{constructor(){super(new cs(1e5,1e5,2,2),new ls({visible:!1,wireframe:!0,side:vn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),zr.copy(tr).applyQuaternion(t==="local"?this.worldQuaternion:Vr),Zi.copy(Xn).applyQuaternion(t==="local"?this.worldQuaternion:Vr),Ki.copy(nr).applyQuaternion(t==="local"?this.worldQuaternion:Vr),Ge.copy(Zi),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ge.copy(this.eye).cross(zr),nn.copy(zr).cross(Ge);break;case"Y":Ge.copy(this.eye).cross(Zi),nn.copy(Zi).cross(Ge);break;case"Z":Ge.copy(this.eye).cross(Ki),nn.copy(Ki).cross(Ge);break;case"XY":nn.copy(Ki);break;case"YZ":nn.copy(zr);break;case"XZ":Ge.copy(Ki),nn.copy(Zi);break;case"XYZ":case"E":nn.set(0,0,0);break}break;case"rotate":default:nn.set(0,0,0)}nn.length()===0?this.quaternion.copy(this.cameraQuaternion):(vl.lookAt(At.set(0,0,0),nn,Ge),this.quaternion.setFromRotationMatrix(vl)),super.updateMatrixWorld(e)}}const yl={type:"change"},to={type:"start"},Ml={type:"end"};class G0 extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Tt),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yl),n.update(),s=i.NONE},this.update=function(){const D=new I,z=new ht().setFromUnitVectors(e.up,new I(0,1,0)),le=z.clone().invert(),de=new I,ae=new ht,ge=2*Math.PI;return function(){const Le=n.object.position;D.copy(Le).sub(n.target),D.applyQuaternion(z),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&S(L()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let De=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(De)&&isFinite(Be)&&(De<-Math.PI?De+=ge:De>Math.PI&&(De-=ge),Be<-Math.PI?Be+=ge:Be>Math.PI&&(Be-=ge),De<=Be?a.theta=Math.max(De,Math.min(Be,a.theta)):a.theta=a.theta>(De+Be)/2?Math.max(De,a.theta):Math.min(Be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(le),Le.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||de.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(yl),de.copy(n.object.position),ae.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",kt),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Tt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new dl,c=new dl;let l=1;const u=new I;let h=!1;const d=new Te,m=new Te,y=new Te,p=new Te,f=new Te,x=new Te,g=new Te,_=new Te,v=new Te,b=[],T={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function S(D){c.theta-=D}function P(D){c.phi-=D}const U=function(){const D=new I;return function(le,de){D.setFromMatrixColumn(de,0),D.multiplyScalar(-le),u.add(D)}}(),F=function(){const D=new I;return function(le,de){n.screenSpacePanning===!0?D.setFromMatrixColumn(de,1):(D.setFromMatrixColumn(de,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(le),u.add(D)}}(),R=function(){const D=new I;return function(le,de){const ae=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;D.copy(ge).sub(n.target);let pe=D.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*le*pe/ae.clientHeight,n.object.matrix),F(2*de*pe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(le*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),F(de*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function A(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(D){d.set(D.clientX,D.clientY)}function Y(D){g.set(D.clientX,D.clientY)}function q(D){p.set(D.clientX,D.clientY)}function Z(D){m.set(D.clientX,D.clientY),y.subVectors(m,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;S(2*Math.PI*y.x/z.clientHeight),P(2*Math.PI*y.y/z.clientHeight),d.copy(m),n.update()}function K(D){_.set(D.clientX,D.clientY),v.subVectors(_,g),v.y>0?A(M()):v.y<0&&O(M()),g.copy(_),n.update()}function fe(D){f.set(D.clientX,D.clientY),x.subVectors(f,p).multiplyScalar(n.panSpeed),R(x.x,x.y),p.copy(f),n.update()}function G(D){D.deltaY<0?O(M()):D.deltaY>0&&A(M()),n.update()}function Q(D){let z=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),z=!0;break}z&&(D.preventDefault(),n.update())}function ie(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);d.set(D,z)}}function se(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);p.set(D,z)}}function V(){const D=b[0].pageX-b[1].pageX,z=b[0].pageY-b[1].pageY,le=Math.sqrt(D*D+z*z);g.set(0,le)}function Se(){n.enableZoom&&V(),n.enablePan&&se()}function _e(){n.enableZoom&&V(),n.enableRotate&&ie()}function me(D){if(b.length==1)m.set(D.pageX,D.pageY);else{const le=be(D),de=.5*(D.pageX+le.x),ae=.5*(D.pageY+le.y);m.set(de,ae)}y.subVectors(m,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;S(2*Math.PI*y.x/z.clientHeight),P(2*Math.PI*y.y/z.clientHeight),d.copy(m)}function ue(D){if(b.length===1)f.set(D.pageX,D.pageY);else{const z=be(D),le=.5*(D.pageX+z.x),de=.5*(D.pageY+z.y);f.set(le,de)}x.subVectors(f,p).multiplyScalar(n.panSpeed),R(x.x,x.y),p.copy(f)}function ke(D){const z=be(D),le=D.pageX-z.x,de=D.pageY-z.y,ae=Math.sqrt(le*le+de*de);_.set(0,ae),v.set(0,Math.pow(_.y/g.y,n.zoomSpeed)),A(v.y),g.copy(_)}function Ee(D){n.enableZoom&&ke(D),n.enablePan&&ue(D)}function ye(D){n.enableZoom&&ke(D),n.enableRotate&&me(D)}function ot(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",mt),n.domElement.addEventListener("pointerup",Je)),te(D),D.pointerType==="touch"?C(D):Ze(D))}function mt(D){n.enabled!==!1&&(D.pointerType==="touch"?w(D):ze(D))}function Je(D){ne(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(Ml),s=i.NONE}function Mt(D){ne(D)}function Ze(D){let z;switch(D.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case ai.DOLLY:if(n.enableZoom===!1)return;Y(D),s=i.DOLLY;break;case ai.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;q(D),s=i.PAN}else{if(n.enableRotate===!1)return;j(D),s=i.ROTATE}break;case ai.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;j(D),s=i.ROTATE}else{if(n.enablePan===!1)return;q(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function ze(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(D);break;case i.DOLLY:if(n.enableZoom===!1)return;K(D);break;case i.PAN:if(n.enablePan===!1)return;fe(D);break}}function kt(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(to),G(D),n.dispatchEvent(Ml))}function Tt(D){n.enabled===!1||n.enablePan===!1||Q(D)}function C(D){switch(oe(D),b.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),s=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function w(D){switch(oe(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(D),n.update();break;default:s=i.NONE}}function H(D){n.enabled!==!1&&D.preventDefault()}function te(D){b.push(D)}function ne(D){delete T[D.pointerId];for(let z=0;z<b.length;z++)if(b[z].pointerId==D.pointerId){b.splice(z,1);return}}function oe(D){let z=T[D.pointerId];z===void 0&&(z=new Te,T[D.pointerId]=z),z.set(D.pageX,D.pageY)}function be(D){const z=D.pointerId===b[0].pointerId?b[1]:b[0];return T[z.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",kt,{passive:!1}),this.update()}}const Nc="t",Fc="s",V0="r",H0=(r,e)=>r.reduce((t,n,i)=>(i%e==0?t.push([n]):t[t.length-1].push(n))&&t,[]),W0=r=>H0(r,Math.sqrt(r.length)),bl=r=>W0(r.clone().transpose().elements);class Oc{#t;#e;_camera;_scene;_cameraControl;_mouseEvent;constructor(e=13684944){this._camera=new Ht(50,4/3,.1,1e3),this._scene=new E0,this._scene.background=new He(e),this.#e=new Pc,this.#t=new I0,this.#e.setSize(1e3,750),this._camera.position.set(2,2,2),this._camera.lookAt(0,0,0);const t=new R0(1);this._scene.add(t),this._cameraControl=new G0(this._camera,this.canvas),this._cameraControl.update(),window.addEventListener("mousemove",this.#n.bind(this)),window.addEventListener("resize",this.#i.bind(this))}get canvas(){return this.#e.domElement}get cameraControl(){return this._cameraControl}#n(e){this._mouseEvent=e}#i(){(this.canvas.width!==this.canvas.clientWidth||this.canvas.height!==this.canvas.clientHeight)&&(this.#e.setSize(this.canvas.clientWidth,this.canvas.clientHeight,!1),this._camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this._camera.updateProjectionMatrix())}_disableCamera(e){this._cameraControl.enabled=!e.value}async _fetchMesh(e){let t;try{t=await this.#t.loadAsync(`${zi}/experiment/${e}/mesh`)}catch(i){throw i?.response&&await Ui(i.response),i}t.computeVertexNormals();const n=new A0;return new ce(t,n)}render(){this.#e.render(this._scene,this._camera)}runLoop(){requestAnimationFrame(this.runLoop.bind(this)),this._cameraControl.update(),this.render()}}class X0 extends Oc{#t;#e;#n;constructor(...e){super(...e),this.#e=this.#i(),this._scene.add(this.#e),this.#n=new Ic(this._camera,this.canvas),this.#n.attach(this.#e),this._scene.add(this.#n),this.#c(),this.#n.addEventListener("dragging-changed",this._disableCamera.bind(this)),window.addEventListener("keydown",this.#a.bind(this))}#i(e=1,t=0){const n=new Ke(e,e,e),i=new T0(n),s=new hs({color:t});return new Lc(i,s)}#a(e){!this.#e.visible||!this._mouseEvent||this._mouseEvent.target!==this.canvas||(this.#s(e),this.render())}#s(e){switch(e.key){case Nc:this.#n.setMode("translate");break;case Fc:this.#n.setMode("scale");break}}#l(){this.#e.applyMatrix4(this.#e.matrixWorld.invert())}#r(e){this.#e.visible=e,this.#n.showX=this.#n.showY=this.#n.showZ=e,this.#n.enabled=e}#o(){this.#r(!0)}#c(){this.#r(!1)}async setMesh(e,t=!1){t&&this.resetMesh(),this.#t=await super._fetchMesh(e),this._scene.add(this.#t),this.#l(),this.#o()}resetMesh(){this.#t&&(this._scene.remove(this.#t),this.#t=null,this.#c())}get aabbArray(){if(!this.#e||!this.#e.visible)return null;const e=new ki;return e.setFromObject(this.#e),[e.min.toArray(),e.max.toArray()]}get hasMesh(){return!!this.#t}}class q0 extends Oc{#t;#e=new Map;constructor(...e){super(...e),this.#t=new Rc,window.addEventListener("keydown",this.#n.bind(this))}#n(e){const t=Array.from(this.#c());if(!t.length||!this._mouseEvent||this._mouseEvent.target!==this.canvas)return;const n=this.#a(this._mouseEvent);this.#t.setFromCamera(n,this._camera);const i=this.#t.intersectObjects(t);if(!i.length)return;const s=this.#l(i[0].object.id);this.#i(e,s)}#i(e,t){switch(e.key){case Nc:t.setMode("translate");break;case V0:t.setMode("rotate");break;case Fc:t.setMode("scale");break}}#a(e){const t=this.canvas.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:(e.clientY-t.top)/t.height*-2+1}}#s(e){return this._scene.getObjectById(e)}#l(e){const t=this.#e.get(e);return this._scene.getObjectById(t)}#r(e,t){this.#e.set(e.id,t.id)}#o(e){this.#e.delete(e.id)}*#c(){for(const e of this.#e.keys())yield this.#s(e)}async addMesh(e){const t=await super._fetchMesh(e);this._scene.add(t);const n=new Ic(this._camera,this.canvas);return n.attach(t),n.addEventListener("dragging-changed",this._disableCamera.bind(this)),this._scene.add(n),this.#r(t,n),t.id}removeMesh(e){const t=this.#s(e);this._scene.remove(t);const n=this.#l(e);this._scene.remove(n),this.#o(t)}getMeshTransformMatrix(e){return bl(this.#s(e).matrixWorld)}get cameraExtrinsics(){const e=new Ye;e.makeRotationX(Math.PI);const t=new Ye;return t.multiplyMatrices(this._camera.matrixWorld,e),bl(t)}get cameraFocalLength(){return this._camera.getFocalLength()*this._camera.filmGauge}get imageSize(){return[this._camera.getFilmHeight()*this._camera.filmGauge,this._camera.getFilmWidth()*this._camera.filmGauge]}}const Sl=qt("<div></div>",2),j0=localStorage,$0=()=>{const r=Ot("outer"),e=Ot(""),t=new X0;t.runLoop();const n=async()=>{e.setErrors(null);const s=j0.getItem("email");if(!s){e.setErrors({message:"Email is invalid!"});return}if(!t.hasMesh){e.setErrors({message:"Mesh is missing!"});return}try{const o=await Eh(s,e.value,t.aabbArray,r.value==="inner");e.setValue(o)}catch(o){e.setErrors({message:o.message})}},i=async()=>{e.setErrors(null);try{await t.setMesh(e.value,!0)}catch(s){e.setErrors({message:s.message})}};return[J(Wt,{text:"Edit scene with AABB"}),J(Y0,{get children(){return[(()=>{const s=Sl.cloneNode(!0);return Qe(s,()=>t.canvas),s})(),J(ss,{get children(){return[(()=>{const s=Sl.cloneNode(!0);return Qe(s,J(Wt,{text:"Region",sidebar:!0}),null),Qe(s,J(wl,{get children(){return[J(Zr,{name:"region-edit",id:"region-edit-inner",value:"inner",placeholder:"Inner",onChange:o=>r.setValue(o.target.value)}),J(Zr,{name:"region-edit",id:"region-edit-outer",value:"outer",placeholder:"Outer",checked:!0,onChange:o=>r.setValue(o.target.value)})]}}),null),Qe(s,J(Wt,{text:"Load Experiment",sidebar:!0}),null),Qe(s,J(wl,{get children(){return[J(Qn,{name:"experimentId",placeholder:"Experiment Id",control:e}),J(Mn,{name:"submit",placeholder:"Load",type:"button",onClick:i})]}}),null),s})(),J(Mn,{bottom:!0,name:"apply",placeholder:"Apply",type:"button",get disabled(){return!e.isValid},onClick:n})]}})]}})]},Y0=We("section")`
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`,wl=We("fieldset")`
  width: 256px;
`,El=""+new URL("arrow-7fb9588e.svg",import.meta.url).href,Z0=""+new URL("image-ico-acd132cf.svg",import.meta.url).href,K0=qt("<img>",1),Q0=r=>{const e="Choose files",[t,n]=Ft(e),i=s=>n(()=>{const o=s.target.files;return o.length===0?e:`Chosen ${o.length} file${o.length===1?"":"s"}`});return J(J0,{get children(){return[J(rs,en({type:"file",onChange:i,get placeholder(){return t()}},r)),(()=>{const s=K0.cloneNode(!0);return Sn(s,"src",Z0),s})()]}})},J0=We("div")`
  position: relative;
  input {
    display: none;
  }
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  label:hover > img {
    filter: invert();
  }
  label {
    display: block;
    padding: 6px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.25s;
    border: 2px solid var(--mainColor);
    &:hover {
      color: white;
    }
    &:hover {
      background-color: var(--mainColor);
    }
  }
`,zc=r=>[J(Wt,{get text(){return r.header}}),J(e_,{get children(){return r.children}})],e_=We("section")`
  position: relative;
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`,t_=r=>r.slice(0,r.lastIndexOf(".")),Tl=r=>r.map(e=>t_(e.name)),n_=r=>r.type.startsWith("image/"),Al=(r,e)=>r.name<e.name?r:e,i_=r=>r.reduce((e,t)=>(e[+n_(t)].push(t),e),[[],[]]),r_=(r,e)=>{const t=new Set(r);for(const n of e)t.has(n)?t.delete(n):t.add(n);return t},s_=(r,e)=>Array.from(r_(Tl(r),Tl(e))),o_=r=>new Promise((e,t)=>{const n=new FileReader;n.onload=i=>{const s=new Image;s.src=i.target.result,s.onload=()=>e(s),s.onerror=t},n.readAsDataURL(r)}),a_=async r=>JSON.parse(await r.text());class l_{#t;#e;#n;#i=[];#a;#s;#l;#r;#o;#c;constructor(e,t){this.#t=e.getContext("2d",{willReadFrequently:!0});const n=document.createElement("canvas");this.#e=n.getContext("2d",{willReadFrequently:!0}),this.#o="#fff",this.#r=t,this.#c={color:this.#o,lineWidth:this.#r},this.#_()}#_(){window.addEventListener("mousemove",this.#x.bind(this)),window.addEventListener("keydown",this.#v.bind(this)),this.#u.addEventListener("mousedown",this.#y.bind(this)),this.#u.addEventListener("mousemove",this.#M.bind(this)),this.#u.addEventListener("mouseout",this.#f.bind(this)),this.#u.addEventListener("mouseup",this.#f.bind(this))}#x(e){this.#l=e}#v(e){if(!(!this.#l||this.#l.target!==this.#u))switch(e.key){case"i":this.#b();break;case"u":this.#r+=1;break;case"d":this.#r=Math.max(this.#r-1,0);break}}#y(e){this.#a||(this.#a=!0,this.#s=this.#p(e))}#M(e){if(!this.#a)return;this.#t.beginPath(),this.#t.strokeStyle=this.#o,this.#t.lineCap="round",this.#t.lineWidth=this.#r,this.#t.moveTo(this.#s.x,this.#s.y);const t=this.#p(e);this.#t.lineTo(t.x,t.y),this.#t.stroke(),this.#s=t}#f(){this.#a&&(this.#a=!1,this.#s=null)}#b(){this.#o=this.#o==="#000"?"#fff":"#000"}#p(e){const t=this.#u.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}#m(e,t=void 0){typeof t>"u"&&(t=this.#i[this.#n]),e.canvas.height=t.height,e.canvas.width=t.width,e.putImageData(t,0,0)}#g(e,t=!1){const n=e.getImageData(0,0,e.canvas.width,e.canvas.height);return t&&(this.#i[this.#n]=n),n}#S(e){return this.#m(this.#e,e),new Promise(t=>this.#d.toBlob(n=>{this.#h(this.#e),t(n)}))}#w(e,t){this.#d.height=t,this.#d.width=e,this.#e.fillRect(0,0,e,t);const n=this.#e.getImageData(0,0,e,t);return this.#h(this.#e),n}#h(e){e.clearRect(0,0,e.canvas.width,e.canvas.height)}get#u(){return this.#t.canvas}get#d(){return this.#e.canvas}addMask(e,t){const n=this.#w(e,t);return this.#i.push(n)-1}setMask(e){this.#n!==e&&(this.#n!=null&&this.#g(this.#t,!0),this.#m(this.#t,this.#i[e]),this.#n=e)}reset(){this.#o=this.#c.color,this.#r=this.#c.lineWidth,this.#h(this.#t),this.#i.splice(0,this.#i.length),this.#n=null}async getMasks(){this.#g(this.#t,!0);const e=[];for(const t of this.#i)e.push(await this.#S(t));return e}}const Cl=qt("<img>",1),c_=qt("<div></div>",2),u_=localStorage,h_=()=>{const r=Ot(""),e=Ot("outer"),[t,n]=Ft([]),[i,s]=Ft([]),[o,a]=Ft(0);let c,l,u,h;const d=()=>t()[o()],m=()=>t().length;zl(()=>h=new l_(u,24));const y=async x=>{if(r.setErrors(null),!x.target.files.length){r.setErrors({message:"Files are missing"});return}const g=Array.from(x.target.files),[_,v]=i_(g),b=s_(v,_);if(b.length){r.setErrors({message:`Camera JSON or image is missing for ${b.join(", ")} files`});return}v.sort(Al),_.sort(Al);const T=await Promise.all(v.map(o_)),L=await Promise.all(_.map(a_));h.reset(),T.forEach(M=>h.addMask(M.width,M.height)),a(0),h.setMask(0),n(T),s(L)},p=async()=>{const x=u_.getItem("email");if(!x){r.setErrors({message:"Email is invalid!"});return}if(!t().length){r.setErrors({message:"Images are missing"});return}if(!r.value.length){r.setErrors({message:"Base experiment id is missing"});return}try{console.log(e.value);const g=await h.getMasks(),_=await Th(x,r.value,g,i(),e.value==="inner");r.setValue(_)}catch(g){r.setErrors({message:g.message})}},f=x=>{if(m()===0)return;const g=Math.max(0,Math.min(o()+x,m()-1));o()!==g&&(a(g),l.disabled=o()===0,c.disabled=o()===Math.max(0,m()-1),h.setMask(o()))};return J(zc,{header:"Edit scene with image masks",get children(){return[J(d_,{get children(){return[J(f_,{ref(x){const g=u;typeof g=="function"?g(x):u=x}}),Me(()=>Me(()=>!!t().length)()?J(p_,{get src(){return d().src},get width(){return d.width},get height(){return d.height}}):[]),J(Ll,{type:"button",ref(x){const g=l;typeof g=="function"?g(x):l=x},id:"buttonPrev",onClick:()=>f(-1),get children(){const x=Cl.cloneNode(!0);return Sn(x,"src",El),x}}),J(Ll,{type:"button",ref(x){const g=c;typeof g=="function"?g(x):c=x},id:"buttonNext",onClick:()=>f(1),get children(){const x=Cl.cloneNode(!0);return Sn(x,"src",El),x}})]}}),J(ss,{get children(){return[(()=>{const x=c_.cloneNode(!0);return Qe(x,J(Wt,{text:"Region",sidebar:!0}),null),Qe(x,J(Pl,{get children(){return[J(Zr,{name:"region-edit-mask",id:"region-edit-mask-inner",value:"inner",placeholder:"Inner",onChange:g=>e.setValue(g.target.value)}),J(Zr,{name:"region-edit-mask",id:"region-edit-mask-outer",value:"outer",placeholder:"Outer",checked:!0,onChange:g=>e.setValue(g.target.value)})]}}),null),Qe(x,J(Wt,{text:"Load files",sidebar:!0}),null),Qe(x,J(Q0,{id:"files",name:"files",onInput:y,accept:"image/*,application/json",multiple:!0}),null),x})(),J(Pl,{left:!0,get children(){return[J(Qn,{name:"experimentId",placeholder:"Experiment Id",control:r}),J(Mn,{name:"apply",placeholder:"Apply",type:"button",onClick:p})]}})]}})]}})},d_=We("div")`
  justify-content: center;
  width: 1000px;
  position: relative;
`,f_=We.canvas`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  cursor: crosshair;
  outline: 1px solid #212121;
  z-index: 1000 !important;
  opacity: 0.4;
`,Pl=We("fieldset")`
  width: 256px;
`,p_=We.img`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 500;
`,Ll=We("button")`
  z-index: 1500;
  position: absolute;
  display: block;
  top: calc(50% - 48px / 2);
  width: 48px;
  height: 48px;
  padding: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity linear 0.25s;
  background-color: var(--mainColor);
  color: white;
  &:not(:disabled):hover {
    opacity: 1;
  }
  &:disabled {
    visibility: hidden;
  }
  &#buttonPrev {
    left: 30px;
    img {
      transform: scaleX(-1);
    }
  }
  &#buttonNext {
    right: 30px;
  }
  img {
    vertical-align: middle;
  }
`,Uc=r=>J(m_,{class:"input-wrapper",get children(){return J(rs,en({type:"text"},r))}}),m_=We("div")`
  input {
    border-width: 0 0 2px;
    &:focus ~ label,
    &:not(:placeholder-shown) + label {
      transform: translate(-4px, -14px);
      padding: 0 1px;
      font-size: 12px;
      background-color: white;
    }
  }
  label {
    font-size: 18px;
    transition: 0.25s all;
    pointer-events: none;
    position: absolute;
    top: 5px;
    left: 10px;
  }
`,g_=qt("<form><div></div></form>",4),__=localStorage,x_=()=>{const r=ah({dataURL:Ot(""),experimentId:Ot("",{readonly:!0,disabled:!0})}),e=()=>r.controls,t=async()=>{e().dataURL.setErrors(null);const n=__.getItem("email");if(!n){e().dataURL.patchErrors({message:"Email is invalid!"});return}if(!e().dataURL.isValid)e().dataURL.markTouched(!0);else{r.markPending(!0);try{const i=await Sh(n,e().dataURL.value);e().experimentId.setValue(i),e().experimentId.markDisabled(!1)}catch(i){e().dataURL.patchErrors({message:i.message})}finally{r.markPending(!1)}}};return[J(Wt,{text:"Train"}),J(v_,{get children(){return J(M_,{get children(){return[(()=>{const n=g_.cloneNode(!0),i=n.firstChild;return Qe(i,J(Uc,{name:"dataURL",type:"text",placeholder:"Data URL",get control(){return e().dataURL}})),n})(),J(y_,{get children(){return[J(Qn,{name:"experimentId",placeholder:"Experiment ID",get control(){return e().experimentId}}),J(Mn,{name:"submit",placeholder:"Train",get disabled(){return r.isPending},type:"button",onClick:t})]}})]}})}})]},v_=We("section")`
  display: flex;
  margin: 50px auto;
  justify-content: center;
`,y_=We("fieldset")`
  bottom: 0;
`,M_=We("div")`
  width: 425px;
  position: relative;
`,no=qt("<div></div>",2),Dl=5,b_=localStorage,S_=()=>{const r=Ot(""),e=Ot(""),t=ch([]),n=new q0;n.runLoop();const i=async()=>{if(r.setErrors(null),t.size==Dl){r.setErrors({message:`The maximum number of experiments is ${Dl}`});return}try{const a=await n.addMesh(r.value),c=Ot(r.value,{data:{meshId:a},readonly:!0});t.push(c),r.setValue(null)}catch(a){r.setErrors({message:a.message})}},s=(a,c)=>{const l=a.data.meshId;n.removeMesh(l),t.removeControl(c()),r.setErrors(null)},o=async()=>{const a=b_.getItem("email");if(!a){e.setErrors({message:"Email is invalid!"});return}if(!t.size){e.setErrors({message:"There are no scenes to compose"});return}try{const c=[];for(const h of t.controls)c.push({experiment_id:h.value,T:n.getMeshTransformMatrix(h.data.meshId)});const l={fx:n.cameraFocalLength,fy:n.cameraFocalLength,camera2world:n.cameraExtrinsics},u=await Ah(a,c,n.imageSize,l);e.setValue(u)}catch(c){e.setErrors({message:c.message})}};return J(zc,{header:"Compose scenes",get children(){return[(()=>{const a=no.cloneNode(!0);return Qe(a,()=>n.canvas),a})(),J(ss,{get children(){return[(()=>{const a=no.cloneNode(!0);return Qe(a,J(Wt,{text:"Add experiment",sidebar:!0}),null),Qe(a,J(io,{get children(){return[J(Qn,{name:"experimentId",placeholder:"Experiment Id",control:r}),J(Mn,{name:"submit",placeholder:"Load",type:"button",get onClick(){return nh(i)}})]}}),null),Qe(a,J(So,{get when(){return!!t.value.length},get children(){return[J(Wt,{text:"Experiments",sidebar:!0}),J(w_,{get children(){return J(nu,{get each(){return t.controls},children:(c,l)=>J(io,{get children(){return[J(Qn,{get name(){return`experimentId_${l()}`},placeholder:"Experiment Id",control:c,showError:!1,disabled:!0}),J(Mn,{name:"submit",placeholder:"Remove",type:"button",onClick:()=>s(c,l)})]}})})}})]}}),null),a})(),(()=>{const a=no.cloneNode(!0);return Qe(a,J(io,{get children(){return[J(Qn,{name:"experimentId",placeholder:"Experiment Id",control:e}),J(Mn,{name:"submit",placeholder:"Render",type:"button",get disabled(){return!r.isValid},onClick:o})]}})),a})()]}})]}})},io=We("fieldset")`
  width: 256px;
`,w_=We("fieldset")`
  display: block;
  row-gap: 24px;
  flex-wrap: wrap;
`,E_=qt("<img>",1),Rl=qt("<div></div>",2),T_=()=>{const[r,e]=Ft(""),t=Ot("");let n;const i=async()=>{if(t.setErrors(null),!!t.isValid)try{const s=await wh(t.value);e(s)}catch(s){t.patchErrors({message:s.message})}};return[J(Wt,{text:"Rendered Image"}),J(A_,{get children(){return[J(P_,{get href(){return r()},ref(s){const o=n;typeof o=="function"?o(s):n=s},download:"rendering.png",get children(){const s=E_.cloneNode(!0);return Jt(()=>Sn(s,"src",r())),s}}),J(ss,{get children(){return[(()=>{const s=Rl.cloneNode(!0);return Qe(s,J(Wt,{text:"Load Experiment",sidebar:!0}),null),Qe(s,J(C_,{get children(){return[J(Qn,{name:"image",placeholder:"Experiment Id",control:t}),J(Mn,{name:"submit",placeholder:"Load",type:"button",onClick:i})]}}),null),s})(),(()=>{const s=Rl.cloneNode(!0);return Qe(s,J(Mn,{name:"apply",placeholder:"Download",type:"button",onClick:()=>n.click()})),s})()]}})]}})]},A_=We("div")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`,C_=We("fieldset")`
  width: 256px;
`,P_=We("a")`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: var(--secondaryColor);
  img {
    display: flex;
    width: 100%;
    /* aspect-ratio: 4/3; */
  }
`,ro=localStorage,L_=()=>{const r=Ot(ro.getItem("email")??"");let e;return zl(()=>{r.setValidators(t=>typeof t=="string"&&t.length===0?{message:"Email is missing"}:e.validity.valid?null:{message:e.validationMessage})}),Fl(()=>{r.isValid?ro.setItem("email",r.value):ro.removeItem("email")}),[J(Wt,{text:"Email"}),J(D_,{get children(){return J(Uc,{type:"email",name:"email",placeholder:"Email",control:r,ref(t){const n=e;typeof n=="function"?n(t):e=t}})}})]},D_=We("fieldset")`
  width: 425px;
  max-width: 425px;
  display: flex;
  margin: auto;
`,R_=()=>[J(L_,{}),J(x_,{}),J($0,{}),J(h_,{}),J(S_,{}),J(T_,{})],I_=()=>[J(N_,{}),J(F_,{get children(){return J(R_,{})}})],N_=Yu`
:root {
  --mainColor: #333333;
  --secondaryColor: #cccccc;
  --thirdColor: #BB2222;
  --errorMessageSize: 24px;
  --outsidePadding: 64px;
}`,F_=We("section")`
  margin: 64px auto;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--headerHeight));
  width: calc(100% - 2 * var(--outsidePadding));
`,O_=document.getElementById("root");hu(()=>J(Gu,{get source(){return Lu()},get children(){return J(I_,{})}}),O_);
