const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  getAllDailyExpense,
  addDailyExpense,
  editDailyExpense,
  deleteDailyExpense,
} = require("../controllers/dailyExpenseController");

router.get("/get-all", authenticateToken, getAllDailyExpense);
router.post("/add", authenticateToken, addDailyExpense);
router.put("/edit/:id", authenticateToken, editDailyExpense);
router.delete("/delete/:id", authenticateToken, deleteDailyExpense);

module.exports = router;
