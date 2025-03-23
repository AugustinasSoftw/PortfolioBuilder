const express = require("express");
const router = express.Router();

// Example Test Route
router.get("/", (req, res) => {
    res.send("Portfolio Routes Working!");
});

module.exports = router;
