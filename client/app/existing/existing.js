angular.module('hikeplanner.existing', [])

.controller('existingController', function($rootScope, $scope, $location, $http) {

  $scope.allTrips = [];
  $scope.tripNames = [];
  
  $http({
      method: 'GET',
      url: '/summary' + '/' + $rootScope.profile.user_id
    })
    .then(function (resp) {
      $scope.tripNames = _.pluck(resp.data, "name");
      $scope.allTrips = resp.data.slice();
    });
});


