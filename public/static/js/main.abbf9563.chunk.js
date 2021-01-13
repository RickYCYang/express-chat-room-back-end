(this["webpackJsonpreact-chat-room-front-end"]=this["webpackJsonpreact-chat-room-front-end"]||[]).push([[0],{131:function(e,t){},134:function(e,t,a){},138:function(e,t,a){e.exports=a.p+"static/media/chat.36cb8b4b.png"},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),o=a.n(c),l=(a(87),a(3)),s=a(21),i=a(18),u=a(24),m=a(22),d=a(76),p=a(81),E=a(6),g={account:"",password:"",message:"",status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_ACCOUNT":return Object(E.a)({},e,{account:t.payload});case"SET_LOGIN_PASSWORD":return Object(E.a)({},e,{password:t.payload});case"LOGIN_REQUEST":return Object(E.a)({},e,{status:"loading"});case"LOGIN_SUCCESS":return Object(E.a)({},e,{status:"logined"});case"LOGIN_FAIL":return Object(E.a)({},e,{status:"error",message:t.payload.message});default:return e}},f={account:"",userName:"",password:"",confirmPassword:"",message:"",status:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGNUP_ACCOUNT":return Object(E.a)({},e,{account:t.payload});case"SET_SIGNUP_PASSWORD":return Object(E.a)({},e,{password:t.payload});case"SET_SIGNUP_USERNAME":return Object(E.a)({},e,{userName:t.payload});case"SET_SIGNUP_CONFIRM_PASSWORD":return Object(E.a)({},e,{confirmPassword:t.payload});case"SET_SIGNUP_MESSAGE":return Object(E.a)({},e,{message:t.payload});case"SIGNUP_REQUEST":return Object(E.a)({},e,{status:"processing"});case"SIGNUP_SUCCESS":return Object(E.a)({},e,{status:"success"});case"SIGNUP_FAIL":return Object(E.a)({},e,{status:"error",message:t.payload.message});default:return e}},O=a(20),y=a(31),_={messageBox:[],webSocket:null,onlineCount:0,connectStatus:"",styleMessageBox:!0,isMobile:!1,drawerOpen:!1,userList:{userName:{userName:"",status:""}},chatPeople:"",newMessageCount:{},imageModalOpen:!1,imageEncodeString:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_WEB_SOCKET":return Object(E.a)({},e,{connectStatus:"connecting"});case"CONNECT_WEB_SOCKET_SUCCESS":return Object(E.a)({},e,{connectStatus:"connected",webSocket:t.payload});case"CONNECT_WEB_SOCKET_FAIL":return Object(E.a)({},e,{connectStatus:"disconnect",webSocket:t.payload});case"DISCONNECT_WEB_SOCKET":return Object(E.a)({},e,{webSocket:null});case"SET_USER_LIST":return Object(E.a)({},e,{userList:t.payload});case"SET_MESSAGE_BOX":return Object(E.a)({},e,{messageBox:e.messageBox.concat(t.payload)});case"SET_MESSAGE_BOX_STYLE":return Object(E.a)({},e,{styleMessageBox:t.payload});case"SET_IS_MOBILE":return Object(E.a)({},e,{isMobile:t.payload});case"SET_DRAWER_OPEN":return Object(E.a)({},e,{drawerOpen:t.payload});case"SET_CHAT_PEOPLE":return Object(E.a)({},e,{chatPeople:t.payload});case"SET_NEW_MESSAGE_ALARM":var a=t.payload.userName,n=0;return"reset"===t.payload.type||e.chatPeople===a?Object(E.a)({},e,{newMessageCount:Object(E.a)({},e.newMessageCount,Object(y.a)({},a,n))}):(Object.entries(e.newMessageCount).forEach((function(e){var t=Object(O.a)(e,2),r=t[0],c=t[1];r===a&&"number"===typeof c&&(n=c)})),Object(E.a)({},e,{newMessageCount:Object(E.a)({},e.newMessageCount,Object(y.a)({},a,n+1))}));case"SET_IMAGE_MODAL":return Object(E.a)({},e,{imageModalOpen:t.payload.imageModalOpen,imageEncodeString:t.payload.imageEncodeString});default:return e}},v=function(e){return Object(m.c)({router:Object(i.b)(e),loginReducer:b,signupReducer:S,chatRoomReducer:N})},h=a(9),w=a.n(h),C=a(11),T=a(12),I="https://express-chat-room-back-end.herokuapp.com",j=a(25),x=a.n(j);x.a.defaults.baseURL=I,x.a.defaults.headers.post.Accept="application/json",x.a.defaults.headers.post["Content-Type"]="application/json",x.a.defaults.withCredentials=!0,x.a.defaults.xsrfCookieName="XSRF-TOKEN",x.a.defaults.xsrfHeaderName="X-XSRF-TOKEN";var k=function(e,t){return x.a.post(e,t)},P=(x.a,a(39),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n=new Date,r={value:t,expiry:n.getTime()+1e3*a*60*60*24};localStorage.setItem(e,JSON.stringify(r))}),A=function(e){localStorage.removeItem(e)},U=function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value},R=a(79),M=a.n(R),L=function(){return U("userName")},G=function(){var e=L();return M()(I,{query:"userName=".concat(e)})},B=function(e){var t=L();e.disconnect(I,{query:"userName=".concat(t)})},F=function(e,t,a,n,r,c){e.emit("sendMessage",{sourceUser:a,targetUser:n,messageType:t,message:r,timestamp:c})},D=function(e,t,a){L()!==t&&e({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"append",userName:"Public"===a?a:t}})},W=w.a.mark(H),z=w.a.mark(K);function H(e){var t,a,n,r,c,o,l;return w.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.account,n=t.password,console.log(a,n),s.next=4,k("login",{email:a,password:n});case 4:if("fail"!==(r=s.sent).data.status){s.next=11;break}return console.log("Fail:",r),s.next=9,Object(C.a)({type:"LOGIN_FAIL",payload:{message:r.data.message}});case 9:s.next=22;break;case 11:if("success"!==r.data.status){s.next=22;break}return console.log("success:",r),c=r.data,o=c.token,l=c.userName,s.next=16,P("token",o,1);case 16:return s.next=18,P("userName",l,1);case 18:return s.next=20,Object(C.a)({type:"LOGIN_SUCCESS"});case 20:return s.next=22,Object(C.a)(Object(T.d)("/"));case 22:case"end":return s.stop()}}),W)}function K(e){var t;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("logout action",e),t=e.payload,a.next=4,A("userName");case 4:return a.next=6,A("token");case 6:return a.next=8,B(t);case 8:return a.next=10,Object(C.a)({type:"DISCONNECT_WEB_SOCKET"});case 10:return a.next=12,Object(C.a)(Object(T.d)("/login"));case 12:case"end":return a.stop()}}),z)}var q=w.a.mark(X);function X(e){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,Object(C.a)({type:"CONNECT_WEB_SOCKET_SUCCESS",payload:t});case 6:e.next=10;break;case 8:return e.next=10,Object(C.a)({type:"CONNECT_WEB_SOCKET_FAIL"});case 10:case"end":return e.stop()}}),q)}var Q=w.a.mark(J);function J(e){var t,a,n,r,c,o,l,s;return w.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,a=t.account,n=t.password,r=t.userName,i.next=3,k("signup",{email:a,password:n,userName:r});case 3:if(c=i.sent,o=c.data,l=o.status,s=o.message,console.log("result",c),"error"!==l){i.next=12;break}return console.log("Fail:",c),i.next=10,Object(C.a)({type:"SIGNUP_FAIL",payload:{message:s}});case 10:i.next=16;break;case 12:if("success"!==l){i.next=16;break}return console.log("Signup success"),i.next=16,Object(C.a)({type:"SIGNUP_SUCCESS"});case 16:case"end":return i.stop()}}),Q)}var Y=w.a.mark($);function $(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.b)("LOGIN_REQUEST",H);case 2:return e.next=4,Object(C.b)("SIGNUP_REQUEST",J);case 4:return e.next=6,Object(C.b)("LOGOUT",K);case 6:return e.next=8,Object(C.b)("CONNECT_WEB_SOCKET",X);case 8:case"end":return e.stop()}}),Y)}var V=Object(u.a)(),Z=Object(p.a)();a(134);var ee=a(13),te=a.n(ee),ae=a(14),ne=a.n(ae),re=a(7),ce=a.n(re),oe=a(4),le=a.n(oe),se=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.loginReducer})),c=t.account,o=t.password,s=t.status,i=t.message,u=U("token"),m=function(t){var a=t.currentTarget,n=a.id,r=a.value;switch(n){case"account":e({type:"SET_LOGIN_ACCOUNT",payload:r});break;case"password":e({type:"SET_LOGIN_PASSWORD",payload:r})}};return Object(n.useEffect)((function(){u&&e(Object(T.d)("/"))}),[u]),r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(te.a,{id:"signLoginCard"},r.a.createElement(ee.CardPrimaryContent,{className:"tittle"},r.a.createElement(le.a,{role:"button",icon:"person"}),r.a.createElement("a",null,"Login")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ee.CardMedia,{id:"login_logo",square:!0,imageUrl:a(138)}),r.a.createElement(ee.CardActions,null,r.a.createElement(ee.CardActionButtons,{className:"signup_login_info"},r.a.createElement(ce.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_ACCOUNT",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"account",type:"email",value:c,onChange:m})),r.a.createElement(ce.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_LOGIN_PASSWORD",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"password",type:"password",value:o,onChange:m})),r.a.createElement("div",null,r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"login"}),onClick:function(){e({type:"LOGIN_REQUEST",payload:{account:c,password:o}})}},"Login"),r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"account_box"}),onClick:function(){e(Object(T.d)("signup"))}},"Signup")))),"error"===s?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,i)):[]))},ie=a(19),ue=a.n(ie),me=function(e){return r.a.createElement("div",{className:"message-box-userInfo"},r.a.createElement(le.a,{role:"button",icon:"account_circle",className:"account_icon"}),r.a.createElement("span",null,e.sourceUser,"(",e.timestamp,")"))},de=function(e){var t=Object(l.e)((function(e){return e.chatRoomReducer})).styleMessageBox,a=Object(l.d)(),n=U("userName"),c=function(){a({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!0,imageEncodeString:e.message}})};return r.a.createElement("div",{className:t?n===e.sourceUser?"style-message-text-mine":"style-message-text-other":"message-text"},function(){switch(e.messageType){case"string":return e.message;case"image":return r.a.createElement("img",{src:e.message,className:"message-image",onClick:c})}}())},pe=r.a.memo((function(e){var t=U("userName");return r.a.createElement("div",{className:t===e.sourceUser?"message-box-mine":"message-box-other"},r.a.createElement(me,e),r.a.createElement(de,e))}),(function(e,t){return e.sourceUser===t.sourceUser&&e.timestamp===t.timestamp})),Ee=function(){var e=U("userName"),t=Object(l.e)((function(e){return e.chatRoomReducer})),a=t.messageBox,c=t.styleMessageBox,o=t.chatPeople,s=Object(n.useRef)(null),i=Object(n.useRef)(null),u="style-messagePanel-background",m="non-style-messagePanel-background";return Object(n.useEffect)((function(){var e;a&&s.current&&(s.current.offsetHeight<s.current.scrollHeight&&s.current.scrollTop+s.current.offsetHeight+200>s.current.scrollHeight&&s.current.scrollTo({behavior:"smooth",top:(null===(e=s.current)||void 0===e?void 0:e.scrollHeight)-s.current.offsetHeight}))}),[a]),r.a.createElement("div",{className:c?u:m},r.a.createElement("div",{id:"messagePanel",ref:s},a.filter((function(t){return"Public"===o&&"Public"===t.targetUser?t:o===t.targetUser&&e===t.sourceUser||o===t.sourceUser&&e===t.targetUser?t:void 0})).map((function(e){return r.a.createElement(pe,Object.assign({},e,{key:e.sourceUser+e.timestamp}))})),r.a.createElement("div",{className:"anchor",ref:i})))},ge=a(38),be=a(80),fe=function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){"string"===typeof n.result&&t(n.result)},n.onerror=function(){a(n.error)},n.readAsDataURL(e)}))},Se=function(){var e=Object(ge.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.next=3,Object(be.a)(t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(n.useRef)(null),s=Object(l.e)((function(e){return e.chatRoomReducer})),i=s.webSocket,u=s.chatPeople,m=U("userName")||"",d=function(){var e=new Date;return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+":"+(new Date).getUTCMilliseconds()},p=function(){var e=d();F(i,"string",m,u,a,e),c("")},E=function(e){"Enter"===e.key&&p()};Object(n.useEffect)((function(){return document.addEventListener("keypress",E),function(){document.removeEventListener("keypress",E)}}),[a]);var g=function(){var e=Object(ge.a)(w.a.mark((function e(){var t,a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(null===(t=o.current)||void 0===t?void 0:t.files)||void 0===(null===(a=o.current)||void 0===a?void 0:a.files)){e.next=12;break}return n=o.current.files[0],e.prev=2,e.next=5,Se(n);case 5:r=e.sent,fe(r).then((function(e){var t=d();F(i,"image",m,u,e,t)})).catch((function(e){return console.log("error",e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"messageSender"},r.a.createElement(ce.a,{label:"\u4f60\u60f3\u8aaa\u4ec0\u9ebc",id:"msgTextEdit",onTrailingIconSelect:function(){var e;null===(e=o.current)||void 0===e||e.click()},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"image"})},r.a.createElement(re.Input,{id:"msgTextEditInput",value:a,onChange:function(e){var t=e.currentTarget.value;c(t)}})),r.a.createElement("input",{type:"file",style:{display:"none"},ref:o,accept:"image/*",onChange:g}),r.a.createElement(ne.a,{id:"txtSendBtn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"send"}),onClick:p},"Send"))},ye=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.chatRoomReducer})),c=t.webSocket,o=t.isMobile;return Object(n.useEffect)((function(){c?(function(e,t,n){e.on("newPublicMessage",(function(e){D(t,e.sourceUser,e.targetUser),t({type:"SET_MESSAGE_BOX",payload:e}),document.hasFocus()||n||new Notification(e.sourceUser,{body:e.message,icon:a(75)})}))}(c,e,o),function(e,t,n){e.on("newPrivateMessage",(function(e){D(t,e.sourceUser,e.targetUser),t({type:"SET_MESSAGE_BOX",payload:e}),document.hasFocus()||n||new Notification(e.sourceUser,{body:e.message,icon:a(75)})}))}(c,e,o),function(e,t){e.on("userList",(function(e){t({type:"SET_USER_LIST",payload:e})}))}(c,e)):e({type:"CONNECT_WEB_SOCKET"})}),[c]),r.a.createElement("main",{id:"mainGrid"},r.a.createElement(Ee,null),r.a.createElement(Oe,null))},_e=a(50),Ne=a.n(_e),ve=a(16),he=a.n(ve),we=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(l.d)();return r.a.createElement(he.a,{singleSelection:!0,selectedIndex:a,handleSelect:function(e){c(e),o({type:"SET_MESSAGE_BOX_STYLE",payload:0===e})}},r.a.createElement(ve.ListItem,null,r.a.createElement(ve.ListItemGraphic,{graphic:r.a.createElement(le.a,{icon:"color_lens"})}),r.a.createElement(ve.ListItemText,{primaryText:"Colorful Theme Style"})),r.a.createElement(ve.ListItem,null,r.a.createElement(ve.ListItemGraphic,{graphic:r.a.createElement(le.a,{icon:"format_color_reset"})}),r.a.createElement(ve.ListItemText,{primaryText:"Simple Style"})))},Ce=r.a.memo((function(e){var t=e.newMessageCount;return r.a.createElement("div",{className:"message-alarm"},t)}),(function(e,t){return e.newMessageCount===t.newMessageCount})),Te=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),a=t[0],c=t[1],o=U("userName"),s=Object(l.e)((function(e){return e.chatRoomReducer})),i=s.userList,u=s.newMessageCount,m=Object(l.d)(),d=Object.values(i).filter((function(e){return"online"===e.status&&e.userName!==o}));d.splice(0,0,{userName:"Public",status:"online"});var p=Object(n.useCallback)((function(e){c(e),m({type:"SET_CHAT_PEOPLE",payload:d[e].userName}),m({type:"SET_NEW_MESSAGE_ALARM",payload:{type:"reset",userName:d[e].userName}})}),[d]);return Object(n.useEffect)((function(){p(0)}),[]),r.a.createElement(he.a,{singleSelection:!0,selectedIndex:a,handleSelect:p},d.map((function(e){return r.a.createElement(ve.ListItem,{key:e.userName},r.a.createElement(ve.ListItemGraphic,{graphic:r.a.createElement(le.a,{icon:"Public"===e.userName?"people":"person"})}),r.a.createElement(ve.ListItemText,{primaryText:e.userName}),u[e.userName]>0?r.a.createElement(Ce,{newMessageCount:u[e.userName]?u[e.userName]:0}):[])})))},Ie=function(){var e=U("userName"),t=Object(l.d)(),a=Object(l.e)((function(e){return e.chatRoomReducer})).drawerOpen;return r.a.createElement(Ne.a,{modal:!0,open:a,onClose:function(){t({type:"SET_DRAWER_OPEN",payload:!1})}},r.a.createElement(_e.DrawerContent,null,r.a.createElement("p",{id:"drawer-greeting"},"Welcome, ",e),r.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),r.a.createElement("p",{className:"drawer-title"},"Style"),r.a.createElement(we,null),r.a.createElement("hr",{style:{borderColor:"#2E86C1",width:"90%"}}),r.a.createElement("p",{className:"drawer-title"},"Online People"),r.a.createElement(Te,null)))},je=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.chatRoomReducer})),a=t.drawerOpen,c=t.webSocket,o=t.chatPeople,s=t.userList,i=Object(n.useCallback)((function(){return Object.values(s).filter((function(e){return"online"===e.status})).length}),[s]);return r.a.createElement(ue.a,null,r.a.createElement(ie.TopAppBarRow,null,r.a.createElement(ie.TopAppBarSection,{align:"start"},r.a.createElement(ie.TopAppBarIcon,{navIcon:!0,tabIndex:0},r.a.createElement(le.a,{hasRipple:!0,icon:"menu",onClick:function(){e({type:"SET_DRAWER_OPEN",payload:!a})}})),r.a.createElement(ie.TopAppBarTitle,{tabIndex:1},"Chat Room",r.a.createElement(le.a,{hasRipple:!0,icon:"chat"}))),r.a.createElement(ie.TopAppBarSection,null,r.a.createElement("div",{id:"chat-people-block"},r.a.createElement("p",{id:"chat-people"}," Chat: ",o," "),r.a.createElement("p",{id:"online-people"}," ( Online People: ",i()," )"))),r.a.createElement(ie.TopAppBarSection,{align:"end",role:"toolbar"},r.a.createElement(ie.TopAppBarIcon,{actionItem:!0,tabIndex:0},r.a.createElement(le.a,{"aria-label":"Edit",hasRipple:!0,icon:"person","data-tooltip-id":"tooltip-id",onClick:function(){e(Object(T.d)("/edit"))}})),r.a.createElement(ie.TopAppBarIcon,{actionItem:!0,tabIndex:1},r.a.createElement(le.a,{"aria-label":"Logout",hasRipple:!0,icon:"exit_to_app",onClick:function(){e({type:"LOGOUT",payload:c})}})))))},xe=function(){var e=Object(l.e)((function(e){return e.chatRoomReducer})),t=e.imageModalOpen,a=e.imageEncodeString,c=Object(l.d)(),o=Object(n.useCallback)((function(){c({type:"SET_IMAGE_MODAL",payload:{imageModalOpen:!1,imageEncodeString:""}})}),[]);return r.a.createElement("div",{id:"myModal",className:"modal",style:{display:t?"block":"none"}},r.a.createElement("span",{className:"close",style:{color:"white"},onClick:o},"\xd7"),r.a.createElement("img",{className:"modal-content",alt:"messageImage",src:a}))},ke=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.chatRoomReducer})).isMobile,a=U("token");return Object(n.useEffect)((function(){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&e({type:"SET_IS_MOBILE",payload:!0}),t||window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission((function(e){console.log("status",e)}))}),[]),Object(n.useEffect)((function(){a||e(Object(T.d)("/login"))}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"drawer-container"},r.a.createElement(je,null),r.a.createElement(ie.TopAppBarFixedAdjust,null,r.a.createElement(Ie,null),r.a.createElement(ye,null)),r.a.createElement(xe,null))):[])},Pe=a(32),Ae=a.n(Pe),Ue=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.signupReducer})).status;return r.a.createElement(Ae.a,{id:"signupDialog",open:"success"===t},r.a.createElement(Pe.DialogTitle,null,"Success"),r.a.createElement(Pe.DialogContent,null,r.a.createElement("div",null,"Signup successfully")),r.a.createElement(Pe.DialogFooter,null,r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"account_box"}),onClick:function(){e(Object(T.d)("login"))}},"Login")))},Re=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.signupReducer})),a=t.account,n=t.password,c=t.confirmPassword,o=t.userName,s=t.status,i=t.message,u=function(t){var a=t.currentTarget,n=a.id,r=a.value;switch(n){case"account":e({type:"SET_SIGNUP_ACCOUNT",payload:r});break;case"password":e({type:"SET_SIGNUP_PASSWORD",payload:r});break;case"confirmPassword":e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:r});break;case"userName":e({type:"SET_SIGNUP_USERNAME",payload:r})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(te.a,{id:"signLoginCard"},r.a.createElement(ee.CardPrimaryContent,{className:"tittle"},r.a.createElement(le.a,{role:"button",icon:"person"}),r.a.createElement("a",null,"Signup+")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ee.CardActions,null,r.a.createElement(ee.CardActionButtons,{className:"signup_login_info"},r.a.createElement(ce.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_ACCOUNT",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"account",type:"account",value:a,onChange:u})),r.a.createElement(ce.a,{label:"Nick Name",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_USERNAME",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"userName",type:"string",value:o,onChange:u})),r.a.createElement(ce.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_PASSWORD",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"password",type:"password",value:n,onChange:u})),r.a.createElement(ce.a,{label:"Confirm Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"confirmPassword",type:"password",value:c,onChange:u})),r.a.createElement("div",{className:"signup_btn_block"},r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"person_add"}),onClick:function(){console.log("signup",a,n,c,o),a&&n&&c&&o?c===n?a.indexOf("@")<=0?e({type:"SET_SIGNUP_MESSAGE",payload:"Invalid email!"}):e({type:"SIGNUP_REQUEST",payload:{account:a,password:n,userName:o}}):e({type:"SET_SIGNUP_MESSAGE",payload:"Passwords are not same!"}):e({type:"SET_SIGNUP_MESSAGE",payload:"Please fill in all information"})}},"Signup"),r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){e(Object(T.d)("login"))}},"login")))),"error"===s||""!==i?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,i)):[])),r.a.createElement(Ue,null))},Me=function(){var e=Object(l.d)(),t=Object(n.useState)(""),a=Object(O.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),o=Object(O.a)(c,2),s=o[0],i=(o[1],Object(l.e)((function(e){return e.signupReducer}))),u=i.account,m=i.confirmPassword,d=i.userName,p=i.status,E=i.message,g=function(e){var t=e.currentTarget;t.id,t.value};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"signLoginContainer"},r.a.createElement(te.a,{id:"signLoginCard"},r.a.createElement(ee.CardPrimaryContent,{className:"tittle"},r.a.createElement(le.a,{role:"button",icon:"person"}),r.a.createElement("span",null,"Information")),r.a.createElement("hr",{className:"separate_line"}),r.a.createElement(ee.CardActions,null,r.a.createElement(ee.CardActionButtons,{className:"signup_login_info"},r.a.createElement(ce.a,{label:"Email",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_ACCOUNT",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"account",type:"account",value:u,onChange:g})),r.a.createElement(ce.a,{label:"Nick Name",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_USERNAME",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"userName",type:"string",value:d,onChange:g})),r.a.createElement(ce.a,{label:"Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_PASSWORD",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"password",type:"password",value:s,onChange:g})),r.a.createElement(ce.a,{label:"Confirm Password",className:"textField",onTrailingIconSelect:function(){e({type:"SET_SIGNUP_CONFIRM_PASSWORD",payload:""})},trailingIcon:r.a.createElement(le.a,{role:"button",icon:"delete"})},r.a.createElement(re.Input,{id:"confirmPassword",type:"password",value:m,onChange:g})),r.a.createElement("div",{className:"signup_btn_block"},r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,disabled:!0,icon:r.a.createElement(le.a,{role:"button",icon:"person_add"}),onClick:function(){}},"Save"),r.a.createElement(ne.a,{className:"signup_login_btn",outlined:!0,raised:!0,icon:r.a.createElement(le.a,{role:"button",icon:"keyboard_backspace"}),onClick:function(){e(Object(T.d)("login"))}},"Back")))),"error"===p||""!==E?r.a.createElement("div",{className:"warnMsg"},r.a.createElement("p",null,E)):[])),r.a.createElement(Ue,null))},Le=function(e){var t=Object(m.e)(v(V),e,Object(m.d)(Object(m.a)(Object(d.a)(V),Z)));return Z.run($),t}({}),Ge=function(){return r.a.createElement(l.a,{store:Le},r.a.createElement(i.a,{history:V},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(ke,null)),r.a.createElement(s.a,{exact:!0,path:"/login"},r.a.createElement(se,null)),r.a.createElement(s.a,{exact:!0,path:"/signup"},r.a.createElement(Re,null)),r.a.createElement(s.a,{exact:!0,path:"/edit"},r.a.createElement(Me,null)),r.a.createElement(s.a,{exact:!0,path:"*"},r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry, No this page"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){e.exports=a.p+"static/media/message.232a7059.png"},82:function(e,t,a){e.exports=a(139)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.abbf9563.chunk.js.map