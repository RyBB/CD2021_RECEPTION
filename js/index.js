(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={index:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"320c":function(t,e,n){"use strict";n("5081")},"4cb7":function(t,e,n){},"4deb":function(t,e,n){},5081:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("bb-header"),n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-contents"},[n("div",{staticClass:"top"},[n("div",{staticClass:"logo cursor"},[n("a",{attrs:{href:"/"}},[t._v("☁ kintone")])])]),n("div",{staticClass:"menu"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"fas fa-bars cursor"}),n("i",{staticClass:"fas fa-home cursor"}),n("i",{staticClass:"fas fa-bell cursor"}),n("i",{staticClass:"fas fa-star cursor"})])]),n("div",{staticClass:"image"},[n("a",{attrs:{href:"/"}},[n("div",{staticClass:"title"},[t._v("kinto"),n("span",{attrs:{id:"neon"}},[t._v("NE ON")]),t._v("games")])])])])}],c={name:"Header"},u=c,l=(n("db89"),n("2877")),p=Object(l["a"])(u,o,i,!1,null,null,null),f=p.exports,d={name:"App",components:{"bb-header":f}},v=d,m=(n("5c0b"),Object(l["a"])(v,a,s,!1,null,null,null)),b=m.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cd2021-bb-body"},[n("div",{staticClass:"cd2021-bb-btn",on:{click:function(e){return t.router("/signup")}}},[n("span"),n("span"),n("span"),n("span"),t._v(" sign up ")]),n("div",{staticClass:"cd2021-bb-btn",on:{click:function(e){return t.router("/qrcode")}}},[n("span"),n("span"),n("span"),n("span"),t._v(" QR code ")]),n("div",{staticClass:"cd2021-bb-btn",on:{click:function(e){return t.router("/mypage")}}},[n("span"),n("span"),n("span"),n("span"),t._v(" my page ")]),n("div",{staticClass:"cd2021-bb-btn",on:{click:function(e){return t.router("/ranking")}}},[n("span"),n("span"),n("span"),n("span"),t._v(" ranking ")])])},_=[],y={name:"cd2021-bb-body",methods:{router:function(t){this.$router.push(t)}}},C=y,w=(n("320c"),Object(l["a"])(C,g,_,!1,null,null,null)),k=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signup"},[n("label",[t._v("User Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"BB"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("div",{on:{click:function(e){return t.signup(t.name)}}},[t._v("sign up")])])},x=[],j={name:"signup",data:function(){return{name:""}},methods:{signup:function(t){t?alert("post"):this.$toasted.error("表示名を入力してください",{position:"bottom-right",duration:2e3,fullWidth:!0})}}},E=j,P=(n("cae8"),Object(l["a"])(E,O,x,!1,null,null,null)),$=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cd2021-bb-qrcode"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"あなたの番号を入力してください"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("button",{on:{click:function(e){return t.showQR(t.message)}}},[t._v("表示")]),t._m(0)])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{attrs:{id:"canvas"}})])}],A=(n("d3b7"),n("d055")),N=n.n(A),S={name:"cd2021-bb-qrcode",methods:{showQR:function(t){if(t){console.log(t);var e=document.getElementById("canvas");return new Promise((function(n,r){return N.a.toCanvas(e,t,{width:300},(function(t){return t?r(t):n(e)}))}))}}}},B=S,G=(n("5f85"),Object(l["a"])(B,M,q,!1,null,null,null)),L=G.exports;r["a"].use(h["a"]);var Q=[{path:"/",name:"index",component:k,meta:{title:"kintone GAME Labo"}},{path:"/signup",name:"signup",component:$,meta:{title:"kintone GAME Labo"}},{path:"/qrcode",name:"qrcode",component:L,meta:{title:"kintone GAME Labo"}}],R=function(t,e,n){if(n)return n;var r={};return t.hash?r.selector=t.hash:(r.x=0,r.y=0),r},T=new h["a"]({mode:"history",scrollBehavior:R,routes:Q,linkActiveClass:"active"}),J=T,H=n("a65d"),I=n.n(H);r["a"].config.productionTip=!1,r["a"].use(I.a),new r["a"]({router:J,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5f85":function(t,e,n){"use strict";n("4deb")},"9c0c":function(t,e,n){},"9ff2":function(t,e,n){},cae8:function(t,e,n){"use strict";n("4cb7")},db89:function(t,e,n){"use strict";n("9ff2")}});