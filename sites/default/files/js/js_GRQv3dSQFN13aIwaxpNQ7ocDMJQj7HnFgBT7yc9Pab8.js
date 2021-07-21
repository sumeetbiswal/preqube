/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @namespace
 */
(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.bootstrap = {
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Extends a Bootstrap plugin constructor.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to extend the plugin constructor.
   *
   * @return {function|boolean}
   *   The Bootstrap plugin or FALSE if the plugin does not exist.
   */
  Drupal.bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if the plugin does not exist.
    if (!$.fn[id] || !$.fn[id].Constructor) return false;

    // Extend the plugin if a callback was provided.
    if ($.isFunction(callback)) {
      var ret = callback.apply($.fn[id].Constructor, [this.settings]);
      if ($.isPlainObject(ret)) {
        $.extend(true, $.fn[id].Constructor, ret);
      }
    }

    // Add a jQuery UI like option getter/setter method.
    if ($.fn[id].Constructor.prototype.option === void(0)) {
      $.fn[id].Constructor.prototype.option = this.option;
    }

    return $.fn[id].Constructor;
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to replace the jQuery plugin definition. The callback must
   *   return a function that is used to construct a jQuery plugin.
   *
   * @return {function|boolean}
   *   The Bootstrap jQuery plugin definition or FALSE if the plugin does not
   *   exist.
   */
  Drupal.bootstrap.replacePlugin = function (id, callback) {
    // Immediately return if plugin does not exist or not a valid callback.
    if (!$.fn[id] || !$.fn[id].Constructor || !$.isFunction(callback)) return false;
    var constructor = $.fn[id].Constructor;

    var plugin = callback.apply(constructor);
    if ($.isFunction(plugin)) {
      plugin.Constructor = constructor;

      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
      $.fn[id] = plugin;
    }
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Drupal.bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a pretty complete modern implementation. If things are quite
   * working the way you intend (in older browsers), you may wish to use the
   * jQuery.simulate plugin. If it's available, this method will defer to it.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement} element
   *   A DOM element to dispatch event on.
   * @param {String} type
   *   The type of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   */
  Drupal.bootstrap.simulate = function (element, type, options) {
    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return;
    }
    var event;
    var ctor;
    for (var name in Drupal.bootstrap.eventMap) {
      if (Drupal.bootstrap.eventMap[name].test(type)) {
        ctor = name;
        break;
      }
    }
    if (!ctor) {
      throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
    }
    var opts = {bubbles: true, cancelable: true};
    if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
      $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
    }
    if (ctor === 'MouseEvent') {
      $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
    }
    if (options) {
      $.extend(opts, options);
    }
    if (typeof window[ctor] === 'function') {
      event = new window[ctor](type, opts);
      element.dispatchEvent(event);
    }
    else if (document.createEvent) {
      event = document.createEvent(ctor);
      event.initEvent(type, opts.bubbles, opts.cancelable);
      element.dispatchEvent(event);
    }
    else if (typeof element.fireEvent === 'function') {
      event = $.extend(document.createEventObject(), opts);
      element.fireEvent('on' + type, event);
    }
    else if (typeof element[type]) {
      element[type]();
    }
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   *
   * @todo This isn't fully working since Bootstrap plugins don't allow
   * methods to return values.
   */
  Drupal.bootstrap.option = function (key, value) {
    var options = key;
    var parts, curOption, i;

    // Don't return a reference to the internal hash.
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Handle a specific option.
    if (typeof key === "string") {
      // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split(".");
      key = parts.shift();
      if (parts.length) {
        curOption = options[key] = $.extend({}, this.options[key]);
        for (i = 0; i < parts.length - 1; i++) {
          curOption[parts[i]] = curOption[parts[i]] || {};
          curOption = curOption[parts[i]];
        }
        key = parts.pop();
        if (arguments.length === 1) {
          return curOption[key] === undefined ? null : curOption[key];
        }
        curOption[key] = value;
      }
      else {
        if (arguments.length === 1) {
          return this.options[key] === undefined ? null : this.options[key];
        }
        options[key] = value;
      }
    }

    // Set the new option(s).
    for (key in options) {
      if (!options.hasOwnProperty(key)) continue;
      this.options[key] = options[key];
    }
    return this;
  };

})(window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * Class to help modify attributes.
   *
   * @param {object} object
   *   An object to initialize attributes with.
   *
   * @constructor
   */
  var Attributes = function (object) {
    this.data = object && _.isObject(object) && _.clone(object) || {};
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @returns {string}
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    for (name in this.data) {
      if (!this.data.hasOwnProperty(name)) continue;
      value = this.data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var classes = this.getClasses();
    value = [].concat(classes, value);
    this.set('class', _.uniq(value));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @returns {Object}
   */
  Attributes.prototype.getData = function () {
    return _.clone(this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    var classes = [].concat(this.get('class', []));
    return _.uniq(classes);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} name
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (name) {
    name = [].concat(name);
    var classes = this.getClasses();
    var found = false;
    _.each(name, function (value) { if (_.indexOf(classes, value) !== -1) found = true; });
    return found;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {object} values
   *   An associative key/value array.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (values, recursive) {
    values = values instanceof Attributes ? values.getData() : values;
    if (recursive === void(0) || recursive) {
      this.data = $.extend(true, {}, this.data, values);
    }
    else {
      $.extend(this.data, values);
    }
    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (value) {
    this.set('class', _.without(this.getClasses(), [].concat(value)));
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(oldValue, classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    this.data[name] = value;
    return this;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} object
   *   An object to initialize attributes with.
   *
   * @returns {Attributes}
   *
   * @global
   *
   * @constructor
   */
  window.Attributes = function (object) {
    return object instanceof Attributes ? object : new Attributes(object);
  };

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme.bootstrapIcon('refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }
      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);;
/*!
 * jQuery Migrate - v1.0.0 - 2013-01-14
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
"use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( window.console && console.warn && !jQuery.migrateMute ) {
			
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = {},
	attr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		if ( elem && !rnoAttrNodeType.test( nType ) && jQuery.isFunction( jQuery.fn[ name ] ) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type` since it breaks on IE 6/7/8
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr(" + lowerName + ") may use property instead of attribute" );
		}
	}

	return attr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("property-based jQuery.fn.attr('value') is deprecated");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("property-based jQuery.fn.attr('value', val) is deprecated");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	// Note this does NOT include the # XSS fix from 1.7!
	rquickExpr = /^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( selector )) && match[1] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( jQuery.trim(selector), context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
	browser[ matched.browser ] = true;
	browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
	browser.webkit = true;
} else if ( browser.webkit ) {
	browser.safari = true;
}

jQuery.browser = browser;

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,
	oldFragment = jQuery.buildFragment;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

jQuery.buildFragment = function( elems, context, scripts, selection ) {
	var ret,
		warning = "jQuery.buildFragment() is deprecated";

	// Set context per 1.8 logic
	context = context || document;
	context = !context.nodeType && context[0] || context;
	context = context.ownerDocument || context;

	try {
		ret = oldFragment.call( jQuery, elems, context, scripts, selection );

	// jQuery < 1.8 required arrayish context; jQuery 1.9 fails on it
	} catch( x ) {
		ret = oldFragment.call( jQuery, elems, context.nodeType ? [ context ] : context[ 0 ], scripts, selection );

		// Success from tweaking context means buildFragment was called by the user
		migrateWarn( warning );
	}

	// jQuery < 1.9 returned an object instead of the fragment itself
	if ( !ret.fragment ) {
		migrateWarnProp( ret, "fragment", ret, warning );
		migrateWarnProp( ret, "cacheable", false, warning );
	}

	return ret;
};

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) != "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem & !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return H("flexWrap")},r.flexboxlegacy=function(){return H("boxDirection")},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){return!!a.openDatabase},r.indexedDB=function(){return!!H("indexedDB",a)},r.hashchange=function(){return y("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},r.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.hsla=function(){return B("background-color:hsla(120,40%,100%,.5)"),E(j.backgroundColor,"rgba")||E(j.backgroundColor,"hsla")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return H("backgroundSize")},r.borderimage=function(){return H("borderImage")},r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return H("animationName")},r.csscolumns=function(){return H("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.cssreflections=function(){return H("boxReflect")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},r.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},r.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);
;
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
;
/*
 *	jQuery OwlCarousel v1.31
 *  
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel
 *
 *	Licensed under MIT
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(B 3i.3E!=="9"){3i.3E=9(e){9 t(){}t.5v=e;q 5c t}}(9(e,t,n,r){b i={1J:9(t,n){b r=d;r.$k=e(n);r.6=e.3K({},e.3A.2c.6,r.$k.w(),t);r.29=t;r.3U()},3U:9(){b t=d;7(B t.6.2M==="9"){t.6.2M.P(d,[t.$k])}7(B t.6.2I==="2F"){b n=t.6.2I;9 r(e){7(B t.6.3F==="9"){t.6.3F.P(d,[e])}m{b n="";1C(b r 2f e["h"]){n+=e["h"][r]["1K"]}t.$k.2h(n)}t.2Y()}e.5G(n,r)}m{t.2Y()}},2Y:9(e){b t=d;t.$k.w("h-4p",t.$k.2s("2t")).w("h-4K",t.$k.2s("J"));t.$k.A({2z:0});t.2A=t.6.v;t.4L();t.5R=0;t.1M;t.1P()},1P:9(){b e=d;7(e.$k.1S().S===0){q c}e.1O();e.3H();e.$X=e.$k.1S();e.G=e.$X.S;e.4M();e.$I=e.$k.16(".h-1K");e.$L=e.$k.16(".h-1h");e.2H="Y";e.15=0;e.1W=[0];e.p=0;e.4I();e.4G()},4G:9(){b e=d;e.2V();e.31();e.4D();e.35();e.4C();e.4A();e.2x();e.4z();7(e.6.2w!==c){e.4w(e.6.2w)}7(e.6.Q===j){e.6.Q=5i}e.1e();e.$k.16(".h-1h").A("4v","4r");7(!e.$k.2p(":33")){e.34()}m{e.$k.A("2z",1)}e.56=c;e.2o();7(B e.6.39==="9"){e.6.39.P(d,[e.$k])}},2o:9(){b e=d;7(e.6.1I===j){e.1I()}7(e.6.1A===j){e.1A()}e.4n();7(B e.6.3n==="9"){e.6.3n.P(d,[e.$k])}},3o:9(){b e=d;7(B e.6.3p==="9"){e.6.3p.P(d,[e.$k])}e.34();e.2V();e.31();e.4m();e.35();e.2o();7(B e.6.3t==="9"){e.6.3t.P(d,[e.$k])}},4i:9(e){b t=d;19(9(){t.3o()},0)},34:9(){b e=d;7(e.$k.2p(":33")===c){e.$k.A({2z:0});18(e.1r);18(e.1M)}m{q c}e.1M=4g(9(){7(e.$k.2p(":33")){e.4i();e.$k.4f({2z:1},2J);18(e.1M)}},5O)},4M:9(){b e=d;e.$X.5N(\'<M J="h-1h">\').3G(\'<M J="h-1K"></M>\');e.$k.16(".h-1h").3G(\'<M J="h-1h-4d">\');e.1U=e.$k.16(".h-1h-4d");e.$k.A("4v","4r")},1O:9(){b e=d;b t=e.$k.1V(e.6.1O);b n=e.$k.1V(e.6.28);7(!t){e.$k.K(e.6.1O)}7(!n){e.$k.K(e.6.28)}},2V:9(){b t=d;7(t.6.2Z===c){q c}7(t.6.4b===j){t.6.v=t.2A=1;t.6.17=c;t.6.1q=c;t.6.21=c;t.6.24=c;t.6.25=c;t.6.26=c;q c}b n=e(t.6.4a).1m();7(n>(t.6.1q[0]||t.2A)){t.6.v=t.2A}7(B t.6.17!=="3b"&&t.6.17!==c){t.6.17.5x(9(e,t){q e[0]-t[0]});1C(b r 2f t.6.17){7(B t.6.17[r]!=="3b"&&t.6.17[r][0]<=n){t.6.v=t.6.17[r][1]}}}m{7(n<=t.6.1q[0]&&t.6.1q!==c){t.6.v=t.6.1q[1]}7(n<=t.6.21[0]&&t.6.21!==c){t.6.v=t.6.21[1]}7(n<=t.6.24[0]&&t.6.24!==c){t.6.v=t.6.24[1]}7(n<=t.6.25[0]&&t.6.25!==c){t.6.v=t.6.25[1]}7(n<=t.6.26[0]&&t.6.26!==c){t.6.v=t.6.26[1]}}7(t.6.v>t.G&&t.6.49===j){t.6.v=t.G}},4C:9(){b n=d,r;7(n.6.2Z!==j){q c}b i=e(t).1m();n.3f=9(){7(e(t).1m()!==i){7(n.6.Q!==c){18(n.1r)}5o(r);r=19(9(){i=e(t).1m();n.3o()},n.6.48)}};e(t).47(n.3f)},4m:9(){b e=d;e.2j(e.p);7(e.6.Q!==c){e.3l()}},46:9(){b t=d;b n=0;b r=t.G-t.6.v;t.$I.2i(9(i){b s=e(d);s.A({1m:t.N}).w("h-1K",3q(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-1L",n)})},45:9(){b e=d;b t=0;b t=e.$I.S*e.N;e.$L.A({1m:t*2,V:0});e.46()},31:9(){b e=d;e.44();e.45();e.43();e.3x()},44:9(){b e=d;e.N=1N.5a(e.$k.1m()/e.6.v)},3x:9(){b e=d;b t=(e.G*e.N-e.6.v*e.N)*-1;7(e.6.v>e.G){e.C=0;t=0;e.3D=0}m{e.C=e.G-e.6.v;e.3D=t}q t},42:9(){q 0},43:9(){b t=d;t.H=[0];t.2C=[];b n=0;b r=0;1C(b i=0;i<t.G;i++){r+=t.N;t.H.2D(-r);7(t.6.14===j){b s=e(t.$I[i]);b o=s.w("h-1L");7(o!==n){t.2C[n]=t.H[i];n=o}}}},4D:9(){b t=d;7(t.6.2b===j||t.6.1s===j){t.D=e(\'<M J="h-4R"/>\').4Q("4P",!t.F.13).5E(t.$k)}7(t.6.1s===j){t.3Z()}7(t.6.2b===j){t.3Y()}},3Y:9(){b t=d;b n=e(\'<M J="h-5h"/>\');t.D.1k(n);t.1w=e("<M/>",{"J":"h-1l",2h:t.6.2T[0]||""});t.1y=e("<M/>",{"J":"h-Y",2h:t.6.2T[1]||""});n.1k(t.1w).1k(t.1y);n.z("2W.D 1Z.D",\'M[J^="h"]\',9(e){e.1n()});n.z("2a.D 2n.D",\'M[J^="h"]\',9(n){n.1n();7(e(d).1V("h-Y")){t.Y()}m{t.1l()}})},3Z:9(){b t=d;t.1o=e(\'<M J="h-1s"/>\');t.D.1k(t.1o);t.1o.z("2a.D 2n.D",".h-1p",9(n){n.1n();7(3q(e(d).w("h-1p"))!==t.p){t.1i(3q(e(d).w("h-1p")),j)}})},3T:9(){b t=d;7(t.6.1s===c){q c}t.1o.2h("");b n=0;b r=t.G-t.G%t.6.v;1C(b i=0;i<t.G;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.G-t.6.v}b o=e("<M/>",{"J":"h-1p"});b u=e("<3Q></3Q>",{54:t.6.38===j?n:"","J":t.6.38===j?"h-5l":""});o.1k(u);o.w("h-1p",r===i?s:i);o.w("h-1L",n);t.1o.1k(o)}}t.3a()},3a:9(){b t=d;7(t.6.1s===c){q c}t.1o.16(".h-1p").2i(9(n,r){7(e(d).w("h-1L")===e(t.$I[t.p]).w("h-1L")){t.1o.16(".h-1p").Z("2d");e(d).K("2d")}})},3d:9(){b e=d;7(e.6.2b===c){q c}7(e.6.2e===c){7(e.p===0&&e.C===0){e.1w.K("1b");e.1y.K("1b")}m 7(e.p===0&&e.C!==0){e.1w.K("1b");e.1y.Z("1b")}m 7(e.p===e.C){e.1w.Z("1b");e.1y.K("1b")}m 7(e.p!==0&&e.p!==e.C){e.1w.Z("1b");e.1y.Z("1b")}}},35:9(){b e=d;e.3T();e.3d();7(e.D){7(e.6.v>=e.G){e.D.3N()}m{e.D.3L()}}},5g:9(){b e=d;7(e.D){e.D.3j()}},Y:9(e){b t=d;7(t.1G){q c}t.p+=t.6.14===j?t.6.v:1;7(t.p>t.C+(t.6.14==j?t.6.v-1:0)){7(t.6.2e===j){t.p=0;e="2k"}m{t.p=t.C;q c}}t.1i(t.p,e)},1l:9(e){b t=d;7(t.1G){q c}7(t.6.14===j&&t.p>0&&t.p<t.6.v){t.p=0}m{t.p-=t.6.14===j?t.6.v:1}7(t.p<0){7(t.6.2e===j){t.p=t.C;e="2k"}m{t.p=0;q c}}t.1i(t.p,e)},1i:9(e,t,n){b r=d;7(r.1G){q c}7(B r.6.1F==="9"){r.6.1F.P(d,[r.$k])}7(e>=r.C){e=r.C}m 7(e<=0){e=0}r.p=r.h.p=e;7(r.6.2w!==c&&n!=="4e"&&r.6.v===1&&r.F.1u===j){r.1B(0);7(r.F.1u===j){r.1H(r.H[e])}m{r.1x(r.H[e],1)}r.2q();r.4k();q c}b i=r.H[e];7(r.F.1u===j){r.1T=c;7(t===j){r.1B("1D");19(9(){r.1T=j},r.6.1D)}m 7(t==="2k"){r.1B(r.6.2u);19(9(){r.1T=j},r.6.2u)}m{r.1B("1j");19(9(){r.1T=j},r.6.1j)}r.1H(i)}m{7(t===j){r.1x(i,r.6.1D)}m 7(t==="2k"){r.1x(i,r.6.2u)}m{r.1x(i,r.6.1j)}}r.2q()},2j:9(e){b t=d;7(B t.6.1F==="9"){t.6.1F.P(d,[t.$k])}7(e>=t.C||e===-1){e=t.C}m 7(e<=0){e=0}t.1B(0);7(t.F.1u===j){t.1H(t.H[e])}m{t.1x(t.H[e],1)}t.p=t.h.p=e;t.2q()},2q:9(){b e=d;e.1W.2D(e.p);e.15=e.h.15=e.1W[e.1W.S-2];e.1W.55(0);7(e.15!==e.p){e.3a();e.3d();e.2o();7(e.6.Q!==c){e.3l()}}7(B e.6.3z==="9"&&e.15!==e.p){e.6.3z.P(d,[e.$k])}},W:9(){b e=d;e.3k="W";18(e.1r)},3l:9(){b e=d;7(e.3k!=="W"){e.1e()}},1e:9(){b e=d;e.3k="1e";7(e.6.Q===c){q c}18(e.1r);e.1r=4g(9(){e.Y(j)},e.6.Q)},1B:9(e){b t=d;7(e==="1j"){t.$L.A(t.2y(t.6.1j))}m 7(e==="1D"){t.$L.A(t.2y(t.6.1D))}m 7(B e!=="2F"){t.$L.A(t.2y(e))}},2y:9(e){b t=d;q{"-1R-1a":"2B "+e+"1z 2r","-27-1a":"2B "+e+"1z 2r","-o-1a":"2B "+e+"1z 2r",1a:"2B "+e+"1z 2r"}},3I:9(){q{"-1R-1a":"","-27-1a":"","-o-1a":"",1a:""}},3J:9(e){q{"-1R-O":"1g("+e+"T, E, E)","-27-O":"1g("+e+"T, E, E)","-o-O":"1g("+e+"T, E, E)","-1z-O":"1g("+e+"T, E, E)",O:"1g("+e+"T, E,E)"}},1H:9(e){b t=d;t.$L.A(t.3J(e))},3M:9(e){b t=d;t.$L.A({V:e})},1x:9(e,t){b n=d;n.2g=c;n.$L.W(j,j).4f({V:e},{59:t||n.6.1j,3O:9(){n.2g=j}})},4L:9(){b e=d;b r="1g(E, E, E)",i=n.5f("M");i.2t.3P="  -27-O:"+r+"; -1z-O:"+r+"; -o-O:"+r+"; -1R-O:"+r+"; O:"+r;b s=/1g\\(E, E, E\\)/g,o=i.2t.3P.5k(s),u=o!==1d&&o.S===1;b a="5z"2f t||5C.4U;e.F={1u:u,13:a}},4A:9(){b e=d;7(e.6.22!==c||e.6.23!==c){e.3R();e.3S()}},3H:9(){b e=d;b t=["s","e","x"];e.12={};7(e.6.22===j&&e.6.23===j){t=["2W.h 1Z.h","2P.h 3V.h","2a.h 3W.h 2n.h"]}m 7(e.6.22===c&&e.6.23===j){t=["2W.h","2P.h","2a.h 3W.h"]}m 7(e.6.22===j&&e.6.23===c){t=["1Z.h","3V.h","2n.h"]}e.12["3X"]=t[0];e.12["2O"]=t[1];e.12["2N"]=t[2]},3S:9(){b t=d;t.$k.z("5A.h",9(e){e.1n()});t.$k.z("1Z.40",9(t){q e(t.1f).2p("5F, 5H, 5Q, 5S")})},3R:9(){9 o(e){7(e.2L){q{x:e.2L[0].2K,y:e.2L[0].41}}m{7(e.2K!==r){q{x:e.2K,y:e.41}}m{q{x:e.52,y:e.53}}}}9 u(t){7(t==="z"){e(n).z(i.12["2O"],f);e(n).z(i.12["2N"],l)}m 7(t==="R"){e(n).R(i.12["2O"]);e(n).R(i.12["2N"])}}9 a(n){b n=n.3B||n||t.3w;7(n.5d===3){q c}7(i.G<=i.6.v){q}7(i.2g===c&&!i.6.3v){q c}7(i.1T===c&&!i.6.3v){q c}7(i.6.Q!==c){18(i.1r)}7(i.F.13!==j&&!i.$L.1V("3s")){i.$L.K("3s")}i.11=0;i.U=0;e(d).A(i.3I());b r=e(d).2l();s.3g=r.V;s.3e=o(n).x-r.V;s.3c=o(n).y-r.5y;u("z");s.2m=c;s.30=n.1f||n.4c}9 f(r){b r=r.3B||r||t.3w;i.11=o(r).x-s.3e;i.2S=o(r).y-s.3c;i.U=i.11-s.3g;7(B i.6.2R==="9"&&s.2Q!==j&&i.U!==0){s.2Q=j;i.6.2R.P(i,[i.$k])}7(i.U>8||i.U<-8&&i.F.13===j){r.1n?r.1n():r.5M=c;s.2m=j}7((i.2S>10||i.2S<-10)&&s.2m===c){e(n).R("2P.h")}b u=9(){q i.U/5};b a=9(){q i.3D+i.U/5};i.11=1N.3x(1N.42(i.11,u()),a());7(i.F.1u===j){i.1H(i.11)}m{i.3M(i.11)}}9 l(n){b n=n.3B||n||t.3w;n.1f=n.1f||n.4c;s.2Q=c;7(i.F.13!==j){i.$L.Z("3s")}7(i.U<0){i.1t=i.h.1t="V"}m{i.1t=i.h.1t="2G"}7(i.U!==0){b r=i.4h();i.1i(r,c,"4e");7(s.30===n.1f&&i.F.13!==j){e(n.1f).z("3u.4j",9(t){t.4S();t.4T();t.1n();e(n.1f).R("3u.4j")});b o=e.4O(n.1f,"4V")["3u"];b a=o.4W();o.4X(0,0,a)}}u("R")}b i=d;b s={3e:0,3c:0,4Y:0,3g:0,2l:1d,4Z:1d,50:1d,2m:1d,51:1d,30:1d};i.2g=j;i.$k.z(i.12["3X"],".h-1h",a)},4h:9(){b e=d,t;t=e.4l();7(t>e.C){e.p=e.C;t=e.C}m 7(e.11>=0){t=0;e.p=0}q t},4l:9(){b t=d,n=t.6.14===j?t.2C:t.H,r=t.11,i=1d;e.2i(n,9(s,o){7(r-t.N/20>n[s+1]&&r-t.N/20<o&&t.3m()==="V"){i=o;7(t.6.14===j){t.p=e.4o(i,t.H)}m{t.p=s}}m 7(r+t.N/20<o&&r+t.N/20>(n[s+1]||n[s]-t.N)&&t.3m()==="2G"){7(t.6.14===j){i=n[s+1]||n[n.S-1];t.p=e.4o(i,t.H)}m{i=n[s+1];t.p=s+1}}});q t.p},3m:9(){b e=d,t;7(e.U<0){t="2G";e.2H="Y"}m{t="V";e.2H="1l"}q t},4I:9(){b e=d;e.$k.z("h.Y",9(){e.Y()});e.$k.z("h.1l",9(){e.1l()});e.$k.z("h.1e",9(t,n){e.6.Q=n;e.1e();e.36="1e"});e.$k.z("h.W",9(){e.W();e.36="W"});e.$k.z("h.1i",9(t,n){e.1i(n)});e.$k.z("h.2j",9(t,n){e.2j(n)})},2x:9(){b e=d;7(e.6.2x===j&&e.F.13!==j&&e.6.Q!==c){e.$k.z("57",9(){e.W()});e.$k.z("58",9(){7(e.36!=="W"){e.1e()}})}},1I:9(){b t=d;7(t.6.1I===c){q c}1C(b n=0;n<t.G;n++){b i=e(t.$I[n]);7(i.w("h-1c")==="1c"){4q}b s=i.w("h-1K"),o=i.16(".5b"),u;7(B o.w("1X")!=="2F"){i.w("h-1c","1c");4q}7(i.w("h-1c")===r){o.3N();i.K("4s").w("h-1c","5e")}7(t.6.4t===j){u=s>=t.p}m{u=j}7(u&&s<t.p+t.6.v&&o.S){t.4u(i,o)}}},4u:9(e,t){9 s(){r+=1;7(n.2X(t.2U(0))||i===j){o()}m 7(r<=2v){19(s,2v)}m{o()}}9 o(){e.w("h-1c","1c").Z("4s");t.5j("w-1X");n.6.4x==="4y"?t.5m(5n):t.3L();7(B n.6.3r==="9"){n.6.3r.P(d,[n.$k])}}b n=d,r=0;7(t.5p("5q")==="5r"){t.A("5s-5t","5u("+t.w("1X")+")");b i=j}m{t[0].1X=t.w("1X")}s()},1A:9(){9 s(){i+=1;7(t.2X(n.2U(0))){o()}m 7(i<=2v){19(s,2v)}m{t.1U.A("3h","")}}9 o(){b n=e(t.$I[t.p]).3h();t.1U.A("3h",n+"T");7(!t.1U.1V("1A")){19(9(){t.1U.K("1A")},0)}}b t=d;b n=e(t.$I[t.p]).16("5w");7(n.2U(0)!==r){b i=0;s()}m{o()}},2X:9(e){7(!e.3O){q c}7(B e.4B!=="3b"&&e.4B==0){q c}q j},4n:9(){b t=d;7(t.6.37===j){t.$I.Z("2d")}t.1v=[];1C(b n=t.p;n<t.p+t.6.v;n++){t.1v.2D(n);7(t.6.37===j){e(t.$I[n]).K("2d")}}t.h.1v=t.1v},4w:9(e){b t=d;t.4E="h-"+e+"-5B";t.4F="h-"+e+"-2f"},4k:9(){9 u(e,t){q{2l:"5D",V:e+"T"}}b e=d;e.1G=j;b t=e.4E,n=e.4F,r=e.$I.1E(e.p),i=e.$I.1E(e.15),s=1N.4H(e.H[e.p])+e.H[e.15],o=1N.4H(e.H[e.p])+e.N/2;e.$L.K("h-1Y").A({"-1R-O-1Y":o+"T","-27-4J-1Y":o+"T","4J-1Y":o+"T"});b a="5I 5J 5K 5L";i.A(u(s,10)).K(t).z(a,9(){e.3C=j;i.R(a);e.32(i,t)});r.K(n).z(a,9(){e.2E=j;r.R(a);e.32(r,n)})},32:9(e,t){b n=d;e.A({2l:"",V:""}).Z(t);7(n.3C&&n.2E){n.$L.Z("h-1Y");n.3C=c;n.2E=c;n.1G=c}},4z:9(){b e=d;e.h={29:e.29,5P:e.$k,X:e.$X,I:e.$I,p:e.p,15:e.15,1v:e.1v,13:e.F.13,F:e.F,1t:e.1t}},4N:9(){b r=d;r.$k.R(".h h 1Z.40");e(n).R(".h h");e(t).R("47",r.3f)},1Q:9(){b e=d;7(e.$k.1S().S!==0){e.$L.3y();e.$X.3y().3y();7(e.D){e.D.3j()}}e.4N();e.$k.2s("2t",e.$k.w("h-4p")||"").2s("J",e.$k.w("h-4K"))},5T:9(){b e=d;e.W();18(e.1M);e.1Q();e.$k.5U()},5V:9(t){b n=d;b r=e.3K({},n.29,t);n.1Q();n.1J(r,n.$k)},5W:9(e,t){b n=d,i;7(!e){q c}7(n.$k.1S().S===0){n.$k.1k(e);n.1P();q c}n.1Q();7(t===r||t===-1){i=-1}m{i=t}7(i>=n.$X.S||i===-1){n.$X.1E(-1).5X(e)}m{n.$X.1E(i).5Y(e)}n.1P()},5Z:9(e){b t=d,n;7(t.$k.1S().S===0){q c}7(e===r||e===-1){n=-1}m{n=e}t.1Q();t.$X.1E(n).3j();t.1P()}};e.3A.2c=9(t){q d.2i(9(){7(e(d).w("h-1J")===j){q c}e(d).w("h-1J",j);b n=3i.3E(i);n.1J(t,d);e.w(d,"2c",n)})};e.3A.2c.6={v:5,17:c,1q:[60,4],21:[61,3],24:[62,2],25:c,26:[63,1],4b:c,49:c,1j:2J,1D:64,2u:65,Q:c,2x:c,2b:c,2T:["1l","Y"],2e:j,14:c,1s:j,38:c,2Z:j,48:2J,4a:t,1O:"h-66",28:"h-28",1I:c,4t:j,4x:"4y",1A:c,2I:c,3F:c,3v:j,22:j,23:j,37:c,2w:c,3p:c,3t:c,2M:c,39:c,1F:c,3z:c,3n:c,2R:c,3r:c}})(67,68,69)',62,382,'||||||options|if||function||var|false|this||||owl||true|elem||else|||currentItem|return|||||items|data|||on|css|typeof|maximumItem|owlControls|0px|browser|itemsAmount|positionsInArray|owlItems|class|addClass|owlWrapper|div|itemWidth|transform|apply|autoPlay|off|length|px|newRelativeX|left|stop|userItems|next|removeClass||newPosX|ev_types|isTouch|scrollPerPage|prevItem|find|itemsCustom|clearInterval|setTimeout|transition|disabled|loaded|null|play|target|translate3d|wrapper|goTo|slideSpeed|append|prev|width|preventDefault|paginationWrapper|page|itemsDesktop|autoPlayInterval|pagination|dragDirection|support3d|visibleItems|buttonPrev|css2slide|buttonNext|ms|autoHeight|swapSpeed|for|paginationSpeed|eq|beforeMove|isTransition|transition3d|lazyLoad|init|item|roundPages|checkVisible|Math|baseClass|setVars|unWrap|webkit|children|isCss3Finish|wrapperOuter|hasClass|prevArr|src|origin|mousedown||itemsDesktopSmall|mouseDrag|touchDrag|itemsTablet|itemsTabletSmall|itemsMobile|moz|theme|userOptions|touchend|navigation|owlCarousel|active|rewindNav|in|isCssFinish|html|each|jumpTo|rewind|position|sliding|mouseup|eachMoveUpdate|is|afterGo|ease|attr|style|rewindSpeed|100|transitionStyle|stopOnHover|addCssSpeed|opacity|orignalItems|all|pagesInArray|push|endCurrent|string|right|playDirection|jsonPath|200|pageX|touches|beforeInit|end|move|touchmove|dragging|startDragging|newPosY|navigationText|get|updateItems|touchstart|completeImg|logIn|responsive|targetElement|calculateAll|clearTransStyle|visible|watchVisibility|updateControls|hoverStatus|addClassActive|paginationNumbers|afterInit|checkPagination|undefined|offsetY|checkNavigation|offsetX|resizer|relativePos|height|Object|remove|apStatus|checkAp|moveDirection|afterAction|updateVars|beforeUpdate|Number|afterLazyLoad|grabbing|afterUpdate|click|dragBeforeAnimFinish|event|max|unwrap|afterMove|fn|originalEvent|endPrev|maximumPixels|create|jsonSuccess|wrap|eventTypes|removeTransition|doTranslate|extend|show|css2move|hide|complete|cssText|span|gestures|disabledEvents|updatePagination|loadContent|mousemove|touchcancel|start|buildButtons|buildPagination|disableTextSelect|pageY|min|loops|calculateWidth|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|srcElement|outer|drag|animate|setInterval|getNewPosition|reload|disable|singleItemTransition|closestItem|updatePosition|onVisibleItems|inArray|originalStyles|continue|block|loading|lazyFollow|lazyPreload|display|transitionTypes|lazyEffect|fade|owlStatus|moveEvents|naturalWidth|response|buildControls|outClass|inClass|onStartup|abs|customEvents|perspective|originalClasses|checkBrowser|wrapItems|clearEvents|_data|clickable|toggleClass|controls|stopImmediatePropagation|stopPropagation|msMaxTouchPoints|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|text|shift|onstartup|mouseover|mouseout|duration|round|lazyOwl|new|which|checked|createElement|destroyControls|buttons|5e3|removeAttr|match|numbers|fadeIn|400|clearTimeout|prop|tagName|DIV|background|image|url|prototype|img|sort|top|ontouchstart|dragstart|out|navigator|relative|appendTo|input|getJSON|textarea|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|returnValue|wrapAll|500|baseElement|select|wrapperWidth|option|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))
;
/*
 * Nivo Lightbox v1.0
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(e,t,n,r){function o(t,n){this.el=t;this.$el=e(this.el);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="nivoLightbox",s={effect:"fade",theme:"default",keyboardNav:true,onInit:function(){},beforeShowLightbox:function(){},afterShowLightbox:function(e){},beforeHideLightbox:function(){},afterHideLightbox:function(){},onPrev:function(e){},onNext:function(e){},errorMessage:"The requested content cannot be loaded. Please try again later."};o.prototype={init:function(){var t=this;this.$el.on("click",function(e){e.preventDefault();t.showLightbox()});if(this.options.keyboardNav){e("body").off("keyup").on("keyup",function(n){var r=n.keyCode?n.keyCode:n.which;if(r==27)t.destructLightbox();if(r==37)e(".nivo-lightbox-prev").trigger("click");if(r==39)e(".nivo-lightbox-next").trigger("click")})}this.options.onInit.call(this)},showLightbox:function(){var t=this;this.options.beforeShowLightbox.call(this);var n=this.constructLightbox();if(!n)return;var r=n.find(".nivo-lightbox-content");if(!r)return;var i=this.$el;e("body").addClass("nivo-lightbox-body-effect-"+this.options.effect);this.processContent(r,i);if(this.$el.attr("data-lightbox-gallery")){var t=this,s=e('[data-lightbox-gallery="'+this.$el.attr("data-lightbox-gallery")+'"]');e(".nivo-lightbox-nav").show();e(".nivo-lightbox-prev").off("click").on("click",function(n){n.preventDefault();var o=s.index(i);i=s.eq(o-1);if(!e(i).length)i=s.last();t.processContent(r,i);t.options.onPrev.call(this,[i])});e(".nivo-lightbox-next").off("click").on("click",function(n){n.preventDefault();var o=s.index(i);i=s.eq(o+1);if(!e(i).length)i=s.first();t.processContent(r,i);t.options.onNext.call(this,[i])})}setTimeout(function(){n.addClass("nivo-lightbox-open");t.options.afterShowLightbox.call(this,[n])},1)},processContent:function(n,r){var i=this;var s=r.attr("href");n.html("").addClass("nivo-lightbox-loading");if(this.isHidpi()&&r.attr("data-lightbox-hidpi")){s=r.attr("data-lightbox-hidpi")}if(s.match(/\.(jpeg|jpg|gif|png)$/)!=null){var o=e("<img>",{src:s});o.one("load",function(){var r=e('<div class="nivo-lightbox-image" />');r.append(o);n.html(r).removeClass("nivo-lightbox-loading");r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});e(t).resize(function(){r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"})})}).each(function(){if(this.complete)e(this).load()});o.error(function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")})}else if(video=s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=(\w+)|(\w+))/)){var u="",a="nivo-lightbox-video";if(video[1]=="youtube"){u="http://www.youtube.com/v/"+video[4];a="nivo-lightbox-youtube"}if(video[1]=="youtu"){u="http://www.youtube.com/v/"+video[3];a="nivo-lightbox-youtube"}if(video[1]=="vimeo"){u="http://player.vimeo.com/video/"+video[3];a="nivo-lightbox-vimeo"}if(u){var f=e("<iframe>",{src:u,"class":a,frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(f);f.load(function(){n.removeClass("nivo-lightbox-loading")})}}else if(r.attr("data-lightbox-type")=="ajax"){var i=this;e.ajax({url:s,cache:false,success:function(r){var i=e('<div class="nivo-lightbox-ajax" />');i.append(r);n.html(i).removeClass("nivo-lightbox-loading");if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}e(t).resize(function(){if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}})},error:function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")}})}else if(s.substring(0,1)=="#"){if(e(s).length){var l=e('<div class="nivo-lightbox-inline" />');l.append(e(s).clone().show());n.html(l).removeClass("nivo-lightbox-loading");if(l.outerHeight()<n.height()){l.css({position:"relative",top:"50%","margin-top":-(l.outerHeight()/2)+"px"})}e(t).resize(function(){if(l.outerHeight()<n.height()){l.css({position:"relative",top:"50%","margin-top":-(l.outerHeight()/2)+"px"})}})}else{var l=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(l).removeClass("nivo-lightbox-loading")}}else{var f=e("<iframe>",{src:s,"class":"nivo-lightbox-item",frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(f);f.load(function(){n.removeClass("nivo-lightbox-loading")})}if(r.attr("title")){var c=e("<span>",{"class":"nivo-lightbox-title"});c.text(r.attr("title"));e(".nivo-lightbox-title-wrap").html(c)}else{e(".nivo-lightbox-title-wrap").html("")}},constructLightbox:function(){if(e(".nivo-lightbox-overlay").length)return e(".nivo-lightbox-overlay");var t=e("<div>",{"class":"nivo-lightbox-overlay nivo-lightbox-theme-"+this.options.theme+" nivo-lightbox-effect-"+this.options.effect});var n=e("<div>",{"class":"nivo-lightbox-wrap"});var r=e("<div>",{"class":"nivo-lightbox-content"});var i=e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');var s=e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');var o=e("<div>",{"class":"nivo-lightbox-title-wrap"});var u=0;if(u)t.addClass("nivo-lightbox-ie");n.append(r);n.append(o);t.append(n);t.append(i);t.append(s);e("body").append(t);var a=this;t.on("click",function(t){if(t.target===this||e(t.target).hasClass("nivo-lightbox-content")||e(t.target).hasClass("nivo-lightbox-image"))a.destructLightbox()});s.on("click",function(e){e.preventDefault();a.destructLightbox()});return t},destructLightbox:function(){var t=this;this.options.beforeHideLightbox.call(this);e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");e(".nivo-lightbox-nav").hide();e("body").removeClass("nivo-lightbox-body-effect-"+t.options.effect);var n=0;if(n){e(".nivo-lightbox-overlay iframe").attr("src"," ");e(".nivo-lightbox-overlay iframe").remove()}e(".nivo-lightbox-prev").off("click");e(".nivo-lightbox-next").off("click");this.options.afterHideLightbox.call(this)},isHidpi:function(){var e="(-webkit-min-device-pixel-ratio: 1.5),							  (min--moz-device-pixel-ratio: 1.5),							  (-o-min-device-pixel-ratio: 3/2),							  (min-resolution: 1.5dppx)";if(t.devicePixelRatio>1)return true;if(t.matchMedia&&t.matchMedia(e).matches)return true;return false}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,i)){e.data(this,i,new o(this,t))}})}})(jQuery,window,document);
/**
 * Isotope v1.5.05
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2011 David DeSandro / Metafizzy
 */
/*jshint curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, undef: true */
/*global Modernizr: true, jQuery: true */
(function(a,b,c){"use strict";var d=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},e="Moz Webkit Khtml O Ms".split(" "),f=function(a){var b=document.documentElement.style,c;if(typeof b[a]=="string")return a;a=d(a);for(var f=0,g=e.length;f<g;f++){c=e[f]+a;if(typeof b[c]=="string")return c}},g=f("transform"),h=f("transitionProperty"),i={csstransforms:function(){return!!g},csstransforms3d:function(){var a=!!f("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),g=b('<div id="modernizr" />').appendTo("html");a=g.height()===3,g.remove(),e.remove()}return a},csstransitions:function(){return!!h}};if(a.Modernizr)for(var j in i)Modernizr.hasOwnProperty(j)||Modernizr.addTest(j,i[j]);else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},c=" ",d,e;for(e in i)d=i[e](),a[e]=d,c+=" "+(d?"":"no-")+e;b("html").addClass(c);return a}();if(Modernizr.csstransforms){var k=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},l=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=k[h](j);var l=i.translate||"",m=i.scale||"",n=l+m;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){l(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){l(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var m,n;Modernizr.csstransitions&&(m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[h],n=f("transitionDuration"));var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var q=["overflow","position","width","height"];b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(c){this.options=b.extend({},b.Isotope.settings,c),this.styleQueue=[],this.elemCount=0;var d=this.element[0].style;this.originalStyle={};for(var e=0,f=q.length;e<f;e++){var g=q[e];this.originalStyle[g]=d[g]||""}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems();var i=b(document.createElement("div")).prependTo(this.element);this.offset=i.position(),i.remove();var j=this;setTimeout(function(){j.element.addClass(j.options.containerClass)},0),this.options.resizable&&b(a).bind("smartresize.isotope",function(){j.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var e in a)c="_update"+d(e),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(a){case"css":case"none":this.isUsingJQueryAnimation=!1;break;case"jquery":this.isUsingJQueryAnimation=!0;break;default:this.isUsingJQueryAnimation=!Modernizr.csstransitions}this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a,b){b=b||(this.options.filter===""?"*":this.options.filter);if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",e=this.options.animationOptions,f,g,h,i;g=function(a,b){b.$el[d](b.style,e)};if(this._isInserting&&this.isUsingJQueryAnimation)g=function(a,b){f=b.$el.hasClass("no-transition")?"css":d,b.$el[f](b.style,e)};else if(c){var j=!1,k=this;h=!0,i=function(){j||(c.call(k.element,a),j=!0)};if(this.isUsingJQueryAnimation&&d==="animate")e.complete=i,h=!1;else if(Modernizr.csstransitions){var l=0,o=this.styleQueue[0].$el,p;while(!o.length){p=this.styleQueue[l++];if(!p)return;o=p.$el}var q=parseFloat(getComputedStyle(o[0])[n]);q>0&&(g=function(a,b){b.$el[d](b.style,e).one(m,i)},h=!1)}}b.each(this.styleQueue,g),h&&i(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a,!0);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){var b=this,c=function(){b.$allAtoms=b.$allAtoms.not(a),a.remove()};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(c)):c()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var c=this.usingTransforms;this.$allAtoms.removeClass(this.options.hiddenClass+" "+this.options.itemClass).each(function(){this.style.position="",this.style.top="",this.style.left="",this.style.opacity="",c&&(this.style[g]="")});var d=this.element[0].style;for(var e=0,f=q.length;e<f;e++){var h=q[e];d[h]=this.originalStyle[h]}this.element.unbind(".isotope").undelegate("."+this.options.hiddenClass,"click").removeClass(this.options.containerClass).removeData("isotope"),b(a).unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(a){--e<=0&&a.target.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var r=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)r("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){r("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
;
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);;
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));;
/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */

(function ($) {
  "use strict"; 

  function isInEffect (effect) {
    return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
  };

  function isOutEffect (effect) {
    return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
  };

  // custom get data api method
  function getData (node) {
    var attrs = node.attributes || []
      , data = {};

    if (!attrs.length) return data;

    $.each(attrs, function (i, attr) {
      if (/^data-in-*/.test(attr.nodeName)) {
        data.in = data.in || {};
        data.in[attr.nodeName.replace(/data-in-/, '')] = attr.nodeValue;
      } else if (/^data-out-*/.test(attr.nodeName)) {
        data.out = data.out || {};
        data.out[attr.nodeName.replace(/data-out-/, '')] = attr.nodeValue;
      } else if (/^data-*/.test(attr.nodeName)) {
        data[attr.nodeName] = attr.nodeValue;
      }
    })

    return data;
  }

  function shuffle (o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }

  function animate ($c, effect, cb) {
    $c.addClass('animated ' + effect)
      .css('visibility', 'visible')
      .show();

    $c.one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $c.removeClass('animated ' + effect);
        cb && cb();
    });
  }

  function animateChars ($chars, options, cb) {
    var that = this
      , count = $chars.length;

    if (!count) {
      cb && cb();
      return;
    } 

    if (options.shuffle) $chars = shuffle($chars);
    if (options.reverse) $chars = $chars.toArray().reverse();

    $.each($chars, function (i, c) {
      var $char = $(c);
      
      function complete () {
        if (isInEffect(options.effect)) {
          $char.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $char.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $char.text() ? 
        setTimeout(function () { animate($char, options.effect, complete) }, delay) :
        complete();
    });
  };

  var Textillate = function (element, options) {
    var base = this
      , $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);
      
      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();

      base.$current = $('<span>')
        .text(base.$texts.find(':first-child').html())
        .prependTo($element);

      if (isInEffect(options.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);

      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay)
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.triggerEvent = function (name) {
      var e = $.Event(name + '.tlt');
      $element.trigger(e, base);
      return e;
    };

    base.in = function (index, cb) {
      index = index || 0;
       
      var $elem = base.$texts.find(':nth-child(' + (index + 1) + ')')
        , options = $.extend({}, base.options, getData($elem))
        , $chars;

      $elem.addClass('current');

      base.triggerEvent('inAnimationBegin');

      base.$current
        .text($elem.html())
        .lettering('words');

      base.$current.find('[class^="word"]')
          .css({ 
            'display': 'inline-block',
            // fix for poor ios performance
            '-webkit-transform': 'translate3d(0,0,0)',
               '-moz-transform': 'translate3d(0,0,0)',
                 '-o-transform': 'translate3d(0,0,0)',
                    'transform': 'translate3d(0,0,0)'
          })
          .each(function () { $(this).lettering() });

      $chars = base.$current
        .find('[class^="char"]')
        .css('display', 'inline-block');

      if (isInEffect(options.in.effect)) {
        $chars.css('visibility', 'hidden');
      } else if (isOutEffect(options.in.effect)) {
        $chars.css('visibility', 'visible');
      }

      base.currentIndex = index;

      animateChars($chars, options.in, function () {
        base.triggerEvent('inAnimationEnd');
        if (options.in.callback) options.in.callback();
        if (cb) cb(base);
      });
    };

    base.out = function (cb) {
      var $elem = base.$texts.find(':nth-child(' + (base.currentIndex + 1) + ')')
        , $chars = base.$current.find('[class^="char"]')
        , options = $.extend({}, base.options, getData($elem));

      base.triggerEvent('outAnimationBegin');

      animateChars($chars, options.out, function () {
        $elem.removeClass('current');
        base.triggerEvent('outAnimationEnd');
        if (options.out.callback) options.out.callback();
        if (cb) cb(base);
      });
    };

    base.start = function (index) {
      base.triggerEvent('start');

      (function run (index) {
        base.in(index, function () {
          var length = base.$texts.children().length;

          index += 1;
          
          if (!base.options.loop && index >= length) {
            if (base.options.callback) base.options.callback();
            base.triggerEvent('end');
          } else {
            index = index % length;

            setTimeout(function () {
              base.out(function () {
                run(index)
              });
            }, base.options.minDisplayTime);
          }
        });
      }(index || 0));
    };

    base.init();
  }

  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('textillate')
        , options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings);

      if (!data) { 
        $this.data('textillate', (data = new Textillate(this, options)));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    })
  };
  
  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    autoStart: true,
    inEffects: [],
    outEffects: [ 'hinge' ],
    callback: function () {}
  };

}(jQuery));
;
/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);;
// Generated by CoffeeScript 1.6.3
/*
Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

Built on top of the jQuery library (http://jquery.com)

@source: http://github.com/rendro/easy-pie-chart/
@autor: Robert Fleischmann
@version: 1.2.2

Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
*/

(function($) {
  $.easyPieChart = function(el, options) {
    var addScaleLine, animateLine, drawLine, easeInOutQuad, rAF, renderBackground, renderScale, renderTrack,
      _this = this;
    this.el = el;
    this.$el = $(el);
    this.$el.data("easyPieChart", this);
    this.init = function() {
      var percent, scaleBy;
      _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
      percent = parseInt(_this.$el.data('percent'), 10);
      _this.percentage = 0;
      _this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
      _this.$el.append(_this.canvas);
      if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
        G_vmlCanvasManager.initElement(_this.canvas);
      }
      _this.ctx = _this.canvas.getContext('2d');
      if (window.devicePixelRatio > 1) {
        scaleBy = window.devicePixelRatio;
        $(_this.canvas).css({
          width: _this.options.size,
          height: _this.options.size
        });
        _this.canvas.width *= scaleBy;
        _this.canvas.height *= scaleBy;
        _this.ctx.scale(scaleBy, scaleBy);
      }
      _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
      _this.ctx.rotate(_this.options.rotate * Math.PI / 180);
      _this.$el.addClass('easyPieChart');
      _this.$el.css({
        width: _this.options.size,
        height: _this.options.size,
        lineHeight: "" + _this.options.size + "px"
      });
      _this.update(percent);
      return _this;
    };
    this.update = function(percent) {
      percent = parseFloat(percent) || 0;
      if (_this.options.animate === false) {
        drawLine(percent);
      } else {
        animateLine(_this.percentage, percent);
      }
      return _this;
    };
    renderScale = function() {
      var i, _i, _results;
      _this.ctx.fillStyle = _this.options.scaleColor;
      _this.ctx.lineWidth = 1;
      _results = [];
      for (i = _i = 0; _i <= 24; i = ++_i) {
        _results.push(addScaleLine(i));
      }
      return _results;
    };
    addScaleLine = function(i) {
      var offset;
      offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
      _this.ctx.save();
      _this.ctx.rotate(i * Math.PI / 12);
      _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
      _this.ctx.restore();
    };
    renderTrack = function() {
      var offset;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
      _this.ctx.closePath();
      _this.ctx.strokeStyle = _this.options.trackColor;
      _this.ctx.lineWidth = _this.options.lineWidth;
      _this.ctx.stroke();
    };
    renderBackground = function() {
      if (_this.options.scaleColor !== false) {
        renderScale();
      }
      if (_this.options.trackColor !== false) {
        renderTrack();
      }
    };
    drawLine = function(percent) {
      var offset;
      renderBackground();
      _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
      _this.ctx.lineCap = _this.options.lineCap;
      _this.ctx.lineWidth = _this.options.lineWidth;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.save();
      _this.ctx.rotate(-Math.PI / 2);
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
      _this.ctx.stroke();
      _this.ctx.restore();
    };
    rAF = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    })();
    animateLine = function(from, to) {
      var anim, startTime;
      _this.options.onStart.call(_this);
      _this.percentage = to;
      startTime = Date.now();
      anim = function() {
        var currentValue, process;
        process = Date.now() - startTime;
        if (process < _this.options.animate) {
          rAF(anim);
        }
        _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
        renderBackground.call(_this);
        currentValue = [easeInOutQuad(process, from, to - from, _this.options.animate)];
        _this.options.onStep.call(_this, currentValue);
        drawLine.call(_this, currentValue);
        if (process >= _this.options.animate) {
          return _this.options.onStop.call(_this, currentValue, to);
        }
      };
      rAF(anim);
    };
    easeInOutQuad = function(t, b, c, d) {
      var easeIn, easing;
      easeIn = function(t) {
        return Math.pow(t, 2);
      };
      easing = function(t) {
        if (t < 1) {
          return easeIn(t);
        } else {
          return 2 - easeIn((t / 2) * -2 + 2);
        }
      };
      t /= d / 2;
      return c / 2 * easing(t) + b;
    };
    return this.init();
  };
  $.easyPieChart.defaultOptions = {
    barColor: '#ef1e25',
    trackColor: '#f2f2f2',
    scaleColor: '#dfe0e0',
    lineCap: 'round',
    rotate: 0,
    size: 110,
    lineWidth: 3,
    animate: false,
    onStart: $.noop,
    onStop: $.noop,
    onStep: $.noop
  };
  $.fn.easyPieChart = function(options) {
    return $.each(this, function(i, el) {
      var $el, instanceOptions;
      $el = $(el);
      if (!$el.data('easyPieChart')) {
        instanceOptions = $.extend({}, options, $el.data());
        return $el.data('easyPieChart', new $.easyPieChart(el, instanceOptions));
      }
    });
  };
  return void 0;
})(jQuery);;
/* jquery.nicescroll 3.5.4 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var y=!1,C=!1,J=5E3,K=2E3,x=0,F=["ms","moz","webkit","o"],s=window.requestAnimationFrame||!1,v=window.cancelAnimationFrame||!1;if(!s)for(var L in F){var D=F[L];s||(s=window[D+"RequestAnimationFrame"]);v||(v=window[D+"CancelAnimationFrame"]||window[D+"CancelRequestAnimationFrame"])}var z=window.MutationObserver||window.WebKitMutationObserver||!1,G={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",
cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,
enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}()},E=!1,M=function(){if(E)return E;
var e=document.createElement("DIV"),b={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};b.isopera="opera"in window;b.isopera12=b.isopera&&"getUserMedia"in navigator;b.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);b.isie="all"in document&&"attachEvent"in e&&!b.isopera;b.isieold=b.isie&&!("msInterpolationMode"in e.style);b.isie7=b.isie&&!b.isieold&&(!("documentMode"in document)||7==document.documentMode);
b.isie8=b.isie&&"documentMode"in document&&8==document.documentMode;b.isie9=b.isie&&"performance"in window&&9<=document.documentMode;b.isie10=b.isie&&"performance"in window&&10<=document.documentMode;b.isie9mobile=/iemobile.9/i.test(navigator.userAgent);b.isie9mobile&&(b.isie9=!1);b.isie7mobile=!b.isie9mobile&&b.isie7&&/iemobile/i.test(navigator.userAgent);b.ismozilla="MozAppearance"in e.style;b.iswebkit="WebkitAppearance"in e.style;b.ischrome="chrome"in window;b.ischrome22=b.ischrome&&b.haspointerlock;
b.ischrome26=b.ischrome&&"transition"in e.style;b.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;b.hasmstouch=window.navigator.msPointerEnabled||!1;b.ismac=/^mac$/i.test(navigator.platform);b.isios=b.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);b.isios4=b.isios&&!("seal"in Object);b.isandroid=/android/i.test(navigator.userAgent);b.trstyle=!1;b.hastransform=!1;b.hastranslate3d=!1;b.transitionstyle=!1;b.hastransition=!1;b.transitionend=!1;for(var h=["transform",
"msTransform","webkitTransform","MozTransform","OTransform"],k=0;k<h.length;k++)if("undefined"!=typeof e.style[h[k]]){b.trstyle=h[k];break}b.hastransform=!1!=b.trstyle;b.hastransform&&(e.style[b.trstyle]="translate3d(1px,2px,3px)",b.hastranslate3d=/translate3d/.test(e.style[b.trstyle]));b.transitionstyle=!1;b.prefixstyle="";b.transitionend=!1;for(var h="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),l=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),
q="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),k=0;k<h.length;k++)if(h[k]in e.style){b.transitionstyle=h[k];b.prefixstyle=l[k];b.transitionend=q[k];break}b.ischrome26&&(b.prefixstyle=l[1]);b.hastransition=b.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(b.ischrome&&!b.ischrome22||b.isie)h=[];for(k=0;k<h.length;k++)if(l=h[k],e.style.cursor=l,e.style.cursor==l){h=l;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}b.cursorgrabvalue=
h;b.hasmousecapture="setCapture"in e;b.hasMutationObserver=!1!==z;return E=b},N=function(g,b){function h(){var c=a.win;if("zIndex"in c)return c.zIndex();for(;0<c.length&&9!=c[0].nodeType;){var b=c.css("zIndex");if(!isNaN(b)&&0!=b)return parseInt(b);c=c.parent()}return!1}function k(c,b,f){b=c.css(b);c=parseFloat(b);return isNaN(c)?(c=w[b]||0,f=3==c?f?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1,a.isie8&&c&&(c+=1),f?c:0):c}function l(c,b,f,e){a._bind(c,b,function(a){a=
a?a:window.event;var e={original:a,target:a.target||a.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==a.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){a.preventDefault?a.preventDefault():a.returnValue=!1;return!1},stopImmediatePropagation:function(){a.stopImmediatePropagation?a.stopImmediatePropagation():a.cancelBubble=!0}};"mousewheel"==b?(e.deltaY=-0.025*a.wheelDelta,a.wheelDeltaX&&(e.deltaX=-0.025*a.wheelDeltaX)):e.deltaY=a.detail;return f.call(c,e)},e)}function q(c,b,f){var e,d;
0==c.deltaMode?(e=-Math.floor(c.deltaX*(a.opt.mousescrollstep/54)),d=-Math.floor(c.deltaY*(a.opt.mousescrollstep/54))):1==c.deltaMode&&(e=-Math.floor(c.deltaX*a.opt.mousescrollstep),d=-Math.floor(c.deltaY*a.opt.mousescrollstep));b&&(a.opt.oneaxismousemode&&0==e&&d)&&(e=d,d=0);e&&(a.scrollmom&&a.scrollmom.stop(),a.lastdeltax+=e,a.debounced("mousewheelx",function(){var c=a.lastdeltax;a.lastdeltax=0;a.rail.drag||a.doScrollLeftBy(c)},15));if(d){if(a.opt.nativeparentscrolling&&f&&!a.ispage&&!a.zoomactive)if(0>
d){if(a.getScrollTop()>=a.page.maxh)return!0}else if(0>=a.getScrollTop())return!0;a.scrollmom&&a.scrollmom.stop();a.lastdeltay+=d;a.debounced("mousewheely",function(){var c=a.lastdeltay;a.lastdeltay=0;a.rail.drag||a.doScrollBy(c)},15)}c.stopImmediatePropagation();return c.preventDefault()}var a=this;this.version="3.5.4";this.name="nicescroll";this.me=b;this.opt={doc:e("body"),win:!1};e.extend(this.opt,G);this.opt.snapbackspeed=80;if(g)for(var p in a.opt)"undefined"!=typeof g[p]&&(a.opt[p]=g[p]);this.iddoc=
(this.doc=a.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==a.opt.win;this.win=a.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent=
"scroll"!=a.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.isrtlmode=!1;do this.id="ascrail"+K++;while(document.getElementById(this.id));this.hasmousefocus=
this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.wheelprevented=!1;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=M();var d=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=d.hastransform&&a.opt.hwacceleration)&&
a.haswrapper;this.istouchcapable=!1;d.cantouch&&(d.ischrome&&!d.isios&&!d.isandroid)&&(this.istouchcapable=!0,d.cantouch=!1);d.cantouch&&(d.ismozilla&&!d.isios&&!d.isandroid)&&(this.istouchcapable=!0,d.cantouch=!1);a.opt.enablemouselockapi||(d.hasmousecapture=!1,d.haspointerlock=!1);this.delayed=function(c,b,f,e){var d=a.delaylist[c],h=(new Date).getTime();if(!e&&d&&d.tt)return!1;d&&d.tt&&clearTimeout(d.tt);if(d&&d.last+f>h&&!d.tt)a.delaylist[c]={last:h+f,tt:setTimeout(function(){a&&(a.delaylist[c].tt=
0,b.call())},f)};else if(!d||!d.tt)a.delaylist[c]={last:h,tt:0},setTimeout(function(){b.call()},0)};this.debounced=function(c,b,f){var d=a.delaylist[c];(new Date).getTime();a.delaylist[c]=b;d||setTimeout(function(){var b=a.delaylist[c];a.delaylist[c]=!1;b.call()},f)};var r=!1;this.synched=function(c,b){a.synclist[c]=b;(function(){r||(s(function(){r=!1;for(c in a.synclist){var b=a.synclist[c];b&&b.call(a);a.synclist[c]=!1}}),r=!0)})();return c};this.unsynched=function(c){a.synclist[c]&&(a.synclist[c]=
!1)};this.css=function(c,b){for(var f in b)a.saved.css.push([c,f,c.css(f)]),c.css(f,b[f])};this.scrollTop=function(c){return"undefined"==typeof c?a.getScrollTop():a.setScrollTop(c)};this.scrollLeft=function(c){return"undefined"==typeof c?a.getScrollLeft():a.setScrollLeft(c)};BezierClass=function(a,b,f,d,e,h,k){this.st=a;this.ed=b;this.spd=f;this.p1=d||0;this.p2=e||1;this.p3=h||0;this.p4=k||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(a){return 3*a*a*(1-
a)},B3:function(a){return 3*a*(1-a)*(1-a)},B4:function(a){return(1-a)*(1-a)*(1-a)},getNow:function(){var a=1-((new Date).getTime()-this.ts)/this.spd,b=this.B2(a)+this.B3(a)+this.B4(a);return 0>a?this.ed:this.st+Math.round(this.df*b)},update:function(a,b){this.st=this.getNow();this.ed=a;this.spd=b;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};d.hastranslate3d&&d.isios&&this.doc.css("-webkit-backface-visibility",
"hidden");var t=function(){var c=a.doc.css(d.trstyle);return c&&"matrix"==c.substr(0,6)?c.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(c){if(!c){if(c=t())return 16==c.length?-c[13]:-c[5];if(a.timerscroll&&a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(c){if(!c){if(c=t())return 16==c.length?-c[12]:-c[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};
this.notifyScrollEvent=document.createEvent?function(a){var b=document.createEvent("UIEvents");b.initUIEvent("scroll",!1,!0,window,1);a.dispatchEvent(b)}:document.fireEvent?function(a){var b=document.createEventObject();a.fireEvent("onscroll");b.cancelBubble=!0}:function(a,b){};d.hastranslate3d&&a.opt.enabletranslate3d?(this.setScrollTop=function(c,b){a.doc.translate.y=c;a.doc.translate.ty=-1*c+"px";a.doc.css(d.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");b||a.notifyScrollEvent(a.win[0])},
this.setScrollLeft=function(c,b){a.doc.translate.x=c;a.doc.translate.tx=-1*c+"px";a.doc.css(d.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");b||a.notifyScrollEvent(a.win[0])}):(this.setScrollTop=function(c,b){a.doc.translate.y=c;a.doc.translate.ty=-1*c+"px";a.doc.css(d.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");b||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(c,b){a.doc.translate.x=c;a.doc.translate.tx=-1*c+"px";a.doc.css(d.trstyle,
"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");b||a.notifyScrollEvent(a.win[0])})}else this.getScrollTop=function(){return a.docscroll.scrollTop()},this.setScrollTop=function(c){return a.docscroll.scrollTop(c)},this.getScrollLeft=function(){return a.docscroll.scrollLeft()},this.setScrollLeft=function(c){return a.docscroll.scrollLeft(c)};this.getTarget=function(a){return!a?!1:a.target?a.target:a.srcElement?a.srcElement:!1};this.hasParent=function(a,b){if(!a)return!1;for(var f=a.target||
a.srcElement||a||!1;f&&f.id!=b;)f=f.parentNode||!1;return!1!==f};var w={thin:1,medium:3,thick:5};this.getOffset=function(){if(a.isfixed)return{top:parseFloat(a.win.css("top")),left:parseFloat(a.win.css("left"))};if(!a.viewport)return a.win.offset();var c=a.win.offset(),b=a.viewport.offset();return{top:c.top-b.top+a.viewport.scrollTop(),left:c.left-b.left+a.viewport.scrollLeft()}};this.updateScrollBar=function(c){if(a.ishwscroll)a.rail.css({height:a.win.innerHeight()}),a.railh&&a.railh.css({width:a.win.innerWidth()});
else{var b=a.getOffset(),f=b.top,d=b.left,f=f+k(a.win,"border-top-width",!0);a.win.outerWidth();a.win.innerWidth();var d=d+(a.rail.align?a.win.outerWidth()-k(a.win,"border-right-width")-a.rail.width:k(a.win,"border-left-width")),e=a.opt.railoffset;e&&(e.top&&(f+=e.top),a.rail.align&&e.left&&(d+=e.left));a.locked||a.rail.css({top:f,left:d,height:c?c.h:a.win.innerHeight()});a.zoom&&a.zoom.css({top:f+1,left:1==a.rail.align?d-20:d+a.rail.width+4});a.railh&&!a.locked&&(f=b.top,d=b.left,c=a.railh.align?
f+k(a.win,"border-top-width",!0)+a.win.innerHeight()-a.railh.height:f+k(a.win,"border-top-width",!0),d+=k(a.win,"border-left-width"),a.railh.css({top:c,left:d,width:a.railh.width}))}};this.doRailClick=function(c,b,f){var d;a.locked||(a.cancelEvent(c),b?(b=f?a.doScrollLeft:a.doScrollTop,d=f?(c.pageX-a.railh.offset().left-a.cursorwidth/2)*a.scrollratio.x:(c.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y,b(d)):(b=f?a.doScrollLeftBy:a.doScrollBy,d=f?a.scroll.x:a.scroll.y,c=f?c.pageX-a.railh.offset().left:
c.pageY-a.rail.offset().top,f=f?a.view.w:a.view.h,d>=c?b(f):b(-f)))};a.hasanimationframe=s;a.hascancelanimationframe=v;a.hasanimationframe?a.hascancelanimationframe||(v=function(){a.cancelAnimationFrame=!0}):(s=function(a){return setTimeout(a,15-Math.floor(+new Date/1E3)%16)},v=clearInterval);this.init=function(){a.saved.css=[];if(d.isie7mobile||d.isoperamini)return!0;d.hasmstouch&&a.css(a.ispage?e("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";a.zindex=!a.ispage&&"auto"==a.opt.zindex?
h()||"auto":a.opt.zindex;!a.ispage&&"auto"!=a.zindex&&a.zindex>x&&(x=a.zindex);a.isie&&(0==a.zindex&&"auto"==a.opt.zindex)&&(a.zindex="auto");if(!a.ispage||!d.cantouch&&!d.isieold&&!d.isie9mobile){var c=a.docscroll;a.ispage&&(c=a.haswrapper?a.win:a.doc);d.isie9mobile||a.css(c,{"overflow-y":"hidden"});a.ispage&&d.isie7&&("BODY"==a.doc[0].nodeName?a.css(e("html"),{"overflow-y":"hidden"}):"HTML"==a.doc[0].nodeName&&a.css(e("body"),{"overflow-y":"hidden"}));d.isios&&(!a.ispage&&!a.haswrapper)&&a.css(e("body"),
{"-webkit-overflow-scrolling":"touch"});var b=e(document.createElement("div"));b.css({position:"relative",top:0,"float":"right",width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});b.hborder=parseFloat(b.outerHeight()-b.innerHeight());a.cursor=b;var f=e(document.createElement("div"));
f.attr("id",a.id);f.addClass("nicescroll-rails");var u,k,g=["left","right"],l;for(l in g)k=g[l],(u=a.opt.railpadding[k])?f.css("padding-"+k,u+"px"):a.opt.railpadding[k]=0;f.append(b);f.width=Math.max(parseFloat(a.opt.cursorwidth),b.outerWidth())+a.opt.railpadding.left+a.opt.railpadding.right;f.css({width:f.width+"px",zIndex:a.zindex,background:a.opt.background,cursor:"default"});f.visibility=!0;f.scrollable=!0;f.align="left"==a.opt.railalign?0:1;a.rail=f;b=a.rail.drag=!1;a.opt.boxzoom&&(!a.ispage&&
!d.isieold)&&(b=document.createElement("div"),a.bind(b,"click",a.doZoom),a.zoom=e(b),a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),a.opt.dblclickzoom&&a.bind(a.win,"dblclick",a.doZoom),d.cantouch&&a.opt.gesturezoom&&(a.ongesturezoom=function(c){1.5<c.scale&&a.doZoomIn(c);0.8>c.scale&&a.doZoomOut(c);return a.cancelEvent(c)},a.bind(a.win,"gestureend",a.ongesturezoom)));a.railh=!1;if(a.opt.horizrailenabled){a.css(c,
{"overflow-x":"hidden"});b=e(document.createElement("div"));b.css({position:"relative",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});b.wborder=parseFloat(b.outerWidth()-b.innerWidth());a.cursorh=b;var m=e(document.createElement("div"));m.attr("id",a.id+"-hr");m.addClass("nicescroll-rails");
m.height=Math.max(parseFloat(a.opt.cursorwidth),b.outerHeight());m.css({height:m.height+"px",zIndex:a.zindex,background:a.opt.background});m.append(b);m.visibility=!0;m.scrollable=!0;m.align="top"==a.opt.railvalign?0:1;a.railh=m;a.railh.drag=!1}a.ispage?(f.css({position:"fixed",top:"0px",height:"100%"}),f.align?f.css({right:"0px"}):f.css({left:"0px"}),a.body.append(f),a.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),a.body.append(m))):(a.ishwscroll?
("static"==a.win.css("position")&&a.css(a.win,{position:"relative"}),c="HTML"==a.win[0].nodeName?a.body:a.win,a.zoom&&(a.zoom.css({position:"absolute",top:1,right:0,"margin-right":f.width+4}),c.append(a.zoom)),f.css({position:"absolute",top:0}),f.align?f.css({right:0}):f.css({left:0}),c.append(f),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),c.append(m))):(a.isfixed="fixed"==a.win.css("position"),c=a.isfixed?"fixed":"absolute",a.isfixed||(a.viewport=a.getViewport(a.win[0])),
a.viewport&&(a.body=a.viewport,!1==/fixed|relative|absolute/.test(a.viewport.css("position"))&&a.css(a.viewport,{position:"relative"})),f.css({position:c}),a.zoom&&a.zoom.css({position:c}),a.updateScrollBar(),a.body.append(f),a.zoom&&a.body.append(a.zoom),a.railh&&(m.css({position:c}),a.body.append(m))),d.isios&&a.css(a.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),d.isie&&a.opt.disableoutline&&a.win.attr("hideFocus","true"),d.iswebkit&&a.opt.disableoutline&&
a.win.css({outline:"none"}));!1===a.opt.autohidemode?(a.autohidedom=!1,a.rail.css({opacity:a.opt.cursoropacitymax}),a.railh&&a.railh.css({opacity:a.opt.cursoropacitymax})):!0===a.opt.autohidemode||"leave"===a.opt.autohidemode?(a.autohidedom=e().add(a.rail),d.isie8&&(a.autohidedom=a.autohidedom.add(a.cursor)),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh)),a.railh&&d.isie8&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"scroll"==a.opt.autohidemode?(a.autohidedom=e().add(a.rail),a.railh&&(a.autohidedom=
a.autohidedom.add(a.railh))):"cursor"==a.opt.autohidemode?(a.autohidedom=e().add(a.cursor),a.railh&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"hidden"==a.opt.autohidemode&&(a.autohidedom=!1,a.hide(),a.locked=!1);if(d.isie9mobile)a.scrollmom=new H(a),a.onmangotouch=function(c){c=a.getScrollTop();var b=a.getScrollLeft();if(c==a.scrollmom.lastscrolly&&b==a.scrollmom.lastscrollx)return!0;var f=c-a.mangotouch.sy,d=b-a.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(f,2)))){var n=0>
f?-1:1,e=0>d?-1:1,h=+new Date;a.mangotouch.lazy&&clearTimeout(a.mangotouch.lazy);80<h-a.mangotouch.tm||a.mangotouch.dry!=n||a.mangotouch.drx!=e?(a.scrollmom.stop(),a.scrollmom.reset(b,c),a.mangotouch.sy=c,a.mangotouch.ly=c,a.mangotouch.sx=b,a.mangotouch.lx=b,a.mangotouch.dry=n,a.mangotouch.drx=e,a.mangotouch.tm=h):(a.scrollmom.stop(),a.scrollmom.update(a.mangotouch.sx-d,a.mangotouch.sy-f),a.mangotouch.tm=h,f=Math.max(Math.abs(a.mangotouch.ly-c),Math.abs(a.mangotouch.lx-b)),a.mangotouch.ly=c,a.mangotouch.lx=
b,2<f&&(a.mangotouch.lazy=setTimeout(function(){a.mangotouch.lazy=!1;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)))}},f=a.getScrollTop(),m=a.getScrollLeft(),a.mangotouch={sy:f,ly:f,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},a.bind(a.docscroll,"scroll",a.onmangotouch);else{if(d.cantouch||a.istouchcapable||a.opt.touchbehavior||d.hasmstouch){a.scrollmom=new H(a);a.ontouchstart=function(c){if(c.pointerType&&2!=c.pointerType)return!1;a.hasmoving=!1;if(!a.locked){if(d.hasmstouch)for(var b=
c.target?c.target:!1;b;){var f=e(b).getNiceScroll();if(0<f.length&&f[0].me==a.me)break;if(0<f.length)return!1;if("DIV"==b.nodeName&&b.id==a.id)break;b=b.parentNode?b.parentNode:!1}a.cancelScroll();if((b=a.getTarget(c))&&/INPUT/i.test(b.nodeName)&&/range/i.test(b.type))return a.stopPropagation(c);!("clientX"in c)&&"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);a.forcescreen&&(f=c,c={original:c.original?c.original:c},c.clientX=f.screenX,c.clientY=
f.screenY);a.rail.drag={x:c.clientX,y:c.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:!1};if(a.ispage||!a.opt.directionlockdeadzone)a.rail.drag.dl="f";else{var f=e(window).width(),n=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),n=Math.max(0,k-n),f=Math.max(0,h-f);a.rail.drag.ck=!a.rail.scrollable&&a.railh.scrollable?0<n?"v":!1:a.rail.scrollable&&
!a.railh.scrollable?0<f?"h":!1:!1;a.rail.drag.ck||(a.rail.drag.dl="f")}a.opt.touchbehavior&&(a.isiframe&&d.isie)&&(f=a.win.position(),a.rail.drag.x+=f.left,a.rail.drag.y+=f.top);a.hasmoving=!1;a.lastmouseup=!1;a.scrollmom.reset(c.clientX,c.clientY);if(!d.cantouch&&!this.istouchcapable&&!d.hasmstouch){if(!b||!/INPUT|SELECT|TEXTAREA/i.test(b.nodeName))return!a.ispage&&d.hasmousecapture&&b.setCapture(),a.opt.touchbehavior?(b.onclick&&!b._onclick&&(b._onclick=b.onclick,b.onclick=function(c){if(a.hasmoving)return!1;
b._onclick.call(this,c)}),a.cancelEvent(c)):a.stopPropagation(c);/SUBMIT|CANCEL|BUTTON/i.test(e(b).attr("type"))&&(pc={tg:b,click:!1},a.preventclick=pc)}}};a.ontouchend=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(a.rail.drag&&2==a.rail.drag.pt&&(a.scrollmom.doMomentum(),a.rail.drag=!1,a.hasmoving&&(a.lastmouseup=!0,a.hideCursor(),d.hasmousecapture&&document.releaseCapture(),!d.cantouch)))return a.cancelEvent(c)};var q=a.opt.touchbehavior&&a.isiframe&&!d.hasmousecapture;a.ontouchmove=
function(c,b){if(c.pointerType&&2!=c.pointerType)return!1;if(a.rail.drag&&2==a.rail.drag.pt){if(d.cantouch&&"undefined"==typeof c.original)return!0;a.hasmoving=!0;a.preventclick&&!a.preventclick.click&&(a.preventclick.click=a.preventclick.tg.onclick||!1,a.preventclick.tg.onclick=a.onpreventclick);c=e.extend({original:c},c);"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);if(a.forcescreen){var f=c;c={original:c.original?c.original:c};c.clientX=f.screenX;
c.clientY=f.screenY}f=ofy=0;if(q&&!b){var n=a.win.position(),f=-n.left;ofy=-n.top}var h=c.clientY+ofy,n=h-a.rail.drag.y,k=c.clientX+f,u=k-a.rail.drag.x,g=a.rail.drag.st-n;a.ishwscroll&&a.opt.bouncescroll?0>g?g=Math.round(g/2):g>a.page.maxh&&(g=a.page.maxh+Math.round((g-a.page.maxh)/2)):(0>g&&(h=g=0),g>a.page.maxh&&(g=a.page.maxh,h=0));if(a.railh&&a.railh.scrollable){var l=a.rail.drag.sl-u;a.ishwscroll&&a.opt.bouncescroll?0>l?l=Math.round(l/2):l>a.page.maxw&&(l=a.page.maxw+Math.round((l-a.page.maxw)/
2)):(0>l&&(k=l=0),l>a.page.maxw&&(l=a.page.maxw,k=0))}f=!1;if(a.rail.drag.dl)f=!0,"v"==a.rail.drag.dl?l=a.rail.drag.sl:"h"==a.rail.drag.dl&&(g=a.rail.drag.st);else{var n=Math.abs(n),u=Math.abs(u),m=a.opt.directionlockdeadzone;if("v"==a.rail.drag.ck){if(n>m&&u<=0.3*n)return a.rail.drag=!1,!0;u>m&&(a.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==a.rail.drag.ck){if(u>m&&n<=0.3*u)return a.rail.drag=!1,!0;n>m&&(a.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}a.synched("touchmove",
function(){a.rail.drag&&2==a.rail.drag.pt&&(a.prepareTransition&&a.prepareTransition(0),a.rail.scrollable&&a.setScrollTop(g),a.scrollmom.update(k,h),a.railh&&a.railh.scrollable?(a.setScrollLeft(l),a.showCursor(g,l)):a.showCursor(g),d.isie10&&document.selection.clear())});d.ischrome&&a.istouchcapable&&(f=!1);if(f)return a.cancelEvent(c)}}}a.onmousedown=function(c,b){if(!(a.rail.drag&&1!=a.rail.drag.pt)){if(a.locked)return a.cancelEvent(c);a.cancelScroll();a.rail.drag={x:c.clientX,y:c.clientY,sx:a.scroll.x,
sy:a.scroll.y,pt:1,hr:!!b};var f=a.getTarget(c);!a.ispage&&d.hasmousecapture&&f.setCapture();a.isiframe&&!d.hasmousecapture&&(a.saved.csspointerevents=a.doc.css("pointer-events"),a.css(a.doc,{"pointer-events":"none"}));a.hasmoving=!1;return a.cancelEvent(c)}};a.onmouseup=function(c){if(a.rail.drag&&(d.hasmousecapture&&document.releaseCapture(),a.isiframe&&!d.hasmousecapture&&a.doc.css("pointer-events",a.saved.csspointerevents),1==a.rail.drag.pt))return a.rail.drag=!1,a.hasmoving&&a.triggerScrollEnd(),
a.cancelEvent(c)};a.onmousemove=function(c){if(a.rail.drag&&1==a.rail.drag.pt){if(d.ischrome&&0==c.which)return a.onmouseup(c);a.cursorfreezed=!0;a.hasmoving=!0;if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(c.clientX-a.rail.drag.x);0>a.scroll.x&&(a.scroll.x=0);var b=a.scrollvaluemaxw;a.scroll.x>b&&(a.scroll.x=b)}else a.scroll.y=a.rail.drag.sy+(c.clientY-a.rail.drag.y),0>a.scroll.y&&(a.scroll.y=0),b=a.scrollvaluemax,a.scroll.y>b&&(a.scroll.y=b);a.synched("mousemove",function(){a.rail.drag&&1==a.rail.drag.pt&&
(a.showCursor(),a.rail.drag.hr?a.doScrollLeft(Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed))});return a.cancelEvent(c)}};if(d.cantouch||a.opt.touchbehavior)a.onpreventclick=function(c){if(a.preventclick)return a.preventclick.tg.onclick=a.preventclick.click,a.preventclick=!1,a.cancelEvent(c)},a.bind(a.win,"mousedown",a.ontouchstart),a.onclick=d.isios?!1:function(c){return a.lastmouseup?(a.lastmouseup=!1,a.cancelEvent(c)):
!0},a.opt.grabcursorenabled&&d.cursorgrabvalue&&(a.css(a.ispage?a.doc:a.win,{cursor:d.cursorgrabvalue}),a.css(a.rail,{cursor:d.cursorgrabvalue}));else{var p=function(c){if(a.selectiondrag){if(c){var b=a.win.outerHeight();c=c.pageY-a.selectiondrag.top;0<c&&c<b&&(c=0);c>=b&&(c-=b);a.selectiondrag.df=c}0!=a.selectiondrag.df&&(a.doScrollBy(2*-Math.floor(a.selectiondrag.df/6)),a.debounced("doselectionscroll",function(){p()},50))}};a.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:
"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};a.onselectionstart=function(c){a.ispage||(a.selectiondrag=a.win.offset())};a.onselectionend=function(c){a.selectiondrag=!1};a.onselectiondrag=function(c){a.selectiondrag&&a.hasTextSelected()&&a.debounced("selectionscroll",function(){p(c)},250)}}d.hasmstouch&&(a.css(a.rail,{"-ms-touch-action":"none"}),a.css(a.cursor,{"-ms-touch-action":"none"}),a.bind(a.win,"MSPointerDown",a.ontouchstart),a.bind(document,
"MSPointerUp",a.ontouchend),a.bind(document,"MSPointerMove",a.ontouchmove),a.bind(a.cursor,"MSGestureHold",function(a){a.preventDefault()}),a.bind(a.cursor,"contextmenu",function(a){a.preventDefault()}));this.istouchcapable&&(a.bind(a.win,"touchstart",a.ontouchstart),a.bind(document,"touchend",a.ontouchend),a.bind(document,"touchcancel",a.ontouchend),a.bind(document,"touchmove",a.ontouchmove));a.bind(a.cursor,"mousedown",a.onmousedown);a.bind(a.cursor,"mouseup",a.onmouseup);a.railh&&(a.bind(a.cursorh,
"mousedown",function(c){a.onmousedown(c,!0)}),a.bind(a.cursorh,"mouseup",a.onmouseup));if(a.opt.cursordragontouch||!d.cantouch&&!a.opt.touchbehavior)a.rail.css({cursor:"default"}),a.railh&&a.railh.css({cursor:"default"}),a.jqbind(a.rail,"mouseenter",function(){if(!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.rail,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.rail,"click",function(c){a.doRailClick(c,
!1,!1)}),a.bind(a.rail,"dblclick",function(c){a.doRailClick(c,!0,!1)}),a.bind(a.cursor,"click",function(c){a.cancelEvent(c)}),a.bind(a.cursor,"dblclick",function(c){a.cancelEvent(c)})),a.railh&&(a.jqbind(a.railh,"mouseenter",function(){if(!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.railh,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.railh,"click",function(c){a.doRailClick(c,!1,!0)}),a.bind(a.railh,
"dblclick",function(c){a.doRailClick(c,!0,!0)}),a.bind(a.cursorh,"click",function(c){a.cancelEvent(c)}),a.bind(a.cursorh,"dblclick",function(c){a.cancelEvent(c)})));!d.cantouch&&!a.opt.touchbehavior?(a.bind(d.hasmousecapture?a.win:document,"mouseup",a.onmouseup),a.bind(document,"mousemove",a.onmousemove),a.onclick&&a.bind(document,"click",a.onclick),!a.ispage&&a.opt.enablescrollonselection&&(a.bind(a.win[0],"mousedown",a.onselectionstart),a.bind(document,"mouseup",a.onselectionend),a.bind(a.cursor,
"mouseup",a.onselectionend),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onselectionend),a.bind(document,"mousemove",a.onselectiondrag)),a.zoom&&(a.jqbind(a.zoom,"mouseenter",function(){a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.zoom,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}))):(a.bind(d.hasmousecapture?a.win:document,"mouseup",a.ontouchend),a.bind(document,"mousemove",a.ontouchmove),a.onclick&&a.bind(document,"click",a.onclick),a.opt.cursordragontouch&&
(a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mousemove",a.onmousemove),a.cursorh&&a.bind(a.cursorh,"mousedown",function(c){a.onmousedown(c,!0)}),a.cursorh&&a.bind(a.cursorh,"mousemove",a.onmousemove)));a.opt.enablemousewheel&&(a.isiframe||a.bind(d.isie&&a.ispage?document:a.win,"mousewheel",a.onmousewheel),a.bind(a.rail,"mousewheel",a.onmousewheel),a.railh&&a.bind(a.railh,"mousewheel",a.onmousewheelhr));!a.ispage&&(!d.cantouch&&!/HTML|^BODY/.test(a.win[0].nodeName))&&(a.win.attr("tabindex")||
a.win.attr({tabindex:J++}),a.jqbind(a.win,"focus",function(c){y=a.getTarget(c).id||!0;a.hasfocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"blur",function(c){y=!1;a.hasfocus=!1}),a.jqbind(a.win,"mouseenter",function(c){C=a.getTarget(c).id||!0;a.hasmousefocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"mouseleave",function(){C=!1;a.hasmousefocus=!1;a.rail.drag||a.hideCursor()}))}a.onkeypress=function(c){if(a.locked&&0==a.page.maxh)return!0;c=c?c:window.e;var b=a.getTarget(c);
if(b&&/INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName)&&(!b.getAttribute("type")&&!b.type||!/submit|button|cancel/i.tp)||e(b).attr("contenteditable"))return!0;if(a.hasfocus||a.hasmousefocus&&!y||a.ispage&&!y&&!C){b=c.keyCode;if(a.locked&&27!=b)return a.cancelEvent(c);var f=c.ctrlKey||!1,n=c.shiftKey||!1,d=!1;switch(b){case 38:case 63233:a.doScrollBy(72);d=!0;break;case 40:case 63235:a.doScrollBy(-72);d=!0;break;case 37:case 63232:a.railh&&(f?a.doScrollLeft(0):a.doScrollLeftBy(72),d=!0);break;case 39:case 63234:a.railh&&
(f?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-72),d=!0);break;case 33:case 63276:a.doScrollBy(a.view.h);d=!0;break;case 34:case 63277:a.doScrollBy(-a.view.h);d=!0;break;case 36:case 63273:a.railh&&f?a.doScrollPos(0,0):a.doScrollTo(0);d=!0;break;case 35:case 63275:a.railh&&f?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);d=!0;break;case 32:a.opt.spacebarenabled&&(n?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h),d=!0);break;case 27:a.zoomactive&&(a.doZoom(),d=!0)}if(d)return a.cancelEvent(c)}};
a.opt.enablekeyboard&&a.bind(document,d.isopera&&!d.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(c){c.ctrlKey&&(a.wheelprevented=!0)});a.bind(document,"keyup",function(c){c.ctrlKey||(a.wheelprevented=!1)});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(d.ischrome&&!a.ispage&&!a.haswrapper){var r=a.win.attr("style"),f=parseFloat(a.win.css("width"))+1;a.win.css("width",f);a.synched("chromefix",
function(){a.win.attr("style",r)})}a.onAttributeChange=function(c){a.lazyResize(250)};!a.ispage&&!a.haswrapper&&(!1!==z?(a.observer=new z(function(c){c.forEach(a.onAttributeChange)}),a.observer.observe(a.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),a.observerremover=new z(function(c){c.forEach(function(c){if(0<c.removedNodes.length)for(var b in c.removedNodes)if(c.removedNodes[b]==a.win[0])return a.remove()})}),a.observerremover.observe(a.win[0].parentNode,{childList:!0,characterData:!1,
attributes:!1,subtree:!1})):(a.bind(a.win,d.isie&&!d.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange),d.isie9&&a.win[0].attachEvent("onpropertychange",a.onAttributeChange),a.bind(a.win,"DOMNodeRemoved",function(c){c.target==a.win[0]&&a.remove()})));!a.ispage&&a.opt.boxzoom&&a.bind(window,"resize",a.resizeZoom);a.istextarea&&a.bind(a.win,"mouseup",a.lazyResize);a.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var I=function(c){a.iframexd=!1;try{var b="contentDocument"in this?this.contentDocument:
this.contentWindow.document}catch(f){a.iframexd=!0,b=!1}if(a.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;a.forcescreen=!0;a.isiframe&&(a.iframe={doc:e(b),html:a.doc.contents().find("html")[0],body:a.doc.contents().find("body")[0]},a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}},a.docscroll=e(a.iframe.body));!d.isios&&(a.opt.iframeautoresize&&
!a.isiframe)&&(a.win.scrollTop(0),a.doc.height(""),c=Math.max(b.getElementsByTagName("html")[0].scrollHeight,b.body.scrollHeight),a.doc.height(c));a.lazyResize(30);d.isie7&&a.css(e(a.iframe.html),{"overflow-y":"hidden"});a.css(e(a.iframe.body),{"overflow-y":"hidden"});d.isios&&a.haswrapper&&a.css(e(b.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in this?a.bind(this.contentWindow,"scroll",a.onscroll):a.bind(b,"scroll",a.onscroll);a.opt.enablemousewheel&&a.bind(b,"mousewheel",a.onmousewheel);
a.opt.enablekeyboard&&a.bind(b,d.isopera?"keypress":"keydown",a.onkeypress);if(d.cantouch||a.opt.touchbehavior)a.bind(b,"mousedown",a.ontouchstart),a.bind(b,"mousemove",function(c){a.ontouchmove(c,!0)}),a.opt.grabcursorenabled&&d.cursorgrabvalue&&a.css(e(b.body),{cursor:d.cursorgrabvalue});a.bind(b,"mouseup",a.ontouchend);a.zoom&&(a.opt.dblclickzoom&&a.bind(b,"dblclick",a.doZoom),a.ongesturezoom&&a.bind(b,"gestureend",a.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&
setTimeout(function(){I.call(a.doc[0],!1)},500);a.bind(this.doc,"load",I)}};this.showCursor=function(c,b){a.cursortimeout&&(clearTimeout(a.cursortimeout),a.cursortimeout=0);if(a.rail){a.autohidedom&&(a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax}),a.cursoractive=!0);if(!a.rail.drag||1!=a.rail.drag.pt)"undefined"!=typeof c&&!1!==c&&(a.scroll.y=Math.round(1*c/a.scrollratio.y)),"undefined"!=typeof b&&(a.scroll.x=Math.round(1*b/a.scrollratio.x));a.cursor.css({height:a.cursorheight,top:a.scroll.y});
a.cursorh&&(!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:a.scroll.x+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:a.scroll.x}),a.cursoractive=!0);a.zoom&&a.zoom.stop().css({opacity:a.opt.cursoropacitymax})}};this.hideCursor=function(c){!a.cursortimeout&&(a.rail&&a.autohidedom&&!(a.hasmousefocus&&"leave"==a.opt.autohidemode))&&(a.cursortimeout=setTimeout(function(){if(!a.rail.active||!a.showonmouseevent)a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin}),
a.zoom&&a.zoom.stop().animate({opacity:a.opt.cursoropacitymin}),a.cursoractive=!1;a.cursortimeout=0},c||a.opt.hidecursordelay))};this.noticeCursor=function(c,b,f){a.showCursor(b,f);a.rail.active||a.hideCursor(c)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+
parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(c,b){if(!a||!a.win)return!1;if(!a.haswrapper&&!a.ispage){if("none"==a.win.css("display"))return a.visibility&&a.hideRail().hideRailHr(),!1;!a.hidden&&!a.visibility&&a.showRail().showRailHr()}var f=a.page.maxh,d=a.page.maxw,e=a.view.w;a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),
h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=b?b:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==f&&a.page.maxw==d&&a.view.w==e){if(a.ispage)return a;f=a.win.offset();if(a.lastposition&&(d=a.lastposition,d.top==f.top&&d.left==f.left))return a;a.lastposition=f}0==a.page.maxh?(a.hideRail(),a.scrollvaluemax=0,a.scroll.y=0,a.scrollratio.y=0,a.cursorheight=0,a.setScrollTop(0),a.rail.scrollable=!1):a.rail.scrollable=
!0;0==a.page.maxw?(a.hideRailHr(),a.scrollvaluemaxw=0,a.scroll.x=0,a.scrollratio.x=0,a.cursorwidth=0,a.setScrollLeft(0),a.railh.scrollable=!1):a.railh.scrollable=!0;a.locked=0==a.page.maxh&&0==a.page.maxw;if(a.locked)return a.ispage||a.updateScrollBar(a.view),!1;!a.hidden&&!a.visibility?a.showRail().showRailHr():!a.hidden&&!a.railh.visibility&&a.showRailHr();a.istextarea&&(a.win.css("resize")&&"none"!=a.win.css("resize"))&&(a.view.h-=20);a.cursorheight=Math.min(a.view.h,Math.round(a.view.h*(a.view.h/
a.page.h)));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=Math.min(a.view.w,Math.round(a.view.w*(a.view.w/a.page.w)));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder;a.railh&&(a.railh.width=0<a.page.maxh?a.view.w-a.rail.width:a.view.w,a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder);a.ispage||
a.updateScrollBar(a.view);a.scrollratio={x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};a.getScrollTop()>a.page.maxh?a.doScrollTop(a.page.maxh):(a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y)),a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)),a.cursoractive&&a.noticeCursor());a.scroll.y&&0==a.getScrollTop()&&a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(c){c=isNaN(c)?30:c;a.delayed("resize",a.resize,
c);return a};this._bind=function(c,b,f,d){a.events.push({e:c,n:b,f:f,b:d,q:!1});c.addEventListener?c.addEventListener(b,f,d||!1):c.attachEvent?c.attachEvent("on"+b,f):c["on"+b]=f};this.jqbind=function(c,b,f){a.events.push({e:c,n:b,f:f,q:!0});e(c).bind(b,f)};this.bind=function(c,b,f,e){var h="jquery"in c?c[0]:c;"mousewheel"==b?"onwheel"in a.win?a._bind(h,"wheel",f,e||!1):(c="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",l(h,c,f,e||!1),"DOMMouseScroll"==c&&l(h,"MozMousePixelScroll",
f,e||!1)):h.addEventListener?(d.cantouch&&/mouseup|mousedown|mousemove/.test(b)&&a._bind(h,"mousedown"==b?"touchstart":"mouseup"==b?"touchend":"touchmove",function(a){if(a.touches){if(2>a.touches.length){var c=a.touches.length?a.touches[0]:a;c.original=a;f.call(this,c)}}else a.changedTouches&&(c=a.changedTouches[0],c.original=a,f.call(this,c))},e||!1),a._bind(h,b,f,e||!1),d.cantouch&&"mouseup"==b&&a._bind(h,"touchcancel",f,e||!1)):a._bind(h,b,function(c){if((c=c||window.event||!1)&&c.srcElement)c.target=
c.srcElement;"pageY"in c||(c.pageX=c.clientX+document.documentElement.scrollLeft,c.pageY=c.clientY+document.documentElement.scrollTop);return!1===f.call(h,c)||!1===e?a.cancelEvent(c):!0})};this._unbind=function(a,b,f,d){a.removeEventListener?a.removeEventListener(b,f,d):a.detachEvent?a.detachEvent("on"+b,f):a["on"+b]=!1};this.unbindAll=function(){for(var c=0;c<a.events.length;c++){var b=a.events[c];b.q?b.e.unbind(b.n,b.f):a._unbind(b.e,b.n,b.f,b.b)}};this.cancelEvent=function(a){a=a.original?a.original:
a?a:window.event||!1;if(!a)return!1;a.preventDefault&&a.preventDefault();a.stopPropagation&&a.stopPropagation();a.preventManipulation&&a.preventManipulation();a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1};this.stopPropagation=function(a){a=a.original?a.original:a?a:window.event||!1;if(!a)return!1;if(a.stopPropagation)return a.stopPropagation();a.cancelBubble&&(a.cancelBubble=!0);return!1};this.showRail=function(){if(0!=a.page.maxh&&(a.ispage||"none"!=a.win.css("display")))a.visibility=!0,
a.rail.visibility=!0,a.rail.css("display","block");return a};this.showRailHr=function(){if(!a.railh)return a;if(0!=a.page.maxw&&(a.ispage||"none"!=a.win.css("display")))a.railh.visibility=!0,a.railh.css("display","block");return a};this.hideRail=function(){a.visibility=!1;a.rail.visibility=!1;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=!1;a.railh.css("display","none");return a};this.show=function(){a.hidden=!1;a.locked=!1;return a.showRail().showRailHr()};
this.hide=function(){a.hidden=!0;a.locked=!0;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();a.cursortimeout&&clearTimeout(a.cursortimeout);a.doZoomOut();a.unbindAll();d.isie9&&a.win[0].detachEvent("onpropertychange",a.onAttributeChange);!1!==a.observer&&a.observer.disconnect();!1!==a.observerremover&&a.observerremover.disconnect();a.events=null;a.cursor&&a.cursor.remove();a.cursorh&&a.cursorh.remove();a.rail&&a.rail.remove();
a.railh&&a.railh.remove();a.zoom&&a.zoom.remove();for(var c=0;c<a.saved.css.length;c++){var b=a.saved.css[c];b[0].css(b[1],"undefined"==typeof b[2]?"":b[2])}a.saved=!1;a.me.data("__nicescroll","");var f=e.nicescroll;f.each(function(c){if(this&&this.id===a.id){delete f[c];for(var b=++c;b<f.length;b++,c++)f[c]=f[b];f.length--;f.length&&delete f[f.length]}});for(var h in a)a[h]=null,delete a[h];a=null};this.scrollstart=function(c){this.onscrollstart=c;return a};this.scrollend=function(c){this.onscrollend=
c;return a};this.scrollcancel=function(c){this.onscrollcancel=c;return a};this.zoomin=function(c){this.onzoomin=c;return a};this.zoomout=function(c){this.onzoomout=c;return a};this.isScrollable=function(a){a=a.target?a.target:a;if("OPTION"==a.nodeName)return!0;for(;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var b=e(a),b=b.css("overflowY")||b.css("overflowX")||b.css("overflow")||"";if(/scroll|auto/.test(b))return a.clientHeight!=a.scrollHeight;a=a.parentNode?a.parentNode:!1}return!1};this.getViewport=
function(a){for(a=a&&a.parentNode?a.parentNode:!1;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var b=e(a);if(/fixed|absolute/.test(b.css("position")))return b;var f=b.css("overflowY")||b.css("overflowX")||b.css("overflow")||"";if(/scroll|auto/.test(f)&&a.clientHeight!=a.scrollHeight||0<b.getNiceScroll().length)return b;a=a.parentNode?a.parentNode:!1}return a?e(a):!1};this.triggerScrollEnd=function(){if(a.onscrollend){var c=a.getScrollLeft(),b=a.getScrollTop();a.onscrollend.call(a,{type:"scrollend",
current:{x:c,y:b},end:{x:c,y:b}})}};this.onmousewheel=function(c){if(!a.wheelprevented){if(a.locked)return a.debounced("checkunlock",a.resize,250),!0;if(a.rail.drag)return a.cancelEvent(c);"auto"==a.opt.oneaxismousemode&&0!=c.deltaX&&(a.opt.oneaxismousemode=!1);if(a.opt.oneaxismousemode&&0==c.deltaX&&!a.rail.scrollable)return a.railh&&a.railh.scrollable?a.onmousewheelhr(c):!0;var b=+new Date,f=!1;a.opt.preservenativescrolling&&a.checkarea+600<b&&(a.nativescrollingarea=a.isScrollable(c),f=!0);a.checkarea=
b;if(a.nativescrollingarea)return!0;if(c=q(c,!1,f))a.checkarea=0;return c}};this.onmousewheelhr=function(c){if(!a.wheelprevented){if(a.locked||!a.railh.scrollable)return!0;if(a.rail.drag)return a.cancelEvent(c);var b=+new Date,f=!1;a.opt.preservenativescrolling&&a.checkarea+600<b&&(a.nativescrollingarea=a.isScrollable(c),f=!0);a.checkarea=b;return a.nativescrollingarea?!0:a.locked?a.cancelEvent(c):q(c,!0,f)}};this.stop=function(){a.cancelScroll();a.scrollmon&&a.scrollmon.stop();a.cursorfreezed=!1;
a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(b){var d=Math.round(10*a.opt.scrollspeed);b=Math.min(d,Math.round(b/20*a.opt.scrollspeed));return 20<b?b:0};a.opt.smoothscroll?a.ishwscroll&&d.hastransition&&a.opt.usetransition?(this.prepareTransition=function(b,e){var f=e?20<b?b:0:a.getTransitionSpeed(b),h=f?d.prefixstyle+"transform "+f+"ms ease-out":"";if(!a.lasttransitionstyle||a.lasttransitionstyle!=h)a.lasttransitionstyle=
h,a.doc.css(d.transitionstyle,h);return f},this.doScrollLeft=function(b,d){var f=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,e,f){var h=a.getScrollTop(),g=a.getScrollLeft();(0>(a.newscrolly-h)*(e-h)||0>(a.newscrollx-g)*(b-g))&&a.cancelScroll();!1==a.opt.bouncescroll&&(0>e?e=0:e>a.page.maxh&&(e=a.page.maxh),0>b?b=0:b>a.page.maxw&&(b=a.page.maxw));
if(a.scrollrunning&&b==a.newscrollx&&e==a.newscrolly)return!1;a.newscrolly=e;a.newscrollx=b;a.newscrollspeed=f||!1;if(a.timer)return!1;a.timer=setTimeout(function(){var f=a.getScrollTop(),h=a.getScrollLeft(),g,k;g=b-h;k=e-f;g=Math.round(Math.sqrt(Math.pow(g,2)+Math.pow(k,2)));g=a.newscrollspeed&&1<a.newscrollspeed?a.newscrollspeed:a.getTransitionSpeed(g);a.newscrollspeed&&1>=a.newscrollspeed&&(g*=a.newscrollspeed);a.prepareTransition(g,!0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);
0<g&&(!a.scrollrunning&&a.onscrollstart&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:h,y:f},request:{x:b,y:e},end:{x:a.newscrollx,y:a.newscrolly},speed:g}),d.transitionend?a.scrollendtrapped||(a.scrollendtrapped=!0,a.bind(a.doc,d.transitionend,a.onScrollTransitionEnd,!1)):(a.scrollendtrapped&&clearTimeout(a.scrollendtrapped),a.scrollendtrapped=setTimeout(a.onScrollTransitionEnd,g)),a.timerscroll={bz:new BezierClass(f,a.newscrolly,g,0,0,0.58,1),bh:new BezierClass(h,a.newscrollx,g,0,0,0.58,
1)},a.cursorfreezed||(a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)));a.synched("doScroll-set",function(){a.timer=0;a.scrollendtrapped&&(a.scrollrunning=!0);a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)},this.cancelScroll=function(){if(!a.scrollendtrapped)return!0;var b=a.getScrollTop(),e=a.getScrollLeft();a.scrollrunning=!1;d.transitionend||clearTimeout(d.transitionend);a.scrollendtrapped=
!1;a._unbind(a.doc,d.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(b);a.railh&&a.setScrollLeft(e);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;a.cursorfreezed=!1;a.showCursor(b,e);return a},this.onScrollTransitionEnd=function(){a.scrollendtrapped&&a._unbind(a.doc,d.transitionend,a.onScrollTransitionEnd);a.scrollendtrapped=!1;a.prepareTransition(0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;var b=
a.getScrollTop(),e=a.getScrollLeft();a.setScrollTop(b);a.railh&&a.setScrollLeft(e);a.noticeCursor(!1,b,e);a.cursorfreezed=!1;0>b?b=0:b>a.page.maxh&&(b=a.page.maxh);0>e?e=0:e>a.page.maxw&&(e=a.page.maxw);if(b!=a.newscrolly||e!=a.newscrollx)return a.doScrollPos(e,b,a.opt.snapbackspeed);a.onscrollend&&a.scrollrunning&&a.triggerScrollEnd();a.scrollrunning=!1}):(this.doScrollLeft=function(b,d){var f=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=
a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,d,f){function e(){if(a.cancelAnimationFrame)return!0;a.scrollrunning=!0;if(p=1-p)return a.timer=s(e)||1;var b=0,c=sy=a.getScrollTop();if(a.dst.ay){var c=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly,f=c-sy;if(0>f&&c<a.newscrolly||0<f&&c>a.newscrolly)c=a.newscrolly;a.setScrollTop(c);c==a.newscrolly&&(b=1)}else b=1;var d=sx=a.getScrollLeft();if(a.dst.ax){d=a.bzscroll?a.dst.px+a.bzscroll.getNow()*
a.dst.ax:a.newscrollx;f=d-sx;if(0>f&&d<a.newscrollx||0<f&&d>a.newscrollx)d=a.newscrollx;a.setScrollLeft(d);d==a.newscrollx&&(b+=1)}else b+=1;2==b?(a.timer=0,a.cursorfreezed=!1,a.bzscroll=!1,a.scrollrunning=!1,0>c?c=0:c>a.page.maxh&&(c=a.page.maxh),0>d?d=0:d>a.page.maxw&&(d=a.page.maxw),d!=a.newscrollx||c!=a.newscrolly?a.doScrollPos(d,c):a.onscrollend&&a.triggerScrollEnd()):a.timer=s(e)||1}d="undefined"==typeof d||!1===d?a.getScrollTop(!0):d;if(a.timer&&a.newscrolly==d&&a.newscrollx==b)return!0;a.timer&&
v(a.timer);a.timer=0;var h=a.getScrollTop(),g=a.getScrollLeft();(0>(a.newscrolly-h)*(d-h)||0>(a.newscrollx-g)*(b-g))&&a.cancelScroll();a.newscrolly=d;a.newscrollx=b;if(!a.bouncescroll||!a.rail.visibility)0>a.newscrolly?a.newscrolly=0:a.newscrolly>a.page.maxh&&(a.newscrolly=a.page.maxh);if(!a.bouncescroll||!a.railh.visibility)0>a.newscrollx?a.newscrollx=0:a.newscrollx>a.page.maxw&&(a.newscrollx=a.page.maxw);a.dst={};a.dst.x=b-g;a.dst.y=d-h;a.dst.px=g;a.dst.py=h;var k=Math.round(Math.sqrt(Math.pow(a.dst.x,
2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/k;a.dst.ay=a.dst.y/k;var l=0,q=k;0==a.dst.x?(l=h,q=d,a.dst.ay=1,a.dst.py=0):0==a.dst.y&&(l=g,q=b,a.dst.ax=1,a.dst.px=0);k=a.getTransitionSpeed(k);f&&1>=f&&(k*=f);a.bzscroll=0<k?a.bzscroll?a.bzscroll.update(q,k):new BezierClass(l,q,k,0,1,0,1):!1;if(!a.timer){(h==a.page.maxh&&d>=a.page.maxh||g==a.page.maxw&&b>=a.page.maxw)&&a.checkContentSize();var p=1;a.cancelAnimationFrame=!1;a.timer=1;a.onscrollstart&&!a.scrollrunning&&a.onscrollstart.call(a,{type:"scrollstart",
current:{x:g,y:h},request:{x:b,y:d},end:{x:a.newscrollx,y:a.newscrolly},speed:k});e();(h==a.page.maxh&&d>=h||g==a.page.maxw&&b>=g)&&a.checkContentSize();a.noticeCursor()}},this.cancelScroll=function(){a.timer&&v(a.timer);a.timer=0;a.bzscroll=!1;a.scrollrunning=!1;return a}):(this.doScrollLeft=function(b,d){var f=a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,d,f){var e=b>a.page.maxw?a.page.maxw:b;0>e&&
(e=0);var h=d>a.page.maxh?a.page.maxh:d;0>h&&(h=0);a.synched("scroll",function(){a.setScrollTop(h);a.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(b,d){var f=0,f=d?Math.floor((a.scroll.y-b)*a.scrollratio.y):(a.timer?a.newscrolly:a.getScrollTop(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.h/2);f<-e?f=-e:f>a.page.maxh+e&&(f=a.page.maxh+e)}a.cursorfreezed=!1;py=a.getScrollTop(!0);if(0>f&&0>=py)return a.noticeCursor();if(f>a.page.maxh&&py>=a.page.maxh)return a.checkContentSize(),
a.noticeCursor();a.doScrollTop(f)};this.doScrollLeftBy=function(b,d){var f=0,f=d?Math.floor((a.scroll.x-b)*a.scrollratio.x):(a.timer?a.newscrollx:a.getScrollLeft(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.w/2);f<-e?f=-e:f>a.page.maxw+e&&(f=a.page.maxw+e)}a.cursorfreezed=!1;px=a.getScrollLeft(!0);if(0>f&&0>=px||f>a.page.maxw&&px>=a.page.maxw)return a.noticeCursor();a.doScrollLeft(f)};this.doScrollTo=function(b,d){d&&Math.round(b*a.scrollratio.y);a.cursorfreezed=!1;a.doScrollTop(b)};this.checkContentSize=
function(){var b=a.getContentSize();(b.h!=a.page.h||b.w!=a.page.w)&&a.resize(!1,b)};a.onscroll=function(b){a.rail.drag||a.cursorfreezed||a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.railh&&(a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)));a.noticeCursor()})};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(b){if(!a.zoomactive){a.zoomactive=!0;a.zoomrestore={style:{}};var h="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
f=a.win[0].style,g;for(g in h){var k=h[g];a.zoomrestore.style[k]="undefined"!=typeof f[k]?f[k]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};d.isios4&&(a.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));a.win.css({position:d.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});h=a.win.css("backgroundColor");(""==h||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&
a.win.css("backgroundColor","#fff");a.rail.css({"z-index":x+101});a.zoom.css({"z-index":x+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();a.onzoomin&&a.onzoomin.call(a);return a.cancelEvent(b)}};this.doZoomOut=function(b){if(a.zoomactive)return a.zoomactive=!1,a.win.css("margin",""),a.win.css(a.zoomrestore.style),d.isios4&&e(window).scrollTop(a.zoomrestore.scrollTop),a.rail.css({"z-index":a.zindex}),a.zoom.css({"z-index":a.zindex}),a.zoomrestore=!1,a.zoom.css("backgroundPosition",
"0px 0px"),a.onResize(),a.onzoomout&&a.onzoomout.call(a),a.cancelEvent(b)};this.doZoom=function(b){return a.zoomactive?a.doZoomOut(b):a.doZoomIn(b)};this.resizeZoom=function(){if(a.zoomactive){var b=a.getScrollTop();a.win.css({width:e(window).width()-a.zoomrestore.padding.w+"px",height:e(window).height()-a.zoomrestore.padding.h+"px"});a.onResize();a.setScrollTop(Math.min(a.page.maxh,b))}};this.init();e.nicescroll.push(this)},H=function(e){var b=this;this.nc=e;this.steptime=this.lasttime=this.speedy=
this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,g){b.stop();var l=b.time();b.steptime=0;b.lasttime=l;b.speedx=0;b.speedy=0;b.lastx=e;b.lasty=g;b.lastscrollx=-1;b.lastscrolly=-1};this.update=function(e,g){var l=b.time();b.steptime=l-b.lasttime;b.lasttime=l;var l=g-b.lasty,q=e-b.lastx,a=b.nc.getScrollTop(),p=b.nc.getScrollLeft(),a=a+
l,p=p+q;b.snapx=0>p||p>b.nc.page.maxw;b.snapy=0>a||a>b.nc.page.maxh;b.speedx=q;b.speedy=l;b.lastx=e;b.lasty=g};this.stop=function(){b.nc.unsynched("domomentum2d");b.timer&&clearTimeout(b.timer);b.timer=0;b.lastscrollx=-1;b.lastscrolly=-1};this.doSnapy=function(e,g){var l=!1;0>g?(g=0,l=!0):g>b.nc.page.maxh&&(g=b.nc.page.maxh,l=!0);0>e?(e=0,l=!0):e>b.nc.page.maxw&&(e=b.nc.page.maxw,l=!0);l?b.nc.doScrollPos(e,g,b.nc.opt.snapbackspeed):b.nc.triggerScrollEnd()};this.doMomentum=function(e){var g=b.time(),
l=e?g+e:b.lasttime;e=b.nc.getScrollLeft();var q=b.nc.getScrollTop(),a=b.nc.page.maxh,p=b.nc.page.maxw;b.speedx=0<p?Math.min(60,b.speedx):0;b.speedy=0<a?Math.min(60,b.speedy):0;l=l&&60>=g-l;if(0>q||q>a||0>e||e>p)l=!1;e=b.speedx&&l?b.speedx:!1;if(b.speedy&&l&&b.speedy||e){var d=Math.max(16,b.steptime);50<d&&(e=d/50,b.speedx*=e,b.speedy*=e,d=50);b.demulxy=0;b.lastscrollx=b.nc.getScrollLeft();b.chkx=b.lastscrollx;b.lastscrolly=b.nc.getScrollTop();b.chky=b.lastscrolly;var r=b.lastscrollx,t=b.lastscrolly,
s=function(){var c=600<b.time()-g?0.04:0.02;if(b.speedx&&(r=Math.floor(b.lastscrollx-b.speedx*(1-b.demulxy)),b.lastscrollx=r,0>r||r>p))c=0.1;if(b.speedy&&(t=Math.floor(b.lastscrolly-b.speedy*(1-b.demulxy)),b.lastscrolly=t,0>t||t>a))c=0.1;b.demulxy=Math.min(1,b.demulxy+c);b.nc.synched("domomentum2d",function(){b.speedx&&(b.nc.getScrollLeft()!=b.chkx&&b.stop(),b.chkx=r,b.nc.setScrollLeft(r));b.speedy&&(b.nc.getScrollTop()!=b.chky&&b.stop(),b.chky=t,b.nc.setScrollTop(t));b.timer||(b.nc.hideCursor(),
b.doSnapy(r,t))});1>b.demulxy?b.timer=setTimeout(s,d):(b.stop(),b.nc.hideCursor(),b.doSnapy(r,t))};s()}else b.doSnapy(b.nc.getScrollLeft(),b.nc.getScrollTop())}},w=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(g,b,h){return(b=e.data(g,"__nicescroll")||!1)&&b.ishwscroll?b.getScrollTop():w.call(g)},set:function(g,b){var h=e.data(g,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollTop(parseInt(b)):w.call(g,b);return this}};e.fn.scrollTop=function(g){if("undefined"==typeof g){var b=this[0]?e.data(this[0],
"__nicescroll")||!1:!1;return b&&b.ishwscroll?b.getScrollTop():w.call(this)}return this.each(function(){var b=e.data(this,"__nicescroll")||!1;b&&b.ishwscroll?b.setScrollTop(parseInt(g)):w.call(e(this),g)})};var A=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(g,b,h){return(b=e.data(g,"__nicescroll")||!1)&&b.ishwscroll?b.getScrollLeft():A.call(g)},set:function(g,b){var h=e.data(g,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(b)):A.call(g,b);return this}};e.fn.scrollLeft=function(g){if("undefined"==
typeof g){var b=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return b&&b.ishwscroll?b.getScrollLeft():A.call(this)}return this.each(function(){var b=e.data(this,"__nicescroll")||!1;b&&b.ishwscroll?b.setScrollLeft(parseInt(g)):A.call(e(this),g)})};var B=function(g){var b=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var g=0,a=0;g<b.length;g++)e.call(b[g],a++);return b};this.push=function(e){b[b.length]=e;b.length++};this.eq=function(e){return b[e]};if(g)for(var h=0;h<g.length;h++){var k=
e.data(g[h],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this};(function(e,b,h){for(var k=0;k<b.length;k++)h(e,b[k])})(B.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,b){e[b]=function(){var e=arguments;return this.each(function(){this[b].apply(this,e)})}});e.fn.getNiceScroll=function(g){return"undefined"==typeof g?new B(this):this[g]&&e.data(this[g],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(g){return e.data(g,"__nicescroll")?
!0:!1}});e.fn.niceScroll=function(g,b){"undefined"==typeof b&&("object"==typeof g&&!("jquery"in g))&&(b=g,g=!1);var h=new B;"undefined"==typeof b&&(b={});g&&(b.doc=e(g),b.win=e(this));var k=!("doc"in b);!k&&!("win"in b)&&(b.win=e(this));this.each(function(){var g=e(this).data("__nicescroll")||!1;g||(b.doc=k?e(this):b.doc,g=new N(b,e(this)),e(this).data("__nicescroll",g));h.push(g)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new B,e.nicescroll.options=
G)});
;
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
;


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.2",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+h>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.2",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,F=X.createElement("div"),I=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},W=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},Z=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,l=F.style,h=0>i;return h&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||X.body,l[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=Z(t,e,i,s,!0))),h?-n:n},H=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(Z(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,k)]=e[i]);return z||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,we&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},G=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:H(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,u,_=s,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(h=new _e(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],p[o]=s[l],n||(h=new _e(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:p,end:f,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new de(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,s,r,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[s].parse(t,i,s,r,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,s,r,n,a,o){var l=new pe(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",xe=q("transformOrigin"),we=null!==q("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(Q(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Q(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var N,X,F,I,E,Y,z,U=n[0],B=n[1],j=n[2],V=n[3],q=n[4],W=n[5],Z=n[6],H=n[7],$=n[11],G=Math.atan2(Z,k),K=-b>G||G>b;v.rotationX=G*L,G&&(I=Math.cos(-G),E=Math.sin(-G),N=q*I+S*E,X=W*I+R*E,F=Z*I+k*E,S=q*-E+S*I,R=W*-E+R*I,k=Z*-E+k*I,$=H*-E+$*I,q=N,W=X,Z=F),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),N=U*I-S*E,X=B*I-R*E,F=j*I-k*E,R=B*E+R*I,k=j*E+k*I,$=V*E+$*I,U=N,B=X,j=F),G=Math.atan2(B,W),v.rotation=G*L,G&&(z=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),U=U*I+q*E,X=B*I+W*E,W=B*-E+W*I,Z=j*-E+Z*I,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(W*W+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Z*Z+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||se?Math.atan2(ie,se)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*m*s.ox:s.ox)-m/2,d=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,d=s.ieOffsetY||0,s.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:d-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P,S,R,k=this.data,C=this.t.style,A=k.rotation*M,O=k.scaleX,D=k.scaleY,L=k.scaleZ,N=k.perspective;if(p&&(P=C.top?"top":C.bottom?"bottom":parseFloat(Q(this.t,"top",null,!1))?"bottom":"top",T=Q(this.t,P,null,!1),S=parseFloat(T)||0,R=T.substr((S+"").length)||"px",k._ffFix=!k._ffFix,C[P]=(k._ffFix?S+.05:S-.05)+R,S=1e-4,S>O&&O>-S&&(O=L=2e-5),S>D&&D>-S&&(D=L=2e-5)),A||k.skewX)v=Math.cos(A),y=Math.sin(A),t=v,r=y,k.skewX&&(A-=k.skewX*M,v=Math.cos(A),y=Math.sin(A)),e=-y,n=v;else{if(!(k.rotationY||k.rotationX||1!==L||N))return C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}u=1,i=s=a=o=l=h=_=f=c=0,d=N?-1/N:0,m=k.zOrigin,g=1e5,A=k.rotationY*M,A&&(v=Math.cos(A),y=Math.sin(A),l=u*-y,f=d*-y,i=t*y,a=r*y,u*=v,d*=v,t*=v,r*=v),A=k.rotationX*M,A&&(v=Math.cos(A),y=Math.sin(A),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==L&&(i*=L,a*=L,u*=L,d*=L),1!==D&&(e*=D,n*=D,h*=D,c*=D),1!==O&&(t*=O,r*=O,l*=O,f*=O),m&&(_-=m,s=i*_,o=a*_,_=u*_+m),s=(T=(s+=k.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=k.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=k.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,C[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,s,o,_,N?1+-_/N:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,l,h=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Q(u,"top",null,!1))?"bottom":"top",e=Q(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",h._ffFix=!h._ffFix,_[t]=(h._ffFix?i+.05:i-.05)+s),h.rotation||h.skewX?(r=h.rotation*M,n=r-h.skewX*M,a=1e5,o=h.scaleX*a,l=h.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-l)/a+","+(0|Math.cos(n)*l)/a+","+h.x+","+h.y+")"):_[ye]="matrix("+h.scaleX+",0,0,"+h.scaleY+","+h.x+","+h.y+")"};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var l,h,u,_,p,f,c,d=s._transform=be(t,r,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,d.scaleZ),x:se(y.x,d.x),y:se(y.y,d.y),z:se(y.z,d.z),perspective:se(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:re(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:re(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),_=u=Q(t,b[l],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Z(t,"borderLeft",f,v),x=Z(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,u,_,p,f="background-position",d=r||W(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,s,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,r),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=H(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=s[a]||c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Z(t,a,u,c),"%"===d?(u/=Z(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Z(t,a,1,"em"):(_=Z(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=G(_[r],h[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);l.push(e.to(_[r],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
		e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
})(jQuery)
;


/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.1 (02.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/

function revslider_showDoubleJqueryError(e){var t="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";t+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";t+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";t+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";t="<span style='font-size:16px;color:#BC0C06;'>"+t+"</span>";jQuery(e).show().html(t)}(function(e,t){function n(e){var t=[],n;var r=window.location.href.slice(window.location.href.indexOf(e)+1).split("_");for(var i=0;i<r.length;i++){r[i]=r[i].replace("%3D","=");n=r[i].split("=");t.push(n[0]);t[n[0]]=n[1]}return t}function r(n,r){try{if(r.hideThumbsUnderResoluition!=0&&r.navigationType=="thumb"){if(r.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(i){}n.find(".defaultimg").each(function(t){b(e(this),r)});var s=0;if(r.forceFullWidth=="on")s=0-r.container.parent().offset().left;try{n.parent().find(".tp-bannershadow").css({width:r.width,left:s})}catch(i){}var o=n.find(">ul >li:eq("+r.act+") .slotholder");var a=n.find(">ul >li:eq("+r.next+") .slotholder");T(n,r);a.find(".defaultimg").css({opacity:0});o.find(".defaultimg").css({opacity:1});a.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").restart()});var f=n.find(">ul >li:eq("+r.next+")");q(f,r,true);u(r,n);y(n,r)}function s(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];var t=false;for(i in e){if(navigator.userAgent.split(e[i]).length>1){t=true}}return t}function o(t,n){var r=e('<div style="display:none;"/>').appendTo(e("body"));r.html("<!--[if "+(n||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]-->");var i=r.find("a").length;r.remove();return i}function u(e,t){e.cd=0;if(e.videoplaying!=true){var n=t.find(".tp-bannertimer");if(n.length>0){n.stop();n.css({width:"0%"});n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})}clearTimeout(e.thumbtimer);e.thumbtimer=setTimeout(function(){c(t);y(t,e)},200)}}function a(e,t){e.cd=0;var n=t.find(".tp-bannertimer");if(n.length>0){n.stop(true,true);n.css({width:"0%"})}clearTimeout(e.thumbtimer)}function f(e,t){e.cd=0;N(t,e);var n=t.find(".tp-bannertimer");if(n.length>0){n.stop();n.css({width:"0%"});if(e.videoplaying!=true)n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})}}function l(n,r){var i=n.parent();if(r.navigationType=="thumb"||r.navsecond=="both"){i.append('<div class="tp-bullets tp-thumbs '+r.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')}var s=i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var o=s.parent();o.width(r.thumbWidth*r.thumbAmount);o.height(r.thumbHeight);o.parent().width(r.thumbWidth*r.thumbAmount);o.parent().height(r.thumbHeight);n.find(">ul:first >li").each(function(e){var i=n.find(">ul:first >li:eq("+e+")");if(i.data("thumb")!=t)var o=i.data("thumb");else var o=i.find("img:first").attr("src");s.append('<div class="bullet thumb" style="width:'+r.thumbWidth+"px;height:"+r.thumbHeight+'px;"><img src="'+o+'"></div>');var u=s.find(".bullet:first")});var u=10;s.find(".bullet").each(function(t){var i=e(this);if(t==r.slideamount-1)i.addClass("last");if(t==0)i.addClass("first");i.width(r.thumbWidth);i.height(r.thumbHeight);if(u<i.outerWidth(true))u=i.outerWidth(true);i.click(function(){if(r.transition==0&&i.index()!=r.act){r.next=i.index();f(r,n)}})});var a=u*n.find(">ul:first >li").length;var l=s.parent().width();r.thumbWidth=u;if(l<a){e(document).mousemove(function(t){e("body").data("mousex",t.pageX)});s.parent().mouseenter(function(){var t=e(this);t.addClass("over");var r=t.offset();var i=e("body").data("mousex")-r.left;var s=t.width();var o=t.find(".bullet:first").outerWidth(true);var u=o*n.find(">ul:first >li").length;var a=u-s+15;var f=a/s;i=i-30;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;h(t,l,200)});s.parent().mousemove(function(){var t=e(this);var r=t.offset();var i=e("body").data("mousex")-r.left;var s=t.width();var o=t.find(".bullet:first").outerWidth(true);var u=o*n.find(">ul:first >li").length-1;var a=u-s+15;var f=a/s;i=i-3;if(i<6)i=0;if(i+3>s-6)i=s;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;h(t,l,0)});s.parent().mouseleave(function(){var t=e(this);t.removeClass("over");c(n)})}}function c(e){var t=e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var n=t.parent();var r=n.offset();var i=n.find(".bullet:first").outerWidth(true);var s=n.find(".bullet.selected").index()*i;var o=n.width();var i=n.find(".bullet:first").outerWidth(true);var u=i*e.find(">ul:first >li").length;var a=u-o;var f=a/o;var l=0-s;if(l>0)l=0;if(l<0-u+o)l=0-u+o;if(!n.hasClass("over")){h(n,l,200)}}function h(e,t,n){TweenLite.to(e.find(".tp-thumbcontainer"),.2,{left:t,ease:Power3.easeOut,overwrite:"auto"})}function p(t,n){if(n.navigationType=="bullet"||n.navigationType=="both"){t.parent().append('<div class="tp-bullets simplebullets '+n.navigationStyle+'"></div>')}var r=t.parent().find(".tp-bullets");t.find(">ul:first >li").each(function(e){var n=t.find(">ul:first >li:eq("+e+") img:first").attr("src");r.append('<div class="bullet"></div>');var i=r.find(".bullet:first")});r.find(".bullet").each(function(r){var i=e(this);if(r==n.slideamount-1)i.addClass("last");if(r==0)i.addClass("first");i.click(function(){var e=false;if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){if(i.index()-1==n.act)e=true}else{if(i.index()==n.act)e=true}if(n.transition==0&&!e){if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){n.next=i.index()-1}else{n.next=i.index()}f(n,t)}})});r.append('<div class="tpclear"></div>');y(t,n)}function d(e,n){var r=e.find(".tp-bullets");var i="";var s=n.navigationStyle;if(n.navigationArrows=="none")i="visibility:hidden;display:none";n.soloArrowStyle="default";if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets")s=n.soloArrowStyle;e.parent().append('<div style="'+i+'" class="tp-leftarrow tparrows '+s+'"></div>');e.parent().append('<div style="'+i+'" class="tp-rightarrow tparrows '+s+'"></div>');e.parent().find(".tp-rightarrow").click(function(){if(n.transition==0){if(e.data("showus")!=t&&e.data("showus")!=-1)n.next=e.data("showus")-1;else n.next=n.next+1;e.data("showus",-1);if(n.next>=n.slideamount)n.next=0;if(n.next<0)n.next=0;if(n.act!=n.next)f(n,e)}});e.parent().find(".tp-leftarrow").click(function(){if(n.transition==0){n.next=n.next-1;n.leftarrowpressed=1;if(n.next<0)n.next=n.slideamount-1;f(n,e)}});y(e,n)}function v(n,r){e(document).keydown(function(e){if(r.transition==0&&e.keyCode==39){if(n.data("showus")!=t&&n.data("showus")!=-1)r.next=n.data("showus")-1;else r.next=r.next+1;n.data("showus",-1);if(r.next>=r.slideamount)r.next=0;if(r.next<0)r.next=0;if(r.act!=r.next)f(r,n)}if(r.transition==0&&e.keyCode==37){r.next=r.next-1;r.leftarrowpressed=1;if(r.next<0)r.next=r.slideamount-1;f(r,n)}});y(n,r)}function m(e,t){if(t.touchenabled=="on")e.swipe({data:e,swipeRight:function(){if(t.transition==0){t.next=t.next-1;t.leftarrowpressed=1;if(t.next<0)t.next=t.slideamount-1;f(t,e)}},swipeLeft:function(){if(t.transition==0){t.next=t.next+1;if(t.next==t.slideamount)t.next=0;f(t,e)}},allowPageScroll:"auto"})}function g(e,t){var n=e.parent().find(".tp-bullets");var r=e.parent().find(".tparrows");if(n==null){e.append('<div class=".tp-bullets"></div>');var n=e.parent().find(".tp-bullets")}if(r==null){e.append('<div class=".tparrows"></div>');var r=e.parent().find(".tparrows")}e.data("hidethumbs",t.hideThumbs);n.addClass("hidebullets");r.addClass("hidearrows");n.hover(function(){n.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){n.removeClass("hovered");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))});r.hover(function(){n.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){n.removeClass("hovered")});e.on("mouseenter",function(){e.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")});e.on("mouseleave",function(){e.removeClass("hovered");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))})}function y(t,n){var r=t.parent();var i=r.find(".tp-bullets");if(n.navigationType=="thumb"){i.find(".thumb").each(function(t){var r=e(this);r.css({width:n.thumbWidth*n.bw+"px",height:n.thumbHeight*n.bh+"px"})});var s=i.find(".tp-mask");s.width(n.thumbWidth*n.thumbAmount*n.bw);s.height(n.thumbHeight*n.bh);s.parent().width(n.thumbWidth*n.thumbAmount*n.bw);s.parent().height(n.thumbHeight*n.bh)}var o=r.find(".tp-leftarrow");var u=r.find(".tp-rightarrow");if(n.navigationType=="thumb"&&n.navigationArrows=="nexttobullets")n.navigationArrows="solo";if(n.navigationArrows=="nexttobullets"){o.prependTo(i).css({"float":"left"});u.insertBefore(i.find(".tpclear")).css({"float":"left"})}var a=0;if(n.forceFullWidth=="on")a=0-n.container.parent().offset().left;if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets"){o.css({position:"absolute"});u.css({position:"absolute"});if(n.soloArrowLeftValign=="center")o.css({top:"50%",marginTop:n.soloArrowLeftVOffset-Math.round(o.innerHeight()/2)+"px"});if(n.soloArrowLeftValign=="bottom")o.css({top:"auto",bottom:0+n.soloArrowLeftVOffset+"px"});if(n.soloArrowLeftValign=="top")o.css({bottom:"auto",top:0+n.soloArrowLeftVOffset+"px"});if(n.soloArrowLeftHalign=="center")o.css({left:"50%",marginLeft:a+n.soloArrowLeftHOffset-Math.round(o.innerWidth()/2)+"px"});if(n.soloArrowLeftHalign=="left")o.css({left:0+n.soloArrowLeftHOffset+a+"px"});if(n.soloArrowLeftHalign=="right")o.css({right:0+n.soloArrowLeftHOffset-a+"px"});if(n.soloArrowRightValign=="center")u.css({top:"50%",marginTop:n.soloArrowRightVOffset-Math.round(u.innerHeight()/2)+"px"});if(n.soloArrowRightValign=="bottom")u.css({top:"auto",bottom:0+n.soloArrowRightVOffset+"px"});if(n.soloArrowRightValign=="top")u.css({bottom:"auto",top:0+n.soloArrowRightVOffset+"px"});if(n.soloArrowRightHalign=="center")u.css({left:"50%",marginLeft:a+n.soloArrowRightHOffset-Math.round(u.innerWidth()/2)+"px"});if(n.soloArrowRightHalign=="left")u.css({left:0+n.soloArrowRightHOffset+a+"px"});if(n.soloArrowRightHalign=="right")u.css({right:0+n.soloArrowRightHOffset-a+"px"});if(o.position()!=null)o.css({top:Math.round(parseInt(o.position().top,0))+"px"});if(u.position()!=null)u.css({top:Math.round(parseInt(u.position().top,0))+"px"})}if(n.navigationArrows=="none"){o.css({visibility:"hidden"});u.css({visibility:"hidden"})}if(n.navigationVAlign=="center")i.css({top:"50%",marginTop:n.navigationVOffset-Math.round(i.innerHeight()/2)+"px"});if(n.navigationVAlign=="bottom")i.css({bottom:0+n.navigationVOffset+"px"});if(n.navigationVAlign=="top")i.css({top:0+n.navigationVOffset+"px"});if(n.navigationHAlign=="center")i.css({left:"50%",marginLeft:a+n.navigationHOffset-Math.round(i.innerWidth()/2)+"px"});if(n.navigationHAlign=="left")i.css({left:0+n.navigationHOffset+a+"px"});if(n.navigationHAlign=="right")i.css({right:0+n.navigationHOffset-a+"px"})}function b(n,r){r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:r.container.height()});r.container.closest(".rev_slider_wrapper").css({height:r.container.height()});r.width=parseInt(r.container.width(),0);r.height=parseInt(r.container.height(),0);r.bw=r.width/r.startwidth;r.bh=r.height/r.startheight;if(r.bh>r.bw)r.bh=r.bw;if(r.bh<r.bw)r.bw=r.bh;if(r.bw<r.bh)r.bh=r.bw;if(r.bh>1){r.bw=1;r.bh=1}if(r.bw>1){r.bw=1;r.bh=1}r.height=Math.round(r.startheight*(r.width/r.startwidth));if(r.height>r.startheight&&r.autoHeight!="on")r.height=r.startheight;if(r.fullScreen=="on"){r.height=r.bw*r.startheight;var i=r.container.parent().width();var s=e(window).height();if(r.fullScreenOffsetContainer!=t){try{var o=r.fullScreenOffsetContainer.split(",");e.each(o,function(t,n){s=s-e(n).outerHeight(true);if(s<r.minFullScreenHeight)s=r.minFullScreenHeight})}catch(u){}}r.container.parent().height(s);r.container.css({height:"100%"});r.height=s}else{r.container.height(r.height)}r.slotw=Math.ceil(r.width/r.slots);if(r.fullSreen=="on")r.sloth=Math.ceil(e(window).height()/r.slots);else r.sloth=Math.ceil(r.height/r.slots);if(r.autoHeight=="on")r.sloth=Math.ceil(n.height()/r.slots)}function w(n,r){n.find(".tp-caption").each(function(){e(this).addClass(e(this).data("transition"));e(this).addClass("start")});n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:n.parent().css("maxHeight")});if(r.autoHeight=="on"){n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"});n.css({maxHeight:"none"});n.parent().css({maxHeight:"none"})}n.find(">ul:first >li").each(function(n){var r=e(this);r.css({width:"100%",height:"100%",overflow:"hidden"});if(r.data("link")!=t){var i=r.data("link");var s="_self";var o=2;if(r.data("slideindex")=="back")o=0;var u=r.data("linktoslide");if(r.data("target")!=t)s=r.data("target");if(i=="slide"){r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a><div></div></a></div>')}else{u="no";r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a target="'+s+'" href="'+i+'"><div></div></a></div>')}}});n.parent().css({overflow:"visible"});n.find(">ul:first >li >img").each(function(n){var i=e(this);i.addClass("defaultimg");if(i.data("lazyload")!=t&&i.data("lazydone")!=1){}else{b(i,r)}i.wrap('<div class="slotholder" style="width:100%;height:100%;"'+'data-duration="'+i.data("duration")+'"'+'data-zoomstart="'+i.data("zoomstart")+'"'+'data-zoomend="'+i.data("zoomend")+'"'+'data-rotationstart="'+i.data("rotationstart")+'"'+'data-rotationend="'+i.data("rotationend")+'"'+'data-ease="'+i.data("ease")+'"'+'data-duration="'+i.data("duration")+'"'+'data-bgpositionend="'+i.data("bgpositionend")+'"'+'data-bgposition="'+i.data("bgposition")+'"'+'data-duration="'+i.data("duration")+'"'+'data-kenburns="'+i.data("kenburns")+'"'+'data-easeme="'+i.data("ease")+'"'+'data-bgfit="'+i.data("bgfit")+'"'+'data-bgfitend="'+i.data("bgfitend")+'"'+'data-owidth="'+i.data("owidth")+'"'+'data-oheight="'+i.data("oheight")+'"'+"></div>");if(r.dottedOverlay!="none"&&r.dottedOverlay!=t)i.closest(".slotholder").append('<div class="tp-dottedoverlay '+r.dottedOverlay+'"></div>');var s=i.attr("src");var u=i.data("lazyload");var a=i.data("bgfit");var f=i.data("bgrepeat");var l=i.data("bgposition");if(a==t)a="cover";if(f==t)f="no-repeat";if(l==t)l="center center";var c=i.closest(".slotholder");i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+i.data("lazyload")+'" data-bgfit="'+a+'"data-bgposition="'+l+'" data-bgrepeat="'+f+'" data-lazydone="'+i.data("lazydone")+'" data-src="'+s+'" style="background-color:'+i.css("backgroundColor")+";background-repeat:"+f+";background-image:url("+s+");background-size:"+a+";background-position:"+l+';width:100%;height:100%;"></div>');if(o(8)){c.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"});c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+s+'" style="width:100%">')}i.css({opacity:0});i.data("li-id",n)})}function E(e,n,r,i){var s=e;var u=s.find(".defaultimg");var a=s.data("zoomstart");var f=s.data("rotationstart");if(u.data("currotate")!=t)f=u.data("currotate");if(u.data("curscale")!=t)a=u.data("curscale");b(u,n);var l=u.data("src");var c=u.css("background-color");var h=n.width;var p=n.height;if(n.autoHeight=="on")p=n.container.height();var d=u.data("fxof");if(d==t)d=0;fullyoff=0;var v=0;var m=u.data("bgfit");var g=u.data("bgrepeat");var y=u.data("bgposition");if(m==t)m="cover";if(g==t)g="no-repeat";if(y==t)y="center center";if(s.data("kenburns")=="on"){m=a;if(m.toString().length<4)m=A(m,s,n)}if(o(8)){var w=l;l=""}if(i=="horizontal"){if(!r)var v=0-n.slotw;for(var E=0;E<n.slots;E++){s.append('<div class="slot" style="position:absolute;'+"top:"+(0+fullyoff)+"px;"+"left:"+(d+E*n.slotw)+"px;"+"overflow:hidden;width:"+n.slotw+"px;"+"height:"+p+'px">'+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+v+"px;"+"width:"+n.slotw+"px;"+"height:"+p+'px;overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;top:0px;"+"left:"+(0-E*n.slotw)+"px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+g+";"+"background-size:"+m+";background-position:"+y+';">'+"</div></div></div>");if(a!=t&&f!=t)TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(o(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%">');x(s,n)}}}else{if(!r)var v=0-n.sloth;for(var E=0;E<n.slots+2;E++){s.append('<div class="slot" style="position:absolute;'+"top:"+(fullyoff+E*n.sloth)+"px;"+"left:"+d+"px;"+"overflow:hidden;"+"width:"+h+"px;"+"height:"+n.sloth+'px">'+'<div class="slotslide" style="position:absolute;'+"top:"+v+"px;"+"left:0px;width:"+h+"px;"+"height:"+n.sloth+"px;"+'overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;"+"top:"+(0-E*n.sloth)+"px;"+"left:0px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+g+";"+"background-size:"+m+";background-position:"+y+';">'+"</div></div></div>");if(a!=t&&f!=t)TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(o(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%">');x(s,n)}}}}function S(e,n,r){var i=e;var s=i.find(".defaultimg");var u=i.data("zoomstart");var a=i.data("rotationstart");if(s.data("currotate")!=t)a=s.data("currotate");if(s.data("curscale")!=t)u=s.data("curscale")*100;b(s,n);var f=s.data("src");var l=s.css("backgroundColor");var c=n.width;var h=n.height;if(n.autoHeight=="on")h=n.container.height();var p=s.data("fxof");if(p==t)p=0;fullyoff=0;var d=0;if(o(8)){var v=f;f=""}var m=0;if(n.sloth>n.slotw)m=n.sloth;else m=n.slotw;if(!r){var d=0-m}n.slotw=m;n.sloth=m;var g=0;var y=0;var w=s.data("bgfit");var E=s.data("bgrepeat");var S=s.data("bgposition");if(w==t)w="cover";if(E==t)E="no-repeat";if(S==t)S="center center";if(i.data("kenburns")=="on"){w=u;if(w.toString().length<4)w=A(w,i,n)}for(var T=0;T<n.slots;T++){y=0;for(var N=0;N<n.slots;N++){i.append('<div class="slot" '+'style="position:absolute;'+"top:"+(fullyoff+y)+"px;"+"left:"+(p+g)+"px;"+"width:"+m+"px;"+"height:"+m+"px;"+'overflow:hidden;">'+'<div class="slotslide" data-x="'+g+'" data-y="'+y+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+m+"px;"+"height:"+m+"px;"+'overflow:hidden;">'+'<div style="position:absolute;'+"top:"+(0-y)+"px;"+"left:"+(0-g)+"px;"+"width:"+c+"px;"+"height:"+h+"px;"+"background-color:"+l+";"+"background-image:url("+f+");"+"background-repeat:"+E+";"+"background-size:"+w+";background-position:"+S+';">'+"</div></div></div>");y=y+m;if(o(8)){i.find(".slot ").last().find(".slotslide").append('<img src="'+v+'">');x(i,n)}if(u!=t&&a!=t)TweenLite.set(i.find(".slot").last(),{rotationZ:a})}g=g+m}}function x(e,t){if(o(8)){var n=e.find(".ieeightfallbackimage");if(t.startwidth/t.startheight<e.data("owidth")/e.data("oheight"))n.css({width:"auto",height:"100%"});else n.css({width:"100%",height:"auto"});var r=n.width(),i=n.height();if(e.data("bgposition")=="center center")n.css({position:"absolute",top:t.height/2-i/2+"px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="center top"||e.data("bgposition")=="top center")n.css({position:"absolute",top:"0px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="center bottom"||e.data("bgposition")=="bottom center")n.css({position:"absolute",bottom:"0px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="right top"||e.data("bgposition")=="top right")n.css({position:"absolute",top:"0px",right:"0px"});if(e.data("bgposition")=="right bottom"||e.data("bgposition")=="bottom right")n.css({position:"absolute",bottom:"0px",right:"0px"});if(e.data("bgposition")=="right center"||e.data("bgposition")=="center right")n.css({position:"absolute",top:t.height/2-i/2+"px",right:"0px"});if(e.data("bgposition")=="left bottom"||e.data("bgposition")=="bottom left")n.css({position:"absolute",bottom:"0px",left:"0px"});if(e.data("bgposition")=="left center"||e.data("bgposition")=="center left")n.css({position:"absolute",top:t.height/2-i/2+"px",left:"0px"})}}function T(n,r,i){if(i==t)i==80;setTimeout(function(){n.find(".slotholder .slot").each(function(){clearTimeout(e(this).data("tout"));e(this).remove()});r.transition=0},i)}function N(e,n){try{var r=e.find(">ul:first-child >li:eq("+n.act+")")}catch(i){var r=e.find(">ul:first-child >li:eq(1)")}n.lastslide=n.act;var s=e.find(">ul:first-child >li:eq("+n.next+")");var o=s.find(".defaultimg");if(o.data("lazyload")!=t&&o.data("lazyload")!="undefined"&&o.data("lazydone")!=1){o.css({backgroundImage:'url("'+s.find(".defaultimg").data("lazyload")+'")'});o.data("src",s.find(".defaultimg").data("lazyload"));o.data("lazydone",1);o.data("orgw",0);s.data("loadeddone",1);e.find(".tp-loader").css({display:"block"}).transition({opacity:1,duration:300});var f=new Image;f.onload=function(){setTimeout(function(){a(n,e)},180);s.waitForImages(function(){o.data("lazydone",1);s.data("owidth",f.width);s.data("oheight",f.height);s.find(".slotholder").data("owidth",f.width);s.find(".slotholder").data("oheight",f.height);setTimeout(function(){u(n,e)},190);b(o,n);y(e,n);b(o,n);C(e,n);e.find(".tp-loader").transition({opacity:0,duration:300});setTimeout(function(){e.find(".tp-loader").css({display:"none"})},2200)})};f.src=s.find(".defaultimg").data("lazyload")}else{if(s.data("loadeddone")==t){var f=new Image;f.onload=function(){s.data("loadeddone",1);s.data("owidth",f.width);s.data("oheight",f.height);s.find(".slotholder").data("owidth",f.width);s.find(".slotholder").data("oheight",f.height);s.waitForImages(function(){b(o,n);y(e,n);b(o,n);C(e,n)})};f.src=s.find(".defaultimg").data("src")}else{C(e,n)}}}function C(n,r){function x(){e.each(v,function(e,t){if(t[0]==p||t[8]==p){l=t[1];d=t[2];y=b}b=b+1})}n.trigger("revolution.slide.onbeforeswap");r.transition=1;r.videoplaying=false;try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var u=n.find(">ul:first-child >li:eq("+r.next+")");var a=i.find(".slotholder");var f=u.find(".slotholder");i.css({visibility:"visible"});u.css({visibility:"visible"});if(f.data("kenburns")=="on")k(n,r);if(r.ie){if(p=="boxfade")p="boxslide";if(p=="slotfade-vertical")p="slotzoom-vertical";if(p=="slotfade-horizontal")p="slotzoom-horizontal"}if(u.data("delay")!=t){r.cd=0;r.delay=u.data("delay")}else{r.delay=r.origcd}i.css({left:"0px",top:"0px"});u.css({left:"0px",top:"0px"});if(u.data("differentissplayed")=="prepared"){u.data("differentissplayed","done");u.data("transition",u.data("savedtransition"));u.data("slotamount",u.data("savedslotamount"));u.data("masterspeed",u.data("savedmasterspeed"))}if(u.data("fstransition")!=t&&u.data("differentissplayed")!="done"){u.data("savedtransition",u.data("transition"));u.data("savedslotamount",u.data("slotamount"));u.data("savedmasterspeed",u.data("masterspeed"));u.data("transition",u.data("fstransition"));u.data("slotamount",u.data("fsslotamount"));u.data("masterspeed",u.data("fsmasterspeed"));u.data("differentissplayed","prepared")}var l=0;var c=u.data("transition").split(",");var h=u.data("nexttransid");if(h==t){h=0;u.data("nexttransid",h)}else{h=h+1;if(h==c.length)h=0;u.data("nexttransid",h)}var p=c[h];var d=0;if(p=="slidehorizontal"){p="slideleft";if(r.leftarrowpressed==1)p="slideright"}if(p=="slidevertical"){p="slideup";if(r.leftarrowpressed==1)p="slidedown"}var v=[["boxslide",0,1,10,0,"box",false,null,0],["boxfade",1,0,10,0,"box",false,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",true,false,2],["slotslide-vertical",3,0,0,200,"vertical",true,false,3],["curtain-1",4,3,0,0,"horizontal",true,true,4],["curtain-2",5,3,0,0,"horizontal",true,true,5],["curtain-3",6,3,25,0,"horizontal",true,true,6],["slotzoom-horizontal",7,0,0,400,"horizontal",true,true,7],["slotzoom-vertical",8,0,0,0,"vertical",true,true,8],["slotfade-horizontal",9,0,0,500,"horizontal",true,null,9],["slotfade-vertical",10,0,0,500,"vertical",true,null,10],["fade",11,0,1,300,"horizontal",true,null,11],["slideleft",12,0,1,0,"horizontal",true,true,12],["slideup",13,0,1,0,"horizontal",true,true,13],["slidedown",14,0,1,0,"horizontal",true,true,14],["slideright",15,0,1,0,"horizontal",true,true,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",false,true,17],["3dcurtain-vertical",18,0,10,100,"horizontal",false,true,18],["cubic",19,0,20,600,"horizontal",false,true,19],["cube",19,0,20,600,"horizontal",false,true,20],["flyin",20,0,4,600,"vertical",false,true,21],["turnoff",21,0,1,1600,"horizontal",false,true,22],["incube",22,0,20,600,"horizontal",false,true,23],["cubic-horizontal",23,0,20,500,"vertical",false,true,24],["cube-horizontal",23,0,20,500,"vertical",false,true,25],["incube-horizontal",24,0,20,500,"vertical",false,true,26],["turnoff-vertical",25,0,1,1600,"horizontal",false,true,27],["fadefromright",12,1,1,0,"horizontal",true,true,28],["fadefromleft",15,1,1,0,"horizontal",true,true,29],["fadefromtop",14,1,1,0,"horizontal",true,true,30],["fadefrombottom",13,1,1,0,"horizontal",true,true,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",true,true,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",true,true,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",true,true,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",true,true,35],["parallaxtoright",12,3,1,0,"horizontal",true,true,36],["parallaxtoleft",15,3,1,0,"horizontal",true,true,37],["parallaxtotop",14,3,1,0,"horizontal",true,true,38],["parallaxtobottom",13,3,1,0,"horizontal",true,true,39],["scaledownfromright",12,4,1,0,"horizontal",true,true,40],["scaledownfromleft",15,4,1,0,"horizontal",true,true,41],["scaledownfromtop",14,4,1,0,"horizontal",true,true,42],["scaledownfrombottom",13,4,1,0,"horizontal",true,true,43],["zoomout",13,5,1,0,"horizontal",true,true,44],["zoomin",13,6,1,0,"horizontal",true,true,45],["notransition",26,0,1,0,"horizontal",true,null,46]];var m=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];var g=[16,17,18,19,20,21,22,23,24,25,26,27];var l=0;var d=1;var y=0;var b=0;var w=new Array;if(p=="random"){p=Math.round(Math.random()*v.length-1);if(p>v.length-1)p=v.length-1}if(p=="random-static"){p=Math.round(Math.random()*m.length-1);if(p>m.length-1)p=m.length-1;p=m[p]}if(p=="random-premium"){p=Math.round(Math.random()*g.length-1);if(p>g.length-1)p=g.length-1;p=g[p]}x();if(o(8)&&l>15&&l<28){p=Math.round(Math.random()*m.length-1);if(p>m.length-1)p=m.length-1;p=m[p];b=0;x()}var T=-1;if(r.leftarrowpressed==1||r.act>r.next)T=1;r.leftarrowpressed=0;if(l>26)l=26;if(l<0)l=0;var N=300;if(u.data("masterspeed")!=t&&u.data("masterspeed")>99&&u.data("masterspeed")<4001)N=u.data("masterspeed");w=v[y];n.parent().find(".bullet").each(function(){var t=e(this);t.removeClass("selected");if(r.navigationArrows=="withbullet"||r.navigationArrows=="nexttobullets"){if(t.index()-1==r.next)t.addClass("selected")}else{if(t.index()==r.next)t.addClass("selected")}});n.find(">li").each(function(){var t=e(this);if(t.index!=r.act&&t.index!=r.next)t.css({"z-index":16})});i.css({"z-index":18});u.css({"z-index":20});u.css({opacity:0});if(i.index()!=u.index()&&r.firststart!=1){W(i,r)}q(u,r);if(u.data("slotamount")==t||u.data("slotamount")<1){r.slots=Math.round(Math.random()*12+4);if(p=="boxslide")r.slots=Math.round(Math.random()*6+3);else if(p=="flyin")r.slots=Math.round(Math.random()*4+1)}else{r.slots=u.data("slotamount")}if(u.data("rotate")==t)r.rotate=0;else if(u.data("rotate")==999)r.rotate=Math.round(Math.random()*360);else r.rotate=u.data("rotate");if(!e.support.transition||r.ie||r.ie9)r.rotate=0;if(r.firststart==1){i.css({opacity:0});r.firststart=0}N=N+w[4];if((l==4||l==5||l==6)&&r.slots<3)r.slots=3;if(w[3]!=0)r.slots=Math.min(r.slots,w[3]);if(l==9)r.slots=r.width/20;if(l==10)r.slots=r.height/20;if(w[5]=="box"){if(w[7]!=null)S(a,r,w[7]);if(w[6]!=null)S(f,r,w[6])}else if(w[5]=="vertical"||w[5]=="horizontal"){if(w[7]!=null)E(a,r,w[7],w[5]);if(w[6]!=null)E(f,r,w[6],w[5])}if(l<12||l>16)u.css({opacity:1});if(l==0){f.find(".defaultimg").css({opacity:0});var C=Math.ceil(r.height/r.sloth);var L=0;f.find(".slotslide").each(function(t){var s=e(this);L=L+1;if(L==C)L=0;TweenLite.fromTo(s,N/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate},{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:(t*15+L*30)/1500,ease:Power2.easeOut,onComplete:function(){if(t==r.slots*r.slots-1){P(n,r,f,a,u,i)}}})})}if(l==1){f.find(".defaultimg").css({opacity:0});var A;f.find(".slotslide").each(function(t){var n=e(this);rand=Math.random()*N+300;rand2=Math.random()*500+200;if(rand+rand2>A)A=rand2+rand2;TweenLite.fromTo(n,rand/1e3,{opacity:0,transformPerspective:600,rotation:r.rotate},{opacity:1,ease:Power2.easeInOut,rotation:0,delay:rand2/1e3})});setTimeout(function(){P(n,r,f,a,u,i)},N+300)}if(l==2){f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this);TweenLite.to(t,N/1e3,{left:r.slotw,rotation:0-r.rotate,onComplete:function(){P(n,r,f,a,u,i)}})});f.find(".slotslide").each(function(){var t=e(this);TweenLite.fromTo(t,N/1e3,{left:0-r.slotw,rotation:r.rotate,transformPerspective:600},{left:0,rotation:0,ease:Power2.easeOut,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==3){f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this);TweenLite.to(t,N/1e3,{top:r.sloth,rotation:r.rotate,transformPerspective:600,onComplete:function(){P(n,r,f,a,u,i)}})});f.find(".slotslide").each(function(){var t=e(this);TweenLite.fromTo(t,N/1e3,{top:0-r.sloth,rotation:r.rotate,transformPerspective:600},{top:0,rotation:0,ease:Power2.easeOut,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==4||l==5){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var O=N/1e3;var M=O;a.find(".slotslide").each(function(t){var n=e(this);var i=t*O/r.slots;if(l==5)i=(r.slots-t-1)*O/r.slots/1.5;TweenLite.to(n,O*3,{transformPerspective:600,top:0+r.height,opacity:.5,rotation:r.rotate,ease:Power2.easeInOut,delay:i})});f.find(".slotslide").each(function(t){var s=e(this);var o=t*O/r.slots;if(l==5)o=(r.slots-t-1)*O/r.slots/1.5;TweenLite.fromTo(s,O*3,{top:0-r.height,opacity:.5,rotation:r.rotate,transformPerspective:600},{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:o,onComplete:function(){if(t==r.slots-1){P(n,r,f,a,u,i)}}})})}if(l==6){if(r.slots<2)r.slots=2;f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);a.find(".slotslide").each(function(t){var n=e(this);if(t<r.slots/2)var i=(t+2)*60;else var i=(2+r.slots-t)*60;TweenLite.to(n,(N+i)/1e3,{top:0+r.height,opacity:1,rotation:r.rotate,transformPerspective:600,ease:Power2.easeInOut})});f.find(".slotslide").each(function(t){var s=e(this);if(t<r.slots/2)var o=(t+2)*60;else var o=(2+r.slots-t)*60;TweenLite.fromTo(s,(N+o)/1e3,{top:0-r.height,opacity:1,rotation:r.rotate,transformPerspective:600},{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function(){if(t==Math.round(r.slots/2)){P(n,r,f,a,u,i)}}})})}if(l==7){N=N*2;f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);a.find(".slotslide").each(function(){var t=e(this).find("div");TweenLite.to(t,N/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:r.slotw*2+"px",height:r.height*2+"px",opacity:0,rotation:r.rotate,transformPerspective:600,ease:Power2.easeOut})});f.find(".slotslide").each(function(t){var s=e(this).find("div");TweenLite.fromTo(s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:Power2.easeOut,top:0+"px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==8){N=N*3;f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this).find("div");TweenLite.to(t,N/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:r.width*2+"px",height:r.sloth*2+"px",transformPerspective:600,opacity:0,rotation:r.rotate})});f.find(".slotslide").each(function(t){var s=e(this).find("div");TweenLite.fromTo(s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0+"px",top:0-t*r.sloth+"px",width:f.find(".defaultimg").data("neww")+"px",height:f.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==9||l==10){f.find(".defaultimg").css({opacity:0});var _=0;f.find(".slotslide").each(function(t){var n=e(this);_++;TweenLite.fromTo(n,N/1e3,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:t*4/1e3})});setTimeout(function(){P(n,r,f,a,u,i)},N+_*4)}if(l==11||l==26){f.find(".defaultimg").css({opacity:0,position:"relative"});var _=0;if(l==26)N=0;f.find(".slotslide").each(function(t){var n=e(this);TweenLite.fromTo(n,N/1e3,{opacity:0},{opacity:1,ease:Power2.easeInOut})});setTimeout(function(){P(n,r,f,a,u,i)},N+15)}if(l==12||l==13||l==14||l==15){setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);f.find(".defaultimg").css({opacity:0});var D=r.width;var H=r.height;var B=f.find(".slotslide");if(r.fullWidth=="on"||r.fullSreen=="on"){D=B.width();H=B.height()}var j=0;var F=0;if(l==12)j=D;else if(l==15)j=0-D;else if(l==13)F=H;else if(l==14)F=0-H;var I=1;var R=1;var U=1;var z=Power2.easeInOut;var X=Power2.easeInOut;var V=N/1e3;var $=V;if(d==1)I=0;if(d==2)I=0;if(d==3){z=Power2.easeInOut;X=Power1.easeInOut;i.css({position:"absolute","z-index":20});u.css({position:"absolute","z-index":15});V=N/1200}if(d==4||d==5)R=.6;if(d==6)R=1.4;if(d==5||d==6){U=1.4;I=0;D=0;H=0;j=0;F=0}if(d==6)U=.6;TweenLite.fromTo(B,V,{left:j,top:F,scale:U,opacity:I,rotation:r.rotate},{opacity:1,rotation:0,left:0,top:0,scale:1,ease:X,onComplete:function(){P(n,r,f,a,u,i);i.css({position:"absolute","z-index":18});u.css({position:"absolute","z-index":20})}});var J=a.find(".slotslide");if(d==4||d==5){D=0;H=0}if(d!=1){if(l==12)TweenLite.to(J,$,{left:0-D+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==15)TweenLite.to(J,$,{left:D+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==13)TweenLite.to(J,$,{top:0-H+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==14)TweenLite.to(J,$,{top:H+"px",scale:R,opacity:I,rotation:r.rotate,ease:z})}u.css({opacity:1})}if(l==16){i.css({position:"absolute","z-index":20});u.css({position:"absolute","z-index":15});i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");i.find(".tp-half-two").removeClass("tp-half-one");var D=r.width;var H=r.height;if(r.autoHeight=="on")H=n.height();i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+D+"px;height:"+H+'px;"></div>');i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+D+"px;height:"+H+'px;"></div>');i.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');TweenLite.set(i.find(".tp-half-two"),{width:D,height:H,overflow:"hidden",zIndex:15,position:"absolute",top:H/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"});TweenLite.set(i.find(".tp-half-one"),{width:D,height:H/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"});var K=i.find(".defaultimg");var Q=Math.round(Math.random()*20-10);var G=Math.round(Math.random()*20-10);var Y=Math.round(Math.random()*20-10);var Z=Math.random()*.4-.2;var et=Math.random()*.4-.2;var tt=Math.random()*1+1;var nt=Math.random()*1+1;TweenLite.fromTo(i.find(".tp-half-one"),N/1e3,{width:D,height:H/2,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"},{scale:tt,rotation:Q,y:0-H-H/4,ease:Power2.easeInOut});setTimeout(function(){TweenLite.set(i.find(".tp-half-one"),{overflow:"hidden"})},50);TweenLite.fromTo(i.find(".tp-half-one"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});TweenLite.fromTo(i.find(".tp-half-two"),N/1e3,{width:D,height:H,overflow:"hidden",position:"absolute",top:H/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"},{scale:nt,rotation:G,y:H+H/4,ease:Power2.easeInOut});TweenLite.fromTo(i.find(".tp-half-two"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});if(i.html()!=null)TweenLite.fromTo(u,(N-200)/1e3,{opacity:0,scale:.8,x:r.width*Z,y:H*et,rotation:Y,transformPerspective:600,transformOrigin:"center center"},{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut});f.find(".defaultimg").css({opacity:1});setTimeout(function(){i.css({position:"absolute","z-index":18});u.css({position:"absolute","z-index":20});f.find(".defaultimg").css({opacity:1});a.find(".defaultimg").css({opacity:0});if(i.find(".tp-half-one").length>0){i.find(".tp-half-one .defaultimg").unwrap();i.find(".tp-half-one .slotholder").unwrap()}i.find(".tp-half-two").remove();r.transition=0;r.act=r.next},N);u.css({opacity:1})}if(l==17){f.find(".defaultimg").css({opacity:0});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}})})}if(l==18){f.find(".defaultimg").css({opacity:0});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/500,{opacity:0,rotationY:310,scale:.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}})})}if(l==19||l==22){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");var st=90;var I=1;if(T==1)st=-90;if(l==19){var ot="center center -"+r.height/2;I=0}else{var ot="center center "+r.height/2}TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:0,rotationY:r.rotate,opacity:I,top:0,scale:.8,transformPerspective:600,transformOrigin:ot,rotationX:st},{left:0,rotationY:0,opacity:1,top:0,z:0,scale:1,rotationX:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})});a.find(".slotslide").each(function(t){var s=e(this);var o=-90;if(T==1)o=90;TweenLite.fromTo(s,N/1e3,{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationX:0},{opacity:1,rotationY:r.rotate,top:0,scale:.8,rotationX:o,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}if(l==20){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");if(T==1){var ut=-r.width;var st=70;var ot="left center -"+r.height/2}else{var ut=r.width;var st=-70;var ot="right center -"+r.height/2}f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1500,{left:ut,rotationX:40,z:-600,opacity:I,top:0,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,delay:t*50/1e3,ease:Power2.easeInOut});TweenLite.fromTo(s,N/1e3,{rotationX:40,z:-600,opacity:I,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/2e3})});a.find(".slotslide").each(function(t){var s=e(this);if(T!=1){var o=-r.width;var l=70;var c="left center -"+r.height/2}else{var o=r.width;var l=-70;var c="right center -"+r.height/2}TweenLite.fromTo(s,N/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,transformPerspective:600,transformOrigin:c,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:o,scale:.8,rotationY:l,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}if(l==21||l==25){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");if(T==1){var ut=-r.width;var st=110;if(l==25){var ot="center top 0";rot2=-st;st=r.rotate}else{var ot="left center 0";rot2=r.rotate}}else{var ut=r.width;var st=-110;if(l==25){var ot="center bottom 0";rot2=-st;st=r.rotate}else{var ot="right center 0";rot2=r.rotate}}f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1500,{left:0,rotationX:rot2,z:0,opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,rotationX:0,top:0,z:0,scale:1,rotationY:0,delay:t*100/1e3+N/1e4,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.3,{opacity:1,delay:t*100/1e3+N*.2/2e3+N/1e4})});if(T!=1){var ut=-r.width;var st=90;if(l==25){var ot="center top 0";rot2=-st;st=r.rotate}else{var ot="left center 0";rot2=r.rotate}}else{var ut=r.width;var st=-90;if(l==25){var ot="center bottom 0";rot2=-st;st=r.rotate}else{var ot="right center 0";rot2=r.rotate}}a.find(".slotslide").each(function(t){var n=e(this);TweenLite.fromTo(n,N/3e3,{left:0,rotationX:0,z:0,opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:0},{left:0,rotationX:rot2,top:0,z:0,scale:1,rotationY:st,delay:t*100/1e3,ease:Power1.easeInOut});TweenLite.to(n,.2,{opacity:0,delay:t*50/1e3+(N/3e3-N/1e4)})})}if(l==23||l==24){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");var st=-90;if(T==1)st=90;var I=1;if(l==23){var ot="center center -"+r.width/2;I=0}else{var ot="center center "+r.width/2}var at=0;TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:at,rotationX:r.rotate,opacity:I,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})});st=90;if(T==1)st=-90;a.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:0},{left:at,opacity:1,rotationX:r.rotate,top:0,scale:1,rotationY:st,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}var ft={};ft.slideIndex=r.next+1;n.trigger("revolution.slide.onchange",ft);setTimeout(function(){n.trigger("revolution.slide.onafterswap")},N);n.trigger("revolution.slide.onvideostop")}function k(n,r){try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var o=n.find(">ul:first-child >li:eq("+r.next+")");var u=i.find(".slotholder");var a=o.find(".slotholder");a.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").restart();TweenLite.killTweensOf(n,false);TweenLite.set(n,{scale:1,rotationZ:0});n.data("bgposition",a.data("bgposition"));n.data("currotate",a.data("rotationstart"));n.data("curscale",a.data("bgfit"))})}function L(n,r){try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var u=n.find(">ul:first-child >li:eq("+r.next+")");var a=i.find(".slotholder");var f=u.find(".slotholder");var l=f.data("bgposition"),c=f.data("bgpositionend"),h=f.data("zoomstart")/100,p=f.data("zoomend")/100,d=f.data("rotationstart"),v=f.data("rotationend"),m=f.data("bgfit"),g=f.data("bgfitend"),y=f.data("easeme"),b=f.data("duration")/1e3;if(m==t)m=100;if(g==t)g=100;m=A(m,f,r);g=A(g,f,r);if(h==t)h=1;if(p==t)p=1;if(d==t)d=0;if(v==t)v=0;if(h<1)h=1;if(p<1)p=1;f.find(".defaultimg").each(function(){var t=e(this);t.data("kenburn",TweenLite.fromTo(t,b,{transformPerspective:1200,backgroundSize:m,z:0,backgroundPosition:l,rotationZ:d},{yoyo:2,rotationZ:v,ease:y,backgroundSize:g,backgroundPosition:c,onUpdate:function(){t.data("bgposition",t.css("backgroundPosition"));if(!o(8))t.data("currotate",D(t));if(!o(8))t.data("curscale",t.css("backgroundSize"))}}))})}function A(e,t,n){var r=t.data("owidth");var i=t.data("oheight");var s=n.container.width()/r;var o=i*s;var u=o/n.container.height()*e;return e+"% "+u+"%"}function O(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");return t}function M(e){return e.replace(/^matrix(3d)?\((.*)\)$/,"$2").split(/, /)}function _(e){var t=M(O(e)),n=1;if(t[0]!=="none"){var r=t[0],i=t[1],s=10;n=Math.round(Math.sqrt(r*r+i*i)*s)/s}return n}function D(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");if(t!=="none"){var n=t.split("(")[1].split(")")[0].split(",");var r=n[0];var i=n[1];var s=Math.round(Math.atan2(i,r)*(180/Math.PI))}else{var s=0}return s<0?s+=360:s}function P(e,t,n,r,i,s){T(e,t);n.find(".defaultimg").css({opacity:1});if(i.index()!=s.index())r.find(".defaultimg").css({opacity:0});t.act=t.next;c(e);if(n.data("kenburns")=="on")L(e,t)}function H(t){var n=t.target.getVideoEmbedCode();var r=e("#"+n.split('id="')[1].split('"')[0]);var i=r.closest(".tp-simpleresponsive");var s=r.parent().data("player");if(t.data==YT.PlayerState.PLAYING){var o=i.find(".tp-bannertimer");var u=o.data("opt");o.stop();if(r.closest(".tp-caption").data("volume")=="mute")s.mute();u.videoplaying=true;u.videostartednow=1}else{var o=i.find(".tp-bannertimer");var u=o.data("opt");if(t.data!=-1){if(u.conthover==0)o.animate({width:"100%"},{duration:u.delay-u.cd-100,queue:false,easing:"linear"});u.videoplaying=false;u.videostoppednow=1}}if(t.data==0&&u.nextslideatend==true)u.container.revnext()}function B(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false);else e.attachEvent(t,n,false)}function j(t,n){var r=$f(t);var i=e("#"+t);var s=i.closest(".tp-simpleresponsive");r.addEvent("ready",function(e){if(n)r.api("play");r.addEvent("play",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");t.stop();n.videoplaying=true;if(i.closest(".tp-caption").data("volume")=="mute")r.api("setVolume","0")});r.addEvent("finish",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostartednow=1;if(n.nextslideatend==true)n.container.revnext()});r.addEvent("pause",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostoppednow=1})})}function F(n,r){if(r==t)r=e(n["b"]).attr("id");var i=e("#"+r);var s=i.closest(".tp-simpleresponsive");n.on("play",function(){if(i.closest(".tp-caption").data("volume")=="mute")n.volume(0);var t=e("body").find(".tp-bannertimer");var r=t.data("opt");t.stop();try{r.videoplaying=true}catch(s){}});n.on("pause",function(){var e=s.find(".tp-bannertimer");var t=e.data("opt");if(t.conthover==0)e.animate({width:"100%"},{duration:t.delay-t.cd-100,queue:false,easing:"linear"});t.videoplaying=false;t.videostoppednow=1});n.on("ended",function(){var e=s.find(".tp-bannertimer");var t=e.data("opt");if(t.conthover==0)e.animate({width:"100%"},{duration:t.delay-t.cd-100,queue:false,easing:"linear"});t.videoplaying=false;t.videostoppednow=1;if(t.nextslideatend==true)t.container.revnext()});n.on("loadedmetadata",function(e){var n=0;var r=0;for(var o in this){try{if(this[o].hasOwnProperty("videoWidth"))n=this[o].videoWidth;if(this[o].hasOwnProperty("videoHeight"))r=this[o].videoHeight}catch(u){}}var a=n/r;if(i.data("mediaAspect")==t)i.data("mediaAspect",a);if(i.closest(".tp-caption").data("forcecover")==1)I(i,s)})}function I(e,t){var n=t.width();var r=t.height();var i=e.data("mediaAspect");var s=n/r;e.parent().find(".vjs-poster").css({width:"100%",height:"100%"});if(s<i){e.width(r*i).height(r);e.css("top",0).css("left",-(r*i-n)/2).css("height",r);e.find(".vjs-tech").css("width",r*i)}else{e.width(n).height(n/i);e.css("top",-(n/i-r)/2).css("left",0).css("height",n/i);e.find(".vjs-tech").css("width","100%")}}function q(n,r,i){var s=0;var o=0;n.find(".tp-caption").each(function(n){s=r.width/2-r.startwidth*r.bw/2;var u=r.bw;var a=r.bh;if(r.fullScreen=="on")o=r.height/2-r.startheight*r.bh/2;if(r.autoHeight=="on")o=r.container.height()/2-r.startheight*r.bh/2;if(o<0)o=0;var f=e(this);var l=0;if(r.width<r.hideCaptionAtLimit&&f.data("captionhidden")=="on"){f.addClass("tp-hidden-caption");l=1}else{if(r.width<r.hideAllCaptionAtLimit||r.width<r.hideAllCaptionAtLilmit){f.addClass("tp-hidden-caption");l=1}else{f.removeClass("tp-hidden-caption")}}if(l==0){if(f.data("linktoslide")!=t&&!f.hasClass("hasclicklistener")){f.addClass("hasclicklistener");f.css({cursor:"pointer"});if(f.data("linktoslide")!="no"){f.click(function(){var t=e(this);var n=t.data("linktoslide");if(n!="next"&&n!="prev"){r.container.data("showus",n);r.container.parent().find(".tp-rightarrow").click()}else if(n=="next")r.container.parent().find(".tp-rightarrow").click();else if(n=="prev")r.container.parent().find(".tp-leftarrow").click()})}}if(s<0)s=0;var c="iframe"+Math.round(Math.random()*1e3+1);if(f.find("iframe").length>0||f.find("video").length>0){if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){f.data("autoplay",true)}f.find("iframe").each(function(){var n=e(this);r.nextslideatend=f.data("nextslideatend");if(f.data("thumbimage")!=t&&f.data("thumbimage").length>2&&f.data("autoplay")!=true&&!i){f.find(".tp-thumb-image").remove();f.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+f.data("thumbimage")+'); background-size:cover"></div>')}if(n.attr("src").toLowerCase().indexOf("youtube")>=0){if(!n.hasClass("HasListener")){try{n.attr("id",c);var s;if(f.data("autoplay")==true)s=new YT.Player(c,{events:{onStateChange:H,onReady:function(e){e.target.playVideo()}}});else s=new YT.Player(c,{events:{onStateChange:H}});n.addClass("HasListener");f.data("player",s)}catch(o){}}else{if(f.data("autoplay")==true){var s=f.data("player");f.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")s.seekTo(0);s.playVideo()},f.data("start")))}}f.find(".tp-thumb-image").click(function(){TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});var t=f.data("player");t.playVideo()})}else{if(n.attr("src").toLowerCase().indexOf("vimeo")>=0){if(!n.hasClass("HasListener")){n.addClass("HasListener");n.attr("id",c);var u=n.attr("src");var a={},l=u,h=/([^&=]+)=([^&]*)/g,p;while(p=h.exec(l)){a[decodeURIComponent(p[1])]=decodeURIComponent(p[2])}if(a["player_id"]!=t)u=u.replace(a["player_id"],c);else u=u+"&player_id="+c;try{u=u.replace("api=0","api=1")}catch(o){}u=u+"&api=1";n.attr("src",u);var s=f.find("iframe")[0];$f(s).addEvent("ready",function(){j(c,f.data("autoplay"))})}else{if(f.data("autoplay")==true){var n=f.find("iframe");var d=n.attr("id");var v=$f(d);f.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")v.api("seekTo",0);v.api("play")},f.data("start")))}}f.find(".tp-thumb-image").click(function(){TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});var t=f.find("iframe");var n=t.attr("id");var r=$f(n);r.api("play")})}}});if(f.find("video").length>0){f.find("video").each(function(n){var i=e(this).parent();if(f.data("dottedoverlay")!="none"&&f.data("dottedoverlay")!=t)if(f.find(".tp-dottedoverlay").length!=1)i.append('<div class="tp-dottedoverlay '+f.data("dottedoverlay")+'"></div>');var s=16/9;if(f.data("aspectratio")=="4:3")s=4/3;i.data("mediaAspect",s);I(i,r.container);if(i.hasClass("video-js")){r.nextslideatend=f.data("nextslideatend");if(!i.hasClass("HasListener")){i.addClass("HasListener");var o="videoid_"+Math.round(Math.random()*1e3+1);i.attr("id",o);videojs(o).ready(function(){F(this,o)})}else{o=i.attr("id")}i.find(".vjs-poster").css({display:"block"});if(f.data("autoplay")==true){var u=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){u.stop();r.videoplaying=true},200);videojs(o).ready(function(){var e=this;try{if(f.data("forcerewind")=="on")e.currentTime(0)}catch(t){}i.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")e.currentTime(0);if(i.closest(".tp-caption").data("volume")=="mute")e.volume(0);setTimeout(function(){e.play(0);i.find(".vjs-poster").css({display:"none"})},50)},10+f.data("start")))})}if(i.data("ww")==t)i.data("ww",i.width());if(i.data("hh")==t)i.data("hh",i.height());videojs(o).ready(function(){if(!f.hasClass("fullscreenvideo")){var e=videojs(o);try{e.width(i.data("ww")*r.bw);e.height(i.data("hh")*r.bh)}catch(t){}}});if(i.closest(".tp-caption").data("forcecover")==1){I(i,r.container);i.addClass("fullcoveredvideo")}}})}if(f.data("autoplay")==true){var h=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){h.stop();r.videoplaying=true},200);r.videoplaying=true;if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){f.data("autoplay",false);f.data("autoplayonlyfirsttime",false)}}}var p=0;var d=0;if(f.find("img").length>0){var v=f.find("img");if(v.data("ww")==t)v.data("ww",v.width());if(v.data("hh")==t)v.data("hh",v.height());var m=v.data("ww");var g=v.data("hh");v.width(m*r.bw);v.height(g*r.bh);p=v.width();d=v.height()}else{if(f.find("iframe").length>0||f.find(".video-js").length>0){var v=f.find("iframe");v.css({display:"block"});if(f.data("ww")==t){f.data("ww",v.width())}if(f.data("hh")==t)f.data("hh",v.height());var m=f.data("ww");var g=f.data("hh");var y=f;if(y.data("fsize")==t)y.data("fsize",parseInt(y.css("font-size"),0)||0);if(y.data("pt")==t)y.data("pt",parseInt(y.css("paddingTop"),0)||0);if(y.data("pb")==t)y.data("pb",parseInt(y.css("paddingBottom"),0)||0);if(y.data("pl")==t)y.data("pl",parseInt(y.css("paddingLeft"),0)||0);if(y.data("pr")==t)y.data("pr",parseInt(y.css("paddingRight"),0)||0);if(y.data("mt")==t)y.data("mt",parseInt(y.css("marginTop"),0)||0);if(y.data("mb")==t)y.data("mb",parseInt(y.css("marginBottom"),0)||0);if(y.data("ml")==t)y.data("ml",parseInt(y.css("marginLeft"),0)||0);if(y.data("mr")==t)y.data("mr",parseInt(y.css("marginRight"),0)||0);if(y.data("bt")==t)y.data("bt",parseInt(y.css("borderTop"),0)||0);if(y.data("bb")==t)y.data("bb",parseInt(y.css("borderBottom"),0)||0);if(y.data("bl")==t)y.data("bl",parseInt(y.css("borderLeft"),0)||0);if(y.data("br")==t)y.data("br",parseInt(y.css("borderRight"),0)||0);if(y.data("lh")==t)y.data("lh",parseInt(y.css("lineHeight"),0)||0);var b=r.width;var w=r.height;if(b>r.startwidth)b=r.startwidth;if(w>r.startheight)w=r.startheight;if(!f.hasClass("fullscreenvideo"))f.css({"font-size":y.data("fsize")*r.bw+"px","padding-top":y.data("pt")*r.bh+"px","padding-bottom":y.data("pb")*r.bh+"px","padding-left":y.data("pl")*r.bw+"px","padding-right":y.data("pr")*r.bw+"px","margin-top":y.data("mt")*r.bh+"px","margin-bottom":y.data("mb")*r.bh+"px","margin-left":y.data("ml")*r.bw+"px","margin-right":y.data("mr")*r.bw+"px","border-top":y.data("bt")*r.bh+"px","border-bottom":y.data("bb")*r.bh+"px","border-left":y.data("bl")*r.bw+"px","border-right":y.data("br")*r.bw+"px","line-height":y.data("lh")*r.bh+"px",height:g*r.bh+"px","white-space":"nowrap"});else{s=0;o=0;f.data("x",0);f.data("y",0);var E=r.height;if(r.autoHeight=="on")E=r.container.height();f.css({width:r.width,height:E})}v.width(m*r.bw);v.height(g*r.bh);p=v.width();d=v.height()}else{f.find(".tp-resizeme, .tp-resizeme *").each(function(){z(e(this),r)});if(f.hasClass("tp-resizeme")){f.find("*").each(function(){z(e(this),r)})}z(f,r);d=f.outerHeight(true);p=f.outerWidth(true);var S=f.outerHeight();var x=f.css("backgroundColor");f.find(".frontcorner").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderTopColor:x});f.find(".frontcornertop").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderBottomColor:x});f.find(".backcorner").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderBottomColor:x});f.find(".backcornertop").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderTopColor:x})}}if(r.fullScreenAlignForce=="on"){u=1;a=1;s=0;o=0}if(f.data("voffset")==t)f.data("voffset",0);if(f.data("hoffset")==t)f.data("hoffset",0);var T=f.data("voffset")*u;var N=f.data("hoffset")*u;var C=r.startwidth*u;var k=r.startheight*u;if(r.fullScreenAlignForce=="on"){C=r.container.width();k=r.container.height()}if(f.data("x")=="center"||f.data("xcenter")=="center"){f.data("xcenter","center");f.data("x",(C/2-f.outerWidth(true)/2)/u+N)}if(f.data("x")=="left"||f.data("xleft")=="left"){f.data("xleft","left");f.data("x",0/u+N)}if(f.data("x")=="right"||f.data("xright")=="right"){f.data("xright","right");f.data("x",(C-f.outerWidth(true)+N)/u)}if(f.data("y")=="center"||f.data("ycenter")=="center"){f.data("ycenter","center");f.data("y",(k/2-f.outerHeight(true)/2)/a+T)}if(f.data("y")=="top"||f.data("ytop")=="top"){f.data("ytop","top");f.data("y",0/r.bh+T)}if(f.data("y")=="bottom"||f.data("ybottom")=="bottom"){f.data("ybottom","bottom");f.data("y",(k-f.outerHeight(true)+T)/u)}if(f.data("start")==t)f.data("start",1e3);var L=f.data("easing");if(L==t)L="Power1.easeOut";var A=f.data("start")/1e3;var O=f.data("speed")/1e3;var M=u*f.data("x")+s;var _=r.bh*f.data("y")+o;if(r.fullScreenAlignForce=="on")_=f.data("y")+o;TweenLite.killTweensOf(f,false);clearTimeout(f.data("reversetimer"));var D=0,P=M,B=_,q=2,U=1,W=0,V=1,$=1,J=1,K=0,Q=0,G=0,Y=0,Z=0,et=0,tt=0,nt="center,center",rt=300,it=0,st=false,ot=0;if(f.data("repeat")!=t)it=f.data("repeat");if(f.data("yoyo")!=t)st=f.data("yoyo");if(f.data("repeatdelay")!=t)ot=f.data("repeatdelay");if(f.hasClass("customin")){var ut=f.data("customin").split(";");e.each(ut,function(e,t){t=t.split(":");var n=t[0],r=t[1];if(n=="rotationX")Q=parseInt(r,0);if(n=="rotationY")G=parseInt(r,0);if(n=="rotationZ")Y=parseInt(r,0);if(n=="scaleX")$=parseFloat(r);if(n=="scaleY")J=parseFloat(r);if(n=="opacity")tt=parseFloat(r);if(n=="skewX")Z=parseInt(r,0);if(n=="skewY")et=parseInt(r,0);if(n=="x")P=M+parseInt(r,0);if(n=="y")B=_+parseInt(r,0);if(n=="z")q=parseInt(r,0);if(n=="transformOrigin")nt=r.toString();if(n=="transformPerspective")rt=parseInt(r,0)})}if(f.hasClass("randomrotate")){V=Math.random()*3+1;K=Math.round(Math.random()*200-100);P=M+Math.round(Math.random()*200-100);B=_+Math.round(Math.random()*200-100)}if(f.hasClass("lfr")||f.hasClass("skewfromright"))P=15+r.width;if(f.hasClass("lfl")||f.hasClass("skewfromleft"))P=-15-p;if(f.hasClass("sfl")|f.hasClass("skewfromleftshort"))P=M-50;if(f.hasClass("sfr")|f.hasClass("skewfromrightshort"))P=M+50;if(f.hasClass("lft"))B=-25-d;if(f.hasClass("lfb"))B=25+r.height;if(f.hasClass("sft"))B=_-50;if(f.hasClass("sfb"))B=_+50;if(f.hasClass("skewfromright")||f.hasClass("skewfromrightshort"))Z=-85;if(f.hasClass("skewfromleft")||f.hasClass("skewfromleftshort"))Z=85;if(R().toLowerCase()=="safari"){Q=0;G=0}P=Math.round(P);B=Math.round(B);M=Math.round(M);_=Math.round(_);if(f.hasClass("customin")){f.data("anim",TweenLite.fromTo(f,O,{scaleX:$,scaleY:J,rotationX:Q,rotationY:G,rotationZ:Y,x:0,y:0,left:P,top:B,z:q,opacity:tt,transformPerspective:rt,transformOrigin:nt,visibility:"hidden"},{left:M,top:_,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",opacity:1,delay:A,ease:L,overwrite:"all"}))}else{f.data("anim",TweenLite.fromTo(f,O,{scale:V,rotationX:0,rotationY:0,skewY:0,rotation:K,left:P+"px",top:B+"px",opacity:0,z:0,x:0,y:0,skewX:Z,transformPerspective:600,visibility:"visible"},{left:M+"px",top:_+"px",scale:1,skewX:0,rotation:0,z:0,visibility:"visible",opacity:1,delay:A,ease:L,overwrite:"all",yoyo:st,repeat:it,repeatDelay:ot}))}f.data("killall",setTimeout(function(){f.css({transform:"none","-moz-transform":"none","-webkit-transform":"none"})},O*1e3+A*1e3+20));f.data("timer",setTimeout(function(){if(f.hasClass("fullscreenvideo"))f.css({display:"block"})},f.data("start")));if(f.data("end")!=t)X(f,r,f.data("end")/1e3)}});var u=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");u.data("opt",r)}function R(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[0]}function U(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[1]}function z(e,n){if(e.data("fsize")==t)e.data("fsize",parseInt(e.css("font-size"),0)||0);if(e.data("pt")==t)e.data("pt",parseInt(e.css("paddingTop"),0)||0);if(e.data("pb")==t)e.data("pb",parseInt(e.css("paddingBottom"),0)||0);if(e.data("pl")==t)e.data("pl",parseInt(e.css("paddingLeft"),0)||0);if(e.data("pr")==t)e.data("pr",parseInt(e.css("paddingRight"),0)||0);if(e.data("mt")==t)e.data("mt",parseInt(e.css("marginTop"),0)||0);if(e.data("mb")==t)e.data("mb",parseInt(e.css("marginBottom"),0)||0);if(e.data("ml")==t)e.data("ml",parseInt(e.css("marginLeft"),0)||0);if(e.data("mr")==t)e.data("mr",parseInt(e.css("marginRight"),0)||0);if(e.data("bt")==t)e.data("bt",parseInt(e.css("borderTopWidth"),0)||0);if(e.data("bb")==t)e.data("bb",parseInt(e.css("borderBottomWidth"),0)||0);if(e.data("bl")==t)e.data("bl",parseInt(e.css("borderLeftWidth"),0)||0);if(e.data("br")==t)e.data("br",parseInt(e.css("borderRightWidth"),0)||0);if(e.data("lh")==t)e.data("lh",parseInt(e.css("lineHeight"),0)||0);if(e.data("minwidth")==t)e.data("minwidth",parseInt(e.css("minWidth"),0)||0);if(e.data("minheight")==t)e.data("minheight",parseInt(e.css("minHeight"),0)||0);if(e.data("maxwidth")==t)e.data("maxwidth",parseInt(e.css("maxWidth"),0)||"none");if(e.data("maxheight")==t)e.data("maxheight",parseInt(e.css("maxHeight"),0)||"none");if(e.data("wan")==t)e.data("wan",e.css("-webkit-transition"));if(e.data("moan")==t)e.data("moan",e.css("-moz-animation-transition"));if(e.data("man")==t)e.data("man",e.css("-ms-animation-transition"));if(e.data("ani")==t)e.data("ani",e.css("transition"));e.css("-webkit-transition","none");e.css("-moz-transition","none");e.css("-ms-transition","none");e.css("transition","none");TweenLite.set(e,{fontSize:Math.round(e.data("fsize")*n.bw)+"px",paddingTop:Math.round(e.data("pt")*n.bh)+"px",paddingBottom:Math.round(e.data("pb")*n.bh)+"px",paddingLeft:Math.round(e.data("pl")*n.bw)+"px",paddingRight:Math.round(e.data("pr")*n.bw)+"px",marginTop:e.data("mt")*n.bh+"px",marginBottom:e.data("mb")*n.bh+"px",marginLeft:e.data("ml")*n.bw+"px",marginRight:e.data("mr")*n.bw+"px",borderTopWidth:Math.round(e.data("bt")*n.bh)+"px",borderBottomWidth:Math.round(e.data("bb")*n.bh)+"px",borderLeftWidth:Math.round(e.data("bl")*n.bw)+"px",borderRightWidth:Math.round(e.data("br")*n.bw)+"px",lineHeight:Math.round(e.data("lh")*n.bh)+"px",whiteSpace:"nowrap",minWidth:e.data("minwidth")*n.bw+"px",minHeight:e.data("minheight")*n.bh+"px"});setTimeout(function(){e.css("-webkit-transition",e.data("wan"));e.css("-moz-transition",e.data("moan"));e.css("-ms-transition",e.data("man"));e.css("transition",e.data("ani"))},30);if(e.data("maxheight")!="none")e.css({maxHeight:e.data("maxheight")*n.bh+"px"});if(e.data("maxwidth")!="none")e.css({maxWidth:e.data("maxwidth")*n.bw+"px"})}function W(t,n){t.find(".tp-caption").each(function(t){var r=e(this);if(r.find("iframe").length>0){try{var i=r.find("iframe");var s=i.attr("id");var o=$f(s);o.api("pause");clearTimeout(r.data("timerplay"))}catch(u){}try{var a=r.data("player");a.stopVideo();clearTimeout(r.data("timerplay"))}catch(u){}}if(r.find("video").length>0){try{r.find("video").each(function(t){var n=e(this).parent();var r=n.attr("id");clearTimeout(n.data("timerplay"));videojs(r).ready(function(){var e=this;e.pause()})})}catch(u){}}try{X(r,n,0)}catch(u){}})}function X(n,r,i){var s=n.data("endspeed");if(s==t)s=n.data("speed");s=s/1e3;var o=n.data("endeasing");if(o==t)o=Power1.easeInOut;if(n.hasClass("ltr")||n.hasClass("ltl")||n.hasClass("str")||n.hasClass("stl")||n.hasClass("ltt")||n.hasClass("ltb")||n.hasClass("stt")||n.hasClass("stb")||n.hasClass("skewtoright")||n.hasClass("skewtorightshort")||n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort")){S=0;if(n.hasClass("skewtoright")||n.hasClass("skewtorightshort"))S=35;if(n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort"))S=-35;var u=0;var a=0;if(n.hasClass("ltr")||n.hasClass("skewtoright"))u=r.width+60;else if(n.hasClass("ltl")||n.hasClass("skewtoleft"))u=0-(r.width+60);else if(n.hasClass("ltt"))a=0-(r.height+60);else if(n.hasClass("ltb"))a=r.height+60;else if(n.hasClass("str")||n.hasClass("skewtorightshort")){u=50;oo=0}else if(n.hasClass("stl")||n.hasClass("skewtoleftshort")){u=-50;oo=0}else if(n.hasClass("stt")){a=-50;oo=0}else if(n.hasClass("stb")){a=50;oo=0}if(n.hasClass("skewtorightshort"))u=u+220;if(n.hasClass("skewtoleftshort"))u=u-220;n.data("outanim",TweenLite.to(n,s,{x:u,y:a,scale:1,rotation:0,skewX:S,opacity:0,delay:i,z:0,overwrite:"auto",ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("randomrotateout")){n.data("outanim",TweenLite.to(n,s,{left:Math.random()*r.width,top:Math.random()*r.height,scale:Math.random()*2+.3,rotation:Math.random()*360-180,z:0,opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("fadeout")){n.data("outanim",TweenLite.to(n,s,{opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("customout")){var f=0,l=0,c=0,h=2,p=1,d=0,v=1,m=1,g=1,y=0,b=0,w=0,E=0,S=0,x=0,T=0,N="center,center",C=300;var k=n.data("customout").split(";");e.each(k,function(e,t){t=t.split(":");var n=t[0],r=t[1];if(n=="rotationX")b=parseInt(r,0);if(n=="rotationY")w=parseInt(r,0);if(n=="rotationZ")E=parseInt(r,0);if(n=="scaleX")m=parseFloat(r);if(n=="scaleY")g=parseFloat(r);if(n=="opacity")T=parseFloat(r);if(n=="skewX")S=parseInt(r,0);if(n=="skewY")x=parseInt(r,0);if(n=="x")l=parseInt(r,0);if(n=="y")c=parseInt(r,0);if(n=="z")h=parseInt(r);if(n=="transformOrigin")N=r;if(n=="transformPerspective")C=parseInt(r,0)});n.data("outanim",TweenLite.to(n,s,{scaleX:m,scaleY:g,rotationX:b,rotationY:w,rotationZ:E,x:l,y:c,z:h,opacity:T,delay:i,ease:o,overwrite:"auto",onStart:function(){if(n.data("anim")!=t)n.data("anim").pause();TweenLite.set(n,{transformPerspective:C,transformOrigin:N,overwrite:"auto"})}}))}else{clearTimeout(n.data("reversetimer"));n.data("reversetimer",setTimeout(function(){n.data("anim").reverse()},i*1e3))}}function V(t,n){t.children().each(function(){try{e(this).die("click")}catch(t){}try{e(this).die("mouseenter")}catch(t){}try{e(this).die("mouseleave")}catch(t){}try{e(this).unbind("hover")}catch(t){}});try{t.die("click","mouseenter","mouseleave")}catch(r){}clearInterval(n.cdint);t=null}function $(n,r){r.cd=0;r.loop=0;if(r.stopAfterLoops!=t&&r.stopAfterLoops>-1)r.looptogo=r.stopAfterLoops;else r.looptogo=9999999;if(r.stopAtSlide!=t&&r.stopAtSlide>-1)r.lastslidetoshow=r.stopAtSlide;else r.lastslidetoshow=999;r.stopLoop="off";if(r.looptogo==0)r.stopLoop="on";if(r.slideamount>1&&!(r.stopAfterLoops==0&&r.stopAtSlide==1)){var i=n.find(".tp-bannertimer");if(i.length>0){i.css({width:"0%"});if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})}i.data("opt",r);r.cdint=setInterval(function(){if(e("body").find(n).length==0)V(n,r);if(n.data("conthover-changed")==1){r.conthover=n.data("conthover");n.data("conthover-changed",0)}if(r.conthover!=1&&r.videoplaying!=true&&r.width>r.hideSliderAtLimit){r.cd=r.cd+100}if(r.fullWidth!="on")if(r.width>r.hideSliderAtLimit)n.parent().removeClass("tp-hide-revslider");else n.parent().addClass("tp-hide-revslider");if(r.videostartednow==1){n.trigger("revolution.slide.onvideoplay");r.videostartednow=0}if(r.videostoppednow==1){n.trigger("revolution.slide.onvideostop");r.videostoppednow=0}if(r.cd>=r.delay){r.cd=0;r.act=r.next;r.next=r.next+1;if(r.next>n.find(">ul >li").length-1){r.next=0;r.looptogo=r.looptogo-1;if(r.looptogo<=0){r.stopLoop="on"}}if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1){clearInterval(r.cdint);n.find(".tp-bannertimer").css({visibility:"hidden"});n.trigger("revolution.slide.onstop")}N(n,r);if(i.length>0){i.css({width:"0%"});if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})}}},100);n.hover(function(){if(r.onHoverStop=="on"){r.conthover=1;i.stop();n.trigger("revolution.slide.onpause");var s=n.find(">ul >li:eq("+r.next+") .slotholder");s.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").pause()})}},function(){if(n.data("conthover")!=1){n.trigger("revolution.slide.onresume");r.conthover=0;if(r.onHoverStop=="on"&&r.videoplaying!=true){i.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})}var s=n.find(">ul >li:eq("+r.next+") .slotholder");s.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").play()})}})}}e.fn.extend({revolution:function(i){e.fn.revolution.defaults={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",dottedOverlay:"none",forceFullWidth:"off"};i=e.extend({},e.fn.revolution.defaults,i);return this.each(function(){var o=i;if(o.fullWidth!="on"&&o.fullScreen!="on")o.autoHeight="off";if(o.fullScreen=="on")o.autoHeight="on";if(o.fullWidth!="on"&&o.fullScreen!="on")forceFulWidth="off";var u=e(this);if(o.fullWidth=="on"&&o.autoHeight=="off")u.css({maxHeight:o.startheight+"px"});if(s()&&o.hideThumbsOnMobile=="on"&&o.navigationType=="thumb")o.navigationType="none";if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="bullet")o.navigationType="none";if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="both")o.navigationType="none";if(s()&&o.hideArrowsOnMobile=="on")o.navigationArrows="none";if(o.forceFullWidth=="on"){var a=u.parent().offset().left;var f=u.parent().css("marginBottom");var c=u.parent().css("marginTop");if(f==t)f=0;if(c==t)c=0;u.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+c+";margin-bottom:"+f+'" class="forcefullwidth_wrapper_tp_banner"></div>');u.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+u.height()+'px"></div>');u.css({backgroundColor:u.parent().css("backgroundColor"),backgroundImage:u.parent().css("backgroundImage")});u.parent().css({left:0-a+"px",position:"absolute",width:e(window).width()});o.width=e(window).width()}try{if(o.hideThumbsUnderResolution>e(window).width()&&o.hideThumbsUnderResolution!=0){u.parent().find(".tp-bullets.tp-thumbs").css({display:"none"})}else{u.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}}catch(h){}if(!u.hasClass("revslider-initialised")){u.addClass("revslider-initialised");if(u.attr("id")==t)u.attr("id","revslider-"+Math.round(Math.random()*1e3+5));o.firefox13=false;o.ie=!e.support.opacity;o.ie9=document.documentMode==9;var y=e.fn.jquery.split("."),b=parseFloat(y[0]),E=parseFloat(y[1]),S=parseFloat(y[2]||"0");if(b==1&&E<7){u.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+y+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")}if(b>1)o.ie=false;if(!e.support.transition)e.fn.transition=e.fn.animate;u.find(".caption").each(function(){e(this).addClass("tp-caption")});if(s()){u.find(".tp-caption").each(function(){if(e(this).data("autoplay")==true)e(this).data("autoplay",false)})}var x=0;var T=0;var C=0;u.find(".tp-caption iframe").each(function(t){try{if(e(this).attr("src").indexOf("you")>0&&x==0){x=1;var n=document.createElement("script");n.src="http://www.youtube.com/player_api";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")=="http://www.youtube.com/player_api")i=false});if(i)r.parentNode.insertBefore(n,r)}}catch(s){}});u.find(".tp-caption iframe").each(function(t){try{if(e(this).attr("src").indexOf("vim")>0&&T==0){T=1;var n=document.createElement("script");n.src="http://a.vimeocdn.com/js/froogaloop2.min.js";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")=="http://a.vimeocdn.com/js/froogaloop2.min.js")i=false});if(i)r.parentNode.insertBefore(n,r)}}catch(s){}});u.find(".tp-caption video").each(function(t){try{if(e(this).hasClass("video-js")&&C==0){C=1;var n=document.createElement("script");n.src=o.videoJsPath+"video.js";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")==o.videoJsPath+"video.js")i=false});if(i){r.parentNode.insertBefore(n,r);e("head").append('<link rel="stylesheet" type="text/css" href="'+o.videoJsPath+'video-js.min.css" media="screen" />');e("head").append('<script> videojs.options.flash.swf = "'+o.videoJsPath+'video-js.swf";</script>')}}}catch(s){}});if(o.shuffle=="on"){for(var k=0;k<u.find(">ul:first-child >li").length;k++){var L=Math.round(Math.random()*u.find(">ul:first-child >li").length);u.find(">ul:first-child >li:eq("+L+")").prependTo(u.find(">ul:first-child"))}}o.slots=4;o.act=-1;o.next=0;if(o.startWithSlide!=t)o.next=o.startWithSlide;var A=n("#")[0];if(A.length<9){if(A.split("slide").length>1){var O=parseInt(A.split("slide")[1],0);if(O<1)O=1;if(O>u.find(">ul:first >li").length)O=u.find(">ul:first >li").length;o.next=O-1}}o.origcd=o.delay;o.firststart=1;if(o.navigationHOffset==t)o.navOffsetHorizontal=0;if(o.navigationVOffset==t)o.navOffsetVertical=0;u.append('<div class="tp-loader"></div>');if(u.find(".tp-bannertimer").length==0)u.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var M=u.find(".tp-bannertimer");if(M.length>0){M.css({width:"0%"})}u.addClass("tp-simpleresponsive");o.container=u;o.slideamount=u.find(">ul:first >li").length;if(u.height()==0)u.height(o.startheight);if(o.startwidth==t||o.startwidth==0)o.startwidth=u.width();if(o.startheight==t||o.startheight==0)o.startheight=u.height();o.width=u.width();o.height=u.height();o.bw=o.startwidth/u.width();o.bh=o.startheight/u.height();if(o.width!=o.startwidth){o.height=Math.round(o.startheight*(o.width/o.startwidth));u.height(o.height)}if(o.shadow!=0){u.parent().append('<div class="tp-bannershadow tp-shadow'+o.shadow+'"></div>');var a=0;if(o.forceFullWidth=="on")a=0-o.container.parent().offset().left;u.parent().find(".tp-bannershadow").css({width:o.width,left:a})}u.find("ul").css({display:"none"});var _=u;if(o.lazyLoad=="on"){var D=u.find("ul >li >img").first();if(D.data("lazyload")!=t)D.attr("src",D.data("lazyload"));D.data("lazydone",1);_=D.parent()}_.waitForImages(function(){u.find("ul").css({display:"block"});w(u,o);if(o.slideamount>1)p(u,o);if(o.slideamount>1)l(u,o);if(o.slideamount>1)d(u,o);if(o.keyboardNavigation=="on")v(u,o);m(u,o);if(o.hideThumbs>0)g(u,o);u.waitForImages(function(){u.find(".tp-loader").fadeOut(600);setTimeout(function(){N(u,o);if(o.slideamount>1)$(u,o);u.trigger("revolution.slide.onloaded")},600)})});e(window).resize(function(){if(e("body").find(u)!=0)if(o.forceFullWidth=="on"){var t=o.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;o.container.parent().css({left:0-t+"px",width:e(window).width()})}if(u.outerWidth(true)!=o.width){r(u,o)}});try{if(o.hideThumbsUnderResoluition!=0&&o.navigationType=="thumb"){if(o.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(h){}u.find(".tp-scrollbelowslider").on("click",function(){var t=0;try{t=e("body").find(o.fullScreenOffsetContainer).height()}catch(n){}try{t=t-e(this).data("scrolloffset")}catch(n){}e("body,html").animate({scrollTop:u.offset().top+u.find(">ul >li").height()-t+"px"},{duration:400})})}})},revscroll:function(t){return this.each(function(){var n=e(this);e("body,html").animate({scrollTop:n.offset().top+n.find(">ul >li").height()-t+"px"},{duration:400})})},revredraw:function(t){return this.each(function(){var t=e(this);var n=t.parent().find(".tp-bannertimer");var i=n.data("opt");r(t,i)})},revpause:function(t){return this.each(function(){var t=e(this);t.data("conthover",1);t.data("conthover-changed",1);t.trigger("revolution.slide.onpause");var n=t.parent().find(".tp-bannertimer");n.stop()})},revresume:function(t){return this.each(function(){var t=e(this);t.data("conthover",0);t.data("conthover-changed",1);t.trigger("revolution.slide.onresume");var n=t.parent().find(".tp-bannertimer");var r=n.data("opt");n.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})})},revnext:function(t){return this.each(function(){var t=e(this);t.parent().find(".tp-rightarrow").click()})},revprev:function(t){return this.each(function(){var t=e(this);t.parent().find(".tp-leftarrow").click()})},revmaxslide:function(t){return e(this).find(">ul:first-child >li").length},revcurrentslide:function(t){var n=e(this);var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");return i.act},revlastslide:function(t){var n=e(this);var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");return i.lastslide},revshowslide:function(t){return this.each(function(){var n=e(this);n.data("showus",t);n.parent().find(".tp-rightarrow").click()})}});})(jQuery);
/* ----------------- Start JS Document ----------------- */

