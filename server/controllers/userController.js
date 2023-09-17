// src/controllers/userController.js
const UserService = require("../services/userService");

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // Implement other controller methods here
};

module.exports = UserController;
