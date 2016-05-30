//setup mongodb schema 
//import mongoose
var mongoose = require('mongoose');

//setup schema
 var TripPlannerSchema = mongoose.Schema({
    TripName: String,
    Where: String,
    When: String,
    Gear: [String]
  });

module.exports = mongoose.model('TripPlanner',TripPlannerSchema);