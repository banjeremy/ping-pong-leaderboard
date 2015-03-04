/* globals _ */

'use strict';

angular.module('pingPong')
.controller('PlayerCtrl', function($scope, Player){

  $scope.players = Player.all(); 
});
