//Helper function for database access
var trip = require('./model.js');

//creates a trip and saves to database
exports.createTrip = function(req, res){
  new trip({
    user_id: req.body.user_id,
    invite_ids: req.body.invite_ids,
    name: req.body.name,
    where: req.body.where,
    begin: req.body.begin,
    end: req.body.end,
    supplies: req.body.supplies
  }).save();
};

//gets all trips
exports.getTrips = function(req, res){
  trip.find({}, function(err, trips){
    if(err){
      console.log(err);
    } else {
      res.json(trips);
    }
  });
};

//gets all trips for a given user
exports.getUserTrips = function(req, res){
  trip.find({"user_id" : req.params[0]}, function(err, trips){
    res.json(trips);
  });
};

//gets all trips user was invited to
exports.getInviteTrips = function(req, res){
  trip.find({'invite_ids':req.body.invite_ids}, function(err, trips){
    res.json(trips);
  });
};


