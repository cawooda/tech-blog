const RegisteredUser = require("./RegisteredUser");
const Post = require("./Post");

RegisteredUser.hasMany(Post, {
  foreignKey: "id",
});

Post.belongsTo(RegisteredUser, {
  foreignKey: "id",
});

module.exports = { Post, RegisteredUser };
