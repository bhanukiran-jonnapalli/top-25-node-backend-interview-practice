const express = require("express");
const router = express.Router();
const getDashboardData = require("../controllers/userController");

router.get("/getDashboard", getDashboardData);

module.exports = router;
