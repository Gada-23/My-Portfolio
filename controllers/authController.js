const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin Registration (Run once to create admin user)
exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ msg: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ msg: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Invalid username" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json({ msg: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.json({ token, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
