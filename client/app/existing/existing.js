angular.module('hikeplanner.existing', ['angular-storage'])

.controller('existingController', function($rootScope, $scope, $location, $http, store) {

  $scope.allTrips = [];
  $scope.tripNames = [];
  
  $http({
      method: 'GET',
      url: '/summary' + '/' + store.get('profile').user_id/*$rootScope.profile.user_id*/
    })
    .then(function (resp) {
      $scope.tripNames = _.pluck(resp.data, "name");
      $scope.allTrips = resp.data.slice();
    });
});


