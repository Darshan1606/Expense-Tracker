const ExpenseCategoryService = require("../services/expenseCategoryService");

const ExpenseCategoryController = {
  getAllExpenseCategory: async (req, res) => {
    try {
      const expenseCategory =
        await ExpenseCategoryService.getAllExpenseCategory();
      res.json({
        success: true,
        message: "get all expense categories successfully",
        result: expenseCategory,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addExpenseCategory: async (req, res) => {
    try {
      const expenseCategory = await ExpenseCategoryService.addExpenseCategory(
        req.body
      );
      await expenseCategory.save();

      res.json({
        success: true,
        message: "add expense category successfully",
        result: {
          expense_category_name: expenseCategory.expense_category_name,
          _id: expenseCategory._id,
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ExpenseCategoryController;
