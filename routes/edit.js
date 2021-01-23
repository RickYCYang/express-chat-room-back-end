/* Express */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
const path = require('path');

/* Firebase */
var firebase = require('../connections/firebase_connect.js');
var firebaseAuth = firebase.auth();
var firebaseAdmin = require("../connections/firebase_admin_connect.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/users/');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.originalname + path.extname(file.originalname));
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};


router.post('/', function (req, res) {
    let result = {
        status: '',
        message: '',
    };
    /* Step 1. Save user's photo */
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('photo');
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        if(req.file){
            if (req.fileValidationError) {
                result.status = 'error';
                result.message = req.fileValidationError;
                return res.send(result);
            }
            else if (err) {
                result.status = 'error';
                result.message = err
                return res.send(result);
            }
            const newFileNameWithPath = req.file.path.replace(req.file.originalname, req.body.userName);        
            fs.renameSync(req.file.path, newFileNameWithPath);
        }
        /* Step 2. Save user's account info into firebase */
        const {uid, userName, password} = req.body;
        console.log(uid, password, userName);
        result.status = 'success';
        res.send(result);
        var user = firebaseAuth.currentUser;
        console.log('user', user);
    });
});

router.patch('/', function (req, res) {
    let result = {
        status: '',
        message: '',
    };
    /* Step 1. Save user's photo */
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('photo');
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        const {uid, userName} = req.body;
        console.log(uid, userName);
        if(req.file){
            if (req.fileValidationError) {
                result.status = 'error';
                result.message = req.fileValidationError;
                return res.send(result);
            }
            else if (err) {
                result.status = 'error';
                result.message = err
                return res.send(result);
            }
            const newFileNameWithPath = req.file.path.replace(req.file.originalname, req.body.userName);        
            fs.renameSync(req.file.path, newFileNameWithPath);
            firebaseAdmin.ref("/user/" + uid + '/photo').set(newFileNameWithPath.replace('public/', ''));
        }
        /* Step 2. Save user's account info into firebase */
        firebaseAdmin.ref("/user/" + uid + '/nickname').set(userName);
        result.status = 'success';
        res.send(result);
    });
});

router.get('/getUserAccount', async function(req, res){
    const uid = req.query.uid;
    let result = {
        status: '',
        account: '',
        message: '',
    }
    if(!uid){
        result.status = 'error';
        result.message = 'There is no uid';
        res.send(result);
    }
    try{
        await firebaseAdmin.ref(`user`).once("value", (snapshot) => {
            //console.log('use info', snapshot.val()[uid]);
            result.status = 'success';
            result.account = snapshot.val()[uid].email;
        }); 
    }catch(err){
        result.status = 'error';
        result.message = err;
    }finally{
        res.send(result);
    };
});

router.post('/', function (req, res) {
    let result = {
        status: '',
        message: '',
    };
    /* Step 1. Save user's photo */
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('photo');
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        if (req.fileValidationError) {
            result.status = 'error';
            result.message = req.fileValidationError;
            return res.send(result);
        }
        else if (!req.file) {
            result.status = 'error';
            result.message = 'Please select an image to upload'
            return res.send(result);
        }
        else if (err) {
            result.status = 'error';
            result.message = err
            return res.send(result);
        }
        const newFileNameWithPath = req.file.path.replace(req.file.originalname, req.body.userName);        
        fs.renameSync(req.file.path, newFileNameWithPath);

        /* Step 2. Save user's account info into firebase */
        const {email, password, userName} = req.body;
        console.log(email, password, userName);
        firebaseAuth.createUserWithEmailAndPassword(email, password).then((user) => {
            var uid = user.user.uid
            let saveUser = {
                "email": email,
                "password": password,
                "nickname": userName,
                "uid": uid,
                "photo": newFileNameWithPath.replace('public/', '')
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
});

module.exports = router;