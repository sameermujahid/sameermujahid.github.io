const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutMe--wTXI_wf.js","assets/useScrollAnimation-WdAd04ra.js","assets/Skills-BbeE3H-E.js","assets/index-DOE5td5B.js","assets/Tabs-OZaw54-5.js","assets/Connect-Blh5TV-b.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ph(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eh={exports:{}},Ws={},Th={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),yv=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),wv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Pv=Symbol.for("react.memo"),Ev=Symbol.for("react.lazy"),Sd=Symbol.iterator;function Tv(e){return e===null||typeof e!="object"?null:(e=Sd&&e[Sd]||e["@@iterator"],typeof e=="function"?e:null)}var Rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lh=Object.assign,Ah={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Ah,this.updater=n||Rh}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $h(){}$h.prototype=Or.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Ah,this.updater=n||Rh}var Nu=zu.prototype=new $h;Nu.constructor=zu;Lh(Nu,Or.prototype);Nu.isPureReactComponent=!0;var bd=Array.isArray,jh=Object.prototype.hasOwnProperty,Fu={current:null},Mh={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jh.call(t,r)&&!Mh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ji,type:e,key:o,ref:s,props:i,_owner:Fu.current}}function Rv(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function Lv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lv(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ji:case yv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ka(s,0):r,bd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),zo(i,t,n,"",function(u){return u})):i!=null&&(Ou(i)&&(i=Rv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",bd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ka(o,a);s+=zo(o,t,n,l,i)}else if(l=Tv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ka(o,a++),s+=zo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function po(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},No={transition:null},$v={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:No,ReactCurrentOwner:Fu};function Ih(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:po,forEach:function(e,t,n){po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return po(e,function(){t++}),t},toArray:function(e){return po(e,function(t){return t})||[]},only:function(e){if(!Ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Or;N.Fragment=vv;N.Profiler=wv;N.PureComponent=zu;N.StrictMode=xv;N.Suspense=Cv;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;N.act=Ih;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Fu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jh.call(t,l)&&!Mh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ji,type:e.type,key:i,ref:o,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:bv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sv,_context:e},e.Consumer=e};N.createElement=Dh;N.createFactory=function(e){var t=Dh.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:kv,render:e}};N.isValidElement=Ou;N.lazy=function(e){return{$$typeof:Ev,_payload:{_status:-1,_result:e},_init:Av}};N.memo=function(e,t){return{$$typeof:Pv,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};N.unstable_act=Ih;N.useCallback=function(e,t){return Ae.current.useCallback(e,t)};N.useContext=function(e){return Ae.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};N.useEffect=function(e,t){return Ae.current.useEffect(e,t)};N.useId=function(){return Ae.current.useId()};N.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Ae.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};N.useRef=function(e){return Ae.current.useRef(e)};N.useState=function(e){return Ae.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Ae.current.useTransition()};N.version="18.3.1";Th.exports=N;var w=Th.exports;const ce=Ph(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=w,Mv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Iv=Object.prototype.hasOwnProperty,_v=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function _h(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Iv.call(t,r)&&!zv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Mv,type:e,key:o,ref:s,props:i,_owner:_v.current}}Ws.Fragment=Dv;Ws.jsx=_h;Ws.jsxs=_h;Eh.exports=Ws;var k=Eh.exports,yl={},zh={exports:{}},Ge={},Nh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var _=L.length;L.push(M);e:for(;0<_;){var U=_-1>>>1,W=L[U];if(0<i(W,M))L[U]=M,L[_]=W,_=U;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],_=L.pop();if(_!==M){L[0]=_;e:for(var U=0,W=L.length,kn=W>>>1;U<kn;){var ot=2*(U+1)-1,Gt=L[ot],Fe=ot+1,Tt=L[Fe];if(0>i(Gt,_))Fe<W&&0>i(Tt,Gt)?(L[U]=Tt,L[Fe]=_,U=Fe):(L[U]=Gt,L[ot]=_,U=ot);else if(Fe<W&&0>i(Tt,_))L[U]=Tt,L[Fe]=_,U=Fe;else break e}}return M}function i(L,M){var _=L.sortIndex-M.sortIndex;return _!==0?_:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function S(L){if(x=!1,m(L),!y)if(n(l)!==null)y=!0,Xn(C);else{var M=n(u);M!==null&&q(S,M.startTime-L)}}function C(L,M){y=!1,x&&(x=!1,h(T),T=-1),g=!0;var _=f;try{for(m(M),d=n(l);d!==null&&(!(d.expirationTime>M)||L&&!Q());){var U=d.callback;if(typeof U=="function"){d.callback=null,f=d.priorityLevel;var W=U(d.expirationTime<=M);M=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(l)&&r(l),m(M)}else r(l);d=n(l)}if(d!==null)var kn=!0;else{var ot=n(u);ot!==null&&q(S,ot.startTime-M),kn=!1}return kn}finally{d=null,f=_,g=!1}}var P=!1,E=null,T=-1,D=5,j=-1;function Q(){return!(e.unstable_now()-j<D)}function je(){if(E!==null){var L=e.unstable_now();j=L;var M=!0;try{M=E(!0,L)}finally{M?Ye():(P=!1,E=null)}}else P=!1}var Ye;if(typeof p=="function")Ye=function(){p(je)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Ne=yt.port2;yt.port1.onmessage=je,Ye=function(){Ne.postMessage(null)}}else Ye=function(){b(je,0)};function Xn(L){E=L,P||(P=!0,Ye())}function q(L,M){T=b(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Xn(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var _=f;f=M;try{return L()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var _=f;f=L;try{return M()}finally{f=_}},e.unstable_scheduleCallback=function(L,M,_){var U=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?U+_:U):_=U,L){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=_+W,L={id:c++,callback:M,priorityLevel:L,startTime:_,expirationTime:W,sortIndex:-1},_>U?(L.sortIndex=_,t(u,L),n(l)===null&&L===n(u)&&(x?(h(T),T=-1):x=!0,q(S,_-U))):(L.sortIndex=W,t(l,L),y||g||(y=!0,Xn(C))),L},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(L){var M=f;return function(){var _=f;f=M;try{return L.apply(this,arguments)}finally{f=_}}}})(Fh);Nh.exports=Fh;var Nv=Nh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=w,We=Nv;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oh=new Set,Ri={};function Gn(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(Ri[e]=t,e=0;e<t.length;e++)Oh.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,Ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Pd={};function Vv(e){return vl.call(Pd,e)?!0:vl.call(Cd,e)?!1:Ov.test(e)?Pd[e]=!0:(Cd[e]=!0,!1)}function Bv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uv(e,t,n,r){if(t===null||typeof t>"u"||Bv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vu=/[\-:]([a-z])/g;function Bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vu,Bu);we[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vu,Bu);we[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vu,Bu);we[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uv(t,n,i,r)&&(n=null),r||i===null?Vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Vh=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Uh=Symbol.for("react.offscreen"),Ed=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Ca;function li(e){if(Ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||""}return`
`+Ca+e}var Pa=!1;function Ea(e,t){if(!e||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Wv(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Ea(e.type,!1),e;case 11:return e=Ea(e.type.render,!1),e;case 1:return e=Ea(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Jn:return"Portal";case xl:return"Profiler";case Wu:return"StrictMode";case wl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bh:return(e.displayName||"Context")+".Consumer";case Vh:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gu:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function Hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gv(e){var t=Wh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mo(e){e._valueTracker||(e._valueTracker=Gv(e))}function Hh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gh(e,t){t=t.checked,t!=null&&Uu(e,"checked",t,!1)}function Cl(e,t){Gh(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pl(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pl(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ui(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Kh(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var go,Xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(e){Kv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mi[t]=mi[e]})});function Qh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mi.hasOwnProperty(e)&&mi[e]?(""+t).trim():t+"px"}function Zh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yv=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,t){if(t){if(Yv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,vr=null,xr=null;function $d(e){if(e=no(e)){if(typeof $l!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Xs(t),$l(e.stateNode,e.type,t))}}function qh(e){vr?xr?xr.push(e):xr=[e]:vr=e}function Jh(){if(vr){var e=vr,t=xr;if(xr=vr=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function em(e,t){return e(t)}function tm(){}var Ta=!1;function nm(e,t,n){if(Ta)return e(t,n);Ta=!0;try{return em(e,t,n)}finally{Ta=!1,(vr!==null||xr!==null)&&(tm(),Jh())}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Xs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var jl=!1;if(Ft)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{jl=!1}function Xv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gi=!1,ss=null,as=!1,Ml=null,Qv={onError:function(e){gi=!0,ss=e}};function Zv(e,t,n,r,i,o,s,a,l){gi=!1,ss=null,Xv.apply(Qv,arguments)}function qv(e,t,n,r,i,o,s,a,l){if(Zv.apply(this,arguments),gi){if(gi){var u=ss;gi=!1,ss=null}else throw Error(R(198));as||(as=!0,Ml=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(Kn(e)!==e)throw Error(R(188))}function Jv(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return jd(i),e;if(o===r)return jd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function im(e){return e=Jv(e),e!==null?om(e):null}function om(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=om(e);if(t!==null)return t;e=e.sibling}return null}var sm=We.unstable_scheduleCallback,Md=We.unstable_cancelCallback,ex=We.unstable_shouldYield,tx=We.unstable_requestPaint,se=We.unstable_now,nx=We.unstable_getCurrentPriorityLevel,Yu=We.unstable_ImmediatePriority,am=We.unstable_UserBlockingPriority,ls=We.unstable_NormalPriority,rx=We.unstable_LowPriority,lm=We.unstable_IdlePriority,Hs=null,bt=null;function ix(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Hs,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:ax,ox=Math.log,sx=Math.LN2;function ax(e){return e>>>=0,e===0?32:31-(ox(e)/sx|0)|0}var yo=64,vo=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ci(a):(o&=s,o!==0&&(r=ci(o)))}else s=n&~i,s!==0?r=ci(s):o!==0&&(r=ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function lx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=lx(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function um(){var e=yo;return yo<<=1,!(yo&4194240)&&(yo=64),e}function Ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function cx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,Qu,fm,pm,hm,Il=!1,xo=[],rn=null,on=null,sn=null,$i=new Map,ji=new Map,Jt=[],dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":$i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&Qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fx(e,t,n,r,i){switch(t){case"focusin":return rn=qr(rn,e,t,n,r,i),!0;case"dragenter":return on=qr(on,e,t,n,r,i),!0;case"mouseover":return sn=qr(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $i.set(o,qr($i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,qr(ji.get(o)||null,e,t,n,r,i)),!0}return!1}function mm(e){var t=An(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=rm(n),t!==null){e.blockedOn=t,hm(e.priority,function(){fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=no(n),t!==null&&Qu(t),e.blockedOn=n,!1;t.shift()}return!0}function Id(e,t,n){Fo(e)&&n.delete(t)}function px(){Il=!1,rn!==null&&Fo(rn)&&(rn=null),on!==null&&Fo(on)&&(on=null),sn!==null&&Fo(sn)&&(sn=null),$i.forEach(Id),ji.forEach(Id)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,px)))}function Mi(e){function t(i){return Jr(i,e)}if(0<xo.length){Jr(xo[0],e);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Jr(rn,e),on!==null&&Jr(on,e),sn!==null&&Jr(sn,e),$i.forEach(t),ji.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)mm(n),n.blockedOn===null&&Jt.shift()}var wr=Wt.ReactCurrentBatchConfig,cs=!0;function hx(e,t,n,r){var i=V,o=wr.transition;wr.transition=null;try{V=1,Zu(e,t,n,r)}finally{V=i,wr.transition=o}}function mx(e,t,n,r){var i=V,o=wr.transition;wr.transition=null;try{V=4,Zu(e,t,n,r)}finally{V=i,wr.transition=o}}function Zu(e,t,n,r){if(cs){var i=_l(e,t,n,r);if(i===null)Na(e,t,r,ds,n),Dd(e,r);else if(fx(i,e,t,n,r))r.stopPropagation();else if(Dd(e,r),t&4&&-1<dx.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&dm(o),o=_l(e,t,n,r),o===null&&Na(e,t,r,ds,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Na(e,t,r,null,n)}}var ds=null;function _l(e,t,n,r){if(ds=null,e=Ku(r),e=An(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ds=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nx()){case Yu:return 1;case am:return 4;case ls:case rx:return 16;case lm:return 536870912;default:return 16}default:return 16}}var tn=null,qu=null,Oo=null;function ym(){if(Oo)return Oo;var e,t=qu,n=t.length,r,i="value"in tn?tn.value:tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function _d(){return!1}function Ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wo:_d,this.isPropagationStopped=_d,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Ke(Vr),to=re({},Vr,{view:0,detail:0}),gx=Ke(to),La,Aa,ei,Gs=re({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(La=e.screenX-ei.screenX,Aa=e.screenY-ei.screenY):Aa=La=0,ei=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),zd=Ke(Gs),yx=re({},Gs,{dataTransfer:0}),vx=Ke(yx),xx=re({},to,{relatedTarget:0}),$a=Ke(xx),wx=re({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=Ke(wx),bx=re({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kx=Ke(bx),Cx=re({},Vr,{data:0}),Nd=Ke(Cx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tx[e])?!!t[e]:!1}function ec(){return Rx}var Lx=re({},to,{key:function(e){if(e.key){var t=Px[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ax=Ke(Lx),$x=re({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Ke($x),jx=re({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),Mx=Ke(jx),Dx=re({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=Ke(Dx),_x=re({},Gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Ke(_x),Nx=[9,13,27,32],tc=Ft&&"CompositionEvent"in window,yi=null;Ft&&"documentMode"in document&&(yi=document.documentMode);var Fx=Ft&&"TextEvent"in window&&!yi,vm=Ft&&(!tc||yi&&8<yi&&11>=yi),Od=" ",Vd=!1;function xm(e,t){switch(e){case"keyup":return Nx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function Ox(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(Vd=!0,Od);case"textInput":return e=t.data,e===Od&&Vd?null:e;default:return null}}function Vx(e,t){if(tr)return e==="compositionend"||!tc&&xm(e,t)?(e=ym(),Oo=qu=tn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bx[e.type]:t==="textarea"}function Sm(e,t,n,r){qh(r),t=fs(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Di=null;function Ux(e){jm(e,0)}function Ks(e){var t=ir(e);if(Hh(t))return e}function Wx(e,t){if(e==="change")return t}var bm=!1;if(Ft){var ja;if(Ft){var Ma="oninput"in document;if(!Ma){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),Ma=typeof Ud.oninput=="function"}ja=Ma}else ja=!1;bm=ja&&(!document.documentMode||9<document.documentMode)}function Wd(){vi&&(vi.detachEvent("onpropertychange",km),Di=vi=null)}function km(e){if(e.propertyName==="value"&&Ks(Di)){var t=[];Sm(t,Di,e,Ku(e)),nm(Ux,t)}}function Hx(e,t,n){e==="focusin"?(Wd(),vi=t,Di=n,vi.attachEvent("onpropertychange",km)):e==="focusout"&&Wd()}function Gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ks(Di)}function Kx(e,t){if(e==="click")return Ks(t)}function Yx(e,t){if(e==="input"||e==="change")return Ks(t)}function Xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Xx;function Ii(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vl.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=Hd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function Cm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pm(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qx(e){var t=Pm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cm(n.ownerDocument.documentElement,n)){if(r!==null&&nc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gd(n,o);var s=Gd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zx=Ft&&"documentMode"in document&&11>=document.documentMode,nr=null,zl=null,xi=null,Nl=!1;function Kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||nr==null||nr!==os(r)||(r=nr,"selectionStart"in r&&nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Ii(xi,r)||(xi=r,r=fs(zl,"onSelect"),0<r.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function So(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Da={},Em={};Ft&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Ys(e){if(Da[e])return Da[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Em)return Da[e]=t[n];return e}var Tm=Ys("animationend"),Rm=Ys("animationiteration"),Lm=Ys("animationstart"),Am=Ys("transitionend"),$m=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){$m.set(e,t),Gn(t,[e])}for(var Ia=0;Ia<Yd.length;Ia++){var _a=Yd[Ia],qx=_a.toLowerCase(),Jx=_a[0].toUpperCase()+_a.slice(1);vn(qx,"on"+Jx)}vn(Tm,"onAnimationEnd");vn(Rm,"onAnimationIteration");vn(Lm,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Am,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Xd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qv(r,t,void 0,e),e.currentTarget=null}function jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Xd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Xd(i,a,u),o=l}}}if(as)throw e=Ml,as=!1,Ml=null,e}function K(e,t){var n=t[Ul];n===void 0&&(n=t[Ul]=new Set);var r=e+"__bubble";n.has(r)||(Mm(t,e,2,!1),n.add(r))}function za(e,t,n){var r=0;t&&(r|=4),Mm(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[bo]){e[bo]=!0,Oh.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||za(n,!1,e),za(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,za("selectionchange",!1,t))}}function Mm(e,t,n,r){switch(gm(t)){case 1:var i=hx;break;case 4:i=mx;break;default:i=Zu}n=i.bind(null,t,n,e),i=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Na(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=An(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}nm(function(){var u=o,c=Ku(n),d=[];e:{var f=$m.get(e);if(f!==void 0){var g=Ju,y=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":g=Ax;break;case"focusin":y="focus",g=$a;break;case"focusout":y="blur",g=$a;break;case"beforeblur":case"afterblur":g=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mx;break;case Tm:case Rm:case Lm:g=Sx;break;case Am:g=Ix;break;case"scroll":g=gx;break;case"wheel":g=zx;break;case"copy":case"cut":case"paste":g=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fd}var x=(t&4)!==0,b=!x&&e==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Ai(p,h),S!=null&&x.push(zi(p,S,m)))),b)break;p=p.return}0<x.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Al&&(y=n.relatedTarget||n.fromElement)&&(An(y)||y[Ot]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?An(y):null,y!==null&&(b=Kn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=zd,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Fd,S="onPointerLeave",h="onPointerEnter",p="pointer"),b=g==null?f:ir(g),m=y==null?f:ir(y),f=new x(S,p+"leave",g,n,c),f.target=b,f.relatedTarget=m,S=null,An(c)===u&&(x=new x(h,p+"enter",y,n,c),x.target=m,x.relatedTarget=b,S=x),b=S,g&&y)t:{for(x=g,h=y,p=0,m=x;m;m=Qn(m))p++;for(m=0,S=h;S;S=Qn(S))m++;for(;0<p-m;)x=Qn(x),p--;for(;0<m-p;)h=Qn(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=Qn(x),h=Qn(h)}x=null}else x=null;g!==null&&Qd(d,f,g,x,!1),y!==null&&b!==null&&Qd(d,b,y,x,!0)}}e:{if(f=u?ir(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=Wx;else if(Bd(f))if(bm)C=Yx;else{C=Gx;var P=Hx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Kx);if(C&&(C=C(e,u))){Sm(d,C,n,c);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Pl(f,"number",f.value)}switch(P=u?ir(u):window,e){case"focusin":(Bd(P)||P.contentEditable==="true")&&(nr=P,zl=u,xi=null);break;case"focusout":xi=zl=nr=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,Kd(d,n,c);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Kd(d,n,c)}var E;if(tc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else tr?xm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vm&&n.locale!=="ko"&&(tr||T!=="onCompositionStart"?T==="onCompositionEnd"&&tr&&(E=ym()):(tn=c,qu="value"in tn?tn.value:tn.textContent,tr=!0)),P=fs(u,T),0<P.length&&(T=new Nd(T,e,null,n,c),d.push({event:T,listeners:P}),E?T.data=E:(E=wm(n),E!==null&&(T.data=E)))),(E=Fx?Ox(e,n):Vx(e,n))&&(u=fs(u,"onBeforeInput"),0<u.length&&(c=new Nd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}jm(d,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ai(e,n),o!=null&&r.unshift(zi(e,o,i)),o=Ai(e,t),o!=null&&r.push(zi(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ai(n,o),l!=null&&s.unshift(zi(n,l,a))):i||(l=Ai(n,o),l!=null&&s.push(zi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function Zd(e){return(typeof e=="string"?e:""+e).replace(t1,`
`).replace(n1,"")}function ko(e,t,n){if(t=Zd(t),Zd(e)!==t&&n)throw Error(R(425))}function ps(){}var Fl=null,Ol=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(o1)}:Bl;function o1(e){setTimeout(function(){throw e})}function Fa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mi(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),St="__reactFiber$"+Br,Ni="__reactProps$"+Br,Ot="__reactContainer$"+Br,Ul="__reactEvents$"+Br,s1="__reactListeners$"+Br,a1="__reactHandles$"+Br;function An(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jd(e);e!==null;){if(n=e[St])return n;e=Jd(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[St]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Xs(e){return e[Ni]||null}var Wl=[],or=-1;function xn(e){return{current:e}}function X(e){0>or||(e.current=Wl[or],Wl[or]=null,or--)}function G(e,t){or++,Wl[or]=e.current,e.current=t}var hn={},Te=xn(hn),Ie=xn(!1),Fn=hn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function hs(){X(Ie),X(Te)}function ef(e,t,n){if(Te.current!==hn)throw Error(R(168));G(Te,t),G(Ie,n)}function Dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Hv(e)||"Unknown",i));return re({},n,r)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Fn=Te.current,G(Te,e),G(Ie,Ie.current),!0}function tf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Dm(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,X(Ie),X(Te),G(Te,e)):X(Ie),G(Ie,n)}var At=null,Qs=!1,Oa=!1;function Im(e){At===null?At=[e]:At.push(e)}function l1(e){Qs=!0,Im(e)}function wn(){if(!Oa&&At!==null){Oa=!0;var e=0,t=V;try{var n=At;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Qs=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),sm(Yu,wn),i}finally{V=t,Oa=!1}}return null}var sr=[],ar=0,gs=null,ys=0,Ze=[],qe=0,On=null,$t=1,jt="";function En(e,t){sr[ar++]=ys,sr[ar++]=gs,gs=e,ys=t}function _m(e,t,n){Ze[qe++]=$t,Ze[qe++]=jt,Ze[qe++]=On,On=e;var r=$t;e=jt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$t=1<<32-ct(t)+i|n<<i|r,jt=o+e}else $t=1<<o|n<<i|r,jt=e}function rc(e){e.return!==null&&(En(e,1),_m(e,1,0))}function ic(e){for(;e===gs;)gs=sr[--ar],sr[ar]=null,ys=sr[--ar],sr[ar]=null;for(;e===On;)On=Ze[--qe],Ze[qe]=null,jt=Ze[--qe],Ze[qe]=null,$t=Ze[--qe],Ze[qe]=null}var Ue=null,Be=null,Z=!1,ut=null;function zm(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Be=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:$t,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Be=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(Z){var t=Be;if(t){var n=t;if(!nf(e,t)){if(Hl(e))throw Error(R(418));t=an(n.nextSibling);var r=Ue;t&&nf(e,t)?zm(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(Hl(e))throw Error(R(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function Co(e){if(e!==Ue)return!1;if(!Z)return rf(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=Be)){if(Hl(e))throw Nm(),Error(R(418));for(;t;)zm(e,t),t=an(t.nextSibling)}if(rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ue?an(e.stateNode.nextSibling):null;return!0}function Nm(){for(var e=Be;e;)e=an(e.nextSibling)}function Pr(){Be=Ue=null,Z=!1}function oc(e){ut===null?ut=[e]:ut.push(e)}var u1=Wt.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function Fm(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=dn(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,S){return p===null||p.tag!==6?(p=Ka(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function l(h,p,m,S){var C=m.type;return C===er?c(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&of(C)===p.type)?(S=i(p,m.props),S.ref=ti(h,p,m),S.return=h,S):(S=Yo(m.type,m.key,m.props,null,h.mode,S),S.ref=ti(h,p,m),S.return=h,S)}function u(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ya(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function c(h,p,m,S,C){return p===null||p.tag!==7?(p=_n(m,h.mode,S,C),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ka(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ho:return m=Yo(p.type,p.key,p.props,null,h.mode,m),m.ref=ti(h,null,p),m.return=h,m;case Jn:return p=Ya(p,h.mode,m),p.return=h,p;case Zt:var S=p._init;return d(h,S(p._payload),m)}if(ui(p)||Qr(p))return p=_n(p,h.mode,m,null),p.return=h,p;Po(h,p)}return null}function f(h,p,m,S){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:return m.key===C?l(h,p,m,S):null;case Jn:return m.key===C?u(h,p,m,S):null;case Zt:return C=m._init,f(h,p,C(m._payload),S)}if(ui(m)||Qr(m))return C!==null?null:c(h,p,m,S,null);Po(h,m)}return null}function g(h,p,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,a(p,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:return h=h.get(S.key===null?m:S.key)||null,l(p,h,S,C);case Jn:return h=h.get(S.key===null?m:S.key)||null,u(p,h,S,C);case Zt:var P=S._init;return g(h,p,m,P(S._payload),C)}if(ui(S)||Qr(S))return h=h.get(m)||null,c(p,h,S,C,null);Po(p,S)}return null}function y(h,p,m,S){for(var C=null,P=null,E=p,T=p=0,D=null;E!==null&&T<m.length;T++){E.index>T?(D=E,E=null):D=E.sibling;var j=f(h,E,m[T],S);if(j===null){E===null&&(E=D);break}e&&E&&j.alternate===null&&t(h,E),p=o(j,p,T),P===null?C=j:P.sibling=j,P=j,E=D}if(T===m.length)return n(h,E),Z&&En(h,T),C;if(E===null){for(;T<m.length;T++)E=d(h,m[T],S),E!==null&&(p=o(E,p,T),P===null?C=E:P.sibling=E,P=E);return Z&&En(h,T),C}for(E=r(h,E);T<m.length;T++)D=g(E,h,T,m[T],S),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?T:D.key),p=o(D,p,T),P===null?C=D:P.sibling=D,P=D);return e&&E.forEach(function(Q){return t(h,Q)}),Z&&En(h,T),C}function x(h,p,m,S){var C=Qr(m);if(typeof C!="function")throw Error(R(150));if(m=C.call(m),m==null)throw Error(R(151));for(var P=C=null,E=p,T=p=0,D=null,j=m.next();E!==null&&!j.done;T++,j=m.next()){E.index>T?(D=E,E=null):D=E.sibling;var Q=f(h,E,j.value,S);if(Q===null){E===null&&(E=D);break}e&&E&&Q.alternate===null&&t(h,E),p=o(Q,p,T),P===null?C=Q:P.sibling=Q,P=Q,E=D}if(j.done)return n(h,E),Z&&En(h,T),C;if(E===null){for(;!j.done;T++,j=m.next())j=d(h,j.value,S),j!==null&&(p=o(j,p,T),P===null?C=j:P.sibling=j,P=j);return Z&&En(h,T),C}for(E=r(h,E);!j.done;T++,j=m.next())j=g(E,h,T,j.value,S),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?T:j.key),p=o(j,p,T),P===null?C=j:P.sibling=j,P=j);return e&&E.forEach(function(je){return t(h,je)}),Z&&En(h,T),C}function b(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===er&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:e:{for(var C=m.key,P=p;P!==null;){if(P.key===C){if(C=m.type,C===er){if(P.tag===7){n(h,P.sibling),p=i(P,m.props.children),p.return=h,h=p;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&of(C)===P.type){n(h,P.sibling),p=i(P,m.props),p.ref=ti(h,P,m),p.return=h,h=p;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===er?(p=_n(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=Yo(m.type,m.key,m.props,null,h.mode,S),S.ref=ti(h,p,m),S.return=h,h=S)}return s(h);case Jn:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ya(m,h.mode,S),p.return=h,h=p}return s(h);case Zt:return P=m._init,b(h,p,P(m._payload),S)}if(ui(m))return y(h,p,m,S);if(Qr(m))return x(h,p,m,S);Po(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Ka(m,h.mode,S),p.return=h,h=p),s(h)):n(h,p)}return b}var Er=Fm(!0),Om=Fm(!1),vs=xn(null),xs=null,lr=null,sc=null;function ac(){sc=lr=xs=null}function lc(e){var t=vs.current;X(vs),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){xs=e,sc=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(sc!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(xs===null)throw Error(R(308));lr=e,xs.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var $n=null;function uc(e){$n===null?$n=[e]:$n.push(e)}function Vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,uc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}function sf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ws(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(f=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=re({},d,f);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=d}}function af(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var ro={},kt=xn(ro),Fi=xn(ro),Oi=xn(ro);function jn(e){if(e===ro)throw Error(R(174));return e}function dc(e,t){switch(G(Oi,t),G(Fi,e),G(kt,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}X(kt),G(kt,t)}function Tr(){X(kt),X(Fi),X(Oi)}function Um(e){jn(Oi.current);var t=jn(kt.current),n=Tl(t,e.type);t!==n&&(G(Fi,e),G(kt,n))}function fc(e){Fi.current===e&&(X(kt),X(Fi))}var J=xn(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=[];function pc(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var Uo=Wt.ReactCurrentDispatcher,Ba=Wt.ReactCurrentBatchConfig,Vn=0,te=null,ue=null,pe=null,bs=!1,wi=!1,Vi=0,c1=0;function Se(){throw Error(R(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function mc(e,t,n,r,i,o){if(Vn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?h1:m1,e=n(r,i),wi){o=0;do{if(wi=!1,Vi=0,25<=o)throw Error(R(301));o+=1,pe=ue=null,t.updateQueue=null,Uo.current=g1,e=n(r,i)}while(wi)}if(Uo.current=ks,t=ue!==null&&ue.next!==null,Vn=0,pe=ue=te=null,bs=!1,t)throw Error(R(300));return e}function gc(){var e=Vi!==0;return Vi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function nt(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(R(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function Bi(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Vn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,te.lanes|=c,Bn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ht(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wa(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ht(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wm(){}function Hm(e,t){var n=te,r=nt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,yc(Ym.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Ui(9,Km.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(R(349));Vn&30||Gm(n,t,i)}return i}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Km(e,t,n,r){t.value=n,t.getSnapshot=r,Xm(t)&&Qm(e)}function Ym(e,t,n){return n(function(){Xm(t)&&Qm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Qm(e){var t=Vt(e,1);t!==null&&dt(t,e,1,-1)}function lf(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=p1.bind(null,te,e),[t.memoizedState,e]}function Ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zm(){return nt().memoizedState}function Wo(e,t,n,r){var i=xt();te.flags|=e,i.memoizedState=Ui(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&hc(r,s.deps)){i.memoizedState=Ui(t,n,o,r);return}}te.flags|=e,i.memoizedState=Ui(1|t,n,o,r)}function uf(e,t){return Wo(8390656,8,e,t)}function yc(e,t){return Zs(2048,8,e,t)}function qm(e,t){return Zs(4,2,e,t)}function Jm(e,t){return Zs(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,eg.bind(null,t,e),n)}function vc(){}function ng(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rg(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ig(e,t,n){return Vn&21?(ht(n,t)||(n=um(),te.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function d1(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Ba.transition;Ba.transition={};try{e(!1),t()}finally{V=n,Ba.transition=r}}function og(){return nt().memoizedState}function f1(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sg(e))ag(t,n);else if(n=Vm(e,t,n,r),n!==null){var i=Le();dt(n,e,r,i),lg(n,t,r)}}function p1(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sg(e))ag(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,s)){var l=t.interleaved;l===null?(i.next=i,uc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Vm(e,t,i,r),n!==null&&(i=Le(),dt(n,e,r,i),lg(n,t,r))}}function sg(e){var t=e.alternate;return e===te||t!==null&&t===te}function ag(e,t){wi=bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}var ks={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},h1={readContext:tt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:uf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=f1.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:lf,useDebugValue:vc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=lf(!1),t=e[0];return e=d1.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=xt();if(Z){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ge===null)throw Error(R(349));Vn&30||Gm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,uf(Ym.bind(null,r,o,e),[e]),r.flags|=2048,Ui(9,Km.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=ge.identifierPrefix;if(Z){var n=jt,r=$t;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=c1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m1={readContext:tt,useCallback:ng,useContext:tt,useEffect:yc,useImperativeHandle:tg,useInsertionEffect:qm,useLayoutEffect:Jm,useMemo:rg,useReducer:Ua,useRef:Zm,useState:function(){return Ua(Bi)},useDebugValue:vc,useDeferredValue:function(e){var t=nt();return ig(t,ue.memoizedState,e)},useTransition:function(){var e=Ua(Bi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:Hm,useId:og,unstable_isNewReconciler:!1},g1={readContext:tt,useCallback:ng,useContext:tt,useEffect:yc,useImperativeHandle:tg,useInsertionEffect:qm,useLayoutEffect:Jm,useMemo:rg,useReducer:Wa,useRef:Zm,useState:function(){return Wa(Bi)},useDebugValue:vc,useDeferredValue:function(e){var t=nt();return ue===null?t.memoizedState=e:ig(t,ue.memoizedState,e)},useTransition:function(){var e=Wa(Bi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:Hm,useId:og,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=cn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(dt(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=cn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(dt(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=cn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(dt(t,e,r,n),Bo(t,e,r))}};function cf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function ug(e,t,n){var r=!1,i=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=_e(t)?Fn:Te.current,r=t.contextTypes,o=(r=r!=null)?Cr(e,i):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function df(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},cc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=_e(t)?Fn:Te.current,i.context=Cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Yl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qs.enqueueReplaceState(i,i.state,null),ws(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=Wv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ps||(Ps=!0,su=r),Ql(e,t)},n}function dg(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new y1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$1.bind(null,e,t,n),t.then(e,e))}function pf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var v1=Wt.ReactCurrentOwner,De=!1;function Re(e,t,n,r){t.child=e===null?Om(t,null,n,r):Er(t,e.child,n,r)}function mf(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=mc(e,t,n,r,o,i),n=gc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(Z&&n&&rc(t),t.flags|=1,Re(e,t,r,i),t.child)}function gf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fg(e,t,o,r,i)):(e=Yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(s,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function fg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ii(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return Zl(e,t,n,r,i)}function pg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(cr,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(cr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(cr,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(cr,Ve),Ve|=r;return Re(e,t,i,n),t.child}function hg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,i){var o=_e(n)?Fn:Te.current;return o=Cr(t,o),Sr(t,i),n=mc(e,t,n,r,o,i),r=gc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(Z&&r&&rc(t),t.flags|=1,Re(e,t,n,i),t.child)}function yf(e,t,n,r,i){if(_e(n)){var o=!0;ms(t)}else o=!1;if(Sr(t,i),t.stateNode===null)Ho(e,t),ug(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=_e(n)?Fn:Te.current,u=Cr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&df(t,s,r,u),qt=!1;var f=t.memoizedState;s.state=f,ws(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ie.current||qt?(typeof c=="function"&&(Yl(t,n,c,r),l=t.memoizedState),(a=qt||cf(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=_e(n)?Fn:Te.current,l=Cr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&df(t,s,r,l),qt=!1,f=t.memoizedState,s.state=f,ws(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||Ie.current||qt?(typeof g=="function"&&(Yl(t,n,g,r),y=t.memoizedState),(u=qt||cf(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ql(e,t,n,r,o,i)}function ql(e,t,n,r,i,o){hg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&tf(t,n,!1),Bt(e,t,o);r=t.stateNode,v1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Er(t,e.child,null,o),t.child=Er(t,null,a,o)):Re(e,t,a,o),t.memoizedState=r.state,i&&tf(t,n,!0),t.child}function mg(e){var t=e.stateNode;t.pendingContext?ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ef(e,t.context,!1),dc(e,t.containerInfo)}function vf(e,t,n,r,i){return Pr(),oc(i),t.flags|=256,Re(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function gg(e,t,n){var r=t.pendingProps,i=J.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(J,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ta(s,r,0,null),e=_n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=eu(n),t.memoizedState=Jl,e):xc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return x1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=_n(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?eu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xc(e,t){return t=ta({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,r){return r!==null&&oc(r),Er(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ha(Error(R(422))),Eo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ta({mode:"visible",children:r.children},i,0,null),o=_n(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Er(t,e.child,null,s),t.child.memoizedState=eu(s),t.memoizedState=Jl,o);if(!(t.mode&1))return Eo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=Ha(o,r,void 0),Eo(e,t,s,r)}if(a=(s&e.childLanes)!==0,De||a){if(r=ge,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(e,i),dt(r,e,i,-1))}return Pc(),r=Ha(Error(R(421))),Eo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=j1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=an(i.nextSibling),Ue=t,Z=!0,ut=null,e!==null&&(Ze[qe++]=$t,Ze[qe++]=jt,Ze[qe++]=On,$t=e.id,jt=e.overflow,On=t),t=xc(t,r.children),t.flags|=4096,t)}function xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function Ga(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ss(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ga(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ss(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ga(t,!0,n,null,o);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w1(e,t,n){switch(t.tag){case 3:mg(t),Pr();break;case 5:Um(t);break;case 1:_e(t.type)&&ms(t);break;case 4:dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(vs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?gg(e,t,n):(G(J,J.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,pg(e,t,n)}return Bt(e,t,n)}var vg,tu,xg,wg;vg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};xg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(kt.current);var o=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=El(e,i),r=El(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ps)}Rl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wg=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function S1(e,t,n){var r=t.pendingProps;switch(ic(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return _e(t.type)&&hs(),be(t),null;case 3:return r=t.stateNode,Tr(),X(Ie),X(Te),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(uu(ut),ut=null))),tu(e,t),be(t),null;case 5:fc(t);var i=jn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)xg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return be(t),null}if(e=jn(kt.current),Co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[Ni]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)K(di[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Td(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ld(r,o),K("invalid",r)}Rl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,a,e),i=["children",""+a]):Ri.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":mo(r),Rd(r,o,!0);break;case"textarea":mo(r),Ad(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ps)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[Ni]=r,vg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ll(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)K(di[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Td(e,r),i=kl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ld(e,r),i=El(e,r),K("invalid",e);break;default:i=r}Rl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Zh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Li(e,l):typeof l=="number"&&Li(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&Uu(e,o,l,s))}switch(n){case"input":mo(e),Rd(e,r,!1);break;case"textarea":mo(e),Ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)wg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=jn(Oi.current),jn(kt.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return be(t),null;case 13:if(X(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Be!==null&&t.mode&1&&!(t.flags&128))Nm(),Pr(),t.flags|=98560,o=!1;else if(o=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[St]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else ut!==null&&(uu(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?de===0&&(de=3):Pc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Tr(),tu(e,t),e===null&&_i(t.stateNode.containerInfo),be(t),null;case 10:return lc(t.type._context),be(t),null;case 17:return _e(t.type)&&hs(),be(t),null;case 19:if(X(J),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ni(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ss(e),s!==null){for(t.flags|=128,ni(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Lr&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ss(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Z)return be(t),null}else 2*se()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function b1(e,t){switch(ic(t),t.tag){case 1:return _e(t.type)&&hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),X(Ie),X(Te),pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fc(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return Tr(),null;case 10:return lc(t.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var To=!1,Ce=!1,k1=typeof WeakSet=="function"?WeakSet:Set,A=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function nu(e,t,n){try{n()}catch(r){ie(e,t,r)}}var wf=!1;function C1(e,t){if(Fl=cs,e=Pm(),nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},cs=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:at(t.type,x),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=wf,wf=!1,y}function Si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&nu(t,n,o)}i=i.next}while(i!==r)}}function Js(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sg(e){var t=e.alternate;t!==null&&(e.alternate=null,Sg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Ni],delete t[Ul],delete t[s1],delete t[a1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bg(e){return e.tag===5||e.tag===3||e.tag===4}function Sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}var ye=null,lt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)kg(e,t,n),n=n.sibling}function kg(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Hs,n)}catch{}switch(n.tag){case 5:Ce||ur(n,t);case 6:var r=ye,i=lt;ye=null,Yt(e,t,n),ye=r,lt=i,ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?Fa(e.parentNode,n):e.nodeType===1&&Fa(e,n),Mi(e)):Fa(ye,n.stateNode));break;case 4:r=ye,i=lt,ye=n.stateNode.containerInfo,lt=!0,Yt(e,t,n),ye=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&nu(n,t,s),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ce&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Yt(e,t,n),Ce=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,lt=!1;break e;case 3:ye=a.stateNode.containerInfo,lt=!0;break e;case 4:ye=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ye===null)throw Error(R(160));kg(o,s,i),ye=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cg(t,e),t=t.sibling}function Cg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{Si(3,e,e.return),Js(3,e)}catch(x){ie(e,e.return,x)}try{Si(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(x){ie(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gh(i,o),Ll(a,s);var u=Ll(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Zh(i,d):c==="dangerouslySetInnerHTML"?Xh(i,d):c==="children"?Li(i,d):Uu(i,c,d,u)}switch(a){case"input":Cl(i,o);break;case"textarea":Kh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?yr(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?yr(i,!!o.multiple,o.defaultValue,!0):yr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ni]=o}catch(x){ie(e,e.return,x)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ie(e,e.return,x)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=se())),r&4&&bf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,st(t,e),Ce=u):st(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:Si(4,f,f.return);break;case 1:ur(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ie(r,n,x)}}break;case 5:ur(f,f.return);break;case 22:if(f.memoizedState!==null){Cf(d);continue}}g!==null?(g.return=f,A=g):Cf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qh("display",s))}catch(x){ie(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ie(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:st(t,e),vt(e),r&4&&bf(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bg(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var o=Sf(e);ou(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Sf(e);iu(e,a,s);break;default:throw Error(R(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P1(e,t,n){A=e,Pg(e)}function Pg(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||To;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=To;var u=Ce;if(To=s,(Ce=l)&&!u)for(A=i;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Pf(i):l!==null?(l.return=s,A=l):Pf(i);for(;o!==null;)A=o,Pg(o),o=o.sibling;A=i,To=a,Ce=u}kf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):kf(e)}}function kf(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Js(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&af(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}af(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Mi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ce||t.flags&512&&ru(t)}catch(f){ie(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Cf(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Pf(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Js(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var o=t.return;try{ru(t)}catch(l){ie(t,o,l)}break;case 5:var s=t.return;try{ru(t)}catch(l){ie(t,s,l)}}}catch(l){ie(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var E1=Math.ceil,Cs=Wt.ReactCurrentDispatcher,wc=Wt.ReactCurrentOwner,et=Wt.ReactCurrentBatchConfig,F=0,ge=null,le=null,xe=0,Ve=0,cr=xn(0),de=0,Wi=null,Bn=0,ea=0,Sc=0,bi=null,Me=null,bc=0,Lr=1/0,Rt=null,Ps=!1,su=null,un=null,Ro=!1,nn=null,Es=0,ki=0,au=null,Go=-1,Ko=0;function Le(){return F&6?se():Go!==-1?Go:Go=se()}function cn(e){return e.mode&1?F&2&&xe!==0?xe&-xe:u1.transition!==null?(Ko===0&&(Ko=um()),Ko):(e=V,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function dt(e,t,n,r){if(50<ki)throw ki=0,au=null,Error(R(185));eo(e,n,r),(!(F&2)||e!==ge)&&(e===ge&&(!(F&2)&&(ea|=n),de===4&&en(e,xe)),ze(e,r),n===1&&F===0&&!(t.mode&1)&&(Lr=se()+500,Qs&&wn()))}function ze(e,t){var n=e.callbackNode;ux(e,t);var r=us(e,e===ge?xe:0);if(r===0)n!==null&&Md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Md(n),t===1)e.tag===0?l1(Ef.bind(null,e)):Im(Ef.bind(null,e)),i1(function(){!(F&6)&&wn()}),n=null;else{switch(cm(r)){case 1:n=Yu;break;case 4:n=am;break;case 16:n=ls;break;case 536870912:n=lm;break;default:n=ls}n=Mg(n,Eg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Eg(e,t){if(Go=-1,Ko=0,F&6)throw Error(R(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=us(e,e===ge?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ts(e,r);else{t=r;var i=F;F|=2;var o=Rg();(ge!==e||xe!==t)&&(Rt=null,Lr=se()+500,In(e,t));do try{L1();break}catch(a){Tg(e,a)}while(!0);ac(),Cs.current=o,F=i,le!==null?t=0:(ge=null,xe=0,t=de)}if(t!==0){if(t===2&&(i=Dl(e),i!==0&&(r=i,t=lu(e,i))),t===1)throw n=Wi,In(e,0),en(e,r),ze(e,se()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!T1(i)&&(t=Ts(e,r),t===2&&(o=Dl(e),o!==0&&(r=o,t=lu(e,o))),t===1))throw n=Wi,In(e,0),en(e,r),ze(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Tn(e,Me,Rt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=bc+500-se(),10<t)){if(us(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(Tn.bind(null,e,Me,Rt),t);break}Tn(e,Me,Rt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E1(r/1960))-r,10<r){e.timeoutHandle=Bl(Tn.bind(null,e,Me,Rt),r);break}Tn(e,Me,Rt);break;case 5:Tn(e,Me,Rt);break;default:throw Error(R(329))}}}return ze(e,se()),e.callbackNode===n?Eg.bind(null,e):null}function lu(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=Me,Me=n,t!==null&&uu(t)),e}function uu(e){Me===null?Me=e:Me.push.apply(Me,e)}function T1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Sc,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Ef(e){if(F&6)throw Error(R(327));br();var t=us(e,0);if(!(t&1))return ze(e,se()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=Dl(e);r!==0&&(t=r,n=lu(e,r))}if(n===1)throw n=Wi,In(e,0),en(e,t),ze(e,se()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Me,Rt),ze(e,se()),null}function kc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Lr=se()+500,Qs&&wn())}}function Un(e){nn!==null&&nn.tag===0&&!(F&6)&&br();var t=F;F|=1;var n=et.transition,r=V;try{if(et.transition=null,V=1,e)return e()}finally{V=r,et.transition=n,F=t,!(F&6)&&wn()}}function Cc(){Ve=cr.current,X(cr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,r1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hs();break;case 3:Tr(),X(Ie),X(Te),pc();break;case 5:fc(r);break;case 4:Tr();break;case 13:X(J);break;case 19:X(J);break;case 10:lc(r.type._context);break;case 22:case 23:Cc()}n=n.return}if(ge=e,le=e=dn(e.current,null),xe=Ve=t,de=0,Wi=null,Sc=ea=Bn=0,Me=bi=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$n=null}return e}function Tg(e,t){do{var n=le;try{if(ac(),Uo.current=ks,bs){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bs=!1}if(Vn=0,pe=ue=te=null,wi=!1,Vi=0,wc.current=null,n===null||n.return===null){de=1,Wi=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=pf(s);if(g!==null){g.flags&=-257,hf(g,s,a,o,t),g.mode&1&&ff(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){ff(o,u,t),Pc();break e}l=Error(R(426))}}else if(Z&&a.mode&1){var b=pf(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),hf(b,s,a,o,t),oc(Rr(l,a));break e}}o=l=Rr(l,a),de!==4&&(de=2),bi===null?bi=[o]:bi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=cg(o,l,t);sf(o,h);break e;case 1:a=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(un===null||!un.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=dg(o,a,t);sf(o,S);break e}}o=o.return}while(o!==null)}Ag(n)}catch(C){t=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Rg(){var e=Cs.current;return Cs.current=ks,e===null?ks:e}function Pc(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Bn&268435455)&&!(ea&268435455)||en(ge,xe)}function Ts(e,t){var n=F;F|=2;var r=Rg();(ge!==e||xe!==t)&&(Rt=null,In(e,t));do try{R1();break}catch(i){Tg(e,i)}while(!0);if(ac(),F=n,Cs.current=r,le!==null)throw Error(R(261));return ge=null,xe=0,de}function R1(){for(;le!==null;)Lg(le)}function L1(){for(;le!==null&&!ex();)Lg(le)}function Lg(e){var t=jg(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Ag(e):le=t,wc.current=null}function Ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b1(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=S1(n,t,Ve),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function Tn(e,t,n){var r=V,i=et.transition;try{et.transition=null,V=1,A1(e,t,n,r)}finally{et.transition=i,V=r}return null}function A1(e,t,n,r){do br();while(nn!==null);if(F&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cx(e,o),e===ge&&(le=ge=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,Mg(ls,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var s=V;V=1;var a=F;F|=4,wc.current=null,C1(e,n),Cg(n,e),Qx(Ol),cs=!!Fl,Ol=Fl=null,e.current=n,P1(n),tx(),F=a,V=s,et.transition=o}else e.current=n;if(Ro&&(Ro=!1,nn=e,Es=i),o=e.pendingLanes,o===0&&(un=null),ix(n.stateNode),ze(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ps)throw Ps=!1,e=su,su=null,e;return Es&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===au?ki++:(ki=0,au=e):ki=0,wn(),null}function br(){if(nn!==null){var e=cm(Es),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Es=0,F&6)throw Error(R(331));var i=F;for(F|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Si(8,c,o)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,g=c.return;if(Sg(c),c===u){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Si(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var p=e.current;for(A=p;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Js(9,a)}}catch(C){ie(a,a.return,C)}if(a===s){A=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,A=S;break e}A=a.return}}if(F=i,wn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Hs,e)}catch{}r=!0}return r}finally{V=n,et.transition=t}}return!1}function Tf(e,t,n){t=Rr(n,t),t=cg(e,t,1),e=ln(e,t,1),t=Le(),e!==null&&(eo(e,1,t),ze(e,t))}function ie(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=Rr(n,e),e=dg(t,e,1),t=ln(t,e,1),e=Le(),t!==null&&(eo(t,1,e),ze(t,e));break}}t=t.return}}function $1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(de===4||de===3&&(xe&130023424)===xe&&500>se()-bc?In(e,0):Sc|=n),ze(e,t)}function $g(e,t){t===0&&(e.mode&1?(t=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):t=1);var n=Le();e=Vt(e,t),e!==null&&(eo(e,t,n),ze(e,n))}function j1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$g(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),$g(e,n)}var jg;jg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,w1(e,t,n);De=!!(e.flags&131072)}else De=!1,Z&&t.flags&1048576&&_m(t,ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var i=Cr(t,Te.current);Sr(t,n),i=mc(null,t,r,e,i,n);var o=gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,ms(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cc(t),i.updater=qs,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=ql(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&rc(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=I1(r),e=at(r,e),i){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=yf(null,t,r,e,n);break e;case 11:t=mf(null,t,r,e,n);break e;case 14:t=gf(null,t,r,at(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),yf(e,t,r,i,n);case 3:e:{if(mg(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bm(e,t),ws(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Rr(Error(R(423)),t),t=vf(e,t,r,n,i);break e}else if(r!==i){i=Rr(Error(R(424)),t),t=vf(e,t,r,n,i);break e}else for(Be=an(t.stateNode.containerInfo.firstChild),Ue=t,Z=!0,ut=null,n=Om(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){t=Bt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Um(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Vl(r,i)?s=null:o!==null&&Vl(r,o)&&(t.flags|=32),hg(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return gg(e,t,n);case 4:return dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),mf(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(vs,r._currentValue),r._currentValue=s,o!==null)if(ht(o.value,s)){if(o.children===i.children&&!Ie.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Kl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=tt(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),gf(e,t,r,i,n);case 15:return fg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Ho(e,t),t.tag=1,_e(r)?(e=!0,ms(t)):e=!1,Sr(t,n),ug(t,r,i),Xl(t,r,i,n),ql(null,t,r,!0,e,n);case 19:return yg(e,t,n);case 22:return pg(e,t,n)}throw Error(R(156,t.tag))};function Mg(e,t){return sm(e,t)}function D1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new D1(e,t,n,r)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I1(e){if(typeof e=="function")return Ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Gu)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ec(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case er:return _n(n.children,i,o,t);case Wu:s=8,i|=8;break;case xl:return e=Je(12,n,t,i|2),e.elementType=xl,e.lanes=o,e;case wl:return e=Je(13,n,t,i),e.elementType=wl,e.lanes=o,e;case Sl:return e=Je(19,n,t,i),e.elementType=Sl,e.lanes=o,e;case Uh:return ta(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vh:s=10;break e;case Bh:s=9;break e;case Hu:s=11;break e;case Gu:s=14;break e;case Zt:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function ta(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Uh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ka(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Ya(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tc(e,t,n,r,i,o,s,a,l){return e=new _1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cc(o),e}function z1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dg(e){if(!e)return hn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(_e(n))return Dm(e,n,t)}return t}function Ig(e,t,n,r,i,o,s,a,l){return e=Tc(n,r,!0,e,i,o,s,a,l),e.context=Dg(null),n=e.current,r=Le(),i=cn(n),o=Dt(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,eo(e,i,r),ze(e,r),e}function na(e,t,n,r){var i=t.current,o=Le(),s=cn(i);return n=Dg(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,s),e!==null&&(dt(e,i,s,o),Bo(e,i,s)),s}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rc(e,t){Rf(e,t),(e=e.alternate)&&Rf(e,t)}function N1(){return null}var _g=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lc(e){this._internalRoot=e}ra.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));na(e,t,null,null)};ra.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){na(null,e,null,null)}),t[Ot]=null}};function ra(e){this._internalRoot=e}ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&mm(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lf(){}function F1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Rs(s);o.call(u)}}var s=Ig(t,r,e,0,null,!1,!1,"",Lf);return e._reactRootContainer=s,e[Ot]=s.current,_i(e.nodeType===8?e.parentNode:e),Un(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rs(l);a.call(u)}}var l=Tc(e,0,!1,null,null,!1,!1,"",Lf);return e._reactRootContainer=l,e[Ot]=l.current,_i(e.nodeType===8?e.parentNode:e),Un(function(){na(t,l,n,r)}),l}function oa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Rs(s);a.call(l)}}na(t,s,e,i)}else s=F1(n,t,e,i,r);return Rs(s)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(Xu(t,n|1),ze(t,se()),!(F&6)&&(Lr=se()+500,wn()))}break;case 13:Un(function(){var r=Vt(e,1);if(r!==null){var i=Le();dt(r,e,1,i)}}),Rc(e,1)}};Qu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Le();dt(t,e,134217728,n)}Rc(e,134217728)}};fm=function(e){if(e.tag===13){var t=cn(e),n=Vt(e,t);if(n!==null){var r=Le();dt(n,e,t,r)}Rc(e,t)}};pm=function(){return V};hm=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};$l=function(e,t,n){switch(t){case"input":if(Cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xs(r);if(!i)throw Error(R(90));Hh(r),Cl(r,i)}}}break;case"textarea":Kh(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};em=kc;tm=Un;var O1={usingClientEntryPoint:!1,Events:[no,ir,Xs,qh,Jh,kc]},ri={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=im(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||N1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Hs=Lo.inject(V1),bt=Lo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(R(200));return z1(e,t,null,n)};Ge.createRoot=function(e,t){if(!Ac(e))throw Error(R(299));var n=!1,r="",i=_g;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tc(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,_i(e.nodeType===8?e.parentNode:e),new Lc(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=im(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Un(e)};Ge.hydrate=function(e,t,n){if(!ia(t))throw Error(R(200));return oa(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=_g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ig(t,null,e,1,n??null,i,!1,o,s),e[Ot]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ra(t)};Ge.render=function(e,t,n){if(!ia(t))throw Error(R(200));return oa(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ia(e))throw Error(R(40));return e._reactRootContainer?(Un(function(){oa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ge.unstable_batchedUpdates=kc;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ia(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return oa(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(e){console.error(e)}}zg(),zh.exports=Ge;var Ng=zh.exports;const uT=Ph(Ng);var Af=Ng;yl.createRoot=Af.createRoot,yl.hydrateRoot=Af.hydrateRoot;const B1="modulepreload",U1=function(e){return"/"+e},$f={},Ur=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=U1(a),a in $f)return;$f[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":B1,l||(c.as="script",c.crossOrigin=""),c.href=a,s&&c.setAttribute("nonce",s),document.head.appendChild(c),l)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $c=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Fg=/^[\\/]{2}/;function W1(e,t){return t+e.replace(/\\/g,"/")}var jf="popstate";function Mf(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function H1(e={}){function t(r,i){var u;let o=(u=i.state)==null?void 0:u.masked,{pathname:s,search:a,hash:l}=o||r.location;return cu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:Ar(i)}return K1(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Et(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G1(){return Math.random().toString(36).substring(2,10)}function Df(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function cu(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Wr(t):t,state:n,key:t&&t.key||r||G1(),mask:i}}function Ar({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function K1(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function d(){a="POP";let b=c(),h=b==null?null:b-u;u=b,l&&l({action:a,location:x.location,delta:h})}function f(b,h){a="PUSH";let p=Mf(b)?b:cu(x.location,b,h);u=c()+1;let m=Df(p,u),S=x.createHref(p.mask||p);try{s.pushState(m,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:a,location:x.location,delta:1})}function g(b,h){a="REPLACE";let p=Mf(b)?b:cu(x.location,b,h);u=c();let m=Df(p,u),S=x.createHref(p.mask||p);s.replaceState(m,"",S),o&&l&&l({action:a,location:x.location,delta:0})}function y(b){return Y1(i,b)}let x={get action(){return a},get location(){return e(i,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jf,d),l=b,()=>{i.removeEventListener(jf,d),l=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let h=y(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(b){return s.go(b)}};return x}function Y1(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),ne(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Ar(t);return i=i.replace(/ $/,"%20"),!n&&Fg.test(i)&&(i=r+i),new URL(i,r)}function Og(e,t,n="/"){return X1(e,t,n,!1)}function X1(e,t,n,r,i){let o=typeof t=="string"?Wr(t):t,s=Ut(o.pathname||"/",n);if(s==null)return null;let a=Q1(e),l=null,u=aw(s);for(let c=0;l==null&&c<a.length;++c)l=sw(a[c],u,r);return l}function Q1(e){let t=Vg(e);return Z1(t),t}function Vg(e,t=[],n=[],r="",i=!1){let o=(s,a,l=i,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;ne(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=ft([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(ne(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Vg(s.children,t,f,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:iw(d,s.index),routesMeta:f.map((g,y)=>{let[x,b]=Wg(g.relativePath,g.caseSensitive,y===f.length-1);return{...g,matcher:x,compiledParams:b}})})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,a);else for(let u of Bg(s.path))o(s,a,!0,u)}),t}function Bg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Bg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Z1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ow(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var q1=/^:[\w-]+$/,J1=3,ew=2,tw=1,nw=10,rw=-2,If=e=>e==="*";function iw(e,t){let n=e.split("/"),r=n.length;return n.some(If)&&(r+=rw),t&&(r+=ew),n.filter(i=>!If(i)).reduce((i,o)=>i+(q1.test(o)?J1:o===""?tw:nw),r)}function ow(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sw(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f=l.matcher&&l.compiledParams?Ug(d,c,l.matcher,l.compiledParams):Ls(d,c),g=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Ls({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:ft([o,f.pathname]),pathnameBase:cw(ft([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=ft([o,f.pathnameBase]))}return s}function Ls(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wg(e.path,e.caseSensitive,e.end);return Ug(e,t,n,r)}function Ug(e,t,n,r){let i=t.match(n);if(!i)return null;let o=i[0],s=$r(o,1),a=i.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let y=a[f]||"";s=$r(o.slice(0,o.length-y.length),1)}const g=a[f];return d&&!g?u[c]=void 0:u[c]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Wg(e,t=!1,n=!0){Et(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l,u,c)=>{if(r.push({paramName:a,isOptional:l!=null}),l){let d=c.charAt(u+s.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function aw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Et(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lw(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e,o;return n?(n=Gg(n),n.startsWith("/")||n.startsWith("\\")?o=_f(n.substring(1),"/"):o=_f(n,t)):o=t,{pathname:o,search:dw(r),hash:fw(i)}}function _f(e,t){let n=$r(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xa(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hg(e){let t=uw(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function jc(e,t,n,r=!1){let i;typeof e=="string"?i=Wr(e):(i={...e},ne(!i.pathname||!i.pathname.includes("?"),Xa("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Xa("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Xa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=lw(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Gg=e=>e.replace(/[\\/]{2,}/g,"/"),ft=e=>Gg(e.join("/"));function $r(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var cw=e=>$r(e).replace(/^\/*/,"/"),dw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,pw=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function hw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function mw(e){let t=e.map(n=>n.route.path).filter(Boolean);return ft(t)||"/"}var Kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Yg(e,t){let n=e;if(typeof n!="string"||!$c.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Kg)try{let o=new URL(window.location.href),s=Fg.test(n)?new URL(W1(n,o.protocol)):new URL(n),a=Ut(s.pathname,t);s.origin===o.origin&&a!=null?n=a+s.search+s.hash:i=!0}catch{Et(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zf=new URL("http://localhost");function Xg(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),zf)}catch{return zf}}function Qa(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function gw(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Qg(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let o=new URL(t,n),s=i!=null&&!Qa(i,n),a=!Qa(o,n);if(r==="reject"){if(s||a)throw new Error("External navigation is not allowed")}else if(a&&(i==null||!gw(e,i)||!Qa(i,o)))throw new Error("External navigation is not allowed")}var Zg=["POST","PUT","PATCH","DELETE"];new Set(Zg);var yw=["GET",...Zg];new Set(yw);var vw=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xw(e){try{return vw.includes(new URL(e).protocol)}catch{return!1}}var Hr=w.createContext(null);Hr.displayName="DataRouter";var sa=w.createContext(null);sa.displayName="DataRouterState";var qg=w.createContext(!1);function ww(){return w.useContext(qg)}var Jg=w.createContext({isTransitioning:!1});Jg.displayName="ViewTransition";var Sw=w.createContext(new Map);Sw.displayName="Fetchers";var bw=w.createContext(null);bw.displayName="Await";var it=w.createContext(null);it.displayName="Navigation";var io=w.createContext(null);io.displayName="Location";var Ht=w.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var Mc=w.createContext(null);Mc.displayName="RouteError";var e0="REACT_ROUTER_ERROR",kw="REDIRECT",Cw="ROUTE_ERROR_RESPONSE";function Pw(e){if(e.startsWith(`${e0}:${kw}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ew(e){if(e.startsWith(`${e0}:${Cw}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new pw(t.status,t.statusText,t.data)}catch{}}function Tw(e,{relative:t}={}){ne(oo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(it),{hash:i,pathname:o,search:s}=so(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:ft([n,o])),r.createHref({pathname:a,search:s,hash:i})}function oo(){return w.useContext(io)!=null}function mt(){return ne(oo(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(io).location}var t0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function n0(e){w.useContext(it).static||w.useLayoutEffect(e)}function Rw(){let{isDataRoute:e}=w.useContext(Ht);return e?Vw():Lw()}function Lw(){ne(oo(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Hr),{basename:t,navigator:n}=w.useContext(it),{matches:r}=w.useContext(Ht),{pathname:i}=mt(),o=JSON.stringify(Hg(r)),s=w.useRef(!1);return n0(()=>{s.current=!0}),w.useCallback((l,u={})=>{if(Et(s.current,t0),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=jc(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:ft([t,c.pathname])),Qg(typeof l=="string"?l:Ar(l),n.createHref(c),Xg(n),"reject"),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}w.createContext(null);function so(e,{relative:t}={}){let{matches:n}=w.useContext(Ht),{pathname:r}=mt(),i=JSON.stringify(Hg(n));return w.useMemo(()=>jc(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Aw(e,t){return r0(e,t)}function r0(e,t,n){var b;ne(oo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=w.useContext(it),{matches:i}=w.useContext(Ht),o=i[i.length-1],s=o?o.params:{},a=o?o.pathname:"/",l=o?o.pathnameBase:"/",u=o&&o.route;{let h=u&&u.path||"";o0(a,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=mt(),d;if(t){let h=typeof t=="string"?Wr(t):t;ne(l==="/"||((b=h.pathname)==null?void 0:b.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),d=h}else d=c;let f=d.pathname||"/",g=f;if(l!=="/"){let h=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let y=n&&n.state.matches.length?n.state.matches.map(h=>Object.assign(h,{route:n.manifest[h.route.id]||h.route})):Og(e,{pathname:g});Et(u||y!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Et(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Iw(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:ft([l,r.encodeLocation?r.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:ft([l,r.encodeLocation?r.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),i,n);return t&&x?w.createElement(io.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},x):x}function $w(){let e=Ow(),t=hw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:o},"ErrorBoundary")," or"," ",w.createElement("code",{style:o},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,s)}var jw=w.createElement($w,null),i0=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Ew(e.digest);n&&(e=n)}let t=e!==void 0?w.createElement(Ht.Provider,{value:this.props.routeContext},w.createElement(Mc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?w.createElement(Mw,{error:e},t):t}};i0.contextType=qg;var Za=new WeakMap;function Mw({children:e,error:t}){let{basename:n,navigator:r}=w.useContext(it);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=Pw(t.digest);if(i){let o=Za.get(t);if(o)throw o;let s=Yg(i.location,n),a=s.absoluteURL||s.to;if(Qg(i.location,a,Xg(r),"allow-explicit"),xw(a))throw new Error("Invalid redirect location");if(Kg&&!Za.get(t))if(s.isExternal||i.reloadDocument)window.location.href=a;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw Za.set(t,l),l}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return e}function Dw({routeContext:e,match:t,children:n}){let r=w.useContext(Hr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Ht.Provider,{value:e},n)}function Iw(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,o=r==null?void 0:r.errors;if(o!=null){let c=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);ne(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let s=!1,a=-1;if(n&&r){s=r.renderFallback;for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(a=c),d.route.id){let{loaderData:f,errors:g}=r,y=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){n.isStatic&&(s=!0),a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(c,d)=>{var f,g;l(c,{location:r.location,params:((g=(f=r.matches)==null?void 0:f[0])==null?void 0:g.params)??{},pattern:mw(r.matches),errorInfo:d})}:void 0;return i.reduceRight((c,d,f)=>{let g,y=!1,x=null,b=null;r&&(g=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||jw,s&&(a<0&&f===0?(o0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):a===f&&(y=!0,b=d.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,f+1)),p=()=>{let m;return g?m=x:y?m=b:d.route.Component?m=w.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,w.createElement(Dw,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:r!=null},children:m})};return r&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(i0,{location:r.location,revalidation:r.revalidation,component:x,error:g,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):p()},null)}function Dc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _w(e){let t=w.useContext(Hr);return ne(t,Dc(e)),t}function zw(e){let t=w.useContext(sa);return ne(t,Dc(e)),t}function Nw(e){let t=w.useContext(Ht);return ne(t,Dc(e)),t}function Ic(e){let t=Nw(e),n=t.matches[t.matches.length-1];return ne(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Fw(){return Ic("useRouteId")}function Ow(){var r;let e=w.useContext(Mc),t=zw("useRouteError"),n=Ic("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Vw(){let{router:e}=_w("useNavigate"),t=Ic("useNavigate"),n=w.useRef(!1);return n0(()=>{n.current=!0}),w.useCallback(async(i,o={})=>{Et(n.current,t0),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Nf={};function o0(e,t,n){!t&&!Nf[e]&&(Nf[e]=!0,Et(!1,n))}w.memo(Bw);function Bw({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:o}){return r0(e,void 0,{manifest:t,state:r,isStatic:i,onError:o,future:n})}function du(e){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Uw({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1,useTransitions:s}){ne(!oo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:i,static:o,useTransitions:s,future:{}}),[a,i,o,s]);typeof n=="string"&&(n=Wr(n));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default",mask:y}=n,x=w.useMemo(()=>{let b=Ut(u,a);return b==null?null:{location:{pathname:b,search:c,hash:d,state:f,key:g,mask:y},navigationType:r}},[a,u,c,d,f,g,r,y]);return Et(x!=null,`<Router basename="${a}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:w.createElement(it.Provider,{value:l},w.createElement(io.Provider,{children:t,value:x}))}function Ww({children:e,location:t}){return Aw(fu(e),t)}function fu(e,t=[]){let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,fu(r.props.children,o));return}ne(r.type===du,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=fu(r.props.children,o)),n.push(s)}),n}var Xo="get",Qo="application/x-www-form-urlencoded";function aa(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Hw(e){return aa(e)&&e.tagName.toLowerCase()==="button"}function Gw(e){return aa(e)&&e.tagName.toLowerCase()==="form"}function Kw(e){return aa(e)&&e.tagName.toLowerCase()==="input"}function Yw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xw(e,t){return e.button===0&&(!t||t==="_self")&&!Yw(e)}var Ao=null;function Qw(){if(Ao===null)try{new FormData(document.createElement("form"),0),Ao=!1}catch{Ao=!0}return Ao}var Zw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qa(e){return e!=null&&!Zw.has(e)?(Et(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qo}"`),null):e}function qw(e,t){let n,r,i,o,s;if(Gw(e)){let a=e.getAttribute("action");r=a?Ut(a,t):null,n=e.getAttribute("method")||Xo,i=qa(e.getAttribute("enctype"))||Qo,o=new FormData(e)}else if(Hw(e)||Kw(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Ut(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Xo,i=qa(e.getAttribute("formenctype"))||qa(a.getAttribute("enctype"))||Qo,o=new FormData(a,e),!Qw()){let{name:u,type:c,value:d}=e;if(c==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,d)}}else{if(aa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Xo,r=null,i=Qo,s=e}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _c(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function s0(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Ut(i.pathname,t)==="/"?i.pathname=`${$r(t)}/_root.${r}`:i.pathname=`${$r(i.pathname)}.${r}`,i}async function Jw(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function t2(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let s=await Jw(o,n);return s.links?s.links():[]}return[]}));return o2(r.flat(1).filter(e2).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ff(e,t,n,r,i,o){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):o==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function n2(e,t,{includeHydrateFallback:n}={}){return r2(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function r2(e){return[...new Set(e)]}function i2(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function o2(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let o=JSON.stringify(i2(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function zc(){let e=w.useContext(Hr);return _c(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function s2(){let e=w.useContext(sa);return _c(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Nc=w.createContext(void 0);Nc.displayName="FrameworkContext";function la(){let e=w.useContext(Nc);return _c(e,"You must render this element inside a <HydratedRouter> element"),e}function a2(e,t){let n=w.useContext(Nc),[r,i]=w.useState(!1),[o,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=h=>{h.forEach(p=>{s(p.isIntersecting)})},b=new IntersectionObserver(x,{threshold:.5});return f.current&&b.observe(f.current),()=>{b.disconnect()}}},[e]),w.useEffect(()=>{if(r){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[r]);let g=()=>{i(!0)},y=()=>{i(!1),s(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ii(a,g),onBlur:ii(l,y),onMouseEnter:ii(u,g),onMouseLeave:ii(c,y),onTouchStart:ii(d,g)}]:[!1,f,{}]}function ii(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function l2({page:e,...t}){let n=ww(),{nonce:r}=la(),{router:i}=zc(),o=w.useMemo(()=>Og(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?(t.nonce==null&&r&&(t={...t,nonce:r}),n?w.createElement(c2,{page:e,matches:o,...t}):w.createElement(d2,{page:e,matches:o,...t})):null}function u2(e){let{manifest:t,routeModules:n}=la(),[r,i]=w.useState([]);return w.useEffect(()=>{let o=!1;return t2(e,t,n).then(s=>{o||i(s)}),()=>{o=!0}},[e,t,n]),r}function c2({page:e,matches:t,...n}){let r=mt(),{future:i}=la(),{basename:o}=zc(),s=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=s0(e,o,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of t)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&a.searchParams.set("_routes",u.join(",")),[a.pathname+a.search]},[o,i.v8_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,s.map(a=>w.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function d2({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:o,routeModules:s}=la(),{basename:a}=zc(),{loaderData:l,matches:u}=s2(),c=w.useMemo(()=>Ff(e,t,u,o,r,"data"),[e,t,u,o,r]),d=w.useMemo(()=>Ff(e,t,u,o,r,"assets"),[e,t,u,o,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let x=new Set,b=!1;if(t.forEach(p=>{var S;let m=o.routes[p.route.id];!m||!m.hasLoader||(!c.some(C=>C.route.id===p.route.id)&&p.route.id in l&&((S=s[p.route.id])!=null&&S.shouldRevalidate)||m.hasClientLoader?b=!0:x.add(p.route.id))}),x.size===0)return[];let h=s0(e,a,i.v8_trailingSlashAwareDataRequests,"data");return b&&x.size>0&&h.searchParams.set("_routes",t.filter(p=>x.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[a,i.v8_trailingSlashAwareDataRequests,l,r,o,c,t,e,s]),g=w.useMemo(()=>n2(d,o),[d,o]),y=u2(d);return w.createElement(w.Fragment,null,f.map(x=>w.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),g.map(x=>w.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),y.map(({key:x,link:b})=>w.createElement("link",{key:x,nonce:n.nonce,...b,crossOrigin:b.crossOrigin??n.crossOrigin})))}function f2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var p2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{p2&&(window.__reactRouterVersion="7.18.4")}catch{}function h2({basename:e,children:t,useTransitions:n,window:r}){let i=w.useRef();i.current==null&&(i.current=H1({window:r,v5Compat:!0}));let o=i.current,[s,a]=w.useState({action:o.action,location:o.location}),l=w.useCallback(u=>{n===!1?a(u):w.startTransition(()=>a(u))},[n]);return w.useLayoutEffect(()=>o.listen(l),[o,l]),w.createElement(Uw,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,useTransitions:n})}var a0=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,mask:a,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:g,...y},x){let{basename:b,navigator:h,useTransitions:p}=w.useContext(it),m=typeof c=="string"&&$c.test(c),S=Yg(c,b);c=S.to;let C=Tw(c,{relative:i}),P=mt(),E=null;if(a){let Ne=jc(a,[],P.mask?P.mask.pathname:"/",!0);b!=="/"&&(Ne.pathname=Ne.pathname==="/"?b:ft([b,Ne.pathname])),E=h.createHref(Ne)}let[T,D,j]=a2(r,y),Q=v2(c,{replace:s,mask:a,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f,defaultShouldRevalidate:g,useTransitions:p});function je(Ne){t&&t(Ne),Ne.defaultPrevented||Q(Ne)}let Ye=!(S.isExternal||o),yt=w.createElement("a",{...y,...j,href:(Ye?E:void 0)||S.absoluteURL||C,onClick:Ye?je:t,ref:f2(x,D),target:u,"data-discover":!m&&n==="render"?"true":void 0});return T&&!m?w.createElement(w.Fragment,null,yt,w.createElement(l2,{page:C})):yt});a0.displayName="Link";var m2=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:a,children:l,...u},c){let d=so(s,{relative:u.relative}),f=mt(),g=w.useContext(sa),{navigator:y,basename:x}=w.useContext(it),b=g!=null&&k2(d)&&a===!0,h=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,p=f.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(p=p.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&x&&(m=Ut(m,x)||m);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=p===h||!i&&p.startsWith(h)&&p.charAt(S)==="/",P=m!=null&&(m===h||!i&&m.startsWith(h)&&m.charAt(h.length)==="/"),E={isActive:C,isPending:P,isTransitioning:b},T=C?t:void 0,D;typeof r=="function"?D=r(E):D=[r,C?"active":null,P?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let j=typeof o=="function"?o(E):o;return w.createElement(a0,{...u,"aria-current":T,className:D,ref:c,style:j,to:s,viewTransition:a},typeof l=="function"?l(E):l)});m2.displayName="NavLink";var g2=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:s=Xo,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f,...g},y)=>{let{useTransitions:x}=w.useContext(it),b=S2(),h=b2(a,{relative:u}),p=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&$c.test(a),S=C=>{if(l&&l(C),C.defaultPrevented)return;C.preventDefault();let P=C.nativeEvent.submitter,E=(P==null?void 0:P.getAttribute("formmethod"))||s,T=()=>b(P||C.currentTarget,{fetcherKey:t,method:E,navigate:n,replace:i,state:o,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f});x&&n!==!1?w.startTransition(()=>T()):T()};return w.createElement("form",{ref:y,method:p,action:h,onSubmit:r?l:S,...g,"data-discover":!m&&e==="render"?"true":void 0})});g2.displayName="Form";function y2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(e){let t=w.useContext(Hr);return ne(t,y2(e)),t}function v2(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:o,relative:s,viewTransition:a,defaultShouldRevalidate:l,useTransitions:u}={}){let c=Rw(),d=mt(),f=so(e,{relative:s});return w.useCallback(g=>{if(Xw(g,t)){g.preventDefault();let y=n!==void 0?n:Ar(d)===Ar(f),x=()=>c(e,{replace:y,mask:r,state:i,preventScrollReset:o,relative:s,viewTransition:a,defaultShouldRevalidate:l});u?w.startTransition(()=>x()):x()}},[d,c,f,n,r,i,t,e,o,s,a,l,u])}var x2=0,w2=()=>`__${String(++x2)}__`;function S2(){let{router:e}=l0("useSubmit"),{basename:t}=w.useContext(it),n=Fw(),r=e.fetch,i=e.navigate;return w.useCallback(async(o,s={})=>{let{action:a,method:l,encType:u,formData:c,body:d}=qw(o,t);if(s.navigate===!1){let f=s.fetcherKey||w2();await r(f,n,s.action||a,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:c,body:d,formMethod:s.method||l,formEncType:s.encType||u,flushSync:s.flushSync})}else await i(s.action||a,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:c,body:d,formMethod:s.method||l,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,i,t,n])}function b2(e,{relative:t}={}){let{basename:n}=w.useContext(it),r=w.useContext(Ht);ne(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...so(e||".",{relative:t})},s=mt();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let c=a.toString();o.search=c?`?${c}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:ft([n,o.pathname])),Ar(o)}function k2(e,{relative:t}={}){let n=w.useContext(Jg);ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=l0("useViewTransitionState"),i=so(e,{relative:t});if(!n.isTransitioning)return!1;let o=Ut(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Ut(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ls(i.pathname,s)!=null||Ls(i.pathname,o)!=null}function C2(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Hi(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const pu=e=>Array.isArray(e);function u0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Gi(e){return typeof e=="string"||Array.isArray(e)}function Of(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Fc(e,t,n,r){if(typeof t=="function"){const[i,o]=Of(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Of(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function ua(e,t,n){const r=e.getProps();return Fc(r,t,n!==void 0?n:r.custom,e)}const Oc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vc=["initial",...Oc],ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sn=new Set(ao),It=e=>e*1e3,_t=e=>e/1e3,P2={type:"spring",stiffness:500,damping:25,restSpeed:10},E2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),T2={type:"keyframes",duration:.8},R2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},L2=(e,{keyframes:t})=>t.length>2?T2:Sn.has(e)?e.startsWith("scale")?E2(t[1]):P2:R2;function Bc(e,t){return e[t]||e.default||e}const A2={skipAnimations:!1,useManualTiming:!1},$2=e=>e!==null;function ca(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter($2),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Ee=e=>e;function j2(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,d=!1)=>{const g=d&&r?t:n;return c&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,i&&(i=!1,l.process(u))}};return l}const $o=["read","resolveKeyframes","update","preRender","render","postRender"],M2=40;function c0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=$o.reduce((h,p)=>(h[p]=j2(o),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=s,g=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,M2),1),i.timestamp=h,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},y=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:$o.reduce((h,p)=>{const m=s[p];return h[p]=(S,C=!1,P=!1)=>(n||y(),m.schedule(S,C,P)),h},{}),cancel:h=>{for(let p=0;p<$o.length;p++)s[$o[p]].cancel(h)},state:i,steps:s}}const{schedule:B,cancel:mn,state:ve,steps:Ja}=c0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ee,!0),d0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,D2=1e-7,I2=12;function _2(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=d0(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>D2&&++a<I2);return s}function lo(e,t,n,r){if(e===t&&n===r)return Ee;const i=o=>_2(o,0,1,e,n);return o=>o===0||o===1?o:d0(i(o),t,r)}const f0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,p0=e=>t=>1-e(1-t),h0=lo(.33,1.53,.69,.99),Uc=p0(h0),m0=f0(Uc),g0=e=>(e*=2)<1?.5*Uc(e):.5*(2-Math.pow(2,-10*(e-1))),Wc=e=>1-Math.sin(Math.acos(e)),y0=p0(Wc),v0=f0(Wc),x0=e=>/^0[^.\s]+$/u.test(e);function z2(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||x0(e):!0}let hu=Ee;const w0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),S0=e=>t=>typeof t=="string"&&t.startsWith(e),b0=S0("--"),N2=S0("var(--"),Hc=e=>N2(e)?F2.test(e.split("/*")[0].trim()):!1,F2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,O2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function V2(e){const t=O2.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function k0(e,t,n=1){const[r,i]=V2(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return w0(s)?parseFloat(s):s}return Hc(i)?k0(i,t,n+1):i}const gn=(e,t,n)=>n>t?t:n<e?e:n,Gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ki={...Gr,transform:e=>gn(0,1,e)},jo={...Gr,default:1},uo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Xt=uo("deg"),Ct=uo("%"),I=uo("px"),B2=uo("vh"),U2=uo("vw"),Vf={...Ct,parse:e=>Ct.parse(e)/100,transform:e=>Ct.transform(e*100)},W2=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Bf=e=>e===Gr||e===I,Uf=(e,t)=>parseFloat(e.split(", ")[t]),Wf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Uf(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Uf(o[1],e):0}},H2=new Set(["x","y","z"]),G2=ao.filter(e=>!H2.has(e));function K2(e){const t=[];return G2.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const jr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Wf(4,13),y:Wf(5,14)};jr.translateX=jr.x;jr.translateY=jr.y;const C0=e=>t=>t.test(e),Y2={test:e=>e==="auto",parse:e=>e},P0=[Gr,I,Ct,Xt,U2,B2,Y2],Hf=e=>P0.find(C0(e)),zn=new Set;let mu=!1,gu=!1;function E0(){if(gu){const e=Array.from(zn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=K2(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}gu=!1,mu=!1,zn.forEach(e=>e.complete()),zn.clear()}function T0(){zn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(gu=!0)})}function X2(){T0(),E0()}class Gc{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(zn.add(this),mu||(mu=!0,B.read(T0),B.resolveKeyframes(E0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),zn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,zn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ci=e=>Math.round(e*1e5)/1e5,Kc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Q2(e){return e==null}const Z2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yc=(e,t)=>n=>!!(typeof n=="string"&&Z2.test(n)&&n.startsWith(e)||t&&!Q2(n)&&Object.prototype.hasOwnProperty.call(n,t)),R0=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Kc);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},q2=e=>gn(0,255,e),el={...Gr,transform:e=>Math.round(q2(e))},Mn={test:Yc("rgb","red"),parse:R0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+el.transform(e)+", "+el.transform(t)+", "+el.transform(n)+", "+Ci(Ki.transform(r))+")"};function J2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const yu={test:Yc("#"),parse:J2,transform:Mn.transform},dr={test:Yc("hsl","hue"),parse:R0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ct.transform(Ci(t))+", "+Ct.transform(Ci(n))+", "+Ci(Ki.transform(r))+")"},ke={test:e=>Mn.test(e)||yu.test(e)||dr.test(e),parse:e=>Mn.test(e)?Mn.parse(e):dr.test(e)?dr.parse(e):yu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Mn.transform(e):dr.transform(e)},eS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tS(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Kc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(eS))===null||n===void 0?void 0:n.length)||0)>0}const L0="number",A0="color",nS="var",rS="var(",Gf="${}",iS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(iS,l=>(ke.test(l)?(r.color.push(o),i.push(A0),n.push(ke.parse(l))):l.startsWith(rS)?(r.var.push(o),i.push(nS),n.push(l)):(r.number.push(o),i.push(L0),n.push(parseFloat(l))),++o,Gf)).split(Gf);return{values:n,split:a,indexes:r,types:i}}function $0(e){return Yi(e).values}function j0(e){const{split:t,types:n}=Yi(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===L0?o+=Ci(i[s]):a===A0?o+=ke.transform(i[s]):o+=i[s]}return o}}const oS=e=>typeof e=="number"?0:e;function sS(e){const t=$0(e);return j0(e)(t.map(oS))}const yn={test:tS,parse:$0,createTransformer:j0,getAnimatableNone:sS},aS=new Set(["brightness","contrast","saturate","opacity"]);function lS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Kc)||[];if(!r)return e;const i=n.replace(r,"");let o=aS.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const uS=/\b([a-z-]*)\(.*?\)/gu,vu={...yn,getAnimatableNone:e=>{const t=e.match(uS);return t?t.map(lS).join(" "):e}},cS={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,radius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,backgroundPositionX:I,backgroundPositionY:I},dS={rotate:Xt,rotateX:Xt,rotateY:Xt,rotateZ:Xt,scale:jo,scaleX:jo,scaleY:jo,scaleZ:jo,skew:Xt,skewX:Xt,skewY:Xt,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Ki,originX:Vf,originY:Vf,originZ:I},Kf={...Gr,transform:Math.round},Xc={...cS,...dS,zIndex:Kf,size:I,fillOpacity:Ki,strokeOpacity:Ki,numOctaves:Kf},fS={...Xc,color:ke,backgroundColor:ke,outlineColor:ke,fill:ke,stroke:ke,borderColor:ke,borderTopColor:ke,borderRightColor:ke,borderBottomColor:ke,borderLeftColor:ke,filter:vu,WebkitFilter:vu},Qc=e=>fS[e];function M0(e,t){let n=Qc(e);return n!==vu&&(n=yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const pS=new Set(["auto","none","0"]);function hS(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!pS.has(o)&&Yi(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=M0(n,i)}class D0 extends Gc{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Hc(u))){const c=k0(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!W2.has(r)||t.length!==2)return;const[i,o]=t,s=Hf(i),a=Hf(o);if(s!==a)if(Bf(s)&&Bf(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)z2(t[i])&&r.push(i);r.length&&hS(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=jr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=jr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Zc(e){return typeof e=="function"}let Zo;function mS(){Zo=void 0}const Pt={now:()=>(Zo===void 0&&Pt.set(ve.isProcessing||A2.useManualTiming?ve.timestamp:performance.now()),Zo),set:e=>{Zo=e,queueMicrotask(mS)}},Yf=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yn.test(e)||e==="0")&&!e.startsWith("url("));function gS(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yS(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Yf(i,t),a=Yf(o,t);return!s||!a?!1:gS(e)||(n==="spring"||Zc(n))&&r}const vS=40;class I0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Pt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>vS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&X2(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Pt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!yS(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(ca(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function _0(e,t){return t?e*(1e3/t):0}const xS=5;function z0(e,t,n){const r=Math.max(t-xS,0);return _0(n-e(r),t-r)}const tl=.001,wS=.01,SS=10,bS=.05,kS=1;function CS({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=gn(bS,kS,s),e=gn(wS,SS,_t(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,g=xu(u,s),y=Math.exp(-d);return tl-f/g*y},o=u=>{const d=u*s*e,f=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-d),x=xu(Math.pow(u,2),s);return(-i(u)+tl>0?-1:1)*((f-g)*y)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-tl+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=ES(i,o,a);if(e=It(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const PS=12;function ES(e,t,n){let r=n;for(let i=1;i<PS;i++)r=r-e(r)/t(r);return r}function xu(e,t){return e*Math.sqrt(1-t*t)}const TS=["duration","bounce"],RS=["stiffness","damping","mass"];function Xf(e,t){return t.some(n=>e[n]!==void 0)}function LS(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Xf(e,RS)&&Xf(e,TS)){const n=CS(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function N0({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=LS({...r,velocity:-_t(r.velocity||0)}),g=d||0,y=l/(2*Math.sqrt(a*u)),x=o-i,b=_t(Math.sqrt(a/u)),h=Math.abs(x)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let p;if(y<1){const m=xu(b,y);p=S=>{const C=Math.exp(-y*b*S);return o-C*((g+y*b*x)/m*Math.sin(m*S)+x*Math.cos(m*S))}}else if(y===1)p=m=>o-Math.exp(-b*m)*(x+(g+b*x)*m);else{const m=b*Math.sqrt(y*y-1);p=S=>{const C=Math.exp(-y*b*S),P=Math.min(m*S,300);return o-C*((g+y*b*x)*Math.sinh(P)+m*x*Math.cosh(P))/m}}return{calculatedDuration:f&&c||null,next:m=>{const S=p(m);if(f)s.done=m>=c;else{let C=0;y<1&&(C=m===0?It(g):z0(p,m,S));const P=Math.abs(C)<=n,E=Math.abs(o-S)<=t;s.done=P&&E}return s.value=s.done?o:S,s}}}function Qf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},g=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const b=d+x,h=s===void 0?b:s(b);h!==b&&(x=h-d);const p=T=>-x*Math.exp(-T/r),m=T=>h+p(T),S=T=>{const D=p(T),j=m(T);f.done=Math.abs(D)<=u,f.value=f.done?h:j};let C,P;const E=T=>{g(f.value)&&(C=T,P=N0({keyframes:[f.value,y(f.value)],velocity:z0(m,T,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return E(0),{calculatedDuration:null,next:T=>{let D=!1;return!P&&C===void 0&&(D=!0,S(T),E(T)),C!==void 0&&T>=C?P.next(T-C):(!D&&S(T),f)}}}const AS=lo(.42,0,1,1),$S=lo(0,0,.58,1),F0=lo(.42,0,.58,1),jS=e=>Array.isArray(e)&&typeof e[0]!="number",Zf={linear:Ee,easeIn:AS,easeInOut:F0,easeOut:$S,circIn:Wc,circInOut:v0,circOut:y0,backIn:Uc,backInOut:m0,backOut:h0,anticipate:g0},qf=e=>{if(Array.isArray(e)){hu(e.length===4);const[t,n,r,i]=e;return lo(t,n,r,i)}else if(typeof e=="string")return hu(Zf[e]!==void 0),Zf[e];return e},MS=(e,t)=>n=>t(e(n)),zt=(...e)=>e.reduce(MS),Mr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ee=(e,t,n)=>e+(t-e)*n;function nl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function DS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=nl(l,a,e+1/3),o=nl(l,a,e),s=nl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function As(e,t){return n=>n>0?t:e}const rl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},IS=[yu,Mn,dr],_S=e=>IS.find(t=>t.test(e));function Jf(e){const t=_S(e);if(!t)return!1;let n=t.parse(e);return t===dr&&(n=DS(n)),n}const ep=(e,t)=>{const n=Jf(e),r=Jf(t);if(!n||!r)return As(e,t);const i={...n};return o=>(i.red=rl(n.red,r.red,o),i.green=rl(n.green,r.green,o),i.blue=rl(n.blue,r.blue,o),i.alpha=ee(n.alpha,r.alpha,o),Mn.transform(i))},wu=new Set(["none","hidden"]);function zS(e,t){return wu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function NS(e,t){return n=>ee(e,t,n)}function qc(e){return typeof e=="number"?NS:typeof e=="string"?Hc(e)?As:ke.test(e)?ep:VS:Array.isArray(e)?O0:typeof e=="object"?ke.test(e)?ep:FS:As}function O0(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>qc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function FS(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=qc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function OS(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const VS=(e,t)=>{const n=yn.createTransformer(t),r=Yi(e),i=Yi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?wu.has(e)&&!i.values.length||wu.has(t)&&!r.values.length?zS(e,t):zt(O0(OS(r,i),i.values),n):As(e,t)};function V0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ee(e,t,n):qc(e)(e,t)}function BS(e,t,n){const r=[],i=n||V0,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Ee:t;a=zt(l,a)}r.push(a)}return r}function US(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(hu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=BS(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Mr(e[c],e[c+1],u);return s[c](d)};return n?u=>l(gn(e[0],e[o-1],u)):l}function WS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Mr(0,t,r);e.push(ee(n,1,i))}}function HS(e){const t=[0];return WS(t,e.length-1),t}function GS(e,t){return e.map(n=>n*t)}function KS(e,t){return e.map(()=>t||F0).splice(0,e.length-1)}function $s({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=jS(r)?r.map(qf):qf(r),o={done:!1,value:t[0]},s=GS(n&&n.length===t.length?n:HS(t),e),a=US(s,t,{ease:Array.isArray(i)?i:KS(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const tp=2e4;function YS(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<tp;)t+=n,r=e.next(t);return t>=tp?1/0:t}const XS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>B.update(t,!0),stop:()=>mn(t),now:()=>ve.isProcessing?ve.timestamp:Pt.now()}},QS={decay:Qf,inertia:Qf,tween:$s,keyframes:$s,spring:N0},ZS=e=>e/100;class Jc extends I0{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Gc,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Zc(n)?n:QS[n]||$s;let l,u;a!==$s&&typeof t[0]!="number"&&(l=zt(ZS,V0(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=YS(c));const{calculatedDuration:d}=c,f=d+i,g=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:g,repeatType:y,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),p=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let m=this.currentTime,S=o;if(g){const T=Math.min(this.currentTime,c)/d;let D=Math.floor(T),j=T%1;!j&&T>=1&&(j=1),j===1&&D--,D=Math.min(D,g+1),!!(D%2)&&(y==="reverse"?(j=1-j,x&&(j-=x/d)):y==="mirror"&&(S=s)),m=gn(0,1,j)*d}const C=p?{done:!1,value:l[0]}:S.next(m);a&&(C.value=a(C.value));let{done:P}=C;!p&&u!==null&&(P=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return E&&i!==void 0&&(C.value=ca(l,this.options,i)),b&&b(C.value),E&&this.finish(),C}get duration(){const{resolved:t}=this;return t?_t(t.calculatedDuration):0}get time(){return _t(this.currentTime)}set time(t){t=It(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=_t(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=XS,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const B0=new Set(["opacity","clipPath","filter","transform"]),U0=e=>Array.isArray(e)&&typeof e[0]=="number",qS=10,JS=(e,t)=>{let n="";const r=Math.max(Math.round(t/qS),2);for(let i=0;i<r;i++)n+=e(Mr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function ed(e){let t;return()=>(t===void 0&&(t=e()),t)}const eb={linearEasing:void 0};function tb(e,t){const n=ed(e);return()=>{var r;return(r=eb[t])!==null&&r!==void 0?r:n()}}const js=tb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function W0(e){return!!(typeof e=="function"&&js()||!e||typeof e=="string"&&(e in Su||js())||U0(e)||Array.isArray(e)&&e.every(W0))}const fi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Su={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function H0(e,t){if(e)return typeof e=="function"&&js()?JS(e,t):U0(e)?fi(e):Array.isArray(e)?e.map(n=>H0(n,t)||Su.easeOut):Su[e]}function nb(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=H0(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function np(e,t){e.timeline=t,e.onfinish=null}const rb=ed(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ms=10,ib=2e4;function ob(e){return Zc(e.type)||e.type==="spring"||!W0(e.ease)}function sb(e,t){const n=new Jc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<ib;)r=n.sample(o),i.push(r.value),o+=Ms;return{times:void 0,keyframes:i,duration:o-Ms,ease:"linear"}}const G0={anticipate:g0,backInOut:m0,circInOut:v0};function ab(e){return e in G0}class rp extends I0{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new D0(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&js()&&ab(s)&&(s=G0[s]),ob(this.options)){const{onComplete:f,onUpdate:g,motionValue:y,element:x,...b}=this.options,h=sb(t,b);t=h.keyframes,t.length===1&&(t[1]=t[0]),i=h.duration,o=h.times,s=h.ease,a="keyframes"}const d=nb(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(np(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(ca(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return _t(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return _t(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=It(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ee;const{animation:r}=n;np(r,t)}return Ee}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...g}=this.options,y=new Jc({...g,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=It(this.time);u.setWithVelocity(y.sample(x-Ms).value,y.sample(x).value,Ms)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return rb()&&r&&B0.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const lb=ed(()=>window.ScrollTimeline!==void 0);class ub{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>lb()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function cb({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const td=(e,t,n,r={},i,o)=>s=>{const a=Bc(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-It(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};cb(a)||(c={...c,...L2(e,c)}),c.duration&&(c.duration=It(c.duration)),c.repeatDelay&&(c.repeatDelay=It(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const f=ca(c.keyframes,a);if(f!==void 0)return B.update(()=>{c.onUpdate(f),c.onComplete()}),new ub([])}return!o&&rp.supports(c)?new rp(c):new Jc(c)},db=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),fb=e=>pu(e)?e[e.length-1]||0:e;function co(e,t){e.indexOf(t)===-1&&e.push(t)}function nd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class rd{constructor(){this.subscriptions=[]}add(t){return co(this.subscriptions,t),()=>nd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ip=30,pb=e=>!isNaN(parseFloat(e)),op={current:void 0};class K0{constructor(t,n={}){this.version="11.9.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Pt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=pb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new rd);const r=this.events[t].add(n);return t==="change"?()=>{r(),B.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return op.current&&op.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ip)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ip);return _0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xi(e,t){return new K0(e,t)}function hb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xi(n))}function mb(e,t){const n=ua(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=fb(o[s]);hb(e,s,a)}}const da=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gb="framerAppearId",Y0="data-"+da(gb);function X0(e){return e.props[Y0]}function Q0(e){if(Sn.has(e))return"transform";if(B0.has(e))return da(e)}class yb extends K0{constructor(){super(...arguments),this.values=[]}add(t){const n=Q0(t);n&&(co(this.values,n),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}const Pe=e=>!!(e&&e.getVelocity);function vb(e){return!!(Pe(e)&&e.add)}function bu(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");if(!r&&!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&(r=new yb("auto"),e.addValue("willChange",r)),vb(r))return r.add(t)}function xb({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Z0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),g=l[d];if(g===void 0||c&&xb(c,d))continue;const y={delay:n,...Bc(s||{},d)};let x=!1;if(window.MotionHandoffAnimation){const h=X0(e);if(h){const p=window.MotionHandoffAnimation(h,d,B);p!==null&&(y.startTime=p,x=!0)}}bu(e,d),f.start(td(d,f,g,e.shouldReduceMotion&&Sn.has(d)?{type:!1}:y,e,x));const b=f.animation;b&&u.push(b)}return a&&Promise.all(u).then(()=>{B.update(()=>{a&&mb(e,a)})}),u}function ku(e,t,n={}){var r;const i=ua(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(Z0(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return wb(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function wb(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Sb).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(ku(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Sb(e,t){return e.sortNodePosition(t)}function bb(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ku(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ku(e,t,n);else{const i=typeof t=="function"?ua(e,t,n.custom):t;r=Promise.all(Z0(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const kb=Vc.length;function q0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?q0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<kb;n++){const r=Vc[n],i=e.props[r];(Gi(i)||i===!1)&&(t[r]=i)}return t}const Cb=[...Oc].reverse(),Pb=Oc.length;function Eb(e){return t=>Promise.all(t.map(({animation:n,options:r})=>bb(e,n,r)))}function Tb(e){let t=Eb(e),n=sp(),r=!0;const i=l=>(u,c)=>{var d;const f=ua(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:g,transitionEnd:y,...x}=f;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=q0(e.parent)||{},d=[],f=new Set;let g={},y=1/0;for(let b=0;b<Pb;b++){const h=Cb[b],p=n[h],m=u[h]!==void 0?u[h]:c[h],S=Gi(m),C=h===l?p.isActive:null;C===!1&&(y=b);let P=m===c[h]&&m!==u[h]&&S;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),p.protectedKeys={...g},!p.isActive&&C===null||!m&&!p.prevProp||Hi(m)||typeof m=="boolean")continue;const E=Rb(p.prevProp,m);let T=E||h===l&&p.isActive&&!P&&S||b>y&&S,D=!1;const j=Array.isArray(m)?m:[m];let Q=j.reduce(i(h),{});C===!1&&(Q={});const{prevResolvedValues:je={}}=p,Ye={...je,...Q},yt=q=>{T=!0,f.has(q)&&(D=!0,f.delete(q)),p.needsAnimating[q]=!0;const L=e.getValue(q);L&&(L.liveStyle=!1)};for(const q in Ye){const L=Q[q],M=je[q];if(g.hasOwnProperty(q))continue;let _=!1;pu(L)&&pu(M)?_=!u0(L,M):_=L!==M,_?L!=null?yt(q):f.add(q):L!==void 0&&f.has(q)?yt(q):p.protectedKeys[q]=!0}p.prevProp=m,p.prevResolvedValues=Q,p.isActive&&(g={...g,...Q}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(P&&E)||D)&&d.push(...j.map(q=>({animation:q,options:{type:h}})))}if(f.size){const b={};f.forEach(h=>{const p=e.getBaseTarget(h),m=e.getValue(h);m&&(m.liveStyle=!0),b[h]=p??null}),d.push({animation:b})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=sp(),r=!0}}}function Rb(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!u0(t,e):!1}function Pn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function sp(){return{animate:Pn(!0),whileInView:Pn(),whileHover:Pn(),whileTap:Pn(),whileDrag:Pn(),whileFocus:Pn(),exit:Pn()}}class bn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Lb extends bn{constructor(t){super(t),t.animationState||(t.animationState=Tb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Hi(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Ab=0;class $b extends bn{constructor(){super(...arguments),this.id=Ab++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const jb={animation:{Feature:Lb},exit:{Feature:$b}},J0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function fa(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const Mb=e=>t=>J0(t)&&e(t,fa(t));function Mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Nt(e,t,n,r){return Mt(e,t,Mb(n),r)}const ap=(e,t)=>Math.abs(e-t);function Db(e,t){const n=ap(e.x,t.x),r=ap(e.y,t.y);return Math.sqrt(n**2+r**2)}class ey{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ol(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=Db(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:y}=d,{timestamp:x}=ve;this.history.push({...y,timestamp:x});const{onStart:b,onMove:h}=this.handlers;f||(b&&b(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=il(f,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ol(d.type==="pointercancel"?this.lastMoveEventInfo:il(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,b),y&&y(d,b)},!J0(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=fa(t),a=il(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ve;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,ol(a,this.history)),this.removeListeners=zt(Nt(this.contextWindow,"pointermove",this.handlePointerMove),Nt(this.contextWindow,"pointerup",this.handlePointerUp),Nt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),mn(this.updatePoint)}}function il(e,t){return t?{point:t(e.point)}:e}function lp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ol({point:e},t){return{point:e,delta:lp(e,ty(t)),offset:lp(e,Ib(t)),velocity:_b(t,.1)}}function Ib(e){return e[0]}function ty(e){return e[e.length-1]}function _b(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=ty(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>It(t)));)n--;if(!r)return{x:0,y:0};const o=_t(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ny(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const up=ny("dragHorizontal"),cp=ny("dragVertical");function ry(e){let t=!1;if(e==="y")t=cp();else if(e==="x")t=up();else{const n=up(),r=cp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function iy(){const e=ry(!0);return e?(e(),!1):!0}function fr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const oy=1e-4,zb=1-oy,Nb=1+oy,sy=.01,Fb=0-sy,Ob=0+sy;function He(e){return e.max-e.min}function Vb(e,t,n){return Math.abs(e-t)<=n}function dp(e,t,n,r=.5){e.origin=r,e.originPoint=ee(t.min,t.max,e.origin),e.scale=He(n)/He(t),e.translate=ee(n.min,n.max,e.origin)-e.originPoint,(e.scale>=zb&&e.scale<=Nb||isNaN(e.scale))&&(e.scale=1),(e.translate>=Fb&&e.translate<=Ob||isNaN(e.translate))&&(e.translate=0)}function Pi(e,t,n,r){dp(e.x,t.x,n.x,r?r.originX:void 0),dp(e.y,t.y,n.y,r?r.originY:void 0)}function fp(e,t,n){e.min=n.min+t.min,e.max=e.min+He(t)}function Bb(e,t,n){fp(e.x,t.x,n.x),fp(e.y,t.y,n.y)}function pp(e,t,n){e.min=t.min-n.min,e.max=e.min+He(t)}function Ei(e,t,n){pp(e.x,t.x,n.x),pp(e.y,t.y,n.y)}function Ub(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ee(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ee(n,e,r.max):Math.min(e,n)),e}function hp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Wb(e,{top:t,left:n,bottom:r,right:i}){return{x:hp(e.x,n,i),y:hp(e.y,t,r)}}function mp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Hb(e,t){return{x:mp(e.x,t.x),y:mp(e.y,t.y)}}function Gb(e,t){let n=.5;const r=He(e),i=He(t);return i>r?n=Mr(t.min,t.max-r,e.min):r>i&&(n=Mr(e.min,e.max-i,t.min)),gn(0,1,n)}function Kb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Cu=.35;function Yb(e=Cu){return e===!1?e=0:e===!0&&(e=Cu),{x:gp(e,"left","right"),y:gp(e,"top","bottom")}}function gp(e,t,n){return{min:yp(e,t),max:yp(e,n)}}function yp(e,t){return typeof e=="number"?e:e[t]||0}const vp=()=>({translate:0,scale:1,origin:0,originPoint:0}),pr=()=>({x:vp(),y:vp()}),xp=()=>({min:0,max:0}),oe=()=>({x:xp(),y:xp()});function Qe(e){return[e("x"),e("y")]}function ay({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Xb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Qb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function sl(e){return e===void 0||e===1}function Pu({scale:e,scaleX:t,scaleY:n}){return!sl(e)||!sl(t)||!sl(n)}function Rn(e){return Pu(e)||ly(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ly(e){return wp(e.x)||wp(e.y)}function wp(e){return e&&e!=="0%"}function Ds(e,t,n){const r=e-n,i=t*r;return n+i}function Sp(e,t,n,r,i){return i!==void 0&&(e=Ds(e,i,r)),Ds(e,n,r)+t}function Eu(e,t=0,n=1,r,i){e.min=Sp(e.min,t,n,r,i),e.max=Sp(e.max,t,n,r,i)}function uy(e,{x:t,y:n}){Eu(e.x,t.translate,t.scale,t.originPoint),Eu(e.y,n.translate,n.scale,n.originPoint)}const bp=.999999999999,kp=1.0000000000001;function Zb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&mr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,uy(e,s)),r&&Rn(o.latestValues)&&mr(e,o.latestValues))}t.x<kp&&t.x>bp&&(t.x=1),t.y<kp&&t.y>bp&&(t.y=1)}function hr(e,t){e.min=e.min+t,e.max=e.max+t}function Cp(e,t,n,r,i=.5){const o=ee(e.min,e.max,i);Eu(e,t,n,o,r)}function mr(e,t){Cp(e.x,t.x,t.scaleX,t.scale,t.originX),Cp(e.y,t.y,t.scaleY,t.scale,t.originY)}function cy(e,t){return ay(Qb(e.getBoundingClientRect(),t))}function qb(e,t,n){const r=cy(e,n),{scroll:i}=t;return i&&(hr(r.x,i.offset.x),hr(r.y,i.offset.y)),r}const dy=({current:e})=>e?e.ownerDocument.defaultView:null,Jb=new WeakMap;class ek{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(fa(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:g,onDragStart:y}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ry(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qe(b=>{let h=this.getAxisMotionValue(b).get()||0;if(Ct.test(h)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[b];m&&(h=He(m)*(parseFloat(h)/100))}}this.originPoint[b]=h}),y&&B.postRender(()=>y(c,d)),bu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:y,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=d;if(g&&this.currentDirection===null){this.currentDirection=tk(b),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,b),this.updateAxis("y",d.point,b),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Qe(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ey(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:dy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&B.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Mo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Ub(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&fr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Wb(i.layoutBox,n):this.constraints=!1,this.elastic=Yb(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Qe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=Kb(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!fr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=qb(r,i.root,this.visualElement.getTransformPagePoint());let s=Hb(i.layout.layoutBox,o);if(n){const a=n(Xb(s));this.hasMutatedConstraints=!!a,a&&(s=ay(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Qe(c=>{if(!Mo(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return bu(this.visualElement,t),r.start(td(t,r,0,n,this.visualElement,!1))}stopAnimation(){Qe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Qe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Qe(n=>{const{drag:r}=this.getProps();if(!Mo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ee(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!fr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Qe(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=Gb({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Qe(s=>{if(!Mo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(ee(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;Jb.set(this.visualElement,this);const t=this.visualElement.current,n=Nt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();fr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),B.read(r);const s=Mt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Qe(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Cu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Mo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function tk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class nk extends bn{constructor(t){super(t),this.removeGroupControls=Ee,this.removeListeners=Ee,this.controls=new ek(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ee}unmount(){this.removeGroupControls(),this.removeListeners()}}const Pp=e=>(t,n)=>{e&&B.postRender(()=>e(t,n))};class rk extends bn{constructor(){super(...arguments),this.removePointerDownListener=Ee}onPointerDown(t){this.session=new ey(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:dy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Pp(t),onStart:Pp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&B.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Nt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const pa=w.createContext(null);function ik(){const e=w.useContext(pa);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=w.useId();w.useEffect(()=>r(i),[]);const o=w.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const id=w.createContext({}),fy=w.createContext({}),qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ep(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const oi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(I.test(e))e=parseFloat(e);else return e;const n=Ep(e,t.target.x),r=Ep(e,t.target.y);return`${n}% ${r}%`}},ok={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=yn.parse(e);if(i.length>5)return r;const o=yn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=ee(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Is={};function sk(e){Object.assign(Is,e)}const{schedule:od,cancel:cT}=c0(queueMicrotask,!1);class ak extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;sk(lk),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||B.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),od.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function py(e){const[t,n]=ik(),r=w.useContext(id);return k.jsx(ak,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(fy),isPresent:t,safeToRemove:n})}const lk={borderRadius:{...oi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oi,borderTopRightRadius:oi,borderBottomLeftRadius:oi,borderBottomRightRadius:oi,boxShadow:ok},hy=["TopLeft","TopRight","BottomLeft","BottomRight"],uk=hy.length,Tp=e=>typeof e=="string"?parseFloat(e):e,Rp=e=>typeof e=="number"||I.test(e);function ck(e,t,n,r,i,o){i?(e.opacity=ee(0,n.opacity!==void 0?n.opacity:1,dk(r)),e.opacityExit=ee(t.opacity!==void 0?t.opacity:1,0,fk(r))):o&&(e.opacity=ee(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<uk;s++){const a=`border${hy[s]}Radius`;let l=Lp(t,a),u=Lp(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Rp(l)===Rp(u)?(e[a]=Math.max(ee(Tp(l),Tp(u),r),0),(Ct.test(u)||Ct.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=ee(t.rotate||0,n.rotate||0,r))}function Lp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const dk=my(0,.5,y0),fk=my(.5,.95,Ee);function my(e,t,n){return r=>r<e?0:r>t?1:n(Mr(e,t,r))}function Ap(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Ap(e.x,t.x),Ap(e.y,t.y)}function $p(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function jp(e,t,n,r,i){return e-=t,e=Ds(e,1/n,r),i!==void 0&&(e=Ds(e,1/i,r)),e}function pk(e,t=0,n=1,r=.5,i,o=e,s=e){if(Ct.test(t)&&(t=parseFloat(t),t=ee(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ee(o.min,o.max,r);e===o&&(a-=t),e.min=jp(e.min,t,n,a,i),e.max=jp(e.max,t,n,a,i)}function Mp(e,t,[n,r,i],o,s){pk(e,t[n],t[r],t[i],t.scale,o,s)}const hk=["x","scaleX","originX"],mk=["y","scaleY","originY"];function Dp(e,t,n,r){Mp(e.x,t,hk,n?n.x:void 0,r?r.x:void 0),Mp(e.y,t,mk,n?n.y:void 0,r?r.y:void 0)}function Ip(e){return e.translate===0&&e.scale===1}function gy(e){return Ip(e.x)&&Ip(e.y)}function _p(e,t){return e.min===t.min&&e.max===t.max}function gk(e,t){return _p(e.x,t.x)&&_p(e.y,t.y)}function zp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function yy(e,t){return zp(e.x,t.x)&&zp(e.y,t.y)}function Np(e){return He(e.x)/He(e.y)}function Fp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class yk{constructor(){this.members=[]}add(t){co(this.members,t),t.scheduleRender()}remove(t){if(nd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function vk(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:g,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const xk=(e,t)=>e.depth-t.depth;class wk{constructor(){this.children=[],this.isDirty=!1}add(t){co(this.children,t),this.isDirty=!0}remove(t){nd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(xk),this.isDirty=!1,this.children.forEach(t)}}function Jo(e){const t=Pe(e)?e.get():e;return db(t)?t.toValue():t}function Sk(e,t){const n=Pt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(mn(r),e(o-t))};return B.read(r,!0),()=>mn(r)}function bk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function kk(e,t,n){const r=Pe(e)?e:Xi(e);return r.start(td("",r,t,n)),r.animation}const Ln={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},pi=typeof window<"u"&&window.MotionDebug!==void 0,al=["","X","Y","Z"],Ck={visibility:"hidden"},Op=1e3;let Pk=0;function ll(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vy(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=X0(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",B,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&vy(r)}function xy({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Pk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,pi&&(Ln.totalNodes=Ln.resolvedTargetDeltas=Ln.recalculatedProjection=0),this.nodes.forEach(Rk),this.nodes.forEach(Mk),this.nodes.forEach(Dk),this.nodes.forEach(Lk),pi&&window.MotionDebug.record(Ln)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new wk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new rd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=bk(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Sk(f,250),qo.hasAnimatedSinceResize&&(qo.hasAnimatedSinceResize=!1,this.nodes.forEach(Bp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||Fk,{onLayoutAnimationStart:b,onLayoutAnimationComplete:h}=c.getProps(),p=!this.targetLayout||!yy(this.targetLayout,y)||g,m=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const S={...Bc(x,"layout"),onPlay:b,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Bp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ik),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vp);return}this.isUpdating||this.nodes.forEach($k),this.isUpdating=!1,this.nodes.forEach(jk),this.nodes.forEach(Ek),this.nodes.forEach(Tk),this.clearAllSnapshots();const a=Pt.now();ve.delta=gn(0,1e3/60,a-ve.timestamp),ve.timestamp=a,ve.isProcessing=!0,Ja.update.process(ve),Ja.preRender.process(ve),Ja.render.process(ve),ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,od.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ak),this.sharedNodes.forEach(_k)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!gy(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Rn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Ok(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return oe();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(Vk))){const{scroll:c}=this.root;c&&(hr(l.x,c.offset.x),hr(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=oe();if(Xe(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Xe(l,s),hr(l.x,d.offset.x),hr(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=oe();Xe(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&mr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Rn(c.latestValues)&&mr(l,c.latestValues)}return Rn(this.latestValues)&&mr(l,this.latestValues),l}removeTransform(s){const a=oe();Xe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Rn(u.latestValues))continue;Pu(u.latestValues)&&u.updateSnapshot();const c=oe(),d=u.measurePageBox();Xe(c,d),Dp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Rn(this.latestValues)&&Dp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ve.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),Ei(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Bb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xe(this.target,this.layout.layoutBox),uy(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),Ei(this.relativeTargetOrigin,this.target,g.target),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}pi&&Ln.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Pu(this.parent.latestValues)||ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ve.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Xe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;Zb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=oe());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($p(this.prevProjectionDelta.x,this.projectionDelta.x),$p(this.prevProjectionDelta.y,this.projectionDelta.y)),Pi(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!Fp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),pi&&Ln.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pr(),this.projectionDelta=pr(),this.projectionDeltaWithTransform=pr()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=pr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=oe(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=g!==y,b=this.getStack(),h=!b||b.members.length<=1,p=!!(x&&!h&&this.options.crossfade===!0&&!this.path.some(Nk));this.animationProgress=0;let m;this.mixTargetDelta=S=>{const C=S/1e3;Up(d.x,s.x,C),Up(d.y,s.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ei(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),zk(this.relativeTarget,this.relativeTargetOrigin,f,C),m&&gk(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=oe()),Xe(m,this.relativeTarget)),x&&(this.animationValues=c,ck(c,u,this.latestValues,C,p,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update(()=>{qo.hasAnimatedSinceResize=!0,this.currentAnimation=kk(0,Op,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Op),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&wy(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||oe();const d=He(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=He(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Xe(a,l),mr(a,c),Pi(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new yk),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&ll("z",s,u,this.animationValues);for(let c=0;c<al.length;c++)ll(`rotate${al[c]}`,s,u,this.animationValues),ll(`skew${al[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ck;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Jo(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Jo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Rn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=vk(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:g,y}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Is){if(f[x]===void 0)continue;const{correct:b,applyTo:h}=Is[x],p=u.transform==="none"?f[x]:b(f[x],d);if(h){const m=h.length;for(let S=0;S<m;S++)u[h[S]]=p}else u[x]=p}return this.options.layoutId&&(u.pointerEvents=d===this?Jo(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Vp),this.root.sharedNodes.clear()}}}function Ek(e){e.updateLayout()}function Tk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Qe(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=He(f);f.min=r[d].min,f.max=f.min+g}):wy(o,n.layoutBox,r)&&Qe(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=He(r[d]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=pr();Pi(a,r,n.layoutBox);const l=pr();s?Pi(l,e.applyTransform(i,!0),n.measuredBox):Pi(l,r,n.layoutBox);const u=!gy(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const y=oe();Ei(y,n.layoutBox,f.layoutBox);const x=oe();Ei(x,r,g.layoutBox),yy(y,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Rk(e){pi&&Ln.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Lk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ak(e){e.clearSnapshot()}function Vp(e){e.clearMeasurements()}function $k(e){e.isLayoutDirty=!1}function jk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Bp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Mk(e){e.resolveTargetDelta()}function Dk(e){e.calcProjection()}function Ik(e){e.resetSkewAndRotation()}function _k(e){e.removeLeadSnapshot()}function Up(e,t,n){e.translate=ee(t.translate,0,n),e.scale=ee(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Wp(e,t,n,r){e.min=ee(t.min,n.min,r),e.max=ee(t.max,n.max,r)}function zk(e,t,n,r){Wp(e.x,t.x,n.x,r),Wp(e.y,t.y,n.y,r)}function Nk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Fk={duration:.45,ease:[.4,0,.1,1]},Hp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Gp=Hp("applewebkit/")&&!Hp("chrome/")?Math.round:Ee;function Kp(e){e.min=Gp(e.min),e.max=Gp(e.max)}function Ok(e){Kp(e.x),Kp(e.y)}function wy(e,t,n){return e==="position"||e==="preserve-aspect"&&!Vb(Np(t),Np(n),.2)}function Vk(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Bk=xy({attachResizeListener:(e,t)=>Mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ul={current:void 0},Sy=xy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ul.current){const e=new Bk({});e.mount(window),e.setOptions({layoutScroll:!0}),ul.current=e}return ul.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Uk={pan:{Feature:rk},drag:{Feature:nk,ProjectionNode:Sy,MeasureLayout:py}};function Yp(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||iy())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&B.postRender(()=>l(o,s))};return Nt(e.current,n,i,{passive:!e.getProps()[r]})}class Wk extends bn{mount(){this.unmount=zt(Yp(this.node,!0),Yp(this.node,!1))}unmount(){}}class Hk extends bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zt(Mt(this.node.current,"focus",()=>this.onFocus()),Mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const by=(e,t)=>t?e===t?!0:by(e,t.parentElement):!1;function cl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,fa(n))}class Gk extends bn{constructor(){super(...arguments),this.removeStartListeners=Ee,this.removeEndListeners=Ee,this.removeAccessibleListeners=Ee,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Nt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps(),f=!d&&!by(this.node.current,a.target)?c:u;f&&B.update(()=>f(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Nt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=zt(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||cl("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&B.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Mt(this.node.current,"keyup",s),cl("down",(a,l)=>{this.startPress(a,l)})},n=Mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&cl("cancel",(o,s)=>this.cancelPress(o,s))},i=Mt(this.node.current,"blur",r);this.removeAccessibleListeners=zt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&B.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!iy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&B.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Nt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=zt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Tu=new WeakMap,dl=new WeakMap,Kk=e=>{const t=Tu.get(e.target);t&&t(e)},Yk=e=>{e.forEach(Kk)};function Xk({root:e,...t}){const n=e||document;dl.has(n)||dl.set(n,{});const r=dl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Yk,{root:e,...t})),r[i]}function Qk(e,t,n){const r=Xk(t);return Tu.set(e,n),r.observe(e),()=>{Tu.delete(e),r.unobserve(e)}}const Zk={some:0,all:1};class qk extends bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Zk[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return Qk(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Jk(t,n))&&this.startObserver()}unmount(){}}function Jk({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const e5={inView:{Feature:qk},tap:{Feature:Gk},focus:{Feature:Hk},hover:{Feature:Wk}},t5={layout:{ProjectionNode:Sy,MeasureLayout:py}},sd=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ha=w.createContext({}),ad=typeof window<"u",ky=ad?w.useLayoutEffect:w.useEffect,Cy=w.createContext({strict:!1});let Xp=!1;function n5(e,t,n,r,i){var o;const{visualElement:s}=w.useContext(ha),a=w.useContext(Cy),l=w.useContext(pa),u=w.useContext(sd).reducedMotion,c=w.useRef();r=r||a.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const d=c.current,f=w.useContext(fy);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&i5(c.current,n,i,f),w.useInsertionEffect(()=>{d&&d.update(n,l)});const g=n[Y0],y=w.useRef(!!g&&!window.MotionHandoffIsComplete&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,g)));return ky(()=>{d&&(d.updateFeatures(),od.render(d.render),y.current&&d.animationState&&d.animationState.animateChanges())}),w.useEffect(()=>{d&&(!y.current&&d.animationState&&d.animationState.animateChanges(),y.current=!1,Xp||(Xp=!0,queueMicrotask(r5)))}),d}function r5(){window.MotionHandoffIsComplete=!0}function i5(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Py(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&fr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Py(e){if(e)return e.options.allowProjection!==!1?e.projection:Py(e.parent)}function o5(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):fr(n)&&(n.current=r))},[t])}function ma(e){return Hi(e.animate)||Vc.some(t=>Gi(e[t]))}function Ey(e){return!!(ma(e)||e.variants)}function s5(e,t){if(ma(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Gi(n)?n:void 0,animate:Gi(r)?r:void 0}}return e.inherit!==!1?t:{}}function a5(e){const{initial:t,animate:n}=s5(e,w.useContext(ha));return w.useMemo(()=>({initial:t,animate:n}),[Qp(t),Qp(n)])}function Qp(e){return Array.isArray(e)?e.join(" "):e}const Zp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Dr={};for(const e in Zp)Dr[e]={isEnabled:t=>Zp[e].some(n=>!!t[n])};function l5(e){for(const t in e)Dr[t]={...Dr[t],...e[t]}}const u5=Symbol.for("motionComponentSymbol");function c5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&l5(e);function o(a,l){let u;const c={...w.useContext(sd),...a,layoutId:d5(a)},{isStatic:d}=c,f=a5(a),g=r(a,d);if(!d&&ad){f5();const y=p5(c);u=y.MeasureLayout,f.visualElement=n5(i,g,c,t,y.ProjectionNode)}return k.jsxs(ha.Provider,{value:f,children:[u&&f.visualElement?k.jsx(u,{visualElement:f.visualElement,...c}):null,n(i,a,o5(g,f.visualElement,l),g,d,f.visualElement)]})}const s=w.forwardRef(o);return s[u5]=i,s}function d5({layoutId:e}){const t=w.useContext(id).id;return t&&e!==void 0?t+"-"+e:e}function f5(e,t){w.useContext(Cy).strict}function p5(e){const{drag:t,layout:n}=Dr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const h5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ld(e){return typeof e!="string"||e.includes("-")?!1:!!(h5.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ty(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Ry=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ly(e,t,n,r){Ty(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ry.has(i)?i:da(i),t.attrs[i])}function Ay(e,{layout:t,layoutId:n}){return Sn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Is[e]||e==="opacity")}function ud(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Pe(i[s])||t.style&&Pe(t.style[s])||Ay(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function $y(e,t,n){const r=ud(e,t,n);for(const i in e)if(Pe(e[i])||Pe(t[i])){const o=ao.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function cd(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}function m5({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,o,s,a){const l={latestValues:y5(i,o,s,a?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(i,u,l)),l}const jy=e=>(t,n)=>{const r=w.useContext(ha),i=w.useContext(pa),o=()=>m5(e,t,r,i,n);return n?o():cd(o)};function g5(e,t){const n=Q0(t);n&&co(e,n)}function qp(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const o=Fc(e,r[i]);if(o){const{transitionEnd:s,transition:a,...l}=o;n(l,s)}}}function y5(e,t,n,r,i){var o;const s={},a=[],l=r&&((o=e.style)===null||o===void 0?void 0:o.willChange)===void 0,u=i(e,{});for(const b in u)s[b]=Jo(u[b]);let{initial:c,animate:d}=e;const f=ma(e),g=Ey(e);t&&g&&!f&&e.inherit!==!1&&(c===void 0&&(c=t.initial),d===void 0&&(d=t.animate));let y=n?n.initial===!1:!1;y=y||c===!1;const x=y?d:c;return x&&typeof x!="boolean"&&!Hi(x)&&qp(e,x,(b,h)=>{for(const p in b){let m=b[p];if(Array.isArray(m)){const S=y?m.length-1:0;m=m[S]}m!==null&&(s[p]=m)}for(const p in h)s[p]=h[p]}),l&&(d&&c!==!1&&!Hi(d)&&qp(e,d,b=>{for(const h in b)g5(a,h)}),a.length&&(s.willChange=a.join(","))),s}const dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),My=()=>({...dd(),attrs:{}}),Dy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,v5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},x5=ao.length;function w5(e,t,n){let r="",i=!0;for(let o=0;o<x5;o++){const s=ao[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Dy(a,Xc[s]);if(!l){i=!1;const c=v5[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function fd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Sn.has(l)){s=!0;continue}else if(b0(l)){i[l]=u;continue}else{const c=Dy(u,Xc[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=w5(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}function Jp(e,t,n){return typeof e=="string"?e:I.transform(t+n*e)}function S5(e,t,n){const r=Jp(t,e.x,e.width),i=Jp(n,e.y,e.height);return`${r} ${i}`}const b5={offset:"stroke-dashoffset",array:"stroke-dasharray"},k5={offset:"strokeDashoffset",array:"strokeDasharray"};function C5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?b5:k5;e[o.offset]=I.transform(-r);const s=I.transform(t),a=I.transform(n);e[o.array]=`${s} ${a}`}function pd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(fd(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:g,dimensions:y}=e;f.transform&&(y&&(g.transform=f.transform),delete f.transform),y&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=S5(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&C5(f,s,a,l,!1)}const hd=e=>typeof e=="string"&&e.toLowerCase()==="svg",P5={useVisualState:jy({scrapeMotionValuesFromProps:$y,createRenderState:My,onMount:(e,t,{renderState:n,latestValues:r})=>{B.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),B.render(()=>{pd(n,r,hd(t.tagName),e.transformTemplate),Ly(t,n)})}})},E5={useVisualState:jy({applyWillChange:!0,scrapeMotionValuesFromProps:ud,createRenderState:dd})};function Iy(e,t,n){for(const r in t)!Pe(t[r])&&!Ay(r,n)&&(e[r]=t[r])}function T5({transformTemplate:e},t){return w.useMemo(()=>{const n=dd();return fd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function R5(e,t){const n=e.style||{},r={};return Iy(r,n,e),Object.assign(r,T5(e,t)),r}function L5(e,t){const n={},r=R5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const A5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _s(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||A5.has(e)}let _y=e=>!_s(e);function $5(e){e&&(_y=t=>t.startsWith("on")?!_s(t):e(t))}try{$5(require("@emotion/is-prop-valid").default)}catch{}function j5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(_y(i)||n===!0&&_s(i)||!t&&!_s(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function M5(e,t,n,r){const i=w.useMemo(()=>{const o=My();return pd(o,t,hd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Iy(o,e.style,e),i.style={...o,...i.style}}return i}function D5(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(ld(n)?M5:L5)(r,o,s,n),u=j5(r,typeof n=="string",e),c=n!==w.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=w.useMemo(()=>Pe(d)?d.get():d,[d]);return w.createElement(n,{...c,children:f})}}function I5(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...ld(r)?P5:E5,preloadedFeatures:e,useRender:D5(i),createVisualElement:t,Component:r};return c5(s)}}const Ru={current:null},zy={current:!1};function _5(){if(zy.current=!0,!!ad)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ru.current=e.matches;e.addListener(t),t()}else Ru.current=!1}function z5(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Pe(i))e.addValue(r,i);else if(Pe(o))e.addValue(r,Xi(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Xi(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const eh=new WeakMap,N5=[...P0,ke,yn],F5=e=>N5.find(C0(e)),th=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class O5{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Pt.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,B.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ma(n),this.isVariantNode=Ey(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const g=d[f];l[f]!==void 0&&Pe(g)&&g.set(l[f],!1)}}mount(t){this.current=t,eh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),zy.current||_5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ru.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){eh.delete(this.current),this.projection&&this.projection.unmount(),mn(this.notifyUpdate),mn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Sn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&B.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Dr){const n=Dr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<th.length;r++){const i=th[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=z5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(w0(i)||x0(i))?i=parseFloat(i):!F5(i)&&yn.test(n)&&(i=M0(t,n)),this.setBaseTarget(t,Pe(i)?i.get():i)),Pe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Fc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Pe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new rd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ny extends O5{constructor(){super(...arguments),this.KeyframeResolver=D0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function V5(e){return window.getComputedStyle(e)}class B5 extends Ny{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=Ty}readValueFromInstance(t,n){if(Sn.has(n)){const r=Qc(n);return r&&r.default||0}else{const r=V5(t),i=(b0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return cy(t,n)}build(t,n,r){fd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return ud(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class U5 extends Ny{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sn.has(n)){const r=Qc(n);return r&&r.default||0}return n=Ry.has(n)?n:da(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return $y(t,n,r)}build(t,n,r){pd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Ly(t,n,r,i)}mount(t){this.isSVGTag=hd(t.tagName),super.mount(t)}}const W5=(e,t)=>ld(e)?new U5(t):new B5(t,{allowProjection:e!==w.Fragment}),H5=I5({...jb,...e5,...Uk,...t5},W5),$=C2(H5);class G5 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K5({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=w.useContext(sd);return w.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),k.jsx(G5,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const Y5=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=cd(X5),l=w.useId(),u=w.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?[Math.random()]:[n]);return w.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),w.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=k.jsx(K5,{isPresent:n,children:e})),k.jsx(pa.Provider,{value:u,children:e})};function X5(){return new Map}const Do=e=>e.key||"";function nh(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Qi=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=w.useMemo(()=>nh(e),[e]),l=a.map(Do),u=w.useRef(!0),c=w.useRef(a),d=cd(()=>new Map),[f,g]=w.useState(a),[y,x]=w.useState(a);ky(()=>{u.current=!1,c.current=a;for(let p=0;p<y.length;p++){const m=Do(y[p]);l.includes(m)?d.delete(m):d.get(m)!==!0&&d.set(m,!1)}},[y,l.length,l.join("-")]);const b=[];if(a!==f){let p=[...a];for(let m=0;m<y.length;m++){const S=y[m],C=Do(S);l.includes(C)||(p.splice(m,0,S),b.push(S))}s==="wait"&&b.length&&(p=b),x(nh(p)),g(a);return}const{forceRender:h}=w.useContext(id);return k.jsx(k.Fragment,{children:y.map(p=>{const m=Do(p),S=a===y||l.includes(m),C=()=>{if(d.has(m))d.set(m,!0);else return;let P=!0;d.forEach(E=>{E||(P=!1)}),P&&(h==null||h(),x(c.current),i&&i())};return k.jsx(Y5,{isPresent:S,initial:!u.current||r?void 0:!1,custom:S?void 0:n,presenceAffectsLayout:o,mode:s,onExitComplete:S?void 0:C,children:p},m)})})},Q5="/assets/profile-Bpo9LYZX.webp",Z5="/assets/about5-jU8IswgW.jpg",q5="/assets/sameer_mujahid_resume-nYyjtWu8.pdf",J5="/assets/aws_certificate-BFmi7Y25.pdf",eC="/assets/nptel_certificate-DhuTjOAG.pdf",tC="/assets/coursera_certificate-BLBMNiqR.pdf",nC="/assets/arthashastra_certificate-CZ3k_n3F.pdf",rC="/assets/project1-CGTHgju6.webp",iC="/assets/project2-CoVTjUgl.webp",oC="/assets/project3-wp4cwpHv.webp",sC="/assets/project4-B5QFOZPJ.webp",aC="/assets/project7-G9S23we9.webp",lC="/assets/project8-CLDGkE57.jpg",uC="/assets/project10-C2E9bwQg.jpg",cC="/assets/project11-BMqMBtgk.jpg",dC="/assets/project12-UNyMeAN-.webp",fC="/assets/project13-Q-45zM1w.webp",pC="/assets/project14-DjcbO2Jy.jpg",hC="/assets/project15-0aq8a8Pu.jpg",H={name:"Shaik Sameer Mujahid",shortName:"Sameer",assets:{profileImage:Q5,aboutImage:Z5,resumePDF:q5},navigation:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"more",label:"Work"},{id:"connect",label:"Connect"}],socials:[{key:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/shaik-sameer-mujahid/"},{key:"github",label:"GitHub",href:"https://github.com/sameermujahid"},{key:"instagram",label:"Instagram",href:"https://www.instagram.com/sameer.mujahid/"},{key:"twitter",label:"Twitter",href:"https://x.com/sameer__mujahid"}],hero:{availability:"Available for opportunities",firstLine:"Hi, I’m",highlightedName:"SK Sameer",lastName:"Mujahid",roles:[{title:"AI / ML Engineer",color:"#2997ff"},{title:"Data Scientist",color:"#34c759"},{title:"Data Analyst",color:"#ff9f0a"}],descriptionBeforeBreak:"Building intelligent systems and",descriptionAfterBreak:"data-driven solutions that matter.",resumeModalTitle:"SK Sameer Mujahid — Resume",resumeDownloadName:"sameer_mujahid_resume.pdf",scrollTarget:"about",scrollLabel:"Scroll to About section"},about:{label:"About",titleLineOne:"Who I am,",titleLineTwo:"and what I do.",paragraphs:["Hello! I’m a passionate engineer specializing in AI, machine learning, and full-stack development. My work spans LLMs, RAG systems, data pipelines, and web applications turning complex problems into elegant, scalable solutions.","I thrive at the intersection of data and software, always exploring new frameworks, contributing to projects, and growing both technically and creatively."],stats:[{value:"1+",label:"Years experience"},{value:"15+",label:"Projects built"},{value:"3+",label:"Certifications"}],imageAlt:"About SK Sameer Mujahid"},strengths:["Leadership","Critical thinking","Prioritization","Adaptability","Versatile"],languages:["Hindi","English","Telugu"],education:{btech:{id:1,degree:"B.Tech – Computer Science & Engineering",branch:"Computer Science and Engineering",institution:"Adikavi Nannaya University, Rajanagaram",university:"Adikavi Nannaya University, Rajanagaram",period:"2020 – 2024",year:"2020–2024",gpa:8.16,gpaText:"8.16",maxGpa:10,description:"Focused on ML, data science, and full-stack development with various projects and internships.",color:"#2997ff"},intermediate:{id:2,degree:"Intermediate (MPC)",institution:"Tirumala Junior College, Katheru",college:"Tirumala Junior College, Katheru",period:"2018 – 2020",year:"2018–2020",gpa:9.5,percentage:"9.5",maxGpa:10,description:"Mathematics, Physics, and Chemistry with a strong academic foundation.",color:"#34c759"},ssc:{id:3,degree:"SSC",institution:"Keshava Reddy High School",school:"Keshava Reddy High School",period:"2017 – 2018",year:"2017–2018",gpa:10,gpaText:"10.00",maxGpa:10,description:"Completed secondary school with outstanding performance.",color:"#ff9f0a"}},skills:{categories:[{key:"programming",label:"Programming",color:"#2997ff",gridArea:"1 / 1 / 2 / 3",skills:[{name:"Python",icon:"python"},{name:"SQL",icon:"database"},{name:"JavaScript",icon:"javascript"}]},{key:"ml",label:"Machine Learning",color:"#34c759",gridArea:"1 / 3 / 3 / 4",skills:[{name:"scikit-learn",icon:"scikitLearn"},{name:"Supervised"},{name:"Unsupervised"},{name:"Regression"},{name:"Classification"},{name:"Clustering"},{name:"Model Eval"}]},{key:"genai",label:"Generative AI",color:"#ff9f0a",gridArea:"1 / 4 / 3 / 5",skills:[{name:"LangChain"},{name:"RAG"},{name:"LoRA Fine-tuning"},{name:"Prompt Eng."},{name:"HuggingFace",icon:"robot"},{name:"Response Eval"}]},{key:"dl",label:"Deep Learning",color:"#bf5af2",gridArea:"2 / 1 / 3 / 2",skills:[{name:"PyTorch",icon:"pytorch"},{name:"TensorFlow",icon:"tensorflow"},{name:"Neural Nets"}]},{key:"data",label:"Data & Analysis",color:"#64d2ff",gridArea:"2 / 2 / 3 / 3",skills:[{name:"Pandas",icon:"pandas"},{name:"NumPy",icon:"numpy"},{name:"Preprocessing"},{name:"Cleaning"}]},{key:"nlp",label:"NLP",color:"#ff6b6b",gridArea:"3 / 1 / 4 / 2",skills:[{name:"Transformers"},{name:"Embeddings"},{name:"NLP Pipelines"}]},{key:"cv",label:"Computer Vision",color:"#5e5ce6",gridArea:"3 / 2 / 4 / 3",skills:[{name:"YOLOv8"},{name:"Img Processing"},{name:"Feature Ext."}]},{key:"backend",label:"Backend & APIs",color:"#30d158",gridArea:"3 / 3 / 4 / 5",skills:[{name:"FastAPI",icon:"fastapi"},{name:"REST APIs"},{name:"Django",icon:"django"},{name:"Flask",icon:"flask"}]},{key:"cloud",label:"Cloud",color:"#0071e3",gridArea:"4 / 1 / 5 / 2",skills:[{name:"AWS",icon:"aws"},{name:"GCP",icon:"googleCloud"},{name:"Azure",icon:"azure"}]},{key:"databases",label:"Databases",color:"#ac8e68",gridArea:"4 / 2 / 5 / 3",skills:[{name:"PostgreSQL",icon:"postgresql"},{name:"MySQL"},{name:"FAISS"}]},{key:"visualization",label:"Visualization",color:"#ff375f",gridArea:"4 / 3 / 5 / 4",skills:[{name:"Power BI",icon:"powerbi"},{name:"Matplotlib"},{name:"Seaborn"},{name:"Plotly",icon:"plotly"}]},{key:"deployment",label:"Deployment",color:"#ffd60a",gridArea:"4 / 4 / 5 / 5",skills:[{name:"Docker",icon:"docker"},{name:"API Deploy"},{name:"Model Serving"}]},{key:"tools",label:"Tools",color:"#98989d",gridArea:"5 / 1 / 6 / 3",skills:[{name:"Git",icon:"git"},{name:"GitHub"},{name:"Jira",icon:"jira"},{name:"Teams",icon:"teams"}]},{key:"frontend",label:"Frontend",color:"#32ade6",gridArea:"5 / 3 / 6 / 5",skills:[{name:"React",icon:"react"},{name:"HTML"},{name:"CSS"},{name:"WordPress"},{name:"Tailwind"}]}],programming_languages:["C","Python","JavaScript"],platforms:["Google Cloud","Amazon Web Services (AWS)","Microsoft Azure"],database:["SQL","PostgreSQL","MySQL","FAISS"],web_fundamentals:["HTML","CSS","React JS","WordPress","Tailwind"],frameworks:["Django Rest Framework","FastAPI","Flask"],ml_tools:["scikit-learn","PyTorch","TensorFlow","LangChain","HuggingFace"],additional_skills:["Docker","Git","Jira","MS Teams","Power BI"],views:[{id:"mosaic",label:"⊞  Mosaic"},{id:"list",label:"≡  List"},{id:"stream",label:"∞  Stream"}],titleSuffix:"domains of expertise."},experience:[{company:"NXGN Technologies India Pvt Ltd",location:"Hyderabad",role:"AI Engineer",duration:"May 2026 – Present",type:"Full-time",color:"#af52de",responsibilities:["Develop and deploy AI-driven solutions using LLMs and modern machine learning techniques.","Build and integrate AI systems to automate workflows and improve operational efficiency.","Design and implement scalable AI applications for real-world business use cases."],skills:["Python","LLMs","Generative AI","Machine Learning","AI"],companyUrl:"https://www.nxgntech.com/",certificateUrl:""},{company:"CINCYR Tech Private Limited",location:"Hyderabad",role:"Data Scientist",duration:"Dec 2024 – Present",type:"Internship",color:"#2997ff",responsibilities:["Led development of LLMs and RAG models, enhancing AI-driven decision-making.","Created custom datasets and fine-tuned LLMs for domain-specific real estate AI.","Deployed ML models, increasing operational efficiency and optimizing workflows.","Integrated AI solutions, reducing manual effort by 20%."],skills:["Python","LLMs","RAG","Machine Learning","Deployment"],companyUrl:"https://cincyrtech.com/",certificateUrl:""},{company:"SocialTek",location:"Hyderabad",role:"Data Science Intern",duration:"Jul 2024 – Dec 2024",type:"Internship",color:"#34c759",responsibilities:["Analyzed 500,000+ records, ensuring 99% data accuracy and 20% faster retrieval.","Conducted EDA, improving data-driven decision-making by 18%.","Created synthetic datasets, augmenting training data by 35%.","Built ATS tool, boosting recruitment efficiency by 25%."],skills:["Python","EDA","Pandas","Data Analysis","ATS"],companyUrl:"https://socialtek.in/",certificateUrl:""},{company:"Arthashastra Intelligence",location:"Hyderabad",role:"Machine Learning Intern",duration:"Dec 2023 – Jun 2024",type:"Internship",color:"#ff9f0a",responsibilities:["Optimized data pipelines, reducing processing time by 20%.","Built scalable web apps using React and Django.","Developed ML models improving customer segmentation by 12%.","Integrated AI solutions, reducing costs by 10%."],skills:["Python","React","Django","Machine Learning"],companyUrl:"https://arthashastra.ai/",certificateUrl:nC}],courses_certificates:[{course:"AWS – Academy Foundation",duration:"OCT – DEC 2022",description:"Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.",pdf:J5},{course:"NPTEL – Internet of Things",duration:"JUL – OCT 2022",description:"Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.",pdf:eC},{course:"Coursera – Data Science",duration:"FEB – APR 2022",description:"Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning techniques.",pdf:tC}],projects:[{name:"AI Visual Search System",date:"2024",description:"Built an AI-powered visual search system that retrieves visually similar images using deep learning embeddings. Fine-tuned a Hugging Face vision transformer on a custom dataset to improve feature extraction. Implemented cosine similarity and vector indexing for fast retrieval, achieving 92% accuracy. Optimized inference performance for real-time search applications.",github:"https://github.com/sameermujahid/ikea-lens",view:"https://huggingface.co/spaces/sameer-mujahid/ikea-lens",image:dC},{name:"AI Property Recommendation System",date:"2024",description:"Developed an intelligent property recommendation system using machine learning and user preference modeling. Implemented content-based filtering with feature engineering on property attributes such as budget, location, and amenities. Integrated a feedback loop to continuously refine recommendations, improving user engagement by 30% and personalization accuracy.",github:"https://github.com/sameermujahid/property-recommendation",view:"https://huggingface.co/spaces/sameer-mujahid/recommendation-system",image:fC},{name:"Attendance System",date:"2024",description:"Engineered a real-time attendance system using YOLOv8-based facial recognition and OpenCV for live video processing. Automated attendance logging with timestamps, reducing manual errors by 95%. Integrated email notifications via SMTP and Excel export functionality for reporting. Optimized detection pipeline for faster processing and real-time performance.",github:"https://github.com/sameermujahid/attendance_application",view:"https://huggingface.co/spaces/sameer-mujahid/attendance-system",image:cC},{name:"AI Interviewer",date:"2024",description:"Developed an AI-powered interview simulation platform using LLMs that generates role-specific technical and behavioral questions from user-uploaded resumes. Implemented NLP-based resume parsing and prompt engineering to create personalized interview flows. Provided intelligent feedback and evaluation to enhance candidate preparation and confidence.",github:"https://github.com/sameermujahid/ai-interviewer",view:"https://huggingface.co/spaces/sameer-mujahid/ai-interviewer",image:hC},{name:"Student Performance Prediction",date:"2023",description:"Built a machine learning model to predict student academic performance using supervised learning algorithms. Performed extensive data preprocessing, feature engineering, and model evaluation to improve accuracy. Generated interpretable insights to identify key factors influencing performance, supporting data-driven decision-making in education.",github:"https://github.com/sameermujahid/student-grade-predictor",view:"https://studentperformance-rwgv44z58msw4wqhtk8iou.streamlit.app/",image:iC},{name:"Personal Portfolio",date:"2024",description:"Designed and developed a modern personal portfolio using React with an Apple-inspired UI/UX. Implemented smooth animations, dark/light theme switching, and responsive design principles. Focused on performance optimization and user experience to effectively showcase projects, skills, and professional profile.",github:"https://github.com/sameermujahid/sameermujahid.github.io",view:"https://sameermujahid.github.io",image:lC},{name:"Chatbot using RAG",date:"2024",description:"Built a scalable conversational AI chatbot using Retrieval-Augmented Generation (RAG) with LangChain and FAISS. Integrated vector search for context-aware responses and optimized prompt engineering for improved accuracy. Designed to handle over 10,000 daily queries with low latency, achieving 90% user satisfaction.",github:"https://github.com/sameermujahid/customer-chatbot",view:"",image:pC},{name:"Heart Disease Prediction",date:"2023",description:"Developed a predictive healthcare model using SVM and XGBoost to assess heart disease risk from clinical data. Applied feature selection, hyperparameter tuning, and model evaluation techniques to improve prediction accuracy. Enabled early risk detection through data-driven insights.",github:"https://github.com/sameermujahid/Heart_Disease_Prediction",view:"",image:sC},{name:"License Plate Detection",date:"2024",description:"Built a computer vision system using YOLOv8 for real-time license plate detection and recognition. Created a custom dataset of 5,000+ images and integrated Tesseract OCR for text extraction. Achieved 98% detection accuracy while reducing processing time by 40% through pipeline optimization.",github:"https://github.com/sameermujahid/license-plate",view:"",image:oC},{name:"Job Analysis System",date:"2024",description:"Performed large-scale analysis of job market data scraped from Naukri using Python and data analytics techniques. Identified trends in skills, salaries, and job demand. Built data visualizations and insights to help job seekers align with industry requirements and improve employability.",github:"https://github.com/sameermujahid/job-analysis",view:"",image:uC},{name:"Naukri Web Scraper",date:"2024",description:"Developed a scalable web scraping system using BeautifulSoup and Python to extract over 10,000 job listings. Collected structured data including job roles, companies, and salary information for downstream analysis. Ensured efficient data handling and preprocessing for large datasets.",github:"https://github.com/sameermujahid/Naukri-web-scraper",view:"",image:aC},{name:"Water Quality Prediction",date:"2023",description:"Built a machine learning model using SVM and XGBoost to classify water quality based on environmental parameters. Applied data preprocessing, feature scaling, and model tuning to improve prediction performance. Contributed to environmental monitoring through data-driven insights.",github:"",view:"",image:rC}],contact:{phone:"8317506633",email:"sameermujahid7777@gmail.com",linkedin:"https://www.linkedin.com/in/shaik-sameer-mujahid/",github:"https://github.com/sameermujahid"},connect:{label:"Connect",titleLineOne:"Let’s connect and explore",titleLineTwo:"opportunities.",subtitle:"Whether you’re looking to collaborate, discuss opportunities, or just connect, I’d love to hear from you.",opportunityTag:"Open to opportunities",infoTitle:"Let’s connect",infoBody:"I’m always open to new opportunities, collaborations, and conversations. Feel free to reach out for projects, job opportunities, or just to say hello!",form:{nameLabel:"Your Name",namePlaceholder:"John Doe",emailLabel:"Email Address",emailPlaceholder:"john@example.com",messageLabel:"Message",messagePlaceholder:"Tell me about your project, opportunity, or idea...",submitLabel:"Send Message",loadingLabel:"Sending message...",successTitle:"Message sent successfully!",successText:"Thank you for reaching out! I’ll get back to you as soon as possible.",resetLabel:"Send another message"}},footer:{tagline:"Building AI × Full Stack Experiences"},sections:{about:{label:"About",titleLineOne:"Who I am,",titleLineTwo:"and what I do."},skills:{label:"Skills"},work:{defaultTab:"Projects",tabs:[{id:"Projects",label:"Projects"},{id:"Experience",label:"Experience"},{id:"Education",label:"Education"},{id:"Certificates",label:"Certificates"}],projects:{label:"Projects",title:"Things I’ve built."},experience:{label:"Experience",title:"Where I’ve worked."},education:{label:"Education",title:"Academic journey."},certificates:{label:"Certificates",title:"Certifications & courses."}}}};var Fy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rh=ce.createContext&&ce.createContext(Fy),mC=["attr","size","title"];function gC(e,t){if(e==null)return{};var n=yC(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zs.apply(this,arguments)}function ih(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ih(Object(n),!0).forEach(function(r){vC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ih(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vC(e,t,n){return t=xC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xC(e){var t=wC(e,"string");return typeof t=="symbol"?t:t+""}function wC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oy(e){return e&&e.map((t,n)=>ce.createElement(t.tag,Ns({key:n},t.attr),Oy(t.child)))}function fe(e){return t=>ce.createElement(SC,zs({attr:Ns({},e.attr)},t),Oy(e.child))}function SC(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=gC(e,mC),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ce.createElement("svg",zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ns(Ns({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ce.createElement("title",null,o),e.children)};return rh!==void 0?ce.createElement(rh.Consumer,null,n=>t(n)):t(Fy)}function bC(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"},child:[]}]})(e)}function kC(e){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"},child:[]},{tag:"path",attr:{d:"M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z"},child:[]}]})(e)}function fT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function pT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function hT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function mT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function gT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function yT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function CC(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(e)}function vT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function PC(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function EC(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function TC(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function xT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function wT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(e)}function ST(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)}function oh(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function bT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function kT(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function Ir(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",Ti="-moz-",O="-webkit-",Vy="comm",ga="rule",md="decl",RC="@import",By="@keyframes",LC="@layer",Uy=Math.abs,gd=String.fromCharCode,Lu=Object.assign;function AC(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function Wy(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function es(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function _r(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function Hy(e){return e.length}function hi(e,t){return t.push(e),e}function $C(e,t){return e.map(t).join("")}function sh(e,t){return e.filter(function(n){return!Lt(n,t)})}var ya=1,zr=1,Gy=0,rt=0,ae=0,Kr="";function va(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ya,column:zr,length:s,return:"",siblings:a}}function Qt(e,t){return Lu(va("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=Qt(e.root,{children:[e]});hi(e,e.siblings)}function jC(){return ae}function MC(){return ae=rt>0?he(Kr,--rt):0,zr--,ae===10&&(zr=1,ya--),ae}function pt(){return ae=rt<Gy?he(Kr,rt++):0,zr++,ae===10&&(zr=1,ya++),ae}function Nn(){return he(Kr,rt)}function ts(){return rt}function xa(e,t){return _r(Kr,e,t)}function Au(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function DC(e){return ya=zr=1,Gy=wt(Kr=e),rt=0,[]}function IC(e){return Kr="",e}function fl(e){return Wy(xa(rt-1,$u(e===91?e+2:e===40?e+1:e)))}function _C(e){for(;(ae=Nn())&&ae<33;)pt();return Au(e)>2||Au(ae)>3?"":" "}function zC(e,t){for(;--t&&pt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return xa(e,ts()+(t<6&&Nn()==32&&pt()==32))}function $u(e){for(;pt();)switch(ae){case e:return rt;case 34:case 39:e!==34&&e!==39&&$u(ae);break;case 40:e===41&&$u(e);break;case 92:pt();break}return rt}function NC(e,t){for(;pt()&&e+ae!==57;)if(e+ae===84&&Nn()===47)break;return"/*"+xa(t,rt-1)+"*"+gd(e===47?e:pt())}function FC(e){for(;!Au(Nn());)pt();return xa(e,rt)}function OC(e){return IC(ns("",null,null,null,[""],e=DC(e),0,[0],e))}function ns(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,g=0,y=0,x=1,b=1,h=1,p=0,m="",S=i,C=o,P=r,E=m;b;)switch(y=p,p=pt()){case 40:if(y!=108&&he(E,d-1)==58){es(E+=z(fl(p),"&","&\f"),"&\f",Uy(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=fl(p);break;case 9:case 10:case 13:case 32:E+=_C(y);break;case 92:E+=zC(ts()-1,7);continue;case 47:switch(Nn()){case 42:case 47:hi(VC(NC(pt(),ts()),t,n,l),l);break;default:E+="/"}break;case 123*x:a[u++]=wt(E)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:b=0;case 59+c:h==-1&&(E=z(E,/\f/g,"")),g>0&&wt(E)-d&&hi(g>32?lh(E+";",r,n,d-1,l):lh(z(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(hi(P=ah(E,t,n,u,c,i,a,m,S=[],C=[],d,o),o),p===123)if(c===0)ns(E,t,P,P,S,o,d,a,C);else switch(f===99&&he(E,3)===110?100:f){case 100:case 108:case 109:case 115:ns(e,P,P,r&&hi(ah(e,P,P,0,0,i,a,m,i,S=[],d,C),C),i,C,d,a,r?S:C);break;default:ns(E,P,P,P,[""],C,0,a,C)}}u=c=g=0,x=h=1,m=E="",d=s;break;case 58:d=1+wt(E),g=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&MC()==125)continue}switch(E+=gd(p),p*x){case 38:h=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(wt(E)-1)*h,h=1;break;case 64:Nn()===45&&(E+=fl(pt())),f=Nn(),c=d=wt(m=E+=FC(ts())),p++;break;case 45:y===45&&wt(E)==2&&(x=0)}}return o}function ah(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,g=i===0?o:[""],y=Hy(g),x=0,b=0,h=0;x<r;++x)for(var p=0,m=_r(e,f+1,f=Uy(b=s[x])),S=e;p<y;++p)(S=Wy(b>0?g[p]+" "+m:z(m,/&\f/g,g[p])))&&(l[h++]=S);return va(e,t,n,i===0?ga:a,l,u,c,d)}function VC(e,t,n,r){return va(e,t,n,Vy,gd(jC()),_r(e,2,-2),0,r)}function lh(e,t,n,r,i){return va(e,t,n,md,_r(e,0,r),_r(e,r+1,-1),r,i)}function Ky(e,t,n){switch(AC(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return Ti+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Ti+e+Y+e+e;case 5936:switch(he(e,t+11)){case 114:return O+e+Y+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+Y+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+Y+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+Y+e+e;case 6165:return O+e+Y+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return O+e+Y+"flex-item-"+z(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Y+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+Y+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+Y+z(e,"shrink","negative")+e;case 5292:return O+e+Y+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+Y+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Y+"grid-column-align"+_r(e,t)+e;break;case 2592:case 3360:return Y+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~es(e+(n=n[t].value),"span",0)?e:Y+z(e,"-start","")+e+Y+"grid-row-span:"+(~es(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Y+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:Y+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Ti+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~es(e,"stretch",0)?Ky(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Y+i+":"+o+u+(s?Y+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(he(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(he(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+Y+"$2box$3")+e;case 100:return z(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Fs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function BC(e,t,n,r){switch(e.type){case LC:if(e.children.length)break;case RC:case md:return e.return=e.return||e.value;case Vy:return"";case By:return e.return=e.value+"{"+Fs(e.children,r)+"}";case ga:if(!wt(e.value=e.props.join(",")))return""}return wt(n=Fs(e.children,r))?e.return=e.value+"{"+n+"}":""}function UC(e){var t=Hy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function WC(e){return function(t){t.root||(t=t.return)&&e(t)}}function HC(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case md:e.return=Ky(e.value,e.length,n);return;case By:return Fs([Qt(e,{value:z(e.value,"@","@"+O)})],r);case ga:if(e.length)return $C(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(Qt(e,{props:[z(i,/:(read-\w+)/,":"+Ti+"$1")]})),Zn(Qt(e,{props:[i]})),Lu(e,{props:sh(n,r)});break;case"::placeholder":Zn(Qt(e,{props:[z(i,/:(plac\w+)/,":"+O+"input-$1")]})),Zn(Qt(e,{props:[z(i,/:(plac\w+)/,":"+Ti+"$1")]})),Zn(Qt(e,{props:[z(i,/:(plac\w+)/,Y+"input-$1")]})),Zn(Qt(e,{props:[i]})),Lu(e,{props:sh(n,r)});break}return""})}}var GC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},Nr=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",Yy="active",Xy="data-styled-version",wa="6.1.13",yd=`/*!sc*/
`,Os=typeof window<"u"&&"HTMLElement"in window,KC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),YC={},Sa=Object.freeze([]),Fr=Object.freeze({});function Qy(e,t,n){return n===void 0&&(n=Fr),e.theme!==n.theme&&e.theme||t||n.theme}var Zy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),XC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,QC=/(^-|-$)/g;function uh(e){return e.replace(XC,"-").replace(QC,"")}var ZC=/(a)(d)/gi,Io=52,ch=function(e){return String.fromCharCode(e+(e>25?39:97))};function ju(e){var t,n="";for(t=Math.abs(e);t>Io;t=t/Io|0)n=ch(t%Io)+n;return(ch(t%Io)+n).replace(ZC,"$1-$2")}var pl,qy=5381,gr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jy=function(e){return gr(qy,e)};function vd(e){return ju(Jy(e)>>>0)}function qC(e){return e.displayName||e.name||"Component"}function hl(e){return typeof e=="string"&&!0}var ev=typeof Symbol=="function"&&Symbol.for,tv=ev?Symbol.for("react.memo"):60115,JC=ev?Symbol.for("react.forward_ref"):60112,eP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nP=((pl={})[JC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pl[tv]=nv,pl);function dh(e){return("type"in(t=e)&&t.type.$$typeof)===tv?nv:"$$typeof"in e?nP[e.$$typeof]:eP;var t}var rP=Object.defineProperty,iP=Object.getOwnPropertyNames,fh=Object.getOwnPropertySymbols,oP=Object.getOwnPropertyDescriptor,sP=Object.getPrototypeOf,ph=Object.prototype;function rv(e,t,n){if(typeof t!="string"){if(ph){var r=sP(t);r&&r!==ph&&rv(e,r,n)}var i=iP(t);fh&&(i=i.concat(fh(t)));for(var o=dh(e),s=dh(t),a=0;a<i.length;++a){var l=i[a];if(!(l in tP||n&&n[l]||s&&l in s||o&&l in o)){var u=oP(t,l);try{rP(e,l,u)}catch{}}}}return e}function Wn(e){return typeof e=="function"}function xd(e){return typeof e=="object"&&"styledComponentId"in e}function Dn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Mu(e,t,n){if(n===void 0&&(n=!1),!n&&!Zi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Mu(e[r],t[r]);else if(Zi(t))for(var r in t)e[r]=Mu(e[r],t[r]);return e}function wd(e,t){Object.defineProperty(e,"toString",{value:t})}function Hn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var aP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Hn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(yd);return n},e}(),rs=new Map,Bs=new Map,is=1,_o=function(e){if(rs.has(e))return rs.get(e);for(;Bs.has(is);)is++;var t=is++;return rs.set(e,t),Bs.set(t,e),t},lP=function(e,t){is=t+1,rs.set(e,t),Bs.set(t,e)},uP="style[".concat(Nr,"][").concat(Xy,'="').concat(wa,'"]'),cP=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dP=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},fP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(yd),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(cP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(lP(c,u),dP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},hh=function(e){for(var t=document.querySelectorAll(uP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Nr)!==Yy&&(fP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Nr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Nr,Yy),r.setAttribute(Xy,wa);var s=pP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},hP=function(){function e(t){this.element=iv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Hn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),mP=function(){function e(t){this.element=iv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),mh=Os,yP={isServer:!Os,useCSSOMInjection:!KC},Us=function(){function e(t,n,r){t===void 0&&(t=Fr),n===void 0&&(n={});var i=this;this.options=me(me({},yP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Os&&mh&&(mh=!1,hh(this)),wd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(h){return Bs.get(h)}(d);if(f===void 0)return"continue";var g=o.names.get(f),y=s.getGroup(d);if(g===void 0||!g.size||y.length===0)return"continue";var x="".concat(Nr,".g").concat(d,'[id="').concat(f,'"]'),b="";g!==void 0&&g.forEach(function(h){h.length>0&&(b+="".concat(h,","))}),l+="".concat(y).concat(x,'{content:"').concat(b,'"}').concat(yd)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return _o(t)},e.prototype.rehydrate=function(){!this.server&&Os&&hh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gP(i):r?new hP(i):new mP(i)}(this.options),new aP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vP=/&/g,xP=/^\s*\/\/.*$/gm;function ov(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ov(n.children,t)),n})}function wP(e){var t,n,r,i=Fr,o=i.options,s=o===void 0?Fr:o,a=i.plugins,l=a===void 0?Sa:a,u=function(f,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===ga&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(vP,n).replace(r,u))}),s.prefix&&c.push(HC),c.push(BC);var d=function(f,g,y,x){g===void 0&&(g=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(xP,""),h=OC(y||g?"".concat(y," ").concat(g," { ").concat(b," }"):b);s.namespace&&(h=ov(h,s.namespace));var p=[];return Fs(h,UC(c.concat(WC(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,g){return g.name||Hn(15),gr(f,g.name)},qy).toString():"",d}var SP=new Us,Du=wP(),sv=ce.createContext({shouldForwardProp:void 0,styleSheet:SP,stylis:Du});sv.Consumer;ce.createContext(void 0);function Iu(){return w.useContext(sv)}var av=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Du);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wd(this,function(){throw Hn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Du),this.name+t.hash},e}(),bP=function(e){return e>="A"&&e<="Z"};function gh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;bP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lv=function(e){return e==null||e===!1||e===""},uv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!lv(o)&&(Array.isArray(o)&&o.isCss||Wn(o)?r.push("".concat(gh(i),":"),o,";"):Zi(o)?r.push.apply(r,Ir(Ir(["".concat(i," {")],uv(o),!1),["}"],!1)):r.push("".concat(gh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in GC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fn(e,t,n,r){if(lv(e))return[];if(xd(e))return[".".concat(e.styledComponentId)];if(Wn(e)){if(!Wn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return fn(i,t,n,r)}var o;return e instanceof av?n?(e.inject(n,r),[e.getName(r)]):[e]:Zi(e)?uv(e):Array.isArray(e)?Array.prototype.concat.apply(Sa,e.map(function(s){return fn(s,t,n,r)})):[e.toString()]}function cv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wn(n)&&!xd(n))return!1}return!0}var kP=Jy(wa),CP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cv(t),this.componentId=n,this.baseHash=gr(kP,n),this.baseStyle=r,Us.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Dn(i,this.staticRulesId);else{var o=Vs(fn(this.rules,t,n,r)),s=ju(gr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Dn(i,s),this.staticRulesId=s}else{for(var l=gr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Vs(fn(d,t,n,r));l=gr(l,f+c),u+=f}}if(u){var g=ju(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Dn(i,g)}}return i},e}(),qi=ce.createContext(void 0);qi.Consumer;function PP(e){var t=ce.useContext(qi),n=w.useMemo(function(){return function(r,i){if(!r)throw Hn(14);if(Wn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Hn(8);return i?me(me({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ce.createElement(qi.Provider,{value:n},e.children):null}var ml={};function EP(e,t,n){var r=xd(e),i=e,o=!hl(e),s=t.attrs,a=s===void 0?Sa:s,l=t.componentId,u=l===void 0?function(S,C){var P=typeof S!="string"?"sc":uh(S);ml[P]=(ml[P]||0)+1;var E="".concat(P,"-").concat(vd(wa+P+ml[P]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(S){return hl(S)?"styled.".concat(S):"Styled(".concat(qC(S),")")}(e):c,f=t.displayName&&t.componentId?"".concat(uh(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(S,C){return x(S,C)&&b(S,C)}}else y=x}var h=new CP(n,f,r?i.componentStyle:void 0);function p(S,C){return function(P,E,T){var D=P.attrs,j=P.componentStyle,Q=P.defaultProps,je=P.foldedComponentIds,Ye=P.styledComponentId,yt=P.target,Ne=ce.useContext(qi),Xn=Iu(),q=P.shouldForwardProp||Xn.shouldForwardProp,L=Qy(E,Ne,Q)||Fr,M=function(Gt,Fe,Tt){for(var Xr,Cn=me(me({},Fe),{className:void 0,theme:Tt}),ba=0;ba<Gt.length;ba+=1){var fo=Wn(Xr=Gt[ba])?Xr(Cn):Xr;for(var Kt in fo)Cn[Kt]=Kt==="className"?Dn(Cn[Kt],fo[Kt]):Kt==="style"?me(me({},Cn[Kt]),fo[Kt]):fo[Kt]}return Fe.className&&(Cn.className=Dn(Cn.className,Fe.className)),Cn}(D,E,L),_=M.as||yt,U={};for(var W in M)M[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&M.theme===L||(W==="forwardedAs"?U.as=M.forwardedAs:q&&!q(W,_)||(U[W]=M[W]));var kn=function(Gt,Fe){var Tt=Iu(),Xr=Gt.generateAndInjectStyles(Fe,Tt.styleSheet,Tt.stylis);return Xr}(j,M),ot=Dn(je,Ye);return kn&&(ot+=" "+kn),M.className&&(ot+=" "+M.className),U[hl(_)&&!Zy.has(_)?"class":"className"]=ot,U.ref=T,w.createElement(_,U)}(m,S,C)}p.displayName=d;var m=ce.forwardRef(p);return m.attrs=g,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=y,m.foldedComponentIds=r?Dn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var P=[],E=1;E<arguments.length;E++)P[E-1]=arguments[E];for(var T=0,D=P;T<D.length;T++)Mu(C,D[T],!0);return C}({},i.defaultProps,S):S}}),wd(m,function(){return".".concat(m.styledComponentId)}),o&&rv(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function yh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vh=function(e){return Object.assign(e,{isCss:!0})};function Yn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Wn(e)||Zi(e))return vh(fn(yh(Sa,Ir([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?fn(r):vh(fn(yh(r,t)))}function _u(e,t,n){if(n===void 0&&(n=Fr),!t)throw Hn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Yn.apply(void 0,Ir([i],o,!1)))};return r.attrs=function(i){return _u(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return _u(e,t,me(me({},n),i))},r}var dv=function(e){return _u(EP,e)},v=dv;Zy.forEach(function(e){v[e]=dv(e)});var TP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=cv(t),Us.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vs(fn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Us.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function RP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yn.apply(void 0,Ir([e],t,!1)),i="sc-global-".concat(vd(JSON.stringify(r))),o=new TP(r,i),s=function(l){var u=Iu(),c=ce.useContext(qi),d=ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),ce.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,YC,c,f);else{var g=me(me({},u),{theme:Qy(u,d,s.defaultProps)});o.renderStyles(l,g,c,f)}}return ce.memo(s)}function gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vs(Yn.apply(void 0,Ir([e],t,!1))),i=vd(r);return new av(i,r)}const LP=18,AP=26,$P=188,jP=300,MP=gt`
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.12); }
`,DP=gt`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;gt`
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
`;gt`
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-10px); }
`;gt`
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(8px); }
`;const fv=Yn`
  background: ${({theme:e})=>e.glass};
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid ${({theme:e})=>e.glassBorder};
  box-shadow: ${({theme:e})=>e.glassShadow};

  @media (max-width: 768px) {
    backdrop-filter: blur(10px) saturate(145%);
    -webkit-backdrop-filter: blur(10px) saturate(145%);
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: ${({theme:e})=>e.bgSecondary};
  }
`,IP=Yn`
  background: ${({theme:e})=>e.glassStrong};
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border: 1px solid ${({theme:e})=>e.glassBorder};
  box-shadow: ${({theme:e})=>e.shadowLg};

  @media (max-width: 768px) {
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
  }
`,CT=v($.span)`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.accent};
  background: ${({theme:e})=>e.accentSubtle};
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
`,PT=v($.h2)`
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.1;
  margin-bottom: 16px;
`,ET=v($.p)`
  font-size: 1.125rem;
  color: ${({theme:e})=>e.textSecondary};
  line-height: 1.7;
  max-width: 560px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Yr=v($.div)`
  ${fv}
  border-radius: 20px;
  padding: 32px;

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`,_P=v($.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({theme:e})=>e.accent};
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 980px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentHover};
    box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
  }

  &:active { transform: translateY(1px); }
`,zP=v($.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 27px;
  background: transparent;
  color: ${({theme:e})=>e.accent};
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 980px;
  border: 1.5px solid ${({theme:e})=>e.accent};
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover { background: ${({theme:e})=>e.accentSubtle}; }
`,NP=v.section`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 120px 24px 80px;
  background: ${({theme:e})=>e.bg};

  /* Keep the grid, but remove the full-page 60px backdrop blur.
     The blur was compositing the entire hero on every frame. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image:
      linear-gradient(
        ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.055)":"rgba(0,0,0,0.07)"} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.055)":"rgba(0,0,0,0.07)"} 1px,
        transparent 1px
      );
    background-size: 80px 80px;
    mask-image: linear-gradient(to bottom, transparent, black 15%, black 82%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 82%, transparent);
  }

  @media (max-width: 768px) {
    padding: 110px 20px 70px;
  }
`,FP=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 36px;
    align-items: center;
    text-align: center;
  }
`,OP=v.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`,VP=v($.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textSecondary};

  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #34c759;
    animation: ${MP} 2s ease infinite;
  }
`,BP=v($.h1)`
  font-size: clamp(2.6rem, 6.5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.03;
  color: ${({theme:e})=>e.textPrimary};

  em {
    font-style: normal;
    color: ${({theme:e})=>e.accent};
  }

  @media (max-width: 480px) {
    font-size: clamp(2.35rem, 12vw, 3.25rem);
  }
`,UP=v($.div)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  color: ${({theme:e})=>e.textSecondary};
  line-height: 1.6;
`,WP=v($.div)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,HP=v($.div)`
  position: relative;
  flex-shrink: 0;
  z-index: 2;
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Clean accent glow directly behind the portrait.
     No grey rectangle, no animated morph, no huge blur surface. */
  &::before {
    content: '';
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${({theme:e})=>`${e.accent}22`} 0%,
      ${({theme:e})=>`${e.accent}0d`} 42%,
      transparent 72%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;

    &::before {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;

    &::before {
      width: 215px;
      height: 215px;
    }
  }
`,GP=v($.img)`
  position: relative;
  z-index: 2;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({theme:e})=>e.glassBorder};
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
  }
`;v.div`
  display: none;
`;v.div`
  display: none;
`;const KP=v($.div)`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,YP=v($.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  ${fv}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,XP=v.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    top: -20%;
    right: -10%;
    width: min(700px, 120vw);
    height: 700px;
    background: ${({theme:e})=>e.mode==="dark"?"radial-gradient(circle, rgba(41,151,255,0.045) 0%, transparent 68%)":"radial-gradient(circle, rgba(0,113,227,0.04) 0%, transparent 68%)"};
  }

  &::after {
    bottom: -10%;
    left: -5%;
    width: min(600px, 120vw);
    height: 600px;
    background: ${({theme:e})=>e.mode==="dark"?"radial-gradient(circle, rgba(120,80,255,0.04) 0%, transparent 68%)":"radial-gradient(circle, rgba(100,50,200,0.025) 0%, transparent 68%)"};
  }
`,QP=v($.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  will-change: opacity;

  /* Keep the original frosted feel, but much cheaper than the old 10px
     backdrop blur on the entire viewport. */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,ZP=v($.div)`
  ${IP}
  border-radius: 20px;
  width: 100%;
  max-width: 860px;
  overflow: hidden;
  max-height: 92vh;
  max-height: 92svh;
  display: flex;
  flex-direction: column;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    max-width: min(94vw, 720px);
    max-height: 88svh;
    border-radius: 18px;
  }
`,qP=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.border};
  flex-shrink: 0;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`,JP=v.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textPrimary};
`,eE=v.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
`,gl=v.button`
  padding: 7px 16px;
  border-radius: 980px;
  border: 1px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textPrimary};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accent};
    color: #fff;
    border-color: transparent;
  }
`,tE=v.iframe`
  width: 100%;
  flex: 1;
  min-height: 500px;
  border: none;

  @media (max-width: 768px) {
    min-height: 380px;
  }
`,TT=v.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${DP} 0.75s linear infinite;
  display: inline-block;
  flex-shrink: 0;
`,RT=v.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`,LT=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-top: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 36px;
  }
`,AT=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$T=v.div`
  perspective: 1200px;

  img {
    width: 100%;
    max-height: 320px;
    border-radius: 24px;
    object-fit: cover;
    will-change: transform;
    transform-style: preserve-3d;

    transition:
      transform 0.15s ease-out,
      filter 0.4s ease,
      box-shadow 0.4s ease;

    box-shadow:
      0 12px 48px rgba(0, 0, 0, 0.3);

    filter: grayscale(80%);

    @media (max-width: 768px) {
      max-height: 260px;
      border-radius: 18px;
    }
  }
`,jT=v(Yr)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px;

  @media (max-width: 480px) {
    padding: 22px;
    gap: 18px;
  }
`,MT=v.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 480px) {
    gap: 18px;
  }
`,DT=v.h3`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.textPrimary};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,IT=v.p`
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,_T=v.div`
  height: 1px;
  background: ${({theme:e})=>e.border};
  width: 100%;
`,zT=v.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`,NT=v.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,FT=v.span`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.accent};
`,OT=v.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  font-weight: 500;
`,VT=v.div`
  display: flex;
  gap: 8px;
`,BT=v.div`
  padding: 56px 0 60px;
`,UT=v.div`
  margin-bottom: 40px;
`,WT=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,HT=v(Yr)`
  flex: 1 1 calc(33.333% - 20px);
  position: relative;
  overflow: hidden;
  min-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 992px) {
    flex: none;
    min-width: auto;
  }
`,GT=v.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${({theme:e})=>e.accentSubtle};
  color: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`,KT=v.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.4;
`,YT=v.div`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  font-weight: 500;
  margin-top: 2px;
`,XT=v.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
`,QT=v.div`
  height: 1px;
  background: ${({theme:e})=>e.border};
`,ZT=v.div`
  display: flex;
  gap: 8px;
`,qT=v.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 980px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  border: 1px solid ${({theme:e})=>e.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }

  @media (hover: none) {
    &:active {
      background: ${({theme:e})=>e.accentSubtle};
      color: ${({theme:e})=>e.accent};
      border-color: ${({theme:e})=>e.accent};
    }
  }
`;gt`
  0%   { background-position: -100% center; }
  100% { background-position: 200% center; }
`;gt`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;gt`
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
`;const JT=v.section`
  padding: 100px 24px 120px;
  max-width: 1350px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 70px 20px 90px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 16px 80px;
  }
`,e4=v.div`
  margin-bottom: 64px;
`,t4=v.div`
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
`,n4=v(Yr)`
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: sticky;
  // top: 100px;
  
  @media (max-width: 968px) {
    position: static;
    padding: 28px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
    gap: 24px;
  }
`,r4=v.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
`,i4=v.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,o4=v.a`
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
`,s4=v.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({theme:e})=>e.border} 20%,
    ${({theme:e})=>e.border} 80%,
    transparent
  );
`,a4=v.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,l4=v.a`
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
`,u4=v.div`
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
    
  }
`,c4=v($.div)`
  position: relative;
`,d4=v(Yr)`
  position: relative;
  overflow: hidden;
  will-change: transform;
`,f4=v($.div)`
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    ${({theme:e})=>`${e.accent}15`},
    transparent 60%,
    ${({theme:e})=>`${e.accent}15`}
  );
  
  pointer-events: none;
  z-index: 0;
  opacity: 0;
`,p4=v($.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({theme:e})=>`${e.accent}15`};
  pointer-events: none;
  z-index: 0;
`,h4=v($.div)`
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
  }
  
  @media (max-width: 480px) {
  }
`,m4=v($.div)`
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
`,g4=v.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,y4=v($.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,v4=v.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textSecondary};
  letter-spacing: 0.01em;
`,pv=Yn`
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
`,x4=v.input`${pv}`,w4=v.textarea`
  ${pv}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`,S4=v($.button)`
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
`;v($.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
`;const b4=v($.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  pointer-events: none;
`,k4=v($.span)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
`,C4=v($.div)`
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
`,P4=v($.div)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,E4=v($.h3)`
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
`,T4=v($.p)`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.textSecondary};
  max-width: 320px;
  margin: 0;
`,R4=v($.div)`
  width: 48px;
  height: 2px;
  border-radius: 2px;
  background: ${({theme:e})=>e.accent};
  opacity: 0.3;
`,L4=v($.button)`
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
`,A4=v.div`
  padding: 56px 0 60px;
`,$4=v.div`
  margin-bottom: 40px;
`,j4=v.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: ${({theme:e})=>e.border};
    border-radius: 1px;

    @media (max-width: 480px) {
      left: 15px;
    }
  }
`,nE=v.div`
  display: flex;
  gap: 18px;
  padding-bottom: 20px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`,M4=v.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  position: relative;
  margin-top: 8px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`,D4=v.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({$color:e})=>e}15;
  border: 2px solid ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({$color:e})=>e};
  transition: background 0.25s ease, transform 0.25s ease;

  ${nE}:hover & {
    background: ${({$color:e})=>e}28;
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`,I4=v(Yr)`
  flex: 1;
  position: relative;
  overflow: hidden;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`,_4=v.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
`,z4=v.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({$color:e})=>e};
`,N4=v.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
`,F4=v.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.textSecondary};
`,O4=v.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,V4=v.div`
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: ${({theme:e})=>e.bgTertiary};
  overflow: hidden;
`,B4=v($.div)`
  height: 100%;
  border-radius: 3px;
  background: ${({$color:e})=>e};
`,U4=v.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textSecondary};
  white-space: nowrap;
`,W4=v.div`
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 56px 0 60px;
  }
`,H4=v.div`
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`,G4=v.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,K4=v(Yr)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  min-width: 0;
  height: 100%;
  box-sizing: border-box;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-left: 3px solid ${({$color:e})=>e};

  @media (max-width: 1024px) {
    padding: 28px;
  }

  @media (max-width: 768px) {
    padding: 28px 30px;

    transition:
      transform 0.28s ease,
      box-shadow 0.28s ease;

    &:hover {
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`,Y4=v.div`
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
`,X4=v.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }
`,Q4=v.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,Z4=v.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
`,q4=v.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.textPrimary};

  margin: 0;

  /*
   * Allows long company names to wrap naturally.
   */
  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,J4=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,e3=v.div`
  font-size: 1rem;
  font-weight: 500;

  color: ${({theme:e,$color:t})=>t||e.accent};

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`,t3=v.span`
  display: inline-block;

  padding: 4px 10px;

  border-radius: 980px;

  font-size: 0.75rem;
  font-weight: 600;

  background: ${({$color:e})=>e}18;

  color: ${({$color:e})=>e};

  border: 1px solid ${({$color:e})=>e}30;

  @media (max-width: 768px) {
    padding: 3px 10px;
    font-size: 0.72rem;
  }
`,n3=v.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 14px;
  }
`,r3=v.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 0.8125rem;

  color: ${({theme:e})=>e.textTertiary};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,i3=v.div`
  height: 1px;
  background: ${({theme:e})=>e.border};
  width: 100%;
`,o3=v.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 9px;
  }
`,s3=v.li`
  display: flex;
  gap: 10px;

  font-size: 0.9rem;
  line-height: 1.6;

  color: ${({theme:e})=>e.textSecondary};

  &::before {
    content: '';

    display: block;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({$color:e})=>e};

    margin-top: 9px;

    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.65;

    &::before {
      margin-top: 8px;
    }
  }
`,a3=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 7px;
  }
`,l3=v.span`
  padding: 5px 12px;

  border-radius: 980px;

  font-size: 0.8rem;
  font-weight: 500;

  background: ${({theme:e})=>e.bgTertiary};

  color: ${({theme:e})=>e.textSecondary};

  border: 1px solid ${({theme:e})=>e.border};

  @media (max-width: 768px) {
    padding: 4px 11px;
    font-size: 0.78rem;
  }
`,u3=v.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,c3=v.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 16px;

  border-radius: 980px;

  font-size: 0.8125rem;
  font-weight: 500;

  text-decoration: none;

  cursor: pointer;

  background: ${({theme:e})=>e.bgTertiary};

  color: ${({theme:e})=>e.textSecondary};

  border: 1px solid ${({theme:e})=>e.border};

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};

    color: ${({theme:e})=>e.accent};

    border-color: ${({theme:e})=>e.accent};
  }

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 0.8rem;
  }
`,d3=v.footer`
  position: relative;
  padding: 60px 24px 40px;
  background: ${({theme:e})=>e.bgSecondary};
  overflow: hidden;

  /* Glass gradient glow */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${({theme:e})=>e.accentSubtle} 0%,
      transparent 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }
`,f3=v.div`
  width: 100%;
  height: 1px;
  background: ${({theme:e})=>e.border};
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 2px;
    background: ${({theme:e})=>e.accent};
    top: -0.5px;
    left: 0;
    animation: slide 6s linear infinite;
  }

  @keyframes slide {
    0% { left: 0; }
    50% { left: calc(100% - 120px); }
    100% { left: 0; }
  }
`,p3=v.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,h3=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,m3=v.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.textPrimary};
`,g3=v.div`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  opacity: 0.8;
`,y3=v.div`
  display: flex;
  gap: 24px;
  // flex-wrap: wrap;
`,v3=v.button`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.textSecondary};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1.5px;
    background: ${({theme:e})=>e.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({theme:e})=>e.accent};
  }

  &:hover::after {
    width: 100%;
  }
`,x3=v.div`
  display: flex;
  gap: 10px;
`,w3=v.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.textTertiary};
  border: 1px solid ${({theme:e})=>e.border};
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.accentSubtle};
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;v.div`
  margin-top: 40px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textTertiary};
  opacity: 0.7;
`;const rE=v.div`
  position: absolute;

  /*
   * Slightly larger than the portrait so the light can breathe
   * around the lower-left edge.
   */
  width: 500px;
  height: 500px;

  /*
   * Put the light toward the lower-left of the image.
   */
  left: -30px;
  bottom: -30px;

  z-index: 0;
  pointer-events: none;

  /*
   * Soft white light.
   *
   * The important part is that it remains transparent around
   * the outer edges instead of becoming a grey circular/blob shape.
   */
  background:
    radial-gradient(
      ellipse 58% 58% at 28% 68%,
      rgba(255, 255, 255, 0.30) 0%,
      rgba(255, 255, 255, 0.20) 18%,
      rgba(255, 255, 255, 0.10) 34%,
      rgba(255, 255, 255, 0.045) 50%,
      rgba(255, 255, 255, 0.00) 74%
    );

  /*
   * Blur makes the light blend into the page rather than
   * looking like a visible shape.
   */
  filter: blur(26px);

  opacity: 0.95;

  transform: translateZ(0);

  /*
   * Keeps the glow cheap to render.
   */
  will-change: transform;

  @media (max-width: 768px) {
    width: 310px;
    height: 280px;

    left: -70px;
    bottom: -58px;

    filter: blur(24px);

    background:
      radial-gradient(
        ellipse 58% 58% at 30% 68%,
        rgba(255, 255, 255, 0.24) 0%,
        rgba(255, 255, 255, 0.15) 22%,
        rgba(255, 255, 255, 0.07) 40%,
        rgba(255, 255, 255, 0) 74%
      );
  }

  @media (max-width: 480px) {
    width: 270px;
    height: 240px;

    left: -52px;
    bottom: -48px;

    filter: blur(22px);
  }

  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
  }
`,iE=v.div`
  position: absolute;

  width: 330px;
  height: 330px;

  right: -65px;
  top: 15px;

  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle,
      rgba(41, 151, 255, 0.055) 0%,
      rgba(41, 151, 255, 0.025) 35%,
      rgba(41, 151, 255, 0) 72%
    );

  filter: blur(34px);

  opacity: 0.8;

  transform: translateZ(0);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;

    right: -55px;
    top: 10px;

    filter: blur(28px);
  }
`,oE=v($.button)`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1.5px solid ${({theme:e})=>e.border};

  background: ${({theme:e})=>e.glass};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${({theme:e})=>e.textSecondary};

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.accent};
    color: ${({theme:e})=>e.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.accent};
    outline-offset: 3px;
  }
`,S3=v.div`
  padding: 56px 0 60px;
`,b3=v.div`
  margin-bottom: 40px;
`,k3=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,C3=v($.div)`
  border-radius: ${LP}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({theme:e})=>e.bgSecondary||"rgba(255,255,255,0.04)"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  position: relative;
  min-width: 0;
  will-change: transform;
  contain: layout paint;
`,P3=v.div`
  width: 100%;
  height: ${$P}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({theme:e})=>e.bgTertiary};
`,E3=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,T3=v.span`
  position: absolute;
  top: 10px;
  left: 10px;

  font-size: 0.68rem;
  font-weight: 700;

  padding: 3px 10px;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);

  border: 1px solid rgba(255, 255, 255, 0.1);

  letter-spacing: 0.04em;

  pointer-events: none;
`,R3=v.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,L3=v.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
  margin: 0;
`,A3=v.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,$3=v.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  margin-top: 4px;
  align-items: center;
`,j3=v.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.12)"};
  background: ${({theme:e})=>e.bgTertiary||"rgba(255,255,255,0.05)"};
  color: ${({theme:e})=>e.textSecondary};
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,M3=v.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid ${({theme:e})=>e.accent};
  background: ${({theme:e})=>e.accentSubtle};
  color: ${({theme:e})=>e.accent};
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.accent};
    color: #fff;
  }

  &:active { transform: scale(0.97); }
`,D3=v($.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(5px) saturate(110%);
  -webkit-backdrop-filter: blur(5px) saturate(110%);
  will-change: opacity;

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,I3=v($.div)`
  position: relative;
  z-index: 1;
  width: min(640px, calc(100vw - 48px));
  max-height: 88vh;
  max-height: 88svh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${AP}px;
  background: ${({theme:e})=>e.bgSecondary||"#111118"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.14)"};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.07) inset,
    0 32px 80px rgba(0,0,0,0.58),
    0 10px 28px rgba(0,0,0,0.34);
  scrollbar-width: none;
  will-change: transform, opacity;
  transform-origin: center center;
  contain: layout paint;

  &::-webkit-scrollbar { display: none; }

  @media (max-width: 600px) {
    width: min(92vw, 520px);
    max-height: 84svh;
    border-radius: 22px;
  }
`,_3=v.div`
  width: 100%;
  height: ${jP}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({theme:e})=>e.bgTertiary};

  @media (max-width: 600px) {
    height: 210px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(
      to top,
      ${({theme:e})=>e.bgSecondary||"#111118"},
      transparent
    );
    pointer-events: none;
  }
`,z3=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,N3=v.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.55);
  color: rgba(255,255,255,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease;

  &:hover {
    background: rgba(220, 50, 50, 0.75);
    border-color: rgba(220, 50, 50, 0.5);
  }
`,F3=v.div`
  padding: 4px 30px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    padding: 2px 20px 22px;
    gap: 13px;
  }
`,O3=v.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`,V3=v.p`
  font-size: 0.93rem;
  line-height: 1.82;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,B3=v.div`
  display: flex;
  gap: 10px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    padding-top: 16px;
  }
`,U3=v.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.12)"};
  background: ${({theme:e})=>e.bgTertiary||"rgba(255,255,255,0.05)"};
  color: ${({theme:e})=>e.textSecondary};
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    transform: translateY(-2px);
  }
`,sE=gt`
  0%,100% { opacity: .5; transform: scale(1); }
  50%      { opacity: 1;  transform: scale(1.3); }
`,aE=gt`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`,lE=gt`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`,W3=v.section`
  padding: 80px 24px 100px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 56px 16px 72px;
  }
`,H3=v.div`
  margin-bottom: 40px;
`,G3=v.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: ${({theme:e})=>e.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  border: 1px solid ${({theme:e})=>e.glassBorder};
  border-radius: 980px;
  padding: 4px;
  margin-top: 22px;
`,K3=v.button`
  position: relative;
  overflow: hidden;
  padding: 6px 18px;
  border-radius: 980px;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({$active:e,theme:t})=>e?t.bgSecondary:"transparent"};
  color: ${({$active:e,theme:t})=>e?t.textPrimary:t.textTertiary};
  box-shadow: ${({$active:e})=>e?"0 1px 4px rgba(0,0,0,0.1)":"none"};
  transition: all 0.2s ease;

  &:hover { color: ${({theme:e})=>e.textPrimary}; }
`,Y3=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 144px);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
    grid-auto-rows: auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,uE=v($.div)`
  grid-area: ${({$area:e})=>e};
  position: relative;
  border-radius: 16px;
  padding: 16px 18px;
  overflow: hidden;
  background: ${({theme:e})=>e.glass};
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  border: 1px solid ${({theme:e})=>e.glassBorder};
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2.5px;
    background: ${({$color:e})=>e};
    border-radius: 16px 16px 0 0;
    opacity: 0.6;
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({$color:e})=>e};
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    border-radius: 16px;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(0,0,0,0.12);
    &::before { opacity: 1; }
    &::after  { opacity: 0.04; }
  }

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  @media (max-width: 768px) {
    grid-area: auto !important;
  }
`,X3=v.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({$color:e})=>e};
  display: block;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
`,Q3=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  position: relative;
  z-index: 1;
`,Z3=v.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  border: 1px solid ${({theme:e})=>e.border};
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s;

  ${uE}:hover & {
    border-color: ${({$color:e})=>e}40;
    color: ${({theme:e})=>e.textPrimary};
  }

  svg {
    width: 11px;
    height: 11px;
    flex-shrink: 0;
    opacity: 0.75;
  }
`,q3=v.span`
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 44px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;
  color: ${({$color:e})=>e};
  opacity: 0.07;
  pointer-events: none;
  z-index: 0;
  user-select: none;
`,J3=v($.div)`
  display: flex;
  flex-direction: column;
`,e8=v($.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid ${({theme:e})=>e.border};

  &:last-child { border-bottom: none; }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,t8=v.div`
  width: 168px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  padding-top: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`,n8=v.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  flex-shrink: 0;
  animation: ${sE} 2.8s ease infinite;
  animation-delay: ${({$d:e})=>e}s;
`,r8=v.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textSecondary};
`,i8=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
`,o8=v($.span)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({theme:e})=>e.bgTertiary};
  border: 1px solid ${({theme:e})=>e.border};
  color: ${({theme:e})=>e.textSecondary};
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background: ${({$bg:e})=>e};
    border-color: ${({$color:e})=>e}50;
    color: ${({$color:e})=>e};
    transform: translateY(-1px);
  }

  svg { width: 12px; height: 12px; opacity: .8; flex-shrink: 0; }
`,s8=v.div`
  width: 44px;
  flex-shrink: 0;
  text-align: right;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textTertiary};
  font-weight: 600;
  padding-top: 5px;

  @media (max-width: 600px) { display: none; }
`,a8=v($.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`,l8=v.div`
  display: flex;
  gap: 10px;
  width: max-content;
  animation: ${({$rev:e})=>e?lE:aE} ${({$spd:e})=>e}s linear infinite;
  will-change: transform;

  &:hover { animation-play-state: paused; }
`,u8=v.div`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${({$color:e})=>e}12;
  border: 1px solid ${({$color:e})=>e}28;
  color: ${({$color:e})=>e};
  transition: background 0.2s ease;

  &:hover {
    background: ${({$color:e})=>e}22;
  }

  svg { width: 13px; height: 13px; opacity: .8; flex-shrink: 0; }
`,c8=v.span`
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  opacity: 0.4;
`,d8=v.section`
  padding: 0 0 120px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0 80px;
  }
`,f8=v.div`
  position: sticky;
  top: 80px;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px 24px;

  @media (max-width: 768px) {
    top: 64px;
    padding: 12px 16px;
  }
`,p8=v.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({theme:e})=>e.glass};
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  border: 1px solid ${({theme:e})=>e.glassBorder};
  border-radius: 980px;
  padding: 6px;
  box-shadow: ${({theme:e})=>e.shadowMd};
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,h8=v.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: none;
  background: transparent;
  border-radius: 980px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e,$active:t})=>t?e.textPrimary:e.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
  z-index: 1;

  &:hover {
    color: ${({theme:e})=>e.textSecondary};
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8125rem;
    gap: 4px;

    span.label {
      display: none;
    }
  }
`,m8=v($.div)`
  position: absolute;
  inset: 0;
  background: ${({theme:e})=>e.bgSecondary};
  border-radius: 980px;
  z-index: 0;
  box-shadow: ${({theme:e})=>e.shadowSm};
  border: 1px solid ${({theme:e})=>e.glassBorder};
`,g8=v.div`
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,y8=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: ${({theme:e})=>e.textTertiary};
  font-size: 0.875rem;
`,hv=Yn`
  background: ${({theme:e})=>e.TopBarglass};
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid ${({theme:e})=>e.glassBorder};
`,cE=v($.header)`
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  /* Dynamic width and height based on scroll state */
  width: ${({$scrolled:e})=>e?"min(560px, calc(100vw - 32px))":"min(820px, calc(100vw - 32px))"};
  height: ${({$scrolled:e})=>e?"56px":"64px"};
  transition:
    width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease,
    background 0.3s ease,
    border-radius 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    padding 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

${hv}

box-shadow:
  0 0 0 1px rgba(255, 255, 255, 0.35),
  0 0 12px rgba(255, 255, 255, 0.08);

border-radius: ${({$scrolled:e})=>e?"28px":"32px"};

  padding: ${({$scrolled:e})=>e?"8px 16px":"12px 20px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  &[data-scrolled="true"] {
    box-shadow: ${({theme:e})=>e.shadowLg};
    background: ${({theme:e})=>e.glassStrong};
  }

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    height: 60px;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 12px 20px;
  }
`,dE=v($.button)`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({theme:e})=>e.border};
  border-radius: 50%;

  background: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text};

  cursor: pointer;

  transition:
    color 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.accent}12;
  }

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: rotate(12deg) scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.accent};
    outline-offset: 3px;
  }
`,fE=v.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  flex-shrink: 0;
`,xh=v.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid ${({theme:e})=>e.glassBorder};
  flex-shrink: 0;
`,pE=v($.span)`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textPrimary};
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 860px) { display: none; }
`,hE=v.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) { display: none; }
`,mE=v.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border: none;
  background: transparent;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: ${({$active:e})=>e?"600":"500"};
  color: ${({$active:e,theme:t})=>e?t.textPrimary:t.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
  transition: color 0.2s ease;

  &:hover { color: ${({theme:e})=>e.textPrimary}; }

  @media (max-width: 960px) {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
`,gE=v($.span)`
  position: absolute;
  inset: 0;
  background: ${({theme:e})=>e.bgSecondary};
  border-radius: 999px;
  z-index: -1;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08), 0 0 0 0.5px ${({theme:e})=>e.border};
`,yE=v.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,mv=v($.button)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgSecondary};
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:e})=>e.bgTertiary};
    color: ${({theme:e})=>e.textPrimary};
  }
`,vE=v(mv)`
  display: none;
  @media (max-width: 768px) { display: flex; }
`,xE=v($.div)`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`,wE=v($.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 82vw);
  z-index: 1200;
  ${hv}
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-radius: 20px 0 0 20px;
  border-right: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,SE=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.border};
`,bE=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,kE=v.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({theme:e})=>e.textPrimary};
  letter-spacing: -0.01em;
`,CE=v($.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: ${({theme:e})=>e.bgSecondary};
    color: ${({theme:e})=>e.textPrimary};
  }
`,PE=v.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
  flex: 1;
`,EE=v($.button)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px;
  border: none;
  background: transparent;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: ${({$active:e})=>e?"600":"500"};
  color: ${({$active:e,theme:t})=>e?t.accent:t.textSecondary};
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease;
  overflow: hidden;

  &:hover { color: ${({theme:e})=>e.textPrimary}; }
`,TE=v($.span)`
  position: absolute;
  inset: 0;
  background: ${({theme:e})=>e.accentSubtle};
  border-radius: 14px;
  z-index: 0;
`,RE=v.span`
  position: relative;
  z-index: 1;
`,LE=v.span`
  position: relative;
  z-index: 1;
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({$active:e,theme:t})=>e?t.accent:t.textTertiary};
  opacity: ${({$active:e})=>e?1:.5};
  font-variant-numeric: tabular-nums;
`,AE=v.div`
  padding: 12px;
  border-top: 1px solid ${({theme:e})=>e.border};
`,$E=v($.button)`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({theme:e})=>e.border};
  border-radius: 14px;
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.bgSecondary};
    color: ${({theme:e})=>e.textPrimary};
  }
`,jE=v.span`
  flex: 1;
  text-align: left;
`,ME=v.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${({theme:e})=>e.accentSubtle};
  color: ${({theme:e})=>e.accent};
`;v.span`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  border-radius: inherit;

  z-index: 0;

  opacity: var(--spotlight-opacity, 0);

  background: radial-gradient(
    320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
    ${({$color:e,theme:t})=>e||t.accent}35,
    transparent 70%
  );

  transition: opacity 180ms ease;

  will-change: opacity;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;const DE=RP`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
      'Helvetica Neue', Arial, sans-serif;
    background: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.textTertiary};
    border-radius: 3px;
  }

  ::selection {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  :focus-visible {
    outline: 2px solid ${({theme:e})=>e.accent};
    outline-offset: 2px;
    border-radius: 4px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  section[id] {
    scroll-margin-top: 90px;
  }

  @media (max-width: 768px) {
    section[id] {
      scroll-margin-top: 68px;
    }
  }

  /* Only animate explicitly interactive/theme properties.
     Never globally transition transforms, filters, layout, etc. */
  [data-theme-transition] {
    transition:
      background-color 0.25s ease,
      border-color 0.25s ease,
      color 0.25s ease,
      box-shadow 0.25s ease;
  }

  [data-no-transition] {
    transition: none !important;
  }

  /*
   * Jestsee-inspired interaction layer:
   * every element marked data-spotlight gets a soft mouse-following
   * illumination from SpotlightEffects.jsx. The effect is intentionally
   * subtle at rest and becomes visible only while the pointer is over it.
   */
  [data-spotlight] {
    --spotlight-x: 50%;
    --spotlight-y: 50%;
    position: relative;
    isolation: isolate;
  }
  @media (hover: none), (pointer: coarse) {
    [data-spotlight] > span[aria-hidden='true'] {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-spotlight] > span[aria-hidden='true'] {
      transition: none !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`,v8=v.main`
  position: relative;

  width: 100%;
  height: 100dvh;

  min-height: 560px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(62, 137, 255, 0.045) 0%,
      rgba(62, 137, 255, 0.015) 22%,
      transparent 55%
    ),
    #080808;

  color: #f5f1e8;

  isolation: isolate;

  display: flex;

  align-items: center;
  justify-content: center;
`,x8=v.div`
  position: absolute;

  inset: -20%;

  z-index: -5;

  pointer-events: none;

  background:
    radial-gradient(
      ellipse at 50% 50%,
      rgba(5, 118, 247, 0.16),
      transparent 52%
    );

  filter: blur(40px);

  opacity: 0.9;

  transform: translateZ(0);

  animation: courageAtmosphere 12s ease-in-out infinite;

  @keyframes courageAtmosphere {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.72;
    }

    50% {
      transform: scale(1.04);
      opacity: 0.95;
    }
  }
`,w8=v.div`
  position: absolute;

  inset: 0;

  z-index: -2;

  pointer-events: none;

  span {
    position: absolute;

    width: 2px;
    height: 2px;

    border-radius: 50%;

    background: rgba(238, 234, 136, 0.55);

    box-shadow:
      0 0 6px rgba(255, 255, 255, 0.22);

    animation:
      courageStar 6s ease-in-out infinite;
  }


  span:nth-child(1) {
    top: 18%;
    left: 17%;

    animation-delay: -1s;
  }


  span:nth-child(2) {
    top: 27%;
    left: 79%;

    animation-delay: -3s;
  }


  span:nth-child(3) {
    top: 63%;
    left: 12%;

    animation-delay: -2s;
  }


  span:nth-child(4) {
    top: 73%;
    left: 86%;

    animation-delay: -4s;
  }


  span:nth-child(5) {
    top: 12%;
    left: 48%;

    animation-delay: -5s;
  }


  span:nth-child(6) {
    top: 84%;
    left: 39%;

    animation-delay: -2.5s;
  }


  span:nth-child(7) {
    top: 39%;
    left: 91%;

    animation-delay: -1.5s;
  }


  span:nth-child(8) {
    top: 49%;
    left: 7%;

    animation-delay: -4.5s;
  }


  @keyframes courageStar {
    0%,
    100% {
      opacity: 0.2;

      transform: scale(0.8);
    }

    50% {
      opacity: 0.75;

      transform: scale(1.15);
    }
  }
`,S8=v.div`
  position: absolute;

  left: 50%;
  top: 45%;

  width: min(42vw, 620px);
  height: min(42vw, 620px);

  transform: translate(-50%, -50%);

  z-index: -3;

  pointer-events: none;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(74, 157, 255, 0.055) 0%,
      rgba(74, 157, 255, 0.018) 28%,
      transparent 68%
    );

  filter: blur(18px);

  animation:
    courageGlow 9s ease-in-out infinite;


  @keyframes courageGlow {
    0%,
    100% {
      opacity: 0.55;

      transform:
        translate(-50%, -50%)
        scale(0.96);
    }

    50% {
      opacity: 0.85;

      transform:
        translate(-50%, -50%)
        scale(1.04);
    }
  }
`,b8=v.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 5;

  display: flex;

  align-items: center;
  justify-content: center;

  /*
   * Places the initial composition slightly above
   * the exact mathematical center.
   */
  padding-bottom: 6vh;

  box-sizing: border-box;

  text-align: center;

  pointer-events: none;

  /*
   * Do NOT hide the animated composition.
   */
  overflow: visible;
`,k8=v.div`
  position: relative;

  width: min(900px, 88vw);

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  /*
   * Keeps the entire composition smooth during
   * the upward morph.
   */
  will-change: transform;

  transform: translateZ(0);

  backface-visibility: hidden;

  pointer-events: none;
`,C8=v.div`
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  color: #72b7ff;

  font-size: 40px;

  line-height: 1;

  opacity: 0.92;

  text-shadow:
    0 0 12px rgba(74, 157, 255, 0.32);
`,P8=v.div`
  margin-bottom: 14px;

  color: rgba(245, 241, 232, 0.48);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 0.32em;

  line-height: 1;

  text-transform: uppercase;

  white-space: nowrap;
`,E8=v.h1`
  margin: 0;

  color: #f5f1e8;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  /*
   * Slightly larger than the previous version.
   */
  font-size: clamp(68px, 9vw, 124px);

  font-weight: 500;

  letter-spacing: -0.045em;

  line-height: 0.95;

  text-rendering: optimizeLegibility;

  white-space: nowrap;

  text-shadow:
    0 0 40px rgba(255, 255, 255, 0.025);

  transform: translateZ(0);

  will-change:
    transform,
    opacity,
    filter;
`,T8=v.div`
  width: 100%;

  /*
   * Reserve the complete quote area from the beginning.
   *
   * This is what prevents "Courage" from jumping when
   * the lines appear.
   */
  min-height: 112px;

  margin-top: 34px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: flex-start;

  overflow: visible;
`,R8=v.div`
  margin: 0;

  color: rgba(245, 241, 232, 0.76);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: clamp(16px, 1.55vw, 22px);

  font-weight: 400;

  letter-spacing: -0.01em;

  line-height: 1.65;

  white-space: nowrap;

  transform: translateZ(0);

  will-change:
    transform,
    opacity,
    filter;

  &:last-child {
    margin-top: 1px;
  }
`,L8=v.span`
  color: #72b7ff;

  text-shadow:
    0 0 18px rgba(74, 157, 255, 0.16);
`,A8=v.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 14px;

  margin-top: 34px;

  color: rgba(245, 241, 232, 0.35);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 0.32em;

  line-height: 1;

  white-space: nowrap;


  span:first-child,
  span:last-child {
    display: block;

    width: 28px;
    height: 1px;

    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(245, 241, 232, 0.22)
      );
  }


  span:last-child {
    background:
      linear-gradient(
        90deg,
        rgba(245, 241, 232, 0.22),
        transparent
      );
  }
`,$8=v($.button)`
  position: absolute;

  top: 30px;
  left: 34px;

  z-index: 20;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 11px;

  padding: 11px 17px;

  /*
   * Transparent border allows the gradient underneath
   * to become the visible border.
   */
  border: 1px solid transparent;

  border-radius: 999px;

  /*
   * Blue glass background + blue gradient border.
   */
  background:
    linear-gradient(
      rgba(15, 25, 42, 0.72),
      rgba(8, 14, 26, 0.72)
    ) padding-box,

    linear-gradient(
      135deg,
      rgba(113, 183, 255, 0.72),
      rgba(61, 126, 255, 0.28),
      rgba(113, 183, 255, 0.58)
    ) border-box;

  /*
   * Very subtle glass tint.
   */
  box-shadow:
    inset 0 0 18px rgba(67, 139, 255, 0.055),
    0 0 20px rgba(44, 110, 255, 0.045);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  color: rgba(235, 244, 255, 0.72);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: 12px;

  font-weight: 500;

  letter-spacing: 0.08em;

  line-height: 1;

  cursor: pointer;

  outline: none;

  transition:
    color 0.5s ease,
    box-shadow 0.5s ease,
    background 0.5s ease,
    transform 0.5s ease;


  &:hover {
    color: #eaf4ff;

    background:
      linear-gradient(
        rgba(19, 39, 67, 0.82),
        rgba(8, 20, 38, 0.82)
      ) padding-box,

      linear-gradient(
        135deg,
        rgba(130, 196, 255, 0.95),
        rgba(70, 137, 255, 0.5),
        rgba(130, 196, 255, 0.8)
      ) border-box;

    box-shadow:
      inset 0 0 20px rgba(67, 139, 255, 0.09),
      0 0 26px rgba(44, 110, 255, 0.1);

    transform: translateX(-3px);
  }


  &:active {
    transform: scale(0.97);
  }


  span:first-child {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;

    color: #72b7ff;

    font-size: 17px;

    line-height: 1;

    transform: translateY(-1px);

    text-shadow:
      0 0 10px rgba(74, 157, 255, 0.35);
  }


  span:last-child {
    font-size: 11px;

    text-transform: uppercase;
  }


  @media (max-width: 600px) {
    top: 20px;
    left: 18px;

    padding: 10px 14px;

    gap: 9px;

    span:last-child {
      font-size: 10px;
    }
  }
`,IE={linkedin:k.jsx(TC,{}),github:k.jsx(EC,{}),instagram:k.jsx(kC,{}),twitter:k.jsx(bC,{})},_E=H.socials.map(e=>({...e,icon:IE[e.key]})),zE={hidden:{},visible:{transition:{staggerChildren:.1,delayChildren:.15}}},si={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.65,ease:[.25,.46,.45,.94]}}},NE=()=>{const[e,t]=w.useState(0),[n,r]=w.useState(!1);w.useEffect(()=>{const o=setInterval(()=>{t(s=>(s+1)%H.hero.roles.length)},3e3);return()=>clearInterval(o)},[]),w.useEffect(()=>{if(!n){document.body.style.overflow="";return}const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=o}},[n]),w.useEffect(()=>{if(!n)return;const o=s=>{s.key==="Escape"&&r(!1)};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n]);const i=o=>{const s=document.getElementById(o);if(!s)return;const a=s.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:a,behavior:"smooth"})};return k.jsxs(k.Fragment,{children:[k.jsxs(NP,{id:"home",children:[k.jsxs(FP,{children:[k.jsxs(OP,{as:$.div,variants:zE,initial:"hidden",animate:"visible",children:[k.jsxs(VP,{variants:si,children:[k.jsx("span",{}),H.hero.availability]}),k.jsxs(BP,{variants:si,children:[H.hero.firstLine," ",k.jsx("em",{children:H.hero.highlightedName}),k.jsx("br",{}),H.hero.lastName]}),k.jsxs(UP,{as:$.div,variants:si,children:[k.jsx(Qi,{mode:"wait",children:k.jsx($.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.38,ease:"easeOut"},style:{display:"inline-block",color:H.hero.roles[e].color,fontWeight:600},children:H.hero.roles[e].title},e)})," ","— ",H.hero.descriptionBeforeBreak," ",k.jsx("br",{}),H.hero.descriptionAfterBreak]}),k.jsxs(WP,{variants:si,children:[k.jsxs(_P,{href:H.assets.resumePDF,download:H.hero.resumeDownloadName,whileHover:{scale:1.02},whileTap:{scale:.97},children:[k.jsx(CC,{size:15}),"Download Resume"]}),k.jsxs(zP,{as:$.button,onClick:()=>r(!0),whileHover:{scale:1.02},whileTap:{scale:.97},children:[k.jsx(PC,{size:15}),"View Resume"]})]}),k.jsx(KP,{variants:si,children:_E.map(({href:o,label:s,icon:a})=>k.jsx(YP,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":s,whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},children:a},s))})]}),k.jsxs(HP,{initial:{opacity:0,scale:.88},animate:{opacity:1,scale:1},transition:{duration:.9,delay:.25,ease:[.25,.46,.45,.94]},children:[k.jsx(rE,{}),k.jsx(iE,{}),k.jsx(GP,{src:H.assets.profileImage,alt:H.name,whileHover:{scale:1.035},transition:{duration:.4,ease:"easeOut"}})]})]}),k.jsx($.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)"},children:k.jsx($.div,{animate:{y:[0,7,0]},transition:{duration:1.6,repeat:1/0,ease:"easeInOut"},children:k.jsx(oE,{onClick:()=>i("about"),"aria-label":H.hero.scrollLabel,children:k.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:k.jsx("polyline",{points:"6 9 12 15 18 9"})})})})})]}),k.jsx(Qi,{children:n&&k.jsx(QP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.22},onClick:()=>r(!1),children:k.jsxs(ZP,{initial:{opacity:0,scale:.92,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92,y:24},transition:{duration:.32,ease:[.25,.46,.45,.94]},onClick:o=>o.stopPropagation(),children:[k.jsxs(qP,{children:[k.jsx(JP,{children:H.hero.resumeModalTitle}),k.jsxs(eE,{children:[k.jsx(gl,{as:"a",href:H.contact.linkedin,target:"_blank",rel:"noopener noreferrer",children:"Connect"}),k.jsx(gl,{as:"a",href:H.assets.resumePDF,download:H.hero.resumeDownloadName,children:"Download"}),k.jsx(gl,{onClick:()=>r(!1),children:"Close"})]})]}),k.jsx(tE,{title:H.hero.resumeModalTitle,src:H.assets.resumePDF})]})})})]})},FE={bg:"#f5f5f7",bgSecondary:"#ffffff",bgTertiary:"#e8e8ed",glass:"rgba(255, 255, 255, 0.72)",glassStrong:"rgba(255, 255, 255, 0.92)",glassBorder:"rgba(0, 0, 0, 0.06)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",glassHover:"rgba(255, 255, 255, 0.95)",textPrimary:"#1d1d1f",textSecondary:"#00000",textTertiary:"#aeaeb2",textAccent:"#0071e3",accent:"#0071e3",accentHover:"#0077ed",accentSubtle:"rgba(0, 113, 227, 0.08)",border:"rgba(0, 0, 0, 0.08)",borderStrong:"rgba(0, 0, 0, 0.16)",gradientHero:"linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 50%, #f0f0f5 100%)",gradientCard:"linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",gradientAccent:"linear-gradient(135deg, #0071e3 0%, #42a5f5 100%)",shadowSm:"0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",shadowMd:"0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",shadowLg:"0 16px 48px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.04)",shadowXl:"0 32px 64px rgba(0,0,0,0.16)",navBg:"rgba(255, 255, 255, 0.72)",navBorder:"rgba(0, 0, 0, 0.08)",mode:"light"},OE={bg:"#000000",bgSecondary:"#1c1c1e",bgTertiary:"#2c2c2e",glass:"rgba(28, 28, 30, 0.72)",glassStrong:"rgba(44, 44, 46, 0.92)",glassBorder:"rgba(255, 255, 255, 0.08)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2)",glassHover:"rgba(50, 50, 52, 0.92)",textPrimary:"#f5f5f7",textSecondary:"#98989d",textTertiary:"#636366",textAccent:"#2997ff",accent:"#2997ff",accentHover:"#45a8ff",accentSubtle:"rgba(41, 151, 255, 0.12)",border:"rgba(255, 255, 255, 0.08)",borderStrong:"rgba(255, 255, 255, 0.16)",gradientHero:"linear-gradient(135deg, #000000 0%, #1c1c1e 50%, #0a0a0f 100%)",gradientCard:"linear-gradient(135deg, rgba(44,44,46,0.9) 0%, rgba(28,28,30,0.6) 100%)",gradientAccent:"linear-gradient(135deg, #2997ff 0%, #62c4ff 100%)",shadowSm:"0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",shadowMd:"0 4px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)",shadowLg:"0 16px 48px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.2)",shadowXl:"0 32px 64px rgba(0,0,0,0.6)",navBg:"rgba(0, 0, 0, 0.72)",navBorder:"rgba(255, 255, 255, 0.08)",mode:"dark"},gv=w.createContext(),VE=()=>w.useContext(gv),BE=({children:e})=>{const[t,n]=w.useState(()=>{try{const o=localStorage.getItem("portfolio-theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!0}});w.useEffect(()=>{try{localStorage.setItem("portfolio-theme",t?"dark":"light")}catch{}},[t]);const r=()=>n(o=>!o),i=t?OE:FE;return k.jsx(gv.Provider,{value:{isDark:t,toggle:r},children:k.jsx(PP,{theme:i,children:e})})},qn=H.navigation,wh=768,Sh=()=>k.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("circle",{cx:"12",cy:"12",r:"5"}),k.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),k.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),k.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),k.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),k.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),k.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),k.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),k.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),bh=()=>k.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:k.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),UE=()=>k.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),k.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),k.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),WE=()=>k.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[k.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),k.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),HE=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState("home"),[i,o]=w.useState(!1),[s,a]=w.useState(()=>typeof window<"u"?window.innerWidth<=wh:!1),{isDark:l,toggle:u}=VE();w.useEffect(()=>{const f=window.matchMedia(`(max-width: ${wh}px)`),g=y=>{a(y.matches),y.matches||o(!1)};return a(f.matches),f.addEventListener?f.addEventListener("change",g):f.addListener(g),()=>{f.removeEventListener?f.removeEventListener("change",g):f.removeListener(g)}},[]),w.useEffect(()=>{let f=0,g=!1;const y=()=>{f=0;const b=window.scrollY>20;b!==g&&(g=b,t(b))},x=()=>{f||(f=requestAnimationFrame(y))};return window.addEventListener("scroll",x,{passive:!0}),y(),()=>{window.removeEventListener("scroll",x),f&&cancelAnimationFrame(f)}},[]),w.useEffect(()=>{const f=qn.map(({id:x})=>document.getElementById(x)).filter(Boolean);if(!f.length)return;const g=new Map,y=new IntersectionObserver(x=>{x.forEach(p=>{g.set(p.target.id,p.isIntersecting?p.intersectionRatio:0)});let b="home",h=0;for(const{id:p}of qn){const m=g.get(p)||0;m>h&&(h=m,b=p)}h>0&&r(b)},{root:null,rootMargin:"-18% 0px -58% 0px",threshold:[0,.15,.35,.55,.75,1]});return f.forEach(x=>y.observe(x)),()=>y.disconnect()},[]),w.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),w.useEffect(()=>{const f=g=>{g.key==="Escape"&&o(!1)};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[]);const c=w.useCallback(f=>{const g=document.getElementById(f);if(g){const y=g.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:y,behavior:"smooth"})}r(f),o(!1)},[]),d=w.useCallback(()=>{o(!1),window.location.href="/courage"},[]);return k.jsxs(k.Fragment,{children:[k.jsxs(cE,{$scrolled:e,"data-scrolled":e,initial:{y:-72,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.25,.46,.45,.94]},children:[k.jsxs(fE,{onClick:()=>c("home"),children:[k.jsx(xh,{src:H.assets.profileImage,alt:H.name}),k.jsx(pE,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:.4,duration:.5}})]}),k.jsx(hE,{children:qn.map(({id:f,label:g})=>k.jsxs(mE,{$active:n===f,onClick:()=>c(f),"data-spotlight":"true",children:[n===f&&k.jsx(gE,{layoutId:"nav-active-pill",transition:{type:"spring",stiffness:400,damping:35}}),k.jsx("span",{style:{position:"relative",zIndex:2},children:g})]},f))}),k.jsxs(yE,{children:[k.jsx(mv,{onClick:u,whileTap:{scale:.88,rotate:l?20:-20},title:l?"Light mode":"Dark mode",children:l?k.jsx(Sh,{}):k.jsx(bh,{})}),k.jsx(vE,{onClick:()=>o(!0),whileTap:{scale:.88},"aria-label":"Open menu",children:k.jsx(UE,{})}),!s&&k.jsx(dE,{onClick:d,"aria-label":"Courage",title:"Courage",whileHover:{scale:1.06,rotate:3},whileTap:{scale:.88,rotate:12},children:k.jsx(oh,{size:16})})]})]}),k.jsx(Qi,{children:i&&k.jsxs(k.Fragment,{children:[k.jsx(xE,{variants:GE,initial:"hidden",animate:"visible",exit:"exit",onClick:()=>o(!1)},"overlay"),k.jsxs(wE,{variants:KE,initial:"hidden",animate:"visible",exit:"exit",children:[k.jsxs(SE,{children:[k.jsxs(bE,{children:[k.jsx(xh,{src:H.assets.profileImage,alt:H.name}),k.jsx(kE,{children:H.shortName})]}),k.jsx(CE,{onClick:()=>o(!1),whileTap:{scale:.9},children:k.jsx(WE,{})})]}),k.jsxs(PE,{children:[qn.map(({id:f,label:g},y)=>{const x=n===f;return k.jsxs(EE,{$active:x,onClick:()=>c(f),custom:y,variants:YE,initial:"hidden",animate:"visible",whileTap:{scale:.97},children:[k.jsx(Qi,{children:x&&k.jsx(TE,{layoutId:"sidebar-active-bg",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:380,damping:35}},"active-bg")}),k.jsx(RE,{children:g}),k.jsx(LE,{$active:x,children:String(y+1).padStart(2,"0")})]},f)}),s&&k.jsxs($.button,{type:"button",onClick:d,initial:{opacity:0,x:18},animate:{opacity:1,x:0},transition:{delay:qn.length*.055+.12,duration:.42,ease:[.16,1,.3,1]},whileHover:{x:2},whileTap:{scale:.97},"aria-label":"Courage",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",padding:"15px 18px",marginTop:"8px",border:"1px solid rgba(113, 183, 255, 0.22)",borderRadius:"14px",background:"linear-gradient(135deg, rgba(34, 74, 125, 0.16), rgba(8, 18, 34, 0.28))",color:"rgba(235, 244, 255, 0.78)",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif",boxSizing:"border-box",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"},children:[k.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"12px",position:"relative",zIndex:2},children:[k.jsx(oh,{size:17,color:"#72b7ff"}),k.jsx("span",{style:{fontSize:"13px",fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase"},children:"Courage"})]}),k.jsx("span",{style:{position:"relative",zIndex:2,fontSize:"10px",letterSpacing:"0.12em",color:"rgba(235, 244, 255, 0.34)"},children:"✦"})]})]}),k.jsx(AE,{children:k.jsx($.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:qn.length*.055+.2,duration:.4,ease:[.16,1,.3,1]},children:k.jsxs($E,{onClick:u,whileTap:{scale:.98},children:[l?k.jsx(Sh,{}):k.jsx(bh,{}),k.jsx(jE,{children:l?"Switch to Light":"Switch to Dark"}),k.jsx(ME,{children:l?"Light":"Dark"})]})})})]},"panel")]})})]})},GE={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.28,ease:[.16,1,.3,1]}},exit:{opacity:0,transition:{duration:.24,ease:[.16,1,.3,1]}}},KE={hidden:{x:"100%"},visible:{x:0,transition:{type:"spring",stiffness:300,damping:32,mass:.85}},exit:{x:"100%",transition:{type:"spring",stiffness:340,damping:36,mass:.8}}},YE={hidden:{opacity:0,x:18},visible:e=>({opacity:1,x:0,transition:{duration:.38,delay:e*.055,ease:[.16,1,.3,1]}})},XE=v.span`
  position: absolute;
  inset: 0;

  z-index: 0;
  pointer-events: none;

  border-radius: inherit;

  opacity: var(--spotlight-opacity, 0);

  background:
    radial-gradient(
      300px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
      ${({$color:e,theme:t})=>`${e||t.accent}35`} 0%,
      ${({$color:e,theme:t})=>`${e||t.accent}20`} 20%,
      ${({$color:e,theme:t})=>`${e||t.accent}0c`} 42%,
      transparent 72%
    );

  box-shadow:
    inset 0 0 0 1px
      ${({$color:e,theme:t})=>`${e||t.accent}28`},
    0 0 30px
      ${({$color:e,theme:t})=>`${e||t.accent}12`};

  /*
   * Very smooth fade.
   */
  transition:
    opacity 450ms cubic-bezier(0.22, 1, 0.36, 1);

  will-change:
    opacity,
    background;

  /*
   * Makes sure the glow doesn't interfere with
   * the card content.
   */
  transform: translateZ(0);
`,j8=({color:e})=>k.jsx(XE,{"aria-hidden":"true",$color:e}),QE=()=>(w.useEffect(()=>{if(typeof window>"u")return;let e=0,t=[],n=-9999,r=-9999,i=-9999,o=-9999,s=!1;const a=1,l=300,u=1,c=()=>{t=Array.from(document.querySelectorAll("[data-spotlight]"))},d=(p,m,S)=>Math.min(Math.max(p,m),S),f=p=>1-Math.pow(1-p,3),g=()=>{if(i+=(n-i)*a,o+=(r-o)*a,!s){t.forEach(p=>{p.style.setProperty("--spotlight-opacity","0")}),e=requestAnimationFrame(g);return}t.forEach(p=>{const m=p.getBoundingClientRect();if(!m.width||!m.height)return;const S=d(i,m.left,m.right),C=d(o,m.top,m.bottom),P=i-S,E=o-C;let D=1-Math.sqrt(P*P+E*E)/l;D=d(D,0,1),D=f(D);const j=D*u,Q=i-m.left,je=o-m.top;p.style.setProperty("--spotlight-x",`${Q}px`),p.style.setProperty("--spotlight-y",`${je}px`),p.style.setProperty("--spotlight-opacity",j.toFixed(3))}),e=requestAnimationFrame(g)},y=p=>{n=p.clientX,r=p.clientY,s=!0},x=()=>{s=!1},b=()=>{s=!1},h=new MutationObserver(()=>{c()});return h.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("pointermove",y,{passive:!0}),window.addEventListener("pointerleave",x),window.addEventListener("blur",b),window.addEventListener("resize",c),c(),e=requestAnimationFrame(g),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerleave",x),window.removeEventListener("blur",b),window.removeEventListener("resize",c),h.disconnect(),e&&cancelAnimationFrame(e),t.forEach(p=>{p.style.removeProperty("--spotlight-x"),p.style.removeProperty("--spotlight-y"),p.style.removeProperty("--spotlight-opacity")})}},[]),null),ZE=w.lazy(()=>Ur(()=>import("./Courage-Dh4sQ3Cq.js"),[])),qE=w.lazy(()=>Ur(()=>import("./AboutMe--wTXI_wf.js"),__vite__mapDeps([0,1]))),JE=w.lazy(()=>Ur(()=>import("./Skills-BbeE3H-E.js"),__vite__mapDeps([2,1,3]))),eT=w.lazy(()=>Ur(()=>import("./Tabs-OZaw54-5.js"),__vite__mapDeps([4,3]))),tT=w.lazy(()=>Ur(()=>import("./Connect-Blh5TV-b.js"),__vite__mapDeps([5,1]))),nT=w.lazy(()=>Ur(()=>import("./Footer-CizTz-hp.js"),[])),kh=({minHeight:e})=>k.jsx("div",{"aria-hidden":"true",style:{minHeight:e,width:"100%"}}),ai=({Component:e,minHeight:t=400})=>{const n=w.useRef(null),[r,i]=w.useState(!1);return w.useEffect(()=>{const o=n.current;if(!o)return;if(!("IntersectionObserver"in window)){i(!0);return}const s=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),s.disconnect())},{root:null,rootMargin:"900px 0px 900px 0px",threshold:0});return s.observe(o),()=>{s.disconnect()}},[]),k.jsx("div",{ref:n,children:r?k.jsx(w.Suspense,{fallback:k.jsx(kh,{minHeight:t}),children:k.jsx(e,{})}):k.jsx(kh,{minHeight:t})})};function rT(){return k.jsxs(k.Fragment,{children:[k.jsx(DE,{}),k.jsx(XP,{}),k.jsx(HE,{}),k.jsx(QE,{}),k.jsxs("main",{style:{position:"relative",zIndex:1},children:[k.jsx(NE,{}),k.jsx(ai,{Component:qE,minHeight:650}),k.jsx(ai,{Component:JE,minHeight:850}),k.jsx(ai,{Component:eT,minHeight:1050}),k.jsx(ai,{Component:tT,minHeight:850}),k.jsx(ai,{Component:nT,minHeight:300})]})]})}function iT(){const{pathname:e}=mt();return w.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const oT={initial:{opacity:0,y:14,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:-10,filter:"blur(8px)"}},sT={initial:{opacity:0,scale:.985,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.025,filter:"blur(12px)"}};function Ch({children:e,type:t="portfolio"}){const n=t==="courage"?sT:oT;return k.jsx($.div,{initial:"initial",animate:"animate",exit:"exit",variants:n,transition:{duration:.6,ease:[.76,0,.24,1]},style:{width:"100%"},children:e})}function aT(){const e=mt();return k.jsxs(k.Fragment,{children:[k.jsx(iT,{}),k.jsx(Qi,{mode:"wait",initial:!1,children:k.jsxs(Ww,{location:e,children:[k.jsx(du,{path:"/",element:k.jsx(Ch,{type:"portfolio",children:k.jsx(rT,{})})}),k.jsx(du,{path:"/courage",element:k.jsx(Ch,{type:"courage",children:k.jsx(ZE,{})})})]},e.pathname)})]})}function lT(){return k.jsx(BE,{children:k.jsx(h2,{children:k.jsx("div",{id:"app-shell",style:{minHeight:"100vh",width:"100%",overflowX:"hidden",background:"#050505"},children:k.jsx(aT,{})})})})}yl.createRoot(document.getElementById("root")).render(k.jsx(ce.StrictMode,{children:k.jsx(lT,{})}));export{i8 as $,RT as A,IT as B,v8 as C,_T as D,zT as E,NT as F,FT as G,OT as H,VT as I,YP as J,TC as K,EC as L,kC as M,fe as N,Y3 as O,uE as P,X3 as Q,bC as R,CT as S,Q3 as T,Z3 as U,q3 as V,J3 as W,e8 as X,t8 as Y,n8 as Z,r8 as _,x8 as a,c4 as a$,o8 as a0,s8 as a1,a8 as a2,l8 as a3,u8 as a4,c8 as a5,W3 as a6,H3 as a7,G3 as a8,K3 as a9,nd as aA,Pe as aB,Mr as aC,HS as aD,Zc as aE,WS as aF,It as aG,kk as aH,Z0 as aI,ub as aJ,N0 as aK,JT as aL,e4 as aM,ET as aN,t4 as aO,n4 as aP,u4 as aQ,mT as aR,r4 as aS,bT as aT,i4 as aU,s4 as aV,o4 as aW,xT as aX,ST as aY,a4 as aZ,l4 as a_,Qi as aa,Ur as ab,d8 as ac,f8 as ad,p8 as ae,h8 as af,m8 as ag,g8 as ah,y8 as ai,cd as aj,sd as ak,Xi as al,ky as am,mn as an,B as ao,US as ap,op as aq,bk as ar,U5 as as,B5 as at,eh as au,YS as av,tp as aw,_t as ax,jS as ay,ee as az,w8 as b,Y4 as b$,d4 as b0,f4 as b1,p4 as b2,h4 as b3,g4 as b4,y4 as b5,v4 as b6,x4 as b7,w4 as b8,S4 as b9,YT as bA,XT as bB,QT as bC,ZT as bD,qT as bE,CC as bF,PC as bG,BT as bH,UT as bI,WT as bJ,nE as bK,M4 as bL,D4 as bM,I4 as bN,_4 as bO,z4 as bP,N4 as bQ,gT as bR,F4 as bS,O4 as bT,V4 as bU,B4 as bV,U4 as bW,A4 as bX,$4 as bY,j4 as bZ,K4 as b_,b4 as ba,k4 as bb,TT as bc,m4 as bd,C4 as be,P4 as bf,yT as bg,E4 as bh,R4 as bi,T4 as bj,L4 as bk,fT as bl,d3 as bm,f3 as bn,p3 as bo,h3 as bp,m3 as bq,g3 as br,y3 as bs,v3 as bt,x3 as bu,w3 as bv,HT as bw,GT as bx,hT as by,KT as bz,S8 as c,X4 as c0,Q4 as c1,Z4 as c2,q4 as c3,J4 as c4,e3 as c5,t3 as c6,n3 as c7,r3 as c8,wT as c9,D3 as cA,I3 as cB,N3 as cC,kT as cD,_3 as cE,z3 as cF,F3 as cG,O3 as cH,V3 as cI,B3 as cJ,U3 as cK,i3 as ca,o3 as cb,s3 as cc,a3 as cd,l3 as ce,u3 as cf,c3 as cg,vT as ch,W4 as ci,H4 as cj,G4 as ck,C3 as cl,P3 as cm,E3 as cn,T3 as co,R3 as cp,L3 as cq,A3 as cr,$3 as cs,j3 as ct,M3 as cu,pT as cv,S3 as cw,b3 as cx,k3 as cy,uT as cz,$8 as d,b8 as e,k8 as f,C8 as g,P8 as h,E8 as i,k as j,T8 as k,R8 as l,$ as m,L8 as n,A8 as o,H as p,LT as q,w as r,AT as s,PT as t,Rw as u,$T as v,jT as w,j8 as x,MT as y,DT as z};
