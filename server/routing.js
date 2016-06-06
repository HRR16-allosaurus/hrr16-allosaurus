//setup for routing mongoose and auth0

//helper functions 
var handler = require('./db/controller'); 
var authHandler = require('./auth0/apiHandler');

module.exports = function(app){
  
  //gets users from auth0
  app.get('/users', function(req, resp){
    authHandler.getAllUsers(function(err, response, body){
       resp.json(body);
    });
  });
  
  //get user trips
  app.get('/summary/*',function(req, resp){
    handler.getUserTrips(req,resp);
  }); 

  //submit user trip
  app.post('/summary/*',function(req, resp){
    handler.createTrip(req);
    resp.sendStatus(200);
  });
  
  
};

