const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/expenseController");

router.get("/expenses", ExpenseController.getAllExpenses);

module.exports = router;
