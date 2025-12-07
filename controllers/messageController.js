const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const msg = new Message({ name, email, subject, message });
    await msg.save();

    res.json({ msg: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const msgs = await Message.find();
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
