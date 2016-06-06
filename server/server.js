//use express and mongoose to setup connections
//call main dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var io = require('socket.io')(http);
   
//setup up listener on mongo
var DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/TripPlanner';
mongoose.connect(DB, function(err){
  if (err) {
    throw err;
  } else {
    console.log("Listening on mongo");
  }
});

//middleware
require('./config/middleware.js')(app,express);

//router setup for db
require('./routing.js')(app);

//socket.io events
io.on('connection', function(socket) {
  console.log('a user connected');
  
  // socket.on('authenticated', function(user) {
  //   console.log('Logged in: ' + user);
  //   // push notification when user logs in?
  // });
  
  socket.on('chat sent', function(chatObj) {
    io.emit('new chat', chatObj);
  })
})

//configure server
var PORT = process.env.PORT || 3000;

//setup listening on default port 
http.listen(PORT);
console.log('Listening on port: ' + PORT);


