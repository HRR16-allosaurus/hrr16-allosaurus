angular.module('hikeplanner.new-trip', ['ngAnimate'])

.factory('Location', function() {
  // default coordinates
  var coor = {
    lat: 37.7749295,
    long: -122.4194155
  };

  var currentLocation = function(callback) {
    function success(position) {
      coor.lat = position.coords.latitude;
      coor.long = position.coords.longitude;
      callback();
    };
    function error() {
      console.log('unable to get location');
      callback();
    };
    if (!navigator.geolocation) {
      console.log('geolocation IS NOT available');
      callback();
    }
    navigator.geolocation.getCurrentPosition(success, error);
  };
  
  return {
    coor: coor,
    currentLocation: currentLocation
  };
})

.factory('Users', function($http) {
  
  var getUsers = function(callback) {
    $http({
      method: 'GET',
      url: '/users' // endpoint for user data
    })
    .then(function (resp) {
      console.log(JSON.parse(resp.data));
      // console.log(resp);
      callback(JSON.parse(resp.data));
    });
  };
  
  return {
    getUsers: getUsers
  };
})

.controller('newTripController', function($scope, $rootScope, $state, $http, Users) {

  $scope.users = [];
  $scope.usersHash = {};
  Users.getUsers(function(users) {
    $scope.users = users;
    $scope.users.forEach(function(user) {
      $scope.usersHash[user.user_id] = user.name;
    })
    console.log($scope.users);
  });
  
  // new trip data
  $scope.tripData = {
    user_id: $rootScope.profile.user_id,
    invite_ids: [],
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
  $scope.invites = [];
  $scope.user = {
    value: {}
  }
  
  $scope.addInvite = function() {
    console.log($scope.user.value);
    $scope.tripData.invite_ids.push($scope.user.value);
    // $scope.invite.push($user);
  };
  
  $scope.removeInvite = function(user_id) {
    // console.log(user);
    var invite_ids = $scope.tripData.invite_ids;
    invite_ids.splice(invite_ids.indexOf(user_id), 1);
  };

  $scope.post = function() {
    console.log('posted');
    return $http({
      method: 'POST',
      url: '/summary/' + $rootScope.profile.user_id,
      data: $scope.tripData
    })
    .then(function (resp) {
      console.log(resp);
      $state.go('home.itinerary');
    });
  };
  

});
