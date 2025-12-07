const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      default: "Beginner", // Beginner, Intermediate, Advanced
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", SkillSchema);
