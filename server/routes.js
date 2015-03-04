'use strict';

var games = require('./controllers/games');
var players = require('./controllers/players');

module.exports = function(app, express){
  app.get('/api/games/', games.index);
  app.post('/api/games/', games.create);
};
