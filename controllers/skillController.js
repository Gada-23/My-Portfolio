const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addSkill = async (req, res) => {
  try {
    const { name, level } = req.body;

    const skill = new Skill({ name, level });
    await skill.save();

    res.json({ msg: "Skill added", skill });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ msg: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
