angular.module('hikeplanner.existing', [])

.controller('existingController', function($scope, $location, $http) {

  $scope.allTrips = [];
  $scope.tripNames = [];

  $scope.getAll = function() {
    console.log('retrieved');
    // return $http({
    //   method: 'GET',
    //   url: '/summary'
    // })
    // .then(function (resp) {
    //   $scope.allTrips = resp;
    // });
    $scope.allTrips = data;
    $scope.tripNames = _.pluck($scope.allTrips, "name");
    console.log($scope.allTrips);
  };

});


