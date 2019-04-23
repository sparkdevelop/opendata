var express = require('express');
const mongoose = require('mongoose');
var app = express();

//DB
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
        .then(() => console.log("connected"))
        .catch( err => console.log(err));
 
app.get('/', function (req, res) {
   res.send('Hello World2');
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
