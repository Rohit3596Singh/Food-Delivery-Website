const mongoose = require("mongoose");
const fs = require("fs");
const path = require('path');

const Restaurant = require("../model/RestaurantList"); // Path to the model

// Connect to MongoDB
const mongo_url = process.env.MONGO_STR

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to import data
const importData = async () => {
  try {
    const filePath = path.join(__dirname, '../db/restaurants.json'); // Adjust path
    console.log("File path:", filePath); // Debug log
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    await Restaurant.insertMany(data);
    console.log("Data imported successfully!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
