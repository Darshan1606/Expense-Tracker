const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const GiveTakeController = require("../controllers/giveTakeController");

router.get(
  "/give-take",
  AuthMiddleware.authenticateToken,
  GiveTakeController.getAllGiveTake
);

router.post(
  "/give-take",
  AuthMiddleware.authenticateToken,
  GiveTakeController.addGiveTake
);

router.put(
  "/give-take/:id",
  AuthMiddleware.authenticateToken,
  GiveTakeController.editGiveTake
);

router.delete(
  "/give-take/:id",
  AuthMiddleware.authenticateToken,
  GiveTakeController.deleteGiveTake
);

module.exports = router;
