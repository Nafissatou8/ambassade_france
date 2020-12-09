/* compact [
	prive/javascript/jquery.js?1605805105
	prive/javascript/jquery-migrate-3.0.1.js?1605805105
	prive/javascript/jquery.form.js?1605805105
	prive/javascript/jquery.autosave.js?1605805105
	prive/javascript/jquery.placeholder-label.js?1605805105
	prive/javascript/ajaxCallback.js?1605805105
	prive/javascript/js.cookie.js?1605805105
	prive/javascript/jquery.cookie.js?1605805105
	plugins-dist/ppd_client/javascript/tippy.min.js?1605805272
	local/cache-js/jsdyn-jquery_cookiebar_js-207955fe.js?1606138271
	plugins-dist/cookiebar/js/jquery.cookiebar.call.js
	plugins-dist/mediabox/javascript/jquery.colorbox.js?1605805110
	plugins-dist/mediabox/javascript/spip.mediabox.js?1605805110
	plugins-dist/spip_out_ouvrant/spip_out_ouvrants.js
	plugins-dist/blocsdepliables/js/blocs.js?1605805269
	plugins-dist/sjcycle_v2/javascript/jquery.cycle.all.js
	plugins-dist/sjcycle_v2/javascript/jquery.tooltip.js
	plugins-dist/mae/javascript/css3-mediaqueries.js
	plugins-dist/mae/javascript/masonry.pkgd.min.js
	plugins-dist/mae/javascript/jfontsize-1.0.min.js
	plugins-dist/mae/javascript/jquery.touchSwipe.min.js
	plugins-dist/mae/javascript/jquery.carouFredSel-6.2.1-packed.js
	plugins-dist/mae/javascript/jquery.placeholder.min.js
	plugins-dist/mae/javascript/breakpoints.js
	plugins-dist/mae/javascript/modernizr.custom.11889.js
	plugins-dist/mae/javascript/jquery.uniform.min.js
	plugins-dist/mae/javascript/base.js
] 66% */

/* prive/javascript/jquery.js?1605805105 */

(function(global,factory){
"use strict";
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
})(typeof window!=="undefined"?window:this,function(window,noGlobal){
"use strict";
var arr=[];
var document=window.document;
var getProto=Object.getPrototypeOf;
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var fnToString=hasOwn.toString;
var ObjectFunctionString=fnToString.call(Object);
var support={};
function DOMEval(code,doc){
doc=doc||document;
var script=doc.createElement("script");
script.text=code;
doc.head.appendChild(script).parentNode.removeChild(script);
}
var
version="3.2.1",
jQuery=function(selector,context){
return new jQuery.fn.init(selector,context);
},
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rmsPrefix=/^-ms-/,
rdashAlpha=/-([a-z])/g,
fcamelCase=function(all,letter){
return letter.toUpperCase();
};
jQuery.fn=jQuery.prototype={
jquery:version,
constructor:jQuery,
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
if(num==null){
return slice.call(this);
}
return num<0?this[num+this.length]:this[num];
},
pushStack:function(elems){
var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
return ret;
},
each:function(callback){
return jQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:arr.sort,
splice:arr.splice
};
jQuery.extend=jQuery.fn.extend=function(){
var options,name,src,copy,copyIsArray,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!jQuery.isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue;
}
if(deep&&copy&&(jQuery.isPlainObject(copy)||
(copyIsArray=Array.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&Array.isArray(src)?src:[];
}else{
clone=src&&jQuery.isPlainObject(src)?src:{};
}
target[name]=jQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
jQuery.extend({
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isFunction:function(obj){
return jQuery.type(obj)==="function";
},
isWindow:function(obj){
return obj!=null&&obj===obj.window;
},
isNumeric:function(obj){
var type=jQuery.type(obj);
return(type==="number"||type==="string")&&
!isNaN(obj-parseFloat(obj));
},
isPlainObject:function(obj){
var proto,Ctor;
if(!obj||toString.call(obj)!=="[object Object]"){
return false;
}
proto=getProto(obj);
if(!proto){
return true;
}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;
return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
},
globalEval:function(code){
DOMEval(code);
},
camelCase:function(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
trim:function(text){
return text==null?
"":
(text+"").replace(rtrim,"");
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
jQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
return arr==null?-1:indexOf.call(arr,elem,i);
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
for(;j<len;j++){
first[i++]=second[j];
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return concat.apply([],ret);
},
guid:1,
proxy:function(fn,context){
var tmp,args,proxy;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!jQuery.isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy;
},
now:Date.now,
support:support
});
if(typeof Symbol==="function"){
jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];
}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
var Sizzle=
(function(window){
var i,
support,
Expr,
getText,
isXML,
tokenize,
compile,
select,
outermostContext,
sortInput,
hasDuplicate,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando="sizzle"+1*new Date(),
preferredDoc=window.document,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
hasOwn=({}).hasOwnProperty,
arr=[],
pop=arr.pop,
push_native=arr.push,
push=arr.push,
slice=arr.slice,
indexOf=function(list,elem){
var i=0,
len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return-1;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace="[\\x20\\t\\r\\n\\f]",
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),
rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
"ID":new RegExp("^#("+identifier+")"),
"CLASS":new RegExp("^\\.("+identifier+")"),
"TAG":new RegExp("^("+identifier+"|[*])"),
"ATTR":new RegExp("^"+attributes),
"PSEUDO":new RegExp("^"+pseudos),
"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),
"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rnative=/^[^{]+\{\s*\[native \w/,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){
var high="0x"+escaped-0x10000;
return high!==high||escapedWhitespace?
escaped:
high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
fcssescape=function(ch,asCodePoint){
if(asCodePoint){
if(ch==="\0"){
return"\uFFFD";
}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";
}
return"\\"+ch;
},
unloadHandler=function(){
setDocument();
},
disabledAncestor=addCombinator(
function(elem){
return elem.disabled===true&&("form"in elem||"label"in elem);
},
{dir:"parentNode",next:"legend"}
);
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={apply:arr.length?
function(target,els){
push_native.apply(target,slice.call(els));
}:
function(target,els){
var j=target.length,
i=0;
while((target[j++]=els[i++])){}
target.length=j-1;
}
};
}
function Sizzle(selector,context,results,seed){
var m,i,elem,nid,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
if((context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context);
}
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
results.push(elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
contains(context,elem)&&
elem.id===m){
results.push(elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&support.getElementsByClassName&&
context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(support.qsa&&
!compilerCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
if(nodeType!==1){
newContext=context;
newSelector=selector;
}else if(context.nodeName.toLowerCase()!=="object"){
if((nid=context.getAttribute("id"))){
nid=nid.replace(rcssescape,fcssescape);
}else{
context.setAttribute("id",(nid=expando));
}
groups=tokenize(selector);
i=groups.length;
while(i--){
groups[i]="#"+nid+" "+toSelector(groups[i]);
}
newSelector=groups.join(",");
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
}
if(newSelector){
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
}
return select(selector.replace(rtrim,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var el=document.createElement("fieldset");
try{
return!!fn(el);
}catch(e){
return false;
}finally{
if(el.parentNode){
el.parentNode.removeChild(el);
}
el=null;
}
}
function addHandle(attrs,handler){
var arr=attrs.split("|"),
i=arr.length;
while(i--){
Expr.attrHandle[arr[i]]=handler;
}
}
function siblingCheck(a,b){
var cur=b&&a,
diff=cur&&a.nodeType===1&&b.nodeType===1&&
a.sourceIndex-b.sourceIndex;
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return-1;
}
}
}
return a?1:-1;
}
function createInputPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type;
};
}
function createDisabledPseudo(disabled){
return function(elem){
if("form"in elem){
if(elem.parentNode&&elem.disabled===false){
if("label"in elem){
if("label"in elem.parentNode){
return elem.parentNode.disabled===disabled;
}else{
return elem.disabled===disabled;
}
}
return elem.isDisabled===disabled||
elem.isDisabled!==!disabled&&
disabledAncestor(elem)===disabled;
}
return elem.disabled===disabled;
}else if("label"in elem){
return elem.disabled===disabled;
}
return false;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
setDocument=Sizzle.setDocument=function(node){
var hasCompare,subWindow,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
docElem=document.documentElement;
documentIsHTML=!isXML(document);
if(preferredDoc!==document&&
(subWindow=document.defaultView)&&subWindow.top!==subWindow){
if(subWindow.addEventListener){
subWindow.addEventListener("unload",unloadHandler,false);
}else if(subWindow.attachEvent){
subWindow.attachEvent("onunload",unloadHandler);
}
}
support.attributes=assert(function(el){
el.className="i";
return!el.getAttribute("className");
});
support.getElementsByTagName=assert(function(el){
el.appendChild(document.createComment(""));
return!el.getElementsByTagName("*").length;
});
support.getElementsByClassName=rnative.test(document.getElementsByClassName);
support.getById=assert(function(el){
docElem.appendChild(el).id=expando;
return!document.getElementsByName||!document.getElementsByName(expando).length;
});
if(support.getById){
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var elem=context.getElementById(id);
return elem?[elem]:[];
}
};
}else{
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var node,i,elems,
elem=context.getElementById(id);
if(elem){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
elems=context.getElementsByName(id);
i=0;
while((elem=elems[i++])){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
}
}
return[];
}
};
}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else if(support.qsa){
return context.querySelectorAll(tag);
}
}:
function(tag,context){
var elem,
tmp=[],
i=0,
results=context.getElementsByTagName(tag);
if(tag==="*"){
while((elem=results[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(document.querySelectorAll))){
assert(function(el){
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";
if(el.querySelectorAll("[msallowcapture^='']").length){
rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");
}
if(!el.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!el.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!el.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
if(!el.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
});
assert(function(el){
el.innerHTML="<a href='' disabled='disabled'></a>"+
"<select disabled='disabled'><option/></select>";
var input=document.createElement("input");
input.setAttribute("type","hidden");
el.appendChild(input).setAttribute("name","D");
if(el.querySelectorAll("[name=d]").length){
rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");
}
if(el.querySelectorAll(":enabled").length!==2){
rbuggyQSA.push(":enabled",":disabled");
}
docElem.appendChild(el).disabled=true;
if(el.querySelectorAll(":disabled").length!==2){
rbuggyQSA.push(":enabled",":disabled");
}
el.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if((support.matchesSelector=rnative.test((matches=docElem.matches||
docElem.webkitMatchesSelector||
docElem.mozMatchesSelector||
docElem.oMatchesSelector||
docElem.msMatchesSelector)))){
assert(function(el){
support.disconnectedMatch=matches.call(el,"*");
matches.call(el,"[s!='']:x");
rbuggyMatches.push("!=",pseudos);
});
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?
function(a,b){
var adown=a.nodeType===9?a.documentElement:a,
bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
adown.contains?
adown.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
}:
function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
sortOrder=hasCompare?
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}
return compare&4?-1:1;
}:
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var cur,
i=0,
aup=a.parentNode,
bup=b.parentNode,
ap=[a],
bp=[b];
if(!aup||!bup){
return a===document?-1:
b===document?1:
aup?-1:
bup?1:
sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}else if(aup===bup){
return siblingCheck(a,b);
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?
siblingCheck(ap[i],bp[i]):
ap[i]===preferredDoc?-1:
bp[i]===preferredDoc?1:
0;
};
return document;
};
Sizzle.matches=function(expr,elements){
return Sizzle(expr,null,null,elements);
};
Sizzle.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&
!compilerCache[expr+" "]&&
(!rbuggyMatches||!rbuggyMatches.test(expr))&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){}
}
return Sizzle(expr,document,null,[elem]).length>0;
};
Sizzle.contains=function(context,elem){
if((context.ownerDocument||context)!==document){
setDocument(context);
}
return contains(context,elem);
};
Sizzle.attr=function(elem,name){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
return val!==undefined?
val:
support.attributes||!documentIsHTML?
elem.getAttribute(name):
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
};
Sizzle.escape=function(sel){
return(sel+"").replace(rcssescape,fcssescape);
};
Sizzle.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
Sizzle.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
results.splice(duplicates[j],1);
}
}
sortInput=null;
return results;
};
getText=Sizzle.getText=function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=getText(node);
}
}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=getText(elem);
}
}
}else if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
};
Expr=Sizzle.selectors={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
"ATTR":function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
"CHILD":function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
Sizzle.error(match[0]);
}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO":function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr["CHILD"].test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
"TAG":function(nodeNameSelector){
var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){return true;}:
function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
};
},
"CLASS":function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},
"ATTR":function(name,operator,check){
return function(elem){
var result=Sizzle.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
return operator==="="?result===check:
operator==="!="?result!==check:
operator==="^="?check&&result.indexOf(check)===0:
operator==="*="?check&&result.indexOf(check)>-1:
operator==="$="?check&&result.slice(-check.length)===check:
operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:
operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":
false;
};
},
"CHILD":function(type,what,argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,context,xml){
var cache,uniqueCache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
node=parent;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
uniqueCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
node=elem;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
uniqueCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
"PSEUDO":function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
"not":markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
"has":markFunction(function(selector){
return function(elem){
return Sizzle(selector,elem).length>0;
};
}),
"contains":markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;
};
}),
"lang":markFunction(function(lang){
if(!ridentifier.test(lang||"")){
Sizzle.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
"target":function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
"root":function(elem){
return elem===docElem;
},
"focus":function(elem){
return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},
"enabled":createDisabledPseudo(false),
"disabled":createDisabledPseudo(true),
"checked":function(elem){
var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);
},
"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
"parent":function(elem){
return!Expr.pseudos["empty"](elem);
},
"header":function(elem){
return rheader.test(elem.nodeName);
},
"input":function(elem){
return rinputs.test(elem.nodeName);
},
"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},
"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&
elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},
"first":createPositionalPseudo(function(){
return[0];
}),
"last":createPositionalPseudo(function(matchIndexes,length){
return[length-1];
}),
"eq":createPositionalPseudo(function(matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
"even":createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd":createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rcombinators.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrim," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
return parseOnly?
soFar.length:
soFar?
Sizzle.error(selector):
tokenCache(selector,groups).slice(0);
};
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
skip=combinator.next,
key=skip||dir,
checkNonElements=base&&key==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
return false;
}:
function(elem,context,xml){
var oldCache,uniqueCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});
if(skip&&skip===elem.nodeName.toLowerCase()){
elem=elem[dir]||elem;
}else if((oldCache=uniqueCache[key])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
uniqueCache[key]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
return false;
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
Sizzle(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems,
matcherOut=matcher?
postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results:
matcherIn;
if(matcher){
matcher(matcherIn,matcherOut,context,xml);
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!==outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrim,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context===document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!==document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
results.push(elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
Sizzle.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
compile=Sizzle.compile=function(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
};
select=Sizzle.select=function(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){
context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(el){
return el.compareDocumentPosition(document.createElement("fieldset"))&1;
});
if(!assert(function(el){
el.innerHTML="<a href='#'></a>";
return el.firstChild.getAttribute("href")==="#";
})){
addHandle("type|href|height|width",function(elem,name,isXML){
if(!isXML){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!support.attributes||!assert(function(el){
el.innerHTML="<input/>";
el.firstChild.setAttribute("value","");
return el.firstChild.getAttribute("value")==="";
})){
addHandle("value",function(elem,name,isXML){
if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!assert(function(el){
return el.getAttribute("disabled")==null;
})){
addHandle(booleans,function(elem,name,isXML){
var val;
if(!isXML){
return elem[name]===true?name.toLowerCase():
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
}
});
}
return Sizzle;
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
jQuery.escapeSelector=Sizzle.escape;
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&jQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=jQuery.expr.match.needsContext;
function nodeName(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
};
var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){
if(jQuery.isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return jQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier!=="string"){
return jQuery.grep(elements,function(elem){
return(indexOf.call(qualifier,elem)>-1)!==not;
});
}
if(risSimple.test(qualifier)){
return jQuery.filter(qualifier,elements,not);
}
qualifier=jQuery.filter(qualifier,elements);
return jQuery.grep(elements,function(elem){
return(indexOf.call(qualifier,elem)>-1)!==not&&elem.nodeType===1;
});
}
jQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
if(elems.length===1&&elem.nodeType===1){
return jQuery.find.matchesSelector(elem,expr)?[elem]:[];
}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
jQuery.fn.extend({
find:function(selector){
var i,ret,
len=this.length,
self=this;
if(typeof selector!=="string"){
return this.pushStack(jQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(self[i],this)){
return true;
}
}
}));
}
ret=this.pushStack([]);
for(i=0;i<len;i++){
jQuery.find(selector,self[i],ret);
}
return len>1?jQuery.uniqueSort(ret):ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
jQuery(selector):
selector||[],
false
).length;
}
});
var rootjQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
init=jQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootjQuery;
if(typeof selector==="string"){
if(selector[0]==="<"&&
selector[selector.length-1]===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
for(match in context){
if(jQuery.isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem){
this[0]=elem;
this.length=1;
}
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this[0]=selector;
this.length=1;
return this;
}else if(jQuery.isFunction(selector)){
return root.ready!==undefined?
root.ready(selector):
selector(jQuery);
}
return jQuery.makeArray(selector,this);
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
jQuery.fn.extend({
has:function(target){
var targets=jQuery(target,this),
l=targets.length;
return this.filter(function(){
var i=0;
for(;i<l;i++){
if(jQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
targets=typeof selectors!=="string"&&jQuery(selectors);
if(!rneedsContext.test(selectors)){
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(targets?
targets.index(cur)>-1:
cur.nodeType===1&&
jQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return indexOf.call(jQuery(elem),this[0]);
}
return indexOf.call(this,
elem.jquery?elem[0]:elem
);
},
add:function(selector,context){
return this.pushStack(
jQuery.uniqueSort(
jQuery.merge(this.get(),jQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;
}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
if(nodeName(elem,"iframe")){
return elem.contentDocument;
}
if(nodeName(elem,"template")){
elem=elem.content||elem;
}
return jQuery.merge([],elem.childNodes);
}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
matched=jQuery.filter(selector,matched);
}
if(this.length>1){
if(!guaranteedUnique[name]){
jQuery.uniqueSort(matched);
}
if(rparentsprev.test(name)){
matched.reverse();
}
}
return this.pushStack(matched);
};
});
var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);
function createOptions(options){
var object={};
jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
jQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
jQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=locked||options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
jQuery.each(args,function(_,arg){
if(jQuery.isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
jQuery.each(arguments,function(_,arg){
var index;
while((index=jQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
jQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=queue=[];
if(!memory&&!firing){
list=memory="";
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
function Identity(v){
return v;
}
function Thrower(ex){
throw ex;
}
function adoptValue(value,resolve,reject,noValue){
var method;
try{
if(value&&jQuery.isFunction((method=value.promise))){
method.call(value).done(resolve).fail(reject);
}else if(value&&jQuery.isFunction((method=value.then))){
method.call(value,resolve,reject);
}else{
resolve.apply(undefined,[value].slice(noValue));
}
}catch(value){
reject.apply(undefined,[value]);
}
}
jQuery.extend({
Deferred:function(func){
var tuples=[
["notify","progress",jQuery.Callbacks("memory"),
jQuery.Callbacks("memory"),2],
["resolve","done",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),0,"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),1,"rejected"]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
"catch":function(fn){
return promise.then(null,fn);
},
pipe:function(){
var fns=arguments;
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
then:function(onFulfilled,onRejected,onProgress){
var maxDepth=0;
function resolve(depth,deferred,handler,special){
return function(){
var that=this,
args=arguments,
mightThrow=function(){
var returned,then;
if(depth<maxDepth){
return;
}
returned=handler.apply(that,args);
if(returned===deferred.promise()){
throw new TypeError("Thenable self-resolution");
}
then=returned&&
(typeof returned==="object"||
typeof returned==="function")&&
returned.then;
if(jQuery.isFunction(then)){
if(special){
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special)
);
}else{
maxDepth++;
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special),
resolve(maxDepth,deferred,Identity,
deferred.notifyWith)
);
}
}else{
if(handler!==Identity){
that=undefined;
args=[returned];
}
(special||deferred.resolveWith)(that,args);
}
},
process=special?
mightThrow:
function(){
try{
mightThrow();
}catch(e){
if(jQuery.Deferred.exceptionHook){
jQuery.Deferred.exceptionHook(e,
process.stackTrace);
}
if(depth+1>=maxDepth){
if(handler!==Thrower){
that=undefined;
args=[e];
}
deferred.rejectWith(that,args);
}
}
};
if(depth){
process();
}else{
if(jQuery.Deferred.getStackHook){
process.stackTrace=jQuery.Deferred.getStackHook();
}
window.setTimeout(process);
}
};
}
return jQuery.Deferred(function(newDefer){
tuples[0][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onProgress)?
onProgress:
Identity,
newDefer.notifyWith
)
);
tuples[1][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onFulfilled)?
onFulfilled:
Identity
)
);
tuples[2][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onRejected)?
onRejected:
Thrower
)
);
}).promise();
},
promise:function(obj){
return obj!=null?jQuery.extend(obj,promise):promise;
}
},
deferred={};
jQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[5];
promise[tuple[1]]=list.add;
if(stateString){
list.add(
function(){
state=stateString;
},
tuples[3-i][2].disable,
tuples[0][2].lock
);
}
list.add(tuple[3].fire);
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(singleValue){
var
remaining=arguments.length,
i=remaining,
resolveContexts=Array(i),
resolveValues=slice.call(arguments),
master=jQuery.Deferred(),
updateFunc=function(i){
return function(value){
resolveContexts[i]=this;
resolveValues[i]=arguments.length>1?slice.call(arguments):value;
if(!(--remaining)){
master.resolveWith(resolveContexts,resolveValues);
}
};
};
if(remaining<=1){
adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,
!remaining);
if(master.state()==="pending"||
jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){
return master.then();
}
}
while(i--){
adoptValue(resolveValues[i],updateFunc(i),master.reject);
}
return master.promise();
}
});
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
jQuery.Deferred.exceptionHook=function(error,stack){
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){
window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);
}
};
jQuery.readyException=function(error){
window.setTimeout(function(){
throw error;
});
};
var readyList=jQuery.Deferred();
jQuery.fn.ready=function(fn){
readyList
.then(fn)
.catch(function(error){
jQuery.readyException(error);
});
return this;
};
jQuery.extend({
isReady:false,
readyWait:1,
ready:function(wait){
if(wait===true?--jQuery.readyWait:jQuery.isReady){
return;
}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[jQuery]);
}
});
jQuery.ready.then=readyList.then;
function completed(){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
jQuery.ready();
}
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(jQuery.ready);
}else{
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
len=elems.length,
bulk=key==null;
if(jQuery.type(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!jQuery.isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,value){
return bulk.call(jQuery(elem),value);
};
}
}
if(fn){
for(;i<len;i++){
fn(
elems[i],key,raw?
value:
value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
if(chainable){
return elems;
}
if(bulk){
return fn.call(elems);
}
return len?fn(elems[0],key):emptyGet;
};
var acceptData=function(owner){
return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);
};
function Data(){
this.expando=jQuery.expando+Data.uid++;
}
Data.uid=1;
Data.prototype={
cache:function(owner){
var value=owner[this.expando];
if(!value){
value={};
if(acceptData(owner)){
if(owner.nodeType){
owner[this.expando]=value;
}else{
Object.defineProperty(owner,this.expando,{
value:value,
configurable:true
});
}
}
}
return value;
},
set:function(owner,data,value){
var prop,
cache=this.cache(owner);
if(typeof data==="string"){
cache[jQuery.camelCase(data)]=value;
}else{
for(prop in data){
cache[jQuery.camelCase(prop)]=data[prop];
}
}
return cache;
},
get:function(owner,key){
return key===undefined?
this.cache(owner):
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];
},
access:function(owner,key,value){
if(key===undefined||
((key&&typeof key==="string")&&value===undefined)){
return this.get(owner,key);
}
this.set(owner,key,value);
return value!==undefined?value:key;
},
remove:function(owner,key){
var i,
cache=owner[this.expando];
if(cache===undefined){
return;
}
if(key!==undefined){
if(Array.isArray(key)){
key=key.map(jQuery.camelCase);
}else{
key=jQuery.camelCase(key);
key=key in cache?
[key]:
(key.match(rnothtmlwhite)||[]);
}
i=key.length;
while(i--){
delete cache[key[i]];
}
}
if(key===undefined||jQuery.isEmptyObject(cache)){
if(owner.nodeType){
owner[this.expando]=undefined;
}else{
delete owner[this.expando];
}
}
},
hasData:function(owner){
var cache=owner[this.expando];
return cache!==undefined&&!jQuery.isEmptyObject(cache);
}
};
var dataPriv=new Data();
var dataUser=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/[A-Z]/g;
function getData(data){
if(data==="true"){
return true;
}
if(data==="false"){
return false;
}
if(data==="null"){
return null;
}
if(data===+data+""){
return+data;
}
if(rbrace.test(data)){
return JSON.parse(data);
}
return data;
}
function dataAttr(elem,key,data){
var name;
if(data===undefined&&elem.nodeType===1){
name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=getData(data);
}catch(e){}
dataUser.set(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
jQuery.extend({
hasData:function(elem){
return dataUser.hasData(elem)||dataPriv.hasData(elem);
},
data:function(elem,name,data){
return dataUser.access(elem,name,data);
},
removeData:function(elem,name){
dataUser.remove(elem,name);
},
_data:function(elem,name,data){
return dataPriv.access(elem,name,data);
},
_removeData:function(elem,name){
dataPriv.remove(elem,name);
}
});
jQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=dataUser.get(elem);
if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
dataPriv.set(elem,"hasDataAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
dataUser.set(this,key);
});
}
return access(this,function(value){
var data;
if(elem&&value===undefined){
data=dataUser.get(elem,key);
if(data!==undefined){
return data;
}
data=dataAttr(elem,key);
if(data!==undefined){
return data;
}
return;
}
this.each(function(){
dataUser.set(this,key,value);
});
},null,value,arguments.length>1,null,true);
},
removeData:function(key){
return this.each(function(){
dataUser.remove(this,key);
});
}
});
jQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=dataPriv.get(elem,type);
if(data){
if(!queue||Array.isArray(data)){
queue=dataPriv.access(elem,type,jQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),
next=function(){
jQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return dataPriv.get(elem,key)||dataPriv.access(elem,key,{
empty:jQuery.Callbacks("once memory").add(function(){
dataPriv.remove(elem,[type+"queue",key]);
})
});
}
});
jQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return jQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=jQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=dataPriv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var isHiddenWithinTree=function(elem,el){
elem=el||elem;
return elem.style.display==="none"||
elem.style.display===""&&
jQuery.contains(elem.ownerDocument,elem)&&
jQuery.css(elem,"display")==="none";
};
var swap=function(elem,options,callback,args){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,
scale=1,
maxIterations=20,
currentValue=tween?
function(){
return tween.cur();
}:
function(){
return jQuery.css(elem,prop,"");
},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(jQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
unit=unit||initialInUnit[3];
valueParts=valueParts||[];
initialInUnit=+initial||1;
do{
scale=scale||".5";
initialInUnit=initialInUnit/scale;
jQuery.style(elem,prop,initialInUnit+unit);
}while(
scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations
);
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var defaultDisplayMap={};
function getDefaultDisplay(elem){
var temp,
doc=elem.ownerDocument,
nodeName=elem.nodeName,
display=defaultDisplayMap[nodeName];
if(display){
return display;
}
temp=doc.body.appendChild(doc.createElement(nodeName));
display=jQuery.css(temp,"display");
temp.parentNode.removeChild(temp);
if(display==="none"){
display="block";
}
defaultDisplayMap[nodeName]=display;
return display;
}
function showHide(elements,show){
var display,elem,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
display=elem.style.display;
if(show){
if(display==="none"){
values[index]=dataPriv.get(elem,"display")||null;
if(!values[index]){
elem.style.display="";
}
}
if(elem.style.display===""&&isHiddenWithinTree(elem)){
values[index]=getDefaultDisplay(elem);
}
}else{
if(display!=="none"){
values[index]="none";
dataPriv.set(elem,"display",display);
}
}
}
for(index=0;index<length;index++){
if(values[index]!=null){
elements[index].style.display=values[index];
}
}
return elements;
}
jQuery.fn.extend({
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHiddenWithinTree(this)){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
}
});
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
var rscriptType=(/^$|\/(?:java|ecma)script/i);
var wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:[0,"",""]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function getAll(context,tag){
var ret;
if(typeof context.getElementsByTagName!=="undefined"){
ret=context.getElementsByTagName(tag||"*");
}else if(typeof context.querySelectorAll!=="undefined"){
ret=context.querySelectorAll(tag||"*");
}else{
ret=[];
}
if(tag===undefined||tag&&nodeName(context,tag)){
return jQuery.merge([context],ret);
}
return ret;
}
function setGlobalEval(elems,refElements){
var i=0,
l=elems.length;
for(;i<l;i++){
dataPriv.set(
elems[i],
"globalEval",
!refElements||dataPriv.get(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/;
function buildFragment(elems,context,scripts,selection,ignored){
var elem,tmp,tag,wrap,contains,j,
fragment=context.createDocumentFragment(),
nodes=[],
i=0,
l=elems.length;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(jQuery.type(elem)==="object"){
jQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent="";
}
}
}
fragment.textContent="";
i=0;
while((elem=nodes[i++])){
if(selection&&jQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(contains){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
return fragment;
}
(function(){
var fragment=document.createDocumentFragment(),
div=fragment.appendChild(document.createElement("div")),
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
})();
var documentElement=document.documentElement;
var
rkeyEvent=/^key/,
rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,
rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
jQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
}
return elem.each(function(){
jQuery.event.add(this,types,fn,data,selector);
});
}
jQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var handleObjIn,eventHandle,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.get(elem);
if(!elemData){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(selector){
jQuery.find.matchesSelector(documentElement,selector);
}
if(!handler.guid){
handler.guid=jQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events={};
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?
jQuery.event.dispatch.apply(elem,arguments):undefined;
};
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&jQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
jQuery.event.global[type]=true;
}
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,origCount,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
jQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
jQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(jQuery.isEmptyObject(events)){
dataPriv.remove(elem,"handle events");
}
},
dispatch:function(nativeEvent){
var event=jQuery.event.fix(nativeEvent);
var i,j,ret,matched,handleObj,handlerQueue,
args=new Array(arguments.length),
handlers=(dataPriv.get(this,"events")||{})[event.type]||[],
special=jQuery.event.special[event.type]||{};
args[0]=event;
for(i=1;i<arguments.length;i++){
args[i]=arguments[i];
}
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,handleObj,sel,matchedHandlers,matchedSelectors,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&
cur.nodeType&&
!(event.type==="click"&&event.button>=1)){
for(;cur!==this;cur=cur.parentNode||this){
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){
matchedHandlers=[];
matchedSelectors={};
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matchedSelectors[sel]===undefined){
matchedSelectors[sel]=handleObj.needsContext?
jQuery(sel,this).index(cur)>-1:
jQuery.find(sel,this,null,[cur]).length;
}
if(matchedSelectors[sel]){
matchedHandlers.push(handleObj);
}
}
if(matchedHandlers.length){
handlerQueue.push({elem:cur,handlers:matchedHandlers});
}
}
}
}
cur=this;
if(delegateCount<handlers.length){
handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
addProp:function(name,hook){
Object.defineProperty(jQuery.Event.prototype,name,{
enumerable:true,
configurable:true,
get:jQuery.isFunction(hook)?
function(){
if(this.originalEvent){
return hook(this.originalEvent);
}
}:
function(){
if(this.originalEvent){
return this.originalEvent[name];
}
},
set:function(value){
Object.defineProperty(this,name,{
enumerable:true,
configurable:true,
writable:true,
value:value
});
}
});
},
fix:function(originalEvent){
return originalEvent[jQuery.expando]?
originalEvent:
new jQuery.Event(originalEvent);
},
special:{
load:{
noBubble:true
},
focus:{
trigger:function(){
if(this!==safeActiveElement()&&this.focus){
this.focus();
return false;
}
},
delegateType:"focusin"
},
blur:{
trigger:function(){
if(this===safeActiveElement()&&this.blur){
this.blur();
return false;
}
},
delegateType:"focusout"
},
click:{
trigger:function(){
if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){
this.click();
return false;
}
},
_default:function(event){
return nodeName(event.target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
}
};
jQuery.removeEvent=function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
};
jQuery.Event=function(src,props){
if(!(this instanceof jQuery.Event)){
return new jQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
this.target=(src.target&&src.target.nodeType===3)?
src.target.parentNode:
src.target;
this.currentTarget=src.currentTarget;
this.relatedTarget=src.relatedTarget;
}else{
this.type=src;
}
if(props){
jQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true;
};
jQuery.Event.prototype={
constructor:jQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
isSimulated:false,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&!this.isSimulated){
e.preventDefault();
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopPropagation();
}
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
jQuery.each({
altKey:true,
bubbles:true,
cancelable:true,
changedTouches:true,
ctrlKey:true,
detail:true,
eventPhase:true,
metaKey:true,
pageX:true,
pageY:true,
shiftKey:true,
view:true,
"char":true,
charCode:true,
key:true,
keyCode:true,
button:true,
buttons:true,
clientX:true,
clientY:true,
offsetX:true,
offsetY:true,
pointerId:true,
pointerType:true,
screenX:true,
screenY:true,
targetTouches:true,
toElement:true,
touches:true,
which:function(event){
var button=event.button;
if(event.which==null&&rkeyEvent.test(event.type)){
return event.charCode!=null?event.charCode:event.keyCode;
}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){
if(button&1){
return 1;
}
if(button&2){
return 3;
}
if(button&4){
return 2;
}
return 0;
}
return event.which;
}
},jQuery.event.addProp);
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
jQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
jQuery.event.remove(this,types,fn,selector);
});
}
});
var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptTypeMasked=/^true\/(.*)/,
rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function manipulationTarget(elem,content){
if(nodeName(elem,"table")&&
nodeName(content.nodeType!==11?content:content.firstChild,"tr")){
return jQuery(">tbody",elem)[0]||elem;
}
return elem;
}
function disableScript(elem){
elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
var match=rscriptTypeMasked.exec(elem.type);
if(match){
elem.type=match[1];
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;
if(dest.nodeType!==1){
return;
}
if(dataPriv.hasData(src)){
pdataOld=dataPriv.access(src);
pdataCur=dataPriv.set(dest,pdataOld);
events=pdataOld.events;
if(events){
delete pdataCur.handle;
pdataCur.events={};
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
jQuery.event.add(dest,type,events[type][i]);
}
}
}
}
if(dataUser.hasData(src)){
udataOld=dataUser.access(src);
udataCur=jQuery.extend({},udataOld);
dataUser.set(dest,udataCur);
}
}
function fixInput(src,dest){
var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.checked=src.checked;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=concat.apply([],args);
var fragment,first,scripts,hasScripts,node,doc,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
isFunction=jQuery.isFunction(value);
if(isFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(isFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=jQuery.clone(node,true,true);
if(hasScripts){
jQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!dataPriv.access(node,"globalEval")&&
jQuery.contains(doc,node)){
if(node.src){
if(jQuery._evalUrl){
jQuery._evalUrl(node.src);
}
}else{
DOMEval(node.textContent.replace(rcleanScript,""),doc);
}
}
}
}
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
nodes=selector?jQuery.filter(selector,elem):elem,
i=0;
for(;(node=nodes[i])!=null;i++){
if(!keepData&&node.nodeType===1){
jQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&jQuery.contains(node.ownerDocument,node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
jQuery.extend({
htmlPrefilter:function(html){
return html.replace(rxhtmlTag,"<$1></$2>");
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var i,l,srcElements,destElements,
clone=elem.cloneNode(true),
inPage=jQuery.contains(elem.ownerDocument,elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&
!jQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;i<l;i++){
fixInput(srcElements[i],destElements[i]);
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;i<l;i++){
cloneCopyEvent(srcElements[i],destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
return clone;
},
cleanData:function(elems){
var data,elem,type,
special=jQuery.event.special,
i=0;
for(;(elem=elems[i])!==undefined;i++){
if(acceptData(elem)){
if((data=elem[dataPriv.expando])){
if(data.events){
for(type in data.events){
if(special[type]){
jQuery.event.remove(elem,type);
}else{
jQuery.removeEvent(elem,type,data.handle);
}
}
}
elem[dataPriv.expando]=undefined;
}
if(elem[dataUser.expando]){
elem[dataUser.expando]=undefined;
}
}
}
}
});
jQuery.fn.extend({
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
jQuery.text(this):
this.empty().each(function(){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
this.textContent=value;
}
});
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.textContent="";
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined&&elem.nodeType===1){
return elem.innerHTML;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=jQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(jQuery.inArray(this,ignored)<0){
jQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var elems,
ret=[],
insert=jQuery(selector),
last=insert.length-1,
i=0;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
(function(){
function computeStyleTests(){
if(!div){
return;
}
div.style.cssText=
"box-sizing:border-box;"+
"position:relative;display:block;"+
"margin:auto;border:1px;padding:1px;"+
"top:1%;width:50%";
div.innerHTML="";
documentElement.appendChild(container);
var divStyle=window.getComputedStyle(div);
pixelPositionVal=divStyle.top!=="1%";
reliableMarginLeftVal=divStyle.marginLeft==="2px";
boxSizingReliableVal=divStyle.width==="4px";
div.style.marginRight="50%";
pixelMarginRightVal=divStyle.marginRight==="4px";
documentElement.removeChild(container);
div=null;
}
var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+
"padding:0;margin-top:1px;position:absolute";
container.appendChild(div);
jQuery.extend(support,{
pixelPosition:function(){
computeStyleTests();
return pixelPositionVal;
},
boxSizingReliable:function(){
computeStyleTests();
return boxSizingReliableVal;
},
pixelMarginRight:function(){
computeStyleTests();
return pixelMarginRightVal;
},
reliableMarginLeft:function(){
computeStyleTests();
return reliableMarginLeftVal;
}
});
})();
function curCSS(elem,name,computed){
var width,minWidth,maxWidth,ret,
style=elem.style;
computed=computed||getStyles(elem);
if(computed){
ret=computed.getPropertyValue(name)||computed[name];
if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){
ret=jQuery.style(elem,name);
}
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret!==undefined?
ret+"":
ret;
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
rcustomProp=/^--/,
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
},
cssPrefixes=["Webkit","Moz","ms"],
emptyStyle=document.createElement("div").style;
function vendorPropName(name){
if(name in emptyStyle){
return name;
}
var capName=name[0].toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function finalPropName(name){
var ret=jQuery.cssProps[name];
if(!ret){
ret=jQuery.cssProps[name]=vendorPropName(name)||name;
}
return ret;
}
function setPositiveNumber(elem,value,subtract){
var matches=rcssNum.exec(value);
return matches?
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):
value;
}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){
var i,
val=0;
if(extra===(isBorderBox?"border":"content")){
i=4;
}else{
i=name==="width"?1:0;
}
for(;i<4;i+=2){
if(extra==="margin"){
val+=jQuery.css(elem,extra+cssExpand[i],true,styles);
}
if(isBorderBox){
if(extra==="content"){
val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(extra!=="margin"){
val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){
val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
return val;
}
function getWidthOrHeight(elem,name,extra){
var valueIsBorderBox,
styles=getStyles(elem),
val=curCSS(elem,name,styles),
isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(rnumnonpx.test(val)){
return val;
}
valueIsBorderBox=isBorderBox&&
(support.boxSizingReliable()||val===elem.style[name]);
if(val==="auto"){
val=elem["offset"+name[0].toUpperCase()+name.slice(1)];
}
val=parseFloat(val)||0;
return(val+
augmentWidthOrHeight(
elem,
name,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles
)
)+"px";
}
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
"animationIterationCount":true,
"columnCount":true,
"fillOpacity":true,
"flexGrow":true,
"flexShrink":true,
"fontWeight":true,
"lineHeight":true,
"opacity":true,
"order":true,
"orphans":true,
"widows":true,
"zIndex":true,
"zoom":true
},
cssProps:{
"float":"cssFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=jQuery.camelCase(name),
isCustomProp=rcustomProp.test(name),
style=elem.style;
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"){
value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
if(isCustomProp){
style.setProperty(name,value);
}else{
style[name]=value;
}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var val,num,hooks,
origName=jQuery.camelCase(name),
isCustomProp=rcustomProp.test(name);
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
jQuery.each(["height","width"],function(i,name){
jQuery.cssHooks[name]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(jQuery.css(elem,"display"))&&
(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,name,extra);
}):
getWidthOrHeight(elem,name,extra);
}
},
set:function(elem,value,extra){
var matches,
styles=extra&&getStyles(elem),
subtract=extra&&augmentWidthOrHeight(
elem,
name,
extra,
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
styles
);
if(subtract&&(matches=rcssNum.exec(value))&&
(matches[3]||"px")!=="px"){
elem.style[name]=value;
value=jQuery.css(elem,name);
}
return setPositiveNumber(elem,value,subtract);
}
};
});
jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(parseFloat(curCSS(elem,"marginLeft"))||
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
})
)+"px";
}
}
);
jQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
jQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(!rmargin.test(prefix)){
jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
jQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(Array.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=jQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name);
},name,value,arguments.length>1);
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
jQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||jQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=jQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=jQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(jQuery.fx.step[tween.prop]){
jQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&
(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||
jQuery.cssHooks[tween.prop])){
jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
jQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var
fxNow,inProgress,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function schedule(){
if(inProgress){
if(document.hidden===false&&window.requestAnimationFrame){
window.requestAnimationFrame(schedule);
}else{
window.setTimeout(schedule,jQuery.fx.interval);
}
jQuery.fx.tick();
}
}
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=jQuery.now());
}
function genFx(type,includeWidth){
var which,
i=0,
attrs={height:type};
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,
isBox="width"in props||"height"in props,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHiddenWithinTree(elem),
dataShow=dataPriv.get(elem,"fxshow");
if(!opts.queue){
hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
for(prop in props){
value=props[prop];
if(rfxtypes.test(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
}
}
propTween=!jQuery.isEmptyObject(props);
if(!propTween&&jQuery.isEmptyObject(orig)){
return;
}
if(isBox&&elem.nodeType===1){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
restoreDisplay=dataShow&&dataShow.display;
if(restoreDisplay==null){
restoreDisplay=dataPriv.get(elem,"display");
}
display=jQuery.css(elem,"display");
if(display==="none"){
if(restoreDisplay){
display=restoreDisplay;
}else{
showHide([elem],true);
restoreDisplay=elem.style.display||restoreDisplay;
display=jQuery.css(elem,"display");
showHide([elem]);
}
}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){
if(jQuery.css(elem,"float")==="none"){
if(!propTween){
anim.done(function(){
style.display=restoreDisplay;
});
if(restoreDisplay==null){
display=style.display;
restoreDisplay=display==="none"?"":display;
}
}
style.display="inline-block";
}
}
}
if(opts.overflow){
style.overflow="hidden";
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
propTween=false;
for(prop in orig){
if(!propTween){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
showHide([elem],true);
}
anim.done(function(){
if(!hidden){
showHide([elem]);
}
dataPriv.remove(elem,"fxshow");
for(prop in orig){
jQuery.style(elem,prop,orig[prop]);
}
});
}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=propTween.start;
if(hidden){
propTween.end=propTween.start;
propTween.start=0;
}
}
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(Array.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=jQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=jQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}
if(!length){
deferred.notifyWith(elem,[animation,1,0]);
}
deferred.resolveWith(elem,[animation]);
return false;
},
animation=deferred.promise({
elem:elem,
props:jQuery.extend({},properties),
opts:jQuery.extend(true,{
specialEasing:{},
easing:jQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=jQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(jQuery.isFunction(result.stop)){
jQuery._queueHooks(animation.elem,animation.opts.queue).stop=
jQuery.proxy(result.stop,result);
}
return result;
}
}
jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
animation
.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
jQuery.fx.timer(
jQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation;
}
jQuery.Animation=jQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(jQuery.isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnothtmlwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
jQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
jQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing
};
if(jQuery.fx.off){
opt.duration=0;
}else{
if(typeof opt.duration!=="number"){
if(opt.duration in jQuery.fx.speeds){
opt.duration=jQuery.fx.speeds[opt.duration];
}else{
opt.duration=jQuery.fx.speeds._default;
}
}
}
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(jQuery.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
jQuery.dequeue(this,opt.queue);
}
};
return opt;
};
jQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHiddenWithinTree).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=jQuery.isEmptyObject(prop),
optall=jQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||dataPriv.get(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=jQuery.timers,
data=dataPriv.get(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
jQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=dataPriv.get(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=jQuery.timers,
length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
jQuery.each(["toggle","show","hide"],function(i,name){
var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
jQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
jQuery.timers=[];
jQuery.fx.tick=function(){
var timer,
i=0,
timers=jQuery.timers;
fxNow=jQuery.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
jQuery.fx.stop();
}
fxNow=undefined;
};
jQuery.fx.timer=function(timer){
jQuery.timers.push(timer);
jQuery.fx.start();
};
jQuery.fx.interval=13;
jQuery.fx.start=function(){
if(inProgress){
return;
}
inProgress=true;
schedule();
};
jQuery.fx.stop=function(){
inProgress=null;
};
jQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
jQuery.fn.delay=function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var input=document.createElement("input"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t";
})();
var boolHook,
attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({
attr:function(name,value){
return access(this,jQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
jQuery.removeAttr(this,name);
});
}
});
jQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return jQuery.prop(elem,name,value);
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
hooks=jQuery.attrHooks[name.toLowerCase()]||
(jQuery.expr.match.bool.test(name)?boolHook:undefined);
}
if(value!==undefined){
if(value===null){
jQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,
i=0,
attrNames=value&&value.match(rnothtmlwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
elem.removeAttribute(name);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
jQuery.removeAttr(elem,name);
}else{
elem.setAttribute(name,name);
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){
var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){
var ret,handle,
lowercaseName=name.toLowerCase();
if(!isXML){
handle=attrHandle[lowercaseName];
attrHandle[lowercaseName]=ret;
ret=getter(elem,name,isXML)!=null?
lowercaseName:
null;
attrHandle[lowercaseName]=handle;
}
return ret;
};
});
var rfocusable=/^(?:input|select|textarea|button)$/i,
rclickable=/^(?:a|area)$/i;
jQuery.fn.extend({
prop:function(name,value){
return access(this,jQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
return this.each(function(){
delete this[jQuery.propFix[name]||name];
});
}
});
jQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=jQuery.find.attr(elem,"tabindex");
if(tabindex){
return parseInt(tabindex,10);
}
if(
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&
elem.href
){
return 0;
}
return-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.optSelected){
jQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent&&parent.parentNode){
parent.parentNode.selectedIndex;
}
return null;
},
set:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
jQuery.propFix[this.toLowerCase()]=this;
});
function stripAndCollapse(value){
var tokens=value.match(rnothtmlwhite)||[];
return tokens.join(" ");
}
function getClass(elem){
return elem.getAttribute&&elem.getAttribute("class")||"";
}
jQuery.fn.extend({
addClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
if(typeof value==="string"&&value){
classes=value.match(rnothtmlwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
j=0;
while((clazz=classes[j++])){
if(cur.indexOf(" "+clazz+" ")<0){
cur+=clazz+" ";
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
elem.setAttribute("class",finalValue);
}
}
}
}
return this;
},
removeClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
if(typeof value==="string"&&value){
classes=value.match(rnothtmlwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
j=0;
while((clazz=classes[j++])){
while(cur.indexOf(" "+clazz+" ")>-1){
cur=cur.replace(" "+clazz+" "," ");
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
elem.setAttribute("class",finalValue);
}
}
}
}
return this;
},
toggleClass:function(value,stateVal){
var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){
return stateVal?this.addClass(value):this.removeClass(value);
}
if(jQuery.isFunction(value)){
return this.each(function(i){
jQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
return this.each(function(){
var className,i,self,classNames;
if(type==="string"){
i=0;
self=jQuery(this);
classNames=value.match(rnothtmlwhite)||[];
while((className=classNames[i++])){
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
dataPriv.set(this,"__className__",className);
}
if(this.setAttribute){
this.setAttribute("class",
className||value===false?
"":
dataPriv.get(this,"__className__")||""
);
}
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){
return true;
}
}
return false;
}
});
var rreturn=/\r/g;
jQuery.fn.extend({
val:function(value){
var hooks,ret,isFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=jQuery.valHooks[elem.type]||
jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
if(typeof ret==="string"){
return ret.replace(rreturn,"");
}
return ret==null?"":ret;
}
return;
}
isFunction=jQuery.isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(isFunction){
val=value.call(this,i,jQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(Array.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
jQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=jQuery.find.attr(elem,"value");
return val!=null?
val:
stripAndCollapse(jQuery.text(elem));
}
},
select:{
get:function(elem){
var value,option,i,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one",
values=one?null:[],
max=one?index+1:options.length;
if(index<0){
i=max;
}else{
i=one?index:0;
}
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
!option.disabled&&
(!option.parentNode.disabled||
!nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=jQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(option.selected=
jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1
){
optionSet=true;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return values;
}
}
}
});
jQuery.each(["radio","checkbox"],function(){
jQuery.valHooks[this]={
set:function(elem,value){
if(Array.isArray(value)){
return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
jQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;
jQuery.extend(jQuery.event,{
trigger:function(event,data,elem,onlyHandlers){
var i,cur,tmp,bubbleType,ontype,handle,special,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+jQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?
event:
new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(dataPriv.get(cur,"events")||{})[event.type]&&
dataPriv.get(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if((!special._default||
special._default.apply(eventPath.pop(),data)===false)&&
acceptData(elem)){
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
simulate:function(type,elem,event){
var e=jQuery.extend(
new jQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
jQuery.event.trigger(e,null,elem);
}
});
jQuery.fn.extend({
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return jQuery.event.trigger(type,data,elem,true);
}
}
});
jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery.fn.extend({
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
}
});
support.focusin="onfocusin"in window;
if(!support.focusin){
jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var handler=function(event){
jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));
};
jQuery.event.special[fix]={
setup:function(){
var doc=this.ownerDocument||this,
attaches=dataPriv.access(doc,fix);
if(!attaches){
doc.addEventListener(orig,handler,true);
}
dataPriv.access(doc,fix,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this,
attaches=dataPriv.access(doc,fix)-1;
if(!attaches){
doc.removeEventListener(orig,handler,true);
dataPriv.remove(doc,fix);
}else{
dataPriv.access(doc,fix,attaches);
}
}
};
});
}
var location=window.location;
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseXML=function(data){
var xml;
if(!data||typeof data!=="string"){
return null;
}
try{
xml=(new window.DOMParser()).parseFromString(data,"text/xml");
}catch(e){
xml=undefined;
}
if(!xml||xml.getElementsByTagName("parsererror").length){
jQuery.error("Invalid XML: "+data);
}
return xml;
};
var
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(Array.isArray(obj)){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&jQuery.type(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
jQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,valueOrFunction){
var value=jQuery.isFunction(valueOrFunction)?
valueOrFunction():
valueOrFunction;
s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);
};
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){
jQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&");
};
jQuery.fn.extend({
serialize:function(){
return jQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this;
})
.filter(function(){
var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
})
.map(function(i,elem){
var val=jQuery(this).val();
if(val==null){
return null;
}
if(Array.isArray(val)){
return jQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
});
}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
var
r20=/%20/g,
rhash=/#.*$/,
rantiCache=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
prefilters={},
transports={},
allTypes="*/".concat("*"),
originAnchor=document.createElement("a");
originAnchor.href=location.href;
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];
if(jQuery.isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType[0]==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var key,deep,
flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
jQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var ct,type,finalDataType,firstDataType,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s.throws){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:location.href,
type:"GET",
isLocal:rlocalProtocol.test(location.protocol),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":JSON.parse,
"text xml":jQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
ajaxExtend(jQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var transport,
cacheURL,
responseHeadersString,
responseHeaders,
timeoutTimer,
urlAnchor,
completed,
fireGlobals,
i,
uncached,
s=jQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
jQuery(callbackContext):
jQuery.event,
deferred=jQuery.Deferred(),
completeDeferred=jQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(completed){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()]=match[2];
}
}
match=responseHeaders[key.toLowerCase()];
}
return match==null?null:match;
},
getAllResponseHeaders:function(){
return completed?responseHeadersString:null;
},
setRequestHeader:function(name,value){
if(completed==null){
name=requestHeadersNames[name.toLowerCase()]=
requestHeadersNames[name.toLowerCase()]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(completed==null){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(completed){
jqXHR.always(map[jqXHR.status]);
}else{
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR);
s.url=((url||s.url||location.href)+"")
.replace(rprotocol,location.protocol+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];
if(s.crossDomain==null){
urlAnchor=document.createElement("a");
try{
urlAnchor.href=s.url;
urlAnchor.href=urlAnchor.href;
s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==
urlAnchor.protocol+"//"+urlAnchor.host;
}catch(e){
s.crossDomain=true;
}
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(completed){
return jqXHR;
}
fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url.replace(rhash,"");
if(!s.hasContent){
uncached=s.url.slice(cacheURL.length);
if(s.data){
cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;
delete s.data;
}
if(s.cache===false){
cacheURL=cacheURL.replace(rantiCache,"$1");
uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached;
}
s.url=cacheURL+uncached;
}else if(s.data&&s.processData&&
(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){
s.data=s.data.replace(r20,"+");
}
if(s.ifModified){
if(jQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);
}
if(jQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){
return jqXHR.abort();
}
strAbort="abort";
completeDeferred.add(s.complete);
jqXHR.done(s.success);
jqXHR.fail(s.error);
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(completed){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
completed=false;
transport.send(requestHeaders,done);
}catch(e){
if(completed){
throw e;
}
done(-1,e);
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(completed){
return;
}
completed=true;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
jQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
jQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return jQuery.get(url,undefined,callback,"script");
}
});
jQuery.each(["get","post"],function(i,method){
jQuery[method]=function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return jQuery.ajax(jQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},jQuery.isPlainObject(url)&&url));
};
});
jQuery._evalUrl=function(url){
return jQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
"throws":true
});
};
jQuery.fn.extend({
wrapAll:function(html){
var wrap;
if(this[0]){
if(jQuery.isFunction(html)){
html=html.call(this[0]);
}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstElementChild){
elem=elem.firstElementChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var isFunction=jQuery.isFunction(html);
return this.each(function(i){
jQuery(this).wrapAll(isFunction?html.call(this,i):html);
});
},
unwrap:function(selector){
this.parent(selector).not("body").each(function(){
jQuery(this).replaceWith(this.childNodes);
});
return this;
}
});
jQuery.expr.pseudos.hidden=function(elem){
return!jQuery.expr.pseudos.visible(elem);
};
jQuery.expr.pseudos.visible=function(elem){
return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);
};
jQuery.ajaxSettings.xhr=function(){
try{
return new window.XMLHttpRequest();
}catch(e){}
};
var xhrSuccessStatus={
0:200,
1223:204
},
xhrSupported=jQuery.ajaxSettings.xhr();
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){
var callback,errorCallback;
if(support.cors||xhrSupported&&!options.crossDomain){
return{
send:function(headers,complete){
var i,
xhr=options.xhr();
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
xhr.setRequestHeader(i,headers[i]);
}
callback=function(type){
return function(){
if(callback){
callback=errorCallback=xhr.onload=
xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;
if(type==="abort"){
xhr.abort();
}else if(type==="error"){
if(typeof xhr.status!=="number"){
complete(0,"error");
}else{
complete(
xhr.status,
xhr.statusText
);
}
}else{
complete(
xhrSuccessStatus[xhr.status]||xhr.status,
xhr.statusText,
(xhr.responseType||"text")!=="text"||
typeof xhr.responseText!=="string"?
{binary:xhr.response}:
{text:xhr.responseText},
xhr.getAllResponseHeaders()
);
}
}
};
};
xhr.onload=callback();
errorCallback=xhr.onerror=callback("error");
if(xhr.onabort!==undefined){
xhr.onabort=errorCallback;
}else{
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
window.setTimeout(function(){
if(callback){
errorCallback();
}
});
}
};
}
callback=callback("abort");
try{
xhr.send(options.hasContent&&options.data||null);
}catch(e){
if(callback){
throw e;
}
}
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
jQuery.ajaxPrefilter(function(s){
if(s.crossDomain){
s.contents.script=false;
}
});
jQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
}
});
jQuery.ajaxTransport("script",function(s){
if(s.crossDomain){
var script,callback;
return{
send:function(_,complete){
script=jQuery("<script>").prop({
charset:s.scriptCharset,
src:s.url
}).on(
"load error",
callback=function(evt){
script.remove();
callback=null;
if(evt){
complete(evt.type==="error"?404:200,evt.type);
}
}
);
document.head.appendChild(script[0]);
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
jQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
jQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&jQuery.isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
support.createHTMLDocument=(function(){
var body=document.implementation.createHTMLDocument("").body;
body.innerHTML="<form></form><form></form>";
return body.childNodes.length===2;
})();
jQuery.parseHTML=function(data,context,keepScripts){
if(typeof data!=="string"){
return[];
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
var base,parsed,scripts;
if(!context){
if(support.createHTMLDocument){
context=document.implementation.createHTMLDocument("");
base=context.createElement("base");
base.href=document.location.href;
context.head.appendChild(base);
}else{
context=document;
}
}
parsed=rsingleTag.exec(data);
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
jQuery(scripts).remove();
}
return jQuery.merge([],parsed.childNodes);
};
jQuery.fn.load=function(url,params,callback){
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=stripAndCollapse(url.slice(off));
url=url.slice(0,off);
}
if(jQuery.isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
jQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
jQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(i,type){
jQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
jQuery.expr.pseudos.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
jQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=jQuery.css(elem,"position"),
curElem=jQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(jQuery.isFunction(options)){
options=options.call(elem,i,jQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
jQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
jQuery.offset.setOffset(this,options,i);
});
}
var doc,docElem,rect,win,
elem=this[0];
if(!elem){
return;
}
if(!elem.getClientRects().length){
return{top:0,left:0};
}
rect=elem.getBoundingClientRect();
doc=elem.ownerDocument;
docElem=doc.documentElement;
win=doc.defaultView;
return{
top:rect.top+win.pageYOffset-docElem.clientTop,
left:rect.left+win.pageXOffset-docElem.clientLeft
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,
elem=this[0],
parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offsetParent=this.offsetParent();
offset=this.offset();
if(!nodeName(offsetParent[0],"html")){
parentOffset=offsetParent.offset();
}
parentOffset={
top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),
left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)
};
}
return{
top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win;
if(jQuery.isWindow(elem)){
win=elem;
}else if(elem.nodeType===9){
win=elem.defaultView;
}
if(val===undefined){
return win?win[prop]:elem[method];
}
if(win){
win.scrollTo(
!top?val:win.pageXOffset,
top?val:win.pageYOffset
);
}else{
elem[method]=val;
}
},method,val,arguments.length);
};
});
jQuery.each(["top","left"],function(i,prop){
jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
jQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
jQuery.each({Height:"height",Width:"width"},function(name,type){
jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},
function(defaultExtra,funcName){
jQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(jQuery.isWindow(elem)){
return funcName.indexOf("outer")===0?
elem["inner"+name]:
elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
jQuery.css(elem,type,extra):
jQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable);
};
});
});
jQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
}
});
jQuery.holdReady=function(hold){
if(hold){
jQuery.readyWait++;
}else{
jQuery.ready(true);
}
};
jQuery.isArray=Array.isArray;
jQuery.parseJSON=JSON.parse;
jQuery.nodeName=nodeName;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return jQuery;
});
}
var
_jQuery=window.jQuery,
_$=window.$;
jQuery.noConflict=function(deep){
if(window.$===jQuery){
window.$=_$;
}
if(deep&&window.jQuery===jQuery){
window.jQuery=_jQuery;
}
return jQuery;
};
if(!noGlobal){
window.jQuery=window.$=jQuery;
}
return jQuery;
});


