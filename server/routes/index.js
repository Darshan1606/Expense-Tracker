const authRoutes = require("./auth.Routes");
const expenseCategoryRoutes = require("./expenseCategory.Routes");
const incomeRoutes = require("./income.Routes");
const giveTakeRoutes = require("./giveTake.Routes");
const dailyExpenseRoutes = require("./dailyExpense.Routes");

module.exports = {
  // api routes
  apiRoutes: (app) => {
    app.use("/api/auth", authRoutes);
    app.use("/api/expense-category", expenseCategoryRoutes);
    app.use("/api/income", incomeRoutes);
    app.use("/api/give-take", giveTakeRoutes);
    app.use("/api/daily-expense", dailyExpenseRoutes);
  },
};
