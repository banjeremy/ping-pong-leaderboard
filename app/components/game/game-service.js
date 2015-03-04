'use strict';

angular.module('pingPong')
  .factory('Game', function($http, Player){
    var games = [];

    return {
      getAll: function(){
        //TODO: get players from player svc
        return games;
      },
      add: function(player1, player2, name){
        Player.add(player1);
        Player.add(player2);

        var newGame = {
          name: name || 'Game ' + (games.length + 1),
          players: [
            player1,
            player2
          ],
          winner: null,
          loser: null,
          complete: false
        };

        games.push(newGame);

        return newGame;
      }
    };
  });
