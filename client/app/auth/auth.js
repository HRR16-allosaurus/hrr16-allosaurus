angular.module('hikeplanner.auth', [])
.controller('AuthController', function($scope, $location, auth) {
  
  $scope.auth = auth;

});