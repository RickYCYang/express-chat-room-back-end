/* Express */
var express = require('express');
var router = express.Router();

/* Firebase */
var firebase = require('../connections/firebase_connect.js');
var firebaseAuth = firebase.auth();
var firebaseAdmin = require("../connections/firebase_admin_connect.js");

router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var userName = req.body.userName;
    let result = {
        status: '',
        message: '',
    }
    console.log(email, password, userName);
    firebaseAuth.createUserWithEmailAndPassword(email, password).then((user) => {
        var uid = user.user.uid
        let saveUser = {
            "email": email,
            "password": password,
            "nickname": userName,
            "uid": uid
        };
        firebaseAdmin.ref("/user/" + uid).set(saveUser);
        console.log("saveUser", saveUser);
        result.status = 'success';
        res.send(result);
    }).catch((error) => {
        error["status"] = "error";
        result.status = 'error';
        result.message = error.message;
        console.log('error', result);
        res.send(result);
    });
});
module.exports = router;