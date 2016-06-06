//main setup for routing mongoose to server
var handler = require('./db/controller');
var authHandler = require('./auth0/apiHandler');

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
    handler.createTrip(req);
    resp.sendStatus(200);
  });
  
  
};

