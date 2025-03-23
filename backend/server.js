const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(express.json()); // Allows parsing of JSON body requests
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

  const userRoutes = require("./src/routes/userRoutes"); // Ensure this path is correct
  const portfolioRoutes = require("./src/routes/portfolioRoutes");
  
  app.use("/api/users", userRoutes);
  app.use("/api/portfolios", portfolioRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
