(this["webpackJsonpreact-chat-room-front-end"]=this["webpackJsonpreact-chat-room-front-end"]||[]).push([[0],{100:function(e,t){},103:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/chat.36cb8b4b.png"},108:function(e,t,a){e.exports=a.p+"static/media/message.232a7059.png"},109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(31),r=a.n(o),l=(a(71),a(6)),s=a(20),i=a(19),u=a(15),m=a(12),d=a(60),E=a(65),p=a(10),b={account:"",password:"",status:"",email:"",error:"",userName:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_ACCOUNT":return Object(p.a)({},e,{account:t.payload});case"SET_USER_PASSWORD":return Object(p.a)({},e,{password:t.payload});case"LOGIN_REQUEST":return Object(p.a)({},e,{status:"loading"});case"LOGIN_SUCCESS":return Object(p.a)({},e,{status:"logined",email:t.payload.email,token:t.payload.token,userName:t.payload.userName});case"LOGIN_FAIL":return Object(p.a)({},e,{status:"error",message:t.payload.message});default:return e}},f={messageBox:[],webSocket:"",onlineCount:0,connectStatus:"",styleMessageBox:!0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_WEB_SOCKET":return Object(p.a)({},e,{connectStatus:"connecting"});case"CONNECT_WEB_SOCKET_SUCCESS":return Object(p.a)({},e,{connectStatus:"connected",webSocket:t.payload});case"CONNECT_WEB_SOCKET_FAIL":return Object(p.a)({},e,{connectStatus:"disconnect",webSocket:t.payload});case"SET_ONLINE_COUNT":return Object(p.a)({},e,{onlineCount:t.payload});case"SET_MESSAGE_BOX":return Object(p.a)({},e,{messageBox:e.messageBox.concat(t.payload)});case"SET_MESSAGE_BOX_STYLE":return Object(p.a)({},e,{styleMessageBox:t.payload});default:return e}},S=function(e){return Object(m.c)({router:Object(i.b)(e),loginReducer:g,chatRoomReducer:O})},C=a(18),h=a.n(C),y=a(13),N=a(7),v=a(33),j=a.n(v),w="https://express-chat-room-back-end.herokuapp.com",_=k("token");function k(e){return j.a.get(e)}var T=function(e,t){j.a.set(e,t,{expires:7})},x=function(e){j.a.remove(e)},B=h.a.mark(I);function I(e){var t,a,n,c;return h.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.account,n=t.password,o.next=3,r={email:a,password:n},fetch(w+"/"+"login",{method:"POST",headers:{"Access-Control-Allow-Origin":"http://localhost:3001",Accept:"application/json","Content-Type":"application/json",Authorization:_},credentials:"include",body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log("fetchPost",e)}));case 3:if("fail"!==(c=o.sent).status){o.next=10;break}return console.log("Fail:",c),o.next=8,Object(y.a)({type:"LOGIN_FAIL",payload:{message:c.message}});case 8:o.next=20;break;case 10:if("success"!==c.status){o.next=20;break}return console.log("success:",c),o.next=14,Object(y.a)({type:"LOGIN_SUCCESS",payload:{token:c.token,email:c.email,userName:c.userName}});case 14:return o.next=16,T("token",c.token);case 16:return o.next=18,T("userName",c.userName);case 18:return o.next=20,Object(y.a)(Object(N.d)("/"));case 20:case"end":return o.stop()}var r}),B)}var R=a(63),A=a.n(R),L=h.a.mark(U);function U(e){var t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("connectWebSocket",e),a.next=3,A()(w);case 3:if(!(t=a.sent)){a.next=9;break}return a.next=7,Object(y.a)({type:"CONNECT_WEB_SOCKET_SUCCESS",payload:t});case 7:a.next=11;break;case 9:return a.next=11,Object(y.a)({type:"CONNECT_WEB_SOCKET_FAIL"});case 11:case"end":return a.stop()}}),L)}var G=h.a.mark(W);function W(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)("LOGIN_REQUEST",I);case 2:return e.next=4,Object(y.b)("CONNECT_WEB_SOCKET",U);case 4:case"end":return e.stop()}}),G)}var F=Object(u.a)(),M=Object(E.a)();a(103);var P=a(8),K=a(24),D=a.n(K),X=a(27),J=a.n(X),Q=a(21),q=a.n(Q),Y=a(9),z=a.n(Y),H=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.loginReducer})),o=t.account,r=t.password,s=t.status,i=t.message,u=k("token"),m=function(t){var a=t.currentTarget,n=a.id,c=a.value;switch(n){case"account":e({type:"SET_USER_ACCOUNT",payload:c});case"password":e({type:"SET_USER_PASSWORD",payload:c})}};Object(n.useEffect)((function(){d()}),[u]);var d=Object(n.useCallback)((function(){console.log("checkLogined",void 0!==u),u&&e(Object(N.d)("/"))}),[u]);return c.a.createElement(P.Grid,null,c.a.createElement(P.Row,null,c.a.createElement(P.Cell,{columns:3}),c.a.createElement(P.Cell,{columns:6},c.a.createElement(D.a,{id:"loginCard"},c.a.createElement(K.CardPrimaryContent,{id:"tittle"},c.a.createElement("h1",null,"Rick's Chat Room: Beta"),c.a.createElement(K.CardMedia,{id:"logoImg",square:!0,imageUrl:a(107)})),c.a.createElement(K.CardActions,{style:{display:"block"}},c.a.createElement(K.CardActionButtons,{id:"textFieldArea"},c.a.createElement(q.a,{label:"Email",className:"textField",trailingIcon:c.a.createElement(z.a,{role:"button",icon:"delete"})},c.a.createElement(Q.Input,{id:"account",type:"email",value:o,onChange:m})),c.a.createElement(q.a,{label:"Password",className:"textField",trailingIcon:c.a.createElement(z.a,{role:"button",icon:"delete"})},c.a.createElement(Q.Input,{id:"password",type:"password",value:r,onChange:m})),c.a.createElement("div",null,c.a.createElement(J.a,{className:"loginBtn",outlined:!0,raised:!0,icon:c.a.createElement(z.a,{role:"button",icon:"login"}),onClick:function(){e({type:"LOGIN_REQUEST",payload:{account:o,password:r}})}},"Login"),c.a.createElement(J.a,{className:"loginBtn",outlined:!0,raised:!0,disabled:!0,icon:c.a.createElement(z.a,{role:"button",icon:"account_box"}),onClick:function(){}},"Signup")))),"error"===s?c.a.createElement("div",null,c.a.createElement("p",{className:"warnMsg"},i)):[])),c.a.createElement(P.Cell,{columns:3})))},V=a(16),$=a.n(V),Z=a(64),ee=a.n(Z),te=function(){var e,t=Object(l.e)((function(e){return e.chatRoomReducer})),a=t.messageBox,o=t.styleMessageBox,r=k("userName"),s="style-messagePanel-background",i="non-style-messagePanel-background";return Object(n.useEffect)((function(){e.scrollIntoView({behavior:"smooth"})}),[a]),c.a.createElement("div",{className:o?s:i},c.a.createElement("div",{id:"messagePanel"},a.map((function(e){return c.a.createElement(P.Row,{key:"row"+e.userName+e.timestamp},c.a.createElement(P.Cell,{columns:12},c.a.createElement("div",{className:r===e.userName?"message-box-mine":"message-box-other"},c.a.createElement(z.a,{role:"button",icon:"account_circle",className:"account_icon"}),c.a.createElement("span",null,e.userName,"(",e.timestamp,")"),c.a.createElement("div",{className:o?r===e.userName?"style-message-mine":"style-message-other":"non-style-message"},e.message))))})),c.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e=t}})))},ae=a(44),ne=function(){var e=Object(n.useState)(""),t=Object(ae.a)(e,2),a=t[0],o=t[1],r=Object(l.e)((function(e){return e.chatRoomReducer})).webSocket,s=Object(n.useState)(!1),i=Object(ae.a)(s,2),u=i[0],m=i[1],d=k("userName");Object(n.useEffect)((function(){u&&(E(),m(!1))}));var E=function(){var e=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+":"+(new Date).getUTCMilliseconds();r.emit("send",{userName:d,message:a,timestamp:e}),o("")},p=function(e){"Enter"===e.key&&m(!0)};return Object(n.useEffect)((function(){return r&&document.addEventListener("keypress",p),function(){document.removeEventListener("keypress",p)}}),[r]),c.a.createElement("div",{id:"messageSender"},c.a.createElement(q.a,{label:"\u4f60\u60f3\u8aaa\u4ec0\u9ebc",id:"msgTextEdit",onTrailingIconSelect:function(){return o("")},trailingIcon:c.a.createElement(z.a,{role:"button",icon:"delete"})},c.a.createElement(Q.Input,{id:"msgTextEditInput",value:a,onChange:function(e){var t=e.currentTarget.value;o(t)}})),c.a.createElement("div",{className:"wrapper-div"},c.a.createElement(J.a,{id:"msgSendBtn",outlined:!0,raised:!0,icon:c.a.createElement(z.a,{role:"button",icon:"send"}),onClick:E},"Send")))},ce=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.chatRoomReducer})).webSocket;Object(n.useEffect)((function(){t?o():e({type:"CONNECT_WEB_SOCKET"})}),[t]);var o=function(){console.log("initWebSocket"),t.on("online",(function(t){e({type:"SET_ONLINE_COUNT",payload:t})})),t.on("msg",(function(t){e({type:"SET_MESSAGE_BOX",payload:t}),document.hasFocus()||new Notification(t.userName,{body:t.message,icon:a(108)})}))};return c.a.createElement(P.Grid,{id:"mainGrid"},c.a.createElement(P.Row,null,c.a.createElement(P.Cell,{columns:12},c.a.createElement(te,null))),c.a.createElement(P.Row,null,c.a.createElement(P.Cell,{columns:12},c.a.createElement(ne,null))))},oe=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.chatRoomReducer})).onlineCount,a=k("token"),o=k("userName");Object(n.useEffect)((function(){window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission((function(e){console.log("status",e)}))}),[Notification.permission]),Object(n.useEffect)((function(){a||e(Object(N.d)("/login"))}),[a]);var r=Object(n.useCallback)((function(){console.log("logout"),x("token"),x("userName"),e(Object(N.d)("/login"))}),[a]);return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(c.a.Fragment,null,c.a.createElement($.a,null,c.a.createElement(V.TopAppBarRow,null,c.a.createElement(V.TopAppBarSection,{align:"start"},c.a.createElement(V.TopAppBarIcon,{navIcon:!0,tabIndex:0},c.a.createElement(z.a,{hasRipple:!0,icon:"menu",onClick:function(){return console.log("click")}})),c.a.createElement(V.TopAppBarTitle,{tabIndex:1},"Welcome ",o,", Online People: ",t)),c.a.createElement(V.TopAppBarSection,{align:"start"},c.a.createElement(ee.a,{nativeControlId:"my-switch",checked:!0,onChange:function(t){e({type:"SET_MESSAGE_BOX_STYLE",payload:t.target.checked})}}),c.a.createElement("label",{htmlFor:"my-switch",id:"mode-switch-label"},"Style Message Box")),c.a.createElement(V.TopAppBarSection,{align:"end",role:"toolbar"},c.a.createElement(V.TopAppBarIcon,{actionItem:!0,tabIndex:0},c.a.createElement(z.a,{"aria-label":"print page",hasRipple:!0,icon:"exit_to_app",onClick:r}))))),c.a.createElement(V.TopAppBarFixedAdjust,null,c.a.createElement(ce,null))):[])},re=function(e){var t=Object(m.e)(S(F),e,Object(m.d)(Object(m.a)(Object(d.a)(F),M)));return M.run(W),t}({}),le=function(){return c.a.createElement(l.a,{store:re},c.a.createElement(i.a,{history:F},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(oe,null)),c.a.createElement(s.a,{exact:!0,path:"/login"},c.a.createElement(H,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a(109)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.6aad32b6.chunk.js.map