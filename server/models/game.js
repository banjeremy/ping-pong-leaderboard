'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/ping-pong-leaderboard');

var schema = new mongoose.Schema({
  name: String,
  players: [{ type : ObjectId, ref: 'Player' }],
  winner: ObjectId,
  loser: ObjectId
});

var Game = mongoose.model('Game', schema);

module.exports = Game;
