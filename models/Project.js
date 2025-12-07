const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    techStack: [String],
    image: String, // Cloudinary URL
    githubLink: String,
    demoLink: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
