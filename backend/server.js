require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/dbConfig");

const app = express();
const portfolioRoute = require("./routes/portfolioRoute"); // Import the router

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/portfolio", portfolioRoute); // Use the router as middleware

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
