import api from "./api";

// give-take
export const getAllGiveTake = () => {
  return api.get("/give-take");
};

export const addGiveTake = (data) => {
  return api.post("/give-take", data);
};

export const editGiveTake = (id, data) => {
  return api.put(`/give-take/${id}`, data);
};

export const deleteGiveTake = (id) => {
  return api.delete(`/give-take/${id}`);
};
