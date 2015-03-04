'use strict';

var Game = require('../models/game');
var Player = require('../models/player');

exports.index = function(req, res){
  Game.find(null, function(err, games){
    res.json(games);
  });
};

exports.create = function(req, res){
  console.log(req);
};
