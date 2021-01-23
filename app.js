//Express
var express = require("express") ;
var app = express();
const socketServer = require('http').Server(app);
const io = require('socket.io')(socketServer);

//Static Files
app.use(express.static('public'));

//Session
var session = require("express-session")
app.use(session({ secret: 'mysupersecret', resave: true, saveUninitialized: true }));

//Cookie
var cookieParser = require('cookie-parser');

//Body Parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* Config File */
var config = require('./config');
app.set('secret', config.secret);

/* JWT */
var jwt = require('jsonwebtoken')

/* 允許跨域服務 */
const prodHostName = 'https://express-chat-room-back-end.herokuapp.com';
const devHostName = 'http://localhost:3001';

var cors = require('cors');
app.use(cors({origin: prodHostName, credentials: true}));

app.all('*',function (req, res, next) {
    //res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    //res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);//'http://localhost:3001';
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    if (req.method == 'OPTIONS') {
      console.log('!OPTIONS');
      //console.log(req.headers);
      var headers = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      headers["Access-Control-Allow-Credentials"] = true;
      headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
      //console.log(headers);
      res.writeHead(200, headers);
      res.end();
      // res.send(200);
      // console.log(123);
    }
    else {
      next();
    }
});

/* Route */
var login = require('./routes/login.js');
app.use('/login', login);
var signup = require('./routes/signup.js');
app.use('/signup', signup);
var edit = require('./routes/edit.js');
app.use('/edit', edit);
var router = require('./routes/index.js');
app.use('/', router);

app.use(cookieParser());
/* Middleware to check if the header in user's request contains the authroized token */
app.use(function (req, res, next) {
  console.log('middleware', req.cookies);
  var token = req.cookies.token  //req.cookies.token;//req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, app.get('secret'), function (err, decoded) {
      if (err) {
        return res.json({success: false, message: 'Failed to authenticate token.'})
      } else {
        req.decoded = decoded
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
});

require('./chatRoomListener')(io);

var port = process.env.PORT || 3000;
// 注意，這邊的 server 原本是 app
//app.listen(port);
socketServer.listen(port, () => {
  console.log("Server Started on ", port);
});
