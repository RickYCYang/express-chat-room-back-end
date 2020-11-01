var express = require("express");
var router = express.Router();
var secret = require("../config.js").secret;
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var firebaseAdmin = require("../connections/firebase_admin_connect.js");
var firebase = require("../connections/firebase_connect.js");

// check login
router.get("/", function(req, res){
    var token = req.cookies.token; //req.body.user || req.query.user || req.headers['x-access-token']
    if (token) {
        console.log("you have token");
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
              console.log("err");
              return res.json({success: false, message: 'Failed to authenticate token.'})
            } else {
              req.decoded = decoded
              console.log("token success");
              res.sendfile('./public/html/index.html');
            }
        })
    }else{
        console.log("you have no token");
        res.sendfile('public/html/login.html');
    }
    /*
    if(req.session.uid){
        res.sendfile('public/html/index.html');
    }else{
        res.sendfile('public/html/login.html');
    }
    */
});



module.exports = router;