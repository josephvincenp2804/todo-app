const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", todoRoutes);

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
