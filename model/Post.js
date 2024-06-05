const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { sequelize } = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
  },
  {
    hooks: {},
    sequelize,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
