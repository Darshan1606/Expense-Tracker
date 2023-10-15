const UserModel = require("../models/userModel");

const UserService = {
  getAllUsers: async () => {
    return await UserModel.find();
  },
  createUser: async (user) => {
    console.log("user", user);
    return await UserModel.create(user);
  },
};

module.exports = UserService;
