import api from "./api";

// income
export const getAllIncome = (pageNo, pageSize) => {
  return api.get(`/income?page_no=${pageNo}&page_size=${pageSize}`);
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
