const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("profile router"));

module.exports = router;
