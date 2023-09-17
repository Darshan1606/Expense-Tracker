const ExpenseService = require("../services/expenseService");

const ExpenseController = {
  getAllExpenses: async (req, res) => {
    try {
      const expenses = await ExpenseService.getAllExpenses();
      res.json({
        success: true,
        data: expenses,
        message: "Get All Expenses",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ExpenseController;
