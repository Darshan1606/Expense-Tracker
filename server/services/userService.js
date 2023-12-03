const UserModel = require("../models/userModel");

const UserService = {
  getAllUsers: async () => {
    return await UserModel.find();
  },
  findUser: async (data) => {
    return await UserModel.findOne(data);
  },
  createUser: async (user) => {
    return await new UserModel(user);
  },
};

module.exports = UserService;
