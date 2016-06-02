angular.module('hikeplanner.auth', [])
.controller('AuthController', function($scope, $location, auth, $state) {
  
  $scope.auth = auth;

});