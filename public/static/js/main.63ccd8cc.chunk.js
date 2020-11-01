(this["webpackJsonpreact-chat-room-front-end"]=this["webpackJsonpreact-chat-room-front-end"]||[]).push([[0],{100:function(e,t){},103:function(e,t,n){},107:function(e,t,n){e.exports=n.p+"static/media/chat.36cb8b4b.png"},108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(30),r=n.n(o),l=(n(71),n(5)),s=n(20),u=n(13),i=n(17),m=n(14),d=n(60),p=n(65),E=n(11),b={account:"",password:"",status:"",email:"",error:"",userName:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_ACCOUNT":return Object(E.a)({},e,{account:t.payload});case"SET_USER_PASSWORD":return Object(E.a)({},e,{password:t.payload});case"LOGIN_REQUEST":return Object(E.a)({},e,{status:"loading"});case"LOGIN_SUCCESS":return Object(E.a)({},e,{status:"logined",email:t.payload.email,token:t.payload.token,userName:t.payload.userName});case"LOGIN_FAIL":return Object(E.a)({},e,{status:"error",message:t.payload.message});default:return e}},g={messageBox:[],webSocket:"",onlineCount:0,connectStatus:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_WEB_SOCKET":return Object(E.a)({},e,{connectStatus:"connecting"});case"CONNECT_WEB_SOCKET_SUCCESS":return Object(E.a)({},e,{connectStatus:"connected",webSocket:t.payload});case"CONNECT_WEB_SOCKET_FAIL":return Object(E.a)({},e,{connectStatus:"disconnect",webSocket:t.payload});case"SET_ONLINE_COUNT":return console.log(t),Object(E.a)({},e,{onlineCount:t.payload});case"SET_MESSAGE_BOX":return Object(E.a)({},e,{messageBox:e.messageBox.concat([t.payload])});default:return e}},S=function(e){return Object(m.c)({router:Object(u.b)(e),loginReducer:f,chatRoomReducer:O})},C=n(10),h=n.n(C),v=n(15),k=n(7),w=n(32),y=n.n(w),j="https://express-chat-room-back-end.herokuapp.com",N=_("token");function _(e){return y.a.get(e)}var T=function(e){y.a.remove(e)},x=h.a.mark(R);function R(e){var t,n,a,c;return h.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.account,a=t.password,o.next=3,s={email:n,password:a},fetch(j+"/"+"login",{method:"POST",headers:{"Access-Control-Allow-Origin":"http://localhost:3001",Accept:"application/json","content-type":"application/json",Authorization:N},dataType:"jsonp",credentials:"include",body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log("fetchPost",e)}));case 3:if("fail"!==(c=o.sent).status){o.next=10;break}return console.log("Fail:",c),o.next=8,Object(v.a)({type:"LOGIN_FAIL",payload:{message:c.message}});case 8:o.next=18;break;case 10:if("success"!==c.status){o.next=18;break}return console.log("success:",c),o.next=14,Object(v.a)({type:"LOGIN_SUCCESS",payload:{token:c.token,email:c.email,userName:c.userName}});case 14:return o.next=16,r="token",l=c.token,void y.a.set(r,l,{expires:7});case 16:return o.next=18,Object(v.a)(Object(k.d)("/"));case 18:case"end":return o.stop()}var r,l,s}),x)}var I=n(63),B=n.n(I),A=h.a.mark(L);function L(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("connectWebSocket",e),n.next=3,B()(j);case 3:if(!(t=n.sent)){n.next=9;break}return n.next=7,Object(v.a)({type:"CONNECT_WEB_SOCKET_SUCCESS",payload:t});case 7:n.next=11;break;case 9:return n.next=11,Object(v.a)({type:"CONNECT_WEB_SOCKET_FAIL"});case 11:case"end":return n.stop()}}),A)}var U=h.a.mark(W);function W(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)("LOGIN_REQUEST",R);case 2:return e.next=4,Object(v.b)("CONNECT_WEB_SOCKET",L);case 4:case"end":return e.stop()}}),U)}var G=Object(i.a)(),P=Object(p.a)();n(103);var F=n(64),K=n(8),M=n(24),D=n.n(M),J=n(27),Q=n.n(J),X=n(21),q=n.n(X),z=n(9),H=n.n(z),V={setAccountPassword:function(e){var t=e.currentTarget,n=t.id,a=t.value;switch(n){case"account":return{type:"SET_USER_ACCOUNT",payload:a};case"password":return{type:"SET_USER_PASSWORD",payload:a}}},login:function(e,t){return{type:"LOGIN_REQUEST",payload:{account:e,password:t}}},checkLogined:function(){var e=_("token");return console.log("checkLogined",void 0!==e),e?Object(k.d)("/"):{type:null}}},$=Object(l.c)((function(e){return{account:e.loginReducer.account,password:e.loginReducer.password,status:e.loginReducer.status,message:e.loginReducer.message}}),V)((function(e){var t=e.account,o=e.password,r=e.status,l=e.message,s=e.setAccountPassword,u=e.login,i=e.checkLogined;Object(a.useEffect)((function(){i()}),[]);var m=function(){var e=Object(F.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=3;break}return alert("Please enter your account"),e.abrupt("return");case 3:if(t.includes("@")){e.next=6;break}return alert("Illegal email address format"),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return alert("Please enter your password"),e.abrupt("return");case 9:u(t,o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(K.Grid,null,c.a.createElement(K.Row,null,c.a.createElement(K.Cell,{columns:3}),c.a.createElement(K.Cell,{columns:6},c.a.createElement(D.a,{id:"loginCard"},c.a.createElement(M.CardPrimaryContent,{id:"tittle"},c.a.createElement("h1",null,"Rick's Chat Room: Beta"),c.a.createElement(M.CardMedia,{id:"logoImg",square:!0,imageUrl:n(107)})),c.a.createElement(M.CardActions,{style:{display:"block"}},c.a.createElement(M.CardActionButtons,{id:"textFieldArea"},c.a.createElement(q.a,{label:"Email",className:"textField",trailingIcon:c.a.createElement(H.a,{role:"button",icon:"delete"})},c.a.createElement(X.Input,{id:"account",type:"email",value:t,onChange:s})),c.a.createElement(q.a,{label:"Password",className:"textField",trailingIcon:c.a.createElement(H.a,{role:"button",icon:"delete"})},c.a.createElement(X.Input,{id:"password",type:"password",value:o,onChange:s})),c.a.createElement("div",null,c.a.createElement(Q.a,{className:"loginBtn",outlined:!0,raised:!0,icon:c.a.createElement(H.a,{role:"button",icon:"login"}),onClick:m},"Login"),c.a.createElement(Q.a,{className:"loginBtn",outlined:!0,raised:!0,disabled:!0,icon:c.a.createElement(H.a,{role:"button",icon:"account_box"}),onClick:m},"Signup")))),"error"===r?c.a.createElement("div",null,c.a.createElement("p",{className:"warnMsg"},l)):[])),c.a.createElement(K.Cell,{columns:3})))})),Y=n(19),Z=n.n(Y),ee=function(){var e,t=Object(l.e)((function(e){return e.chatRoomReducer})).messageBox,n=_("userName");return Object(a.useEffect)((function(){e.scrollIntoView({behavior:"smooth"})})),c.a.createElement("div",{id:"messagePanel-bg"},c.a.createElement("div",{id:"messagePanel"},t.map((function(e){return c.a.createElement(K.Row,{id:"messageBox",key:"row"+e.useName+e.timestamp},c.a.createElement(K.Cell,{columns:12,key:"col"+e.useName+e.timestamp},c.a.createElement("div",{key:e,style:{float:n!==e.useName?"left":"right"}},c.a.createElement(H.a,{role:"button",icon:"account_circle",className:"account_icon"}),c.a.createElement("span",{className:"message"},e.useName,"(",e.timestamp,"): ",e.message))))})),c.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e=t}})))},te=n(44),ne=function(){var e=Object(a.useState)(""),t=Object(te.a)(e,2),n=t[0],o=t[1],r=Object(l.e)((function(e){return e.chatRoomReducer})).webSocket,s=Object(a.useState)(!1),u=Object(te.a)(s,2),i=u[0],m=u[1],d=_("userName");Object(a.useEffect)((function(){i&&(p(),m(!1))}));var p=function(){var e=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+":"+(new Date).getUTCMilliseconds();console.log("sendMessage",n),r.emit("send",{useName:d,message:n,timestamp:e}),o("")},E=function(e){"Enter"===e.key&&m(!0)};return Object(a.useEffect)((function(){return r&&document.addEventListener("keypress",E),function(){document.removeEventListener("keypress",E)}}),[r]),c.a.createElement("div",{id:"messageSender"},c.a.createElement(q.a,{label:"\u4f60\u60f3\u8aaa\u4ec0\u9ebc",id:"msgTextEdit",onTrailingIconSelect:function(){return o("")},trailingIcon:c.a.createElement(H.a,{role:"button",icon:"delete"})},c.a.createElement(X.Input,{id:"msgTextEditInput",value:n,onChange:function(e){var t=e.currentTarget.value;o(t)}})),c.a.createElement("div",{className:"wrapper-div"},c.a.createElement(Q.a,{id:"msgSendBtn",outlined:!0,raised:!0,icon:c.a.createElement(H.a,{role:"button",icon:"send"}),onClick:p},"Send")))},ae={connectWebSocket:function(){return{type:"CONNECT_WEB_SOCKET"}},setOnlineCount:function(e){return{type:"SET_ONLINE_COUNT",payload:e}}},ce=Object(l.c)((function(e){return{webSocket:e.chatRoomReducer.webSocket,onlineCount:e.chatRoomReducer.onlineCount}}),ae)((function(e){var t=e.webSocket,n=(e.onlineCount,e.connectWebSocket),o=e.setOnlineCount,r=Object(l.d)();Object(a.useEffect)((function(){t?s():n()}),[t]);var s=function(){console.log("initWebSocket"),t.on("online",(function(e){o(e)})),t.on("msg",(function(e){console.log("message",e),r({type:"SET_MESSAGE_BOX",payload:e})}))};return c.a.createElement(K.Grid,{id:"mainGrid"},c.a.createElement(K.Row,null,c.a.createElement(K.Cell,{columns:12},c.a.createElement(ee,null))),c.a.createElement(K.Row,null,c.a.createElement(K.Cell,{columns:12},c.a.createElement(ne,null))))})),oe=function(){var e=Object(l.d)(),t=(Object(l.e)((function(e){return e.loginReducer})).status,Object(l.e)((function(e){return e.chatRoomReducer})).onlineCount),n=_("token"),o=_("userName");Object(a.useEffect)((function(){n||e(Object(k.d)("/login"))}),[n]);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(c.a.Fragment,null,c.a.createElement(Z.a,null,c.a.createElement(Y.TopAppBarRow,null,c.a.createElement(Y.TopAppBarSection,{align:"start"},c.a.createElement(Y.TopAppBarIcon,{navIcon:!0,tabIndex:0},c.a.createElement(H.a,{hasRipple:!0,icon:"menu",onClick:function(){return console.log("click")}})),c.a.createElement(Y.TopAppBarTitle,null,"Welcome ",o,"!, ",t," people online.")),c.a.createElement(Y.TopAppBarSection,{align:"end",role:"toolbar"},c.a.createElement(Y.TopAppBarIcon,{actionItem:!0,tabIndex:0},c.a.createElement(H.a,{"aria-label":"print page",hasRipple:!0,icon:"exit_to_app",onClick:function(){console.log("logout"),T("token"),T("userName"),e(Object(k.d)("/login"))}}))))),c.a.createElement(Y.TopAppBarFixedAdjust,null,c.a.createElement(ce,null))):[])},re=function(e){var t=Object(m.e)(S(G),e,Object(m.d)(Object(m.a)(Object(d.a)(G),P)));return P.run(W),t}(),le=function(){return c.a.createElement(l.a,{store:re},c.a.createElement(u.a,{history:G},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(oe,null)),c.a.createElement(s.a,{exact:!0,path:"/login"},c.a.createElement($,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,n){e.exports=n(108)},71:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.63ccd8cc.chunk.js.map