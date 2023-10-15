import api from "service/api";

export function uploadImage(data) {
  return api.post("/upload/file", data);
}
