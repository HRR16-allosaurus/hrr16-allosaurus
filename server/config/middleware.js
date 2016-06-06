var bodyParser = require('body-parser');
var morgan = require('morgan'); //<--Need in package JSON

module.exports = function(app,express){
//basic configuration for express
  app.use(morgan('dev')); // <--- need?
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
};