angular.module('hikeplanner.existing', [])

.controller('existingController', function($scope, $location, $http) {

  $scope.allTrips = [];
  $scope.tripNames = [];
  $scope.search = [];

  // retrieve all existing trips
  $scope.getAll = function() {
    console.log('retrieved');
    return $http({
      method: 'GET',
      url: '/summary'
    })
    .then(function (resp) {
      console.log(resp);
      console.log('resp data', resp.data);
      
      $scope.tripNames = _.pluck(resp.data, "name");
      $scope.allTrips = resp.data.slice();
      console.log($scope.allTrips);
      // console.log($scope.allTrips);
    });
    // $scope.allTrips = data;
    // console.log($scope.allTrips);
  };

});


