//Server and DB setup 
var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var io = require('socket.io')(http);
   
//configure mongo variable for Heroku and local 
var DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/TripPlanner';
//connect to database
mongoose.connect(DB, function(err){
  if (err) {
    throw err;
  } else {
    console.log("Listening on mongo");
  }
}); 

//middleware
require('./config/middleware.js')(app,express);

//router setup for DB and auth0
require('./routing.js')(app);

//socket.io events
io.on('connection', function(socket) {
  console.log('a user connected');  
  socket.on('chat sent', function(chatObj) {
    io.emit('new chat', chatObj);
  })
})

//configure server variable for Heroku and local
var PORT = process.env.PORT || 3000;

//server listen on port
http.listen(PORT);
console.log('Listening on port: ' + PORT);


