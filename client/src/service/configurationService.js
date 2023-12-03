import api from "./api";

// expense-category
export const getAllExpenseCategory = () => {
  return api.get("/expense-category");
};

export const addExpenseCategory = (data) => {
  return api.post("/expense-category", data);
};

export const editExpenseCategory = (id, data) => {
  return api.put(`/expense-category/${id}`, data);
};

export const deleteExpenseCategory = (id) => {
  return api.delete(`/expense-category/${id}`);
};
