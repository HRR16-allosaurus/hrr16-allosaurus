//main setup for routing mongoose to server
var handler = require('./controller');
//export modules
module.exports = function(app){
  
    console.log('This is the routing module punk!');
  //setup routing 
  // controller.createTrip();
  //get requests
  
  
  //post requests
    // summary
  app.post('/summary',function(request, response){
    handler.createTrip(request,response);
  });
  
  
};

