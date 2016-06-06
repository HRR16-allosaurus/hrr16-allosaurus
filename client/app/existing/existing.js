angular.module('hikeplanner.existing', [])

.controller('existingController', function($rootScope, $scope, $location, $http, Users) {

  $scope.allTrips = [];
  $scope.tripNames = [];
  $scope.users = Users.users;
  $scope.usersHash = Users.usersHash;
  
  // get all trips that user created as well as trips user has been invited to
  $http({
      method: 'GET',
      url: '/summary' + '/' + $rootScope.profile.user_id
    })
    .then(function (resp) {
      $scope.tripNames = _.pluck(resp.data, 'name');
      $scope.allTrips = resp.data.slice();
    });
});


