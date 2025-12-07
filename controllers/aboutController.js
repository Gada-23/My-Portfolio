const About = require("../models/About");

exports.getAbout = async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    const { name, title, description, profileImage } = req.body;

    const about = await About.findOneAndUpdate(
      {},
      { name, title, description, profileImage },
      { new: true, upsert: true }
    );

    res.json({ msg: "About updated", about });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
