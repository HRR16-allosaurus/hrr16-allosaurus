//controller for db access
//parent of model and connections
var trip = require('./model.js');
//function handlers for db (e.g store, etc.) on trip 

exports.createTrip = function(req, res){
  console.log("I've been called");
  new trip({name: req.body.name,
    where: req.body.where,
    begin: req.body.begin,
    end: req.body.end,
    supplies: req.body.supplies
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


