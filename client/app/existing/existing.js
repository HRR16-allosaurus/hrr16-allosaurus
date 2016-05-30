angular.module('hikeplanner.existing', [])

.controller('existingController', function($scope, $location, $http) {

  $scope.allTrips = [];
  $scope.tripNames = [];

  $scope.getAll = function() {
    console.log('retrieved');
    return $http({
      method: 'GET',
      url: '/summary'
    })
    .then(function (resp) {
      console.log(resp.data);
      $scope.allTrips = resp.data;
      $scope.tripNames = _.pluck($scope.allTrips, "name");
    });
    // $scope.allTrips = data;
    // console.log($scope.allTrips);
  };

});


