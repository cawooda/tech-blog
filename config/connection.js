const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
      }
    );

const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
};

module.exports = { sequelize, sess };
