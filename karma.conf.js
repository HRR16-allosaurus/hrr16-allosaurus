// Karma configuration

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // testing frameworks to use
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser. order matters!
    files: [
      // angular source
      'client/lib/angular/angular.js',
      'client/lib/angular-route/angular-route.js',
      'client/lib/angular-mocks/angular-mocks.js',
      'client/lib/angular-ui-router/release/angular-ui-router.js',
      'client/lib/angular-animate/angular-animate.min.js',
      'client/lib/angular-jwt/dist/angular-jwt.min.js',
      'client/lib/auth0-lock/build/auth0-lock.min.js',
      'client/lib/auth0-angular/build/auth0-angular.min.js',
      'client/lib/a0-angular-storage/dist/angular-storage.min.js',

      // our app code
      'client/app/**/*.js',

      'specs/client/newTripControllerSpec.js',
      'specs/client/routingSpec.js'
    ],

    // test results reporter to use
    reporters: ['nyan','unicorn'],

    // start these browsers. PhantomJS will load up in the background
    browsers: ['PhantomJS'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // if true, Karma exits after running the tests.
    singleRun: true

  });
};
