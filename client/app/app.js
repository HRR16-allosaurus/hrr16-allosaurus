angular.module('hikeplanner', [
  'ui.router',
  'ngAnimate',
  'hikeplanner.home',
  'hikeplanner.new-trip',
  'hikeplanner.existing',
  'auth0',
  'angular-storage',
  'angular-jwt'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, authProvider, $locationProvider, jwtInterceptorProvider) {
  
  // routing for all the different states
    // add signin, signup, logout?
  
  $stateProvider
  
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/home/signin.html',
      controller: 'AuthController'
    })
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: 'app/home/signup.html',
    //   controller: 'AuthController'
    // })
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      data: {
        requiresLogin: true
      }
    })
    
    // new-trip
    .state('home.new-trip', {
      url: '/new-trip',
      templateUrl: 'app/new-trip/new-trip.html',
      controller: 'newTripController'
    })
    // children of new-trip
    .state('home.new-trip.what', {
      url: '/what',
      templateUrl: 'app/new-trip/new-trip-what.html'
    })
    .state('home.new-trip.where', {
      url: '/where',
      templateUrl: 'app/new-trip/new-trip-where.html'
    })
    .state('home.new-trip.when', {
      url: '/when',
      templateUrl: 'app/new-trip/new-trip-when.html'
    })
    .state('home.new-trip.supplies', {
      url: '/supplies',
      templateUrl: 'app/new-trip/new-trip-supplies.html'
    })
    .state('home.new-trip.summary', {
      url: '/summary',
      templateUrl: 'app/new-trip/new-trip-summary.html'
    })
    
    // existing trips
    .state('home.itinerary', {
      url: '/itinerary',
      templateUrl: 'app/existing/itinerary.html',
      controller: 'existingController'
    });
    
  $urlRouterProvider.otherwise('/signin');
  
  
  // authentication via Auth0
  authProvider.init({
    domain: 'allosaurus.auth0.com',
    clientID: 'YGqCODwSssRJssk0b3wDJyoyb3eH6foU',
    callbackURL: location.href,
    loginState: 'signin'
  });
  
  authProvider.on('loginSuccess', function($location, $state, profilePromise, idToken, store) {
    console.log("Login Success");
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
      console.log(profile);
    });
    $location.path('/home');
    // $state.go('home');
  });

  authProvider.on('loginFailure', function() {
    alert("Error");
    $location.path('/signin')
  });

  authProvider.on('authenticated', function($location) {
    console.log("Authenticated");
  });
  
  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };
  
  $httpProvider.interceptors.push('jwtInterceptor');

})
.run(function(auth) {
  auth.hookEvents();
});








