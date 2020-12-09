if (self.CavalryLogger) { CavalryLogger.start_js(["P7wFZ"]); }

__d("GenderConst",[],(function(a,b,c,d,e,f){e.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_UNKNOWN:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11}}),null);
__d("IntlVariations",[],(function(a,b,c,d,e,f){e.exports={BITMASK_NUMBER:28,BITMASK_GENDER:3,NUMBER_ZERO:16,NUMBER_ONE:4,NUMBER_TWO:8,NUMBER_FEW:20,NUMBER_MANY:12,NUMBER_OTHER:24,GENDER_MALE:1,GENDER_FEMALE:2,GENDER_UNKNOWN:3}}),null);
__d("InlineFbtResult",["requireCond","cr:1183579"],(function(a,b,c,d,e,f){a=b("cr:1183579");e.exports=a}),null);
__d("FbtReactUtil",[],(function(a,b,c,d,e,f){a=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;var g=!1;b={REACT_ELEMENT_TYPE:a,injectReactShim:function(a){var b={validated:!0};g?Object.defineProperty(a,"_store",{configurable:!1,enumerable:!1,writable:!1,value:b}):a._store=b}};e.exports=b}),null);
__d("FbtResult",["FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f){var g=function(a){return a.content};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=a.call(this,c,d)||this;d.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;d.key=null;d.ref=null;d.type=g;d.props={content:c};return d}c.get=function(a){return new c(a.contents,a.errorListener)};return c}(b("FbtResultBase"));e.exports=a}),null);
__d("TransAppInlineMode",[],(function(a,b,c,d,e,f){a=Object.freeze({STRING_MANAGER:"STRING_MANAGER",TRANSLATION:"TRANSLATION",APPROVE:"APPROVE",REPORT:"REPORT",NO_INLINE:"NO_INLINE"});e.exports=a}),null);
__d("getUnwrappedFbt",["FbtResultGK"],(function(a,b,c,d,e,f){function a(a){a=a.contents;var c=b("FbtResultGK").inlineMode,d=b("FbtResultGK").shouldReturnFbtResult;if(!d&&c!=="REPORT")return(a==null?void 0:a.length)===1&&typeof a[0]==="string"?a[0]:a}e.exports=a}),null);
__d("getFbtResult",["FbtResult","FbtResultGK","InlineFbtResult","SiteData","TransAppInlineMode","getUnwrappedFbt","gkx","recoverableViolation"],(function(a,b,c,d,e,f){e.exports=a;var g=b("FbtResultGK").inlineMode;if(b("SiteData").is_comet&&g==="TRANSLATION"){b("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. "+("[inlineMode="+((c=g)!=null?c:"")+"]")+("[runtime_site_is_comet="+String(b("gkx")("708253"))+"]"),"internationalization")}function a(a){var c=b("getUnwrappedFbt")(a);if(c!=null)return c;c=a.contents;var d=a.patternString,e=a.patternHash;return g!=null&&g!=="NO_INLINE"?new(b("InlineFbtResult"))(c,g,d,e):b("FbtResult").get(a)}}),null);
__d("Deferred",["Promise"],(function(a,b,c,d,e,f){"use strict";b("Promise").resolve();a=function(){function a(a){var c=this;a=a||b("Promise");this.$1=!1;this.$2=new a(function(a,b){c.$3=a,c.$4=b})}var c=a.prototype;c.getPromise=function(){return this.$2};c.resolve=function(a){this.$1=!0,this.$3(a)};c.reject=function(a){this.$1=!0,this.$4(a)};c.isSettled=function(){return this.$1};return a}();e.exports=a}),null);
__d("errorCode",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){throw new Error('errorCode("'+a+'"): This should not happen. Oh noes!')}}),null);
__d("FbtErrorListenerWWW",["FBLogger","killswitch"],(function(a,b,c,d,e,f){a=function(){function a(a){this.$1=a.hash,this.$2=a.translation}var c=a.prototype;c.onStringSerializationError=function(a){var c="Context not logged.";if(!b("killswitch")("JS_RELIABILITY_FBT_LOGGING"))try{var d=JSON.stringify(a);d!=null&&(c=d.substr(0,250))}catch(a){c=a.message}d=(a==null?void 0:(d=a.constructor)==null?void 0:d.name)||"";b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)',this.$1,this.$2,c,typeof a,d)};c.onStringMethodUsed=function(a){b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.",a)};return a}();e.exports=a}),null);
__d("FbtPureStringResult",["FbtResult"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("FbtResult"));e.exports=a}),null);
__d("getFbsResult",["FbtPureStringResult"],(function(a,b,c,d,e,f){function a(a){return new(b("FbtPureStringResult"))(a.contents,a.errorListener)}e.exports=a}),null);
__d("getTranslatedInput",[],(function(a,b,c,d,e,f){e.exports=a;var g="B!N@$T",h={};function a(a){var b=a.table;typeof b==="string"&&b.startsWith(g)&&(b in h||(h[b]=JSON.parse(b.substring(g.length))),b=h[b]);return{table:b,args:a.args}}}),null);
__d("FbtEnv",["requireDeferred","Banzai","FbtErrorListenerWWW","IntlViewerContext","getFbsResult","getFbtResult","getTranslatedInput","promiseDone","FbtHooks"],(function(a,b,c,d,e,f){"use strict";var g,h=b("requireDeferred")("FbtLogging"),i=!1;a={setupOnce:function(){if(i)return;i=!0;(g||(g=b("FbtHooks"))).register({errorListener:function(a){return new(b("FbtErrorListenerWWW"))(a)},getFbsResult:b("getFbsResult"),getFbtResult:b("getFbtResult"),getTranslatedInput:b("getTranslatedInput"),onTranslationOverride:function(a){return b("Banzai").post("intl_qt_event",{hash:a})},getViewerContext:function(){return b("IntlViewerContext")},logImpression:function(a){return b("promiseDone")(h.load().then(function(b){return b.logImpression==null?void 0:b.logImpression(a)}))}})}};e.exports=a}),null);
__d("FbtHooksImpl",[],(function(a,b,c,d,e,f){var g={};a={getErrorListener:function(a){return g.errorListener==null?void 0:g.errorListener(a)},logImpression:function(a){g.logImpression==null?void 0:g.logImpression(a)},onTranslationOverride:function(a){g.onTranslationOverride==null?void 0:g.onTranslationOverride(a)},getFbsResult:function(a){return g.getFbsResult(a)},getFbtResult:function(a){return g.getFbtResult(a)},getTranslatedInput:function(a){var b;return(b=g.getTranslatedInput==null?void 0:g.getTranslatedInput(a))!=null?b:a},getViewerContext:function(){return g.getViewerContext()},register:function(a){Object.assign(g,a)}};e.exports=a}),null);
__d("FbtHooks",["FbtEnv","FbtHooksImpl"],(function(a,b,c,d,e,f){e.exports=b("FbtHooksImpl"),b("FbtEnv").setupOnce()}),null);
__d("FbtTable",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h={ARG:{INDEX:0,SUBSTITUTION:1},access:function(a,b,c){if(c>=b.length){typeof a==="string"||Array.isArray(a)||g(0,21388,JSON.stringify(a));return a}var d=b[c];d=d[h.ARG.INDEX];if(d==null)return h.access(a,b,c+1);typeof a!=="string"&&!Array.isArray(a)||g(0,20954,typeof a);for(var e=0;e<d.length;++e){var f=a[d[e]];if(f==null)continue;f=h.access(f,b,c+1);if(f!=null)return f}return null}};e.exports=h}),null);
__d("FbtTableAccessor",[],(function(a,b,c,d,e,f){"use strict";a={getEnumResult:function(a){return[[a],null]},getGenderResult:function(a,b,c){return[a,b]},getNumberResult:function(a,b,c){return[a,b]},getSubstitution:function(a){return[null,a]},getPronounResult:function(a){return[[a,"*"],null]}};e.exports=a}),null);
__d("FbtNumberType",["IntlNumberTypeConfig","IntlVariations"],(function(a,b,c,d,e,f){a=new Function("IntlVariations",'"use strict"; return (function(n) {'+b("IntlNumberTypeConfig").impl+"});")(b("IntlVariations"));e.exports={getVariation:a}}),null);
__d("IntlNumberType",["FbtNumberType"],(function(a,b,c,d,e,f){a=function(a){return b("FbtNumberType")};f.get=a}),null);
__d("IntlVariationResolverImpl",["invariant","FbtHooks","IntlNumberType","IntlVariations"],(function(a,b,c,d,e,f,g){var h,i="_1";a={EXACTLY_ONE:i,getNumberVariations:function(a){var c=b("IntlNumberType").get((h||(h=b("FbtHooks"))).getViewerContext().locale).getVariation(a);c&b("IntlVariations").BITMASK_NUMBER||g(0,11647,c,typeof c);return a===1?[i,c,"*"]:[c,"*"]},getGenderVariations:function(a){a&b("IntlVariations").BITMASK_GENDER||g(0,11648,a,typeof a);return[a,"*"]}};e.exports=a}),null);
__d("IntlVariationResolver",["IntlVariationResolverImpl"],(function(a,b,c,d,e,f){b("IntlVariationResolverImpl").EXACTLY_ONE;a={getNumberVariations:function(a){return b("IntlVariationResolverImpl").getNumberVariations(a)},getGenderVariations:function(a){return b("IntlVariationResolverImpl").getGenderVariations(a)}};e.exports=a}),null);
__d("NumberFormatConsts",["NumberFormatConfig"],(function(a,b,c,d,e,f){a={get:function(a){return b("NumberFormatConfig")}};e.exports=a}),null);
__d("escapeRegex",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")}e.exports=a}),null);
__d("intlNumUtils",["FbtHooks","NumberFormatConsts","escapeRegex"],(function(a,b,c,d,e,f){var g,h=3;f=["\u0433\u0440\u043d.","\u0434\u0435\u043d.","\u043b\u0432.","\u043c\u0430\u043d.","\u0564\u0580.","\u062c.\u0645.","\u062f.\u0625.","\u062f.\u0627.","\u062f.\u0628.","\u062f.\u062a.","\u062f.\u062c.","\u062f.\u0639.","\u062f.\u0643.","\u062f.\u0644.","\u062f.\u0645.","\u0631.\u0633.","\u0631.\u0639.","\u0631.\u0642.","\u0631.\u064a.","\u0644.\u0633.","\u0644.\u0644.","\u0783.","B/.","Bs.","Fr.","kr.","L.","p.","S/."];var i={};function j(a){i[a]||(i[a]=new RegExp(a,"i"));return i[a]}var k=j(f.reduce(function(a,c,d){return a+(d?"|":"")+"("+b("escapeRegex")(c)+")"},""));function l(a,c,d,e,f,g,i){d===void 0&&(d="");e===void 0&&(e=".");f===void 0&&(f=0);g===void 0&&(g={primaryGroupSize:h,secondaryGroupSize:h});var k=g.primaryGroupSize||h;g=g.secondaryGroupSize||k;i=i&&i.digits;var l;c==null?l=a.toString():typeof a==="string"?l=r(a,c):l=p(a,c);a=l.split(".");c=a[0];l=a[1];if(Math.abs(parseInt(c,10)).toString().length>=f){a="$1"+d+"$2$3";f="(\\d)(\\d{"+(k-0)+"})($|\\D)";k=c.replace(j(f),a);if(k!=c){c=k;f="(\\d)(\\d{"+(g-0)+"})("+b("escapeRegex")(d)+")";g=j(f);while((k=c.replace(g,a))!=c)c=k}}i!=null&&(c=m(c,i),l=l&&m(l,i));d=c;l&&(d+=e+l);return d}function m(a,b){var c="";for(var d=0;d<a.length;++d){var e=b[a.charCodeAt(d)-48];c+=e!==void 0?e:a[d]}return c}function a(a,c){var d=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return l(a,c,"",d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function n(a,c){var d=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return l(a,c,d.numberDelimiter,d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function o(a){return a&&Math.floor(Math.log10(Math.abs(a)))}function c(a,b,c){var d=o(a),e=a;d<c&&(e=a*Math.pow(10,-d+c));a=Math.pow(10,o(e)-c+1);e=Math.round(e/a)*a;if(d<c){e/=Math.pow(10,-d+c);if(b==null)return n(e,c-d-1)}return n(e,b)}function p(a,b){b=b==null?0:b;var c=Math.pow(10,b);a=a;a=Math.round(a*c)/c;a+="";if(!b)return a;if(a.indexOf("e-")!==-1)return a;c=a.indexOf(".");var d;c==-1?(a+=".",d=b):d=b-(a.length-c-1);for(var b=0,c=d;b<c;b++)a+="0";return a}var q=function(a,b){a=a;for(var c=0;c<b;c++)a+="0";return a};function r(a,b){var c=a.indexOf("."),d=c===-1?a:a.slice(0,c);a=c===-1?"":a.slice(c+1);return b!=null?d+"."+q(a.slice(0,b),b-a.length):d}function s(a,c,d){d===void 0&&(d="");var e=u(),f=a;e&&(f=a.split("").map(function(a){return e[a]||a}).join("").trim());f=f.replace(/^[^\d]*\-/,"\x02");f=f.replace(k,"");a=b("escapeRegex")(c);c=b("escapeRegex")(d);d=j("^[^\\d]*\\d.*"+a+".*\\d[^\\d]*$");if(!d.test(f)){d=j("(^[^\\d]*)"+a+"(\\d*[^\\d]*$)");if(d.test(f)){f=f.replace(d,"$1\x01$2");return t(f)}d=j("^[^\\d]*[\\d "+b("escapeRegex")(c)+"]*[^\\d]*$");d.test(f)||(f="");return t(f)}d=j("(^[^\\d]*[\\d "+c+"]*)"+a+"(\\d*[^\\d]*$)");f=d.test(f)?f.replace(d,"$1\x01$2"):"";return t(f)}function t(a){a=a.replace(/[^0-9\u0001\u0002]/g,"").replace("\x01",".").replace("\x02","-");var b=Number(a);return a===""||isNaN(b)?null:b}function u(){var a=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale),c={};a=a.numberingSystemData&&a.numberingSystemData.digits;if(a==null)return null;for(var d=0;d<a.length;d++)c[a.charAt(d)]=d.toString();return c}function d(a){var c=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return s(a,c.decimalSeparator||".",c.numberDelimiter)}var v={formatNumber:a,formatNumberRaw:l,formatNumberWithThousandDelimiters:n,formatNumberWithLimitedSigFig:c,parseNumber:d,parseNumberRaw:s,truncateLongNumber:r,getFloatString:function(a,b,c){a=String(a);a=a.split(".");b=v.getIntegerString(a[0],b);return a.length===1?b:b+c+a[1]},getIntegerString:function(a,b){b=b;b===""&&(b=",");a=String(a);var c=/(\d+)(\d{3})/;while(c.test(a))a=a.replace(c,"$1"+b+"$2");return a}};e.exports=v}),null);
__d("IntlPhonologicalRewrites",["IntlPhonologicalRules"],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return b("IntlPhonologicalRules")}};e.exports=a}),null);
__d("IntlPunctuation",["FbtHooks","IntlPhonologicalRewrites"],(function(a,b,c,d,e,f){var g;d="[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";var h=new RegExp(d+"[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),i={};function j(a){var b;b=(b=a)!=null?b:"";var c=i[b];c==null&&(c=i[b]=k(a));return c}function k(a){var c=[];a=b("IntlPhonologicalRewrites").get(a);for(var d in a.patterns){var e=a.patterns[d];for(var f in a.meta){var g=new RegExp(f.slice(1,-1),"g"),h=a.meta[f];d=d.replace(g,h);e=e.replace(g,h)}e==="javascript"&&(e=function(a){return a.slice(1).toLowerCase()});c.push([new RegExp(d.slice(1,-1),"g"),e])}return c}function a(a){var c=j((g||(g=b("FbtHooks"))).getViewerContext().locale);a=a;for(var d=0;d<c.length;d++){var e=c[d],f=e[0];e=e[1];a=a.replace(f,e)}return a.replace(/\x01/g,"")}function c(a){return typeof a!=="string"?!1:h.test(a)}e.exports={PUNCT_CHAR_CLASS:d,endsInPunct:c,applyPhonologicalRules:a}}),null);
__d("substituteTokens",["invariant","IntlPunctuation"],(function(a,b,c,d,e,f,g){var h=new RegExp("\\{([^}]+)\\}("+b("IntlPunctuation").PUNCT_CHAR_CLASS+"*)","g");function i(a){return a}function a(a,c){if(c==null)return a;typeof c==="object"||g(0,6041,a);var d=[],e=[];a=a.replace(h,function(a,f,g){a=c[f];if(a!=null&&typeof a==="object"){d.push(a);e.push(f);return"\x17"+g}else if(a===null)return"";return String(a)+(b("IntlPunctuation").endsInPunct(String(a))?"":g)}).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);if(a.length===1)return a[0];var f=a[0]!==""?[a[0]]:[];for(var j=0;j<d.length;j++)f.push(i(d[j])),a[j+1]!==""&&f.push(a[j+1]);return f}e.exports=a}),null);
__d("fbt",["invariant","FbtEnv","FbtHooks","FbtQTOverrides","FbtResultBase","FbtTable","FbtTableAccessor","GenderConst","IntlVariationResolver","intlNumUtils","substituteTokens"],(function(a,b,c,d,e,f,g){var h;b("FbtEnv").setupOnce();var i=b("FbtQTOverrides").overrides,j=b("IntlVariationResolver").getGenderVariations,k=b("IntlVariationResolver").getNumberVariations,l=!1,m=b("FbtTable").ARG,n={NUMBER:0,GENDER:1},o={OBJECT:0,POSSESSIVE:1,REFLEXIVE:2,SUBJECT:3},p={};c=function(){};c._=function(a,c,d){if(((d==null?void 0:d.hk)||(d==null?void 0:d.ehk))&&l)return{text:a,fbt:!0,hashKey:d.hk};a=(h||(h=b("FbtHooks"))).getTranslatedInput({table:a,args:c,options:d});c=a.table;d=a.args;a={};if(c.__vcg!=null){d=d||[];var e=(h||(h=b("FbtHooks"))).getViewerContext();e=e.GENDER;var f=j(e);d.unshift(b("FbtTableAccessor").getGenderResult(f,null,e))}d&&(typeof c!=="string"&&(c=b("FbtTable").access(c,d,0)),a=Object.assign.apply(Object,[{}].concat(d.map(function(a){return a[m.SUBSTITUTION]||{}}))),c!==null||g(0,479));var k;if(Array.isArray(c)){f=c[0];k=c[1];e="1_"+k;i[e]!=null&&i[e]!==""&&(f=i[e],(h||(h=b("FbtHooks"))).onTranslationOverride(k));(h||(h=b("FbtHooks"))).logImpression(k)}else if(typeof c==="string")f=c;else throw new Error("Table access did not result in string: "+(c===void 0?"undefined":JSON.stringify(c))+", Type: "+typeof c);d=p[f];e=q(a);if(d&&!e)return d;else{c=b("substituteTokens")(f,a);d=s(c,f,k);e||(p[f]=d);return d}};function q(a){for(var b in a)return!0;return!1}c._enum=function(a,c){return b("FbtTableAccessor").getEnumResult(a)};c._subject=function(a){return b("FbtTableAccessor").getGenderResult(j(a),null,a)};c._param=function(a,c,d){var e;e=(e={},e[a]=c,e);if(d)if(d[0]===n.NUMBER){var f=d.length>1?d[1]:c;typeof f==="number"||g(0,484);var h=k(f);typeof c==="number"&&(e[a]=b("intlNumUtils").formatNumberWithThousandDelimiters(c));return b("FbtTableAccessor").getNumberResult(h,e,f)}else if(d[0]===n.GENDER){d.length>1||g(0,485);a=d[1];c=j(a);return b("FbtTableAccessor").getGenderResult(c,e,a)}else g(0,486);else return b("FbtTableAccessor").getSubstitution(e)};c._plural=function(a,c,d){var e=k(a),f={};c&&(typeof d==="number"?f[c]=b("intlNumUtils").formatNumberWithThousandDelimiters(d):f[c]=d||b("intlNumUtils").formatNumberWithThousandDelimiters(a));return b("FbtTableAccessor").getNumberResult(e,f,a)};c._pronoun=function(a,c,d){c!==b("GenderConst").NOT_A_PERSON||!d||!d.human||g(0,487);d=r(a,c);return b("FbtTableAccessor").getPronounResult(d)};function r(a,c){switch(c){case b("GenderConst").NOT_A_PERSON:return a===o.OBJECT||a===o.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").FEMALE_SINGULAR:case b("GenderConst").FEMALE_SINGULAR_GUESS:return b("GenderConst").FEMALE_SINGULAR;case b("GenderConst").MALE_SINGULAR:case b("GenderConst").MALE_SINGULAR_GUESS:return b("GenderConst").MALE_SINGULAR;case b("GenderConst").MIXED_UNKNOWN:case b("GenderConst").FEMALE_PLURAL:case b("GenderConst").MALE_PLURAL:case b("GenderConst").NEUTER_PLURAL:case b("GenderConst").UNKNOWN_PLURAL:return b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").NEUTER_SINGULAR:case b("GenderConst").UNKNOWN_SINGULAR:return a===o.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL}return b("GenderConst").NOT_A_PERSON}c._name=function(a,c,d){var e=j(d),f={};f[a]=c;return b("FbtTableAccessor").getGenderResult(e,f,d)};function s(a,c,d){a=typeof a==="string"?[a]:a;var e=(h||(h=b("FbtHooks"))).getErrorListener({translation:c,hash:d});a=h.getFbtResult({contents:a,errorListener:e,patternString:c,patternHash:d});return a}c.enableJsonExportMode=function(){l=!0};c.disableJsonExportMode=function(){l=!1};function a(a){return a instanceof b("FbtResultBase")}c.isFbtInstance=a;e.exports=c}),null);
__d("getAsyncHeaders",["ZeroCategoryHeader","isFacebookURI"],(function(a,b,c,d,e,f){e.exports=a;function a(a){var c={};b("isFacebookURI")(a)&&b("ZeroCategoryHeader").value&&(c[b("ZeroCategoryHeader").header]=b("ZeroCategoryHeader").value);return c}}),null);
__d("ODSWithBanzaiImpl",["invariant","Banzai","Random","gkx"],(function(a,b,c,d,e,f,g){a=function(){function a(){this.$1={},this.$2={}}var c=a.prototype;c.setEntitySample=function(a,c){this.$2[a]=b("Random").random()<c?c:0};c.bumpEntityKey=function(a,b,c,d){d===void 0&&(d=1),this.$3(a,b,c,d)};c.bumpFraction=function(a,b,c,d,e){d===void 0&&(d=1),e===void 0&&(e=1),this.$3(a,b,c,d,e)};c.flush=function(){if(Object.keys(this.$1).length===0)return;b("Banzai").post("categorized_ods",this.$1);this.$1={}};c.create=function(){return new a()};c.$3=function(a,b,c,d,e){var f;d===void 0&&(d=1);e===void 0&&(e=1);var g=(f=this.$2[b])!=null?f:null;if(g!=null&&g<=0)return;var h=this.$1[a]||(this.$1[a]={}),i=h[b]||(h[b]={}),j=i[c]||(i[c]=[0]);d=Number(d);e=Number(e);g>0&&(d/=g,e/=g);if(!isFinite(d)||!isFinite(e))return;j[0]+=d;arguments.length>=5&&(j[1]||(j[1]=0),j[1]+=e)};return a}();var h=new a();b("Banzai").subscribe(b("Banzai").SEND,function(){return h.flush()});c=h;e.exports=c}),null);
__d("OdsWebBatchFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1838142");c=b("FalcoLoggerInternal").create("ods_web_batch",a);e.exports=c}),null);
__d("ODSWithFalcoImpl",["ExecutionEnvironment","OdsWebBatchFalcoEvent","Random","Run","clearTimeout","gkx","setTimeout","unrecoverableViolation"],(function(a,b,c,d,e,f){var g,h=b("ExecutionEnvironment").canUseDOM||b("ExecutionEnvironment").isInWorker,i={};function j(a,b,c,d,e){var f;d===void 0&&(d=1);e===void 0&&(e=1);var h=(f=i[b])!=null?f:null;if(h!=null&&h<=0)return;g=g||{};var j=g[a]||(g[a]={}),k=j[b]||(j[b]={}),m=k[c]||(k[c]=[0,null]),n=Number(d),o=Number(e);h>0&&(n/=h,o/=h);if(!isFinite(n)||!isFinite(o))return;m[0]+=n;if(arguments.length>=5){var p=m[1];p==null&&(p=0);m[1]=p+o}l()}var k;function l(){if(k!=null)return;k=b("setTimeout")(function(){m.flush()},b("gkx")("708253")?13e3/2:5e3)}var m={setEntitySample:function(a,c){if(!h)return;i[a]=b("Random").random()<c?c:0},bumpEntityKey:function(a,b,c,d){d===void 0&&(d=1);if(!h)return;j(a,b,c,d)},bumpFraction:function(a,b,c,d,e){d===void 0&&(d=1);e===void 0&&(e=1);if(!h)return;j(a,b,c,d,e)},flush:function(a){a===void 0&&(a="normal");if(!h)return;b("clearTimeout")(k);k=null;if(g==null)return;var c=g;g=null;function d(){return{batch:c}}a==="critical"?b("OdsWebBatchFalcoEvent").logCritical(d):b("OdsWebBatchFalcoEvent").log(d)}};h&&b("Run").onUnload(function(){m.flush("critical")});a=m;e.exports=a}),null);
__d("ODS",["ODSWithBanzaiImpl","ODSWithFalcoImpl","gkx"],(function(a,b,c,d,e,f){a=b("gkx")("1836351")?b("ODSWithFalcoImpl"):b("ODSWithBanzaiImpl");e.exports=a}),null);
__d("JstlMigrationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1814852");c=b("FalcoLoggerInternal").create("jstl_migration",a);e.exports=c}),null);
__d("getDataWithLoggerOptions",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){return babelHelpers["extends"]({},a,{__options:babelHelpers["extends"]({},{event_time:Date.now()/1e3},b)})}}),null);
__d("GeneratedLoggerUtils",["invariant","Banzai","JstlMigrationFalcoEvent","getDataWithLoggerOptions","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=window.location.search.indexOf("showlog")>-1;function a(a,c,d,e){var f=b("getDataWithLoggerOptions")(c,e);c=a.split(":")[0];var g=a.split(":")[1];c=="logger"&&b("gkx")("1831204")?b("JstlMigrationFalcoEvent").log(function(){return{logger_config_name:g,payload:f}}):b("Banzai").post(a,f,d);h}c={log:a,serializeVector:function(a){if(!a)return a;if(Array.isArray(a))return a;if(a.toArray){var b=a;return b.toArray()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"])return Array.from(a);g(0,3874,a)},serializeMap:function(a){if(!a)return a;if(a.toJS){var b=a;return b.toJS()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]){b=a;var c={};for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;c[f[0]]=f[1]}return c}if(Object.prototype.toString.call(a)==="[object Object]")return a;g(0,3875,a)},checkExtraDataFieldNames:function(a,b){Object.keys(a).forEach(function(a){Object.prototype.hasOwnProperty.call(b,a)&&g(0,3876,a)})},warnForInvalidFieldNames:function(a,b,c,d){},throwIfNull:function(a,b){a||g(0,3877,b);return a}};e.exports=c}),null);
__d("randomInt",["invariant"],(function(a,b,c,d,e,f,g){e.exports=a;function a(a,b){a=b===void 0?[0,a]:[a,b];b=a[0];a=a[1];a>b||g(0,1180,a,b);var c=this.random||Math.random;return Math.floor(b+c()*(a-b))}}),null);
__d("ClientIDs",["randomInt"],(function(a,b,c,d,e,f){f.getNewClientID=a;f.isExistingClientID=c;var g=new Set();function a(){var a=Date.now();a=a+":"+(b("randomInt")(0,4294967295)+1);g.add(a);return a}function c(a){return g.has(a)}}),null);
__d("normalizeBoundingClientRect",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){a=a.ownerDocument.documentElement;var c=a?a.clientLeft:0;a=a?a.clientTop:0;var d=Math.round(b.left)-c;c=Math.round(b.right)-c;var e=Math.round(b.top)-a;b=Math.round(b.bottom)-a;return{left:d,right:c,top:e,bottom:b,width:c-d,height:b-e}}}),null);
__d("getElementRect",["containsNode","normalizeBoundingClientRect"],(function(a,b,c,d,e,f){e.exports=a;function a(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return!a||!("getBoundingClientRect"in a)||!b("containsNode")(c,a)?{left:0,right:0,top:0,bottom:0,width:0,height:0}:b("normalizeBoundingClientRect")(a,a.getBoundingClientRect())}}),null);
__d("forEachObject",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;g.call(a,e)&&b.call(c,a[e],e,a)}}}),null);
__d("generateLiteTypedLogger",["Banzai","JstlMigrationFalcoEvent","getDataWithLoggerOptions","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function g(a,c,d){var e=a.split(":")[0],f=a.split(":")[1];e=="logger"&&b("gkx")("1831204")?b("JstlMigrationFalcoEvent").log(function(){return{logger_config_name:f,payload:c}}):b("Banzai").post(a,c,d)}function a(a){return{log:function(c,d){g(a,b("getDataWithLoggerOptions")(c,d),b("Banzai").BASIC)},logVital:function(c,d){g(a,b("getDataWithLoggerOptions")(c,d),b("Banzai").VITAL)},logImmediately:function(c,d){g(a,b("getDataWithLoggerOptions")(c,d),{signal:!0})}}}}),null);
__d("PerfXSharedFields",["CurrentLocale","Locale","SiteData"],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==void 0&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));a.client_push_phase=b("SiteData").push_phase;a.client_revision=b("SiteData").client_revision;b("SiteData").server_revision!=null&&(a.server_revision=b("SiteData").server_revision);a.locale=b("CurrentLocale").get();a.isRTL=Number(b("Locale").isRTL());return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);