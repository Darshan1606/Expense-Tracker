const DailyExpenseModel = require("../models/dailyExpenseModal");

const DailyExpenseService = {
  findDailyExpenseById: async (id) => {
    return await DailyExpenseModel.findById(id);
  },
  getAllDailyExpense: async () => {
    return await DailyExpenseModel.find({})
      .populate("expense_category")
      .exec()
      .then((expenses) => {
        // Do something with the populated expenses
        console.log(expenses);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  addDailyExpense: async (expense) => {
    return new DailyExpenseModel(expense);
  },
  editDailyExpense: async (id, expense) => {
    return await DailyExpenseModel.findByIdAndUpdate(
      id,
      { $set: expense },
      { new: true }
    );
  },
  deleteDailyExpense: async (id) => {
    return await DailyExpenseModel.findByIdAndDelete(id);
  },
};

module.exports = DailyExpenseService;
