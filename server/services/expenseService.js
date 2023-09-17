const ExpenseModel = require("../models/expenseModel");

const ExpenseService = {
  // get all expenses
  getAllExpenses: async () => {
    return await ExpenseModel.find();
  },
};

module.exports = ExpenseService;
