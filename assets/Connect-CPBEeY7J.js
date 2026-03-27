import{u as lt,r as z,M as Wt,g as Gt,h as Kt,i as Xt,k as Yt,l as Qt,n as ue,o as Zt,p as en,H as tn,v as ge,q as nn,s as rn,t as sn,w as on,x as an,y as cn,z as ut,B as ln,C as un,D as dn,E as fn,J as pn,K as dt,L as hn,N as ft,O as mn,f as Ae,d as x,m as T,P as yn,j as f,S as gn,a as xn,Q as bn,T as wn,U as Sn,V as En,W as Rn,A as G,X as Tn,Y as An,Z as On,F as jn,c as Cn,I as Pn,R as vn,G as pt}from"./index-XeEcX5ht.js";import{r as ht,u as Nn,s as kn,a as de}from"./useScrollAnimation-BrSjFOG4.js";function mt(e){const t=lt(()=>Gt(e)),{isStatic:n}=z.useContext(Wt);if(n){const[,r]=z.useState(e);z.useEffect(()=>t.on("change",r),[])}return t}function yt(e,t){const n=mt(t()),r=()=>n.set(t());return r(),Kt(()=>{const s=()=>Yt.preRender(r,!1,!0),o=e.map(i=>i.on("change",s));return()=>{o.forEach(i=>i()),Xt(r)}}),n}const Fn=e=>e&&typeof e=="object"&&e.mix,Ln=e=>Fn(e)?e.mix:void 0;function _n(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],s=e[1+n],o=e[2+n],i=e[3+n],c=Qt(s,o,{mixer:Ln(o[0]),...i});return t?c(r):c}function Dn(e){ue.current=[],e();const t=yt(ue.current,e);return ue.current=void 0,t}function Bn(e,t,n,r){if(typeof e=="function")return Dn(e);const s=typeof t=="function"?t:_n(t,n,r);return Array.isArray(e)?ze(e,s):ze([e],([o])=>s(o))}function ze(e,t){const n=lt(()=>[]);return yt(e,()=>{n.length=0;const r=e.length;for(let s=0;s<r;s++)n[s]=e[s].get();return t(n)})}function Un(e){return typeof e=="object"&&!Array.isArray(e)}function In(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Zt(e)?new en(t):new tn(t);n.mount(e),ge.set(e,n)}function $n(e,t=100,n){const r=n({...e,keyframes:[0,t]}),s=Math.min(nn(r),rn);return{type:"keyframes",ease:o=>r.next(s*o).value/t,duration:sn(s)}}function Me(e,t,n,r){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(s=r.get(t))!==null&&s!==void 0?s:e}const zn=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function Mn(e,t){return on(e)?e[zn(0,e.length,t)]:e}function Hn(e,t,n){for(let r=0;r<e.length;r++){const s=e[r];s.at>t&&s.at<n&&(cn(e,s),r--)}}function qn(e,t,n,r,s,o){Hn(e,s,o);for(let i=0;i<t.length;i++)e.push({value:t[i],at:an(s,o,r[i]),easing:Mn(n,i)})}function Vn(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Jn="easeInOut";function Wn(e,{defaultTransition:t={},...n}={},r,s){const o=t.duration||.3,i=new Map,c=new Map,d={},u=new Map;let l=0,h=0,w=0;for(let g=0;g<e.length;g++){const p=e[g];if(typeof p=="string"){u.set(p,h);continue}else if(!Array.isArray(p)){u.set(p.name,Me(h,p.at,l,u));continue}let[m,E,b={}]=p;b.at!==void 0&&(h=Me(h,b.at,l,u));let R=0;const S=(j,k,O,v=0,D=0)=>{const P=Gn(j),{delay:ce=0,times:$=un(P),type:le="keyframes",...Vt}=k;let{ease:Ne=t.ease||"easeOut",duration:_}=k;const ke=typeof ce=="function"?ce(v,D):ce,Fe=P.length,Le=dn(le)?le:s==null?void 0:s[le];if(Fe<=2&&Le){let Ue=100;if(Fe===2&&Yn(P)){const Jt=P[1]-P[0];Ue=Math.abs(Jt)}const Ie={...Vt};_!==void 0&&(Ie.duration=pn(_));const $e=$n(Ie,Ue,Le);Ne=$e.ease,_=$e.duration}_??(_=o);const _e=h+ke,De=_e+_;$.length===1&&$[0]===0&&($[1]=1);const Be=$.length-P.length;Be>0&&fn($,Be),P.length===1&&P.unshift(null),qn(O,P,Ne,$,_e,De),R=Math.max(ke+_,R),w=Math.max(De,w)};if(ut(m)){const j=He(m,c);S(E,b,qe("default",j))}else{const j=ht(m,r,d),k=j.length;for(let O=0;O<k;O++){E=E,b=b;const v=j[O],D=He(v,c);for(const P in E)S(E[P],Kn(b,P),qe(P,D),O,k)}}l=h,h+=R}return c.forEach((g,p)=>{for(const m in g){const E=g[m];E.sort(Vn);const b=[],R=[],S=[];for(let k=0;k<E.length;k++){const{at:O,value:v,easing:D}=E[k];b.push(v),R.push(ln(0,w,O)),S.push(D||"easeOut")}R[0]!==0&&(R.unshift(0),b.unshift(b[0]),S.unshift(Jn)),R[R.length-1]!==1&&(R.push(1),b.push(null)),i.has(p)||i.set(p,{keyframes:{},transition:{}});const j=i.get(p);j.keyframes[m]=b,j.transition[m]={...t,duration:w,ease:S,times:R,...n}}}),i}function He(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function qe(e,t){return t[e]||(t[e]=[]),t[e]}function Gn(e){return Array.isArray(e)?e:[e]}function Kn(e,t){return e[t]?{...e,...e[t]}:{...e}}const Xn=e=>typeof e=="number",Yn=e=>e.every(Xn);function gt(e,t,n,r){const s=ht(e),o=s.length,i=[];for(let c=0;c<o;c++){const d=s[c];ge.has(d)||In(d);const u=ge.get(d),l={...n};typeof l.delay=="function"&&(l.delay=l.delay(c,o)),i.push(...hn(u,{...t,transition:l},{}))}return new ft(i)}const Qn=e=>Array.isArray(e)&&Array.isArray(e[0]);function Zn(e,t,n){const r=[];return Wn(e,t,n,{spring:mn}).forEach(({keyframes:o,transition:i},c)=>{let d;ut(c)?d=dt(c,o.default,i.default):d=gt(c,o,i),r.push(d)}),new ft(r)}const er=e=>{function t(n,r,s){let o;return Qn(n)?o=Zn(n,r,e):Un(r)?o=gt(n,r,s):o=dt(n,r,s),o}return t},Ve=er();function xt(e,t){return function(){return e.apply(t,arguments)}}const{toString:tr}=Object.prototype,{getPrototypeOf:Oe}=Object,re=(e=>t=>{const n=tr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),L=e=>(e=e.toLowerCase(),t=>re(t)===e),se=e=>t=>typeof t===e,{isArray:M}=Array,V=se("undefined");function nr(e){return e!==null&&!V(e)&&e.constructor!==null&&!V(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bt=L("ArrayBuffer");function rr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bt(e.buffer),t}const sr=se("string"),N=se("function"),wt=se("number"),oe=e=>e!==null&&typeof e=="object",or=e=>e===!0||e===!1,Z=e=>{if(re(e)!=="object")return!1;const t=Oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ir=L("Date"),ar=L("File"),cr=L("Blob"),lr=L("FileList"),ur=e=>oe(e)&&N(e.pipe),dr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=re(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},fr=L("URLSearchParams"),[pr,hr,mr,yr]=["ReadableStream","Request","Response","Headers"].map(L),gr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function St(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rt=e=>!V(e)&&e!==Et;function xe(){const{caseless:e}=Rt(this)&&this||{},t={},n=(r,s)=>{const o=e&&St(t,s)||s;Z(t[o])&&Z(r)?t[o]=xe(t[o],r):Z(r)?t[o]=xe({},r):M(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&J(arguments[r],n);return t}const xr=(e,t,n,{allOwnKeys:r}={})=>(J(t,(s,o)=>{n&&N(s)?e[o]=xt(s,n):e[o]=s},{allOwnKeys:r}),e),br=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Sr=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Er=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Rr=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!wt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Oe(Uint8Array)),Ar=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Or=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jr=L("HTMLFormElement"),Cr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Je=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pr=L("RegExp"),Tt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},vr=e=>{Tt(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Nr=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return M(e)?r(e):r(String(e).split(t)),n},kr=()=>{},Fr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,fe="abcdefghijklmnopqrstuvwxyz",We="0123456789",At={DIGIT:We,ALPHA:fe,ALPHA_DIGIT:fe+fe.toUpperCase()+We},Lr=(e=16,t=At.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function _r(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dr=e=>{const t=new Array(10),n=(r,s)=>{if(oe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=M(r)?[]:{};return J(r,(i,c)=>{const d=n(i,s+1);!V(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Br=L("AsyncFunction"),Ur=e=>e&&(oe(e)||N(e))&&N(e.then)&&N(e.catch),a={isArray:M,isArrayBuffer:bt,isBuffer:nr,isFormData:dr,isArrayBufferView:rr,isString:sr,isNumber:wt,isBoolean:or,isObject:oe,isPlainObject:Z,isReadableStream:pr,isRequest:hr,isResponse:mr,isHeaders:yr,isUndefined:V,isDate:ir,isFile:ar,isBlob:cr,isRegExp:Pr,isFunction:N,isStream:ur,isURLSearchParams:fr,isTypedArray:Tr,isFileList:lr,forEach:J,merge:xe,extend:xr,trim:gr,stripBOM:br,inherits:wr,toFlatObject:Sr,kindOf:re,kindOfTest:L,endsWith:Er,toArray:Rr,forEachEntry:Ar,matchAll:Or,isHTMLForm:jr,hasOwnProperty:Je,hasOwnProp:Je,reduceDescriptors:Tt,freezeMethods:vr,toObjectSet:Nr,toCamelCase:Cr,noop:kr,toFiniteNumber:Fr,findKey:St,global:Et,isContextDefined:Rt,ALPHABET:At,generateString:Lr,isSpecCompliantForm:_r,toJSONObject:Dr,isAsyncFn:Br,isThenable:Ur};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ot=y.prototype,jt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jt[e]={value:e}});Object.defineProperties(y,jt);Object.defineProperty(Ot,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ot);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ir=null;function be(e){return a.isPlainObject(e)||a.isArray(e)}function Ct(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ge(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ct(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $r(e){return a.isArray(e)&&!e.some(be)}const zr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ie(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!a.isUndefined(E[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,m,E){let b=p;if(p&&!E&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&$r(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(b=a.toArray(p)))return m=Ct(m),b.forEach(function(S,j){!(a.isUndefined(S)||S===null)&&t.append(i===!0?Ge([m],j,o):i===null?m:m+"[]",u(S))}),!1}return be(p)?!0:(t.append(Ge(E,m,o),u(p)),!1)}const h=[],w=Object.assign(zr,{defaultVisitor:l,convertValue:u,isVisitable:be});function g(p,m){if(!a.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),a.forEach(p,function(b,R){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(R)?R.trim():R,m,w))===!0&&g(b,m?m.concat(R):[R])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ke(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function je(e,t){this._pairs=[],e&&ie(e,this,t)}const Pt=je.prototype;Pt.append=function(t,n){this._pairs.push([t,n])};Pt.toString=function(t){const n=t?function(r){return t.call(this,r,Ke)}:Ke;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vt(e,t,n){if(!t)return e;const r=n&&n.encode||Mr,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new je(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Xe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Hr=typeof URLSearchParams<"u"?URLSearchParams:je,qr=typeof FormData<"u"?FormData:null,Vr=typeof Blob<"u"?Blob:null,Jr={isBrowser:!0,classes:{URLSearchParams:Hr,FormData:qr,Blob:Vr},protocols:["http","https","file","blob","url","data"]},Ce=typeof window<"u"&&typeof document<"u",Wr=(e=>Ce&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Gr=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Kr=Ce&&window.location.href||"http://localhost",Xr=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ce,hasStandardBrowserEnv:Wr,hasStandardBrowserWebWorkerEnv:Gr,origin:Kr},Symbol.toStringTag,{value:"Module"})),F={...Xr,...Jr};function Yr(e,t){return ie(e,new F.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return F.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Qr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zr(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function kt(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Zr(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Qr(r),s,n,0)}),n}return null}function es(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:Nt,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(kt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yr(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ie(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),es(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{W.headers[e]={}});const ts=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ns=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&ts[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ye=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:a.isArray(e)?e.map(ee):String(e)}function rs(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ss=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function pe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function os(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function is(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class C{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=q(d);if(!l)throw new Error("header name must be a non-empty string");const h=a.findKey(s,l);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||d]=ee(c))}const i=(c,d)=>a.forEach(c,(u,l)=>o(u,l,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!ss(t))i(ns(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return rs(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||pe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||pe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||pe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=ee(s),delete n[o];return}const c=t?os(o):String(o).trim();c!==o&&delete n[o],n[c]=ee(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ye]=this[Ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(is(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(C.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(C);function he(e,t){const n=this||W,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ft(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,y,{__CANCEL__:!0});function Lt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function as(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cs(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];i||(i=u),n[s]=d,r[s]=u;let h=o,w=0;for(;h!==s;)w+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const g=l&&u-l;return g?Math.round(w*1e3/g):void 0}}function ls(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const te=(e,t,n=3)=>{let r=0;const s=cs(50,250);return ls(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,u=s(d),l=i<=c;r=i;const h={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null};h[t?"download":"upload"]=!0,e(h)},n)},us=F.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),ds=F.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function fs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ps(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _t(e,t){return e&&!fs(t)?ps(e,t):t}const Qe=e=>e instanceof C?{...e}:e;function I(e,t){t=t||{};const n={};function r(u,l,h){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:h},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,h){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,h)}else return r(u,l,h)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,h){if(h in t)return r(u,l);if(h in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Qe(u),Qe(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const h=d[l]||s,w=h(e[l],t[l],l);a.isUndefined(w)&&h!==c||(n[l]=w)}),n}const Dt=e=>{const t=I({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=C.from(i),t.url=vt(_t(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(F.hasStandardBrowserEnv||F.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[u,...l]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(F.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&us(t.url))){const u=s&&o&&ds.read(o);u&&i.set(s,u)}return t},hs=typeof XMLHttpRequest<"u",ms=hs&&function(e){return new Promise(function(n,r){const s=Dt(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:c}=s,d;function u(){s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function h(){if(!l)return;const g=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};Lt(function(b){n(b),u()},function(b){r(b),u()},m),l=null}"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new y("Request aborted",y.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let p=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Nt;s.timeoutErrorMessage&&(p=s.timeoutErrorMessage),r(new y(p,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(p,m){l.setRequestHeader(m,p)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",te(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",te(s.onUploadProgress)),(s.cancelToken||s.signal)&&(d=g=>{l&&(r(!g||g.type?new H(null,e,l):g),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const w=as(s.url);if(w&&F.protocols.indexOf(w)===-1){r(new y("Unsupported protocol "+w+":",y.ERR_BAD_REQUEST,e));return}l.send(o||null)})},ys=(e,t)=>{let n=new AbortController,r;const s=function(d){if(!r){r=!0,i();const u=d instanceof Error?d:this.reason;n.abort(u instanceof y?u:new H(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d&&(d.removeEventListener?d.removeEventListener("abort",s):d.unsubscribe(s))}),e=null)};e.forEach(d=>d&&d.addEventListener&&d.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},gs=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},xs=async function*(e,t,n){for await(const r of e)yield*gs(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Ze=(e,t,n,r,s)=>{const o=xs(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:d,value:u}=await o.next();if(d){c.close(),r();return}let l=u.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(u))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},et=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},ae=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Bt=ae&&typeof ReadableStream=="function",we=ae&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),bs=Bt&&(()=>{let e=!1;const t=new Request(F.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),tt=64*1024,Se=Bt&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),ne={stream:Se&&(e=>e.body)};ae&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ne[t]&&(ne[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const ws=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await we(e)).byteLength},Ss=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??ws(t)},Es=ae&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:u,headers:l,withCredentials:h="same-origin",fetchOptions:w}=Dt(e);u=u?(u+"").toLowerCase():"text";let[g,p]=s||o||i?ys([s,o],i):[],m,E;const b=()=>{!m&&setTimeout(()=>{g&&g.unsubscribe()}),m=!0};let R;try{if(d&&bs&&n!=="get"&&n!=="head"&&(R=await Ss(l,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),v;a.isFormData(r)&&(v=O.headers.get("content-type"))&&l.setContentType(v),O.body&&(r=Ze(O.body,tt,et(R,te(d)),null,we))}a.isString(h)||(h=h?"cors":"omit"),E=new Request(t,{...w,signal:g,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let S=await fetch(E);const j=Se&&(u==="stream"||u==="response");if(Se&&(c||j)){const O={};["status","statusText","headers"].forEach(D=>{O[D]=S[D]});const v=a.toFiniteNumber(S.headers.get("content-length"));S=new Response(Ze(S.body,tt,c&&et(v,te(c,!0)),j&&b,we),O)}u=u||"text";let k=await ne[a.findKey(ne,u)||"text"](S,e);return!j&&b(),p&&p(),await new Promise((O,v)=>{Lt(O,v,{data:k,headers:C.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:E})})}catch(S){throw b(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,E),{cause:S.cause||S}):y.from(S,S&&S.code,e,E)}}),Ee={http:Ir,xhr:ms,fetch:Es};a.forEach(Ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nt=e=>`- ${e}`,Rs=e=>a.isFunction(e)||e===null||e===!1,Ut={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Rs(n)&&(r=Ee[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(nt).join(`
`):" "+nt(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Ee};function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function rt(e){return me(e),e.headers=C.from(e.headers),e.data=he.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ut.getAdapter(e.adapter||W.adapter)(e).then(function(r){return me(e),r.data=he.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ft(r)||(me(e),r&&r.response&&(r.response.data=he.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const It="1.7.2",Pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const st={};Pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+It+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!st[i]&&(st[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Ts(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const Re={assertOptions:Ts,validators:Pe},B=Re.validators;class U{constructor(t){this.defaults=t,this.interceptors={request:new Xe,response:new Xe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=I(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Re.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Re.assertOptions(s,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,h=0,w;if(!d){const p=[rt.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),w=p.length,l=Promise.resolve(n);h<w;)l=l.then(p[h++],p[h++]);return l}w=c.length;let g=n;for(h=0;h<w;){const p=c[h++],m=c[h++];try{g=p(g)}catch(E){m.call(this,E);break}}try{l=rt.call(this,g)}catch(p){return Promise.reject(p)}for(h=0,w=u.length;h<w;)l=l.then(u[h++],u[h++]);return l}getUri(t){t=I(this.defaults,t);const n=_t(t.baseURL,t.url);return vt(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){U.prototype[t]=function(n,r){return this.request(I(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(I(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}U.prototype[t]=n(),U.prototype[t+"Form"]=n(!0)});class ve{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new H(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ve(function(s){t=s}),cancel:t}}}function As(e){return function(n){return e.apply(null,n)}}function Os(e){return a.isObject(e)&&e.isAxiosError===!0}const Te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Te).forEach(([e,t])=>{Te[t]=e});function $t(e){const t=new U(e),n=xt(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $t(I(e,s))},n}const A=$t(W);A.Axios=U;A.CanceledError=H;A.CancelToken=ve;A.isCancel=Ft;A.VERSION=It;A.toFormData=ie;A.AxiosError=y;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=As;A.isAxiosError=Os;A.mergeConfig=I;A.AxiosHeaders=C;A.formToJSON=e=>kt(a.isHTMLForm(e)?new FormData(e):e);A.getAdapter=Ut.getAdapter;A.HttpStatusCode=Te;A.default=A;const zt={type:"spring",stiffness:120,damping:20,mass:.8},Mt={type:"spring",stiffness:260,damping:24,mass:.7},js={type:"spring",stiffness:300,damping:30,mass:.5},Ht=[.25,1,.5,1],K=[.16,1,.3,1],Cs=Ae`
  0%   { background-position: -100% center; }
  100% { background-position: 200% center; }
`,Ps=Ae`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;Ae`
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
`;const vs=x.section`
  padding: 100px 24px 120px;
  max-width: 1350px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 70px 20px 90px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 16px 80px;
  }
`,Ns=x.div`
  margin-bottom: 64px;
`,ks=x.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`,Fs=x(pt)`
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: sticky;
  top: 100px;
  
  @media (max-width: 968px) {
    position: static;
    padding: 28px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
    gap: 24px;
  }
`,Ls=x.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
`,_s=x.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,ot=x.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  
  &:hover {
    color: ${({theme:e})=>e.accent};
    transform: translateX(4px);
  }
  
  svg {
    color: ${({theme:e})=>e.accent};
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`,it=x.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({theme:e})=>e.border} 20%,
    ${({theme:e})=>e.border} 80%,
    transparent
  );
`,Ds=x.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Bs=x.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgTertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:e})=>e.accent};
    opacity: 0;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    border-color: ${({theme:e})=>e.accent};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px ${({theme:e})=>`${e.accent}30`};
    
    &::before { opacity: 0.1; }
    
    svg {
      color: ${({theme:e})=>e.accent};
      transform: scale(1.15);
    }
  }
`,Us=x.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  background: ${({theme:e})=>e.accentSubtle};
  color: ${({theme:e})=>e.accent};
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${({theme:e})=>`${e.accent}20`},
      transparent
    );
    animation: ${Cs} 3s ease-in-out infinite;
  }
`,Is=x(T.div)`
  position: relative;
`,$s=x(pt)`
  position: relative;
  overflow: hidden;
  will-change: transform;
`,zs=x(T.div)`
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    ${({theme:e})=>`${e.accent}15`},
    transparent 60%,
    ${({theme:e})=>`${e.accent}15`}
  );
  animation: ${Ps} 8s linear infinite;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
`,Ms=x(T.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({theme:e})=>`${e.accent}15`};
  pointer-events: none;
  z-index: 0;
`,Hs=x(T.div)`
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
  }
  
  @media (max-width: 480px) {
  }
`,qs=x(T.div)`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 50px 32px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 24px;
    gap: 16px;
  }
`,Vs=x.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,X=x(T.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ye=x.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textSecondary};
  letter-spacing: 0.01em;
`,qt=yn`
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-family: inherit;
  outline: none;
  width: 100%;
  background: ${({theme:e})=>e.bgTertiary};
  border: 2px solid ${({theme:e})=>e.border};
  color: ${({theme:e})=>e.textPrimary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: ${({theme:e})=>e.textTertiary};
  }
  
  &:focus {
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.bgSecondary};
    box-shadow: 0 0 0 4px ${({theme:e})=>`${e.accent}15`};
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,at=x.input`${qt}`,Js=x.textarea`
  ${qt}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`,Ws=x(T.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 32px;
  border-radius: 100px;
  border: none;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: inherit;
  color: white;
  cursor: pointer;
  overflow: hidden;
  background: ${({theme:e})=>e.accent};
  box-shadow: 0 4px 16px ${({theme:e})=>`${e.accent}40`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.accentHover};
    box-shadow: 0 6px 24px ${({theme:e})=>`${e.accent}50`};
    transform: translateY(-2px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`,Gs=x(T.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
`,Ks=x(T.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  pointer-events: none;
`,ct=x(T.span)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
`,Xs=x(T.div)`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: ${({theme:e})=>e.accentSubtle};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({theme:e})=>e.accent}, ${({theme:e})=>e.accentHover});
    opacity: 0.3;
    filter: blur(12px);
  }
`,Ys=x(T.div)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,Qs=x(T.h3)`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.textPrimary},
    ${({theme:e})=>e.accent}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Zs=x(T.p)`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.textSecondary};
  max-width: 320px;
  margin: 0;
`,eo=x(T.div)`
  width: 48px;
  height: 2px;
  border-radius: 2px;
  background: ${({theme:e})=>e.accent};
  opacity: 0.3;
`,to=x(T.button)`
  background: transparent;
  border: 2px solid ${({theme:e})=>e.border};
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 8px;
  
  &:hover {
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.accentSubtle};
    transform: translateY(-2px);
  }
`,no={hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:.05}},exit:{transition:{staggerChildren:.04,staggerDirection:-1}}},Y={hidden:{opacity:0,y:20,filter:"blur(4px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:zt},exit:{opacity:0,y:-10,filter:"blur(4px)",transition:{duration:.2,ease:Ht}}},ro={hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:.15}}},Q={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:Mt}},so={hidden:{scale:0,rotate:-180},visible:{scale:1,rotate:0,transition:{...Mt,delay:.3}}},oo={hidden:{scaleX:0},visible:{scaleX:1,transition:js}},io=[{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",icon:f.jsx(jn,{}),label:"LinkedIn"},{href:"https://github.com/sameermujahid",icon:f.jsx(Cn,{}),label:"GitHub"},{href:"https://www.instagram.com/sameer.mujahid/",icon:f.jsx(Pn,{}),label:"Instagram"},{href:"https://x.com/sameer__mujahid",icon:f.jsx(vn,{}),label:"Twitter"}],lo=()=>{const[e,t]=z.useState("idle"),[n,r]=z.useState(!1),s=mt(0),o=Bn(s,[0,1],["0%","100%"]),{ref:i,isInView:c}=Nn(),d=z.useRef(null),u=async g=>{g.preventDefault();const p=g.target,m=new FormData(p);m.append("access_key","9ee753a6-c053-4819-9996-56a1043ba7f4"),t("loading"),s.set(0),Ve(s,.85,{duration:2.2,ease:K});try{(await A.post("https://api.web3forms.com/submit",m)).data.success?(await Ve(s,1,{duration:.25,ease:Ht}),p.reset(),await new Promise(b=>setTimeout(b,150)),r(!0),t("success")):(s.set(0),t("idle"),alert("Something went wrong. Please try again."))}catch{s.set(0),t("idle"),alert("Something went wrong. Please try again.")}},l=()=>{t("idle"),r(!1),s.set(0)},h=e==="loading",w=e==="success";return f.jsxs(vs,{id:"connect",children:[f.jsx(Ns,{children:f.jsxs(T.div,{ref:i,variants:kn,initial:"hidden",animate:c?"visible":"hidden",children:[f.jsx(gn,{variants:de,children:"Connect"}),f.jsxs(xn,{variants:de,children:["Let's connect and explore",f.jsx("br",{}),"opportunities."]}),f.jsx(bn,{variants:de,children:"Whether you're looking to collaborate, discuss opportunities, or just connect, I'd love to hear from you."})]})}),f.jsxs(ks,{children:[f.jsx(T.div,{initial:{opacity:0,x:-30},animate:c?{opacity:1,x:0}:{},transition:{duration:.7,delay:.15,ease:K},children:f.jsxs(Fs,{children:[f.jsxs("div",{children:[f.jsxs(Us,{children:[f.jsx(wn,{size:13}),"Open to opportunities"]}),f.jsxs(Ls,{children:[f.jsx(Sn,{size:24}),"Let's connect"]}),f.jsx(_s,{style:{marginTop:12},children:"I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out for projects, job opportunities, or just to say hello!"})]}),f.jsx(it,{}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[f.jsxs(ot,{href:"mailto:sameermujahid7777@gmail.com",children:[f.jsx(En,{size:16}),"sameermujahid7777@gmail.com"]}),f.jsxs(ot,{href:"tel:+918317506633",children:[f.jsx(Rn,{size:16}),"+91 8317506633"]})]}),f.jsx(it,{}),f.jsx(Ds,{children:io.map(({href:g,icon:p,label:m})=>f.jsx(Bs,{href:g,target:"_blank",rel:"noopener noreferrer","aria-label":m,children:p},m))})]})}),f.jsx(T.div,{initial:{opacity:0,x:30},animate:c?{opacity:1,x:0}:{},transition:{duration:.7,delay:.25,ease:K},children:f.jsx(Is,{layout:!0,transition:zt,children:f.jsxs($s,{children:[f.jsx(G,{children:w&&f.jsx(zs,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6}})}),f.jsx(G,{children:n&&f.jsx(Ms,{initial:{scale:0,opacity:.6},animate:{scale:2.5,opacity:0},transition:{duration:1,ease:K},onAnimationComplete:()=>r(!1)})}),f.jsxs(G,{mode:"wait",children:[!w&&f.jsx(Hs,{variants:no,initial:"hidden",animate:"visible",exit:"exit",children:f.jsxs(Vs,{ref:d,onSubmit:u,children:[f.jsxs(X,{variants:Y,children:[f.jsx(ye,{htmlFor:"name",children:"Your Name"}),f.jsx(at,{id:"name",type:"text",name:"name",placeholder:"John Doe",required:!0,disabled:h})]}),f.jsxs(X,{variants:Y,children:[f.jsx(ye,{htmlFor:"email",children:"Email Address"}),f.jsx(at,{id:"email",type:"email",name:"email",placeholder:"john@example.com",required:!0,disabled:h})]}),f.jsxs(X,{variants:Y,children:[f.jsx(ye,{htmlFor:"message",children:"Message"}),f.jsx(Js,{id:"message",name:"message",placeholder:"Tell me about your project, opportunity, or idea...",required:!0,disabled:h})]}),f.jsx(X,{variants:Y,children:f.jsxs(Ws,{type:"submit",disabled:h,whileTap:h?{}:{scale:.98},children:[!h&&f.jsx(Gs,{animate:{x:["0%","200%"]},transition:{duration:2,repeat:1/0,repeatDelay:1,ease:"easeInOut"}}),h&&f.jsx(Ks,{style:{width:o},initial:{opacity:0},animate:{opacity:1}}),f.jsx(G,{mode:"wait",children:h?f.jsxs(ct,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:[f.jsx(Tn,{}),"Sending message..."]},"loading"):f.jsxs(ct,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:[f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),f.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),"Send Message"]},"idle")})]})})]})},"form"),w&&f.jsxs(qs,{variants:ro,initial:"hidden",animate:"visible",children:[f.jsx(T.div,{variants:Q,children:f.jsx(Xs,{children:f.jsx(Ys,{variants:so,children:f.jsx(An,{})})})}),f.jsx(Qs,{variants:Q,children:"Message sent successfully!"}),f.jsx(eo,{variants:oo}),f.jsx(Zs,{variants:Q,children:"Thank you for reaching out! I'll get back to you as soon as possible."}),f.jsx(T.div,{variants:Q,children:f.jsxs(to,{onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:["Send another message",f.jsx(On,{size:14})]})})]},"success")]})]})})})]})]})};export{lo as default};