/* prive/javascript/jquery-migrate-3.0.1.js?1605805105 */

;(function(factory){
if(typeof define==="function"&&define.amd){
define(["jquery"],window,factory);
}else if(typeof module==="object"&&module.exports){
module.exports=factory(require("jquery"),window);
}else{
factory(jQuery,window);
}
})(function(jQuery,window){
"use strict";
jQuery.migrateVersion="3.0.1";
if(typeof jQuery.migrateMute==="undefined"){
jQuery.migrateMute=true;
}
(function(){
var rbadVersions=/^[12]\./;
if(!window.console||!window.console.log){
return;
}
if(!jQuery||rbadVersions.test(jQuery.fn.jquery)){
window.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED");
}
if(jQuery.migrateWarnings){
window.console.log("JQMIGRATE: Migrate plugin loaded multiple times");
}
window.console.log("JQMIGRATE: Migrate is installed"+
(jQuery.migrateMute?"":" with logging active")+
", version "+jQuery.migrateVersion);
})();
var warnedAbout={};
jQuery.migrateWarnings=[];
if(jQuery.migrateTrace===undefined){
jQuery.migrateTrace=true;
}
jQuery.migrateReset=function(){
warnedAbout={};
jQuery.migrateWarnings.length=0;
};
function migrateWarn(msg){
var console=window.console;
if(!warnedAbout[msg]){
warnedAbout[msg]=true;
jQuery.migrateWarnings.push(msg);
if(console&&console.warn&&!jQuery.migrateMute){
console.warn("JQMIGRATE: "+msg);
if(jQuery.migrateTrace&&console.trace){
console.trace();
}
}
}
}
function migrateWarnProp(obj,prop,value,msg){
Object.defineProperty(obj,prop,{
configurable:true,
enumerable:true,
get:function(){
migrateWarn(msg);
return value;
},
set:function(newValue){
migrateWarn(msg);
value=newValue;
}
});
}
function migrateWarnFunc(obj,prop,newFunc,msg){
obj[prop]=function(){
migrateWarn(msg);
return newFunc.apply(this,arguments);
};
}
if(window.document.compatMode==="BackCompat"){
migrateWarn("jQuery is not compatible with Quirks Mode");
}
var oldInit=jQuery.fn.init,
oldIsNumeric=jQuery.isNumeric,
oldFind=jQuery.find,
rattrHashTest=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
rattrHashGlob=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
jQuery.fn.init=function(arg1){
var args=Array.prototype.slice.call(arguments);
if(typeof arg1==="string"&&arg1==="#"){
migrateWarn("jQuery( '#' ) is not a valid selector");
args[0]=[];
}
return oldInit.apply(this,args);
};
jQuery.fn.init.prototype=jQuery.fn;
jQuery.find=function(selector){
var args=Array.prototype.slice.call(arguments);
if(typeof selector==="string"&&rattrHashTest.test(selector)){
try{
window.document.querySelector(selector);
}catch(err1){
selector=selector.replace(rattrHashGlob,function(_,attr,op,value){
return"["+attr+op+"\""+value+"\"]";
});
try{
window.document.querySelector(selector);
migrateWarn("Attribute selector with '#' must be quoted: "+args[0]);
args[0]=selector;
}catch(err2){
migrateWarn("Attribute selector with '#' was not fixed: "+args[0]);
}
}
}
return oldFind.apply(this,args);
};
var findProp;
for(findProp in oldFind){
if(Object.prototype.hasOwnProperty.call(oldFind,findProp)){
jQuery.find[findProp]=oldFind[findProp];
}
}
jQuery.fn.size=function(){
migrateWarn("jQuery.fn.size() is deprecated and removed; use the .length property");
return this.length;
};
jQuery.parseJSON=function(){
migrateWarn("jQuery.parseJSON is deprecated; use JSON.parse");
return JSON.parse.apply(null,arguments);
};
jQuery.isNumeric=function(val){
function isNumeric2(obj){
var realStringObj=obj&&obj.toString();
return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;
}
var newValue=oldIsNumeric(val),
oldValue=isNumeric2(val);
if(newValue!==oldValue){
migrateWarn("jQuery.isNumeric() should not be called on constructed objects");
}
return oldValue;
};
migrateWarnFunc(jQuery,"holdReady",jQuery.holdReady,
"jQuery.holdReady is deprecated");
migrateWarnFunc(jQuery,"unique",jQuery.uniqueSort,
"jQuery.unique is deprecated; use jQuery.uniqueSort");
migrateWarnProp(jQuery.expr,"filters",jQuery.expr.pseudos,
"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");
migrateWarnProp(jQuery.expr,":",jQuery.expr.pseudos,
"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
var oldAjax=jQuery.ajax;
jQuery.ajax=function(){
var jQXHR=oldAjax.apply(this,arguments);
if(jQXHR.promise){
migrateWarnFunc(jQXHR,"success",jQXHR.done,
"jQXHR.success is deprecated and removed");
migrateWarnFunc(jQXHR,"error",jQXHR.fail,
"jQXHR.error is deprecated and removed");
migrateWarnFunc(jQXHR,"complete",jQXHR.always,
"jQXHR.complete is deprecated and removed");
}
return jQXHR;
};
var oldRemoveAttr=jQuery.fn.removeAttr,
oldToggleClass=jQuery.fn.toggleClass,
rmatchNonSpace=/\S+/g;
jQuery.fn.removeAttr=function(name){
var self=this;
jQuery.each(name.match(rmatchNonSpace),function(i,attr){
if(jQuery.expr.match.bool.test(attr)){
migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: "+attr);
self.prop(attr,false);
}
});
return oldRemoveAttr.apply(this,arguments);
};
jQuery.fn.toggleClass=function(state){
if(state!==undefined&&typeof state!=="boolean"){
return oldToggleClass.apply(this,arguments);
}
migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated");
return this.each(function(){
var className=this.getAttribute&&this.getAttribute("class")||"";
if(className){
jQuery.data(this,"__className__",className);
}
if(this.setAttribute){
this.setAttribute("class",
className||state===false?
"":
jQuery.data(this,"__className__")||""
);
}
});
};
var internalSwapCall=false;
if(jQuery.swap){
jQuery.each(["height","width","reliableMarginRight"],function(_,name){
var oldHook=jQuery.cssHooks[name]&&jQuery.cssHooks[name].get;
if(oldHook){
jQuery.cssHooks[name].get=function(){
var ret;
internalSwapCall=true;
ret=oldHook.apply(this,arguments);
internalSwapCall=false;
return ret;
};
}
});
}
jQuery.swap=function(elem,options,callback,args){
var ret,name,
old={};
if(!internalSwapCall){
migrateWarn("jQuery.swap() is undocumented and deprecated");
}
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var oldData=jQuery.data;
jQuery.data=function(elem,name,value){
var curData;
if(name&&typeof name==="object"&&arguments.length===2){
curData=jQuery.hasData(elem)&&oldData.call(this,elem);
var sameKeys={};
for(var key in name){
if(key!==jQuery.camelCase(key)){
migrateWarn("jQuery.data() always sets/gets camelCased names: "+key);
curData[key]=name[key];
}else{
sameKeys[key]=name[key];
}
}
oldData.call(this,elem,sameKeys);
return name;
}
if(name&&typeof name==="string"&&name!==jQuery.camelCase(name)){
curData=jQuery.hasData(elem)&&oldData.call(this,elem);
if(curData&&name in curData){
migrateWarn("jQuery.data() always sets/gets camelCased names: "+name);
if(arguments.length>2){
curData[name]=value;
}
return curData[name];
}
}
return oldData.apply(this,arguments);
};
var oldTweenRun=jQuery.Tween.prototype.run;
var linearEasing=function(pct){
return pct;
};
jQuery.Tween.prototype.run=function(){
if(jQuery.easing[this.easing].length>1){
migrateWarn(
"'jQuery.easing."+this.easing.toString()+"' should use only one argument"
);
jQuery.easing[this.easing]=linearEasing;
}
oldTweenRun.apply(this,arguments);
};
jQuery.fx.interval=jQuery.fx.interval||13;
if(window.requestAnimationFrame){
migrateWarnProp(jQuery.fx,"interval",jQuery.fx.interval,
"jQuery.fx.interval is deprecated");
}
var oldLoad=jQuery.fn.load,
oldEventAdd=jQuery.event.add,
originalFix=jQuery.event.fix;
jQuery.event.props=[];
jQuery.event.fixHooks={};
migrateWarnProp(jQuery.event.props,"concat",jQuery.event.props.concat,
"jQuery.event.props.concat() is deprecated and removed");
jQuery.event.fix=function(originalEvent){
var event,
type=originalEvent.type,
fixHook=this.fixHooks[type],
props=jQuery.event.props;
if(props.length){
migrateWarn("jQuery.event.props are deprecated and removed: "+props.join());
while(props.length){
jQuery.event.addProp(props.pop());
}
}
if(fixHook&&!fixHook._migrated_){
fixHook._migrated_=true;
migrateWarn("jQuery.event.fixHooks are deprecated and removed: "+type);
if((props=fixHook.props)&&props.length){
while(props.length){
jQuery.event.addProp(props.pop());
}
}
}
event=originalFix.call(this,originalEvent);
return fixHook&&fixHook.filter?fixHook.filter(event,originalEvent):event;
};
jQuery.event.add=function(elem,types){
if(elem===window&&types==="load"&&window.document.readyState==="complete"){
migrateWarn("jQuery(window).on('load'...) called after load event occurred");
}
return oldEventAdd.apply(this,arguments);
};
jQuery.each(["load","unload","error"],function(_,name){
jQuery.fn[name]=function(){
var args=Array.prototype.slice.call(arguments,0);
if(name==="load"&&typeof args[0]==="string"){
return oldLoad.apply(this,args);
}
migrateWarn("jQuery.fn."+name+"() is deprecated");
args.splice(0,0,name);
if(arguments.length){
return this.on.apply(this,args);
}
this.triggerHandler.apply(this,args);
return this;
};
});
jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
migrateWarn("jQuery.fn."+name+"() event shorthand is deprecated");
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery(function(){
jQuery(window.document).triggerHandler("ready");
});
jQuery.event.special.ready={
setup:function(){
if(this===window.document){
migrateWarn("'ready' event is deprecated");
}
}
};
jQuery.fn.extend({
bind:function(types,data,fn){
migrateWarn("jQuery.fn.bind() is deprecated");
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
migrateWarn("jQuery.fn.unbind() is deprecated");
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
migrateWarn("jQuery.fn.delegate() is deprecated");
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
migrateWarn("jQuery.fn.undelegate() is deprecated");
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
},
hover:function(fnOver,fnOut){
migrateWarn("jQuery.fn.hover() is deprecated");
return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);
}
});
var oldOffset=jQuery.fn.offset;
jQuery.fn.offset=function(){
var docElem,
elem=this[0],
origin={top:0,left:0};
if(!elem||!elem.nodeType){
migrateWarn("jQuery.fn.offset() requires a valid DOM element");
return origin;
}
docElem=(elem.ownerDocument||window.document).documentElement;
if(!jQuery.contains(docElem,elem)){
migrateWarn("jQuery.fn.offset() requires an element connected to a document");
return origin;
}
return oldOffset.apply(this,arguments);
};
var oldParam=jQuery.param;
jQuery.param=function(data,traditional){
var ajaxTraditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;
if(traditional===undefined&&ajaxTraditional){
migrateWarn("jQuery.param() no longer uses jQuery.ajaxSettings.traditional");
traditional=ajaxTraditional;
}
return oldParam.call(this,data,traditional);
};
var oldSelf=jQuery.fn.andSelf||jQuery.fn.addBack;
jQuery.fn.andSelf=function(){
migrateWarn("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");
return oldSelf.apply(this,arguments);
};
var oldDeferred=jQuery.Deferred,
tuples=[
["resolve","done",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),"rejected"],
["notify","progress",jQuery.Callbacks("memory"),
jQuery.Callbacks("memory")]
];
jQuery.Deferred=function(func){
var deferred=oldDeferred(),
promise=deferred.promise();
deferred.pipe=promise.pipe=function(){
var fns=arguments;
migrateWarn("deferred.pipe() is deprecated");
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);
}else{
newDefer[tuple[0]+"With"](
this===promise?newDefer.promise():this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
};
if(func){
func.call(deferred,deferred);
}
return deferred;
};
jQuery.Deferred.exceptionHook=oldDeferred.exceptionHook;
return jQuery;
});


/* prive/javascript/jquery.form.js?1605805105 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof module==='object'&&module.exports){
module.exports=function(root,jQuery){
if(typeof jQuery==='undefined'){
if(typeof window!=='undefined'){
jQuery=require('jquery');
}
else{
jQuery=require('jquery')(root);
}
}
factory(jQuery);
return jQuery;
};
}else{
factory(jQuery);
}
}(function($){
'use strict';
var rCRLF=/\r?\n/g;
var feature={};
feature.fileapi=$('<input type="file">').get(0).files!==undefined;
feature.formdata=(typeof window.FormData!=='undefined');
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options,data,dataType,onSuccess){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,$form=this;
if(typeof options==='function'){
options={success:options};
}else if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}else if(typeof options==='undefined'){
options={};
}
method=options.method||options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(typeof traditional==='undefined'){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements,options.filtering);
if(options.data){
var optionsData=$.isFunction(options.data)?options.data(a):options.data;
options.extraData=optionsData;
qx=$.param(optionsData,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()==='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){
$form.resetForm();
});
}
if(options.clearForm){
callbacks.push(function(){
$form.clearForm(options.includeHidden);
});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data,textStatus,jqXHR){
var successArguments=arguments,
fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(function(){
oldSuccess.apply(this,successArguments);
});
});
}else if(options.success){
if($.isArray(options.success)){
$.merge(callbacks,options.success);
}else{
callbacks.push(options.success);
}
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){
return $(this).val()!=='';
});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')===mp||$form.attr('encoding')===mp);
var fileAPI=feature.fileapi&&feature.formdata;
log('fileAPI :'+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}else{
jqxhr=fileUploadIframe(a);
}
}else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
serialized[i]=serialized[i].replace(/\+/g,' ');
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+new Date().getTime();
var ownerDocument=form.ownerDocument;
var $body=$form.closest('body');
if(s.iframeTarget){
$io=$(s.iframeTarget,ownerDocument);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}else{
id=n;
}
}else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />',ownerDocument);
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger('ajaxError',[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&$.active++===0){
$.event.trigger('ajaxStart');
}
if(g){
$.event.trigger('ajaxSend',[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type==='image'){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!==s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){
timedOut=true;cb(CLIENT_TIMEOUT_ABORT);
},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()==='uninitialized'){
setTimeout(checkState,50);
}
}catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">',ownerDocument).val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">',ownerDocument).val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo($body);
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}else if(e===SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href===s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType==='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}else if(dt==='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=((xhr.status>=200&&xhr.status<300)||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger('ajaxSuccess',[xhr,s]);
}
}else if(status){
if(typeof errMsg==='undefined'){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger('ajaxError',[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger('ajaxComplete',[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger('ajaxStop');
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!=='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')');
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=((type==='xml'||!type)&&ct.indexOf('xml')>=0),
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if((type==='json'||!type)&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if((type==='script'||!type)&&ct.indexOf('javascript')>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options,data,dataType,onSuccess){
if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
return this.ajaxFormUnbind()
.on('submit.form-plugin',options,doAjaxSubmit)
.on('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).closest('form').ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!$el.is('[type=submit],[type=image]')){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=target.form;
form.clk=target;
if(target.type==='image'){
if(typeof e.offsetX!=='undefined'){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset==='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){
form.clk=form.clk_x=form.clk_y=null;
},100);
}
$.fn.ajaxFormUnbind=function(){
return this.off('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements,filtering){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=(semantic||typeof form.elements==='undefined')?form.getElementsByTagName('*'):form.elements;
var els2;
if(els){
els=$.makeArray(els);
}
if(formId&&(semantic||/(Edge|Trident)\//.test(navigator.userAgent))){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
if($.isFunction(filtering)){
els=$.map(els,filtering);
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type==='image'){
if(form.clk===el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor===Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}else if(feature.fileapi&&el.type==='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}else{
a.push({name:n,value:'',type:el.type});
}
}else if(v!==null&&typeof v!=='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type==='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor===Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}else if(v!==null&&typeof v!=='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v==='undefined'||(v.constructor===Array&&!v.length)){
continue;
}
if(v.constructor===Array){
$.merge(val,v);
}else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(typeof successful==='undefined'){
successful=true;
}
if(successful&&(!n||el.disabled||t==='reset'||t==='button'||
(t==='checkbox'||t==='radio')&&!el.checked||
(t==='submit'||t==='image')&&el.form&&el.form.clk!==el||
tag==='select'&&el.selectedIndex===-1)){
return null;
}
if(tag==='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t==='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected&&!op.disabled){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val().replace(rCRLF,'\r\n');
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag==='textarea'){
this.value='';
}else if(t==='checkbox'||t==='radio'){
this.checked=false;
}else if(tag==='select'){
this.selectedIndex=-1;
}else if(t==='file'){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden==='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
var el=$(this);
var tag=this.tagName.toLowerCase();
switch(tag){
case'input':
this.checked=this.defaultChecked;
case'textarea':
this.value=this.defaultValue;
return true;
case'option':
case'optgroup':
var select=el.parents('select');
if(select.length&&select[0].multiple){
if(tag==='option'){
this.selected=this.defaultSelected;
}else{
el.find('option').resetForm();
}
}else{
select.resetForm();
}
return true;
case'select':
el.find('option').each(function(i){
this.selected=this.defaultSelected;
if(this.defaultSelected&&!el[0].multiple){
el[0].selectedIndex=i;
return false;
}
});
return true;
case'label':
var forEl=$(el.attr('for'));
var list=el.find('input,select,textarea');
if(forEl[0]){
list.unshift(forEl[0]);
}
list.resetForm();
return true;
case'form':
if(typeof this.reset==='function'||(typeof this.reset==='object'&&!this.reset.nodeType)){
this.reset();
}
return true;
default:
el.find('form,input,label,select,textarea').resetForm();
return true;
}
});
};
$.fn.enable=function(b){
if(typeof b==='undefined'){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(typeof select==='undefined'){
select=true;
}
return this.each(function(){
var t=this.type;
if(t==='checkbox'||t==='radio'){
this.checked=select;
}else if(this.tagName.toLowerCase()==='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type==='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


/* prive/javascript/jquery.autosave.js?1605805105 */

