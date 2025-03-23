const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config(); // ✅ Load env vars

const app = express(); // ✅ Must come before app.use()

// Enable CORS for Vercel frontend  
// Enable CORS for Vercel frontend
app.use(cors({
  origin: "*", // your Vercel domain
  credentials: true,
}));



app.use(express.json()); // ✅ Middleware for JSON requests

// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

// DB + Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch(err => console.error("❌ MongoDB Connection Error:", err));
