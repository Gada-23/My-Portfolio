const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/about", require("./routes/about"));
app.use("/api/skill", require("./routes/skill"));
app.use("/api/project", require("./routes/project"));
app.use("/api/message", require("./routes/message"));

// Start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
