(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b59a6":"61716c2d","chunk-2d0ccbf6":"ae92e91c","chunk-2d0d7286":"f538446c","chunk-2d0e5e97":"72005846"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:["fab","android"]}})],1),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/list"}},[n("font-awesome-icon",{attrs:{icon:["fas","stream"]}})],1),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:["far","plus-square"]}})],1),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/report"}},[n("font-awesome-icon",{attrs:{icon:["fas","chart-bar"]}})],1),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/setting"}},[n("font-awesome-icon",{attrs:{icon:["fas","cog"]}})],1)],1),n("keep-alive",[n("router-view")],1)],1)},a=[],s=n("2877"),c={},u=Object(s["a"])(c,i,a,!1,null,null,null),l=u.exports,d=n("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-list-group",{staticClass:"col-md-5",attrs:{id:"taskInfo"}},[n("b-list-group-item",[t._v("DATE : "+t._s(t.dateText))]),n("b-list-group-item",[t._v("TASK : "+t._s(t.currentText))]),n("b-list-group-item",[t._v("TIMER : "+t._s(t.timeText))])],1),n("div",{staticClass:"row",attrs:{id:"bb8"}},[n("img",{staticClass:"col-12",attrs:{src:"./img/icons/bb-8_icon.png"}}),n("radial-progress-bar",{attrs:{id:"progress",diameter:t.diameter,startColor:t.startColor,stopColor:t.stopColor,innerStrokeColor:t.innerStrokeColor,"completed-steps":t.timeLeft,"total-steps":t.totalSteps,animateSpeed:t.animateSpeed,timingFunc:t.timingFunc,isClockwise:t.isClockwise}}),n("b-btn",{attrs:{id:"play",variant:"link"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1),n("b-btn",{attrs:{id:"pause",variant:"link"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1),n("b-btn",{attrs:{id:"forward",variant:"link"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","fast-forward"]}})],1),n("b-btn",{attrs:{id:"backward",variant:"link"}},[n("font-awesome-icon",{attrs:{icon:["fas","fast-backward"]}})],1)],1)],1)},p=[],h=(n("99af"),n("531a")),b=n.n(h),g=parseInt("1500"),v=new Date,k={name:"Home",data:function(){return{status:0,timer:0,totalSteps:g,diameter:100,startColor:"#e6664d",stopColor:"#e6664d",innerStrokeColor:"#093830",animateSpeed:750,timingFunc:"linear",isClockwise:!1}},components:{RadialProgressBar:b.a},computed:{dateText:function(){return v},currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"Click to start.":"All done."},timeText:function(){var t=Math.floor(this.timeLeft/60),e=Math.floor(this.timeLeft%60);return"".concat(t," ' ").concat(e,' "')},timeLeft:function(){return this.$store.getters.timeLeft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos},alarm:function(){return this.$store.getters.alarm}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeLeft<=0&&setTimeout((function(){t.finish(!1)}),500)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeLeft<=0&&setTimeout((function(){t.finish(!1)}),500)}),1e3))},pause:function(){clearInterval(this.timer),this.status=2},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():setTimeout((function(){alert("You're all done!")}),500)}}},w=k,y=Object(s["a"])(w,m,p,!1,null,null,null),T=y.exports;o["default"].use(f["a"]);var _=[{path:"/",name:"Home",component:T,meta:{title:"Home"}},{path:"/list",name:"List",component:function(){return n.e("chunk-2d0b59a6").then(n.bind(null,"1a33"))},meta:{title:"List"}},{path:"/setting",name:"Setting",component:function(){return n.e("chunk-2d0ccbf6").then(n.bind(null,"4ef5"))},meta:{title:"Setting"}},{path:"/report",name:"Report",component:function(){return n.e("chunk-2d0d7286").then(n.bind(null,"762c"))},meta:{title:"Setting"}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))},meta:{title:"404 Error"}}],C=new f["a"]({routes:_});C.afterEach((function(t,e){document.title=t.meta.title}));var S=C,j=(n("a434"),n("b0c0"),n("2f62")),L=n("0e44"),O=n("0284"),x=n.n(O);o["default"].use(x.a,{id:"UA-168230205-1  "}),o["default"].use(j["a"]);var $=parseInt("1500"),A=parseInt("300"),B=new j["a"].Store({state:{todos:[],timeLeft:0,alarm:"alarm_engine1.mp3",current:"",isBreak:!1},getters:{todos:function(t){return t.todos},timeLeft:function(t){return t.timeLeft},alarm:function(t){return t.alarm},current:function(t){return t.current},isBreak:function(t){return t.isBreak}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},dragTodo:function(t,e){t.todos=e},countdown:function(t){t.timeLeft--},start:function(t){t.isBreak?t.current="Take a break!":t.isBreak||(t.current=t.todos[0].name,t.todos.splice(0,1))},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.timeLeft=t.isBreak?A:$}},actions:{},modules:{},plugins:[Object(L["a"])()]}),E=n("ecee"),P=n("ad3d"),I=n("c074"),M=n("f2d1"),F=n("b702"),N=n("310e"),q=n.n(N);n("ecb2"),n("be55");o["default"].config.productionTip=!1,E["c"].add(I["b"],I["g"],I["k"],I["l"],I["i"],I["h"],I["f"],I["e"],M["a"],F["a"],I["a"],I["c"],I["j"],I["d"]),o["default"].component("font-awesome-icon",P["a"]),o["default"].component("draggable",q.a),new o["default"]({router:S,store:B,render:function(t){return t(l)}}).$mount("#app")},be55:function(t,e,n){}});
//# sourceMappingURL=app.2b8556a2.js.map