const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProject = async (req, res) => {
  try {
    const { title, description, techStack, image, githubLink, demoLink } =
      req.body;

    const project = new Project({
      title,
      description,
      techStack,
      image,
      githubLink,
      demoLink,
    });

    await project.save();

    res.json({ msg: "Project added", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
