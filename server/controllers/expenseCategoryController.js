const {
  getAllExpenseCategoryService,
  addExpenseCategoryService,
  findExpenseCategoryByIdService,
  editExpenseCategoryService,
  deleteExpenseCategoryService,
} = require("../services/expenseCategoryService");

module.exports = {
  getAllExpenseCategory: async (req, res) => {
    try {
      const expenseCategory = await getAllExpenseCategoryService();
      res.json({
        success: true,
        message: "get all expense categories successfully",
        result: expenseCategory,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  addExpenseCategory: async (req, res) => {
    try {
      const expenseCategory = await addExpenseCategoryService(req.body);
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
      res.json({ success: false, message: error.message });
    }
  },
  editExpenseCategory: async (req, res) => {
    try {
      let isExists = await findExpenseCategoryByIdService(req.params.id);

      if (isExists) {
        const expenseCategory = await editExpenseCategoryService(
          req.params.id,
          req.body
        );
        await expenseCategory.save();

        res.json({
          success: true,
          message: "edit expense category successfully",
          result: {
            expense_category_name: expenseCategory.expense_category_name,
            _id: expenseCategory._id,
          },
        });
      } else {
        res.json({
          success: false,
          message: "expense category not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  deleteExpenseCategory: async (req, res) => {
    try {
      let isExists = await findExpenseCategoryByIdService(req.params.id);

      if (isExists) {
        await deleteExpenseCategoryService(req.params.id);

        res.json({
          success: true,
          message: "delete expense category successfully",
        });
      } else {
        res.json({
          success: false,
          message: "expense category not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
};
