const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const expenseCategoryRoutes = require("./routes/expenseCategoryRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const giveTakeRoutes = require("./routes/giveTakeRoutes");
const dailyExpenseRoutes = require("./routes/dailyExpenseRoutes");

const port = process.env.PORT || 3000;

// express app
const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "15mb" }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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
require("./config/dbConnection");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", expenseCategoryRoutes);
app.use("/api", incomeRoutes);
app.use("/api", giveTakeRoutes);
app.use("/api", dailyExpenseRoutes);
