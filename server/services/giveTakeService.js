const GiveTakeModel = require("../models/giveTakeModal");

const GiveTakeService = {
  findGiveTakeById: async (id) => {
    return await GiveTakeModel.findById(id);
  },
  getAllGiveTake: async () => {
    return await GiveTakeModel.find();
  },
  addGiveTake: async (giveTake) => {
    return new GiveTakeModel(giveTake);
  },
  editGiveTake: async (id, giveTake) => {
    return await GiveTakeModel.findByIdAndUpdate(
      id,
      { $set: giveTake },
      { new: true }
    );
  },
  deleteGiveTake: async (id) => {
    console.log("ididid", id);

    return await GiveTakeModel.findByIdAndDelete(id);
  },
};

module.exports = GiveTakeService;
