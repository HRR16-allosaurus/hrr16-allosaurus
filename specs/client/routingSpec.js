'use strict';

describe('hikeplanner', function () {

  beforeEach(angular.mock.module('hikeplanner'));

  beforeEach(inject(function ($injector) {

  }));

  it('Should have /signin route, template, and controller', inject(function ($state) {
    expect($state.href('/nonesense')).to.be.defined;
    //expect($state.('/signin').controller).to.equal('AuthController');
    //expect($route.routes['/signin'].templateUrl).to.equal('app/auth/signin.html');
  }));


  // it('Should have /links route, template, and controller', function () {
  //   expect($route.routes['/links']).to.be.defined;
  //   expect($route.routes['/links'].controller).to.equal('LinksController');
  //   expect($route.routes['/links'].templateUrl).to.equal('app/links/links.html');
  // });

  // it('Should have /shorten route, template, and controller', function () {
  //   expect($route.routes['/shorten']).to.be.defined;
  //   expect($route.routes['/shorten'].controller).to.equal('ShortenController');
  //   expect($route.routes['/shorten'].templateUrl).to.equal('app/shorten/shorten.html');
  // });
});
