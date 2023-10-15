import api from "service/api";

export function login(data) {
  return api.post("/auth/login", data);
}

export function forgotPassword(data) {
  return api.post(`/auth/forgotPassword`, data);
}

export function verifyOTP(data) {
  return api.post(`/auth/verifyOtp`, data);
}

export function resetPassword(data) {
  return api.post(`/auth/resetPassword`, data);
}
