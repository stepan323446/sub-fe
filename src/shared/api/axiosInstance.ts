import axios from "axios";
import { VITE_API_URL } from "@/shared/constants/environments";

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 30 * 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);
axiosInstance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("access_token");
  }

  throw error;
});

export default axiosInstance;
