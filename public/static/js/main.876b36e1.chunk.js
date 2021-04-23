(this["webpackJsonpreact-chat-room-front-end"]=this["webpackJsonpreact-chat-room-front-end"]||[]).push([[0],{188:function(e,t,a){e.exports=a(361)},193:function(e,t,a){},238:function(e,t){},243:function(e,t){},245:function(e,t){},256:function(e,t){},258:function(e,t){},285:function(e,t){},287:function(e,t){},288:function(e,t){},293:function(e,t){},295:function(e,t){},314:function(e,t){},326:function(e,t){},329:function(e,t){},355:function(e,t,a){e.exports=a.p+"static/media/message.232a7059.png"},356:function(e,t,a){},360:function(e,t,a){e.exports=a.p+"static/media/chat.36cb8b4b.png"},361:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(73),o=a.n(r),s=(a(193),a(3)),l=a(32),i=a(24),u=a(38),m=a(34),d=a(183),p=a(187),E=a(2),g={account:"",password:"",message:"",status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload});case"SET_LOGIN_PASSWORD":return Object(E.a)(Object(E.a)({},e),{},{password:t.payload});case"LOGIN_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{status:"loading"});case"LOGIN_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{status:"logined"});case"LOGIN_FAIL":return Object(E.a)(Object(E.a)({},e),{},{status:"error",message:t.payload.message});default:return e}},f={account:"",userName:"",password:"",confirmPassword:"",message:"",status:"",fileName:"",successDialog:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGNUP_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload});case"SET_SIGNUP_PASSWORD":return Object(E.a)(Object(E.a)({},e),{},{password:t.payload});case"SET_SIGNUP_USERNAME":return Object(E.a)(Object(E.a)({},e),{},{userName:t.payload});case"SET_SIGNUP_CONFIRM_PASSWORD":return Object(E.a)(Object(E.a)({},e),{},{confirmPassword:t.payload});case"SET_SIGNUP_MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{message:t.payload});case"SET_SIGNUP_UPLOAD_FILE_NAME":return Object(E.a)(Object(E.a)({},e),{},{fileName:t.payload});case"SIGNUP_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{status:"processing"});case"SIGNUP_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{status:"success",successDialog:!0,message:"",fileName:""});case"SET_SUCCESS_DIALOG":return Object(E.a)(Object(E.a)({},e),{},{successDialog:t.payload,message:"",fileName:""});case"SIGNUP_FAIL":return Object(E.a)(Object(E.a)({},e),{},{status:"error",message:t.payload.message});default:return e}},S=a(25),_=a(61),y={messageBox:[],webSocket:null,onlineCount:0,connectStatus:"",styleMessageBox:!0,isMobile:!1,drawerOpen:!1,userList:{userName:{userName:"",status:"",photo:"",socketId:""}},chatPeople:"",newMessageCount:{},imageModalOpen:!1,imageEncodeString:"",webSocketIsListening:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_WEB_SOCKET":return Object(E.a)(Object(E.a)({},e),{},{connectStatus:"connecting"});case"CONNECT_WEB_SOCKET_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{connectStatus:"connected",webSocket:t.payload});case"CONNECT_WEB_SOCKET_FAIL":return Object(E.a)(Object(E.a)({},e),{},{connectStatus:"disconnect",webSocket:t.payload});case"DISCONNECT_WEB_SOCKET":return Object(E.a)(Object(E.a)({},e),{},{webSocket:null});case"SET_USER_LIST":return Object(E.a)(Object(E.a)({},e),{},{userList:t.payload});case"SET_MESSAGE_BOX":return Object(E.a)(Object(E.a)({},e),{},{messageBox:e.messageBox.concat(t.payload)});case"SET_MESSAGE_BOX_STYLE":return Object(E.a)(Object(E.a)({},e),{},{styleMessageBox:t.payload});case"SET_IS_MOBILE":return Object(E.a)(Object(E.a)({},e),{},{isMobile:t.payload});case"SET_DRAWER_OPEN":return Object(E.a)(Object(E.a)({},e),{},{drawerOpen:t.payload});case"SET_CHAT_PEOPLE":return Object(E.a)(Object(E.a)({},e),{},{chatPeople:t.payload});case"SET_NEW_MESSAGE_ALARM":var a=t.payload.userName,n=0;return"reset"===t.payload.type||e.chatPeople===a?Object(E.a)(Object(E.a)({},e),{},{newMessageCount:Object(E.a)(Object(E.a)({},e.newMessageCount),{},Object(_.a)({},a,n))}):(Object.entries(e.newMessageCount).forEach((function(e){var t=Object(S.a)(e,2),c=t[0],r=t[1];c===a&&"number"===typeof r&&(n=r)})),Object(E.a)(Object(E.a)({},e),{},{newMessageCount:Object(E.a)(Object(E.a)({},e.newMessageCount),{},Object(_.a)({},a,n+1))}));case"SET_IMAGE_MODAL":return Object(E.a)(Object(E.a)({},e),{},{imageModalOpen:t.payload.imageModalOpen,imageEncodeString:t.payload.imageEncodeString});case"SET_WEB_SOCKET_IS_LISTENING":return Object(E.a)(Object(E.a)({},e),{},{webSocketIsListening:!0});default:return e}},v={account:"",newUserName:"",newPhotoFileName:"",successDialog:!1,message:"",status:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_ACCOUNT_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload.account});case"GET_USER_ACCOUNT_FAIL":return Object(E.a)(Object(E.a)({},e),{},{status:t.payload.status,message:t.payload.message});case"SET_EDIT_USER_NAME":return Object(E.a)(Object(E.a)({},e),{},{newUserName:t.payload});case"EDIT_USER_INFO_FAIL":return Object(E.a)({},e);case"EDIT_USER_INFO_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{successDialog:!0});case"SET_EDIT_FILE_NAME":return Object(E.a)(Object(E.a)({},e),{},{newPhotoFileName:t.payload});case"SET_EDIT_MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{message:t.payload});case"SET_EDIT_SUCCESS_DIALOG":return Object(E.a)(Object(E.a)({},e),{},{successDialog:t.payload});default:return e}},h=function(e){return Object(m.c)({router:Object(i.b)(e),loginReducer:b,signupReducer:O,chatRoomReducer:N,editReducer:j})},T=a(11),C=a.n(T),w=a(12),I=a(19),x="https://nodejs-express-react-demo.herokuapp.com",k=a(21),U=a.n(k);U.a.defaults.baseURL=x,U.a.defaults.headers.Accept="application/json",U.a.defaults.headers["Content-Type"]="application/json",U.a.defaults.headers.get["Content-Type"]="application/json",U.a.defaults.headers.post["Content-Type"]="application/json",U.a.defaults.withCredentials=!0,U.a.defaults.xsrfCookieName="XSRF-TOKEN",U.a.defaults.xsrfHeaderName="X-XSRF-TOKEN";var R=function(e,t){console.log("url",e,t),console.log("hostname",U.a.defaults.baseURL);var a={params:t};return U.a.get(e,a)},A=function(e,t){console.log("data",t);var a=new FormData;return Object.entries(t).forEach((function(e){var t=Object(S.a)(e,2),n=t[0],c=t[1];a.append(n,c)})),U.a.post(e,a,{headers:{"Content-Type":"multipart/form-data"}})},L=function(e,t){console.log("data",t);var a=new FormData;return Object.entries(t).forEach((function(e){var t=Object(S.a)(e,2),n=t[0],c=t[1];a.append(n,c)})),U.a.patch(e,a,{headers:{"Content-Type":"multipart/form-data"}})},P=(U.a,a(76)),G=a.n(P),M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n=new Date,c={value:t,expiry:n.getTime()+1e3*a*60*60*24};localStorage.setItem(e,JSON.stringify(c))},D=function(e){localStorage.removeItem(e)},F=function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value},B=a(185),W=a.n(B),K=a(77),z=a.n(K),H=function(e){return z.a.AES.encrypt(e,"ThisIsRick").toString()},q=function(e){return z.a.AES.decrypt(e,"ThisIsRick").toString(z.a.enc.Utf8)},Q=function(){return F("userName")},X=function(){var e=Q();return W()(x,{query:"userName=".concat(e)})},J=function(e){var t=Q();e.disconnect(x,{query:"userName=".concat(t)})},Y=function(e,t,a,n,c,r){console.log("before encrypt",a,n,c),console.log("after encrypt",H(c)),console.log("after decrypt",q(H(c))),console.log("socket",a,n,c);var o=H(JSON.stringify({sourceUser:a,targetUser:n,messageType:t,message:c,timestamp:r}));e.emit("sendMessage",o)},$=function(e,t,a){Q()!==t&&e({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"append",userName:"Public"===a?a:t}})},V=C.a.mark(ee),Z=C.a.mark(te);function ee(e){var t,a,n,c,r,o,s,l;return C.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,a=t.account,n=t.password,console.log(a,n),i.next=4,d="login",p={email:a,password:n},U.a.post(d,p);case 4:if("fail"!==(c=i.sent).data.status){i.next=11;break}return console.log("Fail:",c),i.next=9,Object(w.a)({type:"LOGIN_FAIL",payload:{message:c.data.message}});case 9:i.next=26;break;case 11:if("success"!==c.data.status){i.next=26;break}return console.log("success:",c),r=c.data,o=r.token,s=r.userName,l=r.uid,i.next=16,M("token",o,30);case 16:return i.next=18,M("userName",s,30);case 18:return i.next=20,M("uid",l,30);case 20:return i.next=22,u="XSRF-TOKE",m=o,void G.a.set(u,m);case 22:return i.next=24,Object(w.a)({type:"LOGIN_SUCCESS"});case 24:return i.next=26,Object(w.a)(Object(I.d)("/"));case 26:case"end":return i.stop()}var u,m,d,p}),V)}function te(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("logout action",e),t=e.payload,a.next=4,D("userName");case 4:return a.next=6,D("token");case 6:return a.next=8,J(t);case 8:return a.next=10,Object(w.a)({type:"DISCONNECT_WEB_SOCKET"});case 10:return a.next=12,Object(w.a)(Object(I.d)("/login"));case 12:case"end":return a.stop()}}),Z)}var ae=C.a.mark(ne);function ne(e){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,Object(w.a)({type:"CONNECT_WEB_SOCKET_SUCCESS",payload:t});case 6:e.next=10;break;case 8:return e.next=10,Object(w.a)({type:"CONNECT_WEB_SOCKET_FAIL"});case 10:case"end":return e.stop()}}),ae)}var ce=C.a.mark(re);function re(e){var t,a,n,c,r,o,s,l,i;return C.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("action.payload",e.payload),t=e.payload,a=t.account,n=t.password,c=t.userName,r=t.photo,u.next=4,A("signup",{email:a,password:n,userName:c,photo:r});case 4:if(o=u.sent,s=o.data,l=s.status,i=s.message,console.log("result",o),"error"!==l){u.next=13;break}return console.log("Fail:",o),u.next=11,Object(w.a)({type:"SIGNUP_FAIL",payload:{message:i}});case 11:u.next=17;break;case 13:if("success"!==l){u.next=17;break}return console.log("Signup success"),u.next=17,Object(w.a)({type:"SIGNUP_SUCCESS"});case 17:case"end":return u.stop()}}),ce)}var oe=C.a.mark(le),se=C.a.mark(ie);function le(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("edit/getUserAccount",{uid:e.payload.uid});case 3:if(t=a.sent,console.log("result",t),"success"!==t.data.status){a.next=10;break}return a.next=8,Object(w.a)({type:"GET_USER_ACCOUNT_SUCCESS",payload:{account:t.data.account}});case 8:a.next=12;break;case 10:return a.next=12,Object(w.a)({type:"GET_USER_ACCOUNT_FAIL",payload:{status:t.data.status,message:t.data.message}});case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log("error occurs"),a.next=19,Object(w.a)({type:"GET_USER_ACCOUNT_FAIL",payload:{status:"error",message:"Error occurs when geting user account"}});case 19:case"end":return a.stop()}}),oe,null,[[0,14]])}function ie(e){var t,a,n,c,r;return C.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("action.payload",e.payload),t=e.payload,a=t.uid,n=t.userName,c=t.photo,console.log("sending request"),o.next=5,L("edit",{uid:a,userName:n,photo:c});case 5:if("success"!==(r=o.sent).data.status){o.next=13;break}return o.next=9,M("userName",n,1);case 9:return o.next=11,Object(w.a)({type:"EDIT_USER_INFO_SUCCESS",payload:{status:r.data.status}});case 11:o.next=15;break;case 13:return o.next=15,Object(w.a)({type:"EDIT_USER_INFO_FAIL",payload:{message:r.data.message,account:r.data.status}});case 15:console.log("result",r);case 16:case"end":return o.stop()}}),se)}var ue=C.a.mark(me);function me(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)("LOGIN_REQUEST",ee);case 2:return e.next=4,Object(w.b)("SIGNUP_REQUEST",re);case 4:return e.next=6,Object(w.b)("LOGOUT",te);case 6:return e.next=8,Object(w.b)("CONNECT_WEB_SOCKET",ne);case 8:return e.next=10,Object(w.b)("GET_USER_ACCOUNT_REQUEST",le);case 10:return e.next=12,Object(w.b)("EDIT_USER_INFO_REQUEST",ie);case 12:case"end":return e.stop()}}),ue)}var de=Object(u.a)(),pe=Object(p.a)();a(356);var Ee=a(20),ge=a.n(Ee),be=a(17),fe=a.n(be),Oe=a(13),Se=a.n(Oe),_e=a(6),ye=a.n(_e),Ne=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.loginReducer})),r=t.account,o=t.password,l=t.status,i=t.message,u=F("token"),m=function(t){var a=t.currentTarget,n=a.id,c=a.value;switch(n){case"account":e({type:"SET_LOGIN_ACCOUNT",payload:c});break;case"password":e({type:"SET_LOGIN_PASSWORD",payload:c})}},d=function(){e({type:"LOGIN_REQUEST",payload:{account:r,password:o}})};Object(n.useEffect)((function(){u&&e(Object(I.d)("/"))}),[u]);var p=function(e){"Enter"===e.key&&d()};return Object(n.useEffect)((function(){return document.addEventListener("keypress",p),function(){document.removeEventListener("keypress",p)}}),[r,o]),c.a.createElement("div",{id:"signLoginContainer"},c.a.createElement(ge.a,{id:"signLoginCard"},c.a.createElement(Ee.CardPrimaryContent,{className:"tittle"},c.a.createElement(ye.a,{role:"button",icon:"person"}),c.a.createElement("a",null,"Login")),c.a.createElement("hr",{className:"separate_line"}),c.a.createElement(Ee.CardMedia,{id:"login_logo",square:!0,imageUrl:a(360)}),c.a.createElement(Ee.CardActions,null,c.a.createElement(Ee.CardActionButtons,{className:"signup_login_info"},c.a.createElement(Se.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_ACCOUNT",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"account","data-testid":"email",type:"email",value:r,onChange:m})),c.a.createElement(Se.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_PASSWORD",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"password",type:"password","data-testid":"password",value:o,onChange:m})),c.a.createElement("div",null,c.a.createElement(fe.a,{className:"signup_login_btn","data-testid":"login",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"login"}),onClick:d},"Login"),c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,"data-testid":"signup",raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"account_box"}),onClick:function(){e(Object(I.d)("signup"))}},"Signup")))),"error"===l?c.a.createElement("div",{className:"warnMsg"},c.a.createElement("p",null,i)):[]))},ve=a(31),je=a.n(ve),he=function(e){return c.a.createElement("div",{className:"message-box-userInfo"},c.a.createElement(ye.a,{role:"button",icon:"account_circle",className:"account_icon"}),c.a.createElement("span",{"data-testid":"userNname-timestamp"},e.sourceUser,"(",e.timestamp,")"))},Te=function(e){var t=Object(s.e)((function(e){return e.chatRoomReducer.styleMessageBox})),a=Object(s.d)(),n=F("userName"),r=function(){a({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!0,imageEncodeString:e.message}})};return c.a.createElement("div",{"data-testid":"message-box-text",className:t?n===e.sourceUser?"style-message-text-mine":"style-message-text-other":"message-text"},function(){switch(e.messageType){case"string":return e.message;case"image":return c.a.createElement("img",{src:e.message,className:"message-image",onClick:r})}}())},Ce=c.a.memo((function(e){var t=F("userName");return c.a.createElement("div",{"data-testid":"message-box",className:t===e.sourceUser?"message-box-mine":"message-box-other"},c.a.createElement(he,e),c.a.createElement(Te,e))}),(function(e,t){return e.sourceUser===t.sourceUser&&e.timestamp===t.timestamp})),we=function(){var e=F("userName"),t=Object(s.e)((function(e){return e.chatRoomReducer.messageBox})),a=Object(s.e)((function(e){return e.chatRoomReducer.styleMessageBox})),r=Object(s.e)((function(e){return e.chatRoomReducer.chatPeople})),o=Object(n.useRef)(null),l=Object(n.useRef)(null),i="style-messagePanel-background",u="non-style-messagePanel-background";return Object(n.useEffect)((function(){var e;t&&o.current&&(o.current.offsetHeight<o.current.scrollHeight&&o.current.scrollTop+o.current.offsetHeight+200>o.current.scrollHeight&&o.current.scrollTo({behavior:"smooth",top:(null===(e=o.current)||void 0===e?void 0:e.scrollHeight)-o.current.offsetHeight}))}),[t]),c.a.createElement("div",{className:a?i:u},c.a.createElement("div",{id:"messagePanel",ref:o},t.filter((function(t){return"Public"===r&&"Public"===t.targetUser||r===t.targetUser&&e===t.sourceUser||r===t.sourceUser&&e===t.targetUser?t:void 0})).map((function(e){return c.a.createElement(Ce,Object.assign({},e,{key:e.sourceUser+e.timestamp}))})),c.a.createElement("div",{className:"anchor",ref:l})))},Ie=a(52),xe=a(186),ke=function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){"string"===typeof n.result&&t(n.result)},n.onerror=function(){a(n.error)},n.readAsDataURL(e)}))},Ue=function(){var e=Object(Ie.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.next=3,Object(xe.a)(t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],r=t[1],o=Object(n.useRef)(null),l=Object(s.e)((function(e){return e.chatRoomReducer})),i=l.webSocket,u=l.chatPeople,m=F("userName")||"",d=function(){var e=new Date;return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+":"+(new Date).getUTCMilliseconds()},p=function(){var e=d();Y(i,"string",m,u,a,e),r("")},E=function(e){"Enter"===e.key&&p()};Object(n.useEffect)((function(){return document.addEventListener("keypress",E),function(){document.removeEventListener("keypress",E)}}),[a]);var g=function(){var e=Object(Ie.a)(C.a.mark((function e(){var t,a,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(null===(t=o.current)||void 0===t?void 0:t.files)||void 0===(null===(a=o.current)||void 0===a?void 0:a.files)){e.next=12;break}return n=o.current.files[0],e.prev=2,e.next=5,Ue(n);case 5:c=e.sent,ke(c).then((function(e){var t=d();Y(i,"image",m,u,e,t)})).catch((function(e){return console.log("error",e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{id:"messageSender"},c.a.createElement(Se.a,{label:"\u4f60\u60f3\u8aaa\u4ec0\u9ebc",id:"msgTextEdit","data-testid":"msgTextEdit",onTrailingIconSelect:function(){var e;null===(e=o.current)||void 0===e||e.click()},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"image"})},c.a.createElement(Oe.Input,{"data-testid":"msgTextEditInput",id:"msgTextEditInput",value:a,onChange:function(e){var t=e.currentTarget.value;r(t)}})),c.a.createElement("input",{type:"file",className:"input-element",ref:o,accept:"image/*",onChange:g}),c.a.createElement(fe.a,{id:"txtSendBtn","data-testid":"txtSendBtn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"send"}),onClick:p},"Send"))},Ae=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer.webSocket})),r=Object(s.e)((function(e){return e.chatRoomReducer.isMobile})),o=Object(s.e)((function(e){return e.chatRoomReducer.webSocketIsListening}));return Object(n.useEffect)((function(){t?o||(!function(e,t){e.on("userList",(function(e){console.log("userList",e),t({type:"SET_USER_LIST",payload:e})}))}(t,e),function(e,t,n){e.on("newMessage",(function(e){var c=JSON.parse(q(e));$(t,c.sourceUser,c.targetUser),t({type:"SET_MESSAGE_BOX",payload:c}),document.hasFocus()||n||new Notification(c.sourceUser,{body:c.message,icon:a(355)})}))}(t,e,r),e({type:"SET_WEB_SOCKET_IS_LISTENING"})):e({type:"CONNECT_WEB_SOCKET"})}),[t]),c.a.createElement("div",{id:"wrap"},c.a.createElement("main",{id:"mainGrid"},c.a.createElement(we,null),c.a.createElement(Re,null)))},Le=a(109),Pe=a.n(Le),Ge=a(26),Me=a.n(Ge),De=function(){var e=Object(n.useState)(0),t=Object(S.a)(e,2),a=t[0],r=t[1],o=Object(s.d)();return c.a.createElement(Me.a,{singleSelection:!0,selectedIndex:a,handleSelect:function(e){r(e),o({type:"SET_MESSAGE_BOX_STYLE",payload:0===e})}},c.a.createElement(Ge.ListItem,null,c.a.createElement(Ge.ListItemGraphic,{graphic:c.a.createElement(ye.a,{icon:"color_lens"})}),c.a.createElement(Ge.ListItemText,{primaryText:"Colorful Theme"})),c.a.createElement(Ge.ListItem,null,c.a.createElement(Ge.ListItemGraphic,{graphic:c.a.createElement(ye.a,{icon:"format_color_reset"})}),c.a.createElement(Ge.ListItemText,{primaryText:"Simple Theme"})))},Fe=c.a.memo((function(e){var t=e.newMessageCount;return c.a.createElement("div",{className:"message-alarm"},t)}),(function(e,t){return e.newMessageCount===t.newMessageCount})),Be=function(e){var t=Object(s.d)(),a=F("userName"),r=Object(s.e)((function(e){return e.chatRoomReducer})),o=r.userList,l=r.newMessageCount,i=e.isOnline,u=Object(n.useState)(-1),m=Object(S.a)(u,2),d=m[0],p=m[1],E={};i?(E=Object.values(o).filter((function(e){return"online"===e.status&&e.userName!==a}))).splice(0,0,{userName:"Public",status:"online"}):E=Object.values(o).filter((function(e){return"offline"===e.status&&e.userName!==a}));var g=Object(n.useCallback)((function(e){i&&(p(e),t({type:"SET_CHAT_PEOPLE",payload:E[e].userName}),t({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"reset",userName:E[e].userName}}))}),[E]);return Object(n.useEffect)((function(){i&&g(0)}),[]),c.a.createElement(Me.a,{singleSelection:i,selectedIndex:d,handleSelect:g},E.map((function(e){return c.a.createElement(Ge.ListItem,{key:e.userName},c.a.createElement(Ge.ListItemGraphic,{graphic:e.photo?c.a.createElement("img",{src:"".concat(x,"/").concat(e.photo),alt:"userPhoto"}):c.a.createElement(ye.a,{className:"userImage",icon:"Public"===e.userName?"people":"person"})}),c.a.createElement(Ge.ListItemText,{primaryText:e.userName}),l[e.userName]>0?c.a.createElement(Fe,{newMessageCount:l[e.userName]?l[e.userName]:0}):[])})))},We=function(){var e=F("userName"),t=Object(s.e)((function(e){return e.chatRoomReducer.userList})),a=Object.values(t).filter((function(t){return t.userName===e}))[0],n=a?a.photo:"";return c.a.createElement("div",{id:"drawer-user"},n?c.a.createElement("img",{id:"drawer-user-photo",src:"".concat(x,"/").concat(n),alt:"new"}):c.a.createElement(ye.a,{className:"userImage",icon:"Public"===e?"people":"person"}),c.a.createElement("p",{id:"drawer-user-name"},e))},Ke=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer.drawerOpen})),a=Object(n.useState)(window.innerWidth),r=Object(S.a)(a,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){var e=function(){l(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),c.a.createElement(Pe.a,{modal:o<600,open:t,onClose:function(){e({type:"SET_DRAWER_OPEN",payload:!1})}},c.a.createElement(Le.DrawerContent,null,c.a.createElement(We,null),c.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),c.a.createElement("p",{className:"drawer-title"},"Theme"),c.a.createElement(De,null),c.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),c.a.createElement("p",{className:"drawer-title"},"Online People"),c.a.createElement(Be,{isOnline:!0}),c.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),c.a.createElement("p",{className:"drawer-title"},"Offline People"),c.a.createElement(Be,{isOnline:!1})))},ze=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer})),a=t.drawerOpen,r=t.webSocket,o=t.chatPeople,l=t.userList,i=Object(n.useCallback)((function(){return Object.values(l).filter((function(e){return"online"===e.status})).length}),[l]);return c.a.createElement(je.a,null,c.a.createElement(ve.TopAppBarRow,null,c.a.createElement(ve.TopAppBarSection,{align:"start"},c.a.createElement(ve.TopAppBarIcon,{navIcon:!0,tabIndex:0},c.a.createElement(ye.a,{hasRipple:!0,icon:"menu",onClick:function(){e({type:"SET_DRAWER_OPEN",payload:!a})}})),c.a.createElement(ve.TopAppBarTitle,{tabIndex:1},"Chat Room",c.a.createElement(ye.a,{hasRipple:!0,icon:"chat"}))),c.a.createElement(ve.TopAppBarSection,{className:"chat-people-section"},c.a.createElement("div",{className:"chat-people-block"},c.a.createElement("p",{id:"chat-people"}," Chat: ",o," "),c.a.createElement("p",{id:"online-people"}," ( Online People: ",i()," )"))),c.a.createElement(ve.TopAppBarSection,{align:"end",role:"toolbar"},c.a.createElement(ve.TopAppBarIcon,{actionItem:!0,tabIndex:0},c.a.createElement(ye.a,{"aria-label":"Edit",hasRipple:!0,icon:"person","data-tooltip-id":"tooltip-id",onClick:function(){e(Object(I.d)("/edit"))}})),c.a.createElement(ve.TopAppBarIcon,{actionItem:!0,tabIndex:1},c.a.createElement(ye.a,{"aria-label":"Logout",hasRipple:!0,icon:"exit_to_app",onClick:function(){e({type:"LOGOUT",payload:r})}})))))},He=function(){var e=Object(s.e)((function(e){return e.chatRoomReducer})),t=e.imageModalOpen,a=e.imageEncodeString,r=Object(s.d)(),o=Object(n.useCallback)((function(){r({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!1,imageEncodeString:""}})}),[]);return c.a.createElement("div",{id:"myModal",className:"modal",style:{display:t?"block":"none"}},c.a.createElement("span",{className:"close",style:{color:"white"},onClick:o},"\xd7"),c.a.createElement("img",{className:"modal-content",alt:"messageImage",src:a}))},qe=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer})).isMobile,a=F("token");return Object(n.useEffect)((function(){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&e({type:"SET_IS_MOBILE",payload:!0}),t||window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission((function(e){console.log("status",e)}))}),[]),Object(n.useEffect)((function(){a||e(Object(I.d)("/login"))}),[a]),c.a.createElement(c.a.Fragment,null,a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"drawer-container"},c.a.createElement(ze,null),c.a.createElement(ve.TopAppBarFixedAdjust,{className:"top-app-bar-fix-adjust"},c.a.createElement(Ke,null),c.a.createElement(Ae,null)),c.a.createElement(He,null))):[])},Qe=a(37),Xe=a.n(Qe),Je=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.signupReducer})).successDialog,a=Object(n.useCallback)((function(t){e(Object(I.d)("login")),e({type:"SET_SUCCESS_DIALOG",payload:!1})}),[t]);return c.a.createElement(Xe.a,{id:"signupDialog",open:t},c.a.createElement(Qe.DialogTitle,null,"Success"),c.a.createElement(Qe.DialogContent,null,c.a.createElement("div",null,"Signup successfully")),c.a.createElement(Qe.DialogFooter,null,c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"account_box"}),onClick:a},"Login")))},Ye=function(){var e=Object(s.d)(),t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(s.e)((function(e){return e.signupReducer})),o=r.account,l=r.password,i=r.confirmPassword,u=r.userName,m=r.status,d=r.message,p=r.fileName,E=function(t){var a=t.currentTarget,n=a.id,c=a.value;switch(n){case"account":e({type:"SET_SIGNUP_ACCOUNT",payload:c});break;case"password":e({type:"SET_SIGNUP_PASSWORD",payload:c});break;case"confirmPassword":e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:c});break;case"userName":e({type:"SET_SIGNUP_USERNAME",payload:c})}},g=function(){var n=Object(Ie.a)(C.a.mark((function n(){var c,r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(null===(c=t.current)||void 0===c?void 0:c.files)&&(null===(r=t.current)||void 0===r?void 0:r.files.length)>0?(a.current=t.current.files[0],e({type:"SET_SIGNUP_UPLOAD_FILE_NAME",payload:a.current.name})):(a.current=null,e({type:"SET_SIGNUP_UPLOAD_FILE_NAME",payload:""}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"signLoginContainer"},c.a.createElement(ge.a,{id:"signLoginCard"},c.a.createElement(Ee.CardPrimaryContent,{className:"tittle"},c.a.createElement(ye.a,{role:"button",icon:"person"}),c.a.createElement("a",null,"Signup+")),c.a.createElement("hr",{className:"separate_line"}),c.a.createElement(Ee.CardActions,null,c.a.createElement(Ee.CardActionButtons,{className:"signup_login_info"},c.a.createElement(Se.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_ACCOUNT",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"account",type:"account",value:o,onChange:E})),c.a.createElement(Se.a,{label:"Nick Name",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_USERNAME",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"userName",type:"string",value:u,onChange:E})),c.a.createElement(Se.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_PASSWORD",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"password",type:"password",value:l,onChange:E})),c.a.createElement(Se.a,{label:"Confirm Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"confirmPassword",type:"password",value:i,onChange:E})),c.a.createElement("div",{className:"textField"},c.a.createElement("div",{className:"upload-image-div",style:{borderBottom:"1px solid darkgray"}},c.a.createElement(fe.a,{className:"upload-image-btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"image"}),onClick:function(){var e;null===(e=t.current)||void 0===e||e.click()}},"Photo"),c.a.createElement("input",{type:"file",className:"input-element",ref:t,accept:"image/*",onChange:g}),c.a.createElement("span",{id:"upload-photo-name"},p))),c.a.createElement("div",{className:"signup_btn_block"},c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"person_add"}),onClick:function(){console.log("photo",a.current),console.log("signup",o,l,i,u),o&&l&&i&&u?i===l?o.indexOf("@")<=0?e({type:"SET_SIGNUP_MESSAGE",payload:"Invalid email!"}):a.current?e({type:"SIGNUP_REQUEST",payload:{account:o,password:l,userName:u,photo:a.current}}):e({type:"SET_SIGNUP_MESSAGE",payload:"Please upload one photo"}):e({type:"SET_SIGNUP_MESSAGE",payload:"Passwords are not same!"}):e({type:"SET_SIGNUP_MESSAGE",payload:"Please fill in all information"})}},"Signup"),c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){e(Object(I.d)("login"))}},"login")))),"error"===m||""!==d?c.a.createElement("div",{className:"warnMsg"},c.a.createElement("p",null,d)):[])),c.a.createElement(Je,null))},$e=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.editReducer.successDialog})),a=Object(n.useCallback)((function(t){e(Object(I.d)("/")),e({type:"SET_EDIT_SUCCESS_DIALOG",payload:!1})}),[t]);return c.a.createElement(Xe.a,{id:"signupDialog",open:t},c.a.createElement(Qe.DialogTitle,null,"Success"),c.a.createElement(Qe.DialogContent,null,c.a.createElement("div",null,"Update account information successfully")),c.a.createElement(Qe.DialogFooter,null,c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"account_box"}),onClick:a},"Chatroom")))},Ve=function(){var e=F("uid"),t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(s.d)(),o=Object(s.e)((function(e){return e.editReducer})),l=o.account,i=o.newUserName,u=o.newPhotoFileName,m=(o.successDialog,o.message),d=o.status;Object(n.useEffect)((function(){e||r(Object(I.d)("/login")),r({type:"GET_USER_ACCOUNT_REQUEST",payload:{uid:e}})}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"signLoginContainer"},c.a.createElement(ge.a,{id:"signLoginCard"},c.a.createElement(Ee.CardPrimaryContent,{className:"tittle"},c.a.createElement(ye.a,{role:"button",icon:"person"}),c.a.createElement("span",null,"Information")),c.a.createElement("hr",{className:"separate_line"}),c.a.createElement(Ee.CardActions,null,c.a.createElement(Ee.CardActionButtons,{className:"signup_login_info"},c.a.createElement(Se.a,{label:"Email",className:"textField",disabled:!0},c.a.createElement(Oe.Input,{id:"account",type:"account",value:l,disabled:!0})),c.a.createElement(Se.a,{label:"New Nick Name (Optional)",className:"textField",onTrailingIconSelect:function(){r({type:"SET_EDIT_USER_NAME",payload:""})},trailingIcon:c.a.createElement(ye.a,{role:"button",icon:"delete"})},c.a.createElement(Oe.Input,{id:"newUserName",type:"string",value:i,onChange:function(e){var t=e.currentTarget.value;r({type:"SET_EDIT_USER_NAME",payload:t})}})),c.a.createElement("div",{className:"textField"},c.a.createElement("div",{className:"upload-image-div",style:{borderBottom:"1px solid darkgray"}},c.a.createElement(fe.a,{className:"upload-image-btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"image"}),onClick:function(){var e;null===(e=t.current)||void 0===e||e.click()}},"Photo"),c.a.createElement("input",{type:"file",className:"input-element",ref:t,accept:"image/*",onChange:function(){var e,n;(null===(e=t.current)||void 0===e?void 0:e.files)&&(null===(n=t.current)||void 0===n?void 0:n.files.length)>0?(a.current=t.current.files[0],r({type:"SET_EDIT_FILE_NAME",payload:a.current.name})):(a.current=null,r({type:"SET_EDIT_FILE_NAME",payload:""}))}}),c.a.createElement("span",{id:"upload-photo-name"},u))),c.a.createElement("div",{className:"signup_btn_block"},c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"person_add"}),onClick:function(){i||a.current?r({type:"EDIT_USER_INFO_REQUEST",payload:{uid:e,userName:i,photo:a.current}}):r({type:"SET_EDIT_MESSAGE",payload:"No information has been update"})}},"Update"),c.a.createElement(fe.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:c.a.createElement(ye.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){r(Object(I.d)("/"))}},"Back")))),"error"===d||""!==m?c.a.createElement("div",{className:"warnMsg"},c.a.createElement("p",null,m)):[])),c.a.createElement($e,null))},Ze=function(e){var t=Object(m.e)(h(de),e,Object(m.d)(Object(m.a)(Object(d.a)(de),pe)));return pe.run(me),t}({}),et=function(){return c.a.createElement(s.a,{store:Ze},c.a.createElement(i.a,{history:de},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/"},c.a.createElement(qe,null)),c.a.createElement(l.a,{exact:!0,path:"/login"},c.a.createElement(Ne,null)),c.a.createElement(l.a,{exact:!0,path:"/signup"},c.a.createElement(Ye,null)),c.a.createElement(l.a,{exact:!0,path:"/edit"},c.a.createElement(Ve,null)),c.a.createElement(l.a,{exact:!0,path:"*"},c.a.createElement("div",null,c.a.createElement("h1",null,"Sorry, No this page"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[188,1,2]]]);
//# sourceMappingURL=main.876b36e1.chunk.js.map