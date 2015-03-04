'use strict';

var Game = require('../models/game');
var Player = require('../models/player');

exports.index = function(req, res){
  Game.find({}, function(err, games){
    res.json(games);
  });
};

exports.create = function(req, res){
  var game = new Game(req.body);

  game.save(function(err, result){
    res.send(result);
  });
};
