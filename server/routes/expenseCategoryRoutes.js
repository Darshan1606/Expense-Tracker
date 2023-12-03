const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const ExpenseCategoryController = require("../controllers/expenseCategoryController");

router.get(
  "/expense-category",
  AuthMiddleware.authenticateToken,
  ExpenseCategoryController.getAllExpenseCategory
);

router.post(
  "/expense-category",
  AuthMiddleware.authenticateToken,
  ExpenseCategoryController.addExpenseCategory
);

module.exports = router;
