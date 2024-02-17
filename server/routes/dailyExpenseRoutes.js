const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const DailyExpenseController = require("../controllers/dailyExpenseController");

router.get(
  "/daily-expense",
  AuthMiddleware.authenticateToken,
  DailyExpenseController.getAllDailyExpense
);

router.post(
  "/daily-expense",
  AuthMiddleware.authenticateToken,
  DailyExpenseController.addDailyExpense
);

router.put(
  "/daily-expense/:id",
  AuthMiddleware.authenticateToken,
  DailyExpenseController.editDailyExpense
);

router.delete(
  "/daily-expense/:id",
  AuthMiddleware.authenticateToken,
  DailyExpenseController.deleteDailyExpense
);

module.exports = router;
