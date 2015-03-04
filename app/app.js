'use strict';

// Declare app level module which depends on views, and components
angular.module('pingPong', [
  'ngRoute',
  'firebase'
]).
config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/games', {
      templateUrl: 'game/game.html',
      controller: 'GameCtrl'
    })
    .when('/players', {
      templateUrl: 'player/player.html',
      controller: 'PlayerCtrl'
    })
    .otherwise({redirectTo: '/games'});
}]);
