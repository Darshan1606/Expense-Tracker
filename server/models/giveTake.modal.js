const mongoose = require("mongoose");

const giveTakeSchema = new mongoose.Schema(
  {
    give_take: {
      type: String,
      required: true,
    },
    person_name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    deadline: {
      type: Date,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GiveTake = mongoose.model("give-take", giveTakeSchema);

module.exports = GiveTake;
