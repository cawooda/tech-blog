const { sequelize } = require("../config/connection");
const { RegisteredUser, Post } = require("../model");

const registeredUserData = require("./registeredUserData.json");
const postData = require("./postData.json");

const seedDatabase = async () => {
  //call the sequelize sync method witht the force option to recreate the database even if it exists
  await sequelize.sync({ force: true });

  const registeredUsers = await RegisteredUser.bulkCreate(registeredUserData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
