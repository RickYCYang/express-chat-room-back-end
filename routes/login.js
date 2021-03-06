var express = require('express');
var router = express.Router();

/* Config */
var config = require('../config.js');
var secret = config.secret;

var firebaseAdmin = require('../connections/firebase_admin_connect');
var firebase = require("../connections/firebase_connect");
var firebaseAuth = firebase.auth();
var jwt = require('jsonwebtoken');


router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email, password);
    firebaseAuth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log("Login Success");
        /* Session */
        req.session.uid = user.user.uid;
        /* Create JWT */
        let token = jwt.sign(user, secret, {expiresIn: 60*60*24});
        /* Set Cookie */
        res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }); //Expire after 2 hours
        /* Set User Name */
        firebaseAdmin.ref(`user/${user.user.uid}/nickname`).once("value", (snapshot) => {
            const userName = snapshot.val();
            res.cookie('userName', userName, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false }); //Expire after 2 hours
            /* Response */
            res.send({
                status: "success",
                uid: user.user.uid,
                userName: userName,
                token: token
            });
        });
    }).catch((error) => {
        console.log("Login Fail");
        const result = {
            code: error.code,
            status: "fail",
            message: error.message
        }
        console.log('result: ', result);
        res.send(result);
    });
});

module.exports = router;