const GiveTakeService = require("../services/giveTakeService");

const GiveTakeController = {
  getAllGiveTake: async (req, res) => {
    try {
      const giveTakeData = await GiveTakeService.getAllGiveTake();
      res.json({
        success: true,
        message: "get all give take successfully",
        result: giveTakeData,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  addGiveTake: async (req, res) => {
    try {
      const giveTakeData = await GiveTakeService.addGiveTake(req.body);
      await giveTakeData.save();

      res.json({
        success: true,
        message: "add give take successfully",
        result: giveTakeData,
      });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  editGiveTake: async (req, res) => {
    try {
      let isExists = await GiveTakeService.findGiveTakeById(req.params.id);

      if (isExists) {
        const giveTakeData = await GiveTakeService.editGiveTake(
          req.params.id,
          req.body
        );
        await giveTakeData.save();

        res.json({
          success: true,
          message: "edit give take successfully",
          result: giveTakeData,
        });
      } else {
        res.json({
          success: false,
          message: "give take not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
  deleteGiveTake: async (req, res) => {
    try {
      console.log("req.params.i", req.params.i);
      let isExists = await GiveTakeService.findGiveTakeById(req.params.id);
      console.log("isExists", isExists);
      if (isExists) {
        await GiveTakeService.deleteGiveTake(req.params.id);

        res.json({
          success: true,
          message: "delete give take successfully",
        });
      } else {
        res.json({
          success: false,
          message: "give take not found",
        });
      }
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
};

module.exports = GiveTakeController;
