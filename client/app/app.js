angular.module('hikeplanner', [
  'ui.router',
  'ngAnimate',
  'hikeplanner.auth',
  'hikeplanner.home',
  'hikeplanner.new-trip',
  'hikeplanner.existing',
  'auth0',
  'angular-storage',
  'angular-jwt'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, authProvider, $locationProvider, jwtInterceptorProvider) {
  
  // routing for all the different states
  $stateProvider
  
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
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
    .state('home.new-trip.name', {
      url: '/name',
      templateUrl: 'app/new-trip/new-trip-name.html'
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
    .state('home.new-trip.invite', {
      url: '/invite',
      templateUrl: 'app/new-trip/new-trip-invite.html'
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
  
  // event listeners of login success, failure, and authentication
  authProvider.on('loginSuccess', function($rootScope, $state, profilePromise, idToken, store) {
    console.log("Login Success");
    profilePromise.then(function(profile) {
      // console.log(profile);
      $rootScope.profile = profile;
      store.set('profile', profile);
      store.set('token', idToken);
      $state.go('home');
    });
  });

  authProvider.on('loginFailure', function() {
    alert("Error");
    $state.go('signin');
  });

  authProvider.on('authenticated', function($location) {
    console.log("Authenticated");
  });
  
  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };
  
  $httpProvider.interceptors.push('jwtInterceptor');

})
.run(function($rootScope, auth, store, jwtHelper, $state) {
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    
    // console.log('token', !!token); // check to see if there is a token
    // console.log('token expired????', jwtHelper.isTokenExpired(token)); // check to see if token has expired (based on settings in Auth0)
    // console.log('auth authen????', auth.isAuthenticated); // eg. if authenticated using google and you logout of google, on page refresh, auth.isAuthenticated will return false
    
    if( token ) {
      if( !auth.isAuthenticated ) {
        if( !jwtHelper.isTokenExpired(token) ) {
          auth.authenticate(store.get('profile'), token);
        } else {
          $state.go('signin');
        }
      }
    }
  });
});