(function($){
$.fn.autosave=function(opt){
opt=$.extend({
url:window.location,
confirm:false,
confirmstring:'Sauvegarder ?'
},opt);
var save_changed=function(){
$('form.autosavechanged')
.each(function(){
if(!opt.confirm||confirm(opt.confirmstring)){
var contenu=$(this).serialize();
var d=new Date();
contenu=contenu+"&__timestamp="+Math.round(d.getTime()/1000);
$.post(opt.url,{
'action':'session',
'var':'autosave_'+$('input[name=autosave]',this).val(),
'val':contenu
});
}
}).removeClass('autosavechanged');
}
$(window).on('unload',save_changed);
return this
.on('keyup',function(){
$(this).addClass('autosavechanged');
})
.on('change',function(){
$(this).addClass('autosavechanged');
save_changed();
})
.on('submit',function(){
save_changed();
;
});
}
})(jQuery);


/* prive/javascript/jquery.placeholder-label.js?1605805105 */

(function($){
$.placeholderLabel={
placeholder_class:null,
add_placeholder:function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('').removeClass($.placeholderLabel.placeholder_class);
}
},
remove_placeholder:function(){
if($(this).val()==''){
$(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
}
},
disable_placeholder_fields:function(){
$(this).find("input[placeholder]").each(function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('');
}
});
return true;
}
};
$.fn.placeholderLabel=function(options){
var dummy=document.createElement('input');
if(dummy.placeholder!=undefined){
return this;
}
var config={
placeholder_class:'placeholder'
};
if(options)$.extend(config,options);
$.placeholderLabel.placeholder_class=config.placeholder_class;
this.each(function(){
var input=$(this);
input.focus($.placeholderLabel.add_placeholder);
input.blur($.placeholderLabel.remove_placeholder);
input.triggerHandler('focus');
input.triggerHandler('blur');
$(this.form).submit($.placeholderLabel.disable_placeholder_fields);
});
return this;
}
})(jQuery);


