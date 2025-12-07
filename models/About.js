const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    description: String,
    profileImage: String, // Cloudinary URL
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", AboutSchema);
