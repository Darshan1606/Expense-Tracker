const mongoose = require("mongoose");

const dailyExpenseSchema = new mongoose.Schema(
  {
    expense_category: {
      type: mongoose.Types.ObjectId,
      ref: "expense_category",
    },
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
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

const DailyExpense = mongoose.model("daily-expense", dailyExpenseSchema);

module.exports = DailyExpense;
