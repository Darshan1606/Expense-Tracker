const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const IncomeController = require("../controllers/incomeController");
const { ValidateBody } = require("../validation/user.validation");
const { incomeSchema } = require("../validation/validation.schema");

router.get(
  "/income",
  AuthMiddleware.authenticateToken,
  IncomeController.getAllIncome
);

router.post(
  "/income",
  ValidateBody(incomeSchema),
  AuthMiddleware.authenticateToken,
  IncomeController.addIncome
);

router.put(
  "/income/:id",
  ValidateBody(incomeSchema),
  AuthMiddleware.authenticateToken,
  IncomeController.editIncome
);

router.delete(
  "/income/:id",
  AuthMiddleware.authenticateToken,
  IncomeController.deleteIncome
);

module.exports = router;
