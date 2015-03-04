'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/ping-pong-leaderboard');

var schema = new mongoose.Schema({
  name: String,
  wins: Number,
  loses: Number
});

var Player = mongoose.model('Player', schema);

module.exports = Player;
