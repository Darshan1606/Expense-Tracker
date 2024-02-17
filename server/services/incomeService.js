const IncomeModel = require("../models/incomeModal");

const IncomeService = {
  findIncomeById: async (id) => {
    return await IncomeModel.findById(id);
  },
  getAllIncome: async () => {
    return await IncomeModel.find(
      {},
      { _id: 1, month: 1, year: 1, amount: 1, income_from: 1 }
    );
  },
  getAllIncomeWithPagination: async (pageNo, pageSize) => {
    return await IncomeModel.find(
      {},
      { _id: 1, month: 1, year: 1, amount: 1, income_from: 1 }
    )
      .skip((pageNo - 1) * pageSize)
      .limit(pageSize);
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
