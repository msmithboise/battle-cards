(function(t){function e(e){for(var n,c,s=e[0],o=e[1],u=e[2],p=0,d=[];p<s.length;p++)c=s[p],r[c]&&d.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://msmithboise.github.io/battle-cards/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"0c74":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],c=(a("034f"),a("2877")),s={},o=Object(c["a"])(s,r,i,!1,null,null,null);o.options.__file="App.vue";var u=o.exports,l=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("button",{on:{click:function(e){t.createGame()}}},[t._v("new game")]),a("div"),t.games?a("div",t._l(t.games,function(e){return a("p",[t._v("\n        "+t._s(e._id)+"\n      ")])})):t._e(),a("div")])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[t._v("Battle Catz"),n("img",{attrs:{src:a("7626"),alt:""}})])}],f={name:"home",data:function(){return{gameConfig:{playerName:"",opponents:1,set:2}}},computed:{games:function(){return this.$store.state.allGames},currentGame:function(){return this.$store.state.newGame}},methods:{getGames:function(){this.$store.dispatch("getGames")},createGame:function(){this.$store.dispatch("createGame")}},components:{}},m=f,h=(a("cccb"),Object(c["a"])(m,p,d,!1,null,null,null));h.options.__file="Home.vue";var v=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game container-fluid"},[t.currentGame.winner?n("div",{staticClass:"text-white"},[t.currentGame.winner.name==t.setPlayer.name?n("h1",[t._v("Winner!")]):n("h1",[t._v("Loser!")]),n("button",{on:{click:t.reset}},[t._v("Play Again?")])]):t._e(),t.currentGame.id?n("div",[n("div",{staticClass:"row"},t._l(t.currentGame.players[1].hand,function(e){return n("div",{key:e.id,staticClass:"col-sm-2 card opponent"},[e.visible?n("div",{on:{click:function(a){t.selectCpuCard(t.currentGame.players[1].id,e.id)}}},[n("h2",[t._v(t._s(e.name))]),n("p",[t._v("Health: "+t._s(e.health))]),n("p",[t._v("Attack: "+t._s(e.attack))]),n("p",[t._v("Defense: "+t._s(e.defense))]),n("img",{attrs:{src:e.img,alt:""}})]):n("div",[n("img",{staticClass:"cardback",attrs:{src:a("f9b5"),alt:""},on:{click:function(a){t.selectCpuCard(t.currentGame.players[1].id,e.id)}}})])])})),n("div",{staticClass:"row fight"},[n("div",{staticClass:"col"},[n("button",{on:{click:t.fight}},[t._v("Fight!")])])]),n("div",{staticClass:"row"},t._l(t.currentGame.players[0].hand,function(e){return n("div",{key:e.id,staticClass:"col-sm-2 card hero"},[n("div",{staticClass:"hero-card",on:{click:function(a){t.selectPlayerCard(t.currentGame.players[0].id,e.id)}}},[n("h2",[t._v(t._s(e.name))]),n("p",[t._v("Health: "+t._s(e.health))]),n("p",[t._v("Attack: "+t._s(e.attack))]),n("p",[t._v("Defense: "+t._s(e.defense))]),n("img",{attrs:{src:e.img,alt:""}})])])}))]):t._e()])},g=[],y={name:"Game",props:["id"],mounted:function(){this.$store.state.newGame.id||this.$store.dispatch("getGame",this.id)},data:function(){return{attack:{playerId:"",playerCardId:"",opponentId:"",opponentCardId:""},isActive:""}},computed:{currentGame:function(){return this.$store.state.newGame},setPlayer:function(){return this.$store.state.activePlayer}},methods:{selectPlayer:function(){this.$store.dispatch("selectPlayer",player)},selectPlayerCard:function(t,e){this.attack.playerId=t,this.attack.playerCardId=e},selectCpuCard:function(t,e){this.attack.opponentId=t,this.attack.opponentCardId=e},fight:function(){this.$store.dispatch("attack",this.attack)},reset:function(){this.$store.dispatch("createGame")}}},b=y,G=(a("68e4"),Object(c["a"])(b,_,g,!1,null,null,null));G.options.__file="Game.vue";var w=G.exports;n["a"].use(l["a"]);var C=new l["a"]({routes:[{path:"/",name:"home",component:v},{path:"/game/:id",name:"Game",props:!0,component:w}]}),k=a("2f62"),P=a("bc3a"),$=a.n(P);n["a"].use(k["a"]);var j=$.a.create({baseURL:"https://inspire-server.herokuapp.com/cards/",timeout:3e3}),x=new k["a"].Store({state:{allGames:[],newGame:{},activePlayer:{}},mutations:{setGames:function(t,e){t.allGames=e},currentGame:function(t,e){t.newGame=e,console.log(e)},selectPlayer:function(t,e){t.activePlayer=e}},actions:{getGames:function(t){var e=t.commit;t.dispatch;j.get("").then(function(t){e("setGames",t.data)})},getGame:function(t,e){var a=t.commit;t.dispatch;j.get(e).then(function(t){a("currentGame",t.data.data)})},createGame:function(t,e){var a=t.commit;t.dispatch;j.post("",{gameConfig:{playerName:"",opponents:1,set:4}}).then(function(t){a("currentGame",t.data),C.push({name:"Game",params:{id:t.data.id}}),console.log(t.data)})},selectPlayer:function(t,e){var a=t.commit;t.dispatch;a("selectPlayer",e)},attack:function(t,e){t.commit;var a=t.dispatch,n=t.state;j.put(n.newGame.id,e).then(function(t){a("getGame",n.newGame.id)})}}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:x,render:function(t){return t(u)}}).$mount("#app")},"68e4":function(t,e,a){"use strict";var n=a("0c74"),r=a.n(n);r.a},7626:function(t,e,a){t.exports=a.p+"img/catlogo.b9e0194b.jpg"},"8f59":function(t,e,a){},c21b:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("8f59"),r=a.n(n);r.a},f9b5:function(t,e,a){t.exports=a.p+"img/cardback.5df09849.jpg"}});
//# sourceMappingURL=app.4af95c0b.js.map