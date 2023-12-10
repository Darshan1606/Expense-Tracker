import api from "./api";

// income
export const getAllIncome = () => {
  return api.get("/income");
};

export const addIncome = (data) => {
  return api.post("/income", data);
};

export const editIncome = (id, data) => {
  return api.put(`/income/${id}`, data);
};

export const deleteIncome = (id) => {
  console.log("id", id);
  return api.delete(`/income/${id}`);
};
