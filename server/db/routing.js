//main setup for routing mongoose to server
var handler = require('./controller');

module.exports = function(app){
  
  app.get('/summary/*',function(req, resp){
    console.log(req.url);
  });  
  
  //setup routing 
  // app.get('/summary/userTrips',function(req, resp){
  //   handler.getUserTrips(req,resp);
  // });
  // app.get('/summary/inviteTrips',function(req, resp){
  //   handler.getInviteTrips(req,resp);
  // });

  
  
  //post requests
  app.post('/summary/*',function(req, resp){
    console.log(req.url);
    handler.createTrip(req,resp);
    // resp.sendStatus(200);
  });
  
  
};

