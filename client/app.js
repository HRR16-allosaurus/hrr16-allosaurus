angular.module('hikeplanner', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('form', {
      url: '/form',
      templateUrl: 'form/form.html',
      controller: 'newTripController'
    })
    .state('form.where', {
      url: '/where',
      templateUrl: 'form/form-where.html'
    })
    .state('form.when', {
      url: '/when',
      templateUrl: 'form/form-when.html'
    })
    .state('form.supplies', {
      url: '/supplies',
      templateUrl: 'form/form-supplies.html'
    })
    .state('form.summary', {
      url: '/summary',
      templateUrl: 'form/form-summary.html'
    });
    
  $urlRouterProvider.otherwise('/form/where')
  // where
  // when
  // how long
  // food
  // gear
  // invite
  // summary

})
.controller('newTripController', function($scope, $location) {

  $scope.tripData = {
    where: '',
    begin: '',
    end: '',
    supplies: []
  };
  
  $scope.supply = {
    value: ''
  };
  $scope.addSupplies = function() {
    $scope.tripData.supplies.push($scope.supply.value);
    $scope.supply.value = '';
  };
  

  $scope.post = function() {
    console.log('posted');
    $location.path('/asdfasdfsdf');
  };
  
  var render = function() {
    
  };

});