var $ = jQuery.noConflict();

// Page Loader
$(window).load(function(){
	$('#loader').fadeOut();
});

$(document).ready(function($) {
	"use strict";
	
	
	
	/*----------------------------------------------------*/
	/*	Hidder Header
	/*----------------------------------------------------*/
	
	var headerEle = function(){
		var $headerHeight = $('header').height();
		$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
	};
	
	$(window).load(function () {
	  headerEle();
	});
	
	$(window).resize(function () {
	   headerEle();
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Nice-Scroll
	/*----------------------------------------------------*/
	
	$("html").niceScroll({
		scrollspeed: 60,
		mousescrollstep: 38,
		cursorwidth: 6,
		cursorborder: 0,
		cursorcolor: '#111',
		autohidemode: false,
		zindex: 9999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
		
	
	
	
	
	/*----------------------------------------------------*/
	/*	Nav Menu & Search
	/*----------------------------------------------------*/
	
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
	
	$('.show-search').click(function() {
		$('.search-form').fadeIn(300);
		$('.search-form input').focus();
	});
	$('.search-form input').blur(function() {
		$('.search-form').fadeOut(300);
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Back Top Link
	/*----------------------------------------------------*/
	
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })
	
	
	
	
	/*----------------------------------------------------*/
	/*	Sliders & Carousel
	/*----------------------------------------------------*/
	
	////------- Touch Slider
	var time = 4.4,
		$progressBar,
		$bar,
		$elem,
		isPause,
		tick,
		percentTime;
	$('.touch-slider').each(function(){
		var owl = jQuery(this),
			sliderNav = $(this).attr('data-slider-navigation'),
			sliderPag = $(this).attr('data-slider-pagination'),
			sliderProgressBar = $(this).attr('data-slider-progress-bar');
			
		if ( sliderNav == 'false' || sliderNav == '0' ) {
			var returnSliderNav = false
		}else {
			var returnSliderNav = true
		}
		
		if ( sliderPag == 'true' || sliderPag == '1' ) {
			var returnSliderPag = true
		}else {
			var returnSliderPag = false
		}
		
		if ( sliderProgressBar == 'true' || sliderProgressBar == '1' ) {
			var returnSliderProgressBar = progressBar
			var returnAutoPlay = false
		}else {
			var returnSliderProgressBar = false
			var returnAutoPlay = true
		}
		
		owl.owlCarousel({
			navigation : returnSliderNav,
			pagination: returnSliderPag,
			slideSpeed : 400,
			paginationSpeed : 400,
			lazyLoad : true,
			singleItem: true,
			autoHeight : true,
			autoPlay: returnAutoPlay,
			stopOnHover: returnAutoPlay,
			transitionStyle : "fade",
			afterInit : returnSliderProgressBar,
			afterMove : moved,
			startDragging : pauseOnDragging
		});
		
	});

    function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
    }
	
    function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
    }
	
	function start() {
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
    };
 
    function interval() {
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100){
				$elem.trigger('owl.next')
			}
		}
    }
	
    function pauseOnDragging(){
      isPause = true;
    }
	
    function moved(){
      clearTimeout(tick);
      start();
    }
	
	
	
	////------- Projects Carousel
	$(".projects-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
    	autoPlay: 3000,
    	items : 4,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	
	
	
	////------- Testimonials Carousel
	$(".testimonials-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:true,
		autoHeight : true,
		transitionStyle : "fade"
	});
	
	
	
	
	////------- Testimonials Carousel
	$(".fullwidth-projects-carousel").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
    	autoPlay: 3000,
    	items : 5,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	
	
	
	////------- Custom Carousel
	$('.custom-carousel').each(function(){
		var owl = jQuery(this),
			itemsNum = $(this).attr('data-appeared-items'),
			sliderNavigation = $(this).attr('data-navigation');
			
		if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
			var returnSliderNavigation = false
		}else {
			var returnSliderNavigation = true
		}
		if( itemsNum == 1) {
			var returndeskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;
		} 
		else if (itemsNum >= 2 && itemsNum < 4) {
			var deskitemsNum = itemsNum;
			var desksmallitemsNum = itemsNum - 1;
			var tabletitemsNum = itemsNum - 1;
		} 
		else if (itemsNum >= 4 && itemsNum < 8) {
			var deskitemsNum = itemsNum -1;
			var desksmallitemsNum = itemsNum - 2;
			var tabletitemsNum = itemsNum - 3;
		} 
		else {
			var deskitemsNum = itemsNum -3;
			var desksmallitemsNum = itemsNum - 6;
			var tabletitemsNum = itemsNum - 8;
		}
		owl.owlCarousel({
			slideSpeed : 300,
			stopOnHover: true,
			autoPlay: 3000,
			navigation : returnSliderNavigation,
			pagination: false,
			lazyLoad : true,
			items : itemsNum,
			itemsDesktop : [1000,deskitemsNum],
			itemsDesktopSmall : [900,desksmallitemsNum],
			itemsTablet: [600,tabletitemsNum],
			itemsMobile : false,
			transitionStyle : "goDown",
		});
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/
	
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	
	
	
	/*----------------------------------------------------*/
	/*	Css3 Transition
	/*----------------------------------------------------*/
	
	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});
	
	
	
	
	/*----------------------------------------------------*/
	/*	Pie Charts
	/*----------------------------------------------------*/
	
	var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';
		
	function initPieCharts() {
		var chart = $('.' + pieChartClass);
		chart.each(function() {
			$(this).appear(function() {
				var $this = $(this),
					chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
					chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
				if( !$this.hasClass(pieChartLoadedClass) ) {
					$this.easyPieChart({
						animate: 2000,
						size: chartBarWidth,
						lineWidth: 2,
						scaleColor: false,
						trackColor: "#eee",
						barColor: chartBarColor,
					}).addClass(pieChartLoadedClass);
				}
			});
		});
	}
	initPieCharts();
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Animation Progress Bars
	/*----------------------------------------------------*/
	
	$("[data-progress-animation]").each(function() {
		
		var $this = $(this);
		
		$this.appear(function() {
			
			var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
			
			if(delay > 1) $this.css("animation-delay", delay + "ms");
			
			setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);

		}, {accX: 0, accY: -50});

	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Milestone Counter
	/*----------------------------------------------------*/
	
	jQuery('.milestone-block').each(function() {
		jQuery(this).appear(function() {
			var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
			jQuery(this).find('.milestone-number').countTo({
				from: 0,
				to: $endNum,
				speed: 4000,
				refreshInterval: 60,
			});
		},{accX: 0, accY: 0});
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Nivo Lightbox
	/*----------------------------------------------------*/
	
	$('.lightbox').nivoLightbox({
		effect: 'fadeScale',
		keyboardNav: true,
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Change Slider Nav Icons
	/*----------------------------------------------------*/
	
	$('.touch-slider').find('.owl-prev').html('<i class="icon-left-open-big"></i>');
	$('.touch-slider').find('.owl-next').html('<i class="icon-right-open-big"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="icon-angle-left"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="icon-angle-right"></i>');
	$('.read-more').append('<i class="icon-right-open-mini"></i>');
	
	
	
	
	/*----------------------------------------------------*/
	/*	Tooltips & Fit Vids & Parallax & Text Animations
	/*----------------------------------------------------*/
	
	$("body").fitVids();
	
	$('.sh-tooltip').tooltip();
	
	$('.bg-parallax').each(function() {
		$(this).parallax("30%", 0.2);
	});
	
	$('.tlt').textillate({
		loop: true,
		in: {
			effect: 'fadeInUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
		out: {
			effect: 'fadeOutUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Sticky Header
	/*----------------------------------------------------*/
	
	(function() {
		
		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'header' );
			
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$('.top-bar').slideUp(300);
				$("header").addClass("fixed-header");
				$('.navbar-brand').css({ 'padding-top' : 19 + "px", 'padding-bottom' : 19 + "px" });
				
				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 20 + "px", 'padding-bottom' : 20 + "px" })
					$('.search-side').css({ 'margin-top' : -7 + "px" });
				};
				
			}
			else {
				$('.top-bar').slideDown(300);
				$("header").removeClass("fixed-header");
				$('.navbar-brand').css({ 'padding-top' : 27 + "px", 'padding-bottom' : 27 + "px" });
				
				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 28 + "px", 'padding-bottom' : 28 + "px" })
					$('.search-side').css({ 'margin-top' : 0  + "px" });
				};
				
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
		
		
	})();
});




/*----------------------------------------------------*/
/*	Portfolio Isotope
/*----------------------------------------------------*/

jQuery(window).load(function(){
	
	var $container = $('#portfolio');
	$container.isotope({
		layoutMode : 'masonry',
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('.portfolio-filter ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('.portfolio-filter ul'),
	    $optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		if ( $this.hasClass('selected') ) { return false; }
		var $optionSet = $this.parents('.portfolio-filter ul');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected'); 
	});
	
});
/* ----------------- End JS Document ----------------- */








// Styles Switcher JS
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);



$(document).ready(function(){
	
	// Styles Switcher
	$(document).ready(function(){
		$('.open-switcher').click(function(){
			if($(this).hasClass('show-switcher')) {
				$('.switcher-box').css({'left': 0});
				$('.open-switcher').removeClass('show-switcher');
				$('.open-switcher').addClass('hide-switcher');
			}else if(jQuery(this).hasClass('hide-switcher')) {
				$('.switcher-box').css({'left': '-212px'});
				$('.open-switcher').removeClass('hide-switcher');
				$('.open-switcher').addClass('show-switcher');
			}
		});
	});
	
	//Top Bar Switcher
	$(".topbar-style").change(function(){
		if( $(this).val() == 1){
			$(".top-bar").removeClass("dark-bar"),
			$(".top-bar").removeClass("color-bar"),
			$(window).resize();
		} else if( $(this).val() == 2){
			$(".top-bar").removeClass("color-bar"),
			$(".top-bar").addClass("dark-bar"),
			$(window).resize();
		} else if( $(this).val() == 3){
			$(".top-bar").removeClass("dark-bar"),
			$(".top-bar").addClass("color-bar"),
			$(window).resize();
		}
	});
	
	//Layout Switcher
	$(".layout-style").change(function(){
		if( $(this).val() == 1){
			$("#container").removeClass("boxed-page"),
			$(window).resize();
		} else{
			$("#container").addClass("boxed-page"),
			$(window).resize();
		}
	});
	
	//Background Switcher
	$('.switcher-box .bg-list li a').click(function() {
		var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
		if(current == '2') {
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage",bg);
		} else {
			alert('Please select boxed layout');
		}
	});

});;

$(document).ready(function($) {
	
	$('.footer-widgets div[id^="block-footer"]').addClass('col-md-3');
	$('.copyright-section div[id^="block-footermessage"]').addClass('col-md-6');
	
	$('.is-active').addClass('active');
	$('.dropdown .active').parent().parent().prev("a").addClass('active');
	//$('#toolbar-administration').css('z-index','99999990');
	
	$('#accordion').find('.panel.panel-default').unwrap();
	$('#accordion').find('.panel.panel-default').unwrap();
	$('#contact-form').parent().parent().parent().addClass('row');
	jQuery('.panel,.panel-default').first().find('a').removeClass('collapsed');
	jQuery('#collapse-1').addClass('in');
	jQuery('#collapse-6').addClass('in');

});

;
