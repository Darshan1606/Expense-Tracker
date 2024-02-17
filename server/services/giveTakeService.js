const GiveTakeModel = require("../models/giveTakeModal");

const GiveTakeService = {
  findGiveTakeById: async (id) => {
    return await GiveTakeModel.findById(id);
  },
  getAllGiveTake: async () => {
    return await GiveTakeModel.find();
  },
  getAllGiveTakeWithPagination: async (giveTakeText, pageNo, pageSize) => {
    return await GiveTakeModel.find(
      { give_take: { $eq: giveTakeText } },
      {
        _id: 1,
        give_take: 1,
        person_name: 1,
        amount: 1,
        date: 1,
        deadline: 1,
        description: 1,
      }
    )
      .skip((pageNo - 1) * pageSize)
      .limit(pageSize);
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
