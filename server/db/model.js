//Mongo schema setup
var mongoose = require('mongoose');

 var TripPlannerSchema = mongoose.Schema({
    user_id: String,
    invite_ids: [String],
    name: String,
    where: String,
    begin: String,
    end: String,
    supplies: [String]
  });

module.exports = mongoose.model('TripPlanner',TripPlannerSchema);