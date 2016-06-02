angular.module('hikeplanner.home', [])
.controller('HomeController', function($scope, $location, auth, $state) {
  
  $scope.auth = auth;
  
  $scope.logout = function() {
    auth.signout();
    $state.go('signin');
  }
  
});