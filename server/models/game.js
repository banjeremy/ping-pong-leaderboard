'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  name: String,
  players: [{ type : ObjectId, ref: 'Player' }],
  winner: ObjectId,
  loser: ObjectId,
  complete: Boolean
});

var Game = mongoose.model('Game', schema);

module.exports = Game;
