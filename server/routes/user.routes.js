const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller");

const authenticateToken = require("../middleware/auth.js");

// Register
router.post("/register", users.create);

// Change Password
router.post("/changePassword", authenticateToken, users.changePassword);

module.exports = router;
