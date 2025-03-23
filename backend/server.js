const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS — allow Vercel frontend
app.use(cors({
  origin: "https://e-comm-h75a.vercel.app", // Your frontend domain
  credentials: true
}));

app.use(express.json());

// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}).catch(err => console.error("❌ MongoDB Connection Error:", err));
