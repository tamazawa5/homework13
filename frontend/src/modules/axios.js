import axios from "axios";
import { API_URL } from "@constants/path";

// Set up Axios instance
const instance = axios.create({ baseURL: API_URL });

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance };
