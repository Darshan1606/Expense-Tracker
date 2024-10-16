const UserModel = require("../models/user.model");

module.exports = {
  getAllUsersService: async () => {
    return await UserModel.find();
  },
  findUserService: async (data) => {
    return await UserModel.findOne(data);
  },
  createUserService: async (user) => {
    return await new UserModel(user);
  },
};
