const DailyExpenseService = require("../services/dailyExpenseService");

const DailyExpenseController = {
  getAllDailyExpense: async (req, res) => {
    try {
      const expenseData = await DailyExpenseService.getAllDailyExpense();
      res.json({
        success: true,
        message: "get all expenses successfully",
        result: expenseData,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  addDailyExpense: async (req, res) => {
    try {
      const expenseData = await DailyExpenseService.addDailyExpense(req.body);
      await expenseData.save();

      res.json({
        success: true,
        message: "add expense successfully",
        result: expenseData,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  editDailyExpense: async (req, res) => {
    try {
      let isExists = await DailyExpenseService.findDailyExpenseById(
        req.params.id
      );

      if (isExists) {
        const expenseData = await DailyExpenseService.editDailyExpense(
          req.params.id,
          req.body
        );
        await expenseData.save();

        res.json({
          success: true,
          message: "edit expense successfully",
          result: expenseData,
        });
      } else {
        res.json({
          success: false,
          message: "expense not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  deleteDailyExpense: async (req, res) => {
    try {
      let isExists = await DailyExpenseService.deleteDailyExpense(
        req.params.id
      );

      if (isExists) {
        await DailyExpenseService.deleteDailyExpense(req.params.id);

        res.json({
          success: true,
          message: "delete expense successfully",
        });
      } else {
        res.json({
          success: false,
          message: "expense not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
};

module.exports = DailyExpenseController;
