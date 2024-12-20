const express = require("express");
const router = express.Router();
const { login, signUp } = require("../controllers/authController");

router.post("/login", login);
router.post("/sign-up", signUp);

module.exports = router;
