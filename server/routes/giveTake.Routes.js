const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  getAllGiveTake,
  addGiveTake,
  editGiveTake,
  deleteGiveTake,
} = require("../controllers/giveTakeController");

router.post("/get-all", authenticateToken, getAllGiveTake);
router.post("/add", authenticateToken, addGiveTake);
router.put("/edit/:id", authenticateToken, editGiveTake);
router.delete("/delete/:id", authenticateToken, deleteGiveTake);

module.exports = router;
