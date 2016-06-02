angular.module('hikeplanner.new-trip', ['ngAnimate'])

.controller('newTripController', function($scope, $rootScope, $http) {

  // new trip data
  $scope.tripData = {
    user_id: $rootScope.profile.user_id,
    invite_ids: [],
    invites: [],
    name: '',
    where: '',
    begin: '',
    end: '',
    supplies: [],
  };
  
  // to handle new supplies added
  $scope.supply = {
    value: ''
  };
  
  $scope.addSupplies = function() {
    $scope.tripData.supplies.push($scope.supply.value);
    $scope.supply.value = '';
  };
  
  $scope.removeSupplies = function(item) {
    console.log(item);
    var supplies = $scope.tripData.supplies;
    supplies.splice(supplies.indexOf(item), 1);
  };
  
  // to handle new invites added
  $scope.email = {
    value: ''
  };
  
  $scope.addInvite = function() {
    $scope.tripData.invites.push($scope.email.value);
    $scope.email.value = '';
  };
  
  $scope.removeInvite = function(item) {
    console.log(item);
    var invites = $scope.tripData.invites;
    invites.splice(invites.indexOf(item), 1);
  };

  $scope.post = function() {
    console.log('posted');
    return $http({
      method: 'POST',
      url: '/summary' + '/' + $rootScope.profile.user_id,
      data: $scope.tripData
    })
    .then(function (resp) {
      console.log(resp);
      $state.go('home.itinerary');
    });
  };
  
});