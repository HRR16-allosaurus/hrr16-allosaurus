angular.module('hikeplanner', [
  'ui.router',
  'ngAnimate',
  'hikeplanner.new-trip',
  'hikeplanner.existing',
  'ngCookies', 'auth0', 'ui.router', 'angular-jwt', 'angular-storage', 'authController'

  ])

.config(function($stateProvider, $urlRouterProvider
  ,$httpProvider, $locationProvider, authProvider, jwtInterceptorProvider
  ) {

  // routing for all the different states
    // add signin, signup, logout?

    $stateProvider
    // new-trip
    .state('new-trip', {
      url: '/new-trip',
      templateUrl: 'app/new-trip/new-trip.html',
      controller: 'newTripController',
      data: {
      requiresLogin: true
    }
    })
    // children of new-trip
    .state('new-trip.what', {
      url: '/what',
      templateUrl: 'app/new-trip/new-trip-what.html',
      data: {
      requiresLogin: true
    }
    })
    .state('new-trip.where', {
      url: '/where',
      templateUrl: 'app/new-trip/new-trip-where.html',
      data: {
      requiresLogin: true
    }
    })
    .state('new-trip.when', {
      url: '/when',
      templateUrl: 'app/new-trip/new-trip-when.html',
      data: {
      requiresLogin: true
    }
    })
    .state('new-trip.supplies', {
      url: '/supplies',
      templateUrl: 'app/new-trip/new-trip-supplies.html',
      data: {
      requiresLogin: true
    }
    })
    .state('new-trip.summary', {
      url: '/summary',
      templateUrl: 'app/new-trip/new-trip-summary.html',
      data: {
      requiresLogin: true
    }
    })
    
    // existing trips
    .state('itinerary', {
      url: '/itinerary',
      templateUrl: 'app/existing/itinerary.html',
      data: {
      requiresLogin: true
    }
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'app/auth/logout.html',
      controller: 'LogoutCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl'
    });
    
    authProvider.init({
      domain: 'allosaurus.auth0.com',
      clientID: 'YGqCODwSssRJssk0b3wDJyoyb3eH6foU',
      loginUrl: '/login',
      loginState: 'login'
    })
    // .state('home', {
    //   url: '/home',
    //   templateUrl: '/home.html'
    // })
    
    $urlRouterProvider.otherwise('/login');
  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example

  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };

  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example
  $httpProvider.interceptors.push('jwtInterceptor');
})
  .run(function($rootScope, auth, store, jwtHelper, $state) {
  $rootScope.$on('$locationChangeStart', function() {
    if (!auth.isAuthenticated) {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
        } else {
          $state.go('login');
        }
      }
    }

  });
});