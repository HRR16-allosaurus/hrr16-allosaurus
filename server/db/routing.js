//main setup for routing mongoose to server
var handler = require('./controller');
var authHandler = require('../auth0/apiHandler');
var url = require('url');

module.exports = function(app){
  
  //routing for users
  
  app.get('/users', function(req, resp){
    authHandler.getAllUsers(function(err, response, body){
       resp.json(body);
    });
  });
  
  //setup routing 
  app.get('/summary/*',function(req, resp){
    handler.getUserTrips(req,resp);
  }); 

  //post requests
  app.post('/summary/*',function(req, resp){
    handler.createTrip(req,resp);
    resp.sendStatus(200);
  });
  
  
};

