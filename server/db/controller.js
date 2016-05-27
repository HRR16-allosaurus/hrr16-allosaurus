//controller for db access
//parent of model and connections
var trip = require('./model.js');
//function handlers for db (e.g store, etc.) on trip 

exports.createTrip = function(req, res){
  console.log("I've been called");
  new trip({TripName: req.body.TripName,
    Where: req.body.Where,
    When: req.body.When,
    Gear: req.body.Gear
  }).save();

};

exports.getTrips = function(req, res){
  trip.find({}, function(err, trips){
    if(err){
      console.log(err);
    } else {
      res.json(trips);
    }
  })
};


//export moduleasdf