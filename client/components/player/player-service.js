'use strict';
/* globals _ */


angular.module('pingPong')
  .factory('Player', function($http){
    var players = [];
    var getPlayerByName = function(name){
      return _.find(players, function(player){
        return player.name == name;
      });
    };

    return {
      all: function(){
        //TODO: get players from API
        return _.sortBy(players, function(player){
          return -player.wins;
        });
      },
      add: function(name){
        var playerExists = _.some(players, { name: name });
        if (!playerExists){
          players.push({
            name: name,
            wins: 0,
            losses: 0
          });
        }
      },
      addWin: function(name){
        var player = getPlayerByName(name);
        if (player){
          player.wins++;
        }
      },
      addLoss: function(name){
        var player = getPlayerByName(name);
        if (player){
          player.losses++;
        }
      }
    };
  });