/* prive/javascript/ajaxCallback.js?1605805105 */
jQuery.spip=jQuery.spip||{};
jQuery.spip.log=function(){
if(jQuery.spip.debug&&window.console&&window.console.log)
window.console.log.apply(this,arguments);
}
if(!jQuery.spip.load_handlers){
jQuery.spip.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.spip.load_handlers.push(f);
};
jQuery.spip.triggerAjaxLoad=function(root){
jQuery.spip.log('triggerAjaxLoad');
jQuery.spip.log(root);
for(var i=0;i<jQuery.spip.load_handlers.length;i++)
jQuery.spip.load_handlers[i].apply(root);
};
jQuery.spip.intercepted={};
jQuery.spip.intercepted.load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"){
return jQuery.spip.intercepted.load.apply(this,arguments);
}
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null;
}
}
params=jQuery.extend(params,{triggerAjaxLoad:false});
var callback2=function(){jQuery.spip.log('jQuery.load');jQuery.spip.triggerAjaxLoad(this);callback.apply(this,arguments);};
return jQuery.spip.intercepted.load.apply(this,[url,params,callback2]);
};
jQuery.spip.intercepted.ajaxSubmit=jQuery.fn.ajaxSubmit;
jQuery.fn.ajaxSubmit=function(options){
options=options||{};
if(typeof options.onAjaxLoad=="undefined"||options.onAjaxLoad!=false){
var me=jQuery(this).parents('div.ajax');
if(me.length)
me=me.parent();
else
me=document;
if(typeof options=='function')
options={success:options};
var callback=options.success||function(){};
options.success=function(){callback.apply(this,arguments);jQuery.spip.log('jQuery.ajaxSubmit');jQuery.spip.triggerAjaxLoad(me);}
}
return jQuery.spip.intercepted.ajaxSubmit.apply(this,[options]);
}
jQuery.spip.intercepted.ajax=jQuery.ajax;
jQuery.ajax=function(url,settings){
if(typeof settings=='undefined'){
settings={};
if(typeof url=='object'){
settings=url;
url=null;
}
}
if(typeof url=='string'){
settings['url']=url;
}
if(settings.data&&settings.data['triggerAjaxLoad']===false){
settings.data['triggerAjaxLoad']=null;
return jQuery.spip.intercepted.ajax(settings);
}
var s=jQuery.extend(true,{},jQuery.ajaxSettings,settings);
var callbackContext=s.context||s;
try{
if(jQuery.ajax.caller==jQuery.spip.intercepted.load||jQuery.ajax.caller==jQuery.spip.intercepted.ajaxSubmit)
return jQuery.spip.intercepted.ajax(settings);
}
catch(err){}
var orig_complete=s.complete||function(){};
settings.complete=function(res,status){
var dataType=settings.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if((!dataType&&!xml)||dataType=="html"){
jQuery.spip.log('jQuery.ajax');
if(typeof s.onAjaxLoad=="undefined"||s.onAjaxLoad!=false)
jQuery.spip.triggerAjaxLoad(s.ajaxTarget?s.ajaxTarget:document);
}
};
return jQuery.spip.intercepted.ajax(settings);
};
}
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
jQuery.getScript=function(url,callback){
return $.ajax({
url:url,
dataType:"script",
success:callback,
cache:true
});
}
jQuery.fn.positionner=function(force,setfocus){
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||(offset&&offset['top']-5<=scrolltop))
scroll=offset['top']-5;
else if(offset&&offset['top']+hauteur-h+5>scrolltop)
scroll=Math.min(offset['top']-5,offset['top']+hauteur-h+15);
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
if(setfocus!==false)
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this;
}
jQuery.spip.virtualbuffer_id='spip_virtualbufferupdate';
jQuery.spip.initReaderBuffer=function(){
if(jQuery('#'+jQuery.spip.virtualbuffer_id).length)return;
jQuery('body').append('<p style="float:left;width:0;height:0;position:absolute;left:-5000px;top:-5000px;"><input type="hidden" name="'+jQuery.spip.virtualbuffer_id+'" id="'+jQuery.spip.virtualbuffer_id+'" value="0" /></p>');
}
jQuery.spip.updateReaderBuffer=function(){
var i=jQuery('#'+jQuery.spip.virtualbuffer_id);
if(!i.length)return;
i.val(parseInt(i.val())+1);
}
jQuery.fn.formulaire_setARIA=function(){
if(!this.closest('.ariaformprop').length){
this.find('script').remove();
this.wrap('<div class="ariaformprop" aria-live="polite" aria-atomic="true" aria-relevant="additions"></div>');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
}
return this;
}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
jQuery.spip.initReaderBuffer();
return this.each(function(){
var scrollwhensubmit=!jQuery(this).is('.noscroll');
var cible=target||this;
jQuery(cible).formulaire_setARIA();
jQuery('form:not(.noajax):not(.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
var onError=function(xhr,status,error,$form){
jQuery(leform).ajaxFormUnbind().find('input[name="var_ajax"]').remove();
var msg="Erreur";
if(typeof(error_on_ajaxform)!=="undefined")msg=error_on_ajaxform;
jQuery(leform).prepend("<p class='error ajax-error none'>"+msg+"</p>").find('.ajax-error').show('fast');
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form' />")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
var scrollwhensubmit_button=true;
if(leclk){
scrollwhensubmit_button=!jQuery(leclk).is('.noscroll');
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type=="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y;
}
}
jQuery(cible).wrap('<div />');
cible=jQuery(cible).parent();
jQuery(cible).closest('.ariaformprop').animateLoading();
if(scrollwhensubmit&&scrollwhensubmit_button){
jQuery(cible).positionner(false,false);
}
},
error:onError,
success:function(c,status,xhr,$form){
if(c.match(/^\s*noajax\s*$/)){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"' />");
if(leclk.type=="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"' />");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"' />");
}
}
}
jQuery(leform).ajaxFormUnbind().submit();
}
else{
if(!c.length||c.indexOf("ajax-form-is-ok")==-1)
return onError.apply(this,[status,xhr,$form]);
var preloaded=jQuery.spip.preloaded_urls;
jQuery.spip.preloaded_urls={};
jQuery(cible).html(c);
var a=jQuery('a:first',cible).eq(0);
var d=jQuery('div.ajax',cible);
if(!d.length){
jQuery(cible).addClass('ajax');
if(!scrollwhensubmit)
jQuery(cible).addClass('noscroll');
}
else{
d.siblings('br.bugajaxie').remove();
cible=jQuery(":first",cible);
cible.unwrap();
}
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(false);
},10);
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
else{
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.get(0).href;
setTimeout(function(){
var cur=window.location.href.split('#');
document.location.replace(a);
if(cur[0]==a.split('#')[0]){
window.location.reload();
}
},10);
jQuery(cible).closest('.ariaformprop').animateLoading();
}
else{
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
}
if(!jQuery('.reponse_formulaire_ok',cible).length)
jQuery.spip.preloaded_urls=preloaded;
jQuery.spip.updateReaderBuffer();
}
}
})
.addClass('noajax hasajax');
});
});
}
jQuery.fn.formulaire_verifier=function(callback,champ){
var erreurs={'message_erreur':'form non ajax'};
var me=this;
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true'){
if(jQuery(me).is('form.hasajax')){
jQuery(me).ajaxSubmit({
dataType:"json",
data:{formulaire_action_verifier_json:true},
success:function(errs){
var args=[errs,champ]
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true')
callback.apply(me,args);
}
});
}
else
callback.apply(me,[erreurs,champ]);
}
return this;
}
jQuery.fn.formulaire_activer_verif_auto=function(callback){
callback=callback||formulaire_actualiser_erreurs;
var me=jQuery(this).closest('.ariaformprop');
var check=function(){
var name=jQuery(this).attr('name');
setTimeout(function(){me.find('form').formulaire_verifier(callback,name);},50);
}
var activer=function(){
if(me.find('form').attr('data-verifjson')!='on'){
me
.find('form')
.attr('data-verifjson','on')
.find('input,select,textarea')
.on('change',check);
}
}
jQuery(activer);
onAjaxLoad(function(){setTimeout(activer,150);});
}
function formulaire_actualiser_erreurs(erreurs){
var parent=jQuery(this).closest('.formulaire_spip');
if(!parent.length)return;
parent.find('.reponse_formulaire,.erreur_message').fadeOut().remove();
parent.find('.erreur').removeClass('erreur');
if(erreurs['message_ok'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_ok">'+erreurs['message_ok']+'</p>');
if(erreurs['message_erreur'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_erreur">'+erreurs['message_erreur']+'</p>');
for(var k in erreurs){
var saisie=parent.find('.editer_'+k);
if(saisie.length){
saisie.addClass('erreur');
saisie.find('label').after('<span class="erreur_message">'+erreurs[k]+'</span>');
}
}
}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime();
}
return ajax_confirm;
}
window.confirm=_confirm;
var ajaxbloc_selecteur;
jQuery.spip.preloaded_urls={};
jQuery.spip.on_ajax_loaded=function(blocfrag,c,href,history){
history=history||(history==null);
if(typeof href==undefined||href==null)
history=false;
if(history)
jQuery.spip.setHistoryState(blocfrag);
if(jQuery(blocfrag).attr('data-loaded-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loaded-callback'));
callback.call(blocfrag,c,href,history);
}
else{
jQuery(blocfrag)
.html(c)
.endLoading();
}
if(typeof href!=undefined)
jQuery(blocfrag).attr('data-url',href);
if(history){
jQuery.spip.pushHistoryState(href);
jQuery.spip.setHistoryState(blocfrag);
}
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href');
jQuery(a,blocfrag).positionner(false);
}
jQuery.spip.log('on_ajax_loaded');
jQuery.spip.triggerAjaxLoad(blocfrag);
a=jQuery(blocfrag).parents('form.hasajax')
if(a.length)
a.eq(0).removeClass('noajax').parents('div.ajax').formulaire_dyn_ajax();
jQuery.spip.updateReaderBuffer();
}
jQuery.spip.stateId=0;
jQuery.spip.setHistoryState=function(blocfrag){
if(!window.history.replaceState)return;
if(!blocfrag.attr('id')){
while(jQuery('#ghsid'+jQuery.spip.stateId).length)
jQuery.spip.stateId++;
blocfrag.attr('id','ghsid'+jQuery.spip.stateId);
}
var href=blocfrag.attr('data-url')||blocfrag.attr('data-origin');
href=jQuery("<"+"a href='"+href+"'></a>").get(0).href;
var state={
id:blocfrag.attr('id'),
href:href
};
var ajaxid=blocfrag.attr('class').match(/\bajax-id-[\w-]+\b/);
if(ajaxid&&ajaxid.length)
state["ajaxid"]=ajaxid[0];
window.history.replaceState(state,window.document.title,window.document.location);
}
jQuery.spip.pushHistoryState=function(href,title){
if(!window.history.pushState)
return false;
window.history.pushState({},title,href);
}
window.onpopstate=function(popState){
if(popState.state&&popState.state.href){
var blocfrag=false;
if(popState.state.id){
blocfrag=jQuery('#'+popState.state.id);
}
if((!blocfrag||!blocfrag.length)&&popState.state.ajaxid){
blocfrag=jQuery('.ajaxbloc.'+popState.state.ajaxid);
}
if(blocfrag&&blocfrag.length==1){
jQuery.spip.ajaxClick(blocfrag,popState.state.href,{history:false});
return true;
}
else{
window.location.href=popState.state.href;
}
}
}
jQuery.spip.loadAjax=function(blocfrag,url,href,options){
var force=options.force||false;
if(jQuery(blocfrag).attr('data-loading-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loading-callback'));
callback.call(blocfrag,url,href,options);
}
else{
jQuery(blocfrag).animateLoading();
}
if(jQuery.spip.preloaded_urls[url]&&!force){
if(jQuery.spip.preloaded_urls[url]=="<!--loading-->"){
setTimeout(function(){jQuery.spip.loadAjax(blocfrag,url,href,options);},100);
return;
}
jQuery.spip.on_ajax_loaded(blocfrag,jQuery.spip.preloaded_urls[url],href,options.history);
}else{
var d=new Date();
jQuery.spip.preloaded_urls[url]="<!--loading-->";
jQuery.ajax({
url:parametre_url(url,'var_t',d.getTime()),
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c,href,options.history);
jQuery.spip.preloaded_urls[url]=c;
if(options.callback&&typeof options.callback=="function")
options.callback.apply(blocfrag);
},
error:function(){
jQuery.spip.preloaded_urls[url]='';
}
});
}
}
jQuery.spip.makeAjaxUrl=function(href,ajax_env,origin){
var url=href.split('#');
url[0]=parametre_url(url[0],'var_ajax',1);
url[0]=parametre_url(url[0],'var_ajax_env',ajax_env);
if(origin){
var p=origin.indexOf('?');
if(p!==-1){
var args=origin.substring(p+1).split('&');
var val;
var arg;
for(var n=0;n<args.length;n++){
arg=args[n].split('=');
arg=arg[0];
p=arg.indexOf('[');
if(p!==-1)
arg=arg.substring(0,p);
val=parametre_url(href,arg);
if(typeof val=="undefined"||val==null)
url[0]=url[0]+'&'+arg+'=';
}
}
}
if(url[1])
url[0]=parametre_url(url[0],'var_ajax_ancre',url[1]);
return url[0];
}
jQuery.spip.ajaxReload=function(blocfrag,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
var href=options.href||blocfrag.attr('data-url')||blocfrag.attr('data-origin');
if(href&&typeof href!=undefined){
options=options||{};
var callback=options.callback||null;
var history=options.history||false;
var args=options.args||{};
for(var key in args)
href=parametre_url(href,key,args[key]==undefined?'':args[key],'&',args[key]==undefined?false:true);
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,{force:true,callback:callback,history:history});
return true;
}
}
jQuery.spip.ajaxClick=function(blocfrag,href,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false;
}
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,options);
return false;
}
jQuery.fn.ajaxbloc=function(){
if(this.length)
jQuery.spip.initReaderBuffer();
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
blocfrag.not('.bind-ajaxReload').on('ajaxReload',function(event,options){
if(jQuery.spip.ajaxReload(blocfrag,options))
event.stopPropagation();
}).addClass('bind-ajaxReload')
.attr('aria-live','polite').attr('aria-atomic','true');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
jQuery(ajaxbloc_selecteur,this).not('.noajax,.bind-ajax')
.click(function(){return jQuery.spip.ajaxClick(blocfrag,this.href,{force:jQuery(this).is('.nocache'),history:!(jQuery(this).is('.nohistory')||jQuery(this).closest('.box_modalbox').length)});})
.addClass('bind-ajax')
.filter('.preload').each(function(){
var href=this.href;
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
if(!jQuery.spip.preloaded_urls[url]){
jQuery.spip.preloaded_urls[url]='<!--loading-->';
jQuery.ajax({url:url,onAjaxLoad:false,success:function(r){jQuery.spip.preloaded_urls[url]=r;},error:function(){jQuery.spip.preloaded_urls[url]='';}});
}
});
jQuery('form.bouton_action_post.ajax',this).not('.noajax,.bind-ajax').each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
var scrollwhensubmit=(!jQuery(this).is('.noscroll')&&!jQuery('.submit',this).is('.noscroll'));
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1' /><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"' />"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"' />":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).animateLoading();
if(scrollwhensubmit){
jQuery(blocfrag).positionner(false);
}
},
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c);
jQuery.spip.preloaded_urls={};
}
})
.addClass('bind-ajax');
});
});
};
jQuery.fn.followLink=function(){
$(this).click();
if(!$(this).is('.bind-ajax'))
window.location.href=$(this).get(0).href;
return this;
}
function ajaxReload(ajaxid,options){
jQuery('div.ajaxbloc.ajax-id-'+ajaxid).ajaxReload(options);
}
jQuery.fn.ajaxReload=function(options){
options=options||{};
jQuery(this).trigger('ajaxReload',[options]);
return this;
}
jQuery.fn.animateLoading=function(){
this.attr('aria-busy','true').addClass('loading').children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>');
}
return this;
}
jQuery.fn.animeajax=jQuery.fn.animateLoading;
jQuery.fn.endLoading=function(hard){
hard=hard||false;
this.attr('aria-busy','false').removeClass('loading');
if(hard){
this.children().css('opacity','');
this.find('.image_loading').html('');
}
return this;
}
jQuery.fn.animateRemove=function(callback){
if(this.length){
var me=this;
var color=$("<div class='remove'></div>").css('background-color');
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.addClass('remove').css({backgroundColor:color}).animate({opacity:"0.0"},'fast',function(){
sel.removeClass('remove').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
}
return this;
}
jQuery.fn.animateAppend=function(callback){
if(this.length){
var me=this;
var color=$("<div class='append'></div>").css('background-color');
var origin=$(this).css('background-color')||'#ffffff';
if(origin=='transparent')origin='#ffffff';
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.css('opacity','0.0').addClass('append').css({backgroundColor:color}).animate({opacity:"1.0"},1000,function(){
sel.animate({backgroundColor:origin},3000,function(){
sel.removeClass('append').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
});
}
return this;
}
function parametre_url(url,c,v,sep,force_vide){
if(typeof(url)=='undefined'){
url='';
}
var p;
var ancre='';
var a='./';
var args=[];
p=url.indexOf('#');
if(p!=-1){
ancre=url.substring(p);
url=url.substring(0,p);
}
p=url.indexOf('?');
if(p!==-1){
if(p>0)a=url.substring(0,p);
args=url.substring(p+1).split('&');
}
else
a=url;
var regexp=new RegExp('^('+c.replace('[]','\\[\\]')+'\\[?\\]?)(=.*)?$');
var ajouts=[];
var u=(typeof(v)!=='object')?encodeURIComponent(v):v;
var na=[];
var v_read=null;
for(var n=0;n<args.length;n++){
var val=args[n];
try{
val=decodeURIComponent(val);
}catch(e){}
var r=val.match(regexp);
if(r&&r.length){
if(v==null){
if(r[1].substr(-2)=='[]'){
if(!v_read)v_read=[];
v_read.push((r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'');
}
else{
return(r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'';
}
}
else if(!v.length){
}
else if(r[1].substr(-2)!='[]'){
na.push(r[1]+'='+u);
ajouts.push(r[1]);
}
}
else
na.push(args[n]);
}
if(v==null)return v_read;
if(v||v.length||force_vide){
ajouts="="+ajouts.join("=")+"=";
var all=c.split('|');
for(n=0;n<all.length;n++){
if(ajouts.search("="+all[n]+"=")==-1){
if(typeof(v)!=='object'){
na.push(all[n]+'='+u);
}
else{
var id=((all[n].substring(-2)=='[]')?all[n]:all[n]+"[]");
for(p=0;p<v.length;p++)
na.push(id+'='+encodeURIComponent(v[p]));
}
}
}
}
if(na.length){
if(!sep)sep='&';
a=a+"?"+na.join(sep);
}
return a+ancre;
}
if(!window.var_zajax_content)
window.var_zajax_content='contenu';
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc();
jQuery("input[placeholder]:text").placeholderLabel();
jQuery('a.popin').click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
if(jQuery(this).is('div.ajaxbloc'))
jQuery(this).ajaxbloc();
else if(jQuery(this).closest('div.ajaxbloc').length)
jQuery(this).closest('div.ajaxbloc').ajaxbloc();
else
jQuery('div.ajaxbloc',this).ajaxbloc();
jQuery("input[placeholder]:text",this).placeholderLabel();
jQuery('a.popin',this).click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
}
});


/* prive/javascript/js.cookie.js?1605805105 */

;(function(factory){
var registeredInModuleLoader=false;
if(typeof define==='function'&&define.amd){
define(factory);
registeredInModuleLoader=true;
}
if(typeof exports==='object'){
module.exports=factory();
registeredInModuleLoader=true;
}
if(!registeredInModuleLoader){
var OldCookies=window.Cookies;
var api=window.Cookies=factory();
api.noConflict=function(){
window.Cookies=OldCookies;
return api;
};
}
}(function(){
function extend(){
var i=0;
var result={};
for(;i<arguments.length;i++){
var attributes=arguments[i];
for(var key in attributes){
result[key]=attributes[key];
}
}
return result;
}
function init(converter){
function api(key,value,attributes){
var result;
if(typeof document==='undefined'){
return;
}
if(arguments.length>1){
attributes=extend({
path:'/'
},api.defaults,attributes);
if(typeof attributes.expires==='number'){
var expires=new Date();
expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);
attributes.expires=expires;
}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';
try{
result=JSON.stringify(value);
if(/^[\{\[]/.test(result)){
value=result;
}
}catch(e){}
if(!converter.write){
value=encodeURIComponent(String(value))
.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);
}else{
value=converter.write(value,key);
}
key=encodeURIComponent(String(key));
key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
key=key.replace(/[\(\)]/g,escape);
var stringifiedAttributes='';
for(var attributeName in attributes){
if(!attributes[attributeName]){
continue;
}
stringifiedAttributes+='; '+attributeName;
if(attributes[attributeName]===true){
continue;
}
stringifiedAttributes+='='+attributes[attributeName];
}
return(document.cookie=key+'='+value+stringifiedAttributes);
}
if(!key){
result={};
}
var cookies=document.cookie?document.cookie.split('; '):[];
var rdecode=/(%[0-9A-Z]{2})+/g;
var i=0;
for(;i<cookies.length;i++){
var parts=cookies[i].split('=');
var cookie=parts.slice(1).join('=');
if(cookie.charAt(0)==='"'){
cookie=cookie.slice(1,-1);
}
try{
var name=parts[0].replace(rdecode,decodeURIComponent);
cookie=converter.read?
converter.read(cookie,name):converter(cookie,name)||
cookie.replace(rdecode,decodeURIComponent);
if(this.json){
try{
cookie=JSON.parse(cookie);
}catch(e){}
}
if(key===name){
result=cookie;
break;
}
if(!key){
result[name]=cookie;
}
}catch(e){}
}
return result;
}
api.set=api;
api.get=function(key){
return api.call(api,key);
};
api.getJSON=function(){
return api.apply({
json:true
},[].slice.call(arguments));
};
api.defaults={};
api.remove=function(key,attributes){
api(key,'',extend(attributes,{
expires:-1
}));
};
api.withConverter=init;
return api;
}
return init(function(){});
}));


/* prive/javascript/jquery.cookie.js?1605805105 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof exports==='object'){
factory(require('jquery'));
}else{
factory(jQuery);
}
}(function($){
$.cookie=function(key,value,options){
if(value!==undefined&&!$.isFunction(value)){
console.warn("Deprecated jQuery.cookie(). Please use Cookies.set()");
console.trace();
return Cookies.set(key,value,options);
}else{
console.warn("Deprecated jQuery.cookie(). Please use Cookies.get()");
console.trace();
return Cookies.get(key,value);
}
};
$.removeCookie=function(key,options){
console.warn("Deprecated jQuery.removeCookie(). Please use Cookies.remove()");
console.trace();
Cookies.remove(key,options);
return true;
};
}));


/* plugins-dist/ppd_client/javascript/tippy.min.js?1605805272 */
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.tippy=t()})(this,function(){'use strict';function t(e){De.forEach(function(t){var i=t.popper,o=t.tippyInstance,n=t.settings,r=n.appendTo,s=n.hideOnClick,a=n.trigger;if(r.contains(i)){var p=!0===s||-1!==a.indexOf('focus'),l=!e||i!==e.popper;p&&l&&o.hide(i)}})}function o(t,i){var o=Element.prototype.closest||function(t){for(var i=this;i;){if(e.call(i,t))return i;i=i.parentElement}};return o.call(t,i)}function n(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function r(){var i=function(){Pe.touch=!0,Pe.iOS()&&document.body.classList.add('tippy-touch'),Pe.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',r)},r=function(){var e;return function(){var t=performance.now();20>t-e&&(Pe.touch=!1,document.removeEventListener('mousemove',r),!Pe.iOS()&&document.body.classList.remove('tippy-touch')),e=t}}();document.addEventListener('click',function(e){if(!(e.target instanceof Element))return t();var i=o(e.target,Ie.TOOLTIPPED_EL),r=o(e.target,Ie.POPPER);if(r){var s=n(De,function(e){return e.popper===r}),a=s.settings.interactive;if(a)return}if(i){var p=n(De,function(e){return e.el===i}),l=p.settings,d=l.hideOnClick,c=l.multiple,f=l.trigger;if(!c&&Pe.touch||!c&&-1!==f.indexOf('click'))return t(p);if(!0!==d||-1!==f.indexOf('click'))return}o(e.target,Ie.CONTROLLER)||!document.querySelector(Ie.POPPER)||t()}),document.addEventListener('touchstart',i),window.addEventListener('blur',function(){var t=document,i=t.activeElement;i&&i.blur&&e.call(i,Ie.TOOLTIPPED_EL)&&i.blur()}),!Pe.SUPPORTS_TOUCH&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',i)}function s(){return!s.done&&(s.done=!0,r(),!0)}function a(e){window.requestAnimationFrame(function(){setTimeout(e,0)})}function p(e){for(var t=[!1,'webkit'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function l(e,t){return Array.prototype.findIndex?e.findIndex(t):e.indexOf(n(e,t))}function d(e){var t=e.getAttribute('title');t&&e.setAttribute('data-original-title',t),e.removeAttribute('title')}function c(e){var t=e.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(e,t){t?window.getComputedStyle(t)[p('transform')]:window.getComputedStyle(e).opacity}function m(e,t){e.forEach(function(e){e&&t(e.classList)})}function h(e){return{tooltip:e.querySelector(Ie.TOOLTIP),circle:e.querySelector(Ie.CIRCLE),content:e.querySelector(Ie.CONTENT)}}function u(t,i){t.forEach(function(t){if(t){var o=e.call(t,Ie.CONTENT),n=o?Ce(i/1.3):i;t.style[p('transitionDuration')]=n+'ms'}})}function g(e){return'visible'===e.style.visibility}function b(){}function y(e){return!!e&&'[object Object]'===e.toString()}function v(e){return e.replace(/-.+/,'')}function E(t){var e,i,o=this,r=n(De,function(e){return e.el===o}),s=r.popper,a=r.settings.offset,l=v(s.getAttribute('x-placement')),d=Ce(s.offsetWidth/2),c=Ce(s.offsetHeight/2),f=5,m=document.documentElement.offsetWidth||document.body.offsetWidth,h=t.pageX,u=t.pageY;'top'===l?(e=h-d+a,i=u-2*c):'bottom'===l?(e=h-d+a,i=u+10):'left'===l?(e=h-2*d,i=u-c+a):'right'===l?(e=h+5,i=u-c+a):void 0;('top'===l||'bottom'===l)&&(h+f+d+a>m&&(e=m-f-2*d),0>h-f-d+a&&(e=f)),s.style[p('transform')]='translate3d('+e+'px, '+i+'px, 0)'}function w(e){if(e instanceof Element||y(e))return[e];if(e instanceof NodeList)return[].slice.call(e);if(Array.isArray(e))return e;try{return[].slice.call(document.querySelectorAll(e))}catch(e){return[]}}function O(e,t,i){if(!t)return i();var o=h(e.popper),n=o.tooltip,r=!1,s=function(t){t.target!==n||r||(r=!0,i())};n.addEventListener('webkitTransitionEnd',s),n.addEventListener('transitionend',s),clearTimeout(e._transitionendTimeout),e._transitionendTimeout=setTimeout(function(){r||i()},t)}function L(e){return e&&'[object Function]'==={}.toString.call(e)}function T(e,t){if(1!==e.nodeType)return[];var i=window.getComputedStyle(e,null);return t?i[t]:i}function x(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function S(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var t=T(e),i=t.overflow,o=t.overflowX,n=t.overflowY;return/(auto|scroll)/.test(i+n+o)?e:S(x(e))}function A(e){var t=e&&e.offsetParent,i=t&&t.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(t.nodeName)&&'static'===T(t,'position')?A(t):t:window.document.documentElement}function k(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||A(e.firstElementChild)===e)}function C(e){return null===e.parentNode?e:C(e.parentNode)}function P(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=i?e:t,n=i?t:e,r=document.createRange();r.setStart(o,0),r.setEnd(n,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||o.contains(n))return k(s)?s:A(s);var a=C(e);return a.host?P(a.host,t):P(e,C(t).host)}function D(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',i='top'===t?'scrollTop':'scrollLeft',o=e.nodeName;if('BODY'===o||'HTML'===o){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[i]}return e[i]}function I(e,t){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=D(t,'top'),n=D(t,'left'),r=i?-1:1;return e.top+=o*r,e.bottom+=o*r,e.left+=n*r,e.right+=n*r,e}function H(e,t){var i='x'===t?'Left':'Top',o='Left'==i?'Right':'Bottom';return+e['border'+i+'Width'].split('px')[0]+ +e['border'+o+'Width'].split('px')[0]}function R(e,t,i,o,n){return ke(t['offset'+e],n?t['scroll'+e]:0,i['client'+e],i['offset'+e],n?i['scroll'+e]:0,je()?i['offset'+e]+o['margin'+('Height'===e?'Top':'Left')]+o['margin'+('Height'===e?'Bottom':'Right')]:0)}function N(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0,t=window.document.body,i=window.document.documentElement,o=je()&&window.getComputedStyle(i);return{height:R('Height',t,i,o,e),width:R('Width',t,i,o,e)}}function B(e){return Ve({},e,{right:e.left+e.width,bottom:e.top+e.height})}function M(e){var t={};if(je())try{t=e.getBoundingClientRect();var i=D(e,'top'),o=D(e,'left');t.top+=i,t.left+=o,t.bottom+=i,t.right+=o}catch(e){}else t=e.getBoundingClientRect();var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?N():{},s=r.width||e.clientWidth||n.right-n.left,a=r.height||e.clientHeight||n.bottom-n.top,p=e.offsetWidth-s,l=e.offsetHeight-a;if(p||l){var d=T(e);p-=H(d,'x'),l-=H(d,'y'),n.width-=p,n.height-=l}return B(n)}function W(e,t){var i=je(),o='HTML'===t.nodeName,n=M(e),r=M(t),s=S(e),a=T(t),p=+a.borderTopWidth.split('px')[0],l=+a.borderLeftWidth.split('px')[0],d=B({top:n.top-r.top-p,left:n.left-r.left-l,width:n.width,height:n.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=+a.marginTop.split('px')[0],f=+a.marginLeft.split('px')[0];d.top-=p-c,d.bottom-=p-c,d.left-=l-f,d.right-=l-f,d.marginTop=c,d.marginLeft=f}return(i?t.contains(s):t===s&&'BODY'!==s.nodeName)&&(d=I(d,t)),d}function U(e){var t=window.document.documentElement,i=W(e,t),o=ke(t.clientWidth,window.innerWidth||0),n=ke(t.clientHeight,window.innerHeight||0),r=D(t),s=D(t,'left'),a={top:r-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:n};return B(a)}function _(e){var t=e.nodeName;return'BODY'===t||'HTML'===t?!1:'fixed'===T(e,'position')||_(x(e))}function F(e,t,i,o){var n={top:0,left:0},r=P(e,t);if('viewport'===o)n=U(r);else{var s;'scrollParent'===o?(s=S(x(e)),'BODY'===s.nodeName&&(s=window.document.documentElement)):'window'===o?s=window.document.documentElement:s=o;var a=W(s,r);if('HTML'===s.nodeName&&!_(r)){var p=N(!1),l=p.height,d=p.width;n.top+=a.top-a.marginTop,n.bottom=l+a.top,n.left+=a.left-a.marginLeft,n.right=d+a.left}else n=a}return n.left+=i,n.top+=i,n.right-=i,n.bottom-=i,n}function q(e){var t=e.width,i=e.height;return t*i}function Y(e,t,i,o,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var s=F(i,o,r,n),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map(function(e){return Ve({key:e},a[e],{area:q(a[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,o=e.height;return t>=i.clientWidth&&o>=i.clientHeight}),d=0<l.length?l[0].key:p[0].key,c=e.split('-')[1];return d+(c?'-'+c:'')}function z(e,t,i){var o=P(t,i);return W(i,o)}function j(e){var t=window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+o,height:e.offsetHeight+i};return n}function K(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function G(e,t,i){i=i.split('-')[0];var o=j(e),n={width:o.width,height:o.height},r=-1!==['right','left'].indexOf(i),s=r?'top':'left',a=r?'left':'top',p=r?'height':'width',l=r?'width':'height';return n[s]=t[s]+t[p]/2-o[p]/2,n[a]=i===a?t[a]-o[l]:t[K(a)],n}function X(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function V(e,t,i){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===i});var o=X(e,function(e){return e[t]===i});return e.indexOf(o)}function Q(e,t,i){var o=void 0===i?e:e.slice(0,V(e,'name',i));return o.forEach(function(e){e.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=e.function||e.fn;e.enabled&&L(i)&&(t.offsets.popper=B(t.offsets.popper),t.offsets.reference=B(t.offsets.reference),t=i(t,e))}),t}function J(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=z(this.state,this.popper,this.reference),e.placement=Y(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=G(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=Q(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function Z(e,t){return e.some(function(e){var i=e.name,o=e.enabled;return o&&i===t})}function $(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function ee(){return this.state.isDestroyed=!0,Z(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[$('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function te(e,t,i,o){var n='BODY'===e.nodeName,r=n?window:e;r.addEventListener(t,i,{passive:!0}),n||te(S(r.parentNode),t,i,o),o.push(r)}function ie(e,t,i,o){i.updateBound=o,window.addEventListener('resize',i.updateBound,{passive:!0});var n=S(e);return te(n,'scroll',i.updateBound,i.scrollParents),i.scrollElement=n,i.eventsEnabled=!0,i}function oe(){this.state.eventsEnabled||(this.state=ie(this.reference,this.options,this.state,this.scheduleUpdate))}function ne(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function re(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=ne(this.reference,this.state))}function se(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ae(e,t){Object.keys(t).forEach(function(i){var o='';-1!==['width','height','top','right','bottom','left'].indexOf(i)&&se(t[i])&&(o='px'),e.style[i]=t[i]+o})}function pe(e,t){Object.keys(t).forEach(function(i){var o=t[i];!1===o?e.removeAttribute(i):e.setAttribute(i,t[i])})}function le(e,t,i){var o=X(e,function(e){var i=e.name;return i===t}),n=!!o&&e.some(function(e){return e.name===i&&e.enabled&&e.order<o.order});if(!n){var r='`'+t+'`';console.warn('`'+i+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function de(e){return'end'===e?'start':'start'===e?'end':e}function ce(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=Je.indexOf(e),o=Je.slice(i+1).concat(Je.slice(0,i));return t?o.reverse():o}function fe(e,t,i,o){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],s=n[2];if(!r)return e;if(0===s.indexOf('%')){var a;switch(s){case'%p':a=i;break;case'%':case'%r':default:a=o;}var p=B(a);return p[t]/100*r}if('vh'===s||'vw'===s){var l;return l='vh'===s?ke(document.documentElement.clientHeight,window.innerHeight||0):ke(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function me(e,t,i,o){var n=[0,0],r=-1!==['right','left'].indexOf(o),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(X(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var p=/\s*,\s*|\s+/,l=-1===a?[s]:[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1],s.slice(a+1)]];return l=l.map(function(e,o){var n=(1===o?!r:r)?'height':'width',s=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return fe(e,n,t,i)})}),l.forEach(function(e,t){e.forEach(function(i,o){se(i)&&(n[t]+=i*('-'===e[o-1]?-1:1))})}),n}function he(e){return-(e-He.distance)+'px'}function ue(e){var t=e.el,i=e.popper,o=e.settings,n=o.position,r=o.popperOptions,s=o.offset,l=o.distance,d=o.flipDuration,c=h(i),f=c.tooltip,m=it({placement:n},r||{},{modifiers:it({},r?r.modifiers:{},{flip:it({padding:l+5},r&&r.modifiers?r.modifiers.flip:{}),offset:it({offset:s},r&&r.modifiers?r.modifiers.offset:{})}),onUpdate:function(){var e=f.style;e.top='',e.bottom='',e.left='',e.right='',e[v(i.getAttribute('x-placement'))]=he(l)}});if(window.MutationObserver){var u=i.style,g=new MutationObserver(function(){u[p('transitionDuration')]='0ms',e.popperInstance.update(),a(function(){u[p('transitionDuration')]=d+'ms'})});g.observe(i,{childList:!0,subtree:!0,characterData:!0}),e._mutationObservers.push(g)}return new $e(t,i,m)}function ge(e){var t=e.el,i=e.popper,o=e.settings,n=o.appendTo,r=o.followCursor;n.contains(i)||(n.appendChild(i),e.popperInstance?(e.popperInstance.update(),(!r||Pe.touch)&&e.popperInstance.enableEventListeners()):e.popperInstance=ue(e),r&&!Pe.touch&&(t.addEventListener('mousemove',E),e.popperInstance.disableEventListeners()))}function be(e){var t=e.popper,i=e.popperInstance,o=e.settings.stickyDuration,n=function(){return t.style[p('transitionDuration')]=o+'ms'},r=function(){return t.style[p('transitionDuration')]=''};a(function e(){i&&i.scheduleUpdate(),n(),g(t)?window.requestAnimationFrame(e):r()})}function ye(e,t){var i=Re.reduce(function(i,o){var n=e.getAttribute('data-'+o.toLowerCase())||t[o];return'false'===n&&(n=!1),'true'===n&&(n=!0),isFinite(n)&&!isNaN(parseFloat(n))&&(n=parseFloat(n)),'string'==typeof n&&'['===n.trim().charAt(0)&&(n=JSON.parse(n)),i[o]=n,i},{});return it({},t,i)}function ve(e,t,i){var o=i.position,n=i.distance,r=i.arrow,s=i.animateFill,a=i.inertia,p=i.animation,l=i.arrowSize,d=i.size,c=i.theme,f=i.html,m=i.zIndex,h=i.interactive,u=document.createElement('div');u.setAttribute('class','tippy-popper'),u.setAttribute('role','tooltip'),u.setAttribute('aria-hidden','true'),u.setAttribute('id','tippy-tooltip-'+e),u.style.zIndex=m;var g=document.createElement('div');if(g.setAttribute('class','tippy-tooltip tippy-tooltip--'+d+' leave'),g.setAttribute('data-animation',p),c.split(' ').forEach(function(e){g.classList.add(e+'-theme')}),r){var b=document.createElement('div');b.setAttribute('class','arrow-'+l),b.setAttribute('x-arrow',''),g.appendChild(b)}if(s){g.setAttribute('data-animatefill','');var y=document.createElement('div');y.setAttribute('class','leave'),y.setAttribute('x-circle',''),g.appendChild(y)}a&&g.setAttribute('data-inertia',''),h&&g.setAttribute('data-interactive','');var E=document.createElement('div');if(E.setAttribute('class','tippy-tooltip-content'),f){var w;f instanceof Element?(E.appendChild(f),w='#'+f.id||'tippy-html-template'):(E.innerHTML=document.getElementById(f.replace('#','')).innerHTML,w=f),u.classList.add('html-template'),h&&u.setAttribute('tabindex','-1'),g.setAttribute('data-template-id',w)}else E.innerHTML=t;return g.style[v(o)]=he(n),g.appendChild(E),u.appendChild(g),u}function Ee(e,t,i,o){var n=[];return'manual'===e?n:(t.addEventListener(e,i.handleTrigger),n.push({event:e,handler:i.handleTrigger}),'mouseenter'===e&&(Pe.SUPPORTS_TOUCH&&o&&(t.addEventListener('touchstart',i.handleTrigger),n.push({event:'touchstart',handler:i.handleTrigger}),t.addEventListener('touchend',i.handleMouseleave),n.push({event:'touchend',handler:i.handleMouseleave})),t.addEventListener('mouseleave',i.handleMouseleave),n.push({event:'mouseleave',handler:i.handleMouseleave})),'focus'===e&&(t.addEventListener('blur',i.handleBlur),n.push({event:'blur',handler:i.handleBlur})),n)}function we(e,t,i){if(!t.getAttribute('x-placement'))return!0;var o=e.clientX,n=e.clientY,r=i.interactiveBorder,s=i.distance,a=t.getBoundingClientRect(),p=v(t.getAttribute('x-placement')),l=r+s,d={top:a.top-n>r,bottom:n-a.bottom>r,left:a.left-o>r,right:o-a.right>r};return'top'===p?d.top=a.top-n>l:'bottom'===p?d.bottom=n-a.bottom>l:'left'===p?d.left=a.left-o>l:'right'===p?d.right=o-a.right>l:void 0,d.top||d.bottom||d.left||d.right}function Oe(e,t,i){var n,r,s=this,a=i.position,p=i.delay,l=i.duration,d=i.interactive,c=i.interactiveBorder,f=i.distance,m=i.hideOnClick,h=i.trigger,u=i.touchHold,b=i.touchWait,y=function(){clearTimeout(n),clearTimeout(r)},v=function(){if(y(),!g(t)){var e=Array.isArray(p)?p[0]:p;p?n=setTimeout(function(){return s.show(t)},e):s.show(t)}},E=function(e){return s.callbacks.wait?s.callbacks.wait.call(t,v,e):v()},w=function(){y();var e=Array.isArray(p)?p[1]:p;p?r=setTimeout(function(){return s.hide(t)},e):s.hide(t)};return{handleTrigger:function(i){var o='mouseenter'===i.type&&Pe.SUPPORTS_TOUCH&&Pe.touch;if(!(o&&u)){var n='click'===i.type;n&&g(t)&&'persistent'!==m?w():E(i),o&&Pe.iOS()&&e.click&&e.click()}},handleMouseleave:function(n){if(!('mouseleave'===n.type&&Pe.SUPPORTS_TOUCH&&Pe.touch&&u)){if(d){var r=function n(r){var s=function(){document.body.removeEventListener('mouseleave',w),document.removeEventListener('mousemove',n),w()},a=o(r.target,Ie.TOOLTIPPED_EL),p=o(r.target,Ie.POPPER)===t,l=-1!==h.indexOf('click');return a&&a!==e?s():void(p||a===e||l||we(r,t,i)&&s())};return document.body.addEventListener('mouseleave',w),void document.addEventListener('mousemove',r)}w()}},handleBlur:function(e){!e.relatedTarget||Pe.touch||o(e.relatedTarget,Ie.POPPER)||w()}}}function Le(e){return e.arrow&&(e.animateFill=!1),e.appendTo&&'function'==typeof e.appendTo&&(e.appendTo=e.appendTo()),e}function Te(e){var t=this;return e.reduce(function(e,i){var o=ot,n=it({},Le(t.settings.performance?t.settings:ye(i,t.settings)));'function'==typeof n.html&&(n.html=n.html(i));var r=n.html,s=n.trigger,a=n.touchHold,p=n.dynamicTitle,l=i.getAttribute('title');if(!l&&!r)return e;i.setAttribute('data-tooltipped',''),i.setAttribute('aria-describedby','tippy-tooltip-'+o),d(i);var c=ve(o,l,n),f=Oe.call(t,i,c,n),m=[];s.trim().split(' ').forEach(function(e){return m=m.concat(Ee(e,i,f,a))});var u;if(p&&window.MutationObserver){var g=h(c),b=g.content;u=new MutationObserver(function(){var e=i.getAttribute('title');e&&(b.innerHTML=e,d(i))}),u.observe(i,{attributes:!0})}return e.push({id:o,el:i,popper:c,settings:n,listeners:m,tippyInstance:t,_mutationObservers:[u]}),ot++,e},[])}function xe(e,t){return y(e)&&(e={refObj:!0,attributes:e.attributes||{},getBoundingClientRect:e.getBoundingClientRect,clientWidth:e.clientWidth,clientHeight:e.clientHeight,setAttribute:function(t,i){e.attributes[t]=i},getAttribute:function(t){return e.attributes[t]},removeAttribute:function(t){delete e.attributes[t]},addEventListener:function(){},removeEventListener:function(){},classList:{classNames:{},add:function(t){e.classList.classNames[t]=!0},remove:function(t){return e.classList.classNames[t]=!1,!0},contains:function(t){return!!e.classList.classNames[t]}}}),new nt(e,t)}var Se=Math.min,Ae=Math.floor,ke=Math.max,Ce=Math.round,Pe={};'undefined'!=typeof window&&(Pe.SUPPORTED='requestAnimationFrame'in window,Pe.SUPPORTS_TOUCH='ontouchstart'in window,Pe.touch=!1,Pe.dynamicInputDetection=!0,Pe.iOS=function(){return/iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream});var De=[],Ie={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-tooltip-content',CIRCLE:'[x-circle]',ARROW:'[x-arrow]',TOOLTIPPED_EL:'[data-tooltipped]',CONTROLLER:'[data-tippy-controller]'},He={html:!1,position:'top',animation:'shift',animateFill:!0,arrow:!1,arrowSize:'regular',delay:0,trigger:'mouseenter focus',duration:350,interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,flipDuration:350,sticky:!1,stickyDuration:200,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,popperOptions:{}},Re=Pe.SUPPORTED&&Object.keys(He),Ne={};if('undefined'!=typeof Element){var Be=Element.prototype;Ne=Be.matches||Be.matchesSelector||Be.webkitMatchesSelector||Be.mozMatchesSelector||Be.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return-1<o}}for(var e=Ne,Me=['native code','[object MutationObserverConstructor]'],We=function(e){return Me.some(function(t){return-1<(e||'').toString().indexOf(t)})},Ue='undefined'!=typeof window,_e=['Edge','Trident','Firefox'],Fe=0,qe=0;qe<_e.length;qe+=1)if(Ue&&0<=navigator.userAgent.indexOf(_e[qe])){Fe=1;break}var i,Ye=Ue&&We(window.MutationObserver),ze=Ye?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Fe))}},je=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},Ke=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Ge=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),Xe=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},Ve=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Qe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],Je=Qe.slice(3),Ze={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},$e=function(){function e(t,i){var o=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Ke(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=ze(this.update.bind(this)),this.options=Ve({},e.Defaults,n),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(Ve({},e.Defaults.modifiers,n.modifiers)).forEach(function(t){o.options.modifiers[t]=Ve({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return Ve({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&L(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ge(e,[{key:'update',value:function(){return J.call(this)}},{key:'destroy',value:function(){return ee.call(this)}},{key:'enableEventListeners',value:function(){return oe.call(this)}},{key:'disableEventListeners',value:function(){return re.call(this)}}]),e}();$e.Utils=('undefined'==typeof window?global:window).PopperUtils,$e.placements=Qe,$e.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,i=t.split('-')[0],o=t.split('-')[1];if(o){var n=e.offsets,r=n.reference,s=n.popper,a=-1!==['bottom','top'].indexOf(i),p=a?'left':'top',l=a?'width':'height',d={start:Xe({},p,r[p]),end:Xe({},p,r[p]+r[l]-s[l])};e.offsets.popper=Ve({},s,d[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var i,o=t.offset,n=e.placement,r=e.offsets,s=r.popper,a=r.reference,p=n.split('-')[0];return i=se(+o)?[+o,0]:me(o,s,a,p),'left'===p?(s.top+=i[0],s.left-=i[1]):'right'===p?(s.top+=i[0],s.left+=i[1]):'top'===p?(s.left+=i[0],s.top-=i[1]):'bottom'===p&&(s.left+=i[0],s.top+=i[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var i=t.boundariesElement||A(e.instance.popper);e.instance.reference===i&&(i=A(i));var o=F(e.instance.popper,e.instance.reference,t.padding,i);t.boundaries=o;var n=t.priority,r=e.offsets.popper,s={primary:function(e){var i=r[e];return r[e]<o[e]&&!t.escapeWithReference&&(i=ke(r[e],o[e])),Xe({},e,i)},secondary:function(e){var i='right'===e?'left':'top',n=r[i];return r[e]>o[e]&&!t.escapeWithReference&&(n=Se(r[i],o[e]-('right'===e?r.width:r.height))),Xe({},i,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';r=Ve({},r,s[t](e))}),e.offsets.popper=r,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,i=t.popper,o=t.reference,n=e.placement.split('-')[0],r=Ae,s=-1!==['top','bottom'].indexOf(n),a=s?'right':'bottom',p=s?'left':'top',l=s?'width':'height';return i[a]<r(o[p])&&(e.offsets.popper[p]=r(o[p])-i[l]),i[p]>r(o[a])&&(e.offsets.popper[p]=r(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!le(e.instance.modifiers,'arrow','keepTogether'))return e;var i=t.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var o=e.placement.split('-')[0],n=e.offsets,r=n.popper,s=n.reference,a=-1!==['left','right'].indexOf(o),p=a?'height':'width',l=a?'Top':'Left',d=l.toLowerCase(),c=a?'left':'top',f=a?'bottom':'right',m=j(i)[p];s[f]-m<r[d]&&(e.offsets.popper[d]-=r[d]-(s[f]-m)),s[d]+m>r[f]&&(e.offsets.popper[d]+=s[d]+m-r[f]);var h=s[d]+s[p]/2-m/2,u=T(e.instance.popper,'margin'+l).replace('px',''),g=h-B(e.offsets.popper)[d]-u;return g=ke(Se(r[p]-m,g),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[d]=Ce(g),e.offsets.arrow[c]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(Z(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var i=F(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split('-')[0],n=K(o),r=e.placement.split('-')[1]||'',s=[];switch(t.behavior){case Ze.FLIP:s=[o,n];break;case Ze.CLOCKWISE:s=ce(o);break;case Ze.COUNTERCLOCKWISE:s=ce(o,!0);break;default:s=t.behavior;}return s.forEach(function(a,p){if(o!==a||s.length===p+1)return e;o=e.placement.split('-')[0],n=K(o);var l=e.offsets.popper,d=e.offsets.reference,c=Ae,f='left'===o&&c(l.right)>c(d.left)||'right'===o&&c(l.left)<c(d.right)||'top'===o&&c(l.bottom)>c(d.top)||'bottom'===o&&c(l.top)<c(d.bottom),m=c(l.left)<c(i.left),h=c(l.right)>c(i.right),u=c(l.top)<c(i.top),g=c(l.bottom)>c(i.bottom),b='left'===o&&m||'right'===o&&h||'top'===o&&u||'bottom'===o&&g,y=-1!==['top','bottom'].indexOf(o),v=!!t.flipVariations&&(y&&'start'===r&&m||y&&'end'===r&&h||!y&&'start'===r&&u||!y&&'end'===r&&g);(f||b||v)&&(e.flipped=!0,(f||b)&&(o=s[p+1]),v&&(r=de(r)),e.placement=o+(r?'-'+r:''),e.offsets.popper=Ve({},e.offsets.popper,G(e.instance.popper,e.offsets.reference,e.placement)),e=Q(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,i=t.split('-')[0],o=e.offsets,n=o.popper,r=o.reference,s=-1!==['left','right'].indexOf(i),a=-1===['top','left'].indexOf(i);return n[s?'left':'top']=r[i]-(a?n[s?'width':'height']:0),e.placement=K(t),e.offsets.popper=B(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!le(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,i=X(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var i=t.x,o=t.y,n=e.offsets.popper,r=X(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,a,p=void 0===r?t.gpuAcceleration:r,l=A(e.instance.popper),d=M(l),c={position:n.position},f={left:Ae(n.left),top:Ae(n.top),bottom:Ae(n.bottom),right:Ae(n.right)},m='bottom'===i?'top':'bottom',h='right'===o?'left':'right',u=$('transform');if(a='bottom'==m?-d.height+f.bottom:f.top,s='right'==h?-d.width+f.right:f.left,p&&u)c[u]='translate3d('+s+'px, '+a+'px, 0)',c[m]=0,c[h]=0,c.willChange='transform';else{var g='bottom'==m?-1:1,b='right'==h?-1:1;c[m]=a*g,c[h]=s*b,c.willChange=m+', '+h}var y={"x-placement":e.placement};return e.attributes=Ve({},y,e.attributes),e.styles=Ve({},c,e.styles),e.arrowStyles=Ve({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return ae(e.instance.popper,e.styles),pe(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&ae(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,i,o,n){var r=z(n,t,e),s=Y(i.placement,r,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return t.setAttribute('x-placement',s),ae(t,{position:'absolute'}),i},gpuAcceleration:void 0}}};var et=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},tt=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),it=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ot=1,nt=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};et(this,e),Pe.SUPPORTED&&(s(),this.state={destroyed:!1},this.selector=t,this.settings=it({},He,i),(i.show||i.shown||i.hide||i.hidden)&&console.warn('Callbacks without the `on` prefix are deprecated (with the exception of `wait`). Use onShow, onShown, onHide, and onHidden instead.'),this.callbacks={wait:i.wait,show:i.onShow||i.show||b,shown:i.onShown||i.shown||b,hide:i.onHide||i.hide||b,hidden:i.onHidden||i.hidden||b},this.store=Te.call(this,w(t)),De.push.apply(De,this.store))}return tt(e,[{key:'getPopperElement',value:function(e){try{return n(this.store,function(t){return t.el===e}).popper}catch(t){console.error('[getPopperElement]: Element passed as the argument does not exist in the instance')}}},{key:'getReferenceElement',value:function(e){try{return n(this.store,function(t){return t.popper===e}).el}catch(t){console.error('[getReferenceElement]: Popper passed as the argument does not exist in the instance')}}},{key:'getReferenceData',value:function(e){return n(this.store,function(t){return t.el===e||t.popper===e})}},{key:'show',value:function(e,t){var i=this;if(!this.state.destroyed){var o=n(this.store,function(t){return t.popper===e}),r=h(e),s=r.tooltip,p=r.circle,l=r.content;if(!this.selector.refObj&&!document.body.contains(o.el))return void this.destroy(e);this.callbacks.show.call(e);var d=o.el,c=o.settings,b=c.appendTo,y=c.sticky,v=c.interactive,E=c.followCursor,w=c.flipDuration,L=c.duration,T=void 0===t?Array.isArray(L)?L[0]:L:t;u([e,s,p],0),ge(o),e.style.visibility='visible',e.setAttribute('aria-hidden','false'),a(function(){g(e)&&((!E||Pe.touch)&&(o.popperInstance.update(),u([e],w)),u([s,p],T),p&&(l.style.opacity=1),v&&d.classList.add('active'),y&&be(o),f(s,p),m([s,p],function(e){e.contains('tippy-notransition')&&e.remove('tippy-notransition'),e.remove('leave'),e.add('enter')}),O(o,T,function(){!g(e)||o._onShownFired||(v&&e.focus(),s.classList.add('tippy-notransition'),o._onShownFired=!0,i.callbacks.shown.call(e))}))})}}},{key:'hide',value:function(e,t){var i=this;if(!this.state.destroyed){this.callbacks.hide.call(e);var o=n(this.store,function(t){return t.popper===e}),r=h(e),s=r.tooltip,a=r.circle,p=r.content,l=o.el,d=o.settings,f=d.appendTo,b=d.sticky,y=d.interactive,v=d.followCursor,w=d.html,L=d.trigger,T=d.duration,x=void 0===t?Array.isArray(T)?T[1]:T:t;o._onShownFired=!1,y&&l.classList.remove('active'),e.style.visibility='hidden',e.setAttribute('aria-hidden','true'),u([s,a,a?p:null],x),a&&(p.style.opacity=0),m([s,a],function(e){e.contains('tippy-tooltip')&&e.remove('tippy-notransition'),e.remove('enter'),e.add('leave')}),w&&-1!==L.indexOf('click')&&c(l)&&l.focus(),O(o,x,function(){g(e)||!f.contains(e)||'1'===getComputedStyle(s).opacity||(l.removeEventListener('mousemove',E),o.popperInstance.disableEventListeners(),f.removeChild(e),i.callbacks.hidden.call(e))})}}},{key:'update',value:function(e){if(!this.state.destroyed){var t=n(this.store,function(t){return t.popper===e}),i=h(e),o=i.content,r=t.el,s=t.settings.html;return s instanceof Element?void console.warn('Aborted: update() should not be used if `html` is a DOM element'):void(o.innerHTML=s?document.getElementById(s.replace('#','')).innerHTML:r.getAttribute('title')||r.getAttribute('data-original-title'),!s&&d(r))}}},{key:'destroy',value:function(e,t){var i=this;if(!this.state.destroyed){var o=n(this.store,function(t){return t.popper===e}),r=o.el,s=o.popperInstance,a=o.listeners,p=o._mutationObservers;g(e)&&this.hide(e,0),a.forEach(function(e){return r.removeEventListener(e.event,e.handler)}),r.setAttribute('title',r.getAttribute('data-original-title')),r.removeAttribute('data-original-title'),r.removeAttribute('data-tooltipped'),r.removeAttribute('aria-describedby'),s&&s.destroy(),p.forEach(function(e){e&&e.disconnect()}),De.splice(l(De,function(t){return t.popper===e}),1),(void 0===t||t)&&(this.store=De.filter(function(e){return e.tippyInstance===i}))}}},{key:'destroyAll',value:function(){var e=this;if(!this.state.destroyed){var t=this.store.length;this.store.forEach(function(i,o){var n=i.popper;e.destroy(n,o===t-1)}),this.store=null,this.state.destroyed=!0}}}]),e}();return xe.Browser=Pe,xe.Defaults=He,xe.disableDynamicInputDetection=function(){return Pe.dynamicInputDetection=!1},xe.enableDynamicInputDetection=function(){return Pe.dynamicInputDetection=!0},xe});


/* local/cache-js/jsdyn-jquery_cookiebar_js-207955fe.js?1606138271 */

(function($){
$.cookieBar=function(options,val){
if(options=='cookies'){
var doReturn='cookies';
}else if(options=='set'){
var doReturn='set';
}else{
var doReturn=false;
}
var defaults={
message:"<span class=\"cb-msg\">En poursuivant votre navigation sur ce site, vous acceptez l\u2019utilisation de cookies pour nous permettre de r\u00e9aliser des statistiques de visites.<\/span>",
acceptButton:true,
acceptText:'J\'accepte',
declineButton:true,
declineText:'Désactiver les cookies',
policyButton:true,
policyText:'Politique de confidentialité',
policyURL:'Politique-de-confidentialite',
autoEnable:true,
acceptOnContinue:false,
expireDays:365,
forceShow:false,
effect:'slide',
element:'body',
append:false,
fixed:true,
bottom:true,
zindex:'999',
redirect:String(window.location.href),
domain:String(window.location.hostname),
referrer:String(document.referrer)
};
var options=$.extend(defaults,options);
var expireDate=new Date();
expireDate.setTime(expireDate.getTime()+(options.expireDays*24*60*60*1000));
expireDate=expireDate.toGMTString();
var cookieEntry='cb-enabled={value}; expires='+expireDate+'; path=/';
var i,cookieValue='',aCookie,aCookies=document.cookie.split('; ');
for(i=0;i<aCookies.length;i++){
aCookie=aCookies[i].split('=');
if(aCookie[0]=='cb-enabled'){
cookieValue=aCookie[1];
}
}
if(cookieValue==''&&options.autoEnable){
cookieValue='enabled';
document.cookie=cookieEntry.replace('{value}','enabled');
}
if(options.acceptOnContinue){
if(options.referrer.indexOf(options.domain)>=0&&String(window.location.href).indexOf(options.policyURL)==-1&&doReturn!='cookies'&&doReturn!='set'&&cookieValue!='accepted'&&cookieValue!='declined'){
doReturn='set';
val='accepted';
}
}
if(doReturn=='cookies'){
if(cookieValue=='enabled'||cookieValue=='accepted'){
return true;
}else{
return false;
}
}else if(doReturn=='set'&&(val=='accepted'||val=='declined')){
document.cookie=cookieEntry.replace('{value}',val);
if(val=='accepted'){
return true;
}else{
return false;
}
}else{
var message=options.message.replace('{policy_url}',options.policyURL);
if(options.acceptButton){
var acceptButton='<a href="" class="cb-enable">'+options.acceptText+'</a>';
}else{
var acceptButton='';
}
if(options.declineButton){
var declineButton='<a href="" class="cb-disable">'+options.declineText+'</a>';
}else{
var declineButton='';
}
if(options.policyButton&&options.policyURL){
var policyButton='<a href="'+options.policyURL+'" class="cb-policy">'+options.policyText+'</a>';
}else{
var policyButton='';
}
if(options.fixed){
if(options.bottom){
var fixed=' class="fixed bottom"';
}else{
var fixed=' class="fixed"';
}
}else{
var fixed='';
}
if(options.zindex!=''){
var zindex=' style="z-index:'+options.zindex+';"';
}else{
var zindex='';
}
if(options.forceShow||cookieValue=='enabled'||cookieValue==''){
if(options.append){
$(options.element).append('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
}else{
$(options.element).prepend('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
}
}
$('#cookie-bar .cb-enable').click(function(){
document.cookie=cookieEntry.replace('{value}','accepted');
if(cookieValue!='enabled'&&cookieValue!='accepted'){
window.location=options.currentLocation;
}else{
if(options.effect=='slide'){
$('#cookie-bar').slideUp(300,function(){$('#cookie-bar').remove();});
}else if(options.effect=='fade'){
$('#cookie-bar').fadeOut(300,function(){$('#cookie-bar').remove();});
}else{
$('#cookie-bar').hide(0,function(){$('#cookie-bar').remove();});
}
return false;
}
});
$('#cookie-bar .cb-disable').click(function(){
var deleteDate=new Date();
deleteDate.setTime(deleteDate.getTime()-(864000000));
deleteDate=deleteDate.toGMTString();
aCookies=document.cookie.split('; ');
for(i=0;i<aCookies.length;i++){
aCookie=aCookies[i].split('=');
if(aCookie[0].indexOf('_')>=0){
document.cookie=aCookie[0]+'=0; expires='+deleteDate+'; domain='+options.domain.replace('www','')+'; path=/';
}else{
document.cookie=aCookie[0]+'=0; expires='+deleteDate+'; path=/';
}
}
document.cookie=cookieEntry.replace('{value}','declined');
if(cookieValue=='enabled'&&cookieValue!='accepted'){
window.location=options.currentLocation;
}else{
if(options.effect=='slide'){
$('#cookie-bar').slideUp(300,function(){$('#cookie-bar').remove();});
}else if(options.effect=='fade'){
$('#cookie-bar').fadeOut(300,function(){$('#cookie-bar').remove();});
}else{
$('#cookie-bar').hide(0,function(){$('#cookie-bar').remove();});
}
return false;
}
});
}
};
})(jQuery);


/* plugins-dist/cookiebar/js/jquery.cookiebar.call.js */

(function($){
$(document).ready(function(){
$.cookieBar();
});
})(jQuery);


/* plugins-dist/mediabox/javascript/jquery.colorbox.js?1605805110 */

(function($,document,window){
var
defaults={
html:false,
photo:false,
iframe:false,
inline:false,
transition:"elastic",
speed:300,
fadeOut:300,
width:false,
initialWidth:"600",
innerWidth:false,
maxWidth:false,
minWidth:false,
height:false,
initialHeight:"450",
innerHeight:false,
maxHeight:false,
minHeight:false,
scalePhotos:true,
scrolling:true,
opacity:0.9,
preloading:true,
className:false,
overlayClose:true,
escKey:true,
arrowKey:true,
top:false,
bottom:false,
left:false,
right:false,
fixed:false,
data:undefined,
closeButton:true,
fastIframe:true,
open:false,
reposition:true,
loop:true,
slideshow:false,
slideshowAuto:true,
slideshowSpeed:2500,
slideshowStart:"start slideshow",
slideshowStop:"stop slideshow",
photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
retinaImage:false,
retinaUrl:false,
retinaSuffix:'@2x.$1',
current:"image {current} of {total}",
previous:"previous",
next:"next",
close:"close",
xhrError:"This content failed to load.",
imgError:"This image failed to load.",
returnFocus:true,
trapFocus:true,
onOpen:false,
onLoad:false,
onComplete:false,
onCleanup:false,
onClosed:false,
rel:function(){
return this.rel;
},
href:function(){
return $(this).attr('href');
},
title:function(){
return this.title;
},
createImg:function(){
var img=new Image();
var attrs=$(this).data('cbox-img-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
img[key]=val;
});
}
return img;
},
createIframe:function(){
var iframe=document.createElement('iframe');
var attrs=$(this).data('cbox-iframe-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
iframe[key]=val;
});
}
if('frameBorder'in iframe){
iframe.frameBorder=0;
}
if('allowTransparency'in iframe){
iframe.allowTransparency="true";
}
iframe.name=(new Date()).getTime();
iframe.allowFullscreen=true;
return iframe;
}
},
colorbox='colorbox',
colorbox_class='box_mediabox box_modalbox',
prefix='cbox',
boxElement=prefix+'Element',
event_open=prefix+'_open',
event_load=prefix+'_load',
event_complete=prefix+'_complete',
event_cleanup=prefix+'_cleanup',
event_closed=prefix+'_closed',
event_purge=prefix+'_purge',
$overlay,
$box,
$wrap,
$content,
$topBorder,
$leftBorder,
$rightBorder,
$bottomBorder,
$related,
$window,
$loaded,
$loadingBay,
$loadingOverlay,
$title,
$current,
$slideshow,
$next,
$prev,
$close,
$groupControls,
$events=$('<a/>'),
settings,
interfaceHeight,
interfaceWidth,
loadedHeight,
loadedWidth,
index,
photo,
open,
active,
closing,
loadingTimer,
publicMethod,
div="div",
requests=0,
previousCSS={},
init;
function $tag(tag,id,css){
var element=document.createElement(tag);
if(id){
element.id=prefix+id;
}
if(css){
element.style.cssText=css;
}
return $(element);
}
function winheight(){
return window.innerHeight?window.innerHeight:$(window).height();
}
function Settings(element,options){
if(options!==Object(options)){
options={};
}
this.cache={};
this.el=element;
this.value=function(key){
var dataAttr;
if(this.cache[key]===undefined){
dataAttr=$(this.el).attr('data-cbox-'+key);
if(dataAttr!==undefined){
this.cache[key]=dataAttr;
}else if(options[key]!==undefined){
this.cache[key]=options[key];
}else if(defaults[key]!==undefined){
this.cache[key]=defaults[key];
}
}
return this.cache[key];
};
this.get=function(key){
var value=this.value(key);
return $.isFunction(value)?value.call(this.el,this):value;
};
}
function getIndex(increment){
var
max=$related.length,
newIndex=(index+increment)%max;
return(newIndex<0)?max+newIndex:newIndex;
}
function setSize(size,dimension){
return Math.round((/%/.test(size)?((dimension==='x'?$window.width():winheight())/100):1)*parseInt(size,10));
}
function isImage(settings,url){
return settings.get('photo')||settings.get('photoRegex').test(url);
}
function retinaUrl(settings,url){
return settings.get('retinaUrl')&&window.devicePixelRatio>1?url.replace(settings.get('photoRegex'),settings.get('retinaSuffix')):url;
}
function trapFocus(e){
if('contains'in $box[0]&&!$box[0].contains(e.target)&&e.target!==$overlay[0]){
e.stopPropagation();
$box.focus();
}
}
function setClass(str){
if(setClass.str!==str){
$box.add($overlay).removeClass(setClass.str).addClass(str);
setClass.str=str;
}
}
function getRelated(rel){
index=0;
if(rel&&rel!==false&&rel!=='nofollow'){
$related=$('.'+boxElement).filter(function(){
var options=$.data(this,colorbox);
var settings=new Settings(this,options);
return(settings.get('rel')===rel);
});
index=$related.index(settings.el);
if(index===-1){
$related=$related.add(settings.el);
index=$related.length-1;
}
}else{
$related=$(settings.el);
}
}
function trigger(event){
$(document).trigger(event);
$events.triggerHandler(event);
}
var slideshow=(function(){
var active,
className=prefix+"Slideshow_",
click="click."+prefix,
timeOut;
function clear(){
clearTimeout(timeOut);
}
function set(){
if(settings.get('loop')||$related[index+1]){
clear();
timeOut=setTimeout(publicMethod.next,settings.get('slideshowSpeed'));
}
}
function start(){
$slideshow
.html(settings.get('slideshowStop'))
.unbind(click)
.one(click,stop);
$events
.bind(event_complete,set)
.bind(event_load,clear);
$box.removeClass(className+"off").addClass(className+"on");
}
function stop(){
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$slideshow
.html(settings.get('slideshowStart'))
.unbind(click)
.one(click,function(){
publicMethod.next();
start();
});
$box.removeClass(className+"on").addClass(className+"off");
}
function reset(){
active=false;
$slideshow.hide();
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$box.removeClass(className+"off "+className+"on");
}
return function(){
if(active){
if(!settings.get('slideshow')){
$events.unbind(event_cleanup,reset);
reset();
}
}else{
if(settings.get('slideshow')&&$related[1]){
active=true;
$events.one(event_cleanup,reset);
if(settings.get('slideshowAuto')){
start();
}else{
stop();
}
$slideshow.show();
}
}
};
}());
function launch(element){
var options;
if(!closing){
options=$(element).data(colorbox);
settings=new Settings(element,options);
getRelated(settings.get('rel'));
if(!open){
open=active=true;
setClass(settings.get('className'));
$box.css({visibility:'hidden',display:'block',opacity:''});
$loaded=$tag(div,'LoadedContent','width:0; height:0; overflow:hidden; visibility:hidden');
$content.css({width:'',height:''}).append($loaded);
interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(true)-$content.height();
interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(true)-$content.width();
loadedHeight=$loaded.outerHeight(true);
loadedWidth=$loaded.outerWidth(true);
var initialWidth=setSize(settings.get('initialWidth'),'x');
var initialHeight=setSize(settings.get('initialHeight'),'y');
var maxWidth=settings.get('maxWidth');
var maxHeight=settings.get('maxHeight');
settings.w=Math.max((maxWidth!==false?Math.min(initialWidth,setSize(maxWidth,'x')):initialWidth)-loadedWidth-interfaceWidth,0);
settings.h=Math.max((maxHeight!==false?Math.min(initialHeight,setSize(maxHeight,'y')):initialHeight)-loadedHeight-interfaceHeight,0);
$loaded.css({width:'',height:settings.h});
publicMethod.position();
trigger(event_open);
settings.get('onOpen');
$groupControls.add($title).hide();
$box.focus();
if(settings.get('trapFocus')){
if(document.addEventListener){
document.addEventListener('focus',trapFocus,true);
$events.one(event_closed,function(){
document.removeEventListener('focus',trapFocus,true);
});
}
}
if(settings.get('returnFocus')){
$events.one(event_closed,function(){
$(settings.el).focus();
});
}
}
var opacity=parseFloat(settings.get('opacity'));
$overlay.css({
opacity:opacity===opacity?opacity:'',
cursor:settings.get('overlayClose')?'pointer':'',
visibility:'visible'
}).show();
if(settings.get('closeButton')){
$close.html(settings.get('close')).appendTo($content);
}else{
$close.appendTo('<div/>');
}
load();
}
}
function appendHTML(){
if(!$box){
init=false;
$window=$(window);
$box=$tag(div).attr({
id:colorbox,
'class':($.support.opacity===false?prefix+'IE ':'')+colorbox_class,
role:'dialog',
tabindex:'-1'
}).hide();
$overlay=$tag(div,"Overlay").hide();
$loadingOverlay=$([$tag(div,"LoadingOverlay")[0],$tag(div,"LoadingGraphic")[0]]);
$wrap=$tag(div,"Wrapper");
$content=$tag(div,"Content").append(
$title=$tag(div,"Title"),
$current=$tag(div,"Current"),
$prev=$('<button type="button"/>').attr({id:prefix+'Previous'}),
$next=$('<button type="button"/>').attr({id:prefix+'Next'}),
$slideshow=$('<button type="button"/>').attr({id:prefix+'Slideshow'}),
$loadingOverlay
);
$close=$('<button type="button"/>').attr({id:prefix+'Close'});
$wrap.append(
$tag(div).append(
$tag(div,"TopLeft"),
$topBorder=$tag(div,"TopCenter"),
$tag(div,"TopRight")
),
$tag(div,false,'clear:left').append(
$leftBorder=$tag(div,"MiddleLeft"),
$content,
$rightBorder=$tag(div,"MiddleRight")
),
$tag(div,false,'clear:left').append(
$tag(div,"BottomLeft"),
$bottomBorder=$tag(div,"BottomCenter"),
$tag(div,"BottomRight")
)
).find('div div').css({'float':'left'});
$loadingBay=$tag(div,false,'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
$groupControls=$next.add($prev).add($current).add($slideshow);
}
if(document.body&&!$box.parent().length){
$(document.body).append($overlay,$box.append($wrap,$loadingBay));
}
}
function addBindings(){
function clickHandler(e){
if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){
e.preventDefault();
launch(this);
}
}
if($box){
if(!init){
init=true;
$next.click(function(){
publicMethod.next();
});
$prev.click(function(){
publicMethod.prev();
});
$close.click(function(){
publicMethod.close();
});
$overlay.click(function(){
if(settings.get('overlayClose')){
publicMethod.close();
}
});
$(document).bind('keydown.'+prefix,function(e){
var key=e.keyCode;
if(open&&settings.get('escKey')&&key===27){
e.preventDefault();
publicMethod.close();
}
if(open&&settings.get('arrowKey')&&$related[1]&&!e.altKey){
if(key===37){
e.preventDefault();
$prev.click();
}else if(key===39){
e.preventDefault();
$next.click();
}
}
});
if($.isFunction($.fn.on)){
$(document).on('click.'+prefix,'.'+boxElement,clickHandler);
}else{
$('.'+boxElement).live('click.'+prefix,clickHandler);
}
}
return true;
}
return false;
}
if($[colorbox]){
return;
}
$(appendHTML);
publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){
var settings;
var $obj=this;
options=options||{};
if($.isFunction($obj)){
$obj=$('<a/>');
options.open=true;
}
if(!$obj[0]){
return $obj;
}
appendHTML();
if(addBindings()){
if(callback){
options.onComplete=callback;
}
$obj.each(function(){
var old=$.data(this,colorbox)||{};
$.data(this,colorbox,$.extend(old,options));
var eltclass=$(this).attr('class');
if(eltclass){
if(eltclass.indexOf("boxWidth-")!==-1){
var w=eltclass.match(/boxWidth-([^\s'">]*)/);
w=w[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{width:w}));
}
if(eltclass.indexOf("boxHeight-")!==-1){
var h=eltclass.match(/boxHeight-([^\s'">]*)/);
h=h[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{height:h}));
}
if(eltclass.indexOf("boxIframe")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{iframe:true}));
}
if(eltclass.indexOf("boxInline")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{inline:true}));
}
if(eltclass.indexOf("boxSlideshow_off")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{slideshow:false}));
}
}
}).addClass(boxElement);
settings=new Settings($obj[0],options);
if(settings.get('open')){
launch($obj[0]);
}
}
return $obj;
};
publicMethod.position=function(speed,loadedCallback){
var
css,
top=0,
left=0,
offset=$box.offset(),
scrollTop,
scrollLeft;
$window.unbind('resize.'+prefix);
$box.css({top:-9e4,left:-9e4});
scrollTop=$window.scrollTop();
scrollLeft=$window.scrollLeft();
if(settings.get('fixed')){
offset.top-=scrollTop;
offset.left-=scrollLeft;
$box.css({position:'fixed'});
}else{
top=scrollTop;
left=scrollLeft;
$box.css({position:'absolute'});
}
if(settings.get('right')!==false){
left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.get('right'),'x'),0);
}else if(settings.get('left')!==false){
left+=setSize(settings.get('left'),'x');
}else{
left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2);
}
if(settings.get('bottom')!==false){
top+=Math.max(winheight()-settings.h-loadedHeight-interfaceHeight-setSize(settings.get('bottom'),'y'),0);
}else if(settings.get('top')!==false){
top+=setSize(settings.get('top'),'y');
}else{
top+=Math.round(Math.max(winheight()-settings.h-loadedHeight-interfaceHeight,0)/2);
}
$box.css({top:offset.top,left:offset.left,visibility:'visible'});
$wrap[0].style.width=$wrap[0].style.height="9999px";
function modalDimensions(){
$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=(parseInt($box[0].style.width,10)-interfaceWidth)+'px';
$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=(parseInt($box[0].style.height,10)-interfaceHeight)+'px';
}
css={width:settings.w+loadedWidth+interfaceWidth,height:settings.h+loadedHeight+interfaceHeight,top:top,left:left};
if(speed){
var tempSpeed=0;
$.each(css,function(i){
if(css[i]!==previousCSS[i]){
tempSpeed=speed;
return;
}
});
speed=tempSpeed;
}
previousCSS=css;
if(!speed){
$box.css(css);
}
$box.dequeue().animate(css,{
duration:speed||0,
complete:function(){
modalDimensions();
active=false;
$wrap[0].style.width=(settings.w+loadedWidth+interfaceWidth)+"px";
$wrap[0].style.height=(settings.h+loadedHeight+interfaceHeight)+"px";
if(settings.get('reposition')){
setTimeout(function(){
$window.bind('resize.'+prefix,publicMethod.position);
},1);
}
if($.isFunction(loadedCallback)){
loadedCallback();
}
},
step:modalDimensions
});
};
publicMethod.resize=function(options){
var scrolltop;
if(open){
options=options||{};
if(options.width){
settings.w=setSize(options.width,'x')-loadedWidth-interfaceWidth;
}
if(options.innerWidth){
settings.w=setSize(options.innerWidth,'x');
}
$loaded.css({width:settings.w});
if(options.height){
settings.h=setSize(options.height,'y')-loadedHeight-interfaceHeight;
}
if(options.innerHeight){
settings.h=setSize(options.innerHeight,'y');
}
if(!options.innerHeight&&!options.height){
scrolltop=$loaded.scrollTop();
$loaded.css({height:"auto"});
settings.h=$loaded.height();
}
$loaded.css({height:settings.h});
if(scrolltop){
$loaded.scrollTop(scrolltop);
}
publicMethod.position(settings.get('transition')==="none"?0:settings.get('speed'));
}
};
publicMethod.prep=function(object){
if(!open){
return;
}
var callback,speed=settings.get('transition')==="none"?0:settings.get('speed');
$loaded.remove();
$loaded=$tag(div,'LoadedContent').append(object);
function getWidth(){
settings.w=settings.w||$loaded.width();
settings.w=settings.minw&&settings.minw>settings.w?settings.minw:settings.w;
settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;
return settings.w;
}
function getHeight(){
settings.h=settings.h||$loaded.height();
settings.h=settings.minh&&settings.minh>settings.h?settings.minh:settings.h;
settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;
return settings.h;
}
$loaded.hide()
.appendTo($loadingBay.show())
.css({width:getWidth(),overflow:settings.get('scrolling')?'auto':'hidden'})
.css({height:getHeight()})
.prependTo($content);
$loadingBay.hide();
$(photo).css({'float':'none'});
setClass(settings.get('className'));
callback=function(){
var total=$related.length,
iframe,
complete;
if(!open){
return;
}
function removeFilter(){
if($.support.opacity===false){
$box[0].style.removeAttribute('filter');
}
}
complete=function(){
clearTimeout(loadingTimer);
$loadingOverlay.hide();
trigger(event_complete);
settings.get('onComplete');
};
$title.html(settings.get('title')).show();
$loaded.show();
if(total>1){
if(typeof settings.get('current')==="string"){
$current.html(settings.get('current').replace('{current}',index+1).replace('{total}',total)).show();
}
$next[(settings.get('loop')||index<total-1)?"show":"hide"]().html(settings.get('next'));
$prev[(settings.get('loop')||index)?"show":"hide"]().html(settings.get('previous'));
slideshow();
if(settings.get('preloading')){
$.each([getIndex(-1),getIndex(1)],function(){
var img,
i=$related[this],
settings=new Settings(i,$.data(i,colorbox)),
src=settings.get('href');
if(src&&isImage(settings,src)){
src=retinaUrl(settings,src);
img=document.createElement('img');
img.src=src;
}
});
}
}else{
$groupControls.hide();
}
if(settings.get('iframe')){
iframe=settings.get('createIframe');
if(!settings.get('scrolling')){
iframe.scrolling="no";
}
$(iframe)
.attr({
src:settings.get('href'),
'class':prefix+'Iframe'
})
.one('load',complete)
.appendTo($loaded);
$events.one(event_purge,function(){
iframe.src="//about:blank";
});
if(settings.get('fastIframe')){
$(iframe).trigger('load');
}
}else{
complete();
}
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,1,removeFilter);
}else{
removeFilter();
}
};
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,0,function(){
publicMethod.position(0,callback);
});
}else{
publicMethod.position(speed,callback);
}
};
function load(){
var href,setResize,prep=publicMethod.prep,$inline,request=++requests;
active=true;
photo=false;
trigger(event_purge);
trigger(event_load);
settings.get('onLoad');
settings.h=settings.get('height')?
setSize(settings.get('height'),'y')-loadedHeight-interfaceHeight:
settings.get('innerHeight')&&setSize(settings.get('innerHeight'),'y');
settings.w=settings.get('width')?
setSize(settings.get('width'),'x')-loadedWidth-interfaceWidth:
settings.get('innerWidth')&&setSize(settings.get('innerWidth'),'x');
settings.mw=settings.w;
settings.mh=settings.h;
settings.minw=settings.w;
settings.minh=settings.h;
if(settings.get('maxWidth')){
settings.mw=setSize(settings.get('maxWidth'),'x')-loadedWidth-interfaceWidth;
settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw;
}
if(settings.get('minWidth')){
settings.minw=setSize(settings.get('minWidth'),'x')-loadedWidth-interfaceWidth;
settings.minw=settings.w&&settings.w>settings.minw?settings.w:settings.minw;
}
if(settings.get('maxHeight')){
settings.mh=setSize(settings.get('maxHeight'),'y')-loadedHeight-interfaceHeight;
settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh;
}
if(settings.get('minHeight')){
settings.minh=setSize(settings.get('minHeight'),'y')-loadedHeight-interfaceHeight;
settings.minh=settings.h&&settings.h>settings.minh?settings.h:settings.minh;
}
href=settings.get('href');
loadingTimer=setTimeout(function(){
$loadingOverlay.show();
},100);
if(settings.get('inline')){
var $target=$(href).eq(0);
$inline=$('<div>').hide().insertBefore($target);
$events.one(event_purge,function(){
$inline.replaceWith($target);
});
prep($target);
}else if(settings.get('iframe')){
prep(" ");
}else if(settings.get('html')){
prep(settings.get('html'));
}else if(isImage(settings,href)){
href=retinaUrl(settings,href);
photo=settings.get('createImg');
$(photo)
.addClass(prefix+'Photo')
.bind('error.'+prefix,function(){
prep($tag(div,'Error').html(settings.get('imgError')));
})
.one('load',function(){
if(request!==requests){
return;
}
setTimeout(function(){
var percent;
if(settings.get('retinaImage')&&window.devicePixelRatio>1){
photo.height=photo.height/window.devicePixelRatio;
photo.width=photo.width/window.devicePixelRatio;
}
if(settings.get('scalePhotos')){
setResize=function(){
photo.height-=photo.height*percent;
photo.width-=photo.width*percent;
};
if(settings.mw&&photo.width>settings.mw){
percent=(photo.width-settings.mw)/photo.width;
setResize();
}
if(settings.mh&&photo.height>settings.mh){
percent=(photo.height-settings.mh)/photo.height;
setResize();
}
}
if(settings.h){
photo.style.marginTop=Math.max(settings.mh-photo.height,0)/2+'px';
}
if($related[1]&&(settings.get('loop')||$related[index+1])){
photo.style.cursor='pointer';
$(photo).bind('click.'+prefix,function(){
publicMethod.next();
});
}
photo.style.width=photo.width+'px';
photo.style.height=photo.height+'px';
prep(photo);
},1);
});
photo.src=href;
}else if(href){
$loadingBay.load(href,settings.get('data'),function(data,status){
if(request===requests){
prep(status==='error'?$tag(div,'Error').html(settings.get('xhrError')):$(this).contents());
}
});
}
}
publicMethod.next=function(){
if(!active&&$related[1]&&(settings.get('loop')||$related[index+1])){
index=getIndex(1);
launch($related[index]);
}
};
publicMethod.prev=function(){
if(!active&&$related[1]&&(settings.get('loop')||index)){
index=getIndex(-1);
launch($related[index]);
}
};
publicMethod.close=function(){
if(open&&!closing){
closing=true;
open=false;
trigger(event_cleanup);
settings.get('onCleanup');
$window.unbind('.'+prefix);
$overlay.fadeTo(settings.get('fadeOut')||0,0);
$box.stop().fadeTo(settings.get('fadeOut')||0,0,function(){
$box.hide();
$overlay.hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function(){
closing=false;
trigger(event_closed);
settings.get('onClosed');
},1);
});
}
};
publicMethod.remove=function(){
if(!$box){return;}
$box.stop();
$[colorbox].close();
$box.stop(false,true).remove();
$overlay.remove();
closing=false;
$box=null;
$('.'+boxElement)
.removeData(colorbox)
.removeClass(boxElement);
$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
};
publicMethod.element=function(){
return $(settings.el);
};
publicMethod.settings=defaults;
}(jQuery,document,window));


/* plugins-dist/mediabox/javascript/spip.mediabox.js?1605805110 */

var mediaboxInit=function(){
var options={
transition:box_settings.trans,
speed:box_settings.speed,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowSpeed:box_settings.ssSpeed,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
splash_url:box_settings.splash_url
};
if(box_settings.sel_g){
jQuery(box_settings.sel_g,this).not('.hasbox,#colorbox')
.attr("onclick","")
.colorbox(jQuery.extend({},options,{rel:'galerieauto',slideshow:true,slideshowAuto:false}))
.addClass("hasbox");
}
if(box_settings.tt_img){
jQuery("a[type=\'image/jpeg\'],a[type=\'image/png\'],a[type=\'image/gif\']",this).not('.hasbox')
.attr("onclick","")
.colorbox(options)
.addClass("hasbox")
;
}
if(box_settings.sel_c){
jQuery(box_settings.sel_c).not('.hasbox')
.colorbox(jQuery.extend({},options,{slideshow:true,slideshowAuto:false}))
.addClass("hasbox")
;
}
};
if(typeof(box_settings)!='undefined')
(function($){if(typeof onAjaxLoad=="function")onAjaxLoad(mediaboxInit);$(mediaboxInit);})(jQuery);
;(function($){
$.fn.mediabox=function(options){
var cbox_options={
overlayClose:true,
iframe:false,
transition:box_settings.trans,
speed:box_settings.speed,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
onOpen:(options&&options.onOpen)||null,
onComplete:(options&&options.onShow)||null,
onClosed:(options&&options.onClose)||null
};
if(this===jQuery.fn)
return $.colorbox($.extend(cbox_options,options));
else
return this.colorbox($.extend(cbox_options,options));
};
$.mediaboxClose=function(){$.fn.colorbox.close();};
$.mediabox=function(options){return jQuery.fn.mediabox(options);}
$.modalbox=function(href,options){$.fn.mediabox($.extend({href:href,inline:href.match(/^#/)?true:false,overlayClose:true},options));};
$.modalboxload=function(url,options){$.modalbox(url,options);};
$.modalboxclose=$.mediaboxClose;
})(jQuery);


/* plugins-dist/spip_out_ouvrant/spip_out_ouvrants.js */

$(document).on("click","a.spip_out",function(){
window.open(this.href);
return false;
});


/* plugins-dist/blocsdepliables/js/blocs.js?1605805269 */

if(typeof(bloc_actif)=='undefined')var bloc_actif='';
if(typeof(bloc_actif_num)=='undefined')var bloc_actif_num='';
jQuery.fn.blocs_toggle_slide_dist=function(selector){
this.toggleClass('blocs_slide');
if(typeof jQuery.fn.blocs_toggle_slide=='function')
return this.blocs_toggle_slide();
return this.is(".blocs_slide")?this.slideUp(blocs_slide):this.slideDown(blocs_slide);
};
jQuery.fn.blocs_set_title=function(selector){
var title=this.parent().find('.blocs_title:last').text();
if(!title)title=blocs_title_def;
title=title.split(blocs_title_sep);
this.children('a').attr('title',title[jQuery(this).is('.blocs_replie')?0:1]);
return this;
};
jQuery.fn.blocs_toggle=function(){
if(!this.length)return this;
var cible=this.is('.cs_blocs')?this.children('.blocs_titre').eq(0):this;
cible.toggleClass('blocs_replie').blocs_set_title();
var dest=this[0].id.match('^cs_bloc_id_')?jQuery('div.'+this[0].id):cible.next();
if(blocs_slide==='aucun'){
dest.toggleClass('blocs_invisible');
if(dest.is('div.blocs_resume'))dest.next().toggleClass('blocs_invisible');
}else{
dest.blocs_toggle_slide_dist();
if(dest.is('div.blocs_resume'))dest.next().blocs_toggle_slide_dist();
}
var lien=cible.children();
var url=lien.attr("href");
if(url!='javascript:;'){
lien.attr("href",'javascript:;').addClass('ouvrir_fermer');
cible.parent().children(".blocs_destination")
.load(url);
}
return this;
};
jQuery.fn.blocs_replie_tout=function(){
if(blocs_replier_tout){
var cible=this.is('.cs_blocs')?this:this.parents('div.cs_blocs');
var lignee=cible.children('.blocs_titre');
jQuery('.blocs_titre').not('.blocs_replie').not(lignee).blocs_toggle();
}
return this;
}
var blocs_clic_ajax=null;
function blocs_init(){
jQuery('.blocs_titre',this).cs_todo()
.each(function(){
jQuery(this).blocs_set_title()
.find('a.ouvrir_fermer')
.on('click',function(){
jQuery(this).parent().blocs_replie_tout().blocs_toggle();
return false;
});
});
jQuery('.blocs_destination a.replier_bloc',this).cs_todo()
.click(function(){
s=jQuery(this).parents('.cs_blocs:first');
if(typeof jQuery.fn.scrollTo=="function")jQuery('body').scrollTo(s,500,
{margin:true,onAfter:function(){s.blocs_replie_tout().blocs_toggle();}});
else s.blocs_replie_tout().blocs_toggle();
return false;
});
var blocs=blocs_get_blocs(window.location,true);
if(blocs&&(this==document))blocs_clic_blocs(blocs,true);
blocs=blocs_get_blocs(window.location);
if(blocs&&(this==document))blocs_clic_blocs(blocs);
jQuery('.spip_note['+cs_sel_jQuery+'name^=nb], .spip_note['+cs_sel_jQuery+'id^=nb]').each(function(i){
jQuery(this).click(function(e){
var href=this.href.substring(this.href.lastIndexOf("#"));
href=jQuery(href).parents('.cs_blocs').eq(0).children('.blocs_titre').eq(0);
old_blocs_slide=blocs_slide;
if(blocs_slide!='aucun')blocs_slide=-1;
if(href.is('.blocs_replie'))href.click();
blocs_slide=old_blocs_slide;
return true;
});
});
}
document.write('<style type="text/css">div.blocs_invisible{display:none;}</style>');
function cs_blocs_cookie(){
if(typeof jQuery.cookie!='function')return;
var blocs_cookie_name='blocs'+window.location.pathname+window.location.search
blocs_cookie_name=blocs_cookie_name.replace(/[ ;,=]/,'_');
var deplies=jQuery.cookie(blocs_cookie_name);
jQuery.cookie(blocs_cookie_name,null);
if(deplies)
jQuery(deplies).blocs_replie_tout().blocs_toggle();
jQuery(window).on('unload',function(){
jQuery.cookie(blocs_cookie_name,blocs_deplies());
});
}
function blocs_deplies(){
var deplies='';
jQuery('.cs_blocs').each(function(){
var numero=/cs_bloc\d+/.exec(this.className);
if(numero==null)return;
replie=jQuery(this).children('.blocs_titre').eq(0).is('.blocs_replie');
if(!replie)deplies+=(deplies.length?', ':'')+'div.'+numero[0];
});
return deplies.length?deplies:null;
}
function blocs_clic_blocs(liste,numerote){
var blocs=liste.split(',');
for(var i=0;i<blocs.length;i++)
(numerote)
?jQuery('div.cs_bloc'+blocs[i]+' .blocs_titre').eq(0).click()
:jQuery('div.cs_blocs .blocs_titre').eq(blocs[i]).click();
}
function blocs_get_blocs(url,numerote){
tab=numerote
?url.search.match(/[?&]deplier_num=([0-9,]*)/)||url.hash.match(/#deplier_num([0-9,]*)/)
:url.search.match(/[?&]deplier=([0-9,]*)/)||url.hash.match(/#deplier([0-9,]*)/);
return tab==null?(numerote?bloc_actif_num:bloc_actif):tab[1];
}
function blocs_get_pagination(url){
tab=url.match(/#pagination([0-9]+)/);
return tab==null?bloc_actif:tab[1];
}
var blocs_pagination=blocs_get_pagination(window.location.hash);
jQuery.fn.cs_todo=function(){
return this.not('.cs_done').addClass('cs_done');
};
var cs_sel_jQuery='';
jQuery(function($){
blocs_init.apply(document);
if(typeof onAjaxLoad=='function')onAjaxLoad(blocs_init);
if(blocs_js_cookie&&$('div.cs_blocs').length)$.getScript(blocs_js_cookie,cs_blocs_cookie);
var ancre=location.hash.substring(1);
if(ancre){
$('.cs_blocs').has('[name="'+ancre+'"]')
.find('.blocs_titre.blocs_replie').blocs_toggle();
$('.cs_blocs').has('#'+ancre)
.find('.blocs_titre.blocs_replie').blocs_toggle();
location=location;
}
});


/* plugins-dist/sjcycle_v2/javascript/jquery.cycle.all.js */

;(function($,undefined){
var ver='2.9999';
if($.support==undefined){
$.support={
opacity:!($.browser.msie)
};
}
function debug(s){
$.fn.cycle.debug&&log(s);
}
function log(){
window.console&&console.log&&console.log('[cycle] '+Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused=function(el){
return el.cyclePause;
}
$.fn.cycle=function(options,arg2){
var o={s:this.selector,c:this.context};
if(this.length===0&&options!='stop'){
if(!$.isReady&&o.s){
log('DOM not ready, queuing slideshow');
$(function(){
$(o.s,o.c).cycle(options,arg2);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
return this.each(function(){
var opts=handleArguments(this,options,arg2);
if(opts===false)
return;
opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;
if(this.cycleTimeout)
clearTimeout(this.cycleTimeout);
this.cycleTimeout=this.cyclePause=0;
var $cont=$(this);
var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();
var els=$slides.get();
var opts2=buildOptions($cont,$slides,els,opts,o);
if(opts2===false)
return;
if(els.length<2){
log('terminating; too few slides: '+els.length);
return;
}
var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.backwards);
if(startTime){
startTime+=(opts2.delay||0);
if(startTime<10)
startTime=10;
debug('first timeout: '+startTime);
this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts.backwards)},startTime);
}
});
};
function triggerPause(cont,byHover,onPager){
var opts=$(cont).data('cycle.opts');
var paused=!!cont.cyclePause;
if(paused&&opts.paused)
opts.paused(cont,opts,byHover,onPager);
else if(!paused&&opts.resumed)
opts.resumed(cont,opts,byHover,onPager);
}
function handleArguments(cont,options,arg2){
if(cont.cycleStop==undefined)
cont.cycleStop=0;
if(options===undefined||options===null)
options={};
if(options.constructor==String){
switch(options){
case'destroy':
case'stop':
var opts=$(cont).data('cycle.opts');
if(!opts)
return false;
cont.cycleStop++;
if(cont.cycleTimeout)
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout=0;
opts.elements&&$(opts.elements).stop();
$(cont).removeData('cycle.opts');
if(options=='destroy')
destroy(opts);
return false;
case'toggle':
cont.cyclePause=(cont.cyclePause===1)?0:1;
checkInstantResume(cont.cyclePause,arg2,cont);
triggerPause(cont);
return false;
case'pause':
cont.cyclePause=1;
triggerPause(cont);
return false;
case'resume':
cont.cyclePause=0;
checkInstantResume(false,arg2,cont);
triggerPause(cont);
return false;
case'prev':
case'next':
var opts=$(cont).data('cycle.opts');
if(!opts){
log('options not found, "prev/next" ignored');
return false;
}
$.fn.cycle[options](opts);
return false;
default:
options={fx:options};
};
return options;
}
else if(options.constructor==Number){
var num=options;
options=$(cont).data('cycle.opts');
if(!options){
log('options not found, can not advance slide');
return false;
}
if(num<0||num>=options.elements.length){
log('invalid slide index: '+num);
return false;
}
options.nextSlide=num;
if(cont.cycleTimeout){
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout=0;
}
if(typeof arg2=='string')
options.oneTimeFx=arg2;
go(options.elements,options,1,num>=options.currSlide);
return false;
}
return options;
function checkInstantResume(isPaused,arg2,cont){
if(!isPaused&&arg2===true){
var options=$(cont).data('cycle.opts');
if(!options){
log('options not found, can not resume');
return false;
}
if(cont.cycleTimeout){
clearTimeout(cont.cycleTimeout);
cont.cycleTimeout=0;
}
go(options.elements,options,1,!options.backwards);
}
}
};
function removeFilter(el,opts){
if(!$.support.opacity&&opts.cleartype&&el.style.filter){
try{el.style.removeAttribute('filter');}
catch(smother){}
}
};
function destroy(opts){
if(opts.next)
$(opts.next).unbind(opts.prevNextEvent);
if(opts.prev)
$(opts.prev).unbind(opts.prevNextEvent);
if(opts.pager||opts.pagerAnchorBuilder)
$.each(opts.pagerAnchors||[],function(){
this.unbind().remove();
});
opts.pagerAnchors=null;
if(opts.destroy)
opts.destroy(opts);
};
function buildOptions($cont,$slides,els,options,o){
var startingSlideSpecified;
var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});
var meta=$.isFunction($cont.data)?$cont.data(opts.metaAttr):null;
if(meta)
opts=$.extend(opts,meta);
if(opts.autostop)
opts.countdown=opts.autostopCount||els.length;
var cont=$cont[0];
$cont.data('cycle.opts',opts);
opts.$cont=$cont;
opts.stopCount=cont.cycleStop;
opts.elements=els;
opts.before=opts.before?[opts.before]:[];
opts.after=opts.after?[opts.after]:[];
if(!$.support.opacity&&opts.cleartype)
opts.after.push(function(){removeFilter(this,opts);});
if(opts.continuous)
opts.after.push(function(){go(els,opts,0,!opts.backwards);});
saveOriginalOpts(opts);
if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)
clearTypeFix($slides);
if($cont.css('position')=='static')
$cont.css('position','relative');
if(opts.width)
$cont.width(opts.width);
if(opts.height&&opts.height!='auto')
$cont.height(opts.height);
if(opts.startingSlide!=undefined){
opts.startingSlide=parseInt(opts.startingSlide,10);
if(opts.startingSlide>=els.length||opts.startSlide<0)
opts.startingSlide=0;
else
startingSlideSpecified=true;
}
else if(opts.backwards)
opts.startingSlide=els.length-1;
else
opts.startingSlide=0;
if(opts.random){
opts.randomMap=[];
for(var i=0;i<els.length;i++)
opts.randomMap.push(i);
opts.randomMap.sort(function(a,b){return Math.random()-0.5;});
if(startingSlideSpecified){
for(var cnt=0;cnt<els.length;cnt++){
if(opts.startingSlide==opts.randomMap[cnt]){
opts.randomIndex=cnt;
}
}
}
else{
opts.randomIndex=1;
opts.startingSlide=opts.randomMap[1];
}
}
else if(opts.startingSlide>=els.length)
opts.startingSlide=0;
opts.currSlide=opts.startingSlide||0;
var first=opts.startingSlide;
$slides.css({position:'absolute',top:0,left:0}).hide().each(function(i){
var z;
if(opts.backwards)
z=first?i<=first?els.length+(i-first):first-i:els.length-i;
else
z=first?i>=first?els.length-(i-first):first-i:els.length-i;
$(this).css('z-index',z)
});
$(els[first]).css('opacity',1).show();
removeFilter(els[first],opts);
if(opts.fit){
if(!opts.aspect){
if(opts.width)
$slides.width(opts.width);
if(opts.height&&opts.height!='auto')
$slides.height(opts.height);
}else{
$slides.each(function(){
var $slide=$(this);
var ratio=(opts.aspect===true)?$slide.width()/$slide.height():opts.aspect;
if(opts.width&&$slide.width()!=opts.width){
$slide.width(opts.width);
$slide.height(opts.width/ratio);
}
if(opts.height&&$slide.height()<opts.height){
$slide.height(opts.height);
$slide.width(opts.height*ratio);
}
});
}
}
if(opts.center&&((!opts.fit)||opts.aspect)){
$slides.each(function(){
var $slide=$(this);
$slide.css({
"margin-left":opts.width?
((opts.width-$slide.width())/2)+"px":
0,
"margin-top":opts.height?
((opts.height-$slide.height())/2)+"px":
0
});
});
}
if(opts.center&&!opts.fit&&!opts.slideResize){
$slides.each(function(){
var $slide=$(this);
$slide.css({
"margin-left":opts.width?((opts.width-$slide.width())/2)+"px":0,
"margin-top":opts.height?((opts.height-$slide.height())/2)+"px":0
});
});
}
var reshape=opts.containerResize&&!$cont.innerHeight();
if(reshape){
var maxw=0,maxh=0;
for(var j=0;j<els.length;j++){
var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();
if(!w)w=e.offsetWidth||e.width||$e.attr('width');
if(!h)h=e.offsetHeight||e.height||$e.attr('height');
maxw=w>maxw?w:maxw;
maxh=h>maxh?h:maxh;
}
if(maxw>0&&maxh>0)
$cont.css({width:maxw+'px',height:maxh+'px'});
}
var pauseFlag=false;
if(opts.pause)
$cont.hover(
function(){
pauseFlag=true;
this.cyclePause++;
triggerPause(cont,true);
},
function(){
pauseFlag&&this.cyclePause--;
triggerPause(cont,true);
}
);
if(supportMultiTransitions(opts)===false)
return false;
var requeue=false;
options.requeueAttempts=options.requeueAttempts||0;
$slides.each(function(){
var $el=$(this);
this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr('height')||0);
this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr('width')||0);
if($el.is('img')){
var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);
var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);
var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);
var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);
if(loadingIE||loadingFF||loadingOp||loadingOther){
if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){
log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ',this.src,this.cycleW,this.cycleH);
setTimeout(function(){$(o.s,o.c).cycle(options)},opts.requeueTimeout);
requeue=true;
return false;
}
else{
log('could not determine size of image: '+this.src,this.cycleW,this.cycleH);
}
}
}
return true;
});
if(requeue)
return false;
opts.cssBefore=opts.cssBefore||{};
opts.cssAfter=opts.cssAfter||{};
opts.cssFirst=opts.cssFirst||{};
opts.animIn=opts.animIn||{};
opts.animOut=opts.animOut||{};
$slides.not(':eq('+first+')').css(opts.cssBefore);
$($slides[first]).css(opts.cssFirst);
if(opts.timeout){
opts.timeout=parseInt(opts.timeout,10);
if(opts.speed.constructor==String)
opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed,10);
if(!opts.sync)
opts.speed=opts.speed/2;
var buffer=opts.fx=='none'?0:opts.fx=='shuffle'?500:250;
while((opts.timeout-opts.speed)<buffer)
opts.timeout+=opts.speed;
}
if(opts.easing)
opts.easeIn=opts.easeOut=opts.easing;
if(!opts.speedIn)
opts.speedIn=opts.speed;
if(!opts.speedOut)
opts.speedOut=opts.speed;
opts.slideCount=els.length;
opts.currSlide=opts.lastSlide=first;
if(opts.random){
if(++opts.randomIndex==els.length)
opts.randomIndex=0;
opts.nextSlide=opts.randomMap[opts.randomIndex];
}
else if(opts.backwards)
opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;
else
opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;
if(!opts.multiFx){
var init=$.fn.cycle.transitions[opts.fx];
if($.isFunction(init))
init($cont,$slides,opts);
else if(opts.fx!='custom'&&!opts.multiFx){
log('unknown transition: '+opts.fx,'; slideshow terminating');
return false;
}
}
var e0=$slides[first];
if(!opts.skipInitializationCallbacks){
if(opts.before.length)
opts.before[0].apply(e0,[e0,e0,opts,true]);
if(opts.after.length)
opts.after[0].apply(e0,[e0,e0,opts,true]);
}
if(opts.next)
$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
if(opts.prev)
$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
if(opts.pager||opts.pagerAnchorBuilder)
buildPager(els,opts);
exposeAddSlide(opts,els);
return opts;
};
function saveOriginalOpts(opts){
opts.original={before:[],after:[]};
opts.original.cssBefore=$.extend({},opts.cssBefore);
opts.original.cssAfter=$.extend({},opts.cssAfter);
opts.original.animIn=$.extend({},opts.animIn);
opts.original.animOut=$.extend({},opts.animOut);
$.each(opts.before,function(){opts.original.before.push(this);});
$.each(opts.after,function(){opts.original.after.push(this);});
};
function supportMultiTransitions(opts){
var i,tx,txs=$.fn.cycle.transitions;
if(opts.fx.indexOf(',')>0){
opts.multiFx=true;
opts.fxs=opts.fx.replace(/\s*/g,'').split(',');
for(i=0;i<opts.fxs.length;i++){
var fx=opts.fxs[i];
tx=txs[fx];
if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){
log('discarding unknown transition: ',fx);
opts.fxs.splice(i,1);
i--;
}
}
if(!opts.fxs.length){
log('No valid transitions named; slideshow terminating.');
return false;
}
}
else if(opts.fx=='all'){
opts.multiFx=true;
opts.fxs=[];
for(p in txs){
tx=txs[p];
if(txs.hasOwnProperty(p)&&$.isFunction(tx))
opts.fxs.push(p);
}
}
if(opts.multiFx&&opts.randomizeEffects){
var r1=Math.floor(Math.random()*20)+30;
for(i=0;i<r1;i++){
var r2=Math.floor(Math.random()*opts.fxs.length);
opts.fxs.push(opts.fxs.splice(r2,1)[0]);
}
debug('randomized fx sequence: ',opts.fxs);
}
return true;
};
function exposeAddSlide(opts,els){
opts.addSlide=function(newSlide,prepend){
var $s=$(newSlide),s=$s[0];
if(!opts.autostopCount)
opts.countdown++;
els[prepend?'unshift':'push'](s);
if(opts.els)
opts.els[prepend?'unshift':'push'](s);
opts.slideCount=els.length;
if(opts.random){
opts.randomMap.push(opts.slideCount-1);
opts.randomMap.sort(function(a,b){return Math.random()-0.5;});
}
$s.css('position','absolute');
$s[prepend?'prependTo':'appendTo'](opts.$cont);
if(prepend){
opts.currSlide++;
opts.nextSlide++;
}
if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)
clearTypeFix($s);
if(opts.fit&&opts.width)
$s.width(opts.width);
if(opts.fit&&opts.height&&opts.height!='auto')
$s.height(opts.height);
s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();
s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();
$s.css(opts.cssBefore);
if(opts.pager||opts.pagerAnchorBuilder)
$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);
if($.isFunction(opts.onAddSlide))
opts.onAddSlide($s);
else
$s.hide();
};
}
$.fn.cycle.resetState=function(opts,fx){
fx=fx||opts.fx;
opts.before=[];opts.after=[];
opts.cssBefore=$.extend({},opts.original.cssBefore);
opts.cssAfter=$.extend({},opts.original.cssAfter);
opts.animIn=$.extend({},opts.original.animIn);
opts.animOut=$.extend({},opts.original.animOut);
opts.fxFn=null;
$.each(opts.original.before,function(){opts.before.push(this);});
$.each(opts.original.after,function(){opts.after.push(this);});
var init=$.fn.cycle.transitions[fx];
if($.isFunction(init))
init(opts.$cont,$(opts.elements),opts);
};
function go(els,opts,manual,fwd){
if(manual&&opts.busy&&opts.manualTrump){
debug('manualTrump in go(), stopping active transition');
$(els).stop(true,true);
opts.busy=0;
}
if(opts.busy){
debug('transition active, ignoring new tx request');
return;
}
var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];
if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual)
return;
if(!manual&&!p.cyclePause&&!opts.bounce&&
((opts.autostop&&(--opts.countdown<=0))||
(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){
if(opts.end)
opts.end(opts);
return;
}
var changed=false;
if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){
changed=true;
var fx=opts.fx;
curr.cycleH=curr.cycleH||$(curr).height();
curr.cycleW=curr.cycleW||$(curr).width();
next.cycleH=next.cycleH||$(next).height();
next.cycleW=next.cycleW||$(next).width();
if(opts.multiFx){
if(fwd&&(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length))
opts.lastFx=0;
else if(!fwd&&(opts.lastFx==undefined||--opts.lastFx<0))
opts.lastFx=opts.fxs.length-1;
fx=opts.fxs[opts.lastFx];
}
if(opts.oneTimeFx){
fx=opts.oneTimeFx;
opts.oneTimeFx=null;
}
$.fn.cycle.resetState(opts,fx);
if(opts.before.length)
$.each(opts.before,function(i,o){
if(p.cycleStop!=opts.stopCount)return;
o.apply(next,[curr,next,opts,fwd]);
});
var after=function(){
opts.busy=0;
$.each(opts.after,function(i,o){
if(p.cycleStop!=opts.stopCount)return;
o.apply(next,[curr,next,opts,fwd]);
});
if(!p.cycleStop){
queueNext();
}
};
debug('tx firing('+fx+'); currSlide: '+opts.currSlide+'; nextSlide: '+opts.nextSlide);
opts.busy=1;
if(opts.fxFn)
opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);
else if($.isFunction($.fn.cycle[opts.fx]))
$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);
else
$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);
}
else{
queueNext();
}
if(changed||opts.nextSlide==opts.currSlide){
opts.lastSlide=opts.currSlide;
if(opts.random){
opts.currSlide=opts.nextSlide;
if(++opts.randomIndex==els.length){
opts.randomIndex=0;
opts.randomMap.sort(function(a,b){return Math.random()-0.5;});
}
opts.nextSlide=opts.randomMap[opts.randomIndex];
if(opts.nextSlide==opts.currSlide)
opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;
}
else if(opts.backwards){
var roll=(opts.nextSlide-1)<0;
if(roll&&opts.bounce){
opts.backwards=!opts.backwards;
opts.nextSlide=1;
opts.currSlide=0;
}
else{
opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;
opts.currSlide=roll?0:opts.nextSlide+1;
}
}
else{
var roll=(opts.nextSlide+1)==els.length;
if(roll&&opts.bounce){
opts.backwards=!opts.backwards;
opts.nextSlide=els.length-2;
opts.currSlide=els.length-1;
}
else{
opts.nextSlide=roll?0:opts.nextSlide+1;
opts.currSlide=roll?els.length-1:opts.nextSlide-1;
}
}
}
if(changed&&opts.pager)
opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);
function queueNext(){
var ms=0,timeout=opts.timeout;
if(opts.timeout&&!opts.continuous){
ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);
if(opts.fx=='shuffle')
ms-=opts.speedOut;
}
else if(opts.continuous&&p.cyclePause)
ms=10;
if(ms>0)
p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.backwards)},ms);
}
};
$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){
$(pager).each(function(){
$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
});
};
function getTimeout(curr,next,opts,fwd){
if(opts.timeoutFn){
var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);
while(opts.fx!='none'&&(t-opts.speed)<250)
t+=opts.speed;
debug('calculated timeout: '+t+'; speed: '+opts.speed);
if(t!==false)
return t;
}
return opts.timeout;
};
$.fn.cycle.next=function(opts){advance(opts,1);};
$.fn.cycle.prev=function(opts){advance(opts,0);};
function advance(opts,moveForward){
var val=moveForward?1:-1;
var els=opts.elements;
var p=opts.$cont[0],timeout=p.cycleTimeout;
if(timeout){
clearTimeout(timeout);
p.cycleTimeout=0;
}
if(opts.random&&val<0){
opts.randomIndex--;
if(--opts.randomIndex==-2)
opts.randomIndex=els.length-2;
else if(opts.randomIndex==-1)
opts.randomIndex=els.length-1;
opts.nextSlide=opts.randomMap[opts.randomIndex];
}
else if(opts.random){
opts.nextSlide=opts.randomMap[opts.randomIndex];
}
else{
opts.nextSlide=opts.currSlide+val;
if(opts.nextSlide<0){
if(opts.nowrap)return false;
opts.nextSlide=els.length-1;
}
else if(opts.nextSlide>=els.length){
if(opts.nowrap)return false;
opts.nextSlide=0;
}
}
var cb=opts.onPrevNextEvent||opts.prevNextClick;
if($.isFunction(cb))
cb(val>0,opts.nextSlide,els[opts.nextSlide]);
go(els,opts,1,moveForward);
return false;
};
function buildPager(els,opts){
var $p=$(opts.pager);
$.each(els,function(i,o){
$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
});
opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);
};
$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){
var a;
if($.isFunction(opts.pagerAnchorBuilder)){
a=opts.pagerAnchorBuilder(i,el);
debug('pagerAnchorBuilder('+i+', el) returned: '+a);
}
else
a='<a href="#">'+(i+1)+'</a>';
if(!a)
return;
var $a=$(a);
if($a.parents('body').length===0){
var arr=[];
if($p.length>1){
$p.each(function(){
var $clone=$a.clone(true);
$(this).append($clone);
arr.push($clone[0]);
});
$a=$(arr);
}
else{
$a.appendTo($p);
}
}
opts.pagerAnchors=opts.pagerAnchors||[];
opts.pagerAnchors.push($a);
var pagerFn=function(e){
e.preventDefault();
opts.nextSlide=i;
var p=opts.$cont[0],timeout=p.cycleTimeout;
if(timeout){
clearTimeout(timeout);
p.cycleTimeout=0;
}
var cb=opts.onPagerEvent||opts.pagerClick;
if($.isFunction(cb))
cb(opts.nextSlide,els[opts.nextSlide]);
go(els,opts,1,opts.currSlide<i);
}
if(/mouseenter|mouseover/i.test(opts.pagerEvent)){
$a.hover(pagerFn,function(){});
}
else{
$a.bind(opts.pagerEvent,pagerFn);
}
if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble)
$a.bind('click.cycle',function(){return false;});
var cont=opts.$cont[0];
var pauseFlag=false;
if(opts.pauseOnPagerHover){
$a.hover(
function(){
pauseFlag=true;
cont.cyclePause++;
triggerPause(cont,true,true);
},function(){
pauseFlag&&cont.cyclePause--;
triggerPause(cont,true,true);
}
);
}
};
$.fn.cycle.hopsFromLast=function(opts,fwd){
var hops,l=opts.lastSlide,c=opts.currSlide;
if(fwd)
hops=c>l?c-l:opts.slideCount-l;
else
hops=c<l?l-c:l+opts.slideCount-c;
return hops;
};
function clearTypeFix($slides){
debug('applying clearType background-color hack');
function hex(s){
s=parseInt(s,10).toString(16);
return s.length<2?'0'+s:s;
};
function getBg(e){
for(;e&&e.nodeName.toLowerCase()!='html';e=e.parentNode){
var v=$.css(e,'background-color');
if(v&&v.indexOf('rgb')>=0){
var rgb=v.match(/\d+/g);
return'#'+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);
}
if(v&&v!='transparent')
return v;
}
return'#ffffff';
};
$slides.each(function(){$(this).css('background-color',getBg(this));});
};
$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){
$(opts.elements).not(curr).hide();
if(typeof opts.cssBefore.opacity=='undefined')
opts.cssBefore.opacity=1;
opts.cssBefore.display='block';
if(opts.slideResize&&w!==false&&next.cycleW>0)
opts.cssBefore.width=next.cycleW;
if(opts.slideResize&&h!==false&&next.cycleH>0)
opts.cssBefore.height=next.cycleH;
opts.cssAfter=opts.cssAfter||{};
opts.cssAfter.display='none';
$(curr).css('zIndex',opts.slideCount+(rev===true?1:0));
$(next).css('zIndex',opts.slideCount+(rev===true?0:1));
};
$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){
var $l=$(curr),$n=$(next);
var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;
$n.css(opts.cssBefore);
if(speedOverride){
if(typeof speedOverride=='number')
speedIn=speedOut=speedOverride;
else
speedIn=speedOut=1;
easeIn=easeOut=null;
}
var fn=function(){
$n.animate(opts.animIn,speedIn,easeIn,function(){
cb();
});
};
$l.animate(opts.animOut,speedOut,easeOut,function(){
$l.css(opts.cssAfter);
if(!opts.sync)
fn();
});
if(opts.sync)fn();
};
$.fn.cycle.transitions={
fade:function($cont,$slides,opts){
$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.opacity=0;
});
opts.animIn={opacity:1};
opts.animOut={opacity:0};
opts.cssBefore={top:0,left:0};
}
};
$.fn.cycle.ver=function(){return ver;};
$.fn.cycle.defaults={
activePagerClass:'activeSlide',
after:null,
allowPagerClickBubble:false,
animIn:null,
animOut:null,
aspect:false,
autostop:0,
autostopCount:0,
backwards:false,
before:null,
center:null,
cleartype:!$.support.opacity,
cleartypeNoBg:false,
containerResize:1,
continuous:0,
cssAfter:null,
cssBefore:null,
delay:0,
easeIn:null,
easeOut:null,
easing:null,
end:null,
fastOnEvent:0,
fit:0,
fx:'fade',
fxFn:null,
height:'auto',
manualTrump:true,
metaAttr:'cycle',
next:null,
nowrap:0,
onPagerEvent:null,
onPrevNextEvent:null,
pager:null,
pagerAnchorBuilder:null,
pagerEvent:'click.cycle',
pause:0,
pauseOnPagerHover:0,
prev:null,
prevNextEvent:'click.cycle',
random:0,
randomizeEffects:1,
requeueOnImageNotLoaded:true,
requeueTimeout:250,
rev:0,
shuffle:null,
skipInitializationCallbacks:false,
slideExpr:null,
slideResize:1,
speed:1000,
speedIn:null,
speedOut:null,
startingSlide:undefined,
sync:1,
timeout:4000,
timeoutFn:null,
updateActivePagerLink:null,
width:null
};
})(jQuery);
(function($){
$.fn.cycle.transitions.none=function($cont,$slides,opts){
opts.fxFn=function(curr,next,opts,after){
$(next).show();
$(curr).hide();
after();
};
};
$.fn.cycle.transitions.fadeout=function($cont,$slides,opts){
$slides.not(':eq('+opts.currSlide+')').css({display:'block','opacity':1});
opts.before.push(function(curr,next,opts,w,h,rev){
$(curr).css('zIndex',opts.slideCount+(!rev===true?1:0));
$(next).css('zIndex',opts.slideCount+(!rev===true?0:1));
});
opts.animIn.opacity=1;
opts.animOut.opacity=0;
opts.cssBefore.opacity=1;
opts.cssBefore.display='block';
opts.cssAfter.zIndex=0;
};
$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var h=$cont.height();
opts.cssBefore.top=h;
opts.cssBefore.left=0;
opts.cssFirst.top=0;
opts.animIn.top=0;
opts.animOut.top=-h;
};
$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var h=$cont.height();
opts.cssFirst.top=0;
opts.cssBefore.top=-h;
opts.cssBefore.left=0;
opts.animIn.top=0;
opts.animOut.top=h;
};
$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var w=$cont.width();
opts.cssFirst.left=0;
opts.cssBefore.left=w;
opts.cssBefore.top=0;
opts.animIn.left=0;
opts.animOut.left=0-w;
};
$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){
$cont.css('overflow','hidden');
opts.before.push($.fn.cycle.commonReset);
var w=$cont.width();
opts.cssFirst.left=0;
opts.cssBefore.left=-w;
opts.cssBefore.top=0;
opts.animIn.left=0;
opts.animOut.left=w;
};
$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){
$cont.css('overflow','hidden').width();
opts.before.push(function(curr,next,opts,fwd){
if(opts.rev)
fwd=!fwd;
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);
opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;
});
opts.cssFirst.left=0;
opts.cssBefore.top=0;
opts.animIn.left=0;
opts.animOut.top=0;
};
$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){
$cont.css('overflow','hidden');
opts.before.push(function(curr,next,opts,fwd){
if(opts.rev)
fwd=!fwd;
$.fn.cycle.commonReset(curr,next,opts);
opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);
opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;
});
opts.cssFirst.top=0;
opts.cssBefore.left=0;
opts.animIn.top=0;
opts.animOut.left=0;
};
$.fn.cycle.transitions.slideX=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$(opts.elements).not(curr).hide();
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.animIn.width=next.cycleW;
});
opts.cssBefore.left=0;
opts.cssBefore.top=0;
opts.cssBefore.width=0;
opts.animIn.width='show';
opts.animOut.width=0;
};
$.fn.cycle.transitions.slideY=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$(opts.elements).not(curr).hide();
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.animIn.height=next.cycleH;
});
opts.cssBefore.left=0;
opts.cssBefore.top=0;
opts.cssBefore.height=0;
opts.animIn.height='show';
opts.animOut.height=0;
};
$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){
var i,w=$cont.css('overflow','visible').width();
$slides.css({left:0,top:0});
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
});
if(!opts.speedAdjusted){
opts.speed=opts.speed/2;
opts.speedAdjusted=true;
}
opts.random=0;
opts.shuffle=opts.shuffle||{left:-w,top:15};
opts.els=[];
for(i=0;i<$slides.length;i++)
opts.els.push($slides[i]);
for(i=0;i<opts.currSlide;i++)
opts.els.push(opts.els.shift());
opts.fxFn=function(curr,next,opts,cb,fwd){
if(opts.rev)
fwd=!fwd;
var $el=fwd?$(curr):$(next);
$(next).css(opts.cssBefore);
var count=opts.slideCount;
$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){
var hops=$.fn.cycle.hopsFromLast(opts,fwd);
for(var k=0;k<hops;k++)
fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());
if(fwd){
for(var i=0,len=opts.els.length;i<len;i++)
$(opts.els[i]).css('z-index',len-i+count);
}
else{
var z=$(curr).css('z-index');
$el.css('z-index',parseInt(z,10)+1+count);
}
$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){
$(fwd?this:curr).hide();
if(cb)cb();
});
});
};
$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0});
};
$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.cssBefore.top=next.cycleH;
opts.animIn.height=next.cycleH;
opts.animOut.width=next.cycleW;
});
opts.cssFirst.top=0;
opts.cssBefore.left=0;
opts.cssBefore.height=0;
opts.animIn.top=0;
opts.animOut.height=0;
};
$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.animIn.height=next.cycleH;
opts.animOut.top=curr.cycleH;
});
opts.cssFirst.top=0;
opts.cssBefore.left=0;
opts.cssBefore.top=0;
opts.cssBefore.height=0;
opts.animOut.height=0;
};
$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.cssBefore.left=next.cycleW;
opts.animIn.width=next.cycleW;
});
opts.cssBefore.top=0;
opts.cssBefore.width=0;
opts.animIn.left=0;
opts.animOut.width=0;
};
$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.animIn.width=next.cycleW;
opts.animOut.left=curr.cycleW;
});
$.extend(opts.cssBefore,{top:0,left:0,width:0});
opts.animIn.left=0;
opts.animOut.width=0;
};
$.fn.cycle.transitions.zoom=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,false,true);
opts.cssBefore.top=next.cycleH/2;
opts.cssBefore.left=next.cycleW/2;
$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});
$.extend(opts.animOut,{width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2});
});
opts.cssFirst.top=0;
opts.cssFirst.left=0;
opts.cssBefore.width=0;
opts.cssBefore.height=0;
};
$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,false);
opts.cssBefore.left=next.cycleW/2;
opts.cssBefore.top=next.cycleH/2;
$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});
});
opts.cssBefore.width=0;
opts.cssBefore.height=0;
opts.animOut.opacity=0;
};
$.fn.cycle.transitions.blindX=function($cont,$slides,opts){
var w=$cont.css('overflow','hidden').width();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.width=next.cycleW;
opts.animOut.left=curr.cycleW;
});
opts.cssBefore.left=w;
opts.cssBefore.top=0;
opts.animIn.left=0;
opts.animOut.left=w;
};
$.fn.cycle.transitions.blindY=function($cont,$slides,opts){
var h=$cont.css('overflow','hidden').height();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.height=next.cycleH;
opts.animOut.top=curr.cycleH;
});
opts.cssBefore.top=h;
opts.cssBefore.left=0;
opts.animIn.top=0;
opts.animOut.top=h;
};
$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){
var h=$cont.css('overflow','hidden').height();
var w=$cont.width();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts);
opts.animIn.height=next.cycleH;
opts.animOut.top=curr.cycleH;
});
opts.cssBefore.top=h;
opts.cssBefore.left=w;
opts.animIn.top=0;
opts.animIn.left=0;
opts.animOut.top=h;
opts.animOut.left=w;
};
$.fn.cycle.transitions.growX=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,true);
opts.cssBefore.left=this.cycleW/2;
opts.animIn.left=0;
opts.animIn.width=this.cycleW;
opts.animOut.left=0;
});
opts.cssBefore.top=0;
opts.cssBefore.width=0;
};
$.fn.cycle.transitions.growY=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,false);
opts.cssBefore.top=this.cycleH/2;
opts.animIn.top=0;
opts.animIn.height=this.cycleH;
opts.animOut.top=0;
});
opts.cssBefore.height=0;
opts.cssBefore.left=0;
};
$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,false,true,true);
opts.cssBefore.left=next.cycleW/2;
opts.animIn.left=0;
opts.animIn.width=this.cycleW;
opts.animOut.left=curr.cycleW/2;
opts.animOut.width=0;
});
opts.cssBefore.top=0;
opts.cssBefore.width=0;
};
$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,false,true);
opts.cssBefore.top=next.cycleH/2;
opts.animIn.top=0;
opts.animIn.height=next.cycleH;
opts.animOut.top=curr.cycleH/2;
opts.animOut.height=0;
});
opts.cssBefore.height=0;
opts.cssBefore.left=0;
};
$.fn.cycle.transitions.cover=function($cont,$slides,opts){
var d=opts.direction||'left';
var w=$cont.css('overflow','hidden').width();
var h=$cont.height();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts);
if(d=='right')
opts.cssBefore.left=-w;
else if(d=='up')
opts.cssBefore.top=h;
else if(d=='down')
opts.cssBefore.top=-h;
else
opts.cssBefore.left=w;
});
opts.animIn.left=0;
opts.animIn.top=0;
opts.cssBefore.top=0;
opts.cssBefore.left=0;
};
$.fn.cycle.transitions.uncover=function($cont,$slides,opts){
var d=opts.direction||'left';
var w=$cont.css('overflow','hidden').width();
var h=$cont.height();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
if(d=='right')
opts.animOut.left=w;
else if(d=='up')
opts.animOut.top=-h;
else if(d=='down')
opts.animOut.top=h;
else
opts.animOut.left=-w;
});
opts.animIn.left=0;
opts.animIn.top=0;
opts.cssBefore.top=0;
opts.cssBefore.left=0;
};
$.fn.cycle.transitions.toss=function($cont,$slides,opts){
var w=$cont.css('overflow','visible').width();
var h=$cont.height();
opts.before.push(function(curr,next,opts){
$.fn.cycle.commonReset(curr,next,opts,true,true,true);
if(!opts.animOut.left&&!opts.animOut.top)
$.extend(opts.animOut,{left:w*2,top:-h/2,opacity:0});
else
opts.animOut.opacity=0;
});
opts.cssBefore.left=0;
opts.cssBefore.top=0;
opts.animIn.left=0;
};
$.fn.cycle.transitions.wipe=function($cont,$slides,opts){
var w=$cont.css('overflow','hidden').width();
var h=$cont.height();
opts.cssBefore=opts.cssBefore||{};
var clip;
if(opts.clip){
if(/l2r/.test(opts.clip))
clip='rect(0px 0px '+h+'px 0px)';
else if(/r2l/.test(opts.clip))
clip='rect(0px '+w+'px '+h+'px '+w+'px)';
else if(/t2b/.test(opts.clip))
clip='rect(0px '+w+'px 0px 0px)';
else if(/b2t/.test(opts.clip))
clip='rect('+h+'px '+w+'px '+h+'px 0px)';
else if(/zoom/.test(opts.clip)){
var top=parseInt(h/2,10);
var left=parseInt(w/2,10);
clip='rect('+top+'px '+left+'px '+top+'px '+left+'px)';
}
}
opts.cssBefore.clip=opts.cssBefore.clip||clip||'rect(0px 0px 0px 0px)';
var d=opts.cssBefore.clip.match(/(\d+)/g);
var t=parseInt(d[0],10),r=parseInt(d[1],10),b=parseInt(d[2],10),l=parseInt(d[3],10);
opts.before.push(function(curr,next,opts){
if(curr==next)return;
var $curr=$(curr),$next=$(next);
$.fn.cycle.commonReset(curr,next,opts,true,true,false);
opts.cssAfter.display='block';
var step=1,count=parseInt((opts.speedIn/13),10)-1;
(function f(){
var tt=t?t-parseInt(step*(t/count),10):0;
var ll=l?l-parseInt(step*(l/count),10):0;
var bb=b<h?b+parseInt(step*((h-b)/count||1),10):h;
var rr=r<w?r+parseInt(step*((w-r)/count||1),10):w;
$next.css({clip:'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)'});
(step++<=count)?setTimeout(f,13):$curr.css('display','none');
})();
});
$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0});
opts.animIn={left:0};
opts.animOut={left:0};
};
})(jQuery);


