/** @format */

import axios from "axios";
import store from "../store";

// const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const user = store.getters.user;
  if (user && user.token) {
    req.headers.authorization = `Bearer ${user.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.error(error.response);
    const { status } = error.res;
    if (status === 500 || status === 400) {
      localStorage.clear();
      store.dispatch({ type: "LOGOUT_SUCCESS" });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
