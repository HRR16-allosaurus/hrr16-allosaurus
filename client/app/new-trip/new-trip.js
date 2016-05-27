angular.module('hikeplanner.new-trip', ['ngAnimate'])

.controller('newTripController', function($scope, $location, $http) {

  $scope.tripData = {
    name: '',
    where: '',
    begin: '',
    end: '',
    supplies: []
  };
  
  $scope.supply = {
    value: ''
  };
  
  $scope.addSupplies = function() {
    $scope.tripData.supplies.push($scope.supply.value);
    $scope.supply.value = '';
  };
  
  $scope.removeSupplies = function(item) {
    var supplies = $scope.tripData.supplies;
    supplies.splice(supplies.indexOf(item)[0], 1);
  }
  

  $scope.post = function() {
    console.log('posted');
    // return $http({
    //   method: 'POST',
    //   url: '/summary',
    //   data: $scope.tripData
    // })
    // .then(function (resp) {
    //   return resp.data.token;
    // });
    
    $location.path('/itinerary');
  };
  
  var render = function() {
    
  };

});