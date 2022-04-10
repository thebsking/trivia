const {Game} = require('../models/index');

const gameSeeds = () => Game.bulkCreate ([
  {
    questions: [01,02,03,04],
  },
]);

module.exports = gameSeeds;