(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function fv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pv(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var gm={exports:{}},ta={},ym={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),hv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),xv=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Cv=Symbol.for("react.lazy"),of=Symbol.iterator;function Pv(e){return e===null||typeof e!="object"?null:(e=of&&e[of]||e["@@iterator"],typeof e=="function"?e:null)}var vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xm=Object.assign,wm={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=wm,this.updater=n||vm}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sm(){}Sm.prototype=Gr.prototype;function pc(e,t,n){this.props=e,this.context=t,this.refs=wm,this.updater=n||vm}var hc=pc.prototype=new Sm;hc.constructor=pc;xm(hc,Gr.prototype);hc.isPureReactComponent=!0;var sf=Array.isArray,km=Object.prototype.hasOwnProperty,mc={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function Pm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)km.call(t,r)&&!Cm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:to,type:e,key:o,ref:s,props:i,_owner:mc.current}}function Tv(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gc(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function Ev(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var af=/\/+/g;function Va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ev(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case to:case hv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Va(s,0):r,sf(i)?(n="",e!=null&&(n=e.replace(af,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(gc(i)&&(i=Tv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(af,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",sf(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Va(o,a);s+=Wo(o,t,n,l,i)}else if(l=Pv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Va(o,a++),s+=Wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mo(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ko={transition:null},Av={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:mc};function Tm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:mo,forEach:function(e,t,n){mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mo(e,function(){t++}),t},toArray:function(e){return mo(e,function(t){return t})||[]},only:function(e){if(!gc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Gr;B.Fragment=mv;B.Profiler=yv;B.PureComponent=pc;B.StrictMode=gv;B.Suspense=Sv;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;B.act=Tm;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=mc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)km.call(t,l)&&!Cm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:to,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:xv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vv,_context:e},e.Consumer=e};B.createElement=Pm;B.createFactory=function(e){var t=Pm.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:wv,render:e}};B.isValidElement=gc;B.lazy=function(e){return{$$typeof:Cv,_payload:{_status:-1,_result:e},_init:bv}};B.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};B.unstable_act=Tm;B.useCallback=function(e,t){return Ve.current.useCallback(e,t)};B.useContext=function(e){return Ve.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ve.current.useEffect(e,t)};B.useId=function(){return Ve.current.useId()};B.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ve.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};B.useRef=function(e){return Ve.current.useRef(e)};B.useState=function(e){return Ve.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ve.current.useTransition()};B.version="18.3.1";ym.exports=B;var A=ym.exports;const Ce=fv(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=A,Rv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Ov=Object.prototype.hasOwnProperty,Mv=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_v={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ov.call(t,r)&&!_v.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Rv,type:e,key:o,ref:s,props:i,_owner:Mv.current}}ta.Fragment=Lv;ta.jsx=Em;ta.jsxs=Em;gm.exports=ta;var g=gm.exports,Bl={},bm={exports:{}},Ze={},Am={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var z=L.length;L.push(M);e:for(;0<z;){var K=z-1>>>1,G=L[K];if(0<i(G,M))L[K]=M,L[z]=G,z=K;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],z=L.pop();if(z!==M){L[0]=z;e:for(var K=0,G=L.length,Mn=G>>>1;K<Mn;){var ft=2*(K+1)-1,Jt=L[ft],Ke=ft+1,_t=L[Ke];if(0>i(Jt,z))Ke<G&&0>i(_t,Jt)?(L[K]=_t,L[Ke]=z,K=Ke):(L[K]=Jt,L[ft]=z,K=ft);else if(Ke<G&&0>i(_t,z))L[K]=_t,L[Ke]=z,K=Ke;else break e}}return M}function i(L,M){var z=L.sortIndex-M.sortIndex;return z!==0?z:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(L){if(x=!1,m(L),!y)if(n(l)!==null)y=!0,qt(P);else{var M=n(u);M!==null&&te(w,M.startTime-L)}}function P(L,M){y=!1,x&&(x=!1,h(b),b=-1),v=!0;var z=f;try{for(m(M),d=n(l);d!==null&&(!(d.expirationTime>M)||L&&!D());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var G=K(d.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(l)&&r(l),m(M)}else r(l);d=n(l)}if(d!==null)var Mn=!0;else{var ft=n(u);ft!==null&&te(w,ft.startTime-M),Mn=!1}return Mn}finally{d=null,f=z,v=!1}}var T=!1,E=null,b=-1,V=5,R=-1;function D(){return!(e.unstable_now()-R<V)}function J(){if(E!==null){var L=e.unstable_now();R=L;var M=!0;try{M=E(!0,L)}finally{M?pe():(T=!1,E=null)}}else T=!1}var pe;if(typeof p=="function")pe=function(){p(J)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Mt=ue.port2;ue.port1.onmessage=J,pe=function(){Mt.postMessage(null)}}else pe=function(){k(J,0)};function qt(L){E=L,T||(T=!0,pe())}function te(L,M){b=k(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,qt(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var z=f;f=M;try{return L()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=f;f=L;try{return M()}finally{f=z}},e.unstable_scheduleCallback=function(L,M,z){var K=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?K+z:K):z=K,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,L={id:c++,callback:M,priorityLevel:L,startTime:z,expirationTime:G,sortIndex:-1},z>K?(L.sortIndex=z,t(u,L),n(l)===null&&L===n(u)&&(x?(h(b),b=-1):x=!0,te(w,z-K))):(L.sortIndex=G,t(l,L),y||v||(y=!0,qt(P))),L},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(L){var M=f;return function(){var z=f;f=M;try{return L.apply(this,arguments)}finally{f=z}}}})(jm);Am.exports=jm;var Dv=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=A,qe=Dv;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm=new Set,Li={};function nr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Li[e]=t,e=0;e<t.length;e++)Rm.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lf={},uf={};function Vv(e){return Fl.call(uf,e)?!0:Fl.call(lf,e)?!1:Nv.test(e)?uf[e]=!0:(lf[e]=!0,!1)}function Iv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bv(e,t,n,r){if(t===null||typeof t>"u"||Iv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var yc=/[\-:]([a-z])/g;function vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yc,vc);Te[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yc,vc);Te[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yc,vc);Te[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function xc(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bv(t,n,i,r)&&(n=null),r||i===null?Vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),cf=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=cf&&e[cf]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ia;function di(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var Ba=!1;function Fa(e,t){if(!e||Ba)return"";Ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ba=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Fv(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=Fa(e.type,!1),e;case 11:return e=Fa(e.type.render,!1),e;case 1:return e=Fa(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case $l:return"Profiler";case wc:return"StrictMode";case Ul:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Om:return(e.displayName||"Context")+".Consumer";case Lm:return(e._context.displayName||"Context")+".Provider";case Sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kc:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function $v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uv(e){var t=_m(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=Uv(e))}function Dm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_m(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zm(e,t){t=t.checked,t!=null&&xc(e,"checked",t,!1)}function Gl(e,t){zm(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(fi(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Nm(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,Im=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){Hv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function Bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function Fm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wv=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(Wv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eu=null,Er=null,br=null;function mf(e){if(e=io(e)){if(typeof eu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=sa(t),eu(e.stateNode,e.type,t))}}function $m(e){Er?br?br.push(e):br=[e]:Er=e}function Um(){if(Er){var e=Er,t=br;if(br=Er=null,mf(e),t)for(e=0;e<t.length;e++)mf(t[e])}}function Hm(e,t){return e(t)}function Wm(){}var $a=!1;function Km(e,t,n){if($a)return e(t,n);$a=!0;try{return Hm(e,t,n)}finally{$a=!1,(Er!==null||br!==null)&&(Wm(),Um())}}function Mi(e,t){var n=e.stateNode;if(n===null)return null;var r=sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var tu=!1;if(Kt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){tu=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{tu=!1}function Kv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var xi=!1,hs=null,ms=!1,nu=null,Gv={onError:function(e){xi=!0,hs=e}};function Yv(e,t,n,r,i,o,s,a,l){xi=!1,hs=null,Kv.apply(Gv,arguments)}function Xv(e,t,n,r,i,o,s,a,l){if(Yv.apply(this,arguments),xi){if(xi){var u=hs;xi=!1,hs=null}else throw Error(j(198));ms||(ms=!0,nu=u)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gf(e){if(rr(e)!==e)throw Error(j(188))}function Qv(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gf(i),e;if(o===r)return gf(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ym(e){return e=Qv(e),e!==null?Xm(e):null}function Xm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xm(e);if(t!==null)return t;e=e.sibling}return null}var Qm=qe.unstable_scheduleCallback,yf=qe.unstable_cancelCallback,qv=qe.unstable_shouldYield,Jv=qe.unstable_requestPaint,le=qe.unstable_now,Zv=qe.unstable_getCurrentPriorityLevel,Pc=qe.unstable_ImmediatePriority,qm=qe.unstable_UserBlockingPriority,gs=qe.unstable_NormalPriority,ex=qe.unstable_LowPriority,Jm=qe.unstable_IdlePriority,na=null,At=null;function tx(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:ix,nx=Math.log,rx=Math.LN2;function ix(e){return e>>>=0,e===0?32:31-(nx(e)/rx|0)|0}var xo=64,wo=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=pi(a):(o&=s,o!==0&&(r=pi(o)))}else s=n&~i,s!==0?r=pi(s):o!==0&&(r=pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function ox(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ox(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zm(){var e=xo;return xo<<=1,!(xo&4194240)&&(xo=64),e}function Ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function ax(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function e0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var t0,Ec,n0,r0,i0,iu=!1,So=[],hn=null,mn=null,gn=null,_i=new Map,Di=new Map,un=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&Ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ux(e,t,n,r,i){switch(t){case"focusin":return hn=ri(hn,e,t,n,r,i),!0;case"dragenter":return mn=ri(mn,e,t,n,r,i),!0;case"mouseover":return gn=ri(gn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,ri(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,ri(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function o0(e){var t=Bn(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=Gm(n),t!==null){e.blockedOn=t,i0(e.priority,function(){n0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ou(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=io(n),t!==null&&Ec(t),e.blockedOn=n,!1;t.shift()}return!0}function xf(e,t,n){Go(e)&&n.delete(t)}function cx(){iu=!1,hn!==null&&Go(hn)&&(hn=null),mn!==null&&Go(mn)&&(mn=null),gn!==null&&Go(gn)&&(gn=null),_i.forEach(xf),Di.forEach(xf)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,iu||(iu=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,cx)))}function zi(e){function t(i){return ii(i,e)}if(0<So.length){ii(So[0],e);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&ii(hn,e),mn!==null&&ii(mn,e),gn!==null&&ii(gn,e),_i.forEach(t),Di.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&un.shift()}var Ar=Qt.ReactCurrentBatchConfig,vs=!0;function dx(e,t,n,r){var i=H,o=Ar.transition;Ar.transition=null;try{H=1,bc(e,t,n,r)}finally{H=i,Ar.transition=o}}function fx(e,t,n,r){var i=H,o=Ar.transition;Ar.transition=null;try{H=4,bc(e,t,n,r)}finally{H=i,Ar.transition=o}}function bc(e,t,n,r){if(vs){var i=ou(e,t,n,r);if(i===null)Za(e,t,r,xs,n),vf(e,r);else if(ux(i,e,t,n,r))r.stopPropagation();else if(vf(e,r),t&4&&-1<lx.indexOf(e)){for(;i!==null;){var o=io(i);if(o!==null&&t0(o),o=ou(e,t,n,r),o===null&&Za(e,t,r,xs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Za(e,t,r,null,n)}}var xs=null;function ou(e,t,n,r){if(xs=null,e=Cc(r),e=Bn(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xs=e,null}function s0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case Pc:return 1;case qm:return 4;case gs:case ex:return 16;case Jm:return 536870912;default:return 16}default:return 16}}var dn=null,Ac=null,Yo=null;function a0(){if(Yo)return Yo;var e,t=Ac,n=t.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Yo=i.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function wf(){return!1}function et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ko:wf,this.isPropagationStopped=wf,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=et(Yr),ro=oe({},Yr,{view:0,detail:0}),px=et(ro),Ha,Wa,oi,ra=oe({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oi&&(oi&&e.type==="mousemove"?(Ha=e.screenX-oi.screenX,Wa=e.screenY-oi.screenY):Wa=Ha=0,oi=e),Ha)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),Sf=et(ra),hx=oe({},ra,{dataTransfer:0}),mx=et(hx),gx=oe({},ro,{relatedTarget:0}),Ka=et(gx),yx=oe({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=et(yx),xx=oe({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wx=et(xx),Sx=oe({},Yr,{data:0}),kf=et(Sx),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Px[e])?!!t[e]:!1}function Rc(){return Tx}var Ex=oe({},ro,{key:function(e){if(e.key){var t=kx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bx=et(Ex),Ax=oe({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=et(Ax),jx=oe({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Rx=et(jx),Lx=oe({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=et(Lx),Mx=oe({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=et(Mx),Dx=[9,13,27,32],Lc=Kt&&"CompositionEvent"in window,wi=null;Kt&&"documentMode"in document&&(wi=document.documentMode);var zx=Kt&&"TextEvent"in window&&!wi,l0=Kt&&(!Lc||wi&&8<wi&&11>=wi),Pf=" ",Tf=!1;function u0(e,t){switch(e){case"keyup":return Dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Nx(e,t){switch(e){case"compositionend":return c0(t);case"keypress":return t.which!==32?null:(Tf=!0,Pf);case"textInput":return e=t.data,e===Pf&&Tf?null:e;default:return null}}function Vx(e,t){if(ur)return e==="compositionend"||!Lc&&u0(e,t)?(e=a0(),Yo=Ac=dn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return l0&&t.locale!=="ko"?null:t.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ix[e.type]:t==="textarea"}function d0(e,t,n,r){$m(r),t=ws(t,"onChange"),0<t.length&&(n=new jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,Ni=null;function Bx(e){k0(e,0)}function ia(e){var t=fr(e);if(Dm(t))return e}function Fx(e,t){if(e==="change")return t}var f0=!1;if(Kt){var Ga;if(Kt){var Ya="oninput"in document;if(!Ya){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Ya=typeof bf.oninput=="function"}Ga=Ya}else Ga=!1;f0=Ga&&(!document.documentMode||9<document.documentMode)}function Af(){Si&&(Si.detachEvent("onpropertychange",p0),Ni=Si=null)}function p0(e){if(e.propertyName==="value"&&ia(Ni)){var t=[];d0(t,Ni,e,Cc(e)),Km(Bx,t)}}function $x(e,t,n){e==="focusin"?(Af(),Si=t,Ni=n,Si.attachEvent("onpropertychange",p0)):e==="focusout"&&Af()}function Ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(Ni)}function Hx(e,t){if(e==="click")return ia(t)}function Wx(e,t){if(e==="input"||e==="change")return ia(t)}function Kx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Kx;function Vi(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var n=jf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function h0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?h0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function m0(){for(var e=window,t=ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ps(e.document)}return t}function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gx(e){var t=m0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(r!==null&&Oc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rf(n,o);var s=Rf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yx=Kt&&"documentMode"in document&&11>=document.documentMode,cr=null,su=null,ki=null,au=!1;function Lf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||cr==null||cr!==ps(r)||(r=cr,"selectionStart"in r&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Vi(ki,r)||(ki=r,r=ws(su,"onSelect"),0<r.length&&(t=new jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Xa={},g0={};Kt&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function oa(e){if(Xa[e])return Xa[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in g0)return Xa[e]=t[n];return e}var y0=oa("animationend"),v0=oa("animationiteration"),x0=oa("animationstart"),w0=oa("transitionend"),S0=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){S0.set(e,t),nr(t,[e])}for(var Qa=0;Qa<Of.length;Qa++){var qa=Of[Qa],Xx=qa.toLowerCase(),Qx=qa[0].toUpperCase()+qa.slice(1);An(Xx,"on"+Qx)}An(y0,"onAnimationEnd");An(v0,"onAnimationIteration");An(x0,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(w0,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Mf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xv(r,t,void 0,e),e.currentTarget=null}function k0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Mf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Mf(i,a,u),o=l}}}if(ms)throw e=nu,ms=!1,nu=null,e}function X(e,t){var n=t[fu];n===void 0&&(n=t[fu]=new Set);var r=e+"__bubble";n.has(r)||(C0(t,e,2,!1),n.add(r))}function Ja(e,t,n){var r=0;t&&(r|=4),C0(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[Po]){e[Po]=!0,Rm.forEach(function(n){n!=="selectionchange"&&(qx.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,Ja("selectionchange",!1,t))}}function C0(e,t,n,r){switch(s0(t)){case 1:var i=dx;break;case 4:i=fx;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Za(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Bn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Km(function(){var u=o,c=Cc(n),d=[];e:{var f=S0.get(e);if(f!==void 0){var v=jc,y=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":v=bx;break;case"focusin":y="focus",v=Ka;break;case"focusout":y="blur",v=Ka;break;case"beforeblur":case"afterblur":v=Ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rx;break;case y0:case v0:case x0:v=vx;break;case w0:v=Ox;break;case"scroll":v=px;break;case"wheel":v=_x;break;case"copy":case"cut":case"paste":v=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cf}var x=(t&4)!==0,k=!x&&e==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Mi(p,h),w!=null&&x.push(Bi(p,w,m)))),k)break;p=p.return}0<x.length&&(f=new v(f,y,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Zl&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[Gt]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Bn(y):null,y!==null&&(k=rr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Sf,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Cf,w="onPointerLeave",h="onPointerEnter",p="pointer"),k=v==null?f:fr(v),m=y==null?f:fr(y),f=new x(w,p+"leave",v,n,c),f.target=k,f.relatedTarget=m,w=null,Bn(c)===u&&(x=new x(h,p+"enter",y,n,c),x.target=m,x.relatedTarget=k,w=x),k=w,v&&y)t:{for(x=v,h=y,p=0,m=x;m;m=or(m))p++;for(m=0,w=h;w;w=or(w))m++;for(;0<p-m;)x=or(x),p--;for(;0<m-p;)h=or(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=or(x),h=or(h)}x=null}else x=null;v!==null&&_f(d,f,v,x,!1),y!==null&&k!==null&&_f(d,k,y,x,!0)}}e:{if(f=u?fr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var P=Fx;else if(Ef(f))if(f0)P=Wx;else{P=Ux;var T=$x}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Hx);if(P&&(P=P(e,u))){d0(d,P,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Yl(f,"number",f.value)}switch(T=u?fr(u):window,e){case"focusin":(Ef(T)||T.contentEditable==="true")&&(cr=T,su=u,ki=null);break;case"focusout":ki=su=cr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Lf(d,n,c);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Lf(d,n,c)}var E;if(Lc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ur?u0(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(l0&&n.locale!=="ko"&&(ur||b!=="onCompositionStart"?b==="onCompositionEnd"&&ur&&(E=a0()):(dn=c,Ac="value"in dn?dn.value:dn.textContent,ur=!0)),T=ws(u,b),0<T.length&&(b=new kf(b,e,null,n,c),d.push({event:b,listeners:T}),E?b.data=E:(E=c0(n),E!==null&&(b.data=E)))),(E=zx?Nx(e,n):Vx(e,n))&&(u=ws(u,"onBeforeInput"),0<u.length&&(c=new kf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}k0(d,t)})}function Bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ws(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mi(e,n),o!=null&&r.unshift(Bi(e,o,i)),o=Mi(e,t),o!=null&&r.push(Bi(e,o,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _f(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mi(n,o),l!=null&&s.unshift(Bi(n,l,a))):i||(l=Mi(n,o),l!=null&&s.push(Bi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace(Zx,"")}function To(e,t,n){if(t=Df(t),Df(e)!==t&&n)throw Error(j(425))}function Ss(){}var lu=null,uu=null;function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,ew=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,tw=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(e){return zf.resolve(null).then(e).catch(nw)}:du;function nw(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Xr,Fi="__reactProps$"+Xr,Gt="__reactContainer$"+Xr,fu="__reactEvents$"+Xr,rw="__reactListeners$"+Xr,iw="__reactHandles$"+Xr;function Bn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nf(e);e!==null;){if(n=e[bt])return n;e=Nf(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[bt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function sa(e){return e[Fi]||null}var pu=[],pr=-1;function jn(e){return{current:e}}function q(e){0>pr||(e.current=pu[pr],pu[pr]=null,pr--)}function Y(e,t){pr++,pu[pr]=e.current,e.current=t}var Pn={},De=jn(Pn),$e=jn(!1),Qn=Pn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function ks(){q($e),q(De)}function Vf(e,t,n){if(De.current!==Pn)throw Error(j(168));Y(De,t),Y($e,n)}function P0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,$v(e)||"Unknown",i));return oe({},n,r)}function Cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Qn=De.current,Y(De,e),Y($e,$e.current),!0}function If(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=P0(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,q($e),q(De),Y(De,e)):q($e),Y($e,n)}var Nt=null,aa=!1,tl=!1;function T0(e){Nt===null?Nt=[e]:Nt.push(e)}function ow(e){aa=!0,T0(e)}function Rn(){if(!tl&&Nt!==null){tl=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,aa=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),Qm(Pc,Rn),i}finally{H=t,tl=!1}}return null}var hr=[],mr=0,Ps=null,Ts=0,rt=[],it=0,qn=null,Vt=1,It="";function zn(e,t){hr[mr++]=Ts,hr[mr++]=Ps,Ps=e,Ts=t}function E0(e,t,n){rt[it++]=Vt,rt[it++]=It,rt[it++]=qn,qn=e;var r=Vt;e=It;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var o=32-yt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Vt=1<<32-yt(t)+i|n<<i|r,It=o+e}else Vt=1<<o|n<<i|r,It=e}function Mc(e){e.return!==null&&(zn(e,1),E0(e,1,0))}function _c(e){for(;e===Ps;)Ps=hr[--mr],hr[mr]=null,Ts=hr[--mr],hr[mr]=null;for(;e===qn;)qn=rt[--it],rt[it]=null,It=rt[--it],rt[it]=null,Vt=rt[--it],rt[it]=null}var Qe=null,Xe=null,ee=!1,gt=null;function b0(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Vt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function hu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mu(e){if(ee){var t=Xe;if(t){var n=t;if(!Bf(e,t)){if(hu(e))throw Error(j(418));t=yn(n.nextSibling);var r=Qe;t&&Bf(e,t)?b0(r,n):(e.flags=e.flags&-4097|2,ee=!1,Qe=e)}}else{if(hu(e))throw Error(j(418));e.flags=e.flags&-4097|2,ee=!1,Qe=e}}}function Ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Eo(e){if(e!==Qe)return!1;if(!ee)return Ff(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cu(e.type,e.memoizedProps)),t&&(t=Xe)){if(hu(e))throw A0(),Error(j(418));for(;t;)b0(e,t),t=yn(t.nextSibling)}if(Ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?yn(e.stateNode.nextSibling):null;return!0}function A0(){for(var e=Xe;e;)e=yn(e.nextSibling)}function Mr(){Xe=Qe=null,ee=!1}function Dc(e){gt===null?gt=[e]:gt.push(e)}var sw=Qt.ReactCurrentBatchConfig;function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $f(e){var t=e._init;return t(e._payload)}function j0(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Sn(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,w){return p===null||p.tag!==6?(p=ll(m,h.mode,w),p.return=h,p):(p=i(p,m),p.return=h,p)}function l(h,p,m,w){var P=m.type;return P===lr?c(h,p,m.props.children,w,m.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&$f(P)===p.type)?(w=i(p,m.props),w.ref=si(h,p,m),w.return=h,w):(w=ns(m.type,m.key,m.props,null,h.mode,w),w.ref=si(h,p,m),w.return=h,w)}function u(h,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=ul(m,h.mode,w),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function c(h,p,m,w,P){return p===null||p.tag!==7?(p=Kn(m,h.mode,w,P),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ll(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case go:return m=ns(p.type,p.key,p.props,null,h.mode,m),m.ref=si(h,null,p),m.return=h,m;case ar:return p=ul(p,h.mode,m),p.return=h,p;case an:var w=p._init;return d(h,w(p._payload),m)}if(fi(p)||ti(p))return p=Kn(p,h.mode,m,null),p.return=h,p;bo(h,p)}return null}function f(h,p,m,w){var P=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return P!==null?null:a(h,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case go:return m.key===P?l(h,p,m,w):null;case ar:return m.key===P?u(h,p,m,w):null;case an:return P=m._init,f(h,p,P(m._payload),w)}if(fi(m)||ti(m))return P!==null?null:c(h,p,m,w,null);bo(h,m)}return null}function v(h,p,m,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(p,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case go:return h=h.get(w.key===null?m:w.key)||null,l(p,h,w,P);case ar:return h=h.get(w.key===null?m:w.key)||null,u(p,h,w,P);case an:var T=w._init;return v(h,p,m,T(w._payload),P)}if(fi(w)||ti(w))return h=h.get(m)||null,c(p,h,w,P,null);bo(p,w)}return null}function y(h,p,m,w){for(var P=null,T=null,E=p,b=p=0,V=null;E!==null&&b<m.length;b++){E.index>b?(V=E,E=null):V=E.sibling;var R=f(h,E,m[b],w);if(R===null){E===null&&(E=V);break}e&&E&&R.alternate===null&&t(h,E),p=o(R,p,b),T===null?P=R:T.sibling=R,T=R,E=V}if(b===m.length)return n(h,E),ee&&zn(h,b),P;if(E===null){for(;b<m.length;b++)E=d(h,m[b],w),E!==null&&(p=o(E,p,b),T===null?P=E:T.sibling=E,T=E);return ee&&zn(h,b),P}for(E=r(h,E);b<m.length;b++)V=v(E,h,b,m[b],w),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?b:V.key),p=o(V,p,b),T===null?P=V:T.sibling=V,T=V);return e&&E.forEach(function(D){return t(h,D)}),ee&&zn(h,b),P}function x(h,p,m,w){var P=ti(m);if(typeof P!="function")throw Error(j(150));if(m=P.call(m),m==null)throw Error(j(151));for(var T=P=null,E=p,b=p=0,V=null,R=m.next();E!==null&&!R.done;b++,R=m.next()){E.index>b?(V=E,E=null):V=E.sibling;var D=f(h,E,R.value,w);if(D===null){E===null&&(E=V);break}e&&E&&D.alternate===null&&t(h,E),p=o(D,p,b),T===null?P=D:T.sibling=D,T=D,E=V}if(R.done)return n(h,E),ee&&zn(h,b),P;if(E===null){for(;!R.done;b++,R=m.next())R=d(h,R.value,w),R!==null&&(p=o(R,p,b),T===null?P=R:T.sibling=R,T=R);return ee&&zn(h,b),P}for(E=r(h,E);!R.done;b++,R=m.next())R=v(E,h,b,R.value,w),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?b:R.key),p=o(R,p,b),T===null?P=R:T.sibling=R,T=R);return e&&E.forEach(function(J){return t(h,J)}),ee&&zn(h,b),P}function k(h,p,m,w){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case go:e:{for(var P=m.key,T=p;T!==null;){if(T.key===P){if(P=m.type,P===lr){if(T.tag===7){n(h,T.sibling),p=i(T,m.props.children),p.return=h,h=p;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&$f(P)===T.type){n(h,T.sibling),p=i(T,m.props),p.ref=si(h,T,m),p.return=h,h=p;break e}n(h,T);break}else t(h,T);T=T.sibling}m.type===lr?(p=Kn(m.props.children,h.mode,w,m.key),p.return=h,h=p):(w=ns(m.type,m.key,m.props,null,h.mode,w),w.ref=si(h,p,m),w.return=h,h=w)}return s(h);case ar:e:{for(T=m.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ul(m,h.mode,w),p.return=h,h=p}return s(h);case an:return T=m._init,k(h,p,T(m._payload),w)}if(fi(m))return y(h,p,m,w);if(ti(m))return x(h,p,m,w);bo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=ll(m,h.mode,w),p.return=h,h=p),s(h)):n(h,p)}return k}var _r=j0(!0),R0=j0(!1),Es=jn(null),bs=null,gr=null,zc=null;function Nc(){zc=gr=bs=null}function Vc(e){var t=Es.current;q(Es),e._currentValue=t}function gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jr(e,t){bs=e,zc=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(zc!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(bs===null)throw Error(j(308));gr=e,bs.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Fn=null;function Ic(e){Fn===null?Fn=[e]:Fn.push(e)}function L0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ic(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ic(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tc(e,n)}}function Uf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function As(e,t,n,r){var i=e.updateQueue;ln=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,v=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(f=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=oe({},d,f);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Zn|=s,e.lanes=s,e.memoizedState=d}}function Hf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var oo={},jt=jn(oo),$i=jn(oo),Ui=jn(oo);function $n(e){if(e===oo)throw Error(j(174));return e}function Fc(e,t){switch(Y(Ui,t),Y($i,e),Y(jt,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}q(jt),Y(jt,t)}function Dr(){q(jt),q($i),q(Ui)}function M0(e){$n(Ui.current);var t=$n(jt.current),n=Ql(t,e.type);t!==n&&(Y($i,e),Y(jt,n))}function $c(e){$i.current===e&&(q(jt),q($i))}var ne=jn(0);function js(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function Uc(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var qo=Qt.ReactCurrentDispatcher,rl=Qt.ReactCurrentBatchConfig,Jn=0,ie=null,he=null,ye=null,Rs=!1,Ci=!1,Hi=0,aw=0;function be(){throw Error(j(321))}function Hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Wc(e,t,n,r,i,o){if(Jn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?dw:fw,e=n(r,i),Ci){o=0;do{if(Ci=!1,Hi=0,25<=o)throw Error(j(301));o+=1,ye=he=null,t.updateQueue=null,qo.current=pw,e=n(r,i)}while(Ci)}if(qo.current=Ls,t=he!==null&&he.next!==null,Jn=0,ye=he=ie=null,Rs=!1,t)throw Error(j(300));return e}function Kc(){var e=Hi!==0;return Hi=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=e:ye=ye.next=e,ye}function ct(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ye===null?ie.memoizedState:ye.next;if(t!==null)ye=t,he=e;else{if(e===null)throw Error(j(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?ie.memoizedState=ye=e:ye=ye.next=e}return ye}function Wi(e,t){return typeof t=="function"?t(e):t}function il(e){var t=ct(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Jn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ie.lanes|=c,Zn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,St(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=ct(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);St(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _0(){}function D0(e,t){var n=ie,r=ct(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,Gc(V0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ki(9,N0.bind(null,n,r,i,t),void 0,null),we===null)throw Error(j(349));Jn&30||z0(n,t,i)}return i}function z0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function N0(e,t,n,r){t.value=n,t.getSnapshot=r,I0(t)&&B0(e)}function V0(e,t,n){return n(function(){I0(t)&&B0(e)})}function I0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function B0(e){var t=Yt(e,1);t!==null&&vt(t,e,1,-1)}function Wf(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=cw.bind(null,ie,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function F0(){return ct().memoizedState}function Jo(e,t,n,r){var i=Pt();ie.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var i=ct();r=r===void 0?null:r;var o=void 0;if(he!==null){var s=he.memoizedState;if(o=s.destroy,r!==null&&Hc(r,s.deps)){i.memoizedState=Ki(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Ki(1|t,n,o,r)}function Kf(e,t){return Jo(8390656,8,e,t)}function Gc(e,t){return la(2048,8,e,t)}function $0(e,t){return la(4,2,e,t)}function U0(e,t){return la(4,4,e,t)}function H0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function W0(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,H0.bind(null,t,e),n)}function Yc(){}function K0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function G0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Y0(e,t,n){return Jn&21?(St(n,t)||(n=Zm(),ie.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function lw(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{H=n,rl.transition=r}}function X0(){return ct().memoizedState}function uw(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(e))q0(t,n);else if(n=L0(e,t,n,r),n!==null){var i=Ne();vt(n,e,r,i),J0(n,t,r)}}function cw(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(e))q0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,St(a,s)){var l=t.interleaved;l===null?(i.next=i,Ic(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=L0(e,t,i,r),n!==null&&(i=Ne(),vt(n,e,r,i),J0(n,t,r))}}function Q0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function q0(e,t){Ci=Rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function J0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tc(e,n)}}var Ls={readContext:ut,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},dw={readContext:ut,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Kf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uw.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Wf,useDebugValue:Yc,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Wf(!1),t=e[0];return e=lw.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=Pt();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),we===null)throw Error(j(349));Jn&30||z0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Kf(V0.bind(null,r,o,e),[e]),r.flags|=2048,Ki(9,N0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=we.identifierPrefix;if(ee){var n=It,r=Vt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=aw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fw={readContext:ut,useCallback:K0,useContext:ut,useEffect:Gc,useImperativeHandle:W0,useInsertionEffect:$0,useLayoutEffect:U0,useMemo:G0,useReducer:il,useRef:F0,useState:function(){return il(Wi)},useDebugValue:Yc,useDeferredValue:function(e){var t=ct();return Y0(t,he.memoizedState,e)},useTransition:function(){var e=il(Wi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:D0,useId:X0,unstable_isNewReconciler:!1},pw={readContext:ut,useCallback:K0,useContext:ut,useEffect:Gc,useImperativeHandle:W0,useInsertionEffect:$0,useLayoutEffect:U0,useMemo:G0,useReducer:ol,useRef:F0,useState:function(){return ol(Wi)},useDebugValue:Yc,useDeferredValue:function(e){var t=ct();return he===null?t.memoizedState=e:Y0(t,he.memoizedState,e)},useTransition:function(){var e=ol(Wi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:D0,useId:X0,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=wn(e),o=Ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(vt(t,e,i,r),Qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=wn(e),o=Ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(vt(t,e,i,r),Qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=wn(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(vt(t,e,r,n),Qo(t,e,r))}};function Gf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function Z0(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=ut(o):(i=Ue(t)?Qn:De.current,r=t.contextTypes,o=(r=r!=null)?Or(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function vu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ut(o):(o=Ue(t)?Qn:De.current,i.context=Or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),As(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",r=t;do n+=Fv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function eg(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,ju=r),xu(e,t)},n}function tg(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xu(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Aw.bind(null,e,t,n),t.then(e,e))}function Qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var mw=Qt.ReactCurrentOwner,Fe=!1;function ze(e,t,n,r){t.child=e===null?R0(t,null,n,r):_r(t,e.child,n,r)}function Jf(e,t,n,r,i){n=n.render;var o=t.ref;return jr(t,i),r=Wc(e,t,n,r,o,i),n=Kc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(ee&&n&&Mc(t),t.flags|=1,ze(e,t,r,i),t.child)}function Zf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ng(e,t,o,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(s,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ng(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return wu(e,t,n,r,i)}function rg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(vr,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(vr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(vr,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(vr,Ye),Ye|=r;return ze(e,t,i,n),t.child}function ig(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wu(e,t,n,r,i){var o=Ue(n)?Qn:De.current;return o=Or(t,o),jr(t,i),n=Wc(e,t,n,r,o,i),r=Kc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(ee&&r&&Mc(t),t.flags|=1,ze(e,t,n,i),t.child)}function ep(e,t,n,r,i){if(Ue(n)){var o=!0;Cs(t)}else o=!1;if(jr(t,i),t.stateNode===null)Zo(e,t),Z0(t,n,r),vu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ue(n)?Qn:De.current,u=Or(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yf(t,s,r,u),ln=!1;var f=t.memoizedState;s.state=f,As(t,r,s,i),l=t.memoizedState,a!==r||f!==l||$e.current||ln?(typeof c=="function"&&(yu(t,n,c,r),l=t.memoizedState),(a=ln||Gf(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,O0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ht(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=Ue(n)?Qn:De.current,l=Or(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Yf(t,s,r,l),ln=!1,f=t.memoizedState,s.state=f,As(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||$e.current||ln?(typeof v=="function"&&(yu(t,n,v,r),y=t.memoizedState),(u=ln||Gf(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Su(e,t,n,r,o,i)}function Su(e,t,n,r,i,o){ig(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&If(t,n,!1),Xt(e,t,o);r=t.stateNode,mw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=_r(t,e.child,null,o),t.child=_r(t,null,a,o)):ze(e,t,a,o),t.memoizedState=r.state,i&&If(t,n,!0),t.child}function og(e){var t=e.stateNode;t.pendingContext?Vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vf(e,t.context,!1),Fc(e,t.containerInfo)}function tp(e,t,n,r,i){return Mr(),Dc(i),t.flags|=256,ze(e,t,n,r),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function sg(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ne,i&1),e===null)return mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fa(s,r,0,null),e=Kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cu(n),t.memoizedState=ku,e):Xc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Sn(a,o):(o=Kn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Cu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ku,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xc(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,n,r){return r!==null&&Dc(r),_r(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(j(422))),Ao(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fa({mode:"visible",children:r.children},i,0,null),o=Kn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_r(t,e.child,null,s),t.child.memoizedState=Cu(s),t.memoizedState=ku,o);if(!(t.mode&1))return Ao(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=sl(o,r,void 0),Ao(e,t,s,r)}if(a=(s&e.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),vt(r,e,i,-1))}return td(),r=sl(Error(j(421))),Ao(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=yn(i.nextSibling),Qe=t,ee=!0,gt=null,e!==null&&(rt[it++]=Vt,rt[it++]=It,rt[it++]=qn,Vt=e.id,It=e.overflow,qn=t),t=Xc(t,r.children),t.flags|=4096,t)}function np(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gu(e.return,t,n)}function al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ag(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&np(e,n,t);else if(e.tag===19)np(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&js(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&js(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,o);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yw(e,t,n){switch(t.tag){case 3:og(t),Mr();break;case 5:M0(t);break;case 1:Ue(t.type)&&Cs(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?sg(e,t,n):(Y(ne,ne.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ag(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,rg(e,t,n)}return Xt(e,t,n)}var lg,Pu,ug,cg;lg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};ug=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(jt.current);var o=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Xl(e,i),r=Xl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ss)}ql(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};cg=function(e,t,n,r){n!==r&&(t.flags|=4)};function ai(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vw(e,t,n){var r=t.pendingProps;switch(_c(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ue(t.type)&&ks(),Ae(t),null;case 3:return r=t.stateNode,Dr(),q($e),q(De),Uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Ou(gt),gt=null))),Pu(e,t),Ae(t),null;case 5:$c(t);var i=$n(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)ug(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ae(t),null}if(e=$n(jt.current),Eo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[Fi]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)X(hi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":df(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":pf(r,o),X("invalid",r)}ql(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",""+a]):Li.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":yo(r),ff(r,o,!0);break;case"textarea":yo(r),hf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ss)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[bt]=t,e[Fi]=r,lg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Jl(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)X(hi[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":df(e,r),i=Kl(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":pf(e,r),i=Xl(e,r),X("invalid",e);break;default:i=r}ql(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Fm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Im(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oi(e,l):typeof l=="number"&&Oi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Li.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&xc(e,o,l,s))}switch(n){case"input":yo(e),ff(e,r,!1);break;case"textarea":yo(e),hf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)cg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=$n(Ui.current),$n(jt.current),Eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ae(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Xe!==null&&t.mode&1&&!(t.flags&128))A0(),Mr(),t.flags|=98560,o=!1;else if(o=Eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[bt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else gt!==null&&(Ou(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):td())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Dr(),Pu(e,t),e===null&&Ii(t.stateNode.containerInfo),Ae(t),null;case 10:return Vc(t.type._context),Ae(t),null;case 17:return Ue(t.type)&&ks(),Ae(t),null;case 19:if(q(ne),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ai(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=js(e),s!==null){for(t.flags|=128,ai(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Nr&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304)}else{if(!r)if(e=js(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return Ae(t),null}else 2*le()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=ne.current,Y(ne,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ed(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function xw(e,t){switch(_c(t),t.tag){case 1:return Ue(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),q($e),q(De),Uc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return Dr(),null;case 10:return Vc(t.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var jo=!1,Re=!1,ww=typeof WeakSet=="function"?WeakSet:Set,O=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Tu(e,t,n){try{n()}catch(r){se(e,t,r)}}var rp=!1;function Sw(e,t){if(lu=vs,e=m0(),Oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:e,selectionRange:n},vs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:ht(t.type,x),k);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=rp,rp=!1,y}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Tu(t,n,o)}i=i.next}while(i!==r)}}function ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dg(e){var t=e.alternate;t!==null&&(e.alternate=null,dg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Fi],delete t[fu],delete t[rw],delete t[iw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fg(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,n),e=e.sibling;e!==null;)bu(e,t,n),e=e.sibling}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}var Se=null,mt=!1;function en(e,t,n){for(n=n.child;n!==null;)pg(e,t,n),n=n.sibling}function pg(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Re||yr(n,t);case 6:var r=Se,i=mt;Se=null,en(e,t,n),Se=r,mt=i,Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),zi(e)):el(Se,n.stateNode));break;case 4:r=Se,i=mt,Se=n.stateNode.containerInfo,mt=!0,en(e,t,n),Se=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tu(n,t,s),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Re&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,en(e,t,n),Re=r):en(e,t,n);break;default:en(e,t,n)}}function op(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ww),t.forEach(function(r){var i=Rw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,mt=!1;break e;case 3:Se=a.stateNode.containerInfo,mt=!0;break e;case 4:Se=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Se===null)throw Error(j(160));pg(o,s,i),Se=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hg(t,e),t=t.sibling}function hg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Ct(e),r&4){try{Pi(3,e,e.return),ca(3,e)}catch(x){se(e,e.return,x)}try{Pi(5,e,e.return)}catch(x){se(e,e.return,x)}}break;case 1:pt(t,e),Ct(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(pt(t,e),Ct(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Oi(i,"")}catch(x){se(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zm(i,o),Jl(a,s);var u=Jl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Fm(i,d):c==="dangerouslySetInnerHTML"?Im(i,d):c==="children"?Oi(i,d):xc(i,c,d,u)}switch(a){case"input":Gl(i,o);break;case"textarea":Nm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Tr(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fi]=o}catch(x){se(e,e.return,x)}}break;case 6:if(pt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){se(e,e.return,x)}}break;case 3:if(pt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(x){se(e,e.return,x)}break;case 4:pt(t,e),Ct(e);break;case 13:pt(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jc=le())),r&4&&op(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||c,pt(t,e),Re=u):pt(t,e),Ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(d=O=c;O!==null;){switch(f=O,v=f.child,f.tag){case 0:case 11:case 14:case 15:Pi(4,f,f.return);break;case 1:yr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){se(r,n,x)}}break;case 5:yr(f,f.return);break;case 22:if(f.memoizedState!==null){ap(d);continue}}v!==null?(v.return=f,O=v):ap(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bm("display",s))}catch(x){se(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){se(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),Ct(e),r&4&&op(e);break;case 21:break;default:pt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fg(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var o=ip(e);Au(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ip(e);bu(e,a,s);break;default:throw Error(j(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kw(e,t,n){O=e,mg(e)}function mg(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||jo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Re;a=jo;var u=Re;if(jo=s,(Re=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?lp(i):l!==null?(l.return=s,O=l):lp(i);for(;o!==null;)O=o,mg(o),o=o.sibling;O=i,jo=a,Re=u}sp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):sp(e)}}function sp(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&zi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Re||t.flags&512&&Eu(t)}catch(f){se(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function ap(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function lp(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ca(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){se(t,i,l)}}var o=t.return;try{Eu(t)}catch(l){se(t,o,l)}break;case 5:var s=t.return;try{Eu(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Cw=Math.ceil,Os=Qt.ReactCurrentDispatcher,Qc=Qt.ReactCurrentOwner,st=Qt.ReactCurrentBatchConfig,$=0,we=null,de=null,Pe=0,Ye=0,vr=jn(0),me=0,Gi=null,Zn=0,da=0,qc=0,Ti=null,Be=null,Jc=0,Nr=1/0,Dt=null,Ms=!1,ju=null,xn=null,Ro=!1,fn=null,_s=0,Ei=0,Ru=null,es=-1,ts=0;function Ne(){return $&6?le():es!==-1?es:es=le()}function wn(e){return e.mode&1?$&2&&Pe!==0?Pe&-Pe:sw.transition!==null?(ts===0&&(ts=Zm()),ts):(e=H,e!==0||(e=window.event,e=e===void 0?16:s0(e.type)),e):1}function vt(e,t,n,r){if(50<Ei)throw Ei=0,Ru=null,Error(j(185));no(e,n,r),(!($&2)||e!==we)&&(e===we&&(!($&2)&&(da|=n),me===4&&cn(e,Pe)),He(e,r),n===1&&$===0&&!(t.mode&1)&&(Nr=le()+500,aa&&Rn()))}function He(e,t){var n=e.callbackNode;sx(e,t);var r=ys(e,e===we?Pe:0);if(r===0)n!==null&&yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yf(n),t===1)e.tag===0?ow(up.bind(null,e)):T0(up.bind(null,e)),tw(function(){!($&6)&&Rn()}),n=null;else{switch(e0(r)){case 1:n=Pc;break;case 4:n=qm;break;case 16:n=gs;break;case 536870912:n=Jm;break;default:n=gs}n=Cg(n,gg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gg(e,t){if(es=-1,ts=0,$&6)throw Error(j(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=ys(e,e===we?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ds(e,r);else{t=r;var i=$;$|=2;var o=vg();(we!==e||Pe!==t)&&(Dt=null,Nr=le()+500,Wn(e,t));do try{Ew();break}catch(a){yg(e,a)}while(!0);Nc(),Os.current=o,$=i,de!==null?t=0:(we=null,Pe=0,t=me)}if(t!==0){if(t===2&&(i=ru(e),i!==0&&(r=i,t=Lu(e,i))),t===1)throw n=Gi,Wn(e,0),cn(e,r),He(e,le()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pw(i)&&(t=Ds(e,r),t===2&&(o=ru(e),o!==0&&(r=o,t=Lu(e,o))),t===1))throw n=Gi,Wn(e,0),cn(e,r),He(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Nn(e,Be,Dt);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=Jc+500-le(),10<t)){if(ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=du(Nn.bind(null,e,Be,Dt),t);break}Nn(e,Be,Dt);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-yt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cw(r/1960))-r,10<r){e.timeoutHandle=du(Nn.bind(null,e,Be,Dt),r);break}Nn(e,Be,Dt);break;case 5:Nn(e,Be,Dt);break;default:throw Error(j(329))}}}return He(e,le()),e.callbackNode===n?gg.bind(null,e):null}function Lu(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=Be,Be=n,t!==null&&Ou(t)),e}function Ou(e){Be===null?Be=e:Be.push.apply(Be,e)}function Pw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~qc,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function up(e){if($&6)throw Error(j(327));Rr();var t=ys(e,0);if(!(t&1))return He(e,le()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var r=ru(e);r!==0&&(t=r,n=Lu(e,r))}if(n===1)throw n=Gi,Wn(e,0),cn(e,t),He(e,le()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Be,Dt),He(e,le()),null}function Zc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Nr=le()+500,aa&&Rn())}}function er(e){fn!==null&&fn.tag===0&&!($&6)&&Rr();var t=$;$|=1;var n=st.transition,r=H;try{if(st.transition=null,H=1,e)return e()}finally{H=r,st.transition=n,$=t,!($&6)&&Rn()}}function ed(){Ye=vr.current,q(vr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ew(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(_c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:Dr(),q($e),q(De),Uc();break;case 5:$c(r);break;case 4:Dr();break;case 13:q(ne);break;case 19:q(ne);break;case 10:Vc(r.type._context);break;case 22:case 23:ed()}n=n.return}if(we=e,de=e=Sn(e.current,null),Pe=Ye=t,me=0,Gi=null,qc=da=Zn=0,Be=Ti=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Fn=null}return e}function yg(e,t){do{var n=de;try{if(Nc(),qo.current=Ls,Rs){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rs=!1}if(Jn=0,ye=he=ie=null,Ci=!1,Hi=0,Qc.current=null,n===null||n.return===null){me=1,Gi=t,de=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Qf(s);if(v!==null){v.flags&=-257,qf(v,s,a,o,t),v.mode&1&&Xf(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Xf(o,u,t),td();break e}l=Error(j(426))}}else if(ee&&a.mode&1){var k=Qf(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),qf(k,s,a,o,t),Dc(zr(l,a));break e}}o=l=zr(l,a),me!==4&&(me=2),Ti===null?Ti=[o]:Ti.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=eg(o,l,t);Uf(o,h);break e;case 1:a=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xn===null||!xn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=tg(o,a,t);Uf(o,w);break e}}o=o.return}while(o!==null)}wg(n)}catch(P){t=P,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function vg(){var e=Os.current;return Os.current=Ls,e===null?Ls:e}function td(){(me===0||me===3||me===2)&&(me=4),we===null||!(Zn&268435455)&&!(da&268435455)||cn(we,Pe)}function Ds(e,t){var n=$;$|=2;var r=vg();(we!==e||Pe!==t)&&(Dt=null,Wn(e,t));do try{Tw();break}catch(i){yg(e,i)}while(!0);if(Nc(),$=n,Os.current=r,de!==null)throw Error(j(261));return we=null,Pe=0,me}function Tw(){for(;de!==null;)xg(de)}function Ew(){for(;de!==null&&!qv();)xg(de)}function xg(e){var t=kg(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?wg(e):de=t,Qc.current=null}function wg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xw(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=vw(n,t,Ye),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function Nn(e,t,n){var r=H,i=st.transition;try{st.transition=null,H=1,bw(e,t,n,r)}finally{st.transition=i,H=r}return null}function bw(e,t,n,r){do Rr();while(fn!==null);if($&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ax(e,o),e===we&&(de=we=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,Cg(gs,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=st.transition,st.transition=null;var s=H;H=1;var a=$;$|=4,Qc.current=null,Sw(e,n),hg(n,e),Gx(uu),vs=!!lu,uu=lu=null,e.current=n,kw(n),Jv(),$=a,H=s,st.transition=o}else e.current=n;if(Ro&&(Ro=!1,fn=e,_s=i),o=e.pendingLanes,o===0&&(xn=null),tx(n.stateNode),He(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,e=ju,ju=null,e;return _s&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===Ru?Ei++:(Ei=0,Ru=e):Ei=0,Rn(),null}function Rr(){if(fn!==null){var e=e0(_s),t=st.transition,n=H;try{if(st.transition=null,H=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,_s=0,$&6)throw Error(j(331));var i=$;for($|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Pi(8,c,o)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var f=c.sibling,v=c.return;if(dg(c),c===u){O=null;break}if(f!==null){f.return=v,O=f;break}O=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,O=h;break e}O=o.return}}var p=e.current;for(O=p;O!==null;){s=O;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,O=m;else e:for(s=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ca(9,a)}}catch(P){se(a,a.return,P)}if(a===s){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if($=i,Rn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{H=n,st.transition=t}}return!1}function cp(e,t,n){t=zr(n,t),t=eg(e,t,1),e=vn(e,t,1),t=Ne(),e!==null&&(no(e,1,t),He(e,t))}function se(e,t,n){if(e.tag===3)cp(e,e,n);else for(;t!==null;){if(t.tag===3){cp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=zr(n,e),e=tg(t,e,1),t=vn(t,e,1),e=Ne(),t!==null&&(no(t,1,e),He(t,e));break}}t=t.return}}function Aw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Pe&n)===n&&(me===4||me===3&&(Pe&130023424)===Pe&&500>le()-Jc?Wn(e,0):qc|=n),He(e,t)}function Sg(e,t){t===0&&(e.mode&1?(t=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):t=1);var n=Ne();e=Yt(e,t),e!==null&&(no(e,t,n),He(e,n))}function jw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sg(e,n)}function Rw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Sg(e,n)}var kg;kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,yw(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ee&&t.flags&1048576&&E0(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var i=Or(t,De.current);jr(t,n),i=Wc(null,t,r,e,i,n);var o=Kc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,Cs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bc(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,vu(t,r,e,n),t=Su(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&Mc(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ow(r),e=ht(r,e),i){case 0:t=wu(null,t,r,e,n);break e;case 1:t=ep(null,t,r,e,n);break e;case 11:t=Jf(null,t,r,e,n);break e;case 14:t=Zf(null,t,r,ht(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),wu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),ep(e,t,r,i,n);case 3:e:{if(og(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,O0(e,t),As(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zr(Error(j(423)),t),t=tp(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(j(424)),t),t=tp(e,t,r,n,i);break e}else for(Xe=yn(t.stateNode.containerInfo.firstChild),Qe=t,ee=!0,gt=null,n=R0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Xt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return M0(t),e===null&&mu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,cu(r,i)?s=null:o!==null&&cu(r,o)&&(t.flags|=32),ig(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&mu(t),null;case 13:return sg(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Jf(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(Es,r._currentValue),r._currentValue=s,o!==null)if(St(o.value,s)){if(o.children===i.children&&!$e.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ft(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jr(t,n),i=ut(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Zf(e,t,r,i,n);case 15:return ng(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Zo(e,t),t.tag=1,Ue(r)?(e=!0,Cs(t)):e=!1,jr(t,n),Z0(t,r,i),vu(t,r,i,n),Su(null,t,r,!0,e,n);case 19:return ag(e,t,n);case 22:return rg(e,t,n)}throw Error(j(156,t.tag))};function Cg(e,t){return Qm(e,t)}function Lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Lw(e,t,n,r)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ow(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sc)return 11;if(e===kc)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")nd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case lr:return Kn(n.children,i,o,t);case wc:s=8,i|=8;break;case $l:return e=ot(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case Ul:return e=ot(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Hl:return e=ot(19,n,t,i),e.elementType=Hl,e.lanes=o,e;case Mm:return fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lm:s=10;break e;case Om:s=9;break e;case Sc:s=11;break e;case kc:s=14;break e;case an:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ot(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function fa(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Mm,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rd(e,t,n,r,i,o,s,a,l){return e=new Mw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(o),e}function _w(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pg(e){if(!e)return Pn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ue(n))return P0(e,n,t)}return t}function Tg(e,t,n,r,i,o,s,a,l){return e=rd(n,r,!0,e,i,o,s,a,l),e.context=Pg(null),n=e.current,r=Ne(),i=wn(n),o=Ft(r,i),o.callback=t??null,vn(n,o,i),e.current.lanes=i,no(e,i,r),He(e,r),e}function pa(e,t,n,r){var i=t.current,o=Ne(),s=wn(i);return n=Pg(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,s),e!==null&&(vt(e,i,s,o),Qo(e,i,s)),s}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function id(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function Dw(){return null}var Eg=typeof reportError=="function"?reportError:function(e){console.error(e)};function od(e){this._internalRoot=e}ha.prototype.render=od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));pa(e,t,null,null)};ha.prototype.unmount=od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){pa(null,e,null,null)}),t[Gt]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=r0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&o0(e)}};function sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fp(){}function zw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=zs(s);o.call(u)}}var s=Tg(t,r,e,0,null,!1,!1,"",fp);return e._reactRootContainer=s,e[Gt]=s.current,Ii(e.nodeType===8?e.parentNode:e),er(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zs(l);a.call(u)}}var l=rd(e,0,!1,null,null,!1,!1,"",fp);return e._reactRootContainer=l,e[Gt]=l.current,Ii(e.nodeType===8?e.parentNode:e),er(function(){pa(t,l,n,r)}),l}function ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=zs(s);a.call(l)}}pa(t,s,e,i)}else s=zw(n,t,e,i,r);return zs(s)}t0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(Tc(t,n|1),He(t,le()),!($&6)&&(Nr=le()+500,Rn()))}break;case 13:er(function(){var r=Yt(e,1);if(r!==null){var i=Ne();vt(r,e,1,i)}}),id(e,1)}};Ec=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ne();vt(t,e,134217728,n)}id(e,134217728)}};n0=function(e){if(e.tag===13){var t=wn(e),n=Yt(e,t);if(n!==null){var r=Ne();vt(n,e,t,r)}id(e,t)}};r0=function(){return H};i0=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};eu=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sa(r);if(!i)throw Error(j(90));Dm(r),Gl(r,i)}}}break;case"textarea":Nm(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};Hm=Zc;Wm=er;var Nw={usingClientEntryPoint:!1,Events:[io,fr,sa,$m,Um,Zc]},li={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ym(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{na=Lo.inject(Vw),At=Lo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(t))throw Error(j(200));return _w(e,t,null,n)};Ze.createRoot=function(e,t){if(!sd(e))throw Error(j(299));var n=!1,r="",i=Eg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rd(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new od(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ym(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return er(e)};Ze.hydrate=function(e,t,n){if(!ma(t))throw Error(j(200));return ga(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!sd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Eg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tg(t,null,e,1,n??null,i,!1,o,s),e[Gt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ha(t)};Ze.render=function(e,t,n){if(!ma(t))throw Error(j(200));return ga(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!ma(e))throw Error(j(40));return e._reactRootContainer?(er(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Zc;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ma(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ga(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)}catch(e){console.error(e)}}bg(),bm.exports=Ze;var Iw=bm.exports,pp=Iw;Bl.createRoot=pp.createRoot,Bl.hydrateRoot=pp.hydrateRoot;var Le=function(){return Le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Le.apply(this,arguments)};function Vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Q="-ms-",bi="-moz-",U="-webkit-",Ag="comm",ya="rule",ad="decl",Bw="@import",jg="@keyframes",Fw="@layer",Rg=Math.abs,ld=String.fromCharCode,Mu=Object.assign;function $w(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function Lg(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function rs(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function Og(e){return e.length}function mi(e,t){return t.push(e),e}function Uw(e,t){return e.map(t).join("")}function hp(e,t){return e.filter(function(n){return!zt(n,t)})}var va=1,Br=1,Mg=0,dt=0,ce=0,Qr="";function xa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:va,column:Br,length:s,return:"",siblings:a}}function on(e,t){return Mu(xa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=on(e.root,{children:[e]});mi(e,e.siblings)}function Hw(){return ce}function Ww(){return ce=dt>0?ve(Qr,--dt):0,Br--,ce===10&&(Br=1,va--),ce}function xt(){return ce=dt<Mg?ve(Qr,dt++):0,Br++,ce===10&&(Br=1,va++),ce}function Gn(){return ve(Qr,dt)}function is(){return dt}function wa(e,t){return Ir(Qr,e,t)}function _u(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kw(e){return va=Br=1,Mg=Et(Qr=e),dt=0,[]}function Gw(e){return Qr="",e}function cl(e){return Lg(wa(dt-1,Du(e===91?e+2:e===40?e+1:e)))}function Yw(e){for(;(ce=Gn())&&ce<33;)xt();return _u(e)>2||_u(ce)>3?"":" "}function Xw(e,t){for(;--t&&xt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return wa(e,is()+(t<6&&Gn()==32&&xt()==32))}function Du(e){for(;xt();)switch(ce){case e:return dt;case 34:case 39:e!==34&&e!==39&&Du(ce);break;case 40:e===41&&Du(e);break;case 92:xt();break}return dt}function Qw(e,t){for(;xt()&&e+ce!==57;)if(e+ce===84&&Gn()===47)break;return"/*"+wa(t,dt-1)+"*"+ld(e===47?e:xt())}function qw(e){for(;!_u(Gn());)xt();return wa(e,dt)}function Jw(e){return Gw(os("",null,null,null,[""],e=Kw(e),0,[0],e))}function os(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,v=0,y=0,x=1,k=1,h=1,p=0,m="",w=i,P=o,T=r,E=m;k;)switch(y=p,p=xt()){case 40:if(y!=108&&ve(E,d-1)==58){rs(E+=I(cl(p),"&","&\f"),"&\f",Rg(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=cl(p);break;case 9:case 10:case 13:case 32:E+=Yw(y);break;case 92:E+=Xw(is()-1,7);continue;case 47:switch(Gn()){case 42:case 47:mi(Zw(Qw(xt(),is()),t,n,l),l);break;default:E+="/"}break;case 123*x:a[u++]=Et(E)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:h==-1&&(E=I(E,/\f/g,"")),v>0&&Et(E)-d&&mi(v>32?gp(E+";",r,n,d-1,l):gp(I(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(mi(T=mp(E,t,n,u,c,i,a,m,w=[],P=[],d,o),o),p===123)if(c===0)os(E,t,T,T,w,o,d,a,P);else switch(f===99&&ve(E,3)===110?100:f){case 100:case 108:case 109:case 115:os(e,T,T,r&&mi(mp(e,T,T,0,0,i,a,m,i,w=[],d,P),P),i,P,d,a,r?w:P);break;default:os(E,T,T,T,[""],P,0,a,P)}}u=c=v=0,x=h=1,m=E="",d=s;break;case 58:d=1+Et(E),v=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&Ww()==125)continue}switch(E+=ld(p),p*x){case 38:h=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(Et(E)-1)*h,h=1;break;case 64:Gn()===45&&(E+=cl(xt())),f=Gn(),c=d=Et(m=E+=qw(is())),p++;break;case 45:y===45&&Et(E)==2&&(x=0)}}return o}function mp(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,v=i===0?o:[""],y=Og(v),x=0,k=0,h=0;x<r;++x)for(var p=0,m=Ir(e,f+1,f=Rg(k=s[x])),w=e;p<y;++p)(w=Lg(k>0?v[p]+" "+m:I(m,/&\f/g,v[p])))&&(l[h++]=w);return xa(e,t,n,i===0?ya:a,l,u,c,d)}function Zw(e,t,n,r){return xa(e,t,n,Ag,ld(Hw()),Ir(e,2,-2),0,r)}function gp(e,t,n,r,i){return xa(e,t,n,ad,Ir(e,0,r),Ir(e,r+1,-1),r,i)}function _g(e,t,n){switch($w(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+bi+e+Q+e+e;case 5936:switch(ve(e,t+11)){case 114:return U+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+I(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+I(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":Q+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+I(e,"shrink","negative")+e;case 5292:return U+e+Q+I(e,"basis","preferred-size")+e;case 6060:return U+"box-"+I(e,"-grow","")+U+e+Q+I(e,"grow","positive")+e;case 4554:return U+I(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!zt(e,/flex-|baseline/))return Q+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return Q+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zt(r.props,/grid-\w+-end/)})?~rs(e+(n=n[t].value),"span",0)?e:Q+I(e,"-start","")+e+Q+"grid-row-span:"+(~rs(n,"span",0)?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":Q+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:Q+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+bi+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~rs(e,"stretch",0)?_g(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Q+i+":"+o+u+(s?Q+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ve(e,t+6)===121)return I(e,":",":"+U)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ve(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return I(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ns(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function eS(e,t,n,r){switch(e.type){case Fw:if(e.children.length)break;case Bw:case ad:return e.return=e.return||e.value;case Ag:return"";case jg:return e.return=e.value+"{"+Ns(e.children,r)+"}";case ya:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Ns(e.children,r))?e.return=e.value+"{"+n+"}":""}function tS(e){var t=Og(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function nS(e){return function(t){t.root||(t=t.return)&&e(t)}}function rS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ad:e.return=_g(e.value,e.length,n);return;case jg:return Ns([on(e,{value:I(e.value,"@","@"+U)})],r);case ya:if(e.length)return Uw(n=e.props,function(i){switch(zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(on(e,{props:[I(i,/:(read-\w+)/,":"+bi+"$1")]})),sr(on(e,{props:[i]})),Mu(e,{props:hp(n,r)});break;case"::placeholder":sr(on(e,{props:[I(i,/:(plac\w+)/,":"+U+"input-$1")]})),sr(on(e,{props:[I(i,/:(plac\w+)/,":"+bi+"$1")]})),sr(on(e,{props:[I(i,/:(plac\w+)/,Q+"input-$1")]})),sr(on(e,{props:[i]})),Mu(e,{props:hp(n,r)});break}return""})}}var iS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},Fr=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",Dg="active",zg="data-styled-version",Sa="6.1.13",ud=`/*!sc*/
`,Vs=typeof window<"u"&&"HTMLElement"in window,oS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),sS={},ka=Object.freeze([]),$r=Object.freeze({});function Ng(e,t,n){return n===void 0&&(n=$r),e.theme!==n.theme&&e.theme||t||n.theme}var Vg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lS=/(^-|-$)/g;function yp(e){return e.replace(aS,"-").replace(lS,"")}var uS=/(a)(d)/gi,Oo=52,vp=function(e){return String.fromCharCode(e+(e>25?39:97))};function zu(e){var t,n="";for(t=Math.abs(e);t>Oo;t=t/Oo|0)n=vp(t%Oo)+n;return(vp(t%Oo)+n).replace(uS,"$1-$2")}var dl,Ig=5381,xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Bg=function(e){return xr(Ig,e)};function cd(e){return zu(Bg(e)>>>0)}function cS(e){return e.displayName||e.name||"Component"}function fl(e){return typeof e=="string"&&!0}var Fg=typeof Symbol=="function"&&Symbol.for,$g=Fg?Symbol.for("react.memo"):60115,dS=Fg?Symbol.for("react.forward_ref"):60112,fS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hS=((dl={})[dS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dl[$g]=Ug,dl);function xp(e){return("type"in(t=e)&&t.type.$$typeof)===$g?Ug:"$$typeof"in e?hS[e.$$typeof]:fS;var t}var mS=Object.defineProperty,gS=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,yS=Object.getOwnPropertyDescriptor,vS=Object.getPrototypeOf,Sp=Object.prototype;function Hg(e,t,n){if(typeof t!="string"){if(Sp){var r=vS(t);r&&r!==Sp&&Hg(e,r,n)}var i=gS(t);wp&&(i=i.concat(wp(t)));for(var o=xp(e),s=xp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in pS||n&&n[l]||s&&l in s||o&&l in o)){var u=yS(t,l);try{mS(e,l,u)}catch{}}}}return e}function Ur(e){return typeof e=="function"}function dd(e){return typeof e=="object"&&"styledComponentId"in e}function Un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Is(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Yi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nu(e,t,n){if(n===void 0&&(n=!1),!n&&!Yi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nu(e[r],t[r]);else if(Yi(t))for(var r in t)e[r]=Nu(e[r],t[r]);return e}function fd(e,t){Object.defineProperty(e,"toString",{value:t})}function so(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw so(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(ud);return n},e}(),ss=new Map,Bs=new Map,as=1,Mo=function(e){if(ss.has(e))return ss.get(e);for(;Bs.has(as);)as++;var t=as++;return ss.set(e,t),Bs.set(t,e),t},wS=function(e,t){as=t+1,ss.set(e,t),Bs.set(t,e)},SS="style[".concat(Fr,"][").concat(zg,'="').concat(Sa,'"]'),kS=new RegExp("^".concat(Fr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CS=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},PS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ud),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(kS);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(wS(c,u),CS(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},kp=function(e){for(var t=document.querySelectorAll(SS),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Fr)!==Dg&&(PS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function TS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Fr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fr,Dg),r.setAttribute(zg,Sa);var s=TS();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},ES=function(){function e(t){this.element=Wg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw so(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bS=function(){function e(t){this.element=Wg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),AS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cp=Vs,jS={isServer:!Vs,useCSSOMInjection:!oS},Fs=function(){function e(t,n,r){t===void 0&&(t=$r),n===void 0&&(n={});var i=this;this.options=Le(Le({},jS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Vs&&Cp&&(Cp=!1,kp(this)),fd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(h){return Bs.get(h)}(d);if(f===void 0)return"continue";var v=o.names.get(f),y=s.getGroup(d);if(v===void 0||!v.size||y.length===0)return"continue";var x="".concat(Fr,".g").concat(d,'[id="').concat(f,'"]'),k="";v!==void 0&&v.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),l+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(ud)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Mo(t)},e.prototype.rehydrate=function(){!this.server&&Vs&&kp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Le(Le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new AS(i):r?new ES(i):new bS(i)}(this.options),new xS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Mo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Mo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Mo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),RS=/&/g,LS=/^\s*\/\/.*$/gm;function Kg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Kg(n.children,t)),n})}function OS(e){var t,n,r,i=$r,o=i.options,s=o===void 0?$r:o,a=i.plugins,l=a===void 0?ka:a,u=function(f,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===ya&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(RS,n).replace(r,u))}),s.prefix&&c.push(rS),c.push(eS);var d=function(f,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(LS,""),h=Jw(y||v?"".concat(y," ").concat(v," { ").concat(k," }"):k);s.namespace&&(h=Kg(h,s.namespace));var p=[];return Ns(h,tS(c.concat(nS(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,v){return v.name||so(15),xr(f,v.name)},Ig).toString():"",d}var MS=new Fs,Vu=OS(),Gg=Ce.createContext({shouldForwardProp:void 0,styleSheet:MS,stylis:Vu});Gg.Consumer;Ce.createContext(void 0);function Iu(){return A.useContext(Gg)}var Yg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Vu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fd(this,function(){throw so(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Vu),this.name+t.hash},e}(),_S=function(e){return e>="A"&&e<="Z"};function Pp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_S(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Xg=function(e){return e==null||e===!1||e===""},Qg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Xg(o)&&(Array.isArray(o)&&o.isCss||Ur(o)?r.push("".concat(Pp(i),":"),o,";"):Yi(o)?r.push.apply(r,Vr(Vr(["".concat(i," {")],Qg(o),!1),["}"],!1)):r.push("".concat(Pp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in iS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function kn(e,t,n,r){if(Xg(e))return[];if(dd(e))return[".".concat(e.styledComponentId)];if(Ur(e)){if(!Ur(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return kn(i,t,n,r)}var o;return e instanceof Yg?n?(e.inject(n,r),[e.getName(r)]):[e]:Yi(e)?Qg(e):Array.isArray(e)?Array.prototype.concat.apply(ka,e.map(function(s){return kn(s,t,n,r)})):[e.toString()]}function qg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!dd(n))return!1}return!0}var DS=Bg(Sa),zS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qg(t),this.componentId=n,this.baseHash=xr(DS,n),this.baseStyle=r,Fs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Un(i,this.staticRulesId);else{var o=Is(kn(this.rules,t,n,r)),s=zu(xr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Un(i,s),this.staticRulesId=s}else{for(var l=xr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Is(kn(d,t,n,r));l=xr(l,f+c),u+=f}}if(u){var v=zu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Un(i,v)}}return i},e}(),pd=Ce.createContext(void 0);pd.Consumer;var pl={};function NS(e,t,n){var r=dd(e),i=e,o=!fl(e),s=t.attrs,a=s===void 0?ka:s,l=t.componentId,u=l===void 0?function(w,P){var T=typeof w!="string"?"sc":yp(w);pl[T]=(pl[T]||0)+1;var E="".concat(T,"-").concat(cd(Sa+T+pl[T]));return P?"".concat(P,"-").concat(E):E}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return fl(w)?"styled.".concat(w):"Styled(".concat(cS(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(yp(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(w,P){return x(w,P)&&k(w,P)}}else y=x}var h=new zS(n,f,r?i.componentStyle:void 0);function p(w,P){return function(T,E,b){var V=T.attrs,R=T.componentStyle,D=T.defaultProps,J=T.foldedComponentIds,pe=T.styledComponentId,ue=T.target,Mt=Ce.useContext(pd),qt=Iu(),te=T.shouldForwardProp||qt.shouldForwardProp,L=Ng(E,Mt,D)||$r,M=function(Jt,Ke,_t){for(var ei,_n=Le(Le({},Ke),{className:void 0,theme:_t}),Na=0;Na<Jt.length;Na+=1){var ho=Ur(ei=Jt[Na])?ei(_n):ei;for(var Zt in ho)_n[Zt]=Zt==="className"?Un(_n[Zt],ho[Zt]):Zt==="style"?Le(Le({},_n[Zt]),ho[Zt]):ho[Zt]}return Ke.className&&(_n.className=Un(_n.className,Ke.className)),_n}(V,E,L),z=M.as||ue,K={};for(var G in M)M[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&M.theme===L||(G==="forwardedAs"?K.as=M.forwardedAs:te&&!te(G,z)||(K[G]=M[G]));var Mn=function(Jt,Ke){var _t=Iu(),ei=Jt.generateAndInjectStyles(Ke,_t.styleSheet,_t.stylis);return ei}(R,M),ft=Un(J,pe);return Mn&&(ft+=" "+Mn),M.className&&(ft+=" "+M.className),K[fl(z)&&!Vg.has(z)?"class":"className"]=ft,K.ref=b,A.createElement(z,K)}(m,w,P)}p.displayName=d;var m=Ce.forwardRef(p);return m.attrs=v,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=y,m.foldedComponentIds=r?Un(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var b=0,V=T;b<V.length;b++)Nu(P,V[b],!0);return P}({},i.defaultProps,w):w}}),fd(m,function(){return".".concat(m.styledComponentId)}),o&&Hg(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Tp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ep=function(e){return Object.assign(e,{isCss:!0})};function hd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Yi(e))return Ep(kn(Tp(ka,Vr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kn(r):Ep(kn(Tp(r,t)))}function Bu(e,t,n){if(n===void 0&&(n=$r),!t)throw so(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,hd.apply(void 0,Vr([i],o,!1)))};return r.attrs=function(i){return Bu(e,t,Le(Le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Bu(e,t,Le(Le({},n),i))},r}var Jg=function(e){return Bu(NS,e)},S=Jg;Vg.forEach(function(e){S[e]=Jg(e)});var VS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qg(t),Fs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Is(kn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Fs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function IS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=hd.apply(void 0,Vr([e],t,!1)),i="sc-global-".concat(cd(JSON.stringify(r))),o=new VS(r,i),s=function(l){var u=Iu(),c=Ce.useContext(pd),d=Ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Ce.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,sS,c,f);else{var v=Le(Le({},u),{theme:Ng(u,d,s.defaultProps)});o.renderStyles(l,v,c,f)}}return Ce.memo(s)}function ir(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Is(hd.apply(void 0,Vr([e],t,!1))),i=cd(r);return new Yg(i,r)}function BS(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Xi(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Fu=e=>Array.isArray(e);function Zg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Qi(e){return typeof e=="string"||Array.isArray(e)}function bp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function md(e,t,n,r){if(typeof t=="function"){const[i,o]=bp(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=bp(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Ca(e,t,n){const r=e.getProps();return md(r,t,n!==void 0?n:r.custom,e)}const gd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yd=["initial",...gd],ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ln=new Set(ao),$t=e=>e*1e3,Ut=e=>e/1e3,FS={type:"spring",stiffness:500,damping:25,restSpeed:10},$S=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),US={type:"keyframes",duration:.8},HS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},WS=(e,{keyframes:t})=>t.length>2?US:Ln.has(e)?e.startsWith("scale")?$S(t[1]):FS:HS;function vd(e,t){return e[t]||e.default||e}const KS={skipAnimations:!1,useManualTiming:!1},GS=e=>e!==null;function Pa(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(GS),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const _e=e=>e;function YS(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,d=!1)=>{const v=d&&r?t:n;return c&&o.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,i&&(i=!1,l.process(u))}};return l}const _o=["read","resolveKeyframes","update","preRender","render","postRender"],XS=40;function ey(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=_o.reduce((h,p)=>(h[p]=YS(o),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=s,v=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,XS),1),i.timestamp=h,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},y=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:_o.reduce((h,p)=>{const m=s[p];return h[p]=(w,P=!1,T=!1)=>(n||y(),m.schedule(w,P,T)),h},{}),cancel:h=>{for(let p=0;p<_o.length;p++)s[_o[p]].cancel(h)},state:i,steps:s}}const{schedule:W,cancel:Tn,state:ke,steps:hl}=ey(typeof requestAnimationFrame<"u"?requestAnimationFrame:_e,!0),ty=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,QS=1e-7,qS=12;function JS(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=ty(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>QS&&++a<qS);return s}function lo(e,t,n,r){if(e===t&&n===r)return _e;const i=o=>JS(o,0,1,e,n);return o=>o===0||o===1?o:ty(i(o),t,r)}const ny=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ry=e=>t=>1-e(1-t),iy=lo(.33,1.53,.69,.99),xd=ry(iy),oy=ny(xd),sy=e=>(e*=2)<1?.5*xd(e):.5*(2-Math.pow(2,-10*(e-1))),wd=e=>1-Math.sin(Math.acos(e)),ay=ry(wd),ly=ny(wd),uy=e=>/^0[^.\s]+$/u.test(e);function ZS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||uy(e):!0}let $u=_e;const cy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),dy=e=>t=>typeof t=="string"&&t.startsWith(e),fy=dy("--"),ek=dy("var(--"),Sd=e=>ek(e)?tk.test(e.split("/*")[0].trim()):!1,tk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,nk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rk(e){const t=nk.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function py(e,t,n=1){const[r,i]=rk(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return cy(s)?parseFloat(s):s}return Sd(i)?py(i,t,n+1):i}const En=(e,t,n)=>n>t?t:n<e?e:n,qr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},qi={...qr,transform:e=>En(0,1,e)},Do={...qr,default:1},uo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),sn=uo("deg"),Rt=uo("%"),_=uo("px"),ik=uo("vh"),ok=uo("vw"),Ap={...Rt,parse:e=>Rt.parse(e)/100,transform:e=>Rt.transform(e*100)},sk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),jp=e=>e===qr||e===_,Rp=(e,t)=>parseFloat(e.split(", ")[t]),Lp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Rp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Rp(o[1],e):0}},ak=new Set(["x","y","z"]),lk=ao.filter(e=>!ak.has(e));function uk(e){const t=[];return lk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Hr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Lp(4,13),y:Lp(5,14)};Hr.translateX=Hr.x;Hr.translateY=Hr.y;const hy=e=>t=>t.test(e),ck={test:e=>e==="auto",parse:e=>e},my=[qr,_,Rt,sn,ok,ik,ck],Op=e=>my.find(hy(e)),Yn=new Set;let Uu=!1,Hu=!1;function gy(){if(Hu){const e=Array.from(Yn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=uk(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Hu=!1,Uu=!1,Yn.forEach(e=>e.complete()),Yn.clear()}function yy(){Yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Hu=!0)})}function dk(){yy(),gy()}class kd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yn.add(this),Uu||(Uu=!0,W.read(yy),W.resolveKeyframes(gy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ai=e=>Math.round(e*1e5)/1e5,Cd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fk(e){return e==null}const pk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pd=(e,t)=>n=>!!(typeof n=="string"&&pk.test(n)&&n.startsWith(e)||t&&!fk(n)&&Object.prototype.hasOwnProperty.call(n,t)),vy=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Cd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},hk=e=>En(0,255,e),ml={...qr,transform:e=>Math.round(hk(e))},Hn={test:Pd("rgb","red"),parse:vy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ml.transform(e)+", "+ml.transform(t)+", "+ml.transform(n)+", "+Ai(qi.transform(r))+")"};function mk(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Wu={test:Pd("#"),parse:mk,transform:Hn.transform},wr={test:Pd("hsl","hue"),parse:vy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Rt.transform(Ai(t))+", "+Rt.transform(Ai(n))+", "+Ai(qi.transform(r))+")"},je={test:e=>Hn.test(e)||Wu.test(e)||wr.test(e),parse:e=>Hn.test(e)?Hn.parse(e):wr.test(e)?wr.parse(e):Wu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Hn.transform(e):wr.transform(e)},gk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yk(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Cd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(gk))===null||n===void 0?void 0:n.length)||0)>0}const xy="number",wy="color",vk="var",xk="var(",Mp="${}",wk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ji(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(wk,l=>(je.test(l)?(r.color.push(o),i.push(wy),n.push(je.parse(l))):l.startsWith(xk)?(r.var.push(o),i.push(vk),n.push(l)):(r.number.push(o),i.push(xy),n.push(parseFloat(l))),++o,Mp)).split(Mp);return{values:n,split:a,indexes:r,types:i}}function Sy(e){return Ji(e).values}function ky(e){const{split:t,types:n}=Ji(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===xy?o+=Ai(i[s]):a===wy?o+=je.transform(i[s]):o+=i[s]}return o}}const Sk=e=>typeof e=="number"?0:e;function kk(e){const t=Sy(e);return ky(e)(t.map(Sk))}const bn={test:yk,parse:Sy,createTransformer:ky,getAnimatableNone:kk},Ck=new Set(["brightness","contrast","saturate","opacity"]);function Pk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Cd)||[];if(!r)return e;const i=n.replace(r,"");let o=Ck.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Tk=/\b([a-z-]*)\(.*?\)/gu,Ku={...bn,getAnimatableNone:e=>{const t=e.match(Tk);return t?t.map(Pk).join(" "):e}},Ek={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,backgroundPositionX:_,backgroundPositionY:_},bk={rotate:sn,rotateX:sn,rotateY:sn,rotateZ:sn,scale:Do,scaleX:Do,scaleY:Do,scaleZ:Do,skew:sn,skewX:sn,skewY:sn,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:qi,originX:Ap,originY:Ap,originZ:_},_p={...qr,transform:Math.round},Td={...Ek,...bk,zIndex:_p,size:_,fillOpacity:qi,strokeOpacity:qi,numOctaves:_p},Ak={...Td,color:je,backgroundColor:je,outlineColor:je,fill:je,stroke:je,borderColor:je,borderTopColor:je,borderRightColor:je,borderBottomColor:je,borderLeftColor:je,filter:Ku,WebkitFilter:Ku},Ed=e=>Ak[e];function Cy(e,t){let n=Ed(e);return n!==Ku&&(n=bn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const jk=new Set(["auto","none","0"]);function Rk(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!jk.has(o)&&Ji(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Cy(n,i)}class Py extends kd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Sd(u))){const c=py(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!sk.has(r)||t.length!==2)return;const[i,o]=t,s=Op(i),a=Op(o);if(s!==a)if(jp(s)&&jp(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)ZS(t[i])&&r.push(i);r.length&&Rk(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Hr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function bd(e){return typeof e=="function"}let ls;function Lk(){ls=void 0}const Lt={now:()=>(ls===void 0&&Lt.set(ke.isProcessing||KS.useManualTiming?ke.timestamp:performance.now()),ls),set:e=>{ls=e,queueMicrotask(Lk)}},Dp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(bn.test(e)||e==="0")&&!e.startsWith("url("));function Ok(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Mk(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Dp(i,t),a=Dp(o,t);return!s||!a?!1:Ok(e)||(n==="spring"||bd(n))&&r}const _k=40;class Ty{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Lt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>_k?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&dk(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Lt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Mk(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(Pa(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Ey(e,t){return t?e*(1e3/t):0}const Dk=5;function by(e,t,n){const r=Math.max(t-Dk,0);return Ey(n-e(r),t-r)}const gl=.001,zk=.01,Nk=10,Vk=.05,Ik=1;function Bk({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=En(Vk,Ik,s),e=En(zk,Nk,Ut(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,v=Gu(u,s),y=Math.exp(-d);return gl-f/v*y},o=u=>{const d=u*s*e,f=d*n+n,v=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-d),x=Gu(Math.pow(u,2),s);return(-i(u)+gl>0?-1:1)*((f-v)*y)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-gl+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=$k(i,o,a);if(e=$t(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const Fk=12;function $k(e,t,n){let r=n;for(let i=1;i<Fk;i++)r=r-e(r)/t(r);return r}function Gu(e,t){return e*Math.sqrt(1-t*t)}const Uk=["duration","bounce"],Hk=["stiffness","damping","mass"];function zp(e,t){return t.some(n=>e[n]!==void 0)}function Wk(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!zp(e,Hk)&&zp(e,Uk)){const n=Bk(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Ay({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=Wk({...r,velocity:-Ut(r.velocity||0)}),v=d||0,y=l/(2*Math.sqrt(a*u)),x=o-i,k=Ut(Math.sqrt(a/u)),h=Math.abs(x)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let p;if(y<1){const m=Gu(k,y);p=w=>{const P=Math.exp(-y*k*w);return o-P*((v+y*k*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(y===1)p=m=>o-Math.exp(-k*m)*(x+(v+k*x)*m);else{const m=k*Math.sqrt(y*y-1);p=w=>{const P=Math.exp(-y*k*w),T=Math.min(m*w,300);return o-P*((v+y*k*x)*Math.sinh(T)+m*x*Math.cosh(T))/m}}return{calculatedDuration:f&&c||null,next:m=>{const w=p(m);if(f)s.done=m>=c;else{let P=0;y<1&&(P=m===0?$t(v):by(p,m,w));const T=Math.abs(P)<=n,E=Math.abs(o-w)<=t;s.done=T&&E}return s.value=s.done?o:w,s}}}function Np({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},v=b=>a!==void 0&&b<a||l!==void 0&&b>l,y=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=n*t;const k=d+x,h=s===void 0?k:s(k);h!==k&&(x=h-d);const p=b=>-x*Math.exp(-b/r),m=b=>h+p(b),w=b=>{const V=p(b),R=m(b);f.done=Math.abs(V)<=u,f.value=f.done?h:R};let P,T;const E=b=>{v(f.value)&&(P=b,T=Ay({keyframes:[f.value,y(f.value)],velocity:by(m,b,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return E(0),{calculatedDuration:null,next:b=>{let V=!1;return!T&&P===void 0&&(V=!0,w(b),E(b)),P!==void 0&&b>=P?T.next(b-P):(!V&&w(b),f)}}}const Kk=lo(.42,0,1,1),Gk=lo(0,0,.58,1),jy=lo(.42,0,.58,1),Yk=e=>Array.isArray(e)&&typeof e[0]!="number",Vp={linear:_e,easeIn:Kk,easeInOut:jy,easeOut:Gk,circIn:wd,circInOut:ly,circOut:ay,backIn:xd,backInOut:oy,backOut:iy,anticipate:sy},Ip=e=>{if(Array.isArray(e)){$u(e.length===4);const[t,n,r,i]=e;return lo(t,n,r,i)}else if(typeof e=="string")return $u(Vp[e]!==void 0),Vp[e];return e},Xk=(e,t)=>n=>t(e(n)),Ht=(...e)=>e.reduce(Xk),Wr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},re=(e,t,n)=>e+(t-e)*n;function yl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qk({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=yl(l,a,e+1/3),o=yl(l,a,e),s=yl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function $s(e,t){return n=>n>0?t:e}const vl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},qk=[Wu,Hn,wr],Jk=e=>qk.find(t=>t.test(e));function Bp(e){const t=Jk(e);if(!t)return!1;let n=t.parse(e);return t===wr&&(n=Qk(n)),n}const Fp=(e,t)=>{const n=Bp(e),r=Bp(t);if(!n||!r)return $s(e,t);const i={...n};return o=>(i.red=vl(n.red,r.red,o),i.green=vl(n.green,r.green,o),i.blue=vl(n.blue,r.blue,o),i.alpha=re(n.alpha,r.alpha,o),Hn.transform(i))},Yu=new Set(["none","hidden"]);function Zk(e,t){return Yu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function e2(e,t){return n=>re(e,t,n)}function Ad(e){return typeof e=="number"?e2:typeof e=="string"?Sd(e)?$s:je.test(e)?Fp:r2:Array.isArray(e)?Ry:typeof e=="object"?je.test(e)?Fp:t2:$s}function Ry(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Ad(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function t2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ad(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function n2(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const r2=(e,t)=>{const n=bn.createTransformer(t),r=Ji(e),i=Ji(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Yu.has(e)&&!i.values.length||Yu.has(t)&&!r.values.length?Zk(e,t):Ht(Ry(n2(r,i),i.values),n):$s(e,t)};function Ly(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?re(e,t,n):Ad(e)(e,t)}function i2(e,t,n){const r=[],i=n||Ly,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||_e:t;a=Ht(l,a)}r.push(a)}return r}function o2(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if($u(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=i2(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Wr(e[c],e[c+1],u);return s[c](d)};return n?u=>l(En(e[0],e[o-1],u)):l}function s2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Wr(0,t,r);e.push(re(n,1,i))}}function a2(e){const t=[0];return s2(t,e.length-1),t}function l2(e,t){return e.map(n=>n*t)}function u2(e,t){return e.map(()=>t||jy).splice(0,e.length-1)}function Us({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Yk(r)?r.map(Ip):Ip(r),o={done:!1,value:t[0]},s=l2(n&&n.length===t.length?n:a2(t),e),a=o2(s,t,{ease:Array.isArray(i)?i:u2(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const $p=2e4;function c2(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<$p;)t+=n,r=e.next(t);return t>=$p?1/0:t}const d2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>Tn(t),now:()=>ke.isProcessing?ke.timestamp:Lt.now()}},f2={decay:Np,inertia:Np,tween:Us,keyframes:Us,spring:Ay},p2=e=>e/100;class jd extends Ty{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||kd,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=bd(n)?n:f2[n]||Us;let l,u;a!==Us&&typeof t[0]!="number"&&(l=Ht(p2,Ly(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=c2(c));const{calculatedDuration:d}=c,f=d+i,v=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:v,repeatType:y,repeatDelay:x,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),p=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let m=this.currentTime,w=o;if(v){const b=Math.min(this.currentTime,c)/d;let V=Math.floor(b),R=b%1;!R&&b>=1&&(R=1),R===1&&V--,V=Math.min(V,v+1),!!(V%2)&&(y==="reverse"?(R=1-R,x&&(R-=x/d)):y==="mirror"&&(w=s)),m=En(0,1,R)*d}const P=p?{done:!1,value:l[0]}:w.next(m);a&&(P.value=a(P.value));let{done:T}=P;!p&&u!==null&&(T=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&i!==void 0&&(P.value=Pa(l,this.options,i)),k&&k(P.value),E&&this.finish(),P}get duration(){const{resolved:t}=this;return t?Ut(t.calculatedDuration):0}get time(){return Ut(this.currentTime)}set time(t){t=$t(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ut(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=d2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Oy=new Set(["opacity","clipPath","filter","transform"]),My=e=>Array.isArray(e)&&typeof e[0]=="number",h2=10,m2=(e,t)=>{let n="";const r=Math.max(Math.round(t/h2),2);for(let i=0;i<r;i++)n+=e(Wr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Rd(e){let t;return()=>(t===void 0&&(t=e()),t)}const g2={linearEasing:void 0};function y2(e,t){const n=Rd(e);return()=>{var r;return(r=g2[t])!==null&&r!==void 0?r:n()}}const Hs=y2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function _y(e){return!!(typeof e=="function"&&Hs()||!e||typeof e=="string"&&(e in Xu||Hs())||My(e)||Array.isArray(e)&&e.every(_y))}const gi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Xu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gi([0,.65,.55,1]),circOut:gi([.55,0,1,.45]),backIn:gi([.31,.01,.66,-.59]),backOut:gi([.33,1.53,.69,.99])};function Dy(e,t){if(e)return typeof e=="function"&&Hs()?m2(e,t):My(e)?gi(e):Array.isArray(e)?e.map(n=>Dy(n,t)||Xu.easeOut):Xu[e]}function v2(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Dy(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Up(e,t){e.timeline=t,e.onfinish=null}const x2=Rd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ws=10,w2=2e4;function S2(e){return bd(e.type)||e.type==="spring"||!_y(e.ease)}function k2(e,t){const n=new jd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<w2;)r=n.sample(o),i.push(r.value),o+=Ws;return{times:void 0,keyframes:i,duration:o-Ws,ease:"linear"}}const zy={anticipate:sy,backInOut:oy,circInOut:ly};function C2(e){return e in zy}class Hp extends Ty{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Py(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&Hs()&&C2(s)&&(s=zy[s]),S2(this.options)){const{onComplete:f,onUpdate:v,motionValue:y,element:x,...k}=this.options,h=k2(t,k);t=h.keyframes,t.length===1&&(t[1]=t[0]),i=h.duration,o=h.times,s=h.ease,a="keyframes"}const d=v2(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Up(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(Pa(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Ut(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Ut(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=$t(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return _e;const{animation:r}=n;Up(r,t)}return _e}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...v}=this.options,y=new jd({...v,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=$t(this.time);u.setWithVelocity(y.sample(x-Ws).value,y.sample(x).value,Ws)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return x2()&&r&&Oy.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const P2=Rd(()=>window.ScrollTimeline!==void 0);class T2{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>P2()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function E2({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Ld=(e,t,n,r={},i,o)=>s=>{const a=vd(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-$t(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};E2(a)||(c={...c,...WS(e,c)}),c.duration&&(c.duration=$t(c.duration)),c.repeatDelay&&(c.repeatDelay=$t(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const f=Pa(c.keyframes,a);if(f!==void 0)return W.update(()=>{c.onUpdate(f),c.onComplete()}),new T2([])}return!o&&Hp.supports(c)?new Hp(c):new jd(c)},b2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),A2=e=>Fu(e)?e[e.length-1]||0:e;function co(e,t){e.indexOf(t)===-1&&e.push(t)}function Od(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Md{constructor(){this.subscriptions=[]}add(t){return co(this.subscriptions,t),()=>Od(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wp=30,j2=e=>!isNaN(parseFloat(e));class Ny{constructor(t,n={}){this.version="11.9.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Lt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Lt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=j2(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Md);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Wp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wp);return Ey(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zi(e,t){return new Ny(e,t)}function R2(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zi(n))}function L2(e,t){const n=Ca(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=A2(o[s]);R2(e,s,a)}}const Ta=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),O2="framerAppearId",Vy="data-"+Ta(O2);function Iy(e){return e.props[Vy]}function By(e){if(Ln.has(e))return"transform";if(Oy.has(e))return Ta(e)}class M2 extends Ny{constructor(){super(...arguments),this.values=[]}add(t){const n=By(t);n&&(co(this.values,n),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}const Oe=e=>!!(e&&e.getVelocity);function _2(e){return!!(Oe(e)&&e.add)}function Qu(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");if(!r&&!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&(r=new M2("auto"),e.addValue("willChange",r)),_2(r))return r.add(t)}function D2({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Fy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),v=l[d];if(v===void 0||c&&D2(c,d))continue;const y={delay:n,...vd(s||{},d)};let x=!1;if(window.MotionHandoffAnimation){const h=Iy(e);if(h){const p=window.MotionHandoffAnimation(h,d,W);p!==null&&(y.startTime=p,x=!0)}}Qu(e,d),f.start(Ld(d,f,v,e.shouldReduceMotion&&Ln.has(d)?{type:!1}:y,e,x));const k=f.animation;k&&u.push(k)}return a&&Promise.all(u).then(()=>{W.update(()=>{a&&L2(e,a)})}),u}function qu(e,t,n={}){var r;const i=Ca(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(Fy(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return z2(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function z2(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(N2).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(qu(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function N2(e,t){return e.sortNodePosition(t)}function V2(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>qu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=qu(e,t,n);else{const i=typeof t=="function"?Ca(e,t,n.custom):t;r=Promise.all(Fy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const I2=yd.length;function $y(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?$y(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<I2;n++){const r=yd[n],i=e.props[r];(Qi(i)||i===!1)&&(t[r]=i)}return t}const B2=[...gd].reverse(),F2=gd.length;function $2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>V2(e,n,r)))}function U2(e){let t=$2(e),n=Kp(),r=!0;const i=l=>(u,c)=>{var d;const f=Ca(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:v,transitionEnd:y,...x}=f;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=$y(e.parent)||{},d=[],f=new Set;let v={},y=1/0;for(let k=0;k<F2;k++){const h=B2[k],p=n[h],m=u[h]!==void 0?u[h]:c[h],w=Qi(m),P=h===l?p.isActive:null;P===!1&&(y=k);let T=m===c[h]&&m!==u[h]&&w;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),p.protectedKeys={...v},!p.isActive&&P===null||!m&&!p.prevProp||Xi(m)||typeof m=="boolean")continue;const E=H2(p.prevProp,m);let b=E||h===l&&p.isActive&&!T&&w||k>y&&w,V=!1;const R=Array.isArray(m)?m:[m];let D=R.reduce(i(h),{});P===!1&&(D={});const{prevResolvedValues:J={}}=p,pe={...J,...D},ue=te=>{b=!0,f.has(te)&&(V=!0,f.delete(te)),p.needsAnimating[te]=!0;const L=e.getValue(te);L&&(L.liveStyle=!1)};for(const te in pe){const L=D[te],M=J[te];if(v.hasOwnProperty(te))continue;let z=!1;Fu(L)&&Fu(M)?z=!Zg(L,M):z=L!==M,z?L!=null?ue(te):f.add(te):L!==void 0&&f.has(te)?ue(te):p.protectedKeys[te]=!0}p.prevProp=m,p.prevResolvedValues=D,p.isActive&&(v={...v,...D}),r&&e.blockInitialAnimation&&(b=!1),b&&(!(T&&E)||V)&&d.push(...R.map(te=>({animation:te,options:{type:h}})))}if(f.size){const k={};f.forEach(h=>{const p=e.getBaseTarget(h),m=e.getValue(h);m&&(m.liveStyle=!0),k[h]=p??null}),d.push({animation:k})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var v;return(v=f.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Kp(),r=!0}}}function H2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Zg(t,e):!1}function Dn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kp(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}class On{constructor(t){this.isMounted=!1,this.node=t}update(){}}class W2 extends On{constructor(t){super(t),t.animationState||(t.animationState=U2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xi(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let K2=0;class G2 extends On{constructor(){super(...arguments),this.id=K2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Y2={animation:{Feature:W2},exit:{Feature:G2}},Uy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ea(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const X2=e=>t=>Uy(t)&&e(t,Ea(t));function Bt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Wt(e,t,n,r){return Bt(e,t,X2(n),r)}const Gp=(e,t)=>Math.abs(e-t);function Q2(e,t){const n=Gp(e.x,t.x),r=Gp(e.y,t.y);return Math.sqrt(n**2+r**2)}class Hy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=wl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,v=Q2(d.offset,{x:0,y:0})>=3;if(!f&&!v)return;const{point:y}=d,{timestamp:x}=ke;this.history.push({...y,timestamp:x});const{onStart:k,onMove:h}=this.handlers;f||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=xl(f,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=wl(d.type==="pointercancel"?this.lastMoveEventInfo:xl(f,this.transformPagePoint),this.history);this.startEvent&&v&&v(d,k),y&&y(d,k)},!Uy(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ea(t),a=xl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ke;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,wl(a,this.history)),this.removeListeners=Ht(Wt(this.contextWindow,"pointermove",this.handlePointerMove),Wt(this.contextWindow,"pointerup",this.handlePointerUp),Wt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Tn(this.updatePoint)}}function xl(e,t){return t?{point:t(e.point)}:e}function Yp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wl({point:e},t){return{point:e,delta:Yp(e,Wy(t)),offset:Yp(e,q2(t)),velocity:J2(t,.1)}}function q2(e){return e[0]}function Wy(e){return e[e.length-1]}function J2(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Wy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>$t(t)));)n--;if(!r)return{x:0,y:0};const o=Ut(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ky(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Xp=Ky("dragHorizontal"),Qp=Ky("dragVertical");function Gy(e){let t=!1;if(e==="y")t=Qp();else if(e==="x")t=Xp();else{const n=Xp(),r=Qp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Yy(){const e=Gy(!0);return e?(e(),!1):!0}function Sr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Xy=1e-4,Z2=1-Xy,eC=1+Xy,Qy=.01,tC=0-Qy,nC=0+Qy;function Je(e){return e.max-e.min}function rC(e,t,n){return Math.abs(e-t)<=n}function qp(e,t,n,r=.5){e.origin=r,e.originPoint=re(t.min,t.max,e.origin),e.scale=Je(n)/Je(t),e.translate=re(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Z2&&e.scale<=eC||isNaN(e.scale))&&(e.scale=1),(e.translate>=tC&&e.translate<=nC||isNaN(e.translate))&&(e.translate=0)}function ji(e,t,n,r){qp(e.x,t.x,n.x,r?r.originX:void 0),qp(e.y,t.y,n.y,r?r.originY:void 0)}function Jp(e,t,n){e.min=n.min+t.min,e.max=e.min+Je(t)}function iC(e,t,n){Jp(e.x,t.x,n.x),Jp(e.y,t.y,n.y)}function Zp(e,t,n){e.min=t.min-n.min,e.max=e.min+Je(t)}function Ri(e,t,n){Zp(e.x,t.x,n.x),Zp(e.y,t.y,n.y)}function oC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?re(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?re(n,e,r.max):Math.min(e,n)),e}function eh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function sC(e,{top:t,left:n,bottom:r,right:i}){return{x:eh(e.x,n,i),y:eh(e.y,t,r)}}function th(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function aC(e,t){return{x:th(e.x,t.x),y:th(e.y,t.y)}}function lC(e,t){let n=.5;const r=Je(e),i=Je(t);return i>r?n=Wr(t.min,t.max-r,e.min):r>i&&(n=Wr(e.min,e.max-i,t.min)),En(0,1,n)}function uC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ju=.35;function cC(e=Ju){return e===!1?e=0:e===!0&&(e=Ju),{x:nh(e,"left","right"),y:nh(e,"top","bottom")}}function nh(e,t,n){return{min:rh(e,t),max:rh(e,n)}}function rh(e,t){return typeof e=="number"?e:e[t]||0}const ih=()=>({translate:0,scale:1,origin:0,originPoint:0}),kr=()=>({x:ih(),y:ih()}),oh=()=>({min:0,max:0}),ae=()=>({x:oh(),y:oh()});function nt(e){return[e("x"),e("y")]}function qy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function dC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function fC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Sl(e){return e===void 0||e===1}function Zu({scale:e,scaleX:t,scaleY:n}){return!Sl(e)||!Sl(t)||!Sl(n)}function Vn(e){return Zu(e)||Jy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Jy(e){return sh(e.x)||sh(e.y)}function sh(e){return e&&e!=="0%"}function Ks(e,t,n){const r=e-n,i=t*r;return n+i}function ah(e,t,n,r,i){return i!==void 0&&(e=Ks(e,i,r)),Ks(e,n,r)+t}function ec(e,t=0,n=1,r,i){e.min=ah(e.min,t,n,r,i),e.max=ah(e.max,t,n,r,i)}function Zy(e,{x:t,y:n}){ec(e.x,t.translate,t.scale,t.originPoint),ec(e.y,n.translate,n.scale,n.originPoint)}const lh=.999999999999,uh=1.0000000000001;function pC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Pr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Zy(e,s)),r&&Vn(o.latestValues)&&Pr(e,o.latestValues))}t.x<uh&&t.x>lh&&(t.x=1),t.y<uh&&t.y>lh&&(t.y=1)}function Cr(e,t){e.min=e.min+t,e.max=e.max+t}function ch(e,t,n,r,i=.5){const o=re(e.min,e.max,i);ec(e,t,n,o,r)}function Pr(e,t){ch(e.x,t.x,t.scaleX,t.scale,t.originX),ch(e.y,t.y,t.scaleY,t.scale,t.originY)}function e1(e,t){return qy(fC(e.getBoundingClientRect(),t))}function hC(e,t,n){const r=e1(e,n),{scroll:i}=t;return i&&(Cr(r.x,i.offset.x),Cr(r.y,i.offset.y)),r}const t1=({current:e})=>e?e.ownerDocument.defaultView:null,mC=new WeakMap;class gC{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ea(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:v,onDragStart:y}=this.getProps();if(f&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Gy(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nt(k=>{let h=this.getAxisMotionValue(k).get()||0;if(Rt.test(h)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[k];m&&(h=Je(m)*(parseFloat(h)/100))}}this.originPoint[k]=h}),y&&W.postRender(()=>y(c,d)),Qu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:v,onDirectionLock:y,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:k}=d;if(v&&this.currentDirection===null){this.currentDirection=yC(k),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>nt(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Hy(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:t1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&W.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=oC(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Sr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=sC(i.layoutBox,n):this.constraints=!1,this.elastic=cC(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&nt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=uC(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Sr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=hC(r,i.root,this.visualElement.getTransformPagePoint());let s=aC(i.layout.layoutBox,o);if(n){const a=n(dC(s));this.hasMutatedConstraints=!!a,a&&(s=qy(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=nt(c=>{if(!zo(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Qu(this.visualElement,t),r.start(Ld(t,r,0,n,this.visualElement,!1))}stopAnimation(){nt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){nt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){nt(n=>{const{drag:r}=this.getProps();if(!zo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-re(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Sr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};nt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=lC({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nt(s=>{if(!zo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(re(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;mC.set(this.visualElement,this);const t=this.visualElement.current,n=Wt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Sr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const s=Bt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(nt(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Ju,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function zo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function yC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class vC extends On{constructor(t){super(t),this.removeGroupControls=_e,this.removeListeners=_e,this.controls=new gC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_e}unmount(){this.removeGroupControls(),this.removeListeners()}}const dh=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class xC extends On{constructor(){super(...arguments),this.removePointerDownListener=_e}onPointerDown(t){this.session=new Hy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:t1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:dh(t),onStart:dh(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&W.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Wt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ba=A.createContext(null);function wC(){const e=A.useContext(ba);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=A.useId();A.useEffect(()=>r(i),[]);const o=A.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const _d=A.createContext({}),n1=A.createContext({}),us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ui={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=fh(e,t.target.x),r=fh(e,t.target.y);return`${n}% ${r}%`}},SC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=bn.parse(e);if(i.length>5)return r;const o=bn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=re(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Gs={};function kC(e){Object.assign(Gs,e)}const{schedule:Dd,cancel:Cb}=ey(queueMicrotask,!1);class CC extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;kC(PC),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),us.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||W.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Dd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function r1(e){const[t,n]=wC(),r=A.useContext(_d);return g.jsx(CC,{...e,layoutGroup:r,switchLayoutGroup:A.useContext(n1),isPresent:t,safeToRemove:n})}const PC={borderRadius:{...ui,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ui,borderTopRightRadius:ui,borderBottomLeftRadius:ui,borderBottomRightRadius:ui,boxShadow:SC},i1=["TopLeft","TopRight","BottomLeft","BottomRight"],TC=i1.length,ph=e=>typeof e=="string"?parseFloat(e):e,hh=e=>typeof e=="number"||_.test(e);function EC(e,t,n,r,i,o){i?(e.opacity=re(0,n.opacity!==void 0?n.opacity:1,bC(r)),e.opacityExit=re(t.opacity!==void 0?t.opacity:1,0,AC(r))):o&&(e.opacity=re(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<TC;s++){const a=`border${i1[s]}Radius`;let l=mh(t,a),u=mh(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||hh(l)===hh(u)?(e[a]=Math.max(re(ph(l),ph(u),r),0),(Rt.test(u)||Rt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=re(t.rotate||0,n.rotate||0,r))}function mh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const bC=o1(0,.5,ay),AC=o1(.5,.95,_e);function o1(e,t,n){return r=>r<e?0:r>t?1:n(Wr(e,t,r))}function gh(e,t){e.min=t.min,e.max=t.max}function tt(e,t){gh(e.x,t.x),gh(e.y,t.y)}function yh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function vh(e,t,n,r,i){return e-=t,e=Ks(e,1/n,r),i!==void 0&&(e=Ks(e,1/i,r)),e}function jC(e,t=0,n=1,r=.5,i,o=e,s=e){if(Rt.test(t)&&(t=parseFloat(t),t=re(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=re(o.min,o.max,r);e===o&&(a-=t),e.min=vh(e.min,t,n,a,i),e.max=vh(e.max,t,n,a,i)}function xh(e,t,[n,r,i],o,s){jC(e,t[n],t[r],t[i],t.scale,o,s)}const RC=["x","scaleX","originX"],LC=["y","scaleY","originY"];function wh(e,t,n,r){xh(e.x,t,RC,n?n.x:void 0,r?r.x:void 0),xh(e.y,t,LC,n?n.y:void 0,r?r.y:void 0)}function Sh(e){return e.translate===0&&e.scale===1}function s1(e){return Sh(e.x)&&Sh(e.y)}function kh(e,t){return e.min===t.min&&e.max===t.max}function OC(e,t){return kh(e.x,t.x)&&kh(e.y,t.y)}function Ch(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function a1(e,t){return Ch(e.x,t.x)&&Ch(e.y,t.y)}function Ph(e){return Je(e.x)/Je(e.y)}function Th(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class MC{constructor(){this.members=[]}add(t){co(this.members,t),t.scheduleRender()}remove(t){if(Od(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _C(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:v,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const DC=(e,t)=>e.depth-t.depth;class zC{constructor(){this.children=[],this.isDirty=!1}add(t){co(this.children,t),this.isDirty=!0}remove(t){Od(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(DC),this.isDirty=!1,this.children.forEach(t)}}function cs(e){const t=Oe(e)?e.get():e;return b2(t)?t.toValue():t}function NC(e,t){const n=Lt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Tn(r),e(o-t))};return W.read(r,!0),()=>Tn(r)}function VC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function IC(e,t,n){const r=Oe(e)?e:Zi(e);return r.start(Ld("",r,t,n)),r.animation}const In={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},yi=typeof window<"u"&&window.MotionDebug!==void 0,kl=["","X","Y","Z"],BC={visibility:"hidden"},Eh=1e3;let FC=0;function Cl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function l1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Iy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&l1(r)}function u1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=FC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,yi&&(In.totalNodes=In.resolvedTargetDeltas=In.recalculatedProjection=0),this.nodes.forEach(HC),this.nodes.forEach(XC),this.nodes.forEach(QC),this.nodes.forEach(WC),yi&&window.MotionDebug.record(In)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new zC)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Md),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=VC(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=NC(f,250),us.hasAnimatedSinceResize&&(us.hasAnimatedSinceResize=!1,this.nodes.forEach(Ah))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||t5,{onLayoutAnimationStart:k,onLayoutAnimationComplete:h}=c.getProps(),p=!this.targetLayout||!a1(this.targetLayout,y)||v,m=!f&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const w={...vd(x,"layout"),onPlay:k,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Ah(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qC),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&l1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(bh);return}this.isUpdating||this.nodes.forEach(GC),this.isUpdating=!1,this.nodes.forEach(YC),this.nodes.forEach($C),this.nodes.forEach(UC),this.clearAllSnapshots();const a=Lt.now();ke.delta=En(0,1e3/60,a-ke.timestamp),ke.timestamp=a,ke.isProcessing=!0,hl.update.process(ke),hl.preRender.process(ke),hl.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Dd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(KC),this.sharedNodes.forEach(JC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!s1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Vn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),n5(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return ae();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(r5))){const{scroll:c}=this.root;c&&(Cr(l.x,c.offset.x),Cr(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=ae();if(tt(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&tt(l,s),Cr(l.x,d.offset.x),Cr(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=ae();tt(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Pr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Vn(c.latestValues)&&Pr(l,c.latestValues)}return Vn(this.latestValues)&&Pr(l,this.latestValues),l}removeTransform(s){const a=ae();tt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Vn(u.latestValues))continue;Zu(u.latestValues)&&u.updateSnapshot();const c=ae(),d=u.measurePageBox();tt(c,d),wh(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Vn(this.latestValues)&&wh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Ri(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tt(this.target,this.layout.layoutBox),Zy(this.target,this.targetDelta)):tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Ri(this.relativeTargetOrigin,this.target,v.target),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}yi&&In.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||Jy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;tt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,v=this.treeScale.y;pC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ae());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yh(this.prevProjectionDelta.x,this.projectionDelta.x),yh(this.prevProjectionDelta.y,this.projectionDelta.y)),ji(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==v||!Th(this.projectionDelta.x,this.prevProjectionDelta.x)||!Th(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),yi&&In.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=kr(),this.projectionDelta=kr(),this.projectionDeltaWithTransform=kr()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=kr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ae(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,k=this.getStack(),h=!k||k.members.length<=1,p=!!(x&&!h&&this.options.crossfade===!0&&!this.path.some(e5));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const P=w/1e3;jh(d.x,s.x,P),jh(d.y,s.y,P),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ri(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZC(this.relativeTarget,this.relativeTargetOrigin,f,P),m&&OC(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=ae()),tt(m,this.relativeTarget)),x&&(this.animationValues=c,EC(c,u,this.latestValues,P,p,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{us.hasAnimatedSinceResize=!0,this.currentAnimation=IC(0,Eh,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Eh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&c1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ae();const d=Je(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Je(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}tt(a,l),Pr(a,c),ji(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new MC),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Cl("z",s,u,this.animationValues);for(let c=0;c<kl.length;c++)Cl(`rotate${kl[c]}`,s,u,this.animationValues),Cl(`skew${kl[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return BC;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=cs(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=cs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Vn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=_C(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:v,y}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Gs){if(f[x]===void 0)continue;const{correct:k,applyTo:h}=Gs[x],p=u.transform==="none"?f[x]:k(f[x],d);if(h){const m=h.length;for(let w=0;w<m;w++)u[h[w]]=p}else u[x]=p}return this.options.layoutId&&(u.pointerEvents=d===this?cs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(bh),this.root.sharedNodes.clear()}}}function $C(e){e.updateLayout()}function UC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?nt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],v=Je(f);f.min=r[d].min,f.max=f.min+v}):c1(o,n.layoutBox,r)&&nt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],v=Je(r[d]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+v)});const a=kr();ji(a,r,n.layoutBox);const l=kr();s?ji(l,e.applyTransform(i,!0),n.measuredBox):ji(l,r,n.layoutBox);const u=!s1(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:v}=d;if(f&&v){const y=ae();Ri(y,n.layoutBox,f.layoutBox);const x=ae();Ri(x,r,v.layoutBox),a1(y,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function HC(e){yi&&In.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function WC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function KC(e){e.clearSnapshot()}function bh(e){e.clearMeasurements()}function GC(e){e.isLayoutDirty=!1}function YC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ah(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function XC(e){e.resolveTargetDelta()}function QC(e){e.calcProjection()}function qC(e){e.resetSkewAndRotation()}function JC(e){e.removeLeadSnapshot()}function jh(e,t,n){e.translate=re(t.translate,0,n),e.scale=re(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rh(e,t,n,r){e.min=re(t.min,n.min,r),e.max=re(t.max,n.max,r)}function ZC(e,t,n,r){Rh(e.x,t.x,n.x,r),Rh(e.y,t.y,n.y,r)}function e5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const t5={duration:.45,ease:[.4,0,.1,1]},Lh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Oh=Lh("applewebkit/")&&!Lh("chrome/")?Math.round:_e;function Mh(e){e.min=Oh(e.min),e.max=Oh(e.max)}function n5(e){Mh(e.x),Mh(e.y)}function c1(e,t,n){return e==="position"||e==="preserve-aspect"&&!rC(Ph(t),Ph(n),.2)}function r5(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const i5=u1({attachResizeListener:(e,t)=>Bt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Pl={current:void 0},d1=u1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Pl.current){const e=new i5({});e.mount(window),e.setOptions({layoutScroll:!0}),Pl.current=e}return Pl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),o5={pan:{Feature:xC},drag:{Feature:vC,ProjectionNode:d1,MeasureLayout:r1}};function _h(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||Yy())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&W.postRender(()=>l(o,s))};return Wt(e.current,n,i,{passive:!e.getProps()[r]})}class s5 extends On{mount(){this.unmount=Ht(_h(this.node,!0),_h(this.node,!1))}unmount(){}}class a5 extends On{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ht(Bt(this.node.current,"focus",()=>this.onFocus()),Bt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const f1=(e,t)=>t?e===t?!0:f1(e,t.parentElement):!1;function Tl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ea(n))}class l5 extends On{constructor(){super(...arguments),this.removeStartListeners=_e,this.removeEndListeners=_e,this.removeAccessibleListeners=_e,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Wt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps(),f=!d&&!f1(this.node.current,a.target)?c:u;f&&W.update(()=>f(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Wt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ht(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Tl("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&W.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Bt(this.node.current,"keyup",s),Tl("down",(a,l)=>{this.startPress(a,l)})},n=Bt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Tl("cancel",(o,s)=>this.cancelPress(o,s))},i=Bt(this.node.current,"blur",r);this.removeAccessibleListeners=Ht(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&W.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Yy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&W.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Wt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Bt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ht(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tc=new WeakMap,El=new WeakMap,u5=e=>{const t=tc.get(e.target);t&&t(e)},c5=e=>{e.forEach(u5)};function d5({root:e,...t}){const n=e||document;El.has(n)||El.set(n,{});const r=El.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(c5,{root:e,...t})),r[i]}function f5(e,t,n){const r=d5(t);return tc.set(e,n),r.observe(e),()=>{tc.delete(e),r.unobserve(e)}}const p5={some:0,all:1};class h5 extends On{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:p5[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return f5(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(m5(t,n))&&this.startObserver()}unmount(){}}function m5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const g5={inView:{Feature:h5},tap:{Feature:l5},focus:{Feature:a5},hover:{Feature:s5}},y5={layout:{ProjectionNode:d1,MeasureLayout:r1}},zd=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Aa=A.createContext({}),Nd=typeof window<"u",p1=Nd?A.useLayoutEffect:A.useEffect,h1=A.createContext({strict:!1});let Dh=!1;function v5(e,t,n,r,i){var o;const{visualElement:s}=A.useContext(Aa),a=A.useContext(h1),l=A.useContext(ba),u=A.useContext(zd).reducedMotion,c=A.useRef();r=r||a.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const d=c.current,f=A.useContext(n1);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&w5(c.current,n,i,f),A.useInsertionEffect(()=>{d&&d.update(n,l)});const v=n[Vy],y=A.useRef(!!v&&!window.MotionHandoffIsComplete&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,v)));return p1(()=>{d&&(d.updateFeatures(),Dd.render(d.render),y.current&&d.animationState&&d.animationState.animateChanges())}),A.useEffect(()=>{d&&(!y.current&&d.animationState&&d.animationState.animateChanges(),y.current=!1,Dh||(Dh=!0,queueMicrotask(x5)))}),d}function x5(){window.MotionHandoffIsComplete=!0}function w5(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:m1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Sr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function m1(e){if(e)return e.options.allowProjection!==!1?e.projection:m1(e.parent)}function S5(e,t,n){return A.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Sr(n)&&(n.current=r))},[t])}function ja(e){return Xi(e.animate)||yd.some(t=>Qi(e[t]))}function g1(e){return!!(ja(e)||e.variants)}function k5(e,t){if(ja(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Qi(n)?n:void 0,animate:Qi(r)?r:void 0}}return e.inherit!==!1?t:{}}function C5(e){const{initial:t,animate:n}=k5(e,A.useContext(Aa));return A.useMemo(()=>({initial:t,animate:n}),[zh(t),zh(n)])}function zh(e){return Array.isArray(e)?e.join(" "):e}const Nh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Kr={};for(const e in Nh)Kr[e]={isEnabled:t=>Nh[e].some(n=>!!t[n])};function P5(e){for(const t in e)Kr[t]={...Kr[t],...e[t]}}const T5=Symbol.for("motionComponentSymbol");function E5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&P5(e);function o(a,l){let u;const c={...A.useContext(zd),...a,layoutId:b5(a)},{isStatic:d}=c,f=C5(a),v=r(a,d);if(!d&&Nd){A5();const y=j5(c);u=y.MeasureLayout,f.visualElement=v5(i,v,c,t,y.ProjectionNode)}return g.jsxs(Aa.Provider,{value:f,children:[u&&f.visualElement?g.jsx(u,{visualElement:f.visualElement,...c}):null,n(i,a,S5(v,f.visualElement,l),v,d,f.visualElement)]})}const s=A.forwardRef(o);return s[T5]=i,s}function b5({layoutId:e}){const t=A.useContext(_d).id;return t&&e!==void 0?t+"-"+e:e}function A5(e,t){A.useContext(h1).strict}function j5(e){const{drag:t,layout:n}=Kr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const R5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vd(e){return typeof e!="string"||e.includes("-")?!1:!!(R5.indexOf(e)>-1||/[A-Z]/u.test(e))}function y1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const v1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function x1(e,t,n,r){y1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(v1.has(i)?i:Ta(i),t.attrs[i])}function w1(e,{layout:t,layoutId:n}){return Ln.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Gs[e]||e==="opacity")}function Id(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Oe(i[s])||t.style&&Oe(t.style[s])||w1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function S1(e,t,n){const r=Id(e,t,n);for(const i in e)if(Oe(e[i])||Oe(t[i])){const o=ao.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Bd(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}function L5({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,o,s,a){const l={latestValues:M5(i,o,s,a?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(i,u,l)),l}const k1=e=>(t,n)=>{const r=A.useContext(Aa),i=A.useContext(ba),o=()=>L5(e,t,r,i,n);return n?o():Bd(o)};function O5(e,t){const n=By(t);n&&co(e,n)}function Vh(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const o=md(e,r[i]);if(o){const{transitionEnd:s,transition:a,...l}=o;n(l,s)}}}function M5(e,t,n,r,i){var o;const s={},a=[],l=r&&((o=e.style)===null||o===void 0?void 0:o.willChange)===void 0,u=i(e,{});for(const k in u)s[k]=cs(u[k]);let{initial:c,animate:d}=e;const f=ja(e),v=g1(e);t&&v&&!f&&e.inherit!==!1&&(c===void 0&&(c=t.initial),d===void 0&&(d=t.animate));let y=n?n.initial===!1:!1;y=y||c===!1;const x=y?d:c;return x&&typeof x!="boolean"&&!Xi(x)&&Vh(e,x,(k,h)=>{for(const p in k){let m=k[p];if(Array.isArray(m)){const w=y?m.length-1:0;m=m[w]}m!==null&&(s[p]=m)}for(const p in h)s[p]=h[p]}),l&&(d&&c!==!1&&!Xi(d)&&Vh(e,d,k=>{for(const h in k)O5(a,h)}),a.length&&(s.willChange=a.join(","))),s}const Fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),C1=()=>({...Fd(),attrs:{}}),P1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,_5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},D5=ao.length;function z5(e,t,n){let r="",i=!0;for(let o=0;o<D5;o++){const s=ao[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=P1(a,Td[s]);if(!l){i=!1;const c=_5[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function $d(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Ln.has(l)){s=!0;continue}else if(fy(l)){i[l]=u;continue}else{const c=P1(u,Td[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=z5(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}function Ih(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function N5(e,t,n){const r=Ih(t,e.x,e.width),i=Ih(n,e.y,e.height);return`${r} ${i}`}const V5={offset:"stroke-dashoffset",array:"stroke-dasharray"},I5={offset:"strokeDashoffset",array:"strokeDasharray"};function B5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?V5:I5;e[o.offset]=_.transform(-r);const s=_.transform(t),a=_.transform(n);e[o.array]=`${s} ${a}`}function Ud(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if($d(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:v,dimensions:y}=e;f.transform&&(y&&(v.transform=f.transform),delete f.transform),y&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=N5(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&B5(f,s,a,l,!1)}const Hd=e=>typeof e=="string"&&e.toLowerCase()==="svg",F5={useVisualState:k1({scrapeMotionValuesFromProps:S1,createRenderState:C1,onMount:(e,t,{renderState:n,latestValues:r})=>{W.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),W.render(()=>{Ud(n,r,Hd(t.tagName),e.transformTemplate),x1(t,n)})}})},$5={useVisualState:k1({applyWillChange:!0,scrapeMotionValuesFromProps:Id,createRenderState:Fd})};function T1(e,t,n){for(const r in t)!Oe(t[r])&&!w1(r,n)&&(e[r]=t[r])}function U5({transformTemplate:e},t){return A.useMemo(()=>{const n=Fd();return $d(n,t,e),Object.assign({},n.vars,n.style)},[t])}function H5(e,t){const n=e.style||{},r={};return T1(r,n,e),Object.assign(r,U5(e,t)),r}function W5(e,t){const n={},r=H5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const K5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ys(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||K5.has(e)}let E1=e=>!Ys(e);function G5(e){e&&(E1=t=>t.startsWith("on")?!Ys(t):e(t))}try{G5(require("@emotion/is-prop-valid").default)}catch{}function Y5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(E1(i)||n===!0&&Ys(i)||!t&&!Ys(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function X5(e,t,n,r){const i=A.useMemo(()=>{const o=C1();return Ud(o,t,Hd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};T1(o,e.style,e),i.style={...o,...i.style}}return i}function Q5(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Vd(n)?X5:W5)(r,o,s,n),u=Y5(r,typeof n=="string",e),c=n!==A.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=A.useMemo(()=>Oe(d)?d.get():d,[d]);return A.createElement(n,{...c,children:f})}}function q5(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Vd(r)?F5:$5,preloadedFeatures:e,useRender:Q5(i),createVisualElement:t,Component:r};return E5(s)}}const nc={current:null},b1={current:!1};function J5(){if(b1.current=!0,!!Nd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>nc.current=e.matches;e.addListener(t),t()}else nc.current=!1}function Z5(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Oe(i))e.addValue(r,i);else if(Oe(o))e.addValue(r,Zi(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Zi(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Bh=new WeakMap,eP=[...my,je,bn],tP=e=>eP.find(hy(e)),Fh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class nP{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Lt.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,W.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ja(n),this.isVariantNode=g1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const v=d[f];l[f]!==void 0&&Oe(v)&&v.set(l[f],!1)}}mount(t){this.current=t,Bh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),b1.current||J5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:nc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Bh.delete(this.current),this.projection&&this.projection.unmount(),Tn(this.notifyUpdate),Tn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Ln.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Kr){const n=Kr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Fh.length;r++){const i=Fh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Z5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Zi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(cy(i)||uy(i))?i=parseFloat(i):!tP(i)&&bn.test(n)&&(i=Cy(t,n)),this.setBaseTarget(t,Oe(i)?i.get():i)),Oe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=md(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Oe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Md),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class A1 extends nP{constructor(){super(...arguments),this.KeyframeResolver=Py}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function rP(e){return window.getComputedStyle(e)}class iP extends A1{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=y1}readValueFromInstance(t,n){if(Ln.has(n)){const r=Ed(n);return r&&r.default||0}else{const r=rP(t),i=(fy(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return e1(t,n)}build(t,n,r){$d(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Id(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Oe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class oP extends A1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ae}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ln.has(n)){const r=Ed(n);return r&&r.default||0}return n=v1.has(n)?n:Ta(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return S1(t,n,r)}build(t,n,r){Ud(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){x1(t,n,r,i)}mount(t){this.isSVGTag=Hd(t.tagName),super.mount(t)}}const sP=(e,t)=>Vd(e)?new oP(t):new iP(t,{allowProjection:e!==A.Fragment}),aP=q5({...Y2,...g5,...o5,...y5},sP),Ee=BS(aP);class lP extends A.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uP({children:e,isPresent:t}){const n=A.useId(),r=A.useRef(null),i=A.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=A.useContext(zd);return A.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),g.jsx(lP,{isPresent:t,childRef:r,sizeRef:i,children:A.cloneElement(e,{ref:r})})}const cP=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Bd(dP),l=A.useId(),u=A.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?[Math.random()]:[n]);return A.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),A.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=g.jsx(uP,{isPresent:n,children:e})),g.jsx(ba.Provider,{value:u,children:e})};function dP(){return new Map}const No=e=>e.key||"";function $h(e){const t=[];return A.Children.forEach(e,n=>{A.isValidElement(n)&&t.push(n)}),t}const j1=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=A.useMemo(()=>$h(e),[e]),l=a.map(No),u=A.useRef(!0),c=A.useRef(a),d=Bd(()=>new Map),[f,v]=A.useState(a),[y,x]=A.useState(a);p1(()=>{u.current=!1,c.current=a;for(let p=0;p<y.length;p++){const m=No(y[p]);l.includes(m)?d.delete(m):d.get(m)!==!0&&d.set(m,!1)}},[y,l.length,l.join("-")]);const k=[];if(a!==f){let p=[...a];for(let m=0;m<y.length;m++){const w=y[m],P=No(w);l.includes(P)||(p.splice(m,0,w),k.push(w))}s==="wait"&&k.length&&(p=k),x($h(p)),v(a);return}const{forceRender:h}=A.useContext(_d);return g.jsx(g.Fragment,{children:y.map(p=>{const m=No(p),w=a===y||l.includes(m),P=()=>{if(d.has(m))d.set(m,!0);else return;let T=!0;d.forEach(E=>{E||(T=!1)}),T&&(h==null||h(),x(c.current),i&&i())};return g.jsx(cP,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:s,onExitComplete:w?void 0:P,children:p},m)})})};var R1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uh=Ce.createContext&&Ce.createContext(R1),fP=["attr","size","title"];function pP(e,t){if(e==null)return{};var n=hP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hP(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}function Hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hh(Object(n),!0).forEach(function(r){mP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mP(e,t,n){return t=gP(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gP(e){var t=yP(e,"string");return typeof t=="symbol"?t:t+""}function yP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L1(e){return e&&e.map((t,n)=>Ce.createElement(t.tag,Qs({key:n},t.attr),L1(t.child)))}function Ot(e){return t=>Ce.createElement(vP,Xs({attr:Qs({},e.attr)},t),L1(e.child))}function vP(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=pP(e,fP),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ce.createElement("svg",Xs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Qs(Qs({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ce.createElement("title",null,o),e.children)};return Uh!==void 0?Ce.createElement(Uh.Consumer,null,n=>t(n)):t(R1)}const Me={secondary:"#778da9",accent:"#e0e1dd",richBlack:"#0d1b2aff",platinum:"#e0e1ddff",indicatorInactive:"#c4c4c4",indicatorActive:"#415a77"},qs={large:"24px",medium:"18px",small:"16px"},xP=S.div`
  top: 10px;
  box-shadow: 0 0 10px ${Me.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.scrolled?"10px":"20px"};
  background: ${e=>e.scrolled?Me.richBlack:"rgba(13, 28, 43, 0.27)"};
  color: ${Me.accent};
  transition: background 0.3s ease, padding 0.3s ease, width 0.3s ease;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: ${e=>e.scrolled?"30%":"60%"};
  border-radius: 25px;
  z-index: 3;

  @media (max-width: 1024px) {
    width: ${e=>e.scrolled?"40%":"60%"};
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    flex-direction: row;
    padding: ${e=>e.scrolled?"10px":"15px"};
    width: auto;
    border-radius: 0px;
  }
`,wP=S.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,SP=S.span`
  font-size: ${qs.large};
  font-weight: bold;
  color: ${Me.accent};
  transition: opacity 0.3s ease;
  opacity: ${e=>e.scrolled?"0":"1"};
  display: ${e=>e.scrolled?"none":"inline-block"};

  @media (max-width: 768px) {
    font-size: ${qs.medium};
  }
`,kP=S.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: ${e=>e.scrolled?"block":"none"};

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`,CP=S.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`,Vo=S.a`
  color: ${Me.accent};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: ${qs.small};
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${Me.secondary};
    
  }

  &.active {
    color: #000;
    font-weight:700;
    background-color: ${Me.secondary};
    border:0.5px solid ${Me.platinum};
  }
`,PP=S.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${e=>e.open?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding:50px 10px;
  @media (max-width: 768px) {
    width: 200px;
    gap:20px;
  }
`,Io=S.a`
display:flex;
  font-size: 1rem;
  text-decoration: none;
  color: #f0f0f0;
  font-weight: 600;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 80%;
  text-align: center;

  &:hover {
    background-color: #e0e1dd;
    color: #1b263b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: #778da9;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`,TP=S.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #f0f0f0;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #e0e1dd;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,EP=S.div`
  display: none;
  cursor: pointer;
  font-size: ${qs.large};
  color: ${Me.accent};

  @media (max-width: 768px) {
    display: block;
  }
`,bP=S.div`
  position: absolute;
  width: 350px; /* Adjust size as needed */
  height: 350px; /* Adjust size as needed */
  background: linear-gradient(135deg, #0d1b2a, #e0e1dd); /* Linear gradient with your colors */
  opacity: 0.6; /* Adjust opacity as needed */
  border-radius: 50%;
  animation: blobAnimation 12s infinite ease-in-out;
  z-index: -1;
  pointer-events: none;
  top: 50%; /* Adjust positioning */
  left: 50%; /* Adjust positioning */
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply; /* Blends the blob with the background */

  @keyframes blobAnimation {
    0% {
      transform: translate(-50%, -50%)rotate(0deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
    25% {
      transform: translate(-50%, -50%) rotate(15deg);
      border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
    }
    50% {
      transform: translate(-50%, -50%)rotate(-15deg);
      border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
    }
    75% {
      transform: translate(-50%, -50%)rotate(15deg);
      border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
    }
    100% {
      transform: translate(-50%, -50%)rotate(0deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`,AP=S.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;
  height: 80vh;
  position: relative;
  color: ${Me.platinum};
  gap: 20px;
  flex-direction: column-reverse;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`,jP=S.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,Wh=S(Ee.div)`
  max-width: 60%;
  z-index: 2;

  &:first-of-type {
    max-width: 100%;

  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,RP=S(Ee.div)`
  max-height: 300px;
  overflow: hidden;
  position: relative;
`,LP=S(Ee.div)`
  opacity: ${({isExiting:e})=>e?0:1};
  transition: opacity 0.5s ease-in-out;
`,OP=S(Ee.h1)`
  font-size: 2.5em;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`,MP=S(Ee.div)`
  font-size: 1.2em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`,_P=S(Ee.p)`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`,DP=S(Ee.div)`


@media (max-width: 480px) {
    flex-direction: row;
    justify-content:center;
  }
`,bl=S(Ee.a)`
display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: ${Me.platinum};
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
  background-color: ${Me.richBlack};
    color: #fff;
    border:1px solid #778da9;
  }
`,Kh=S(Ee.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2em;
  color: ${Me.platinum};
  padding: 0;
  margin: 0 10px 10px 0;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
    
  }
    
`,zP=S(Ee.div)`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
  }
`,pn=S.a`
  font-size: 1.75em;
  color: ${Me.platinum};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.2); /* Scale up on hover or focus */
  }

  @media (max-width: 768px) {
    font-size: 1.5em;

    &:hover, &:focus {
      transform: scale(1.1); /* Slightly smaller scale-up for mobile */
    }
  }
`,NP=S(Ee.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,VP=S(Ee.div)`
  background: #1b263b;
  padding: 5px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 600px; /* Adjust for tablets */
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 5px; /* Adjust for mobile devices */
  }
`,IP=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  @media (max-width: 768px) {
    padding: 0px 5px; /* Adjust padding for smaller screens */
  }
`,BP=S.h2`
  color: #e0e1dd;
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 22px; /* Smaller font for tablets */
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller font for mobile */
  }
`,FP=S.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px; /* Adjust gap for smaller screens */
  }
`,Al=S.button`
  background: #415a77;
  color: #e0e1dd;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #778da9;
  }

  @media (max-width: 1024px) {
    padding: 8px 18px; /* Adjust for tablets */
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px; /* Adjust for mobile devices */
    font-size: 12px;
  }
`,$P=S.iframe`
  width: 100%;
  height: 650px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    height: 550px; /* Adjust for tablets */
  }

  @media (max-width: 768px) {
    height: 450px; /* Adjust for mobile devices */
  }
`,UP=S(Ee.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,HP=S(Ee.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,WP=g.jsx("svg",{fill:Me.platinum,height:"24",width:"24",viewBox:"0 0 330 330",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"})}),KP=g.jsx("svg",{fill:Me.platinum,height:"24",width:"24",viewBox:"0 0 330 330",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"})}),O1="/assets/profile-Bokfg2e0.jpg",GP=()=>{const[e,t]=A.useState(!1),[n,r]=A.useState(""),[i,o]=A.useState(!1);A.useEffect(()=>{const u=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),A.useEffect(()=>{const u=()=>{const c=["home","skills","more","connect"],d=window.scrollY,f=window.innerHeight/2;let v="";c.forEach(y=>{const x=document.getElementById(y);if(x){const k=x.offsetTop,h=x.clientHeight;d>=k-f&&d<k+h-f&&(v=y)}}),r(v)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const s=u=>c=>{c.preventDefault(),r(u),document.getElementById(u).scrollIntoView({behavior:"smooth"}),o(!1)},a=()=>o(!i),l=()=>o(!1);return g.jsxs(g.Fragment,{children:[g.jsxs(xP,{scrolled:e,children:[g.jsxs(wP,{children:[g.jsx(SP,{scrolled:e,children:"My Portfolio"}),g.jsx(kP,{src:O1,alt:"Portfolio Logo",scrolled:e})]}),g.jsxs(CP,{children:[g.jsx(Vo,{className:n==="home"?"active":"",onClick:s("home"),href:"#home",children:"Home"}),g.jsx(Vo,{className:n==="skills"?"active":"",onClick:s("skills"),href:"#skills",children:"Skills"}),g.jsx(Vo,{className:n==="more"?"active":"",onClick:s("more"),href:"#more",children:"More"})," ",g.jsx(Vo,{className:n==="connect"?"active":"",onClick:s("connect"),href:"#connect",children:"Let's Connect"})]}),g.jsx(EP,{onClick:a,children:"☰"})]}),g.jsxs(PP,{open:i,children:[g.jsx(TP,{onClick:l,children:"×"}),g.jsx(Io,{className:n==="home"?"active":"",onClick:s("home"),href:"#home",children:"Home"}),g.jsx(Io,{className:n==="skills"?"active":"",onClick:s("skills"),href:"#skills",children:"Skills"}),g.jsx(Io,{className:n==="more"?"active":"",onClick:s("more"),href:"#more",children:"More"})," ",g.jsx(Io,{className:n==="connect"?"active":"",onClick:s("connect"),href:"#connect",children:"Let's Connect"})]})]})},YP="/assets/background-video-DfxHsj_L.mp4",jl="/assets/shaik_sameer_muajhid_resume-aKhpmoVi.pdf";function Wd(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"},child:[]}]})(e)}function Kd(e){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"},child:[]},{tag:"path",attr:{d:"M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z"},child:[]}]})(e)}function Gd(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function Yd(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function XP(e){return Ot({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(e)}function QP(e){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function qP(e){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function JP(e){return Ot({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function ZP(e){return Ot({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}const eT=()=>{const[e,t]=A.useState(0),[n,r]=A.useState(!1),i=[{title:"Front End Developer",description:"Build and maintain the user interface of web applications using HTML, CSS, and JavaScript. Experience with frameworks like React or Angular is a plus."},{title:"Data Analyst",description:"Analyze data to provide insights and support business decisions using tools like Excel, SQL, and Python. Strong analytical skills and data visualization experience are required."}];A.useEffect(()=>{document.body.style.overflow=n?"hidden":"unset"},[n]);const o=()=>r(!0),s=()=>r(!1),a=c=>{t(d=>c==="next"?(d+1)%i.length:(d-1+i.length)%i.length)},l=()=>{const c=document.getElementById("about");c&&c.scrollIntoView({behavior:"smooth"})},u=()=>g.jsxs(bl,{onClick:l,style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",color:"#fff",backgroundColor:"rgba(59, 92, 142, 0.1)",padding:"10px",borderRadius:"50px"},children:[g.jsx(XP,{}),"    "]});return g.jsxs(AP,{id:"home",children:[g.jsxs(zP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.5},children:[g.jsx(pn,{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",target:"_blank","aria-label":"LinkedIn Profile",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:g.jsx(Yd,{})}),g.jsx(pn,{href:"https://github.com/sameermujahid",target:"_blank","aria-label":"GitHub Profile",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:g.jsx(Gd,{})}),g.jsx(pn,{href:"https://www.instagram.com/sameer.mujahid/",target:"_blank","aria-label":"Instagram Profile",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:g.jsx(Kd,{})}),g.jsx(pn,{href:"https://x.com/sameer__mujahid",target:"_blank","aria-label":"Twitter Profile",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:g.jsx(Wd,{})})]}),g.jsxs(jP,{autoPlay:!0,loop:!0,muted:!0,children:[g.jsx("source",{src:YP,type:"video/mp4"}),"Your browser does not support the video tag."]}),g.jsxs(Wh,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},style:{position:"relative"},children:[g.jsx(OP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},children:"Hi, I am SK Sameer Mujahid"}),g.jsx(RP,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:g.jsx(j1,{mode:"wait",children:g.jsx(Ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:g.jsxs(LP,{children:[g.jsx(MP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:i[e].title}),g.jsx(_P,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:i[e].description})]})},e)})}),g.jsx(Kh,{onClick:()=>a("prev"),children:WP}),g.jsx(Kh,{onClick:()=>a("next"),children:KP}),g.jsxs(DP,{style:{display:"flex",gap:"10px"},children:[g.jsx(bl,{href:jl,download:"shaik_sameer_muajhid_resume.pdf",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.5},children:"Download Resume"}),g.jsx(bl,{onClick:o,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.4,duration:.5},children:"View Resume"})]})]}),g.jsxs(Wh,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.5,duration:.5},style:{position:"relative",zIndex:1},children:[g.jsx(bP,{})," ",g.jsx(UP,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},style:{position:"relative"},children:g.jsx(HP,{src:O1,alt:"Profile",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5}})})]}),"        ",g.jsx(u,{})," ",n&&g.jsx(NP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},onClick:s,children:g.jsxs(VP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},onClick:c=>c.stopPropagation(),children:[g.jsxs(IP,{children:[g.jsx(BP,{children:"SK Sameer Mujahid"}),g.jsxs(FP,{children:[g.jsx(Al,{onClick:()=>window.open("https://www.linkedin.com/in/shaik-sameer-mujahid/","_blank"),children:"Connect"}),g.jsx("a",{href:jl,download:"shaik_sameer_muajhid_resume.pdf",style:{textDecoration:"none"},children:g.jsx(Al,{children:"Download"})}),g.jsx(Al,{onClick:s,children:"Close"})]})]}),g.jsx($P,{title:"resume",src:jl,frameBorder:"0"})]})})]})},tT="/assets/python-CqUXyj7V.webp",nT="/assets/c--B70GCF6M.webp",rT="/assets/js-BQ0UU0Hu.webp",iT="/assets/aws-BacBF_u1.webp",oT="/assets/sql-BCEP8T1F.webp",sT="/assets/postgresql-ORYRhrxB.webp",aT="/assets/excel-CTwv6F19.webp",lT="data:image/webp;base64,UklGRnANAABXRUJQVlA4WAoAAAAQAAAAdQIAdQIAQUxQSC4DAAABkKttt+ooOzJ+qvHKLsMrt3ZwRjvc3d2dzp1x9wvAoR1pQ1pO0CTFKrGw9lkL+SNiAozn7dQd7n4bdonN7ru33YdrM4zsOq2zMWJ5bGa1Izf5pyPE+MipPJlJO/SFmP/5QKrAVCySBS6USYt/d5ysML7DJyrBm2SN95MEJXWCLHI8VUwCvWSVQ0EpuU6WeVlIWsg6V4hIccQ+3EIJGSYLHRCQZrLSOvl4YSfPxKOOLLVaOgZtpU84sqK2Es2SjS6y1nbZeGQv92UjbC8h0cgji82WjEqbKZOMVptZJRnrbWaNZOy2mV2ScdBmDsJ/8B/8B//Bf/Af/Af/wX/wH/wH/8F/8B/8B//Bf/Af/PfNvoSrHXwJWzH4ErtW8CV8leD7HSoE33f2J9pD2sD37f4ErQecusPdb8MuecBeitM6GyPP2DvJPx0hL9krSTv0hbxlj6RikbxmT8S/O04KJ3iTPGgPJHWCNE6gl1TOdVI5LaRyiiM6Z5hUTjPpnBc6p450zqDOyYrqnC7SOY+UTljn5JHOqVQ6rUpnvdLZrXQOwn/wH/wH/8F/8B/8B//Bf/Af/Af/wX/wH/wH/8F/8B/8B//99cOpO9z9NuyS/LLKaZ2NkRQzKv90hASZTWmHvpAoc6likYSZR/7dcVI4wZskzxxKnSCNE+gllXOdVE4LqZziiM4ZJpXTTDrnhc6pI50zqHOyojqni3TOI6UT1jl5pHMqlU6r0lmvdHYrnYPwH/wH/8F/8B/8B//Bf/Af/Af/wX/wH/wH/8F/8B/8B//Bf/Af/Af/wX/wH/wH/8F/8B/8B//Bf/Af/Af/wX/wH/wH/8F//8DaLVm7OLNestZwplWyVnGmUrLKOJMnWdmcMWG5ChnWPpSre7zpkqt23mR+lapoFm/MgFT1GubWSlUVd8xzmXpq2NsoUzX8MUMS1WcYXOTK0/sCDpkWeVpueHxFmi4YJvu7ZWkwwCWTOi5JYymGz8EbcnQ3yXDatz0uQ7EtPsPssnkJmisx/E7Z90l6Pu5JMSzPPeFKjns8x7A9Y9VUVGa+Tq7MMLxPrzn4+E3IlRM39Prxgep0k/ABVlA4IBwKAABwkgCdASp2AnYCPpFGn0ylo6MiIXBIsLASCWdu4XGxRWKtzrx/MG///aA5h48VXefofnrny74znz8aKPTZ5gH6gdMvzAebd/pv2A95HoAf2n0hPU59AD9XfTV/Yj4Pv3Q9JXVlul/0VgOkKJo4x4jRxjrXtwfVwfiOdQ1O+pecGCfJ/xvjyvNWnleaps4ZNAyffHlyhElNcXgeWnleatPK81TZ4VlAyfezJGtO0N8byvNWnleatPK8k6Gm/t1Drn9BpY0z/St8eV5q08rzQTa/bKBk+9mR03JwfG+PK81aeV5q08N02EXUkhxzqEN9hXiNHGPEaOMeI0bq1WvwdSSHHOkzI08H2Jo4x4jRxjxGVCjPBJzqGp31QbY4oXF4Hlp5XmrTyvNU2cjI51DU76oH5y8HxvjyvNWnlLy3bkyrxLArRUfsf11j+sy9fwa/7vAJld9GDNv/QsqQ5n6/R8+WnleatPKXlu5nrJAhyy0qad4FIrUMJUk3/1Qb27xRw1p5XmrTyua1V5i0R3J6ZoJAuBtfVfo2o3iHFzf0rfHleas9Auvv409d8Sky/Io/6i9L7dIRw1p5XmrTyua1XEAXLJHOoaMHJXo+peTMK8Ro4x4jRurVY+QUCrAaqvk5Uuel9vDXPvjyvNWnlc1quPv1USZglptwY775fg6BX7B8b48rzVp4bpSoxfEpMvykmX7G019sn+qRp4PsTRxjxGVz2XSPZKTL8pJl+1/qeSQ3TJQFeatPK81abbVYZIF1lBIKLDEYGnWqGjgnmmf6VuouEiaTwvXWP66xppxnaO0MXDS+4wHvdqyhRrpUqHPe7sKelbE+B9iP+uw/Hhd8Sj6QrOs5U73ffxW7eUkzBJ1za/rqQh2uffHlc1plTLyoOJh1EUACzftHEpMvyMn78Isc6TEbTwfYmVz2ICHaxGK4tRoyNkxWBiqdI2oFtfa4L9N3leaCaZNKs5mYo7HIU1pidHFAc5Dk5in+wUY8RonAcezJHOoancpnTOrZ+OPF9u27wusQi8DymzwrKBk+9mSNaWVyK2k3+nr5RQ6BX6bvK80E0xD8NSBi2XlEHyGu5xUV4YO0dkoCvNWm21WvwdSSHHOkzfmojFyUKQAA/QPxPmmf6Vkm1+2yDTBj1CVxKv8cc6TNrqaSQR2vN/St76A4+yUmX5STMEtI1/kqIq+j/6B1JII7Xm/pW99AuvaW4ZWHancpnzWoamd3I47uFaJxw1p5XNaRnwdSSHHOklAqTRFg8BJc0p6JhF0Cv2D43x4bpYA7XfdhRl5TPP6ZRZflIgHs7xsIrROOGtPK5rSM+DqSQ6QR1M/wZabcMzRn2ygZMfPgK81abbSt7M0v1UPKTUU212Mgu8H/7HOoaOyUBXmrTbariIcs6FPXfEpMNf3ez8HPvcQ5ApvYpd9bLfHlLGtpfg6kkOOail7ryjib6l7wdRieFst8eUscNQrfLciHLOhTgnwK3xtuoW8ZvhZkaeD7EyoZODDR7LlAyfezI6b+9Q1O4uhh2i9iDyjBzm/pW+NtxBjb7sIrLgQdTinCnZzSzcpIHADt8bQAAP7+9GAAMTlgm1w3643lZqAv21v98z51ABS7HwiDngVc7f/ONxF/RZ+i8c7/MA0b95ZZTRbu4j6x6otoajIyRYf619FZq+AWAiCz4xMSkDtCDdd0St7id3f7t3//o+QuRhA1F1a39p0BuuC1YNAFLdvh5mLcqClpkpajOM/bYAOziEMQyk0ezkk8cRT4Bc0KJbuhpoPtMLIJD9KpR1wcoq2G9/9DpWkprRIzNPz7rlQU/loDYEgOlkx+SEABpSXyHVXcUKBgEr6L0Fxierd4ABl8EgAAaWwAAuwQCNYMtThYQ8jwAAK5UBSsBNk/JNAAB3LDjXJBhiAAfO0Lr7jIgACLjsvBhMAMT2A4+DAyI+l3YF3YMRGLkRlVBHJq7VsXoESmnQR6z/3peBt493lQiw4bovIMH6JUbhoWjUBJEAyc4nakhS+gtO+vuPuYL1VwDCJG2eHIYanMoM6RPuri3r1G6m4umVwKk5pNAVgzfzJkSOcTVW+v7yjeDKeN6UiKZnytfzGlnALf1i7+DphYqCPIkWf8HIXeTlH3upgdx3/ADsBXwORhtYJajB8CQ8Q0uz/A44DE5HebbnzPBiqak5zadW8vu4D6HoafgA/hLMHSExM3eQ6iACr2TGicBX2Z+OZKgIYru/LdK8ygAxr5IFXj9okBJGLhWMYD/ATocQdSuCeRv+Rv+Rv+SBIe3ikV3ud9cBmAmY3pd+Z+vpmx8NSjic1hjGUtVAgOEsryncnxc+LoEYVbvHFNim7T4CBMsp7Q4caEZyJzZmtZLVak3aHUU/a5cIDaEvlW+cBz0rE4MXQK3OOW6Q0RbC1AFz+m3snit9R8LPN0kbX5PVnL/BxB+YPH2Vc2H8gq1vRFrdt3XHcboLnKcnwPIOZtsKbcrZslJ6ISORcET3W7BTuEaAT5APFvL7LiP+amaQuOquNhscEQxjUNHdYYhSmXwxPYDj3jhTgBXc+Tp/4dm9jFkcZbexPP+xIaIY6mmNB3NtNnK1iN/nGtiLr49IXpiWmazGuqyEXpVZz28k+uSs3nR3XQiJM3GetDOsmvWIzyHWv4VkL8tasT0zCd11KzLQwER/1Bn0V4u5DYFTsGVf+aRq0qGfZiV/xjpA2tc0njvE2M+swXG5otArGUg2QeCACEHW1+a4ZmXUBA/JPcCozAJAkuGADhFnfpNpC0haQtIWkOwbx0TvXa2rh4f7AMFc2W3xBqhVzyzMluwqfCSvw7G6UJgCrbIttxAnuREk+RoaMl7ABnrSH9eUFpD+vKC5Fbz1vPCM0CMYsEjeC2s2hT0oQBGSr59ou/5zDc+ELUUKkUeZysmuRLY+19c2s+6jnlrFaQslX7ZNVLsyJr8fqP77Osf9iUjgoB2r9YU1d3dhEgtAPpYD4yB2UD8SQNhFnOOJ/FWw0j9Uvw6Kjsei6X/mmEV0aEt4y1+/DCQIG8lAELtw2KowUAopcgsPWryE6/if1FAvqTbDxpwOZEFd938x0pCGds8PpYGkmDXhJyTVlGAhYQgGp7IpWfzqcvPjFbbQayJwXXLK0xdoGUDKBlAygZQX8/0rpE9pE9o0FJ0PGZklhzugXONxBpe06RsfbBhC7KaQ0r6/Jk5QQKF6DbMVIGUDKBk/SAfm4XSMdfw8k5Cb+q2CG+13SSZe5aZm5w8iTVHtRVy8zokPSH3TSobS0Q3sa/RHp52te1XsQT/wDxoGbrMd5nqhp37umF9ysT/xzc+sllW2kd5qw6Db8VexhCK22NRftCcD3rwCayWVuJnb5/+ryupbKSinxOFN6T3Gwr6WJx/+LbZSZfTSTpVMcBsfwR9ZLy6XGYvqfHcc/+TUXuFV3HH9nHshII6XP07T1SX/Z7O9JafwzFwAAAAA==",uT="/assets/html-CAPMYXQG.webp",cT="/assets/css-CTU4a1FO.webp",dT="/assets/react-COzaG4-_.webp",fT="/assets/wp-_nYi4VNn.webp",pT="/assets/django-C3nrrUWn.webp",hT=S.section`
  text-align: center;
  padding: 2rem 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`,mT=S.h1`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  color: #e0e1dd;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,gT=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px; // Increase gap for a more spacious look
  width: 100%;
`,M1=S.div`
  background: rgba(30, 39, 73, 0.8); // Semi-transparent background
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  color: #e0e1dd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; // Center align items in the card
  justify-content: space-between; // Space out the image and title
    border: 2px solid #415a77;

  &:hover {
    transform: translateY(-5px); // Slightly lift the card
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); // Increased shadow on hover
  }
`,yT=S.img`
  width: 100%; // Make image fill the container width
  height: auto; // Maintain aspect ratio
  max-height: 80px; // Set a maximum height for the image
  object-fit: contain; // Maintain the aspect ratio while fitting the container
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  ${M1}:hover & {
    transform: scale(1.1); // Scale the image on card hover
  }
`,vT=S.h3`
  font-size: 1.1rem; // Increased font size for better readability
  margin: 0.5rem 0;
  font-family: 'Arial', sans-serif;
  font-weight: bold; // Bold font for titles
`,xT=[{id:1,image:tT,title:"Python"},{id:2,image:nT,title:"C"},{id:3,image:rT,title:"JavaScript"},{id:4,image:iT,title:"AWS"},{id:5,image:oT,title:"SQL"},{id:6,image:sT,title:"PostgreSQL"},{id:7,image:aT,title:"MS Excel"},{id:8,image:lT,title:"Power BI"},{id:9,image:uT,title:"HTML"},{id:10,image:cT,title:"CSS"},{id:11,image:dT,title:"React JS"},{id:12,image:fT,title:"WordPress"},{id:13,image:pT,title:"Django"}],wT=()=>g.jsxs(hT,{id:"skills",children:[g.jsx(mT,{children:"My Skills"}),g.jsx(gT,{children:xT.map(e=>g.jsxs(M1,{children:[g.jsx(yT,{src:e.image,alt:e.title}),g.jsx(vT,{children:e.title})]},e.id))})]}),ST="/assets/aws_certificate-BFmi7Y25.pdf",kT="/assets/nptel_certificate-DhuTjOAG.pdf",CT="/assets/coursera_certificate-BLBMNiqR.pdf",PT="/assets/skill1-DYXWgzUC.jpg",Rl="/assets/skill2-B0rXQTLf.jpg",Tt={name:"Shaik Sameer Mujahid",education:{btech:{degree:"B.Tech",branch:"Computer Science and Engineering",year:"2020-2024",university:"Adikavi Nannaya University, Rajanagaram",gpa:"8.8"},intermediate:{degree:"MPC",year:"2018-2020",college:"Tirumala Junior College, Katheru",percentage:"9.5"},ssc:{year:"2017-2018",school:"Keshava Reddy High School",gpa:"10.00"}},skills:{programming_languages:["C","Python","JAVA Basics"],platforms:["Google","Amazon Web Services (AWS)"],database:["SQL"],presentation:["MS Excel","MS Word","MS PowerPoint"],web_fundamentals:["HTML","CSS","React JS","WordPress"],framework:["Django Restframework"],additional_skills:["Jira Management","Keka","MS Teams"]},strengths:["Leadership","Critical thinking","Prioritization skills","Adaptability","Versatile"],languages:["Hindi","English","Telugu"],internship_experience:[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",responsibilities:"Gained insights into business planning and pre-production steps for live projects. Contributed to various tasks, enhancing understanding of industry practices."},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer (Intern)",duration:"5 months",responsibilities:"Developed responsive interfaces using React for frontend components. Created essential components in React using Django Rest Framework. Built and maintained entire websites using Wordpress."}],courses_certificates:[{course:"AWS - Academy Foundation",duration:"OCT-DEC 2022",description:"Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.",pdf:ST},{course:"NPTEL - Internet of Things",duration:"JUL-OCT 2022",description:"Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.",pdf:kT},{course:"Coursera - Data Science",duration:"FEB-APR 2022",description:"Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",pdf:CT}],projects:[{name:"MERA SAHAI: Mera Sahai Platform",date:"2003",description:"As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",downloadLink:"/assets/mera_sahai_project.pdf",view:"https://github.com/sameermujahid/student_performance/tree/master",image:PT},{name:"Water Quality Prediction and Classification",date:"2003",description:"For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",downloadLink:"/assets/water_quality_project.pdf",view:"https://github.com/sameermujahid/student_performance/tree/master",image:Rl},{name:"Heart Prediction using ML",date:"2003",description:"For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",downloadLink:"/assets/water_quality_project.pdf",view:"https://github.com/sameermujahid/student_performance/tree/master",image:Rl},{name:"Student Performance prediction using ML",date:"2003",description:"For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",downloadLink:"/assets/water_quality_project.pdf",view:"https://github.com/sameermujahid/student_performance/tree/master",image:Rl}],contact:{phone:"8317506633",email:"sameermujahid7777@gmail.com",linkedin:"www.linkedin.com/in/shaik-sameer-mujahid",github:"https://github.com/sameermujahid"},ongoing_courses:[{course:"Social Prachar - Data Science with AI",duration:"FEB-(Expected Completion: JUL 2024)",description:"Currently enrolled in a 6-month course focused on Data Science with AI, covering advanced Python topics, data analysis, machine learning, and artificial intelligence."}]},TT={richBlack:"#0d1b2aff",oxfordBlue:"#1b263bff",yinmnBlue:"#415a77ff",silverLakeBlue:"#778da9ff",platinum:"#e0e1ddff"},ET=S.div`
  text-align: center;
  color: #e0e1dd;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`,bT=S.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  color: ${TT.platinum};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,AT=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,jT=S.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`,RT=S.div`
  width: 30%; // The image occupies 30% of the card
  @media (max-width: 768px) {
    width: 100%; // Full width for mobile devices
  }
`,LT=S.img`
  width: 100%; // Ensures the image fills the width of its container
  height: 100%; // Ensures the image fills the height

  @media (max-width: 768px) {
    height: 200px; // Fixed height for tablet and mobile devices
  }

  @media (min-width: 769px) {
    height: 100%; // Height 100% for larger screens
  }

  border-radius: 10px; // Adds rounded corners
  object-fit: cover; // Ensures the image maintains its aspect ratio
`,OT=S.div`
  width: 70%; // The content occupies 70% of the card
  padding-left: 20px; // Space between image and content
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`,MT=S.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`,_T=S.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,DT=S.p`
  font-size: 1em;
  line-height: 1.6;
  color: #e0e1dd;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,zT=S.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,Gh=S.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #0d1b2aff;
    color: #fff;
  }
`,NT=()=>{const e=Tt.projects;return g.jsxs(ET,{children:[g.jsx(bT,{children:"Projects"}),g.jsx(AT,{children:e.map((t,n)=>g.jsxs(jT,{children:[g.jsx(RT,{children:g.jsx(LT,{src:t.image,alt:t.name})}),g.jsxs(OT,{children:[g.jsx(MT,{children:t.name}),g.jsx(_T,{children:t.date}),g.jsx(DT,{children:t.description}),g.jsxs(zT,{children:[t.downloadLink&&g.jsx(Gh,{href:t.downloadLink,target:"_blank",download:!0,children:"Download"}),t.view&&g.jsx(Gh,{href:t.view,target:"_blank",children:"View"})]})]})]},n))})]})};function _1(e,t){return function(){return e.apply(t,arguments)}}const{toString:VT}=Object.prototype,{getPrototypeOf:Xd}=Object,Ra=(e=>t=>{const n=VT.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kt=e=>(e=e.toLowerCase(),t=>Ra(t)===e),La=e=>t=>typeof t===e,{isArray:Jr}=Array,eo=La("undefined");function IT(e){return e!==null&&!eo(e)&&e.constructor!==null&&!eo(e.constructor)&&at(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const D1=kt("ArrayBuffer");function BT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&D1(e.buffer),t}const FT=La("string"),at=La("function"),z1=La("number"),Oa=e=>e!==null&&typeof e=="object",$T=e=>e===!0||e===!1,ds=e=>{if(Ra(e)!=="object")return!1;const t=Xd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},UT=kt("Date"),HT=kt("File"),WT=kt("Blob"),KT=kt("FileList"),GT=e=>Oa(e)&&at(e.pipe),YT=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||at(e.append)&&((t=Ra(e))==="formdata"||t==="object"&&at(e.toString)&&e.toString()==="[object FormData]"))},XT=kt("URLSearchParams"),[QT,qT,JT,ZT]=["ReadableStream","Request","Response","Headers"].map(kt),eE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Jr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function N1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const V1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,I1=e=>!eo(e)&&e!==V1;function rc(){const{caseless:e}=I1(this)&&this||{},t={},n=(r,i)=>{const o=e&&N1(t,i)||i;ds(t[o])&&ds(r)?t[o]=rc(t[o],r):ds(r)?t[o]=rc({},r):Jr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&fo(arguments[r],n);return t}const tE=(e,t,n,{allOwnKeys:r}={})=>(fo(t,(i,o)=>{n&&at(i)?e[o]=_1(i,n):e[o]=i},{allOwnKeys:r}),e),nE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},iE=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Xd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},oE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},sE=e=>{if(!e)return null;if(Jr(e))return e;let t=e.length;if(!z1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},aE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Xd(Uint8Array)),lE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},uE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},cE=kt("HTMLFormElement"),dE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Yh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fE=kt("RegExp"),B1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fo(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},pE=e=>{B1(e,(t,n)=>{if(at(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(at(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Jr(e)?r(e):r(String(e).split(t)),n},mE=()=>{},gE=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ll="abcdefghijklmnopqrstuvwxyz",Xh="0123456789",F1={DIGIT:Xh,ALPHA:Ll,ALPHA_DIGIT:Ll+Ll.toUpperCase()+Xh},yE=(e=16,t=F1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function vE(e){return!!(e&&at(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xE=e=>{const t=new Array(10),n=(r,i)=>{if(Oa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Jr(r)?[]:{};return fo(r,(s,a)=>{const l=n(s,i+1);!eo(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},wE=kt("AsyncFunction"),SE=e=>e&&(Oa(e)||at(e))&&at(e.then)&&at(e.catch),C={isArray:Jr,isArrayBuffer:D1,isBuffer:IT,isFormData:YT,isArrayBufferView:BT,isString:FT,isNumber:z1,isBoolean:$T,isObject:Oa,isPlainObject:ds,isReadableStream:QT,isRequest:qT,isResponse:JT,isHeaders:ZT,isUndefined:eo,isDate:UT,isFile:HT,isBlob:WT,isRegExp:fE,isFunction:at,isStream:GT,isURLSearchParams:XT,isTypedArray:aE,isFileList:KT,forEach:fo,merge:rc,extend:tE,trim:eE,stripBOM:nE,inherits:rE,toFlatObject:iE,kindOf:Ra,kindOfTest:kt,endsWith:oE,toArray:sE,forEachEntry:lE,matchAll:uE,isHTMLForm:cE,hasOwnProperty:Yh,hasOwnProp:Yh,reduceDescriptors:B1,freezeMethods:pE,toObjectSet:hE,toCamelCase:dE,noop:mE,toFiniteNumber:gE,findKey:N1,global:V1,isContextDefined:I1,ALPHABET:F1,generateString:yE,isSpecCompliantForm:vE,toJSONObject:xE,isAsyncFn:wE,isThenable:SE};function N(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}C.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $1=N.prototype,U1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{U1[e]={value:e}});Object.defineProperties(N,U1);Object.defineProperty($1,"isAxiosError",{value:!0});N.from=(e,t,n,r,i,o)=>{const s=Object.create($1);return C.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),N.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const kE=null;function ic(e){return C.isPlainObject(e)||C.isArray(e)}function H1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Qh(e,t,n){return e?e.concat(t).map(function(i,o){return i=H1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function CE(e){return C.isArray(e)&&!e.some(ic)}const PE=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Ma(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,k){return!C.isUndefined(k[x])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!l&&C.isBlob(y))throw new N("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,x,k){let h=y;if(y&&!k&&typeof y=="object"){if(C.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&CE(y)||(C.isFileList(y)||C.endsWith(x,"[]"))&&(h=C.toArray(y)))return x=H1(x),h.forEach(function(m,w){!(C.isUndefined(m)||m===null)&&t.append(s===!0?Qh([x],w,o):s===null?x:x+"[]",u(m))}),!1}return ic(y)?!0:(t.append(Qh(k,x,o),u(y)),!1)}const d=[],f=Object.assign(PE,{defaultVisitor:c,convertValue:u,isVisitable:ic});function v(y,x){if(!C.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(y),C.forEach(y,function(h,p){(!(C.isUndefined(h)||h===null)&&i.call(t,h,C.isString(p)?p.trim():p,x,f))===!0&&v(h,x?x.concat(p):[p])}),d.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function qh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Qd(e,t){this._pairs=[],e&&Ma(e,this,t)}const W1=Qd.prototype;W1.append=function(t,n){this._pairs.push([t,n])};W1.toString=function(t){const n=t?function(r){return t.call(this,r,qh)}:qh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function TE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K1(e,t,n){if(!t)return e;const r=n&&n.encode||TE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=C.isURLSearchParams(t)?t.toString():new Qd(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Jh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const G1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EE=typeof URLSearchParams<"u"?URLSearchParams:Qd,bE=typeof FormData<"u"?FormData:null,AE=typeof Blob<"u"?Blob:null,jE={isBrowser:!0,classes:{URLSearchParams:EE,FormData:bE,Blob:AE},protocols:["http","https","file","blob","url","data"]},qd=typeof window<"u"&&typeof document<"u",RE=(e=>qd&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),LE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",OE=qd&&window.location.href||"http://localhost",ME=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qd,hasStandardBrowserEnv:RE,hasStandardBrowserWebWorkerEnv:LE,origin:OE},Symbol.toStringTag,{value:"Module"})),wt={...ME,...jE};function _E(e,t){return Ma(e,new wt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return wt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function DE(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Y1(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&C.isArray(i)?i.length:s,l?(C.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!C.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&C.isArray(i[s])&&(i[s]=zE(i[s])),!a)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(DE(r),i,n,0)}),n}return null}function NE(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const po={transitional:G1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i?JSON.stringify(Y1(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _E(t,this.formSerializer).toString();if((a=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ma(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),NE(t)):t}],transformResponse:[function(t){const n=this.transitional||po.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?N.from(a,N.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{po.headers[e]={}});const VE=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),IE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&VE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Zh=Symbol("internals");function ci(e){return e&&String(e).trim().toLowerCase()}function fs(e){return e===!1||e==null?e:C.isArray(e)?e.map(fs):String(e)}function BE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const FE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ol(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function $E(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function UE(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class We{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const c=ci(l);if(!c)throw new Error("header name must be a non-empty string");const d=C.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=fs(a))}const s=(a,l)=>C.forEach(a,(u,c)=>o(u,c,l));if(C.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(C.isString(t)&&(t=t.trim())&&!FE(t))s(IE(t),n);else if(C.isHeaders(t))for(const[a,l]of t.entries())o(l,a,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=ci(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return BE(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ci(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ol(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=ci(s),s){const a=C.findKey(r,s);a&&(!n||Ol(r,r[a],a,n))&&(delete r[a],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ol(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,o)=>{const s=C.findKey(r,o);if(s){n[s]=fs(i),delete n[o];return}const a=t?$E(o):String(o).trim();a!==o&&delete n[o],n[a]=fs(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Zh]=this[Zh]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=ci(s);r[a]||(UE(i,s),r[a]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}We.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(We.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(We);function Ml(e,t){const n=this||po,r=t||n,i=We.from(r.headers);let o=r.data;return C.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function X1(e){return!!(e&&e.__CANCEL__)}function Zr(e,t,n){N.call(this,e??"canceled",N.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(Zr,N,{__CANCEL__:!0});function Q1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new N("Request failed with status code "+n.status,[N.ERR_BAD_REQUEST,N.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function HE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function WE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let d=o,f=0;for(;d!==i;)f+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const v=c&&u-c;return v?Math.round(f*1e3/v):void 0}}function KE(e,t){let n=0;const r=1e3/t;let i=null;return function(){const s=this===!0,a=Date.now();if(s||a-n>r)return i&&(clearTimeout(i),i=null),n=a,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),e.apply(null,arguments)),r-(a-n)))}}const Js=(e,t,n=3)=>{let r=0;const i=WE(50,250);return KE(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-r,u=i(l),c=s<=a;r=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-s)/u:void 0,event:o,lengthComputable:a!=null};d[t?"download":"upload"]=!0,e(d)},n)},GE=wt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=C.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),YE=wt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function XE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function QE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function q1(e,t){return e&&!XE(t)?QE(e,t):t}const em=e=>e instanceof We?{...e}:e;function tr(e,t){t=t||{};const n={};function r(u,c,d){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge.call({caseless:d},u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function i(u,c,d){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function o(u,c){if(!C.isUndefined(c))return r(void 0,c)}function s(u,c){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(em(u),em(c),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||i,f=d(e[c],t[c],c);C.isUndefined(f)&&d!==a||(n[c]=f)}),n}const J1=e=>{const t=tr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=t;t.headers=s=We.from(s),t.url=K1(q1(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(C.isFormData(n)){if(wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...c]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(wt.hasStandardBrowserEnv&&(r&&C.isFunction(r)&&(r=r(t)),r||r!==!1&&GE(t.url))){const u=i&&o&&YE.read(o);u&&s.set(i,u)}return t},qE=typeof XMLHttpRequest<"u",JE=qE&&function(e){return new Promise(function(n,r){const i=J1(e);let o=i.data;const s=We.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(i.method.toUpperCase(),i.url,!0),c.timeout=i.timeout;function d(){if(!c)return;const v=We.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};Q1(function(h){n(h),u()},function(h){r(h),u()},x),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new N("Request aborted",N.ECONNABORTED,i,c)),c=null)},c.onerror=function(){r(new N("Network Error",N.ERR_NETWORK,i,c)),c=null},c.ontimeout=function(){let y=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const x=i.transitional||G1;i.timeoutErrorMessage&&(y=i.timeoutErrorMessage),r(new N(y,x.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,i,c)),c=null},o===void 0&&s.setContentType(null),"setRequestHeader"in c&&C.forEach(s.toJSON(),function(y,x){c.setRequestHeader(x,y)}),C.isUndefined(i.withCredentials)||(c.withCredentials=!!i.withCredentials),a&&a!=="json"&&(c.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&c.addEventListener("progress",Js(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Js(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=v=>{c&&(r(!v||v.type?new Zr(null,e,c):v),c.abort(),c=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const f=HE(i.url);if(f&&wt.protocols.indexOf(f)===-1){r(new N("Unsupported protocol "+f+":",N.ERR_BAD_REQUEST,e));return}c.send(o||null)})},ZE=(e,t)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,s();const u=l instanceof Error?l:this.reason;n.abort(u instanceof N?u:new Zr(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{i(new N(`timeout ${t} of ms exceeded`,N.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=s,[a,()=>{o&&clearTimeout(o),o=null}]},e3=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},t3=async function*(e,t,n){for await(const r of e)yield*e3(ArrayBuffer.isView(r)?r:await n(String(r)),t)},tm=(e,t,n,r,i)=>{const o=t3(e,t,i);let s=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await o.next();if(l){a.close(),r();return}let c=u.byteLength;n&&n(s+=c),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),o.return()}},{highWaterMark:2})},nm=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},_a=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Z1=_a&&typeof ReadableStream=="function",oc=_a&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),n3=Z1&&(()=>{let e=!1;const t=new Request(wt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),rm=64*1024,sc=Z1&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),Zs={stream:sc&&(e=>e.body)};_a&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Zs[t]&&(Zs[t]=C.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new N(`Response type '${t}' is not supported`,N.ERR_NOT_SUPPORT,r)})})})(new Response);const r3=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(C.isArrayBufferView(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await oc(e)).byteLength},i3=async(e,t)=>{const n=C.toFiniteNumber(e.getContentLength());return n??r3(t)},o3=_a&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=J1(e);u=u?(u+"").toLowerCase():"text";let[v,y]=i||o||s?ZE([i,o],s):[],x,k;const h=()=>{!x&&setTimeout(()=>{v&&v.unsubscribe()}),x=!0};let p;try{if(l&&n3&&n!=="get"&&n!=="head"&&(p=await i3(c,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),E;C.isFormData(r)&&(E=T.headers.get("content-type"))&&c.setContentType(E),T.body&&(r=tm(T.body,rm,nm(p,Js(l)),null,oc))}C.isString(d)||(d=d?"cors":"omit"),k=new Request(t,{...f,signal:v,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let m=await fetch(k);const w=sc&&(u==="stream"||u==="response");if(sc&&(a||w)){const T={};["status","statusText","headers"].forEach(b=>{T[b]=m[b]});const E=C.toFiniteNumber(m.headers.get("content-length"));m=new Response(tm(m.body,rm,a&&nm(E,Js(a,!0)),w&&h,oc),T)}u=u||"text";let P=await Zs[C.findKey(Zs,u)||"text"](m,e);return!w&&h(),y&&y(),await new Promise((T,E)=>{Q1(T,E,{data:P,headers:We.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:k})})}catch(m){throw h(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new N("Network Error",N.ERR_NETWORK,e,k),{cause:m.cause||m}):N.from(m,m&&m.code,e,k)}}),ac={http:kE,xhr:JE,fetch:o3};C.forEach(ac,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const im=e=>`- ${e}`,s3=e=>C.isFunction(e)||e===null||e===!1,ev={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!s3(n)&&(r=ac[(s=String(n)).toLowerCase()],r===void 0))throw new N(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(im).join(`
`):" "+im(o[0]):"as no adapter specified";throw new N("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ac};function _l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zr(null,e)}function om(e){return _l(e),e.headers=We.from(e.headers),e.data=Ml.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ev.getAdapter(e.adapter||po.adapter)(e).then(function(r){return _l(e),r.data=Ml.call(e,e.transformResponse,r),r.headers=We.from(r.headers),r},function(r){return X1(r)||(_l(e),r&&r.response&&(r.response.data=Ml.call(e,e.transformResponse,r.response),r.response.headers=We.from(r.response.headers))),Promise.reject(r)})}const tv="1.7.2",Jd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Jd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const sm={};Jd.transitional=function(t,n,r){function i(o,s){return"[Axios v"+tv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new N(i(s," has been removed"+(n?" in "+n:"")),N.ERR_DEPRECATED);return n&&!sm[s]&&(sm[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function a3(e,t,n){if(typeof e!="object")throw new N("options must be an object",N.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new N("option "+o+" must be "+l,N.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new N("Unknown option "+o,N.ERR_BAD_OPTION)}}const lc={assertOptions:a3,validators:Jd},tn=lc.validators;class Xn{constructor(t){this.defaults=t,this.interceptors={request:new Jh,response:new Jh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=tr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&lc.assertOptions(r,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:lc.assertOptions(i,{encode:tn.function,serialize:tn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&C.merge(o.common,o[n.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=We.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let c,d=0,f;if(!l){const y=[om.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),f=y.length,c=Promise.resolve(n);d<f;)c=c.then(y[d++],y[d++]);return c}f=a.length;let v=n;for(d=0;d<f;){const y=a[d++],x=a[d++];try{v=y(v)}catch(k){x.call(this,k);break}}try{c=om.call(this,v)}catch(y){return Promise.reject(y)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=tr(this.defaults,t);const n=q1(t.baseURL,t.url);return K1(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Xn.prototype[t]=function(n,r){return this.request(tr(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(tr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Xn.prototype[t]=n(),Xn.prototype[t+"Form"]=n(!0)});class Zd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Zr(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Zd(function(i){t=i}),cancel:t}}}function l3(e){return function(n){return e.apply(null,n)}}function u3(e){return C.isObject(e)&&e.isAxiosError===!0}const uc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(uc).forEach(([e,t])=>{uc[t]=e});function nv(e){const t=new Xn(e),n=_1(Xn.prototype.request,t);return C.extend(n,Xn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return nv(tr(e,i))},n}const fe=nv(po);fe.Axios=Xn;fe.CanceledError=Zr;fe.CancelToken=Zd;fe.isCancel=X1;fe.VERSION=tv;fe.toFormData=Ma;fe.AxiosError=N;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=l3;fe.isAxiosError=u3;fe.mergeConfig=tr;fe.AxiosHeaders=We;fe.formToJSON=e=>Y1(C.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=ev.getAdapter;fe.HttpStatusCode=uc;fe.default=fe;const c3=S.div`
  height: 100px;
  width: 150px;
  background-color: #415a77ff; /* Yinmn Blue */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  border-radius: 10px;
`,am=S.div`
  position: absolute;
  top: 0;
  left: 0;
  border-right: 15px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid transparent;
  transform-origin: top;
  transition: transform 0.25s linear;
`,d3=S.div`
  position: absolute;
  height: auto;
  width: auto;
  top: 0;
  left: 0;
  border-top: 50px solid transparent;
  border-right: 75px solid #e0e1ddff; /* Platinum */
  border-bottom: 50px solid #e0e1ddff; /* Platinum */
  border-left: 75px solid #778da9ff; /* Silver Lake Blue */
  z-index: 2;
  border-radius: 10px;
`,f3=S.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${e=>e.show?"-50px":"0"});
  transition: transform 0.5s;
  z-index: 0;
`,p3=S.p`
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  color: #0d1b2aff; /* Rich Black */
`,h3=()=>{const[e,t]=A.useState(!1),n=()=>{t(!e)};return g.jsxs(c3,{onMouseEnter:n,onMouseLeave:n,children:[g.jsx(am,{className:"lid one",open:e}),g.jsx(am,{className:"lid two",open:e}),g.jsx(d3,{className:"envelope"}),g.jsx(f3,{className:"letter",show:e,children:g.jsx(p3,{children:"Hello"})})]})},m3=ir`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        opacity: 0;
    }
    50% {
        transform: translateX(50px) translateY(-20px) rotate(15deg);
        opacity: 0.5;
    }
    100% {
        transform: translateX(100px) translateY(-40px) rotate(30deg);
        opacity: 1;
    }
`,g3=S.section`
    align-items: center;
    padding: 50px;
    color: #e0e1ddff; /* platinum */
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 480px) {
        padding: 30px 10px;
        justify-content: space-between;
    }
`,y3=S.section`
    color: #e0e1ddff; /* platinum */
    display: flex;
    gap: 30px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`,v3=S.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;S.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation: ${m3} 2s linear infinite;
    z-index: 1;
    border: none;
`;const x3=S.div`
    margin-bottom: 20px;
    transform: rotate(45deg);
    transition: transform 0.5s ease;

    @media (max-width: 768px) {
        display: none; /* Hide SVGContainer (and its content) on mobile screens */
    }

    &:hover {
        transform: rotate(0);
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #e0e1ddff; /* platinum */
    }
`,lm=S.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: #e0e1ddff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
=    }

    @media (max-width: 480px) {
        font-size: 2rem;
=    }
`,w3=S.p`
    font-size: 1.2em;
    text-align: center;
    position: relative;
    z-index: 2;
`,S3=S.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,k3=S.span`
    font-size: 1.1em;
    margin-bottom: 10px;
`,C3=S.span`
    font-size: 1.1em;
    margin-bottom: 10px;
`,P3=S.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;
`,Bo=S.a`
  font-size: 1.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color:#000;
    background-color: #415a77ff; /* silver lake blue */
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0d1b2aff; /* yinmn blue */
            color:#fff;

    }

    svg {
        width: 60%;
        height: 60%;
    }
`,T3=S.div`
    flex: 1;
    padding: 40px;
    background-color: #1b263bff; /* oxford blue */
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
flex-direction:column;
 display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1px;
    }
`,E3=S.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    padding: 0px; /* Default padding for larger screens */
    
    @media (max-width: 768px) {
        width: 90%; /* Adjust width for tablet screens */
        padding: 15px; /* Adjust padding for tablet screens */
        font-size: 16px; /* Adjust font size for tablet screens */
    }

    @media (max-width: 480px) {
        width: 95%; /* Adjust width for mobile screens */
        padding: 10px; /* Adjust padding for mobile screens */
        font-size: 14px; /* Adjust font size for mobile screens */
    }
`,um=S.input`
  padding: 15px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  background-color: rgba(65, 90, 119, 0.8);
  color: #e0e1dd;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: rgba(224, 225, 221, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #778da9;
  }
`,b3=S.textarea`
  padding: 15px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  background-color: rgba(65, 90, 119, 0.8);
  color: #e0e1dd;
  resize: none;
  height: 150px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: rgba(224, 225, 221, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #778da9;
  }
`,A3=ir`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`,j3=ir`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,R3=S.button`
  padding: 15px;
  font-size: 1.2em;
  color: #e0e1dd;
  background: linear-gradient(135deg, #1b263b, #415a77, #1b263b);
  background-size: 200% 200%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    animation: ${A3} 2s ease forwards;
  }

  &:not(:hover) {
    animation: ${j3} 2s ease forwards;
  }
`,L3=ir`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`,O3=S.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Size of the circle */
    height: 40px; /* Size of the circle */
    background-color: #28a745; /* Circle background color */
    border-radius: 50%; /* Makes it circular */
    margin-right: 10px; /* Space between the icon and text */
`,M3=()=>g.jsx(O3,{children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",fill:"#ffffff",children:g.jsx("path",{d:"M20.285 5.293a1 1 0 00-1.414 0L9 14.586 5.707 11.293a1 1 0 00-1.414 1.414l4.293 4.293a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"})})}),_3=S.div`
    animation: ${L3} 0.5s ease forwards; /* Animation effect */
    color: #fff; /* Dark teal text */
    border: 2px solid #fff; /* Darker border */
    border-radius: 20px; /* Rounded corners */
    padding: 20px;
    width:80%;
    margin-top: 20px; /* Space above the message */
    text-align: center; /* Center align text */
    font-size: 1.2em; /* Larger font size */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    display:flex;
    align-items:center;
    justify-content:center;
`,D3=()=>{const[e,t]=A.useState(!1),n=r=>{r.preventDefault();const i=r.target;console.log("Submit button clicked!");const o=new FormData(i);o.append("access_key","9ee753a6-c053-4819-9996-56a1043ba7f4"),fe.post("https://api.web3forms.com/submit",o).then(s=>{s.data.success?t(!0):alert("There was an error. Please try again.")}).catch(s=>{console.error(s),alert("There was an error. Please try again.")})};return g.jsxs(g3,{id:"connect",children:[g.jsx(lm,{children:"Let's Connect"}),g.jsxs(y3,{children:[g.jsxs(v3,{children:[g.jsx(x3,{children:g.jsx(h3,{})}),g.jsx(lm,{children:"Contact Me"}),g.jsx(w3,{children:"If you have any questions or just want to say hello, feel free to reach out!"}),g.jsxs(S3,{children:[g.jsx(k3,{children:"Email: sameermujahid7777@gmail.com"}),g.jsx(C3,{children:"Phone: +91 8317506633"})]}),g.jsxs(P3,{children:[g.jsx(Bo,{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",target:"_blank","aria-label":"LinkedIn Profile",children:g.jsx(Yd,{})}),g.jsx(Bo,{href:"https://github.com/sameermujahid",target:"_blank","aria-label":"GitHub Profile",children:g.jsx(Gd,{})}),g.jsx(Bo,{href:"https://www.instagram.com/sameer.mujahid/",target:"_blank","aria-label":"Instagram Profile",children:g.jsx(Kd,{})}),g.jsx(Bo,{href:"https://x.com/sameer__mujahid",target:"_blank","aria-label":"Twitter Profile",children:g.jsx(Wd,{})})]})]}),g.jsxs(T3,{children:[g.jsxs(E3,{onSubmit:n,children:[g.jsx(um,{type:"text",name:"name",placeholder:"Your Name",required:!0}),g.jsx(um,{type:"email",name:"email",placeholder:"Your Email",required:!0}),g.jsx(b3,{name:"message",placeholder:"Your Message",required:!0}),g.jsx(R3,{type:"submit",children:"Send Message"})]}),e&&g.jsxs(_3,{children:[g.jsx(M3,{}),"Thank you for your message! I'll get back to you soon."]})]})]})]})},lt={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},z3=S.footer`
    background-color: ${lt.richBlack};
    color: ${lt.platinum};
    padding: 40px 20px;
    border-top: 4px solid ${lt.yinmnBlue};
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,N3=S.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,Dl=S.div`
    min-width: 200px;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        border-bottom: 1px solid ${lt.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,zl=S.h3`
    color: ${lt.yinmnBlue};
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }

    &:before {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background: ${lt.yinmnBlue};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:before {
        width: 100%;
    }
`,ge=S.a`
    color: ${lt.platinum};
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${lt.yinmnBlue};
        text-decoration: underline;
    }
`,V3=S.div`
    @media (min-width: 769px) {
        display: none;
    }
`,Nl=S.div`
    background: ${lt.yinmnBlue};
    color: ${lt.platinum};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
        background: ${lt.silverLakeBlue};
    }
`,Vl=S.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    background: ${lt.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,I3=({setActiveTab:e})=>{const[t,n]=A.useState(null),r=o=>{n(t===o?null:o)},i=(o,s)=>{const a=document.querySelector(o);a&&a.scrollIntoView({behavior:"smooth",block:"start"}),e(s)};return g.jsxs(z3,{children:[g.jsxs(N3,{children:[g.jsxs(Dl,{children:[g.jsx(zl,{children:"My Details"}),g.jsx("div",{children:"Name: Shaik Sameer Mujahid"}),g.jsx("div",{children:"Email: sameermujahid7777@gmail.com"}),g.jsx("div",{children:"Phone: +91 8317506633"})]}),g.jsxs(Dl,{children:[g.jsx(zl,{children:"Sections"}),g.jsx(ge,{onClick:()=>i("#home","Home"),children:"Home"}),g.jsx(ge,{onClick:()=>i("#skills","Skills"),children:"Skills"}),g.jsx(ge,{onClick:()=>i("#more","Projects"),children:"Projects"}),g.jsx(ge,{onClick:()=>i("#more","Certificates"),children:"Certificates"}),g.jsx(ge,{onClick:()=>i("#more","Education"),children:"Education"}),g.jsx(ge,{onClick:()=>i("#more","Experience"),children:"Experience"})]}),g.jsxs(Dl,{children:[g.jsx(zl,{children:"Connect"}),g.jsx(ge,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),g.jsx(ge,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),g.jsx(ge,{onClick:()=>i("#connect","Connect"),children:"Let's Connect"})]})]}),g.jsxs(V3,{children:[g.jsx(Nl,{onClick:()=>r("details"),children:"My Details"}),g.jsxs(Vl,{isOpen:t==="details",children:[g.jsx("div",{children:"Name: Shaik Sameer Mujahid"}),g.jsx("div",{children:"Email: sameermujahid7777@gmail.com"}),g.jsx("div",{children:"Phone: +91 8317506633"})]}),g.jsx(Nl,{onClick:()=>r("topics"),children:"Sections"}),g.jsxs(Vl,{isOpen:t==="topics",children:[g.jsx(ge,{onClick:()=>i("#home","Home"),children:"Home"}),g.jsx(ge,{onClick:()=>i("#skills","Skills"),children:"Skills"}),g.jsx(ge,{onClick:()=>i("#more","Projects"),children:"Projects"}),g.jsx(ge,{onClick:()=>i("#more","Certificates"),children:"Certificates"}),g.jsx(ge,{onClick:()=>i("#more","Education"),children:"Education"}),g.jsx(ge,{onClick:()=>i("#more","Experience"),children:"Experience"})]}),g.jsx(Nl,{onClick:()=>r("connect"),children:"Connect"}),g.jsxs(Vl,{isOpen:t==="connect",children:[g.jsx(ge,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),g.jsx(ge,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),g.jsx(ge,{onClick:()=>i("#connect","Connect"),children:"Let's Connect"})]})]})]})},B3={richBlack:"#0d1b2aff",oxfordBlue:"#1b263bff",yinmnBlue:"#415a77ff",silverLakeBlue:"#778da9ff",platinum:"#e0e1ddff"},F3=S.div`
  text-align: center;
  color: #e0e1dd;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`,$3=S.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${B3.platinum};
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`,U3=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`,H3=S.div`
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`,W3=S.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`,K3=S.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  color: #dcdcdc;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`,G3=S.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`,Y3=S.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`,cm=S.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #0d1b2aff;
    color: #fff;
  }
`,X3=()=>{const e=Tt.courses_certificates;return g.jsxs(F3,{children:[g.jsx($3,{children:"Certificates"}),g.jsx(U3,{children:e.map((t,n)=>g.jsxs(H3,{children:[g.jsx(W3,{children:t.course}),g.jsxs(K3,{children:["Date: ",t.duration]}),g.jsx(G3,{children:t.description}),g.jsxs(Y3,{children:[g.jsx(cm,{href:t.pdf,download:`${t.course.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),g.jsx(cm,{href:t.pdf,target:"_blank",rel:"noopener noreferrer",children:"View"})]})]},n))})]})};var Da={},rv={exports:{}},Q3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q3=Q3,J3=q3;function iv(){}function ov(){}ov.resetWarningCache=iv;var Z3=function(){function e(r,i,o,s,a,l){if(l!==J3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ov,resetWarningCache:iv};return n.PropTypes=n,n};rv.exports=Z3();var sv=rv.exports,av={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)t.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(av);var lv=av.exports;Da.__esModule=!0;Da.default=void 0;var e4=ef(A),nn=ef(sv),t4=ef(lv);function ef(e){return e&&e.__esModule?e:{default:e}}const uv=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:r="#FFF",children:i})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",r),e4.default.createElement("div",{className:(0,t4.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},i));uv.propTypes={children:nn.default.oneOfType([nn.default.arrayOf(nn.default.node),nn.default.node]).isRequired,className:nn.default.string,animate:nn.default.bool,layout:nn.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:nn.default.string};var n4=uv;Da.default=n4;var za={};function cc(){return cc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cc.apply(this,arguments)}function r4(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,dc(e,t)}function dc(e,t){return dc=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},dc(e,t)}function i4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var fc=new Map,Fo=new WeakMap,dm=0,cv=void 0;function o4(e){cv=e}function s4(e){return e?(Fo.has(e)||(dm+=1,Fo.set(e,dm.toString())),Fo.get(e)):"0"}function a4(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?s4(e.root):e[t])}).toString()}function l4(e){var t=a4(e),n=fc.get(t);if(!n){var r=new Map,i,o=new IntersectionObserver(function(s){s.forEach(function(a){var l,u=a.isIntersecting&&i.some(function(c){return a.intersectionRatio>=c});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(function(c){c(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},fc.set(t,n)}return n}function tf(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=cv),typeof window.IntersectionObserver>"u"&&r!==void 0){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=l4(n),s=o.id,a=o.observer,l=o.elements,u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(t),a.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),fc.delete(s))}}var u4=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function fm(e){return typeof e.children!="function"}var ea=function(e){r4(t,e);function t(r){var i;return i=e.call(this,r)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(o){i.node&&(i.unobserve(),!o&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=o||null,i.observeNode()},i.handleChange=function(o,s){o&&i.props.triggerOnce&&i.unobserve(),fm(i.props)||i.setState({inView:o,entry:s}),i.props.onChange&&i.props.onChange(o,s)},i.state={inView:!!r.initialInView,entry:void 0},i}var n=t.prototype;return n.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,o=i.threshold,s=i.root,a=i.rootMargin,l=i.trackVisibility,u=i.delay,c=i.fallbackInView;this._unobserveCb=tf(this.node,this.handleChange,{threshold:o,root:s,rootMargin:a,trackVisibility:l,delay:u},c)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!fm(this.props)){var i=this.state,o=i.inView,s=i.entry;return this.props.children({inView:o,entry:s,ref:this.handleNode})}var a=this.props,l=a.children,u=a.as,c=i4(a,u4);return A.createElement(u||"div",cc({ref:this.handleNode},c),l)},t}(A.Component);ea.displayName="InView";ea.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function c4(e){var t=e===void 0?{}:e,n=t.threshold,r=t.delay,i=t.trackVisibility,o=t.rootMargin,s=t.root,a=t.triggerOnce,l=t.skip,u=t.initialInView,c=t.fallbackInView,d=A.useRef(),f=A.useState({inView:!!u}),v=f[0],y=f[1],x=A.useCallback(function(h){d.current!==void 0&&(d.current(),d.current=void 0),!l&&h&&(d.current=tf(h,function(p,m){y({inView:p,entry:m}),m.isIntersecting&&a&&d.current&&(d.current(),d.current=void 0)},{root:s,rootMargin:o,threshold:n,trackVisibility:i,delay:r},c))},[Array.isArray(n)?n.toString():n,s,o,a,l,i,c,r]);A.useEffect(function(){!d.current&&v.entry&&!a&&!l&&y({inView:!!u})});var k=[x,v.inView,v.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}const d4=Object.freeze(Object.defineProperty({__proto__:null,InView:ea,default:ea,defaultFallbackInView:o4,observe:tf,useInView:c4},Symbol.toStringTag,{value:"Module"})),f4=pv(d4);za.__esModule=!0;za.default=void 0;var rn=nf(A),Z=nf(sv),$o=nf(lv),p4=f4;function nf(e){return e&&e.__esModule?e:{default:e}}const dv=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:r=null,date:i="",dateClassName:o="",icon:s=null,iconClassName:a="",iconOnClick:l=null,onTimelineElementClick:u=null,iconStyle:c=null,id:d="",position:f="",style:v=null,textClassName:y="",intersectionObserverProps:x={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:k=!1})=>rn.default.createElement(p4.InView,x,({inView:h,ref:p})=>rn.default.createElement("div",{ref:p,id:d,className:(0,$o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":f==="left","vertical-timeline-element--right":f==="right","vertical-timeline-element--no-children":e===""}),style:v},rn.default.createElement(rn.default.Fragment,null,rn.default.createElement("span",{style:c,onClick:l,className:(0,$o.default)(a,"vertical-timeline-element-icon",{"bounce-in":h||k,"is-hidden":!(h||k)})},s),rn.default.createElement("div",{style:r,onClick:u,className:(0,$o.default)(y,"vertical-timeline-element-content",{"bounce-in":h||k,"is-hidden":!(h||k)})},rn.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,rn.default.createElement("span",{className:(0,$o.default)(o,"vertical-timeline-element-date")},i)))));dv.propTypes={children:Z.default.oneOfType([Z.default.arrayOf(Z.default.node),Z.default.node]),className:Z.default.string,contentArrowStyle:Z.default.shape({}),contentStyle:Z.default.shape({}),date:Z.default.node,dateClassName:Z.default.string,icon:Z.default.element,iconClassName:Z.default.string,iconStyle:Z.default.shape({}),iconOnClick:Z.default.func,onTimelineElementClick:Z.default.func,id:Z.default.string,position:Z.default.string,style:Z.default.shape({}),textClassName:Z.default.string,visible:Z.default.bool,intersectionObserverProps:Z.default.shape({root:Z.default.object,rootMargin:Z.default.string,threshold:Z.default.number,triggerOnce:Z.default.bool})};var h4=dv;za.default=h4;var pm={VerticalTimeline:Da.default,VerticalTimelineElement:za.default};const xe={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},m4=IS`
    .vertical-timeline-element {
        transition: none !important;
    }

    .vertical-timeline-element-content {
        transition: none !important;
        animation: none !important;
    }

    .vertical-timeline-element-content-arrow {
        transition: none !important;
        animation: none !important;
    }
`,g4=S.div`
    color: ${xe.platinum};
    padding: 1.5rem 1rem;
    
    @media (min-width: 768px) {
        padding: 2rem 1.5rem;
    }

    @media (min-width: 1024px) {
        padding: 3rem 2rem;
    }
`,y4=S.h1`
    font-size: 2.5rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${xe.platinum};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`,v4=S.div`
    background: ${xe.yinmnBlue};
    color: ${xe.platinum};
    border-radius: 50%;
    font-size: 2.5rem; // Reduced font size
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; // Reduced width
    height: 100%; // Reduced height
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: background 0.4s ease, transform 0.4s ease;

    &:hover {
        background: ${xe.richBlack};
        transform: rotate(360deg) scale(1.1); // Slightly smaller scale
    }

    @media (max-width: 1024px) {
        font-size: 2rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }

    @media (max-width: 768px) {
        font-size: 1.75rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }
`,x4=S.div`
    color: ${xe.platinum};
    font-size: 1.1rem; // Reduced font size
    font-weight: bold;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${xe.silverLakeBlue};
    padding-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`,w4=S.div`
    background: linear-gradient(135deg, ${xe.oxfordBlue} 30%, ${xe.yinmnBlue} 100%);
    color: ${xe.platinum};
    padding: 1rem; // Reduced padding
    border-radius: 20px; // Reduced border radius
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    border: 1px solid ${xe.silverLakeBlue};
    position: relative;
display:flex;
flex-direction:column;
gap:5px;
    &:before {
        content: '';
        position: absolute;
        top: -15px; // Adjusted for smaller content
        left: -15px; // Adjusted for smaller content
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        border-radius: 20px;
        z-index: -1;
    }

    h3 {
        font-size: 1.5rem; // Reduced font size
        margin-bottom: 0.5rem;
        font-weight: 700;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px) {
            font-size: 1.4rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    h5 {
        font-size: 1.2rem; // Reduced font size
        margin-bottom: 1rem;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    p {
        margin: 0;
        line-height: 1.5; // Adjusted line height
    }

    &:hover {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
    }
`,S4=S.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`,k4=S.div`
    width: 15px; // Reduced size
    height: 15px; // Reduced size
    border-radius: 50%;
    background: ${e=>e.isFilled?xe.platinum:xe.yinmnBlue};
    margin-right: 0.5rem;
    transition: background 0.4s ease;
    
    @media (max-width: 480px) {
        width: 8px; // Reduced size
        height: 8px; // Reduced size
    }
`,C4=S.span`
    color: ${xe.platinum};
    font-size: 0.9rem; // Reduced font size
`,P4=S.span`
  font-size: 2rem;  // Larger for the main title
  font-weight: bold;
  color: #ffffff;
`,T4=S.span`
  font-size: 1.2rem;  // Medium size for location
  font-weight: 500;
  color: #c4c4c4;
`,E4=S.span`
  font-size: 1rem;  // Standard font size for the description
  color: #d3d3d3;
`,b4=e=>typeof e=="number"?Math.round(e):e.includes("%")?Math.round(parseFloat(e)/10):0,A4=()=>{const e=A.useMemo(()=>[{id:1,title:"SSC",location:"Keshava Reddy High School",date:"2017-2018",description:"Completed secondary school with outstanding performance.",gpa:10},{id:2,title:"Intermediate (MPC)",location:"Tirumala Junior College, Katheru",date:"2018-2020",description:"Completed intermediate with a focus on Mathematics, Physics, and Chemistry.",gpa:8.1},{id:3,title:"B.Tech (Computer Science and Engineering)",location:"Adikavi Nannaya University, Rajanagaram",date:"2020-2024",description:"Pursuing a Bachelor's degree in Computer Science with various projects and internships.",gpa:8.8}],[]);return g.jsxs(g4,{children:[g.jsx(m4,{}),g.jsx(y4,{children:"Education"}),g.jsx(pm.VerticalTimeline,{children:e.map(t=>g.jsx(pm.VerticalTimelineElement,{date:t.date,contentStyle:{background:"none",color:xe.platinum},contentArrowStyle:{borderRight:`7px solid ${xe.oxfordBlue}`},iconStyle:{background:xe.yinmnBlue,color:xe.platinum},icon:g.jsx(v4,{children:t.id}),children:g.jsxs(w4,{children:[g.jsx(P4,{children:t.title}),g.jsx(T4,{children:t.location}),g.jsx(x4,{children:t.date}),g.jsx(E4,{children:t.description}),g.jsxs(S4,{children:[Array.from({length:10}).map((n,r)=>g.jsx(k4,{isFilled:r<b4(t.gpa)},r)),g.jsxs(C4,{children:["GPA: ",t.gpa]})]})]})},t.id))})]})},j4="/assets/myc_certificate-C-mqIS4g.pdf",R4="/assets/arthashastra_certificate-CZ3k_n3F.pdf",L4={richBlack:"#0d1b2aff",oxfordBlue:"#1b263bff",yinmnBlue:"#415a77ff",silverLakeBlue:"#778da9ff",platinum:"#e0e1ddff"},O4=S.div`
  padding: 50px 20px;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;

  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`,M4=S.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${L4.platinum};
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
=    }

    @media (max-width: 480px) {
        font-size: 2rem;
=    }
`,_4=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  font-family: 'Arial', sans-serif;
`,D4=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`,z4=S.div`
  flex-grow: 1;
`,N4=S.div`
  font-size: 1.8em;
  font-weight: bold;
  color: #e0e1dd;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`,V4=S.div`
  font-size: 1.4em;
  color: #e0e1dd;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`,I4=S.div`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,B4=S.p`
  color: #e0e1dd;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,F4=S.ul`
  margin-top: 20px;
  color: #e0e1dd;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,$4=S.li`
  margin-bottom: 8px;
`,U4=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`,H4=S.div`
  background-color: #415a77;
  color: #e0e1dd;
  padding: 8px 12px;
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 6px 10px;
  }
`,W4=S.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`,hm=S.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border: none; /* Removes border */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  outline: none; /* Removes any outline on focus */

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #0d1b2aff;
    color: #fff;
  }

  &:focus {
    outline: none; /* Ensures no outline appears on focus */
  }

  &:active {
    transform: scale(0.98); /* Adds a subtle effect on click */
  }
`,K4=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:j4,companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer (Intern)",duration:"Duration: 5 months",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.",responsibilities:["Developed responsive interfaces using React for frontend components.","Created essential components in React using Django Rest Framework.","Built and maintained entire websites using Wordpress.","Collaborated to implement new features and enhance existing ones."],skills:["React","Django Rest Framework","Wordpress"],certificateUrl:R4,companyUrl:"https://arthashastra.ai/"}],t=n=>{const r=document.createElement("a");r.href=n,r.setAttribute("download",""),document.body.appendChild(r),r.click(),document.body.removeChild(r)};return g.jsxs(O4,{children:[g.jsx(M4,{children:"Internship and Experience"}),g.jsx(_4,{children:e.map((n,r)=>g.jsxs(D4,{children:[g.jsxs(z4,{children:[g.jsx(N4,{children:n.company}),g.jsx(V4,{children:n.role}),g.jsx(I4,{children:n.duration}),g.jsx(B4,{children:n.description}),g.jsx(F4,{children:n.responsibilities.map((i,o)=>g.jsx($4,{children:i},o))}),g.jsx(U4,{children:n.skills.map((i,o)=>g.jsx(H4,{children:i},o))})]}),g.jsxs(W4,{children:[g.jsx(hm,{href:n.companyUrl,target:"_blank",rel:"noopener noreferrer",children:"About Company"}),g.jsx(hm,{as:"button",onClick:()=>t(n.certificateUrl),children:"Download Certificate"})]})]},r))})]})},Il=[],mm=[];function G4(e,t){if(e===t)return 0;const n=e;e.length>t.length&&(e=t,t=n);let r=e.length,i=t.length;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-i);)r--,i--;let o=0;for(;o<r&&e.charCodeAt(o)===t.charCodeAt(o);)o++;if(r-=o,i-=o,r===0)return i;let s,a,l,u,c=0,d=0;for(;c<r;)mm[c]=e.charCodeAt(o+c),Il[c]=++c;for(;d<i;)for(s=t.charCodeAt(o+d),l=d++,a=d,c=0;c<r;c++)u=s===mm[c]?l:l+1,l=Il[c],a=Il[c]=l>a?u>a?a+1:u:u>l?l+1:u;return a}function Y4(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"},child:[]}]})(e)}const F={richBlack:"#0d1b2aff",oxfordBlue:"#1b263bff",yinmnBlue:"#415a77ff",silverLakeBlue:"#778da9ff",platinum:"#e0e1ddff"},X4=S.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
    right: 5px;
    gap: 2px;
  }
`,Q4=S.div`
  background-color: ${F.oxfordBlue};
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  color: ${F.platinum};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 10px ${F.platinum};

  &:hover {
    background-color: ${F.silverLakeBlue};
    box-shadow: 0 0 25px ${F.platinum};
    color: ${F.richBlack};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,q4=ir`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,J4=S.div`
  width: 500px;
  height: 500px;
  background: linear-gradient(145deg, ${F.richBlack}, ${F.oxfordBlue});
  border-radius: 20px;
  display: ${({isVisible:e})=>e?"flex":"none"};
  flex-direction: column;
  overflow: hidden;
  animation: ${q4} 0.5s ease-in-out;
  border: 2px solid ${F.silverLakeBlue};

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 500px;
  }
`,Z4=S.div`
  background: ${F.silverLakeBlue};
  color: ${F.richBlack};
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.3em;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
    padding: 6px;
  }
`,eb=S.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  color: ${F.platinum};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  scrollbar-width: thin;
  scrollbar-color: ${F.silverLakeBlue} ${F.oxfordBlue};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${F.oxfordBlue};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${F.silverLakeBlue};
    border-radius: 10px;
    border: 2px solid ${F.oxfordBlue};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,tb=S.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${F.richBlack};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`,nb=S.input`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: ${F.oxfordBlue};
  color: ${F.platinum};
  outline: none;
  transition: background 0.3s, color 0.3s;

  &:focus {
    background: ${F.richBlack};
    color: ${F.silverLakeBlue};
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`,rb=S.button`
  background-color: ${F.silverLakeBlue};
  color: ${F.richBlack};
  border: none;
  border-radius: 8px;
  padding: 12px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${F.richBlack};
    color: ${F.silverLakeBlue};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9em;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.8em;
    margin-left: 5px;
  }
`,ib=S.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
`,ob=S.span`
  margin: 5px;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: ${F.silverLakeBlue};
  color: ${F.richBlack};
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${F.richBlack};
    color: ${F.silverLakeBlue};
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 4px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 3px 10px;
  }
`,sb=S.div`
  &::after {
    content: '...';
    animation: blink 1s step-start 0s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`,ab=S.div`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({sender:e})=>e==="user"?F.silverLakeBlue:F.oxfordBlue};
  color: ${({sender:e})=>e==="user"?F.richBlack:F.platinum};
  margin-bottom: 10px;
  white-space: pre-wrap; /* Preserves white space and line breaks */
`,lb=()=>{const[e,t]=A.useState([]),[n,r]=A.useState(""),[i,o]=A.useState(!1),[s,a]=A.useState(""),[l,u]=A.useState(!1),[c,d]=A.useState(!1),f=A.useRef(null),v=["hi","hello","good morning","good afternoon","good evening"],y=R=>{r(R.target.value)},x=async R=>{if(R.trim()==="")return;const D=[...e,{text:R,sender:"user"}];t(D),r(""),d(!0),setTimeout(async()=>{let J=await k(R);t([...D,{text:J,sender:"bot"}]),d(!1)},1e3)},k=async(R,D=!1)=>{if(D)return await k(s);if(v.includes(R.toLowerCase()))return"Hello! How can I assist you today?";const pe=["name","education","skills","projects","contact","resume","experience","internship","summary"].find(ue=>R.toLowerCase().includes(ue));if(pe)switch(pe){case"name":return`My name is ${Tt.name}.`;case"education":return p();case"skills":return m();case"projects":return w();case"contact":return`You can contact me via email at ${Tt.contact.email} or connect with me on LinkedIn at ${Tt.contact.linkedin}.`;case"resume":return b(),"Downloading resume...";case"experience":case"internship":return P();case"summary":return T();default:return"I'm sorry, I don't have information on that topic. Please ask something else."}else{const ue=await h(R);return ue!==R?(o(!0),a(ue),`I don't understand "${R}". Did you mean "${ue}"?`):"I'm sorry, I don't have information on that topic. Please ask something else."}},h=async R=>{const D=["name","education","skills","projects","contact","resume","experience","internship","summary"];let J=R,pe=1/0;return D.forEach(ue=>{const Mt=G4(R,ue);Mt<pe&&(pe=Mt,J=ue)}),J},p=()=>{const{btech:R,intermediate:D,ssc:J}=Tt.education;return`Education:

1. ${R.degree}
   - Year: ${R.year}
   - GPA: ${R.gpa}
   - University: ${R.university}

2. ${D.degree}
   - Year: ${D.year}
   - College: ${D.college}
   - Percentage: ${D.percentage}

3. SSC
   - Year: ${J.year}
   - School: ${J.school}
   - GPA: ${J.gpa}`},m=()=>{const{programming_languages:R,platforms:D,database:J,presentation:pe,web_fundamentals:ue,framework:Mt,additional_skills:qt}=Tt.skills;return`Skills:
Programming Languages: ${R.join(", ")}
Platforms: ${D.join(", ")}
Database: ${J.join(", ")}
Presentation: ${pe.join(", ")}
Web Fundamentals: ${ue.join(", ")}
Framework: ${Mt.join(", ")}
Additional Skills: ${qt.join(", ")}`},w=()=>`Projects:
${Tt.projects.map(D=>`${D.name}:
${D.description}`).join(`

`)}`,P=()=>`Internship Experience:
${Tt.internship_experience.map(D=>`${D.company} (${D.role}, ${D.duration?D.duration:"Intern"})
- ${D.responsibilities}`).join(`

`)}`,T=()=>{const{name:R,education:D,skills:J,projects:pe,contact:ue}=Tt;return`${R} is a student with skills in ${J.programming_languages.join(", ")} and experience in projects like ${pe[0].name}. Contact ${ue.email} for more information.`},E=R=>{x(R)},b=()=>{window.open("D:/portfolio/src/assets/shaik_sameer_muajhid_resume.pdf")};A.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[e]);const V=["name","education","skills","projects","contact","resume","experience","internship","summary"];return g.jsxs(X4,{children:[g.jsx(Q4,{onClick:()=>u(!l),children:g.jsx(Y4,{size:28})}),g.jsxs(J4,{isVisible:l,children:[g.jsx(Z4,{children:"Know about me"}),g.jsxs(eb,{ref:f,children:[e.map((R,D)=>g.jsx("div",{style:{textAlign:R.sender==="user"?"right":"left"},children:g.jsx(ab,{sender:R.sender,children:R.text})},D)),c&&g.jsx(sb,{children:"Typing"})]}),g.jsxs(tb,{children:[g.jsx(nb,{type:"text",placeholder:"Type your message...",value:n,onChange:y,onKeyPress:R=>{R.key==="Enter"&&x(n)}}),g.jsx(rb,{onClick:()=>x(n),children:"Send"})]}),g.jsx(ib,{children:V.map((R,D)=>g.jsx(ob,{onClick:()=>E(R),children:R},D))})]})]})},ub=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`,cb=S.div`
  position: sticky;
  top: 75px;
  display: flex;
  justify-content: center;
  background-color: #1b263b;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1;
`,Uo=S(Ee.button)`
  position: relative;
  background: none;
  border: none;
  color: #e0e1dd;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #778da9;
  }

  &.active {
    color: #e0e1dd;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #415a77; /* Border color */
    border-radius: 50px; /* Slightly rounded corners */
    transform: scale(0); /* Start off as 0 scale */
    transition: transform 0.4s ease-in-out; /* Animation for scale */
    z-index: -1; /* Behind the text */
  }

  &.active:after {
    transform: scale(1); /* Scale to cover the button */
  }

  @media (max-width: 768px) {
    span {
      display: none; // Hide text on mobile
    }
  }
`,Ho=S(Ee.div)`
  width: 100%;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  transform: translateY(-10px);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`,db=()=>{const[e,t]=A.useState("Certificates"),n=()=>{const r=window.location.hash.replace("#","");["Certificates","Education","Experience","Projects"].includes(r)?t(r):t("Certificates")};return A.useEffect(()=>(n(),window.addEventListener("hashchange",n),()=>{window.removeEventListener("hashchange",n)}),[]),g.jsxs(ub,{id:"more",children:[g.jsxs(cb,{children:[g.jsxs(Uo,{className:e==="Certificates"?"active":"",onClick:()=>t("Certificates"),whileHover:{scale:1.1},whileTap:{scale:.9},children:[g.jsx(qP,{size:24}),g.jsx("span",{children:"Certificates"})]}),g.jsxs(Uo,{className:e==="Education"?"active":"",onClick:()=>t("Education"),whileHover:{scale:1.1},whileTap:{scale:.9},children:[g.jsx(JP,{size:24}),g.jsx("span",{children:"Education"})]}),g.jsxs(Uo,{className:e==="Experience"?"active":"",onClick:()=>t("Experience"),whileHover:{scale:1.1},whileTap:{scale:.9},children:[g.jsx(QP,{size:24}),g.jsx("span",{children:"Experience"})]}),g.jsxs(Uo,{className:e==="Projects"?"active":"",onClick:()=>t("Projects"),whileHover:{scale:1.1},whileTap:{scale:.9},children:[g.jsx(ZP,{size:24}),g.jsx("span",{children:"Projects"})]})]}),g.jsxs(j1,{wait:!0,children:[e==="Certificates"&&g.jsx(Ho,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:g.jsx(X3,{})},"Certificates"),e==="Education"&&g.jsx(Ho,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:g.jsx(A4,{})},"Education"),e==="Experience"&&g.jsx(Ho,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:g.jsx(K4,{})},"Experience"),e==="Projects"&&g.jsx(Ho,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:g.jsx(NT,{})},"Projects")]})]})},fb=ir`
  from { width: 50px; height: 50px; }
  to { width: 60px; height: 60px; }
`,pb=ir`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;S.div`
  position: fixed;
  border: 2px solid #e0e1dd; /* Border color */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${fb} 0.5s cubic-bezier(.51, 0, 0.4, .5) alternate infinite;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: none;

  &.active {
    animation: ${pb} 0.5s ease;
  }

  /* Dynamic background effect when hovering */
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease; /* Smooth transition for hover */
`;S.div`
  position: fixed;
  width: 12px; /* Size of the dot */
  height: 12px; /* Size of the dot */
  background: #778da9; /* Default color */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1001;
  box-shadow: 0 0 8px 2px #0d1b2a; /* Glow effect */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */

  /* Inverted color on hover */
  &.hovered {
    background: #e0e1dd; /* Inverted color */
    box-shadow: 0 0 12px 4px #00aaff; /* Glow effect */
  }
`;const hb="/assets/about5-jU8IswgW.jpg",rf={platinum:"#e0e1dd"},mb=S.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${rf.platinum};
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`,gb=S.section`
    padding: 4rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1rem;
    }
`,yb=S.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
    background: linear-gradient(90deg, #3b5c8e, #1b263b, #0a0d12);
    color: ${rf.platinum};
    border-radius: 40px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    max-width: 1200px;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 30px 20px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
            border-radius: 20px;

    }
`,vb=S.div`
    flex: 1;
    padding: 20px;

    img {
        width: 100%;
        max-height: 300px; /* Adjusted for mobile responsiveness */
        border-radius: 30px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, filter 0.5s ease; /* Add filter transition */
        object-fit: cover;
        filter: grayscale(100%); /* Start with black and white */

        &:hover {
            transform: scale(1.02);
            filter: grayscale(0%); /* Transition to color on hover */
        }
    }

    @media (max-width: 768px) {
        padding: 15px;

        img {
            max-height: 250px; /* Smaller image height for tablets */
                    border-radius: 20px;

        }
    }

    @media (max-width: 480px) {
        padding: 10px;
        width: 100%;
        
        img {
            max-height: 200px; /* Even smaller for mobile */
        }
    }
`,xb=S.div`
    flex: 1;
    padding: 20px;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 50px;
            height: 5px;
            background-color: ${rf.platinum};
            border-radius: 5px;
            opacity: 0.7;
        }

        @media (max-width: 768px) {
            font-size: 2rem; /* Smaller heading for tablets */
        }

        @media (max-width: 480px) {
            font-size: 1.5rem; /* Even smaller heading for mobile */
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 15px;

        @media (max-width: 768px) {
            font-size: 1rem; /* Smaller paragraph text for tablets */
        }

        @media (max-width: 480px) {
            font-size: 0.9rem; /* Even smaller paragraph text for mobile */
        }
    }
`,wb=()=>g.jsxs(gb,{id:"about",children:[g.jsx(mb,{children:"About Me"}),g.jsxs(yb,{children:[g.jsx(vb,{children:g.jsx("img",{src:hb,alt:"About Me"})}),g.jsxs(xb,{children:[g.jsx("p",{children:"Hello! I’m a passionate and dedicated individual with a keen interest in technology and innovation. My journey in the world of data science and software development has equipped me with a strong skill set in various programming languages and frameworks. I thrive in collaborative environments and enjoy solving complex problems through creative solutions."}),g.jsx("p",{children:"In my free time, I love exploring new technologies, working on personal projects, I am always eager to learn and grow, both personally and professionally."}),g.jsxs("div",{style:{display:"flex",gap:"20px",justifyContent:"center"},children:[g.jsx(pn,{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",target:"_blank","aria-label":"LinkedIn Profile",children:g.jsx(Yd,{})}),g.jsx(pn,{href:"https://github.com/sameermujahid",target:"_blank","aria-label":"GitHub Profile",children:g.jsx(Gd,{})}),g.jsx(pn,{href:"https://www.instagram.com/sameer.mujahid/",target:"_blank","aria-label":"Instagram Profile",children:g.jsx(Kd,{})}),g.jsx(pn,{href:"https://x.com/sameer__mujahid",target:"_blank","aria-label":"Twitter Profile",children:g.jsx(Wd,{})})]})]})]})]}),Sb=S.div`
    font-family: Arial, sans-serif;
`,kb=()=>g.jsxs(Sb,{children:[g.jsx(GP,{}),g.jsx(eT,{}),g.jsx(wb,{}),g.jsx(lb,{}),g.jsx(wT,{}),g.jsx(db,{}),g.jsx(D3,{}),g.jsx(I3,{})]});Bl.createRoot(document.getElementById("root")).render(g.jsx(Ce.StrictMode,{children:g.jsx(kb,{})}));
