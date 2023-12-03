const ExpenseCategoryModel = require("../models/expenseCategoryModal");

const ExpenseCategoryService = {
  getAllExpenseCategory: async () => {
    return await ExpenseCategoryModel.find();
  },
  addExpenseCategory: async (expenseCategory) => {
    return new ExpenseCategoryModel(expenseCategory);
  },
};

module.exports = ExpenseCategoryService;
