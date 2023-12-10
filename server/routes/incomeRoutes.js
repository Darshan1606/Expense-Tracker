const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const IncomeController = require("../controllers/incomeController");

router.get(
  "/income",
  AuthMiddleware.authenticateToken,
  IncomeController.getAllIncome
);

router.post(
  "/income",
  AuthMiddleware.authenticateToken,
  IncomeController.addIncome
);

router.put(
  "/income/:id",
  AuthMiddleware.authenticateToken,
  IncomeController.editIncome
);

router.delete(
  "/income/:id",
  AuthMiddleware.authenticateToken,
  IncomeController.deleteIncome
);

module.exports = router;
