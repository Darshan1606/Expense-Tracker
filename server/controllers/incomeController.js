const IncomeService = require("../services/incomeService");

const IncomeController = {
  getAllIncome: async (req, res) => {
    try {
      const pageNo = parseInt(req.query.page_no);
      const pageSize = parseInt(req.query.page_size);
      const totalData = await IncomeService.getAllIncome();
      const incomeData = await IncomeService.getAllIncomeWithPagination(
        pageNo,
        pageSize
      );
      res.json({
        success: true,
        message: "get all income successfully",
        result: incomeData,
        pagination: {
          page_no: pageNo,
          page_size: pageSize,
          total: totalData?.length,
        },
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  addIncome: async (req, res) => {
    try {
      const incomeData = await IncomeService.addIncome(req.body);
      await incomeData.save();

      res.json({
        success: true,
        message: "add income successfully",
        result: incomeData,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  editIncome: async (req, res) => {
    try {
      let isExists = await IncomeService.findIncomeById(req.params.id);

      if (isExists) {
        const incomeData = await IncomeService.editIncome(
          req.params.id,
          req.body
        );
        await incomeData.save();

        res.json({
          success: true,
          message: "edit income successfully",
          result: incomeData,
        });
      } else {
        res.json({
          success: false,
          message: "income not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  deleteIncome: async (req, res) => {
    try {
      let isExists = await IncomeService.deleteIncome(req.params.id);

      if (isExists) {
        await IncomeService.deleteIncome(req.params.id);

        res.json({
          success: true,
          message: "delete income successfully",
        });
      } else {
        res.json({
          success: false,
          message: "income not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
};

module.exports = IncomeController;
