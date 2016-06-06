var auth0 = require('./authentication');
var request = require('request');

//header information 
var header = {
  uri: 'https://allosaurus.auth0.com/api/v2/users?fields=user_id,name',
  method: 'GET',
  headers: {
    Authorization: auth0.AUTH0_AUTHENTICATION
  } 
}; 

//gets all users that logged in using Auth0
exports.getAllUsers = function(callback){
  request(header, function(err,response, body){
    callback(err,response,body);
  });
};
