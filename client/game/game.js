/* globals _ */

'use strict';

angular.module('pingPong')
.controller('GameCtrl', function($scope, Game, Player){

  $scope.players = Player.all();
  Game.all()
    .success(function(games){
      $scope.games = games;
    });

  $scope.showGameForm = false;

  $scope.newPlayer = '';
  $scope.newGame = null;

  $scope.toggleGameForm = function(){
    $scope.showGameForm = !$scope.showGameForm;
  };

  $scope.createGame = function(){
    $scope.showGameForm = false;
    Game.add($scope.newGame.player1, $scope.newGame.player2, $scope.newGame.name);
    $scope.newGame = null;
  };

  $scope.selectWinner = function(game, winner){
    game.winner = winner;
    game.loser = _.find(game.players, function(player){
      return player != winner;
    });

    Player.addWin(game.winner);
    Player.addLoss(game.loser);
  };

});
