const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const port = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URL;

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url} - ${req.path}`);
  next();
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// connect to mongodb & listen for requests
mongoose
  .connect(dbURL)
  .then(() => {
    // listen for requests
    console.log("DB Connnected...");
  })
  .catch((err) => console.log(err));

// Routes
app.use("/api", userRoutes);
app.use("/api", expenseRoutes);
