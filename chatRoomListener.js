var firebaseAdmin = require('./connections/firebase_admin_connect');
var firebase = require("./connections/firebase_connect");
var firebaseAuth = firebase.auth();

const chatRoomListener = async(io) => {
    let userList = {};

        // 當發生連線事件
        io.on('connection', async(socket) => {
            console.log('1. connect');
            let connectUserName = socket.request._query['userName'];
            let connectUserSocketId = socket.id;
            await firebaseAdmin.ref(`user`).once("value", (snapshot) => {
                Object.values(snapshot.val()).forEach(user => {
                    //console.log(user);
                    if(user && !userList[user.nickname]){
                        userList[user.nickname] = {
                            //uid: user.uid,
                            userName: user.nickname,
                            status: 'offline',
                            photo: (user.photo)? user.photo: ''
                        };
                    }
                });
                //console.log('connectUserName', connectUserName);
                if(userList[connectUserName]){
                    userList[connectUserName].status = 'online';
                    userList[connectUserName].socketId = connectUserSocketId;
                    console.log('2. Refresh userList');
                    io.emit("userList", userList);
                }
            });
            
            socket.on('disconnect', () => {
                // 有人離線了，扣人
                let disconnectUserName = socket.request._query['userName'];
                let disconnectUserSocketId = socket.id;
                //console.log('disconnectUserName', disconnectUserName);
                if(userList[connectUserName]){
                    userList[disconnectUserName].status = 'offline';
                    io.emit("userList", userList);
                }
            });

            socket.on("sendMessage", (message) => {
                /// 如果 msg 內容鍵值小於 2 等於是訊息傳送不完全
                // 因此我們直接 return ，終止函式執行。
                //console.log('msg', message.messageType);
                if (Object.keys(message).length < 2 || message.message === '') return;
            
                if(message.targetUser === 'Public'){
                    //console.log(message);
                    io.emit("newMessage", message);
                }else{
                    io.to(userList[message.sourceUser].socketId).emit('newMessage', message);
                    io.to(userList[message.targetUser].socketId).emit('newMessage', message);
                }
            });
        });

   
}

module.exports = chatRoomListener;