/* plugins-dist/sjcycle_v2/javascript/jquery.tooltip.js */

;(function($){
var helper={},
current,
title,
tID,
IE=$.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),
track=false;
$.tooltip={
blocked:false,
defaults:{
delay:200,
fade:false,
showURL:true,
extraClass:"",
top:15,
left:15,
id:"tooltip"
},
block:function(){
$.tooltip.blocked=!$.tooltip.blocked;
}
};
$.fn.extend({
tooltip:function(settings){
settings=$.extend({},$.tooltip.defaults,settings);
createHelper(settings);
return this.each(function(){
$.data(this,"tooltip",settings);
this.tOpacity=helper.parent.css("opacity");
this.tooltipText=this.title;
$(this).removeAttr("title");
this.alt="";
})
.mouseover(save)
.mouseout(hide)
.click(hide);
},
fixPNG:IE?function(){
return this.each(function(){
var image=$(this).css('backgroundImage');
if(image.match(/^url\(["']?(.*\.png)["']?\)$/i)){
image=RegExp.$1;
$(this).css({
'backgroundImage':'none',
'filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+image+"')"
}).each(function(){
var position=$(this).css('position');
if(position!='absolute'&&position!='relative')
$(this).css('position','relative');
});
}
});
}:function(){return this;},
unfixPNG:IE?function(){
return this.each(function(){
$(this).css({'filter':'',backgroundImage:''});
});
}:function(){return this;},
hideWhenEmpty:function(){
return this.each(function(){
$(this)[$(this).html()?"show":"hide"]();
});
},
url:function(){
return this.attr('href')||this.attr('src');
}
});
function createHelper(settings){
if(helper.parent)
return;
helper.parent=$('<div id="'+settings.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>')
.appendTo(document.body)
.hide();
if($.fn.bgiframe)
helper.parent.bgiframe();
helper.title=$('h3',helper.parent);
helper.body=$('div.body',helper.parent);
helper.url=$('div.url',helper.parent);
}
function settings(element){
return $.data(element,"tooltip");
}
function handle(event){
if(settings(this).delay)
tID=setTimeout(show,settings(this).delay);
else
show();
track=!!settings(this).track;
$(document.body).bind('mousemove',update);
update(event);
}
function save(){
if($.tooltip.blocked||this==current||(!this.tooltipText&&!settings(this).bodyHandler))
return;
current=this;
title=this.tooltipText;
if(settings(this).bodyHandler){
helper.title.hide();
var bodyContent=settings(this).bodyHandler.call(this);
if(bodyContent.nodeType||bodyContent.jquery){
helper.body.empty().append(bodyContent)
}else{
helper.body.html(bodyContent);
}
helper.body.show();
}else if(settings(this).showBody){
var parts=title.split(settings(this).showBody);
helper.title.html(parts.shift()).show();
helper.body.empty();
for(var i=0,part;(part=parts[i]);i++){
if(i>0)
helper.body.append("<br/>");
helper.body.append(part);
}
helper.body.hideWhenEmpty();
}else{
helper.title.html(title).show();
helper.body.hide();
}
if(settings(this).showURL&&$(this).url())
helper.url.html($(this).url().replace('http://','')).show();
else
helper.url.hide();
helper.parent.addClass(settings(this).extraClass);
if(settings(this).fixPNG)
helper.parent.fixPNG();
handle.apply(this,arguments);
}
function show(){
tID=null;
if((!IE||!$.fn.bgiframe)&&settings(current).fade){
if(helper.parent.is(":animated"))
helper.parent.stop().show().fadeTo(settings(current).fade,current.tOpacity);
else
helper.parent.is(':visible')?helper.parent.fadeTo(settings(current).fade,current.tOpacity):helper.parent.fadeIn(settings(current).fade);
}else{
helper.parent.show();
}
update();
}
function update(event){
if($.tooltip.blocked)
return;
if(event&&event.target.tagName=="OPTION"){
return;
}
if(!track&&helper.parent.is(":visible")){
$(document.body).unbind('mousemove',update)
}
if(current==null){
$(document.body).unbind('mousemove',update);
return;
}
helper.parent.removeClass("viewport-right").removeClass("viewport-bottom");
var left=helper.parent[0].offsetLeft;
var top=helper.parent[0].offsetTop;
if(event){
left=event.pageX+settings(current).left;
top=event.pageY+settings(current).top;
var right='auto';
if(settings(current).positionLeft){
right=$(window).width()-left;
left='auto';
}
helper.parent.css({
left:left,
right:right,
top:top
});
}
var v=viewport(),
h=helper.parent[0];
if(v.x+v.cx<h.offsetLeft+h.offsetWidth){
left-=h.offsetWidth+20+settings(current).left;
helper.parent.css({left:left+'px'}).addClass("viewport-right");
}
if(v.y+v.cy<h.offsetTop+h.offsetHeight){
top-=h.offsetHeight+20+settings(current).top;
helper.parent.css({top:top+'px'}).addClass("viewport-bottom");
}
}
function viewport(){
return{
x:$(window).scrollLeft(),
y:$(window).scrollTop(),
cx:$(window).width(),
cy:$(window).height()
};
}
function hide(event){
if($.tooltip.blocked)
return;
if(tID)
clearTimeout(tID);
current=null;
var tsettings=settings(this);
function complete(){
helper.parent.removeClass(tsettings.extraClass).hide().css("opacity","");
}
if((!IE||!$.fn.bgiframe)&&tsettings.fade){
if(helper.parent.is(':animated'))
helper.parent.stop().fadeTo(tsettings.fade,0,complete);
else
helper.parent.stop().fadeOut(tsettings.fade,complete);
}else
complete();
if(settings(this).fixPNG)
helper.parent.unfixPNG();
}
})(jQuery);


/* plugins-dist/mae/javascript/css3-mediaqueries.js */
if(typeof Object.create!=="function"){
Object.create=function(o){
function F(){
};
F.prototype=o;
return new F();
};
}
var ua={toString:function(){
return navigator.userAgent;
},test:function(s){
return this.toString().toLowerCase().indexOf(s.toLowerCase())>-1;
}};
ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];
ua.webkit=ua.test("webkit");
ua.gecko=ua.test("gecko")&&!ua.webkit;
ua.opera=ua.test("opera");
ua.ie=ua.test("msie")&&!ua.opera;
ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";
ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";
ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";
var domReady=function(){
var _1=[];
var _2=function(){
if(!arguments.callee.done){
arguments.callee.done=true;
for(var i=0;i<_1.length;i++){
_1[i]();
}
}
};
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_2,false);
}
if(ua.ie){
(function(){
try{
document.documentElement.doScroll("left");
}
catch(e){
setTimeout(arguments.callee,50);
return;
}
_2();
})();
document.onreadystatechange=function(){
if(document.readyState==="complete"){
document.onreadystatechange=null;
_2();
}
};
}
if(ua.webkit&&document.readyState){
(function(){
if(document.readyState!=="loading"){
_2();
}else{
setTimeout(arguments.callee,10);
}
})();
}
window.onload=_2;
return function(fn){
if(typeof fn==="function"){
_1[_1.length]=fn;
}
return fn;
};
}();
var cssHelper=function(){
var _3={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};
var _4,_5=false;
var _6=[];
var _7=function(fn){
if(typeof fn==="function"){
_6[_6.length]=fn;
}
};
var _8=function(){
for(var i=0;i<_6.length;i++){
_6[i](_4);
}
};
var _9={};
var _a=function(n,v){
if(_9[n]){
var _b=_9[n].listeners;
if(_b){
for(var i=0;i<_b.length;i++){
_b[i](v);
}
}
}
};
var _c=function(_d,_e,_f){
if(ua.ie&&!window.XMLHttpRequest){
window.XMLHttpRequest=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
if(!XMLHttpRequest){
return"";
}
var r=new XMLHttpRequest();
try{
r.open("get",_d,true);
r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest");
}
catch(e){
_f();
return;
}
var _10=false;
setTimeout(function(){
_10=true;
},5000);
document.documentElement.style.cursor="progress";
r.onreadystatechange=function(){
if(r.readyState===4&&!_10){
if(!r.status&&location.protocol==="file:"||(r.status>=200&&r.status<300)||r.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof r.status==="undefined"){
_e(r.responseText);
}else{
_f();
}
document.documentElement.style.cursor="";
r=null;
}
};
r.send("");
};
var _11=function(_12){
_12=_12.replace(_3.REDUNDANT_COMPONENTS,"");
_12=_12.replace(_3.REDUNDANT_WHITESPACE,"$1");
_12=_12.replace(_3.MORE_WHITESPACE," ");
_12=_12.replace(_3.FINAL_SEMICOLONS,"}");
return _12;
};
var _13={mediaQueryList:function(s){
var o={};
var idx=s.indexOf("{");
var lt=s.substring(0,idx);
s=s.substring(idx+1,s.length-1);
var mqs=[],rs=[];
var qts=lt.toLowerCase().substring(7).split(",");
for(var i=0;i<qts.length;i++){
mqs[mqs.length]=_13.mediaQuery(qts[i],o);
}
var rts=s.match(_3.BLOCKS_INSIDE);
if(rts!==null){
for(i=0;i<rts.length;i++){
rs[rs.length]=_13.rule(rts[i],o);
}
}
o.getMediaQueries=function(){
return mqs;
};
o.getRules=function(){
return rs;
};
o.getListText=function(){
return lt;
};
o.getCssText=function(){
return s;
};
return o;
},mediaQuery:function(s,mql){
s=s||"";
var not=false,_14;
var exp=[];
var _15=true;
var _16=s.match(_3.NOT_WHITESPACE);
for(var i=0;i<_16.length;i++){
var _17=_16[i];
if(!_14&&(_17==="not"||_17==="only")){
if(_17==="not"){
not=true;
}
}else{
if(!_14){
_14=_17;
}else{
if(_17.charAt(0)==="("){
var _18=_17.substring(1,_17.length-1).split(":");
exp[exp.length]={mediaFeature:_18[0],value:_18[1]||null};
}
}
}
}
return{getList:function(){
return mql||null;
},getValid:function(){
return _15;
},getNot:function(){
return not;
},getMediaType:function(){
return _14;
},getExpressions:function(){
return exp;
}};
},rule:function(s,mql){
var o={};
var idx=s.indexOf("{");
var st=s.substring(0,idx);
var ss=st.split(",");
var ds=[];
var dts=s.substring(idx+1,s.length-1).split(";");
for(var i=0;i<dts.length;i++){
ds[ds.length]=_13.declaration(dts[i],o);
}
o.getMediaQueryList=function(){
return mql||null;
};
o.getSelectors=function(){
return ss;
};
o.getSelectorText=function(){
return st;
};
o.getDeclarations=function(){
return ds;
};
o.getPropertyValue=function(n){
for(var i=0;i<ds.length;i++){
if(ds[i].getProperty()===n){
return ds[i].getValue();
}
}
return null;
};
return o;
},declaration:function(s,r){
var idx=s.indexOf(":");
var p=s.substring(0,idx);
var v=s.substring(idx+1);
return{getRule:function(){
return r||null;
},getProperty:function(){
return p;
},getValue:function(){
return v;
}};
}};
var _19=function(el){
if(typeof el.cssHelperText!=="string"){
return;
}
var o={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};
var _1a=o.mediaQueryLists;
var ors=o.rules;
var _1b=el.cssHelperText.match(_3.BLOCKS);
if(_1b!==null){
for(var i=0;i<_1b.length;i++){
if(_1b[i].substring(0,7)==="@media "){
_1a[_1a.length]=_13.mediaQueryList(_1b[i]);
ors=o.rules=ors.concat(_1a[_1a.length-1].getRules());
}else{
ors[ors.length]=_13.rule(_1b[i]);
}
}
}
var oss=o.selectors;
var _1c=function(r){
var ss=r.getSelectors();
for(var i=0;i<ss.length;i++){
var n=ss[i];
if(!oss[n]){
oss[n]=[];
}
oss[n][oss[n].length]=r;
}
};
for(i=0;i<ors.length;i++){
_1c(ors[i]);
}
var ods=o.declarations;
for(i=0;i<ors.length;i++){
ods=o.declarations=ods.concat(ors[i].getDeclarations());
}
var ops=o.properties;
for(i=0;i<ods.length;i++){
var n=ods[i].getProperty();
if(!ops[n]){
ops[n]=[];
}
ops[n][ops[n].length]=ods[i];
}
el.cssHelperParsed=o;
_4[_4.length]=el;
return o;
};
var _1d=function(el,s){
el.cssHelperText=_11(s||el.innerHTML);
return _19(el);
};
var _1e=function(){
_5=true;
_4=[];
var _1f=[];
var _20=function(){
for(var i=0;i<_1f.length;i++){
_19(_1f[i]);
}
var _21=document.getElementsByTagName("style");
for(i=0;i<_21.length;i++){
_1d(_21[i]);
}
_5=false;
_8();
};
var _22=document.getElementsByTagName("link");
for(var i=0;i<_22.length;i++){
var _23=_22[i];
if(_23.getAttribute("rel").indexOf("style")>-1&&_23.href&&_23.href.length!==0&&!_23.disabled){
_1f[_1f.length]=_23;
}
}
if(_1f.length>0){
var c=0;
var _24=function(){
c++;
if(c===_1f.length){
_20();
}
};
var _25=function(_26){
var _27=_26.href;
_c(_27,function(_28){
_28=_11(_28).replace(_3.RELATIVE_URLS,"url("+_27.substring(0,_27.lastIndexOf("/"))+"/$1)");
_26.cssHelperText=_28;
_24();
},_24);
};
for(i=0;i<_1f.length;i++){
_25(_1f[i]);
}
}else{
_20();
}
};
var _29={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};
var _2a={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};
var _2b=function(_2c,v){
if(_2a[_2c]!==null){
if(_29[_2c]==="array"){
return(_2a[_2c]=_2a[_2c].concat(v));
}else{
var c=_2a[_2c];
for(var n in v){
if(v.hasOwnProperty(n)){
if(!c[n]){
c[n]=v[n];
}else{
c[n]=c[n].concat(v[n]);
}
}
}
return c;
}
}
};
var _2d=function(_2e){
_2a[_2e]=(_29[_2e]==="array")?[]:{};
for(var i=0;i<_4.length;i++){
_2b(_2e,_4[i].cssHelperParsed[_2e]);
}
return _2a[_2e];
};
domReady(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
els[i].checkedByCssHelper=true;
}
if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){
document.body.addEventListener("DOMNodeInserted",function(e){
var el=e.target;
if(el.nodeType===1){
_a("DOMElementInserted",el);
el.checkedByCssHelper=true;
}
},false);
}else{
setInterval(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
if(!els[i].checkedByCssHelper){
_a("DOMElementInserted",els[i]);
els[i].checkedByCssHelper=true;
}
}
},1000);
}
});
var _2f=function(d){
if(typeof window.innerWidth!="undefined"){
return window["inner"+d];
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){
return document.documentElement["client"+d];
}
}
};
return{addStyle:function(s,_30){
var el=document.createElement("style");
el.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(el);
if(el.styleSheet){
el.styleSheet.cssText=s;
}else{
el.appendChild(document.createTextNode(s));
}
el.addedWithCssHelper=true;
if(typeof _30==="undefined"||_30===true){
cssHelper.parsed(function(_31){
var o=_1d(el,s);
for(var n in o){
if(o.hasOwnProperty(n)){
_2b(n,o[n]);
}
}
_a("newStyleParsed",el);
});
}else{
el.parsingDisallowed=true;
}
return el;
},removeStyle:function(el){
return el.parentNode.removeChild(el);
},parsed:function(fn){
if(_5){
_7(fn);
}else{
if(typeof _4!=="undefined"){
if(typeof fn==="function"){
fn(_4);
}
}else{
_7(fn);
_1e();
}
}
},mediaQueryLists:function(fn){
cssHelper.parsed(function(_32){
fn(_2a.mediaQueryLists||_2d("mediaQueryLists"));
});
},rules:function(fn){
cssHelper.parsed(function(_33){
fn(_2a.rules||_2d("rules"));
});
},selectors:function(fn){
cssHelper.parsed(function(_34){
fn(_2a.selectors||_2d("selectors"));
});
},declarations:function(fn){
cssHelper.parsed(function(_35){
fn(_2a.declarations||_2d("declarations"));
});
},properties:function(fn){
cssHelper.parsed(function(_36){
fn(_2a.properties||_2d("properties"));
});
},broadcast:_a,addListener:function(n,fn){
if(typeof fn==="function"){
if(!_9[n]){
_9[n]={listeners:[]};
}
_9[n].listeners[_9[n].listeners.length]=fn;
}
},removeListener:function(n,fn){
if(typeof fn==="function"&&_9[n]){
var ls=_9[n].listeners;
for(var i=0;i<ls.length;i++){
if(ls[i]===fn){
ls.splice(i,1);
i-=1;
}
}
}
},getViewportWidth:function(){
return _2f("Width");
},getViewportHeight:function(){
return _2f("Height");
}};
}();
domReady(function enableCssMediaQueries(){
var _37;
var _38={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};
var _39=[];
var _3a=function(){
var id="css3-mediaqueries-test";
var el=document.createElement("div");
el.id=id;
var _3b=cssHelper.addStyle("@media all and (width) { #"+id+" { width: 1px !important; } }",false);
document.body.appendChild(el);
var ret=el.offsetWidth===1;
_3b.parentNode.removeChild(_3b);
el.parentNode.removeChild(el);
_3a=function(){
return ret;
};
return ret;
};
var _3c=function(){
_37=document.createElement("div");
_37.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";
document.body.appendChild(_37);
if(_37.offsetWidth!==16){
_37.style.fontSize=16/_37.offsetWidth+"em";
}
_37.style.width="";
};
var _3d=function(_3e){
_37.style.width=_3e;
var _3f=_37.offsetWidth;
_37.style.width="";
return _3f;
};
var _40=function(_41,_42){
var l=_41.length;
var min=(_41.substring(0,4)==="min-");
var max=(!min&&_41.substring(0,4)==="max-");
if(_42!==null){
var _43;
var _44;
if(_38.LENGTH_UNIT.exec(_42)){
_43="length";
_44=_3d(_42);
}else{
if(_38.RESOLUTION_UNIT.exec(_42)){
_43="resolution";
_44=parseInt(_42,10);
var _45=_42.substring((_44+"").length);
}else{
if(_38.ASPECT_RATIO.exec(_42)){
_43="aspect-ratio";
_44=_42.split("/");
}else{
if(_38.ABSOLUTE_VALUE){
_43="absolute";
_44=_42;
}else{
_43="unknown";
}
}
}
}
}
var _46,_47;
if("device-width"===_41.substring(l-12,l)){
_46=screen.width;
if(_42!==null){
if(_43==="length"){
return((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("device-height"===_41.substring(l-13,l)){
_47=screen.height;
if(_42!==null){
if(_43==="length"){
return((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("width"===_41.substring(l-5,l)){
_46=document.documentElement.clientWidth||document.body.clientWidth;
if(_42!==null){
if(_43==="length"){
return((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("height"===_41.substring(l-6,l)){
_47=document.documentElement.clientHeight||document.body.clientHeight;
if(_42!==null){
if(_43==="length"){
return((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("device-aspect-ratio"===_41.substring(l-19,l)){
return _43==="aspect-ratio"&&screen.width*_44[1]===screen.height*_44[0];
}else{
if("color-index"===_41.substring(l-11,l)){
var _48=Math.pow(2,screen.colorDepth);
if(_42!==null){
if(_43==="absolute"){
return((min&&_48>=_44)||(max&&_48<_44)||(!min&&!max&&_48===_44));
}else{
return false;
}
}else{
return _48>0;
}
}else{
if("color"===_41.substring(l-5,l)){
var _49=screen.colorDepth;
if(_42!==null){
if(_43==="absolute"){
return((min&&_49>=_44)||(max&&_49<_44)||(!min&&!max&&_49===_44));
}else{
return false;
}
}else{
return _49>0;
}
}else{
if("resolution"===_41.substring(l-10,l)){
var res;
if(_45==="dpcm"){
res=_3d("1cm");
}else{
res=_3d("1in");
}
if(_42!==null){
if(_43==="resolution"){
return((min&&res>=_44)||(max&&res<_44)||(!min&&!max&&res===_44));
}else{
return false;
}
}else{
return res>0;
}
}else{
return false;
}
}
}
}
}
}
}
}
};
var _4a=function(mq){
var _4b=mq.getValid();
var _4c=mq.getExpressions();
var l=_4c.length;
if(l>0){
for(var i=0;i<l&&_4b;i++){
_4b=_40(_4c[i].mediaFeature,_4c[i].value);
}
var not=mq.getNot();
return(_4b&&!not||not&&!_4b);
}
};
var _4d=function(mql){
var mqs=mql.getMediaQueries();
var t={};
for(var i=0;i<mqs.length;i++){
if(_4a(mqs[i])){
t[mqs[i].getMediaType()]=true;
}
}
var s=[],c=0;
for(var n in t){
if(t.hasOwnProperty(n)){
if(c>0){
s[c++]=",";
}
s[c++]=n;
}
}
if(s.length>0){
_39[_39.length]=cssHelper.addStyle("@media "+s.join("")+"{"+mql.getCssText()+"}",false);
}
};
var _4e=function(_4f){
for(var i=0;i<_4f.length;i++){
_4d(_4f[i]);
}
if(ua.ie){
document.documentElement.style.display="block";
setTimeout(function(){
document.documentElement.style.display="";
},0);
setTimeout(function(){
cssHelper.broadcast("cssMediaQueriesTested");
},100);
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
};
var _50=function(){
for(var i=0;i<_39.length;i++){
cssHelper.removeStyle(_39[i]);
}
_39=[];
cssHelper.mediaQueryLists(_4e);
};
var _51=0;
var _52=function(){
var _53=cssHelper.getViewportWidth();
var _54=cssHelper.getViewportHeight();
if(ua.ie){
var el=document.createElement("div");
el.style.position="absolute";
el.style.top="-9999em";
el.style.overflow="scroll";
document.body.appendChild(el);
_51=el.offsetWidth-el.clientWidth;
document.body.removeChild(el);
}
var _55;
var _56=function(){
var vpw=cssHelper.getViewportWidth();
var vph=cssHelper.getViewportHeight();
if(Math.abs(vpw-_53)>_51||Math.abs(vph-_54)>_51){
_53=vpw;
_54=vph;
clearTimeout(_55);
_55=setTimeout(function(){
if(!_3a()){
_50();
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
},500);
}
};
window.onresize=function(){
var x=window.onresize||function(){
};
return function(){
x();
_56();
};
}();
};
var _57=document.documentElement;
_57.style.marginLeft="-32767px";
setTimeout(function(){
_57.style.marginTop="";
},20000);
return function(){
if(!_3a()){
cssHelper.addListener("newStyleParsed",function(el){
_4e(el.cssHelperParsed.mediaQueryLists);
});
cssHelper.addListener("cssMediaQueriesTested",function(){
if(ua.ie){
_57.style.width="1px";
}
setTimeout(function(){
_57.style.width="";
_57.style.marginLeft="";
},0);
cssHelper.removeListener("cssMediaQueriesTested",arguments.callee);
});
_3c();
_50();
}else{
_57.style.marginLeft="";
}
_52();
};
}());
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}


/* plugins-dist/mae/javascript/masonry.pkgd.min.js */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",o):t.eventie=o}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=s(t);if("none"===n.display)return i();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var u=r.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),f=0,d=a.length;d>f;f++){var l=a[f],c=n[l];c=o(t,c);var m=parseFloat(c);r[l]=isNaN(m)?0:m}var y=r.paddingLeft+r.paddingRight,g=r.paddingTop+r.paddingBottom,v=r.marginLeft+r.marginRight,_=r.marginTop+r.marginBottom,b=r.borderLeftWidth+r.borderRightWidth,E=r.borderTopWidth+r.borderBottomWidth,L=u&&h,z=e(n.width);z!==!1&&(r.width=z+(L?0:y+b));var S=e(n.height);return S!==!1&&(r.height=S+(L?0:g+E)),r.innerWidth=r.width-(y+b),r.innerHeight=r.height-(g+E),r.outerWidth=r.width+v,r.outerHeight=r.height+_,r}}function o(t,e){if(r||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,o=t.runtimeStyle,s=o&&o.left;return s&&(o.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(o.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=s(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle,s=r?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var n=l[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=c[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transition;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transition,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return h&&h.error("Bad "+this.settings.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,_={};return y.prototype.settings={namespace:"outlayer",item:m},y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.settings.item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=l(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){if(!t||!t.length)return this.emitEvent("layoutComplete",[this,t]),void 0;this._itemsOn(t,"layout",function(){this.emitEvent("layoutComplete",[this,t])});for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e,i.push(s)}this._processLayoutQueue(i)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=l(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=l(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},y.prototype.hide=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.settings.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&_[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return e(n.prototype,y.prototype),g(n,"options"),g(n,"settings"),e(n.prototype.options,i),n.prototype.settings.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,n.prototype.settings.item=n.Item,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,d=i[s],l=d.getAttribute(o);try{f=l&&JSON.parse(l)}catch(c){h&&h.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var m=new n(d,f);p&&p.data(d,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);


/* plugins-dist/mae/javascript/jfontsize-1.0.min.js */
(function($){
$.fn.jfontsize=function(opcoes){
var $this=$(this);
var defaults={
btnMinusClasseId:'#jfontsize-minus',
btnDefaultClasseId:'#jfontsize-default',
btnPlusClasseId:'#jfontsize-plus',
btnMinusMaxHits:10,
btnPlusMaxHits:10,
sizeChange:1
};
var masonryObject=jQuery('.page-home #container');
masonryObject.masonry('reloadItems')
if(opcoes){
opcoes=$.extend(defaults,opcoes)
};
var limite=new Array();
var fontsize_padrao=new Array();
$(this).each(function(i){
limite[i]=0;
fontsize_padrao[i];
});
$(opcoes.btnMinusClasseId+', '+opcoes.btnDefaultClasseId+', '+opcoes.btnPlusClasseId).css('cursor','pointer');
$(opcoes.btnMinusClasseId).click(function(){
$(opcoes.btnPlusClasseId).removeClass('jfontsize-disabled');
$this.each(function(i){
if(limite[i]>(-(opcoes.btnMinusMaxHits))){
fontsize_padrao[i]=$(this).css('font-size');
fontsize_padrao[i]=fontsize_padrao[i].replace('px','');
fontsize=$(this).css('font-size');
fontsize=parseInt(fontsize.replace('px',''));
fontsize=fontsize-(opcoes.sizeChange);
fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);
limite[i]--;
$(this).css('font-size',fontsize+'px');
if(limite[i]==(-(opcoes.btnMinusMaxHits))){
$(opcoes.btnMinusClasseId).addClass('jfontsize-disabled');
}
}
})
});
$(opcoes.btnDefaultClasseId).click(function(){
$(opcoes.btnMinusClasseId).removeClass('jfontsize-disabled');
$(opcoes.btnPlusClasseId).removeClass('jfontsize-disabled');
$this.each(function(i){
limite[i]=0;
$(this).css('font-size',fontsize_padrao[i]+'px');
})
return false;
});
$(opcoes.btnPlusClasseId).click(function(){
$(opcoes.btnMinusClasseId).removeClass('jfontsize-disabled');
$this.each(function(i){
if(limite[i]<opcoes.btnPlusMaxHits){
fontsize_padrao[i]=$(this).css('font-size');
fontsize_padrao[i]=fontsize_padrao[i].replace('px','');
fontsize=$(this).css('font-size');
fontsize=parseInt(fontsize.replace('px',''));
fontsize=fontsize+opcoes.sizeChange;
fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);
limite[i]++;
$(this).css('font-size',fontsize+'px');
if(limite[i]==opcoes.btnPlusMaxHits){
$(opcoes.btnPlusClasseId).addClass('jfontsize-disabled');
}
}
})
});
};
})(jQuery);


/* plugins-dist/mae/javascript/jquery.touchSwipe.min.js */
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart"in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return!!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return!!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return!!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return!!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return!!(aq.tap)}function V(){return!!(aq.doubleTap)}function aQ(){return!!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return!!(at()&&a2())}function aC(){return!!(N()&&V())}function al(){return!!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return!!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));


/* plugins-dist/mae/javascript/jquery.carouFredSel-6.2.1-packed.js */

!function($){function sc_setScroll(t,e,s){return"transition"==s.transition&&"swing"==e&&(e="ease"),{anims:[],duration:t,orgDuration:t,easing:e,startTime:getTime()}}function sc_startScroll(t,e){for(var s=0,i=t.anims.length;i>s;s++){var o=t.anims[s];o&&o[0][e.transition](o[1],t.duration,t.easing,o[2])}}function sc_stopScroll(t,e){is_boolean(e)||(e=!0),is_object(t.pre)&&sc_stopScroll(t.pre,e);for(var s=0,i=t.anims.length;i>s;s++){var o=t.anims[s];o[0].stop(!0),e&&(o[0].css(o[1]),is_function(o[2])&&o[2]())}is_object(t.post)&&sc_stopScroll(t.post,e)}function sc_afterScroll(t,e,s){switch(e&&e.remove(),s.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":t.css("opacity",1),t.css("filter","")}}function sc_fireCallbacks(t,e,s,i,o){if(e[s]&&e[s].call(t,i),o[s].length)for(var n=0,r=o[s].length;r>n;n++)o[s][n].call(t,i);return[]}function sc_fireQueue(t,e,s){return e.length&&(t.trigger(cf_e(e[0][0],s),e[0][1]),e.shift()),e}function sc_hideHiddenItems(t){t.each(function(){var t=$(this);t.data("_cfs_isHidden",t.is(":hidden")).hide()})}function sc_showHiddenItems(t){t&&t.each(function(){var t=$(this);t.data("_cfs_isHidden")||t.show()})}function sc_clearTimers(t){return t.auto&&clearTimeout(t.auto),t.progress&&clearInterval(t.progress),t}function sc_mapCallbackArguments(t,e,s,i,o,n,r){return{width:r.width,height:r.height,items:{old:t,skipped:e,visible:s},scroll:{items:i,direction:o,duration:n}}}function sc_getDuration(t,e,s,i){var o=t.duration;return"none"==t.fx?0:("auto"==o?o=e.scroll.duration/e.scroll.items*s:10>o&&(o=i/o),1>o?0:("fade"==t.fx&&(o/=2),Math.round(o)))}function nv_showNavi(t,e,s){var i=is_number(t.items.minimum)?t.items.minimum:t.items.visible+1;if("show"==e||"hide"==e)var o=e;else if(i>e){debug(s,"Not enough items ("+e+" total, "+i+" needed): Hiding navigation.");var o="hide"}else var o="show";var n="show"==o?"removeClass":"addClass",r=cf_c("hidden",s);t.auto.button&&t.auto.button[o]()[n](r),t.prev.button&&t.prev.button[o]()[n](r),t.next.button&&t.next.button[o]()[n](r),t.pagination.container&&t.pagination.container[o]()[n](r)}function nv_enableNavi(t,e,s){if(!t.circular&&!t.infinite){var i="removeClass"==e||"addClass"==e?e:!1,o=cf_c("disabled",s);if(t.auto.button&&i&&t.auto.button[i](o),t.prev.button){var n=i||0==e?"addClass":"removeClass";t.prev.button[n](o)}if(t.next.button){var n=i||e==t.items.visible?"addClass":"removeClass";t.next.button[n](o)}}}function go_getObject(t,e){return is_function(e)?e=e.call(t):is_undefined(e)&&(e={}),e}function go_getItemsObject(t,e){return e=go_getObject(t,e),is_number(e)?e={visible:e}:"variable"==e?e={visible:e,width:e,height:e}:is_object(e)||(e={}),e}function go_getScrollObject(t,e){return e=go_getObject(t,e),is_number(e)?e=50>=e?{items:e}:{duration:e}:is_string(e)?e={easing:e}:is_object(e)||(e={}),e}function go_getNaviObject(t,e){if(e=go_getObject(t,e),is_string(e)){var s=cf_getKeyCode(e);e=-1==s?$(e):s}return e}function go_getAutoObject(t,e){return e=go_getNaviObject(t,e),is_jquery(e)?e={button:e}:is_boolean(e)?e={play:e}:is_number(e)&&(e={timeoutDuration:e}),e.progress&&(is_string(e.progress)||is_jquery(e.progress))&&(e.progress={bar:e.progress}),e}function go_complementAutoObject(t,e){return is_function(e.button)&&(e.button=e.button.call(t)),is_string(e.button)&&(e.button=$(e.button)),is_boolean(e.play)||(e.play=!0),is_number(e.delay)||(e.delay=0),is_undefined(e.pauseOnEvent)&&(e.pauseOnEvent=!0),is_boolean(e.pauseOnResize)||(e.pauseOnResize=!0),is_number(e.timeoutDuration)||(e.timeoutDuration=10>e.duration?2500:5*e.duration),e.progress&&(is_function(e.progress.bar)&&(e.progress.bar=e.progress.bar.call(t)),is_string(e.progress.bar)&&(e.progress.bar=$(e.progress.bar)),e.progress.bar?(is_function(e.progress.updater)||(e.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(e.progress.interval)||(e.progress.interval=50)):e.progress=!1),e}function go_getPrevNextObject(t,e){return e=go_getNaviObject(t,e),is_jquery(e)?e={button:e}:is_number(e)&&(e={key:e}),e}function go_complementPrevNextObject(t,e){return is_function(e.button)&&(e.button=e.button.call(t)),is_string(e.button)&&(e.button=$(e.button)),is_string(e.key)&&(e.key=cf_getKeyCode(e.key)),e}function go_getPaginationObject(t,e){return e=go_getNaviObject(t,e),is_jquery(e)?e={container:e}:is_boolean(e)&&(e={keys:e}),e}function go_complementPaginationObject(t,e){return is_function(e.container)&&(e.container=e.container.call(t)),is_string(e.container)&&(e.container=$(e.container)),is_number(e.items)||(e.items=!1),is_boolean(e.keys)||(e.keys=!1),is_function(e.anchorBuilder)||is_false(e.anchorBuilder)||(e.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(e.deviation)||(e.deviation=0),e}function go_getSwipeObject(t,e){return is_function(e)&&(e=e.call(t)),is_undefined(e)&&(e={onTouch:!1}),is_true(e)?e={onTouch:e}:is_number(e)&&(e={items:e}),e}function go_complementSwipeObject(t,e){return is_boolean(e.onTouch)||(e.onTouch=!0),is_boolean(e.onMouse)||(e.onMouse=!1),is_object(e.options)||(e.options={}),is_boolean(e.options.triggerOnTouchEnd)||(e.options.triggerOnTouchEnd=!1),e}function go_getMousewheelObject(t,e){return is_function(e)&&(e=e.call(t)),is_true(e)?e={}:is_number(e)?e={items:e}:is_undefined(e)&&(e=!1),e}function go_complementMousewheelObject(t,e){return e}function gn_getItemIndex(t,e,s,i,o){if(is_string(t)&&(t=$(t,o)),is_object(t)&&(t=$(t,o)),is_jquery(t)?(t=o.children().index(t),is_boolean(s)||(s=!1)):is_boolean(s)||(s=!0),is_number(t)||(t=0),is_number(e)||(e=0),s&&(t+=i.first),t+=e,i.total>0){for(;t>=i.total;)t-=i.total;for(;0>t;)t+=i.total}return t}function gn_getVisibleItemsPrev(t,e,s){for(var i=0,o=0,n=s;n>=0;n--){var r=t.eq(n);if(i+=r.is(":visible")?r[e.d.outerWidth](!0):0,i>e.maxDimension)return o;0==n&&(n=t.length),o++}}function gn_getVisibleItemsPrevFilter(t,e,s){return gn_getItemsPrevFilter(t,e.items.filter,e.items.visibleConf.org,s)}function gn_getScrollItemsPrevFilter(t,e,s,i){return gn_getItemsPrevFilter(t,e.items.filter,i,s)}function gn_getItemsPrevFilter(t,e,s,i){for(var o=0,n=0,r=i,c=t.length;r>=0;r--){if(n++,n==c)return n;var a=t.eq(r);if(a.is(e)&&(o++,o==s))return n;0==r&&(r=c)}}function gn_getVisibleOrg(t,e){return e.items.visibleConf.org||t.children().slice(0,e.items.visible).filter(e.items.filter).length}function gn_getVisibleItemsNext(t,e,s){for(var i=0,o=0,n=s,r=t.length-1;r>=n;n++){var c=t.eq(n);if(i+=c.is(":visible")?c[e.d.outerWidth](!0):0,i>e.maxDimension)return o;if(o++,o==r+1)return o;n==r&&(n=-1)}}function gn_getVisibleItemsNextTestCircular(t,e,s,i){var o=gn_getVisibleItemsNext(t,e,s);return e.circular||s+o>i&&(o=i-s),o}function gn_getVisibleItemsNextFilter(t,e,s){return gn_getItemsNextFilter(t,e.items.filter,e.items.visibleConf.org,s,e.circular)}function gn_getScrollItemsNextFilter(t,e,s,i){return gn_getItemsNextFilter(t,e.items.filter,i+1,s,e.circular)-1}function gn_getItemsNextFilter(t,e,s,i){for(var o=0,n=0,r=i,c=t.length-1;c>=r;r++){if(n++,n>=c)return n;var a=t.eq(r);if(a.is(e)&&(o++,o==s))return n;r==c&&(r=-1)}}function gi_getCurrentItems(t,e){return t.slice(0,e.items.visible)}function gi_getOldItemsPrev(t,e,s){return t.slice(s,e.items.visibleConf.old+s)}function gi_getNewItemsPrev(t,e){return t.slice(0,e.items.visible)}function gi_getOldItemsNext(t,e){return t.slice(0,e.items.visibleConf.old)}function gi_getNewItemsNext(t,e,s){return t.slice(s,e.items.visible+s)}function sz_storeMargin(t,e,s){e.usePadding&&(is_string(s)||(s="_cfs_origCssMargin"),t.each(function(){var t=$(this),i=parseInt(t.css(e.d.marginRight),10);is_number(i)||(i=0),t.data(s,i)}))}function sz_resetMargin(t,e,s){if(e.usePadding){var i=is_boolean(s)?s:!1;is_number(s)||(s=0),sz_storeMargin(t,e,"_cfs_tempCssMargin"),t.each(function(){var t=$(this);t.css(e.d.marginRight,i?t.data("_cfs_tempCssMargin"):s+t.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(t){t.each(function(){var t=$(this);t.data("_cfs_origCss",t.attr("style")||"")})}function sz_restoreOrigCss(t){t.each(function(){var t=$(this);t.attr("style",t.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(t,e){var s=(t.items.visible,t.items[t.d.width]),i=t[t.d.height],o=is_percentage(i);e.each(function(){var e=$(this),n=s-ms_getPaddingBorderMargin(e,t,"Width");e[t.d.width](n),o&&e[t.d.height](ms_getPercentage(n,i))})}function sz_setSizes(t,e){var s=t.parent(),i=t.children(),o=gi_getCurrentItems(i,e),n=cf_mapWrapperSizes(ms_getSizes(o,e,!0),e,!1);if(s.css(n),e.usePadding){var r=e.padding,c=r[e.d[1]];e.align&&0>c&&(c=0);var a=o.last();a.css(e.d.marginRight,a.data("_cfs_origCssMargin")+c),t.css(e.d.top,r[e.d[0]]),t.css(e.d.left,r[e.d[3]])}return t.css(e.d.width,n[e.d.width]+2*ms_getTotalSize(i,e,"width")),t.css(e.d.height,ms_getLargestSize(i,e,"height")),n}function ms_getSizes(t,e,s){return[ms_getTotalSize(t,e,"width",s),ms_getLargestSize(t,e,"height",s)]}function ms_getLargestSize(t,e,s,i){return is_boolean(i)||(i=!1),is_number(e[e.d[s]])&&i?e[e.d[s]]:is_number(e.items[e.d[s]])?e.items[e.d[s]]:(s=s.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(t,e,s))}function ms_getTrueLargestSize(t,e,s){for(var i=0,o=0,n=t.length;n>o;o++){var r=t.eq(o),c=r.is(":visible")?r[e.d[s]](!0):0;c>i&&(i=c)}return i}function ms_getTotalSize(t,e,s,i){if(is_boolean(i)||(i=!1),is_number(e[e.d[s]])&&i)return e[e.d[s]];if(is_number(e.items[e.d[s]]))return e.items[e.d[s]]*t.length;for(var o=s.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",n=0,r=0,c=t.length;c>r;r++){var a=t.eq(r);n+=a.is(":visible")?a[e.d[o]](!0):0}return n}function ms_getParentSize(t,e,s){var i=t.is(":visible");i&&t.hide();var o=t.parent()[e.d[s]]();return i&&t.show(),o}function ms_getMaxDimension(t,e){return is_number(t[t.d.width])?t[t.d.width]:e}function ms_hasVariableSizes(t,e,s){for(var i=!1,o=!1,n=0,r=t.length;r>n;n++){var c=t.eq(n),a=c.is(":visible")?c[e.d[s]](!0):0;i===!1?i=a:i!=a&&(o=!0),0==i&&(o=!0)}return o}function ms_getPaddingBorderMargin(t,e,s){return t[e.d["outer"+s]](!0)-t[e.d[s.toLowerCase()]]()}function ms_getPercentage(t,e){if(is_percentage(e)){if(e=parseInt(e.slice(0,-1),10),!is_number(e))return t;t*=e/100}return t}function cf_e(t,e,s,i,o){return is_boolean(s)||(s=!0),is_boolean(i)||(i=!0),is_boolean(o)||(o=!1),s&&(t=e.events.prefix+t),i&&(t=t+"."+e.events.namespace),i&&o&&(t+=e.serialNumber),t}function cf_c(t,e){return is_string(e.classnames[t])?e.classnames[t]:t}function cf_mapWrapperSizes(t,e,s){is_boolean(s)||(s=!0);var i=e.usePadding&&s?e.padding:[0,0,0,0],o={};return o[e.d.width]=t[0]+i[1]+i[3],o[e.d.height]=t[1]+i[0]+i[2],o}function cf_sortParams(t,e){for(var s=[],i=0,o=t.length;o>i;i++)for(var n=0,r=e.length;r>n;n++)if(e[n].indexOf(typeof t[i])>-1&&is_undefined(s[n])){s[n]=t[i];break}return s}function cf_getPadding(t){if(is_undefined(t))return[0,0,0,0];if(is_number(t))return[t,t,t,t];if(is_string(t)&&(t=t.split("px").join("").split("em").join("").split(" ")),!is_array(t))return[0,0,0,0];for(var e=0;4>e;e++)t[e]=parseInt(t[e],10);switch(t.length){case 0:return[0,0,0,0];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];default:return[t[0],t[1],t[2],t[3]]}}function cf_getAlignPadding(t,e){var s=is_number(e[e.d.width])?Math.ceil(e[e.d.width]-ms_getTotalSize(t,e,"width")):0;switch(e.align){case"left":return[0,s];case"right":return[s,0];case"center":default:return[Math.ceil(s/2),Math.floor(s/2)]}}function cf_getDimensions(t){for(var e=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],s=e[0].length,i="right"==t.direction||"left"==t.direction?0:1,o={},n=0;s>n;n++)o[e[0][n]]=e[i][n];return o}function cf_getAdjust(t,e,s,i){var o=t;if(is_function(s))o=s.call(i,o);else if(is_string(s)){var n=s.split("+"),r=s.split("-");if(r.length>n.length)var c=!0,a=r[0],f=r[1];else var c=!1,a=n[0],f=n[1];switch(a){case"even":o=1==t%2?t-1:t;break;case"odd":o=0==t%2?t-1:t;break;default:o=t}f=parseInt(f,10),is_number(f)&&(c&&(f=-f),o+=f)}return(!is_number(o)||1>o)&&(o=1),o}function cf_getItemsAdjust(t,e,s,i){return cf_getItemAdjustMinMax(cf_getAdjust(t,e,s,i),e.items.visibleConf)}function cf_getItemAdjustMinMax(t,e){return is_number(e.min)&&e.min>t&&(t=e.min),is_number(e.max)&&t>e.max&&(t=e.max),1>t&&(t=1),t}function cf_getSynchArr(t){is_array(t)||(t=[[t]]),is_array(t[0])||(t=[t]);for(var e=0,s=t.length;s>e;e++)is_string(t[e][0])&&(t[e][0]=$(t[e][0])),is_boolean(t[e][1])||(t[e][1]=!0),is_boolean(t[e][2])||(t[e][2]=!0),is_number(t[e][3])||(t[e][3]=0);return t}function cf_getKeyCode(t){return"right"==t?39:"left"==t?37:"up"==t?38:"down"==t?40:-1}function cf_setCookie(t,e,s){if(t){var i=e.triggerHandler(cf_e("currentPosition",s));$.fn.carouFredSel.cookie.set(t,i)}}function cf_getCookie(t){var e=$.fn.carouFredSel.cookie.get(t);return""==e?0:e}function in_mapCss(t,e){for(var s={},i=0,o=e.length;o>i;i++)s[e[i]]=t.css(e[i]);return s}function in_complementItems(t,e,s,i){return is_object(t.visibleConf)||(t.visibleConf={}),is_object(t.sizesConf)||(t.sizesConf={}),0==t.start&&is_number(i)&&(t.start=i),is_object(t.visible)?(t.visibleConf.min=t.visible.min,t.visibleConf.max=t.visible.max,t.visible=!1):is_string(t.visible)?("variable"==t.visible?t.visibleConf.variable=!0:t.visibleConf.adjust=t.visible,t.visible=!1):is_function(t.visible)&&(t.visibleConf.adjust=t.visible,t.visible=!1),is_string(t.filter)||(t.filter=s.filter(":hidden").length>0?":visible":"*"),t[e.d.width]||(e.responsive?(debug(!0,"Set a "+e.d.width+" for the items!"),t[e.d.width]=ms_getTrueLargestSize(s,e,"outerWidth")):t[e.d.width]=ms_hasVariableSizes(s,e,"outerWidth")?"variable":s[e.d.outerWidth](!0)),t[e.d.height]||(t[e.d.height]=ms_hasVariableSizes(s,e,"outerHeight")?"variable":s[e.d.outerHeight](!0)),t.sizesConf.width=t.width,t.sizesConf.height=t.height,t}function in_complementVisibleItems(t,e){return"variable"==t.items[t.d.width]&&(t.items.visibleConf.variable=!0),t.items.visibleConf.variable||(is_number(t[t.d.width])?t.items.visible=Math.floor(t[t.d.width]/t.items[t.d.width]):(t.items.visible=Math.floor(e/t.items[t.d.width]),t[t.d.width]=t.items.visible*t.items[t.d.width],t.items.visibleConf.adjust||(t.align=!1)),("Infinity"==t.items.visible||1>t.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),t.items.visibleConf.variable=!0)),t}function in_complementPrimarySize(t,e,s){return"auto"==t&&(t=ms_getTrueLargestSize(s,e,"outerWidth")),t}function in_complementSecondarySize(t,e,s){return"auto"==t&&(t=ms_getTrueLargestSize(s,e,"outerHeight")),t||(t=e.items[e.d.height]),t}function in_getAlignPadding(t,e){var s=cf_getAlignPadding(gi_getCurrentItems(e,t),t);return t.padding[t.d[1]]=s[1],t.padding[t.d[3]]=s[0],t}function in_getResponsiveValues(t,e){var s=cf_getItemAdjustMinMax(Math.ceil(t[t.d.width]/t.items[t.d.width]),t.items.visibleConf);s>e.length&&(s=e.length);var i=Math.floor(t[t.d.width]/s);return t.items.visible=s,t.items[t.d.width]=i,t[t.d.width]=s*i,t}function bt_pauseOnHoverConfig(t){if(is_string(t))var e=t.indexOf("immediate")>-1?!0:!1,s=t.indexOf("resume")>-1?!0:!1;else var e=s=!1;return[e,s]}function bt_mousesheelNumber(t){return is_number(t)?t:null}function is_null(t){return null===t}function is_undefined(t){return is_null(t)||void 0===t||""===t||"undefined"===t}function is_array(t){return t instanceof Array}function is_jquery(t){return t instanceof jQuery}function is_object(t){return(t instanceof Object||"object"==typeof t)&&!is_null(t)&&!is_jquery(t)&&!is_array(t)&&!is_function(t)}function is_number(t){return(t instanceof Number||"number"==typeof t)&&!isNaN(t)}function is_string(t){return(t instanceof String||"string"==typeof t)&&!is_undefined(t)&&!is_true(t)&&!is_false(t)}function is_function(t){return t instanceof Function||"function"==typeof t}function is_boolean(t){return t instanceof Boolean||"boolean"==typeof t||is_true(t)||is_false(t)}function is_true(t){return t===!0||"true"===t}function is_false(t){return t===!1||"false"===t}function is_percentage(t){return is_string(t)&&"%"==t.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(t,e){debug(!0,t+" is DEPRECATED, support for it will be removed. Use "+e+" instead.")}function debug(t,e){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(t)){var s=" ("+t.selector+")";t=t.debug}else var s="";if(!t)return!1;e=is_string(e)?"carouFredSel"+s+": "+e:["carouFredSel"+s+":",e],window.console.log(e)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(t,e,s){t=go_getObject($tt0,t),t.items=go_getItemsObject($tt0,t.items),t.scroll=go_getScrollObject($tt0,t.scroll),t.auto=go_getAutoObject($tt0,t.auto),t.prev=go_getPrevNextObject($tt0,t.prev),t.next=go_getPrevNextObject($tt0,t.next),t.pagination=go_getPaginationObject($tt0,t.pagination),t.swipe=go_getSwipeObject($tt0,t.swipe),t.mousewheel=go_getMousewheelObject($tt0,t.mousewheel),e&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,t)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,t),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var i=$cfs.children(),o=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,o),opts.items=in_complementItems(opts.items,opts,i,s),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,i),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,i),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(o,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,o)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(i,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(i,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,i,o);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,i),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var t=$cfs.children(),e=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),s="relative";switch(e.position){case"absolute":case"fixed":s=e.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(e),$wrp.css({overflow:"hidden",position:s}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",e.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(t,opts),sz_storeOrigCss(t),opts.responsive&&sz_setResponsiveSizes(opts,t)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(t,e){return t.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),e)),!0}),$cfs.bind(cf_e("finish",conf),function(t){return t.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(t,e,s){if(t.stopPropagation(),tmrs=sc_clearTimers(tmrs),e&&crsl.isScrolling){scrl.isStopped=!0;var i=getTime()-scrl.startTime;scrl.duration-=i,scrl.pre&&(scrl.pre.duration-=i),scrl.post&&(scrl.post.duration-=i),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||s&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var o=opts.auto.timeoutDuration-tmrs.timePassed,n=100-Math.ceil(100*o/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,n,o)}return!0}),$cfs.bind(cf_e("play",conf),function(t,e,s,i){t.stopPropagation(),tmrs=sc_clearTimers(tmrs);var o=[e,s,i],n=["string","number","boolean"],r=cf_sortParams(o,n);if(e=r[0],s=r[1],i=r[2],"prev"!=e&&"next"!=e&&(e=crsl.direction),is_number(s)||(s=0),is_boolean(i)||(i=!1),i&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return t.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var c=opts.auto.timeoutDuration+s;return dur2=c-tmrs.timePassed,perc=100-Math.ceil(100*dur2/c),opts.auto.progress&&(tmrs.progress=setInterval(function(){var t=getTime()-tmrs.startTime+tmrs.timePassed,e=Math.ceil(100*t/c);opts.auto.progress.updater.call(opts.auto.progress.bar[0],e)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),e):$cfs.trigger(cf_e(e,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(t){return t.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(t,e,s,i,o){if(t.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return t.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var n=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(n>itms.total)return t.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+n+" needed): Not scrolling.");var r=[e,s,i,o],c=["object","number/string","function","boolean"],a=cf_sortParams(r,c);e=a[0],s=a[1],i=a[2],o=a[3];var f=t.type.slice(conf.events.prefix.length);if(is_object(e)||(e={}),is_function(i)&&(e.onAfter=i),is_boolean(o)&&(e.queue=o),e=$.extend(!0,{},opts[f],e),e.conditions&&!e.conditions.call($tt0,f))return t.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(s)){if("*"!=opts.items.filter)s="visible";else for(var l=[s,e.items,opts[f].items],a=0,u=l.length;u>a;a++)if(is_number(l[a])||"page"==l[a]||"visible"==l[a]){s=l[a];break}switch(s){case"page":return t.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(f+"Page",conf),[e,i]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(s=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[f,[e,s,i]]),t.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(e.duration>0&&crsl.isScrolling)return e.queue&&("last"==e.queue&&(queu=[]),("first"!=e.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[f,[e,s,i]])),t.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+f,conf),[e,s]),opts.synchronise)for(var p=opts.synchronise,d=[e,s],g=0,u=p.length;u>g;g++){var m=f;p[g][2]||(m="prev"==m?"next":"prev"),p[g][1]||(d[0]=p[g][0].triggerHandler("_cfs_triggerEvent",["configuration",m])),d[1]=s+p[g][3],p[g][0].trigger("_cfs_triggerEvent",["slide_"+m,d])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(t,e,s){t.stopPropagation();var i=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),t.stopImmediatePropagation();if(sz_resetMargin(i,opts),!is_number(s)){if(opts.items.visibleConf.variable)s=gn_getVisibleItemsPrev(i,opts,itms.total-1);else if("*"!=opts.items.filter){var o=is_number(e.items)?e.items:gn_getVisibleOrg($cfs,opts);s=gn_getScrollItemsPrevFilter(i,opts,itms.total-1,o)}else s=opts.items.visible;s=cf_getAdjust(s,opts,e.items,$tt0)}if(opts.circular||itms.total-s<itms.first&&(s=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var n=cf_getItemsAdjust(gn_getVisibleItemsNext(i,opts,itms.total-s),opts,opts.items.visibleConf.adjust,$tt0);n>=opts.items.visible+s&&itms.total>s&&(s++,n=cf_getItemsAdjust(gn_getVisibleItemsNext(i,opts,itms.total-s),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=n}else if("*"!=opts.items.filter){var n=gn_getVisibleItemsNextFilter(i,opts,itms.total-s);opts.items.visible=cf_getItemsAdjust(n,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(i,opts,!0),0==s)return t.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+s+" items backward."),itms.first+=s;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&e.onEnd&&e.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-s,itms.total).prependTo($cfs),itms.total<opts.items.visible+s&&$cfs.children().slice(0,opts.items.visible+s-itms.total).clone(!0).appendTo($cfs);var i=$cfs.children(),r=gi_getOldItemsPrev(i,opts,s),c=gi_getNewItemsPrev(i,opts),a=i.eq(s-1),f=r.last(),l=c.last();sz_resetMargin(i,opts);var u=0,p=0;if(opts.align){var d=cf_getAlignPadding(c,opts);u=d[0],p=d[1]}var g=0>u?opts.padding[opts.d[3]]:0,m=!1,_=$();if(s>opts.items.visible&&(_=i.slice(opts.items.visibleConf.old,s),"directscroll"==e.fx)){var b=opts.items[opts.d.width];m=_,a=l,sc_hideHiddenItems(m),opts.items[opts.d.width]="variable"}var v=!1,h=ms_getTotalSize(i.slice(0,s),opts,"width"),w=cf_mapWrapperSizes(ms_getSizes(c,opts,!0),opts,!opts.usePadding),P=0,C={},x={},S={},y={},I={},z={},j={},N=sc_getDuration(e,opts,s,h);switch(e.fx){case"cover":case"cover-fade":P=ms_getTotalSize(i.slice(0,opts.items.visible),opts,"width")}m&&(opts.items[opts.d.width]=b),sz_resetMargin(i,opts,!0),p>=0&&sz_resetMargin(f,opts,opts.padding[opts.d[1]]),u>=0&&sz_resetMargin(a,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=p,opts.padding[opts.d[3]]=u),z[opts.d.left]=-(h-g),j[opts.d.left]=-(P-g),x[opts.d.left]=w[opts.d.width];var k=function(){},O=function(){},T=function(){},M=function(){},F=function(){},A=function(){},H=function(){},q=function(){},D=function(){},V=function(){},R=function(){};switch(e.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":v=$cfs.clone(!0).appendTo($wrp)}switch(e.fx){case"crossfade":case"uncover":case"uncover-fade":v.children().slice(0,s).remove(),v.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":v.children().slice(opts.items.visible).remove(),v.css(j)}if($cfs.css(z),scrl=sc_setScroll(N,e.easing,conf),C[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(k=function(){$wrp.css(w)},O=function(){scrl.anims.push([$wrp,w])}),opts.usePadding){switch(l.not(a).length&&(S[opts.d.marginRight]=a.data("_cfs_origCssMargin"),0>u?a.css(S):(H=function(){a.css(S)},q=function(){scrl.anims.push([a,S])})),e.fx){case"cover":case"cover-fade":v.children().eq(s-1).css(S)}l.not(f).length&&(y[opts.d.marginRight]=f.data("_cfs_origCssMargin"),T=function(){f.css(y)},M=function(){scrl.anims.push([f,y])}),p>=0&&(I[opts.d.marginRight]=l.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],F=function(){l.css(I)},A=function(){scrl.anims.push([l,I])})}R=function(){$cfs.css(C)};var E=opts.items.visible+s-itms.total;V=function(){if(E>0&&($cfs.children().slice(itms.total).remove(),r=$($cfs.children().slice(itms.total-(opts.items.visible-E)).get().concat($cfs.children().slice(0,E).get()))),sc_showHiddenItems(m),opts.usePadding){var t=$cfs.children().eq(opts.items.visible+s-1);t.css(opts.d.marginRight,t.data("_cfs_origCssMargin"))}};var W=sc_mapCallbackArguments(r,_,c,s,"prev",N,w);switch(D=function(){sc_afterScroll($cfs,v,e),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,e,"onAfter",W,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,e,"onBefore",W,clbk),e.fx){case"none":$cfs.css(C),k(),T(),F(),H(),R(),V(),D();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){k(),T(),F(),H(),R(),V(),scrl=sc_setScroll(N,e.easing,conf),scrl.anims.push([$cfs,{opacity:1},D]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},D]),O(),T(),F(),H(),R(),V();break;case"cover":scrl.anims.push([v,C,function(){T(),F(),H(),R(),V(),D()}]),O();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([v,C,function(){T(),F(),H(),R(),V(),D()}]),O();break;case"uncover":scrl.anims.push([v,x,D]),O(),T(),F(),H(),R(),V();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([v,x,D]),O(),T(),F(),H(),R(),V();break;default:scrl.anims.push([$cfs,C,function(){V(),D()}]),O(),M(),A(),q()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,w]),
!0}),$cfs.bind(cf_e("slide_next",conf),function(t,e,s){t.stopPropagation();var i=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),t.stopImmediatePropagation();if(sz_resetMargin(i,opts),!is_number(s)){if("*"!=opts.items.filter){var o=is_number(e.items)?e.items:gn_getVisibleOrg($cfs,opts);s=gn_getScrollItemsNextFilter(i,opts,0,o)}else s=opts.items.visible;s=cf_getAdjust(s,opts,e.items,$tt0)}var n=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var r=gn_getVisibleItemsNext(i,opts,s),o=gn_getVisibleItemsPrev(i,opts,n-1);else var r=opts.items.visible,o=opts.items.visible;s+r>n&&(s=n-o)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var r=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i,opts,s,n),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-s>=r&&itms.total>s;)s++,r=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i,opts,s,n),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=r}else if("*"!=opts.items.filter){var r=gn_getVisibleItemsNextFilter(i,opts,s);opts.items.visible=cf_getItemsAdjust(r,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(i,opts,!0),0==s)return t.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+s+" items forward."),itms.first-=s;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&e.onEnd&&e.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+s&&$cfs.children().slice(0,opts.items.visible+s-itms.total).clone(!0).appendTo($cfs);var i=$cfs.children(),c=gi_getOldItemsNext(i,opts),a=gi_getNewItemsNext(i,opts,s),f=i.eq(s-1),l=c.last(),u=a.last();sz_resetMargin(i,opts);var p=0,d=0;if(opts.align){var g=cf_getAlignPadding(a,opts);p=g[0],d=g[1]}var m=!1,_=$();if(s>opts.items.visibleConf.old&&(_=i.slice(opts.items.visibleConf.old,s),"directscroll"==e.fx)){var b=opts.items[opts.d.width];m=_,f=l,sc_hideHiddenItems(m),opts.items[opts.d.width]="variable"}var v=!1,h=ms_getTotalSize(i.slice(0,s),opts,"width"),w=cf_mapWrapperSizes(ms_getSizes(a,opts,!0),opts,!opts.usePadding),P=0,C={},x={},S={},y={},I={},z=sc_getDuration(e,opts,s,h);switch(e.fx){case"uncover":case"uncover-fade":P=ms_getTotalSize(i.slice(0,opts.items.visibleConf.old),opts,"width")}m&&(opts.items[opts.d.width]=b),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(i,opts,!0),sz_resetMargin(l,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=d,opts.padding[opts.d[3]]=p),I[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var j=function(){},N=function(){},k=function(){},O=function(){},T=function(){},M=function(){},F=function(){},A=function(){},H=function(){};switch(e.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":v=$cfs.clone(!0).appendTo($wrp),v.children().slice(opts.items.visibleConf.old).remove()}switch(e.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),v.css("zIndex",0)}if(scrl=sc_setScroll(z,e.easing,conf),C[opts.d.left]=-h,x[opts.d.left]=-P,0>p&&(C[opts.d.left]+=p),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(j=function(){$wrp.css(w)},N=function(){scrl.anims.push([$wrp,w])}),opts.usePadding){var q=u.data("_cfs_origCssMargin");d>=0&&(q+=opts.padding[opts.d[1]]),u.css(opts.d.marginRight,q),f.not(l).length&&(y[opts.d.marginRight]=l.data("_cfs_origCssMargin")),k=function(){l.css(y)},O=function(){scrl.anims.push([l,y])};var D=f.data("_cfs_origCssMargin");p>0&&(D+=opts.padding[opts.d[3]]),S[opts.d.marginRight]=D,T=function(){f.css(S)},M=function(){scrl.anims.push([f,S])}}H=function(){$cfs.css(I)};var V=opts.items.visible+s-itms.total;A=function(){V>0&&$cfs.children().slice(itms.total).remove();var t=$cfs.children().slice(0,s).appendTo($cfs).last();if(V>0&&(a=gi_getCurrentItems(i,opts)),sc_showHiddenItems(m),opts.usePadding){if(itms.total<opts.items.visible+s){var e=$cfs.children().eq(opts.items.visible-1);e.css(opts.d.marginRight,e.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}t.css(opts.d.marginRight,t.data("_cfs_origCssMargin"))}};var R=sc_mapCallbackArguments(c,_,a,s,"next",z,w);switch(F=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,v,e),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,e,"onAfter",R,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,e,"onBefore",R,clbk),e.fx){case"none":$cfs.css(C),j(),k(),T(),H(),A(),F();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){j(),k(),T(),H(),A(),scrl=sc_setScroll(z,e.easing,conf),scrl.anims.push([$cfs,{opacity:1},F]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},F]),N(),k(),T(),H(),A();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,I,F]),N(),k(),T(),A();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,I,F]),N(),k(),T(),A();break;case"uncover":scrl.anims.push([v,x,F]),N(),k(),T(),H(),A();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([v,x,F]),N(),k(),T(),H(),A();break;default:scrl.anims.push([$cfs,C,function(){H(),A(),F()}]),N(),O(),M()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,w]),!0}),$cfs.bind(cf_e("slideTo",conf),function(t,e,s,i,o,n,r){t.stopPropagation();var c=[e,s,i,o,n,r],a=["string/number/object","number","boolean","object","string","function"],f=cf_sortParams(c,a);return o=f[3],n=f[4],r=f[5],e=gn_getItemIndex(f[0],f[1],f[2],itms,$cfs),0==e?!1:(is_object(o)||(o=!1),"prev"!=n&&"next"!=n&&(n=opts.circular?itms.total/2>=e?"next":"prev":0==itms.first||itms.first>e?"next":"prev"),"prev"==n&&(e=itms.total-e),$cfs.trigger(cf_e(n,conf),[o,e,r]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(t,e,s){t.stopPropagation();var i=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[i-1,e,"prev",s])}),$cfs.bind(cf_e("nextPage",conf),function(t,e,s){t.stopPropagation();var i=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[i+1,e,"next",s])}),$cfs.bind(cf_e("slideToPage",conf),function(t,e,s,i,o){t.stopPropagation(),is_number(e)||(e=$cfs.triggerHandler(cf_e("currentPage",conf)));var n=opts.pagination.items||opts.items.visible,r=Math.ceil(itms.total/n)-1;return 0>e&&(e=r),e>r&&(e=0),$cfs.triggerHandler(cf_e("slideTo",conf),[e*n,0,!0,s,i,o])}),$cfs.bind(cf_e("jumpToStart",conf),function(t,e){if(t.stopPropagation(),e=e?gn_getItemIndex(e,0,!0,itms,$cfs):0,e+=itms.first,0!=e){if(itms.total>0)for(;e>itms.total;)e-=itms.total;$cfs.prepend($cfs.children().slice(e,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(t,e){if(t.stopPropagation(),e)e=cf_getSynchArr(e);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");e=opts.synchronise}for(var s=$cfs.triggerHandler(cf_e("currentPosition",conf)),i=!0,o=0,n=e.length;n>o;o++)e[o][0].triggerHandler(cf_e("slideTo",conf),[s,e[o][3],!0])||(i=!1);return i}),$cfs.bind(cf_e("queue",conf),function(t,e,s){return t.stopPropagation(),is_function(e)?e.call($tt0,queu):is_array(e)?queu=e:is_undefined(e)||queu.push([e,s]),queu}),$cfs.bind(cf_e("insertItem",conf),function(t,e,s,i,o){t.stopPropagation();var n=[e,s,i,o],r=["string/object","string/number/object","boolean","number"],c=cf_sortParams(n,r);if(e=c[0],s=c[1],i=c[2],o=c[3],is_object(e)&&!is_jquery(e)?e=$(e):is_string(e)&&(e=$(e)),!is_jquery(e)||0==e.length)return debug(conf,"Not a valid object.");is_undefined(s)&&(s="end"),sz_storeMargin(e,opts),sz_storeOrigCss(e);var a=s,f="before";"end"==s?i?(0==itms.first?(s=itms.total-1,f="after"):(s=itms.first,itms.first+=e.length),0>s&&(s=0)):(s=itms.total-1,f="after"):s=gn_getItemIndex(s,o,i,itms,$cfs);var l=$cfs.children().eq(s);return l.length?l[f](e):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(e)),"end"==a||i||itms.first>s&&(itms.first+=e.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(t,e,s,i){t.stopPropagation();var o=[e,s,i],n=["string/number/object","boolean","number"],r=cf_sortParams(o,n);if(e=r[0],s=r[1],i=r[2],e instanceof $&&e.length>1)return c=$(),e.each(function(){var t=$cfs.trigger(cf_e("removeItem",conf),[$(this),s,i]);t&&(c=c.add(t))}),c;if(is_undefined(e)||"end"==e)c=$cfs.children().last();else{e=gn_getItemIndex(e,i,s,itms,$cfs);var c=$cfs.children().eq(e);c.length&&itms.first>e&&(itms.first-=c.length)}return c&&c.length&&(c.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),c}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(t,e){t.stopPropagation();var s=t.type.slice(conf.events.prefix.length);return is_array(e)&&(clbk[s]=e),is_function(e)&&clbk[s].push(e),clbk[s]}),$cfs.bind(cf_e("currentPosition",conf),function(t,e){if(t.stopPropagation(),0==itms.first)var s=0;else var s=itms.total-itms.first;return is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("currentPage",conf),function(t,e){t.stopPropagation();var s,i=opts.pagination.items||opts.items.visible,o=Math.ceil(itms.total/i-1);return s=0==itms.first?0:itms.first<itms.total%i?0:itms.first!=i||opts.circular?Math.round((itms.total-itms.first)/i):o,0>s&&(s=0),s>o&&(s=o),is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("currentVisible",conf),function(t,e){t.stopPropagation();var s=gi_getCurrentItems($cfs.children(),opts);return is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("slice",conf),function(t,e,s,i){if(t.stopPropagation(),0==itms.total)return!1;var o=[e,s,i],n=["number","number","function"],r=cf_sortParams(o,n);if(e=is_number(r[0])?r[0]:0,s=is_number(r[1])?r[1]:itms.total,i=r[2],e+=itms.first,s+=itms.first,items.total>0){for(;e>itms.total;)e-=itms.total;for(;s>itms.total;)s-=itms.total;for(;0>e;)e+=itms.total;for(;0>s;)s+=itms.total}var c,a=$cfs.children();return c=s>e?a.slice(e,s):$(a.slice(e,itms.total).get().concat(a.slice(0,s).get())),is_function(i)&&i.call($tt0,c),c}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(t,e){t.stopPropagation();var s=t.type.slice(conf.events.prefix.length),i=crsl[s];return is_function(e)&&e.call($tt0,i),i}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(t,e,s){return t.stopPropagation(),is_undefined(e)?e=$("body"):is_string(e)&&(e=$(e)),is_jquery(e)&&0!=e.length?(is_string(s)||(s="a.caroufredsel"),e.find(s).each(function(){var t=this.hash||"";t.length>0&&-1!=$cfs.children().index($(t))&&$(this).unbind("click").click(function(e){e.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),t)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(t,e){if(t.stopPropagation(),opts.pagination.container){var s=opts.pagination.items||opts.items.visible,i=Math.ceil(itms.total/s);e&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var t=0;i>t;t++){var e=$cfs.children().eq(gn_getItemIndex(t*s,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(e[0],t+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(t){$(this).bind(opts.pagination.event,function(e){e.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[t*s,-opts.pagination.deviation,!0,opts.pagination])})})}));var o=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return o>=i&&(o=0),0>o&&(o=i-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(o).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var t=opts.items.visible,e=$cfs.children(),s=ms_getParentSize($wrp,opts,"width");if(itms.total=e.length,crsl.primarySizePercentage?(opts.maxDimension=s,opts[opts.d.width]=ms_getPercentage(s,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,s),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,e,s),t=opts.items.visible,sz_setResponsiveSizes(opts,e)):opts.items.visibleConf.variable?t=gn_getVisibleItemsNext(e,opts,0):"*"!=opts.items.filter&&(t=gn_getVisibleItemsNextFilter(e,opts,0)),!opts.circular&&0!=itms.first&&t>itms.first){if(opts.items.visibleConf.variable)var i=gn_getVisibleItemsPrev(e,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var i=gn_getVisibleItemsPrevFilter(e,opts,itms.first)-itms.first;else var i=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+i+" items backward."),$cfs.trigger(cf_e("prev",conf),i)}opts.items.visible=cf_getItemsAdjust(t,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,e);var o=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,o]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),o}),$cfs.bind(cf_e("destroy",conf),function(t,e){return t.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),e&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(t,e,s){return t.stopPropagation(),$cfs.triggerHandler(cf_e(e,conf),s)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var t=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(t){t.preventDefault();var e=!1,s=null;crsl.isPaused?e="play":opts.auto.pauseOnEvent&&(e="pause",s=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),e&&$cfs.trigger(cf_e(e,conf),s)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(t){t.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var t=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(t){t.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var t=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var t=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(t){var e=t.keyCode;e==opts.next.key&&(t.preventDefault(),$cfs.trigger(cf_e("next",conf))),e==opts.prev.key&&(t.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(t){var e=t.keyCode;e>=49&&58>e&&(e=(e-49)*opts.items.visible,itms.total>=e&&(t.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[e,0,!0,opts.pagination])))}),$.fn.swipe){var e="ontouchstart"in window;if(e&&opts.swipe.onTouch||!e&&opts.swipe.onMouse){var s=$.extend(!0,{},opts.prev,opts.swipe),i=$.extend(!0,{},opts.next,opts.swipe),o=function(){$cfs.trigger(cf_e("prev",conf),[s])},n=function(){$cfs.trigger(cf_e("next",conf),[i])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=n,opts.swipe.options.swipeDown=o;break;default:opts.swipe.options.swipeLeft=n,opts.swipe.options.swipeRight=o}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var r=$.extend(!0,{},opts.prev,opts.mousewheel),c=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(t,e){t.preventDefault(),e>0?$cfs.trigger(cf_e("prev",conf),[r]):$cfs.trigger(cf_e("next",conf),[c])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var a=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},f=$(window),l=null;if($.debounce&&"debounce"==conf.onWindowResize)l=$.debounce(200,a);else if($.throttle&&"throttle"==conf.onWindowResize)l=$.throttle(300,a);else{var u=0,p=0;l=function(){var t=f.width(),e=f.height();(t!=u||e!=p)&&(a(),u=t,p=e)}}f.bind(cf_e("resize",conf,!1,!0,!0),l)}},FN._unbind_buttons=function(){var t=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(t),opts.auto.button&&opts.auto.button.unbind(t),opts.prev.button&&opts.prev.button.unbind(t),opts.next.button&&opts.next.button.unbind(t),opts.pagination.container&&(opts.pagination.container.unbind(t),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(t){return'<button name="button"><span>'+t+"</span></button>"},$.fn.carouFredSel.progressbarUpdater=function(t){$(this).css("width",t+"%")},$.fn.carouFredSel.cookie={get:function(t){t+="=";for(var e=document.cookie.split(";"),s=0,i=e.length;i>s;s++){for(var o=e[s];" "==o.charAt(0);)o=o.slice(1);if(0==o.indexOf(t))return o.slice(t.length)}return 0},set:function(t,e,s){var i="";if(s){var o=new Date;o.setTime(o.getTime()+864e5*s),i="; expires="+o.toGMTString()}document.cookie=t+"="+e+i+"; path=/"},remove:function(t){$.fn.carouFredSel.cookie.set(t,"",-1)}},$.extend($.easing,{quadratic:function(t){var e=t*t;return t*(-e*t+4*e-6*t+4)},cubic:function(t){return t*(4*t*t-9*t+6)},elastic:function(t){var e=t*t;return t*(33*e*e-106*e*t+126*e-67*t+15)}}))}(jQuery);


/* plugins-dist/mae/javascript/jquery.placeholder.min.js */

;(function(f,h,$){var a='placeholder'in h.createElement('input'),d='placeholder'in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


/* plugins-dist/mae/javascript/breakpoints.js */

(function($){
var lastSize=0;
var interval=null;
$.fn.resetBreakpoints=function(){
$(window).unbind('resize');
if(interval){
clearInterval(interval);
}
lastSize=0;
};
$.fn.setBreakpoints=function(settings){
var options=jQuery.extend({
distinct:true,
breakpoints:new Array(320,480,768,1024)
},settings);
interval=setInterval(function(){
var w=$(window).width();
var done=false;
for(var bp in options.breakpoints.sort(function(a,b){return(b-a)})){
if(!done&&w>=options.breakpoints[bp]&&lastSize<options.breakpoints[bp]){
if(options.distinct){
for(var x in options.breakpoints.sort(function(a,b){return(b-a)})){
if($('body').hasClass('breakpoint-'+options.breakpoints[x])){
$('body').removeClass('breakpoint-'+options.breakpoints[x]);
$(window).trigger('exitBreakpoint'+options.breakpoints[x]);
}
}
done=true;
}
$('body').addClass('breakpoint-'+options.breakpoints[bp]);
$(window).trigger('enterBreakpoint'+options.breakpoints[bp]);
}
if(w<options.breakpoints[bp]&&lastSize>=options.breakpoints[bp]){
$('body').removeClass('breakpoint-'+options.breakpoints[bp]);
$(window).trigger('exitBreakpoint'+options.breakpoints[bp]);
}
if(
options.distinct&&
w>=options.breakpoints[bp]&&
w<options.breakpoints[bp-1]&&
lastSize>w&&
lastSize>0&&
!$('body').hasClass('breakpoint-'+options.breakpoints[bp])
){
$('body').addClass('breakpoint-'+options.breakpoints[bp]);
$(window).trigger('enterBreakpoint'+options.breakpoints[bp]);
}
}
if(lastSize!=w){
lastSize=w;
}
},250);
};
})(jQuery);


/* plugins-dist/mae/javascript/modernizr.custom.11889.js */

window.Modernizr=(function(window,document,undefined){
var version='2.6.2',
Modernizr={},
enableClasses=true,
docElement=document.documentElement,
mod='modernizr',
modElem=document.createElement(mod),
mStyle=modElem.style,
inputElem=document.createElement('input'),
smile=':)',
toString={}.toString,
prefixes=' -webkit- -moz- -o- -ms- '.split(' '),
omPrefixes='Webkit Moz O ms',
cssomPrefixes=omPrefixes.split(' '),
domPrefixes=omPrefixes.toLowerCase().split(' '),
ns={'svg':'http://www.w3.org/2000/svg'},
tests={},
inputs={},
attrs={},
classes=[],
slice=classes.slice,
featureName,
injectElementWithStyles=function(rule,callback,nodes,testnames){
var style,ret,node,docOverflow,
div=document.createElement('div'),
body=document.body,
fakeBody=body||document.createElement('body');
if(parseInt(nodes,10)){
while(nodes--){
node=document.createElement('div');
node.id=testnames?testnames[nodes]:mod+(nodes+1);
div.appendChild(node);
}
}
style=['&#173;','<style id="s',mod,'">',rule,'</style>'].join('');
div.id=mod;
(body?div:fakeBody).innerHTML+=style;
fakeBody.appendChild(div);
if(!body){
fakeBody.style.background='';
fakeBody.style.overflow='hidden';
docOverflow=docElement.style.overflow;
docElement.style.overflow='hidden';
docElement.appendChild(fakeBody);
}
ret=callback(div,rule);
if(!body){
fakeBody.parentNode.removeChild(fakeBody);
docElement.style.overflow=docOverflow;
}else{
div.parentNode.removeChild(div);
}
return!!ret;
},
testMediaQuery=function(mq){
var matchMedia=window.matchMedia||window.msMatchMedia;
if(matchMedia){
return matchMedia(mq).matches;
}
var bool;
injectElementWithStyles('@media '+mq+' { #'+mod+' { position: absolute; } }',function(node){
bool=(window.getComputedStyle?
getComputedStyle(node,null):
node.currentStyle)['position']=='absolute';
});
return bool;
},
isEventSupported=(function(){
var TAGNAMES={
'select':'input','change':'input',
'submit':'form','reset':'form',
'error':'img','load':'img','abort':'img'
};
function isEventSupported(eventName,element){
element=element||document.createElement(TAGNAMES[eventName]||'div');
eventName='on'+eventName;
var isSupported=eventName in element;
if(!isSupported){
if(!element.setAttribute){
element=document.createElement('div');
}
if(element.setAttribute&&element.removeAttribute){
element.setAttribute(eventName,'');
isSupported=is(element[eventName],'function');
if(!is(element[eventName],'undefined')){
element[eventName]=undefined;
}
element.removeAttribute(eventName);
}
}
element=null;
return isSupported;
}
return isEventSupported;
})(),
_hasOwnProperty=({}).hasOwnProperty,hasOwnProp;
if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){
hasOwnProp=function(object,property){
return _hasOwnProperty.call(object,property);
};
}
else{
hasOwnProp=function(object,property){
return((property in object)&&is(object.constructor.prototype[property],'undefined'));
};
}
if(!Function.prototype.bind){
Function.prototype.bind=function bind(that){
var target=this;
if(typeof target!="function"){
throw new TypeError();
}
var args=slice.call(arguments,1),
bound=function(){
if(this instanceof bound){
var F=function(){};
F.prototype=target.prototype;
var self=new F();
var result=target.apply(
self,
args.concat(slice.call(arguments))
);
if(Object(result)===result){
return result;
}
return self;
}else{
return target.apply(
that,
args.concat(slice.call(arguments))
);
}
};
return bound;
};
}
function setCss(str){
mStyle.cssText=str;
}
function setCssAll(str1,str2){
return setCss(prefixes.join(str1+';')+(str2||''));
}
function is(obj,type){
return typeof obj===type;
}
function contains(str,substr){
return!!~(''+str).indexOf(substr);
}
function testProps(props,prefixed){
for(var i in props){
var prop=props[i];
if(!contains(prop,"-")&&mStyle[prop]!==undefined){
return prefixed=='pfx'?prop:true;
}
}
return false;
}
function testDOMProps(props,obj,elem){
for(var i in props){
var item=obj[props[i]];
if(item!==undefined){
if(elem===false)return props[i];
if(is(item,'function')){
return item.bind(elem||obj);
}
return item;
}
}
return false;
}
function testPropsAll(prop,prefixed,elem){
var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),
props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');
if(is(prefixed,"string")||is(prefixed,"undefined")){
return testProps(props,prefixed);
}else{
props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');
return testDOMProps(props,prefixed,elem);
}
}
tests['flexbox']=function(){
return testPropsAll('flexWrap');
};
tests['flexboxlegacy']=function(){
return testPropsAll('boxDirection');
};
tests['canvas']=function(){
var elem=document.createElement('canvas');
return!!(elem.getContext&&elem.getContext('2d'));
};
tests['canvastext']=function(){
return!!(Modernizr['canvas']&&is(document.createElement('canvas').getContext('2d').fillText,'function'));
};
tests['webgl']=function(){
return!!window.WebGLRenderingContext;
};
tests['touch']=function(){
var bool;
if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){
bool=true;
}else{
injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''),function(node){
bool=node.offsetTop===9;
});
}
return bool;
};
tests['geolocation']=function(){
return'geolocation'in navigator;
};
tests['postmessage']=function(){
return!!window.postMessage;
};
tests['websqldatabase']=function(){
return!!window.openDatabase;
};
tests['indexedDB']=function(){
return!!testPropsAll("indexedDB",window);
};
tests['hashchange']=function(){
return isEventSupported('hashchange',window)&&(document.documentMode===undefined||document.documentMode>7);
};
tests['history']=function(){
return!!(window.history&&history.pushState);
};
tests['draganddrop']=function(){
var div=document.createElement('div');
return('draggable'in div)||('ondragstart'in div&&'ondrop'in div);
};
tests['websockets']=function(){
return'WebSocket'in window||'MozWebSocket'in window;
};
tests['rgba']=function(){
setCss('background-color:rgba(150,255,150,.5)');
return contains(mStyle.backgroundColor,'rgba');
};
tests['hsla']=function(){
setCss('background-color:hsla(120,40%,100%,.5)');
return contains(mStyle.backgroundColor,'rgba')||contains(mStyle.backgroundColor,'hsla');
};
tests['multiplebgs']=function(){
setCss('background:url(https://),url(https://),red url(https://)');
return(/(url\s*\(.*?){3}/).test(mStyle.background);
};
tests['backgroundsize']=function(){
return testPropsAll('backgroundSize');
};
tests['borderimage']=function(){
return testPropsAll('borderImage');
};
tests['borderradius']=function(){
return testPropsAll('borderRadius');
};
tests['boxshadow']=function(){
return testPropsAll('boxShadow');
};
tests['textshadow']=function(){
return document.createElement('div').style.textShadow==='';
};
tests['opacity']=function(){
setCssAll('opacity:.55');
return(/^0.55$/).test(mStyle.opacity);
};
tests['cssanimations']=function(){
return testPropsAll('animationName');
};
tests['csscolumns']=function(){
return testPropsAll('columnCount');
};
tests['cssgradients']=function(){
var str1='background-image:',
str2='gradient(linear,left top,right bottom,from(#9f9),to(white));',
str3='linear-gradient(left top,#9f9, white);';
setCss(
(str1+'-webkit- '.split(' ').join(str2+str1)+
prefixes.join(str3+str1)).slice(0,-str1.length)
);
return contains(mStyle.backgroundImage,'gradient');
};
tests['cssreflections']=function(){
return testPropsAll('boxReflect');
};
tests['csstransforms']=function(){
return!!testPropsAll('transform');
};
tests['csstransforms3d']=function(){
var ret=!!testPropsAll('perspective');
if(ret&&'webkitPerspective'in docElement.style){
injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(node,rule){
ret=node.offsetLeft===9&&node.offsetHeight===3;
});
}
return ret;
};
tests['csstransitions']=function(){
return testPropsAll('transition');
};
tests['fontface']=function(){
var bool;
injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){
var style=document.getElementById('smodernizr'),
sheet=style.sheet||style.styleSheet,
cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';
bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;
});
return bool;
};
tests['generatedcontent']=function(){
var bool;
injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''),function(node){
bool=node.offsetHeight>=3;
});
return bool;
};
tests['video']=function(){
var elem=document.createElement('video'),
bool=false;
try{
if(bool=!!elem.canPlayType){
bool=new Boolean(bool);
bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');
bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');
bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
}
}catch(e){}
return bool;
};
tests['audio']=function(){
var elem=document.createElement('audio'),
bool=false;
try{
if(bool=!!elem.canPlayType){
bool=new Boolean(bool);
bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
bool.mp3=elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
bool.m4a=(elem.canPlayType('audio/x-m4a;')||
elem.canPlayType('audio/aac;')).replace(/^no$/,'');
}
}catch(e){}
return bool;
};
tests['localstorage']=function(){
try{
localStorage.setItem(mod,mod);
localStorage.removeItem(mod);
return true;
}catch(e){
return false;
}
};
tests['sessionstorage']=function(){
try{
sessionStorage.setItem(mod,mod);
sessionStorage.removeItem(mod);
return true;
}catch(e){
return false;
}
};
tests['webworkers']=function(){
return!!window.Worker;
};
tests['applicationcache']=function(){
return!!window.applicationCache;
};
tests['svg']=function(){
return!!document.createElementNS&&!!document.createElementNS(ns.svg,'svg').createSVGRect;
};
tests['inlinesvg']=function(){
var div=document.createElement('div');
div.innerHTML='<svg/>';
return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg;
};
tests['smil']=function(){
return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,'animate')));
};
tests['svgclippaths']=function(){
return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,'clipPath')));
};
function webforms(){
Modernizr['input']=(function(props){
for(var i=0,len=props.length;i<len;i++){
attrs[props[i]]=!!(props[i]in inputElem);
}
if(attrs.list){
attrs.list=!!(document.createElement('datalist')&&window.HTMLDataListElement);
}
return attrs;
})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
Modernizr['inputtypes']=(function(props){
for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){
inputElem.setAttribute('type',inputElemType=props[i]);
bool=inputElem.type!=='text';
if(bool){
inputElem.value=smile;
inputElem.style.cssText='position:absolute;visibility:hidden;';
if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){
docElement.appendChild(inputElem);
defaultView=document.defaultView;
bool=defaultView.getComputedStyle&&
defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&
(inputElem.offsetHeight!==0);
docElement.removeChild(inputElem);
}else if(/^(search|tel)$/.test(inputElemType)){
}else if(/^(url|email)$/.test(inputElemType)){
bool=inputElem.checkValidity&&inputElem.checkValidity()===false;
}else{
bool=inputElem.value!=smile;
}
}
inputs[props[i]]=!!bool;
}
return inputs;
})('search tel url email datetime date month week time datetime-local number range color'.split(' '));
}
for(var feature in tests){
if(hasOwnProp(tests,feature)){
featureName=feature.toLowerCase();
Modernizr[featureName]=tests[feature]();
classes.push((Modernizr[featureName]?'':'no-')+featureName);
}
}
Modernizr.input||webforms();
Modernizr.addTest=function(feature,test){
if(typeof feature=='object'){
for(var key in feature){
if(hasOwnProp(feature,key)){
Modernizr.addTest(key,feature[key]);
}
}
}else{
feature=feature.toLowerCase();
if(Modernizr[feature]!==undefined){
return Modernizr;
}
test=typeof test=='function'?test():test;
if(typeof enableClasses!=="undefined"&&enableClasses){
docElement.className+=' '+(test?'':'no-')+feature;
}
Modernizr[feature]=test;
}
return Modernizr;
};
setCss('');
modElem=inputElem=null;
;(function(window,document){
var options=window.html5||{};
var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var supportsHtml5Styles;
var expando='_html5shiv';
var expanID=0;
var expandoData={};
var supportsUnknownElements;
(function(){
try{
var a=document.createElement('a');
a.innerHTML='<xyz></xyz>';
supportsHtml5Styles=('hidden'in a);
supportsUnknownElements=a.childNodes.length==1||(function(){
(document.createElement)('a');
var frag=document.createDocumentFragment();
return(
typeof frag.cloneNode=='undefined'||
typeof frag.createDocumentFragment=='undefined'||
typeof frag.createElement=='undefined'
);
}());
}catch(e){
supportsHtml5Styles=true;
supportsUnknownElements=true;
}
}());
function addStyleSheet(ownerDocument,cssText){
var p=ownerDocument.createElement('p'),
parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;
p.innerHTML='x<style>'+cssText+'</style>';
return parent.insertBefore(p.lastChild,parent.firstChild);
}
function getElements(){
var elements=html5.elements;
return typeof elements=='string'?elements.split(' '):elements;
}
function getExpandoData(ownerDocument){
var data=expandoData[ownerDocument[expando]];
if(!data){
data={};
expanID++;
ownerDocument[expando]=expanID;
expandoData[expanID]=data;
}
return data;
}
function createElement(nodeName,ownerDocument,data){
if(!ownerDocument){
ownerDocument=document;
}
if(supportsUnknownElements){
return ownerDocument.createElement(nodeName);
}
if(!data){
data=getExpandoData(ownerDocument);
}
var node;
if(data.cache[nodeName]){
node=data.cache[nodeName].cloneNode();
}else if(saveClones.test(nodeName)){
node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();
}else{
node=data.createElem(nodeName);
}
return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node;
}
function createDocumentFragment(ownerDocument,data){
if(!ownerDocument){
ownerDocument=document;
}
if(supportsUnknownElements){
return ownerDocument.createDocumentFragment();
}
data=data||getExpandoData(ownerDocument);
var clone=data.frag.cloneNode(),
i=0,
elems=getElements(),
l=elems.length;
for(;i<l;i++){
clone.createElement(elems[i]);
}
return clone;
}
function shivMethods(ownerDocument,data){
if(!data.cache){
data.cache={};
data.createElem=ownerDocument.createElement;
data.createFrag=ownerDocument.createDocumentFragment;
data.frag=data.createFrag();
}
ownerDocument.createElement=function(nodeName){
if(!html5.shivMethods){
return data.createElem(nodeName);
}
return createElement(nodeName,ownerDocument,data);
};
ownerDocument.createDocumentFragment=Function('h,f','return function(){'+
'var n=f.cloneNode(),c=n.createElement;'+
'h.shivMethods&&('+
getElements().join().replace(/\w+/g,function(nodeName){
data.createElem(nodeName);
data.frag.createElement(nodeName);
return'c("'+nodeName+'")';
})+
');return n}'
)(html5,data.frag);
}
function shivDocument(ownerDocument){
if(!ownerDocument){
ownerDocument=document;
}
var data=getExpandoData(ownerDocument);
if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){
data.hasCSS=!!addStyleSheet(ownerDocument,
'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}'+
'mark{background:#FF0;color:#000}'
);
}
if(!supportsUnknownElements){
shivMethods(ownerDocument,data);
}
return ownerDocument;
}
var html5={
'elements':options.elements||'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
'shivCSS':(options.shivCSS!==false),
'supportsUnknownElements':supportsUnknownElements,
'shivMethods':(options.shivMethods!==false),
'type':'default',
'shivDocument':shivDocument,
createElement:createElement,
createDocumentFragment:createDocumentFragment
};
window.html5=html5;
shivDocument(document);
}(this,document));
Modernizr._version=version;
Modernizr._prefixes=prefixes;
Modernizr._domPrefixes=domPrefixes;
Modernizr._cssomPrefixes=cssomPrefixes;
Modernizr.mq=testMediaQuery;
Modernizr.hasEvent=isEventSupported;
Modernizr.testProp=function(prop){
return testProps([prop]);
};
Modernizr.testAllProps=testPropsAll;
Modernizr.testStyles=injectElementWithStyles;
Modernizr.prefixed=function(prop,obj,elem){
if(!obj){
return testPropsAll(prop,'pfx');
}else{
return testPropsAll(prop,obj,elem);
}
};
docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,'$1$2')+
(enableClasses?' js '+classes.join(' '):'');
return Modernizr;
})(this,this.document);


