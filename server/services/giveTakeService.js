const GiveTakeModel = require("../models/giveTake.modal");

module.exports = {
  findGiveTakeByIdService: async (id) => {
    return await GiveTakeModel.findById(id);
  },
  getAllGiveTakeService: async () => {
    return await GiveTakeModel.find();
  },
  getAllGiveTakeWithPaginationService: async (
    giveTakeText,
    pageNo,
    pageSize
  ) => {
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
  addGiveTakeService: async (giveTake) => {
    return new GiveTakeModel(giveTake);
  },
  editGiveTakeService: async (id, giveTake) => {
    return await GiveTakeModel.findByIdAndUpdate(
      id,
      { $set: giveTake },
      { new: true }
    );
  },
  deleteGiveTakeService: async (id) => {
    return await GiveTakeModel.findByIdAndDelete(id);
  },
};
