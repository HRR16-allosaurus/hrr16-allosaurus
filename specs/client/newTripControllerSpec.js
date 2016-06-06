'use strict';

describe('newTripController', function () {
  var $scope, $rootScope, createController, newTripController, $httpBackend, Users, store;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('hikeplanner'));

  beforeEach(inject(function (_Users_, _$rootScope_, _$httpBackend_, _$controller_) {
    // mock out our dependencies
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $scope = $rootScope.$new();
    Users = _Users_;

    var $controller = _$controller_;

    createController = function () {
      return $controller('newTripController', {
        $scope: $scope
      });
    };

  }));

  it('should have a users property on the $scope', function () {
    createController();
    expect($scope.users).to.be.an('array');
  });

  it('should have a usersHash property on the $scope', function () {
    createController();
    expect($scope.usersHash).to.be.an('object');
  });

  it('should have a tripData property on the $scope', function () {
    createController();
    expect($scope.tripData).to.be.an('object');
  });

  it('should have a supply property on the $scope', function () {
    createController();
    expect($scope.supply).to.be.an('object');
  });

  it('should have an addSupplies function on the $scope', function () {
    createController();
    expect($scope.addSupplies).to.be.an('function');

    //Test if a value can be added to the tripData.supplies array
    $scope.supply.value = 'boots';
    $scope.addSupplies();
    expect($scope.tripData.supplies[0]).to.equal('boots');

    //Test if another value can be added to the tripData.supplies array
    $scope.supply.value = 'backpack';
    $scope.addSupplies();
    expect($scope.tripData.supplies).to.deep.equal(['boots', 'backpack']);
  });

  it('should have an removeSupplies function on the $scope', function () {
    createController();
    expect($scope.removeSupplies).to.be.an('function');

    //Setup tripData.supplies array
    $scope.supply.value = 'boots';
    $scope.addSupplies();
    $scope.supply.value = 'backpack';
    $scope.addSupplies();

    //Test removeSupplies
    $scope.removeSupplies('boots');
    expect($scope.tripData.supplies).to.deep.equal(['backpack']);
  });

  it('should have an invites property on the $scope', function () {
    createController();
    expect($scope.invites).to.be.an('array');
  });    

  it('should have a user property on the $scope', function () {
    createController();
    expect($scope.tripData).to.be.an('object');
  });

  it('should have an addInvite function on the $scope', function () {
    createController();
    expect($scope.addInvite).to.be.an('function');

    //Test if a value can be added to the tripData.invite_ids array
    $scope.user.value = 'testemail@test12345.com';
    $scope.addInvite();
    expect($scope.tripData.invite_ids).to.deep.equal(['testemail@test12345.com']);

    //Test if a value can be added to the tripData.invite_ids array
    $scope.user.value = 'testemail@test54321.com';
    $scope.addInvite();
    expect($scope.tripData.invite_ids).to.deep.equal(['testemail@test12345.com', 'testemail@test54321.com']);
  });

  it('should have an removeInvite function on the $scope', function () {
    createController();
    expect($scope.removeInvite).to.be.an('function');

    //Setup tripData.user_id array
    $scope.user.value = 'testemail@test12345.com';
    $scope.addInvite();
    $scope.user.value = 'testemail@test54321.com';
    $scope.addInvite();

    //Test removeInvite
    $scope.removeInvite('testemail@test54321.com');
    expect($scope.tripData.invite_ids).to.deep.equal(['testemail@test12345.com']);
  });

  it('should have a post function on the $scope', function () {
    createController();
    expect($scope.post).to.be.an('function');

    $httpBackend.whenPOST('/summary/' + {}).respond({test:'test'});

    $scope.post();
  });
});
