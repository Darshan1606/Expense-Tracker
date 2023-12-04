const ExpenseCategoryModel = require("../models/expenseCategoryModal");

const ExpenseCategoryService = {
  findExpenseCategory: async (id) => {
    return await ExpenseCategoryModel.findById(id);
  },
  getAllExpenseCategory: async () => {
    return await ExpenseCategoryModel.find();
  },
  addExpenseCategory: async (expenseCategory) => {
    return new ExpenseCategoryModel(expenseCategory);
  },
  editExpenseCategory: async (id, expenseCategory) => {
    return await ExpenseCategoryModel.findByIdAndUpdate(
      id,
      { $set: expenseCategory },
      { new: true }
    );
  },
  deleteExpenseCategory: async (id) => {
    return await ExpenseCategoryModel.findByIdAndDelete(id);
  },
};

module.exports = ExpenseCategoryService;
