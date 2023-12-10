const IncomeModel = require("../models/incomeModal");

const IncomeService = {
  findIncomeById: async (id) => {
    return await IncomeModel.findById(id);
  },
  getAllIncome: async () => {
    return await IncomeModel.find();
  },
  addIncome: async (income) => {
    return new IncomeModel(income);
  },
  editIncome: async (id, income) => {
    return await IncomeModel.findByIdAndUpdate(
      id,
      { $set: income },
      { new: true }
    );
  },
  deleteIncome: async (id) => {
    return await IncomeModel.findByIdAndDelete(id);
  },
};

module.exports = IncomeService;
