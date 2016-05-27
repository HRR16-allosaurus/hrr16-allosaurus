angular.module('hikeplanner', [
  'ui.router',
  'ngAnimate',
  'hikeplanner.new-trip'
])

.config(function($stateProvider, $urlRouterProvider) {
  
  // routing for all the different states
    // add signin, signup, logout?
  
  $stateProvider
    // new-trip
    .state('new-trip', {
      url: '/new-trip',
      templateUrl: 'app/new-trip/new-trip.html',
      controller: 'newTripController'
    })
    // children of new-trip
    .state('new-trip.what', {
      url: '/what',
      templateUrl: 'app/new-trip/new-trip-what.html'
    })
    .state('new-trip.where', {
      url: '/where',
      templateUrl: 'app/new-trip/new-trip-where.html'
    })
    .state('new-trip.when', {
      url: '/when',
      templateUrl: 'app/new-trip/new-trip-when.html'
    })
    .state('new-trip.supplies', {
      url: '/supplies',
      templateUrl: 'app/new-trip/new-trip-supplies.html'
    })
    .state('new-trip.summary', {
      url: '/summary',
      templateUrl: 'app/new-trip/new-trip-summary.html'
    })
    
    // existing trips
    .state('itinerary', {
      url: '/itinerary',
      templateUrl: 'app/existing/itinerary.html'
    });
    
    
    // .state('home', {
    //   url: '/home',
    //   templateUrl: '/home.html'
    // })
    
  $urlRouterProvider.otherwise('/');

})
