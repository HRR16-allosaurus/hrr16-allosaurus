//setup mongodb schema 
//import mongoose
var mongoose = require('mongoose');

//setup schema
 var TripPlannerSchema = mongoose.Schema({
    TripName: String,
    Where: String,
    When: String,
    Gear: []
  });
 
 var TripPlanner = mongoose.model('TripPlanner',TripPlannerSchema);

//module export

module.exports = TripPlanner;