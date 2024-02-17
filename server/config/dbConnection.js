require("dotenv").config();
const mongoose = require("mongoose");

const dbURL = process.env.MONGO_URL;

const dbConnection = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection established...");
  } catch (err) {
    console.log(err);
    console.log("Error connecting DB!");
  }
};

module.exports = dbConnection();
