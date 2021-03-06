const { Model, DataTypes } = require('sequelize');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    questions: {
      type: DataTypes.ARRAY,
      allowNull: false,
    }

  }
)

module.exports = Game;