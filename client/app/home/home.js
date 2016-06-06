angular.module('hikeplanner.home', [])

.controller('HomeController', function($scope, $location, auth, $state, Chat) {
  
  // auth related
  $scope.auth = auth;
  
  $scope.logout = function() {
    auth.signout();
    $state.go('signin');
  }
  
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
    Chat.socket.emit('chat sent', {
      user: auth.profile.name,
      message: $scope.chat.message
    });
    $scope.chat.message = '';
  }
  
  // Chat.socket.emit('authenticated', auth.profile.name);
  
  Chat.socket.on('new chat', function(chatObj) {
    $scope.chat.allMessages.push(chatObj);
  })
  
})

.factory('Chat', function() {
  
  // connecting to socket io 
  var socket = io();
  
  return {
    socket: socket
  };
})