angular.module('hikeplanner.existing', [])

.controller('existingController', function($scope, $location, $http) {

  $scope.allTrips = [];

  $scope.getAll = function() {
    console.log('retrieved');
    // return $http({
    //   method: 'GET',
    //   url: '/summary',
    //   data: $scope.tripData
    // })
    // .then(function (resp) {
    //   $scope.allTrips = resp.
    // });
    $scope.allTrips = data;
    console.log($scope.allTrips);
  };
  

});


// MOCK DATA
var data = [
  {
    name: 'birthday',
    where: 'yosemite',
    begin: '2016-05-27',
    end: '2016-05-31',
    supplies: ['water', 'food', 'other', 'test']
  }
]