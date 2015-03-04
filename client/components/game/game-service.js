'use strict';

angular.module('pingPong')
  .factory('Game', function($http, Player){
    return {
      all: function(){
        return $http.get('/api/games');
      },
      add: function(player1, player2, name){
        Player.add(player1);
        Player.add(player2);

        return $http.post('/api/games', {
          name: name || 'New Game',
          players: [
            // player1,
            // player2
          ],
          winner: null,
          loser: null,
          complete: false
        });
      }
    };
  });
