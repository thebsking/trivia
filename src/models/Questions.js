const { Model, DataTypes } = require('sequelize');

class Questions extends Model {}

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Regular', 'Range', 'Halftime', 'Final'],
    },
    difficulty: {
      type: DataTypes.ENUM,
      allowNull: true,
      values: ['easy', 'medium', 'hard'],
    }

  }
)
