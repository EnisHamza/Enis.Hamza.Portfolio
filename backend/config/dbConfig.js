const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url, {
  // Remove the deprecated options
});

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.error("Error connecting to Database:", err.message);
});

connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

module.exports = mongoose;
