//use express and mongoose to setup connections
//call main dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//call dependencies from db, routing 
   
//setup up listener on mongo
mongoose.connect('mongodb://localhost/TripPlanner', function(err, db){
  if (err) {
    throw err;
  }else {
    console.log("Listening on mongo");
  }
});

//router setup for db

// require(__dirname+'/db/routing');



//middleware

// require('./middleware');


//configure server
var PORT = process.env.PORT || 3000;

//setup listening on default port 
app.listen(PORT);
console.log("Listening on port: " + PORT);


