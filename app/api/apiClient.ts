// utils/apiClient.ts
import axios from "axios";

export const apiClient = axios.create({
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,

});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.message;
    // 👉 Check for expired token
    if (
      message &&
      (message.includes("jwt expired") ||
        message.includes("TokenExpiredError"))
    ) {
      // Remove stored token (if stored in localStorage)
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
      }

      // Redirect to login page
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;