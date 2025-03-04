const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const admin = require("./config/firebaseAdmin");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Log the port to confirm it's set correctly
console.log(`Starting Cryptique API on PORT: ${PORT}`);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World! Cryptique API is running." });
});

// Firebase Auth Test Route
app.get("/auth/test", async (req, res) => {
  try {
    const users = await admin.auth().listUsers(10);
    res.json({ users: users.users.map(user => user.toJSON()) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
