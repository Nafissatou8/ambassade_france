if (self.CavalryLogger) { CavalryLogger.start_js(["l\/XH4"]); }

__d("camelize",[],(function(a,b,c,d,e,f){e.exports=a;var g=/-(.)/g;function a(a){return a.replace(g,function(a,b){return b.toUpperCase()})}}),null);
__d("hyphenate",[],(function(a,b,c,d,e,f){e.exports=a;var g=/([A-Z])/g;function a(a){return a.replace(g,"-$1").toLowerCase()}}),null);
__d("getStyleProperty",["camelize","hyphenate"],(function(a,b,c,d,e,f){e.exports=a;function g(a){return a==null?"":String(a)}function a(a,c){var d;if(window.getComputedStyle){d=window.getComputedStyle(a,null);if(d)return g(d.getPropertyValue(b("hyphenate")(c)))}if(document.defaultView&&document.defaultView.getComputedStyle){d=document.defaultView.getComputedStyle(a,null);if(d)return g(d.getPropertyValue(b("hyphenate")(c)));if(c==="display")return"none"}return a.currentStyle?c==="float"?g(a.currentStyle.cssFloat||a.currentStyle.styleFloat):g(a.currentStyle[b("camelize")(c)]):g(a.style&&a.style[b("camelize")(c)])}}),null);
__d("FBJSON",[],(function(a,b,c,d,e,f){a=JSON.parse;f.parse=a;b=JSON.stringify;f.stringify=b}),null);
__d("BanzaiConsts",[],(function(a,b,c,d,e,f){a={SEND:"Banzai:SEND",OK:"Banzai:OK",ERROR:"Banzai:ERROR",SHUTDOWN:"Banzai:SHUTDOWN",BASIC:"basic",VITAL:"vital",BASIC_WAIT:6e4,BASIC_WAIT_COMET:2e3,VITAL_WAIT:1e3,BATCH_SIZE_LIMIT:64e3,EXPIRY:864e5,BATCH_TIMEOUT:1e4,LAST_STORAGE_FLUSH:"banzai:last_storage_flush",STORAGE_FLUSH_INTERVAL:12*60*6e4,ODS_ROUTE:"categorized_ods",POST_READY:0,POST_INFLIGHT:1,POST_SENT:2};b=a;e.exports=b}),null);
__d("CurrentUser",["Cookie","CurrentUserInitialData"],(function(a,b,c,d,e,f){var g,h={getID:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID},getAccountID:function(){return(g||(g=b("CurrentUserInitialData"))).ACCOUNT_ID},getEmployeeWorkUserID:function(){return(g||(g=b("CurrentUserInitialData"))).WORK_USER_ID},getName:function(){return(g||(g=b("CurrentUserInitialData"))).NAME},getShortName:function(){return(g||(g=b("CurrentUserInitialData"))).SHORT_NAME},isLoggedIn:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID!=="0"},isLoggedInNow:function(){var a;if(!h.isLoggedIn())return!1;if((g||(g=b("CurrentUserInitialData"))).IS_INTERN_SITE)return!0;if((g||(g=b("CurrentUserInitialData"))).IS_WORK_USER||(g||(g=b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER)return!0;return(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=null&&(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=""?(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID===b("Cookie").get("c_user"):(g||(g=b("CurrentUserInitialData"))).USER_ID===((a=b("Cookie").get("i_user"))!=null?a:b("Cookie").get("c_user"))},isEmployee:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_EMPLOYEE},isTestUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_TEST_USER},hasWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).HAS_WORK_USER},isWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_WORK_USER},isGray:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_GRAY},isUnderage:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_UNDERAGE},isMessengerOnlyUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER},isDeactivatedAllowedOnMessenger:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER},isMessengerCallGuestUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER},isBusinessPersonAccount:function(){return(g||(g=b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT},hasSecondaryBusinessPerson:function(){return(g||(g=b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON},getAppID:function(){return(g||(g=b("CurrentUserInitialData"))).APP_ID}};e.exports=h}),null);
__d("BanzaiUtils",["BanzaiConsts","CurrentUser","FBLogger","WebSession","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h,i={canSend:function(a){return a[2]>=(g||(g=b("performanceAbsoluteNow")))()-(h||(h=b("BanzaiConsts"))).EXPIRY},filterPost:function(a,c,d,e){if(e.overlimit)return!0;if(!e.sendMinimumOnePost&&a[4]+e.currentSize>(h||(h=b("BanzaiConsts"))).BATCH_SIZE_LIMIT)return!0;var f=a.__meta;if(f.status!=null&&f.status>=(h||(h=b("BanzaiConsts"))).POST_SENT||!i.canSend(a))return!1;if(f.status!=null&&f.status>=(h||(h=b("BanzaiConsts"))).POST_INFLIGHT)return!0;var g=f.compress!=null?f.compress:!0,j=(f.webSessionId!=null?f.webSessionId:"null")+(f.userID!=null?f.userID:"null")+(f.appID!=null?f.appID:"null")+(g?"compress":""),k=e.wadMap.get(j);k||(k={app_id:f.appID,needs_compression:g,posts:[],user:f.userID,webSessionId:f.webSessionId},e.wadMap.set(j,k),c.push(k));f.status=(h||(h=b("BanzaiConsts"))).POST_INFLIGHT;Array.isArray(k.posts)?k.posts.push(a):b("FBLogger")("banzai").mustfix("Posts were a string instead of array");d.push(a);e.currentSize+=a[4];e.currentSize>=(h||(h=b("BanzaiConsts"))).BATCH_SIZE_LIMIT&&(e.overlimit=!0);return e.keepRetryable&&Boolean(f.retry)},resetPostStatus:function(a){a.__meta.status=(h||(h=b("BanzaiConsts"))).POST_READY},retryPost:function(a,c,d){var e=a;e.__meta.status=(h||(h=b("BanzaiConsts"))).POST_READY;e[3]=(e[3]||0)+1;e.__meta.retry!==!0&&c>=400&&c<600&&d.push(a)},wrapData:function(a,c,d,e,f){d=[a,c,d,0,(a=f)!=null?a:c?JSON.stringify(c).length:0];d.__meta={appID:b("CurrentUser").getAppID(),retry:e===!0,status:(h||(h=b("BanzaiConsts"))).POST_READY,userID:b("CurrentUser").getID(),webSessionId:b("WebSession").getId()};return d}};e.exports=i}),null);
__d("cancelIdleCallback",["requireCond","cr:692209"],(function(a,b,c,d,e,f){a=b("cr:692209");e.exports=a}),null);
__d("IdleCallbackImplementation",["performanceNow","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){f.requestIdleCallback=c;f.cancelIdleCallback=q;var g,h=[],i=0,j=0,k=-1,l=!1,m=1e3/60,n=2;function o(a){return a}function p(a){return a}function c(b,c){var d=j++;h[d]=b;r();if(c!=null&&c.timeout>0){var e=o(d);a.setTimeout(function(){return x(e)},c.timeout)}return o(d)}function q(a){a=p(a);h[a]=null}function r(){l||(l=!0,b("requestAnimationFramePolyfill")(function(a){l=!1,t((g||(g=b("performanceNow")))()-a)}))}function s(a){var b=m-n;if(a<b)return b-a;a=a%m;if(a>b||a<n)return 0;else return b-a}function t(a){var c=(g||(g=b("performanceNow")))();if(c>k){a=s(a);if(a>0){c=c+a;w(c);k=c}}u()&&r()}function u(){return i<h.length}function v(){while(u()){var a=h[i];i++;if(a)return a}return null}function w(a){var c;while((g||(g=b("performanceNow")))()<a&&(c=v()))c(new y(a))}function x(a){var b=p(a);b=h[b];b&&(q(a),b(new y(null)))}var y=function(){function a(a){this.didTimeout=a==null,this.$1=a}var c=a.prototype;c.timeRemaining=function(){var a=this.$1;if(a!=null){var c=(g||(g=b("performanceNow")))();if(c<a)return a-c}return 0};return a}()}),null);
__d("requestIdleCallbackAcrossTransitions",["IdleCallbackImplementation","TimeSlice"],(function(a,b,c,d,e,f){e.exports=c;var g=a.requestIdleCallback||b("IdleCallbackImplementation").requestIdleCallback;function c(c,d){c=b("TimeSlice").guard(c,"requestIdleCallback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});return g.call(a,c,d)}}),null);
__d("SetIdleTimeoutAcrossTransitions",["NavigationMetrics","cancelIdleCallback","clearTimeout","nullthrows","requestIdleCallbackAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";f.start=c;f.clear=d;var g=!1,h=new Map();function c(a,c){if(g){var d=b("setTimeoutAcrossTransitions")(function(){var c=b("requestIdleCallbackAcrossTransitions")(function(){a(),h["delete"](c)});h.set(d,c)},c);return d}else return b("setTimeoutAcrossTransitions")(a,c)}function d(a){b("clearTimeout")(a),h.has(a)&&(b("cancelIdleCallback")(b("nullthrows")(h.get(a))),h["delete"](a))}b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(b,c){c.event==="all_pagelets_loaded"&&(g=!!a.requestIdleCallback)})}),null);
__d("WebStorageMutex",["WebStorage","clearTimeout","pageID","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=null,i=!1,j=b("pageID");function k(){i||(i=!0,h=(g||(g=b("WebStorage"))).getLocalStorage());return h}a=function(){function a(a){this.name=a}a.testSetPageID=function(a){j=a};var c=a.prototype;c.$2=function(){var a,b=k();if(!b)return j;b=b.getItem("mutex_"+this.name);b=((a=b)!=null?a:"").split(":");return b&&parseInt(b[1],10)>=Date.now()?b[0]:null};c.$3=function(a){var c=k();if(!c)return;a=a==null?1e3:a;a=Date.now()+a;(g||(g=b("WebStorage"))).setItemGuarded(c,"mutex_"+this.name,j+":"+a)};c.hasLock=function(){return this.$2()===j};c.lock=function(a,c,d){var e=this;this.$1&&b("clearTimeout")(this.$1);j===(this.$2()||j)&&this.$3(d);this.$1=b("setTimeout")(function(){e.$1=null;var b=e.hasLock()?a:c;b&&b(e)},0)};c.unlock=function(){this.$1&&b("clearTimeout")(this.$1);var a=k();a&&this.hasLock()&&a.removeItem("mutex_"+this.name)};return a}();e.exports=a}),null);
__d("BanzaiStorage",["BanzaiConsts","BanzaiUtils","CurrentUser","FBJSON","SetIdleTimeoutAcrossTransitions","WebSession","WebStorage","WebStorageMutex","isInIframe","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j="bz:",k=b("isInIframe")(),l,m=!1,n=null;function o(){var a="check_quota";try{var b=p();if(!b)return!1;b.setItem(a,a);b.removeItem(a);return!0}catch(a){return!1}}function p(){m||(m=!0,l=(g||(g=b("WebStorage"))).getLocalStorage());return l}a={flush:function(a){if(k)return;var c=p();if(c){n==null&&(n=parseInt(c.getItem((h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH),10));var d=n&&(i||(i=b("performanceAbsoluteNow")))()-n>=(h||(h=b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;d&&a();(d||!n)&&(n=(i||(i=b("performanceAbsoluteNow")))(),(g||(g=b("WebStorage"))).setItemGuarded(c,(h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH,n.toString()))}},restore:function(a){if(k)return;var c=p();if(!c)return;var d=function(d){var e=[];for(var f=0;f<c.length;f++){var g=c.key(f);typeof g==="string"&&g.indexOf(j)===0&&g.indexOf("bz:__")!==0&&e.push(g)}e.forEach(function(d){var e=c.getItem(d);c.removeItem(d);if(e==null||e==="")return;d=b("FBJSON").parse(e);d.forEach(function(c){if(!c)return;var d=c.__meta=c.pop(),e=b("BanzaiUtils").canSend(c);if(!e)return;e=b("CurrentUser").getID();(d.userID===e||e==="0")&&(b("BanzaiUtils").resetPostStatus(c),a(c))})});d&&d.unlock()};o()?new(b("WebStorageMutex"))("banzai").lock(d):b("SetIdleTimeoutAcrossTransitions").start(d,0)},store:function(a){if(k)return;var c=p(),d=a.filter(function(a){var c=a.__meta.status===(h||(h=b("BanzaiConsts"))).POST_SENT;if(!c)return!0;c=a[0]===(h||(h=b("BanzaiConsts"))).ODS_ROUTE&&typeof a[1]==="object"&&(Boolean(a[1]["2887"])||Boolean(a[1]["2979"]));return!c});if(!c||d.length<=0)return;d=d.map(function(a){return[a[0],a[1],a[2],a[3]||0,a[4],a.__meta]});a.splice(0,a.length);(g||(g=b("WebStorage"))).setItemGuarded(c,j+b("WebSession").getId()+"."+(i||(i=b("performanceAbsoluteNow")))(),b("FBJSON").stringify(d))}};e.exports=a}),null);
__d("QueryString",[],(function(a,b,c,d,e,f){function a(a){var b=[];Object.keys(a).sort().forEach(function(c){var d=a[c];if(d===void 0)return;if(d===null){b.push(c);return}b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))});return b.join("&")}function b(a,b){b===void 0&&(b=!1);var c={};if(a==="")return c;a=a.split("&");for(var d=0;d<a.length;d++){var e=a[d].split("=",2),f=decodeURIComponent(e[0]);if(b&&Object.prototype.hasOwnProperty.call(c,f))throw new URIError("Duplicate key: "+f);c[f]=e.length===2?decodeURIComponent(e[1]):null}return c}function c(a,b){return a+(a.indexOf("?")!==-1?"&":"?")+(typeof b==="string"?b:g.encode(b))}var g={encode:a,decode:b,appendToUrl:c};d=g;e.exports=d}),null);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","ex"],(function(a,b,c,d,e,f,g){function h(){if(!b("ExecutionEnvironment").canUseDOM)throw new Error(b("ex")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment."));try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw new Error(b("ex")("getCrossOriginTransport: %s",a.message))}}h.withCredentials=function(){var a=h();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=h}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){var g,h={rewriteURI:function(a){if(!b("isFacebookURI")(a)||h._isWhitelisted(a))return a;var c=h._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return h.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=h._getCurrentURI().getDomain(),d=new(g||(g=b("URI")))(a).qualify().getDomain();return c===d||h.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||h._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=h._getCurrentURI(),e=h._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(g||(g=b("URI")))("/").qualify()}};e.exports=h}),null);
__d("once",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var b=g(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b}function g(a){var b=a,c;a=function(){if(b){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];c=b.apply(this,d);b=null}return c};return a}}),null);
__d("FbtResultBase",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(a,b){this.$1=a,this.__errorListener=b,this.$2=null}var b=a.prototype;b.flattenToArray=function(){return a.flattenToArray(this.$1)};b.getContents=function(){return this.$1};b.toString=function(){if(this.$2!=null)return this.$2;var b="",c=this.flattenToArray();for(var d=0;d<c.length;++d){var e=c[d];if(typeof e==="string"||e instanceof a)b+=e.toString();else{var f;(f=this.__errorListener)==null?void 0:f.onStringSerializationError==null?void 0:f.onStringSerializationError(e)}}Object.isFrozen(this)||(this.$2=b);return b};b.toJSON=function(){return this.toString()};a.flattenToArray=function(b){var c=[];for(var d=0;d<b.length;++d){var e=b[d];Array.isArray(e)?c.push.apply(c,a.flattenToArray(e)):e instanceof a?c.push.apply(c,e.flattenToArray()):c.push(e)}return c};return a}();["anchor","big","blink","bold","charAt","charCodeAt","codePointAt","contains","endsWith","fixed","fontcolor","fontsize","includes","indexOf","italics","lastIndexOf","link","localeCompare","match","normalize","repeat","replace","search","slice","small","split","startsWith","strike","sub","substr","substring","sup","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"].forEach(function(a){g.prototype[a]=function(){var b;(b=this.__errorListener)==null?void 0:b.onStringMethodUsed==null?void 0:b.onStringMethodUsed(a);for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return String.prototype[a].apply(this,d)}});e.exports=g}),null);
__d("Log",[],(function(a,b,c,d,e,f){"use strict";f.setLevel=a;var g=-1;b={DEBUG:3,INFO:2,WARNING:1,ERROR:0};f.Level=b;c=function(a,b,c){for(var d=arguments.length,e=new Array(d>3?d-3:0),f=3;f<d;f++)e[f-3]=arguments[f];var h=0,i=c.replace(/%s/g,function(){return String(e[h++])}),j=window.console;j&&g>=b&&j[a in j?a:"log"](i)};f.log=c;function a(a){g=a}d=c.bind(null,"debug",b.DEBUG);f.debug=d;e=c.bind(null,"info",b.INFO);f.info=e;a=c.bind(null,"warn",b.WARNING);f.warn=a;d=c.bind(null,"error",b.ERROR);f.error=d}),null);
__d("Queue",[],(function(a,b,c,d,e,f){var g={};a=function(){function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();e.exports=a}),null);
__d("Banzai",["requireCond","cr:1642797"],(function(a,b,c,d,e,f){e.exports=b("cr:1642797")}),null);
__d("Locale",["SiteData"],(function(a,b,c,d,e,f){function a(){return b("SiteData").is_rtl}e.exports={isRTL:a}}),null);
__d("regeneratorRuntime",["Promise"],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty,h=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator")||"@@iterator",i=e.exports;function j(a,b,c,d){b=Object.create((b||q).prototype);d=new z(d||[]);b._invoke=w(a,c,d);return b}i.wrap=j;function k(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}var l="suspendedStart",m="suspendedYield",n="executing",o="completed",p={};function q(){}function r(){}function s(){}var t=s.prototype=q.prototype;r.prototype=t.constructor=s;s.constructor=r;r.displayName="GeneratorFunction";function a(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}i.isGeneratorFunction=function(a){a=typeof a==="function"&&a.constructor;return a?a===r||(a.displayName||a.name)==="GeneratorFunction":!1};i.mark=function(a){Object.setPrototypeOf?Object.setPrototypeOf(a,s):Object.assign(a,s);a.prototype=Object.create(t);return a};i.awrap=function(a){return new u(a)};function u(a){this.arg=a}function v(a){function c(c,f){var g=a[c](f);c=g.value;return c instanceof u?b("Promise").resolve(c.arg).then(d,e):b("Promise").resolve(c).then(function(a){g.value=a;return g})}typeof process==="object"&&process.domain&&(c=process.domain.bind(c));var d=c.bind(a,"next"),e=c.bind(a,"throw");c.bind(a,"return");var f;function g(a,d){var e=f?f.then(function(){return c(a,d)}):new(b("Promise"))(function(b){b(c(a,d))});f=e["catch"](function(a){});return e}this._invoke=g}a(v.prototype);i.async=function(a,b,c,d){var e=new v(j(a,b,c,d));return i.isGeneratorFunction(b)?e:e.next().then(function(a){return a.done?a.value:e.next()})};function w(a,b,c){var d=l;return function(e,f){if(d===n)throw new Error("Generator is already running");if(d===o){if(e==="throw")throw f;return B()}while(!0){var g=c.delegate;if(g){if(e==="return"||e==="throw"&&g.iterator[e]===void 0){c.delegate=null;var h=g.iterator["return"];if(h){h=k(h,g.iterator,f);if(h.type==="throw"){e="throw";f=h.arg;continue}}if(e==="return")continue}h=k(g.iterator[e],g.iterator,f);if(h.type==="throw"){c.delegate=null;e="throw";f=h.arg;continue}e="next";f=void 0;var i=h.arg;if(i.done)c[g.resultName]=i.value,c.next=g.nextLoc;else{d=m;return i}c.delegate=null}if(e==="next")d===m?c.sent=f:c.sent=void 0;else if(e==="throw"){if(d===l){d=o;throw f}c.dispatchException(f)&&(e="next",f=void 0)}else e==="return"&&c.abrupt("return",f);d=n;h=k(a,b,c);if(h.type==="normal"){d=c.done?o:m;var i={value:h.arg,done:c.done};if(h.arg===p)c.delegate&&e==="next"&&(f=void 0);else return i}else h.type==="throw"&&(d=o,e="throw",f=h.arg)}}}a(t);t[h]=function(){return this};t.toString=function(){return"[object Generator]"};function x(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]);2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]);this.tryEntries.push(b)}function y(a){var b=a.completion||{};b.type="normal";delete b.arg;a.completion=b}function z(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(x,this),this.reset(!0)}i.keys=function(a){var b=[];for(var c in a)b.push(c);b.reverse();return function c(){while(b.length){var d=b.pop();if(d in a){c.value=d;c.done=!1;return c}}c.done=!0;return c}};function A(a){if(a){var b=a[h];if(b)return b.call(a);if(typeof a.next==="function")return a;if(!isNaN(a.length)){var c=-1;b=function b(){while(++c<a.length)if(g.call(a,c)){b.value=a[c];b.done=!1;return b}b.value=void 0;b.done=!0;return b};return b.next=b}}return{next:B}}i.values=A;function B(){return{value:void 0,done:!0}}z.prototype={constructor:z,reset:function(a){this.prev=0;this.next=0;this.sent=void 0;this.done=!1;this.delegate=null;this.tryEntries.forEach(y);if(!a)for(var b in this)b.charAt(0)==="t"&&g.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0];a=a.completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function c(c,d){f.type="throw";f.arg=a;b.next=c;return!!d}for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d],f=e.completion;if(e.tryLoc==="root")return c("end");if(e.tryLoc<=this.prev){var h=g.call(e,"catchLoc"),i=g.call(e,"finallyLoc");if(h&&i){if(this.prev<e.catchLoc)return c(e.catchLoc,!0);else if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else if(h){if(this.prev<e.catchLoc)return c(e.catchLoc,!0)}else if(i){if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(a,b){for(var c=this.tryEntries.length-1;c>=0;--c){var d=this.tryEntries[c];if(d.tryLoc<=this.prev&&g.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var e=d;break}}e&&(a==="break"||a==="continue")&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);d=e?e.completion:{};d.type=a;d.arg=b;e?this.next=e.finallyLoc:this.complete(d);return p},complete:function(a,b){if(a.type==="throw")throw a.arg;a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=a.arg,this.next="end"):a.type==="normal"&&b&&(this.next=b)},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a){this.complete(c.completion,c.afterLoc);y(c);return p}}},"catch":function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if(d.type==="throw"){var e=d.arg;y(c)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){this.delegate={iterator:A(a),resultName:b,nextLoc:c};return p}}}),null);
__d("BladeRunnerTypes",[],(function(a,b,c,d,e,f){a={REQUEST:1,DATA:2,DATA_ACK:3,STATUS_UPDATE:4,REWRITE_REQUEST:5,LOG:6};f.StreamFrameType=a;b={BLADE_RUNNER:1,GATEWAY:2};f.StreamRequestType=b;c={ACCEPTED:1,REJECTED:2,STARTED:3,PAUSED:4,CLOSED:5};f.StreamStatus=c}),null);
__d("isPromise",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return!!a&&typeof a.then==="function"}}),null);
__d("CurrentLocale",["LocaleInitialData"],(function(a,b,c,d,e,f){a={};a.get=function(){return b("LocaleInitialData").locale};c=a;e.exports=c}),null);
__d("FalcoBanzaiTransport",["AnalyticsCoreData","Banzai","WebSession"],(function(a,b,c,d,e,f){"use strict";var g="falco:";function h(a,c){var d;b("Banzai").post(g+a.name,(d={},d.e=a.extra,d.r=a.rate,d.d=b("AnalyticsCoreData").device_id,d.s=b("WebSession").getId(),d),c)}a={log:function(a){h(a,b("Banzai").BASIC)},logImmediately:function(a){h(a,b("Banzai").VITAL)},logCritical:function(a){h(a,{signal:!0,retry:!0})}};e.exports=a}),null);
__d("JSResource",["JSResourceReference"],(function(a,b,c,d,e,f){e.exports=a;var g={};function h(a,b){g[a]=b}function i(a){return g[a]}function a(a){a=a;var c=i(a);if(c)return c;c=new(b("JSResourceReference"))(a);h(a,c);return c}a.Reference=b("JSResourceReference");a.loadAll=b("JSResourceReference").loadAll}),null);
__d("FalcoTransport",["AnalyticsCoreData","BladeRunnerTypes","FalcoBanzaiTransport","FalcoFabricJavaScriptEvents","JSResource","Queue","qex"],(function(a,b,c,d,e,f){"use strict";var g=b("BladeRunnerTypes").StreamStatus;c=(a=b("qex")._("1495392"))!=null?a:"br";var h=c+"_test",i=c+"_control",j=new Set(((d=b("qex")._("1505135"))!=null?d:"").split(",")),k={r:0},l=new(b("Queue"))(),m=new(b("Queue"))(),n=!1;function o(a){return Object.freeze({deviceId:b("AnalyticsCoreData").device_id,sessionId:a,appId:b("AnalyticsCoreData").app_id})}function p(a){l.start(function(b){return b(a)})}function q(){if(n)return;b("JSResource").loadAll([b("JSResource")("BladeRunnerClient").__setRef("FalcoTransport"),b("JSResource")("BladeRunnerStreamHandler").__setRef("FalcoTransport"),b("JSResource")("FalcoBladeRunnerTransport").__setRef("FalcoTransport"),b("JSResource")("WebSession").__setRef("FalcoTransport")],function(a,c,d,e){a=new a();var f=a.requestStream({method:"Falco"},JSON.stringify(o(e.getId())),new c(function(a){m.enqueue(a)},null,function(a){switch(a){case g.REJECTED:l.start(function(a){return a(b("FalcoBanzaiTransport"))});break;case g.STARTED:p(new d(f,m));break;case g.CLOSED:l.stop(!0);n=!1;break}},function(a){},function(a){}))});n=!0}function r(a,b){return{name:b+"$"+a.name,extra:a.extra,rate:a.rate,time:a.time}}function s(a){a=(a=b("FalcoFabricJavaScriptEvents").map[a])!=null?a:k;return a.s===1}var t;switch(c){case"double_br":t={log:function(a){b("FalcoBanzaiTransport").log(r(a,i)),q(),l.enqueue(function(b){return b.log(r(a,h))})},logImmediately:function(a){b("FalcoBanzaiTransport").logImmediately(r(a,i)),q(),l.enqueue(function(b){return b.logImmediately(r(a,h))})},logCritical:function(a){b("FalcoBanzaiTransport").logCritical(r(a,i)),q(),l.enqueue(function(b){return b.logCritical(r(a,h))})}};break;case"partial_br":t={log:function(a){j.has(a.name)?(q(),l.enqueue(function(b){return b.log(a)})):b("FalcoBanzaiTransport").log(a)},logImmediately:function(a){j.has(a.name)?(q(),l.enqueue(function(b){return b.logImmediately(a)})):b("FalcoBanzaiTransport").log(a)},logCritical:function(a){j.has(a.name)?(q(),l.enqueue(function(b){return b.logCritical(a)})):b("FalcoBanzaiTransport").logCritical(a)}};break;case"br":t={log:function(a){s(a.name)?(q(),l.enqueue(function(b){return b.log(a)})):b("FalcoBanzaiTransport").log(a)},logImmediately:function(a){s(a.name)?(q(),l.enqueue(function(b){return b.logImmediately(a)})):b("FalcoBanzaiTransport").logImmediately(a)},logCritical:function(a){s(a.name)?(q(),l.enqueue(function(b){return b.logCritical(a)})):b("FalcoBanzaiTransport").logCritical(a)}};break;case"banzai":default:t=b("FalcoBanzaiTransport");break}e.exports=t}),null);
__d("FalcoLoggerInternal",["regeneratorRuntime","AnalyticsCoreData","FalcoTransport","FalcoBanzaiTransport","Random","isPromise","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h=b("AnalyticsCoreData").enable_bladerunner?b("FalcoTransport"):b("FalcoBanzaiTransport");function i(a,c,d){var e,f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:if(!b("Random").coinflip(a)){g.next=10;break}e=c();if(!b("isPromise")(e)){g.next=8;break}g.next=5;return b("regeneratorRuntime").awrap(e);case 5:f=g.sent;g.next=9;break;case 8:f=e;case 9:d(f);case 10:case"end":return g.stop()}},null,this)}function j(a,c,d){var e=(g||(g=b("performanceAbsoluteNow")))();return{name:a,time:e,rate:c,extra:d}}e.exports={create:function(a,b){var c=b.r;return{log:function(b){i(c,b,function(b){return h.log(j(a,c,b))})},logAsync:function(b){i(c,b,function(b){return h.log(j(a,c,b))})},logImmediately:function(b){i(c,b,function(b){return h.logImmediately(j(a,c,b))})},logCritical:function(b){i(c,b,function(b){return h.logCritical(j(a,c,b))})}}}}}),null);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress",[],(function(a,b,c,d,e,f){"use strict";function g(){return typeof process==="object"&&(typeof process.versions==="object"&&typeof process.versions.node!=="undefined")?!0:!1}function h(a){return a instanceof Uint8Array&&(!g()||!Buffer.isBuffer(a))}function i(a){return a instanceof ArrayBuffer}function j(a){return!g()?!1:Buffer.isBuffer(a)}var k="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";function a(a){if(!h(a)&&!i(a)&&!j(a))throw new TypeError(k);var b=!1,c=!1;h(a)?b=!0:i(a)&&(c=!0,a=new Uint8Array(a));a=new A(a);var d=a.readUncompressedLength();if(d===-1)throw new Error("Invalid Snappy bitstream");if(b){b=new Uint8Array(d);if(!a.uncompressToBuffer(b))throw new Error("Invalid Snappy bitstream")}else if(c){b=new ArrayBuffer(d);c=new Uint8Array(b);if(!a.uncompressToBuffer(c))throw new Error("Invalid Snappy bitstream")}else{b=Buffer.alloc(d);if(!a.uncompressToBuffer(b))throw new Error("Invalid Snappy bitstream")}return b}function b(a){if(!h(a)&&!i(a)&&!j(a))throw new TypeError(k);var b=!1,c=!1;h(a)?b=!0:i(a)&&(c=!0,a=new Uint8Array(a));a=new x(a);var d=a.maxCompressedLength(),e,f,g;b?(e=new Uint8Array(d),g=a.compressToBuffer(e)):c?(e=new ArrayBuffer(d),f=new Uint8Array(e),g=a.compressToBuffer(f)):(e=Buffer.alloc(d),g=a.compressToBuffer(e));if(!e.slice){f=new Uint8Array(Array.prototype.slice.call(e,0,g));if(b)return f;else if(c)return f.buffer;else throw new Error("not implemented")}return e.slice(0,g)}c=16;var l=1<<c,m=14,n=new Array(m+1);function o(a,b){return a*506832829>>>b}function p(a,b){return a[b]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}function q(a,b,c){return a[b]===a[c]&&a[b+1]===a[c+1]&&a[b+2]===a[c+2]&&a[b+3]===a[c+3]}function r(a,b,c,d,e){var f;for(f=0;f<e;f++)c[d+f]=a[b+f]}function s(a,b,c,d,e){c<=60?(d[e]=c-1<<2,e+=1):c<256?(d[e]=60<<2,d[e+1]=c-1,e+=2):(d[e]=61<<2,d[e+1]=c-1&255,d[e+2]=c-1>>>8,e+=3);r(a,b,d,e,c);return e+c}function t(a,b,c,d){if(d<12&&c<2048){a[b]=1+(d-4<<2)+(c>>>8<<5);a[b+1]=c&255;return b+2}else{a[b]=2+(d-1<<2);a[b+1]=c&255;a[b+2]=c>>>8;return b+3}}function u(a,b,c,d){while(d>=68)b=t(a,b,c,64),d-=64;d>64&&(b=t(a,b,c,60),d-=60);return t(a,b,c,d)}function v(a,b,c,d,e){var f=1;while(1<<f<=c&&f<=m)f+=1;f-=1;var g=32-f;typeof n[f]==="undefined"&&(n[f]=new Uint16Array(1<<f));f=n[f];var h;for(h=0;h<f.length;h++)f[h]=0;h=b+c;var i=b,j=b,k,l,r,t,v,w=!0,x=15;if(c>=x){c=h-x;b+=1;x=o(p(a,b),g);while(w){t=32;l=b;do{b=l;k=x;v=t>>>5;t+=1;l=b+v;if(b>c){w=!1;break}x=o(p(a,l),g);r=i+f[k];f[k]=b-i}while(!q(a,b,r));if(!w)break;e=s(a,j,b-j,d,e);do{v=b;k=4;while(b+k<h&&a[b+k]===a[r+k])k+=1;b+=k;l=v-r;e=u(d,e,l,k);j=b;if(b>=c){w=!1;break}t=o(p(a,b-1),g);f[t]=b-1-i;v=o(p(a,b),g);r=i+f[v];f[v]=b-i}while(q(a,b,r));if(!w)break;b+=1;x=o(p(a,b),g)}}j<h&&(e=s(a,j,h-j,d,e));return e}function w(a,b,c){do b[c]=a&127,a=a>>>7,a>0&&(b[c]+=128),c+=1;while(a>0);return c}function x(a){this.array=a}x.prototype.maxCompressedLength=function(){var a=this.array.length;return 32+a+Math.floor(a/6)};x.prototype.compressToBuffer=function(a){var b=this.array,c=b.length,d=0,e=0,f;e=w(c,a,e);while(d<c)f=Math.min(c-d,l),e=v(b,d,f,a,e),d+=f;return e};var y=[0,255,65535,16777215,4294967295];function r(a,b,c,d,e){var f;for(f=0;f<e;f++)c[d+f]=a[b+f]}function z(a,b,c,d){var e;for(e=0;e<d;e++)a[b+e]=a[b-c+e]}function A(a){this.array=a,this.pos=0}A.prototype.readUncompressedLength=function(){var a=0,b=0,c,d;while(b<32&&this.pos<this.array.length){c=this.array[this.pos];this.pos+=1;d=c&127;if(d<<b>>>b!==d)return-1;a|=d<<b;if(c<128)return a;b+=7}return-1};A.prototype.uncompressToBuffer=function(a){var b=this.array,c=b.length,d=this.pos,e=0,f,g,h,i;while(d<b.length){f=b[d];d+=1;if((f&3)===0){g=(f>>>2)+1;if(g>60){if(d+3>=c)return!1;h=g-60;g=b[d]+(b[d+1]<<8)+(b[d+2]<<16)+(b[d+3]<<24);g=(g&y[h])+1;d+=h}if(d+g>c)return!1;r(b,d,a,e,g);d+=g;e+=g}else{switch(f&3){case 1:g=(f>>>2&7)+4;i=b[d]+(f>>>5<<8);d+=1;break;case 2:if(d+1>=c)return!1;g=(f>>>2)+1;i=b[d]+(b[d+1]<<8);d+=2;break;case 3:if(d+3>=c)return!1;g=(f>>>2)+1;i=b[d]+(b[d+1]<<8)+(b[d+2]<<16)+(b[d+3]<<24);d+=4;break;default:break}if(i===0||i>e)return!1;z(a,e,i,g);e+=g}}return!0};e.exports.uncompress=a;e.exports.compress=b}),null);
__d("SnappyCompressUtil",["SnappyCompress"],(function(a,b,c,d,e,f){"use strict";var g={compressUint8ArrayToSnappy:function(c){if(c==null)return null;var d=null;try{d=b("SnappyCompress").compress(c)}catch(a){return null}c="";for(var e=0;e<d.length;e++)c+=String.fromCharCode(d[e]);return a.btoa(c)},compressStringToSnappy:function(b){if(a.Uint8Array===void 0||a.btoa===void 0)return null;var c=new a.Uint8Array(b.length);for(var d=0;d<b.length;d++){var e=b.charCodeAt(d);if(e>127)return null;c[d]=e}return g.compressUint8ArrayToSnappy(c)},compressStringToSnappyBinary:function(c){if(a.Uint8Array===void 0)return null;var d=null;if(a.TextEncoder!==void 0)d=new TextEncoder().encode(c);else{d=new a.Uint8Array(c.length);for(var e=0;e<c.length;e++){var f=c.charCodeAt(e);if(f>127)return null;d[e]=f}}f=null;try{f=b("SnappyCompress").compress(d)}catch(a){return null}return f}};e.exports=g}),null);
__d("BanzaiCompressionUtils",["Promise","FBLogger","SnappyCompressUtil","once","performanceNow"],(function(a,b,c,d,e,f){"use strict";var g,h=b("once")(function(){if(a.CompressionStream==null)return!1;if(a.Response==null)return!1;try{new a.CompressionStream("deflate")}catch(a){return!1}return!0}),i={compressWad:function(a,c){if(a.needs_compression!==!0){delete a.needs_compression;return}if(c==="deflate"){i.compressWad(a,"snappy");return}var d=(g||(g=b("performanceNow")))(),e=JSON.stringify(a.posts),f;switch(c){case"snappy":f=b("SnappyCompressUtil").compressStringToSnappyBinary(e);break;case"snappy_base64":f=b("SnappyCompressUtil").compressStringToSnappy(e);break;default:break}f!=null&&f.length<e.length?(a.posts=f,a.compression=c,a.snappy_ms=Math.ceil((g||(g=b("performanceNow")))()-d),a.snappy_ms<0&&b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s",a.snappy_ms)):a.compression="";delete a.needs_compression},compressWadAsync:function(c,d){if(d!=="deflate"){i.compressWad(c,"snappy");return b("Promise").resolve()}if(!h())return i.compressWadAsync(c,"snappy");var e=(g||(g=b("performanceNow")))(),f=JSON.stringify(c.posts),j=new Response(f).body;if(!j){c.compression="";delete c.needs_compression;return b("Promise").resolve()}j=j.pipeThrough(new a.CompressionStream("deflate"));return new Response(j).arrayBuffer().then(function(a){a.byteLength<f.length?(c.posts=new Uint8Array(a),c.compression=d,c.snappy_ms=Math.ceil((g||(g=b("performanceNow")))()-e),c.snappy_ms<0&&b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s",c.snappy_ms)):c.compression="",delete c.needs_compression})["catch"](function(){c.compression="",delete c.needs_compression})},outOfBandsPosts:function(a){var b=0,c={};for(var d=0;d<a.length;d++){var e=a[d],f=e.compression==="snappy"||e.compression==="deflate";if(f){f=new Blob([e.posts],{type:"application/octet-stream"});e.posts=String(b);c["post_"+String(b)]=f;b++}}return c}};e.exports=i}),null);