const mongoose = require("mongoose");

const expenseCategorySchema = new mongoose.Schema(
  {
    expense_category_name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExpenseCategory = mongoose.model(
  "expense_category",
  expenseCategorySchema
);

module.exports = ExpenseCategory;
