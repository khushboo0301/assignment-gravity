// src/api.ts
import axios from "axios";

// Set up a base URL for all requests
const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Optional: Add a request interceptor (e.g., to attach tokens)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error globally
            console.error("Unauthorized. Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export default api;
