angular.module('hikeplanner.home', [])

.controller('HomeController', function($scope, $location, auth, $state, Chat, Users) {
  
  // auth related
  $scope.auth = auth;
  
  $scope.logout = function() {
    auth.signout();
    $state.go('signin');
  };
  
  // chat related
  $scope.chat = {
    value: false,
    message: '',
    allEvents: [],
    allMessages: []
  };
  
  $scope.toggleChat = function() {
    $scope.chat.value = !$scope.chat.value;
  };
  
  $scope.sendMessage = function() {
    var chatObj = {
      user: auth.profile.name,
      message: $scope.chat.message
    };
    Chat.socket.emit('chat sent', chatObj);
    $scope.chat.message = '';
    $scope.chat.allMessages.push(chatObj);
  };
  
  // Chat.socket.emit('authenticated', auth.profile.name);
  
  Chat.socket.on('new chat', function(chatObj) {
    $scope.chat.allMessages.push(chatObj);
  });
  
  // user related
  Users.getUsers(function(users) {
    Users.users = users;
    Users.users.forEach(function(user) {
      Users.usersHash[user.user_id] = user.name;
      // console.log($scope.users);
    });
  });

})

.factory('Chat', function() {
  
  // connecting to socket io 
  var socket = io();
  
  return {
    socket: socket
  };
})

.factory('Users', function($http) {
  
  var users = [];
  var usersHash = {};
  
  var getUsers = function(callback) {
    $http({
      method: 'GET',
      url: '/users' // endpoint for user data
    })
    .then(function (resp) {
      // console.log(JSON.parse(resp.data));
      // console.log(resp);
      callback(JSON.parse(resp.data));
    });
  };
  
  return {
    users: users,
    usersHash: usersHash,
    getUsers: getUsers
  };
});