(this["webpackJsonpagile-poker"]=this["webpackJsonpagile-poker"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/infinity.cf7b1a96.svg"},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),o=(a(28),a(29),a(30),a(39)),c=a(41),s=a(42),u=a(17),m=a(40),d=a(6),f=a(8),p=a(9),h=a(10),E=a(11),v=a(43),y=(a(31),a(22)),b=a.n(y),k=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={value:{storyPoint:n.props.value,style:n.props.style}},n.getDisplayableValue=function(){return"Infinity"!==n.state.value.storyPoint?n.state.value.storyPoint:r.a.createElement(v.a.Img,{variant:"center",src:b.a,alt:"Infinity"})},n.onClick=function(e){n.props.onClick(e)},n.onClick=n.onClick.bind(Object(p.a)(n)),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=this.getDisplayableValue(),a=this.state.value;return r.a.createElement("div",null,r.a.createElement(v.a,{style:a.style,className:"m-1 pokerCard",id:a.storyPoint,onClick:function(){return e.onClick(a.storyPoint)}},r.a.createElement(v.a.Body,null,r.a.createElement("h4",null,t))))}}]),a}(n.Component),g=(r.a.createContext(null),a(12)),w=(a(32),a(34),{apiKey:"AIzaSyB7eDqSi97maZL5LjOSBrnbRUrqDVOKuVw",authDomain:"agile-poker-sk.firebaseapp.com",databaseURL:"https://agile-poker-sk.firebaseio.com",projectId:"agile-poker-sk",storageBucket:"agile-poker-sk.appspot.com",messagingSenderId:"243041283381",appId:"1:243041283381:web:59f749904068703030307c",measurementId:"G-PLT1CHSW9K"}),O=function e(){var t=this;Object(d.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},g.initializeApp(w),this.auth=g.auth(),this.database=g.firestore()};function j(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(void 0),c=Object(u.a)(i,2),s=c[0],d=c[1];Object(n.useEffect)((function(){(new O).database.collection("points").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data().numeric}));l(t[0])}))}),[]);var f=function(e){d(e),l([e])};return r.a.createElement(o.a,null,r.a.createElement(m.a,null,function(){var e=[];return console.log(a),a.sort().forEach((function(t){var a;e.push(r.a.createElement(k,{key:t,value:t,style:(a=t,{width:"10rem",height:"15em",disabled:s!==a}),onClick:f}))})),e}()))}function P(){return r.a.createElement("div",null,r.a.createElement(j,null))}var C=a(44),S=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,"Ram"),r.a.createElement("li",null,"Shyam"),r.a.createElement("li",null,"ok"))}}]),a}(n.Component),I={width:"18rem",margin:"1em",border:"none"};function B(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(v.a,{style:I},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,"Team"),r.a.createElement(S,null)))),r.a.createElement(c.a,null,r.a.createElement(v.a,{style:I},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,"Poker"),r.a.createElement(v.a.Text,null,"Just select one"),r.a.createElement(C.a,{variant:"primary"},"Reset")))))}function A(){return r.a.createElement(o.a,{fluid:"sm",className:"mr-4 p-1 flex-fill justify-content-center"},r.a.createElement(c.a,null,r.a.createElement(s.a,{xs:8},r.a.createElement(P,null)),r.a.createElement(s.a,{md:"auto"},r.a.createElement(B,null))))}var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ee3b4911.chunk.js.map