/* plugins-dist/mae/javascript/jquery.uniform.min.js */
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);


/* plugins-dist/mae/javascript/base.js */

var d=document;
var w=window;
var ok_minus_plus=false;
var ww=jQuery(window).width();
var hasFlash=function(){
var has=false;
try{
var fo=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if(fo){
has=true;
}
}catch(e){
if(navigator.mimeTypes
&&navigator.mimeTypes['application/x-shockwave-flash']!=undefined
&&navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){
has=true;
}
}
return has;
};
if(top.location!=location){
top.location.href=document.location.href;
}
jQuery(document).ready(function(){
ww=jQuery(window).width();
fnDeleteFlash();
fnSlider(955);
fnBreakpoints();
fnSkinSelect();
fnQuickSearch();
fnPlaceholder();
fnScrollTo();
fnToggle();
fnMasonry();
resize_iframe();
resize_players();
$(window).resize(function(){
ww=jQuery(window).width();
resize_iframe();
resize_players();
});
onAjaxLoad(fnMasonry);
});
jQuery(window).load(function(){
fnJCycleResize();
fnMasonry();
resize_iframe();
resize_players();
});
fnFontSize=function(){
if(!ok_minus_plus){
jQuery('#page-inner').jfontsize({
btnMinusClasseId:'.minus',
btnPlusClasseId:'.plus',
btnMinusMaxHits:1,
btnPlusMaxHits:2,
sizeChange:1
});
jQuery('body').off('click.plusminus').on('click.plusminus','a.plus, a.minus',function(){
jQuery('.page-home #container,.page_plan #container .inner').masonry();
return false;
});
ok_minus_plus=true;
}
};
fnDeleteFlash=function(){
if(!hasFlash()){
jQuery('object').parents('.block-content').remove();
}
};
fnSlider=function(w,h){
if(jQuery('.block-type-01 .slides > li').length>1){
jQuery('.block-type-01 .slides').carouFredSel({
pagination:jQuery('.block-type-01 .pager'),
responsive:true,
width:'100%',
items:{
visible:1,
width:w
},
configuration:{
reInit:true
},
prev:{
key:"left"
},
next:{
key:"right"
},
auto:{
timeoutDuration:10000
}
});
}
jQuery('.block-type-01 .control').on('click',function(){
if(jQuery(this).hasClass('pause')){
jQuery('.block-type-01 .slides').trigger('pause');
jQuery('.block-type-01 .control').attr('class','control play');
}else if(jQuery(this).hasClass('play')){
jQuery('.block-type-01 .slides').trigger('play');
jQuery('.block-type-01 .control').attr('class','control pause');
}
return false;
});
jQuery(".block-type-01 .slides").swipe({
excludedElements:"button, input, select, textarea, .noSwipe",
swipeLeft:function(){
jQuery('.block-type-01 .slides').trigger('next',1);
},
swipeRight:function(){
jQuery('.block-type-01 .slides').trigger('prev',1);
},
tap:function(event,target){
if(jQuery(window).width()<1024){
window.open(jQuery(target).parent().attr('href'),'_self');
}
}
});
};
fnSlide=function(){
jQuery('.block-type-01 .slides').slidesjs({
width:955,
height:250,
navigation:{
active:false
},
play:{
active:true,
auto:true,
interval:4000,
swap:true
}
});
};
fnBreakpoints=function(){
jQuery(window).bind('enterBreakpoint768',function(){
AgendaSlider();
jQuery('.block-mini-agenda .inner ul').trigger("destroy");
fnSlider();
getCol=function(dir){
jQuery('#container .block').each(function(i,o){
jQuery(o).removeClass("column1").removeClass("column2");
var _dir=parseInt(jQuery(o).css(dir));
if(_dir<=0)
jQuery(o).addClass("column1");
else
jQuery(o).addClass("column2");
});
};
if(jQuery('html').attr('dir')=='rtl'){
getCol('right');
}
else{
getCol('left');
}
});
jQuery(window).bind('enterBreakpoint1024',function(){
jQuery('.block-mini-agenda .inner ul').trigger("destroy");
});
jQuery(window).setBreakpoints();
function AgendaSlider(){
jQuery('.block-mini-agenda .inner ul').carouFredSel({
prev:{
button:"#agenda-prev",
key:"left"
},
next:{
button:"#agenda-next",
key:"right"
},
items:1
});
}
};
fnMasonry=function(){
if(jQuery('html.msie7').length==0){
getCol=function(dir){
jQuery('#container .block').each(function(i,o){
var _dir=parseInt(jQuery(o).css(dir));
if(_dir<=0)
jQuery(o).addClass("column1");
else
jQuery(o).addClass("column2");
});
};
initMsnry=function(){
if(jQuery('html').attr('dir')=='rtl'){
jQuery('.page-home #container,.page_plan #container .inner').masonry({
columnWidth:'.grid-sizer',
itemSelector:'.block,.col',
isOriginLeft:false
});
}else{
jQuery('.page-home #container,.page_plan #container .inner').masonry({
columnWidth:'.grid-sizer',
itemSelector:'.block, .col'
});
}
if(jQuery('html').attr('dir')=='rtl'){
getCol('right');
}
else{
getCol('left');
}
fnFontSize();
};
setTimeout(initMsnry,'500');
}
};
fnSkinSelect=function(){
jQuery('select.skin').uniform();
};
fnToggle=function(){
ww=jQuery(document).width();
jQuery(".expand li a").each(function(){
if(jQuery(this).next().length>0){
jQuery(this).addClass("parent");
};
});
jQuery(".toggle").on('click',function(e){
xpndbl=jQuery(this).attr('href');
jQuery(this).toggleClass("active");
if(jQuery(xpndbl).is('.opened')){
jQuery(xpndbl).removeClass('opened');
}else{
jQuery(xpndbl).addClass('opened');
}
return false;
});
jQuery(document).ready(function(){
adjustMenu();
});
jQuery(window).on('resize orientationchange',function(){
adjustMenu();
});
var adjustMenu=function(){
ww=jQuery(window).width();
if(ww<=1024){
jQuery(".toggle").each(function(){
if(!jQuery(this).hasClass("active")){
jQuery(this).parent().find(".expand").removeClass('opened');
}else{
jQuery(this).parent().find(".expand").addClass('opened');
}
});
jQuery("#header").off('mouseenter.adjustMenu mouseleave.adjustMenu','.expand li').off('click.adjustMenu','.expand li a.parent').on('click.adjustMenu','.expand li a.parent',function(e){
jQuery(this).parent("li").toggleClass("hover");
});
}
else if(ww>1024){
jQuery(".expand li a").off('click.adjustMenu');
jQuery(".expand li").removeClass("hover");
jQuery("#header").off('mouseenter.adjustMenu mouseleave.adjustMenu','.expand li').on('mouseenter.adjustMenu','.expand li',function(){
jQuery(this).addClass("hover");
}).on('mouseleave.adjustMenu','.expand li',function(){
jQuery(this).removeClass("hover");
});
}
};
};
fnQuickSearch=function(){
jQuery('#quick-search .submit').on('click',function(){
if(jQuery(this).prev('input').val()==0){
jQuery('#quick-search .toggle').click();
}
});
};
fnPlaceholder=function(){
jQuery('input, textarea').placeholder();
};
fnLinkTop=function(){
jQuery('.link-top').on('click',function(){
jQuery('html, body').animate({
scrollTop:0
},'slow');
return false;
});
};
fnScrollTo=function(){
jQuery('body').on('click.link','a[href*=#]:not(.toggle)',function(e){
if(!$(this).is('.tools a, .pager a, .spip_in')){
var link=jQuery(this).attr('href'),
target=link.substring(link.indexOf('#')),
cible=target;
if(!jQuery(target).length)
target=jQuery('[name='+target.substring(1)+']');
var offset=jQuery(target).offset();
if(offset){
jQuery('html, body').stop().animate({
scrollTop:offset.top
},'slow');
if(jQuery(this).is('.quick-access a'))return true;
if(link!='#header'){
if(window.history.pushState){
window.history.pushState({
target:cible,
href:window.document.location.href
},window.document.title,link);
}
else
window.location.hash=link;
}
return false;
}
}
});
};
fnJCycleResize=function(){
jQuery('.dsjcycle').each(function(i,o){
var _height=0;
jQuery(o).find('> div').each(function(j,p){
var img_height=parseInt($(p).height());
if(img_height>_height)
_height=img_height;
});
_height+=10;
jQuery(o).css('height',_height+'px');
});
jQuery('.page-home #container,.page_plan #container .inner').masonry();
};
resize_iframe=function(){
$('iframe').each(function(){
var height=$(this).prop('data-originalheight')?$(this).prop('data-originalheight'):$(this).height();
var width=$(this).prop('data-originalwidth')?$(this).prop('data-originalwidth'):$(this).width();
if(width>1){
var parent_width=$(this).parent().width();
var ratio=parent_width/width;
$(this).width('100%').height(parseInt(height*ratio));
if(typeof $(this).prop('data-originalwidth')==typeof undefined||$(this).prop('data-originalwidth')==false)
$(this).prop('data-originalwidth',width);
if(typeof $(this).prop('data-originalheight')==typeof undefined||$(this).prop('data-originalheight')==false)
$(this).prop('data-originalheight',height);
var url=$(this).prop('src');
var newurl=url;
if(url!=''&&typeof(url)!='undefined'){
if(parametre_url(url,'width'))
newurl=parametre_url(url,'width',parseInt(width*ratio));
if(parametre_url(url,'height'))
newurl=parametre_url(newurl,'height',parseInt(height*ratio));
if(newurl!=url)
$(this).prop('src',newurl);
}
}
});
};
resize_players=function(){
jQuery('.video_placeholder').each(function(){
var height=$(this).prop('data-originalheight')?$(this).prop('data-originalheight'):$(this).height();
var width=$(this).prop('data-originalwidth')?$(this).prop('data-originalwidth'):$(this).width();
var parent_width=$(this).parent().width();
var ratio=parent_width/width;
$(this).width('100%').height(parseInt(height*ratio));
$(this).find('video,div[id^="jwpid"]').width('100%').height(parseInt(height*ratio));
$(this).parents('.spip_documents').find('.spip_doc_links').width('');
var datas=$(this).find('video').attr('data-player');
datas=eval('datas='+datas+';');
if(typeof(datas)==="object"){
datas.height=height*ratio;
datas.width='100%';
$(this).find('video').attr('data-player',JSON.stringify(datas));
}
if(typeof $(this).prop('data-originalwidth')==typeof undefined||$(this).prop('data-originalwidth')==false)
$(this).prop('data-originalwidth',width);
if(typeof $(this).prop('data-originalheight')==typeof undefined||$(this).prop('data-originalheight')==false)
$(this).prop('data-originalheight',height);
});
};


