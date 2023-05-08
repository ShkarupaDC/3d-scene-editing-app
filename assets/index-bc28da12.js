(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ct={};function Ac(r){ct.context=r}const Cc=(r,e)=>r===e,$t=Symbol("solid-proxy"),to=Symbol("solid-track"),Pc=Symbol("solid-dev-component"),kr={equals:Cc};let xl=Cl;const vn=1,Gr=2,vl={owned:null,cleanups:null,context:null,owner:null};var qe=null;let Yn=null,Ve=null,vt=null,gn=null,$r=0;function Fr(r,e){const t=Ve,n=qe,i=r.length===0,s=i?vl:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=i?r:()=>r(()=>Gt(()=>Kr(s)));qe=s,Ve=null;try{return Ln(o,!0)}finally{Ve=t,qe=n}}function _n(r,e){e=e?Object.assign({},kr,e):kr;const t={value:r,observers:null,observerSlots:null,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.value)),Al(t,i));return[Tl.bind(t),n]}function Lc(r,e,t){const n=Zr(r,e,!0,vn);Ni(n)}function tn(r,e,t){const n=Zr(r,e,!1,vn);Ni(n)}function yl(r,e,t){xl=Oc;const n=Zr(r,e,!1,vn);n.user=!0,gn?gn.push(n):Ni(n)}function be(r,e,t){t=t?Object.assign({},kr,t):kr;const n=Zr(r,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,Ni(n),Tl.bind(n)}function Kt(r){return Ln(r,!1)}function Gt(r){if(Ve===null)return r();const e=Ve;Ve=null;try{return r()}finally{Ve=e}}function Ml(r,e,t){const n=Array.isArray(r);let i,s=t&&t.defer;return o=>{let a;if(n){a=Array(r.length);for(let l=0;l<r.length;l++)a[l]=r[l]()}else a=r();if(s){s=!1;return}const c=Gt(()=>e(a,i,o));return i=a,c}}function Dc(r){yl(()=>Gt(r))}function go(r){return qe===null||(qe.cleanups===null?qe.cleanups=[r]:qe.cleanups.push(r)),r}function bl(){return Ve}function Sl(){return qe}function wl(r,e){const t=qe,n=Ve;qe=r,Ve=null;try{return Ln(e,!0)}catch(i){xo(i)}finally{qe=t,Ve=n}}function Rc(r){const e=Ve,t=qe;return Promise.resolve().then(()=>{Ve=e,qe=t;let n;return Ln(r,!1),Ve=qe=null,n?n.done:void 0})}function _o(r,e){const t=Symbol("context");return{id:t,Provider:Uc(t),defaultValue:r}}function El(r){let e;return(e=Ll(qe,r.id))!==void 0?e:r.defaultValue}function Ic(r){const e=be(r),t=be(()=>no(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function Tl(){const r=Yn;if(this.sources&&(this.state||r))if(this.state===vn||r)Ni(this);else{const e=vt;vt=null,Ln(()=>Hr(this),!1),vt=e}if(Ve){const e=this.observers?this.observers.length:0;Ve.sources?(Ve.sources.push(this),Ve.sourceSlots.push(e)):(Ve.sources=[this],Ve.sourceSlots=[e]),this.observers?(this.observers.push(Ve),this.observerSlots.push(Ve.sources.length-1)):(this.observers=[Ve],this.observerSlots=[Ve.sources.length-1])}return this.value}function Al(r,e,t){let n=r.value;return(!r.comparator||!r.comparator(n,e))&&(r.value=e,r.observers&&r.observers.length&&Ln(()=>{for(let i=0;i<r.observers.length;i+=1){const s=r.observers[i],o=Yn&&Yn.running;o&&Yn.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?vt.push(s):gn.push(s),s.observers&&Pl(s)),o||(s.state=vn)}if(vt.length>1e6)throw vt=[],new Error},!1)),e}function Ni(r){if(!r.fn)return;Kr(r);const e=qe,t=Ve,n=$r;Ve=qe=r,Nc(r,r.value,n),Ve=t,qe=e}function Nc(r,e,t){let n;try{n=r.fn(e)}catch(i){return r.pure&&(r.state=vn,r.owned&&r.owned.forEach(Kr),r.owned=null),r.updatedAt=t+1,xo(i)}(!r.updatedAt||r.updatedAt<=t)&&(r.updatedAt!=null&&"observers"in r?Al(r,n):r.value=n,r.updatedAt=t)}function Zr(r,e,t,n=vn,i){const s={fn:r,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:qe,context:null,pure:t};return qe===null||qe!==vl&&(qe.owned?qe.owned.push(s):qe.owned=[s]),s}function Vr(r){const e=Yn;if(r.state===0||e)return;if(r.state===Gr||e)return Hr(r);if(r.suspense&&Gt(r.suspense.inFallback))return r.suspense.effects.push(r);const t=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<$r);)(r.state||e)&&t.push(r);for(let n=t.length-1;n>=0;n--)if(r=t[n],r.state===vn||e)Ni(r);else if(r.state===Gr||e){const i=vt;vt=null,Ln(()=>Hr(r,t[0]),!1),vt=i}}function Ln(r,e){if(vt)return r();let t=!1;e||(vt=[]),gn?t=!0:gn=[],$r++;try{const n=r();return Fc(t),n}catch(n){t||(gn=null),vt=null,xo(n)}}function Fc(r){if(vt&&(Cl(vt),vt=null),r)return;const e=gn;gn=null,e.length&&Ln(()=>xl(e),!1)}function Cl(r){for(let e=0;e<r.length;e++)Vr(r[e])}function Oc(r){let e,t=0;for(e=0;e<r.length;e++){const n=r[e];n.user?r[t++]=n:Vr(n)}for(ct.context&&Ac(),e=0;e<t;e++)Vr(r[e])}function Hr(r,e){const t=Yn;r.state=0;for(let n=0;n<r.sources.length;n+=1){const i=r.sources[n];i.sources&&(i.state===vn||t?i!==e&&(!i.updatedAt||i.updatedAt<$r)&&Vr(i):(i.state===Gr||t)&&Hr(i,e))}}function Pl(r){const e=Yn;for(let t=0;t<r.observers.length;t+=1){const n=r.observers[t];(!n.state||e)&&(n.state=Gr,n.pure?vt.push(n):gn.push(n),n.observers&&Pl(n))}}function Kr(r){let e;if(r.sources)for(;r.sources.length;){const t=r.sources.pop(),n=r.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();n<i.length&&(s.sourceSlots[o]=n,i[n]=s,t.observerSlots[n]=o)}}if(r.owned){for(e=0;e<r.owned.length;e++)Kr(r.owned[e]);r.owned=null}if(r.cleanups){for(e=0;e<r.cleanups.length;e++)r.cleanups[e]();r.cleanups=null}r.state=0,r.context=null}function zc(r){return r instanceof Error||typeof r=="string"?r:new Error("Unknown error")}function xo(r){throw r=zc(r),r}function Ll(r,e){return r?r.context&&r.context[e]!==void 0?r.context[e]:Ll(r.owner,e):void 0}function no(r){if(typeof r=="function"&&!r.length)return no(r());if(Array.isArray(r)){const e=[];for(let t=0;t<r.length;t++){const n=no(r[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return r}function Uc(r,e){return function(n){let i;return tn(()=>i=Gt(()=>(qe.context={[r]:n.value},Ic(()=>n.children))),void 0),i}}const Bc=Symbol("fallback");function Io(r){for(let e=0;e<r.length;e++)r[e]()}function kc(r,e,t={}){let n=[],i=[],s=[],o=0,a=e.length>1?[]:null;return go(()=>Io(s)),()=>{let c=r()||[],l,u;return c[to],Gt(()=>{let d=c.length,m,v,p,f,y,_,g,x,b;if(d===0)o!==0&&(Io(s),s=[],n=[],i=[],o=0,a&&(a=[])),t.fallback&&(n=[Bc],i[0]=Fr(A=>(s[0]=A,t.fallback())),o=1);else if(o===0){for(i=new Array(d),u=0;u<d;u++)n[u]=c[u],i[u]=Fr(h);o=d}else{for(p=new Array(d),f=new Array(d),a&&(y=new Array(d)),_=0,g=Math.min(o,d);_<g&&n[_]===c[_];_++);for(g=o-1,x=d-1;g>=_&&x>=_&&n[g]===c[x];g--,x--)p[x]=i[g],f[x]=s[g],a&&(y[x]=a[g]);for(m=new Map,v=new Array(x+1),u=x;u>=_;u--)b=c[u],l=m.get(b),v[u]=l===void 0?-1:l,m.set(b,u);for(l=_;l<=g;l++)b=n[l],u=m.get(b),u!==void 0&&u!==-1?(p[u]=i[l],f[u]=s[l],a&&(y[u]=a[l]),u=v[u],m.set(b,u)):s[l]();for(u=_;u<d;u++)u in p?(i[u]=p[u],s[u]=f[u],a&&(a[u]=y[u],a[u](u))):i[u]=Fr(h);i=i.slice(0,o=d),n=c.slice(0)}return i});function h(d){if(s[u]=d,a){const[m,v]=_n(u);return a[u]=v,e(c[u],m)}return e(c[u])}}}function de(r,e){return Gt(()=>r(e||{}))}function or(){return!0}const io={get(r,e,t){return e===$t?t:r.get(e)},has(r,e){return e===$t?!0:r.has(e)},set:or,deleteProperty:or,getOwnPropertyDescriptor(r,e){return{configurable:!0,enumerable:!0,get(){return r.get(e)},set:or,deleteProperty:or}},ownKeys(r){return r.keys()}};function fs(r){return(r=typeof r=="function"?r():r)?r:{}}function $n(...r){let e=!1;for(let n=0;n<r.length;n++){const i=r[n];e=e||!!i&&$t in i,r[n]=typeof i=="function"?(e=!0,be(i)):i}if(e)return new Proxy({get(n){for(let i=r.length-1;i>=0;i--){const s=fs(r[i])[n];if(s!==void 0)return s}},has(n){for(let i=r.length-1;i>=0;i--)if(n in fs(r[i]))return!0;return!1},keys(){const n=[];for(let i=0;i<r.length;i++)n.push(...Object.keys(fs(r[i])));return[...new Set(n)]}},io);const t={};for(let n=r.length-1;n>=0;n--)if(r[n]){const i=Object.getOwnPropertyDescriptors(r[n]);for(const s in i)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=r.length-1;o>=0;o--){const a=(r[o]||{})[s];if(a!==void 0)return a}}})}return t}function Qr(r,...e){const t=new Set(e.flat());if($t in r){const i=e.map(s=>new Proxy({get(o){return s.includes(o)?r[o]:void 0},has(o){return s.includes(o)&&o in r},keys(){return s.filter(o=>o in r)}},io));return i.push(new Proxy({get(s){return t.has(s)?void 0:r[s]},has(s){return t.has(s)?!1:s in r},keys(){return Object.keys(r).filter(s=>!t.has(s))}},io)),i}const n=Object.getOwnPropertyDescriptors(r);return e.push(Object.keys(n).filter(i=>!t.has(i))),e.map(i=>{const s={};for(let o=0;o<i.length;o++){const a=i[o];a in r&&Object.defineProperty(s,a,n[a]?n[a]:{get(){return r[a]},set(){return!0},enumerable:!0})}return s})}function Gc(r){const e="fallback"in r&&{fallback:()=>r.fallback};return be(kc(()=>r.each,r.children,e||void 0))}function Wr(r){let e=!1;const t=r.keyed,n=be(()=>r.when,void 0,{equals:(i,s)=>e?i===s:!i==!s});return be(()=>{const i=n();if(i){const s=r.children,o=typeof s=="function"&&s.length>0;return e=t||o,o?Gt(()=>s(i)):s}return r.fallback},void 0,void 0)}const Vc=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Hc=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Vc]),Wc=new Set(["innerHTML","textContent","innerText","children"]),Xc=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),No=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),qc=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),jc=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Yc={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function $c(r,e,t){let n=t.length,i=e.length,s=n,o=0,a=0,c=e[i-1].nextSibling,l=null;for(;o<i||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===o){const u=s<n?a?t[a-1].nextSibling:t[s-a]:c;for(;a<s;)r.insertBefore(t[a++],u)}else if(s===a)for(;o<i;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[i-1]){const u=e[--i].nextSibling;r.insertBefore(t[a++],e[o++].nextSibling),r.insertBefore(t[--s],u),e[i]=t[s]}else{if(!l){l=new Map;let h=a;for(;h<s;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<s){let h=o,d=1,m;for(;++h<i&&h<s&&!((m=l.get(e[h]))==null||m!==u+d);)d++;if(d>u-a){const v=e[o];for(;a<u;)r.insertBefore(t[a++],v)}else r.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Fo="_$DX_DELEGATE";function Zc(r,e,t,n={}){let i;return Fr(s=>{i=s,e===document?r():Yt(e,r(),e.firstChild?null:void 0,t)},n.owner),()=>{i(),e.textContent=""}}function yn(r,e,t){const n=document.createElement("template");if(n.innerHTML=r,e&&n.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${n.innerHTML}

${r}. Is your HTML properly formed?`;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function Dl(r,e=window.document){const t=e[Fo]||(e[Fo]=new Set);for(let n=0,i=r.length;n<i;n++){const s=r[n];t.has(s)||(t.add(s),e.addEventListener(s,su))}}function Jr(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)}function Kc(r,e,t,n){n==null?r.removeAttributeNS(e,t):r.setAttributeNS(e,t,n)}function Qc(r,e){e==null?r.removeAttribute("class"):r.className=e}function Jc(r,e,t,n){if(n)Array.isArray(t)?(r[`$$${e}`]=t[0],r[`$$${e}Data`]=t[1]):r[`$$${e}`]=t;else if(Array.isArray(t)){const i=t[0];r.addEventListener(e,t[0]=s=>i.call(r,t[1],s))}else r.addEventListener(e,t)}function eu(r,e,t={}){const n=Object.keys(e||{}),i=Object.keys(t);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||e[a]||(Oo(r,a,!1),delete t[a])}for(s=0,o=n.length;s<o;s++){const a=n[s],c=!!e[a];!a||a==="undefined"||t[a]===c||!c||(Oo(r,a,!0),t[a]=c)}return t}function tu(r,e,t){if(!e)return t?Jr(r,"style"):e;const n=r.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let i,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)i=e[s],i!==t[s]&&(n.setProperty(s,i),t[s]=i);return t}function vo(r,e={},t,n){const i={};return n||tn(()=>i.children=Ti(r,e.children,i.children)),tn(()=>e.ref&&e.ref(r)),tn(()=>nu(r,e,t,!0,i,!0)),i}function Yt(r,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Ti(r,e,n,t);tn(i=>Ti(r,e(),i,t),n)}function nu(r,e,t,n,i={},s=!1){e||(e={});for(const o in i)if(!(o in e)){if(o==="children")continue;i[o]=zo(r,o,null,i[o],t,s)}for(const o in e){if(o==="children"){n||Ti(r,e.children);continue}const a=e[o];i[o]=zo(r,o,a,i[o],t,s)}}function iu(r){let e,t;if(!ct.context||!(e=ct.registry.get(t=ou()))){if(ct.context&&console.warn("Unable to find DOM nodes for hydration key:",t),!r)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+t);return r.cloneNode(!0)}return ct.completed&&ct.completed.add(e),ct.registry.delete(t),e}function ru(r){return r.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Oo(r,e,t){const n=e.trim().split(/\s+/);for(let i=0,s=n.length;i<s;i++)r.classList.toggle(n[i],t)}function zo(r,e,t,n,i,s){let o,a,c;if(e==="style")return tu(r,t,n);if(e==="classList")return eu(r,t,n);if(t===n)return n;if(e==="ref")s||t(r);else if(e.slice(0,3)==="on:"){const l=e.slice(3);n&&r.removeEventListener(l,n),t&&r.addEventListener(l,t)}else if(e.slice(0,10)==="oncapture:"){const l=e.slice(10);n&&r.removeEventListener(l,n,!0),t&&r.addEventListener(l,t,!0)}else if(e.slice(0,2)==="on"){const l=e.slice(2).toLowerCase(),u=qc.has(l);if(!u&&n){const h=Array.isArray(n)?n[0]:n;r.removeEventListener(l,h)}(u||t)&&(Jc(r,l,t,u),u&&Dl([l]))}else if((c=Wc.has(e))||!i&&(No[e]||(a=Hc.has(e)))||(o=r.nodeName.includes("-")))e==="class"||e==="className"?Qc(r,t):o&&!a&&!c?r[ru(e)]=t:r[No[e]||e]=t;else{const l=i&&e.indexOf(":")>-1&&Yc[e.split(":")[0]];l?Kc(r,l,e,t):Jr(r,Xc[e]||e,t)}return t}function su(r){const e=`$$${r.type}`;let t=r.composedPath&&r.composedPath()[0]||r.target;for(r.target!==t&&Object.defineProperty(r,"target",{configurable:!0,value:t}),Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return t||document}}),ct.registry&&!ct.done&&(ct.done=_$HY.done=!0);t;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n.call(t,i,r):n.call(t,r),r.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ti(r,e,t,n,i){for(ct.context&&!t&&(t=[...r.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(r=o&&t[0]&&t[0].parentNode||r,s==="string"||s==="number"){if(ct.context)return t;if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=ii(r,t,n,a)}else t!==""&&typeof t=="string"?t=r.firstChild.data=e:t=r.textContent=e}else if(e==null||s==="boolean"){if(ct.context)return t;t=ii(r,t,n)}else{if(s==="function")return tn(()=>{let a=e();for(;typeof a=="function";)a=a();t=Ti(r,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],c=t&&Array.isArray(t);if(ro(a,e,t,i))return tn(()=>t=Ti(r,a,t,n,!0)),()=>t;if(ct.context){if(!a.length)return t;for(let l=0;l<a.length;l++)if(a[l].parentNode)return t=a}if(a.length===0){if(t=ii(r,t,n),o)return t}else c?t.length===0?Uo(r,a,n):$c(r,t,a):(t&&ii(r),Uo(r,a));t=a}else if(e instanceof Node){if(ct.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=ii(r,t,n,e);ii(r,t,null,e)}else t==null||t===""||!r.firstChild?r.appendChild(e):r.replaceChild(e,r.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function ro(r,e,t,n){let i=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],c=t&&t[s];if(a instanceof Node)r.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))i=ro(r,a,c)||i;else if(typeof a=="function")if(n){for(;typeof a=="function";)a=a();i=ro(r,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||i}else r.push(a),i=!0;else{const l=String(a);l==="<!>"?c&&c.nodeType===8&&r.push(c):c&&c.nodeType===3&&c.data===l?r.push(c):r.push(document.createTextNode(l))}}return i}function Uo(r,e,t=null){for(let n=0,i=e.length;n<i;n++)r.insertBefore(e[n],t)}function ii(r,e,t,n){if(t===void 0)return r.textContent="";const i=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const c=a.parentNode===r;!s&&!o?c?r.replaceChild(i,a):r.insertBefore(i,t):c&&a.remove()}else s=!0}}else r.insertBefore(i,t);return[i]}function ou(){const r=ct.context;return`${r.id}${r.count++}`}const au=!1,lu="http://www.w3.org/2000/svg";function cu(r,e=!1){return e?document.createElementNS(lu,r):document.createElement(r)}function uu(r){const[e,t]=Qr(r,["component"]),n=be(()=>e.component);return be(()=>{const i=n();switch(typeof i){case"function":return Object.assign(i,{[Pc]:!0}),Gt(()=>i(t));case"string":const s=jc.has(i),o=ct.context?iu():cu(i,s);return vo(o,t,s),o}})}function Rl(r,e,t){return r.addEventListener(e,t),()=>r.removeEventListener(e,t)}function hu([r,e],t,n){return[t?()=>t(r()):r,n?i=>e(n(i)):e]}function du(r){try{return document.querySelector(r)}catch{return null}}function Il(r,e){const t=du(`#${r}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function Nl(r,e,t,n){let i=!1;const s=a=>typeof a=="string"?{value:a}:a,o=hu(_n(s(r()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!i&&e(a),a));return t&&go(t((a=r())=>{i=!0,o[1](s(a)),i=!1})),{signal:o,utils:n}}function fu(r){if(r){if(Array.isArray(r))return{signal:r}}else return{signal:_n({value:""})};return r}function pu(){return Nl(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:r,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",r):window.history.pushState(n,"",r),Il(window.location.hash.slice(1),t)},r=>Rl(window,"popstate",()=>r()),{go:r=>window.history.go(r)})}function mu(){return Nl(()=>window.location.hash.slice(1),({value:r,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"","#"+r):window.location.hash=r;const i=r.indexOf("#"),s=i>=0?r.slice(i+1):"";Il(s,t)},r=>Rl(window,"hashchange",()=>r()),{go:r=>window.history.go(r),renderPath:r=>`#${r}`,parsePath:r=>{const e=r.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}})}function gu(){let r=new Set;function e(i){return r.add(i),()=>r.delete(i)}let t=!1;function n(i,s){if(t)return!(t=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of r)a.listener({...o,from:a.location,retry:c=>{c&&(t=!0),a.navigate(i,s)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const _u=/^(?:[a-z0-9]+:)?\/\//i,xu=/^\/+|\/+$/g;function ps(r,e=!1){const t=r.replace(xu,"");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function ms(r,e,t){if(_u.test(e))return;const n=ps(r),i=t&&ps(t);let s="";return!i||e.startsWith("/")?s=n:i.toLowerCase().indexOf(n.toLowerCase())!==0?s=n+i:s=i,(s||"/")+ps(e,!s)}function vu(r){const e={};return r.searchParams.forEach((t,n)=>{e[n]=t}),e}function yu(r){const e=new Map,t=Sl();return new Proxy({},{get(n,i){return e.has(i)||wl(t,()=>e.set(i,be(()=>r()[i]))),e.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(r())}})}const Mu=100,bu=_o(),Su=_o();let Bo;function wu(r,e){const t=new URL("http://sar"),n=be(c=>{const l=r();try{return new URL(l,t)}catch{return console.error(`Invalid path ${l}`),c}},t,{equals:(c,l)=>c.href===l.href}),i=be(()=>n().pathname),s=be(()=>n().search,!0),o=be(()=>n().hash),a=be(()=>"");return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return a()},query:yu(Ml(s,()=>vu(n())))}}function Eu(r,e="",t,n){const{signal:[i,s],utils:o={}}=fu(r),a=o.parsePath||(S=>S),c=o.renderPath||(S=>S),l=o.beforeLeave||gu(),u=ms("",e),h=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!i().value&&s({value:u,replace:!0,scroll:!1});const[d,m]=_n(!1),v=async S=>{m(!0);try{await Rc(S)}finally{m(!1)}},[p,f]=_n(i().value),[y,_]=_n(i().state),g=wu(p,y),x=[],b={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(S){return ms(u,S)}};if(t)try{Bo=b,b.data=t({data:void 0,params:{},location:g,navigate:L(b)})}finally{Bo=void 0}function A(S,P,U){Gt(()=>{if(typeof P=="number"){P&&(o.go?l.confirm(P,U)&&o.go(P):console.warn("Router integration does not support relative routing"));return}const{replace:F,resolve:R,scroll:T,state:O}={replace:!1,resolve:!0,scroll:!0,...U},j=R?S.resolvePath(P):ms("",P);if(j===void 0)throw new Error(`Path '${P}' is not a routable path`);if(x.length>=Mu)throw new Error("Too many redirects");const $=p();if((j!==$||O!==y())&&!au){if(l.confirm(j,U)){const q=x.push({value:$,replace:F,scroll:T,state:y()});v(()=>{f(j),_(O)}).then(()=>{x.length===q&&M({value:j,state:O})})}}})}function L(S){return S=S||El(Su)||b,(P,U)=>A(S,P,U)}function M(S){const P=x[0];P&&((S.value!==P.value||S.state!==P.state)&&s({...S,replace:P.replace,scroll:P.scroll}),x.length=0)}tn(()=>{const{value:S,state:P}=i();Gt(()=>{S!==p()&&v(()=>{f(S),_(P)})})});{let S=function(P){if(P.defaultPrevented||P.button!==0||P.metaKey||P.altKey||P.ctrlKey||P.shiftKey)return;const U=P.composedPath().find($=>$ instanceof Node&&$.nodeName.toUpperCase()==="A");if(!U||!U.hasAttribute("link"))return;const F=U.href;if(U.target||!F&&!U.hasAttribute("state"))return;const R=(U.getAttribute("rel")||"").split(/\s+/);if(U.hasAttribute("download")||R&&R.includes("external"))return;const T=new URL(F);if(T.origin!==window.location.origin||u&&T.pathname&&!T.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const O=a(T.pathname+T.search+T.hash),j=U.getAttribute("state");P.preventDefault(),A(b,O,{resolve:!1,replace:U.hasAttribute("replace"),scroll:!U.hasAttribute("noscroll"),state:j&&JSON.parse(j)})};Dl(["click"]),document.addEventListener("click",S),go(()=>document.removeEventListener("click",S))}return{base:b,out:h,location:g,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:L,beforeLeave:l}}const Tu=r=>{const{source:e,url:t,base:n,data:i,out:s}=r,o=e||pu(),a=Eu(o,n,i);return de(bu.Provider,{value:a,get children(){return r.children}})};let Au={data:""},Cu=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Au,Pu=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Lu=/\/\*[^]*?\*\/|  +/g,ko=/\n+/g,Hn=(r,e)=>{let t="",n="",i="";for(let s in r){let o=r[s];s[0]=="@"?s[1]=="i"?t=s+" "+o+";":n+=s[1]=="f"?Hn(o,s):s+"{"+Hn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?n+=Hn(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Hn.p?Hn.p(s,o):s+":"+o+";")}return t+(e&&i?e+"{"+i+"}":i)+n},an={},Fl=r=>{if(typeof r=="object"){let e="";for(let t in r)e+=t+Fl(r[t]);return e}return r},Du=(r,e,t,n,i)=>{let s=Fl(r),o=an[s]||(an[s]=(c=>{let l=0,u=11;for(;l<c.length;)u=101*u+c.charCodeAt(l++)>>>0;return"go"+u})(s));if(!an[o]){let c=s!==r?r:(l=>{let u,h,d=[{}];for(;u=Pu.exec(l.replace(Lu,""));)u[4]?d.shift():u[3]?(h=u[3].replace(ko," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][u[1]]=u[2].replace(ko," ").trim();return d[0]})(r);an[o]=Hn(i?{["@keyframes "+o]:c}:c,t?"":"."+o)}let a=t&&an.g?an.g:null;return t&&(an.g=an[o]),((c,l,u,h)=>{h?l.data=l.data.replace(h,c):l.data.indexOf(c)===-1&&(l.data=u?c+l.data:l.data+c)})(an[o],e,n,a),o},Ru=(r,e,t)=>r.reduce((n,i,s)=>{let o=e[s];if(o&&o.call){let a=o(t),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":Hn(a,""):a===!1?"":a}return n+i+(o??"")},"");function Xr(r){let e=this||{},t=r.call?r(e.p):r;return Du(t.unshift?t.raw?Ru(t,[].slice.call(arguments,1),e.p):t.reduce((n,i)=>Object.assign(n,i&&i.call?i(e.p):i),{}):t,Cu(e.target),e.g,e.o,e.k)}Xr.bind({g:1});Xr.bind({k:1});const Iu=_o();function Ol(r){let e=this||{};return(...t)=>{const n=i=>{const s=El(Iu),o=$n(i,{theme:s}),a=$n(o,{get class(){const m=o.class,v="class"in o&&/^go[0-9]+/.test(m);let p=Xr.apply({target:e.target,o:v,p:o,g:e.g},t);return[m,p].filter(Boolean).join(" ")}}),[c,l]=Qr(a,["as","theme"]),u=l,h=c.as||r;let d;return typeof h=="function"?d=h(u):e.g==1?(d=document.createElement(h),vo(d,u)):d=uu($n({component:h},u)),d};return n.class=i=>Gt(()=>Xr.apply({target:e.target,p:i,g:e.g},t)),n}}const We=new Proxy(Ol,{get(r,e){return r(e)}});function Nu(){const r=Ol.call({g:1},"div").apply(null,arguments);return function(t){return r(t),null}}const qr=Symbol("store-raw"),Ji=Symbol("store-node"),Fu=Symbol("store-name");function zl(r,e){let t=r[$t];if(!t&&(Object.defineProperty(r,$t,{value:t=new Proxy(r,Uu)}),!Array.isArray(r))){const n=Object.keys(r),i=Object.getOwnPropertyDescriptors(r);for(let s=0,o=n.length;s<o;s++){const a=n[s];i[a].get&&Object.defineProperty(r,a,{enumerable:i[a].enumerable,get:i[a].get.bind(t)})}}return t}function Ai(r){let e;return r!=null&&typeof r=="object"&&(r[$t]||!(e=Object.getPrototypeOf(r))||e===Object.prototype||Array.isArray(r))}function Ci(r,e=new Set){let t,n,i,s;if(t=r!=null&&r[qr])return t;if(!Ai(r)||e.has(r))return r;if(Array.isArray(r)){Object.isFrozen(r)?r=r.slice(0):e.add(r);for(let o=0,a=r.length;o<a;o++)i=r[o],(n=Ci(i,e))!==i&&(r[o]=n)}else{Object.isFrozen(r)?r=Object.assign({},r):e.add(r);const o=Object.keys(r),a=Object.getOwnPropertyDescriptors(r);for(let c=0,l=o.length;c<l;c++)s=o[c],!a[s].get&&(i=r[s],(n=Ci(i,e))!==i&&(r[s]=n))}return r}function yo(r){let e=r[Ji];return e||Object.defineProperty(r,Ji,{value:e={}}),e}function so(r,e,t){return r[e]||(r[e]=Bl(t))}function Ou(r,e){const t=Reflect.getOwnPropertyDescriptor(r,e);return!t||t.get||!t.configurable||e===$t||e===Ji||e===Fu||(delete t.value,delete t.writable,t.get=()=>r[$t][e]),t}function Ul(r){if(bl()){const e=yo(r);(e._||(e._=Bl()))()}}function zu(r){return Ul(r),Reflect.ownKeys(r)}function Bl(r){const[e,t]=_n(r,{equals:!1,internal:!0});return e.$=t,e}const Uu={get(r,e,t){if(e===qr)return r;if(e===$t)return t;if(e===to)return Ul(r),t;const n=yo(r),i=n.hasOwnProperty(e);let s=i?n[e]():r[e];if(e===Ji||e==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(r,e);bl()&&(typeof s!="function"||r.hasOwnProperty(e))&&!(o&&o.get)&&(s=so(n,e,s)())}return Ai(s)?zl(s):s},has(r,e){return e===qr||e===$t||e===to||e===Ji||e==="__proto__"?!0:(this.get(r,e,r),e in r)},set(){return!0},deleteProperty(){return!0},ownKeys:zu,getOwnPropertyDescriptor:Ou};function Pi(r,e,t,n=!1){if(!n&&r[e]===t)return;const i=r[e],s=r.length;t===void 0?delete r[e]:r[e]=t;let o=yo(r),a;(a=so(o,e,i))&&a.$(()=>t),Array.isArray(r)&&r.length!==s&&(a=so(o,"length",s))&&a.$(r.length),(a=o._)&&a.$()}function kl(r,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const i=t[n];Pi(r,i,e[i])}}function Bu(r,e){if(typeof e=="function"&&(e=e(r)),e=Ci(e),Array.isArray(e)){if(r===e)return;let t=0,n=e.length;for(;t<n;t++){const i=e[t];r[t]!==i&&Pi(r,t,i)}Pi(r,"length",n)}else kl(r,e)}function Yi(r,e,t=[]){let n,i=r;if(e.length>1){n=e.shift();const o=typeof n,a=Array.isArray(r);if(Array.isArray(n)){for(let c=0;c<n.length;c++)Yi(r,[n[c]].concat(e),t);return}else if(a&&o==="function"){for(let c=0;c<r.length;c++)n(r[c],c)&&Yi(r,[c].concat(e),t);return}else if(a&&o==="object"){const{from:c=0,to:l=r.length-1,by:u=1}=n;for(let h=c;h<=l;h+=u)Yi(r,[h].concat(e),t);return}else if(e.length>1){Yi(r[n],e,[n].concat(t));return}i=r[n],t=[n].concat(t)}let s=e[0];typeof s=="function"&&(s=s(i,t),s===i)||n===void 0&&s==null||(s=Ci(s),n===void 0||Ai(i)&&Ai(s)&&!Array.isArray(s)?kl(i,s):Pi(r,n,s))}function Mo(...[r,e]){const t=Ci(r||{}),n=Array.isArray(t),i=zl(t);function s(...o){Kt(()=>{n&&o.length===1?Bu(t,o[0]):Yi(t,o)})}return[i,s]}const jr=new WeakMap,Gl={get(r,e){if(e===qr)return r;const t=r[e];let n;return Ai(t)?jr.get(t)||(jr.set(t,n=new Proxy(t,Gl)),n):t},set(r,e,t){return Pi(r,e,Ci(t)),!0},deleteProperty(r,e){return Pi(r,e,void 0,!0),!0}};function Xt(r){return e=>{if(Ai(e)){let t;(t=jr.get(e))||jr.set(e,t=new Proxy(e,Gl)),r(t)}return e}}var ku=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,s;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!r(i[1],t.get(i[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[i]))return!1;for(i=n;i--!==0;){var o=s[i];if(!r(e[o],t[o]))return!1}return!0}return e!==e&&t!==t};const es="@@AbstractControlInterface_solidjs";function Vl(r){return typeof r=="object"&&r?.[es]===!0}const bo="@@AbstractControlContainerInterface_solidjs";function Mn(r){return Vl(r)&&r[bo]}function xt(r,e){return ku(r,e)}function ts(r,e){return Object.defineProperties(r,Object.getOwnPropertyDescriptors(e))}function Gu(r){const e=Sl();if(!e)throw new Error("No solidjs owner in current context");return()=>wl(e,r)}const Fn="CONTROL_DEFAULT_SOURCE";function So(){const[r,e]=_n(null);return[t=>r()||t,()=>e(!1)]}function Vu(r){return!r||Array.isArray(r)&&r.length===0?null:Array.isArray(r)?e=>r.reduce((t,n)=>{const i=n(e);return i?{...t,...i}:t},null):r}let Hu=0;function Hl(r,e,t={}){let n,i,s,o,a,c;return[{id:t.id||Symbol(`AbstractControl-${Hu++}`),data:{...t.data},self:{get isValid(){return this.errors===null&&!this.isPending},isDisabled:!1,isTouched:!1,isDirty:!1,isReadonly:!1,isSubmitted:!1,isRequired:!1,get isPending(){return s?.()??e(!1)},get errors(){return o?.()??e(null)},errorsStore:new Map,pendingStore:new Set,validatorStore:new Map},get isDisabled(){return this.self.isDisabled},get isTouched(){return this.self.isTouched},get isDirty(){return this.self.isDirty},get isReadonly(){return this.self.isReadonly},get isSubmitted(){return this.self.isSubmitted},get isRequired(){return this.self.isRequired},get errors(){return this.self.errors},get isPending(){return this.self.isPending},get isValid(){return this.self.isValid},get status(){return a?.()??e("VALID")},get validator(){return c?.()??e(null)},markDisabled(h){xt(this.self.isDisabled,h)||i("self","isDisabled",h)},markReadonly(h){xt(this.self.isReadonly,h)||i("self","isReadonly",h)},markRequired(h){xt(this.self.isRequired,h)||i("self","isRequired",h)},markDirty(h){xt(this.self.isDirty,h)||i("self","isDirty",h)},markTouched(h){xt(this.self.isTouched,h)||i("self","isTouched",h)},markSubmitted(h){xt(this.self.isSubmitted,h)||i("self","isSubmitted",h)},markPending(h,d){let m;if(typeof h=="boolean"){const v=d?.source||Fn;if(this.self.pendingStore.has(v)===h)return;m=new Set(this.self.pendingStore),h?m.add(v):m.delete(v)}else{if(this.self.pendingStore===h)return;m=new Set(h)}xt(this.self.pendingStore,m)||i(Xt(v=>{v.self.pendingStore=m}))},setErrors(h,d){const m=d?.source||Fn,v=this.self.errorsStore;let p;h instanceof Map?p=h:h===null||Object.keys(h).length===0?(p=new Map(v),p.delete(m)):p=new Map(v).set(m,h),!xt(this.self.errorsStore,p)&&i(Xt(f=>{f.self.errorsStore=p}))},patchErrors(h,d){const m=this.self.errorsStore;if(h instanceof Map)i(Xt(v=>{v.self.errorsStore=new Map([...m,...h])}));else{if(Object.keys(h).length===0)return;const v=d?.source||Fn;let p=h,f=m.get(v);if(f){f={...f};for(const[_,g]of Object.entries(p))g===null?delete f[_]:f[_]=g;p=f}else{const _=Object.entries(p).filter(([,g])=>g!==null);if(_.length===0)return;p=Object.fromEntries(_)}const y=new Map(m);if(Object.keys(p).length===0?y.delete(v):y.set(v,p),xt(this.self.errorsStore,y))return;i(Xt(_=>{_.self.errorsStore=y}))}},setValidators(h,d){const m=d?.source||Fn;let v;if(h instanceof Map)v=new Map(h);else{v=new Map(this.self.validatorStore);const p=Vu(h);p?v.set(m,p):v.delete(m)}xt(this.self.validatorStore,v)||i(Xt(p=>{p.self.validatorStore=v}))},setData(h,d){xt(this.data[h],d)||i(Xt(m=>{m.data[h]=d}))}},()=>{[n,i]=r(),s=be(()=>n.self.pendingStore.size>0),o=be(()=>n.self.errorsStore.size===0?null:Array.from(n.self.errorsStore.values()).reduce((h,d)=>({...h,...d}),{})),a=be(()=>n.isDisabled?"DISABLED":n.isPending?"PENDING":n.isValid?"VALID":"INVALID"),c=be(()=>{if(n.self.validatorStore.size===0)return null;const h=Array.from(n.self.validatorStore.values());return d=>{const m=h.reduce((v,p)=>({...v,...p(d)}),{});return Object.keys(m).length===0?null:m}}),Lc(Ml(()=>n.validator?.(n.rawValue)??null,h=>{if(n.self.errorsStore.get(Fn)===h)return;const d=new Map(n.self.errorsStore);h?d.set(Fn,h):d.delete(Fn),!xt(n.self.errorsStore,d)&&i(Xt(m=>{m.self.errorsStore=d}))}))}]}const Wu="@@FormControlInterface_solidjs";function nn(r,e={}){let t,n;const[i,s]=So(),[o,a]=Hl(()=>[t,n],i,e),c=ts(o,{[es]:!0,[Wu]:!0,rawValue:r,get value(){return this.rawValue},setValue(l){xt(this.value,l)||n(Xt(u=>{u.rawValue=l}))}});return[t,n]=Mo(c),a(),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}function Wl(r,e,t={}){let n,i;const[s,o]=Hl(()=>[n,i],e,t);let a,c,l,u,h,d,m,v,p,f,y,_,g,x,b,A,L,M,S;return[ts(s,{get size(){return a?.()??e(0)},get isDisabled(){return this.self.isDisabled||this.children.areDisabled},get isTouched(){return this.self.isTouched||this.child.isTouched},get isDirty(){return this.self.isDirty||this.child.isDirty},get isReadonly(){return this.self.isReadonly||this.children.areReadonly},get isSubmitted(){return this.self.isSubmitted||this.children.areSubmitted},get isRequired(){return this.self.isRequired||this.child.isRequired},get isPending(){return this.self.isPending||this.child.isPending},get errors(){return M?.()??e(null)},get isValid(){return this.self.isValid&&this.children.areValid},child:{get isValid(){return c?.()??e(!0)},get isDisabled(){return l?.()??e(!1)},get isReadonly(){return u?.()??e(!1)},get isRequired(){return h?.()??e(!1)},get isPending(){return d?.()??e(!1)},get isTouched(){return m?.()??e(!1)},get isDirty(){return v?.()??e(!1)},get isSubmitted(){return p?.()??e(!1)}},children:{get areValid(){return f?.()??e(!0)},get areDisabled(){return y?.()??e(!1)},get areReadonly(){return _?.()??e(!1)},get areRequired(){return g?.()??e(!1)},get arePending(){return x?.()??e(!1)},get areTouched(){return b?.()??e(!1)},get areDirty(){return A?.()??e(!1)},get areSubmitted(){return L?.()??e(!1)},get errors(){return S?.()??e(null)},markDirty(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markDirty(F),!(!R?.deep||!Mn(T))&&T.children.markDirty(F,R)})})},markDisabled(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markDisabled(F),!(!R?.deep||!Mn(T))&&T.children.markDisabled(F,R)})})},markPending(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markPending(F,R),!(!R?.deep||!Mn(T))&&T.children.markPending(F,R)})})},markReadonly(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markReadonly(F),!(!R?.deep||!Mn(T))&&T.children.markReadonly(F,R)})})},markRequired(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markRequired(F),!(!R?.deep||!Mn(T))&&T.children.markRequired(F,R)})})},markSubmitted(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markSubmitted(F),!(!R?.deep||!Mn(T))&&T.children.markSubmitted(F,R)})})},markTouched(F,R){Kt(()=>{Object.values(n.controls).forEach(T=>{T.markTouched(F),!(!R?.deep||!Mn(T))&&T.children.markTouched(F,R)})})}},setControls(F){xt(n.controls,F)||i(Xt(R=>{R.controls=F}))},removeControl(F){if(!Vl(F)){n.setControl(F,null);return}const R=F;for(const[T,O]of Object.entries(n.controls))if(O===R){n.setControl(T,null);return}},setValue(F){const R=Object.entries(F);if(R.length!==n.size)throw new Error("setValue error: you must provide a value for each control.");Kt(()=>{for(const[T,O]of R){const j=n.controls[T];if(!j)throw new Error(`Invalid setValue value key "${T}".`);j.setValue(O)}})},patchValue(F){Kt(()=>{for(const[R,T]of Object.entries(F)){const O=n.controls[R];if(!O)throw new Error(`Invalid patchValue value key "${R}".`);Mn(O)?O.patchValue(T):O.setValue(T)}})}}),()=>{[n,i]=r(),o();const F=be(()=>Object.values(n.controls)),R=be(()=>F().filter(T=>!T.isDisabled));a=be(()=>F().length),c=be(()=>R().some(T=>T.isValid)),l=be(()=>F().some(T=>T.isDisabled)),u=be(()=>R().some(T=>T.isReadonly)),h=be(()=>R().some(T=>T.isRequired)),d=be(()=>R().some(T=>T.isPending)),m=be(()=>R().some(T=>T.isTouched)),v=be(()=>R().some(T=>T.isDirty)),p=be(()=>R().some(T=>T.isSubmitted)),f=be(()=>R().every(T=>T.isValid)),y=be(()=>{const T=F();return T.length===0?!1:T.every(O=>O.isDisabled)}),_=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isReadonly)}),g=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isRequired)}),x=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isPending)}),b=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isTouched)}),A=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isDirty)}),L=be(()=>{const T=R();return T.length===0?!1:T.every(O=>O.isSubmitted)}),M=be(()=>!n.self.errors&&!n.children.errors?null:{...n.children.errors,...n.self.errors}),S=be(()=>R().reduce((O,j)=>O===null&&j.errors===null?null:{...O,...j.errors},null))}]}const Xu="@@FormGroupInterface_solidjs";function qu(r={},e={}){let t,n;const[i,s]=So(),[o,a]=Wl(()=>[t,n],i,e);let c,l;const u=ts(o,{[es]:!0,[bo]:!0,[Xu]:!0,controls:r,get rawValue(){return c?.()??i({})},get value(){return l?.()??i({})},setControl(m,v){(v===null?!t.controls[m]:xt(t.controls[m],v))||n(Xt(p=>{v===null?delete p.controls[m]:p.controls[m]=v}))}});[t,n]=Mo(u),a();const h=be(()=>Object.entries(t.controls)),d=be(()=>h().filter(([,m])=>!m.isDisabled));return c=be(()=>Object.fromEntries(h().map(([m,v])=>[m,v.rawValue]))),l=be(()=>Object.fromEntries(d().map(([m,v])=>[m,v.value]))),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}const ju="@@FormArrayInterface_solidjs";function Yu(r=[],e={}){let t,n;const[i,s]=So(),[o,a]=Wl(()=>[t,n],i,e);let c,l;const u=ts(o,{[es]:!0,[bo]:!0,[ju]:!0,controls:r,get rawValue(){return c?.()??i({})},get value(){return l?.()??i({})},setControl(d,m){(m===null?!t.controls[d]:xt(t.controls[d],m))||n(Xt(v=>{m===null?v.controls.splice(d,1):v.controls[d]=m}))},push(d){this.setControl(this.controls.length,d)}});[t,n]=Mo(u),a();const h=be(()=>t.controls.filter(d=>!d.isDisabled));return c=be(()=>t.controls.map(d=>d.rawValue)),l=be(()=>h().map(d=>d.value)),s(),e.disabled&&t.markDisabled(e.disabled),e.touched&&t.markTouched(e.touched),e.dirty&&t.markDirty(e.dirty),e.readonly&&t.markReadonly(e.readonly),e.submitted&&t.markSubmitted(e.submitted),e.required&&t.markRequired(e.required),e.pending&&t.markPending(e.pending),e.validators&&t.setValidators(e.validators),e.pending&&t.markPending(e.pending),e.errors&&t.patchErrors(e.errors),t}const $u=""+new URL("copy-ico-d69906cc.svg",import.meta.url).href,Zu=yn('<div class="wrapper-input"></div>',2),Si=r=>(r=$n({control:nn("")},r),(()=>{const e=Zu.cloneNode(!0);return Yt(e,de(Ku,{type:"text",placeholder:" ",get id(){return r.name},get name(){return r.name},get value(){return r.control.value},get readonly(){return r.control.isReadonly},onInput:t=>{r.control.setValue(t.target.value)},get disabled(){return r.control.isDisabled}}),null),Yt(e,de(Qu,{get for(){return r.name},get children(){return r.placeholder}}),null),Yt(e,de(Wr,{get when(){return!r.withoutMessage},get children(){return de(eh,{get withoutMessage(){return r.withoutMessage},get children(){return de(Wr,{get when(){return!r.control.isValid},get children(){return r.control.errors?.message}})}})}}),null),Yt(e,de(Ju,{get visibility(){return!!r.control.value},src:$u,onClick:()=>navigator.clipboard.writeText(r.control.value)}),null),e})()),Ku=We("input")`
  border: 2px solid var(--mainColor);
  border-right: none;
  padding-left: ${r=>r.value?"40px":"8px"};
`,Qu=We("label")`
  padding-top: 2px;
`,Ju=We("img")`
  cursor: pointer;
  visibility: ${r=>r.visibility?"visible":"hidden"};
  position: absolute;
  width: 20px;
  top: 10px;
  left: 10px;
`,eh=We("div")`
  color: var(--thirdColor);
  display: ${r=>r.withoutMessage?"none":"flex"};
`,th=yn('<div class="wrapper-input"></div>',2),An=r=>{const[e,t]=Qr(r,["placeholder"]);return(()=>{const n=th.cloneNode(!0);return Yt(n,de(nh,$n(t,{get children(){return e.placeholder}}))),n})()},nh=We("button")`
  border: 2px solid var(--mainColor);
  transition: background-color 0.25s;
  &:hover {
    background-color: var(--mainColor);
    color: white;
  }
`,ih=yn("<h3></h3>",2),ir=r=>de(rh,{get children(){const e=ih.cloneNode(!0);return Yt(e,()=>r.text),e}}),rh=We("header")`
  display: block;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid var(--secondaryColor);
  margin: 64px 0 32px;
`,ns="http://localhost:8080/api",sh=async(r,e)=>{const t={data_url:e,email:r,dataset_type:"blender"},n=await fetch(`${ns}/experiment/train`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await n.json();if(n.status>=400)throw new Error(i.detail);return i},oh=async r=>{const e=await fetch(`${ns}/experiment/${r}/rendering`);if(e.status>=400){const n=await e.json();throw new Error(n.detail)}const t=await e.blob();return URL.createObjectURL(t)},ah=async(r,e,t,n)=>{const i={email:r,base_experiment_id:e,aabb:t,inner_region:n},s=await fetch(`${ns}/experiment/edit/aabb`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),o=await s.json();if(s.status>=400)throw new Error(JSON.stringify(o.detail));return o},lh=async(r,e,t,n)=>{const i={email:r,scenes:e,image_size:t,camera:n},s=await fetch(`${ns}/experiment/render`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),o=await s.json();if(s.status>=400)throw new Error(JSON.stringify(o.detail));return o};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="149",ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,Go=1,uh=2,Xl=1,hh=2,$i=3,Pn=0,Nt=1,mn=2,Cn=0,wi=1,Vo=2,Ho=3,Wo=4,dh=5,yi=100,fh=101,ph=102,Xo=103,qo=104,mh=200,gh=201,_h=202,xh=203,ql=204,jl=205,vh=206,yh=207,Mh=208,bh=209,Sh=210,wh=0,Eh=1,Th=2,oo=3,Ah=4,Ch=5,Ph=6,Lh=7,Yl=0,Dh=1,Rh=2,xn=0,Ih=1,Nh=2,Fh=3,Oh=4,zh=5,$l=300,Li=301,Di=302,ao=303,lo=304,is=306,co=1e3,qt=1001,uo=1002,wt=1003,jo=1004,gs=1005,Bt=1006,Uh=1007,er=1008,Qn=1009,Bh=1010,kh=1011,Zl=1012,Gh=1013,qn=1014,jn=1015,tr=1016,Vh=1017,Hh=1018,Ei=1020,Wh=1021,jt=1023,Xh=1024,qh=1025,Zn=1026,Ri=1027,jh=1028,Yh=1029,$h=1030,Zh=1031,Kh=1033,_s=33776,xs=33777,vs=33778,ys=33779,Yo=35840,$o=35841,Zo=35842,Ko=35843,Qh=36196,Qo=37492,Jo=37496,ea=37808,ta=37809,na=37810,ia=37811,ra=37812,sa=37813,oa=37814,aa=37815,la=37816,ca=37817,ua=37818,ha=37819,da=37820,fa=37821,Ms=36492,Jh=36283,pa=36284,ma=36285,ga=36286,Jn=3e3,Xe=3001,ed=3200,td=3201,Kl=0,nd=1,Qt="srgb",nr="srgb-linear",bs=7680,id=519,_a=35044,xa="300 es",ho=1035;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,va=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function rd(r,e){return(r%e+e)%e}function Ss(r,e,t){return(1-t)*r+t*e}function ya(r){return(r&r-1)===0&&r!==0}function fo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],v=n[8],p=i[0],f=i[3],y=i[6],_=i[1],g=i[4],x=i[7],b=i[2],A=i[5],L=i[8];return s[0]=o*p+a*_+c*b,s[3]=o*f+a*g+c*A,s[6]=o*y+a*x+c*L,s[1]=l*p+u*_+h*b,s[4]=l*f+u*g+h*A,s[7]=l*y+u*x+h*L,s[2]=d*p+m*_+v*b,s[5]=d*f+m*g+v*A,s[8]=d*y+m*x+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,v=t*h+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ws.makeScale(e,t)),this}rotate(e){return this.premultiply(ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(ws.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new It;function Ql(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Es={[Qt]:{[nr]:Kn},[nr]:{[Qt]:zr}},bt={legacyMode:!0,get workingColorSpace(){return nr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Es[e]&&Es[e][t]!==void 0){const n=Es[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Vt={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Ts(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function cr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=rd(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ts(o,s,e+1/3),this.g=Ts(o,s,e),this.b=Ts(o,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qt){const n=Jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return bt.fromWorkingColorSpace(cr(this,nt),e),At(nt.r*255,0,255)<<16^At(nt.g*255,0,255)<<8^At(nt.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(cr(this,nt),t);const n=nt.r,i=nt.g,s=nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(cr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=Qt){return bt.fromWorkingColorSpace(cr(this,nt),e),e!==Qt?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(lr);const n=Ss(Vt.h,lr.h,t),i=Ss(Vt.s,lr.s,t),s=Ss(Vt.l,lr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=Jl;let oi;class ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Yr("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tc{constructor(e=null){this.isSource=!0,this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(As(i[o].image)):s.push(As(i[o]))}else s=As(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function As(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ec.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class Ft extends ni{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=qt,i=qt,s=Bt,o=er,a=jt,c=Qn,l=Ft.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=rr(),this.name="",this.source=new tc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=$l;Ft.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],v=c[9],p=c[2],f=c[6],y=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,x=(m+1)/2,b=(y+1)/2,A=(u+d)/4,L=(h+p)/4,M=(v+f)/4;return g>x&&g>b?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=A/n,s=L/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=L/s,i=M/s),this.set(n,i,s,t),this}let _=Math.sqrt((f-v)*(f-v)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(f-v)/_,this.y=(h-p)/_,this.z=(d-u)/_,this.w=Math.acos((l+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nc extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class od extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==v){let f=1-a;const y=c*d+l*m+u*v+h*p,_=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,y*_);f=Math.sin(f*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(c=c*f+d*x,l=l*f+m*x,u=u*f+v*x,h=h*f+p*x,f===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*h+c*m-l*d,e[t+1]=c*v+u*d+l*h-a*m,e[t+2]=l*v+u*m+a*d-c*h,e[t+3]=u*v-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),m=c(i/2),v=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h+d*m*v;break;case"YZX":this._x=d*u*h+l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h-d*m*v;break;case"XZY":this._x=d*u*h-l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new I,Ma=new ut;class Fi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)On.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox),Ps.applyMatrix4(e.matrixWorld),this.union(Ps);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ur.subVectors(this.max,Bi),ai.subVectors(e.a,Bi),li.subVectors(e.b,Bi),ci.subVectors(e.c,Bi),bn.subVectors(li,ai),Sn.subVectors(ci,li),zn.subVectors(ai,ci);let t=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-zn.y,zn.x,0];return!Ls(t,ai,li,ci,ur)||(t=[1,0,0,0,1,0,0,0,1],!Ls(t,ai,li,ci,ur))?!1:(hr.crossVectors(bn,Sn),t=[hr.x,hr.y,hr.z],Ls(t,ai,li,ci,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return On.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(On).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,Ps=new Fi,ai=new I,li=new I,ci=new I,bn=new I,Sn=new I,zn=new I,Bi=new I,ur=new I,hr=new I,Un=new I;function Ls(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Un.fromArray(r,s);const a=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ad=new Fi,ki=new I,Ds=new I;class rs{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ad.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Ds)),this.expandByPoint(ki.copy(e.center).sub(Ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new I,Rs=new I,dr=new I,wn=new I,Is=new I,fr=new I,Ns=new I;class Eo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.direction).multiplyScalar(t).add(this.origin),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rs.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Rs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=wn.dot(this.direction),c=-wn.dot(dr),l=wn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,v;if(u>0)if(h=o*c-a,d=o*a-c,v=s*u,h>=0)if(d>=-v)if(d<=v){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(dr).multiplyScalar(d).add(Rs),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,s){Is.subVectors(t,e),fr.subVectors(n,e),Ns.crossVectors(Is,fr);let o=this.direction.dot(Ns),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const c=a*this.direction.dot(fr.crossVectors(wn,fr));if(c<0)return null;const l=a*this.direction.dot(Is.cross(wn));if(l<0||c+l>o)return null;const u=-a*wn.dot(Ns);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,h,d,m,v,p,f){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=a,y[13]=c,y[2]=l,y[6]=u,y[10]=h,y[14]=d,y[3]=m,y[7]=v,y[11]=p,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,v=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,v=l*u,p=l*h;t[0]=d+p*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,v=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,v=a*u,p=a*h;t[0]=c*u,t[4]=v*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=v*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+v,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ld,e,cd)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),En.crossVectors(n,Dt),En.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),En.crossVectors(n,Dt)),En.normalize(),pr.crossVectors(Dt,En),i[0]=En.x,i[4]=pr.x,i[8]=Dt.x,i[1]=En.y,i[5]=pr.y,i[9]=Dt.y,i[2]=En.z,i[6]=pr.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],v=n[2],p=n[6],f=n[10],y=n[14],_=n[3],g=n[7],x=n[11],b=n[15],A=i[0],L=i[4],M=i[8],S=i[12],P=i[1],U=i[5],F=i[9],R=i[13],T=i[2],O=i[6],j=i[10],$=i[14],q=i[3],Z=i[7],K=i[11],fe=i[15];return s[0]=o*A+a*P+c*T+l*q,s[4]=o*L+a*U+c*O+l*Z,s[8]=o*M+a*F+c*j+l*K,s[12]=o*S+a*R+c*$+l*fe,s[1]=u*A+h*P+d*T+m*q,s[5]=u*L+h*U+d*O+m*Z,s[9]=u*M+h*F+d*j+m*K,s[13]=u*S+h*R+d*$+m*fe,s[2]=v*A+p*P+f*T+y*q,s[6]=v*L+p*U+f*O+y*Z,s[10]=v*M+p*F+f*j+y*K,s[14]=v*S+p*R+f*$+y*fe,s[3]=_*A+g*P+x*T+b*q,s[7]=_*L+g*U+x*O+b*Z,s[11]=_*M+g*F+x*j+b*K,s[15]=_*S+g*R+x*$+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],v=e[3],p=e[7],f=e[11],y=e[15];return v*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+f*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+y*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],v=e[12],p=e[13],f=e[14],y=e[15],_=h*f*l-p*d*l+p*c*m-a*f*m-h*c*y+a*d*y,g=v*d*l-u*f*l-v*c*m+o*f*m+u*c*y-o*d*y,x=u*p*l-v*h*l+v*a*m-o*p*m-u*a*y+o*h*y,b=v*h*c-u*p*c-v*a*d+o*p*d+u*a*f-o*h*f,A=t*_+n*g+i*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=_*L,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*y-n*d*y)*L,e[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*y+n*c*y)*L,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*m-n*c*m)*L,e[4]=g*L,e[5]=(u*f*s-v*d*s+v*i*m-t*f*m-u*i*y+t*d*y)*L,e[6]=(v*c*s-o*f*s-v*i*l+t*f*l+o*i*y-t*c*y)*L,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*m+t*c*m)*L,e[8]=x*L,e[9]=(v*h*s-u*p*s-v*n*m+t*p*m+u*n*y-t*h*y)*L,e[10]=(o*p*s-v*a*s+v*n*l-t*p*l-o*n*y+t*a*y)*L,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*L,e[12]=b*L,e[13]=(u*p*i-v*h*i+v*n*d-t*p*d-u*n*f+t*h*f)*L,e[14]=(v*a*i-o*p*i-v*n*c+t*p*c+o*n*f-t*a*f)*L,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,v=s*h,p=o*u,f=o*h,y=a*h,_=c*l,g=c*u,x=c*h,b=n.x,A=n.y,L=n.z;return i[0]=(1-(p+y))*b,i[1]=(m+x)*b,i[2]=(v-g)*b,i[3]=0,i[4]=(m-x)*A,i[5]=(1-(d+y))*A,i[6]=(f+_)*A,i[7]=0,i[8]=(v+g)*L,i[9]=(f-_)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const l=1/s,u=1/o,h=1/a;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),h=(t+e)*c,d=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new I,Ht=new $e,ld=new I(0,0,0),cd=new I(1,1,1),En=new I,pr=new I,Dt=new I,ba=new $e,Sa=new ut;class sr{constructor(e=0,t=0,n=0,i=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ud=0;const wa=new I,hi=new ut,un=new $e,mr=new I,Gi=new I,hd=new I,dd=new ut,Ea=new I(1,0,0),Ta=new I(0,1,0),Aa=new I(0,0,1),fd={type:"added"},Ca={type:"removed"};class dt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new sr,n=new ut,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new It}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Gi,mr,this.up):un.lookAt(mr,Gi,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(un),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ca)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ca)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new I,hn=new I,Fs=new I,dn=new I,di=new I,fi=new I,Pa=new I,Os=new I,zs=new I,Us=new I;class en{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),hn.subVectors(n,t),Fs.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(hn),c=Wt.dot(Fs),l=hn.dot(hn),u=hn.dot(Fs),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,v=(o*u-a*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,dn),c.set(0,0),c.addScaledVector(s,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),hn.subVectors(e,t),Wt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Wt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return en.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;di.subVectors(i,n),fi.subVectors(s,n),Os.subVectors(e,n);const c=di.dot(Os),l=fi.dot(Os);if(c<=0&&l<=0)return t.copy(n);zs.subVectors(e,i);const u=di.dot(zs),h=fi.dot(zs);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(di,o);Us.subVectors(e,s);const m=di.dot(Us),v=fi.dot(Us);if(v>=0&&m<=v)return t.copy(s);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(fi,a);const f=u*v-m*h;if(f<=0&&h-u>=0&&m-v>=0)return Pa.subVectors(s,i),a=(h-u)/(h-u+(m-v)),t.copy(i).addScaledVector(Pa,a);const y=1/(f+p+d);return o=p*y,a=d*y,t.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pd=0;class Oi extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=wi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ql,this.blendDst=jl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ss extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new I,gr=new Te;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ic extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Oe extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let md=0;const Ut=new $e,Bs=new dt,pi=new I,Rt=new Fi,Vi=new Fi,lt=new I;class ft extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?rc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Rt.min,Vi.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Vi.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Vi.min),Rt.expandByPoint(Vi.max))}Rt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)lt.fromBufferAttribute(a,l),c&&(pi.fromBufferAttribute(e,l),lt.add(pi)),i=Math.max(i,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new I,u[P]=new I;const h=new I,d=new I,m=new I,v=new Te,p=new Te,f=new Te,y=new I,_=new I;function g(P,U,F){h.fromArray(i,P*3),d.fromArray(i,U*3),m.fromArray(i,F*3),v.fromArray(o,P*2),p.fromArray(o,U*2),f.fromArray(o,F*2),d.sub(h),m.sub(h),p.sub(v),f.sub(v);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(y.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(R),_.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(R),l[P].add(y),l[U].add(y),l[F].add(y),u[P].add(_),u[U].add(_),u[F].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,U=x.length;P<U;++P){const F=x[P],R=F.start,T=F.count;for(let O=R,j=R+T;O<j;O+=3)g(n[O+0],n[O+1],n[O+2])}const b=new I,A=new I,L=new I,M=new I;function S(P){L.fromArray(s,P*3),M.copy(L);const U=l[P];b.copy(U),b.sub(L.multiplyScalar(L.dot(U))).normalize(),A.crossVectors(M,U);const R=A.dot(u[P])<0?-1:1;c[P*4]=b.x,c[P*4+1]=b.y,c[P*4+2]=b.z,c[P*4+3]=R}for(let P=0,U=x.length;P<U;++P){const F=x[P],R=F.start,T=F.count;for(let O=R,j=R+T;O<j;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let y=0;y<u;y++)d[v++]=l[m++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new $e,mi=new Eo,ks=new rs,Hi=new I,Wi=new I,Xi=new I,Gs=new I,_r=new I,xr=new Te,vr=new Te,yr=new Te,Vs=new I,Mr=new I;class le extends dt{constructor(e=new ft,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_r.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Gs.fromBufferAttribute(h,e),o?_r.addScaledVector(Gs,u):_r.addScaledVector(Gs.sub(t),u))}t.add(_r)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),e.ray.intersectsSphere(ks)===!1)||(La.copy(s).invert(),mi.copy(e.ray).applyMatrix4(La),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=h.length;m<v;m++){const p=h[m],f=i[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let g=y,x=_;g<x;g+=3){const b=a.getX(g),A=a.getX(g+1),L=a.getX(g+2);o=br(this,f,e,mi,l,u,b,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const y=a.getX(p),_=a.getX(p+1),g=a.getX(p+2);o=br(this,i,e,mi,l,u,y,_,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=h.length;m<v;m++){const p=h[m],f=i[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let g=y,x=_;g<x;g+=3){const b=g,A=g+1,L=g+2;o=br(this,f,e,mi,l,u,b,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const y=p,_=p+1,g=p+2;o=br(this,i,e,mi,l,u,y,_,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function gd(r,e,t,n,i,s,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Pn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:r}}function br(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,Hi),r.getVertexPosition(a,Wi),r.getVertexPosition(c,Xi);const l=gd(r,e,t,n,Hi,Wi,Xi,Vs);if(l){i&&(xr.fromBufferAttribute(i,o),vr.fromBufferAttribute(i,a),yr.fromBufferAttribute(i,c),l.uv=en.getUV(Vs,Hi,Wi,Xi,xr,vr,yr,new Te)),s&&(xr.fromBufferAttribute(s,o),vr.fromBufferAttribute(s,a),yr.fromBufferAttribute(s,c),l.uv2=en.getUV(Vs,Hi,Wi,Xi,xr,vr,yr,new Te));const u={a:o,b:a,c,normal:new I,materialIndex:0};en.getNormal(Hi,Wi,Xi,u.normal),l.face=u}return l}class Ke extends ft{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function v(p,f,y,_,g,x,b,A,L,M,S){const P=x/L,U=b/M,F=x/2,R=b/2,T=A/2,O=L+1,j=M+1;let $=0,q=0;const Z=new I;for(let K=0;K<j;K++){const fe=K*U-R;for(let G=0;G<O;G++){const Q=G*P-F;Z[p]=Q*_,Z[f]=fe*g,Z[y]=T,l.push(Z.x,Z.y,Z.z),Z[p]=0,Z[f]=0,Z[y]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(G/L),h.push(1-K/M),$+=1}}for(let K=0;K<M;K++)for(let fe=0;fe<L;fe++){const G=d+fe+O*K,Q=d+fe+O*(K+1),ne=d+(fe+1)+O*(K+1),re=d+(fe+1)+O*K;c.push(G,Q,re),c.push(Q,ne,re),q+=6}a.addGroup(m,q,S),m+=q,d+=$}}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(r){const e={};for(let t=0;t<r.length;t++){const n=Ii(r[t]);for(const i in n)e[i]=n[i]}return e}function _d(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sc(r){return r.getRenderTarget()===null&&r.outputEncoding===Xe?Qt:nr}const xd={clone:Ii,merge:St};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=_d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends oc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class Md extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kt(gi,_i,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new kt(gi,_i,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new kt(gi,_i,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(gi,_i,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new kt(gi,_i,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new kt(gi,_i,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=xn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ac extends Ft{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ke(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Cn});s.uniforms.tEquirect.value=t;const o=new le(i,s),a=t.minFilter;return t.minFilter===er&&(t.minFilter=Bt),new Md(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Hs=new I,Sd=new I,wd=new It;class kn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hs.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Hs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wd.getNormalMatrix(e),i=this.coplanarPoint(Hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new rs,Sr=new I;class lc{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,o=new kn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],v=n[10],p=n[11],f=n[12],y=n[13],_=n[14],g=n[15];return t[0].setComponents(a-i,h-c,p-d,g-f).normalize(),t[1].setComponents(a+i,h+c,p+d,g+f).normalize(),t[2].setComponents(a+s,h+l,p+m,g+y).normalize(),t[3].setComponents(a-s,h-l,p-m,g-y).normalize(),t[4].setComponents(a-o,h-u,p-v,g-_).normalize(),t[5].setComponents(a+o,h+u,p+v,g+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ed(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),l.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class os extends ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,m=[],v=[],p=[],f=[];for(let y=0;y<u;y++){const _=y*d-o;for(let g=0;g<l;g++){const x=g*h-s;v.push(x,-_,0),p.push(0,0,1),f.push(g/a),f.push(1-y/c)}}for(let y=0;y<c;y++)for(let _=0;_<a;_++){const g=_+l*y,x=_+l*(y+1),b=_+1+l*(y+1),A=_+1+l*y;m.push(g,x,A),m.push(x,b,A)}this.setIndex(m),this.setAttribute("position",new Oe(v,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}var Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd="vec3 transformed = vec3( position );",Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xd=`#define PI 3.141592653589793
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
}`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#endif`,gf=`#if defined( USE_ENVMAP )
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
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
#endif`,bf=`struct PhysicalMaterial {
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
}`,Sf=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Gf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ap=`float getShadowMask() {
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
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dp=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`uniform float scale;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,begin_vertex:Rd,beginnormal_vertex:Id,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:kd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Hd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:jd,displacementmap_pars_vertex:Yd,displacementmap_vertex:$d,emissivemap_fragment:Zd,emissivemap_pars_fragment:Kd,encodings_fragment:Qd,encodings_pars_fragment:Jd,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:nf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:sf,fog_vertex:of,fog_pars_vertex:af,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:uf,lightmap_fragment:hf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:yf,lights_physical_fragment:Mf,lights_physical_pars_fragment:bf,lights_fragment_begin:Sf,lights_fragment_maps:wf,lights_fragment_end:Ef,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Rf,map_particle_pars_fragment:If,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphcolor_vertex:Of,morphnormal_vertex:zf,morphtarget_pars_vertex:Uf,morphtarget_vertex:Bf,normal_fragment_begin:kf,normal_fragment_maps:Gf,normal_pars_fragment:Vf,normal_pars_vertex:Hf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:$f,output_fragment:Zf,packing:Kf,premultiplied_alpha_fragment:Qf,project_vertex:Jf,dithering_fragment:ep,dithering_pars_fragment:tp,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:sp,shadowmap_vertex:op,shadowmask_pars_fragment:ap,skinbase_vertex:lp,skinning_pars_vertex:cp,skinning_vertex:up,skinnormal_vertex:hp,specularmap_fragment:dp,specularmap_pars_fragment:fp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:gp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:yp,uv2_pars_fragment:Mp,uv2_pars_vertex:bp,uv2_vertex:Sp,worldpos_vertex:wp,background_vert:Ep,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Lp,depth_vert:Dp,depth_frag:Rp,distanceRGBA_vert:Ip,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:zp,linedashed_frag:Up,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:Gp,meshlambert_frag:Vp,meshmatcap_vert:Hp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:jp,meshphong_frag:Yp,meshphysical_vert:$p,meshphysical_frag:Zp,meshtoon_vert:Kp,meshtoon_frag:Qp,points_vert:Jp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:rm},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},Jt={basic:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:St([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:St([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:St([ie.points,ie.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:St([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:St([ie.common,ie.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:St([ie.sprite,ie.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:St([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:St([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Jt.physical={uniforms:St([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const wr={r:0,b:0,g:0};function sm(r,e,t,n,i,s,o){const a=new He(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function v(f,y){let _=!1,g=y.isScene===!0?y.background:null;g&&g.isTexture&&(g=(y.backgroundBlurriness>0?t:e).get(g));const x=r.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?p(a,c):g&&g.isColor&&(p(g,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===is)?(u===void 0&&(u=new le(new Ke(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ii(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=g.encoding!==Xe,(h!==g||d!==g.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new le(new os(2,2),new ti({name:"BackgroundMaterial",uniforms:Ii(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=g.encoding!==Xe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=g,d=g.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,y){f.getRGB(wr,sc(r)),n.buffers.color.setClear(wr.r,wr.g,wr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(f,y=1){a.set(f),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:v}}function om(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(T,O,j,$,q){let Z=!1;if(o){const K=p($,j,O);l!==K&&(l=K,m(l.object)),Z=y(T,$,j,q),Z&&_(T,$,j,q)}else{const K=O.wireframe===!0;(l.geometry!==$.id||l.program!==j.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=j.id,l.wireframe=K,Z=!0)}q!==null&&t.update(q,34963),(Z||u)&&(u=!1,M(T,O,j,$),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(T){return n.isWebGL2?r.bindVertexArray(T):s.bindVertexArrayOES(T)}function v(T){return n.isWebGL2?r.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function p(T,O,j){const $=j.wireframe===!0;let q=a[T.id];q===void 0&&(q={},a[T.id]=q);let Z=q[O.id];Z===void 0&&(Z={},q[O.id]=Z);let K=Z[$];return K===void 0&&(K=f(d()),Z[$]=K),K}function f(T){const O=[],j=[],$=[];for(let q=0;q<i;q++)O[q]=0,j[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:$,object:T,attributes:{},index:null}}function y(T,O,j,$){const q=l.attributes,Z=O.attributes;let K=0;const fe=j.getAttributes();for(const G in fe)if(fe[G].location>=0){const ne=q[G];let re=Z[G];if(re===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function _(T,O,j,$){const q={},Z=O.attributes;let K=0;const fe=j.getAttributes();for(const G in fe)if(fe[G].location>=0){let ne=Z[G];ne===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),q[G]=re,K++}l.attributes=q,l.attributesNum=K,l.index=$}function g(){const T=l.newAttributes;for(let O=0,j=T.length;O<j;O++)T[O]=0}function x(T){b(T,0)}function b(T,O){const j=l.newAttributes,$=l.enabledAttributes,q=l.attributeDivisors;j[T]=1,$[T]===0&&(r.enableVertexAttribArray(T),$[T]=1),q[T]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,O),q[T]=O)}function A(){const T=l.newAttributes,O=l.enabledAttributes;for(let j=0,$=O.length;j<$;j++)O[j]!==T[j]&&(r.disableVertexAttribArray(j),O[j]=0)}function L(T,O,j,$,q,Z){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(T,O,j,q,Z):r.vertexAttribPointer(T,O,j,$,q,Z)}function M(T,O,j,$){if(n.isWebGL2===!1&&(T.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const q=$.attributes,Z=j.getAttributes(),K=O.defaultAttributeValues;for(const fe in Z){const G=Z[fe];if(G.location>=0){let Q=q[fe];if(Q===void 0&&(fe==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),fe==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const ne=Q.normalized,re=Q.itemSize,V=t.get(Q);if(V===void 0)continue;const Se=V.buffer,_e=V.type,me=V.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Be=ce.stride,Ee=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)b(G.location+ye,ce.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<G.locationSize;ye++)x(G.location+ye);r.bindBuffer(34962,Se);for(let ye=0;ye<G.locationSize;ye++)L(G.location+ye,re/G.locationSize,_e,ne,Be*me,(Ee+re/G.locationSize*ye)*me)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)b(G.location+ce,Q.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<G.locationSize;ce++)x(G.location+ce);r.bindBuffer(34962,Se);for(let ce=0;ce<G.locationSize;ce++)L(G.location+ce,re/G.locationSize,_e,ne,re*me,re/G.locationSize*ce*me)}}else if(K!==void 0){const ne=K[fe];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(G.location,ne);break;case 3:r.vertexAttrib3fv(G.location,ne);break;case 4:r.vertexAttrib4fv(G.location,ne);break;default:r.vertexAttrib1fv(G.location,ne)}}}}A()}function S(){F();for(const T in a){const O=a[T];for(const j in O){const $=O[j];for(const q in $)v($[q].object),delete $[q];delete O[j]}delete a[T]}}function P(T){if(a[T.id]===void 0)return;const O=a[T.id];for(const j in O){const $=O[j];for(const q in $)v($[q].object),delete $[q];delete O[j]}delete a[T.id]}function U(T){for(const O in a){const j=a[O];if(j[T.id]===void 0)continue;const $=j[T.id];for(const q in $)v($[q].object),delete $[q];delete j[T.id]}}function F(){R(),u=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:x,disableUnusedAttributes:A}}function am(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function lm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),v=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),y=r.getParameter(36348),_=r.getParameter(36349),g=d>0,x=o||e.has("OES_texture_float"),b=g&&x,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:A}}function cm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new kn,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,y=r.get(h);if(!i||v===null||v.length===0||s&&!f)s?u(null):l();else{const _=s?0:n,g=_*4;let x=y.clippingState||null;c.value=x,x=u(v,d,g,m);for(let b=0;b!==g;++b)x[b]=t[b];y.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,v){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,v!==!0||f===null){const y=m+p*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<y)&&(f=new Float32Array(y));for(let g=0,x=m;g!==p;++g,x+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function um(r){let e=new WeakMap;function t(o,a){return a===ao?o.mapping=Li:a===lo&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ao||a===lo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bd(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hm extends oc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,Da=[.125,.215,.35,.446,.526,.582],Wn=20,Ws=new hm,Ra=new He;let Xs=null;const Gn=(1+Math.sqrt(5))/2,vi=1/Gn,Ia=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Gn,vi),new I(0,Gn,-vi),new I(vi,0,Gn),new I(-vi,0,Gn),new I(Gn,vi,0),new I(-Gn,vi,0)];class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xs),e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:tr,format:jt,encoding:Jn,depthBuffer:!1},i=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(s)),this._blurMaterial=fm(s,e,t)}return i}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ra),u.toneMapping=xn,u.autoClear=!1;const m=new ss({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),v=new le(new Ke,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Ra),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(a.up.set(0,c[y],0),a.lookAt(l[y],0,0)):_===1?(a.up.set(0,0,c[y]),a.lookAt(0,l[y],0)):(a.up.set(0,c[y],0),a.lookAt(0,0,l[y]));const g=this._cubeSize;Er(i,_*g,y>2?g:0,g,g),u.setRenderTarget(i),p&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Er(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ia[(i-1)%Ia.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new le(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),p=s/v,f=isFinite(s)?1+Math.floor(u*p):Wn;f>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wn}`);const y=[];let _=0;for(let L=0;L<Wn;++L){const M=L/p,S=Math.exp(-M*M/2);y.push(S),L===0?_+=S:L<f&&(_+=2*S)}for(let L=0;L<y.length;L++)y[L]=y[L]/_;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=y,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-n;const x=this._sizeLods[i],b=3*x*(i>g-Mi?i-g+Mi:0),A=4*(this._cubeSize-x);Er(t,b,A,3*x,2*x),c.setRenderTarget(t),c.render(h,Ws)}}function dm(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+Da.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Mi?c=Da[o-r+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,p=3,f=2,y=1,_=new Float32Array(p*v*m),g=new Float32Array(f*v*m),x=new Float32Array(y*v*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,M=A>2?0:-1,S=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];_.set(S,p*v*A),g.set(d,f*v*A);const P=[A,A,A,A,A,A];x.set(P,y*v*A)}const b=new ft;b.setAttribute("position",new rn(_,p)),b.setAttribute("uv",new rn(g,f)),b.setAttribute("faceIndex",new rn(x,y)),e.push(b),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fa(r,e,t){const n=new ei(r,e,t);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fm(r,e,t){const n=new Float32Array(Wn),i=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Oa(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function za(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function pm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ao||c===lo,u=c===Li||c===Di;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Na(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Na(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gm(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const v in d)e.update(d[v],34962);const m=h.morphAttributes;for(const v in m){const p=m[v];for(let f=0,y=p.length;f<y;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,v=h.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let g=0,x=_.length;g<x;g+=3){const b=_[g+0],A=_[g+1],L=_[g+2];d.push(b,A,A,L,L,b)}}else{const _=v.array;p=v.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const b=g+0,A=g+1,L=g+2;d.push(b,A,A,L,L,b)}}const f=new(Ql(d)?rc:ic)(d,1);f.version=p;const y=s.get(h);y&&e.remove(y),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _m(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function h(d,m,v){if(v===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,v),t.update(m,s,v)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function xm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vm(r,e){return r[0]-e[0]}function ym(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Mm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=v!==void 0?v.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let O=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();const g=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let P=u.attributes.position.count*S,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*U*4*p),R=new nc(F,P,U,p);R.type=jn,R.needsUpdate=!0;const T=S*4;for(let j=0;j<p;j++){const $=A[j],q=L[j],Z=M[j],K=P*U*4*j;for(let fe=0;fe<$.count;fe++){const G=fe*T;g===!0&&(o.fromBufferAttribute($,fe),F[K+G+0]=o.x,F[K+G+1]=o.y,F[K+G+2]=o.z,F[K+G+3]=0),x===!0&&(o.fromBufferAttribute(q,fe),F[K+G+4]=o.x,F[K+G+5]=o.y,F[K+G+6]=o.z,F[K+G+7]=0),b===!0&&(o.fromBufferAttribute(Z,fe),F[K+G+8]=o.x,F[K+G+9]=o.y,F[K+G+10]=o.z,F[K+G+11]=Z.itemSize===4?o.w:1)}}f={count:p,texture:R,size:new Te(P,U)},s.set(u,f),u.addEventListener("dispose",O)}let y=0;for(let g=0;g<m.length;g++)y+=m[g];const _=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const v=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==v){p=[];for(let x=0;x<v;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<v;x++){const b=p[x];b[0]=x,b[1]=m[x]}p.sort(ym);for(let x=0;x<8;x++)x<v&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(vm);const f=u.morphAttributes.position,y=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const b=a[x],A=b[0],L=b[1];A!==Number.MAX_SAFE_INTEGER&&L?(f&&u.getAttribute("morphTarget"+x)!==f[A]&&u.setAttribute("morphTarget"+x,f[A]),y&&u.getAttribute("morphNormal"+x)!==y[A]&&u.setAttribute("morphNormal"+x,y[A]),i[x]=L,_+=L):(f&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const g=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function bm(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const uc=new Ft,hc=new nc,dc=new od,fc=new ac,Ua=[],Ba=[],ka=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function zi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ua[i];if(s===void 0&&(s=new Float32Array(i),Ua[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function it(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function as(r,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;r.uniform2fv(this.addr,e),rt(t,e)}}function Em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;r.uniform3fv(this.addr,e),rt(t,e)}}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;r.uniform4fv(this.addr,e),rt(t,e)}}function Am(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Va.set(n),r.uniformMatrix2fv(this.addr,!1,Va),rt(t,n)}}function Cm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ga.set(n),r.uniformMatrix3fv(this.addr,!1,Ga),rt(t,n)}}function Pm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ka.set(n),r.uniformMatrix4fv(this.addr,!1,ka),rt(t,n)}}function Lm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;r.uniform2iv(this.addr,e),rt(t,e)}}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;r.uniform3iv(this.addr,e),rt(t,e)}}function Im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;r.uniform4iv(this.addr,e),rt(t,e)}}function Nm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;r.uniform2uiv(this.addr,e),rt(t,e)}}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;r.uniform3uiv(this.addr,e),rt(t,e)}}function zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;r.uniform4uiv(this.addr,e),rt(t,e)}}function Um(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||uc,i)}function Bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dc,i)}function km(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fc,i)}function Gm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hc,i)}function Vm(r){switch(r){case 5126:return Sm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Rm;case 35669:case 35673:return Im;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}function Hm(r,e){r.uniform1fv(this.addr,e)}function Wm(r,e){const t=zi(e,this.size,2);r.uniform2fv(this.addr,t)}function Xm(r,e){const t=zi(e,this.size,3);r.uniform3fv(this.addr,t)}function qm(r,e){const t=zi(e,this.size,4);r.uniform4fv(this.addr,t)}function jm(r,e){const t=zi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ym(r,e){const t=zi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $m(r,e){const t=zi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zm(r,e){r.uniform1iv(this.addr,e)}function Km(r,e){r.uniform2iv(this.addr,e)}function Qm(r,e){r.uniform3iv(this.addr,e)}function Jm(r,e){r.uniform4iv(this.addr,e)}function eg(r,e){r.uniform1uiv(this.addr,e)}function tg(r,e){r.uniform2uiv(this.addr,e)}function ng(r,e){r.uniform3uiv(this.addr,e)}function ig(r,e){r.uniform4uiv(this.addr,e)}function rg(r,e,t){const n=this.cache,i=e.length,s=as(t,i);it(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||uc,s[o])}function sg(r,e,t){const n=this.cache,i=e.length,s=as(t,i);it(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dc,s[o])}function og(r,e,t){const n=this.cache,i=e.length,s=as(t,i);it(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fc,s[o])}function ag(r,e,t){const n=this.cache,i=e.length,s=as(t,i);it(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||hc,s[o])}function lg(r){switch(r){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return jm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return Jm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lg(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Ha(r,e){r.seq.push(e),r.map[e.id]=e}function dg(r,e,t){const n=r.name,i=n.length;for(qs.lastIndex=0;;){const s=qs.exec(n),o=qs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ha(t,l===void 0?new cg(a,r,e):new ug(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new hg(a),Ha(t,h)),t=h}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);dg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let fg=0;function pg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mg(r){switch(r){case Jn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pg(r.getShaderSource(e),o)}else return i}function gg(r,e){const t=mg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _g(r,e){let t;switch(e){case Ih:t="Linear";break;case Nh:t="Reinhard";break;case Fh:t="OptimizedCineon";break;case Oh:t="ACESFilmic";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function vg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Zi(r){return r!==""}function qa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ja(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(r){return r.replace(Mg,bg)}function bg(r,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return po(t)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(r){return r.replace(Sg,wg)}function wg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $a(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Tg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Li:case Di:e="ENVMAP_TYPE_CUBE";break;case is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Cg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Rh:e="ENVMAP_BLENDING_ADD";break}return e}function Pg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Eg(t),l=Tg(t),u=Ag(t),h=Cg(t),d=Pg(t),m=t.isWebGL2?"":xg(t),v=vg(s),p=i.createProgram();let f,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter(Zi).join(`
`),f.length>0&&(f+=`
`),y=[m,v].filter(Zi).join(`
`),y.length>0&&(y+=`
`)):(f=[$a(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),y=[m,$a(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==xn?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,gg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=po(o),o=qa(o,t),o=ja(o,t),a=po(a),a=qa(a,t),a=ja(a,t),o=Ya(o),a=Ya(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const g=_+f+o,x=_+y+a,b=Wa(i,35633,g),A=Wa(i,35632,x);if(i.attachShader(p,b),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(A).trim();let F=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){F=!1;const T=Xa(i,b,"vertex"),O=Xa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+T+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||U==="")&&(R=!1);R&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:P,prefix:f},fragmentShader:{log:U,prefix:y}})}i.deleteShader(b),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Ur(i,p)),L};let M;return this.getAttributes=function(){return M===void 0&&(M=yg(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let Dg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ig(e),t.set(e,n)),n}}class Ig{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Ng(r,e,t,n,i,s,o){const a=new To,c=new Rg,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,S,P,U,F){const R=U.fog,T=F.geometry,O=M.isMeshStandardMaterial?U.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),$=j&&j.mapping===is?j.image.height:null,q=v[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,K=Z!==void 0?Z.length:0;let fe=0;T.morphAttributes.position!==void 0&&(fe=1),T.morphAttributes.normal!==void 0&&(fe=2),T.morphAttributes.color!==void 0&&(fe=3);let G,Q,ne,re;if(q){const Be=Jt[q];G=Be.vertexShader,Q=Be.fragmentShader}else G=M.vertexShader,Q=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),re=c.getFragmentShaderID(M);const V=r.getRenderTarget(),Se=M.alphaTest>0,_e=M.clearcoat>0,me=M.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:M.type,vertexShader:G,fragmentShader:Q,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?r.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Jn,map:!!M.map,matcap:!!M.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===nd,tangentSpaceNormalMap:M.normalMapType===Kl,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Xe,clearcoat:_e,clearcoatMap:_e&&!!M.clearcoatMap,clearcoatRoughnessMap:_e&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!M.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!M.iridescenceMap,iridescenceThicknessMap:me&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===wi,alphaMap:!!M.alphaMap,alphaTest:Se,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!T.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:xn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Nt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(r.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.combine),M.push(S.vertexUvs),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),M.push(a.mask)}function g(M){const S=v[M.type];let P;if(S){const U=Jt[S];P=xd.clone(U.uniforms)}else P=M.uniforms;return P}function x(M,S){let P;for(let U=0,F=l.length;U<F;U++){const R=l[U];if(R.cacheKey===S){P=R,++P.usedTimes;break}}return P===void 0&&(P=new Lg(r,S,M,s),l.push(P)),P}function b(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:g,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:L}}function Fg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Og(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Za(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ka(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,v,p,f){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},r[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=m,y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=p,y.group=f),e++,y}function a(h,d,m,v,p,f){const y=o(h,d,m,v,p,f);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function c(h,d,m,v,p,f){const y=o(h,d,m,v,p,f);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function l(h,d){t.length>1&&t.sort(h||Og),n.length>1&&n.sort(d||Za),i.length>1&&i.sort(d||Za)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function zg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ka,r.set(n,[o])):i>=s.length?(o=new Ka,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ug(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Bg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kg=0;function Gg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vg(r,e){const t=new Ug,n=Bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new $e,a=new $e;function c(u,h){let d=0,m=0,v=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,y=0,_=0,g=0,x=0,b=0,A=0,L=0,M=0;u.sort(Gg);const S=h!==!0?Math.PI:1;for(let U=0,F=u.length;U<F;U++){const R=u[U],T=R.color,O=R.intensity,j=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=T.r*O*S,m+=T.g*O*S,v+=T.b*O*S;else if(R.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],O);else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=R.shadow.matrix,x++}i.directional[p]=q,p++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(T).multiplyScalar(O*S),q.distance=j,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[y]=q;const Z=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[y]=Z.matrix,R.castShadow){const K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=$,A++}y++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(T).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=q,_++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*S),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=$,i.pointShadowMatrix[f]=R.shadow.matrix,b++}i.point[f]=q,f++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(O*S),q.groundColor.copy(R.groundColor).multiplyScalar(O*S),i.hemi[g]=q,g++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==y||P.rectAreaLength!==_||P.hemiLength!==g||P.numDirectionalShadows!==x||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=_,i.point.length=f,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,P.directionalLength=p,P.pointLength=f,P.spotLength=y,P.rectAreaLength=_,P.hemiLength=g,P.numDirectionalShadows=x,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=L,i.version=kg++)}function l(u,h){let d=0,m=0,v=0,p=0,f=0;const y=h.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const x=u[_];if(x.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),d++}else if(x.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),v++}else if(x.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),a.identity(),o.copy(x.matrixWorld),o.premultiply(y),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),m++}else if(x.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(y),f++}}}return{setup:c,setupView:l,state:i}}function Qa(r,e){const t=new Vg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Qa(r,e),t.set(s,[c])):o>=a.length?(c=new Qa(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wg extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xg extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Yg(r,e,t){let n=new lc;const i=new Te,s=new Te,o=new ht,a=new Wg({depthPacking:td}),c=new Xg,l={},u=t.maxTextureSize,h={[Pn]:Nt,[Nt]:Pn,[mn]:mn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:qg,fragmentShader:jg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new ft;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new le(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl,this.render=function(x,b,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const L=r.getRenderTarget(),M=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Cn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,F=x.length;U<F;U++){const R=x[U],T=R.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;i.copy(T.mapSize);const O=T.getFrameExtents();if(i.multiply(O),s.copy(T.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,T.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,T.mapSize.y=s.y)),T.map===null){const $=this.type!==$i?{minFilter:wt,magFilter:wt}:{};T.map=new ei(i.x,i.y,$),T.map.texture.name=R.name+".shadowMap",T.camera.updateProjectionMatrix()}r.setRenderTarget(T.map),r.clear();const j=T.getViewportCount();for(let $=0;$<j;$++){const q=T.getViewport($);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),P.viewport(o),T.updateMatrices(R,$),n=T.getFrustum(),g(b,A,T.camera,R,this.type)}T.isPointLightShadow!==!0&&this.type===$i&&y(T,A),T.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,M,S)};function y(x,b){const A=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ei(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(b,null,A,d,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(b,null,A,m,p,null)}function _(x,b,A,L,M,S){let P=null;const U=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(U!==void 0)P=U;else if(P=A.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=P.uuid,R=b.uuid;let T=l[F];T===void 0&&(T={},l[F]=T);let O=T[R];O===void 0&&(O=P.clone(),T[R]=O),P=O}return P.visible=b.visible,P.wireframe=b.wireframe,S===$i?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=M),P}function g(x,b,A,L,M){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===$i)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const U=e.update(x),F=x.material;if(Array.isArray(F)){const R=U.groups;for(let T=0,O=R.length;T<O;T++){const j=R[T],$=F[j.materialIndex];if($&&$.visible){const q=_(x,$,L,A.near,A.far,M);r.renderBufferDirect(A,null,U,q,x,j)}}}else if(F.visible){const R=_(x,F,L,A.near,A.far,M);r.renderBufferDirect(A,null,U,R,x,null)}}const P=x.children;for(let U=0,F=P.length;U<F;U++)g(P[U],b,A,L,M)}}function $g(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const W=new ht;let J=null;const ue=new ht(0,0,0,0);return{setMask:function(xe){J!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){N=xe},setClear:function(xe,Ue,ot,mt,Dn){Dn===!0&&(xe*=mt,Ue*=mt,ot*=mt),W.set(xe,Ue,ot,mt),ue.equals(W)===!1&&(r.clearColor(xe,Ue,ot,mt),ue.copy(W))},reset:function(){N=!1,J=null,ue.set(-1,0,0,0)}}}function s(){let N=!1,W=null,J=null,ue=null;return{setTest:function(xe){xe?Se(2929):_e(2929)},setMask:function(xe){W!==xe&&!N&&(r.depthMask(xe),W=xe)},setFunc:function(xe){if(J!==xe){switch(xe){case wh:r.depthFunc(512);break;case Eh:r.depthFunc(519);break;case Th:r.depthFunc(513);break;case oo:r.depthFunc(515);break;case Ah:r.depthFunc(514);break;case Ch:r.depthFunc(518);break;case Ph:r.depthFunc(516);break;case Lh:r.depthFunc(517);break;default:r.depthFunc(515)}J=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ue!==xe&&(r.clearDepth(xe),ue=xe)},reset:function(){N=!1,W=null,J=null,ue=null}}}function o(){let N=!1,W=null,J=null,ue=null,xe=null,Ue=null,ot=null,mt=null,Dn=null;return{setTest:function(je){N||(je?Se(2960):_e(2960))},setMask:function(je){W!==je&&!N&&(r.stencilMask(je),W=je)},setFunc:function(je,sn,zt){(J!==je||ue!==sn||xe!==zt)&&(r.stencilFunc(je,sn,zt),J=je,ue=sn,xe=zt)},setOp:function(je,sn,zt){(Ue!==je||ot!==sn||mt!==zt)&&(r.stencilOp(je,sn,zt),Ue=je,ot=sn,mt=zt)},setLocked:function(je){N=je},setClear:function(je){Dn!==je&&(r.clearStencil(je),Dn=je)},reset:function(){N=!1,W=null,J=null,ue=null,xe=null,Ue=null,ot=null,mt=null,Dn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,p=[],f=null,y=!1,_=null,g=null,x=null,b=null,A=null,L=null,M=null,S=!1,P=null,U=null,F=null,R=null,T=null;const O=r.getParameter(35661);let j=!1,$=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=$>=2);let Z=null,K={};const fe=r.getParameter(3088),G=r.getParameter(2978),Q=new ht().fromArray(fe),ne=new ht().fromArray(G);function re(N,W,J){const ue=new Uint8Array(4),xe=r.createTexture();r.bindTexture(N,xe),r.texParameteri(N,10241,9728),r.texParameteri(N,10240,9728);for(let Ue=0;Ue<J;Ue++)r.texImage2D(W+Ue,0,6408,1,1,0,6408,5121,ue);return xe}const V={};V[3553]=re(3553,3553,1),V[34067]=re(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(2929),c.setFunc(oo),Qe(!1),yt(Go),Se(2884),st(Cn);function Se(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function _e(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function me(N,W){return m[N]!==W?(r.bindFramebuffer(N,W),m[N]=W,n&&(N===36009&&(m[36160]=W),N===36160&&(m[36009]=W)),!0):!1}function ce(N,W){let J=p,ue=!1;if(N)if(J=v.get(W),J===void 0&&(J=[],v.set(W,J)),N.isWebGLMultipleRenderTargets){const xe=N.texture;if(J.length!==xe.length||J[0]!==36064){for(let Ue=0,ot=xe.length;Ue<ot;Ue++)J[Ue]=36064+Ue;J.length=xe.length,ue=!0}}else J[0]!==36064&&(J[0]=36064,ue=!0);else J[0]!==1029&&(J[0]=1029,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Be(N){return f!==N?(r.useProgram(N),f=N,!0):!1}const Ee={[yi]:32774,[fh]:32778,[ph]:32779};if(n)Ee[Xo]=32775,Ee[qo]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ee[Xo]=N.MIN_EXT,Ee[qo]=N.MAX_EXT)}const ye={[mh]:0,[gh]:1,[_h]:768,[ql]:770,[Sh]:776,[Mh]:774,[vh]:772,[xh]:769,[jl]:771,[bh]:775,[yh]:773};function st(N,W,J,ue,xe,Ue,ot,mt){if(N===Cn){y===!0&&(_e(3042),y=!1);return}if(y===!1&&(Se(3042),y=!0),N!==dh){if(N!==_||mt!==S){if((g!==yi||A!==yi)&&(r.blendEquation(32774),g=yi,A=yi),mt)switch(N){case wi:r.blendFuncSeparate(1,771,1,771);break;case Vo:r.blendFunc(1,1);break;case Ho:r.blendFuncSeparate(0,769,0,1);break;case Wo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case wi:r.blendFuncSeparate(770,771,1,771);break;case Vo:r.blendFunc(770,1);break;case Ho:r.blendFuncSeparate(0,769,0,1);break;case Wo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,b=null,L=null,M=null,_=N,S=mt}return}xe=xe||W,Ue=Ue||J,ot=ot||ue,(W!==g||xe!==A)&&(r.blendEquationSeparate(Ee[W],Ee[xe]),g=W,A=xe),(J!==x||ue!==b||Ue!==L||ot!==M)&&(r.blendFuncSeparate(ye[J],ye[ue],ye[Ue],ye[ot]),x=J,b=ue,L=Ue,M=ot),_=N,S=!1}function pt(N,W){N.side===mn?_e(2884):Se(2884);let J=N.side===Nt;W&&(J=!J),Qe(J),N.blending===wi&&N.transparent===!1?st(Cn):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ue=N.stencilWrite;l.setTest(ue),ue&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(32926):_e(32926)}function Qe(N){P!==N&&(N?r.frontFace(2304):r.frontFace(2305),P=N)}function yt(N){N!==ch?(Se(2884),N!==U&&(N===Go?r.cullFace(1029):N===uh?r.cullFace(1028):r.cullFace(1032))):_e(2884),U=N}function Ze(N){N!==F&&(j&&r.lineWidth(N),F=N)}function ze(N,W,J){N?(Se(32823),(R!==W||T!==J)&&(r.polygonOffset(W,J),R=W,T=J)):_e(32823)}function Ot(N){N?Se(3089):_e(3089)}function Et(N){N===void 0&&(N=33984+O-1),Z!==N&&(r.activeTexture(N),Z=N)}function C(N,W,J){J===void 0&&(Z===null?J=33984+O-1:J=Z);let ue=K[J];ue===void 0&&(ue={type:void 0,texture:void 0},K[J]=ue),(ue.type!==N||ue.texture!==W)&&(Z!==J&&(r.activeTexture(J),Z=J),r.bindTexture(N,W||V[N]),ue.type=N,ue.texture=W)}function w(){const N=K[Z];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Q.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function pe(N){ne.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function Le(N,W){let J=h.get(W);J===void 0&&(J=new WeakMap,h.set(W,J));let ue=J.get(N);ue===void 0&&(ue=r.getUniformBlockIndex(W,N.name),J.set(N,ue))}function De(N,W){const ue=h.get(W).get(N);u.get(W)!==ue&&(r.uniformBlockBinding(W,ue,N.__bindingPointIndex),u.set(W,ue))}function ke(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Z=null,K={},m={},v=new WeakMap,p=[],f=null,y=!1,_=null,g=null,x=null,b=null,A=null,L=null,M=null,S=!1,P=null,U=null,F=null,R=null,T=null,Q.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Se,disable:_e,bindFramebuffer:me,drawBuffers:ce,useProgram:Be,setBlending:st,setMaterial:pt,setFlipSided:Qe,setCullFace:yt,setLineWidth:Ze,setPolygonOffset:ze,setScissorTest:Ot,activeTexture:Et,bindTexture:C,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:ee,texImage2D:he,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:z,texStorage3D:ae,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:Me,compressedTexSubImage3D:D,scissor:ge,viewport:pe,reset:ke}}function Zg(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return y?new OffscreenCanvas(C,w):Yr("canvas")}function g(C,w,H,ee){let te=1;if((C.width>ee||C.height>ee)&&(te=ee/Math.max(C.width,C.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=w?fo:Math.floor,Me=se(te*C.width),D=se(te*C.height);p===void 0&&(p=_(Me,D));const z=H?_(Me,D):p;return z.width=Me,z.height=D,z.getContext("2d").drawImage(C,0,0,Me,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+D+")."),z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return ya(C.width)&&ya(C.height)}function b(C){return a?!1:C.wrapS!==qt||C.wrapT!==qt||C.minFilter!==wt&&C.minFilter!==Bt}function A(C,w){return C.generateMipmaps&&w&&C.minFilter!==wt&&C.minFilter!==Bt}function L(C){r.generateMipmap(C)}function M(C,w,H,ee,te=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;return w===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),w===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),w===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=ee===Xe&&te===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function S(C,w,H){return A(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){return C===wt||C===jo||C===gs?9728:9729}function U(C){const w=C.target;w.removeEventListener("dispose",U),R(w),w.isVideoTexture&&v.delete(w)}function F(C){const w=C.target;w.removeEventListener("dispose",F),O(w)}function R(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,ee=f.get(H);if(ee){const te=ee[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(C),Object.keys(ee).length===0&&f.delete(H)}n.remove(C)}function T(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const H=C.source,ee=f.get(H);delete ee[w.__cacheKey],o.memory.textures--}function O(C){const w=C.texture,H=n.get(C),ee=n.get(w);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(H.__webglFramebuffer[te]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,se=w.length;te<se;te++){const Me=n.get(w[te]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(C)}let j=0;function $(){j=0}function q(){const C=j;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),j+=1,C}function Z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function K(C,w){const H=n.get(C);if(C.isVideoTexture&&Ot(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(H,C,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function fe(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_e(H,C,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function G(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_e(H,C,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function Q(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){me(H,C,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}const ne={[co]:10497,[qt]:33071,[uo]:33648},re={[wt]:9728,[jo]:9984,[gs]:9986,[Bt]:9729,[Uh]:9985,[er]:9987};function V(C,w,H){if(H?(r.texParameteri(C,10242,ne[w.wrapS]),r.texParameteri(C,10243,ne[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ne[w.wrapR]),r.texParameteri(C,10240,re[w.magFilter]),r.texParameteri(C,10241,re[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==qt||w.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,P(w.magFilter)),r.texParameteri(C,10241,P(w.minFilter)),w.minFilter!==wt&&w.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===wt||w.minFilter!==gs&&w.minFilter!==er||w.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Se(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",U));const ee=w.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const se=Z(w);if(se!==C.__cacheKey){te[se]===void 0&&(te[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[se].usedTimes++;const Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&T(w)),C.__cacheKey=se,C.__webglTexture=te[se].texture}return H}function _e(C,w,H){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const te=Se(C,w),se=w.source;t.bindTexture(ee,C.__webglTexture,33984+H);const Me=n.get(se);if(se.version!==Me.__version||te===!0){t.activeTexture(33984+H),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const D=b(w)&&x(w.image)===!1;let z=g(w.image,D,!1,u);z=Et(w,z);const ae=x(z)||a,he=s.convert(w.format,w.encoding);let oe=s.convert(w.type),ge=M(w.internalFormat,he,oe,w.encoding,w.isVideoTexture);V(ee,w,ae);let pe;const Le=w.mipmaps,De=a&&w.isVideoTexture!==!0,ke=Me.__version===void 0||te===!0,N=S(w,z,ae);if(w.isDepthTexture)ge=6402,a?w.type===jn?ge=36012:w.type===qn?ge=33190:w.type===Ei?ge=35056:ge=33189:w.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zn&&ge===6402&&w.type!==Zl&&w.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qn,oe=s.convert(w.type)),w.format===Ri&&ge===6402&&(ge=34041,w.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ei,oe=s.convert(w.type))),ke&&(De?t.texStorage2D(3553,1,ge,z.width,z.height):t.texImage2D(3553,0,ge,z.width,z.height,0,he,oe,null));else if(w.isDataTexture)if(Le.length>0&&ae){De&&ke&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,J=Le.length;W<J;W++)pe=Le[W],De?t.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,oe,pe.data):t.texImage2D(3553,W,ge,pe.width,pe.height,0,he,oe,pe.data);w.generateMipmaps=!1}else De?(ke&&t.texStorage2D(3553,N,ge,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,he,oe,z.data)):t.texImage2D(3553,0,ge,z.width,z.height,0,he,oe,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&ke&&t.texStorage3D(35866,N,ge,Le[0].width,Le[0].height,z.depth);for(let W=0,J=Le.length;W<J;W++)pe=Le[W],w.format!==jt?he!==null?De?t.compressedTexSubImage3D(35866,W,0,0,0,pe.width,pe.height,z.depth,he,pe.data,0,0):t.compressedTexImage3D(35866,W,ge,pe.width,pe.height,z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,W,0,0,0,pe.width,pe.height,z.depth,he,oe,pe.data):t.texImage3D(35866,W,ge,pe.width,pe.height,z.depth,0,he,oe,pe.data)}else{De&&ke&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,J=Le.length;W<J;W++)pe=Le[W],w.format!==jt?he!==null?De?t.compressedTexSubImage2D(3553,W,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(3553,W,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,oe,pe.data):t.texImage2D(3553,W,ge,pe.width,pe.height,0,he,oe,pe.data)}else if(w.isDataArrayTexture)De?(ke&&t.texStorage3D(35866,N,ge,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,he,oe,z.data)):t.texImage3D(35866,0,ge,z.width,z.height,z.depth,0,he,oe,z.data);else if(w.isData3DTexture)De?(ke&&t.texStorage3D(32879,N,ge,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,he,oe,z.data)):t.texImage3D(32879,0,ge,z.width,z.height,z.depth,0,he,oe,z.data);else if(w.isFramebufferTexture){if(ke)if(De)t.texStorage2D(3553,N,ge,z.width,z.height);else{let W=z.width,J=z.height;for(let ue=0;ue<N;ue++)t.texImage2D(3553,ue,ge,W,J,0,he,oe,null),W>>=1,J>>=1}}else if(Le.length>0&&ae){De&&ke&&t.texStorage2D(3553,N,ge,Le[0].width,Le[0].height);for(let W=0,J=Le.length;W<J;W++)pe=Le[W],De?t.texSubImage2D(3553,W,0,0,he,oe,pe):t.texImage2D(3553,W,ge,he,oe,pe);w.generateMipmaps=!1}else De?(ke&&t.texStorage2D(3553,N,ge,z.width,z.height),t.texSubImage2D(3553,0,0,0,he,oe,z)):t.texImage2D(3553,0,ge,he,oe,z);A(w,ae)&&L(ee),Me.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function me(C,w,H){if(w.image.length!==6)return;const ee=Se(C,w),te=w.source;t.bindTexture(34067,C.__webglTexture,33984+H);const se=n.get(te);if(te.version!==se.__version||ee===!0){t.activeTexture(33984+H),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,z=[];for(let W=0;W<6;W++)!Me&&!D?z[W]=g(w.image[W],!1,!0,l):z[W]=D?w.image[W].image:w.image[W],z[W]=Et(w,z[W]);const ae=z[0],he=x(ae)||a,oe=s.convert(w.format,w.encoding),ge=s.convert(w.type),pe=M(w.internalFormat,oe,ge,w.encoding),Le=a&&w.isVideoTexture!==!0,De=se.__version===void 0||ee===!0;let ke=S(w,ae,he);V(34067,w,he);let N;if(Me){Le&&De&&t.texStorage2D(34067,ke,pe,ae.width,ae.height);for(let W=0;W<6;W++){N=z[W].mipmaps;for(let J=0;J<N.length;J++){const ue=N[J];w.format!==jt?oe!==null?Le?t.compressedTexSubImage2D(34069+W,J,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(34069+W,J,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+W,J,0,0,ue.width,ue.height,oe,ge,ue.data):t.texImage2D(34069+W,J,pe,ue.width,ue.height,0,oe,ge,ue.data)}}}else{N=w.mipmaps,Le&&De&&(N.length>0&&ke++,t.texStorage2D(34067,ke,pe,z[0].width,z[0].height));for(let W=0;W<6;W++)if(D){Le?t.texSubImage2D(34069+W,0,0,0,z[W].width,z[W].height,oe,ge,z[W].data):t.texImage2D(34069+W,0,pe,z[W].width,z[W].height,0,oe,ge,z[W].data);for(let J=0;J<N.length;J++){const xe=N[J].image[W].image;Le?t.texSubImage2D(34069+W,J+1,0,0,xe.width,xe.height,oe,ge,xe.data):t.texImage2D(34069+W,J+1,pe,xe.width,xe.height,0,oe,ge,xe.data)}}else{Le?t.texSubImage2D(34069+W,0,0,0,oe,ge,z[W]):t.texImage2D(34069+W,0,pe,oe,ge,z[W]);for(let J=0;J<N.length;J++){const ue=N[J];Le?t.texSubImage2D(34069+W,J+1,0,0,oe,ge,ue.image[W]):t.texImage2D(34069+W,J+1,pe,oe,ge,ue.image[W])}}}A(w,he)&&L(34067),se.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ce(C,w,H,ee,te){const se=s.convert(H.format,H.encoding),Me=s.convert(H.type),D=M(H.internalFormat,se,Me,H.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,D,w.width,w.height,w.depth,0,se,Me,null):t.texImage2D(te,0,D,w.width,w.height,0,se,Me,null)),t.bindFramebuffer(36160,C),ze(w)?d.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(H).__webglTexture,0,Ze(w)):(te===3553||te>=34069&&te<=34074)&&r.framebufferTexture2D(36160,ee,te,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,w,H){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(H||ze(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===jn?ee=36012:te.type===qn&&(ee=33190));const se=Ze(w);ze(w)?d.renderbufferStorageMultisampleEXT(36161,se,ee,w.width,w.height):r.renderbufferStorageMultisample(36161,se,ee,w.width,w.height)}else r.renderbufferStorage(36161,ee,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ee=Ze(w);H&&ze(w)===!1?r.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):ze(w)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ee.length;te++){const se=ee[te],Me=s.convert(se.format,se.encoding),D=s.convert(se.type),z=M(se.internalFormat,Me,D,se.encoding),ae=Ze(w);H&&ze(w)===!1?r.renderbufferStorageMultisample(36161,ae,z,w.width,w.height):ze(w)?d.renderbufferStorageMultisampleEXT(36161,ae,z,w.width,w.height):r.renderbufferStorage(36161,z,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const ee=n.get(w.depthTexture).__webglTexture,te=Ze(w);if(w.depthTexture.format===Zn)ze(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===Ri)ze(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ye(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=r.createRenderbuffer(),Be(w.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Be(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function st(C,w,H){const ee=n.get(C);w!==void 0&&ce(ee.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&ye(C)}function pt(C){const w=C.texture,H=n.get(C),ee=n.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=w.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Me=x(C)||a;if(te){H.__webglFramebuffer=[];for(let D=0;D<6;D++)H.__webglFramebuffer[D]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const D=C.texture;for(let z=0,ae=D.length;z<ae;z++){const he=n.get(D[z]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ze(C)===!1){const D=se?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let z=0;z<D.length;z++){const ae=D[z];H.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[z]);const he=s.convert(ae.format,ae.encoding),oe=s.convert(ae.type),ge=M(ae.internalFormat,he,oe,ae.encoding,C.isXRRenderTarget===!0),pe=Ze(C);r.renderbufferStorageMultisample(36161,pe,ge,C.width,C.height),r.framebufferRenderbuffer(36160,36064+z,36161,H.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),V(34067,w,Me);for(let D=0;D<6;D++)ce(H.__webglFramebuffer[D],C,w,36064,34069+D);A(w,Me)&&L(34067),t.unbindTexture()}else if(se){const D=C.texture;for(let z=0,ae=D.length;z<ae;z++){const he=D[z],oe=n.get(he);t.bindTexture(3553,oe.__webglTexture),V(3553,he,Me),ce(H.__webglFramebuffer,C,he,36064+z,3553),A(he,Me)&&L(3553)}t.unbindTexture()}else{let D=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?D=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,ee.__webglTexture),V(D,w,Me),ce(H.__webglFramebuffer,C,w,36064,D),A(w,Me)&&L(D),t.unbindTexture()}C.depthBuffer&&ye(C)}function Qe(C){const w=x(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,te=H.length;ee<te;ee++){const se=H[ee];if(A(se,w)){const Me=C.isWebGLCubeRenderTarget?34067:3553,D=n.get(se).__webglTexture;t.bindTexture(Me,D),L(Me),t.unbindTexture()}}}function yt(C){if(a&&C.samples>0&&ze(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ee=C.height;let te=16384;const se=[],Me=C.stencilBuffer?33306:36096,D=n.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let ae=0;ae<w.length;ae++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let ae=0;ae<w.length;ae++){se.push(36064+ae),C.depthBuffer&&se.push(Me);const he=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(he===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[ae]),he===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),z){const oe=n.get(w[ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,oe,0)}r.blitFramebuffer(0,0,H,ee,0,0,H,ee,te,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let ae=0;ae<w.length;ae++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,D.__webglColorRenderbuffer[ae]);const he=n.get(w[ae]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,he,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function Ze(C){return Math.min(h,C.samples)}function ze(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ot(C){const w=o.render.frame;v.get(C)!==w&&(v.set(C,w),C.update())}function Et(C,w){const H=C.encoding,ee=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ho||H!==Jn&&(H===Xe?a===!1?e.has("EXT_sRGB")===!0&&ee===jt?(C.format=ho,C.minFilter=Bt,C.generateMipmaps=!1):w=ec.sRGBToLinear(w):(ee!==jt||te!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=st,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ze}function Kg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Qn)return 5121;if(s===Vh)return 32819;if(s===Hh)return 32820;if(s===Bh)return 5120;if(s===kh)return 5122;if(s===Zl)return 5123;if(s===Gh)return 5124;if(s===qn)return 5125;if(s===jn)return 5126;if(s===tr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wh)return 6406;if(s===jt)return 6408;if(s===Xh)return 6409;if(s===qh)return 6410;if(s===Zn)return 6402;if(s===Ri)return 34041;if(s===ho)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jh)return 6403;if(s===Yh)return 36244;if(s===$h)return 33319;if(s===Zh)return 33320;if(s===Kh)return 36249;if(s===_s||s===xs||s===vs||s===ys)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_s)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_s)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yo||s===$o||s===Zo||s===Ko)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$o)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qo||s===Jo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qo)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jo)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===oa||s===aa||s===la||s===ca||s===ua||s===ha||s===da||s===fa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ea)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ta)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===na)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ia)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ra)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===la)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ca)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ua)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ha)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===da)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ms)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ms)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jh||s===pa||s===ma||s===ga)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ms)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ga)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),y=this._getHandJoint(l,p);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=f.radius),y.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class e0 extends Ft{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=qn),n===void 0&&u===Ri&&(n=Ei),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1}}class t0 extends ni{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,v=null;const p=t.getContextAttributes();let f=null,y=null;const _=[],g=[],x=new Set,b=new Map,A=new kt;A.layers.enable(1),A.viewport=new ht;const L=new kt;L.layers.enable(2),L.viewport=new ht;const M=[A,L],S=new Qg;S.layers.enable(1),S.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=_[G];return Q===void 0&&(Q=new js,_[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=_[G];return Q===void 0&&(Q=new js,_[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=_[G];return Q===void 0&&(Q=new js,_[G]=Q),Q.getHandSpace()};function F(G){const Q=g.indexOf(G.inputSource);if(Q===-1)return;const ne=_[Q];ne!==void 0&&ne.dispatchEvent({type:G.type,data:G.inputSource})}function R(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",T);for(let G=0;G<_.length;G++){const Q=g[G];Q!==null&&(g[G]=null,_[G].disconnect(Q))}P=null,U=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,y=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",R),i.addEventListener("inputsourceschange",T),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),y=new ei(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Qn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ne=null,re=null;p.depth&&(re=p.stencil?35056:33190,Q=p.stencil?Ri:Zn,ne=p.stencil?Ei:qn);const V={colorFormat:32856,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(V),i.updateRenderState({layers:[d]}),y=new ei(d.textureWidth,d.textureHeight,{format:jt,type:Qn,depthTexture:new e0(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Se=e.properties.get(y);Se.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(G){for(let Q=0;Q<G.removed.length;Q++){const ne=G.removed[Q],re=g.indexOf(ne);re>=0&&(g[re]=null,_[re].disconnect(ne))}for(let Q=0;Q<G.added.length;Q++){const ne=G.added[Q];let re=g.indexOf(ne);if(re===-1){for(let Se=0;Se<_.length;Se++)if(Se>=g.length){g.push(ne),re=Se;break}else if(g[Se]===null){g[Se]=ne,re=Se;break}if(re===-1)break}const V=_[re];V&&V.connect(ne)}}const O=new I,j=new I;function $(G,Q,ne){O.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const re=O.distanceTo(j),V=Q.projectionMatrix.elements,Se=ne.projectionMatrix.elements,_e=V[14]/(V[10]-1),me=V[14]/(V[10]+1),ce=(V[9]+1)/V[5],Be=(V[9]-1)/V[5],Ee=(V[8]-1)/V[0],ye=(Se[8]+1)/Se[0],st=_e*Ee,pt=_e*ye,Qe=re/(-Ee+ye),yt=Qe*-Ee;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(yt),G.translateZ(Qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ze=_e+Qe,ze=me+Qe,Ot=st-yt,Et=pt+(re-yt),C=ce*me/ze*Ze,w=Be*me/ze*Ze;G.projectionMatrix.makePerspective(Ot,Et,C,w,Ze,ze)}function q(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;S.near=L.near=A.near=G.near,S.far=L.far=A.far=G.far,(P!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,U=S.far);const Q=G.parent,ne=S.cameras;q(S,Q);for(let V=0;V<ne.length;V++)q(ne[V],Q);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),G.matrix.copy(S.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const re=G.children;for(let V=0,Se=re.length;V<Se;V++)re[V].updateMatrixWorld(!0);ne.length===2?$(S,A,L):S.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return x};let Z=null;function K(G,Q){if(u=Q.getViewerPose(l||o),v=Q,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let re=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let V=0;V<ne.length;V++){const Se=ne[V];let _e=null;if(m!==null)_e=m.getViewport(Se);else{const ce=h.getViewSubImage(d,Se);_e=ce.viewport,V===0&&(e.setRenderTargetTextures(y,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(y))}let me=M[V];me===void 0&&(me=new kt,me.layers.enable(V),me.viewport=new ht,M[V]=me),me.matrix.fromArray(Se.transform.matrix),me.projectionMatrix.fromArray(Se.projectionMatrix),me.viewport.set(_e.x,_e.y,_e.width,_e.height),V===0&&S.matrix.copy(me.matrix),re===!0&&S.cameras.push(me)}}for(let ne=0;ne<_.length;ne++){const re=g[ne],V=_[ne];re!==null&&V!==void 0&&V.update(re,Q,l||o)}if(Z&&Z(G,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ne=null;for(const re of x)Q.detectedPlanes.has(re)||(ne===null&&(ne=[]),ne.push(re));if(ne!==null)for(const re of ne)x.delete(re),b.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of Q.detectedPlanes)if(!x.has(re))x.add(re),b.set(re,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const V=b.get(re);re.lastChangedTime>V&&(b.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}v=null}const fe=new cc;fe.setAnimationLoop(K),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function n0(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,sc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,y,_,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,g)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),v(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,y,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Nt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Nt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let _;f.map?_=f.map:f.specularMap?_=f.specularMap:f.displacementMap?_=f.displacementMap:f.normalMap?_=f.normalMap:f.bumpMap?_=f.bumpMap:f.roughnessMap?_=f.roughnessMap:f.metalnessMap?_=f.metalnessMap:f.alphaMap?_=f.alphaMap:f.emissiveMap?_=f.emissiveMap:f.clearcoatMap?_=f.clearcoatMap:f.clearcoatNormalMap?_=f.clearcoatNormalMap:f.clearcoatRoughnessMap?_=f.clearcoatRoughnessMap:f.iridescenceMap?_=f.iridescenceMap:f.iridescenceThicknessMap?_=f.iridescenceThicknessMap:f.specularIntensityMap?_=f.specularIntensityMap:f.specularColorMap?_=f.specularColorMap:f.transmissionMap?_=f.transmissionMap:f.thicknessMap?_=f.thicknessMap:f.sheenColorMap?_=f.sheenColorMap:f.sheenRoughnessMap&&(_=f.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let g;f.aoMap?g=f.aoMap:f.lightMap&&(g=f.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uv2Transform.value.copy(g.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,y,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=_*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Nt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function i0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(_,g){const x=g.program;n.uniformBlockBinding(_,x)}function l(_,g){let x=i[_.id];x===void 0&&(v(_),x=u(_),i[_.id]=x,_.addEventListener("dispose",f));const b=g.program;n.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function u(_){const g=h();_.__bindingPointIndex=g;const x=r.createBuffer(),b=_.__size,A=_.usage;return r.bindBuffer(35345,x),r.bufferData(35345,b,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,g,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=i[_.id],x=_.uniforms,b=_.__cache;r.bindBuffer(35345,g);for(let A=0,L=x.length;A<L;A++){const M=x[A];if(m(M,A,b)===!0){const S=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let F=0;F<P.length;F++){const R=P[F],T=p(R);typeof R=="number"?(M.__data[0]=R,r.bufferSubData(35345,S+U,M.__data)):R.isMatrix3?(M.__data[0]=R.elements[0],M.__data[1]=R.elements[1],M.__data[2]=R.elements[2],M.__data[3]=R.elements[0],M.__data[4]=R.elements[3],M.__data[5]=R.elements[4],M.__data[6]=R.elements[5],M.__data[7]=R.elements[0],M.__data[8]=R.elements[6],M.__data[9]=R.elements[7],M.__data[10]=R.elements[8],M.__data[11]=R.elements[0]):(R.toArray(M.__data,U),U+=T.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,M.__data)}}r.bindBuffer(35345,null)}function m(_,g,x){const b=_.value;if(x[g]===void 0){if(typeof b=="number")x[g]=b;else{const A=Array.isArray(b)?b:[b],L=[];for(let M=0;M<A.length;M++)L.push(A[M].clone());x[g]=L}return!0}else if(typeof b=="number"){if(x[g]!==b)return x[g]=b,!0}else{const A=Array.isArray(x[g])?x[g]:[x[g]],L=Array.isArray(b)?b:[b];for(let M=0;M<A.length;M++){const S=A[M];if(S.equals(L[M])===!1)return S.copy(L[M]),!0}}return!1}function v(_){const g=_.uniforms;let x=0;const b=16;let A=0;for(let L=0,M=g.length;L<M;L++){const S=g[L],P={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let F=0,R=U.length;F<R;F++){const T=U[F],O=p(T);P.boundary+=O.boundary,P.storage+=O.storage}if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,L>0){A=x%b;const F=b-A;A!==0&&F-P.boundary<0&&(x+=b-A,S.__offset=x)}x+=P.storage}return A=x%b,A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function p(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function f(_){const g=_.target;g.removeEventListener("dispose",f);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[g.id]),delete i[g.id],delete s[g.id]}function y(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:y}}function r0(){const r=Yr("canvas");return r.style.display="block",r}function pc(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:r0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const p=this;let f=!1,y=0,_=0,g=null,x=-1,b=null;const A=new ht,L=new ht;let M=null,S=e.width,P=e.height,U=1,F=null,R=null;const T=new ht(0,0,S,P),O=new ht(0,0,S,P);let j=!1;const $=new lc;let q=!1,Z=!1,K=null;const fe=new $e,G=new Te,Q=new I,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return g===null?U:1}let V=t;function Se(E,k){for(let X=0;X<E.length;X++){const B=E[X],Y=e.getContext(B,k);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),V=Se(k,E),V===null)throw Se(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,me,ce,Be,Ee,ye,st,pt,Qe,yt,Ze,ze,Ot,Et,C,w,H,ee,te,se,Me,D,z,ae;function he(){_e=new mm(V),me=new lm(V,_e,r),_e.init(me),D=new Kg(V,_e,me),ce=new $g(V,_e,me),Be=new xm,Ee=new Fg,ye=new Zg(V,_e,ce,Ee,me,D,Be),st=new um(p),pt=new pm(p),Qe=new Ed(V,me),z=new om(V,_e,Qe,me),yt=new gm(V,Qe,Be,z),Ze=new bm(V,yt,Qe,Be),te=new Mm(V,me,ye),w=new cm(Ee),ze=new Ng(p,st,pt,_e,me,z,w),Ot=new n0(p,Ee),Et=new zg,C=new Hg(_e,me),ee=new sm(p,st,pt,ce,Ze,u,o),H=new Yg(p,Ze,me),ae=new i0(V,Be,me,ce),se=new am(V,_e,Be,me),Me=new _m(V,_e,Be,me),Be.programs=ze.programs,p.capabilities=me,p.extensions=_e,p.properties=Ee,p.renderLists=Et,p.shadowMap=H,p.state=ce,p.info=Be}he();const oe=new t0(p,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(S,P,!1))},this.getSize=function(E){return E.set(S,P)},this.setSize=function(E,k,X){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,P=k,e.width=Math.floor(E*U),e.height=Math.floor(k*U),X!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(S*U,P*U).floor()},this.setDrawingBufferSize=function(E,k,X){S=E,P=k,U=X,e.width=Math.floor(E*X),e.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(T)},this.setViewport=function(E,k,X,B){E.isVector4?T.set(E.x,E.y,E.z,E.w):T.set(E,k,X,B),ce.viewport(A.copy(T).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,k,X,B){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,k,X,B),ce.scissor(L.copy(O).multiplyScalar(U).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){ce.setScissorTest(j=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){R=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,X=!0){let B=0;E&&(B|=16384),k&&(B|=256),X&&(B|=1024),V.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),Et.dispose(),C.dispose(),Ee.dispose(),st.dispose(),pt.dispose(),Ze.dispose(),z.dispose(),ae.dispose(),ze.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ue),oe.removeEventListener("sessionend",xe),K&&(K.dispose(),K=null),Ue.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=Be.autoReset,k=H.enabled,X=H.autoUpdate,B=H.needsUpdate,Y=H.type;he(),Be.autoReset=E,H.enabled=k,H.autoUpdate=X,H.needsUpdate=B,H.type=Y}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const k=E.target;k.removeEventListener("dispose",De),ke(k)}function ke(E){N(E),Ee.remove(E)}function N(E){const k=Ee.get(E).programs;k!==void 0&&(k.forEach(function(X){ze.releaseProgram(X)}),E.isShaderMaterial&&ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,B,Y,ve){k===null&&(k=ne);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=Sc(E,k,X,B,Y);ce.setMaterial(B,we);let Pe=X.index,Fe=1;B.wireframe===!0&&(Pe=yt.getWireframeAttribute(X),Fe=2);const Re=X.drawRange,Ie=X.attributes.position;let Je=Re.start*Fe,Ct=(Re.start+Re.count)*Fe;ve!==null&&(Je=Math.max(Je,ve.start*Fe),Ct=Math.min(Ct,(ve.start+ve.count)*Fe)),Pe!==null?(Je=Math.max(Je,0),Ct=Math.min(Ct,Pe.count)):Ie!=null&&(Je=Math.max(Je,0),Ct=Math.min(Ct,Ie.count));const on=Ct-Je;if(on<0||on===1/0)return;z.setup(Y,B,Ce,X,Pe);let Rn,et=se;if(Pe!==null&&(Rn=Qe.get(Pe),et=Me,et.setIndex(Rn)),Y.isMesh)B.wireframe===!0?(ce.setLineWidth(B.wireframeLinewidth*re()),et.setMode(1)):et.setMode(4);else if(Y.isLine){let Ne=B.linewidth;Ne===void 0&&(Ne=1),ce.setLineWidth(Ne*re()),Y.isLineSegments?et.setMode(1):Y.isLineLoop?et.setMode(2):et.setMode(3)}else Y.isPoints?et.setMode(0):Y.isSprite&&et.setMode(4);if(Y.isInstancedMesh)et.renderInstances(Je,on,Y.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,cs=Math.min(X.instanceCount,Ne);et.renderInstances(Je,on,cs)}else et.render(Je,on)},this.compile=function(E,k){function X(B,Y,ve){B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,zt(B,Y,ve),B.side=Pn,B.needsUpdate=!0,zt(B,Y,ve),B.side=mn):zt(B,Y,ve)}d=C.get(E),d.init(),v.push(d),E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(B){const Y=B.material;if(Y)if(Array.isArray(Y))for(let ve=0;ve<Y.length;ve++){const we=Y[ve];X(we,E,B)}else X(Y,E,B)}),v.pop(),d=null};let W=null;function J(E){W&&W(E)}function ue(){Ue.stop()}function xe(){Ue.start()}const Ue=new cc;Ue.setAnimationLoop(J),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){W=E,oe.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},oe.addEventListener("sessionstart",ue),oe.addEventListener("sessionend",xe),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,g),d=C.get(E,v.length),d.init(),v.push(d),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(fe),Z=this.localClippingEnabled,q=w.init(this.clippingPlanes,Z),h=Et.get(E,m.length),h.init(),m.push(h),ot(E,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(F,R),q===!0&&w.beginShadows();const X=d.state.shadowsArray;if(H.render(X,E,k),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,E),d.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const B=k.cameras;for(let Y=0,ve=B.length;Y<ve;Y++){const we=B[Y];mt(h,E,we,we.viewport)}}else mt(h,E,k);g!==null&&(ye.updateMultisampleRenderTarget(g),ye.updateRenderTargetMipmap(g)),E.isScene===!0&&E.onAfterRender(p,E,k),z.resetDefaultState(),x=-1,b=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ot(E,k,X,B){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){B&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const we=Ze.update(E),Ce=E.material;Ce.visible&&h.push(E,we,Ce,X,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||$.intersectsObject(E))){B&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const we=Ze.update(E),Ce=E.material;if(Array.isArray(Ce)){const Pe=we.groups;for(let Fe=0,Re=Pe.length;Fe<Re;Fe++){const Ie=Pe[Fe],Je=Ce[Ie.materialIndex];Je&&Je.visible&&h.push(E,we,Je,X,Q.z,Ie)}}else Ce.visible&&h.push(E,we,Ce,X,Q.z,null)}}const ve=E.children;for(let we=0,Ce=ve.length;we<Ce;we++)ot(ve[we],k,X,B)}function mt(E,k,X,B){const Y=E.opaque,ve=E.transmissive,we=E.transparent;d.setupLightsView(X),q===!0&&w.setGlobalState(p.clippingPlanes,X),ve.length>0&&Dn(Y,k,X),B&&ce.viewport(A.copy(B)),Y.length>0&&je(Y,k,X),ve.length>0&&je(ve,k,X),we.length>0&&je(we,k,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Dn(E,k,X){const B=me.isWebGL2;K===null&&(K=new ei(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?tr:Qn,minFilter:er,samples:B&&s===!0?4:0})),p.getDrawingBufferSize(G),B?K.setSize(G.x,G.y):K.setSize(fo(G.x),fo(G.y));const Y=p.getRenderTarget();p.setRenderTarget(K),p.clear();const ve=p.toneMapping;p.toneMapping=xn,je(E,k,X),p.toneMapping=ve,ye.updateMultisampleRenderTarget(K),ye.updateRenderTargetMipmap(K),p.setRenderTarget(Y)}function je(E,k,X){const B=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,ve=E.length;Y<ve;Y++){const we=E[Y],Ce=we.object,Pe=we.geometry,Fe=B===null?we.material:B,Re=we.group;Ce.layers.test(X.layers)&&sn(Ce,k,X,Pe,Fe,Re)}}function sn(E,k,X,B,Y,ve){E.onBeforeRender(p,k,X,B,Y,ve),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(p,k,X,B,E,ve),Y.transparent===!0&&Y.side===mn&&Y.forceSinglePass===!1?(Y.side=Nt,Y.needsUpdate=!0,p.renderBufferDirect(X,k,B,Y,E,ve),Y.side=Pn,Y.needsUpdate=!0,p.renderBufferDirect(X,k,B,Y,E,ve),Y.side=mn):p.renderBufferDirect(X,k,B,Y,E,ve),E.onAfterRender(p,k,X,B,Y,ve)}function zt(E,k,X){k.isScene!==!0&&(k=ne);const B=Ee.get(E),Y=d.state.lights,ve=d.state.shadowsArray,we=Y.state.version,Ce=ze.getParameters(E,Y.state,ve,k,X),Pe=ze.getProgramCacheKey(Ce);let Fe=B.programs;B.environment=E.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(E.isMeshStandardMaterial?pt:st).get(E.envMap||B.environment),Fe===void 0&&(E.addEventListener("dispose",De),Fe=new Map,B.programs=Fe);let Re=Fe.get(Pe);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===we)return Lo(E,Ce),Re}else Ce.uniforms=ze.getUniforms(E),E.onBuild(X,Ce,p),E.onBeforeCompile(Ce,p),Re=ze.acquireProgram(Ce,Pe),Fe.set(Pe,Re),B.uniforms=Ce.uniforms;const Ie=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=w.uniform),Lo(E,Ce),B.needsLights=Ec(E),B.lightsStateVersion=we,B.needsLights&&(Ie.ambientLightColor.value=Y.state.ambient,Ie.lightProbe.value=Y.state.probe,Ie.directionalLights.value=Y.state.directional,Ie.directionalLightShadows.value=Y.state.directionalShadow,Ie.spotLights.value=Y.state.spot,Ie.spotLightShadows.value=Y.state.spotShadow,Ie.rectAreaLights.value=Y.state.rectArea,Ie.ltc_1.value=Y.state.rectAreaLTC1,Ie.ltc_2.value=Y.state.rectAreaLTC2,Ie.pointLights.value=Y.state.point,Ie.pointLightShadows.value=Y.state.pointShadow,Ie.hemisphereLights.value=Y.state.hemi,Ie.directionalShadowMap.value=Y.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ie.spotShadowMap.value=Y.state.spotShadowMap,Ie.spotLightMatrix.value=Y.state.spotLightMatrix,Ie.spotLightMap.value=Y.state.spotLightMap,Ie.pointShadowMap.value=Y.state.pointShadowMap,Ie.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Je=Re.getUniforms(),Ct=Ur.seqWithValue(Je.seq,Ie);return B.currentProgram=Re,B.uniformsList=Ct,Re}function Lo(E,k){const X=Ee.get(E);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Sc(E,k,X,B,Y){k.isScene!==!0&&(k=ne),ye.resetTextureUnits();const ve=k.fog,we=B.isMeshStandardMaterial?k.environment:null,Ce=g===null?p.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Jn,Pe=(B.isMeshStandardMaterial?pt:st).get(B.envMap||we),Fe=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!B.normalMap&&!!X.attributes.tangent,Ie=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color,on=B.toneMapped?p.toneMapping:xn,Rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=Rn!==void 0?Rn.length:0,Ne=Ee.get(B),cs=d.state.lights;if(q===!0&&(Z===!0||E!==b)){const Pt=E===b&&B.id===x;w.setState(B,E,Pt)}let at=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==cs.state.version||Ne.outputEncoding!==Ce||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Pe||B.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==Je||Ne.morphColors!==Ct||Ne.toneMapping!==on||me.isWebGL2===!0&&Ne.morphTargetsCount!==et)&&(at=!0):(at=!0,Ne.__version=B.version);let In=Ne.currentProgram;at===!0&&(In=zt(B,k,Y));let Do=!1,Ui=!1,us=!1;const Mt=In.getUniforms(),Nn=Ne.uniforms;if(ce.useProgram(In.program)&&(Do=!0,Ui=!0,us=!0),B.id!==x&&(x=B.id,Ui=!0),Do||b!==E){if(Mt.setValue(V,"projectionMatrix",E.projectionMatrix),me.logarithmicDepthBuffer&&Mt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Ui=!0,us=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Pt=Mt.map.cameraPosition;Pt!==void 0&&Pt.setValue(V,Q.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Mt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Y.isSkinnedMesh)&&Mt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){Mt.setOptional(V,Y,"bindMatrix"),Mt.setOptional(V,Y,"bindMatrixInverse");const Pt=Y.skeleton;Pt&&(me.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),Mt.setValue(V,"boneTexture",Pt.boneTexture,ye),Mt.setValue(V,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hs=X.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&me.isWebGL2===!0)&&te.update(Y,X,B,In),(Ui||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,Mt.setValue(V,"receiveShadow",Y.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Nn.envMap.value=Pe,Nn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Ui&&(Mt.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&wc(Nn,us),ve&&B.fog===!0&&Ot.refreshFogUniforms(Nn,ve),Ot.refreshMaterialUniforms(Nn,B,U,P,K),Ur.upload(V,Ne.uniformsList,Nn,ye)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ur.upload(V,Ne.uniformsList,Nn,ye),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Mt.setValue(V,"center",Y.center),Mt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(V,"normalMatrix",Y.normalMatrix),Mt.setValue(V,"modelMatrix",Y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let ds=0,Tc=Pt.length;ds<Tc;ds++)if(me.isWebGL2){const Ro=Pt[ds];ae.update(Ro,In),ae.bind(Ro,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function wc(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Ec(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(E,k,X){Ee.get(E.texture).__webglTexture=k,Ee.get(E.depthTexture).__webglTexture=X;const B=Ee.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=X===void 0,B.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const X=Ee.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){g=E,y=k,_=X;let B=!0,Y=null,ve=!1,we=!1;if(E){const Pe=Ee.get(E);Pe.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),B=!1):Pe.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Pe.__hasExternalTextures&&ye.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const Re=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Re[k],ve=!0):me.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?Y=Ee.get(E).__webglMultisampledFramebuffer:Y=Re,A.copy(E.viewport),L.copy(E.scissor),M=E.scissorTest}else A.copy(T).multiplyScalar(U).floor(),L.copy(O).multiplyScalar(U).floor(),M=j;if(ce.bindFramebuffer(36160,Y)&&me.drawBuffers&&B&&ce.drawBuffers(E,Y),ce.viewport(A),ce.scissor(L),ce.setScissorTest(M),ve){const Pe=Ee.get(E.texture);V.framebufferTexture2D(36160,36064,34069+k,Pe.__webglTexture,X)}else if(we){const Pe=Ee.get(E.texture),Fe=k||0;V.framebufferTextureLayer(36160,36064,Pe.__webglTexture,X||0,Fe)}x=-1},this.readRenderTargetPixels=function(E,k,X,B,Y,ve,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ce.bindFramebuffer(36160,Ce);try{const Pe=E.texture,Fe=Pe.format,Re=Pe.type;if(Fe!==jt&&D.convert(Fe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===tr&&(_e.has("EXT_color_buffer_half_float")||me.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==Qn&&D.convert(Re)!==V.getParameter(35738)&&!(Re===jn&&(me.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-B&&X>=0&&X<=E.height-Y&&V.readPixels(k,X,B,Y,D.convert(Fe),D.convert(Re),ve)}finally{const Pe=g!==null?Ee.get(g).__webglFramebuffer:null;ce.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,k,X=0){const B=Math.pow(2,-X),Y=Math.floor(k.image.width*B),ve=Math.floor(k.image.height*B);ye.setTexture2D(k,0),V.copyTexSubImage2D(3553,X,0,0,E.x,E.y,Y,ve),ce.unbindTexture()},this.copyTextureToTexture=function(E,k,X,B=0){const Y=k.image.width,ve=k.image.height,we=D.convert(X.format),Ce=D.convert(X.type);ye.setTexture2D(X,0),V.pixelStorei(37440,X.flipY),V.pixelStorei(37441,X.premultiplyAlpha),V.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?V.texSubImage2D(3553,B,E.x,E.y,Y,ve,we,Ce,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(3553,B,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):V.texSubImage2D(3553,B,E.x,E.y,we,Ce,k.image),B===0&&X.generateMipmaps&&V.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X,B,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Pe=D.convert(B.format),Fe=D.convert(B.type);let Re;if(B.isData3DTexture)ye.setTexture3D(B,0),Re=32879;else if(B.isDataArrayTexture)ye.setTexture2DArray(B,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,B.flipY),V.pixelStorei(37441,B.premultiplyAlpha),V.pixelStorei(3317,B.unpackAlignment);const Ie=V.getParameter(3314),Je=V.getParameter(32878),Ct=V.getParameter(3316),on=V.getParameter(3315),Rn=V.getParameter(32877),et=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(3314,et.width),V.pixelStorei(32878,et.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Re,Y,k.x,k.y,k.z,ve,we,Ce,Pe,Fe,et.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Re,Y,k.x,k.y,k.z,ve,we,Ce,Pe,et.data)):V.texSubImage3D(Re,Y,k.x,k.y,k.z,ve,we,Ce,Pe,Fe,et),V.pixelStorei(3314,Ie),V.pixelStorei(32878,Je),V.pixelStorei(3316,Ct),V.pixelStorei(3315,on),V.pixelStorei(32877,Rn),Y===0&&B.generateMipmaps&&V.generateMipmap(Re),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){y=0,_=0,g=null,ce.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class s0 extends pc{}s0.prototype.isWebGL1Renderer=!0;class o0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ls extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ja=new I,el=new I,tl=new $e,Ys=new Eo,Ar=new rs;class pn extends dt{constructor(e=new ft,t=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ja.fromBufferAttribute(t,i-1),el.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ja.distanceTo(el);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;tl.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(tl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,d=new I,m=this.isLineSegments?2:1,v=n.index,f=n.attributes.position;if(v!==null){const y=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=y,x=_-1;g<x;g+=m){const b=v.getX(g),A=v.getX(g+1);if(l.fromBufferAttribute(f,b),u.fromBufferAttribute(f,A),Ys.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=y,x=_-1;g<x;g+=m){if(l.fromBufferAttribute(f,g),u.fromBufferAttribute(f,g+1),Ys.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const nl=new I,il=new I;class mc extends pn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nl.fromBufferAttribute(t,i),il.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nl.distanceTo(il);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _t extends ft{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],m=[];let v=0;const p=[],f=n/2;let y=0;_(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(m,2));function _(){const x=new I,b=new I;let A=0;const L=(t-e)/n;for(let M=0;M<=s;M++){const S=[],P=M/s,U=P*(t-e)+e;for(let F=0;F<=i;F++){const R=F/i,T=R*c+a,O=Math.sin(T),j=Math.cos(T);b.x=U*O,b.y=-P*n+f,b.z=U*j,h.push(b.x,b.y,b.z),x.set(O,L,j).normalize(),d.push(x.x,x.y,x.z),m.push(R,1-P),S.push(v++)}p.push(S)}for(let M=0;M<i;M++)for(let S=0;S<s;S++){const P=p[S][M],U=p[S+1][M],F=p[S+1][M+1],R=p[S][M+1];u.push(P,U,R),u.push(U,F,R),A+=6}l.addGroup(y,A,0),y+=A}function g(x){const b=v,A=new Te,L=new I;let M=0;const S=x===!0?e:t,P=x===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,f*P,0),d.push(0,P,0),m.push(.5,.5),v++;const U=v;for(let F=0;F<=i;F++){const T=F/i*c+a,O=Math.cos(T),j=Math.sin(T);L.x=S*j,L.y=f*P,L.z=S*O,h.push(L.x,L.y,L.z),d.push(0,P,0),A.x=O*.5+.5,A.y=j*.5*P+.5,m.push(A.x,A.y),v++}for(let F=0;F<i;F++){const R=b+F,T=U+F;x===!0?u.push(T,T+1,R):u.push(T+1,T,R),M+=3}l.addGroup(y,M,x===!0?1:2),y+=M}}static fromJSON(e){return new _t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new I,x=new I,b=new I;for(let A=0;A<t.length;A+=3)m(t[A+0],g),m(t[A+1],x),m(t[A+2],b),c(g,x,b,_)}function c(_,g,x,b){const A=b+1,L=[];for(let M=0;M<=A;M++){L[M]=[];const S=_.clone().lerp(x,M/A),P=g.clone().lerp(x,M/A),U=A-M;for(let F=0;F<=U;F++)F===0&&M===A?L[M][F]=S:L[M][F]=S.clone().lerp(P,F/U)}for(let M=0;M<A;M++)for(let S=0;S<2*(A-M)-1;S++){const P=Math.floor(S/2);S%2===0?(d(L[M][P+1]),d(L[M+1][P]),d(L[M][P])):(d(L[M][P+1]),d(L[M+1][P+1]),d(L[M+1][P]))}}function l(_){const g=new I;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(_),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function u(){const _=new I;for(let g=0;g<s.length;g+=3){_.x=s[g+0],_.y=s[g+1],_.z=s[g+2];const x=f(_)/2/Math.PI+.5,b=y(_)/Math.PI+.5;o.push(x,1-b)}v(),h()}function h(){for(let _=0;_<o.length;_+=6){const g=o[_+0],x=o[_+2],b=o[_+4],A=Math.max(g,x,b),L=Math.min(g,x,b);A>.9&&L<.1&&(g<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function m(_,g){const x=_*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function v(){const _=new I,g=new I,x=new I,b=new I,A=new Te,L=new Te,M=new Te;for(let S=0,P=0;S<s.length;S+=9,P+=6){_.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(o[P+0],o[P+1]),L.set(o[P+2],o[P+3]),M.set(o[P+4],o[P+5]),b.copy(_).add(g).add(x).divideScalar(3);const U=f(b);p(A,P+0,_,U),p(L,P+2,g,U),p(M,P+4,x,U)}}function p(_,g,x,b){b<0&&_.x===1&&(o[g]=_.x-1),x.x===0&&x.z===0&&(o[g]=b/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function y(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new Co(e.vertices,e.indices,e.radius,e.details)}}const Cr=new I,Pr=new I,$s=new I,Lr=new en;class a0 extends ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Or*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},m=[];for(let v=0;v<c;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:p,b:f,c:y}=Lr;if(p.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),y.fromBufferAttribute(a,l[2]),Lr.getNormal($s),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,x=h[_],b=h[g],A=Lr[u[_]],L=Lr[u[g]],M=`${x}_${b}`,S=`${b}_${x}`;S in d&&d[S]?($s.dot(d[S].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(L.x,L.y,L.z)),d[S]=null):M in d||(d[M]={index0:l[_],index1:l[g],normal:$s.clone()})}}for(const v in d)if(d[v]){const{index0:p,index1:f}=d[v];Cr.fromBufferAttribute(a,p),Pr.fromBufferAttribute(a,f),m.push(Cr.x,Cr.y,Cr.z),m.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new Oe(m,3))}}}class bi extends Co{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bi(e.radius,e.detail)}}class Po extends ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,m=[],v=[],p=[],f=[];for(let y=0;y<=n;y++){const _=[],g=y/n;let x=0;y==0&&o==0?x=.5/t:y==n&&c==Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(A+x,1-g),_.push(l++)}u.push(_)}for(let y=0;y<n;y++)for(let _=0;_<t;_++){const g=u[y][_+1],x=u[y][_],b=u[y+1][_],A=u[y+1][_+1];(y!==0||o>0)&&m.push(g,x,A),(y!==n-1||c<Math.PI)&&m.push(x,b,A)}this.setIndex(m),this.setAttribute("position",new Oe(v,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(f,2))}static fromJSON(e){return new Po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xn extends ft{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let m=0;m<=n;m++)for(let v=0;v<=i;v++){const p=v/i*s,f=m/n*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(p),h.y=(e+t*Math.cos(f))*Math.sin(p),h.z=t*Math.sin(f),a.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(v/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=i;v++){const p=(i+1)*m+v-1,f=(i+1)*(m-1)+v-1,y=(i+1)*(m-1)+v,_=(i+1)*m+v;o.push(p,f,_),o.push(f,y,_)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}static fromJSON(e){return new Xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class l0 extends Oi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const rl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class c0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],v=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const u0=new c0;class gc{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const fn={};class h0 extends Error{constructor(e,t){super(e),this.response=t}}class d0 extends gc{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=rl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:n,onError:i});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=fn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,v=m!==0;let p=0;const f=new ReadableStream({start(y){_();function _(){h.read().then(({done:g,value:x})=>{if(g)y.close();else{p+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:v,loaded:p,total:m});for(let A=0,L=u.length;A<L;A++){const M=u[A];M.onProgress&&M.onProgress(b)}y.enqueue(x),_()}})}}});return new Response(f)}else throw new h0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{rl.add(e,l);const u=fn[e];delete fn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=fn[e];if(u===void 0)throw this.manager.itemError(e),l;delete fn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _c{constructor(e,t,n=0,i=1/0){this.ray=new Eo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(sl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)mo(e[i],this,n,t);return n.sort(sl),n}}function sl(r,e){return r.distance-e.distance}function mo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)mo(i[s],e,t,!0)}}class ol{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class f0 extends mc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ft;i.setAttribute("position",new Oe(t,3)),i.setAttribute("color",new Oe(n,3));const s=new ls({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new He,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const Dr=new He;class p0 extends gc{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,i){const s=this,o=new d0(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(f){const y=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let _="",g=0;const x=y.exec(f);x!==null&&(_=x[1],g=new Blob([x[0]]).size);const b={comments:[],elements:[],headerLength:g,objInfo:""},A=_.split(/\r\n|\r|\n/);let L;function M(S,P){const U={type:S[0]};return U.type==="list"?(U.name=S[3],U.countType=S[1],U.itemType=S[2]):U.name=S[1],U.name in P&&(U.name=P[U.name]),U}for(let S=0;S<A.length;S++){let P=A[S];if(P=P.trim(),P==="")continue;const U=P.split(/\s+/),F=U.shift();switch(P=U.join(" "),F){case"format":b.format=U[0],b.version=U[1];break;case"comment":b.comments.push(P);break;case"element":L!==void 0&&b.elements.push(L),L={},L.name=U[0],L.count=parseInt(U[1]),L.properties=[];break;case"property":L.properties.push(M(U,p.propertyNameMapping));break;case"obj_info":b.objInfo=P;break;default:console.log("unhandled",F,U)}}return L!==void 0&&b.elements.push(L),b}function n(f,y){switch(y){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(f);case"float":case"double":case"float32":case"float64":return parseFloat(f)}}function i(f,y){const _=y.split(/\s+/),g={};for(let x=0;x<f.length;x++)if(f[x].type==="list"){const b=[],A=n(_.shift(),f[x].countType);for(let L=0;L<A;L++)b.push(n(_.shift(),f[x].itemType));g[f[x].name]=b}else g[f[x].name]=n(_.shift(),f[x].type);return g}function s(){const f={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};for(const y of Object.keys(p.customPropertyMapping))f[y]=[];return f}function o(f){const y=f.map(g=>g.name);function _(g){for(let x=0,b=g.length;x<b;x++){const A=g[x];if(y.includes(A))return A}return null}return{attrX:_(["x","px","posx"])||"x",attrY:_(["y","py","posy"])||"y",attrZ:_(["z","pz","posz"])||"z",attrNX:_(["nx","normalx"]),attrNY:_(["ny","normaly"]),attrNZ:_(["nz","normalz"]),attrS:_(["s","u","texture_u","tx"]),attrT:_(["t","v","texture_v","ty"]),attrR:_(["red","diffuse_red","r","diffuse_r"]),attrG:_(["green","diffuse_green","g","diffuse_g"]),attrB:_(["blue","diffuse_blue","b","diffuse_b"])}}function a(f,y){const _=s();let g;const x=/end_header\s([\s\S]*)$/;let b="";(g=x.exec(f))!==null&&(b=g[1]);const A=b.split(/\r\n|\r|\n/);let L=0,M=0,S=y.elements[L],P=o(S.properties);for(let U=0;U<A.length;U++){let F=A[U];if(F=F.trim(),F==="")continue;M>=S.count&&(L++,M=0,S=y.elements[L],P=o(S.properties));const R=i(S.properties,F);l(_,S.name,R,P),M++}return c(_)}function c(f){let y=new ft;f.indices.length>0&&y.setIndex(f.indices),y.setAttribute("position",new Oe(f.vertices,3)),f.normals.length>0&&y.setAttribute("normal",new Oe(f.normals,3)),f.uvs.length>0&&y.setAttribute("uv",new Oe(f.uvs,2)),f.colors.length>0&&y.setAttribute("color",new Oe(f.colors,3)),f.faceVertexUvs.length>0&&(y=y.toNonIndexed(),y.setAttribute("uv",new Oe(f.faceVertexUvs,2)));for(const _ of Object.keys(p.customPropertyMapping))f[_].length>0&&y.setAttribute(_,new Oe(f[_],p.customPropertyMapping[_].length));return y.computeBoundingSphere(),y}function l(f,y,_,g){if(y==="vertex"){f.vertices.push(_[g.attrX],_[g.attrY],_[g.attrZ]),g.attrNX!==null&&g.attrNY!==null&&g.attrNZ!==null&&f.normals.push(_[g.attrNX],_[g.attrNY],_[g.attrNZ]),g.attrS!==null&&g.attrT!==null&&f.uvs.push(_[g.attrS],_[g.attrT]),g.attrR!==null&&g.attrG!==null&&g.attrB!==null&&(Dr.setRGB(_[g.attrR]/255,_[g.attrG]/255,_[g.attrB]/255).convertSRGBToLinear(),f.colors.push(Dr.r,Dr.g,Dr.b));for(const x of Object.keys(p.customPropertyMapping))for(const b of p.customPropertyMapping[x])f[x].push(_[b])}else if(y==="face"){const x=_.vertex_indices||_.vertex_index,b=_.texcoord;x.length===3?(f.indices.push(x[0],x[1],x[2]),b&&b.length===6&&(f.faceVertexUvs.push(b[0],b[1]),f.faceVertexUvs.push(b[2],b[3]),f.faceVertexUvs.push(b[4],b[5]))):x.length===4&&(f.indices.push(x[0],x[1],x[3]),f.indices.push(x[1],x[2],x[3]))}}function u(f,y){const _={};let g=0;for(let x=0;x<y.length;x++){const b=y[x],A=b.valueReader;if(b.type==="list"){const L=[],M=b.countReader.read(f+g);g+=b.countReader.size;for(let S=0;S<M;S++)L.push(A.read(f+g)),g+=A.size;_[b.name]=L}else _[b.name]=A.read(f+g),g+=A.size}return[_,g]}function h(f,y,_){function g(x,b,A){switch(b){case"int8":case"char":return{read:L=>x.getInt8(L),size:1};case"uint8":case"uchar":return{read:L=>x.getUint8(L),size:1};case"int16":case"short":return{read:L=>x.getInt16(L,A),size:2};case"uint16":case"ushort":return{read:L=>x.getUint16(L,A),size:2};case"int32":case"int":return{read:L=>x.getInt32(L,A),size:4};case"uint32":case"uint":return{read:L=>x.getUint32(L,A),size:4};case"float32":case"float":return{read:L=>x.getFloat32(L,A),size:4};case"float64":case"double":return{read:L=>x.getFloat64(L,A),size:8}}}for(let x=0,b=f.length;x<b;x++){const A=f[x];A.type==="list"?(A.countReader=g(y,A.countType,_),A.valueReader=g(y,A.itemType,_)):A.valueReader=g(y,A.type,_)}}function d(f,y){const _=s(),g=y.format==="binary_little_endian",x=new DataView(f,y.headerLength);let b,A=0;for(let L=0;L<y.elements.length;L++){const M=y.elements[L],S=M.properties,P=o(S);h(S,x,g);for(let U=0;U<M.count;U++){b=u(A,S),A+=b[1];const F=b[0];l(_,M.name,F,P)}}return c(_)}function m(f){let y=0,_=!0,g="";const x=[];do{const b=String.fromCharCode(f[y++]);b!==`
`&&b!=="\r"?g+=b:(g==="end_header"&&(_=!1),g!==""&&(x.push(g),g=""))}while(_&&y<f.length);return x.join("\r")+"\r"}let v;const p=this;if(e instanceof ArrayBuffer){const f=new Uint8Array(e),y=m(f),_=t(y);if(_.format==="ascii"){const g=new TextDecoder().decode(f);v=a(g,_)}else v=d(e,_)}else v=a(e,t(e));return v}}const Bn=new _c,Tt=new I,Tn=new I,Ye=new ut,al={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Zs={type:"change"},ll={type:"mouseDown"},cl={type:"mouseUp",mode:null},ul={type:"objectChange"};class xc extends dt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new y0;this._gizmo=n,this.add(n);const i=new M0;this._plane=i,this.add(i);const s=this;function o(_,g){let x=g;Object.defineProperty(s,_,{get:function(){return x!==void 0?x:g},set:function(b){x!==b&&(x=b,i[_]=b,n[_]=b,s.dispatchEvent({type:_+"-changed",value:b}),s.dispatchEvent(Zs))}}),s[_]=g,i[_]=g,n[_]=g}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,c=new I,l=new ut,u=new ut,h=new I,d=new ut,m=new I,v=new I,p=new I,f=0,y=new I;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",m),o("pointEnd",v),o("rotationAxis",p),o("rotationAngle",f),o("eye",y),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new ut,this._parentQuaternionInv=new ut,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new ut,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new ut,this._scaleStart=new I,this._getPointer=m0.bind(this),this._onPointerDown=_0.bind(this),this._onPointerHover=g0.bind(this),this._onPointerMove=x0.bind(this),this._onPointerUp=v0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Bn.setFromCamera(e,this.camera);const t=Ks(this._gizmo.picker[this.mode],Bn);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Bn.setFromCamera(e,this.camera);const t=Ks(this._plane,Bn,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,ll.mode=this.mode,this.dispatchEvent(ll)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;Bn.setFromCamera(e,this.camera);const o=Ks(this._plane,Bn,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(Ye.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Tt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Tt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Tn.set(a,a,a)}else Tt.copy(this.pointStart),Tn.copy(this.pointEnd),Tt.applyQuaternion(this._worldQuaternionInv),Tn.applyQuaternion(this._worldQuaternionInv),Tn.divide(Tt),t.search("X")===-1&&(Tn.x=1),t.search("Y")===-1&&(Tn.y=1),t.search("Z")===-1&&(Tn.z=1);i.scale.copy(this._scaleStart).multiply(Tn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Tt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Tt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(al[t]),Tt.copy(al[t]),s==="local"&&Tt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Tt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Ye.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Ye.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Zs),this.dispatchEvent(ul)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(cl.mode=this.mode,this.dispatchEvent(cl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Zs),this.dispatchEvent(ul),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Bn}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function m0(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function g0(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function _0(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function x0(r){this.enabled&&this.pointerMove(this._getPointer(r))}function v0(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function Ks(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Rr=new sr,Ge=new I(0,1,0),hl=new I(0,0,0),dl=new $e,Ir=new ut,Br=new ut,Zt=new I,fl=new $e,Ki=new I(1,0,0),Vn=new I(0,1,0),Qi=new I(0,0,1),Nr=new I,qi=new I,ji=new I;class y0 extends dt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ss({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ls({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const p=new _t(0,.04,.1,12);p.translate(0,.05,0);const f=new Ke(.08,.08,.08);f.translate(0,.04,0);const y=new ft;y.setAttribute("position",new Oe([0,0,0,1,0,0],3));const _=new _t(.0075,.0075,.5,3);_.translate(0,.25,0);function g(O,j){const $=new Xn(O,.0075,3,64,j*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function x(){const O=new ft;return O.setAttribute("position",new Oe([0,0,0,1,1,1],3)),O}const b={X:[[new le(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(p,s),[-.5,0,0],[0,0,Math.PI/2]],[new le(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new le(p,o),[0,.5,0]],[new le(p,o),[0,-.5,0],[Math.PI,0,0]],[new le(_,o)]],Z:[[new le(p,a),[0,0,.5],[Math.PI/2,0,0]],[new le(p,a),[0,0,-.5],[-Math.PI/2,0,0]],[new le(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new le(new bi(.1,0),h.clone()),[0,0,0]]],XY:[[new le(new Ke(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new le(new Ke(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new Ke(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new le(new _t(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new _t(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new _t(.2,0,.6,4),n),[0,.3,0]],[new le(new _t(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new _t(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new _t(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new le(new bi(.2,0),n)]],XY:[[new le(new Ke(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new Ke(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new Ke(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new le(new bi(.01,2),i),null,null,null,"helper"]],END:[[new le(new bi(.01,2),i),null,null,null,"helper"]],DELTA:[[new pn(x(),i),null,null,null,"helper"]],X:[[new pn(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new pn(y,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new pn(y,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},M={XYZE:[[new le(g(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new le(g(.5,.5),s)]],Y:[[new le(g(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new le(g(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new le(g(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new pn(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},P={XYZE:[[new le(new Po(.25,10,8),n)]],X:[[new le(new Xn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new le(new Xn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new le(new Xn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new le(new Xn(.75,.1,2,24),n)]]},U={X:[[new le(f,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(_,s),[0,0,0],[0,0,-Math.PI/2]],[new le(f,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new le(f,o),[0,.5,0]],[new le(_,o)],[new le(f,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new le(f,a),[0,0,.5],[Math.PI/2,0,0]],[new le(_,a),[0,0,0],[Math.PI/2,0,0]],[new le(f,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new le(new Ke(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new le(new Ke(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new Ke(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new Ke(.1,.1,.1),h.clone())]]},F={X:[[new le(new _t(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new _t(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new _t(.2,0,.6,4),n),[0,.3,0]],[new le(new _t(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new _t(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new _t(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new le(new Ke(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new Ke(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new Ke(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new Ke(.2,.2,.2),n),[0,0,0]]]},R={X:[[new pn(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new pn(y,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new pn(y,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function T(O){const j=new dt;for(const $ in O)for(let q=O[$].length;q--;){const Z=O[$][q][0].clone(),K=O[$][q][1],fe=O[$][q][2],G=O[$][q][3],Q=O[$][q][4];Z.name=$,Z.tag=Q,K&&Z.position.set(K[0],K[1],K[2]),fe&&Z.rotation.set(fe[0],fe[1],fe[2]),G&&Z.scale.set(G[0],G[1],G[2]),Z.updateMatrix();const ne=Z.geometry.clone();ne.applyMatrix4(Z.matrix),Z.geometry=ne,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),j.add(Z)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=T(b)),this.add(this.gizmo.rotate=T(M)),this.add(this.gizmo.scale=T(U)),this.add(this.picker.translate=T(A)),this.add(this.picker.rotate=T(P)),this.add(this.picker.scale=T(F)),this.add(this.helper.translate=T(L)),this.add(this.helper.rotate=T(S)),this.add(this.helper.scale=T(R)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Br;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ye.setFromEuler(Rr.set(0,0,0)),o.quaternion.copy(n).multiply(Ye),Math.abs(Ge.copy(Ki).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ye.setFromEuler(Rr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ye),Math.abs(Ge.copy(Vn).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ye.setFromEuler(Rr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ye),Math.abs(Ge.copy(Qi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ye.setFromEuler(Rr.set(0,Math.PI/2,0)),Ge.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(dl.lookAt(hl,Ge,Vn)),o.quaternion.multiply(Ye),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Tt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Tt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Tt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ge.copy(Ki).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ge.copy(Vn).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ge.copy(Qi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ge.copy(Qi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ge.copy(Ki).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ge.copy(Vn).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ir.copy(n),Ge.copy(this.eye).applyQuaternion(Ye.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(dl.lookAt(this.eye,hl,Vn)),o.name==="X"&&(Ye.setFromAxisAngle(Ki,Math.atan2(-Ge.y,Ge.z)),Ye.multiplyQuaternions(Ir,Ye),o.quaternion.copy(Ye)),o.name==="Y"&&(Ye.setFromAxisAngle(Vn,Math.atan2(Ge.x,Ge.z)),Ye.multiplyQuaternions(Ir,Ye),o.quaternion.copy(Ye)),o.name==="Z"&&(Ye.setFromAxisAngle(Qi,Math.atan2(Ge.y,Ge.x)),Ye.multiplyQuaternions(Ir,Ye),o.quaternion.copy(Ye))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class M0 extends le{constructor(){super(new os(1e5,1e5,2,2),new ss({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Nr.copy(Ki).applyQuaternion(t==="local"?this.worldQuaternion:Br),qi.copy(Vn).applyQuaternion(t==="local"?this.worldQuaternion:Br),ji.copy(Qi).applyQuaternion(t==="local"?this.worldQuaternion:Br),Ge.copy(qi),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ge.copy(this.eye).cross(Nr),Zt.copy(Nr).cross(Ge);break;case"Y":Ge.copy(this.eye).cross(qi),Zt.copy(qi).cross(Ge);break;case"Z":Ge.copy(this.eye).cross(ji),Zt.copy(ji).cross(Ge);break;case"XY":Zt.copy(ji);break;case"YZ":Zt.copy(Nr);break;case"XZ":Ge.copy(ji),Zt.copy(qi);break;case"XYZ":case"E":Zt.set(0,0,0);break}break;case"rotate":default:Zt.set(0,0,0)}Zt.length()===0?this.quaternion.copy(this.cameraQuaternion):(fl.lookAt(Tt.set(0,0,0),Zt,Ge),this.quaternion.setFromRotationMatrix(fl)),super.updateMatrixWorld(e)}}const pl={type:"change"},Qs={type:"start"},ml={type:"end"};class b0 extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Et),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),s=i.NONE},this.update=function(){const D=new I,z=new ut().setFromUnitVectors(e.up,new I(0,1,0)),ae=z.clone().invert(),he=new I,oe=new ut,ge=2*Math.PI;return function(){const Le=n.object.position;D.copy(Le).sub(n.target),D.applyQuaternion(z),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&S(L()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let De=n.minAzimuthAngle,ke=n.maxAzimuthAngle;return isFinite(De)&&isFinite(ke)&&(De<-Math.PI?De+=ge:De>Math.PI&&(De-=ge),ke<-Math.PI?ke+=ge:ke>Math.PI&&(ke-=ge),De<=ke?a.theta=Math.max(De,Math.min(ke,a.theta)):a.theta=a.theta>(De+ke)/2?Math.max(De,a.theta):Math.min(ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(ae),Le.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||he.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(pl),he.copy(n.object.position),oe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",st),n.domElement.removeEventListener("pointercancel",yt),n.domElement.removeEventListener("wheel",Ot),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Et)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ol,c=new ol;let l=1;const u=new I;let h=!1;const d=new Te,m=new Te,v=new Te,p=new Te,f=new Te,y=new Te,_=new Te,g=new Te,x=new Te,b=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function S(D){c.theta-=D}function P(D){c.phi-=D}const U=function(){const D=new I;return function(ae,he){D.setFromMatrixColumn(he,0),D.multiplyScalar(-ae),u.add(D)}}(),F=function(){const D=new I;return function(ae,he){n.screenSpacePanning===!0?D.setFromMatrixColumn(he,1):(D.setFromMatrixColumn(he,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ae),u.add(D)}}(),R=function(){const D=new I;return function(ae,he){const oe=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;D.copy(ge).sub(n.target);let pe=D.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ae*pe/oe.clientHeight,n.object.matrix),F(2*he*pe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ae*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),F(he*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function T(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(D){d.set(D.clientX,D.clientY)}function $(D){_.set(D.clientX,D.clientY)}function q(D){p.set(D.clientX,D.clientY)}function Z(D){m.set(D.clientX,D.clientY),v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;S(2*Math.PI*v.x/z.clientHeight),P(2*Math.PI*v.y/z.clientHeight),d.copy(m),n.update()}function K(D){g.set(D.clientX,D.clientY),x.subVectors(g,_),x.y>0?T(M()):x.y<0&&O(M()),_.copy(g),n.update()}function fe(D){f.set(D.clientX,D.clientY),y.subVectors(f,p).multiplyScalar(n.panSpeed),R(y.x,y.y),p.copy(f),n.update()}function G(D){D.deltaY<0?O(M()):D.deltaY>0&&T(M()),n.update()}function Q(D){let z=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),z=!0;break}z&&(D.preventDefault(),n.update())}function ne(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);d.set(D,z)}}function re(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);p.set(D,z)}}function V(){const D=b[0].pageX-b[1].pageX,z=b[0].pageY-b[1].pageY,ae=Math.sqrt(D*D+z*z);_.set(0,ae)}function Se(){n.enableZoom&&V(),n.enablePan&&re()}function _e(){n.enableZoom&&V(),n.enableRotate&&ne()}function me(D){if(b.length==1)m.set(D.pageX,D.pageY);else{const ae=Me(D),he=.5*(D.pageX+ae.x),oe=.5*(D.pageY+ae.y);m.set(he,oe)}v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;S(2*Math.PI*v.x/z.clientHeight),P(2*Math.PI*v.y/z.clientHeight),d.copy(m)}function ce(D){if(b.length===1)f.set(D.pageX,D.pageY);else{const z=Me(D),ae=.5*(D.pageX+z.x),he=.5*(D.pageY+z.y);f.set(ae,he)}y.subVectors(f,p).multiplyScalar(n.panSpeed),R(y.x,y.y),p.copy(f)}function Be(D){const z=Me(D),ae=D.pageX-z.x,he=D.pageY-z.y,oe=Math.sqrt(ae*ae+he*he);g.set(0,oe),x.set(0,Math.pow(g.y/_.y,n.zoomSpeed)),T(x.y),_.copy(g)}function Ee(D){n.enableZoom&&Be(D),n.enablePan&&ce(D)}function ye(D){n.enableZoom&&Be(D),n.enableRotate&&me(D)}function st(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",pt),n.domElement.addEventListener("pointerup",Qe)),ee(D),D.pointerType==="touch"?C(D):Ze(D))}function pt(D){n.enabled!==!1&&(D.pointerType==="touch"?w(D):ze(D))}function Qe(D){te(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(ml),s=i.NONE}function yt(D){te(D)}function Ze(D){let z;switch(D.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case ri.DOLLY:if(n.enableZoom===!1)return;$(D),s=i.DOLLY;break;case ri.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;q(D),s=i.PAN}else{if(n.enableRotate===!1)return;j(D),s=i.ROTATE}break;case ri.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;j(D),s=i.ROTATE}else{if(n.enablePan===!1)return;q(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qs)}function ze(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(D);break;case i.DOLLY:if(n.enableZoom===!1)return;K(D);break;case i.PAN:if(n.enablePan===!1)return;fe(D);break}}function Ot(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Qs),G(D),n.dispatchEvent(ml))}function Et(D){n.enabled===!1||n.enablePan===!1||Q(D)}function C(D){switch(se(D),b.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;ne(),s=i.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;re(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),s=i.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qs)}function w(D){switch(se(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(D),n.update();break;default:s=i.NONE}}function H(D){n.enabled!==!1&&D.preventDefault()}function ee(D){b.push(D)}function te(D){delete A[D.pointerId];for(let z=0;z<b.length;z++)if(b[z].pointerId==D.pointerId){b.splice(z,1);return}}function se(D){let z=A[D.pointerId];z===void 0&&(z=new Te,A[D.pointerId]=z),z.set(D.pageX,D.pageY)}function Me(D){const z=D.pointerId===b[0].pointerId?b[1]:b[0];return A[z.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",st),n.domElement.addEventListener("pointercancel",yt),n.domElement.addEventListener("wheel",Ot,{passive:!1}),this.update()}}const S0="http://localhost:8080/api",vc="t",yc="s",w0="r",E0=(r,e)=>r.reduce((t,n,i)=>(i%e==0?t.push([n]):t[t.length-1].push(n))&&t,[]),T0=r=>E0(r,Math.sqrt(r.length)),gl=r=>T0(r.clone().transpose().elements);class Mc{#n;#e;_camera;_scene;_cameraControl;_mouseEvent;constructor(e=13684944){this._camera=new kt(50,4/3,.1,1e3),this._scene=new o0,this._scene.background=new He(e),this.#e=new pc,this.#n=new p0,this.#e.setSize(1e3,750),this._camera.position.set(2,2,2),this._camera.lookAt(0,0,0);const t=new f0(1);this._scene.add(t),this._cameraControl=new b0(this._camera,this.canvas),this._cameraControl.update(),window.addEventListener("mousemove",this.#t.bind(this))}get canvas(){return this.#e.domElement}get cameraControl(){return this._cameraControl}#t(e){this._mouseEvent=e}_disableCamera(e){this._cameraControl.enabled=!e.value}async _fetchMesh(e){const t=await this.#n.loadAsync(`${S0}/experiment/${e}/mesh`);t.computeVertexNormals();const n=new l0;return new le(t,n)}render(){this.#e.render(this._scene,this._camera)}runLoop(){requestAnimationFrame(this.runLoop.bind(this)),this._cameraControl.update(),this.render()}}class A0 extends Mc{#n;#e;#t;constructor(...e){super(...e),this.#e=this.#o(),this._scene.add(this.#e),this.#t=new xc(this._camera,this.canvas),this.#t.attach(this.#e),this._scene.add(this.#t),this.#s(),this.#t.addEventListener("dragging-changed",this._disableCamera.bind(this)),window.addEventListener("keydown",this.#a.bind(this))}#o(e=1,t=0){const n=new Ke(e,e,e),i=new a0(n),s=new ls({color:t});return new mc(i,s)}#a(e){!this.#e.visible||!this._mouseEvent||this._mouseEvent.target!==this.canvas||(this.#l(e),this.render())}#l(e){switch(e.key){case vc:this.#t.setMode("translate");break;case yc:this.#t.setMode("scale");break}}#i(){this.#e.applyMatrix4(this.#e.matrixWorld.invert())}#r(e){this.#e.visible=e,this.#t.showX=this.#t.showY=this.#t.showZ=e,this.#t.enabled=e}#c(){this.#r(!0)}#s(){this.#r(!1)}async setMesh(e,t=!1){t&&this.resetMesh(),this.#n=await super._fetchMesh(e),this._scene.add(this.#n),this.#i(),this.#c()}resetMesh(){this.#n&&(this._scene.remove(this.#n),this.#n=null,this.#s())}get aabbArray(){if(!this.#e||!this.#e.visible)return null;const e=new Fi;return e.setFromObject(this.#e),[e.min.toArray(),e.max.toArray()]}get hasMesh(){return!!this.#n}}class C0 extends Mc{#n;#e=new Map;constructor(...e){super(...e),this.#n=new _c,this.cameraControl.addEventListener("change",this.#t.bind(this)),window.addEventListener("keydown",this.#o.bind(this))}#t(e){console.log(this.cameraIntrinsics)}#o(e){const t=Array.from(this.#u());if(!t.length||!this._mouseEvent||this._mouseEvent.target!==this.canvas)return;console.log(t);const n=this.#l(this._mouseEvent);this.#n.setFromCamera(n,this._camera);const i=this.#n.intersectObjects(t);if(!i.length)return;const s=this.#r(i[0].object.id);this.#a(e,s)}#a(e,t){switch(e.key){case vc:t.setMode("translate");break;case w0:t.setMode("rotate");break;case yc:t.setMode("scale");break}}#l(e){const t=this.canvas.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:(e.clientY-t.top)/t.height*-2+1}}#i(e){return this._scene.getObjectById(e)}#r(e){const t=this.#e.get(e);return this._scene.getObjectById(t)}#c(e,t){this.#e.set(e.id,t.id)}#s(e){this.#e.delete(e.id)}*#u(){for(const e of this.#e.keys())yield this.#i(e)}async addMesh(e){const t=await super._fetchMesh(e);this._scene.add(t);const n=new xc(this._camera,this.canvas);return n.attach(t),n.addEventListener("dragging-changed",this._disableCamera.bind(this)),this._scene.add(n),this.#c(t,n),t.id}removeMesh(e){const t=this.#i(e);this._scene.remove(t);const n=this.#r(e);this._scene.remove(n),this.#s(t)}getMeshTransformMatrix(e){return gl(this.#i(e).matrixWorld)}get cameraExtrinsics(){const e=new $e;e.makeRotationX(Math.PI);const t=new $e;return t.multiplyMatrices(this._camera.matrixWorld,e),gl(t)}get cameraFocalLength(){return this._camera.getFocalLength()*this._camera.filmGauge}get imageSize(){return[this._camera.getFilmHeight()*this._camera.filmGauge,this._camera.getFilmWidth()*this._camera.filmGauge]}}const P0=yn("<div></div>",2),L0=localStorage,D0=()=>{const r=nn(""),e=new A0;e.runLoop();const t=async()=>{const i=L0.getItem("email");if(!i){r.setErrors({message:"Email is invalid!"});return}if(!e.hasMesh){r.setErrors({message:"Mesh is missing!"});return}try{const s=await ah(i,r.value,e.aabbArray,!1);r.setValue(s)}catch(s){r.setErrors({message:s.message})}},n=async()=>{r.setErrors(null);try{await e.setMesh(r.value,!0)}catch(i){r.setErrors({message:i.message})}};return[de(ir,{text:"Edit scene"}),de(R0,{get children(){return[(()=>{const i=P0.cloneNode(!0);return Yt(i,()=>e.canvas),i})(),de(N0,{get children(){return[" ",de(I0,{get children(){return[de(Si,{name:"experimentId",placeholder:"Experiment Id",control:r}),de(An,{name:"submit",placeholder:"Load",type:"button",onClick:n})]}}),de(An,{bottom:!0,name:"apply",placeholder:"Apply",type:"button",get disabled(){return!r.isValid},onClick:t})]}})]}})]},R0=We("section")`
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`,I0=We("fieldset")`
  display: flex;
  width: 256px;
  .wrapper-input {
    width: 160px;
  }
  button {
    width: 96px;
  }
`,N0=We("div")`
  display: grid;
  grid-template-rows: 714px auto;
`,F0=yn("<input>",1),O0=yn("<label></label>",2),bc=r=>{r=$n({control:nn("")},r);const[e,t]=Qr(r,["control","name","placeholder"]),n=()=>e.control;return de(z0,{class:"wrapper-input",get children(){return[(()=>{const i=F0.cloneNode(!0);return vo(i,$n(t,{placeholder:" ",get id(){return e.name},get name(){return e.name},get value(){return n().value},onInput:s=>{n().setValue(s.target.value)},onBlur:()=>n().markTouched(!0)}),!1,!1),i})(),(()=>{const i=O0.cloneNode(!0);return Yt(i,()=>e.placeholder),tn(()=>Jr(i,"for",e.name)),i})(),de(Wr,{get when(){return!r.withoutMessage},get children(){return de(U0,{get children(){return de(Wr,{get when(){return!n().isValid},get children(){return n().errors.message}})}})}})]}})},z0=We("div")`
  input {
    border-bottom: 2px solid
      ${r=>r.error?"var(--thirdColor)":"var(--mainColor)"};
  }
`,U0=We("div")`
  color: var(--thirdColor);
`,B0=yn("<form><div></div></form>",4),k0=localStorage,G0=()=>{const r=qu({dataURL:nn(""),experimentId:nn("",{readonly:!0,disabled:!0})}),e=()=>r.controls,t=async()=>{const n=k0.getItem("email");if(!n){e().dataURL.patchErrors({message:"Email is invalid!"});return}if(!e().dataURL.isValid)e().dataURL.markTouched(!0);else{r.markPending(!0);try{const i=await sh(n,e().dataURL.value);e().experimentId.setValue(i),e().experimentId.markDisabled(!1),r.markSubmitted(!0)}catch(i){e().dataURL.patchErrors({message:i.message})}finally{r.markPending(!1)}}};return[de(ir,{text:"Train"}),de(V0,{get children(){return de(W0,{get children(){return[(()=>{const n=B0.cloneNode(!0),i=n.firstChild;return Yt(i,de(bc,{name:"dataURL",type:"text",placeholder:"Data URL",get control(){return e().dataURL}})),n})(),de(H0,{get children(){return[de(Si,{name:"experimentId",placeholder:"Experiment ID",get control(){return e().experimentId}}),de(An,{name:"submit",placeholder:"Train",get disabled(){return r.isPending},type:"button",onClick:t})]}})]}})}})]},V0=We("section")`
  display: flex;
  margin: 50px auto;
  justify-content: center;
`,H0=We("fieldset")`
  display: flex;
  bottom: 0;
  width: 350px;
  input {
    width: 250px;
  }
  button {
    width: 100px;
  }
`,W0=We("div")`
  width: 350px;
  position: relative;
`,X0=yn("<div></div>",2),_l=5,q0=localStorage,j0=()=>{const r=nn(""),e=nn("",{readonly:!0,disabled:!0}),t=Yu(["1321","3213"]),n=new C0;n.runLoop();const i=async()=>{if(r.setErrors(null),t.size==_l){r.setErrors({message:`The maximum number of experiments is ${_l}`});return}try{const a=await n.addMesh(r.value),c=nn(r.value,{data:{meshId:a},disabled:!0,readonly:!0});t.push(c),r.setValue(null)}catch(a){r.setErrors({message:a.message})}},s=(a,c)=>{const l=a.data.meshId;n.removeMesh(l),t.removeControl(c()),r.setErrors(null)},o=async()=>{const a=q0.getItem("email");if(!a){e.setErrors({message:"Email is invalid!"});return}if(!t.size){e.setErrors({message:"There are no scenes to compose"});return}try{const c=[];for(const h of t.controls)c.push({experiment_id:h.value,T:n.getMeshTransformMatrix(h.data.meshId)});const l={fx:n.cameraFocalLength,fy:n.cameraFocalLength,camera2world:n.cameraExtrinsics},u=await lh(a,c,n.imageSize,l);e.setValue(u),e.markDisabled(!1)}catch(c){e.setErrors({message:c.message})}};return[de(ir,{text:"Compose scenes"}),de(Y0,{get children(){return[(()=>{const a=X0.cloneNode(!0);return Yt(a,()=>n.canvas),a})(),de(Z0,{get children(){return[de(Q0,{get children(){return[de(Js,{get children(){return[de(Si,{name:"experimentId",placeholder:"Experiment Id",control:r}),de(An,{name:"submit",placeholder:"Load",type:"button",get onClick(){return Gu(i)}})]}}),de($0,{get children(){return de(Gc,{get each(){return t.controls},children:(a,c)=>de(Js,{get children(){return[de(Si,{withoutMessage:!0,name:"experimentId",placeholder:"Experiment Id",control:a}),de(An,{name:"submit",placeholder:"Remove",type:"button",onClick:()=>s(a,c)})]}})})}})]}}),de(K0,{get children(){return de(Js,{get children(){return[de(Si,{name:"experimentId",placeholder:"Experiment Id",control:e}),de(An,{name:"submit",placeholder:"Render",type:"button",get disabled(){return!r.isValid},onClick:o})]}})}})]}})]}})]},Y0=We("section")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`,Js=We("fieldset")`
  display: flex;
  row-gap: 24px;
  width: 256px;
  .wrapper-input {
    width: 160px;
  }
  button {
    width: 96px;
  }
`,$0=We("fieldset")`
  display: flex;
  row-gap: 24px;
  flex-wrap: wrap;
`,Z0=We("div")`
  display: grid;
  grid-template-rows: 714px auto;
`,K0=We.div``,Q0=We.div``,J0=yn("<img>",1),e_=()=>{const[r,e]=_n(""),t=nn("");let n;const i=async()=>{if(t.isValid)try{const s=await oh(t.value);e(s)}catch(s){t.patchErrors({message:s.message})}};return[de(ir,{text:"Rendered Image"}),de(t_,{get children(){return[de(r_,{get href(){return r()},ref(s){const o=n;typeof o=="function"?o(s):n=s},download:"rendering.png",get children(){const s=J0.cloneNode(!0);return tn(()=>Jr(s,"src",r())),s}}),de(i_,{get children(){return[de(n_,{get children(){return[de(Si,{name:"image",placeholder:"Experiment Id",control:t}),de(An,{name:"submit",placeholder:"Load",type:"button",onClick:i})]}}),de(An,{name:"apply",placeholder:"Download",type:"button",onClick:()=>n.click()})]}})]}})]},t_=We("div")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`,n_=We("fieldset")`
  display: flex;
  width: 256px;
  .wrapper-input {
    width: 160px;
  }
  button {
    width: 96px;
  }
`,i_=We("div")`
  display: grid;
  grid-template-rows: 714px auto;
`,r_=We("a")`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: var(--secondaryColor);
  img {
    display: flex;
    width: 100%;
    /* aspect-ratio: 4/3; */
  }
`,eo=localStorage,s_=()=>{const r=nn(eo.getItem("email")??"");let e;return Dc(()=>{r.setValidators(t=>typeof t=="string"&&t.length===0?{message:"Email is missing"}:e.validity.valid?null:{message:e.validationMessage})}),yl(()=>{r.isValid?eo.setItem("email",r.value):eo.removeItem("email")}),[de(ir,{text:"Email"}),de(o_,{get children(){return de(bc,{type:"email",name:"email",placeholder:"Email",control:r,ref(t){const n=e;typeof n=="function"?n(t):e=t}})}})]},o_=We("fieldset")`
  display: flex;
  justify-content: center;
  .wrapper-input {
    width: 350px;
  }
`,a_=()=>[de(s_,{}),de(G0,{}),de(D0,{}),de(j0,{}),de(e_,{})],l_=()=>[de(c_,{}),de(u_,{get children(){return de(a_,{})}})],c_=Nu`
:root {
  --mainColor: #333333;
  --secondaryColor: #cccccc;
  --thirdColor: #BB2222;
  --errorMessageSize: 24px;
  --outsidePadding: 64px;
}`,u_=We("section")`
  margin: 64px auto;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--headerHeight));
  width: calc(100% - 2 * var(--outsidePadding));
`,h_=document.getElementById("root");Zc(()=>de(Tu,{get source(){return mu()},get children(){return de(l_,{})}}),h_);
