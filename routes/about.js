const express = require("express");
const router = express.Router();
const { getAbout, updateAbout } = require("../controllers/aboutController");

const authMiddleware = require("../middleware/authMiddleware");
router.put("/", authMiddleware, updateAbout);

router.get("/", getAbout);
router.put("/", updateAbout);

module.exports = router;
