//main setup for routing mongoose to server
var handler = require('./controller');

module.exports = function(app){
  
    console.log('This is the routing module punk!');
  //setup routing 
  // controller.createTrip();
  //get requests
  
  
  //post requests
    //end points: /summary
  app.post('/summary',function(req, resp){
    handler.createTrip(req,resp);
    resp.sendStatus(200);
  });
  
  
};

