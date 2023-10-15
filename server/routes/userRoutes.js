// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.createUser);
// router.put("/:id", UserController.updateUser);
// router.get("/:id", UserController.getUserById);
// router.delete("/:id", UserController.deleteUser);

module.exports = router;
