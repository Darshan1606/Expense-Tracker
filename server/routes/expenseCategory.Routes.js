const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  getAllExpenseCategory,
  addExpenseCategory,
  editExpenseCategory,
  deleteExpenseCategory,
} = require("../controllers/expenseCategoryController");

router.get("/get-all", authenticateToken, getAllExpenseCategory);
router.post("/add", authenticateToken, addExpenseCategory);
router.put("/edit/:id", authenticateToken, editExpenseCategory);
router.delete("/delete/:id", authenticateToken, deleteExpenseCategory);

module.exports = router;
