const {
  getAllIncomeService,
  getAllIncomeWithPaginationService,
  addIncomeService,
  findIncomeByIdService,
  editIncomeService,
  deleteIncomeService,
} = require("../services/incomeService");

module.exports = {
  getAllIncome: async (req, res) => {
    try {
      const pageNo = parseInt(req.query.page_no);
      const pageSize = parseInt(req.query.page_size);
      const totalData = await getAllIncomeService();
      const incomeData = await getAllIncomeWithPaginationService(
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
      const incomeData = await addIncomeService(req.body);
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
      let isExists = await findIncomeByIdService(req.params.id);

      if (isExists) {
        const incomeData = await editIncomeService(req.params.id, req.body);
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
      let isExists = await deleteIncomeService(req.params.id);

      if (isExists) {
        await deleteIncome(req.params.id);

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
