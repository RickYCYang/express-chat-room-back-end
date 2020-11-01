/* Express */
var express = require('express');
var router = express.Router();

/* Firebase */
var firebase = require('../connections/firebase_connect.js');
var firebaseAuth = firebase.auth();
var firebaseAdmin = require("../connections/firebase_admin_connect.js");

router.get('/', function (req, res) {
    res.sendfile('public/html/signup.html');
});

router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var nickname = req.body.nickname;
    
    firebaseAuth.createUserWithEmailAndPassword(email, password).then((user) => {
        var uid = user.user.uid
        let saveUser = {
            "email": email,
            "password": password,
            "nickname": nickname,
            "uid": uid
        };
        firebaseAdmin.ref("/user/" + uid).set(saveUser);
        console.log("saveUser", saveUser);
        user["result"] = "success";
        res.send(user);
    }).catch((error) => {
        error["result"] = "error";
        res.send(error);
    });
})
module.exports = router;