const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  getAllIncome,
  addIncome,
  editIncome,
  deleteIncome,
} = require("../controllers/incomeController");
const { ValidateBody } = require("../validation/user.validation");
const { incomeSchema } = require("../validation/validation.schema");

router.get("/get-all", authenticateToken, getAllIncome);
router.post("/add", authenticateToken, ValidateBody(incomeSchema), addIncome);
router.put(
  "/edit/:id",
  authenticateToken,
  ValidateBody(incomeSchema),
  editIncome
);
router.delete("/delete/:id", authenticateToken, deleteIncome);

module.exports = router;
