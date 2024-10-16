const ExpenseCategoryModel = require("../models/expenseCategory.modal");

module.exports = {
  findExpenseCategoryByIdService: async (id) => {
    return await ExpenseCategoryModel.findById(id);
  },
  getAllExpenseCategoryService: async () => {
    return await ExpenseCategoryModel.find();
  },
  addExpenseCategoryService: async (expenseCategory) => {
    return new ExpenseCategoryModel(expenseCategory);
  },
  editExpenseCategoryService: async (id, expenseCategory) => {
    return await ExpenseCategoryModel.findByIdAndUpdate(
      id,
      { $set: expenseCategory },
      { new: true }
    );
  },
  deleteExpenseCategoryService: async (id) => {
    return await ExpenseCategoryModel.findByIdAndDelete(id);
  },
};
