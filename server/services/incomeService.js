const IncomeModel = require("../models/income.modal");

const IncomeService = {
  findIncomeByIdService: async (id) => {
    return await IncomeModel.findById(id);
  },
  getAllIncomeService: async () => {
    return await IncomeModel.find(
      {},
      { _id: 1, month: 1, year: 1, amount: 1, income_from: 1 }
    );
  },
  getAllIncomeWithPaginationService: async (pageNo, pageSize) => {
    return await IncomeModel.find(
      {},
      { _id: 1, month: 1, year: 1, amount: 1, income_from: 1 }
    )
      .sort({ year: -1, month: -1 })
      .skip((pageNo - 1) * pageSize)
      .limit(pageSize);
  },
  addIncomeService: async (income) => {
    return new IncomeModel(income);
  },
  editIncomeService: async (id, income) => {
    return await IncomeModel.findByIdAndUpdate(
      id,
      { $set: income },
      { new: true }
    );
  },
  deleteIncomeService: async (id) => {
    return await IncomeModel.findByIdAndDelete(id);
  },
};

module.exports = IncomeService;
