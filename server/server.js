const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const expenseCategoryRoutes = require("./routes/expenseCategoryRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const giveTakeRoutes = require("./routes/giveTakeRoutes");

const port = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URL;

// express app
const app = express();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Use the cors middleware
app.use(cors());

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
app.use("/api/auth", authRoutes);
app.use("/api", expenseCategoryRoutes);
app.use("/api", incomeRoutes);
app.use("/api", giveTakeRoutes);
