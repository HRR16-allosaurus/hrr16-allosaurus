//use express and mongoose to setup connections
//call main dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
   
//setup up listener on mongo
var DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/TripPlanner';
mongoose.connect(DB, function(err){
  if (err) {
    throw err;
  }else {
    console.log("Listening on mongo");
  }
});

//middleware
require('./config/middleware.js')(app,express);

//router setup for db
require('./routing.js')(app);

//configure server
var PORT = process.env.PORT || 3000;

//setup listening on default port 
app.listen(PORT);
console.log('Listening on port: ' + PORT);


