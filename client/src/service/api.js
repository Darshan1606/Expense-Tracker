import axios from "axios";
import { BACKEND_SERVER_URL } from "constants/api.constant";
import { PERSIST_STORE_NAME } from "constants/app.constant";
import deepParseJson from "utils/deepParseJson";

const api = axios.create({
  baseURL: `${BACKEND_SERVER_URL}`,
});

// Add a request interceptor
api.interceptors.request.use(
  async function (config) {
    if (config.url === "/auth/login") {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    } else {
      const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
      const persistData = deepParseJson(rawPersistData);
      const token = persistData?.auth?.session?.token;
      config.headers = {
        token: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        // "Cache-Control":
        //   "no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate",
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  async function (response) {
    // Do something with response data
    const result = response.data;
    return result;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
