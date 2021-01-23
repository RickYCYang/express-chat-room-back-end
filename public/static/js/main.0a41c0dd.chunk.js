(this["webpackJsonpreact-chat-room-front-end"]=this["webpackJsonpreact-chat-room-front-end"]||[]).push([[0],{130:function(e,t){},133:function(e,t,a){e.exports=a.p+"static/media/message.232a7059.png"},134:function(e,t,a){},138:function(e,t,a){e.exports=a.p+"static/media/chat.36cb8b4b.png"},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),s=(a(86),a(2)),l=a(22),i=a(16),u=a(26),m=a(23),d=a(75),p=a(80),E=a(4),g={account:"",password:"",message:"",status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_ACCOUNT":return Object(E.a)({},e,{account:t.payload});case"SET_LOGIN_PASSWORD":return Object(E.a)({},e,{password:t.payload});case"LOGIN_REQUEST":return Object(E.a)({},e,{status:"loading"});case"LOGIN_SUCCESS":return Object(E.a)({},e,{status:"logined"});case"LOGIN_FAIL":return Object(E.a)({},e,{status:"error",message:t.payload.message});default:return e}},f={account:"",userName:"",password:"",confirmPassword:"",message:"",status:"",fileName:"",successDialog:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGNUP_ACCOUNT":return Object(E.a)({},e,{account:t.payload});case"SET_SIGNUP_PASSWORD":return Object(E.a)({},e,{password:t.payload});case"SET_SIGNUP_USERNAME":return Object(E.a)({},e,{userName:t.payload});case"SET_SIGNUP_CONFIRM_PASSWORD":return Object(E.a)({},e,{confirmPassword:t.payload});case"SET_SIGNUP_MESSAGE":return Object(E.a)({},e,{message:t.payload});case"SET_SIGNUP_UPLOAD_FILE_NAME":return Object(E.a)({},e,{fileName:t.payload});case"SIGNUP_REQUEST":return Object(E.a)({},e,{status:"processing"});case"SIGNUP_SUCCESS":return Object(E.a)({},e,{status:"success",successDialog:!0,message:"",fileName:""});case"SET_SUCCESS_DIALOG":return Object(E.a)({},e,{successDialog:t.payload,message:"",fileName:""});case"SIGNUP_FAIL":return Object(E.a)({},e,{status:"error",message:t.payload.message});default:return e}},O=a(17),_=a(33),y={messageBox:[],webSocket:null,onlineCount:0,connectStatus:"",styleMessageBox:!0,isMobile:!1,drawerOpen:!1,userList:{userName:{userName:"",status:"",photo:"",socketId:""}},chatPeople:"",newMessageCount:{},imageModalOpen:!1,imageEncodeString:"",webSocketIsListening:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_WEB_SOCKET":return Object(E.a)({},e,{connectStatus:"connecting"});case"CONNECT_WEB_SOCKET_SUCCESS":return Object(E.a)({},e,{connectStatus:"connected",webSocket:t.payload});case"CONNECT_WEB_SOCKET_FAIL":return Object(E.a)({},e,{connectStatus:"disconnect",webSocket:t.payload});case"DISCONNECT_WEB_SOCKET":return Object(E.a)({},e,{webSocket:null});case"SET_USER_LIST":return Object(E.a)({},e,{userList:t.payload});case"SET_MESSAGE_BOX":return Object(E.a)({},e,{messageBox:e.messageBox.concat(t.payload)});case"SET_MESSAGE_BOX_STYLE":return Object(E.a)({},e,{styleMessageBox:t.payload});case"SET_IS_MOBILE":return Object(E.a)({},e,{isMobile:t.payload});case"SET_DRAWER_OPEN":return Object(E.a)({},e,{drawerOpen:t.payload});case"SET_CHAT_PEOPLE":return Object(E.a)({},e,{chatPeople:t.payload});case"SET_NEW_MESSAGE_ALARM":var a=t.payload.userName,n=0;return"reset"===t.payload.type||e.chatPeople===a?Object(E.a)({},e,{newMessageCount:Object(E.a)({},e.newMessageCount,Object(_.a)({},a,n))}):(Object.entries(e.newMessageCount).forEach((function(e){var t=Object(O.a)(e,2),r=t[0],c=t[1];r===a&&"number"===typeof c&&(n=c)})),Object(E.a)({},e,{newMessageCount:Object(E.a)({},e.newMessageCount,Object(_.a)({},a,n+1))}));case"SET_IMAGE_MODAL":return Object(E.a)({},e,{imageModalOpen:t.payload.imageModalOpen,imageEncodeString:t.payload.imageEncodeString});case"SET_WEB_SOCKET_IS_LISTENING":return Object(E.a)({},e,{webSocketIsListening:!0});default:return e}},v={account:"",newUserName:"",newPhotoFileName:"",successDialog:!1,message:"",status:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_ACCOUNT_SUCCESS":return Object(E.a)({},e,{account:t.payload.account});case"GET_USER_ACCOUNT_FAIL":return Object(E.a)({},e,{status:t.payload.status,message:t.payload.message});case"SET_EDIT_USER_NAME":return Object(E.a)({},e,{newUserName:t.payload});case"EDIT_USER_INFO_FAIL":return Object(E.a)({},e);case"EDIT_USER_INFO_SUCCESS":return Object(E.a)({},e,{successDialog:!0});case"SET_EDIT_FILE_NAME":return Object(E.a)({},e,{newPhotoFileName:t.payload});case"SET_EDIT_MESSAGE":return Object(E.a)({},e,{message:t.payload});case"SET_EDIT_SUCCESS_DIALOG":return Object(E.a)({},e,{successDialog:t.payload});default:return e}},T=function(e){return Object(m.c)({router:Object(i.b)(e),loginReducer:b,signupReducer:S,chatRoomReducer:N,editReducer:h})},w=a(7),C=a.n(w),j=a(8),I=a(13),x="https://express-chat-room-back-end.herokuapp.com",k=a(21),U=a.n(k);U.a.defaults.baseURL=x,U.a.defaults.headers.post.Accept="application/json",U.a.defaults.headers.post["Content-Type"]="application/json",U.a.defaults.withCredentials=!0,U.a.defaults.xsrfCookieName="XSRF-TOKEN",U.a.defaults.xsrfHeaderName="X-XSRF-TOKEN";var R=function(e,t){console.log("data",t);var a=new FormData;return Object.entries(t).forEach((function(e){var t=Object(O.a)(e,2),n=t[0],r=t[1];a.append(n,r)})),U.a.post(e,a,{headers:{"Content-Type":"multipart/form-data"}})},A=function(e,t){console.log("data",t);var a=new FormData;return Object.entries(t).forEach((function(e){var t=Object(O.a)(e,2),n=t[0],r=t[1];a.append(n,r)})),U.a.patch(e,a,{headers:{"Content-Type":"multipart/form-data"}})},L=(U.a,a(39)),P=a.n(L),M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n=new Date,r={value:t,expiry:n.getTime()+1e3*a*60*60*24};localStorage.setItem(e,JSON.stringify(r))},G=function(e){localStorage.removeItem(e)},D=function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value},F=a(78),B=a.n(F),W=function(){return D("userName")},K=function(){var e=W();return B()(x,{query:"userName=".concat(e)})},z=function(e){var t=W();e.disconnect(x,{query:"userName=".concat(t)})},H=function(e,t,a,n,r,c){e.emit("sendMessage",{sourceUser:a,targetUser:n,messageType:t,message:r,timestamp:c})},q=function(e,t,a){W()!==t&&e({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"append",userName:"Public"===a?a:t}})},Q=C.a.mark(J),X=C.a.mark(Y);function J(e){var t,a,n,r,c,o,s,l;return C.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,a=t.account,n=t.password,console.log(a,n),i.next=4,d="login",p={email:a,password:n},U.a.post(d,p);case 4:if("fail"!==(r=i.sent).data.status){i.next=11;break}return console.log("Fail:",r),i.next=9,Object(j.a)({type:"LOGIN_FAIL",payload:{message:r.data.message}});case 9:i.next=26;break;case 11:if("success"!==r.data.status){i.next=26;break}return console.log("success:",r),c=r.data,o=c.token,s=c.userName,l=c.uid,i.next=16,M("token",o,1);case 16:return i.next=18,M("userName",s,1);case 18:return i.next=20,M("uid",l,1);case 20:return i.next=22,u="XSRF-TOKE",m=o,void P.a.set(u,m);case 22:return i.next=24,Object(j.a)({type:"LOGIN_SUCCESS"});case 24:return i.next=26,Object(j.a)(Object(I.d)("/"));case 26:case"end":return i.stop()}var u,m,d,p}),Q)}function Y(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("logout action",e),t=e.payload,a.next=4,G("userName");case 4:return a.next=6,G("token");case 6:return a.next=8,z(t);case 8:return a.next=10,Object(j.a)({type:"DISCONNECT_WEB_SOCKET"});case 10:return a.next=12,Object(j.a)(Object(I.d)("/login"));case 12:case"end":return a.stop()}}),X)}var $=C.a.mark(V);function V(e){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,Object(j.a)({type:"CONNECT_WEB_SOCKET_SUCCESS",payload:t});case 6:e.next=10;break;case 8:return e.next=10,Object(j.a)({type:"CONNECT_WEB_SOCKET_FAIL"});case 10:case"end":return e.stop()}}),$)}var Z=C.a.mark(ee);function ee(e){var t,a,n,r,c,o,s,l,i;return C.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("action.payload",e.payload),t=e.payload,a=t.account,n=t.password,r=t.userName,c=t.photo,u.next=4,R("signup",{email:a,password:n,userName:r,photo:c});case 4:if(o=u.sent,s=o.data,l=s.status,i=s.message,console.log("result",o),"error"!==l){u.next=13;break}return console.log("Fail:",o),u.next=11,Object(j.a)({type:"SIGNUP_FAIL",payload:{message:i}});case 11:u.next=17;break;case 13:if("success"!==l){u.next=17;break}return console.log("Signup success"),u.next=17,Object(j.a)({type:"SIGNUP_SUCCESS"});case 17:case"end":return u.stop()}}),Z)}var te=C.a.mark(ne),ae=C.a.mark(re);function ne(e){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n="edit/getUserAccount",r={uid:e.payload.uid},U.a.get(n,{params:r});case 2:if(t=a.sent,console.log("result",t),"success"!==t.data.status){a.next=9;break}return a.next=7,Object(j.a)({type:"GET_USER_ACCOUNT_SUCCESS",payload:{account:t.data.account}});case 7:a.next=11;break;case 9:return a.next=11,Object(j.a)({type:"GET_USER_ACCOUNT_FAIL",payload:{status:t.data.status,message:t.data.message}});case 11:case"end":return a.stop()}var n,r}),te)}function re(e){var t,a,n,r,c;return C.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("action.payload",e.payload),t=e.payload,a=t.uid,n=t.userName,r=t.photo,console.log("sending request"),o.next=5,A("edit",{uid:a,userName:n,photo:r});case 5:if("success"!==(c=o.sent).data.status){o.next=13;break}return o.next=9,M("userName",n,1);case 9:return o.next=11,Object(j.a)({type:"EDIT_USER_INFO_SUCCESS",payload:{status:c.data.status}});case 11:o.next=15;break;case 13:return o.next=15,Object(j.a)({type:"EDIT_USER_INFO_FAIL",payload:{message:c.data.message,account:c.data.status}});case 15:console.log("result",c);case 16:case"end":return o.stop()}}),ae)}var ce=C.a.mark(oe);function oe(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("LOGIN_REQUEST",J);case 2:return e.next=4,Object(j.b)("SIGNUP_REQUEST",ee);case 4:return e.next=6,Object(j.b)("LOGOUT",Y);case 6:return e.next=8,Object(j.b)("CONNECT_WEB_SOCKET",V);case 8:return e.next=10,Object(j.b)("GET_USER_ACCOUNT_REQUEST",ne);case 10:return e.next=12,Object(j.b)("EDIT_USER_INFO_REQUEST",re);case 12:case"end":return e.stop()}}),ce)}var se=Object(u.a)(),le=Object(p.a)();a(134);var ie=a(14),ue=a.n(ie),me=a(12),de=a.n(me),pe=a(9),Ee=a.n(pe),ge=a(5),be=a.n(ge),fe=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.loginReducer})),c=t.account,o=t.password,l=t.status,i=t.message,u=D("token"),m=function(t){var a=t.currentTarget,n=a.id,r=a.value;switch(n){case"account":e({type:"SET_LOGIN_ACCOUNT",payload:r});break;case"password":e({type:"SET_LOGIN_PASSWORD",payload:r})}},d=function(){e({type:"LOGIN_REQUEST",payload:{account:c,password:o}})};Object(n.useEffect)((function(){u&&e(Object(I.d)("/"))}),[u]);var p=function(e){"Enter"===e.key&&d()};return Object(n.useEffect)((function(){return document.addEventListener("keypress",p),function(){document.removeEventListener("keypress",p)}}),[c,o]),r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(ue.a,{id:"signLoginCard"},r.a.createElement(ie.CardPrimaryContent,{className:"tittle"},r.a.createElement(be.a,{role:"button",icon:"person"}),r.a.createElement("a",null,"Login")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ie.CardMedia,{id:"login_logo",square:!0,imageUrl:a(138)}),r.a.createElement(ie.CardActions,null,r.a.createElement(ie.CardActionButtons,{className:"signup_login_info"},r.a.createElement(Ee.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_ACCOUNT",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"account",type:"email",value:c,onChange:m})),r.a.createElement(Ee.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_PASSWORD",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"password",type:"password",value:o,onChange:m})),r.a.createElement("div",null,r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"login"}),onClick:d},"Login"),r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"account_box"}),onClick:function(){e(Object(I.d)("signup"))}},"Signup")))),"error"===l?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,i)):[]))},Se=a(20),Oe=a.n(Se),_e=function(e){return r.a.createElement("div",{className:"message-box-userInfo"},r.a.createElement(be.a,{role:"button",icon:"account_circle",className:"account_icon"}),r.a.createElement("span",null,e.sourceUser,"(",e.timestamp,")"))},ye=function(e){var t=Object(s.e)((function(e){return e.chatRoomReducer.styleMessageBox})),a=Object(s.d)(),n=D("userName"),c=function(){a({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!0,imageEncodeString:e.message}})};return r.a.createElement("div",{className:t?n===e.sourceUser?"style-message-text-mine":"style-message-text-other":"message-text"},function(){switch(e.messageType){case"string":return e.message;case"image":return r.a.createElement("img",{src:e.message,className:"message-image",onClick:c})}}())},Ne=r.a.memo((function(e){var t=D("userName");return r.a.createElement("div",{className:t===e.sourceUser?"message-box-mine":"message-box-other"},r.a.createElement(_e,e),r.a.createElement(ye,e))}),(function(e,t){return e.sourceUser===t.sourceUser&&e.timestamp===t.timestamp})),ve=function(){var e=D("userName"),t=Object(s.e)((function(e){return e.chatRoomReducer.messageBox})),a=Object(s.e)((function(e){return e.chatRoomReducer.styleMessageBox})),c=Object(s.e)((function(e){return e.chatRoomReducer.chatPeople})),o=Object(n.useRef)(null),l=Object(n.useRef)(null),i="style-messagePanel-background",u="non-style-messagePanel-background";return Object(n.useEffect)((function(){var e;t&&o.current&&(o.current.offsetHeight<o.current.scrollHeight&&o.current.scrollTop+o.current.offsetHeight+200>o.current.scrollHeight&&o.current.scrollTo({behavior:"smooth",top:(null===(e=o.current)||void 0===e?void 0:e.scrollHeight)-o.current.offsetHeight}))}),[t]),r.a.createElement("div",{className:a?i:u},r.a.createElement("div",{id:"messagePanel",ref:o},t.filter((function(t){return"Public"===c&&"Public"===t.targetUser?t:c===t.targetUser&&e===t.sourceUser||c===t.sourceUser&&e===t.targetUser?t:void 0})).map((function(e){return r.a.createElement(Ne,Object.assign({},e,{key:e.sourceUser+e.timestamp}))})),r.a.createElement("div",{className:"anchor",ref:l})))},he=a(30),Te=a(79),we=function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){"string"===typeof n.result&&t(n.result)},n.onerror=function(){a(n.error)},n.readAsDataURL(e)}))},Ce=function(){var e=Object(he.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.next=3,Object(Te.a)(t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(n.useRef)(null),l=Object(s.e)((function(e){return e.chatRoomReducer})),i=l.webSocket,u=l.chatPeople,m=D("userName")||"",d=function(){var e=new Date;return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+":"+(new Date).getUTCMilliseconds()},p=function(){var e=d();H(i,"string",m,u,a,e),c("")},E=function(e){"Enter"===e.key&&p()};Object(n.useEffect)((function(){return document.addEventListener("keypress",E),function(){document.removeEventListener("keypress",E)}}),[a]);var g=function(){var e=Object(he.a)(C.a.mark((function e(){var t,a,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(null===(t=o.current)||void 0===t?void 0:t.files)||void 0===(null===(a=o.current)||void 0===a?void 0:a.files)){e.next=12;break}return n=o.current.files[0],e.prev=2,e.next=5,Ce(n);case 5:r=e.sent,we(r).then((function(e){var t=d();H(i,"image",m,u,e,t)})).catch((function(e){return console.log("error",e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"messageSender"},r.a.createElement(Ee.a,{label:"\u4f60\u60f3\u8aaa\u4ec0\u9ebc",id:"msgTextEdit",onTrailingIconSelect:function(){var e;null===(e=o.current)||void 0===e||e.click()},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"image"})},r.a.createElement(pe.Input,{id:"msgTextEditInput",value:a,onChange:function(e){var t=e.currentTarget.value;c(t)}})),r.a.createElement("input",{type:"file",className:"input-element",ref:o,accept:"image/*",onChange:g}),r.a.createElement(de.a,{id:"txtSendBtn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"send"}),onClick:p},"Send"))},Ie=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer.webSocket})),c=Object(s.e)((function(e){return e.chatRoomReducer.isMobile})),o=Object(s.e)((function(e){return e.chatRoomReducer.webSocketIsListening}));return Object(n.useEffect)((function(){t?o||(!function(e,t){e.on("userList",(function(e){console.log("userList",e),t({type:"SET_USER_LIST",payload:e})}))}(t,e),function(e,t,n){e.on("newMessage",(function(e){q(t,e.sourceUser,e.targetUser),t({type:"SET_MESSAGE_BOX",payload:e}),document.hasFocus()||n||new Notification(e.sourceUser,{body:e.message,icon:a(133)})}))}(t,e,c),e({type:"SET_WEB_SOCKET_IS_LISTENING"})):e({type:"CONNECT_WEB_SOCKET"})}),[t]),r.a.createElement("div",{id:"wrap"},r.a.createElement("main",{id:"mainGrid"},r.a.createElement(ve,null),r.a.createElement(je,null)))},xe=a(50),ke=a.n(xe),Ue=a(18),Re=a.n(Ue),Ae=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(s.d)();return r.a.createElement(Re.a,{singleSelection:!0,selectedIndex:a,handleSelect:function(e){c(e),o({type:"SET_MESSAGE_BOX_STYLE",payload:0===e})}},r.a.createElement(Ue.ListItem,null,r.a.createElement(Ue.ListItemGraphic,{graphic:r.a.createElement(be.a,{icon:"color_lens"})}),r.a.createElement(Ue.ListItemText,{primaryText:"Colorful Theme"})),r.a.createElement(Ue.ListItem,null,r.a.createElement(Ue.ListItemGraphic,{graphic:r.a.createElement(be.a,{icon:"format_color_reset"})}),r.a.createElement(Ue.ListItemText,{primaryText:"Simple Theme"})))},Le=r.a.memo((function(e){var t=e.newMessageCount;return r.a.createElement("div",{className:"message-alarm"},t)}),(function(e,t){return e.newMessageCount===t.newMessageCount})),Pe=function(e){var t=Object(s.d)(),a=D("userName"),c=Object(s.e)((function(e){return e.chatRoomReducer})),o=c.userList,l=c.newMessageCount,i=e.isOnline,u=Object(n.useState)(-1),m=Object(O.a)(u,2),d=m[0],p=m[1],E={};i?(E=Object.values(o).filter((function(e){return"online"===e.status&&e.userName!==a}))).splice(0,0,{userName:"Public",status:"online"}):E=Object.values(o).filter((function(e){return"offline"===e.status&&e.userName!==a}));var g=Object(n.useCallback)((function(e){i&&(p(e),t({type:"SET_CHAT_PEOPLE",payload:E[e].userName}),t({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"reset",userName:E[e].userName}}))}),[E]);return Object(n.useEffect)((function(){i&&g(0)}),[]),r.a.createElement(Re.a,{singleSelection:i,selectedIndex:d,handleSelect:g},E.map((function(e){return r.a.createElement(Ue.ListItem,{key:e.userName},r.a.createElement(Ue.ListItemGraphic,{graphic:e.photo?r.a.createElement("img",{src:"".concat(x,"/").concat(e.photo),alt:"userPhoto"}):r.a.createElement(be.a,{className:"userImage",icon:"Public"===e.userName?"people":"person"})}),r.a.createElement(Ue.ListItemText,{primaryText:e.userName}),l[e.userName]>0?r.a.createElement(Le,{newMessageCount:l[e.userName]?l[e.userName]:0}):[])})))},Me=function(){var e=D("userName"),t=Object(s.e)((function(e){return e.chatRoomReducer.userList})),a=Object.values(t).filter((function(t){return t.userName===e}))[0],n=a?a.photo:"";return r.a.createElement("div",{id:"drawer-user"},n?r.a.createElement("img",{id:"drawer-user-photo",src:"".concat(x,"/").concat(n),alt:"new"}):r.a.createElement(be.a,{className:"userImage",icon:"Public"===e?"people":"person"}),r.a.createElement("p",{id:"drawer-user-name"},e))},Ge=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer.drawerOpen})),a=Object(n.useState)(window.innerWidth),c=Object(O.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){var e=function(){console.log(window.innerWidth),l(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.a.createElement(ke.a,{modal:o<600,open:t,onClose:function(){e({type:"SET_DRAWER_OPEN",payload:!1})}},r.a.createElement(xe.DrawerContent,null,r.a.createElement(Me,null),r.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),r.a.createElement("p",{className:"drawer-title"},"Theme"),r.a.createElement(Ae,null),r.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),r.a.createElement("p",{className:"drawer-title"},"Online People"),r.a.createElement(Pe,{isOnline:!0}),r.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),r.a.createElement("p",{className:"drawer-title"},"Offline People"),r.a.createElement(Pe,{isOnline:!1})))},De=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer})),a=t.drawerOpen,c=t.webSocket,o=t.chatPeople,l=t.userList,i=Object(n.useCallback)((function(){return Object.values(l).filter((function(e){return"online"===e.status})).length}),[l]);return r.a.createElement(Oe.a,null,r.a.createElement(Se.TopAppBarRow,null,r.a.createElement(Se.TopAppBarSection,{align:"start"},r.a.createElement(Se.TopAppBarIcon,{navIcon:!0,tabIndex:0},r.a.createElement(be.a,{hasRipple:!0,icon:"menu",onClick:function(){e({type:"SET_DRAWER_OPEN",payload:!a})}})),r.a.createElement(Se.TopAppBarTitle,{tabIndex:1},"Chat Room",r.a.createElement(be.a,{hasRipple:!0,icon:"chat"}))),r.a.createElement(Se.TopAppBarSection,{className:"chat-people-section"},r.a.createElement("div",{className:"chat-people-block"},r.a.createElement("p",{id:"chat-people"}," Chat: ",o," "),r.a.createElement("p",{id:"online-people"}," ( Online People: ",i()," )"))),r.a.createElement(Se.TopAppBarSection,{align:"end",role:"toolbar"},r.a.createElement(Se.TopAppBarIcon,{actionItem:!0,tabIndex:0},r.a.createElement(be.a,{"aria-label":"Edit",hasRipple:!0,icon:"person","data-tooltip-id":"tooltip-id",onClick:function(){e(Object(I.d)("/edit"))}})),r.a.createElement(Se.TopAppBarIcon,{actionItem:!0,tabIndex:1},r.a.createElement(be.a,{"aria-label":"Logout",hasRipple:!0,icon:"exit_to_app",onClick:function(){e({type:"LOGOUT",payload:c})}})))))},Fe=function(){var e=Object(s.e)((function(e){return e.chatRoomReducer})),t=e.imageModalOpen,a=e.imageEncodeString,c=Object(s.d)(),o=Object(n.useCallback)((function(){c({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!1,imageEncodeString:""}})}),[]);return r.a.createElement("div",{id:"myModal",className:"modal",style:{display:t?"block":"none"}},r.a.createElement("span",{className:"close",style:{color:"white"},onClick:o},"\xd7"),r.a.createElement("img",{className:"modal-content",alt:"messageImage",src:a}))},Be=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.chatRoomReducer})).isMobile,a=D("token");return Object(n.useEffect)((function(){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&e({type:"SET_IS_MOBILE",payload:!0}),t||window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission((function(e){console.log("status",e)}))}),[]),Object(n.useEffect)((function(){a||e(Object(I.d)("/login"))}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"drawer-container"},r.a.createElement(De,null),r.a.createElement(Se.TopAppBarFixedAdjust,{className:"top-app-bar-fix-adjust"},r.a.createElement(Ge,null),r.a.createElement(Ie,null)),r.a.createElement(Fe,null))):[])},We=a(25),Ke=a.n(We),ze=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.signupReducer})).successDialog,a=Object(n.useCallback)((function(t){e(Object(I.d)("login")),e({type:"SET_SUCCESS_DIALOG",payload:!1})}),[t]);return r.a.createElement(Ke.a,{id:"signupDialog",open:t},r.a.createElement(We.DialogTitle,null,"Success"),r.a.createElement(We.DialogContent,null,r.a.createElement("div",null,"Signup successfully")),r.a.createElement(We.DialogFooter,null,r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"account_box"}),onClick:a},"Login")))},He=function(){var e=Object(s.d)(),t=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(s.e)((function(e){return e.signupReducer})),o=c.account,l=c.password,i=c.confirmPassword,u=c.userName,m=c.status,d=c.message,p=c.fileName,E=function(t){var a=t.currentTarget,n=a.id,r=a.value;switch(n){case"account":e({type:"SET_SIGNUP_ACCOUNT",payload:r});break;case"password":e({type:"SET_SIGNUP_PASSWORD",payload:r});break;case"confirmPassword":e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:r});break;case"userName":e({type:"SET_SIGNUP_USERNAME",payload:r})}},g=function(){var n=Object(he.a)(C.a.mark((function n(){var r,c;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(null===(r=t.current)||void 0===r?void 0:r.files)&&(null===(c=t.current)||void 0===c?void 0:c.files.length)>0?(a.current=t.current.files[0],e({type:"SET_SIGNUP_UPLOAD_FILE_NAME",payload:a.current.name})):(a.current=null,e({type:"SET_SIGNUP_UPLOAD_FILE_NAME",payload:""}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(ue.a,{id:"signLoginCard"},r.a.createElement(ie.CardPrimaryContent,{className:"tittle"},r.a.createElement(be.a,{role:"button",icon:"person"}),r.a.createElement("a",null,"Signup+")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ie.CardActions,null,r.a.createElement(ie.CardActionButtons,{className:"signup_login_info"},r.a.createElement(Ee.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_ACCOUNT",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"account",type:"account",value:o,onChange:E})),r.a.createElement(Ee.a,{label:"Nick Name",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_USERNAME",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"userName",type:"string",value:u,onChange:E})),r.a.createElement(Ee.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_PASSWORD",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"password",type:"password",value:l,onChange:E})),r.a.createElement(Ee.a,{label:"Confirm Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"confirmPassword",type:"password",value:i,onChange:E})),r.a.createElement("div",{className:"textField"},r.a.createElement("div",{className:"upload-image-div",style:{borderBottom:"1px solid darkgray"}},r.a.createElement(de.a,{className:"upload-image-btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"image"}),onClick:function(){var e;null===(e=t.current)||void 0===e||e.click()}},"Photo"),r.a.createElement("input",{type:"file",className:"input-element",ref:t,accept:"image/*",onChange:g}),r.a.createElement("span",{id:"upload-photo-name"},p))),r.a.createElement("div",{className:"signup_btn_block"},r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"person_add"}),onClick:function(){console.log("photo",a.current),console.log("signup",o,l,i,u),o&&l&&i&&u?i===l?o.indexOf("@")<=0?e({type:"SET_SIGNUP_MESSAGE",payload:"Invalid email!"}):a.current?e({type:"SIGNUP_REQUEST",payload:{account:o,password:l,userName:u,photo:a.current}}):e({type:"SET_SIGNUP_MESSAGE",payload:"Please upload one photo"}):e({type:"SET_SIGNUP_MESSAGE",payload:"Passwords are not same!"}):e({type:"SET_SIGNUP_MESSAGE",payload:"Please fill in all information"})}},"Signup"),r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){e(Object(I.d)("login"))}},"login")))),"error"===m||""!==d?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,d)):[])),r.a.createElement(ze,null))},qe=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.editReducer.successDialog})),a=Object(n.useCallback)((function(t){e(Object(I.d)("/")),e({type:"SET_EDIT_SUCCESS_DIALOG",payload:!1})}),[t]);return r.a.createElement(Ke.a,{id:"signupDialog",open:t},r.a.createElement(We.DialogTitle,null,"Success"),r.a.createElement(We.DialogContent,null,r.a.createElement("div",null,"Update account information successfully")),r.a.createElement(We.DialogFooter,null,r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"account_box"}),onClick:a},"Chatroom")))},Qe=function(){var e=D("uid"),t=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(s.d)(),o=Object(s.e)((function(e){return e.editReducer})),l=o.account,i=o.newUserName,u=o.newPhotoFileName,m=(o.successDialog,o.message),d=o.status;Object(n.useEffect)((function(){e||c(Object(I.d)("/login")),c({type:"GET_USER_ACCOUNT_REQUEST",payload:{uid:e}})}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(ue.a,{id:"signLoginCard"},r.a.createElement(ie.CardPrimaryContent,{className:"tittle"},r.a.createElement(be.a,{role:"button",icon:"person"}),r.a.createElement("span",null,"Information")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ie.CardActions,null,r.a.createElement(ie.CardActionButtons,{className:"signup_login_info"},r.a.createElement(Ee.a,{label:"Email",className:"textField",disabled:!0},r.a.createElement(pe.Input,{id:"account",type:"account",value:l,disabled:!0})),r.a.createElement(Ee.a,{label:"New Nick Name (Optional)",className:"textField",onTrailingIconSelect:function(){c({type:"SET_EDIT_USER_NAME",payload:""})},trailingIcon:r.a.createElement(be.a,{role:"button",icon:"delete"})},r.a.createElement(pe.Input,{id:"newUserName",type:"string",value:i,onChange:function(e){var t=e.currentTarget.value;c({type:"SET_EDIT_USER_NAME",payload:t})}})),r.a.createElement("div",{className:"textField"},r.a.createElement("div",{className:"upload-image-div",style:{borderBottom:"1px solid darkgray"}},r.a.createElement(de.a,{className:"upload-image-btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"image"}),onClick:function(){var e;null===(e=t.current)||void 0===e||e.click()}},"Photo"),r.a.createElement("input",{type:"file",className:"input-element",ref:t,accept:"image/*",onChange:function(){var e,n;(null===(e=t.current)||void 0===e?void 0:e.files)&&(null===(n=t.current)||void 0===n?void 0:n.files.length)>0?(a.current=t.current.files[0],c({type:"SET_EDIT_FILE_NAME",payload:a.current.name})):(a.current=null,c({type:"SET_EDIT_FILE_NAME",payload:""}))}}),r.a.createElement("span",{id:"upload-photo-name"},u))),r.a.createElement("div",{className:"signup_btn_block"},r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"person_add"}),onClick:function(){i||a.current?c({type:"EDIT_USER_INFO_REQUEST",payload:{uid:e,userName:i,photo:a.current}}):c({type:"SET_EDIT_MESSAGE",payload:"No information has been update"})}},"Update"),r.a.createElement(de.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(be.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){c(Object(I.d)("/"))}},"Back")))),"error"===d||""!==m?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,m)):[])),r.a.createElement(qe,null))},Xe=function(e){var t=Object(m.e)(T(se),e,Object(m.d)(Object(m.a)(Object(d.a)(se),le)));return le.run(oe),t}({}),Je=function(){return r.a.createElement(s.a,{store:Xe},r.a.createElement(i.a,{history:se},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(Be,null)),r.a.createElement(l.a,{exact:!0,path:"/login"},r.a.createElement(fe,null)),r.a.createElement(l.a,{exact:!0,path:"/signup"},r.a.createElement(He,null)),r.a.createElement(l.a,{exact:!0,path:"/edit"},r.a.createElement(Qe,null)),r.a.createElement(l.a,{exact:!0,path:"*"},r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry, No this page"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,a){e.exports=a(139)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.0a41c0dd.chunk.js.map