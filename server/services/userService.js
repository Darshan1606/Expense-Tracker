const UserModel = require("../models/userModel");

const UserService = {
  getAllUsers: async () => {
    return await UserModel.find();
  },
  // Implement other service methods here
};

module.exports = UserService;
