const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageController");

router.get("/", authMiddleware, getMessages);

router.post("/", sendMessage);
router.get("/", getMessages); // admin only in the future

module.exports = router;
