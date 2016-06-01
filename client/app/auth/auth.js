angular.module('hikeplanner.home', [])
.controller('AuthController', function($scope, $location, auth, $state) {
  
  $scope.auth = auth;
  
  // $scope.signin = function() {
  //   console.log('signing in');
  //   $location.path('/home');
  // }
  
  // $scope.signup = function() {
  //   console.log('signing up');
  //   $location.path('/home');
  // }
  
  // auth.signin({}, function() {
  //   $state.go('home');
  // }, function(error) {
  //   console.log('There was an error', error);
  // })
  
  

});