const DailyExpenseModel = require("../models/dailyExpense.modal");

module.exports = {
  findDailyExpenseByIdService: async (id) => {
    return await DailyExpenseModel.findById(id);
  },
  getAllDailyExpenseService: async () => {
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
  addDailyExpenseService: async (expense) => {
    return new DailyExpenseModel(expense);
  },
  editDailyExpenseService: async (id, expense) => {
    return await DailyExpenseModel.findByIdAndUpdate(
      id,
      { $set: expense },
      { new: true }
    );
  },
  deleteDailyExpenseService: async (id) => {
    return await DailyExpenseModel.findByIdAndDelete(id);
  },
};
