//main setup for routing mongoose to server
var handler = require('./controller');

module.exports = function(app){
  
  //setup routing 
  app.get('/summary',function(req, resp){
    handler.getTrips(req,resp);
  });
  
  //post requests
  app.post('/summary',function(req, resp){
    handler.createTrip(req,resp);
    resp.sendStatus(200);
  });
  
  
};

