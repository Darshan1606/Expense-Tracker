const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    income_from: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Income = mongoose.model("income", incomeSchema);

module.exports = Income;
