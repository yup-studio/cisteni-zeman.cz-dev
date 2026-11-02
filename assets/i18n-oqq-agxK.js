import{n as e,t}from"./rolldown-runtime-CbXtAM7H.js";var n=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),r=t(((e,t)=>{t.exports=n()}));function i(e){return e[e.length-1]}function a(e,t){return typeof e==`function`?e(t):e}var o=Object.prototype.hasOwnProperty;function s(e){for(let t in e)if(o.call(e,t))return!0;return!1}var c=()=>Object.create(null),l=(e,t)=>u(e,t,!0);function u(e,t,n,r=0){if(e===t)return e;if(r++>500)return t;let a=Array.isArray(e)&&Array.isArray(t);if(!a&&!(d(e)&&d(t)))return t;let s=Object.keys(e),l=s.length,f=Object.keys(t),p=f.length;if(a?l!==e.length||p!==t.length||l&&i(s)!==`${l-1}`||p&&i(f)!==`${p-1}`:l!==Object.getOwnPropertyNames(e).length||p!==Object.getOwnPropertyNames(t).length||Object.getOwnPropertySymbols(t).length)return t;let m=0,h,g,_;if(a){for(;m<p&&(_=m,g=e[_],h=t[_],h=g===h?g:typeof g==`object`?u(g,h,n,r):h,h===g);m++);if(m===p&&l===p)return e}else{let i=l===p,a=!0;for(;m<p;m++){_=f[m],g=e[_];let c=t[_];h=g===c?g:typeof g==`object`?u(g,c,n,r):c,i&&=h===g&&(s[m]===_||o.call(e,_)),a&&=Object.is(h,c),s[m]=h}if(i)return Object.getOwnPropertySymbols(e).length?t:e;if(a)return t}let v=a?f.fill(0):n?c():{};for(let i=0;i<p;i++)_=a?i:f[i],a?(g=e[_],i>m&&(h=t[_],h=g===h?g:typeof g==`object`?u(g,h,n,r):h),v[_]=i<m?g:h):v[_]=s[i];return v}function d(e){return!e||typeof e!=`object`?!1:(Object.getPrototypeOf(e)?.constructor??Object)===Object}function f(e,t,n,r){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=t[i];if(a!==o&&!f(a,o,n,r))return!1}return!0}if(d(e)&&d(t)){if(n){for(let i in t)if((r||t[i]!==void 0)&&!f(e[i],t[i],n,r))return!1;return!0}let i=0;if(r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;for(let a in t)if((r||t[a]!==void 0)&&(i--===0||!f(e[a],t[a],n,r)))return!1;return i===0}return!1}function p(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var m=/[\x00-\x1f\x7f"<>`{}]/g;function h(e){return e.replace(m,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function g(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return h(t)}var _=[`http:`,`https:`,`mailto:`,`tel:`];function v(e){if(e[0]!==`/`&&e.includes(`:`))return/^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g,``).toLowerCase()}var y=/^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;function b(e,t){if(!e)return!1;if(y.test(e))return!0;let n=v(e);return n?!t.has(n):!1}var x={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},S=/[&><\u2028\u2029]/g;function C(e){return e.replace(S,e=>x[e])}function w(e){if(!e)return e;let t=e;if(/[%\\\x00-\x1f\x7f]/.test(e)){let n=/%25|%5C/gi,r=0,i;for(t=``;(i=n.exec(e))!==null;)t+=g(e.slice(r,i.index))+i[0],r=n.lastIndex;t+=g(r?e.slice(r):e)}return t}function T(e){return/[\s\u0080-\uFFFF]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function E(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function D(e){return e.replace(/\/{2,}/g,`/`)}function O(e){return e===`/`?e:e.replace(/^\/+/,``)}function k(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/+$/,``):e}function A(e){return k(O(e))}function j(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function M(e,t,n=`never`,r){if(t.includes(`//`)&&(t=D(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let a=t===`.`,o;if(r){o=a?e:e+`\0`+t;let n=r.get(o);if(n)return n}let s;if(a)s=e.split(`/`);else{for(e.includes(`//`)&&(e=D(e)),s=e.split(`/`);s.length>1&&i(s)===``;)s.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&s.push(r):s=[r]:r===`..`?s.length>1?s.pop():s=[``]:r===`.`||s.push(r)}}s.length>1&&(i(s)===``?n===`never`&&s.pop():n===`always`&&s.push(``));let c=s.join(`/`),l=(a?D(c):c)||`/`;return o&&r&&r.set(o,l),l}function N(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g,`\\$&`),`g`);return e=>e.replace(n,e=>t.get(e)??e)}function P(e){return e==null||e===``}function F(e,t,n){if(typeof t!=`string`)return``+(t??void 0);let r=e===`_splat`;if(r&&(!t||/^[a-zA-Z0-9\-._~!/]*$/.test(t)))return t;let i=encodeURIComponent(t);return r&&(i=i.replaceAll(`%2F`,`/`)),n?n(i):i}function I(e,t,n,r,i){let a=e.endsWith(`/`)?`/`:``,o=``;for(let e of t){if(typeof e==`string`){o+=e;continue}let[t,s,c,l]=e,u=t===2,d=u&&l!==void 0?l+a:l,f=n[s];if(t!==3||f!=null){if(i&&(i[s]=f,u&&(i[`*`]=f)),u&&P(f)){if(c===`/`&&!d)continue;f=``}o+=c+F(s,f,r)+(d||``)}}return o+a||`/`}function L(){throw Error(`Invariant failed`)}var R=`Error preloading route! ☝️`,z=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),B=t(((e,t)=>{t.exports=z()})),V=e(r(),1),H=B(),ee=()=>!0,te=()=>!1;function ne({children:e,fallback:t=null}){return(0,H.jsx)(V.Fragment,{children:U()?e:t})}function U(e=!0){return V.useSyncExternalStore(re,ee,e?te:ee)}function re(){return()=>{}}var ie=V.createContext(null);function W(e){return V.useContext(ie)}var ae=V.createContext(void 0),oe=V.createContext(void 0),se=t((e=>{var t=r();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:n,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),ce=t(((e,t)=>{t.exports=se()})),le=t((e=>{var t=r(),n=ce();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=n.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),ue=t(((e,t)=>{t.exports=le()}))();function de(e,t){return e===t}function G(e,t=e=>e,n){let r=n?.compare??de,i=(0,V.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,V.useCallback)(()=>e.get(),[e]);return(0,ue.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var fe={};function pe(e,t){let n=V.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=u(n.current,i):i}}function me(e){let t=W(),n=V.useContext(e.from?oe:ae),r=e.from??n,i=t.stores.getMatchStore(r),a=pe(e,t),o=G(i,e=>e?a(e):fe);if(o!==fe)return o;(e.shouldThrow??!0)&&L()}function he(e){let t=W();return V.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function ge(...e){let t=V.useRef(e),n=t.current;return e.forEach((e,t)=>{f(n[t],e,!1,!0)||(n[t]=e)}),t.current}function K(e,t){e.preloadRoute(t).catch(e=>{console.warn(e),console.warn(R)})}var _e={compare:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function ve(e,t){let n=typeof e==`string`&&v(e);if(n)return t.has(n)?e:null}function ye(e,t,n,r,i){let a=j(e.pathname,r),o=j(t.pathname,r);return(n?.exact?a!==o:!(a.startsWith(o)&&(a.length===o.length||a[o.length]===`/`)))||(n?.includeSearch??!0)&&!f(e.search,t.search,!n?.exact,n?.explicitUndefined)?!1:!n?.includeHash||i&&e.hash===t.hash}function be(e,t,n){let r=W(),i=V.useRef(null),a=V.useCallback(e=>{if(i.current=e,typeof t==`function`)return t(e);t&&(t.current=e)},[t]),{activeOptions:o,to:s,preload:c,preloadDelay:l,hashScrollIntoView:u,replace:d,startTransition:f,resetScroll:p,viewTransition:m,ignoreBlocker:h,disabled:g,target:_,onClick:y,onBlur:b,onFocus:x,onMouseEnter:S,onMouseLeave:C,onTouchStart:w}=e,T=U(!!o?.includeHash),[E,D,O]=ge(e.search,e.params,o),[k,A]=V.useMemo(()=>[e,{...e}],[r,e.from,e._fromLocation,e.hash,e.to,E,D,e.state,e.mask,e.unsafeRelative]),j=V.useMemo(()=>{let e=ve(s,r.protocolAllowlist);if(e!==void 0){let t=[e??void 0];return()=>t}let t,n;return e=>{k._fromLocation||(A._fromLocation=e);let i=r.buildLocation(A),a=Ee(i,r,g);return(!t||t[0]!==a)&&(t=[a,!(g||a&&!v(a))&&void 0],n=[a,!0]),t[1]!==void 0&&ye(e,i,O,r.basepath,T)?n:t}},[O,g,T,k,A,r,s]),[M,N]=G(r.stores.location,j,_e),P=N===void 0&&M,F=g||M===void 0,I=V.useRef(!1),L=e.reloadDocument||P||F?!1:c??r.options.defaultPreload,R=l??r.options.defaultPreloadDelay??0,z=V.useCallback(e=>{let t=e?.isIntersecting;if(!(t??L===`intent`)){t===!1&&J(i);return}if(!R){K(r,k);return}q.has(i)||q.set(i,setTimeout(()=>{q.delete(i),K(r,k)},R))},[r,k,i,L,R]);V.useEffect(()=>{if(!L)return;L===`render`&&!I.current&&(I.current=!0,K(r,k));let e=!0,t;return L===`viewport`&&i.current&&typeof IntersectionObserver==`function`&&(t=new IntersectionObserver(t=>{e&&z(t.pop())},{rootMargin:`100px`}),t.observe(i.current)),()=>{e=!1,t?.disconnect(),J(i)}},[r,k,L,z,i]);let B=we(e,n);if(B.ref=t?a:i,P)return B.href=P,B;let H=e=>{let t=_??e.currentTarget.getAttribute(`target`);!F&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!t||t===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...k,replace:d,resetScroll:p,hashScrollIntoView:u,startTransition:f,viewTransition:m,ignoreBlocker:h}))},ee=()=>{L===`intent`&&K(r,k)},te=()=>{L===`intent`&&J(i)};return B.onClick=Y(y,H),B.onBlur=Y(b,te),B.onFocus=Y(x,z),B.onMouseEnter=Y(S,z),B.onMouseLeave=Y(C,te),B.onTouchStart=Y(w,ee),Te(B,e,N,M,F,n)}var xe={},Se={className:`active`},Ce=new Set([`to`,`params`,`search`,`hash`,`state`,`mask`,`from`,`unsafeRelative`,`_fromLocation`,`reloadDocument`,`preload`,`preloadDelay`,`preloadIntentProximity`,`hashScrollIntoView`,`replace`,`startTransition`,`resetScroll`,`viewTransition`,`ignoreBlocker`,`activeProps`,`inactiveProps`,`activeOptions`,`_asChild`]);function we(e,t){let n={};for(let r in e)Ce.has(r)||r===`type`&&t!==void 0||r===`disabled`&&t===`a`||(n[r]=e[r]);return n}function Te(e,t,n,r,i,o){let{activeProps:s,inactiveProps:c,className:l,style:u,target:d}=t,f=a(n?s:c,{})??(n?Se:xe);Object.assign(e,f),e.href=r,o!==`a`&&(e.disabled=i),e.target=d;let p=f.style;(u||p)&&(e.style=u&&p?{...u,...p}:u||p);let m=f.className;return(l||m)&&(e.className=l?m?`${l} ${m}`:l:m),i&&(e.role=`link`,e[`aria-disabled`]=!0),n&&(e[`data-status`]=`active`,e[`aria-current`]=`page`),e}var q=new WeakMap,J=e=>{clearTimeout(q.get(e)),q.delete(e)},Y=(e,t)=>e?n=>n.defaultPrevented||(e(n),n.defaultPrevented||t(n)):t;function Ee(e,t,n){if(n)return;let r=e.maskedLocation??e,i=r.external?r.publicHref:t.history.createHref(r.publicHref)||`/`;if(!((r.external||i!==r.publicHref)&&b(i,t.protocolAllowlist)))return i}var De=V.memo(V.forwardRef((e,t)=>{let n=e._asChild||`a`,r=be(e,t,n),i=typeof e.children==`function`?e.children({isActive:r[`data-status`]===`active`}):e.children;return V.createElement(n,r,i)}),Oe);function Oe(e,t){let n=0;for(let r in t)if(n++,e[r]!==t[r]&&(!Ce.has(r)||!f(e[r],t[r],!1,!0)))return!1;for(let t in e)n--;return n===0}function ke(e){let t=W({warn:e?.router===void 0}),n=e?.router||t;return G(n.stores.__store,pe(e,n))}var X=JSON.parse(`{
  "schemaVersion": 2,
  "brand": {
    "name": "Čištění koberců a sedaček – Aleš Zeman",
    "logo": "assets/Logo Aleš Zeman – Profesionální čištění.png",
    "favicon": "assets/Modrá ikona domu s úklidovým motivem.png",
    "ogImage": ""
  },
  "approvedImages": [
    {
      "path": "assets/Logo Aleš Zeman – Profesionální čištění.png",
      "alt": "Logo Aleš Zeman – Profesionální čištění",
      "usage": "brand"
    },
    {
      "path": "assets/Modrá ikona domu s úklidovým motivem.png",
      "alt": "Ikona čištění pro favicon",
      "usage": "favicon"
    }
  ],
  "site": {
    "productionDomain": "cisteni-zeman.cz",
    "productionUrl": "https://cisteni-zeman.cz",
    "devDomain": "cisteni-zeman.yup.studio",
    "defaultLanguageStrategy": "browser",
    "fallbackLanguage": "cs",
    "languages": [
      "cs",
      "en"
    ],
    "media": {
      "heroVideo": "assets/cleaning_professional_working_34302_Kling_30_.mp4",
      "heroPoster": ""
    }
  },
  "business": {
    "name": "Aleš Zeman",
    "email": "uklid.zeman@seznam.cz",
    "phone": "+420 608 147 779",
    "address": "Poděbradova 3213, 272 01 Kladno",
    "companyId": "65252870",
    "vatId": "",
    "contactForm": {
      "provider": "",
      "endpoint": "",
      "recipient": "",
      "profile": ""
    },
    "social": {
      "instagram": "",
      "linkedin": "",
      "facebook": "",
      "x": ""
    }
  },
  "public": {
    "cs": {
      "seo": {
        "title": "Čištění koberců, sedaček a mytí oken | Kladno, Praha | Aleš Zeman",
        "description": "Aleš Zeman nabízí od roku 1998 extrakční čištění koberců, sedaček, interiérů aut, mytí oken i pravidelný úklid SVJ. Kladno, Praha a Středočeský kraj."
      },
      "hero": {
        "title": "Profesionální čištění koberců, sedaček a mytí oken",
        "text": "Aleš Zeman poskytuje úklidové služby od roku 1998. Přijedeme za vámi do Kladna, Prahy, Slaného, Rakovníka, Berouna a dalších míst Středočeského kraje. Pro domácnosti, firmy, školy i bytové domy.",
        "primaryCta": "Zavolat: 608 147 779",
        "secondaryCta": "Prohlédnout služby"
      },
      "services": [
        {
          "key": "carpets",
          "title": "Čištění koberců",
          "text": "Strojové extrakční čištění celoplošných i kusových koberců v domácnostech, kancelářích, školách, obchodech, hotelech a dalších provozech. Součástí je suché vysávání. Orientační schnutí 2–5 hodin.",
          "details": [
            "Profesionální extraktory s vysokým sacím výkonem: čistící roztok je vstřikován do vláken a spolu s nečistotami odsáván.",
            "Čištění napomáhá odstranění skvrn, pachů a oživení barev; výsledek závisí na materiálu a opotřebení.",
            "Doporučená frekvence: domácnosti zhruba jednou za rok, vysoce zatěžované prostory jednou až dvakrát za rok.",
            "Cena se odvíjí od plochy, typu koberce, délky vlasu, množství a znečištění."
          ],
          "process": {
            "intro": "Strojové extrakční čištění koberců je postup, při kterém se do vláken pod tlakem aplikuje voda s čisticím prostředkem a současně se spolu s uvolněnými nečistotami odsává. Díky vysokému sacímu výkonu zůstává koberec po vyčištění vlhký, nikoli promočený.",
            "steps": [
              {
                "title": "Příprava a vysávání",
                "text": "Nejprve koberec nasucho důkladně vysajeme. Suché vysávání je již součástí ceny čištění."
              },
              {
                "title": "Hloubková extrakce",
                "text": "Čisticí roztok stroj vstřikuje do vláken koberce, kde pomáhá uvolnit ulpělé nečistoty."
              },
              {
                "title": "Okamžité odsávání",
                "text": "Roztok s nečistotami průběžně odsáváme výkonným extraktorem. Při silném znečištění postup podle potřeby opakujeme."
              },
              {
                "title": "Schnutí a kontrola",
                "text": "Nízké a zátěžové koberce schnou často přibližně 2–3 hodiny, vyšší vlas nebo více znečištěné koberce kolem 3–5 hodin. Důležitá je teplota a větrání."
              }
            ],
            "included": [
              "Suché vysávání bez příplatku",
              "Čištění celoplošných i kusových koberců",
              "Podle potřeby opakování extrakčního čištění",
              "Posouzení typu vláken, výšky vlasu a znečištění"
            ],
            "limitations": "U zašlých, opotřebených či sluncem vyšisovaných vláken není vždy možné obnovit původní vzhled ani odstranit všechny skvrny. Výsledek a reálné možnosti předem vysvětlíme.",
            "technique": "Používáme výkonné extraktory TRON, mimo jiné model LAVATRON 50, který je na původním webu popsán se dvěma sacími turbínami, 15l zásobníkem roztoku a 50l nerezovou nádobou na odsátou vodu.",
            "recommendedFrequency": "V domácnostech většinou jednou ročně. U hodně zatěžovaných koberců, například na chodbách, v kancelářích či hotelech, nejméně jednou a ideálně dvakrát ročně.",
            "serviceContext": "Domácnosti, školy, školky, kanceláře, obchody, restaurace, hotely, penziony a další provozy."
          }
        },
        {
          "key": "upholstery",
          "title": "Čištění sedaček a čalounění",
          "text": "Hloubkové extrakční čištění látkových sedacích souprav, křesel, židlí, taburetů, kancelářských křesel a matrací. Běžné schnutí zhruba 3–6 hodin.",
          "details": [
            "Pouze textilní potahy, které výrobce dovoluje čistit extrakční metodou; kožené sedačky nejsou součástí uvedené služby.",
            "Speciální hubicí se čistí i obtížně přístupná čalouněná místa.",
            "Délka čištění běžné sedačky je orientačně hodina, záleží na rozměru a znečištění.",
            "Součástí čištění je suché vysávání; dobu schnutí ovlivňuje materiál, pokojová teplota a větrání."
          ],
          "process": {
            "intro": "Textilní čalounění čistíme hloubkovou extrakční metodou. Oproti kobercům používáme speciální hubici, díky které se dostaneme také ke spojům, rohům a hůře přístupným místům sedačky.",
            "steps": [
              {
                "title": "Kontrola potahu",
                "text": "Nejprve posoudíme materiál, opotřebení a skvrny. Čistíme látkové potahy, u nichž výrobce extrakční metodu nezakazuje."
              },
              {
                "title": "Suché vysávání",
                "text": "Prach a volné nečistoty odsajeme ještě před mokrým čištěním; vysávání je zahrnuto v ceně."
              },
              {
                "title": "Nástřik a odsávání",
                "text": "Speciální hubicí naneseme roztok a ihned jej spolu s uvolněnými nečistotami odsáváme. Při vyšším znečištění či skvrnách ošetření opakujeme."
              },
              {
                "title": "Schnutí",
                "text": "Čištění běžné sedačky trvá orientačně hodinu. Po vyčištění zůstane materiál vlhký a zpravidla schne 3–6 hodin podle potahu, teploty a větrání."
              }
            ],
            "included": [
              "Suché vysávání v ceně",
              "Sedací soupravy, křesla, taburety, čalouněné židle a kancelářská křesla",
              "Možnost čištění matrací z obou stran podle materiálu",
              "Speciální hubice pro nepřístupná místa"
            ],
            "limitations": "Čistíme pouze vhodné textilní potahy, nikoli kůži. Mechanické opotřebení, vyblednutí a některé trvalé skvrny nemusí zmizet. Předem upozorníme na očekávaný výsledek.",
            "technique": "Extrakční stroj s vysokým sacím výkonem a úzkou hubicí pro čalounění pomáhá čistit také částečně pod povrchem potahu. Na původním webu je uváděno odsátí až 90 % aplikované vody; jde o údaj závislý na konkrétním materiálu a podmínkách.",
            "recommendedFrequency": "Interval čištění závisí na používání, materiálu a znečištění. U skvrn se vyplatí problém konzultovat co nejdříve.",
            "serviceContext": "Sedačky a křesla v domácnostech, kancelářské židle, matrace a další vhodné textilní čalounění."
          }
        },
        {
          "key": "windows",
          "title": "Mytí oken, výloh a žaluzií",
          "text": "Mytí oken v bytech, rodinných domech, kancelářích, školách, obchodech a společných prostorech. Včetně rámů a parapetů; také výlohy, horizontální a vertikální žaluzie.",
          "details": [
            "Mytí oken po malování a stavebních úpravách, pravidelné mytí výloh a mytí hůře přístupného prosklení dle dohody.",
            "Používají se profesionální stěrky a rozmýváky; okolní podlahy a stěny se chrání před znečištěním.",
            "Cena se počítá podle všech umývaných stran a ploch včetně rámů, členitosti, přístupnosti a znečištění.",
            "Na požádání lze zajistit sundání a opětovné pověšení záclon nebo závěsů."
          ],
          "process": {
            "intro": "Mytí oken není pouze přetření skla. Součástí objednané práce může být umytí rámů, parapetů a dalších přístupných částí, včetně žaluzií či výloh podle domluvy.",
            "steps": [
              {
                "title": "Posouzení rozsahu",
                "text": "Zohledníme typ oken, počet umývaných stran, členitost, přístup a míru znečištění."
              },
              {
                "title": "Příprava prostoru",
                "text": "Před prací chráníme okolní podlahy a stěny a připravíme profesionální rozmýváky a stěrky."
              },
              {
                "title": "Mytí a stírání",
                "text": "Postupně umyjeme a setřeme skleněné plochy, rámy a parapety podle objednaného rozsahu."
              },
              {
                "title": "Kontrola a další úkony",
                "text": "Zkontrolujeme viditelné šmouhy, podle objednávky dočistíme žaluzie, výlohy či další skleněné plochy."
              }
            ],
            "included": [
              "Mytí skel, rámů a parapetů v dohodnutém rozsahu",
              "Plastová i špaletová okna",
              "Mytí po malování a stavebních pracích",
              "Mytí horizontálních i čištění vertikálních žaluzií podle zakázky"
            ],
            "limitations": "Cena se počítá ze součtu skutečně mytých stran včetně rámů, nikoliv jen z rozměru otvoru. Obtížně přístupná a výšková okna řešíme individuálně.",
            "technique": "Profesionální rozmýváky a stěrky; u rozsáhlejších zakázek individuální pracovní postup. Původní web uvádí také možnost zajištění výškového mytí za použití horolezecké techniky.",
            "recommendedFrequency": "Výlohy často každých 14 dní nebo jednou měsíčně; ostatní okna podle potřeby a provozu.",
            "serviceContext": "Byty, rodinné domy, obchody, administrativní budovy, školy, hotely a společné prostory domů."
          }
        },
        {
          "key": "buildings",
          "title": "Pravidelný úklid bytových domů a SVJ",
          "text": "Úklid společných prostor panelových a bytových domů pro SVJ, bytová družstva a vlastníky nemovitostí. Rozsah a frekvence podle konkrétní dohody.",
          "details": [
            "Typický týdenní úklid: zametání a vytírání chodeb a schodišť, výtahy, vstupy, dveře, prosklení, rohožky a venkovní plochy.",
            "Měsíčně lze zahrnout zábradlí, suterény, sklepy a schránky.",
            "Dvakrát ročně lze provádět mytí oken, parapetů a osvětlovacích těles.",
            "Konkrétní četnost i úkony upravuje smlouva a individuální nabídka."
          ],
          "process": {
            "intro": "Pravidelný úklid společných prostor nastavujeme podle potřeb konkrétního domu a dohody se SVJ, družstvem či správcem. Nejde o stejný univerzální balíček pro všechny objekty.",
            "steps": [
              {
                "title": "Prohlídka domu",
                "text": "Společně určíme počet podlaží, vstupů, výtahů, typ podlah a skutečně využívané společné prostory."
              },
              {
                "title": "Plán pravidelných prací",
                "text": "Domluvíme interval zametání a vytírání chodeb a schodišť, úklid výtahů, vstupních dveří, rohožek a dalších frekventovaných míst."
              },
              {
                "title": "Periodické práce",
                "text": "Podle dohody zařadíme zábradlí, schránky, suterény, sklepy, parapety, okna a svítidla v delších intervalech."
              },
              {
                "title": "Kontrola rozsahu",
                "text": "Rozsah a frekvenci zapíšeme do nabídky či smlouvy, aby bylo jasné, které činnosti jsou zahrnuté."
              }
            ],
            "included": [
              "Úklid vstupů, chodeb, schodišť a výtahů",
              "Zametání a vytírání podlah",
              "Zábradlí, schránky a další povrchy dle rozpisu",
              "Periodické mytí oken a prosklení dle dohody"
            ],
            "limitations": "Konkrétní četnost i rozsah nejsou automatickou součástí každé zakázky; vycházejí z dohody s klientem.",
            "technique": "Dlouhodobý harmonogram s oddělenými týdenními, měsíčními a sezónními pracemi podle objektu.",
            "recommendedFrequency": "Pravidelně podle dohodnutého harmonogramu; okna a méně frekventované části typicky v delších intervalech.",
            "serviceContext": "SVJ, bytová družstva, správci nemovitostí, panelové a bytové domy."
          }
        },
        {
          "key": "cars",
          "title": "Čištění interiérů automobilů",
          "text": "Čištění automobilů přímo u zákazníka: osobní vozy, SUV, MPV, dodávky, karavany a obytné automobily podle rozsahu zakázky.",
          "details": [
            "Extrakční čištění textilních sedadel, opěrek, výplní dveří, koberců a zavazadlového prostoru.",
            "Ošetření plastových částí, umytí mezidveřních prostor, vnitřních skel a oken.",
            "Orientační schnutí kolem tří hodin podle materiálu a počasí.",
            "Cena je stanovena podle velikosti a skutečného znečištění vozidla."
          ],
          "process": {
            "intro": "Interiér automobilu čistíme přímo na místě dohodnutém se zákazníkem. Nejde jen o vysátí sedadel: součástí sjednaného rozsahu může být hloubkové čištění textilu i péče o tvrdé povrchy.",
            "steps": [
              {
                "title": "Posouzení a vysávání",
                "text": "Zhodnotíme rozsah znečištění a vysajeme přístupné čalouněné části, podlahy a zavazadlový prostor."
              },
              {
                "title": "Extrakční čištění textilu",
                "text": "Profesionální hubicí vyčistíme látková přední i zadní sedadla, opěrky, výplně dveří a koberce."
              },
              {
                "title": "Detaily interiéru",
                "text": "Podle dohody vyčistíme a ošetříme plasty, umyjeme mezidveřní prostory a vnitřní skla."
              },
              {
                "title": "Schnutí a předání",
                "text": "Vysvětlíme doporučenou dobu schnutí; díky výkonnému odsávání se běžně pohybuje kolem 3 hodin podle materiálu a počasí."
              }
            ],
            "included": [
              "Čištění textilních sedadel a opěrek",
              "Koberečky, podlahy a zavazadlový prostor",
              "Výplně dveří a čalouněné části",
              "Plasty, mezidveřní prostory a skla podle rozsahu"
            ],
            "limitations": "Cena se liší podle velikosti vozu a skutečného stavu. Schnutí závisí na počasí, větrání a druhu materiálu. Konkrétní práce si potvrdíme před zahájením.",
            "technique": "Profesionální extraktor s vysokým sacím výkonem, cílené čištění textilií a následné ošetření dalších vnitřních povrchů.",
            "recommendedFrequency": "Pravidelné čištění pomáhá udržet interiér při každodenním zatížení, zejména po zimním období.",
            "serviceContext": "Osobní automobily, SUV, MPV, dodávky, autobusy, karavany a obytné automobily."
          }
        }
      ],
      "contact": {
        "title": "Domluvte si úklid nebo nezávaznou nabídku",
        "text": "Zavolejte nebo napište, co potřebujete vyčistit, kde se zakázka nachází a v jakém rozsahu. Potvrdíme vhodný postup, orientační cenu a termín.",
        "phoneLabel": "Zavolat",
        "emailLabel": "Napsat e-mail"
      },
      "footer": {
        "copyright": "Aleš Zeman"
      },
      "about": {
        "title": "Poctivá práce a osobní přístup od roku 1998",
        "text": "Spokojenost zákazníka pro nás není jen frází, ale hlavním smyslem naší práce. Pracujeme s profesionálními extraktory a atestovanými čisticími prostředky. K zakázkám přistupujeme individuálně, bez skrytých poplatků; při větších objednávkách nebo kombinaci služeb lze domluvit množstevní slevu.",
        "principles": [
          "Osobní přístup a snaha najít vhodné řešení",
          "Domácnosti, firmy, státní a neziskové organizace",
          "Konečné ceny – nejsme plátci DPH (doprava dle lokality zvlášť)",
          "Možnost kombinovat služby a domluvit množstevní slevu",
          "Záleží nám na vaší spokojenosti s výsledkem"
        ]
      },
      "coverage": {
        "title": "Kde pracujeme",
        "cities": [
          "Kladno",
          "Praha",
          "Slaný",
          "Rakovník",
          "Beroun"
        ],
        "text": "Zakázky realizujeme také v dalších místech Středočeského kraje; dostupnost a cenu dopravy potvrdíme před objednávkou."
      },
      "pricing": {
        "title": "Ceník služeb",
        "intro": "Přehled cen našich úklidových služeb. U větších nebo pravidelných zakázek vám připravíme nabídku na míru.",
        "currency": "CZK",
        "items": [
          {
            "label": "Mytí oken včetně rámů",
            "price": "35 Kč/m²"
          },
          {
            "label": "Mytí oken po malování / stavebních úpravách",
            "price": "45 Kč/m²"
          },
          {
            "label": "Mytí výloh",
            "price": "20 Kč/m²"
          },
          {
            "label": "Silně znečištěné výlohy",
            "price": "30 Kč/m²"
          },
          {
            "label": "Čištění koberců v domácnosti",
            "price": "40 Kč/m²"
          },
          {
            "label": "Čištění kusových koberců",
            "price": "350 Kč/ks"
          },
          {
            "label": "Čištění koberců v kancelářích",
            "price": "od 30 Kč/m²"
          },
          {
            "label": "Čištění sedací soupravy",
            "price": "275 Kč / sedací místo"
          },
          {
            "label": "Čištění čalouněného křesla",
            "price": "300 Kč/ks"
          },
          {
            "label": "Čištění čalouněné židle",
            "price": "50 Kč/ks"
          },
          {
            "label": "Čištění matrace",
            "price": "100 Kč/m²"
          },
          {
            "label": "Mytí horizontálních žaluzií",
            "price": "30 Kč/m²"
          },
          {
            "label": "Čištění vertikálních textilních žaluzií",
            "price": "95 Kč/m²"
          },
          {
            "label": "Čištění interiéru automobilu",
            "price": "od 1 000 Kč"
          },
          {
            "label": "Pravidelný úklid společných prostor",
            "price": "od 1 600 Kč/měsíc, dle rozsahu úklidu"
          }
        ],
        "transport": [
          {
            "label": "Kladno",
            "price": "100 Kč"
          },
          {
            "label": "Praha",
            "price": "200 Kč paušálně"
          },
          {
            "label": "Další místa Středočeského kraje",
            "price": "8 Kč/km"
          }
        ],
        "note": "Minimální cena jednorázové zakázky je 1 500 Kč. Ceny jsou konečné, nejsme plátci DPH. Doprava se účtuje samostatně podle lokality. Rozsah služeb a výslednou cenu domluvíme předem."
      },
      "faq": [
        {
          "question": "Jak dlouho předem objednat čištění?",
          "answer": "Termín se snažíme nabídnout co nejdříve, někdy i na následující den. Na jaře a před Vánoci doporučujeme rezervaci s předstihem."
        },
        {
          "question": "Jak dlouho schnou vyčištěné koberce?",
          "answer": "Obvykle 2–5 hodin podle délky vlasu, znečištění, teploty a větrání."
        },
        {
          "question": "Jak dlouho schne sedačka?",
          "answer": "Obvykle 3–6 hodin podle potahového materiálu, provlhčení, teploty a větrání."
        },
        {
          "question": "Čistíte i o víkendech a svátcích?",
          "answer": "Podle informací na původním webu ano, bez víkendového příplatku; dostupnost termínu ověříme při domluvě."
        },
        {
          "question": "Jak se počítá cena za čištění koberců?",
          "answer": "Podle skutečně čištěné plochy, materiálu, množství a stupně znečištění. Plocha pod nábytkem, se kterým se nehýbe a nečistí se pod ním, se nezapočítává."
        },
        {
          "question": "Jak se počítá plocha mytých oken?",
          "answer": "Počítají se všechny umývané strany včetně rámů; standardní plastová okna se obvykle myjí ze dvou stran, špaletová či šroubovaná i ze čtyř."
        },
        {
          "question": "Můžu spojit více služeb?",
          "answer": "Ano, lze si objednat například čištění koberců spolu se sedačkami nebo mytím oken a domluvit individuální cenu."
        },
        {
          "question": "Jsou ceny konečné?",
          "answer": "Na původním webu firma uvádí, že není plátcem DPH a neúčtuje skryté poplatky. K ceně služeb se připočítává doprava dle místa zakázky; konečnou nabídku předem ověřte."
        }
      ],
      "references": {
        "title": "Z našich zákazníků",
        "intro": "Výběr zákazníků, pro které jsme poskytovali úklidové a čisticí služby.",
        "items": [
          {
            "name": "SOŠ a SOU U Hvězdy, Kladno",
            "service": "Pravidelné mytí oken"
          },
          {
            "name": "Zařízení sociální intervence, Kladno",
            "service": "Čištění koberců, úklid, mytí oken"
          },
          {
            "name": "Galerie Langhans, Praha",
            "service": "Generální úklid"
          },
          {
            "name": "Stavební bytové družstvo Praha 6",
            "service": "Čištění koberců a mytí oken"
          },
          {
            "name": "Pečovatelská služba Fontána, Kladno",
            "service": "Čištění koberců a úklid"
          },
          {
            "name": "Odborné učiliště a Praktická škola Kladno–Vrapice",
            "service": "Mytí oken a generální úklid"
          },
          {
            "name": "Real Satis, Kladno",
            "service": "Pravidelný denní úklid"
          },
          {
            "name": "Pedagogicko-psychologická poradna Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "Muller-Technik CZ, Tuchlovice",
            "service": "Čištění koberců"
          },
          {
            "name": "Radava SC, Praha",
            "service": "Čištění koberců"
          },
          {
            "name": "Bess MM, Praha 9",
            "service": "Čištění koberců"
          },
          {
            "name": "Dartin, Horoměřice",
            "service": "Mytí oken a čištění koberců"
          },
          {
            "name": "Středisko ROSA Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "Bytové družstvo BRONZ, Praha",
            "service": "Mytí oken"
          },
          {
            "name": "Matex, Kladno",
            "service": "Mytí výloh"
          },
          {
            "name": "Advokátní kancelář Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "IB corp., Kladno",
            "service": "Pravidelný úklid"
          },
          {
            "name": "Futurum Direkt marketing, Praha 8",
            "service": "Čištění koberců"
          },
          {
            "name": "Lidl ČR, provozovna Nové Strašecí",
            "service": "Mytí výloh"
          },
          {
            "name": "Modrá pyramida, pobočka Kladno",
            "service": "Čištění koberců, mytí výloh a úklid"
          },
          {
            "name": "Luka Consult CZ",
            "service": "Uvedený zákazník, služba nespecifikována"
          },
          {
            "name": "SVJ Vodárenská 2323, Kladno",
            "service": "Pravidelný úklid"
          },
          {
            "name": "SVJ Litevská 2605, Kladno",
            "service": "Úklid a mytí oken"
          },
          {
            "name": "Společenství Helsinská, Kladno",
            "service": "Pravidelný úklid"
          },
          {
            "name": "SVJ Brněnská 3064–3065, Kladno",
            "service": "Úklid a mytí oken"
          },
          {
            "name": "SVJ Na Vyhaslém 3176–3177, Kladno",
            "service": "Pravidelný úklid"
          },
          {
            "name": "Zuckerstein, Praha 6",
            "service": "Pravidelný úklid rezidencí"
          },
          {
            "name": "SVJ Na Petynce / Rezidence Kajetánka I, Praha",
            "service": "Pravidelný úklid"
          },
          {
            "name": "Anglický klub Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "IDEA4U / Bowling Central Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "Jan Zima",
            "service": "Pravidelné mytí výloh čerpací stanice"
          },
          {
            "name": "VCHD Cargo",
            "service": "Čištění koberců"
          },
          {
            "name": "BOHEMIA PLAST Group",
            "service": "Čištění koberců"
          },
          {
            "name": "Advokátní kancelář Kindl Výborčík, Kladno",
            "service": "Čištění koberců"
          },
          {
            "name": "SVJ Maďarská blok 16, Kladno",
            "service": "Pravidelný úklid"
          },
          {
            "name": "Ortoptika Kladno",
            "service": "Pravidelné mytí oken a výloh"
          },
          {
            "name": "MŠ Slaný, Vítězná 1578",
            "service": "Čištění koberců a čalounění"
          },
          {
            "name": "ZŠ Montessori, Pařížská, Kladno",
            "service": "Čištění koberců a čalounění"
          },
          {
            "name": "Smart Accounts",
            "service": "Mytí oken a úklid kanceláří"
          }
        ]
      },
      "personalMessage": {
        "title": "Poděkování stálým zákazníkům",
        "eyebrow": "Osobní slovo Aleše Zemana",
        "paragraphs": [
          "Rád bych poděkoval všem, kteří se na mě s důvěrou obracejí opakovaně. Vážím si toho, že mi svěřujete péči o své domovy, pracoviště i další prostory. Vaše důvěra je pro mě velkým závazkem.",
          "S řadou z vás se známe už mnoho let. Za tu dobu jsme spolu nemluvili jen o práci — sdíleli jsme i osobní radosti, starosti a okamžiky, které život přináší. Někteří z vás mi naslouchali a nabídli pomoc i ve chvílích, kdy jsem ji potřeboval já. Toho si nesmírně vážím.",
          "Roky ubíhají, ale stále se chci snažit, abyste byli s mou prací spokojeni a měli důvod se na mě znovu obracet. Děkuji vám za přízeň, otevřenost a za vztahy, které během naší spolupráce vznikly."
        ],
        "signature": "Aleš Zeman",
        "sourceUrl": "https://uklidove-firmy-az.estranky.cz/",
        "editorialNote": "Věrná nová redakční formulace osobního poděkování z původní domovské stránky; nejde o doslovný přepis."
      },
      "personalValues": {
        "title": "Co je pro mě důležité",
        "items": [
          {
            "title": "Důvěra",
            "text": "Dlouhodobá důvěra zákazníků pro mě znamená víc než jednorázovou zakázku."
          },
          {
            "title": "Poctivá práce",
            "text": "U každé zakázky se snažím najít nejvhodnější postup, vysvětlit možnosti a odvést práci co nejlépe."
          },
          {
            "title": "Otevřenost",
            "text": "Před čištěním rád upozorním na opotřebení materiálu a na to, jaký výsledek je reálné očekávat."
          },
          {
            "title": "Pomoc druhým",
            "text": "Prosím, pomáhejme těm, kteří to opravdu potřebují."
          }
        ]
      },
      "reviewSources": {
        "title": "Hodnocení zákazníků",
        "intro": "Přečtěte si zkušenosti zákazníků na nezávislých portálech.",
        "items": [
          {
            "title": "Firmy.cz / Mapy.com",
            "url": "https://www.firmy.cz/detail/1326239-cisteni-kobercu-a-sedacek-ales-zeman-kladno.html",
            "description": "Hodnocení a zkušenosti zákazníků"
          },
          {
            "title": "NejŘemeslníci.cz",
            "url": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "description": "Archiv zákaznických referencí"
          }
        ]
      },
      "customerTestimonials": {
        "title": "Co o naší práci říkají zákazníci",
        "intro": "Skutečné zkušenosti zákazníků zveřejněné na portálu NejŘemeslníci.cz.",
        "items": [
          {
            "id": "nejremeslnici-01",
            "title": "Čištění koberců, sedačky a matrace",
            "quote": "Perfektní servis, určitě v budoucnu využiju znovu.",
            "rating": 5,
            "author": null,
            "task": "Dva kusové koberce (2 a 5 m²), třímístná sedačka s taburetem a dvojlůžková matrace.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-02",
            "title": "Čištění sedací soupravy",
            "quote": "Vše v pořádku. Sedačka rychle a kvalitně vyčištěna.",
            "rating": 5,
            "author": null,
            "task": "Látková rohová rozkládací pětimístná sedačka v Praze 13.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-03",
            "title": "Opakované čištění koberců, sedačky, matrací a oken",
            "quote": "Už několikrát jsem si pana Zemana objednala na čištění koberců,sedačky,matrací i mytí oken a byla jsem nad očekávání mile překvapena. Jak s výsledkem, precizností, domluvou, vždy je velice příjemný a milý. Nakonec mě vždy mile překvapí i cena. Jsem velice spokojená a mohu jen doporučit.",
            "rating": null,
            "author": null,
            "task": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-04",
            "title": "Čištění koberců a čalounění",
            "quote": "Pan Zeman mi dal nejkratší možný termín, dorazil na čas, výborně odvedl práci, dokonce se mu podařilo zbavit můj koberec nehezkého fleku,který mě opravdu trápil. Ušetřil mi spoustu dřiny za velmi slušnou cenu. Mohu jen doporučit. Za mě naprostá spokojenost.",
            "rating": 5,
            "author": null,
            "task": "Dva celoplošné koberce, sedací souprava L, křeslo, menší kobereček a čalouněná postel.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": true,
            "supplierReply": "Moc děkuji za Vaši objednávku, důvěru v mé služby a hlavně za hodnocení mé práce. Moc si toho vážím a jsem rád, že jste s výsledkem spokojena. Přeji Vám hodně zdraví, sil a energie na Vaši náročnou práci. Děkuji Vám za všechny, kterým pomáháte, vážím si toho a obdivuji Vás za to, co děláte."
          },
          {
            "id": "nejremeslnici-05",
            "title": "Mytí oken",
            "quote": "Za 2,5 hodiny byla okna v perfektním stavu. Pan Zeman je navíc skutečným profesionálem - přesný, spolehlivý a vstřícný. Cena byla určitě odpovídající. Děkujeme!",
            "rating": 5,
            "author": null,
            "task": "Mytí oken o celkové ploše 82 m².",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-06",
            "title": "Čištění koberců a sedačky",
            "quote": "S panem Zemanem jsem byla opravdu velice spokojena!Příjemný,milý,vstřícný,rychlý,dochvilný a pracovitý,Všem opravdu velice doporučuji.Byla jsem opravdu velice spokojena.Děkuji Pavlíčková Soňa",
            "rating": 5,
            "author": "Soňa Pavlíčková",
            "task": "Koberec cca 15 m² a osm sedacích míst.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-07",
            "title": "Čištění koberců v domě",
            "quote": "vše proběhlo tak, jak jsme se domluvili, pan Zeman mi vše zodpověděl a vysvětlil, z výsledku jsme nadšeni, v budoucnu bych si ho určitě objednala znovu, mohu jen doporučit",
            "rating": 5,
            "author": null,
            "task": "Hloubkové čištění koberce v domě o ploše 80 m².",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-08",
            "title": "Čištění koberců a sedačky",
            "quote": "Celkově jsem moc spokojený, vyčištěno, cena dle domluvy a jednání super. Takže služby budu do budoucna určitě využívat a opravdu p. Zemana DOPORUČUJI !!!",
            "rating": 4.3,
            "author": null,
            "task": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-09",
            "title": "Čištění rohového gauče, křesla a taburetů",
            "quote": "Jednání bylo příjemné.Práce byla provedena perfektně.. Termín dodržen. Částka k zhaplacení také dodržena - spokojenost.",
            "rating": 5,
            "author": "Ilona Štorkánová",
            "task": "Rohový gauč 160 × 180 cm, křeslo 90 × 100 cm a dva taburety 50 × 50 cm.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-10",
            "title": "Čištění koberců",
            "quote": "Doporučuji",
            "rating": 5,
            "author": null,
            "task": "Extrakční čištění koberců o ploše cca 30 m².",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-11",
            "title": "Čištění sedací soupravy",
            "quote": "Byla jsem velice spokojená",
            "rating": 5,
            "author": "Plochová",
            "task": "Rohová sedačka a křeslo.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-12",
            "title": "Čištění sedací soupravy",
            "quote": "Pan Zeman byl velmi milý, ochotný. Domluva byla rychlá, kalkulaci mi poslal do druhého dne, termín jsme našli rychle. Přijel načas, gauč si nejdříve prohlédl a upozornil, že některé skvrny nejspíš zůstanou. Během čištění dával pozor, aby voda netekla po podlaze. Celá návštěva trvala asi hodinu. Úplně suchá byla sedačka do druhého dne. S výsledkem jsem spokojená, i když opravdu několik fleků zůstalo. S tím jsem ale byla smířená předem, protože máme světlou barvu a dvouleté dítě. Nakonec mě pan Zeman potěšil celkem výrazným snížením dohodnuté ceny. Jednoznačně doporučuji.",
            "rating": null,
            "author": null,
            "task": "Čištění sedací soupravy.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-13",
            "title": "Čištění koberců a sedačky",
            "quote": "Jsem velice spokojena,pan Zeman je velice příjemný a ochotný.Práce odvedena velice kvalitně, určitě si firmu zase objednám. Zde je vidět že jsou lidé na správném místě, děkuji Tomašovičová,",
            "rating": 5,
            "author": "Tomašovičová",
            "task": "Čištění koberců a sedačky.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-14",
            "title": "Strojové čištění koberců",
            "quote": "super spokojenost můžu doporučit",
            "rating": 5,
            "author": "Lukašova",
            "task": "Strojové čištění koberců, rozměry 9 × 5,5 m a 3,5 × 5,5 m.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-15",
            "title": "Čištění koberců, oken a sedačky",
            "quote": "Naprostá spokojenost, precizně provedená práce, čištění koberců i mytí oken splnilo naše očekávání, sedací souprava je rovněž jako nová. Termín i čas byl dodržen, cena byla dokonce nižší, než dohodnutá. Celkově jsme velmi spokojeni, můžeme vřele doporučit.",
            "rating": null,
            "author": null,
            "task": "Čištění koberců, mytí oken a čištění sedací soupravy v rodinném domě.",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-16",
            "title": "Pravidelné čištění koberců a čalounění",
            "quote": "Úklidovou firmu používám a doporučuji již několik let, vždy jsem velmi spokojena s kvalitou práce. Termín byl dodržen a cena taktéž.Úklidová firma pana Aleše Zemana vždy pro mě a mé známé byla známkou vysoké kvality a serióznosti.",
            "rating": 5,
            "author": null,
            "task": "Čištění koberců a čalounění, byt 3+1 v Kladně, plocha koberců 40 m².",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "sourceEvidence": "Screenshot supplied by project owner 2026-10-31",
            "verifiedByPlatform": false,
            "supplierReply": null
          }
        ]
      },
      "equipment": {
        "title": "Technika, kterou používáme",
        "text": "Na čištění koberců a čalounění používáme profesionální extraktory s vysokým sacím výkonem. Na původním webu představujeme stroje TRON a model LAVATRON 50: dvě sací turbíny, nádrž 15 litrů na čisticí roztok a nerezovou 50litrovou nádobu na odsátou vodu. Díky extrakci lze nečistoty uvolnit z vláken a zároveň průběžně odsávat. Používáme vhodné certifikované čisticí prostředky.",
        "note": "Při konkrétní zakázce volíme techniku a postup s ohledem na materiál, přístup a stupeň znečištění."
      },
      "ui": {
        "nav": {
          "services": "Služby",
          "process": "Jak pracujeme",
          "references": "Reference",
          "pricing": "Ceník",
          "about": "O mně",
          "contact": "Kontakt"
        },
        "skipToContent": "Přeskočit na obsah",
        "menuOpen": "Otevřít menu",
        "menuClose": "Zavřít menu",
        "languageSwitch": "Jazyk",
        "languageNames": {
          "cs": "Čeština",
          "en": "English"
        },
        "serviceDetailCta": "Podrobný postup",
        "backToServices": "Zpět na služby",
        "processTitle": "Postup čištění",
        "techniqueTitle": "Technika",
        "includedTitle": "Co je zahrnuto",
        "limitationsTitle": "Na co pamatovat",
        "frequencyTitle": "Doporučená frekvence",
        "contextTitle": "Pro koho službu poskytujeme",
        "detailsTitle": "Důležité podrobnosti",
        "stepLabel": "Krok",
        "pricingCta": "Zobrazit ceník",
        "otherServices": "Další služby",
        "testimonialsAll": "Všechny zkušenosti zákazníků",
        "testimonialsFeatured": "Vybrané zkušenosti",
        "ratingLabel": "Hodnocení {rating} z 5",
        "taskLabel": "Zakázka",
        "anonymousAuthor": "Zákazník",
        "supplierReplyLabel": "Odpověď Aleše Zemana",
        "verifiedLabel": "Ověřeno portálem",
        "sourceLabel": "Zdroj",
        "sourceNote": "Výňatky jsou přepsané z veřejného profilu včetně původního pravopisu. Ne všechny recenze jsou portálem ověřené.",
        "referencesNote": "Historický výběr organizací, pro které jsme pracovali.",
        "pricingServicesTitle": "Služby",
        "pricingTransportTitle": "Doprava",
        "faqTitle": "Časté dotazy",
        "addressLabel": "Adresa",
        "companyIdLabel": "IČO",
        "serviceAreaLabel": "Oblast působení",
        "notFoundTitle": "Stránka nenalezena",
        "homeLink": "Zpět na úvod",
        "externalLinkNote": "otevře se v novém okně"
      }
    },
    "en": {
      "seo": {
        "title": "Carpet & Upholstery Cleaning in Kladno and Prague | Aleš Zeman",
        "description": "Professional carpet and sofa cleaning, window washing, car interior cleaning and apartment-building upkeep in Kladno, Prague and Central Bohemia since 1998."
      },
      "hero": {
        "title": "Professional carpet, upholstery and window cleaning",
        "text": "Aleš Zeman has provided cleaning services since 1998. Serving Kladno, Prague, Slaný, Rakovník, Beroun and the Central Bohemian Region, for homes, businesses, schools and residential buildings.",
        "primaryCta": "Call +420 608 147 779",
        "secondaryCta": "Explore services"
      },
      "services": [
        {
          "key": "carpets",
          "title": "Carpet cleaning",
          "text": "Professional hot-water extraction for fitted and area rugs in homes, offices, schools, shops and hotels. Dry vacuuming is included; typical drying time is 2–5 hours.",
          "details": [
            "Deep extraction cleaning using professional equipment",
            "Price depends on area, fibre, pile and soiling",
            "Recommended approximately annually at home, more often for heavy-traffic areas"
          ],
          "process": {
            "intro": "Our professional extraction method sprays water mixed with a cleaning solution into the carpet fibres and immediately extracts the liquid together with loosened dirt. High suction power helps leave carpets damp rather than saturated.",
            "steps": [
              {
                "title": "Preparation and dry vacuuming",
                "text": "We thoroughly dry-vacuum the carpet before extraction. This is included in the cleaning price."
              },
              {
                "title": "Deep extraction",
                "text": "Cleaning solution is injected into the carpet fibres to loosen embedded dirt."
              },
              {
                "title": "Immediate recovery",
                "text": "A professional extractor immediately removes the solution and dirt. Heavily soiled areas may require repeated passes."
              },
              {
                "title": "Drying and inspection",
                "text": "Low-pile carpets often dry in about 2–3 hours; deeper pile or heavily soiled carpets can take 3–5 hours. Temperature and ventilation matter."
              }
            ],
            "included": [
              "Dry vacuuming included",
              "Fitted carpets and area rugs",
              "Repeated extraction passes as needed",
              "Assessment of pile, material and soiling"
            ],
            "limitations": "Wear, fading and long-standing stains may prevent a like-new result. We discuss realistic expectations before cleaning.",
            "technique": "We use professional TRON extraction equipment. The original site describes the LAVATRON 50 model with two suction turbines, a 15-litre solution tank and a 50-litre stainless-steel recovery tank.",
            "recommendedFrequency": "Usually once a year in homes, and once or twice a year in busy offices, corridors and hospitality venues.",
            "serviceContext": "Homes, schools, nurseries, offices, shops, restaurants, hotels and other commercial premises."
          }
        },
        {
          "key": "upholstery",
          "title": "Sofa and upholstery cleaning",
          "text": "Deep extraction cleaning of fabric sofas, armchairs, chairs, office chairs, stools and mattresses. Typical drying time is 3–6 hours.",
          "details": [
            "Fabric upholstery only where extraction cleaning is permitted by the manufacturer",
            "Special upholstery tools reach corners and edges",
            "Drying depends on fabric, temperature and ventilation"
          ],
          "process": {
            "intro": "We deep-clean suitable fabric upholstery using the extraction method, with a specialist nozzle designed to reach seams, corners and difficult areas of sofas and chairs.",
            "steps": [
              {
                "title": "Inspect the material",
                "text": "We assess fabric condition, wear and staining. We only use extraction on textiles that permit it."
              },
              {
                "title": "Dry vacuuming",
                "text": "Dust and loose debris are removed before wet cleaning, at no extra charge."
              },
              {
                "title": "Spray and extract",
                "text": "A specialist nozzle applies cleaning solution and immediately extracts it with loosened dirt. Stained areas may require repeated treatment."
              },
              {
                "title": "Drying",
                "text": "An average sofa takes around an hour to clean, followed by about 3–6 hours of drying depending on fabric, temperature and ventilation."
              }
            ],
            "included": [
              "Dry vacuuming included",
              "Fabric sofas, armchairs, stools, chairs and office chairs",
              "Suitable mattresses can be cleaned on both sides",
              "Specialist nozzle for seams and tight areas"
            ],
            "limitations": "Leather and fabrics whose manufacturers prohibit extraction are excluded. Wear, fading and permanent stains may remain; we explain likely results beforehand.",
            "technique": "Powerful extraction equipment with a dedicated upholstery nozzle also cleans somewhat beneath the surface. The original website mentions recovery of up to 90% of applied water; actual recovery varies with the fabric and conditions.",
            "recommendedFrequency": "Frequency depends on use and fabric condition; ask us about stains as soon as possible.",
            "serviceContext": "Homes, offices, chairs, mattresses and suitable textile upholstery."
          }
        },
        {
          "key": "windows",
          "title": "Window, shopfront and blind cleaning",
          "text": "Windows for homes, offices, shops, schools and residential buildings, including frames and sills; shopfronts and blinds are also available.",
          "details": [
            "Regular and post-construction window cleaning",
            "Protected floors and surrounding surfaces",
            "Charges depend on the total cleaned surface, accessibility and soiling"
          ],
          "process": {
            "intro": "Window cleaning goes beyond the glass. Depending on the agreed service, we also clean frames, sills, blinds and shopfront glazing.",
            "steps": [
              {
                "title": "Assess the job",
                "text": "We check window type, the number of sides to be cleaned, accessibility, frame details and soiling."
              },
              {
                "title": "Protect the surroundings",
                "text": "We protect nearby floors and walls and prepare professional applicators and squeegees."
              },
              {
                "title": "Wash and squeegee",
                "text": "We work systematically across glass, frames and sills as agreed."
              },
              {
                "title": "Final check",
                "text": "We inspect for visible streaks and complete any included blinds or shopfront work."
              }
            ],
            "included": [
              "Glass, frames and sills as agreed",
              "Modern and traditional box-frame windows",
              "Post-renovation window washing",
              "Horizontal and vertical blinds when ordered"
            ],
            "limitations": "Pricing counts all washed surfaces including frames. High-level or difficult access requires an individual arrangement.",
            "technique": "Professional applicators and squeegees. The original site also describes arranging high-level window cleaning using rope-access methods.",
            "recommendedFrequency": "Shopfronts are often cleaned every two weeks or monthly; other schedules are agreed individually.",
            "serviceContext": "Homes, shops, offices, schools, hotels and residential buildings."
          }
        },
        {
          "key": "buildings",
          "title": "Cleaning shared areas of apartment buildings",
          "text": "Regular cleaning of shared spaces for homeowners’ associations, housing cooperatives and property owners; tailored to the building.",
          "details": [
            "Weekly stairways, corridors, entrances, lifts and mats",
            "Optional monthly railings, basements and letterboxes",
            "Windows, sills and light fittings can be cleaned twice a year"
          ],
          "process": {
            "intro": "We tailor shared-area cleaning to the specific building and agree the schedule with the homeowners' association, cooperative or property manager.",
            "steps": [
              {
                "title": "Inspect the premises",
                "text": "We assess floors, entrances, lifts and shared facilities."
              },
              {
                "title": "Agree regular tasks",
                "text": "We set intervals for sweeping and mopping corridors and stairs, cleaning lifts, entrances and mats."
              },
              {
                "title": "Schedule periodic jobs",
                "text": "Railings, letterboxes, basements, sills, windows and lighting can be included at suitable intervals."
              },
              {
                "title": "Document the scope",
                "text": "The tasks and frequency are written into the quote or service agreement."
              }
            ],
            "included": [
              "Entrances, stairwells, corridors and lifts",
              "Sweeping and mopping",
              "Railings and other shared surfaces as agreed",
              "Scheduled window washing when included"
            ],
            "limitations": "Frequency and inclusions are agreed individually rather than assumed as a fixed package.",
            "technique": "A tailored routine distinguishing weekly, monthly and seasonal tasks.",
            "recommendedFrequency": "According to the agreed schedule; windows and low-traffic spaces usually less often.",
            "serviceContext": "Homeowners' associations, housing cooperatives and property managers."
          }
        },
        {
          "key": "cars",
          "title": "Car interior cleaning",
          "text": "On-site vehicle interior cleaning, including passenger cars, SUVs, MPVs, vans and campers, subject to the agreed scope.",
          "details": [
            "Fabric seats and door trims, carpeting and boot",
            "Plastic trim treatment and interior glass",
            "Typical drying time around three hours"
          ],
          "process": {
            "intro": "We clean vehicle interiors at the customer's chosen location. Depending on the agreed package, the work covers deep fabric extraction as well as hard-surface detailing.",
            "steps": [
              {
                "title": "Inspect and vacuum",
                "text": "We assess soiling and vacuum accessible seats, flooring and the boot."
              },
              {
                "title": "Extract fabric dirt",
                "text": "We deep-clean suitable front and rear fabric seats, headrests, door trims and carpets."
              },
              {
                "title": "Interior details",
                "text": "As agreed, we clean and protect plastics, door jambs and interior glass."
              },
              {
                "title": "Dry and hand over",
                "text": "We advise on drying, often around three hours depending on weather, ventilation and materials."
              }
            ],
            "included": [
              "Fabric seats and headrests",
              "Carpets, mats and boot",
              "Fabric door trims",
              "Plastics, door jambs and glass as agreed"
            ],
            "limitations": "Price depends on vehicle size and condition. Drying time varies; the exact scope is agreed before work begins.",
            "technique": "Professional high-suction extraction for textiles followed by cleaning and treatment of interior surfaces.",
            "recommendedFrequency": "Regular cleaning is especially useful after the winter season and everyday heavy use.",
            "serviceContext": "Passenger cars, SUVs, MPVs, vans, buses and campers."
          }
        }
      ],
      "about": {
        "title": "Personal, careful service since 1998",
        "text": "Customer satisfaction is at the heart of our work. We use professional extraction machines and tested cleaning products, tailor each job to the customer and can offer a volume discount when several services are combined.",
        "principles": [
          "Personal service and practical advice",
          "Homes, businesses, public and non-profit organisations",
          "The business states that it is not VAT-registered; travel is charged separately",
          "Combined services and individual quotes available",
          "We care about your satisfaction with the result"
        ]
      },
      "coverage": {
        "title": "Service area",
        "cities": [
          "Kladno",
          "Praha",
          "Slaný",
          "Rakovník",
          "Beroun"
        ],
        "text": "Other locations in Central Bohemia are possible; availability and travel charges are confirmed before booking."
      },
      "pricing": {
        "title": "Service price list",
        "intro": "Our cleaning service rates. For large or recurring jobs, we will prepare a tailored quote.",
        "currency": "CZK",
        "items": [
          {
            "label": "Window cleaning including frames",
            "price": "CZK 35/m²"
          },
          {
            "label": "Post-renovation window cleaning",
            "price": "CZK 45/m²"
          },
          {
            "label": "Shopfront cleaning",
            "price": "CZK 20/m²"
          },
          {
            "label": "Heavily soiled shopfronts",
            "price": "CZK 30/m²"
          },
          {
            "label": "Domestic carpet cleaning",
            "price": "CZK 40/m²"
          },
          {
            "label": "Area rug cleaning",
            "price": "CZK 350/item"
          },
          {
            "label": "Office carpet cleaning",
            "price": "From CZK 30/m²"
          },
          {
            "label": "Sofa upholstery cleaning",
            "price": "CZK 275/seat"
          },
          {
            "label": "Upholstered armchair",
            "price": "CZK 300/item"
          },
          {
            "label": "Upholstered chair",
            "price": "CZK 50/item"
          },
          {
            "label": "Mattress cleaning",
            "price": "CZK 100/m²"
          },
          {
            "label": "Horizontal blinds",
            "price": "CZK 30/m²"
          },
          {
            "label": "Vertical fabric blinds",
            "price": "CZK 95/m²"
          },
          {
            "label": "Car interior cleaning",
            "price": "From CZK 1,000"
          },
          {
            "label": "Shared-building cleaning",
            "price": "From CZK 1,600/month, depending on scope"
          }
        ],
        "transport": [
          {
            "label": "Kladno",
            "price": "CZK 100"
          },
          {
            "label": "Prague",
            "price": "CZK 200 flat rate"
          },
          {
            "label": "Other Central Bohemian locations",
            "price": "CZK 8/km"
          }
        ],
        "note": "The minimum charge for a one-off job is CZK 1,500. Prices are final; we are not VAT-registered. Travel is charged separately depending on location. The scope and final cost are agreed in advance."
      },
      "faq": [
        {
          "question": "How far ahead should I book?",
          "answer": "Early bookings are recommended in spring and before Christmas. Short-notice appointments may be possible."
        },
        {
          "question": "How long do carpets take to dry?",
          "answer": "Usually about 2–5 hours, depending on pile, soiling, temperature and ventilation."
        },
        {
          "question": "How long does a sofa take to dry?",
          "answer": "Generally about 3–6 hours, depending on the fabric and ventilation."
        },
        {
          "question": "Do you work weekends and public holidays?",
          "answer": "The original website says yes, without a surcharge; please confirm availability."
        },
        {
          "question": "How is carpet cleaning priced?",
          "answer": "By the area actually cleaned, material and soiling; areas beneath furniture that is not moved are excluded."
        },
        {
          "question": "How are windows measured?",
          "answer": "Each washed side including frames counts towards the cleaned surface."
        },
        {
          "question": "Can I combine services?",
          "answer": "Yes. Combining carpet, upholstery and window cleaning may qualify for a tailored quote."
        },
        {
          "question": "Are your prices final?",
          "answer": "The original site states the business is not VAT-registered and does not charge hidden fees. Travel is extra; reconfirm the final price before booking."
        }
      ],
      "references": {
        "title": "Selected clients",
        "intro": "A selection of clients we have provided cleaning services for.",
        "items": [
          {
            "name": "SOŠ a SOU U Hvězdy, Kladno",
            "service": "Regular window cleaning"
          },
          {
            "name": "Zařízení sociální intervence, Kladno",
            "service": "Carpet cleaning, general cleaning and window washing"
          },
          {
            "name": "Galerie Langhans, Praha",
            "service": "Deep cleaning"
          },
          {
            "name": "Stavební bytové družstvo Praha 6",
            "service": "Carpet and window cleaning"
          },
          {
            "name": "Pečovatelská služba Fontána, Kladno",
            "service": "Carpet cleaning and general cleaning"
          },
          {
            "name": "Odborné učiliště a Praktická škola Kladno–Vrapice",
            "service": "Window washing and deep cleaning"
          },
          {
            "name": "Real Satis, Kladno",
            "service": "Regular daily cleaning"
          },
          {
            "name": "Pedagogicko-psychologická poradna Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "Muller-Technik CZ, Tuchlovice",
            "service": "Carpet cleaning"
          },
          {
            "name": "Radava SC, Praha",
            "service": "Carpet cleaning"
          },
          {
            "name": "Bess MM, Praha 9",
            "service": "Carpet cleaning"
          },
          {
            "name": "Dartin, Horoměřice",
            "service": "Window and carpet cleaning"
          },
          {
            "name": "Středisko ROSA Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "Bytové družstvo BRONZ, Praha",
            "service": "Window cleaning"
          },
          {
            "name": "Matex, Kladno",
            "service": "Shopfront window cleaning"
          },
          {
            "name": "Advokátní kancelář Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "IB corp., Kladno",
            "service": "Regular cleaning"
          },
          {
            "name": "Futurum Direkt marketing, Praha 8",
            "service": "Carpet cleaning"
          },
          {
            "name": "Lidl ČR, provozovna Nové Strašecí",
            "service": "Shopfront window cleaning"
          },
          {
            "name": "Modrá pyramida, pobočka Kladno",
            "service": "Carpet cleaning, shopfront washing and general cleaning"
          },
          {
            "name": "Luka Consult CZ",
            "service": "Listed client; service not specified"
          },
          {
            "name": "SVJ Vodárenská 2323, Kladno",
            "service": "Regular cleaning"
          },
          {
            "name": "SVJ Litevská 2605, Kladno",
            "service": "Cleaning and window washing"
          },
          {
            "name": "Společenství Helsinská, Kladno",
            "service": "Regular cleaning"
          },
          {
            "name": "SVJ Brněnská 3064–3065, Kladno",
            "service": "Cleaning and window washing"
          },
          {
            "name": "SVJ Na Vyhaslém 3176–3177, Kladno",
            "service": "Regular cleaning"
          },
          {
            "name": "Zuckerstein, Praha 6",
            "service": "Regular residential property cleaning"
          },
          {
            "name": "SVJ Na Petynce / Rezidence Kajetánka I, Praha",
            "service": "Regular cleaning"
          },
          {
            "name": "Anglický klub Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "IDEA4U / Bowling Central Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "Jan Zima",
            "service": "Regular filling-station window washing"
          },
          {
            "name": "VCHD Cargo",
            "service": "Carpet cleaning"
          },
          {
            "name": "BOHEMIA PLAST Group",
            "service": "Carpet cleaning"
          },
          {
            "name": "Advokátní kancelář Kindl Výborčík, Kladno",
            "service": "Carpet cleaning"
          },
          {
            "name": "SVJ Maďarská blok 16, Kladno",
            "service": "Regular cleaning"
          },
          {
            "name": "Ortoptika Kladno",
            "service": "Regular window and shopfront washing"
          },
          {
            "name": "MŠ Slaný, Vítězná 1578",
            "service": "Carpet and upholstery cleaning"
          },
          {
            "name": "ZŠ Montessori, Pařížská, Kladno",
            "service": "Carpet and upholstery cleaning"
          },
          {
            "name": "Smart Accounts",
            "service": "Window washing and office cleaning"
          }
        ]
      },
      "contact": {
        "title": "Request a cleaning appointment or a quote",
        "text": "Call or email with the type of cleaning, location and approximate scope. We will discuss the approach, indicative price and availability.",
        "phoneLabel": "Call",
        "emailLabel": "Send an email"
      },
      "footer": {
        "copyright": "Aleš Zeman"
      },
      "personalMessage": {
        "title": "A thank-you to my loyal customers",
        "eyebrow": "A personal note from Aleš Zeman",
        "paragraphs": [
          "I would like to thank everyone who has returned to me and entrusted me with cleaning their homes and workplaces over the years. Your trust means a great deal to me, and I take that responsibility seriously.",
          "I have known many of you for a long time. Over the years we have shared more than conversations about cleaning: we have talked about life's joys and difficulties. Some of you have also listened to me and offered help when I needed it. I am deeply grateful for that.",
          "Time passes, but I will continue doing my best to earn your satisfaction and your trust. Thank you for your loyalty, your openness and the personal connections our work has made possible."
        ],
        "signature": "Aleš Zeman",
        "sourceUrl": "https://uklidove-firmy-az.estranky.cz/",
        "editorialNote": "Faithful English adaptation of the personal thank-you on the original website, not a word-for-word transcript."
      },
      "personalValues": {
        "title": "What matters to me",
        "items": [
          {
            "title": "Trust",
            "text": "Long-standing customer relationships matter more to me than a single job."
          },
          {
            "title": "Care in my work",
            "text": "I try to choose the right method for every job, explain the possibilities and deliver my best work."
          },
          {
            "title": "Openness",
            "text": "Before cleaning, I explain any wear and tear and what results can realistically be expected."
          },
          {
            "title": "Helping others",
            "text": "Please help those who really need it."
          }
        ]
      },
      "reviewSources": {
        "title": "Customer reviews",
        "intro": "Read customer feedback on independent review platforms.",
        "items": [
          {
            "title": "Firmy.cz / Mapy.com",
            "url": "https://www.firmy.cz/detail/1326239-cisteni-kobercu-a-sedacek-ales-zeman-kladno.html",
            "description": "Customer ratings and feedback"
          },
          {
            "title": "NejŘemeslníci.cz",
            "url": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "description": "Customer reference archive"
          }
        ]
      },
      "customerTestimonials": {
        "title": "What customers say about our work",
        "intro": "Customer experiences originally published on NejŘemeslníci.cz. English translations are provided for convenience.",
        "items": [
          {
            "id": "nejremeslnici-01",
            "title": "Čištění koberců, sedačky a matrace",
            "quote": "Excellent service. I will definitely use it again.",
            "originalQuote": "Perfektní servis, určitě v budoucnu využiju znovu.",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-02",
            "title": "Čištění sedací soupravy",
            "quote": "Everything went well. The sofa was cleaned quickly and thoroughly.",
            "originalQuote": "Vše v pořádku. Sedačka rychle a kvalitně vyčištěna.",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-03",
            "title": "Opakované čištění koberců, sedačky, matrací a oken",
            "quote": "I have booked Mr Zeman several times to clean carpets, upholstery, mattresses and windows. His results, precision and friendly communication have exceeded my expectations. I have also been pleasantly surprised by the price. I am very satisfied and recommend him.",
            "originalQuote": "Už několikrát jsem si pana Zemana objednala na čištění koberců,sedačky,matrací i mytí oken a byla jsem nad očekávání mile překvapena. Jak s výsledkem, precizností, domluvou, vždy je velice příjemný a milý. Nakonec mě vždy mile překvapí i cena. Jsem velice spokojená a mohu jen doporučit.",
            "rating": null,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-04",
            "title": "Čištění koberců a čalounění",
            "quote": "Mr Zeman offered the earliest available appointment, arrived on time and did excellent work. He even removed an unpleasant stain from my carpet. He saved me considerable effort for a very reasonable price. Highly recommended.",
            "originalQuote": "Pan Zeman mi dal nejkratší možný termín, dorazil na čas, výborně odvedl práci, dokonce se mu podařilo zbavit můj koberec nehezkého fleku,který mě opravdu trápil. Ušetřil mi spoustu dřiny za velmi slušnou cenu. Mohu jen doporučit. Za mě naprostá spokojenost.",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": true,
            "supplierReply": "Thank you for your order, your trust and especially for reviewing my work. I truly appreciate it and am glad you are satisfied with the result. I wish you health, strength and energy for your demanding work, and thank you for helping others. I admire what you do."
          },
          {
            "id": "nejremeslnici-05",
            "title": "Mytí oken",
            "quote": "The windows were spotless in two and a half hours. Mr Zeman is a true professional — punctual, reliable and helpful. The price was fair. Thank you!",
            "originalQuote": "Za 2,5 hodiny byla okna v perfektním stavu. Pan Zeman je navíc skutečným profesionálem - přesný, spolehlivý a vstřícný. Cena byla určitě odpovídající. Děkujeme!",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-06",
            "title": "Čištění koberců a sedačky",
            "quote": "I was extremely satisfied with Mr Zeman! Friendly, helpful, quick, punctual and hardworking. I highly recommend him. Thank you. — Soňa Pavlíčková",
            "originalQuote": "S panem Zemanem jsem byla opravdu velice spokojena!Příjemný,milý,vstřícný,rychlý,dochvilný a pracovitý,Všem opravdu velice doporučuji.Byla jsem opravdu velice spokojena.Děkuji Pavlíčková Soňa",
            "rating": 5,
            "author": "Soňa Pavlíčková",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-07",
            "title": "Čištění koberců v domě",
            "quote": "Everything went as agreed. Mr Zeman answered all my questions and explained everything. We are delighted with the result and would book him again. Highly recommended.",
            "originalQuote": "vše proběhlo tak, jak jsme se domluvili, pan Zeman mi vše zodpověděl a vysvětlil, z výsledku jsme nadšeni, v budoucnu bych si ho určitě objednala znovu, mohu jen doporučit",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-08",
            "title": "Čištění koberců a sedačky",
            "quote": "I am very satisfied: everything was cleaned, the price was as agreed and the communication was excellent. I will use his services again and strongly recommend Mr Zeman!",
            "originalQuote": "Celkově jsem moc spokojený, vyčištěno, cena dle domluvy a jednání super. Takže služby budu do budoucna určitě využívat a opravdu p. Zemana DOPORUČUJI !!!",
            "rating": 4.3,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-09",
            "title": "Čištění rohového gauče, křesla a taburetů",
            "quote": "Communication was pleasant, the work was done perfectly, the appointment was kept and the agreed price was honoured. Satisfied.",
            "originalQuote": "Jednání bylo příjemné.Práce byla provedena perfektně.. Termín dodržen. Částka k zhaplacení také dodržena - spokojenost.",
            "rating": 5,
            "author": "Ilona Štorkánová",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-10",
            "title": "Čištění koberců",
            "quote": "Recommended.",
            "originalQuote": "Doporučuji",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-11",
            "title": "Čištění sedací soupravy",
            "quote": "I was very satisfied.",
            "originalQuote": "Byla jsem velice spokojená",
            "rating": 5,
            "author": "Plochová",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-12",
            "title": "Čištění sedací soupravy",
            "quote": "Mr Zeman was kind and helpful. We arranged the quote and appointment quickly. He arrived on time, inspected the sofa and explained that some stains might remain. He protected the floor during cleaning, finished in about an hour and the sofa was dry by the next day. Some marks remained as expected, but I was satisfied, and he even reduced the agreed price. I definitely recommend him.",
            "originalQuote": "Pan Zeman byl velmi milý, ochotný. Domluva byla rychlá, kalkulaci mi poslal do druhého dne, termín jsme našli rychle. Přijel načas, gauč si nejdříve prohlédl a upozornil, že některé skvrny nejspíš zůstanou. Během čištění dával pozor, aby voda netekla po podlaze. Celá návštěva trvala asi hodinu. Úplně suchá byla sedačka do druhého dne. S výsledkem jsem spokojená, i když opravdu několik fleků zůstalo. S tím jsem ale byla smířená předem, protože máme světlou barvu a dvouleté dítě. Nakonec mě pan Zeman potěšil celkem výrazným snížením dohodnuté ceny. Jednoznačně doporučuji.",
            "rating": null,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-13",
            "title": "Čištění koberců a sedačky",
            "quote": "I am very satisfied. Mr Zeman is friendly and helpful, and the work was of very high quality. I will definitely book again. Thank you. — Tomašovičová",
            "originalQuote": "Jsem velice spokojena,pan Zeman je velice příjemný a ochotný.Práce odvedena velice kvalitně, určitě si firmu zase objednám. Zde je vidět že jsou lidé na správném místě, děkuji Tomašovičová,",
            "rating": 5,
            "author": "Tomašovičová",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-14",
            "title": "Strojové čištění koberců",
            "quote": "Very satisfied, highly recommended.",
            "originalQuote": "super spokojenost můžu doporučit",
            "rating": 5,
            "author": "Lukašova",
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-15",
            "title": "Čištění koberců, oken a sedačky",
            "quote": "Absolutely satisfied. Precise work: carpet and window cleaning met our expectations, and the sofa looks like new. The agreed time was kept and the price was even lower than quoted. We warmly recommend the service.",
            "originalQuote": "Naprostá spokojenost, precizně provedená práce, čištění koberců i mytí oken splnilo naše očekávání, sedací souprava je rovněž jako nová. Termín i čas byl dodržen, cena byla dokonce nižší, než dohodnutá. Celkově jsme velmi spokojeni, můžeme vřele doporučit.",
            "rating": null,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          },
          {
            "id": "nejremeslnici-16",
            "title": "Pravidelné čištění koberců a čalounění",
            "quote": "I have used and recommended this cleaning business for several years and have always been satisfied with the quality. Appointments and prices were honoured. Mr Zeman's business has always stood for quality and reliability for me and my acquaintances.",
            "originalQuote": "Úklidovou firmu používám a doporučuji již několik let, vždy jsem velmi spokojena s kvalitou práce. Termín byl dodržen a cena taktéž.Úklidová firma pana Aleše Zemana vždy pro mě a mé známé byla známkou vysoké kvality a serióznosti.",
            "rating": 5,
            "author": null,
            "source": "NejŘemeslníci.cz",
            "sourceUrl": "https://www.nejremeslnici.cz/profil/19802-ales-zeman",
            "verifiedByPlatform": false,
            "supplierReply": null
          }
        ]
      },
      "equipment": {
        "title": "Our professional equipment",
        "text": "For carpets and upholstery we use professional high-suction extraction machines. Our original website describes TRON equipment, including the LAVATRON 50: two suction turbines, a 15-litre solution tank and a 50-litre stainless-steel recovery tank. This method loosens dirt within fibres and extracts used solution continuously. We select appropriate tested cleaning products.",
        "note": "We choose the equipment and procedure based on the material, access and degree of soiling."
      },
      "ui": {
        "nav": {
          "services": "Services",
          "process": "How we work",
          "references": "References",
          "pricing": "Pricing",
          "about": "About",
          "contact": "Contact"
        },
        "skipToContent": "Skip to content",
        "menuOpen": "Open menu",
        "menuClose": "Close menu",
        "languageSwitch": "Language",
        "languageNames": {
          "cs": "Čeština",
          "en": "English"
        },
        "serviceDetailCta": "Detailed process",
        "backToServices": "Back to services",
        "processTitle": "Cleaning process",
        "techniqueTitle": "Equipment",
        "includedTitle": "What is included",
        "limitationsTitle": "Good to know",
        "frequencyTitle": "Recommended frequency",
        "contextTitle": "Who we serve",
        "detailsTitle": "Key details",
        "stepLabel": "Step",
        "pricingCta": "View pricing",
        "otherServices": "Other services",
        "testimonialsAll": "All customer experiences",
        "testimonialsFeatured": "Selected experiences",
        "ratingLabel": "Rated {rating} out of 5",
        "taskLabel": "Job",
        "anonymousAuthor": "Customer",
        "supplierReplyLabel": "Reply from Aleš Zeman",
        "verifiedLabel": "Verified by platform",
        "sourceLabel": "Source",
        "sourceNote": "Excerpts are translated from a public profile. Not all reviews are verified by the platform.",
        "referencesNote": "A historical selection of organisations we have worked for.",
        "pricingServicesTitle": "Services",
        "pricingTransportTitle": "Transport",
        "faqTitle": "Frequently asked questions",
        "addressLabel": "Address",
        "companyIdLabel": "Company ID",
        "serviceAreaLabel": "Service area",
        "notFoundTitle": "Page not found",
        "homeLink": "Back to home",
        "externalLinkNote": "opens in a new window"
      }
    }
  },
  "pricing": {
    "enabled": false,
    "base": {},
    "management": {}
  },
  "payment": {
    "enabled": false,
    "provider": "",
    "product": "",
    "amount": null,
    "currency": "",
    "url": "",
    "visibility": "approved-clients-only",
    "approvalRequired": true,
    "publicCta": false
  },
  "addons": {
    "enabled": false,
    "items": []
  },
  "portfolio": {
    "enabled": false,
    "items": []
  },
  "stats": {
    "enabled": false,
    "items": []
  },
  "legal": {
    "privacy": {
      "enabled": false,
      "path": "/privacy"
    },
    "cookies": {
      "enabled": false,
      "path": "/cookies"
    },
    "terms": {
      "enabled": false,
      "path": "/terms"
    }
  },
  "internal": {
    "sourceOfTruth": "content.md is authoritative for public content, translations, metadata and asset references.",
    "contentGeneration": {
      "generateSeoFromContent": false,
      "generateAiReadableContent": false,
      "generateLlmsTxt": false,
      "generateSitemap": false,
      "generateJsonLd": false,
      "canonicalUsesProductionDomain": true
    },
    "development": {
      "indexing": false,
      "robots": "noindex, nofollow",
      "includeInSitemap": false,
      "generateSeoOutputs": false
    },
    "contentResponsibility": {
      "clientApprovesAccuracy": true,
      "clientConfirmsRightsToMedia": true
    },
    "hosting": {
      "httpsRequired": true
    },
    "cookies": {
      "defaultEnabled": false,
      "enableWhenRequiredByTrackingOrAnalytics": true
    },
    "contentAudit": {
      "sourceWebsite": "https://uklidove-firmy-az.estranky.cz/",
      "reviewedDate": "2026-10-31",
      "pagesReviewed": [
        "/",
        "/clanky/cisteni-kobercu-praha-kladno.html",
        "/clanky/cisteni-sedacek-praha-kladno.html",
        "/clanky/myti-oken-praha-kladno.html",
        "/clanky/uklid-spolecnych-prostor-bytovych-domu.html",
        "/clanky/cisteni-interieru-aut-praha-kladno.html",
        "/clanky/cenik.html",
        "/clanky/nejcastejsi-dotazy.html",
        "/clanky/nasi-zakaznici.html",
        "/clanky/kontakty.html"
      ],
      "needsClientConfirmation": [
        "Permission to republish named customer references and original photos",
        "Current availability and scope of niche services, including high-level window washing",
        "Validity and terms of the satisfaction guarantee"
      ],
      "assetStatus": "Photos from the original site have not been copied; approvedImages stays empty until rights and source files are confirmed.",
      "pricingDecision": "2026-10-31: Client-facing proposal uses the higher values of the historical published ranges, a CZK 1,500 one-off minimum and the highest published Kladno transport charge. These are the proposed production rates, amendable during customer review.",
      "personalCopy": {
        "sourceSection": "Homepage: Poděkování stálým zákazníkům, signed Aleš Zeman",
        "sourceUrl": "https://uklidove-firmy-az.estranky.cz/",
        "handling": "Separate CZ/EN personalMessage and personalValues; faithful editorial adaptation, not verbatim reproduction; preserve personal first-person tone.",
        "integrationRequired": "Website frontend should render personalMessage and personalValues as dedicated sections."
      },
      "registryAndReviews": {
        "checkedOn": "2026-10-31",
        "companyId": "65252870",
        "matchedDirectoryDetails": "Aleš Zeman, Poděbradova 3213, 272 01 Kladno, +420 608 147 779",
        "officialRegistryStatus": "Official ARES record could not be retrieved; business activity and VAT registry not independently verified against official live registry.",
        "directoryEvidence": [
          "https://www.firmy.cz/detail/1326239-cisteni-kobercu-a-sedacek-ales-zeman-kladno.html",
          "https://www.cechy-net.cz/ales-zeman"
        ],
        "reviewEvidence": [
          "Firmy.cz / Mapy.com: 7 reviews, 5.0/5 visible at check",
          "NejŘemeslníci.cz: 22 references, listing paused"
        ],
        "facebook": "No attributable official Facebook profile found; leave business.social.facebook empty.",
        "note": "Dynamic counts are not hardcoded in public copy. Link to original review platforms."
      },
      "customerTestimonials": {
        "addedOn": "2026-10-31",
        "count": 16,
        "source": "User-uploaded screenshots of NejŘemeslníci.cz customer reviews",
        "notes": "Quotes transcribed from screenshots, original typos retained; EN versions are translations. Ratings only where visible. No photos available. One supplier response and one platform verified label visible. Do not present all as platform verified."
      },
      "technicalServiceDetail": {
        "updatedOn": "2026-10-31",
        "sourceUrls": [
          "https://uklidove-firmy-az.estranky.cz/",
          "https://uklidove-firmy-az.estranky.cz/clanky/cisteni-kobercu-praha-kladno.html",
          "https://uklidove-firmy-az.estranky.cz/clanky/cisteni-sedacek-praha-kladno.html",
          "https://uklidove-firmy-az.estranky.cz/clanky/myti-oken-praha-kladno.html",
          "https://uklidove-firmy-az.estranky.cz/clanky/uklid-spolecnych-prostor-bytovych-domu.html",
          "https://uklidove-firmy-az.estranky.cz/clanky/cisteni-interieru-aut-praha-kladno.html"
        ],
        "rendering": "Each service now has process.intro, process.steps, process.included, process.limitations, process.technique, process.recommendedFrequency, process.serviceContext; frontend must render these from content.md. equipment is shared cross-service content.",
        "quality": "No absolute guarantees of stain, mite or allergen removal; historic equipment details retained as sourced."
      }
    }
  }
}
`),Z=X.site.fallbackLanguage??`cs`,Ae=X.site.languages,Q=e=>typeof e==`string`&&Ae.includes(e),$=e=>X.public[e]??X.public[Z];$(Z);var je=`tel:${X.business.phone.replace(/\s/g,``)}`,Me=`mailto:${X.business.email}`,Ne=X.business.phone.replace(`+420 `,``),Pe=(e,t)=>$(e).services.find(e=>e.key===t);function Fe(e,t=4){let n=e.filter(e=>e.supplierReply),r=e.filter(e=>!e.supplierReply&&e.quote.length>60).sort((e,t)=>t.quote.length-e.quote.length);return[...n,...r].slice(0,t)}var Ie=Object.assign({"/assets/Logo Aleš Zeman – Profesionální čištění.png":`/assets/Logo%20Ales%CC%8C%20Zeman%20%E2%80%93%20Profesiona%CC%81lni%CC%81%20c%CC%8Cis%CC%8Cte%CC%8Cni%CC%81-B8WRpbby.png`,"/assets/Modrá ikona domu s úklidovým motivem.png":`/assets/Modra%CC%81%20ikona%20domu%20s%20u%CC%81klidovy%CC%81m%20motivem-B1-TTk5v.png`,"/assets/cleaning_professional_working_34302_Kling_30_.mp4":`/assets/cleaning_professional_working_34302_Kling_30_-meOjIvGg.mp4`});function Le(e){if(e)return Ie[`/${e.replace(/^\/+/,``)}`]}var Re=`zeman-lang`,ze=(0,V.createContext)({lang:Z,setLang:()=>{}});function Be(){let e=ke({select:e=>e.location.search.lang});return Q(e)?e:void 0}function Ve({children:e}){let t=Be(),n=he(),[r,i]=(0,V.useState)(void 0);(0,V.useEffect)(()=>{if(t)return;let e=window.localStorage.getItem(Re);if(Q(e))return i(e);let n=navigator.languages?.find(e=>Q(e.slice(0,2)));n&&i(n.slice(0,2))},[t]);let a=t??r??Z;return(0,V.useEffect)(()=>{document.documentElement.lang=a},[a]),(0,H.jsx)(ze.Provider,{value:{lang:a,setLang:e=>{window.localStorage.setItem(Re,e),i(e),n({to:`.`,search:t=>({...t,lang:e===Z?void 0:e}),hash:e=>e??``,replace:!0})}},children:e})}function He(){let e=(0,V.useContext)(ze);return{...e,copy:$(e.lang),ui:$(e.lang).ui}}export{A,a as B,U as C,N as D,D as E,c as F,p as G,s as H,w as I,y as J,i as K,f as L,k as M,_ as N,I as O,E as P,T as R,ne as S,L as T,o as U,v as V,b as W,r as X,u as Y,me as _,Z as a,W as b,Pe as c,Me as d,je as f,he as g,De as h,Le as i,O as j,M as k,Q as l,X as m,He as n,Fe as o,Ne as p,l as q,Be as r,$ as s,Ve as t,Ae as u,G as v,B as w,ie as x,ae as y,C as z};